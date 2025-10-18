(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const Rs=!1;var Fn=Array.isArray,Zi=Array.prototype.indexOf,qa=Array.from,Ta=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,Xi=Object.getOwnPropertyDescriptors,Fi=Object.prototype,eo=Array.prototype,qs=Object.getPrototypeOf,is=Object.isExtensible;function bn(e){return typeof e=="function"}const ne=()=>{};function to(e){for(var t=0;t<e.length;t++)e[t]()}function Os(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function Na(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const st=2,Oa=4,La=8,Wr=16,nr=32,zr=64,Ba=128,wt=256,Jn=512,Ue=1024,dt=2048,wr=4096,It=8192,Vr=16384,Wa=32768,Gr=65536,os=1<<17,ro=1<<18,cn=1<<19,no=1<<20,$a=1<<21,ea=1<<22,jr=1<<23,Rr=Symbol("$state"),Ls=Symbol("legacy props"),ao=Symbol(""),En=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Bs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function so(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function io(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function oo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function lo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function co(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function uo(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function vo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function fo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ho(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function po(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ta=1,ra=2,Ws=4,_o=8,mo=16,go=1,bo=2,yo=4,wo=8,xo=16,So=1,Po=2,qe=Symbol(),ko="http://www.w3.org/1999/xhtml",Eo="http://www.w3.org/2000/svg",To="@attach";function No(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function $o(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Ao=!1;function zs(e){return e===this.v}function Mo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Vs(e){return!Mo(e,this.v)}let un=!1,Co=!1;function Io(){un=!0}let Ce=null;function nn(e){Ce=e}function Y(e,t=!1,r){Ce={p:Ce,c:null,e:null,s:e,x:null,l:un&&!t?{s:null,u:null,$:[]}:null}}function Z(e){var t=Ce,r=t.e;if(r!==null){t.e=null;for(var n of r)ai(n)}return Ce=t.p,{}}function jn(){return!un||Ce!==null&&Ce.l===null}let Ir=[];function Gs(){var e=Ir;Ir=[],to(e)}function Or(e){if(Ir.length===0&&!Tn){var t=Ir;queueMicrotask(()=>{t===Ir&&Gs()})}Ir.push(e)}function Do(){for(;Ir.length>0;)Gs()}const jo=new WeakMap;function Us(e){var t=X;if(t===null)return F.f|=jr,e;if((t.f&Wa)===0){if((t.f&Ba)===0)throw!t.parent&&e instanceof Error&&Qs(e),e;t.b.error(e)}else an(e,t)}function an(e,t){for(;t!==null;){if((t.f&Ba)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&Qs(e),e}function Qs(e){const t=jo.get(e);t&&(Ta(e,"message",{value:t.message}),Ta(e,"stack",{value:t.stack}))}const Qn=new Set;let he=null,Kn=null,Aa=new Set,Ut=[],na=null,Ma=!1,Tn=!1;class yt{current=new Map;#t=new Map;#r=new Set;#a=0;#n=null;#c=[];#s=[];#o=[];#i=[];#l=[];#u=[];skipped_effects=new Set;process(t){Ut=[],Kn=null;var r=yt.apply(this);for(const i of t)this.#f(i);if(this.#a===0){this.#h();var n=this.#s,s=this.#o;this.#s=[],this.#o=[],this.#i=[],Kn=this,he=null,ls(n),ls(s),Kn=null,this.#n?.resolve()}else this.#v(this.#s),this.#v(this.#o),this.#v(this.#i);r();for(const i of this.#c)Cn(i);this.#c=[]}#f(t){t.f^=Ue;for(var r=t.first;r!==null;){var n=r.f,s=(n&(nr|zr))!==0,i=s&&(n&Ue)!==0,o=i||(n&It)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=Ue:(n&Oa)!==0?this.#o.push(r):(n&Ue)===0&&((n&ea)!==0&&r.b?.is_pending()?this.#c.push(r):la(r)&&((r.f&Wr)!==0&&this.#i.push(r),Cn(r)));var c=r.first;if(c!==null){r=c;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#v(t){for(const r of t)((r.f&dt)!==0?this.#l:this.#u).push(r),Xe(r,Ue);t.length=0}capture(t,r){this.#t.has(t)||this.#t.set(t,r),this.current.set(t,t.v)}activate(){he=this}deactivate(){he=null}flush(){if(Ut.length>0){if(this.activate(),Hs(),he!==null&&he!==this)return}else this.#a===0&&this.#h();this.deactivate();for(const t of Aa)if(Aa.delete(t),t(),he!==null)break}#h(){for(const t of this.#r)t();if(this.#r.clear(),Qn.size>1){this.#t.clear();let t=!0;for(const r of Qn){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;Ks(n)}if(Ut.length>0){he=r;const n=yt.apply(r);for(const s of Ut)r.#f(s);Ut=[],n()}}he=null}Qn.delete(this)}increment(){this.#a+=1}decrement(){this.#a-=1;for(const t of this.#l)Xe(t,dt),Lr(t);for(const t of this.#u)Xe(t,wr),Lr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#n??=Os()).promise}static ensure(){if(he===null){const t=he=new yt;Qn.add(he),Tn||yt.enqueue(()=>{he===t&&t.flush()})}return he}static enqueue(t){Or(t)}static apply(t){return ne}}function Ro(e){var t=Tn;Tn=!0;try{for(var r;;){if(Do(),Ut.length===0&&(he?.flush(),Ut.length===0))return na=null,r;Hs()}}finally{Tn=t}}function Hs(){var e=rn;Ma=!0;try{var t=0;for(vs(!0);Ut.length>0;){var r=yt.ensure();if(t++>1e3){var n,s;qo()}r.process(Ut),br.clear()}}finally{Ma=!1,vs(e),na=null}}function qo(){try{co()}catch(e){an(e,na)}}let Cr=null;function ls(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Vr|It))===0&&la(n)&&(Cr=[],Cn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?oi(n):n.fn=null),Cr?.length>0)){br.clear();for(const s of Cr)Cn(s);Cr=[]}}Cr=null}}function Ks(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&st)!==0?Ks(t):(r&(ea|Wr))!==0&&(Xe(t,dt),Lr(t))}}function Lr(e){for(var t=na=e;t.parent!==null;){t=t.parent;var r=t.f;if(Ma&&t===X&&(r&Wr)!==0)return;if((r&(zr|nr))!==0){if((r&Ue)===0)return;t.f^=Ue}}Ut.push(t)}function za(e){let t=0,r=Br(0),n;return()=>{Fo()&&(a(r),Ka(()=>(t===0&&(n=dn(()=>e(()=>Nn(r)))),t+=1,()=>{Or(()=>{t-=1,t===0&&(n?.(),n=void 0,Nn(r))})})))}}var Oo=Gr|cn|Ba;function Lo(e,t,r){new Bo(e,t,r)}class Bo{parent;#t=!1;#r;#a=null;#n;#c;#s;#o=null;#i=null;#l=null;#u=null;#f=0;#v=0;#h=!1;#e=null;#b=()=>{this.#e&&sn(this.#e,this.#f)};#y=za(()=>(this.#e=Br(this.#f),()=>{this.#e=null}));constructor(t,r,n){this.#r=t,this.#n=r,this.#c=n,this.parent=X.b,this.#t=!!this.#n.pending,this.#s=Sr(()=>{X.b=this;{try{this.#o=Ge(()=>n(this.#r))}catch(s){this.error(s)}this.#v>0?this.#_():this.#t=!1}},Oo)}#w(){try{this.#o=Ge(()=>this.#c(this.#r))}catch(t){this.error(t)}this.#t=!1}#x(){const t=this.#n.pending;t&&(this.#i=Ge(()=>t(this.#r)),yt.enqueue(()=>{this.#o=this.#p(()=>(yt.ensure(),Ge(()=>this.#c(this.#r)))),this.#v>0?this.#_():(yr(this.#i,()=>{this.#i=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#p(t){var r=X,n=F,s=Ce;Qt(this.#s),at(this.#s),nn(this.#s.ctx);try{return t()}catch(i){return Us(i),null}finally{Qt(r),at(n),nn(s)}}#_(){const t=this.#n.pending;this.#o!==null&&(this.#u=document.createDocumentFragment(),Wo(this.#o,this.#u)),this.#i===null&&(this.#i=Ge(()=>t(this.#r)))}#g(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#g(t);return}this.#v+=t,this.#v===0&&(this.#t=!1,this.#i&&yr(this.#i,()=>{this.#i=null}),this.#u&&(this.#r.before(this.#u),this.#u=null),Or(()=>{yt.ensure().flush()}))}update_pending_count(t){this.#g(t),this.#f+=t,Aa.add(this.#b)}get_effect_pending(){return this.#y(),a(this.#e)}error(t){var r=this.#n.onerror;let n=this.#n.failed;if(this.#h||!r&&!n)throw t;this.#o&&(Be(this.#o),this.#o=null),this.#i&&(Be(this.#i),this.#i=null),this.#l&&(Be(this.#l),this.#l=null);var s=!1,i=!1;const o=()=>{if(s){$o();return}s=!0,i&&po(),yt.ensure(),this.#f=0,this.#l!==null&&yr(this.#l,()=>{this.#l=null}),this.#t=this.has_pending_snippet(),this.#o=this.#p(()=>(this.#h=!1,Ge(()=>this.#c(this.#r)))),this.#v>0?this.#_():this.#t=!1};var c=F;try{at(null),i=!0,r?.(t,o),i=!1}catch(u){an(u,this.#s&&this.#s.parent)}finally{at(c)}n&&Or(()=>{this.#l=this.#p(()=>{this.#h=!0;try{return Ge(()=>{n(this.#r,()=>t,()=>o)})}catch(u){return an(u,this.#s.parent),null}finally{this.#h=!1}})})}}function Wo(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:Rn(r);t.append(r),r=s}}function Js(e,t,r){const n=jn()?aa:Va;if(t.length===0){r(e.map(n));return}var s=he,i=X,o=zo();Promise.all(t.map(c=>Vo(c))).then(c=>{o();try{r([...e.map(n),...c])}catch(u){(i.f&Vr)===0&&an(u,i)}s?.deactivate(),Ys()}).catch(c=>{an(c,i)})}function zo(){var e=X,t=F,r=Ce,n=he;return function(){Qt(e),at(t),nn(r),n?.activate()}}function Ys(){Qt(null),at(null),nn(null)}function aa(e){var t=st|dt,r=F!==null&&(F.f&st)!==0?F:null;return X===null||r!==null&&(r.f&wt)!==0?t|=wt:X.f|=cn,{ctx:Ce,deps:null,effects:null,equals:zs,f:t,fn:e,reactions:null,rv:0,v:qe,wv:0,parent:r??X,ac:null}}function Vo(e,t){let r=X;r===null&&so();var n=r.b,s=void 0,i=Br(qe),o=!F,c=new Map;return tl(()=>{var u=Os();s=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(m){u.reject(m)}var v=he,h=n.is_pending();o&&(n.update_pending_count(1),h||(v.increment(),c.get(v)?.reject(En),c.set(v,u)));const _=(m,p=void 0)=>{h||v.activate(),p?p!==En&&(i.f|=jr,sn(i,p)):((i.f&jr)!==0&&(i.f^=jr),sn(i,m)),o&&(n.update_pending_count(-1),h||v.decrement()),Ys()};u.promise.then(_,m=>_(null,m||"unknown"))}),ni(()=>{for(const u of c.values())u.reject(En)}),new Promise(u=>{function v(h){function _(){h===s?u(i):v(s)}h.then(_,_)}v(s)})}function J(e){const t=aa(e);return ui(t),t}function Va(e){const t=aa(e);return t.equals=Vs,t}function Zs(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Be(t[r])}}function Go(e){for(var t=e.parent;t!==null;){if((t.f&st)===0)return t;t=t.parent}return null}function Ga(e){var t,r=X;Qt(Go(e));try{Zs(e),t=hi(e)}finally{Qt(r)}return t}function Xs(e){var t=Ga(e);if(e.equals(t)||(e.v=t,e.wv=vi()),!Ur){var r=(mr||(e.f&wt)!==0)&&e.deps!==null?wr:Ue;Xe(e,r)}}const br=new Map;function Br(e,t){var r={f:0,v:e,reactions:null,equals:zs,rv:0,wv:0};return r}function re(e,t){const r=Br(e);return ui(r),r}function Uo(e,t=!1,r=!0){const n=Br(e);return t||(n.equals=Vs),un&&r&&Ce!==null&&Ce.l!==null&&(Ce.l.s??=[]).push(n),n}function x(e,t,r=!1){F!==null&&(!Ct||(F.f&os)!==0)&&jn()&&(F.f&(st|Wr|ea|os))!==0&&!rr?.includes(e)&&ho();let n=r?ut(t):t;return sn(e,n)}function sn(e,t){if(!e.equals(t)){var r=e.v;Ur?br.set(e,t):br.set(e,r),e.v=t;var n=yt.ensure();n.capture(e,r),(e.f&st)!==0&&((e.f&dt)!==0&&Ga(e),Xe(e,(e.f&wt)===0?Ue:wr)),e.wv=vi(),Fs(e,dt),jn()&&X!==null&&(X.f&Ue)!==0&&(X.f&(nr|zr))===0&&(gt===null?al([e]):gt.push(e))}return t}function Nn(e){x(e,e.v+1)}function Fs(e,t){var r=e.reactions;if(r!==null)for(var n=jn(),s=r.length,i=0;i<s;i++){var o=r[i],c=o.f;if(!(!n&&o===X)){var u=(c&dt)===0;u&&Xe(o,t),(c&st)!==0?Fs(o,wr):u&&((c&Wr)!==0&&Cr!==null&&Cr.push(o),Lr(o))}}}function ut(e){if(typeof e!="object"||e===null||Rr in e)return e;const t=qs(e);if(t!==Fi&&t!==eo)return e;var r=new Map,n=Fn(e),s=re(0),i=qr,o=c=>{if(qr===i)return c();var u=F,v=qr;at(null),hs(i);var h=c();return at(u),hs(v),h};return n&&r.set("length",re(e.length)),new Proxy(e,{defineProperty(c,u,v){(!("value"in v)||v.configurable===!1||v.enumerable===!1||v.writable===!1)&&vo();var h=r.get(u);return h===void 0?h=o(()=>{var _=re(v.value);return r.set(u,_),_}):x(h,v.value,!0),!0},deleteProperty(c,u){var v=r.get(u);if(v===void 0){if(u in c){const h=o(()=>re(qe));r.set(u,h),Nn(s)}}else x(v,qe),Nn(s);return!0},get(c,u,v){if(u===Rr)return e;var h=r.get(u),_=u in c;if(h===void 0&&(!_||gr(c,u)?.writable)&&(h=o(()=>{var p=ut(_?c[u]:qe),g=re(p);return g}),r.set(u,h)),h!==void 0){var m=a(h);return m===qe?void 0:m}return Reflect.get(c,u,v)},getOwnPropertyDescriptor(c,u){var v=Reflect.getOwnPropertyDescriptor(c,u);if(v&&"value"in v){var h=r.get(u);h&&(v.value=a(h))}else if(v===void 0){var _=r.get(u),m=_?.v;if(_!==void 0&&m!==qe)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return v},has(c,u){if(u===Rr)return!0;var v=r.get(u),h=v!==void 0&&v.v!==qe||Reflect.has(c,u);if(v!==void 0||X!==null&&(!h||gr(c,u)?.writable)){v===void 0&&(v=o(()=>{var m=h?ut(c[u]):qe,p=re(m);return p}),r.set(u,v));var _=a(v);if(_===qe)return!1}return h},set(c,u,v,h){var _=r.get(u),m=u in c;if(n&&u==="length")for(var p=v;p<_.v;p+=1){var g=r.get(p+"");g!==void 0?x(g,qe):p in c&&(g=o(()=>re(qe)),r.set(p+"",g))}if(_===void 0)(!m||gr(c,u)?.writable)&&(_=o(()=>re(void 0)),x(_,ut(v)),r.set(u,_));else{m=_.v!==qe;var E=o(()=>ut(v));x(_,E)}var S=Reflect.getOwnPropertyDescriptor(c,u);if(S?.set&&S.set.call(h,v),!m){if(n&&typeof u=="string"){var N=r.get("length"),q=Number(u);Number.isInteger(q)&&q>=N.v&&x(N,q+1)}Nn(s)}return!0},ownKeys(c){a(s);var u=Reflect.ownKeys(c).filter(_=>{var m=r.get(_);return m===void 0||m.v!==qe});for(var[v,h]of r)h.v!==qe&&!(v in c)&&u.push(v);return u},setPrototypeOf(){fo()}})}function cs(e){try{if(e!==null&&typeof e=="object"&&Rr in e)return e[Rr]}catch{}return e}function Qo(e,t){return Object.is(cs(e),cs(t))}var us,ei,ti,ri;function Ho(){if(us===void 0){us=window,ei=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;ti=gr(t,"firstChild").get,ri=gr(t,"nextSibling").get,is(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),is(r)&&(r.__t=void 0)}}function xr(e=""){return document.createTextNode(e)}function on(e){return ti.call(e)}function Rn(e){return ri.call(e)}function l(e,t){return on(e)}function G(e,t=!1){{var r=on(e);return r instanceof Comment&&r.data===""?Rn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=Rn(n);return n}function Ko(e){e.textContent=""}function Ua(){return!1}function Jo(e,t){if(t){const r=document.body;e.autofocus=!0,Or(()=>{document.activeElement===r&&e.focus()})}}let ds=!1;function Yo(){ds||(ds=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function sa(e){var t=F,r=X;at(null),Qt(null);try{return e()}finally{at(t),Qt(r)}}function Qa(e,t,r,n=r){e.addEventListener(t,()=>sa(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),Yo()}function Zo(e){X===null&&F===null&&lo(),F!==null&&(F.f&wt)!==0&&X===null&&oo(),Ur&&io()}function Xo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function ar(e,t,r,n=!0){var s=X;s!==null&&(s.f&It)!==0&&(e|=It);var i={ctx:Ce,deps:null,nodes_start:null,nodes_end:null,f:e|dt,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Cn(i),i.f|=Wa}catch(u){throw Be(i),u}else t!==null&&Lr(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&cn)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&Xo(o,s),F!==null&&(F.f&st)!==0&&(e&zr)===0)){var c=F;(c.effects??=[]).push(o)}}return i}function Fo(){return F!==null&&!Ct}function ni(e){const t=ar(La,null,!1);return Xe(t,Ue),t.teardown=e,t}function ia(e){Zo();var t=X.f,r=!F&&(t&nr)!==0&&(t&Wa)===0;if(r){var n=Ce;(n.e??=[]).push(e)}else return ai(e)}function ai(e){return ar(Oa|no,e,!1)}function el(e){yt.ensure();const t=ar(zr|cn,e,!0);return(r={})=>new Promise(n=>{r.outro?yr(t,()=>{Be(t),n(void 0)}):(Be(t),n(void 0))})}function Ha(e){return ar(Oa,e,!1)}function tl(e){return ar(ea|cn,e,!0)}function Ka(e,t=0){return ar(La|t,e,!0)}function R(e,t=[],r=[]){Js(t,r,n=>{ar(La,()=>e(...n.map(a)),!0)})}function Sr(e,t=0){var r=ar(Wr|t,e,!0);return r}function Ge(e,t=!0){return ar(nr|cn,e,!0,t)}function si(e){var t=e.teardown;if(t!==null){const r=Ur,n=F;fs(!0),at(null);try{t.call(null)}finally{fs(r),at(n)}}}function ii(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&sa(()=>{s.abort(En)});var n=r.next;(r.f&zr)!==0?r.parent=null:Be(r,t),r=n}}function rl(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&nr)===0&&Be(t),t=r}}function Be(e,t=!0){var r=!1;(t||(e.f&ro)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(nl(e.nodes_start,e.nodes_end),r=!0),ii(e,t&&!r),Yn(e,0),Xe(e,Vr);var n=e.transitions;if(n!==null)for(const i of n)i.stop();si(e);var s=e.parent;s!==null&&s.first!==null&&oi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function nl(e,t){for(;e!==null;){var r=e===t?null:Rn(e);e.remove(),e=r}}function oi(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function yr(e,t){var r=[];Ja(e,r,!0),li(r,()=>{Be(e),t&&t()})}function li(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function Ja(e,t,r){if((e.f&It)===0){if(e.f^=It,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,i=(n.f&Gr)!==0||(n.f&nr)!==0;Ja(n,t,i?r:!1),n=s}}}function oa(e){ci(e,!0)}function ci(e,t){if((e.f&It)!==0){e.f^=It,(e.f&Ue)===0&&(Xe(e,dt),Lr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&Gr)!==0||(r.f&nr)!==0;ci(r,s?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let rn=!1;function vs(e){rn=e}let Ur=!1;function fs(e){Ur=e}let F=null,Ct=!1;function at(e){F=e}let X=null;function Qt(e){X=e}let rr=null;function ui(e){F!==null&&(rr===null?rr=[e]:rr.push(e))}let Ze=null,ct=0,gt=null;function al(e){gt=e}let di=1,Mn=0,qr=Mn;function hs(e){qr=e}let mr=!1;function vi(){return++di}function la(e){var t=e.f;if((t&dt)!==0)return!0;if((t&wr)!==0){var r=e.deps,n=(t&wt)!==0;if(r!==null){var s,i,o=(t&Jn)!==0,c=n&&X!==null&&!mr,u=r.length;if((o||c)&&(X===null||(X.f&Vr)===0)){var v=e,h=v.parent;for(s=0;s<u;s++)i=r[s],(o||!i?.reactions?.includes(v))&&(i.reactions??=[]).push(v);o&&(v.f^=Jn),c&&h!==null&&(h.f&wt)===0&&(v.f^=wt)}for(s=0;s<u;s++)if(i=r[s],la(i)&&Xs(i),i.wv>e.wv)return!0}(!n||X!==null&&!mr)&&Xe(e,Ue)}return!1}function fi(e,t,r=!0){var n=e.reactions;if(n!==null&&!rr?.includes(e))for(var s=0;s<n.length;s++){var i=n[s];(i.f&st)!==0?fi(i,t,!1):t===i&&(r?Xe(i,dt):(i.f&Ue)!==0&&Xe(i,wr),Lr(i))}}function hi(e){var t=Ze,r=ct,n=gt,s=F,i=mr,o=rr,c=Ce,u=Ct,v=qr,h=e.f;Ze=null,ct=0,gt=null,mr=(h&wt)!==0&&(Ct||!rn||F===null),F=(h&(nr|zr))===0?e:null,rr=null,nn(e.ctx),Ct=!1,qr=++Mn,e.ac!==null&&(sa(()=>{e.ac.abort(En)}),e.ac=null);try{e.f|=$a;var _=e.fn,m=_(),p=e.deps;if(Ze!==null){var g;if(Yn(e,ct),p!==null&&ct>0)for(p.length=ct+Ze.length,g=0;g<Ze.length;g++)p[ct+g]=Ze[g];else e.deps=p=Ze;if(!mr||(h&st)!==0&&e.reactions!==null)for(g=ct;g<p.length;g++)(p[g].reactions??=[]).push(e)}else p!==null&&ct<p.length&&(Yn(e,ct),p.length=ct);if(jn()&&gt!==null&&!Ct&&p!==null&&(e.f&(st|wr|dt))===0)for(g=0;g<gt.length;g++)fi(gt[g],e);return s!==null&&s!==e&&(Mn++,gt!==null&&(n===null?n=gt:n.push(...gt))),(e.f&jr)!==0&&(e.f^=jr),m}catch(E){return Us(E)}finally{e.f^=$a,Ze=t,ct=r,gt=n,F=s,mr=i,rr=o,nn(c),Ct=u,qr=v}}function sl(e,t){let r=t.reactions;if(r!==null){var n=Zi.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&st)!==0&&(Ze===null||!Ze.includes(t))&&(Xe(t,wr),(t.f&(wt|Jn))===0&&(t.f^=Jn),Zs(t),Yn(t,0))}function Yn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)sl(e,r[n])}function Cn(e){var t=e.f;if((t&Vr)===0){Xe(e,Ue);var r=X,n=rn;X=e,rn=!0;try{(t&Wr)!==0?rl(e):ii(e),si(e);var s=hi(e);e.teardown=typeof s=="function"?s:null,e.wv=di;var i;Rs&&Co&&(e.f&dt)!==0&&e.deps}finally{rn=n,X=r}}}async function il(){await Promise.resolve(),Ro()}function a(e){var t=e.f,r=(t&st)!==0;if(F!==null&&!Ct){var n=X!==null&&(X.f&Vr)!==0;if(!n&&!rr?.includes(e)){var s=F.deps;if((F.f&$a)!==0)e.rv<Mn&&(e.rv=Mn,Ze===null&&s!==null&&s[ct]===e?ct++:Ze===null?Ze=[e]:(!mr||!Ze.includes(e))&&Ze.push(e));else{(F.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[F]:i.includes(F)||i.push(F)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,c=o.parent;c!==null&&(c.f&wt)===0&&(o.f^=wt)}if(Ur){if(br.has(e))return br.get(e);if(r){o=e;var u=o.v;return((o.f&Ue)===0&&o.reactions!==null||pi(o))&&(u=Ga(o)),br.set(o,u),u}}else r&&(o=e,la(o)&&Xs(o));if((e.f&jr)!==0)throw e.v;return e.v}function pi(e){if(e.v===qe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(br.has(t)||(t.f&st)!==0&&pi(t))return!0;return!1}function dn(e){var t=Ct;try{return Ct=!0,e()}finally{Ct=t}}const ol=-7169;function Xe(e,t){e.f=e.f&ol|t}function ll(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const cl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ul(e){return cl.includes(e)}const dl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function vl(e){return e=e.toLowerCase(),dl[e]??e}const fl=["touchstart","touchmove"];function hl(e){return fl.includes(e)}const _i=new Set,Ca=new Set;function mi(e,t,r,n={}){function s(i){if(n.capture||Pn.call(t,i),!i.cancelBubble)return sa(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Or(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Ia(e,t,r,n={}){var s=mi(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function Qr(e){for(var t=0;t<e.length;t++)_i.add(e[t]);for(var r of Ca)r(e)}let ps=null;function Pn(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],i=s[0]||e.target;ps=e;var o=0,c=ps===e&&e.__root;if(c){var u=s.indexOf(c);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var v=s.indexOf(t);if(v===-1)return;u<=v&&(o=u)}if(i=s[o]||e.target,i!==t){Ta(e,"currentTarget",{configurable:!0,get(){return i||r}});var h=F,_=X;at(null),Qt(null);try{for(var m,p=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var E=i["__"+n];if(E!=null&&(!i.disabled||e.target===i))if(Fn(E)){var[S,...N]=E;S.apply(i,[e,...N])}else E.call(i,e)}catch(q){m?p.push(q):m=q}if(e.cancelBubble||g===t||g===null)break;i=g}if(m){for(let q of p)queueMicrotask(()=>{throw q});throw m}}finally{e.__root=t,delete e.currentTarget,at(h),Qt(_)}}}function gi(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function ln(e,t){var r=X;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function w(e,t){var r=(t&So)!==0,n=(t&Po)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=gi(i?e:"<!>"+e),r||(s=on(s)));var o=n||ei?document.importNode(s,!0):s.cloneNode(!0);if(r){var c=on(o),u=o.lastChild;ln(c,u)}else ln(o,o);return o}}function pl(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=gi(s),c=on(o);i=on(c)}var u=i.cloneNode(!0);return ln(u,u),u}}function _l(e,t){return pl(e,t,"svg")}function Ye(e=""){{var t=xr(e+"");return ln(t,t),t}}function K(){var e=document.createDocumentFragment(),t=document.createComment(""),r=xr();return e.append(t,r),ln(t,r),e}function f(e,t){e!==null&&e.before(t)}function k(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function ml(e,t){return gl(e,t)}const Fr=new Map;function gl(e,{target:t,anchor:r,props:n={},events:s,context:i,intro:o=!0}){Ho();var c=new Set,u=_=>{for(var m=0;m<_.length;m++){var p=_[m];if(!c.has(p)){c.add(p);var g=hl(p);t.addEventListener(p,Pn,{passive:g});var E=Fr.get(p);E===void 0?(document.addEventListener(p,Pn,{passive:g}),Fr.set(p,1)):Fr.set(p,E+1)}}};u(qa(_i)),Ca.add(u);var v=void 0,h=el(()=>{var _=r??t.appendChild(xr());return Lo(_,{pending:()=>{}},m=>{if(i){Y({});var p=Ce;p.c=i}s&&(n.$$events=s),v=e(m,n)||{},i&&Z()}),()=>{for(var m of c){t.removeEventListener(m,Pn);var p=Fr.get(m);--p===0?(document.removeEventListener(m,Pn),Fr.delete(m)):Fr.set(m,p)}Ca.delete(u),_!==r&&_.parentNode?.removeChild(_)}});return bl.set(v,h),v}let bl=new WeakMap;function T(e,t,r=!1){var n=e,s=null,i=null,o=qe,c=r?Gr:0,u=!1;const v=(p,g=!0)=>{u=!0,m(g,p)};var h=null;function _(){h!==null&&(h.lastChild.remove(),n.before(h),h=null);var p=o?s:i,g=o?i:s;p&&oa(p),g&&yr(g,()=>{o?i=null:s=null})}const m=(p,g)=>{if(o!==(o=p)){var E=Ua(),S=n;if(E&&(h=document.createDocumentFragment(),h.append(S=xr())),o?s??=g&&Ge(()=>g(S)):i??=g&&Ge(()=>g(S)),E){var N=he,q=o?s:i,A=o?i:s;q&&N.skipped_effects.delete(q),A&&N.skipped_effects.add(A),N.add_callback(_)}else _()}};Sr(()=>{u=!1,t(v),u||m(null,null)},c)}function yl(e,t){return t}function wl(e,t,r){for(var n=e.items,s=[],i=t.length,o=0;o<i;o++)Ja(t[o].e,s,!0);var c=i>0&&s.length===0&&r!==null;if(c){var u=r.parentNode;Ko(u),u.append(r),n.clear(),Gt(e,t[0].prev,t[i-1].next)}li(s,()=>{for(var v=0;v<i;v++){var h=t[v];c||(n.delete(h.k),Gt(e,h.prev,h.next)),Be(h.e,!c)}})}function Oe(e,t,r,n,s,i=null){var o=e,c={flags:t,items:new Map,first:null},u=(t&Ws)!==0;if(u){var v=e;o=v.appendChild(xr())}var h=null,_=!1,m=new Map,p=Va(()=>{var N=r();return Fn(N)?N:N==null?[]:qa(N)}),g,E;function S(){xl(E,g,c,m,o,s,t,n,r),i!==null&&(g.length===0?h?oa(h):h=Ge(()=>i(o)):h!==null&&yr(h,()=>{h=null}))}Sr(()=>{E??=X,g=a(p);var N=g.length;if(!(_&&N===0)){_=N===0;var q,A,C,M;if(Ua()){var I=new Set,B=he;for(A=0;A<N;A+=1){C=g[A],M=n(C,A);var Q=c.items.get(M)??m.get(M);Q?(t&(ta|ra))!==0&&bi(Q,C,A,t):(q=yi(null,c,null,null,C,M,A,s,t,r,!0),m.set(M,q)),I.add(M)}for(const[U,ae]of c.items)I.has(U)||B.skipped_effects.add(ae.e);B.add_callback(S)}else S();a(p)}})}function xl(e,t,r,n,s,i,o,c,u){var v=(o&_o)!==0,h=(o&(ta|ra))!==0,_=t.length,m=r.items,p=r.first,g=p,E,S=null,N,q=[],A=[],C,M,I,B;if(v)for(B=0;B<_;B+=1)C=t[B],M=c(C,B),I=m.get(M),I!==void 0&&(I.a?.measure(),(N??=new Set).add(I));for(B=0;B<_;B+=1){if(C=t[B],M=c(C,B),I=m.get(M),I===void 0){var Q=n.get(M);if(Q!==void 0){n.delete(M),m.set(M,Q);var U=S?S.next:g;Gt(r,S,Q),Gt(r,Q,U),wa(Q,U,s),S=Q}else{var ae=g?g.e.nodes_start:s;S=yi(ae,r,S,S===null?r.first:S.next,C,M,B,i,o,u)}m.set(M,S),q=[],A=[],g=S.next;continue}if(h&&bi(I,C,B,o),(I.e.f&It)!==0&&(oa(I.e),v&&(I.a?.unfix(),(N??=new Set).delete(I))),I!==g){if(E!==void 0&&E.has(I)){if(q.length<A.length){var pe=A[0],O;S=pe.prev;var L=q[0],se=q[q.length-1];for(O=0;O<q.length;O+=1)wa(q[O],pe,s);for(O=0;O<A.length;O+=1)E.delete(A[O]);Gt(r,L.prev,se.next),Gt(r,S,L),Gt(r,se,pe),g=pe,S=se,B-=1,q=[],A=[]}else E.delete(I),wa(I,g,s),Gt(r,I.prev,I.next),Gt(r,I,S===null?r.first:S.next),Gt(r,S,I),S=I;continue}for(q=[],A=[];g!==null&&g.k!==M;)(g.e.f&It)===0&&(E??=new Set).add(g),A.push(g),g=g.next;if(g===null)continue;I=g}q.push(I),S=I,g=I.next}if(g!==null||E!==void 0){for(var te=E===void 0?[]:qa(E);g!==null;)(g.e.f&It)===0&&te.push(g),g=g.next;var _e=te.length;if(_e>0){var Qe=(o&Ws)!==0&&_===0?s:null;if(v){for(B=0;B<_e;B+=1)te[B].a?.measure();for(B=0;B<_e;B+=1)te[B].a?.fix()}wl(r,te,Qe)}}v&&Or(()=>{if(N!==void 0)for(I of N)I.a?.apply()}),e.first=r.first&&r.first.e,e.last=S&&S.e;for(var ke of n.values())Be(ke.e);n.clear()}function bi(e,t,r,n){(n&ta)!==0&&sn(e.v,t),(n&ra)!==0?sn(e.i,r):e.i=r}function yi(e,t,r,n,s,i,o,c,u,v,h){var _=(u&ta)!==0,m=(u&mo)===0,p=_?m?Uo(s,!1,!1):Br(s):s,g=(u&ra)===0?o:Br(o),E={i:g,v:p,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var S=document.createDocumentFragment();S.append(e=xr())}return E.e=Ge(()=>c(e,p,g,v),Ao),E.e.prev=r&&r.e,E.e.next=n&&n.e,r===null?h||(t.first=E):(r.next=E,r.e.next=E.e),n!==null&&(n.prev=E,n.e.prev=E.e),E}finally{}}function wa(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=Rn(i);s.before(i),i=o}}function Gt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ce(e,t,...r){var n=e,s=ne,i;Sr(()=>{s!==(s=t())&&(i&&(Be(i),i=null),i=Ge(()=>s(n,...r)))},Gr)}function en(e,t,r){var n=e,s,i,o=null,c=null;function u(){i&&(yr(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=c,c=null}Sr(()=>{if(s!==(s=t())){var v=Ua();if(s){var h=n;v&&(o=document.createDocumentFragment(),o.append(h=xr()),i&&he.skipped_effects.add(i)),c=Ge(()=>r(h,s))}v?he.add_callback(u):u()}},Gr)}function Sl(e,t,r,n,s,i){var o,c,u=null,v=e,h;Sr(()=>{const _=t()||null;var m=Eo;_!==o&&(h&&(_===null?yr(h,()=>{h=null,c=null}):_===c?oa(h):Be(h)),_&&_!==c&&(h=Ge(()=>{if(u=document.createElementNS(m,_),ln(u,u),n){var p=u.appendChild(xr());n(u,p)}X.nodes_end=u,v.before(u)})),o=_,o&&(c=o))},Gr)}function Pl(e,t){var r=void 0,n;Sr(()=>{r!==(r=t())&&(n&&(Be(n),n=null),r&&(n=Ge(()=>{Ha(()=>r(e))})))})}function wi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=wi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function kl(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=wi(e))&&(n&&(n+=" "),n+=t);return n}function El(e){return typeof e=="object"?kl(e):e??""}const _s=[...` 	
\r\f \v\uFEFF`];function Tl(e,t,r){var n=e==null?"":""+e;if(r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var c=o+i;(o===0||_s.includes(n[o-1]))&&(c===n.length||_s.includes(n[c]))?n=(o===0?"":n.substring(0,o))+n.substring(c+1):o=c}}return n===""?null:n}function ms(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var i=e[s];i!=null&&i!==""&&(n+=" "+s+": "+i+r)}return n}function xa(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Nl(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,c=!1,u=[];n&&u.push(...Object.keys(n).map(xa)),s&&u.push(...Object.keys(s).map(xa));var v=0,h=-1;const E=e.length;for(var _=0;_<E;_++){var m=e[_];if(c?m==="/"&&e[_-1]==="*"&&(c=!1):i?i===m&&(i=!1):m==="/"&&e[_+1]==="*"?c=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!c&&i===!1&&o===0){if(m===":"&&h===-1)h=_;else if(m===";"||_===E-1){if(h!==-1){var p=xa(e.substring(v,h).trim());if(!u.includes(p)){m!==";"&&_++;var g=e.substring(v,_).trim();r+=" "+g+";"}}v=_+1,h=-1}}}}return n&&(r+=ms(n)),s&&(r+=ms(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Me(e,t,r,n,s,i){var o=e.__className;if(o!==r||o===void 0){var c=Tl(r,n,i);c==null?e.removeAttribute("class"):t?e.className=c:e.setAttribute("class",c),e.__className=r}else if(i&&s!==i)for(var u in i){var v=!!i[u];(s==null||v!==!!s[u])&&e.classList.toggle(u,v)}return i}function Sa(e,t={},r,n){for(var s in r){var i=r[s];t[s]!==i&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,n))}}function $l(e,t,r,n){var s=e.__style;if(s!==t){var i=Nl(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(Sa(e,r?.[0],n[0]),Sa(e,r?.[1],n[1],"important")):Sa(e,r,n));return n}function Zn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Fn(t))return No();for(var n of e.options)n.selected=t.includes($n(n));return}for(n of e.options){var s=$n(n);if(Qo(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function xi(e){var t=new MutationObserver(()=>{Zn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ni(()=>{t.disconnect()})}function Da(e,t,r=t){var n=!0;Qa(e,"change",s=>{var i=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),$n);else{var c=e.querySelector(i)??e.querySelector("option:not([disabled])");o=c&&$n(c)}r(o)}),Ha(()=>{var s=t();if(Zn(e,s,n),n&&s===void 0){var i=e.querySelector(":checked");i!==null&&(s=$n(i),r(s))}e.__value=s,n=!1}),xi(e)}function $n(e){return"__value"in e?e.__value:e.value}const yn=Symbol("class"),wn=Symbol("style"),Si=Symbol("is custom element"),Pi=Symbol("is html");function Al(e,t){var r=ca(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function tn(e,t){var r=ca(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Ml(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ja(e,t,r,n){var s=ca(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[ao]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ki(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Cl(e,t,r,n,s=!1,i=!1){var o=ca(e),c=o[Si],u=!o[Pi],v=t||{},h=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=El(r.class):r[yn]&&(r.class=null),r[wn]&&(r.style??=null);var m=ki(e);for(const C in r){let M=r[C];if(h&&C==="value"&&M==null){e.value=e.__value="",v[C]=M;continue}if(C==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";Me(e,p,M,n,t?.[yn],r[yn]),v[C]=M,v[yn]=r[yn];continue}if(C==="style"){$l(e,M,t?.[wn],r[wn]),v[C]=M,v[wn]=r[wn];continue}var g=v[C];if(!(M===g&&!(M===void 0&&e.hasAttribute(C)))){v[C]=M;var E=C[0]+C[1];if(E!=="$$")if(E==="on"){const I={},B="$$"+C;let Q=C.slice(2);var S=ul(Q);if(ll(Q)&&(Q=Q.slice(0,-7),I.capture=!0),!S&&g){if(M!=null)continue;e.removeEventListener(Q,v[B],I),v[B]=null}if(M!=null)if(S)e[`__${Q}`]=M,Qr([Q]);else{let U=function(ae){v[C].call(this,ae)};var A=U;v[B]=mi(Q,e,U,I)}else S&&(e[`__${Q}`]=void 0)}else if(C==="style")ja(e,C,M);else if(C==="autofocus")Jo(e,!!M);else if(!c&&(C==="__value"||C==="value"&&M!=null))e.value=e.__value=M;else if(C==="selected"&&h)Ml(e,M);else{var N=C;u||(N=vl(N));var q=N==="defaultValue"||N==="defaultChecked";if(M==null&&!c&&!q)if(o[C]=null,N==="value"||N==="checked"){let I=e;const B=t===void 0;if(N==="value"){let Q=I.defaultValue;I.removeAttribute(N),I.defaultValue=Q,I.value=I.__value=B?Q:null}else{let Q=I.defaultChecked;I.removeAttribute(N),I.defaultChecked=Q,I.checked=B?Q:!1}}else e.removeAttribute(C);else q||m.includes(N)&&(c||typeof M!="string")?(e[N]=M,N in o&&(o[N]=qe)):typeof M!="function"&&ja(e,N,M)}}}return v}function gs(e,t,r=[],n=[],s,i=!1,o=!1){Js(r,n,c=>{var u=void 0,v={},h=e.nodeName==="SELECT",_=!1;if(Sr(()=>{var p=t(...c.map(a)),g=Cl(e,u,p,s,i,o);_&&h&&"value"in p&&Zn(e,p.value);for(let S of Object.getOwnPropertySymbols(v))p[S]||Be(v[S]);for(let S of Object.getOwnPropertySymbols(p)){var E=p[S];S.description===To&&(!u||E!==u[S])&&(v[S]&&Be(v[S]),v[S]=Ge(()=>Pl(e,()=>E))),g[S]=E}u=g}),h){var m=e;Ha(()=>{Zn(m,u.value,!0),xi(m)})}_=!0})}function ca(e){return e.__attributes??={[Si]:e.nodeName.includes("-"),[Pi]:e.namespaceURI===ko}}var bs=new Map;function ki(e){var t=e.getAttribute("is")||e.nodeName,r=bs.get(t);if(r)return r;bs.set(t,r=[]);for(var n,s=e,i=Element.prototype;i!==s;){n=Xi(s);for(var o in n)n[o].set&&r.push(o);s=qs(s)}return r}function Ve(e,t,r=t){var n=new WeakSet;Qa(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=Pa(e)?ka(i):i,r(i),he!==null&&n.add(he),await il(),i!==(i=t())){var o=e.selectionStart,c=e.selectionEnd;e.value=i??"",c!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(c,e.value.length))}}),dn(t)==null&&e.value&&(r(Pa(e)?ka(e.value):e.value),he!==null&&n.add(he)),Ka(()=>{var s=t();if(e===document.activeElement){var i=Kn??he;if(n.has(i))return}Pa(e)&&s===ka(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Il(e,t,r=t){Qa(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),dn(t)==null&&r(e.checked),Ka(()=>{var n=t();e.checked=!!n})}function Pa(e){var t=e.type;return t==="number"||t==="range"}function ka(e){return e===""?null:+e}let Hn=!1;function Dl(e){var t=Hn;try{return Hn=!1,[e(),Hn]}finally{Hn=t}}const jl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ue(e,t,r){return new Proxy({props:e,exclude:t},jl)}const Rl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(bn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];bn(s)&&(s=s());const i=gr(s,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(bn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=gr(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===Rr||t===Ls)return!1;for(let r of e.props)if(bn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(bn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function de(...e){return new Proxy({props:e},Rl)}function tr(e,t,r,n){var s=!un||(r&bo)!==0,i=(r&wo)!==0,o=(r&xo)!==0,c=n,u=!0,v=()=>(u&&(u=!1,c=o?dn(n):n),c),h;if(i){var _=Rr in e||Ls in e;h=gr(e,t)?.set??(_&&t in e?A=>e[t]=A:void 0)}var m,p=!1;i?[m,p]=Dl(()=>e[t]):m=e[t],m===void 0&&n!==void 0&&(m=v(),h&&(s&&uo(),h(m)));var g;if(s?g=()=>{var A=e[t];return A===void 0?v():(u=!0,A)}:g=()=>{var A=e[t];return A!==void 0&&(c=void 0),A===void 0?c:A},s&&(r&yo)===0)return g;if(h){var E=e.$$legacy;return(function(A,C){return arguments.length>0?((!s||!C||E||p)&&h(C?g():A),A):g()})}var S=!1,N=((r&go)!==0?aa:Va)(()=>(S=!1,g()));i&&a(N);var q=X;return(function(A,C){if(arguments.length>0){const M=C?a(N):s&&i?ut(A):A;return x(N,M),S=!0,c!==void 0&&(c=M),A}return Ur&&S||(q.f&Vr)!==0?N.v:a(N)})}function Ei(e){Ce===null&&Bs(),un&&Ce.l!==null?Ol(Ce).m.push(e):ia(()=>{const t=dn(e);if(typeof t=="function")return t})}function ql(e){Ce===null&&Bs(),Ei(()=>()=>dn(e))}function Ol(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Ll="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Ll);const Ti=typeof window<"u"?window:void 0;function Bl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Wl{#t;#r;constructor(t={}){const{window:r=Ti,document:n=r?.document}=t;r!==void 0&&(this.#t=n,this.#r=za(s=>{const i=Ia(r,"focusin",s),o=Ia(r,"focusout",s);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#t?Bl(this.#t):null}}new Wl;function zl(e,t){return e}function Vl(e,t){let r=re(null);const n=J(()=>zl(t));function s(...i){if(a(r))a(r).timeout&&clearTimeout(a(r).timeout);else{let o,c;const u=new Promise((v,h)=>{o=v,c=h});x(r,{timeout:null,runner:null,promise:u,resolve:o,reject:c},!0)}return a(r).runner=async()=>{if(!a(r))return;const o=a(r);x(r,null);try{o.resolve(await e.apply(this,i))}catch(c){o.reject(c)}},a(r).timeout=setTimeout(a(r).runner,a(n)),a(r).promise}return s.cancel=async()=>{(!a(r)||a(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||a(r).timeout===null)||(clearTimeout(a(r).timeout),a(r).reject("Cancelled"),x(r,null))},s.runScheduledNow=async()=>{(!a(r)||!a(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||!a(r).timeout)||(clearTimeout(a(r).timeout),a(r).timeout=null,await a(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!a(r)?.timeout}}),s}function Gl(e,t){switch(e){case"local":return t.localStorage;case"session":return t.sessionStorage}}function Ni(e,t,r,n,s,i){if(e===null||typeof e!="object")return e;const o=Object.getPrototypeOf(e);if(o!==null&&o!==Object.prototype&&!Array.isArray(e))return e;let c=r.get(e);return c||(c=new Proxy(e,{get:(u,v)=>(n?.(),Ni(Reflect.get(u,v),t,r,n,s,i)),set:(u,v,h)=>(s?.(),Reflect.set(u,v,h),i(t),!0)}),r.set(e,c)),c}class ys{#t;#r;#a;#n;#c;#s;#o=new WeakMap;constructor(t,r,n={}){const{storage:s="local",serializer:i={serialize:JSON.stringify,deserialize:JSON.parse},syncTabs:o=!0}=n,c="window"in n?n.window:Ti;if(this.#t=r,this.#r=t,this.#a=i,c===void 0)return;const u=Gl(s,c);this.#n=u;const v=u.getItem(t);v!==null?this.#t=this.#l(v):this.#u(r),o&&s==="local"&&(this.#c=za(h=>{this.#s=h;const _=Ia(c,"storage",this.#i);return()=>{_(),this.#s=void 0}}))}get current(){this.#c?.();const t=this.#n?.getItem(this.#r),r=t?this.#l(t):this.#t;return Ni(r,r,this.#o,this.#c?.bind(this),this.#s?.bind(this),this.#u.bind(this))}set current(t){this.#u(t),this.#s?.()}#i=t=>{t.key!==this.#r||t.newValue===null||(this.#t=this.#l(t.newValue),this.#s?.())};#l(t){try{return this.#a.deserialize(t)}catch(r){console.error(`Error when parsing "${t}" from persisted store "${this.#r}"`,r);return}}#u(t){try{t!=null&&this.#n?.setItem(this.#r,this.#a.serialize(t))}catch(r){console.error(`Error when writing value from persisted store "${this.#r}" to ${this.#n}`,r)}}}function Ul(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function ws(e,t){return`${e}_${t}`}function Ql(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}let b=class{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}};b.equal=(e,t)=>new b("equal",e,t).toString();b.notEqual=(e,t)=>new b("notEqual",e,t).toString();b.lessThan=(e,t)=>new b("lessThan",e,t).toString();b.lessThanEqual=(e,t)=>new b("lessThanEqual",e,t).toString();b.greaterThan=(e,t)=>new b("greaterThan",e,t).toString();b.greaterThanEqual=(e,t)=>new b("greaterThanEqual",e,t).toString();b.isNull=e=>new b("isNull",e).toString();b.isNotNull=e=>new b("isNotNull",e).toString();b.between=(e,t,r)=>new b("between",e,[t,r]).toString();b.startsWith=(e,t)=>new b("startsWith",e,t).toString();b.endsWith=(e,t)=>new b("endsWith",e,t).toString();b.select=e=>new b("select",void 0,e).toString();b.search=(e,t)=>new b("search",e,t).toString();b.orderDesc=e=>new b("orderDesc",e).toString();b.orderAsc=e=>new b("orderAsc",e).toString();b.orderRandom=()=>new b("orderRandom").toString();b.cursorAfter=e=>new b("cursorAfter",void 0,e).toString();b.cursorBefore=e=>new b("cursorBefore",void 0,e).toString();b.limit=e=>new b("limit",void 0,e).toString();b.offset=e=>new b("offset",void 0,e).toString();b.contains=(e,t)=>new b("contains",e,t).toString();b.notContains=(e,t)=>new b("notContains",e,t).toString();b.notSearch=(e,t)=>new b("notSearch",e,t).toString();b.notBetween=(e,t,r)=>new b("notBetween",e,[t,r]).toString();b.notStartsWith=(e,t)=>new b("notStartsWith",e,t).toString();b.notEndsWith=(e,t)=>new b("notEndsWith",e,t).toString();b.createdBefore=e=>new b("createdBefore",void 0,e).toString();b.createdAfter=e=>new b("createdAfter",void 0,e).toString();b.createdBetween=(e,t)=>new b("createdBetween",void 0,[e,t]).toString();b.updatedBefore=e=>new b("updatedBefore",void 0,e).toString();b.updatedAfter=e=>new b("updatedAfter",void 0,e).toString();b.updatedBetween=(e,t)=>new b("updatedBetween",void 0,[e,t]).toString();b.or=e=>new b("or",void 0,e.map(t=>JSON.parse(t))).toString();b.and=e=>new b("and",void 0,e.map(t=>JSON.parse(t))).toString();b.distanceEqual=(e,t,r,n=!0)=>new b("distanceEqual",e,[[t,r,n]]).toString();b.distanceNotEqual=(e,t,r,n=!0)=>new b("distanceNotEqual",e,[[t,r,n]]).toString();b.distanceGreaterThan=(e,t,r,n=!0)=>new b("distanceGreaterThan",e,[[t,r,n]]).toString();b.distanceLessThan=(e,t,r,n=!0)=>new b("distanceLessThan",e,[[t,r,n]]).toString();b.intersects=(e,t)=>new b("intersects",e,[t]).toString();b.notIntersects=(e,t)=>new b("notIntersects",e,[t]).toString();b.crosses=(e,t)=>new b("crosses",e,[t]).toString();b.notCrosses=(e,t)=>new b("notCrosses",e,[t]).toString();b.overlaps=(e,t)=>new b("overlaps",e,[t]).toString();b.notOverlaps=(e,t)=>new b("notOverlaps",e,[t]).toString();b.touches=(e,t)=>new b("touches",e,[t]).toString();b.notTouches=(e,t)=>new b("notTouches",e,[t]).toString();var $i,Ai;class In{static custom(t){return t}static unique(t=7){const r=Ql(In,$i,"m",Ai).call(In);let n="";for(let s=0;s<t;s++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}$i=In,Ai=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var xs;(function(e){e.Totp="totp"})(xs||(xs={}));var Ss;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Ss||(Ss={}));var Ps;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Ps||(Ps={}));var ks;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(ks||(ks={}));var Es;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Es||(Es={}));var Ts;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Ts||(Ts={}));var Ns;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Ns||(Ns={}));var $s;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})($s||($s={}));var As;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(As||(As={}));async function vn(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Hl(e,t={}){const{includePurchases:r=!0,limit:n=100,orderBy:s="productName",orderDirection:i="asc"}=t;try{const{databases:o,config:c}=await vn(),u=await o.listDocuments(c.APPWRITE_CONFIG.databaseId,c.APPWRITE_CONFIG.collections.products,[b.equal("mainId",e),b.orderAsc(s==="productName"?"productName":"$updatedAt"),b.limit(n)]),v=u.documents;if(!r)return v;const h=await o.listDocuments(c.APPWRITE_CONFIG.databaseId,c.APPWRITE_CONFIG.collections.purchases,[b.equal("mainId",e)]),_=h.documents,m=Fl(v,_);return console.log(`[Appwrite Interactions] ${u.documents.length} produits chargés avec ${h.documents.length} achats`),m}catch(o){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,o);const c=o instanceof Error?o.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${c}`)}}async function Kl(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide"),[];try{const{databases:s,config:i}=await vn(),o=await s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.limit(n)]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} mises à jour synchronisées`),o.documents}catch(s){console.error(`[Appwrite Interactions] Erreur sync produits pour mainId ${e}:`,s);const i=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function Ya(e,t){try{const{databases:r,config:n}=await vn();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Jl(e,t){if(console.log(`[Appwrite Interactions] Mise à jour du magasin pour produit ${e}:`,t),!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Ya(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Ms(e,t){return Ya(e,{who:t})}async function Cs(e,t){return Ya(e,{stockReel:t})}async function Yl(e){try{const{databases:t,config:r}=await vn(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id,status:"active"},c=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,In.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",c),c}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Zl(e,t){try{const{databases:r,config:n}=await vn(),s=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,t);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,t),s}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Xl(e){try{const{databases:t,config:r}=await vn();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}function Fl(e,t){return e.map(r=>({...r,purchases:t.filter(n=>n.products.some(s=>s.$id===r.$id))}))}function ec(e,t){const r=new Map(t.map(o=>[o.$id,o])),n=e.map(o=>r.get(o.$id)??o),s=new Set(e.map(o=>o.$id)),i=t.filter(o=>!s.has(o.$id));return[...n,...i]}function tc(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing stock data:",t),[]}}function rc(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing recipes occurrences:",t),[]}}function nc(e,t={}){let r=null;const n=i=>{const{events:o,payload:c}=i;if(!c)return;const u=o.some(p=>p.includes("products.")),v=o.some(p=>p.includes("purchases.")),h=o.some(p=>p.includes(".create")),_=o.some(p=>p.includes(".update")),m=o.some(p=>p.includes(".delete"));if(u){const p=c;h&&t.onProductCreate?t.onProductCreate(p):_&&t.onProductUpdate?t.onProductUpdate(p):m&&t.onProductDelete&&t.onProductDelete(p.$id)}else if(v){const p=c;h&&t.onPurchaseCreate?t.onPurchaseCreate(p):_&&t.onPurchaseUpdate?t.onPurchaseUpdate(p):m&&t.onPurchaseDelete&&t.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}const{Query:fv}=window.Appwrite,Is=1e3,ac=500;class sc{#t=re(null);#r=re(!1);#a=re(null);#n=re(null);#c=re(null);#s(t,r=null){if(!t||t.trim()==="")return r;try{return JSON.parse(t)}catch(n){return console.warn("[ProductsStore] Erreur de parsing JSON, utilisation de la valeur par défaut:",n),r}}#o=J(()=>a(this.#a)?.current.products??[]);get products(){return a(this.#o)}set products(t){x(this.#o,t)}#i=J(()=>a(this.#a)?.current.loading??!1);get loading(){return a(this.#i)}set loading(t){x(this.#i,t)}#l=J(()=>a(this.#a)?.current.error??null);get error(){return a(this.#l)}set error(t){x(this.#l,t)}#u=J(()=>a(this.#a)?.current.syncing??!1);get syncing(){return a(this.#u)}set syncing(t){x(this.#u,t)}#f=J(()=>a(this.#a)?.current.realtimeConnected??!1);get realtimeConnected(){return a(this.#f)}set realtimeConnected(t){x(this.#f,t)}#v=J(()=>a(this.#n)?.current.lastSync??null);get lastSync(){return a(this.#v)}set lastSync(t){x(this.#v,t)}#h=J(()=>a(this.#n)?.current.mainId??null);get mainId(){return a(this.#h)}set mainId(t){x(this.#h,t)}#e=re(ut({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return a(this.#e)}#b=J(()=>this.products.map(t=>{const r=this.#N(t.purchases??[]),n=this.#W(t.totalNeededConsolidated?this.#s(t.totalNeededConsolidated):[],r);return{...t,storeInfo:t.store?this.#s(t.store):null,totalNeededArray:t.totalNeededConsolidated?this.#s(t.totalNeededConsolidated):[],recipesArray:t.recipesOccurrences?this.#s(t.recipesOccurrences):[],stockArray:t.stockReel?this.#s(t.stockReel):[],displayQuantity:this.#L(t.totalNeededConsolidated),displayName:t.productName.trim(),totalPurchases:r,displayTotalPurchases:this.#B(t.purchases??[]),missingQuantity:n,displayMissingQuantity:n.length>0?n.map(s=>this.#P(s.quantity.toString(),s.unit)).join(" et "):"✅ Complet"}}));get enrichedProducts(){return a(this.#b)}set enrichedProducts(t){x(this.#b,t)}#y=J(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return a(this.#y)}set uniqueStores(t){x(this.#y,t)}#w=J(()=>[...new Set(this.products.flatMap(t=>t.who||[]).filter(Boolean))]);get uniqueWho(){return a(this.#w)}set uniqueWho(t){x(this.#w,t)}#x=J(()=>[...new Set(this.products.map(t=>t.productType).filter(Boolean))]);get uniqueProductTypes(){return a(this.#x)}set uniqueProductTypes(t){x(this.#x,t)}#p=J(()=>{const t=this.enrichedProducts.filter(r=>this.#O(r));return a(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>a(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return a(this.#p)}set filteredGroupedProducts(t){x(this.#p,t)}#_=J(()=>Object.values(this.filteredGroupedProducts).flat());get filteredProducts(){return a(this.#_)}set filteredProducts(t){x(this.#_,t)}#g=J(()=>this.filteredGroupedProducts);get groupedFormattedProducts(){return a(this.#g)}set groupedFormattedProducts(t){x(this.#g,t)}#k=J(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return a(this.#k)}set stats(t){x(this.#k,t)}get currentMainId(){return a(this.#t)}get isInitialized(){return a(this.#r)}#m=Vl(()=>{this.#S()},ac);async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(a(this.#r)&&a(this.#t)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),x(this.#t,t,!0),x(this.#r,!0),this.#$(t),this.products.length>0&&a(this.#n).current.mainId===t?(console.log(`[ProductsStore] Utilisation du cache (${this.products.length} produits)`),await this.#A()):(console.log("[ProductsStore] Chargement initial depuis Appwrite"),await this.#E(t));const n=this.#q();x(this.#c,nc(t,n),!0)}#$(t){if(a(this.#a)&&a(this.#n))return;const r=ws("products-state",t),n=ws("products-sync-state",t);console.log(`[ProductsStore] Clés de stockage: ${r}, ${n}`),x(this.#a,new ys(r,{products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),!0),x(this.#n,new ys(n,{lastSync:null,mainId:null}),!0)}async#E(t){if(!a(this.#a))throw new Error("ProductsStore non initialisé");this.#d({loading:!0,error:null});try{const n=await Hl(t,{includePurchases:!0,limit:Is,orderBy:"productName",orderDirection:"asc"});this.#d({products:n}),this.#S(),console.log(`[ProductsStore] ${n.length} produits chargés`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw this.#d({loading:!1,error:n}),console.error("[ProductsStore]",n,r),r}}async#A(){if(a(this.#n)?.current.lastSync){this.#d({syncing:!0});try{const t={lastSync:a(this.#n).current.lastSync,limit:Is},r=await Kl(a(this.#t),t);r.length>0&&(this.#d({products:ec(this.products,r)}),this.#S(),console.log(`[ProductsStore] ${r.length} mises à jour synchronisées`)),this.#d({syncing:!1})}catch(t){console.error("[ProductsStore] Erreur sync:",t),this.#d({syncing:!1})}}}#M(t){if(!a(this.#a))return;this.products.some(n=>n.$id===t.$id)||this.#d({products:[...this.products,t]})}#C(t){a(this.#a)&&this.#d({products:this.products.map(r=>{if(r.$id===t.$id){const n={...r};return Object.keys(t).forEach(s=>{t[s]!==void 0&&(n[s]=t[s])}),n}return r})})}#I(t){a(this.#a)&&this.#d({products:this.products.filter(r=>r.$id!==t)})}#D(t){console.log("[ProductsStore] Purchase créé, mise à jour des produits concernés..."),this.#T(t)}#j(t){console.log("[ProductsStore] Purchase mis à jour, mise à jour des produits concernés..."),this.#T(t)}#R(t){console.log("[ProductsStore] Purchase supprimé, nettoyage des produits concernés..."),this.#d({products:this.products.map(r=>({...r,purchases:(r.purchases||[]).filter(n=>n.$id!==t)}))})}#T(t){!t.products||t.products.length===0||(this.#d({products:this.products.map(r=>{if(t.products.some(n=>n.$id===r.$id)){const s=(r.purchases||[]).filter(i=>i.$id!==t.$id);return s.push(t),{...r,purchases:s}}return r})}),console.log(`[ProductsStore] ${t.products.length} produit(s) mis à jour avec le purchase ${t.$id}`))}#q(){return{onProductCreate:t=>{this.#M(t),this.#m()},onProductUpdate:t=>{this.#C(t),this.#m()},onProductDelete:t=>{this.#I(t),this.#m()},onPurchaseCreate:t=>{this.#D(t),this.#m()},onPurchaseUpdate:t=>{this.#j(t),this.#m()},onPurchaseDelete:t=>{this.#R(t),this.#m()},onConnect:()=>{console.log("[ProductsStore] Realtime connecté"),this.#d({realtimeConnected:!0})},onDisconnect:()=>{console.log("[ProductsStore] Realtime déconnecté"),this.#d({realtimeConnected:!1})},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#S(){if(!a(this.#t)||!a(this.#n))return;const t=new Date().toISOString();a(this.#n).current={lastSync:t,mainId:a(this.#t)},this.lastSync=t,this.mainId=a(this.#t)}#d(t){a(this.#a)&&(a(this.#a).current={...a(this.#a).current,...t})}async forceReload(t){await this.#E(t)}destroy(){a(this.#c)?.(),x(this.#c,null),console.log("[ProductsStore] Ressources nettoyées")}clearCache(){if(!a(this.#a)||!a(this.#n)){console.warn("[ProductsStore] Store non initialisé");return}this.#d({products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),a(this.#n).current={lastSync:null,mainId:null},console.log(`[ProductsStore] Cache vidé pour ${a(this.#t)}`)}setSearchQuery(t){a(this.#e).searchQuery=t}toggleProductType(t){const r=a(this.#e).selectedProductTypes.indexOf(t);r>-1?a(this.#e).selectedProductTypes.splice(r,1):a(this.#e).selectedProductTypes.push(t)}toggleTemperature(t){const r=a(this.#e).selectedTemperatures.indexOf(t);r>-1?a(this.#e).selectedTemperatures.splice(r,1):a(this.#e).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){a(this.#e).selectedProductTypes=[],a(this.#e).selectedTemperatures=[]}setGroupBy(t){a(this.#e).groupBy=t}toggleStore(t){const r=a(this.#e).selectedStores.indexOf(t);r>-1?a(this.#e).selectedStores.splice(r,1):a(this.#e).selectedStores.push(t)}toggleWho(t){const r=a(this.#e).selectedWho.indexOf(t);r>-1?a(this.#e).selectedWho.splice(r,1):a(this.#e).selectedWho.push(t)}clearStoreFilters(){a(this.#e).selectedStores=[]}clearWhoFilters(){a(this.#e).selectedWho=[]}handleSort(t){a(this.#e).sortColumn===t?a(this.#e).sortDirection=a(this.#e).sortDirection==="asc"?"desc":"asc":(a(this.#e).sortColumn=t,a(this.#e).sortDirection="asc")}clearFilters(){x(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"none",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return a(this.#e).sortColumn?[...t].sort((r,n)=>{let s=r[a(this.#e).sortColumn],i=n[a(this.#e).sortColumn];return a(this.#e).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,i=parseFloat(i)||0):a(this.#e).sortColumn==="purchases"&&(s=r.purchases?.length||0,i=n.purchases?.length||0),s<i?a(this.#e).sortDirection==="asc"?-1:1:s>i?a(this.#e).sortDirection==="asc"?1:-1:0}):t}#O(t){if(a(this.#e).searchQuery.trim()){const r=a(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(a(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!a(this.#e).selectedStores.includes(t.storeInfo.storeName))||a(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>a(this.#e).selectedWho.includes(r)))||a(this.#e).selectedProductTypes.length>0&&(!t.productType||!a(this.#e).selectedProductTypes.includes(t.productType))||a(this.#e).selectedTemperatures.length>0&&!(a(this.#e).selectedTemperatures.includes("frais")&&t.pFrais||a(this.#e).selectedTemperatures.includes("surgele")&&t.pSurgel))}#L(t){if(!t)return"-";try{const r=JSON.parse(t);return!Array.isArray(r)||r.length===0?"-":r.map(n=>this.#P(n.value,n.unit)).join(" et ")}catch{return"-"}}#P(t,r){const n=parseFloat(t);if(isNaN(n))return`${t} ${r}`;if((r==="gr."||r==="ml")&&n>=1e3){const s=n/1e3,i=r==="gr."?"kg":"l.";let c=(Math.round(s*100)/100).toString();return c.endsWith(",0")&&(c=c.slice(0,-2)),c.endsWith(",00")&&(c=c.slice(0,-3)),`${c} ${i}`}if(!["gr.","ml","kg","l."].includes(r)){let i=(Math.round(n*10)/10).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),`${i} ${r}`}return`${n} ${r}`}#B(t){return!t||t.length===0?"-":this.#N(t).map(n=>this.#P(n.quantity.toString(),n.unit)).join(" et ")}#N(t){if(!t||t.length===0)return[];const r=new Map;t.forEach(s=>{if(!s.quantity||!s.unit)return;const i=parseFloat(s.quantity);if(isNaN(i))return;const o=r.get(s.unit)||0;r.set(s.unit,o+i)});const n=[];return r.forEach((s,i)=>{n.push({quantity:s,unit:i})}),n}#W(t,r){if(!t||t.length===0)return[];if(!r||r.length===0)return t.map(o=>({quantity:parseFloat(o.value),unit:o.unit}));const n=new Map,s=new Map;t.forEach(o=>{const c=parseFloat(o.value);isNaN(c)||n.set(o.unit,(n.get(o.unit)||0)+c)}),r.forEach(o=>{s.set(o.unit,(s.get(o.unit)||0)+o.quantity)});const i=[];return n.forEach((o,c)=>{const u=s.get(c)||0,v=o-u;v>0&&i.push({quantity:v,unit:c})}),i}}const V=new sc;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ic={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var oc=_l("<svg><!><!></svg>");function ve(e,t){Y(t,!0);const r=tr(t,"color",3,"currentColor"),n=tr(t,"size",3,24),s=tr(t,"strokeWidth",3,2),i=tr(t,"absoluteStrokeWidth",3,!1),o=tr(t,"iconNode",19,()=>[]),c=ue(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=oc();gs(u,_=>({...ic,...c,width:n(),height:n(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(s())*24/Number(n()):s()]);var v=l(u);Oe(v,17,o,yl,(_,m)=>{var p=J(()=>Na(a(m),2));let g=()=>a(p)[0],E=()=>a(p)[1];var S=K(),N=G(S);Sl(N,g,!0,(q,A)=>{gs(q,()=>({...E()}))}),f(_,S)});var h=d(v);ce(h,()=>t.children??ne),f(e,u),Z()}function Ra(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ve(e,de({name:"egg"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Ea(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ve(e,de({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Ds(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ve(e,de({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function An(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ve(e,de({name:"search"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function xn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ve(e,de({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Xn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ve(e,de({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Sn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ve(e,de({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function kn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ve(e,de({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Dr(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ve(e,de({name:"user"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Dn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ve(e,de({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function bt(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ve(e,de({name:"x"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Ec(e,t,r){x(t,null),r.onCancelEditPurchase()}async function Tc(e,t,r){await t.onSavePurchase(),x(r,null)}var Nc=w('<span class="loading loading-spinner loading-sm"></span>'),$c=w('<div class="text-center py-8 opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Ac=w('<span class="loading loading-spinner loading-sm"></span>'),Mc=w('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input input-bordered w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input input-bordered w-24"/></td><td><input type="text" class="input input-bordered w-20"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="0.01" class="input input-bordered w-16"/></td><td><input type="text" class="input input-bordered w-24"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Cc=(e,t,r)=>t(a(r)),Ic=(e,t,r)=>t(a(r).$id),Dc=w('<span class="loading loading-spinner loading-sm"></span>'),jc=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Rc=w('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),qc=w('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"><div class="form-control"><label for="purchase-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="purchase-quantity" type="number" step="0.01" class="input input-bordered validator" required/></div> <div class="form-control"><label for="purchase-unit" class="label"><span class="label-text">Unité</span></label> <select id="purchase-unit" class="select select-bordered validator" required><option disabled selected>Sélectionner</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></div> <div class="form-control"><label for="purchase-store" class="label"><span class="label-text">Magasin</span></label> <input id="purchase-store" type="text" class="input input-bordered" placeholder="Ex: Marché"/></div> <div class="form-control"><label for="purchase-who" class="label"><span class="label-text">Qui a acheté ?</span></label> <input id="purchase-who" type="text" class="input input-bordered" placeholder="Votre nom"/></div> <div class="form-control"><label for="purchase-price" class="label"><span class="label-text">Prix (€)</span></label> <input id="purchase-price" type="number" step="1" class="input input-bordered" placeholder="0.00"/></div> <div class="form-control"><label for="purchase-notes" class="label"><span class="label-text">Notes</span></label> <input id="purchase-notes" type="text" class="input input-bordered" placeholder="Promotion, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function Oc(e,t){Y(t,!0);let r=tr(t,"newPurchase",7),n=re(null);function s(z,$e){return $e==="gr."&&z>=1e3?`${(z/1e3).toFixed(1)} kg`:$e==="ml"&&z>=1e3?`${(z/1e3).toFixed(1)} l`:`${z} ${$e}`}function i(z){return new Date(z).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function o(z){x(n,{...z},!0),t.onStartEditPurchase(z)}async function c(z){await t.onDeletePurchase(z)}var u=qc(),v=l(u),h=l(v);Xn(h,{class:"w-5 h-5"});var _=d(v,2),m=l(_),p=d(l(m),2),g=l(p),E=d(l(g),2),S=d(g,2),N=d(l(S),2),q=l(N);q.value=q.__value="";var A=d(q);A.value=A.__value="kg";var C=d(A);C.value=C.__value="gr.";var M=d(C);M.value=M.__value="l.";var I=d(M);I.value=I.__value="ml";var B=d(I);B.value=B.__value="unité";var Q=d(B);Q.value=Q.__value="bottes";var U=d(S,2),ae=d(l(U),2),pe=d(U,2),O=d(l(pe),2),L=d(pe,2),se=d(l(L),2),te=d(L,2),_e=d(l(te),2),Qe=d(p,2),ke=l(Qe);ke.__click=function(...z){t.onAddPurchase?.apply(this,z)};var y=l(ke);{var $=z=>{var $e=Nc();f(z,$e)},ee=z=>{var $e=Ye("Ajouter l'achat");f(z,$e)};T(y,z=>{t.loading?z($):z(ee,!1)})}var ye=d(_,2);{var je=z=>{var $e=$c(),Dt=l($e);Xn(Dt,{class:"w-12 h-12 mx-auto mb-2"}),f(z,$e)},Fe=z=>{var $e=Rc(),Dt=l($e),sr=d(l(Dt));Oe(sr,21,()=>t.currentProductPurchases,vt=>vt.$id,(vt,Ae)=>{var Ht=K(),Pr=G(Ht);{var jt=ft=>{var ht=Mc(),Ee=l(ht),et=l(Ee),Kt=l(et),or=d(Kt,2),tt=l(or);tt.value=tt.__value="kg";var xt=d(tt);xt.value=xt.__value="gr.";var St=d(xt);St.value=St.__value="l.";var Jt=d(St);Jt.value=Jt.__value="ml";var He=d(Jt);He.value=He.__value="unité";var Yt=d(He);Yt.value=Yt.__value="bottes";var Rt=d(Ee),kr=l(Rt),Pt=d(Rt),kt=l(Pt),qt=d(Pt),lr=l(qt),pt=d(qt),Er=l(pt),Et=d(pt),cr=l(Et),Ke=d(Et),Zt=l(Ke),ur=l(Zt);ur.__click=[Tc,t,n];var dr=l(ur);{var fn=W=>{var we=Ac();f(W,we)},hn=W=>{wc(W,{class:"w-3 h-3"})};T(dr,W=>{t.loading?W(fn):W(hn,!1)})}var Hr=d(ur,2);Hr.__click=[Ec,n,t];var H=l(Hr);bt(H,{class:"w-3 h-3"}),R(W=>{k(lr,W),ur.disabled=t.loading},[()=>i(a(Ae).$createdAt)]),Ve(Kt,()=>a(n).quantity,W=>a(n).quantity=W),Da(or,()=>a(n).unit,W=>a(n).unit=W),Ve(kr,()=>a(n).store,W=>a(n).store=W),Ve(kt,()=>a(n).who,W=>a(n).who=W),Ve(Er,()=>a(n).price,W=>a(n).price=W),Ve(cr,()=>a(n).notes,W=>a(n).notes=W),f(ft,ht)},ir=ft=>{var ht=jc(),Ee=l(ht),et=l(Ee),Kt=d(Ee),or=l(Kt),tt=d(Kt),xt=l(tt),St=d(tt),Jt=l(St),He=d(St),Yt=l(He),Rt=d(He),kr=l(Rt),Pt=d(Rt),kt=l(Pt),qt=l(kt);qt.__click=[Cc,o,Ae];var lr=l(qt);kn(lr,{class:"w-4 h-4"});var pt=d(qt,2);pt.__click=[Ic,c,Ae];var Er=l(pt);{var Et=Ke=>{var Zt=Dc();f(Ke,Zt)},cr=Ke=>{bt(Ke,{class:"w-4 h-4"})};T(Er,Ke=>{t.loading?Ke(Et):Ke(cr,!1)})}R((Ke,Zt)=>{k(et,Ke),k(or,a(Ae).store),k(xt,a(Ae).who),k(Jt,Zt),k(Yt,a(Ae).price?`${a(Ae).price}€`:"-"),k(kr,a(Ae).notes||"-"),pt.disabled=t.loading},[()=>s(a(Ae).quantity,a(Ae).unit),()=>i(a(Ae).$createdAt)]),f(ft,ht)};T(Pr,ft=>{a(n)?.$id===a(Ae).$id?ft(jt):ft(ir,!1)})}f(vt,Ht)}),f(z,$e)};T(ye,z=>{t.currentProductPurchases.length===0?z(je):z(Fe,!1)})}R(()=>ke.disabled=t.loading),Ve(E,()=>r().quantity,z=>r().quantity=z),Da(N,()=>r().unit,z=>r().unit=z),Ve(ae,()=>r().store,z=>r().store=z),Ve(O,()=>r().who,z=>r().who=z),Ve(se,()=>r().price,z=>r().price=z),Ve(_e,()=>r().notes,z=>r().notes=z),f(e,u),Z()}Qr(["click"]);var Lc=w('<span class="loading loading-spinner loading-sm"></span>'),Bc=w('<div class="text-center py-8 opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Wc=(e,t,r)=>t(a(r).dateTime),zc=w('<span class="loading loading-spinner loading-xs"></span>'),Vc=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),Gc=w('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Uc=w('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"><div class="form-control"><label for="stock-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="stock-quantity" type="number" step="0.01" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-unit" class="label"><span class="label-text">Unité</span></label> <select id="stock-unit" class="select select-bordered select-sm" required><option>Sélectionner</option><option>kg</option><option>g</option><option>l</option><option>ml</option><option>unités</option><option>pièces</option></select></div> <div class="form-control"><label for="stock-datetime" class="label"><span class="label-text">Date du stock</span></label> <input id="stock-datetime" type="datetime-local" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-notes" class="label"><span class="label-text">Notes</span></label> <input id="stock-notes" type="text" class="input input-bordered input-sm" placeholder="Origine, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function Qc(e,t){Y(t,!0);let r={quantity:"",unit:"",dateTime:"",notes:""};function n(y,$){return $==="g"&&y>=1e3?`${(y/1e3).toFixed(1)} kg`:$==="ml"&&y>=1e3?`${(y/1e3).toFixed(1)} l`:$==="unités"||$==="pièces"?`${y} ${$}`:`${y} ${$}`}function s(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}async function i(y){await t.onDeleteStock(y)}var o=Uc(),c=l(o),u=l(c);Ra(u,{class:"w-5 h-5"});var v=d(c,2),h=l(v),_=d(l(h),2),m=l(_),p=d(l(m),2),g=d(m,2),E=d(l(g),2),S=l(E);S.value=S.__value="";var N=d(S);N.value=N.__value="kg";var q=d(N);q.value=q.__value="g";var A=d(q);A.value=A.__value="l";var C=d(A);C.value=C.__value="ml";var M=d(C);M.value=M.__value="unités";var I=d(M);I.value=I.__value="pièces";var B=d(g,2),Q=d(l(B),2),U=d(B,2),ae=d(l(U),2),pe=d(_,2),O=l(pe);O.__click=function(...y){t.onAddStock?.apply(this,y)};var L=l(O);{var se=y=>{var $=Lc();f(y,$)},te=y=>{var $=Ye("Ajouter au stock");f(y,$)};T(L,y=>{t.loading?y(se):y(te,!1)})}var _e=d(v,2);{var Qe=y=>{var $=Bc(),ee=l($);Ra(ee,{class:"w-12 h-12 mx-auto mb-2"}),f(y,$)},ke=y=>{var $=Gc(),ee=l($),ye=d(l(ee));Oe(ye,23,()=>t.stockEntries,je=>je.dateTime,(je,Fe)=>{var z=Vc(),$e=l(z),Dt=l($e),sr=d($e),vt=l(sr),Ae=d(sr),Ht=l(Ae),Pr=d(Ae),jt=l(Pr);jt.__click=[Wc,i,Fe];var ir=l(jt);{var ft=Ee=>{var et=zc();f(Ee,et)},ht=Ee=>{var et=Ye("Supprimer");f(Ee,et)};T(ir,Ee=>{t.loading?Ee(ft):Ee(ht,!1)})}R((Ee,et)=>{k(Dt,Ee),k(vt,et),k(Ht,a(Fe).notes||"-"),jt.disabled=t.loading},[()=>n(a(Fe).quantity,a(Fe).unit),()=>s(a(Fe).dateTime)]),f(je,z)}),f(y,$)};T(_e,y=>{t.stockEntries.length===0?y(Qe):y(ke,!1)})}R(()=>O.disabled=t.loading),Ve(p,()=>r.quantity,y=>r.quantity=y),Da(E,()=>r.unit,y=>r.unit=y),Ve(Q,()=>r.dateTime,y=>r.dateTime=y),Ve(ae,()=>r.notes,y=>r.notes=y),f(e,o),Z()}Qr(["click"]);var Hc=(e,t)=>{e.key==="Enter"&&t()},Kc=w('<span class="loading loading-spinner loading-sm"></span>'),Jc=w('<span class="badge badge-primary badge-sm"> </span>'),Yc=w('<div class="text-center py-8 opacity-50"><!> <p>Aucun volontaire assigné à ce produit</p></div>'),Zc=(e,t,r)=>t(r),Xc=w('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs p-0 hover:text-error"><!></button></div>'),Fc=w('<div class="flex flex-wrap gap-2"></div>'),eu=w('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des volontaires</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <div class="flex gap-2"><div class="form-control flex-1"><input type="text" class="input input-bordered input-sm" placeholder="Nom du volontaire"/></div> <button class="btn btn-primary btn-sm"><!></button></div></div></div> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Volontaires <!></h4> <!></div></div></div>');function tu(e,t){Y(t,!0);let r=re("");async function n(){a(r).trim()&&(await t.onAddVolunteer(a(r).trim()),x(r,""))}async function s(U){await t.onRemoveVolunteer(U)}var i=eu(),o=l(i),c=l(o);Dn(c,{class:"w-5 h-5"});var u=d(o,2),v=l(u),h=d(l(v),2),_=l(h),m=l(_);m.__keydown=[Hc,n];var p=d(_,2);p.__click=n;var g=l(p);{var E=U=>{var ae=Kc();f(U,ae)},S=U=>{var ae=Ye("Ajouter");f(U,ae)};T(g,U=>{t.loading?U(E):U(S,!1)})}var N=d(u,2),q=l(N),A=l(q),C=d(l(A));{var M=U=>{var ae=Jc(),pe=l(ae);R(()=>k(pe,t.editingWho.length)),f(U,ae)};T(C,U=>{t.editingWho.length>0&&U(M)})}var I=d(A,2);{var B=U=>{var ae=Yc(),pe=l(ae);Dn(pe,{class:"w-12 h-12 mx-auto mb-2"}),f(U,ae)},Q=U=>{var ae=Fc();Oe(ae,20,()=>t.editingWho,pe=>pe,(pe,O)=>{var L=Xc(),se=l(L),te=d(se);te.__click=[Zc,s,O];var _e=l(te);bt(_e,{class:"w-3 h-3"}),R(()=>{k(se,`${O??""} `),te.disabled=t.loading}),f(pe,L)}),f(U,ae)};T(I,U=>{t.editingWho.length===0?U(B):U(Q,!1)})}R(()=>p.disabled=t.loading),Ve(m,()=>a(r),U=>x(r,U)),f(e,i),Z()}Qr(["keydown","click"]);var ru=(e,t)=>{e.key==="Enter"&&t()},nu=w('<span class="loading loading-spinner loading-sm"></span>'),au=(e,t,r)=>{x(t,""),x(r,"")},su=(e,t,r)=>t(r),iu=w('<button class="btn btn-outline btn-xs"> </button>'),ou=w('<br/><small class="opacity-75"> </small>',1),lu=w('<p class="text-sm"><strong>Magasin défini :</strong> <!></p>'),cu=w('<p class="text-sm"><strong>Magasin défini :</strong> </p>'),uu=w(`<p class="text-sm">Aucun magasin n'est encore défini pour ce produit</p>`),du=w('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des magasins</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin principal</h4> <p class="text-sm opacity-75 mb-4">Définissez le magasin où ce produit est généralement acheté</p> <div class="form-control mb-3"><label class="label" for="store-name"><span class="label-text">Nom du magasin</span></label> <input id="store-name" type="text" class="input input-bordered input-sm" placeholder="Ex: Carrefour, Leclerc..."/></div> <div class="form-control mb-4"><label class="label" for="store-comment"><span class="label-text">Commentaire (optionnel)</span></label> <textarea id="store-comment" class="textarea textarea-bordered textarea-sm" placeholder="Ex: Près de la caisse, rayon frais, etc." rows="2"></textarea></div> <div class="flex gap-2 mb-4"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div> <div class="divider"></div> <div class="form-control"><label class="label" for="suggested-stores"><span class="label-text text-sm">Suggestions rapides</span></label> <div class="flex flex-wrap gap-2" id="suggested-stores"></div></div> <div class="divider"></div> <div class="alert alert-info"><!> <div><h4 class="font-semibold">Information sur le magasin actuel</h4> <!></div></div></div></div></div>');function vu(e,t){Y(t,!0);let r=re(ut(t.editingStore?.storeName||"")),n=re(ut(t.editingStore?.storeComment||""));ia(()=>{if(t.product?.storeInfo)x(r,t.product.storeInfo.storeName||"",!0),x(n,t.product.storeInfo.storeComment||"",!0);else if(t.product?.store)try{const L=JSON.parse(t.product.store);x(r,L.storeName||"",!0),x(n,L.storeComment||"",!0)}catch{x(r,t.product.store||"",!0),x(n,"")}else x(r,""),x(n,"")});async function s(){const L=a(r).trim()?{storeName:a(r).trim(),storeComment:a(n).trim()||void 0}:null;await t.onUpdateStore(L)}function i(L){x(r,L,!0)}var o=du(),c=l(o),u=l(c);Dr(u,{class:"w-5 h-5"});var v=d(c,2),h=l(v),_=d(l(h),4),m=d(l(_),2);m.__keydown=[ru,s];var p=d(_,2),g=d(l(p),2),E=d(p,2),S=l(E);S.__click=s;var N=l(S);{var q=L=>{var se=nu();f(L,se)},A=L=>{var se=Ye("Mettre à jour");f(L,se)};T(N,L=>{t.loading?L(q):L(A,!1)})}var C=d(S,2);C.__click=[au,r,n];var M=d(E,4),I=d(l(M),2);Oe(I,20,()=>["Carrefour","Intermarché","Leclerc","Auchan","Lidl","Aldi","Casino","Monoprix","Franprix","Bio c' Bon","Naturalia"],L=>L,(L,se)=>{var te=iu();te.__click=[su,i,se];var _e=l(te);R(()=>{te.disabled=t.loading,k(_e,se)}),f(L,te)});var B=d(M,4),Q=l(B);Dr(Q,{class:"w-4 h-4"});var U=d(Q,2),ae=d(l(U),2);{var pe=L=>{var se=lu(),te=d(l(se)),_e=d(te);{var Qe=ke=>{var y=ou(),$=d(G(y)),ee=l($);R(()=>k(ee,t.product.storeInfo.storeComment)),f(ke,y)};T(_e,ke=>{t.product.storeInfo.storeComment&&ke(Qe)})}R(()=>k(te,` ${t.product.storeInfo.storeName??""} `)),f(L,se)},O=L=>{var se=K(),te=G(se);{var _e=ke=>{var y=cu(),$=d(l(y));R(()=>k($,` ${t.product.store??""}`)),f(ke,y)},Qe=ke=>{var y=uu();f(ke,y)};T(te,ke=>{t.product?.store?ke(_e):ke(Qe,!1)},!0)}f(L,se)};T(ae,L=>{t.product?.storeInfo?L(pe):L(O,!1)})}R(()=>{S.disabled=t.loading,C.disabled=t.loading}),Ve(m,()=>a(r),L=>x(r,L)),Ve(g,()=>a(n),L=>x(n,L)),f(e,o),Z()}Qr(["keydown","click"]);function js(e,t,r,n,s,i){t(!1),x(r,n()),x(s,null),i.onclose()}var fu=w('<div class="badge badge-success gap-1"><!> Actif</div>'),hu=w('<div class="badge badge-warning gap-1"><!> </div>'),pu=(e,t)=>t("recettes"),_u=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),mu=(e,t)=>t("achats"),gu=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),bu=(e,t)=>t("stock"),yu=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),wu=(e,t)=>t("volontaires"),xu=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Su=(e,t)=>t("magasins"),Pu=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),ku=w('<div class="text-center py-8 opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Eu=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>'),Tu=w('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Horaire</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),Nu=w('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Recettes utilisant ce produit</h3> <!></div>'),$u=w('<div class="modal modal-open"><div class="modal-box max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"><div class="flex items-center justify-between p-4 border-b"><div class="flex-1"><h2 class="text-xl font-bold"> </h2> <div class="flex items-center gap-3 mt-2"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div></div> <button class="btn btn-circle btn-ghost btn-sm" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="flex-1 overflow-y-auto p-4 min-h-96"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function Au(e,t){Y(t,!0);let r=tr(t,"isOpen",15,!1),n=tr(t,"productId",11,null),s=tr(t,"initialTab",3,"recettes"),i=J(()=>n()?V.products.find(y=>y.$id===n()):null),o=re(ut(s())),c=re(!1),u=re(null),v=re(""),h=re(ut({quantity:null,unit:"",store:"",who:"",price:null,notes:""})),_=re(ut({quantity:0,unit:"",notes:"",dateTime:""})),m=re(ut([])),p=re(null),g=J(()=>{const y=a(i)?.purchases;if(!y||!Array.isArray(y))return console.warn("[ProductModal] Purchases is not a valid array:",y),[];const $=y.filter(ee=>!ee||typeof ee!="object"?(console.warn("[ProductModal] Invalid purchase object:",ee),!1):ee.$id?!0:(console.warn("[ProductModal] Purchase missing $id:",ee),!1));return $.length!==y.length&&console.warn(`[ProductModal] Filtered ${y.length-$.length} invalid purchases`),$}),E=J(()=>rc(a(i)?.recipesOccurrences||null)),S=J(()=>a(i)?.who||[]);ia(()=>{a(i)&&(x(o,s()),x(m,tc(a(i).stockReel),!0),x(v,a(i).store||"",!0),N())});function N(){x(h,{quantity:0,unit:"",store:a(i)?.store||"",who:"",price:null,notes:""},!0),x(_,{quantity:0,unit:"",notes:"",dateTime:new Date().toISOString().slice(0,16)},!0)}function q(y){x(o,y,!0)}async function A(y){x(c,!0),x(u,null);try{return await y()}catch($){return x(u,$ instanceof Error?$.message:"Une erreur est survenue",!0),console.error("[ProductModal] Erreur:",$),null}finally{x(c,!1)}}function C(y){if(!y)return"-";try{return new Date(y).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return y}}function M(y){if(!y)return"-";try{const $=JSON.parse(y);if(Array.isArray($)&&$.length>0)return $.map(ee=>`${ee.value} ${ee.unit}`).join(" et ")}catch{return y}return y}async function I(){a(i)&&(x(c,!0),await A(async()=>{if(!a(h).quantity||!a(h).unit.trim())throw new Error("Veuillez remplir les champs obligatoires");let y=a(h).quantity,$=a(h).unit;if(a(h).unit==="kg"?(y=a(h).quantity*1e3,$="gr."):a(h).unit==="l."&&(y=a(h).quantity*1e3,$="ml"),await Yl({products:[a(i).$id],mainId:a(i).mainId.$id,unit:$,quantity:y,store:a(h).store||null,who:a(h).who||null,notes:a(h).notes||"",price:a(h).price||null})){N();const ye=new CustomEvent("toast",{detail:{type:"success",message:"Achat ajouté avec succès"}});window.dispatchEvent(ye)}}))}function B(y){x(p,{...y},!0)}function Q(){x(p,null)}async function U(){a(p)&&await A(async()=>{const y=a(p).$id;let $=a(p).quantity,ee=a(p).unit;a(p).unit==="kg"?($=a(p).quantity*1e3,ee="gr."):a(p).unit==="l."&&($=a(p).quantity*1e3,ee="ml");const ye={unit:ee,quantity:$,store:a(p)?.store||null,who:a(p)?.who||null,notes:a(p)?.notes||"",price:a(p)?.price||null};if(await Zl(y,ye)){x(p,null);const Fe=new CustomEvent("toast",{detail:{type:"success",message:"Achat modifié avec succès"}});window.dispatchEvent(Fe)}})}async function ae(y){confirm(`Êtes-vous sûr de vouloir supprimer cet achat (${y.quantity} ${y.unit}) ?`)&&await A(async()=>{await Xl(y.$id);const $=new CustomEvent("toast",{detail:{type:"success",message:"Achat supprimé avec succès"}});window.dispatchEvent($)})}async function pe(){a(i)&&await A(async()=>{if(!a(_).quantity||!a(_).unit)throw new Error("Veuillez remplir les champs obligatoires");const y={quantity:a(_).quantity.toString(),unit:a(_).unit,notes:a(_).notes||"",dateTime:a(_).dateTime||new Date().toISOString()},$=[...a(m),y],ee=a(i).$id;if(await Cs(ee,JSON.stringify($))){x(m,$,!0),N();const je=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock ajouté avec succès"}});window.dispatchEvent(je)}})}async function O(y){confirm("Êtes-vous sûr de vouloir supprimer ce relevé de stock ?")&&a(i)&&await A(async()=>{const $=a(m).filter((ye,je)=>je!==y);if(await Cs(a(i).$id,JSON.stringify($))){x(m,$,!0);const ye=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock supprimé avec succès"}});window.dispatchEvent(ye)}})}async function L(y){!a(i)||!y.trim()||await A(async()=>{const $=y.trim();if(a(S).includes($))throw new Error("Ce volontaire est déjà ajouté");const ee=[...a(S),$];if(await Ms(a(i).$id,ee)){const je=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire ajouté avec succès"}});window.dispatchEvent(je)}})}async function se(y){a(i)&&confirm(`Retirer ${y} de la liste des volontaires ?`)&&await A(async()=>{const $=a(S).filter(ye=>ye!==y);if(await Ms(a(i).$id,$)){const ye=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire retiré avec succès"}});window.dispatchEvent(ye)}})}async function te(y){a(i)&&await A(async()=>{const $=y!==void 0?y:a(v)&&a(v).trim()!==""?a(v).trim():a(i).store;console.log("[ProductModal] handleUpdateStore called with:",{storeValue:y,editingStore:a(v),finalStoreValue:$});const ee=await Jl(a(i).$id,$);if(ee){const ye=new CustomEvent("toast",{detail:{type:"success",message:"Magasin mis à jour avec succès"}});window.dispatchEvent(ye),x(v,ee.store||"",!0)}})}var _e=K(),Qe=G(_e);{var ke=y=>{var $=$u(),ee=l($),ye=l(ee),je=l(ye),Fe=l(je),z=l(Fe),$e=d(Fe,2),Dt=l($e),sr=l(Dt),vt=d(Dt,2);{var Ae=H=>{var W=fu(),we=l(W);pc(we,{class:"w-3 h-3"}),f(H,W)},Ht=H=>{var W=hu(),we=l(W);Sc(we,{class:"w-3 h-3"});var Xt=d(we);R(()=>k(Xt,` ${a(i).status??""}`)),f(H,W)};T(vt,H=>{a(i).status==="active"?H(Ae):H(Ht,!1)})}var Pr=d(vt,2),jt=d(l(Pr)),ir=d(je,2);ir.__click=[js,r,o,s,u,t];var ft=l(ir);bt(ft,{class:"w-4 h-4"});var ht=d(ye,2),Ee=l(ht);Ee.__click=[pu,q];var et=l(Ee);An(et,{class:"w-4 h-4 mr-1"});var Kt=d(et,2);{var or=H=>{var W=_u(),we=l(W);R(()=>k(we,a(E).length)),f(H,W)};T(Kt,H=>{a(E).length>0&&H(or)})}var tt=d(Ee,2);tt.__click=[mu,q];var xt=l(tt);Xn(xt,{class:"w-4 h-4 mr-1"});var St=d(xt,2);{var Jt=H=>{var W=gu(),we=l(W);R(()=>k(we,a(g).length)),f(H,W)};T(St,H=>{a(g).length>0&&H(Jt)})}var He=d(tt,2);He.__click=[bu,q];var Yt=l(He);Ra(Yt,{class:"w-4 h-4 mr-1"});var Rt=d(Yt,2);{var kr=H=>{var W=yu(),we=l(W);R(()=>k(we,a(m).length)),f(H,W)};T(Rt,H=>{a(m).length>0&&H(kr)})}var Pt=d(He,2);Pt.__click=[wu,q];var kt=l(Pt);Dn(kt,{class:"w-4 h-4 mr-1"});var qt=d(kt,2);{var lr=H=>{var W=xu(),we=l(W);R(()=>k(we,a(i).who.length)),f(H,W)};T(qt,H=>{a(i).who&&a(i).who.length>0&&H(lr)})}var pt=d(Pt,2);pt.__click=[Su,q];var Er=l(pt);Dr(Er,{class:"w-4 h-4 mr-1"});var Et=d(ht,2),cr=l(Et);{var Ke=H=>{var W=Pu(),we=l(W);bt(we,{class:"w-4 h-4"});var Xt=d(we,2),vr=l(Xt);R(()=>k(vr,`erreur : ${a(u)??""}`)),f(H,W)};T(cr,H=>{a(u)&&H(Ke)})}var Zt=d(cr,2),ur=l(Zt);{var dr=H=>{var W=Nu(),we=l(W),Xt=l(we);An(Xt,{class:"w-5 h-5"});var vr=d(we,2);{var Ot=Lt=>{var Ft=ku(),Nr=l(Ft);An(Nr,{class:"w-12 h-12 mx-auto mb-2"}),f(Lt,Ft)},Tr=Lt=>{var Ft=Tu(),Nr=l(Ft),Bt=d(l(Nr));Oe(Bt,21,()=>a(E),er=>er.recipeName+er.dateTimeService,(er,Tt)=>{var Kr=Eu(),Jr=l(Kr),Wt=l(Jr),fr=d(Jr),pn=l(fr),Yr=d(fr),hr=l(Yr),_n=d(Yr),qn=l(_n),On=d(_n),ua=l(On),Ln=d(On),Bn=l(Ln);R(da=>{k(Wt,a(Tt).recipeName),k(pn,`${a(Tt).quantity??""} ${a(Tt).unit??""}`),k(hr,da),k(qn,a(Tt).horaire||"-"),k(ua,a(Tt).typePlat||"-"),k(Bn,a(Tt).assiettes||"-")},[()=>C(a(Tt).dateTimeService)]),f(er,Kr)}),f(Lt,Ft)};T(vr,Lt=>{a(E).length===0?Lt(Ot):Lt(Tr,!1)})}f(H,W)},fn=H=>{var W=K(),we=G(W);{var Xt=Ot=>{Oc(Ot,{get product(){return a(i)},get currentProductPurchases(){return a(g)},get loading(){return a(c)},get newPurchase(){return a(h)},onAddPurchase:I,onStartEditPurchase:B,onCancelEditPurchase:Q,onSavePurchase:U,onDeletePurchase:ae})},vr=Ot=>{var Tr=K(),Lt=G(Tr);{var Ft=Bt=>{Qc(Bt,{get product(){return a(i)},get stockEntries(){return a(m)},get loading(){return a(c)},onAddStock:pe,onDeleteStock:O})},Nr=Bt=>{var er=K(),Tt=G(er);{var Kr=Wt=>{tu(Wt,{get product(){return a(i)},get editingWho(){return a(S)},get loading(){return a(c)},onAddVolunteer:L,onRemoveVolunteer:se})},Jr=Wt=>{var fr=K(),pn=G(fr);{var Yr=hr=>{vu(hr,{get product(){return a(i)},get editingStore(){return a(v)},get loading(){return a(c)},onUpdateStore:te})};T(pn,hr=>{a(o)==="magasins"&&hr(Yr)},!0)}f(Wt,fr)};T(Tt,Wt=>{a(o)==="volontaires"?Wt(Kr):Wt(Jr,!1)},!0)}f(Bt,er)};T(Lt,Bt=>{a(o)==="stock"?Bt(Ft):Bt(Nr,!1)},!0)}f(Ot,Tr)};T(we,Ot=>{a(o)==="achats"?Ot(Xt):Ot(vr,!1)},!0)}f(H,W)};T(ur,H=>{a(o)==="recettes"?H(dr):H(fn,!1)})}var hn=d(Et,2),Hr=l(hn);Hr.__click=[js,r,o,s,u,t],R(H=>{k(z,a(i).productName),k(sr,a(i).productType),k(jt,` ${H??""}`),Me(Ee,1,`tab ${a(o)==="recettes"?"tab-active":""}`),Me(tt,1,`tab ${a(o)==="achats"?"tab-active":""}`),Me(He,1,`tab ${a(o)==="stock"?"tab-active":""}`),Me(Pt,1,`tab ${a(o)==="volontaires"?"tab-active":""}`),Me(pt,1,`tab ${a(o)==="magasins"?"tab-active":""}`)},[()=>M(a(i).totalNeededConsolidated)]),f(y,$)};T(Qe,y=>{r()&&a(i)&&y(ke)})}f(e,_e),Z()}Qr(["click"]);var Mu=()=>V.clearFilters(),Cu=e=>V.setSearchQuery(e.currentTarget.value),Iu=()=>V.setGroupBy("none"),Du=()=>V.setGroupBy("store"),ju=()=>V.setGroupBy("productType"),Ru=(e,t)=>V.toggleProductType(t),qu=w("<button><!> </button>"),Ou=()=>V.toggleTemperature("frais"),Lu=()=>V.toggleTemperature("surgele"),Bu=()=>V.clearTypeAndTemperatureFilters(),Wu=w('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),zu=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),Vu=(e,t)=>V.toggleStore(t),Gu=w("<button><!> </button>"),Uu=()=>V.clearStoreFilters(),Qu=w('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Hu=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Ku=(e,t)=>V.toggleWho(t),Ju=w("<button><!> </button>"),Yu=()=>V.clearWhoFilters(),Zu=w('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Xu=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Fu=()=>V.handleSort("productName"),ed=()=>V.handleSort("store"),td=()=>V.handleSort("who"),rd=()=>V.handleSort("productType"),nd=w('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),ad=w('<tr class="bg-base-300 font-semibold sticky top-10 z-10"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),sd=(e,t,r)=>t("productName",a(r)),id=w('<div class="text-xs text-base-content/60"> </div>'),od=w('<div class="w-7 h-7 bg-success/20 rounded-full flex items-center justify-center"><!></div>'),ld=w('<div class="w-7 h-7 bg-info/20 rounded-full flex items-center justify-center"><!></div>'),cd=(e,t,r)=>t("store",a(r)),ud=w('<div class="tooltip tooltip-info"> </div>'),dd=(e,t,r)=>t("who",a(r)),vd=w('<span class="badge badge-soft badge-info badge-sm"> </span>'),fd=w('<div class="flex flex-wrap gap-1 pr-8"></div>'),hd=w('<div class="text-xs text-base-content/70 flex gap-2 items-center justify-center"><!> <span class="text-center "> </span> <span class="text-center "> </span></div>'),pd=(e,t,r)=>t("purchases",a(r)),_d=w('<tr class="hover:bg-base-300 transition-colors"><td class="cursor-pointer hover:bg-blue-50 relative group"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="cursor-pointer hover:bg-purple-50 relative group"><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="text-center font-semibold"><div class="pb-1 text-center font-semibold"> </div> <!></td><td class="text-center font-medium cursor-pointer hover:bg-red-50 relative group"> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td> </td></tr>'),md=w("<!> <!>",1),gd=w('<div class="text-center py-8"><div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),bd=w("<!> <span> </span>",1),yd=w("<!> <span> </span>",1),wd=w("<!> <span> </span>",1),xd=w('<div class="bg-base-300 rounded-lg p-3 mb-3 font-semibold sticky top-0 z-10"><div class="flex items-center justify-center gap-2"><!> <span class="text-sm opacity-70"> </span></div></div>'),Sd=(e,t,r)=>t("productName",a(r)),Pd=w('<div class="text-success"><!></div>'),kd=w('<div class="text-info"><!></div>'),Ed=(e,t,r)=>{e.stopPropagation(),t("store",a(r))},Td=(e,t,r)=>{e.stopPropagation(),t("who",a(r))},Nd=w('<span class="badge badge-soft badge-info badge-sm"> </span>'),$d=w('<span class="badge badge-soft badge-info badge-sm"> </span>'),Ad=w('<div class="flex flex-wrap gap-1"><!> <!></div>'),Md=(e,t,r)=>{e.stopPropagation(),t("purchases",a(r))},Cd=w('<div class="alert alert-success py-2 px-3 cursor-pointer hover:bg-success/10 transition-colors"><!> <span class="text-sm font-medium"> </span></div>'),Id=w('<div class="alert alert-warning py-2 px-3 cursor-pointer hover:bg-warning/10 transition-colors"><!> <span class="text-sm font-medium"> </span></div>'),Dd=w('<div class="flex"><div class="card bg-base-100 shadow-lg cursor-pointer hover:shadow-xl transition-all w-full"><div class="card-body px-4 py-2"><button class="flex items-center justify-between mb-2" aria-label="Click to edit product name"><div class="truncate max-w-fit font-semibold text-base"> </div> <div class="flex gap-1 ms-auto justify-end"><!> <!> <!></div></button> <div class="flex flex-wrap items-center gap-2 text-md opacity-80 mb-3 justify-between"><button class="flex flex-1 items-center  gap-1 btn btn-sm btn-ghost"><!> <span class="truncate"> </span></button> <button class="flex flex-1 items-center gap-1 btn btn-ghost btn-sm"><!> <!></button></div> <button class="mb-3"><!></button></div></div></div>'),jd=w('<!> <div class="space-y-3 mb-4"></div>',1),Rd=w('<div class="text-center py-8"><div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),qd=()=>V.setGroupBy("none"),Od=()=>V.setGroupBy("store"),Ld=()=>V.setGroupBy("productType"),Bd=(e,t)=>V.toggleProductType(t),Wd=w("<button><!> </button>"),zd=()=>V.toggleTemperature("frais"),Vd=()=>V.toggleTemperature("surgele"),Gd=()=>V.clearTypeAndTemperatureFilters(),Ud=w('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Qd=(e,t)=>V.toggleStore(t),Hd=w("<button> </button>"),Kd=w('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Jd=(e,t)=>V.toggleWho(t),Yd=w("<button> </button>"),Zd=w('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Xd=(e,t)=>{V.clearFilters(),x(t,!1)},Fd=w('<div class="space-y-6"><div class="flex flex-wrap gap-2 items-center"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="flex  md:mb-4 justify-between mb-4 flex-wrap items-center gap-4 "><div class="form-control "><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input input-bordered flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="flex mt-4"><!></div> <div class="flex flex-col lg:flex-row gap-6 mt-4"><!> <!></div></div></div> <div class="hidden md:block bg-base-200 rounded-lg overflow-x-auto max-h-[calc(100vh-200px)]"><table class="table w-full"><thead class="sticky top-0 z-10 bg-base-300"><tr class="bg-base-300"><th class="cursor-pointer hover:bg-base-200 text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="cursor-pointer hover:bg-base-200 text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div> <div class="md:hidden bg-base-200 rounded-lg p-1"><!> <!></div></div> <!> <div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function ev(e,t){Y(t,!0);const r=J(()=>V.filteredProducts),n=J(()=>V.groupedFormattedProducts),s=J(()=>V.stats),i=J(()=>V.uniqueStores),o=J(()=>V.uniqueWho),c=J(()=>V.uniqueProductTypes),u=J(()=>V.filters);let v=re(!1),h=re(!1),_=re(null),m=re("recettes");function p(P,D){switch(console.log(`Cell clicked: ${P}`,D),x(_,D.$id,!0),P){case"store":x(m,"magasins");break;case"who":x(m,"volontaires");break;case"purchases":x(m,"achats");break;case"productName":x(m,"recettes");break;default:x(m,"recettes")}x(h,!0)}function g(){x(h,!1),x(_,null)}function E(P){switch(P.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:lc};case"animaux":return{displayName:"Viandes et Poissons",icon:cc};case"legumes":return{displayName:"Fruits et Légumes",icon:dc};case"sucres":return{displayName:"Sucrées",icon:uc};case"lof":return{displayName:"L.O.F",icon:mc};case"autres":return{displayName:"Autres",icon:vc};case"epices":return{displayName:"Assaisonnements",icon:gc};case"frais":return{displayName:"Produits Frais",icon:yc};default:return{displayName:P,icon:An}}}ia(()=>{function P(D){D.key==="Escape"&&a(h)&&g()}return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)});var S=Fd(),N=G(S),q=l(N),A=l(q),C=l(A);Ds(C,{class:"w-4 h-4 mr-1"});var M=d(C),I=d(A,2),B=l(I);xn(B,{class:"w-4 h-4 mr-1"});var Q=d(B),U=d(I,2),ae=l(U);Sn(ae,{class:"w-4 h-4 mr-1"});var pe=d(ae),O=d(U,2),L=l(O);_c(L,{class:"w-4 h-4 mr-1"});var se=d(L),te=d(q,2),_e=l(te),Qe=l(_e),ke=l(Qe),y=l(ke);Ea(y,{class:"w-5 h-5"});var $=d(ke,2);$.__click=[Mu];var ee=l($);bt(ee,{class:"w-4 h-4"});var ye=d(_e,2),je=l(ye),Fe=d(l(je),2),z=l(Fe);xc(z,{class:"w-4 h-4"});var $e=d(z,2);$e.__input=[Cu];var Dt=d(je,2),sr=d(l(Dt),2),vt=l(sr);vt.__change=[Iu];var Ae=d(vt,2);Ae.__change=[Du];var Ht=d(Ae,2);Ht.__change=[ju];var Pr=d(ye,2),jt=l(Pr),ir=l(jt);{var ft=P=>{var D=zu(),Ie=l(D),xe=d(l(Ie),2),fe=l(xe);Oe(fe,16,()=>a(c),Pe=>Pe,(Pe,Te)=>{const We=J(()=>E(Te));var it=qu();it.__click=[Ru,Te];var Nt=l(it);en(Nt,()=>a(We).icon,(Le,Re)=>{Re(Le,{class:"w-5 h-5 mr-1"})});var _t=d(Nt);R(Le=>{Me(it,1,`btn btn-sm ${Le??""}`),k(_t,` ${a(We).displayName??""}`)},[()=>a(u).selectedProductTypes.length===0?"btn-soft btn-accent":a(u).selectedProductTypes.includes(Te)?"btn-accent":"btn-dash btn-accent"]),f(Pe,it)});var Se=d(fe,2);Se.__click=[Ou];var me=l(Se);xn(me,{class:"w-5 h-5"});var le=d(Se,2);le.__click=[Lu];var ge=l(le);Sn(ge,{class:"w-5 h-5"});var ie=d(le,2);{var j=Pe=>{var Te=Wu();Te.__click=[Bu];var We=l(Te);bt(We,{class:"w-3 h-3"}),f(Pe,Te)};T(ie,Pe=>{(a(u).selectedProductTypes.length>0||a(u).selectedTemperatures.length>0)&&Pe(j)})}R((Pe,Te)=>{Me(Se,1,`btn btn-sm ${Pe??""}`),Me(le,1,`btn btn-sm ${Te??""}`)},[()=>a(u).selectedTemperatures.length===0?"btn-soft btn-success":a(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(u).selectedTemperatures.length===0?"btn-soft btn-info":a(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),f(P,D)};T(ir,P=>{a(c).length>0&&P(ft)})}var ht=d(jt,2),Ee=l(ht);{var et=P=>{var D=Hu(),Ie=l(D),xe=d(l(Ie),2),fe=l(xe);Oe(fe,16,()=>a(i),le=>le,(le,ge)=>{var ie=Gu();ie.__click=[Vu,ge];var j=l(ie);Dr(j,{class:"w-3 h-3 mr-1"});var Pe=d(j);R(Te=>{Me(ie,1,`btn btn-xs ${Te??""}`),k(Pe,` ${ge??""}`)},[()=>a(u).selectedStores.length===0?"btn-soft btn-accent":a(u).selectedStores.includes(ge)?"btn-accent":"btn-dash btn-accent"]),f(le,ie)});var Se=d(fe,2);{var me=le=>{var ge=Qu();ge.__click=[Uu];var ie=l(ge);bt(ie,{class:"w-3 h-3"}),f(le,ge)};T(Se,le=>{a(u).selectedStores.length>0&&le(me)})}f(P,D)};T(Ee,P=>{a(i).length>0&&P(et)})}var Kt=d(Ee,2);{var or=P=>{var D=Xu(),Ie=l(D),xe=d(l(Ie),2),fe=l(xe);Oe(fe,16,()=>a(o),le=>le,(le,ge)=>{var ie=Ju();ie.__click=[Ku,ge];var j=l(ie);Pc(j,{class:"w-3 h-3 mr-1"});var Pe=d(j);R(Te=>{Me(ie,1,`btn btn-xs ${Te??""}`),k(Pe,` ${ge??""}`)},[()=>a(u).selectedWho.length===0?" btn-soft btn-info":a(u).selectedWho.includes(ge)?" btn-info":"btn-dash btn-info"]),f(le,ie)});var Se=d(fe,2);{var me=le=>{var ge=Zu();ge.__click=[Yu];var ie=l(ge);bt(ie,{class:"w-3 h-3"}),f(le,ge)};T(Se,le=>{a(u).selectedWho.length>0&&le(me)})}f(P,D)};T(Kt,P=>{a(o).length>0&&P(or)})}var tt=d(te,2),xt=l(tt),St=l(xt),Jt=l(St),He=l(Jt);He.__click=[Fu];var Yt=l(He),Rt=l(Yt);Ds(Rt,{class:"w-4 h-4"});var kr=d(Rt,2);{var Pt=P=>{var D=Ye();R(()=>k(D,a(u).sortDirection==="asc"?"↑":"↓")),f(P,D)};T(kr,P=>{a(u).sortColumn==="productName"&&P(Pt)})}var kt=d(He);kt.__click=[ed];var qt=l(kt),lr=l(qt);Dr(lr,{class:"w-4 h-4"});var pt=d(lr,2);{var Er=P=>{var D=Ye();R(()=>k(D,a(u).sortDirection==="asc"?"↑":"↓")),f(P,D)};T(pt,P=>{a(u).sortColumn==="store"&&P(Er)})}var Et=d(kt);Et.__click=[td];var cr=l(Et),Ke=l(cr);Dn(Ke,{class:"w-4 h-4"});var Zt=d(Ke,2);{var ur=P=>{var D=Ye();R(()=>k(D,a(u).sortDirection==="asc"?"↑":"↓")),f(P,D)};T(Zt,P=>{a(u).sortColumn==="who"&&P(ur)})}var dr=d(Et);dr.__click=[rd];var fn=l(dr),hn=d(l(fn));{var Hr=P=>{var D=Ye();R(()=>k(D,a(u).sortDirection==="asc"?"↑":"↓")),f(P,D)};T(hn,P=>{a(u).sortColumn==="productType"&&P(Hr)})}var H=d(dr),W=l(H),we=d(l(W));{var Xt=P=>{var D=Ye();R(()=>k(D,a(u).sortDirection==="asc"?"↑":"↓")),f(P,D)};T(we,P=>{a(u).sortColumn==="totalNeededConsolidated"&&P(Xt)})}var vr=d(H),Ot=l(vr),Tr=l(Ot);Xn(Tr,{class:"w-4 h-4"});var Lt=d(Tr,2);{var Ft=P=>{var D=Ye();R(()=>k(D,a(u).sortDirection==="asc"?"↑":"↓")),f(P,D)};T(Lt,P=>{a(u).sortColumn==="totalPurchases"&&P(Ft)})}var Nr=d(vr),Bt=l(Nr),er=l(Bt);bc(er,{class:"w-4 h-4"});var Tt=d(St);Oe(Tt,21,()=>Object.entries(a(n)),([P,D])=>P,(P,D)=>{var Ie=J(()=>Na(a(D),2));let xe=()=>a(Ie)[0],fe=()=>a(Ie)[1];var Se=md(),me=G(Se);{var le=ie=>{const j=J(()=>E(xe()));var Pe=ad(),Te=l(Pe),We=l(Te),it=l(We);{var Nt=Le=>{var Re=Ye();R(()=>k(Re,`🏪 ${xe()??""} (${fe().length??""})`)),f(Le,Re)},_t=Le=>{var Re=K(),$t=G(Re);{var At=Je=>{var ze=nd(),mt=l(ze);en(mt,()=>a(j).icon,($r,Zr)=>{Zr($r,{class:"w-4 h-4"})});var ot=d(mt,2),Mt=l(ot),lt=d(ot,2),pr=l(lt);R(()=>{k(Mt,a(j).displayName),k(pr,`(${fe().length??""})`)}),f(Je,ze)},zt=Je=>{var ze=Ye();R(()=>k(ze,`📦 ${xe()??""} (${fe().length??""})`)),f(Je,ze)};T($t,Je=>{a(u).groupBy==="productType"?Je(At):Je(zt,!1)},!0)}f(Le,Re)};T(it,Le=>{a(u).groupBy==="store"?Le(Nt):Le(_t,!1)})}f(ie,Pe)};T(me,ie=>{xe()!==""&&ie(le)})}var ge=d(me,2);Oe(ge,17,()=>V.sortProducts(fe()),ie=>ie.$id,(ie,j)=>{const Pe=J(()=>E(a(j).productType));var Te=_d(),We=l(Te);We.__click=[sd,p,j];var it=l(We),Nt=l(it),_t=l(Nt),Le=l(_t),Re=d(_t,2);{var $t=oe=>{var be=id(),nt=l(be);R(()=>k(nt,`Ancien: ${a(j).previousNames[0]??""}`)),f(oe,be)};T(Re,oe=>{a(j).previousNames&&a(j).previousNames.length>0&&oe($t)})}var At=d(Nt,2),zt=l(At);{var Je=oe=>{var be=od(),nt=l(be);xn(nt,{class:"w-4 h-4 text-success"}),f(oe,be)};T(zt,oe=>{a(j).pFrais&&oe(Je)})}var ze=d(zt,2);{var mt=oe=>{var be=ld(),nt=l(be);Sn(nt,{class:"w-4 h-4 text-info"}),f(oe,be)};T(ze,oe=>{a(j).pSurgel&&oe(mt)})}var ot=d(it,2),Mt=l(ot);kn(Mt,{class:"w-3 h-3 text-blue-500"});var lt=d(We);lt.__click=[cd,p,j];var pr=l(lt);{var $r=oe=>{var be=ud(),nt=l(be);R(()=>{ja(be,"data-tip",a(j).storeInfo.storeComment),k(nt,a(j).storeInfo.storeName||"-")}),f(oe,be)},Zr=oe=>{var be=Ye();R(()=>k(be,a(j).storeInfo?.storeName||"-")),f(oe,be)};T(pr,oe=>{a(j).storeInfo?.storeComment?oe($r):oe(Zr,!1)})}var Vn=d(pr,2),ha=l(Vn);kn(ha,{class:"w-3 h-3 text-green-500"});var mn=d(lt);mn.__click=[dd,p,j];var gn=l(mn);{var pa=oe=>{var be=fd();Oe(be,20,()=>a(j).who,nt=>nt,(nt,Gn)=>{var Un=vd(),ya=l(Un);R(()=>k(ya,Gn)),f(nt,Un)}),f(oe,be)},_a=oe=>{var be=Ye("-");f(oe,be)};T(gn,oe=>{a(j).who&&a(j).who.length>0?oe(pa):oe(_a,!1)})}var ma=d(gn,2),Ne=l(ma);kn(Ne,{class:"w-3 h-3 text-purple-500"});var De=d(mn),rt=l(De),_r=l(rt);en(_r,()=>a(Pe).icon,(oe,be)=>{be(oe,{class:"w-3 h-3"})});var Ar=d(_r),Vt=d(De),Mr=l(Vt),Xr=l(Mr),ga=d(Mr,2);{var Qi=oe=>{var be=hd(),nt=l(be);kc(nt,{class:"w-3 h-3"});var Gn=d(nt,2),Un=l(Gn),ya=d(Gn,2),Yi=l(ya);R(()=>{k(Un,`${a(j)?.nbRecipes??""} r.`),k(Yi,`${a(j)?.totalAssiettes??""} c.`)}),f(oe,be)};T(ga,oe=>{(a(j).nbRecipes||a(j).totalAssiettes)&&oe(Qi)})}var ba=d(Vt);ba.__click=[pd,p,j];var as=l(ba),Hi=d(as),Ki=l(Hi);kn(Ki,{class:"w-3 h-3 text-red-500"});var ss=d(ba),Ji=l(ss);R(()=>{k(Le,a(j).productName),Me(lt,1,`${a(u).groupBy==="store"?"hidden":""} cursor-pointer hover:bg-green-50 font-medium relative group`),Me(De,1,a(u).groupBy==="productType"?"hidden":""),k(Ar,` ${a(Pe).displayName??""}`),k(Xr,a(j).displayQuantity||"-"),k(as,`${(a(j).displayTotalPurchases||"-")??""} `),Me(ss,1,`text-center font-medium ${a(j).displayMissingQuantity==="✅ Complet"?"text-success":"text-warning"}`),k(Ji,a(j).displayMissingQuantity)}),f(ie,Te)}),f(P,Se)});var Kr=d(xt,2);{var Jr=P=>{var D=gd();f(P,D)};T(Kr,P=>{a(r).length===0&&P(Jr)})}var Wt=d(tt,2),fr=l(Wt);Oe(fr,17,()=>Object.entries(a(n)),([P,D])=>P,(P,D)=>{var Ie=J(()=>Na(a(D),2));let xe=()=>a(Ie)[0],fe=()=>a(Ie)[1];var Se=jd(),me=G(Se);{var le=ie=>{const j=J(()=>E(xe()));var Pe=xd(),Te=l(Pe),We=l(Te);{var it=Re=>{var $t=bd(),At=G($t);Dr(At,{class:"w-4 h-4"});var zt=d(At,2),Je=l(zt);R(()=>k(Je,xe())),f(Re,$t)},Nt=Re=>{var $t=K(),At=G($t);{var zt=ze=>{var mt=yd(),ot=G(mt);en(ot,()=>a(j).icon,(pr,$r)=>{$r(pr,{class:"w-4 h-4"})});var Mt=d(ot,2),lt=l(Mt);R(()=>k(lt,a(j).displayName)),f(ze,mt)},Je=ze=>{var mt=wd(),ot=G(mt);An(ot,{class:"w-4 h-4"});var Mt=d(ot,2),lt=l(Mt);R(()=>k(lt,xe())),f(ze,mt)};T(At,ze=>{a(u).groupBy==="productType"?ze(zt):ze(Je,!1)},!0)}f(Re,$t)};T(We,Re=>{a(u).groupBy==="store"?Re(it):Re(Nt,!1)})}var _t=d(We,2),Le=l(_t);R(()=>k(Le,`(${fe().length??""})`)),f(ie,Pe)};T(me,ie=>{xe()!==""&&ie(le)})}var ge=d(me,2);Oe(ge,21,()=>V.sortProducts(fe()),ie=>ie.$id,(ie,j)=>{const Pe=J(()=>E(a(j).productType)),Te=J(()=>a(j).displayMissingQuantity==="✅ Complet");var We=Dd(),it=l(We),Nt=l(it),_t=l(Nt);_t.__click=[Sd,p,j];var Le=l(_t),Re=l(Le),$t=d(Le,2),At=l($t);{var zt=Ne=>{var De=Pd(),rt=l(De);xn(rt,{size:22}),f(Ne,De)};T(At,Ne=>{a(j).pFrais&&Ne(zt)})}var Je=d(At,2);{var ze=Ne=>{var De=kd(),rt=l(De);Sn(rt,{size:22}),f(Ne,De)};T(Je,Ne=>{a(j).pSurgel&&Ne(ze)})}var mt=d(Je,2);en(mt,()=>a(Pe).icon,(Ne,De)=>{De(Ne,{size:22})});var ot=d(_t,2),Mt=l(ot);Mt.__click=[Ed,p,j];var lt=l(Mt);Dr(lt,{class:"w-5 h-5"});var pr=d(lt,2),$r=l(pr),Zr=d(Mt,2);Zr.__click=[Td,p,j];var Vn=l(Zr);Dn(Vn,{class:"w-5 h-5"});var ha=d(Vn,2);{var mn=Ne=>{var De=Ad(),rt=l(De);Oe(rt,16,()=>a(j).who.slice(0,2),Vt=>Vt,(Vt,Mr)=>{var Xr=Nd(),ga=l(Xr);R(()=>k(ga,Mr)),f(Vt,Xr)});var _r=d(rt,2);{var Ar=Vt=>{var Mr=$d(),Xr=l(Mr);R(()=>k(Xr,`+${a(j).who.length-2}`)),f(Vt,Mr)};T(_r,Vt=>{a(j).who.length>2&&Vt(Ar)})}f(Ne,De)};T(ha,Ne=>{a(j).who&&a(j).who.length>0&&Ne(mn)})}var gn=d(ot,2);gn.__click=[Md,p,j];var pa=l(gn);{var _a=Ne=>{var De=Cd(),rt=l(De);hc(rt,{class:"w-4 h-4 shrink-0"});var _r=d(rt,2),Ar=l(_r);R(()=>k(Ar,`${a(j).displayTotalPurchases??""} acheté`)),f(Ne,De)},ma=Ne=>{var De=Id(),rt=l(De);fc(rt,{class:"w-4 h-4 shrink-0"});var _r=d(rt,2),Ar=l(_r);R(()=>k(Ar,`Manque ${a(j).displayMissingQuantity??""}`)),f(Ne,De)};T(pa,Ne=>{a(Te)?Ne(_a):Ne(ma,!1)})}R(()=>{k(Re,a(j).productName),k($r,a(j).storeInfo?.storeName||"-")}),f(ie,We)}),f(P,Se)});var pn=d(fr,2);{var Yr=P=>{var D=Rd();f(P,D)};T(pn,P=>{a(r).length===0&&P(Yr)})}var hr=d(N,2);Au(hr,{get isOpen(){return a(h)},get productId(){return a(_)},get initialTab(){return a(m)},onclose:g});var _n=d(hr,2),qn=l(_n),On=d(qn,2),ua=d(l(On),2),Ln=l(ua),Bn=l(Ln),da=l(Bn);Ea(da,{class:"w-5 h-5"});var Mi=d(Bn,2),Ci=l(Mi);bt(Ci,{class:"w-4 h-4"});var Za=d(Ln,2),Ii=d(l(Za),2),va=l(Ii);va.__change=[qd];var fa=d(va,2);fa.__change=[Od];var Xa=d(fa,2);Xa.__change=[Ld];var Fa=d(Za,2),Di=l(Fa),es=d(l(Di),2);Oe(es,20,()=>a(c),P=>P,(P,D)=>{const Ie=J(()=>E(D));var xe=Wd();xe.__click=[Bd,D];var fe=l(xe);en(fe,()=>a(Ie).icon,(me,le)=>{le(me,{class:"w-3 h-3 mr-1"})});var Se=d(fe);R(me=>{Me(xe,1,`btn btn-sm ${me??""}`),k(Se,` ${a(Ie).displayName??""}`)},[()=>a(u).selectedProductTypes.length===0?"btn-soft btn-accent":a(u).selectedProductTypes.includes(D)?"btn-accent":"btn-dash btn-accent"]),f(P,xe)});var ji=d(es,2),Wn=l(ji);Wn.__click=[zd];var Ri=l(Wn);xn(Ri,{class:"w-3 h-3"});var zn=d(Wn,2);zn.__click=[Vd];var qi=l(zn);Sn(qi,{class:"w-3 h-3"});var Oi=d(zn,2);{var Li=P=>{var D=Ud();D.__click=[Gd];var Ie=l(D);bt(Ie,{class:"w-3 h-3"}),f(P,D)};T(Oi,P=>{(a(u).selectedProductTypes.length>0||a(u).selectedTemperatures.length>0)&&P(Li)})}var ts=d(Fa,2);{var Bi=P=>{var D=Kd(),Ie=l(D),xe=d(l(Ie),2);Oe(xe,20,()=>a(i),fe=>fe,(fe,Se)=>{var me=Hd();me.__click=[Qd,Se];var le=l(me);R(ge=>{Me(me,1,`btn btn-sm ${ge??""}`),k(le,Se)},[()=>a(u).selectedStores.length===0?"btn-soft btn-accent":a(u).selectedStores.includes(Se)?"btn-accent":"btn-dash btn-accent"]),f(fe,me)}),f(P,D)};T(ts,P=>{a(i).length>0&&P(Bi)})}var rs=d(ts,2);{var Wi=P=>{var D=Zd(),Ie=l(D),xe=d(l(Ie),2);Oe(xe,20,()=>a(o),fe=>fe,(fe,Se)=>{var me=Yd();me.__click=[Jd,Se];var le=l(me);R(ge=>{Me(me,1,`btn btn-sm ${ge??""}`),k(le,Se)},[()=>a(u).selectedWho.length===0?"btn-soft btn-accent":a(u).selectedWho.includes(Se)?"btn-accent":"btn-dash btn-accent"]),f(fe,me)}),f(P,D)};T(rs,P=>{a(o).length>0&&P(Wi)})}var ns=d(rs,4);ns.__click=[Xd,v];var zi=l(ns);bt(zi,{class:"w-4 h-4 mr-2"});var Vi=d(_n,2),Gi=l(Vi),Ui=l(Gi);Ea(Ui,{class:"w-6 h-6"}),R((P,D)=>{k(M,` ${a(s).total??""}`),k(Q,` frais:
      ${a(s).frais??""}`),k(pe,` surgelés:
      ${a(s).surgel??""}`),k(se,` fusionnés:
      ${a(s).merged??""}`),Al($e,a(u).searchQuery),tn(vt,a(u).groupBy==="none"),tn(Ae,a(u).groupBy==="store"),tn(Ht,a(u).groupBy==="productType"),Me(kt,1,`cursor-pointer hover:bg-base-200 text-center ${a(u).groupBy==="store"?"hidden":""}`),Me(dr,1,`cursor-pointer hover:bg-base-200 text-center ${a(u).groupBy==="productType"?"hidden":""}`),tn(va,a(u).groupBy==="none"),tn(fa,a(u).groupBy==="store"),tn(Xa,a(u).groupBy==="productType"),Me(Wn,1,`btn btn-sm ${P??""}`),Me(zn,1,`btn btn-sm ${D??""}`)},[()=>a(u).selectedTemperatures.length===0?"btn-soft btn-success":a(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(u).selectedTemperatures.length===0?"btn-soft btn-info":a(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Il(qn,()=>a(v),P=>x(v,P)),f(e,S),Z()}Qr(["click","input","change"]);Io();var tv=w('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function rv(e){var t=tv();f(e,t)}var nv=w('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function av(e,t){var r=nv(),n=d(l(r),2),s=d(l(n),2),i=l(s);R(()=>k(i,t.message)),f(e,r)}var sv=w('<div class="flex items-center gap-2 text-success"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),iv=w('<div class="flex items-center gap-2 text-info"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),ov=w('<div class="text-base-content/60"> </div>'),lv=w('<div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),cv=w('<div class="min-h-screen bg-base-100"><header class="sticky top-0 z-10 bg-base-200 shadow-sm"><div class="container mx-auto px-4 py-4"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-base-content">Produits</h1> <p class="text-sm text-base-content/70"> </p></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function uv(e,t){Y(t,!0);let r,n=re(null);Ei(async()=>{r=Ul();try{await V.initialize(r)}catch(O){x(n,O instanceof Error?O.message:"Erreur lors de l'initialisation",!0),console.error("[App] Erreur initialisation:",O)}}),ql(()=>{V.destroy()});const s=J(()=>a(n)||V.error),i=J(()=>V.loading&&V.products.length===0);var o=cv(),c=l(o),u=l(c),v=l(u),h=l(v),_=d(l(h),2),m=l(_),p=d(h,2),g=l(p);{var E=O=>{var L=sv();f(O,L)};T(g,O=>{V.realtimeConnected&&O(E)})}var S=d(g,2);{var N=O=>{var L=iv();f(O,L)};T(S,O=>{V.syncing&&O(N)})}var q=d(S,2);{var A=O=>{var L=ov(),se=l(L);R(te=>k(se,`Maj: ${te??""}`),[()=>new Date(V.lastSync).toLocaleTimeString()]),f(O,L)};T(q,O=>{V.lastSync&&O(A)})}var C=d(c,2),M=l(C);{var I=O=>{av(O,{get message(){return a(s)}})};T(M,O=>{a(s)&&O(I)})}var B=d(M,2);{var Q=O=>{rv(O)};T(B,O=>{a(i)&&O(Q)})}var U=d(B,2);{var ae=O=>{ev(O,{})},pe=O=>{var L=K(),se=G(L);{var te=_e=>{var Qe=lv();f(_e,Qe)};T(se,_e=>{V.loading||_e(te)},!0)}f(O,L)};T(U,O=>{V.products.length>0?O(ae):O(pe,!1)})}R(()=>k(m,`Liste: ${r??""}`)),f(e,o),Z()}ml(uv,{target:document.getElementById("app_products")});
