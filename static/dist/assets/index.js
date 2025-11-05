(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const co=!1;var fs=Array.isArray,Xi=Array.prototype.indexOf,aa=Array.from,zs=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,Fi=Object.getOwnPropertyDescriptors,el=Object.prototype,tl=Array.prototype,uo=Object.getPrototypeOf,Pa=Object.isExtensible;function En(e){return typeof e=="function"}const ne=()=>{};function rl(e){for(var t=0;t<e.length;t++)e[t]()}function fo(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function vo(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const _t=2,oa=4,ia=8,qr=16,Ft=32,Br=64,la=128,Tt=256,ls=512,ct=1024,wt=2048,gr=4096,Mt=8192,jr=16384,ca=32768,Lr=65536,Ea=1<<17,nl=1<<18,fn=1<<19,sl=1<<20,Vs=1<<21,vs=1<<22,Ir=1<<23,Cr=Symbol("$state"),ho=Symbol("legacy props"),al=Symbol(""),In=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function po(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ol(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function il(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ll(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function cl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ul(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function dl(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function fl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function vl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function hl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function pl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const hs=1,ps=2,_o=4,_l=8,ml=16,gl=1,bl=2,yl=4,wl=8,Sl=16,xl=1,Pl=2,et=Symbol(),El="http://www.w3.org/1999/xhtml",$l="http://www.w3.org/2000/svg",kl="@attach";function Al(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Tl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Nl=!1;function mo(e){return e===this.v}function go(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Il(e,t){return e!==t}function bo(e){return!go(e,this.v)}let vn=!1,Cl=!1;function Dl(){vn=!0}let Ge=null;function nn(e){Ge=e}function Y(e,t=!1,r){Ge={p:Ge,c:null,e:null,s:e,x:null,l:vn&&!t?{s:null,u:null,$:[]}:null}}function Z(e){var t=Ge,r=t.e;if(r!==null){t.e=null;for(var n of r)Ro(n)}return Ge=t.p,{}}function hn(){return!vn||Ge!==null&&Ge.l===null}let Ar=[];function yo(){var e=Ar;Ar=[],rl(e)}function Dr(e){if(Ar.length===0&&!Cn){var t=Ar;queueMicrotask(()=>{t===Ar&&yo()})}Ar.push(e)}function Ml(){for(;Ar.length>0;)yo()}const Rl=new WeakMap;function wo(e){var t=we;if(t===null)return Ee.f|=Ir,e;if((t.f&ca)===0){if((t.f&la)===0)throw!t.parent&&e instanceof Error&&So(e),e;t.b.error(e)}else sn(e,t)}function sn(e,t){for(;t!==null;){if((t.f&la)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&So(e),e}function So(e){const t=Rl.get(e);t&&(zs(e,"message",{value:t.message}),zs(e,"stack",{value:t.stack}))}const ts=new Set;let Me=null,ns=null,Us=new Set,Vt=[],_s=null,Ws=!1,Cn=!1;class At{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#l=[];#o=[];#i=[];#s=[];#a=[];#d=[];skipped_effects=new Set;process(t){Vt=[],ns=null;var r=At.apply(this);for(const o of t)this.#v(o);if(this.#c===0){this.#f();var n=this.#o,s=this.#i;this.#o=[],this.#i=[],this.#s=[],ns=this,Me=null,$a(n),$a(s),ns=null,this.#u?.resolve()}else this.#n(this.#o),this.#n(this.#i),this.#n(this.#s);r();for(const o of this.#l)qn(o);this.#l=[]}#v(t){t.f^=ct;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Ft|Br))!==0,o=s&&(n&ct)!==0,i=o||(n&Mt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){s?r.f^=ct:(n&oa)!==0?this.#i.push(r):(n&ct)===0&&((n&vs)!==0&&r.b?.is_pending()?this.#l.push(r):ws(r)&&((r.f&qr)!==0&&this.#s.push(r),qn(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#n(t){for(const r of t)((r.f&wt)!==0?this.#a:this.#d).push(r),vt(r,ct);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){Me=this}deactivate(){Me=null}flush(){if(Vt.length>0){if(this.activate(),xo(),Me!==null&&Me!==this)return}else this.#c===0&&this.#f();this.deactivate();for(const t of Us)if(Us.delete(t),t(),Me!==null)break}#f(){for(const t of this.#r)t();if(this.#r.clear(),ts.size>1){this.#e.clear();let t=!0;for(const r of ts){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;Po(n)}if(Vt.length>0){Me=r;const n=At.apply(r);for(const s of Vt)r.#v(s);Vt=[],n()}}Me=null}ts.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#a)vt(t,wt),Mr(t);for(const t of this.#d)vt(t,gr),Mr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=fo()).promise}static ensure(){if(Me===null){const t=Me=new At;ts.add(Me),Cn||At.enqueue(()=>{Me===t&&t.flush()})}return Me}static enqueue(t){Dr(t)}static apply(t){return ne}}function Ol(e){var t=Cn;Cn=!0;try{for(var r;;){if(Ml(),Vt.length===0&&(Me?.flush(),Vt.length===0))return _s=null,r;xo()}}finally{Cn=t}}function xo(){var e=tn;Ws=!0;try{var t=0;for(Na(!0);Vt.length>0;){var r=At.ensure();if(t++>1e3){var n,s;ql()}r.process(Vt),vr.clear()}}finally{Ws=!1,Na(e),_s=null}}function ql(){try{ul()}catch(e){sn(e,_s)}}let kr=null;function $a(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(jr|Mt))===0&&ws(n)&&(kr=[],qn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Bo(n):n.fn=null),kr?.length>0)){vr.clear();for(const s of kr)qn(s);kr=[]}}kr=null}}function Po(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&_t)!==0?Po(t):(r&(vs|qr))!==0&&(vt(t,wt),Mr(t))}}function Mr(e){for(var t=_s=e;t.parent!==null;){t=t.parent;var r=t.f;if(Ws&&t===we&&(r&qr)!==0)return;if((r&(Br|Ft))!==0){if((r&ct)===0)return;t.f^=ct}}Vt.push(t)}function Eo(e){let t=0,r=_r(0),n;return()=>{Fl()&&(a(r),ha(()=>(t===0&&(n=pn(()=>e(()=>Ut(r)))),t+=1,()=>{Dr(()=>{t-=1,t===0&&(n?.(),n=void 0,Ut(r))})})))}}var Bl=Lr|fn|la;function jl(e,t,r){new Ll(e,t,r)}class Ll{parent;#e=!1;#r;#c=null;#u;#l;#o;#i=null;#s=null;#a=null;#d=null;#v=0;#n=0;#f=!1;#h=null;#t=()=>{this.#h&&an(this.#h,this.#v)};#g=Eo(()=>(this.#h=_r(this.#v),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#l=n,this.parent=we.b,this.#e=!!this.#u.pending,this.#o=rr(()=>{we.b=this;{try{this.#i=at(()=>n(this.#r))}catch(s){this.error(s)}this.#n>0?this.#_():this.#e=!1}},Bl)}#w(){try{this.#i=at(()=>this.#l(this.#r))}catch(t){this.error(t)}this.#e=!1}#S(){const t=this.#u.pending;t&&(this.#s=at(()=>t(this.#r)),At.enqueue(()=>{this.#i=this.#p(()=>(At.ensure(),at(()=>this.#l(this.#r)))),this.#n>0?this.#_():(Yt(this.#s,()=>{this.#s=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#p(t){var r=we,n=Ee,s=Ge;Wt(this.#o),pt(this.#o),nn(this.#o.ctx);try{return t()}catch(o){return wo(o),null}finally{Wt(r),pt(n),nn(s)}}#_(){const t=this.#u.pending;this.#i!==null&&(this.#d=document.createDocumentFragment(),zl(this.#i,this.#d)),this.#s===null&&(this.#s=at(()=>t(this.#r)))}#m(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t);return}this.#n+=t,this.#n===0&&(this.#e=!1,this.#s&&Yt(this.#s,()=>{this.#s=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),Dr(()=>{At.ensure().flush()}))}update_pending_count(t){this.#m(t),this.#v+=t,Us.add(this.#t)}get_effect_pending(){return this.#g(),a(this.#h)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#f||!r&&!n)throw t;this.#i&&(ot(this.#i),this.#i=null),this.#s&&(ot(this.#s),this.#s=null),this.#a&&(ot(this.#a),this.#a=null);var s=!1,o=!1;const i=()=>{if(s){Tl();return}s=!0,o&&pl(),At.ensure(),this.#v=0,this.#a!==null&&Yt(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#i=this.#p(()=>(this.#f=!1,at(()=>this.#l(this.#r)))),this.#n>0?this.#_():this.#e=!1};var l=Ee;try{pt(null),o=!0,r?.(t,i),o=!1}catch(c){sn(c,this.#o&&this.#o.parent)}finally{pt(l)}n&&Dr(()=>{this.#a=this.#p(()=>{this.#f=!0;try{return at(()=>{n(this.#r,()=>t,()=>i)})}catch(c){return sn(c,this.#o.parent),null}finally{this.#f=!1}})})}}function zl(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:Vn(r);t.append(r),r=s}}function $o(e,t,r){const n=hn()?ms:ua;if(t.length===0){r(e.map(n));return}var s=Me,o=we,i=Vl();Promise.all(t.map(l=>Ul(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(o.f&jr)===0&&sn(c,o)}s?.deactivate(),ko()}).catch(l=>{sn(l,o)})}function Vl(){var e=we,t=Ee,r=Ge,n=Me;return function(){Wt(e),pt(t),nn(r),n?.activate()}}function ko(){Wt(null),pt(null),nn(null)}function ms(e){var t=_t|wt,r=Ee!==null&&(Ee.f&_t)!==0?Ee:null;return we===null||r!==null&&(r.f&Tt)!==0?t|=Tt:we.f|=fn,{ctx:Ge,deps:null,effects:null,equals:mo,f:t,fn:e,reactions:null,rv:0,v:et,wv:0,parent:r??we,ac:null}}function Ul(e,t){let r=we;r===null&&ol();var n=r.b,s=void 0,o=_r(et),i=!Ee,l=new Map;return tc(()=>{var c=fo();s=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=Me,v=n.is_pending();i&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(In),l.set(f,c)));const m=(p,_=void 0)=>{v||f.activate(),_?_!==In&&(o.f|=Ir,an(o,_)):((o.f&Ir)!==0&&(o.f^=Ir),an(o,p)),i&&(n.update_pending_count(-1),v||f.decrement()),ko()};c.promise.then(m,p=>m(null,p||"unknown"))}),Mo(()=>{for(const c of l.values())c.reject(In)}),new Promise(c=>{function f(v){function m(){v===s?c(o):f(s)}v.then(m,m)}f(s)})}function W(e){const t=ms(e);return zo(t),t}function ua(e){const t=ms(e);return t.equals=bo,t}function Ao(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)ot(t[r])}}function Wl(e){for(var t=e.parent;t!==null;){if((t.f&_t)===0)return t;t=t.parent}return null}function da(e){var t,r=we;Wt(Wl(e));try{Ao(e),t=Go(e)}finally{Wt(r)}return t}function To(e){var t=da(e);if(e.equals(t)||(e.v=t,e.wv=Uo()),!Vr){var r=(dr||(e.f&Tt)!==0)&&e.deps!==null?gr:ct;vt(e,r)}}const vr=new Map;function _r(e,t){var r={f:0,v:e,reactions:null,equals:mo,rv:0,wv:0};return r}function U(e,t){const r=_r(e);return zo(r),r}function Gl(e,t=!1,r=!0){const n=_r(e);return t||(n.equals=bo),vn&&r&&Ge!==null&&Ge.l!==null&&(Ge.l.s??=[]).push(n),n}function x(e,t,r=!1){Ee!==null&&(!Dt||(Ee.f&Ea)!==0)&&hn()&&(Ee.f&(_t|qr|vs|Ea))!==0&&!Zt?.includes(e)&&hl();let n=r?Ce(t):t;return an(e,n)}function an(e,t){if(!e.equals(t)){var r=e.v;Vr?vr.set(e,t):vr.set(e,r),e.v=t;var n=At.ensure();n.capture(e,r),(e.f&_t)!==0&&((e.f&wt)!==0&&da(e),vt(e,(e.f&Tt)===0?ct:gr)),e.wv=Uo(),No(e,wt),hn()&&we!==null&&(we.f&ct)!==0&&(we.f&(Ft|Br))===0&&(kt===null?sc([e]):kt.push(e))}return t}function Ut(e){x(e,e.v+1)}function No(e,t){var r=e.reactions;if(r!==null)for(var n=hn(),s=r.length,o=0;o<s;o++){var i=r[o],l=i.f;if(!(!n&&i===we)){var c=(l&wt)===0;c&&vt(i,t),(l&_t)!==0?No(i,gr):c&&((l&qr)!==0&&kr!==null&&kr.push(i),Mr(i))}}}function Ce(e){if(typeof e!="object"||e===null||Cr in e)return e;const t=uo(e);if(t!==el&&t!==tl)return e;var r=new Map,n=fs(e),s=U(0),o=Xt,i=l=>{if(Xt===o)return l();var c=Ee,f=Xt;pt(null),Ca(o);var v=l();return pt(c),Ca(f),v};return n&&r.set("length",U(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&fl();var v=r.get(c);return v===void 0?v=i(()=>{var m=U(f.value);return r.set(c,m),m}):x(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=i(()=>U(et));r.set(c,v),Ut(s)}}else x(f,et),Ut(s);return!0},get(l,c,f){if(c===Cr)return e;var v=r.get(c),m=c in l;if(v===void 0&&(!m||fr(l,c)?.writable)&&(v=i(()=>{var _=Ce(m?l[c]:et),g=U(_);return g}),r.set(c,v)),v!==void 0){var p=a(v);return p===et?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=a(v))}else if(f===void 0){var m=r.get(c),p=m?.v;if(m!==void 0&&p!==et)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===Cr)return!0;var f=r.get(c),v=f!==void 0&&f.v!==et||Reflect.has(l,c);if(f!==void 0||we!==null&&(!v||fr(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=v?Ce(l[c]):et,_=U(p);return _}),r.set(c,f));var m=a(f);if(m===et)return!1}return v},set(l,c,f,v){var m=r.get(c),p=c in l;if(n&&c==="length")for(var _=f;_<m.v;_+=1){var g=r.get(_+"");g!==void 0?x(g,et):_ in l&&(g=i(()=>U(et)),r.set(_+"",g))}if(m===void 0)(!p||fr(l,c)?.writable)&&(m=i(()=>U(void 0)),x(m,Ce(f)),r.set(c,m));else{p=m.v!==et;var P=i(()=>Ce(f));x(m,P)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(v,f),!p){if(n&&typeof c=="string"){var y=r.get("length"),A=Number(c);Number.isInteger(A)&&A>=y.v&&x(y,A+1)}Ut(s)}return!0},ownKeys(l){a(s);var c=Reflect.ownKeys(l).filter(m=>{var p=r.get(m);return p===void 0||p.v!==et});for(var[f,v]of r)v.v!==et&&!(f in l)&&c.push(f);return c},setPrototypeOf(){vl()}})}function ka(e){try{if(e!==null&&typeof e=="object"&&Cr in e)return e[Cr]}catch{}return e}function Ql(e,t){return Object.is(ka(e),ka(t))}var Aa,Io,Co,Do;function Hl(){if(Aa===void 0){Aa=window,Io=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Co=fr(t,"firstChild").get,Do=fr(t,"nextSibling").get,Pa(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Pa(r)&&(r.__t=void 0)}}function er(e=""){return document.createTextNode(e)}function on(e){return Co.call(e)}function Vn(e){return Do.call(e)}function u(e,t){return on(e)}function B(e,t=!1){{var r=on(e);return r instanceof Comment&&r.data===""?Vn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=Vn(n);return n}function Kl(e){e.textContent=""}function gs(){return!1}function Jl(e,t){if(t){const r=document.body;e.autofocus=!0,Dr(()=>{document.activeElement===r&&e.focus()})}}let Ta=!1;function Yl(){Ta||(Ta=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function bs(e){var t=Ee,r=we;pt(null),Wt(null);try{return e()}finally{pt(t),Wt(r)}}function fa(e,t,r,n=r){e.addEventListener(t,()=>bs(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),Yl()}function Zl(e){we===null&&Ee===null&&cl(),Ee!==null&&(Ee.f&Tt)!==0&&we===null&&ll(),Vr&&il()}function Xl(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function tr(e,t,r,n=!0){var s=we;s!==null&&(s.f&Mt)!==0&&(e|=Mt);var o={ctx:Ge,deps:null,nodes_start:null,nodes_end:null,f:e|wt,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{qn(o),o.f|=ca}catch(c){throw ot(o),c}else t!==null&&Mr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&fn)===0&&(i=i.first),i!==null&&(i.parent=s,s!==null&&Xl(i,s),Ee!==null&&(Ee.f&_t)!==0&&(e&Br)===0)){var l=Ee;(l.effects??=[]).push(i)}}return o}function Fl(){return Ee!==null&&!Dt}function Mo(e){const t=tr(ia,null,!1);return vt(t,ct),t.teardown=e,t}function zr(e){Zl();var t=we.f,r=!Ee&&(t&Ft)!==0&&(t&ca)===0;if(r){var n=Ge;(n.e??=[]).push(e)}else return Ro(e)}function Ro(e){return tr(oa|sl,e,!1)}function ec(e){At.ensure();const t=tr(Br|fn,e,!0);return(r={})=>new Promise(n=>{r.outro?Yt(t,()=>{ot(t),n(void 0)}):(ot(t),n(void 0))})}function va(e){return tr(oa,e,!1)}function tc(e){return tr(vs|fn,e,!0)}function ha(e,t=0){return tr(ia|t,e,!0)}function L(e,t=[],r=[]){$o(t,r,n=>{tr(ia,()=>e(...n.map(a)),!0)})}function rr(e,t=0){var r=tr(qr|t,e,!0);return r}function at(e,t=!0){return tr(Ft|fn,e,!0,t)}function Oo(e){var t=e.teardown;if(t!==null){const r=Vr,n=Ee;Ia(!0),pt(null);try{t.call(null)}finally{Ia(r),pt(n)}}}function qo(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&bs(()=>{s.abort(In)});var n=r.next;(r.f&Br)!==0?r.parent=null:ot(r,t),r=n}}function rc(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ft)===0&&ot(t),t=r}}function ot(e,t=!0){var r=!1;(t||(e.f&nl)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(nc(e.nodes_start,e.nodes_end),r=!0),qo(e,t&&!r),cs(e,0),vt(e,jr);var n=e.transitions;if(n!==null)for(const o of n)o.stop();Oo(e);var s=e.parent;s!==null&&s.first!==null&&Bo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function nc(e,t){for(;e!==null;){var r=e===t?null:Vn(e);e.remove(),e=r}}function Bo(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Yt(e,t){var r=[];pa(e,r,!0),jo(r,()=>{ot(e),t&&t()})}function jo(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function pa(e,t,r){if((e.f&Mt)===0){if(e.f^=Mt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var s=n.next,o=(n.f&Lr)!==0||(n.f&Ft)!==0;pa(n,t,o?r:!1),n=s}}}function ys(e){Lo(e,!0)}function Lo(e,t){if((e.f&Mt)!==0){e.f^=Mt,(e.f&ct)===0&&(vt(e,wt),Mr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&Lr)!==0||(r.f&Ft)!==0;Lo(r,s?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let tn=!1;function Na(e){tn=e}let Vr=!1;function Ia(e){Vr=e}let Ee=null,Dt=!1;function pt(e){Ee=e}let we=null;function Wt(e){we=e}let Zt=null;function zo(e){Ee!==null&&(Zt===null?Zt=[e]:Zt.push(e))}let dt=null,yt=0,kt=null;function sc(e){kt=e}let Vo=1,On=0,Xt=On;function Ca(e){Xt=e}let dr=!1;function Uo(){return++Vo}function ws(e){var t=e.f;if((t&wt)!==0)return!0;if((t&gr)!==0){var r=e.deps,n=(t&Tt)!==0;if(r!==null){var s,o,i=(t&ls)!==0,l=n&&we!==null&&!dr,c=r.length;if((i||l)&&(we===null||(we.f&jr)===0)){var f=e,v=f.parent;for(s=0;s<c;s++)o=r[s],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=ls),l&&v!==null&&(v.f&Tt)===0&&(f.f^=Tt)}for(s=0;s<c;s++)if(o=r[s],ws(o)&&To(o),o.wv>e.wv)return!0}(!n||we!==null&&!dr)&&vt(e,ct)}return!1}function Wo(e,t,r=!0){var n=e.reactions;if(n!==null&&!Zt?.includes(e))for(var s=0;s<n.length;s++){var o=n[s];(o.f&_t)!==0?Wo(o,t,!1):t===o&&(r?vt(o,wt):(o.f&ct)!==0&&vt(o,gr),Mr(o))}}function Go(e){var t=dt,r=yt,n=kt,s=Ee,o=dr,i=Zt,l=Ge,c=Dt,f=Xt,v=e.f;dt=null,yt=0,kt=null,dr=(v&Tt)!==0&&(Dt||!tn||Ee===null),Ee=(v&(Ft|Br))===0?e:null,Zt=null,nn(e.ctx),Dt=!1,Xt=++On,e.ac!==null&&(bs(()=>{e.ac.abort(In)}),e.ac=null);try{e.f|=Vs;var m=e.fn,p=m(),_=e.deps;if(dt!==null){var g;if(cs(e,yt),_!==null&&yt>0)for(_.length=yt+dt.length,g=0;g<dt.length;g++)_[yt+g]=dt[g];else e.deps=_=dt;if(!dr||(v&_t)!==0&&e.reactions!==null)for(g=yt;g<_.length;g++)(_[g].reactions??=[]).push(e)}else _!==null&&yt<_.length&&(cs(e,yt),_.length=yt);if(hn()&&kt!==null&&!Dt&&_!==null&&(e.f&(_t|gr|wt))===0)for(g=0;g<kt.length;g++)Wo(kt[g],e);return s!==null&&s!==e&&(On++,kt!==null&&(n===null?n=kt:n.push(...kt))),(e.f&Ir)!==0&&(e.f^=Ir),p}catch(P){return wo(P)}finally{e.f^=Vs,dt=t,yt=r,kt=n,Ee=s,dr=o,Zt=i,nn(l),Dt=c,Xt=f}}function ac(e,t){let r=t.reactions;if(r!==null){var n=Xi.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&_t)!==0&&(dt===null||!dt.includes(t))&&(vt(t,gr),(t.f&(Tt|ls))===0&&(t.f^=ls),Ao(t),cs(t,0))}function cs(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)ac(e,r[n])}function qn(e){var t=e.f;if((t&jr)===0){vt(e,ct);var r=we,n=tn;we=e,tn=!0;try{(t&qr)!==0?rc(e):qo(e),Oo(e);var s=Go(e);e.teardown=typeof s=="function"?s:null,e.wv=Vo;var o;co&&Cl&&(e.f&wt)!==0&&e.deps}finally{tn=n,we=r}}}async function oc(){await Promise.resolve(),Ol()}function a(e){var t=e.f,r=(t&_t)!==0;if(Ee!==null&&!Dt){var n=we!==null&&(we.f&jr)!==0;if(!n&&!Zt?.includes(e)){var s=Ee.deps;if((Ee.f&Vs)!==0)e.rv<On&&(e.rv=On,dt===null&&s!==null&&s[yt]===e?yt++:dt===null?dt=[e]:(!dr||!dt.includes(e))&&dt.push(e));else{(Ee.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[Ee]:o.includes(Ee)||o.push(Ee)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&Tt)===0&&(i.f^=Tt)}if(Vr){if(vr.has(e))return vr.get(e);if(r){i=e;var c=i.v;return((i.f&ct)===0&&i.reactions!==null||Qo(i))&&(c=da(i)),vr.set(i,c),c}}else r&&(i=e,ws(i)&&To(i));if((e.f&Ir)!==0)throw e.v;return e.v}function Qo(e){if(e.v===et)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(vr.has(t)||(t.f&_t)!==0&&Qo(t))return!0;return!1}function pn(e){var t=Dt;try{return Dt=!0,e()}finally{Dt=t}}const ic=-7169;function vt(e,t){e.f=e.f&ic|t}function lc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const cc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function uc(e){return cc.includes(e)}const dc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function fc(e){return e=e.toLowerCase(),dc[e]??e}const vc=["touchstart","touchmove"];function hc(e){return vc.includes(e)}const Ho=new Set,Gs=new Set;function Ko(e,t,r,n={}){function s(o){if(n.capture||Tn.call(t,o),!o.cancelBubble)return bs(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Dr(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Da(e,t,r,n={}){var s=Ko(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function it(e){for(var t=0;t<e.length;t++)Ho.add(e[t]);for(var r of Gs)r(e)}let Ma=null;function Tn(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],o=s[0]||e.target;Ma=e;var i=0,l=Ma===e&&e.__root;if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=s.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(o=s[i]||e.target,o!==t){zs(e,"currentTarget",{configurable:!0,get(){return o||r}});var v=Ee,m=we;pt(null),Wt(null);try{for(var p,_=[];o!==null;){var g=o.assignedSlot||o.parentNode||o.host||null;try{var P=o["__"+n];if(P!=null&&(!o.disabled||e.target===o))if(fs(P)){var[b,...y]=P;b.apply(o,[e,...y])}else P.call(o,e)}catch(A){p?_.push(A):p=A}if(e.cancelBubble||g===t||g===null)break;o=g}if(p){for(let A of _)queueMicrotask(()=>{throw A});throw p}}finally{e.__root=t,delete e.currentTarget,pt(v),Wt(m)}}}function Jo(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function ln(e,t){var r=we;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function S(e,t){var r=(t&xl)!==0,n=(t&Pl)!==0,s,o=!e.startsWith("<!>");return()=>{s===void 0&&(s=Jo(o?e:"<!>"+e),r||(s=on(s)));var i=n||Io?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=on(i),c=i.lastChild;ln(l,c)}else ln(i,i);return i}}function pc(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Jo(s),l=on(i);o=on(l)}var c=o.cloneNode(!0);return ln(c,c),c}}function _c(e,t){return pc(e,t,"svg")}function lt(e=""){{var t=er(e+"");return ln(t,t),t}}function J(){var e=document.createDocumentFragment(),t=document.createComment(""),r=er();return e.append(t,r),ln(t,r),e}function h(e,t){e!==null&&e.before(t)}function R(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function mc(e,t){return gc(e,t)}const Xr=new Map;function gc(e,{target:t,anchor:r,props:n={},events:s,context:o,intro:i=!0}){Hl();var l=new Set,c=m=>{for(var p=0;p<m.length;p++){var _=m[p];if(!l.has(_)){l.add(_);var g=hc(_);t.addEventListener(_,Tn,{passive:g});var P=Xr.get(_);P===void 0?(document.addEventListener(_,Tn,{passive:g}),Xr.set(_,1)):Xr.set(_,P+1)}}};c(aa(Ho)),Gs.add(c);var f=void 0,v=ec(()=>{var m=r??t.appendChild(er());return jl(m,{pending:()=>{}},p=>{if(o){Y({});var _=Ge;_.c=o}s&&(n.$$events=s),f=e(p,n)||{},o&&Z()}),()=>{for(var p of l){t.removeEventListener(p,Tn);var _=Xr.get(p);--_===0?(document.removeEventListener(p,Tn),Xr.delete(p)):Xr.set(p,_)}Gs.delete(c),m!==r&&m.parentNode?.removeChild(m)}});return bc.set(f,v),f}let bc=new WeakMap;function N(e,t,r=!1){var n=e,s=null,o=null,i=et,l=r?Lr:0,c=!1;const f=(_,g=!0)=>{c=!0,p(g,_)};var v=null;function m(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var _=i?s:o,g=i?o:s;_&&ys(_),g&&Yt(g,()=>{i?o=null:s=null})}const p=(_,g)=>{if(i!==(i=_)){var P=gs(),b=n;if(P&&(v=document.createDocumentFragment(),v.append(b=er())),i?s??=g&&at(()=>g(b)):o??=g&&at(()=>g(b)),P){var y=Me,A=i?s:o,w=i?o:s;A&&y.skipped_effects.delete(A),w&&y.skipped_effects.add(w),y.add_callback(m)}else m()}};rr(()=>{c=!1,t(f),c||p(null,null)},l)}function yc(e,t,r){var n=e,s=et,o,i,l=null,c=hn()?Il:go;function f(){o&&Yt(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}rr(()=>{if(c(s,s=t())){var v=n,m=gs();m&&(l=document.createDocumentFragment(),l.append(v=er())),i=at(()=>r(v)),m?Me.add_callback(f):f()}})}function Qs(e,t){return t}function wc(e,t,r){for(var n=e.items,s=[],o=t.length,i=0;i<o;i++)pa(t[i].e,s,!0);var l=o>0&&s.length===0&&r!==null;if(l){var c=r.parentNode;Kl(c),c.append(r),n.clear(),zt(e,t[0].prev,t[o-1].next)}jo(s,()=>{for(var f=0;f<o;f++){var v=t[f];l||(n.delete(v.k),zt(e,v.prev,v.next)),ot(v.e,!l)}})}function st(e,t,r,n,s,o=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&_o)!==0;if(c){var f=e;i=f.appendChild(er())}var v=null,m=!1,p=new Map,_=ua(()=>{var y=r();return fs(y)?y:y==null?[]:aa(y)}),g,P;function b(){Sc(P,g,l,p,i,s,t,n,r),o!==null&&(g.length===0?v?ys(v):v=at(()=>o(i)):v!==null&&Yt(v,()=>{v=null}))}rr(()=>{P??=we,g=a(_);var y=g.length;if(!(m&&y===0)){m=y===0;var A,w,E,$;if(gs()){var T=new Set,I=Me;for(w=0;w<y;w+=1){E=g[w],$=n(E,w);var C=l.items.get($)??p.get($);C?(t&(hs|ps))!==0&&Yo(C,E,w,t):(A=Zo(null,l,null,null,E,$,w,s,t,r,!0),p.set($,A)),T.add($)}for(const[ae,G]of l.items)T.has(ae)||I.skipped_effects.add(G.e);I.add_callback(b)}else b();a(_)}})}function Sc(e,t,r,n,s,o,i,l,c){var f=(i&_l)!==0,v=(i&(hs|ps))!==0,m=t.length,p=r.items,_=r.first,g=_,P,b=null,y,A=[],w=[],E,$,T,I;if(f)for(I=0;I<m;I+=1)E=t[I],$=l(E,I),T=p.get($),T!==void 0&&(T.a?.measure(),(y??=new Set).add(T));for(I=0;I<m;I+=1){if(E=t[I],$=l(E,I),T=p.get($),T===void 0){var C=n.get($);if(C!==void 0){n.delete($),p.set($,C);var ae=b?b.next:g;zt(r,b,C),zt(r,C,ae),Rs(C,ae,s),b=C}else{var G=g?g.e.nodes_start:s;b=Zo(G,r,b,b===null?r.first:b.next,E,$,I,o,i,c)}p.set($,b),A=[],w=[],g=b.next;continue}if(v&&Yo(T,E,I,i),(T.e.f&Mt)!==0&&(ys(T.e),f&&(T.a?.unfix(),(y??=new Set).delete(T))),T!==g){if(P!==void 0&&P.has(T)){if(A.length<w.length){var V=w[0],X;b=V.prev;var te=A[0],D=A[A.length-1];for(X=0;X<A.length;X+=1)Rs(A[X],V,s);for(X=0;X<w.length;X+=1)P.delete(w[X]);zt(r,te.prev,D.next),zt(r,b,te),zt(r,D,V),g=V,b=D,I-=1,A=[],w=[]}else P.delete(T),Rs(T,g,s),zt(r,T.prev,T.next),zt(r,T,b===null?r.first:b.next),zt(r,b,T),b=T;continue}for(A=[],w=[];g!==null&&g.k!==$;)(g.e.f&Mt)===0&&(P??=new Set).add(g),w.push(g),g=g.next;if(g===null)continue;T=g}A.push(T),b=T,g=T.next}if(g!==null||P!==void 0){for(var z=P===void 0?[]:aa(P);g!==null;)(g.e.f&Mt)===0&&z.push(g),g=g.next;var ee=z.length;if(ee>0){var Se=(i&_o)!==0&&m===0?s:null;if(f){for(I=0;I<ee;I+=1)z[I].a?.measure();for(I=0;I<ee;I+=1)z[I].a?.fix()}wc(r,z,Se)}}f&&Dr(()=>{if(y!==void 0)for(T of y)T.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var O of n.values())ot(O.e);n.clear()}function Yo(e,t,r,n){(n&hs)!==0&&an(e.v,t),(n&ps)!==0?an(e.i,r):e.i=r}function Zo(e,t,r,n,s,o,i,l,c,f,v){var m=(c&hs)!==0,p=(c&ml)===0,_=m?p?Gl(s,!1,!1):_r(s):s,g=(c&ps)===0?i:_r(i),P={i:g,v:_,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=er())}return P.e=at(()=>l(e,_,g,f),Nl),P.e.prev=r&&r.e,P.e.next=n&&n.e,r===null?v||(t.first=P):(r.next=P,r.e.next=P.e),n!==null&&(n.prev=P,n.e.prev=P.e),P}finally{}}function Rs(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=Vn(o);s.before(o),o=i}}function zt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function oe(e,t,...r){var n=e,s=ne,o;rr(()=>{s!==(s=t())&&(o&&(ot(o),o=null),o=at(()=>s(n,...r)))},Lr)}function Tr(e,t,r){var n=e,s,o,i=null,l=null;function c(){o&&(Yt(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}rr(()=>{if(s!==(s=t())){var f=gs();if(s){var v=n;f&&(i=document.createDocumentFragment(),i.append(v=er()),o&&Me.skipped_effects.add(o)),l=at(()=>r(v,s))}f?Me.add_callback(c):c()}},Lr)}function xc(e,t,r,n,s,o){var i,l,c=null,f=e,v;rr(()=>{const m=t()||null;var p=$l;m!==i&&(v&&(m===null?Yt(v,()=>{v=null,l=null}):m===l?ys(v):ot(v)),m&&m!==l&&(v=at(()=>{if(c=document.createElementNS(p,m),ln(c,c),n){var _=c.appendChild(er());n(c,_)}we.nodes_end=c,f.before(c)})),i=m,i&&(l=i))},Lr)}function Pc(e,t){var r=void 0,n;rr(()=>{r!==(r=t())&&(n&&(ot(n),n=null),r&&(n=at(()=>{va(()=>r(e))})))})}function Xo(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Xo(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Ec(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Xo(e))&&(n&&(n+=" "),n+=t);return n}function Fo(e){return typeof e=="object"?Ec(e):e??""}const Ra=[...` 	
\r\f \v\uFEFF`];function $c(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var o=s.length,i=0;(i=n.indexOf(s,i))>=0;){var l=i+o;(i===0||Ra.includes(n[i-1]))&&(l===n.length||Ra.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Oa(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var o=e[s];o!=null&&o!==""&&(n+=" "+s+": "+o+r)}return n}function Os(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function kc(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Os)),s&&c.push(...Object.keys(s).map(Os));var f=0,v=-1;const P=e.length;for(var m=0;m<P;m++){var p=e[m];if(l?p==="/"&&e[m-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[m+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&v===-1)v=m;else if(p===";"||m===P-1){if(v!==-1){var _=Os(e.substring(f,v).trim());if(!c.includes(_)){p!==";"&&m++;var g=e.substring(f,m).trim();r+=" "+g+";"}}f=m+1,v=-1}}}}return n&&(r+=Oa(n)),s&&(r+=Oa(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function ye(e,t,r,n,s,o){var i=e.__className;if(i!==r||i===void 0){var l=$c(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&s!==o)for(var c in o){var f=!!o[c];(s==null||f!==!!s[c])&&e.classList.toggle(c,f)}return o}function qs(e,t={},r,n){for(var s in r){var o=r[s];t[s]!==o&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,o,n))}}function ei(e,t,r,n){var s=e.__style;if(s!==t){var o=kc(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(qs(e,r?.[0],n[0]),qs(e,r?.[1],n[1],"important")):qs(e,r,n));return n}function us(e,t,r=!1){if(e.multiple){if(t==null)return;if(!fs(t))return Al();for(var n of e.options)n.selected=t.includes(Dn(n));return}for(n of e.options){var s=Dn(n);if(Ql(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ti(e){var t=new MutationObserver(()=>{us(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Mo(()=>{t.disconnect()})}function Nr(e,t,r=t){var n=!0;fa(e,"change",s=>{var o=s?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),Dn);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&Dn(l)}r(i)}),va(()=>{var s=t();if(us(e,s,n),n&&s===void 0){var o=e.querySelector(":checked");o!==null&&(s=Dn(o),r(s))}e.__value=s,n=!1}),ti(e)}function Dn(e){return"__value"in e?e.__value:e.value}const $n=Symbol("class"),kn=Symbol("style"),ri=Symbol("is custom element"),ni=Symbol("is html");function Ac(e,t){var r=Ss(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function rn(e,t){var r=Ss(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Tc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Rr(e,t,r,n){var s=Ss(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[al]=r),r==null?e.removeAttribute(t):typeof r!="string"&&si(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Nc(e,t,r,n,s=!1,o=!1){var i=Ss(e),l=i[ri],c=!i[ni],f=t||{},v=e.tagName==="OPTION";for(var m in t)m in r||(r[m]=null);r.class?r.class=Fo(r.class):r[$n]&&(r.class=null),r[kn]&&(r.style??=null);var p=si(e);for(const E in r){let $=r[E];if(v&&E==="value"&&$==null){e.value=e.__value="",f[E]=$;continue}if(E==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";ye(e,_,$,n,t?.[$n],r[$n]),f[E]=$,f[$n]=r[$n];continue}if(E==="style"){ei(e,$,t?.[kn],r[kn]),f[E]=$,f[kn]=r[kn];continue}var g=f[E];if(!($===g&&!($===void 0&&e.hasAttribute(E)))){f[E]=$;var P=E[0]+E[1];if(P!=="$$")if(P==="on"){const T={},I="$$"+E;let C=E.slice(2);var b=uc(C);if(lc(C)&&(C=C.slice(0,-7),T.capture=!0),!b&&g){if($!=null)continue;e.removeEventListener(C,f[I],T),f[I]=null}if($!=null)if(b)e[`__${C}`]=$,it([C]);else{let ae=function(G){f[E].call(this,G)};var w=ae;f[I]=Ko(C,e,ae,T)}else b&&(e[`__${C}`]=void 0)}else if(E==="style")Rr(e,E,$);else if(E==="autofocus")Jl(e,!!$);else if(!l&&(E==="__value"||E==="value"&&$!=null))e.value=e.__value=$;else if(E==="selected"&&v)Tc(e,$);else{var y=E;c||(y=fc(y));var A=y==="defaultValue"||y==="defaultChecked";if($==null&&!l&&!A)if(i[E]=null,y==="value"||y==="checked"){let T=e;const I=t===void 0;if(y==="value"){let C=T.defaultValue;T.removeAttribute(y),T.defaultValue=C,T.value=T.__value=I?C:null}else{let C=T.defaultChecked;T.removeAttribute(y),T.defaultChecked=C,T.checked=I?C:!1}}else e.removeAttribute(E);else A||p.includes(y)&&(l||typeof $!="string")?(e[y]=$,y in i&&(i[y]=et)):typeof $!="function"&&Rr(e,y,$)}}}return f}function qa(e,t,r=[],n=[],s,o=!1,i=!1){$o(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",m=!1;if(rr(()=>{var _=t(...l.map(a)),g=Nc(e,c,_,s,o,i);m&&v&&"value"in _&&us(e,_.value);for(let b of Object.getOwnPropertySymbols(f))_[b]||ot(f[b]);for(let b of Object.getOwnPropertySymbols(_)){var P=_[b];b.description===kl&&(!c||P!==c[b])&&(f[b]&&ot(f[b]),f[b]=at(()=>Pc(e,()=>P))),g[b]=P}c=g}),v){var p=e;va(()=>{us(p,c.value,!0),ti(p)})}m=!0})}function Ss(e){return e.__attributes??={[ri]:e.nodeName.includes("-"),[ni]:e.namespaceURI===El}}var Ba=new Map;function si(e){var t=e.getAttribute("is")||e.nodeName,r=Ba.get(t);if(r)return r;Ba.set(t,r=[]);for(var n,s=e,o=Element.prototype;o!==s;){n=Fi(s);for(var i in n)n[i].set&&r.push(i);s=uo(s)}return r}function Ie(e,t,r=t){var n=new WeakSet;fa(e,"input",async s=>{var o=s?e.defaultValue:e.value;if(o=Bs(e)?js(o):o,r(o),Me!==null&&n.add(Me),await oc(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),pn(t)==null&&e.value&&(r(Bs(e)?js(e.value):e.value),Me!==null&&n.add(Me)),ha(()=>{var s=t();if(e===document.activeElement){var o=ns??Me;if(n.has(o))return}Bs(e)&&s===js(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Ic(e,t,r=t){fa(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),pn(t)==null&&r(e.checked),ha(()=>{var n=t();e.checked=!!n})}function Bs(e){var t=e.type;return t==="number"||t==="range"}function js(e){return e===""?null:+e}let rs=!1;function Cc(e){var t=rs;try{return rs=!1,[e(),rs]}finally{rs=t}}const Dc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ce(e,t,r){return new Proxy({props:e,exclude:t},Dc)}const Mc={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(En(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];En(s)&&(s=s());const o=fr(s,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(En(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=fr(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===Cr||t===ho)return!1;for(let r of e.props)if(En(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(En(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ue(...e){return new Proxy({props:e},Mc)}function qe(e,t,r,n){var s=!vn||(r&bl)!==0,o=(r&wl)!==0,i=(r&Sl)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?pn(n):n),l),v;if(o){var m=Cr in e||ho in e;v=fr(e,t)?.set??(m&&t in e?w=>e[t]=w:void 0)}var p,_=!1;o?[p,_]=Cc(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),v&&(s&&dl(),v(p)));var g;if(s?g=()=>{var w=e[t];return w===void 0?f():(c=!0,w)}:g=()=>{var w=e[t];return w!==void 0&&(l=void 0),w===void 0?l:w},s&&(r&yl)===0)return g;if(v){var P=e.$$legacy;return(function(w,E){return arguments.length>0?((!s||!E||P||_)&&v(E?g():w),w):g()})}var b=!1,y=((r&gl)!==0?ms:ua)(()=>(b=!1,g()));o&&a(y);var A=we;return(function(w,E){if(arguments.length>0){const $=E?a(y):s&&o?Ce(w):w;return x(y,$),b=!0,l!==void 0&&(l=$),w}return Vr&&b||(A.f&jr)!==0?y.v:a(y)})}function ai(e){Ge===null&&po(),vn&&Ge.l!==null?Oc(Ge).m.push(e):zr(()=>{const t=pn(e);if(typeof t=="function")return t})}function Rc(e){Ge===null&&po(),ai(()=>()=>pn(e))}function Oc(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const qc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(qc);const Bc="modulepreload",jc=function(e){return"/"+e},ja={},Lc=function(t,r,n){let s=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");s=f(r.map(v=>{if(v=jc(v),v in ja)return;ja[v]=!0;const m=v.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${p}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":Bc,m||(_.as="script"),_.crossOrigin="",_.href=v,c&&_.setAttribute("nonce",c),document.head.appendChild(_),m)return new Promise((g,P)=>{_.addEventListener("load",g),_.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${v}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};class zc extends Map{#e=new Map;#r=U(0);#c=U(0);#u=Xt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#l(t){return Xt===this.#u?U(t):_r(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#l(0),r.set(t,n);else return a(this.#r),!1}return a(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#l(0),r.set(t,n);else{a(this.#r);return}}return a(n),super.get(t)}set(t,r){var n=this.#e,s=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#r;if(s===void 0)s=this.#l(0),n.set(t,s),x(this.#c,super.size),Ut(l);else if(o!==r){Ut(s);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!s.reactions?.every(v=>c.has(v));f&&Ut(l)}return i}delete(t){var r=this.#e,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),x(this.#c,super.size),x(n,-1),Ut(this.#r)),s}clear(){if(super.size!==0){super.clear();var t=this.#e;x(this.#c,0);for(var r of t.values())x(r,-1);Ut(this.#r),t.clear()}}#o(){a(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#l(0);t.set(r,n)}}for([,n]of this.#e)a(n)}keys(){return a(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return a(this.#c),super.size}}const Vc=typeof window<"u"?window:void 0;function Uc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Wc{#e;#r;constructor(t={}){const{window:r=Vc,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=Eo(s=>{const o=Da(r,"focusin",s),i=Da(r,"focusout",s);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?Uc(this.#e):null}}new Wc;function Gc(e){return typeof e=="function"}function Qc(e,t){if(Gc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Hc(e,t){let r=U(null);const n=W(()=>Qc(t,250));function s(...o){if(a(r))a(r).timeout&&clearTimeout(a(r).timeout);else{let i,l;const c=new Promise((f,v)=>{i=f,l=v});x(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return a(r).runner=async()=>{if(!a(r))return;const i=a(r);x(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},a(r).timeout=setTimeout(a(r).runner,a(n)),a(r).promise}return s.cancel=async()=>{(!a(r)||a(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!a(r)||a(r).timeout===null)||(clearTimeout(a(r).timeout),a(r).reject("Cancelled"),x(r,null))},s.runScheduledNow=async()=>{(!a(r)||!a(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!a(r)||!a(r).timeout)||(clearTimeout(a(r).timeout),a(r).timeout=null,await a(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!a(r)?.timeout}}),s}function Kc(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),s=new Date(r),o=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=s});return o.length?Mn(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function Nn(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function ss(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Mn(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function as(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>Hs(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const s=[],o=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(s.push({q:v,u:c}),o.push(Hs(v.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:s,display:i}}function Fr(e){return e?.length?e.map(t=>Hs(t.q.toString(),t.u)).join(" et "):"-"}function Hs(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,s=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${s}`}if(!["gr.","ml","kg","l."].includes(t)){let s=(Math.round(r*10)/10).toString();return s.endsWith(",0")&&(s=s.slice(0,-2)),`${s} ${t}`}return`${r} ${t}`}function La(e){return Nn(e)}function Jc(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const s=t.get(n)||0;t.set(n,s+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Yc(e,t){return e[t]?.recipes||[]}function Zc(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,s=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([o])=>{const i=new Date(o);return i>=n&&i<=s}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function Xc(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Fc(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function eu(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(s=>{t.push({...s,date:r,dateTimeService:r})})}),t}function tu(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Jc(t)}function ru(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class k{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}k.equal=(e,t)=>new k("equal",e,t).toString();k.notEqual=(e,t)=>new k("notEqual",e,t).toString();k.lessThan=(e,t)=>new k("lessThan",e,t).toString();k.lessThanEqual=(e,t)=>new k("lessThanEqual",e,t).toString();k.greaterThan=(e,t)=>new k("greaterThan",e,t).toString();k.greaterThanEqual=(e,t)=>new k("greaterThanEqual",e,t).toString();k.isNull=e=>new k("isNull",e).toString();k.isNotNull=e=>new k("isNotNull",e).toString();k.between=(e,t,r)=>new k("between",e,[t,r]).toString();k.startsWith=(e,t)=>new k("startsWith",e,t).toString();k.endsWith=(e,t)=>new k("endsWith",e,t).toString();k.select=e=>new k("select",void 0,e).toString();k.search=(e,t)=>new k("search",e,t).toString();k.orderDesc=e=>new k("orderDesc",e).toString();k.orderAsc=e=>new k("orderAsc",e).toString();k.orderRandom=()=>new k("orderRandom").toString();k.cursorAfter=e=>new k("cursorAfter",void 0,e).toString();k.cursorBefore=e=>new k("cursorBefore",void 0,e).toString();k.limit=e=>new k("limit",void 0,e).toString();k.offset=e=>new k("offset",void 0,e).toString();k.contains=(e,t)=>new k("contains",e,t).toString();k.notContains=(e,t)=>new k("notContains",e,t).toString();k.notSearch=(e,t)=>new k("notSearch",e,t).toString();k.notBetween=(e,t,r)=>new k("notBetween",e,[t,r]).toString();k.notStartsWith=(e,t)=>new k("notStartsWith",e,t).toString();k.notEndsWith=(e,t)=>new k("notEndsWith",e,t).toString();k.createdBefore=e=>new k("createdBefore",void 0,e).toString();k.createdAfter=e=>new k("createdAfter",void 0,e).toString();k.createdBetween=(e,t)=>new k("createdBetween",void 0,[e,t]).toString();k.updatedBefore=e=>new k("updatedBefore",void 0,e).toString();k.updatedAfter=e=>new k("updatedAfter",void 0,e).toString();k.updatedBetween=(e,t)=>new k("updatedBetween",void 0,[e,t]).toString();k.or=e=>new k("or",void 0,e.map(t=>JSON.parse(t))).toString();k.and=e=>new k("and",void 0,e.map(t=>JSON.parse(t))).toString();k.distanceEqual=(e,t,r,n=!0)=>new k("distanceEqual",e,[[t,r,n]]).toString();k.distanceNotEqual=(e,t,r,n=!0)=>new k("distanceNotEqual",e,[[t,r,n]]).toString();k.distanceGreaterThan=(e,t,r,n=!0)=>new k("distanceGreaterThan",e,[[t,r,n]]).toString();k.distanceLessThan=(e,t,r,n=!0)=>new k("distanceLessThan",e,[[t,r,n]]).toString();k.intersects=(e,t)=>new k("intersects",e,[t]).toString();k.notIntersects=(e,t)=>new k("notIntersects",e,[t]).toString();k.crosses=(e,t)=>new k("crosses",e,[t]).toString();k.notCrosses=(e,t)=>new k("notCrosses",e,[t]).toString();k.overlaps=(e,t)=>new k("overlaps",e,[t]).toString();k.notOverlaps=(e,t)=>new k("notOverlaps",e,[t]).toString();k.touches=(e,t)=>new k("touches",e,[t]).toString();k.notTouches=(e,t)=>new k("notTouches",e,[t]).toString();var oi,ii;class cn{static custom(t){return t}static unique(t=7){const r=ru(cn,oi,"m",ii).call(cn);let n="";for(let s=0;s<t;s++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}oi=cn,ii=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var za;(function(e){e.Totp="totp"})(za||(za={}));var Va;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Va||(Va={}));var Ua;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Ua||(Ua={}));var Wa;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Wa||(Wa={}));var Ga;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ga||(Ga={}));var Qa;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Qa||(Qa={}));var Ha;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Ha||(Ha={}));var Ka;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Ka||(Ka={}));var Ja;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Ja||(Ja={}));class nu{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class li{constructor(t){this.generateIdentifier=t,this.kv=new nu}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class su extends li{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function au(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function ou(e,t){const r=au(e);if("find"in r)return r.find(t);const n=r;for(let s=0;s<n.length;s++){const o=n[s];if(t(o))return o}}function un(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function os(e,t){return e.indexOf(t)!==-1}function Ya(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class iu{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return ou(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const lu=e=>Object.prototype.toString.call(e).slice(8,-1),ci=e=>typeof e>"u",cu=e=>e===null,Bn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Ks=e=>Bn(e)&&Object.keys(e).length===0,mr=e=>Array.isArray(e),uu=e=>typeof e=="string",du=e=>typeof e=="number"&&!isNaN(e),fu=e=>typeof e=="boolean",vu=e=>e instanceof RegExp,jn=e=>e instanceof Map,Ln=e=>e instanceof Set,ui=e=>lu(e)==="Symbol",hu=e=>e instanceof Date&&!isNaN(e.valueOf()),pu=e=>e instanceof Error,Za=e=>typeof e=="number"&&isNaN(e),_u=e=>fu(e)||cu(e)||ci(e)||du(e)||uu(e)||ui(e),mu=e=>typeof e=="bigint",gu=e=>e===1/0||e===-1/0,bu=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),yu=e=>e instanceof URL,di=e=>e.replace(/\./g,"\\."),Ls=e=>e.map(String).map(di).join("."),Rn=e=>{const t=[];let r="";for(let s=0;s<e.length;s++){let o=e.charAt(s);if(o==="\\"&&e.charAt(s+1)==="."){r+=".",s++;continue}if(o==="."){t.push(r),r="";continue}r+=o}const n=r;return t.push(n),t};function Lt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const fi=[Lt(ci,"undefined",()=>null,()=>{}),Lt(mu,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Lt(hu,"Date",e=>e.toISOString(),e=>new Date(e)),Lt(pu,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Lt(vu,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Lt(Ln,"set",e=>[...e.values()],e=>new Set(e)),Lt(jn,"map",e=>[...e.entries()],e=>new Map(e)),Lt(e=>Za(e)||gu(e),"number",e=>Za(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Lt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Lt(yu,"URL",e=>e.toString(),e=>new URL(e))];function xs(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const vi=xs((e,t)=>ui(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),wu=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),hi=xs(bu,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=wu[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function pi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const _i=xs(pi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(s=>{n[s]=e[s]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),mi=xs((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Su=[_i,vi,mi,hi],Xa=(e,t)=>{const r=Ya(Su,s=>s.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ya(fi,s=>s.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},gi={};fi.forEach(e=>{gi[e.annotation]=e});const xu=(e,t,r)=>{if(mr(t))switch(t[0]){case"symbol":return vi.untransform(e,t,r);case"class":return _i.untransform(e,t,r);case"custom":return mi.untransform(e,t,r);case"typed-array":return hi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=gi[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},en=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function bi(e){if(os(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(os(e,"prototype"))throw new Error("prototype is not allowed as a property");if(os(e,"constructor"))throw new Error("constructor is not allowed as a property")}const Pu=(e,t)=>{bi(t);for(let r=0;r<t.length;r++){const n=t[r];if(Ln(e))e=en(e,+n);else if(jn(e)){const s=+n,o=+t[++r]==0?"key":"value",i=en(e,s);switch(o){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Js=(e,t,r)=>{if(bi(t),t.length===0)return r(e);let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];if(mr(n)){const l=+i;n=n[l]}else if(Bn(n))n=n[i];else if(Ln(n)){const l=+i;n=en(n,l)}else if(jn(n)){if(o===t.length-2)break;const c=+i,f=+t[++o]==0?"key":"value",v=en(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const s=t[t.length-1];if(mr(n)?n[+s]=r(n[+s]):Bn(n)&&(n[s]=r(n[s])),Ln(n)){const o=en(n,+s),i=r(o);o!==i&&(n.delete(o),n.add(i))}if(jn(n)){const o=+t[t.length-2],i=en(n,o);switch(+s==0?"key":"value"){case"key":{const c=r(i);n.set(c,n.get(i)),c!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Ys(e,t,r=[]){if(!e)return;if(!mr(e)){un(e,(o,i)=>Ys(o,t,[...r,...Rn(i)]));return}const[n,s]=e;s&&un(s,(o,i)=>{Ys(o,t,[...r,...Rn(i)])}),t(n,r)}function Eu(e,t,r){return Ys(t,(n,s)=>{e=Js(e,s,o=>xu(o,n,r))}),e}function $u(e,t){function r(n,s){const o=Pu(e,Rn(s));n.map(Rn).forEach(i=>{e=Js(e,i,()=>o)})}if(mr(t)){const[n,s]=t;n.forEach(o=>{e=Js(e,Rn(o),()=>e)}),s&&un(s,r)}else un(t,r);return e}const ku=(e,t)=>Bn(e)||mr(e)||jn(e)||Ln(e)||pi(e,t);function Au(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Tu(e,t){const r={};let n;return e.forEach(s=>{if(s.length<=1)return;t||(s=s.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[o,...i]=s;o.length===0?n=i.map(Ls):r[Ls(o)]=i.map(Ls)}),n?Ks(r)?[n]:[n,r]:Ks(r)?void 0:r}const yi=(e,t,r,n,s=[],o=[],i=new Map)=>{const l=_u(e);if(!l){Au(e,s,t);const _=i.get(e);if(_)return n?{transformedValue:null}:_}if(!ku(e,r)){const _=Xa(e,r),g=_?{transformedValue:_.value,annotations:[_.type]}:{transformedValue:e};return l||i.set(e,g),g}if(os(o,e))return{transformedValue:null};const c=Xa(e,r),f=c?.value??e,v=mr(f)?[]:{},m={};un(f,(_,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const P=yi(_,t,r,n,[...s,g],[...o,e],i);v[g]=P.transformedValue,mr(P.annotations)?m[g]=P.annotations:Bn(P.annotations)&&un(P.annotations,(b,y)=>{m[di(g)+"."+y]=b})});const p=Ks(m)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,m]:m};return l||i.set(e,p),p};function wi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Fa(e){return wi(e)==="Array"}function Nu(e){if(wi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Iu(e,t,r,n,s){const o={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),s&&o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Zs(e,t={}){if(Fa(e))return e.map(s=>Zs(s,t));if(!Nu(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((s,o)=>{if(Fa(t.props)&&!t.props.includes(o))return s;const i=e[o],l=Zs(i,t);return Iu(s,o,l,e,t.nonenumerable),s},{})}class Oe{constructor({dedupe:t=!1}={}){this.classRegistry=new su,this.symbolRegistry=new li(r=>r.description??""),this.customTransformerRegistry=new iu,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=yi(t,r,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const o=Tu(r,this.dedupe);return o&&(s.meta={...s.meta,referentialEqualities:o}),s}deserialize(t){const{json:r,meta:n}=t;let s=Zs(r);return n?.values&&(s=Eu(s,n.values,this)),n?.referentialEqualities&&(s=$u(s,n.referentialEqualities)),s}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}Oe.defaultInstance=new Oe;Oe.serialize=Oe.defaultInstance.serialize.bind(Oe.defaultInstance);Oe.deserialize=Oe.defaultInstance.deserialize.bind(Oe.defaultInstance);Oe.stringify=Oe.defaultInstance.stringify.bind(Oe.defaultInstance);Oe.parse=Oe.defaultInstance.parse.bind(Oe.defaultInstance);Oe.registerClass=Oe.defaultInstance.registerClass.bind(Oe.defaultInstance);Oe.registerSymbol=Oe.defaultInstance.registerSymbol.bind(Oe.defaultInstance);Oe.registerCustom=Oe.defaultInstance.registerCustom.bind(Oe.defaultInstance);Oe.allowErrorProps=Oe.defaultInstance.allowErrorProps.bind(Oe.defaultInstance);function Si(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Rt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Cu(e,t,r=100){try{const{databases:n,config:s}=await Rt(),o=await n.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,[k.greaterThan("$updatedAt",t),k.equal("mainId",e),k.limit(r),k.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function xi(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:s,config:o}=await Rt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await s.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[k.equal("mainId",e),k.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),k.limit(n)])).documents;const i=await s.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[k.greaterThan("$updatedAt",r),k.equal("mainId",e),k.limit(n),k.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(s){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,s);const o=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function Or(e,t){try{const{databases:r,config:n}=await Rt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function ur(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const s=Si(n,t),{databases:o,config:i}=await Rt(),l=await o.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,s);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const s=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${s}`)}}async function Pi(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Or(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Ei(e,t){return Or(e,{who:t})}async function Xs(e,t){return Or(e,{stockReel:t})}async function $i(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const s={};return t.stockReel!==void 0&&(s.stockReel=t.stockReel),t.who!==void 0&&(s.who=t.who),t.storeInfo!==void 0&&(s.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await Or(e,s)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await ur(e,s,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function ki(e){try{const{databases:t,config:r}=await Rt(),o=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:o.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,cn.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Ai(e,t){try{const{databases:r,config:n}=await Rt(),s=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||s.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Ti(e){try{const{databases:t,config:r}=await Rt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Ni(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Rt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[k.equal("$id",e),k.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Ii(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(_=>_.includes("products.")),f=i.some(_=>_.includes("purchases.")),v=i.some(_=>_.includes(".create")),m=i.some(_=>_.includes(".update")),p=i.some(_=>_.includes(".delete"));if(c){const _=l;v&&t.onProductCreate?t.onProductCreate(_):m&&t.onProductUpdate?t.onProductUpdate(_):p&&t.onProductDelete&&t.onProductDelete(_.$id)}else if(f){const _=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(_):m&&t.onPurchaseUpdate?t.onPurchaseUpdate(_):p&&t.onPurchaseDelete&&t.onPurchaseDelete(_.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function Ci(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Rt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Di(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:s}=await Rt(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await s.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(s){throw console.error("[Appwrite Interactions] Erreur création Main document:",s),s}}async function _a(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const s=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const o=JSON.parse(s.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function Mi(e,t,r,n){return _a({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function Ri(e,t,r,n="replace"){return _a({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function Oi(e,t,r,n={}){try{const{databases:s,config:o}=await Rt(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const v of r){const m={products:[t],mainId:e,quantity:v.q,unit:v.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await s.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,cn.unique(),m);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(s){console.error("[Appwrite Interactions] Erreur création validation rapide:",s);const o=s instanceof Error?s.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const Du=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:_a,batchUpdateStore:Mi,batchUpdateWho:Ri,createMainDocument:Di,createPurchase:ki,createQuickValidationPurchases:Oi,deletePurchase:Ti,enrichedProductToAppwriteProduct:Si,loadMainEventData:Ci,loadPurchasesListByIds:Ni,loadUpdatedPurchases:Cu,subscribeToRealtime:Ii,syncProductsWithPurchases:xi,updateProduct:Or,updateProductBatch:$i,updateProductStock:Xs,updateProductStore:Pi,updateProductWho:Ei,updatePurchase:Ai,upsertProduct:ur},Symbol.toStringTag,{value:"Module"}));async function Mu(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Ru(e,t){const r=tu(e.byDate),n=Mn(ss([])),{numeric:s,display:o}=as(r,n);return{$id:`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:s,stockOrTotalPurchases:"-",displayTotalNeeded:Fr(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function Ou(e,t){return e.map(r=>Ru(r,t))}class qu{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";METADATA_KEY="cache-metadata";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=s=>{const o=s.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE),console.log("[IDBCache] Object store 'metadata' créé"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).get(this.METADATA_KEY);o.onsuccess=()=>{const i=o.result||{lastSync:null,allDates:[]};console.log(`[IDBCache] Metadata chargée: lastSync=${i.lastSync}, dates=${i.allDates?.length||0}`),t(i)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const s=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=s.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),s.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},s.onerror=()=>n(s.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put(t,this.METADATA_KEY);i.onsuccess=()=>{console.log("[IDBCache] Metadata sauvegardée"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Bu(e){const t=new qu(e);return await t.open(),t}const eo=1e3;class ju{#e=new zc;#r=U(null);#c=U(!1);#u=U(!1);#l=U(null);#o=U(!1);#i=U(!1);#s=U(Ce([]));#a=U(null);#d=U(null);get startDate(){return a(this.#d)}set startDate(t){x(this.#d,t,!0)}#v=U(null);get endDate(){return a(this.#v)}set endDate(t){x(this.#v,t,!0)}#n=null;#f=null;#h=U(!1);#t=U(Ce({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return a(this.#t)}get currentMainId(){return a(this.#r)}get isInitialized(){return a(this.#c)}get loading(){return a(this.#u)}get error(){return a(this.#l)}get allDates(){return a(this.#s)}get syncing(){return a(this.#o)}setDateRange(t,r){this.startDate=t,this.endDate=r}initializeDateRange(){if((!this.startDate||!this.endDate)&&a(this.#s).length>0){const t=[...a(this.#s)].sort();this.startDate=t[0],this.endDate=t[t.length-1]}console.log(`[ProductsStore] Date range initialized: ${this.startDate} - ${this.endDate}`)}get firstDate(){return a(this.#s).length===0?null:[...a(this.#s)].sort()[0]}get lastDate(){return a(this.#s).length===0?null:[...a(this.#s)].sort().pop()}get realtimeConnected(){return a(this.#i)}get hugoContentChanged(){return a(this.#h)}getTotalNeededInRange(t){return this.totalNeededByDateRange.get(t)??[]}getFormattedTotalNeeded(t){const r=this.getTotalNeededInRange(t);return r.length>0?Fr(r):"-"}#g=W(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return a(this.#g)}set enrichedProducts(t){x(this.#g,t)}#w=W(()=>{if(console.log("[Store] Recalcul totalNeededByDateRange"),this.startDate===this.firstDate&&this.endDate===this.lastDate)return console.log("[Store] Full date range - using totalNeededArray (no calculation)"),new Map(this.enrichedProducts.map(n=>[n.$id,n.totalNeededArray]));const r=new Map;for(const n of this.enrichedProducts)if(n.byDate){const s=Fc(n.byDate),o=Kc(s,this.startDate,this.endDate);o.length>0&&r.set(n.$id,o)}return r});get totalNeededByDateRange(){return a(this.#w)}set totalNeededByDateRange(t){x(this.#w,t)}#S=W(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const s=Fr(r);t.set(n,s)}),t});get formattedTotalNeededByDateRange(){return a(this.#S)}set formattedTotalNeededByDateRange(t){x(this.#S,t)}#p=W(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return a(this.#p)}set stats(t){x(this.#p,t)}#_=W(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return a(this.#_)}set uniqueStores(t){x(this.#_,t)}#m=W(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return a(this.#m)}set uniqueWho(t){x(this.#m,t)}#E=W(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return a(this.#E)}set uniqueProductTypes(t){x(this.#E,t)}#$=W(()=>new Set(this.totalNeededByDateRange.keys()));get relevantProductIds(){return a(this.#$)}set relevantProductIds(t){x(this.#$,t)}#k=W(()=>{const t=this.enrichedProducts.filter(r=>this.#z(r)&&this.relevantProductIds.has(r.$id));return a(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>a(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get displayProducts(){return a(this.#k)}set displayProducts(t){x(this.#k,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(a(this.#c)&&a(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),x(this.#r,t,!0);try{this.#n=await Bu(t)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}x(this.#l,null);try{if(await this.#I(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await Mu(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Ou(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),x(this.#s,[...n.allDates],!0),await Ci(t)||await Di(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#A()}this.initializeDateRange(),await this.#C(),x(this.#c,!0);const r=this.#L();this.#f=Ii(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw x(this.#l,n,!0),console.error("[ProductsStore]",n,r),r}}async#I(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,s)=>{this.#e.set(s,n)});const r=await this.#n.loadMetadata();x(this.#a,r.lastSync,!0),x(this.#s,[...r.allDates],!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#C(){if(a(this.#r)){x(this.#o,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${a(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${a(this.#a)}`);const t=await xi(a(this.#r),{lastSync:a(this.#a),limit:eo});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const s=this.#T(r,n);s.isSynced=!0,this.#e.set(r.$id,s)}),a(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${a(this.#a)}`);const{loadUpdatedPurchases:r}=await Lc(async()=>{const{loadUpdatedPurchases:s}=await Promise.resolve().then(()=>Du);return{loadUpdatedPurchases:s}},void 0),n=await r(a(this.#r),a(this.#a),eo);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(s=>{if(s.products?.length){const o=s.products.map(i=>typeof i=="string"?i:i.$id);this.#P(o,s)}})}this.#D(),await this.#A(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{x(this.#o,!1)}}}async#A(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:a(this.#a),allDates:[...a(this.#s)]}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#x(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#D(){x(this.#a,new Date().toISOString(),!0)}#T(t,r){return r?this.#b(t,r):this.#M(t)}#M(t){const r=Mn(ss(t.purchases??[])),n=[],{numeric:s,display:o}=as(n,r),i=Nn(t.stockReel)??null,l=Fr(r),c=t.store?Nn(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:s,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:La(t.totalNeededOverride)}}#b(t,r){const n=t.purchases??r.purchases,s=Mn(ss(n??[])),o=Fr(s),{numeric:i,display:l}=as(r.totalNeededArray,s),c=t.stockReel??r.stockReel,f=c?Nn(c):r.stockParsed,v=t.store??r.store,m=v?Nn(v):r.storeInfo,p=f?`${f.quantity} ${f.unit}`:o;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:v,stockReel:c,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:m,stockParsed:f,totalPurchasesArray:s,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:La(t.totalNeededOverride??r.totalNeededOverride)}}#V(t){t.totalPurchasesArray=Mn(ss(t.purchases??[]));const{numeric:r,display:n}=as(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=Fr(t.totalPurchasesArray)}#U(t){t.length&&(t.forEach(r=>this.#y(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#y(t){const r=this.#e.get(t.$id),n=this.#T(t,r);this.#e.set(t.$id,n)}#R(t){this.#e.delete(t)}async#O(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#j(r,t),r}async#q(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Ni([t.$id]);if(r?.products?.length){const n=r.products.map(s=>typeof s=="string"?s:s.$id).filter(Boolean);return this.#P(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#B(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(s=>s.$id===t));return r.forEach(n=>{this.#y(n)}),r.map(n=>n.$id)}#N(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#j(t,r){const n=this.#N(r),s=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#b({...i,purchases:[...l,n],status:"active"},i);s.push(c)}}}),s.forEach(o=>{this.#e.set(o.$id,o)})}#P(t,r){const n=this.#N(r),s=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#b({...i,purchases:f,status:"active"},i);s.push(v)}else{const f=this.#b({...i,purchases:[...l,r],status:"active"},i);s.push(f)}}}),s.forEach(o=>{this.#e.set(o.$id,o)})}#L(){return{onProductCreate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#R(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#O(t);await this.#x(r)},onPurchaseUpdate:async t=>{const r=await this.#q(t);await this.#x(r)},onPurchaseDelete:async t=>{const r=await this.#B(t);await this.#x(r)},onConnect:()=>{x(this.#i,!0)},onDisconnect:()=>{x(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#z(t){if(a(this.#t).searchQuery.trim()){const r=a(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(a(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!a(this.#t).selectedStores.includes(t.storeInfo.storeName))||a(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>a(this.#t).selectedWho.includes(r)))||a(this.#t).selectedProductTypes.length>0&&(!t.productType||!a(this.#t).selectedProductTypes.includes(t.productType))||a(this.#t).selectedTemperatures.length>0&&!(a(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||a(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Hc(t=>{a(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=a(this.#t).selectedProductTypes.indexOf(t);r>-1?a(this.#t).selectedProductTypes.splice(r,1):a(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=a(this.#t).selectedTemperatures.indexOf(t);r>-1?a(this.#t).selectedTemperatures.splice(r,1):a(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){a(this.#t).selectedProductTypes=[],a(this.#t).selectedTemperatures=[]}setGroupBy(t){a(this.#t).groupBy=t}toggleStore(t){const r=a(this.#t).selectedStores.indexOf(t);r>-1?a(this.#t).selectedStores.splice(r,1):a(this.#t).selectedStores.push(t)}toggleWho(t){const r=a(this.#t).selectedWho.indexOf(t);r>-1?a(this.#t).selectedWho.splice(r,1):a(this.#t).selectedWho.push(t)}clearStoreFilters(){a(this.#t).selectedStores=[]}clearWhoFilters(){a(this.#t).selectedWho=[]}handleSort(t){a(this.#t).sortColumn===t?a(this.#t).sortDirection=a(this.#t).sortDirection==="asc"?"desc":"asc":(a(this.#t).sortColumn=t,a(this.#t).sortDirection="asc")}clearFilters(){x(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return a(this.#t).sortColumn?[...t].sort((r,n)=>{let s=r[a(this.#t).sortColumn],o=n[a(this.#t).sortColumn];return a(this.#t).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,o=parseFloat(o)||0):a(this.#t).sortColumn==="purchases"&&(s=r.purchases?.length||0,o=n.purchases?.length||0),s<o?a(this.#t).sortDirection==="asc"?-1:1:s>o?a(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDate?Yc(n.byDate,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDate&&n.byDate[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Xc(r.byDate):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDate?Object.keys(r.byDate).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?0:Zc(r.byDate,this.startDate,this.endDate)}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?[]:Object.keys(r.byDate).filter(s=>{const o=new Date(s),i=this.startDate?new Date(this.startDate):null,l=this.endDate?new Date(this.endDate):null;return i&&l&&o>=i&&o<=l}).flatMap(s=>r.byDate[s]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){await this.clearCache(),await this.initialize(t)}async clearCache(){this.#e.clear(),x(this.#s,[],!0),x(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(s=>{const o=this.#e.get(s);if(o){const i={...o,status:n};this.#e.set(s,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#f?.(),this.#f=null,this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const M=new ju;function Lu(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const zu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Vu=_c("<svg><!><!></svg>");function de(e,t){Y(t,!0);const r=qe(t,"color",3,"currentColor"),n=qe(t,"size",3,24),s=qe(t,"strokeWidth",3,2),o=qe(t,"absoluteStrokeWidth",3,!1),i=qe(t,"iconNode",19,()=>[]),l=ce(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=Vu();qa(c,m=>({...zu,...l,width:n(),height:n(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(s())*24/Number(n()):s()]);var f=u(c);st(f,17,i,Qs,(m,p)=>{var _=W(()=>vo(a(p),2));let g=()=>a(_)[0],P=()=>a(_)[1];var b=J(),y=B(b);xc(y,g,!0,(A,w)=>{qa(A,()=>({...P()}))}),h(m,b)});var v=d(f);oe(v,()=>t.children??ne),h(e,c),Z()}function Fs(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];de(e,ue({name:"archive"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Uu(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];de(e,ue({name:"bean"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Wu(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];de(e,ue({name:"beef"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Gu(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];de(e,ue({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Qu(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];de(e,ue({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function dn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];de(e,ue({name:"check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Hu(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];de(e,ue({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Ku(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];de(e,ue({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function to(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];de(e,ue({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Ju(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];de(e,ue({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Yu(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];de(e,ue({name:"circle-x"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Zu(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];de(e,ue({name:"clock"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Xu(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];de(e,ue({name:"cloud"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function ma(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];de(e,ue({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Fu(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];de(e,ue({name:"egg"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function ed(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];de(e,ue({name:"euro"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function ea(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];de(e,ue({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function td(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];de(e,ue({name:"info"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function ro(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];de(e,ue({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function rd(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];de(e,ue({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function nd(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];de(e,ue({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function sd(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];de(e,ue({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function ad(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];de(e,ue({name:"log-in"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function od(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];de(e,ue({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function ga(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];de(e,ue({name:"message-circle"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function id(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];de(e,ue({name:"moon"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Un(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];de(e,ue({name:"package"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function ld(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];de(e,ue({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function cd(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];de(e,ue({name:"plus"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function ud(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];de(e,ue({name:"receipt"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function dd(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];de(e,ue({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function fd(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];de(e,ue({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function vd(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];de(e,ue({name:"save"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function hd(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];de(e,ue({name:"search"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function ta(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];de(e,ue({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function hr(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];de(e,ue({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function ra(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];de(e,ue({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function ds(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];de(e,ue({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function pr(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];de(e,ue({name:"store"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function pd(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];de(e,ue({name:"sun"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Ps(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];de(e,ue({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function qi(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];de(e,ue({name:"user-plus"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function Wn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];de(e,ue({name:"user"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function na(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];de(e,ue({name:"users"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function _d(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];de(e,ue({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function ft(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];de(e,ue({name:"x"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=J(),l=B(i);oe(l,()=>t.children??ne),h(s,i)},$$slots:{default:!0}})),Z()}function is(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Uu};case"animaux":return{displayName:"Viandes et Poissons",icon:Wu};case"legumes":return{displayName:"Fruits et Légumes",icon:Qu};case"sucres":return{displayName:"Sucrées",icon:Gu};case"lof":return{displayName:"L.O.F",icon:Fu};case"autres":return{displayName:"Autres",icon:Hu};case"epices":return{displayName:"Assaisonnements",icon:rd};case"frais":return{displayName:"Produits Frais",icon:fd};default:return{displayName:e,icon:Un}}}function no(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Es(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function $s(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function md(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function gd(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],o=n[t.sortColumn];return s<o?t.sortDirection==="asc"?-1:1:s>o?t.sortDirection==="asc"?1:-1:0}):e}function sa(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function so(e){return e?$s(e):"-"}function bd(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const s=n.status||"direct",o=n.unit||"unit",i=`${s}_${o}`;if(!r[i]){const l=sa(s);r[i]={status:s,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:yd(s)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function yd(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ShoppingCart";case"pending":return"Clock";case"delivered":return"CircleCheck";case"cancelled":return"CircleX";default:return"Package"}}let ao=()=>localStorage.getItem("appwrite-user-name")||"";function wd(e){let t=U(!1),r=U(null);const n=W(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),M.getEnrichedProductById(e))),s=W(()=>a(n)?.who??[]),o=W(()=>a(n)?.stockParsed??null),i=W(()=>a(n)?.purchases??[]),l=W(()=>a(n)?.byDate?eu(a(n).byDate):[]),c=Ce({purchase:{quantity:null,unit:"",store:"",who:ao()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=U(!1),v=U(null);zr(()=>{!a(n)||a(f)||(c.purchase.quantity=a(n).missingQuantityArray[0]?.q??null,c.purchase.unit=a(n).totalNeededArray[0]?.u??"",c.purchase.store=a(n).storeInfo?.storeName??"",c.purchase.who=ao()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=a(n).totalNeededArray[0]?.u??"",c.store.name=a(n).storeInfo?.storeName??"",c.store.comment=a(n).storeInfo?.storeComment??null,c.who=a(n)?.who?[...a(n).who]:[],x(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),x(f,!0))});const m=W(()=>a(v)?{store:JSON.stringify(c.store)!==JSON.stringify(a(v).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(a(v).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?a(o)?c.stock.quantity.toString()!==a(o).quantity||c.stock.unit!==a(o).unit||(c.stock.notes||"")!==(a(o).notes||""):!0:!1}const _=W(()=>!!(a(v)&&(a(m).store||a(m).stock||a(m).who)));let g=U(null);const P=W(()=>a(g)?a(i).find(D=>D.$id===a(g))??null:null);async function b(D,z){x(t,!0),x(r,null);try{const ee=await D();return z&&y("success",z),ee}catch(ee){const Se=ee instanceof Error?ee.message:"Une erreur est survenue";return x(r,Se,!0),y("error",Se),console.error("[ProductModalState]",ee),null}finally{x(t,!1)}}function y(D,z){const ee=new CustomEvent("toast",{detail:{type:D,message:z}});window.dispatchEvent(ee)}async function A(){a(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!M.currentMainId)throw new Error("mainId non disponible");const{quantity:D,unit:z}=no(c.purchase.quantity,c.purchase.unit);a(n).isSynced||(console.log(`[ProductModalState] Produit ${a(n).$id} local, création pour purchase...`),await ur(a(n).$id,{},ee=>M.getEnrichedProductById(ee))),await ki({products:[a(n).$id],mainId:M.currentMainId,unit:z,quantity:D,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:c.purchase.status||"delivered",orderDate:c.purchase.orderDate||null,deliveryDate:c.purchase.deliveryDate||null}),c.purchase={quantity:a(n).missingQuantityArray[0]?.q??null,unit:a(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function w(D){x(g,D.$id,!0)}function E(){x(g,null)}async function $(D){D.$id&&await b(async()=>{const{quantity:z,unit:ee}=no(D.quantity,D.unit);await Ai(D.$id,{unit:ee,quantity:z,store:D.store||null,who:D.who||null,notes:D.notes||"",price:D.price||null,status:D.status||null,orderDate:D.orderDate||null,deliveryDate:D.deliveryDate||null}),x(g,null)},"Achat modifié avec succès")}async function T(D){const z=a(i).find(ee=>ee.$id===D);z&&confirm(`Supprimer cet achat (${z.quantity} ${z.unit}) ?`)&&await b(async()=>{await Ti(D)},"Achat supprimé avec succès")}async function I(){a(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const D={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update stock normal...`),await Xs(a(n).$id,JSON.stringify(D))):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création stock avec upsert...`),await ur(a(n).$id,{stockReel:JSON.stringify(D)},z=>M.getEnrichedProductById(z))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function C(){a(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, suppression stock normal...`),await Xs(a(n).$id,null)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, suppression stock avec upsert...`),await ur(a(n).$id,{stockReel:null},D=>M.getEnrichedProductById(D)))},"Stock supprimé")}async function ae(D){a(n)&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, setWho normal...`),await Ei(a(n).$id,D)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création who avec upsert...`),await ur(a(n).$id,{who:D},z=>M.getEnrichedProductById(z)))},"Volontaires mis à jour")}async function G(D){a(n)&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update store normal...`),await Pi(a(n).$id,D)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création store avec upsert...`),await ur(a(n).$id,{store:JSON.stringify(D)},z=>M.getEnrichedProductById(z)))},"Magasin mis à jour")}async function V(D){a(n)&&await b(async()=>{await Or(a(n).$id,{totalNeededOverride:JSON.stringify(D)})},"Override appliqué")}async function X(){a(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await Or(a(n).$id,{totalNeededOverride:null})},"Override supprimé")}async function te(){!a(n)||!a(_)||await b(async()=>{const D={};if(a(m).stock&&c.stock.quantity&&c.stock.unit){const z={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};D.stockReel=JSON.stringify(z)}if(a(m).who&&(D.who=c.who),a(m).store){const z={storeName:c.store.name||"",storeComment:c.store.comment||void 0};D.storeInfo=z}Object.keys(D).length>0&&(await $i(a(n).$id,D,z=>M.getEnrichedProductById(z)),x(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return a(t)},get error(){return a(r)},get product(){return a(n)},get recipes(){return a(l)},get whoList(){return a(s)},get stockParsed(){return a(o)},get purchasesList(){return a(i)},get editingPurchaseId(){return a(g)},get editingPurchaseData(){return a(P)},forms:c,addPurchase:A,startEditPurchase:w,cancelEditPurchase:E,updateEditedPurchase:$,removePurchase:T,setStock:I,removeStock:C,setWho:ae,updateStore:G,setOverride:V,removeOverride:X,saveAllChanges:te,get hasChanges(){return a(m)},get hasAnyChanges(){return a(_)},formatQuantity:Es,formatDate:$s,formatDisplayQuantity:md}}function Sd(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function xd(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Pd(e,t){t().cancelEditPurchase()}var Ed=S('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),$d=S('<span class="loading loading-spinner loading-sm"></span>'),kd=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Ad=S('<span class="loading loading-spinner loading-sm"></span>'),Td=S('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Nd=(e,t,r)=>t(a(r)),Id=(e,t,r)=>t(a(r).$id),Cd=S('<span class="loading loading-spinner loading-sm"></span>'),Dd=S('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Md=S('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Rd=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Od(e,t){Y(t,!0);let r=qe(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function s(se){return se.quantity!==null&&se.quantity!==0&&se.unit?.trim()!==""}function o(se){r().removePurchase(se)}function i(se){r().startEditPurchase(se)}var l=Rd(),c=u(l),f=u(c);hr(f,{class:"h-5 w-5"});var v=d(c,2),m=u(v),p=d(u(m),2),_=u(p),g=u(_);Un(g,{class:"h-4 w-4 opacity-50"});var P=d(g,2),b=d(_,2),y=u(b);y.value=y.__value="";var A=d(y);A.value=A.__value="kg";var w=d(A);w.value=w.__value="gr.";var E=d(w);E.value=E.__value="l.";var $=d(E);$.value=$.__value="ml";var T=d($);T.value=T.__value="unité";var I=d(T);I.value=I.__value="bottes";var C=d(b,2),ae=u(C);pr(ae,{class:"h-4 w-4 opacity-50"});var G=d(ae,2),V=d(C,2),X=u(V);Wn(X,{class:"h-4 w-4 opacity-50"});var te=d(X,2),D=d(V,2),z=d(u(D),2),ee=d(p,2),Se=u(ee),O=u(Se);ga(O,{class:"h-4 w-4 opacity-50"});var re=d(O,2),ge=d(ee,2),Ne=u(ge),Te=u(Ne),Re=u(Te),Qe=u(Re);Qe.value=Qe.__value="delivered";var he=d(Qe);he.value=he.__value="ordered";var be=d(he);be.value=be.__value="requested";var q=d(Te,2),F=d(Ne,2);{var $e=se=>{var H=Ed(),ve=d(u(H),2);Ie(ve,()=>r().forms.purchase.deliveryDate,je=>r().forms.purchase.deliveryDate=je),h(se,H)};N(F,se=>{r().forms.purchase.status==="ordered"&&se($e)})}var _e=d(ge,2),xe=u(_e);xe.__click=[Sd,n,r];var Ue=u(xe);{var He=se=>{var H=$d();h(se,H)},ie=se=>{var H=lt("Ajouter l'achat");h(se,H)};N(Ue,se=>{r().loading?se(He):se(ie,!1)})}var ke=d(v,2);{var ht=se=>{var H=kd(),ve=u(H);hr(ve,{class:"mx-auto mb-2 h-12 w-12"}),h(se,H)},St=se=>{var H=Md(),ve=u(H),je=d(u(ve));st(je,21,()=>r().purchasesList,ut=>ut.$id,(ut,fe,De)=>{var Ke=J(),Ot=B(Ke);{var nr=K=>{var me=Td(),Ae=u(me),Je=u(Ae),Le=u(Je),Ze=d(Le,2),mt=u(Ze);mt.value=mt.__value="kg";var xt=d(mt);xt.value=xt.__value="gr.";var Pt=d(xt);Pt.value=Pt.__value="l.";var tt=d(Pt);tt.value=tt.__value="ml";var We=d(tt);We.value=We.__value="unité";var qt=d(We);qt.value=qt.__value="bottes";var Gt=d(Ae),sr=u(Gt),Bt=d(Gt),Qt=u(Bt),Ur=d(Bt),yr=u(Ur),wr=u(yr);wr.value=wr.__value="requested";var ar=d(wr);ar.value=ar.__value="ordered";var Sr=d(ar);Sr.value=Sr.__value="delivered";var or=d(Sr);or.value=or.__value="cancelled";var Wr=d(Ur),xr=u(Wr),Gr=d(Wr),_n=u(Gr),Qr=d(Gr),Et=u(Qr),Ht=d(Qr),mn=u(Ht),Hr=d(Ht),gn=u(Hr),Pr=u(gn);Pr.__click=[xd,r,s];var ks=u(Pr);{var Gn=Q=>{var Ye=Ad();h(Q,Ye)},As=Q=>{vd(Q,{class:"h-3 w-3"})};N(ks,Q=>{r().loading?Q(Gn):Q(As,!1)})}var Qn=d(Pr,2);Qn.__click=[Pd,r];var j=u(Qn);ft(j,{class:"h-3 w-3"}),L(Q=>Pr.disabled=Q,[()=>r().loading||!s(a(fe))]),Ie(Le,()=>a(fe).quantity,Q=>a(fe).quantity=Q),Nr(Ze,()=>a(fe).unit,Q=>a(fe).unit=Q),Ie(sr,()=>a(fe).store,Q=>a(fe).store=Q),Ie(Qt,()=>a(fe).who,Q=>a(fe).who=Q),Nr(yr,()=>a(fe).status,Q=>a(fe).status=Q),Ie(xr,()=>a(fe).orderDate,Q=>a(fe).orderDate=Q),Ie(_n,()=>a(fe).deliveryDate,Q=>a(fe).deliveryDate=Q),Ie(Et,()=>a(fe).price,Q=>a(fe).price=Q),Ie(mn,()=>a(fe).notes,Q=>a(fe).notes=Q),h(K,me)},br=K=>{var me=Dd(),Ae=u(me),Je=u(Ae),Le=d(Ae),Ze=u(Le),mt=d(Le),xt=u(mt),Pt=d(mt),tt=u(Pt),We=u(tt),qt=d(Pt),Gt=u(qt),sr=d(qt),Bt=u(sr),Qt=d(sr),Ur=u(Qt),yr=d(Qt),wr=u(yr),ar=d(yr),Sr=u(ar),or=u(Sr);or.__click=[Nd,i,fe];var Wr=u(or);ds(Wr,{class:"h-4 w-4"});var xr=d(or,2);xr.__click=[Id,o,fe];var Gr=u(xr);{var _n=Et=>{var Ht=Cd();h(Et,Ht)},Qr=Et=>{ft(Et,{class:"h-4 w-4"})};N(Gr,Et=>{r().loading?Et(_n):Et(Qr,!1)})}L((Et,Ht,mn,Hr,gn)=>{R(Je,Et),R(Ze,a(fe).store||"-"),R(xt,a(fe).who||"-"),ye(tt,1,`badge badge-sm ${Ht??""}`),R(We,mn),R(Gt,Hr),R(Bt,gn),R(Ur,a(fe).price?`${a(fe).price}€`:"-"),R(wr,a(fe).notes||"-"),xr.disabled=r().loading},[()=>Es(a(fe).quantity,a(fe).unit),()=>sa(a(fe).status).class,()=>sa(a(fe).status).text,()=>so(a(fe).orderDate),()=>so(a(fe).deliveryDate)]),h(K,me)};N(Ot,K=>{r().editingPurchaseId===a(fe).$id?K(nr):K(br,!1)})}h(ut,Ke)}),h(se,H)};N(ke,se=>{r().purchasesList.length===0?se(ht):se(St,!1)})}L(se=>{ye(q,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),xe.disabled=se},[()=>r().loading||!n()]),Ie(P,()=>r().forms.purchase.quantity,se=>r().forms.purchase.quantity=se),Nr(b,()=>r().forms.purchase.unit,se=>r().forms.purchase.unit=se),Ie(G,()=>r().forms.purchase.store,se=>r().forms.purchase.store=se),Ie(te,()=>r().forms.purchase.who,se=>r().forms.purchase.who=se),Ie(z,()=>r().forms.purchase.price,se=>r().forms.purchase.price=se),Ie(re,()=>r().forms.purchase.notes,se=>r().forms.purchase.notes=se),Nr(Re,()=>r().forms.purchase.status,se=>r().forms.purchase.status=se),h(e,l),Z()}it(["click"]);async function qd(e,t){await t()?.removeStock()}var Bd=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},jd=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Ld=S('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),zd=S('<span class="loading loading-spinner loading-xs"></span>'),Vd=S('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),Ud=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function Wd(e,t){Y(t,!0);let r=qe(t,"modalState",7);var n=Ud(),s=u(n),o=u(s);Fs(o,{class:"h-5 w-5"});var i=d(s,2),l=u(i),c=u(l),f=u(c),v=d(c,2),m=u(v),p=u(m);Un(p,{class:"h-4 w-4 opacity-50"});var _=d(p,2),g=d(m,2),P=u(g);P.value=P.__value="";var b=d(P);b.value=b.__value="kg";var y=d(b);y.value=y.__value="gr.";var A=d(y);A.value=A.__value="l.";var w=d(A);w.value=w.__value="ml";var E=d(w);E.value=E.__value="unité";var $=d(E);$.value=$.__value="bottes";var T=d(v,2),I=u(T),C=d(T,2),ae=u(C);ae.__click=[Bd,r];var G=d(i,2);{var V=te=>{var D=jd(),z=u(D);Fs(z,{class:"mx-auto mb-2 h-12 w-12"}),h(te,D)},X=te=>{var D=Vd(),z=u(D),ee=d(u(z),2),Se=u(ee),O=d(u(Se),2),re=u(O),ge=d(Se,2),Ne=d(u(ge),2),Te=u(Ne),Re=d(ge,2);{var Qe=_e=>{var xe=Ld(),Ue=d(u(xe),2),He=u(Ue);L(()=>R(He,r().stockParsed.notes)),h(_e,xe)};N(Re,_e=>{r().stockParsed.notes&&_e(Qe)})}var he=d(ee,2),be=u(he);be.__click=[qd,r];var q=u(be);{var F=_e=>{var xe=zd();h(_e,xe)},$e=_e=>{var xe=lt("Supprimer le stock");h(_e,xe)};N(q,_e=>{r().loading?_e(F):_e($e,!1)})}L(_e=>{R(re,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),R(Te,_e),be.disabled=r().loading},[()=>$s(r().stockParsed.dateTime)]),h(te,D)};N(G,te=>{r().stockParsed?te(X,!1):te(V)})}L(()=>{R(f,r().stockParsed?"Modifier le stock":"Ajouter un stock"),ae.disabled=r().loading}),Ie(_,()=>r().forms.stock.quantity,te=>r().forms.stock.quantity=te),Nr(g,()=>r().forms.stock.unit,te=>r().forms.stock.unit=te),Ie(I,()=>r().forms.stock.notes,te=>r().forms.stock.notes=te),h(e,n),Z()}it(["click"]);var Gd=(e,t,r)=>t(a(r).id),Qd=S('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),Hd=S('<span class="flex items-center gap-1"><!> </span>'),Kd=S('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Jd=S('<div class="flex flex-wrap gap-2"></div> <!>',1);function zn(e,t){Y(t,!0);let r=qe(t,"badgeSize",3,"badge-lg"),n=qe(t,"color",3,"primary"),s=qe(t,"badgeStyle",3,""),o=qe(t,"onToggleItem",3,()=>{}),i=qe(t,"showStats",3,!1),l=qe(t,"showIcon",3,!0),c=U(Ce({}));zr(()=>{const b={};t.items.forEach(y=>{b[y.id]=y.selected??!0}),x(c,b,!0)});function f(b){a(c)[b]=!a(c)[b],o()(b)}const v=W(()=>Object.values(a(c)).filter(Boolean).length),m=W(()=>Object.values(a(c)).filter(b=>!b).length);var p=Jd(),_=B(p);st(_,21,()=>t.items,b=>b.id,(b,y)=>{const A=W(()=>a(c)[a(y).id]);var w=Qd();w.__click=[Gd,f,y];var E=u(w);{var $=G=>{var V=J(),X=B(V);Tr(X,()=>a(y).icon,(te,D)=>{D(te,{class:"h-3 w-3",get title(){return a(y).title}})}),h(G,V)};N(E,G=>{a(y).icon&&G($)})}var T=d(E,2),I=u(T),C=d(T,2);{var ae=G=>{var V=J(),X=B(V);{var te=z=>{dn(z,{size:16})},D=z=>{cd(z,{size:16})};N(X,z=>{a(A)?z(te):z(D,!1)})}h(G,V)};N(C,G=>{l()&&G(ae)})}L(()=>{ye(w,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${a(A)?`${s()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Rr(w,"title",a(A)?"Retirer de la liste":"Réajouter à la liste"),R(I,a(y).label)}),h(b,w)});var g=d(_,2);{var P=b=>{var y=Kd(),A=u(y),w=u(A),E=u(w);dn(E,{class:"text-success h-3 w-3"});var $=d(E),T=d(w,2);{var I=G=>{var V=Hd(),X=u(V);ft(X,{class:"text-error h-3 w-3"});var te=d(X);L(()=>R(te,` ${a(m)??""} retirés`)),h(G,V)};N(T,G=>{a(m)>0&&G(I)})}var C=d(A,2),ae=u(C);L(()=>{R($,` ${a(v)??""} actifs`),R(ae,`Total: ${t.items.length??""} items`)}),h(b,y)};N(g,b=>{i()&&b(P)})}h(e,p),Z()}it(["click"]);function Yd(e,t,r){t().forms.who=[...t().whoList],x(r,"")}var Zd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},Xd=S('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function Fd(e,t){Y(t,!0);let r=qe(t,"modalState",7),n=U("");const s=W(()=>{const I=new Set([...M.uniqueWho,...r().forms.who]);return Array.from(I).map(C=>({id:C,label:C,selected:r().forms.who.includes(C)}))});function o(I){const C=I.trim();C&&!r().forms.who.includes(C)&&(r().forms.who=[...r().forms.who,C])}function i(I){r().forms.who=r().forms.who.filter(C=>C!==I)}function l(I){r().forms.who.includes(I)?i(I):o(I)}function c(){a(n).trim()&&(o(a(n)),x(n,""))}var f=Xd(),v=u(f),m=u(v),p=d(u(m),4),_=u(p),g=u(_),P=u(g);Wn(P,{class:"h-4 w-4 opacity-50"});var b=d(P,2);b.__keydown=[Zd,c];var y=d(g,2);y.__click=c;var A=u(y);qi(A,{size:16});var w=d(_,2),E=d(u(w),2);zn(E,{get items(){return a(s)},onToggleItem:l,showIcon:!0});var $=d(p,2),T=u($);T.__click=[Yd,r,n],L(I=>{b.disabled=r().loading,y.disabled=I,T.disabled=r().loading},[()=>r().loading||!a(n).trim()]),Ie(b,()=>a(n),I=>x(n,I)),h(e,f),Z()}it(["keydown","click"]);var ef=S('<div class="mb-1 text-xs opacity-70"> </div>'),tf=(e,t,r)=>t(a(r)),rf=S("<button><!> </button>"),nf=S('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function Bi(e,t){Y(t,!0);let r=qe(t,"maxSuggestions",3,8),n=qe(t,"title",3,"Suggestions :"),s=qe(t,"buttonSize",3,"btn-xs"),o=qe(t,"buttonVariant",3,"btn-soft"),i=qe(t,"disabled",3,!1);const l=W(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=J(),v=B(f);{var m=p=>{var _=nf(),g=u(_);{var P=y=>{var A=ef(),w=u(A);L(()=>R(w,n())),h(y,A)};N(g,y=>{n()&&y(P)})}var b=d(g,2);st(b,21,()=>a(l),y=>y.id,(y,A)=>{var w=rf();w.__click=[tf,c,A];var E=u(w);{var $=I=>{var C=J(),ae=B(C);Tr(ae,()=>a(A).icon,(G,V)=>{V(G,{class:"h-3 w-3"})}),h(I,C)};N(E,I=>{a(A).icon&&I($)})}var T=d(E);L(()=>{ye(w,1,`btn ${s()??""} ${o()??""}`),w.disabled=i()||a(A).disabled,Rr(w,"title",a(A).disabled?"Déjà sélectionné":a(A).label),R(T,` ${a(A).label??""}`)}),h(y,w)}),h(p,_)};N(v,p=>{a(l).length>0&&p(m)})}h(e,f),Z()}it(["click"]);var sf=(e,t)=>{e.key==="Enter"&&t()},af=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},of=S(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function lf(e,t){Y(t,!0);let r=qe(t,"modalState",7);const n=W(()=>r()?.hasChanges?.store||!1);async function s(){if(!a(n))return;const A={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(A)}var o=of(),i=u(o),l=u(i),c=d(u(l),4),f=u(c),v=u(f),m=u(v);pr(m,{class:"h-4 w-4 opacity-50"});var p=d(m,2);p.__keydown=[sf,s];var _=d(v,2);{var g=A=>{{let w=W(()=>M.uniqueStores.map(E=>({id:E,label:E,disabled:E===r().forms.store.name})));Bi(A,{get suggestions(){return a(w)},onSuggestionClick:E=>{r().forms.store.name=E.label},buttonVariant:"btn-outline"})}};N(_,A=>{M.uniqueStores.length>0&&A(g)})}var P=d(f,2),b=d(c,2),y=u(b);y.__click=[af,r],L(()=>y.disabled=r().loading),Ie(p,()=>r().forms.store.name,A=>r().forms.store.name=A),Ie(P,()=>r().forms.store.comment,A=>r().forms.store.comment=A),h(e,o),Z()}it(["keydown","click"]);async function cf(e,t,r,n,s,o){if(!t.modalState)return;const i={totalOverride:{q:a(r),u:a(n)},comment:a(s)};await t.modalState.setOverride(i),x(o,!1)}async function uf(e,t,r){t.modalState&&(await t.modalState.removeOverride(),x(r,!1))}var df=S('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),ff=S('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),vf=S(" <!>",1),hf=(e,t)=>x(t,!0),pf=S('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),_f=S('<div class="text-error text-sm">Limite de caractères atteinte</div>'),mf=S('<span class="loading loading-spinner loading-sm"></span>'),gf=S('<span class="loading loading-spinner loading-sm"></span>'),bf=S(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div class="form-control"><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),yf=S('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function wf(e,t){Y(t,!0);const r=W(()=>t.modalState.product?.totalNeededOverrideParsed),n=W(()=>t.modalState.product?.displayTotalNeeded||[]);let s=U(!1),o=U(Ce(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=U(Ce(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=U(Ce(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),c=W(()=>a(o)>0&&a(i).trim()!=="");var f=yf(),v=u(f),m=u(v),p=u(m);{var _=P=>{var b=pf(),y=B(b),A=u(y),w=d(u(A),2);{var E=G=>{var V=df();h(G,V)};N(w,G=>{a(r)&&G(E)})}var $=d(w,2),T=u($);{var I=G=>{var V=vf(),X=B(V),te=d(X);{var D=z=>{var ee=ff(),Se=u(ee);ga(Se,{});var O=d(Se);L(()=>R(O,` ${a(r).comment??""}`)),h(z,ee)};N(te,z=>{a(r).comment&&z(D)})}L(z=>R(X,`${z??""} `),[()=>Es(a(r).totalOverride.q,a(r).totalOverride.u)]),h(G,V)},C=G=>{var V=lt();L(()=>R(V,a(n))),h(G,V)};N(T,G=>{a(r)?G(I):G(C,!1)})}var ae=d(y,2);ae.__click=[hf,s],h(P,b)},g=P=>{var b=bf(),y=B(b),A=u(y),w=u(A);ld(w,{class:"h-4 w-4 opacity-50"});var E=d(w,2),$=d(A,2),T=u($);T.value=T.__value="";var I=d(T);I.value=I.__value="kg";var C=d(I);C.value=C.__value="gr.";var ae=d(C);ae.value=ae.__value="l.";var G=d(ae);G.value=G.__value="ml";var V=d(G);V.value=V.__value="unité";var X=d(V);X.value=X.__value="bottes";var te=d(y,2),D=u(te),z=d(u(D),2),ee=d(z,2);{var Se=q=>{var F=_f();h(q,F)};N(ee,q=>{a(l).length>=250&&q(Se)})}var O=d(te,2),re=u(O);re.__click=[uf,t,s];var ge=u(re);{var Ne=q=>{var F=mf();h(q,F)},Te=q=>{var F=lt();L(()=>R(F,`Réinitialiser le total calculé (${a(n)??""}).`)),h(q,F)};N(ge,q=>{t.modalState.loading?q(Ne):q(Te,!1)})}var Re=d(re,2);Re.__click=[cf,t,o,i,l,s];var Qe=u(Re);{var he=q=>{var F=gf();h(q,F)},be=q=>{var F=lt("Appliquer");h(q,F)};N(Qe,q=>{t.modalState.loading?q(he):q(be,!1)})}L(()=>{re.disabled=t.modalState.loading,Re.disabled=t.modalState.loading||!a(c)}),Ie(E,()=>a(o),q=>x(o,q)),Nr($,()=>a(i),q=>x(i,q)),Ie(z,()=>a(l),q=>x(l,q)),h(P,b)};N(p,P=>{a(s)?P(g,!1):P(_)})}L(()=>ye(v,1,`card border-base-300 border ${a(s)?"bg-base-200":"bg-base-100"}`)),h(e,f),Z()}it(["click"]);var Sf=S('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),xf=S('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Pf=S('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Ef=S('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function $f(e,t){Y(t,!0);const r=W(()=>t.modalState.recipes);var n=Ef(),s=B(n);wf(s,{get modalState(){return t.modalState}});var o=d(s,2),i=u(o),l=u(i);ma(l,{class:"h-5 w-5"});var c=d(i,2);{var f=m=>{var p=Sf(),_=u(p);Un(_,{class:"mx-auto mb-2 h-12 w-12"}),h(m,p)},v=m=>{var p=Pf(),_=u(p),g=d(u(_));st(g,21,()=>a(r),P=>P.r,(P,b)=>{var y=xf(),A=u(y),w=u(A),E=d(A),$=u(E),T=d(E),I=u(T);L(C=>{R(w,`${a(b).r??""} (${(a(b).a||"-")??""} c.)`),R($,`${(a(b).q||a(b).qEq)??""} ${(a(b).u||a(b).uEq)??""}`),R(I,C)},[()=>$s(a(b).date)]),h(P,y)}),h(m,p)};N(c,m=>{a(r).length===0?m(f):m(v,!1)})}h(e,n),Z()}function kf(e,t,r){a(t).saveAllChanges().then(()=>{r.onClose()})}var Af=S('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Tf=S('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Nf=(e,t)=>t("recettes"),If=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Cf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Df=(e,t)=>t("magasins"),Mf=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Rf=(e,t)=>t("volontaires"),Of=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),qf=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Bf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),jf=(e,t)=>t("stock"),Lf=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),zf=S('<span class="badge badge-sm badge-secondary ml-1">1</span>'),Vf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Uf=(e,t)=>t("achats"),Wf=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Gf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Qf=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Hf=S('<span class="loading loading-spinner loading-sm"></span>'),Kf=S('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),Jf=S('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Yf(e,t){Y(t,!0);let r=qe(t,"initialTab",3,"recettes"),n=W(()=>wd(t.productId)),s=U(Ce(r()));function o(b){x(s,b,!0)}var i=Jf(),l=u(i),c=u(l),f=u(c);{var v=b=>{var y=Af(),A=B(y),w=u(A),E=d(A,2),$=u(E),T=u($),I=d($,2),C=d(u(I));L(()=>{R(w,a(n).product?.productName),R(T,a(n).product?.productType),R(C,` ${a(n).product?.displayTotalNeeded??""}`)}),h(b,y)},m=b=>{var y=Tf();h(b,y)};N(f,b=>{a(n)&&a(n).product?b(v):b(m,!1)})}var p=d(f,2);p.__click=function(...b){t.onClose?.apply(this,b)};var _=u(p);ft(_,{class:"h-4 w-4"});var g=d(c,2);{var P=b=>{var y=Kf(),A=B(y),w=u(A);w.__click=[Nf,o];var E=u(w);ma(E,{class:"mr-1 h-5 w-5"});var $=d(E,2);{var T=H=>{var ve=If(),je=u(ve);L(()=>R(je,a(n).product?.nbRecipes)),h(H,ve)},I=H=>{var ve=Cf();h(H,ve)};N($,H=>{a(n).product?.nbRecipes&&a(n).product?.nbRecipes>0?H(T):H(I,!1)})}var C=d(w,2);C.__click=[Df,o];var ae=u(C);pr(ae,{class:"mr-1 h-5 w-5"});var G=d(ae,2);{var V=H=>{var ve=Mf();h(H,ve)};N(G,H=>{a(n).hasChanges?.store&&H(V)})}var X=d(C,2);X.__click=[Rf,o];var te=u(X);na(te,{class:"mr-1 h-5 w-5"});var D=d(te,2);{var z=H=>{var ve=Of();h(H,ve)},ee=H=>{var ve=J(),je=B(ve);{var ut=De=>{var Ke=qf(),Ot=u(Ke);L(()=>R(Ot,a(n).product?.who.length)),h(De,Ke)},fe=De=>{var Ke=Bf();h(De,Ke)};N(je,De=>{a(n).product?.who&&a(n).product?.who.length>0?De(ut):De(fe,!1)},!0)}h(H,ve)};N(D,H=>{a(n).hasChanges?.who?H(z):H(ee,!1)})}var Se=d(X,2);Se.__click=[jf,o];var O=u(Se);Fs(O,{class:"mr-1 h-5 w-5"});var re=d(O,2);{var ge=H=>{var ve=Lf();h(H,ve)},Ne=H=>{var ve=J(),je=B(ve);{var ut=De=>{var Ke=zf();h(De,Ke)},fe=De=>{var Ke=Vf();h(De,Ke)};N(je,De=>{a(n).stockParsed?De(ut):De(fe,!1)},!0)}h(H,ve)};N(re,H=>{a(n).hasChanges?.stock?H(ge):H(Ne,!1)})}var Te=d(Se,2);Te.__click=[Uf,o];var Re=u(Te);hr(Re,{class:"mr-1 h-5 w-5"});var Qe=d(Re,2);{var he=H=>{var ve=Wf(),je=u(ve);L(()=>R(je,a(n).purchasesList.length)),h(H,ve)},be=H=>{var ve=Gf();h(H,ve)};N(Qe,H=>{a(n).purchasesList.length>0?H(he):H(be,!1)})}var q=d(A,2),F=u(q);{var $e=H=>{var ve=Qf(),je=u(ve);ft(je,{class:"h-4 w-4"});var ut=d(je,2),fe=u(ut);L(()=>R(fe,`erreur : ${a(n).error??""}`)),h(H,ve)};N(F,H=>{a(n).error&&H($e)})}var _e=d(F,2),xe=u(_e);yc(xe,()=>a(s),H=>{var ve=J(),je=B(ve);{var ut=De=>{$f(De,{get modalState(){return a(n)}})},fe=De=>{var Ke=J(),Ot=B(Ke);{var nr=K=>{Od(K,{get modalState(){return a(n)}})},br=K=>{var me=J(),Ae=B(me);{var Je=Ze=>{Wd(Ze,{get modalState(){return a(n)}})},Le=Ze=>{var mt=J(),xt=B(mt);{var Pt=We=>{Fd(We,{get modalState(){return a(n)}})},tt=We=>{var qt=J(),Gt=B(qt);{var sr=Bt=>{lf(Bt,{get modalState(){return a(n)}})};N(Gt,Bt=>{a(s)==="magasins"&&Bt(sr)},!0)}h(We,qt)};N(xt,We=>{a(s)==="volontaires"?We(Pt):We(tt,!1)},!0)}h(Ze,mt)};N(Ae,Ze=>{a(s)==="stock"?Ze(Je):Ze(Le,!1)},!0)}h(K,me)};N(Ot,K=>{a(s)==="achats"?K(nr):K(br,!1)},!0)}h(De,Ke)};N(je,De=>{a(s)==="recettes"?De(ut):De(fe,!1)})}h(H,ve)});var Ue=d(q,2),He=u(Ue);He.__click=function(...H){t.onClose?.apply(this,H)};var ie=u(He),ke=d(He,2);ke.__click=[kf,n,t];var ht=u(ke);{var St=H=>{var ve=Hf();h(H,ve)},se=H=>{var ve=lt("Tout enregistrer");h(H,ve)};N(ht,H=>{a(n).loading?H(St):H(se,!1)})}L(()=>{ye(w,1,`tab ${a(s)==="recettes"?"tab-active":""}`),ye(C,1,`tab ${a(s)==="magasins"?"tab-active":""}`),ye(X,1,`tab ${a(s)==="volontaires"?"tab-active":""}`),ye(Se,1,`tab ${a(s)==="stock"?"tab-active":""}`),ye(Te,1,`tab ${a(s)==="achats"?"tab-active":""}`),R(ie,a(n)?.hasAnyChanges?"Annuler":"Fermer"),ke.disabled=a(n).loading||!a(n).hasAnyChanges}),h(b,y)};N(g,b=>{a(n)&&b(P)})}h(e,i),Z()}it(["click"]);async function Zf(e,t,r,n,s,o,i,l){if(!(!a(t)||a(r))){x(n,null),x(s,null);try{const c=a(o).map(m=>m.id),f=i.products.filter(m=>c.includes(m.$id));M.setSyncStatus(c,!0),i.onClose();const v=await Ri(c,f,a(l),"replace");if(x(s,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),i.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";x(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),M.clearSyncStatus()}finally{x(r,!1)}}}function oo(e,t,r){a(t)||r.onClose()}var Xf=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Ff=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},ev=(e,t)=>x(t,"empty"),tv=(e,t)=>x(t,"all"),rv=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),nv=S("<!> ",1),sv=S('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function av(e,t){Y(t,!0);let r=U(!1),n=U(null),s=U(null),o=U(Ce([])),i=U(""),l=U("empty"),c=U(Ce({}));zr(()=>{const ie={};t.products.forEach(ke=>{t.productIds.includes(ke.$id)&&(a(l)==="empty"?ie[ke.$id]=!ke.who||ke.who.length===0:ie[ke.$id]=!0)}),x(c,ie,!0)});const f=W(()=>t.products.map(ie=>({id:ie.$id,label:ie.productName,title:ie.productName,selected:a(c)[ie.$id]}))),v=W(()=>a(f).filter(ie=>ie.selected)),m=W(()=>{const ie=new Set([...M.uniqueWho,...a(o)]);return Array.from(ie).map(ke=>({id:ke,label:ke,selected:a(o).includes(ke)}))}),p=W(()=>`Gérer les volontaires (${a(v).length} produits sélectionnés)`),_=W(()=>a(v).length===0?!1:a(o).length>0);function g(ie){const ke=ie.trim();ke&&!a(o).includes(ke)&&x(o,[...a(o),ke],!0)}function P(ie){x(o,a(o).filter(ke=>ke!==ie),!0)}function b(ie){a(o).includes(ie)?P(ie):g(ie)}function y(){a(i).trim()&&(g(a(i)),x(i,""))}function A(ie){a(c)[ie]=!a(c)[ie]}var w=sv(),E=u(w),$=u(E),T=u($),I=u(T),C=d(T,2);C.__click=[oo,r,t];var ae=u(C);ft(ae,{class:"h-4 w-4"});var G=d($,2),V=u(G);{var X=ie=>{var ke=Xf(),ht=u(ke);Ps(ht,{class:"h-4 w-4"});var St=d(ht,2),se=u(St);L(()=>R(se,a(n))),h(ie,ke)};N(V,ie=>{a(n)&&ie(X)})}var te=d(V,2),D=u(te),z=u(D),ee=u(z),Se=u(ee);Wn(Se,{class:"h-4 w-4 opacity-50"});var O=d(Se,2);O.__keydown=[Ff,y];var re=d(ee,2);re.__click=y;var ge=u(re);qi(ge,{size:16});var Ne=d(z,2),Te=d(u(Ne),2);zn(Te,{get items(){return a(m)},onToggleItem:b,showIcon:!0});var Re=d(te,2),Qe=d(u(Re),2),he=u(Qe);he.__click=[ev,l];var be=d(he,2);be.__click=[tv,l];var q=d(Qe,2);zn(q,{get items(){return a(f)},onToggleItem:A,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var F=d(G,2),$e=u(F);$e.__click=[oo,r,t];var _e=d($e,2);_e.__click=[Zf,_,r,n,s,v,t,o];var xe=u(_e);{var Ue=ie=>{var ke=rv();h(ie,ke)},He=ie=>{var ke=nv(),ht=B(ke);dn(ht,{class:"h-4 w-4"});var St=d(ht);L(()=>R(St,` Appliquer à ${a(v).length??""} produit(s)`)),h(ie,ke)};N(xe,ie=>{a(r)?ie(Ue):ie(He,!1)})}L(ie=>{R(I,a(p)),C.disabled=a(r),O.disabled=a(r),re.disabled=ie,ye(he,1,`tab ${a(l)==="empty"?"tab-active":""}`),ye(be,1,`tab ${a(l)==="all"?"tab-active":""}`),$e.disabled=a(r),_e.disabled=a(r)||!a(_)},[()=>a(r)||!a(i).trim()]),Ie(O,()=>a(i),ie=>x(i,ie)),h(e,w),Z()}it(["click","keydown"]);async function ov(e,t,r,n,s,o,i,l,c){if(!(!a(t)||a(r))){x(n,null),x(s,null);try{const f=a(o).map(_=>_.id),v=i.products.filter(_=>f.includes(_.$id));M.setSyncStatus(f,!0),i.onClose();const m={storeName:a(l).trim(),storeComment:a(c).trim()},p=await Mi(f,v,m);if(x(s,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(f){const v=f instanceof Error?f.message:"Erreur inconnue";x(n,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),M.clearSyncStatus()}finally{x(r,!1)}}}function io(e,t,r){a(t)||r.onClose()}var iv=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),lv=(e,t)=>x(t,"empty"),cv=(e,t)=>x(t,"all"),uv=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),dv=S("<!> ",1),fv=S('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function vv(e,t){Y(t,!0);let r=U(!1),n=U(null),s=U(null),o=U(Ce(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=U(Ce(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=U(Ce({})),c=U("empty");zr(()=>{const q={};t.products.forEach(F=>{t.productIds.includes(F.$id)&&(a(c)==="empty"?q[F.$id]=!F.storeInfo||!F.storeInfo.storeName:q[F.$id]=!0)}),x(l,q,!0)});const f=W(()=>t.products.map(q=>({id:q.$id,label:q.productName,title:q.productName,selected:a(l)[q.$id]}))),v=W(()=>a(f).filter(q=>q.selected)),m=W(()=>`Attribuer un magasin (${a(v).length} produits sélectionnés)`),p=W(()=>a(v).length===0?!1:a(o).trim().length>0);function _(q){a(l)[q]=!a(l)[q]}var g=fv(),P=u(g),b=u(P),y=u(b),A=u(y),w=d(y,2);w.__click=[io,r,t];var E=u(w);ft(E,{class:"h-4 w-4"});var $=d(b,2),T=u($);{var I=q=>{var F=iv(),$e=u(F);Ps($e,{class:"h-4 w-4"});var _e=d($e,2),xe=u(_e);L(()=>R(xe,a(n))),h(q,F)};N(T,q=>{a(n)&&q(I)})}var C=d(T,2),ae=u(C),G=u(ae),V=u(G);pr(V,{class:"h-4 w-4 opacity-50"});var X=d(V,2),te=d(G,2);{let q=W(()=>M.uniqueStores.map(F=>({id:F,label:F,disabled:F===a(o)})));Bi(te,{get suggestions(){return a(q)},onSuggestionClick:F=>{x(o,F.label,!0)},title:"Suggestions de magasins :"})}var D=d(ae,2),z=u(D),ee=d(C,2),Se=d(u(ee),2),O=u(Se);O.__click=[lv,c];var re=d(O,2);re.__click=[cv,c];var ge=d(Se,2);zn(ge,{get items(){return a(f)},onToggleItem:_,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Ne=d($,2),Te=u(Ne);Te.__click=[io,r,t];var Re=d(Te,2);Re.__click=[ov,p,r,n,s,v,t,o,i];var Qe=u(Re);{var he=q=>{var F=uv();h(q,F)},be=q=>{var F=dv(),$e=B(F);dn($e,{class:"h-4 w-4"});var _e=d($e);L(()=>R(_e,` Appliquer à ${a(v).length??""} produit(s)`)),h(q,F)};N(Qe,q=>{a(r)?q(he):q(be,!1)})}L(()=>{R(A,a(m)),w.disabled=a(r),X.disabled=a(r),z.disabled=a(r),ye(O,1,`tab ${a(c)==="empty"?"tab-active":""}`),ye(re,1,`tab ${a(c)==="all"?"tab-active":""}`),Te.disabled=a(r),Re.disabled=a(r)||!a(p)}),Ie(X,()=>a(o),q=>x(o,q)),Ie(z,()=>a(i),q=>x(i,q)),h(e,g),Z()}it(["click"]);function hv(e,t){const r=e.reduce((s,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return s+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function pv(e,t){const r=e.filter(i=>!i.isSynced).map(i=>({productId:i.productId,productData:i.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(i){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",i)}const s=e.flatMap(i=>i.missingQuantities.map(l=>({productId:i.productId,quantity:l.q,unit:l.u,status:"delivered",notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:null,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:s},invoiceData:t}}async function _v(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=hv(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const s=100,o=[];if(n<=s)o.push(t);else{let p=[],_=0;for(const g of t){const P=(g.isSynced?0:1)+g.missingQuantities.length;_+P>s?(p.length>0&&o.push(p),p=[g],_=P):(p.push(g),_+=P)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<o.length;p++){const _=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${_.length} produits)`);try{const g=await pv(_,r),P=await mv(g);if(i.push(P),P.success)l+=P.productsCreated,c+=P.purchasesCreated,f+=P.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${P.error}`);break}}catch(g){const P=g instanceof Error?g.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,g),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:P,timestamp:new Date().toISOString()});break}}const v=i.every(p=>p.success),m=i.some(p=>!p.success);return{success:v,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:m?"Un ou plusieurs lots ont échoué":void 0}}async function mv(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const s=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const o=JSON.parse(s.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}function gv(e,t){x(t,!a(t))}var bv=S('<span class="text-base-content font-semibold"> </span>'),yv=S('<div class="text-base-content/80 flex-1"> </div>'),wv=S('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Sv=S('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),xv=S('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Pv(e,t){let r=qe(t,"icon",3,td),n=qe(t,"class",3,""),s=qe(t,"initiallyOpen",3,!1),o=r(),i=U(Ce(s())),l=Ce(t.children);var c=xv(),f=u(c);f.__click=[gv,i];var v=u(f),m=u(v);o(m,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(m,2);{var _=E=>{var $=bv(),T=u($);L(()=>R(T,t.title)),h(E,$)};N(p,E=>{t.title&&E(_)})}var g=d(v,2);{var P=E=>{var $=yv(),T=u($);L(()=>R(T,t.contentVisible)),h(E,$)};N(g,E=>{t.contentVisible&&E(P)})}var b=d(g,2);{var y=E=>{var $=wv(),T=u($),I=u(T);{var C=V=>{var X=lt("en savoir plus");h(V,X)},ae=V=>{var X=lt("masquer");h(V,X)};N(I,V=>{a(i)?V(ae,!1):V(C)})}var G=d(T,2);{let V=W(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${a(i)?"rotate-180":""}`);Ku(G,{get class(){return a(V)}})}h(E,$)};N(b,E=>{l&&E(y)})}var A=d(f,2);{var w=E=>{var $=Sv(),T=u($),I=u(T);oe(I,()=>t.children??ne),L(()=>ye($,1,`overflow-hidden transition-all duration-200 ${a(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h(E,$)};N(A,E=>{l&&E(w)})}L(()=>{ye(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),ei(c,t.style),ye(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Rr(f,"aria-expanded",a(i))}),h(e,c)}it(["click"]);async function Ev(e,t,r,n,s,o,i,l){if(!(!a(t)||a(r))){x(r,!0),x(n,null),x(s,null);try{const c=`FACTURE_${Date.now()}`,f=a(o).map(_=>_.$id);M.setSyncStatus(f,!0);const v=[];for(const _ of a(o))v.push({productId:_.$id,isSynced:_.isSynced,productData:_,missingQuantities:_.missingQuantityArray||[]});const m={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${a(o).length} produits`,who:i.who.trim()||void 0};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const p=await _v(M.currentMainId,v,m);if(p.success)x(s,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";x(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),M.clearSyncStatus()}finally{x(r,!1)}}}function lo(e,t,r){a(t)||r.onClose()}var $v=S('<div class="alert alert-error"><!> <span> </span></div>'),kv=S('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),Av=S(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),Tv=S("<option> </option>"),Nv=S("<option> </option>"),Iv=S('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),Cv=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Dv=S("<!> ",1),Mv=S(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option>Annulé</option></select> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function Rv(e,t){Y(t,!0);let r=U(!1),n=U(null),s=U(null),o=Ce({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=U(Ce(new Set));zr(()=>{x(i,new Set(t.products.map(K=>K.$id)),!0)});const l=W(()=>t.products.filter(K=>a(i).has(K.$id))),c=W(()=>a(l).length!==0),f=W(()=>`Achat groupé (${a(l).length} produits sélectionnés)`);function v(K){const me=new Set(a(i));me.has(K)?me.delete(K):me.add(K),x(i,me,!0)}const m=W(()=>t.products.map(K=>({id:K.$id,label:K.productName,title:K.productName})));var p=Mv(),_=u(p),g=u(_),P=u(g),b=u(P);hr(b,{class:"h-5 w-5"});var y=d(b),A=d(P,2);A.__click=[lo,r,t];var w=u(A);ft(w,{class:"h-4 w-4"});var E=d(g,2),$=u(E);{var T=K=>{var me=$v(),Ae=u(me);Ps(Ae,{class:"h-4 w-4"});var Je=d(Ae,2),Le=u(Je);L(()=>R(Le,a(n))),h(K,me)};N($,K=>{a(n)&&K(T)})}var I=d($,2);{var C=K=>{var me=kv(),Ae=u(me);dn(Ae,{class:"h-4 w-4"});var Je=d(Ae,2),Le=u(Je),Ze=d(Le);{var mt=tt=>{var We=lt("+ 1 dépense globale");h(tt,We)};N(Ze,tt=>{a(s).expense&&tt(mt)})}var xt=d(Ze,2);{var Pt=tt=>{var We=lt();L(()=>R(We,`(traité en ${a(s).batches??""} lots)`)),h(tt,We)};N(xt,tt=>{a(s).batches&&a(s).batches>1&&tt(Pt)})}L(()=>R(Le,`Achat groupé créé avec succès ! ${a(s).purchases??""} produit(s) validés `)),h(K,me)};N(I,K=>{a(s)&&K(C)})}var ae=d(I,2),G=u(ae);Pv(G,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(K,me)=>{var Ae=Av();h(K,Ae)},$$slots:{default:!0}});var V=d(ae,2),X=d(u(V),2),te=u(X),D=u(te),z=u(D);pr(z,{class:"h-4 w-4 opacity-50"});var ee=d(z,2),Se=d(D,2);st(Se,21,()=>M.uniqueStores,Qs,(K,me)=>{var Ae=Tv(),Je=u(Ae),Le={};L(()=>{R(Je,a(me)),Le!==(Le=a(me))&&(Ae.value=(Ae.__value=a(me))??"")}),h(K,Ae)});var O=d(te,2),re=u(O),ge=u(re);Wn(ge,{class:"h-4 w-4 opacity-50"});var Ne=d(ge,2),Te=d(re,2);st(Te,21,()=>M.uniqueWho,Qs,(K,me)=>{var Ae=Nv(),Je=u(Ae),Le={};L(()=>{R(Je,a(me)),Le!==(Le=a(me))&&(Ae.value=(Ae.__value=a(me))??"")}),h(K,Ae)});var Re=d(O,2),Qe=u(Re),he=u(Qe);ed(he,{class:"h-4 w-4 opacity-50"});var be=d(he,2),q=d(X,2),F=u(q),$e=u(F),_e=u($e);_e.value=_e.__value="delivered";var xe=d(_e);xe.value=xe.__value="ordered";var Ue=d(xe);Ue.value=Ue.__value="requested";var He=d(Ue);He.value=He.__value="cancelled";var ie=d($e,2),ke=d(F,2);{var ht=K=>{var me=Iv(),Ae=u(me),Je=d(u(Ae),2);L(()=>Je.disabled=a(r)),Ie(Je,()=>o.deliveryDate,Le=>o.deliveryDate=Le),h(K,me)};N(ke,K=>{o.status==="ordered"&&K(ht)})}var St=d(q,2),se=u(St),H=u(se);ga(H,{class:"h-4 w-4 opacity-50"});var ve=d(H,2),je=d(V,2),ut=d(u(je),2);zn(ut,{get items(){return a(m)},onToggleItem:v,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var fe=d(je,2),De=u(fe);De.__click=[lo,r,t];var Ke=d(De,2);Ke.__click=[Ev,c,r,n,s,l,o,t];var Ot=u(Ke);{var nr=K=>{var me=Cv();h(K,me)},br=K=>{var me=Dv(),Ae=B(me);hr(Ae,{class:"h-4 w-4"});var Je=d(Ae);L(()=>R(Je,` Valider ${a(l).length??""} produit(s)`)),h(K,me)};N(Ot,K=>{a(r)?K(nr):K(br,!1)})}L(()=>{R(y,` ${a(f)??""}`),A.disabled=a(r),ee.disabled=a(r),Ne.disabled=a(r),be.disabled=a(r),$e.disabled=a(r),ye(ie,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),ve.disabled=a(r),De.disabled=a(r),Ke.disabled=a(r)||!a(c)}),Ie(ee,()=>o.store,K=>o.store=K),Ie(Ne,()=>o.who,K=>o.who=K),Ie(be,()=>o.expense,K=>o.expense=K),Nr($e,()=>o.status,K=>o.status=K),Ie(ve,()=>o.notes,K=>o.notes=K),h(e,p),Z()}it(["click"]);var Ov=()=>M.setGroupBy("none"),qv=()=>M.setGroupBy("store"),Bv=()=>M.setGroupBy("productType"),jv=(e,t)=>M.toggleProductType(t),Lv=S("<button><!> </button>"),zv=()=>M.toggleTemperature("frais"),Vv=()=>M.toggleTemperature("surgele"),Uv=()=>M.clearTypeAndTemperatureFilters(),Wv=S('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Gv=(e,t)=>M.toggleStore(t),Qv=S("<button> </button>"),Hv=S('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Kv=(e,t)=>M.toggleWho(t),Jv=S("<button> </button>"),Yv=S('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Zv=(e,t)=>{M.clearFilters(),x(t,!1)},Xv=S('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Fv(e,t){Y(t,!0);let r=U(!1);const n=W(()=>M.filters),s=W(()=>M.uniqueStores),o=W(()=>M.uniqueWho),i=W(()=>M.uniqueProductTypes);var l=Xv(),c=B(l),f=u(c),v=d(f,2),m=d(u(v),2),p=u(m),_=u(p),g=u(_);ea(g,{class:"w-5 h-5"});var P=d(_,2),b=u(P);ft(b,{class:"w-4 h-4"});var y=d(p,2),A=d(u(y),2),w=u(A);w.__change=[Ov];var E=d(w,2);E.__change=[qv];var $=d(E,2);$.__change=[Bv];var T=d(y,2),I=u(T),C=d(u(I),2);st(C,20,()=>a(i),he=>he,(he,be)=>{const q=W(()=>is(be));var F=Lv();F.__click=[jv,be];var $e=u(F);Tr($e,()=>a(q).icon,(xe,Ue)=>{Ue(xe,{class:"w-3 h-3 mr-1"})});var _e=d($e);L(xe=>{ye(F,1,`btn btn-sm ${xe??""}`),R(_e,` ${a(q).displayName??""}`)},[()=>a(n).selectedProductTypes.length===0?"btn-soft btn-accent":a(n).selectedProductTypes.includes(be)?"btn-accent":"btn-dash btn-accent"]),h(he,F)});var ae=d(C,2),G=u(ae);G.__click=[zv];var V=u(G);ta(V,{class:"w-3 h-3"});var X=d(G,2);X.__click=[Vv];var te=u(X);ra(te,{class:"w-3 h-3"});var D=d(X,2);{var z=he=>{var be=Wv();be.__click=[Uv];var q=u(be);ft(q,{class:"w-3 h-3"}),h(he,be)};N(D,he=>{(a(n).selectedProductTypes.length>0||a(n).selectedTemperatures.length>0)&&he(z)})}var ee=d(T,2);{var Se=he=>{var be=Hv(),q=u(be),F=d(u(q),2);st(F,20,()=>a(s),$e=>$e,($e,_e)=>{var xe=Qv();xe.__click=[Gv,_e];var Ue=u(xe);L(He=>{ye(xe,1,`btn btn-sm ${He??""}`),R(Ue,_e)},[()=>a(n).selectedStores.length===0?"btn-soft btn-accent":a(n).selectedStores.includes(_e)?"btn-accent":"btn-dash btn-accent"]),h($e,xe)}),h(he,be)};N(ee,he=>{a(s).length>0&&he(Se)})}var O=d(ee,2);{var re=he=>{var be=Yv(),q=u(be),F=d(u(q),2);st(F,20,()=>a(o),$e=>$e,($e,_e)=>{var xe=Jv();xe.__click=[Kv,_e];var Ue=u(xe);L(He=>{ye(xe,1,`btn btn-sm ${He??""}`),R(Ue,_e)},[()=>a(n).selectedWho.length===0?"btn-soft btn-accent":a(n).selectedWho.includes(_e)?"btn-accent":"btn-dash btn-accent"]),h($e,xe)}),h(he,be)};N(O,he=>{a(o).length>0&&he(re)})}var ge=d(O,4);ge.__click=[Zv,r];var Ne=u(ge);ft(Ne,{class:"w-4 h-4 mr-2"});var Te=d(c,2),Re=u(Te),Qe=u(Re);ea(Qe,{class:"w-6 h-6"}),L((he,be)=>{rn(w,a(n).groupBy==="none"),rn(E,a(n).groupBy==="store"),rn($,a(n).groupBy==="productType"),ye(G,1,`btn btn-sm ${he??""}`),ye(X,1,`btn btn-sm ${be??""}`)},[()=>a(n).selectedTemperatures.length===0?"btn-soft btn-success":a(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(n).selectedTemperatures.length===0?"btn-soft btn-info":a(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Ic(f,()=>a(r),he=>x(r,he)),h(e,l),Z()}it(["change","click"]);var eh=(e,t,r)=>t(r),th=S("<button><span> </span> <!></button>"),rh=(e,t)=>t(),nh=S('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1"><!> <button class="btn btn-sm btn-primary btn-outline ms-4" type="button"><span>Toutes les dates</span></button></div></fieldset></div></div>');function sh(e,t){Y(t,!0);const n=[...qe(t,"allDates",19,()=>[])()].sort();let s=n[0],o=n[n.length-1],i=U(Ce(s)),l=U(Ce(o));function c(w){a(i)===w&&a(l)===w?p():new Date(w)<new Date(a(i))?x(i,w,!0):(new Date(w)>new Date(a(l))||x(i,w,!0),x(l,w,!0))}function f(w){return new Date(w)>=new Date(a(i))&&new Date(w)<=new Date(a(l))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function v(w){return new Date(w).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function m(w){const $=new Date(w).getUTCHours();return $===12?"sun":$===20?"moon":$===8?"cloud":null}function p(){x(i,s,!0),x(l,o,!0)}zr(()=>{M.setDateRange(a(i),a(l))});var _=nh(),g=u(_),P=u(g),b=d(u(P),2),y=u(b);st(y,18,()=>n,w=>w,(w,E)=>{var $=th();$.__click=[eh,c,E];var T=u($),I=u(T),C=d(T,2);{var ae=V=>{pd(V,{size:16})},G=V=>{var X=J(),te=B(X);{var D=ee=>{id(ee,{size:16})},z=ee=>{var Se=J(),O=B(Se);{var re=ge=>{Xu(ge,{size:16})};N(O,ge=>{m(E)==="cloud"&&ge(re)},!0)}h(ee,Se)};N(te,ee=>{m(E)==="moon"?ee(D):ee(z,!1)},!0)}h(V,X)};N(C,V=>{m(E)==="sun"?V(ae):V(G,!1)})}L((V,X)=>{ye($,1,`btn btn-sm ${V??""}`),R(I,X)},[()=>f(E),()=>v(E)]),h(w,$)});var A=d(y,2);A.__click=[rh,p],h(e,_),Z()}it(["click"]);const An=e=>{var t=oh(),r=u(t);ds(r,{class:"h-4 w-4 text-amber-600"}),h(e,t)};function ah(){}var oh=S('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),ih=()=>M.clearFilters(),lh=e=>M.setSearchQuery(e.currentTarget.value),ch=()=>M.setGroupBy("none"),uh=()=>M.setGroupBy("store"),dh=()=>M.setGroupBy("productType"),fh=(e,t)=>M.toggleProductType(t),vh=S("<button><!> </button>"),hh=()=>M.toggleTemperature("frais"),ph=()=>M.toggleTemperature("surgele"),_h=()=>M.clearTypeAndTemperatureFilters(),mh=S('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),gh=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),bh=(e,t)=>M.toggleStore(t),yh=S("<button><!> </button>"),wh=()=>M.clearStoreFilters(),Sh=S('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),xh=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Ph=(e,t)=>M.toggleWho(t),Eh=S("<button><!> </button>"),$h=()=>M.clearWhoFilters(),kh=S('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Ah=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Th=()=>M.handleSort("productName"),Nh=()=>M.handleSort("store"),Ih=()=>M.handleSort("who"),Ch=()=>M.handleSort("productType"),Dh=S('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Mh=(e,t,r)=>t("store",r().map(n=>n.$id),r()),Rh=(e,t,r)=>t("who",r().map(n=>n.$id),r()),Oh=(e,t,r)=>t(r()),qh=S(`<button class="btn btn-sm btn-success btn-soft" title="Ouvrir le modal d'achat groupé"><!> Achat groupé <!></button>`),Bh=S('<tr class="bg-base-200 sticky top-11 z-10 font-semibold"><td colspan="7" class="py-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!></div> <div class="flex items-center gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> Magasin <!></button> <button class="btn btn-sm btn-info btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> Volontaires <!></button> <!></div></div></td></tr>'),jh=(e,t,r)=>t(a(r).$id,"recettes"),Lh=S('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),zh=S('<div class="text-base-content/60 text-xs"> </div>'),Vh=S('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Uh=S('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Wh=(e,t,r)=>t(a(r).$id,"magasins"),Gh=S('<div class="tooltip tooltip-info"><div class="text-center"> </div></div>'),Qh=S('<div class="text-center"> </div>'),Hh=(e,t,r)=>t(a(r).$id,"volontaires"),Kh=S('<span class="badge badge-soft badge-info badge-sm"> </span>'),Jh=S('<div class="flex flex-wrap justify-center gap-2 pr-8"></div>'),Yh=(e,t,r)=>t(a(r).$id,"recettes"),Zh=S('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Xh=(e,t,r)=>t(a(r).$id,"achats"),Fh=S("<div><!> <span> </span></div>"),ep=S('<span class="text-center">-</span>'),tp=(e,t,r)=>t(a(r)),rp=S('<div class="flex items-center justify-center gap-2"><div class="bg-warning m-auto rounded px-2 py-1"> <button class="btn btn-xs btn-ghost text-base-content/70 btn-circle btn-outline hover:btn-success hover:text-success-content ms-3 transition-all hover:scale-105" title="Déclarer comme acheté"><!></button></div></div>'),np=S('<tr><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><!> <div><div class="font-medium"> </div> <!></div></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-2 text-center text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap justify-center gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),sp=S("<!> <!>",1),ap=S('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),op=S('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><!> <div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!> <!> <!> <!>',1);function ip(e,t){Y(t,!0);const r={Package:Un,MessageCircleQuestionMark:od,ShoppingCart:hr,Clock:Zu,CircleCheck:Ju,CircleX:Yu},n=W(()=>M.displayProducts),s=W(()=>M.stats),o=W(()=>M.uniqueStores),i=W(()=>M.uniqueWho),l=W(()=>M.uniqueProductTypes),c=W(()=>M.filters);let f=U(null),v=U("recettes"),m=U(!1),p=U(!1),_=U(Ce([])),g=U(Ce([])),P=U(!1),b=U(Ce([]));function y(j,Q="recettes"){x(v,Q,!0),x(f,j,!0)}function A(){x(f,null)}function w(j,Q,Ye){x(_,Q,!0),x(g,Ye,!0),x(j==="who"?m:p,!0)}function E(j){(!j||j==="who")&&x(m,!1),(!j||j==="store")&&x(p,!1),x(_,[],!0),x(g,[],!0)}function $(j){console.log(`[ProductsTable] Modification groupée réussie: ${j.updatedCount} produits`)}function T(j){const Q=j.filter(Ye=>Ye.displayMissingQuantity!=="✅ Complet"&&Ye.missingQuantityArray&&Ye.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${j.length} produits reçus → ${Q.length} produits avec quantités manquantes`),x(b,Q,!0),x(P,!0)}function I(){x(P,!1),x(b,[],!0)}function C(){console.log("[ProductsTable] Achat groupé créé avec succès"),I()}async function ae(j){try{if(!M.currentMainId)throw new Error("mainId non disponible");const Q=j.missingQuantityArray||[];if(Q.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let Ye=j.$id;j.isSynced||(console.log(`[ProductsTable] Produit ${j.$id} local, création pour validation rapide...`),Ye=(await ur(j.$id,{},Xe=>M.getEnrichedProductById(Xe))).$id,console.log(`[ProductsTable] Produit sync créé: ${Ye}`)),await Oi(M.currentMainId,Ye,Q,{store:j.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${j.productName}`)}catch(Q){console.error("[ProductsTable] Erreur validation rapide:",Q),alert("Erreur lors de la validation rapide: "+Q.message)}}var G=op(),V=B(G),X=u(V),te=u(X),D=u(te);ro(D,{class:"mr-1 h-4 w-4"});var z=d(D),ee=d(te,2);ee.__click=[ah];var Se=u(ee);ud(Se,{class:"mr-1 h-4 w-4"});var O=d(X,2),re=u(O),ge=u(re),Ne=u(ge),Te=u(Ne);ea(Te,{class:"h-5 w-5"});var Re=d(Ne,2);Re.__click=[ih];var Qe=u(Re);ft(Qe,{class:"h-4 w-4"});var he=d(re,2),be=u(he),q=d(u(be),2),F=u(q);hd(F,{class:"h-4 w-4"});var $e=d(F,2);$e.__input=[lh];var _e=d(be,2),xe=d(u(_e),2),Ue=u(xe);Ue.__change=[ch];var He=d(Ue,2);He.__change=[uh];var ie=d(He,2);ie.__change=[dh];var ke=d(he,2),ht=u(ke);sh(ht,{get allDates(){return M.allDates}});var St=d(ht,2),se=u(St);{var H=j=>{var Q=gh(),Ye=u(Q),Nt=d(u(Ye),2),Xe=u(Nt);st(Xe,16,()=>a(l),rt=>rt,(rt,nt)=>{const Kt=W(()=>is(nt));var Ct=vh();Ct.__click=[fh,nt];var lr=u(Ct);Tr(lr,()=>a(Kt).icon,(cr,Jr)=>{Jr(cr,{class:"mr-1 h-5 w-5"})});var Kr=d(lr);L(cr=>{ye(Ct,1,`btn btn-sm ${cr??""}`),R(Kr,` ${a(Kt).displayName??""}`)},[()=>a(c).selectedProductTypes.length===0?"btn-soft btn-accent":a(c).selectedProductTypes.includes(nt)?"btn-accent":"btn-dash btn-accent"]),h(rt,Ct)});var It=d(Xe,2);It.__click=[hh];var ir=u(It);ta(ir,{class:"h-5 w-5"});var ze=d(It,2);ze.__click=[ph];var Fe=u(ze);ra(Fe,{class:"h-5 w-5"});var Be=d(ze,2);{var pe=rt=>{var nt=mh();nt.__click=[_h];var Kt=u(nt);ft(Kt,{class:"h-3 w-3"}),h(rt,nt)};N(Be,rt=>{(a(c).selectedProductTypes.length>0||a(c).selectedTemperatures.length>0)&&rt(pe)})}L((rt,nt)=>{ye(It,1,`btn btn-sm ms-4 ${rt??""}`),ye(ze,1,`btn btn-sm ${nt??""}`)},[()=>a(c).selectedTemperatures.length===0?"btn-soft btn-success":a(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(c).selectedTemperatures.length===0?"btn-soft btn-info":a(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(j,Q)};N(se,j=>{a(l).length>0&&j(H)})}var ve=d(St,2),je=u(ve);{var ut=j=>{var Q=xh(),Ye=u(Q),Nt=d(u(Ye),2),Xe=u(Nt);st(Xe,16,()=>a(o),ze=>ze,(ze,Fe)=>{var Be=yh();Be.__click=[bh,Fe];var pe=u(Be);pr(pe,{class:"mr-1 h-3 w-3"});var rt=d(pe);L(nt=>{ye(Be,1,`btn btn-xs ${nt??""}`),R(rt,` ${Fe??""}`)},[()=>a(c).selectedStores.length===0?"btn-soft btn-accent":a(c).selectedStores.includes(Fe)?"btn-accent":"btn-dash btn-accent"]),h(ze,Be)});var It=d(Xe,2);{var ir=ze=>{var Fe=Sh();Fe.__click=[wh];var Be=u(Fe);ft(Be,{class:"h-3 w-3"}),h(ze,Fe)};N(It,ze=>{a(c).selectedStores.length>0&&ze(ir)})}h(j,Q)};N(je,j=>{a(o).length>0&&j(ut)})}var fe=d(je,2);{var De=j=>{var Q=Ah(),Ye=u(Q),Nt=d(u(Ye),2),Xe=u(Nt);st(Xe,16,()=>a(i),ze=>ze,(ze,Fe)=>{var Be=Eh();Be.__click=[Ph,Fe];var pe=u(Be);Wn(pe,{class:"mr-1 h-3 w-3"});var rt=d(pe);L(nt=>{ye(Be,1,`btn btn-xs ${nt??""}`),R(rt,` ${Fe??""}`)},[()=>a(c).selectedWho.length===0?" btn-soft btn-info":a(c).selectedWho.includes(Fe)?" btn-info":"btn-dash btn-info"]),h(ze,Be)});var It=d(Xe,2);{var ir=ze=>{var Fe=kh();Fe.__click=[$h];var Be=u(Fe);ft(Be,{class:"h-3 w-3"}),h(ze,Fe)};N(It,ze=>{a(c).selectedWho.length>0&&ze(ir)})}h(j,Q)};N(fe,j=>{a(i).length>0&&j(De)})}var Ke=d(O,2),Ot=u(Ke),nr=u(Ot),br=u(nr),K=u(br);K.__click=[Th];var me=u(K),Ae=u(me);ro(Ae,{class:"h-4 w-4"});var Je=d(Ae,2);{var Le=j=>{var Q=lt();L(()=>R(Q,a(c).sortDirection==="asc"?"↑":"↓")),h(j,Q)};N(Je,j=>{a(c).sortColumn==="productName"&&j(Le)})}var Ze=d(K);Ze.__click=[Nh];var mt=u(Ze),xt=u(mt);pr(xt,{class:"h-4 w-4"});var Pt=d(xt,2);{var tt=j=>{var Q=lt();L(()=>R(Q,a(c).sortDirection==="asc"?"↑":"↓")),h(j,Q)};N(Pt,j=>{a(c).sortColumn==="store"&&j(tt)})}var We=d(Ze);We.__click=[Ih];var qt=u(We),Gt=u(qt);na(Gt,{class:"h-4 w-4"});var sr=d(Gt,2);{var Bt=j=>{var Q=lt();L(()=>R(Q,a(c).sortDirection==="asc"?"↑":"↓")),h(j,Q)};N(sr,j=>{a(c).sortColumn==="who"&&j(Bt)})}var Qt=d(We);Qt.__click=[Ch];var Ur=u(Qt),yr=d(u(Ur));{var wr=j=>{var Q=lt();L(()=>R(Q,a(c).sortDirection==="asc"?"↑":"↓")),h(j,Q)};N(yr,j=>{a(c).sortColumn==="productType"&&j(wr)})}var ar=d(Qt,2),Sr=u(ar),or=u(Sr);hr(or,{class:"h-4 w-4"});var Wr=d(ar),xr=u(Wr),Gr=u(xr);nd(Gr,{class:"h-4 w-4"});var _n=d(nr);st(_n,21,()=>Object.entries(a(n)),([j,Q])=>j,(j,Q)=>{var Ye=W(()=>vo(a(Q),2));let Nt=()=>a(Ye)[0],Xe=()=>a(Ye)[1];var It=sp(),ir=B(It);{var ze=Be=>{const pe=W(()=>is(Nt()));var rt=Bh(),nt=u(rt),Kt=u(nt),Ct=u(Kt),lr=u(Ct);{var Kr=$t=>{var gt=lt();L(()=>R(gt,`🏪 ${Nt()??""} (${Xe().length??""})`)),h($t,gt)},cr=$t=>{var gt=J(),Yr=B(gt);{var wn=Jt=>{var Er=Dh(),Zn=u(Er);Tr(Zn,()=>a(pe).icon,(Cs,xn)=>{xn(Cs,{class:"h-4 w-4"})});var Xn=d(Zn,2),Sn=u(Xn),Fn=d(Xn,2),Is=u(Fn);L(()=>{R(Sn,a(pe).displayName),R(Is,`(${Xe().length??""})`)}),h(Jt,Er)},Zr=Jt=>{var Er=lt();L(()=>R(Er,`📦 ${Nt()??""} (${Xe().length??""})`)),h(Jt,Er)};N(Yr,Jt=>{a(c).groupBy==="productType"?Jt(wn):Jt(Zr,!1)},!0)}h($t,gt)};N(lr,$t=>{a(c).groupBy==="store"?$t(Kr):$t(cr,!1)})}var Jr=d(Ct,2),bn=u(Jr);bn.__click=[Mh,w,Xe];var Hn=u(bn);pr(Hn,{size:16});var Kn=d(Hn,2);ds(Kn,{size:16});var yn=d(bn,2);yn.__click=[Rh,w,Xe];var Jn=u(yn);na(Jn,{size:16});var Ts=d(Jn,2);ds(Ts,{size:16});var Ns=d(yn,2);{var Yn=$t=>{var gt=qh();gt.__click=[Oh,T,Xe];var Yr=u(gt);hr(Yr,{size:16});var wn=d(Yr,2);to(wn,{size:16}),h($t,gt)};N(Ns,$t=>{Xe().some(gt=>gt.displayMissingQuantity!=="✅ Complet")&&$t(Yn)})}h(Be,rt)};N(ir,Be=>{Nt()!==""&&Be(ze)})}var Fe=d(ir,2);st(Fe,17,()=>gd(Xe(),a(c)),Be=>Be.$id,(Be,pe)=>{const rt=W(()=>M.getFormattedTotalNeeded(a(pe).$id)),nt=W(()=>is(a(pe).productType)),Kt=W(()=>bd(a(pe).purchases||[]));var Ct=np(),lr=u(Ct);lr.__click=[jh,y,pe];var Kr=u(lr),cr=u(Kr),Jr=u(cr);{var bn=le=>{var Pe=Lh(),Ve=u(Pe);sd(Ve,{class:"h-4 w-4 animate-spin"}),h(le,Pe)};N(Jr,le=>{a(pe).status==="isSyncing"&&le(bn)})}var Hn=d(Jr,2),Kn=u(Hn),yn=u(Kn),Jn=d(Kn,2);{var Ts=le=>{var Pe=zh(),Ve=u(Pe);L(()=>R(Ve,`Ancien: ${a(pe).previousNames[0]??""}`)),h(le,Pe)};N(Jn,le=>{a(pe).previousNames&&a(pe).previousNames.length>0&&le(Ts)})}var Ns=d(cr,2),Yn=u(Ns);{var $t=le=>{var Pe=Vh(),Ve=u(Pe);ta(Ve,{class:"text-success h-4 w-4"}),h(le,Pe)};N(Yn,le=>{a(pe).pFrais&&le($t)})}var gt=d(Yn,2);{var Yr=le=>{var Pe=Uh(),Ve=u(Pe);ra(Ve,{class:"text-info h-4 w-4"}),h(le,Pe)};N(gt,le=>{a(pe).pSurgel&&le(Yr)})}var wn=d(Kr,2);An(wn);var Zr=d(lr);Zr.__click=[Wh,y,pe];var Jt=u(Zr);{var Er=le=>{var Pe=Gh(),Ve=u(Pe),bt=u(Ve);L(()=>{Rr(Pe,"data-tip",a(pe).storeInfo?.storeComment),R(bt,a(pe).storeInfo?.storeName||"-")}),h(le,Pe)},Zn=le=>{var Pe=Qh(),Ve=u(Pe);L(()=>R(Ve,a(pe).storeInfo?.storeName||"-")),h(le,Pe)};N(Jt,le=>{a(pe).storeInfo?.storeComment?le(Er):le(Zn,!1)})}var Xn=d(Jt,2);An(Xn);var Sn=d(Zr);Sn.__click=[Hh,y,pe];var Fn=u(Sn);{var Is=le=>{var Pe=Jh();st(Pe,20,()=>a(pe).who,Ve=>Ve,(Ve,bt)=>{var jt=Kh(),$r=u(jt);L(()=>R($r,bt)),h(Ve,jt)}),h(le,Pe)};N(Fn,le=>{a(pe).who&&a(pe).who.length>0&&le(Is)})}var Cs=d(Fn,2);An(Cs);var xn=d(Sn),ji=u(xn),ba=u(ji);Tr(ba,()=>a(nt).icon,(le,Pe)=>{Pe(le,{class:"h-3 w-3"})});var Li=d(ba),Ds=d(xn);Ds.__click=[Yh,y,pe];var ya=u(Ds),zi=u(ya),wa=d(ya,2);{var Vi=le=>{var Pe=Zh(),Ve=u(Pe),bt=u(Ve),jt=d(bt);ma(jt,{class:"h-3 w-3"});var $r=d(Ve,2),es=u($r),Pn=d(es);_d(Pn,{class:"h-3 w-3"}),L(()=>{R(bt,`${a(pe)?.nbRecipes??""} `),R(es,`${a(pe)?.totalAssiettes??""} `)}),h(le,Pe)};N(wa,le=>{(a(pe).nbRecipes||a(pe).totalAssiettes)&&le(Vi)})}var Ui=d(wa,2);An(Ui);var Ms=d(Ds);Ms.__click=[Xh,y,pe];var Sa=u(Ms),xa=u(Sa);st(xa,17,()=>a(Kt),le=>le.status,(le,Pe)=>{const Ve=W(()=>r[a(Pe).icon]);var bt=Fh(),jt=u(bt);Tr(jt,()=>a(Ve),(Pn,Zi)=>{Zi(Pn,{class:"h-4 w-4"})});var $r=d(jt,2),es=u($r);L(Pn=>{ye(bt,1,`badge badge-soft flex items-center gap-2 ${a(Pe).badgeClass??""}`),R(es,Pn)},[()=>Es(a(Pe).quantity,a(Pe).unit)]),h(le,bt)});var Wi=d(xa,2);{var Gi=le=>{var Pe=ep();h(le,Pe)};N(Wi,le=>{a(Kt).length===0&&le(Gi)})}var Qi=d(Sa,2);An(Qi);var Hi=d(Ms),Ki=u(Hi);{var Ji=le=>{var Pe=rp(),Ve=u(Pe),bt=u(Ve),jt=d(bt);jt.__click=[tp,ae,pe];var $r=u(jt);dn($r,{size:16}),L(()=>R(bt,`${a(pe).displayMissingQuantity??""} `)),h(le,Pe)},Yi=le=>{to(le,{size:28,strokeWidth:3,class:"text-success m-auto"})};N(Ki,le=>{a(pe).displayMissingQuantity!=="✅ Complet"?le(Ji):le(Yi,!1)})}L(()=>{ye(Ct,1,`hover:bg-base-200/20 transition-colors ${a(pe).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-400 bg-blue-50/30":""}`),R(yn,a(pe).productName),ye(Zr,1,`${a(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),ye(xn,1,Fo(a(c).groupBy==="productType"?"hidden":"")),R(Li,` ${a(nt).displayName??""}`),R(zi,a(rt))}),h(Be,Ct)}),h(j,It)});var Qr=d(Ot,2);{var Et=j=>{var Q=ap();h(j,Q)};N(Qr,j=>{Object.values(a(n)).flat().length===0&&j(Et)})}var Ht=d(V,2);{var mn=j=>{Yf(j,{get productId(){return a(f)},get initialTab(){return a(v)},onClose:A})};N(Ht,j=>{a(f)&&j(mn)})}var Hr=d(Ht,2);{var gn=j=>{av(j,{get productIds(){return a(_)},get products(){return a(g)},onClose:()=>E("who"),onSuccess:$})};N(Hr,j=>{a(m)&&j(gn)})}var Pr=d(Hr,2);{var ks=j=>{vv(j,{get productIds(){return a(_)},get products(){return a(g)},onClose:()=>E("store"),onSuccess:$})};N(Pr,j=>{a(p)&&j(ks)})}var Gn=d(Pr,2);{var As=j=>{Rv(j,{get products(){return a(b)},onClose:I,onSuccess:C})};N(Gn,j=>{a(P)&&j(As)})}var Qn=d(Gn,2);Fv(Qn,{}),L(()=>{R(z,` ${a(s).total??""}`),Ac($e,a(c).searchQuery),rn(Ue,a(c).groupBy==="none"),rn(He,a(c).groupBy==="store"),rn(ie,a(c).groupBy==="productType"),ye(Ze,1,`hover:bg-base-100 cursor-pointer text-center ${a(c).groupBy==="store"?"hidden":""}`),ye(Qt,1,`hover:bg-base-100 cursor-pointer text-center ${a(c).groupBy==="productType"?"hidden":""}`)}),h(e,G),Z()}it(["click","input","change"]);Dl();var lp=S('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function cp(e){var t=lp();h(e,t)}var up=S('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function dp(e,t){var r=up(),n=d(u(r),2),s=d(u(n),2),o=u(s);L(()=>R(o,t.message)),h(e,r)}var fp=S('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function vp(e,t){var r=fp(),n=u(r),s=u(n);Ps(s,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(s,2),i=d(u(o),2),l=u(i);L(()=>R(l,t.message||"Erreur inconnue")),h(e,r)}var hp=S('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),pp=S('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),_p=S('<div class="text-base-content/60"> </div>'),mp=S('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),gp=S('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),bp=S('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),yp=S('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function wp(e,t){Y(t,!0);let r,n=U(null),s=U(!0),o=U(!1);ai(async()=>{r=Lu();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await M.initialize(r)}catch(O){const re=O instanceof Error?O.message:"Erreur lors de l'initialisation";x(n,re,!0),console.error("[App] Erreur initialisation:",O)}finally{x(s,!1)}}),Rc(()=>{M.destroy()});async function i(){if(!(!r||a(o))){x(o,!0);try{await M.forceReload(r)}catch(O){console.error("[App] Erreur lors du rechargement forcé:",O)}finally{x(o,!1)}}}const l=W(()=>a(n)||M.error),c=W(()=>a(s)||M.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=yp(),m=u(v),p=u(m),_=u(p),g=d(u(_),2),P=u(g);{var b=O=>{var re=hp();h(O,re)};N(P,O=>{M.realtimeConnected&&O(b)})}var y=d(P,2);{var A=O=>{var re=pp();h(O,re)};N(y,O=>{M.syncing&&O(A)})}var w=d(y,2);{var E=O=>{var re=_p(),ge=u(re);L(Ne=>R(ge,`Maj: ${Ne??""}`),[()=>new Date(M.lastSync).toLocaleTimeString()]),h(O,re)};N(w,O=>{M.lastSync&&O(E)})}var $=d(w,2);{var T=O=>{var re=mp();let ge;re.__click=i;var Ne=u(re);dd(Ne,{class:"h-4 w-4"}),L(Te=>{ge=ye(re,1,"btn btn-outline btn-sm",null,ge,Te),re.disabled=a(o)||M.loading},[()=>({loading:a(o)||M.loading})]),h(O,re)};N($,O=>{a(n)||O(T)})}var I=d($,2);{var C=O=>{var re=gp(),ge=u(re),Ne=u(ge);ad(Ne,{class:"mr-2 h-4 w-4"}),L(()=>Rr(ge,"href",f)),h(O,re)};N(I,O=>{a(n)&&O(C)})}var ae=d(m,2),G=u(ae);{var V=O=>{vp(O,{get message(){return a(l)}})},X=O=>{var re=J(),ge=B(re);{var Ne=Te=>{dp(Te,{get message(){return a(l)}})};N(ge,Te=>{a(l)&&Te(Ne)},!0)}h(O,re)};N(G,O=>{a(n)?O(V):O(X,!1)})}var te=d(G,2);{var D=O=>{cp(O)};N(te,O=>{a(c)&&O(D)})}var z=d(te,2);{var ee=O=>{ip(O,{})},Se=O=>{var re=J(),ge=B(re);{var Ne=Te=>{var Re=bp();h(Te,Re)};N(ge,Te=>{!M.loading&&!a(n)&&Te(Ne)},!0)}h(O,re)};N(z,O=>{M.enrichedProducts.length>0?O(ee):O(Se,!1)})}h(e,v),Z()}it(["click"]);mc(wp,{target:document.getElementById("app_products")});
