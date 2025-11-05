(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const io=!1;var ls=Array.isArray,Ji=Array.prototype.indexOf,ra=Array.from,qs=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,Yi=Object.getOwnPropertyDescriptors,Zi=Object.prototype,Xi=Array.prototype,lo=Object.getPrototypeOf,xa=Object.isExtensible;function Pn(e){return typeof e=="function"}const te=()=>{};function Fi(e){for(var t=0;t<e.length;t++)e[t]()}function co(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function uo(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const _t=2,na=4,sa=8,qr=16,Ft=32,Br=64,aa=128,kt=256,ss=512,ct=1024,wt=2048,gr=4096,Mt=8192,jr=16384,oa=32768,Lr=65536,Pa=1<<17,el=1<<18,un=1<<19,tl=1<<20,Bs=1<<21,cs=1<<22,Ir=1<<23,Cr=Symbol("$state"),fo=Symbol("legacy props"),rl=Symbol(""),Nn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function vo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function nl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function sl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function al(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ol(e){throw new Error("https://svelte.dev/e/effect_orphan")}function il(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ll(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function cl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ul(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function dl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function fl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const us=1,ds=2,ho=4,vl=8,hl=16,pl=1,_l=2,ml=4,gl=8,bl=16,yl=1,wl=2,et=Symbol(),Sl="http://www.w3.org/1999/xhtml",xl="http://www.w3.org/2000/svg",Pl="@attach";function El(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function $l(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Tl=!1;function po(e){return e===this.v}function _o(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function kl(e,t){return e!==t}function mo(e){return!_o(e,this.v)}let dn=!1,Al=!1;function Nl(){dn=!0}let He=null;function rn(e){He=e}function H(e,t=!1,r){He={p:He,c:null,e:null,s:e,x:null,l:dn&&!t?{s:null,u:null,$:[]}:null}}function K(e){var t=He,r=t.e;if(r!==null){t.e=null;for(var n of r)Do(n)}return He=t.p,{}}function fn(){return!dn||He!==null&&He.l===null}let kr=[];function go(){var e=kr;kr=[],Fi(e)}function Dr(e){if(kr.length===0&&!In){var t=kr;queueMicrotask(()=>{t===kr&&go()})}kr.push(e)}function Il(){for(;kr.length>0;)go()}const Cl=new WeakMap;function bo(e){var t=we;if(t===null)return Pe.f|=Ir,e;if((t.f&oa)===0){if((t.f&aa)===0)throw!t.parent&&e instanceof Error&&yo(e),e;t.b.error(e)}else nn(e,t)}function nn(e,t){for(;t!==null;){if((t.f&aa)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&yo(e),e}function yo(e){const t=Cl.get(e);t&&(qs(e,"message",{value:t.message}),qs(e,"stack",{value:t.stack}))}const Zn=new Set;let Me=null,Fn=null,js=new Set,Ut=[],fs=null,Ls=!1,In=!1;class Tt{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#l=[];#o=[];#i=[];#s=[];#a=[];#d=[];skipped_effects=new Set;process(t){Ut=[],Fn=null;var r=Tt.apply(this);for(const o of t)this.#v(o);if(this.#c===0){this.#f();var n=this.#o,s=this.#i;this.#o=[],this.#i=[],this.#s=[],Fn=this,Me=null,Ea(n),Ea(s),Fn=null,this.#u?.resolve()}else this.#n(this.#o),this.#n(this.#i),this.#n(this.#s);r();for(const o of this.#l)On(o);this.#l=[]}#v(t){t.f^=ct;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Ft|Br))!==0,o=s&&(n&ct)!==0,i=o||(n&Mt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){s?r.f^=ct:(n&na)!==0?this.#i.push(r):(n&ct)===0&&((n&cs)!==0&&r.b?.is_pending()?this.#l.push(r):ms(r)&&((r.f&qr)!==0&&this.#s.push(r),On(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#n(t){for(const r of t)((r.f&wt)!==0?this.#a:this.#d).push(r),ht(r,ct);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){Me=this}deactivate(){Me=null}flush(){if(Ut.length>0){if(this.activate(),wo(),Me!==null&&Me!==this)return}else this.#c===0&&this.#f();this.deactivate();for(const t of js)if(js.delete(t),t(),Me!==null)break}#f(){for(const t of this.#r)t();if(this.#r.clear(),Zn.size>1){this.#e.clear();let t=!0;for(const r of Zn){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;So(n)}if(Ut.length>0){Me=r;const n=Tt.apply(r);for(const s of Ut)r.#v(s);Ut=[],n()}}Me=null}Zn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#a)ht(t,wt),Mr(t);for(const t of this.#d)ht(t,gr),Mr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=co()).promise}static ensure(){if(Me===null){const t=Me=new Tt;Zn.add(Me),In||Tt.enqueue(()=>{Me===t&&t.flush()})}return Me}static enqueue(t){Dr(t)}static apply(t){return te}}function Dl(e){var t=In;In=!0;try{for(var r;;){if(Il(),Ut.length===0&&(Me?.flush(),Ut.length===0))return fs=null,r;wo()}}finally{In=t}}function wo(){var e=en;Ls=!0;try{var t=0;for(Aa(!0);Ut.length>0;){var r=Tt.ensure();if(t++>1e3){var n,s;Ml()}r.process(Ut),vr.clear()}}finally{Ls=!1,Aa(e),fs=null}}function Ml(){try{il()}catch(e){nn(e,fs)}}let Tr=null;function Ea(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(jr|Mt))===0&&ms(n)&&(Tr=[],On(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Oo(n):n.fn=null),Tr?.length>0)){vr.clear();for(const s of Tr)On(s);Tr=[]}}Tr=null}}function So(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&_t)!==0?So(t):(r&(cs|qr))!==0&&(ht(t,wt),Mr(t))}}function Mr(e){for(var t=fs=e;t.parent!==null;){t=t.parent;var r=t.f;if(Ls&&t===we&&(r&qr)!==0)return;if((r&(Br|Ft))!==0){if((r&ct)===0)return;t.f^=ct}}Ut.push(t)}function xo(e){let t=0,r=_r(0),n;return()=>{Yl()&&(a(r),da(()=>(t===0&&(n=hn(()=>e(()=>Vt(r)))),t+=1,()=>{Dr(()=>{t-=1,t===0&&(n?.(),n=void 0,Vt(r))})})))}}var Rl=Lr|un|aa;function Ol(e,t,r){new ql(e,t,r)}class ql{parent;#e=!1;#r;#c=null;#u;#l;#o;#i=null;#s=null;#a=null;#d=null;#v=0;#n=0;#f=!1;#h=null;#t=()=>{this.#h&&sn(this.#h,this.#v)};#g=xo(()=>(this.#h=_r(this.#v),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#l=n,this.parent=we.b,this.#e=!!this.#u.pending,this.#o=rr(()=>{we.b=this;{try{this.#i=at(()=>n(this.#r))}catch(s){this.error(s)}this.#n>0?this.#_():this.#e=!1}},Rl)}#w(){try{this.#i=at(()=>this.#l(this.#r))}catch(t){this.error(t)}this.#e=!1}#S(){const t=this.#u.pending;t&&(this.#s=at(()=>t(this.#r)),Tt.enqueue(()=>{this.#i=this.#p(()=>(Tt.ensure(),at(()=>this.#l(this.#r)))),this.#n>0?this.#_():(Yt(this.#s,()=>{this.#s=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#p(t){var r=we,n=Pe,s=He;Wt(this.#o),pt(this.#o),rn(this.#o.ctx);try{return t()}catch(o){return bo(o),null}finally{Wt(r),pt(n),rn(s)}}#_(){const t=this.#u.pending;this.#i!==null&&(this.#d=document.createDocumentFragment(),Bl(this.#i,this.#d)),this.#s===null&&(this.#s=at(()=>t(this.#r)))}#m(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t);return}this.#n+=t,this.#n===0&&(this.#e=!1,this.#s&&Yt(this.#s,()=>{this.#s=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),Dr(()=>{Tt.ensure().flush()}))}update_pending_count(t){this.#m(t),this.#v+=t,js.add(this.#t)}get_effect_pending(){return this.#g(),a(this.#h)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#f||!r&&!n)throw t;this.#i&&(ot(this.#i),this.#i=null),this.#s&&(ot(this.#s),this.#s=null),this.#a&&(ot(this.#a),this.#a=null);var s=!1,o=!1;const i=()=>{if(s){$l();return}s=!0,o&&fl(),Tt.ensure(),this.#v=0,this.#a!==null&&Yt(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#i=this.#p(()=>(this.#f=!1,at(()=>this.#l(this.#r)))),this.#n>0?this.#_():this.#e=!1};var l=Pe;try{pt(null),o=!0,r?.(t,i),o=!1}catch(c){nn(c,this.#o&&this.#o.parent)}finally{pt(l)}n&&Dr(()=>{this.#a=this.#p(()=>{this.#f=!0;try{return at(()=>{n(this.#r,()=>t,()=>i)})}catch(c){return nn(c,this.#o.parent),null}finally{this.#f=!1}})})}}function Bl(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:zn(r);t.append(r),r=s}}function Po(e,t,r){const n=fn()?vs:ia;if(t.length===0){r(e.map(n));return}var s=Me,o=we,i=jl();Promise.all(t.map(l=>Ll(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(o.f&jr)===0&&nn(c,o)}s?.deactivate(),Eo()}).catch(l=>{nn(l,o)})}function jl(){var e=we,t=Pe,r=He,n=Me;return function(){Wt(e),pt(t),rn(r),n?.activate()}}function Eo(){Wt(null),pt(null),rn(null)}function vs(e){var t=_t|wt,r=Pe!==null&&(Pe.f&_t)!==0?Pe:null;return we===null||r!==null&&(r.f&kt)!==0?t|=kt:we.f|=un,{ctx:He,deps:null,effects:null,equals:po,f:t,fn:e,reactions:null,rv:0,v:et,wv:0,parent:r??we,ac:null}}function Ll(e,t){let r=we;r===null&&nl();var n=r.b,s=void 0,o=_r(et),i=!Pe,l=new Map;return Xl(()=>{var c=co();s=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=Me,h=n.is_pending();i&&(n.update_pending_count(1),h||(f.increment(),l.get(f)?.reject(Nn),l.set(f,c)));const m=(p,_=void 0)=>{h||f.activate(),_?_!==Nn&&(o.f|=Ir,sn(o,_)):((o.f&Ir)!==0&&(o.f^=Ir),sn(o,p)),i&&(n.update_pending_count(-1),h||f.decrement()),Eo()};c.promise.then(m,p=>m(null,p||"unknown"))}),Co(()=>{for(const c of l.values())c.reject(Nn)}),new Promise(c=>{function f(h){function m(){h===s?c(o):f(s)}h.then(m,m)}f(s)})}function G(e){const t=vs(e);return jo(t),t}function ia(e){const t=vs(e);return t.equals=mo,t}function $o(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)ot(t[r])}}function zl(e){for(var t=e.parent;t!==null;){if((t.f&_t)===0)return t;t=t.parent}return null}function la(e){var t,r=we;Wt(zl(e));try{$o(e),t=Vo(e)}finally{Wt(r)}return t}function To(e){var t=la(e);if(e.equals(t)||(e.v=t,e.wv=zo()),!zr){var r=(dr||(e.f&kt)!==0)&&e.deps!==null?gr:ct;ht(e,r)}}const vr=new Map;function _r(e,t){var r={f:0,v:e,reactions:null,equals:po,rv:0,wv:0};return r}function Y(e,t){const r=_r(e);return jo(r),r}function Ul(e,t=!1,r=!0){const n=_r(e);return t||(n.equals=mo),dn&&r&&He!==null&&He.l!==null&&(He.l.s??=[]).push(n),n}function $(e,t,r=!1){Pe!==null&&(!Dt||(Pe.f&Pa)!==0)&&fn()&&(Pe.f&(_t|qr|cs|Pa))!==0&&!Zt?.includes(e)&&dl();let n=r?je(t):t;return sn(e,n)}function sn(e,t){if(!e.equals(t)){var r=e.v;zr?vr.set(e,t):vr.set(e,r),e.v=t;var n=Tt.ensure();n.capture(e,r),(e.f&_t)!==0&&((e.f&wt)!==0&&la(e),ht(e,(e.f&kt)===0?ct:gr)),e.wv=zo(),ko(e,wt),fn()&&we!==null&&(we.f&ct)!==0&&(we.f&(Ft|Br))===0&&($t===null?tc([e]):$t.push(e))}return t}function Vt(e){$(e,e.v+1)}function ko(e,t){var r=e.reactions;if(r!==null)for(var n=fn(),s=r.length,o=0;o<s;o++){var i=r[o],l=i.f;if(!(!n&&i===we)){var c=(l&wt)===0;c&&ht(i,t),(l&_t)!==0?ko(i,gr):c&&((l&qr)!==0&&Tr!==null&&Tr.push(i),Mr(i))}}}function je(e){if(typeof e!="object"||e===null||Cr in e)return e;const t=lo(e);if(t!==Zi&&t!==Xi)return e;var r=new Map,n=ls(e),s=Y(0),o=Xt,i=l=>{if(Xt===o)return l();var c=Pe,f=Xt;pt(null),Ia(o);var h=l();return pt(c),Ia(f),h};return n&&r.set("length",Y(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&cl();var h=r.get(c);return h===void 0?h=i(()=>{var m=Y(f.value);return r.set(c,m),m}):$(h,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const h=i(()=>Y(et));r.set(c,h),Vt(s)}}else $(f,et),Vt(s);return!0},get(l,c,f){if(c===Cr)return e;var h=r.get(c),m=c in l;if(h===void 0&&(!m||fr(l,c)?.writable)&&(h=i(()=>{var _=je(m?l[c]:et),g=Y(_);return g}),r.set(c,h)),h!==void 0){var p=a(h);return p===et?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var h=r.get(c);h&&(f.value=a(h))}else if(f===void 0){var m=r.get(c),p=m?.v;if(m!==void 0&&p!==et)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===Cr)return!0;var f=r.get(c),h=f!==void 0&&f.v!==et||Reflect.has(l,c);if(f!==void 0||we!==null&&(!h||fr(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=h?je(l[c]):et,_=Y(p);return _}),r.set(c,f));var m=a(f);if(m===et)return!1}return h},set(l,c,f,h){var m=r.get(c),p=c in l;if(n&&c==="length")for(var _=f;_<m.v;_+=1){var g=r.get(_+"");g!==void 0?$(g,et):_ in l&&(g=i(()=>Y(et)),r.set(_+"",g))}if(m===void 0)(!p||fr(l,c)?.writable)&&(m=i(()=>Y(void 0)),$(m,je(f)),r.set(c,m));else{p=m.v!==et;var x=i(()=>je(f));$(m,x)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(h,f),!p){if(n&&typeof c=="string"){var y=r.get("length"),k=Number(c);Number.isInteger(k)&&k>=y.v&&$(y,k+1)}Vt(s)}return!0},ownKeys(l){a(s);var c=Reflect.ownKeys(l).filter(m=>{var p=r.get(m);return p===void 0||p.v!==et});for(var[f,h]of r)h.v!==et&&!(f in l)&&c.push(f);return c},setPrototypeOf(){ul()}})}function $a(e){try{if(e!==null&&typeof e=="object"&&Cr in e)return e[Cr]}catch{}return e}function Vl(e,t){return Object.is($a(e),$a(t))}var Ta,Ao,No,Io;function Wl(){if(Ta===void 0){Ta=window,Ao=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;No=fr(t,"firstChild").get,Io=fr(t,"nextSibling").get,xa(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),xa(r)&&(r.__t=void 0)}}function er(e=""){return document.createTextNode(e)}function an(e){return No.call(e)}function zn(e){return Io.call(e)}function u(e,t){return an(e)}function O(e,t=!1){{var r=an(e);return r instanceof Comment&&r.data===""?zn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=zn(n);return n}function Gl(e){e.textContent=""}function hs(){return!1}function Ql(e,t){if(t){const r=document.body;e.autofocus=!0,Dr(()=>{document.activeElement===r&&e.focus()})}}let ka=!1;function Hl(){ka||(ka=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function ps(e){var t=Pe,r=we;pt(null),Wt(null);try{return e()}finally{pt(t),Wt(r)}}function ca(e,t,r,n=r){e.addEventListener(t,()=>ps(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),Hl()}function Kl(e){we===null&&Pe===null&&ol(),Pe!==null&&(Pe.f&kt)!==0&&we===null&&al(),zr&&sl()}function Jl(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function tr(e,t,r,n=!0){var s=we;s!==null&&(s.f&Mt)!==0&&(e|=Mt);var o={ctx:He,deps:null,nodes_start:null,nodes_end:null,f:e|wt,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{On(o),o.f|=oa}catch(c){throw ot(o),c}else t!==null&&Mr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&un)===0&&(i=i.first),i!==null&&(i.parent=s,s!==null&&Jl(i,s),Pe!==null&&(Pe.f&_t)!==0&&(e&Br)===0)){var l=Pe;(l.effects??=[]).push(i)}}return o}function Yl(){return Pe!==null&&!Dt}function Co(e){const t=tr(sa,null,!1);return ht(t,ct),t.teardown=e,t}function vn(e){Kl();var t=we.f,r=!Pe&&(t&Ft)!==0&&(t&oa)===0;if(r){var n=He;(n.e??=[]).push(e)}else return Do(e)}function Do(e){return tr(na|tl,e,!1)}function Zl(e){Tt.ensure();const t=tr(Br|un,e,!0);return(r={})=>new Promise(n=>{r.outro?Yt(t,()=>{ot(t),n(void 0)}):(ot(t),n(void 0))})}function ua(e){return tr(na,e,!1)}function Xl(e){return tr(cs|un,e,!0)}function da(e,t=0){return tr(sa|t,e,!0)}function q(e,t=[],r=[]){Po(t,r,n=>{tr(sa,()=>e(...n.map(a)),!0)})}function rr(e,t=0){var r=tr(qr|t,e,!0);return r}function at(e,t=!0){return tr(Ft|un,e,!0,t)}function Mo(e){var t=e.teardown;if(t!==null){const r=zr,n=Pe;Na(!0),pt(null);try{t.call(null)}finally{Na(r),pt(n)}}}function Ro(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&ps(()=>{s.abort(Nn)});var n=r.next;(r.f&Br)!==0?r.parent=null:ot(r,t),r=n}}function Fl(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ft)===0&&ot(t),t=r}}function ot(e,t=!0){var r=!1;(t||(e.f&el)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(ec(e.nodes_start,e.nodes_end),r=!0),Ro(e,t&&!r),as(e,0),ht(e,jr);var n=e.transitions;if(n!==null)for(const o of n)o.stop();Mo(e);var s=e.parent;s!==null&&s.first!==null&&Oo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function ec(e,t){for(;e!==null;){var r=e===t?null:zn(e);e.remove(),e=r}}function Oo(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Yt(e,t){var r=[];fa(e,r,!0),qo(r,()=>{ot(e),t&&t()})}function qo(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function fa(e,t,r){if((e.f&Mt)===0){if(e.f^=Mt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var s=n.next,o=(n.f&Lr)!==0||(n.f&Ft)!==0;fa(n,t,o?r:!1),n=s}}}function _s(e){Bo(e,!0)}function Bo(e,t){if((e.f&Mt)!==0){e.f^=Mt,(e.f&ct)===0&&(ht(e,wt),Mr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&Lr)!==0||(r.f&Ft)!==0;Bo(r,s?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let en=!1;function Aa(e){en=e}let zr=!1;function Na(e){zr=e}let Pe=null,Dt=!1;function pt(e){Pe=e}let we=null;function Wt(e){we=e}let Zt=null;function jo(e){Pe!==null&&(Zt===null?Zt=[e]:Zt.push(e))}let ft=null,yt=0,$t=null;function tc(e){$t=e}let Lo=1,Rn=0,Xt=Rn;function Ia(e){Xt=e}let dr=!1;function zo(){return++Lo}function ms(e){var t=e.f;if((t&wt)!==0)return!0;if((t&gr)!==0){var r=e.deps,n=(t&kt)!==0;if(r!==null){var s,o,i=(t&ss)!==0,l=n&&we!==null&&!dr,c=r.length;if((i||l)&&(we===null||(we.f&jr)===0)){var f=e,h=f.parent;for(s=0;s<c;s++)o=r[s],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=ss),l&&h!==null&&(h.f&kt)===0&&(f.f^=kt)}for(s=0;s<c;s++)if(o=r[s],ms(o)&&To(o),o.wv>e.wv)return!0}(!n||we!==null&&!dr)&&ht(e,ct)}return!1}function Uo(e,t,r=!0){var n=e.reactions;if(n!==null&&!Zt?.includes(e))for(var s=0;s<n.length;s++){var o=n[s];(o.f&_t)!==0?Uo(o,t,!1):t===o&&(r?ht(o,wt):(o.f&ct)!==0&&ht(o,gr),Mr(o))}}function Vo(e){var t=ft,r=yt,n=$t,s=Pe,o=dr,i=Zt,l=He,c=Dt,f=Xt,h=e.f;ft=null,yt=0,$t=null,dr=(h&kt)!==0&&(Dt||!en||Pe===null),Pe=(h&(Ft|Br))===0?e:null,Zt=null,rn(e.ctx),Dt=!1,Xt=++Rn,e.ac!==null&&(ps(()=>{e.ac.abort(Nn)}),e.ac=null);try{e.f|=Bs;var m=e.fn,p=m(),_=e.deps;if(ft!==null){var g;if(as(e,yt),_!==null&&yt>0)for(_.length=yt+ft.length,g=0;g<ft.length;g++)_[yt+g]=ft[g];else e.deps=_=ft;if(!dr||(h&_t)!==0&&e.reactions!==null)for(g=yt;g<_.length;g++)(_[g].reactions??=[]).push(e)}else _!==null&&yt<_.length&&(as(e,yt),_.length=yt);if(fn()&&$t!==null&&!Dt&&_!==null&&(e.f&(_t|gr|wt))===0)for(g=0;g<$t.length;g++)Uo($t[g],e);return s!==null&&s!==e&&(Rn++,$t!==null&&(n===null?n=$t:n.push(...$t))),(e.f&Ir)!==0&&(e.f^=Ir),p}catch(x){return bo(x)}finally{e.f^=Bs,ft=t,yt=r,$t=n,Pe=s,dr=o,Zt=i,rn(l),Dt=c,Xt=f}}function rc(e,t){let r=t.reactions;if(r!==null){var n=Ji.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&_t)!==0&&(ft===null||!ft.includes(t))&&(ht(t,gr),(t.f&(kt|ss))===0&&(t.f^=ss),$o(t),as(t,0))}function as(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)rc(e,r[n])}function On(e){var t=e.f;if((t&jr)===0){ht(e,ct);var r=we,n=en;we=e,en=!0;try{(t&qr)!==0?Fl(e):Ro(e),Mo(e);var s=Vo(e);e.teardown=typeof s=="function"?s:null,e.wv=Lo;var o;io&&Al&&(e.f&wt)!==0&&e.deps}finally{en=n,we=r}}}async function nc(){await Promise.resolve(),Dl()}function a(e){var t=e.f,r=(t&_t)!==0;if(Pe!==null&&!Dt){var n=we!==null&&(we.f&jr)!==0;if(!n&&!Zt?.includes(e)){var s=Pe.deps;if((Pe.f&Bs)!==0)e.rv<Rn&&(e.rv=Rn,ft===null&&s!==null&&s[yt]===e?yt++:ft===null?ft=[e]:(!dr||!ft.includes(e))&&ft.push(e));else{(Pe.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[Pe]:o.includes(Pe)||o.push(Pe)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&kt)===0&&(i.f^=kt)}if(zr){if(vr.has(e))return vr.get(e);if(r){i=e;var c=i.v;return((i.f&ct)===0&&i.reactions!==null||Wo(i))&&(c=la(i)),vr.set(i,c),c}}else r&&(i=e,ms(i)&&To(i));if((e.f&Ir)!==0)throw e.v;return e.v}function Wo(e){if(e.v===et)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(vr.has(t)||(t.f&_t)!==0&&Wo(t))return!0;return!1}function hn(e){var t=Dt;try{return Dt=!0,e()}finally{Dt=t}}const sc=-7169;function ht(e,t){e.f=e.f&sc|t}function ac(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const oc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ic(e){return oc.includes(e)}const lc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function cc(e){return e=e.toLowerCase(),lc[e]??e}const uc=["touchstart","touchmove"];function dc(e){return uc.includes(e)}const Go=new Set,zs=new Set;function Qo(e,t,r,n={}){function s(o){if(n.capture||kn.call(t,o),!o.cancelBubble)return ps(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Dr(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Ca(e,t,r,n={}){var s=Qo(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function ut(e){for(var t=0;t<e.length;t++)Go.add(e[t]);for(var r of zs)r(e)}let Da=null;function kn(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],o=s[0]||e.target;Da=e;var i=0,l=Da===e&&e.__root;if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=s.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(o=s[i]||e.target,o!==t){qs(e,"currentTarget",{configurable:!0,get(){return o||r}});var h=Pe,m=we;pt(null),Wt(null);try{for(var p,_=[];o!==null;){var g=o.assignedSlot||o.parentNode||o.host||null;try{var x=o["__"+n];if(x!=null&&(!o.disabled||e.target===o))if(ls(x)){var[b,...y]=x;b.apply(o,[e,...y])}else x.call(o,e)}catch(k){p?_.push(k):p=k}if(e.cancelBubble||g===t||g===null)break;o=g}if(p){for(let k of _)queueMicrotask(()=>{throw k});throw p}}finally{e.__root=t,delete e.currentTarget,pt(h),Wt(m)}}}function Ho(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function on(e,t){var r=we;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function w(e,t){var r=(t&yl)!==0,n=(t&wl)!==0,s,o=!e.startsWith("<!>");return()=>{s===void 0&&(s=Ho(o?e:"<!>"+e),r||(s=an(s)));var i=n||Ao?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=an(i),c=i.lastChild;on(l,c)}else on(i,i);return i}}function fc(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Ho(s),l=an(i);o=an(l)}var c=o.cloneNode(!0);return on(c,c),c}}function vc(e,t){return fc(e,t,"svg")}function lt(e=""){{var t=er(e+"");return on(t,t),t}}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),r=er();return e.append(t,r),on(t,r),e}function v(e,t){e!==null&&e.before(t)}function R(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function hc(e,t){return pc(e,t)}const Zr=new Map;function pc(e,{target:t,anchor:r,props:n={},events:s,context:o,intro:i=!0}){Wl();var l=new Set,c=m=>{for(var p=0;p<m.length;p++){var _=m[p];if(!l.has(_)){l.add(_);var g=dc(_);t.addEventListener(_,kn,{passive:g});var x=Zr.get(_);x===void 0?(document.addEventListener(_,kn,{passive:g}),Zr.set(_,1)):Zr.set(_,x+1)}}};c(ra(Go)),zs.add(c);var f=void 0,h=Zl(()=>{var m=r??t.appendChild(er());return Ol(m,{pending:()=>{}},p=>{if(o){H({});var _=He;_.c=o}s&&(n.$$events=s),f=e(p,n)||{},o&&K()}),()=>{for(var p of l){t.removeEventListener(p,kn);var _=Zr.get(p);--_===0?(document.removeEventListener(p,kn),Zr.delete(p)):Zr.set(p,_)}zs.delete(c),m!==r&&m.parentNode?.removeChild(m)}});return _c.set(f,h),f}let _c=new WeakMap;function A(e,t,r=!1){var n=e,s=null,o=null,i=et,l=r?Lr:0,c=!1;const f=(_,g=!0)=>{c=!0,p(g,_)};var h=null;function m(){h!==null&&(h.lastChild.remove(),n.before(h),h=null);var _=i?s:o,g=i?o:s;_&&_s(_),g&&Yt(g,()=>{i?o=null:s=null})}const p=(_,g)=>{if(i!==(i=_)){var x=hs(),b=n;if(x&&(h=document.createDocumentFragment(),h.append(b=er())),i?s??=g&&at(()=>g(b)):o??=g&&at(()=>g(b)),x){var y=Me,k=i?s:o,S=i?o:s;k&&y.skipped_effects.delete(k),S&&y.skipped_effects.add(S),y.add_callback(m)}else m()}};rr(()=>{c=!1,t(f),c||p(null,null)},l)}function mc(e,t,r){var n=e,s=et,o,i,l=null,c=fn()?kl:_o;function f(){o&&Yt(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}rr(()=>{if(c(s,s=t())){var h=n,m=hs();m&&(l=document.createDocumentFragment(),l.append(h=er())),i=at(()=>r(h)),m?Me.add_callback(f):f()}})}function Us(e,t){return t}function gc(e,t,r){for(var n=e.items,s=[],o=t.length,i=0;i<o;i++)fa(t[i].e,s,!0);var l=o>0&&s.length===0&&r!==null;if(l){var c=r.parentNode;Gl(c),c.append(r),n.clear(),zt(e,t[0].prev,t[o-1].next)}qo(s,()=>{for(var f=0;f<o;f++){var h=t[f];l||(n.delete(h.k),zt(e,h.prev,h.next)),ot(h.e,!l)}})}function tt(e,t,r,n,s,o=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&ho)!==0;if(c){var f=e;i=f.appendChild(er())}var h=null,m=!1,p=new Map,_=ia(()=>{var y=r();return ls(y)?y:y==null?[]:ra(y)}),g,x;function b(){bc(x,g,l,p,i,s,t,n,r),o!==null&&(g.length===0?h?_s(h):h=at(()=>o(i)):h!==null&&Yt(h,()=>{h=null}))}rr(()=>{x??=we,g=a(_);var y=g.length;if(!(m&&y===0)){m=y===0;var k,S,P,E;if(hs()){var N=new Set,I=Me;for(S=0;S<y;S+=1){P=g[S],E=n(P,S);var C=l.items.get(E)??p.get(E);C?(t&(us|ds))!==0&&Ko(C,P,S,t):(k=Jo(null,l,null,null,P,E,S,s,t,r,!0),p.set(E,k)),N.add(E)}for(const[ue,J]of l.items)N.has(ue)||I.skipped_effects.add(J.e);I.add_callback(b)}else b();a(_)}})}function bc(e,t,r,n,s,o,i,l,c){var f=(i&vl)!==0,h=(i&(us|ds))!==0,m=t.length,p=r.items,_=r.first,g=_,x,b=null,y,k=[],S=[],P,E,N,I;if(f)for(I=0;I<m;I+=1)P=t[I],E=l(P,I),N=p.get(E),N!==void 0&&(N.a?.measure(),(y??=new Set).add(N));for(I=0;I<m;I+=1){if(P=t[I],E=l(P,I),N=p.get(E),N===void 0){var C=n.get(E);if(C!==void 0){n.delete(E),p.set(E,C);var ue=b?b.next:g;zt(r,b,C),zt(r,C,ue),Is(C,ue,s),b=C}else{var J=g?g.e.nodes_start:s;b=Jo(J,r,b,b===null?r.first:b.next,P,E,I,o,i,c)}p.set(E,b),k=[],S=[],g=b.next;continue}if(h&&Ko(N,P,I,i),(N.e.f&Mt)!==0&&(_s(N.e),f&&(N.a?.unfix(),(y??=new Set).delete(N))),N!==g){if(x!==void 0&&x.has(N)){if(k.length<S.length){var L=S[0],Z;b=L.prev;var re=k[0],D=k[k.length-1];for(Z=0;Z<k.length;Z+=1)Is(k[Z],L,s);for(Z=0;Z<S.length;Z+=1)x.delete(S[Z]);zt(r,re.prev,D.next),zt(r,b,re),zt(r,D,L),g=L,b=D,I-=1,k=[],S=[]}else x.delete(N),Is(N,g,s),zt(r,N.prev,N.next),zt(r,N,b===null?r.first:b.next),zt(r,b,N),b=N;continue}for(k=[],S=[];g!==null&&g.k!==E;)(g.e.f&Mt)===0&&(x??=new Set).add(g),S.push(g),g=g.next;if(g===null)continue;N=g}k.push(N),b=N,g=N.next}if(g!==null||x!==void 0){for(var j=x===void 0?[]:ra(x);g!==null;)(g.e.f&Mt)===0&&j.push(g),g=g.next;var F=j.length;if(F>0){var $e=(i&ho)!==0&&m===0?s:null;if(f){for(I=0;I<F;I+=1)j[I].a?.measure();for(I=0;I<F;I+=1)j[I].a?.fix()}gc(r,j,$e)}}f&&Dr(()=>{if(y!==void 0)for(N of y)N.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var B of n.values())ot(B.e);n.clear()}function Ko(e,t,r,n){(n&us)!==0&&sn(e.v,t),(n&ds)!==0?sn(e.i,r):e.i=r}function Jo(e,t,r,n,s,o,i,l,c,f,h){var m=(c&us)!==0,p=(c&hl)===0,_=m?p?Ul(s,!1,!1):_r(s):s,g=(c&ds)===0?i:_r(i),x={i:g,v:_,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=er())}return x.e=at(()=>l(e,_,g,f),Tl),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?h||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function Is(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=zn(o);s.before(o),o=i}}function zt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ne(e,t,...r){var n=e,s=te,o;rr(()=>{s!==(s=t())&&(o&&(ot(o),o=null),o=at(()=>s(n,...r)))},Lr)}function Ar(e,t,r){var n=e,s,o,i=null,l=null;function c(){o&&(Yt(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}rr(()=>{if(s!==(s=t())){var f=hs();if(s){var h=n;f&&(i=document.createDocumentFragment(),i.append(h=er()),o&&Me.skipped_effects.add(o)),l=at(()=>r(h,s))}f?Me.add_callback(c):c()}},Lr)}function yc(e,t,r,n,s,o){var i,l,c=null,f=e,h;rr(()=>{const m=t()||null;var p=xl;m!==i&&(h&&(m===null?Yt(h,()=>{h=null,l=null}):m===l?_s(h):ot(h)),m&&m!==l&&(h=at(()=>{if(c=document.createElementNS(p,m),on(c,c),n){var _=c.appendChild(er());n(c,_)}we.nodes_end=c,f.before(c)})),i=m,i&&(l=i))},Lr)}function wc(e,t){var r=void 0,n;rr(()=>{r!==(r=t())&&(n&&(ot(n),n=null),r&&(n=at(()=>{ua(()=>r(e))})))})}function Yo(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Yo(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Sc(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Yo(e))&&(n&&(n+=" "),n+=t);return n}function Zo(e){return typeof e=="object"?Sc(e):e??""}const Ma=[...` 	
\r\f \v\uFEFF`];function xc(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var o=s.length,i=0;(i=n.indexOf(s,i))>=0;){var l=i+o;(i===0||Ma.includes(n[i-1]))&&(l===n.length||Ma.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Ra(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var o=e[s];o!=null&&o!==""&&(n+=" "+s+": "+o+r)}return n}function Cs(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Pc(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Cs)),s&&c.push(...Object.keys(s).map(Cs));var f=0,h=-1;const x=e.length;for(var m=0;m<x;m++){var p=e[m];if(l?p==="/"&&e[m-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[m+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&h===-1)h=m;else if(p===";"||m===x-1){if(h!==-1){var _=Cs(e.substring(f,h).trim());if(!c.includes(_)){p!==";"&&m++;var g=e.substring(f,m).trim();r+=" "+g+";"}}f=m+1,h=-1}}}}return n&&(r+=Ra(n)),s&&(r+=Ra(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ae(e,t,r,n,s,o){var i=e.__className;if(i!==r||i===void 0){var l=xc(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&s!==o)for(var c in o){var f=!!o[c];(s==null||f!==!!s[c])&&e.classList.toggle(c,f)}return o}function Ds(e,t={},r,n){for(var s in r){var o=r[s];t[s]!==o&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,o,n))}}function Xo(e,t,r,n){var s=e.__style;if(s!==t){var o=Pc(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(Ds(e,r?.[0],n[0]),Ds(e,r?.[1],n[1],"important")):Ds(e,r,n));return n}function os(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ls(t))return El();for(var n of e.options)n.selected=t.includes(Cn(n));return}for(n of e.options){var s=Cn(n);if(Vl(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Fo(e){var t=new MutationObserver(()=>{os(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Co(()=>{t.disconnect()})}function Nr(e,t,r=t){var n=!0;ca(e,"change",s=>{var o=s?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),Cn);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&Cn(l)}r(i)}),ua(()=>{var s=t();if(os(e,s,n),n&&s===void 0){var o=e.querySelector(":checked");o!==null&&(s=Cn(o),r(s))}e.__value=s,n=!1}),Fo(e)}function Cn(e){return"__value"in e?e.__value:e.value}const En=Symbol("class"),$n=Symbol("style"),ei=Symbol("is custom element"),ti=Symbol("is html");function Ec(e,t){var r=gs(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function tn(e,t){var r=gs(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function $c(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Rr(e,t,r,n){var s=gs(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[rl]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ri(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Tc(e,t,r,n,s=!1,o=!1){var i=gs(e),l=i[ei],c=!i[ti],f=t||{},h=e.tagName==="OPTION";for(var m in t)m in r||(r[m]=null);r.class?r.class=Zo(r.class):r[En]&&(r.class=null),r[$n]&&(r.style??=null);var p=ri(e);for(const P in r){let E=r[P];if(h&&P==="value"&&E==null){e.value=e.__value="",f[P]=E;continue}if(P==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ae(e,_,E,n,t?.[En],r[En]),f[P]=E,f[En]=r[En];continue}if(P==="style"){Xo(e,E,t?.[$n],r[$n]),f[P]=E,f[$n]=r[$n];continue}var g=f[P];if(!(E===g&&!(E===void 0&&e.hasAttribute(P)))){f[P]=E;var x=P[0]+P[1];if(x!=="$$")if(x==="on"){const N={},I="$$"+P;let C=P.slice(2);var b=ic(C);if(ac(C)&&(C=C.slice(0,-7),N.capture=!0),!b&&g){if(E!=null)continue;e.removeEventListener(C,f[I],N),f[I]=null}if(E!=null)if(b)e[`__${C}`]=E,ut([C]);else{let ue=function(J){f[P].call(this,J)};var S=ue;f[I]=Qo(C,e,ue,N)}else b&&(e[`__${C}`]=void 0)}else if(P==="style")Rr(e,P,E);else if(P==="autofocus")Ql(e,!!E);else if(!l&&(P==="__value"||P==="value"&&E!=null))e.value=e.__value=E;else if(P==="selected"&&h)$c(e,E);else{var y=P;c||(y=cc(y));var k=y==="defaultValue"||y==="defaultChecked";if(E==null&&!l&&!k)if(i[P]=null,y==="value"||y==="checked"){let N=e;const I=t===void 0;if(y==="value"){let C=N.defaultValue;N.removeAttribute(y),N.defaultValue=C,N.value=N.__value=I?C:null}else{let C=N.defaultChecked;N.removeAttribute(y),N.defaultChecked=C,N.checked=I?C:!1}}else e.removeAttribute(P);else k||p.includes(y)&&(l||typeof E!="string")?(e[y]=E,y in i&&(i[y]=et)):typeof E!="function"&&Rr(e,y,E)}}}return f}function Oa(e,t,r=[],n=[],s,o=!1,i=!1){Po(r,n,l=>{var c=void 0,f={},h=e.nodeName==="SELECT",m=!1;if(rr(()=>{var _=t(...l.map(a)),g=Tc(e,c,_,s,o,i);m&&h&&"value"in _&&os(e,_.value);for(let b of Object.getOwnPropertySymbols(f))_[b]||ot(f[b]);for(let b of Object.getOwnPropertySymbols(_)){var x=_[b];b.description===Pl&&(!c||x!==c[b])&&(f[b]&&ot(f[b]),f[b]=at(()=>wc(e,()=>x))),g[b]=x}c=g}),h){var p=e;ua(()=>{os(p,c.value,!0),Fo(p)})}m=!0})}function gs(e){return e.__attributes??={[ei]:e.nodeName.includes("-"),[ti]:e.namespaceURI===Sl}}var qa=new Map;function ri(e){var t=e.getAttribute("is")||e.nodeName,r=qa.get(t);if(r)return r;qa.set(t,r=[]);for(var n,s=e,o=Element.prototype;o!==s;){n=Yi(s);for(var i in n)n[i].set&&r.push(i);s=lo(s)}return r}function Re(e,t,r=t){var n=new WeakSet;ca(e,"input",async s=>{var o=s?e.defaultValue:e.value;if(o=Ms(e)?Rs(o):o,r(o),Me!==null&&n.add(Me),await nc(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),hn(t)==null&&e.value&&(r(Ms(e)?Rs(e.value):e.value),Me!==null&&n.add(Me)),da(()=>{var s=t();if(e===document.activeElement){var o=Fn??Me;if(n.has(o))return}Ms(e)&&s===Rs(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function kc(e,t,r=t){ca(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),hn(t)==null&&r(e.checked),da(()=>{var n=t();e.checked=!!n})}function Ms(e){var t=e.type;return t==="number"||t==="range"}function Rs(e){return e===""?null:+e}let Xn=!1;function Ac(e){var t=Xn;try{return Xn=!1,[e(),Xn]}finally{Xn=t}}const Nc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ae(e,t,r){return new Proxy({props:e,exclude:t},Nc)}const Ic={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Pn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];Pn(s)&&(s=s());const o=fr(s,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Pn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=fr(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===Cr||t===fo)return!1;for(let r of e.props)if(Pn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Pn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function le(...e){return new Proxy({props:e},Ic)}function Be(e,t,r,n){var s=!dn||(r&_l)!==0,o=(r&gl)!==0,i=(r&bl)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?hn(n):n),l),h;if(o){var m=Cr in e||fo in e;h=fr(e,t)?.set??(m&&t in e?S=>e[t]=S:void 0)}var p,_=!1;o?[p,_]=Ac(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),h&&(s&&ll(),h(p)));var g;if(s?g=()=>{var S=e[t];return S===void 0?f():(c=!0,S)}:g=()=>{var S=e[t];return S!==void 0&&(l=void 0),S===void 0?l:S},s&&(r&ml)===0)return g;if(h){var x=e.$$legacy;return(function(S,P){return arguments.length>0?((!s||!P||x||_)&&h(P?g():S),S):g()})}var b=!1,y=((r&pl)!==0?vs:ia)(()=>(b=!1,g()));o&&a(y);var k=we;return(function(S,P){if(arguments.length>0){const E=P?a(y):s&&o?je(S):S;return $(y,E),b=!0,l!==void 0&&(l=E),S}return zr&&b||(k.f&jr)!==0?y.v:a(y)})}function ni(e){He===null&&vo(),dn&&He.l!==null?Dc(He).m.push(e):vn(()=>{const t=hn(e);if(typeof t=="function")return t})}function Cc(e){He===null&&vo(),ni(()=>()=>hn(e))}function Dc(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Mc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Mc);const Rc="modulepreload",Oc=function(e){return"/"+e},Ba={},qc=function(t,r,n){let s=Promise.resolve();if(r&&r.length>0){let f=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");s=f(r.map(h=>{if(h=Oc(h),h in Ba)return;Ba[h]=!0;const m=h.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":Rc,m||(_.as="script"),_.crossOrigin="",_.href=h,c&&_.setAttribute("nonce",c),document.head.appendChild(_),m)return new Promise((g,x)=>{_.addEventListener("load",g),_.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};class Bc extends Map{#e=new Map;#r=Y(0);#c=Y(0);#u=Xt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#l(t){return Xt===this.#u?Y(t):_r(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#l(0),r.set(t,n);else return a(this.#r),!1}return a(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#l(0),r.set(t,n);else{a(this.#r);return}}return a(n),super.get(t)}set(t,r){var n=this.#e,s=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#r;if(s===void 0)s=this.#l(0),n.set(t,s),$(this.#c,super.size),Vt(l);else if(o!==r){Vt(s);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!s.reactions?.every(h=>c.has(h));f&&Vt(l)}return i}delete(t){var r=this.#e,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),$(this.#c,super.size),$(n,-1),Vt(this.#r)),s}clear(){if(super.size!==0){super.clear();var t=this.#e;$(this.#c,0);for(var r of t.values())$(r,-1);Vt(this.#r),t.clear()}}#o(){a(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#l(0);t.set(r,n)}}for([,n]of this.#e)a(n)}keys(){return a(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return a(this.#c),super.size}}const jc=typeof window<"u"?window:void 0;function Lc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class zc{#e;#r;constructor(t={}){const{window:r=jc,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=xo(s=>{const o=Ca(r,"focusin",s),i=Ca(r,"focusout",s);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?Lc(this.#e):null}}new zc;function Uc(e){return typeof e=="function"}function Vc(e,t){if(Uc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Wc(e,t){let r=Y(null);const n=G(()=>Vc(t,250));function s(...o){if(a(r))a(r).timeout&&clearTimeout(a(r).timeout);else{let i,l;const c=new Promise((f,h)=>{i=f,l=h});$(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return a(r).runner=async()=>{if(!a(r))return;const i=a(r);$(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},a(r).timeout=setTimeout(a(r).runner,a(n)),a(r).promise}return s.cancel=async()=>{(!a(r)||a(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!a(r)||a(r).timeout===null)||(clearTimeout(a(r).timeout),a(r).reject("Cancelled"),$(r,null))},s.runScheduledNow=async()=>{(!a(r)||!a(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!a(r)||!a(r).timeout)||(clearTimeout(a(r).timeout),a(r).timeout=null,await a(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!a(r)?.timeout}}),s}function Gc(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),s=new Date(r),o=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=s});return o.length?Dn(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function An(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function es(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Dn(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function ts(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>Vs(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const s=[],o=[];r.forEach((l,c)=>{const f=n.get(c)||0,h=l-f;h>0&&(s.push({q:h,u:c}),o.push(Vs(h.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:s,display:i}}function Xr(e){return e?.length?e.map(t=>Vs(t.q.toString(),t.u)).join(" et "):"-"}function Vs(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,s=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${s}`}if(!["gr.","ml","kg","l."].includes(t)){let s=(Math.round(r*10)/10).toString();return s.endsWith(",0")&&(s=s.slice(0,-2)),`${s} ${t}`}return`${r} ${t}`}function ja(e){return An(e)}function Qc(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const s=t.get(n)||0;t.set(n,s+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Hc(e,t){return e[t]?.recipes||[]}function Kc(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,s=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([o])=>{const i=new Date(o);return i>=n&&i<=s}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function Jc(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Yc(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Zc(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(s=>{t.push({...s,date:r,dateTimeService:r})})}),t}function Xc(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Qc(t)}function Fc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class T{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}T.equal=(e,t)=>new T("equal",e,t).toString();T.notEqual=(e,t)=>new T("notEqual",e,t).toString();T.lessThan=(e,t)=>new T("lessThan",e,t).toString();T.lessThanEqual=(e,t)=>new T("lessThanEqual",e,t).toString();T.greaterThan=(e,t)=>new T("greaterThan",e,t).toString();T.greaterThanEqual=(e,t)=>new T("greaterThanEqual",e,t).toString();T.isNull=e=>new T("isNull",e).toString();T.isNotNull=e=>new T("isNotNull",e).toString();T.between=(e,t,r)=>new T("between",e,[t,r]).toString();T.startsWith=(e,t)=>new T("startsWith",e,t).toString();T.endsWith=(e,t)=>new T("endsWith",e,t).toString();T.select=e=>new T("select",void 0,e).toString();T.search=(e,t)=>new T("search",e,t).toString();T.orderDesc=e=>new T("orderDesc",e).toString();T.orderAsc=e=>new T("orderAsc",e).toString();T.orderRandom=()=>new T("orderRandom").toString();T.cursorAfter=e=>new T("cursorAfter",void 0,e).toString();T.cursorBefore=e=>new T("cursorBefore",void 0,e).toString();T.limit=e=>new T("limit",void 0,e).toString();T.offset=e=>new T("offset",void 0,e).toString();T.contains=(e,t)=>new T("contains",e,t).toString();T.notContains=(e,t)=>new T("notContains",e,t).toString();T.notSearch=(e,t)=>new T("notSearch",e,t).toString();T.notBetween=(e,t,r)=>new T("notBetween",e,[t,r]).toString();T.notStartsWith=(e,t)=>new T("notStartsWith",e,t).toString();T.notEndsWith=(e,t)=>new T("notEndsWith",e,t).toString();T.createdBefore=e=>new T("createdBefore",void 0,e).toString();T.createdAfter=e=>new T("createdAfter",void 0,e).toString();T.createdBetween=(e,t)=>new T("createdBetween",void 0,[e,t]).toString();T.updatedBefore=e=>new T("updatedBefore",void 0,e).toString();T.updatedAfter=e=>new T("updatedAfter",void 0,e).toString();T.updatedBetween=(e,t)=>new T("updatedBetween",void 0,[e,t]).toString();T.or=e=>new T("or",void 0,e.map(t=>JSON.parse(t))).toString();T.and=e=>new T("and",void 0,e.map(t=>JSON.parse(t))).toString();T.distanceEqual=(e,t,r,n=!0)=>new T("distanceEqual",e,[[t,r,n]]).toString();T.distanceNotEqual=(e,t,r,n=!0)=>new T("distanceNotEqual",e,[[t,r,n]]).toString();T.distanceGreaterThan=(e,t,r,n=!0)=>new T("distanceGreaterThan",e,[[t,r,n]]).toString();T.distanceLessThan=(e,t,r,n=!0)=>new T("distanceLessThan",e,[[t,r,n]]).toString();T.intersects=(e,t)=>new T("intersects",e,[t]).toString();T.notIntersects=(e,t)=>new T("notIntersects",e,[t]).toString();T.crosses=(e,t)=>new T("crosses",e,[t]).toString();T.notCrosses=(e,t)=>new T("notCrosses",e,[t]).toString();T.overlaps=(e,t)=>new T("overlaps",e,[t]).toString();T.notOverlaps=(e,t)=>new T("notOverlaps",e,[t]).toString();T.touches=(e,t)=>new T("touches",e,[t]).toString();T.notTouches=(e,t)=>new T("notTouches",e,[t]).toString();var si,ai;class ln{static custom(t){return t}static unique(t=7){const r=Fc(ln,si,"m",ai).call(ln);let n="";for(let s=0;s<t;s++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}si=ln,ai=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var La;(function(e){e.Totp="totp"})(La||(La={}));var za;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(za||(za={}));var Ua;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Ua||(Ua={}));var Va;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Va||(Va={}));var Wa;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Wa||(Wa={}));var Ga;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Ga||(Ga={}));var Qa;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Qa||(Qa={}));var Ha;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Ha||(Ha={}));var Ka;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Ka||(Ka={}));class eu{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class oi{constructor(t){this.generateIdentifier=t,this.kv=new eu}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class tu extends oi{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function ru(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function nu(e,t){const r=ru(e);if("find"in r)return r.find(t);const n=r;for(let s=0;s<n.length;s++){const o=n[s];if(t(o))return o}}function cn(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function rs(e,t){return e.indexOf(t)!==-1}function Ja(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class su{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return nu(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const au=e=>Object.prototype.toString.call(e).slice(8,-1),ii=e=>typeof e>"u",ou=e=>e===null,qn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Ws=e=>qn(e)&&Object.keys(e).length===0,mr=e=>Array.isArray(e),iu=e=>typeof e=="string",lu=e=>typeof e=="number"&&!isNaN(e),cu=e=>typeof e=="boolean",uu=e=>e instanceof RegExp,Bn=e=>e instanceof Map,jn=e=>e instanceof Set,li=e=>au(e)==="Symbol",du=e=>e instanceof Date&&!isNaN(e.valueOf()),fu=e=>e instanceof Error,Ya=e=>typeof e=="number"&&isNaN(e),vu=e=>cu(e)||ou(e)||ii(e)||lu(e)||iu(e)||li(e),hu=e=>typeof e=="bigint",pu=e=>e===1/0||e===-1/0,_u=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),mu=e=>e instanceof URL,ci=e=>e.replace(/\./g,"\\."),Os=e=>e.map(String).map(ci).join("."),Mn=e=>{const t=[];let r="";for(let s=0;s<e.length;s++){let o=e.charAt(s);if(o==="\\"&&e.charAt(s+1)==="."){r+=".",s++;continue}if(o==="."){t.push(r),r="";continue}r+=o}const n=r;return t.push(n),t};function Lt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ui=[Lt(ii,"undefined",()=>null,()=>{}),Lt(hu,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Lt(du,"Date",e=>e.toISOString(),e=>new Date(e)),Lt(fu,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Lt(uu,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Lt(jn,"set",e=>[...e.values()],e=>new Set(e)),Lt(Bn,"map",e=>[...e.entries()],e=>new Map(e)),Lt(e=>Ya(e)||pu(e),"number",e=>Ya(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Lt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Lt(mu,"URL",e=>e.toString(),e=>new URL(e))];function bs(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const di=bs((e,t)=>li(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),gu=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),fi=bs(_u,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=gu[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function vi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const hi=bs(vi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(s=>{n[s]=e[s]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),pi=bs((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),bu=[hi,di,pi,fi],Za=(e,t)=>{const r=Ja(bu,s=>s.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ja(ui,s=>s.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},_i={};ui.forEach(e=>{_i[e.annotation]=e});const yu=(e,t,r)=>{if(mr(t))switch(t[0]){case"symbol":return di.untransform(e,t,r);case"class":return hi.untransform(e,t,r);case"custom":return pi.untransform(e,t,r);case"typed-array":return fi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=_i[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Fr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function mi(e){if(rs(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(rs(e,"prototype"))throw new Error("prototype is not allowed as a property");if(rs(e,"constructor"))throw new Error("constructor is not allowed as a property")}const wu=(e,t)=>{mi(t);for(let r=0;r<t.length;r++){const n=t[r];if(jn(e))e=Fr(e,+n);else if(Bn(e)){const s=+n,o=+t[++r]==0?"key":"value",i=Fr(e,s);switch(o){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Gs=(e,t,r)=>{if(mi(t),t.length===0)return r(e);let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];if(mr(n)){const l=+i;n=n[l]}else if(qn(n))n=n[i];else if(jn(n)){const l=+i;n=Fr(n,l)}else if(Bn(n)){if(o===t.length-2)break;const c=+i,f=+t[++o]==0?"key":"value",h=Fr(n,c);switch(f){case"key":n=h;break;case"value":n=n.get(h);break}}}const s=t[t.length-1];if(mr(n)?n[+s]=r(n[+s]):qn(n)&&(n[s]=r(n[s])),jn(n)){const o=Fr(n,+s),i=r(o);o!==i&&(n.delete(o),n.add(i))}if(Bn(n)){const o=+t[t.length-2],i=Fr(n,o);switch(+s==0?"key":"value"){case"key":{const c=r(i);n.set(c,n.get(i)),c!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Qs(e,t,r=[]){if(!e)return;if(!mr(e)){cn(e,(o,i)=>Qs(o,t,[...r,...Mn(i)]));return}const[n,s]=e;s&&cn(s,(o,i)=>{Qs(o,t,[...r,...Mn(i)])}),t(n,r)}function Su(e,t,r){return Qs(t,(n,s)=>{e=Gs(e,s,o=>yu(o,n,r))}),e}function xu(e,t){function r(n,s){const o=wu(e,Mn(s));n.map(Mn).forEach(i=>{e=Gs(e,i,()=>o)})}if(mr(t)){const[n,s]=t;n.forEach(o=>{e=Gs(e,Mn(o),()=>e)}),s&&cn(s,r)}else cn(t,r);return e}const Pu=(e,t)=>qn(e)||mr(e)||Bn(e)||jn(e)||vi(e,t);function Eu(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function $u(e,t){const r={};let n;return e.forEach(s=>{if(s.length<=1)return;t||(s=s.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[o,...i]=s;o.length===0?n=i.map(Os):r[Os(o)]=i.map(Os)}),n?Ws(r)?[n]:[n,r]:Ws(r)?void 0:r}const gi=(e,t,r,n,s=[],o=[],i=new Map)=>{const l=vu(e);if(!l){Eu(e,s,t);const _=i.get(e);if(_)return n?{transformedValue:null}:_}if(!Pu(e,r)){const _=Za(e,r),g=_?{transformedValue:_.value,annotations:[_.type]}:{transformedValue:e};return l||i.set(e,g),g}if(rs(o,e))return{transformedValue:null};const c=Za(e,r),f=c?.value??e,h=mr(f)?[]:{},m={};cn(f,(_,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const x=gi(_,t,r,n,[...s,g],[...o,e],i);h[g]=x.transformedValue,mr(x.annotations)?m[g]=x.annotations:qn(x.annotations)&&cn(x.annotations,(b,y)=>{m[ci(g)+"."+y]=b})});const p=Ws(m)?{transformedValue:h,annotations:c?[c.type]:void 0}:{transformedValue:h,annotations:c?[c.type,m]:m};return l||i.set(e,p),p};function bi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Xa(e){return bi(e)==="Array"}function Tu(e){if(bi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function ku(e,t,r,n,s){const o={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),s&&o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Hs(e,t={}){if(Xa(e))return e.map(s=>Hs(s,t));if(!Tu(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((s,o)=>{if(Xa(t.props)&&!t.props.includes(o))return s;const i=e[o],l=Hs(i,t);return ku(s,o,l,e,t.nonenumerable),s},{})}class qe{constructor({dedupe:t=!1}={}){this.classRegistry=new tu,this.symbolRegistry=new oi(r=>r.description??""),this.customTransformerRegistry=new su,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=gi(t,r,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const o=$u(r,this.dedupe);return o&&(s.meta={...s.meta,referentialEqualities:o}),s}deserialize(t){const{json:r,meta:n}=t;let s=Hs(r);return n?.values&&(s=Su(s,n.values,this)),n?.referentialEqualities&&(s=xu(s,n.referentialEqualities)),s}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}qe.defaultInstance=new qe;qe.serialize=qe.defaultInstance.serialize.bind(qe.defaultInstance);qe.deserialize=qe.defaultInstance.deserialize.bind(qe.defaultInstance);qe.stringify=qe.defaultInstance.stringify.bind(qe.defaultInstance);qe.parse=qe.defaultInstance.parse.bind(qe.defaultInstance);qe.registerClass=qe.defaultInstance.registerClass.bind(qe.defaultInstance);qe.registerSymbol=qe.defaultInstance.registerSymbol.bind(qe.defaultInstance);qe.registerCustom=qe.defaultInstance.registerCustom.bind(qe.defaultInstance);qe.allowErrorProps=qe.defaultInstance.allowErrorProps.bind(qe.defaultInstance);function yi(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Rt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Au(e,t,r=100){try{const{databases:n,config:s}=await Rt(),o=await n.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,[T.greaterThan("$updatedAt",t),T.equal("mainId",e),T.limit(r),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function wi(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:s,config:o}=await Rt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await s.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[T.equal("mainId",e),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),T.limit(n)])).documents;const i=await s.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[T.greaterThan("$updatedAt",r),T.equal("mainId",e),T.limit(n),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(s){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,s);const o=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function Or(e,t){try{const{databases:r,config:n}=await Rt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function ur(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const s=yi(n,t),{databases:o,config:i}=await Rt(),l=await o.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,s);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const s=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${s}`)}}async function Si(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Or(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function xi(e,t){return Or(e,{who:t})}async function Ks(e,t){return Or(e,{stockReel:t})}async function Pi(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const s={};return t.stockReel!==void 0&&(s.stockReel=t.stockReel),t.who!==void 0&&(s.who=t.who),t.storeInfo!==void 0&&(s.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await Or(e,s)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await ur(e,s,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function Ei(e){try{const{databases:t,config:r}=await Rt(),o=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:o.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,ln.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function $i(e,t){try{const{databases:r,config:n}=await Rt(),s=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||s.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Ti(e){try{const{databases:t,config:r}=await Rt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function ki(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Rt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[T.equal("$id",e),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Ai(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(_=>_.includes("products.")),f=i.some(_=>_.includes("purchases.")),h=i.some(_=>_.includes(".create")),m=i.some(_=>_.includes(".update")),p=i.some(_=>_.includes(".delete"));if(c){const _=l;h&&t.onProductCreate?t.onProductCreate(_):m&&t.onProductUpdate?t.onProductUpdate(_):p&&t.onProductDelete&&t.onProductDelete(_.$id)}else if(f){const _=l;h&&t.onPurchaseCreate?t.onPurchaseCreate(_):m&&t.onPurchaseUpdate?t.onPurchaseUpdate(_):p&&t.onPurchaseDelete&&t.onPurchaseDelete(_.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function Ni(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Rt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Ii(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:s}=await Rt(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await s.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(s){throw console.error("[Appwrite Interactions] Erreur création Main document:",s),s}}async function va(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const s=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const o=JSON.parse(s.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function Ci(e,t,r,n){return va({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function Di(e,t,r,n="replace"){return va({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function Mi(e,t,r,n={}){try{const{databases:s,config:o}=await Rt(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const h of r){const m={products:[t],mainId:e,quantity:h.q,unit:h.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await s.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,ln.unique(),m);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(s){console.error("[Appwrite Interactions] Erreur création validation rapide:",s);const o=s instanceof Error?s.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const Nu=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:va,batchUpdateStore:Ci,batchUpdateWho:Di,createMainDocument:Ii,createPurchase:Ei,createQuickValidationPurchases:Mi,deletePurchase:Ti,enrichedProductToAppwriteProduct:yi,loadMainEventData:Ni,loadPurchasesListByIds:ki,loadUpdatedPurchases:Au,subscribeToRealtime:Ai,syncProductsWithPurchases:wi,updateProduct:Or,updateProductBatch:Pi,updateProductStock:Ks,updateProductStore:Si,updateProductWho:xi,updatePurchase:$i,upsertProduct:ur},Symbol.toStringTag,{value:"Module"}));async function Iu(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Cu(e,t){const r=Xc(e.byDate),n=Dn(es([])),{numeric:s,display:o}=ts(r,n);return{$id:`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:s,stockOrTotalPurchases:"-",displayTotalNeeded:Xr(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function Du(e,t){return e.map(r=>Cu(r,t))}class Mu{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";METADATA_KEY="cache-metadata";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=s=>{const o=s.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE),console.log("[IDBCache] Object store 'metadata' créé"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).get(this.METADATA_KEY);o.onsuccess=()=>{const i=o.result||{lastSync:null,allDates:[]};console.log(`[IDBCache] Metadata chargée: lastSync=${i.lastSync}, dates=${i.allDates?.length||0}`),t(i)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const s=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=s.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),s.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},s.onerror=()=>n(s.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put(t,this.METADATA_KEY);i.onsuccess=()=>{console.log("[IDBCache] Metadata sauvegardée"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Ru(e){const t=new Mu(e);return await t.open(),t}const Fa=1e3;class Ou{#e=new Bc;#r=Y(null);#c=Y(!1);#u=Y(!1);#l=Y(null);#o=Y(!1);#i=Y(!1);#s=Y(je([]));#a=Y(null);#d=Y(null);get startDate(){return a(this.#d)}set startDate(t){$(this.#d,t,!0)}#v=Y(null);get endDate(){return a(this.#v)}set endDate(t){$(this.#v,t,!0)}#n=null;#f=null;#h=Y(!1);#t=Y(je({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return a(this.#t)}get currentMainId(){return a(this.#r)}get isInitialized(){return a(this.#c)}get loading(){return a(this.#u)}get error(){return a(this.#l)}get allDates(){return a(this.#s)}get syncing(){return a(this.#o)}setDateRange(t,r){this.startDate=t,this.endDate=r}initializeDateRange(){if((!this.startDate||!this.endDate)&&a(this.#s).length>0){const t=[...a(this.#s)].sort();this.startDate=t[0],this.endDate=t[t.length-1]}console.log(`[ProductsStore] Date range initialized: ${this.startDate} - ${this.endDate}`)}get firstDate(){return a(this.#s).length===0?null:[...a(this.#s)].sort()[0]}get lastDate(){return a(this.#s).length===0?null:[...a(this.#s)].sort().pop()}get realtimeConnected(){return a(this.#i)}get hugoContentChanged(){return a(this.#h)}getTotalNeededInRange(t){return this.totalNeededByDateRange.get(t)??[]}getFormattedTotalNeeded(t){const r=this.getTotalNeededInRange(t);return r.length>0?Xr(r):"-"}#g=G(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return a(this.#g)}set enrichedProducts(t){$(this.#g,t)}#w=G(()=>{if(console.log("[Store] Recalcul totalNeededByDateRange"),this.startDate===this.firstDate&&this.endDate===this.lastDate)return console.log("[Store] Full date range - using totalNeededArray (no calculation)"),new Map(this.enrichedProducts.map(n=>[n.$id,n.totalNeededArray]));const r=new Map;for(const n of this.enrichedProducts)if(n.byDate){const s=Yc(n.byDate),o=Gc(s,this.startDate,this.endDate);o.length>0&&r.set(n.$id,o)}return r});get totalNeededByDateRange(){return a(this.#w)}set totalNeededByDateRange(t){$(this.#w,t)}#S=G(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const s=Xr(r);t.set(n,s)}),t});get formattedTotalNeededByDateRange(){return a(this.#S)}set formattedTotalNeededByDateRange(t){$(this.#S,t)}#p=G(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return a(this.#p)}set stats(t){$(this.#p,t)}#_=G(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return a(this.#_)}set uniqueStores(t){$(this.#_,t)}#m=G(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return a(this.#m)}set uniqueWho(t){$(this.#m,t)}#E=G(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return a(this.#E)}set uniqueProductTypes(t){$(this.#E,t)}#$=G(()=>new Set(this.totalNeededByDateRange.keys()));get relevantProductIds(){return a(this.#$)}set relevantProductIds(t){$(this.#$,t)}#T=G(()=>{const t=this.enrichedProducts.filter(r=>this.#z(r)&&this.relevantProductIds.has(r.$id));return a(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>a(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get displayProducts(){return a(this.#T)}set displayProducts(t){$(this.#T,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(a(this.#c)&&a(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),$(this.#r,t,!0);try{this.#n=await Ru(t)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}$(this.#l,null);try{if(await this.#I(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await Iu(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Du(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),$(this.#s,[...n.allDates],!0),await Ni(t)||await Ii(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#k()}this.initializeDateRange(),await this.#C(),$(this.#c,!0);const r=this.#L();this.#f=Ai(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw $(this.#l,n,!0),console.error("[ProductsStore]",n,r),r}}async#I(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,s)=>{this.#e.set(s,n)});const r=await this.#n.loadMetadata();$(this.#a,r.lastSync,!0),$(this.#s,[...r.allDates],!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#C(){if(a(this.#r)){$(this.#o,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${a(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${a(this.#a)}`);const t=await wi(a(this.#r),{lastSync:a(this.#a),limit:Fa});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const s=this.#A(r,n);s.isSynced=!0,this.#e.set(r.$id,s)}),a(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${a(this.#a)}`);const{loadUpdatedPurchases:r}=await qc(async()=>{const{loadUpdatedPurchases:s}=await Promise.resolve().then(()=>Nu);return{loadUpdatedPurchases:s}},void 0),n=await r(a(this.#r),a(this.#a),Fa);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(s=>{if(s.products?.length){const o=s.products.map(i=>typeof i=="string"?i:i.$id);this.#P(o,s)}})}this.#D(),await this.#k(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{$(this.#o,!1)}}}async#k(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:a(this.#a),allDates:[...a(this.#s)]}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#x(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#D(){$(this.#a,new Date().toISOString(),!0)}#A(t,r){return r?this.#b(t,r):this.#M(t)}#M(t){const r=Dn(es(t.purchases??[])),n=[],{numeric:s,display:o}=ts(n,r),i=An(t.stockReel)??null,l=Xr(r),c=t.store?An(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:s,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:ja(t.totalNeededOverride)}}#b(t,r){const n=t.purchases??r.purchases,s=Dn(es(n??[])),o=Xr(s),{numeric:i,display:l}=ts(r.totalNeededArray,s),c=t.stockReel??r.stockReel,f=c?An(c):r.stockParsed,h=t.store??r.store,m=h?An(h):r.storeInfo,p=f?`${f.quantity} ${f.unit}`:o;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:h,stockReel:c,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:m,stockParsed:f,totalPurchasesArray:s,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:ja(t.totalNeededOverride??r.totalNeededOverride)}}#U(t){t.totalPurchasesArray=Dn(es(t.purchases??[]));const{numeric:r,display:n}=ts(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=Xr(t.totalPurchasesArray)}#V(t){t.length&&(t.forEach(r=>this.#y(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#y(t){const r=this.#e.get(t.$id),n=this.#A(t,r);this.#e.set(t.$id,n)}#R(t){this.#e.delete(t)}async#O(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#j(r,t),r}async#q(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await ki([t.$id]);if(r?.products?.length){const n=r.products.map(s=>typeof s=="string"?s:s.$id).filter(Boolean);return this.#P(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#B(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(s=>s.$id===t));return r.forEach(n=>{this.#y(n)}),r.map(n=>n.$id)}#N(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#j(t,r){const n=this.#N(r),s=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#b({...i,purchases:[...l,n],status:"active"},i);s.push(c)}}}),s.forEach(o=>{this.#e.set(o.$id,o)})}#P(t,r){const n=this.#N(r),s=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const h=this.#b({...i,purchases:f,status:"active"},i);s.push(h)}else{const f=this.#b({...i,purchases:[...l,r],status:"active"},i);s.push(f)}}}),s.forEach(o=>{this.#e.set(o.$id,o)})}#L(){return{onProductCreate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#R(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#O(t);await this.#x(r)},onPurchaseUpdate:async t=>{const r=await this.#q(t);await this.#x(r)},onPurchaseDelete:async t=>{const r=await this.#B(t);await this.#x(r)},onConnect:()=>{$(this.#i,!0)},onDisconnect:()=>{$(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#z(t){if(a(this.#t).searchQuery.trim()){const r=a(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(a(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!a(this.#t).selectedStores.includes(t.storeInfo.storeName))||a(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>a(this.#t).selectedWho.includes(r)))||a(this.#t).selectedProductTypes.length>0&&(!t.productType||!a(this.#t).selectedProductTypes.includes(t.productType))||a(this.#t).selectedTemperatures.length>0&&!(a(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||a(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Wc(t=>{a(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=a(this.#t).selectedProductTypes.indexOf(t);r>-1?a(this.#t).selectedProductTypes.splice(r,1):a(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=a(this.#t).selectedTemperatures.indexOf(t);r>-1?a(this.#t).selectedTemperatures.splice(r,1):a(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){a(this.#t).selectedProductTypes=[],a(this.#t).selectedTemperatures=[]}setGroupBy(t){a(this.#t).groupBy=t}toggleStore(t){const r=a(this.#t).selectedStores.indexOf(t);r>-1?a(this.#t).selectedStores.splice(r,1):a(this.#t).selectedStores.push(t)}toggleWho(t){const r=a(this.#t).selectedWho.indexOf(t);r>-1?a(this.#t).selectedWho.splice(r,1):a(this.#t).selectedWho.push(t)}clearStoreFilters(){a(this.#t).selectedStores=[]}clearWhoFilters(){a(this.#t).selectedWho=[]}handleSort(t){a(this.#t).sortColumn===t?a(this.#t).sortDirection=a(this.#t).sortDirection==="asc"?"desc":"asc":(a(this.#t).sortColumn=t,a(this.#t).sortDirection="asc")}clearFilters(){$(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return a(this.#t).sortColumn?[...t].sort((r,n)=>{let s=r[a(this.#t).sortColumn],o=n[a(this.#t).sortColumn];return a(this.#t).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,o=parseFloat(o)||0):a(this.#t).sortColumn==="purchases"&&(s=r.purchases?.length||0,o=n.purchases?.length||0),s<o?a(this.#t).sortDirection==="asc"?-1:1:s>o?a(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDate?Hc(n.byDate,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDate&&n.byDate[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Jc(r.byDate):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDate?Object.keys(r.byDate).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?0:Kc(r.byDate,this.startDate,this.endDate)}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?[]:Object.keys(r.byDate).filter(s=>{const o=new Date(s),i=this.startDate?new Date(this.startDate):null,l=this.endDate?new Date(this.endDate):null;return i&&l&&o>=i&&o<=l}).flatMap(s=>r.byDate[s]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){await this.clearCache(),await this.initialize(t)}async clearCache(){this.#e.clear(),$(this.#s,[],!0),$(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(s=>{const o=this.#e.get(s);if(o){const i={...o,status:n};this.#e.set(s,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#f?.(),this.#f=null,this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const M=new Ou;function qu(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Bu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ju=vc("<svg><!><!></svg>");function ce(e,t){H(t,!0);const r=Be(t,"color",3,"currentColor"),n=Be(t,"size",3,24),s=Be(t,"strokeWidth",3,2),o=Be(t,"absoluteStrokeWidth",3,!1),i=Be(t,"iconNode",19,()=>[]),l=ae(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=ju();Oa(c,m=>({...Bu,...l,width:n(),height:n(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(s())*24/Number(n()):s()]);var f=u(c);tt(f,17,i,Us,(m,p)=>{var _=G(()=>uo(a(p),2));let g=()=>a(_)[0],x=()=>a(_)[1];var b=Q(),y=O(b);yc(y,g,!0,(k,S)=>{Oa(k,()=>({...x()}))}),v(m,b)});var h=d(f);ne(h,()=>t.children??te),v(e,c),K()}function Js(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ce(e,le({name:"archive"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Lu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ce(e,le({name:"bean"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function zu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ce(e,le({name:"beef"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Uu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ce(e,le({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Vu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ce(e,le({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Ln(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];ce(e,le({name:"check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Wu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ce(e,le({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Gu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];ce(e,le({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function eo(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ce(e,le({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Qu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ce(e,le({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Hu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];ce(e,le({name:"circle-x"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Ku(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];ce(e,le({name:"clock"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Ju(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];ce(e,le({name:"cloud"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function ha(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ce(e,le({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Yu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ce(e,le({name:"egg"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Zu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];ce(e,le({name:"euro"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Ys(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ce(e,le({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Xu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ce(e,le({name:"info"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function to(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ce(e,le({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Fu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ce(e,le({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function ed(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ce(e,le({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function td(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];ce(e,le({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function rd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ce(e,le({name:"log-in"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function nd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ce(e,le({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function pa(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ce(e,le({name:"message-circle"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function sd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ce(e,le({name:"moon"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Un(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ce(e,le({name:"package"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function ad(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];ce(e,le({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function od(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ce(e,le({name:"plus"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function id(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];ce(e,le({name:"receipt"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function ld(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function cd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ce(e,le({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function ud(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ce(e,le({name:"save"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function dd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ce(e,le({name:"search"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Zs(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ce(e,le({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function hr(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ce(e,le({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Xs(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ce(e,le({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function is(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ce(e,le({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function pr(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ce(e,le({name:"store"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function fd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ce(e,le({name:"sun"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function _a(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ce(e,le({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Ri(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];ce(e,le({name:"user-plus"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function ys(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ce(e,le({name:"user"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function Fs(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ce(e,le({name:"users"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function vd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ce(e,le({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function vt(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),v(s,i)},$$slots:{default:!0}})),K()}function ns(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Lu};case"animaux":return{displayName:"Viandes et Poissons",icon:zu};case"legumes":return{displayName:"Fruits et Légumes",icon:Vu};case"sucres":return{displayName:"Sucrées",icon:Uu};case"lof":return{displayName:"L.O.F",icon:Yu};case"autres":return{displayName:"Autres",icon:Wu};case"epices":return{displayName:"Assaisonnements",icon:Fu};case"frais":return{displayName:"Produits Frais",icon:cd};default:return{displayName:e,icon:Un}}}function ro(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function ws(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Ss(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function hd(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function pd(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],o=n[t.sortColumn];return s<o?t.sortDirection==="asc"?-1:1:s>o?t.sortDirection==="asc"?1:-1:0}):e}function ea(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function no(e){return e?Ss(e):"-"}function _d(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const s=n.status||"direct",o=n.unit||"unit",i=`${s}_${o}`;if(!r[i]){const l=ea(s);r[i]={status:s,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:md(s)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function md(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ShoppingCart";case"pending":return"Clock";case"delivered":return"CircleCheck";case"cancelled":return"CircleX";default:return"Package"}}let so=()=>localStorage.getItem("appwrite-user-name")||"";function gd(e){let t=Y(!1),r=Y(null);const n=G(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),M.getEnrichedProductById(e))),s=G(()=>a(n)?.who??[]),o=G(()=>a(n)?.stockParsed??null),i=G(()=>a(n)?.purchases??[]),l=G(()=>a(n)?.byDate?Zc(a(n).byDate):[]),c=je({purchase:{quantity:null,unit:"",store:"",who:so()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=Y(!1),h=Y(null);vn(()=>{!a(n)||a(f)||(c.purchase.quantity=a(n).missingQuantityArray[0]?.q??null,c.purchase.unit=a(n).totalNeededArray[0]?.u??"",c.purchase.store=a(n).storeInfo?.storeName??"",c.purchase.who=so()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=a(n).totalNeededArray[0]?.u??"",c.store.name=a(n).storeInfo?.storeName??"",c.store.comment=a(n).storeInfo?.storeComment??null,c.who=a(n)?.who?[...a(n).who]:[],$(h,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),$(f,!0))});const m=G(()=>a(h)?{store:JSON.stringify(c.store)!==JSON.stringify(a(h).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(a(h).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?a(o)?c.stock.quantity.toString()!==a(o).quantity||c.stock.unit!==a(o).unit||(c.stock.notes||"")!==(a(o).notes||""):!0:!1}const _=G(()=>!!(a(h)&&(a(m).store||a(m).stock||a(m).who)));let g=Y(null);const x=G(()=>a(g)?a(i).find(D=>D.$id===a(g))??null:null);async function b(D,j){$(t,!0),$(r,null);try{const F=await D();return j&&y("success",j),F}catch(F){const $e=F instanceof Error?F.message:"Une erreur est survenue";return $(r,$e,!0),y("error",$e),console.error("[ProductModalState]",F),null}finally{$(t,!1)}}function y(D,j){const F=new CustomEvent("toast",{detail:{type:D,message:j}});window.dispatchEvent(F)}async function k(){a(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!M.currentMainId)throw new Error("mainId non disponible");const{quantity:D,unit:j}=ro(c.purchase.quantity,c.purchase.unit);a(n).isSynced||(console.log(`[ProductModalState] Produit ${a(n).$id} local, création pour purchase...`),await ur(a(n).$id,{},F=>M.getEnrichedProductById(F))),await Ei({products:[a(n).$id],mainId:M.currentMainId,unit:j,quantity:D,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:c.purchase.status||"delivered",orderDate:c.purchase.orderDate||null,deliveryDate:c.purchase.deliveryDate||null}),c.purchase={quantity:a(n).missingQuantityArray[0]?.q??null,unit:a(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function S(D){$(g,D.$id,!0)}function P(){$(g,null)}async function E(D){D.$id&&await b(async()=>{const{quantity:j,unit:F}=ro(D.quantity,D.unit);await $i(D.$id,{unit:F,quantity:j,store:D.store||null,who:D.who||null,notes:D.notes||"",price:D.price||null,status:D.status||null,orderDate:D.orderDate||null,deliveryDate:D.deliveryDate||null}),$(g,null)},"Achat modifié avec succès")}async function N(D){const j=a(i).find(F=>F.$id===D);j&&confirm(`Supprimer cet achat (${j.quantity} ${j.unit}) ?`)&&await b(async()=>{await Ti(D)},"Achat supprimé avec succès")}async function I(){a(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const D={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update stock normal...`),await Ks(a(n).$id,JSON.stringify(D))):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création stock avec upsert...`),await ur(a(n).$id,{stockReel:JSON.stringify(D)},j=>M.getEnrichedProductById(j))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function C(){a(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, suppression stock normal...`),await Ks(a(n).$id,null)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, suppression stock avec upsert...`),await ur(a(n).$id,{stockReel:null},D=>M.getEnrichedProductById(D)))},"Stock supprimé")}async function ue(D){a(n)&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, setWho normal...`),await xi(a(n).$id,D)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création who avec upsert...`),await ur(a(n).$id,{who:D},j=>M.getEnrichedProductById(j)))},"Volontaires mis à jour")}async function J(D){a(n)&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update store normal...`),await Si(a(n).$id,D)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création store avec upsert...`),await ur(a(n).$id,{store:JSON.stringify(D)},j=>M.getEnrichedProductById(j)))},"Magasin mis à jour")}async function L(D){a(n)&&await b(async()=>{await Or(a(n).$id,{totalNeededOverride:JSON.stringify(D)})},"Override appliqué")}async function Z(){a(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await Or(a(n).$id,{totalNeededOverride:null})},"Override supprimé")}async function re(){!a(n)||!a(_)||await b(async()=>{const D={};if(a(m).stock&&c.stock.quantity&&c.stock.unit){const j={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};D.stockReel=JSON.stringify(j)}if(a(m).who&&(D.who=c.who),a(m).store){const j={storeName:c.store.name||"",storeComment:c.store.comment||void 0};D.storeInfo=j}Object.keys(D).length>0&&(await Pi(a(n).$id,D,j=>M.getEnrichedProductById(j)),$(h,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return a(t)},get error(){return a(r)},get product(){return a(n)},get recipes(){return a(l)},get whoList(){return a(s)},get stockParsed(){return a(o)},get purchasesList(){return a(i)},get editingPurchaseId(){return a(g)},get editingPurchaseData(){return a(x)},forms:c,addPurchase:k,startEditPurchase:S,cancelEditPurchase:P,updateEditedPurchase:E,removePurchase:N,setStock:I,removeStock:C,setWho:ue,updateStore:J,setOverride:L,removeOverride:Z,saveAllChanges:re,get hasChanges(){return a(m)},get hasAnyChanges(){return a(_)},formatQuantity:ws,formatDate:Ss,formatDisplayQuantity:hd}}function bd(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function yd(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function wd(e,t){t().cancelEditPurchase()}var Sd=w('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),xd=w('<span class="loading loading-spinner loading-sm"></span>'),Pd=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Ed=w('<span class="loading loading-spinner loading-sm"></span>'),$d=w('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Td=(e,t,r)=>t(a(r)),kd=(e,t,r)=>t(a(r).$id),Ad=w('<span class="loading loading-spinner loading-sm"></span>'),Nd=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Id=w('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Cd=w(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Dd(e,t){H(t,!0);let r=Be(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function s(ee){return ee.quantity!==null&&ee.quantity!==0&&ee.unit?.trim()!==""}function o(ee){r().removePurchase(ee)}function i(ee){r().startEditPurchase(ee)}var l=Cd(),c=u(l),f=u(c);hr(f,{class:"h-5 w-5"});var h=d(c,2),m=u(h),p=d(u(m),2),_=u(p),g=u(_);Un(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2),b=d(_,2),y=u(b);y.value=y.__value="";var k=d(y);k.value=k.__value="kg";var S=d(k);S.value=S.__value="gr.";var P=d(S);P.value=P.__value="l.";var E=d(P);E.value=E.__value="ml";var N=d(E);N.value=N.__value="unité";var I=d(N);I.value=I.__value="bottes";var C=d(b,2),ue=u(C);pr(ue,{class:"h-4 w-4 opacity-50"});var J=d(ue,2),L=d(C,2),Z=u(L);ys(Z,{class:"h-4 w-4 opacity-50"});var re=d(Z,2),D=d(L,2),j=d(u(D),2),F=d(p,2),$e=u(F),B=u($e);pa(B,{class:"h-4 w-4 opacity-50"});var oe=d(B,2),Ee=d(F,2),Ie=u(Ee),V=u(Ie),me=u(V),Oe=u(me);Oe.value=Oe.__value="delivered";var de=d(Oe);de.value=de.__value="ordered";var ve=d(de);ve.value=ve.__value="requested";var X=d(V,2),Se=d(Ie,2);{var Ne=ee=>{var z=Sd(),ie=d(u(z),2);Re(ie,()=>r().forms.purchase.deliveryDate,Le=>r().forms.purchase.deliveryDate=Le),v(ee,z)};A(Se,ee=>{r().forms.purchase.status==="ordered"&&ee(Ne)})}var ye=d(Ee,2),_e=u(ye);_e.__click=[bd,n,r];var Ce=u(_e);{var Te=ee=>{var z=xd();v(ee,z)},it=ee=>{var z=lt("Ajouter l'achat");v(ee,z)};A(Ce,ee=>{r().loading?ee(Te):ee(it,!1)})}var Ze=d(h,2);{var At=ee=>{var z=Pd(),ie=u(z);hr(ie,{class:"mx-auto mb-2 h-12 w-12"}),v(ee,z)},Nt=ee=>{var z=Id(),ie=u(z),Le=d(u(ie));tt(Le,21,()=>r().purchasesList,dt=>dt.$id,(dt,fe,De)=>{var Ke=Q(),Ot=O(Ke);{var nr=W=>{var ge=$d(),ke=u(ge),Je=u(ke),Ue=u(Je),Xe=d(Ue,2),mt=u(Xe);mt.value=mt.__value="kg";var St=d(mt);St.value=St.__value="gr.";var xt=d(St);xt.value=xt.__value="l.";var rt=d(xt);rt.value=rt.__value="ml";var Ge=d(rt);Ge.value=Ge.__value="unité";var qt=d(Ge);qt.value=qt.__value="bottes";var Gt=d(ke),sr=u(Gt),Bt=d(Gt),Qt=u(Bt),Ur=d(Bt),yr=u(Ur),wr=u(yr);wr.value=wr.__value="requested";var ar=d(wr);ar.value=ar.__value="ordered";var Sr=d(ar);Sr.value=Sr.__value="delivered";var or=d(Sr);or.value=or.__value="cancelled";var Vr=d(Ur),xr=u(Vr),Wr=d(Vr),pn=u(Wr),Gr=d(Wr),Pt=u(Gr),Ht=d(Gr),_n=u(Ht),Qr=d(Ht),mn=u(Qr),Pr=u(mn);Pr.__click=[yd,r,s];var xs=u(Pr);{var Ps=be=>{var Qe=Ed();v(be,Qe)},U=be=>{ud(be,{class:"h-3 w-3"})};A(xs,be=>{r().loading?be(Ps):be(U,!1)})}var he=d(Pr,2);he.__click=[wd,r];var Ye=u(he);vt(Ye,{class:"h-3 w-3"}),q(be=>Pr.disabled=be,[()=>r().loading||!s(a(fe))]),Re(Ue,()=>a(fe).quantity,be=>a(fe).quantity=be),Nr(Xe,()=>a(fe).unit,be=>a(fe).unit=be),Re(sr,()=>a(fe).store,be=>a(fe).store=be),Re(Qt,()=>a(fe).who,be=>a(fe).who=be),Nr(yr,()=>a(fe).status,be=>a(fe).status=be),Re(xr,()=>a(fe).orderDate,be=>a(fe).orderDate=be),Re(pn,()=>a(fe).deliveryDate,be=>a(fe).deliveryDate=be),Re(Pt,()=>a(fe).price,be=>a(fe).price=be),Re(_n,()=>a(fe).notes,be=>a(fe).notes=be),v(W,ge)},br=W=>{var ge=Nd(),ke=u(ge),Je=u(ke),Ue=d(ke),Xe=u(Ue),mt=d(Ue),St=u(mt),xt=d(mt),rt=u(xt),Ge=u(rt),qt=d(xt),Gt=u(qt),sr=d(qt),Bt=u(sr),Qt=d(sr),Ur=u(Qt),yr=d(Qt),wr=u(yr),ar=d(yr),Sr=u(ar),or=u(Sr);or.__click=[Td,i,fe];var Vr=u(or);is(Vr,{class:"h-4 w-4"});var xr=d(or,2);xr.__click=[kd,o,fe];var Wr=u(xr);{var pn=Pt=>{var Ht=Ad();v(Pt,Ht)},Gr=Pt=>{vt(Pt,{class:"h-4 w-4"})};A(Wr,Pt=>{r().loading?Pt(pn):Pt(Gr,!1)})}q((Pt,Ht,_n,Qr,mn)=>{R(Je,Pt),R(Xe,a(fe).store||"-"),R(St,a(fe).who||"-"),Ae(rt,1,`badge badge-sm ${Ht??""}`),R(Ge,_n),R(Gt,Qr),R(Bt,mn),R(Ur,a(fe).price?`${a(fe).price}€`:"-"),R(wr,a(fe).notes||"-"),xr.disabled=r().loading},[()=>ws(a(fe).quantity,a(fe).unit),()=>ea(a(fe).status).class,()=>ea(a(fe).status).text,()=>no(a(fe).orderDate),()=>no(a(fe).deliveryDate)]),v(W,ge)};A(Ot,W=>{r().editingPurchaseId===a(fe).$id?W(nr):W(br,!1)})}v(dt,Ke)}),v(ee,z)};A(Ze,ee=>{r().purchasesList.length===0?ee(At):ee(Nt,!1)})}q(ee=>{Ae(X,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),_e.disabled=ee},[()=>r().loading||!n()]),Re(x,()=>r().forms.purchase.quantity,ee=>r().forms.purchase.quantity=ee),Nr(b,()=>r().forms.purchase.unit,ee=>r().forms.purchase.unit=ee),Re(J,()=>r().forms.purchase.store,ee=>r().forms.purchase.store=ee),Re(re,()=>r().forms.purchase.who,ee=>r().forms.purchase.who=ee),Re(j,()=>r().forms.purchase.price,ee=>r().forms.purchase.price=ee),Re(oe,()=>r().forms.purchase.notes,ee=>r().forms.purchase.notes=ee),Nr(me,()=>r().forms.purchase.status,ee=>r().forms.purchase.status=ee),v(e,l),K()}ut(["click"]);async function Md(e,t){await t()?.removeStock()}var Rd=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},Od=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),qd=w('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Bd=w('<span class="loading loading-spinner loading-xs"></span>'),jd=w('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),Ld=w(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function zd(e,t){H(t,!0);let r=Be(t,"modalState",7);var n=Ld(),s=u(n),o=u(s);Js(o,{class:"h-5 w-5"});var i=d(s,2),l=u(i),c=u(l),f=u(c),h=d(c,2),m=u(h),p=u(m);Un(p,{class:"h-4 w-4 opacity-50"});var _=d(p,2),g=d(m,2),x=u(g);x.value=x.__value="";var b=d(x);b.value=b.__value="kg";var y=d(b);y.value=y.__value="gr.";var k=d(y);k.value=k.__value="l.";var S=d(k);S.value=S.__value="ml";var P=d(S);P.value=P.__value="unité";var E=d(P);E.value=E.__value="bottes";var N=d(h,2),I=u(N),C=d(N,2),ue=u(C);ue.__click=[Rd,r];var J=d(i,2);{var L=re=>{var D=Od(),j=u(D);Js(j,{class:"mx-auto mb-2 h-12 w-12"}),v(re,D)},Z=re=>{var D=jd(),j=u(D),F=d(u(j),2),$e=u(F),B=d(u($e),2),oe=u(B),Ee=d($e,2),Ie=d(u(Ee),2),V=u(Ie),me=d(Ee,2);{var Oe=ye=>{var _e=qd(),Ce=d(u(_e),2),Te=u(Ce);q(()=>R(Te,r().stockParsed.notes)),v(ye,_e)};A(me,ye=>{r().stockParsed.notes&&ye(Oe)})}var de=d(F,2),ve=u(de);ve.__click=[Md,r];var X=u(ve);{var Se=ye=>{var _e=Bd();v(ye,_e)},Ne=ye=>{var _e=lt("Supprimer le stock");v(ye,_e)};A(X,ye=>{r().loading?ye(Se):ye(Ne,!1)})}q(ye=>{R(oe,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),R(V,ye),ve.disabled=r().loading},[()=>Ss(r().stockParsed.dateTime)]),v(re,D)};A(J,re=>{r().stockParsed?re(Z,!1):re(L)})}q(()=>{R(f,r().stockParsed?"Modifier le stock":"Ajouter un stock"),ue.disabled=r().loading}),Re(_,()=>r().forms.stock.quantity,re=>r().forms.stock.quantity=re),Nr(g,()=>r().forms.stock.unit,re=>r().forms.stock.unit=re),Re(I,()=>r().forms.stock.notes,re=>r().forms.stock.notes=re),v(e,n),K()}ut(["click"]);var Ud=(e,t,r)=>t(a(r).id),Vd=w('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),Wd=w('<span class="flex items-center gap-1"><!> </span>'),Gd=w('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Qd=w('<div class="flex flex-wrap gap-2"></div> <!>',1);function ma(e,t){H(t,!0);let r=Be(t,"badgeSize",3,"badge-lg"),n=Be(t,"color",3,"primary"),s=Be(t,"badgeStyle",3,""),o=Be(t,"onToggleItem",3,()=>{}),i=Be(t,"showStats",3,!1),l=Be(t,"showIcon",3,!0),c=Y(je({}));vn(()=>{const b={};t.items.forEach(y=>{a(c)[y.id]!==void 0?b[y.id]=a(c)[y.id]:b[y.id]=y.selected??!0}),JSON.stringify(Object.keys(b).sort())!==JSON.stringify(Object.keys(a(c)).sort())&&$(c,b,!0)});function f(b){a(c)[b]=!a(c)[b],o()(b)}const h=G(()=>Object.values(a(c)).filter(Boolean).length),m=G(()=>Object.values(a(c)).filter(b=>!b).length);var p=Qd(),_=O(p);tt(_,21,()=>t.items,b=>b.id,(b,y)=>{const k=G(()=>a(c)[a(y).id]);var S=Vd();S.__click=[Ud,f,y];var P=u(S);{var E=J=>{var L=Q(),Z=O(L);Ar(Z,()=>a(y).icon,(re,D)=>{D(re,{class:"h-3 w-3",get title(){return a(y).title}})}),v(J,L)};A(P,J=>{a(y).icon&&J(E)})}var N=d(P,2),I=u(N),C=d(N,2);{var ue=J=>{var L=Q(),Z=O(L);{var re=j=>{Ln(j,{size:16})},D=j=>{od(j,{size:16})};A(Z,j=>{a(k)?j(re):j(D,!1)})}v(J,L)};A(C,J=>{l()&&J(ue)})}q(()=>{Ae(S,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${a(k)?`${s()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Rr(S,"title",a(k)?"Retirer de la liste":"Réajouter à la liste"),R(I,a(y).label)}),v(b,S)});var g=d(_,2);{var x=b=>{var y=Gd(),k=u(y),S=u(k),P=u(S);Ln(P,{class:"text-success h-3 w-3"});var E=d(P),N=d(S,2);{var I=J=>{var L=Wd(),Z=u(L);vt(Z,{class:"text-error h-3 w-3"});var re=d(Z);q(()=>R(re,` ${a(m)??""} retirés`)),v(J,L)};A(N,J=>{a(m)>0&&J(I)})}var C=d(k,2),ue=u(C);q(()=>{R(E,` ${a(h)??""} actifs`),R(ue,`Total: ${t.items.length??""} items`)}),v(b,y)};A(g,b=>{i()&&b(x)})}v(e,p),K()}ut(["click"]);function Hd(e,t,r){t().forms.who=[...t().whoList],$(r,"")}var Kd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},Jd=w('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function Yd(e,t){H(t,!0);let r=Be(t,"modalState",7),n=Y("");const s=G(()=>{const I=new Set([...M.uniqueWho,...r().forms.who]);return Array.from(I).map(C=>({id:C,label:C,selected:r().forms.who.includes(C)}))});function o(I){const C=I.trim();C&&!r().forms.who.includes(C)&&(r().forms.who=[...r().forms.who,C])}function i(I){r().forms.who=r().forms.who.filter(C=>C!==I)}function l(I){r().forms.who.includes(I)?i(I):o(I)}function c(){a(n).trim()&&(o(a(n)),$(n,""))}var f=Jd(),h=u(f),m=u(h),p=d(u(m),4),_=u(p),g=u(_),x=u(g);ys(x,{class:"h-4 w-4 opacity-50"});var b=d(x,2);b.__keydown=[Kd,c];var y=d(g,2);y.__click=c;var k=u(y);Ri(k,{size:16});var S=d(_,2),P=d(u(S),2);ma(P,{get items(){return a(s)},onToggleItem:l,showIcon:!0});var E=d(p,2),N=u(E);N.__click=[Hd,r,n],q(I=>{b.disabled=r().loading,y.disabled=I,N.disabled=r().loading},[()=>r().loading||!a(n).trim()]),Re(b,()=>a(n),I=>$(n,I)),v(e,f),K()}ut(["keydown","click"]);var Zd=w('<div class="mb-1 text-xs opacity-70"> </div>'),Xd=(e,t,r)=>t(a(r)),Fd=w("<button><!> </button>"),ef=w('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function ta(e,t){H(t,!0);let r=Be(t,"maxSuggestions",3,8),n=Be(t,"title",3,"Suggestions :"),s=Be(t,"buttonSize",3,"btn-xs"),o=Be(t,"buttonVariant",3,"btn-soft"),i=Be(t,"disabled",3,!1);const l=G(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=Q(),h=O(f);{var m=p=>{var _=ef(),g=u(_);{var x=y=>{var k=Zd(),S=u(k);q(()=>R(S,n())),v(y,k)};A(g,y=>{n()&&y(x)})}var b=d(g,2);tt(b,21,()=>a(l),y=>y.id,(y,k)=>{var S=Fd();S.__click=[Xd,c,k];var P=u(S);{var E=I=>{var C=Q(),ue=O(C);Ar(ue,()=>a(k).icon,(J,L)=>{L(J,{class:"h-3 w-3"})}),v(I,C)};A(P,I=>{a(k).icon&&I(E)})}var N=d(P);q(()=>{Ae(S,1,`btn ${s()??""} ${o()??""}`),S.disabled=i()||a(k).disabled,Rr(S,"title",a(k).disabled?"Déjà sélectionné":a(k).label),R(N,` ${a(k).label??""}`)}),v(y,S)}),v(p,_)};A(h,p=>{a(l).length>0&&p(m)})}v(e,f),K()}ut(["click"]);var tf=(e,t)=>{e.key==="Enter"&&t()},rf=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},nf=w(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function sf(e,t){H(t,!0);let r=Be(t,"modalState",7);const n=G(()=>r()?.hasChanges?.store||!1);async function s(){if(!a(n))return;const k={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(k)}var o=nf(),i=u(o),l=u(i),c=d(u(l),4),f=u(c),h=u(f),m=u(h);pr(m,{class:"h-4 w-4 opacity-50"});var p=d(m,2);p.__keydown=[tf,s];var _=d(h,2);{var g=k=>{{let S=G(()=>M.uniqueStores.map(P=>({id:P,label:P,disabled:P===r().forms.store.name})));ta(k,{get suggestions(){return a(S)},onSuggestionClick:P=>{r().forms.store.name=P.label},buttonVariant:"btn-outline"})}};A(_,k=>{M.uniqueStores.length>0&&k(g)})}var x=d(f,2),b=d(c,2),y=u(b);y.__click=[rf,r],q(()=>y.disabled=r().loading),Re(p,()=>r().forms.store.name,k=>r().forms.store.name=k),Re(x,()=>r().forms.store.comment,k=>r().forms.store.comment=k),v(e,o),K()}ut(["keydown","click"]);async function af(e,t,r,n,s,o){if(!t.modalState)return;const i={totalOverride:{q:a(r),u:a(n)},comment:a(s)};await t.modalState.setOverride(i),$(o,!1)}async function of(e,t,r){t.modalState&&(await t.modalState.removeOverride(),$(r,!1))}var lf=w('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),cf=w('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),uf=w(" <!>",1),df=(e,t)=>$(t,!0),ff=w('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),vf=w('<div class="text-error text-sm">Limite de caractères atteinte</div>'),hf=w('<span class="loading loading-spinner loading-sm"></span>'),pf=w('<span class="loading loading-spinner loading-sm"></span>'),_f=w(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div class="form-control"><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),mf=w('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function gf(e,t){H(t,!0);const r=G(()=>t.modalState.product?.totalNeededOverrideParsed),n=G(()=>t.modalState.product?.displayTotalNeeded||[]);let s=Y(!1),o=Y(je(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=Y(je(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=Y(je(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),c=G(()=>a(o)>0&&a(i).trim()!=="");var f=mf(),h=u(f),m=u(h),p=u(m);{var _=x=>{var b=ff(),y=O(b),k=u(y),S=d(u(k),2);{var P=J=>{var L=lf();v(J,L)};A(S,J=>{a(r)&&J(P)})}var E=d(S,2),N=u(E);{var I=J=>{var L=uf(),Z=O(L),re=d(Z);{var D=j=>{var F=cf(),$e=u(F);pa($e,{});var B=d($e);q(()=>R(B,` ${a(r).comment??""}`)),v(j,F)};A(re,j=>{a(r).comment&&j(D)})}q(j=>R(Z,`${j??""} `),[()=>ws(a(r).totalOverride.q,a(r).totalOverride.u)]),v(J,L)},C=J=>{var L=lt();q(()=>R(L,a(n))),v(J,L)};A(N,J=>{a(r)?J(I):J(C,!1)})}var ue=d(y,2);ue.__click=[df,s],v(x,b)},g=x=>{var b=_f(),y=O(b),k=u(y),S=u(k);ad(S,{class:"h-4 w-4 opacity-50"});var P=d(S,2),E=d(k,2),N=u(E);N.value=N.__value="";var I=d(N);I.value=I.__value="kg";var C=d(I);C.value=C.__value="gr.";var ue=d(C);ue.value=ue.__value="l.";var J=d(ue);J.value=J.__value="ml";var L=d(J);L.value=L.__value="unité";var Z=d(L);Z.value=Z.__value="bottes";var re=d(y,2),D=u(re),j=d(u(D),2),F=d(j,2);{var $e=X=>{var Se=vf();v(X,Se)};A(F,X=>{a(l).length>=250&&X($e)})}var B=d(re,2),oe=u(B);oe.__click=[of,t,s];var Ee=u(oe);{var Ie=X=>{var Se=hf();v(X,Se)},V=X=>{var Se=lt();q(()=>R(Se,`Réinitialiser le total calculé (${a(n)??""}).`)),v(X,Se)};A(Ee,X=>{t.modalState.loading?X(Ie):X(V,!1)})}var me=d(oe,2);me.__click=[af,t,o,i,l,s];var Oe=u(me);{var de=X=>{var Se=pf();v(X,Se)},ve=X=>{var Se=lt("Appliquer");v(X,Se)};A(Oe,X=>{t.modalState.loading?X(de):X(ve,!1)})}q(()=>{oe.disabled=t.modalState.loading,me.disabled=t.modalState.loading||!a(c)}),Re(P,()=>a(o),X=>$(o,X)),Nr(E,()=>a(i),X=>$(i,X)),Re(j,()=>a(l),X=>$(l,X)),v(x,b)};A(p,x=>{a(s)?x(g,!1):x(_)})}q(()=>Ae(h,1,`card border-base-300 border ${a(s)?"bg-base-200":"bg-base-100"}`)),v(e,f),K()}ut(["click"]);var bf=w('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),yf=w('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),wf=w('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Sf=w('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function xf(e,t){H(t,!0);const r=G(()=>t.modalState.recipes);var n=Sf(),s=O(n);gf(s,{get modalState(){return t.modalState}});var o=d(s,2),i=u(o),l=u(i);ha(l,{class:"h-5 w-5"});var c=d(i,2);{var f=m=>{var p=bf(),_=u(p);Un(_,{class:"mx-auto mb-2 h-12 w-12"}),v(m,p)},h=m=>{var p=wf(),_=u(p),g=d(u(_));tt(g,21,()=>a(r),x=>x.r,(x,b)=>{var y=yf(),k=u(y),S=u(k),P=d(k),E=u(P),N=d(P),I=u(N);q(C=>{R(S,`${a(b).r??""} (${(a(b).a||"-")??""} c.)`),R(E,`${(a(b).q||a(b).qEq)??""} ${(a(b).u||a(b).uEq)??""}`),R(I,C)},[()=>Ss(a(b).date)]),v(x,y)}),v(m,p)};A(c,m=>{a(r).length===0?m(f):m(h,!1)})}v(e,n),K()}function Pf(e,t,r){a(t).saveAllChanges().then(()=>{r.onClose()})}var Ef=w('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),$f=w('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Tf=(e,t)=>t("recettes"),kf=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Af=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Nf=(e,t)=>t("magasins"),If=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Cf=(e,t)=>t("volontaires"),Df=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Mf=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Rf=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Of=(e,t)=>t("stock"),qf=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Bf=w('<span class="badge badge-sm badge-secondary ml-1">1</span>'),jf=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Lf=(e,t)=>t("achats"),zf=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Uf=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Vf=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Wf=w('<span class="loading loading-spinner loading-sm"></span>'),Gf=w('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),Qf=w('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Hf(e,t){H(t,!0);let r=Be(t,"initialTab",3,"recettes"),n=G(()=>gd(t.productId)),s=Y(je(r()));function o(b){$(s,b,!0)}var i=Qf(),l=u(i),c=u(l),f=u(c);{var h=b=>{var y=Ef(),k=O(y),S=u(k),P=d(k,2),E=u(P),N=u(E),I=d(E,2),C=d(u(I));q(()=>{R(S,a(n).product?.productName),R(N,a(n).product?.productType),R(C,` ${a(n).product?.displayTotalNeeded??""}`)}),v(b,y)},m=b=>{var y=$f();v(b,y)};A(f,b=>{a(n)&&a(n).product?b(h):b(m,!1)})}var p=d(f,2);p.__click=function(...b){t.onClose?.apply(this,b)};var _=u(p);vt(_,{class:"h-4 w-4"});var g=d(c,2);{var x=b=>{var y=Gf(),k=O(y),S=u(k);S.__click=[Tf,o];var P=u(S);ha(P,{class:"mr-1 h-5 w-5"});var E=d(P,2);{var N=z=>{var ie=kf(),Le=u(ie);q(()=>R(Le,a(n).product?.nbRecipes)),v(z,ie)},I=z=>{var ie=Af();v(z,ie)};A(E,z=>{a(n).product?.nbRecipes&&a(n).product?.nbRecipes>0?z(N):z(I,!1)})}var C=d(S,2);C.__click=[Nf,o];var ue=u(C);pr(ue,{class:"mr-1 h-5 w-5"});var J=d(ue,2);{var L=z=>{var ie=If();v(z,ie)};A(J,z=>{a(n).hasChanges?.store&&z(L)})}var Z=d(C,2);Z.__click=[Cf,o];var re=u(Z);Fs(re,{class:"mr-1 h-5 w-5"});var D=d(re,2);{var j=z=>{var ie=Df();v(z,ie)},F=z=>{var ie=Q(),Le=O(ie);{var dt=De=>{var Ke=Mf(),Ot=u(Ke);q(()=>R(Ot,a(n).product?.who.length)),v(De,Ke)},fe=De=>{var Ke=Rf();v(De,Ke)};A(Le,De=>{a(n).product?.who&&a(n).product?.who.length>0?De(dt):De(fe,!1)},!0)}v(z,ie)};A(D,z=>{a(n).hasChanges?.who?z(j):z(F,!1)})}var $e=d(Z,2);$e.__click=[Of,o];var B=u($e);Js(B,{class:"mr-1 h-5 w-5"});var oe=d(B,2);{var Ee=z=>{var ie=qf();v(z,ie)},Ie=z=>{var ie=Q(),Le=O(ie);{var dt=De=>{var Ke=Bf();v(De,Ke)},fe=De=>{var Ke=jf();v(De,Ke)};A(Le,De=>{a(n).stockParsed?De(dt):De(fe,!1)},!0)}v(z,ie)};A(oe,z=>{a(n).hasChanges?.stock?z(Ee):z(Ie,!1)})}var V=d($e,2);V.__click=[Lf,o];var me=u(V);hr(me,{class:"mr-1 h-5 w-5"});var Oe=d(me,2);{var de=z=>{var ie=zf(),Le=u(ie);q(()=>R(Le,a(n).purchasesList.length)),v(z,ie)},ve=z=>{var ie=Uf();v(z,ie)};A(Oe,z=>{a(n).purchasesList.length>0?z(de):z(ve,!1)})}var X=d(k,2),Se=u(X);{var Ne=z=>{var ie=Vf(),Le=u(ie);vt(Le,{class:"h-4 w-4"});var dt=d(Le,2),fe=u(dt);q(()=>R(fe,`erreur : ${a(n).error??""}`)),v(z,ie)};A(Se,z=>{a(n).error&&z(Ne)})}var ye=d(Se,2),_e=u(ye);mc(_e,()=>a(s),z=>{var ie=Q(),Le=O(ie);{var dt=De=>{xf(De,{get modalState(){return a(n)}})},fe=De=>{var Ke=Q(),Ot=O(Ke);{var nr=W=>{Dd(W,{get modalState(){return a(n)}})},br=W=>{var ge=Q(),ke=O(ge);{var Je=Xe=>{zd(Xe,{get modalState(){return a(n)}})},Ue=Xe=>{var mt=Q(),St=O(mt);{var xt=Ge=>{Yd(Ge,{get modalState(){return a(n)}})},rt=Ge=>{var qt=Q(),Gt=O(qt);{var sr=Bt=>{sf(Bt,{get modalState(){return a(n)}})};A(Gt,Bt=>{a(s)==="magasins"&&Bt(sr)},!0)}v(Ge,qt)};A(St,Ge=>{a(s)==="volontaires"?Ge(xt):Ge(rt,!1)},!0)}v(Xe,mt)};A(ke,Xe=>{a(s)==="stock"?Xe(Je):Xe(Ue,!1)},!0)}v(W,ge)};A(Ot,W=>{a(s)==="achats"?W(nr):W(br,!1)},!0)}v(De,Ke)};A(Le,De=>{a(s)==="recettes"?De(dt):De(fe,!1)})}v(z,ie)});var Ce=d(X,2),Te=u(Ce);Te.__click=function(...z){t.onClose?.apply(this,z)};var it=u(Te),Ze=d(Te,2);Ze.__click=[Pf,n,t];var At=u(Ze);{var Nt=z=>{var ie=Wf();v(z,ie)},ee=z=>{var ie=lt("Tout enregistrer");v(z,ie)};A(At,z=>{a(n).loading?z(Nt):z(ee,!1)})}q(()=>{Ae(S,1,`tab ${a(s)==="recettes"?"tab-active":""}`),Ae(C,1,`tab ${a(s)==="magasins"?"tab-active":""}`),Ae(Z,1,`tab ${a(s)==="volontaires"?"tab-active":""}`),Ae($e,1,`tab ${a(s)==="stock"?"tab-active":""}`),Ae(V,1,`tab ${a(s)==="achats"?"tab-active":""}`),R(it,a(n)?.hasAnyChanges?"Annuler":"Fermer"),Ze.disabled=a(n).loading||!a(n).hasAnyChanges}),v(b,y)};A(g,b=>{a(n)&&b(x)})}v(e,i),K()}ut(["click"]);async function Kf(e,t,r,n,s,o,i,l,c,f){if(!(!a(t)||a(r))){$(n,null),$(s,null);try{const h=a(o).map(_=>_.id),m=i.products.filter(_=>h.includes(_.$id));M.setSyncStatus(h,!0),i.onClose();let p;if(a(l)){const _={storeName:c.storeName.trim(),storeComment:c.storeComment.trim()};p=await Ci(h,m,_)}else if(a(f))p=await Di(h,m,c.whoNames,"replace");else throw new Error("Type d'édition non supporté");if($(s,p,!0),p.success)console.log(`[GroupEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(h){const m=h instanceof Error?h.message:"Erreur inconnue";$(n,m,!0),console.error("[GroupEditModal] Erreur mise à jour:",h),M.clearSyncStatus()}finally{$(r,!1)}}}function ao(e,t,r){a(t)||r.onClose()}var Jf=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Yf=w('<div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div>'),Zf=(e,t,r)=>t(r),Xf=w('<div class="badge badge-primary badge-lg flex items-center gap-2"><span> </span> <button class="btn btn-xs btn-circle btn-ghost hover:bg-error/20"><!></button></div>'),Ff=w('<div class="mt-2 flex flex-wrap gap-2"></div>'),ev=w('<div class="space-y-4"><div><div class="flex gap-2"><input type="text" class="input flex-1" placeholder="Ajouter un volontaire..."/> <button class="btn btn-square btn-primary"><!></button></div> <!> <!></div></div>'),tv=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),rv=w("<!> ",1),nv=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <!> <!> <div class="my-4"><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function sv(e,t){H(t,!0);let r=Y(!1),n=Y(null),s=Y(null),o=je({storeName:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"",storeComment:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"",whoNames:t.products.length>0&&t.editType==="who"&&t.products[0].who?[...t.products[0].who]:[]});const i=G(()=>t.editType==="store"),l=G(()=>t.editType==="who"),c=G(()=>t.products.map(V=>({id:V.$id,label:V.productName,title:V.productName,selected:a(g)[V.$id]}))),f=G(()=>a(c).filter(V=>V.selected)),h=G(()=>a(i)?`Attribuer un magasin (${a(f).length} produits sélectionnés)`:`Gérer les volontaires (${a(f).length} produits sélectionnés)`),m=G(()=>a(f).length===0?!1:a(i)?o.storeName.trim().length>0:a(l)?o.whoNames.length>0:!1);function p(V){V.trim()&&!o.whoNames.includes(V.trim())&&(o.whoNames=[...o.whoNames,V.trim()])}function _(V){o.whoNames=o.whoNames.filter(me=>me!==V)}let g=Y(je({}));vn(()=>{const V={};t.products.forEach(me=>{V[me.$id]=t.productIds.includes(me.$id)}),$(g,V,!0)});function x(V){a(g)[V]=!a(g)[V]}var b=nv(),y=u(b),k=u(y),S=u(k),P=u(S),E=d(S,2);E.__click=[ao,r,t];var N=u(E);vt(N,{class:"h-4 w-4"});var I=d(k,2),C=u(I);{var ue=V=>{var me=Jf(),Oe=u(me);_a(Oe,{class:"h-4 w-4"});var de=d(Oe,2),ve=u(de);q(()=>R(ve,a(n))),v(V,me)};A(C,V=>{a(n)&&V(ue)})}var J=d(C,2);{var L=V=>{var me=Yf(),Oe=u(me),de=u(Oe),ve=u(de);pr(ve,{class:"h-4 w-4 opacity-50"});var X=d(ve,2),Se=d(de,2);{let _e=G(()=>M.uniqueStores.map(Ce=>({id:Ce,label:Ce,disabled:Ce===o.storeName})));ta(Se,{get suggestions(){return a(_e)},onSuggestionClick:Ce=>{o.storeName=Ce.label},title:"Suggestions de magasins :"})}var Ne=d(Oe,2),ye=u(Ne);q(()=>{X.disabled=a(r),ye.disabled=a(r)}),Re(X,()=>o.storeName,_e=>o.storeName=_e),Re(ye,()=>o.storeComment,_e=>o.storeComment=_e),v(V,me)};A(J,V=>{a(i)&&V(L)})}var Z=d(J,2);{var re=V=>{var me=ev(),Oe=u(me),de=u(Oe),ve=u(de);ve.__keydown=Te=>{Te.key==="Enter"&&(Te.preventDefault(),p(Te.currentTarget.value),Te.currentTarget.value="")};var X=d(ve,2);X.__click=Te=>{const it=Te.currentTarget.previousElementSibling;p(it.value),it.value=""};var Se=u(X);Ri(Se,{class:"h-4 w-4"});var Ne=d(de,2);{var ye=Te=>{var it=Ff();tt(it,20,()=>o.whoNames,Ze=>Ze,(Ze,At)=>{var Nt=Xf(),ee=u(Nt),z=u(ee),ie=d(ee,2);ie.__click=[Zf,_,At];var Le=u(ie);vt(Le,{class:"h-3 w-3"}),q(()=>{R(z,At),ie.disabled=a(r)}),v(Ze,Nt)}),v(Te,it)};A(Ne,Te=>{o.whoNames.length>0&&Te(ye)})}var _e=d(Ne,2);{var Ce=Te=>{{let it=G(()=>M.uniqueWho.slice(0,8).map(Ze=>({id:Ze,label:Ze,disabled:o.whoNames.includes(Ze)})));ta(Te,{get suggestions(){return a(it)},onSuggestionClick:Ze=>p(Ze.label),title:"Suggestions :"})}};A(_e,Te=>{M.uniqueWho.length>0&&Te(Ce)})}q(()=>{ve.disabled=a(r),X.disabled=a(r)}),v(V,me)};A(Z,V=>{a(l)&&V(re)})}var D=d(Z,2),j=d(u(D),2);ma(j,{get items(){return a(c)},onToggleItem:x,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var F=d(I,2),$e=u(F);$e.__click=[ao,r,t];var B=d($e,2);B.__click=[Kf,m,r,n,s,f,t,i,o,l];var oe=u(B);{var Ee=V=>{var me=tv();v(V,me)},Ie=V=>{var me=rv(),Oe=O(me);Ln(Oe,{class:"h-4 w-4"});var de=d(Oe);q(()=>R(de,` Appliquer à ${a(f).length??""} produit(s)`)),v(V,me)};A(oe,V=>{a(r)?V(Ee):V(Ie,!1)})}q(()=>{R(P,a(h)),E.disabled=a(r),$e.disabled=a(r),B.disabled=a(r)||!a(m)}),v(e,b),K()}ut(["click","keydown"]);function av(e,t){const r=e.reduce((s,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return s+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function ov(e,t){const r=e.filter(i=>!i.isSynced).map(i=>({productId:i.productId,productData:i.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(i){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",i)}const s=e.flatMap(i=>i.missingQuantities.map(l=>({productId:i.productId,quantity:l.q,unit:l.u,status:"delivered",notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:null,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:s},invoiceData:t}}async function iv(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=av(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const s=100,o=[];if(n<=s)o.push(t);else{let p=[],_=0;for(const g of t){const x=(g.isSynced?0:1)+g.missingQuantities.length;_+x>s?(p.length>0&&o.push(p),p=[g],_=x):(p.push(g),_+=x)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<o.length;p++){const _=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${_.length} produits)`);try{const g=await ov(_,r),x=await lv(g);if(i.push(x),x.success)l+=x.productsCreated,c+=x.purchasesCreated,f+=x.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${x.error}`);break}}catch(g){const x=g instanceof Error?g.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,g),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:x,timestamp:new Date().toISOString()});break}}const h=i.every(p=>p.success),m=i.some(p=>!p.success);return{success:h,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:m?"Un ou plusieurs lots ont échoué":void 0}}async function lv(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const s=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const o=JSON.parse(s.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}function cv(e,t){$(t,!a(t))}var uv=w('<span class="text-base-content font-semibold"> </span>'),dv=w('<div class="text-base-content/80 flex-1"> </div>'),fv=w('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),vv=w('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),hv=w('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function pv(e,t){let r=Be(t,"icon",3,Xu),n=Be(t,"class",3,""),s=Be(t,"initiallyOpen",3,!1),o=r(),i=Y(je(s())),l=je(t.children);var c=hv(),f=u(c);f.__click=[cv,i];var h=u(f),m=u(h);o(m,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(m,2);{var _=P=>{var E=uv(),N=u(E);q(()=>R(N,t.title)),v(P,E)};A(p,P=>{t.title&&P(_)})}var g=d(h,2);{var x=P=>{var E=dv(),N=u(E);q(()=>R(N,t.contentVisible)),v(P,E)};A(g,P=>{t.contentVisible&&P(x)})}var b=d(g,2);{var y=P=>{var E=fv(),N=u(E),I=u(N);{var C=L=>{var Z=lt("en savoir plus");v(L,Z)},ue=L=>{var Z=lt("masquer");v(L,Z)};A(I,L=>{a(i)?L(ue,!1):L(C)})}var J=d(N,2);{let L=G(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${a(i)?"rotate-180":""}`);Gu(J,{get class(){return a(L)}})}v(P,E)};A(b,P=>{l&&P(y)})}var k=d(f,2);{var S=P=>{var E=vv(),N=u(E),I=u(N);ne(I,()=>t.children??te),q(()=>Ae(E,1,`overflow-hidden transition-all duration-200 ${a(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),v(P,E)};A(k,P=>{l&&P(S)})}q(()=>{Ae(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Xo(c,t.style),Ae(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Rr(f,"aria-expanded",a(i))}),v(e,c)}ut(["click"]);async function _v(e,t,r,n,s,o,i,l){if(!(!a(t)||a(r))){$(r,!0),$(n,null),$(s,null);try{const c=`FACTURE_${Date.now()}`,f=a(o).map(_=>_.$id);M.setSyncStatus(f,!0);const h=[];for(const _ of a(o))h.push({productId:_.$id,isSynced:_.isSynced,productData:_,missingQuantities:_.missingQuantityArray||[]});const m={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${a(o).length} produits`,who:i.who.trim()||void 0};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${h.length} produits...`),l.onClose();const p=await iv(M.currentMainId,h,m);if(p.success)$(s,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";$(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),M.clearSyncStatus()}finally{$(r,!1)}}}function oo(e,t,r){a(t)||r.onClose()}var mv=w('<div class="alert alert-error"><!> <span> </span></div>'),gv=w('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),bv=w(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),yv=w("<option> </option>"),wv=w("<option> </option>"),Sv=w('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),xv=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Pv=w("<!> ",1),Ev=w(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option>Annulé</option></select> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function $v(e,t){H(t,!0);let r=Y(!1),n=Y(null),s=Y(null),o=je({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=Y(je(new Set));vn(()=>{$(i,new Set(t.products.map(W=>W.$id)),!0)});const l=G(()=>t.products.filter(W=>a(i).has(W.$id))),c=G(()=>a(l).length!==0),f=G(()=>`Achat groupé (${a(l).length} produits sélectionnés)`);function h(W){const ge=new Set(a(i));ge.has(W)?ge.delete(W):ge.add(W),$(i,ge,!0)}const m=G(()=>t.products.map(W=>({id:W.$id,label:W.productName,title:W.productName})));var p=Ev(),_=u(p),g=u(_),x=u(g),b=u(x);hr(b,{class:"h-5 w-5"});var y=d(b),k=d(x,2);k.__click=[oo,r,t];var S=u(k);vt(S,{class:"h-4 w-4"});var P=d(g,2),E=u(P);{var N=W=>{var ge=mv(),ke=u(ge);_a(ke,{class:"h-4 w-4"});var Je=d(ke,2),Ue=u(Je);q(()=>R(Ue,a(n))),v(W,ge)};A(E,W=>{a(n)&&W(N)})}var I=d(E,2);{var C=W=>{var ge=gv(),ke=u(ge);Ln(ke,{class:"h-4 w-4"});var Je=d(ke,2),Ue=u(Je),Xe=d(Ue);{var mt=rt=>{var Ge=lt("+ 1 dépense globale");v(rt,Ge)};A(Xe,rt=>{a(s).expense&&rt(mt)})}var St=d(Xe,2);{var xt=rt=>{var Ge=lt();q(()=>R(Ge,`(traité en ${a(s).batches??""} lots)`)),v(rt,Ge)};A(St,rt=>{a(s).batches&&a(s).batches>1&&rt(xt)})}q(()=>R(Ue,`Achat groupé créé avec succès ! ${a(s).purchases??""} produit(s) validés `)),v(W,ge)};A(I,W=>{a(s)&&W(C)})}var ue=d(I,2),J=u(ue);pv(J,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(W,ge)=>{var ke=bv();v(W,ke)},$$slots:{default:!0}});var L=d(ue,2),Z=d(u(L),2),re=u(Z),D=u(re),j=u(D);pr(j,{class:"h-4 w-4 opacity-50"});var F=d(j,2),$e=d(D,2);tt($e,21,()=>M.uniqueStores,Us,(W,ge)=>{var ke=yv(),Je=u(ke),Ue={};q(()=>{R(Je,a(ge)),Ue!==(Ue=a(ge))&&(ke.value=(ke.__value=a(ge))??"")}),v(W,ke)});var B=d(re,2),oe=u(B),Ee=u(oe);ys(Ee,{class:"h-4 w-4 opacity-50"});var Ie=d(Ee,2),V=d(oe,2);tt(V,21,()=>M.uniqueWho,Us,(W,ge)=>{var ke=wv(),Je=u(ke),Ue={};q(()=>{R(Je,a(ge)),Ue!==(Ue=a(ge))&&(ke.value=(ke.__value=a(ge))??"")}),v(W,ke)});var me=d(B,2),Oe=u(me),de=u(Oe);Zu(de,{class:"h-4 w-4 opacity-50"});var ve=d(de,2),X=d(Z,2),Se=u(X),Ne=u(Se),ye=u(Ne);ye.value=ye.__value="delivered";var _e=d(ye);_e.value=_e.__value="ordered";var Ce=d(_e);Ce.value=Ce.__value="requested";var Te=d(Ce);Te.value=Te.__value="cancelled";var it=d(Ne,2),Ze=d(Se,2);{var At=W=>{var ge=Sv(),ke=u(ge),Je=d(u(ke),2);q(()=>Je.disabled=a(r)),Re(Je,()=>o.deliveryDate,Ue=>o.deliveryDate=Ue),v(W,ge)};A(Ze,W=>{o.status==="ordered"&&W(At)})}var Nt=d(X,2),ee=u(Nt),z=u(ee);pa(z,{class:"h-4 w-4 opacity-50"});var ie=d(z,2),Le=d(L,2),dt=d(u(Le),2);ma(dt,{get items(){return a(m)},onToggleItem:h,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var fe=d(Le,2),De=u(fe);De.__click=[oo,r,t];var Ke=d(De,2);Ke.__click=[_v,c,r,n,s,l,o,t];var Ot=u(Ke);{var nr=W=>{var ge=xv();v(W,ge)},br=W=>{var ge=Pv(),ke=O(ge);hr(ke,{class:"h-4 w-4"});var Je=d(ke);q(()=>R(Je,` Valider ${a(l).length??""} produit(s)`)),v(W,ge)};A(Ot,W=>{a(r)?W(nr):W(br,!1)})}q(()=>{R(y,` ${a(f)??""}`),k.disabled=a(r),F.disabled=a(r),Ie.disabled=a(r),ve.disabled=a(r),Ne.disabled=a(r),Ae(it,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),ie.disabled=a(r),De.disabled=a(r),Ke.disabled=a(r)||!a(c)}),Re(F,()=>o.store,W=>o.store=W),Re(Ie,()=>o.who,W=>o.who=W),Re(ve,()=>o.expense,W=>o.expense=W),Nr(Ne,()=>o.status,W=>o.status=W),Re(ie,()=>o.notes,W=>o.notes=W),v(e,p),K()}ut(["click"]);var Tv=()=>M.setGroupBy("none"),kv=()=>M.setGroupBy("store"),Av=()=>M.setGroupBy("productType"),Nv=(e,t)=>M.toggleProductType(t),Iv=w("<button><!> </button>"),Cv=()=>M.toggleTemperature("frais"),Dv=()=>M.toggleTemperature("surgele"),Mv=()=>M.clearTypeAndTemperatureFilters(),Rv=w('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Ov=(e,t)=>M.toggleStore(t),qv=w("<button> </button>"),Bv=w('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),jv=(e,t)=>M.toggleWho(t),Lv=w("<button> </button>"),zv=w('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Uv=(e,t)=>{M.clearFilters(),$(t,!1)},Vv=w('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Wv(e,t){H(t,!0);let r=Y(!1);const n=G(()=>M.filters),s=G(()=>M.uniqueStores),o=G(()=>M.uniqueWho),i=G(()=>M.uniqueProductTypes);var l=Vv(),c=O(l),f=u(c),h=d(f,2),m=d(u(h),2),p=u(m),_=u(p),g=u(_);Ys(g,{class:"w-5 h-5"});var x=d(_,2),b=u(x);vt(b,{class:"w-4 h-4"});var y=d(p,2),k=d(u(y),2),S=u(k);S.__change=[Tv];var P=d(S,2);P.__change=[kv];var E=d(P,2);E.__change=[Av];var N=d(y,2),I=u(N),C=d(u(I),2);tt(C,20,()=>a(i),de=>de,(de,ve)=>{const X=G(()=>ns(ve));var Se=Iv();Se.__click=[Nv,ve];var Ne=u(Se);Ar(Ne,()=>a(X).icon,(_e,Ce)=>{Ce(_e,{class:"w-3 h-3 mr-1"})});var ye=d(Ne);q(_e=>{Ae(Se,1,`btn btn-sm ${_e??""}`),R(ye,` ${a(X).displayName??""}`)},[()=>a(n).selectedProductTypes.length===0?"btn-soft btn-accent":a(n).selectedProductTypes.includes(ve)?"btn-accent":"btn-dash btn-accent"]),v(de,Se)});var ue=d(C,2),J=u(ue);J.__click=[Cv];var L=u(J);Zs(L,{class:"w-3 h-3"});var Z=d(J,2);Z.__click=[Dv];var re=u(Z);Xs(re,{class:"w-3 h-3"});var D=d(Z,2);{var j=de=>{var ve=Rv();ve.__click=[Mv];var X=u(ve);vt(X,{class:"w-3 h-3"}),v(de,ve)};A(D,de=>{(a(n).selectedProductTypes.length>0||a(n).selectedTemperatures.length>0)&&de(j)})}var F=d(N,2);{var $e=de=>{var ve=Bv(),X=u(ve),Se=d(u(X),2);tt(Se,20,()=>a(s),Ne=>Ne,(Ne,ye)=>{var _e=qv();_e.__click=[Ov,ye];var Ce=u(_e);q(Te=>{Ae(_e,1,`btn btn-sm ${Te??""}`),R(Ce,ye)},[()=>a(n).selectedStores.length===0?"btn-soft btn-accent":a(n).selectedStores.includes(ye)?"btn-accent":"btn-dash btn-accent"]),v(Ne,_e)}),v(de,ve)};A(F,de=>{a(s).length>0&&de($e)})}var B=d(F,2);{var oe=de=>{var ve=zv(),X=u(ve),Se=d(u(X),2);tt(Se,20,()=>a(o),Ne=>Ne,(Ne,ye)=>{var _e=Lv();_e.__click=[jv,ye];var Ce=u(_e);q(Te=>{Ae(_e,1,`btn btn-sm ${Te??""}`),R(Ce,ye)},[()=>a(n).selectedWho.length===0?"btn-soft btn-accent":a(n).selectedWho.includes(ye)?"btn-accent":"btn-dash btn-accent"]),v(Ne,_e)}),v(de,ve)};A(B,de=>{a(o).length>0&&de(oe)})}var Ee=d(B,4);Ee.__click=[Uv,r];var Ie=u(Ee);vt(Ie,{class:"w-4 h-4 mr-2"});var V=d(c,2),me=u(V),Oe=u(me);Ys(Oe,{class:"w-6 h-6"}),q((de,ve)=>{tn(S,a(n).groupBy==="none"),tn(P,a(n).groupBy==="store"),tn(E,a(n).groupBy==="productType"),Ae(J,1,`btn btn-sm ${de??""}`),Ae(Z,1,`btn btn-sm ${ve??""}`)},[()=>a(n).selectedTemperatures.length===0?"btn-soft btn-success":a(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(n).selectedTemperatures.length===0?"btn-soft btn-info":a(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),kc(f,()=>a(r),de=>$(r,de)),v(e,l),K()}ut(["change","click"]);var Gv=(e,t,r)=>t(r),Qv=w("<button><span> </span> <!></button>"),Hv=(e,t)=>t(),Kv=w('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1"><!> <button class="btn btn-sm btn-primary btn-outline ms-4" type="button"><span>Toutes les dates</span></button></div></fieldset></div></div>');function Jv(e,t){H(t,!0);const n=[...Be(t,"allDates",19,()=>[])()].sort();let s=n[0],o=n[n.length-1],i=Y(je(s)),l=Y(je(o));function c(S){a(i)===S&&a(l)===S?p():new Date(S)<new Date(a(i))?$(i,S,!0):(new Date(S)>new Date(a(l))||$(i,S,!0),$(l,S,!0))}function f(S){return new Date(S)>=new Date(a(i))&&new Date(S)<=new Date(a(l))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function h(S){return new Date(S).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function m(S){const E=new Date(S).getUTCHours();return E===12?"sun":E===20?"moon":E===8?"cloud":null}function p(){$(i,s,!0),$(l,o,!0)}vn(()=>{M.setDateRange(a(i),a(l))});var _=Kv(),g=u(_),x=u(g),b=d(u(x),2),y=u(b);tt(y,18,()=>n,S=>S,(S,P)=>{var E=Qv();E.__click=[Gv,c,P];var N=u(E),I=u(N),C=d(N,2);{var ue=L=>{fd(L,{size:16})},J=L=>{var Z=Q(),re=O(Z);{var D=F=>{sd(F,{size:16})},j=F=>{var $e=Q(),B=O($e);{var oe=Ee=>{Ju(Ee,{size:16})};A(B,Ee=>{m(P)==="cloud"&&Ee(oe)},!0)}v(F,$e)};A(re,F=>{m(P)==="moon"?F(D):F(j,!1)},!0)}v(L,Z)};A(C,L=>{m(P)==="sun"?L(ue):L(J,!1)})}q((L,Z)=>{Ae(E,1,`btn btn-sm ${L??""}`),R(I,Z)},[()=>f(P),()=>h(P)]),v(S,E)});var k=d(y,2);k.__click=[Hv,p],v(e,_),K()}ut(["click"]);const Tn=e=>{var t=Zv(),r=u(t);is(r,{class:"h-4 w-4 text-amber-600"}),v(e,t)};function Yv(){}var Zv=w('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),Xv=()=>M.clearFilters(),Fv=e=>M.setSearchQuery(e.currentTarget.value),eh=()=>M.setGroupBy("none"),th=()=>M.setGroupBy("store"),rh=()=>M.setGroupBy("productType"),nh=(e,t)=>M.toggleProductType(t),sh=w("<button><!> </button>"),ah=()=>M.toggleTemperature("frais"),oh=()=>M.toggleTemperature("surgele"),ih=()=>M.clearTypeAndTemperatureFilters(),lh=w('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),ch=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),uh=(e,t)=>M.toggleStore(t),dh=w("<button><!> </button>"),fh=()=>M.clearStoreFilters(),vh=w('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),hh=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),ph=(e,t)=>M.toggleWho(t),_h=w("<button><!> </button>"),mh=()=>M.clearWhoFilters(),gh=w('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),bh=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),yh=()=>M.handleSort("productName"),wh=()=>M.handleSort("store"),Sh=()=>M.handleSort("who"),xh=()=>M.handleSort("productType"),Ph=w('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Eh=(e,t,r)=>t("store",r().map(n=>n.$id),r()),$h=(e,t,r)=>t("who",r().map(n=>n.$id),r()),Th=(e,t,r)=>t(r()),kh=w(`<button class="btn btn-sm btn-success btn-soft" title="Ouvrir le modal d'achat groupé"><!> Achat groupé <!></button>`),Ah=w('<tr class="bg-base-200 sticky top-11 z-10 font-semibold"><td colspan="7" class="py-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!></div> <div class="flex items-center gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> Magasin <!></button> <button class="btn btn-sm btn-info btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> Volontaires <!></button> <!></div></div></td></tr>'),Nh=(e,t,r)=>t(a(r).$id,"recettes"),Ih=w('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),Ch=w('<div class="text-base-content/60 text-xs"> </div>'),Dh=w('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Mh=w('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Rh=(e,t,r)=>t(a(r).$id,"magasins"),Oh=w('<div class="tooltip tooltip-info"><div class="text-center"> </div></div>'),qh=w('<div class="text-center"> </div>'),Bh=(e,t,r)=>t(a(r).$id,"volontaires"),jh=w('<span class="badge badge-soft badge-info badge-sm"> </span>'),Lh=w('<div class="flex flex-wrap justify-center gap-2 pr-8"></div>'),zh=(e,t,r)=>t(a(r).$id,"recettes"),Uh=w('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Vh=(e,t,r)=>t(a(r).$id,"achats"),Wh=w("<div><!> <span> </span></div>"),Gh=w('<span class="text-center">-</span>'),Qh=(e,t,r)=>t(a(r)),Hh=w('<div class="flex items-center justify-center gap-2"><div class="bg-warning m-auto rounded px-2 py-1"> <button class="btn btn-xs btn-ghost text-base-content/70 btn-circle btn-outline hover:btn-success hover:text-success-content ms-3 transition-all hover:scale-105" title="Déclarer comme acheté"><!></button></div></div>'),Kh=w('<tr><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><!> <div><div class="font-medium"> </div> <!></div></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-2 text-center text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap justify-center gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),Jh=w("<!> <!>",1),Yh=w('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Zh=w('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><!> <div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!> <!> <!>',1);function Xh(e,t){H(t,!0);const r={Package:Un,MessageCircleQuestionMark:nd,ShoppingCart:hr,Clock:Ku,CircleCheck:Qu,CircleX:Hu},n=G(()=>M.displayProducts),s=G(()=>M.stats),o=G(()=>M.uniqueStores),i=G(()=>M.uniqueWho),l=G(()=>M.uniqueProductTypes),c=G(()=>M.filters);let f=Y(null),h=Y("recettes"),m=Y(!1),p=Y("store"),_=Y(je([])),g=Y(je([])),x=Y(!1),b=Y(je([]));function y(U,he="recettes"){$(h,he,!0),$(f,U,!0)}function k(){$(f,null)}function S(U,he,Ye){$(p,U,!0),$(_,he,!0),$(g,Ye,!0),$(m,!0)}function P(){$(m,!1),$(p,"store"),$(_,[],!0),$(g,[],!0)}function E(U){console.log(`[ProductsTable] Modification groupée réussie: ${U.updatedCount} produits`)}function N(U){const he=U.filter(Ye=>Ye.displayMissingQuantity!=="✅ Complet"&&Ye.missingQuantityArray&&Ye.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${U.length} produits reçus → ${he.length} produits avec quantités manquantes`),$(b,he,!0),$(x,!0)}function I(){$(x,!1),$(b,[],!0)}function C(){console.log("[ProductsTable] Achat groupé créé avec succès"),I()}async function ue(U){try{if(!M.currentMainId)throw new Error("mainId non disponible");const he=U.missingQuantityArray||[];if(he.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let Ye=U.$id;U.isSynced||(console.log(`[ProductsTable] Produit ${U.$id} local, création pour validation rapide...`),Ye=(await ur(U.$id,{},Qe=>M.getEnrichedProductById(Qe))).$id,console.log(`[ProductsTable] Produit sync créé: ${Ye}`)),await Mi(M.currentMainId,Ye,he,{store:U.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${U.productName}`)}catch(he){console.error("[ProductsTable] Erreur validation rapide:",he),alert("Erreur lors de la validation rapide: "+he.message)}}var J=Zh(),L=O(J),Z=u(L),re=u(Z),D=u(re);to(D,{class:"mr-1 h-4 w-4"});var j=d(D),F=d(re,2);F.__click=[Yv];var $e=u(F);id($e,{class:"mr-1 h-4 w-4"});var B=d(Z,2),oe=u(B),Ee=u(oe),Ie=u(Ee),V=u(Ie);Ys(V,{class:"h-5 w-5"});var me=d(Ie,2);me.__click=[Xv];var Oe=u(me);vt(Oe,{class:"h-4 w-4"});var de=d(oe,2),ve=u(de),X=d(u(ve),2),Se=u(X);dd(Se,{class:"h-4 w-4"});var Ne=d(Se,2);Ne.__input=[Fv];var ye=d(ve,2),_e=d(u(ye),2),Ce=u(_e);Ce.__change=[eh];var Te=d(Ce,2);Te.__change=[th];var it=d(Te,2);it.__change=[rh];var Ze=d(de,2),At=u(Ze);Jv(At,{get allDates(){return M.allDates}});var Nt=d(At,2),ee=u(Nt);{var z=U=>{var he=ch(),Ye=u(he),be=d(u(Ye),2),Qe=u(be);tt(Qe,16,()=>a(l),nt=>nt,(nt,st)=>{const Kt=G(()=>ns(st));var Ct=sh();Ct.__click=[nh,st];var lr=u(Ct);Ar(lr,()=>a(Kt).icon,(cr,Kr)=>{Kr(cr,{class:"mr-1 h-5 w-5"})});var Hr=d(lr);q(cr=>{Ae(Ct,1,`btn btn-sm ${cr??""}`),R(Hr,` ${a(Kt).displayName??""}`)},[()=>a(c).selectedProductTypes.length===0?"btn-soft btn-accent":a(c).selectedProductTypes.includes(st)?"btn-accent":"btn-dash btn-accent"]),v(nt,Ct)});var It=d(Qe,2);It.__click=[ah];var ir=u(It);Zs(ir,{class:"h-5 w-5"});var Ve=d(It,2);Ve.__click=[oh];var Fe=u(Ve);Xs(Fe,{class:"h-5 w-5"});var ze=d(Ve,2);{var pe=nt=>{var st=lh();st.__click=[ih];var Kt=u(st);vt(Kt,{class:"h-3 w-3"}),v(nt,st)};A(ze,nt=>{(a(c).selectedProductTypes.length>0||a(c).selectedTemperatures.length>0)&&nt(pe)})}q((nt,st)=>{Ae(It,1,`btn btn-sm ms-4 ${nt??""}`),Ae(Ve,1,`btn btn-sm ${st??""}`)},[()=>a(c).selectedTemperatures.length===0?"btn-soft btn-success":a(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(c).selectedTemperatures.length===0?"btn-soft btn-info":a(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),v(U,he)};A(ee,U=>{a(l).length>0&&U(z)})}var ie=d(Nt,2),Le=u(ie);{var dt=U=>{var he=hh(),Ye=u(he),be=d(u(Ye),2),Qe=u(be);tt(Qe,16,()=>a(o),Ve=>Ve,(Ve,Fe)=>{var ze=dh();ze.__click=[uh,Fe];var pe=u(ze);pr(pe,{class:"mr-1 h-3 w-3"});var nt=d(pe);q(st=>{Ae(ze,1,`btn btn-xs ${st??""}`),R(nt,` ${Fe??""}`)},[()=>a(c).selectedStores.length===0?"btn-soft btn-accent":a(c).selectedStores.includes(Fe)?"btn-accent":"btn-dash btn-accent"]),v(Ve,ze)});var It=d(Qe,2);{var ir=Ve=>{var Fe=vh();Fe.__click=[fh];var ze=u(Fe);vt(ze,{class:"h-3 w-3"}),v(Ve,Fe)};A(It,Ve=>{a(c).selectedStores.length>0&&Ve(ir)})}v(U,he)};A(Le,U=>{a(o).length>0&&U(dt)})}var fe=d(Le,2);{var De=U=>{var he=bh(),Ye=u(he),be=d(u(Ye),2),Qe=u(be);tt(Qe,16,()=>a(i),Ve=>Ve,(Ve,Fe)=>{var ze=_h();ze.__click=[ph,Fe];var pe=u(ze);ys(pe,{class:"mr-1 h-3 w-3"});var nt=d(pe);q(st=>{Ae(ze,1,`btn btn-xs ${st??""}`),R(nt,` ${Fe??""}`)},[()=>a(c).selectedWho.length===0?" btn-soft btn-info":a(c).selectedWho.includes(Fe)?" btn-info":"btn-dash btn-info"]),v(Ve,ze)});var It=d(Qe,2);{var ir=Ve=>{var Fe=gh();Fe.__click=[mh];var ze=u(Fe);vt(ze,{class:"h-3 w-3"}),v(Ve,Fe)};A(It,Ve=>{a(c).selectedWho.length>0&&Ve(ir)})}v(U,he)};A(fe,U=>{a(i).length>0&&U(De)})}var Ke=d(B,2),Ot=u(Ke),nr=u(Ot),br=u(nr),W=u(br);W.__click=[yh];var ge=u(W),ke=u(ge);to(ke,{class:"h-4 w-4"});var Je=d(ke,2);{var Ue=U=>{var he=lt();q(()=>R(he,a(c).sortDirection==="asc"?"↑":"↓")),v(U,he)};A(Je,U=>{a(c).sortColumn==="productName"&&U(Ue)})}var Xe=d(W);Xe.__click=[wh];var mt=u(Xe),St=u(mt);pr(St,{class:"h-4 w-4"});var xt=d(St,2);{var rt=U=>{var he=lt();q(()=>R(he,a(c).sortDirection==="asc"?"↑":"↓")),v(U,he)};A(xt,U=>{a(c).sortColumn==="store"&&U(rt)})}var Ge=d(Xe);Ge.__click=[Sh];var qt=u(Ge),Gt=u(qt);Fs(Gt,{class:"h-4 w-4"});var sr=d(Gt,2);{var Bt=U=>{var he=lt();q(()=>R(he,a(c).sortDirection==="asc"?"↑":"↓")),v(U,he)};A(sr,U=>{a(c).sortColumn==="who"&&U(Bt)})}var Qt=d(Ge);Qt.__click=[xh];var Ur=u(Qt),yr=d(u(Ur));{var wr=U=>{var he=lt();q(()=>R(he,a(c).sortDirection==="asc"?"↑":"↓")),v(U,he)};A(yr,U=>{a(c).sortColumn==="productType"&&U(wr)})}var ar=d(Qt,2),Sr=u(ar),or=u(Sr);hr(or,{class:"h-4 w-4"});var Vr=d(ar),xr=u(Vr),Wr=u(xr);ed(Wr,{class:"h-4 w-4"});var pn=d(nr);tt(pn,21,()=>Object.entries(a(n)),([U,he])=>U,(U,he)=>{var Ye=G(()=>uo(a(he),2));let be=()=>a(Ye)[0],Qe=()=>a(Ye)[1];var It=Jh(),ir=O(It);{var Ve=ze=>{const pe=G(()=>ns(be()));var nt=Ah(),st=u(nt),Kt=u(st),Ct=u(Kt),lr=u(Ct);{var Hr=Et=>{var gt=lt();q(()=>R(gt,`🏪 ${be()??""} (${Qe().length??""})`)),v(Et,gt)},cr=Et=>{var gt=Q(),Jr=O(gt);{var yn=Jt=>{var Er=Ph(),Hn=u(Er);Ar(Hn,()=>a(pe).icon,(ks,Sn)=>{Sn(ks,{class:"h-4 w-4"})});var Kn=d(Hn,2),wn=u(Kn),Jn=d(Kn,2),Ts=u(Jn);q(()=>{R(wn,a(pe).displayName),R(Ts,`(${Qe().length??""})`)}),v(Jt,Er)},Yr=Jt=>{var Er=lt();q(()=>R(Er,`📦 ${be()??""} (${Qe().length??""})`)),v(Jt,Er)};A(Jr,Jt=>{a(c).groupBy==="productType"?Jt(yn):Jt(Yr,!1)},!0)}v(Et,gt)};A(lr,Et=>{a(c).groupBy==="store"?Et(Hr):Et(cr,!1)})}var Kr=d(Ct,2),gn=u(Kr);gn.__click=[Eh,S,Qe];var Vn=u(gn);pr(Vn,{size:16});var Wn=d(Vn,2);is(Wn,{size:16});var bn=d(gn,2);bn.__click=[$h,S,Qe];var Gn=u(bn);Fs(Gn,{size:16});var Es=d(Gn,2);is(Es,{size:16});var $s=d(bn,2);{var Qn=Et=>{var gt=kh();gt.__click=[Th,N,Qe];var Jr=u(gt);hr(Jr,{size:16});var yn=d(Jr,2);eo(yn,{size:16}),v(Et,gt)};A($s,Et=>{Qe().some(gt=>gt.displayMissingQuantity!=="✅ Complet")&&Et(Qn)})}v(ze,nt)};A(ir,ze=>{be()!==""&&ze(Ve)})}var Fe=d(ir,2);tt(Fe,17,()=>pd(Qe(),a(c)),ze=>ze.$id,(ze,pe)=>{const nt=G(()=>M.getFormattedTotalNeeded(a(pe).$id)),st=G(()=>ns(a(pe).productType)),Kt=G(()=>_d(a(pe).purchases||[]));var Ct=Kh(),lr=u(Ct);lr.__click=[Nh,y,pe];var Hr=u(lr),cr=u(Hr),Kr=u(cr);{var gn=se=>{var xe=Ih(),We=u(xe);td(We,{class:"h-4 w-4 animate-spin"}),v(se,xe)};A(Kr,se=>{a(pe).status==="isSyncing"&&se(gn)})}var Vn=d(Kr,2),Wn=u(Vn),bn=u(Wn),Gn=d(Wn,2);{var Es=se=>{var xe=Ch(),We=u(xe);q(()=>R(We,`Ancien: ${a(pe).previousNames[0]??""}`)),v(se,xe)};A(Gn,se=>{a(pe).previousNames&&a(pe).previousNames.length>0&&se(Es)})}var $s=d(cr,2),Qn=u($s);{var Et=se=>{var xe=Dh(),We=u(xe);Zs(We,{class:"text-success h-4 w-4"}),v(se,xe)};A(Qn,se=>{a(pe).pFrais&&se(Et)})}var gt=d(Qn,2);{var Jr=se=>{var xe=Mh(),We=u(xe);Xs(We,{class:"text-info h-4 w-4"}),v(se,xe)};A(gt,se=>{a(pe).pSurgel&&se(Jr)})}var yn=d(Hr,2);Tn(yn);var Yr=d(lr);Yr.__click=[Rh,y,pe];var Jt=u(Yr);{var Er=se=>{var xe=Oh(),We=u(xe),bt=u(We);q(()=>{Rr(xe,"data-tip",a(pe).storeInfo?.storeComment),R(bt,a(pe).storeInfo?.storeName||"-")}),v(se,xe)},Hn=se=>{var xe=qh(),We=u(xe);q(()=>R(We,a(pe).storeInfo?.storeName||"-")),v(se,xe)};A(Jt,se=>{a(pe).storeInfo?.storeComment?se(Er):se(Hn,!1)})}var Kn=d(Jt,2);Tn(Kn);var wn=d(Yr);wn.__click=[Bh,y,pe];var Jn=u(wn);{var Ts=se=>{var xe=Lh();tt(xe,20,()=>a(pe).who,We=>We,(We,bt)=>{var jt=jh(),$r=u(jt);q(()=>R($r,bt)),v(We,jt)}),v(se,xe)};A(Jn,se=>{a(pe).who&&a(pe).who.length>0&&se(Ts)})}var ks=d(Jn,2);Tn(ks);var Sn=d(wn),Oi=u(Sn),ga=u(Oi);Ar(ga,()=>a(st).icon,(se,xe)=>{xe(se,{class:"h-3 w-3"})});var qi=d(ga),As=d(Sn);As.__click=[zh,y,pe];var ba=u(As),Bi=u(ba),ya=d(ba,2);{var ji=se=>{var xe=Uh(),We=u(xe),bt=u(We),jt=d(bt);ha(jt,{class:"h-3 w-3"});var $r=d(We,2),Yn=u($r),xn=d(Yn);vd(xn,{class:"h-3 w-3"}),q(()=>{R(bt,`${a(pe)?.nbRecipes??""} `),R(Yn,`${a(pe)?.totalAssiettes??""} `)}),v(se,xe)};A(ya,se=>{(a(pe).nbRecipes||a(pe).totalAssiettes)&&se(ji)})}var Li=d(ya,2);Tn(Li);var Ns=d(As);Ns.__click=[Vh,y,pe];var wa=u(Ns),Sa=u(wa);tt(Sa,17,()=>a(Kt),se=>se.status,(se,xe)=>{const We=G(()=>r[a(xe).icon]);var bt=Wh(),jt=u(bt);Ar(jt,()=>a(We),(xn,Ki)=>{Ki(xn,{class:"h-4 w-4"})});var $r=d(jt,2),Yn=u($r);q(xn=>{Ae(bt,1,`badge badge-soft flex items-center gap-2 ${a(xe).badgeClass??""}`),R(Yn,xn)},[()=>ws(a(xe).quantity,a(xe).unit)]),v(se,bt)});var zi=d(Sa,2);{var Ui=se=>{var xe=Gh();v(se,xe)};A(zi,se=>{a(Kt).length===0&&se(Ui)})}var Vi=d(wa,2);Tn(Vi);var Wi=d(Ns),Gi=u(Wi);{var Qi=se=>{var xe=Hh(),We=u(xe),bt=u(We),jt=d(bt);jt.__click=[Qh,ue,pe];var $r=u(jt);Ln($r,{size:16}),q(()=>R(bt,`${a(pe).displayMissingQuantity??""} `)),v(se,xe)},Hi=se=>{eo(se,{size:28,strokeWidth:3,class:"text-success m-auto"})};A(Gi,se=>{a(pe).displayMissingQuantity!=="✅ Complet"?se(Qi):se(Hi,!1)})}q(()=>{Ae(Ct,1,`hover:bg-base-200/20 transition-colors ${a(pe).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-400 bg-blue-50/30":""}`),R(bn,a(pe).productName),Ae(Yr,1,`${a(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Ae(Sn,1,Zo(a(c).groupBy==="productType"?"hidden":"")),R(qi,` ${a(st).displayName??""}`),R(Bi,a(nt))}),v(ze,Ct)}),v(U,It)});var Gr=d(Ot,2);{var Pt=U=>{var he=Yh();v(U,he)};A(Gr,U=>{Object.values(a(n)).flat().length===0&&U(Pt)})}var Ht=d(L,2);{var _n=U=>{Hf(U,{get productId(){return a(f)},get initialTab(){return a(h)},onClose:k})};A(Ht,U=>{a(f)&&U(_n)})}var Qr=d(Ht,2);{var mn=U=>{sv(U,{get productIds(){return a(_)},get products(){return a(g)},get editType(){return a(p)},onClose:P,onSuccess:E})};A(Qr,U=>{a(m)&&U(mn)})}var Pr=d(Qr,2);{var xs=U=>{$v(U,{get products(){return a(b)},onClose:I,onSuccess:C})};A(Pr,U=>{a(x)&&U(xs)})}var Ps=d(Pr,2);Wv(Ps,{}),q(()=>{R(j,` ${a(s).total??""}`),Ec(Ne,a(c).searchQuery),tn(Ce,a(c).groupBy==="none"),tn(Te,a(c).groupBy==="store"),tn(it,a(c).groupBy==="productType"),Ae(Xe,1,`hover:bg-base-100 cursor-pointer text-center ${a(c).groupBy==="store"?"hidden":""}`),Ae(Qt,1,`hover:bg-base-100 cursor-pointer text-center ${a(c).groupBy==="productType"?"hidden":""}`)}),v(e,J),K()}ut(["click","input","change"]);Nl();var Fh=w('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function ep(e){var t=Fh();v(e,t)}var tp=w('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function rp(e,t){var r=tp(),n=d(u(r),2),s=d(u(n),2),o=u(s);q(()=>R(o,t.message)),v(e,r)}var np=w('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function sp(e,t){var r=np(),n=u(r),s=u(n);_a(s,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(s,2),i=d(u(o),2),l=u(i);q(()=>R(l,t.message||"Erreur inconnue")),v(e,r)}var ap=w('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),op=w('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),ip=w('<div class="text-base-content/60"> </div>'),lp=w('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),cp=w('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),up=w('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),dp=w('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function fp(e,t){H(t,!0);let r,n=Y(null),s=Y(!0),o=Y(!1);ni(async()=>{r=qu();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await M.initialize(r)}catch(B){const oe=B instanceof Error?B.message:"Erreur lors de l'initialisation";$(n,oe,!0),console.error("[App] Erreur initialisation:",B)}finally{$(s,!1)}}),Cc(()=>{M.destroy()});async function i(){if(!(!r||a(o))){$(o,!0);try{await M.forceReload(r)}catch(B){console.error("[App] Erreur lors du rechargement forcé:",B)}finally{$(o,!1)}}}const l=G(()=>a(n)||M.error),c=G(()=>a(s)||M.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var h=dp(),m=u(h),p=u(m),_=u(p),g=d(u(_),2),x=u(g);{var b=B=>{var oe=ap();v(B,oe)};A(x,B=>{M.realtimeConnected&&B(b)})}var y=d(x,2);{var k=B=>{var oe=op();v(B,oe)};A(y,B=>{M.syncing&&B(k)})}var S=d(y,2);{var P=B=>{var oe=ip(),Ee=u(oe);q(Ie=>R(Ee,`Maj: ${Ie??""}`),[()=>new Date(M.lastSync).toLocaleTimeString()]),v(B,oe)};A(S,B=>{M.lastSync&&B(P)})}var E=d(S,2);{var N=B=>{var oe=lp();let Ee;oe.__click=i;var Ie=u(oe);ld(Ie,{class:"h-4 w-4"}),q(V=>{Ee=Ae(oe,1,"btn btn-outline btn-sm",null,Ee,V),oe.disabled=a(o)||M.loading},[()=>({loading:a(o)||M.loading})]),v(B,oe)};A(E,B=>{a(n)||B(N)})}var I=d(E,2);{var C=B=>{var oe=cp(),Ee=u(oe),Ie=u(Ee);rd(Ie,{class:"mr-2 h-4 w-4"}),q(()=>Rr(Ee,"href",f)),v(B,oe)};A(I,B=>{a(n)&&B(C)})}var ue=d(m,2),J=u(ue);{var L=B=>{sp(B,{get message(){return a(l)}})},Z=B=>{var oe=Q(),Ee=O(oe);{var Ie=V=>{rp(V,{get message(){return a(l)}})};A(Ee,V=>{a(l)&&V(Ie)},!0)}v(B,oe)};A(J,B=>{a(n)?B(L):B(Z,!1)})}var re=d(J,2);{var D=B=>{ep(B)};A(re,B=>{a(c)&&B(D)})}var j=d(re,2);{var F=B=>{Xh(B,{})},$e=B=>{var oe=Q(),Ee=O(oe);{var Ie=V=>{var me=up();v(V,me)};A(Ee,V=>{!M.loading&&!a(n)&&V(Ie)},!0)}v(B,oe)};A(j,B=>{M.enrichedProducts.length>0?B(F):B($e,!1)})}v(e,h),K()}ut(["click"]);hc(fp,{target:document.getElementById("app_products")});
