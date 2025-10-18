(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const ya=!1;var Tn=Array.isArray,ro=Array.prototype.indexOf,cs=Array.from,es=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,no=Object.getOwnPropertyDescriptors,so=Object.prototype,ao=Array.prototype,xa=Object.getPrototypeOf,Us=Object.isExtensible;function Qr(e){return typeof e=="function"}const pe=()=>{};function io(e){for(var t=0;t<e.length;t++)e[t]()}function Sa(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function Pa(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Ye=2,us=4,ds=8,pr=16,Wt=32,_r=64,fs=128,lt=256,xn=512,$e=1024,nt=2048,Xt=4096,gt=8192,gr=16384,vs=32768,jr=65536,Vs=1<<17,oo=1<<18,Or=1<<19,lo=1<<20,ts=1<<21,Nn=1<<22,lr=1<<23,cr=Symbol("$state"),Ea=Symbol("legacy props"),co=Symbol(""),Yr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ka(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function uo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function fo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function vo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ho(e){throw new Error("https://svelte.dev/e/effect_orphan")}function po(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function _o(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function go(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function mo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function bo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function wo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const An=1,Cn=2,Ta=4,yo=8,xo=16,So=1,Po=2,Eo=4,ko=8,To=16,No=1,Ao=2,Ne=Symbol(),Co="http://www.w3.org/1999/xhtml",Mo="http://www.w3.org/2000/svg",Io="@attach";function $o(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Do(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Ro=!1;function Na(e){return e===this.v}function qo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Aa(e){return!qo(e,this.v)}let Lr=!1,jo=!1;function Oo(){Lr=!0}let we=null;function Ir(e){we=e}function se(e,t=!1,r){we={p:we,c:null,e:null,s:e,x:null,l:Lr&&!t?{s:null,u:null,$:[]}:null}}function ae(e){var t=we,r=t.e;if(r!==null){t.e=null;for(var n of r)Ga(n)}return we=t.p,{}}function nn(){return!Lr||we!==null&&we.l===null}let or=[];function Ca(){var e=or;or=[],io(e)}function fr(e){if(or.length===0&&!Zr){var t=or;queueMicrotask(()=>{t===or&&Ca()})}or.push(e)}function Lo(){for(;or.length>0;)Ca()}const Wo=new WeakMap;function Ma(e){var t=Q;if(t===null)return H.f|=lr,e;if((t.f&vs)===0){if((t.f&fs)===0)throw!t.parent&&e instanceof Error&&Ia(e),e;t.b.error(e)}else $r(e,t)}function $r(e,t){for(;t!==null;){if((t.f&fs)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&Ia(e),e}function Ia(e){const t=Wo.get(e);t&&(es(e,"message",{value:t.message}),es(e,"stack",{value:t.stack}))}const gn=new Set;let ce=null,yn=null,rs=new Set,Et=[],Mn=null,ns=!1,Zr=!1;class ot{current=new Map;#t=new Map;#r=new Set;#s=0;#n=null;#c=[];#a=[];#o=[];#i=[];#l=[];#u=[];skipped_effects=new Set;process(t){Et=[],yn=null;var r=ot.apply(this);for(const i of t)this.#v(i);if(this.#s===0){this.#h();var n=this.#a,a=this.#o;this.#a=[],this.#o=[],this.#i=[],yn=this,ce=null,Gs(n),Gs(a),yn=null,this.#n?.resolve()}else this.#f(this.#a),this.#f(this.#o),this.#f(this.#i);r();for(const i of this.#c)tn(i);this.#c=[]}#v(t){t.f^=$e;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Wt|_r))!==0,i=a&&(n&$e)!==0,o=i||(n&gt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){a?r.f^=$e:(n&us)!==0?this.#o.push(r):(n&$e)===0&&((n&Nn)!==0&&r.b?.is_pending()?this.#c.push(r):qn(r)&&((r.f&pr)!==0&&this.#i.push(r),tn(r)));var c=r.first;if(c!==null){r=c;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#f(t){for(const r of t)((r.f&nt)!==0?this.#l:this.#u).push(r),ze(r,$e);t.length=0}capture(t,r){this.#t.has(t)||this.#t.set(t,r),this.current.set(t,t.v)}activate(){ce=this}deactivate(){ce=null}flush(){if(Et.length>0){if(this.activate(),$a(),ce!==null&&ce!==this)return}else this.#s===0&&this.#h();this.deactivate();for(const t of rs)if(rs.delete(t),t(),ce!==null)break}#h(){for(const t of this.#r)t();if(this.#r.clear(),gn.size>1){this.#t.clear();let t=!0;for(const r of gn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;Da(n)}if(Et.length>0){ce=r;const n=ot.apply(r);for(const a of Et)r.#v(a);Et=[],n()}}ce=null}gn.delete(this)}increment(){this.#s+=1}decrement(){this.#s-=1;for(const t of this.#l)ze(t,nt),vr(t);for(const t of this.#u)ze(t,Xt),vr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#n??=Sa()).promise}static ensure(){if(ce===null){const t=ce=new ot;gn.add(ce),Zr||ot.enqueue(()=>{ce===t&&t.flush()})}return ce}static enqueue(t){fr(t)}static apply(t){return pe}}function Bo(e){var t=Zr;Zr=!0;try{for(var r;;){if(Lo(),Et.length===0&&(ce?.flush(),Et.length===0))return Mn=null,r;$a()}}finally{Zr=t}}function $a(){var e=Mr;ns=!0;try{var t=0;for(Js(!0);Et.length>0;){var r=ot.ensure();if(t++>1e3){var n,a;zo()}r.process(Et),Zt.clear()}}finally{ns=!1,Js(e),Mn=null}}function zo(){try{po()}catch(e){$r(e,Mn)}}let ir=null;function Gs(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(gr|gt))===0&&qn(n)&&(ir=[],tn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Ka(n):n.fn=null),ir?.length>0)){Zt.clear();for(const a of ir)tn(a);ir=[]}}ir=null}}function Da(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&Ye)!==0?Da(t):(r&(Nn|pr))!==0&&(ze(t,nt),vr(t))}}function vr(e){for(var t=Mn=e;t.parent!==null;){t=t.parent;var r=t.f;if(ns&&t===Q&&(r&pr)!==0)return;if((r&(_r|Wt))!==0){if((r&$e)===0)return;t.f^=$e}}Et.push(t)}function hs(e){let t=0,r=hr(0),n;return()=>{sl()&&(s(r),bs(()=>(t===0&&(n=Wr(()=>e(()=>Xr(r)))),t+=1,()=>{fr(()=>{t-=1,t===0&&(n?.(),n=void 0,Xr(r))})})))}}var Uo=jr|Or|fs;function Vo(e,t,r){new Go(e,t,r)}class Go{parent;#t=!1;#r;#s=null;#n;#c;#a;#o=null;#i=null;#l=null;#u=null;#v=0;#f=0;#h=!1;#e=null;#b=()=>{this.#e&&Dr(this.#e,this.#v)};#w=hs(()=>(this.#e=hr(this.#v),()=>{this.#e=null}));constructor(t,r,n){this.#r=t,this.#n=r,this.#c=n,this.parent=Q.b,this.#t=!!this.#n.pending,this.#a=br(()=>{Q.b=this;{try{this.#o=Be(()=>n(this.#r))}catch(a){this.error(a)}this.#f>0?this.#_():this.#t=!1}},Uo)}#y(){try{this.#o=Be(()=>this.#c(this.#r))}catch(t){this.error(t)}this.#t=!1}#x(){const t=this.#n.pending;t&&(this.#i=Be(()=>t(this.#r)),ot.enqueue(()=>{this.#o=this.#p(()=>(ot.ensure(),Be(()=>this.#c(this.#r)))),this.#f>0?this.#_():(ur(this.#i,()=>{this.#i=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#p(t){var r=Q,n=H,a=we;Tt(this.#a),Je(this.#a),Ir(this.#a.ctx);try{return t()}catch(i){return Ma(i),null}finally{Tt(r),Je(n),Ir(a)}}#_(){const t=this.#n.pending;this.#o!==null&&(this.#u=document.createDocumentFragment(),Qo(this.#o,this.#u)),this.#i===null&&(this.#i=Be(()=>t(this.#r)))}#m(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t);return}this.#f+=t,this.#f===0&&(this.#t=!1,this.#i&&ur(this.#i,()=>{this.#i=null}),this.#u&&(this.#r.before(this.#u),this.#u=null),fr(()=>{ot.ensure().flush()}))}update_pending_count(t){this.#m(t),this.#v+=t,rs.add(this.#b)}get_effect_pending(){return this.#w(),s(this.#e)}error(t){var r=this.#n.onerror;let n=this.#n.failed;if(this.#h||!r&&!n)throw t;this.#o&&(Ae(this.#o),this.#o=null),this.#i&&(Ae(this.#i),this.#i=null),this.#l&&(Ae(this.#l),this.#l=null);var a=!1,i=!1;const o=()=>{if(a){Do();return}a=!0,i&&wo(),ot.ensure(),this.#v=0,this.#l!==null&&ur(this.#l,()=>{this.#l=null}),this.#t=this.has_pending_snippet(),this.#o=this.#p(()=>(this.#h=!1,Be(()=>this.#c(this.#r)))),this.#f>0?this.#_():this.#t=!1};var c=H;try{Je(null),i=!0,r?.(t,o),i=!1}catch(u){$r(u,this.#a&&this.#a.parent)}finally{Je(c)}n&&fr(()=>{this.#l=this.#p(()=>{this.#h=!0;try{return Be(()=>{n(this.#r,()=>t,()=>o)})}catch(u){return $r(u,this.#a.parent),null}finally{this.#h=!1}})})}}function Qo(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:sn(r);t.append(r),r=a}}function Ra(e,t,r){const n=nn()?In:ps;if(t.length===0){r(e.map(n));return}var a=ce,i=Q,o=Ho();Promise.all(t.map(c=>Ko(c))).then(c=>{o();try{r([...e.map(n),...c])}catch(u){(i.f&gr)===0&&$r(u,i)}a?.deactivate(),qa()}).catch(c=>{$r(c,i)})}function Ho(){var e=Q,t=H,r=we,n=ce;return function(){Tt(e),Je(t),Ir(r),n?.activate()}}function qa(){Tt(null),Je(null),Ir(null)}function In(e){var t=Ye|nt,r=H!==null&&(H.f&Ye)!==0?H:null;return Q===null||r!==null&&(r.f&lt)!==0?t|=lt:Q.f|=Or,{ctx:we,deps:null,effects:null,equals:Na,f:t,fn:e,reactions:null,rv:0,v:Ne,wv:0,parent:r??Q,ac:null}}function Ko(e,t){let r=Q;r===null&&uo();var n=r.b,a=void 0,i=hr(Ne),o=!H,c=new Map;return il(()=>{var u=Sa();a=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(_){u.reject(_)}var f=ce,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),c.get(f)?.reject(Yr),c.set(f,u)));const p=(_,h=void 0)=>{v||f.activate(),h?h!==Yr&&(i.f|=lr,Dr(i,h)):((i.f&lr)!==0&&(i.f^=lr),Dr(i,_)),o&&(n.update_pending_count(-1),v||f.decrement()),qa()};u.promise.then(p,_=>p(null,_||"unknown"))}),Va(()=>{for(const u of c.values())u.reject(Yr)}),new Promise(u=>{function f(v){function p(){v===a?u(i):f(a)}v.then(p,p)}f(a)})}function F(e){const t=In(e);return Za(t),t}function ps(e){const t=In(e);return t.equals=Aa,t}function ja(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Ae(t[r])}}function Jo(e){for(var t=e.parent;t!==null;){if((t.f&Ye)===0)return t;t=t.parent}return null}function _s(e){var t,r=Q;Tt(Jo(e));try{ja(e),t=ti(e)}finally{Tt(r)}return t}function Oa(e){var t=_s(e);if(e.equals(t)||(e.v=t,e.wv=Fa()),!wr){var r=(Kt||(e.f&lt)!==0)&&e.deps!==null?Xt:$e;ze(e,r)}}const Zt=new Map;function hr(e,t){var r={f:0,v:e,reactions:null,equals:Na,rv:0,wv:0};return r}function X(e,t){const r=hr(e);return Za(r),r}function Yo(e,t=!1,r=!0){const n=hr(e);return t||(n.equals=Aa),Lr&&r&&we!==null&&we.l!==null&&(we.l.s??=[]).push(n),n}function y(e,t,r=!1){H!==null&&(!_t||(H.f&Vs)!==0)&&nn()&&(H.f&(Ye|pr|Nn|Vs))!==0&&!Lt?.includes(e)&&bo();let n=r?rt(t):t;return Dr(e,n)}function Dr(e,t){if(!e.equals(t)){var r=e.v;wr?Zt.set(e,t):Zt.set(e,r),e.v=t;var n=ot.ensure();n.capture(e,r),(e.f&Ye)!==0&&((e.f&nt)!==0&&_s(e),ze(e,(e.f&lt)===0?$e:Xt)),e.wv=Fa(),La(e,nt),nn()&&Q!==null&&(Q.f&$e)!==0&&(Q.f&(Wt|_r))===0&&(it===null?cl([e]):it.push(e))}return t}function Xr(e){y(e,e.v+1)}function La(e,t){var r=e.reactions;if(r!==null)for(var n=nn(),a=r.length,i=0;i<a;i++){var o=r[i],c=o.f;if(!(!n&&o===Q)){var u=(c&nt)===0;u&&ze(o,t),(c&Ye)!==0?La(o,Xt):u&&((c&pr)!==0&&ir!==null&&ir.push(o),vr(o))}}}function rt(e){if(typeof e!="object"||e===null||cr in e)return e;const t=xa(e);if(t!==so&&t!==ao)return e;var r=new Map,n=Tn(e),a=X(0),i=dr,o=c=>{if(dr===i)return c();var u=H,f=dr;Je(null),Zs(i);var v=c();return Je(u),Zs(f),v};return n&&r.set("length",X(e.length)),new Proxy(e,{defineProperty(c,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&go();var v=r.get(u);return v===void 0?v=o(()=>{var p=X(f.value);return r.set(u,p),p}):y(v,f.value,!0),!0},deleteProperty(c,u){var f=r.get(u);if(f===void 0){if(u in c){const v=o(()=>X(Ne));r.set(u,v),Xr(a)}}else y(f,Ne),Xr(a);return!0},get(c,u,f){if(u===cr)return e;var v=r.get(u),p=u in c;if(v===void 0&&(!p||Yt(c,u)?.writable)&&(v=o(()=>{var h=rt(p?c[u]:Ne),m=X(h);return m}),r.set(u,v)),v!==void 0){var _=s(v);return _===Ne?void 0:_}return Reflect.get(c,u,f)},getOwnPropertyDescriptor(c,u){var f=Reflect.getOwnPropertyDescriptor(c,u);if(f&&"value"in f){var v=r.get(u);v&&(f.value=s(v))}else if(f===void 0){var p=r.get(u),_=p?.v;if(p!==void 0&&_!==Ne)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return f},has(c,u){if(u===cr)return!0;var f=r.get(u),v=f!==void 0&&f.v!==Ne||Reflect.has(c,u);if(f!==void 0||Q!==null&&(!v||Yt(c,u)?.writable)){f===void 0&&(f=o(()=>{var _=v?rt(c[u]):Ne,h=X(_);return h}),r.set(u,f));var p=s(f);if(p===Ne)return!1}return v},set(c,u,f,v){var p=r.get(u),_=u in c;if(n&&u==="length")for(var h=f;h<p.v;h+=1){var m=r.get(h+"");m!==void 0?y(m,Ne):h in c&&(m=o(()=>X(Ne)),r.set(h+"",m))}if(p===void 0)(!_||Yt(c,u)?.writable)&&(p=o(()=>X(void 0)),y(p,rt(f)),r.set(u,p));else{_=p.v!==Ne;var S=o(()=>rt(f));y(p,S)}var x=Reflect.getOwnPropertyDescriptor(c,u);if(x?.set&&x.set.call(v,f),!_){if(n&&typeof u=="string"){var E=r.get("length"),D=Number(u);Number.isInteger(D)&&D>=E.v&&y(E,D+1)}Xr(a)}return!0},ownKeys(c){s(a);var u=Reflect.ownKeys(c).filter(p=>{var _=r.get(p);return _===void 0||_.v!==Ne});for(var[f,v]of r)v.v!==Ne&&!(f in c)&&u.push(f);return u},setPrototypeOf(){mo()}})}function Qs(e){try{if(e!==null&&typeof e=="object"&&cr in e)return e[cr]}catch{}return e}function Zo(e,t){return Object.is(Qs(e),Qs(t))}var Hs,Wa,Ba,za;function Xo(){if(Hs===void 0){Hs=window,Wa=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ba=Yt(t,"firstChild").get,za=Yt(t,"nextSibling").get,Us(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Us(r)&&(r.__t=void 0)}}function mr(e=""){return document.createTextNode(e)}function Rr(e){return Ba.call(e)}function sn(e){return za.call(e)}function l(e,t){return Rr(e)}function ee(e,t=!1){{var r=Rr(e);return r instanceof Comment&&r.data===""?sn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=sn(n);return n}function Fo(e){e.textContent=""}function Ua(){return!1}function el(e,t){if(t){const r=document.body;e.autofocus=!0,fr(()=>{document.activeElement===r&&e.focus()})}}let Ks=!1;function tl(){Ks||(Ks=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function $n(e){var t=H,r=Q;Je(null),Tt(null);try{return e()}finally{Je(t),Tt(r)}}function gs(e,t,r,n=r){e.addEventListener(t,()=>$n(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),tl()}function rl(e){Q===null&&H===null&&ho(),H!==null&&(H.f&lt)!==0&&Q===null&&vo(),wr&&fo()}function nl(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Bt(e,t,r,n=!0){var a=Q;a!==null&&(a.f&gt)!==0&&(e|=gt);var i={ctx:we,deps:null,nodes_start:null,nodes_end:null,f:e|nt,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{tn(i),i.f|=vs}catch(u){throw Ae(i),u}else t!==null&&vr(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Or)===0&&(o=o.first),o!==null&&(o.parent=a,a!==null&&nl(o,a),H!==null&&(H.f&Ye)!==0&&(e&_r)===0)){var c=H;(c.effects??=[]).push(o)}}return i}function sl(){return H!==null&&!_t}function Va(e){const t=Bt(ds,null,!1);return ze(t,$e),t.teardown=e,t}function Dn(e){rl();var t=Q.f,r=!H&&(t&Wt)!==0&&(t&vs)===0;if(r){var n=we;(n.e??=[]).push(e)}else return Ga(e)}function Ga(e){return Bt(us|lo,e,!1)}function al(e){ot.ensure();const t=Bt(_r|Or,e,!0);return(r={})=>new Promise(n=>{r.outro?ur(t,()=>{Ae(t),n(void 0)}):(Ae(t),n(void 0))})}function ms(e){return Bt(us,e,!1)}function il(e){return Bt(Nn|Or,e,!0)}function bs(e,t=0){return Bt(ds|t,e,!0)}function B(e,t=[],r=[]){Ra(t,r,n=>{Bt(ds,()=>e(...n.map(s)),!0)})}function br(e,t=0){var r=Bt(pr|t,e,!0);return r}function Be(e,t=!0){return Bt(Wt|Or,e,!0,t)}function Qa(e){var t=e.teardown;if(t!==null){const r=wr,n=H;Ys(!0),Je(null);try{t.call(null)}finally{Ys(r),Je(n)}}}function Ha(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&$n(()=>{a.abort(Yr)});var n=r.next;(r.f&_r)!==0?r.parent=null:Ae(r,t),r=n}}function ol(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Wt)===0&&Ae(t),t=r}}function Ae(e,t=!0){var r=!1;(t||(e.f&oo)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(ll(e.nodes_start,e.nodes_end),r=!0),Ha(e,t&&!r),Sn(e,0),ze(e,gr);var n=e.transitions;if(n!==null)for(const i of n)i.stop();Qa(e);var a=e.parent;a!==null&&a.first!==null&&Ka(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function ll(e,t){for(;e!==null;){var r=e===t?null:sn(e);e.remove(),e=r}}function Ka(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function ur(e,t){var r=[];ws(e,r,!0),Ja(r,()=>{Ae(e),t&&t()})}function Ja(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function ws(e,t,r){if((e.f&gt)===0){if(e.f^=gt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var a=n.next,i=(n.f&jr)!==0||(n.f&Wt)!==0;ws(n,t,i?r:!1),n=a}}}function Rn(e){Ya(e,!0)}function Ya(e,t){if((e.f&gt)!==0){e.f^=gt,(e.f&$e)===0&&(ze(e,nt),vr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&jr)!==0||(r.f&Wt)!==0;Ya(r,a?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let Mr=!1;function Js(e){Mr=e}let wr=!1;function Ys(e){wr=e}let H=null,_t=!1;function Je(e){H=e}let Q=null;function Tt(e){Q=e}let Lt=null;function Za(e){H!==null&&(Lt===null?Lt=[e]:Lt.push(e))}let We=null,tt=0,it=null;function cl(e){it=e}let Xa=1,en=0,dr=en;function Zs(e){dr=e}let Kt=!1;function Fa(){return++Xa}function qn(e){var t=e.f;if((t&nt)!==0)return!0;if((t&Xt)!==0){var r=e.deps,n=(t&lt)!==0;if(r!==null){var a,i,o=(t&xn)!==0,c=n&&Q!==null&&!Kt,u=r.length;if((o||c)&&(Q===null||(Q.f&gr)===0)){var f=e,v=f.parent;for(a=0;a<u;a++)i=r[a],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=xn),c&&v!==null&&(v.f&lt)===0&&(f.f^=lt)}for(a=0;a<u;a++)if(i=r[a],qn(i)&&Oa(i),i.wv>e.wv)return!0}(!n||Q!==null&&!Kt)&&ze(e,$e)}return!1}function ei(e,t,r=!0){var n=e.reactions;if(n!==null&&!Lt?.includes(e))for(var a=0;a<n.length;a++){var i=n[a];(i.f&Ye)!==0?ei(i,t,!1):t===i&&(r?ze(i,nt):(i.f&$e)!==0&&ze(i,Xt),vr(i))}}function ti(e){var t=We,r=tt,n=it,a=H,i=Kt,o=Lt,c=we,u=_t,f=dr,v=e.f;We=null,tt=0,it=null,Kt=(v&lt)!==0&&(_t||!Mr||H===null),H=(v&(Wt|_r))===0?e:null,Lt=null,Ir(e.ctx),_t=!1,dr=++en,e.ac!==null&&($n(()=>{e.ac.abort(Yr)}),e.ac=null);try{e.f|=ts;var p=e.fn,_=p(),h=e.deps;if(We!==null){var m;if(Sn(e,tt),h!==null&&tt>0)for(h.length=tt+We.length,m=0;m<We.length;m++)h[tt+m]=We[m];else e.deps=h=We;if(!Kt||(v&Ye)!==0&&e.reactions!==null)for(m=tt;m<h.length;m++)(h[m].reactions??=[]).push(e)}else h!==null&&tt<h.length&&(Sn(e,tt),h.length=tt);if(nn()&&it!==null&&!_t&&h!==null&&(e.f&(Ye|Xt|nt))===0)for(m=0;m<it.length;m++)ei(it[m],e);return a!==null&&a!==e&&(en++,it!==null&&(n===null?n=it:n.push(...it))),(e.f&lr)!==0&&(e.f^=lr),_}catch(S){return Ma(S)}finally{e.f^=ts,We=t,tt=r,it=n,H=a,Kt=i,Lt=o,Ir(c),_t=u,dr=f}}function ul(e,t){let r=t.reactions;if(r!==null){var n=ro.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&Ye)!==0&&(We===null||!We.includes(t))&&(ze(t,Xt),(t.f&(lt|xn))===0&&(t.f^=xn),ja(t),Sn(t,0))}function Sn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)ul(e,r[n])}function tn(e){var t=e.f;if((t&gr)===0){ze(e,$e);var r=Q,n=Mr;Q=e,Mr=!0;try{(t&pr)!==0?ol(e):Ha(e),Qa(e);var a=ti(e);e.teardown=typeof a=="function"?a:null,e.wv=Xa;var i;ya&&jo&&(e.f&nt)!==0&&e.deps}finally{Mr=n,Q=r}}}async function dl(){await Promise.resolve(),Bo()}function s(e){var t=e.f,r=(t&Ye)!==0;if(H!==null&&!_t){var n=Q!==null&&(Q.f&gr)!==0;if(!n&&!Lt?.includes(e)){var a=H.deps;if((H.f&ts)!==0)e.rv<en&&(e.rv=en,We===null&&a!==null&&a[tt]===e?tt++:We===null?We=[e]:(!Kt||!We.includes(e))&&We.push(e));else{(H.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[H]:i.includes(H)||i.push(H)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,c=o.parent;c!==null&&(c.f&lt)===0&&(o.f^=lt)}if(wr){if(Zt.has(e))return Zt.get(e);if(r){o=e;var u=o.v;return((o.f&$e)===0&&o.reactions!==null||ri(o))&&(u=_s(o)),Zt.set(o,u),u}}else r&&(o=e,qn(o)&&Oa(o));if((e.f&lr)!==0)throw e.v;return e.v}function ri(e){if(e.v===Ne)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Zt.has(t)||(t.f&Ye)!==0&&ri(t))return!0;return!1}function Wr(e){var t=_t;try{return _t=!0,e()}finally{_t=t}}const fl=-7169;function ze(e,t){e.f=e.f&fl|t}function vl(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const hl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function pl(e){return hl.includes(e)}const _l={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function gl(e){return e=e.toLowerCase(),_l[e]??e}const ml=["touchstart","touchmove"];function bl(e){return ml.includes(e)}const ni=new Set,ss=new Set;function si(e,t,r,n={}){function a(i){if(n.capture||Jr.call(t,i),!i.cancelBubble)return $n(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?fr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function as(e,t,r,n={}){var a=si(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function yr(e){for(var t=0;t<e.length;t++)ni.add(e[t]);for(var r of ss)r(e)}let Xs=null;function Jr(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;Xs=e;var o=0,c=Xs===e&&e.__root;if(c){var u=a.indexOf(c);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;u<=f&&(o=u)}if(i=a[o]||e.target,i!==t){es(e,"currentTarget",{configurable:!0,get(){return i||r}});var v=H,p=Q;Je(null),Tt(null);try{for(var _,h=[];i!==null;){var m=i.assignedSlot||i.parentNode||i.host||null;try{var S=i["__"+n];if(S!=null&&(!i.disabled||e.target===i))if(Tn(S)){var[x,...E]=S;x.apply(i,[e,...E])}else S.call(i,e)}catch(D){_?h.push(D):_=D}if(e.cancelBubble||m===t||m===null)break;i=m}if(_){for(let D of h)queueMicrotask(()=>{throw D});throw _}}finally{e.__root=t,delete e.currentTarget,Je(v),Tt(p)}}}function ai(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function qr(e,t){var r=Q;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function P(e,t){var r=(t&No)!==0,n=(t&Ao)!==0,a,i=!e.startsWith("<!>");return()=>{a===void 0&&(a=ai(i?e:"<!>"+e),r||(a=Rr(a)));var o=n||Wa?document.importNode(a,!0):a.cloneNode(!0);if(r){var c=Rr(o),u=o.lastChild;qr(c,u)}else qr(o,o);return o}}function wl(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=ai(a),c=Rr(o);i=Rr(c)}var u=i.cloneNode(!0);return qr(u,u),u}}function yl(e,t){return wl(e,t,"svg")}function je(e=""){{var t=mr(e+"");return qr(t,t),t}}function ne(){var e=document.createDocumentFragment(),t=document.createComment(""),r=mr();return e.append(t,r),qr(t,r),e}function g(e,t){e!==null&&e.before(t)}function C(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function xl(e,t){return Sl(e,t)}const Ar=new Map;function Sl(e,{target:t,anchor:r,props:n={},events:a,context:i,intro:o=!0}){Xo();var c=new Set,u=p=>{for(var _=0;_<p.length;_++){var h=p[_];if(!c.has(h)){c.add(h);var m=bl(h);t.addEventListener(h,Jr,{passive:m});var S=Ar.get(h);S===void 0?(document.addEventListener(h,Jr,{passive:m}),Ar.set(h,1)):Ar.set(h,S+1)}}};u(cs(ni)),ss.add(u);var f=void 0,v=al(()=>{var p=r??t.appendChild(mr());return Vo(p,{pending:()=>{}},_=>{if(i){se({});var h=we;h.c=i}a&&(n.$$events=a),f=e(_,n)||{},i&&ae()}),()=>{for(var _ of c){t.removeEventListener(_,Jr);var h=Ar.get(_);--h===0?(document.removeEventListener(_,Jr),Ar.delete(_)):Ar.set(_,h)}ss.delete(u),p!==r&&p.parentNode?.removeChild(p)}});return Pl.set(f,v),f}let Pl=new WeakMap;function $(e,t,r=!1){var n=e,a=null,i=null,o=Ne,c=r?jr:0,u=!1;const f=(h,m=!0)=>{u=!0,_(m,h)};var v=null;function p(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var h=o?a:i,m=o?i:a;h&&Rn(h),m&&ur(m,()=>{o?i=null:a=null})}const _=(h,m)=>{if(o!==(o=h)){var S=Ua(),x=n;if(S&&(v=document.createDocumentFragment(),v.append(x=mr())),o?a??=m&&Be(()=>m(x)):i??=m&&Be(()=>m(x)),S){var E=ce,D=o?a:i,k=o?i:a;D&&E.skipped_effects.delete(D),k&&E.skipped_effects.add(k),E.add_callback(p)}else p()}};br(()=>{u=!1,t(f),u||_(null,null)},c)}function El(e,t){return t}function kl(e,t,r){for(var n=e.items,a=[],i=t.length,o=0;o<i;o++)ws(t[o].e,a,!0);var c=i>0&&a.length===0&&r!==null;if(c){var u=r.parentNode;Fo(u),u.append(r),n.clear(),Pt(e,t[0].prev,t[i-1].next)}Ja(a,()=>{for(var f=0;f<i;f++){var v=t[f];c||(n.delete(v.k),Pt(e,v.prev,v.next)),Ae(v.e,!c)}})}function Oe(e,t,r,n,a,i=null){var o=e,c={flags:t,items:new Map,first:null},u=(t&Ta)!==0;if(u){var f=e;o=f.appendChild(mr())}var v=null,p=!1,_=new Map,h=ps(()=>{var E=r();return Tn(E)?E:E==null?[]:cs(E)}),m,S;function x(){Tl(S,m,c,_,o,a,t,n,r),i!==null&&(m.length===0?v?Rn(v):v=Be(()=>i(o)):v!==null&&ur(v,()=>{v=null}))}br(()=>{S??=Q,m=s(h);var E=m.length;if(!(p&&E===0)){p=E===0;var D,k,I,T;if(Ua()){var M=new Set,j=ce;for(k=0;k<E;k+=1){I=m[k],T=n(I,k);var U=c.items.get(T)??_.get(T);U?(t&(An|Cn))!==0&&ii(U,I,k,t):(D=oi(null,c,null,null,I,T,k,a,t,r,!0),_.set(T,D)),M.add(T)}for(const[z,te]of c.items)M.has(z)||j.skipped_effects.add(te.e);j.add_callback(x)}else x();s(h)}})}function Tl(e,t,r,n,a,i,o,c,u){var f=(o&yo)!==0,v=(o&(An|Cn))!==0,p=t.length,_=r.items,h=r.first,m=h,S,x=null,E,D=[],k=[],I,T,M,j;if(f)for(j=0;j<p;j+=1)I=t[j],T=c(I,j),M=_.get(T),M!==void 0&&(M.a?.measure(),(E??=new Set).add(M));for(j=0;j<p;j+=1){if(I=t[j],T=c(I,j),M=_.get(T),M===void 0){var U=n.get(T);if(U!==void 0){n.delete(T),_.set(T,U);var z=x?x.next:m;Pt(r,x,U),Pt(r,U,z),Hn(U,z,a),x=U}else{var te=m?m.e.nodes_start:a;x=oi(te,r,x,x===null?r.first:x.next,I,T,j,i,o,u)}_.set(T,x),D=[],k=[],m=x.next;continue}if(v&&ii(M,I,j,o),(M.e.f&gt)!==0&&(Rn(M.e),f&&(M.a?.unfix(),(E??=new Set).delete(M))),M!==m){if(S!==void 0&&S.has(M)){if(D.length<k.length){var ie=k[0],R;x=ie.prev;var q=D[0],Y=D[D.length-1];for(R=0;R<D.length;R+=1)Hn(D[R],ie,a);for(R=0;R<k.length;R+=1)S.delete(k[R]);Pt(r,q.prev,Y.next),Pt(r,x,q),Pt(r,Y,ie),m=ie,x=Y,j-=1,D=[],k=[]}else S.delete(M),Hn(M,m,a),Pt(r,M.prev,M.next),Pt(r,M,x===null?r.first:x.next),Pt(r,x,M),x=M;continue}for(D=[],k=[];m!==null&&m.k!==T;)(m.e.f&gt)===0&&(S??=new Set).add(m),k.push(m),m=m.next;if(m===null)continue;M=m}D.push(M),x=M,m=M.next}if(m!==null||S!==void 0){for(var Z=S===void 0?[]:cs(S);m!==null;)(m.e.f&gt)===0&&Z.push(m),m=m.next;var le=Z.length;if(le>0){var Ce=(o&Ta)!==0&&p===0?a:null;if(f){for(j=0;j<le;j+=1)Z[j].a?.measure();for(j=0;j<le;j+=1)Z[j].a?.fix()}kl(r,Z,Ce)}}f&&fr(()=>{if(E!==void 0)for(M of E)M.a?.apply()}),e.first=r.first&&r.first.e,e.last=x&&x.e;for(var ve of n.values())Ae(ve.e);n.clear()}function ii(e,t,r,n){(n&An)!==0&&Dr(e.v,t),(n&Cn)!==0?Dr(e.i,r):e.i=r}function oi(e,t,r,n,a,i,o,c,u,f,v){var p=(u&An)!==0,_=(u&xo)===0,h=p?_?Yo(a,!1,!1):hr(a):a,m=(u&Cn)===0?o:hr(o),S={i:m,v:h,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var x=document.createDocumentFragment();x.append(e=mr())}return S.e=Be(()=>c(e,h,m,f),Ro),S.e.prev=r&&r.e,S.e.next=n&&n.e,r===null?v||(t.first=S):(r.next=S,r.e.next=S.e),n!==null&&(n.prev=S,n.e.prev=S.e),S}finally{}}function Hn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=sn(i);a.before(i),i=o}}function Pt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function xe(e,t,...r){var n=e,a=pe,i;br(()=>{a!==(a=t())&&(i&&(Ae(i),i=null),i=Be(()=>a(n,...r)))},jr)}function Nl(e,t,r,n,a,i){var o,c,u=null,f=e,v;br(()=>{const p=t()||null;var _=Mo;p!==o&&(v&&(p===null?ur(v,()=>{v=null,c=null}):p===c?Rn(v):Ae(v)),p&&p!==c&&(v=Be(()=>{if(u=document.createElementNS(_,p),qr(u,u),n){var h=u.appendChild(mr());n(u,h)}Q.nodes_end=u,f.before(u)})),o=p,o&&(c=o))},jr)}function Al(e,t){var r=void 0,n;br(()=>{r!==(r=t())&&(n&&(Ae(n),n=null),r&&(n=Be(()=>{ms(()=>r(e))})))})}function li(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=li(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Cl(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=li(e))&&(n&&(n+=" "),n+=t);return n}function Ml(e){return typeof e=="object"?Cl(e):e??""}const Fs=[...` 	
\r\f \v\uFEFF`];function Il(e,t,r){var n=e==null?"":""+e;if(r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var i=a.length,o=0;(o=n.indexOf(a,o))>=0;){var c=o+i;(o===0||Fs.includes(n[o-1]))&&(c===n.length||Fs.includes(n[c]))?n=(o===0?"":n.substring(0,o))+n.substring(c+1):o=c}}return n===""?null:n}function ea(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var i=e[a];i!=null&&i!==""&&(n+=" "+a+": "+i+r)}return n}function Kn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function $l(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,c=!1,u=[];n&&u.push(...Object.keys(n).map(Kn)),a&&u.push(...Object.keys(a).map(Kn));var f=0,v=-1;const S=e.length;for(var p=0;p<S;p++){var _=e[p];if(c?_==="/"&&e[p-1]==="*"&&(c=!1):i?i===_&&(i=!1):_==="/"&&e[p+1]==="*"?c=!0:_==='"'||_==="'"?i=_:_==="("?o++:_===")"&&o--,!c&&i===!1&&o===0){if(_===":"&&v===-1)v=p;else if(_===";"||p===S-1){if(v!==-1){var h=Kn(e.substring(f,v).trim());if(!u.includes(h)){_!==";"&&p++;var m=e.substring(f,p).trim();r+=" "+m+";"}}f=p+1,v=-1}}}}return n&&(r+=ea(n)),a&&(r+=ea(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Le(e,t,r,n,a,i){var o=e.__className;if(o!==r||o===void 0){var c=Il(r,n,i);c==null?e.removeAttribute("class"):t?e.className=c:e.setAttribute("class",c),e.__className=r}else if(i&&a!==i)for(var u in i){var f=!!i[u];(a==null||f!==!!a[u])&&e.classList.toggle(u,f)}return i}function Jn(e,t={},r,n){for(var a in r){var i=r[a];t[a]!==i&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,n))}}function Dl(e,t,r,n){var a=e.__style;if(a!==t){var i=$l(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(Jn(e,r?.[0],n[0]),Jn(e,r?.[1],n[1],"important")):Jn(e,r,n));return n}function Jt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Tn(t))return $o();for(var n of e.options)n.selected=t.includes(Fr(n));return}for(n of e.options){var a=Fr(n);if(Zo(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Cr(e){var t=new MutationObserver(()=>{Jt(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Va(()=>{t.disconnect()})}function is(e,t,r=t){var n=!0;gs(e,"change",a=>{var i=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),Fr);else{var c=e.querySelector(i)??e.querySelector("option:not([disabled])");o=c&&Fr(c)}r(o)}),ms(()=>{var a=t();if(Jt(e,a,n),n&&a===void 0){var i=e.querySelector(":checked");i!==null&&(a=Fr(i),r(a))}e.__value=a,n=!1}),Cr(e)}function Fr(e){return"__value"in e?e.__value:e.value}const Hr=Symbol("class"),Kr=Symbol("style"),ci=Symbol("is custom element"),ui=Symbol("is html");function Rl(e,t){var r=jn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function mn(e,t){var r=jn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function ql(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function os(e,t,r,n){var a=jn(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[co]=r),r==null?e.removeAttribute(t):typeof r!="string"&&di(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function jl(e,t,r,n,a=!1,i=!1){var o=jn(e),c=o[ci],u=!o[ui],f=t||{},v=e.tagName==="OPTION";for(var p in t)p in r||(r[p]=null);r.class?r.class=Ml(r.class):r[Hr]&&(r.class=null),r[Kr]&&(r.style??=null);var _=di(e);for(const I in r){let T=r[I];if(v&&I==="value"&&T==null){e.value=e.__value="",f[I]=T;continue}if(I==="class"){var h=e.namespaceURI==="http://www.w3.org/1999/xhtml";Le(e,h,T,n,t?.[Hr],r[Hr]),f[I]=T,f[Hr]=r[Hr];continue}if(I==="style"){Dl(e,T,t?.[Kr],r[Kr]),f[I]=T,f[Kr]=r[Kr];continue}var m=f[I];if(!(T===m&&!(T===void 0&&e.hasAttribute(I)))){f[I]=T;var S=I[0]+I[1];if(S!=="$$")if(S==="on"){const M={},j="$$"+I;let U=I.slice(2);var x=pl(U);if(vl(U)&&(U=U.slice(0,-7),M.capture=!0),!x&&m){if(T!=null)continue;e.removeEventListener(U,f[j],M),f[j]=null}if(T!=null)if(x)e[`__${U}`]=T,yr([U]);else{let z=function(te){f[I].call(this,te)};var k=z;f[j]=si(U,e,z,M)}else x&&(e[`__${U}`]=void 0)}else if(I==="style")os(e,I,T);else if(I==="autofocus")el(e,!!T);else if(!c&&(I==="__value"||I==="value"&&T!=null))e.value=e.__value=T;else if(I==="selected"&&v)ql(e,T);else{var E=I;u||(E=gl(E));var D=E==="defaultValue"||E==="defaultChecked";if(T==null&&!c&&!D)if(o[I]=null,E==="value"||E==="checked"){let M=e;const j=t===void 0;if(E==="value"){let U=M.defaultValue;M.removeAttribute(E),M.defaultValue=U,M.value=M.__value=j?U:null}else{let U=M.defaultChecked;M.removeAttribute(E),M.defaultChecked=U,M.checked=j?U:!1}}else e.removeAttribute(I);else D||_.includes(E)&&(c||typeof T!="string")?(e[E]=T,E in o&&(o[E]=Ne)):typeof T!="function"&&os(e,E,T)}}}return f}function ta(e,t,r=[],n=[],a,i=!1,o=!1){Ra(r,n,c=>{var u=void 0,f={},v=e.nodeName==="SELECT",p=!1;if(br(()=>{var h=t(...c.map(s)),m=jl(e,u,h,a,i,o);p&&v&&"value"in h&&Jt(e,h.value);for(let x of Object.getOwnPropertySymbols(f))h[x]||Ae(f[x]);for(let x of Object.getOwnPropertySymbols(h)){var S=h[x];x.description===Io&&(!u||S!==u[x])&&(f[x]&&Ae(f[x]),f[x]=Be(()=>Al(e,()=>S))),m[x]=S}u=m}),v){var _=e;ms(()=>{Jt(_,u.value,!0),Cr(_)})}p=!0})}function jn(e){return e.__attributes??={[ci]:e.nodeName.includes("-"),[ui]:e.namespaceURI===Co}}var ra=new Map;function di(e){var t=e.getAttribute("is")||e.nodeName,r=ra.get(t);if(r)return r;ra.set(t,r=[]);for(var n,a=e,i=Element.prototype;i!==a;){n=no(a);for(var o in n)n[o].set&&r.push(o);a=xa(a)}return r}function Ie(e,t,r=t){var n=new WeakSet;gs(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=Yn(e)?Zn(i):i,r(i),ce!==null&&n.add(ce),await dl(),i!==(i=t())){var o=e.selectionStart,c=e.selectionEnd;e.value=i??"",c!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(c,e.value.length))}}),Wr(t)==null&&e.value&&(r(Yn(e)?Zn(e.value):e.value),ce!==null&&n.add(ce)),bs(()=>{var a=t();if(e===document.activeElement){var i=yn??ce;if(n.has(i))return}Yn(e)&&a===Zn(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Ol(e,t,r=t){gs(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),Wr(t)==null&&r(e.checked),bs(()=>{var n=t();e.checked=!!n})}function Yn(e){var t=e.type;return t==="number"||t==="range"}function Zn(e){return e===""?null:+e}let bn=!1;function Ll(e){var t=bn;try{return bn=!1,[e(),bn]}finally{bn=t}}const Wl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Se(e,t,r){return new Proxy({props:e,exclude:t},Wl)}const Bl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Qr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Qr(a)&&(a=a());const i=Yt(a,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Qr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Yt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===cr||t===Ea)return!1;for(let r of e.props)if(Qr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Qr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function Ee(...e){return new Proxy({props:e},Bl)}function Ot(e,t,r,n){var a=!Lr||(r&Po)!==0,i=(r&ko)!==0,o=(r&To)!==0,c=n,u=!0,f=()=>(u&&(u=!1,c=o?Wr(n):n),c),v;if(i){var p=cr in e||Ea in e;v=Yt(e,t)?.set??(p&&t in e?k=>e[t]=k:void 0)}var _,h=!1;i?[_,h]=Ll(()=>e[t]):_=e[t],_===void 0&&n!==void 0&&(_=f(),v&&(a&&_o(),v(_)));var m;if(a?m=()=>{var k=e[t];return k===void 0?f():(u=!0,k)}:m=()=>{var k=e[t];return k!==void 0&&(c=void 0),k===void 0?c:k},a&&(r&Eo)===0)return m;if(v){var S=e.$$legacy;return(function(k,I){return arguments.length>0?((!a||!I||S||h)&&v(I?m():k),k):m()})}var x=!1,E=((r&So)!==0?In:ps)(()=>(x=!1,m()));i&&s(E);var D=Q;return(function(k,I){if(arguments.length>0){const T=I?s(E):a&&i?rt(k):k;return y(E,T),x=!0,c!==void 0&&(c=T),k}return wr&&x||(D.f&gr)!==0?E.v:s(E)})}function fi(e){we===null&&ka(),Lr&&we.l!==null?Ul(we).m.push(e):Dn(()=>{const t=Wr(e);if(typeof t=="function")return t})}function zl(e){we===null&&ka(),fi(()=>()=>Wr(e))}function Ul(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Vl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Vl);const vi=typeof window<"u"?window:void 0;function Gl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Ql{#t;#r;constructor(t={}){const{window:r=vi,document:n=r?.document}=t;r!==void 0&&(this.#t=n,this.#r=hs(a=>{const i=as(r,"focusin",a),o=as(r,"focusout",a);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#t?Gl(this.#t):null}}new Ql;function Hl(e,t){return e}function Kl(e,t){let r=X(null);const n=F(()=>Hl(t));function a(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,c;const u=new Promise((f,v)=>{o=f,c=v});y(r,{timeout:null,runner:null,promise:u,resolve:o,reject:c},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);y(r,null);try{o.resolve(await e.apply(this,i))}catch(c){o.reject(c)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),y(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Jl(e,t){switch(e){case"local":return t.localStorage;case"session":return t.sessionStorage}}function hi(e,t,r,n,a,i){if(e===null||typeof e!="object")return e;const o=Object.getPrototypeOf(e);if(o!==null&&o!==Object.prototype&&!Array.isArray(e))return e;let c=r.get(e);return c||(c=new Proxy(e,{get:(u,f)=>(n?.(),hi(Reflect.get(u,f),t,r,n,a,i)),set:(u,f,v)=>(a?.(),Reflect.set(u,f,v),i(t),!0)}),r.set(e,c)),c}class na{#t;#r;#s;#n;#c;#a;#o=new WeakMap;constructor(t,r,n={}){const{storage:a="local",serializer:i={serialize:JSON.stringify,deserialize:JSON.parse},syncTabs:o=!0}=n,c="window"in n?n.window:vi;if(this.#t=r,this.#r=t,this.#s=i,c===void 0)return;const u=Jl(a,c);this.#n=u;const f=u.getItem(t);f!==null?this.#t=this.#l(f):this.#u(r),o&&a==="local"&&(this.#c=hs(v=>{this.#a=v;const p=as(c,"storage",this.#i);return()=>{p(),this.#a=void 0}}))}get current(){this.#c?.();const t=this.#n?.getItem(this.#r),r=t?this.#l(t):this.#t;return hi(r,r,this.#o,this.#c?.bind(this),this.#a?.bind(this),this.#u.bind(this))}set current(t){this.#u(t),this.#a?.()}#i=t=>{t.key!==this.#r||t.newValue===null||(this.#t=this.#l(t.newValue),this.#a?.())};#l(t){try{return this.#s.deserialize(t)}catch(r){console.error(`Error when parsing "${t}" from persisted store "${this.#r}"`,r);return}}#u(t){try{t!=null&&this.#n?.setItem(this.#r,this.#s.serialize(t))}catch(r){console.error(`Error when writing value from persisted store "${this.#r}" to ${this.#n}`,r)}}}function Yl(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function sa(e,t){return`${e}_${t}`}function Zl(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}let w=class{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}};w.equal=(e,t)=>new w("equal",e,t).toString();w.notEqual=(e,t)=>new w("notEqual",e,t).toString();w.lessThan=(e,t)=>new w("lessThan",e,t).toString();w.lessThanEqual=(e,t)=>new w("lessThanEqual",e,t).toString();w.greaterThan=(e,t)=>new w("greaterThan",e,t).toString();w.greaterThanEqual=(e,t)=>new w("greaterThanEqual",e,t).toString();w.isNull=e=>new w("isNull",e).toString();w.isNotNull=e=>new w("isNotNull",e).toString();w.between=(e,t,r)=>new w("between",e,[t,r]).toString();w.startsWith=(e,t)=>new w("startsWith",e,t).toString();w.endsWith=(e,t)=>new w("endsWith",e,t).toString();w.select=e=>new w("select",void 0,e).toString();w.search=(e,t)=>new w("search",e,t).toString();w.orderDesc=e=>new w("orderDesc",e).toString();w.orderAsc=e=>new w("orderAsc",e).toString();w.orderRandom=()=>new w("orderRandom").toString();w.cursorAfter=e=>new w("cursorAfter",void 0,e).toString();w.cursorBefore=e=>new w("cursorBefore",void 0,e).toString();w.limit=e=>new w("limit",void 0,e).toString();w.offset=e=>new w("offset",void 0,e).toString();w.contains=(e,t)=>new w("contains",e,t).toString();w.notContains=(e,t)=>new w("notContains",e,t).toString();w.notSearch=(e,t)=>new w("notSearch",e,t).toString();w.notBetween=(e,t,r)=>new w("notBetween",e,[t,r]).toString();w.notStartsWith=(e,t)=>new w("notStartsWith",e,t).toString();w.notEndsWith=(e,t)=>new w("notEndsWith",e,t).toString();w.createdBefore=e=>new w("createdBefore",void 0,e).toString();w.createdAfter=e=>new w("createdAfter",void 0,e).toString();w.createdBetween=(e,t)=>new w("createdBetween",void 0,[e,t]).toString();w.updatedBefore=e=>new w("updatedBefore",void 0,e).toString();w.updatedAfter=e=>new w("updatedAfter",void 0,e).toString();w.updatedBetween=(e,t)=>new w("updatedBetween",void 0,[e,t]).toString();w.or=e=>new w("or",void 0,e.map(t=>JSON.parse(t))).toString();w.and=e=>new w("and",void 0,e.map(t=>JSON.parse(t))).toString();w.distanceEqual=(e,t,r,n=!0)=>new w("distanceEqual",e,[[t,r,n]]).toString();w.distanceNotEqual=(e,t,r,n=!0)=>new w("distanceNotEqual",e,[[t,r,n]]).toString();w.distanceGreaterThan=(e,t,r,n=!0)=>new w("distanceGreaterThan",e,[[t,r,n]]).toString();w.distanceLessThan=(e,t,r,n=!0)=>new w("distanceLessThan",e,[[t,r,n]]).toString();w.intersects=(e,t)=>new w("intersects",e,[t]).toString();w.notIntersects=(e,t)=>new w("notIntersects",e,[t]).toString();w.crosses=(e,t)=>new w("crosses",e,[t]).toString();w.notCrosses=(e,t)=>new w("notCrosses",e,[t]).toString();w.overlaps=(e,t)=>new w("overlaps",e,[t]).toString();w.notOverlaps=(e,t)=>new w("notOverlaps",e,[t]).toString();w.touches=(e,t)=>new w("touches",e,[t]).toString();w.notTouches=(e,t)=>new w("notTouches",e,[t]).toString();var pi,_i;class rn{static custom(t){return t}static unique(t=7){const r=Zl(rn,pi,"m",_i).call(rn);let n="";for(let a=0;a<t;a++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}pi=rn,_i=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var aa;(function(e){e.Totp="totp"})(aa||(aa={}));var ia;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(ia||(ia={}));var oa;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(oa||(oa={}));var la;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(la||(la={}));var ca;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(ca||(ca={}));var ua;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(ua||(ua={}));var da;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(da||(da={}));var fa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(fa||(fa={}));var va;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(va||(va={}));async function Br(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Xl(e,t={}){const{includePurchases:r=!0,limit:n=100,orderBy:a="productName",orderDirection:i="asc"}=t;try{const{databases:o,config:c}=await Br(),u=await o.listDocuments(c.APPWRITE_CONFIG.databaseId,c.APPWRITE_CONFIG.collections.products,[w.equal("mainId",e),w.orderAsc(a==="productName"?"productName":"$updatedAt"),w.limit(n)]),f=u.documents;if(!r)return f;const v=await o.listDocuments(c.APPWRITE_CONFIG.databaseId,c.APPWRITE_CONFIG.collections.purchases,[w.equal("mainId",e)]),p=v.documents,_=sc(f,p);return console.log(`[Appwrite Interactions] ${u.documents.length} produits chargés avec ${v.documents.length} achats`),_}catch(o){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,o);const c=o instanceof Error?o.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${c}`)}}async function Fl(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide"),[];try{const{databases:a,config:i}=await Br(),o=await a.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[w.greaterThan("$updatedAt",r),w.equal("mainId",e),w.limit(n)]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} mises à jour synchronisées`),o.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits pour mainId ${e}:`,a);const i=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function ys(e,t){try{const{databases:r,config:n}=await Br();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function ec(e,t){if(console.log(`[Appwrite Interactions] Mise à jour du magasin pour produit ${e}:`,t),!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await ys(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function ha(e,t){return ys(e,{who:t})}async function pa(e,t){return ys(e,{stockReel:t})}async function tc(e){try{const{databases:t,config:r}=await Br(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id,status:"active"},c=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,rn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",c),c}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function rc(e,t){try{const{databases:r,config:n}=await Br(),a=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,t);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,t),a}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function nc(e){try{const{databases:t,config:r}=await Br();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}function sc(e,t){return e.map(r=>({...r,purchases:t.filter(n=>n.products.some(a=>a.$id===r.$id))}))}function ac(e,t){const r=new Map(t.map(o=>[o.$id,o])),n=e.map(o=>r.get(o.$id)??o),a=new Set(e.map(o=>o.$id)),i=t.filter(o=>!a.has(o.$id));return[...n,...i]}function ic(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing stock data:",t),[]}}function oc(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing recipes occurrences:",t),[]}}function lc(e,t={}){let r=null;const n=i=>{const{events:o,payload:c}=i;if(!c)return;const u=o.some(h=>h.includes("products.")),f=o.some(h=>h.includes("purchases.")),v=o.some(h=>h.includes(".create")),p=o.some(h=>h.includes(".update")),_=o.some(h=>h.includes(".delete"));if(u){const h=c;v&&t.onProductCreate?t.onProductCreate(h):p&&t.onProductUpdate?t.onProductUpdate(h):_&&t.onProductDelete&&t.onProductDelete(h.$id)}else if(f){const h=c;v&&t.onPurchaseCreate?t.onPurchaseCreate(h):p&&t.onPurchaseUpdate?t.onPurchaseUpdate(h):_&&t.onPurchaseDelete&&t.onPurchaseDelete(h.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}const{Query:Dd}=window.Appwrite,_a=1e3,cc=500;class uc{#t=X(null);#r=X(!1);#s=X(null);#n=X(null);#c=X(null);#a(t,r=null){if(!t||t.trim()==="")return r;try{return JSON.parse(t)}catch(n){return console.warn("[ProductsStore] Erreur de parsing JSON, utilisation de la valeur par défaut:",n),r}}#o=F(()=>s(this.#s)?.current.products??[]);get products(){return s(this.#o)}set products(t){y(this.#o,t)}#i=F(()=>s(this.#s)?.current.loading??!1);get loading(){return s(this.#i)}set loading(t){y(this.#i,t)}#l=F(()=>s(this.#s)?.current.error??null);get error(){return s(this.#l)}set error(t){y(this.#l,t)}#u=F(()=>s(this.#s)?.current.syncing??!1);get syncing(){return s(this.#u)}set syncing(t){y(this.#u,t)}#v=F(()=>s(this.#s)?.current.realtimeConnected??!1);get realtimeConnected(){return s(this.#v)}set realtimeConnected(t){y(this.#v,t)}#f=F(()=>s(this.#n)?.current.lastSync??null);get lastSync(){return s(this.#f)}set lastSync(t){y(this.#f,t)}#h=F(()=>s(this.#n)?.current.mainId??null);get mainId(){return s(this.#h)}set mainId(t){y(this.#h,t)}#e=X(rt({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductType:"",showPFrais:!0,showPSurgel:!0,groupBy:"none",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#e)}#b=F(()=>this.products.map(t=>{const r=this.#N(t.purchases??[]),n=this.#B(t.totalNeededConsolidated?this.#a(t.totalNeededConsolidated):[],r);return{...t,storeInfo:t.store?this.#a(t.store):null,totalNeededArray:t.totalNeededConsolidated?this.#a(t.totalNeededConsolidated):[],recipesArray:t.recipesOccurrences?this.#a(t.recipesOccurrences):[],stockArray:t.stockReel?this.#a(t.stockReel):[],displayQuantity:this.#L(t.totalNeededConsolidated),displayName:t.productName.trim(),totalPurchases:r,displayTotalPurchases:this.#W(t.purchases??[]),missingQuantity:n,displayMissingQuantity:n.length>0?n.map(a=>this.#P(a.quantity.toString(),a.unit)).join(" et "):"✅ Complet"}}));get enrichedProducts(){return s(this.#b)}set enrichedProducts(t){y(this.#b,t)}#w=F(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#w)}set uniqueStores(t){y(this.#w,t)}#y=F(()=>[...new Set(this.products.flatMap(t=>t.who||[]).filter(Boolean))]);get uniqueWho(){return s(this.#y)}set uniqueWho(t){y(this.#y,t)}#x=F(()=>[...new Set(this.products.map(t=>t.productType).filter(Boolean))]);get uniqueProductTypes(){return s(this.#x)}set uniqueProductTypes(t){y(this.#x,t)}#p=F(()=>{const t=this.enrichedProducts.filter(r=>this.#O(r));return s(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return s(this.#p)}set filteredGroupedProducts(t){y(this.#p,t)}#_=F(()=>Object.values(this.filteredGroupedProducts).flat());get filteredProducts(){return s(this.#_)}set filteredProducts(t){y(this.#_,t)}#m=F(()=>this.filteredGroupedProducts);get groupedFormattedProducts(){return s(this.#m)}set groupedFormattedProducts(t){y(this.#m,t)}#E=F(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#E)}set stats(t){y(this.#E,t)}get currentMainId(){return s(this.#t)}get isInitialized(){return s(this.#r)}#g=Kl(()=>{this.#S()},cc);async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#r)&&s(this.#t)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),y(this.#t,t,!0),y(this.#r,!0),this.#A(t),this.products.length>0&&s(this.#n).current.mainId===t?(console.log(`[ProductsStore] Utilisation du cache (${this.products.length} produits)`),await this.#C()):(console.log("[ProductsStore] Chargement initial depuis Appwrite"),await this.#k(t));const n=this.#j();y(this.#c,lc(t,n),!0)}#A(t){if(s(this.#s)&&s(this.#n))return;const r=sa("products-state",t),n=sa("products-sync-state",t);console.log(`[ProductsStore] Clés de stockage: ${r}, ${n}`),y(this.#s,new na(r,{products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),!0),y(this.#n,new na(n,{lastSync:null,mainId:null}),!0)}async#k(t){if(!s(this.#s))throw new Error("ProductsStore non initialisé");this.#d({loading:!0,error:null});try{const n=await Xl(t,{includePurchases:!0,limit:_a,orderBy:"productName",orderDirection:"asc"});this.#d({products:n}),this.#S(),console.log(`[ProductsStore] ${n.length} produits chargés`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw this.#d({loading:!1,error:n}),console.error("[ProductsStore]",n,r),r}}async#C(){if(s(this.#n)?.current.lastSync){this.#d({syncing:!0});try{const t={lastSync:s(this.#n).current.lastSync,limit:_a},r=await Fl(s(this.#t),t);r.length>0&&(this.#d({products:ac(this.products,r)}),this.#S(),console.log(`[ProductsStore] ${r.length} mises à jour synchronisées`)),this.#d({syncing:!1})}catch(t){console.error("[ProductsStore] Erreur sync:",t),this.#d({syncing:!1})}}}#M(t){if(!s(this.#s))return;this.products.some(n=>n.$id===t.$id)||this.#d({products:[...this.products,t]})}#I(t){s(this.#s)&&this.#d({products:this.products.map(r=>{if(r.$id===t.$id){const n={...r};return Object.keys(t).forEach(a=>{t[a]!==void 0&&(n[a]=t[a])}),n}return r})})}#$(t){s(this.#s)&&this.#d({products:this.products.filter(r=>r.$id!==t)})}#D(t){console.log("[ProductsStore] Purchase créé, mise à jour des produits concernés..."),this.#T(t)}#R(t){console.log("[ProductsStore] Purchase mis à jour, mise à jour des produits concernés..."),this.#T(t)}#q(t){console.log("[ProductsStore] Purchase supprimé, nettoyage des produits concernés..."),this.#d({products:this.products.map(r=>({...r,purchases:(r.purchases||[]).filter(n=>n.$id!==t)}))})}#T(t){!t.products||t.products.length===0||(this.#d({products:this.products.map(r=>{if(t.products.some(n=>n.$id===r.$id)){const a=(r.purchases||[]).filter(i=>i.$id!==t.$id);return a.push(t),{...r,purchases:a}}return r})}),console.log(`[ProductsStore] ${t.products.length} produit(s) mis à jour avec le purchase ${t.$id}`))}#j(){return{onProductCreate:t=>{this.#M(t),this.#g()},onProductUpdate:t=>{this.#I(t),this.#g()},onProductDelete:t=>{this.#$(t),this.#g()},onPurchaseCreate:t=>{this.#D(t),this.#g()},onPurchaseUpdate:t=>{this.#R(t),this.#g()},onPurchaseDelete:t=>{this.#q(t),this.#g()},onConnect:()=>{console.log("[ProductsStore] Realtime connecté"),this.#d({realtimeConnected:!0})},onDisconnect:()=>{console.log("[ProductsStore] Realtime déconnecté"),this.#d({realtimeConnected:!1})},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#S(){if(!s(this.#t)||!s(this.#n))return;const t=new Date().toISOString();s(this.#n).current={lastSync:t,mainId:s(this.#t)},this.lastSync=t,this.mainId=s(this.#t)}#d(t){s(this.#s)&&(s(this.#s).current={...s(this.#s).current,...t})}async forceReload(t){await this.#k(t)}destroy(){s(this.#c)?.(),y(this.#c,null),console.log("[ProductsStore] Ressources nettoyées")}clearCache(){if(!s(this.#s)||!s(this.#n)){console.warn("[ProductsStore] Store non initialisé");return}this.#d({products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),s(this.#n).current={lastSync:null,mainId:null},console.log(`[ProductsStore] Cache vidé pour ${s(this.#t)}`)}setSearchQuery(t){s(this.#e).searchQuery=t}setProductType(t){s(this.#e).selectedProductType=t}setGroupBy(t){s(this.#e).groupBy=t}toggleStore(t){const r=s(this.#e).selectedStores.indexOf(t);r>-1?s(this.#e).selectedStores.splice(r,1):s(this.#e).selectedStores.push(t)}toggleWho(t){const r=s(this.#e).selectedWho.indexOf(t);r>-1?s(this.#e).selectedWho.splice(r,1):s(this.#e).selectedWho.push(t)}clearStoreFilters(){s(this.#e).selectedStores=[]}clearWhoFilters(){s(this.#e).selectedWho=[]}setTemperatureFilters(t,r){s(this.#e).showPFrais=t,s(this.#e).showPSurgel=r}handleSort(t){s(this.#e).sortColumn===t?s(this.#e).sortDirection=s(this.#e).sortDirection==="asc"?"desc":"asc":(s(this.#e).sortColumn=t,s(this.#e).sortDirection="asc")}clearFilters(){y(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductType:"",showPFrais:!0,showPSurgel:!0,groupBy:"none",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#e).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#e).sortColumn],i=n[s(this.#e).sortColumn];return s(this.#e).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,i=parseFloat(i)||0):s(this.#e).sortColumn==="purchases"&&(a=r.purchases?.length||0,i=n.purchases?.length||0),a<i?s(this.#e).sortDirection==="asc"?-1:1:a>i?s(this.#e).sortDirection==="asc"?1:-1:0}):t}#O(t){if(s(this.#e).searchQuery.trim()){const r=s(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#e).selectedStores.includes(t.storeInfo.storeName))||s(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#e).selectedWho.includes(r)))||s(this.#e).selectedProductType&&t.productType!==s(this.#e).selectedProductType||!s(this.#e).showPFrais&&!s(this.#e).showPSurgel||!s(this.#e).showPFrais&&t.pFrais||!s(this.#e).showPSurgel&&t.pSurgel)}#L(t){if(!t)return"-";try{const r=JSON.parse(t);return!Array.isArray(r)||r.length===0?"-":r.map(n=>this.#P(n.value,n.unit)).join(" et ")}catch{return"-"}}#P(t,r){const n=parseFloat(t);if(isNaN(n))return`${t} ${r}`;if((r==="gr."||r==="ml")&&n>=1e3){const a=n/1e3,i=r==="gr."?"kg":"l.";let c=(Math.round(a*100)/100).toString();return c.endsWith(",0")&&(c=c.slice(0,-2)),c.endsWith(",00")&&(c=c.slice(0,-3)),`${c} ${i}`}if(!["gr.","ml","kg","l."].includes(r)){let i=(Math.round(n*10)/10).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),`${i} ${r}`}return`${n} ${r}`}#W(t){return!t||t.length===0?"-":this.#N(t).map(n=>this.#P(n.quantity.toString(),n.unit)).join(" et ")}#N(t){if(!t||t.length===0)return[];const r=new Map;t.forEach(a=>{if(!a.quantity||!a.unit)return;const i=parseFloat(a.quantity);if(isNaN(i))return;const o=r.get(a.unit)||0;r.set(a.unit,o+i)});const n=[];return r.forEach((a,i)=>{n.push({quantity:a,unit:i})}),n}#B(t,r){if(!t||t.length===0)return[];if(!r||r.length===0)return t.map(o=>({quantity:parseFloat(o.value),unit:o.unit}));const n=new Map,a=new Map;t.forEach(o=>{const c=parseFloat(o.value);isNaN(c)||n.set(o.unit,(n.get(o.unit)||0)+c)}),r.forEach(o=>{a.set(o.unit,(a.get(o.unit)||0)+o.quantity)});const i=[];return n.forEach((o,c)=>{const u=a.get(c)||0,f=o-u;f>0&&i.push({quantity:f,unit:c})}),i}}const G=new uc;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const dc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var fc=yl("<svg><!><!></svg>");function ke(e,t){se(t,!0);const r=Ot(t,"color",3,"currentColor"),n=Ot(t,"size",3,24),a=Ot(t,"strokeWidth",3,2),i=Ot(t,"absoluteStrokeWidth",3,!1),o=Ot(t,"iconNode",19,()=>[]),c=Se(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=fc();ta(u,p=>({...dc,...c,width:n(),height:n(),stroke:r(),"stroke-width":p,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(a())*24/Number(n()):a()]);var f=l(u);Oe(f,17,o,El,(p,_)=>{var h=F(()=>Pa(s(_),2));let m=()=>s(h)[0],S=()=>s(h)[1];var x=ne(),E=ee(x);Nl(E,m,!0,(D,k)=>{ta(D,()=>({...S()}))}),g(p,x)});var v=d(f);xe(v,()=>t.children??pe),g(e,u),ae()}function ls(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ke(e,Ee({name:"archive"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function vc(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ke(e,Ee({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function hc(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];ke(e,Ee({name:"combine"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function Xn(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ke(e,Ee({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function ga(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ke(e,Ee({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function pc(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ke(e,Ee({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function Fn(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ke(e,Ee({name:"package"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function wn(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];ke(e,Ee({name:"pen-line"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function ma(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ke(e,Ee({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function _c(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ke(e,Ee({name:"save"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function gc(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ke(e,Ee({name:"search"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function Pn(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ke(e,Ee({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function ba(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ke(e,Ee({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function mc(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ke(e,Ee({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function En(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ke(e,Ee({name:"store"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function bc(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ke(e,Ee({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function kn(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ke(e,Ee({name:"users"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function wc(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ke(e,Ee({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function kt(e,t){se(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ke(e,Ee({name:"x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ne(),c=ee(o);xe(c,()=>t.children??pe),g(a,o)},$$slots:{default:!0}})),ae()}function yc(e,t,r){y(t,null),r.onCancelEditPurchase()}async function xc(e,t,r){await t.onSavePurchase(),y(r,null)}var Sc=P('<span class="loading loading-spinner loading-sm"></span>'),Pc=P('<div class="text-center py-8 opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Ec=P('<span class="loading loading-spinner loading-sm"></span>'),kc=P('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input input-bordered w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input input-bordered w-24"/></td><td><input type="text" class="input input-bordered w-20"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="0.01" class="input input-bordered w-16"/></td><td><input type="text" class="input input-bordered w-24"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Tc=(e,t,r)=>t(s(r)),Nc=(e,t,r)=>t(s(r).$id),Ac=P('<span class="loading loading-spinner loading-sm"></span>'),Cc=P('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Mc=P('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Ic=P('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"><div class="form-control"><label for="purchase-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="purchase-quantity" type="number" step="0.01" class="input input-bordered validator" required/></div> <div class="form-control"><label for="purchase-unit" class="label"><span class="label-text">Unité</span></label> <select id="purchase-unit" class="select select-bordered validator" required><option disabled selected>Sélectionner</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></div> <div class="form-control"><label for="purchase-store" class="label"><span class="label-text">Magasin</span></label> <input id="purchase-store" type="text" class="input input-bordered" placeholder="Ex: Marché"/></div> <div class="form-control"><label for="purchase-who" class="label"><span class="label-text">Qui a acheté ?</span></label> <input id="purchase-who" type="text" class="input input-bordered" placeholder="Votre nom"/></div> <div class="form-control"><label for="purchase-price" class="label"><span class="label-text">Prix (€)</span></label> <input id="purchase-price" type="number" step="1" class="input input-bordered" placeholder="0.00"/></div> <div class="form-control"><label for="purchase-notes" class="label"><span class="label-text">Notes</span></label> <input id="purchase-notes" type="text" class="input input-bordered" placeholder="Promotion, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function $c(e,t){se(t,!0);let r=Ot(t,"newPurchase",7),n=X(null);function a(L,_e){return _e==="gr."&&L>=1e3?`${(L/1e3).toFixed(1)} kg`:_e==="ml"&&L>=1e3?`${(L/1e3).toFixed(1)} l`:`${L} ${_e}`}function i(L){return new Date(L).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function o(L){y(n,{...L},!0),t.onStartEditPurchase(L)}async function c(L){await t.onDeletePurchase(L)}var u=Ic(),f=l(u),v=l(f);Pn(v,{class:"w-5 h-5"});var p=d(f,2),_=l(p),h=d(l(_),2),m=l(h),S=d(l(m),2),x=d(m,2),E=d(l(x),2),D=l(E);D.value=D.__value="";var k=d(D);k.value=k.__value="kg";var I=d(k);I.value=I.__value="gr.";var T=d(I);T.value=T.__value="l.";var M=d(T);M.value=M.__value="ml";var j=d(M);j.value=j.__value="unité";var U=d(j);U.value=U.__value="bottes";var z=d(x,2),te=d(l(z),2),ie=d(z,2),R=d(l(ie),2),q=d(ie,2),Y=d(l(q),2),Z=d(q,2),le=d(l(Z),2),Ce=d(h,2),ve=l(Ce);ve.__click=function(...L){t.onAddPurchase?.apply(this,L)};var b=l(ve);{var N=L=>{var _e=Sc();g(L,_e)},K=L=>{var _e=je("Ajouter l'achat");g(L,_e)};$(b,L=>{t.loading?L(N):L(K,!1)})}var ue=d(p,2);{var Te=L=>{var _e=Pc(),ct=l(_e);Pn(ct,{class:"w-12 h-12 mx-auto mb-2"}),g(L,_e)},De=L=>{var _e=Mc(),ct=l(_e),Ze=d(l(ct));Oe(Ze,21,()=>t.currentProductPurchases,st=>st.$id,(st,Pe)=>{var Nt=ne(),Ft=ee(Nt);{var Ue=Ve=>{var Xe=kc(),he=l(Xe),Re=l(he),At=l(Re),zt=d(At,2),Ge=l(zt);Ge.value=Ge.__value="kg";var ut=d(Ge);ut.value=ut.__value="gr.";var bt=d(ut);bt.value=bt.__value="l.";var wt=d(bt);wt.value=wt.__value="ml";var Fe=d(wt);Fe.value=Fe.__value="unité";var yt=d(Fe);yt.value=yt.__value="bottes";var Ct=d(he),er=l(Ct),dt=d(Ct),Ut=l(dt),ft=d(dt),Vt=l(ft),at=d(ft),Mt=l(at),It=d(at),$t=l(It),Qe=d(It),Dt=l(Qe),vt=l(Dt);vt.__click=[xc,t,n];var zr=l(vt);{var xr=O=>{var oe=Ec();g(O,oe)},Ur=O=>{_c(O,{class:"w-3 h-3"})};$(zr,O=>{t.loading?O(xr):O(Ur,!1)})}var Sr=d(vt,2);Sr.__click=[yc,n,t];var V=l(Sr);kt(V,{class:"w-3 h-3"}),B(O=>{C(Vt,O),vt.disabled=t.loading},[()=>i(s(Pe).$createdAt)]),Ie(At,()=>s(n).quantity,O=>s(n).quantity=O),is(zt,()=>s(n).unit,O=>s(n).unit=O),Ie(er,()=>s(n).store,O=>s(n).store=O),Ie(Ut,()=>s(n).who,O=>s(n).who=O),Ie(Mt,()=>s(n).price,O=>s(n).price=O),Ie($t,()=>s(n).notes,O=>s(n).notes=O),g(Ve,Xe)},mt=Ve=>{var Xe=Cc(),he=l(Xe),Re=l(he),At=d(he),zt=l(At),Ge=d(At),ut=l(Ge),bt=d(Ge),wt=l(bt),Fe=d(bt),yt=l(Fe),Ct=d(Fe),er=l(Ct),dt=d(Ct),Ut=l(dt),ft=l(Ut);ft.__click=[Tc,o,Pe];var Vt=l(ft);mc(Vt,{class:"w-4 h-4"});var at=d(ft,2);at.__click=[Nc,c,Pe];var Mt=l(at);{var It=Qe=>{var Dt=Ac();g(Qe,Dt)},$t=Qe=>{kt(Qe,{class:"w-4 h-4"})};$(Mt,Qe=>{t.loading?Qe(It):Qe($t,!1)})}B((Qe,Dt)=>{C(Re,Qe),C(zt,s(Pe).store),C(ut,s(Pe).who),C(wt,Dt),C(yt,s(Pe).price?`${s(Pe).price}€`:"-"),C(er,s(Pe).notes||"-"),at.disabled=t.loading},[()=>a(s(Pe).quantity,s(Pe).unit),()=>i(s(Pe).$createdAt)]),g(Ve,Xe)};$(Ft,Ve=>{s(n)?.$id===s(Pe).$id?Ve(Ue):Ve(mt,!1)})}g(st,Nt)}),g(L,_e)};$(ue,L=>{t.currentProductPurchases.length===0?L(Te):L(De,!1)})}B(()=>ve.disabled=t.loading),Ie(S,()=>r().quantity,L=>r().quantity=L),is(E,()=>r().unit,L=>r().unit=L),Ie(te,()=>r().store,L=>r().store=L),Ie(R,()=>r().who,L=>r().who=L),Ie(Y,()=>r().price,L=>r().price=L),Ie(le,()=>r().notes,L=>r().notes=L),g(e,u),ae()}yr(["click"]);var Dc=P('<span class="loading loading-spinner loading-sm"></span>'),Rc=P('<div class="text-center py-8 opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),qc=(e,t,r)=>t(s(r).dateTime),jc=P('<span class="loading loading-spinner loading-xs"></span>'),Oc=P('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),Lc=P('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Wc=P('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"><div class="form-control"><label for="stock-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="stock-quantity" type="number" step="0.01" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-unit" class="label"><span class="label-text">Unité</span></label> <select id="stock-unit" class="select select-bordered select-sm" required><option>Sélectionner</option><option>kg</option><option>g</option><option>l</option><option>ml</option><option>unités</option><option>pièces</option></select></div> <div class="form-control"><label for="stock-datetime" class="label"><span class="label-text">Date du stock</span></label> <input id="stock-datetime" type="datetime-local" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-notes" class="label"><span class="label-text">Notes</span></label> <input id="stock-notes" type="text" class="input input-bordered input-sm" placeholder="Origine, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function Bc(e,t){se(t,!0);let r={quantity:"",unit:"",dateTime:"",notes:""};function n(b,N){return N==="g"&&b>=1e3?`${(b/1e3).toFixed(1)} kg`:N==="ml"&&b>=1e3?`${(b/1e3).toFixed(1)} l`:N==="unités"||N==="pièces"?`${b} ${N}`:`${b} ${N}`}function a(b){return new Date(b).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}async function i(b){await t.onDeleteStock(b)}var o=Wc(),c=l(o),u=l(c);ls(u,{class:"w-5 h-5"});var f=d(c,2),v=l(f),p=d(l(v),2),_=l(p),h=d(l(_),2),m=d(_,2),S=d(l(m),2),x=l(S);x.value=x.__value="";var E=d(x);E.value=E.__value="kg";var D=d(E);D.value=D.__value="g";var k=d(D);k.value=k.__value="l";var I=d(k);I.value=I.__value="ml";var T=d(I);T.value=T.__value="unités";var M=d(T);M.value=M.__value="pièces";var j=d(m,2),U=d(l(j),2),z=d(j,2),te=d(l(z),2),ie=d(p,2),R=l(ie);R.__click=function(...b){t.onAddStock?.apply(this,b)};var q=l(R);{var Y=b=>{var N=Dc();g(b,N)},Z=b=>{var N=je("Ajouter au stock");g(b,N)};$(q,b=>{t.loading?b(Y):b(Z,!1)})}var le=d(f,2);{var Ce=b=>{var N=Rc(),K=l(N);ls(K,{class:"w-12 h-12 mx-auto mb-2"}),g(b,N)},ve=b=>{var N=Lc(),K=l(N),ue=d(l(K));Oe(ue,23,()=>t.stockEntries,Te=>Te.dateTime,(Te,De)=>{var L=Oc(),_e=l(L),ct=l(_e),Ze=d(_e),st=l(Ze),Pe=d(Ze),Nt=l(Pe),Ft=d(Pe),Ue=l(Ft);Ue.__click=[qc,i,De];var mt=l(Ue);{var Ve=he=>{var Re=jc();g(he,Re)},Xe=he=>{var Re=je("Supprimer");g(he,Re)};$(mt,he=>{t.loading?he(Ve):he(Xe,!1)})}B((he,Re)=>{C(ct,he),C(st,Re),C(Nt,s(De).notes||"-"),Ue.disabled=t.loading},[()=>n(s(De).quantity,s(De).unit),()=>a(s(De).dateTime)]),g(Te,L)}),g(b,N)};$(le,b=>{t.stockEntries.length===0?b(Ce):b(ve,!1)})}B(()=>R.disabled=t.loading),Ie(h,()=>r.quantity,b=>r.quantity=b),is(S,()=>r.unit,b=>r.unit=b),Ie(U,()=>r.dateTime,b=>r.dateTime=b),Ie(te,()=>r.notes,b=>r.notes=b),g(e,o),ae()}yr(["click"]);var zc=(e,t)=>{e.key==="Enter"&&t()},Uc=P('<span class="loading loading-spinner loading-sm"></span>'),Vc=P('<span class="badge badge-primary badge-sm"> </span>'),Gc=P('<div class="text-center py-8 opacity-50"><!> <p>Aucun volontaire assigné à ce produit</p></div>'),Qc=(e,t,r)=>t(r),Hc=P('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs p-0 hover:text-error"><!></button></div>'),Kc=P('<div class="flex flex-wrap gap-2"></div>'),Jc=P('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des volontaires</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <div class="flex gap-2"><div class="form-control flex-1"><input type="text" class="input input-bordered input-sm" placeholder="Nom du volontaire"/></div> <button class="btn btn-primary btn-sm"><!></button></div></div></div> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Volontaires <!></h4> <!></div></div></div>');function Yc(e,t){se(t,!0);let r=X("");async function n(){s(r).trim()&&(await t.onAddVolunteer(s(r).trim()),y(r,""))}async function a(z){await t.onRemoveVolunteer(z)}var i=Jc(),o=l(i),c=l(o);kn(c,{class:"w-5 h-5"});var u=d(o,2),f=l(u),v=d(l(f),2),p=l(v),_=l(p);_.__keydown=[zc,n];var h=d(p,2);h.__click=n;var m=l(h);{var S=z=>{var te=Uc();g(z,te)},x=z=>{var te=je("Ajouter");g(z,te)};$(m,z=>{t.loading?z(S):z(x,!1)})}var E=d(u,2),D=l(E),k=l(D),I=d(l(k));{var T=z=>{var te=Vc(),ie=l(te);B(()=>C(ie,t.editingWho.length)),g(z,te)};$(I,z=>{t.editingWho.length>0&&z(T)})}var M=d(k,2);{var j=z=>{var te=Gc(),ie=l(te);kn(ie,{class:"w-12 h-12 mx-auto mb-2"}),g(z,te)},U=z=>{var te=Kc();Oe(te,20,()=>t.editingWho,ie=>ie,(ie,R)=>{var q=Hc(),Y=l(q),Z=d(Y);Z.__click=[Qc,a,R];var le=l(Z);kt(le,{class:"w-3 h-3"}),B(()=>{C(Y,`${R??""} `),Z.disabled=t.loading}),g(ie,q)}),g(z,te)};$(M,z=>{t.editingWho.length===0?z(j):z(U,!1)})}B(()=>h.disabled=t.loading),Ie(_,()=>s(r),z=>y(r,z)),g(e,i),ae()}yr(["keydown","click"]);var Zc=(e,t)=>{e.key==="Enter"&&t()},Xc=P('<span class="loading loading-spinner loading-sm"></span>'),Fc=(e,t,r)=>{y(t,""),y(r,"")},eu=(e,t,r)=>t(r),tu=P('<button class="btn btn-outline btn-xs"> </button>'),ru=P('<br/><small class="opacity-75"> </small>',1),nu=P('<p class="text-sm"><strong>Magasin défini :</strong> <!></p>'),su=P('<p class="text-sm"><strong>Magasin défini :</strong> </p>'),au=P(`<p class="text-sm">Aucun magasin n'est encore défini pour ce produit</p>`),iu=P('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des magasins</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin principal</h4> <p class="text-sm opacity-75 mb-4">Définissez le magasin où ce produit est généralement acheté</p> <div class="form-control mb-3"><label class="label" for="store-name"><span class="label-text">Nom du magasin</span></label> <input id="store-name" type="text" class="input input-bordered input-sm" placeholder="Ex: Carrefour, Leclerc..."/></div> <div class="form-control mb-4"><label class="label" for="store-comment"><span class="label-text">Commentaire (optionnel)</span></label> <textarea id="store-comment" class="textarea textarea-bordered textarea-sm" placeholder="Ex: Près de la caisse, rayon frais, etc." rows="2"></textarea></div> <div class="flex gap-2 mb-4"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div> <div class="divider"></div> <div class="form-control"><label class="label" for="suggested-stores"><span class="label-text text-sm">Suggestions rapides</span></label> <div class="flex flex-wrap gap-2" id="suggested-stores"></div></div> <div class="divider"></div> <div class="alert alert-info"><!> <div><h4 class="font-semibold">Information sur le magasin actuel</h4> <!></div></div></div></div></div>');function ou(e,t){se(t,!0);let r=X(rt(t.editingStore?.storeName||"")),n=X(rt(t.editingStore?.storeComment||""));Dn(()=>{if(t.product?.storeInfo)y(r,t.product.storeInfo.storeName||"",!0),y(n,t.product.storeInfo.storeComment||"",!0);else if(t.product?.store)try{const q=JSON.parse(t.product.store);y(r,q.storeName||"",!0),y(n,q.storeComment||"",!0)}catch{y(r,t.product.store||"",!0),y(n,"")}else y(r,""),y(n,"")});async function a(){const q=s(r).trim()?{storeName:s(r).trim(),storeComment:s(n).trim()||void 0}:null;await t.onUpdateStore(q)}function i(q){y(r,q,!0)}var o=iu(),c=l(o),u=l(c);En(u,{class:"w-5 h-5"});var f=d(c,2),v=l(f),p=d(l(v),4),_=d(l(p),2);_.__keydown=[Zc,a];var h=d(p,2),m=d(l(h),2),S=d(h,2),x=l(S);x.__click=a;var E=l(x);{var D=q=>{var Y=Xc();g(q,Y)},k=q=>{var Y=je("Mettre à jour");g(q,Y)};$(E,q=>{t.loading?q(D):q(k,!1)})}var I=d(x,2);I.__click=[Fc,r,n];var T=d(S,4),M=d(l(T),2);Oe(M,20,()=>["Carrefour","Intermarché","Leclerc","Auchan","Lidl","Aldi","Casino","Monoprix","Franprix","Bio c' Bon","Naturalia"],q=>q,(q,Y)=>{var Z=tu();Z.__click=[eu,i,Y];var le=l(Z);B(()=>{Z.disabled=t.loading,C(le,Y)}),g(q,Z)});var j=d(T,4),U=l(j);En(U,{class:"w-4 h-4"});var z=d(U,2),te=d(l(z),2);{var ie=q=>{var Y=nu(),Z=d(l(Y)),le=d(Z);{var Ce=ve=>{var b=ru(),N=d(ee(b)),K=l(N);B(()=>C(K,t.product.storeInfo.storeComment)),g(ve,b)};$(le,ve=>{t.product.storeInfo.storeComment&&ve(Ce)})}B(()=>C(Z,` ${t.product.storeInfo.storeName??""} `)),g(q,Y)},R=q=>{var Y=ne(),Z=ee(Y);{var le=ve=>{var b=su(),N=d(l(b));B(()=>C(N,` ${t.product.store??""}`)),g(ve,b)},Ce=ve=>{var b=au();g(ve,b)};$(Z,ve=>{t.product?.store?ve(le):ve(Ce,!1)},!0)}g(q,Y)};$(te,q=>{t.product?.storeInfo?q(ie):q(R,!1)})}B(()=>{x.disabled=t.loading,I.disabled=t.loading}),Ie(_,()=>s(r),q=>y(r,q)),Ie(m,()=>s(n),q=>y(n,q)),g(e,o),ae()}yr(["keydown","click"]);function wa(e,t,r,n,a,i){t(!1),y(r,n()),y(a,null),i.onclose()}var lu=P('<div class="badge badge-success gap-1"><!> Actif</div>'),cu=P('<div class="badge badge-warning gap-1"><!> </div>'),uu=(e,t)=>t("recettes"),du=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),fu=(e,t)=>t("achats"),vu=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),hu=(e,t)=>t("stock"),pu=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),_u=(e,t)=>t("volontaires"),gu=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),mu=(e,t)=>t("magasins"),bu=P('<div class="alert alert-error mb-4"><!> <span> </span></div>'),wu=P('<div class="text-center py-8 opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),yu=P('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>'),xu=P('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Horaire</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),Su=P('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Recettes utilisant ce produit</h3> <!></div>'),Pu=P('<div class="modal modal-open"><div class="modal-box max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"><div class="flex items-center justify-between p-4 border-b"><div class="flex-1"><h2 class="text-xl font-bold"> </h2> <div class="flex items-center gap-3 mt-2"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div></div> <button class="btn btn-circle btn-ghost btn-sm" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="flex-1 overflow-y-auto p-4 min-h-96"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function Eu(e,t){se(t,!0);let r=Ot(t,"isOpen",15,!1),n=Ot(t,"productId",11,null),a=Ot(t,"initialTab",3,"recettes"),i=F(()=>n()?G.products.find(b=>b.$id===n()):null),o=X(rt(a())),c=X(!1),u=X(null),f=X(""),v=X(rt({quantity:null,unit:"",store:"",who:"",price:null,notes:""})),p=X(rt({quantity:0,unit:"",notes:"",dateTime:""})),_=X(rt([])),h=X(null),m=F(()=>{const b=s(i)?.purchases;if(!b||!Array.isArray(b))return console.warn("[ProductModal] Purchases is not a valid array:",b),[];const N=b.filter(K=>!K||typeof K!="object"?(console.warn("[ProductModal] Invalid purchase object:",K),!1):K.$id?!0:(console.warn("[ProductModal] Purchase missing $id:",K),!1));return N.length!==b.length&&console.warn(`[ProductModal] Filtered ${b.length-N.length} invalid purchases`),N}),S=F(()=>oc(s(i)?.recipesOccurrences||null)),x=F(()=>s(i)?.who||[]);Dn(()=>{s(i)&&(y(o,a()),y(_,ic(s(i).stockReel),!0),y(f,s(i).store||"",!0),E())});function E(){y(v,{quantity:0,unit:"",store:s(i)?.store||"",who:"",price:null,notes:""},!0),y(p,{quantity:0,unit:"",notes:"",dateTime:new Date().toISOString().slice(0,16)},!0)}function D(b){y(o,b,!0)}async function k(b){y(c,!0),y(u,null);try{return await b()}catch(N){return y(u,N instanceof Error?N.message:"Une erreur est survenue",!0),console.error("[ProductModal] Erreur:",N),null}finally{y(c,!1)}}function I(b){if(!b)return"-";try{return new Date(b).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return b}}function T(b){if(!b)return"-";try{const N=JSON.parse(b);if(Array.isArray(N)&&N.length>0)return N.map(K=>`${K.value} ${K.unit}`).join(" et ")}catch{return b}return b}async function M(){s(i)&&(y(c,!0),await k(async()=>{if(!s(v).quantity||!s(v).unit.trim())throw new Error("Veuillez remplir les champs obligatoires");let b=s(v).quantity,N=s(v).unit;if(s(v).unit==="kg"?(b=s(v).quantity*1e3,N="gr."):s(v).unit==="l."&&(b=s(v).quantity*1e3,N="ml"),await tc({products:[s(i).$id],mainId:s(i).mainId.$id,unit:N,quantity:b,store:s(v).store||null,who:s(v).who||null,notes:s(v).notes||"",price:s(v).price||null})){E();const ue=new CustomEvent("toast",{detail:{type:"success",message:"Achat ajouté avec succès"}});window.dispatchEvent(ue)}}))}function j(b){y(h,{...b},!0)}function U(){y(h,null)}async function z(){s(h)&&await k(async()=>{const b=s(h).$id;let N=s(h).quantity,K=s(h).unit;s(h).unit==="kg"?(N=s(h).quantity*1e3,K="gr."):s(h).unit==="l."&&(N=s(h).quantity*1e3,K="ml");const ue={unit:K,quantity:N,store:s(h)?.store||null,who:s(h)?.who||null,notes:s(h)?.notes||"",price:s(h)?.price||null};if(await rc(b,ue)){y(h,null);const De=new CustomEvent("toast",{detail:{type:"success",message:"Achat modifié avec succès"}});window.dispatchEvent(De)}})}async function te(b){confirm(`Êtes-vous sûr de vouloir supprimer cet achat (${b.quantity} ${b.unit}) ?`)&&await k(async()=>{await nc(b.$id);const N=new CustomEvent("toast",{detail:{type:"success",message:"Achat supprimé avec succès"}});window.dispatchEvent(N)})}async function ie(){s(i)&&await k(async()=>{if(!s(p).quantity||!s(p).unit)throw new Error("Veuillez remplir les champs obligatoires");const b={quantity:s(p).quantity.toString(),unit:s(p).unit,notes:s(p).notes||"",dateTime:s(p).dateTime||new Date().toISOString()},N=[...s(_),b],K=s(i).$id;if(await pa(K,JSON.stringify(N))){y(_,N,!0),E();const Te=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock ajouté avec succès"}});window.dispatchEvent(Te)}})}async function R(b){confirm("Êtes-vous sûr de vouloir supprimer ce relevé de stock ?")&&s(i)&&await k(async()=>{const N=s(_).filter((ue,Te)=>Te!==b);if(await pa(s(i).$id,JSON.stringify(N))){y(_,N,!0);const ue=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock supprimé avec succès"}});window.dispatchEvent(ue)}})}async function q(b){!s(i)||!b.trim()||await k(async()=>{const N=b.trim();if(s(x).includes(N))throw new Error("Ce volontaire est déjà ajouté");const K=[...s(x),N];if(await ha(s(i).$id,K)){const Te=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire ajouté avec succès"}});window.dispatchEvent(Te)}})}async function Y(b){s(i)&&confirm(`Retirer ${b} de la liste des volontaires ?`)&&await k(async()=>{const N=s(x).filter(ue=>ue!==b);if(await ha(s(i).$id,N)){const ue=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire retiré avec succès"}});window.dispatchEvent(ue)}})}async function Z(b){s(i)&&await k(async()=>{const N=b!==void 0?b:s(f)&&s(f).trim()!==""?s(f).trim():s(i).store;console.log("[ProductModal] handleUpdateStore called with:",{storeValue:b,editingStore:s(f),finalStoreValue:N});const K=await ec(s(i).$id,N);if(K){const ue=new CustomEvent("toast",{detail:{type:"success",message:"Magasin mis à jour avec succès"}});window.dispatchEvent(ue),y(f,K.store||"",!0)}})}var le=ne(),Ce=ee(le);{var ve=b=>{var N=Pu(),K=l(N),ue=l(K),Te=l(ue),De=l(Te),L=l(De),_e=d(De,2),ct=l(_e),Ze=l(ct),st=d(ct,2);{var Pe=V=>{var O=lu(),oe=l(O);vc(oe,{class:"w-3 h-3"}),g(V,O)},Nt=V=>{var O=cu(),oe=l(O);bc(oe,{class:"w-3 h-3"});var Rt=d(oe);B(()=>C(Rt,` ${s(i).status??""}`)),g(V,O)};$(st,V=>{s(i).status==="active"?V(Pe):V(Nt,!1)})}var Ft=d(st,2),Ue=d(l(Ft)),mt=d(Te,2);mt.__click=[wa,r,o,a,u,t];var Ve=l(mt);kt(Ve,{class:"w-4 h-4"});var Xe=d(ue,2),he=l(Xe);he.__click=[uu,D];var Re=l(he);Fn(Re,{class:"w-4 h-4 mr-1"});var At=d(Re,2);{var zt=V=>{var O=du(),oe=l(O);B(()=>C(oe,s(S).length)),g(V,O)};$(At,V=>{s(S).length>0&&V(zt)})}var Ge=d(he,2);Ge.__click=[fu,D];var ut=l(Ge);Pn(ut,{class:"w-4 h-4 mr-1"});var bt=d(ut,2);{var wt=V=>{var O=vu(),oe=l(O);B(()=>C(oe,s(m).length)),g(V,O)};$(bt,V=>{s(m).length>0&&V(wt)})}var Fe=d(Ge,2);Fe.__click=[hu,D];var yt=l(Fe);ls(yt,{class:"w-4 h-4 mr-1"});var Ct=d(yt,2);{var er=V=>{var O=pu(),oe=l(O);B(()=>C(oe,s(_).length)),g(V,O)};$(Ct,V=>{s(_).length>0&&V(er)})}var dt=d(Fe,2);dt.__click=[_u,D];var Ut=l(dt);kn(Ut,{class:"w-4 h-4 mr-1"});var ft=d(Ut,2);{var Vt=V=>{var O=gu(),oe=l(O);B(()=>C(oe,s(i).who.length)),g(V,O)};$(ft,V=>{s(i).who&&s(i).who.length>0&&V(Vt)})}var at=d(dt,2);at.__click=[mu,D];var Mt=l(at);En(Mt,{class:"w-4 h-4 mr-1"});var It=d(Xe,2),$t=l(It);{var Qe=V=>{var O=bu(),oe=l(O);kt(oe,{class:"w-4 h-4"});var Rt=d(oe,2),tr=l(Rt);B(()=>C(tr,`erreur : ${s(u)??""}`)),g(V,O)};$($t,V=>{s(u)&&V(Qe)})}var Dt=d($t,2),vt=l(Dt);{var zr=V=>{var O=Su(),oe=l(O),Rt=l(oe);Fn(Rt,{class:"w-5 h-5"});var tr=d(oe,2);{var et=xt=>{var qt=wu(),Gt=l(qt);Fn(Gt,{class:"w-12 h-12 mx-auto mb-2"}),g(xt,qt)},Pr=xt=>{var qt=xu(),Gt=l(qt),St=d(l(Gt));Oe(St,21,()=>s(S),jt=>jt.recipeName+jt.dateTimeService,(jt,ht)=>{var rr=yu(),Er=l(rr),pt=l(Er),nr=d(Er),Vr=l(nr),kr=d(nr),sr=l(kr),an=d(kr),On=l(an),on=d(an),Ln=l(on),ln=d(on),cn=l(ln);B(un=>{C(pt,s(ht).recipeName),C(Vr,`${s(ht).quantity??""} ${s(ht).unit??""}`),C(sr,un),C(On,s(ht).horaire||"-"),C(Ln,s(ht).typePlat||"-"),C(cn,s(ht).assiettes||"-")},[()=>I(s(ht).dateTimeService)]),g(jt,rr)}),g(xt,qt)};$(tr,xt=>{s(S).length===0?xt(et):xt(Pr,!1)})}g(V,O)},xr=V=>{var O=ne(),oe=ee(O);{var Rt=et=>{$c(et,{get product(){return s(i)},get currentProductPurchases(){return s(m)},get loading(){return s(c)},get newPurchase(){return s(v)},onAddPurchase:M,onStartEditPurchase:j,onCancelEditPurchase:U,onSavePurchase:z,onDeletePurchase:te})},tr=et=>{var Pr=ne(),xt=ee(Pr);{var qt=St=>{Bc(St,{get product(){return s(i)},get stockEntries(){return s(_)},get loading(){return s(c)},onAddStock:ie,onDeleteStock:R})},Gt=St=>{var jt=ne(),ht=ee(jt);{var rr=pt=>{Yc(pt,{get product(){return s(i)},get editingWho(){return s(x)},get loading(){return s(c)},onAddVolunteer:q,onRemoveVolunteer:Y})},Er=pt=>{var nr=ne(),Vr=ee(nr);{var kr=sr=>{ou(sr,{get product(){return s(i)},get editingStore(){return s(f)},get loading(){return s(c)},onUpdateStore:Z})};$(Vr,sr=>{s(o)==="magasins"&&sr(kr)},!0)}g(pt,nr)};$(ht,pt=>{s(o)==="volontaires"?pt(rr):pt(Er,!1)},!0)}g(St,jt)};$(xt,St=>{s(o)==="stock"?St(qt):St(Gt,!1)},!0)}g(et,Pr)};$(oe,et=>{s(o)==="achats"?et(Rt):et(tr,!1)},!0)}g(V,O)};$(vt,V=>{s(o)==="recettes"?V(zr):V(xr,!1)})}var Ur=d(It,2),Sr=l(Ur);Sr.__click=[wa,r,o,a,u,t],B(V=>{C(L,s(i).productName),C(Ze,s(i).productType),C(Ue,` ${V??""}`),Le(he,1,`tab ${s(o)==="recettes"?"tab-active":""}`),Le(Ge,1,`tab ${s(o)==="achats"?"tab-active":""}`),Le(Fe,1,`tab ${s(o)==="stock"?"tab-active":""}`),Le(dt,1,`tab ${s(o)==="volontaires"?"tab-active":""}`),Le(at,1,`tab ${s(o)==="magasins"?"tab-active":""}`)},[()=>T(s(i).totalNeededConsolidated)]),g(b,N)};$(Ce,b=>{r()&&s(i)&&b(ve)})}g(e,le),ae()}yr(["click"]);var ku=()=>G.clearFilters(),Tu=e=>G.setSearchQuery(e.currentTarget.value),Nu=e=>G.setProductType(e.currentTarget.value),Au=P("<option> </option>"),Cu=e=>G.setGroupBy(e.currentTarget.value),Mu=(e,t)=>G.setTemperatureFilters(e.currentTarget.checked,s(t).showPSurgel),Iu=(e,t)=>G.setTemperatureFilters(s(t).showPFrais,e.currentTarget.checked),$u=(e,t)=>G.toggleStore(t),Du=P("<button> </button>"),Ru=()=>G.clearStoreFilters(),qu=P('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),ju=P('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Ou=(e,t)=>G.toggleWho(t),Lu=P("<button> </button>"),Wu=()=>G.clearWhoFilters(),Bu=P('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),zu=P('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Uu=()=>G.handleSort("productName"),Vu=()=>G.handleSort("store"),Gu=()=>G.handleSort("who"),Qu=()=>G.handleSort("productType"),Hu=P('<tr class="bg-base-300 font-semibold sticky top-10 z-10"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Ku=(e,t,r)=>t("productName",s(r)),Ju=P('<div class="text-xs text-base-content/60"> </div>'),Yu=P('<div class="w-7 h-7 bg-info/20 rounded-full flex items-center justify-center"><!></div>'),Zu=P('<div class="w-7 h-7 bg-success/20 rounded-full flex items-center justify-center"><!></div>'),Xu=(e,t,r)=>t("store",s(r)),Fu=P('<div class="tooltip tooltip-info"> </div>'),ed=(e,t,r)=>t("who",s(r)),td=P('<span class="badge badge-soft badge-success badge-sm"> </span>'),rd=P('<div class="flex flex-wrap gap-1 pr-8"></div>'),nd=P('<div class="text-xs text-base-content/70 flex gap-2 items-center justify-center"><!> <span class="text-center "> </span> <span class="text-center "> </span></div>'),sd=(e,t,r)=>t("purchases",s(r)),ad=P('<tr class="hover:bg-base-300 transition-colors"><td class="cursor-pointer hover:bg-blue-50 relative group"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="cursor-pointer hover:bg-purple-50 relative group"><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><span class="badge badge-ghost"> </span></td><td class="text-center font-semibold"><div class="pb-1 text-center font-semibold"> </div> <!></td><td class="text-center font-medium cursor-pointer hover:bg-red-50 relative group"> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td> </td></tr>'),id=P("<!> <!>",1),od=P('<div class="text-center py-8"><div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),ld=e=>G.setProductType(e.currentTarget.value),cd=P("<option> </option>"),ud=e=>G.setGroupBy(e.currentTarget.value),dd=(e,t)=>G.setTemperatureFilters(e.currentTarget.checked,s(t).showPSurgel),fd=(e,t)=>G.setTemperatureFilters(s(t).showPFrais,e.currentTarget.checked),vd=(e,t)=>G.toggleStore(t),hd=P("<button> </button>"),pd=P('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),_d=(e,t)=>G.toggleWho(t),gd=P("<button> </button>"),md=P('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),bd=(e,t)=>{G.clearFilters(),y(t,!1)},wd=P('<div class="space-y-6"><div class="flex flex-wrap gap-2 items-center"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="form-control md:mb-4"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input input-bordered flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="hidden md:block"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><div class="form-control"><label class="label" for="product-type-select"><span class="label-text">Type de produit</span></label> <select id="product-type-select" class="select select-bordered"><option>Tous les types</option><!></select></div> <div class="form-control"><label class="label" for="grouping-select"><span class="label-text">Groupement</span></label> <select id="grouping-select" class="select select-bordered"><option>Aucun</option><option>Par magasin</option><option>Par type</option></select></div></div> <div class="mt-4"><fieldset><legend class="label"><span class="label-text">Température</span></legend> <div class="flex gap-4"><label class="cursor-pointer flex items-center gap-2"><input id="frais-checkbox" type="checkbox" class="checkbox checkbox-info"/> <span>Produits frais</span></label> <label class="cursor-pointer flex items-center gap-2"><input id="surgele-checkbox" type="checkbox" class="checkbox checkbox-success"/> <span>Produits surgelés</span></label></div></fieldset></div> <div class="flex flex-col lg:flex-row gap-6 mt-4"><!> <!></div></div></div> <div class="bg-base-200 rounded-lg overflow-x-auto max-h-[calc(100vh-200px)]"><table class="table w-full"><thead class="sticky top-0 z-10 bg-base-300"><tr class="bg-base-300"><th class="cursor-pointer hover:bg-base-200 text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="cursor-pointer hover:bg-base-200 text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div> <div class="bg-base-200 rounded-lg p-4"><h4 class="font-semibold mb-2">Légende</h4> <div class="flex flex-wrap gap-4 text-sm"><div class="flex items-center gap-2"><div class="w-4 h-4 bg-blue-100 rounded"></div> <span>Cliquable (produit)</span></div> <div class="flex items-center gap-2"><div class="w-4 h-4 bg-green-100 rounded"></div> <span>Cliquable (magasin)</span></div> <div class="flex items-center gap-2"><div class="w-4 h-4 bg-purple-100 rounded"></div> <span>Cliquable (qui)</span></div> <div class="flex items-center gap-2"><div class="w-4 h-4 bg-orange-100 rounded"></div> <span>Cliquable (achats)</span></div> <div class="flex items-center gap-2"><div class="badge badge-info badge-sm">F</div> <span>Frais</span></div> <div class="flex items-center gap-2"><div class="badge badge-success badge-sm">S</div> <span>Surgelé</span></div></div></div></div> <!> <div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="product-type-select-mobile"><span class="label-text">Type de produit</span></label> <select id="product-type-select-mobile" class="select select-bordered"><option>Tous les types</option><!></select></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <select id="grouping-select-mobile" class="select select-bordered"><option>Aucun</option><option>Par magasin</option><option>Par type</option></select></div> <div class="mb-6"><fieldset><legend class="label"><span class="label-text">Température</span></legend> <div class="flex flex-col gap-2"><label class="cursor-pointer flex items-center gap-2"><input id="frais-checkbox-mobile" type="checkbox" class="checkbox checkbox-info"/> <span>Produits frais</span></label> <label class="cursor-pointer flex items-center gap-2"><input id="surgele-checkbox-mobile" type="checkbox" class="checkbox checkbox-success"/> <span>Produits surgelés</span></label></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function yd(e,t){se(t,!0);const r=F(()=>G.filteredProducts),n=F(()=>G.groupedFormattedProducts),a=F(()=>G.stats),i=F(()=>G.uniqueStores),o=F(()=>G.uniqueWho),c=F(()=>G.uniqueProductTypes),u=F(()=>G.filters);let f=X(!1),v=X(!1),p=X(null),_=X("recettes");function h(A,W){switch(console.log(`Cell clicked: ${A}`,W),y(p,W.$id,!0),A){case"store":y(_,"magasins");break;case"who":y(_,"volontaires");break;case"purchases":y(_,"achats");break;case"productName":y(_,"recettes");break;default:y(_,"recettes")}y(v,!0)}function m(){y(v,!1),y(p,null)}Dn(()=>{function A(W){W.key==="Escape"&&s(v)&&m()}return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)});var S=wd(),x=ee(S),E=l(x),D=l(E),k=l(D);ga(k,{class:"w-4 h-4 mr-1"});var I=d(k),T=d(D,2),M=l(T);ma(M,{strokeWidth:2,class:"w-4 h-4 mr-1"});var j=d(M),U=d(T,2),z=l(U);ba(z,{class:"w-4 h-4 mr-1"});var te=d(z),ie=d(U,2),R=l(ie);hc(R,{strokeWidth:2,class:"w-4 h-4 mr-1"});var q=d(R),Y=d(E,2),Z=l(Y),le=l(Z),Ce=l(le),ve=l(Ce);Xn(ve,{class:"w-5 h-5"});var b=d(Ce,2);b.__click=[ku];var N=l(b);kt(N,{class:"w-4 h-4"});var K=d(Z,2),ue=d(l(K),2),Te=l(ue);gc(Te,{class:"w-4 h-4"});var De=d(Te,2);De.__input=[Tu];var L=d(K,2),_e=l(L),ct=l(_e),Ze=d(l(ct),2);Ze.__change=[Nu];var st=l(Ze);st.value=st.__value="";var Pe=d(st);Oe(Pe,16,()=>s(c),A=>A,(A,W)=>{var ye=Au(),qe=l(ye),de={};B(()=>{C(qe,W),de!==(de=W)&&(ye.value=(ye.__value=W)??"")}),g(A,ye)});var Nt;Cr(Ze);var Ft=d(ct,2),Ue=d(l(Ft),2);Ue.__change=[Cu];var mt=l(Ue);mt.value=mt.__value="none";var Ve=d(mt);Ve.value=Ve.__value="store";var Xe=d(Ve);Xe.value=Xe.__value="productType";var he;Cr(Ue);var Re=d(_e,2),At=l(Re),zt=d(l(At),2),Ge=l(zt),ut=l(Ge);ut.__change=[Mu,u];var bt=d(Ge,2),wt=l(bt);wt.__change=[Iu,u];var Fe=d(Re,2),yt=l(Fe);{var Ct=A=>{var W=ju(),ye=l(W),qe=d(l(ye),2),de=l(qe);Oe(de,16,()=>s(i),ge=>ge,(ge,me)=>{var be=Du();be.__click=[$u,me];var J=l(be);B(Qt=>{Le(be,1,`btn btn-sm ${Qt??""}`),C(J,me)},[()=>s(u).selectedStores.length===0?"btn-soft btn-accent":s(u).selectedStores.includes(me)?"btn-accent":"btn-dash btn-accent"]),g(ge,be)});var He=d(de,2);{var Me=ge=>{var me=qu();me.__click=[Ru];var be=l(me);kt(be,{class:"w-3 h-3"}),g(ge,me)};$(He,ge=>{s(u).selectedStores.length>0&&ge(Me)})}g(A,W)};$(yt,A=>{s(i).length>0&&A(Ct)})}var er=d(yt,2);{var dt=A=>{var W=zu(),ye=l(W),qe=d(l(ye),2),de=l(qe);Oe(de,16,()=>s(o),ge=>ge,(ge,me)=>{var be=Lu();be.__click=[Ou,me];var J=l(be);B(Qt=>{Le(be,1,`btn btn-sm ${Qt??""}`),C(J,me)},[()=>s(u).selectedWho.length===0?"btn-soft btn-accent":s(u).selectedWho.includes(me)?"btn-accent":"btn-dash btn-accent"]),g(ge,be)});var He=d(de,2);{var Me=ge=>{var me=Bu();me.__click=[Wu];var be=l(me);kt(be,{class:"w-3 h-3"}),g(ge,me)};$(He,ge=>{s(u).selectedWho.length>0&&ge(Me)})}g(A,W)};$(er,A=>{s(o).length>0&&A(dt)})}var Ut=d(Y,2),ft=l(Ut),Vt=l(ft),at=l(Vt),Mt=l(at);Mt.__click=[Uu];var It=l(Mt),$t=l(It);ga($t,{class:"w-4 h-4"});var Qe=d($t,2);{var Dt=A=>{var W=je();B(()=>C(W,s(u).sortDirection==="asc"?"↑":"↓")),g(A,W)};$(Qe,A=>{s(u).sortColumn==="productName"&&A(Dt)})}var vt=d(Mt);vt.__click=[Vu];var zr=l(vt),xr=l(zr);En(xr,{class:"w-4 h-4"});var Ur=d(xr,2);{var Sr=A=>{var W=je();B(()=>C(W,s(u).sortDirection==="asc"?"↑":"↓")),g(A,W)};$(Ur,A=>{s(u).sortColumn==="store"&&A(Sr)})}var V=d(vt);V.__click=[Gu];var O=l(V),oe=l(O);kn(oe,{class:"w-4 h-4"});var Rt=d(oe,2);{var tr=A=>{var W=je();B(()=>C(W,s(u).sortDirection==="asc"?"↑":"↓")),g(A,W)};$(Rt,A=>{s(u).sortColumn==="who"&&A(tr)})}var et=d(V);et.__click=[Qu];var Pr=l(et),xt=d(l(Pr));{var qt=A=>{var W=je();B(()=>C(W,s(u).sortDirection==="asc"?"↑":"↓")),g(A,W)};$(xt,A=>{s(u).sortColumn==="productType"&&A(qt)})}var Gt=d(et),St=l(Gt),jt=d(l(St));{var ht=A=>{var W=je();B(()=>C(W,s(u).sortDirection==="asc"?"↑":"↓")),g(A,W)};$(jt,A=>{s(u).sortColumn==="totalNeededConsolidated"&&A(ht)})}var rr=d(Gt),Er=l(rr),pt=l(Er);Pn(pt,{class:"w-4 h-4"});var nr=d(pt,2);{var Vr=A=>{var W=je();B(()=>C(W,s(u).sortDirection==="asc"?"↑":"↓")),g(A,W)};$(nr,A=>{s(u).sortColumn==="totalPurchases"&&A(Vr)})}var kr=d(rr),sr=l(kr),an=l(sr);pc(an,{class:"w-4 h-4"});var On=d(Vt);Oe(On,21,()=>Object.entries(s(n)),([A,W])=>A,(A,W)=>{var ye=F(()=>Pa(s(W),2));let qe=()=>s(ye)[0],de=()=>s(ye)[1];var He=id(),Me=ee(He);{var ge=be=>{var J=Hu(),Qt=l(J),Gr=l(Qt),dn=l(Gr);{var fn=Ht=>{var ar=je();B(()=>C(ar,`🏪 ${qe()??""} (${de().length??""})`)),g(Ht,ar)},vn=Ht=>{var ar=je();B(()=>C(ar,`📦 ${qe()??""} (${de().length??""})`)),g(Ht,ar)};$(dn,Ht=>{s(u).groupBy==="store"?Ht(fn):Ht(vn,!1)})}g(be,J)};$(Me,be=>{qe()!==""&&be(ge)})}var me=d(Me,2);Oe(me,17,()=>G.sortProducts(de()),be=>be.$id,(be,J)=>{var Qt=ad(),Gr=l(Qt);Gr.__click=[Ku,h,J];var dn=l(Gr),fn=l(dn),vn=l(fn),Ht=l(vn),ar=d(vn,2);{var Ii=re=>{var fe=Ju(),Ke=l(fe);B(()=>C(Ke,`Ancien: ${s(J).previousNames[0]??""}`)),g(re,fe)};$(ar,re=>{s(J).previousNames&&s(J).previousNames.length>0&&re(Ii)})}var $i=d(fn,2),qs=l($i);{var Di=re=>{var fe=Yu(),Ke=l(fe);ma(Ke,{strokeWidth:3,class:"w-4 h-4 text-info"}),g(re,fe)};$(qs,re=>{s(J).pFrais&&re(Di)})}var Ri=d(qs,2);{var qi=re=>{var fe=Zu(),Ke=l(fe);ba(Ke,{class:"w-4 h-4 text-success"}),g(re,fe)};$(Ri,re=>{s(J).pSurgel&&re(qi)})}var ji=d(dn,2),Oi=l(ji);wn(Oi,{class:"w-3 h-3 text-blue-500"});var hn=d(Gr);hn.__click=[Xu,h,J];var js=l(hn);{var Li=re=>{var fe=Fu(),Ke=l(fe);B(()=>{os(fe,"data-tip",s(J).storeInfo.storeComment),C(Ke,s(J).storeInfo.storeName||"-")}),g(re,fe)},Wi=re=>{var fe=je();B(()=>C(fe,s(J).storeInfo?.storeName||"-")),g(re,fe)};$(js,re=>{s(J).storeInfo?.storeComment?re(Li):re(Wi,!1)})}var Bi=d(js,2),zi=l(Bi);wn(zi,{class:"w-3 h-3 text-green-500"});var Un=d(hn);Un.__click=[ed,h,J];var Os=l(Un);{var Ui=re=>{var fe=rd();Oe(fe,20,()=>s(J).who,Ke=>Ke,(Ke,pn)=>{var _n=td(),Qn=l(_n);B(()=>C(Qn,pn)),g(Ke,_n)}),g(re,fe)},Vi=re=>{var fe=je("-");g(re,fe)};$(Os,re=>{s(J).who&&s(J).who.length>0?re(Ui):re(Vi,!1)})}var Gi=d(Os,2),Qi=l(Gi);wn(Qi,{class:"w-3 h-3 text-purple-500"});var Vn=d(Un),Hi=l(Vn),Ki=l(Hi),Ls=d(Vn),Ws=l(Ls),Ji=l(Ws),Yi=d(Ws,2);{var Zi=re=>{var fe=nd(),Ke=l(fe);wc(Ke,{class:"w-3 h-3"});var pn=d(Ke,2),_n=l(pn),Qn=d(pn,2),to=l(Qn);B(()=>{C(_n,`${s(J)?.nbRecipes??""} r.`),C(to,`${s(J)?.totalAssiettes??""} c.`)}),g(re,fe)};$(Yi,re=>{(s(J).nbRecipes||s(J).totalAssiettes)&&re(Zi)})}var Gn=d(Ls);Gn.__click=[sd,h,J];var Bs=l(Gn),Xi=d(Bs),Fi=l(Xi);wn(Fi,{class:"w-3 h-3 text-red-500"});var zs=d(Gn),eo=l(zs);B(()=>{C(Ht,s(J).productName),Le(hn,1,`${s(u).groupBy==="store"?"hidden":""} cursor-pointer hover:bg-green-50 font-medium relative group`),Le(Vn,1,s(u).groupBy==="productType"?"hidden":""),C(Ki,s(J).productType),C(Ji,s(J).displayQuantity||"-"),C(Bs,`${(s(J).displayTotalPurchases||"-")??""} `),Le(zs,1,`text-center font-medium ${s(J).displayMissingQuantity==="✅ Complet"?"text-success":"text-warning"}`),C(eo,s(J).displayMissingQuantity)}),g(be,Qt)}),g(A,He)});var on=d(ft,2);{var Ln=A=>{var W=od();g(A,W)};$(on,A=>{s(r).length===0&&A(Ln)})}var ln=d(x,2);Eu(ln,{get isOpen(){return s(v)},get productId(){return s(p)},get initialTab(){return s(_)},onclose:m});var cn=d(ln,2),un=l(cn),gi=d(un,2),mi=d(l(gi),2),xs=l(mi),Ss=l(xs),bi=l(Ss);Xn(bi,{class:"w-5 h-5"});var wi=d(Ss,2),yi=l(wi);kt(yi,{class:"w-4 h-4"});var Ps=d(xs,2),Tr=d(l(Ps),2);Tr.__change=[ld];var Wn=l(Tr);Wn.value=Wn.__value="";var xi=d(Wn);Oe(xi,16,()=>s(c),A=>A,(A,W)=>{var ye=cd(),qe=l(ye),de={};B(()=>{C(qe,W),de!==(de=W)&&(ye.value=(ye.__value=W)??"")}),g(A,ye)});var Es;Cr(Tr);var ks=d(Ps,2),Nr=d(l(ks),2);Nr.__change=[ud];var Bn=l(Nr);Bn.value=Bn.__value="none";var zn=d(Bn);zn.value=zn.__value="store";var Ts=d(zn);Ts.value=Ts.__value="productType";var Ns;Cr(Nr);var As=d(ks,2),Si=l(As),Pi=d(l(Si),2),Cs=l(Pi),Ms=l(Cs);Ms.__change=[dd,u];var Ei=d(Cs,2),Is=l(Ei);Is.__change=[fd,u];var $s=d(As,2);{var ki=A=>{var W=pd(),ye=l(W),qe=d(l(ye),2);Oe(qe,20,()=>s(i),de=>de,(de,He)=>{var Me=hd();Me.__click=[vd,He];var ge=l(Me);B(me=>{Le(Me,1,`btn btn-sm ${me??""}`),C(ge,He)},[()=>s(u).selectedStores.length===0?"btn-soft btn-accent":s(u).selectedStores.includes(He)?"btn-accent":"btn-dash btn-accent"]),g(de,Me)}),g(A,W)};$($s,A=>{s(i).length>0&&A(ki)})}var Ds=d($s,2);{var Ti=A=>{var W=md(),ye=l(W),qe=d(l(ye),2);Oe(qe,20,()=>s(o),de=>de,(de,He)=>{var Me=gd();Me.__click=[_d,He];var ge=l(Me);B(me=>{Le(Me,1,`btn btn-sm ${me??""}`),C(ge,He)},[()=>s(u).selectedWho.length===0?"btn-soft btn-accent":s(u).selectedWho.includes(He)?"btn-accent":"btn-dash btn-accent"]),g(de,Me)}),g(A,W)};$(Ds,A=>{s(o).length>0&&A(Ti)})}var Rs=d(Ds,4);Rs.__click=[bd,f];var Ni=l(Rs);kt(Ni,{class:"w-4 h-4 mr-2"});var Ai=d(cn,2),Ci=l(Ai),Mi=l(Ci);Xn(Mi,{class:"w-6 h-6"}),B(()=>{C(I,` ${s(a).total??""}`),C(j,` frais:
      ${s(a).frais??""}`),C(te,` surgelés:
      ${s(a).surgel??""}`),C(q,` fusionnés:
      ${s(a).merged??""}`),Rl(De,s(u).searchQuery),Nt!==(Nt=s(u).selectedProductType)&&(Ze.value=(Ze.__value=s(u).selectedProductType)??"",Jt(Ze,s(u).selectedProductType)),he!==(he=s(u).groupBy)&&(Ue.value=(Ue.__value=s(u).groupBy)??"",Jt(Ue,s(u).groupBy)),mn(ut,s(u).showPFrais),mn(wt,s(u).showPSurgel),Le(vt,1,`cursor-pointer hover:bg-base-200 text-center ${s(u).groupBy==="store"?"hidden":""}`),Le(et,1,`cursor-pointer hover:bg-base-200 text-center ${s(u).groupBy==="productType"?"hidden":""}`),Es!==(Es=s(u).selectedProductType)&&(Tr.value=(Tr.__value=s(u).selectedProductType)??"",Jt(Tr,s(u).selectedProductType)),Ns!==(Ns=s(u).groupBy)&&(Nr.value=(Nr.__value=s(u).groupBy)??"",Jt(Nr,s(u).groupBy)),mn(Ms,s(u).showPFrais),mn(Is,s(u).showPSurgel)}),Ol(un,()=>s(f),A=>y(f,A)),g(e,S),ae()}yr(["click","input","change"]);Oo();var xd=P('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function Sd(e){var t=xd();g(e,t)}var Pd=P('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Ed(e,t){var r=Pd(),n=d(l(r),2),a=d(l(n),2),i=l(a);B(()=>C(i,t.message)),g(e,r)}var kd=P('<div class="flex items-center gap-2 text-success"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),Td=P('<div class="flex items-center gap-2 text-info"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),Nd=P('<div class="text-base-content/60"> </div>'),Ad=P('<div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Cd=P('<div class="min-h-screen bg-base-100"><header class="sticky top-0 z-10 bg-base-200 shadow-sm"><div class="container mx-auto px-4 py-4"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-base-content">Produits</h1> <p class="text-sm text-base-content/70"> </p></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function Md(e,t){se(t,!0);let r,n=X(null);fi(async()=>{r=Yl();try{await G.initialize(r)}catch(R){y(n,R instanceof Error?R.message:"Erreur lors de l'initialisation",!0),console.error("[App] Erreur initialisation:",R)}}),zl(()=>{G.destroy()});const a=F(()=>s(n)||G.error),i=F(()=>G.loading&&G.products.length===0);var o=Cd(),c=l(o),u=l(c),f=l(u),v=l(f),p=d(l(v),2),_=l(p),h=d(v,2),m=l(h);{var S=R=>{var q=kd();g(R,q)};$(m,R=>{G.realtimeConnected&&R(S)})}var x=d(m,2);{var E=R=>{var q=Td();g(R,q)};$(x,R=>{G.syncing&&R(E)})}var D=d(x,2);{var k=R=>{var q=Nd(),Y=l(q);B(Z=>C(Y,`Maj: ${Z??""}`),[()=>new Date(G.lastSync).toLocaleTimeString()]),g(R,q)};$(D,R=>{G.lastSync&&R(k)})}var I=d(c,2),T=l(I);{var M=R=>{Ed(R,{get message(){return s(a)}})};$(T,R=>{s(a)&&R(M)})}var j=d(T,2);{var U=R=>{Sd(R)};$(j,R=>{s(i)&&R(U)})}var z=d(j,2);{var te=R=>{yd(R,{})},ie=R=>{var q=ne(),Y=ee(q);{var Z=le=>{var Ce=Ad();g(le,Ce)};$(Y,le=>{G.loading||le(Z)},!0)}g(R,q)};$(z,R=>{G.products.length>0?R(te):R(ie,!1)})}B(()=>C(_,`Liste: ${r??""}`)),g(e,o),ae()}xl(Md,{target:document.getElementById("app_products")});
