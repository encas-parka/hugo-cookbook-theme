(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const ss=!1;var pn=Array.isArray,Vo=Array.prototype.indexOf,aa=Array.from,zn=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Uo=Object.getOwnPropertyDescriptors,Wo=Object.prototype,Go=Array.prototype,os=Object.getPrototypeOf,wa=Object.isExtensible;function Cr(e){return typeof e=="function"}const te=()=>{};function Qo(e){for(var t=0;t<e.length;t++)e[t]()}function is(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function ls(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const lt=2,sa=4,oa=8,ar=16,Ct=32,sr=64,ia=128,pt=256,fn=512,tt=1024,dt=2048,Qt=4096,gt=8192,or=16384,la=32768,ir=65536,Sa=1<<17,Ho=1<<18,Pr=1<<19,Ko=1<<20,Vn=1<<21,mn=1<<22,Xt=1<<23,Ft=Symbol("$state"),cs=Symbol("legacy props"),Jo=Symbol(""),qr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function us(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Yo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Zo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Xo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Fo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ei(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ti(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ri(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ni(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ai(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function si(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const _n=1,gn=2,ds=4,oi=8,ii=16,li=1,ci=2,ui=4,di=8,fi=16,vi=1,hi=2,Ye=Symbol(),pi="http://www.w3.org/1999/xhtml",mi="http://www.w3.org/2000/svg",_i="@attach";function gi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function bi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let yi=!1;function fs(e){return e===this.v}function vs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function wi(e,t){return e!==t}function hs(e){return!vs(e,this.v)}let xr=!1,Si=!1;function Pi(){xr=!0}let We=null;function mr(e){We=e}function z(e,t=!1,r){We={p:We,c:null,e:null,s:e,x:null,l:xr&&!t?{s:null,u:null,$:[]}:null}}function V(e){var t=We,r=t.e;if(r!==null){t.e=null;for(var n of r)Ts(n)}return We=t.p,{}}function $r(){return!xr||We!==null&&We.l===null}let Jt=[];function ps(){var e=Jt;Jt=[],Qo(e)}function tr(e){if(Jt.length===0&&!jr){var t=Jt;queueMicrotask(()=>{t===Jt&&ps()})}Jt.push(e)}function xi(){for(;Jt.length>0;)ps()}const $i=new WeakMap;function ms(e){var t=Pe;if(t===null)return $e.f|=Xt,e;if((t.f&la)===0){if((t.f&ia)===0)throw!t.parent&&e instanceof Error&&_s(e),e;t.b.error(e)}else _r(e,t)}function _r(e,t){for(;t!==null;){if((t.f&ia)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&_s(e),e}function _s(e){const t=$i.get(e);t&&(zn(e,"message",{value:t.message}),zn(e,"stack",{value:t.stack}))}const an=new Set;let De=null,ln=null,Un=new Set,xt=[],bn=null,Wn=!1,jr=!1;class ht{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#l=[];#o=[];#i=[];#a=[];#s=[];#f=[];skipped_effects=new Set;process(t){xt=[],ln=null;var r=ht.apply(this);for(const s of t)this.#n(s);if(this.#c===0){this.#v();var n=this.#o,a=this.#i;this.#o=[],this.#i=[],this.#a=[],ln=this,De=null,Pa(n),Pa(a),ln=null,this.#u?.resolve()}else this.#d(this.#o),this.#d(this.#i),this.#d(this.#a);r();for(const s of this.#l)Ur(s);this.#l=[]}#n(t){t.f^=tt;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Ct|sr))!==0,s=a&&(n&tt)!==0,i=s||(n&gt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=tt:(n&sa)!==0?this.#i.push(r):(n&tt)===0&&((n&mn)!==0&&r.b?.is_pending()?this.#l.push(r):xn(r)&&((r.f&ar)!==0&&this.#a.push(r),Ur(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#d(t){for(const r of t)((r.f&dt)!==0?this.#s:this.#f).push(r),at(r,tt);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){De=this}deactivate(){De=null}flush(){if(xt.length>0){if(this.activate(),gs(),De!==null&&De!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of Un)if(Un.delete(t),t(),De!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),an.size>1){this.#e.clear();let t=!0;for(const r of an){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;bs(n)}if(xt.length>0){De=r;const n=ht.apply(r);for(const a of xt)r.#n(a);xt=[],n()}}De=null}an.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#s)at(t,dt),rr(t);for(const t of this.#f)at(t,Qt),rr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=is()).promise}static ensure(){if(De===null){const t=De=new ht;an.add(De),jr||ht.enqueue(()=>{De===t&&t.flush()})}return De}static enqueue(t){tr(t)}static apply(t){return te}}function Ei(e){var t=jr;jr=!0;try{for(var r;;){if(xi(),xt.length===0&&(De?.flush(),xt.length===0))return bn=null,r;gs()}}finally{jr=t}}function gs(){var e=pr;Wn=!0;try{var t=0;for(ka(!0);xt.length>0;){var r=ht.ensure();if(t++>1e3){var n,a;ki()}r.process(xt),Lt.clear()}}finally{Wn=!1,ka(e),bn=null}}function ki(){try{ei()}catch(e){_r(e,bn)}}let Kt=null;function Pa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(or|gt))===0&&xn(n)&&(Kt=[],Ur(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Cs(n):n.fn=null),Kt?.length>0)){Lt.clear();for(const a of Kt)Ur(a);Kt=[]}}Kt=null}}function bs(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&lt)!==0?bs(t):(r&(mn|ar))!==0&&(at(t,dt),rr(t))}}function rr(e){for(var t=bn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Wn&&t===Pe&&(r&ar)!==0)return;if((r&(sr|Ct))!==0){if((r&tt)===0)return;t.f^=tt}}xt.push(t)}function ca(e){let t=0,r=Vt(0),n;return()=>{Ui()&&(o(r),ha(()=>(t===0&&(n=Er(()=>e(()=>$t(r)))),t+=1,()=>{tr(()=>{t-=1,t===0&&(n?.(),n=void 0,$t(r))})})))}}var Ai=ir|Pr|ia;function Ti(e,t,r){new Ni(e,t,r)}class Ni{parent;#e=!1;#r;#c=null;#u;#l;#o;#i=null;#a=null;#s=null;#f=null;#n=0;#d=0;#v=!1;#t=null;#_=()=>{this.#t&&gr(this.#t,this.#n)};#g=ca(()=>(this.#t=Vt(this.#n),()=>{this.#t=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#l=n,this.parent=Pe.b,this.#e=!!this.#u.pending,this.#o=Rt(()=>{Pe.b=this;{try{this.#i=Xe(()=>n(this.#r))}catch(a){this.error(a)}this.#d>0?this.#p():this.#e=!1}},Ai)}#w(){try{this.#i=Xe(()=>this.#l(this.#r))}catch(t){this.error(t)}this.#e=!1}#S(){const t=this.#u.pending;t&&(this.#a=Xe(()=>t(this.#r)),ht.enqueue(()=>{this.#i=this.#h(()=>(ht.ensure(),Xe(()=>this.#l(this.#r)))),this.#d>0?this.#p():(Tt(this.#a,()=>{this.#a=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#h(t){var r=Pe,n=$e,a=We;Et(this.#o),ot(this.#o),mr(this.#o.ctx);try{return t()}catch(s){return ms(s),null}finally{Et(r),ot(n),mr(a)}}#p(){const t=this.#u.pending;this.#i!==null&&(this.#f=document.createDocumentFragment(),Mi(this.#i,this.#f)),this.#a===null&&(this.#a=Xe(()=>t(this.#r)))}#m(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t);return}this.#d+=t,this.#d===0&&(this.#e=!1,this.#a&&Tt(this.#a,()=>{this.#a=null}),this.#f&&(this.#r.before(this.#f),this.#f=null),tr(()=>{ht.ensure().flush()}))}update_pending_count(t){this.#m(t),this.#n+=t,Un.add(this.#_)}get_effect_pending(){return this.#g(),o(this.#t)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#i&&(Fe(this.#i),this.#i=null),this.#a&&(Fe(this.#a),this.#a=null),this.#s&&(Fe(this.#s),this.#s=null);var a=!1,s=!1;const i=()=>{if(a){bi();return}a=!0,s&&si(),ht.ensure(),this.#n=0,this.#s!==null&&Tt(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#i=this.#h(()=>(this.#v=!1,Xe(()=>this.#l(this.#r)))),this.#d>0?this.#p():this.#e=!1};var l=$e;try{ot(null),s=!0,r?.(t,i),s=!1}catch(c){_r(c,this.#o&&this.#o.parent)}finally{ot(l)}n&&tr(()=>{this.#s=this.#h(()=>{this.#v=!0;try{return Xe(()=>{n(this.#r,()=>t,()=>i)})}catch(c){return _r(c,this.#o.parent),null}finally{this.#v=!1}})})}}function Mi(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:Yr(r);t.append(r),r=a}}function ys(e,t,r){const n=$r()?yn:ua;if(t.length===0){r(e.map(n));return}var a=De,s=Pe,i=Ci();Promise.all(t.map(l=>Ii(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(s.f&or)===0&&_r(c,s)}a?.deactivate(),ws()}).catch(l=>{_r(l,s)})}function Ci(){var e=Pe,t=$e,r=We,n=De;return function(){Et(e),ot(t),mr(r),n?.activate()}}function ws(){Et(null),ot(null),mr(null)}function yn(e){var t=lt|dt,r=$e!==null&&($e.f&lt)!==0?$e:null;return Pe===null||r!==null&&(r.f&pt)!==0?t|=pt:Pe.f|=Pr,{ctx:We,deps:null,effects:null,equals:fs,f:t,fn:e,reactions:null,rv:0,v:Ye,wv:0,parent:r??Pe,ac:null}}function Ii(e,t){let r=Pe;r===null&&Yo();var n=r.b,a=void 0,s=Vt(Ye),i=!$e,l=new Map;return Gi(()=>{var c=is();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=De,v=n.is_pending();i&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(qr),l.set(f,c)));const _=(p,m=void 0)=>{v||f.activate(),m?m!==qr&&(s.f|=Xt,gr(s,m)):((s.f&Xt)!==0&&(s.f^=Xt),gr(s,p)),i&&(n.update_pending_count(-1),v||f.decrement()),ws()};c.promise.then(_,p=>_(null,p||"unknown"))}),As(()=>{for(const c of l.values())c.reject(qr)}),new Promise(c=>{function f(v){function _(){v===a?c(s):f(a)}v.then(_,_)}f(a)})}function Y(e){const t=yn(e);return Rs(t),t}function ua(e){const t=yn(e);return t.equals=hs,t}function Ss(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Fe(t[r])}}function Di(e){for(var t=e.parent;t!==null;){if((t.f&lt)===0)return t;t=t.parent}return null}function da(e){var t,r=Pe;Et(Di(e));try{Ss(e),t=Bs(e)}finally{Et(r)}return t}function Ps(e){var t=da(e);if(e.equals(t)||(e.v=t,e.wv=qs()),!cr){var r=(jt||(e.f&pt)!==0)&&e.deps!==null?Qt:tt;at(e,r)}}const Lt=new Map;function Vt(e,t){var r={f:0,v:e,reactions:null,equals:fs,rv:0,wv:0};return r}function H(e,t){const r=Vt(e);return Rs(r),r}function Ri(e,t=!1,r=!0){const n=Vt(e);return t||(n.equals=hs),xr&&r&&We!==null&&We.l!==null&&(We.l.s??=[]).push(n),n}function E(e,t,r=!1){$e!==null&&(!_t||($e.f&Sa)!==0)&&$r()&&($e.f&(lt|ar|mn|Sa))!==0&&!Nt?.includes(e)&&ai();let n=r?Me(t):t;return gr(e,n)}function gr(e,t){if(!e.equals(t)){var r=e.v;cr?Lt.set(e,t):Lt.set(e,r),e.v=t;var n=ht.ensure();n.capture(e,r),(e.f&lt)!==0&&((e.f&dt)!==0&&da(e),at(e,(e.f&pt)===0?tt:Qt)),e.wv=qs(),xs(e,dt),$r()&&Pe!==null&&(Pe.f&tt)!==0&&(Pe.f&(Ct|sr))===0&&(vt===null?Ki([e]):vt.push(e))}return t}function $t(e){E(e,e.v+1)}function xs(e,t){var r=e.reactions;if(r!==null)for(var n=$r(),a=r.length,s=0;s<a;s++){var i=r[s],l=i.f;if(!(!n&&i===Pe)){var c=(l&dt)===0;c&&at(i,t),(l&lt)!==0?xs(i,Qt):c&&((l&ar)!==0&&Kt!==null&&Kt.push(i),rr(i))}}}function Me(e){if(typeof e!="object"||e===null||Ft in e)return e;const t=os(e);if(t!==Wo&&t!==Go)return e;var r=new Map,n=pn(e),a=H(0),s=Mt,i=l=>{if(Mt===s)return l();var c=$e,f=Mt;ot(null),Ta(s);var v=l();return ot(c),Ta(f),v};return n&&r.set("length",H(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&ri();var v=r.get(c);return v===void 0?v=i(()=>{var _=H(f.value);return r.set(c,_),_}):E(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=i(()=>H(Ye));r.set(c,v),$t(a)}}else E(f,Ye),$t(a);return!0},get(l,c,f){if(c===Ft)return e;var v=r.get(c),_=c in l;if(v===void 0&&(!_||Bt(l,c)?.writable)&&(v=i(()=>{var m=Me(_?l[c]:Ye),g=H(m);return g}),r.set(c,v)),v!==void 0){var p=o(v);return p===Ye?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=o(v))}else if(f===void 0){var _=r.get(c),p=_?.v;if(_!==void 0&&p!==Ye)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===Ft)return!0;var f=r.get(c),v=f!==void 0&&f.v!==Ye||Reflect.has(l,c);if(f!==void 0||Pe!==null&&(!v||Bt(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=v?Me(l[c]):Ye,m=H(p);return m}),r.set(c,f));var _=o(f);if(_===Ye)return!1}return v},set(l,c,f,v){var _=r.get(c),p=c in l;if(n&&c==="length")for(var m=f;m<_.v;m+=1){var g=r.get(m+"");g!==void 0?E(g,Ye):m in l&&(g=i(()=>H(Ye)),r.set(m+"",g))}if(_===void 0)(!p||Bt(l,c)?.writable)&&(_=i(()=>H(void 0)),E(_,Me(f)),r.set(c,_));else{p=_.v!==Ye;var x=i(()=>Me(f));E(_,x)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(v,f),!p){if(n&&typeof c=="string"){var y=r.get("length"),P=Number(c);Number.isInteger(P)&&P>=y.v&&E(y,P+1)}$t(a)}return!0},ownKeys(l){o(a);var c=Reflect.ownKeys(l).filter(_=>{var p=r.get(_);return p===void 0||p.v!==Ye});for(var[f,v]of r)v.v!==Ye&&!(f in l)&&c.push(f);return c},setPrototypeOf(){ni()}})}function xa(e){try{if(e!==null&&typeof e=="object"&&Ft in e)return e[Ft]}catch{}return e}function Oi(e,t){return Object.is(xa(e),xa(t))}var $a,$s,Es,ks;function qi(){if($a===void 0){$a=window,$s=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Es=Bt(t,"firstChild").get,ks=Bt(t,"nextSibling").get,wa(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),wa(r)&&(r.__t=void 0)}}function It(e=""){return document.createTextNode(e)}function br(e){return Es.call(e)}function Yr(e){return ks.call(e)}function u(e,t){return br(e)}function R(e,t=!1){{var r=br(e);return r instanceof Comment&&r.data===""?Yr(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=Yr(n);return n}function ji(e){e.textContent=""}function wn(){return!1}function Bi(e,t){if(t){const r=document.body;e.autofocus=!0,tr(()=>{document.activeElement===r&&e.focus()})}}let Ea=!1;function Li(){Ea||(Ea=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Sn(e){var t=$e,r=Pe;ot(null),Et(null);try{return e()}finally{ot(t),Et(r)}}function fa(e,t,r,n=r){e.addEventListener(t,()=>Sn(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Li()}function zi(e){Pe===null&&$e===null&&Fo(),$e!==null&&($e.f&pt)!==0&&Pe===null&&Xo(),cr&&Zo()}function Vi(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Dt(e,t,r,n=!0){var a=Pe;a!==null&&(a.f&gt)!==0&&(e|=gt);var s={ctx:We,deps:null,nodes_start:null,nodes_end:null,f:e|dt,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Ur(s),s.f|=la}catch(c){throw Fe(s),c}else t!==null&&rr(s);if(n){var i=s;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Pr)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Vi(i,a),$e!==null&&($e.f&lt)!==0&&(e&sr)===0)){var l=$e;(l.effects??=[]).push(i)}}return s}function Ui(){return $e!==null&&!_t}function As(e){const t=Dt(oa,null,!1);return at(t,tt),t.teardown=e,t}function lr(e){zi();var t=Pe.f,r=!$e&&(t&Ct)!==0&&(t&la)===0;if(r){var n=We;(n.e??=[]).push(e)}else return Ts(e)}function Ts(e){return Dt(sa|Ko,e,!1)}function Wi(e){ht.ensure();const t=Dt(sr|Pr,e,!0);return(r={})=>new Promise(n=>{r.outro?Tt(t,()=>{Fe(t),n(void 0)}):(Fe(t),n(void 0))})}function va(e){return Dt(sa,e,!1)}function Gi(e){return Dt(mn|Pr,e,!0)}function ha(e,t=0){return Dt(oa|t,e,!0)}function G(e,t=[],r=[]){ys(t,r,n=>{Dt(oa,()=>e(...n.map(o)),!0)})}function Rt(e,t=0){var r=Dt(ar|t,e,!0);return r}function Xe(e,t=!0){return Dt(Ct|Pr,e,!0,t)}function Ns(e){var t=e.teardown;if(t!==null){const r=cr,n=$e;Aa(!0),ot(null);try{t.call(null)}finally{Aa(r),ot(n)}}}function Ms(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&Sn(()=>{a.abort(qr)});var n=r.next;(r.f&sr)!==0?r.parent=null:Fe(r,t),r=n}}function Qi(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ct)===0&&Fe(t),t=r}}function Fe(e,t=!0){var r=!1;(t||(e.f&Ho)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Hi(e.nodes_start,e.nodes_end),r=!0),Ms(e,t&&!r),vn(e,0),at(e,or);var n=e.transitions;if(n!==null)for(const s of n)s.stop();Ns(e);var a=e.parent;a!==null&&a.first!==null&&Cs(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Hi(e,t){for(;e!==null;){var r=e===t?null:Yr(e);e.remove(),e=r}}function Cs(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Tt(e,t){var r=[];pa(e,r,!0),Is(r,()=>{Fe(e),t&&t()})}function Is(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function pa(e,t,r){if((e.f&gt)===0){if(e.f^=gt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,s=(n.f&ir)!==0||(n.f&Ct)!==0;pa(n,t,s?r:!1),n=a}}}function Pn(e){Ds(e,!0)}function Ds(e,t){if((e.f&gt)!==0){e.f^=gt,(e.f&tt)===0&&(at(e,dt),rr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&ir)!==0||(r.f&Ct)!==0;Ds(r,a?t:!1),r=n}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}let pr=!1;function ka(e){pr=e}let cr=!1;function Aa(e){cr=e}let $e=null,_t=!1;function ot(e){$e=e}let Pe=null;function Et(e){Pe=e}let Nt=null;function Rs(e){$e!==null&&(Nt===null?Nt=[e]:Nt.push(e))}let nt=null,ut=0,vt=null;function Ki(e){vt=e}let Os=1,Vr=0,Mt=Vr;function Ta(e){Mt=e}let jt=!1;function qs(){return++Os}function xn(e){var t=e.f;if((t&dt)!==0)return!0;if((t&Qt)!==0){var r=e.deps,n=(t&pt)!==0;if(r!==null){var a,s,i=(t&fn)!==0,l=n&&Pe!==null&&!jt,c=r.length;if((i||l)&&(Pe===null||(Pe.f&or)===0)){var f=e,v=f.parent;for(a=0;a<c;a++)s=r[a],(i||!s?.reactions?.includes(f))&&(s.reactions??=[]).push(f);i&&(f.f^=fn),l&&v!==null&&(v.f&pt)===0&&(f.f^=pt)}for(a=0;a<c;a++)if(s=r[a],xn(s)&&Ps(s),s.wv>e.wv)return!0}(!n||Pe!==null&&!jt)&&at(e,tt)}return!1}function js(e,t,r=!0){var n=e.reactions;if(n!==null&&!Nt?.includes(e))for(var a=0;a<n.length;a++){var s=n[a];(s.f&lt)!==0?js(s,t,!1):t===s&&(r?at(s,dt):(s.f&tt)!==0&&at(s,Qt),rr(s))}}function Bs(e){var t=nt,r=ut,n=vt,a=$e,s=jt,i=Nt,l=We,c=_t,f=Mt,v=e.f;nt=null,ut=0,vt=null,jt=(v&pt)!==0&&(_t||!pr||$e===null),$e=(v&(Ct|sr))===0?e:null,Nt=null,mr(e.ctx),_t=!1,Mt=++Vr,e.ac!==null&&(Sn(()=>{e.ac.abort(qr)}),e.ac=null);try{e.f|=Vn;var _=e.fn,p=_(),m=e.deps;if(nt!==null){var g;if(vn(e,ut),m!==null&&ut>0)for(m.length=ut+nt.length,g=0;g<nt.length;g++)m[ut+g]=nt[g];else e.deps=m=nt;if(!jt||(v&lt)!==0&&e.reactions!==null)for(g=ut;g<m.length;g++)(m[g].reactions??=[]).push(e)}else m!==null&&ut<m.length&&(vn(e,ut),m.length=ut);if($r()&&vt!==null&&!_t&&m!==null&&(e.f&(lt|Qt|dt))===0)for(g=0;g<vt.length;g++)js(vt[g],e);return a!==null&&a!==e&&(Vr++,vt!==null&&(n===null?n=vt:n.push(...vt))),(e.f&Xt)!==0&&(e.f^=Xt),p}catch(x){return ms(x)}finally{e.f^=Vn,nt=t,ut=r,vt=n,$e=a,jt=s,Nt=i,mr(l),_t=c,Mt=f}}function Ji(e,t){let r=t.reactions;if(r!==null){var n=Vo.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&lt)!==0&&(nt===null||!nt.includes(t))&&(at(t,Qt),(t.f&(pt|fn))===0&&(t.f^=fn),Ss(t),vn(t,0))}function vn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ji(e,r[n])}function Ur(e){var t=e.f;if((t&or)===0){at(e,tt);var r=Pe,n=pr;Pe=e,pr=!0;try{(t&ar)!==0?Qi(e):Ms(e),Ns(e);var a=Bs(e);e.teardown=typeof a=="function"?a:null,e.wv=Os;var s;ss&&Si&&(e.f&dt)!==0&&e.deps}finally{pr=n,Pe=r}}}async function Yi(){await Promise.resolve(),Ei()}function o(e){var t=e.f,r=(t&lt)!==0;if($e!==null&&!_t){var n=Pe!==null&&(Pe.f&or)!==0;if(!n&&!Nt?.includes(e)){var a=$e.deps;if(($e.f&Vn)!==0)e.rv<Vr&&(e.rv=Vr,nt===null&&a!==null&&a[ut]===e?ut++:nt===null?nt=[e]:(!jt||!nt.includes(e))&&nt.push(e));else{($e.deps??=[]).push(e);var s=e.reactions;s===null?e.reactions=[$e]:s.includes($e)||s.push($e)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&pt)===0&&(i.f^=pt)}if(cr){if(Lt.has(e))return Lt.get(e);if(r){i=e;var c=i.v;return((i.f&tt)===0&&i.reactions!==null||Ls(i))&&(c=da(i)),Lt.set(i,c),c}}else r&&(i=e,xn(i)&&Ps(i));if((e.f&Xt)!==0)throw e.v;return e.v}function Ls(e){if(e.v===Ye)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Lt.has(t)||(t.f&lt)!==0&&Ls(t))return!0;return!1}function Er(e){var t=_t;try{return _t=!0,e()}finally{_t=t}}const Zi=-7169;function at(e,t){e.f=e.f&Zi|t}function Xi(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Fi=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function el(e){return Fi.includes(e)}const tl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function rl(e){return e=e.toLowerCase(),tl[e]??e}const nl=["touchstart","touchmove"];function al(e){return nl.includes(e)}const zs=new Set,Gn=new Set;function Vs(e,t,r,n={}){function a(s){if(n.capture||Rr.call(t,s),!s.cancelBubble)return Sn(()=>r?.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?tr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Qn(e,t,r,n={}){var a=Vs(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function Ze(e){for(var t=0;t<e.length;t++)zs.add(e[t]);for(var r of Gn)r(e)}let Na=null;function Rr(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],s=a[0]||e.target;Na=e;var i=0,l=Na===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(s=a[i]||e.target,s!==t){zn(e,"currentTarget",{configurable:!0,get(){return s||r}});var v=$e,_=Pe;ot(null),Et(null);try{for(var p,m=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var x=s["__"+n];if(x!=null&&(!s.disabled||e.target===s))if(pn(x)){var[b,...y]=x;b.apply(s,[e,...y])}else x.call(s,e)}catch(P){p?m.push(P):p=P}if(e.cancelBubble||g===t||g===null)break;s=g}if(p){for(let P of m)queueMicrotask(()=>{throw P});throw p}}finally{e.__root=t,delete e.currentTarget,ot(v),Et(_)}}}function Us(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function yr(e,t){var r=Pe;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function $(e,t){var r=(t&vi)!==0,n=(t&hi)!==0,a,s=!e.startsWith("<!>");return()=>{a===void 0&&(a=Us(s?e:"<!>"+e),r||(a=br(a)));var i=n||$s?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=br(i),c=i.lastChild;yr(l,c)}else yr(i,i);return i}}function sl(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var i=Us(a),l=br(i);s=br(l)}var c=s.cloneNode(!0);return yr(c,c),c}}function ol(e,t){return sl(e,t,"svg")}function mt(e=""){{var t=It(e+"");return yr(t,t),t}}function L(){var e=document.createDocumentFragment(),t=document.createComment(""),r=It();return e.append(t,r),yr(t,r),e}function h(e,t){e!==null&&e.before(t)}function U(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function il(e,t){return ll(e,t)}const fr=new Map;function ll(e,{target:t,anchor:r,props:n={},events:a,context:s,intro:i=!0}){qi();var l=new Set,c=_=>{for(var p=0;p<_.length;p++){var m=_[p];if(!l.has(m)){l.add(m);var g=al(m);t.addEventListener(m,Rr,{passive:g});var x=fr.get(m);x===void 0?(document.addEventListener(m,Rr,{passive:g}),fr.set(m,1)):fr.set(m,x+1)}}};c(aa(zs)),Gn.add(c);var f=void 0,v=Wi(()=>{var _=r??t.appendChild(It());return Ti(_,{pending:()=>{}},p=>{if(s){z({});var m=We;m.c=s}a&&(n.$$events=a),f=e(p,n)||{},s&&V()}),()=>{for(var p of l){t.removeEventListener(p,Rr);var m=fr.get(p);--m===0?(document.removeEventListener(p,Rr),fr.delete(p)):fr.set(p,m)}Gn.delete(c),_!==r&&_.parentNode?.removeChild(_)}});return cl.set(f,v),f}let cl=new WeakMap;function M(e,t,r=!1){var n=e,a=null,s=null,i=Ye,l=r?ir:0,c=!1;const f=(m,g=!0)=>{c=!0,p(g,m)};var v=null;function _(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var m=i?a:s,g=i?s:a;m&&Pn(m),g&&Tt(g,()=>{i?s=null:a=null})}const p=(m,g)=>{if(i!==(i=m)){var x=wn(),b=n;if(x&&(v=document.createDocumentFragment(),v.append(b=It())),i?a??=g&&Xe(()=>g(b)):s??=g&&Xe(()=>g(b)),x){var y=De,P=i?a:s,w=i?s:a;P&&y.skipped_effects.delete(P),w&&y.skipped_effects.add(w),y.add_callback(_)}else _()}};Rt(()=>{c=!1,t(f),c||p(null,null)},l)}function ul(e,t,r){var n=e,a=Ye,s,i,l=null,c=$r()?wi:vs;function f(){s&&Tt(s),l!==null&&(l.lastChild.remove(),n.before(l),l=null),s=i}Rt(()=>{if(c(a,a=t())){var v=n,_=wn();_&&(l=document.createDocumentFragment(),l.append(v=It())),i=Xe(()=>r(v)),_?De.add_callback(f):f()}})}function Hn(e,t){return t}function dl(e,t,r){for(var n=e.items,a=[],s=t.length,i=0;i<s;i++)pa(t[i].e,a,!0);var l=s>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;ji(c),c.append(r),n.clear(),Pt(e,t[0].prev,t[s-1].next)}Is(a,()=>{for(var f=0;f<s;f++){var v=t[f];l||(n.delete(v.k),Pt(e,v.prev,v.next)),Fe(v.e,!l)}})}function it(e,t,r,n,a,s=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&ds)!==0;if(c){var f=e;i=f.appendChild(It())}var v=null,_=!1,p=new Map,m=ua(()=>{var y=r();return pn(y)?y:y==null?[]:aa(y)}),g,x;function b(){fl(x,g,l,p,i,a,t,n,r),s!==null&&(g.length===0?v?Pn(v):v=Xe(()=>s(i)):v!==null&&Tt(v,()=>{v=null}))}Rt(()=>{x??=Pe,g=o(m);var y=g.length;if(!(_&&y===0)){_=y===0;var P,w,S,k;if(wn()){var A=new Set,C=De;for(w=0;w<y;w+=1){S=g[w],k=n(S,w);var O=l.items.get(k)??p.get(k);O?(t&(_n|gn))!==0&&Ws(O,S,w,t):(P=Gs(null,l,null,null,S,k,w,a,t,r,!0),p.set(k,P)),A.add(k)}for(const[F,j]of l.items)A.has(F)||C.skipped_effects.add(j.e);C.add_callback(b)}else b();o(m)}})}function fl(e,t,r,n,a,s,i,l,c){var f=(i&oi)!==0,v=(i&(_n|gn))!==0,_=t.length,p=r.items,m=r.first,g=m,x,b=null,y,P=[],w=[],S,k,A,C;if(f)for(C=0;C<_;C+=1)S=t[C],k=l(S,C),A=p.get(k),A!==void 0&&(A.a?.measure(),(y??=new Set).add(A));for(C=0;C<_;C+=1){if(S=t[C],k=l(S,C),A=p.get(k),A===void 0){var O=n.get(k);if(O!==void 0){n.delete(k),p.set(k,O);var F=b?b.next:g;Pt(r,b,O),Pt(r,O,F),Dn(O,F,a),b=O}else{var j=g?g.e.nodes_start:a;b=Gs(j,r,b,b===null?r.first:b.next,S,k,C,s,i,c)}p.set(k,b),P=[],w=[],g=b.next;continue}if(v&&Ws(A,S,C,i),(A.e.f&gt)!==0&&(Pn(A.e),f&&(A.a?.unfix(),(y??=new Set).delete(A))),A!==g){if(x!==void 0&&x.has(A)){if(P.length<w.length){var W=w[0],ne;b=W.prev;var re=P[0],D=P[P.length-1];for(ne=0;ne<P.length;ne+=1)Dn(P[ne],W,a);for(ne=0;ne<w.length;ne+=1)x.delete(w[ne]);Pt(r,re.prev,D.next),Pt(r,b,re),Pt(r,D,W),g=W,b=D,C-=1,P=[],w=[]}else x.delete(A),Dn(A,g,a),Pt(r,A.prev,A.next),Pt(r,A,b===null?r.first:b.next),Pt(r,b,A),b=A;continue}for(P=[],w=[];g!==null&&g.k!==k;)(g.e.f&gt)===0&&(x??=new Set).add(g),w.push(g),g=g.next;if(g===null)continue;A=g}P.push(A),b=A,g=A.next}if(g!==null||x!==void 0){for(var I=x===void 0?[]:aa(x);g!==null;)(g.e.f&gt)===0&&I.push(g),g=g.next;var K=I.length;if(K>0){var ae=(i&ds)!==0&&_===0?a:null;if(f){for(C=0;C<K;C+=1)I[C].a?.measure();for(C=0;C<K;C+=1)I[C].a?.fix()}dl(r,I,ae)}}f&&tr(()=>{if(y!==void 0)for(A of y)A.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var N of n.values())Fe(N.e);n.clear()}function Ws(e,t,r,n){(n&_n)!==0&&gr(e.v,t),(n&gn)!==0?gr(e.i,r):e.i=r}function Gs(e,t,r,n,a,s,i,l,c,f,v){var _=(c&_n)!==0,p=(c&ii)===0,m=_?p?Ri(a,!1,!1):Vt(a):a,g=(c&gn)===0?i:Vt(i),x={i:g,v:m,k:s,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=It())}return x.e=Xe(()=>l(e,m,g,f),yi),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?v||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function Dn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,s=e.e.nodes_start;s!==null&&s!==n;){var i=Yr(s);a.before(s),s=i}}function Pt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function se(e,t,...r){var n=e,a=te,s;Rt(()=>{a!==(a=t())&&(s&&(Fe(s),s=null),s=Xe(()=>a(n,...r)))},ir)}function er(e,t,r){var n=e,a,s,i=null,l=null;function c(){s&&(Tt(s),s=null),i&&(i.lastChild.remove(),n.before(i),i=null),s=l,l=null}Rt(()=>{if(a!==(a=t())){var f=wn();if(a){var v=n;f&&(i=document.createDocumentFragment(),i.append(v=It()),s&&De.skipped_effects.add(s)),l=Xe(()=>r(v,a))}f?De.add_callback(c):c()}},ir)}function vl(e,t,r,n,a,s){var i,l,c=null,f=e,v;Rt(()=>{const _=t()||null;var p=mi;_!==i&&(v&&(_===null?Tt(v,()=>{v=null,l=null}):_===l?Pn(v):Fe(v)),_&&_!==l&&(v=Xe(()=>{if(c=document.createElementNS(p,_),yr(c,c),n){var m=c.appendChild(It());n(c,m)}Pe.nodes_end=c,f.before(c)})),i=_,i&&(l=i))},ir)}function hl(e,t){var r=void 0,n;Rt(()=>{r!==(r=t())&&(n&&(Fe(n),n=null),r&&(n=Xe(()=>{va(()=>r(e))})))})}function Qs(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Qs(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function pl(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Qs(e))&&(n&&(n+=" "),n+=t);return n}function ml(e){return typeof e=="object"?pl(e):e??""}const Ma=[...` 	
\r\f \v\uFEFF`];function _l(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var s=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+s;(i===0||Ma.includes(n[i-1]))&&(l===n.length||Ma.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Ca(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var s=e[a];s!=null&&s!==""&&(n+=" "+a+": "+s+r)}return n}function Rn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function gl(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Rn)),a&&c.push(...Object.keys(a).map(Rn));var f=0,v=-1;const x=e.length;for(var _=0;_<x;_++){var p=e[_];if(l?p==="/"&&e[_-1]==="*"&&(l=!1):s?s===p&&(s=!1):p==="/"&&e[_+1]==="*"?l=!0:p==='"'||p==="'"?s=p:p==="("?i++:p===")"&&i--,!l&&s===!1&&i===0){if(p===":"&&v===-1)v=_;else if(p===";"||_===x-1){if(v!==-1){var m=Rn(e.substring(f,v).trim());if(!c.includes(m)){p!==";"&&_++;var g=e.substring(f,_).trim();r+=" "+g+";"}}f=_+1,v=-1}}}}return n&&(r+=Ca(n)),a&&(r+=Ca(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ee(e,t,r,n,a,s){var i=e.__className;if(i!==r||i===void 0){var l=_l(r,n,s);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(s&&a!==s)for(var c in s){var f=!!s[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return s}function On(e,t={},r,n){for(var a in r){var s=r[a];t[a]!==s&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,s,n))}}function Hs(e,t,r,n){var a=e.__style;if(a!==t){var s=gl(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else n&&(Array.isArray(n)?(On(e,r?.[0],n[0]),On(e,r?.[1],n[1],"important")):On(e,r,n));return n}function hn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!pn(t))return gi();for(var n of e.options)n.selected=t.includes(Br(n));return}for(n of e.options){var a=Br(n);if(Oi(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Ks(e){var t=new MutationObserver(()=>{hn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),As(()=>{t.disconnect()})}function Yt(e,t,r=t){var n=!0;fa(e,"change",a=>{var s=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(s),Br);else{var l=e.querySelector(s)??e.querySelector("option:not([disabled])");i=l&&Br(l)}r(i)}),va(()=>{var a=t();if(hn(e,a,n),n&&a===void 0){var s=e.querySelector(":checked");s!==null&&(a=Br(s),r(a))}e.__value=a,n=!1}),Ks(e)}function Br(e){return"__value"in e?e.__value:e.value}const Ir=Symbol("class"),Dr=Symbol("style"),Js=Symbol("is custom element"),Ys=Symbol("is html");function bl(e,t){var r=$n(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function qn(e,t){var r=$n(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function yl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ut(e,t,r,n){var a=$n(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Jo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Zs(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function wl(e,t,r,n,a=!1,s=!1){var i=$n(e),l=i[Js],c=!i[Ys],f=t||{},v=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=ml(r.class):r[Ir]&&(r.class=null),r[Dr]&&(r.style??=null);var p=Zs(e);for(const S in r){let k=r[S];if(v&&S==="value"&&k==null){e.value=e.__value="",f[S]=k;continue}if(S==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ee(e,m,k,n,t?.[Ir],r[Ir]),f[S]=k,f[Ir]=r[Ir];continue}if(S==="style"){Hs(e,k,t?.[Dr],r[Dr]),f[S]=k,f[Dr]=r[Dr];continue}var g=f[S];if(!(k===g&&!(k===void 0&&e.hasAttribute(S)))){f[S]=k;var x=S[0]+S[1];if(x!=="$$")if(x==="on"){const A={},C="$$"+S;let O=S.slice(2);var b=el(O);if(Xi(O)&&(O=O.slice(0,-7),A.capture=!0),!b&&g){if(k!=null)continue;e.removeEventListener(O,f[C],A),f[C]=null}if(k!=null)if(b)e[`__${O}`]=k,Ze([O]);else{let F=function(j){f[S].call(this,j)};var w=F;f[C]=Vs(O,e,F,A)}else b&&(e[`__${O}`]=void 0)}else if(S==="style")Ut(e,S,k);else if(S==="autofocus")Bi(e,!!k);else if(!l&&(S==="__value"||S==="value"&&k!=null))e.value=e.__value=k;else if(S==="selected"&&v)yl(e,k);else{var y=S;c||(y=rl(y));var P=y==="defaultValue"||y==="defaultChecked";if(k==null&&!l&&!P)if(i[S]=null,y==="value"||y==="checked"){let A=e;const C=t===void 0;if(y==="value"){let O=A.defaultValue;A.removeAttribute(y),A.defaultValue=O,A.value=A.__value=C?O:null}else{let O=A.defaultChecked;A.removeAttribute(y),A.defaultChecked=O,A.checked=C?O:!1}}else e.removeAttribute(S);else P||p.includes(y)&&(l||typeof k!="string")?(e[y]=k,y in i&&(i[y]=Ye)):typeof k!="function"&&Ut(e,y,k)}}}return f}function Ia(e,t,r=[],n=[],a,s=!1,i=!1){ys(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",_=!1;if(Rt(()=>{var m=t(...l.map(o)),g=wl(e,c,m,a,s,i);_&&v&&"value"in m&&hn(e,m.value);for(let b of Object.getOwnPropertySymbols(f))m[b]||Fe(f[b]);for(let b of Object.getOwnPropertySymbols(m)){var x=m[b];b.description===_i&&(!c||x!==c[b])&&(f[b]&&Fe(f[b]),f[b]=Xe(()=>hl(e,()=>x))),g[b]=x}c=g}),v){var p=e;va(()=>{hn(p,c.value,!0),Ks(p)})}_=!0})}function $n(e){return e.__attributes??={[Js]:e.nodeName.includes("-"),[Ys]:e.namespaceURI===pi}}var Da=new Map;function Zs(e){var t=e.getAttribute("is")||e.nodeName,r=Da.get(t);if(r)return r;Da.set(t,r=[]);for(var n,a=e,s=Element.prototype;s!==a;){n=Uo(a);for(var i in n)n[i].set&&r.push(i);a=os(a)}return r}function Ce(e,t,r=t){var n=new WeakSet;fa(e,"input",async a=>{var s=a?e.defaultValue:e.value;if(s=jn(e)?Bn(s):s,r(s),De!==null&&n.add(De),await Yi(),s!==(s=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=s??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),Er(t)==null&&e.value&&(r(jn(e)?Bn(e.value):e.value),De!==null&&n.add(De)),ha(()=>{var a=t();if(e===document.activeElement){var s=ln??De;if(n.has(s))return}jn(e)&&a===Bn(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Sl(e,t,r=t){fa(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),Er(t)==null&&r(e.checked),ha(()=>{var n=t();e.checked=!!n})}function jn(e){var t=e.type;return t==="number"||t==="range"}function Bn(e){return e===""?null:+e}let sn=!1;function Pl(e){var t=sn;try{return sn=!1,[e(),sn]}finally{sn=t}}const xl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ce(e,t,r){return new Proxy({props:e,exclude:t},xl)}const $l={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Cr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Cr(a)&&(a=a());const s=Bt(a,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Cr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Bt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===Ft||t===cs)return!1;for(let r of e.props)if(Cr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Cr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ue(...e){return new Proxy({props:e},$l)}function Ne(e,t,r,n){var a=!xr||(r&ci)!==0,s=(r&di)!==0,i=(r&fi)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?Er(n):n),l),v;if(s){var _=Ft in e||cs in e;v=Bt(e,t)?.set??(_&&t in e?w=>e[t]=w:void 0)}var p,m=!1;s?[p,m]=Pl(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),v&&(a&&ti(),v(p)));var g;if(a?g=()=>{var w=e[t];return w===void 0?f():(c=!0,w)}:g=()=>{var w=e[t];return w!==void 0&&(l=void 0),w===void 0?l:w},a&&(r&ui)===0)return g;if(v){var x=e.$$legacy;return(function(w,S){return arguments.length>0?((!a||!S||x||m)&&v(S?g():w),w):g()})}var b=!1,y=((r&li)!==0?yn:ua)(()=>(b=!1,g()));s&&o(y);var P=Pe;return(function(w,S){if(arguments.length>0){const k=S?o(y):a&&s?Me(w):w;return E(y,k),b=!0,l!==void 0&&(l=k),w}return cr&&b||(P.f&or)!==0?y.v:o(y)})}function Xs(e){We===null&&us(),xr&&We.l!==null?kl(We).m.push(e):lr(()=>{const t=Er(e);if(typeof t=="function")return t})}function El(e){We===null&&us(),Xs(()=>()=>Er(e))}function kl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Al="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Al);const Tl="modulepreload",Nl=function(e){return"/"+e},Ra={},Ml=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(_=>Promise.resolve(_).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(v=>{if(v=Nl(v),v in Ra)return;Ra[v]=!0;const _=v.endsWith(".css"),p=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${p}`))return;const m=document.createElement("link");if(m.rel=_?"stylesheet":Tl,_||(m.as="script"),m.crossOrigin="",m.href=v,c&&m.setAttribute("nonce",c),document.head.appendChild(m),_)return new Promise((g,x)=>{m.addEventListener("load",g),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${v}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};class Cl extends Map{#e=new Map;#r=H(0);#c=H(0);#u=Mt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#l(t){return Mt===this.#u?H(t):Vt(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else return o(this.#r),!1}return o(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else{o(this.#r);return}}return o(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),s=super.get(t),i=super.set(t,r),l=this.#r;if(a===void 0)a=this.#l(0),n.set(t,a),E(this.#c,super.size),$t(l);else if(s!==r){$t(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(v=>c.has(v));f&&$t(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),E(this.#c,super.size),E(n,-1),$t(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;E(this.#c,0);for(var r of t.values())E(r,-1);$t(this.#r),t.clear()}}#o(){o(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#l(0);t.set(r,n)}}for([,n]of this.#e)o(n)}keys(){return o(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return o(this.#c),super.size}}class Il{#e;#r;constructor(t,r){this.#e=t,this.#r=ca(r)}get current(){return this.#r(),this.#e()}}const Dl=/\(.+\)/,Rl=new Set(["all","print","screen","and","or","not","only"]);class Ol extends Il{constructor(t,r){let n=Dl.test(t)||t.split(/[\s,]+/).some(s=>Rl.has(s.trim()))?t:`(${t})`;const a=window.matchMedia(n);super(()=>a.matches,s=>Qn(a,"change",s))}}const ql=typeof window<"u"?window:void 0;function jl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Bl{#e;#r;constructor(t={}){const{window:r=ql,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=ca(a=>{const s=Qn(r,"focusin",a),i=Qn(r,"focusout",a);return()=>{s(),i()}}))}get current(){return this.#r?.(),this.#e?jl(this.#e):null}}new Bl;function Ll(e){return typeof e=="function"}function zl(e,t){if(Ll(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Vl(e,t){let r=H(null);const n=Y(()=>zl(t,250));function a(...s){if(o(r))o(r).timeout&&clearTimeout(o(r).timeout);else{let i,l;const c=new Promise((f,v)=>{i=f,l=v});E(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return o(r).runner=async()=>{if(!o(r))return;const i=o(r);E(r,null);try{i.resolve(await e.apply(this,s))}catch(l){i.reject(l)}},o(r).timeout=setTimeout(o(r).runner,o(n)),o(r).promise}return a.cancel=async()=>{(!o(r)||o(r).timeout===null)&&(await new Promise(s=>setTimeout(s,0)),!o(r)||o(r).timeout===null)||(clearTimeout(o(r).timeout),o(r).reject("Cancelled"),E(r,null))},a.runScheduledNow=async()=>{(!o(r)||!o(r).timeout)&&(await new Promise(s=>setTimeout(s,0)),!o(r)||!o(r).timeout)||(clearTimeout(o(r).timeout),o(r).timeout=null,await o(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!o(r)?.timeout}}),a}function Ul(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),s=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return s.length?Lr(s.flatMap(i=>i.neededConsolidatedForDate)):[]}function Or(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function cn(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Lr(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function un(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>Zt(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],s=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(a.push({q:v,u:c}),s.push(Zt(v.toString(),c)))});const i=s.length>0?s.join(" et "):"✅ Complet";return{numeric:a,display:i}}function vr(e){return e?.length?e.map(t=>Zt(t.q.toString(),t.u)).join(" et "):"-"}function Zt(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Oa(e){return Or(e)}function ma(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Wl(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([s])=>{const i=new Date(s);return i>=n&&i<=a}).reduce((s,[i,l])=>s+(l.totalAssiettes||0),0)}function Gl(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Ql(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Hl(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function Kl(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return ma(t)}function Jl(e,t,r=""){if(e.status==="cancelled")return!1;const n=e.deliveryDate||e.$createdAt;return!n||n>t||r&&e.$createdAt<r?!1:e.status==="delivered"||e.status==="pending"||e.status==="ordered"&&n<=t}function qa(e,t){let r=[],n="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(r=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],n=e.stockParsed.dateTime);const a=[];if(e.purchases)for(const c of e.purchases)Jl(c,t,n)&&a.push({q:c.quantity,u:c.unit});const s=Yl(e,t),i=[...r,...a],l=ma(i);return Zl(l,s)}function Yl(e,t){if(!e.byDate)return[];const r=[];for(const[n,a]of Object.entries(e.byDate))if(n<=t){const i=a.totalConsolidated;i&&r.push(...i)}return ma(r)}function Zl(e,t){const r=new Map,n=new Map;e.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),t.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const a=[],s=new Set([...r.keys(),...n.keys()]);for(const i of s){const l=r.get(i)||0,c=n.get(i)||0,f=l-c;Math.abs(f)>.001&&a.push({q:f,u:i})}return a}function ja(e){if(!e?.length)return"Équilibré";const t=e.filter(n=>n.q>0),r=e.filter(n=>n.q<0);if(t.length>0&&r.length>0){const n=t.map(s=>Zt(s.q.toString(),s.u)).join(" et "),a=r.map(s=>Zt(Math.abs(s.q).toString(),s.u)).join(" et ");return`${n} disponibles, ${a} manquant${r.length>1?"s":""}`}else return t.length>0?t.map(n=>"+"+Zt(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>Zt(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function Xl(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class T{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}T.equal=(e,t)=>new T("equal",e,t).toString();T.notEqual=(e,t)=>new T("notEqual",e,t).toString();T.lessThan=(e,t)=>new T("lessThan",e,t).toString();T.lessThanEqual=(e,t)=>new T("lessThanEqual",e,t).toString();T.greaterThan=(e,t)=>new T("greaterThan",e,t).toString();T.greaterThanEqual=(e,t)=>new T("greaterThanEqual",e,t).toString();T.isNull=e=>new T("isNull",e).toString();T.isNotNull=e=>new T("isNotNull",e).toString();T.between=(e,t,r)=>new T("between",e,[t,r]).toString();T.startsWith=(e,t)=>new T("startsWith",e,t).toString();T.endsWith=(e,t)=>new T("endsWith",e,t).toString();T.select=e=>new T("select",void 0,e).toString();T.search=(e,t)=>new T("search",e,t).toString();T.orderDesc=e=>new T("orderDesc",e).toString();T.orderAsc=e=>new T("orderAsc",e).toString();T.orderRandom=()=>new T("orderRandom").toString();T.cursorAfter=e=>new T("cursorAfter",void 0,e).toString();T.cursorBefore=e=>new T("cursorBefore",void 0,e).toString();T.limit=e=>new T("limit",void 0,e).toString();T.offset=e=>new T("offset",void 0,e).toString();T.contains=(e,t)=>new T("contains",e,t).toString();T.notContains=(e,t)=>new T("notContains",e,t).toString();T.notSearch=(e,t)=>new T("notSearch",e,t).toString();T.notBetween=(e,t,r)=>new T("notBetween",e,[t,r]).toString();T.notStartsWith=(e,t)=>new T("notStartsWith",e,t).toString();T.notEndsWith=(e,t)=>new T("notEndsWith",e,t).toString();T.createdBefore=e=>new T("createdBefore",void 0,e).toString();T.createdAfter=e=>new T("createdAfter",void 0,e).toString();T.createdBetween=(e,t)=>new T("createdBetween",void 0,[e,t]).toString();T.updatedBefore=e=>new T("updatedBefore",void 0,e).toString();T.updatedAfter=e=>new T("updatedAfter",void 0,e).toString();T.updatedBetween=(e,t)=>new T("updatedBetween",void 0,[e,t]).toString();T.or=e=>new T("or",void 0,e.map(t=>JSON.parse(t))).toString();T.and=e=>new T("and",void 0,e.map(t=>JSON.parse(t))).toString();T.distanceEqual=(e,t,r,n=!0)=>new T("distanceEqual",e,[[t,r,n]]).toString();T.distanceNotEqual=(e,t,r,n=!0)=>new T("distanceNotEqual",e,[[t,r,n]]).toString();T.distanceGreaterThan=(e,t,r,n=!0)=>new T("distanceGreaterThan",e,[[t,r,n]]).toString();T.distanceLessThan=(e,t,r,n=!0)=>new T("distanceLessThan",e,[[t,r,n]]).toString();T.intersects=(e,t)=>new T("intersects",e,[t]).toString();T.notIntersects=(e,t)=>new T("notIntersects",e,[t]).toString();T.crosses=(e,t)=>new T("crosses",e,[t]).toString();T.notCrosses=(e,t)=>new T("notCrosses",e,[t]).toString();T.overlaps=(e,t)=>new T("overlaps",e,[t]).toString();T.notOverlaps=(e,t)=>new T("notOverlaps",e,[t]).toString();T.touches=(e,t)=>new T("touches",e,[t]).toString();T.notTouches=(e,t)=>new T("notTouches",e,[t]).toString();var Fs,eo;class wr{static custom(t){return t}static unique(t=7){const r=Xl(wr,Fs,"m",eo).call(wr);let n="";for(let a=0;a<t;a++){const s=Math.floor(Math.random()*16).toString(16);n+=s}return r+n}}Fs=wr,eo=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Ba;(function(e){e.Totp="totp"})(Ba||(Ba={}));var La;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(La||(La={}));var za;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(za||(za={}));var Va;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Va||(Va={}));var Ua;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ua||(Ua={}));var Wa;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Wa||(Wa={}));var Ga;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Ga||(Ga={}));var Qa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Qa||(Qa={}));var Ha;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Ha||(Ha={}));class Fl{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class to{constructor(t){this.generateIdentifier=t,this.kv=new Fl}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class ec extends to{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function tc(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function rc(e,t){const r=tc(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const s=n[a];if(t(s))return s}}function Sr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function dn(e,t){return e.indexOf(t)!==-1}function Ka(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class nc{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return rc(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const ac=e=>Object.prototype.toString.call(e).slice(8,-1),ro=e=>typeof e>"u",sc=e=>e===null,Wr=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Kn=e=>Wr(e)&&Object.keys(e).length===0,Wt=e=>Array.isArray(e),oc=e=>typeof e=="string",ic=e=>typeof e=="number"&&!isNaN(e),lc=e=>typeof e=="boolean",cc=e=>e instanceof RegExp,Gr=e=>e instanceof Map,Qr=e=>e instanceof Set,no=e=>ac(e)==="Symbol",uc=e=>e instanceof Date&&!isNaN(e.valueOf()),dc=e=>e instanceof Error,Ja=e=>typeof e=="number"&&isNaN(e),fc=e=>lc(e)||sc(e)||ro(e)||ic(e)||oc(e)||no(e),vc=e=>typeof e=="bigint",hc=e=>e===1/0||e===-1/0,pc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),mc=e=>e instanceof URL,ao=e=>e.replace(/\./g,"\\."),Ln=e=>e.map(String).map(ao).join("."),zr=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let s=e.charAt(a);if(s==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(s==="."){t.push(r),r="";continue}r+=s}const n=r;return t.push(n),t};function St(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const so=[St(ro,"undefined",()=>null,()=>{}),St(vc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),St(uc,"Date",e=>e.toISOString(),e=>new Date(e)),St(dc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),St(cc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),St(Qr,"set",e=>[...e.values()],e=>new Set(e)),St(Gr,"map",e=>[...e.entries()],e=>new Map(e)),St(e=>Ja(e)||hc(e),"number",e=>Ja(e)?"NaN":e>0?"Infinity":"-Infinity",Number),St(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),St(mc,"URL",e=>e.toString(),e=>new URL(e))];function En(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const oo=En((e,t)=>no(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),_c=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),io=En(pc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=_c[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function lo(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const co=En(lo,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),uo=En((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),gc=[co,oo,uo,io],Ya=(e,t)=>{const r=Ka(gc,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ka(so,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},fo={};so.forEach(e=>{fo[e.annotation]=e});const bc=(e,t,r)=>{if(Wt(t))switch(t[0]){case"symbol":return oo.untransform(e,t,r);case"class":return co.untransform(e,t,r);case"custom":return uo.untransform(e,t,r);case"typed-array":return io.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=fo[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},hr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function vo(e){if(dn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(dn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(dn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const yc=(e,t)=>{vo(t);for(let r=0;r<t.length;r++){const n=t[r];if(Qr(e))e=hr(e,+n);else if(Gr(e)){const a=+n,s=+t[++r]==0?"key":"value",i=hr(e,a);switch(s){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Jn=(e,t,r)=>{if(vo(t),t.length===0)return r(e);let n=e;for(let s=0;s<t.length-1;s++){const i=t[s];if(Wt(n)){const l=+i;n=n[l]}else if(Wr(n))n=n[i];else if(Qr(n)){const l=+i;n=hr(n,l)}else if(Gr(n)){if(s===t.length-2)break;const c=+i,f=+t[++s]==0?"key":"value",v=hr(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const a=t[t.length-1];if(Wt(n)?n[+a]=r(n[+a]):Wr(n)&&(n[a]=r(n[a])),Qr(n)){const s=hr(n,+a),i=r(s);s!==i&&(n.delete(s),n.add(i))}if(Gr(n)){const s=+t[t.length-2],i=hr(n,s);switch(+a==0?"key":"value"){case"key":{const c=r(i);n.set(c,n.get(i)),c!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Yn(e,t,r=[]){if(!e)return;if(!Wt(e)){Sr(e,(s,i)=>Yn(s,t,[...r,...zr(i)]));return}const[n,a]=e;a&&Sr(a,(s,i)=>{Yn(s,t,[...r,...zr(i)])}),t(n,r)}function wc(e,t,r){return Yn(t,(n,a)=>{e=Jn(e,a,s=>bc(s,n,r))}),e}function Sc(e,t){function r(n,a){const s=yc(e,zr(a));n.map(zr).forEach(i=>{e=Jn(e,i,()=>s)})}if(Wt(t)){const[n,a]=t;n.forEach(s=>{e=Jn(e,zr(s),()=>e)}),a&&Sr(a,r)}else Sr(t,r);return e}const Pc=(e,t)=>Wr(e)||Wt(e)||Gr(e)||Qr(e)||lo(e,t);function xc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function $c(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[s,...i]=a;s.length===0?n=i.map(Ln):r[Ln(s)]=i.map(Ln)}),n?Kn(r)?[n]:[n,r]:Kn(r)?void 0:r}const ho=(e,t,r,n,a=[],s=[],i=new Map)=>{const l=fc(e);if(!l){xc(e,a,t);const m=i.get(e);if(m)return n?{transformedValue:null}:m}if(!Pc(e,r)){const m=Ya(e,r),g=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return l||i.set(e,g),g}if(dn(s,e))return{transformedValue:null};const c=Ya(e,r),f=c?.value??e,v=Wt(f)?[]:{},_={};Sr(f,(m,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const x=ho(m,t,r,n,[...a,g],[...s,e],i);v[g]=x.transformedValue,Wt(x.annotations)?_[g]=x.annotations:Wr(x.annotations)&&Sr(x.annotations,(b,y)=>{_[ao(g)+"."+y]=b})});const p=Kn(_)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,_]:_};return l||i.set(e,p),p};function po(e){return Object.prototype.toString.call(e).slice(8,-1)}function Za(e){return po(e)==="Array"}function Ec(e){if(po(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function kc(e,t,r,n,a){const s={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";s==="enumerable"&&(e[t]=r),a&&s==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Zn(e,t={}){if(Za(e))return e.map(a=>Zn(a,t));if(!Ec(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,s)=>{if(Za(t.props)&&!t.props.includes(s))return a;const i=e[s],l=Zn(i,t);return kc(a,s,l,e,t.nonenumerable),a},{})}class je{constructor({dedupe:t=!1}={}){this.classRegistry=new ec,this.symbolRegistry=new to(r=>r.description??""),this.customTransformerRegistry=new nc,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=ho(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const s=$c(r,this.dedupe);return s&&(a.meta={...a.meta,referentialEqualities:s}),a}deserialize(t){const{json:r,meta:n}=t;let a=Zn(r);return n?.values&&(a=wc(a,n.values,this)),n?.referentialEqualities&&(a=Sc(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}je.defaultInstance=new je;je.serialize=je.defaultInstance.serialize.bind(je.defaultInstance);je.deserialize=je.defaultInstance.deserialize.bind(je.defaultInstance);je.stringify=je.defaultInstance.stringify.bind(je.defaultInstance);je.parse=je.defaultInstance.parse.bind(je.defaultInstance);je.registerClass=je.defaultInstance.registerClass.bind(je.defaultInstance);je.registerSymbol=je.defaultInstance.registerSymbol.bind(je.defaultInstance);je.registerCustom=je.defaultInstance.registerCustom.bind(je.defaultInstance);je.allowErrorProps=je.defaultInstance.allowErrorProps.bind(je.defaultInstance);function mo(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function yt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Ac(e,t,r=100){try{const{databases:n,config:a}=await yt(),s=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[T.greaterThan("$updatedAt",t),T.equal("mainId",e),T.limit(r),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${s.documents.length} purchases modifiés chargés`),s.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function _o(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:s}=await yt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,[T.equal("mainId",e),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),T.limit(n)])).documents;const i=await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,[T.greaterThan("$updatedAt",r),T.equal("mainId",e),T.limit(n),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const s=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${s}`)}}async function nr(e,t){try{const{databases:r,config:n}=await yt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function qt(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=mo(n,t),{databases:s,config:i}=await yt(),l=await s.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function go(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await nr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function bo(e,t){return nr(e,{who:t})}async function Xn(e,t){return nr(e,{stockReel:t})}async function yo(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const a={};return t.stockReel!==void 0&&(a.stockReel=t.stockReel),t.who!==void 0&&(a.who=t.who),t.storeInfo!==void 0&&(a.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await nr(e,a)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await qt(e,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function wo(e){try{const{databases:t,config:r}=await yt(),s=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:s.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,wr.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function So(e,t){try{const{databases:r,config:n}=await yt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),s={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,s);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,s),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Po(e){try{const{databases:t,config:r}=await yt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function xo(e){if(!e?.length)return[];try{const{databases:t,config:r}=await yt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[T.equal("$id",e),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function $o(e,t={}){let r=null;const n=s=>{const{events:i,payload:l}=s;if(!l)return;const c=i.some(m=>m.includes("products.")),f=i.some(m=>m.includes("purchases.")),v=i.some(m=>m.includes(".create")),_=i.some(m=>m.includes(".update")),p=i.some(m=>m.includes(".delete"));if(c){const m=l;v&&t.onProductCreate?t.onProductCreate(m):_&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(f){const m=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(m):_&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:s=>{console.error("[Appwrite Interactions] Erreur realtime:",s),t.onError?.(s)}}))}catch(s){console.error("[Appwrite Interactions] Impossible de configurer realtime:",s),t.onError?.(s)}})(),()=>{r&&(r(),r=null)}}async function Eo(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await yt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function ko(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await yt(),s=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function _a(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const s=JSON.parse(a.responseBody);return s.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${s.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",s.error),s}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function Ao(e,t,r,n){return _a({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function To(e,t,r,n="replace"){return _a({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function No(e,t,r,n={}){try{const{databases:a,config:s}=await yt(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const v of r){const _={products:[t],mainId:e,quantity:v.q,unit:v.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await a.createDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,wr.unique(),_);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const s=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${s}`)}}const Tc=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:_a,batchUpdateStore:Ao,batchUpdateWho:To,createMainDocument:ko,createPurchase:wo,createQuickValidationPurchases:No,deletePurchase:Po,enrichedProductToAppwriteProduct:mo,loadMainEventData:Eo,loadPurchasesListByIds:xo,loadUpdatedPurchases:Ac,subscribeToRealtime:$o,syncProductsWithPurchases:_o,updateProduct:nr,updateProductBatch:yo,updateProductStock:Xn,updateProductStore:go,updateProductWho:bo,updatePurchase:So,upsertProduct:qt},Symbol.toStringTag,{value:"Module"}));async function Nc(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Mc(e,t){const r=Kl(e.byDate),n=Lr(cn([])),{numeric:a,display:s}=un(r,n);return{$id:e.productSemanticKey||`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:vr(r),displayTotalPurchases:"-",displayMissingQuantity:s,totalNeededOverrideParsed:null}}function Cc(e,t){return e.map(r=>Mc(r,t))}class Ic{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";METADATA_KEY="cache-metadata";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=a=>{const s=a.target.result;s.objectStoreNames.contains(this.PRODUCTS_STORE)||(s.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),s.objectStoreNames.contains(this.METADATA_STORE)||(s.createObjectStore(this.METADATA_STORE),console.log("[IDBCache] Object store 'metadata' créé"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const s=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();s.onsuccess=()=>{const i=new Map;s.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},s.onerror=()=>r(s.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const s=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).get(this.METADATA_KEY);s.onsuccess=()=>{const i=s.result||{lastSync:null,allDates:[]};console.log(`[IDBCache] Metadata chargée: lastSync=${i.lastSync}, dates=${i.allDates?.length||0}`),t(i)},s.onerror=()=>r(s.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),s=a.objectStore(this.PRODUCTS_STORE);s.clear(),t.forEach(i=>{s.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put(t,this.METADATA_KEY);i.onsuccess=()=>{console.log("[IDBCache] Metadata sauvegardée"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Dc(e){const t=new Ic(e);return await t.open(),t}const Xa=1e3;class Rc{#e=new Cl;#r=H(null);#c=H(!1);#u=H(!1);#l=H(null);#o=H(!1);#i=H(!1);#a=H(null);#s=H(Me([]));#f=H(Me({start:null,end:null}));get dateRange(){return o(this.#f)}set dateRange(t){E(this.#f,t,!0)}#n=null;#d=null;#v=H(!1);#t=H(Me({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return o(this.#t)}get currentMainId(){return o(this.#r)}get isInitialized(){return o(this.#c)}get loading(){return o(this.#u)}get error(){return o(this.#l)}get lastSync(){return o(this.#a)}get syncing(){return o(this.#o)}get availableDates(){return o(this.#s)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,a=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:a}}isFullRange(){return this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate}initializeDateRange(){if((!this.dateRange.start||!this.dateRange.end)&&o(this.#s).length>0){const t=[...o(this.#s)].sort();this.dateRange={start:t[0],end:t[t.length-1]}}console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}get firstAvailableDate(){return o(this.#s).length===0?null:[...o(this.#s)].sort()[0]}get lastAvailableDate(){return o(this.#s).length===0?null:[...o(this.#s)].sort().pop()}get realtimeConnected(){return o(this.#i)}get hugoContentChanged(){return o(this.#v)}#_=Y(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return o(this.#_)}set enrichedProducts(t){E(this.#_,t)}#g=Y(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const t=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[a,s]of this.#e){if(!s.byDate||!this.#B(s))continue;Object.keys(s.byDate).some(c=>{const f=new Date(c);return f>=t&&f<=r})&&n.set(a,s)}return n});get filteredProductsMap(){return o(this.#g)}set filteredProductsMap(t){E(this.#g,t)}#w=Y(()=>{console.log("[Store] Calcul unifié des stats par produit (1 itération)");const t=new Map;if(this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using precomputed data");for(const[n,a]of this.#e){const s=qa(a,this.dateRange.end),i=s.filter(c=>c.q>0),l=s.filter(c=>c.q<0).map(c=>({q:Math.abs(c.q),u:c.u}));t.set(n,{quantities:a.totalNeededArray,formattedQuantities:vr(a.totalNeededArray),nbRecipes:a.nbRecipes||0,totalAssiettes:a.totalAssiettes||0,stockResult:s,availableQuantities:i,missingQuantities:l,formattedAvailableQuantities:ja(s),hasAvailable:i.length>0,hasMissing:l.length>0})}return t}for(const[n,a]of this.filteredProductsMap){if(!a.byDate)continue;const s=Ql(a.byDate),i=Ul(s,this.dateRange.start,this.dateRange.end),l=i.length>0?vr(i):"",c=Wl(a.byDate,this.dateRange.start,this.dateRange.end),v=Object.keys(a.byDate).filter(g=>{const x=new Date(g),b=new Date(this.dateRange.start),y=new Date(this.dateRange.end);return x>=b&&x<=y}).flatMap(g=>a.byDate[g]?.recipes||[]),_=qa(a,this.dateRange.end),p=_.filter(g=>g.q>0),m=_.filter(g=>g.q<0).map(g=>({q:Math.abs(g.q),u:g.u}));t.set(n,{quantities:i,formattedQuantities:l,nbRecipes:v.length,totalAssiettes:c,stockResult:_,availableQuantities:p,missingQuantities:m,formattedAvailableQuantities:ja(_),hasAvailable:p.length>0,hasMissing:m.length>0})}return t});get productsStatsByDateRange(){return o(this.#w)}set productsStatsByDateRange(t){E(this.#w,t)}#S=Y(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return o(this.#S)}set stats(t){E(this.#S,t)}#h=Y(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return o(this.#h)}set uniqueStores(t){E(this.#h,t)}#p=Y(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return o(this.#p)}set uniqueWho(t){E(this.#p,t)}#m=Y(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return o(this.#m)}set uniqueProductTypes(t){E(this.#m,t)}#$=Y(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((i,l)=>i.$id.localeCompare(l.$id));if(o(this.#t).groupBy==="none")return{"":r};const n=Object.groupBy(r,i=>o(this.#t).groupBy==="store"?i.storeInfo?.storeName||"Non défini":i.productType||"Non défini"),a=Object.keys(n).sort((i,l)=>i===""?1:l===""?-1:i.localeCompare(l)),s={};return a.forEach(i=>{s[i]=n[i]}),s});get groupedFilteredProducts(){return o(this.#$)}set groupedFilteredProducts(t){E(this.#$,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(o(this.#c)&&o(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),E(this.#r,t,!0);try{this.#n=await Dc(t)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}E(this.#l,null);try{if(await this.#T(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await Nc(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Cc(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),E(this.#s,[...n.allDates],!0),await Eo(t)||await ko(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#E()}this.initializeDateRange(),await this.#N(),E(this.#c,!0);const r=this.#j();this.#d=$o(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw E(this.#l,n,!0),console.error("[ProductsStore]",n,r),r}}async#T(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();E(this.#a,r.lastSync,!0),E(this.#s,[...r.allDates],!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#N(){if(o(this.#r)){E(this.#o,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${o(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${o(this.#a)}`);const t=await _o(o(this.#r),{lastSync:o(this.#a),limit:Xa});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#k(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),o(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${o(this.#a)}`);const{loadUpdatedPurchases:r}=await Ml(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Tc);return{loadUpdatedPurchases:a}},void 0),n=await r(o(this.#r),o(this.#a),Xa);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const s=a.products.map(i=>typeof i=="string"?i:i.$id);this.#x(s,a)}})}this.#M(),await this.#E(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{E(this.#o,!1)}}}async#E(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:o(this.#a),allDates:[...o(this.#s)]}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#P(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#M(){E(this.#a,new Date().toISOString(),!0)}#k(t,r){return r?this.#b(t,r):this.#C(t)}#C(t){const r=Lr(cn(t.purchases??[])),n=[],{numeric:a,display:s}=un(n,r),i=Or(t.stockReel)??null,l=vr(r),c=t.store?Or(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:s,totalNeededOverrideParsed:Oa(t.totalNeededOverride)}}#b(t,r){const n=t.purchases??r.purchases,a=Lr(cn(n??[])),s=vr(a),{numeric:i,display:l}=un(r.totalNeededArray,a),c=t.stockReel??r.stockReel,f=c?Or(c):r.stockParsed,v=t.store??r.store,_=v?Or(v):r.storeInfo,p=f?`${f.quantity} ${f.unit}`:s;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:v,stockReel:c,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:_,stockParsed:f,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:s,displayMissingQuantity:l,totalNeededOverrideParsed:Oa(t.totalNeededOverride??r.totalNeededOverride)}}#L(t){t.totalPurchasesArray=Lr(cn(t.purchases??[]));const{numeric:r,display:n}=un(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=vr(t.totalPurchasesArray)}#z(t){t.length&&(t.forEach(r=>this.#y(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#y(t){const r=this.#e.get(t.$id),n=this.#k(t,r);this.#e.set(t.$id,n)}#I(t){this.#e.delete(t)}async#D(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#q(r,t),r}async#R(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#x(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await xo([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#x(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#O(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t));return r.forEach(n=>{this.#y(n)}),r.map(n=>n.$id)}#A(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#q(t,r){const n=this.#A(r),a=[];t.forEach(s=>{const i=this.#e.get(s);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#b({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(s=>{this.#e.set(s.$id,s)})}#x(t,r){const n=this.#A(r),a=[];t.forEach(s=>{const i=this.#e.get(s);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#b({...i,purchases:f,status:"active"},i);a.push(v)}else{const f=this.#b({...i,purchases:[...l,r],status:"active"},i);a.push(f)}}}),a.forEach(s=>{this.#e.set(s.$id,s)})}#j(){return{onProductCreate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#I(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#D(t);await this.#P(r)},onPurchaseUpdate:async t=>{const r=await this.#R(t);await this.#P(r)},onPurchaseDelete:async t=>{const r=await this.#O(t);await this.#P(r)},onConnect:()=>{E(this.#i,!0)},onDisconnect:()=>{E(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#B(t){if(o(this.#t).searchQuery.trim()){const r=o(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(o(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!o(this.#t).selectedStores.includes(t.storeInfo.storeName))||o(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>o(this.#t).selectedWho.includes(r)))||o(this.#t).selectedProductTypes.length>0&&(!t.productType||!o(this.#t).selectedProductTypes.includes(t.productType))||o(this.#t).selectedTemperatures.length>0&&!(o(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||o(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Vl(t=>{o(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=o(this.#t).selectedProductTypes.indexOf(t);r>-1?o(this.#t).selectedProductTypes.splice(r,1):o(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=o(this.#t).selectedTemperatures.indexOf(t);r>-1?o(this.#t).selectedTemperatures.splice(r,1):o(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){o(this.#t).selectedProductTypes=[],o(this.#t).selectedTemperatures=[]}setGroupBy(t){o(this.#t).groupBy=t}toggleStore(t){const r=o(this.#t).selectedStores.indexOf(t);r>-1?o(this.#t).selectedStores.splice(r,1):o(this.#t).selectedStores.push(t)}toggleWho(t){const r=o(this.#t).selectedWho.indexOf(t);r>-1?o(this.#t).selectedWho.splice(r,1):o(this.#t).selectedWho.push(t)}clearStoreFilters(){o(this.#t).selectedStores=[]}clearWhoFilters(){o(this.#t).selectedWho=[]}handleSort(t){o(this.#t).sortColumn===t?o(this.#t).sortDirection=o(this.#t).sortDirection==="asc"?"desc":"asc":(o(this.#t).sortColumn=t,o(this.#t).sortDirection="asc")}clearFilters(){E(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return o(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[o(this.#t).sortColumn],s=n[o(this.#t).sortColumn];return o(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,s=parseFloat(s)||0):o(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,s=n.purchases?.length||0),a<s?o(this.#t).sortDirection==="asc"?-1:1:a>s?o(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Gl(r.byDate):!1}get enrichedProductsCount(){return this.#e.size}async forceReload(t){await this.clearCache(),await this.initialize(t)}async clearCache(){this.#e.clear(),E(this.#s,[],!0),E(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const s=this.#e.get(a);if(s){const i={...s,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#d?.(),this.#d=null,this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const X=new Rc;function Oc(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const qc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var jc=ol("<svg><!><!></svg>");function de(e,t){z(t,!0);const r=Ne(t,"color",3,"currentColor"),n=Ne(t,"size",3,24),a=Ne(t,"strokeWidth",3,2),s=Ne(t,"absoluteStrokeWidth",3,!1),i=Ne(t,"iconNode",19,()=>[]),l=ce(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=jc();Ia(c,_=>({...qc,...l,width:n(),height:n(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>s()?Number(a())*24/Number(n()):a()]);var f=u(c);it(f,17,i,Hn,(_,p)=>{var m=Y(()=>ls(o(p),2));let g=()=>o(m)[0],x=()=>o(m)[1];var b=L(),y=R(b);vl(y,g,!0,(P,w)=>{Ia(P,()=>({...x()}))}),h(_,b)});var v=d(f);se(v,()=>t.children??te),h(e,c),V()}function Fn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];de(e,ue({name:"archive"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Bc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];de(e,ue({name:"bean"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Lc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];de(e,ue({name:"beef"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function zc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];de(e,ue({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Vc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];de(e,ue({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Hr(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];de(e,ue({name:"check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Uc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];de(e,ue({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Wc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];de(e,ue({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Gc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];de(e,ue({name:"circle-arrow-down"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Qc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];de(e,ue({name:"circle-arrow-right"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Fa(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];de(e,ue({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Hc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];de(e,ue({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Kc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];de(e,ue({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Jc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];de(e,ue({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Yc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];de(e,ue({name:"clock"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Zc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];de(e,ue({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function ga(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];de(e,ue({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Xc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];de(e,ue({name:"egg"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Fc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];de(e,ue({name:"euro"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function eu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];de(e,ue({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Mo(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];de(e,ue({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function tu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];de(e,ue({name:"info"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function ru(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];de(e,ue({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function nu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];de(e,ue({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function au(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];de(e,ue({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function su(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];de(e,ue({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function ou(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];de(e,ue({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function iu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];de(e,ue({name:"message-circle-more"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function lu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];de(e,ue({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function ba(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];de(e,ue({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function cu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];de(e,ue({name:"moon"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function uu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];de(e,ue({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Zr(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];de(e,ue({name:"package"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function du(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];de(e,ue({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function fu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];de(e,ue({name:"plus"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function vu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];de(e,ue({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function hu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];de(e,ue({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function pu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];de(e,ue({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function mu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];de(e,ue({name:"save"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function _u(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];de(e,ue({name:"search"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Co(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];de(e,ue({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function zt(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];de(e,ue({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Io(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];de(e,ue({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function ea(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];de(e,ue({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Gt(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];de(e,ue({name:"store"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function gu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];de(e,ue({name:"sun"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function bu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];de(e,ue({name:"thermometer"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function kn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];de(e,ue({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Do(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];de(e,ue({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function Xr(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];de(e,ue({name:"user"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function ta(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];de(e,ue({name:"users"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function yu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];de(e,ue({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}function bt(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];de(e,ue({name:"x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);se(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),V()}class wu{isMobileQuery=new Ol("max-width: 767px");get isMobile(){return this.isMobileQuery.current}userName(){return localStorage.getItem("appwrite-user-name")||""}}const Kr=new wu;function Su(e,t){const r=e.reduce((a,s)=>{const i=s.isSynced?0:1,l=s.missingQuantities.length;return a+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function Pu(e,t){const r=e.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const a=t.purchaseStatus||"delivered";let s=t.purchaseDeliveryDate||null;a==="delivered"&&!s&&(s=new Date().toISOString());const i=e.flatMap(c=>c.missingQuantities.map(f=>({productId:c.productId,quantity:f.q,unit:f.u,status:a,notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:s,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:t}}async function xu(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=Su(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,s=[];if(n<=a)s.push(t);else{let p=[],m=0;for(const g of t){const x=(g.isSynced?0:1)+g.missingQuantities.length;m+x>a?(p.length>0&&s.push(p),p=[g],m=x):(p.push(g),m+=x)}p.length>0&&s.push(p)}console.log(`[Appwrite Interactions] Découpage en ${s.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<s.length;p++){const m=s[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${s.length} (${m.length} produits)`);try{const g=await Pu(m,r),x=await $u(g);if(i.push(x),x.success)l+=x.productsCreated,c+=x.purchasesCreated,f+=x.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${x.error}`);break}}catch(g){const x=g instanceof Error?g.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,g),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:x,timestamp:new Date().toISOString()});break}}const v=i.every(p=>p.success),_=i.some(p=>!p.success);return{success:v,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:_?"Un ou plusieurs lots ont échoué":void 0}}async function $u(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const s=JSON.parse(a.responseBody);return s.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${s.productsCreated} produits créés, ${s.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",s.error),s}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var Eu=(e,t,r)=>t(o(r).id),ku=$('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),Au=$('<span class="flex items-center gap-1"><!> </span>'),Tu=$('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Nu=$('<div class="flex flex-wrap gap-2"></div> <!>',1);function Jr(e,t){z(t,!0);let r=Ne(t,"badgeSize",3,"badge-lg"),n=Ne(t,"color",3,"primary"),a=Ne(t,"badgeStyle",3,""),s=Ne(t,"onToggleItem",3,()=>{}),i=Ne(t,"showStats",3,!1),l=Ne(t,"showIcon",3,!0),c=H(Me({}));lr(()=>{const b={};t.items.forEach(y=>{b[y.id]=y.selected??!0}),E(c,b,!0)});function f(b){o(c)[b]=!o(c)[b],s()(b)}const v=Y(()=>Object.values(o(c)).filter(Boolean).length),_=Y(()=>Object.values(o(c)).filter(b=>!b).length);var p=Nu(),m=R(p);it(m,21,()=>t.items,b=>b.id,(b,y)=>{const P=Y(()=>o(c)[o(y).id]);var w=ku();w.__click=[Eu,f,y];var S=u(w);{var k=j=>{var W=L(),ne=R(W);er(ne,()=>o(y).icon,(re,D)=>{D(re,{class:"h-3 w-3",get title(){return o(y).title}})}),h(j,W)};M(S,j=>{o(y).icon&&j(k)})}var A=d(S,2),C=u(A),O=d(A,2);{var F=j=>{var W=L(),ne=R(W);{var re=I=>{Hr(I,{size:16})},D=I=>{fu(I,{size:16})};M(ne,I=>{o(P)?I(re):I(D,!1)})}h(j,W)};M(O,j=>{l()&&j(F)})}G(()=>{Ee(w,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${o(P)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Ut(w,"title",o(P)?"Retirer de la liste":"Réajouter à la liste"),U(C,o(y).label)}),h(b,w)});var g=d(m,2);{var x=b=>{var y=Tu(),P=u(y),w=u(P),S=u(w);Hr(S,{class:"text-success h-3 w-3"});var k=d(S),A=d(w,2);{var C=j=>{var W=Au(),ne=u(W);bt(ne,{class:"text-error h-3 w-3"});var re=d(ne);G(()=>U(re,` ${o(_)??""} retirés`)),h(j,W)};M(A,j=>{o(_)>0&&j(C)})}var O=d(P,2),F=u(O);G(()=>{U(k,` ${o(v)??""} actifs`),U(F,`Total: ${t.items.length??""} items`)}),h(b,y)};M(g,b=>{i()&&b(x)})}h(e,p),V()}Ze(["click"]);function Mu(e,t){E(t,!o(t))}var Cu=$('<span class="text-base-content font-semibold"> </span>'),Iu=$('<div class="text-base-content/80 flex-1"> </div>'),Du=$('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Ru=$('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Ou=$('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Ro(e,t){let r=Ne(t,"icon",3,tu),n=Ne(t,"class",3,""),a=Ne(t,"initiallyOpen",3,!1),s=r(),i=H(Me(a())),l=Me(t.children);var c=Ou(),f=u(c);f.__click=[Mu,i];var v=u(f),_=u(v);s(_,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(_,2);{var m=S=>{var k=Cu(),A=u(k);G(()=>U(A,t.title)),h(S,k)};M(p,S=>{t.title&&S(m)})}var g=d(v,2);{var x=S=>{var k=Iu(),A=u(k);G(()=>U(A,t.contentVisible)),h(S,k)};M(g,S=>{t.contentVisible&&S(x)})}var b=d(g,2);{var y=S=>{var k=Du(),A=u(k),C=u(A);{var O=W=>{var ne=mt("en savoir plus");h(W,ne)},F=W=>{var ne=mt("masquer");h(W,ne)};M(C,W=>{o(i)?W(F,!1):W(O)})}var j=d(A,2);{let W=Y(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${o(i)?"rotate-180":""}`);Wc(j,{get class(){return o(W)}})}h(S,k)};M(b,S=>{l&&S(y)})}var P=d(f,2);{var w=S=>{var k=Ru(),A=u(k),C=u(A);se(C,()=>t.children??te),G(()=>Ee(k,1,`overflow-hidden transition-all duration-200 ${o(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h(S,k)};M(P,S=>{l&&S(w)})}G(()=>{Ee(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Hs(c,t.style),Ee(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Ut(f,"aria-expanded",o(i))}),h(e,c)}Ze(["click"]);async function qu(e,t,r,n,a,s,i,l){if(!(!o(t)||o(r))){E(r,!0),E(n,null),E(a,null);try{const c=`FACTURE_${Date.now()}`,f=o(s).map(m=>m.$id);X.setSyncStatus(f,!0);const v=[];for(const m of o(s))v.push({productId:m.$id,isSynced:m.isSynced,productData:m,missingQuantities:m.missingQuantityArray||[]});const _={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${o(s).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const p=await xu(X.currentMainId,v,_);if(p.success)E(a,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";E(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),X.clearSyncStatus()}finally{E(r,!1)}}}function es(e,t,r){o(t)||r.onClose()}var ju=$('<div class="alert alert-error"><!> <span> </span></div>'),Bu=$('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),Lu=$(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),zu=$("<option> </option>"),Vu=$("<option> </option>"),Uu=$('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),Wu=$('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Gu=$("<!> ",1),Qu=$(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option>Annulé</option></select> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function Hu(e,t){z(t,!0);let r=H(!1),n=H(null),a=H(null),s=Me({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=H(Me(new Set));lr(()=>{E(i,new Set(t.products.map(Z=>Z.$id)),!0)});const l=Y(()=>t.products.filter(Z=>o(i).has(Z.$id))),c=Y(()=>o(l).length!==0),f=Y(()=>`Achat groupé (${o(l).length} produits sélectionnés)`);function v(Z){const we=new Set(o(i));we.has(Z)?we.delete(Z):we.add(Z),E(i,we,!0)}const _=Y(()=>t.products.map(Z=>({id:Z.$id,label:Z.productName,title:Z.productName})));var p=Qu(),m=u(p),g=u(m),x=u(g),b=u(x);zt(b,{class:"h-5 w-5"});var y=d(b),P=d(x,2);P.__click=[es,r,t];var w=u(P);bt(w,{class:"h-4 w-4"});var S=d(g,2),k=u(S);{var A=Z=>{var we=ju(),Ae=u(we);kn(Ae,{class:"h-4 w-4"});var Qe=d(Ae,2),ze=u(Qe);G(()=>U(ze,o(n))),h(Z,we)};M(k,Z=>{o(n)&&Z(A)})}var C=d(k,2);{var O=Z=>{var we=Bu(),Ae=u(we);Hr(Ae,{class:"h-4 w-4"});var Qe=d(Ae,2),ze=u(Qe),et=d(ze);{var ct=Se=>{var Te=mt("+ 1 dépense globale");h(Se,Te)};M(et,Se=>{o(a).expense&&Se(ct)})}var ee=d(et,2);{var he=Se=>{var Te=mt();G(()=>U(Te,`(traité en ${o(a).batches??""} lots)`)),h(Se,Te)};M(ee,Se=>{o(a).batches&&o(a).batches>1&&Se(he)})}G(()=>U(ze,`Achat groupé créé avec succès ! ${o(a).purchases??""} produit(s) validés `)),h(Z,we)};M(C,Z=>{o(a)&&Z(O)})}var F=d(C,2),j=u(F);Ro(j,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(Z,we)=>{var Ae=Lu();h(Z,Ae)},$$slots:{default:!0}});var W=d(F,2),ne=d(u(W),2),re=u(ne),D=u(re),I=u(D);Gt(I,{class:"h-4 w-4 opacity-50"});var K=d(I,2),ae=d(D,2);it(ae,21,()=>X.uniqueStores,Hn,(Z,we)=>{var Ae=zu(),Qe=u(Ae),ze={};G(()=>{U(Qe,o(we)),ze!==(ze=o(we))&&(Ae.value=(Ae.__value=o(we))??"")}),h(Z,Ae)});var N=d(re,2),Q=u(N),ie=u(Q);Xr(ie,{class:"h-4 w-4 opacity-50"});var oe=d(ie,2),fe=d(Q,2);it(fe,21,()=>X.uniqueWho,Hn,(Z,we)=>{var Ae=Vu(),Qe=u(Ae),ze={};G(()=>{U(Qe,o(we)),ze!==(ze=o(we))&&(Ae.value=(Ae.__value=o(we))??"")}),h(Z,Ae)});var be=d(N,2),xe=u(be),B=u(xe);Fc(B,{class:"h-4 w-4 opacity-50"});var me=d(B,2),q=d(ne,2),le=u(q),ke=u(le),Be=u(ke);Be.value=Be.__value="delivered";var Le=d(Be);Le.value=Le.__value="ordered";var Re=d(Le);Re.value=Re.__value="requested";var Ke=d(Re);Ke.value=Ke.__value="cancelled";var pe=d(ke,2),ye=d(le,2);{var st=Z=>{var we=Uu(),Ae=u(we),Qe=d(u(Ae),2);G(()=>Qe.disabled=o(r)),Ce(Qe,()=>s.deliveryDate,ze=>s.deliveryDate=ze),h(Z,we)};M(ye,Z=>{s.status==="ordered"&&Z(st)})}var ft=d(q,2),ve=u(ft),J=u(ve);ba(J,{class:"h-4 w-4 opacity-50"});var ge=d(J,2),Ue=d(W,2),rt=d(u(Ue),2);Jr(rt,{get items(){return o(_)},onToggleItem:v,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var _e=d(Ue,2),Ie=u(_e);Ie.__click=[es,r,t];var Ge=d(Ie,2);Ge.__click=[qu,c,r,n,a,l,s,t];var kt=u(Ge);{var At=Z=>{var we=Wu();h(Z,we)},Ht=Z=>{var we=Gu(),Ae=R(we);zt(Ae,{class:"h-4 w-4"});var Qe=d(Ae);G(()=>U(Qe,` Valider ${o(l).length??""} produit(s)`)),h(Z,we)};M(kt,Z=>{o(r)?Z(At):Z(Ht,!1)})}G(()=>{U(y,` ${o(f)??""}`),P.disabled=o(r),K.disabled=o(r),oe.disabled=o(r),me.disabled=o(r),ke.disabled=o(r),Ee(pe,1,`label text-sm ${s.status==="delivered"?"":"hidden"}`),ge.disabled=o(r),Ie.disabled=o(r),Ge.disabled=o(r)||!o(c)}),Ce(K,()=>s.store,Z=>s.store=Z),Ce(oe,()=>s.who,Z=>s.who=Z),Ce(me,()=>s.expense,Z=>s.expense=Z),Yt(ke,()=>s.status,Z=>s.status=Z),Ce(ge,()=>s.notes,Z=>s.notes=Z),h(e,p),V()}Ze(["click"]);function ra(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Bc};case"animaux":return{displayName:"Viandes et Poissons",icon:Lc};case"legumes":return{displayName:"Fruits et Légumes",icon:Vc};case"sucres":return{displayName:"Sucrées",icon:zc};case"lof":return{displayName:"L.O.F",icon:Xc};case"autres":return{displayName:"Autres",icon:Uc};case"epices":return{displayName:"Assaisonnements",icon:nu};case"frais":return{displayName:"Produits Frais",icon:pu};default:return{displayName:e,icon:Zr}}}function ts(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function An(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Tn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Ku(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function na(e){switch(e){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function rs(e){return e?Tn(e):"-"}function Ju(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",s=n.unit||"unit",i=`${a}_${s}`;if(!r[i]){const l=na(a);r[i]={status:a,unit:s,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Yu(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function Yu(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function Zu(e){let t=H(!1),r=H(null);const n=Y(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),X.getEnrichedProductById(e))),a=Y(()=>o(n)?.who??[]),s=Y(()=>o(n)?.stockParsed??null),i=Y(()=>o(n)?.purchases??[]),l=Y(()=>o(n)?.byDate?Hl(o(n).byDate):[]),c=Me({purchase:{quantity:null,unit:"",store:"",who:Kr.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=H(!1),v=H(null);lr(()=>{!o(n)||o(f)||(c.purchase.quantity=o(n).missingQuantityArray[0]?.q??null,c.purchase.unit=o(n).totalNeededArray[0]?.u??"",c.purchase.store=o(n).storeInfo?.storeName??"",c.purchase.who=Kr.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=o(n).totalNeededArray[0]?.u??"",c.store.name=o(n).storeInfo?.storeName??"",c.store.comment=o(n).storeInfo?.storeComment??null,c.who=o(n)?.who?[...o(n).who]:[],E(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),E(f,!0))});const _=Y(()=>o(v)?{store:JSON.stringify(c.store)!==JSON.stringify(o(v).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(o(v).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?o(s)?c.stock.quantity.toString()!==o(s).quantity||c.stock.unit!==o(s).unit||(c.stock.notes||"")!==(o(s).notes||""):!0:!1}const m=Y(()=>!!(o(v)&&(o(_).store||o(_).stock||o(_).who)));let g=H(null);const x=Y(()=>o(g)?o(i).find(D=>D.$id===o(g))??null:null);async function b(D,I){E(t,!0),E(r,null);try{const K=await D();return I&&y("success",I),K}catch(K){const ae=K instanceof Error?K.message:"Une erreur est survenue";return E(r,ae,!0),y("error",ae),console.error("[ProductModalState]",K),null}finally{E(t,!1)}}function y(D,I){const K=new CustomEvent("toast",{detail:{type:D,message:I}});window.dispatchEvent(K)}async function P(){o(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!X.currentMainId)throw new Error("mainId non disponible");const{quantity:D,unit:I}=ts(c.purchase.quantity,c.purchase.unit);o(n).isSynced||(console.log(`[ProductModalState] Produit ${o(n).$id} local, création pour purchase...`),await qt(o(n).$id,{},N=>X.getEnrichedProductById(N)));const K=c.purchase.status||"delivered";let ae=c.purchase.deliveryDate||null;K==="delivered"&&!ae&&(ae=new Date().toISOString()),await wo({products:[o(n).$id],mainId:X.currentMainId,unit:I,quantity:D,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:K,orderDate:c.purchase.orderDate||null,deliveryDate:ae}),c.purchase={quantity:o(n).missingQuantityArray[0]?.q??null,unit:o(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function w(D){E(g,D.$id,!0)}function S(){E(g,null)}async function k(D){D.$id&&await b(async()=>{const{quantity:I,unit:K}=ts(D.quantity,D.unit),ae=D.status||null;let N=D.deliveryDate||null;ae==="delivered"&&!N&&(N=new Date().toISOString()),await So(D.$id,{unit:K,quantity:I,store:D.store||null,who:D.who||null,notes:D.notes||"",price:D.price||null,status:ae,orderDate:D.orderDate||null,deliveryDate:N}),E(g,null)},"Achat modifié avec succès")}async function A(D){const I=o(i).find(K=>K.$id===D);I&&confirm(`Supprimer cet achat (${I.quantity} ${I.unit}) ?`)&&await b(async()=>{await Po(D)},"Achat supprimé avec succès")}async function C(){o(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const D={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, update stock normal...`),await Xn(o(n).$id,JSON.stringify(D))):(console.log(`[ProductModalState] Produit ${o(n).$id} local, création stock avec upsert...`),await qt(o(n).$id,{stockReel:JSON.stringify(D)},I=>X.getEnrichedProductById(I))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function O(){o(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, suppression stock normal...`),await Xn(o(n).$id,null)):(console.log(`[ProductModalState] Produit ${o(n).$id} local, suppression stock avec upsert...`),await qt(o(n).$id,{stockReel:null},D=>X.getEnrichedProductById(D)))},"Stock supprimé")}async function F(D){o(n)&&await b(async()=>{o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, setWho normal...`),await bo(o(n).$id,D)):(console.log(`[ProductModalState] Produit ${o(n).$id} local, création who avec upsert...`),await qt(o(n).$id,{who:D},I=>X.getEnrichedProductById(I)))},"Volontaires mis à jour")}async function j(D){o(n)&&await b(async()=>{o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, update store normal...`),await go(o(n).$id,D)):(console.log(`[ProductModalState] Produit ${o(n).$id} local, création store avec upsert...`),await qt(o(n).$id,{store:JSON.stringify(D)},I=>X.getEnrichedProductById(I)))},"Magasin mis à jour")}async function W(D){o(n)&&await b(async()=>{await nr(o(n).$id,{totalNeededOverride:JSON.stringify(D)})},"Override appliqué")}async function ne(){o(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await nr(o(n).$id,{totalNeededOverride:null})},"Override supprimé")}async function re(){!o(n)||!o(m)||await b(async()=>{const D={};if(o(_).stock&&c.stock.quantity&&c.stock.unit){const I={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};D.stockReel=JSON.stringify(I)}if(o(_).who&&(D.who=c.who),o(_).store){const I={storeName:c.store.name||"",storeComment:c.store.comment||void 0};D.storeInfo=I}Object.keys(D).length>0&&(await yo(o(n).$id,D,I=>X.getEnrichedProductById(I)),E(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return o(t)},get error(){return o(r)},get product(){return o(n)},get recipes(){return o(l)},get whoList(){return o(a)},get stockParsed(){return o(s)},get purchasesList(){return o(i)},get editingPurchaseId(){return o(g)},get editingPurchaseData(){return o(x)},forms:c,addPurchase:P,startEditPurchase:w,cancelEditPurchase:S,updateEditedPurchase:k,removePurchase:A,setStock:C,removeStock:O,setWho:F,updateStore:j,setOverride:W,removeOverride:ne,saveAllChanges:re,get hasChanges(){return o(_)},get hasAnyChanges(){return o(m)},formatQuantity:An,formatDate:Tn,formatDisplayQuantity:Ku}}function Xu(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Fu(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function ed(e,t){t().cancelEditPurchase()}var td=$('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),rd=$('<span class="loading loading-spinner loading-sm"></span>'),nd=$('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),ad=$('<span class="loading loading-spinner loading-sm"></span>'),sd=$('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),od=(e,t,r)=>t(o(r)),id=(e,t,r)=>t(o(r).$id),ld=$('<span class="loading loading-spinner loading-sm"></span>'),cd=$('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),ud=$('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),dd=$(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function fd(e,t){z(t,!0);let r=Ne(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(ve){return ve.quantity!==null&&ve.quantity!==0&&ve.unit?.trim()!==""}function s(ve){r().removePurchase(ve)}function i(ve){r().startEditPurchase(ve)}var l=dd(),c=u(l),f=u(c);zt(f,{class:"h-5 w-5"});var v=d(c,2),_=u(v),p=d(u(_),2),m=u(p),g=u(m);Zr(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2),b=d(m,2),y=u(b);y.value=y.__value="";var P=d(y);P.value=P.__value="kg";var w=d(P);w.value=w.__value="gr.";var S=d(w);S.value=S.__value="l.";var k=d(S);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var C=d(A);C.value=C.__value="bottes";var O=d(b,2),F=u(O);Gt(F,{class:"h-4 w-4 opacity-50"});var j=d(F,2),W=d(O,2),ne=u(W);Xr(ne,{class:"h-4 w-4 opacity-50"});var re=d(ne,2),D=d(W,2),I=d(u(D),2),K=d(p,2),ae=u(K),N=u(ae);ba(N,{class:"h-4 w-4 opacity-50"});var Q=d(N,2),ie=d(K,2),oe=u(ie),fe=u(oe),be=u(fe),xe=u(be);xe.value=xe.__value="delivered";var B=d(xe);B.value=B.__value="ordered";var me=d(B);me.value=me.__value="requested";var q=d(fe,2),le=d(oe,2);{var ke=ve=>{var J=td(),ge=d(u(J),2);Ce(ge,()=>r().forms.purchase.deliveryDate,Ue=>r().forms.purchase.deliveryDate=Ue),h(ve,J)};M(le,ve=>{r().forms.purchase.status==="ordered"&&ve(ke)})}var Be=d(ie,2),Le=u(Be);Le.__click=[Xu,n,r];var Re=u(Le);{var Ke=ve=>{var J=rd();h(ve,J)},pe=ve=>{var J=mt("Ajouter l'achat");h(ve,J)};M(Re,ve=>{r().loading?ve(Ke):ve(pe,!1)})}var ye=d(v,2);{var st=ve=>{var J=nd(),ge=u(J);zt(ge,{class:"mx-auto mb-2 h-12 w-12"}),h(ve,J)},ft=ve=>{var J=ud(),ge=u(J),Ue=d(u(ge));it(Ue,21,()=>r().purchasesList,rt=>rt.$id,(rt,_e,Ie)=>{var Ge=L(),kt=R(Ge);{var At=Z=>{var we=sd(),Ae=u(we),Qe=u(Ae),ze=u(Qe),et=d(ze,2),ct=u(et);ct.value=ct.__value="kg";var ee=d(ct);ee.value=ee.__value="gr.";var he=d(ee);he.value=he.__value="l.";var Se=d(he);Se.value=Se.__value="ml";var Te=d(Se);Te.value=Te.__value="unité";var Je=d(Te);Je.value=Je.__value="bottes";var Ve=d(Ae),He=u(Ve),Oe=d(Ve),Ot=u(Oe),Fr=d(Oe),kr=u(Fr),Ar=u(kr);Ar.value=Ar.__value="requested";var Tr=d(Ar);Tr.value=Tr.__value="ordered";var Nr=d(Tr);Nr.value=Nr.__value="delivered";var ur=d(Nr);ur.value=ur.__value="cancelled";var en=d(Fr),Mr=u(en),tn=d(en),Nn=u(tn),rn=d(tn),wt=u(rn),dr=d(rn),Mn=u(dr),Cn=d(dr),In=u(Cn),nn=u(In);nn.__click=[Fu,r,a];var qo=u(nn);{var jo=qe=>{var zo=ad();h(qe,zo)},Bo=qe=>{mu(qe,{class:"h-3 w-3"})};M(qo,qe=>{r().loading?qe(jo):qe(Bo,!1)})}var ya=d(nn,2);ya.__click=[ed,r];var Lo=u(ya);bt(Lo,{class:"h-3 w-3"}),G(qe=>nn.disabled=qe,[()=>r().loading||!a(o(_e))]),Ce(ze,()=>o(_e).quantity,qe=>o(_e).quantity=qe),Yt(et,()=>o(_e).unit,qe=>o(_e).unit=qe),Ce(He,()=>o(_e).store,qe=>o(_e).store=qe),Ce(Ot,()=>o(_e).who,qe=>o(_e).who=qe),Yt(kr,()=>o(_e).status,qe=>o(_e).status=qe),Ce(Mr,()=>o(_e).orderDate,qe=>o(_e).orderDate=qe),Ce(Nn,()=>o(_e).deliveryDate,qe=>o(_e).deliveryDate=qe),Ce(wt,()=>o(_e).price,qe=>o(_e).price=qe),Ce(Mn,()=>o(_e).notes,qe=>o(_e).notes=qe),h(Z,we)},Ht=Z=>{var we=cd(),Ae=u(we),Qe=u(Ae),ze=d(Ae),et=u(ze),ct=d(ze),ee=u(ct),he=d(ct),Se=u(he),Te=u(Se),Je=d(he),Ve=u(Je),He=d(Je),Oe=u(He),Ot=d(He),Fr=u(Ot),kr=d(Ot),Ar=u(kr),Tr=d(kr),Nr=u(Tr),ur=u(Nr);ur.__click=[od,i,_e];var en=u(ur);ea(en,{class:"h-4 w-4"});var Mr=d(ur,2);Mr.__click=[id,s,_e];var tn=u(Mr);{var Nn=wt=>{var dr=ld();h(wt,dr)},rn=wt=>{bt(wt,{class:"h-4 w-4"})};M(tn,wt=>{r().loading?wt(Nn):wt(rn,!1)})}G((wt,dr,Mn,Cn,In)=>{U(Qe,wt),U(et,o(_e).store||"-"),U(ee,o(_e).who||"-"),Ee(Se,1,`badge badge-sm ${dr??""}`),U(Te,Mn),U(Ve,Cn),U(Oe,In),U(Fr,o(_e).price?`${o(_e).price}€`:"-"),U(Ar,o(_e).notes||"-"),Mr.disabled=r().loading},[()=>An(o(_e).quantity,o(_e).unit),()=>na(o(_e).status).class,()=>na(o(_e).status).text,()=>rs(o(_e).orderDate),()=>rs(o(_e).deliveryDate)]),h(Z,we)};M(kt,Z=>{r().editingPurchaseId===o(_e).$id?Z(At):Z(Ht,!1)})}h(rt,Ge)}),h(ve,J)};M(ye,ve=>{r().purchasesList.length===0?ve(st):ve(ft,!1)})}G(ve=>{Ee(q,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),Le.disabled=ve},[()=>r().loading||!n()]),Ce(x,()=>r().forms.purchase.quantity,ve=>r().forms.purchase.quantity=ve),Yt(b,()=>r().forms.purchase.unit,ve=>r().forms.purchase.unit=ve),Ce(j,()=>r().forms.purchase.store,ve=>r().forms.purchase.store=ve),Ce(re,()=>r().forms.purchase.who,ve=>r().forms.purchase.who=ve),Ce(I,()=>r().forms.purchase.price,ve=>r().forms.purchase.price=ve),Ce(Q,()=>r().forms.purchase.notes,ve=>r().forms.purchase.notes=ve),Yt(be,()=>r().forms.purchase.status,ve=>r().forms.purchase.status=ve),h(e,l),V()}Ze(["click"]);async function vd(e,t){await t()?.removeStock()}var hd=$(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),pd=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},md=$('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),_d=$('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),gd=$('<span class="loading loading-spinner loading-xs"></span>'),bd=$('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),yd=$(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function wd(e,t){z(t,!0);let r=Ne(t,"modalState",7);var n=yd(),a=u(n),s=u(a);Fn(s,{class:"h-5 w-5"});var i=d(a,2),l=u(i),c=u(l),f=u(c),v=d(c,2),_=u(v);Ro(_,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(I,K)=>{var ae=hd();h(I,ae)},$$slots:{default:!0}});var p=d(v,2),m=u(p),g=u(m);Zr(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2),b=d(m,2),y=u(b);y.value=y.__value="";var P=d(y);P.value=P.__value="kg";var w=d(P);w.value=w.__value="gr.";var S=d(w);S.value=S.__value="l.";var k=d(S);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var C=d(A);C.value=C.__value="bottes";var O=d(p,2),F=u(O),j=d(O,2),W=u(j);W.__click=[pd,r];var ne=d(i,2);{var re=I=>{var K=md(),ae=u(K);Fn(ae,{class:"mx-auto mb-2 h-12 w-12"}),h(I,K)},D=I=>{var K=bd(),ae=u(K),N=d(u(ae),2),Q=u(N),ie=d(u(Q),2),oe=u(ie),fe=d(Q,2),be=d(u(fe),2),xe=u(be),B=d(fe,2);{var me=Re=>{var Ke=_d(),pe=d(u(Ke),2),ye=u(pe);G(()=>U(ye,r().stockParsed.notes)),h(Re,Ke)};M(B,Re=>{r().stockParsed.notes&&Re(me)})}var q=d(N,2),le=u(q);le.__click=[vd,r];var ke=u(le);{var Be=Re=>{var Ke=gd();h(Re,Ke)},Le=Re=>{var Ke=mt("Supprimer le stock");h(Re,Ke)};M(ke,Re=>{r().loading?Re(Be):Re(Le,!1)})}G(Re=>{U(oe,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),U(xe,Re),le.disabled=r().loading},[()=>Tn(r().stockParsed.dateTime)]),h(I,K)};M(ne,I=>{r().stockParsed?I(D,!1):I(re)})}G(I=>{U(f,`Déclarer le stock réel du ${I??""}`),W.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),Ce(x,()=>r().forms.stock.quantity,I=>r().forms.stock.quantity=I),Yt(b,()=>r().forms.stock.unit,I=>r().forms.stock.unit=I),Ce(F,()=>r().forms.stock.notes,I=>r().forms.stock.notes=I),h(e,n),V()}Ze(["click"]);function Sd(e,t,r){t().forms.who=[...t().whoList],E(r,"")}var Pd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},xd=$('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function $d(e,t){z(t,!0);let r=Ne(t,"modalState",7),n=H("");const a=Y(()=>{const C=new Set([...X.uniqueWho,...r().forms.who]);return Array.from(C).map(O=>({id:O,label:O,selected:r().forms.who.includes(O)}))});function s(C){const O=C.trim();O&&!r().forms.who.includes(O)&&(r().forms.who=[...r().forms.who,O])}function i(C){r().forms.who=r().forms.who.filter(O=>O!==C)}function l(C){r().forms.who.includes(C)?i(C):s(C)}function c(){o(n).trim()&&(s(o(n)),E(n,""))}var f=xd(),v=u(f),_=u(v),p=d(u(_),4),m=u(p),g=u(m),x=u(g);Xr(x,{class:"h-4 w-4 opacity-50"});var b=d(x,2);b.__keydown=[Pd,c];var y=d(g,2);y.__click=c;var P=u(y);Do(P,{size:16});var w=d(m,2),S=d(u(w),2);Jr(S,{get items(){return o(a)},onToggleItem:l,showIcon:!0});var k=d(p,2),A=u(k);A.__click=[Sd,r,n],G(C=>{b.disabled=r().loading,y.disabled=C,A.disabled=r().loading},[()=>r().loading||!o(n).trim()]),Ce(b,()=>o(n),C=>E(n,C)),h(e,f),V()}Ze(["keydown","click"]);var Ed=$('<div class="mb-1 text-xs opacity-70"> </div>'),kd=(e,t,r)=>t(o(r)),Ad=$("<button><!> </button>"),Td=$('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function Oo(e,t){z(t,!0);let r=Ne(t,"maxSuggestions",3,8),n=Ne(t,"title",3,"Suggestions :"),a=Ne(t,"buttonSize",3,"btn-xs"),s=Ne(t,"buttonVariant",3,"btn-soft"),i=Ne(t,"disabled",3,!1);const l=Y(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=L(),v=R(f);{var _=p=>{var m=Td(),g=u(m);{var x=y=>{var P=Ed(),w=u(P);G(()=>U(w,n())),h(y,P)};M(g,y=>{n()&&y(x)})}var b=d(g,2);it(b,21,()=>o(l),y=>y.id,(y,P)=>{var w=Ad();w.__click=[kd,c,P];var S=u(w);{var k=C=>{var O=L(),F=R(O);er(F,()=>o(P).icon,(j,W)=>{W(j,{class:"h-3 w-3"})}),h(C,O)};M(S,C=>{o(P).icon&&C(k)})}var A=d(S);G(()=>{Ee(w,1,`btn ${a()??""} ${s()??""}`),w.disabled=i()||o(P).disabled,Ut(w,"title",o(P).disabled?"Déjà sélectionné":o(P).label),U(A,` ${o(P).label??""}`)}),h(y,w)}),h(p,m)};M(v,p=>{o(l).length>0&&p(_)})}h(e,f),V()}Ze(["click"]);var Nd=(e,t)=>{e.key==="Enter"&&t()},Md=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},Cd=$(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function Id(e,t){z(t,!0);let r=Ne(t,"modalState",7);const n=Y(()=>r()?.hasChanges?.store||!1);async function a(){if(!o(n))return;const P={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(P)}var s=Cd(),i=u(s),l=u(i),c=d(u(l),4),f=u(c),v=u(f),_=u(v);Gt(_,{class:"h-4 w-4 opacity-50"});var p=d(_,2);p.__keydown=[Nd,a];var m=d(v,2);{var g=P=>{{let w=Y(()=>X.uniqueStores.map(S=>({id:S,label:S,disabled:S===r().forms.store.name})));Oo(P,{get suggestions(){return o(w)},onSuggestionClick:S=>{r().forms.store.name=S.label},buttonVariant:"btn-outline"})}};M(m,P=>{X.uniqueStores.length>0&&P(g)})}var x=d(f,2),b=d(c,2),y=u(b);y.__click=[Md,r],G(()=>y.disabled=r().loading),Ce(p,()=>r().forms.store.name,P=>r().forms.store.name=P),Ce(x,()=>r().forms.store.comment,P=>r().forms.store.comment=P),h(e,s),V()}Ze(["keydown","click"]);async function Dd(e,t,r,n,a,s){if(!t.modalState)return;const i={totalOverride:{q:o(r),u:o(n)},comment:o(a)};await t.modalState.setOverride(i),E(s,!1)}async function Rd(e,t,r){t.modalState&&(await t.modalState.removeOverride(),E(r,!1))}var Od=$('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),qd=$('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),jd=$(" <!>",1),Bd=(e,t)=>E(t,!0),Ld=$('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),zd=$('<div class="text-error text-sm">Limite de caractères atteinte</div>'),Vd=$('<span class="loading loading-spinner loading-sm"></span>'),Ud=$('<span class="loading loading-spinner loading-sm"></span>'),Wd=$(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),Gd=$('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function Qd(e,t){z(t,!0);const r=Y(()=>t.modalState.product?.totalNeededOverrideParsed),n=Y(()=>t.modalState.product?.displayTotalNeeded||[]);let a=H(!1),s=H(Me(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=H(Me(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=H(Me(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),c=Y(()=>o(s)>0&&o(i).trim()!=="");var f=Gd(),v=u(f),_=u(v),p=u(_);{var m=x=>{var b=Ld(),y=R(b),P=u(y),w=d(u(P),2);{var S=j=>{var W=Od();h(j,W)};M(w,j=>{o(r)&&j(S)})}var k=d(w,2),A=u(k);{var C=j=>{var W=jd(),ne=R(W),re=d(ne);{var D=I=>{var K=qd(),ae=u(K);ba(ae,{});var N=d(ae);G(()=>U(N,` ${o(r).comment??""}`)),h(I,K)};M(re,I=>{o(r).comment&&I(D)})}G(I=>U(ne,`${I??""} `),[()=>An(o(r).totalOverride.q,o(r).totalOverride.u)]),h(j,W)},O=j=>{var W=mt();G(()=>U(W,o(n))),h(j,W)};M(A,j=>{o(r)?j(C):j(O,!1)})}var F=d(y,2);F.__click=[Bd,a],h(x,b)},g=x=>{var b=Wd(),y=R(b),P=u(y),w=u(P);du(w,{class:"h-4 w-4 opacity-50"});var S=d(w,2),k=d(P,2),A=u(k);A.value=A.__value="";var C=d(A);C.value=C.__value="kg";var O=d(C);O.value=O.__value="gr.";var F=d(O);F.value=F.__value="l.";var j=d(F);j.value=j.__value="ml";var W=d(j);W.value=W.__value="unité";var ne=d(W);ne.value=ne.__value="bottes";var re=d(y,2),D=u(re),I=d(u(D),2),K=d(I,2);{var ae=q=>{var le=zd();h(q,le)};M(K,q=>{o(l).length>=250&&q(ae)})}var N=d(re,2),Q=u(N);Q.__click=[Rd,t,a];var ie=u(Q);{var oe=q=>{var le=Vd();h(q,le)},fe=q=>{var le=mt();G(()=>U(le,`Réinitialiser le total calculé (${o(n)??""}).`)),h(q,le)};M(ie,q=>{t.modalState.loading?q(oe):q(fe,!1)})}var be=d(Q,2);be.__click=[Dd,t,s,i,l,a];var xe=u(be);{var B=q=>{var le=Ud();h(q,le)},me=q=>{var le=mt("Appliquer");h(q,le)};M(xe,q=>{t.modalState.loading?q(B):q(me,!1)})}G(()=>{Q.disabled=t.modalState.loading,be.disabled=t.modalState.loading||!o(c)}),Ce(S,()=>o(s),q=>E(s,q)),Yt(k,()=>o(i),q=>E(i,q)),Ce(I,()=>o(l),q=>E(l,q)),h(x,b)};M(p,x=>{o(a)?x(g,!1):x(m)})}G(()=>Ee(v,1,`card border-base-300 border ${o(a)?"bg-base-200":"bg-base-100"}`)),h(e,f),V()}Ze(["click"]);var Hd=$('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Kd=$('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Jd=$('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Yd=$('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Zd(e,t){z(t,!0);const r=Y(()=>t.modalState.recipes);var n=Yd(),a=R(n);Qd(a,{get modalState(){return t.modalState}});var s=d(a,2),i=u(s),l=u(i);ga(l,{class:"h-5 w-5"});var c=d(i,2);{var f=_=>{var p=Hd(),m=u(p);Zr(m,{class:"mx-auto mb-2 h-12 w-12"}),h(_,p)},v=_=>{var p=Jd(),m=u(p),g=d(u(m));it(g,21,()=>o(r),x=>x.r,(x,b)=>{var y=Kd(),P=u(y),w=u(P),S=d(P),k=u(S),A=d(S),C=u(A);G(O=>{U(w,`${o(b).r??""} (${(o(b).a||"-")??""} c.)`),U(k,`${(o(b).q||o(b).qEq)??""} ${(o(b).u||o(b).uEq)??""}`),U(C,O)},[()=>Tn(o(b).date)]),h(x,y)}),h(_,p)};M(c,_=>{o(r).length===0?_(f):_(v,!1)})}h(e,n),V()}function Xd(e,t,r){o(t).saveAllChanges().then(()=>{r.onClose()})}var Fd=$('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),ef=$('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),tf=(e,t)=>t("recettes"),rf=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),nf=$('<span class="badge badge-sm badge-ghost ml-1">0</span>'),af=(e,t)=>t("magasins"),sf=$('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),of=(e,t)=>t("volontaires"),lf=$('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),cf=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),uf=$('<span class="badge badge-sm badge-ghost ml-1">0</span>'),df=(e,t)=>t("stock"),ff=$('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),vf=$('<span class="badge badge-sm badge-secondary ml-1">1</span>'),hf=$('<span class="badge badge-sm badge-ghost ml-1">0</span>'),pf=(e,t)=>t("achats"),mf=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),_f=$('<span class="badge badge-sm badge-ghost ml-1">0</span>'),gf=$('<div class="alert alert-error mb-4"><!> <span> </span></div>'),bf=$('<span class="loading loading-spinner loading-sm"></span>'),yf=$('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),wf=$('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Sf(e,t){z(t,!0);let r=Ne(t,"initialTab",3,"recettes"),n=Y(()=>Zu(t.productId)),a=H(Me(r()));function s(b){E(a,b,!0)}var i=wf(),l=u(i),c=u(l),f=u(c);{var v=b=>{var y=Fd(),P=R(y),w=u(P),S=d(P,2),k=u(S),A=u(k),C=d(k,2),O=d(u(C));G(()=>{U(w,o(n).product?.productName),U(A,o(n).product?.productType),U(O,` ${o(n).product?.displayTotalNeeded??""}`)}),h(b,y)},_=b=>{var y=ef();h(b,y)};M(f,b=>{o(n)&&o(n).product?b(v):b(_,!1)})}var p=d(f,2);p.__click=function(...b){t.onClose?.apply(this,b)};var m=u(p);bt(m,{class:"h-4 w-4"});var g=d(c,2);{var x=b=>{var y=yf(),P=R(y),w=u(P);w.__click=[tf,s];var S=u(w);ga(S,{class:"mr-1 h-5 w-5"});var k=d(S,2);{var A=J=>{var ge=rf(),Ue=u(ge);G(()=>U(Ue,o(n).product?.nbRecipes)),h(J,ge)},C=J=>{var ge=nf();h(J,ge)};M(k,J=>{o(n).product?.nbRecipes&&o(n).product?.nbRecipes>0?J(A):J(C,!1)})}var O=d(w,2);O.__click=[af,s];var F=u(O);Gt(F,{class:"mr-1 h-5 w-5"});var j=d(F,2);{var W=J=>{var ge=sf();h(J,ge)};M(j,J=>{o(n).hasChanges?.store&&J(W)})}var ne=d(O,2);ne.__click=[of,s];var re=u(ne);ta(re,{class:"mr-1 h-5 w-5"});var D=d(re,2);{var I=J=>{var ge=lf();h(J,ge)},K=J=>{var ge=L(),Ue=R(ge);{var rt=Ie=>{var Ge=cf(),kt=u(Ge);G(()=>U(kt,o(n).product?.who.length)),h(Ie,Ge)},_e=Ie=>{var Ge=uf();h(Ie,Ge)};M(Ue,Ie=>{o(n).product?.who&&o(n).product?.who.length>0?Ie(rt):Ie(_e,!1)},!0)}h(J,ge)};M(D,J=>{o(n).hasChanges?.who?J(I):J(K,!1)})}var ae=d(ne,2);ae.__click=[df,s];var N=u(ae);Fn(N,{class:"mr-1 h-5 w-5"});var Q=d(N,2);{var ie=J=>{var ge=ff();h(J,ge)},oe=J=>{var ge=L(),Ue=R(ge);{var rt=Ie=>{var Ge=vf();h(Ie,Ge)},_e=Ie=>{var Ge=hf();h(Ie,Ge)};M(Ue,Ie=>{o(n).stockParsed?Ie(rt):Ie(_e,!1)},!0)}h(J,ge)};M(Q,J=>{o(n).hasChanges?.stock?J(ie):J(oe,!1)})}var fe=d(ae,2);fe.__click=[pf,s];var be=u(fe);zt(be,{class:"mr-1 h-5 w-5"});var xe=d(be,2);{var B=J=>{var ge=mf(),Ue=u(ge);G(()=>U(Ue,o(n).purchasesList.length)),h(J,ge)},me=J=>{var ge=_f();h(J,ge)};M(xe,J=>{o(n).purchasesList.length>0?J(B):J(me,!1)})}var q=d(P,2),le=u(q);{var ke=J=>{var ge=gf(),Ue=u(ge);bt(Ue,{class:"h-4 w-4"});var rt=d(Ue,2),_e=u(rt);G(()=>U(_e,`erreur : ${o(n).error??""}`)),h(J,ge)};M(le,J=>{o(n).error&&J(ke)})}var Be=d(le,2),Le=u(Be);ul(Le,()=>o(a),J=>{var ge=L(),Ue=R(ge);{var rt=Ie=>{Zd(Ie,{get modalState(){return o(n)}})},_e=Ie=>{var Ge=L(),kt=R(Ge);{var At=Z=>{fd(Z,{get modalState(){return o(n)}})},Ht=Z=>{var we=L(),Ae=R(we);{var Qe=et=>{wd(et,{get modalState(){return o(n)}})},ze=et=>{var ct=L(),ee=R(ct);{var he=Te=>{$d(Te,{get modalState(){return o(n)}})},Se=Te=>{var Je=L(),Ve=R(Je);{var He=Oe=>{Id(Oe,{get modalState(){return o(n)}})};M(Ve,Oe=>{o(a)==="magasins"&&Oe(He)},!0)}h(Te,Je)};M(ee,Te=>{o(a)==="volontaires"?Te(he):Te(Se,!1)},!0)}h(et,ct)};M(Ae,et=>{o(a)==="stock"?et(Qe):et(ze,!1)},!0)}h(Z,we)};M(kt,Z=>{o(a)==="achats"?Z(At):Z(Ht,!1)},!0)}h(Ie,Ge)};M(Ue,Ie=>{o(a)==="recettes"?Ie(rt):Ie(_e,!1)})}h(J,ge)});var Re=d(q,2),Ke=u(Re);Ke.__click=function(...J){t.onClose?.apply(this,J)};var pe=u(Ke),ye=d(Ke,2);ye.__click=[Xd,n,t];var st=u(ye);{var ft=J=>{var ge=bf();h(J,ge)},ve=J=>{var ge=mt("Tout enregistrer");h(J,ge)};M(st,J=>{o(n).loading?J(ft):J(ve,!1)})}G(()=>{Ee(w,1,`tab ${o(a)==="recettes"?"tab-active":""}`),Ee(O,1,`tab ${o(a)==="magasins"?"tab-active":""}`),Ee(ne,1,`tab ${o(a)==="volontaires"?"tab-active":""}`),Ee(ae,1,`tab ${o(a)==="stock"?"tab-active":""}`),Ee(fe,1,`tab ${o(a)==="achats"?"tab-active":""}`),U(pe,o(n)?.hasAnyChanges?"Annuler":"Fermer"),ye.disabled=o(n).loading||!o(n).hasAnyChanges}),h(b,y)};M(g,b=>{o(n)&&b(x)})}h(e,i),V()}Ze(["click"]);var Pf=(e,t,r)=>t(r),xf=$("<button><span> </span> <!></button>"),$f=(e,t)=>t(),Ef=$('<div class="flex justify-end"><button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button></div>'),kf=$('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),Af=$('<div class=" flex flex-wrap gap-1"></div> <!>',1);function Tf(e,t){z(t,!0);let r=Ne(t,"availableDates",19,()=>[]),n=Ne(t,"currentRange",19,()=>({start:null,end:null})),a=H(Me(n().start)),s=H(Me(n().end));const i=Y(()=>r().length>0&&o(a)===r()[0]&&o(s)===r()[r().length-1]);lr(()=>{E(a,n().start,!0),E(s,n().end,!0)});function l(y){o(a)===y&&o(s)===y?_():new Date(y)<new Date(o(a))?E(a,y,!0):(new Date(y)>new Date(o(s))||E(a,y,!0),E(s,y,!0)),t.onRangeChange(o(a),o(s))}function c(y){return new Date(y)>=new Date(o(a))&&new Date(y)<=new Date(o(s))?"btn-soft btn-secondary":"btn-dash btn-secondary opacity-80"}function f(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function v(y){const w=new Date(y).getUTCHours();return w===12?"sun":w===20?"moon":w===8?"cloud":null}function _(){r().length!==0&&(E(a,r()[0],!0),E(s,r()[r().length-1],!0),t.onRangeChange(o(a),o(s)))}var p=Af(),m=R(p);it(m,22,r,y=>y,(y,P)=>{var w=xf();w.__click=[Pf,l,P];var S=u(w),k=u(S),A=d(S,2);{var C=F=>{gu(F,{size:16})},O=F=>{var j=L(),W=R(j);{var ne=D=>{cu(D,{size:16})},re=D=>{var I=L(),K=R(I);{var ae=N=>{Zc(N,{size:16})};M(K,N=>{v(P)==="cloud"&&N(ae)},!0)}h(D,I)};M(W,D=>{v(P)==="moon"?D(ne):D(re,!1)},!0)}h(F,j)};M(A,F=>{v(P)==="sun"?F(C):F(O,!1)})}G((F,j)=>{Ee(w,1,`btn btn-sm ${F??""}`),U(k,j)},[()=>c(P),()=>f(P)]),h(y,w)});var g=d(m,2);{var x=y=>{var P=Ef(),w=u(P);w.__click=[$f,_],h(y,P)},b=y=>{var P=kf();h(y,P)};M(g,y=>{o(i)?y(b,!1):y(x)})}h(e,p),V()}Ze(["click"]);var Nf=$("<fieldset><legend><!> </legend> <!></fieldset>");function on(e,t){let r=Ne(t,"bgClass",3,"bg-base-100");var n=Nf(),a=u(n),s=u(a);{var i=f=>{const v=Y(()=>t.iconComponent);var _=L(),p=R(_);er(p,()=>o(v),(m,g)=>{g(m,{size:16,class:"mr-1"})}),h(f,_)};M(s,f=>{t.iconComponent&&f(i)})}var l=d(s),c=d(a,2);se(c,()=>t.children??te),G(()=>{Ee(n,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Ee(a,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),U(l,` ${t.legend??""}`)}),h(e,n)}var Mf=()=>X.clearFilters(),Cf=e=>X.setSearchQuery(e.currentTarget.value),If=()=>X.setGroupBy("none"),Df=()=>X.setGroupBy("store"),Rf=()=>X.setGroupBy("productType"),Of=()=>X.clearTypeAndTemperatureFilters(),qf=$('<button class="btn btn-xs btn-link text-accent flex items-center text-end" title="Effacer les filtres de types et température"><!> Réinitialiser les filtres</button>'),jf=(e,t)=>X.toggleProductType(t),Bf=$("<button><!> </button>"),Lf=()=>X.toggleTemperature("frais"),zf=()=>X.toggleTemperature("surgele"),Vf=$('<!> <div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div>',1),Uf=(e,t)=>X.toggleStore(t),Wf=$("<button> </button>"),Gf=()=>X.clearStoreFilters(),Qf=$('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Hf=$('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Kf=(e,t)=>X.toggleWho(t),Jf=$("<button> </button>"),Yf=()=>X.clearWhoFilters(),Zf=$('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Xf=$('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Ff=$('<div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function ev(e,t){z(t,!0);const r=Y(()=>X.filters),n=Y(()=>X.uniqueStores),a=Y(()=>X.uniqueWho),s=Y(()=>X.uniqueProductTypes);var i=Ff(),l=R(i),c=u(l),f=u(c);Mo(f,{class:"h-5 w-5"});var v=d(c,2);v.__click=[Mf];var _=u(v);bt(_,{class:"h-4 w-4"});var p=d(l,2),m=u(p),g=d(u(m),2),x=u(g);_u(x,{class:"h-4 w-4"});var b=d(x,2);b.__input=[Cf];var y=d(m,2),P=d(u(y),2),w=u(P);w.__change=[If];var S=d(w,2);S.__change=[Df];var k=d(S,2);k.__change=[Rf];var A=d(y,2);on(A,{legend:"Date incluses",bgClass:"bg-base-100",children:(re,D)=>{Tf(re,{get availableDates(){return X.availableDates},get currentRange(){return X.dateRange},onRangeChange:(I,K)=>X.setDateRange(I,K)})},$$slots:{default:!0}});var C=d(A,2);{var O=re=>{on(re,{legend:"Types & Température",get iconComponent(){return bu},children:(D,I)=>{var K=Vf(),ae=R(K);{var N=B=>{var me=qf();me.__click=[Of];var q=u(me);eu(q,{size:14}),h(B,me)};M(ae,B=>{(o(r).selectedProductTypes.length>0||o(r).selectedTemperatures.length>0)&&B(N)})}var Q=d(ae,2);it(Q,20,()=>o(s),B=>B,(B,me)=>{const q=Y(()=>ra(me));var le=Bf();le.__click=[jf,me];var ke=u(le);er(ke,()=>o(q).icon,(Le,Re)=>{Re(Le,{class:"mr-1 h-5 w-5"})});var Be=d(ke);G(Le=>{Ee(le,1,`btn btn-sm ${Le??""}`),U(Be,` ${o(q).displayName??""}`)},[()=>o(r).selectedProductTypes.length===0?"btn-soft btn-secondary":o(r).selectedProductTypes.includes(me)?"btn-secondary":"btn-dash btn-secondary"]),h(B,le)});var ie=d(Q,2),oe=u(ie);oe.__click=[Lf];var fe=u(oe);Co(fe,{class:"h-5 w-5"});var be=d(oe,2);be.__click=[zf];var xe=u(be);Io(xe,{class:"h-5 w-5"}),G((B,me)=>{Ee(oe,1,`btn btn-sm ${B??""}`),Ee(be,1,`btn btn-sm ${me??""}`)},[()=>o(r).selectedTemperatures.length===0?"btn-soft btn-success":o(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>o(r).selectedTemperatures.length===0?"btn-soft btn-info":o(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(D,K)},$$slots:{default:!0}})};M(C,re=>{o(s).length>0&&re(O)})}var F=d(C,2);{var j=re=>{on(re,{legend:"Magasins",get iconComponent(){return Gt},children:(D,I)=>{var K=Hf(),ae=u(K);it(ae,16,()=>o(n),ie=>ie,(ie,oe)=>{var fe=Wf();fe.__click=[Uf,oe];var be=u(fe);G(xe=>{Ee(fe,1,`btn btn-xs ${xe??""}`),U(be,oe)},[()=>o(r).selectedStores.length===0?"btn-soft btn-secondary":o(r).selectedStores.includes(oe)?"btn-secondary":"btn-dash btn-secondary"]),h(ie,fe)});var N=d(ae,2);{var Q=ie=>{var oe=Qf();oe.__click=[Gf];var fe=u(oe);bt(fe,{class:"h-3 w-3"}),h(ie,oe)};M(N,ie=>{o(r).selectedStores.length>0&&ie(Q)})}h(D,K)},$$slots:{default:!0}})};M(F,re=>{o(n).length>0&&re(j)})}var W=d(F,2);{var ne=re=>{on(re,{legend:"Qui",get iconComponent(){return Xr},children:(D,I)=>{var K=Xf(),ae=u(K);it(ae,16,()=>o(a),ie=>ie,(ie,oe)=>{var fe=Jf();fe.__click=[Kf,oe];var be=u(fe);G(xe=>{Ee(fe,1,`btn btn-xs ${xe??""}`),U(be,oe)},[()=>o(r).selectedWho.length===0?" btn-soft btn-secondary":o(r).selectedWho.includes(oe)?" btn-secondary":"btn-dash btn-secondary"]),h(ie,fe)});var N=d(ae,2);{var Q=ie=>{var oe=Zf();oe.__click=[Yf];var fe=u(oe);bt(fe,{class:"h-3 w-3"}),h(ie,oe)};M(N,ie=>{o(r).selectedWho.length>0&&ie(Q)})}h(D,K)},$$slots:{default:!0}})};M(W,re=>{o(a).length>0&&re(ne)})}G(()=>{bl(b,o(r).searchQuery),qn(w,o(r).groupBy==="none"),qn(S,o(r).groupBy==="store"),qn(k,o(r).groupBy==="productType")}),h(e,i),V()}Ze(["click","input","change"]);Ze(["click"]);var tv=$('<div class="tooltip text-xs font-normal"><!></div>');function rv(e,t){let r=Ne(t,"iconSize",3,24),n=t.icon||void 0;var a=tv(),s=u(a);{var i=l=>{n(l,{get size(){return r()},class:`align-top
`})};M(s,l=>{t.icon&&l(i)})}G(()=>Ut(a,"data-tip",t.tip)),h(e,a)}var nv=$('<div class="text-neutral-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),av=(e,t,r)=>t.onOpenGroupEditModal("store",r().map(n=>n.$id),r()),sv=(e,t,r)=>t.onOpenGroupEditModal("who",r().map(n=>n.$id),r()),ov=(e,t,r)=>t.onOpenGroupPurchaseModal(r()),iv=$(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),lv=$('<div class="bg-primary @container sticky top-0 z-10 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 @md:min-w-48"><!></div> <div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div></div>'),cv=(e,t,r)=>t.onOpenModal(o(r).$id,"recettes"),uv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"recettes"),dv=$('<div class="text-base-content/60 text-sm font-normal"> </div>'),fv=$('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),vv=$('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),hv=$('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),pv=(e,t,r)=>t.onOpenModal(o(r).$id,"magasins"),mv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"magasins"),_v=$('<div class="ml-1"><!></div>'),gv=$('<div class="ml-1"> </div> <!>',1),bv=$('<div class="ml-1 text-sm font-medium">?</div>'),yv=(e,t,r)=>t.onOpenModal(o(r).$id,"volontaires"),wv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"volontaires"),Sv=$('<span class="text-base-content/50 text-xs"> </span>'),Pv=$('<div class="ml-1 flex gap-1"> <!></div>'),xv=$('<div class="ml-1 text-sm font-medium">?</div>'),$v=(e,t,r)=>t.onOpenModal(o(r).$id,"recettes"),Ev=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"recettes"),kv=$('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),Av=(e,t,r)=>{e.stopPropagation(),t.onQuickValidation(o(r))},Tv=$('<button class="btn btn-sm btn-soft btn-warning hover:bg-success/70 hover:border-success/70 ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M.625 0a.625.625 0 1 0 0 1.25h1.818l.205 1.94l.644 6.105a1.626 1.626 0 0 0 1.619 1.455h6.208c.746 0 1.397-.506 1.579-1.23l1.253-5a1.626 1.626 0 0 0-1.579-2.02h-8.54L3.627.56A.625.625 0 0 0 3.006 0zm3.91 9.164L3.964 3.75h8.408c.247 0 .425.23.366.466l-1.253 5a.38.38 0 0 1-.366.284H4.911a.376.376 0 0 1-.376-.336m5.72-3.134a.75.75 0 0 0-1.129-.988l-1.48 1.69l-.526-.395a.75.75 0 1 0-.9 1.2l1.083.813a.75.75 0 0 0 1.015-.106zm1.816 6.845a1.125 1.125 0 1 0-2.25 0a1.125 1.125 0 0 0 2.25 0M4.446 11.75a1.125 1.125 0 1 1 0 2.25a1.125 1.125 0 0 1 0-2.25" clip-rule="evenodd"></path></svg> <span class="text-xs"> </span> <!></button>'),Nv=(e,t,r)=>t.onOpenModal(o(r).$id,"achats"),Mv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"achats"),Cv=$('<div><!> <span class="text-sm font-medium"> </span></div>'),Iv=$('<span class="text-base-content/50 text-xs italic">aucun</span>'),Dv=$('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!></div> <div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div></div> <div class="flex flex-wrap gap-3"><div class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex gap-4"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins:</div> <div class="flex items-center gap-4"><div> </div> <!></div></div> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative min-w-[200px] flex-1 cursor-pointer rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex items-center justify-between gap-2"><div class="flex flex-col gap-0"><div class="text-base-content/80 flex items-center justify-between gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div class="text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity group-hover:opacity-100 sm:opacity-0">ajouter un achat</div></div> <div class="flex flex-wrap gap-1.5"><!> <!></div></div></div></div></div></div>'),Rv=$('<!> <div class="space-y-1"></div>',1),Ov=$('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),qv=$('<div class="space-y-4 rounded-lg"></div> <!>',1);function jv(e,t){z(t,!0);const r={Package:Zr,MessageCircleQuestionMark:lu,ShoppingCart:zt,Clock:Yc,CircleCheck:Hc,CircleX:Kc,ClipboardCheck:Jc,PackageCheck:uu},n=Y(()=>X.groupedFilteredProducts),a=Y(()=>X.filters);var s=qv(),i=R(s);it(i,21,()=>Object.entries(o(n)),([f,v])=>f,(f,v)=>{var _=Y(()=>ls(o(v),2));let p=()=>o(_)[0],m=()=>o(_)[1];var g=Rv(),x=R(g);{var b=P=>{const w=Y(()=>ra(p()));var S=lv(),k=u(S),A=u(k);{var C=N=>{var Q=mt();G(()=>U(Q,`🏪 ${p()??""} (${m().length??""})`)),h(N,Q)},O=N=>{var Q=L(),ie=R(Q);{var oe=be=>{var xe=nv(),B=u(xe);er(B,()=>o(w).icon,(Be,Le)=>{Le(Be,{class:"h-4 w-4"})});var me=d(B,2),q=u(me),le=d(me,2),ke=u(le);G(()=>{U(q,o(w).displayName),U(ke,`(${m().length??""})`)}),h(be,xe)},fe=be=>{var xe=mt();G(()=>U(xe,`📦 ${p()??""} (${m().length??""})`)),h(be,xe)};M(ie,be=>{o(a).groupBy==="productType"?be(oe):be(fe,!1)},!0)}h(N,Q)};M(A,N=>{o(a).groupBy==="store"?N(C):N(O,!1)})}var F=d(k,2),j=u(F);j.__click=[av,t,m];var W=u(j);Gt(W,{size:16});var ne=d(W,4);ea(ne,{size:16});var re=d(j,2);re.__click=[sv,t,m];var D=u(re);ta(D,{size:16});var I=d(D,4);ea(I,{size:16});var K=d(re,2);{var ae=N=>{var Q=iv();Q.__click=[ov,t,m];var ie=u(Q);zt(ie,{size:16});var oe=d(ie,4);Fa(oe,{size:16}),h(N,Q)};M(K,N=>{m().some(Q=>Q.displayMissingQuantity!=="✅ Complet")&&N(ae)})}h(P,S)};M(x,P=>{p()!==""&&P(b)})}var y=d(x,2);it(y,21,()=>m()||[],P=>P.$id,(P,w)=>{const S=Y(()=>X.productsStatsByDateRange.get(o(w).$id)||{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedAvailableQuantities:"Équilibré",hasAvailable:!1,hasMissing:!1}),k=Y(()=>ra(o(w).productType)),A=Y(()=>Ju(o(w).purchases||[]));var C=Dv(),O=u(C),F=u(O),j=u(F);j.__click=[cv,t,w],j.__keydown=[uv,t,w];var W=u(j),ne=u(W);er(ne,()=>o(k).icon,(ee,he)=>{he(ee,{class:"text-base-content/80 h-4 w-4"})});var re=d(ne),D=d(re);{var I=ee=>{var he=dv(),Se=u(he);G(()=>U(Se,`Ancien: ${o(w).previousNames[0]??""}`)),h(ee,he)};M(D,ee=>{o(w).previousNames&&o(w).previousNames.length>0&&ee(I)})}var K=d(W,2),ae=u(K);{var N=ee=>{var he=fv(),Se=u(he);Co(Se,{class:"text-success h-4 w-4"}),h(ee,he)};M(ae,ee=>{o(w).pFrais&&ee(N)})}var Q=d(ae,2);{var ie=ee=>{var he=vv(),Se=u(he);Io(Se,{class:"text-info h-4 w-4"}),h(ee,he)};M(Q,ee=>{o(w).pSurgel&&ee(ie)})}var oe=d(K,2);{var fe=ee=>{var he=hv(),Se=u(he);su(Se,{class:"h-4 w-4 animate-spin"}),h(ee,he)};M(oe,ee=>{o(w).status==="isSyncing"&&ee(fe)})}var be=d(j,2),xe=u(be);xe.__click=[pv,t,w],xe.__keydown=[mv,t,w];var B=u(xe);Gt(B,{size:18});var me=d(B,2);{var q=ee=>{var he=gv(),Se=R(he),Te=u(Se),Je=d(Se,2);{var Ve=He=>{var Oe=_v(),Ot=u(Oe);rv(Ot,{get tip(){return o(w).storeInfo.storeComment},get icon(){return iu},iconSize:14}),h(He,Oe)};M(Je,He=>{o(w).storeInfo?.storeComment&&He(Ve)})}G(()=>U(Te,o(w).storeInfo.storeName)),h(ee,he)},le=ee=>{var he=bv();h(ee,he)};M(me,ee=>{o(w).storeInfo?.storeName?ee(q):ee(le,!1)})}var ke=d(xe,2);ke.__click=[yv,t,w],ke.__keydown=[wv,t,w];var Be=u(ke);ta(Be,{size:18});var Le=d(Be,2);{var Re=ee=>{var he=Pv(),Se=u(he),Te=d(Se);{var Je=Ve=>{var He=Sv(),Oe=u(He);G(()=>U(Oe,`+${o(w).who.length-2}`)),h(Ve,He)};M(Te,Ve=>{o(w).who.length>2&&Ve(Je)})}G(Ve=>U(Se,`${Ve??""} `),[()=>o(w).who.slice(0,2).map(Ve=>Ve.slice(0,3)).join(" | ")]),h(ee,he)},Ke=ee=>{var he=xv();h(ee,he)};M(Le,ee=>{o(w).who&&o(w).who.length>0?ee(Re):ee(Ke,!1)})}var pe=d(F,2),ye=u(pe);ye.__click=[$v,t,w],ye.__keydown=[Ev,t,w];var st=u(ye),ft=u(st),ve=u(ft);au(ve,{class:"h-4 w-4"});var J=d(ft,2),ge=u(J),Ue=u(ge),rt=d(ge,2);{var _e=ee=>{var he=kv(),Se=u(he),Te=u(Se),Je=d(Te);ga(Je,{class:"h-3 w-3"});var Ve=d(Se,2),He=u(Ve),Oe=d(He);yu(Oe,{class:"h-3 w-3"}),G(()=>{U(Te,`${o(S).nbRecipes??""} `),U(He,`${o(S).totalAssiettes??""} `)}),h(ee,he)};M(rt,ee=>{(o(S).nbRecipes||o(S).totalAssiettes)&&ee(_e)})}var Ie=d(st,2);{var Ge=ee=>{var he=Tv();he.__click=[Av,t,w];var Se=d(u(he),2),Te=u(Se),Je=d(Se,2);{var Ve=Oe=>{Gc(Oe,{size:18})},He=Oe=>{Qc(Oe,{size:18})};M(Je,Oe=>{Kr.isMobile?Oe(Ve):Oe(He,!1)})}G(()=>{Ut(he,"title",`Acheter le manquant (${o(S).formattedAvailableQuantities??""})`),U(Te,o(S).formattedAvailableQuantities)}),h(ee,he)},kt=ee=>{Fa(ee,{size:24,class:"text-success"})};M(Ie,ee=>{o(S).hasMissing?ee(Ge):ee(kt,!1)})}var At=d(ye,2);At.__click=[Nv,t,w],At.__keydown=[Mv,t,w];var Ht=u(At),Z=u(Ht),we=u(Z),Ae=u(we);zt(Ae,{class:"h-4 w-4"});var Qe=d(Z,2),ze=u(Qe);it(ze,17,()=>o(A),ee=>ee.status,(ee,he)=>{const Se=Y(()=>r[o(he).icon]);var Te=Cv(),Je=u(Te);er(Je,()=>o(Se),(Oe,Ot)=>{Ot(Oe,{class:"h-4 w-4"})});var Ve=d(Je,2),He=u(Ve);G(Oe=>{Ee(Te,1,`badge badge-outline flex items-center gap-1 ${o(he).badgeClass??""}`),U(He,Oe)},[()=>An(o(he).quantity,o(he).unit)]),h(ee,Te)});var et=d(ze,2);{var ct=ee=>{var he=Iv();h(ee,he)};M(et,ee=>{o(A).length===0&&ee(ct)})}G(()=>{Ee(C,1,`card bg-base-100 border-base-300 ${o(w).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),U(re,`${o(w).productName??""} `),Ee(xe,1,`btn btn-soft btn-sm group relative ${o(w).storeInfo?.storeName?"btn-success":""}`),Ee(ke,1,`btn btn-sm btn-soft group relative ${o(w).who?.length>0?"btn-success":""}`),Ee(ge,1,`font-bold ${o(S).hasMissing?"text-error":"text-success"}`),U(Ue,o(S).formattedQuantities)}),h(P,C)}),h(f,g)});var l=d(i,2);{var c=f=>{var v=Ov();h(f,v)};M(l,f=>{Object.values(o(n)).flat().length===0&&f(c)})}h(e,s),V()}Ze(["click","keydown"]);async function Bv(e,t,r,n,a,s,i,l,c){if(!(!o(t)||o(r))){E(n,null),E(a,null);try{const f=o(s).map(m=>m.id),v=i.products.filter(m=>f.includes(m.$id));X.setSyncStatus(f,!0),i.onClose();const _={storeName:o(l).trim(),storeComment:o(c).trim()},p=await Ao(f,v,_);if(E(a,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(f){const v=f instanceof Error?f.message:"Erreur inconnue";E(n,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),X.clearSyncStatus()}finally{E(r,!1)}}}function ns(e,t,r){o(t)||r.onClose()}var Lv=$('<div class="alert alert-error mb-4"><!> <span> </span></div>'),zv=(e,t)=>E(t,"empty"),Vv=(e,t)=>E(t,"all"),Uv=$('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Wv=$("<!> ",1),Gv=$('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Qv(e,t){z(t,!0);let r=H(!1),n=H(null),a=H(null),s=H(Me(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=H(Me(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=H(Me({})),c=H("empty");lr(()=>{const q={};t.products.forEach(le=>{t.productIds.includes(le.$id)&&(o(c)==="empty"?q[le.$id]=!le.storeInfo||!le.storeInfo.storeName:q[le.$id]=!0)}),E(l,q,!0)});const f=Y(()=>t.products.map(q=>({id:q.$id,label:q.productName,title:q.productName,selected:o(l)[q.$id]}))),v=Y(()=>o(f).filter(q=>q.selected)),_=Y(()=>`Attribuer un magasin (${o(v).length} produits sélectionnés)`),p=Y(()=>o(v).length===0?!1:o(s).trim().length>0);function m(q){o(l)[q]=!o(l)[q]}var g=Gv(),x=u(g),b=u(x),y=u(b),P=u(y),w=d(y,2);w.__click=[ns,r,t];var S=u(w);bt(S,{class:"h-4 w-4"});var k=d(b,2),A=u(k);{var C=q=>{var le=Lv(),ke=u(le);kn(ke,{class:"h-4 w-4"});var Be=d(ke,2),Le=u(Be);G(()=>U(Le,o(n))),h(q,le)};M(A,q=>{o(n)&&q(C)})}var O=d(A,2),F=u(O),j=u(F),W=u(j);Gt(W,{class:"h-4 w-4 opacity-50"});var ne=d(W,2),re=d(j,2);{let q=Y(()=>X.uniqueStores.map(le=>({id:le,label:le,disabled:le===o(s)})));Oo(re,{get suggestions(){return o(q)},onSuggestionClick:le=>{E(s,le.label,!0)},title:"Suggestions de magasins :"})}var D=d(F,2),I=u(D),K=d(O,2),ae=d(u(K),2),N=u(ae);N.__click=[zv,c];var Q=d(N,2);Q.__click=[Vv,c];var ie=d(ae,2);Jr(ie,{get items(){return o(f)},onToggleItem:m,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var oe=d(k,2),fe=u(oe);fe.__click=[ns,r,t];var be=d(fe,2);be.__click=[Bv,p,r,n,a,v,t,s,i];var xe=u(be);{var B=q=>{var le=Uv();h(q,le)},me=q=>{var le=Wv(),ke=R(le);Hr(ke,{class:"h-4 w-4"});var Be=d(ke);G(()=>U(Be,` Appliquer à ${o(v).length??""} produit(s)`)),h(q,le)};M(xe,q=>{o(r)?q(B):q(me,!1)})}G(()=>{U(P,o(_)),w.disabled=o(r),ne.disabled=o(r),I.disabled=o(r),Ee(N,1,`tab ${o(c)==="empty"?"tab-active":""}`),Ee(Q,1,`tab ${o(c)==="all"?"tab-active":""}`),fe.disabled=o(r),be.disabled=o(r)||!o(p)}),Ce(ne,()=>o(s),q=>E(s,q)),Ce(I,()=>o(i),q=>E(i,q)),h(e,g),V()}Ze(["click"]);async function Hv(e,t,r,n,a,s,i,l){if(!(!o(t)||o(r))){E(n,null),E(a,null);try{const c=o(s).map(_=>_.id),f=i.products.filter(_=>c.includes(_.$id));X.setSyncStatus(c,!0),i.onClose();const v=await To(c,f,o(l),"replace");if(E(a,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),i.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";E(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),X.clearSyncStatus()}finally{E(r,!1)}}}function as(e,t,r){o(t)||r.onClose()}var Kv=$('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Jv=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},Yv=(e,t)=>E(t,"empty"),Zv=(e,t)=>E(t,"all"),Xv=$('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Fv=$("<!> ",1),eh=$('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function th(e,t){z(t,!0);let r=H(!1),n=H(null),a=H(null),s=H(Me([])),i=H(""),l=H("empty"),c=H(Me({}));lr(()=>{const pe={};t.products.forEach(ye=>{t.productIds.includes(ye.$id)&&(o(l)==="empty"?pe[ye.$id]=!ye.who||ye.who.length===0:pe[ye.$id]=!0)}),E(c,pe,!0)});const f=Y(()=>t.products.map(pe=>({id:pe.$id,label:pe.productName,title:pe.productName,selected:o(c)[pe.$id]}))),v=Y(()=>o(f).filter(pe=>pe.selected)),_=Y(()=>{const pe=new Set([...X.uniqueWho,...o(s)]);return Array.from(pe).map(ye=>({id:ye,label:ye,selected:o(s).includes(ye)}))}),p=Y(()=>`Gérer les volontaires (${o(v).length} produits sélectionnés)`),m=Y(()=>o(v).length===0?!1:o(s).length>0);function g(pe){const ye=pe.trim();ye&&!o(s).includes(ye)&&E(s,[...o(s),ye],!0)}function x(pe){E(s,o(s).filter(ye=>ye!==pe),!0)}function b(pe){o(s).includes(pe)?x(pe):g(pe)}function y(){o(i).trim()&&(g(o(i)),E(i,""))}function P(pe){o(c)[pe]=!o(c)[pe]}var w=eh(),S=u(w),k=u(S),A=u(k),C=u(A),O=d(A,2);O.__click=[as,r,t];var F=u(O);bt(F,{class:"h-4 w-4"});var j=d(k,2),W=u(j);{var ne=pe=>{var ye=Kv(),st=u(ye);kn(st,{class:"h-4 w-4"});var ft=d(st,2),ve=u(ft);G(()=>U(ve,o(n))),h(pe,ye)};M(W,pe=>{o(n)&&pe(ne)})}var re=d(W,2),D=u(re),I=u(D),K=u(I),ae=u(K);Xr(ae,{class:"h-4 w-4 opacity-50"});var N=d(ae,2);N.__keydown=[Jv,y];var Q=d(K,2);Q.__click=y;var ie=u(Q);Do(ie,{size:16});var oe=d(I,2),fe=d(u(oe),2);Jr(fe,{get items(){return o(_)},onToggleItem:b,showIcon:!0});var be=d(re,2),xe=d(u(be),2),B=u(xe);B.__click=[Yv,l];var me=d(B,2);me.__click=[Zv,l];var q=d(xe,2);Jr(q,{get items(){return o(f)},onToggleItem:P,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var le=d(j,2),ke=u(le);ke.__click=[as,r,t];var Be=d(ke,2);Be.__click=[Hv,m,r,n,a,v,t,s];var Le=u(Be);{var Re=pe=>{var ye=Xv();h(pe,ye)},Ke=pe=>{var ye=Fv(),st=R(ye);Hr(st,{class:"h-4 w-4"});var ft=d(st);G(()=>U(ft,` Appliquer à ${o(v).length??""} produit(s)`)),h(pe,ye)};M(Le,pe=>{o(r)?pe(Re):pe(Ke,!1)})}G(pe=>{U(C,o(p)),O.disabled=o(r),N.disabled=o(r),Q.disabled=pe,Ee(B,1,`tab ${o(l)==="empty"?"tab-active":""}`),Ee(me,1,`tab ${o(l)==="all"?"tab-active":""}`),ke.disabled=o(r),Be.disabled=o(r)||!o(m)},[()=>o(r)||!o(i).trim()]),Ce(N,()=>o(i),pe=>E(i,pe)),h(e,w),V()}Ze(["click","keydown"]);var rh=$("<div><!></div>"),nh=$('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function ah(e,t){z(t,!0);let r=H(!1),n=Ne(t,"width",3,"80"),a=Ne(t,"bgClass",3,"bg-base-300");const s=Y(()=>"w-"+n());var i=L(),l=R(i);{var c=v=>{var _=rh(),p=u(_);se(p,()=>t.children??te),G(()=>Ee(_,1,`${a()??""} ${(o(s)?o(s):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),h(v,_)},f=v=>{var _=nh(),p=R(_),m=u(p),g=d(m,2),x=d(u(g),2),b=u(x);se(b,()=>t.children??te);var y=d(p,2),P=u(y),w=u(P);Mo(w,{class:"h-6 w-6"}),Sl(m,()=>o(r),S=>E(r,S)),h(v,_)};M(l,v=>{Kr.isMobile?v(f,!1):v(c)})}h(e,i),V()}function sh(){}var oh=$('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function ih(e,t){z(t,!0);const r="100",a="ml"+"-"+r;console.log("PANEL_SIDE_WIDTH →",a);const s=Y(()=>X.stats);let i=H(null),l=H("recettes"),c=H(!1),f=H(!1),v=H(Me([])),_=H(Me([])),p=H(!1),m=H(Me([]));function g(B,me="recettes"){E(l,me,!0),E(i,B,!0)}function x(){E(i,null)}function b(B,me,q){E(v,me,!0),E(_,q,!0),E(B==="who"?c:f,!0)}function y(B){(!B||B==="who")&&E(c,!1),(!B||B==="store")&&E(f,!1),E(v,[],!0),E(_,[],!0)}function P(B){console.log(`[ProductsTable] Modification groupée réussie: ${B.updatedCount} produits`)}function w(B){const me=B.filter(q=>q.displayMissingQuantity!=="✅ Complet"&&q.missingQuantityArray&&q.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${B.length} produits reçus → ${me.length} produits avec quantités manquantes`),E(m,me,!0),E(p,!0)}function S(){E(p,!1),E(m,[],!0)}function k(){console.log("[ProductsTable] Achat groupé créé avec succès"),S()}async function A(B){try{if(!X.currentMainId)throw new Error("mainId non disponible");const me=B.missingQuantityArray||[];if(me.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let q=B.$id;B.isSynced||(console.log(`[ProductsTable] Produit ${B.$id} local, création pour validation rapide...`),q=(await qt(B.$id,{},ke=>X.getEnrichedProductById(ke))).$id,console.log(`[ProductsTable] Produit sync créé: ${q}`)),await No(X.currentMainId,q,me,{store:B.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${B.productName}`)}catch(me){console.error("[ProductsTable] Erreur validation rapide:",me),alert("Erreur lors de la validation rapide: "+me.message)}}var C=oh(),O=R(C),F=u(O),j=u(F),W=u(j);ru(W,{class:"mr-1 h-4 w-4"});var ne=d(W),re=d(j,2);re.__click=[sh];var D=u(re);vu(D,{class:"mr-1 h-4 w-4"});var I=d(F,2);ah(I,{width:r,children:(B,me)=>{ev(B,{})},$$slots:{default:!0}});var K=d(I,2);jv(K,{onOpenModal:g,onOpenGroupEditModal:b,onOpenGroupPurchaseModal:w,onQuickValidation:A});var ae=d(O,2);{var N=B=>{Sf(B,{get productId(){return o(i)},get initialTab(){return o(l)},onClose:x})};M(ae,B=>{o(i)&&B(N)})}var Q=d(ae,2);{var ie=B=>{th(B,{get productIds(){return o(v)},get products(){return o(_)},onClose:()=>y("who"),onSuccess:P})};M(Q,B=>{o(c)&&B(ie)})}var oe=d(Q,2);{var fe=B=>{Qv(B,{get productIds(){return o(v)},get products(){return o(_)},onClose:()=>y("store"),onSuccess:P})};M(oe,B=>{o(f)&&B(fe)})}var be=d(oe,2);{var xe=B=>{Hu(B,{get products(){return o(m)},onClose:S,onSuccess:k})};M(be,B=>{o(p)&&B(xe)})}G(()=>{Ee(O,1,`space-y-6 ${Kr.isMobile?"":"ml-100"}`),U(ne,` ${o(s).total??""}`)}),h(e,C),V()}Ze(["click"]);Pi();var lh=$('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function ch(e){var t=lh();h(e,t)}var uh=$('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function dh(e,t){var r=uh(),n=d(u(r),2),a=d(u(n),2),s=u(a);G(()=>U(s,t.message)),h(e,r)}var fh=$('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function vh(e,t){var r=fh(),n=u(r),a=u(n);kn(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var s=d(a,2),i=d(u(s),2),l=u(i);G(()=>U(l,t.message||"Erreur inconnue")),h(e,r)}var hh=$('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),ph=$('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),mh=$('<div class="text-base-content/60"> </div>'),_h=$('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),gh=$('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),bh=$('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),yh=$('<div class="bg-base-200 min-h-screen"><header class="bg-base-300 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function wh(e,t){z(t,!0);let r,n=H(null),a=H(!0),s=H(!1);Xs(async()=>{r=Oc();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await X.initialize(r)}catch(N){const Q=N instanceof Error?N.message:"Erreur lors de l'initialisation";E(n,Q,!0),console.error("[App] Erreur initialisation:",N)}finally{E(a,!1)}}),El(()=>{X.destroy()});async function i(){if(!(!r||o(s))){E(s,!0);try{await X.forceReload(r)}catch(N){console.error("[App] Erreur lors du rechargement forcé:",N)}finally{E(s,!1)}}}const l=Y(()=>o(n)||X.error),c=Y(()=>o(a)||X.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=yh(),_=u(v),p=u(_),m=u(p),g=d(u(m),2),x=u(g);{var b=N=>{var Q=hh();h(N,Q)};M(x,N=>{X.realtimeConnected&&N(b)})}var y=d(x,2);{var P=N=>{var Q=ph();h(N,Q)};M(y,N=>{X.syncing&&N(P)})}var w=d(y,2);{var S=N=>{var Q=mh(),ie=u(Q);G(oe=>U(ie,`Maj: ${oe??""}`),[()=>new Date(X.lastSync).toLocaleTimeString()]),h(N,Q)};M(w,N=>{X.lastSync&&N(S)})}var k=d(w,2);{var A=N=>{var Q=_h();let ie;Q.__click=i;var oe=u(Q);hu(oe,{class:"h-4 w-4"}),G(fe=>{ie=Ee(Q,1,"btn btn-outline btn-sm",null,ie,fe),Q.disabled=o(s)||X.loading},[()=>({loading:o(s)||X.loading})]),h(N,Q)};M(k,N=>{o(n)||N(A)})}var C=d(k,2);{var O=N=>{var Q=gh(),ie=u(Q),oe=u(ie);ou(oe,{class:"mr-2 h-4 w-4"}),G(()=>Ut(ie,"href",f)),h(N,Q)};M(C,N=>{o(n)&&N(O)})}var F=d(_,2),j=u(F);{var W=N=>{vh(N,{get message(){return o(l)}})},ne=N=>{var Q=L(),ie=R(Q);{var oe=fe=>{dh(fe,{get message(){return o(l)}})};M(ie,fe=>{o(l)&&fe(oe)},!0)}h(N,Q)};M(j,N=>{o(n)?N(W):N(ne,!1)})}var re=d(j,2);{var D=N=>{ch(N)};M(re,N=>{o(c)&&N(D)})}var I=d(re,2);{var K=N=>{ih(N,{})},ae=N=>{var Q=L(),ie=R(Q);{var oe=fe=>{var be=bh();h(fe,be)};M(ie,fe=>{!X.loading&&!o(n)&&fe(oe)},!0)}h(N,Q)};M(I,N=>{X.enrichedProducts.length>0?N(K):N(ae,!1)})}h(e,v),V()}Ze(["click"]);il(wh,{target:document.getElementById("app_products")});
