(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const Po=!1;var Zn=Array.isArray,Cl=Array.prototype.indexOf,ns=Array.from,qa=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Ml=Object.getOwnPropertyDescriptors,Dl=Object.prototype,Il=Array.prototype,xo=Object.getPrototypeOf,Ds=Object.isExtensible;function Fr(e){return typeof e=="function"}const ne=()=>{};function Rl(e){for(var t=0;t<e.length;t++)e[t]()}function $o(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function ko(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Fe=2,as=4,ss=8,wr=16,Kt=32,Sr=64,os=128,pt=256,Vn=512,We=1024,ot=2048,sr=4096,bt=8192,Er=16384,is=32768,Pr=65536,Is=1<<17,Ol=1<<18,Hr=1<<19,ql=1<<20,Ba=1<<21,Xn=1<<22,_r=1<<23,gr=Symbol("$state"),No=Symbol("legacy props"),Bl=Symbol(""),ln=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function To(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ll(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function jl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function zl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ul(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Vl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Wl(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Kl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ql(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Fn=1,ea=2,Ao=4,Yl=8,Jl=16,Zl=1,Xl=2,Fl=4,ec=8,tc=16,rc=1,nc=2,je=Symbol(),ac="http://www.w3.org/1999/xhtml",sc="http://www.w3.org/2000/svg",oc="@attach";function ic(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function lc(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let cc=!1;function Co(e){return e===this.v}function uc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Mo(e){return!uc(e,this.v)}let Kr=!1,dc=!1;function fc(){Kr=!0}let Ce=null;function Lr(e){Ce=e}function W(e,t=!1,r){Ce={p:Ce,c:null,e:null,s:e,x:null,l:Kr&&!t?{s:null,u:null,$:[]}:null}}function G(e){var t=Ce,r=t.e;if(r!==null){t.e=null;for(var n of r)Yo(n)}return Ce=t.p,{}}function Pn(){return!Kr||Ce!==null&&Ce.l===null}let mr=[];function Do(){var e=mr;mr=[],Rl(e)}function yr(e){if(mr.length===0&&!cn){var t=mr;queueMicrotask(()=>{t===mr&&Do()})}mr.push(e)}function vc(){for(;mr.length>0;)Do()}const hc=new WeakMap;function Io(e){var t=ee;if(t===null)return te.f|=_r,e;if((t.f&is)===0){if((t.f&os)===0)throw!t.parent&&e instanceof Error&&Ro(e),e;t.b.error(e)}else jr(e,t)}function jr(e,t){for(;t!==null;){if((t.f&os)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&Ro(e),e}function Ro(e){const t=hc.get(e);t&&(qa(e,"message",{value:t.message}),qa(e,"stack",{value:t.stack}))}const In=new Set;let _e=null,On=null,La=new Set,At=[],ta=null,ja=!1,cn=!1;class ft{current=new Map;#e=new Map;#r=new Set;#d=0;#f=null;#c=[];#o=[];#i=[];#n=[];#l=[];#a=[];skipped_effects=new Set;process(t){At=[],On=null;var r=ft.apply(this);for(const s of t)this.#s(s);if(this.#d===0){this.#v();var n=this.#o,a=this.#i;this.#o=[],this.#i=[],this.#n=[],On=this,_e=null,Rs(n),Rs(a),On=null,this.#f?.resolve()}else this.#u(this.#o),this.#u(this.#i),this.#u(this.#n);r();for(const s of this.#c)mn(s);this.#c=[]}#s(t){t.f^=We;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Kt|Sr))!==0,s=a&&(n&We)!==0,o=s||(n&bt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){a?r.f^=We:(n&as)!==0?this.#i.push(r):(n&We)===0&&((n&Xn)!==0&&r.b?.is_pending()?this.#c.push(r):sa(r)&&((r.f&wr)!==0&&this.#n.push(r),mn(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#u(t){for(const r of t)((r.f&ot)!==0?this.#l:this.#a).push(r),Je(r,We);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){_e=this}deactivate(){_e=null}flush(){if(At.length>0){if(this.activate(),Oo(),_e!==null&&_e!==this)return}else this.#d===0&&this.#v();this.deactivate();for(const t of La)if(La.delete(t),t(),_e!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),In.size>1){this.#e.clear();let t=!0;for(const r of In){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;qo(n)}if(At.length>0){_e=r;const n=ft.apply(r);for(const a of At)r.#s(a);At=[],n()}}_e=null}In.delete(this)}increment(){this.#d+=1}decrement(){this.#d-=1;for(const t of this.#l)Je(t,ot),br(t);for(const t of this.#a)Je(t,sr),br(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#f??=$o()).promise}static ensure(){if(_e===null){const t=_e=new ft;In.add(_e),cn||ft.enqueue(()=>{_e===t&&t.flush()})}return _e}static enqueue(t){yr(t)}static apply(t){return ne}}function pc(e){var t=cn;cn=!0;try{for(var r;;){if(vc(),At.length===0&&(_e?.flush(),At.length===0))return ta=null,r;Oo()}}finally{cn=t}}function Oo(){var e=Or;ja=!0;try{var t=0;for(Ls(!0);At.length>0;){var r=ft.ensure();if(t++>1e3){var n,a;mc()}r.process(At),Ft.clear()}}finally{ja=!1,Ls(e),ta=null}}function mc(){try{Vl()}catch(e){jr(e,ta)}}let pr=null;function Rs(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Er|bt))===0&&sa(n)&&(pr=[],mn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Xo(n):n.fn=null),pr?.length>0)){Ft.clear();for(const a of pr)mn(a);pr=[]}}pr=null}}function qo(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&Fe)!==0?qo(t):(r&(Xn|wr))!==0&&(Je(t,ot),br(t))}}function br(e){for(var t=ta=e;t.parent!==null;){t=t.parent;var r=t.f;if(ja&&t===ee&&(r&wr)!==0)return;if((r&(Sr|Kt))!==0){if((r&We)===0)return;t.f^=We}}At.push(t)}function Bo(e){let t=0,r=nr(0),n;return()=>{Mc()&&(i(r),vs(()=>(t===0&&(n=Qr(()=>e(()=>Ct(r)))),t+=1,()=>{yr(()=>{t-=1,t===0&&(n?.(),n=void 0,Ct(r))})})))}}var _c=Pr|Hr|os;function gc(e,t,r){new yc(e,t,r)}class yc{parent;#e=!1;#r;#d=null;#f;#c;#o;#i=null;#n=null;#l=null;#a=null;#s=0;#u=0;#v=!1;#h=null;#p=()=>{this.#h&&zr(this.#h,this.#s)};#E=Bo(()=>(this.#h=nr(this.#s),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#f=r,this.#c=n,this.parent=ee.b,this.#e=!!this.#f.pending,this.#o=ir(()=>{ee.b=this;{try{this.#i=Ve(()=>n(this.#r))}catch(a){this.error(a)}this.#u>0?this.#y():this.#e=!1}},_c)}#t(){try{this.#i=Ve(()=>this.#c(this.#r))}catch(t){this.error(t)}this.#e=!1}#P(){const t=this.#f.pending;t&&(this.#n=Ve(()=>t(this.#r)),ft.enqueue(()=>{this.#i=this.#g(()=>(ft.ensure(),Ve(()=>this.#c(this.#r)))),this.#u>0?this.#y():(er(this.#n,()=>{this.#n=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#f.pending}#g(t){var r=ee,n=te,a=Ce;It(this.#o),Xe(this.#o),Lr(this.#o.ctx);try{return t()}catch(s){return Io(s),null}finally{It(r),Xe(n),Lr(a)}}#y(){const t=this.#f.pending;this.#i!==null&&(this.#a=document.createDocumentFragment(),bc(this.#i,this.#a)),this.#n===null&&(this.#n=Ve(()=>t(this.#r)))}#b(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#b(t);return}this.#u+=t,this.#u===0&&(this.#e=!1,this.#n&&er(this.#n,()=>{this.#n=null}),this.#a&&(this.#r.before(this.#a),this.#a=null),yr(()=>{ft.ensure().flush()}))}update_pending_count(t){this.#b(t),this.#s+=t,La.add(this.#p)}get_effect_pending(){return this.#E(),i(this.#h)}error(t){var r=this.#f.onerror;let n=this.#f.failed;if(this.#v||!r&&!n)throw t;this.#i&&(ze(this.#i),this.#i=null),this.#n&&(ze(this.#n),this.#n=null),this.#l&&(ze(this.#l),this.#l=null);var a=!1,s=!1;const o=()=>{if(a){lc();return}a=!0,s&&Ql(),ft.ensure(),this.#s=0,this.#l!==null&&er(this.#l,()=>{this.#l=null}),this.#e=this.has_pending_snippet(),this.#i=this.#g(()=>(this.#v=!1,Ve(()=>this.#c(this.#r)))),this.#u>0?this.#y():this.#e=!1};var l=te;try{Xe(null),s=!0,r?.(t,o),s=!1}catch(c){jr(c,this.#o&&this.#o.parent)}finally{Xe(l)}n&&yr(()=>{this.#l=this.#g(()=>{this.#v=!0;try{return Ve(()=>{n(this.#r,()=>t,()=>o)})}catch(c){return jr(c,this.#o.parent),null}finally{this.#v=!1}})})}}function bc(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:xn(r);t.append(r),r=a}}function Lo(e,t,r){const n=Pn()?ra:ls;if(t.length===0){r(e.map(n));return}var a=_e,s=ee,o=wc();Promise.all(t.map(l=>Sc(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(c){(s.f&Er)===0&&jr(c,s)}a?.deactivate(),jo()}).catch(l=>{jr(l,s)})}function wc(){var e=ee,t=te,r=Ce,n=_e;return function(){It(e),Xe(t),Lr(r),n?.activate()}}function jo(){It(null),Xe(null),Lr(null)}function ra(e){var t=Fe|ot,r=te!==null&&(te.f&Fe)!==0?te:null;return ee===null||r!==null&&(r.f&pt)!==0?t|=pt:ee.f|=Hr,{ctx:Ce,deps:null,effects:null,equals:Co,f:t,fn:e,reactions:null,rv:0,v:je,wv:0,parent:r??ee,ac:null}}function Sc(e,t){let r=ee;r===null&&Ll();var n=r.b,a=void 0,s=nr(je),o=!te,l=new Map;return Ic(()=>{var c=$o();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(h){c.reject(h)}var u=_e,f=n.is_pending();o&&(n.update_pending_count(1),f||(u.increment(),l.get(u)?.reject(ln),l.set(u,c)));const p=(h,m=void 0)=>{f||u.activate(),m?m!==ln&&(s.f|=_r,zr(s,m)):((s.f&_r)!==0&&(s.f^=_r),zr(s,h)),o&&(n.update_pending_count(-1),f||u.decrement()),jo()};c.promise.then(p,h=>p(null,h||"unknown"))}),Ko(()=>{for(const c of l.values())c.reject(ln)}),new Promise(c=>{function u(f){function p(){f===a?c(s):u(a)}f.then(p,p)}u(a)})}function z(e){const t=ra(e);return ti(t),t}function ls(e){const t=ra(e);return t.equals=Mo,t}function zo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)ze(t[r])}}function Ec(e){for(var t=e.parent;t!==null;){if((t.f&Fe)===0)return t;t=t.parent}return null}function cs(e){var t,r=ee;It(Ec(e));try{zo(e),t=si(e)}finally{It(r)}return t}function Uo(e){var t=cs(e);if(e.equals(t)||(e.v=t,e.wv=ni()),!xr){var r=(Zt||(e.f&pt)!==0)&&e.deps!==null?sr:We;Je(e,r)}}const Ft=new Map;function nr(e,t){var r={f:0,v:e,reactions:null,equals:Co,rv:0,wv:0};return r}function ae(e,t){const r=nr(e);return ti(r),r}function Pc(e,t=!1,r=!0){const n=nr(e);return t||(n.equals=Mo),Kr&&r&&Ce!==null&&Ce.l!==null&&(Ce.l.s??=[]).push(n),n}function M(e,t,r=!1){te!==null&&(!yt||(te.f&Is)!==0)&&Pn()&&(te.f&(Fe|wr|Xn|Is))!==0&&!Wt?.includes(e)&&Kl();let n=r?vt(t):t;return zr(e,n)}function zr(e,t){if(!e.equals(t)){var r=e.v;xr?Ft.set(e,t):Ft.set(e,r),e.v=t;var n=ft.ensure();n.capture(e,r),(e.f&Fe)!==0&&((e.f&ot)!==0&&cs(e),Je(e,(e.f&pt)===0?We:sr)),e.wv=ni(),Vo(e,ot),Pn()&&ee!==null&&(ee.f&We)!==0&&(ee.f&(Kt|Sr))===0&&(dt===null?qc([e]):dt.push(e))}return t}function Ct(e){M(e,e.v+1)}function Vo(e,t){var r=e.reactions;if(r!==null)for(var n=Pn(),a=r.length,s=0;s<a;s++){var o=r[s],l=o.f;if(!(!n&&o===ee)){var c=(l&ot)===0;c&&Je(o,t),(l&Fe)!==0?Vo(o,sr):c&&((l&wr)!==0&&pr!==null&&pr.push(o),br(o))}}}function vt(e){if(typeof e!="object"||e===null||gr in e)return e;const t=xo(e);if(t!==Dl&&t!==Il)return e;var r=new Map,n=Zn(e),a=ae(0),s=Gt,o=l=>{if(Gt===s)return l();var c=te,u=Gt;Xe(null),zs(s);var f=l();return Xe(c),zs(u),f};return n&&r.set("length",ae(e.length)),new Proxy(e,{defineProperty(l,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Gl();var f=r.get(c);return f===void 0?f=o(()=>{var p=ae(u.value);return r.set(c,p),p}):M(f,u.value,!0),!0},deleteProperty(l,c){var u=r.get(c);if(u===void 0){if(c in l){const f=o(()=>ae(je));r.set(c,f),Ct(a)}}else M(u,je),Ct(a);return!0},get(l,c,u){if(c===gr)return e;var f=r.get(c),p=c in l;if(f===void 0&&(!p||Xt(l,c)?.writable)&&(f=o(()=>{var m=vt(p?l[c]:je),_=ae(m);return _}),r.set(c,f)),f!==void 0){var h=i(f);return h===je?void 0:h}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var f=r.get(c);f&&(u.value=i(f))}else if(u===void 0){var p=r.get(c),h=p?.v;if(p!==void 0&&h!==je)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(l,c){if(c===gr)return!0;var u=r.get(c),f=u!==void 0&&u.v!==je||Reflect.has(l,c);if(u!==void 0||ee!==null&&(!f||Xt(l,c)?.writable)){u===void 0&&(u=o(()=>{var h=f?vt(l[c]):je,m=ae(h);return m}),r.set(c,u));var p=i(u);if(p===je)return!1}return f},set(l,c,u,f){var p=r.get(c),h=c in l;if(n&&c==="length")for(var m=u;m<p.v;m+=1){var _=r.get(m+"");_!==void 0?M(_,je):m in l&&(_=o(()=>ae(je)),r.set(m+"",_))}if(p===void 0)(!h||Xt(l,c)?.writable)&&(p=o(()=>ae(void 0)),M(p,vt(u)),r.set(c,p));else{h=p.v!==je;var S=o(()=>vt(u));M(p,S)}var y=Reflect.getOwnPropertyDescriptor(l,c);if(y?.set&&y.set.call(f,u),!h){if(n&&typeof c=="string"){var b=r.get("length"),C=Number(c);Number.isInteger(C)&&C>=b.v&&M(b,C+1)}Ct(a)}return!0},ownKeys(l){i(a);var c=Reflect.ownKeys(l).filter(p=>{var h=r.get(p);return h===void 0||h.v!==je});for(var[u,f]of r)f.v!==je&&!(u in l)&&c.push(u);return c},setPrototypeOf(){Hl()}})}function Os(e){try{if(e!==null&&typeof e=="object"&&gr in e)return e[gr]}catch{}return e}function xc(e,t){return Object.is(Os(e),Os(t))}var qs,Wo,Go,Ho;function $c(){if(qs===void 0){qs=window,Wo=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Go=Xt(t,"firstChild").get,Ho=Xt(t,"nextSibling").get,Ds(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Ds(r)&&(r.__t=void 0)}}function or(e=""){return document.createTextNode(e)}function Ur(e){return Go.call(e)}function xn(e){return Ho.call(e)}function d(e,t){return Ur(e)}function U(e,t=!1){{var r=Ur(e);return r instanceof Comment&&r.data===""?xn(r):r}}function v(e,t=1,r=!1){let n=e;for(;t--;)n=xn(n);return n}function kc(e){e.textContent=""}function us(){return!1}function Nc(e,t){if(t){const r=document.body;e.autofocus=!0,yr(()=>{document.activeElement===r&&e.focus()})}}let Bs=!1;function Tc(){Bs||(Bs=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function na(e){var t=te,r=ee;Xe(null),It(null);try{return e()}finally{Xe(t),It(r)}}function ds(e,t,r,n=r){e.addEventListener(t,()=>na(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Tc()}function Ac(e){ee===null&&te===null&&Ul(),te!==null&&(te.f&pt)!==0&&ee===null&&zl(),xr&&jl()}function Cc(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Qt(e,t,r,n=!0){var a=ee;a!==null&&(a.f&bt)!==0&&(e|=bt);var s={ctx:Ce,deps:null,nodes_start:null,nodes_end:null,f:e|ot,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{mn(s),s.f|=is}catch(c){throw ze(s),c}else t!==null&&br(s);if(n){var o=s;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Hr)===0&&(o=o.first),o!==null&&(o.parent=a,a!==null&&Cc(o,a),te!==null&&(te.f&Fe)!==0&&(e&Sr)===0)){var l=te;(l.effects??=[]).push(o)}}return s}function Mc(){return te!==null&&!yt}function Ko(e){const t=Qt(ss,null,!1);return Je(t,We),t.teardown=e,t}function Qo(e){Ac();var t=ee.f,r=!te&&(t&Kt)!==0&&(t&is)===0;if(r){var n=Ce;(n.e??=[]).push(e)}else return Yo(e)}function Yo(e){return Qt(as|ql,e,!1)}function Dc(e){ft.ensure();const t=Qt(Sr|Hr,e,!0);return(r={})=>new Promise(n=>{r.outro?er(t,()=>{ze(t),n(void 0)}):(ze(t),n(void 0))})}function fs(e){return Qt(as,e,!1)}function Ic(e){return Qt(Xn|Hr,e,!0)}function vs(e,t=0){return Qt(ss|t,e,!0)}function j(e,t=[],r=[]){Lo(t,r,n=>{Qt(ss,()=>e(...n.map(i)),!0)})}function ir(e,t=0){var r=Qt(wr|t,e,!0);return r}function Ve(e,t=!0){return Qt(Kt|Hr,e,!0,t)}function Jo(e){var t=e.teardown;if(t!==null){const r=xr,n=te;js(!0),Xe(null);try{t.call(null)}finally{js(r),Xe(n)}}}function Zo(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&na(()=>{a.abort(ln)});var n=r.next;(r.f&Sr)!==0?r.parent=null:ze(r,t),r=n}}function Rc(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Kt)===0&&ze(t),t=r}}function ze(e,t=!0){var r=!1;(t||(e.f&Ol)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Oc(e.nodes_start,e.nodes_end),r=!0),Zo(e,t&&!r),Wn(e,0),Je(e,Er);var n=e.transitions;if(n!==null)for(const s of n)s.stop();Jo(e);var a=e.parent;a!==null&&a.first!==null&&Xo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Oc(e,t){for(;e!==null;){var r=e===t?null:xn(e);e.remove(),e=r}}function Xo(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function er(e,t){var r=[];hs(e,r,!0),Fo(r,()=>{ze(e),t&&t()})}function Fo(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function hs(e,t,r){if((e.f&bt)===0){if(e.f^=bt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var a=n.next,s=(n.f&Pr)!==0||(n.f&Kt)!==0;hs(n,t,s?r:!1),n=a}}}function aa(e){ei(e,!0)}function ei(e,t){if((e.f&bt)!==0){e.f^=bt,(e.f&We)===0&&(Je(e,ot),br(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&Pr)!==0||(r.f&Kt)!==0;ei(r,a?t:!1),r=n}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}let Or=!1;function Ls(e){Or=e}let xr=!1;function js(e){xr=e}let te=null,yt=!1;function Xe(e){te=e}let ee=null;function It(e){ee=e}let Wt=null;function ti(e){te!==null&&(Wt===null?Wt=[e]:Wt.push(e))}let Ye=null,at=0,dt=null;function qc(e){dt=e}let ri=1,pn=0,Gt=pn;function zs(e){Gt=e}let Zt=!1;function ni(){return++ri}function sa(e){var t=e.f;if((t&ot)!==0)return!0;if((t&sr)!==0){var r=e.deps,n=(t&pt)!==0;if(r!==null){var a,s,o=(t&Vn)!==0,l=n&&ee!==null&&!Zt,c=r.length;if((o||l)&&(ee===null||(ee.f&Er)===0)){var u=e,f=u.parent;for(a=0;a<c;a++)s=r[a],(o||!s?.reactions?.includes(u))&&(s.reactions??=[]).push(u);o&&(u.f^=Vn),l&&f!==null&&(f.f&pt)===0&&(u.f^=pt)}for(a=0;a<c;a++)if(s=r[a],sa(s)&&Uo(s),s.wv>e.wv)return!0}(!n||ee!==null&&!Zt)&&Je(e,We)}return!1}function ai(e,t,r=!0){var n=e.reactions;if(n!==null&&!Wt?.includes(e))for(var a=0;a<n.length;a++){var s=n[a];(s.f&Fe)!==0?ai(s,t,!1):t===s&&(r?Je(s,ot):(s.f&We)!==0&&Je(s,sr),br(s))}}function si(e){var t=Ye,r=at,n=dt,a=te,s=Zt,o=Wt,l=Ce,c=yt,u=Gt,f=e.f;Ye=null,at=0,dt=null,Zt=(f&pt)!==0&&(yt||!Or||te===null),te=(f&(Kt|Sr))===0?e:null,Wt=null,Lr(e.ctx),yt=!1,Gt=++pn,e.ac!==null&&(na(()=>{e.ac.abort(ln)}),e.ac=null);try{e.f|=Ba;var p=e.fn,h=p(),m=e.deps;if(Ye!==null){var _;if(Wn(e,at),m!==null&&at>0)for(m.length=at+Ye.length,_=0;_<Ye.length;_++)m[at+_]=Ye[_];else e.deps=m=Ye;if(!Zt||(f&Fe)!==0&&e.reactions!==null)for(_=at;_<m.length;_++)(m[_].reactions??=[]).push(e)}else m!==null&&at<m.length&&(Wn(e,at),m.length=at);if(Pn()&&dt!==null&&!yt&&m!==null&&(e.f&(Fe|sr|ot))===0)for(_=0;_<dt.length;_++)ai(dt[_],e);return a!==null&&a!==e&&(pn++,dt!==null&&(n===null?n=dt:n.push(...dt))),(e.f&_r)!==0&&(e.f^=_r),h}catch(S){return Io(S)}finally{e.f^=Ba,Ye=t,at=r,dt=n,te=a,Zt=s,Wt=o,Lr(l),yt=c,Gt=u}}function Bc(e,t){let r=t.reactions;if(r!==null){var n=Cl.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&Fe)!==0&&(Ye===null||!Ye.includes(t))&&(Je(t,sr),(t.f&(pt|Vn))===0&&(t.f^=Vn),zo(t),Wn(t,0))}function Wn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Bc(e,r[n])}function mn(e){var t=e.f;if((t&Er)===0){Je(e,We);var r=ee,n=Or;ee=e,Or=!0;try{(t&wr)!==0?Rc(e):Zo(e),Jo(e);var a=si(e);e.teardown=typeof a=="function"?a:null,e.wv=ri;var s;Po&&dc&&(e.f&ot)!==0&&e.deps}finally{Or=n,ee=r}}}async function Lc(){await Promise.resolve(),pc()}function i(e){var t=e.f,r=(t&Fe)!==0;if(te!==null&&!yt){var n=ee!==null&&(ee.f&Er)!==0;if(!n&&!Wt?.includes(e)){var a=te.deps;if((te.f&Ba)!==0)e.rv<pn&&(e.rv=pn,Ye===null&&a!==null&&a[at]===e?at++:Ye===null?Ye=[e]:(!Zt||!Ye.includes(e))&&Ye.push(e));else{(te.deps??=[]).push(e);var s=e.reactions;s===null?e.reactions=[te]:s.includes(te)||s.push(te)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&pt)===0&&(o.f^=pt)}if(xr){if(Ft.has(e))return Ft.get(e);if(r){o=e;var c=o.v;return((o.f&We)===0&&o.reactions!==null||oi(o))&&(c=cs(o)),Ft.set(o,c),c}}else r&&(o=e,sa(o)&&Uo(o));if((e.f&_r)!==0)throw e.v;return e.v}function oi(e){if(e.v===je)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ft.has(t)||(t.f&Fe)!==0&&oi(t))return!0;return!1}function Qr(e){var t=yt;try{return yt=!0,e()}finally{yt=t}}const jc=-7169;function Je(e,t){e.f=e.f&jc|t}function zc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Uc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Vc(e){return Uc.includes(e)}const Wc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Gc(e){return e=e.toLowerCase(),Wc[e]??e}const Hc=["touchstart","touchmove"];function Kc(e){return Hc.includes(e)}const ii=new Set,za=new Set;function li(e,t,r,n={}){function a(s){if(n.capture||an.call(t,s),!s.cancelBubble)return na(()=>r?.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?yr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Us(e,t,r,n={}){var a=li(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function Rt(e){for(var t=0;t<e.length;t++)ii.add(e[t]);for(var r of za)r(e)}let Vs=null;function an(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],s=a[0]||e.target;Vs=e;var o=0,l=Vs===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var u=a.indexOf(t);if(u===-1)return;c<=u&&(o=c)}if(s=a[o]||e.target,s!==t){qa(e,"currentTarget",{configurable:!0,get(){return s||r}});var f=te,p=ee;Xe(null),It(null);try{for(var h,m=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var S=s["__"+n];if(S!=null&&(!s.disabled||e.target===s))if(Zn(S)){var[y,...b]=S;y.apply(s,[e,...b])}else S.call(s,e)}catch(C){h?m.push(C):h=C}if(e.cancelBubble||_===t||_===null)break;s=_}if(h){for(let C of m)queueMicrotask(()=>{throw C});throw h}}finally{e.__root=t,delete e.currentTarget,Xe(f),It(p)}}}function ci(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Vr(e,t){var r=ee;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function $(e,t){var r=(t&rc)!==0,n=(t&nc)!==0,a,s=!e.startsWith("<!>");return()=>{a===void 0&&(a=ci(s?e:"<!>"+e),r||(a=Ur(a)));var o=n||Wo?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Ur(o),c=o.lastChild;Vr(l,c)}else Vr(o,o);return o}}function Qc(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var o=ci(a),l=Ur(o);s=Ur(l)}var c=s.cloneNode(!0);return Vr(c,c),c}}function Yc(e,t){return Qc(e,t,"svg")}function st(e=""){{var t=or(e+"");return Vr(t,t),t}}function V(){var e=document.createDocumentFragment(),t=document.createComment(""),r=or();return e.append(t,r),Vr(t,r),e}function g(e,t){e!==null&&e.before(t)}function O(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Jc(e,t){return Zc(e,t)}const Dr=new Map;function Zc(e,{target:t,anchor:r,props:n={},events:a,context:s,intro:o=!0}){$c();var l=new Set,c=p=>{for(var h=0;h<p.length;h++){var m=p[h];if(!l.has(m)){l.add(m);var _=Kc(m);t.addEventListener(m,an,{passive:_});var S=Dr.get(m);S===void 0?(document.addEventListener(m,an,{passive:_}),Dr.set(m,1)):Dr.set(m,S+1)}}};c(ns(ii)),za.add(c);var u=void 0,f=Dc(()=>{var p=r??t.appendChild(or());return gc(p,{pending:()=>{}},h=>{if(s){W({});var m=Ce;m.c=s}a&&(n.$$events=a),u=e(h,n)||{},s&&G()}),()=>{for(var h of l){t.removeEventListener(h,an);var m=Dr.get(h);--m===0?(document.removeEventListener(h,an),Dr.delete(h)):Dr.set(h,m)}za.delete(c),p!==r&&p.parentNode?.removeChild(p)}});return Xc.set(u,f),u}let Xc=new WeakMap;function q(e,t,r=!1){var n=e,a=null,s=null,o=je,l=r?Pr:0,c=!1;const u=(m,_=!0)=>{c=!0,h(_,m)};var f=null;function p(){f!==null&&(f.lastChild.remove(),n.before(f),f=null);var m=o?a:s,_=o?s:a;m&&aa(m),_&&er(_,()=>{o?s=null:a=null})}const h=(m,_)=>{if(o!==(o=m)){var S=us(),y=n;if(S&&(f=document.createDocumentFragment(),f.append(y=or())),o?a??=_&&Ve(()=>_(y)):s??=_&&Ve(()=>_(y)),S){var b=_e,C=o?a:s,A=o?s:a;C&&b.skipped_effects.delete(C),A&&b.skipped_effects.add(A),b.add_callback(p)}else p()}};ir(()=>{c=!1,t(u),c||h(null,null)},l)}function qr(e,t){return t}function Fc(e,t,r){for(var n=e.items,a=[],s=t.length,o=0;o<s;o++)hs(t[o].e,a,!0);var l=s>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;kc(c),c.append(r),n.clear(),Tt(e,t[0].prev,t[s-1].next)}Fo(a,()=>{for(var u=0;u<s;u++){var f=t[u];l||(n.delete(f.k),Tt(e,f.prev,f.next)),ze(f.e,!l)}})}function Re(e,t,r,n,a,s=null){var o=e,l={flags:t,items:new Map,first:null},c=(t&Ao)!==0;if(c){var u=e;o=u.appendChild(or())}var f=null,p=!1,h=new Map,m=ls(()=>{var b=r();return Zn(b)?b:b==null?[]:ns(b)}),_,S;function y(){eu(S,_,l,h,o,a,t,n,r),s!==null&&(_.length===0?f?aa(f):f=Ve(()=>s(o)):f!==null&&er(f,()=>{f=null}))}ir(()=>{S??=ee,_=i(m);var b=_.length;if(!(p&&b===0)){p=b===0;var C,A,P,x;if(us()){var T=new Set,I=_e;for(A=0;A<b;A+=1){P=_[A],x=n(P,A);var E=l.items.get(x)??h.get(x);E?(t&(Fn|ea))!==0&&ui(E,P,A,t):(C=di(null,l,null,null,P,x,A,a,t,r,!0),h.set(x,C)),T.add(x)}for(const[R,k]of l.items)T.has(R)||I.skipped_effects.add(k.e);I.add_callback(y)}else y();i(m)}})}function eu(e,t,r,n,a,s,o,l,c){var u=(o&Yl)!==0,f=(o&(Fn|ea))!==0,p=t.length,h=r.items,m=r.first,_=m,S,y=null,b,C=[],A=[],P,x,T,I;if(u)for(I=0;I<p;I+=1)P=t[I],x=l(P,I),T=h.get(x),T!==void 0&&(T.a?.measure(),(b??=new Set).add(T));for(I=0;I<p;I+=1){if(P=t[I],x=l(P,I),T=h.get(x),T===void 0){var E=n.get(x);if(E!==void 0){n.delete(x),h.set(x,E);var R=y?y.next:_;Tt(r,y,E),Tt(r,E,R),Ea(E,R,a),y=E}else{var k=_?_.e.nodes_start:a;y=di(k,r,y,y===null?r.first:y.next,P,x,I,s,o,c)}h.set(x,y),C=[],A=[],_=y.next;continue}if(f&&ui(T,P,I,o),(T.e.f&bt)!==0&&(aa(T.e),u&&(T.a?.unfix(),(b??=new Set).delete(T))),T!==_){if(S!==void 0&&S.has(T)){if(C.length<A.length){var J=A[0],se;y=J.prev;var Me=C[0],xe=C[C.length-1];for(se=0;se<C.length;se+=1)Ea(C[se],J,a);for(se=0;se<A.length;se+=1)S.delete(A[se]);Tt(r,Me.prev,xe.next),Tt(r,y,Me),Tt(r,xe,J),_=J,y=xe,I-=1,C=[],A=[]}else S.delete(T),Ea(T,_,a),Tt(r,T.prev,T.next),Tt(r,T,y===null?r.first:y.next),Tt(r,y,T),y=T;continue}for(C=[],A=[];_!==null&&_.k!==x;)(_.e.f&bt)===0&&(S??=new Set).add(_),A.push(_),_=_.next;if(_===null)continue;T=_}C.push(T),y=T,_=T.next}if(_!==null||S!==void 0){for(var Se=S===void 0?[]:ns(S);_!==null;)(_.e.f&bt)===0&&Se.push(_),_=_.next;var be=Se.length;if(be>0){var Z=(o&Ao)!==0&&p===0?a:null;if(u){for(I=0;I<be;I+=1)Se[I].a?.measure();for(I=0;I<be;I+=1)Se[I].a?.fix()}Fc(r,Se,Z)}}u&&yr(()=>{if(b!==void 0)for(T of b)T.a?.apply()}),e.first=r.first&&r.first.e,e.last=y&&y.e;for(var N of n.values())ze(N.e);n.clear()}function ui(e,t,r,n){(n&Fn)!==0&&zr(e.v,t),(n&ea)!==0?zr(e.i,r):e.i=r}function di(e,t,r,n,a,s,o,l,c,u,f){var p=(c&Fn)!==0,h=(c&Jl)===0,m=p?h?Pc(a,!1,!1):nr(a):a,_=(c&ea)===0?o:nr(o),S={i:_,v:m,k:s,a:null,e:null,prev:r,next:n};try{if(e===null){var y=document.createDocumentFragment();y.append(e=or())}return S.e=Ve(()=>l(e,m,_,u),cc),S.e.prev=r&&r.e,S.e.next=n&&n.e,r===null?f||(t.first=S):(r.next=S,r.e.next=S.e),n!==null&&(n.prev=S,n.e.prev=S.e),S}finally{}}function Ea(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,s=e.e.nodes_start;s!==null&&s!==n;){var o=xn(s);a.before(s),s=o}}function Tt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function oe(e,t,...r){var n=e,a=ne,s;ir(()=>{a!==(a=t())&&(s&&(ze(s),s=null),s=Ve(()=>a(n,...r)))},Pr)}function qn(e,t,r){var n=e,a,s,o=null,l=null;function c(){s&&(er(s),s=null),o&&(o.lastChild.remove(),n.before(o),o=null),s=l,l=null}ir(()=>{if(a!==(a=t())){var u=us();if(a){var f=n;u&&(o=document.createDocumentFragment(),o.append(f=or()),s&&_e.skipped_effects.add(s)),l=Ve(()=>r(f,a))}u?_e.add_callback(c):c()}},Pr)}function tu(e,t,r,n,a,s){var o,l,c=null,u=e,f;ir(()=>{const p=t()||null;var h=sc;p!==o&&(f&&(p===null?er(f,()=>{f=null,l=null}):p===l?aa(f):ze(f)),p&&p!==l&&(f=Ve(()=>{if(c=document.createElementNS(h,p),Vr(c,c),n){var m=c.appendChild(or());n(c,m)}ee.nodes_end=c,u.before(c)})),o=p,o&&(l=o))},Pr)}function ru(e,t){var r=void 0,n;ir(()=>{r!==(r=t())&&(n&&(ze(n),n=null),r&&(n=Ve(()=>{fs(()=>r(e))})))})}function fi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=fi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function nu(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=fi(e))&&(n&&(n+=" "),n+=t);return n}function vi(e){return typeof e=="object"?nu(e):e??""}const Ws=[...` 	
\r\f \v\uFEFF`];function au(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var s=a.length,o=0;(o=n.indexOf(a,o))>=0;){var l=o+s;(o===0||Ws.includes(n[o-1]))&&(l===n.length||Ws.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Gs(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var s=e[a];s!=null&&s!==""&&(n+=" "+a+": "+s+r)}return n}function Pa(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function su(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Pa)),a&&c.push(...Object.keys(a).map(Pa));var u=0,f=-1;const S=e.length;for(var p=0;p<S;p++){var h=e[p];if(l?h==="/"&&e[p-1]==="*"&&(l=!1):s?s===h&&(s=!1):h==="/"&&e[p+1]==="*"?l=!0:h==='"'||h==="'"?s=h:h==="("?o++:h===")"&&o--,!l&&s===!1&&o===0){if(h===":"&&f===-1)f=p;else if(h===";"||p===S-1){if(f!==-1){var m=Pa(e.substring(u,f).trim());if(!c.includes(m)){h!==";"&&p++;var _=e.substring(u,p).trim();r+=" "+_+";"}}u=p+1,f=-1}}}}return n&&(r+=Gs(n)),a&&(r+=Gs(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ae(e,t,r,n,a,s){var o=e.__className;if(o!==r||o===void 0){var l=au(r,n,s);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(s&&a!==s)for(var c in s){var u=!!s[c];(a==null||u!==!!a[c])&&e.classList.toggle(c,u)}return s}function xa(e,t={},r,n){for(var a in r){var s=r[a];t[a]!==s&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,s,n))}}function ou(e,t,r,n){var a=e.__style;if(a!==t){var s=su(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else n&&(Array.isArray(n)?(xa(e,r?.[0],n[0]),xa(e,r?.[1],n[1],"important")):xa(e,r,n));return n}function Gn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Zn(t))return ic();for(var n of e.options)n.selected=t.includes(un(n));return}for(n of e.options){var a=un(n);if(xc(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function hi(e){var t=new MutationObserver(()=>{Gn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ko(()=>{t.disconnect()})}function Ua(e,t,r=t){var n=!0;ds(e,"change",a=>{var s=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(s),un);else{var l=e.querySelector(s)??e.querySelector("option:not([disabled])");o=l&&un(l)}r(o)}),fs(()=>{var a=t();if(Gn(e,a,n),n&&a===void 0){var s=e.querySelector(":checked");s!==null&&(a=un(s),r(a))}e.__value=a,n=!1}),hi(e)}function un(e){return"__value"in e?e.__value:e.value}const en=Symbol("class"),tn=Symbol("style"),pi=Symbol("is custom element"),mi=Symbol("is html");function ps(e,t){var r=oa(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Br(e,t){var r=oa(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function iu(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Hn(e,t,r,n){var a=oa(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Bl]=r),r==null?e.removeAttribute(t):typeof r!="string"&&_i(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function lu(e,t,r,n,a=!1,s=!1){var o=oa(e),l=o[pi],c=!o[mi],u=t||{},f=e.tagName==="OPTION";for(var p in t)p in r||(r[p]=null);r.class?r.class=vi(r.class):r[en]&&(r.class=null),r[tn]&&(r.style??=null);var h=_i(e);for(const P in r){let x=r[P];if(f&&P==="value"&&x==null){e.value=e.__value="",u[P]=x;continue}if(P==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ae(e,m,x,n,t?.[en],r[en]),u[P]=x,u[en]=r[en];continue}if(P==="style"){ou(e,x,t?.[tn],r[tn]),u[P]=x,u[tn]=r[tn];continue}var _=u[P];if(!(x===_&&!(x===void 0&&e.hasAttribute(P)))){u[P]=x;var S=P[0]+P[1];if(S!=="$$")if(S==="on"){const T={},I="$$"+P;let E=P.slice(2);var y=Vc(E);if(zc(E)&&(E=E.slice(0,-7),T.capture=!0),!y&&_){if(x!=null)continue;e.removeEventListener(E,u[I],T),u[I]=null}if(x!=null)if(y)e[`__${E}`]=x,Rt([E]);else{let R=function(k){u[P].call(this,k)};var A=R;u[I]=li(E,e,R,T)}else y&&(e[`__${E}`]=void 0)}else if(P==="style")Hn(e,P,x);else if(P==="autofocus")Nc(e,!!x);else if(!l&&(P==="__value"||P==="value"&&x!=null))e.value=e.__value=x;else if(P==="selected"&&f)iu(e,x);else{var b=P;c||(b=Gc(b));var C=b==="defaultValue"||b==="defaultChecked";if(x==null&&!l&&!C)if(o[P]=null,b==="value"||b==="checked"){let T=e;const I=t===void 0;if(b==="value"){let E=T.defaultValue;T.removeAttribute(b),T.defaultValue=E,T.value=T.__value=I?E:null}else{let E=T.defaultChecked;T.removeAttribute(b),T.defaultChecked=E,T.checked=I?E:!1}}else e.removeAttribute(P);else C||h.includes(b)&&(l||typeof x!="string")?(e[b]=x,b in o&&(o[b]=je)):typeof x!="function"&&Hn(e,b,x)}}}return u}function Hs(e,t,r=[],n=[],a,s=!1,o=!1){Lo(r,n,l=>{var c=void 0,u={},f=e.nodeName==="SELECT",p=!1;if(ir(()=>{var m=t(...l.map(i)),_=lu(e,c,m,a,s,o);p&&f&&"value"in m&&Gn(e,m.value);for(let y of Object.getOwnPropertySymbols(u))m[y]||ze(u[y]);for(let y of Object.getOwnPropertySymbols(m)){var S=m[y];y.description===oc&&(!c||S!==c[y])&&(u[y]&&ze(u[y]),u[y]=Ve(()=>ru(e,()=>S))),_[y]=S}c=_}),f){var h=e;fs(()=>{Gn(h,c.value,!0),hi(h)})}p=!0})}function oa(e){return e.__attributes??={[pi]:e.nodeName.includes("-"),[mi]:e.namespaceURI===ac}}var Ks=new Map;function _i(e){var t=e.getAttribute("is")||e.nodeName,r=Ks.get(t);if(r)return r;Ks.set(t,r=[]);for(var n,a=e,s=Element.prototype;s!==a;){n=Ml(a);for(var o in n)n[o].set&&r.push(o);a=xo(a)}return r}function Qe(e,t,r=t){var n=new WeakSet;ds(e,"input",async a=>{var s=a?e.defaultValue:e.value;if(s=$a(e)?ka(s):s,r(s),_e!==null&&n.add(_e),await Lc(),s!==(s=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=s??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),Qr(t)==null&&e.value&&(r($a(e)?ka(e.value):e.value),_e!==null&&n.add(_e)),vs(()=>{var a=t();if(e===document.activeElement){var s=On??_e;if(n.has(s))return}$a(e)&&a===ka(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function cu(e,t,r=t){ds(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),Qr(t)==null&&r(e.checked),vs(()=>{var n=t();e.checked=!!n})}function $a(e){var t=e.type;return t==="number"||t==="range"}function ka(e){return e===""?null:+e}let Rn=!1;function uu(e){var t=Rn;try{return Rn=!1,[e(),Rn]}finally{Rn=t}}const du={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ie(e,t,r){return new Proxy({props:e,exclude:t},du)}const fu={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Fr(a)&&(a=a());const s=Xt(a,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Xt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===gr||t===No)return!1;for(let r of e.props)if(Fr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Fr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function le(...e){return new Proxy({props:e},fu)}function Ir(e,t,r,n){var a=!Kr||(r&Xl)!==0,s=(r&ec)!==0,o=(r&tc)!==0,l=n,c=!0,u=()=>(c&&(c=!1,l=o?Qr(n):n),l),f;if(s){var p=gr in e||No in e;f=Xt(e,t)?.set??(p&&t in e?A=>e[t]=A:void 0)}var h,m=!1;s?[h,m]=uu(()=>e[t]):h=e[t],h===void 0&&n!==void 0&&(h=u(),f&&(a&&Wl(),f(h)));var _;if(a?_=()=>{var A=e[t];return A===void 0?u():(c=!0,A)}:_=()=>{var A=e[t];return A!==void 0&&(l=void 0),A===void 0?l:A},a&&(r&Fl)===0)return _;if(f){var S=e.$$legacy;return(function(A,P){return arguments.length>0?((!a||!P||S||m)&&f(P?_():A),A):_()})}var y=!1,b=((r&Zl)!==0?ra:ls)(()=>(y=!1,_()));s&&i(b);var C=ee;return(function(A,P){if(arguments.length>0){const x=P?i(b):a&&s?vt(A):A;return M(b,x),y=!0,l!==void 0&&(l=x),A}return xr&&y||(C.f&Er)!==0?b.v:i(b)})}function gi(e){Ce===null&&To(),Kr&&Ce.l!==null?hu(Ce).m.push(e):Qo(()=>{const t=Qr(e);if(typeof t=="function")return t})}function vu(e){Ce===null&&To(),gi(()=>()=>Qr(e))}function hu(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const pu="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(pu);const mu="modulepreload",_u=function(e){return"/"+e},Qs={},Na=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let u=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};var o=u;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=u(r.map(f=>{if(f=_u(f),f in Qs)return;Qs[f]=!0;const p=f.endsWith(".css"),h=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${h}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":mu,p||(m.as="script"),m.crossOrigin="",m.href=f,c&&m.setAttribute("nonce",c),document.head.appendChild(m),p)return new Promise((_,S)=>{m.addEventListener("load",_),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};class gu extends Map{#e=new Map;#r=ae(0);#d=ae(0);#f=Gt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#d.v=super.size}}#c(t){return Gt===this.#f?ae(t):nr(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#c(0),r.set(t,n);else return i(this.#r),!1}return i(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#c(0),r.set(t,n);else{i(this.#r);return}}return i(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),s=super.get(t),o=super.set(t,r),l=this.#r;if(a===void 0)a=this.#c(0),n.set(t,a),M(this.#d,super.size),Ct(l);else if(s!==r){Ct(a);var c=l.reactions===null?null:new Set(l.reactions),u=c===null||!a.reactions?.every(f=>c.has(f));u&&Ct(l)}return o}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),M(this.#d,super.size),M(n,-1),Ct(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;M(this.#d,0);for(var r of t.values())M(r,-1);Ct(this.#r),t.clear()}}#o(){i(this.#r);var t=this.#e;if(this.#d.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#c(0);t.set(r,n)}}for([,n]of this.#e)i(n)}keys(){return i(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return i(this.#d),super.size}}class yu{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class yi{constructor(t){this.generateIdentifier=t,this.kv=new yu}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class bu extends yi{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function wu(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function Su(e,t){const r=wu(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const s=n[a];if(t(s))return s}}function Wr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function Bn(e,t){return e.indexOf(t)!==-1}function Ys(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class Eu{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return Su(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const Pu=e=>Object.prototype.toString.call(e).slice(8,-1),bi=e=>typeof e>"u",xu=e=>e===null,_n=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Va=e=>_n(e)&&Object.keys(e).length===0,ar=e=>Array.isArray(e),$u=e=>typeof e=="string",ku=e=>typeof e=="number"&&!isNaN(e),Nu=e=>typeof e=="boolean",Tu=e=>e instanceof RegExp,gn=e=>e instanceof Map,yn=e=>e instanceof Set,wi=e=>Pu(e)==="Symbol",Au=e=>e instanceof Date&&!isNaN(e.valueOf()),Cu=e=>e instanceof Error,Js=e=>typeof e=="number"&&isNaN(e),Mu=e=>Nu(e)||xu(e)||bi(e)||ku(e)||$u(e)||wi(e),Du=e=>typeof e=="bigint",Iu=e=>e===1/0||e===-1/0,Ru=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),Ou=e=>e instanceof URL,Si=e=>e.replace(/\./g,"\\."),Ta=e=>e.map(String).map(Si).join("."),dn=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let s=e.charAt(a);if(s==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(s==="."){t.push(r),r="";continue}r+=s}const n=r;return t.push(n),t};function Nt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Ei=[Nt(bi,"undefined",()=>null,()=>{}),Nt(Du,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Nt(Au,"Date",e=>e.toISOString(),e=>new Date(e)),Nt(Cu,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Nt(Tu,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Nt(yn,"set",e=>[...e.values()],e=>new Set(e)),Nt(gn,"map",e=>[...e.entries()],e=>new Map(e)),Nt(e=>Js(e)||Iu(e),"number",e=>Js(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Nt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Nt(Ou,"URL",e=>e.toString(),e=>new URL(e))];function ia(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Pi=ia((e,t)=>wi(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),qu=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),xi=ia(Ru,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=qu[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function $i(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const ki=ia($i,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),Ni=ia((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Bu=[ki,Pi,Ni,xi],Zs=(e,t)=>{const r=Ys(Bu,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ys(Ei,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},Ti={};Ei.forEach(e=>{Ti[e.annotation]=e});const Lu=(e,t,r)=>{if(ar(t))switch(t[0]){case"symbol":return Pi.untransform(e,t,r);case"class":return ki.untransform(e,t,r);case"custom":return Ni.untransform(e,t,r);case"typed-array":return xi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=Ti[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Rr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function Ai(e){if(Bn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(Bn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(Bn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const ju=(e,t)=>{Ai(t);for(let r=0;r<t.length;r++){const n=t[r];if(yn(e))e=Rr(e,+n);else if(gn(e)){const a=+n,s=+t[++r]==0?"key":"value",o=Rr(e,a);switch(s){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},Wa=(e,t,r)=>{if(Ai(t),t.length===0)return r(e);let n=e;for(let s=0;s<t.length-1;s++){const o=t[s];if(ar(n)){const l=+o;n=n[l]}else if(_n(n))n=n[o];else if(yn(n)){const l=+o;n=Rr(n,l)}else if(gn(n)){if(s===t.length-2)break;const c=+o,u=+t[++s]==0?"key":"value",f=Rr(n,c);switch(u){case"key":n=f;break;case"value":n=n.get(f);break}}}const a=t[t.length-1];if(ar(n)?n[+a]=r(n[+a]):_n(n)&&(n[a]=r(n[a])),yn(n)){const s=Rr(n,+a),o=r(s);s!==o&&(n.delete(s),n.add(o))}if(gn(n)){const s=+t[t.length-2],o=Rr(n,s);switch(+a==0?"key":"value"){case"key":{const c=r(o);n.set(c,n.get(o)),c!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function Ga(e,t,r=[]){if(!e)return;if(!ar(e)){Wr(e,(s,o)=>Ga(s,t,[...r,...dn(o)]));return}const[n,a]=e;a&&Wr(a,(s,o)=>{Ga(s,t,[...r,...dn(o)])}),t(n,r)}function zu(e,t,r){return Ga(t,(n,a)=>{e=Wa(e,a,s=>Lu(s,n,r))}),e}function Uu(e,t){function r(n,a){const s=ju(e,dn(a));n.map(dn).forEach(o=>{e=Wa(e,o,()=>s)})}if(ar(t)){const[n,a]=t;n.forEach(s=>{e=Wa(e,dn(s),()=>e)}),a&&Wr(a,r)}else Wr(t,r);return e}const Vu=(e,t)=>_n(e)||ar(e)||gn(e)||yn(e)||$i(e,t);function Wu(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Gu(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[s,...o]=a;s.length===0?n=o.map(Ta):r[Ta(s)]=o.map(Ta)}),n?Va(r)?[n]:[n,r]:Va(r)?void 0:r}const Ci=(e,t,r,n,a=[],s=[],o=new Map)=>{const l=Mu(e);if(!l){Wu(e,a,t);const m=o.get(e);if(m)return n?{transformedValue:null}:m}if(!Vu(e,r)){const m=Zs(e,r),_=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return l||o.set(e,_),_}if(Bn(s,e))return{transformedValue:null};const c=Zs(e,r),u=c?.value??e,f=ar(u)?[]:{},p={};Wr(u,(m,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const S=Ci(m,t,r,n,[...a,_],[...s,e],o);f[_]=S.transformedValue,ar(S.annotations)?p[_]=S.annotations:_n(S.annotations)&&Wr(S.annotations,(y,b)=>{p[Si(_)+"."+b]=y})});const h=Va(p)?{transformedValue:f,annotations:c?[c.type]:void 0}:{transformedValue:f,annotations:c?[c.type,p]:p};return l||o.set(e,h),h};function Mi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Xs(e){return Mi(e)==="Array"}function Hu(e){if(Mi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Ku(e,t,r,n,a){const s={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";s==="enumerable"&&(e[t]=r),a&&s==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Ha(e,t={}){if(Xs(e))return e.map(a=>Ha(a,t));if(!Hu(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,s)=>{if(Xs(t.props)&&!t.props.includes(s))return a;const o=e[s],l=Ha(o,t);return Ku(a,s,l,e,t.nonenumerable),a},{})}class re{constructor({dedupe:t=!1}={}){this.classRegistry=new bu,this.symbolRegistry=new yi(r=>r.description??""),this.customTransformerRegistry=new Eu,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=Ci(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const s=Gu(r,this.dedupe);return s&&(a.meta={...a.meta,referentialEqualities:s}),a}deserialize(t){const{json:r,meta:n}=t;let a=Ha(r);return n?.values&&(a=zu(a,n.values,this)),n?.referentialEqualities&&(a=Uu(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}re.defaultInstance=new re;re.serialize=re.defaultInstance.serialize.bind(re.defaultInstance);re.deserialize=re.defaultInstance.deserialize.bind(re.defaultInstance);re.stringify=re.defaultInstance.stringify.bind(re.defaultInstance);re.parse=re.defaultInstance.parse.bind(re.defaultInstance);re.registerClass=re.defaultInstance.registerClass.bind(re.defaultInstance);re.registerSymbol=re.defaultInstance.registerSymbol.bind(re.defaultInstance);re.registerCustom=re.defaultInstance.registerCustom.bind(re.defaultInstance);re.allowErrorProps=re.defaultInstance.allowErrorProps.bind(re.defaultInstance);re.serialize;re.deserialize;re.stringify;re.parse;re.registerClass;re.registerCustom;re.registerSymbol;re.allowErrorProps;function Qu(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function Yu(e,t){return`${e}_${t}`}const Ju=typeof window<"u"?window:void 0;function Zu(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Xu{#e;#r;constructor(t={}){const{window:r=Ju,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=Bo(a=>{const s=Us(r,"focusin",a),o=Us(r,"focusout",a);return()=>{s(),o()}}))}get current(){return this.#r?.(),this.#e?Zu(this.#e):null}}new Xu;function Fu(e){return typeof e=="function"}function ed(e,t){if(Fu(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function td(e,t){let r=ae(null);const n=z(()=>ed(t,250));function a(...s){if(i(r))i(r).timeout&&clearTimeout(i(r).timeout);else{let o,l;const c=new Promise((u,f)=>{o=u,l=f});M(r,{timeout:null,runner:null,promise:c,resolve:o,reject:l},!0)}return i(r).runner=async()=>{if(!i(r))return;const o=i(r);M(r,null);try{o.resolve(await e.apply(this,s))}catch(l){o.reject(l)}},i(r).timeout=setTimeout(i(r).runner,i(n)),i(r).promise}return a.cancel=async()=>{(!i(r)||i(r).timeout===null)&&(await new Promise(s=>setTimeout(s,0)),!i(r)||i(r).timeout===null)||(clearTimeout(i(r).timeout),i(r).reject("Cancelled"),M(r,null))},a.runScheduledNow=async()=>{(!i(r)||!i(r).timeout)&&(await new Promise(s=>setTimeout(s,0)),!i(r)||!i(r).timeout)||(clearTimeout(i(r).timeout),i(r).timeout=null,await i(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!i(r)?.timeout}}),a}function sn(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function rd(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function nd(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function ad(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>Ka(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],s=[];r.forEach((l,c)=>{const u=n.get(c)||0,f=l-u;f>0&&(a.push({q:f,u:c}),s.push(Ka(f.toString(),c)))});const o=s.length>0?s.join(" et "):"✅ Complet";return{numeric:a,display:o}}function rn(e){return e?.length?e.map(t=>Ka(t.q.toString(),t.u)).join(" et "):"-"}function Ka(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let o=(Math.round(n*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function sd(e){return sn(e)}function od(e,t,r){if(!e||Object.keys(e).length===0)return[];const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r,s=Object.entries(e).filter(([o])=>{const l=new Date(o);return l>=n&&l<=a}).flatMap(([o,l])=>l.totalConsolidated);return Di(s)}function Di(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function id(e,t){return e[t]?.recipes||[]}function ld(e){return e?Object.values(e).flatMap(t=>t.recipes||[]):[]}function cd(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([s])=>{const o=new Date(s);return o>=n&&o<=a}).reduce((s,[o,l])=>s+(l.totalAssiettes||0),0)}function ud(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function dd(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Fs(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Di(t)}function fd(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class w{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}w.equal=(e,t)=>new w("equal",e,t).toString();w.notEqual=(e,t)=>new w("notEqual",e,t).toString();w.lessThan=(e,t)=>new w("lessThan",e,t).toString();w.lessThanEqual=(e,t)=>new w("lessThanEqual",e,t).toString();w.greaterThan=(e,t)=>new w("greaterThan",e,t).toString();w.greaterThanEqual=(e,t)=>new w("greaterThanEqual",e,t).toString();w.isNull=e=>new w("isNull",e).toString();w.isNotNull=e=>new w("isNotNull",e).toString();w.between=(e,t,r)=>new w("between",e,[t,r]).toString();w.startsWith=(e,t)=>new w("startsWith",e,t).toString();w.endsWith=(e,t)=>new w("endsWith",e,t).toString();w.select=e=>new w("select",void 0,e).toString();w.search=(e,t)=>new w("search",e,t).toString();w.orderDesc=e=>new w("orderDesc",e).toString();w.orderAsc=e=>new w("orderAsc",e).toString();w.orderRandom=()=>new w("orderRandom").toString();w.cursorAfter=e=>new w("cursorAfter",void 0,e).toString();w.cursorBefore=e=>new w("cursorBefore",void 0,e).toString();w.limit=e=>new w("limit",void 0,e).toString();w.offset=e=>new w("offset",void 0,e).toString();w.contains=(e,t)=>new w("contains",e,t).toString();w.notContains=(e,t)=>new w("notContains",e,t).toString();w.notSearch=(e,t)=>new w("notSearch",e,t).toString();w.notBetween=(e,t,r)=>new w("notBetween",e,[t,r]).toString();w.notStartsWith=(e,t)=>new w("notStartsWith",e,t).toString();w.notEndsWith=(e,t)=>new w("notEndsWith",e,t).toString();w.createdBefore=e=>new w("createdBefore",void 0,e).toString();w.createdAfter=e=>new w("createdAfter",void 0,e).toString();w.createdBetween=(e,t)=>new w("createdBetween",void 0,[e,t]).toString();w.updatedBefore=e=>new w("updatedBefore",void 0,e).toString();w.updatedAfter=e=>new w("updatedAfter",void 0,e).toString();w.updatedBetween=(e,t)=>new w("updatedBetween",void 0,[e,t]).toString();w.or=e=>new w("or",void 0,e.map(t=>JSON.parse(t))).toString();w.and=e=>new w("and",void 0,e.map(t=>JSON.parse(t))).toString();w.distanceEqual=(e,t,r,n=!0)=>new w("distanceEqual",e,[[t,r,n]]).toString();w.distanceNotEqual=(e,t,r,n=!0)=>new w("distanceNotEqual",e,[[t,r,n]]).toString();w.distanceGreaterThan=(e,t,r,n=!0)=>new w("distanceGreaterThan",e,[[t,r,n]]).toString();w.distanceLessThan=(e,t,r,n=!0)=>new w("distanceLessThan",e,[[t,r,n]]).toString();w.intersects=(e,t)=>new w("intersects",e,[t]).toString();w.notIntersects=(e,t)=>new w("notIntersects",e,[t]).toString();w.crosses=(e,t)=>new w("crosses",e,[t]).toString();w.notCrosses=(e,t)=>new w("notCrosses",e,[t]).toString();w.overlaps=(e,t)=>new w("overlaps",e,[t]).toString();w.notOverlaps=(e,t)=>new w("notOverlaps",e,[t]).toString();w.touches=(e,t)=>new w("touches",e,[t]).toString();w.notTouches=(e,t)=>new w("notTouches",e,[t]).toString();var Ii,Ri;class bn{static custom(t){return t}static unique(t=7){const r=fd(bn,Ii,"m",Ri).call(bn);let n="";for(let a=0;a<t;a++){const s=Math.floor(Math.random()*16).toString(16);n+=s}return r+n}}Ii=bn,Ri=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var eo;(function(e){e.Totp="totp"})(eo||(eo={}));var to;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(to||(to={}));var ro;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(ro||(ro={}));var no;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(no||(no={}));var ao;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(ao||(ao={}));var so;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(so||(so={}));var oo;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(oo||(oo={}));var io;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(io||(io={}));var lo;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(lo||(lo={}));function Oi(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:e.productType,pFrais:e.pFrais,pSurgel:e.pSurgel,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,byDate:e.byDate,...t}}async function Ot(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function vd(e,t,r=100){try{const{databases:n,config:a}=await Ot(),s=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[w.greaterThan("$updatedAt",t),w.equal("mainId",e),w.limit(r),w.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${s.documents.length} purchases modifiés chargés`),s.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function qi(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:s}=await Ot();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,[w.equal("mainId",e),w.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.createdBy","purchases.products.$id"]),w.limit(n)])).documents;const o=await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,[w.greaterThan("$updatedAt",r),w.equal("mainId",e),w.limit(n),w.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const s=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${s}`)}}async function la(e,t){try{const{databases:r,config:n}=await Ot();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function on(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=Oi(n,t),{databases:s,config:o}=await Ot(),l=await s.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function Bi(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await la(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Qa(e,t){return la(e,{who:t})}async function Ya(e,t){return la(e,{stockReel:t})}async function Li(e){try{const{databases:t,config:r}=await Ot(),s=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:s.$id,status:"active"},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,bn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function ji(e,t){try{const{databases:r,config:n}=await Ot(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),s={...t,products:t.products||a.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,s);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,s),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function zi(e){try{const{databases:t,config:r}=await Ot();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Ui(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Ot(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[w.equal("$id",e),w.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Vi(e,t={}){let r=null;const n=s=>{const{events:o,payload:l}=s;if(!l)return;const c=o.some(m=>m.includes("products.")),u=o.some(m=>m.includes("purchases.")),f=o.some(m=>m.includes(".create")),p=o.some(m=>m.includes(".update")),h=o.some(m=>m.includes(".delete"));if(c){const m=l;f&&t.onProductCreate?t.onProductCreate(m):p&&t.onProductUpdate?t.onProductUpdate(m):h&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(u){const m=l;f&&t.onPurchaseCreate?t.onPurchaseCreate(m):p&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):h&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:s=>{console.error("[Appwrite Interactions] Erreur realtime:",s),t.onError?.(s)}}))}catch(s){console.error("[Appwrite Interactions] Impossible de configurer realtime:",s),t.onError?.(s)}})(),()=>{r&&(r(),r=null)}}async function Wi(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Ot(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Gi(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Ot(),s=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}const Aa=Object.freeze(Object.defineProperty({__proto__:null,createMainDocument:Gi,createPurchase:Li,deletePurchase:zi,enrichedProductToAppwriteProduct:Oi,loadMainEventData:Wi,loadPurchasesListByIds:Ui,loadUpdatedPurchases:vd,subscribeToRealtime:Vi,syncProductsWithPurchases:qi,updateProduct:la,updateProductStock:Ya,updateProductStore:Bi,updateProductWho:Qa,updatePurchase:ji,upsertProduct:on},Symbol.toStringTag,{value:"Module"}));async function hd(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function pd(e,t,r){return{$id:`${t}_${e.ingredientHugoUuid}`,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,byDate:JSON.stringify(e.byDate),nbRecipes:e.nbRecipes||0,totalAssiettes:e.totalAssiettes||0,status:"",purchases:[],store:"",who:null,stockReel:null,isMerged:!1,mergedInto:null,mergedFrom:null,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,mainId:t}}const co=1e3,md=500;class _d{#e=new gu;#r=ae(null);#d=ae(!1);#f=ae(!1);#c=ae(null);#o=ae(!1);#i=ae(!1);#n=ae(vt([]));#l=ae(null);#a=ae(null);#s=ae(null);#u=null;#v=null;#h=null;#p=null;#E=ae(!1);#t=ae(vt({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return i(this.#t)}get currentMainId(){return i(this.#r)}get isInitialized(){return i(this.#d)}get loading(){return i(this.#f)}get error(){return i(this.#c)}get allDates(){return i(this.#n)}get syncing(){return i(this.#o)}get startDate(){return i(this.#a)}get endDate(){return i(this.#s)}setStartDate(t){M(this.#a,t,!0)}setEndDate(t){M(this.#s,t,!0)}setDateRange(t,r){M(this.#a,t,!0),M(this.#s,r,!0)}initializeDateRange(){if((!i(this.#a)||!i(this.#s))&&i(this.#n).length>0){const t=[...i(this.#n)].sort();M(this.#a,t[0],!0),M(this.#s,t[t.length-1],!0)}}get firstDate(){return i(this.#n).length===0?null:[...i(this.#n)].sort()[0]}get lastDate(){return i(this.#n).length===0?null:[...i(this.#n)].sort().pop()}get realtimeConnected(){return i(this.#i)}get hugoContentChanged(){return i(this.#E)}#P=z(()=>Array.from(this.#e.values()));get enrichedProducts(){return i(this.#P)}set enrichedProducts(t){M(this.#P,t)}#g=z(()=>{const t=new Map;return this.enrichedProducts.forEach(r=>{if(r.totalNeededIsManualOverride&&r.totalNeededConsolidated){const a=sn(r.totalNeededConsolidated);a&&a.length>0&&t.set(r.$id,a);return}if(!r.byDateParsed||!i(this.#a)||!i(this.#s))return;const n=od(r.byDateParsed,i(this.#a),i(this.#s));n&&n.length>0&&t.set(r.$id,n)}),t});get totalNeededByDateRange(){return i(this.#g)}set totalNeededByDateRange(t){M(this.#g,t)}#y=z(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const a=rn(r);t.set(n,a)}),t});get formattedTotalNeededByDateRange(){return i(this.#y)}set formattedTotalNeededByDateRange(t){M(this.#y,t)}#b=z(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return i(this.#b)}set stats(t){M(this.#b,t)}#k=z(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return i(this.#k)}set uniqueStores(t){M(this.#k,t)}#N=z(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return i(this.#N)}set uniqueWho(t){M(this.#N,t)}#T=z(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return i(this.#T)}set uniqueProductTypes(t){M(this.#T,t)}#A=z(()=>this.enrichedProducts.filter(t=>this.#U(t)));get filteredProducts(){return i(this.#A)}set filteredProducts(t){M(this.#A,t)}#C=z(()=>{const t=this.filteredProducts;return i(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>i(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return i(this.#C)}set filteredGroupedProducts(t){M(this.#C,t)}#M=z(()=>this.filteredGroupedProducts);get groupedFormattedProducts(){return i(this.#M)}set groupedFormattedProducts(t){M(this.#M,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(i(this.#d)&&i(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),M(this.#r,t,!0),this.#u=Yu("products-enriched",t),M(this.#c,null);try{if(await this.#R(),this.#e.size===0){const n=await hd(t);console.log(`[ProductsStore] Données Hugo chargées: ${n.ingredients.length} ingredients`),n.ingredients.forEach(s=>{const o=pd(s,t,n.hugoContentHash),l=this.#x(o);this.#e.set(l.$id,l)}),M(this.#n,n.allDates,!0),this.initializeDateRange(),await Wi(t)||await Gi(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),this.#w()}this.#O(),M(this.#d,!0);const r=this.#z();this.#h=Vi(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw M(this.#c,n,!0),console.error("[ProductsStore]",n,r),r}}async#R(){if(this.#u)try{const t=localStorage.getItem(this.#u);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:a}=re.parse(t);r.forEach(([s,o])=>this.#e.set(s,o)),M(this.#l,n,!0),M(this.#n,a||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${a?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}async#O(){if(i(this.#r)){M(this.#o,!0);try{const t=await qi(i(this.#r),{lastSync:i(this.#l),limit:co});if(i(this.#l)){const{loadUpdatedPurchases:r}=await Na(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Aa);return{loadUpdatedPurchases:a}},void 0);(await r(i(this.#r),i(this.#l),co)).forEach(a=>{if(a.products?.length){const s=a.products.map(o=>typeof o=="string"?o:o.$id);this.#$(s,a)}})}t.forEach(r=>{const n=this.#x(r);n.isSynced=!0,this.#e.set(r.$id,n)}),this.#_(),this.#m()}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{M(this.#o,!1)}}}#w(){if(this.#u)try{const t={lastSync:i(this.#l),products:Array.from(this.#e.entries()),allDates:i(this.#n)};localStorage.setItem(this.#u,re.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}#m(){this.#p&&clearTimeout(this.#p),this.#p=setTimeout(()=>{this.#w(),this.#p=null},md)}#_(){M(this.#l,new Date().toISOString(),!0)}#x(t){const r=nd(rd(t.purchases??[])),n=sd(t.byDate);let a,s,o,l;n?(a=Fs(n),s=dd(n),o=ld(n),t.totalNeededConsolidated&&t.totalNeededIsManualOverride&&(l=sn(t.totalNeededConsolidated)||void 0)):(console.error(`[ProductsStore] Product ${t.productName} n'a pas de structure byDate - migration requise`),a=[],s=[],o=[]);const{numeric:c,display:u}=ad(a,r),f=sn(t.stockReel)??[],p=rn(r),h=f.length>0?`${f[f.length-1].quantity} ${f[f.length-1].unit}`:p;return{...t,storeInfo:t.store?sn(t.store):null,totalNeededArray:a,totalPurchasesArray:r,recipesArray:o,stockArray:f,stockOrTotalPurchases:h,missingQuantityArray:c,neededConsolidatedByDateArray:s,displayTotalNeeded:rn(a),displayTotalPurchases:p,displayMissingQuantity:u,byDateParsed:n||void 0,totalNeededRawArray:l,totalNeededIsManualOverride:t.totalNeededIsManualOverride??!1,totalNeededOverrideReason:t.totalNeededOverrideReason}}#D(t){t.length&&(t.forEach(r=>this.#S(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#S(t){const r=this.#x(t);this.#e.set(t.$id,r)}#q(t){this.#e.delete(t)}async#B(t){if(!t.products?.length){console.warn("[ProductsStore] Purchase créé sans products:",t.$id);return}const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#j(r,t)}async#L(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#$(r,t);return}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Ui([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);this.#$(n,r)}}catch(r){console.error("[ProductsStore] Erreur rechargement purchase:",r)}}#I(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:typeof t.mainId=="string"?t.mainId:t.mainId.$id}}#j(t,r){const n=this.#I(r),a=[];t.forEach(s=>{const o=this.#e.get(s);if(o){const l=o.purchases||[];l.some(c=>c.$id===n.$id)||a.push({...o,purchases:[...l,n]})}}),this.#D(a)}#$(t,r){const n=this.#I(r),a=[];t.forEach(s=>{const o=this.#e.get(s);if(o){const l=o.purchases||[],c=l.findIndex(u=>u.$id===n.$id);if(c>=0){const u=[...l];u[c]=n,a.push({...o,purchases:u})}else a.push({...o,purchases:[...l,r]})}}),this.#D(a)}#z(){return{onProductCreate:t=>{this.#S(t),this.#_(),this.#m()},onProductUpdate:t=>{this.#S(t),this.#_(),this.#m()},onProductDelete:t=>{this.#q(t),this.#_(),this.#m()},onPurchaseCreate:t=>{this.#B(t),this.#_(),this.#m()},onPurchaseUpdate:t=>{this.#L(t),this.#_(),this.#m()},onPurchaseDelete:t=>{Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t)).forEach(n=>{this.#S(n)}),this.#_(),this.#m()},onConnect:()=>{M(this.#i,!0)},onDisconnect:()=>{M(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#U(t){if(i(this.#t).searchQuery.trim()){const r=i(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(i(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!i(this.#t).selectedStores.includes(t.storeInfo.storeName))||i(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>i(this.#t).selectedWho.includes(r)))||i(this.#t).selectedProductTypes.length>0&&(!t.productType||!i(this.#t).selectedProductTypes.includes(t.productType))||i(this.#t).selectedTemperatures.length>0&&!(i(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||i(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=td(t=>{i(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=i(this.#t).selectedProductTypes.indexOf(t);r>-1?i(this.#t).selectedProductTypes.splice(r,1):i(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=i(this.#t).selectedTemperatures.indexOf(t);r>-1?i(this.#t).selectedTemperatures.splice(r,1):i(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){i(this.#t).selectedProductTypes=[],i(this.#t).selectedTemperatures=[]}setGroupBy(t){i(this.#t).groupBy=t}toggleStore(t){const r=i(this.#t).selectedStores.indexOf(t);r>-1?i(this.#t).selectedStores.splice(r,1):i(this.#t).selectedStores.push(t)}toggleWho(t){const r=i(this.#t).selectedWho.indexOf(t);r>-1?i(this.#t).selectedWho.splice(r,1):i(this.#t).selectedWho.push(t)}clearStoreFilters(){i(this.#t).selectedStores=[]}clearWhoFilters(){i(this.#t).selectedWho=[]}handleSort(t){i(this.#t).sortColumn===t?i(this.#t).sortDirection=i(this.#t).sortDirection==="asc"?"desc":"asc":(i(this.#t).sortColumn=t,i(this.#t).sortDirection="asc")}clearFilters(){M(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return i(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[i(this.#t).sortColumn],s=n[i(this.#t).sortColumn];return i(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,s=parseFloat(s)||0):i(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,s=n.purchases?.length||0),a<s?i(this.#t).sortDirection==="asc"?-1:1:a>s?i(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getNeededForProduct(t){return this.totalNeededByDateRange.get(t)??[]}async applyManualOverride(t,r,n=null){const a=this.#e.get(t);if(!a)throw new Error(`Product ${t} not found`);const{updateProduct:s}=await Na(async()=>{const{updateProduct:o}=await Promise.resolve().then(()=>Aa);return{updateProduct:o}},void 0);await s(t,{totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n}),this.#e.set(t,{...a,totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n,totalNeededArray:r,displayTotalNeeded:rn(r)}),this.#w()}async removeManualOverride(t){const r=this.#e.get(t);if(!r)throw new Error(`Product ${t} not found`);const{updateProduct:n}=await Na(async()=>{const{updateProduct:s}=await Promise.resolve().then(()=>Aa);return{updateProduct:s}},void 0);await n(t,{totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null});const a=r.byDateParsed?Fs(r.byDateParsed):[];this.#e.set(t,{...r,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,totalNeededArray:a,displayTotalNeeded:rn(a)}),this.#w()}hasManualOverride(t){return this.#e.get(t)?.totalNeededIsManualOverride??!1}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDateParsed?id(n.byDateParsed,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDateParsed&&n.byDateParsed[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDateParsed?ud(r.byDateParsed):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDateParsed?Object.keys(r.byDateParsed).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDateParsed||!i(this.#a)||!i(this.#s)?0:cd(r.byDateParsed,i(this.#a),i(this.#s))}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDateParsed||!i(this.#a)||!i(this.#s)?[]:Object.keys(r.byDateParsed).filter(a=>{const s=new Date(a),o=i(this.#a)?new Date(i(this.#a)):null,l=i(this.#s)?new Date(i(this.#s)):null;return o&&l&&s>=o&&s<=l}).flatMap(a=>r.byDateParsed[a]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){this.clearCache(),await this.initialize(t)}clearCache(){this.#e.clear(),M(this.#n,[],!0),M(this.#l,null),this.#u&&localStorage.removeItem(this.#u),this.#v&&localStorage.removeItem(this.#v),console.log("[ProductsStore] Cache vidé")}destroy(){this.#h?.(),this.#h=null,this.#p&&(clearTimeout(this.#p),this.#p=null),console.log("[ProductsStore] Ressources nettoyées")}}const D=new _d;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const gd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var yd=Yc("<svg><!><!></svg>");function ce(e,t){W(t,!0);const r=Ir(t,"color",3,"currentColor"),n=Ir(t,"size",3,24),a=Ir(t,"strokeWidth",3,2),s=Ir(t,"absoluteStrokeWidth",3,!1),o=Ir(t,"iconNode",19,()=>[]),l=ie(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=yd();Hs(c,p=>({...gd,...l,width:n(),height:n(),stroke:r(),"stroke-width":p,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>s()?Number(a())*24/Number(n()):a()]);var u=d(c);Re(u,17,o,qr,(p,h)=>{var m=z(()=>ko(i(h),2));let _=()=>i(m)[0],S=()=>i(m)[1];var y=V(),b=U(y);tu(b,_,!0,(C,A)=>{Hs(C,()=>({...S()}))}),g(p,y)});var f=v(u);oe(f,()=>t.children??ne),g(e,c),G()}function Ja(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ce(e,le({name:"archive"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function bd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ce(e,le({name:"bean"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function wd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ce(e,le({name:"beef"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Sd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ce(e,le({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Ed(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ce(e,le({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Pd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ce(e,le({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function xd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ce(e,le({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function $d(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ce(e,le({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function kd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];ce(e,le({name:"combine"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function ms(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ce(e,le({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Nd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ce(e,le({name:"egg"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Za(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ce(e,le({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function uo(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ce(e,le({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Td(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ce(e,le({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Ad(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ce(e,le({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Cd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ce(e,le({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Md(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ce(e,le({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function ca(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ce(e,le({name:"package"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Dd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Id(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ce(e,le({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Rd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ce(e,le({name:"save"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Od(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ce(e,le({name:"search"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Ln(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ce(e,le({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Kn(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ce(e,le({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function jn(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ce(e,le({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Hi(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ce(e,le({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function wn(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ce(e,le({name:"store"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Ki(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ce(e,le({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function _s(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ce(e,le({name:"user"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Qi(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ce(e,le({name:"users"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function qd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ce(e,le({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function Yi(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]];ce(e,le({name:"weight"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}function ht(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=V(),l=U(o);oe(l,()=>t.children??ne),g(a,o)},$$slots:{default:!0}})),G()}const Dt=vt({product:{id:"",isOpen:!1,tab:"recettes"}});function Bd(e,t){Dt.product.tab=e,Dt.product.isOpen=!0,Dt.product.id=t}function fo(){Dt.product.isOpen=!1,Dt.product.tab="",Dt.product.id=""}let vo=()=>localStorage.getItem("appwrite-user-name")||"";function zn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:bd};case"animaux":return{displayName:"Viandes et Poissons",icon:wd};case"legumes":return{displayName:"Fruits et Légumes",icon:Ed};case"sucres":return{displayName:"Sucrées",icon:Sd};case"lof":return{displayName:"L.O.F",icon:Nd};case"autres":return{displayName:"Autres",icon:Pd};case"epices":return{displayName:"Assaisonnements",icon:Td};case"frais":return{displayName:"Produits Frais",icon:Id};default:return{displayName:e,icon:ca}}}function ho(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Ji(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Qn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Ld(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function jd(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],s=n[t.sortColumn];return a<s?t.sortDirection==="asc"?-1:1:a>s?t.sortDirection==="asc"?1:-1:0}):e}function zd(e){let t=ae(!1),r=ae(null),n=ae("recettes");const a=z(()=>D.getEnrichedProductById(e)),s=z(()=>i(a)?.recipesArray??[]),o=z(()=>i(a)?.who??[]),l=z(()=>i(a)?.stockArray??[]),c=z(()=>i(a)?.purchases??[]),u=vt({purchase:{quantity:null,unit:"",store:"",who:vo()??"",price:null,notes:""},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});Qo(()=>{i(a)&&(u.purchase.quantity=i(a).missingQuantityArray[0]?.q??null,u.purchase.unit=i(a).totalNeededArray[0]?.u??"",u.purchase.store=i(a).storeInfo?.storeName??"",u.purchase.who=vo()??"",u.stock.unit=i(a).totalNeededArray[0]?.u??"",u.store.name=i(a).storeInfo?.storeName??null,u.store.comment=i(a).storeInfo?.storeComment??null)});let f=ae(null);const p=z(()=>i(f)?i(c).find(E=>E.$id===i(f))??null:null);async function h(E,R){M(t,!0),M(r,null);try{const k=await E();return R&&m("success",R),k}catch(k){const J=k instanceof Error?k.message:"Une erreur est survenue";return M(r,J,!0),m("error",J),console.error("[ProductModalState]",k),null}finally{M(t,!1)}}function m(E,R){const k=new CustomEvent("toast",{detail:{type:E,message:R}});window.dispatchEvent(k)}async function _(){i(a)&&await h(async()=>{if(!u.purchase.quantity||!u.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!D.currentMainId)throw new Error("mainId non disponible");const{quantity:E,unit:R}=ho(u.purchase.quantity,u.purchase.unit);i(a).isSynced||(console.log(`[ProductModalState] Produit ${i(a).$id} local, création pour purchase...`),await on(i(a).$id,{},k=>D.getEnrichedProductById(k))),await Li({products:[i(a).$id],mainId:D.currentMainId,unit:R,quantity:E,store:u.purchase.store||null,who:u.purchase.who||null,notes:u.purchase.notes||"",price:u.purchase.price||null}),u.purchase={quantity:i(a).missingQuantityArray[0]?.q??null,unit:i(a).totalNeededArray[0]?.u??"",store:u.purchase.store,who:u.purchase.who,price:null,notes:""}},"Achat ajouté avec succès")}function S(E){M(f,E.$id,!0)}function y(){M(f,null)}async function b(E){E.$id&&await h(async()=>{const{quantity:R,unit:k}=ho(E.quantity,E.unit);await ji(E.$id,{unit:k,quantity:R,store:E.store||null,who:E.who||null,notes:E.notes||"",price:E.price||null}),M(f,null)},"Achat modifié avec succès")}async function C(E){const R=i(c).find(k=>k.$id===E);R&&confirm(`Supprimer cet achat (${R.quantity} ${R.unit}) ?`)&&await h(async()=>{await zi(E)},"Achat supprimé avec succès")}async function A(){i(a)&&await h(async()=>{if(!u.stock.quantity||!u.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const E={quantity:u.stock.quantity.toString(),unit:u.stock.unit,notes:u.stock.notes,dateTime:u.stock.dateTime},R=[...i(l),E];i(a).isSynced?(console.log(`[ProductModalState] Produit ${i(a).$id} déjà sync, update stock normal...`),await Ya(i(a).$id,JSON.stringify(R))):(console.log(`[ProductModalState] Produit ${i(a).$id} local, création stock avec upsert...`),await on(i(a).$id,{stockReel:JSON.stringify(R)},k=>D.getEnrichedProductById(k))),u.stock.quantity=null,u.stock.notes="",u.stock.dateTime=new Date().toISOString()},"Relevé de stock ajouté")}async function P(E){i(a)&&confirm("Supprimer ce relevé de stock ?")&&await h(async()=>{const R=i(l).filter((k,J)=>J!==E);await Ya(i(a).$id,JSON.stringify(R))},"Relevé de stock supprimé")}async function x(E){!i(a)||!E.trim()||await h(async()=>{if(i(o).includes(E))throw new Error("Ce volontaire est déjà ajouté");const R=[...i(o),E.trim()];i(a).isSynced?(console.log(`[ProductModalState] Produit ${i(a).$id} déjà sync, update normal...`),await Qa(i(a).$id,R)):(console.log(`[ProductModalState] Produit ${i(a).$id} local, création avec upsert...`),await on(i(a).$id,{who:R},k=>D.getEnrichedProductById(k)))},"Volontaire ajouté")}async function T(E){i(a)&&confirm(`Retirer ${E} ?`)&&await h(async()=>{await Qa(i(a).$id,i(o).filter(R=>R!==E))},"Volontaire retiré")}async function I(E){i(a)&&await h(async()=>{i(a).isSynced?(console.log(`[ProductModalState] Produit ${i(a).$id} déjà sync, update store normal...`),await Bi(i(a).$id,E)):(console.log(`[ProductModalState] Produit ${i(a).$id} local, création store avec upsert...`),await on(i(a).$id,{store:JSON.stringify(E)},R=>D.getEnrichedProductById(R)))},"Magasin mis à jour")}return{get loading(){return i(t)},get error(){return i(r)},get currentTab(){return i(n)},set currentTab(E){M(n,E,!0)},get product(){return i(a)},get recipes(){return i(s)},get whoList(){return i(o)},get stockEntries(){return i(l)},get purchasesList(){return i(c)},get editingPurchaseId(){return i(f)},get editingPurchaseData(){return i(p)},forms:u,addPurchase:_,startEditPurchase:S,cancelEditPurchase:y,updateEditedPurchase:b,removePurchase:C,addStock:A,removeStock:P,addVolunteer:x,removeVolunteer:T,updateStore:I,formatQuantity:Ji,formatDate:Qn,formatDisplayQuantity:Ld}}function Ud(e,t,r){t()&&r().addPurchase()}function Vd(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Wd(e,t){t().cancelEditPurchase()}var Gd=$("<option> </option>"),Hd=$("<option> </option>"),Kd=$('<span class="loading loading-spinner loading-sm"></span>'),Qd=$('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Yd=$("<option> </option>"),Jd=$('<span class="loading loading-spinner loading-sm"></span>'),Zd=$('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/> <datalist id="browsers"></datalist></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Xd=(e,t,r)=>t(i(r)),Fd=(e,t,r)=>t(i(r).$id),ef=$('<span class="loading loading-spinner loading-sm"></span>'),tf=$('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),rf=$('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),nf=$('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <label class="select w-28"><!> <select required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></label> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/> <datalist id="stores"></datalist></label> <label class="input w-48"><!> <input type="text" placeholder="Qui" maxlength="25" list="users"/> <datalist id="users"></datalist></label> <label class="input validator w-28"><input type="number" step="1" placeholder="Prix" min="0"/> <span class="label">€</span></label> <label class="input validator"><!> <input type="text" placeholder="Notes" maxlength="250"/></label></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function af(e,t){W(t,!0);let r=Ir(t,"modalState",7);function n(){return r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(f){return f.quantity!==null&&f.quantity!==0&&f.unit?.trim()!==""}function s(f){r().removePurchase(f)}function o(f){r().startEditPurchase(f)}var l=V(),c=U(l);{var u=f=>{var p=nf(),h=d(p),m=d(h);Kn(m,{class:"h-5 w-5"});var _=v(h,2),S=d(_),y=v(d(S),2),b=d(y),C=d(b);ca(C,{class:"h-4 w-4 opacity-50"});var A=v(C,2),P=v(b,2),x=d(P);Yi(x,{class:"h-4 w-4 opacity-50"});var T=v(x,2),I=d(T);I.value=I.__value="";var E=v(I);E.value=E.__value="kg";var R=v(E);R.value=R.__value="gr.";var k=v(R);k.value=k.__value="l.";var J=v(k);J.value=J.__value="ml";var se=v(J);se.value=se.__value="unité";var Me=v(se);Me.value=Me.__value="bottes";var xe=v(P,2),Se=d(xe);wn(Se,{class:"h-4 w-4 opacity-50"});var be=v(Se,2),Z=v(be,2);Re(Z,21,()=>D.uniqueStores,qr,(F,fe)=>{var $e=Gd(),qt=d($e),B={};j(()=>{O(qt,i(fe)),B!==(B=i(fe))&&($e.value=($e.__value=i(fe))??"")}),g(F,$e)});var N=v(xe,2),H=d(N);_s(H,{class:"h-4 w-4 opacity-50"});var ue=v(H,2),ge=v(ue,2);Re(ge,21,()=>D.uniqueWho,qr,(F,fe)=>{var $e=Hd(),qt=d($e),B={};j(()=>{O(qt,i(fe)),B!==(B=i(fe))&&($e.value=($e.__value=i(fe))??"")}),g(F,$e)});var me=v(N,2),et=d(me),Ge=v(me,2),de=d(Ge);Md(de,{class:"h-4 w-4 opacity-50"});var Ee=v(de,2),qe=v(y,2),De=d(qe);De.__click=[Ud,n,r];var Ie=d(De);{var Be=F=>{var fe=Kd();g(F,fe)},Pe=F=>{var fe=st("Ajouter l'achat");g(F,fe)};q(Ie,F=>{r().loading?F(Be):F(Pe,!1)})}var He=v(_,2);{var mt=F=>{var fe=Qd(),$e=d(fe);Kn($e,{class:"mx-auto mb-2 h-12 w-12"}),g(F,fe)},lr=F=>{var fe=rf(),$e=d(fe),qt=v(d($e));Re(qt,21,()=>r().purchasesList,B=>B.$id,(B,L,ke)=>{var St=V(),cr=U(St);{var tt=_t=>{var Bt=Zd(),Lt=d(Bt),Ze=d(Lt),Et=d(Ze),jt=v(Et,2),Pt=d(jt);Pt.value=Pt.__value="kg";var zt=v(Pt);zt.value=zt.__value="gr.";var Le=v(zt);Le.value=Le.__value="l.";var xt=v(Le);xt.value=xt.__value="ml";var $t=v(xt);$t.value=$t.__value="unité";var Yt=v($t);Yt.value=Yt.__value="bottes";var it=v(Lt),kr=d(it),Zr=v(kr,2);Re(Zr,21,()=>D.uniqueStores,qr,(Y,ve)=>{var Q=Yd(),Ne=d(Q),Te={};j(()=>{O(Ne,i(ve)),Te!==(Te=i(ve))&&(Q.value=(Q.__value=i(ve))??"")}),g(Y,Q)});var Nr=v(it),ur=d(Nr),Tr=v(Nr),dr=d(Tr),Ar=v(Tr),Xr=d(Ar),fr=v(Ar),lt=d(fr),K=v(fr),he=d(K),rt=d(he);rt.__click=[Vd,r,a];var ct=d(rt);{var Ke=Y=>{var ve=Jd();g(Y,ve)},nt=Y=>{Rd(Y,{class:"h-3 w-3"})};q(ct,Y=>{r().loading?Y(Ke):Y(nt,!1)})}var gt=v(rt,2);gt.__click=[Wd,r];var we=d(gt);ht(we,{class:"h-3 w-3"}),j((Y,ve)=>{O(dr,Y),rt.disabled=ve},[()=>Qn(i(L).$createdAt),()=>r().loading||!a(i(L))]),Qe(Et,()=>i(L).quantity,Y=>i(L).quantity=Y),Ua(jt,()=>i(L).unit,Y=>i(L).unit=Y),Qe(kr,()=>i(L).store,Y=>i(L).store=Y),Qe(ur,()=>i(L).who,Y=>i(L).who=Y),Qe(Xr,()=>i(L).price,Y=>i(L).price=Y),Qe(lt,()=>i(L).notes,Y=>i(L).notes=Y),g(_t,Bt)},$r=_t=>{var Bt=tf(),Lt=d(Bt),Ze=d(Lt),Et=v(Lt),jt=d(Et),Pt=v(Et),zt=d(Pt),Le=v(Pt),xt=d(Le),$t=v(Le),Yt=d($t),it=v($t),kr=d(it),Zr=v(it),Nr=d(Zr),ur=d(Nr);ur.__click=[Xd,o,L];var Tr=d(ur);Hi(Tr,{class:"h-4 w-4"});var dr=v(ur,2);dr.__click=[Fd,s,L];var Ar=d(dr);{var Xr=lt=>{var K=ef();g(lt,K)},fr=lt=>{ht(lt,{class:"h-4 w-4"})};q(Ar,lt=>{r().loading?lt(Xr):lt(fr,!1)})}j((lt,K)=>{O(Ze,lt),O(jt,i(L).store||"-"),O(zt,i(L).who||"-"),O(xt,K),O(Yt,i(L).price?`${i(L).price}€`:"-"),O(kr,i(L).notes||"-"),dr.disabled=r().loading},[()=>Ji(i(L).quantity,i(L).unit),()=>Qn(i(L).$createdAt)]),g(_t,Bt)};q(cr,_t=>{r().editingPurchaseId===i(L).$id?_t(tt):_t($r,!1)})}g(B,St)}),g(F,fe)};q(He,F=>{r().purchasesList.length===0?F(mt):F(lr,!1)})}j(F=>De.disabled=F,[()=>r().loading||!n()]),Qe(A,()=>r().forms.purchase.quantity,F=>r().forms.purchase.quantity=F),Ua(T,()=>r().forms.purchase.unit,F=>r().forms.purchase.unit=F),Qe(be,()=>r().forms.purchase.store,F=>r().forms.purchase.store=F),Qe(ue,()=>r().forms.purchase.who,F=>r().forms.purchase.who=F),Qe(et,()=>r().forms.purchase.price,F=>r().forms.purchase.price=F),Qe(Ee,()=>r().forms.purchase.notes,F=>r().forms.purchase.notes=F),g(f,p)};q(c,f=>{r()&&r().product&&f(u)})}g(e,l),G()}Rt(["click"]);class sf{#e;#r=new Set;constructor(t){this.#e=t}get current(){return this.#e}set current(t){this.#e!=t&&(this.#e=t,this.#r.forEach(r=>r(t)))}on(t){return this.#r.add(t),()=>this.#r.delete(t)}}const Zi=e=>new sf(e),Xa=Symbol.for("atomico.hooks");globalThis[Xa]=globalThis[Xa]||{};let Gr=globalThis[Xa];const of=Symbol.for("Atomico.suspense"),Xi=Symbol.for("Atomico.effect"),lf=Symbol.for("Atomico.layoutEffect"),Fi=Symbol.for("Atomico.insertionEffect"),Yr=(e,t,r)=>{const{i:n,hooks:a}=Gr.c,s=a[n]=a[n]||{};return s.value=e(s.value),s.effect=t,s.tag=r,Gr.c.i++,a[n].value},cf=e=>Yr((t=Zi(e))=>t),$n=()=>Yr((e=Zi(Gr.c.host))=>e),el=()=>Gr.c.update,uf=(e,t,r=0)=>{let n={},a=!1;const s=()=>a,o=(l,c)=>{for(const u in n){const f=n[u];f.effect&&f.tag===l&&(f.value=f.effect(f.value,c))}};return{load:l=>{Gr.c={host:t,hooks:n,update:e,i:0,id:r};let c;try{a=!1,c=l()}catch(u){if(u!==of)throw u;a=!0}finally{Gr.c=null}return c},cleanEffects:l=>(o(Fi,l),()=>(o(lf,l),()=>{o(Xi,l)})),isSuspense:s}},Jr=Symbol.for;function tl(e,t){const r=e.length;if(r!==t.length)return!1;for(let n=0;n<r;n++){let a=e[n],s=t[n];if(a!==s)return!1}return!0}const Mt=e=>typeof e=="function",fn=e=>typeof e=="object",{isArray:df}=Array,Fa=(e,t)=>(t?e instanceof HTMLStyleElement:!0)&&"hydrate"in(e?.dataset||{});function rl(e,t){let r;const n=a=>{let{length:s}=a;for(let o=0;o<s;o++){const l=a[o];if(l&&Array.isArray(l))n(l);else{const c=typeof l;if(l==null||c==="function"||c==="boolean")continue;c==="string"||c==="number"?(r==null&&(r=""),r+=l):(r!=null&&(t(r),r=null),t(l))}}};n(e),r!=null&&t(r)}const nl=(e,t,r)=>(e.addEventListener(t,r),()=>e.removeEventListener(t,r));class al{constructor(t,r,n){this.message=r,this.target=t,this.value=n}}class sl extends al{}class ff extends al{}const Yn="Custom",vf=null,hf={true:1,"":1,1:1};function pf(e,t,r,n,a){const{type:s,reflect:o,event:l,value:c,attr:u=mf(t)}=r?.name!=Yn&&fn(r)&&r!=vf?r:{type:r},f=s?.name===Yn&&s.map,p=c!=null?s==Function||!Mt(c)?()=>c:c:null;Object.defineProperty(e,t,{configurable:!0,set(h){const m=this[t];p&&s!=Boolean&&h==null&&(h=p());const{error:_,value:S}=(f?yf:bf)(s,h);if(_&&S!=null)throw new sl(this,`The value defined for prop '${t}' must be of type '${s.name}'`,S);m!=S&&(this._props[t]=S??void 0,this.update(),l&&ol(this,l),this.updated.then(()=>{o&&(this._ignoreAttr=u,_f(this,s,u,this[t]),this._ignoreAttr=null)}))},get(){return this._props[t]}}),p&&(a[t]=p()),n[u]={prop:t,type:s}}const ol=(e,{type:t,base:r=CustomEvent,...n})=>e.dispatchEvent(new r(t,n)),mf=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),_f=(e,t,r,n)=>n==null||t==Boolean&&!n?e.removeAttribute(r):e.setAttribute(r,t?.name===Yn&&t?.serialize?t?.serialize(n):fn(n)?JSON.stringify(n):t==Boolean?"":n),gf=(e,t)=>e==Boolean?!!hf[t]:e==Number?Number(t):e==String?t:e==Array||e==Object?JSON.parse(t):e.name==Yn?t:new e(t),yf=({map:e},t)=>{try{return{value:e(t),error:!1}}catch{return{value:t,error:!0}}},bf=(e,t)=>e==null||t==null?{value:t,error:!1}:e!=String&&t===""?{value:void 0,error:!1}:e==Object||e==Array||e==Symbol?{value:t,error:{}.toString.call(t)!==`[object ${e.name}]`}:t instanceof e?{value:t,error:e==Number&&Number.isNaN(t.valueOf())}:e==String||e==Number||e==Boolean?{value:t,error:e==Number?typeof t!="number"?!0:Number.isNaN(t):e==String?typeof t!="string":typeof t!="boolean"}:{value:t,error:!0};let wf=0;const Sf=e=>(e?.dataset||{})?.hydrate||""||"c"+wf++,kn=(e,t=HTMLElement)=>{const r={},n={},a="prototype"in t&&t.prototype instanceof Element,s=a?t:"base"in t?t.base:HTMLElement,{props:o,styles:l}=a?e:t;class c extends s{constructor(){super(),this._setup(),this._render=()=>e({...this._props});for(const f in n)this[f]=n[f]}static get styles(){return[super.styles,l]}async _setup(){if(this._props)return;this._props={};let f,p;this.mounted=new Promise(y=>this.mount=()=>{y(),f!=this.parentNode&&(p!=f?this.unmounted.then(this.update):this.update()),f=this.parentNode}),this.unmounted=new Promise(y=>this.unmount=()=>{y(),(f!=this.parentNode||!this.isConnected)&&(h.cleanEffects(!0)()(),p=this.parentNode,f=null)}),this.symbolId=this.symbolId||Symbol(),this.symbolIdParent=Symbol();const h=uf(()=>this.update(),this,Sf(this));let m,_=!0;const S=Fa(this);this.update=()=>(m||(m=!0,this.updated=(this.updated||this.mounted).then(()=>{try{const y=h.load(this._render),b=h.cleanEffects();return y&&y.render(this,this.symbolId,S),m=!1,_&&!h.isSuspense()&&(_=!1,!S&&Ef(this)),b()}finally{m=!1}}).then(y=>{y&&y()})),this.updated),this.update()}connectedCallback(){this.mount(),super.connectedCallback&&super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.unmount()}attributeChangedCallback(f,p,h){if(r[f]){if(f===this._ignoreAttr||p===h)return;const{prop:m,type:_}=r[f];try{this[m]=gf(_,h)}catch{throw new ff(this,`The value defined as attr '${f}' cannot be parsed by type '${_.name}'`,h)}}else super.attributeChangedCallback(f,p,h)}static get props(){return{...super.props,...o}}static get observedAttributes(){const f=super.observedAttributes||[];for(const p in o)pf(this.prototype,p,o[p],r,n);return Object.keys(r).concat(f)}}return c};function Ef(e){const{styles:t}=e.constructor,{shadowRoot:r}=e;if(r&&t.length){const n=[];rl(t,a=>{a&&(a instanceof Element?r.appendChild(a.cloneNode(!0)):n.push(a))}),n.length&&(r.adoptedStyleSheets=n)}}const il=e=>(t,r)=>{Yr(([n,a]=[])=>((a||!a)&&(a&&tl(a,r)?n=n||!0:(Mt(n)&&n(),n=null)),[n,r]),([n,a],s)=>s?(Mt(n)&&n(),[]):[n||t(),a],e)},Sn=il(Xi),Pf=il(Fi);class ll extends Array{constructor(t,r){let n=!0;const a=s=>{try{r(s,this,n)}finally{n=!1}};super(void 0,a,r),a(t)}}const gs=e=>{const t=el();return Yr((r=new ll(e,(n,a,s)=>{n=Mt(n)?n(a[0]):n,n!==a[0]&&(a[0]=n,s||t())}))=>r)},Ht=(e,t)=>{const[r]=Yr(([n,a,s=0]=[])=>((!a||a&&!tl(a,t))&&(n=e()),[n,t,s]));return r},ys=e=>{const{current:t}=$n();if(!(e in t))throw new sl(t,`For useProp("${e}"), the prop does not exist on the host.`,e);return Yr((r=new ll(t[e],(n,a)=>{n=Mt(n)?n(t[e]):n,t[e]=n}))=>(r[0]=t[e],r))},tr=(e,t={})=>{const r=$n();return r[e]||(r[e]=(n=t.detail)=>ol(r.current,{type:e,...t,detail:n})),r[e]},es=Jr("atomico/options");globalThis[es]=globalThis[es]||{sheet:!!document.adoptedStyleSheets};const cl=globalThis[es],xf={checked:1,value:1,selected:1},$f={list:1,type:1,size:1,form:1,width:1,height:1,src:1,href:1,slot:1},kf={shadowDom:1,staticNode:1,cloneNode:1,children:1,key:1},Un={},ts=[];class rs extends Text{}const Nf=Jr("atomico/id"),vn=Jr("atomico/type"),Ca=Jr("atomico/ref"),ul=Jr("atomico/vnode"),Tf=()=>{};function Af(e,t,r){return fl(this,e,t,r)}const dl=(e,t,...r)=>{const n=t||Un;let{children:a}=n;if(a=a??(r.length?r:ts),e===Tf)return a;const s=e?e instanceof Node?1:e.prototype instanceof HTMLElement&&2:0;if(s===!1&&e instanceof Function)return e(a!=ts?{children:a,...n}:n);const o=cl.render||Af;return{[vn]:ul,type:e,props:n,children:a,key:n.key,shadow:n.shadowDom,static:n.staticNode,raw:s,is:n.is,clone:n.cloneNode,render:o}};function fl(e,t,r=Nf,n,a){let s;if(t&&t[r]&&t[r].vnode==e||e[vn]!=ul)return t;(e||!t)&&(a=a||e.type=="svg",s=e.type!="host"&&(e.raw==1?(t&&e.clone?t[Ca]:t)!=e.type:e.raw==2?!(t instanceof e.type):t?t[Ca]||t.localName!=e.type:!t),s&&e.type!=null&&(e.raw==1&&e.clone?(n=!0,t=e.type.cloneNode(!0),t[Ca]=e.type):t=e.raw==1?e.type:e.raw==2?new e.type:a?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,e.is?{is:e.is}:void 0)));const o=t[r]?t[r]:Un,{vnode:l=Un,cycle:c=0}=o;let{fragment:u,handlers:f}=o;const{children:p=ts,props:h=Un}=l;if(f=s?{}:f||{},e.static&&!s)return t;if(e.shadow&&!t.shadowRoot&&t.attachShadow({mode:"open",...e.shadow}),e.props!=h&&Df(t,h,e.props,f,a),e.children!==p){const m=e.shadow?t.shadowRoot:t;u=Mf(e.children,u,m,r,!c&&n,a&&e.type=="foreignObject"?!1:a)}return t[r]={vnode:e,handlers:f,fragment:u,cycle:c+1},t}function Cf(e,t){const r=new rs(""),n=new rs("");let a;if(e[t?"prepend":"append"](r),t){let{lastElementChild:s}=e;for(;s;){const{previousElementSibling:o}=s;if(Fa(s,!0)&&!Fa(o,!0)){a=s;break}s=o}}return a?a.before(n):e.append(n),{markStart:r,markEnd:n}}function Mf(e,t,r,n,a,s){e=e==null?null:df(e)?e:[e];const o=t||Cf(r,a),{markStart:l,markEnd:c,keyes:u}=o;let f;const p=u&&new Set;let h=l;if(e&&rl(e,m=>{if(typeof m=="object"&&!m[vn])return;const _=m[vn]&&m.key,S=u&&_!=null&&u.get(_);h!=c&&h===S?p.delete(h):h=h==c?c:h.nextSibling;const y=u?S:h;let b=y;if(m[vn])b=fl(m,y,n,a,s);else{const C=m+"";!(b instanceof Text)||b instanceof rs?b=new Text(C):b.data!=C&&(b.data=C)}b!=h&&(u&&p.delete(b),!y||u?(r.insertBefore(b,h),u&&h!=c&&p.add(h)):y==c?r.insertBefore(b,c):(r.replaceChild(b,y),h=b)),_!=null&&(f=f||new Map,f.set(_,b))}),h=h==c?c:h.nextSibling,t&&h!=c)for(;h!=c;){const m=h;h=h.nextSibling,m.remove()}return p&&p.forEach(m=>m.remove()),o.keyes=f,o}function Df(e,t,r,n,a){for(const s in t)!(s in r)&&po(e,s,t[s],null,a,n);for(const s in r)po(e,s,t[s],r[s],a,n)}function po(e,t,r,n,a,s){if(t=t=="class"&&!a?"className":t,r=r??null,n=n??null,t in e&&xf[t]&&(r=e[t]),!(n===r||kf[t]||t[0]=="_"))if(t[0]=="o"&&t[1]=="n"&&(Mt(n)||Mt(r)))If(e,t.slice(2),n,s);else if(t=="ref")n&&(Mt(n)?n(e):n.current=e);else if(t=="style"){const{style:o}=e;r=r||"",n=n||"";const l=fn(r),c=fn(n);if(l)for(const u in r)if(c)!(u in n)&&mo(o,u,null);else break;if(c)for(const u in n){const f=n[u];l&&r[u]===f||mo(o,u,f)}else o.cssText=n}else{const o=t[0]=="$"?t.slice(1):t;o===t&&(!a&&!$f[t]&&t in e||Mt(n)||Mt(r))?e[t]=n??"":n==null?e.removeAttribute(o):e.setAttribute(o,fn(n)?JSON.stringify(n):n)}}function If(e,t,r,n){if(n.handleEvent||(n.handleEvent=a=>n[a.type].call(e,a)),r){if(!n[t]){const a=r.capture||r.once||r.passive?Object.assign({},r):null;e.addEventListener(t,n,a)}n[t]=r}else n[t]&&(e.removeEventListener(t,n),delete n[t])}function mo(e,t,r){let n="setProperty";r==null&&(n="removeProperty",r=null),~t.indexOf("-")?e[n](t,r):e[t]=r}const _o={};function ua(e,...t){const r=(e.raw||e).reduce((n,a,s)=>n+a+(t[s]||""),"");return _o[r]=_o[r]||Rf(r)}function Rf(e){if(cl.sheet){const t=new CSSStyleSheet;return t.replaceSync(e),t}else{const t=document.createElement("style");return t.textContent=e,t}}const Of=dl("host",{style:"display: contents"}),Ma=Jr("atomico/context"),qf=(e,t)=>{const r=$n();Pf(()=>nl(r.current,"ConnectContext",n=>{e===n.detail.id&&(n.stopPropagation(),n.detail.connect(t))}),[e])},Bf=e=>{const t=tr("ConnectContext",{bubbles:!0,composed:!0}),r=()=>{let s;return t({id:e,connect(o){s=o}}),s},[n,a]=gs(r);return Sn(()=>{n||(e[Ma]||(e[Ma]=customElements.whenDefined(new e().localName)),e[Ma].then(()=>a(r)))},[e]),n},Lf=e=>{const t=Bf(e),r=el();return Sn(()=>{if(t)return nl(t,"UpdatedValue",r)},[t]),(t||e).value},jf=e=>{const t=kn(()=>(qf(t,$n().current),Of),{props:{value:{type:Object,event:{type:"UpdatedValue"},value:()=>e}}});return t.value=e,t},ye=(e,t,r)=>(t==null?t={key:r}:t.key=r,dl(e,t)),hn=ye,vl=ua`*,*:before,*:after{box-sizing:border-box}button{padding:0;touch-action:manipulation;cursor:pointer;user-select:none}`,hl=ua`.vh{position:absolute;transform:scale(0)}`;function bs(){const e=new Date;return new Oe(e.getFullYear(),e.getMonth()+1,e.getDate())}function ws(e,t=0){const r=wt(e),n=r.getUTCDay(),a=(n<t?7:0)+n-t;return r.setUTCDate(r.getUTCDate()-a),Oe.from(r)}function pl(e,t=0){return ws(e,t).add({days:6})}function ml(e){return Oe.from(new Date(Date.UTC(e.year,e.month,0)))}function da(e,t,r){return t&&Oe.compare(e,t)<0?t:r&&Oe.compare(e,r)>0?r:e}const zf={days:1};function Uf(e,t=0){let r=ws(e.toPlainDate(),t);const n=pl(ml(e),t),a=[];for(;Oe.compare(r,n)<0;){const s=[];for(let o=0;o<7;o++)s.push(r),r=r.add(zf);a.push(s)}return a}function wt(e){return new Date(Date.UTC(e.year,e.month-1,e.day??1))}const Vf=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/,Da=(e,t)=>e.toString().padStart(t,"0");class Oe{constructor(t,r,n){this.year=t,this.month=r,this.day=n}add(t){const r=wt(this);if("days"in t)return r.setUTCDate(this.day+t.days),Oe.from(r);let{year:n,month:a}=this;"months"in t?(a=this.month+t.months,r.setUTCMonth(a-1)):(n=this.year+t.years,r.setUTCFullYear(n));const s=Oe.from(wt({year:n,month:a,day:1}));return da(Oe.from(r),s,ml(s))}toString(){return`${Da(this.year,4)}-${Da(this.month,2)}-${Da(this.day,2)}`}toPlainYearMonth(){return new fa(this.year,this.month)}equals(t){return Oe.compare(this,t)===0}static compare(t,r){return t.year<r.year?-1:t.year>r.year?1:t.month<r.month?-1:t.month>r.month?1:t.day<r.day?-1:t.day>r.day?1:0}static from(t){if(typeof t=="string"){const r=t.match(Vf);if(!r)throw new TypeError(t);const[,n,a,s]=r;return new Oe(parseInt(n,10),parseInt(a,10),parseInt(s,10))}return new Oe(t.getUTCFullYear(),t.getUTCMonth()+1,t.getUTCDate())}}class fa{constructor(t,r){this.year=t,this.month=r}add(t){const r=wt(this),n=(t.months??0)+(t.years??0)*12;return r.setUTCMonth(r.getUTCMonth()+n),new fa(r.getUTCFullYear(),r.getUTCMonth()+1)}equals(t){return this.year===t.year&&this.month===t.month}toPlainDate(){return new Oe(this.year,this.month,1)}}function Jn(e,t){if(t)try{return e.from(t)}catch{}}function rr(e){const[t,r]=ys(e);return[Ht(()=>Jn(Oe,t),[t]),n=>r(n?.toString())]}function Wf(e){const[t="",r]=ys(e);return[Ht(()=>{const[n,a]=t.split("/"),s=Jn(Oe,n),o=Jn(Oe,a);return s&&o?[s,o]:[]},[t]),n=>r(`${n[0]}/${n[1]}`)]}function Gf(e){const[t="",r]=ys(e);return[Ht(()=>{const n=[];for(const a of t.trim().split(/\s+/)){const s=Jn(Oe,a);s&&n.push(s)}return n},[t]),n=>r(n.join(" "))]}function En(e,t){return Ht(()=>new Intl.DateTimeFormat(t,{timeZone:"UTC",...e}),[t,e])}function go(e,t,r){const n=En(e,r);return Ht(()=>{const a=[],s=new Date;for(var o=0;o<7;o++){const l=(s.getUTCDay()-t+7)%7;a[l]=n.format(s),s.setUTCDate(s.getUTCDate()+1)}return a},[t,n])}const yo=(e,t,r)=>da(e,t,r)===e,bo=e=>e.target.matches(":dir(ltr)"),Hf={month:"long",day:"numeric"},Kf={month:"long"},Qf={weekday:"long"},Ia={bubbles:!0};function Yf({props:e,context:t}){const{offset:r}=e,{firstDayOfWeek:n,isDateDisallowed:a,min:s,max:o,today:l,page:c,locale:u,focusedDate:f,formatWeekday:p}=t,h=l??bs(),m=go(Qf,n,u),_=Ht(()=>({weekday:p}),[p]),S=go(_,n,u),y=En(Hf,u),b=En(Kf,u),C=Ht(()=>c.start.add({months:r}),[c,r]),A=Ht(()=>Uf(C,n),[C,n]),P=tr("focusday",Ia),x=tr("selectday",Ia),T=tr("hoverday",Ia);function I(k){P(da(k,s,o))}function E(k){let J;switch(k.key){case"ArrowRight":J=f.add({days:bo(k)?1:-1});break;case"ArrowLeft":J=f.add({days:bo(k)?-1:1});break;case"ArrowDown":J=f.add({days:7});break;case"ArrowUp":J=f.add({days:-7});break;case"PageUp":J=f.add(k.shiftKey?{years:-1}:{months:-1});break;case"PageDown":J=f.add(k.shiftKey?{years:1}:{months:1});break;case"Home":J=ws(f,n);break;case"End":J=pl(f,n);break;default:return}I(J),k.preventDefault()}function R(k){const J=C.equals(k);if(!t.showOutsideDays&&!J)return;const se=k.equals(f),Me=k.equals(h),xe=wt(k),Se=a?.(xe),be=!yo(k,s,o);let Z="",N;if(t.type==="range"){const[H,ue]=t.value,ge=H?.equals(k),me=ue?.equals(k);N=H&&ue&&yo(k,H,ue),Z=`${ge?"range-start":""} ${me?"range-end":""} ${N&&!ge&&!me?"range-inner":""}`}else t.type==="multi"?N=t.value.some(H=>H.equals(k)):N=t.value?.equals(k);return{part:`${`button day day-${xe.getDay()} ${J?N?"selected":"":"outside"} ${Se?"disallowed":""} ${Me?"today":""} ${t.getDayParts?.(xe)??""}`} ${Z}`,tabindex:J&&se?0:-1,disabled:be,"aria-disabled":Se?"true":void 0,"aria-pressed":J&&N,"aria-current":Me?"date":void 0,"aria-label":y.format(xe),onkeydown:E,onclick(){Se||x(k),I(k)},onmouseover(){!Se&&!be&&T(k)}}}return{weeks:A,yearMonth:C,daysLong:m,daysVisible:S,formatter:b,getDayProps:R}}const Ra=bs(),Ss=jf({type:"date",firstDayOfWeek:1,focusedDate:Ra,page:{start:Ra.toPlainYearMonth(),end:Ra.toPlainYearMonth()}});customElements.define("calendar-ctx",Ss);const Jf=(e,t)=>(t+e)%7,Zf=kn(e=>{const t=Lf(Ss),r=cf(),n=Yf({props:e,context:t});function a(){r.current.querySelector("button[tabindex='0']")?.focus()}return hn("host",{shadowDom:!0,focus:a,children:[ye("div",{id:"h",part:"heading",children:n.formatter.format(wt(n.yearMonth))}),hn("table",{ref:r,"aria-labelledby":"h",part:"table",children:[ye("thead",{children:ye("tr",{part:"tr head",children:n.daysLong.map((s,o)=>hn("th",{part:`th day day-${Jf(t.firstDayOfWeek,o)}`,scope:"col",children:[ye("span",{class:"vh",children:s}),ye("span",{"aria-hidden":"true",children:n.daysVisible[o]})]}))})}),ye("tbody",{children:n.weeks.map((s,o)=>ye("tr",{part:"tr week",children:s.map((l,c)=>{const u=n.getDayProps(l);return ye("td",{part:"td",children:u&&ye("button",{...u,children:l.day})},c)})},o))})]})]})},{props:{offset:{type:Number,value:0}},styles:[vl,hl,ua`:host{--color-accent: black;--color-text-on-accent: white;display:flex;flex-direction:column;gap:.25rem;text-align:center;inline-size:fit-content}table{border-collapse:collapse;font-size:.875rem}th{font-weight:700;block-size:2.25rem}td{padding-inline:0}button{color:inherit;font-size:inherit;background:transparent;border:0;font-variant-numeric:tabular-nums;block-size:2.25rem;inline-size:2.25rem}button:hover:where(:not(:disabled,[aria-disabled])){background:#0000000d}button:is([aria-pressed=true],:focus-visible){background:var(--color-accent);color:var(--color-text-on-accent)}button:focus-visible{outline:1px solid var(--color-text-on-accent);outline-offset:-2px}button:disabled,:host::part(outside),:host::part(disallowed){cursor:default;opacity:.5}`]});customElements.define("calendar-month",Zf);function wo(e){return ye("button",{part:`button ${e.name} ${e.onclick?"":"disabled"}`,onclick:e.onclick,"aria-disabled":e.onclick?null:"true",children:ye("slot",{name:e.name,children:e.children})})}function Es(e){const t=wt(e.page.start),r=wt(e.page.end);return hn("div",{role:"group","aria-labelledby":"h",part:"container",children:[ye("div",{id:"h",class:"vh","aria-live":"polite","aria-atomic":"true",children:e.formatVerbose.formatRange(t,r)}),hn("div",{part:"header",children:[ye(wo,{name:"previous",onclick:e.previous,children:"Previous"}),ye("slot",{part:"heading",name:"heading",children:ye("div",{"aria-hidden":"true",children:e.format.formatRange(t,r)})}),ye(wo,{name:"next",onclick:e.next,children:"Next"})]}),ye(Ss,{value:e,onselectday:e.onSelect,onfocusday:e.onFocus,onhoverday:e.onHover,children:ye("slot",{})})]})}const Ps={value:{type:String,value:""},min:{type:String,value:""},max:{type:String,value:""},today:{type:String,value:""},isDateDisallowed:{type:Function,value:e=>!1},formatWeekday:{type:String,value:()=>"narrow"},getDayParts:{type:Function,value:e=>""},firstDayOfWeek:{type:Number,value:()=>1},showOutsideDays:{type:Boolean,value:!1},locale:{type:String,value:()=>{}},months:{type:Number,value:1},focusedDate:{type:String,value:()=>{}},pageBy:{type:String,value:()=>"months"}},xs=[vl,hl,ua`:host{display:block;inline-size:fit-content}[role=group]{display:flex;flex-direction:column;gap:1em}:host::part(header){display:flex;align-items:center;justify-content:space-between}:host::part(heading){font-weight:700;font-size:1.25em}button{display:flex;align-items:center;justify-content:center}button[aria-disabled]{cursor:default;opacity:.5}`],Xf={year:"numeric"},Ff={year:"numeric",month:"long"};function Oa(e,t){return(t.year-e.year)*12+t.month-e.month}const So=(e,t)=>(e=t===12?new fa(e.year,1):e,{start:e,end:e.add({months:t-1})});function ev({pageBy:e,focusedDate:t,months:r,max:n,min:a,goto:s}){const o=e==="single"?1:r,[l,c]=gs(()=>So(t.toPlainYearMonth(),r)),u=p=>c(So(l.start.add({months:p}),r)),f=p=>{const h=Oa(l.start,p.toPlainYearMonth());return h>=0&&h<r};return Sn(()=>{if(f(t))return;const p=Oa(t.toPlainYearMonth(),l.start);s(t.add({months:p}))},[l.start]),Sn(()=>{if(f(t))return;const p=Oa(l.start,t.toPlainYearMonth());u(p===-1?-o:p===r?o:Math.floor(p/r)*r)},[t,o,r]),{page:l,previous:!a||!f(a)?()=>u(-o):void 0,next:!n||!f(n)?()=>u(o):void 0}}function $s({months:e,pageBy:t,locale:r,focusedDate:n,setFocusedDate:a}){const[s]=rr("min"),[o]=rr("max"),[l]=rr("today"),c=tr("focusday"),u=tr("change"),f=Ht(()=>da(n??l??bs(),s,o),[n,l,s,o]);function p(b){a(b),c(wt(b))}const{next:h,previous:m,page:_}=ev({pageBy:t,focusedDate:f,months:e,min:s,max:o,goto:p}),S=$n();function y(b){const C=b?.target??"day";C==="day"?S.current.querySelectorAll("calendar-month").forEach(A=>A.focus(b)):S.current.shadowRoot.querySelector(`[part~='${C}']`).focus(b)}return{format:En(Xf,r),formatVerbose:En(Ff,r),page:_,focusedDate:f,dispatch:u,onFocus(b){b.stopPropagation(),p(b.detail),setTimeout(y)},min:s,max:o,today:l,next:h,previous:m,focus:y}}const tv=kn(e=>{const[t,r]=rr("value"),[n=t,a]=rr("focusedDate"),s=$s({...e,focusedDate:n,setFocusedDate:a});function o(l){r(l.detail),s.dispatch()}return ye("host",{shadowDom:!0,focus:s.focus,children:ye(Es,{...e,...s,type:"date",value:t,onSelect:o})})},{props:Ps,styles:xs});customElements.define("calendar-date",tv);const Eo=(e,t)=>Oe.compare(e,t)<0?[e,t]:[t,e],rv=kn(e=>{const[t,r]=Wf("value"),[n=t[0],a]=rr("focusedDate"),s=$s({...e,focusedDate:n,setFocusedDate:a}),o=tr("rangestart"),l=tr("rangeend"),[c,u]=rr("tentative"),[f,p]=gs();Sn(()=>p(void 0),[c]);function h(y){s.onFocus(y),m(y)}function m(y){y.stopPropagation(),c&&p(y.detail)}function _(y){const b=y.detail;y.stopPropagation(),c?(r(Eo(c,b)),u(void 0),l(wt(b)),s.dispatch()):(u(b),o(wt(b)))}const S=c?Eo(c,f??c):t;return ye("host",{shadowDom:!0,focus:s.focus,children:ye(Es,{...e,...s,type:"range",value:S,onFocus:h,onHover:m,onSelect:_})})},{props:{...Ps,tentative:{type:String,value:""}},styles:xs});customElements.define("calendar-range",rv);const nv=kn(e=>{const[t,r]=Gf("value"),[n=t[0],a]=rr("focusedDate"),s=$s({...e,focusedDate:n,setFocusedDate:a});function o(l){const c=[...t],u=t.findIndex(f=>f.equals(l.detail));u<0?c.push(l.detail):c.splice(u,1),r(c),s.dispatch()}return ye("host",{shadowDom:!0,focus:s.focus,children:ye(Es,{...e,...s,type:"multi",value:t,onSelect:o})})},{props:Ps,styles:xs});customElements.define("calendar-multi",nv);async function av(e,t){await t.modalState?.addStock()}var sv=$('<span class="loading loading-spinner loading-sm"></span>'),ov=$('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),iv=$('<span class="loading loading-spinner loading-xs"></span>'),lv=$('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),cv=$('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),uv=$(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input validator"><!> <input placeholder="Quantité" type="number" step="0.01" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="select select-bordered" required><option disabled selected><!>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea" placeholder="remarques..."></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function dv(e,t){W(t,!0);const r=z(()=>t.modalState.forms.stock);let n=z(()=>i(r)&&i(r).quantity&&i(r).quantity>0&&i(r).unit);async function a(Z){await t.modalState?.removeStock(Z)}var s=uv(),o=d(s),l=d(o);Ja(l,{class:"h-5 w-5"});var c=v(o,2),u=d(c),f=v(d(u),2),p=d(f),h=d(p);ca(h,{class:"h-4 w-4 opacity-50"});var m=v(h,2),_=v(p,2),S=d(_),y=d(S);Yi(y,{class:"h-4 w-4 opacity-50"}),S.value=S.__value="";var b=v(S);b.value=b.__value="kg";var C=v(b);C.value=C.__value="gr.";var A=v(C);A.value=A.__value="l.";var P=v(A);P.value=P.__value="ml";var x=v(P);x.value=x.__value="unité";var T=v(x);T.value=T.__value="bottes";var I=v(f,2),E=d(I),R=v(I,2),k=d(R);k.__click=[av,t];var J=d(k);{var se=Z=>{var N=sv();g(Z,N)},Me=Z=>{var N=st("Ajouter au stock");g(Z,N)};q(J,Z=>{t.modalState.loading?Z(se):Z(Me,!1)})}var xe=v(c,2);{var Se=Z=>{var N=ov(),H=d(N);Ja(H,{class:"mx-auto mb-2 h-12 w-12"}),g(Z,N)},be=Z=>{var N=cv(),H=d(N),ue=v(d(H));Re(ue,23,()=>t.modalState.stockEntries,ge=>ge.dateTime,(ge,me,et)=>{var Ge=lv(),de=d(Ge),Ee=d(de),qe=v(de),De=d(qe),Ie=v(qe),Be=d(Ie),Pe=v(Ie),He=d(Pe);He.__click=()=>a(i(et));var mt=d(He);{var lr=fe=>{var $e=iv();g(fe,$e)},F=fe=>{var $e=st("Supprimer");g(fe,$e)};q(mt,fe=>{t.modalState.loading?fe(lr):fe(F,!1)})}j(fe=>{O(Ee,`${i(me).quantity??""}
                ${i(me).unit??""}`),O(De,fe),O(Be,i(me).notes||"-"),He.disabled=t.modalState.loading},[()=>Qn(i(me).dateTime)]),g(ge,Ge)}),g(Z,N)};q(xe,Z=>{t.modalState.stockEntries.length===0?Z(Se):Z(be,!1)})}j(()=>{ps(E,`          ${i(r).notes??""}
        `),k.disabled=t.modalState.loading||!i(n)}),Qe(m,()=>i(r).quantity,Z=>i(r).quantity=Z),Ua(_,()=>i(r).unit,Z=>i(r).unit=Z),Qe(E,()=>i(r).notes,Z=>i(r).notes=Z),g(e,s),G()}Rt(["click"]);var fv=(e,t)=>{e.key==="Enter"&&t()},vv=$("<option> </option>"),hv=(e,t,r)=>t(r),pv=$('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),mv=$('<span class="loading loading-spinner loading-sm"></span>'),_v=$('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function gv(e,t){W(t,!0);let r=ae("");const n=z(()=>i(r).trim().length>0&&!t.modalState.whoList.includes(i(r).trim()));async function a(){!i(n)||!t.modalState||(await t.modalState.addVolunteer(i(r).trim()),M(r,""))}async function s(P){await t.modalState?.removeVolunteer(P)}var o=_v(),l=d(o),c=d(l),u=v(d(c),2),f=d(u);_s(f,{class:"h-4 w-4 opacity-50"});var p=v(f,2);p.__keydown=[fv,a];var h=v(p,2);Re(h,21,()=>D.uniqueWho,qr,(P,x)=>{var T=vv(),I=d(T),E={};j(()=>{O(I,i(x)),E!==(E=i(x))&&(T.value=(T.__value=i(x))??"")}),g(P,T)});var m=v(u,2),_=v(d(m),2);Re(_,20,()=>t.modalState.whoList,P=>P,(P,x)=>{var T=pv(),I=d(T),E=v(I);E.__click=[hv,s,x];var R=d(E);ht(R,{class:"h-3 w-3"}),j(()=>{O(I,`${x??""} `),E.disabled=t.modalState.loading}),g(P,T)});var S=v(m,2),y=d(S);y.__click=a;var b=d(y);{var C=P=>{var x=mv();g(P,x)},A=P=>{var x=st("Ajouter");g(P,x)};q(b,P=>{t.modalState.loading?P(C):P(A,!1)})}j(()=>y.disabled=t.modalState.loading||!i(n)),Qe(p,()=>i(r),P=>M(r,P)),g(e,o),G()}Rt(["keydown","click"]);var yv=(e,t)=>{e.key==="Enter"&&t()},bv=$("<option> </option>"),wv=$('<span class="loading loading-spinner loading-sm"></span>'),Sv=(e,t,r)=>{M(t,""),M(r,"")},Ev=$(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function Pv(e,t){W(t,!0);const r=z(()=>t.modalState.forms.store),n=z(()=>i(r).name||""),a=z(()=>i(r).comment||"");let s=ae(vt(i(n))),o=ae(vt(i(a)));const l=z(()=>i(s).trim()!==(i(r).name||"")||i(o).trim()!==(i(r).comment||""));async function c(){if(!i(l))return;const E={storeName:i(s).trim(),storeComment:i(o).trim()};await t.modalState.updateStore(E)}var u=Ev(),f=d(u),p=d(f),h=v(d(p),4),m=d(h),_=d(m);wn(_,{class:"h-4 w-4 opacity-50"});var S=v(_,2);S.__keydown=[yv,c];var y=v(S,2);Re(y,21,()=>D.uniqueStores,qr,(E,R)=>{var k=bv(),J=d(k),se={};j(()=>{O(J,i(R)),se!==(se=i(R))&&(k.value=(k.__value=i(R))??"")}),g(E,k)});var b=v(m,2),C=v(h,2),A=d(C);A.__click=c;var P=d(A);{var x=E=>{var R=wv();g(E,R)},T=E=>{var R=st("Mettre à jour");g(E,R)};q(P,E=>{t.modalState.loading?E(x):E(T,!1)})}var I=v(A,2);I.__click=[Sv,s,o],j(()=>{ps(b,`          ${i(o)??""}
        `),A.disabled=t.modalState.loading||!i(l),I.disabled=t.modalState.loading}),Qe(S,()=>i(s),E=>M(s,E)),Qe(b,()=>i(o),E=>M(o,E)),g(e,u),G()}Rt(["keydown","click"]);var xv=$('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),$v=$('<tr><td class="font-medium"> </td><td> </td><td>-</td><td>-</td><td> </td></tr>'),kv=$('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),Nv=$('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>');function Tv(e,t){W(t,!0);const r=z(()=>t.modalState.recipes);var n=Nv(),a=d(n),s=d(a);ms(s,{class:"h-5 w-5"});var o=v(a,2);{var l=u=>{var f=xv(),p=d(f);ca(p,{class:"mx-auto mb-2 h-12 w-12"}),g(u,f)},c=u=>{var f=kv(),p=d(f),h=v(d(p));Re(h,21,()=>i(r),m=>m.r,(m,_)=>{var S=$v(),y=d(S),b=d(y),C=v(y),A=d(C),P=v(C,3),x=d(P);j(()=>{O(b,i(_).r),O(A,`${(i(_).q||i(_).qEq)??""} ${(i(_).u||i(_).uEq)??""}`),O(x,i(_).a||"-")}),g(m,S)}),g(u,f)};q(o,u=>{i(r).length===0?u(l):u(c,!1)})}g(e,n),G()}var Av=$('<div class="badge badge-success gap-1"><!> Actif</div>'),Cv=$('<div class="badge badge-warning gap-1"><!> </div>'),Mv=(e,t)=>t("recettes"),Dv=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Iv=(e,t)=>t("achats"),Rv=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Ov=(e,t)=>t("stock"),qv=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Bv=(e,t)=>t("volontaires"),Lv=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),jv=(e,t)=>t("magasins"),zv=$('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Uv=$('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function Vv(e,t){W(t,!0);let r=z(()=>Dt.product.tab),n=z(()=>Dt.product.id),a=z(()=>Dt.product.isOpen),s=z(()=>i(n)?zd(i(n)):null),o=z(()=>i(s)?.product);function l(p){Dt.product.tab=p}var c=V(),u=U(c);{var f=p=>{var h=Uv(),m=d(h),_=d(m),S=d(_),y=d(S),b=v(S,2),C=d(b),A=d(C),P=v(C,2);{var x=B=>{var L=Av(),ke=d(L);$d(ke,{class:"h-3 w-3"}),g(B,L)},T=B=>{var L=Cv(),ke=d(L);Ki(ke,{class:"h-3 w-3"});var St=v(ke);j(()=>O(St,` ${i(o).status??""}`)),g(B,L)};q(P,B=>{i(o).status==="active"?B(x):B(T,!1)})}var I=v(P,2),E=v(d(I)),R=v(b,2);R.__click=function(...B){fo?.apply(this,B)};var k=d(R);ht(k,{class:"h-4 w-4"});var J=v(_,2),se=d(J);se.__click=[Mv,l];var Me=d(se);ms(Me,{class:"mr-1 h-5 w-5"});var xe=v(Me,2);{var Se=B=>{var L=Dv(),ke=d(L);j(()=>O(ke,i(s).recipes.length)),g(B,L)};q(xe,B=>{i(s).recipes.length>0&&B(Se)})}var be=v(se,2);be.__click=[Iv,l];var Z=d(be);Kn(Z,{class:"mr-1 h-5 w-5"});var N=v(Z,2);{var H=B=>{var L=Rv(),ke=d(L);j(()=>O(ke,i(s).purchasesList.length)),g(B,L)};q(N,B=>{i(s).purchasesList.length>0&&B(H)})}var ue=v(be,2);ue.__click=[Ov,l];var ge=d(ue);Ja(ge,{class:"mr-1 h-5 w-5"});var me=v(ge,2);{var et=B=>{var L=qv(),ke=d(L);j(()=>O(ke,i(s).stockEntries.length)),g(B,L)};q(me,B=>{i(s).stockEntries.length>0&&B(et)})}var Ge=v(ue,2);Ge.__click=[Bv,l];var de=d(Ge);Qi(de,{class:"mr-1 h-5 w-5"});var Ee=v(de,2);{var qe=B=>{var L=Lv(),ke=d(L);j(()=>O(ke,i(o).who.length)),g(B,L)};q(Ee,B=>{i(o).who&&i(o).who.length>0&&B(qe)})}var De=v(Ge,2);De.__click=[jv,l];var Ie=d(De);wn(Ie,{class:"mr-1 h-5 w-5"});var Be=v(J,2),Pe=d(Be);{var He=B=>{var L=zv(),ke=d(L);ht(ke,{class:"h-4 w-4"});var St=v(ke,2),cr=d(St);j(()=>O(cr,`erreur : ${i(s).error??""}`)),g(B,L)};q(Pe,B=>{i(s).error&&B(He)})}var mt=v(Pe,2),lr=d(mt);{var F=B=>{Tv(B,{get modalState(){return i(s)}})},fe=B=>{var L=V(),ke=U(L);{var St=tt=>{af(tt,{get modalState(){return i(s)}})},cr=tt=>{var $r=V(),_t=U($r);{var Bt=Ze=>{dv(Ze,{get modalState(){return i(s)}})},Lt=Ze=>{var Et=V(),jt=U(Et);{var Pt=Le=>{gv(Le,{get modalState(){return i(s)}})},zt=Le=>{var xt=V(),$t=U(xt);{var Yt=it=>{Pv(it,{get modalState(){return i(s)}})};q($t,it=>{i(r)==="magasins"&&it(Yt)},!0)}g(Le,xt)};q(jt,Le=>{i(r)==="volontaires"?Le(Pt):Le(zt,!1)},!0)}g(Ze,Et)};q(_t,Ze=>{i(r)==="stock"?Ze(Bt):Ze(Lt,!1)},!0)}g(tt,$r)};q(ke,tt=>{i(r)==="achats"?tt(St):tt(cr,!1)},!0)}g(B,L)};q(lr,B=>{i(r)==="recettes"?B(F):B(fe,!1)})}var $e=v(Be,2),qt=d($e);qt.__click=function(...B){fo?.apply(this,B)},j(()=>{O(y,i(o).productName),O(A,i(o).productType),O(E,` ${i(o).displayTotalNeeded??""}`),Ae(se,1,`tab ${i(r)==="recettes"?"tab-active":""}`),Ae(be,1,`tab ${i(r)==="achats"?"tab-active":""}`),Ae(ue,1,`tab ${i(r)==="stock"?"tab-active":""}`),Ae(Ge,1,`tab ${i(r)==="volontaires"?"tab-active":""}`),Ae(De,1,`tab ${i(r)==="magasins"?"tab-active":""}`)}),g(p,h)};q(u,p=>{i(a)&&i(o)&&i(s)&&p(f)})}g(e,c),G()}Rt(["click"]);var Wv=()=>D.setGroupBy("none"),Gv=()=>D.setGroupBy("store"),Hv=()=>D.setGroupBy("productType"),Kv=(e,t)=>D.toggleProductType(t),Qv=$("<button><!> </button>"),Yv=()=>D.toggleTemperature("frais"),Jv=()=>D.toggleTemperature("surgele"),Zv=()=>D.clearTypeAndTemperatureFilters(),Xv=$('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Fv=(e,t)=>D.toggleStore(t),eh=$("<button> </button>"),th=$('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),rh=(e,t)=>D.toggleWho(t),nh=$("<button> </button>"),ah=$('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),sh=(e,t)=>{D.clearFilters(),M(t,!1)},oh=$('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function ih(e,t){W(t,!0);let r=ae(!1);const n=z(()=>D.filters),a=z(()=>D.uniqueStores),s=z(()=>D.uniqueWho),o=z(()=>D.uniqueProductTypes);var l=oh(),c=U(l),u=d(c),f=v(u,2),p=v(d(f),2),h=d(p),m=d(h),_=d(m);Za(_,{class:"w-5 h-5"});var S=v(m,2),y=d(S);ht(y,{class:"w-4 h-4"});var b=v(h,2),C=v(d(b),2),A=d(C);A.__change=[Wv];var P=v(A,2);P.__change=[Gv];var x=v(P,2);x.__change=[Hv];var T=v(b,2),I=d(T),E=v(d(I),2);Re(E,20,()=>i(o),de=>de,(de,Ee)=>{const qe=z(()=>zn(Ee));var De=Qv();De.__click=[Kv,Ee];var Ie=d(De);qn(Ie,()=>i(qe).icon,(Pe,He)=>{He(Pe,{class:"w-3 h-3 mr-1"})});var Be=v(Ie);j(Pe=>{Ae(De,1,`btn btn-sm ${Pe??""}`),O(Be,` ${i(qe).displayName??""}`)},[()=>i(n).selectedProductTypes.length===0?"btn-soft btn-accent":i(n).selectedProductTypes.includes(Ee)?"btn-accent":"btn-dash btn-accent"]),g(de,De)});var R=v(E,2),k=d(R);k.__click=[Yv];var J=d(k);Ln(J,{class:"w-3 h-3"});var se=v(k,2);se.__click=[Jv];var Me=d(se);jn(Me,{class:"w-3 h-3"});var xe=v(se,2);{var Se=de=>{var Ee=Xv();Ee.__click=[Zv];var qe=d(Ee);ht(qe,{class:"w-3 h-3"}),g(de,Ee)};q(xe,de=>{(i(n).selectedProductTypes.length>0||i(n).selectedTemperatures.length>0)&&de(Se)})}var be=v(T,2);{var Z=de=>{var Ee=th(),qe=d(Ee),De=v(d(qe),2);Re(De,20,()=>i(a),Ie=>Ie,(Ie,Be)=>{var Pe=eh();Pe.__click=[Fv,Be];var He=d(Pe);j(mt=>{Ae(Pe,1,`btn btn-sm ${mt??""}`),O(He,Be)},[()=>i(n).selectedStores.length===0?"btn-soft btn-accent":i(n).selectedStores.includes(Be)?"btn-accent":"btn-dash btn-accent"]),g(Ie,Pe)}),g(de,Ee)};q(be,de=>{i(a).length>0&&de(Z)})}var N=v(be,2);{var H=de=>{var Ee=ah(),qe=d(Ee),De=v(d(qe),2);Re(De,20,()=>i(s),Ie=>Ie,(Ie,Be)=>{var Pe=nh();Pe.__click=[rh,Be];var He=d(Pe);j(mt=>{Ae(Pe,1,`btn btn-sm ${mt??""}`),O(He,Be)},[()=>i(n).selectedWho.length===0?"btn-soft btn-accent":i(n).selectedWho.includes(Be)?"btn-accent":"btn-dash btn-accent"]),g(Ie,Pe)}),g(de,Ee)};q(N,de=>{i(s).length>0&&de(H)})}var ue=v(N,4);ue.__click=[sh,r];var ge=d(ue);ht(ge,{class:"w-4 h-4 mr-2"});var me=v(c,2),et=d(me),Ge=d(et);Za(Ge,{class:"w-6 h-6"}),j((de,Ee)=>{Br(A,i(n).groupBy==="none"),Br(P,i(n).groupBy==="store"),Br(x,i(n).groupBy==="productType"),Ae(k,1,`btn btn-sm ${de??""}`),Ae(se,1,`btn btn-sm ${Ee??""}`)},[()=>i(n).selectedTemperatures.length===0?"btn-soft btn-success":i(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(n).selectedTemperatures.length===0?"btn-soft btn-info":i(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),cu(u,()=>i(r),de=>M(r,de)),g(e,l),G()}Rt(["change","click"]);Rt(["mousedown"]);const nn=e=>{var t=lh(),r=d(t);Hi(r,{class:"h-4 w-4 text-amber-600"}),g(e,t)};var lh=$('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),ch=()=>D.clearFilters(),uh=e=>D.setSearchQuery(e.currentTarget.value),dh=()=>D.setGroupBy("none"),fh=()=>D.setGroupBy("store"),vh=()=>D.setGroupBy("productType"),hh=(e,t)=>D.toggleProductType(t),ph=$("<button><!> </button>"),mh=()=>D.toggleTemperature("frais"),_h=()=>D.toggleTemperature("surgele"),gh=()=>D.clearTypeAndTemperatureFilters(),yh=$('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),bh=$('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),wh=(e,t)=>D.toggleStore(t),Sh=$("<button><!> </button>"),Eh=()=>D.clearStoreFilters(),Ph=$('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),xh=$('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),$h=(e,t)=>D.toggleWho(t),kh=$("<button><!> </button>"),Nh=()=>D.clearWhoFilters(),Th=$('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Ah=$('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Ch=()=>D.handleSort("productName"),Mh=()=>D.handleSort("store"),Dh=()=>D.handleSort("who"),Ih=()=>D.handleSort("productType"),Rh=$('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Oh=$('<tr class="bg-base-200 sticky top-10 z-10 font-semibold"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),qh=(e,t,r)=>t("recettes",i(r).$id),Bh=$('<div class="text-base-content/60 text-xs"> </div>'),Lh=$('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),jh=$('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),zh=(e,t,r)=>t("magasins",i(r).$id),Uh=$('<div class="tooltip tooltip-info"> </div>'),Vh=(e,t,r)=>t("volontaires",i(r).$id),Wh=$('<span class="badge badge-soft badge-info badge-sm"> </span>'),Gh=$('<div class="flex flex-wrap gap-1 pr-8"></div>'),Hh=(e,t,r)=>t("recettes",i(r).$id),Kh=$('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Qh=(e,t,r)=>t("achats",i(r).$id),Yh=$('<div class="bg-warning m-auto rounded px-2 py-1"> </div>'),Jh=$('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"> <!></td><td class="group relative text-center"><!></td></tr>'),Zh=$("<!> <!>",1),Xh=$('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Fh=$('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function ep(e,t){W(t,!0);const r=z(()=>D.filteredProducts),n=z(()=>D.filteredGroupedProducts),a=z(()=>D.stats),s=z(()=>D.uniqueStores),o=z(()=>D.uniqueWho),l=z(()=>D.uniqueProductTypes),c=z(()=>D.filters);function u(K,he){Bd(K,he)}var f=Fh(),p=U(f),h=d(p),m=d(h),_=d(m);uo(_,{class:"mr-1 h-4 w-4"});var S=v(_),y=v(m,2),b=d(y);Ln(b,{class:"mr-1 h-4 w-4"});var C=v(b),A=v(y,2),P=d(A);jn(P,{class:"mr-1 h-4 w-4"});var x=v(P),T=v(A,2),I=d(T);kd(I,{class:"mr-1 h-4 w-4"});var E=v(I),R=v(h,2),k=d(R),J=d(k),se=d(J),Me=d(se);Za(Me,{class:"h-5 w-5"});var xe=v(se,2);xe.__click=[ch];var Se=d(xe);ht(Se,{class:"h-4 w-4"});var be=v(k,2),Z=d(be),N=v(d(Z),2),H=d(N);Od(H,{class:"h-4 w-4"});var ue=v(H,2);ue.__input=[uh];var ge=v(Z,2),me=v(d(ge),2),et=d(me);et.__change=[dh];var Ge=v(et,2);Ge.__change=[fh];var de=v(Ge,2);de.__change=[vh];var Ee=v(be,2),qe=d(Ee),De=d(qe);{var Ie=K=>{var he=bh(),rt=d(he),ct=v(d(rt),2),Ke=d(ct);Re(Ke,16,()=>i(l),Ne=>Ne,(Ne,Te)=>{const kt=z(()=>zn(Te));var Ut=ph();Ut.__click=[hh,Te];var vr=d(Ut);qn(vr,()=>i(kt).icon,(ut,Vt)=>{Vt(ut,{class:"mr-1 h-5 w-5"})});var Cr=v(vr);j(ut=>{Ae(Ut,1,`btn btn-sm ${ut??""}`),O(Cr,` ${i(kt).displayName??""}`)},[()=>i(c).selectedProductTypes.length===0?"btn-soft btn-accent":i(c).selectedProductTypes.includes(Te)?"btn-accent":"btn-dash btn-accent"]),g(Ne,Ut)});var nt=v(Ke,2);nt.__click=[mh];var gt=d(nt);Ln(gt,{class:"h-5 w-5"});var we=v(nt,2);we.__click=[_h];var Y=d(we);jn(Y,{class:"h-5 w-5"});var ve=v(we,2);{var Q=Ne=>{var Te=yh();Te.__click=[gh];var kt=d(Te);ht(kt,{class:"h-3 w-3"}),g(Ne,Te)};q(ve,Ne=>{(i(c).selectedProductTypes.length>0||i(c).selectedTemperatures.length>0)&&Ne(Q)})}j((Ne,Te)=>{Ae(nt,1,`btn btn-sm ms-4 ${Ne??""}`),Ae(we,1,`btn btn-sm ${Te??""}`)},[()=>i(c).selectedTemperatures.length===0?"btn-soft btn-success":i(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(c).selectedTemperatures.length===0?"btn-soft btn-info":i(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),g(K,he)};q(De,K=>{i(l).length>0&&K(Ie)})}var Be=v(qe,2),Pe=d(Be);{var He=K=>{var he=xh(),rt=d(he),ct=v(d(rt),2),Ke=d(ct);Re(Ke,16,()=>i(s),we=>we,(we,Y)=>{var ve=Sh();ve.__click=[wh,Y];var Q=d(ve);wn(Q,{class:"mr-1 h-3 w-3"});var Ne=v(Q);j(Te=>{Ae(ve,1,`btn btn-xs ${Te??""}`),O(Ne,` ${Y??""}`)},[()=>i(c).selectedStores.length===0?"btn-soft btn-accent":i(c).selectedStores.includes(Y)?"btn-accent":"btn-dash btn-accent"]),g(we,ve)});var nt=v(Ke,2);{var gt=we=>{var Y=Ph();Y.__click=[Eh];var ve=d(Y);ht(ve,{class:"h-3 w-3"}),g(we,Y)};q(nt,we=>{i(c).selectedStores.length>0&&we(gt)})}g(K,he)};q(Pe,K=>{i(s).length>0&&K(He)})}var mt=v(Pe,2);{var lr=K=>{var he=Ah(),rt=d(he),ct=v(d(rt),2),Ke=d(ct);Re(Ke,16,()=>i(o),we=>we,(we,Y)=>{var ve=kh();ve.__click=[$h,Y];var Q=d(ve);_s(Q,{class:"mr-1 h-3 w-3"});var Ne=v(Q);j(Te=>{Ae(ve,1,`btn btn-xs ${Te??""}`),O(Ne,` ${Y??""}`)},[()=>i(c).selectedWho.length===0?" btn-soft btn-info":i(c).selectedWho.includes(Y)?" btn-info":"btn-dash btn-info"]),g(we,ve)});var nt=v(Ke,2);{var gt=we=>{var Y=Th();Y.__click=[Nh];var ve=d(Y);ht(ve,{class:"h-3 w-3"}),g(we,Y)};q(nt,we=>{i(c).selectedWho.length>0&&we(gt)})}g(K,he)};q(mt,K=>{i(o).length>0&&K(lr)})}var F=v(R,2),fe=d(F),$e=d(fe),qt=d($e),B=d(qt);B.__click=[Ch];var L=d(B),ke=d(L);uo(ke,{class:"h-4 w-4"});var St=v(ke,2);{var cr=K=>{var he=st();j(()=>O(he,i(c).sortDirection==="asc"?"↑":"↓")),g(K,he)};q(St,K=>{i(c).sortColumn==="productName"&&K(cr)})}var tt=v(B);tt.__click=[Mh];var $r=d(tt),_t=d($r);wn(_t,{class:"h-4 w-4"});var Bt=v(_t,2);{var Lt=K=>{var he=st();j(()=>O(he,i(c).sortDirection==="asc"?"↑":"↓")),g(K,he)};q(Bt,K=>{i(c).sortColumn==="store"&&K(Lt)})}var Ze=v(tt);Ze.__click=[Dh];var Et=d(Ze),jt=d(Et);Qi(jt,{class:"h-4 w-4"});var Pt=v(jt,2);{var zt=K=>{var he=st();j(()=>O(he,i(c).sortDirection==="asc"?"↑":"↓")),g(K,he)};q(Pt,K=>{i(c).sortColumn==="who"&&K(zt)})}var Le=v(Ze);Le.__click=[Ih];var xt=d(Le),$t=v(d(xt));{var Yt=K=>{var he=st();j(()=>O(he,i(c).sortDirection==="asc"?"↑":"↓")),g(K,he)};q($t,K=>{i(c).sortColumn==="productType"&&K(Yt)})}var it=v(Le,2),kr=d(it),Zr=d(kr);Kn(Zr,{class:"h-4 w-4"});var Nr=v(it),ur=d(Nr),Tr=d(ur);Ad(Tr,{class:"h-4 w-4"});var dr=v($e);Re(dr,21,()=>Object.entries(i(n)),([K,he])=>K,(K,he)=>{var rt=z(()=>ko(i(he),2));let ct=()=>i(rt)[0],Ke=()=>i(rt)[1];var nt=Zh(),gt=U(nt);{var we=ve=>{const Q=z(()=>zn(ct()));var Ne=Oh(),Te=d(Ne),kt=d(Te),Ut=d(kt);{var vr=ut=>{var Vt=st();j(()=>O(Vt,`🏪 ${ct()??""} (${Ke().length??""})`)),g(ut,Vt)},Cr=ut=>{var Vt=V(),va=U(Vt);{var ha=Jt=>{var hr=Rh(),Tn=d(hr);qn(Tn,()=>i(Q).icon,(ma,_a)=>{_a(ma,{class:"h-4 w-4"})});var An=v(Tn,2),Mr=d(An),Cn=v(An,2),pa=d(Cn);j(()=>{O(Mr,i(Q).displayName),O(pa,`(${Ke().length??""})`)}),g(Jt,hr)},Nn=Jt=>{var hr=st();j(()=>O(hr,`📦 ${ct()??""} (${Ke().length??""})`)),g(Jt,hr)};q(va,Jt=>{i(c).groupBy==="productType"?Jt(ha):Jt(Nn,!1)},!0)}g(ut,Vt)};q(Ut,ut=>{i(c).groupBy==="store"?ut(vr):ut(Cr,!1)})}g(ve,Ne)};q(gt,ve=>{ct()!==""&&ve(we)})}var Y=v(gt,2);Re(Y,17,()=>jd(Ke(),i(c)),ve=>ve.$id,(ve,Q)=>{const Ne=z(()=>zn(i(Q).productType));var Te=Jh(),kt=d(Te);kt.__click=[qh,u,Q];var Ut=d(kt),vr=d(Ut),Cr=d(vr),ut=d(Cr),Vt=v(Cr,2);{var va=X=>{var pe=Bh(),Ue=d(pe);j(()=>O(Ue,`Ancien: ${i(Q).previousNames[0]??""}`)),g(X,pe)};q(Vt,X=>{i(Q).previousNames&&i(Q).previousNames.length>0&&X(va)})}var ha=v(vr,2),Nn=d(ha);{var Jt=X=>{var pe=Lh(),Ue=d(pe);Ln(Ue,{class:"text-success h-4 w-4"}),g(X,pe)};q(Nn,X=>{i(Q).pFrais&&X(Jt)})}var hr=v(Nn,2);{var Tn=X=>{var pe=jh(),Ue=d(pe);jn(Ue,{class:"text-info h-4 w-4"}),g(X,pe)};q(hr,X=>{i(Q).pSurgel&&X(Tn)})}var An=v(Ut,2);nn(An);var Mr=v(kt);Mr.__click=[zh,u,Q];var Cn=d(Mr);{var pa=X=>{var pe=Uh(),Ue=d(pe);j(()=>{Hn(pe,"data-tip",i(Q).storeInfo.storeComment),O(Ue,i(Q).storeInfo.storeName||"-")}),g(X,pe)},ma=X=>{var pe=st();j(()=>O(pe,i(Q).storeInfo?.storeName||"-")),g(X,pe)};q(Cn,X=>{i(Q).storeInfo?.storeComment?X(pa):X(ma,!1)})}var _a=v(Cn,2);nn(_a);var ga=v(Mr);ga.__click=[Vh,u,Q];var ks=d(ga);{var _l=X=>{var pe=Gh();Re(pe,20,()=>i(Q).who,Ue=>Ue,(Ue,Mn)=>{var Dn=Wh(),Sa=d(Dn);j(()=>O(Sa,Mn)),g(Ue,Dn)}),g(X,pe)},gl=X=>{var pe=st("-");g(X,pe)};q(ks,X=>{i(Q).who&&i(Q).who.length>0?X(_l):X(gl,!1)})}var yl=v(ks,2);nn(yl);var ya=v(ga),bl=d(ya),Ns=d(bl);qn(Ns,()=>i(Ne).icon,(X,pe)=>{pe(X,{class:"h-3 w-3"})});var wl=v(Ns),ba=v(ya);ba.__click=[Hh,u,Q];var Ts=d(ba),Sl=d(Ts),As=v(Ts,2);{var El=X=>{var pe=Kh(),Ue=d(pe),Mn=d(Ue),Dn=v(Mn);ms(Dn,{class:"h-3 w-3"});var Sa=v(Ue,2),Ms=d(Sa),Al=v(Ms);qd(Al,{class:"h-3 w-3"}),j(()=>{O(Mn,`${i(Q)?.nbRecipes??""} `),O(Ms,`${i(Q)?.totalAssiettes??""} `)}),g(X,pe)};q(As,X=>{(i(Q).nbRecipes||i(Q).totalAssiettes)&&X(El)})}var Pl=v(As,2);nn(Pl);var wa=v(ba);wa.__click=[Qh,u,Q];var Cs=d(wa),xl=v(Cs);nn(xl);var $l=v(wa),kl=d($l);{var Nl=X=>{var pe=Yh(),Ue=d(pe);j(()=>O(Ue,i(Q).displayMissingQuantity)),g(X,pe)},Tl=X=>{xd(X,{size:28,strokeWidth:3,class:"text-success m-auto"})};q(kl,X=>{i(Q).displayMissingQuantity!=="✅ Complet"?X(Nl):X(Tl,!1)})}j(()=>{O(ut,i(Q).productName),Ae(Mr,1,`${i(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Ae(ya,1,vi(i(c).groupBy==="productType"?"hidden":"")),O(wl,` ${i(Ne).displayName??""}`),O(Sl,i(Q).displayTotalNeeded??"-"),O(Cs,`${(i(Q).displayTotalPurchases||"-")??""} `)}),g(ve,Te)}),g(K,nt)});var Ar=v(fe,2);{var Xr=K=>{var he=Xh();g(K,he)};q(Ar,K=>{i(r).length===0&&K(Xr)})}var fr=v(p,2);Vv(fr,{});var lt=v(fr,2);ih(lt,{}),j(()=>{O(S,` ${i(a).total??""}`),O(C,` frais:
      ${i(a).frais??""}`),O(x,` surgelés:
      ${i(a).surgel??""}`),O(E,` fusionnés:
      ${i(a).merged??""}`),ps(ue,i(c).searchQuery),Br(et,i(c).groupBy==="none"),Br(Ge,i(c).groupBy==="store"),Br(de,i(c).groupBy==="productType"),Ae(tt,1,`hover:bg-base-100 cursor-pointer text-center ${i(c).groupBy==="store"?"hidden":""}`),Ae(Le,1,`hover:bg-base-100 cursor-pointer text-center ${i(c).groupBy==="productType"?"hidden":""}`)}),g(e,f),G()}Rt(["click","input","change"]);fc();var tp=$('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function rp(e){var t=tp();g(e,t)}var np=$('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function ap(e,t){var r=np(),n=v(d(r),2),a=v(d(n),2),s=d(a);j(()=>O(s,t.message)),g(e,r)}var sp=$('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function op(e,t){var r=sp(),n=d(r),a=d(n);Ki(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var s=v(a,2),o=v(d(s),2),l=d(o);j(()=>O(l,t.message||"Erreur inconnue")),g(e,r)}var ip=$('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),lp=$('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),cp=$('<div class="text-base-content/60"> </div>'),up=$('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),dp=$('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),fp=$('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),vp=$('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function hp(e,t){W(t,!0);let r,n=ae(null),a=ae(!0),s=ae(!1);gi(async()=>{r=Qu();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await D.initialize(r)}catch(N){const H=N instanceof Error?N.message:"Erreur lors de l'initialisation";M(n,H,!0),console.error("[App] Erreur initialisation:",N)}finally{M(a,!1)}}),vu(()=>{D.destroy()});async function o(){if(!(!r||i(s))){M(s,!0);try{await D.forceReload(r)}catch(N){console.error("[App] Erreur lors du rechargement forcé:",N)}finally{M(s,!1)}}}const l=z(()=>i(n)||D.error),c=z(()=>i(a)||D.loading),u=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var f=vp(),p=d(f),h=d(p),m=d(h),_=v(d(m),2),S=d(_);{var y=N=>{var H=ip();g(N,H)};q(S,N=>{D.realtimeConnected&&N(y)})}var b=v(S,2);{var C=N=>{var H=lp();g(N,H)};q(b,N=>{D.syncing&&N(C)})}var A=v(b,2);{var P=N=>{var H=cp(),ue=d(H);j(ge=>O(ue,`Maj: ${ge??""}`),[()=>new Date(D.lastSync).toLocaleTimeString()]),g(N,H)};q(A,N=>{D.lastSync&&N(P)})}var x=v(A,2);{var T=N=>{var H=up();let ue;H.__click=o;var ge=d(H);Dd(ge,{class:"h-4 w-4"}),j(me=>{ue=Ae(H,1,"btn btn-outline btn-sm",null,ue,me),H.disabled=i(s)||D.loading},[()=>({loading:i(s)||D.loading})]),g(N,H)};q(x,N=>{i(n)||N(T)})}var I=v(x,2);{var E=N=>{var H=dp(),ue=d(H),ge=d(ue);Cd(ge,{class:"mr-2 h-4 w-4"}),j(()=>Hn(ue,"href",u)),g(N,H)};q(I,N=>{i(n)&&N(E)})}var R=v(p,2),k=d(R);{var J=N=>{op(N,{get message(){return i(l)}})},se=N=>{var H=V(),ue=U(H);{var ge=me=>{ap(me,{get message(){return i(l)}})};q(ue,me=>{i(l)&&me(ge)},!0)}g(N,H)};q(k,N=>{i(n)?N(J):N(se,!1)})}var Me=v(k,2);{var xe=N=>{rp(N)};q(Me,N=>{i(c)&&N(xe)})}var Se=v(Me,2);{var be=N=>{ep(N,{})},Z=N=>{var H=V(),ue=U(H);{var ge=me=>{var et=fp();g(me,et)};q(ue,me=>{!D.loading&&!i(n)&&me(ge)},!0)}g(N,H)};q(Se,N=>{D.enrichedProducts.length>0?N(be):N(Z,!1)})}g(e,f),G()}Rt(["click"]);Jc(hp,{target:document.getElementById("app_products")});
