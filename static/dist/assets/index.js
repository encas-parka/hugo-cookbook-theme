(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const $o=!1;var Jn=Array.isArray,Cl=Array.prototype.indexOf,ra=Array.from,Rs=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Ml=Object.getOwnPropertyDescriptors,Dl=Object.prototype,Rl=Array.prototype,ko=Object.getPrototypeOf,Ma=Object.isExtensible;function Fr(e){return typeof e=="function"}const ne=()=>{};function Ol(e){for(var t=0;t<e.length;t++)e[t]()}function No(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function Ao(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Fe=2,na=4,sa=8,wr=16,Kt=32,Sr=64,aa=128,pt=256,Un=512,We=1024,ot=2048,ar=4096,bt=8192,Er=16384,oa=32768,Pr=65536,Da=1<<17,ql=1<<18,Gr=1<<19,Bl=1<<20,Os=1<<21,Xn=1<<22,gr=1<<23,_r=Symbol("$state"),To=Symbol("legacy props"),Ll=Symbol(""),on=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Io(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function jl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function zl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ul(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Vl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Wl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Hl(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ql(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Yl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Fn=1,es=2,Co=4,Zl=8,Jl=16,Xl=1,Fl=2,ec=4,tc=8,rc=16,nc=1,sc=2,je=Symbol(),ac="http://www.w3.org/1999/xhtml",oc="http://www.w3.org/2000/svg",ic="@attach";function lc(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function cc(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let uc=!1;function Mo(e){return e===this.v}function dc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Do(e){return!dc(e,this.v)}let Kr=!1,fc=!1;function vc(){Kr=!0}let Ie=null;function Lr(e){Ie=e}function W(e,t=!1,r){Ie={p:Ie,c:null,e:null,s:e,x:null,l:Kr&&!t?{s:null,u:null,$:[]}:null}}function H(e){var t=Ie,r=t.e;if(r!==null){t.e=null;for(var n of r)Jo(n)}return Ie=t.p,{}}function En(){return!Kr||Ie!==null&&Ie.l===null}let mr=[];function Ro(){var e=mr;mr=[],Ol(e)}function yr(e){if(mr.length===0&&!ln){var t=mr;queueMicrotask(()=>{t===mr&&Ro()})}mr.push(e)}function hc(){for(;mr.length>0;)Ro()}const pc=new WeakMap;function Oo(e){var t=ee;if(t===null)return re.f|=gr,e;if((t.f&oa)===0){if((t.f&aa)===0)throw!t.parent&&e instanceof Error&&qo(e),e;t.b.error(e)}else jr(e,t)}function jr(e,t){for(;t!==null;){if((t.f&aa)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&qo(e),e}function qo(e){const t=pc.get(e);t&&(Rs(e,"message",{value:t.message}),Rs(e,"stack",{value:t.stack}))}const Mn=new Set;let ge=null,Rn=null,qs=new Set,Tt=[],ts=null,Bs=!1,ln=!1;class ft{current=new Map;#e=new Map;#r=new Set;#d=0;#f=null;#o=[];#i=[];#l=[];#n=[];#c=[];#s=[];skipped_effects=new Set;process(t){Tt=[],Rn=null;var r=ft.apply(this);for(const a of t)this.#a(a);if(this.#d===0){this.#h();var n=this.#i,s=this.#l;this.#i=[],this.#l=[],this.#n=[],Rn=this,ge=null,Ra(n),Ra(s),Rn=null,this.#f?.resolve()}else this.#u(this.#i),this.#u(this.#l),this.#u(this.#n);r();for(const a of this.#o)pn(a);this.#o=[]}#a(t){t.f^=We;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Kt|Sr))!==0,a=s&&(n&We)!==0,o=a||(n&bt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=We:(n&na)!==0?this.#l.push(r):(n&We)===0&&((n&Xn)!==0&&r.b?.is_pending()?this.#o.push(r):as(r)&&((r.f&wr)!==0&&this.#n.push(r),pn(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#u(t){for(const r of t)((r.f&ot)!==0?this.#c:this.#s).push(r),Ze(r,We);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){ge=this}deactivate(){ge=null}flush(){if(Tt.length>0){if(this.activate(),Bo(),ge!==null&&ge!==this)return}else this.#d===0&&this.#h();this.deactivate();for(const t of qs)if(qs.delete(t),t(),ge!==null)break}#h(){for(const t of this.#r)t();if(this.#r.clear(),Mn.size>1){this.#e.clear();let t=!0;for(const r of Mn){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;Lo(n)}if(Tt.length>0){ge=r;const n=ft.apply(r);for(const s of Tt)r.#a(s);Tt=[],n()}}ge=null}Mn.delete(this)}increment(){this.#d+=1}decrement(){this.#d-=1;for(const t of this.#c)Ze(t,ot),br(t);for(const t of this.#s)Ze(t,ar),br(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#f??=No()).promise}static ensure(){if(ge===null){const t=ge=new ft;Mn.add(ge),ln||ft.enqueue(()=>{ge===t&&t.flush()})}return ge}static enqueue(t){yr(t)}static apply(t){return ne}}function mc(e){var t=ln;ln=!0;try{for(var r;;){if(hc(),Tt.length===0&&(ge?.flush(),Tt.length===0))return ts=null,r;Bo()}}finally{ln=t}}function Bo(){var e=Or;Bs=!0;try{var t=0;for(La(!0);Tt.length>0;){var r=ft.ensure();if(t++>1e3){var n,s;gc()}r.process(Tt),Ft.clear()}}finally{Bs=!1,La(e),ts=null}}function gc(){try{Wl()}catch(e){jr(e,ts)}}let pr=null;function Ra(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Er|bt))===0&&as(n)&&(pr=[],pn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?ei(n):n.fn=null),pr?.length>0)){Ft.clear();for(const s of pr)pn(s);pr=[]}}pr=null}}function Lo(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&Fe)!==0?Lo(t):(r&(Xn|wr))!==0&&(Ze(t,ot),br(t))}}function br(e){for(var t=ts=e;t.parent!==null;){t=t.parent;var r=t.f;if(Bs&&t===ee&&(r&wr)!==0)return;if((r&(Sr|Kt))!==0){if((r&We)===0)return;t.f^=We}}Tt.push(t)}function jo(e){let t=0,r=nr(0),n;return()=>{Mc()&&(i(r),fa(()=>(t===0&&(n=Qr(()=>e(()=>It(r)))),t+=1,()=>{yr(()=>{t-=1,t===0&&(n?.(),n=void 0,It(r))})})))}}var _c=Pr|Gr|aa;function yc(e,t,r){new bc(e,t,r)}class bc{parent;#e=!1;#r;#d=null;#f;#o;#i;#l=null;#n=null;#c=null;#s=null;#a=0;#u=0;#h=!1;#m=null;#g=()=>{this.#m&&zr(this.#m,this.#a)};#S=jo(()=>(this.#m=nr(this.#a),()=>{this.#m=null}));constructor(t,r,n){this.#r=t,this.#f=r,this.#o=n,this.parent=ee.b,this.#e=!!this.#f.pending,this.#i=ir(()=>{ee.b=this;{try{this.#l=Ve(()=>n(this.#r))}catch(s){this.error(s)}this.#u>0?this.#b():this.#e=!1}},_c)}#t(){try{this.#l=Ve(()=>this.#o(this.#r))}catch(t){this.error(t)}this.#e=!1}#P(){const t=this.#f.pending;t&&(this.#n=Ve(()=>t(this.#r)),ft.enqueue(()=>{this.#l=this.#y(()=>(ft.ensure(),Ve(()=>this.#o(this.#r)))),this.#u>0?this.#b():(er(this.#n,()=>{this.#n=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#f.pending}#y(t){var r=ee,n=re,s=Ie;Dt(this.#i),Xe(this.#i),Lr(this.#i.ctx);try{return t()}catch(a){return Oo(a),null}finally{Dt(r),Xe(n),Lr(s)}}#b(){const t=this.#f.pending;this.#l!==null&&(this.#s=document.createDocumentFragment(),wc(this.#l,this.#s)),this.#n===null&&(this.#n=Ve(()=>t(this.#r)))}#E(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#E(t);return}this.#u+=t,this.#u===0&&(this.#e=!1,this.#n&&er(this.#n,()=>{this.#n=null}),this.#s&&(this.#r.before(this.#s),this.#s=null),yr(()=>{ft.ensure().flush()}))}update_pending_count(t){this.#E(t),this.#a+=t,qs.add(this.#g)}get_effect_pending(){return this.#S(),i(this.#m)}error(t){var r=this.#f.onerror;let n=this.#f.failed;if(this.#h||!r&&!n)throw t;this.#l&&(ze(this.#l),this.#l=null),this.#n&&(ze(this.#n),this.#n=null),this.#c&&(ze(this.#c),this.#c=null);var s=!1,a=!1;const o=()=>{if(s){cc();return}s=!0,a&&Yl(),ft.ensure(),this.#a=0,this.#c!==null&&er(this.#c,()=>{this.#c=null}),this.#e=this.has_pending_snippet(),this.#l=this.#y(()=>(this.#h=!1,Ve(()=>this.#o(this.#r)))),this.#u>0?this.#b():this.#e=!1};var l=re;try{Xe(null),a=!0,r?.(t,o),a=!1}catch(c){jr(c,this.#i&&this.#i.parent)}finally{Xe(l)}n&&yr(()=>{this.#c=this.#y(()=>{this.#h=!0;try{return Ve(()=>{n(this.#r,()=>t,()=>o)})}catch(c){return jr(c,this.#i.parent),null}finally{this.#h=!1}})})}}function wc(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:Pn(r);t.append(r),r=s}}function zo(e,t,r){const n=En()?rs:ia;if(t.length===0){r(e.map(n));return}var s=ge,a=ee,o=Sc();Promise.all(t.map(l=>Ec(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(c){(a.f&Er)===0&&jr(c,a)}s?.deactivate(),Uo()}).catch(l=>{jr(l,a)})}function Sc(){var e=ee,t=re,r=Ie,n=ge;return function(){Dt(e),Xe(t),Lr(r),n?.activate()}}function Uo(){Dt(null),Xe(null),Lr(null)}function rs(e){var t=Fe|ot,r=re!==null&&(re.f&Fe)!==0?re:null;return ee===null||r!==null&&(r.f&pt)!==0?t|=pt:ee.f|=Gr,{ctx:Ie,deps:null,effects:null,equals:Mo,f:t,fn:e,reactions:null,rv:0,v:je,wv:0,parent:r??ee,ac:null}}function Ec(e,t){let r=ee;r===null&&jl();var n=r.b,s=void 0,a=nr(je),o=!re,l=new Map;return Rc(()=>{var c=No();s=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var d=ge,u=n.is_pending();o&&(n.update_pending_count(1),u||(d.increment(),l.get(d)?.reject(on),l.set(d,c)));const h=(p,m=void 0)=>{u||d.activate(),m?m!==on&&(a.f|=gr,zr(a,m)):((a.f&gr)!==0&&(a.f^=gr),zr(a,p)),o&&(n.update_pending_count(-1),u||d.decrement()),Uo()};c.promise.then(h,p=>h(null,p||"unknown"))}),Yo(()=>{for(const c of l.values())c.reject(on)}),new Promise(c=>{function d(u){function h(){u===s?c(a):d(s)}u.then(h,h)}d(s)})}function z(e){const t=rs(e);return ni(t),t}function ia(e){const t=rs(e);return t.equals=Do,t}function Vo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)ze(t[r])}}function Pc(e){for(var t=e.parent;t!==null;){if((t.f&Fe)===0)return t;t=t.parent}return null}function la(e){var t,r=ee;Dt(Pc(e));try{Vo(e),t=ii(e)}finally{Dt(r)}return t}function Wo(e){var t=la(e);if(e.equals(t)||(e.v=t,e.wv=ai()),!xr){var r=(Jt||(e.f&pt)!==0)&&e.deps!==null?ar:We;Ze(e,r)}}const Ft=new Map;function nr(e,t){var r={f:0,v:e,reactions:null,equals:Mo,rv:0,wv:0};return r}function se(e,t){const r=nr(e);return ni(r),r}function xc(e,t=!1,r=!0){const n=nr(e);return t||(n.equals=Do),Kr&&r&&Ie!==null&&Ie.l!==null&&(Ie.l.s??=[]).push(n),n}function k(e,t,r=!1){re!==null&&(!yt||(re.f&Da)!==0)&&En()&&(re.f&(Fe|wr|Xn|Da))!==0&&!Wt?.includes(e)&&Ql();let n=r?vt(t):t;return zr(e,n)}function zr(e,t){if(!e.equals(t)){var r=e.v;xr?Ft.set(e,t):Ft.set(e,r),e.v=t;var n=ft.ensure();n.capture(e,r),(e.f&Fe)!==0&&((e.f&ot)!==0&&la(e),Ze(e,(e.f&pt)===0?We:ar)),e.wv=ai(),Ho(e,ot),En()&&ee!==null&&(ee.f&We)!==0&&(ee.f&(Kt|Sr))===0&&(dt===null?Bc([e]):dt.push(e))}return t}function It(e){k(e,e.v+1)}function Ho(e,t){var r=e.reactions;if(r!==null)for(var n=En(),s=r.length,a=0;a<s;a++){var o=r[a],l=o.f;if(!(!n&&o===ee)){var c=(l&ot)===0;c&&Ze(o,t),(l&Fe)!==0?Ho(o,ar):c&&((l&wr)!==0&&pr!==null&&pr.push(o),br(o))}}}function vt(e){if(typeof e!="object"||e===null||_r in e)return e;const t=ko(e);if(t!==Dl&&t!==Rl)return e;var r=new Map,n=Jn(e),s=se(0),a=Ht,o=l=>{if(Ht===a)return l();var c=re,d=Ht;Xe(null),za(a);var u=l();return Xe(c),za(d),u};return n&&r.set("length",se(e.length)),new Proxy(e,{defineProperty(l,c,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&Gl();var u=r.get(c);return u===void 0?u=o(()=>{var h=se(d.value);return r.set(c,h),h}):k(u,d.value,!0),!0},deleteProperty(l,c){var d=r.get(c);if(d===void 0){if(c in l){const u=o(()=>se(je));r.set(c,u),It(s)}}else k(d,je),It(s);return!0},get(l,c,d){if(c===_r)return e;var u=r.get(c),h=c in l;if(u===void 0&&(!h||Xt(l,c)?.writable)&&(u=o(()=>{var m=vt(h?l[c]:je),g=se(m);return g}),r.set(c,u)),u!==void 0){var p=i(u);return p===je?void 0:p}return Reflect.get(l,c,d)},getOwnPropertyDescriptor(l,c){var d=Reflect.getOwnPropertyDescriptor(l,c);if(d&&"value"in d){var u=r.get(c);u&&(d.value=i(u))}else if(d===void 0){var h=r.get(c),p=h?.v;if(h!==void 0&&p!==je)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return d},has(l,c){if(c===_r)return!0;var d=r.get(c),u=d!==void 0&&d.v!==je||Reflect.has(l,c);if(d!==void 0||ee!==null&&(!u||Xt(l,c)?.writable)){d===void 0&&(d=o(()=>{var p=u?vt(l[c]):je,m=se(p);return m}),r.set(c,d));var h=i(d);if(h===je)return!1}return u},set(l,c,d,u){var h=r.get(c),p=c in l;if(n&&c==="length")for(var m=d;m<h.v;m+=1){var g=r.get(m+"");g!==void 0?k(g,je):m in l&&(g=o(()=>se(je)),r.set(m+"",g))}if(h===void 0)(!p||Xt(l,c)?.writable)&&(h=o(()=>se(void 0)),k(h,vt(d)),r.set(c,h));else{p=h.v!==je;var S=o(()=>vt(d));k(h,S)}var y=Reflect.getOwnPropertyDescriptor(l,c);if(y?.set&&y.set.call(u,d),!p){if(n&&typeof c=="string"){var b=r.get("length"),I=Number(c);Number.isInteger(I)&&I>=b.v&&k(b,I+1)}It(s)}return!0},ownKeys(l){i(s);var c=Reflect.ownKeys(l).filter(h=>{var p=r.get(h);return p===void 0||p.v!==je});for(var[d,u]of r)u.v!==je&&!(d in l)&&c.push(d);return c},setPrototypeOf(){Kl()}})}function Oa(e){try{if(e!==null&&typeof e=="object"&&_r in e)return e[_r]}catch{}return e}function $c(e,t){return Object.is(Oa(e),Oa(t))}var qa,Go,Ko,Qo;function kc(){if(qa===void 0){qa=window,Go=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ko=Xt(t,"firstChild").get,Qo=Xt(t,"nextSibling").get,Ma(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Ma(r)&&(r.__t=void 0)}}function or(e=""){return document.createTextNode(e)}function Ur(e){return Ko.call(e)}function Pn(e){return Qo.call(e)}function f(e,t){return Ur(e)}function U(e,t=!1){{var r=Ur(e);return r instanceof Comment&&r.data===""?Pn(r):r}}function v(e,t=1,r=!1){let n=e;for(;t--;)n=Pn(n);return n}function Nc(e){e.textContent=""}function ca(){return!1}function Ac(e,t){if(t){const r=document.body;e.autofocus=!0,yr(()=>{document.activeElement===r&&e.focus()})}}let Ba=!1;function Tc(){Ba||(Ba=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function ns(e){var t=re,r=ee;Xe(null),Dt(null);try{return e()}finally{Xe(t),Dt(r)}}function ua(e,t,r,n=r){e.addEventListener(t,()=>ns(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),Tc()}function Ic(e){ee===null&&re===null&&Vl(),re!==null&&(re.f&pt)!==0&&ee===null&&Ul(),xr&&zl()}function Cc(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Qt(e,t,r,n=!0){var s=ee;s!==null&&(s.f&bt)!==0&&(e|=bt);var a={ctx:Ie,deps:null,nodes_start:null,nodes_end:null,f:e|ot,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{pn(a),a.f|=oa}catch(c){throw ze(a),c}else t!==null&&br(a);if(n){var o=a;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Gr)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&Cc(o,s),re!==null&&(re.f&Fe)!==0&&(e&Sr)===0)){var l=re;(l.effects??=[]).push(o)}}return a}function Mc(){return re!==null&&!yt}function Yo(e){const t=Qt(sa,null,!1);return Ze(t,We),t.teardown=e,t}function Zo(e){Ic();var t=ee.f,r=!re&&(t&Kt)!==0&&(t&oa)===0;if(r){var n=Ie;(n.e??=[]).push(e)}else return Jo(e)}function Jo(e){return Qt(na|Bl,e,!1)}function Dc(e){ft.ensure();const t=Qt(Sr|Gr,e,!0);return(r={})=>new Promise(n=>{r.outro?er(t,()=>{ze(t),n(void 0)}):(ze(t),n(void 0))})}function da(e){return Qt(na,e,!1)}function Rc(e){return Qt(Xn|Gr,e,!0)}function fa(e,t=0){return Qt(sa|t,e,!0)}function j(e,t=[],r=[]){zo(t,r,n=>{Qt(sa,()=>e(...n.map(i)),!0)})}function ir(e,t=0){var r=Qt(wr|t,e,!0);return r}function Ve(e,t=!0){return Qt(Kt|Gr,e,!0,t)}function Xo(e){var t=e.teardown;if(t!==null){const r=xr,n=re;ja(!0),Xe(null);try{t.call(null)}finally{ja(r),Xe(n)}}}function Fo(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&ns(()=>{s.abort(on)});var n=r.next;(r.f&Sr)!==0?r.parent=null:ze(r,t),r=n}}function Oc(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Kt)===0&&ze(t),t=r}}function ze(e,t=!0){var r=!1;(t||(e.f&ql)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(qc(e.nodes_start,e.nodes_end),r=!0),Fo(e,t&&!r),Vn(e,0),Ze(e,Er);var n=e.transitions;if(n!==null)for(const a of n)a.stop();Xo(e);var s=e.parent;s!==null&&s.first!==null&&ei(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function qc(e,t){for(;e!==null;){var r=e===t?null:Pn(e);e.remove(),e=r}}function ei(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function er(e,t){var r=[];va(e,r,!0),ti(r,()=>{ze(e),t&&t()})}function ti(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function va(e,t,r){if((e.f&bt)===0){if(e.f^=bt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,a=(n.f&Pr)!==0||(n.f&Kt)!==0;va(n,t,a?r:!1),n=s}}}function ss(e){ri(e,!0)}function ri(e,t){if((e.f&bt)!==0){e.f^=bt,(e.f&We)===0&&(Ze(e,ot),br(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&Pr)!==0||(r.f&Kt)!==0;ri(r,s?t:!1),r=n}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in()}}let Or=!1;function La(e){Or=e}let xr=!1;function ja(e){xr=e}let re=null,yt=!1;function Xe(e){re=e}let ee=null;function Dt(e){ee=e}let Wt=null;function ni(e){re!==null&&(Wt===null?Wt=[e]:Wt.push(e))}let Ye=null,st=0,dt=null;function Bc(e){dt=e}let si=1,hn=0,Ht=hn;function za(e){Ht=e}let Jt=!1;function ai(){return++si}function as(e){var t=e.f;if((t&ot)!==0)return!0;if((t&ar)!==0){var r=e.deps,n=(t&pt)!==0;if(r!==null){var s,a,o=(t&Un)!==0,l=n&&ee!==null&&!Jt,c=r.length;if((o||l)&&(ee===null||(ee.f&Er)===0)){var d=e,u=d.parent;for(s=0;s<c;s++)a=r[s],(o||!a?.reactions?.includes(d))&&(a.reactions??=[]).push(d);o&&(d.f^=Un),l&&u!==null&&(u.f&pt)===0&&(d.f^=pt)}for(s=0;s<c;s++)if(a=r[s],as(a)&&Wo(a),a.wv>e.wv)return!0}(!n||ee!==null&&!Jt)&&Ze(e,We)}return!1}function oi(e,t,r=!0){var n=e.reactions;if(n!==null&&!Wt?.includes(e))for(var s=0;s<n.length;s++){var a=n[s];(a.f&Fe)!==0?oi(a,t,!1):t===a&&(r?Ze(a,ot):(a.f&We)!==0&&Ze(a,ar),br(a))}}function ii(e){var t=Ye,r=st,n=dt,s=re,a=Jt,o=Wt,l=Ie,c=yt,d=Ht,u=e.f;Ye=null,st=0,dt=null,Jt=(u&pt)!==0&&(yt||!Or||re===null),re=(u&(Kt|Sr))===0?e:null,Wt=null,Lr(e.ctx),yt=!1,Ht=++hn,e.ac!==null&&(ns(()=>{e.ac.abort(on)}),e.ac=null);try{e.f|=Os;var h=e.fn,p=h(),m=e.deps;if(Ye!==null){var g;if(Vn(e,st),m!==null&&st>0)for(m.length=st+Ye.length,g=0;g<Ye.length;g++)m[st+g]=Ye[g];else e.deps=m=Ye;if(!Jt||(u&Fe)!==0&&e.reactions!==null)for(g=st;g<m.length;g++)(m[g].reactions??=[]).push(e)}else m!==null&&st<m.length&&(Vn(e,st),m.length=st);if(En()&&dt!==null&&!yt&&m!==null&&(e.f&(Fe|ar|ot))===0)for(g=0;g<dt.length;g++)oi(dt[g],e);return s!==null&&s!==e&&(hn++,dt!==null&&(n===null?n=dt:n.push(...dt))),(e.f&gr)!==0&&(e.f^=gr),p}catch(S){return Oo(S)}finally{e.f^=Os,Ye=t,st=r,dt=n,re=s,Jt=a,Wt=o,Lr(l),yt=c,Ht=d}}function Lc(e,t){let r=t.reactions;if(r!==null){var n=Cl.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&Fe)!==0&&(Ye===null||!Ye.includes(t))&&(Ze(t,ar),(t.f&(pt|Un))===0&&(t.f^=Un),Vo(t),Vn(t,0))}function Vn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Lc(e,r[n])}function pn(e){var t=e.f;if((t&Er)===0){Ze(e,We);var r=ee,n=Or;ee=e,Or=!0;try{(t&wr)!==0?Oc(e):Fo(e),Xo(e);var s=ii(e);e.teardown=typeof s=="function"?s:null,e.wv=si;var a;$o&&fc&&(e.f&ot)!==0&&e.deps}finally{Or=n,ee=r}}}async function jc(){await Promise.resolve(),mc()}function i(e){var t=e.f,r=(t&Fe)!==0;if(re!==null&&!yt){var n=ee!==null&&(ee.f&Er)!==0;if(!n&&!Wt?.includes(e)){var s=re.deps;if((re.f&Os)!==0)e.rv<hn&&(e.rv=hn,Ye===null&&s!==null&&s[st]===e?st++:Ye===null?Ye=[e]:(!Jt||!Ye.includes(e))&&Ye.push(e));else{(re.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[re]:a.includes(re)||a.push(re)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&pt)===0&&(o.f^=pt)}if(xr){if(Ft.has(e))return Ft.get(e);if(r){o=e;var c=o.v;return((o.f&We)===0&&o.reactions!==null||li(o))&&(c=la(o)),Ft.set(o,c),c}}else r&&(o=e,as(o)&&Wo(o));if((e.f&gr)!==0)throw e.v;return e.v}function li(e){if(e.v===je)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ft.has(t)||(t.f&Fe)!==0&&li(t))return!0;return!1}function Qr(e){var t=yt;try{return yt=!0,e()}finally{yt=t}}const zc=-7169;function Ze(e,t){e.f=e.f&zc|t}function Uc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Vc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Wc(e){return Vc.includes(e)}const Hc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Gc(e){return e=e.toLowerCase(),Hc[e]??e}const Kc=["touchstart","touchmove"];function Qc(e){return Kc.includes(e)}const ci=new Set,Ls=new Set;function ui(e,t,r,n={}){function s(a){if(n.capture||sn.call(t,a),!a.cancelBubble)return ns(()=>r?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?yr(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Ua(e,t,r,n={}){var s=ui(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function Rt(e){for(var t=0;t<e.length;t++)ci.add(e[t]);for(var r of Ls)r(e)}let Va=null;function sn(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],a=s[0]||e.target;Va=e;var o=0,l=Va===e&&e.__root;if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var d=s.indexOf(t);if(d===-1)return;c<=d&&(o=c)}if(a=s[o]||e.target,a!==t){Rs(e,"currentTarget",{configurable:!0,get(){return a||r}});var u=re,h=ee;Xe(null),Dt(null);try{for(var p,m=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var S=a["__"+n];if(S!=null&&(!a.disabled||e.target===a))if(Jn(S)){var[y,...b]=S;y.apply(a,[e,...b])}else S.call(a,e)}catch(I){p?m.push(I):p=I}if(e.cancelBubble||g===t||g===null)break;a=g}if(p){for(let I of m)queueMicrotask(()=>{throw I});throw p}}finally{e.__root=t,delete e.currentTarget,Xe(u),Dt(h)}}}function di(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Vr(e,t){var r=ee;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function $(e,t){var r=(t&nc)!==0,n=(t&sc)!==0,s,a=!e.startsWith("<!>");return()=>{s===void 0&&(s=di(a?e:"<!>"+e),r||(s=Ur(s)));var o=n||Go?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=Ur(o),c=o.lastChild;Vr(l,c)}else Vr(o,o);return o}}function Yc(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var o=di(s),l=Ur(o);a=Ur(l)}var c=a.cloneNode(!0);return Vr(c,c),c}}function Zc(e,t){return Yc(e,t,"svg")}function at(e=""){{var t=or(e+"");return Vr(t,t),t}}function V(){var e=document.createDocumentFragment(),t=document.createComment(""),r=or();return e.append(t,r),Vr(t,r),e}function _(e,t){e!==null&&e.before(t)}function D(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Jc(e,t){return Xc(e,t)}const Mr=new Map;function Xc(e,{target:t,anchor:r,props:n={},events:s,context:a,intro:o=!0}){kc();var l=new Set,c=h=>{for(var p=0;p<h.length;p++){var m=h[p];if(!l.has(m)){l.add(m);var g=Qc(m);t.addEventListener(m,sn,{passive:g});var S=Mr.get(m);S===void 0?(document.addEventListener(m,sn,{passive:g}),Mr.set(m,1)):Mr.set(m,S+1)}}};c(ra(ci)),Ls.add(c);var d=void 0,u=Dc(()=>{var h=r??t.appendChild(or());return yc(h,{pending:()=>{}},p=>{if(a){W({});var m=Ie;m.c=a}s&&(n.$$events=s),d=e(p,n)||{},a&&H()}),()=>{for(var p of l){t.removeEventListener(p,sn);var m=Mr.get(p);--m===0?(document.removeEventListener(p,sn),Mr.delete(p)):Mr.set(p,m)}Ls.delete(c),h!==r&&h.parentNode?.removeChild(h)}});return Fc.set(d,u),d}let Fc=new WeakMap;function O(e,t,r=!1){var n=e,s=null,a=null,o=je,l=r?Pr:0,c=!1;const d=(m,g=!0)=>{c=!0,p(g,m)};var u=null;function h(){u!==null&&(u.lastChild.remove(),n.before(u),u=null);var m=o?s:a,g=o?a:s;m&&ss(m),g&&er(g,()=>{o?a=null:s=null})}const p=(m,g)=>{if(o!==(o=m)){var S=ca(),y=n;if(S&&(u=document.createDocumentFragment(),u.append(y=or())),o?s??=g&&Ve(()=>g(y)):a??=g&&Ve(()=>g(y)),S){var b=ge,I=o?s:a,T=o?a:s;I&&b.skipped_effects.delete(I),T&&b.skipped_effects.add(T),b.add_callback(h)}else h()}};ir(()=>{c=!1,t(d),c||p(null,null)},l)}function qr(e,t){return t}function eu(e,t,r){for(var n=e.items,s=[],a=t.length,o=0;o<a;o++)va(t[o].e,s,!0);var l=a>0&&s.length===0&&r!==null;if(l){var c=r.parentNode;Nc(c),c.append(r),n.clear(),At(e,t[0].prev,t[a-1].next)}ti(s,()=>{for(var d=0;d<a;d++){var u=t[d];l||(n.delete(u.k),At(e,u.prev,u.next)),ze(u.e,!l)}})}function Re(e,t,r,n,s,a=null){var o=e,l={flags:t,items:new Map,first:null},c=(t&Co)!==0;if(c){var d=e;o=d.appendChild(or())}var u=null,h=!1,p=new Map,m=ia(()=>{var b=r();return Jn(b)?b:b==null?[]:ra(b)}),g,S;function y(){tu(S,g,l,p,o,s,t,n,r),a!==null&&(g.length===0?u?ss(u):u=Ve(()=>a(o)):u!==null&&er(u,()=>{u=null}))}ir(()=>{S??=ee,g=i(m);var b=g.length;if(!(h&&b===0)){h=b===0;var I,T,P,x;if(ca()){var A=new Set,M=ge;for(T=0;T<b;T+=1){P=g[T],x=n(P,T);var E=l.items.get(x)??p.get(x);E?(t&(Fn|es))!==0&&fi(E,P,T,t):(I=vi(null,l,null,null,P,x,T,s,t,r,!0),p.set(x,I)),A.add(x)}for(const[q,C]of l.items)A.has(q)||M.skipped_effects.add(C.e);M.add_callback(y)}else y();i(m)}})}function tu(e,t,r,n,s,a,o,l,c){var d=(o&Zl)!==0,u=(o&(Fn|es))!==0,h=t.length,p=r.items,m=r.first,g=m,S,y=null,b,I=[],T=[],P,x,A,M;if(d)for(M=0;M<h;M+=1)P=t[M],x=l(P,M),A=p.get(x),A!==void 0&&(A.a?.measure(),(b??=new Set).add(A));for(M=0;M<h;M+=1){if(P=t[M],x=l(P,M),A=p.get(x),A===void 0){var E=n.get(x);if(E!==void 0){n.delete(x),p.set(x,E);var q=y?y.next:g;At(r,y,E),At(r,E,q),Es(E,q,s),y=E}else{var C=g?g.e.nodes_start:s;y=vi(C,r,y,y===null?r.first:y.next,P,x,M,a,o,c)}p.set(x,y),I=[],T=[],g=y.next;continue}if(u&&fi(A,P,M,o),(A.e.f&bt)!==0&&(ss(A.e),d&&(A.a?.unfix(),(b??=new Set).delete(A))),A!==g){if(S!==void 0&&S.has(A)){if(I.length<T.length){var Z=T[0],ae;y=Z.prev;var Ce=I[0],xe=I[I.length-1];for(ae=0;ae<I.length;ae+=1)Es(I[ae],Z,s);for(ae=0;ae<T.length;ae+=1)S.delete(T[ae]);At(r,Ce.prev,xe.next),At(r,y,Ce),At(r,xe,Z),g=Z,y=xe,M-=1,I=[],T=[]}else S.delete(A),Es(A,g,s),At(r,A.prev,A.next),At(r,A,y===null?r.first:y.next),At(r,y,A),y=A;continue}for(I=[],T=[];g!==null&&g.k!==x;)(g.e.f&bt)===0&&(S??=new Set).add(g),T.push(g),g=g.next;if(g===null)continue;A=g}I.push(A),y=A,g=A.next}if(g!==null||S!==void 0){for(var Se=S===void 0?[]:ra(S);g!==null;)(g.e.f&bt)===0&&Se.push(g),g=g.next;var be=Se.length;if(be>0){var J=(o&Co)!==0&&h===0?s:null;if(d){for(M=0;M<be;M+=1)Se[M].a?.measure();for(M=0;M<be;M+=1)Se[M].a?.fix()}eu(r,Se,J)}}d&&yr(()=>{if(b!==void 0)for(A of b)A.a?.apply()}),e.first=r.first&&r.first.e,e.last=y&&y.e;for(var N of n.values())ze(N.e);n.clear()}function fi(e,t,r,n){(n&Fn)!==0&&zr(e.v,t),(n&es)!==0?zr(e.i,r):e.i=r}function vi(e,t,r,n,s,a,o,l,c,d,u){var h=(c&Fn)!==0,p=(c&Jl)===0,m=h?p?xc(s,!1,!1):nr(s):s,g=(c&es)===0?o:nr(o),S={i:g,v:m,k:a,a:null,e:null,prev:r,next:n};try{if(e===null){var y=document.createDocumentFragment();y.append(e=or())}return S.e=Ve(()=>l(e,m,g,d),uc),S.e.prev=r&&r.e,S.e.next=n&&n.e,r===null?u||(t.first=S):(r.next=S,r.e.next=S.e),n!==null&&(n.prev=S,n.e.prev=S.e),S}finally{}}function Es(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==null&&a!==n;){var o=Pn(a);s.before(a),a=o}}function At(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function oe(e,t,...r){var n=e,s=ne,a;ir(()=>{s!==(s=t())&&(a&&(ze(a),a=null),a=Ve(()=>s(n,...r)))},Pr)}function On(e,t,r){var n=e,s,a,o=null,l=null;function c(){a&&(er(a),a=null),o&&(o.lastChild.remove(),n.before(o),o=null),a=l,l=null}ir(()=>{if(s!==(s=t())){var d=ca();if(s){var u=n;d&&(o=document.createDocumentFragment(),o.append(u=or()),a&&ge.skipped_effects.add(a)),l=Ve(()=>r(u,s))}d?ge.add_callback(c):c()}},Pr)}function ru(e,t,r,n,s,a){var o,l,c=null,d=e,u;ir(()=>{const h=t()||null;var p=oc;h!==o&&(u&&(h===null?er(u,()=>{u=null,l=null}):h===l?ss(u):ze(u)),h&&h!==l&&(u=Ve(()=>{if(c=document.createElementNS(p,h),Vr(c,c),n){var m=c.appendChild(or());n(c,m)}ee.nodes_end=c,d.before(c)})),o=h,o&&(l=o))},Pr)}function nu(e,t){var r=void 0,n;ir(()=>{r!==(r=t())&&(n&&(ze(n),n=null),r&&(n=Ve(()=>{da(()=>r(e))})))})}function hi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=hi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function su(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=hi(e))&&(n&&(n+=" "),n+=t);return n}function pi(e){return typeof e=="object"?su(e):e??""}const Wa=[...` 	
\r\f \v\uFEFF`];function au(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var a=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+a;(o===0||Wa.includes(n[o-1]))&&(l===n.length||Wa.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Ha(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var a=e[s];a!=null&&a!==""&&(n+=" "+s+": "+a+r)}return n}function Ps(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ou(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,o=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Ps)),s&&c.push(...Object.keys(s).map(Ps));var d=0,u=-1;const S=e.length;for(var h=0;h<S;h++){var p=e[h];if(l?p==="/"&&e[h-1]==="*"&&(l=!1):a?a===p&&(a=!1):p==="/"&&e[h+1]==="*"?l=!0:p==='"'||p==="'"?a=p:p==="("?o++:p===")"&&o--,!l&&a===!1&&o===0){if(p===":"&&u===-1)u=h;else if(p===";"||h===S-1){if(u!==-1){var m=Ps(e.substring(d,u).trim());if(!c.includes(m)){p!==";"&&h++;var g=e.substring(d,h).trim();r+=" "+g+";"}}d=h+1,u=-1}}}}return n&&(r+=Ha(n)),s&&(r+=Ha(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Te(e,t,r,n,s,a){var o=e.__className;if(o!==r||o===void 0){var l=au(r,n,a);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(a&&s!==a)for(var c in a){var d=!!a[c];(s==null||d!==!!s[c])&&e.classList.toggle(c,d)}return a}function xs(e,t={},r,n){for(var s in r){var a=r[s];t[s]!==a&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,n))}}function iu(e,t,r,n){var s=e.__style;if(s!==t){var a=ou(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else n&&(Array.isArray(n)?(xs(e,r?.[0],n[0]),xs(e,r?.[1],n[1],"important")):xs(e,r,n));return n}function Wn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Jn(t))return lc();for(var n of e.options)n.selected=t.includes(cn(n));return}for(n of e.options){var s=cn(n);if($c(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function mi(e){var t=new MutationObserver(()=>{Wn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Yo(()=>{t.disconnect()})}function js(e,t,r=t){var n=!0;ua(e,"change",s=>{var a=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(a),cn);else{var l=e.querySelector(a)??e.querySelector("option:not([disabled])");o=l&&cn(l)}r(o)}),da(()=>{var s=t();if(Wn(e,s,n),n&&s===void 0){var a=e.querySelector(":checked");a!==null&&(s=cn(a),r(s))}e.__value=s,n=!1}),mi(e)}function cn(e){return"__value"in e?e.__value:e.value}const en=Symbol("class"),tn=Symbol("style"),gi=Symbol("is custom element"),_i=Symbol("is html");function ha(e,t){var r=os(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Br(e,t){var r=os(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function lu(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Hn(e,t,r,n){var s=os(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[Ll]=r),r==null?e.removeAttribute(t):typeof r!="string"&&yi(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function cu(e,t,r,n,s=!1,a=!1){var o=os(e),l=o[gi],c=!o[_i],d=t||{},u=e.tagName==="OPTION";for(var h in t)h in r||(r[h]=null);r.class?r.class=pi(r.class):r[en]&&(r.class=null),r[tn]&&(r.style??=null);var p=yi(e);for(const P in r){let x=r[P];if(u&&P==="value"&&x==null){e.value=e.__value="",d[P]=x;continue}if(P==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Te(e,m,x,n,t?.[en],r[en]),d[P]=x,d[en]=r[en];continue}if(P==="style"){iu(e,x,t?.[tn],r[tn]),d[P]=x,d[tn]=r[tn];continue}var g=d[P];if(!(x===g&&!(x===void 0&&e.hasAttribute(P)))){d[P]=x;var S=P[0]+P[1];if(S!=="$$")if(S==="on"){const A={},M="$$"+P;let E=P.slice(2);var y=Wc(E);if(Uc(E)&&(E=E.slice(0,-7),A.capture=!0),!y&&g){if(x!=null)continue;e.removeEventListener(E,d[M],A),d[M]=null}if(x!=null)if(y)e[`__${E}`]=x,Rt([E]);else{let q=function(C){d[P].call(this,C)};var T=q;d[M]=ui(E,e,q,A)}else y&&(e[`__${E}`]=void 0)}else if(P==="style")Hn(e,P,x);else if(P==="autofocus")Ac(e,!!x);else if(!l&&(P==="__value"||P==="value"&&x!=null))e.value=e.__value=x;else if(P==="selected"&&u)lu(e,x);else{var b=P;c||(b=Gc(b));var I=b==="defaultValue"||b==="defaultChecked";if(x==null&&!l&&!I)if(o[P]=null,b==="value"||b==="checked"){let A=e;const M=t===void 0;if(b==="value"){let E=A.defaultValue;A.removeAttribute(b),A.defaultValue=E,A.value=A.__value=M?E:null}else{let E=A.defaultChecked;A.removeAttribute(b),A.defaultChecked=E,A.checked=M?E:!1}}else e.removeAttribute(P);else I||p.includes(b)&&(l||typeof x!="string")?(e[b]=x,b in o&&(o[b]=je)):typeof x!="function"&&Hn(e,b,x)}}}return d}function Ga(e,t,r=[],n=[],s,a=!1,o=!1){zo(r,n,l=>{var c=void 0,d={},u=e.nodeName==="SELECT",h=!1;if(ir(()=>{var m=t(...l.map(i)),g=cu(e,c,m,s,a,o);h&&u&&"value"in m&&Wn(e,m.value);for(let y of Object.getOwnPropertySymbols(d))m[y]||ze(d[y]);for(let y of Object.getOwnPropertySymbols(m)){var S=m[y];y.description===ic&&(!c||S!==c[y])&&(d[y]&&ze(d[y]),d[y]=Ve(()=>nu(e,()=>S))),g[y]=S}c=g}),u){var p=e;da(()=>{Wn(p,c.value,!0),mi(p)})}h=!0})}function os(e){return e.__attributes??={[gi]:e.nodeName.includes("-"),[_i]:e.namespaceURI===ac}}var Ka=new Map;function yi(e){var t=e.getAttribute("is")||e.nodeName,r=Ka.get(t);if(r)return r;Ka.set(t,r=[]);for(var n,s=e,a=Element.prototype;a!==s;){n=Ml(s);for(var o in n)n[o].set&&r.push(o);s=ko(s)}return r}function Qe(e,t,r=t){var n=new WeakSet;ua(e,"input",async s=>{var a=s?e.defaultValue:e.value;if(a=$s(e)?ks(a):a,r(a),ge!==null&&n.add(ge),await jc(),a!==(a=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=a??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),Qr(t)==null&&e.value&&(r($s(e)?ks(e.value):e.value),ge!==null&&n.add(ge)),fa(()=>{var s=t();if(e===document.activeElement){var a=Rn??ge;if(n.has(a))return}$s(e)&&s===ks(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function uu(e,t,r=t){ua(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),Qr(t)==null&&r(e.checked),fa(()=>{var n=t();e.checked=!!n})}function $s(e){var t=e.type;return t==="number"||t==="range"}function ks(e){return e===""?null:+e}let Dn=!1;function du(e){var t=Dn;try{return Dn=!1,[e(),Dn]}finally{Dn=t}}const fu={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ie(e,t,r){return new Proxy({props:e,exclude:t},fu)}const vu={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];Fr(s)&&(s=s());const a=Xt(s,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=Xt(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===_r||t===To)return!1;for(let r of e.props)if(Fr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Fr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function le(...e){return new Proxy({props:e},vu)}function Dr(e,t,r,n){var s=!Kr||(r&Fl)!==0,a=(r&tc)!==0,o=(r&rc)!==0,l=n,c=!0,d=()=>(c&&(c=!1,l=o?Qr(n):n),l),u;if(a){var h=_r in e||To in e;u=Xt(e,t)?.set??(h&&t in e?T=>e[t]=T:void 0)}var p,m=!1;a?[p,m]=du(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=d(),u&&(s&&Hl(),u(p)));var g;if(s?g=()=>{var T=e[t];return T===void 0?d():(c=!0,T)}:g=()=>{var T=e[t];return T!==void 0&&(l=void 0),T===void 0?l:T},s&&(r&ec)===0)return g;if(u){var S=e.$$legacy;return(function(T,P){return arguments.length>0?((!s||!P||S||m)&&u(P?g():T),T):g()})}var y=!1,b=((r&Xl)!==0?rs:ia)(()=>(y=!1,g()));a&&i(b);var I=ee;return(function(T,P){if(arguments.length>0){const x=P?i(b):s&&a?vt(T):T;return k(b,x),y=!0,l!==void 0&&(l=x),T}return xr&&y||(I.f&Er)!==0?b.v:i(b)})}function bi(e){Ie===null&&Io(),Kr&&Ie.l!==null?pu(Ie).m.push(e):Zo(()=>{const t=Qr(e);if(typeof t=="function")return t})}function hu(e){Ie===null&&Io(),bi(()=>()=>Qr(e))}function pu(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const mu="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(mu);const gu="modulepreload",_u=function(e){return"/"+e},Qa={},Ya=function(t,r,n){let s=Promise.resolve();if(r&&r.length>0){let d=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var o=d;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");s=d(r.map(u=>{if(u=_u(u),u in Qa)return;Qa[u]=!0;const h=u.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":gu,h||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),h)return new Promise((g,S)=>{m.addEventListener("load",g),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&a(c.reason);return t().catch(a)})};class yu extends Map{#e=new Map;#r=se(0);#d=se(0);#f=Ht||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#d.v=super.size}}#o(t){return Ht===this.#f?se(t):nr(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#o(0),r.set(t,n);else return i(this.#r),!1}return i(n),!0}forEach(t,r){this.#i(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#o(0),r.set(t,n);else{i(this.#r);return}}return i(n),super.get(t)}set(t,r){var n=this.#e,s=n.get(t),a=super.get(t),o=super.set(t,r),l=this.#r;if(s===void 0)s=this.#o(0),n.set(t,s),k(this.#d,super.size),It(l);else if(a!==r){It(s);var c=l.reactions===null?null:new Set(l.reactions),d=c===null||!s.reactions?.every(u=>c.has(u));d&&It(l)}return o}delete(t){var r=this.#e,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),k(this.#d,super.size),k(n,-1),It(this.#r)),s}clear(){if(super.size!==0){super.clear();var t=this.#e;k(this.#d,0);for(var r of t.values())k(r,-1);It(this.#r),t.clear()}}#i(){i(this.#r);var t=this.#e;if(this.#d.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#o(0);t.set(r,n)}}for([,n]of this.#e)i(n)}keys(){return i(this.#r),super.keys()}values(){return this.#i(),super.values()}entries(){return this.#i(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return i(this.#d),super.size}}class bu{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class wi{constructor(t){this.generateIdentifier=t,this.kv=new bu}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class wu extends wi{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function Su(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function Eu(e,t){const r=Su(e);if("find"in r)return r.find(t);const n=r;for(let s=0;s<n.length;s++){const a=n[s];if(t(a))return a}}function Wr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function qn(e,t){return e.indexOf(t)!==-1}function Za(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class Pu{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return Eu(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const xu=e=>Object.prototype.toString.call(e).slice(8,-1),Si=e=>typeof e>"u",$u=e=>e===null,mn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,zs=e=>mn(e)&&Object.keys(e).length===0,sr=e=>Array.isArray(e),ku=e=>typeof e=="string",Nu=e=>typeof e=="number"&&!isNaN(e),Au=e=>typeof e=="boolean",Tu=e=>e instanceof RegExp,gn=e=>e instanceof Map,_n=e=>e instanceof Set,Ei=e=>xu(e)==="Symbol",Iu=e=>e instanceof Date&&!isNaN(e.valueOf()),Cu=e=>e instanceof Error,Ja=e=>typeof e=="number"&&isNaN(e),Mu=e=>Au(e)||$u(e)||Si(e)||Nu(e)||ku(e)||Ei(e),Du=e=>typeof e=="bigint",Ru=e=>e===1/0||e===-1/0,Ou=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),qu=e=>e instanceof URL,Pi=e=>e.replace(/\./g,"\\."),Ns=e=>e.map(String).map(Pi).join("."),un=e=>{const t=[];let r="";for(let s=0;s<e.length;s++){let a=e.charAt(s);if(a==="\\"&&e.charAt(s+1)==="."){r+=".",s++;continue}if(a==="."){t.push(r),r="";continue}r+=a}const n=r;return t.push(n),t};function Nt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const xi=[Nt(Si,"undefined",()=>null,()=>{}),Nt(Du,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Nt(Iu,"Date",e=>e.toISOString(),e=>new Date(e)),Nt(Cu,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Nt(Tu,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Nt(_n,"set",e=>[...e.values()],e=>new Set(e)),Nt(gn,"map",e=>[...e.entries()],e=>new Map(e)),Nt(e=>Ja(e)||Ru(e),"number",e=>Ja(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Nt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Nt(qu,"URL",e=>e.toString(),e=>new URL(e))];function is(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const $i=is((e,t)=>Ei(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),Bu=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),ki=is(Ou,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=Bu[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function Ni(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const Ai=is(Ni,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(s=>{n[s]=e[s]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),Ti=is((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Lu=[Ai,$i,Ti,ki],Xa=(e,t)=>{const r=Za(Lu,s=>s.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Za(xi,s=>s.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},Ii={};xi.forEach(e=>{Ii[e.annotation]=e});const ju=(e,t,r)=>{if(sr(t))switch(t[0]){case"symbol":return $i.untransform(e,t,r);case"class":return Ai.untransform(e,t,r);case"custom":return Ti.untransform(e,t,r);case"typed-array":return ki.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=Ii[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Rr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function Ci(e){if(qn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(qn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(qn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const zu=(e,t)=>{Ci(t);for(let r=0;r<t.length;r++){const n=t[r];if(_n(e))e=Rr(e,+n);else if(gn(e)){const s=+n,a=+t[++r]==0?"key":"value",o=Rr(e,s);switch(a){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},Us=(e,t,r)=>{if(Ci(t),t.length===0)return r(e);let n=e;for(let a=0;a<t.length-1;a++){const o=t[a];if(sr(n)){const l=+o;n=n[l]}else if(mn(n))n=n[o];else if(_n(n)){const l=+o;n=Rr(n,l)}else if(gn(n)){if(a===t.length-2)break;const c=+o,d=+t[++a]==0?"key":"value",u=Rr(n,c);switch(d){case"key":n=u;break;case"value":n=n.get(u);break}}}const s=t[t.length-1];if(sr(n)?n[+s]=r(n[+s]):mn(n)&&(n[s]=r(n[s])),_n(n)){const a=Rr(n,+s),o=r(a);a!==o&&(n.delete(a),n.add(o))}if(gn(n)){const a=+t[t.length-2],o=Rr(n,a);switch(+s==0?"key":"value"){case"key":{const c=r(o);n.set(c,n.get(o)),c!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function Vs(e,t,r=[]){if(!e)return;if(!sr(e)){Wr(e,(a,o)=>Vs(a,t,[...r,...un(o)]));return}const[n,s]=e;s&&Wr(s,(a,o)=>{Vs(a,t,[...r,...un(o)])}),t(n,r)}function Uu(e,t,r){return Vs(t,(n,s)=>{e=Us(e,s,a=>ju(a,n,r))}),e}function Vu(e,t){function r(n,s){const a=zu(e,un(s));n.map(un).forEach(o=>{e=Us(e,o,()=>a)})}if(sr(t)){const[n,s]=t;n.forEach(a=>{e=Us(e,un(a),()=>e)}),s&&Wr(s,r)}else Wr(t,r);return e}const Wu=(e,t)=>mn(e)||sr(e)||gn(e)||_n(e)||Ni(e,t);function Hu(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Gu(e,t){const r={};let n;return e.forEach(s=>{if(s.length<=1)return;t||(s=s.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[a,...o]=s;a.length===0?n=o.map(Ns):r[Ns(a)]=o.map(Ns)}),n?zs(r)?[n]:[n,r]:zs(r)?void 0:r}const Mi=(e,t,r,n,s=[],a=[],o=new Map)=>{const l=Mu(e);if(!l){Hu(e,s,t);const m=o.get(e);if(m)return n?{transformedValue:null}:m}if(!Wu(e,r)){const m=Xa(e,r),g=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return l||o.set(e,g),g}if(qn(a,e))return{transformedValue:null};const c=Xa(e,r),d=c?.value??e,u=sr(d)?[]:{},h={};Wr(d,(m,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const S=Mi(m,t,r,n,[...s,g],[...a,e],o);u[g]=S.transformedValue,sr(S.annotations)?h[g]=S.annotations:mn(S.annotations)&&Wr(S.annotations,(y,b)=>{h[Pi(g)+"."+b]=y})});const p=zs(h)?{transformedValue:u,annotations:c?[c.type]:void 0}:{transformedValue:u,annotations:c?[c.type,h]:h};return l||o.set(e,p),p};function Di(e){return Object.prototype.toString.call(e).slice(8,-1)}function Fa(e){return Di(e)==="Array"}function Ku(e){if(Di(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Qu(e,t,r,n,s){const a={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";a==="enumerable"&&(e[t]=r),s&&a==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Ws(e,t={}){if(Fa(e))return e.map(s=>Ws(s,t));if(!Ku(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((s,a)=>{if(Fa(t.props)&&!t.props.includes(a))return s;const o=e[a],l=Ws(o,t);return Qu(s,a,l,e,t.nonenumerable),s},{})}class te{constructor({dedupe:t=!1}={}){this.classRegistry=new wu,this.symbolRegistry=new wi(r=>r.description??""),this.customTransformerRegistry=new Pu,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=Mi(t,r,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const a=Gu(r,this.dedupe);return a&&(s.meta={...s.meta,referentialEqualities:a}),s}deserialize(t){const{json:r,meta:n}=t;let s=Ws(r);return n?.values&&(s=Uu(s,n.values,this)),n?.referentialEqualities&&(s=Vu(s,n.referentialEqualities)),s}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}te.defaultInstance=new te;te.serialize=te.defaultInstance.serialize.bind(te.defaultInstance);te.deserialize=te.defaultInstance.deserialize.bind(te.defaultInstance);te.stringify=te.defaultInstance.stringify.bind(te.defaultInstance);te.parse=te.defaultInstance.parse.bind(te.defaultInstance);te.registerClass=te.defaultInstance.registerClass.bind(te.defaultInstance);te.registerSymbol=te.defaultInstance.registerSymbol.bind(te.defaultInstance);te.registerCustom=te.defaultInstance.registerCustom.bind(te.defaultInstance);te.allowErrorProps=te.defaultInstance.allowErrorProps.bind(te.defaultInstance);te.serialize;te.deserialize;te.stringify;te.parse;te.registerClass;te.registerCustom;te.registerSymbol;te.allowErrorProps;function Yu(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function Zu(e,t){return`${e}_${t}`}const Ju=typeof window<"u"?window:void 0;function Xu(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Fu{#e;#r;constructor(t={}){const{window:r=Ju,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=jo(s=>{const a=Ua(r,"focusin",s),o=Ua(r,"focusout",s);return()=>{a(),o()}}))}get current(){return this.#r?.(),this.#e?Xu(this.#e):null}}new Fu;function ed(e){return typeof e=="function"}function td(e,t){if(ed(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function rd(e,t){let r=se(null);const n=z(()=>td(t,250));function s(...a){if(i(r))i(r).timeout&&clearTimeout(i(r).timeout);else{let o,l;const c=new Promise((d,u)=>{o=d,l=u});k(r,{timeout:null,runner:null,promise:c,resolve:o,reject:l},!0)}return i(r).runner=async()=>{if(!i(r))return;const o=i(r);k(r,null);try{o.resolve(await e.apply(this,a))}catch(l){o.reject(l)}},i(r).timeout=setTimeout(i(r).runner,i(n)),i(r).promise}return s.cancel=async()=>{(!i(r)||i(r).timeout===null)&&(await new Promise(a=>setTimeout(a,0)),!i(r)||i(r).timeout===null)||(clearTimeout(i(r).timeout),i(r).reject("Cancelled"),k(r,null))},s.runScheduledNow=async()=>{(!i(r)||!i(r).timeout)&&(await new Promise(a=>setTimeout(a,0)),!i(r)||!i(r).timeout)||(clearTimeout(i(r).timeout),i(r).timeout=null,await i(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!i(r)?.timeout}}),s}function an(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function nd(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function sd(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>Hs(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const s=[],a=[];r.forEach((l,c)=>{const d=n.get(c)||0,u=l-d;u>0&&(s.push({q:u,u:c}),a.push(Hs(u.toString(),c)))});const o=a.length>0?a.join(" et "):"✅ Complet";return{numeric:s,display:o}}function rn(e){return e?.length?e.map(t=>Hs(t.q.toString(),t.u)).join(" et "):"-"}function Hs(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,s=t==="gr."?"kg":"l.";let o=(Math.round(n*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${s}`}if(!["gr.","ml","kg","l."].includes(t)){let s=(Math.round(r*10)/10).toString();return s.endsWith(",0")&&(s=s.slice(0,-2)),`${s} ${t}`}return`${r} ${t}`}function ad(e){return an(e)}function od(e,t,r){if(!e||Object.keys(e).length===0)return[];const n=typeof t=="string"?new Date(t):t,s=typeof r=="string"?new Date(r):r,a=Object.entries(e).filter(([o])=>{const l=new Date(o);return l>=n&&l<=s}).flatMap(([o,l])=>l.totalConsolidated);return Ri(a)}function Ri(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const s=t.get(n)||0;t.set(n,s+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function id(e,t){return e[t]?.recipes||[]}function ld(e){return e?Object.values(e).flatMap(t=>t.recipes||[]):[]}function cd(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,s=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([a])=>{const o=new Date(a);return o>=n&&o<=s}).reduce((a,[o,l])=>a+(l.totalAssiettes||0),0)}function ud(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function dd(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({quantity:n.q.toString(),unit:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function eo(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Ri(t)}function fd(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class w{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}w.equal=(e,t)=>new w("equal",e,t).toString();w.notEqual=(e,t)=>new w("notEqual",e,t).toString();w.lessThan=(e,t)=>new w("lessThan",e,t).toString();w.lessThanEqual=(e,t)=>new w("lessThanEqual",e,t).toString();w.greaterThan=(e,t)=>new w("greaterThan",e,t).toString();w.greaterThanEqual=(e,t)=>new w("greaterThanEqual",e,t).toString();w.isNull=e=>new w("isNull",e).toString();w.isNotNull=e=>new w("isNotNull",e).toString();w.between=(e,t,r)=>new w("between",e,[t,r]).toString();w.startsWith=(e,t)=>new w("startsWith",e,t).toString();w.endsWith=(e,t)=>new w("endsWith",e,t).toString();w.select=e=>new w("select",void 0,e).toString();w.search=(e,t)=>new w("search",e,t).toString();w.orderDesc=e=>new w("orderDesc",e).toString();w.orderAsc=e=>new w("orderAsc",e).toString();w.orderRandom=()=>new w("orderRandom").toString();w.cursorAfter=e=>new w("cursorAfter",void 0,e).toString();w.cursorBefore=e=>new w("cursorBefore",void 0,e).toString();w.limit=e=>new w("limit",void 0,e).toString();w.offset=e=>new w("offset",void 0,e).toString();w.contains=(e,t)=>new w("contains",e,t).toString();w.notContains=(e,t)=>new w("notContains",e,t).toString();w.notSearch=(e,t)=>new w("notSearch",e,t).toString();w.notBetween=(e,t,r)=>new w("notBetween",e,[t,r]).toString();w.notStartsWith=(e,t)=>new w("notStartsWith",e,t).toString();w.notEndsWith=(e,t)=>new w("notEndsWith",e,t).toString();w.createdBefore=e=>new w("createdBefore",void 0,e).toString();w.createdAfter=e=>new w("createdAfter",void 0,e).toString();w.createdBetween=(e,t)=>new w("createdBetween",void 0,[e,t]).toString();w.updatedBefore=e=>new w("updatedBefore",void 0,e).toString();w.updatedAfter=e=>new w("updatedAfter",void 0,e).toString();w.updatedBetween=(e,t)=>new w("updatedBetween",void 0,[e,t]).toString();w.or=e=>new w("or",void 0,e.map(t=>JSON.parse(t))).toString();w.and=e=>new w("and",void 0,e.map(t=>JSON.parse(t))).toString();w.distanceEqual=(e,t,r,n=!0)=>new w("distanceEqual",e,[[t,r,n]]).toString();w.distanceNotEqual=(e,t,r,n=!0)=>new w("distanceNotEqual",e,[[t,r,n]]).toString();w.distanceGreaterThan=(e,t,r,n=!0)=>new w("distanceGreaterThan",e,[[t,r,n]]).toString();w.distanceLessThan=(e,t,r,n=!0)=>new w("distanceLessThan",e,[[t,r,n]]).toString();w.intersects=(e,t)=>new w("intersects",e,[t]).toString();w.notIntersects=(e,t)=>new w("notIntersects",e,[t]).toString();w.crosses=(e,t)=>new w("crosses",e,[t]).toString();w.notCrosses=(e,t)=>new w("notCrosses",e,[t]).toString();w.overlaps=(e,t)=>new w("overlaps",e,[t]).toString();w.notOverlaps=(e,t)=>new w("notOverlaps",e,[t]).toString();w.touches=(e,t)=>new w("touches",e,[t]).toString();w.notTouches=(e,t)=>new w("notTouches",e,[t]).toString();var Oi,qi;class yn{static custom(t){return t}static unique(t=7){const r=fd(yn,Oi,"m",qi).call(yn);let n="";for(let s=0;s<t;s++){const a=Math.floor(Math.random()*16).toString(16);n+=a}return r+n}}Oi=yn,qi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var to;(function(e){e.Totp="totp"})(to||(to={}));var ro;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(ro||(ro={}));var no;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(no||(no={}));var so;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(so||(so={}));var ao;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(ao||(ao={}));var oo;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(oo||(oo={}));var io;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(io||(io={}));var lo;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(lo||(lo={}));var co;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(co||(co={}));async function Ot(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Gs(e,t={}){const{limit:r=100,orderBy:n="productName",orderDirection:s="asc"}=t;try{const{databases:a,config:o}=await Ot(),l=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[w.equal("mainId",e),w.orderAsc(n==="productName"?"productName":"$updatedAt"),w.limit(r),w.select(["*","purchases.*"])]),d=l.documents;return console.log(`[Appwrite Interactions] ${l.documents.length} produits chargés avec achats`),d}catch(a){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${o}`)}}async function Gn(e){try{const{databases:t,config:r}=await Ot();return(await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.products,[w.equal("$id",e),w.select(["*","purchases.*"])])).documents}catch(t){return console.error("[Appwrite Interactions] Erreur chargement produits:",t),[]}}async function Bi(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide pour sync hybride"),{allProducts:[]};try{const{databases:s,config:a}=await Ot(),[o,l]=await Promise.all([s.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,[w.greaterThan("$updatedAt",r),w.equal("mainId",e),w.select(["*","purchases.*"]),w.limit(n)]),s.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[w.greaterThan("$updatedAt",r),w.equal("mainId",e),w.select(["products.$id"]),w.limit(n)])]);let c=o.documents;const d=new Set(c.map(u=>u.$id));if(l.documents.length>0){const u=l.documents.flatMap(h=>Array.isArray(h.products)?h.products.map(p=>p.$id):[]).filter((h,p,m)=>m.indexOf(h)===p).filter(h=>!d.has(h));if(console.log(`[Appwrite Interactions] Affected products from purchases: ${u.length}`),console.log("[Appwrite Interactions] Affected product IDs:",u),u.length>0)try{console.log("[Appwrite Interactions] Appel loadProductsListByIds avec IDs:",u);const h=await Gn(u);console.log(`[Appwrite Interactions] Reloaded ${h.length} products:`,JSON.stringify(h,null,2)),c=[...c,...h]}catch(h){throw console.error("[Appwrite Interactions] Erreur lors du rechargement des products:",h),h}}return c.length>0&&console.log(`[Appwrite Interactions] Sync total: ${c.length} produits synchronisés`),{allProducts:c}}catch(s){console.error(`[Appwrite Interactions] Erreur sync pour mainId ${e}:`,s);const a=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${a}`)}}async function ls(e,t){try{const{databases:r,config:n}=await Ot();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Li(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await ls(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Ks(e,t){return ls(e,{who:t})}async function Qs(e,t){return ls(e,{stockReel:t})}async function ji(e){try{const{databases:t,config:r}=await Ot(),a=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:a.$id,status:"active"},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,yn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function zi(e,t){try{const{databases:r,config:n}=await Ot(),s=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),a={...t,products:t.products||s.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,a);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,a),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Ui(e){try{const{databases:t,config:r}=await Ot();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Vi(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Ot(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[w.equal("$id",e),w.select(["*","products"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Wi(e,t={}){let r=null;const n=a=>{const{events:o,payload:l}=a;if(!l)return;const c=o.some(m=>m.includes("products.")),d=o.some(m=>m.includes("purchases.")),u=o.some(m=>m.includes(".create")),h=o.some(m=>m.includes(".update")),p=o.some(m=>m.includes(".delete"));if(c){const m=l;u&&t.onProductCreate?t.onProductCreate(m):h&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(d){const m=l;u&&t.onPurchaseCreate?t.onPurchaseCreate(m):h&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:a=>{console.error("[Appwrite Interactions] Erreur realtime:",a),t.onError?.(a)}}))}catch(a){console.error("[Appwrite Interactions] Impossible de configurer realtime:",a),t.onError?.(a)}})(),()=>{r&&(r(),r=null)}}async function pa(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Ot(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Hi(e){try{console.log(`[Appwrite Interactions] Chargement des dates pour mainId: ${e}`);const t=await pa(e);if(!t||!t.allDates)return console.warn(`[Appwrite Interactions] Aucune date trouvée pour mainId: ${e}`),[];let r;if(Array.isArray(t.allDates))r=t.allDates;else if(typeof t.allDates=="string")try{r=te.parse(t.allDates)}catch(n){console.warn(`[Appwrite Interactions] Erreur parsing allDates pour mainId ${e}, traitement comme chaîne simple:`,n),r=[t.allDates]}else console.warn(`[Appwrite Interactions] Format allDates invalide pour mainId ${e}:`,typeof t.allDates),r=[];return console.log(`[Appwrite Interactions] ${r.length} dates chargées pour mainId: ${e}`),r}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement des dates pour mainId ${e}:`,t),[]}}async function Gi(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:s}=await Ot(),a=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await s.createDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(s){throw console.error("[Appwrite Interactions] Erreur création Main document:",s),s}}const uo=Object.freeze(Object.defineProperty({__proto__:null,createMainDocument:Gi,createPurchase:ji,deletePurchase:Ui,loadAllDates:Hi,loadMainEventData:pa,loadProductsListByIds:Gn,loadProductsWithPurchases:Gs,loadPurchasesListByIds:Vi,subscribeToRealtime:Wi,syncProductsAndPurchases:Bi,updateProduct:ls,updateProductStock:Qs,updateProductStore:Li,updateProductWho:Ks,updatePurchase:zi},Symbol.toStringTag,{value:"Module"}));async function vd(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}const fo=1e3,hd=500;class pd{#e=new yu;#r=se(null);#d=se(!1);#f=se(!1);#o=se(null);#i=se(!1);#l=se(!1);#n=se(vt([]));#c=se(null);#s=se(null);#a=se(null);#u=null;#h=null;#m=null;#g=null;#S=se(!1);#t=se(vt({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return i(this.#t)}get currentMainId(){return i(this.#r)}get isInitialized(){return i(this.#d)}get loading(){return i(this.#f)}get error(){return i(this.#o)}get allDates(){return i(this.#n)}get syncing(){return i(this.#i)}get startDate(){return i(this.#s)}get endDate(){return i(this.#a)}setStartDate(t){k(this.#s,t,!0)}setEndDate(t){k(this.#a,t,!0)}setDateRange(t,r){k(this.#s,t,!0),k(this.#a,r,!0)}initializeDateRange(){if((!i(this.#s)||!i(this.#a))&&i(this.#n).length>0){const t=[...i(this.#n)].sort();k(this.#s,t[0],!0),k(this.#a,t[t.length-1],!0)}}get firstDate(){return i(this.#n).length===0?null:[...i(this.#n)].sort()[0]}get lastDate(){return i(this.#n).length===0?null:[...i(this.#n)].sort().pop()}get realtimeConnected(){return i(this.#l)}get lastSync(){return i(this.#c)}get hugoContentChanged(){return i(this.#S)}#P=z(()=>Array.from(this.#e.values()));get enrichedProducts(){return i(this.#P)}set enrichedProducts(t){k(this.#P,t)}#y=z(()=>{const t=new Map;return this.enrichedProducts.forEach(r=>{if(r.totalNeededIsManualOverride&&r.totalNeededConsolidated){const s=an(r.totalNeededConsolidated);s&&s.length>0&&t.set(r.$id,s);return}if(!r.byDateParsed||!i(this.#s)||!i(this.#a))return;const n=od(r.byDateParsed,i(this.#s),i(this.#a));n&&n.length>0&&t.set(r.$id,n)}),t});get totalNeededByDateRange(){return i(this.#y)}set totalNeededByDateRange(t){k(this.#y,t)}#b=z(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const s=rn(r);t.set(n,s)}),t});get formattedTotalNeededByDateRange(){return i(this.#b)}set formattedTotalNeededByDateRange(t){k(this.#b,t)}#E=z(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return i(this.#E)}set stats(t){k(this.#E,t)}#k=z(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return i(this.#k)}set uniqueStores(t){k(this.#k,t)}#N=z(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return i(this.#N)}set uniqueWho(t){k(this.#N,t)}#A=z(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return i(this.#A)}set uniqueProductTypes(t){k(this.#A,t)}#T=z(()=>this.enrichedProducts.filter(t=>this.#B(t)));get filteredProducts(){return i(this.#T)}set filteredProducts(t){k(this.#T,t)}#I=z(()=>{const t=this.filteredProducts;return i(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>i(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return i(this.#I)}set filteredGroupedProducts(t){k(this.#I,t)}#C=z(()=>this.filteredGroupedProducts);get groupedFormattedProducts(){return i(this.#C)}set groupedFormattedProducts(t){k(this.#C,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(i(this.#d)&&i(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),k(this.#r,t,!0),this.#u=Zu("products-enriched",t),k(this.#o,null);try{const r=await vd(t);console.log(`[ProductsStore] Données Hugo chargées: ${r.ingredients.length} ingredients`),await this.#D();const[n,s]=await Promise.all([pa(t),this.#e.size===0?Gs(t,{limit:100}):Promise.resolve([])]),a=this.#L(n,s,r);await this.#j(a,r,n,s),k(this.#n,r.allDates,!0),this.initializeDateRange(),k(this.#d,!0);const o=this.#q();this.#m=Wi(t,o),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw k(this.#o,n,!0),console.error("[ProductsStore]",n,r),r}}async#D(){if(this.#u)try{const t=localStorage.getItem(this.#u);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:s}=te.parse(t);r.forEach(([a,o])=>this.#e.set(a,o)),k(this.#c,n,!0),k(this.#n,s||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${s?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}#_(){if(this.#u)try{const t={lastSync:i(this.#c),products:Array.from(this.#e.entries()),allDates:i(this.#n)};localStorage.setItem(this.#u,te.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}async#R(t){k(this.#f,!0),k(this.#o,null);try{const r={limit:fo,orderBy:"productName",orderDirection:"asc"},[n,s]=await Promise.all([Gs(t,r),Hi(t)]);n.forEach(a=>{const o=this.#p(a);this.#e.set(a.$id,o)}),k(this.#n,s,!0),this.#v(),this.#_(),console.log(`[ProductsStore] ${n.length} produits chargés et enrichis, ${s.length} dates récupérées`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw k(this.#o,n,!0),console.error("[ProductsStore]",n,r),r}finally{k(this.#f,!1)}}async#H(){if(!(!i(this.#c)||!i(this.#r))){k(this.#i,!0);try{const t={lastSync:i(this.#c),limit:fo},{allProducts:r}=await Bi(i(this.#r),t);r.length>0&&(r.forEach(n=>{const s=this.#p(n);this.#e.set(n.$id,s)}),console.log(`[ProductsStore] ${r.length} produits appliqués du sync`)),r.length>0&&(this.#v(),this.#_(),console.log(`[ProductsStore] Sync complétée: ${r.length} produits`))}catch(t){console.error("[ProductsStore] Erreur sync:",t)}finally{k(this.#i,!1)}}}#p(t){const r=nd(t.purchases??[]),n=ad(t.byDate);let s,a,o,l;n?(s=eo(n),a=dd(n),o=ld(n),t.totalNeededConsolidated&&t.totalNeededIsManualOverride&&(l=an(t.totalNeededConsolidated))):(console.error(`[ProductsStore] Product ${t.productName} n'a pas de structure byDate - migration requise`),s=[],a=[],o=[]);const{numeric:c,display:d}=sd(s,r),u=an(t.stockReel)??[],h=rn(r),p=u.length>0?`${u[u.length-1].quantity} ${u[u.length-1].unit}`:h;return{...t,storeInfo:t.store?an(t.store):null,totalNeededArray:s,totalPurchasesArray:r,recipesArray:o,stockArray:u,stockOrTotalPurchases:p,missingQuantityArray:c,neededConsolidatedByDateArray:a,displayTotalNeeded:rn(s),displayTotalPurchases:h,displayMissingQuantity:d,byDateParsed:n||void 0,totalNeededRawArray:l,totalNeededIsManualOverride:t.totalNeededIsManualOverride??!1,totalNeededOverrideReason:t.totalNeededOverrideReason}}#x(t){const r=this.#p(t);this.#e.set(t.$id,r)}#O(t){this.#e.delete(t)}async#G(t){if(!t?.length)return;const r=new Set(t.filter(n=>n.products?.length>0).flatMap(n=>n.products).map(n=>typeof n=="string"?n:n.$id).filter(Boolean));if(r.size===0){console.log("[ProductsStore] Aucun produit affecté par ces purchases");return}try{const n=await Gn(Array.from(r));if(n.length===0){console.warn("[ProductsStore] Impossible de charger les produits affectés");return}n.forEach(s=>{const a=this.#p(s);this.#e.set(s.$id,a)}),console.log(`[ProductsStore] ${t.length} purchases appliqués à ${n.length} produit(s)`)}catch(n){console.error("[ProductsStore] Erreur application purchases:",n)}}async#M(t){if(!t?.length)return;const r=new Set,n=[],s=t.filter(o=>o.products?.length>0);if(n.push(...t.filter(o=>!o.products?.length)),s.flatMap(o=>o.products).map(o=>typeof o=="string"?o:o.$id).filter(Boolean).forEach(o=>r.add(o)),n.length>0){console.log(`[ProductsStore] ${n.length} purchases sans relation products, rechargement ciblé depuis Appwrite...`);try{(await Vi(n.map(l=>l.$id))).forEach(l=>{if(l.products?.length>0){l.products.map(u=>typeof u=="string"?u:u.$id).filter(Boolean).forEach(u=>r.add(u));const d=t.findIndex(u=>u.$id===l.$id);d>=0&&(t[d]=l)}})}catch(o){console.error("[ProductsStore] Erreur rechargement ciblé des purchases:",o)}}if(r.size!==0){for(const o of r){const l=this.#e.get(o);if(l){let c=l.purchases||[];t.forEach(u=>{const h=c.findIndex(p=>p.$id===u.$id);h>=0?c[h]=u:c.push(u)});const d=this.#p({...l,purchases:c});this.#e.set(o,d)}}try{(await Gn(Array.from(r))).forEach(l=>{const c=this.#p(l);this.#e.set(l.$id,c)})}catch(o){console.warn("[ProductsStore] Erreur rechargement async:",o)}}}#q(){return{onProductCreate:t=>{this.#x(t),this.#v(),this.#w()},onProductUpdate:t=>{this.#x(t),this.#v(),this.#w()},onProductDelete:t=>{this.#O(t),this.#v(),this.#w()},onPurchaseCreate:t=>{this.#M([t]),this.#v(),this.#w()},onPurchaseUpdate:t=>{this.#M([t]),this.#v(),this.#w()},onPurchaseDelete:t=>{Array.from(this.#e.values()).filter(n=>n.purchases?.some(s=>s.$id===t)).forEach(n=>{this.#x(n)}),this.#v(),this.#w()},onConnect:()=>{k(this.#l,!0)},onDisconnect:()=>{k(this.#l,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#w(){this.#g&&clearTimeout(this.#g),this.#g=setTimeout(()=>{this.#_(),this.#g=null},hd)}#v(){k(this.#c,new Date().toISOString(),!0)}#B(t){if(i(this.#t).searchQuery.trim()){const r=i(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(i(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!i(this.#t).selectedStores.includes(t.storeInfo.storeName))||i(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>i(this.#t).selectedWho.includes(r)))||i(this.#t).selectedProductTypes.length>0&&(!t.productType||!i(this.#t).selectedProductTypes.includes(t.productType))||i(this.#t).selectedTemperatures.length>0&&!(i(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||i(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=rd(t=>{i(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=i(this.#t).selectedProductTypes.indexOf(t);r>-1?i(this.#t).selectedProductTypes.splice(r,1):i(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=i(this.#t).selectedTemperatures.indexOf(t);r>-1?i(this.#t).selectedTemperatures.splice(r,1):i(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){i(this.#t).selectedProductTypes=[],i(this.#t).selectedTemperatures=[]}setGroupBy(t){i(this.#t).groupBy=t}toggleStore(t){const r=i(this.#t).selectedStores.indexOf(t);r>-1?i(this.#t).selectedStores.splice(r,1):i(this.#t).selectedStores.push(t)}toggleWho(t){const r=i(this.#t).selectedWho.indexOf(t);r>-1?i(this.#t).selectedWho.splice(r,1):i(this.#t).selectedWho.push(t)}clearStoreFilters(){i(this.#t).selectedStores=[]}clearWhoFilters(){i(this.#t).selectedWho=[]}handleSort(t){i(this.#t).sortColumn===t?i(this.#t).sortDirection=i(this.#t).sortDirection==="asc"?"desc":"asc":(i(this.#t).sortColumn=t,i(this.#t).sortDirection="asc")}clearFilters(){k(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return i(this.#t).sortColumn?[...t].sort((r,n)=>{let s=r[i(this.#t).sortColumn],a=n[i(this.#t).sortColumn];return i(this.#t).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,a=parseFloat(a)||0):i(this.#t).sortColumn==="purchases"&&(s=r.purchases?.length||0,a=n.purchases?.length||0),s<a?i(this.#t).sortDirection==="asc"?-1:1:s>a?i(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getNeededForProduct(t){return this.totalNeededByDateRange.get(t)??[]}async applyManualOverride(t,r,n=null){const s=this.#e.get(t);if(!s)throw new Error(`Product ${t} not found`);const{updateProduct:a}=await Ya(async()=>{const{updateProduct:o}=await Promise.resolve().then(()=>uo);return{updateProduct:o}},void 0);await a(t,{totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n}),this.#e.set(t,{...s,totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n,totalNeededArray:r,displayTotalNeeded:rn(r)}),this.#_()}async removeManualOverride(t){const r=this.#e.get(t);if(!r)throw new Error(`Product ${t} not found`);const{updateProduct:n}=await Ya(async()=>{const{updateProduct:a}=await Promise.resolve().then(()=>uo);return{updateProduct:a}},void 0);await n(t,{totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null});const s=r.byDateParsed?eo(r.byDateParsed):[];this.#e.set(t,{...r,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,totalNeededArray:s,displayTotalNeeded:rn(s)}),this.#_()}hasManualOverride(t){return this.#e.get(t)?.totalNeededIsManualOverride??!1}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDateParsed?id(n.byDateParsed,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDateParsed&&n.byDateParsed[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDateParsed?ud(r.byDateParsed):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDateParsed?Object.keys(r.byDateParsed).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDateParsed||!i(this.#s)||!i(this.#a)?0:cd(r.byDateParsed,i(this.#s),i(this.#a))}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDateParsed||!i(this.#s)||!i(this.#a)?[]:Object.keys(r.byDateParsed).filter(s=>{const a=new Date(s),o=i(this.#s)?new Date(i(this.#s)):null,l=i(this.#a)?new Date(i(this.#a)):null;return o&&l&&a>=o&&a<=l}).flatMap(s=>r.byDateParsed[s]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){this.clearCache(),await this.#R(t)}#L(t,r,n){return t?r.length===0?{type:"partial",hugoData:n,mainDoc:t,hugoContentChanged:t.originalDataHash!==n.hugoContentHash}:{type:"synced",hugoData:n,mainDoc:t,appwriteProducts:r,hugoContentChanged:t.originalDataHash!==n.hugoContentHash}:{type:"fresh",hugoData:n}}async#j(t,r,n,s){switch(t.type){case"fresh":await this.#z(r);break;case"partial":await this.#U(r,n);break;case"synced":await this.#V(r,n,s);break}}async#z(t){console.log("[ProductsStore] État FRESH - Création du Main"),await this.#W(t.mainGroup_id,t.hugoContentHash,t.allDates,t.name),t.ingredients.forEach(r=>{const n=this.#$(r,t.hugoContentHash);this.#e.set(r.ingredientHugoUuid,n)}),this.#v(),this.#_(),console.log(`[ProductsStore] ${t.ingredients.length} produits virgin créés`)}async#U(t,r){console.log("[ProductsStore] État PARTIAL - Main existe, products virgin"),r.originalDataHash!==t.hugoContentHash&&(console.warn("[ProductsStore] Divergence Hugo détectée"),k(this.#S,!0)),t.ingredients.forEach(n=>{try{const s=this.#$(n,t.hugoContentHash),a=this.#p(s);this.#e.set(n.ingredientHugoUuid,a)}catch(s){throw console.error(`[ProductsStore] Erreur création virgin pour ${n.ingredientName}:`,s),console.error("[ProductsStore] Ingredient data:",n),s}}),this.#v(),this.#_()}async#V(t,r,n){console.log(`[ProductsStore] État SYNCED - ${n.length} products Appwrite`),r.originalDataHash!==t.hugoContentHash&&(console.warn("[ProductsStore] Divergence Hugo détectée"),k(this.#S,!0));const s=new Map(n.map(a=>[a.productHugoUuid,a]));t.ingredients.forEach(a=>{const o=s.get(a.ingredientHugoUuid);if(o){const l=this.#p(o);this.#e.set(o.$id,l),s.delete(a.ingredientHugoUuid)}else{const l=this.#$(a,t.hugoContentHash);this.#e.set(a.ingredientHugoUuid,l)}}),s.forEach(a=>{console.log(`[ProductsStore] Product orphelin: ${a.productName}`);const o=this.#p(a);this.#e.set(a.$id,o)}),this.#v(),this.#_()}async#W(t,r,n,s){await Gi(t,r,n,s)}#$(t,r){const n={$id:t.ingredientHugoUuid,productHugoUuid:t.ingredientHugoUuid,productName:t.ingredientName,productType:t.ingType,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1,byDate:typeof t.byDate=="string"?t.byDate:JSON.stringify(t.byDate),nbRecipes:t.nbRecipes||0,totalAssiettes:t.totalAssiettes||0,status:"virgin",isHugoSynced:!0,hugoContentHash:r,purchases:[],store:"",who:null,stockReel:null,isMerged:!1,mergedInto:null,mergedFrom:null,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,mainId:i(this.#r)};return this.#p(n)}clearCache(){this.#e.clear(),k(this.#n,[],!0),k(this.#c,null),this.#u&&localStorage.removeItem(this.#u),this.#h&&localStorage.removeItem(this.#h),console.log("[ProductsStore] Cache vidé")}destroy(){this.#m?.(),this.#m=null,this.#g&&(clearTimeout(this.#g),this.#g=null),console.log("[ProductsStore] Ressources nettoyées")}}const R=new pd;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const md={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var gd=Zc("<svg><!><!></svg>");function ce(e,t){W(t,!0);const r=Dr(t,"color",3,"currentColor"),n=Dr(t,"size",3,24),s=Dr(t,"strokeWidth",3,2),a=Dr(t,"absoluteStrokeWidth",3,!1),o=Dr(t,"iconNode",19,()=>[]),l=ie(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=gd();Ga(c,h=>({...md,...l,width:n(),height:n(),stroke:r(),"stroke-width":h,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>a()?Number(s())*24/Number(n()):s()]);var d=f(c);Re(d,17,o,qr,(h,p)=>{var m=z(()=>Ao(i(p),2));let g=()=>i(m)[0],S=()=>i(m)[1];var y=V(),b=U(y);ru(b,g,!0,(I,T)=>{Ga(I,()=>({...S()}))}),_(h,y)});var u=v(d);oe(u,()=>t.children??ne),_(e,c),H()}function Ys(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ce(e,le({name:"archive"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function _d(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ce(e,le({name:"bean"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function yd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ce(e,le({name:"beef"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function bd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ce(e,le({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function wd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ce(e,le({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Sd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ce(e,le({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Ed(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ce(e,le({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Pd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ce(e,le({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function xd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];ce(e,le({name:"combine"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function ma(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ce(e,le({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function $d(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ce(e,le({name:"egg"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Zs(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ce(e,le({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function vo(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ce(e,le({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function kd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ce(e,le({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Nd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ce(e,le({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Ad(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ce(e,le({name:"log-in"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Td(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ce(e,le({name:"message-circle"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function cs(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ce(e,le({name:"package"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Id(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Cd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ce(e,le({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Md(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ce(e,le({name:"save"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Dd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ce(e,le({name:"search"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Bn(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ce(e,le({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Kn(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ce(e,le({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Ln(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ce(e,le({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Ki(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ce(e,le({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function bn(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ce(e,le({name:"store"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Qi(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ce(e,le({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function ga(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ce(e,le({name:"user"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Yi(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ce(e,le({name:"users"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Rd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ce(e,le({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function Zi(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]];ce(e,le({name:"weight"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}function ht(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),_(s,o)},$$slots:{default:!0}})),H()}const Mt=vt({product:{id:"",isOpen:!1,tab:"recettes"}});function Od(e,t){Mt.product.tab=e,Mt.product.isOpen=!0,Mt.product.id=t}function ho(){Mt.product.isOpen=!1,Mt.product.tab="",Mt.product.id=""}let po=()=>localStorage.getItem("appwrite-user-name")||"";function jn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:_d};case"animaux":return{displayName:"Viandes et Poissons",icon:yd};case"legumes":return{displayName:"Fruits et Légumes",icon:wd};case"sucres":return{displayName:"Sucrées",icon:bd};case"lof":return{displayName:"L.O.F",icon:$d};case"autres":return{displayName:"Autres",icon:Sd};case"epices":return{displayName:"Assaisonnements",icon:kd};case"frais":return{displayName:"Produits Frais",icon:Cd};default:return{displayName:e,icon:cs}}}function mo(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Ji(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Qn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function qd(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Bd(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],a=n[t.sortColumn];return s<a?t.sortDirection==="asc"?-1:1:s>a?t.sortDirection==="asc"?1:-1:0}):e}function Ld(e){let t=se(!1),r=se(null),n=se("recettes");const s=z(()=>R.getEnrichedProductById(e)),a=z(()=>i(s)?.recipesArray??[]),o=z(()=>i(s)?.who??[]),l=z(()=>i(s)?.stockArray??[]),c=z(()=>i(s)?.purchases??[]),d=vt({purchase:{quantity:null,unit:"",store:"",who:po()??"",price:null,notes:""},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});Zo(()=>{i(s)&&(d.purchase.quantity=i(s).missingQuantityArray[0]?.quantity??null,d.purchase.unit=i(s).totalNeededArray[0]?.unit??"",d.purchase.store=i(s).storeInfo?.storeName??"",d.purchase.who=po()??"",d.stock.unit=i(s).totalNeededArray[0]?.unit??"",d.store.name=i(s).storeInfo?.storeName??null,d.store.comment=i(s).storeInfo?.storeComment??null)});let u=se(null);const h=z(()=>i(u)?i(c).find(E=>E.$id===i(u))??null:null);async function p(E,q){k(t,!0),k(r,null);try{const C=await E();return q&&m("success",q),C}catch(C){const Z=C instanceof Error?C.message:"Une erreur est survenue";return k(r,Z,!0),m("error",Z),console.error("[ProductModalState]",C),null}finally{k(t,!1)}}function m(E,q){const C=new CustomEvent("toast",{detail:{type:E,message:q}});window.dispatchEvent(C)}async function g(){i(s)&&await p(async()=>{if(!d.purchase.quantity||!d.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!R.currentMainId)throw new Error("mainId non disponible");const{quantity:E,unit:q}=mo(d.purchase.quantity,d.purchase.unit);await ji({products:[i(s).$id],mainId:R.currentMainId,unit:q,quantity:E,store:d.purchase.store||null,who:d.purchase.who||null,notes:d.purchase.notes||"",price:d.purchase.price||null}),d.purchase={quantity:i(s).missingQuantityArray[0]?.quantity??null,unit:i(s).totalNeededArray[0]?.unit??"",store:d.purchase.store,who:d.purchase.who,price:null,notes:""}},"Achat ajouté avec succès")}function S(E){k(u,E.$id,!0)}function y(){k(u,null)}async function b(E){E.$id&&await p(async()=>{const{quantity:q,unit:C}=mo(E.quantity,E.unit);await zi(E.$id,{unit:C,quantity:q,store:E.store||null,who:E.who||null,notes:E.notes||"",price:E.price||null}),k(u,null)},"Achat modifié avec succès")}async function I(E){const q=i(c).find(C=>C.$id===E);q&&confirm(`Supprimer cet achat (${q.quantity} ${q.unit}) ?`)&&await p(async()=>{await Ui(E)},"Achat supprimé avec succès")}async function T(){i(s)&&await p(async()=>{if(!d.stock.quantity||!d.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const E={quantity:d.stock.quantity.toString(),unit:d.stock.unit,notes:d.stock.notes,dateTime:d.stock.dateTime},q=[...i(l),E];await Qs(i(s).$id,JSON.stringify(q)),d.stock.quantity=null,d.stock.notes="",d.stock.dateTime=new Date().toISOString()},"Relevé de stock ajouté")}async function P(E){i(s)&&confirm("Supprimer ce relevé de stock ?")&&await p(async()=>{const q=i(l).filter((C,Z)=>Z!==E);await Qs(i(s).$id,JSON.stringify(q))},"Relevé de stock supprimé")}async function x(E){!i(s)||!E.trim()||await p(async()=>{if(i(o).includes(E))throw new Error("Ce volontaire est déjà ajouté");await Ks(i(s).$id,[...i(o),E.trim()])},"Volontaire ajouté")}async function A(E){i(s)&&confirm(`Retirer ${E} ?`)&&await p(async()=>{await Ks(i(s).$id,i(o).filter(q=>q!==E))},"Volontaire retiré")}async function M(E){i(s)&&await p(async()=>{await Li(i(s).$id,E)},"Magasin mis à jour")}return{get loading(){return i(t)},get error(){return i(r)},get currentTab(){return i(n)},set currentTab(E){k(n,E,!0)},get product(){return i(s)},get recipes(){return i(a)},get whoList(){return i(o)},get stockEntries(){return i(l)},get purchasesList(){return i(c)},get editingPurchaseId(){return i(u)},get editingPurchaseData(){return i(h)},forms:d,addPurchase:g,startEditPurchase:S,cancelEditPurchase:y,updateEditedPurchase:b,removePurchase:I,addStock:T,removeStock:P,addVolunteer:x,removeVolunteer:A,updateStore:M,formatQuantity:Ji,formatDate:Qn,formatDisplayQuantity:qd}}function jd(e,t,r){t()&&r().addPurchase()}function zd(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Ud(e,t){t().cancelEditPurchase()}var Vd=$("<option> </option>"),Wd=$("<option> </option>"),Hd=$('<span class="loading loading-spinner loading-sm"></span>'),Gd=$('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Kd=$("<option> </option>"),Qd=$('<span class="loading loading-spinner loading-sm"></span>'),Yd=$('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/> <datalist id="browsers"></datalist></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Zd=(e,t,r)=>t(i(r)),Jd=(e,t,r)=>t(i(r).$id),Xd=$('<span class="loading loading-spinner loading-sm"></span>'),Fd=$('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),ef=$('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),tf=$('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <label class="select w-28"><!> <select required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></label> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/> <datalist id="stores"></datalist></label> <label class="input w-48"><!> <input type="text" placeholder="Qui" maxlength="25" list="users"/> <datalist id="users"></datalist></label> <label class="input validator w-28"><input type="number" step="1" placeholder="Prix" min="0"/> <span class="label">€</span></label> <label class="input validator"><!> <input type="text" placeholder="Notes" maxlength="250"/></label></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function rf(e,t){W(t,!0);let r=Dr(t,"modalState",7);function n(){return r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function s(u){return u.quantity!==null&&u.quantity!==0&&u.unit?.trim()!==""}function a(u){r().removePurchase(u)}function o(u){r().startEditPurchase(u)}var l=V(),c=U(l);{var d=u=>{var h=tf(),p=f(h),m=f(p);Kn(m,{class:"h-5 w-5"});var g=v(p,2),S=f(g),y=v(f(S),2),b=f(y),I=f(b);cs(I,{class:"h-4 w-4 opacity-50"});var T=v(I,2),P=v(b,2),x=f(P);Zi(x,{class:"h-4 w-4 opacity-50"});var A=v(x,2),M=f(A);M.value=M.__value="";var E=v(M);E.value=E.__value="kg";var q=v(E);q.value=q.__value="gr.";var C=v(q);C.value=C.__value="l.";var Z=v(C);Z.value=Z.__value="ml";var ae=v(Z);ae.value=ae.__value="unité";var Ce=v(ae);Ce.value=Ce.__value="bottes";var xe=v(P,2),Se=f(xe);bn(Se,{class:"h-4 w-4 opacity-50"});var be=v(Se,2),J=v(be,2);Re(J,21,()=>R.uniqueStores,qr,(F,fe)=>{var $e=Vd(),qt=f($e),B={};j(()=>{D(qt,i(fe)),B!==(B=i(fe))&&($e.value=($e.__value=i(fe))??"")}),_(F,$e)});var N=v(xe,2),G=f(N);ga(G,{class:"h-4 w-4 opacity-50"});var ue=v(G,2),_e=v(ue,2);Re(_e,21,()=>R.uniqueWho,qr,(F,fe)=>{var $e=Wd(),qt=f($e),B={};j(()=>{D(qt,i(fe)),B!==(B=i(fe))&&($e.value=($e.__value=i(fe))??"")}),_(F,$e)});var me=v(N,2),et=f(me),He=v(me,2),de=f(He);Td(de,{class:"h-4 w-4 opacity-50"});var Ee=v(de,2),qe=v(y,2),Me=f(qe);Me.__click=[jd,n,r];var De=f(Me);{var Be=F=>{var fe=Hd();_(F,fe)},Pe=F=>{var fe=at("Ajouter l'achat");_(F,fe)};O(De,F=>{r().loading?F(Be):F(Pe,!1)})}var Ge=v(g,2);{var mt=F=>{var fe=Gd(),$e=f(fe);Kn($e,{class:"mx-auto mb-2 h-12 w-12"}),_(F,fe)},lr=F=>{var fe=ef(),$e=f(fe),qt=v(f($e));Re(qt,21,()=>r().purchasesList,B=>B.$id,(B,L,ke)=>{var St=V(),cr=U(St);{var tt=gt=>{var Bt=Yd(),Lt=f(Bt),Je=f(Lt),Et=f(Je),jt=v(Et,2),Pt=f(jt);Pt.value=Pt.__value="kg";var zt=v(Pt);zt.value=zt.__value="gr.";var Le=v(zt);Le.value=Le.__value="l.";var xt=v(Le);xt.value=xt.__value="ml";var $t=v(xt);$t.value=$t.__value="unité";var Yt=v($t);Yt.value=Yt.__value="bottes";var it=v(Lt),kr=f(it),Jr=v(kr,2);Re(Jr,21,()=>R.uniqueStores,qr,(Y,ve)=>{var Q=Kd(),Ne=f(Q),Ae={};j(()=>{D(Ne,i(ve)),Ae!==(Ae=i(ve))&&(Q.value=(Q.__value=i(ve))??"")}),_(Y,Q)});var Nr=v(it),ur=f(Nr),Ar=v(Nr),dr=f(Ar),Tr=v(Ar),Xr=f(Tr),fr=v(Tr),lt=f(fr),K=v(fr),he=f(K),rt=f(he);rt.__click=[zd,r,s];var ct=f(rt);{var Ke=Y=>{var ve=Qd();_(Y,ve)},nt=Y=>{Md(Y,{class:"h-3 w-3"})};O(ct,Y=>{r().loading?Y(Ke):Y(nt,!1)})}var _t=v(rt,2);_t.__click=[Ud,r];var we=f(_t);ht(we,{class:"h-3 w-3"}),j((Y,ve)=>{D(dr,Y),rt.disabled=ve},[()=>Qn(i(L).$createdAt),()=>r().loading||!s(i(L))]),Qe(Et,()=>i(L).quantity,Y=>i(L).quantity=Y),js(jt,()=>i(L).unit,Y=>i(L).unit=Y),Qe(kr,()=>i(L).store,Y=>i(L).store=Y),Qe(ur,()=>i(L).who,Y=>i(L).who=Y),Qe(Xr,()=>i(L).price,Y=>i(L).price=Y),Qe(lt,()=>i(L).notes,Y=>i(L).notes=Y),_(gt,Bt)},$r=gt=>{var Bt=Fd(),Lt=f(Bt),Je=f(Lt),Et=v(Lt),jt=f(Et),Pt=v(Et),zt=f(Pt),Le=v(Pt),xt=f(Le),$t=v(Le),Yt=f($t),it=v($t),kr=f(it),Jr=v(it),Nr=f(Jr),ur=f(Nr);ur.__click=[Zd,o,L];var Ar=f(ur);Ki(Ar,{class:"h-4 w-4"});var dr=v(ur,2);dr.__click=[Jd,a,L];var Tr=f(dr);{var Xr=lt=>{var K=Xd();_(lt,K)},fr=lt=>{ht(lt,{class:"h-4 w-4"})};O(Tr,lt=>{r().loading?lt(Xr):lt(fr,!1)})}j((lt,K)=>{D(Je,lt),D(jt,i(L).store||"-"),D(zt,i(L).who||"-"),D(xt,K),D(Yt,i(L).price?`${i(L).price}€`:"-"),D(kr,i(L).notes||"-"),dr.disabled=r().loading},[()=>Ji(i(L).quantity,i(L).unit),()=>Qn(i(L).$createdAt)]),_(gt,Bt)};O(cr,gt=>{r().editingPurchaseId===i(L).$id?gt(tt):gt($r,!1)})}_(B,St)}),_(F,fe)};O(Ge,F=>{r().purchasesList.length===0?F(mt):F(lr,!1)})}j(F=>Me.disabled=F,[()=>r().loading||!n()]),Qe(T,()=>r().forms.purchase.quantity,F=>r().forms.purchase.quantity=F),js(A,()=>r().forms.purchase.unit,F=>r().forms.purchase.unit=F),Qe(be,()=>r().forms.purchase.store,F=>r().forms.purchase.store=F),Qe(ue,()=>r().forms.purchase.who,F=>r().forms.purchase.who=F),Qe(et,()=>r().forms.purchase.price,F=>r().forms.purchase.price=F),Qe(Ee,()=>r().forms.purchase.notes,F=>r().forms.purchase.notes=F),_(u,h)};O(c,u=>{r()&&r().product&&u(d)})}_(e,l),H()}Rt(["click"]);class nf{#e;#r=new Set;constructor(t){this.#e=t}get current(){return this.#e}set current(t){this.#e!=t&&(this.#e=t,this.#r.forEach(r=>r(t)))}on(t){return this.#r.add(t),()=>this.#r.delete(t)}}const Xi=e=>new nf(e),Js=Symbol.for("atomico.hooks");globalThis[Js]=globalThis[Js]||{};let Hr=globalThis[Js];const sf=Symbol.for("Atomico.suspense"),Fi=Symbol.for("Atomico.effect"),af=Symbol.for("Atomico.layoutEffect"),el=Symbol.for("Atomico.insertionEffect"),Yr=(e,t,r)=>{const{i:n,hooks:s}=Hr.c,a=s[n]=s[n]||{};return a.value=e(a.value),a.effect=t,a.tag=r,Hr.c.i++,s[n].value},of=e=>Yr((t=Xi(e))=>t),xn=()=>Yr((e=Xi(Hr.c.host))=>e),tl=()=>Hr.c.update,lf=(e,t,r=0)=>{let n={},s=!1;const a=()=>s,o=(l,c)=>{for(const d in n){const u=n[d];u.effect&&u.tag===l&&(u.value=u.effect(u.value,c))}};return{load:l=>{Hr.c={host:t,hooks:n,update:e,i:0,id:r};let c;try{s=!1,c=l()}catch(d){if(d!==sf)throw d;s=!0}finally{Hr.c=null}return c},cleanEffects:l=>(o(el,l),()=>(o(af,l),()=>{o(Fi,l)})),isSuspense:a}},Zr=Symbol.for;function rl(e,t){const r=e.length;if(r!==t.length)return!1;for(let n=0;n<r;n++){let s=e[n],a=t[n];if(s!==a)return!1}return!0}const Ct=e=>typeof e=="function",dn=e=>typeof e=="object",{isArray:cf}=Array,Xs=(e,t)=>(t?e instanceof HTMLStyleElement:!0)&&"hydrate"in(e?.dataset||{});function nl(e,t){let r;const n=s=>{let{length:a}=s;for(let o=0;o<a;o++){const l=s[o];if(l&&Array.isArray(l))n(l);else{const c=typeof l;if(l==null||c==="function"||c==="boolean")continue;c==="string"||c==="number"?(r==null&&(r=""),r+=l):(r!=null&&(t(r),r=null),t(l))}}};n(e),r!=null&&t(r)}const sl=(e,t,r)=>(e.addEventListener(t,r),()=>e.removeEventListener(t,r));class al{constructor(t,r,n){this.message=r,this.target=t,this.value=n}}class ol extends al{}class uf extends al{}const Yn="Custom",df=null,ff={true:1,"":1,1:1};function vf(e,t,r,n,s){const{type:a,reflect:o,event:l,value:c,attr:d=hf(t)}=r?.name!=Yn&&dn(r)&&r!=df?r:{type:r},u=a?.name===Yn&&a.map,h=c!=null?a==Function||!Ct(c)?()=>c:c:null;Object.defineProperty(e,t,{configurable:!0,set(p){const m=this[t];h&&a!=Boolean&&p==null&&(p=h());const{error:g,value:S}=(u?gf:_f)(a,p);if(g&&S!=null)throw new ol(this,`The value defined for prop '${t}' must be of type '${a.name}'`,S);m!=S&&(this._props[t]=S??void 0,this.update(),l&&il(this,l),this.updated.then(()=>{o&&(this._ignoreAttr=d,pf(this,a,d,this[t]),this._ignoreAttr=null)}))},get(){return this._props[t]}}),h&&(s[t]=h()),n[d]={prop:t,type:a}}const il=(e,{type:t,base:r=CustomEvent,...n})=>e.dispatchEvent(new r(t,n)),hf=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),pf=(e,t,r,n)=>n==null||t==Boolean&&!n?e.removeAttribute(r):e.setAttribute(r,t?.name===Yn&&t?.serialize?t?.serialize(n):dn(n)?JSON.stringify(n):t==Boolean?"":n),mf=(e,t)=>e==Boolean?!!ff[t]:e==Number?Number(t):e==String?t:e==Array||e==Object?JSON.parse(t):e.name==Yn?t:new e(t),gf=({map:e},t)=>{try{return{value:e(t),error:!1}}catch{return{value:t,error:!0}}},_f=(e,t)=>e==null||t==null?{value:t,error:!1}:e!=String&&t===""?{value:void 0,error:!1}:e==Object||e==Array||e==Symbol?{value:t,error:{}.toString.call(t)!==`[object ${e.name}]`}:t instanceof e?{value:t,error:e==Number&&Number.isNaN(t.valueOf())}:e==String||e==Number||e==Boolean?{value:t,error:e==Number?typeof t!="number"?!0:Number.isNaN(t):e==String?typeof t!="string":typeof t!="boolean"}:{value:t,error:!0};let yf=0;const bf=e=>(e?.dataset||{})?.hydrate||""||"c"+yf++,$n=(e,t=HTMLElement)=>{const r={},n={},s="prototype"in t&&t.prototype instanceof Element,a=s?t:"base"in t?t.base:HTMLElement,{props:o,styles:l}=s?e:t;class c extends a{constructor(){super(),this._setup(),this._render=()=>e({...this._props});for(const u in n)this[u]=n[u]}static get styles(){return[super.styles,l]}async _setup(){if(this._props)return;this._props={};let u,h;this.mounted=new Promise(y=>this.mount=()=>{y(),u!=this.parentNode&&(h!=u?this.unmounted.then(this.update):this.update()),u=this.parentNode}),this.unmounted=new Promise(y=>this.unmount=()=>{y(),(u!=this.parentNode||!this.isConnected)&&(p.cleanEffects(!0)()(),h=this.parentNode,u=null)}),this.symbolId=this.symbolId||Symbol(),this.symbolIdParent=Symbol();const p=lf(()=>this.update(),this,bf(this));let m,g=!0;const S=Xs(this);this.update=()=>(m||(m=!0,this.updated=(this.updated||this.mounted).then(()=>{try{const y=p.load(this._render),b=p.cleanEffects();return y&&y.render(this,this.symbolId,S),m=!1,g&&!p.isSuspense()&&(g=!1,!S&&wf(this)),b()}finally{m=!1}}).then(y=>{y&&y()})),this.updated),this.update()}connectedCallback(){this.mount(),super.connectedCallback&&super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.unmount()}attributeChangedCallback(u,h,p){if(r[u]){if(u===this._ignoreAttr||h===p)return;const{prop:m,type:g}=r[u];try{this[m]=mf(g,p)}catch{throw new uf(this,`The value defined as attr '${u}' cannot be parsed by type '${g.name}'`,p)}}else super.attributeChangedCallback(u,h,p)}static get props(){return{...super.props,...o}}static get observedAttributes(){const u=super.observedAttributes||[];for(const h in o)vf(this.prototype,h,o[h],r,n);return Object.keys(r).concat(u)}}return c};function wf(e){const{styles:t}=e.constructor,{shadowRoot:r}=e;if(r&&t.length){const n=[];nl(t,s=>{s&&(s instanceof Element?r.appendChild(s.cloneNode(!0)):n.push(s))}),n.length&&(r.adoptedStyleSheets=n)}}const ll=e=>(t,r)=>{Yr(([n,s]=[])=>((s||!s)&&(s&&rl(s,r)?n=n||!0:(Ct(n)&&n(),n=null)),[n,r]),([n,s],a)=>a?(Ct(n)&&n(),[]):[n||t(),s],e)},wn=ll(Fi),Sf=ll(el);class cl extends Array{constructor(t,r){let n=!0;const s=a=>{try{r(a,this,n)}finally{n=!1}};super(void 0,s,r),s(t)}}const _a=e=>{const t=tl();return Yr((r=new cl(e,(n,s,a)=>{n=Ct(n)?n(s[0]):n,n!==s[0]&&(s[0]=n,a||t())}))=>r)},Gt=(e,t)=>{const[r]=Yr(([n,s,a=0]=[])=>((!s||s&&!rl(s,t))&&(n=e()),[n,t,a]));return r},ya=e=>{const{current:t}=xn();if(!(e in t))throw new ol(t,`For useProp("${e}"), the prop does not exist on the host.`,e);return Yr((r=new cl(t[e],(n,s)=>{n=Ct(n)?n(t[e]):n,t[e]=n}))=>(r[0]=t[e],r))},tr=(e,t={})=>{const r=xn();return r[e]||(r[e]=(n=t.detail)=>il(r.current,{type:e,...t,detail:n})),r[e]},Fs=Zr("atomico/options");globalThis[Fs]=globalThis[Fs]||{sheet:!!document.adoptedStyleSheets};const ul=globalThis[Fs],Ef={checked:1,value:1,selected:1},Pf={list:1,type:1,size:1,form:1,width:1,height:1,src:1,href:1,slot:1},xf={shadowDom:1,staticNode:1,cloneNode:1,children:1,key:1},zn={},ea=[];class ta extends Text{}const $f=Zr("atomico/id"),fn=Zr("atomico/type"),As=Zr("atomico/ref"),dl=Zr("atomico/vnode"),kf=()=>{};function Nf(e,t,r){return vl(this,e,t,r)}const fl=(e,t,...r)=>{const n=t||zn;let{children:s}=n;if(s=s??(r.length?r:ea),e===kf)return s;const a=e?e instanceof Node?1:e.prototype instanceof HTMLElement&&2:0;if(a===!1&&e instanceof Function)return e(s!=ea?{children:s,...n}:n);const o=ul.render||Nf;return{[fn]:dl,type:e,props:n,children:s,key:n.key,shadow:n.shadowDom,static:n.staticNode,raw:a,is:n.is,clone:n.cloneNode,render:o}};function vl(e,t,r=$f,n,s){let a;if(t&&t[r]&&t[r].vnode==e||e[fn]!=dl)return t;(e||!t)&&(s=s||e.type=="svg",a=e.type!="host"&&(e.raw==1?(t&&e.clone?t[As]:t)!=e.type:e.raw==2?!(t instanceof e.type):t?t[As]||t.localName!=e.type:!t),a&&e.type!=null&&(e.raw==1&&e.clone?(n=!0,t=e.type.cloneNode(!0),t[As]=e.type):t=e.raw==1?e.type:e.raw==2?new e.type:s?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,e.is?{is:e.is}:void 0)));const o=t[r]?t[r]:zn,{vnode:l=zn,cycle:c=0}=o;let{fragment:d,handlers:u}=o;const{children:h=ea,props:p=zn}=l;if(u=a?{}:u||{},e.static&&!a)return t;if(e.shadow&&!t.shadowRoot&&t.attachShadow({mode:"open",...e.shadow}),e.props!=p&&If(t,p,e.props,u,s),e.children!==h){const m=e.shadow?t.shadowRoot:t;d=Tf(e.children,d,m,r,!c&&n,s&&e.type=="foreignObject"?!1:s)}return t[r]={vnode:e,handlers:u,fragment:d,cycle:c+1},t}function Af(e,t){const r=new ta(""),n=new ta("");let s;if(e[t?"prepend":"append"](r),t){let{lastElementChild:a}=e;for(;a;){const{previousElementSibling:o}=a;if(Xs(a,!0)&&!Xs(o,!0)){s=a;break}a=o}}return s?s.before(n):e.append(n),{markStart:r,markEnd:n}}function Tf(e,t,r,n,s,a){e=e==null?null:cf(e)?e:[e];const o=t||Af(r,s),{markStart:l,markEnd:c,keyes:d}=o;let u;const h=d&&new Set;let p=l;if(e&&nl(e,m=>{if(typeof m=="object"&&!m[fn])return;const g=m[fn]&&m.key,S=d&&g!=null&&d.get(g);p!=c&&p===S?h.delete(p):p=p==c?c:p.nextSibling;const y=d?S:p;let b=y;if(m[fn])b=vl(m,y,n,s,a);else{const I=m+"";!(b instanceof Text)||b instanceof ta?b=new Text(I):b.data!=I&&(b.data=I)}b!=p&&(d&&h.delete(b),!y||d?(r.insertBefore(b,p),d&&p!=c&&h.add(p)):y==c?r.insertBefore(b,c):(r.replaceChild(b,y),p=b)),g!=null&&(u=u||new Map,u.set(g,b))}),p=p==c?c:p.nextSibling,t&&p!=c)for(;p!=c;){const m=p;p=p.nextSibling,m.remove()}return h&&h.forEach(m=>m.remove()),o.keyes=u,o}function If(e,t,r,n,s){for(const a in t)!(a in r)&&go(e,a,t[a],null,s,n);for(const a in r)go(e,a,t[a],r[a],s,n)}function go(e,t,r,n,s,a){if(t=t=="class"&&!s?"className":t,r=r??null,n=n??null,t in e&&Ef[t]&&(r=e[t]),!(n===r||xf[t]||t[0]=="_"))if(t[0]=="o"&&t[1]=="n"&&(Ct(n)||Ct(r)))Cf(e,t.slice(2),n,a);else if(t=="ref")n&&(Ct(n)?n(e):n.current=e);else if(t=="style"){const{style:o}=e;r=r||"",n=n||"";const l=dn(r),c=dn(n);if(l)for(const d in r)if(c)!(d in n)&&_o(o,d,null);else break;if(c)for(const d in n){const u=n[d];l&&r[d]===u||_o(o,d,u)}else o.cssText=n}else{const o=t[0]=="$"?t.slice(1):t;o===t&&(!s&&!Pf[t]&&t in e||Ct(n)||Ct(r))?e[t]=n??"":n==null?e.removeAttribute(o):e.setAttribute(o,dn(n)?JSON.stringify(n):n)}}function Cf(e,t,r,n){if(n.handleEvent||(n.handleEvent=s=>n[s.type].call(e,s)),r){if(!n[t]){const s=r.capture||r.once||r.passive?Object.assign({},r):null;e.addEventListener(t,n,s)}n[t]=r}else n[t]&&(e.removeEventListener(t,n),delete n[t])}function _o(e,t,r){let n="setProperty";r==null&&(n="removeProperty",r=null),~t.indexOf("-")?e[n](t,r):e[t]=r}const yo={};function us(e,...t){const r=(e.raw||e).reduce((n,s,a)=>n+s+(t[a]||""),"");return yo[r]=yo[r]||Mf(r)}function Mf(e){if(ul.sheet){const t=new CSSStyleSheet;return t.replaceSync(e),t}else{const t=document.createElement("style");return t.textContent=e,t}}const Df=fl("host",{style:"display: contents"}),Ts=Zr("atomico/context"),Rf=(e,t)=>{const r=xn();Sf(()=>sl(r.current,"ConnectContext",n=>{e===n.detail.id&&(n.stopPropagation(),n.detail.connect(t))}),[e])},Of=e=>{const t=tr("ConnectContext",{bubbles:!0,composed:!0}),r=()=>{let a;return t({id:e,connect(o){a=o}}),a},[n,s]=_a(r);return wn(()=>{n||(e[Ts]||(e[Ts]=customElements.whenDefined(new e().localName)),e[Ts].then(()=>s(r)))},[e]),n},qf=e=>{const t=Of(e),r=tl();return wn(()=>{if(t)return sl(t,"UpdatedValue",r)},[t]),(t||e).value},Bf=e=>{const t=$n(()=>(Rf(t,xn().current),Df),{props:{value:{type:Object,event:{type:"UpdatedValue"},value:()=>e}}});return t.value=e,t},ye=(e,t,r)=>(t==null?t={key:r}:t.key=r,fl(e,t)),vn=ye,hl=us`*,*:before,*:after{box-sizing:border-box}button{padding:0;touch-action:manipulation;cursor:pointer;user-select:none}`,pl=us`.vh{position:absolute;transform:scale(0)}`;function ba(){const e=new Date;return new Oe(e.getFullYear(),e.getMonth()+1,e.getDate())}function wa(e,t=0){const r=wt(e),n=r.getUTCDay(),s=(n<t?7:0)+n-t;return r.setUTCDate(r.getUTCDate()-s),Oe.from(r)}function ml(e,t=0){return wa(e,t).add({days:6})}function gl(e){return Oe.from(new Date(Date.UTC(e.year,e.month,0)))}function ds(e,t,r){return t&&Oe.compare(e,t)<0?t:r&&Oe.compare(e,r)>0?r:e}const Lf={days:1};function jf(e,t=0){let r=wa(e.toPlainDate(),t);const n=ml(gl(e),t),s=[];for(;Oe.compare(r,n)<0;){const a=[];for(let o=0;o<7;o++)a.push(r),r=r.add(Lf);s.push(a)}return s}function wt(e){return new Date(Date.UTC(e.year,e.month-1,e.day??1))}const zf=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/,Is=(e,t)=>e.toString().padStart(t,"0");class Oe{constructor(t,r,n){this.year=t,this.month=r,this.day=n}add(t){const r=wt(this);if("days"in t)return r.setUTCDate(this.day+t.days),Oe.from(r);let{year:n,month:s}=this;"months"in t?(s=this.month+t.months,r.setUTCMonth(s-1)):(n=this.year+t.years,r.setUTCFullYear(n));const a=Oe.from(wt({year:n,month:s,day:1}));return ds(Oe.from(r),a,gl(a))}toString(){return`${Is(this.year,4)}-${Is(this.month,2)}-${Is(this.day,2)}`}toPlainYearMonth(){return new fs(this.year,this.month)}equals(t){return Oe.compare(this,t)===0}static compare(t,r){return t.year<r.year?-1:t.year>r.year?1:t.month<r.month?-1:t.month>r.month?1:t.day<r.day?-1:t.day>r.day?1:0}static from(t){if(typeof t=="string"){const r=t.match(zf);if(!r)throw new TypeError(t);const[,n,s,a]=r;return new Oe(parseInt(n,10),parseInt(s,10),parseInt(a,10))}return new Oe(t.getUTCFullYear(),t.getUTCMonth()+1,t.getUTCDate())}}class fs{constructor(t,r){this.year=t,this.month=r}add(t){const r=wt(this),n=(t.months??0)+(t.years??0)*12;return r.setUTCMonth(r.getUTCMonth()+n),new fs(r.getUTCFullYear(),r.getUTCMonth()+1)}equals(t){return this.year===t.year&&this.month===t.month}toPlainDate(){return new Oe(this.year,this.month,1)}}function Zn(e,t){if(t)try{return e.from(t)}catch{}}function rr(e){const[t,r]=ya(e);return[Gt(()=>Zn(Oe,t),[t]),n=>r(n?.toString())]}function Uf(e){const[t="",r]=ya(e);return[Gt(()=>{const[n,s]=t.split("/"),a=Zn(Oe,n),o=Zn(Oe,s);return a&&o?[a,o]:[]},[t]),n=>r(`${n[0]}/${n[1]}`)]}function Vf(e){const[t="",r]=ya(e);return[Gt(()=>{const n=[];for(const s of t.trim().split(/\s+/)){const a=Zn(Oe,s);a&&n.push(a)}return n},[t]),n=>r(n.join(" "))]}function Sn(e,t){return Gt(()=>new Intl.DateTimeFormat(t,{timeZone:"UTC",...e}),[t,e])}function bo(e,t,r){const n=Sn(e,r);return Gt(()=>{const s=[],a=new Date;for(var o=0;o<7;o++){const l=(a.getUTCDay()-t+7)%7;s[l]=n.format(a),a.setUTCDate(a.getUTCDate()+1)}return s},[t,n])}const wo=(e,t,r)=>ds(e,t,r)===e,So=e=>e.target.matches(":dir(ltr)"),Wf={month:"long",day:"numeric"},Hf={month:"long"},Gf={weekday:"long"},Cs={bubbles:!0};function Kf({props:e,context:t}){const{offset:r}=e,{firstDayOfWeek:n,isDateDisallowed:s,min:a,max:o,today:l,page:c,locale:d,focusedDate:u,formatWeekday:h}=t,p=l??ba(),m=bo(Gf,n,d),g=Gt(()=>({weekday:h}),[h]),S=bo(g,n,d),y=Sn(Wf,d),b=Sn(Hf,d),I=Gt(()=>c.start.add({months:r}),[c,r]),T=Gt(()=>jf(I,n),[I,n]),P=tr("focusday",Cs),x=tr("selectday",Cs),A=tr("hoverday",Cs);function M(C){P(ds(C,a,o))}function E(C){let Z;switch(C.key){case"ArrowRight":Z=u.add({days:So(C)?1:-1});break;case"ArrowLeft":Z=u.add({days:So(C)?-1:1});break;case"ArrowDown":Z=u.add({days:7});break;case"ArrowUp":Z=u.add({days:-7});break;case"PageUp":Z=u.add(C.shiftKey?{years:-1}:{months:-1});break;case"PageDown":Z=u.add(C.shiftKey?{years:1}:{months:1});break;case"Home":Z=wa(u,n);break;case"End":Z=ml(u,n);break;default:return}M(Z),C.preventDefault()}function q(C){const Z=I.equals(C);if(!t.showOutsideDays&&!Z)return;const ae=C.equals(u),Ce=C.equals(p),xe=wt(C),Se=s?.(xe),be=!wo(C,a,o);let J="",N;if(t.type==="range"){const[G,ue]=t.value,_e=G?.equals(C),me=ue?.equals(C);N=G&&ue&&wo(C,G,ue),J=`${_e?"range-start":""} ${me?"range-end":""} ${N&&!_e&&!me?"range-inner":""}`}else t.type==="multi"?N=t.value.some(G=>G.equals(C)):N=t.value?.equals(C);return{part:`${`button day day-${xe.getDay()} ${Z?N?"selected":"":"outside"} ${Se?"disallowed":""} ${Ce?"today":""} ${t.getDayParts?.(xe)??""}`} ${J}`,tabindex:Z&&ae?0:-1,disabled:be,"aria-disabled":Se?"true":void 0,"aria-pressed":Z&&N,"aria-current":Ce?"date":void 0,"aria-label":y.format(xe),onkeydown:E,onclick(){Se||x(C),M(C)},onmouseover(){!Se&&!be&&A(C)}}}return{weeks:T,yearMonth:I,daysLong:m,daysVisible:S,formatter:b,getDayProps:q}}const Ms=ba(),Sa=Bf({type:"date",firstDayOfWeek:1,focusedDate:Ms,page:{start:Ms.toPlainYearMonth(),end:Ms.toPlainYearMonth()}});customElements.define("calendar-ctx",Sa);const Qf=(e,t)=>(t+e)%7,Yf=$n(e=>{const t=qf(Sa),r=of(),n=Kf({props:e,context:t});function s(){r.current.querySelector("button[tabindex='0']")?.focus()}return vn("host",{shadowDom:!0,focus:s,children:[ye("div",{id:"h",part:"heading",children:n.formatter.format(wt(n.yearMonth))}),vn("table",{ref:r,"aria-labelledby":"h",part:"table",children:[ye("thead",{children:ye("tr",{part:"tr head",children:n.daysLong.map((a,o)=>vn("th",{part:`th day day-${Qf(t.firstDayOfWeek,o)}`,scope:"col",children:[ye("span",{class:"vh",children:a}),ye("span",{"aria-hidden":"true",children:n.daysVisible[o]})]}))})}),ye("tbody",{children:n.weeks.map((a,o)=>ye("tr",{part:"tr week",children:a.map((l,c)=>{const d=n.getDayProps(l);return ye("td",{part:"td",children:d&&ye("button",{...d,children:l.day})},c)})},o))})]})]})},{props:{offset:{type:Number,value:0}},styles:[hl,pl,us`:host{--color-accent: black;--color-text-on-accent: white;display:flex;flex-direction:column;gap:.25rem;text-align:center;inline-size:fit-content}table{border-collapse:collapse;font-size:.875rem}th{font-weight:700;block-size:2.25rem}td{padding-inline:0}button{color:inherit;font-size:inherit;background:transparent;border:0;font-variant-numeric:tabular-nums;block-size:2.25rem;inline-size:2.25rem}button:hover:where(:not(:disabled,[aria-disabled])){background:#0000000d}button:is([aria-pressed=true],:focus-visible){background:var(--color-accent);color:var(--color-text-on-accent)}button:focus-visible{outline:1px solid var(--color-text-on-accent);outline-offset:-2px}button:disabled,:host::part(outside),:host::part(disallowed){cursor:default;opacity:.5}`]});customElements.define("calendar-month",Yf);function Eo(e){return ye("button",{part:`button ${e.name} ${e.onclick?"":"disabled"}`,onclick:e.onclick,"aria-disabled":e.onclick?null:"true",children:ye("slot",{name:e.name,children:e.children})})}function Ea(e){const t=wt(e.page.start),r=wt(e.page.end);return vn("div",{role:"group","aria-labelledby":"h",part:"container",children:[ye("div",{id:"h",class:"vh","aria-live":"polite","aria-atomic":"true",children:e.formatVerbose.formatRange(t,r)}),vn("div",{part:"header",children:[ye(Eo,{name:"previous",onclick:e.previous,children:"Previous"}),ye("slot",{part:"heading",name:"heading",children:ye("div",{"aria-hidden":"true",children:e.format.formatRange(t,r)})}),ye(Eo,{name:"next",onclick:e.next,children:"Next"})]}),ye(Sa,{value:e,onselectday:e.onSelect,onfocusday:e.onFocus,onhoverday:e.onHover,children:ye("slot",{})})]})}const Pa={value:{type:String,value:""},min:{type:String,value:""},max:{type:String,value:""},today:{type:String,value:""},isDateDisallowed:{type:Function,value:e=>!1},formatWeekday:{type:String,value:()=>"narrow"},getDayParts:{type:Function,value:e=>""},firstDayOfWeek:{type:Number,value:()=>1},showOutsideDays:{type:Boolean,value:!1},locale:{type:String,value:()=>{}},months:{type:Number,value:1},focusedDate:{type:String,value:()=>{}},pageBy:{type:String,value:()=>"months"}},xa=[hl,pl,us`:host{display:block;inline-size:fit-content}[role=group]{display:flex;flex-direction:column;gap:1em}:host::part(header){display:flex;align-items:center;justify-content:space-between}:host::part(heading){font-weight:700;font-size:1.25em}button{display:flex;align-items:center;justify-content:center}button[aria-disabled]{cursor:default;opacity:.5}`],Zf={year:"numeric"},Jf={year:"numeric",month:"long"};function Ds(e,t){return(t.year-e.year)*12+t.month-e.month}const Po=(e,t)=>(e=t===12?new fs(e.year,1):e,{start:e,end:e.add({months:t-1})});function Xf({pageBy:e,focusedDate:t,months:r,max:n,min:s,goto:a}){const o=e==="single"?1:r,[l,c]=_a(()=>Po(t.toPlainYearMonth(),r)),d=h=>c(Po(l.start.add({months:h}),r)),u=h=>{const p=Ds(l.start,h.toPlainYearMonth());return p>=0&&p<r};return wn(()=>{if(u(t))return;const h=Ds(t.toPlainYearMonth(),l.start);a(t.add({months:h}))},[l.start]),wn(()=>{if(u(t))return;const h=Ds(l.start,t.toPlainYearMonth());d(h===-1?-o:h===r?o:Math.floor(h/r)*r)},[t,o,r]),{page:l,previous:!s||!u(s)?()=>d(-o):void 0,next:!n||!u(n)?()=>d(o):void 0}}function $a({months:e,pageBy:t,locale:r,focusedDate:n,setFocusedDate:s}){const[a]=rr("min"),[o]=rr("max"),[l]=rr("today"),c=tr("focusday"),d=tr("change"),u=Gt(()=>ds(n??l??ba(),a,o),[n,l,a,o]);function h(b){s(b),c(wt(b))}const{next:p,previous:m,page:g}=Xf({pageBy:t,focusedDate:u,months:e,min:a,max:o,goto:h}),S=xn();function y(b){const I=b?.target??"day";I==="day"?S.current.querySelectorAll("calendar-month").forEach(T=>T.focus(b)):S.current.shadowRoot.querySelector(`[part~='${I}']`).focus(b)}return{format:Sn(Zf,r),formatVerbose:Sn(Jf,r),page:g,focusedDate:u,dispatch:d,onFocus(b){b.stopPropagation(),h(b.detail),setTimeout(y)},min:a,max:o,today:l,next:p,previous:m,focus:y}}const Ff=$n(e=>{const[t,r]=rr("value"),[n=t,s]=rr("focusedDate"),a=$a({...e,focusedDate:n,setFocusedDate:s});function o(l){r(l.detail),a.dispatch()}return ye("host",{shadowDom:!0,focus:a.focus,children:ye(Ea,{...e,...a,type:"date",value:t,onSelect:o})})},{props:Pa,styles:xa});customElements.define("calendar-date",Ff);const xo=(e,t)=>Oe.compare(e,t)<0?[e,t]:[t,e],ev=$n(e=>{const[t,r]=Uf("value"),[n=t[0],s]=rr("focusedDate"),a=$a({...e,focusedDate:n,setFocusedDate:s}),o=tr("rangestart"),l=tr("rangeend"),[c,d]=rr("tentative"),[u,h]=_a();wn(()=>h(void 0),[c]);function p(y){a.onFocus(y),m(y)}function m(y){y.stopPropagation(),c&&h(y.detail)}function g(y){const b=y.detail;y.stopPropagation(),c?(r(xo(c,b)),d(void 0),l(wt(b)),a.dispatch()):(d(b),o(wt(b)))}const S=c?xo(c,u??c):t;return ye("host",{shadowDom:!0,focus:a.focus,children:ye(Ea,{...e,...a,type:"range",value:S,onFocus:p,onHover:m,onSelect:g})})},{props:{...Pa,tentative:{type:String,value:""}},styles:xa});customElements.define("calendar-range",ev);const tv=$n(e=>{const[t,r]=Vf("value"),[n=t[0],s]=rr("focusedDate"),a=$a({...e,focusedDate:n,setFocusedDate:s});function o(l){const c=[...t],d=t.findIndex(u=>u.equals(l.detail));d<0?c.push(l.detail):c.splice(d,1),r(c),a.dispatch()}return ye("host",{shadowDom:!0,focus:a.focus,children:ye(Ea,{...e,...a,type:"multi",value:t,onSelect:o})})},{props:Pa,styles:xa});customElements.define("calendar-multi",tv);async function rv(e,t){await t.modalState?.addStock()}var nv=$('<span class="loading loading-spinner loading-sm"></span>'),sv=$('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),av=$('<span class="loading loading-spinner loading-xs"></span>'),ov=$('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),iv=$('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),lv=$(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input validator"><!> <input placeholder="Quantité" type="number" step="0.01" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="select select-bordered" required><option disabled selected><!>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea" placeholder="remarques..."></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function cv(e,t){W(t,!0);const r=z(()=>t.modalState.forms.stock);let n=z(()=>i(r)&&i(r).quantity&&i(r).quantity>0&&i(r).unit);async function s(J){await t.modalState?.removeStock(J)}var a=lv(),o=f(a),l=f(o);Ys(l,{class:"h-5 w-5"});var c=v(o,2),d=f(c),u=v(f(d),2),h=f(u),p=f(h);cs(p,{class:"h-4 w-4 opacity-50"});var m=v(p,2),g=v(h,2),S=f(g),y=f(S);Zi(y,{class:"h-4 w-4 opacity-50"}),S.value=S.__value="";var b=v(S);b.value=b.__value="kg";var I=v(b);I.value=I.__value="gr.";var T=v(I);T.value=T.__value="l.";var P=v(T);P.value=P.__value="ml";var x=v(P);x.value=x.__value="unité";var A=v(x);A.value=A.__value="bottes";var M=v(u,2),E=f(M),q=v(M,2),C=f(q);C.__click=[rv,t];var Z=f(C);{var ae=J=>{var N=nv();_(J,N)},Ce=J=>{var N=at("Ajouter au stock");_(J,N)};O(Z,J=>{t.modalState.loading?J(ae):J(Ce,!1)})}var xe=v(c,2);{var Se=J=>{var N=sv(),G=f(N);Ys(G,{class:"mx-auto mb-2 h-12 w-12"}),_(J,N)},be=J=>{var N=iv(),G=f(N),ue=v(f(G));Re(ue,23,()=>t.modalState.stockEntries,_e=>_e.dateTime,(_e,me,et)=>{var He=ov(),de=f(He),Ee=f(de),qe=v(de),Me=f(qe),De=v(qe),Be=f(De),Pe=v(De),Ge=f(Pe);Ge.__click=()=>s(i(et));var mt=f(Ge);{var lr=fe=>{var $e=av();_(fe,$e)},F=fe=>{var $e=at("Supprimer");_(fe,$e)};O(mt,fe=>{t.modalState.loading?fe(lr):fe(F,!1)})}j(fe=>{D(Ee,`${i(me).quantity??""}
                ${i(me).unit??""}`),D(Me,fe),D(Be,i(me).notes||"-"),Ge.disabled=t.modalState.loading},[()=>Qn(i(me).dateTime)]),_(_e,He)}),_(J,N)};O(xe,J=>{t.modalState.stockEntries.length===0?J(Se):J(be,!1)})}j(()=>{ha(E,`          ${i(r).notes??""}
        `),C.disabled=t.modalState.loading||!i(n)}),Qe(m,()=>i(r).quantity,J=>i(r).quantity=J),js(g,()=>i(r).unit,J=>i(r).unit=J),Qe(E,()=>i(r).notes,J=>i(r).notes=J),_(e,a),H()}Rt(["click"]);var uv=(e,t)=>{e.key==="Enter"&&t()},dv=$("<option> </option>"),fv=(e,t,r)=>t(r),vv=$('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),hv=$('<span class="loading loading-spinner loading-sm"></span>'),pv=$('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function mv(e,t){W(t,!0);let r=se("");const n=z(()=>i(r).trim().length>0&&!t.modalState.whoList.includes(i(r).trim()));async function s(){!i(n)||!t.modalState||(await t.modalState.addVolunteer(i(r).trim()),k(r,""))}async function a(P){await t.modalState?.removeVolunteer(P)}var o=pv(),l=f(o),c=f(l),d=v(f(c),2),u=f(d);ga(u,{class:"h-4 w-4 opacity-50"});var h=v(u,2);h.__keydown=[uv,s];var p=v(h,2);Re(p,21,()=>R.uniqueWho,qr,(P,x)=>{var A=dv(),M=f(A),E={};j(()=>{D(M,i(x)),E!==(E=i(x))&&(A.value=(A.__value=i(x))??"")}),_(P,A)});var m=v(d,2),g=v(f(m),2);Re(g,20,()=>t.modalState.whoList,P=>P,(P,x)=>{var A=vv(),M=f(A),E=v(M);E.__click=[fv,a,x];var q=f(E);ht(q,{class:"h-3 w-3"}),j(()=>{D(M,`${x??""} `),E.disabled=t.modalState.loading}),_(P,A)});var S=v(m,2),y=f(S);y.__click=s;var b=f(y);{var I=P=>{var x=hv();_(P,x)},T=P=>{var x=at("Ajouter");_(P,x)};O(b,P=>{t.modalState.loading?P(I):P(T,!1)})}j(()=>y.disabled=t.modalState.loading||!i(n)),Qe(h,()=>i(r),P=>k(r,P)),_(e,o),H()}Rt(["keydown","click"]);var gv=(e,t)=>{e.key==="Enter"&&t()},_v=$("<option> </option>"),yv=$('<span class="loading loading-spinner loading-sm"></span>'),bv=(e,t,r)=>{k(t,""),k(r,"")},wv=$(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function Sv(e,t){W(t,!0);const r=z(()=>t.modalState.forms.store),n=z(()=>i(r).name||""),s=z(()=>i(r).comment||"");let a=se(vt(i(n))),o=se(vt(i(s)));const l=z(()=>i(a).trim()!==(i(r).name||"")||i(o).trim()!==(i(r).comment||""));async function c(){if(!i(l))return;const E={storeName:i(a).trim(),storeComment:i(o).trim()};await t.modalState.updateStore(E)}var d=wv(),u=f(d),h=f(u),p=v(f(h),4),m=f(p),g=f(m);bn(g,{class:"h-4 w-4 opacity-50"});var S=v(g,2);S.__keydown=[gv,c];var y=v(S,2);Re(y,21,()=>R.uniqueStores,qr,(E,q)=>{var C=_v(),Z=f(C),ae={};j(()=>{D(Z,i(q)),ae!==(ae=i(q))&&(C.value=(C.__value=i(q))??"")}),_(E,C)});var b=v(m,2),I=v(p,2),T=f(I);T.__click=c;var P=f(T);{var x=E=>{var q=yv();_(E,q)},A=E=>{var q=at("Mettre à jour");_(E,q)};O(P,E=>{t.modalState.loading?E(x):E(A,!1)})}var M=v(T,2);M.__click=[bv,a,o],j(()=>{ha(b,`          ${i(o)??""}
        `),T.disabled=t.modalState.loading||!i(l),M.disabled=t.modalState.loading}),Qe(S,()=>i(a),E=>k(a,E)),Qe(b,()=>i(o),E=>k(o,E)),_(e,d),H()}Rt(["keydown","click"]);var Ev=$('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Pv=$('<tr><td class="font-medium"> </td><td> </td><td>-</td><td>-</td><td> </td></tr>'),xv=$('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),$v=$('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>');function kv(e,t){W(t,!0);const r=z(()=>t.modalState.recipes);var n=$v(),s=f(n),a=f(s);ma(a,{class:"h-5 w-5"});var o=v(s,2);{var l=d=>{var u=Ev(),h=f(u);cs(h,{class:"mx-auto mb-2 h-12 w-12"}),_(d,u)},c=d=>{var u=xv(),h=f(u),p=v(f(h));Re(p,21,()=>i(r),m=>m.r,(m,g)=>{var S=Pv(),y=f(S),b=f(y),I=v(y),T=f(I),P=v(I,3),x=f(P);j(()=>{D(b,i(g).r),D(T,`${(i(g).q||i(g).qEq)??""} ${(i(g).u||i(g).uEq)??""}`),D(x,i(g).a||"-")}),_(m,S)}),_(d,u)};O(o,d=>{i(r).length===0?d(l):d(c,!1)})}_(e,n),H()}var Nv=$('<div class="badge badge-success gap-1"><!> Actif</div>'),Av=$('<div class="badge badge-warning gap-1"><!> </div>'),Tv=(e,t)=>t("recettes"),Iv=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Cv=(e,t)=>t("achats"),Mv=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Dv=(e,t)=>t("stock"),Rv=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Ov=(e,t)=>t("volontaires"),qv=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Bv=(e,t)=>t("magasins"),Lv=$('<div class="alert alert-error mb-4"><!> <span> </span></div>'),jv=$('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function zv(e,t){W(t,!0);let r=z(()=>Mt.product.tab),n=z(()=>Mt.product.id),s=z(()=>Mt.product.isOpen),a=z(()=>i(n)?Ld(i(n)):null),o=z(()=>i(a)?.product);function l(h){Mt.product.tab=h}var c=V(),d=U(c);{var u=h=>{var p=jv(),m=f(p),g=f(m),S=f(g),y=f(S),b=v(S,2),I=f(b),T=f(I),P=v(I,2);{var x=B=>{var L=Nv(),ke=f(L);Pd(ke,{class:"h-3 w-3"}),_(B,L)},A=B=>{var L=Av(),ke=f(L);Qi(ke,{class:"h-3 w-3"});var St=v(ke);j(()=>D(St,` ${i(o).status??""}`)),_(B,L)};O(P,B=>{i(o).status==="active"?B(x):B(A,!1)})}var M=v(P,2),E=v(f(M)),q=v(b,2);q.__click=function(...B){ho?.apply(this,B)};var C=f(q);ht(C,{class:"h-4 w-4"});var Z=v(g,2),ae=f(Z);ae.__click=[Tv,l];var Ce=f(ae);ma(Ce,{class:"mr-1 h-5 w-5"});var xe=v(Ce,2);{var Se=B=>{var L=Iv(),ke=f(L);j(()=>D(ke,i(a).recipes.length)),_(B,L)};O(xe,B=>{i(a).recipes.length>0&&B(Se)})}var be=v(ae,2);be.__click=[Cv,l];var J=f(be);Kn(J,{class:"mr-1 h-5 w-5"});var N=v(J,2);{var G=B=>{var L=Mv(),ke=f(L);j(()=>D(ke,i(a).purchasesList.length)),_(B,L)};O(N,B=>{i(a).purchasesList.length>0&&B(G)})}var ue=v(be,2);ue.__click=[Dv,l];var _e=f(ue);Ys(_e,{class:"mr-1 h-5 w-5"});var me=v(_e,2);{var et=B=>{var L=Rv(),ke=f(L);j(()=>D(ke,i(a).stockEntries.length)),_(B,L)};O(me,B=>{i(a).stockEntries.length>0&&B(et)})}var He=v(ue,2);He.__click=[Ov,l];var de=f(He);Yi(de,{class:"mr-1 h-5 w-5"});var Ee=v(de,2);{var qe=B=>{var L=qv(),ke=f(L);j(()=>D(ke,i(o).who.length)),_(B,L)};O(Ee,B=>{i(o).who&&i(o).who.length>0&&B(qe)})}var Me=v(He,2);Me.__click=[Bv,l];var De=f(Me);bn(De,{class:"mr-1 h-5 w-5"});var Be=v(Z,2),Pe=f(Be);{var Ge=B=>{var L=Lv(),ke=f(L);ht(ke,{class:"h-4 w-4"});var St=v(ke,2),cr=f(St);j(()=>D(cr,`erreur : ${i(a).error??""}`)),_(B,L)};O(Pe,B=>{i(a).error&&B(Ge)})}var mt=v(Pe,2),lr=f(mt);{var F=B=>{kv(B,{get modalState(){return i(a)}})},fe=B=>{var L=V(),ke=U(L);{var St=tt=>{rf(tt,{get modalState(){return i(a)}})},cr=tt=>{var $r=V(),gt=U($r);{var Bt=Je=>{cv(Je,{get modalState(){return i(a)}})},Lt=Je=>{var Et=V(),jt=U(Et);{var Pt=Le=>{mv(Le,{get modalState(){return i(a)}})},zt=Le=>{var xt=V(),$t=U(xt);{var Yt=it=>{Sv(it,{get modalState(){return i(a)}})};O($t,it=>{i(r)==="magasins"&&it(Yt)},!0)}_(Le,xt)};O(jt,Le=>{i(r)==="volontaires"?Le(Pt):Le(zt,!1)},!0)}_(Je,Et)};O(gt,Je=>{i(r)==="stock"?Je(Bt):Je(Lt,!1)},!0)}_(tt,$r)};O(ke,tt=>{i(r)==="achats"?tt(St):tt(cr,!1)},!0)}_(B,L)};O(lr,B=>{i(r)==="recettes"?B(F):B(fe,!1)})}var $e=v(Be,2),qt=f($e);qt.__click=function(...B){ho?.apply(this,B)},j(()=>{D(y,i(o).productName),D(T,i(o).productType),D(E,` ${i(o).displayTotalNeeded??""}`),Te(ae,1,`tab ${i(r)==="recettes"?"tab-active":""}`),Te(be,1,`tab ${i(r)==="achats"?"tab-active":""}`),Te(ue,1,`tab ${i(r)==="stock"?"tab-active":""}`),Te(He,1,`tab ${i(r)==="volontaires"?"tab-active":""}`),Te(Me,1,`tab ${i(r)==="magasins"?"tab-active":""}`)}),_(h,p)};O(d,h=>{i(s)&&i(o)&&i(a)&&h(u)})}_(e,c),H()}Rt(["click"]);var Uv=()=>R.setGroupBy("none"),Vv=()=>R.setGroupBy("store"),Wv=()=>R.setGroupBy("productType"),Hv=(e,t)=>R.toggleProductType(t),Gv=$("<button><!> </button>"),Kv=()=>R.toggleTemperature("frais"),Qv=()=>R.toggleTemperature("surgele"),Yv=()=>R.clearTypeAndTemperatureFilters(),Zv=$('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Jv=(e,t)=>R.toggleStore(t),Xv=$("<button> </button>"),Fv=$('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),eh=(e,t)=>R.toggleWho(t),th=$("<button> </button>"),rh=$('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),nh=(e,t)=>{R.clearFilters(),k(t,!1)},sh=$('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function ah(e,t){W(t,!0);let r=se(!1);const n=z(()=>R.filters),s=z(()=>R.uniqueStores),a=z(()=>R.uniqueWho),o=z(()=>R.uniqueProductTypes);var l=sh(),c=U(l),d=f(c),u=v(d,2),h=v(f(u),2),p=f(h),m=f(p),g=f(m);Zs(g,{class:"w-5 h-5"});var S=v(m,2),y=f(S);ht(y,{class:"w-4 h-4"});var b=v(p,2),I=v(f(b),2),T=f(I);T.__change=[Uv];var P=v(T,2);P.__change=[Vv];var x=v(P,2);x.__change=[Wv];var A=v(b,2),M=f(A),E=v(f(M),2);Re(E,20,()=>i(o),de=>de,(de,Ee)=>{const qe=z(()=>jn(Ee));var Me=Gv();Me.__click=[Hv,Ee];var De=f(Me);On(De,()=>i(qe).icon,(Pe,Ge)=>{Ge(Pe,{class:"w-3 h-3 mr-1"})});var Be=v(De);j(Pe=>{Te(Me,1,`btn btn-sm ${Pe??""}`),D(Be,` ${i(qe).displayName??""}`)},[()=>i(n).selectedProductTypes.length===0?"btn-soft btn-accent":i(n).selectedProductTypes.includes(Ee)?"btn-accent":"btn-dash btn-accent"]),_(de,Me)});var q=v(E,2),C=f(q);C.__click=[Kv];var Z=f(C);Bn(Z,{class:"w-3 h-3"});var ae=v(C,2);ae.__click=[Qv];var Ce=f(ae);Ln(Ce,{class:"w-3 h-3"});var xe=v(ae,2);{var Se=de=>{var Ee=Zv();Ee.__click=[Yv];var qe=f(Ee);ht(qe,{class:"w-3 h-3"}),_(de,Ee)};O(xe,de=>{(i(n).selectedProductTypes.length>0||i(n).selectedTemperatures.length>0)&&de(Se)})}var be=v(A,2);{var J=de=>{var Ee=Fv(),qe=f(Ee),Me=v(f(qe),2);Re(Me,20,()=>i(s),De=>De,(De,Be)=>{var Pe=Xv();Pe.__click=[Jv,Be];var Ge=f(Pe);j(mt=>{Te(Pe,1,`btn btn-sm ${mt??""}`),D(Ge,Be)},[()=>i(n).selectedStores.length===0?"btn-soft btn-accent":i(n).selectedStores.includes(Be)?"btn-accent":"btn-dash btn-accent"]),_(De,Pe)}),_(de,Ee)};O(be,de=>{i(s).length>0&&de(J)})}var N=v(be,2);{var G=de=>{var Ee=rh(),qe=f(Ee),Me=v(f(qe),2);Re(Me,20,()=>i(a),De=>De,(De,Be)=>{var Pe=th();Pe.__click=[eh,Be];var Ge=f(Pe);j(mt=>{Te(Pe,1,`btn btn-sm ${mt??""}`),D(Ge,Be)},[()=>i(n).selectedWho.length===0?"btn-soft btn-accent":i(n).selectedWho.includes(Be)?"btn-accent":"btn-dash btn-accent"]),_(De,Pe)}),_(de,Ee)};O(N,de=>{i(a).length>0&&de(G)})}var ue=v(N,4);ue.__click=[nh,r];var _e=f(ue);ht(_e,{class:"w-4 h-4 mr-2"});var me=v(c,2),et=f(me),He=f(et);Zs(He,{class:"w-6 h-6"}),j((de,Ee)=>{Br(T,i(n).groupBy==="none"),Br(P,i(n).groupBy==="store"),Br(x,i(n).groupBy==="productType"),Te(C,1,`btn btn-sm ${de??""}`),Te(ae,1,`btn btn-sm ${Ee??""}`)},[()=>i(n).selectedTemperatures.length===0?"btn-soft btn-success":i(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(n).selectedTemperatures.length===0?"btn-soft btn-info":i(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),uu(d,()=>i(r),de=>k(r,de)),_(e,l),H()}Rt(["change","click"]);Rt(["mousedown"]);const nn=e=>{var t=oh(),r=f(t);Ki(r,{class:"h-4 w-4 text-amber-600"}),_(e,t)};var oh=$('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),ih=()=>R.clearFilters(),lh=e=>R.setSearchQuery(e.currentTarget.value),ch=()=>R.setGroupBy("none"),uh=()=>R.setGroupBy("store"),dh=()=>R.setGroupBy("productType"),fh=(e,t)=>R.toggleProductType(t),vh=$("<button><!> </button>"),hh=()=>R.toggleTemperature("frais"),ph=()=>R.toggleTemperature("surgele"),mh=()=>R.clearTypeAndTemperatureFilters(),gh=$('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),_h=$('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),yh=(e,t)=>R.toggleStore(t),bh=$("<button><!> </button>"),wh=()=>R.clearStoreFilters(),Sh=$('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Eh=$('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Ph=(e,t)=>R.toggleWho(t),xh=$("<button><!> </button>"),$h=()=>R.clearWhoFilters(),kh=$('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Nh=$('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Ah=()=>R.handleSort("productName"),Th=()=>R.handleSort("store"),Ih=()=>R.handleSort("who"),Ch=()=>R.handleSort("productType"),Mh=$('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Dh=$('<tr class="bg-base-200 sticky top-10 z-10 font-semibold"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Rh=(e,t,r)=>t("recettes",i(r).$id),Oh=$('<div class="text-base-content/60 text-xs"> </div>'),qh=$('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Bh=$('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Lh=(e,t,r)=>t("magasins",i(r).$id),jh=$('<div class="tooltip tooltip-info"> </div>'),zh=(e,t,r)=>t("volontaires",i(r).$id),Uh=$('<span class="badge badge-soft badge-info badge-sm"> </span>'),Vh=$('<div class="flex flex-wrap gap-1 pr-8"></div>'),Wh=(e,t,r)=>t("recettes",i(r).$id),Hh=$('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Gh=(e,t,r)=>t("achats",i(r).$id),Kh=$('<div class="bg-warning m-auto rounded px-2 py-1"> </div>'),Qh=$('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"> <!></td><td class="group relative text-center"><!></td></tr>'),Yh=$("<!> <!>",1),Zh=$('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Jh=$('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function Xh(e,t){W(t,!0);const r=z(()=>R.filteredProducts),n=z(()=>R.filteredGroupedProducts),s=z(()=>R.stats),a=z(()=>R.uniqueStores),o=z(()=>R.uniqueWho),l=z(()=>R.uniqueProductTypes),c=z(()=>R.filters);function d(K,he){Od(K,he)}var u=Jh(),h=U(u),p=f(h),m=f(p),g=f(m);vo(g,{class:"mr-1 h-4 w-4"});var S=v(g),y=v(m,2),b=f(y);Bn(b,{class:"mr-1 h-4 w-4"});var I=v(b),T=v(y,2),P=f(T);Ln(P,{class:"mr-1 h-4 w-4"});var x=v(P),A=v(T,2),M=f(A);xd(M,{class:"mr-1 h-4 w-4"});var E=v(M),q=v(p,2),C=f(q),Z=f(C),ae=f(Z),Ce=f(ae);Zs(Ce,{class:"h-5 w-5"});var xe=v(ae,2);xe.__click=[ih];var Se=f(xe);ht(Se,{class:"h-4 w-4"});var be=v(C,2),J=f(be),N=v(f(J),2),G=f(N);Dd(G,{class:"h-4 w-4"});var ue=v(G,2);ue.__input=[lh];var _e=v(J,2),me=v(f(_e),2),et=f(me);et.__change=[ch];var He=v(et,2);He.__change=[uh];var de=v(He,2);de.__change=[dh];var Ee=v(be,2),qe=f(Ee),Me=f(qe);{var De=K=>{var he=_h(),rt=f(he),ct=v(f(rt),2),Ke=f(ct);Re(Ke,16,()=>i(l),Ne=>Ne,(Ne,Ae)=>{const kt=z(()=>jn(Ae));var Ut=vh();Ut.__click=[fh,Ae];var vr=f(Ut);On(vr,()=>i(kt).icon,(ut,Vt)=>{Vt(ut,{class:"mr-1 h-5 w-5"})});var Ir=v(vr);j(ut=>{Te(Ut,1,`btn btn-sm ${ut??""}`),D(Ir,` ${i(kt).displayName??""}`)},[()=>i(c).selectedProductTypes.length===0?"btn-soft btn-accent":i(c).selectedProductTypes.includes(Ae)?"btn-accent":"btn-dash btn-accent"]),_(Ne,Ut)});var nt=v(Ke,2);nt.__click=[hh];var _t=f(nt);Bn(_t,{class:"h-5 w-5"});var we=v(nt,2);we.__click=[ph];var Y=f(we);Ln(Y,{class:"h-5 w-5"});var ve=v(we,2);{var Q=Ne=>{var Ae=gh();Ae.__click=[mh];var kt=f(Ae);ht(kt,{class:"h-3 w-3"}),_(Ne,Ae)};O(ve,Ne=>{(i(c).selectedProductTypes.length>0||i(c).selectedTemperatures.length>0)&&Ne(Q)})}j((Ne,Ae)=>{Te(nt,1,`btn btn-sm ms-4 ${Ne??""}`),Te(we,1,`btn btn-sm ${Ae??""}`)},[()=>i(c).selectedTemperatures.length===0?"btn-soft btn-success":i(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(c).selectedTemperatures.length===0?"btn-soft btn-info":i(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),_(K,he)};O(Me,K=>{i(l).length>0&&K(De)})}var Be=v(qe,2),Pe=f(Be);{var Ge=K=>{var he=Eh(),rt=f(he),ct=v(f(rt),2),Ke=f(ct);Re(Ke,16,()=>i(a),we=>we,(we,Y)=>{var ve=bh();ve.__click=[yh,Y];var Q=f(ve);bn(Q,{class:"mr-1 h-3 w-3"});var Ne=v(Q);j(Ae=>{Te(ve,1,`btn btn-xs ${Ae??""}`),D(Ne,` ${Y??""}`)},[()=>i(c).selectedStores.length===0?"btn-soft btn-accent":i(c).selectedStores.includes(Y)?"btn-accent":"btn-dash btn-accent"]),_(we,ve)});var nt=v(Ke,2);{var _t=we=>{var Y=Sh();Y.__click=[wh];var ve=f(Y);ht(ve,{class:"h-3 w-3"}),_(we,Y)};O(nt,we=>{i(c).selectedStores.length>0&&we(_t)})}_(K,he)};O(Pe,K=>{i(a).length>0&&K(Ge)})}var mt=v(Pe,2);{var lr=K=>{var he=Nh(),rt=f(he),ct=v(f(rt),2),Ke=f(ct);Re(Ke,16,()=>i(o),we=>we,(we,Y)=>{var ve=xh();ve.__click=[Ph,Y];var Q=f(ve);ga(Q,{class:"mr-1 h-3 w-3"});var Ne=v(Q);j(Ae=>{Te(ve,1,`btn btn-xs ${Ae??""}`),D(Ne,` ${Y??""}`)},[()=>i(c).selectedWho.length===0?" btn-soft btn-info":i(c).selectedWho.includes(Y)?" btn-info":"btn-dash btn-info"]),_(we,ve)});var nt=v(Ke,2);{var _t=we=>{var Y=kh();Y.__click=[$h];var ve=f(Y);ht(ve,{class:"h-3 w-3"}),_(we,Y)};O(nt,we=>{i(c).selectedWho.length>0&&we(_t)})}_(K,he)};O(mt,K=>{i(o).length>0&&K(lr)})}var F=v(q,2),fe=f(F),$e=f(fe),qt=f($e),B=f(qt);B.__click=[Ah];var L=f(B),ke=f(L);vo(ke,{class:"h-4 w-4"});var St=v(ke,2);{var cr=K=>{var he=at();j(()=>D(he,i(c).sortDirection==="asc"?"↑":"↓")),_(K,he)};O(St,K=>{i(c).sortColumn==="productName"&&K(cr)})}var tt=v(B);tt.__click=[Th];var $r=f(tt),gt=f($r);bn(gt,{class:"h-4 w-4"});var Bt=v(gt,2);{var Lt=K=>{var he=at();j(()=>D(he,i(c).sortDirection==="asc"?"↑":"↓")),_(K,he)};O(Bt,K=>{i(c).sortColumn==="store"&&K(Lt)})}var Je=v(tt);Je.__click=[Ih];var Et=f(Je),jt=f(Et);Yi(jt,{class:"h-4 w-4"});var Pt=v(jt,2);{var zt=K=>{var he=at();j(()=>D(he,i(c).sortDirection==="asc"?"↑":"↓")),_(K,he)};O(Pt,K=>{i(c).sortColumn==="who"&&K(zt)})}var Le=v(Je);Le.__click=[Ch];var xt=f(Le),$t=v(f(xt));{var Yt=K=>{var he=at();j(()=>D(he,i(c).sortDirection==="asc"?"↑":"↓")),_(K,he)};O($t,K=>{i(c).sortColumn==="productType"&&K(Yt)})}var it=v(Le,2),kr=f(it),Jr=f(kr);Kn(Jr,{class:"h-4 w-4"});var Nr=v(it),ur=f(Nr),Ar=f(ur);Nd(Ar,{class:"h-4 w-4"});var dr=v($e);Re(dr,21,()=>Object.entries(i(n)),([K,he])=>K,(K,he)=>{var rt=z(()=>Ao(i(he),2));let ct=()=>i(rt)[0],Ke=()=>i(rt)[1];var nt=Yh(),_t=U(nt);{var we=ve=>{const Q=z(()=>jn(ct()));var Ne=Dh(),Ae=f(Ne),kt=f(Ae),Ut=f(kt);{var vr=ut=>{var Vt=at();j(()=>D(Vt,`🏪 ${ct()??""} (${Ke().length??""})`)),_(ut,Vt)},Ir=ut=>{var Vt=V(),vs=U(Vt);{var hs=Zt=>{var hr=Mh(),Nn=f(hr);On(Nn,()=>i(Q).icon,(ms,gs)=>{gs(ms,{class:"h-4 w-4"})});var An=v(Nn,2),Cr=f(An),Tn=v(An,2),ps=f(Tn);j(()=>{D(Cr,i(Q).displayName),D(ps,`(${Ke().length??""})`)}),_(Zt,hr)},kn=Zt=>{var hr=at();j(()=>D(hr,`📦 ${ct()??""} (${Ke().length??""})`)),_(Zt,hr)};O(vs,Zt=>{i(c).groupBy==="productType"?Zt(hs):Zt(kn,!1)},!0)}_(ut,Vt)};O(Ut,ut=>{i(c).groupBy==="store"?ut(vr):ut(Ir,!1)})}_(ve,Ne)};O(_t,ve=>{ct()!==""&&ve(we)})}var Y=v(_t,2);Re(Y,17,()=>Bd(Ke(),i(c)),ve=>ve.$id,(ve,Q)=>{const Ne=z(()=>jn(i(Q).productType));var Ae=Qh(),kt=f(Ae);kt.__click=[Rh,d,Q];var Ut=f(kt),vr=f(Ut),Ir=f(vr),ut=f(Ir),Vt=v(Ir,2);{var vs=X=>{var pe=Oh(),Ue=f(pe);j(()=>D(Ue,`Ancien: ${i(Q).previousNames[0]??""}`)),_(X,pe)};O(Vt,X=>{i(Q).previousNames&&i(Q).previousNames.length>0&&X(vs)})}var hs=v(vr,2),kn=f(hs);{var Zt=X=>{var pe=qh(),Ue=f(pe);Bn(Ue,{class:"text-success h-4 w-4"}),_(X,pe)};O(kn,X=>{i(Q).pFrais&&X(Zt)})}var hr=v(kn,2);{var Nn=X=>{var pe=Bh(),Ue=f(pe);Ln(Ue,{class:"text-info h-4 w-4"}),_(X,pe)};O(hr,X=>{i(Q).pSurgel&&X(Nn)})}var An=v(Ut,2);nn(An);var Cr=v(kt);Cr.__click=[Lh,d,Q];var Tn=f(Cr);{var ps=X=>{var pe=jh(),Ue=f(pe);j(()=>{Hn(pe,"data-tip",i(Q).storeInfo.storeComment),D(Ue,i(Q).storeInfo.storeName||"-")}),_(X,pe)},ms=X=>{var pe=at();j(()=>D(pe,i(Q).storeInfo?.storeName||"-")),_(X,pe)};O(Tn,X=>{i(Q).storeInfo?.storeComment?X(ps):X(ms,!1)})}var gs=v(Tn,2);nn(gs);var _s=v(Cr);_s.__click=[zh,d,Q];var ka=f(_s);{var _l=X=>{var pe=Vh();Re(pe,20,()=>i(Q).who,Ue=>Ue,(Ue,In)=>{var Cn=Uh(),Ss=f(Cn);j(()=>D(Ss,In)),_(Ue,Cn)}),_(X,pe)},yl=X=>{var pe=at("-");_(X,pe)};O(ka,X=>{i(Q).who&&i(Q).who.length>0?X(_l):X(yl,!1)})}var bl=v(ka,2);nn(bl);var ys=v(_s),wl=f(ys),Na=f(wl);On(Na,()=>i(Ne).icon,(X,pe)=>{pe(X,{class:"h-3 w-3"})});var Sl=v(Na),bs=v(ys);bs.__click=[Wh,d,Q];var Aa=f(bs),El=f(Aa),Ta=v(Aa,2);{var Pl=X=>{var pe=Hh(),Ue=f(pe),In=f(Ue),Cn=v(In);ma(Cn,{class:"h-3 w-3"});var Ss=v(Ue,2),Ca=f(Ss),Il=v(Ca);Rd(Il,{class:"h-3 w-3"}),j(()=>{D(In,`${i(Q)?.nbRecipes??""} `),D(Ca,`${i(Q)?.totalAssiettes??""} `)}),_(X,pe)};O(Ta,X=>{(i(Q).nbRecipes||i(Q).totalAssiettes)&&X(Pl)})}var xl=v(Ta,2);nn(xl);var ws=v(bs);ws.__click=[Gh,d,Q];var Ia=f(ws),$l=v(Ia);nn($l);var kl=v(ws),Nl=f(kl);{var Al=X=>{var pe=Kh(),Ue=f(pe);j(()=>D(Ue,i(Q).displayMissingQuantity)),_(X,pe)},Tl=X=>{Ed(X,{size:28,strokeWidth:3,class:"text-success m-auto"})};O(Nl,X=>{i(Q).displayMissingQuantity!=="✅ Complet"?X(Al):X(Tl,!1)})}j(()=>{D(ut,i(Q).productName),Te(Cr,1,`${i(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Te(ys,1,pi(i(c).groupBy==="productType"?"hidden":"")),D(Sl,` ${i(Ne).displayName??""}`),D(El,i(Q).displayTotalNeeded??"-"),D(Ia,`${(i(Q).displayTotalPurchases||"-")??""} `)}),_(ve,Ae)}),_(K,nt)});var Tr=v(fe,2);{var Xr=K=>{var he=Zh();_(K,he)};O(Tr,K=>{i(r).length===0&&K(Xr)})}var fr=v(h,2);zv(fr,{});var lt=v(fr,2);ah(lt,{}),j(()=>{D(S,` ${i(s).total??""}`),D(I,` frais:
      ${i(s).frais??""}`),D(x,` surgelés:
      ${i(s).surgel??""}`),D(E,` fusionnés:
      ${i(s).merged??""}`),ha(ue,i(c).searchQuery),Br(et,i(c).groupBy==="none"),Br(He,i(c).groupBy==="store"),Br(de,i(c).groupBy==="productType"),Te(tt,1,`hover:bg-base-100 cursor-pointer text-center ${i(c).groupBy==="store"?"hidden":""}`),Te(Le,1,`hover:bg-base-100 cursor-pointer text-center ${i(c).groupBy==="productType"?"hidden":""}`)}),_(e,u),H()}Rt(["click","input","change"]);vc();var Fh=$('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function ep(e){var t=Fh();_(e,t)}var tp=$('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function rp(e,t){var r=tp(),n=v(f(r),2),s=v(f(n),2),a=f(s);j(()=>D(a,t.message)),_(e,r)}var np=$('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function sp(e,t){var r=np(),n=f(r),s=f(n);Qi(s,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var a=v(s,2),o=v(f(a),2),l=f(o);j(()=>D(l,t.message||"Erreur inconnue")),_(e,r)}var ap=$('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),op=$('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),ip=$('<div class="text-base-content/60"> </div>'),lp=$('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),cp=$('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),up=$('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),dp=$('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function fp(e,t){W(t,!0);let r,n=se(null),s=se(!0),a=se(!1);bi(async()=>{r=Yu();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await R.initialize(r)}catch(N){const G=N instanceof Error?N.message:"Erreur lors de l'initialisation";k(n,G,!0),console.error("[App] Erreur initialisation:",N)}finally{k(s,!1)}}),hu(()=>{R.destroy()});async function o(){if(!(!r||i(a))){k(a,!0);try{await R.forceReload(r)}catch(N){console.error("[App] Erreur lors du rechargement forcé:",N)}finally{k(a,!1)}}}const l=z(()=>i(n)||R.error),c=z(()=>i(s)||R.loading),d=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var u=dp(),h=f(u),p=f(h),m=f(p),g=v(f(m),2),S=f(g);{var y=N=>{var G=ap();_(N,G)};O(S,N=>{R.realtimeConnected&&N(y)})}var b=v(S,2);{var I=N=>{var G=op();_(N,G)};O(b,N=>{R.syncing&&N(I)})}var T=v(b,2);{var P=N=>{var G=ip(),ue=f(G);j(_e=>D(ue,`Maj: ${_e??""}`),[()=>new Date(R.lastSync).toLocaleTimeString()]),_(N,G)};O(T,N=>{R.lastSync&&N(P)})}var x=v(T,2);{var A=N=>{var G=lp();let ue;G.__click=o;var _e=f(G);Id(_e,{class:"h-4 w-4"}),j(me=>{ue=Te(G,1,"btn btn-outline btn-sm",null,ue,me),G.disabled=i(a)||R.loading},[()=>({loading:i(a)||R.loading})]),_(N,G)};O(x,N=>{i(n)||N(A)})}var M=v(x,2);{var E=N=>{var G=cp(),ue=f(G),_e=f(ue);Ad(_e,{class:"mr-2 h-4 w-4"}),j(()=>Hn(ue,"href",d)),_(N,G)};O(M,N=>{i(n)&&N(E)})}var q=v(h,2),C=f(q);{var Z=N=>{sp(N,{get message(){return i(l)}})},ae=N=>{var G=V(),ue=U(G);{var _e=me=>{rp(me,{get message(){return i(l)}})};O(ue,me=>{i(l)&&me(_e)},!0)}_(N,G)};O(C,N=>{i(n)?N(Z):N(ae,!1)})}var Ce=v(C,2);{var xe=N=>{ep(N)};O(Ce,N=>{i(c)&&N(xe)})}var Se=v(Ce,2);{var be=N=>{Xh(N,{})},J=N=>{var G=V(),ue=U(G);{var _e=me=>{var et=up();_(me,et)};O(ue,me=>{!R.loading&&!i(n)&&me(_e)},!0)}_(N,G)};O(Se,N=>{R.enrichedProducts.length>0?N(be):N(J,!1)})}_(e,u),H()}Rt(["click"]);Jc(fp,{target:document.getElementById("app_products")});
