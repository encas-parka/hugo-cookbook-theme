(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const as=!1;var mn=Array.isArray,Lo=Array.prototype.indexOf,sa=Array.from,Vn=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,zo=Object.getOwnPropertyDescriptors,Vo=Object.prototype,Uo=Array.prototype,ss=Object.getPrototypeOf,Sa=Object.isExtensible;function Or(e){return typeof e=="function"}const F=()=>{};function Wo(e){for(var t=0;t<e.length;t++)e[t]()}function os(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function is(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const dt=2,oa=4,ia=8,fr=16,Lt=32,vr=64,la=128,bt=256,vn=512,nt=1024,ht=2048,er=4096,xt=8192,hr=16384,ca=32768,pr=65536,Pa=1<<17,Go=1<<18,Nr=1<<19,Qo=1<<20,Un=1<<21,gn=1<<22,or=1<<23,ir=Symbol("$state"),ls=Symbol("legacy props"),Ho=Symbol(""),zr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function cs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ko(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Jo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Yo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Zo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Xo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Fo(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ei(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ti(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ri(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ni(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const _n=1,bn=2,us=4,ai=8,si=16,oi=1,ii=2,li=4,ci=8,ui=16,di=1,fi=2,Ye=Symbol(),vi="http://www.w3.org/1999/xhtml",hi="http://www.w3.org/2000/svg",pi="@attach";function mi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function gi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let _i=!1;function ds(e){return e===this.v}function fs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function bi(e,t){return e!==t}function vs(e){return!fs(e,this.v)}let Mr=!1,yi=!1;function wi(){Mr=!0}let Ke=null;function Pr(e){Ke=e}function U(e,t=!1,r){Ke={p:Ke,c:null,e:null,s:e,x:null,l:Mr&&!t?{s:null,u:null,$:[]}:null}}function W(e){var t=Ke,r=t.e;if(r!==null){t.e=null;for(var n of r)As(n)}return Ke=t.p,{}}function Cr(){return!Mr||Ke!==null&&Ke.l===null}let nr=[];function hs(){var e=nr;nr=[],Wo(e)}function cr(e){if(nr.length===0&&!Vr){var t=nr;queueMicrotask(()=>{t===nr&&hs()})}nr.push(e)}function Si(){for(;nr.length>0;)hs()}const Pi=new WeakMap;function ps(e){var t=$e;if(t===null)return Ee.f|=or,e;if((t.f&ca)===0){if((t.f&la)===0)throw!t.parent&&e instanceof Error&&ms(e),e;t.b.error(e)}else xr(e,t)}function xr(e,t){for(;t!==null;){if((t.f&la)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&ms(e),e}function ms(e){const t=Pi.get(e);t&&(Vn(e,"message",{value:t.message}),Vn(e,"stack",{value:t.stack}))}const an=new Set;let Oe=null,cn=null,Wn=new Set,Nt=[],yn=null,Gn=!1,Vr=!1;class _t{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#l=[];#o=[];#i=[];#a=[];#s=[];#d=[];skipped_effects=new Set;process(t){Nt=[],cn=null;var r=_t.apply(this);for(const s of t)this.#v(s);if(this.#c===0){this.#f();var n=this.#o,a=this.#i;this.#o=[],this.#i=[],this.#a=[],cn=this,Oe=null,xa(n),xa(a),cn=null,this.#u?.resolve()}else this.#n(this.#o),this.#n(this.#i),this.#n(this.#a);r();for(const s of this.#l)Hr(s);this.#l=[]}#v(t){t.f^=nt;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Lt|vr))!==0,s=a&&(n&nt)!==0,i=s||(n&xt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=nt:(n&oa)!==0?this.#i.push(r):(n&nt)===0&&((n&gn)!==0&&r.b?.is_pending()?this.#l.push(r):$n(r)&&((r.f&fr)!==0&&this.#a.push(r),Hr(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#n(t){for(const r of t)((r.f&ht)!==0?this.#s:this.#d).push(r),lt(r,nt);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){Oe=this}deactivate(){Oe=null}flush(){if(Nt.length>0){if(this.activate(),gs(),Oe!==null&&Oe!==this)return}else this.#c===0&&this.#f();this.deactivate();for(const t of Wn)if(Wn.delete(t),t(),Oe!==null)break}#f(){for(const t of this.#r)t();if(this.#r.clear(),an.size>1){this.#e.clear();let t=!0;for(const r of an){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;_s(n)}if(Nt.length>0){Oe=r;const n=_t.apply(r);for(const a of Nt)r.#v(a);Nt=[],n()}}Oe=null}an.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#s)lt(t,ht),ur(t);for(const t of this.#d)lt(t,er),ur(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=os()).promise}static ensure(){if(Oe===null){const t=Oe=new _t;an.add(Oe),Vr||_t.enqueue(()=>{Oe===t&&t.flush()})}return Oe}static enqueue(t){cr(t)}static apply(t){return F}}function xi(e){var t=Vr;Vr=!0;try{for(var r;;){if(Si(),Nt.length===0&&(Oe?.flush(),Nt.length===0))return yn=null,r;gs()}}finally{Vr=t}}function gs(){var e=Sr;Gn=!0;try{var t=0;for(Aa(!0);Nt.length>0;){var r=_t.ensure();if(t++>1e3){var n,a;$i()}r.process(Nt),Jt.clear()}}finally{Gn=!1,Aa(e),yn=null}}function $i(){try{Xo()}catch(e){xr(e,yn)}}let rr=null;function xa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(hr|xt))===0&&$n(n)&&(rr=[],Hr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Ms(n):n.fn=null),rr?.length>0)){Jt.clear();for(const a of rr)Hr(a);rr=[]}}rr=null}}function _s(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&dt)!==0?_s(t):(r&(gn|fr))!==0&&(lt(t,ht),ur(t))}}function ur(e){for(var t=yn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Gn&&t===$e&&(r&fr)!==0)return;if((r&(vr|Lt))!==0){if((r&nt)===0)return;t.f^=nt}}Nt.push(t)}function ua(e){let t=0,r=Zt(0),n;return()=>{zi()&&(o(r),pa(()=>(t===0&&(n=Ir(()=>e(()=>Mt(r)))),t+=1,()=>{cr(()=>{t-=1,t===0&&(n?.(),n=void 0,Mt(r))})})))}}var Ei=pr|Nr|la;function ki(e,t,r){new Ai(e,t,r)}class Ai{parent;#e=!1;#r;#c=null;#u;#l;#o;#i=null;#a=null;#s=null;#d=null;#v=0;#n=0;#f=!1;#h=null;#t=()=>{this.#h&&$r(this.#h,this.#v)};#_=ua(()=>(this.#h=Zt(this.#v),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#l=n,this.parent=$e.b,this.#e=!!this.#u.pending,this.#o=Ut(()=>{$e.b=this;{try{this.#i=tt(()=>n(this.#r))}catch(a){this.error(a)}this.#n>0?this.#m():this.#e=!1}},Ei)}#w(){try{this.#i=tt(()=>this.#l(this.#r))}catch(t){this.error(t)}this.#e=!1}#x(){const t=this.#u.pending;t&&(this.#a=tt(()=>t(this.#r)),_t.enqueue(()=>{this.#i=this.#p(()=>(_t.ensure(),tt(()=>this.#l(this.#r)))),this.#n>0?this.#m():(Rt(this.#a,()=>{this.#a=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#p(t){var r=$e,n=Ee,a=Ke;Ct(this.#o),ut(this.#o),Pr(this.#o.ctx);try{return t()}catch(s){return ps(s),null}finally{Ct(r),ut(n),Pr(a)}}#m(){const t=this.#u.pending;this.#i!==null&&(this.#d=document.createDocumentFragment(),Ti(this.#i,this.#d)),this.#a===null&&(this.#a=tt(()=>t(this.#r)))}#g(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#g(t);return}this.#n+=t,this.#n===0&&(this.#e=!1,this.#a&&Rt(this.#a,()=>{this.#a=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),cr(()=>{_t.ensure().flush()}))}update_pending_count(t){this.#g(t),this.#v+=t,Wn.add(this.#t)}get_effect_pending(){return this.#_(),o(this.#h)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#f||!r&&!n)throw t;this.#i&&(rt(this.#i),this.#i=null),this.#a&&(rt(this.#a),this.#a=null),this.#s&&(rt(this.#s),this.#s=null);var a=!1,s=!1;const i=()=>{if(a){gi();return}a=!0,s&&ni(),_t.ensure(),this.#v=0,this.#s!==null&&Rt(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#i=this.#p(()=>(this.#f=!1,tt(()=>this.#l(this.#r)))),this.#n>0?this.#m():this.#e=!1};var l=Ee;try{ut(null),s=!0,r?.(t,i),s=!1}catch(c){xr(c,this.#o&&this.#o.parent)}finally{ut(l)}n&&cr(()=>{this.#s=this.#p(()=>{this.#f=!0;try{return tt(()=>{n(this.#r,()=>t,()=>i)})}catch(c){return xr(c,this.#o.parent),null}finally{this.#f=!1}})})}}function Ti(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:en(r);t.append(r),r=a}}function bs(e,t,r){const n=Cr()?wn:da;if(t.length===0){r(e.map(n));return}var a=Oe,s=$e,i=Ni();Promise.all(t.map(l=>Mi(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(s.f&hr)===0&&xr(c,s)}a?.deactivate(),ys()}).catch(l=>{xr(l,s)})}function Ni(){var e=$e,t=Ee,r=Ke,n=Oe;return function(){Ct(e),ut(t),Pr(r),n?.activate()}}function ys(){Ct(null),ut(null),Pr(null)}function wn(e){var t=dt|ht,r=Ee!==null&&(Ee.f&dt)!==0?Ee:null;return $e===null||r!==null&&(r.f&bt)!==0?t|=bt:$e.f|=Nr,{ctx:Ke,deps:null,effects:null,equals:ds,f:t,fn:e,reactions:null,rv:0,v:Ye,wv:0,parent:r??$e,ac:null}}function Mi(e,t){let r=$e;r===null&&Ko();var n=r.b,a=void 0,s=Zt(Ye),i=!Ee,l=new Map;return Ui(()=>{var c=os();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=Oe,v=n.is_pending();i&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(zr),l.set(f,c)));const m=(p,g=void 0)=>{v||f.activate(),g?g!==zr&&(s.f|=or,$r(s,g)):((s.f&or)!==0&&(s.f^=or),$r(s,p)),i&&(n.update_pending_count(-1),v||f.decrement()),ys()};c.promise.then(m,p=>m(null,p||"unknown"))}),ks(()=>{for(const c of l.values())c.reject(zr)}),new Promise(c=>{function f(v){function m(){v===a?c(s):f(a)}v.then(m,m)}f(a)})}function Y(e){const t=wn(e);return Ds(t),t}function da(e){const t=wn(e);return t.equals=vs,t}function ws(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)rt(t[r])}}function Ci(e){for(var t=e.parent;t!==null;){if((t.f&dt)===0)return t;t=t.parent}return null}function fa(e){var t,r=$e;Ct(Ci(e));try{ws(e),t=js(e)}finally{Ct(r)}return t}function Ss(e){var t=fa(e);if(e.equals(t)||(e.v=t,e.wv=Os()),!gr){var r=(Ht||(e.f&bt)!==0)&&e.deps!==null?er:nt;lt(e,r)}}const Jt=new Map;function Zt(e,t){var r={f:0,v:e,reactions:null,equals:ds,rv:0,wv:0};return r}function K(e,t){const r=Zt(e);return Ds(r),r}function Ii(e,t=!1,r=!0){const n=Zt(e);return t||(n.equals=vs),Mr&&r&&Ke!==null&&Ke.l!==null&&(Ke.l.s??=[]).push(n),n}function E(e,t,r=!1){Ee!==null&&(!Pt||(Ee.f&Pa)!==0)&&Cr()&&(Ee.f&(dt|fr|gn|Pa))!==0&&!Ot?.includes(e)&&ri();let n=r?Me(t):t;return $r(e,n)}function $r(e,t){if(!e.equals(t)){var r=e.v;gr?Jt.set(e,t):Jt.set(e,r),e.v=t;var n=_t.ensure();n.capture(e,r),(e.f&dt)!==0&&((e.f&ht)!==0&&fa(e),lt(e,(e.f&bt)===0?nt:er)),e.wv=Os(),Ps(e,ht),Cr()&&$e!==null&&($e.f&nt)!==0&&($e.f&(Lt|vr))===0&&(gt===null?Qi([e]):gt.push(e))}return t}function Mt(e){E(e,e.v+1)}function Ps(e,t){var r=e.reactions;if(r!==null)for(var n=Cr(),a=r.length,s=0;s<a;s++){var i=r[s],l=i.f;if(!(!n&&i===$e)){var c=(l&ht)===0;c&&lt(i,t),(l&dt)!==0?Ps(i,er):c&&((l&fr)!==0&&rr!==null&&rr.push(i),ur(i))}}}function Me(e){if(typeof e!="object"||e===null||ir in e)return e;const t=ss(e);if(t!==Vo&&t!==Uo)return e;var r=new Map,n=mn(e),a=K(0),s=qt,i=l=>{if(qt===s)return l();var c=Ee,f=qt;ut(null),Na(s);var v=l();return ut(c),Na(f),v};return n&&r.set("length",K(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&ei();var v=r.get(c);return v===void 0?v=i(()=>{var m=K(f.value);return r.set(c,m),m}):E(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=i(()=>K(Ye));r.set(c,v),Mt(a)}}else E(f,Ye),Mt(a);return!0},get(l,c,f){if(c===ir)return e;var v=r.get(c),m=c in l;if(v===void 0&&(!m||Kt(l,c)?.writable)&&(v=i(()=>{var g=Me(m?l[c]:Ye),_=K(g);return _}),r.set(c,v)),v!==void 0){var p=o(v);return p===Ye?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=o(v))}else if(f===void 0){var m=r.get(c),p=m?.v;if(m!==void 0&&p!==Ye)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===ir)return!0;var f=r.get(c),v=f!==void 0&&f.v!==Ye||Reflect.has(l,c);if(f!==void 0||$e!==null&&(!v||Kt(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=v?Me(l[c]):Ye,g=K(p);return g}),r.set(c,f));var m=o(f);if(m===Ye)return!1}return v},set(l,c,f,v){var m=r.get(c),p=c in l;if(n&&c==="length")for(var g=f;g<m.v;g+=1){var _=r.get(g+"");_!==void 0?E(_,Ye):g in l&&(_=i(()=>K(Ye)),r.set(g+"",_))}if(m===void 0)(!p||Kt(l,c)?.writable)&&(m=i(()=>K(void 0)),E(m,Me(f)),r.set(c,m));else{p=m.v!==Ye;var S=i(()=>Me(f));E(m,S)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(v,f),!p){if(n&&typeof c=="string"){var y=r.get("length"),$=Number(c);Number.isInteger($)&&$>=y.v&&E(y,$+1)}Mt(a)}return!0},ownKeys(l){o(a);var c=Reflect.ownKeys(l).filter(m=>{var p=r.get(m);return p===void 0||p.v!==Ye});for(var[f,v]of r)v.v!==Ye&&!(f in l)&&c.push(f);return c},setPrototypeOf(){ti()}})}function $a(e){try{if(e!==null&&typeof e=="object"&&ir in e)return e[ir]}catch{}return e}function Di(e,t){return Object.is($a(e),$a(t))}var Ea,xs,$s,Es;function Ri(){if(Ea===void 0){Ea=window,xs=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;$s=Kt(t,"firstChild").get,Es=Kt(t,"nextSibling").get,Sa(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Sa(r)&&(r.__t=void 0)}}function zt(e=""){return document.createTextNode(e)}function Er(e){return $s.call(e)}function en(e){return Es.call(e)}function u(e,t){return Er(e)}function I(e,t=!1){{var r=Er(e);return r instanceof Comment&&r.data===""?en(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=en(n);return n}function Oi(e){e.textContent=""}function Sn(){return!1}function qi(e,t){if(t){const r=document.body;e.autofocus=!0,cr(()=>{document.activeElement===r&&e.focus()})}}let ka=!1;function ji(){ka||(ka=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Pn(e){var t=Ee,r=$e;ut(null),Ct(null);try{return e()}finally{ut(t),Ct(r)}}function va(e,t,r,n=r){e.addEventListener(t,()=>Pn(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),ji()}function Bi(e){$e===null&&Ee===null&&Zo(),Ee!==null&&(Ee.f&bt)!==0&&$e===null&&Yo(),gr&&Jo()}function Li(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Vt(e,t,r,n=!0){var a=$e;a!==null&&(a.f&xt)!==0&&(e|=xt);var s={ctx:Ke,deps:null,nodes_start:null,nodes_end:null,f:e|ht,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Hr(s),s.f|=ca}catch(c){throw rt(s),c}else t!==null&&ur(s);if(n){var i=s;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Nr)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Li(i,a),Ee!==null&&(Ee.f&dt)!==0&&(e&vr)===0)){var l=Ee;(l.effects??=[]).push(i)}}return s}function zi(){return Ee!==null&&!Pt}function ks(e){const t=Vt(ia,null,!1);return lt(t,nt),t.teardown=e,t}function mr(e){Bi();var t=$e.f,r=!Ee&&(t&Lt)!==0&&(t&ca)===0;if(r){var n=Ke;(n.e??=[]).push(e)}else return As(e)}function As(e){return Vt(oa|Qo,e,!1)}function Vi(e){_t.ensure();const t=Vt(vr|Nr,e,!0);return(r={})=>new Promise(n=>{r.outro?Rt(t,()=>{rt(t),n(void 0)}):(rt(t),n(void 0))})}function ha(e){return Vt(oa,e,!1)}function Ui(e){return Vt(gn|Nr,e,!0)}function pa(e,t=0){return Vt(ia|t,e,!0)}function G(e,t=[],r=[]){bs(t,r,n=>{Vt(ia,()=>e(...n.map(o)),!0)})}function Ut(e,t=0){var r=Vt(fr|t,e,!0);return r}function tt(e,t=!0){return Vt(Lt|Nr,e,!0,t)}function Ts(e){var t=e.teardown;if(t!==null){const r=gr,n=Ee;Ta(!0),ut(null);try{t.call(null)}finally{Ta(r),ut(n)}}}function Ns(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&Pn(()=>{a.abort(zr)});var n=r.next;(r.f&vr)!==0?r.parent=null:rt(r,t),r=n}}function Wi(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Lt)===0&&rt(t),t=r}}function rt(e,t=!0){var r=!1;(t||(e.f&Go)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Gi(e.nodes_start,e.nodes_end),r=!0),Ns(e,t&&!r),hn(e,0),lt(e,hr);var n=e.transitions;if(n!==null)for(const s of n)s.stop();Ts(e);var a=e.parent;a!==null&&a.first!==null&&Ms(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Gi(e,t){for(;e!==null;){var r=e===t?null:en(e);e.remove(),e=r}}function Ms(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Rt(e,t){var r=[];ma(e,r,!0),Cs(r,()=>{rt(e),t&&t()})}function Cs(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function ma(e,t,r){if((e.f&xt)===0){if(e.f^=xt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,s=(n.f&pr)!==0||(n.f&Lt)!==0;ma(n,t,s?r:!1),n=a}}}function xn(e){Is(e,!0)}function Is(e,t){if((e.f&xt)!==0){e.f^=xt,(e.f&nt)===0&&(lt(e,ht),ur(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&pr)!==0||(r.f&Lt)!==0;Is(r,a?t:!1),r=n}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}let Sr=!1;function Aa(e){Sr=e}let gr=!1;function Ta(e){gr=e}let Ee=null,Pt=!1;function ut(e){Ee=e}let $e=null;function Ct(e){$e=e}let Ot=null;function Ds(e){Ee!==null&&(Ot===null?Ot=[e]:Ot.push(e))}let ot=null,vt=0,gt=null;function Qi(e){gt=e}let Rs=1,Qr=0,qt=Qr;function Na(e){qt=e}let Ht=!1;function Os(){return++Rs}function $n(e){var t=e.f;if((t&ht)!==0)return!0;if((t&er)!==0){var r=e.deps,n=(t&bt)!==0;if(r!==null){var a,s,i=(t&vn)!==0,l=n&&$e!==null&&!Ht,c=r.length;if((i||l)&&($e===null||($e.f&hr)===0)){var f=e,v=f.parent;for(a=0;a<c;a++)s=r[a],(i||!s?.reactions?.includes(f))&&(s.reactions??=[]).push(f);i&&(f.f^=vn),l&&v!==null&&(v.f&bt)===0&&(f.f^=bt)}for(a=0;a<c;a++)if(s=r[a],$n(s)&&Ss(s),s.wv>e.wv)return!0}(!n||$e!==null&&!Ht)&&lt(e,nt)}return!1}function qs(e,t,r=!0){var n=e.reactions;if(n!==null&&!Ot?.includes(e))for(var a=0;a<n.length;a++){var s=n[a];(s.f&dt)!==0?qs(s,t,!1):t===s&&(r?lt(s,ht):(s.f&nt)!==0&&lt(s,er),ur(s))}}function js(e){var t=ot,r=vt,n=gt,a=Ee,s=Ht,i=Ot,l=Ke,c=Pt,f=qt,v=e.f;ot=null,vt=0,gt=null,Ht=(v&bt)!==0&&(Pt||!Sr||Ee===null),Ee=(v&(Lt|vr))===0?e:null,Ot=null,Pr(e.ctx),Pt=!1,qt=++Qr,e.ac!==null&&(Pn(()=>{e.ac.abort(zr)}),e.ac=null);try{e.f|=Un;var m=e.fn,p=m(),g=e.deps;if(ot!==null){var _;if(hn(e,vt),g!==null&&vt>0)for(g.length=vt+ot.length,_=0;_<ot.length;_++)g[vt+_]=ot[_];else e.deps=g=ot;if(!Ht||(v&dt)!==0&&e.reactions!==null)for(_=vt;_<g.length;_++)(g[_].reactions??=[]).push(e)}else g!==null&&vt<g.length&&(hn(e,vt),g.length=vt);if(Cr()&&gt!==null&&!Pt&&g!==null&&(e.f&(dt|er|ht))===0)for(_=0;_<gt.length;_++)qs(gt[_],e);return a!==null&&a!==e&&(Qr++,gt!==null&&(n===null?n=gt:n.push(...gt))),(e.f&or)!==0&&(e.f^=or),p}catch(S){return ps(S)}finally{e.f^=Un,ot=t,vt=r,gt=n,Ee=a,Ht=s,Ot=i,Pr(l),Pt=c,qt=f}}function Hi(e,t){let r=t.reactions;if(r!==null){var n=Lo.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&dt)!==0&&(ot===null||!ot.includes(t))&&(lt(t,er),(t.f&(bt|vn))===0&&(t.f^=vn),ws(t),hn(t,0))}function hn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Hi(e,r[n])}function Hr(e){var t=e.f;if((t&hr)===0){lt(e,nt);var r=$e,n=Sr;$e=e,Sr=!0;try{(t&fr)!==0?Wi(e):Ns(e),Ts(e);var a=js(e);e.teardown=typeof a=="function"?a:null,e.wv=Rs;var s;as&&yi&&(e.f&ht)!==0&&e.deps}finally{Sr=n,$e=r}}}async function Ki(){await Promise.resolve(),xi()}function o(e){var t=e.f,r=(t&dt)!==0;if(Ee!==null&&!Pt){var n=$e!==null&&($e.f&hr)!==0;if(!n&&!Ot?.includes(e)){var a=Ee.deps;if((Ee.f&Un)!==0)e.rv<Qr&&(e.rv=Qr,ot===null&&a!==null&&a[vt]===e?vt++:ot===null?ot=[e]:(!Ht||!ot.includes(e))&&ot.push(e));else{(Ee.deps??=[]).push(e);var s=e.reactions;s===null?e.reactions=[Ee]:s.includes(Ee)||s.push(Ee)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&bt)===0&&(i.f^=bt)}if(gr){if(Jt.has(e))return Jt.get(e);if(r){i=e;var c=i.v;return((i.f&nt)===0&&i.reactions!==null||Bs(i))&&(c=fa(i)),Jt.set(i,c),c}}else r&&(i=e,$n(i)&&Ss(i));if((e.f&or)!==0)throw e.v;return e.v}function Bs(e){if(e.v===Ye)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Jt.has(t)||(t.f&dt)!==0&&Bs(t))return!0;return!1}function Ir(e){var t=Pt;try{return Pt=!0,e()}finally{Pt=t}}const Ji=-7169;function lt(e,t){e.f=e.f&Ji|t}function Yi(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Zi=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Xi(e){return Zi.includes(e)}const Fi={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function el(e){return e=e.toLowerCase(),Fi[e]??e}const tl=["touchstart","touchmove"];function rl(e){return tl.includes(e)}const Ls=new Set,Qn=new Set;function zs(e,t,r,n={}){function a(s){if(n.capture||Br.call(t,s),!s.cancelBubble)return Pn(()=>r?.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?cr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Hn(e,t,r,n={}){var a=zs(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function Ze(e){for(var t=0;t<e.length;t++)Ls.add(e[t]);for(var r of Qn)r(e)}let Ma=null;function Br(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],s=a[0]||e.target;Ma=e;var i=0,l=Ma===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(s=a[i]||e.target,s!==t){Vn(e,"currentTarget",{configurable:!0,get(){return s||r}});var v=Ee,m=$e;ut(null),Ct(null);try{for(var p,g=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var S=s["__"+n];if(S!=null&&(!s.disabled||e.target===s))if(mn(S)){var[b,...y]=S;b.apply(s,[e,...y])}else S.call(s,e)}catch($){p?g.push($):p=$}if(e.cancelBubble||_===t||_===null)break;s=_}if(p){for(let $ of g)queueMicrotask(()=>{throw $});throw p}}finally{e.__root=t,delete e.currentTarget,ut(v),Ct(m)}}}function Vs(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function kr(e,t){var r=$e;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function x(e,t){var r=(t&di)!==0,n=(t&fi)!==0,a,s=!e.startsWith("<!>");return()=>{a===void 0&&(a=Vs(s?e:"<!>"+e),r||(a=Er(a)));var i=n||xs?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Er(i),c=i.lastChild;kr(l,c)}else kr(i,i);return i}}function nl(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var i=Vs(a),l=Er(i);s=Er(l)}var c=s.cloneNode(!0);return kr(c,c),c}}function al(e,t){return nl(e,t,"svg")}function yt(e=""){{var t=zt(e+"");return kr(t,t),t}}function L(){var e=document.createDocumentFragment(),t=document.createComment(""),r=zt();return e.append(t,r),kr(t,r),e}function h(e,t){e!==null&&e.before(t)}function V(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function sl(e,t){return ol(e,t)}const yr=new Map;function ol(e,{target:t,anchor:r,props:n={},events:a,context:s,intro:i=!0}){Ri();var l=new Set,c=m=>{for(var p=0;p<m.length;p++){var g=m[p];if(!l.has(g)){l.add(g);var _=rl(g);t.addEventListener(g,Br,{passive:_});var S=yr.get(g);S===void 0?(document.addEventListener(g,Br,{passive:_}),yr.set(g,1)):yr.set(g,S+1)}}};c(sa(Ls)),Qn.add(c);var f=void 0,v=Vi(()=>{var m=r??t.appendChild(zt());return ki(m,{pending:()=>{}},p=>{if(s){U({});var g=Ke;g.c=s}a&&(n.$$events=a),f=e(p,n)||{},s&&W()}),()=>{for(var p of l){t.removeEventListener(p,Br);var g=yr.get(p);--g===0?(document.removeEventListener(p,Br),yr.delete(p)):yr.set(p,g)}Qn.delete(c),m!==r&&m.parentNode?.removeChild(m)}});return il.set(f,v),f}let il=new WeakMap;function N(e,t,r=!1){var n=e,a=null,s=null,i=Ye,l=r?pr:0,c=!1;const f=(g,_=!0)=>{c=!0,p(_,g)};var v=null;function m(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var g=i?a:s,_=i?s:a;g&&xn(g),_&&Rt(_,()=>{i?s=null:a=null})}const p=(g,_)=>{if(i!==(i=g)){var S=Sn(),b=n;if(S&&(v=document.createDocumentFragment(),v.append(b=zt())),i?a??=_&&tt(()=>_(b)):s??=_&&tt(()=>_(b)),S){var y=Oe,$=i?a:s,w=i?s:a;$&&y.skipped_effects.delete($),w&&y.skipped_effects.add(w),y.add_callback(m)}else m()}};Ut(()=>{c=!1,t(f),c||p(null,null)},l)}function ll(e,t,r){var n=e,a=Ye,s,i,l=null,c=Cr()?bi:fs;function f(){s&&Rt(s),l!==null&&(l.lastChild.remove(),n.before(l),l=null),s=i}Ut(()=>{if(c(a,a=t())){var v=n,m=Sn();m&&(l=document.createDocumentFragment(),l.append(v=zt())),i=tt(()=>r(v)),m?Oe.add_callback(f):f()}})}function Kn(e,t){return t}function cl(e,t,r){for(var n=e.items,a=[],s=t.length,i=0;i<s;i++)ma(t[i].e,a,!0);var l=s>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;Oi(c),c.append(r),n.clear(),Tt(e,t[0].prev,t[s-1].next)}Cs(a,()=>{for(var f=0;f<s;f++){var v=t[f];l||(n.delete(v.k),Tt(e,v.prev,v.next)),rt(v.e,!l)}})}function it(e,t,r,n,a,s=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&us)!==0;if(c){var f=e;i=f.appendChild(zt())}var v=null,m=!1,p=new Map,g=da(()=>{var y=r();return mn(y)?y:y==null?[]:sa(y)}),_,S;function b(){ul(S,_,l,p,i,a,t,n,r),s!==null&&(_.length===0?v?xn(v):v=tt(()=>s(i)):v!==null&&Rt(v,()=>{v=null}))}Ut(()=>{S??=$e,_=o(g);var y=_.length;if(!(m&&y===0)){m=y===0;var $,w,P,k;if(Sn()){var A=new Set,M=Oe;for(w=0;w<y;w+=1){P=_[w],k=n(P,w);var D=l.items.get(k)??p.get(k);D?(t&(_n|bn))!==0&&Us(D,P,w,t):($=Ws(null,l,null,null,P,k,w,a,t,r,!0),p.set(k,$)),A.add(k)}for(const[X,B]of l.items)A.has(X)||M.skipped_effects.add(B.e);M.add_callback(b)}else b();o(g)}})}function ul(e,t,r,n,a,s,i,l,c){var f=(i&ai)!==0,v=(i&(_n|bn))!==0,m=t.length,p=r.items,g=r.first,_=g,S,b=null,y,$=[],w=[],P,k,A,M;if(f)for(M=0;M<m;M+=1)P=t[M],k=l(P,M),A=p.get(k),A!==void 0&&(A.a?.measure(),(y??=new Set).add(A));for(M=0;M<m;M+=1){if(P=t[M],k=l(P,M),A=p.get(k),A===void 0){var D=n.get(k);if(D!==void 0){n.delete(k),p.set(k,D);var X=b?b.next:_;Tt(r,b,D),Tt(r,D,X),In(D,X,a),b=D}else{var B=_?_.e.nodes_start:a;b=Ws(B,r,b,b===null?r.first:b.next,P,k,M,s,i,c)}p.set(k,b),$=[],w=[],_=b.next;continue}if(v&&Us(A,P,M,i),(A.e.f&xt)!==0&&(xn(A.e),f&&(A.a?.unfix(),(y??=new Set).delete(A))),A!==_){if(S!==void 0&&S.has(A)){if($.length<w.length){var Q=w[0],ee;b=Q.prev;var he=$[0],O=$[$.length-1];for(ee=0;ee<$.length;ee+=1)In($[ee],Q,a);for(ee=0;ee<w.length;ee+=1)S.delete(w[ee]);Tt(r,he.prev,O.next),Tt(r,b,he),Tt(r,O,Q),_=Q,b=O,M-=1,$=[],w=[]}else S.delete(A),In(A,_,a),Tt(r,A.prev,A.next),Tt(r,A,b===null?r.first:b.next),Tt(r,b,A),b=A;continue}for($=[],w=[];_!==null&&_.k!==k;)(_.e.f&xt)===0&&(S??=new Set).add(_),w.push(_),_=_.next;if(_===null)continue;A=_}$.push(A),b=A,_=A.next}if(_!==null||S!==void 0){for(var R=S===void 0?[]:sa(S);_!==null;)(_.e.f&xt)===0&&R.push(_),_=_.next;var H=R.length;if(H>0){var ne=(i&us)!==0&&m===0?a:null;if(f){for(M=0;M<H;M+=1)R[M].a?.measure();for(M=0;M<H;M+=1)R[M].a?.fix()}cl(r,R,ne)}}f&&cr(()=>{if(y!==void 0)for(A of y)A.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var C of n.values())rt(C.e);n.clear()}function Us(e,t,r,n){(n&_n)!==0&&$r(e.v,t),(n&bn)!==0?$r(e.i,r):e.i=r}function Ws(e,t,r,n,a,s,i,l,c,f,v){var m=(c&_n)!==0,p=(c&si)===0,g=m?p?Ii(a,!1,!1):Zt(a):a,_=(c&bn)===0?i:Zt(i),S={i:_,v:g,k:s,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=zt())}return S.e=tt(()=>l(e,g,_,f),_i),S.e.prev=r&&r.e,S.e.next=n&&n.e,r===null?v||(t.first=S):(r.next=S,r.e.next=S.e),n!==null&&(n.prev=S,n.e.prev=S.e),S}finally{}}function In(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,s=e.e.nodes_start;s!==null&&s!==n;){var i=en(s);a.before(s),s=i}}function Tt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function re(e,t,...r){var n=e,a=F,s;Ut(()=>{a!==(a=t())&&(s&&(rt(s),s=null),s=tt(()=>a(n,...r)))},pr)}function lr(e,t,r){var n=e,a,s,i=null,l=null;function c(){s&&(Rt(s),s=null),i&&(i.lastChild.remove(),n.before(i),i=null),s=l,l=null}Ut(()=>{if(a!==(a=t())){var f=Sn();if(a){var v=n;f&&(i=document.createDocumentFragment(),i.append(v=zt()),s&&Oe.skipped_effects.add(s)),l=tt(()=>r(v,a))}f?Oe.add_callback(c):c()}},pr)}function dl(e,t,r,n,a,s){var i,l,c=null,f=e,v;Ut(()=>{const m=t()||null;var p=hi;m!==i&&(v&&(m===null?Rt(v,()=>{v=null,l=null}):m===l?xn(v):rt(v)),m&&m!==l&&(v=tt(()=>{if(c=document.createElementNS(p,m),kr(c,c),n){var g=c.appendChild(zt());n(c,g)}$e.nodes_end=c,f.before(c)})),i=m,i&&(l=i))},pr)}function fl(e,t){var r=void 0,n;Ut(()=>{r!==(r=t())&&(n&&(rt(n),n=null),r&&(n=tt(()=>{ha(()=>r(e))})))})}function Gs(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Gs(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function vl(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Gs(e))&&(n&&(n+=" "),n+=t);return n}function hl(e){return typeof e=="object"?vl(e):e??""}const Ca=[...` 	
\r\f \v\uFEFF`];function pl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var s=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+s;(i===0||Ca.includes(n[i-1]))&&(l===n.length||Ca.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Ia(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var s=e[a];s!=null&&s!==""&&(n+=" "+a+": "+s+r)}return n}function Dn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ml(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Dn)),a&&c.push(...Object.keys(a).map(Dn));var f=0,v=-1;const S=e.length;for(var m=0;m<S;m++){var p=e[m];if(l?p==="/"&&e[m-1]==="*"&&(l=!1):s?s===p&&(s=!1):p==="/"&&e[m+1]==="*"?l=!0:p==='"'||p==="'"?s=p:p==="("?i++:p===")"&&i--,!l&&s===!1&&i===0){if(p===":"&&v===-1)v=m;else if(p===";"||m===S-1){if(v!==-1){var g=Dn(e.substring(f,v).trim());if(!c.includes(g)){p!==";"&&m++;var _=e.substring(f,m).trim();r+=" "+_+";"}}f=m+1,v=-1}}}}return n&&(r+=Ia(n)),a&&(r+=Ia(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ae(e,t,r,n,a,s){var i=e.__className;if(i!==r||i===void 0){var l=pl(r,n,s);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(s&&a!==s)for(var c in s){var f=!!s[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return s}function Rn(e,t={},r,n){for(var a in r){var s=r[a];t[a]!==s&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,s,n))}}function Qs(e,t,r,n){var a=e.__style;if(a!==t){var s=ml(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else n&&(Array.isArray(n)?(Rn(e,r?.[0],n[0]),Rn(e,r?.[1],n[1],"important")):Rn(e,r,n));return n}function pn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!mn(t))return mi();for(var n of e.options)n.selected=t.includes(Ur(n));return}for(n of e.options){var a=Ur(n);if(Di(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Hs(e){var t=new MutationObserver(()=>{pn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ks(()=>{t.disconnect()})}function ar(e,t,r=t){var n=!0;va(e,"change",a=>{var s=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(s),Ur);else{var l=e.querySelector(s)??e.querySelector("option:not([disabled])");i=l&&Ur(l)}r(i)}),ha(()=>{var a=t();if(pn(e,a,n),n&&a===void 0){var s=e.querySelector(":checked");s!==null&&(a=Ur(s),r(a))}e.__value=a,n=!1}),Hs(e)}function Ur(e){return"__value"in e?e.__value:e.value}const qr=Symbol("class"),jr=Symbol("style"),Ks=Symbol("is custom element"),Js=Symbol("is html");function gl(e,t){var r=En(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function On(e,t){var r=En(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function _l(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function jt(e,t,r,n){var a=En(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Ho]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ys(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function bl(e,t,r,n,a=!1,s=!1){var i=En(e),l=i[Ks],c=!i[Js],f=t||{},v=e.tagName==="OPTION";for(var m in t)m in r||(r[m]=null);r.class?r.class=hl(r.class):r[qr]&&(r.class=null),r[jr]&&(r.style??=null);var p=Ys(e);for(const P in r){let k=r[P];if(v&&P==="value"&&k==null){e.value=e.__value="",f[P]=k;continue}if(P==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ae(e,g,k,n,t?.[qr],r[qr]),f[P]=k,f[qr]=r[qr];continue}if(P==="style"){Qs(e,k,t?.[jr],r[jr]),f[P]=k,f[jr]=r[jr];continue}var _=f[P];if(!(k===_&&!(k===void 0&&e.hasAttribute(P)))){f[P]=k;var S=P[0]+P[1];if(S!=="$$")if(S==="on"){const A={},M="$$"+P;let D=P.slice(2);var b=Xi(D);if(Yi(D)&&(D=D.slice(0,-7),A.capture=!0),!b&&_){if(k!=null)continue;e.removeEventListener(D,f[M],A),f[M]=null}if(k!=null)if(b)e[`__${D}`]=k,Ze([D]);else{let X=function(B){f[P].call(this,B)};var w=X;f[M]=zs(D,e,X,A)}else b&&(e[`__${D}`]=void 0)}else if(P==="style")jt(e,P,k);else if(P==="autofocus")qi(e,!!k);else if(!l&&(P==="__value"||P==="value"&&k!=null))e.value=e.__value=k;else if(P==="selected"&&v)_l(e,k);else{var y=P;c||(y=el(y));var $=y==="defaultValue"||y==="defaultChecked";if(k==null&&!l&&!$)if(i[P]=null,y==="value"||y==="checked"){let A=e;const M=t===void 0;if(y==="value"){let D=A.defaultValue;A.removeAttribute(y),A.defaultValue=D,A.value=A.__value=M?D:null}else{let D=A.defaultChecked;A.removeAttribute(y),A.defaultChecked=D,A.checked=M?D:!1}}else e.removeAttribute(P);else $||p.includes(y)&&(l||typeof k!="string")?(e[y]=k,y in i&&(i[y]=Ye)):typeof k!="function"&&jt(e,y,k)}}}return f}function Da(e,t,r=[],n=[],a,s=!1,i=!1){bs(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",m=!1;if(Ut(()=>{var g=t(...l.map(o)),_=bl(e,c,g,a,s,i);m&&v&&"value"in g&&pn(e,g.value);for(let b of Object.getOwnPropertySymbols(f))g[b]||rt(f[b]);for(let b of Object.getOwnPropertySymbols(g)){var S=g[b];b.description===pi&&(!c||S!==c[b])&&(f[b]&&rt(f[b]),f[b]=tt(()=>fl(e,()=>S))),_[b]=S}c=_}),v){var p=e;ha(()=>{pn(p,c.value,!0),Hs(p)})}m=!0})}function En(e){return e.__attributes??={[Ks]:e.nodeName.includes("-"),[Js]:e.namespaceURI===vi}}var Ra=new Map;function Ys(e){var t=e.getAttribute("is")||e.nodeName,r=Ra.get(t);if(r)return r;Ra.set(t,r=[]);for(var n,a=e,s=Element.prototype;s!==a;){n=zo(a);for(var i in n)n[i].set&&r.push(i);a=ss(a)}return r}function Ie(e,t,r=t){var n=new WeakSet;va(e,"input",async a=>{var s=a?e.defaultValue:e.value;if(s=qn(e)?jn(s):s,r(s),Oe!==null&&n.add(Oe),await Ki(),s!==(s=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=s??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),Ir(t)==null&&e.value&&(r(qn(e)?jn(e.value):e.value),Oe!==null&&n.add(Oe)),pa(()=>{var a=t();if(e===document.activeElement){var s=cn??Oe;if(n.has(s))return}qn(e)&&a===jn(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function yl(e,t,r=t){va(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),Ir(t)==null&&r(e.checked),pa(()=>{var n=t();e.checked=!!n})}function qn(e){var t=e.type;return t==="number"||t==="range"}function jn(e){return e===""?null:+e}let sn=!1;function wl(e){var t=sn;try{return sn=!1,[e(),sn]}finally{sn=t}}const Sl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function oe(e,t,r){return new Proxy({props:e,exclude:t},Sl)}const Pl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Or(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Or(a)&&(a=a());const s=Kt(a,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Or(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Kt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===ir||t===ls)return!1;for(let r of e.props)if(Or(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Or(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ie(...e){return new Proxy({props:e},Pl)}function Ne(e,t,r,n){var a=!Mr||(r&ii)!==0,s=(r&ci)!==0,i=(r&ui)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?Ir(n):n),l),v;if(s){var m=ir in e||ls in e;v=Kt(e,t)?.set??(m&&t in e?w=>e[t]=w:void 0)}var p,g=!1;s?[p,g]=wl(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),v&&(a&&Fo(),v(p)));var _;if(a?_=()=>{var w=e[t];return w===void 0?f():(c=!0,w)}:_=()=>{var w=e[t];return w!==void 0&&(l=void 0),w===void 0?l:w},a&&(r&li)===0)return _;if(v){var S=e.$$legacy;return(function(w,P){return arguments.length>0?((!a||!P||S||g)&&v(P?_():w),w):_()})}var b=!1,y=((r&oi)!==0?wn:da)(()=>(b=!1,_()));s&&o(y);var $=$e;return(function(w,P){if(arguments.length>0){const k=P?o(y):a&&s?Me(w):w;return E(y,k),b=!0,l!==void 0&&(l=k),w}return gr&&b||($.f&hr)!==0?y.v:o(y)})}function Zs(e){Ke===null&&cs(),Mr&&Ke.l!==null?$l(Ke).m.push(e):mr(()=>{const t=Ir(e);if(typeof t=="function")return t})}function xl(e){Ke===null&&cs(),Zs(()=>()=>Ir(e))}function $l(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const El="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(El);const kl="modulepreload",Al=function(e){return"/"+e},Oa={},Tl=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(v=>{if(v=Al(v),v in Oa)return;Oa[v]=!0;const m=v.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${p}`))return;const g=document.createElement("link");if(g.rel=m?"stylesheet":kl,m||(g.as="script"),g.crossOrigin="",g.href=v,c&&g.setAttribute("nonce",c),document.head.appendChild(g),m)return new Promise((_,S)=>{g.addEventListener("load",_),g.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${v}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};class Nl extends Map{#e=new Map;#r=K(0);#c=K(0);#u=qt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#l(t){return qt===this.#u?K(t):Zt(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else return o(this.#r),!1}return o(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else{o(this.#r);return}}return o(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),s=super.get(t),i=super.set(t,r),l=this.#r;if(a===void 0)a=this.#l(0),n.set(t,a),E(this.#c,super.size),Mt(l);else if(s!==r){Mt(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(v=>c.has(v));f&&Mt(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),E(this.#c,super.size),E(n,-1),Mt(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;E(this.#c,0);for(var r of t.values())E(r,-1);Mt(this.#r),t.clear()}}#o(){o(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#l(0);t.set(r,n)}}for([,n]of this.#e)o(n)}keys(){return o(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return o(this.#c),super.size}}class Ml{#e;#r;constructor(t,r){this.#e=t,this.#r=ua(r)}get current(){return this.#r(),this.#e()}}const Cl=/\(.+\)/,Il=new Set(["all","print","screen","and","or","not","only"]);class Dl extends Ml{constructor(t,r){let n=Cl.test(t)||t.split(/[\s,]+/).some(s=>Il.has(s.trim()))?t:`(${t})`;const a=window.matchMedia(n);super(()=>a.matches,s=>Hn(a,"change",s))}}const Rl=typeof window<"u"?window:void 0;function Ol(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class ql{#e;#r;constructor(t={}){const{window:r=Rl,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=ua(a=>{const s=Hn(r,"focusin",a),i=Hn(r,"focusout",a);return()=>{s(),i()}}))}get current(){return this.#r?.(),this.#e?Ol(this.#e):null}}new ql;function jl(e){return typeof e=="function"}function Bl(e,t){if(jl(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Ll(e,t){let r=K(null);const n=Y(()=>Bl(t,250));function a(...s){if(o(r))o(r).timeout&&clearTimeout(o(r).timeout);else{let i,l;const c=new Promise((f,v)=>{i=f,l=v});E(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return o(r).runner=async()=>{if(!o(r))return;const i=o(r);E(r,null);try{i.resolve(await e.apply(this,s))}catch(l){i.reject(l)}},o(r).timeout=setTimeout(o(r).runner,o(n)),o(r).promise}return a.cancel=async()=>{(!o(r)||o(r).timeout===null)&&(await new Promise(s=>setTimeout(s,0)),!o(r)||o(r).timeout===null)||(clearTimeout(o(r).timeout),o(r).reject("Cancelled"),E(r,null))},a.runScheduledNow=async()=>{(!o(r)||!o(r).timeout)&&(await new Promise(s=>setTimeout(s,0)),!o(r)||!o(r).timeout)||(clearTimeout(o(r).timeout),o(r).timeout=null,await o(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!o(r)?.timeout}}),a}function zl(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),s=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return s.length?Wr(s.flatMap(i=>i.neededConsolidatedForDate)):[]}function Lr(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function un(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Wr(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function dn(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>sr(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],s=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(a.push({q:v,u:c}),s.push(sr(v.toString(),c)))});const i=s.length>0?s.join(" et "):"✅ Complet";return{numeric:a,display:i}}function tr(e){return e?.length?e.map(t=>sr(t.q.toString(),t.u)).join(" et "):"-"}function sr(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function qa(e){return Lr(e)}function ga(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Vl(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([s])=>{const i=new Date(s);return i>=n&&i<=a}).reduce((s,[i,l])=>s+(l.totalAssiettes||0),0)}function Ul(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Wl(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Gl(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function Ql(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return ga(t)}function Hl(e,t,r=""){if(e.status==="cancelled")return!1;const n=e.deliveryDate||e.$createdAt;return!n||n>t||r&&e.$createdAt<r?!1:e.status==="delivered"||e.status==="pending"||e.status==="ordered"&&n<=t}function Bn(e,t){let r=[],n="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(r=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],n=e.stockParsed.dateTime);const a=[];if(e.purchases)for(const c of e.purchases)Hl(c,t,n)&&a.push({q:c.quantity,u:c.unit});const s=Kl(e,t),i=[...r,...a],l=ga(i);return Jl(l,s)}function Kl(e,t){if(!e.byDate)return[];const r=[];for(const[n,a]of Object.entries(e.byDate))if(n<=t){const i=a.totalConsolidated;i&&r.push(...i)}return ga(r)}function Jl(e,t){const r=new Map,n=new Map;e.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),t.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const a=[],s=new Set([...r.keys(),...n.keys()]);for(const i of s){const l=r.get(i)||0,c=n.get(i)||0,f=l-c;Math.abs(f)>.001&&a.push({q:f,u:i})}return a}function Ln(e){if(!e?.length)return"Équilibré";const t=e.filter(n=>n.q>0),r=e.filter(n=>n.q<0);if(t.length>0&&r.length>0){const n=t.map(s=>sr(s.q.toString(),s.u)).join(" et "),a=r.map(s=>sr(Math.abs(s.q).toString(),s.u)).join(" et ");return`${n} disponibles, ${a} manquant${r.length>1?"s":""}`}else return t.length>0?t.map(n=>"+"+sr(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>sr(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function Yl(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class T{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}T.equal=(e,t)=>new T("equal",e,t).toString();T.notEqual=(e,t)=>new T("notEqual",e,t).toString();T.lessThan=(e,t)=>new T("lessThan",e,t).toString();T.lessThanEqual=(e,t)=>new T("lessThanEqual",e,t).toString();T.greaterThan=(e,t)=>new T("greaterThan",e,t).toString();T.greaterThanEqual=(e,t)=>new T("greaterThanEqual",e,t).toString();T.isNull=e=>new T("isNull",e).toString();T.isNotNull=e=>new T("isNotNull",e).toString();T.between=(e,t,r)=>new T("between",e,[t,r]).toString();T.startsWith=(e,t)=>new T("startsWith",e,t).toString();T.endsWith=(e,t)=>new T("endsWith",e,t).toString();T.select=e=>new T("select",void 0,e).toString();T.search=(e,t)=>new T("search",e,t).toString();T.orderDesc=e=>new T("orderDesc",e).toString();T.orderAsc=e=>new T("orderAsc",e).toString();T.orderRandom=()=>new T("orderRandom").toString();T.cursorAfter=e=>new T("cursorAfter",void 0,e).toString();T.cursorBefore=e=>new T("cursorBefore",void 0,e).toString();T.limit=e=>new T("limit",void 0,e).toString();T.offset=e=>new T("offset",void 0,e).toString();T.contains=(e,t)=>new T("contains",e,t).toString();T.notContains=(e,t)=>new T("notContains",e,t).toString();T.notSearch=(e,t)=>new T("notSearch",e,t).toString();T.notBetween=(e,t,r)=>new T("notBetween",e,[t,r]).toString();T.notStartsWith=(e,t)=>new T("notStartsWith",e,t).toString();T.notEndsWith=(e,t)=>new T("notEndsWith",e,t).toString();T.createdBefore=e=>new T("createdBefore",void 0,e).toString();T.createdAfter=e=>new T("createdAfter",void 0,e).toString();T.createdBetween=(e,t)=>new T("createdBetween",void 0,[e,t]).toString();T.updatedBefore=e=>new T("updatedBefore",void 0,e).toString();T.updatedAfter=e=>new T("updatedAfter",void 0,e).toString();T.updatedBetween=(e,t)=>new T("updatedBetween",void 0,[e,t]).toString();T.or=e=>new T("or",void 0,e.map(t=>JSON.parse(t))).toString();T.and=e=>new T("and",void 0,e.map(t=>JSON.parse(t))).toString();T.distanceEqual=(e,t,r,n=!0)=>new T("distanceEqual",e,[[t,r,n]]).toString();T.distanceNotEqual=(e,t,r,n=!0)=>new T("distanceNotEqual",e,[[t,r,n]]).toString();T.distanceGreaterThan=(e,t,r,n=!0)=>new T("distanceGreaterThan",e,[[t,r,n]]).toString();T.distanceLessThan=(e,t,r,n=!0)=>new T("distanceLessThan",e,[[t,r,n]]).toString();T.intersects=(e,t)=>new T("intersects",e,[t]).toString();T.notIntersects=(e,t)=>new T("notIntersects",e,[t]).toString();T.crosses=(e,t)=>new T("crosses",e,[t]).toString();T.notCrosses=(e,t)=>new T("notCrosses",e,[t]).toString();T.overlaps=(e,t)=>new T("overlaps",e,[t]).toString();T.notOverlaps=(e,t)=>new T("notOverlaps",e,[t]).toString();T.touches=(e,t)=>new T("touches",e,[t]).toString();T.notTouches=(e,t)=>new T("notTouches",e,[t]).toString();var Xs,Fs;class Ar{static custom(t){return t}static unique(t=7){const r=Yl(Ar,Xs,"m",Fs).call(Ar);let n="";for(let a=0;a<t;a++){const s=Math.floor(Math.random()*16).toString(16);n+=s}return r+n}}Xs=Ar,Fs=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var ja;(function(e){e.Totp="totp"})(ja||(ja={}));var Ba;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Ba||(Ba={}));var La;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(La||(La={}));var za;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(za||(za={}));var Va;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Va||(Va={}));var Ua;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Ua||(Ua={}));var Wa;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Wa||(Wa={}));var Ga;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Ga||(Ga={}));var Qa;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Qa||(Qa={}));class Zl{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class eo{constructor(t){this.generateIdentifier=t,this.kv=new Zl}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class Xl extends eo{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function Fl(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function ec(e,t){const r=Fl(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const s=n[a];if(t(s))return s}}function Tr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function fn(e,t){return e.indexOf(t)!==-1}function Ha(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class tc{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return ec(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const rc=e=>Object.prototype.toString.call(e).slice(8,-1),to=e=>typeof e>"u",nc=e=>e===null,Kr=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Jn=e=>Kr(e)&&Object.keys(e).length===0,Xt=e=>Array.isArray(e),ac=e=>typeof e=="string",sc=e=>typeof e=="number"&&!isNaN(e),oc=e=>typeof e=="boolean",ic=e=>e instanceof RegExp,Jr=e=>e instanceof Map,Yr=e=>e instanceof Set,ro=e=>rc(e)==="Symbol",lc=e=>e instanceof Date&&!isNaN(e.valueOf()),cc=e=>e instanceof Error,Ka=e=>typeof e=="number"&&isNaN(e),uc=e=>oc(e)||nc(e)||to(e)||sc(e)||ac(e)||ro(e),dc=e=>typeof e=="bigint",fc=e=>e===1/0||e===-1/0,vc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),hc=e=>e instanceof URL,no=e=>e.replace(/\./g,"\\."),zn=e=>e.map(String).map(no).join("."),Gr=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let s=e.charAt(a);if(s==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(s==="."){t.push(r),r="";continue}r+=s}const n=r;return t.push(n),t};function At(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ao=[At(to,"undefined",()=>null,()=>{}),At(dc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),At(lc,"Date",e=>e.toISOString(),e=>new Date(e)),At(cc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),At(ic,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),At(Yr,"set",e=>[...e.values()],e=>new Set(e)),At(Jr,"map",e=>[...e.entries()],e=>new Map(e)),At(e=>Ka(e)||fc(e),"number",e=>Ka(e)?"NaN":e>0?"Infinity":"-Infinity",Number),At(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),At(hc,"URL",e=>e.toString(),e=>new URL(e))];function kn(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const so=kn((e,t)=>ro(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),pc=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),oo=kn(vc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=pc[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function io(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const lo=kn(io,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),co=kn((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),mc=[lo,so,co,oo],Ja=(e,t)=>{const r=Ha(mc,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ha(ao,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},uo={};ao.forEach(e=>{uo[e.annotation]=e});const gc=(e,t,r)=>{if(Xt(t))switch(t[0]){case"symbol":return so.untransform(e,t,r);case"class":return lo.untransform(e,t,r);case"custom":return co.untransform(e,t,r);case"typed-array":return oo.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=uo[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},wr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function fo(e){if(fn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(fn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(fn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const _c=(e,t)=>{fo(t);for(let r=0;r<t.length;r++){const n=t[r];if(Yr(e))e=wr(e,+n);else if(Jr(e)){const a=+n,s=+t[++r]==0?"key":"value",i=wr(e,a);switch(s){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Yn=(e,t,r)=>{if(fo(t),t.length===0)return r(e);let n=e;for(let s=0;s<t.length-1;s++){const i=t[s];if(Xt(n)){const l=+i;n=n[l]}else if(Kr(n))n=n[i];else if(Yr(n)){const l=+i;n=wr(n,l)}else if(Jr(n)){if(s===t.length-2)break;const c=+i,f=+t[++s]==0?"key":"value",v=wr(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const a=t[t.length-1];if(Xt(n)?n[+a]=r(n[+a]):Kr(n)&&(n[a]=r(n[a])),Yr(n)){const s=wr(n,+a),i=r(s);s!==i&&(n.delete(s),n.add(i))}if(Jr(n)){const s=+t[t.length-2],i=wr(n,s);switch(+a==0?"key":"value"){case"key":{const c=r(i);n.set(c,n.get(i)),c!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Zn(e,t,r=[]){if(!e)return;if(!Xt(e)){Tr(e,(s,i)=>Zn(s,t,[...r,...Gr(i)]));return}const[n,a]=e;a&&Tr(a,(s,i)=>{Zn(s,t,[...r,...Gr(i)])}),t(n,r)}function bc(e,t,r){return Zn(t,(n,a)=>{e=Yn(e,a,s=>gc(s,n,r))}),e}function yc(e,t){function r(n,a){const s=_c(e,Gr(a));n.map(Gr).forEach(i=>{e=Yn(e,i,()=>s)})}if(Xt(t)){const[n,a]=t;n.forEach(s=>{e=Yn(e,Gr(s),()=>e)}),a&&Tr(a,r)}else Tr(t,r);return e}const wc=(e,t)=>Kr(e)||Xt(e)||Jr(e)||Yr(e)||io(e,t);function Sc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Pc(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[s,...i]=a;s.length===0?n=i.map(zn):r[zn(s)]=i.map(zn)}),n?Jn(r)?[n]:[n,r]:Jn(r)?void 0:r}const vo=(e,t,r,n,a=[],s=[],i=new Map)=>{const l=uc(e);if(!l){Sc(e,a,t);const g=i.get(e);if(g)return n?{transformedValue:null}:g}if(!wc(e,r)){const g=Ja(e,r),_=g?{transformedValue:g.value,annotations:[g.type]}:{transformedValue:e};return l||i.set(e,_),_}if(fn(s,e))return{transformedValue:null};const c=Ja(e,r),f=c?.value??e,v=Xt(f)?[]:{},m={};Tr(f,(g,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const S=vo(g,t,r,n,[...a,_],[...s,e],i);v[_]=S.transformedValue,Xt(S.annotations)?m[_]=S.annotations:Kr(S.annotations)&&Tr(S.annotations,(b,y)=>{m[no(_)+"."+y]=b})});const p=Jn(m)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,m]:m};return l||i.set(e,p),p};function ho(e){return Object.prototype.toString.call(e).slice(8,-1)}function Ya(e){return ho(e)==="Array"}function xc(e){if(ho(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function $c(e,t,r,n,a){const s={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";s==="enumerable"&&(e[t]=r),a&&s==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Xn(e,t={}){if(Ya(e))return e.map(a=>Xn(a,t));if(!xc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,s)=>{if(Ya(t.props)&&!t.props.includes(s))return a;const i=e[s],l=Xn(i,t);return $c(a,s,l,e,t.nonenumerable),a},{})}class je{constructor({dedupe:t=!1}={}){this.classRegistry=new Xl,this.symbolRegistry=new eo(r=>r.description??""),this.customTransformerRegistry=new tc,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=vo(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const s=Pc(r,this.dedupe);return s&&(a.meta={...a.meta,referentialEqualities:s}),a}deserialize(t){const{json:r,meta:n}=t;let a=Xn(r);return n?.values&&(a=bc(a,n.values,this)),n?.referentialEqualities&&(a=yc(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}je.defaultInstance=new je;je.serialize=je.defaultInstance.serialize.bind(je.defaultInstance);je.deserialize=je.defaultInstance.deserialize.bind(je.defaultInstance);je.stringify=je.defaultInstance.stringify.bind(je.defaultInstance);je.parse=je.defaultInstance.parse.bind(je.defaultInstance);je.registerClass=je.defaultInstance.registerClass.bind(je.defaultInstance);je.registerSymbol=je.defaultInstance.registerSymbol.bind(je.defaultInstance);je.registerCustom=je.defaultInstance.registerCustom.bind(je.defaultInstance);je.allowErrorProps=je.defaultInstance.allowErrorProps.bind(je.defaultInstance);function po(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function $t(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Ec(e,t,r=100){try{const{databases:n,config:a}=await $t(),s=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[T.greaterThan("$updatedAt",t),T.equal("mainId",e),T.limit(r),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${s.documents.length} purchases modifiés chargés`),s.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function mo(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:s}=await $t();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,[T.equal("mainId",e),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),T.limit(n)])).documents;const i=await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,[T.greaterThan("$updatedAt",r),T.equal("mainId",e),T.limit(n),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const s=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${s}`)}}async function dr(e,t){try{const{databases:r,config:n}=await $t();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Qt(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=po(n,t),{databases:s,config:i}=await $t(),l=await s.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function go(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await dr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function _o(e,t){return dr(e,{who:t})}async function Fn(e,t){return dr(e,{stockReel:t})}async function bo(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const a={};return t.stockReel!==void 0&&(a.stockReel=t.stockReel),t.who!==void 0&&(a.who=t.who),t.storeInfo!==void 0&&(a.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await dr(e,a)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await Qt(e,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function yo(e){try{const{databases:t,config:r}=await $t(),s=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:s.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Ar.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function wo(e,t){try{const{databases:r,config:n}=await $t(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),s={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,s);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,s),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function So(e){try{const{databases:t,config:r}=await $t();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Po(e){if(!e?.length)return[];try{const{databases:t,config:r}=await $t(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[T.equal("$id",e),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function xo(e,t={}){let r=null;const n=s=>{const{events:i,payload:l}=s;if(!l)return;const c=i.some(g=>g.includes("products.")),f=i.some(g=>g.includes("purchases.")),v=i.some(g=>g.includes(".create")),m=i.some(g=>g.includes(".update")),p=i.some(g=>g.includes(".delete"));if(c){const g=l;v&&t.onProductCreate?t.onProductCreate(g):m&&t.onProductUpdate?t.onProductUpdate(g):p&&t.onProductDelete&&t.onProductDelete(g.$id)}else if(f){const g=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(g):m&&t.onPurchaseUpdate?t.onPurchaseUpdate(g):p&&t.onPurchaseDelete&&t.onPurchaseDelete(g.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:s=>{console.error("[Appwrite Interactions] Erreur realtime:",s),t.onError?.(s)}}))}catch(s){console.error("[Appwrite Interactions] Impossible de configurer realtime:",s),t.onError?.(s)}})(),()=>{r&&(r(),r=null)}}async function $o(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await $t(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Eo(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await $t(),s=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function _a(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const s=JSON.parse(a.responseBody);return s.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${s.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",s.error),s}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function ko(e,t,r,n){return _a({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function Ao(e,t,r,n="replace"){return _a({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function To(e,t,r,n={}){try{const{databases:a,config:s}=await $t(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const v of r){const m={products:[t],mainId:e,quantity:v.q,unit:v.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await a.createDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,Ar.unique(),m);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const s=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${s}`)}}const kc=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:_a,batchUpdateStore:ko,batchUpdateWho:Ao,createMainDocument:Eo,createPurchase:yo,createQuickValidationPurchases:To,deletePurchase:So,enrichedProductToAppwriteProduct:po,loadMainEventData:$o,loadPurchasesListByIds:Po,loadUpdatedPurchases:Ec,subscribeToRealtime:xo,syncProductsWithPurchases:mo,updateProduct:dr,updateProductBatch:bo,updateProductStock:Fn,updateProductStore:go,updateProductWho:_o,updatePurchase:wo,upsertProduct:Qt},Symbol.toStringTag,{value:"Module"}));async function Ac(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Tc(e,t){const r=Ql(e.byDate),n=Wr(un([])),{numeric:a,display:s}=dn(r,n);return{$id:e.productSemanticKey||`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:tr(r),displayTotalPurchases:"-",displayMissingQuantity:s,totalNeededOverrideParsed:null}}function Nc(e,t){return e.map(r=>Tc(r,t))}class Mc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";METADATA_KEY="cache-metadata";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=a=>{const s=a.target.result;s.objectStoreNames.contains(this.PRODUCTS_STORE)||(s.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),s.objectStoreNames.contains(this.METADATA_STORE)||(s.createObjectStore(this.METADATA_STORE),console.log("[IDBCache] Object store 'metadata' créé"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const s=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();s.onsuccess=()=>{const i=new Map;s.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},s.onerror=()=>r(s.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const s=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).get(this.METADATA_KEY);s.onsuccess=()=>{const i=s.result||{lastSync:null,allDates:[]};console.log(`[IDBCache] Metadata chargée: lastSync=${i.lastSync}, dates=${i.allDates?.length||0}`),t(i)},s.onerror=()=>r(s.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),s=a.objectStore(this.PRODUCTS_STORE);s.clear(),t.forEach(i=>{s.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put(t,this.METADATA_KEY);i.onsuccess=()=>{console.log("[IDBCache] Metadata sauvegardée"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Cc(e){const t=new Mc(e);return await t.open(),t}const Za=1e3;class Ic{#e=new Nl;#r=K(null);#c=K(!1);#u=K(!1);#l=K(null);#o=K(!1);#i=K(!1);#a=K(null);#s=K(Me([]));#d=K(Me({start:null,end:null}));get dateRange(){return o(this.#d)}set dateRange(t){E(this.#d,t,!0)}#v=Y(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDate(){return o(this.#v)}set hasSingleDate(t){E(this.#v,t)}#n=null;#f=null;#h=K(!1);#t=K(Me({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return o(this.#t)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get currentMainId(){return o(this.#r)}get isInitialized(){return o(this.#c)}get loading(){return o(this.#u)}get error(){return o(this.#l)}get lastSync(){return o(this.#a)}get syncing(){return o(this.#o)}get availableDates(){return o(this.#s)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,a=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:a}}isFullRange(){return this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate}initializeDateRange(){if((!this.dateRange.start||!this.dateRange.end)&&o(this.#s).length>0){const t=[...o(this.#s)].sort();this.dateRange={start:t[0],end:t[t.length-1]}}console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}get firstAvailableDate(){return o(this.#s).length===0?null:[...o(this.#s)].sort()[0]}get lastAvailableDate(){return o(this.#s).length===0?null:[...o(this.#s)].sort().pop()}get realtimeConnected(){return o(this.#i)}get hugoContentChanged(){return o(this.#h)}#_=Y(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return o(this.#_)}set enrichedProducts(t){E(this.#_,t)}#w=Y(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const t=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[a,s]of this.#e){if(!s.byDate||!this.#z(s))continue;Object.keys(s.byDate).some(c=>{const f=new Date(c);return f>=t&&f<=r})&&n.set(a,s)}return n});get filteredProductsMap(){return o(this.#w)}set filteredProductsMap(t){E(this.#w,t)}#x(){console.log("[Store] ⚡ Single date mode - optimized calculation");const t=new Map,r=this.dateRange.start;for(const[n,a]of this.#e){if(!a.byDate?.[r])continue;const s=a.byDate[r],i=[r],l=new Map;s.recipes&&s.recipes.length>0&&l.set(r,s.recipes);const c=Bn(a,r),f=c.filter(m=>m.q>0),v=c.filter(m=>m.q<0).map(m=>({q:Math.abs(m.q),u:m.u}));t.set(n,{quantities:s.totalConsolidated||[],formattedQuantities:tr(s.totalConsolidated||[]),nbRecipes:s.recipes?.length||0,totalAssiettes:s.totalAssiettes||0,stockResult:c,availableQuantities:f,missingQuantities:v,formattedAvailableQuantities:Ln(c),hasAvailable:f.length>0,hasMissing:v.length>0,concernedDates:i,recipesByDate:l})}return t}#p=Y(()=>{if(console.log("[Store] Calcul unifié des stats par produit (1 itération)"),this.hasSingleDate)return this.#x();const t=new Map;if(this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using precomputed data");for(const[n,a]of this.#e){const s=Bn(a,this.dateRange.end),i=s.filter(m=>m.q>0),l=s.filter(m=>m.q<0).map(m=>({q:Math.abs(m.q),u:m.u})),c=a.byDate?Object.keys(a.byDate).sort():[],f=new Map;let v=0;if(a.byDate)for(const[m,p]of Object.entries(a.byDate))p.recipes&&p.recipes.length>0&&(f.set(m,p.recipes),v+=p.recipes.length);t.set(n,{quantities:a.totalNeededArray,formattedQuantities:tr(a.totalNeededArray),nbRecipes:a.nbRecipes||0,totalAssiettes:a.totalAssiettes||0,stockResult:s,availableQuantities:i,missingQuantities:l,formattedAvailableQuantities:Ln(s),hasAvailable:i.length>0,hasMissing:l.length>0,concernedDates:c,recipesByDate:f})}return t}for(const[n,a]of this.filteredProductsMap){if(!a.byDate)continue;const s=Wl(a.byDate),i=zl(s,this.dateRange.start,this.dateRange.end),l=i.length>0?tr(i):"",c=Vl(a.byDate,this.dateRange.start,this.dateRange.end),f=Object.keys(a.byDate).filter(S=>{const b=new Date(S),y=new Date(this.dateRange.start),$=new Date(this.dateRange.end);return b>=y&&b<=$}).sort(),v=new Map;let m=0;f.forEach(S=>{const b=a.byDate[S]?.recipes||[];b.length>0&&(v.set(S,b),m+=b.length)});const p=Bn(a,this.dateRange.end),g=p.filter(S=>S.q>0),_=p.filter(S=>S.q<0).map(S=>({q:Math.abs(S.q),u:S.u}));t.set(n,{quantities:i,formattedQuantities:l,nbRecipes:m,totalAssiettes:c,stockResult:p,availableQuantities:g,missingQuantities:_,formattedAvailableQuantities:Ln(p),hasAvailable:g.length>0,hasMissing:_.length>0,concernedDates:f,recipesByDate:v})}return t});get productsStatsByDateRange(){return o(this.#p)}set productsStatsByDateRange(t){E(this.#p,t)}#m=Y(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return o(this.#m)}set stats(t){E(this.#m,t)}#g=Y(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return o(this.#g)}set uniqueStores(t){E(this.#g,t)}#$=Y(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return o(this.#$)}set uniqueWho(t){E(this.#$,t)}#E=Y(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return o(this.#E)}set uniqueProductTypes(t){E(this.#E,t)}#k=Y(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((i,l)=>i.$id.localeCompare(l.$id));if(o(this.#t).groupBy==="none")return{"":r};const n=Object.groupBy(r,i=>o(this.#t).groupBy==="store"?i.storeInfo?.storeName||"Non défini":i.productType||"Non défini"),a=Object.keys(n).sort((i,l)=>i===""?1:l===""?-1:i.localeCompare(l)),s={};return a.forEach(i=>{s[i]=n[i]}),s});get groupedFilteredProducts(){return o(this.#k)}set groupedFilteredProducts(t){E(this.#k,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(o(this.#c)&&o(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),E(this.#r,t,!0);try{this.#n=await Cc(t)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}E(this.#l,null);try{if(await this.#M(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await Ac(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Nc(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),E(this.#s,[...n.allDates],!0),await $o(t)||await Eo(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#A()}this.initializeDateRange(),await this.#C(),E(this.#c,!0);const r=this.#L();this.#f=xo(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw E(this.#l,n,!0),console.error("[ProductsStore]",n,r),r}}async#M(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();E(this.#a,r.lastSync,!0),E(this.#s,[...r.allDates],!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#C(){if(o(this.#r)){E(this.#o,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${o(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${o(this.#a)}`);const t=await mo(o(this.#r),{lastSync:o(this.#a),limit:Za});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#T(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),o(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${o(this.#a)}`);const{loadUpdatedPurchases:r}=await Tl(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>kc);return{loadUpdatedPurchases:a}},void 0),n=await r(o(this.#r),o(this.#a),Za);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const s=a.products.map(i=>typeof i=="string"?i:i.$id);this.#P(s,a)}})}this.#I(),await this.#A(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{E(this.#o,!1)}}}async#A(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:o(this.#a),allDates:[...o(this.#s)]}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#S(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#I(){E(this.#a,new Date().toISOString(),!0)}#T(t,r){return r?this.#b(t,r):this.#D(t)}#D(t){const r=Wr(un(t.purchases??[])),n=[],{numeric:a,display:s}=dn(n,r),i=Lr(t.stockReel)??null,l=tr(r),c=t.store?Lr(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:s,totalNeededOverrideParsed:qa(t.totalNeededOverride)}}#b(t,r){const n=t.purchases??r.purchases,a=Wr(un(n??[])),s=tr(a),{numeric:i,display:l}=dn(r.totalNeededArray,a),c=t.stockReel??r.stockReel,f=c?Lr(c):r.stockParsed,v=t.store??r.store,m=v?Lr(v):r.storeInfo,p=f?`${f.quantity} ${f.unit}`:s;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:v,stockReel:c,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:m,stockParsed:f,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:s,displayMissingQuantity:l,totalNeededOverrideParsed:qa(t.totalNeededOverride??r.totalNeededOverride)}}#V(t){t.totalPurchasesArray=Wr(un(t.purchases??[]));const{numeric:r,display:n}=dn(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=tr(t.totalPurchasesArray)}#U(t){t.length&&(t.forEach(r=>this.#y(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#y(t){const r=this.#e.get(t.$id),n=this.#T(t,r);this.#e.set(t.$id,n)}#R(t){this.#e.delete(t)}async#O(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#B(r,t),r}async#q(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Po([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#P(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#j(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t));return r.forEach(n=>{this.#y(n)}),r.map(n=>n.$id)}#N(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#B(t,r){const n=this.#N(r),a=[];t.forEach(s=>{const i=this.#e.get(s);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#b({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(s=>{this.#e.set(s.$id,s)})}#P(t,r){const n=this.#N(r),a=[];t.forEach(s=>{const i=this.#e.get(s);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#b({...i,purchases:f,status:"active"},i);a.push(v)}else{const f=this.#b({...i,purchases:[...l,r],status:"active"},i);a.push(f)}}}),a.forEach(s=>{this.#e.set(s.$id,s)})}#L(){return{onProductCreate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#R(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#O(t);await this.#S(r)},onPurchaseUpdate:async t=>{const r=await this.#q(t);await this.#S(r)},onPurchaseDelete:async t=>{const r=await this.#j(t);await this.#S(r)},onConnect:()=>{E(this.#i,!0)},onDisconnect:()=>{E(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#z(t){if(o(this.#t).searchQuery.trim()){const r=o(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(o(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!o(this.#t).selectedStores.includes(t.storeInfo.storeName))||o(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>o(this.#t).selectedWho.includes(r)))||o(this.#t).selectedProductTypes.length>0&&(!t.productType||!o(this.#t).selectedProductTypes.includes(t.productType))||o(this.#t).selectedTemperatures.length>0&&!(o(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||o(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Ll(t=>{o(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=o(this.#t).selectedProductTypes.indexOf(t);r>-1?o(this.#t).selectedProductTypes.splice(r,1):o(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=o(this.#t).selectedTemperatures.indexOf(t);r>-1?o(this.#t).selectedTemperatures.splice(r,1):o(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){o(this.#t).selectedProductTypes=[],o(this.#t).selectedTemperatures=[]}setGroupBy(t){o(this.#t).groupBy=t}toggleStore(t){const r=o(this.#t).selectedStores.indexOf(t);r>-1?o(this.#t).selectedStores.splice(r,1):o(this.#t).selectedStores.push(t)}toggleWho(t){const r=o(this.#t).selectedWho.indexOf(t);r>-1?o(this.#t).selectedWho.splice(r,1):o(this.#t).selectedWho.push(t)}clearStoreFilters(){o(this.#t).selectedStores=[]}clearWhoFilters(){o(this.#t).selectedWho=[]}handleSort(t){o(this.#t).sortColumn===t?o(this.#t).sortDirection=o(this.#t).sortDirection==="asc"?"desc":"asc":(o(this.#t).sortColumn=t,o(this.#t).sortDirection="asc")}clearFilters(){E(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return o(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[o(this.#t).sortColumn],s=n[o(this.#t).sortColumn];return o(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,s=parseFloat(s)||0):o(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,s=n.purchases?.length||0),a<s?o(this.#t).sortDirection==="asc"?-1:1:a>s?o(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Ul(r.byDate):!1}get enrichedProductsCount(){return this.#e.size}async forceReload(t){await this.clearCache(),await this.initialize(t)}async clearCache(){this.#e.clear(),E(this.#s,[],!0),E(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const s=this.#e.get(a);if(s){const i={...s,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#f?.(),this.#f=null,this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const J=new Ic;function Dc(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Rc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Oc=al("<svg><!><!></svg>");function le(e,t){U(t,!0);const r=Ne(t,"color",3,"currentColor"),n=Ne(t,"size",3,24),a=Ne(t,"strokeWidth",3,2),s=Ne(t,"absoluteStrokeWidth",3,!1),i=Ne(t,"iconNode",19,()=>[]),l=oe(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=Oc();Da(c,m=>({...Rc,...l,width:n(),height:n(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>s()?Number(a())*24/Number(n()):a()]);var f=u(c);it(f,17,i,Kn,(m,p)=>{var g=Y(()=>is(o(p),2));let _=()=>o(g)[0],S=()=>o(g)[1];var b=L(),y=I(b);dl(y,_,!0,($,w)=>{Da($,()=>({...S()}))}),h(m,b)});var v=d(f);re(v,()=>t.children??F),h(e,c),W()}function ea(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];le(e,ie({name:"archive"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function qc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];le(e,ie({name:"bean"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function jc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];le(e,ie({name:"beef"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Bc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];le(e,ie({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Lc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];le(e,ie({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Zr(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];le(e,ie({name:"check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function zc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];le(e,ie({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Vc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];le(e,ie({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Uc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];le(e,ie({name:"circle-arrow-down"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Wc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];le(e,ie({name:"circle-arrow-right"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Xa(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];le(e,ie({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Gc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];le(e,ie({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Qc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];le(e,ie({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Hc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];le(e,ie({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Kc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];le(e,ie({name:"clock"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Jc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];le(e,ie({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function ba(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];le(e,ie({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Yc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];le(e,ie({name:"egg"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Zc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];le(e,ie({name:"euro"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function on(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];le(e,ie({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function No(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];le(e,ie({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Xc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];le(e,ie({name:"info"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Fc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];le(e,ie({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function eu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];le(e,ie({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function tu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];le(e,ie({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function ru(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];le(e,ie({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function nu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];le(e,ie({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function au(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];le(e,ie({name:"message-circle-more"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function su(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];le(e,ie({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function ya(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];le(e,ie({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function ou(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];le(e,ie({name:"moon"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function iu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];le(e,ie({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function tn(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];le(e,ie({name:"package"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function lu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];le(e,ie({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function cu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];le(e,ie({name:"plus"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function uu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];le(e,ie({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function du(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];le(e,ie({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function fu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];le(e,ie({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function vu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];le(e,ie({name:"save"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function hu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];le(e,ie({name:"search"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Mo(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];le(e,ie({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Yt(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];le(e,ie({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Co(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];le(e,ie({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function ta(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];le(e,ie({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Ft(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];le(e,ie({name:"store"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function pu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];le(e,ie({name:"sun"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function mu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];le(e,ie({name:"thermometer"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function An(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];le(e,ie({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Io(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];le(e,ie({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function rn(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];le(e,ie({name:"user"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function ra(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];le(e,ie({name:"users"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function gu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];le(e,ie({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}function Bt(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];le(e,ie({name:"x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=I(i);re(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),W()}class _u{isMobileQuery=new Dl("max-width: 767px");get isMobile(){return this.isMobileQuery.current}userName(){return localStorage.getItem("appwrite-user-name")||""}}const Xr=new _u;function bu(e,t){const r=e.reduce((a,s)=>{const i=s.isSynced?0:1,l=s.missingQuantities.length;return a+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function yu(e,t){const r=e.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const a=t.purchaseStatus||"delivered";let s=t.purchaseDeliveryDate||null;a==="delivered"&&!s&&(s=new Date().toISOString());const i=e.flatMap(c=>c.missingQuantities.map(f=>({productId:c.productId,quantity:f.q,unit:f.u,status:a,notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:s,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:t}}async function wu(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=bu(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,s=[];if(n<=a)s.push(t);else{let p=[],g=0;for(const _ of t){const S=(_.isSynced?0:1)+_.missingQuantities.length;g+S>a?(p.length>0&&s.push(p),p=[_],g=S):(p.push(_),g+=S)}p.length>0&&s.push(p)}console.log(`[Appwrite Interactions] Découpage en ${s.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<s.length;p++){const g=s[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${s.length} (${g.length} produits)`);try{const _=await yu(g,r),S=await Su(_);if(i.push(S),S.success)l+=S.productsCreated,c+=S.purchasesCreated,f+=S.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${S.error}`);break}}catch(_){const S=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,_),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:S,timestamp:new Date().toISOString()});break}}const v=i.every(p=>p.success),m=i.some(p=>!p.success);return{success:v,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:m?"Un ou plusieurs lots ont échoué":void 0}}async function Su(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const s=JSON.parse(a.responseBody);return s.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${s.productsCreated} produits créés, ${s.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",s.error),s}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var Pu=(e,t,r)=>t(o(r).id),xu=x('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),$u=x('<span class="flex items-center gap-1"><!> </span>'),Eu=x('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),ku=x('<div class="flex flex-wrap gap-2"></div> <!>',1);function Fr(e,t){U(t,!0);let r=Ne(t,"badgeSize",3,"badge-lg"),n=Ne(t,"color",3,"primary"),a=Ne(t,"badgeStyle",3,""),s=Ne(t,"onToggleItem",3,()=>{}),i=Ne(t,"showStats",3,!1),l=Ne(t,"showIcon",3,!0),c=K(Me({}));mr(()=>{const b={};t.items.forEach(y=>{b[y.id]=y.selected??!0}),E(c,b,!0)});function f(b){o(c)[b]=!o(c)[b],s()(b)}const v=Y(()=>Object.values(o(c)).filter(Boolean).length),m=Y(()=>Object.values(o(c)).filter(b=>!b).length);var p=ku(),g=I(p);it(g,21,()=>t.items,b=>b.id,(b,y)=>{const $=Y(()=>o(c)[o(y).id]);var w=xu();w.__click=[Pu,f,y];var P=u(w);{var k=B=>{var Q=L(),ee=I(Q);lr(ee,()=>o(y).icon,(he,O)=>{O(he,{class:"h-3 w-3",get title(){return o(y).title}})}),h(B,Q)};N(P,B=>{o(y).icon&&B(k)})}var A=d(P,2),M=u(A),D=d(A,2);{var X=B=>{var Q=L(),ee=I(Q);{var he=R=>{Zr(R,{size:16})},O=R=>{cu(R,{size:16})};N(ee,R=>{o($)?R(he):R(O,!1)})}h(B,Q)};N(D,B=>{l()&&B(X)})}G(()=>{Ae(w,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${o($)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),jt(w,"title",o($)?"Retirer de la liste":"Réajouter à la liste"),V(M,o(y).label)}),h(b,w)});var _=d(g,2);{var S=b=>{var y=Eu(),$=u(y),w=u($),P=u(w);Zr(P,{class:"text-success h-3 w-3"});var k=d(P),A=d(w,2);{var M=B=>{var Q=$u(),ee=u(Q);Bt(ee,{class:"text-error h-3 w-3"});var he=d(ee);G(()=>V(he,` ${o(m)??""} retirés`)),h(B,Q)};N(A,B=>{o(m)>0&&B(M)})}var D=d($,2),X=u(D);G(()=>{V(k,` ${o(v)??""} actifs`),V(X,`Total: ${t.items.length??""} items`)}),h(b,y)};N(_,b=>{i()&&b(S)})}h(e,p),W()}Ze(["click"]);function Au(e,t){E(t,!o(t))}var Tu=x('<span class="text-base-content font-semibold"> </span>'),Nu=x('<div class="text-base-content/80 flex-1"> </div>'),Mu=x('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Cu=x('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Iu=x('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Do(e,t){let r=Ne(t,"icon",3,Xc),n=Ne(t,"class",3,""),a=Ne(t,"initiallyOpen",3,!1),s=r(),i=K(Me(a())),l=Me(t.children);var c=Iu(),f=u(c);f.__click=[Au,i];var v=u(f),m=u(v);s(m,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(m,2);{var g=P=>{var k=Tu(),A=u(k);G(()=>V(A,t.title)),h(P,k)};N(p,P=>{t.title&&P(g)})}var _=d(v,2);{var S=P=>{var k=Nu(),A=u(k);G(()=>V(A,t.contentVisible)),h(P,k)};N(_,P=>{t.contentVisible&&P(S)})}var b=d(_,2);{var y=P=>{var k=Mu(),A=u(k),M=u(A);{var D=Q=>{var ee=yt("en savoir plus");h(Q,ee)},X=Q=>{var ee=yt("masquer");h(Q,ee)};N(M,Q=>{o(i)?Q(X,!1):Q(D)})}var B=d(A,2);{let Q=Y(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${o(i)?"rotate-180":""}`);Vc(B,{get class(){return o(Q)}})}h(P,k)};N(b,P=>{l&&P(y)})}var $=d(f,2);{var w=P=>{var k=Cu(),A=u(k),M=u(A);re(M,()=>t.children??F),G(()=>Ae(k,1,`overflow-hidden transition-all duration-200 ${o(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h(P,k)};N($,P=>{l&&P(w)})}G(()=>{Ae(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Qs(c,t.style),Ae(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),jt(f,"aria-expanded",o(i))}),h(e,c)}Ze(["click"]);async function Du(e,t,r,n,a,s,i,l){if(!(!o(t)||o(r))){E(r,!0),E(n,null),E(a,null);try{const c=`FACTURE_${Date.now()}`,f=o(s).map(g=>g.$id);J.setSyncStatus(f,!0);const v=[];for(const g of o(s))v.push({productId:g.$id,isSynced:g.isSynced,productData:g,missingQuantities:g.missingQuantityArray||[]});const m={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${o(s).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const p=await wu(J.currentMainId,v,m);if(p.success)E(a,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";E(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),J.clearSyncStatus()}finally{E(r,!1)}}}function Fa(e,t,r){o(t)||r.onClose()}var Ru=x('<div class="alert alert-error"><!> <span> </span></div>'),Ou=x('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),qu=x(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),ju=x("<option> </option>"),Bu=x("<option> </option>"),Lu=x('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),zu=x('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Vu=x("<!> ",1),Uu=x(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function Wu(e,t){U(t,!0);let r=K(!1),n=K(null),a=K(null),s=Me({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=K(Me(new Set));mr(()=>{E(i,new Set(t.products.map(ce=>ce.$id)),!0)});const l=Y(()=>t.products.filter(ce=>o(i).has(ce.$id))),c=Y(()=>o(l).length!==0),f=Y(()=>`Achat groupé (${o(l).length} produits sélectionnés)`);function v(ce){const xe=new Set(o(i));xe.has(ce)?xe.delete(ce):xe.add(ce),E(i,xe,!0)}const m=Y(()=>t.products.map(ce=>({id:ce.$id,label:ce.productName,title:ce.productName})));var p=Uu(),g=u(p),_=u(g),S=u(_),b=u(S);Yt(b,{class:"h-5 w-5"});var y=d(b),$=d(S,2);$.__click=[Fa,r,t];var w=u($);Bt(w,{class:"h-4 w-4"});var P=d(_,2),k=u(P);{var A=ce=>{var xe=Ru(),Pe=u(xe);An(Pe,{class:"h-4 w-4"});var ze=d(Pe,2),Ge=u(ze);G(()=>V(Ge,o(n))),h(ce,xe)};N(k,ce=>{o(n)&&ce(A)})}var M=d(k,2);{var D=ce=>{var xe=Ou(),Pe=u(xe);Zr(Pe,{class:"h-4 w-4"});var ze=d(Pe,2),Ge=u(ze),pt=d(Ge);{var Et=Xe=>{var st=yt("+ 1 dépense globale");h(Xe,st)};N(pt,Xe=>{o(a).expense&&Xe(Et)})}var et=d(pt,2);{var ft=Xe=>{var st=yt();G(()=>V(st,`(traité en ${o(a).batches??""} lots)`)),h(Xe,st)};N(et,Xe=>{o(a).batches&&o(a).batches>1&&Xe(ft)})}G(()=>V(Ge,`Achat groupé créé avec succès ! ${o(a).purchases??""} produit(s) validés `)),h(ce,xe)};N(M,ce=>{o(a)&&ce(D)})}var X=d(M,2),B=u(X);Do(B,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(ce,xe)=>{var Pe=qu();h(ce,Pe)},$$slots:{default:!0}});var Q=d(X,2),ee=d(u(Q),2),he=u(ee),O=u(he),R=u(O);Ft(R,{class:"h-4 w-4 opacity-50"});var H=d(R,2),ne=d(O,2);it(ne,21,()=>J.uniqueStores,Kn,(ce,xe)=>{var Pe=ju(),ze=u(Pe),Ge={};G(()=>{V(ze,o(xe)),Ge!==(Ge=o(xe))&&(Pe.value=(Pe.__value=o(xe))??"")}),h(ce,Pe)});var C=d(he,2),z=u(C),pe=u(z);rn(pe,{class:"h-4 w-4 opacity-50"});var be=d(pe,2),ge=d(z,2);it(ge,21,()=>J.uniqueWho,Kn,(ce,xe)=>{var Pe=Bu(),ze=u(Pe),Ge={};G(()=>{V(ze,o(xe)),Ge!==(Ge=o(xe))&&(Pe.value=(Pe.__value=o(xe))??"")}),h(ce,Pe)});var de=d(C,2),me=u(de),j=u(me);Zc(j,{class:"h-4 w-4 opacity-50"});var _e=d(j,2),q=d(ee,2),ue=u(q),ye=u(ue),ke=u(ye);ke.value=ke.__value="delivered";var Le=d(ke);Le.value=Le.__value="ordered";var Ce=d(ye,2),We=d(ue,2);{var fe=ce=>{var xe=Lu(),Pe=u(xe),ze=d(u(Pe),2);G(()=>ze.disabled=o(r)),Ie(ze,()=>s.deliveryDate,Ge=>s.deliveryDate=Ge),h(ce,xe)};N(We,ce=>{s.status==="ordered"&&ce(fe)})}var we=d(q,2),at=u(we),ae=u(at);ya(ae,{class:"h-4 w-4 opacity-50"});var Ue=d(ae,2),te=d(Q,2),Se=d(u(te),2);Fr(Se,{get items(){return o(m)},onToggleItem:v,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Je=d(te,2),ve=u(Je);ve.__click=[Fa,r,t];var ct=d(ve,2);ct.__click=[Du,c,r,n,a,l,s,t];var De=u(ct);{var Fe=ce=>{var xe=zu();h(ce,xe)},It=ce=>{var xe=Vu(),Pe=I(xe);Yt(Pe,{class:"h-4 w-4"});var ze=d(Pe);G(()=>V(ze,` Valider ${o(l).length??""} produit(s)`)),h(ce,xe)};N(De,ce=>{o(r)?ce(Fe):ce(It,!1)})}G(()=>{V(y,` ${o(f)??""}`),$.disabled=o(r),H.disabled=o(r),be.disabled=o(r),_e.disabled=o(r),ye.disabled=o(r),Ae(Ce,1,`label text-sm ${s.status==="delivered"?"":"hidden"}`),Ue.disabled=o(r),ve.disabled=o(r),ct.disabled=o(r)||!o(c)}),Ie(H,()=>s.store,ce=>s.store=ce),Ie(be,()=>s.who,ce=>s.who=ce),Ie(_e,()=>s.expense,ce=>s.expense=ce),ar(ye,()=>s.status,ce=>s.status=ce),Ie(Ue,()=>s.notes,ce=>s.notes=ce),h(e,p),W()}Ze(["click"]);function na(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:qc};case"animaux":return{displayName:"Viandes et Poissons",icon:jc};case"legumes":return{displayName:"Fruits et Légumes",icon:Lc};case"sucres":return{displayName:"Sucrées",icon:Bc};case"lof":return{displayName:"L.O.F",icon:Yc};case"autres":return{displayName:"Autres",icon:zc};case"epices":return{displayName:"Assaisonnements",icon:eu};case"frais":return{displayName:"Produits Frais",icon:fu};default:return{displayName:e,icon:tn}}}function es(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Tn(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Nn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Gu(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function aa(e){switch(e){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function ts(e){return e?Nn(e):"-"}function Qu(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",s=n.unit||"unit",i=`${a}_${s}`;if(!r[i]){const l=aa(a);r[i]={status:a,unit:s,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Hu(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function Hu(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function Ku(e){let t=K(!1),r=K(null);const n=Y(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),J.getEnrichedProductById(e))),a=Y(()=>o(n)?.who??[]),s=Y(()=>o(n)?.stockParsed??null),i=Y(()=>o(n)?.purchases??[]),l=Y(()=>o(n)?.byDate?Gl(o(n).byDate):[]),c=Me({purchase:{quantity:null,unit:"",store:"",who:Xr.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=K(!1),v=K(null);mr(()=>{!o(n)||o(f)||(c.purchase.quantity=o(n).missingQuantityArray[0]?.q??null,c.purchase.unit=o(n).totalNeededArray[0]?.u??"",c.purchase.store=o(n).storeInfo?.storeName??"",c.purchase.who=Xr.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=o(n).totalNeededArray[0]?.u??"",c.store.name=o(n).storeInfo?.storeName??"",c.store.comment=o(n).storeInfo?.storeComment??null,c.who=o(n)?.who?[...o(n).who]:[],E(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),E(f,!0))});const m=Y(()=>o(v)?{store:JSON.stringify(c.store)!==JSON.stringify(o(v).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(o(v).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?o(s)?c.stock.quantity.toString()!==o(s).quantity||c.stock.unit!==o(s).unit||(c.stock.notes||"")!==(o(s).notes||""):!0:!1}const g=Y(()=>!!(o(v)&&(o(m).store||o(m).stock||o(m).who)));let _=K(null);const S=Y(()=>o(_)?o(i).find(O=>O.$id===o(_))??null:null);async function b(O,R){E(t,!0),E(r,null);try{const H=await O();return R&&y("success",R),H}catch(H){const ne=H instanceof Error?H.message:"Une erreur est survenue";return E(r,ne,!0),y("error",ne),console.error("[ProductModalState]",H),null}finally{E(t,!1)}}function y(O,R){const H=new CustomEvent("toast",{detail:{type:O,message:R}});window.dispatchEvent(H)}async function $(){o(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!J.currentMainId)throw new Error("mainId non disponible");const{quantity:O,unit:R}=es(c.purchase.quantity,c.purchase.unit);o(n).isSynced||(console.log(`[ProductModalState] Produit ${o(n).$id} local, création pour purchase...`),await Qt(o(n).$id,{},C=>J.getEnrichedProductById(C)));const H=c.purchase.status||"delivered";let ne=c.purchase.deliveryDate||null;H==="delivered"&&!ne&&(ne=new Date().toISOString()),await yo({products:[o(n).$id],mainId:J.currentMainId,unit:R,quantity:O,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:H,orderDate:c.purchase.orderDate||null,deliveryDate:ne}),c.purchase={quantity:o(n).missingQuantityArray[0]?.q??null,unit:o(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function w(O){E(_,O.$id,!0)}function P(){E(_,null)}async function k(O){O.$id&&await b(async()=>{const{quantity:R,unit:H}=es(O.quantity,O.unit),ne=O.status||null;let C=O.deliveryDate||null;ne==="delivered"&&!C&&(C=new Date().toISOString()),await wo(O.$id,{unit:H,quantity:R,store:O.store||null,who:O.who||null,notes:O.notes||"",price:O.price||null,status:ne,orderDate:O.orderDate||null,deliveryDate:C}),E(_,null)},"Achat modifié avec succès")}async function A(O){const R=o(i).find(H=>H.$id===O);R&&confirm(`Supprimer cet achat (${R.quantity} ${R.unit}) ?`)&&await b(async()=>{await So(O)},"Achat supprimé avec succès")}async function M(){o(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const O={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, update stock normal...`),await Fn(o(n).$id,JSON.stringify(O))):(console.log(`[ProductModalState] Produit ${o(n).$id} local, création stock avec upsert...`),await Qt(o(n).$id,{stockReel:JSON.stringify(O)},R=>J.getEnrichedProductById(R))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function D(){o(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, suppression stock normal...`),await Fn(o(n).$id,null)):(console.log(`[ProductModalState] Produit ${o(n).$id} local, suppression stock avec upsert...`),await Qt(o(n).$id,{stockReel:null},O=>J.getEnrichedProductById(O)))},"Stock supprimé")}async function X(O){o(n)&&await b(async()=>{o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, setWho normal...`),await _o(o(n).$id,O)):(console.log(`[ProductModalState] Produit ${o(n).$id} local, création who avec upsert...`),await Qt(o(n).$id,{who:O},R=>J.getEnrichedProductById(R)))},"Volontaires mis à jour")}async function B(O){o(n)&&await b(async()=>{o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, update store normal...`),await go(o(n).$id,O)):(console.log(`[ProductModalState] Produit ${o(n).$id} local, création store avec upsert...`),await Qt(o(n).$id,{store:JSON.stringify(O)},R=>J.getEnrichedProductById(R)))},"Magasin mis à jour")}async function Q(O){o(n)&&await b(async()=>{await dr(o(n).$id,{totalNeededOverride:JSON.stringify(O)})},"Override appliqué")}async function ee(){o(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await dr(o(n).$id,{totalNeededOverride:null})},"Override supprimé")}async function he(){!o(n)||!o(g)||await b(async()=>{const O={};if(o(m).stock&&c.stock.quantity&&c.stock.unit){const R={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};O.stockReel=JSON.stringify(R)}if(o(m).who&&(O.who=c.who),o(m).store){const R={storeName:c.store.name||"",storeComment:c.store.comment||void 0};O.storeInfo=R}Object.keys(O).length>0&&(await bo(o(n).$id,O,R=>J.getEnrichedProductById(R)),E(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return o(t)},get error(){return o(r)},get product(){return o(n)},get recipes(){return o(l)},get whoList(){return o(a)},get stockParsed(){return o(s)},get purchasesList(){return o(i)},get editingPurchaseId(){return o(_)},get editingPurchaseData(){return o(S)},forms:c,addPurchase:$,startEditPurchase:w,cancelEditPurchase:P,updateEditedPurchase:k,removePurchase:A,setStock:M,removeStock:D,setWho:X,updateStore:B,setOverride:Q,removeOverride:ee,saveAllChanges:he,get hasChanges(){return o(m)},get hasAnyChanges(){return o(g)},formatQuantity:Tn,formatDate:Nn,formatDisplayQuantity:Gu}}function Ju(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Yu(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Zu(e,t){t().cancelEditPurchase()}var Xu=x('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Fu=x('<span class="loading loading-spinner loading-sm"></span>'),ed=x('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),td=x('<span class="loading loading-spinner loading-sm"></span>'),rd=x('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Livré</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),nd=(e,t,r)=>t(o(r)),ad=(e,t,r)=>t(o(r).$id),sd=x('<span class="loading loading-spinner loading-sm"></span>'),od=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),id=x('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),ld=x(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function cd(e,t){U(t,!0);let r=Ne(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(ae){return ae.quantity!==null&&ae.quantity!==0&&ae.unit?.trim()!==""}function s(ae){r().removePurchase(ae)}function i(ae){r().startEditPurchase(ae)}var l=ld(),c=u(l),f=u(c);Yt(f,{class:"h-5 w-5"});var v=d(c,2),m=u(v),p=d(u(m),2),g=u(p),_=u(g);tn(_,{class:"h-4 w-4 opacity-50"});var S=d(_,2),b=d(g,2),y=u(b);y.value=y.__value="";var $=d(y);$.value=$.__value="kg";var w=d($);w.value=w.__value="gr.";var P=d(w);P.value=P.__value="l.";var k=d(P);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var M=d(A);M.value=M.__value="bottes";var D=d(b,2),X=u(D);Ft(X,{class:"h-4 w-4 opacity-50"});var B=d(X,2),Q=d(D,2),ee=u(Q);rn(ee,{class:"h-4 w-4 opacity-50"});var he=d(ee,2),O=d(Q,2),R=d(u(O),2),H=d(p,2),ne=u(H),C=u(ne);ya(C,{class:"h-4 w-4 opacity-50"});var z=d(C,2),pe=d(H,2),be=u(pe),ge=u(be),de=u(ge),me=u(de);me.value=me.__value="delivered";var j=d(me);j.value=j.__value="ordered";var _e=d(ge,2),q=d(be,2);{var ue=ae=>{var Ue=Xu(),te=d(u(Ue),2);Ie(te,()=>r().forms.purchase.deliveryDate,Se=>r().forms.purchase.deliveryDate=Se),h(ae,Ue)};N(q,ae=>{r().forms.purchase.status==="ordered"&&ae(ue)})}var ye=d(pe,2),ke=u(ye);ke.__click=[Ju,n,r];var Le=u(ke);{var Ce=ae=>{var Ue=Fu();h(ae,Ue)},We=ae=>{var Ue=yt("Ajouter l'achat");h(ae,Ue)};N(Le,ae=>{r().loading?ae(Ce):ae(We,!1)})}var fe=d(v,2);{var we=ae=>{var Ue=ed(),te=u(Ue);Yt(te,{class:"mx-auto mb-2 h-12 w-12"}),h(ae,Ue)},at=ae=>{var Ue=id(),te=u(Ue),Se=d(u(te));it(Se,21,()=>r().purchasesList,Je=>Je.$id,(Je,ve,ct)=>{var De=L(),Fe=I(De);{var It=xe=>{var Pe=rd(),ze=u(Pe),Ge=u(ze),pt=u(Ge),Et=d(pt,2),et=u(Et);et.value=et.__value="kg";var ft=d(et);ft.value=ft.__value="gr.";var Xe=d(ft);Xe.value=Xe.__value="l.";var st=d(Xe);st.value=st.__value="ml";var Z=d(st);Z.value=Z.__value="unité";var se=d(Z);se.value=se.__value="bottes";var Te=d(ze),Ve=u(Te),Qe=d(Te),Re=u(Qe),He=d(Qe),Be=u(He),wt=u(Be);wt.value=wt.__value="ordered";var _r=d(wt);_r.value=_r.__value="delivered";var St=d(He),mt=u(St),Wt=d(St),Dt=u(Wt),Gt=d(Wt),Dr=u(Gt),nn=d(Gt),kt=u(nn),Rr=d(nn),Mn=u(Rr),br=u(Mn);br.__click=[Yu,r,a];var Cn=u(br);{var Oo=qe=>{var Bo=td();h(qe,Bo)},qo=qe=>{vu(qe,{class:"h-3 w-3"})};N(Cn,qe=>{r().loading?qe(Oo):qe(qo,!1)})}var wa=d(br,2);wa.__click=[Zu,r];var jo=u(wa);Bt(jo,{class:"h-3 w-3"}),G(qe=>br.disabled=qe,[()=>r().loading||!a(o(ve))]),Ie(pt,()=>o(ve).quantity,qe=>o(ve).quantity=qe),ar(Et,()=>o(ve).unit,qe=>o(ve).unit=qe),Ie(Ve,()=>o(ve).store,qe=>o(ve).store=qe),Ie(Re,()=>o(ve).who,qe=>o(ve).who=qe),ar(Be,()=>o(ve).status,qe=>o(ve).status=qe),Ie(mt,()=>o(ve).orderDate,qe=>o(ve).orderDate=qe),Ie(Dt,()=>o(ve).deliveryDate,qe=>o(ve).deliveryDate=qe),Ie(Dr,()=>o(ve).price,qe=>o(ve).price=qe),Ie(kt,()=>o(ve).notes,qe=>o(ve).notes=qe),h(xe,Pe)},ce=xe=>{var Pe=od(),ze=u(Pe),Ge=u(ze),pt=d(ze),Et=u(pt),et=d(pt),ft=u(et),Xe=d(et),st=u(Xe),Z=u(st),se=d(Xe),Te=u(se),Ve=d(se),Qe=u(Ve),Re=d(Ve),He=u(Re),Be=d(Re),wt=u(Be),_r=d(Be),St=u(_r),mt=u(St);mt.__click=[nd,i,ve];var Wt=u(mt);ta(Wt,{class:"h-4 w-4"});var Dt=d(mt,2);Dt.__click=[ad,s,ve];var Gt=u(Dt);{var Dr=kt=>{var Rr=sd();h(kt,Rr)},nn=kt=>{Bt(kt,{class:"h-4 w-4"})};N(Gt,kt=>{r().loading?kt(Dr):kt(nn,!1)})}G((kt,Rr,Mn,br,Cn)=>{V(Ge,kt),V(Et,o(ve).store||"-"),V(ft,o(ve).who||"-"),Ae(st,1,`badge badge-sm ${Rr??""}`),V(Z,Mn),V(Te,br),V(Qe,Cn),V(He,o(ve).price?`${o(ve).price}€`:"-"),V(wt,o(ve).notes||"-"),Dt.disabled=r().loading},[()=>Tn(o(ve).quantity,o(ve).unit),()=>aa(o(ve).status).class,()=>aa(o(ve).status).text,()=>ts(o(ve).orderDate),()=>ts(o(ve).deliveryDate)]),h(xe,Pe)};N(Fe,xe=>{r().editingPurchaseId===o(ve).$id?xe(It):xe(ce,!1)})}h(Je,De)}),h(ae,Ue)};N(fe,ae=>{r().purchasesList.length===0?ae(we):ae(at,!1)})}G(ae=>{Ae(_e,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),ke.disabled=ae},[()=>r().loading||!n()]),Ie(S,()=>r().forms.purchase.quantity,ae=>r().forms.purchase.quantity=ae),ar(b,()=>r().forms.purchase.unit,ae=>r().forms.purchase.unit=ae),Ie(B,()=>r().forms.purchase.store,ae=>r().forms.purchase.store=ae),Ie(he,()=>r().forms.purchase.who,ae=>r().forms.purchase.who=ae),Ie(R,()=>r().forms.purchase.price,ae=>r().forms.purchase.price=ae),Ie(z,()=>r().forms.purchase.notes,ae=>r().forms.purchase.notes=ae),ar(de,()=>r().forms.purchase.status,ae=>r().forms.purchase.status=ae),h(e,l),W()}Ze(["click"]);async function ud(e,t){await t()?.removeStock()}var dd=x(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),fd=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},vd=x('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),hd=x('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),pd=x('<span class="loading loading-spinner loading-xs"></span>'),md=x('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),gd=x(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function _d(e,t){U(t,!0);let r=Ne(t,"modalState",7);var n=gd(),a=u(n),s=u(a);ea(s,{class:"h-5 w-5"});var i=d(a,2),l=u(i),c=u(l),f=u(c),v=d(c,2),m=u(v);Do(m,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(R,H)=>{var ne=dd();h(R,ne)},$$slots:{default:!0}});var p=d(v,2),g=u(p),_=u(g);tn(_,{class:"h-4 w-4 opacity-50"});var S=d(_,2),b=d(g,2),y=u(b);y.value=y.__value="";var $=d(y);$.value=$.__value="kg";var w=d($);w.value=w.__value="gr.";var P=d(w);P.value=P.__value="l.";var k=d(P);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var M=d(A);M.value=M.__value="bottes";var D=d(p,2),X=u(D),B=d(D,2),Q=u(B);Q.__click=[fd,r];var ee=d(i,2);{var he=R=>{var H=vd(),ne=u(H);ea(ne,{class:"mx-auto mb-2 h-12 w-12"}),h(R,H)},O=R=>{var H=md(),ne=u(H),C=d(u(ne),2),z=u(C),pe=d(u(z),2),be=u(pe),ge=d(z,2),de=d(u(ge),2),me=u(de),j=d(ge,2);{var _e=Ce=>{var We=hd(),fe=d(u(We),2),we=u(fe);G(()=>V(we,r().stockParsed.notes)),h(Ce,We)};N(j,Ce=>{r().stockParsed.notes&&Ce(_e)})}var q=d(C,2),ue=u(q);ue.__click=[ud,r];var ye=u(ue);{var ke=Ce=>{var We=pd();h(Ce,We)},Le=Ce=>{var We=yt("Supprimer le stock");h(Ce,We)};N(ye,Ce=>{r().loading?Ce(ke):Ce(Le,!1)})}G(Ce=>{V(be,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),V(me,Ce),ue.disabled=r().loading},[()=>Nn(r().stockParsed.dateTime)]),h(R,H)};N(ee,R=>{r().stockParsed?R(O,!1):R(he)})}G(R=>{V(f,`Déclarer le stock réel du ${R??""}`),Q.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),Ie(S,()=>r().forms.stock.quantity,R=>r().forms.stock.quantity=R),ar(b,()=>r().forms.stock.unit,R=>r().forms.stock.unit=R),Ie(X,()=>r().forms.stock.notes,R=>r().forms.stock.notes=R),h(e,n),W()}Ze(["click"]);function bd(e,t,r){t().forms.who=[...t().whoList],E(r,"")}var yd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},wd=x('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function Sd(e,t){U(t,!0);let r=Ne(t,"modalState",7),n=K("");const a=Y(()=>{const M=new Set([...J.uniqueWho,...r().forms.who]);return Array.from(M).map(D=>({id:D,label:D,selected:r().forms.who.includes(D)}))});function s(M){const D=M.trim();D&&!r().forms.who.includes(D)&&(r().forms.who=[...r().forms.who,D])}function i(M){r().forms.who=r().forms.who.filter(D=>D!==M)}function l(M){r().forms.who.includes(M)?i(M):s(M)}function c(){o(n).trim()&&(s(o(n)),E(n,""))}var f=wd(),v=u(f),m=u(v),p=d(u(m),4),g=u(p),_=u(g),S=u(_);rn(S,{class:"h-4 w-4 opacity-50"});var b=d(S,2);b.__keydown=[yd,c];var y=d(_,2);y.__click=c;var $=u(y);Io($,{size:16});var w=d(g,2),P=d(u(w),2);Fr(P,{get items(){return o(a)},onToggleItem:l,showIcon:!0});var k=d(p,2),A=u(k);A.__click=[bd,r,n],G(M=>{b.disabled=r().loading,y.disabled=M,A.disabled=r().loading},[()=>r().loading||!o(n).trim()]),Ie(b,()=>o(n),M=>E(n,M)),h(e,f),W()}Ze(["keydown","click"]);var Pd=x('<div class="mb-1 text-xs opacity-70"> </div>'),xd=(e,t,r)=>t(o(r)),$d=x("<button><!> </button>"),Ed=x('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function Ro(e,t){U(t,!0);let r=Ne(t,"maxSuggestions",3,8),n=Ne(t,"title",3,"Suggestions :"),a=Ne(t,"buttonSize",3,"btn-xs"),s=Ne(t,"buttonVariant",3,"btn-soft"),i=Ne(t,"disabled",3,!1);const l=Y(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=L(),v=I(f);{var m=p=>{var g=Ed(),_=u(g);{var S=y=>{var $=Pd(),w=u($);G(()=>V(w,n())),h(y,$)};N(_,y=>{n()&&y(S)})}var b=d(_,2);it(b,21,()=>o(l),y=>y.id,(y,$)=>{var w=$d();w.__click=[xd,c,$];var P=u(w);{var k=M=>{var D=L(),X=I(D);lr(X,()=>o($).icon,(B,Q)=>{Q(B,{class:"h-3 w-3"})}),h(M,D)};N(P,M=>{o($).icon&&M(k)})}var A=d(P);G(()=>{Ae(w,1,`btn ${a()??""} ${s()??""}`),w.disabled=i()||o($).disabled,jt(w,"title",o($).disabled?"Déjà sélectionné":o($).label),V(A,` ${o($).label??""}`)}),h(y,w)}),h(p,g)};N(v,p=>{o(l).length>0&&p(m)})}h(e,f),W()}Ze(["click"]);var kd=(e,t)=>{e.key==="Enter"&&t()},Ad=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},Td=x(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function Nd(e,t){U(t,!0);let r=Ne(t,"modalState",7);const n=Y(()=>r()?.hasChanges?.store||!1);async function a(){if(!o(n))return;const $={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore($)}var s=Td(),i=u(s),l=u(i),c=d(u(l),4),f=u(c),v=u(f),m=u(v);Ft(m,{class:"h-4 w-4 opacity-50"});var p=d(m,2);p.__keydown=[kd,a];var g=d(v,2);{var _=$=>{{let w=Y(()=>J.uniqueStores.map(P=>({id:P,label:P,disabled:P===r().forms.store.name})));Ro($,{get suggestions(){return o(w)},onSuggestionClick:P=>{r().forms.store.name=P.label},buttonVariant:"btn-outline"})}};N(g,$=>{J.uniqueStores.length>0&&$(_)})}var S=d(f,2),b=d(c,2),y=u(b);y.__click=[Ad,r],G(()=>y.disabled=r().loading),Ie(p,()=>r().forms.store.name,$=>r().forms.store.name=$),Ie(S,()=>r().forms.store.comment,$=>r().forms.store.comment=$),h(e,s),W()}Ze(["keydown","click"]);async function Md(e,t,r,n,a,s){if(!t.modalState)return;const i={totalOverride:{q:o(r),u:o(n)},comment:o(a)};await t.modalState.setOverride(i),E(s,!1)}async function Cd(e,t,r){t.modalState&&(await t.modalState.removeOverride(),E(r,!1))}var Id=x('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),Dd=x('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),Rd=x(" <!>",1),Od=(e,t)=>E(t,!0),qd=x('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),jd=x('<div class="text-error text-sm">Limite de caractères atteinte</div>'),Bd=x('<span class="loading loading-spinner loading-sm"></span>'),Ld=x('<span class="loading loading-spinner loading-sm"></span>'),zd=x(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),Vd=x('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function Ud(e,t){U(t,!0);const r=Y(()=>t.modalState.product?.totalNeededOverrideParsed),n=Y(()=>t.modalState.product?.displayTotalNeeded||[]);let a=K(!1),s=K(Me(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=K(Me(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=K(Me(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),c=Y(()=>o(s)>0&&o(i).trim()!=="");var f=Vd(),v=u(f),m=u(v),p=u(m);{var g=S=>{var b=qd(),y=I(b),$=u(y),w=d(u($),2);{var P=B=>{var Q=Id();h(B,Q)};N(w,B=>{o(r)&&B(P)})}var k=d(w,2),A=u(k);{var M=B=>{var Q=Rd(),ee=I(Q),he=d(ee);{var O=R=>{var H=Dd(),ne=u(H);ya(ne,{});var C=d(ne);G(()=>V(C,` ${o(r).comment??""}`)),h(R,H)};N(he,R=>{o(r).comment&&R(O)})}G(R=>V(ee,`${R??""} `),[()=>Tn(o(r).totalOverride.q,o(r).totalOverride.u)]),h(B,Q)},D=B=>{var Q=yt();G(()=>V(Q,o(n))),h(B,Q)};N(A,B=>{o(r)?B(M):B(D,!1)})}var X=d(y,2);X.__click=[Od,a],h(S,b)},_=S=>{var b=zd(),y=I(b),$=u(y),w=u($);lu(w,{class:"h-4 w-4 opacity-50"});var P=d(w,2),k=d($,2),A=u(k);A.value=A.__value="";var M=d(A);M.value=M.__value="kg";var D=d(M);D.value=D.__value="gr.";var X=d(D);X.value=X.__value="l.";var B=d(X);B.value=B.__value="ml";var Q=d(B);Q.value=Q.__value="unité";var ee=d(Q);ee.value=ee.__value="bottes";var he=d(y,2),O=u(he),R=d(u(O),2),H=d(R,2);{var ne=q=>{var ue=jd();h(q,ue)};N(H,q=>{o(l).length>=250&&q(ne)})}var C=d(he,2),z=u(C);z.__click=[Cd,t,a];var pe=u(z);{var be=q=>{var ue=Bd();h(q,ue)},ge=q=>{var ue=yt();G(()=>V(ue,`Réinitialiser le total calculé (${o(n)??""}).`)),h(q,ue)};N(pe,q=>{t.modalState.loading?q(be):q(ge,!1)})}var de=d(z,2);de.__click=[Md,t,s,i,l,a];var me=u(de);{var j=q=>{var ue=Ld();h(q,ue)},_e=q=>{var ue=yt("Appliquer");h(q,ue)};N(me,q=>{t.modalState.loading?q(j):q(_e,!1)})}G(()=>{z.disabled=t.modalState.loading,de.disabled=t.modalState.loading||!o(c)}),Ie(P,()=>o(s),q=>E(s,q)),ar(k,()=>o(i),q=>E(i,q)),Ie(R,()=>o(l),q=>E(l,q)),h(S,b)};N(p,S=>{o(a)?S(_,!1):S(g)})}G(()=>Ae(v,1,`card border-base-300 border ${o(a)?"bg-base-200":"bg-base-100"}`)),h(e,f),W()}Ze(["click"]);var Wd=x('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Gd=x('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Qd=x('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Hd=x('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Kd(e,t){U(t,!0);const r=Y(()=>t.modalState.recipes);var n=Hd(),a=I(n);Ud(a,{get modalState(){return t.modalState}});var s=d(a,2),i=u(s),l=u(i);ba(l,{class:"h-5 w-5"});var c=d(i,2);{var f=m=>{var p=Wd(),g=u(p);tn(g,{class:"mx-auto mb-2 h-12 w-12"}),h(m,p)},v=m=>{var p=Qd(),g=u(p),_=d(u(g));it(_,21,()=>o(r),S=>S.r,(S,b)=>{var y=Gd(),$=u(y),w=u($),P=d($),k=u(P),A=d(P),M=u(A);G(D=>{V(w,`${o(b).r??""} (${(o(b).a||"-")??""} c.)`),V(k,`${(o(b).q||o(b).qEq)??""} ${(o(b).u||o(b).uEq)??""}`),V(M,D)},[()=>Nn(o(b).date)]),h(S,y)}),h(m,p)};N(c,m=>{o(r).length===0?m(f):m(v,!1)})}h(e,n),W()}function Jd(e,t,r){o(t).saveAllChanges().then(()=>{r.onClose()})}var Yd=x('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Zd=x('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Xd=(e,t)=>t("recettes"),Fd=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),ef=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),tf=(e,t)=>t("magasins"),rf=x('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),nf=(e,t)=>t("volontaires"),af=x('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),sf=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),of=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),lf=(e,t)=>t("stock"),cf=x('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),uf=x('<span class="badge badge-sm badge-secondary ml-1">1</span>'),df=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),ff=(e,t)=>t("achats"),vf=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),hf=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),pf=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),mf=x('<span class="loading loading-spinner loading-sm"></span>'),gf=x('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),_f=x('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function bf(e,t){U(t,!0);let r=Ne(t,"initialTab",3,"recettes"),n=Y(()=>Ku(t.productId)),a=K(Me(r()));function s(b){E(a,b,!0)}var i=_f(),l=u(i),c=u(l),f=u(c);{var v=b=>{var y=Yd(),$=I(y),w=u($),P=d($,2),k=u(P),A=u(k),M=d(k,2),D=d(u(M));G(()=>{V(w,o(n).product?.productName),V(A,o(n).product?.productType),V(D,` ${o(n).product?.displayTotalNeeded??""}`)}),h(b,y)},m=b=>{var y=Zd();h(b,y)};N(f,b=>{o(n)&&o(n).product?b(v):b(m,!1)})}var p=d(f,2);p.__click=function(...b){t.onClose?.apply(this,b)};var g=u(p);Bt(g,{class:"h-4 w-4"});var _=d(c,2);{var S=b=>{var y=gf(),$=I(y),w=u($);w.__click=[Xd,s];var P=u(w);ba(P,{class:"mr-1 h-5 w-5"});var k=d(P,2);{var A=te=>{var Se=Fd(),Je=u(Se);G(()=>V(Je,o(n).product?.nbRecipes)),h(te,Se)},M=te=>{var Se=ef();h(te,Se)};N(k,te=>{o(n).product?.nbRecipes&&o(n).product?.nbRecipes>0?te(A):te(M,!1)})}var D=d(w,2);D.__click=[tf,s];var X=u(D);Ft(X,{class:"mr-1 h-5 w-5"});var B=d(X,2);{var Q=te=>{var Se=rf();h(te,Se)};N(B,te=>{o(n).hasChanges?.store&&te(Q)})}var ee=d(D,2);ee.__click=[nf,s];var he=u(ee);ra(he,{class:"mr-1 h-5 w-5"});var O=d(he,2);{var R=te=>{var Se=af();h(te,Se)},H=te=>{var Se=L(),Je=I(Se);{var ve=De=>{var Fe=sf(),It=u(Fe);G(()=>V(It,o(n).product?.who.length)),h(De,Fe)},ct=De=>{var Fe=of();h(De,Fe)};N(Je,De=>{o(n).product?.who&&o(n).product?.who.length>0?De(ve):De(ct,!1)},!0)}h(te,Se)};N(O,te=>{o(n).hasChanges?.who?te(R):te(H,!1)})}var ne=d(ee,2);ne.__click=[lf,s];var C=u(ne);ea(C,{class:"mr-1 h-5 w-5"});var z=d(C,2);{var pe=te=>{var Se=cf();h(te,Se)},be=te=>{var Se=L(),Je=I(Se);{var ve=De=>{var Fe=uf();h(De,Fe)},ct=De=>{var Fe=df();h(De,Fe)};N(Je,De=>{o(n).stockParsed?De(ve):De(ct,!1)},!0)}h(te,Se)};N(z,te=>{o(n).hasChanges?.stock?te(pe):te(be,!1)})}var ge=d(ne,2);ge.__click=[ff,s];var de=u(ge);Yt(de,{class:"mr-1 h-5 w-5"});var me=d(de,2);{var j=te=>{var Se=vf(),Je=u(Se);G(()=>V(Je,o(n).purchasesList.length)),h(te,Se)},_e=te=>{var Se=hf();h(te,Se)};N(me,te=>{o(n).purchasesList.length>0?te(j):te(_e,!1)})}var q=d($,2),ue=u(q);{var ye=te=>{var Se=pf(),Je=u(Se);Bt(Je,{class:"h-4 w-4"});var ve=d(Je,2),ct=u(ve);G(()=>V(ct,`erreur : ${o(n).error??""}`)),h(te,Se)};N(ue,te=>{o(n).error&&te(ye)})}var ke=d(ue,2),Le=u(ke);ll(Le,()=>o(a),te=>{var Se=L(),Je=I(Se);{var ve=De=>{Kd(De,{get modalState(){return o(n)}})},ct=De=>{var Fe=L(),It=I(Fe);{var ce=Pe=>{cd(Pe,{get modalState(){return o(n)}})},xe=Pe=>{var ze=L(),Ge=I(ze);{var pt=et=>{_d(et,{get modalState(){return o(n)}})},Et=et=>{var ft=L(),Xe=I(ft);{var st=se=>{Sd(se,{get modalState(){return o(n)}})},Z=se=>{var Te=L(),Ve=I(Te);{var Qe=Re=>{Nd(Re,{get modalState(){return o(n)}})};N(Ve,Re=>{o(a)==="magasins"&&Re(Qe)},!0)}h(se,Te)};N(Xe,se=>{o(a)==="volontaires"?se(st):se(Z,!1)},!0)}h(et,ft)};N(Ge,et=>{o(a)==="stock"?et(pt):et(Et,!1)},!0)}h(Pe,ze)};N(It,Pe=>{o(a)==="achats"?Pe(ce):Pe(xe,!1)},!0)}h(De,Fe)};N(Je,De=>{o(a)==="recettes"?De(ve):De(ct,!1)})}h(te,Se)});var Ce=d(q,2),We=u(Ce);We.__click=function(...te){t.onClose?.apply(this,te)};var fe=u(We),we=d(We,2);we.__click=[Jd,n,t];var at=u(we);{var ae=te=>{var Se=mf();h(te,Se)},Ue=te=>{var Se=yt("Tout enregistrer");h(te,Se)};N(at,te=>{o(n).loading?te(ae):te(Ue,!1)})}G(()=>{Ae(w,1,`tab ${o(a)==="recettes"?"tab-active":""}`),Ae(D,1,`tab ${o(a)==="magasins"?"tab-active":""}`),Ae(ee,1,`tab ${o(a)==="volontaires"?"tab-active":""}`),Ae(ne,1,`tab ${o(a)==="stock"?"tab-active":""}`),Ae(ge,1,`tab ${o(a)==="achats"?"tab-active":""}`),V(fe,o(n)?.hasAnyChanges?"Annuler":"Fermer"),we.disabled=o(n).loading||!o(n).hasAnyChanges}),h(b,y)};N(_,b=>{o(n)&&b(S)})}h(e,i),W()}Ze(["click"]);var yf=(e,t,r)=>t(r),wf=x("<button><span> </span> <!></button>"),Sf=(e,t)=>t(),Pf=x('<div class="flex justify-end"><button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button></div>'),xf=x('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),$f=x('<div class=" flex flex-wrap gap-1"></div> <!>',1);function Ef(e,t){U(t,!0);let r=Ne(t,"availableDates",19,()=>[]),n=Ne(t,"currentRange",19,()=>({start:null,end:null})),a=K(Me(n().start)),s=K(Me(n().end));const i=Y(()=>r().length>0&&o(a)===r()[0]&&o(s)===r()[r().length-1]);mr(()=>{E(a,n().start,!0),E(s,n().end,!0)});function l(y){o(a)===y&&o(s)===y?m():new Date(y)<new Date(o(a))?E(a,y,!0):(new Date(y)>new Date(o(s))||E(a,y,!0),E(s,y,!0)),t.onRangeChange(o(a),o(s))}function c(y){return new Date(y)>=new Date(o(a))&&new Date(y)<=new Date(o(s))?"btn-soft btn-secondary":"btn-dash btn-secondary opacity-80"}function f(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function v(y){const w=new Date(y).getUTCHours();return w===12?"sun":w===20?"moon":w===8?"cloud":null}function m(){r().length!==0&&(E(a,r()[0],!0),E(s,r()[r().length-1],!0),t.onRangeChange(o(a),o(s)))}var p=$f(),g=I(p);it(g,22,r,y=>y,(y,$)=>{var w=wf();w.__click=[yf,l,$];var P=u(w),k=u(P),A=d(P,2);{var M=X=>{pu(X,{size:16})},D=X=>{var B=L(),Q=I(B);{var ee=O=>{ou(O,{size:16})},he=O=>{var R=L(),H=I(R);{var ne=C=>{Jc(C,{size:16})};N(H,C=>{v($)==="cloud"&&C(ne)},!0)}h(O,R)};N(Q,O=>{v($)==="moon"?O(ee):O(he,!1)},!0)}h(X,B)};N(A,X=>{v($)==="sun"?X(M):X(D,!1)})}G((X,B)=>{Ae(w,1,`btn btn-sm ${X??""}`),V(k,B)},[()=>c($),()=>f($)]),h(y,w)});var _=d(g,2);{var S=y=>{var $=Pf(),w=u($);w.__click=[Sf,m],h(y,$)},b=y=>{var $=xf();h(y,$)};N(_,y=>{o(i)?y(b,!1):y(S)})}h(e,p),W()}Ze(["click"]);var kf=x("<fieldset><legend><!> </legend> <!></fieldset>");function ln(e,t){let r=Ne(t,"bgClass",3,"bg-base-100");var n=kf(),a=u(n),s=u(a);{var i=f=>{const v=Y(()=>t.iconComponent);var m=L(),p=I(m);lr(p,()=>o(v),(g,_)=>{_(g,{size:16,class:"mr-1"})}),h(f,m)};N(s,f=>{t.iconComponent&&f(i)})}var l=d(s),c=d(a,2);re(c,()=>t.children??F),G(()=>{Ae(n,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Ae(a,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),V(l,` ${t.legend??""}`)}),h(e,n)}var Af=()=>J.clearFilters(),Tf=e=>J.setSearchQuery(e.currentTarget.value),Nf=()=>J.setSearchQuery(""),Mf=()=>J.setGroupBy("none"),Cf=()=>J.setGroupBy("store"),If=()=>J.setGroupBy("productType"),Df=(e,t)=>J.toggleProductType(t),Rf=x("<button><!> </button>"),Of=()=>J.toggleTemperature("frais"),qf=()=>J.toggleTemperature("surgele"),jf=()=>J.clearTypeAndTemperatureFilters(),Bf=x('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),Lf=x('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),zf=x('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div> <!>',1),Vf=(e,t)=>J.toggleStore(t),Uf=x("<button> </button>"),Wf=()=>J.clearStoreFilters(),Gf=x('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Qf=x('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Hf=(e,t)=>J.toggleWho(t),Kf=x("<button> </button>"),Jf=()=>J.clearWhoFilters(),Yf=x('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),Zf=x('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Xf=x('<div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Ff(e,t){U(t,!0);const r=Y(()=>J.filters),n=Y(()=>J.uniqueStores),a=Y(()=>J.uniqueWho),s=Y(()=>J.uniqueProductTypes);var i=Xf(),l=I(i),c=u(l),f=u(c);No(f,{class:"h-5 w-5"});var v=d(c,2);v.__click=[Af];var m=u(v);on(m,{class:"h-4 w-4"});var p=d(l,2),g=u(p),_=d(u(g),2),S=u(_);hu(S,{class:"h-4 w-4"});var b=d(S,2);b.__input=[Tf];var y=d(b,2);y.__click=[Nf];var $=u(y);Bt($,{class:"h-4 w-4"});var w=d(g,2),P=d(u(w),2),k=u(P);k.__change=[Mf];var A=d(k,2);A.__change=[Cf];var M=d(A,2);M.__change=[If];var D=d(w,2);{var X=H=>{ln(H,{legend:"Date incluses",bgClass:"bg-base-100",children:(ne,C)=>{Ef(ne,{get availableDates(){return J.availableDates},get currentRange(){return J.dateRange},onRangeChange:(z,pe)=>J.setDateRange(z,pe)})},$$slots:{default:!0}})};N(D,H=>{J.hasSingleDate||H(X)})}var B=d(D,2);{var Q=H=>{ln(H,{legend:"Types & Température",get iconComponent(){return mu},children:(ne,C)=>{var z=zf(),pe=I(z);it(pe,20,()=>o(s),ye=>ye,(ye,ke)=>{const Le=Y(()=>na(ke));var Ce=Rf();Ce.__click=[Df,ke];var We=u(Ce);lr(We,()=>o(Le).icon,(we,at)=>{at(we,{class:"mr-1 h-5 w-5"})});var fe=d(We);G(we=>{Ae(Ce,1,`btn btn-sm ${we??""}`),V(fe,` ${o(Le).displayName??""}`)},[()=>o(r).selectedProductTypes.length===0?"btn-soft btn-secondary":o(r).selectedProductTypes.includes(ke)?"btn-secondary":"btn-dash btn-secondary"]),h(ye,Ce)});var be=d(pe,2),ge=u(be);ge.__click=[Of];var de=u(ge);Mo(de,{class:"h-5 w-5"});var me=d(ge,2);me.__click=[qf];var j=u(me);Co(j,{class:"h-5 w-5"});var _e=d(be,2);{var q=ye=>{var ke=Bf();ke.__click=[jf];var Le=u(ke);on(Le,{size:16}),h(ye,ke)},ue=ye=>{var ke=Lf();h(ye,ke)};N(_e,ye=>{o(r).selectedProductTypes.length>0||o(r).selectedTemperatures.length>0?ye(q):ye(ue,!1)})}G((ye,ke)=>{Ae(ge,1,`btn btn-sm ${ye??""}`),Ae(me,1,`btn btn-sm ${ke??""}`)},[()=>o(r).selectedTemperatures.length===0?"btn-soft btn-success":o(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>o(r).selectedTemperatures.length===0?"btn-soft btn-info":o(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(ne,z)},$$slots:{default:!0}})};N(B,H=>{o(s).length>0&&H(Q)})}var ee=d(B,2);{var he=H=>{ln(H,{legend:"Magasins",get iconComponent(){return Ft},children:(ne,C)=>{var z=Qf(),pe=u(z);it(pe,16,()=>o(n),de=>de,(de,me)=>{var j=Uf();j.__click=[Vf,me];var _e=u(j);G(q=>{Ae(j,1,`btn btn-sm ${q??""}`),V(_e,me)},[()=>o(r).selectedStores.length===0?"btn-soft btn-secondary":o(r).selectedStores.includes(me)?"btn-secondary":"btn-dash btn-secondary"]),h(de,j)});var be=d(pe,2);{var ge=de=>{var me=Gf();me.__click=[Wf];var j=u(me);on(j,{size:16}),h(de,me)};N(be,de=>{o(r).selectedStores.length>0&&de(ge)})}h(ne,z)},$$slots:{default:!0}})};N(ee,H=>{o(n).length>0&&H(he)})}var O=d(ee,2);{var R=H=>{ln(H,{legend:"Qui",get iconComponent(){return rn},children:(ne,C)=>{var z=Zf(),pe=u(z);it(pe,16,()=>o(a),de=>de,(de,me)=>{var j=Kf();j.__click=[Hf,me];var _e=u(j);G(q=>{Ae(j,1,`btn btn-sm ${q??""}`),V(_e,me)},[()=>o(r).selectedWho.length===0?" btn-soft btn-secondary":o(r).selectedWho.includes(me)?" btn-secondary":"btn-dash btn-secondary"]),h(de,j)});var be=d(pe,2);{var ge=de=>{var me=Yf();me.__click=[Jf];var j=u(me);on(j,{size:16}),h(de,me)};N(be,de=>{o(r).selectedWho.length>0&&de(ge)})}h(ne,z)},$$slots:{default:!0}})};N(O,H=>{o(a).length>0&&H(R)})}G(()=>{v.disabled=!J.hasFilters,gl(b,o(r).searchQuery),y.disabled=!o(r).searchQuery,On(k,o(r).groupBy==="none"),On(A,o(r).groupBy==="store"),On(M,o(r).groupBy==="productType")}),h(e,i),W()}Ze(["click","input","change"]);Ze(["click"]);var ev=x('<div class="tooltip text-xs font-normal"><!></div>');function tv(e,t){let r=Ne(t,"iconSize",3,24),n=t.icon||void 0;var a=ev(),s=u(a);{var i=l=>{n(l,{get size(){return r()},class:`align-top
`})};N(s,l=>{t.icon&&l(i)})}G(()=>jt(a,"data-tip",t.tip)),h(e,a)}var rv=x('<div class="text-neutral-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),nv=(e,t,r)=>t.onOpenGroupEditModal("store",r().map(n=>n.$id),r()),av=(e,t,r)=>t.onOpenGroupEditModal("who",r().map(n=>n.$id),r()),sv=(e,t,r)=>t.onOpenGroupPurchaseModal(r()),ov=x(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),iv=x('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 @md:min-w-48"><!></div> <div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div></div>'),lv=(e,t,r)=>t.onOpenModal(o(r).$id,"recettes"),cv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"recettes"),uv=x('<div class="text-base-content/60 text-sm font-normal"> </div>'),dv=x('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),fv=x('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),vv=x('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),hv=x('<div class="tooltip"><div class="badge badge-outline badge-xs hover:badge-primary"> </div></div>'),pv=x('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),mv=x('<div class="text-base-content/60 mt-2"><div class="flex flex-wrap gap-1"></div></div>'),gv=(e,t,r)=>t.onOpenModal(o(r).$id,"magasins"),_v=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"magasins"),bv=x('<div class="ml-1"><!></div>'),yv=x('<div class="ml-1"> </div> <!>',1),wv=x('<div class="ml-1 text-sm font-medium">?</div>'),Sv=(e,t,r)=>t.onOpenModal(o(r).$id,"volontaires"),Pv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"volontaires"),xv=x('<span class="text-base-content/50 text-xs"> </span>'),$v=x('<div class="ml-1 flex gap-1"> <!></div>'),Ev=x('<div class="ml-1 text-sm font-medium">?</div>'),kv=(e,t,r)=>t.onOpenModal(o(r).$id,"recettes"),Av=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"recettes"),Tv=x('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),Nv=(e,t,r)=>{e.stopPropagation(),t.onQuickValidation(o(r))},Mv=x('<button class="btn btn-sm btn-soft btn-warning hover:bg-success/70 hover:border-success/70 ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M.625 0a.625.625 0 1 0 0 1.25h1.818l.205 1.94l.644 6.105a1.626 1.626 0 0 0 1.619 1.455h6.208c.746 0 1.397-.506 1.579-1.23l1.253-5a1.626 1.626 0 0 0-1.579-2.02h-8.54L3.627.56A.625.625 0 0 0 3.006 0zm3.91 9.164L3.964 3.75h8.408c.247 0 .425.23.366.466l-1.253 5a.38.38 0 0 1-.366.284H4.911a.376.376 0 0 1-.376-.336m5.72-3.134a.75.75 0 0 0-1.129-.988l-1.48 1.69l-.526-.395a.75.75 0 1 0-.9 1.2l1.083.813a.75.75 0 0 0 1.015-.106zm1.816 6.845a1.125 1.125 0 1 0-2.25 0a1.125 1.125 0 0 0 2.25 0M4.446 11.75a1.125 1.125 0 1 1 0 2.25a1.125 1.125 0 0 1 0-2.25" clip-rule="evenodd"></path></svg> <span class="text-xs"> </span> <!></button>'),Cv=(e,t,r)=>t.onOpenModal(o(r).$id,"achats"),Iv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"achats"),Dv=x('<div><!> <span class="text-sm font-medium"> </span></div>'),Rv=x('<span class="text-base-content/50 text-xs italic">aucun</span>'),Ov=x('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div></div> <div class="flex flex-wrap gap-3"><div class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex gap-4"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins:</div> <div class="flex items-center gap-4"><div> </div> <!></div></div> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative min-w-[200px] flex-1 cursor-pointer rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex items-center justify-between gap-2"><div class="flex flex-col gap-0"><div class="text-base-content/80 flex items-center justify-between gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div class="text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity group-hover:opacity-100 sm:opacity-0">ajouter un achat</div></div> <div class="flex flex-wrap gap-1.5"><!> <!></div></div></div></div></div></div>'),qv=x('<!> <div class="space-y-1"></div>',1),jv=x('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Bv=x('<div class="space-y-4 rounded-lg"></div> <!>',1);function Lv(e,t){U(t,!0);const r={Package:tn,MessageCircleQuestionMark:su,ShoppingCart:Yt,Clock:Kc,CircleCheck:Gc,CircleX:Qc,ClipboardCheck:Hc,PackageCheck:iu},n=Y(()=>J.groupedFilteredProducts),a=Y(()=>J.filters);var s=Bv(),i=I(s);it(i,21,()=>Object.entries(o(n)),([f,v])=>f,(f,v)=>{var m=Y(()=>is(o(v),2));let p=()=>o(m)[0],g=()=>o(m)[1];var _=qv(),S=I(_);{var b=$=>{const w=Y(()=>na(p()));var P=iv(),k=u(P),A=u(k);{var M=C=>{var z=yt();G(()=>V(z,`🏪 ${p()??""} (${g().length??""})`)),h(C,z)},D=C=>{var z=L(),pe=I(z);{var be=de=>{var me=rv(),j=u(me);lr(j,()=>o(w).icon,(ke,Le)=>{Le(ke,{class:"h-4 w-4"})});var _e=d(j,2),q=u(_e),ue=d(_e,2),ye=u(ue);G(()=>{V(q,o(w).displayName),V(ye,`(${g().length??""})`)}),h(de,me)},ge=de=>{var me=yt();G(()=>V(me,`📦 ${p()??""} (${g().length??""})`)),h(de,me)};N(pe,de=>{o(a).groupBy==="productType"?de(be):de(ge,!1)},!0)}h(C,z)};N(A,C=>{o(a).groupBy==="store"?C(M):C(D,!1)})}var X=d(k,2),B=u(X);B.__click=[nv,t,g];var Q=u(B);Ft(Q,{size:16});var ee=d(Q,4);ta(ee,{size:16});var he=d(B,2);he.__click=[av,t,g];var O=u(he);ra(O,{size:16});var R=d(O,4);ta(R,{size:16});var H=d(he,2);{var ne=C=>{var z=ov();z.__click=[sv,t,g];var pe=u(z);Yt(pe,{size:16});var be=d(pe,4);Xa(be,{size:16}),h(C,z)};N(H,C=>{g().some(z=>z.displayMissingQuantity!=="✅ Complet")&&C(ne)})}h($,P)};N(S,$=>{p()!==""&&$(b)})}var y=d(S,2);it(y,21,()=>g()||[],$=>$.$id,($,w)=>{const P=Y(()=>J.productsStatsByDateRange.get(o(w).$id)||{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedAvailableQuantities:"Équilibré",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map}),k=Y(()=>na(o(w).productType)),A=Y(()=>Qu(o(w).purchases||[]));var M=Ov(),D=u(M),X=u(D),B=u(X);B.__click=[lv,t,w],B.__keydown=[cv,t,w];var Q=u(B),ee=u(Q);lr(ee,()=>o(k).icon,(Z,se)=>{se(Z,{class:"text-base-content/80 h-4 w-4"})});var he=d(ee),O=d(he);{var R=Z=>{var se=uv(),Te=u(se);G(()=>V(Te,`Ancien: ${o(w).previousNames[0]??""}`)),h(Z,se)};N(O,Z=>{o(w).previousNames&&o(w).previousNames.length>0&&Z(R)})}var H=d(Q,2),ne=u(H);{var C=Z=>{var se=dv(),Te=u(se);Mo(Te,{class:"text-success h-4 w-4"}),h(Z,se)};N(ne,Z=>{o(w).pFrais&&Z(C)})}var z=d(ne,2);{var pe=Z=>{var se=fv(),Te=u(se);Co(Te,{class:"text-info h-4 w-4"}),h(Z,se)};N(z,Z=>{o(w).pSurgel&&Z(pe)})}var be=d(H,2);{var ge=Z=>{var se=vv(),Te=u(se);ru(Te,{class:"h-4 w-4 animate-spin"}),h(Z,se)};N(be,Z=>{o(w).status==="isSyncing"&&Z(ge)})}var de=d(be,2);{var me=Z=>{var se=mv(),Te=u(se);it(Te,20,()=>o(P).concernedDates,Ve=>Ve,(Ve,Qe)=>{const Re=Y(()=>o(P).recipesByDate.get(Qe)||[]);var He=L(),Be=I(He);{var wt=St=>{var mt=hv(),Wt=u(mt),Dt=u(Wt);G((Gt,Dr)=>{jt(mt,"data-tip",Gt),V(Dt,Dr)},[()=>o(Re).map(Gt=>Gt.r).join(", "),()=>new Date(Qe).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h(St,mt)},_r=St=>{var mt=pv(),Wt=u(mt);G(Dt=>V(Wt,Dt),[()=>new Date(Qe).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h(St,mt)};N(Be,St=>{o(Re).length>0?St(wt):St(_r,!1)})}h(Ve,He)}),h(Z,se)};N(de,Z=>{o(P).concernedDates.length>0&&Z(me)})}var j=d(B,2),_e=u(j);_e.__click=[gv,t,w],_e.__keydown=[_v,t,w];var q=u(_e);Ft(q,{size:18});var ue=d(q,2);{var ye=Z=>{var se=yv(),Te=I(se),Ve=u(Te),Qe=d(Te,2);{var Re=He=>{var Be=bv(),wt=u(Be);tv(wt,{get tip(){return o(w).storeInfo.storeComment},get icon(){return au},iconSize:14}),h(He,Be)};N(Qe,He=>{o(w).storeInfo?.storeComment&&He(Re)})}G(()=>V(Ve,o(w).storeInfo.storeName)),h(Z,se)},ke=Z=>{var se=wv();h(Z,se)};N(ue,Z=>{o(w).storeInfo?.storeName?Z(ye):Z(ke,!1)})}var Le=d(_e,2);Le.__click=[Sv,t,w],Le.__keydown=[Pv,t,w];var Ce=u(Le);ra(Ce,{size:18});var We=d(Ce,2);{var fe=Z=>{var se=$v(),Te=u(se),Ve=d(Te);{var Qe=Re=>{var He=xv(),Be=u(He);G(()=>V(Be,`+${o(w).who.length-2}`)),h(Re,He)};N(Ve,Re=>{o(w).who.length>2&&Re(Qe)})}G(Re=>V(Te,`${Re??""} `),[()=>o(w).who.slice(0,2).map(Re=>Re.slice(0,3)).join(" | ")]),h(Z,se)},we=Z=>{var se=Ev();h(Z,se)};N(We,Z=>{o(w).who&&o(w).who.length>0?Z(fe):Z(we,!1)})}var at=d(X,2),ae=u(at);ae.__click=[kv,t,w],ae.__keydown=[Av,t,w];var Ue=u(ae),te=u(Ue),Se=u(te);tu(Se,{class:"h-4 w-4"});var Je=d(te,2),ve=u(Je),ct=u(ve),De=d(ve,2);{var Fe=Z=>{var se=Tv(),Te=u(se),Ve=u(Te),Qe=d(Ve);ba(Qe,{class:"h-3 w-3"});var Re=d(Te,2),He=u(Re),Be=d(He);gu(Be,{class:"h-3 w-3"}),G(()=>{V(Ve,`${o(P).nbRecipes??""} `),V(He,`${o(P).totalAssiettes??""} `)}),h(Z,se)};N(De,Z=>{(o(P).nbRecipes||o(P).totalAssiettes)&&Z(Fe)})}var It=d(Ue,2);{var ce=Z=>{var se=Mv();se.__click=[Nv,t,w];var Te=d(u(se),2),Ve=u(Te),Qe=d(Te,2);{var Re=Be=>{Uc(Be,{size:18})},He=Be=>{Wc(Be,{size:18})};N(Qe,Be=>{Xr.isMobile?Be(Re):Be(He,!1)})}G(()=>{jt(se,"title",`Acheter le manquant (${o(P).formattedAvailableQuantities??""})`),V(Ve,o(P).formattedAvailableQuantities)}),h(Z,se)},xe=Z=>{Xa(Z,{size:24,class:"text-success"})};N(It,Z=>{o(P).hasMissing?Z(ce):Z(xe,!1)})}var Pe=d(ae,2);Pe.__click=[Cv,t,w],Pe.__keydown=[Iv,t,w];var ze=u(Pe),Ge=u(ze),pt=u(Ge),Et=u(pt);Yt(Et,{class:"h-4 w-4"});var et=d(Ge,2),ft=u(et);it(ft,17,()=>o(A),Z=>Z.status,(Z,se)=>{const Te=Y(()=>r[o(se).icon]);var Ve=Dv(),Qe=u(Ve);lr(Qe,()=>o(Te),(Be,wt)=>{wt(Be,{class:"h-4 w-4"})});var Re=d(Qe,2),He=u(Re);G(Be=>{Ae(Ve,1,`badge badge-outline flex items-center gap-1 ${o(se).badgeClass??""}`),V(He,Be)},[()=>Tn(o(se).quantity,o(se).unit)]),h(Z,Ve)});var Xe=d(ft,2);{var st=Z=>{var se=Rv();h(Z,se)};N(Xe,Z=>{o(A).length===0&&Z(st)})}G(()=>{Ae(M,1,`card bg-base-100 border-base-300 ${o(w).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),V(he,`${o(w).productName??""} `),Ae(_e,1,`btn btn-soft btn-sm group relative ${o(w).storeInfo?.storeName?"btn-success":""}`),Ae(Le,1,`btn btn-sm btn-soft group relative ${o(w).who?.length>0?"btn-success":""}`),Ae(ve,1,`font-bold ${o(P).hasMissing?"text-error":"text-success"}`),V(ct,o(P).formattedQuantities)}),h($,M)}),h(f,_)});var l=d(i,2);{var c=f=>{var v=jv();h(f,v)};N(l,f=>{Object.values(o(n)).flat().length===0&&f(c)})}h(e,s),W()}Ze(["click","keydown"]);async function zv(e,t,r,n,a,s,i,l,c){if(!(!o(t)||o(r))){E(n,null),E(a,null);try{const f=o(s).map(g=>g.id),v=i.products.filter(g=>f.includes(g.$id));J.setSyncStatus(f,!0),i.onClose();const m={storeName:o(l).trim(),storeComment:o(c).trim()},p=await ko(f,v,m);if(E(a,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(f){const v=f instanceof Error?f.message:"Erreur inconnue";E(n,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),J.clearSyncStatus()}finally{E(r,!1)}}}function rs(e,t,r){o(t)||r.onClose()}var Vv=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Uv=(e,t)=>E(t,"empty"),Wv=(e,t)=>E(t,"all"),Gv=x('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Qv=x("<!> ",1),Hv=x('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Kv(e,t){U(t,!0);let r=K(!1),n=K(null),a=K(null),s=K(Me(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=K(Me(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=K(Me({})),c=K("empty");mr(()=>{const q={};t.products.forEach(ue=>{t.productIds.includes(ue.$id)&&(o(c)==="empty"?q[ue.$id]=!ue.storeInfo||!ue.storeInfo.storeName:q[ue.$id]=!0)}),E(l,q,!0)});const f=Y(()=>t.products.map(q=>({id:q.$id,label:q.productName,title:q.productName,selected:o(l)[q.$id]}))),v=Y(()=>o(f).filter(q=>q.selected)),m=Y(()=>`Attribuer un magasin (${o(v).length} produits sélectionnés)`),p=Y(()=>o(v).length===0?!1:o(s).trim().length>0);function g(q){o(l)[q]=!o(l)[q]}var _=Hv(),S=u(_),b=u(S),y=u(b),$=u(y),w=d(y,2);w.__click=[rs,r,t];var P=u(w);Bt(P,{class:"h-4 w-4"});var k=d(b,2),A=u(k);{var M=q=>{var ue=Vv(),ye=u(ue);An(ye,{class:"h-4 w-4"});var ke=d(ye,2),Le=u(ke);G(()=>V(Le,o(n))),h(q,ue)};N(A,q=>{o(n)&&q(M)})}var D=d(A,2),X=u(D),B=u(X),Q=u(B);Ft(Q,{class:"h-4 w-4 opacity-50"});var ee=d(Q,2),he=d(B,2);{let q=Y(()=>J.uniqueStores.map(ue=>({id:ue,label:ue,disabled:ue===o(s)})));Ro(he,{get suggestions(){return o(q)},onSuggestionClick:ue=>{E(s,ue.label,!0)},title:"Suggestions de magasins :"})}var O=d(X,2),R=u(O),H=d(D,2),ne=d(u(H),2),C=u(ne);C.__click=[Uv,c];var z=d(C,2);z.__click=[Wv,c];var pe=d(ne,2);Fr(pe,{get items(){return o(f)},onToggleItem:g,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var be=d(k,2),ge=u(be);ge.__click=[rs,r,t];var de=d(ge,2);de.__click=[zv,p,r,n,a,v,t,s,i];var me=u(de);{var j=q=>{var ue=Gv();h(q,ue)},_e=q=>{var ue=Qv(),ye=I(ue);Zr(ye,{class:"h-4 w-4"});var ke=d(ye);G(()=>V(ke,` Appliquer à ${o(v).length??""} produit(s)`)),h(q,ue)};N(me,q=>{o(r)?q(j):q(_e,!1)})}G(()=>{V($,o(m)),w.disabled=o(r),ee.disabled=o(r),R.disabled=o(r),Ae(C,1,`tab ${o(c)==="empty"?"tab-active":""}`),Ae(z,1,`tab ${o(c)==="all"?"tab-active":""}`),ge.disabled=o(r),de.disabled=o(r)||!o(p)}),Ie(ee,()=>o(s),q=>E(s,q)),Ie(R,()=>o(i),q=>E(i,q)),h(e,_),W()}Ze(["click"]);async function Jv(e,t,r,n,a,s,i,l){if(!(!o(t)||o(r))){E(n,null),E(a,null);try{const c=o(s).map(m=>m.id),f=i.products.filter(m=>c.includes(m.$id));J.setSyncStatus(c,!0),i.onClose();const v=await Ao(c,f,o(l),"replace");if(E(a,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),i.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";E(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),J.clearSyncStatus()}finally{E(r,!1)}}}function ns(e,t,r){o(t)||r.onClose()}var Yv=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Zv=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},Xv=(e,t)=>E(t,"empty"),Fv=(e,t)=>E(t,"all"),eh=x('<span class="loading loading-spinner loading-sm"></span> En cours...',1),th=x("<!> ",1),rh=x('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function nh(e,t){U(t,!0);let r=K(!1),n=K(null),a=K(null),s=K(Me([])),i=K(""),l=K("empty"),c=K(Me({}));mr(()=>{const fe={};t.products.forEach(we=>{t.productIds.includes(we.$id)&&(o(l)==="empty"?fe[we.$id]=!we.who||we.who.length===0:fe[we.$id]=!0)}),E(c,fe,!0)});const f=Y(()=>t.products.map(fe=>({id:fe.$id,label:fe.productName,title:fe.productName,selected:o(c)[fe.$id]}))),v=Y(()=>o(f).filter(fe=>fe.selected)),m=Y(()=>{const fe=new Set([...J.uniqueWho,...o(s)]);return Array.from(fe).map(we=>({id:we,label:we,selected:o(s).includes(we)}))}),p=Y(()=>`Gérer les volontaires (${o(v).length} produits sélectionnés)`),g=Y(()=>o(v).length===0?!1:o(s).length>0);function _(fe){const we=fe.trim();we&&!o(s).includes(we)&&E(s,[...o(s),we],!0)}function S(fe){E(s,o(s).filter(we=>we!==fe),!0)}function b(fe){o(s).includes(fe)?S(fe):_(fe)}function y(){o(i).trim()&&(_(o(i)),E(i,""))}function $(fe){o(c)[fe]=!o(c)[fe]}var w=rh(),P=u(w),k=u(P),A=u(k),M=u(A),D=d(A,2);D.__click=[ns,r,t];var X=u(D);Bt(X,{class:"h-4 w-4"});var B=d(k,2),Q=u(B);{var ee=fe=>{var we=Yv(),at=u(we);An(at,{class:"h-4 w-4"});var ae=d(at,2),Ue=u(ae);G(()=>V(Ue,o(n))),h(fe,we)};N(Q,fe=>{o(n)&&fe(ee)})}var he=d(Q,2),O=u(he),R=u(O),H=u(R),ne=u(H);rn(ne,{class:"h-4 w-4 opacity-50"});var C=d(ne,2);C.__keydown=[Zv,y];var z=d(H,2);z.__click=y;var pe=u(z);Io(pe,{size:16});var be=d(R,2),ge=d(u(be),2);Fr(ge,{get items(){return o(m)},onToggleItem:b,showIcon:!0});var de=d(he,2),me=d(u(de),2),j=u(me);j.__click=[Xv,l];var _e=d(j,2);_e.__click=[Fv,l];var q=d(me,2);Fr(q,{get items(){return o(f)},onToggleItem:$,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var ue=d(B,2),ye=u(ue);ye.__click=[ns,r,t];var ke=d(ye,2);ke.__click=[Jv,g,r,n,a,v,t,s];var Le=u(ke);{var Ce=fe=>{var we=eh();h(fe,we)},We=fe=>{var we=th(),at=I(we);Zr(at,{class:"h-4 w-4"});var ae=d(at);G(()=>V(ae,` Appliquer à ${o(v).length??""} produit(s)`)),h(fe,we)};N(Le,fe=>{o(r)?fe(Ce):fe(We,!1)})}G(fe=>{V(M,o(p)),D.disabled=o(r),C.disabled=o(r),z.disabled=fe,Ae(j,1,`tab ${o(l)==="empty"?"tab-active":""}`),Ae(_e,1,`tab ${o(l)==="all"?"tab-active":""}`),ye.disabled=o(r),ke.disabled=o(r)||!o(g)},[()=>o(r)||!o(i).trim()]),Ie(C,()=>o(i),fe=>E(i,fe)),h(e,w),W()}Ze(["click","keydown"]);var ah=x("<div><!></div>"),sh=x('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function oh(e,t){U(t,!0);let r=K(!1),n=Ne(t,"width",3,"80"),a=Ne(t,"bgClass",3,"bg-base-300");const s=Y(()=>"w-"+n());var i=L(),l=I(i);{var c=v=>{var m=ah(),p=u(m);re(p,()=>t.children??F),G(()=>Ae(m,1,`${a()??""} ${(o(s)?o(s):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),h(v,m)},f=v=>{var m=sh(),p=I(m),g=u(p),_=d(g,2),S=d(u(_),2),b=u(S);re(b,()=>t.children??F);var y=d(p,2),$=u(y),w=u($);No(w,{class:"h-6 w-6"}),yl(g,()=>o(r),P=>E(r,P)),h(v,m)};N(l,v=>{Xr.isMobile?v(f,!1):v(c)})}h(e,i),W()}function ih(){}var lh=x('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function ch(e,t){U(t,!0);const r="100",a="ml"+"-"+r;console.log("PANEL_SIDE_WIDTH →",a);const s=Y(()=>J.stats);let i=K(null),l=K("recettes"),c=K(!1),f=K(!1),v=K(Me([])),m=K(Me([])),p=K(!1),g=K(Me([]));function _(j,_e="recettes"){E(l,_e,!0),E(i,j,!0)}function S(){E(i,null)}function b(j,_e,q){E(v,_e,!0),E(m,q,!0),E(j==="who"?c:f,!0)}function y(j){(!j||j==="who")&&E(c,!1),(!j||j==="store")&&E(f,!1),E(v,[],!0),E(m,[],!0)}function $(j){console.log(`[ProductsTable] Modification groupée réussie: ${j.updatedCount} produits`)}function w(j){const _e=j.filter(q=>q.displayMissingQuantity!=="✅ Complet"&&q.missingQuantityArray&&q.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${j.length} produits reçus → ${_e.length} produits avec quantités manquantes`),E(g,_e,!0),E(p,!0)}function P(){E(p,!1),E(g,[],!0)}function k(){console.log("[ProductsTable] Achat groupé créé avec succès"),P()}async function A(j){try{if(!J.currentMainId)throw new Error("mainId non disponible");const _e=j.missingQuantityArray||[];if(_e.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let q=j.$id;j.isSynced||(console.log(`[ProductsTable] Produit ${j.$id} local, création pour validation rapide...`),q=(await Qt(j.$id,{},ye=>J.getEnrichedProductById(ye))).$id,console.log(`[ProductsTable] Produit sync créé: ${q}`)),await To(J.currentMainId,q,_e,{store:j.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${j.productName}`)}catch(_e){console.error("[ProductsTable] Erreur validation rapide:",_e),alert("Erreur lors de la validation rapide: "+_e.message)}}var M=lh(),D=I(M),X=u(D),B=u(X),Q=u(B);Fc(Q,{class:"mr-1 h-4 w-4"});var ee=d(Q),he=d(B,2);he.__click=[ih];var O=u(he);uu(O,{class:"mr-1 h-4 w-4"});var R=d(X,2);oh(R,{width:r,children:(j,_e)=>{Ff(j,{})},$$slots:{default:!0}});var H=d(R,2);Lv(H,{onOpenModal:_,onOpenGroupEditModal:b,onOpenGroupPurchaseModal:w,onQuickValidation:A});var ne=d(D,2);{var C=j=>{bf(j,{get productId(){return o(i)},get initialTab(){return o(l)},onClose:S})};N(ne,j=>{o(i)&&j(C)})}var z=d(ne,2);{var pe=j=>{nh(j,{get productIds(){return o(v)},get products(){return o(m)},onClose:()=>y("who"),onSuccess:$})};N(z,j=>{o(c)&&j(pe)})}var be=d(z,2);{var ge=j=>{Kv(j,{get productIds(){return o(v)},get products(){return o(m)},onClose:()=>y("store"),onSuccess:$})};N(be,j=>{o(f)&&j(ge)})}var de=d(be,2);{var me=j=>{Wu(j,{get products(){return o(g)},onClose:P,onSuccess:k})};N(de,j=>{o(p)&&j(me)})}G(()=>{Ae(D,1,`space-y-6 ${Xr.isMobile?"":"ml-100"}`),V(ee,` ${o(s).total??""}`)}),h(e,M),W()}Ze(["click"]);wi();var uh=x('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function dh(e){var t=uh();h(e,t)}var fh=x('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function vh(e,t){var r=fh(),n=d(u(r),2),a=d(u(n),2),s=u(a);G(()=>V(s,t.message)),h(e,r)}var hh=x('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function ph(e,t){var r=hh(),n=u(r),a=u(n);An(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var s=d(a,2),i=d(u(s),2),l=u(i);G(()=>V(l,t.message||"Erreur inconnue")),h(e,r)}var mh=x('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),gh=x('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),_h=x('<div class="text-base-content/60"> </div>'),bh=x('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),yh=x('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),wh=x('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Sh=x('<div class="bg-base-200 min-h-screen"><header class="bg-base-300 top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function Ph(e,t){U(t,!0);let r,n=K(null),a=K(!0),s=K(!1);Zs(async()=>{r=Dc();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await J.initialize(r)}catch(C){const z=C instanceof Error?C.message:"Erreur lors de l'initialisation";E(n,z,!0),console.error("[App] Erreur initialisation:",C)}finally{E(a,!1)}}),xl(()=>{J.destroy()});async function i(){if(!(!r||o(s))){E(s,!0);try{await J.forceReload(r)}catch(C){console.error("[App] Erreur lors du rechargement forcé:",C)}finally{E(s,!1)}}}const l=Y(()=>o(n)||J.error),c=Y(()=>o(a)||J.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=Sh(),m=u(v),p=u(m),g=u(p),_=d(u(g),2),S=u(_);{var b=C=>{var z=mh();h(C,z)};N(S,C=>{J.realtimeConnected&&C(b)})}var y=d(S,2);{var $=C=>{var z=gh();h(C,z)};N(y,C=>{J.syncing&&C($)})}var w=d(y,2);{var P=C=>{var z=_h(),pe=u(z);G(be=>V(pe,`Maj: ${be??""}`),[()=>new Date(J.lastSync).toLocaleTimeString()]),h(C,z)};N(w,C=>{J.lastSync&&C(P)})}var k=d(w,2);{var A=C=>{var z=bh();let pe;z.__click=i;var be=u(z);du(be,{class:"h-4 w-4"}),G(ge=>{pe=Ae(z,1,"btn btn-outline btn-sm",null,pe,ge),z.disabled=o(s)||J.loading},[()=>({loading:o(s)||J.loading})]),h(C,z)};N(k,C=>{o(n)||C(A)})}var M=d(k,2);{var D=C=>{var z=yh(),pe=u(z),be=u(pe);nu(be,{class:"mr-2 h-4 w-4"}),G(()=>jt(pe,"href",f)),h(C,z)};N(M,C=>{o(n)&&C(D)})}var X=d(m,2),B=u(X);{var Q=C=>{ph(C,{get message(){return o(l)}})},ee=C=>{var z=L(),pe=I(z);{var be=ge=>{vh(ge,{get message(){return o(l)}})};N(pe,ge=>{o(l)&&ge(be)},!0)}h(C,z)};N(B,C=>{o(n)?C(Q):C(ee,!1)})}var he=d(B,2);{var O=C=>{dh(C)};N(he,C=>{o(c)&&C(O)})}var R=d(he,2);{var H=C=>{ch(C,{})},ne=C=>{var z=L(),pe=I(z);{var be=ge=>{var de=wh();h(ge,de)};N(pe,ge=>{!J.loading&&!o(n)&&ge(be)},!0)}h(C,z)};N(R,C=>{J.enrichedProducts.length>0?C(H):C(ne,!1)})}h(e,v),W()}Ze(["click"]);sl(Ph,{target:document.getElementById("app_products")});
