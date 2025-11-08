(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const ss=!1;var hn=Array.isArray,Uo=Array.prototype.indexOf,aa=Array.from,Ln=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Wo=Object.getOwnPropertyDescriptors,Go=Object.prototype,Qo=Array.prototype,os=Object.getPrototypeOf,wa=Object.isExtensible;function Mr(e){return typeof e=="function"}const ae=()=>{};function Ho(e){for(var t=0;t<e.length;t++)e[t]()}function is(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function ls(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const lt=2,sa=4,oa=8,ar=16,Mt=32,sr=64,ia=128,pt=256,dn=512,tt=1024,dt=2048,Qt=4096,gt=8192,or=16384,la=32768,ir=65536,Sa=1<<17,Ko=1<<18,Pr=1<<19,Jo=1<<20,zn=1<<21,pn=1<<22,Xt=1<<23,Ft=Symbol("$state"),cs=Symbol("legacy props"),Yo=Symbol(""),qr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function us(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Zo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Xo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Fo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ei(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ti(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ri(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ni(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ai(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function si(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function oi(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const mn=1,_n=2,ds=4,ii=8,li=16,ci=1,ui=2,di=4,fi=8,vi=16,hi=1,pi=2,Ke=Symbol(),mi="http://www.w3.org/1999/xhtml",_i="http://www.w3.org/2000/svg",gi="@attach";function bi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function yi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let wi=!1;function fs(e){return e===this.v}function vs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Si(e,t){return e!==t}function hs(e){return!vs(e,this.v)}let xr=!1,Pi=!1;function xi(){xr=!0}let Ve=null;function mr(e){Ve=e}function V(e,t=!1,r){Ve={p:Ve,c:null,e:null,s:e,x:null,l:xr&&!t?{s:null,u:null,$:[]}:null}}function U(e){var t=Ve,r=t.e;if(r!==null){t.e=null;for(var n of r)Ts(n)}return Ve=t.p,{}}function Er(){return!xr||Ve!==null&&Ve.l===null}let Jt=[];function ps(){var e=Jt;Jt=[],Ho(e)}function tr(e){if(Jt.length===0&&!jr){var t=Jt;queueMicrotask(()=>{t===Jt&&ps()})}Jt.push(e)}function Ei(){for(;Jt.length>0;)ps()}const $i=new WeakMap;function ms(e){var t=Pe;if(t===null)return Ee.f|=Xt,e;if((t.f&la)===0){if((t.f&ia)===0)throw!t.parent&&e instanceof Error&&_s(e),e;t.b.error(e)}else _r(e,t)}function _r(e,t){for(;t!==null;){if((t.f&ia)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&_s(e),e}function _s(e){const t=$i.get(e);t&&(Ln(e,"message",{value:t.message}),Ln(e,"stack",{value:t.stack}))}const nn=new Set;let De=null,on=null,Vn=new Set,xt=[],gn=null,Un=!1,jr=!1;class ht{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#l=[];#o=[];#i=[];#a=[];#s=[];#f=[];skipped_effects=new Set;process(t){xt=[],on=null;var r=ht.apply(this);for(const s of t)this.#n(s);if(this.#c===0){this.#v();var n=this.#o,a=this.#i;this.#o=[],this.#i=[],this.#a=[],on=this,De=null,Pa(n),Pa(a),on=null,this.#u?.resolve()}else this.#d(this.#o),this.#d(this.#i),this.#d(this.#a);r();for(const s of this.#l)Ur(s);this.#l=[]}#n(t){t.f^=tt;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Mt|sr))!==0,s=a&&(n&tt)!==0,i=s||(n&gt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=tt:(n&sa)!==0?this.#i.push(r):(n&tt)===0&&((n&pn)!==0&&r.b?.is_pending()?this.#l.push(r):Pn(r)&&((r.f&ar)!==0&&this.#a.push(r),Ur(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#d(t){for(const r of t)((r.f&dt)!==0?this.#s:this.#f).push(r),at(r,tt);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){De=this}deactivate(){De=null}flush(){if(xt.length>0){if(this.activate(),gs(),De!==null&&De!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of Vn)if(Vn.delete(t),t(),De!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),nn.size>1){this.#e.clear();let t=!0;for(const r of nn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;bs(n)}if(xt.length>0){De=r;const n=ht.apply(r);for(const a of xt)r.#n(a);xt=[],n()}}De=null}nn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#s)at(t,dt),rr(t);for(const t of this.#f)at(t,Qt),rr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=is()).promise}static ensure(){if(De===null){const t=De=new ht;nn.add(De),jr||ht.enqueue(()=>{De===t&&t.flush()})}return De}static enqueue(t){tr(t)}static apply(t){return ae}}function ki(e){var t=jr;jr=!0;try{for(var r;;){if(Ei(),xt.length===0&&(De?.flush(),xt.length===0))return gn=null,r;gs()}}finally{jr=t}}function gs(){var e=pr;Un=!0;try{var t=0;for(ka(!0);xt.length>0;){var r=ht.ensure();if(t++>1e3){var n,a;Ai()}r.process(xt),Lt.clear()}}finally{Un=!1,ka(e),gn=null}}function Ai(){try{ti()}catch(e){_r(e,gn)}}let Kt=null;function Pa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(or|gt))===0&&Pn(n)&&(Kt=[],Ur(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Ms(n):n.fn=null),Kt?.length>0)){Lt.clear();for(const a of Kt)Ur(a);Kt=[]}}Kt=null}}function bs(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&lt)!==0?bs(t):(r&(pn|ar))!==0&&(at(t,dt),rr(t))}}function rr(e){for(var t=gn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Un&&t===Pe&&(r&ar)!==0)return;if((r&(sr|Mt))!==0){if((r&tt)===0)return;t.f^=tt}}xt.push(t)}function ca(e){let t=0,r=Vt(0),n;return()=>{Wi()&&(o(r),ha(()=>(t===0&&(n=$r(()=>e(()=>Et(r)))),t+=1,()=>{tr(()=>{t-=1,t===0&&(n?.(),n=void 0,Et(r))})})))}}var Ti=ir|Pr|ia;function Ni(e,t,r){new Ci(e,t,r)}class Ci{parent;#e=!1;#r;#c=null;#u;#l;#o;#i=null;#a=null;#s=null;#f=null;#n=0;#d=0;#v=!1;#t=null;#_=()=>{this.#t&&gr(this.#t,this.#n)};#g=ca(()=>(this.#t=Vt(this.#n),()=>{this.#t=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#l=n,this.parent=Pe.b,this.#e=!!this.#u.pending,this.#o=Rt(()=>{Pe.b=this;{try{this.#i=Xe(()=>n(this.#r))}catch(a){this.error(a)}this.#d>0?this.#p():this.#e=!1}},Ti)}#w(){try{this.#i=Xe(()=>this.#l(this.#r))}catch(t){this.error(t)}this.#e=!1}#S(){const t=this.#u.pending;t&&(this.#a=Xe(()=>t(this.#r)),ht.enqueue(()=>{this.#i=this.#h(()=>(ht.ensure(),Xe(()=>this.#l(this.#r)))),this.#d>0?this.#p():(Tt(this.#a,()=>{this.#a=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#h(t){var r=Pe,n=Ee,a=Ve;$t(this.#o),ot(this.#o),mr(this.#o.ctx);try{return t()}catch(s){return ms(s),null}finally{$t(r),ot(n),mr(a)}}#p(){const t=this.#u.pending;this.#i!==null&&(this.#f=document.createDocumentFragment(),Mi(this.#i,this.#f)),this.#a===null&&(this.#a=Xe(()=>t(this.#r)))}#m(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t);return}this.#d+=t,this.#d===0&&(this.#e=!1,this.#a&&Tt(this.#a,()=>{this.#a=null}),this.#f&&(this.#r.before(this.#f),this.#f=null),tr(()=>{ht.ensure().flush()}))}update_pending_count(t){this.#m(t),this.#n+=t,Vn.add(this.#_)}get_effect_pending(){return this.#g(),o(this.#t)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#i&&(Fe(this.#i),this.#i=null),this.#a&&(Fe(this.#a),this.#a=null),this.#s&&(Fe(this.#s),this.#s=null);var a=!1,s=!1;const i=()=>{if(a){yi();return}a=!0,s&&oi(),ht.ensure(),this.#n=0,this.#s!==null&&Tt(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#i=this.#h(()=>(this.#v=!1,Xe(()=>this.#l(this.#r)))),this.#d>0?this.#p():this.#e=!1};var l=Ee;try{ot(null),s=!0,r?.(t,i),s=!1}catch(c){_r(c,this.#o&&this.#o.parent)}finally{ot(l)}n&&tr(()=>{this.#s=this.#h(()=>{this.#v=!0;try{return Xe(()=>{n(this.#r,()=>t,()=>i)})}catch(c){return _r(c,this.#o.parent),null}finally{this.#v=!1}})})}}function Mi(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:Jr(r);t.append(r),r=a}}function ys(e,t,r){const n=Er()?bn:ua;if(t.length===0){r(e.map(n));return}var a=De,s=Pe,i=Ii();Promise.all(t.map(l=>Di(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(s.f&or)===0&&_r(c,s)}a?.deactivate(),ws()}).catch(l=>{_r(l,s)})}function Ii(){var e=Pe,t=Ee,r=Ve,n=De;return function(){$t(e),ot(t),mr(r),n?.activate()}}function ws(){$t(null),ot(null),mr(null)}function bn(e){var t=lt|dt,r=Ee!==null&&(Ee.f&lt)!==0?Ee:null;return Pe===null||r!==null&&(r.f&pt)!==0?t|=pt:Pe.f|=Pr,{ctx:Ve,deps:null,effects:null,equals:fs,f:t,fn:e,reactions:null,rv:0,v:Ke,wv:0,parent:r??Pe,ac:null}}function Di(e,t){let r=Pe;r===null&&Zo();var n=r.b,a=void 0,s=Vt(Ke),i=!Ee,l=new Map;return Qi(()=>{var c=is();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=De,v=n.is_pending();i&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(qr),l.set(f,c)));const _=(p,m=void 0)=>{v||f.activate(),m?m!==qr&&(s.f|=Xt,gr(s,m)):((s.f&Xt)!==0&&(s.f^=Xt),gr(s,p)),i&&(n.update_pending_count(-1),v||f.decrement()),ws()};c.promise.then(_,p=>_(null,p||"unknown"))}),As(()=>{for(const c of l.values())c.reject(qr)}),new Promise(c=>{function f(v){function _(){v===a?c(s):f(a)}v.then(_,_)}f(a)})}function X(e){const t=bn(e);return Rs(t),t}function ua(e){const t=bn(e);return t.equals=hs,t}function Ss(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Fe(t[r])}}function Ri(e){for(var t=e.parent;t!==null;){if((t.f&lt)===0)return t;t=t.parent}return null}function da(e){var t,r=Pe;$t(Ri(e));try{Ss(e),t=Bs(e)}finally{$t(r)}return t}function Ps(e){var t=da(e);if(e.equals(t)||(e.v=t,e.wv=qs()),!cr){var r=(jt||(e.f&pt)!==0)&&e.deps!==null?Qt:tt;at(e,r)}}const Lt=new Map;function Vt(e,t){var r={f:0,v:e,reactions:null,equals:fs,rv:0,wv:0};return r}function H(e,t){const r=Vt(e);return Rs(r),r}function Oi(e,t=!1,r=!0){const n=Vt(e);return t||(n.equals=hs),xr&&r&&Ve!==null&&Ve.l!==null&&(Ve.l.s??=[]).push(n),n}function $(e,t,r=!1){Ee!==null&&(!_t||(Ee.f&Sa)!==0)&&Er()&&(Ee.f&(lt|ar|pn|Sa))!==0&&!Nt?.includes(e)&&si();let n=r?Ce(t):t;return gr(e,n)}function gr(e,t){if(!e.equals(t)){var r=e.v;cr?Lt.set(e,t):Lt.set(e,r),e.v=t;var n=ht.ensure();n.capture(e,r),(e.f&lt)!==0&&((e.f&dt)!==0&&da(e),at(e,(e.f&pt)===0?tt:Qt)),e.wv=qs(),xs(e,dt),Er()&&Pe!==null&&(Pe.f&tt)!==0&&(Pe.f&(Mt|sr))===0&&(vt===null?Ji([e]):vt.push(e))}return t}function Et(e){$(e,e.v+1)}function xs(e,t){var r=e.reactions;if(r!==null)for(var n=Er(),a=r.length,s=0;s<a;s++){var i=r[s],l=i.f;if(!(!n&&i===Pe)){var c=(l&dt)===0;c&&at(i,t),(l&lt)!==0?xs(i,Qt):c&&((l&ar)!==0&&Kt!==null&&Kt.push(i),rr(i))}}}function Ce(e){if(typeof e!="object"||e===null||Ft in e)return e;const t=os(e);if(t!==Go&&t!==Qo)return e;var r=new Map,n=hn(e),a=H(0),s=Ct,i=l=>{if(Ct===s)return l();var c=Ee,f=Ct;ot(null),Ta(s);var v=l();return ot(c),Ta(f),v};return n&&r.set("length",H(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&ni();var v=r.get(c);return v===void 0?v=i(()=>{var _=H(f.value);return r.set(c,_),_}):$(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=i(()=>H(Ke));r.set(c,v),Et(a)}}else $(f,Ke),Et(a);return!0},get(l,c,f){if(c===Ft)return e;var v=r.get(c),_=c in l;if(v===void 0&&(!_||Bt(l,c)?.writable)&&(v=i(()=>{var m=Ce(_?l[c]:Ke),g=H(m);return g}),r.set(c,v)),v!==void 0){var p=o(v);return p===Ke?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=o(v))}else if(f===void 0){var _=r.get(c),p=_?.v;if(_!==void 0&&p!==Ke)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===Ft)return!0;var f=r.get(c),v=f!==void 0&&f.v!==Ke||Reflect.has(l,c);if(f!==void 0||Pe!==null&&(!v||Bt(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=v?Ce(l[c]):Ke,m=H(p);return m}),r.set(c,f));var _=o(f);if(_===Ke)return!1}return v},set(l,c,f,v){var _=r.get(c),p=c in l;if(n&&c==="length")for(var m=f;m<_.v;m+=1){var g=r.get(m+"");g!==void 0?$(g,Ke):m in l&&(g=i(()=>H(Ke)),r.set(m+"",g))}if(_===void 0)(!p||Bt(l,c)?.writable)&&(_=i(()=>H(void 0)),$(_,Ce(f)),r.set(c,_));else{p=_.v!==Ke;var x=i(()=>Ce(f));$(_,x)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(v,f),!p){if(n&&typeof c=="string"){var y=r.get("length"),P=Number(c);Number.isInteger(P)&&P>=y.v&&$(y,P+1)}Et(a)}return!0},ownKeys(l){o(a);var c=Reflect.ownKeys(l).filter(_=>{var p=r.get(_);return p===void 0||p.v!==Ke});for(var[f,v]of r)v.v!==Ke&&!(f in l)&&c.push(f);return c},setPrototypeOf(){ai()}})}function xa(e){try{if(e!==null&&typeof e=="object"&&Ft in e)return e[Ft]}catch{}return e}function qi(e,t){return Object.is(xa(e),xa(t))}var Ea,Es,$s,ks;function ji(){if(Ea===void 0){Ea=window,Es=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;$s=Bt(t,"firstChild").get,ks=Bt(t,"nextSibling").get,wa(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),wa(r)&&(r.__t=void 0)}}function It(e=""){return document.createTextNode(e)}function br(e){return $s.call(e)}function Jr(e){return ks.call(e)}function u(e,t){return br(e)}function O(e,t=!1){{var r=br(e);return r instanceof Comment&&r.data===""?Jr(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=Jr(n);return n}function Bi(e){e.textContent=""}function yn(){return!1}function Li(e,t){if(t){const r=document.body;e.autofocus=!0,tr(()=>{document.activeElement===r&&e.focus()})}}let $a=!1;function zi(){$a||($a=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function wn(e){var t=Ee,r=Pe;ot(null),$t(null);try{return e()}finally{ot(t),$t(r)}}function fa(e,t,r,n=r){e.addEventListener(t,()=>wn(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),zi()}function Vi(e){Pe===null&&Ee===null&&ei(),Ee!==null&&(Ee.f&pt)!==0&&Pe===null&&Fo(),cr&&Xo()}function Ui(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Dt(e,t,r,n=!0){var a=Pe;a!==null&&(a.f&gt)!==0&&(e|=gt);var s={ctx:Ve,deps:null,nodes_start:null,nodes_end:null,f:e|dt,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Ur(s),s.f|=la}catch(c){throw Fe(s),c}else t!==null&&rr(s);if(n){var i=s;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Pr)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Ui(i,a),Ee!==null&&(Ee.f&lt)!==0&&(e&sr)===0)){var l=Ee;(l.effects??=[]).push(i)}}return s}function Wi(){return Ee!==null&&!_t}function As(e){const t=Dt(oa,null,!1);return at(t,tt),t.teardown=e,t}function lr(e){Vi();var t=Pe.f,r=!Ee&&(t&Mt)!==0&&(t&la)===0;if(r){var n=Ve;(n.e??=[]).push(e)}else return Ts(e)}function Ts(e){return Dt(sa|Jo,e,!1)}function Gi(e){ht.ensure();const t=Dt(sr|Pr,e,!0);return(r={})=>new Promise(n=>{r.outro?Tt(t,()=>{Fe(t),n(void 0)}):(Fe(t),n(void 0))})}function va(e){return Dt(sa,e,!1)}function Qi(e){return Dt(pn|Pr,e,!0)}function ha(e,t=0){return Dt(oa|t,e,!0)}function G(e,t=[],r=[]){ys(t,r,n=>{Dt(oa,()=>e(...n.map(o)),!0)})}function Rt(e,t=0){var r=Dt(ar|t,e,!0);return r}function Xe(e,t=!0){return Dt(Mt|Pr,e,!0,t)}function Ns(e){var t=e.teardown;if(t!==null){const r=cr,n=Ee;Aa(!0),ot(null);try{t.call(null)}finally{Aa(r),ot(n)}}}function Cs(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&wn(()=>{a.abort(qr)});var n=r.next;(r.f&sr)!==0?r.parent=null:Fe(r,t),r=n}}function Hi(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Mt)===0&&Fe(t),t=r}}function Fe(e,t=!0){var r=!1;(t||(e.f&Ko)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Ki(e.nodes_start,e.nodes_end),r=!0),Cs(e,t&&!r),fn(e,0),at(e,or);var n=e.transitions;if(n!==null)for(const s of n)s.stop();Ns(e);var a=e.parent;a!==null&&a.first!==null&&Ms(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Ki(e,t){for(;e!==null;){var r=e===t?null:Jr(e);e.remove(),e=r}}function Ms(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Tt(e,t){var r=[];pa(e,r,!0),Is(r,()=>{Fe(e),t&&t()})}function Is(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function pa(e,t,r){if((e.f&gt)===0){if(e.f^=gt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,s=(n.f&ir)!==0||(n.f&Mt)!==0;pa(n,t,s?r:!1),n=a}}}function Sn(e){Ds(e,!0)}function Ds(e,t){if((e.f&gt)!==0){e.f^=gt,(e.f&tt)===0&&(at(e,dt),rr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&ir)!==0||(r.f&Mt)!==0;Ds(r,a?t:!1),r=n}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}let pr=!1;function ka(e){pr=e}let cr=!1;function Aa(e){cr=e}let Ee=null,_t=!1;function ot(e){Ee=e}let Pe=null;function $t(e){Pe=e}let Nt=null;function Rs(e){Ee!==null&&(Nt===null?Nt=[e]:Nt.push(e))}let nt=null,ut=0,vt=null;function Ji(e){vt=e}let Os=1,Vr=0,Ct=Vr;function Ta(e){Ct=e}let jt=!1;function qs(){return++Os}function Pn(e){var t=e.f;if((t&dt)!==0)return!0;if((t&Qt)!==0){var r=e.deps,n=(t&pt)!==0;if(r!==null){var a,s,i=(t&dn)!==0,l=n&&Pe!==null&&!jt,c=r.length;if((i||l)&&(Pe===null||(Pe.f&or)===0)){var f=e,v=f.parent;for(a=0;a<c;a++)s=r[a],(i||!s?.reactions?.includes(f))&&(s.reactions??=[]).push(f);i&&(f.f^=dn),l&&v!==null&&(v.f&pt)===0&&(f.f^=pt)}for(a=0;a<c;a++)if(s=r[a],Pn(s)&&Ps(s),s.wv>e.wv)return!0}(!n||Pe!==null&&!jt)&&at(e,tt)}return!1}function js(e,t,r=!0){var n=e.reactions;if(n!==null&&!Nt?.includes(e))for(var a=0;a<n.length;a++){var s=n[a];(s.f&lt)!==0?js(s,t,!1):t===s&&(r?at(s,dt):(s.f&tt)!==0&&at(s,Qt),rr(s))}}function Bs(e){var t=nt,r=ut,n=vt,a=Ee,s=jt,i=Nt,l=Ve,c=_t,f=Ct,v=e.f;nt=null,ut=0,vt=null,jt=(v&pt)!==0&&(_t||!pr||Ee===null),Ee=(v&(Mt|sr))===0?e:null,Nt=null,mr(e.ctx),_t=!1,Ct=++Vr,e.ac!==null&&(wn(()=>{e.ac.abort(qr)}),e.ac=null);try{e.f|=zn;var _=e.fn,p=_(),m=e.deps;if(nt!==null){var g;if(fn(e,ut),m!==null&&ut>0)for(m.length=ut+nt.length,g=0;g<nt.length;g++)m[ut+g]=nt[g];else e.deps=m=nt;if(!jt||(v&lt)!==0&&e.reactions!==null)for(g=ut;g<m.length;g++)(m[g].reactions??=[]).push(e)}else m!==null&&ut<m.length&&(fn(e,ut),m.length=ut);if(Er()&&vt!==null&&!_t&&m!==null&&(e.f&(lt|Qt|dt))===0)for(g=0;g<vt.length;g++)js(vt[g],e);return a!==null&&a!==e&&(Vr++,vt!==null&&(n===null?n=vt:n.push(...vt))),(e.f&Xt)!==0&&(e.f^=Xt),p}catch(x){return ms(x)}finally{e.f^=zn,nt=t,ut=r,vt=n,Ee=a,jt=s,Nt=i,mr(l),_t=c,Ct=f}}function Yi(e,t){let r=t.reactions;if(r!==null){var n=Uo.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&lt)!==0&&(nt===null||!nt.includes(t))&&(at(t,Qt),(t.f&(pt|dn))===0&&(t.f^=dn),Ss(t),fn(t,0))}function fn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Yi(e,r[n])}function Ur(e){var t=e.f;if((t&or)===0){at(e,tt);var r=Pe,n=pr;Pe=e,pr=!0;try{(t&ar)!==0?Hi(e):Cs(e),Ns(e);var a=Bs(e);e.teardown=typeof a=="function"?a:null,e.wv=Os;var s;ss&&Pi&&(e.f&dt)!==0&&e.deps}finally{pr=n,Pe=r}}}async function Zi(){await Promise.resolve(),ki()}function o(e){var t=e.f,r=(t&lt)!==0;if(Ee!==null&&!_t){var n=Pe!==null&&(Pe.f&or)!==0;if(!n&&!Nt?.includes(e)){var a=Ee.deps;if((Ee.f&zn)!==0)e.rv<Vr&&(e.rv=Vr,nt===null&&a!==null&&a[ut]===e?ut++:nt===null?nt=[e]:(!jt||!nt.includes(e))&&nt.push(e));else{(Ee.deps??=[]).push(e);var s=e.reactions;s===null?e.reactions=[Ee]:s.includes(Ee)||s.push(Ee)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&pt)===0&&(i.f^=pt)}if(cr){if(Lt.has(e))return Lt.get(e);if(r){i=e;var c=i.v;return((i.f&tt)===0&&i.reactions!==null||Ls(i))&&(c=da(i)),Lt.set(i,c),c}}else r&&(i=e,Pn(i)&&Ps(i));if((e.f&Xt)!==0)throw e.v;return e.v}function Ls(e){if(e.v===Ke)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Lt.has(t)||(t.f&lt)!==0&&Ls(t))return!0;return!1}function $r(e){var t=_t;try{return _t=!0,e()}finally{_t=t}}const Xi=-7169;function at(e,t){e.f=e.f&Xi|t}function Fi(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const el=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function tl(e){return el.includes(e)}const rl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function nl(e){return e=e.toLowerCase(),rl[e]??e}const al=["touchstart","touchmove"];function sl(e){return al.includes(e)}const zs=new Set,Wn=new Set;function Vs(e,t,r,n={}){function a(s){if(n.capture||Rr.call(t,s),!s.cancelBubble)return wn(()=>r?.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?tr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Gn(e,t,r,n={}){var a=Vs(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function Je(e){for(var t=0;t<e.length;t++)zs.add(e[t]);for(var r of Wn)r(e)}let Na=null;function Rr(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],s=a[0]||e.target;Na=e;var i=0,l=Na===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(s=a[i]||e.target,s!==t){Ln(e,"currentTarget",{configurable:!0,get(){return s||r}});var v=Ee,_=Pe;ot(null),$t(null);try{for(var p,m=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var x=s["__"+n];if(x!=null&&(!s.disabled||e.target===s))if(hn(x)){var[b,...y]=x;b.apply(s,[e,...y])}else x.call(s,e)}catch(P){p?m.push(P):p=P}if(e.cancelBubble||g===t||g===null)break;s=g}if(p){for(let P of m)queueMicrotask(()=>{throw P});throw p}}finally{e.__root=t,delete e.currentTarget,ot(v),$t(_)}}}function Us(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function yr(e,t){var r=Pe;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function E(e,t){var r=(t&hi)!==0,n=(t&pi)!==0,a,s=!e.startsWith("<!>");return()=>{a===void 0&&(a=Us(s?e:"<!>"+e),r||(a=br(a)));var i=n||Es?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=br(i),c=i.lastChild;yr(l,c)}else yr(i,i);return i}}function ol(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var i=Us(a),l=br(i);s=br(l)}var c=s.cloneNode(!0);return yr(c,c),c}}function il(e,t){return ol(e,t,"svg")}function mt(e=""){{var t=It(e+"");return yr(t,t),t}}function z(){var e=document.createDocumentFragment(),t=document.createComment(""),r=It();return e.append(t,r),yr(t,r),e}function h(e,t){e!==null&&e.before(t)}function L(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function ll(e,t){return cl(e,t)}const fr=new Map;function cl(e,{target:t,anchor:r,props:n={},events:a,context:s,intro:i=!0}){ji();var l=new Set,c=_=>{for(var p=0;p<_.length;p++){var m=_[p];if(!l.has(m)){l.add(m);var g=sl(m);t.addEventListener(m,Rr,{passive:g});var x=fr.get(m);x===void 0?(document.addEventListener(m,Rr,{passive:g}),fr.set(m,1)):fr.set(m,x+1)}}};c(aa(zs)),Wn.add(c);var f=void 0,v=Gi(()=>{var _=r??t.appendChild(It());return Ni(_,{pending:()=>{}},p=>{if(s){V({});var m=Ve;m.c=s}a&&(n.$$events=a),f=e(p,n)||{},s&&U()}),()=>{for(var p of l){t.removeEventListener(p,Rr);var m=fr.get(p);--m===0?(document.removeEventListener(p,Rr),fr.delete(p)):fr.set(p,m)}Wn.delete(c),_!==r&&_.parentNode?.removeChild(_)}});return ul.set(f,v),f}let ul=new WeakMap;function M(e,t,r=!1){var n=e,a=null,s=null,i=Ke,l=r?ir:0,c=!1;const f=(m,g=!0)=>{c=!0,p(g,m)};var v=null;function _(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var m=i?a:s,g=i?s:a;m&&Sn(m),g&&Tt(g,()=>{i?s=null:a=null})}const p=(m,g)=>{if(i!==(i=m)){var x=yn(),b=n;if(x&&(v=document.createDocumentFragment(),v.append(b=It())),i?a??=g&&Xe(()=>g(b)):s??=g&&Xe(()=>g(b)),x){var y=De,P=i?a:s,w=i?s:a;P&&y.skipped_effects.delete(P),w&&y.skipped_effects.add(w),y.add_callback(_)}else _()}};Rt(()=>{c=!1,t(f),c||p(null,null)},l)}function dl(e,t,r){var n=e,a=Ke,s,i,l=null,c=Er()?Si:vs;function f(){s&&Tt(s),l!==null&&(l.lastChild.remove(),n.before(l),l=null),s=i}Rt(()=>{if(c(a,a=t())){var v=n,_=yn();_&&(l=document.createDocumentFragment(),l.append(v=It())),i=Xe(()=>r(v)),_?De.add_callback(f):f()}})}function Qn(e,t){return t}function fl(e,t,r){for(var n=e.items,a=[],s=t.length,i=0;i<s;i++)pa(t[i].e,a,!0);var l=s>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;Bi(c),c.append(r),n.clear(),Pt(e,t[0].prev,t[s-1].next)}Is(a,()=>{for(var f=0;f<s;f++){var v=t[f];l||(n.delete(v.k),Pt(e,v.prev,v.next)),Fe(v.e,!l)}})}function it(e,t,r,n,a,s=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&ds)!==0;if(c){var f=e;i=f.appendChild(It())}var v=null,_=!1,p=new Map,m=ua(()=>{var y=r();return hn(y)?y:y==null?[]:aa(y)}),g,x;function b(){vl(x,g,l,p,i,a,t,n,r),s!==null&&(g.length===0?v?Sn(v):v=Xe(()=>s(i)):v!==null&&Tt(v,()=>{v=null}))}Rt(()=>{x??=Pe,g=o(m);var y=g.length;if(!(_&&y===0)){_=y===0;var P,w,S,k;if(yn()){var A=new Set,C=De;for(w=0;w<y;w+=1){S=g[w],k=n(S,w);var R=l.items.get(k)??p.get(k);R?(t&(mn|_n))!==0&&Ws(R,S,w,t):(P=Gs(null,l,null,null,S,k,w,a,t,r,!0),p.set(k,P)),A.add(k)}for(const[F,j]of l.items)A.has(F)||C.skipped_effects.add(j.e);C.add_callback(b)}else b();o(m)}})}function vl(e,t,r,n,a,s,i,l,c){var f=(i&ii)!==0,v=(i&(mn|_n))!==0,_=t.length,p=r.items,m=r.first,g=m,x,b=null,y,P=[],w=[],S,k,A,C;if(f)for(C=0;C<_;C+=1)S=t[C],k=l(S,C),A=p.get(k),A!==void 0&&(A.a?.measure(),(y??=new Set).add(A));for(C=0;C<_;C+=1){if(S=t[C],k=l(S,C),A=p.get(k),A===void 0){var R=n.get(k);if(R!==void 0){n.delete(k),p.set(k,R);var F=b?b.next:g;Pt(r,b,R),Pt(r,R,F),In(R,F,a),b=R}else{var j=g?g.e.nodes_start:a;b=Gs(j,r,b,b===null?r.first:b.next,S,k,C,s,i,c)}p.set(k,b),P=[],w=[],g=b.next;continue}if(v&&Ws(A,S,C,i),(A.e.f&gt)!==0&&(Sn(A.e),f&&(A.a?.unfix(),(y??=new Set).delete(A))),A!==g){if(x!==void 0&&x.has(A)){if(P.length<w.length){var W=w[0],re;b=W.prev;var te=P[0],D=P[P.length-1];for(re=0;re<P.length;re+=1)In(P[re],W,a);for(re=0;re<w.length;re+=1)x.delete(w[re]);Pt(r,te.prev,D.next),Pt(r,b,te),Pt(r,D,W),g=W,b=D,C-=1,P=[],w=[]}else x.delete(A),In(A,g,a),Pt(r,A.prev,A.next),Pt(r,A,b===null?r.first:b.next),Pt(r,b,A),b=A;continue}for(P=[],w=[];g!==null&&g.k!==k;)(g.e.f&gt)===0&&(x??=new Set).add(g),w.push(g),g=g.next;if(g===null)continue;A=g}P.push(A),b=A,g=A.next}if(g!==null||x!==void 0){for(var I=x===void 0?[]:aa(x);g!==null;)(g.e.f&gt)===0&&I.push(g),g=g.next;var K=I.length;if(K>0){var ne=(i&ds)!==0&&_===0?a:null;if(f){for(C=0;C<K;C+=1)I[C].a?.measure();for(C=0;C<K;C+=1)I[C].a?.fix()}fl(r,I,ne)}}f&&tr(()=>{if(y!==void 0)for(A of y)A.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var N of n.values())Fe(N.e);n.clear()}function Ws(e,t,r,n){(n&mn)!==0&&gr(e.v,t),(n&_n)!==0?gr(e.i,r):e.i=r}function Gs(e,t,r,n,a,s,i,l,c,f,v){var _=(c&mn)!==0,p=(c&li)===0,m=_?p?Oi(a,!1,!1):Vt(a):a,g=(c&_n)===0?i:Vt(i),x={i:g,v:m,k:s,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=It())}return x.e=Xe(()=>l(e,m,g,f),wi),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?v||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function In(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,s=e.e.nodes_start;s!==null&&s!==n;){var i=Jr(s);a.before(s),s=i}}function Pt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function se(e,t,...r){var n=e,a=ae,s;Rt(()=>{a!==(a=t())&&(s&&(Fe(s),s=null),s=Xe(()=>a(n,...r)))},ir)}function er(e,t,r){var n=e,a,s,i=null,l=null;function c(){s&&(Tt(s),s=null),i&&(i.lastChild.remove(),n.before(i),i=null),s=l,l=null}Rt(()=>{if(a!==(a=t())){var f=yn();if(a){var v=n;f&&(i=document.createDocumentFragment(),i.append(v=It()),s&&De.skipped_effects.add(s)),l=Xe(()=>r(v,a))}f?De.add_callback(c):c()}},ir)}function hl(e,t,r,n,a,s){var i,l,c=null,f=e,v;Rt(()=>{const _=t()||null;var p=_i;_!==i&&(v&&(_===null?Tt(v,()=>{v=null,l=null}):_===l?Sn(v):Fe(v)),_&&_!==l&&(v=Xe(()=>{if(c=document.createElementNS(p,_),yr(c,c),n){var m=c.appendChild(It());n(c,m)}Pe.nodes_end=c,f.before(c)})),i=_,i&&(l=i))},ir)}function pl(e,t){var r=void 0,n;Rt(()=>{r!==(r=t())&&(n&&(Fe(n),n=null),r&&(n=Xe(()=>{va(()=>r(e))})))})}function Qs(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Qs(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function ml(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Qs(e))&&(n&&(n+=" "),n+=t);return n}function _l(e){return typeof e=="object"?ml(e):e??""}const Ca=[...` 	
\r\f \v\uFEFF`];function gl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var s=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+s;(i===0||Ca.includes(n[i-1]))&&(l===n.length||Ca.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Ma(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var s=e[a];s!=null&&s!==""&&(n+=" "+a+": "+s+r)}return n}function Dn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function bl(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Dn)),a&&c.push(...Object.keys(a).map(Dn));var f=0,v=-1;const x=e.length;for(var _=0;_<x;_++){var p=e[_];if(l?p==="/"&&e[_-1]==="*"&&(l=!1):s?s===p&&(s=!1):p==="/"&&e[_+1]==="*"?l=!0:p==='"'||p==="'"?s=p:p==="("?i++:p===")"&&i--,!l&&s===!1&&i===0){if(p===":"&&v===-1)v=_;else if(p===";"||_===x-1){if(v!==-1){var m=Dn(e.substring(f,v).trim());if(!c.includes(m)){p!==";"&&_++;var g=e.substring(f,_).trim();r+=" "+g+";"}}f=_+1,v=-1}}}}return n&&(r+=Ma(n)),a&&(r+=Ma(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function $e(e,t,r,n,a,s){var i=e.__className;if(i!==r||i===void 0){var l=gl(r,n,s);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(s&&a!==s)for(var c in s){var f=!!s[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return s}function Rn(e,t={},r,n){for(var a in r){var s=r[a];t[a]!==s&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,s,n))}}function Hs(e,t,r,n){var a=e.__style;if(a!==t){var s=bl(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else n&&(Array.isArray(n)?(Rn(e,r?.[0],n[0]),Rn(e,r?.[1],n[1],"important")):Rn(e,r,n));return n}function vn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!hn(t))return bi();for(var n of e.options)n.selected=t.includes(Br(n));return}for(n of e.options){var a=Br(n);if(qi(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Ks(e){var t=new MutationObserver(()=>{vn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),As(()=>{t.disconnect()})}function Yt(e,t,r=t){var n=!0;fa(e,"change",a=>{var s=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(s),Br);else{var l=e.querySelector(s)??e.querySelector("option:not([disabled])");i=l&&Br(l)}r(i)}),va(()=>{var a=t();if(vn(e,a,n),n&&a===void 0){var s=e.querySelector(":checked");s!==null&&(a=Br(s),r(a))}e.__value=a,n=!1}),Ks(e)}function Br(e){return"__value"in e?e.__value:e.value}const Ir=Symbol("class"),Dr=Symbol("style"),Js=Symbol("is custom element"),Ys=Symbol("is html");function yl(e,t){var r=xn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function On(e,t){var r=xn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function wl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ut(e,t,r,n){var a=xn(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Yo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Zs(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Sl(e,t,r,n,a=!1,s=!1){var i=xn(e),l=i[Js],c=!i[Ys],f=t||{},v=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=_l(r.class):r[Ir]&&(r.class=null),r[Dr]&&(r.style??=null);var p=Zs(e);for(const S in r){let k=r[S];if(v&&S==="value"&&k==null){e.value=e.__value="",f[S]=k;continue}if(S==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";$e(e,m,k,n,t?.[Ir],r[Ir]),f[S]=k,f[Ir]=r[Ir];continue}if(S==="style"){Hs(e,k,t?.[Dr],r[Dr]),f[S]=k,f[Dr]=r[Dr];continue}var g=f[S];if(!(k===g&&!(k===void 0&&e.hasAttribute(S)))){f[S]=k;var x=S[0]+S[1];if(x!=="$$")if(x==="on"){const A={},C="$$"+S;let R=S.slice(2);var b=tl(R);if(Fi(R)&&(R=R.slice(0,-7),A.capture=!0),!b&&g){if(k!=null)continue;e.removeEventListener(R,f[C],A),f[C]=null}if(k!=null)if(b)e[`__${R}`]=k,Je([R]);else{let F=function(j){f[S].call(this,j)};var w=F;f[C]=Vs(R,e,F,A)}else b&&(e[`__${R}`]=void 0)}else if(S==="style")Ut(e,S,k);else if(S==="autofocus")Li(e,!!k);else if(!l&&(S==="__value"||S==="value"&&k!=null))e.value=e.__value=k;else if(S==="selected"&&v)wl(e,k);else{var y=S;c||(y=nl(y));var P=y==="defaultValue"||y==="defaultChecked";if(k==null&&!l&&!P)if(i[S]=null,y==="value"||y==="checked"){let A=e;const C=t===void 0;if(y==="value"){let R=A.defaultValue;A.removeAttribute(y),A.defaultValue=R,A.value=A.__value=C?R:null}else{let R=A.defaultChecked;A.removeAttribute(y),A.defaultChecked=R,A.checked=C?R:!1}}else e.removeAttribute(S);else P||p.includes(y)&&(l||typeof k!="string")?(e[y]=k,y in i&&(i[y]=Ke)):typeof k!="function"&&Ut(e,y,k)}}}return f}function Ia(e,t,r=[],n=[],a,s=!1,i=!1){ys(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",_=!1;if(Rt(()=>{var m=t(...l.map(o)),g=Sl(e,c,m,a,s,i);_&&v&&"value"in m&&vn(e,m.value);for(let b of Object.getOwnPropertySymbols(f))m[b]||Fe(f[b]);for(let b of Object.getOwnPropertySymbols(m)){var x=m[b];b.description===gi&&(!c||x!==c[b])&&(f[b]&&Fe(f[b]),f[b]=Xe(()=>pl(e,()=>x))),g[b]=x}c=g}),v){var p=e;va(()=>{vn(p,c.value,!0),Ks(p)})}_=!0})}function xn(e){return e.__attributes??={[Js]:e.nodeName.includes("-"),[Ys]:e.namespaceURI===mi}}var Da=new Map;function Zs(e){var t=e.getAttribute("is")||e.nodeName,r=Da.get(t);if(r)return r;Da.set(t,r=[]);for(var n,a=e,s=Element.prototype;s!==a;){n=Wo(a);for(var i in n)n[i].set&&r.push(i);a=os(a)}return r}function Me(e,t,r=t){var n=new WeakSet;fa(e,"input",async a=>{var s=a?e.defaultValue:e.value;if(s=qn(e)?jn(s):s,r(s),De!==null&&n.add(De),await Zi(),s!==(s=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=s??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),$r(t)==null&&e.value&&(r(qn(e)?jn(e.value):e.value),De!==null&&n.add(De)),ha(()=>{var a=t();if(e===document.activeElement){var s=on??De;if(n.has(s))return}qn(e)&&a===jn(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Pl(e,t,r=t){fa(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),$r(t)==null&&r(e.checked),ha(()=>{var n=t();e.checked=!!n})}function qn(e){var t=e.type;return t==="number"||t==="range"}function jn(e){return e===""?null:+e}let an=!1;function xl(e){var t=an;try{return an=!1,[e(),an]}finally{an=t}}const El={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ce(e,t,r){return new Proxy({props:e,exclude:t},El)}const $l={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Mr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Mr(a)&&(a=a());const s=Bt(a,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Mr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Bt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===Ft||t===cs)return!1;for(let r of e.props)if(Mr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Mr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function de(...e){return new Proxy({props:e},$l)}function Ne(e,t,r,n){var a=!xr||(r&ui)!==0,s=(r&fi)!==0,i=(r&vi)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?$r(n):n),l),v;if(s){var _=Ft in e||cs in e;v=Bt(e,t)?.set??(_&&t in e?w=>e[t]=w:void 0)}var p,m=!1;s?[p,m]=xl(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),v&&(a&&ri(),v(p)));var g;if(a?g=()=>{var w=e[t];return w===void 0?f():(c=!0,w)}:g=()=>{var w=e[t];return w!==void 0&&(l=void 0),w===void 0?l:w},a&&(r&di)===0)return g;if(v){var x=e.$$legacy;return(function(w,S){return arguments.length>0?((!a||!S||x||m)&&v(S?g():w),w):g()})}var b=!1,y=((r&ci)!==0?bn:ua)(()=>(b=!1,g()));s&&o(y);var P=Pe;return(function(w,S){if(arguments.length>0){const k=S?o(y):a&&s?Ce(w):w;return $(y,k),b=!0,l!==void 0&&(l=k),w}return cr&&b||(P.f&or)!==0?y.v:o(y)})}function Xs(e){Ve===null&&us(),xr&&Ve.l!==null?Al(Ve).m.push(e):lr(()=>{const t=$r(e);if(typeof t=="function")return t})}function kl(e){Ve===null&&us(),Xs(()=>()=>$r(e))}function Al(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Tl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Tl);const Nl="modulepreload",Cl=function(e){return"/"+e},Ra={},Ml=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(_=>Promise.resolve(_).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(v=>{if(v=Cl(v),v in Ra)return;Ra[v]=!0;const _=v.endsWith(".css"),p=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${p}`))return;const m=document.createElement("link");if(m.rel=_?"stylesheet":Nl,_||(m.as="script"),m.crossOrigin="",m.href=v,c&&m.setAttribute("nonce",c),document.head.appendChild(m),_)return new Promise((g,x)=>{m.addEventListener("load",g),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${v}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};class Il extends Map{#e=new Map;#r=H(0);#c=H(0);#u=Ct||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#l(t){return Ct===this.#u?H(t):Vt(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else return o(this.#r),!1}return o(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else{o(this.#r);return}}return o(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),s=super.get(t),i=super.set(t,r),l=this.#r;if(a===void 0)a=this.#l(0),n.set(t,a),$(this.#c,super.size),Et(l);else if(s!==r){Et(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(v=>c.has(v));f&&Et(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),$(this.#c,super.size),$(n,-1),Et(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;$(this.#c,0);for(var r of t.values())$(r,-1);Et(this.#r),t.clear()}}#o(){o(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#l(0);t.set(r,n)}}for([,n]of this.#e)o(n)}keys(){return o(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return o(this.#c),super.size}}class Dl{#e;#r;constructor(t,r){this.#e=t,this.#r=ca(r)}get current(){return this.#r(),this.#e()}}const Rl=/\(.+\)/,Ol=new Set(["all","print","screen","and","or","not","only"]);class Fs extends Dl{constructor(t,r){let n=Rl.test(t)||t.split(/[\s,]+/).some(s=>Ol.has(s.trim()))?t:`(${t})`;const a=window.matchMedia(n);super(()=>a.matches,s=>Gn(a,"change",s))}}const ql=typeof window<"u"?window:void 0;function jl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Bl{#e;#r;constructor(t={}){const{window:r=ql,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=ca(a=>{const s=Gn(r,"focusin",a),i=Gn(r,"focusout",a);return()=>{s(),i()}}))}get current(){return this.#r?.(),this.#e?jl(this.#e):null}}new Bl;function Ll(e){return typeof e=="function"}function zl(e,t){if(Ll(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Vl(e,t){let r=H(null);const n=X(()=>zl(t,250));function a(...s){if(o(r))o(r).timeout&&clearTimeout(o(r).timeout);else{let i,l;const c=new Promise((f,v)=>{i=f,l=v});$(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return o(r).runner=async()=>{if(!o(r))return;const i=o(r);$(r,null);try{i.resolve(await e.apply(this,s))}catch(l){i.reject(l)}},o(r).timeout=setTimeout(o(r).runner,o(n)),o(r).promise}return a.cancel=async()=>{(!o(r)||o(r).timeout===null)&&(await new Promise(s=>setTimeout(s,0)),!o(r)||o(r).timeout===null)||(clearTimeout(o(r).timeout),o(r).reject("Cancelled"),$(r,null))},a.runScheduledNow=async()=>{(!o(r)||!o(r).timeout)&&(await new Promise(s=>setTimeout(s,0)),!o(r)||!o(r).timeout)||(clearTimeout(o(r).timeout),o(r).timeout=null,await o(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!o(r)?.timeout}}),a}function Ul(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),s=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return s.length?Lr(s.flatMap(i=>i.neededConsolidatedForDate)):[]}function Or(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function ln(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Lr(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function cn(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>Zt(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],s=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(a.push({q:v,u:c}),s.push(Zt(v.toString(),c)))});const i=s.length>0?s.join(" et "):"✅ Complet";return{numeric:a,display:i}}function vr(e){return e?.length?e.map(t=>Zt(t.q.toString(),t.u)).join(" et "):"-"}function Zt(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Oa(e){return Or(e)}function ma(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Wl(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([s])=>{const i=new Date(s);return i>=n&&i<=a}).reduce((s,[i,l])=>s+(l.totalAssiettes||0),0)}function Gl(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Ql(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Hl(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function Kl(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return ma(t)}function Jl(e,t,r=""){if(e.status==="cancelled")return!1;const n=e.deliveryDate||e.$createdAt;return!n||n>t||r&&e.$createdAt<r?!1:e.status==="delivered"||e.status==="pending"||e.status==="ordered"&&n<=t}function qa(e,t){let r=[],n="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(r=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],n=e.stockParsed.dateTime);const a=[];if(e.purchases)for(const c of e.purchases)Jl(c,t,n)&&a.push({q:c.quantity,u:c.unit});const s=Yl(e,t),i=[...r,...a],l=ma(i);return Zl(l,s)}function Yl(e,t){if(!e.byDate)return[];const r=[];for(const[n,a]of Object.entries(e.byDate))if(n<=t){const i=a.totalConsolidated;i&&r.push(...i)}return ma(r)}function Zl(e,t){const r=new Map,n=new Map;e.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),t.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const a=[],s=new Set([...r.keys(),...n.keys()]);for(const i of s){const l=r.get(i)||0,c=n.get(i)||0,f=l-c;Math.abs(f)>.001&&a.push({q:f,u:i})}return a}function ja(e){if(!e?.length)return"Équilibré";const t=e.filter(n=>n.q>0),r=e.filter(n=>n.q<0);if(t.length>0&&r.length>0){const n=t.map(s=>Zt(s.q.toString(),s.u)).join(" et "),a=r.map(s=>Zt(Math.abs(s.q).toString(),s.u)).join(" et ");return`${n} disponibles, ${a} manquant${r.length>1?"s":""}`}else return t.length>0?t.map(n=>"+"+Zt(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>Zt(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function Xl(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class T{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}T.equal=(e,t)=>new T("equal",e,t).toString();T.notEqual=(e,t)=>new T("notEqual",e,t).toString();T.lessThan=(e,t)=>new T("lessThan",e,t).toString();T.lessThanEqual=(e,t)=>new T("lessThanEqual",e,t).toString();T.greaterThan=(e,t)=>new T("greaterThan",e,t).toString();T.greaterThanEqual=(e,t)=>new T("greaterThanEqual",e,t).toString();T.isNull=e=>new T("isNull",e).toString();T.isNotNull=e=>new T("isNotNull",e).toString();T.between=(e,t,r)=>new T("between",e,[t,r]).toString();T.startsWith=(e,t)=>new T("startsWith",e,t).toString();T.endsWith=(e,t)=>new T("endsWith",e,t).toString();T.select=e=>new T("select",void 0,e).toString();T.search=(e,t)=>new T("search",e,t).toString();T.orderDesc=e=>new T("orderDesc",e).toString();T.orderAsc=e=>new T("orderAsc",e).toString();T.orderRandom=()=>new T("orderRandom").toString();T.cursorAfter=e=>new T("cursorAfter",void 0,e).toString();T.cursorBefore=e=>new T("cursorBefore",void 0,e).toString();T.limit=e=>new T("limit",void 0,e).toString();T.offset=e=>new T("offset",void 0,e).toString();T.contains=(e,t)=>new T("contains",e,t).toString();T.notContains=(e,t)=>new T("notContains",e,t).toString();T.notSearch=(e,t)=>new T("notSearch",e,t).toString();T.notBetween=(e,t,r)=>new T("notBetween",e,[t,r]).toString();T.notStartsWith=(e,t)=>new T("notStartsWith",e,t).toString();T.notEndsWith=(e,t)=>new T("notEndsWith",e,t).toString();T.createdBefore=e=>new T("createdBefore",void 0,e).toString();T.createdAfter=e=>new T("createdAfter",void 0,e).toString();T.createdBetween=(e,t)=>new T("createdBetween",void 0,[e,t]).toString();T.updatedBefore=e=>new T("updatedBefore",void 0,e).toString();T.updatedAfter=e=>new T("updatedAfter",void 0,e).toString();T.updatedBetween=(e,t)=>new T("updatedBetween",void 0,[e,t]).toString();T.or=e=>new T("or",void 0,e.map(t=>JSON.parse(t))).toString();T.and=e=>new T("and",void 0,e.map(t=>JSON.parse(t))).toString();T.distanceEqual=(e,t,r,n=!0)=>new T("distanceEqual",e,[[t,r,n]]).toString();T.distanceNotEqual=(e,t,r,n=!0)=>new T("distanceNotEqual",e,[[t,r,n]]).toString();T.distanceGreaterThan=(e,t,r,n=!0)=>new T("distanceGreaterThan",e,[[t,r,n]]).toString();T.distanceLessThan=(e,t,r,n=!0)=>new T("distanceLessThan",e,[[t,r,n]]).toString();T.intersects=(e,t)=>new T("intersects",e,[t]).toString();T.notIntersects=(e,t)=>new T("notIntersects",e,[t]).toString();T.crosses=(e,t)=>new T("crosses",e,[t]).toString();T.notCrosses=(e,t)=>new T("notCrosses",e,[t]).toString();T.overlaps=(e,t)=>new T("overlaps",e,[t]).toString();T.notOverlaps=(e,t)=>new T("notOverlaps",e,[t]).toString();T.touches=(e,t)=>new T("touches",e,[t]).toString();T.notTouches=(e,t)=>new T("notTouches",e,[t]).toString();var eo,to;class wr{static custom(t){return t}static unique(t=7){const r=Xl(wr,eo,"m",to).call(wr);let n="";for(let a=0;a<t;a++){const s=Math.floor(Math.random()*16).toString(16);n+=s}return r+n}}eo=wr,to=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Ba;(function(e){e.Totp="totp"})(Ba||(Ba={}));var La;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(La||(La={}));var za;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(za||(za={}));var Va;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Va||(Va={}));var Ua;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ua||(Ua={}));var Wa;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Wa||(Wa={}));var Ga;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Ga||(Ga={}));var Qa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Qa||(Qa={}));var Ha;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Ha||(Ha={}));class Fl{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class ro{constructor(t){this.generateIdentifier=t,this.kv=new Fl}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class ec extends ro{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function tc(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function rc(e,t){const r=tc(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const s=n[a];if(t(s))return s}}function Sr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function un(e,t){return e.indexOf(t)!==-1}function Ka(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class nc{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return rc(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const ac=e=>Object.prototype.toString.call(e).slice(8,-1),no=e=>typeof e>"u",sc=e=>e===null,Wr=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Hn=e=>Wr(e)&&Object.keys(e).length===0,Wt=e=>Array.isArray(e),oc=e=>typeof e=="string",ic=e=>typeof e=="number"&&!isNaN(e),lc=e=>typeof e=="boolean",cc=e=>e instanceof RegExp,Gr=e=>e instanceof Map,Qr=e=>e instanceof Set,ao=e=>ac(e)==="Symbol",uc=e=>e instanceof Date&&!isNaN(e.valueOf()),dc=e=>e instanceof Error,Ja=e=>typeof e=="number"&&isNaN(e),fc=e=>lc(e)||sc(e)||no(e)||ic(e)||oc(e)||ao(e),vc=e=>typeof e=="bigint",hc=e=>e===1/0||e===-1/0,pc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),mc=e=>e instanceof URL,so=e=>e.replace(/\./g,"\\."),Bn=e=>e.map(String).map(so).join("."),zr=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let s=e.charAt(a);if(s==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(s==="."){t.push(r),r="";continue}r+=s}const n=r;return t.push(n),t};function St(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const oo=[St(no,"undefined",()=>null,()=>{}),St(vc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),St(uc,"Date",e=>e.toISOString(),e=>new Date(e)),St(dc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),St(cc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),St(Qr,"set",e=>[...e.values()],e=>new Set(e)),St(Gr,"map",e=>[...e.entries()],e=>new Map(e)),St(e=>Ja(e)||hc(e),"number",e=>Ja(e)?"NaN":e>0?"Infinity":"-Infinity",Number),St(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),St(mc,"URL",e=>e.toString(),e=>new URL(e))];function En(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const io=En((e,t)=>ao(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),_c=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),lo=En(pc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=_c[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function co(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const uo=En(co,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),fo=En((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),gc=[uo,io,fo,lo],Ya=(e,t)=>{const r=Ka(gc,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ka(oo,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},vo={};oo.forEach(e=>{vo[e.annotation]=e});const bc=(e,t,r)=>{if(Wt(t))switch(t[0]){case"symbol":return io.untransform(e,t,r);case"class":return uo.untransform(e,t,r);case"custom":return fo.untransform(e,t,r);case"typed-array":return lo.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=vo[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},hr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function ho(e){if(un(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(un(e,"prototype"))throw new Error("prototype is not allowed as a property");if(un(e,"constructor"))throw new Error("constructor is not allowed as a property")}const yc=(e,t)=>{ho(t);for(let r=0;r<t.length;r++){const n=t[r];if(Qr(e))e=hr(e,+n);else if(Gr(e)){const a=+n,s=+t[++r]==0?"key":"value",i=hr(e,a);switch(s){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Kn=(e,t,r)=>{if(ho(t),t.length===0)return r(e);let n=e;for(let s=0;s<t.length-1;s++){const i=t[s];if(Wt(n)){const l=+i;n=n[l]}else if(Wr(n))n=n[i];else if(Qr(n)){const l=+i;n=hr(n,l)}else if(Gr(n)){if(s===t.length-2)break;const c=+i,f=+t[++s]==0?"key":"value",v=hr(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const a=t[t.length-1];if(Wt(n)?n[+a]=r(n[+a]):Wr(n)&&(n[a]=r(n[a])),Qr(n)){const s=hr(n,+a),i=r(s);s!==i&&(n.delete(s),n.add(i))}if(Gr(n)){const s=+t[t.length-2],i=hr(n,s);switch(+a==0?"key":"value"){case"key":{const c=r(i);n.set(c,n.get(i)),c!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Jn(e,t,r=[]){if(!e)return;if(!Wt(e)){Sr(e,(s,i)=>Jn(s,t,[...r,...zr(i)]));return}const[n,a]=e;a&&Sr(a,(s,i)=>{Jn(s,t,[...r,...zr(i)])}),t(n,r)}function wc(e,t,r){return Jn(t,(n,a)=>{e=Kn(e,a,s=>bc(s,n,r))}),e}function Sc(e,t){function r(n,a){const s=yc(e,zr(a));n.map(zr).forEach(i=>{e=Kn(e,i,()=>s)})}if(Wt(t)){const[n,a]=t;n.forEach(s=>{e=Kn(e,zr(s),()=>e)}),a&&Sr(a,r)}else Sr(t,r);return e}const Pc=(e,t)=>Wr(e)||Wt(e)||Gr(e)||Qr(e)||co(e,t);function xc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Ec(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[s,...i]=a;s.length===0?n=i.map(Bn):r[Bn(s)]=i.map(Bn)}),n?Hn(r)?[n]:[n,r]:Hn(r)?void 0:r}const po=(e,t,r,n,a=[],s=[],i=new Map)=>{const l=fc(e);if(!l){xc(e,a,t);const m=i.get(e);if(m)return n?{transformedValue:null}:m}if(!Pc(e,r)){const m=Ya(e,r),g=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return l||i.set(e,g),g}if(un(s,e))return{transformedValue:null};const c=Ya(e,r),f=c?.value??e,v=Wt(f)?[]:{},_={};Sr(f,(m,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const x=po(m,t,r,n,[...a,g],[...s,e],i);v[g]=x.transformedValue,Wt(x.annotations)?_[g]=x.annotations:Wr(x.annotations)&&Sr(x.annotations,(b,y)=>{_[so(g)+"."+y]=b})});const p=Hn(_)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,_]:_};return l||i.set(e,p),p};function mo(e){return Object.prototype.toString.call(e).slice(8,-1)}function Za(e){return mo(e)==="Array"}function $c(e){if(mo(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function kc(e,t,r,n,a){const s={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";s==="enumerable"&&(e[t]=r),a&&s==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Yn(e,t={}){if(Za(e))return e.map(a=>Yn(a,t));if(!$c(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,s)=>{if(Za(t.props)&&!t.props.includes(s))return a;const i=e[s],l=Yn(i,t);return kc(a,s,l,e,t.nonenumerable),a},{})}class qe{constructor({dedupe:t=!1}={}){this.classRegistry=new ec,this.symbolRegistry=new ro(r=>r.description??""),this.customTransformerRegistry=new nc,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=po(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const s=Ec(r,this.dedupe);return s&&(a.meta={...a.meta,referentialEqualities:s}),a}deserialize(t){const{json:r,meta:n}=t;let a=Yn(r);return n?.values&&(a=wc(a,n.values,this)),n?.referentialEqualities&&(a=Sc(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}qe.defaultInstance=new qe;qe.serialize=qe.defaultInstance.serialize.bind(qe.defaultInstance);qe.deserialize=qe.defaultInstance.deserialize.bind(qe.defaultInstance);qe.stringify=qe.defaultInstance.stringify.bind(qe.defaultInstance);qe.parse=qe.defaultInstance.parse.bind(qe.defaultInstance);qe.registerClass=qe.defaultInstance.registerClass.bind(qe.defaultInstance);qe.registerSymbol=qe.defaultInstance.registerSymbol.bind(qe.defaultInstance);qe.registerCustom=qe.defaultInstance.registerCustom.bind(qe.defaultInstance);qe.allowErrorProps=qe.defaultInstance.allowErrorProps.bind(qe.defaultInstance);function _o(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function yt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Ac(e,t,r=100){try{const{databases:n,config:a}=await yt(),s=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[T.greaterThan("$updatedAt",t),T.equal("mainId",e),T.limit(r),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${s.documents.length} purchases modifiés chargés`),s.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function go(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:s}=await yt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,[T.equal("mainId",e),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),T.limit(n)])).documents;const i=await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,[T.greaterThan("$updatedAt",r),T.equal("mainId",e),T.limit(n),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const s=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${s}`)}}async function nr(e,t){try{const{databases:r,config:n}=await yt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function qt(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=_o(n,t),{databases:s,config:i}=await yt(),l=await s.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function bo(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await nr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function yo(e,t){return nr(e,{who:t})}async function Zn(e,t){return nr(e,{stockReel:t})}async function wo(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const a={};return t.stockReel!==void 0&&(a.stockReel=t.stockReel),t.who!==void 0&&(a.who=t.who),t.storeInfo!==void 0&&(a.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await nr(e,a)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await qt(e,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function So(e){try{const{databases:t,config:r}=await yt(),s=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:s.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,wr.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Po(e,t){try{const{databases:r,config:n}=await yt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),s={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,s);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,s),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function xo(e){try{const{databases:t,config:r}=await yt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Eo(e){if(!e?.length)return[];try{const{databases:t,config:r}=await yt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[T.equal("$id",e),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function $o(e,t={}){let r=null;const n=s=>{const{events:i,payload:l}=s;if(!l)return;const c=i.some(m=>m.includes("products.")),f=i.some(m=>m.includes("purchases.")),v=i.some(m=>m.includes(".create")),_=i.some(m=>m.includes(".update")),p=i.some(m=>m.includes(".delete"));if(c){const m=l;v&&t.onProductCreate?t.onProductCreate(m):_&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(f){const m=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(m):_&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:s=>{console.error("[Appwrite Interactions] Erreur realtime:",s),t.onError?.(s)}}))}catch(s){console.error("[Appwrite Interactions] Impossible de configurer realtime:",s),t.onError?.(s)}})(),()=>{r&&(r(),r=null)}}async function ko(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await yt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Ao(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await yt(),s=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function _a(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const s=JSON.parse(a.responseBody);return s.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${s.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",s.error),s}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function To(e,t,r,n){return _a({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function No(e,t,r,n="replace"){return _a({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function Co(e,t,r,n={}){try{const{databases:a,config:s}=await yt(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const v of r){const _={products:[t],mainId:e,quantity:v.q,unit:v.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await a.createDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,wr.unique(),_);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const s=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${s}`)}}const Tc=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:_a,batchUpdateStore:To,batchUpdateWho:No,createMainDocument:Ao,createPurchase:So,createQuickValidationPurchases:Co,deletePurchase:xo,enrichedProductToAppwriteProduct:_o,loadMainEventData:ko,loadPurchasesListByIds:Eo,loadUpdatedPurchases:Ac,subscribeToRealtime:$o,syncProductsWithPurchases:go,updateProduct:nr,updateProductBatch:wo,updateProductStock:Zn,updateProductStore:bo,updateProductWho:yo,updatePurchase:Po,upsertProduct:qt},Symbol.toStringTag,{value:"Module"}));async function Nc(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Cc(e,t){const r=Kl(e.byDate),n=Lr(ln([])),{numeric:a,display:s}=cn(r,n);return{$id:`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:vr(r),displayTotalPurchases:"-",displayMissingQuantity:s,totalNeededOverrideParsed:null}}function Mc(e,t){return e.map(r=>Cc(r,t))}class Ic{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";METADATA_KEY="cache-metadata";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=a=>{const s=a.target.result;s.objectStoreNames.contains(this.PRODUCTS_STORE)||(s.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),s.objectStoreNames.contains(this.METADATA_STORE)||(s.createObjectStore(this.METADATA_STORE),console.log("[IDBCache] Object store 'metadata' créé"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const s=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();s.onsuccess=()=>{const i=new Map;s.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},s.onerror=()=>r(s.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const s=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).get(this.METADATA_KEY);s.onsuccess=()=>{const i=s.result||{lastSync:null,allDates:[]};console.log(`[IDBCache] Metadata chargée: lastSync=${i.lastSync}, dates=${i.allDates?.length||0}`),t(i)},s.onerror=()=>r(s.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),s=a.objectStore(this.PRODUCTS_STORE);s.clear(),t.forEach(i=>{s.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put(t,this.METADATA_KEY);i.onsuccess=()=>{console.log("[IDBCache] Metadata sauvegardée"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Dc(e){const t=new Ic(e);return await t.open(),t}const Xa=1e3;class Rc{#e=new Il;#r=H(null);#c=H(!1);#u=H(!1);#l=H(null);#o=H(!1);#i=H(!1);#a=H(null);#s=H(Ce([]));#f=H(Ce({start:null,end:null}));get dateRange(){return o(this.#f)}set dateRange(t){$(this.#f,t,!0)}#n=null;#d=null;#v=H(!1);#t=H(Ce({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return o(this.#t)}get currentMainId(){return o(this.#r)}get isInitialized(){return o(this.#c)}get loading(){return o(this.#u)}get error(){return o(this.#l)}get lastSync(){return o(this.#a)}get syncing(){return o(this.#o)}get availableDates(){return o(this.#s)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,a=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:a}}isFullRange(){return this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate}initializeDateRange(){if((!this.dateRange.start||!this.dateRange.end)&&o(this.#s).length>0){const t=[...o(this.#s)].sort();this.dateRange={start:t[0],end:t[t.length-1]}}console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}get firstAvailableDate(){return o(this.#s).length===0?null:[...o(this.#s)].sort()[0]}get lastAvailableDate(){return o(this.#s).length===0?null:[...o(this.#s)].sort().pop()}get realtimeConnected(){return o(this.#i)}get hugoContentChanged(){return o(this.#v)}#_=X(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return o(this.#_)}set enrichedProducts(t){$(this.#_,t)}#g=X(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const t=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[a,s]of this.#e){if(!s.byDate||!this.#B(s))continue;Object.keys(s.byDate).some(c=>{const f=new Date(c);return f>=t&&f<=r})&&n.set(a,s)}return n});get filteredProductsMap(){return o(this.#g)}set filteredProductsMap(t){$(this.#g,t)}#w=X(()=>{console.log("[Store] Calcul unifié des stats par produit (1 itération)");const t=new Map;if(this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using precomputed data");for(const[n,a]of this.#e){const s=qa(a,this.dateRange.end),i=s.filter(c=>c.q>0),l=s.filter(c=>c.q<0).map(c=>({q:Math.abs(c.q),u:c.u}));t.set(n,{quantities:a.totalNeededArray,formattedQuantities:vr(a.totalNeededArray),nbRecipes:a.nbRecipes||0,totalAssiettes:a.totalAssiettes||0,stockResult:s,availableQuantities:i,missingQuantities:l,formattedAvailableQuantities:ja(s),hasAvailable:i.length>0,hasMissing:l.length>0})}return t}for(const[n,a]of this.filteredProductsMap){if(!a.byDate)continue;const s=Ql(a.byDate),i=Ul(s,this.dateRange.start,this.dateRange.end),l=i.length>0?vr(i):"",c=Wl(a.byDate,this.dateRange.start,this.dateRange.end),v=Object.keys(a.byDate).filter(g=>{const x=new Date(g),b=new Date(this.dateRange.start),y=new Date(this.dateRange.end);return x>=b&&x<=y}).flatMap(g=>a.byDate[g]?.recipes||[]),_=qa(a,this.dateRange.end),p=_.filter(g=>g.q>0),m=_.filter(g=>g.q<0).map(g=>({q:Math.abs(g.q),u:g.u}));t.set(n,{quantities:i,formattedQuantities:l,nbRecipes:v.length,totalAssiettes:c,stockResult:_,availableQuantities:p,missingQuantities:m,formattedAvailableQuantities:ja(_),hasAvailable:p.length>0,hasMissing:m.length>0})}return t});get productsStatsByDateRange(){return o(this.#w)}set productsStatsByDateRange(t){$(this.#w,t)}#S=X(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return o(this.#S)}set stats(t){$(this.#S,t)}#h=X(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return o(this.#h)}set uniqueStores(t){$(this.#h,t)}#p=X(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return o(this.#p)}set uniqueWho(t){$(this.#p,t)}#m=X(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return o(this.#m)}set uniqueProductTypes(t){$(this.#m,t)}#E=X(()=>{const t=Array.from(this.filteredProductsMap.values());return o(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>o(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get groupedFilteredProducts(){return o(this.#E)}set groupedFilteredProducts(t){$(this.#E,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(o(this.#c)&&o(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),$(this.#r,t,!0);try{this.#n=await Dc(t)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}$(this.#l,null);try{if(await this.#T(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await Nc(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Mc(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),$(this.#s,[...n.allDates],!0),await ko(t)||await Ao(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#$()}this.initializeDateRange(),await this.#N(),$(this.#c,!0);const r=this.#j();this.#d=$o(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw $(this.#l,n,!0),console.error("[ProductsStore]",n,r),r}}async#T(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();$(this.#a,r.lastSync,!0),$(this.#s,[...r.allDates],!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#N(){if(o(this.#r)){$(this.#o,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${o(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${o(this.#a)}`);const t=await go(o(this.#r),{lastSync:o(this.#a),limit:Xa});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#k(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),o(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${o(this.#a)}`);const{loadUpdatedPurchases:r}=await Ml(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Tc);return{loadUpdatedPurchases:a}},void 0),n=await r(o(this.#r),o(this.#a),Xa);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const s=a.products.map(i=>typeof i=="string"?i:i.$id);this.#x(s,a)}})}this.#C(),await this.#$(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{$(this.#o,!1)}}}async#$(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:o(this.#a),allDates:[...o(this.#s)]}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#P(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#C(){$(this.#a,new Date().toISOString(),!0)}#k(t,r){return r?this.#b(t,r):this.#M(t)}#M(t){const r=Lr(ln(t.purchases??[])),n=[],{numeric:a,display:s}=cn(n,r),i=Or(t.stockReel)??null,l=vr(r),c=t.store?Or(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:s,totalNeededOverrideParsed:Oa(t.totalNeededOverride)}}#b(t,r){const n=t.purchases??r.purchases,a=Lr(ln(n??[])),s=vr(a),{numeric:i,display:l}=cn(r.totalNeededArray,a),c=t.stockReel??r.stockReel,f=c?Or(c):r.stockParsed,v=t.store??r.store,_=v?Or(v):r.storeInfo,p=f?`${f.quantity} ${f.unit}`:s;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:v,stockReel:c,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:_,stockParsed:f,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:s,displayMissingQuantity:l,totalNeededOverrideParsed:Oa(t.totalNeededOverride??r.totalNeededOverride)}}#L(t){t.totalPurchasesArray=Lr(ln(t.purchases??[]));const{numeric:r,display:n}=cn(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=vr(t.totalPurchasesArray)}#z(t){t.length&&(t.forEach(r=>this.#y(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#y(t){const r=this.#e.get(t.$id),n=this.#k(t,r);this.#e.set(t.$id,n)}#I(t){this.#e.delete(t)}async#D(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#q(r,t),r}async#R(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#x(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Eo([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#x(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#O(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t));return r.forEach(n=>{this.#y(n)}),r.map(n=>n.$id)}#A(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#q(t,r){const n=this.#A(r),a=[];t.forEach(s=>{const i=this.#e.get(s);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#b({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(s=>{this.#e.set(s.$id,s)})}#x(t,r){const n=this.#A(r),a=[];t.forEach(s=>{const i=this.#e.get(s);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#b({...i,purchases:f,status:"active"},i);a.push(v)}else{const f=this.#b({...i,purchases:[...l,r],status:"active"},i);a.push(f)}}}),a.forEach(s=>{this.#e.set(s.$id,s)})}#j(){return{onProductCreate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#I(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#D(t);await this.#P(r)},onPurchaseUpdate:async t=>{const r=await this.#R(t);await this.#P(r)},onPurchaseDelete:async t=>{const r=await this.#O(t);await this.#P(r)},onConnect:()=>{$(this.#i,!0)},onDisconnect:()=>{$(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#B(t){if(o(this.#t).searchQuery.trim()){const r=o(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(o(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!o(this.#t).selectedStores.includes(t.storeInfo.storeName))||o(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>o(this.#t).selectedWho.includes(r)))||o(this.#t).selectedProductTypes.length>0&&(!t.productType||!o(this.#t).selectedProductTypes.includes(t.productType))||o(this.#t).selectedTemperatures.length>0&&!(o(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||o(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Vl(t=>{o(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=o(this.#t).selectedProductTypes.indexOf(t);r>-1?o(this.#t).selectedProductTypes.splice(r,1):o(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=o(this.#t).selectedTemperatures.indexOf(t);r>-1?o(this.#t).selectedTemperatures.splice(r,1):o(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){o(this.#t).selectedProductTypes=[],o(this.#t).selectedTemperatures=[]}setGroupBy(t){o(this.#t).groupBy=t}toggleStore(t){const r=o(this.#t).selectedStores.indexOf(t);r>-1?o(this.#t).selectedStores.splice(r,1):o(this.#t).selectedStores.push(t)}toggleWho(t){const r=o(this.#t).selectedWho.indexOf(t);r>-1?o(this.#t).selectedWho.splice(r,1):o(this.#t).selectedWho.push(t)}clearStoreFilters(){o(this.#t).selectedStores=[]}clearWhoFilters(){o(this.#t).selectedWho=[]}handleSort(t){o(this.#t).sortColumn===t?o(this.#t).sortDirection=o(this.#t).sortDirection==="asc"?"desc":"asc":(o(this.#t).sortColumn=t,o(this.#t).sortDirection="asc")}clearFilters(){$(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return o(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[o(this.#t).sortColumn],s=n[o(this.#t).sortColumn];return o(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,s=parseFloat(s)||0):o(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,s=n.purchases?.length||0),a<s?o(this.#t).sortDirection==="asc"?-1:1:a>s?o(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Gl(r.byDate):!1}get enrichedProductsCount(){return this.#e.size}async forceReload(t){await this.clearCache(),await this.initialize(t)}async clearCache(){this.#e.clear(),$(this.#s,[],!0),$(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const s=this.#e.get(a);if(s){const i={...s,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#d?.(),this.#d=null,this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const Z=new Rc;function Oc(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const qc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var jc=il("<svg><!><!></svg>");function fe(e,t){V(t,!0);const r=Ne(t,"color",3,"currentColor"),n=Ne(t,"size",3,24),a=Ne(t,"strokeWidth",3,2),s=Ne(t,"absoluteStrokeWidth",3,!1),i=Ne(t,"iconNode",19,()=>[]),l=ce(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=jc();Ia(c,_=>({...qc,...l,width:n(),height:n(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>s()?Number(a())*24/Number(n()):a()]);var f=u(c);it(f,17,i,Qn,(_,p)=>{var m=X(()=>ls(o(p),2));let g=()=>o(m)[0],x=()=>o(m)[1];var b=z(),y=O(b);hl(y,g,!0,(P,w)=>{Ia(P,()=>({...x()}))}),h(_,b)});var v=d(f);se(v,()=>t.children??ae),h(e,c),U()}function Xn(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];fe(e,de({name:"archive"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Bc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];fe(e,de({name:"bean"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Lc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];fe(e,de({name:"beef"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function zc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];fe(e,de({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Vc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];fe(e,de({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Hr(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];fe(e,de({name:"check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Uc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];fe(e,de({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Wc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];fe(e,de({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Fa(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];fe(e,de({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Gc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];fe(e,de({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Qc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];fe(e,de({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Hc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];fe(e,de({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Kc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];fe(e,de({name:"clock"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Jc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];fe(e,de({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function ga(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];fe(e,de({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Yc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];fe(e,de({name:"egg"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Zc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];fe(e,de({name:"euro"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Xc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];fe(e,de({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Mo(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];fe(e,de({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Fc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];fe(e,de({name:"info"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function eu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];fe(e,de({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function tu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];fe(e,de({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function ru(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];fe(e,de({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function nu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];fe(e,de({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function au(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];fe(e,de({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function su(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];fe(e,de({name:"message-circle-more"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function ou(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];fe(e,de({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function ba(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];fe(e,de({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function iu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];fe(e,de({name:"moon"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function lu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];fe(e,de({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Yr(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];fe(e,de({name:"package"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function cu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];fe(e,de({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function uu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];fe(e,de({name:"plus"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function du(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];fe(e,de({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function fu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];fe(e,de({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function vu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];fe(e,de({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function hu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];fe(e,de({name:"save"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function pu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];fe(e,de({name:"search"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Io(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];fe(e,de({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function zt(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];fe(e,de({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Do(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];fe(e,de({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Fn(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];fe(e,de({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Gt(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];fe(e,de({name:"store"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function mu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];fe(e,de({name:"sun"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function _u(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];fe(e,de({name:"thermometer"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function $n(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];fe(e,de({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Ro(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];fe(e,de({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function Zr(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];fe(e,de({name:"user"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function ea(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];fe(e,de({name:"users"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function gu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];fe(e,de({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}function bt(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];fe(e,de({name:"x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=z(),l=O(i);se(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),U()}class bu{isMobileQuery=new Fs("max-width: 767px");get isMobile(){return this.isMobileQuery.current}userName(){return localStorage.getItem("appwrite-user-name")||""}}const ta=new bu;function yu(e,t){const r=e.reduce((a,s)=>{const i=s.isSynced?0:1,l=s.missingQuantities.length;return a+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function wu(e,t){const r=e.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const a=t.purchaseStatus||"delivered";let s=t.purchaseDeliveryDate||null;a==="delivered"&&!s&&(s=new Date().toISOString());const i=e.flatMap(c=>c.missingQuantities.map(f=>({productId:c.productId,quantity:f.q,unit:f.u,status:a,notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:s,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:t}}async function Su(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=yu(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,s=[];if(n<=a)s.push(t);else{let p=[],m=0;for(const g of t){const x=(g.isSynced?0:1)+g.missingQuantities.length;m+x>a?(p.length>0&&s.push(p),p=[g],m=x):(p.push(g),m+=x)}p.length>0&&s.push(p)}console.log(`[Appwrite Interactions] Découpage en ${s.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<s.length;p++){const m=s[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${s.length} (${m.length} produits)`);try{const g=await wu(m,r),x=await Pu(g);if(i.push(x),x.success)l+=x.productsCreated,c+=x.purchasesCreated,f+=x.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${x.error}`);break}}catch(g){const x=g instanceof Error?g.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,g),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:x,timestamp:new Date().toISOString()});break}}const v=i.every(p=>p.success),_=i.some(p=>!p.success);return{success:v,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:_?"Un ou plusieurs lots ont échoué":void 0}}async function Pu(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const s=JSON.parse(a.responseBody);return s.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${s.productsCreated} produits créés, ${s.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",s.error),s}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var xu=(e,t,r)=>t(o(r).id),Eu=E('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),$u=E('<span class="flex items-center gap-1"><!> </span>'),ku=E('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Au=E('<div class="flex flex-wrap gap-2"></div> <!>',1);function Kr(e,t){V(t,!0);let r=Ne(t,"badgeSize",3,"badge-lg"),n=Ne(t,"color",3,"primary"),a=Ne(t,"badgeStyle",3,""),s=Ne(t,"onToggleItem",3,()=>{}),i=Ne(t,"showStats",3,!1),l=Ne(t,"showIcon",3,!0),c=H(Ce({}));lr(()=>{const b={};t.items.forEach(y=>{b[y.id]=y.selected??!0}),$(c,b,!0)});function f(b){o(c)[b]=!o(c)[b],s()(b)}const v=X(()=>Object.values(o(c)).filter(Boolean).length),_=X(()=>Object.values(o(c)).filter(b=>!b).length);var p=Au(),m=O(p);it(m,21,()=>t.items,b=>b.id,(b,y)=>{const P=X(()=>o(c)[o(y).id]);var w=Eu();w.__click=[xu,f,y];var S=u(w);{var k=j=>{var W=z(),re=O(W);er(re,()=>o(y).icon,(te,D)=>{D(te,{class:"h-3 w-3",get title(){return o(y).title}})}),h(j,W)};M(S,j=>{o(y).icon&&j(k)})}var A=d(S,2),C=u(A),R=d(A,2);{var F=j=>{var W=z(),re=O(W);{var te=I=>{Hr(I,{size:16})},D=I=>{uu(I,{size:16})};M(re,I=>{o(P)?I(te):I(D,!1)})}h(j,W)};M(R,j=>{l()&&j(F)})}G(()=>{$e(w,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${o(P)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Ut(w,"title",o(P)?"Retirer de la liste":"Réajouter à la liste"),L(C,o(y).label)}),h(b,w)});var g=d(m,2);{var x=b=>{var y=ku(),P=u(y),w=u(P),S=u(w);Hr(S,{class:"text-success h-3 w-3"});var k=d(S),A=d(w,2);{var C=j=>{var W=$u(),re=u(W);bt(re,{class:"text-error h-3 w-3"});var te=d(re);G(()=>L(te,` ${o(_)??""} retirés`)),h(j,W)};M(A,j=>{o(_)>0&&j(C)})}var R=d(P,2),F=u(R);G(()=>{L(k,` ${o(v)??""} actifs`),L(F,`Total: ${t.items.length??""} items`)}),h(b,y)};M(g,b=>{i()&&b(x)})}h(e,p),U()}Je(["click"]);function Tu(e,t){$(t,!o(t))}var Nu=E('<span class="text-base-content font-semibold"> </span>'),Cu=E('<div class="text-base-content/80 flex-1"> </div>'),Mu=E('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Iu=E('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Du=E('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Oo(e,t){let r=Ne(t,"icon",3,Fc),n=Ne(t,"class",3,""),a=Ne(t,"initiallyOpen",3,!1),s=r(),i=H(Ce(a())),l=Ce(t.children);var c=Du(),f=u(c);f.__click=[Tu,i];var v=u(f),_=u(v);s(_,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(_,2);{var m=S=>{var k=Nu(),A=u(k);G(()=>L(A,t.title)),h(S,k)};M(p,S=>{t.title&&S(m)})}var g=d(v,2);{var x=S=>{var k=Cu(),A=u(k);G(()=>L(A,t.contentVisible)),h(S,k)};M(g,S=>{t.contentVisible&&S(x)})}var b=d(g,2);{var y=S=>{var k=Mu(),A=u(k),C=u(A);{var R=W=>{var re=mt("en savoir plus");h(W,re)},F=W=>{var re=mt("masquer");h(W,re)};M(C,W=>{o(i)?W(F,!1):W(R)})}var j=d(A,2);{let W=X(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${o(i)?"rotate-180":""}`);Wc(j,{get class(){return o(W)}})}h(S,k)};M(b,S=>{l&&S(y)})}var P=d(f,2);{var w=S=>{var k=Iu(),A=u(k),C=u(A);se(C,()=>t.children??ae),G(()=>$e(k,1,`overflow-hidden transition-all duration-200 ${o(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h(S,k)};M(P,S=>{l&&S(w)})}G(()=>{$e(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Hs(c,t.style),$e(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Ut(f,"aria-expanded",o(i))}),h(e,c)}Je(["click"]);async function Ru(e,t,r,n,a,s,i,l){if(!(!o(t)||o(r))){$(r,!0),$(n,null),$(a,null);try{const c=`FACTURE_${Date.now()}`,f=o(s).map(m=>m.$id);Z.setSyncStatus(f,!0);const v=[];for(const m of o(s))v.push({productId:m.$id,isSynced:m.isSynced,productData:m,missingQuantities:m.missingQuantityArray||[]});const _={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${o(s).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const p=await Su(Z.currentMainId,v,_);if(p.success)$(a,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";$(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),Z.clearSyncStatus()}finally{$(r,!1)}}}function es(e,t,r){o(t)||r.onClose()}var Ou=E('<div class="alert alert-error"><!> <span> </span></div>'),qu=E('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),ju=E(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),Bu=E("<option> </option>"),Lu=E("<option> </option>"),zu=E('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),Vu=E('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Uu=E("<!> ",1),Wu=E(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option>Annulé</option></select> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function Gu(e,t){V(t,!0);let r=H(!1),n=H(null),a=H(null),s=Ce({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=H(Ce(new Set));lr(()=>{$(i,new Set(t.products.map(Y=>Y.$id)),!0)});const l=X(()=>t.products.filter(Y=>o(i).has(Y.$id))),c=X(()=>o(l).length!==0),f=X(()=>`Achat groupé (${o(l).length} produits sélectionnés)`);function v(Y){const we=new Set(o(i));we.has(Y)?we.delete(Y):we.add(Y),$(i,we,!0)}const _=X(()=>t.products.map(Y=>({id:Y.$id,label:Y.productName,title:Y.productName})));var p=Wu(),m=u(p),g=u(m),x=u(g),b=u(x);zt(b,{class:"h-5 w-5"});var y=d(b),P=d(x,2);P.__click=[es,r,t];var w=u(P);bt(w,{class:"h-4 w-4"});var S=d(g,2),k=u(S);{var A=Y=>{var we=Ou(),Ae=u(we);$n(Ae,{class:"h-4 w-4"});var We=d(Ae,2),Le=u(We);G(()=>L(Le,o(n))),h(Y,we)};M(k,Y=>{o(n)&&Y(A)})}var C=d(k,2);{var R=Y=>{var we=qu(),Ae=u(we);Hr(Ae,{class:"h-4 w-4"});var We=d(Ae,2),Le=u(We),et=d(Le);{var ct=Se=>{var Te=mt("+ 1 dépense globale");h(Se,Te)};M(et,Se=>{o(a).expense&&Se(ct)})}var ee=d(et,2);{var he=Se=>{var Te=mt();G(()=>L(Te,`(traité en ${o(a).batches??""} lots)`)),h(Se,Te)};M(ee,Se=>{o(a).batches&&o(a).batches>1&&Se(he)})}G(()=>L(Le,`Achat groupé créé avec succès ! ${o(a).purchases??""} produit(s) validés `)),h(Y,we)};M(C,Y=>{o(a)&&Y(R)})}var F=d(C,2),j=u(F);Oo(j,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(Y,we)=>{var Ae=ju();h(Y,Ae)},$$slots:{default:!0}});var W=d(F,2),re=d(u(W),2),te=u(re),D=u(te),I=u(D);Gt(I,{class:"h-4 w-4 opacity-50"});var K=d(I,2),ne=d(D,2);it(ne,21,()=>Z.uniqueStores,Qn,(Y,we)=>{var Ae=Bu(),We=u(Ae),Le={};G(()=>{L(We,o(we)),Le!==(Le=o(we))&&(Ae.value=(Ae.__value=o(we))??"")}),h(Y,Ae)});var N=d(te,2),Q=u(N),ie=u(Q);Zr(ie,{class:"h-4 w-4 opacity-50"});var oe=d(ie,2),ue=d(Q,2);it(ue,21,()=>Z.uniqueWho,Qn,(Y,we)=>{var Ae=Lu(),We=u(Ae),Le={};G(()=>{L(We,o(we)),Le!==(Le=o(we))&&(Ae.value=(Ae.__value=o(we))??"")}),h(Y,Ae)});var be=d(N,2),xe=u(be),B=u(xe);Zc(B,{class:"h-4 w-4 opacity-50"});var me=d(B,2),q=d(re,2),le=u(q),ke=u(le),je=u(ke);je.value=je.__value="delivered";var Be=d(je);Be.value=Be.__value="ordered";var Re=d(Be);Re.value=Re.__value="requested";var Qe=d(Re);Qe.value=Qe.__value="cancelled";var pe=d(ke,2),ye=d(le,2);{var st=Y=>{var we=zu(),Ae=u(we),We=d(u(Ae),2);G(()=>We.disabled=o(r)),Me(We,()=>s.deliveryDate,Le=>s.deliveryDate=Le),h(Y,we)};M(ye,Y=>{s.status==="ordered"&&Y(st)})}var ft=d(q,2),ve=u(ft),J=u(ve);ba(J,{class:"h-4 w-4 opacity-50"});var ge=d(J,2),ze=d(W,2),rt=d(u(ze),2);Kr(rt,{get items(){return o(_)},onToggleItem:v,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var _e=d(ze,2),Ie=u(_e);Ie.__click=[es,r,t];var Ue=d(Ie,2);Ue.__click=[Ru,c,r,n,a,l,s,t];var kt=u(Ue);{var At=Y=>{var we=Vu();h(Y,we)},Ht=Y=>{var we=Uu(),Ae=O(we);zt(Ae,{class:"h-4 w-4"});var We=d(Ae);G(()=>L(We,` Valider ${o(l).length??""} produit(s)`)),h(Y,we)};M(kt,Y=>{o(r)?Y(At):Y(Ht,!1)})}G(()=>{L(y,` ${o(f)??""}`),P.disabled=o(r),K.disabled=o(r),oe.disabled=o(r),me.disabled=o(r),ke.disabled=o(r),$e(pe,1,`label text-sm ${s.status==="delivered"?"":"hidden"}`),ge.disabled=o(r),Ie.disabled=o(r),Ue.disabled=o(r)||!o(c)}),Me(K,()=>s.store,Y=>s.store=Y),Me(oe,()=>s.who,Y=>s.who=Y),Me(me,()=>s.expense,Y=>s.expense=Y),Yt(ke,()=>s.status,Y=>s.status=Y),Me(ge,()=>s.notes,Y=>s.notes=Y),h(e,p),U()}Je(["click"]);function ra(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Bc};case"animaux":return{displayName:"Viandes et Poissons",icon:Lc};case"legumes":return{displayName:"Fruits et Légumes",icon:Vc};case"sucres":return{displayName:"Sucrées",icon:zc};case"lof":return{displayName:"L.O.F",icon:Yc};case"autres":return{displayName:"Autres",icon:Uc};case"epices":return{displayName:"Assaisonnements",icon:tu};case"frais":return{displayName:"Produits Frais",icon:vu};default:return{displayName:e,icon:Yr}}}function ts(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function kn(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function An(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Qu(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Hu(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],s=n[t.sortColumn];return a<s?t.sortDirection==="asc"?-1:1:a>s?t.sortDirection==="asc"?1:-1:0}):e}function na(e){switch(e){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function rs(e){return e?An(e):"-"}function Ku(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",s=n.unit||"unit",i=`${a}_${s}`;if(!r[i]){const l=na(a);r[i]={status:a,unit:s,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Ju(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function Ju(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function Yu(e){let t=H(!1),r=H(null);const n=X(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),Z.getEnrichedProductById(e))),a=X(()=>o(n)?.who??[]),s=X(()=>o(n)?.stockParsed??null),i=X(()=>o(n)?.purchases??[]),l=X(()=>o(n)?.byDate?Hl(o(n).byDate):[]),c=Ce({purchase:{quantity:null,unit:"",store:"",who:ta.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=H(!1),v=H(null);lr(()=>{!o(n)||o(f)||(c.purchase.quantity=o(n).missingQuantityArray[0]?.q??null,c.purchase.unit=o(n).totalNeededArray[0]?.u??"",c.purchase.store=o(n).storeInfo?.storeName??"",c.purchase.who=ta.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=o(n).totalNeededArray[0]?.u??"",c.store.name=o(n).storeInfo?.storeName??"",c.store.comment=o(n).storeInfo?.storeComment??null,c.who=o(n)?.who?[...o(n).who]:[],$(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),$(f,!0))});const _=X(()=>o(v)?{store:JSON.stringify(c.store)!==JSON.stringify(o(v).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(o(v).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?o(s)?c.stock.quantity.toString()!==o(s).quantity||c.stock.unit!==o(s).unit||(c.stock.notes||"")!==(o(s).notes||""):!0:!1}const m=X(()=>!!(o(v)&&(o(_).store||o(_).stock||o(_).who)));let g=H(null);const x=X(()=>o(g)?o(i).find(D=>D.$id===o(g))??null:null);async function b(D,I){$(t,!0),$(r,null);try{const K=await D();return I&&y("success",I),K}catch(K){const ne=K instanceof Error?K.message:"Une erreur est survenue";return $(r,ne,!0),y("error",ne),console.error("[ProductModalState]",K),null}finally{$(t,!1)}}function y(D,I){const K=new CustomEvent("toast",{detail:{type:D,message:I}});window.dispatchEvent(K)}async function P(){o(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!Z.currentMainId)throw new Error("mainId non disponible");const{quantity:D,unit:I}=ts(c.purchase.quantity,c.purchase.unit);o(n).isSynced||(console.log(`[ProductModalState] Produit ${o(n).$id} local, création pour purchase...`),await qt(o(n).$id,{},N=>Z.getEnrichedProductById(N)));const K=c.purchase.status||"delivered";let ne=c.purchase.deliveryDate||null;K==="delivered"&&!ne&&(ne=new Date().toISOString()),await So({products:[o(n).$id],mainId:Z.currentMainId,unit:I,quantity:D,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:K,orderDate:c.purchase.orderDate||null,deliveryDate:ne}),c.purchase={quantity:o(n).missingQuantityArray[0]?.q??null,unit:o(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function w(D){$(g,D.$id,!0)}function S(){$(g,null)}async function k(D){D.$id&&await b(async()=>{const{quantity:I,unit:K}=ts(D.quantity,D.unit),ne=D.status||null;let N=D.deliveryDate||null;ne==="delivered"&&!N&&(N=new Date().toISOString()),await Po(D.$id,{unit:K,quantity:I,store:D.store||null,who:D.who||null,notes:D.notes||"",price:D.price||null,status:ne,orderDate:D.orderDate||null,deliveryDate:N}),$(g,null)},"Achat modifié avec succès")}async function A(D){const I=o(i).find(K=>K.$id===D);I&&confirm(`Supprimer cet achat (${I.quantity} ${I.unit}) ?`)&&await b(async()=>{await xo(D)},"Achat supprimé avec succès")}async function C(){o(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const D={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, update stock normal...`),await Zn(o(n).$id,JSON.stringify(D))):(console.log(`[ProductModalState] Produit ${o(n).$id} local, création stock avec upsert...`),await qt(o(n).$id,{stockReel:JSON.stringify(D)},I=>Z.getEnrichedProductById(I))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function R(){o(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, suppression stock normal...`),await Zn(o(n).$id,null)):(console.log(`[ProductModalState] Produit ${o(n).$id} local, suppression stock avec upsert...`),await qt(o(n).$id,{stockReel:null},D=>Z.getEnrichedProductById(D)))},"Stock supprimé")}async function F(D){o(n)&&await b(async()=>{o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, setWho normal...`),await yo(o(n).$id,D)):(console.log(`[ProductModalState] Produit ${o(n).$id} local, création who avec upsert...`),await qt(o(n).$id,{who:D},I=>Z.getEnrichedProductById(I)))},"Volontaires mis à jour")}async function j(D){o(n)&&await b(async()=>{o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, update store normal...`),await bo(o(n).$id,D)):(console.log(`[ProductModalState] Produit ${o(n).$id} local, création store avec upsert...`),await qt(o(n).$id,{store:JSON.stringify(D)},I=>Z.getEnrichedProductById(I)))},"Magasin mis à jour")}async function W(D){o(n)&&await b(async()=>{await nr(o(n).$id,{totalNeededOverride:JSON.stringify(D)})},"Override appliqué")}async function re(){o(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await nr(o(n).$id,{totalNeededOverride:null})},"Override supprimé")}async function te(){!o(n)||!o(m)||await b(async()=>{const D={};if(o(_).stock&&c.stock.quantity&&c.stock.unit){const I={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};D.stockReel=JSON.stringify(I)}if(o(_).who&&(D.who=c.who),o(_).store){const I={storeName:c.store.name||"",storeComment:c.store.comment||void 0};D.storeInfo=I}Object.keys(D).length>0&&(await wo(o(n).$id,D,I=>Z.getEnrichedProductById(I)),$(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return o(t)},get error(){return o(r)},get product(){return o(n)},get recipes(){return o(l)},get whoList(){return o(a)},get stockParsed(){return o(s)},get purchasesList(){return o(i)},get editingPurchaseId(){return o(g)},get editingPurchaseData(){return o(x)},forms:c,addPurchase:P,startEditPurchase:w,cancelEditPurchase:S,updateEditedPurchase:k,removePurchase:A,setStock:C,removeStock:R,setWho:F,updateStore:j,setOverride:W,removeOverride:re,saveAllChanges:te,get hasChanges(){return o(_)},get hasAnyChanges(){return o(m)},formatQuantity:kn,formatDate:An,formatDisplayQuantity:Qu}}function Zu(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Xu(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Fu(e,t){t().cancelEditPurchase()}var ed=E('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),td=E('<span class="loading loading-spinner loading-sm"></span>'),rd=E('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),nd=E('<span class="loading loading-spinner loading-sm"></span>'),ad=E('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),sd=(e,t,r)=>t(o(r)),od=(e,t,r)=>t(o(r).$id),id=E('<span class="loading loading-spinner loading-sm"></span>'),ld=E('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),cd=E('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),ud=E(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function dd(e,t){V(t,!0);let r=Ne(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(ve){return ve.quantity!==null&&ve.quantity!==0&&ve.unit?.trim()!==""}function s(ve){r().removePurchase(ve)}function i(ve){r().startEditPurchase(ve)}var l=ud(),c=u(l),f=u(c);zt(f,{class:"h-5 w-5"});var v=d(c,2),_=u(v),p=d(u(_),2),m=u(p),g=u(m);Yr(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2),b=d(m,2),y=u(b);y.value=y.__value="";var P=d(y);P.value=P.__value="kg";var w=d(P);w.value=w.__value="gr.";var S=d(w);S.value=S.__value="l.";var k=d(S);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var C=d(A);C.value=C.__value="bottes";var R=d(b,2),F=u(R);Gt(F,{class:"h-4 w-4 opacity-50"});var j=d(F,2),W=d(R,2),re=u(W);Zr(re,{class:"h-4 w-4 opacity-50"});var te=d(re,2),D=d(W,2),I=d(u(D),2),K=d(p,2),ne=u(K),N=u(ne);ba(N,{class:"h-4 w-4 opacity-50"});var Q=d(N,2),ie=d(K,2),oe=u(ie),ue=u(oe),be=u(ue),xe=u(be);xe.value=xe.__value="delivered";var B=d(xe);B.value=B.__value="ordered";var me=d(B);me.value=me.__value="requested";var q=d(ue,2),le=d(oe,2);{var ke=ve=>{var J=ed(),ge=d(u(J),2);Me(ge,()=>r().forms.purchase.deliveryDate,ze=>r().forms.purchase.deliveryDate=ze),h(ve,J)};M(le,ve=>{r().forms.purchase.status==="ordered"&&ve(ke)})}var je=d(ie,2),Be=u(je);Be.__click=[Zu,n,r];var Re=u(Be);{var Qe=ve=>{var J=td();h(ve,J)},pe=ve=>{var J=mt("Ajouter l'achat");h(ve,J)};M(Re,ve=>{r().loading?ve(Qe):ve(pe,!1)})}var ye=d(v,2);{var st=ve=>{var J=rd(),ge=u(J);zt(ge,{class:"mx-auto mb-2 h-12 w-12"}),h(ve,J)},ft=ve=>{var J=cd(),ge=u(J),ze=d(u(ge));it(ze,21,()=>r().purchasesList,rt=>rt.$id,(rt,_e,Ie)=>{var Ue=z(),kt=O(Ue);{var At=Y=>{var we=ad(),Ae=u(we),We=u(Ae),Le=u(We),et=d(Le,2),ct=u(et);ct.value=ct.__value="kg";var ee=d(ct);ee.value=ee.__value="gr.";var he=d(ee);he.value=he.__value="l.";var Se=d(he);Se.value=Se.__value="ml";var Te=d(Se);Te.value=Te.__value="unité";var Ze=d(Te);Ze.value=Ze.__value="bottes";var Ge=d(Ae),Ye=u(Ge),He=d(Ge),Ot=u(He),Xr=d(He),kr=u(Xr),Ar=u(kr);Ar.value=Ar.__value="requested";var Tr=d(Ar);Tr.value=Tr.__value="ordered";var Nr=d(Tr);Nr.value=Nr.__value="delivered";var ur=d(Nr);ur.value=ur.__value="cancelled";var Fr=d(Xr),Cr=u(Fr),en=d(Fr),Tn=u(en),tn=d(en),wt=u(tn),dr=d(tn),Nn=u(dr),Cn=d(dr),Mn=u(Cn),rn=u(Mn);rn.__click=[Xu,r,a];var jo=u(rn);{var Bo=Oe=>{var Vo=nd();h(Oe,Vo)},Lo=Oe=>{hu(Oe,{class:"h-3 w-3"})};M(jo,Oe=>{r().loading?Oe(Bo):Oe(Lo,!1)})}var ya=d(rn,2);ya.__click=[Fu,r];var zo=u(ya);bt(zo,{class:"h-3 w-3"}),G(Oe=>rn.disabled=Oe,[()=>r().loading||!a(o(_e))]),Me(Le,()=>o(_e).quantity,Oe=>o(_e).quantity=Oe),Yt(et,()=>o(_e).unit,Oe=>o(_e).unit=Oe),Me(Ye,()=>o(_e).store,Oe=>o(_e).store=Oe),Me(Ot,()=>o(_e).who,Oe=>o(_e).who=Oe),Yt(kr,()=>o(_e).status,Oe=>o(_e).status=Oe),Me(Cr,()=>o(_e).orderDate,Oe=>o(_e).orderDate=Oe),Me(Tn,()=>o(_e).deliveryDate,Oe=>o(_e).deliveryDate=Oe),Me(wt,()=>o(_e).price,Oe=>o(_e).price=Oe),Me(Nn,()=>o(_e).notes,Oe=>o(_e).notes=Oe),h(Y,we)},Ht=Y=>{var we=ld(),Ae=u(we),We=u(Ae),Le=d(Ae),et=u(Le),ct=d(Le),ee=u(ct),he=d(ct),Se=u(he),Te=u(Se),Ze=d(he),Ge=u(Ze),Ye=d(Ze),He=u(Ye),Ot=d(Ye),Xr=u(Ot),kr=d(Ot),Ar=u(kr),Tr=d(kr),Nr=u(Tr),ur=u(Nr);ur.__click=[sd,i,_e];var Fr=u(ur);Fn(Fr,{class:"h-4 w-4"});var Cr=d(ur,2);Cr.__click=[od,s,_e];var en=u(Cr);{var Tn=wt=>{var dr=id();h(wt,dr)},tn=wt=>{bt(wt,{class:"h-4 w-4"})};M(en,wt=>{r().loading?wt(Tn):wt(tn,!1)})}G((wt,dr,Nn,Cn,Mn)=>{L(We,wt),L(et,o(_e).store||"-"),L(ee,o(_e).who||"-"),$e(Se,1,`badge badge-sm ${dr??""}`),L(Te,Nn),L(Ge,Cn),L(He,Mn),L(Xr,o(_e).price?`${o(_e).price}€`:"-"),L(Ar,o(_e).notes||"-"),Cr.disabled=r().loading},[()=>kn(o(_e).quantity,o(_e).unit),()=>na(o(_e).status).class,()=>na(o(_e).status).text,()=>rs(o(_e).orderDate),()=>rs(o(_e).deliveryDate)]),h(Y,we)};M(kt,Y=>{r().editingPurchaseId===o(_e).$id?Y(At):Y(Ht,!1)})}h(rt,Ue)}),h(ve,J)};M(ye,ve=>{r().purchasesList.length===0?ve(st):ve(ft,!1)})}G(ve=>{$e(q,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),Be.disabled=ve},[()=>r().loading||!n()]),Me(x,()=>r().forms.purchase.quantity,ve=>r().forms.purchase.quantity=ve),Yt(b,()=>r().forms.purchase.unit,ve=>r().forms.purchase.unit=ve),Me(j,()=>r().forms.purchase.store,ve=>r().forms.purchase.store=ve),Me(te,()=>r().forms.purchase.who,ve=>r().forms.purchase.who=ve),Me(I,()=>r().forms.purchase.price,ve=>r().forms.purchase.price=ve),Me(Q,()=>r().forms.purchase.notes,ve=>r().forms.purchase.notes=ve),Yt(be,()=>r().forms.purchase.status,ve=>r().forms.purchase.status=ve),h(e,l),U()}Je(["click"]);async function fd(e,t){await t()?.removeStock()}var vd=E(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),hd=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},pd=E('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),md=E('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),_d=E('<span class="loading loading-spinner loading-xs"></span>'),gd=E('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),bd=E(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function yd(e,t){V(t,!0);let r=Ne(t,"modalState",7);var n=bd(),a=u(n),s=u(a);Xn(s,{class:"h-5 w-5"});var i=d(a,2),l=u(i),c=u(l),f=u(c),v=d(c,2),_=u(v);Oo(_,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(I,K)=>{var ne=vd();h(I,ne)},$$slots:{default:!0}});var p=d(v,2),m=u(p),g=u(m);Yr(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2),b=d(m,2),y=u(b);y.value=y.__value="";var P=d(y);P.value=P.__value="kg";var w=d(P);w.value=w.__value="gr.";var S=d(w);S.value=S.__value="l.";var k=d(S);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var C=d(A);C.value=C.__value="bottes";var R=d(p,2),F=u(R),j=d(R,2),W=u(j);W.__click=[hd,r];var re=d(i,2);{var te=I=>{var K=pd(),ne=u(K);Xn(ne,{class:"mx-auto mb-2 h-12 w-12"}),h(I,K)},D=I=>{var K=gd(),ne=u(K),N=d(u(ne),2),Q=u(N),ie=d(u(Q),2),oe=u(ie),ue=d(Q,2),be=d(u(ue),2),xe=u(be),B=d(ue,2);{var me=Re=>{var Qe=md(),pe=d(u(Qe),2),ye=u(pe);G(()=>L(ye,r().stockParsed.notes)),h(Re,Qe)};M(B,Re=>{r().stockParsed.notes&&Re(me)})}var q=d(N,2),le=u(q);le.__click=[fd,r];var ke=u(le);{var je=Re=>{var Qe=_d();h(Re,Qe)},Be=Re=>{var Qe=mt("Supprimer le stock");h(Re,Qe)};M(ke,Re=>{r().loading?Re(je):Re(Be,!1)})}G(Re=>{L(oe,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),L(xe,Re),le.disabled=r().loading},[()=>An(r().stockParsed.dateTime)]),h(I,K)};M(re,I=>{r().stockParsed?I(D,!1):I(te)})}G(I=>{L(f,`Déclarer le stock réel du ${I??""}`),W.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),Me(x,()=>r().forms.stock.quantity,I=>r().forms.stock.quantity=I),Yt(b,()=>r().forms.stock.unit,I=>r().forms.stock.unit=I),Me(F,()=>r().forms.stock.notes,I=>r().forms.stock.notes=I),h(e,n),U()}Je(["click"]);function wd(e,t,r){t().forms.who=[...t().whoList],$(r,"")}var Sd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},Pd=E('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function xd(e,t){V(t,!0);let r=Ne(t,"modalState",7),n=H("");const a=X(()=>{const C=new Set([...Z.uniqueWho,...r().forms.who]);return Array.from(C).map(R=>({id:R,label:R,selected:r().forms.who.includes(R)}))});function s(C){const R=C.trim();R&&!r().forms.who.includes(R)&&(r().forms.who=[...r().forms.who,R])}function i(C){r().forms.who=r().forms.who.filter(R=>R!==C)}function l(C){r().forms.who.includes(C)?i(C):s(C)}function c(){o(n).trim()&&(s(o(n)),$(n,""))}var f=Pd(),v=u(f),_=u(v),p=d(u(_),4),m=u(p),g=u(m),x=u(g);Zr(x,{class:"h-4 w-4 opacity-50"});var b=d(x,2);b.__keydown=[Sd,c];var y=d(g,2);y.__click=c;var P=u(y);Ro(P,{size:16});var w=d(m,2),S=d(u(w),2);Kr(S,{get items(){return o(a)},onToggleItem:l,showIcon:!0});var k=d(p,2),A=u(k);A.__click=[wd,r,n],G(C=>{b.disabled=r().loading,y.disabled=C,A.disabled=r().loading},[()=>r().loading||!o(n).trim()]),Me(b,()=>o(n),C=>$(n,C)),h(e,f),U()}Je(["keydown","click"]);var Ed=E('<div class="mb-1 text-xs opacity-70"> </div>'),$d=(e,t,r)=>t(o(r)),kd=E("<button><!> </button>"),Ad=E('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function qo(e,t){V(t,!0);let r=Ne(t,"maxSuggestions",3,8),n=Ne(t,"title",3,"Suggestions :"),a=Ne(t,"buttonSize",3,"btn-xs"),s=Ne(t,"buttonVariant",3,"btn-soft"),i=Ne(t,"disabled",3,!1);const l=X(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=z(),v=O(f);{var _=p=>{var m=Ad(),g=u(m);{var x=y=>{var P=Ed(),w=u(P);G(()=>L(w,n())),h(y,P)};M(g,y=>{n()&&y(x)})}var b=d(g,2);it(b,21,()=>o(l),y=>y.id,(y,P)=>{var w=kd();w.__click=[$d,c,P];var S=u(w);{var k=C=>{var R=z(),F=O(R);er(F,()=>o(P).icon,(j,W)=>{W(j,{class:"h-3 w-3"})}),h(C,R)};M(S,C=>{o(P).icon&&C(k)})}var A=d(S);G(()=>{$e(w,1,`btn ${a()??""} ${s()??""}`),w.disabled=i()||o(P).disabled,Ut(w,"title",o(P).disabled?"Déjà sélectionné":o(P).label),L(A,` ${o(P).label??""}`)}),h(y,w)}),h(p,m)};M(v,p=>{o(l).length>0&&p(_)})}h(e,f),U()}Je(["click"]);var Td=(e,t)=>{e.key==="Enter"&&t()},Nd=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},Cd=E(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function Md(e,t){V(t,!0);let r=Ne(t,"modalState",7);const n=X(()=>r()?.hasChanges?.store||!1);async function a(){if(!o(n))return;const P={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(P)}var s=Cd(),i=u(s),l=u(i),c=d(u(l),4),f=u(c),v=u(f),_=u(v);Gt(_,{class:"h-4 w-4 opacity-50"});var p=d(_,2);p.__keydown=[Td,a];var m=d(v,2);{var g=P=>{{let w=X(()=>Z.uniqueStores.map(S=>({id:S,label:S,disabled:S===r().forms.store.name})));qo(P,{get suggestions(){return o(w)},onSuggestionClick:S=>{r().forms.store.name=S.label},buttonVariant:"btn-outline"})}};M(m,P=>{Z.uniqueStores.length>0&&P(g)})}var x=d(f,2),b=d(c,2),y=u(b);y.__click=[Nd,r],G(()=>y.disabled=r().loading),Me(p,()=>r().forms.store.name,P=>r().forms.store.name=P),Me(x,()=>r().forms.store.comment,P=>r().forms.store.comment=P),h(e,s),U()}Je(["keydown","click"]);async function Id(e,t,r,n,a,s){if(!t.modalState)return;const i={totalOverride:{q:o(r),u:o(n)},comment:o(a)};await t.modalState.setOverride(i),$(s,!1)}async function Dd(e,t,r){t.modalState&&(await t.modalState.removeOverride(),$(r,!1))}var Rd=E('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),Od=E('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),qd=E(" <!>",1),jd=(e,t)=>$(t,!0),Bd=E('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),Ld=E('<div class="text-error text-sm">Limite de caractères atteinte</div>'),zd=E('<span class="loading loading-spinner loading-sm"></span>'),Vd=E('<span class="loading loading-spinner loading-sm"></span>'),Ud=E(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),Wd=E('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function Gd(e,t){V(t,!0);const r=X(()=>t.modalState.product?.totalNeededOverrideParsed),n=X(()=>t.modalState.product?.displayTotalNeeded||[]);let a=H(!1),s=H(Ce(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=H(Ce(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=H(Ce(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),c=X(()=>o(s)>0&&o(i).trim()!=="");var f=Wd(),v=u(f),_=u(v),p=u(_);{var m=x=>{var b=Bd(),y=O(b),P=u(y),w=d(u(P),2);{var S=j=>{var W=Rd();h(j,W)};M(w,j=>{o(r)&&j(S)})}var k=d(w,2),A=u(k);{var C=j=>{var W=qd(),re=O(W),te=d(re);{var D=I=>{var K=Od(),ne=u(K);ba(ne,{});var N=d(ne);G(()=>L(N,` ${o(r).comment??""}`)),h(I,K)};M(te,I=>{o(r).comment&&I(D)})}G(I=>L(re,`${I??""} `),[()=>kn(o(r).totalOverride.q,o(r).totalOverride.u)]),h(j,W)},R=j=>{var W=mt();G(()=>L(W,o(n))),h(j,W)};M(A,j=>{o(r)?j(C):j(R,!1)})}var F=d(y,2);F.__click=[jd,a],h(x,b)},g=x=>{var b=Ud(),y=O(b),P=u(y),w=u(P);cu(w,{class:"h-4 w-4 opacity-50"});var S=d(w,2),k=d(P,2),A=u(k);A.value=A.__value="";var C=d(A);C.value=C.__value="kg";var R=d(C);R.value=R.__value="gr.";var F=d(R);F.value=F.__value="l.";var j=d(F);j.value=j.__value="ml";var W=d(j);W.value=W.__value="unité";var re=d(W);re.value=re.__value="bottes";var te=d(y,2),D=u(te),I=d(u(D),2),K=d(I,2);{var ne=q=>{var le=Ld();h(q,le)};M(K,q=>{o(l).length>=250&&q(ne)})}var N=d(te,2),Q=u(N);Q.__click=[Dd,t,a];var ie=u(Q);{var oe=q=>{var le=zd();h(q,le)},ue=q=>{var le=mt();G(()=>L(le,`Réinitialiser le total calculé (${o(n)??""}).`)),h(q,le)};M(ie,q=>{t.modalState.loading?q(oe):q(ue,!1)})}var be=d(Q,2);be.__click=[Id,t,s,i,l,a];var xe=u(be);{var B=q=>{var le=Vd();h(q,le)},me=q=>{var le=mt("Appliquer");h(q,le)};M(xe,q=>{t.modalState.loading?q(B):q(me,!1)})}G(()=>{Q.disabled=t.modalState.loading,be.disabled=t.modalState.loading||!o(c)}),Me(S,()=>o(s),q=>$(s,q)),Yt(k,()=>o(i),q=>$(i,q)),Me(I,()=>o(l),q=>$(l,q)),h(x,b)};M(p,x=>{o(a)?x(g,!1):x(m)})}G(()=>$e(v,1,`card border-base-300 border ${o(a)?"bg-base-200":"bg-base-100"}`)),h(e,f),U()}Je(["click"]);var Qd=E('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Hd=E('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Kd=E('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Jd=E('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Yd(e,t){V(t,!0);const r=X(()=>t.modalState.recipes);var n=Jd(),a=O(n);Gd(a,{get modalState(){return t.modalState}});var s=d(a,2),i=u(s),l=u(i);ga(l,{class:"h-5 w-5"});var c=d(i,2);{var f=_=>{var p=Qd(),m=u(p);Yr(m,{class:"mx-auto mb-2 h-12 w-12"}),h(_,p)},v=_=>{var p=Kd(),m=u(p),g=d(u(m));it(g,21,()=>o(r),x=>x.r,(x,b)=>{var y=Hd(),P=u(y),w=u(P),S=d(P),k=u(S),A=d(S),C=u(A);G(R=>{L(w,`${o(b).r??""} (${(o(b).a||"-")??""} c.)`),L(k,`${(o(b).q||o(b).qEq)??""} ${(o(b).u||o(b).uEq)??""}`),L(C,R)},[()=>An(o(b).date)]),h(x,y)}),h(_,p)};M(c,_=>{o(r).length===0?_(f):_(v,!1)})}h(e,n),U()}function Zd(e,t,r){o(t).saveAllChanges().then(()=>{r.onClose()})}var Xd=E('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Fd=E('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),ef=(e,t)=>t("recettes"),tf=E('<span class="badge badge-sm badge-secondary ml-1"> </span>'),rf=E('<span class="badge badge-sm badge-ghost ml-1">0</span>'),nf=(e,t)=>t("magasins"),af=E('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),sf=(e,t)=>t("volontaires"),of=E('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),lf=E('<span class="badge badge-sm badge-secondary ml-1"> </span>'),cf=E('<span class="badge badge-sm badge-ghost ml-1">0</span>'),uf=(e,t)=>t("stock"),df=E('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),ff=E('<span class="badge badge-sm badge-secondary ml-1">1</span>'),vf=E('<span class="badge badge-sm badge-ghost ml-1">0</span>'),hf=(e,t)=>t("achats"),pf=E('<span class="badge badge-sm badge-secondary ml-1"> </span>'),mf=E('<span class="badge badge-sm badge-ghost ml-1">0</span>'),_f=E('<div class="alert alert-error mb-4"><!> <span> </span></div>'),gf=E('<span class="loading loading-spinner loading-sm"></span>'),bf=E('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),yf=E('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function wf(e,t){V(t,!0);let r=Ne(t,"initialTab",3,"recettes"),n=X(()=>Yu(t.productId)),a=H(Ce(r()));function s(b){$(a,b,!0)}var i=yf(),l=u(i),c=u(l),f=u(c);{var v=b=>{var y=Xd(),P=O(y),w=u(P),S=d(P,2),k=u(S),A=u(k),C=d(k,2),R=d(u(C));G(()=>{L(w,o(n).product?.productName),L(A,o(n).product?.productType),L(R,` ${o(n).product?.displayTotalNeeded??""}`)}),h(b,y)},_=b=>{var y=Fd();h(b,y)};M(f,b=>{o(n)&&o(n).product?b(v):b(_,!1)})}var p=d(f,2);p.__click=function(...b){t.onClose?.apply(this,b)};var m=u(p);bt(m,{class:"h-4 w-4"});var g=d(c,2);{var x=b=>{var y=bf(),P=O(y),w=u(P);w.__click=[ef,s];var S=u(w);ga(S,{class:"mr-1 h-5 w-5"});var k=d(S,2);{var A=J=>{var ge=tf(),ze=u(ge);G(()=>L(ze,o(n).product?.nbRecipes)),h(J,ge)},C=J=>{var ge=rf();h(J,ge)};M(k,J=>{o(n).product?.nbRecipes&&o(n).product?.nbRecipes>0?J(A):J(C,!1)})}var R=d(w,2);R.__click=[nf,s];var F=u(R);Gt(F,{class:"mr-1 h-5 w-5"});var j=d(F,2);{var W=J=>{var ge=af();h(J,ge)};M(j,J=>{o(n).hasChanges?.store&&J(W)})}var re=d(R,2);re.__click=[sf,s];var te=u(re);ea(te,{class:"mr-1 h-5 w-5"});var D=d(te,2);{var I=J=>{var ge=of();h(J,ge)},K=J=>{var ge=z(),ze=O(ge);{var rt=Ie=>{var Ue=lf(),kt=u(Ue);G(()=>L(kt,o(n).product?.who.length)),h(Ie,Ue)},_e=Ie=>{var Ue=cf();h(Ie,Ue)};M(ze,Ie=>{o(n).product?.who&&o(n).product?.who.length>0?Ie(rt):Ie(_e,!1)},!0)}h(J,ge)};M(D,J=>{o(n).hasChanges?.who?J(I):J(K,!1)})}var ne=d(re,2);ne.__click=[uf,s];var N=u(ne);Xn(N,{class:"mr-1 h-5 w-5"});var Q=d(N,2);{var ie=J=>{var ge=df();h(J,ge)},oe=J=>{var ge=z(),ze=O(ge);{var rt=Ie=>{var Ue=ff();h(Ie,Ue)},_e=Ie=>{var Ue=vf();h(Ie,Ue)};M(ze,Ie=>{o(n).stockParsed?Ie(rt):Ie(_e,!1)},!0)}h(J,ge)};M(Q,J=>{o(n).hasChanges?.stock?J(ie):J(oe,!1)})}var ue=d(ne,2);ue.__click=[hf,s];var be=u(ue);zt(be,{class:"mr-1 h-5 w-5"});var xe=d(be,2);{var B=J=>{var ge=pf(),ze=u(ge);G(()=>L(ze,o(n).purchasesList.length)),h(J,ge)},me=J=>{var ge=mf();h(J,ge)};M(xe,J=>{o(n).purchasesList.length>0?J(B):J(me,!1)})}var q=d(P,2),le=u(q);{var ke=J=>{var ge=_f(),ze=u(ge);bt(ze,{class:"h-4 w-4"});var rt=d(ze,2),_e=u(rt);G(()=>L(_e,`erreur : ${o(n).error??""}`)),h(J,ge)};M(le,J=>{o(n).error&&J(ke)})}var je=d(le,2),Be=u(je);dl(Be,()=>o(a),J=>{var ge=z(),ze=O(ge);{var rt=Ie=>{Yd(Ie,{get modalState(){return o(n)}})},_e=Ie=>{var Ue=z(),kt=O(Ue);{var At=Y=>{dd(Y,{get modalState(){return o(n)}})},Ht=Y=>{var we=z(),Ae=O(we);{var We=et=>{yd(et,{get modalState(){return o(n)}})},Le=et=>{var ct=z(),ee=O(ct);{var he=Te=>{xd(Te,{get modalState(){return o(n)}})},Se=Te=>{var Ze=z(),Ge=O(Ze);{var Ye=He=>{Md(He,{get modalState(){return o(n)}})};M(Ge,He=>{o(a)==="magasins"&&He(Ye)},!0)}h(Te,Ze)};M(ee,Te=>{o(a)==="volontaires"?Te(he):Te(Se,!1)},!0)}h(et,ct)};M(Ae,et=>{o(a)==="stock"?et(We):et(Le,!1)},!0)}h(Y,we)};M(kt,Y=>{o(a)==="achats"?Y(At):Y(Ht,!1)},!0)}h(Ie,Ue)};M(ze,Ie=>{o(a)==="recettes"?Ie(rt):Ie(_e,!1)})}h(J,ge)});var Re=d(q,2),Qe=u(Re);Qe.__click=function(...J){t.onClose?.apply(this,J)};var pe=u(Qe),ye=d(Qe,2);ye.__click=[Zd,n,t];var st=u(ye);{var ft=J=>{var ge=gf();h(J,ge)},ve=J=>{var ge=mt("Tout enregistrer");h(J,ge)};M(st,J=>{o(n).loading?J(ft):J(ve,!1)})}G(()=>{$e(w,1,`tab ${o(a)==="recettes"?"tab-active":""}`),$e(R,1,`tab ${o(a)==="magasins"?"tab-active":""}`),$e(re,1,`tab ${o(a)==="volontaires"?"tab-active":""}`),$e(ne,1,`tab ${o(a)==="stock"?"tab-active":""}`),$e(ue,1,`tab ${o(a)==="achats"?"tab-active":""}`),L(pe,o(n)?.hasAnyChanges?"Annuler":"Fermer"),ye.disabled=o(n).loading||!o(n).hasAnyChanges}),h(b,y)};M(g,b=>{o(n)&&b(x)})}h(e,i),U()}Je(["click"]);var Sf=(e,t,r)=>t(r),Pf=E("<button><span> </span> <!></button>"),xf=(e,t)=>t(),Ef=E('<div class="flex justify-end"><button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button></div>'),$f=E('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),kf=E('<div class=" flex flex-wrap gap-1"></div> <!>',1);function Af(e,t){V(t,!0);let r=Ne(t,"availableDates",19,()=>[]),n=Ne(t,"currentRange",19,()=>({start:null,end:null})),a=H(Ce(n().start)),s=H(Ce(n().end));const i=X(()=>r().length>0&&o(a)===r()[0]&&o(s)===r()[r().length-1]);lr(()=>{$(a,n().start,!0),$(s,n().end,!0)});function l(y){o(a)===y&&o(s)===y?_():new Date(y)<new Date(o(a))?$(a,y,!0):(new Date(y)>new Date(o(s))||$(a,y,!0),$(s,y,!0)),t.onRangeChange(o(a),o(s))}function c(y){return new Date(y)>=new Date(o(a))&&new Date(y)<=new Date(o(s))?"btn-soft btn-secondary":"btn-dash btn-secondary opacity-80"}function f(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function v(y){const w=new Date(y).getUTCHours();return w===12?"sun":w===20?"moon":w===8?"cloud":null}function _(){r().length!==0&&($(a,r()[0],!0),$(s,r()[r().length-1],!0),t.onRangeChange(o(a),o(s)))}var p=kf(),m=O(p);it(m,22,r,y=>y,(y,P)=>{var w=Pf();w.__click=[Sf,l,P];var S=u(w),k=u(S),A=d(S,2);{var C=F=>{mu(F,{size:16})},R=F=>{var j=z(),W=O(j);{var re=D=>{iu(D,{size:16})},te=D=>{var I=z(),K=O(I);{var ne=N=>{Jc(N,{size:16})};M(K,N=>{v(P)==="cloud"&&N(ne)},!0)}h(D,I)};M(W,D=>{v(P)==="moon"?D(re):D(te,!1)},!0)}h(F,j)};M(A,F=>{v(P)==="sun"?F(C):F(R,!1)})}G((F,j)=>{$e(w,1,`btn btn-sm ${F??""}`),L(k,j)},[()=>c(P),()=>f(P)]),h(y,w)});var g=d(m,2);{var x=y=>{var P=Ef(),w=u(P);w.__click=[xf,_],h(y,P)},b=y=>{var P=$f();h(y,P)};M(g,y=>{o(i)?y(b,!1):y(x)})}h(e,p),U()}Je(["click"]);var Tf=E("<fieldset><legend><!> </legend> <!></fieldset>");function sn(e,t){let r=Ne(t,"bgClass",3,"bg-base-100");var n=Tf(),a=u(n),s=u(a);{var i=f=>{const v=X(()=>t.iconComponent);var _=z(),p=O(_);er(p,()=>o(v),(m,g)=>{g(m,{size:16,class:"mr-1"})}),h(f,_)};M(s,f=>{t.iconComponent&&f(i)})}var l=d(s),c=d(a,2);se(c,()=>t.children??ae),G(()=>{$e(n,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),$e(a,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),L(l,` ${t.legend??""}`)}),h(e,n)}var Nf=()=>Z.clearFilters(),Cf=e=>Z.setSearchQuery(e.currentTarget.value),Mf=()=>Z.setGroupBy("none"),If=()=>Z.setGroupBy("store"),Df=()=>Z.setGroupBy("productType"),Rf=()=>Z.clearTypeAndTemperatureFilters(),Of=E('<button class="btn btn-xs btn-link text-accent flex items-center text-end" title="Effacer les filtres de types et température"><!> Réinitialiser les filtres</button>'),qf=(e,t)=>Z.toggleProductType(t),jf=E("<button><!> </button>"),Bf=()=>Z.toggleTemperature("frais"),Lf=()=>Z.toggleTemperature("surgele"),zf=E('<!> <div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div>',1),Vf=(e,t)=>Z.toggleStore(t),Uf=E("<button> </button>"),Wf=()=>Z.clearStoreFilters(),Gf=E('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Qf=E('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Hf=(e,t)=>Z.toggleWho(t),Kf=E("<button> </button>"),Jf=()=>Z.clearWhoFilters(),Yf=E('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Zf=E('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Xf=E('<div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Ff(e,t){V(t,!0);const r=X(()=>Z.filters),n=X(()=>Z.uniqueStores),a=X(()=>Z.uniqueWho),s=X(()=>Z.uniqueProductTypes);var i=Xf(),l=O(i),c=u(l),f=u(c);Mo(f,{class:"h-5 w-5"});var v=d(c,2);v.__click=[Nf];var _=u(v);bt(_,{class:"h-4 w-4"});var p=d(l,2),m=u(p),g=d(u(m),2),x=u(g);pu(x,{class:"h-4 w-4"});var b=d(x,2);b.__input=[Cf];var y=d(m,2),P=d(u(y),2),w=u(P);w.__change=[Mf];var S=d(w,2);S.__change=[If];var k=d(S,2);k.__change=[Df];var A=d(y,2);sn(A,{legend:"Date incluses",bgClass:"bg-base-100",children:(te,D)=>{Af(te,{get availableDates(){return Z.availableDates},get currentRange(){return Z.dateRange},onRangeChange:(I,K)=>Z.setDateRange(I,K)})},$$slots:{default:!0}});var C=d(A,2);{var R=te=>{sn(te,{legend:"Types & Température",get iconComponent(){return _u},children:(D,I)=>{var K=zf(),ne=O(K);{var N=B=>{var me=Of();me.__click=[Rf];var q=u(me);Xc(q,{size:14}),h(B,me)};M(ne,B=>{(o(r).selectedProductTypes.length>0||o(r).selectedTemperatures.length>0)&&B(N)})}var Q=d(ne,2);it(Q,20,()=>o(s),B=>B,(B,me)=>{const q=X(()=>ra(me));var le=jf();le.__click=[qf,me];var ke=u(le);er(ke,()=>o(q).icon,(Be,Re)=>{Re(Be,{class:"mr-1 h-5 w-5"})});var je=d(ke);G(Be=>{$e(le,1,`btn btn-sm ${Be??""}`),L(je,` ${o(q).displayName??""}`)},[()=>o(r).selectedProductTypes.length===0?"btn-soft btn-secondary":o(r).selectedProductTypes.includes(me)?"btn-secondary":"btn-dash btn-secondary"]),h(B,le)});var ie=d(Q,2),oe=u(ie);oe.__click=[Bf];var ue=u(oe);Io(ue,{class:"h-5 w-5"});var be=d(oe,2);be.__click=[Lf];var xe=u(be);Do(xe,{class:"h-5 w-5"}),G((B,me)=>{$e(oe,1,`btn btn-sm ${B??""}`),$e(be,1,`btn btn-sm ${me??""}`)},[()=>o(r).selectedTemperatures.length===0?"btn-soft btn-success":o(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>o(r).selectedTemperatures.length===0?"btn-soft btn-info":o(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(D,K)},$$slots:{default:!0}})};M(C,te=>{o(s).length>0&&te(R)})}var F=d(C,2);{var j=te=>{sn(te,{legend:"Magasins",get iconComponent(){return Gt},children:(D,I)=>{var K=Qf(),ne=u(K);it(ne,16,()=>o(n),ie=>ie,(ie,oe)=>{var ue=Uf();ue.__click=[Vf,oe];var be=u(ue);G(xe=>{$e(ue,1,`btn btn-xs ${xe??""}`),L(be,oe)},[()=>o(r).selectedStores.length===0?"btn-soft btn-secondary":o(r).selectedStores.includes(oe)?"btn-secondary":"btn-dash btn-secondary"]),h(ie,ue)});var N=d(ne,2);{var Q=ie=>{var oe=Gf();oe.__click=[Wf];var ue=u(oe);bt(ue,{class:"h-3 w-3"}),h(ie,oe)};M(N,ie=>{o(r).selectedStores.length>0&&ie(Q)})}h(D,K)},$$slots:{default:!0}})};M(F,te=>{o(n).length>0&&te(j)})}var W=d(F,2);{var re=te=>{sn(te,{legend:"Qui",get iconComponent(){return Zr},children:(D,I)=>{var K=Zf(),ne=u(K);it(ne,16,()=>o(a),ie=>ie,(ie,oe)=>{var ue=Kf();ue.__click=[Hf,oe];var be=u(ue);G(xe=>{$e(ue,1,`btn btn-xs ${xe??""}`),L(be,oe)},[()=>o(r).selectedWho.length===0?" btn-soft btn-secondary":o(r).selectedWho.includes(oe)?" btn-secondary":"btn-dash btn-secondary"]),h(ie,ue)});var N=d(ne,2);{var Q=ie=>{var oe=Yf();oe.__click=[Jf];var ue=u(oe);bt(ue,{class:"h-3 w-3"}),h(ie,oe)};M(N,ie=>{o(r).selectedWho.length>0&&ie(Q)})}h(D,K)},$$slots:{default:!0}})};M(W,te=>{o(a).length>0&&te(re)})}G(()=>{yl(b,o(r).searchQuery),On(w,o(r).groupBy==="none"),On(S,o(r).groupBy==="store"),On(k,o(r).groupBy==="productType")}),h(e,i),U()}Je(["click","input","change"]);Je(["click"]);var ev=E('<div class="tooltip text-xs font-normal"><!></div>');function tv(e,t){let r=Ne(t,"iconSize",3,24),n=t.icon||void 0;var a=ev(),s=u(a);{var i=l=>{n(l,{get size(){return r()},class:`align-top
`})};M(s,l=>{t.icon&&l(i)})}G(()=>Ut(a,"data-tip",t.tip)),h(e,a)}var rv=E('<div class="text-neutral-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),nv=(e,t,r)=>t.onOpenGroupEditModal("store",r().map(n=>n.$id),r()),av=(e,t,r)=>t.onOpenGroupEditModal("who",r().map(n=>n.$id),r()),sv=(e,t,r)=>t.onOpenGroupPurchaseModal(r()),ov=E(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> Achat groupé <!></button>`),iv=E('<div class="bg-neutral sticky top-0 z-10 flex items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-lg"><div class="flex min-w-48 items-center gap-2"><!></div> <div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> Magasin <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> Volontaires <!></button> <!></div></div>'),lv=(e,t,r)=>t.onOpenModal(o(r).$id,"recettes"),cv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"recettes"),uv=E('<div class="text-base-content/60 text-sm font-normal"> </div>'),dv=E('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),fv=E('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),vv=E('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),hv=(e,t,r)=>t.onOpenModal(o(r).$id,"magasins"),pv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"magasins"),mv=E('<div class="ml-1"><!></div>'),_v=E('<div class="ml-1"> </div> <!>',1),gv=E('<div class="ml-1 text-sm font-medium">?</div>'),bv=(e,t,r)=>t.onOpenModal(o(r).$id,"volontaires"),yv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"volontaires"),wv=E('<span class="text-base-content/50 text-xs"> </span>'),Sv=E('<div class="ml-1 flex gap-1"> <!></div>'),Pv=E('<div class="ml-1 text-sm font-medium">?</div>'),xv=(e,t,r)=>t.onOpenModal(o(r).$id,"recettes"),Ev=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"recettes"),$v=E('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),kv=(e,t,r)=>{e.stopPropagation(),t.onQuickValidation(o(r))},Av=E('<button class="btn btn-sm btn-soft btn-warning hover:bg-success/70 hover:border-success/70"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M.625 0a.625.625 0 1 0 0 1.25h1.818l.205 1.94l.644 6.105a1.626 1.626 0 0 0 1.619 1.455h6.208c.746 0 1.397-.506 1.579-1.23l1.253-5a1.626 1.626 0 0 0-1.579-2.02h-8.54L3.627.56A.625.625 0 0 0 3.006 0zm3.91 9.164L3.964 3.75h8.408c.247 0 .425.23.366.466l-1.253 5a.38.38 0 0 1-.366.284H4.911a.376.376 0 0 1-.376-.336m5.72-3.134a.75.75 0 0 0-1.129-.988l-1.48 1.69l-.526-.395a.75.75 0 1 0-.9 1.2l1.083.813a.75.75 0 0 0 1.015-.106zm1.816 6.845a1.125 1.125 0 1 0-2.25 0a1.125 1.125 0 0 0 2.25 0M4.446 11.75a1.125 1.125 0 1 1 0 2.25a1.125 1.125 0 0 1 0-2.25" clip-rule="evenodd"></path></svg> <span class="text-xs"> </span></button>'),Tv=(e,t,r)=>t.onOpenModal(o(r).$id,"achats"),Nv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"achats"),Cv=E('<div><!> <span class="text-sm font-medium"> </span></div>'),Mv=E('<span class="text-base-content/50 text-xs italic">aucun</span>'),Iv=E('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="jus flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!></div> <div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div></div> <div class="flex flex-wrap gap-3"><div class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex gap-4"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins:</div> <div class="flex items-center gap-4"><div> </div> <!></div></div> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 relative min-w-[200px] flex-1 cursor-pointer rounded-lg p-3 transition-colors hover:ring-2 hover:ring-amber-200" role="button" tabindex="0"><div class="flex items-center justify-between gap-2"><div class="flex flex-col gap-0"><div class="text-base-content/80 flex items-center justify-between gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div class="text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity group-hover:opacity-100 sm:opacity-0">ajouter un achat</div></div> <div class="flex flex-wrap gap-1.5"><!> <!></div></div></div></div></div></div>'),Dv=E('<!> <div class="space-y-1"></div>',1),Rv=E('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Ov=E('<div class="space-y-4 rounded-lg"></div> <!>',1);function qv(e,t){V(t,!0);const r={Package:Yr,MessageCircleQuestionMark:ou,ShoppingCart:zt,Clock:Kc,CircleCheck:Gc,CircleX:Qc,ClipboardCheck:Hc,PackageCheck:lu},n=X(()=>Z.groupedFilteredProducts),a=X(()=>Z.filters);var s=Ov(),i=O(s);it(i,21,()=>Object.entries(o(n)),([f,v])=>f,(f,v)=>{var _=X(()=>ls(o(v),2));let p=()=>o(_)[0],m=()=>o(_)[1];var g=Dv(),x=O(g);{var b=P=>{const w=X(()=>ra(p()));var S=iv(),k=u(S),A=u(k);{var C=N=>{var Q=mt();G(()=>L(Q,`🏪 ${p()??""} (${m().length??""})`)),h(N,Q)},R=N=>{var Q=z(),ie=O(Q);{var oe=be=>{var xe=rv(),B=u(xe);er(B,()=>o(w).icon,(je,Be)=>{Be(je,{class:"h-4 w-4"})});var me=d(B,2),q=u(me),le=d(me,2),ke=u(le);G(()=>{L(q,o(w).displayName),L(ke,`(${m().length??""})`)}),h(be,xe)},ue=be=>{var xe=mt();G(()=>L(xe,`📦 ${p()??""} (${m().length??""})`)),h(be,xe)};M(ie,be=>{o(a).groupBy==="productType"?be(oe):be(ue,!1)},!0)}h(N,Q)};M(A,N=>{o(a).groupBy==="store"?N(C):N(R,!1)})}var F=d(k,2),j=u(F);j.__click=[nv,t,m];var W=u(j);Gt(W,{size:16});var re=d(W,2);Fn(re,{size:16});var te=d(j,2);te.__click=[av,t,m];var D=u(te);ea(D,{size:16});var I=d(D,2);Fn(I,{size:16});var K=d(te,2);{var ne=N=>{var Q=ov();Q.__click=[sv,t,m];var ie=u(Q);zt(ie,{size:16});var oe=d(ie,2);Fa(oe,{size:16}),h(N,Q)};M(K,N=>{m().some(Q=>Q.displayMissingQuantity!=="✅ Complet")&&N(ne)})}h(P,S)};M(x,P=>{p()!==""&&P(b)})}var y=d(x,2);it(y,21,()=>Hu(m()||[],o(a)),P=>P.$id,(P,w)=>{const S=X(()=>Z.productsStatsByDateRange.get(o(w).$id)||{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedAvailableQuantities:"Équilibré",hasAvailable:!1,hasMissing:!1}),k=X(()=>ra(o(w).productType)),A=X(()=>Ku(o(w).purchases||[]));var C=Iv(),R=u(C),F=u(R),j=u(F);j.__click=[lv,t,w],j.__keydown=[cv,t,w];var W=u(j),re=u(W);er(re,()=>o(k).icon,(ee,he)=>{he(ee,{class:"text-base-content/80 h-4 w-4"})});var te=d(re),D=d(te);{var I=ee=>{var he=uv(),Se=u(he);G(()=>L(Se,`Ancien: ${o(w).previousNames[0]??""}`)),h(ee,he)};M(D,ee=>{o(w).previousNames&&o(w).previousNames.length>0&&ee(I)})}var K=d(W,2),ne=u(K);{var N=ee=>{var he=dv(),Se=u(he);Io(Se,{class:"text-success h-4 w-4"}),h(ee,he)};M(ne,ee=>{o(w).pFrais&&ee(N)})}var Q=d(ne,2);{var ie=ee=>{var he=fv(),Se=u(he);Do(Se,{class:"text-info h-4 w-4"}),h(ee,he)};M(Q,ee=>{o(w).pSurgel&&ee(ie)})}var oe=d(K,2);{var ue=ee=>{var he=vv(),Se=u(he);nu(Se,{class:"h-4 w-4 animate-spin"}),h(ee,he)};M(oe,ee=>{o(w).status==="isSyncing"&&ee(ue)})}var be=d(j,2),xe=u(be);xe.__click=[hv,t,w],xe.__keydown=[pv,t,w];var B=u(xe);Gt(B,{size:18});var me=d(B,2);{var q=ee=>{var he=_v(),Se=O(he),Te=u(Se),Ze=d(Se,2);{var Ge=Ye=>{var He=mv(),Ot=u(He);tv(Ot,{get tip(){return o(w).storeInfo.storeComment},get icon(){return su},iconSize:14}),h(Ye,He)};M(Ze,Ye=>{o(w).storeInfo?.storeComment&&Ye(Ge)})}G(()=>L(Te,o(w).storeInfo.storeName)),h(ee,he)},le=ee=>{var he=gv();h(ee,he)};M(me,ee=>{o(w).storeInfo?.storeName?ee(q):ee(le,!1)})}var ke=d(xe,2);ke.__click=[bv,t,w],ke.__keydown=[yv,t,w];var je=u(ke);ea(je,{size:18});var Be=d(je,2);{var Re=ee=>{var he=Sv(),Se=u(he),Te=d(Se);{var Ze=Ge=>{var Ye=wv(),He=u(Ye);G(()=>L(He,`+${o(w).who.length-2}`)),h(Ge,Ye)};M(Te,Ge=>{o(w).who.length>2&&Ge(Ze)})}G(Ge=>L(Se,`${Ge??""} `),[()=>o(w).who.slice(0,2).map(Ge=>Ge.slice(0,3)).join(" | ")]),h(ee,he)},Qe=ee=>{var he=Pv();h(ee,he)};M(Be,ee=>{o(w).who&&o(w).who.length>0?ee(Re):ee(Qe,!1)})}var pe=d(F,2),ye=u(pe);ye.__click=[xv,t,w],ye.__keydown=[Ev,t,w];var st=u(ye),ft=u(st),ve=u(ft);ru(ve,{class:"h-4 w-4"});var J=d(ft,2),ge=u(J),ze=u(ge),rt=d(ge,2);{var _e=ee=>{var he=$v(),Se=u(he),Te=u(Se),Ze=d(Te);ga(Ze,{class:"h-3 w-3"});var Ge=d(Se,2),Ye=u(Ge),He=d(Ye);gu(He,{class:"h-3 w-3"}),G(()=>{L(Te,`${o(S).nbRecipes??""} `),L(Ye,`${o(S).totalAssiettes??""} `)}),h(ee,he)};M(rt,ee=>{(o(S).nbRecipes||o(S).totalAssiettes)&&ee(_e)})}var Ie=d(st,2);{var Ue=ee=>{var he=Av();he.__click=[kv,t,w];var Se=d(u(he),2),Te=u(Se);G(()=>{Ut(he,"title",`Acheter le manquant (${o(S).formattedAvailableQuantities??""})`),L(Te,o(S).formattedAvailableQuantities)}),h(ee,he)},kt=ee=>{Fa(ee,{size:24,class:"text-success"})};M(Ie,ee=>{o(S).hasMissing?ee(Ue):ee(kt,!1)})}var At=d(ye,2);At.__click=[Tv,t,w],At.__keydown=[Nv,t,w];var Ht=u(At),Y=u(Ht),we=u(Y),Ae=u(we);zt(Ae,{class:"h-4 w-4"});var We=d(Y,2),Le=u(We);it(Le,17,()=>o(A),ee=>ee.status,(ee,he)=>{const Se=X(()=>r[o(he).icon]);var Te=Cv(),Ze=u(Te);er(Ze,()=>o(Se),(He,Ot)=>{Ot(He,{class:"h-4 w-4"})});var Ge=d(Ze,2),Ye=u(Ge);G(He=>{$e(Te,1,`badge badge-outline flex items-center gap-1 ${o(he).badgeClass??""}`),L(Ye,He)},[()=>kn(o(he).quantity,o(he).unit)]),h(ee,Te)});var et=d(Le,2);{var ct=ee=>{var he=Mv();h(ee,he)};M(et,ee=>{o(A).length===0&&ee(ct)})}G(()=>{$e(C,1,`card bg-base-100 border-base-300 ${o(w).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),L(te,`${o(w).productName??""} `),$e(xe,1,`btn btn-soft btn-sm group relative ${o(w).storeInfo?.storeName?"btn-success":""}`),$e(ke,1,`btn btn-sm btn-soft group relative ${o(w).who?.length>0?"btn-success":""}`),$e(ge,1,`font-bold ${o(S).hasMissing?"text-error":"text-success"}`),L(ze,o(S).formattedQuantities)}),h(P,C)}),h(f,g)});var l=d(i,2);{var c=f=>{var v=Rv();h(f,v)};M(l,f=>{Object.values(o(n)).flat().length===0&&f(c)})}h(e,s),U()}Je(["click","keydown"]);async function jv(e,t,r,n,a,s,i,l,c){if(!(!o(t)||o(r))){$(n,null),$(a,null);try{const f=o(s).map(m=>m.id),v=i.products.filter(m=>f.includes(m.$id));Z.setSyncStatus(f,!0),i.onClose();const _={storeName:o(l).trim(),storeComment:o(c).trim()},p=await To(f,v,_);if($(a,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(f){const v=f instanceof Error?f.message:"Erreur inconnue";$(n,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),Z.clearSyncStatus()}finally{$(r,!1)}}}function ns(e,t,r){o(t)||r.onClose()}var Bv=E('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Lv=(e,t)=>$(t,"empty"),zv=(e,t)=>$(t,"all"),Vv=E('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Uv=E("<!> ",1),Wv=E('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Gv(e,t){V(t,!0);let r=H(!1),n=H(null),a=H(null),s=H(Ce(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=H(Ce(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=H(Ce({})),c=H("empty");lr(()=>{const q={};t.products.forEach(le=>{t.productIds.includes(le.$id)&&(o(c)==="empty"?q[le.$id]=!le.storeInfo||!le.storeInfo.storeName:q[le.$id]=!0)}),$(l,q,!0)});const f=X(()=>t.products.map(q=>({id:q.$id,label:q.productName,title:q.productName,selected:o(l)[q.$id]}))),v=X(()=>o(f).filter(q=>q.selected)),_=X(()=>`Attribuer un magasin (${o(v).length} produits sélectionnés)`),p=X(()=>o(v).length===0?!1:o(s).trim().length>0);function m(q){o(l)[q]=!o(l)[q]}var g=Wv(),x=u(g),b=u(x),y=u(b),P=u(y),w=d(y,2);w.__click=[ns,r,t];var S=u(w);bt(S,{class:"h-4 w-4"});var k=d(b,2),A=u(k);{var C=q=>{var le=Bv(),ke=u(le);$n(ke,{class:"h-4 w-4"});var je=d(ke,2),Be=u(je);G(()=>L(Be,o(n))),h(q,le)};M(A,q=>{o(n)&&q(C)})}var R=d(A,2),F=u(R),j=u(F),W=u(j);Gt(W,{class:"h-4 w-4 opacity-50"});var re=d(W,2),te=d(j,2);{let q=X(()=>Z.uniqueStores.map(le=>({id:le,label:le,disabled:le===o(s)})));qo(te,{get suggestions(){return o(q)},onSuggestionClick:le=>{$(s,le.label,!0)},title:"Suggestions de magasins :"})}var D=d(F,2),I=u(D),K=d(R,2),ne=d(u(K),2),N=u(ne);N.__click=[Lv,c];var Q=d(N,2);Q.__click=[zv,c];var ie=d(ne,2);Kr(ie,{get items(){return o(f)},onToggleItem:m,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var oe=d(k,2),ue=u(oe);ue.__click=[ns,r,t];var be=d(ue,2);be.__click=[jv,p,r,n,a,v,t,s,i];var xe=u(be);{var B=q=>{var le=Vv();h(q,le)},me=q=>{var le=Uv(),ke=O(le);Hr(ke,{class:"h-4 w-4"});var je=d(ke);G(()=>L(je,` Appliquer à ${o(v).length??""} produit(s)`)),h(q,le)};M(xe,q=>{o(r)?q(B):q(me,!1)})}G(()=>{L(P,o(_)),w.disabled=o(r),re.disabled=o(r),I.disabled=o(r),$e(N,1,`tab ${o(c)==="empty"?"tab-active":""}`),$e(Q,1,`tab ${o(c)==="all"?"tab-active":""}`),ue.disabled=o(r),be.disabled=o(r)||!o(p)}),Me(re,()=>o(s),q=>$(s,q)),Me(I,()=>o(i),q=>$(i,q)),h(e,g),U()}Je(["click"]);async function Qv(e,t,r,n,a,s,i,l){if(!(!o(t)||o(r))){$(n,null),$(a,null);try{const c=o(s).map(_=>_.id),f=i.products.filter(_=>c.includes(_.$id));Z.setSyncStatus(c,!0),i.onClose();const v=await No(c,f,o(l),"replace");if($(a,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),i.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";$(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),Z.clearSyncStatus()}finally{$(r,!1)}}}function as(e,t,r){o(t)||r.onClose()}var Hv=E('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Kv=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},Jv=(e,t)=>$(t,"empty"),Yv=(e,t)=>$(t,"all"),Zv=E('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Xv=E("<!> ",1),Fv=E('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function eh(e,t){V(t,!0);let r=H(!1),n=H(null),a=H(null),s=H(Ce([])),i=H(""),l=H("empty"),c=H(Ce({}));lr(()=>{const pe={};t.products.forEach(ye=>{t.productIds.includes(ye.$id)&&(o(l)==="empty"?pe[ye.$id]=!ye.who||ye.who.length===0:pe[ye.$id]=!0)}),$(c,pe,!0)});const f=X(()=>t.products.map(pe=>({id:pe.$id,label:pe.productName,title:pe.productName,selected:o(c)[pe.$id]}))),v=X(()=>o(f).filter(pe=>pe.selected)),_=X(()=>{const pe=new Set([...Z.uniqueWho,...o(s)]);return Array.from(pe).map(ye=>({id:ye,label:ye,selected:o(s).includes(ye)}))}),p=X(()=>`Gérer les volontaires (${o(v).length} produits sélectionnés)`),m=X(()=>o(v).length===0?!1:o(s).length>0);function g(pe){const ye=pe.trim();ye&&!o(s).includes(ye)&&$(s,[...o(s),ye],!0)}function x(pe){$(s,o(s).filter(ye=>ye!==pe),!0)}function b(pe){o(s).includes(pe)?x(pe):g(pe)}function y(){o(i).trim()&&(g(o(i)),$(i,""))}function P(pe){o(c)[pe]=!o(c)[pe]}var w=Fv(),S=u(w),k=u(S),A=u(k),C=u(A),R=d(A,2);R.__click=[as,r,t];var F=u(R);bt(F,{class:"h-4 w-4"});var j=d(k,2),W=u(j);{var re=pe=>{var ye=Hv(),st=u(ye);$n(st,{class:"h-4 w-4"});var ft=d(st,2),ve=u(ft);G(()=>L(ve,o(n))),h(pe,ye)};M(W,pe=>{o(n)&&pe(re)})}var te=d(W,2),D=u(te),I=u(D),K=u(I),ne=u(K);Zr(ne,{class:"h-4 w-4 opacity-50"});var N=d(ne,2);N.__keydown=[Kv,y];var Q=d(K,2);Q.__click=y;var ie=u(Q);Ro(ie,{size:16});var oe=d(I,2),ue=d(u(oe),2);Kr(ue,{get items(){return o(_)},onToggleItem:b,showIcon:!0});var be=d(te,2),xe=d(u(be),2),B=u(xe);B.__click=[Jv,l];var me=d(B,2);me.__click=[Yv,l];var q=d(xe,2);Kr(q,{get items(){return o(f)},onToggleItem:P,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var le=d(j,2),ke=u(le);ke.__click=[as,r,t];var je=d(ke,2);je.__click=[Qv,m,r,n,a,v,t,s];var Be=u(je);{var Re=pe=>{var ye=Zv();h(pe,ye)},Qe=pe=>{var ye=Xv(),st=O(ye);Hr(st,{class:"h-4 w-4"});var ft=d(st);G(()=>L(ft,` Appliquer à ${o(v).length??""} produit(s)`)),h(pe,ye)};M(Be,pe=>{o(r)?pe(Re):pe(Qe,!1)})}G(pe=>{L(C,o(p)),R.disabled=o(r),N.disabled=o(r),Q.disabled=pe,$e(B,1,`tab ${o(l)==="empty"?"tab-active":""}`),$e(me,1,`tab ${o(l)==="all"?"tab-active":""}`),ke.disabled=o(r),je.disabled=o(r)||!o(m)},[()=>o(r)||!o(i).trim()]),Me(N,()=>o(i),pe=>$(i,pe)),h(e,w),U()}Je(["click","keydown"]);var th=E("<div><!></div>"),rh=E('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function nh(e,t){V(t,!0);const r=new Fs("min-width: 768px");let n=H(!1),a=Ne(t,"width",3,"80"),s=Ne(t,"bgClass",3,"bg-base-300");var i=z(),l=O(i);{var c=v=>{var _=th(),p=u(_);se(p,()=>t.children??ae),G(()=>$e(_,1,`${s()??""} w-${a()??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),h(v,_)},f=v=>{var _=rh(),p=O(_),m=u(p),g=d(m,2),x=d(u(g),2),b=u(x);se(b,()=>t.children??ae);var y=d(p,2),P=u(y),w=u(P);Mo(w,{class:"h-6 w-6"}),Pl(m,()=>o(n),S=>$(n,S)),h(v,_)};M(l,v=>{r.current?v(c):v(f,!1)})}h(e,i),U()}function ah(){}var sh=E('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function oh(e,t){V(t,!0);const r="100",a="ml"+"-"+r;console.log("PANEL_SIDE_WIDTH →",a);const s=X(()=>Z.stats);let i=H(null),l=H("recettes"),c=H(!1),f=H(!1),v=H(Ce([])),_=H(Ce([])),p=H(!1),m=H(Ce([]));function g(B,me="recettes"){$(l,me,!0),$(i,B,!0)}function x(){$(i,null)}function b(B,me,q){$(v,me,!0),$(_,q,!0),$(B==="who"?c:f,!0)}function y(B){(!B||B==="who")&&$(c,!1),(!B||B==="store")&&$(f,!1),$(v,[],!0),$(_,[],!0)}function P(B){console.log(`[ProductsTable] Modification groupée réussie: ${B.updatedCount} produits`)}function w(B){const me=B.filter(q=>q.displayMissingQuantity!=="✅ Complet"&&q.missingQuantityArray&&q.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${B.length} produits reçus → ${me.length} produits avec quantités manquantes`),$(m,me,!0),$(p,!0)}function S(){$(p,!1),$(m,[],!0)}function k(){console.log("[ProductsTable] Achat groupé créé avec succès"),S()}async function A(B){try{if(!Z.currentMainId)throw new Error("mainId non disponible");const me=B.missingQuantityArray||[];if(me.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let q=B.$id;B.isSynced||(console.log(`[ProductsTable] Produit ${B.$id} local, création pour validation rapide...`),q=(await qt(B.$id,{},ke=>Z.getEnrichedProductById(ke))).$id,console.log(`[ProductsTable] Produit sync créé: ${q}`)),await Co(Z.currentMainId,q,me,{store:B.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${B.productName}`)}catch(me){console.error("[ProductsTable] Erreur validation rapide:",me),alert("Erreur lors de la validation rapide: "+me.message)}}var C=sh(),R=O(C),F=u(R),j=u(F),W=u(j);eu(W,{class:"mr-1 h-4 w-4"});var re=d(W),te=d(j,2);te.__click=[ah];var D=u(te);du(D,{class:"mr-1 h-4 w-4"});var I=d(F,2);nh(I,{width:r,children:(B,me)=>{Ff(B,{})},$$slots:{default:!0}});var K=d(I,2);qv(K,{onOpenModal:g,onOpenGroupEditModal:b,onOpenGroupPurchaseModal:w,onQuickValidation:A});var ne=d(R,2);{var N=B=>{wf(B,{get productId(){return o(i)},get initialTab(){return o(l)},onClose:x})};M(ne,B=>{o(i)&&B(N)})}var Q=d(ne,2);{var ie=B=>{eh(B,{get productIds(){return o(v)},get products(){return o(_)},onClose:()=>y("who"),onSuccess:P})};M(Q,B=>{o(c)&&B(ie)})}var oe=d(Q,2);{var ue=B=>{Gv(B,{get productIds(){return o(v)},get products(){return o(_)},onClose:()=>y("store"),onSuccess:P})};M(oe,B=>{o(f)&&B(ue)})}var be=d(oe,2);{var xe=B=>{Gu(B,{get products(){return o(m)},onClose:S,onSuccess:k})};M(be,B=>{o(p)&&B(xe)})}G(()=>{$e(R,1,`space-y-6 ${ta.isMobile?"":a}`),L(re,` ${o(s).total??""}`)}),h(e,C),U()}Je(["click"]);xi();var ih=E('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function lh(e){var t=ih();h(e,t)}var ch=E('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function uh(e,t){var r=ch(),n=d(u(r),2),a=d(u(n),2),s=u(a);G(()=>L(s,t.message)),h(e,r)}var dh=E('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function fh(e,t){var r=dh(),n=u(r),a=u(n);$n(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var s=d(a,2),i=d(u(s),2),l=u(i);G(()=>L(l,t.message||"Erreur inconnue")),h(e,r)}var vh=E('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),hh=E('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),ph=E('<div class="text-base-content/60"> </div>'),mh=E('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),_h=E('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),gh=E('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),bh=E('<div class="bg-base-200 min-h-screen"><header class="bg-base-300 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function yh(e,t){V(t,!0);let r,n=H(null),a=H(!0),s=H(!1);Xs(async()=>{r=Oc();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await Z.initialize(r)}catch(N){const Q=N instanceof Error?N.message:"Erreur lors de l'initialisation";$(n,Q,!0),console.error("[App] Erreur initialisation:",N)}finally{$(a,!1)}}),kl(()=>{Z.destroy()});async function i(){if(!(!r||o(s))){$(s,!0);try{await Z.forceReload(r)}catch(N){console.error("[App] Erreur lors du rechargement forcé:",N)}finally{$(s,!1)}}}const l=X(()=>o(n)||Z.error),c=X(()=>o(a)||Z.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=bh(),_=u(v),p=u(_),m=u(p),g=d(u(m),2),x=u(g);{var b=N=>{var Q=vh();h(N,Q)};M(x,N=>{Z.realtimeConnected&&N(b)})}var y=d(x,2);{var P=N=>{var Q=hh();h(N,Q)};M(y,N=>{Z.syncing&&N(P)})}var w=d(y,2);{var S=N=>{var Q=ph(),ie=u(Q);G(oe=>L(ie,`Maj: ${oe??""}`),[()=>new Date(Z.lastSync).toLocaleTimeString()]),h(N,Q)};M(w,N=>{Z.lastSync&&N(S)})}var k=d(w,2);{var A=N=>{var Q=mh();let ie;Q.__click=i;var oe=u(Q);fu(oe,{class:"h-4 w-4"}),G(ue=>{ie=$e(Q,1,"btn btn-outline btn-sm",null,ie,ue),Q.disabled=o(s)||Z.loading},[()=>({loading:o(s)||Z.loading})]),h(N,Q)};M(k,N=>{o(n)||N(A)})}var C=d(k,2);{var R=N=>{var Q=_h(),ie=u(Q),oe=u(ie);au(oe,{class:"mr-2 h-4 w-4"}),G(()=>Ut(ie,"href",f)),h(N,Q)};M(C,N=>{o(n)&&N(R)})}var F=d(_,2),j=u(F);{var W=N=>{fh(N,{get message(){return o(l)}})},re=N=>{var Q=z(),ie=O(Q);{var oe=ue=>{uh(ue,{get message(){return o(l)}})};M(ie,ue=>{o(l)&&ue(oe)},!0)}h(N,Q)};M(j,N=>{o(n)?N(W):N(re,!1)})}var te=d(j,2);{var D=N=>{lh(N)};M(te,N=>{o(c)&&N(D)})}var I=d(te,2);{var K=N=>{oh(N,{})},ne=N=>{var Q=z(),ie=O(Q);{var oe=ue=>{var be=gh();h(ue,be)};M(ie,ue=>{!Z.loading&&!o(n)&&ue(oe)},!0)}h(N,Q)};M(I,N=>{Z.enrichedProducts.length>0?N(K):N(ne,!1)})}h(e,v),U()}Je(["click"]);ll(yh,{target:document.getElementById("app_products")});
