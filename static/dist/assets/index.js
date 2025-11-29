(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const io=!1;var Ir=Array.isArray,Ki=Array.prototype.indexOf,Va=Array.from,$a=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,Ji=Object.getOwnPropertyDescriptors,co=Object.prototype,Yi=Array.prototype,Qa=Object.getPrototypeOf,ps=Object.isExtensible;function Vn(n){return typeof n=="function"}const pe=()=>{};function Xi(n){return typeof n?.then=="function"}function Zi(n){for(var e=0;e<n.length;e++)n[e]()}function lo(){var n,e,t=new Promise((r,a)=>{n=r,e=a});return{promise:t,resolve:n,reject:e}}function Lr(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const r of n)if(t.push(r),t.length===e)break;return t}const Et=2,Ga=4,Oa=8,bn=16,on=32,Nn=64,Ka=128,Dt=256,Ur=512,vt=1024,At=2048,_n=4096,Ut=8192,Cn=16384,Qr=32768,yn=65536,vs=1<<17,Fi=1<<18,er=1<<19,ec=1<<20,Pa=1<<21,Gr=1<<22,An=1<<23,Mn=Symbol("$state"),uo=Symbol("legacy props"),tc=Symbol(""),pr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function nc(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function rc(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ac(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sc(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function oc(n){throw new Error("https://svelte.dev/e/effect_orphan")}function ic(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function cc(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function lc(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function dc(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function uc(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function fc(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Or=1,Kr=2,fo=4,hc=8,pc=16,vc=1,gc=2,mc=4,bc=8,_c=16,yc=1,wc=2,Ic=4,Sc=1,xc=2,ot=Symbol(),Ec="http://www.w3.org/1999/xhtml",$c="http://www.w3.org/2000/svg",Pc="@attach";function Ac(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Mc(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let kc=!1;function ho(n){return n===this.v}function po(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Tc(n,e){return n!==e}function vo(n){return!po(n,this.v)}let tr=!1,Rc=!1;function Dc(){tr=!0}const Nc=[];function Bn(n,e=!1,t=!1){return Cr(n,new Map,"",Nc,null,t)}function Cr(n,e,t,r,a=null,s=!1){if(typeof n=="object"&&n!==null){var o=e.get(n);if(o!==void 0)return o;if(n instanceof Map)return new Map(n);if(n instanceof Set)return new Set(n);if(Ir(n)){var c=Array(n.length);e.set(n,c),a!==null&&e.set(a,c);for(var l=0;l<n.length;l+=1){var u=n[l];l in n&&(c[l]=Cr(u,e,t,r,null,s))}return c}if(Qa(n)===co){c={},e.set(n,c),a!==null&&e.set(a,c);for(var f in n)c[f]=Cr(n[f],e,t,r,null,s);return c}if(n instanceof Date)return structuredClone(n);if(typeof n.toJSON=="function"&&!s)return Cr(n.toJSON(),e,t,r,n)}if(n instanceof EventTarget)return n;try{return structuredClone(n)}catch{return n}}let it=null;function mn(n){it=n}function J(n,e=!1,t){it={p:it,c:null,e:null,s:n,x:null,l:tr&&!e?{s:null,u:null,$:[]}:null}}function Y(n){var e=it,t=e.e;if(t!==null){e.e=null;for(var r of t)ko(r)}return it=e.p,{}}function qn(){return!tr||it!==null&&it.l===null}let xn=[];function go(){var n=xn;xn=[],Zi(n)}function an(n){if(xn.length===0&&!Qn){var e=xn;queueMicrotask(()=>{e===xn&&go()})}xn.push(n)}function Cc(){for(;xn.length>0;)go()}const qc=new WeakMap;function mo(n){var e=He;if(e===null)return Be.f|=An,n;if((e.f&Qr)===0){if((e.f&Ka)===0)throw!e.parent&&n instanceof Error&&bo(n),n;e.b.error(n)}else Jn(n,e)}function Jn(n,e){for(;e!==null;){if((e.f&Ka)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n instanceof Error&&bo(n),n}function bo(n){const e=qc.get(n);e&&($a(n,"message",{value:e.message}),$a(n,"stack",{value:e.stack}))}const Mr=new Set;let Ye=null,qr=null,Aa=new Set,Vt=[],Jr=null,Ma=!1,Qn=!1;class Rt{current=new Map;#e=new Map;#t=new Set;#n=0;#a=null;#o=[];#c=[];#r=[];#l=[];#d=[];#u=[];skipped_effects=new Set;process(e){Vt=[],qr=null;var t=Rt.apply(this);for(const s of e)this.#f(s);if(this.#n===0){this.#h();var r=this.#c,a=this.#r;this.#c=[],this.#r=[],this.#l=[],qr=this,Ye=null,gs(r),gs(a),qr=null,this.#a?.resolve()}else this.#s(this.#c),this.#s(this.#r),this.#s(this.#l);t();for(const s of this.#o)mr(s);this.#o=[]}#f(e){e.f^=vt;for(var t=e.first;t!==null;){var r=t.f,a=(r&(on|Nn))!==0,s=a&&(r&vt)!==0,o=s||(r&Ut)!==0||this.skipped_effects.has(t);if(!o&&t.fn!==null){a?t.f^=vt:(r&Ga)!==0?this.#r.push(t):(r&vt)===0&&((r&Gr)!==0&&t.b?.is_pending()?this.#o.push(t):Fr(t)&&((t.f&bn)!==0&&this.#l.push(t),mr(t)));var c=t.first;if(c!==null){t=c;continue}}var l=t.parent;for(t=t.next;t===null&&l!==null;)t=l.next,l=l.parent}}#s(e){for(const t of e)((t.f&At)!==0?this.#d:this.#u).push(t),It(t,vt);e.length=0}capture(e,t){this.#e.has(e)||this.#e.set(e,t),this.current.set(e,e.v)}activate(){Ye=this}deactivate(){Ye=null}flush(){if(Vt.length>0){if(this.activate(),yo(),Ye!==null&&Ye!==this)return}else this.#n===0&&this.#h();this.deactivate();for(const e of Aa)if(Aa.delete(e),e(),Ye!==null)break}#h(){for(const e of this.#t)e();if(this.#t.clear(),Mr.size>1){this.#e.clear();let e=!0;for(const t of Mr){if(t===this){e=!1;continue}for(const[r,a]of this.current){if(t.current.has(r))if(e)t.current.set(r,a);else continue;wo(r)}if(Vt.length>0){Ye=t;const r=Rt.apply(t);for(const a of Vt)t.#f(a);Vt=[],r()}}Ye=null}Mr.delete(this)}increment(){this.#n+=1}decrement(){this.#n-=1;for(const e of this.#d)It(e,At),Dn(e);for(const e of this.#u)It(e,_n),Dn(e);this.flush()}add_callback(e){this.#t.add(e)}settled(){return(this.#a??=lo()).promise}static ensure(){if(Ye===null){const e=Ye=new Rt;Mr.add(Ye),Qn||Rt.enqueue(()=>{Ye===e&&e.flush()})}return Ye}static enqueue(e){an(e)}static apply(e){return pe}}function _o(n){var e=Qn;Qn=!0;try{for(var t;;){if(Cc(),Vt.length===0&&(Ye?.flush(),Vt.length===0))return Jr=null,t;yo()}}finally{Qn=e}}function yo(){var n=Gn;Ma=!0;try{var e=0;for(ys(!0);Vt.length>0;){var t=Rt.ensure();if(e++>1e3){var r,a;jc()}t.process(Vt),gn.clear()}}finally{Ma=!1,ys(n),Jr=null}}function jc(){try{ic()}catch(n){Jn(n,Jr)}}let In=null;function gs(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if((r.f&(Cn|Ut))===0&&Fr(r)&&(In=[],mr(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?Do(r):r.fn=null),In?.length>0)){gn.clear();for(const a of In)mr(a);In=[]}}In=null}}function wo(n){if(n.reactions!==null)for(const e of n.reactions){const t=e.f;(t&Et)!==0?wo(e):(t&(Gr|bn))!==0&&(It(e,At),Dn(e))}}function Dn(n){for(var e=Jr=n;e.parent!==null;){e=e.parent;var t=e.f;if(Ma&&e===He&&(t&bn)!==0)return;if((t&(Nn|on))!==0){if((t&vt)===0)return;e.f^=vt}}Vt.push(e)}function Ja(n){let e=0,t=Ot(0),r;return()=>{Zc()&&(i(t),es(()=>(e===0&&(r=rr(()=>n(()=>Qt(t)))),e+=1,()=>{an(()=>{e-=1,e===0&&(r?.(),r=void 0,Qt(t))})})))}}var Lc=yn|er|Ka;function Uc(n,e,t){new Hc(n,e,t)}class Hc{parent;#e=!1;#t;#n=null;#a;#o;#c;#r=null;#l=null;#d=null;#u=null;#f=0;#s=0;#h=!1;#v=null;#p=()=>{this.#v&&en(this.#v,this.#f)};#_=Ja(()=>(this.#v=Ot(this.#f),()=>{this.#v=null}));constructor(e,t,r){this.#t=e,this.#a=t,this.#o=r,this.parent=He.b,this.#e=!!this.#a.pending,this.#c=Jt(()=>{He.b=this;{try{this.#r=lt(()=>r(this.#t))}catch(a){this.error(a)}this.#s>0?this.#m():this.#e=!1}},Lc)}#y(){try{this.#r=lt(()=>this.#o(this.#t))}catch(e){this.error(e)}this.#e=!1}#g(){const e=this.#a.pending;e&&(this.#l=lt(()=>e(this.#t)),Rt.enqueue(()=>{this.#r=this.#i(()=>(Rt.ensure(),lt(()=>this.#o(this.#t)))),this.#s>0?this.#m():(Nt(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#a.pending}#i(e){var t=He,r=Be,a=it;Ct(this.#c),gt(this.#c),mn(this.#c.ctx);try{return e()}catch(s){return mo(s),null}finally{Ct(t),gt(r),mn(a)}}#m(){const e=this.#a.pending;this.#r!==null&&(this.#u=document.createDocumentFragment(),Bc(this.#r,this.#u)),this.#l===null&&(this.#l=lt(()=>e(this.#t)))}#b(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#b(e);return}this.#s+=e,this.#s===0&&(this.#e=!1,this.#l&&Nt(this.#l,()=>{this.#l=null}),this.#u&&(this.#t.before(this.#u),this.#u=null),an(()=>{Rt.ensure().flush()}))}update_pending_count(e){this.#b(e),this.#f+=e,Aa.add(this.#p)}get_effect_pending(){return this.#_(),i(this.#v)}error(e){var t=this.#a.onerror;let r=this.#a.failed;if(this.#h||!t&&!r)throw e;this.#r&&(pt(this.#r),this.#r=null),this.#l&&(pt(this.#l),this.#l=null),this.#d&&(pt(this.#d),this.#d=null);var a=!1,s=!1;const o=()=>{if(a){Mc();return}a=!0,s&&fc(),Rt.ensure(),this.#f=0,this.#d!==null&&Nt(this.#d,()=>{this.#d=null}),this.#e=this.has_pending_snippet(),this.#r=this.#i(()=>(this.#h=!1,lt(()=>this.#o(this.#t)))),this.#s>0?this.#m():this.#e=!1};var c=Be;try{gt(null),s=!0,t?.(e,o),s=!1}catch(l){Jn(l,this.#c&&this.#c.parent)}finally{gt(c)}r&&an(()=>{this.#d=this.#i(()=>{this.#h=!0;try{return lt(()=>{r(this.#t,()=>e,()=>o)})}catch(l){return Jn(l,this.#c.parent),null}finally{this.#h=!1}})})}}function Bc(n,e){for(var t=n.nodes_start,r=n.nodes_end;t!==null;){var a=t===r?null:Sr(t);e.append(t),t=a}}function Io(n,e,t){const r=qn()?Yr:Ya;if(e.length===0){t(n.map(r));return}var a=Ye,s=He,o=zc();Promise.all(e.map(c=>Wc(c))).then(c=>{o();try{t([...n.map(r),...c])}catch(l){(s.f&Cn)===0&&Jn(l,s)}a?.deactivate(),So()}).catch(c=>{Jn(c,s)})}function zc(){var n=He,e=Be,t=it,r=Ye;return function(){Ct(n),gt(e),mn(t),r?.activate()}}function So(){Ct(null),gt(null),mn(null)}function Yr(n){var e=Et|At,t=Be!==null&&(Be.f&Et)!==0?Be:null;return He===null||t!==null&&(t.f&Dt)!==0?e|=Dt:He.f|=er,{ctx:it,deps:null,effects:null,equals:ho,f:e,fn:n,reactions:null,rv:0,v:ot,wv:0,parent:t??He,ac:null}}function Wc(n,e){let t=He;t===null&&rc();var r=t.b,a=void 0,s=Ot(ot),o=!Be,c=new Map;return el(()=>{var l=lo();a=l.promise;try{Promise.resolve(n()).then(l.resolve,l.reject)}catch(g){l.reject(g)}var u=Ye,f=r.is_pending();o&&(r.update_pending_count(1),f||(u.increment(),c.get(u)?.reject(pr),c.set(u,l)));const v=(g,m=void 0)=>{f||u.activate(),m?m!==pr&&(s.f|=An,en(s,m)):((s.f&An)!==0&&(s.f^=An),en(s,g)),o&&(r.update_pending_count(-1),f||u.decrement()),So()};l.promise.then(v,g=>v(null,g||"unknown"))}),Fa(()=>{for(const l of c.values())l.reject(pr)}),new Promise(l=>{function u(f){function v(){f===a?l(s):u(a)}f.then(v,v)}u(a)})}function te(n){const e=Yr(n);return qo(e),e}function Ya(n){const e=Yr(n);return e.equals=vo,e}function xo(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)pt(e[t])}}function Vc(n){for(var e=n.parent;e!==null;){if((e.f&Et)===0)return e;e=e.parent}return null}function Xa(n){var e,t=He;Ct(Vc(n));try{xo(n),e=Ho(n)}finally{Ct(t)}return e}function Eo(n){var e=Xa(n);if(n.equals(e)||(n.v=e,n.wv=Lo()),!jn){var t=(fn||(n.f&Dt)!==0)&&n.deps!==null?_n:vt;It(n,t)}}const gn=new Map;function Ot(n,e){var t={f:0,v:n,reactions:null,equals:ho,rv:0,wv:0};return t}function C(n,e){const t=Ot(n);return qo(t),t}function ka(n,e=!1,t=!0){const r=Ot(n);return e||(r.equals=vo),tr&&t&&it!==null&&it.l!==null&&(it.l.s??=[]).push(r),r}function b(n,e,t=!1){Be!==null&&(!jt||(Be.f&vs)!==0)&&qn()&&(Be.f&(Et|bn|Gr|vs))!==0&&!tn?.includes(n)&&uc();let r=t?Ue(e):e;return en(n,r)}function en(n,e){if(!n.equals(e)){var t=n.v;jn?gn.set(n,e):gn.set(n,t),n.v=e;var r=Rt.ensure();r.capture(n,t),(n.f&Et)!==0&&((n.f&At)!==0&&Xa(n),It(n,(n.f&Dt)===0?vt:_n)),n.wv=Lo(),$o(n,At),qn()&&He!==null&&(He.f&vt)!==0&&(He.f&(on|Nn))===0&&(Tt===null?rl([n]):Tt.push(n))}return e}function Qt(n){b(n,n.v+1)}function $o(n,e){var t=n.reactions;if(t!==null)for(var r=qn(),a=t.length,s=0;s<a;s++){var o=t[s],c=o.f;if(!(!r&&o===He)){var l=(c&At)===0;l&&It(o,e),(c&Et)!==0?$o(o,_n):l&&((c&bn)!==0&&In!==null&&In.push(o),Dn(o))}}}function Ue(n){if(typeof n!="object"||n===null||Mn in n)return n;const e=Qa(n);if(e!==co&&e!==Yi)return n;var t=new Map,r=Ir(n),a=C(0),s=nn,o=c=>{if(nn===s)return c();var l=Be,u=nn;gt(null),Is(s);var f=c();return gt(l),Is(u),f};return r&&t.set("length",C(n.length)),new Proxy(n,{defineProperty(c,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&lc();var f=t.get(l);return f===void 0?f=o(()=>{var v=C(u.value);return t.set(l,v),v}):b(f,u.value,!0),!0},deleteProperty(c,l){var u=t.get(l);if(u===void 0){if(l in c){const f=o(()=>C(ot));t.set(l,f),Qt(a)}}else b(u,ot),Qt(a);return!0},get(c,l,u){if(l===Mn)return n;var f=t.get(l),v=l in c;if(f===void 0&&(!v||vn(c,l)?.writable)&&(f=o(()=>{var m=Ue(v?c[l]:ot),_=C(m);return _}),t.set(l,f)),f!==void 0){var g=i(f);return g===ot?void 0:g}return Reflect.get(c,l,u)},getOwnPropertyDescriptor(c,l){var u=Reflect.getOwnPropertyDescriptor(c,l);if(u&&"value"in u){var f=t.get(l);f&&(u.value=i(f))}else if(u===void 0){var v=t.get(l),g=v?.v;if(v!==void 0&&g!==ot)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return u},has(c,l){if(l===Mn)return!0;var u=t.get(l),f=u!==void 0&&u.v!==ot||Reflect.has(c,l);if(u!==void 0||He!==null&&(!f||vn(c,l)?.writable)){u===void 0&&(u=o(()=>{var g=f?Ue(c[l]):ot,m=C(g);return m}),t.set(l,u));var v=i(u);if(v===ot)return!1}return f},set(c,l,u,f){var v=t.get(l),g=l in c;if(r&&l==="length")for(var m=u;m<v.v;m+=1){var _=t.get(m+"");_!==void 0?b(_,ot):m in c&&(_=o(()=>C(ot)),t.set(m+"",_))}if(v===void 0)(!g||vn(c,l)?.writable)&&(v=o(()=>C(void 0)),b(v,Ue(u)),t.set(l,v));else{g=v.v!==ot;var w=o(()=>Ue(u));b(v,w)}var S=Reflect.getOwnPropertyDescriptor(c,l);if(S?.set&&S.set.call(f,u),!g){if(r&&typeof l=="string"){var I=t.get("length"),E=Number(l);Number.isInteger(E)&&E>=I.v&&b(I,E+1)}Qt(a)}return!0},ownKeys(c){i(a);var l=Reflect.ownKeys(c).filter(v=>{var g=t.get(v);return g===void 0||g.v!==ot});for(var[u,f]of t)f.v!==ot&&!(u in c)&&l.push(u);return l},setPrototypeOf(){dc()}})}function ms(n){try{if(n!==null&&typeof n=="object"&&Mn in n)return n[Mn]}catch{}return n}function Qc(n,e){return Object.is(ms(n),ms(e))}var bs,Po,Ao,Mo;function Gc(){if(bs===void 0){bs=window,Po=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Ao=vn(e,"firstChild").get,Mo=vn(e,"nextSibling").get,ps(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),ps(t)&&(t.__t=void 0)}}function cn(n=""){return document.createTextNode(n)}function Yn(n){return Ao.call(n)}function Sr(n){return Mo.call(n)}function d(n,e){return Yn(n)}function L(n,e=!1){{var t=Yn(n);return t instanceof Comment&&t.data===""?Sr(t):t}}function h(n,e=1,t=!1){let r=n;for(;e--;)r=Sr(r);return r}function Oc(n){n.textContent=""}function Xr(){return!1}function Kc(n,e){if(e){const t=document.body;n.autofocus=!0,an(()=>{document.activeElement===t&&n.focus()})}}let _s=!1;function Jc(){_s||(_s=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function nr(n){var e=Be,t=He;gt(null),Ct(null);try{return n()}finally{gt(e),Ct(t)}}function Za(n,e,t,r=t){n.addEventListener(e,()=>nr(t));const a=n.__on_r;a?n.__on_r=()=>{a(),r(!0)}:n.__on_r=()=>r(!0),Jc()}function Yc(n){He===null&&Be===null&&oc(),Be!==null&&(Be.f&Dt)!==0&&He===null&&sc(),jn&&ac()}function Xc(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function ln(n,e,t,r=!0){var a=He;a!==null&&(a.f&Ut)!==0&&(n|=Ut);var s={ctx:it,deps:null,nodes_start:null,nodes_end:null,f:n|At,first:null,fn:e,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{mr(s),s.f|=Qr}catch(l){throw pt(s),l}else e!==null&&Dn(s);if(r){var o=s;if(t&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&er)===0&&(o=o.first),o!==null&&(o.parent=a,a!==null&&Xc(o,a),Be!==null&&(Be.f&Et)!==0&&(n&Nn)===0)){var c=Be;(c.effects??=[]).push(o)}}return s}function Zc(){return Be!==null&&!jt}function Fa(n){const e=ln(Oa,null,!1);return It(e,vt),e.teardown=n,e}function Kt(n){Yc();var e=He.f,t=!Be&&(e&on)!==0&&(e&Qr)===0;if(t){var r=it;(r.e??=[]).push(n)}else return ko(n)}function ko(n){return ln(Ga|ec,n,!1)}function Fc(n){Rt.ensure();const e=ln(Nn|er,n,!0);return(t={})=>new Promise(r=>{t.outro?Nt(e,()=>{pt(e),r(void 0)}):(pt(e),r(void 0))})}function Zr(n){return ln(Ga,n,!1)}function el(n){return ln(Gr|er,n,!0)}function es(n,e=0){return ln(Oa|e,n,!0)}function B(n,e=[],t=[]){Io(e,t,r=>{ln(Oa,()=>n(...r.map(i)),!0)})}function Jt(n,e=0){var t=ln(bn|e,n,!0);return t}function lt(n,e=!0){return ln(on|er,n,!0,e)}function To(n){var e=n.teardown;if(e!==null){const t=jn,r=Be;ws(!0),gt(null);try{e.call(null)}finally{ws(t),gt(r)}}}function Ro(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const a=t.ac;a!==null&&nr(()=>{a.abort(pr)});var r=t.next;(t.f&Nn)!==0?t.parent=null:pt(t,e),t=r}}function tl(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&on)===0&&pt(e),e=t}}function pt(n,e=!0){var t=!1;(e||(n.f&Fi)!==0)&&n.nodes_start!==null&&n.nodes_end!==null&&(nl(n.nodes_start,n.nodes_end),t=!0),Ro(n,e&&!t),Hr(n,0),It(n,Cn);var r=n.transitions;if(r!==null)for(const s of r)s.stop();To(n);var a=n.parent;a!==null&&a.first!==null&&Do(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=n.ac=null}function nl(n,e){for(;n!==null;){var t=n===e?null:Sr(n);n.remove(),n=t}}function Do(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function Nt(n,e){var t=[];ts(n,t,!0),No(t,()=>{pt(n),e&&e()})}function No(n,e){var t=n.length;if(t>0){var r=()=>--t||e();for(var a of n)a.out(r)}else e()}function ts(n,e,t){if((n.f&Ut)===0){if(n.f^=Ut,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var a=r.next,s=(r.f&yn)!==0||(r.f&on)!==0;ts(r,e,s?t:!1),r=a}}}function kn(n){Co(n,!0)}function Co(n,e){if((n.f&Ut)!==0){n.f^=Ut,(n.f&vt)===0&&(It(n,At),Dn(n));for(var t=n.first;t!==null;){var r=t.next,a=(t.f&yn)!==0||(t.f&on)!==0;Co(t,a?e:!1),t=r}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||e)&&s.in()}}let Gn=!1;function ys(n){Gn=n}let jn=!1;function ws(n){jn=n}let Be=null,jt=!1;function gt(n){Be=n}let He=null;function Ct(n){He=n}let tn=null;function qo(n){Be!==null&&(tn===null?tn=[n]:tn.push(n))}let wt=null,Pt=0,Tt=null;function rl(n){Tt=n}let jo=1,gr=0,nn=gr;function Is(n){nn=n}let fn=!1;function Lo(){return++jo}function Fr(n){var e=n.f;if((e&At)!==0)return!0;if((e&_n)!==0){var t=n.deps,r=(e&Dt)!==0;if(t!==null){var a,s,o=(e&Ur)!==0,c=r&&He!==null&&!fn,l=t.length;if((o||c)&&(He===null||(He.f&Cn)===0)){var u=n,f=u.parent;for(a=0;a<l;a++)s=t[a],(o||!s?.reactions?.includes(u))&&(s.reactions??=[]).push(u);o&&(u.f^=Ur),c&&f!==null&&(f.f&Dt)===0&&(u.f^=Dt)}for(a=0;a<l;a++)if(s=t[a],Fr(s)&&Eo(s),s.wv>n.wv)return!0}(!r||He!==null&&!fn)&&It(n,vt)}return!1}function Uo(n,e,t=!0){var r=n.reactions;if(r!==null&&!tn?.includes(n))for(var a=0;a<r.length;a++){var s=r[a];(s.f&Et)!==0?Uo(s,e,!1):e===s&&(t?It(s,At):(s.f&vt)!==0&&It(s,_n),Dn(s))}}function Ho(n){var e=wt,t=Pt,r=Tt,a=Be,s=fn,o=tn,c=it,l=jt,u=nn,f=n.f;wt=null,Pt=0,Tt=null,fn=(f&Dt)!==0&&(jt||!Gn||Be===null),Be=(f&(on|Nn))===0?n:null,tn=null,mn(n.ctx),jt=!1,nn=++gr,n.ac!==null&&(nr(()=>{n.ac.abort(pr)}),n.ac=null);try{n.f|=Pa;var v=n.fn,g=v(),m=n.deps;if(wt!==null){var _;if(Hr(n,Pt),m!==null&&Pt>0)for(m.length=Pt+wt.length,_=0;_<wt.length;_++)m[Pt+_]=wt[_];else n.deps=m=wt;if(!fn||(f&Et)!==0&&n.reactions!==null)for(_=Pt;_<m.length;_++)(m[_].reactions??=[]).push(n)}else m!==null&&Pt<m.length&&(Hr(n,Pt),m.length=Pt);if(qn()&&Tt!==null&&!jt&&m!==null&&(n.f&(Et|_n|At))===0)for(_=0;_<Tt.length;_++)Uo(Tt[_],n);return a!==null&&a!==n&&(gr++,Tt!==null&&(r===null?r=Tt:r.push(...Tt))),(n.f&An)!==0&&(n.f^=An),g}catch(w){return mo(w)}finally{n.f^=Pa,wt=e,Pt=t,Tt=r,Be=a,fn=s,tn=o,mn(c),jt=l,nn=u}}function al(n,e){let t=e.reactions;if(t!==null){var r=Ki.call(t,n);if(r!==-1){var a=t.length-1;a===0?t=e.reactions=null:(t[r]=t[a],t.pop())}}t===null&&(e.f&Et)!==0&&(wt===null||!wt.includes(e))&&(It(e,_n),(e.f&(Dt|Ur))===0&&(e.f^=Ur),xo(e),Hr(e,0))}function Hr(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)al(n,t[r])}function mr(n){var e=n.f;if((e&Cn)===0){It(n,vt);var t=He,r=Gn;He=n,Gn=!0;try{(e&bn)!==0?tl(n):Ro(n),To(n);var a=Ho(n);n.teardown=typeof a=="function"?a:null,n.wv=jo;var s;io&&Rc&&(n.f&At)!==0&&n.deps}finally{Gn=r,He=t}}}async function sl(){await Promise.resolve(),_o()}function i(n){var e=n.f,t=(e&Et)!==0;if(Be!==null&&!jt){var r=He!==null&&(He.f&Cn)!==0;if(!r&&!tn?.includes(n)){var a=Be.deps;if((Be.f&Pa)!==0)n.rv<gr&&(n.rv=gr,wt===null&&a!==null&&a[Pt]===n?Pt++:wt===null?wt=[n]:(!fn||!wt.includes(n))&&wt.push(n));else{(Be.deps??=[]).push(n);var s=n.reactions;s===null?n.reactions=[Be]:s.includes(Be)||s.push(Be)}}}else if(t&&n.deps===null&&n.effects===null){var o=n,c=o.parent;c!==null&&(c.f&Dt)===0&&(o.f^=Dt)}if(jn){if(gn.has(n))return gn.get(n);if(t){o=n;var l=o.v;return((o.f&vt)===0&&o.reactions!==null||Bo(o))&&(l=Xa(o)),gn.set(o,l),l}}else t&&(o=n,Fr(o)&&Eo(o));if((n.f&An)!==0)throw n.v;return n.v}function Bo(n){if(n.v===ot)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(gn.has(e)||(e.f&Et)!==0&&Bo(e))return!0;return!1}function rr(n){var e=jt;try{return jt=!0,n()}finally{jt=e}}const ol=-7169;function It(n,e){n.f=n.f&ol|e}function il(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const cl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ll(n){return cl.includes(n)}const dl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ul(n){return n=n.toLowerCase(),dl[n]??n}const fl=["touchstart","touchmove"];function hl(n){return fl.includes(n)}const zo=new Set,Ta=new Set;function ns(n,e,t,r={}){function a(s){if(r.capture||fr.call(e,s),!s.cancelBubble)return nr(()=>t?.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?an(()=>{e.addEventListener(n,a,r)}):e.addEventListener(n,a,r),a}function Ra(n,e,t,r={}){var a=ns(e,n,t,r);return()=>{n.removeEventListener(e,a,r)}}function On(n,e,t,r,a){var s={capture:r,passive:a},o=ns(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Fa(()=>{e.removeEventListener(n,o,s)})}function Xe(n){for(var e=0;e<n.length;e++)zo.add(n[e]);for(var t of Ta)t(n)}let Ss=null;function fr(n){var e=this,t=e.ownerDocument,r=n.type,a=n.composedPath?.()||[],s=a[0]||n.target;Ss=n;var o=0,c=Ss===n&&n.__root;if(c){var l=a.indexOf(c);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var u=a.indexOf(e);if(u===-1)return;l<=u&&(o=l)}if(s=a[o]||n.target,s!==e){$a(n,"currentTarget",{configurable:!0,get(){return s||t}});var f=Be,v=He;gt(null),Ct(null);try{for(var g,m=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var w=s["__"+r];if(w!=null&&(!s.disabled||n.target===s))if(Ir(w)){var[S,...I]=w;S.apply(s,[n,...I])}else w.call(s,n)}catch(E){g?m.push(E):g=E}if(n.cancelBubble||_===e||_===null)break;s=_}if(g){for(let E of m)queueMicrotask(()=>{throw E});throw g}}finally{n.__root=e,delete n.currentTarget,gt(f),Ct(v)}}}function Wo(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function Xn(n,e){var t=He;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function y(n,e){var t=(e&Sc)!==0,r=(e&xc)!==0,a,s=!n.startsWith("<!>");return()=>{a===void 0&&(a=Wo(s?n:"<!>"+n),t||(a=Yn(a)));var o=r||Po?document.importNode(a,!0):a.cloneNode(!0);if(t){var c=Yn(o),l=o.lastChild;Xn(c,l)}else Xn(o,o);return o}}function pl(n,e,t="svg"){var r=!n.startsWith("<!>"),a=`<${t}>${r?n:"<!>"+n}</${t}>`,s;return()=>{if(!s){var o=Wo(a),c=Yn(o);s=Yn(c)}var l=s.cloneNode(!0);return Xn(l,l),l}}function vl(n,e){return pl(n,e,"svg")}function dt(n=""){{var e=cn(n+"");return Xn(e,e),e}}function Z(){var n=document.createDocumentFragment(),e=document.createComment(""),t=cn();return n.append(e,t),Xn(e,t),n}function p(n,e){n!==null&&n.before(e)}let Br=!0;function xs(n){Br=n}function j(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??=n.nodeValue)&&(n.__t=t,n.nodeValue=t+"")}function gl(n,e){return ml(n,e)}const zn=new Map;function ml(n,{target:e,anchor:t,props:r={},events:a,context:s,intro:o=!0}){Gc();var c=new Set,l=v=>{for(var g=0;g<v.length;g++){var m=v[g];if(!c.has(m)){c.add(m);var _=hl(m);e.addEventListener(m,fr,{passive:_});var w=zn.get(m);w===void 0?(document.addEventListener(m,fr,{passive:_}),zn.set(m,1)):zn.set(m,w+1)}}};l(Va(zo)),Ta.add(l);var u=void 0,f=Fc(()=>{var v=t??e.appendChild(cn());return Uc(v,{pending:()=>{}},g=>{if(s){J({});var m=it;m.c=s}a&&(r.$$events=a),Br=o,u=n(g,r)||{},Br=!0,s&&Y()}),()=>{for(var g of c){e.removeEventListener(g,fr);var m=zn.get(g);--m===0?(document.removeEventListener(g,fr),zn.delete(g)):zn.set(g,m)}Ta.delete(l),v!==t&&v.parentNode?.removeChild(v)}});return bl.set(u,f),u}let bl=new WeakMap;const ga=0,kr=1,ma=2;function Es(n,e,t,r,a){var s=n,o=qn(),c=it,l=ot,u,f,v,g=o?Ot(void 0):ka(void 0,!1,!1),m=o?Ot(void 0):ka(void 0,!1,!1),_=!1;function w(I,E){_=!0,E&&(Ct(S),gt(S),mn(c));try{I===ga&&t&&(u?kn(u):u=lt(()=>t(s))),I===kr&&r&&(f?kn(f):f=lt(()=>r(s,g))),I===ma&&a&&(v?kn(v):v=lt(()=>a(s,m))),I!==ga&&u&&Nt(u,()=>u=null),I!==kr&&f&&Nt(f,()=>f=null),I!==ma&&v&&Nt(v,()=>v=null)}finally{E&&(mn(null),gt(null),Ct(null),Qn||_o())}}var S=Jt(()=>{if(l!==(l=e())){if(Xi(l)){var I=l;_=!1,I.then(E=>{I===l&&(en(g,E),w(kr,!0))},E=>{if(I===l&&(en(m,E),w(ma,!0),!a))throw m.v}),an(()=>{_||w(ga,!0)})}else en(g,l),w(kr,!1);return()=>l=ot}})}function $(n,e,t=!1){var r=n,a=null,s=null,o=ot,c=t?yn:0,l=!1;const u=(m,_=!0)=>{l=!0,g(_,m)};var f=null;function v(){f!==null&&(f.lastChild.remove(),r.before(f),f=null);var m=o?a:s,_=o?s:a;m&&kn(m),_&&Nt(_,()=>{o?s=null:a=null})}const g=(m,_)=>{if(o!==(o=m)){var w=Xr(),S=r;if(w&&(f=document.createDocumentFragment(),f.append(S=cn())),o?a??=_&&lt(()=>_(S)):s??=_&&lt(()=>_(S)),w){var I=Ye,E=o?a:s,k=o?s:a;E&&I.skipped_effects.delete(E),k&&I.skipped_effects.add(k),I.add_callback(v)}else v()}};Jt(()=>{l=!1,e(u),l||g(null,null)},c)}function _l(n,e,t){var r=n,a=ot,s,o,c=null,l=qn()?Tc:po;function u(){s&&Nt(s),c!==null&&(c.lastChild.remove(),r.before(c),c=null),s=o}Jt(()=>{if(l(a,a=e())){var f=r,v=Xr();v&&(c=document.createDocumentFragment(),c.append(f=cn())),o=lt(()=>t(f)),v?Ye.add_callback(u):u()}})}function xt(n,e){return e}function yl(n,e,t){for(var r=n.items,a=[],s=e.length,o=0;o<s;o++)ts(e[o].e,a,!0);var c=s>0&&a.length===0&&t!==null;if(c){var l=t.parentNode;Oc(l),l.append(t),r.clear(),zt(n,e[0].prev,e[s-1].next)}No(a,()=>{for(var u=0;u<s;u++){var f=e[u];c||(r.delete(f.k),zt(n,f.prev,f.next)),pt(f.e,!c)}})}function et(n,e,t,r,a,s=null){var o=n,c={flags:e,items:new Map,first:null},l=(e&fo)!==0;if(l){var u=n;o=u.appendChild(cn())}var f=null,v=!1,g=new Map,m=Ya(()=>{var I=t();return Ir(I)?I:I==null?[]:Va(I)}),_,w;function S(){wl(w,_,c,g,o,a,e,r,t),s!==null&&(_.length===0?f?kn(f):f=lt(()=>s(o)):f!==null&&Nt(f,()=>{f=null}))}Jt(()=>{w??=He,_=i(m);var I=_.length;if(!(v&&I===0)){v=I===0;var E,k,P,A;if(Xr()){var T=new Set,U=Ye;for(k=0;k<I;k+=1){P=_[k],A=r(P,k);var x=c.items.get(A)??g.get(A);x?(e&(Or|Kr))!==0&&Vo(x,P,k,e):(E=Qo(null,c,null,null,P,A,k,a,e,t,!0),g.set(A,E)),T.add(A)}for(const[z,F]of c.items)T.has(z)||U.skipped_effects.add(F.e);U.add_callback(S)}else S();i(m)}})}function wl(n,e,t,r,a,s,o,c,l){var u=(o&hc)!==0,f=(o&(Or|Kr))!==0,v=e.length,g=t.items,m=t.first,_=m,w,S=null,I,E=[],k=[],P,A,T,U;if(u)for(U=0;U<v;U+=1)P=e[U],A=c(P,U),T=g.get(A),T!==void 0&&(T.a?.measure(),(I??=new Set).add(T));for(U=0;U<v;U+=1){if(P=e[U],A=c(P,U),T=g.get(A),T===void 0){var x=r.get(A);if(x!==void 0){r.delete(A),g.set(A,x);var z=S?S.next:_;zt(t,S,x),zt(t,x,z),ba(x,z,a),S=x}else{var F=_?_.e.nodes_start:a;S=Qo(F,t,S,S===null?t.first:S.next,P,A,U,s,o,l)}g.set(A,S),E=[],k=[],_=S.next;continue}if(f&&Vo(T,P,U,o),(T.e.f&Ut)!==0&&(kn(T.e),u&&(T.a?.unfix(),(I??=new Set).delete(T))),T!==_){if(w!==void 0&&w.has(T)){if(E.length<k.length){var G=k[0],D;S=G.prev;var ne=E[0],se=E[E.length-1];for(D=0;D<E.length;D+=1)ba(E[D],G,a);for(D=0;D<k.length;D+=1)w.delete(k[D]);zt(t,ne.prev,se.next),zt(t,S,ne),zt(t,se,G),_=G,S=se,U-=1,E=[],k=[]}else w.delete(T),ba(T,_,a),zt(t,T.prev,T.next),zt(t,T,S===null?t.first:S.next),zt(t,S,T),S=T;continue}for(E=[],k=[];_!==null&&_.k!==A;)(_.e.f&Ut)===0&&(w??=new Set).add(_),k.push(_),_=_.next;if(_===null)continue;T=_}E.push(T),S=T,_=T.next}if(_!==null||w!==void 0){for(var ae=w===void 0?[]:Va(w);_!==null;)(_.e.f&Ut)===0&&ae.push(_),_=_.next;var R=ae.length;if(R>0){var H=(o&fo)!==0&&v===0?a:null;if(u){for(U=0;U<R;U+=1)ae[U].a?.measure();for(U=0;U<R;U+=1)ae[U].a?.fix()}yl(t,ae,H)}}u&&an(()=>{if(I!==void 0)for(T of I)T.a?.apply()}),n.first=t.first&&t.first.e,n.last=S&&S.e;for(var me of r.values())pt(me.e);r.clear()}function Vo(n,e,t,r){(r&Or)!==0&&en(n.v,e),(r&Kr)!==0?en(n.i,t):n.i=t}function Qo(n,e,t,r,a,s,o,c,l,u,f){var v=(l&Or)!==0,g=(l&pc)===0,m=v?g?ka(a,!1,!1):Ot(a):a,_=(l&Kr)===0?o:Ot(o),w={i:_,v:m,k:s,a:null,e:null,prev:t,next:r};try{if(n===null){var S=document.createDocumentFragment();S.append(n=cn())}return w.e=lt(()=>c(n,m,_,u),kc),w.e.prev=t&&t.e,w.e.next=r&&r.e,t===null?f||(e.first=w):(t.next=w,t.e.next=w.e),r!==null&&(r.prev=w,r.e.prev=w.e),w}finally{}}function ba(n,e,t){for(var r=n.next?n.next.e.nodes_start:t,a=e?e.e.nodes_start:t,s=n.e.nodes_start;s!==null&&s!==r;){var o=Sr(s);a.before(s),s=o}}function zt(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function be(n,e,...t){var r=n,a=pe,s;Jt(()=>{a!==(a=e())&&(s&&(pt(s),s=null),s=lt(()=>a(r,...t)))},yn)}function Tn(n,e,t){var r=n,a,s,o=null,c=null;function l(){s&&(Nt(s),s=null),o&&(o.lastChild.remove(),r.before(o),o=null),s=c,c=null}Jt(()=>{if(a!==(a=e())){var u=Xr();if(a){var f=r;u&&(o=document.createDocumentFragment(),o.append(f=cn()),s&&Ye.skipped_effects.add(s)),c=lt(()=>t(f,a))}u?Ye.add_callback(l):l()}},yn)}function Il(n,e,t,r,a,s){var o,c,l=null,u=n,f;Jt(()=>{const v=e()||null;var g=$c;v!==o&&(f&&(v===null?Nt(f,()=>{f=null,c=null}):v===c?kn(f):(pt(f),xs(!1))),v&&v!==c&&(f=lt(()=>{if(l=document.createElementNS(g,v),Xn(l,l),r){var m=l.appendChild(cn());r(l,m)}He.nodes_end=l,u.before(l)})),o=v,o&&(c=o),xs(!0))},yn)}function Sl(n,e){var t=void 0,r;Jt(()=>{t!==(t=e())&&(r&&(pt(r),r=null),t&&(r=lt(()=>{Zr(()=>t(n))})))})}function Go(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var a=n.length;for(e=0;e<a;e++)n[e]&&(t=Go(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function xl(){for(var n,e,t=0,r="",a=arguments.length;t<a;t++)(n=arguments[t])&&(e=Go(n))&&(r&&(r+=" "),r+=e);return r}function El(n){return typeof n=="object"?xl(n):n??""}const $s=[...` 	
\r\f \v\uFEFF`];function $l(n,e,t){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),t){for(var a in t)if(t[a])r=r?r+" "+a:a;else if(r.length)for(var s=a.length,o=0;(o=r.indexOf(a,o))>=0;){var c=o+s;(o===0||$s.includes(r[o-1]))&&(c===r.length||$s.includes(r[c]))?r=(o===0?"":r.substring(0,o))+r.substring(c+1):o=c}}return r===""?null:r}function Ps(n,e=!1){var t=e?" !important;":";",r="";for(var a in n){var s=n[a];s!=null&&s!==""&&(r+=" "+a+": "+s+t)}return r}function _a(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function Pl(n,e){if(e){var t="",r,a;if(Array.isArray(e)?(r=e[0],a=e[1]):r=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(_a)),a&&l.push(...Object.keys(a).map(_a));var u=0,f=-1;const w=n.length;for(var v=0;v<w;v++){var g=n[v];if(c?g==="/"&&n[v-1]==="*"&&(c=!1):s?s===g&&(s=!1):g==="/"&&n[v+1]==="*"?c=!0:g==='"'||g==="'"?s=g:g==="("?o++:g===")"&&o--,!c&&s===!1&&o===0){if(g===":"&&f===-1)f=v;else if(g===";"||v===w-1){if(f!==-1){var m=_a(n.substring(u,f).trim());if(!l.includes(m)){g!==";"&&v++;var _=n.substring(u,v).trim();t+=" "+_+";"}}u=v+1,f=-1}}}}return r&&(t+=Ps(r)),a&&(t+=Ps(a,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function Te(n,e,t,r,a,s){var o=n.__className;if(o!==t||o===void 0){var c=$l(t,r,s);c==null?n.removeAttribute("class"):e?n.className=c:n.setAttribute("class",c),n.__className=t}else if(s&&a!==s)for(var l in s){var u=!!s[l];(a==null||u!==!!a[l])&&n.classList.toggle(l,u)}return s}function ya(n,e={},t,r){for(var a in t){var s=t[a];e[a]!==s&&(t[a]==null?n.style.removeProperty(a):n.style.setProperty(a,s,r))}}function Oo(n,e,t,r){var a=n.__style;if(a!==e){var s=Pl(e,r);s==null?n.removeAttribute("style"):n.style.cssText=s,n.__style=e}else r&&(Array.isArray(r)?(ya(n,t?.[0],r[0]),ya(n,t?.[1],r[1],"important")):ya(n,t,r));return r}function zr(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Ir(e))return Ac();for(var r of n.options)r.selected=e.includes(vr(r));return}for(r of n.options){var a=vr(r);if(Qc(a,e)){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Ko(n){var e=new MutationObserver(()=>{zr(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Fa(()=>{e.disconnect()})}function Zn(n,e,t=e){var r=!0;Za(n,"change",a=>{var s=a?"[selected]":":checked",o;if(n.multiple)o=[].map.call(n.querySelectorAll(s),vr);else{var c=n.querySelector(s)??n.querySelector("option:not([disabled])");o=c&&vr(c)}t(o)}),Zr(()=>{var a=e();if(zr(n,a,r),r&&a===void 0){var s=n.querySelector(":checked");s!==null&&(a=vr(s),t(a))}n.__value=a,r=!1}),Ko(n)}function vr(n){return"__value"in n?n.__value:n.value}const lr=Symbol("class"),dr=Symbol("style"),Jo=Symbol("is custom element"),Yo=Symbol("is html");function Al(n,e){var t=ea(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!=="PROGRESS")||(n.value=e??"")}function Ml(n,e){var t=ea(n);t.checked!==(t.checked=e??void 0)&&(n.checked=e)}function kl(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function sn(n,e,t,r){var a=ea(n);a[e]!==(a[e]=t)&&(e==="loading"&&(n[tc]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Xo(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Tl(n,e,t,r,a=!1,s=!1){var o=ea(n),c=o[Jo],l=!o[Yo],u=e||{},f=n.tagName==="OPTION";for(var v in e)v in t||(t[v]=null);t.class?t.class=El(t.class):t[lr]&&(t.class=null),t[dr]&&(t.style??=null);var g=Xo(n);for(const P in t){let A=t[P];if(f&&P==="value"&&A==null){n.value=n.__value="",u[P]=A;continue}if(P==="class"){var m=n.namespaceURI==="http://www.w3.org/1999/xhtml";Te(n,m,A,r,e?.[lr],t[lr]),u[P]=A,u[lr]=t[lr];continue}if(P==="style"){Oo(n,A,e?.[dr],t[dr]),u[P]=A,u[dr]=t[dr];continue}var _=u[P];if(!(A===_&&!(A===void 0&&n.hasAttribute(P)))){u[P]=A;var w=P[0]+P[1];if(w!=="$$")if(w==="on"){const T={},U="$$"+P;let x=P.slice(2);var S=ll(x);if(il(x)&&(x=x.slice(0,-7),T.capture=!0),!S&&_){if(A!=null)continue;n.removeEventListener(x,u[U],T),u[U]=null}if(A!=null)if(S)n[`__${x}`]=A,Xe([x]);else{let z=function(F){u[P].call(this,F)};var k=z;u[U]=ns(x,n,z,T)}else S&&(n[`__${x}`]=void 0)}else if(P==="style")sn(n,P,A);else if(P==="autofocus")Kc(n,!!A);else if(!c&&(P==="__value"||P==="value"&&A!=null))n.value=n.__value=A;else if(P==="selected"&&f)kl(n,A);else{var I=P;l||(I=ul(I));var E=I==="defaultValue"||I==="defaultChecked";if(A==null&&!c&&!E)if(o[P]=null,I==="value"||I==="checked"){let T=n;const U=e===void 0;if(I==="value"){let x=T.defaultValue;T.removeAttribute(I),T.defaultValue=x,T.value=T.__value=U?x:null}else{let x=T.defaultChecked;T.removeAttribute(I),T.defaultChecked=x,T.checked=U?x:!1}}else n.removeAttribute(P);else E||g.includes(I)&&(c||typeof A!="string")?(n[I]=A,I in o&&(o[I]=ot)):typeof A!="function"&&sn(n,I,A)}}}return u}function Da(n,e,t=[],r=[],a,s=!1,o=!1){Io(t,r,c=>{var l=void 0,u={},f=n.nodeName==="SELECT",v=!1;if(Jt(()=>{var m=e(...c.map(i)),_=Tl(n,l,m,a,s,o);v&&f&&"value"in m&&zr(n,m.value);for(let S of Object.getOwnPropertySymbols(u))m[S]||pt(u[S]);for(let S of Object.getOwnPropertySymbols(m)){var w=m[S];S.description===Pc&&(!l||w!==l[S])&&(u[S]&&pt(u[S]),u[S]=lt(()=>Sl(n,()=>w))),_[S]=w}l=_}),f){var g=n;Zr(()=>{zr(g,l.value,!0),Ko(g)})}v=!0})}function ea(n){return n.__attributes??={[Jo]:n.nodeName.includes("-"),[Yo]:n.namespaceURI===Ec}}var As=new Map;function Xo(n){var e=n.getAttribute("is")||n.nodeName,t=As.get(e);if(t)return t;As.set(e,t=[]);for(var r,a=n,s=Element.prototype;s!==a;){r=Ji(a);for(var o in r)r[o].set&&t.push(o);a=Qa(a)}return t}const Rl=()=>performance.now(),Ft={tick:n=>requestAnimationFrame(n),now:()=>Rl(),tasks:new Set};function Zo(){const n=Ft.now();Ft.tasks.forEach(e=>{e.c(n)||(Ft.tasks.delete(e),e.f())}),Ft.tasks.size!==0&&Ft.tick(Zo)}function Dl(n){let e;return Ft.tasks.size===0&&Ft.tick(Zo),{promise:new Promise(t=>{Ft.tasks.add(e={c:n,f:t})}),abort(){Ft.tasks.delete(e)}}}function Tr(n,e){nr(()=>{n.dispatchEvent(new CustomEvent(e))})}function Nl(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function Ms(n){const e={},t=n.split(";");for(const r of t){const[a,s]=r.split(":");if(!a||s===void 0)break;const o=Nl(a.trim());e[o]=s.trim()}return e}const Cl=n=>n;function Fo(n,e,t,r){var a=(n&yc)!==0,s=(n&wc)!==0,o=a&&s,c=(n&Ic)!==0,l=o?"both":a?"in":"out",u,f=e.inert,v=e.style.overflow,g,m;function _(){return nr(()=>u??=t()(e,r?.()??{},{direction:l}))}var w={is_global:c,in(){if(e.inert=f,!a){m?.abort(),m?.reset?.();return}s||g?.abort(),Tr(e,"introstart"),g=Na(e,_(),m,1,()=>{Tr(e,"introend"),g?.abort(),g=u=void 0,e.style.overflow=v})},out(k){if(!s){k?.(),u=void 0;return}e.inert=!0,Tr(e,"outrostart"),m=Na(e,_(),g,0,()=>{Tr(e,"outroend"),k?.()})},stop:()=>{g?.abort(),m?.abort()}},S=He;if((S.transitions??=[]).push(w),a&&Br){var I=c;if(!I){for(var E=S.parent;E&&(E.f&yn)!==0;)for(;(E=E.parent)&&(E.f&bn)===0;);I=!E||(E.f&Qr)!==0}I&&Zr(()=>{rr(()=>w.in())})}}function Na(n,e,t,r,a){var s=r===1;if(Vn(e)){var o,c=!1;return an(()=>{if(!c){var S=e({direction:s?"in":"out"});o=Na(n,S,t,r,a)}}),{abort:()=>{c=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(t?.deactivate(),!e?.duration)return a(),{abort:pe,deactivate:pe,reset:pe,t:()=>r};const{delay:l=0,css:u,tick:f,easing:v=Cl}=e;var g=[];if(s&&t===void 0&&(f&&f(0,1),u)){var m=Ms(u(0,1));g.push(m,m)}var _=()=>1-r,w=n.animate(g,{duration:l,fill:"forwards"});return w.onfinish=()=>{w.cancel();var S=t?.t()??1-r;t?.abort();var I=r-S,E=e.duration*Math.abs(I),k=[];if(E>0){var P=!1;if(u)for(var A=Math.ceil(E/16.666666666666668),T=0;T<=A;T+=1){var U=S+I*v(T/A),x=Ms(u(U,1-U));k.push(x),P||=x.overflow==="hidden"}P&&(n.style.overflow="hidden"),_=()=>{var z=w.currentTime;return S+I*v(z/E)},f&&Dl(()=>{if(w.playState!=="running")return!1;var z=_();return f(z,1-z),!0})}w=n.animate(k,{duration:E,fill:"forwards"}),w.onfinish=()=>{_=()=>r,f?.(r,1-r),a()}},{abort:()=>{w&&(w.cancel(),w.effect=null,w.onfinish=pe)},deactivate:()=>{a=pe},reset:()=>{r===0&&f?.(1,0)},t:()=>_()}}function Oe(n,e,t=e){var r=new WeakSet;Za(n,"input",async a=>{var s=a?n.defaultValue:n.value;if(s=wa(n)?Ia(s):s,t(s),Ye!==null&&r.add(Ye),await sl(),s!==(s=e())){var o=n.selectionStart,c=n.selectionEnd;n.value=s??"",c!==null&&(n.selectionStart=o,n.selectionEnd=Math.min(c,n.value.length))}}),rr(e)==null&&n.value&&(t(wa(n)?Ia(n.value):n.value),Ye!==null&&r.add(Ye)),es(()=>{var a=e();if(n===document.activeElement){var s=qr??Ye;if(r.has(s))return}wa(n)&&a===Ia(n.value)||n.type==="date"&&!a&&!n.value||a!==n.value&&(n.value=a??"")})}function Ca(n,e,t=e){Za(n,"change",r=>{var a=r?n.defaultChecked:n.checked;t(a)}),rr(e)==null&&t(n.checked),es(()=>{var r=e();n.checked=!!r})}function wa(n){var e=n.type;return e==="number"||e==="range"}function Ia(n){return n===""?null:+n}let Rr=!1;function ql(n){var e=Rr;try{return Rr=!1,[n(),Rr]}finally{Rr=e}}const jl={get(n,e){if(!n.exclude.includes(e))return n.props[e]},set(n,e){return!1},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function ye(n,e,t){return new Proxy({props:n,exclude:e},jl)}const Ll={get(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(Vn(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(n,e,t){let r=n.props.length;for(;r--;){let a=n.props[r];Vn(a)&&(a=a());const s=vn(a,e);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(Vn(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const a=vn(r,e);return a&&!a.configurable&&(a.configurable=!0),a}}},has(n,e){if(e===Mn||e===uo)return!1;for(let t of n.props)if(Vn(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props)if(Vn(t)&&(t=t()),!!t){for(const r in t)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(t))e.includes(r)||e.push(r)}return e}};function Se(...n){return new Proxy({props:n},Ll)}function Ie(n,e,t,r){var a=!tr||(t&gc)!==0,s=(t&bc)!==0,o=(t&_c)!==0,c=r,l=!0,u=()=>(l&&(l=!1,c=o?rr(r):r),c),f;if(s){var v=Mn in n||uo in n;f=vn(n,e)?.set??(v&&e in n?k=>n[e]=k:void 0)}var g,m=!1;s?[g,m]=ql(()=>n[e]):g=n[e],g===void 0&&r!==void 0&&(g=u(),f&&(a&&cc(),f(g)));var _;if(a?_=()=>{var k=n[e];return k===void 0?u():(l=!0,k)}:_=()=>{var k=n[e];return k!==void 0&&(c=void 0),k===void 0?c:k},a&&(t&mc)===0)return _;if(f){var w=n.$$legacy;return(function(k,P){return arguments.length>0?((!a||!P||w||m)&&f(P?_():k),k):_()})}var S=!1,I=((t&vc)!==0?Yr:Ya)(()=>(S=!1,_()));s&&i(I);var E=He;return(function(k,P){if(arguments.length>0){const A=P?i(I):a&&s?Ue(k):k;return b(I,A),S=!0,c!==void 0&&(c=A),k}return jn&&S||(E.f&Cn)!==0?I.v:i(I)})}function Ul(n){it===null&&nc(),tr&&it.l!==null?Hl(it).m.push(n):Kt(()=>{const e=rr(n);if(typeof e=="function")return e})}function Hl(n){var e=n.l;return e.u??={a:[],b:[],m:[]}}const Bl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Bl);const zl="modulepreload",Wl=function(n){return"/"+n},ks={},qa=function(e,t,r){let a=Promise.resolve();if(t&&t.length>0){let u=function(f){return Promise.all(f.map(v=>Promise.resolve(v).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};var o=u;document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");a=u(t.map(f=>{if(f=Wl(f),f in ks)return;ks[f]=!0;const v=f.endsWith(".css"),g=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${g}`))return;const m=document.createElement("link");if(m.rel=v?"stylesheet":zl,v||(m.as="script"),m.crossOrigin="",m.href=f,l&&m.setAttribute("nonce",l),document.head.appendChild(m),v)return new Promise((_,w)=>{m.addEventListener("load",_),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return a.then(c=>{for(const l of c||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};class hn extends Map{#e=new Map;#t=C(0);#n=C(0);#a=nn||-1;constructor(e){if(super(),e){for(var[t,r]of e)super.set(t,r);this.#n.v=super.size}}#o(e){return nn===this.#a?C(e):Ot(e)}has(e){var t=this.#e,r=t.get(e);if(r===void 0){var a=super.get(e);if(a!==void 0)r=this.#o(0),t.set(e,r);else return i(this.#t),!1}return i(r),!0}forEach(e,t){this.#c(),super.forEach(e,t)}get(e){var t=this.#e,r=t.get(e);if(r===void 0){var a=super.get(e);if(a!==void 0)r=this.#o(0),t.set(e,r);else{i(this.#t);return}}return i(r),super.get(e)}set(e,t){var r=this.#e,a=r.get(e),s=super.get(e),o=super.set(e,t),c=this.#t;if(a===void 0)a=this.#o(0),r.set(e,a),b(this.#n,super.size),Qt(c);else if(s!==t){Qt(a);var l=c.reactions===null?null:new Set(c.reactions),u=l===null||!a.reactions?.every(f=>l.has(f));u&&Qt(c)}return o}delete(e){var t=this.#e,r=t.get(e),a=super.delete(e);return r!==void 0&&(t.delete(e),b(this.#n,super.size),b(r,-1),Qt(this.#t)),a}clear(){if(super.size!==0){super.clear();var e=this.#e;b(this.#n,0);for(var t of e.values())b(t,-1);Qt(this.#t),e.clear()}}#c(){i(this.#t);var e=this.#e;if(this.#n.v!==e.size){for(var t of super.keys())if(!e.has(t)){var r=this.#o(0);e.set(t,r)}}for([,r]of this.#e)i(r)}keys(){return i(this.#t),super.keys()}values(){return this.#c(),super.values()}entries(){return this.#c(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return i(this.#n),super.size}}class Vl{#e;#t;constructor(e,t){this.#e=e,this.#t=Ja(t)}get current(){return this.#t(),this.#e()}}const Ql=/\(.+\)/,Gl=new Set(["all","print","screen","and","or","not","only"]);class Ol extends Vl{constructor(e,t){let r=Ql.test(e)||e.split(/[\s,]+/).some(s=>Gl.has(s.trim()))?e:`(${e})`;const a=window.matchMedia(r);super(()=>a.matches,s=>Ra(a,"change",s))}}const Kl=typeof window<"u"?window:void 0;function Jl(n){let e=n.activeElement;for(;e?.shadowRoot;){const t=e.shadowRoot.activeElement;if(t===e)break;e=t}return e}class Yl{#e;#t;constructor(e={}){const{window:t=Kl,document:r=t?.document}=e;t!==void 0&&(this.#e=r,this.#t=Ja(a=>{const s=Ra(t,"focusin",a),o=Ra(t,"focusout",a);return()=>{s(),o()}}))}get current(){return this.#t?.(),this.#e?Jl(this.#e):null}}new Yl;function Xl(n){return typeof n=="function"}function Zl(n,e){if(Xl(n)){const r=n();return r===void 0?e:r}return n===void 0?e:n}function Fl(n,e){let t=C(null);const r=te(()=>Zl(e,250));function a(...s){if(i(t))i(t).timeout&&clearTimeout(i(t).timeout);else{let o,c;const l=new Promise((u,f)=>{o=u,c=f});b(t,{timeout:null,runner:null,promise:l,resolve:o,reject:c},!0)}return i(t).runner=async()=>{if(!i(t))return;const o=i(t);b(t,null);try{o.resolve(await n.apply(this,s))}catch(c){o.reject(c)}},i(t).timeout=setTimeout(i(t).runner,i(r)),i(t).promise}return a.cancel=async()=>{(!i(t)||i(t).timeout===null)&&(await new Promise(s=>setTimeout(s,0)),!i(t)||i(t).timeout===null)||(clearTimeout(i(t).timeout),i(t).reject("Cancelled"),b(t,null))},a.runScheduledNow=async()=>{(!i(t)||!i(t).timeout)&&(await new Promise(s=>setTimeout(s,0)),!i(t)||!i(t).timeout)||(clearTimeout(i(t).timeout),i(t).timeout=null,await i(t).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!i(t)?.timeout}}),a}function Lt(n){if(!n?.trim())return null;try{return JSON.parse(n)}catch(e){return console.warn("[ProductsStore] Erreur parsing JSON:",e),null}}function xr(n){return n?.length?n.filter(e=>e.quantity!=null&&e.unit).map(e=>({q:typeof e.quantity=="number"?e.quantity:parseFloat(e.quantity),u:e.unit})).filter(e=>!isNaN(e.q)):[]}function Er(n){if(!n?.length)return[];const e=new Map;return n.forEach(t=>{if(!t.q||!t.u||typeof t.q!="number"||isNaN(t.q))return;const r=e.get(t.u)||0;e.set(t.u,r+t.q)}),Array.from(e.entries()).map(([t,r])=>({q:r,u:t}))}function $r(n,e){if(!n?.length)return{numeric:[],display:"✅ Complet"};if(!e?.length){const c=n.map(l=>pn(l.q.toString(),l.u)).join(" et ");return{numeric:n,display:c}}const t=new Map,r=new Map;n.forEach(c=>{const l=parseFloat(c.q);isNaN(l)||t.set(c.u,(t.get(c.u)||0)+l)}),e.forEach(c=>{r.set(c.u,(r.get(c.u)||0)+c.q)});const a=[],s=[];t.forEach((c,l)=>{const u=r.get(l)||0,f=c-u;f>0&&(a.push({q:f,u:l}),s.push(pn(f.toString(),l)))});const o=s.length>0?s.join(" et "):"✅ Complet";return{numeric:a,display:o}}function mt(n){return n?.length?n.map(e=>pn(e.q.toString(),e.u)).join(" et "):"-"}function pn(n,e){const t=parseFloat(n);if(isNaN(t))return`${n} ${e}`;if((e==="gr."||e==="ml")&&t>=1e3){const r=t/1e3,a=e==="gr."?"kg":"l.";let o=(Math.round(r*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${a}`}if(!["gr.","ml","kg","l."].includes(e)){let a=(Math.round(t*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${e}`}return`${t} ${e}`}function ta(n){if(!n?.length)return[];const e=new Map;return n.forEach(({q:t,u:r})=>{if(typeof t=="number"&&!isNaN(t)){const a=e.get(r)||0;e.set(r,a+t)}}),Array.from(e.entries()).map(([t,r])=>({q:r,u:t}))}function ei(n){return n?Object.values(n).some(e=>e.recipes?.some(t=>t.q!==void 0||t.u!==void 0)):!1}function ti(n){if(!n)return[];const e=[];return Object.entries(n).forEach(([t,r])=>{r.recipes?.forEach(a=>{e.push({...a,date:t,dateTimeService:t})})}),e}function na(n){if(!n)return[];const e=Object.values(n).flatMap(t=>t.totalConsolidated);return ta(e)}function rs(n,e){const t=new Map,r=new Map;n.forEach(({q:o,u:c})=>{t.set(c,(t.get(c)||0)+o)}),e.forEach(({q:o,u:c})=>{r.set(c,(r.get(c)||0)+o)});const a=[],s=new Set([...t.keys(),...r.keys()]);for(const o of s){const c=t.get(o)||0,l=r.get(o)||0,u=c-l;Math.abs(u)>.001&&a.push({q:u,u:o})}return a}function ra(n){if(!n?.length)return"Équilibré";const e=n.filter(r=>r.q>0),t=n.filter(r=>r.q<0);if(e.length>0&&t.length>0){const r=e.map(s=>pn(s.q.toString(),s.u)).join(" et "),a=t.map(s=>pn(Math.abs(s.q).toString(),s.u)).join(" et ");return`${r} disponibles, ${a} manquant${t.length>1?"s":""}`}else return e.length>0?e.map(r=>"+"+pn(r.q.toString(),r.u)).join(" et ")+" disponibles":t.length>0?t.map(r=>pn(Math.abs(r.q).toString(),r.u)).join(" et ")+` manquant${t.length>1?"s":""}`:"Équilibré"}function ni(n,e){if(e.searchQuery.trim()){const t=e.searchQuery.toLowerCase();if(!n.productName.toLowerCase().includes(t))return!1}return!(e.selectedStores.length>0&&(!n.storeInfo?.storeName||!e.selectedStores.includes(n.storeInfo.storeName))||e.selectedWho.length>0&&(!n.who||!n.who.some(t=>e.selectedWho.includes(t)))||e.selectedProductTypes.length>0&&(!n.productType||!e.selectedProductTypes.includes(n.productType))||e.selectedTemperatures.length>0&&!(e.selectedTemperatures.includes("frais")&&n.pFrais||e.selectedTemperatures.includes("surgele")&&n.pSurgel))}function ed(n){return n.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const td=Object.freeze(Object.defineProperty({__proto__:null,aggregateByUnit:ta,calculateAndFormatMissing:$r,calculateGlobalTotal:na,calculateTotalQuantityArray:Er,formatSingleQuantity:pn,formatStockResult:ra,formatTotalQuantity:mt,generateRecipesWithDates:ti,hasConversions:ei,matchesFilters:ni,safeJsonParse:Lt,slugify:ed,subtractQuantities:rs,transformPurchasesToNumericQuantity:xr},Symbol.toStringTag,{value:"Module"}));function Ts(n){return{...n,products:n.products?.map(e=>typeof e=="string"?e:e.$id)||[],mainId:n.mainId}}function nd(n){const e=Lt(n.specs)??null,t=Er(xr(n.purchases??[]));let r=[];e?.quantity&&(r=[e.quantity]);const{numeric:a,display:s}=$r(r,t),o=Lt(n.stockReel)??null,c=mt(t),l=n.store?Lt(n.store):null,u=o?`${o.quantity} ${o.unit}`:c;return{$id:n.$id,$createdAt:n.$createdAt,$updatedAt:n.$updatedAt,productHugoUuid:n.productHugoUuid||"",productName:n.productName,productType:n.productType||"none",pFrais:e?.pFrais??!1,pSurgel:e?.pSurgel??!1,nbRecipes:0,totalAssiettes:0,isSynced:n.isSynced,mainId:n.mainId,totalNeededRaw:[],status:n.status,who:n.who,store:n.store,stockReel:n.stockReel,previousNames:n.previousNames,isMerged:n.isMerged,mergedFrom:n.mergedFrom,mergeDate:n.mergeDate,mergeReason:n.mergeReason,mergedInto:n.mergedInto,totalNeededOverride:n.totalNeededOverride,purchases:n.purchases,specs:n.specs,byDate:{},storeInfo:l,stockParsed:o,specsParsed:e,totalNeededArray:r,totalPurchasesArray:t,missingQuantityArray:a,stockOrTotalPurchases:u,displayTotalNeeded:mt(r),displayTotalPurchases:c,displayMissingQuantity:s,totalNeededOverrideParsed:Lt(n.totalNeededOverride),displayTotalOverride:(()=>{const f=Lt(n.totalNeededOverride);return f?mt([f.totalOverride]):""})()}}function Dr(n,e){const t=n.purchases??e.purchases,r=n.specs??e.specs,a=r?Lt(r):e.specsParsed,s=Er(xr(t??[])),o=mt(s);let c=e.totalNeededArray;!e.productHugoUuid&&a?.quantity&&(c=[a.quantity]);const{numeric:l,display:u}=$r(c,s),f=n.stockReel??e.stockReel,v=f?Lt(f):e.stockParsed,g=n.store??e.store,m=g?Lt(g):e.storeInfo,_=v?`${v.quantity} ${v.unit}`:o;return n.purchases===void 0&&e.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${e.purchases.length} purchases pour ${e.productName}`),{...e,$updatedAt:n.$updatedAt,productName:n.productName??e.productName,productType:n.productType??e.productType,isSynced:n.isSynced??e.isSynced,mainId:n.mainId??e.mainId,pFrais:a?.pFrais??e.pFrais,pSurgel:a?.pSurgel??e.pSurgel,status:n.status??e.status,who:n.who??e.who,store:g,stockReel:f,specs:r,purchases:t,previousNames:n.previousNames??e.previousNames,isMerged:n.isMerged??e.isMerged,mergedFrom:n.mergedFrom??e.mergedFrom,mergeDate:n.mergeDate??e.mergeDate,mergeReason:n.mergeReason??e.mergeReason,mergedInto:n.mergedInto??e.mergedInto,totalNeededOverride:n.totalNeededOverride??e.totalNeededOverride,storeInfo:m,stockParsed:v,specsParsed:a,totalNeededArray:c,totalPurchasesArray:s,missingQuantityArray:l,stockOrTotalPurchases:_,displayTotalPurchases:o,displayMissingQuantity:u,displayTotalNeeded:mt(c),totalNeededOverrideParsed:Lt(n.totalNeededOverride??e.totalNeededOverride),displayTotalOverride:(()=>{const w=Lt(n.totalNeededOverride??e.totalNeededOverride);return w?mt([w.totalOverride]):""})()}}class rd{#e=C(Ue([]));MAX_TOASTS=3;get toasts(){return[...i(this.#e)].sort((e,t)=>t.timestamp-e.timestamp)}create(e){const t=e.id||crypto.randomUUID(),r={id:t,state:e.state,message:e.message,timestamp:Date.now(),source:e.source||"user",timeoutId:void 0,details:e.details,actions:e.actions||[]};return this.#t(r),t}update(e,t){const r=i(this.#e).findIndex(s=>s.id===e);if(r===-1)return;const a=i(this.#e)[r];a.timeoutId&&clearTimeout(a.timeoutId),i(this.#e)[r]={...a,state:t.state||a.state,message:t.message||a.message,source:t.source||a.source,actions:t.actions||a.actions},this.#n(i(this.#e)[r])}async track(e,t){const r=this.create({id:t.id,state:"loading",message:t.loading,source:"user"});try{const a=await e;return this.update(r,{state:"success",message:t.success||"Opération réussie"}),a}catch(a){throw this.update(r,{state:"error",message:t.error||"Erreur lors de l'opération"}),a}}dismiss(e){const t=i(this.#e).findIndex(a=>a.id===e);if(t===-1)return;const r=i(this.#e)[t];r.timeoutId&&clearTimeout(r.timeoutId),i(this.#e).splice(t,1)}dismissAll(){i(this.#e).forEach(e=>{e.timeoutId&&clearTimeout(e.timeoutId)}),b(this.#e,[],!0)}#t(e){if(e.source==="user"){const t=i(this.#e).findIndex(r=>r.source==="user");t>=0?i(this.#e)[t]=e:i(this.#e).push(e)}else{const t=i(this.#e).filter(r=>r.source!=="user");if(t.length>=2){const r=t[0];this.dismiss(r.id)}i(this.#e).push(e)}i(this.#e).length>this.MAX_TOASTS&&i(this.#e).splice(0,i(this.#e).length-this.MAX_TOASTS),this.#n(e)}#n(e){if(e.state!=="success"&&e.state!=="info")return;const t=e.source==="realtime-other"?4e3:2e3;e.timeoutId=setTimeout(()=>{this.dismiss(e.id)},t)}success(e,t){return this.create({state:"success",message:e,details:t})}error(e,t){return this.create({state:"error",message:e,details:t})}warning(e,t){return this.create({state:"warning",message:e,source:t?.source||"system",details:t?.details,actions:t?.actions})}info(e,t){return this.create({state:"info",message:e,source:t?.source||"system",details:t?.details})}loading(e,t){return this.create({state:"loading",message:e,details:t})}}const Fe=new rd;function Sa(n,e,t,r){function a(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function c(f){try{u(r.next(f))}catch(v){o(v)}}function l(f){try{u(r.throw(f))}catch(v){o(v)}}function u(f){f.done?s(f.value):a(f.value).then(c,l)}u((r=r.apply(n,[])).next())})}function ad(n,e,t,r){if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(n):r?r.value:e.get(n)}class V{constructor(e,t,r){this.method=e,this.attribute=t,r!==void 0&&(Array.isArray(r)?this.values=r:this.values=[r])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}V.equal=(n,e)=>new V("equal",n,e).toString();V.notEqual=(n,e)=>new V("notEqual",n,e).toString();V.lessThan=(n,e)=>new V("lessThan",n,e).toString();V.lessThanEqual=(n,e)=>new V("lessThanEqual",n,e).toString();V.greaterThan=(n,e)=>new V("greaterThan",n,e).toString();V.greaterThanEqual=(n,e)=>new V("greaterThanEqual",n,e).toString();V.isNull=n=>new V("isNull",n).toString();V.isNotNull=n=>new V("isNotNull",n).toString();V.between=(n,e,t)=>new V("between",n,[e,t]).toString();V.startsWith=(n,e)=>new V("startsWith",n,e).toString();V.endsWith=(n,e)=>new V("endsWith",n,e).toString();V.select=n=>new V("select",void 0,n).toString();V.search=(n,e)=>new V("search",n,e).toString();V.orderDesc=n=>new V("orderDesc",n).toString();V.orderAsc=n=>new V("orderAsc",n).toString();V.orderRandom=()=>new V("orderRandom").toString();V.cursorAfter=n=>new V("cursorAfter",void 0,n).toString();V.cursorBefore=n=>new V("cursorBefore",void 0,n).toString();V.limit=n=>new V("limit",void 0,n).toString();V.offset=n=>new V("offset",void 0,n).toString();V.contains=(n,e)=>new V("contains",n,e).toString();V.notContains=(n,e)=>new V("notContains",n,e).toString();V.notSearch=(n,e)=>new V("notSearch",n,e).toString();V.notBetween=(n,e,t)=>new V("notBetween",n,[e,t]).toString();V.notStartsWith=(n,e)=>new V("notStartsWith",n,e).toString();V.notEndsWith=(n,e)=>new V("notEndsWith",n,e).toString();V.createdBefore=n=>V.lessThan("$createdAt",n);V.createdAfter=n=>V.greaterThan("$createdAt",n);V.createdBetween=(n,e)=>V.between("$createdAt",n,e);V.updatedBefore=n=>V.lessThan("$updatedAt",n);V.updatedAfter=n=>V.greaterThan("$updatedAt",n);V.updatedBetween=(n,e)=>V.between("$updatedAt",n,e);V.or=n=>new V("or",void 0,n.map(e=>JSON.parse(e))).toString();V.and=n=>new V("and",void 0,n.map(e=>JSON.parse(e))).toString();V.distanceEqual=(n,e,t,r=!0)=>new V("distanceEqual",n,[[e,t,r]]).toString();V.distanceNotEqual=(n,e,t,r=!0)=>new V("distanceNotEqual",n,[[e,t,r]]).toString();V.distanceGreaterThan=(n,e,t,r=!0)=>new V("distanceGreaterThan",n,[[e,t,r]]).toString();V.distanceLessThan=(n,e,t,r=!0)=>new V("distanceLessThan",n,[[e,t,r]]).toString();V.intersects=(n,e)=>new V("intersects",n,[e]).toString();V.notIntersects=(n,e)=>new V("notIntersects",n,[e]).toString();V.crosses=(n,e)=>new V("crosses",n,[e]).toString();V.notCrosses=(n,e)=>new V("notCrosses",n,[e]).toString();V.overlaps=(n,e)=>new V("overlaps",n,[e]).toString();V.notOverlaps=(n,e)=>new V("notOverlaps",n,[e]).toString();V.touches=(n,e)=>new V("touches",n,[e]).toString();V.notTouches=(n,e)=>new V("notTouches",n,[e]).toString();class M extends Error{constructor(e,t=0,r="",a=""){super(e),this.name="AppwriteException",this.message=e,this.code=t,this.type=r,this.response=a}}class Wt{constructor(){this.config={endpoint:"https://cloud.appwrite.io/v1",endpointRealtime:"",project:"",jwt:"",locale:"",session:"",devkey:""},this.headers={"x-sdk-name":"Web","x-sdk-platform":"client","x-sdk-language":"web","x-sdk-version":"21.4.0","X-Appwrite-Response-Format":"1.8.0"},this.realtime={socket:void 0,timeout:void 0,heartbeat:void 0,url:"",channels:new Set,subscriptions:new Map,subscriptionsCounter:0,reconnect:!0,reconnectAttempts:0,lastMessage:void 0,connect:()=>{clearTimeout(this.realtime.timeout),this.realtime.timeout=window?.setTimeout(()=>{this.realtime.createSocket()},50)},getTimeout:()=>{switch(!0){case this.realtime.reconnectAttempts<5:return 1e3;case this.realtime.reconnectAttempts<15:return 5e3;case this.realtime.reconnectAttempts<100:return 1e4;default:return 6e4}},createHeartbeat:()=>{this.realtime.heartbeat&&clearTimeout(this.realtime.heartbeat),this.realtime.heartbeat=window?.setInterval(()=>{var e;(e=this.realtime.socket)===null||e===void 0||e.send(JSON.stringify({type:"ping"}))},2e4)},createSocket:()=>{var e,t,r;if(this.realtime.channels.size<1){this.realtime.reconnect=!1,(e=this.realtime.socket)===null||e===void 0||e.close();return}const a=new URLSearchParams;this.config.project&&a.set("project",this.config.project),this.realtime.channels.forEach(o=>{a.append("channels[]",o)});const s=this.config.endpointRealtime+"/realtime?"+a.toString();(s!==this.realtime.url||!this.realtime.socket||((t=this.realtime.socket)===null||t===void 0?void 0:t.readyState)>WebSocket.OPEN)&&(this.realtime.socket&&((r=this.realtime.socket)===null||r===void 0?void 0:r.readyState)<WebSocket.CLOSING&&(this.realtime.reconnect=!1,this.realtime.socket.close()),this.realtime.url=s,this.realtime.socket=new WebSocket(s),this.realtime.socket.addEventListener("message",this.realtime.onMessage),this.realtime.socket.addEventListener("open",o=>{this.realtime.reconnectAttempts=0,this.realtime.createHeartbeat()}),this.realtime.socket.addEventListener("close",o=>{var c,l,u;if(!this.realtime.reconnect||((l=(c=this.realtime)===null||c===void 0?void 0:c.lastMessage)===null||l===void 0?void 0:l.type)==="error"&&((u=this.realtime)===null||u===void 0?void 0:u.lastMessage.data).code===1008){this.realtime.reconnect=!0;return}const f=this.realtime.getTimeout();console.error(`Realtime got disconnected. Reconnect will be attempted in ${f/1e3} seconds.`,o.reason),setTimeout(()=>{this.realtime.reconnectAttempts++,this.realtime.createSocket()},f)}))},onMessage:e=>{var t,r;try{const a=JSON.parse(e.data);switch(this.realtime.lastMessage=a,a.type){case"connected":let s=this.config.session;if(!s){const l=JSON.parse((t=window.localStorage.getItem("cookieFallback"))!==null&&t!==void 0?t:"{}");s=l?.[`a_session_${this.config.project}`]}const o=a.data;s&&!o.user&&((r=this.realtime.socket)===null||r===void 0||r.send(JSON.stringify({type:"authentication",data:{session:s}})));break;case"event":let c=a.data;if(c?.channels){if(!c.channels.some(u=>this.realtime.channels.has(u)))return;this.realtime.subscriptions.forEach(u=>{c.channels.some(f=>u.channels.includes(f))&&setTimeout(()=>u.callback(c))})}break;case"pong":break;case"error":throw a.data;default:break}}catch(a){console.error(a)}},cleanUp:e=>{this.realtime.channels.forEach(t=>{e.includes(t)&&(Array.from(this.realtime.subscriptions).some(([a,s])=>s.channels.includes(t))||this.realtime.channels.delete(t))})}}}setEndpoint(e){if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new M("Invalid endpoint URL: "+e);return this.config.endpoint=e,this.config.endpointRealtime=e.replace("https://","wss://").replace("http://","ws://"),this}setEndpointRealtime(e){if(!e.startsWith("ws://")&&!e.startsWith("wss://"))throw new M("Invalid realtime endpoint URL: "+e);return this.config.endpointRealtime=e,this}setProject(e){return this.headers["X-Appwrite-Project"]=e,this.config.project=e,this}setJWT(e){return this.headers["X-Appwrite-JWT"]=e,this.config.jwt=e,this}setLocale(e){return this.headers["X-Appwrite-Locale"]=e,this.config.locale=e,this}setSession(e){return this.headers["X-Appwrite-Session"]=e,this.config.session=e,this}setDevKey(e){return this.headers["X-Appwrite-Dev-Key"]=e,this.config.devkey=e,this}subscribe(e,t){let r=typeof e=="string"?[e]:e;r.forEach(s=>this.realtime.channels.add(s));const a=this.realtime.subscriptionsCounter++;return this.realtime.subscriptions.set(a,{channels:r,callback:t}),this.realtime.connect(),()=>{this.realtime.subscriptions.delete(a),this.realtime.cleanUp(r),this.realtime.connect()}}prepareRequest(e,t,r={},a={}){if(e=e.toUpperCase(),r=Object.assign({},this.headers,r),typeof window<"u"&&window.localStorage){const o=window.localStorage.getItem("cookieFallback");o&&(r["X-Fallback-Cookies"]=o)}let s={method:e,headers:r};if(r["X-Appwrite-Dev-Key"]===void 0&&(s.credentials="include"),e==="GET")for(const[o,c]of Object.entries(Wt.flatten(a)))t.searchParams.append(o,c);else switch(r["content-type"]){case"application/json":s.body=JSON.stringify(a);break;case"multipart/form-data":const o=new FormData;for(const[c,l]of Object.entries(a))if(l instanceof File)o.append(c,l,l.name);else if(Array.isArray(l))for(const u of l)o.append(`${c}[]`,u);else o.append(c,l);s.body=o,delete r["content-type"];break}return{uri:t.toString(),options:s}}chunkedUpload(e,t,r={},a={},s){var o;return Sa(this,void 0,void 0,function*(){const[c,l]=(o=Object.entries(a).find(([v,g])=>g instanceof File))!==null&&o!==void 0?o:[];if(!l||!c)throw new Error("File not found in payload");if(l.size<=Wt.CHUNK_SIZE)return yield this.call(e,t,r,a);let u=0,f=null;for(;u<l.size;){let v=u+Wt.CHUNK_SIZE;v>=l.size&&(v=l.size),r["content-range"]=`bytes ${u}-${v-1}/${l.size}`;const g=l.slice(u,v);let m=Object.assign({},a);m[c]=new File([g],l.name),f=yield this.call(e,t,r,m),s&&typeof s=="function"&&s({$id:f.$id,progress:Math.round(v/l.size*100),sizeUploaded:v,chunksTotal:Math.ceil(l.size/Wt.CHUNK_SIZE),chunksUploaded:Math.ceil(v/Wt.CHUNK_SIZE)}),f&&f.$id&&(r["x-appwrite-id"]=f.$id),u=v}return f})}ping(){return Sa(this,void 0,void 0,function*(){return this.call("GET",new URL(this.config.endpoint+"/ping"))})}call(e,t,r={},a={},s="json"){var o,c;return Sa(this,void 0,void 0,function*(){const{uri:l,options:u}=this.prepareRequest(e,t,r,a);let f=null;const v=yield fetch(l,u);if(v.type==="opaque")throw new M(`Invalid Origin. Register your new client (${window.location.host}) as a new Web platform on your project console dashboard`,403,"forbidden","");const g=v.headers.get("x-appwrite-warning");if(g&&g.split(";").forEach(_=>console.warn("Warning: "+_)),!((o=v.headers.get("content-type"))===null||o===void 0)&&o.includes("application/json")?f=yield v.json():s==="arrayBuffer"?f=yield v.arrayBuffer():f={message:yield v.text()},400<=v.status){let _="";throw!((c=v.headers.get("content-type"))===null||c===void 0)&&c.includes("application/json")||s==="arrayBuffer"?_=JSON.stringify(f):_=f?.message,new M(f?.message,v.status,f?.type,_)}const m=v.headers.get("X-Fallback-Cookies");return typeof window<"u"&&window.localStorage&&m&&(window.console.warn("Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."),window.localStorage.setItem("cookieFallback",m)),f})}static flatten(e,t=""){let r={};for(const[a,s]of Object.entries(e)){let o=t?t+"["+a+"]":a;Array.isArray(s)?r=Object.assign(Object.assign({},r),Wt.flatten(s,o)):r[o]=s}return r}}Wt.CHUNK_SIZE=1024*1024*5;class br{constructor(e){this.client=e}static flatten(e,t=""){let r={};for(const[a,s]of Object.entries(e)){let o=t?t+"["+a+"]":a;Array.isArray(s)?r=Object.assign(Object.assign({},r),br.flatten(s,o)):r[o]=s}return r}}br.CHUNK_SIZE=5*1024*1024;class sd{constructor(e){this.client=e}get(){const e="/account",t={},r=new URL(this.client.config.endpoint+e),a={};return this.client.call("get",r,a,t)}create(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={userId:e,email:t[0],password:t[1],name:t[2]};const a=r.userId,s=r.email,o=r.password,c=r.name;if(typeof a>"u")throw new M('Missing required parameter: "userId"');if(typeof s>"u")throw new M('Missing required parameter: "email"');if(typeof o>"u")throw new M('Missing required parameter: "password"');const l="/account",u={};typeof a<"u"&&(u.userId=a),typeof s<"u"&&(u.email=s),typeof o<"u"&&(u.password=o),typeof c<"u"&&(u.name=c);const f=new URL(this.client.config.endpoint+l),v={"content-type":"application/json"};return this.client.call("post",f,v,u)}updateEmail(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={email:e,password:t[0]};const a=r.email,s=r.password;if(typeof a>"u")throw new M('Missing required parameter: "email"');if(typeof s>"u")throw new M('Missing required parameter: "password"');const o="/account/email",c={};typeof a<"u"&&(c.email=a),typeof s<"u"&&(c.password=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("patch",l,u,c)}listIdentities(e,...t){let r;!e||e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={queries:e,total:t[0]};const a=r.queries,s=r.total,o="/account/identities",c={};typeof a<"u"&&(c.queries=a),typeof s<"u"&&(c.total=s);const l=new URL(this.client.config.endpoint+o),u={};return this.client.call("get",l,u,c)}deleteIdentity(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={identityId:e};const r=t.identityId;if(typeof r>"u")throw new M('Missing required parameter: "identityId"');const a="/account/identities/{identityId}".replace("{identityId}",r),s={},o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("delete",o,c,s)}createJWT(){const e="/account/jwts",t={},r=new URL(this.client.config.endpoint+e),a={"content-type":"application/json"};return this.client.call("post",r,a,t)}listLogs(e,...t){let r;!e||e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={queries:e,total:t[0]};const a=r.queries,s=r.total,o="/account/logs",c={};typeof a<"u"&&(c.queries=a),typeof s<"u"&&(c.total=s);const l=new URL(this.client.config.endpoint+o),u={};return this.client.call("get",l,u,c)}updateMFA(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={mfa:e};const r=t.mfa;if(typeof r>"u")throw new M('Missing required parameter: "mfa"');const a="/account/mfa",s={};typeof r<"u"&&(s.mfa=r);const o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("patch",o,c,s)}createMfaAuthenticator(e){let t;e&&typeof e=="object"&&!Array.isArray(e)&&"type"in e?t=e||{}:t={type:e};const r=t.type;if(typeof r>"u")throw new M('Missing required parameter: "type"');const a="/account/mfa/authenticators/{type}".replace("{type}",r),s={},o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("post",o,c,s)}createMFAAuthenticator(e){let t;e&&typeof e=="object"&&!Array.isArray(e)&&"type"in e?t=e||{}:t={type:e};const r=t.type;if(typeof r>"u")throw new M('Missing required parameter: "type"');const a="/account/mfa/authenticators/{type}".replace("{type}",r),s={},o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("post",o,c,s)}updateMfaAuthenticator(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)&&"type"in e?r=e||{}:r={type:e,otp:t[0]};const a=r.type,s=r.otp;if(typeof a>"u")throw new M('Missing required parameter: "type"');if(typeof s>"u")throw new M('Missing required parameter: "otp"');const o="/account/mfa/authenticators/{type}".replace("{type}",a),c={};typeof s<"u"&&(c.otp=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("put",l,u,c)}updateMFAAuthenticator(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)&&"type"in e?r=e||{}:r={type:e,otp:t[0]};const a=r.type,s=r.otp;if(typeof a>"u")throw new M('Missing required parameter: "type"');if(typeof s>"u")throw new M('Missing required parameter: "otp"');const o="/account/mfa/authenticators/{type}".replace("{type}",a),c={};typeof s<"u"&&(c.otp=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("put",l,u,c)}deleteMfaAuthenticator(e){let t;e&&typeof e=="object"&&!Array.isArray(e)&&"type"in e?t=e||{}:t={type:e};const r=t.type;if(typeof r>"u")throw new M('Missing required parameter: "type"');const a="/account/mfa/authenticators/{type}".replace("{type}",r),s={},o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("delete",o,c,s)}deleteMFAAuthenticator(e){let t;e&&typeof e=="object"&&!Array.isArray(e)&&"type"in e?t=e||{}:t={type:e};const r=t.type;if(typeof r>"u")throw new M('Missing required parameter: "type"');const a="/account/mfa/authenticators/{type}".replace("{type}",r),s={},o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("delete",o,c,s)}createMfaChallenge(e){let t;e&&typeof e=="object"&&!Array.isArray(e)&&"factor"in e?t=e||{}:t={factor:e};const r=t.factor;if(typeof r>"u")throw new M('Missing required parameter: "factor"');const a="/account/mfa/challenge",s={};typeof r<"u"&&(s.factor=r);const o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("post",o,c,s)}createMFAChallenge(e){let t;e&&typeof e=="object"&&!Array.isArray(e)&&"factor"in e?t=e||{}:t={factor:e};const r=t.factor;if(typeof r>"u")throw new M('Missing required parameter: "factor"');const a="/account/mfa/challenge",s={};typeof r<"u"&&(s.factor=r);const o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("post",o,c,s)}updateMfaChallenge(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={challengeId:e,otp:t[0]};const a=r.challengeId,s=r.otp;if(typeof a>"u")throw new M('Missing required parameter: "challengeId"');if(typeof s>"u")throw new M('Missing required parameter: "otp"');const o="/account/mfa/challenge",c={};typeof a<"u"&&(c.challengeId=a),typeof s<"u"&&(c.otp=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("put",l,u,c)}updateMFAChallenge(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={challengeId:e,otp:t[0]};const a=r.challengeId,s=r.otp;if(typeof a>"u")throw new M('Missing required parameter: "challengeId"');if(typeof s>"u")throw new M('Missing required parameter: "otp"');const o="/account/mfa/challenge",c={};typeof a<"u"&&(c.challengeId=a),typeof s<"u"&&(c.otp=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("put",l,u,c)}listMfaFactors(){const e="/account/mfa/factors",t={},r=new URL(this.client.config.endpoint+e),a={};return this.client.call("get",r,a,t)}listMFAFactors(){const e="/account/mfa/factors",t={},r=new URL(this.client.config.endpoint+e),a={};return this.client.call("get",r,a,t)}getMfaRecoveryCodes(){const e="/account/mfa/recovery-codes",t={},r=new URL(this.client.config.endpoint+e),a={};return this.client.call("get",r,a,t)}getMFARecoveryCodes(){const e="/account/mfa/recovery-codes",t={},r=new URL(this.client.config.endpoint+e),a={};return this.client.call("get",r,a,t)}createMfaRecoveryCodes(){const e="/account/mfa/recovery-codes",t={},r=new URL(this.client.config.endpoint+e),a={"content-type":"application/json"};return this.client.call("post",r,a,t)}createMFARecoveryCodes(){const e="/account/mfa/recovery-codes",t={},r=new URL(this.client.config.endpoint+e),a={"content-type":"application/json"};return this.client.call("post",r,a,t)}updateMfaRecoveryCodes(){const e="/account/mfa/recovery-codes",t={},r=new URL(this.client.config.endpoint+e),a={"content-type":"application/json"};return this.client.call("patch",r,a,t)}updateMFARecoveryCodes(){const e="/account/mfa/recovery-codes",t={},r=new URL(this.client.config.endpoint+e),a={"content-type":"application/json"};return this.client.call("patch",r,a,t)}updateName(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={name:e};const r=t.name;if(typeof r>"u")throw new M('Missing required parameter: "name"');const a="/account/name",s={};typeof r<"u"&&(s.name=r);const o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("patch",o,c,s)}updatePassword(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={password:e,oldPassword:t[0]};const a=r.password,s=r.oldPassword;if(typeof a>"u")throw new M('Missing required parameter: "password"');const o="/account/password",c={};typeof a<"u"&&(c.password=a),typeof s<"u"&&(c.oldPassword=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("patch",l,u,c)}updatePhone(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={phone:e,password:t[0]};const a=r.phone,s=r.password;if(typeof a>"u")throw new M('Missing required parameter: "phone"');if(typeof s>"u")throw new M('Missing required parameter: "password"');const o="/account/phone",c={};typeof a<"u"&&(c.phone=a),typeof s<"u"&&(c.password=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("patch",l,u,c)}getPrefs(){const e="/account/prefs",t={},r=new URL(this.client.config.endpoint+e),a={};return this.client.call("get",r,a,t)}updatePrefs(e){let t;e&&typeof e=="object"&&!Array.isArray(e)&&"prefs"in e?t=e||{}:t={prefs:e};const r=t.prefs;if(typeof r>"u")throw new M('Missing required parameter: "prefs"');const a="/account/prefs",s={};typeof r<"u"&&(s.prefs=r);const o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("patch",o,c,s)}createRecovery(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={email:e,url:t[0]};const a=r.email,s=r.url;if(typeof a>"u")throw new M('Missing required parameter: "email"');if(typeof s>"u")throw new M('Missing required parameter: "url"');const o="/account/recovery",c={};typeof a<"u"&&(c.email=a),typeof s<"u"&&(c.url=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("post",l,u,c)}updateRecovery(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={userId:e,secret:t[0],password:t[1]};const a=r.userId,s=r.secret,o=r.password;if(typeof a>"u")throw new M('Missing required parameter: "userId"');if(typeof s>"u")throw new M('Missing required parameter: "secret"');if(typeof o>"u")throw new M('Missing required parameter: "password"');const c="/account/recovery",l={};typeof a<"u"&&(l.userId=a),typeof s<"u"&&(l.secret=s),typeof o<"u"&&(l.password=o);const u=new URL(this.client.config.endpoint+c),f={"content-type":"application/json"};return this.client.call("put",u,f,l)}listSessions(){const e="/account/sessions",t={},r=new URL(this.client.config.endpoint+e),a={};return this.client.call("get",r,a,t)}deleteSessions(){const e="/account/sessions",t={},r=new URL(this.client.config.endpoint+e),a={"content-type":"application/json"};return this.client.call("delete",r,a,t)}createAnonymousSession(){const e="/account/sessions/anonymous",t={},r=new URL(this.client.config.endpoint+e),a={"content-type":"application/json"};return this.client.call("post",r,a,t)}createEmailPasswordSession(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={email:e,password:t[0]};const a=r.email,s=r.password;if(typeof a>"u")throw new M('Missing required parameter: "email"');if(typeof s>"u")throw new M('Missing required parameter: "password"');const o="/account/sessions/email",c={};typeof a<"u"&&(c.email=a),typeof s<"u"&&(c.password=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("post",l,u,c)}updateMagicURLSession(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={userId:e,secret:t[0]};const a=r.userId,s=r.secret;if(typeof a>"u")throw new M('Missing required parameter: "userId"');if(typeof s>"u")throw new M('Missing required parameter: "secret"');const o="/account/sessions/magic-url",c={};typeof a<"u"&&(c.userId=a),typeof s<"u"&&(c.secret=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("put",l,u,c)}createOAuth2Session(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)&&"provider"in e?r=e||{}:r={provider:e,success:t[0],failure:t[1],scopes:t[2]};const a=r.provider,s=r.success,o=r.failure,c=r.scopes;if(typeof a>"u")throw new M('Missing required parameter: "provider"');const l="/account/sessions/oauth2/{provider}".replace("{provider}",a),u={};typeof s<"u"&&(u.success=s),typeof o<"u"&&(u.failure=o),typeof c<"u"&&(u.scopes=c);const f=new URL(this.client.config.endpoint+l);u.project=this.client.config.project;for(const[v,g]of Object.entries(br.flatten(u)))f.searchParams.append(v,g);if(typeof window<"u"&&window?.location){window.location.href=f.toString();return}else return f.toString()}updatePhoneSession(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={userId:e,secret:t[0]};const a=r.userId,s=r.secret;if(typeof a>"u")throw new M('Missing required parameter: "userId"');if(typeof s>"u")throw new M('Missing required parameter: "secret"');const o="/account/sessions/phone",c={};typeof a<"u"&&(c.userId=a),typeof s<"u"&&(c.secret=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("put",l,u,c)}createSession(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={userId:e,secret:t[0]};const a=r.userId,s=r.secret;if(typeof a>"u")throw new M('Missing required parameter: "userId"');if(typeof s>"u")throw new M('Missing required parameter: "secret"');const o="/account/sessions/token",c={};typeof a<"u"&&(c.userId=a),typeof s<"u"&&(c.secret=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("post",l,u,c)}getSession(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={sessionId:e};const r=t.sessionId;if(typeof r>"u")throw new M('Missing required parameter: "sessionId"');const a="/account/sessions/{sessionId}".replace("{sessionId}",r),s={},o=new URL(this.client.config.endpoint+a),c={};return this.client.call("get",o,c,s)}updateSession(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={sessionId:e};const r=t.sessionId;if(typeof r>"u")throw new M('Missing required parameter: "sessionId"');const a="/account/sessions/{sessionId}".replace("{sessionId}",r),s={},o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("patch",o,c,s)}deleteSession(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={sessionId:e};const r=t.sessionId;if(typeof r>"u")throw new M('Missing required parameter: "sessionId"');const a="/account/sessions/{sessionId}".replace("{sessionId}",r),s={},o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("delete",o,c,s)}updateStatus(){const e="/account/status",t={},r=new URL(this.client.config.endpoint+e),a={"content-type":"application/json"};return this.client.call("patch",r,a,t)}createPushTarget(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={targetId:e,identifier:t[0],providerId:t[1]};const a=r.targetId,s=r.identifier,o=r.providerId;if(typeof a>"u")throw new M('Missing required parameter: "targetId"');if(typeof s>"u")throw new M('Missing required parameter: "identifier"');const c="/account/targets/push",l={};typeof a<"u"&&(l.targetId=a),typeof s<"u"&&(l.identifier=s),typeof o<"u"&&(l.providerId=o);const u=new URL(this.client.config.endpoint+c),f={"content-type":"application/json"};return this.client.call("post",u,f,l)}updatePushTarget(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={targetId:e,identifier:t[0]};const a=r.targetId,s=r.identifier;if(typeof a>"u")throw new M('Missing required parameter: "targetId"');if(typeof s>"u")throw new M('Missing required parameter: "identifier"');const o="/account/targets/{targetId}/push".replace("{targetId}",a),c={};typeof s<"u"&&(c.identifier=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("put",l,u,c)}deletePushTarget(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={targetId:e};const r=t.targetId;if(typeof r>"u")throw new M('Missing required parameter: "targetId"');const a="/account/targets/{targetId}/push".replace("{targetId}",r),s={},o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("delete",o,c,s)}createEmailToken(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={userId:e,email:t[0],phrase:t[1]};const a=r.userId,s=r.email,o=r.phrase;if(typeof a>"u")throw new M('Missing required parameter: "userId"');if(typeof s>"u")throw new M('Missing required parameter: "email"');const c="/account/tokens/email",l={};typeof a<"u"&&(l.userId=a),typeof s<"u"&&(l.email=s),typeof o<"u"&&(l.phrase=o);const u=new URL(this.client.config.endpoint+c),f={"content-type":"application/json"};return this.client.call("post",u,f,l)}createMagicURLToken(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={userId:e,email:t[0],url:t[1],phrase:t[2]};const a=r.userId,s=r.email,o=r.url,c=r.phrase;if(typeof a>"u")throw new M('Missing required parameter: "userId"');if(typeof s>"u")throw new M('Missing required parameter: "email"');const l="/account/tokens/magic-url",u={};typeof a<"u"&&(u.userId=a),typeof s<"u"&&(u.email=s),typeof o<"u"&&(u.url=o),typeof c<"u"&&(u.phrase=c);const f=new URL(this.client.config.endpoint+l),v={"content-type":"application/json"};return this.client.call("post",f,v,u)}createOAuth2Token(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)&&"provider"in e?r=e||{}:r={provider:e,success:t[0],failure:t[1],scopes:t[2]};const a=r.provider,s=r.success,o=r.failure,c=r.scopes;if(typeof a>"u")throw new M('Missing required parameter: "provider"');const l="/account/tokens/oauth2/{provider}".replace("{provider}",a),u={};typeof s<"u"&&(u.success=s),typeof o<"u"&&(u.failure=o),typeof c<"u"&&(u.scopes=c);const f=new URL(this.client.config.endpoint+l);u.project=this.client.config.project;for(const[v,g]of Object.entries(br.flatten(u)))f.searchParams.append(v,g);if(typeof window<"u"&&window?.location){window.location.href=f.toString();return}else return f.toString()}createPhoneToken(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={userId:e,phone:t[0]};const a=r.userId,s=r.phone;if(typeof a>"u")throw new M('Missing required parameter: "userId"');if(typeof s>"u")throw new M('Missing required parameter: "phone"');const o="/account/tokens/phone",c={};typeof a<"u"&&(c.userId=a),typeof s<"u"&&(c.phone=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("post",l,u,c)}createEmailVerification(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={url:e};const r=t.url;if(typeof r>"u")throw new M('Missing required parameter: "url"');const a="/account/verifications/email",s={};typeof r<"u"&&(s.url=r);const o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("post",o,c,s)}createVerification(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={url:e};const r=t.url;if(typeof r>"u")throw new M('Missing required parameter: "url"');const a="/account/verifications/email",s={};typeof r<"u"&&(s.url=r);const o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("post",o,c,s)}updateEmailVerification(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={userId:e,secret:t[0]};const a=r.userId,s=r.secret;if(typeof a>"u")throw new M('Missing required parameter: "userId"');if(typeof s>"u")throw new M('Missing required parameter: "secret"');const o="/account/verifications/email",c={};typeof a<"u"&&(c.userId=a),typeof s<"u"&&(c.secret=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("put",l,u,c)}updateVerification(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={userId:e,secret:t[0]};const a=r.userId,s=r.secret;if(typeof a>"u")throw new M('Missing required parameter: "userId"');if(typeof s>"u")throw new M('Missing required parameter: "secret"');const o="/account/verifications/email",c={};typeof a<"u"&&(c.userId=a),typeof s<"u"&&(c.secret=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("put",l,u,c)}createPhoneVerification(){const e="/account/verifications/phone",t={},r=new URL(this.client.config.endpoint+e),a={"content-type":"application/json"};return this.client.call("post",r,a,t)}updatePhoneVerification(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={userId:e,secret:t[0]};const a=r.userId,s=r.secret;if(typeof a>"u")throw new M('Missing required parameter: "userId"');if(typeof s>"u")throw new M('Missing required parameter: "secret"');const o="/account/verifications/phone",c={};typeof a<"u"&&(c.userId=a),typeof s<"u"&&(c.secret=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("put",l,u,c)}}class od{constructor(e){this.client=e}listTransactions(e){let t;!e||e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={queries:e};const r=t.queries,a="/databases/transactions",s={};typeof r<"u"&&(s.queries=r);const o=new URL(this.client.config.endpoint+a),c={};return this.client.call("get",o,c,s)}createTransaction(e){let t;!e||e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={ttl:e};const r=t.ttl,a="/databases/transactions",s={};typeof r<"u"&&(s.ttl=r);const o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("post",o,c,s)}getTransaction(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={transactionId:e};const r=t.transactionId;if(typeof r>"u")throw new M('Missing required parameter: "transactionId"');const a="/databases/transactions/{transactionId}".replace("{transactionId}",r),s={},o=new URL(this.client.config.endpoint+a),c={};return this.client.call("get",o,c,s)}updateTransaction(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={transactionId:e,commit:t[0],rollback:t[1]};const a=r.transactionId,s=r.commit,o=r.rollback;if(typeof a>"u")throw new M('Missing required parameter: "transactionId"');const c="/databases/transactions/{transactionId}".replace("{transactionId}",a),l={};typeof s<"u"&&(l.commit=s),typeof o<"u"&&(l.rollback=o);const u=new URL(this.client.config.endpoint+c),f={"content-type":"application/json"};return this.client.call("patch",u,f,l)}deleteTransaction(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={transactionId:e};const r=t.transactionId;if(typeof r>"u")throw new M('Missing required parameter: "transactionId"');const a="/databases/transactions/{transactionId}".replace("{transactionId}",r),s={},o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("delete",o,c,s)}createOperations(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={transactionId:e,operations:t[0]};const a=r.transactionId,s=r.operations;if(typeof a>"u")throw new M('Missing required parameter: "transactionId"');const o="/databases/transactions/{transactionId}/operations".replace("{transactionId}",a),c={};typeof s<"u"&&(c.operations=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("post",l,u,c)}listDocuments(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,collectionId:t[0],queries:t[1],transactionId:t[2],total:t[3]};const a=r.databaseId,s=r.collectionId,o=r.queries,c=r.transactionId,l=r.total;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "collectionId"');const u="/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}",a).replace("{collectionId}",s),f={};typeof o<"u"&&(f.queries=o),typeof c<"u"&&(f.transactionId=c),typeof l<"u"&&(f.total=l);const v=new URL(this.client.config.endpoint+u),g={};return this.client.call("get",v,g,f)}createDocument(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,collectionId:t[0],documentId:t[1],data:t[2],permissions:t[3],transactionId:t[4]};const a=r.databaseId,s=r.collectionId,o=r.documentId,c=r.data,l=r.permissions,u=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "collectionId"');if(typeof o>"u")throw new M('Missing required parameter: "documentId"');if(typeof c>"u")throw new M('Missing required parameter: "data"');const f="/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}",a).replace("{collectionId}",s),v={};typeof o<"u"&&(v.documentId=o),typeof c<"u"&&(v.data=c),typeof l<"u"&&(v.permissions=l),typeof u<"u"&&(v.transactionId=u);const g=new URL(this.client.config.endpoint+f),m={"content-type":"application/json"};return this.client.call("post",g,m,v)}getDocument(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,collectionId:t[0],documentId:t[1],queries:t[2],transactionId:t[3]};const a=r.databaseId,s=r.collectionId,o=r.documentId,c=r.queries,l=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "collectionId"');if(typeof o>"u")throw new M('Missing required parameter: "documentId"');const u="/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}",a).replace("{collectionId}",s).replace("{documentId}",o),f={};typeof c<"u"&&(f.queries=c),typeof l<"u"&&(f.transactionId=l);const v=new URL(this.client.config.endpoint+u),g={};return this.client.call("get",v,g,f)}upsertDocument(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,collectionId:t[0],documentId:t[1],data:t[2],permissions:t[3],transactionId:t[4]};const a=r.databaseId,s=r.collectionId,o=r.documentId,c=r.data,l=r.permissions,u=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "collectionId"');if(typeof o>"u")throw new M('Missing required parameter: "documentId"');if(typeof c>"u")throw new M('Missing required parameter: "data"');const f="/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}",a).replace("{collectionId}",s).replace("{documentId}",o),v={};typeof c<"u"&&(v.data=c),typeof l<"u"&&(v.permissions=l),typeof u<"u"&&(v.transactionId=u);const g=new URL(this.client.config.endpoint+f),m={"content-type":"application/json"};return this.client.call("put",g,m,v)}updateDocument(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,collectionId:t[0],documentId:t[1],data:t[2],permissions:t[3],transactionId:t[4]};const a=r.databaseId,s=r.collectionId,o=r.documentId,c=r.data,l=r.permissions,u=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "collectionId"');if(typeof o>"u")throw new M('Missing required parameter: "documentId"');const f="/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}",a).replace("{collectionId}",s).replace("{documentId}",o),v={};typeof c<"u"&&(v.data=c),typeof l<"u"&&(v.permissions=l),typeof u<"u"&&(v.transactionId=u);const g=new URL(this.client.config.endpoint+f),m={"content-type":"application/json"};return this.client.call("patch",g,m,v)}deleteDocument(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,collectionId:t[0],documentId:t[1],transactionId:t[2]};const a=r.databaseId,s=r.collectionId,o=r.documentId,c=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "collectionId"');if(typeof o>"u")throw new M('Missing required parameter: "documentId"');const l="/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}",a).replace("{collectionId}",s).replace("{documentId}",o),u={};typeof c<"u"&&(u.transactionId=c);const f=new URL(this.client.config.endpoint+l),v={"content-type":"application/json"};return this.client.call("delete",f,v,u)}decrementDocumentAttribute(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,collectionId:t[0],documentId:t[1],attribute:t[2],value:t[3],min:t[4],transactionId:t[5]};const a=r.databaseId,s=r.collectionId,o=r.documentId,c=r.attribute,l=r.value,u=r.min,f=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "collectionId"');if(typeof o>"u")throw new M('Missing required parameter: "documentId"');if(typeof c>"u")throw new M('Missing required parameter: "attribute"');const v="/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/decrement".replace("{databaseId}",a).replace("{collectionId}",s).replace("{documentId}",o).replace("{attribute}",c),g={};typeof l<"u"&&(g.value=l),typeof u<"u"&&(g.min=u),typeof f<"u"&&(g.transactionId=f);const m=new URL(this.client.config.endpoint+v),_={"content-type":"application/json"};return this.client.call("patch",m,_,g)}incrementDocumentAttribute(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,collectionId:t[0],documentId:t[1],attribute:t[2],value:t[3],max:t[4],transactionId:t[5]};const a=r.databaseId,s=r.collectionId,o=r.documentId,c=r.attribute,l=r.value,u=r.max,f=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "collectionId"');if(typeof o>"u")throw new M('Missing required parameter: "documentId"');if(typeof c>"u")throw new M('Missing required parameter: "attribute"');const v="/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/increment".replace("{databaseId}",a).replace("{collectionId}",s).replace("{documentId}",o).replace("{attribute}",c),g={};typeof l<"u"&&(g.value=l),typeof u<"u"&&(g.max=u),typeof f<"u"&&(g.transactionId=f);const m=new URL(this.client.config.endpoint+v),_={"content-type":"application/json"};return this.client.call("patch",m,_,g)}}class id{constructor(e){this.client=e}listExecutions(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={functionId:e,queries:t[0],total:t[1]};const a=r.functionId,s=r.queries,o=r.total;if(typeof a>"u")throw new M('Missing required parameter: "functionId"');const c="/functions/{functionId}/executions".replace("{functionId}",a),l={};typeof s<"u"&&(l.queries=s),typeof o<"u"&&(l.total=o);const u=new URL(this.client.config.endpoint+c),f={};return this.client.call("get",u,f,l)}createExecution(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={functionId:e,body:t[0],async:t[1],xpath:t[2],method:t[3],headers:t[4],scheduledAt:t[5]};const a=r.functionId,s=r.body,o=r.async,c=r.xpath,l=r.method,u=r.headers,f=r.scheduledAt;if(typeof a>"u")throw new M('Missing required parameter: "functionId"');const v="/functions/{functionId}/executions".replace("{functionId}",a),g={};typeof s<"u"&&(g.body=s),typeof o<"u"&&(g.async=o),typeof c<"u"&&(g.path=c),typeof l<"u"&&(g.method=l),typeof u<"u"&&(g.headers=u),typeof f<"u"&&(g.scheduledAt=f);const m=new URL(this.client.config.endpoint+v),_={"content-type":"application/json"};return this.client.call("post",m,_,g)}getExecution(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={functionId:e,executionId:t[0]};const a=r.functionId,s=r.executionId;if(typeof a>"u")throw new M('Missing required parameter: "functionId"');if(typeof s>"u")throw new M('Missing required parameter: "executionId"');const o="/functions/{functionId}/executions/{executionId}".replace("{functionId}",a).replace("{executionId}",s),c={},l=new URL(this.client.config.endpoint+o),u={};return this.client.call("get",l,u,c)}}class cd{constructor(e){this.client=e}listTransactions(e){let t;!e||e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={queries:e};const r=t.queries,a="/tablesdb/transactions",s={};typeof r<"u"&&(s.queries=r);const o=new URL(this.client.config.endpoint+a),c={};return this.client.call("get",o,c,s)}createTransaction(e){let t;!e||e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={ttl:e};const r=t.ttl,a="/tablesdb/transactions",s={};typeof r<"u"&&(s.ttl=r);const o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("post",o,c,s)}getTransaction(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={transactionId:e};const r=t.transactionId;if(typeof r>"u")throw new M('Missing required parameter: "transactionId"');const a="/tablesdb/transactions/{transactionId}".replace("{transactionId}",r),s={},o=new URL(this.client.config.endpoint+a),c={};return this.client.call("get",o,c,s)}updateTransaction(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={transactionId:e,commit:t[0],rollback:t[1]};const a=r.transactionId,s=r.commit,o=r.rollback;if(typeof a>"u")throw new M('Missing required parameter: "transactionId"');const c="/tablesdb/transactions/{transactionId}".replace("{transactionId}",a),l={};typeof s<"u"&&(l.commit=s),typeof o<"u"&&(l.rollback=o);const u=new URL(this.client.config.endpoint+c),f={"content-type":"application/json"};return this.client.call("patch",u,f,l)}deleteTransaction(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={transactionId:e};const r=t.transactionId;if(typeof r>"u")throw new M('Missing required parameter: "transactionId"');const a="/tablesdb/transactions/{transactionId}".replace("{transactionId}",r),s={},o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("delete",o,c,s)}createOperations(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={transactionId:e,operations:t[0]};const a=r.transactionId,s=r.operations;if(typeof a>"u")throw new M('Missing required parameter: "transactionId"');const o="/tablesdb/transactions/{transactionId}/operations".replace("{transactionId}",a),c={};typeof s<"u"&&(c.operations=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("post",l,u,c)}listRows(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,tableId:t[0],queries:t[1],transactionId:t[2],total:t[3]};const a=r.databaseId,s=r.tableId,o=r.queries,c=r.transactionId,l=r.total;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "tableId"');const u="/tablesdb/{databaseId}/tables/{tableId}/rows".replace("{databaseId}",a).replace("{tableId}",s),f={};typeof o<"u"&&(f.queries=o),typeof c<"u"&&(f.transactionId=c),typeof l<"u"&&(f.total=l);const v=new URL(this.client.config.endpoint+u),g={};return this.client.call("get",v,g,f)}createRow(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,tableId:t[0],rowId:t[1],data:t[2],permissions:t[3],transactionId:t[4]};const a=r.databaseId,s=r.tableId,o=r.rowId,c=r.data,l=r.permissions,u=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "tableId"');if(typeof o>"u")throw new M('Missing required parameter: "rowId"');if(typeof c>"u")throw new M('Missing required parameter: "data"');const f="/tablesdb/{databaseId}/tables/{tableId}/rows".replace("{databaseId}",a).replace("{tableId}",s),v={};typeof o<"u"&&(v.rowId=o),typeof c<"u"&&(v.data=c),typeof l<"u"&&(v.permissions=l),typeof u<"u"&&(v.transactionId=u);const g=new URL(this.client.config.endpoint+f),m={"content-type":"application/json"};return this.client.call("post",g,m,v)}getRow(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,tableId:t[0],rowId:t[1],queries:t[2],transactionId:t[3]};const a=r.databaseId,s=r.tableId,o=r.rowId,c=r.queries,l=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "tableId"');if(typeof o>"u")throw new M('Missing required parameter: "rowId"');const u="/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}".replace("{databaseId}",a).replace("{tableId}",s).replace("{rowId}",o),f={};typeof c<"u"&&(f.queries=c),typeof l<"u"&&(f.transactionId=l);const v=new URL(this.client.config.endpoint+u),g={};return this.client.call("get",v,g,f)}upsertRow(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,tableId:t[0],rowId:t[1],data:t[2],permissions:t[3],transactionId:t[4]};const a=r.databaseId,s=r.tableId,o=r.rowId,c=r.data,l=r.permissions,u=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "tableId"');if(typeof o>"u")throw new M('Missing required parameter: "rowId"');const f="/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}".replace("{databaseId}",a).replace("{tableId}",s).replace("{rowId}",o),v={};typeof c<"u"&&(v.data=c),typeof l<"u"&&(v.permissions=l),typeof u<"u"&&(v.transactionId=u);const g=new URL(this.client.config.endpoint+f),m={"content-type":"application/json"};return this.client.call("put",g,m,v)}updateRow(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,tableId:t[0],rowId:t[1],data:t[2],permissions:t[3],transactionId:t[4]};const a=r.databaseId,s=r.tableId,o=r.rowId,c=r.data,l=r.permissions,u=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "tableId"');if(typeof o>"u")throw new M('Missing required parameter: "rowId"');const f="/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}".replace("{databaseId}",a).replace("{tableId}",s).replace("{rowId}",o),v={};typeof c<"u"&&(v.data=c),typeof l<"u"&&(v.permissions=l),typeof u<"u"&&(v.transactionId=u);const g=new URL(this.client.config.endpoint+f),m={"content-type":"application/json"};return this.client.call("patch",g,m,v)}deleteRow(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,tableId:t[0],rowId:t[1],transactionId:t[2]};const a=r.databaseId,s=r.tableId,o=r.rowId,c=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "tableId"');if(typeof o>"u")throw new M('Missing required parameter: "rowId"');const l="/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}".replace("{databaseId}",a).replace("{tableId}",s).replace("{rowId}",o),u={};typeof c<"u"&&(u.transactionId=c);const f=new URL(this.client.config.endpoint+l),v={"content-type":"application/json"};return this.client.call("delete",f,v,u)}decrementRowColumn(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,tableId:t[0],rowId:t[1],column:t[2],value:t[3],min:t[4],transactionId:t[5]};const a=r.databaseId,s=r.tableId,o=r.rowId,c=r.column,l=r.value,u=r.min,f=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "tableId"');if(typeof o>"u")throw new M('Missing required parameter: "rowId"');if(typeof c>"u")throw new M('Missing required parameter: "column"');const v="/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/decrement".replace("{databaseId}",a).replace("{tableId}",s).replace("{rowId}",o).replace("{column}",c),g={};typeof l<"u"&&(g.value=l),typeof u<"u"&&(g.min=u),typeof f<"u"&&(g.transactionId=f);const m=new URL(this.client.config.endpoint+v),_={"content-type":"application/json"};return this.client.call("patch",m,_,g)}incrementRowColumn(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={databaseId:e,tableId:t[0],rowId:t[1],column:t[2],value:t[3],max:t[4],transactionId:t[5]};const a=r.databaseId,s=r.tableId,o=r.rowId,c=r.column,l=r.value,u=r.max,f=r.transactionId;if(typeof a>"u")throw new M('Missing required parameter: "databaseId"');if(typeof s>"u")throw new M('Missing required parameter: "tableId"');if(typeof o>"u")throw new M('Missing required parameter: "rowId"');if(typeof c>"u")throw new M('Missing required parameter: "column"');const v="/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/increment".replace("{databaseId}",a).replace("{tableId}",s).replace("{rowId}",o).replace("{column}",c),g={};typeof l<"u"&&(g.value=l),typeof u<"u"&&(g.max=u),typeof f<"u"&&(g.transactionId=f);const m=new URL(this.client.config.endpoint+v),_={"content-type":"application/json"};return this.client.call("patch",m,_,g)}}class ld{constructor(e){this.client=e}list(e,...t){let r;!e||e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={queries:e,search:t[0],total:t[1]};const a=r.queries,s=r.search,o=r.total,c="/teams",l={};typeof a<"u"&&(l.queries=a),typeof s<"u"&&(l.search=s),typeof o<"u"&&(l.total=o);const u=new URL(this.client.config.endpoint+c),f={};return this.client.call("get",u,f,l)}create(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={teamId:e,name:t[0],roles:t[1]};const a=r.teamId,s=r.name,o=r.roles;if(typeof a>"u")throw new M('Missing required parameter: "teamId"');if(typeof s>"u")throw new M('Missing required parameter: "name"');const c="/teams",l={};typeof a<"u"&&(l.teamId=a),typeof s<"u"&&(l.name=s),typeof o<"u"&&(l.roles=o);const u=new URL(this.client.config.endpoint+c),f={"content-type":"application/json"};return this.client.call("post",u,f,l)}get(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={teamId:e};const r=t.teamId;if(typeof r>"u")throw new M('Missing required parameter: "teamId"');const a="/teams/{teamId}".replace("{teamId}",r),s={},o=new URL(this.client.config.endpoint+a),c={};return this.client.call("get",o,c,s)}updateName(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={teamId:e,name:t[0]};const a=r.teamId,s=r.name;if(typeof a>"u")throw new M('Missing required parameter: "teamId"');if(typeof s>"u")throw new M('Missing required parameter: "name"');const o="/teams/{teamId}".replace("{teamId}",a),c={};typeof s<"u"&&(c.name=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("put",l,u,c)}delete(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={teamId:e};const r=t.teamId;if(typeof r>"u")throw new M('Missing required parameter: "teamId"');const a="/teams/{teamId}".replace("{teamId}",r),s={},o=new URL(this.client.config.endpoint+a),c={"content-type":"application/json"};return this.client.call("delete",o,c,s)}listMemberships(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={teamId:e,queries:t[0],search:t[1],total:t[2]};const a=r.teamId,s=r.queries,o=r.search,c=r.total;if(typeof a>"u")throw new M('Missing required parameter: "teamId"');const l="/teams/{teamId}/memberships".replace("{teamId}",a),u={};typeof s<"u"&&(u.queries=s),typeof o<"u"&&(u.search=o),typeof c<"u"&&(u.total=c);const f=new URL(this.client.config.endpoint+l),v={};return this.client.call("get",f,v,u)}createMembership(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={teamId:e,roles:t[0],email:t[1],userId:t[2],phone:t[3],url:t[4],name:t[5]};const a=r.teamId,s=r.roles,o=r.email,c=r.userId,l=r.phone,u=r.url,f=r.name;if(typeof a>"u")throw new M('Missing required parameter: "teamId"');if(typeof s>"u")throw new M('Missing required parameter: "roles"');const v="/teams/{teamId}/memberships".replace("{teamId}",a),g={};typeof o<"u"&&(g.email=o),typeof c<"u"&&(g.userId=c),typeof l<"u"&&(g.phone=l),typeof s<"u"&&(g.roles=s),typeof u<"u"&&(g.url=u),typeof f<"u"&&(g.name=f);const m=new URL(this.client.config.endpoint+v),_={"content-type":"application/json"};return this.client.call("post",m,_,g)}getMembership(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={teamId:e,membershipId:t[0]};const a=r.teamId,s=r.membershipId;if(typeof a>"u")throw new M('Missing required parameter: "teamId"');if(typeof s>"u")throw new M('Missing required parameter: "membershipId"');const o="/teams/{teamId}/memberships/{membershipId}".replace("{teamId}",a).replace("{membershipId}",s),c={},l=new URL(this.client.config.endpoint+o),u={};return this.client.call("get",l,u,c)}updateMembership(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={teamId:e,membershipId:t[0],roles:t[1]};const a=r.teamId,s=r.membershipId,o=r.roles;if(typeof a>"u")throw new M('Missing required parameter: "teamId"');if(typeof s>"u")throw new M('Missing required parameter: "membershipId"');if(typeof o>"u")throw new M('Missing required parameter: "roles"');const c="/teams/{teamId}/memberships/{membershipId}".replace("{teamId}",a).replace("{membershipId}",s),l={};typeof o<"u"&&(l.roles=o);const u=new URL(this.client.config.endpoint+c),f={"content-type":"application/json"};return this.client.call("patch",u,f,l)}deleteMembership(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={teamId:e,membershipId:t[0]};const a=r.teamId,s=r.membershipId;if(typeof a>"u")throw new M('Missing required parameter: "teamId"');if(typeof s>"u")throw new M('Missing required parameter: "membershipId"');const o="/teams/{teamId}/memberships/{membershipId}".replace("{teamId}",a).replace("{membershipId}",s),c={},l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("delete",l,u,c)}updateMembershipStatus(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={teamId:e,membershipId:t[0],userId:t[1],secret:t[2]};const a=r.teamId,s=r.membershipId,o=r.userId,c=r.secret;if(typeof a>"u")throw new M('Missing required parameter: "teamId"');if(typeof s>"u")throw new M('Missing required parameter: "membershipId"');if(typeof o>"u")throw new M('Missing required parameter: "userId"');if(typeof c>"u")throw new M('Missing required parameter: "secret"');const l="/teams/{teamId}/memberships/{membershipId}/status".replace("{teamId}",a).replace("{membershipId}",s),u={};typeof o<"u"&&(u.userId=o),typeof c<"u"&&(u.secret=c);const f=new URL(this.client.config.endpoint+l),v={"content-type":"application/json"};return this.client.call("patch",f,v,u)}getPrefs(e){let t;e&&typeof e=="object"&&!Array.isArray(e)?t=e||{}:t={teamId:e};const r=t.teamId;if(typeof r>"u")throw new M('Missing required parameter: "teamId"');const a="/teams/{teamId}/prefs".replace("{teamId}",r),s={},o=new URL(this.client.config.endpoint+a),c={};return this.client.call("get",o,c,s)}updatePrefs(e,...t){let r;e&&typeof e=="object"&&!Array.isArray(e)?r=e||{}:r={teamId:e,prefs:t[0]};const a=r.teamId,s=r.prefs;if(typeof a>"u")throw new M('Missing required parameter: "teamId"');if(typeof s>"u")throw new M('Missing required parameter: "prefs"');const o="/teams/{teamId}/prefs".replace("{teamId}",a),c={};typeof s<"u"&&(c.prefs=s);const l=new URL(this.client.config.endpoint+o),u={"content-type":"application/json"};return this.client.call("put",l,u,c)}}var Rs;(function(n){n[n.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",n[n.POLICY_VIOLATION=1008]="POLICY_VIOLATION",n[n.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(Rs||(Rs={}));class ut{}ut.read=n=>`read("${n}")`;ut.write=n=>`write("${n}")`;ut.create=n=>`create("${n}")`;ut.update=n=>`update("${n}")`;ut.delete=n=>`delete("${n}")`;class St{static any(){return"any"}static user(e,t=""){return t===""?`user:${e}`:`user:${e}/${t}`}static users(e=""){return e===""?"users":`users/${e}`}static guests(){return"guests"}static team(e,t=""){return t===""?`team:${e}`:`team:${e}/${t}`}static member(e){return`member:${e}`}static label(e){return`label:${e}`}}var ri,ai;class Ht{static custom(e){return e}static unique(e=7){const t=ad(Ht,ri,"m",ai).call(Ht);let r="";for(let a=0;a<e;a++){const s=Math.floor(Math.random()*16).toString(16);r+=s}return t+r}}ri=Ht,ai=function(){const e=new Date,t=Math.floor(e.getTime()/1e3),r=e.getMilliseconds();return t.toString(16)+r.toString(16).padStart(5,"0")};var Ds;(function(n){n.Equal="equal",n.NotEqual="notEqual",n.GreaterThan="greaterThan",n.GreaterThanEqual="greaterThanEqual",n.LessThan="lessThan",n.LessThanEqual="lessThanEqual",n.Contains="contains",n.IsNull="isNull",n.IsNotNull="isNotNull"})(Ds||(Ds={}));var Ns;(function(n){n.Totp="totp"})(Ns||(Ns={}));var Cs;(function(n){n.Email="email",n.Phone="phone",n.Totp="totp",n.Recoverycode="recoverycode"})(Cs||(Cs={}));var qs;(function(n){n.Amazon="amazon",n.Apple="apple",n.Auth0="auth0",n.Authentik="authentik",n.Autodesk="autodesk",n.Bitbucket="bitbucket",n.Bitly="bitly",n.Box="box",n.Dailymotion="dailymotion",n.Discord="discord",n.Disqus="disqus",n.Dropbox="dropbox",n.Etsy="etsy",n.Facebook="facebook",n.Figma="figma",n.Github="github",n.Gitlab="gitlab",n.Google="google",n.Linkedin="linkedin",n.Microsoft="microsoft",n.Notion="notion",n.Oidc="oidc",n.Okta="okta",n.Paypal="paypal",n.PaypalSandbox="paypalSandbox",n.Podio="podio",n.Salesforce="salesforce",n.Slack="slack",n.Spotify="spotify",n.Stripe="stripe",n.Tradeshift="tradeshift",n.TradeshiftBox="tradeshiftBox",n.Twitch="twitch",n.Wordpress="wordpress",n.Yahoo="yahoo",n.Yammer="yammer",n.Yandex="yandex",n.Zoho="zoho",n.Zoom="zoom",n.Mock="mock"})(qs||(qs={}));var js;(function(n){n.AvantBrowser="aa",n.AndroidWebViewBeta="an",n.GoogleChrome="ch",n.GoogleChromeIOS="ci",n.GoogleChromeMobile="cm",n.Chromium="cr",n.MozillaFirefox="ff",n.Safari="sf",n.MobileSafari="mf",n.MicrosoftEdge="ps",n.MicrosoftEdgeIOS="oi",n.OperaMini="om",n.Opera="op",n.OperaNext="on"})(js||(js={}));var Ls;(function(n){n.AmericanExpress="amex",n.Argencard="argencard",n.Cabal="cabal",n.Cencosud="cencosud",n.DinersClub="diners",n.Discover="discover",n.Elo="elo",n.Hipercard="hipercard",n.JCB="jcb",n.Mastercard="mastercard",n.Naranja="naranja",n.TarjetaShopping="targeta-shopping",n.UnionPay="unionpay",n.Visa="visa",n.MIR="mir",n.Maestro="maestro",n.Rupay="rupay"})(Ls||(Ls={}));var Us;(function(n){n.Afghanistan="af",n.Angola="ao",n.Albania="al",n.Andorra="ad",n.UnitedArabEmirates="ae",n.Argentina="ar",n.Armenia="am",n.AntiguaAndBarbuda="ag",n.Australia="au",n.Austria="at",n.Azerbaijan="az",n.Burundi="bi",n.Belgium="be",n.Benin="bj",n.BurkinaFaso="bf",n.Bangladesh="bd",n.Bulgaria="bg",n.Bahrain="bh",n.Bahamas="bs",n.BosniaAndHerzegovina="ba",n.Belarus="by",n.Belize="bz",n.Bolivia="bo",n.Brazil="br",n.Barbados="bb",n.BruneiDarussalam="bn",n.Bhutan="bt",n.Botswana="bw",n.CentralAfricanRepublic="cf",n.Canada="ca",n.Switzerland="ch",n.Chile="cl",n.China="cn",n.CoteDIvoire="ci",n.Cameroon="cm",n.DemocraticRepublicOfTheCongo="cd",n.RepublicOfTheCongo="cg",n.Colombia="co",n.Comoros="km",n.CapeVerde="cv",n.CostaRica="cr",n.Cuba="cu",n.Cyprus="cy",n.CzechRepublic="cz",n.Germany="de",n.Djibouti="dj",n.Dominica="dm",n.Denmark="dk",n.DominicanRepublic="do",n.Algeria="dz",n.Ecuador="ec",n.Egypt="eg",n.Eritrea="er",n.Spain="es",n.Estonia="ee",n.Ethiopia="et",n.Finland="fi",n.Fiji="fj",n.France="fr",n.MicronesiaFederatedStatesOf="fm",n.Gabon="ga",n.UnitedKingdom="gb",n.Georgia="ge",n.Ghana="gh",n.Guinea="gn",n.Gambia="gm",n.GuineaBissau="gw",n.EquatorialGuinea="gq",n.Greece="gr",n.Grenada="gd",n.Guatemala="gt",n.Guyana="gy",n.Honduras="hn",n.Croatia="hr",n.Haiti="ht",n.Hungary="hu",n.Indonesia="id",n.India="in",n.Ireland="ie",n.IranIslamicRepublicOf="ir",n.Iraq="iq",n.Iceland="is",n.Israel="il",n.Italy="it",n.Jamaica="jm",n.Jordan="jo",n.Japan="jp",n.Kazakhstan="kz",n.Kenya="ke",n.Kyrgyzstan="kg",n.Cambodia="kh",n.Kiribati="ki",n.SaintKittsAndNevis="kn",n.SouthKorea="kr",n.Kuwait="kw",n.LaoPeopleSDemocraticRepublic="la",n.Lebanon="lb",n.Liberia="lr",n.Libya="ly",n.SaintLucia="lc",n.Liechtenstein="li",n.SriLanka="lk",n.Lesotho="ls",n.Lithuania="lt",n.Luxembourg="lu",n.Latvia="lv",n.Morocco="ma",n.Monaco="mc",n.Moldova="md",n.Madagascar="mg",n.Maldives="mv",n.Mexico="mx",n.MarshallIslands="mh",n.NorthMacedonia="mk",n.Mali="ml",n.Malta="mt",n.Myanmar="mm",n.Montenegro="me",n.Mongolia="mn",n.Mozambique="mz",n.Mauritania="mr",n.Mauritius="mu",n.Malawi="mw",n.Malaysia="my",n.Namibia="na",n.Niger="ne",n.Nigeria="ng",n.Nicaragua="ni",n.Netherlands="nl",n.Norway="no",n.Nepal="np",n.Nauru="nr",n.NewZealand="nz",n.Oman="om",n.Pakistan="pk",n.Panama="pa",n.Peru="pe",n.Philippines="ph",n.Palau="pw",n.PapuaNewGuinea="pg",n.Poland="pl",n.FrenchPolynesia="pf",n.NorthKorea="kp",n.Portugal="pt",n.Paraguay="py",n.Qatar="qa",n.Romania="ro",n.Russia="ru",n.Rwanda="rw",n.SaudiArabia="sa",n.Sudan="sd",n.Senegal="sn",n.Singapore="sg",n.SolomonIslands="sb",n.SierraLeone="sl",n.ElSalvador="sv",n.SanMarino="sm",n.Somalia="so",n.Serbia="rs",n.SouthSudan="ss",n.SaoTomeAndPrincipe="st",n.Suriname="sr",n.Slovakia="sk",n.Slovenia="si",n.Sweden="se",n.Eswatini="sz",n.Seychelles="sc",n.Syria="sy",n.Chad="td",n.Togo="tg",n.Thailand="th",n.Tajikistan="tj",n.Turkmenistan="tm",n.TimorLeste="tl",n.Tonga="to",n.TrinidadAndTobago="tt",n.Tunisia="tn",n.Turkey="tr",n.Tuvalu="tv",n.Tanzania="tz",n.Uganda="ug",n.Ukraine="ua",n.Uruguay="uy",n.UnitedStates="us",n.Uzbekistan="uz",n.VaticanCity="va",n.SaintVincentAndTheGrenadines="vc",n.Venezuela="ve",n.Vietnam="vn",n.Vanuatu="vu",n.Samoa="ws",n.Yemen="ye",n.SouthAfrica="za",n.Zambia="zm",n.Zimbabwe="zw"})(Us||(Us={}));var ja;(function(n){n.GET="GET",n.POST="POST",n.PUT="PUT",n.PATCH="PATCH",n.DELETE="DELETE",n.OPTIONS="OPTIONS",n.HEAD="HEAD"})(ja||(ja={}));var Hs;(function(n){n.Center="center",n.Topleft="top-left",n.Top="top",n.Topright="top-right",n.Left="left",n.Right="right",n.Bottomleft="bottom-left",n.Bottom="bottom",n.Bottomright="bottom-right"})(Hs||(Hs={}));var Bs;(function(n){n.Jpg="jpg",n.Jpeg="jpeg",n.Png="png",n.Webp="webp",n.Heic="heic",n.Avif="avif",n.Gif="gif"})(Bs||(Bs={}));var zs;(function(n){n.Http="http",n.Schedule="schedule",n.Event="event"})(zs||(zs={}));var Ws;(function(n){n.Waiting="waiting",n.Processing="processing",n.Completed="completed",n.Failed="failed",n.Scheduled="scheduled"})(Ws||(Ws={}));const Gt={endpoint:"https://cloud.appwrite.io/v1",projectId:"689725820024e81781b7",databaseId:"689d15b10003a5a13636",functions:{cmsAuth:"68976500002eb5c6ee4f",accessRequest:"689cdea5001a4d74549d",batchUpdate:"68f00487000c624533a3"},collections:{events:"events",ingredients:"ingredients",main:"main",purchases:"purchases",products:"products"}};let En=null;async function je(){if(En)return En;console.log("[appwrite] Initialisation des instances Appwrite...");const n=new Wt().setEndpoint(Gt.endpoint).setProject(Gt.projectId),e=new sd(n),t=new od(n),r=new cd(n),a=new id(n),s=new ld(n);return En={client:n,account:e,databases:t,tables:r,functions:a,teams:s,config:Gt},console.log("[appwrite] Instances initialisées avec succès"),En}function dd(){console.log("[appwrite] Cache réinitialisé"),En=null}function si(){return{APPWRITE_ENDPOINT:Gt.endpoint,APPWRITE_PROJECT_ID:Gt.projectId,APPWRITE_FUNCTION_ID:Gt.functions.batchUpdate,ACCESS_REQUEST_FUNCTION_ID:Gt.functions.accessRequest,APPWRITE_CONFIG:Gt}}function oi(n,e){return En?En.client.subscribe(n,e):(console.warn("[appwrite] Subscribe appelé avant initialisation, tentative d'init..."),new Wt().setEndpoint(Gt.endpoint).setProject(Gt.projectId).subscribe(n,e))}function ii(n,e){const{operationName:t,maxAutoRetries:r=1,autoRetryDelay:a=1e3}=e;let s=1,o=null;return new Promise((c,l)=>{const u=async(f=!1)=>{try{f?o=Fe.loading(`Tentative de ${t}...`):s>1?o?Fe.update(o,{state:"loading",message:`${t} (Tentative ${s}/${r+1})...`}):o=Fe.loading(`${t} (Tentative ${s}/${r+1})...`):o=Fe.loading(`${t} en cours...`);const v=await n();o&&Fe.update(o,{state:"success",message:e.successMessage||`${t} réussie !`,action:void 0}),e.onSuccess?.(v),c(v)}catch(v){console.error(`[RetryUtils] Erreur ${t} (Tentative ${s}):`,v);const g=v instanceof Error?v.message:"Erreur inconnue";if(s<=r){s++,o&&Fe.update(o,{state:"loading",message:`Erreur. Nouvelle tentative dans ${a/1e3}s...`}),setTimeout(()=>u(!1),a);return}o&&Fe.update(o,{state:"error",message:`Échec ${t}: ${g}`,action:{label:"Réessayer",onClick:()=>{Fe.dismiss(o),u(!0)}}}),e.onError?.(v)}};u(!1)})}function ci(n,e){return{$id:n.$id,mainId:n.mainId,productHugoUuid:n.productHugoUuid,productName:n.productName,...e}}async function ud(n){const{account:e}=await je(),t=await e.get();return{...n,updatedBy:t.name}}function $n(){return localStorage.getItem("appwrite-user-name")||""}async function fd(n,e,t=100){try{const{tables:r,config:a}=await je(),s=await r.listRows(a.databaseId,a.APPWRITE_CONFIG.collections.purchases,[V.greaterThan("$updatedAt",e),V.equal("mainId",n),V.limit(t),V.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${s.rows.length} purchases modifiés chargés`),s.rows}catch(r){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",r),[]}}async function li(n,e){const{lastSync:t,limit:r=100}=e;try{const{tables:a,config:s}=await je();if(!t)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listRows(s.databaseId,s.APPWRITE_CONFIG.collections.products,[V.equal("mainId",n),V.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),V.limit(r)])).rows;const o=await a.listRows(s.databaseId,s.APPWRITE_CONFIG.collections.products,[V.greaterThan("$updatedAt",t),V.equal("mainId",n),V.limit(r),V.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.rows.length>0&&console.log(`[Appwrite Interactions] ${o.rows.length} produits synchronisés avec leurs purchases`),o.rows}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${n}:`,a);const s=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${s}`)}}async function Ln(n,e,t=!0){const{tables:r,config:a}=await je();return t&&(e.updatedBy=$n()),await r.updateRow(a.databaseId,a.APPWRITE_CONFIG.collections.products,n,e)}async function Zt(n,e,t){try{const r=t(n);if(!r)throw new Error(`Produit ${n} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${n} sur Appwrite...`);const a=ci(r,e),s=await ud(a),{tables:o,config:c}=await je(),l=await o.createRow(c.databaseId,c.APPWRITE_CONFIG.collections.products,n,s);return console.log(`[Appwrite Interactions] Produit ${n} créé avec succès`),l}catch(r){console.error(`[Appwrite Interactions] Erreur création produit ${n}:`,r);const a=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function di(n,e){try{const{tables:t,config:r}=await je(),{slugify:a}=await qa(async()=>{const{slugify:f}=await Promise.resolve().then(()=>td);return{slugify:f}},void 0),o=`${a(n.productName).substring(0,10)}_${Date.now().toString(36)}`,c={quantity:n.quantity,pFrais:n.pFrais||!1,pSurgel:n.pSurgel||!1},l={productHugoUuid:null,productName:n.productName,productType:n.productType||"Autre",store:n.store?JSON.stringify(n.store):null,who:n.who||[],isSynced:!0,mainId:e,status:"active",updatedBy:$n(),stockReel:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,specs:JSON.stringify(c)};console.log(`[Appwrite Interactions] Création produit manuel ${o}...`,l);const u=await t.createRow(r.databaseId,r.APPWRITE_CONFIG.collections.products,o,l);return console.log(`[Appwrite Interactions] Produit manuel ${o} créé avec succès`),u}catch(t){throw console.error("[Appwrite Interactions] Erreur création produit manuel:",t),t}}async function ui(n,e){if(!n)throw new Error("ID du produit requis pour la mise à jour du magasin");const t=e?JSON.stringify(e):null,r=await Ln(n,{store:t||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${n}, nouvelle valeur:`,r.store),r}async function fi(n,e){return Ln(n,{who:e})}async function La(n,e){return Ln(n,{stockReel:e})}async function as(n,e,t=!1){if(!n)throw new Error("ID du produit requis pour la mise à jour de l'override");const r=JSON.stringify(e),a=await Ln(n,{totalNeededOverride:r},t);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${n}:`,e),a}async function hi(n,e=!0){if(!n)throw new Error("ID du produit requis pour la suppression de l'override");const t=await Ln(n,{totalNeededOverride:null},e);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${n}`),t}async function pi(n,e,t){try{const r=t(n);if(!r)throw new Error(`Produit ${n} non trouvé localement pour mise à jour batch`);const a={};return e.stockReel!==void 0&&(a.stockReel=e.stockReel),e.who!==void 0&&(a.who=e.who),e.storeInfo!==void 0&&(a.store=JSON.stringify(e.storeInfo)),r.isSynced?(console.log(`[Appwrite Interactions] Produit ${n} déjà sync, update batch normal...`),await Ln(n,a)):(console.log(`[Appwrite Interactions] Produit ${n} local, création batch avec upsert...`),await Zt(n,a,t))}catch(r){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${n}:`,r),r}}async function vi(n){const{tables:e,config:t}=await je(),r={...n,createdBy:$n()},a=await e.createRow(t.databaseId,t.APPWRITE_CONFIG.collections.purchases,Ht.unique(),r);return console.log("[Appwrite Interactions] Achat créé:",a),a}async function ss(n,e){try{const{tables:t,config:r,account:a}=await je(),s=await t.getRow(r.databaseId,r.APPWRITE_CONFIG.collections.purchases,n),o={...e,products:e.products||s.products},c=await t.updateRow(r.databaseId,r.APPWRITE_CONFIG.collections.purchases,n,o);return console.log(`[Appwrite Interactions] Achat ${n} mis à jour:`,o),c}catch(t){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${n}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${r}`)}}async function gi(n){try{const{tables:e,config:t}=await je();await e.deleteRow(t.databaseId,t.APPWRITE_CONFIG.collections.purchases,n),console.log(`[Appwrite Interactions] Achat ${n} supprimé`)}catch(e){console.error(`[Appwrite Interactions] Erreur suppression achat ${n}:`,e);const t=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${t}`)}}async function mi(n){if(!n?.length)return[];try{const{tables:e,config:t}=await je(),r=await e.listRows(t.databaseId,t.APPWRITE_CONFIG.collections.purchases,[V.equal("$id",n),V.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${r.rows.length} purchases chargés avec relations products`),r.rows}catch(e){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",e);const t=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${t}`)}}function bi(n,e={}){let t=null;const r=s=>{const{events:o,payload:c}=s;if(!c)return;const l=o.some(m=>m.includes("products.")),u=o.some(m=>m.includes("purchases.")),f=o.some(m=>m.includes(".create")),v=o.some(m=>m.includes(".update")),g=o.some(m=>m.includes(".delete"));if(l){const m=c;m.updatedBy&&m.updatedBy!==$n()&&(f||v?Fe.info(`${m.updatedBy} a modifié le produit "${m.productName}"`,{source:"realtime-other"}):g&&Fe.info(`${m.updatedBy} a supprimé un produit`,{source:"realtime-other"})),f&&e.onProductCreate?e.onProductCreate(m):v&&e.onProductUpdate?e.onProductUpdate(m):g&&e.onProductDelete&&e.onProductDelete(m.$id)}else if(u){const m=c;if(m.createdBy&&m.createdBy!==$n()){const _=m.products?.[0]?.productName||"un produit";f&&m.who!==$n()?Fe.info(`${m.who} a ajouté un achat pour ${_}`,{source:"realtime-other"}):v&&m.who!==$n()?Fe.info(`${m.who} a modifié un achat pour ${_}`,{source:"realtime-other"}):g&&Fe.info(`${m.who} a supprimé un achat pour ${_}`,{source:"realtime-other"})}f&&e.onPurchaseCreate?e.onPurchaseCreate(m):v&&e.onPurchaseUpdate?e.onPurchaseUpdate(m):g&&e.onPurchaseDelete&&e.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),t=window.AppwriteClient.subscribeToCollections(["products","purchases"],n,r,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),e.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),e.onDisconnect?.()},onError:s=>{console.error("[Appwrite Interactions] Erreur realtime:",s),e.onError?.(s)}}))}catch(s){console.error("[Appwrite Interactions] Impossible de configurer realtime:",s),e.onError?.(s)}})(),()=>{t&&(t(),t=null)}}async function _i(n){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${n}`);const{tables:e,config:t}=await je(),r=await e.getRow(t.databaseId,t.collections.main,n);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${r.name}`),r}catch(e){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${n}:`,e),null}}async function yi(n,e,t,r){try{console.log(`[Appwrite Interactions] Création du Main document: ${n}`);const{tables:a,config:s,account:o}=await je(),c=await o.get();await a.createRow(s.databaseId,s.APPWRITE_CONFIG.collections.main,n,{name:r,createdBy:c.$id,isActive:!0,originalDataHash:e,allDates:t,status:"active",dateStart:t[0]||null,dateEnd:t[t.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${n}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function os(n){try{const{functions:e,config:t}=await je(),r={operation:"batchUpdateProducts",data:n};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${n.productIds.length} produits, type: ${n.updateType}`);const a=await ii(()=>e.createExecution(t.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(r),!1,"/",ja.POST),{operationName:`batchUpdateProducts (${n.productIds.length} products, type: ${n.updateType})`,maxAutoRetries:1,autoRetryDelay:2e3});if(!a)throw new Error("Opération annulée ou échouée après tentatives de mise à jour groupée");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr||a.responseBody}`);const s=JSON.parse(a.responseBody);return s.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${s.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",s.error),s}catch(e){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",e);const t=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,updatedCount:n.productIds.length,updateType:n.updateType,error:t,timestamp:new Date().toISOString()}}}async function wi(n,e,t,r){return os({productIds:n,products:e,updateType:"store",updateData:t,options:r})}async function Ii(n,e,t,r="replace"){return os({productIds:n,products:e,updateType:"who",updateData:{names:t},options:{mode:r}})}async function Si(n,e,t,r={}){try{const{tables:a,config:s,account:o}=await je(),c=await o.get(),l=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:n,productId:e,productIdType:typeof e,quantities:t,options:r});for(const u of t){const f={products:[e],mainId:n,quantity:u.q,unit:u.u,status:"delivered",notes:r.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:r.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:r.invoiceId,invoiceTotal:null},v=await a.createRow(s.databaseId,s.APPWRITE_CONFIG.collections.purchases,Ht.unique(),f);l.push(v)}return console.log(`[Appwrite Interactions] ${l.length} validations rapides créées pour produit ${e}`),l}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const s=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${s}`)}}async function xi(n,e,t,r,a,s){try{const{tables:o,config:c,account:l}=await je(),u=await l.get(),f=e||Ht.unique(),v=u.name;if(!t)throw new Error("invoiceTotal est requis pour une dépense");const g={products:[],mainId:n,quantity:1,unit:"global",status:"expense",notes:a||"",store:r??null,who:v||u.name,price:t,invoiceId:f,invoiceTotal:t,orderDate:null,deliveryDate:null,createdBy:u.$id},m=await o.createRow(c.databaseId,c.APPWRITE_CONFIG.collections.purchases,Ht.unique(),g);return console.log("[Appwrite Interactions] Dépense créée:",m),m}catch(o){console.error("[Appwrite Interactions] Erreur création dépense:",o);const c=o instanceof Error?o.message:"Erreur inconnue";throw new Error(`Échec de la création de la dépense: ${c}`)}}async function hd(n){try{const{tables:e,config:t}=await je(),r=await e.listRows(t.databaseId,t.APPWRITE_CONFIG.collections.purchases,[V.equal("mainId",n),V.equal("status","expense"),V.limit(1e3)]);return console.log(`[Appwrite Interactions] ${r.rows.length} dépenses globales chargées`),r.rows}catch(e){return console.error("[Appwrite Interactions] Erreur chargement dépenses globales:",e),[]}}const Vs=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:os,batchUpdateStore:wi,batchUpdateWho:Ii,createExpensePurchase:xi,createMainDocument:yi,createManualProduct:di,createPurchase:vi,createQuickValidationPurchases:Si,deletePurchase:gi,enrichedProductToAppwriteProduct:ci,loadMainEventData:_i,loadOrphanPurchases:hd,loadPurchasesListByIds:mi,loadUpdatedPurchases:fd,removeTotalOverride:hi,subscribeToRealtime:bi,syncProductsWithPurchases:li,updateProduct:Ln,updateProductBatch:pi,updateProductStock:La,updateProductStore:ui,updateProductWho:fi,updatePurchase:ss,updateTotalOverride:as,upsertProduct:Zt},Symbol.toStringTag,{value:"Module"}));function pd(n){return new Date(n).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function Sn(n){return n?new Date(n).toLocaleDateString("fr-Fr",{weekday:"short",day:"numeric",month:"short"}):""}function jr(n){const t=new Date(n).getHours();return t>=11&&t<=13?"sun":t>=19&&t<=21?"moon":t>=7&&t<=9?"cloud":null}function vd(n){return{formattedDate:new Date(n).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"}),timeIcon:jr(n)}}function Ei(n){const e={};for(const t of n)e[t]=vd(t);return e}function gd(n,e){if(!n.byDate?.[e])return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const t=n.byDate[e],r=[e],a=new Map;t.recipes?.length&&a.set(e,t.recipes);const s=t.totalConsolidated||[],o=s.length>0?mt(s):"-",c=md(n,e,s),l=c.filter(g=>g.q>0),u=new Date().toISOString().split("T")[0],v=e<u?[]:c.filter(g=>g.q<0);return{requiredQuantities:s,requiredQuantitiesFormatted:o,stockBalance:c,availableStockQuantities:l,missingStockQuantities:v,availableStockFormatted:ra(c),missingStockFormatted:mt(v.map(g=>({q:Math.abs(g.q),u:g.u}))),hasAvailableStock:l.length>0,hasMissingStock:v.length>0,totalRecipesInRange:t.recipes?.length||0,totalPortionsInRange:t.totalAssiettes||0,datesInSelectedRange:r,recipesByDate:a}}function md(n,e,t){let r=[],a="";n.stockParsed?.dateTime&&n.stockParsed.dateTime<=e&&(r=[{q:parseFloat(n.stockParsed.quantity),u:n.stockParsed.unit}],a=n.stockParsed.dateTime);const s=[];if(n.purchases)for(const l of n.purchases)bd(l,e,a)&&s.push({q:l.quantity,u:l.unit});const o=[...r,...s],c=ta(o);return rs(c,t)}function bd(n,e,t=""){if(n.status==="cancelled")return!1;const r=n.deliveryDate||n.$createdAt;return!r||r>e||t&&n.$createdAt<t?!1:r<=e}function _d(n,e){const t=n.totalNeededArray||[],r=t.length>0?mt(t):"-",a=$i(n,e[0],e[e.length-1],t),s=a.filter(u=>u.q>0),o=a.filter(u=>u.q<0),c=[...e].sort(),l=new Map;if(n.byDate)for(const[u,f]of Object.entries(n.byDate))f.recipes?.length&&l.set(u,f.recipes);return{requiredQuantities:t,requiredQuantitiesFormatted:r,stockBalance:a,availableStockQuantities:s,missingStockQuantities:o,availableStockFormatted:ra(a),missingStockFormatted:mt(o.map(u=>({q:Math.abs(u.q),u:u.u}))),hasAvailableStock:s.length>0,hasMissingStock:o.length>0,totalRecipesInRange:n.nbRecipes||0,totalPortionsInRange:n.totalAssiettes||0,datesInSelectedRange:c,recipesByDate:l}}function yd(n,e,t){if(!n.byDate)return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const r=new Date(e),a=new Date(t),s=[],o=new Map,c=new Map;let l=0,u=0;for(const[I,E]of Object.entries(n.byDate)){const k=new Date(I);k>=r&&k<=a&&(s.push(I),l+=E.totalAssiettes||0,E.recipes?.length&&(o.set(I,E.recipes),u+=E.recipes.length),E.totalConsolidated&&E.totalConsolidated.forEach(({q:P,u:A})=>{c.set(A,(c.get(A)||0)+P)}))}const f=Array.from(c.entries()).map(([I,E])=>({q:E,u:I})),v=f.length>0?mt(f):"-",g=$i(n,e,t,f),m=g.filter(I=>I.q>0),_=new Date().toISOString().split("T")[0],S=t<_?[]:g.filter(I=>I.q<0);return{requiredQuantities:f,requiredQuantitiesFormatted:v,stockBalance:g,availableStockQuantities:m,missingStockQuantities:S,availableStockFormatted:ra(g),missingStockFormatted:mt(S.map(I=>({q:Math.abs(I.q),u:I.u}))),hasAvailableStock:m.length>0,hasMissingStock:S.length>0,totalRecipesInRange:u,totalPortionsInRange:l,datesInSelectedRange:s,recipesByDate:o}}function $i(n,e,t,r){let a=[],s="";n.stockParsed?.dateTime&&n.stockParsed.dateTime<=e&&(a=[{q:parseFloat(n.stockParsed.quantity),u:n.stockParsed.unit}],s=n.stockParsed.dateTime);const o=[];if(n.purchases)for(const u of n.purchases)wd(u,e,t,s)&&o.push({q:u.quantity,u:u.unit});const c=[...a,...o],l=ta(c);return rs(l,r)}function wd(n,e,t,r=""){if(n.status==="cancelled")return!1;const a=n.deliveryDate||n.$createdAt;return!a||a>t||r&&n.$createdAt<r?!1:a<=t}async function Id(n){let e;if(e=await fetch(`/evenements/${n}/metadata.json`),!e.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${e.status}`);const t=await e.json();if(!t.mainGroup_id||!t.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return t}async function Qs(n){const e=await fetch(`/evenements/${n}/ingredients_aw/index.json`);if(!e.ok)throw new Error(`Impossible de charger les données Hugo: ${e.status}`);const t=await e.json();if(!t.mainGroup_id||!t.ingredients)throw new Error("Format de données Hugo invalide");return t}async function Sd(n,e){if(!n)return!0;try{return(await Id(e)).hugoContentHash!==n}catch(t){return console.warn("Impossible de vérifier le hash Hugo:",t),!1}}function Pi(n,e){const t=na(n.byDate),r=Er(xr([])),{numeric:a,display:s}=$r(t,r),o=Object.keys(n.byDate||{}),c=Ei(o);return{$id:`${n.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:n.ingredientHugoUuid,productName:n.ingredientName,productType:n.ingType,pFrais:n.pFrais||!1,pSurgel:n.pSurgel||!1,nbRecipes:n.nbRecipes,totalNeededRaw:n.totalNeededRaw,totalAssiettes:n.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:e,purchases:[],byDate:n.byDate,storeInfo:null,stockParsed:null,totalNeededArray:t,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:mt(t),displayTotalPurchases:"-",displayMissingQuantity:s,totalNeededOverrideParsed:null,displayTotalOverride:"",dateDisplayInfo:c}}function xd(n,e){return n.map(t=>Pi(t,e))}class Ed{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(e){this.dbName=`products-cache-${e}`}async open(){if(!this.db)return new Promise((e,t)=>{const r=indexedDB.open(this.dbName,this.version);r.onerror=()=>t(r.error),r.onsuccess=()=>{this.db=r.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),e()},r.onupgradeneeded=a=>{const s=a.target.result;s.objectStoreNames.contains(this.PRODUCTS_STORE)||(s.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),s.objectStoreNames.contains(this.METADATA_STORE)||(s.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,t)=>{const s=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();s.onsuccess=()=>{const o=new Map;s.result.forEach(c=>{o.set(c.$id,c)}),console.log(`[IDBCache] ${o.size} produits chargés`),e(o)},s.onerror=()=>t(s.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,t)=>{const s=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();s.onsuccess=()=>{const o=s.result,c={lastSync:null,allDates:[],hugoContentHash:null};o.forEach(l=>{l.key===this.LAST_SYNC_KEY?c.lastSync=l.value:l.key===this.ALL_DATES_KEY?c.allDates=l.value||[]:l.key===this.HUGO_HASH_KEY&&(c.hugoContentHash=l.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${c.lastSync}, dates=${c.allDates?.length||0}, hash=${c.hugoContentHash}`),e(c)},s.onerror=()=>t(s.error)})}async saveProducts(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),s=a.objectStore(this.PRODUCTS_STORE);s.clear(),e.forEach(o=>{s.put(o)}),a.oncomplete=()=>{console.log(`[IDBCache] ${e.size} produits sauvegardés`),t()},a.onerror=()=>r(a.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const a=this.db.transaction(this.METADATA_STORE,"readwrite"),s=a.objectStore(this.METADATA_STORE);s.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),s.put({key:this.ALL_DATES_KEY,value:e.allDates}),e.hugoContentHash!==void 0&&s.put({key:this.HUGO_HASH_KEY,value:e.hugoContentHash}),a.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),t()},a.onerror=()=>r(a.error)})}async updateLastSync(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${e}`),t()},o.onerror=()=>r(o.error)})}async updateAllDates(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${e.length} dates`),t()},o.onerror=()=>r(o.error)})}async updateHugoContentHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${e}`),t()},o.onerror=()=>r(o.error)})}async updateLastHugoMenuUpdate(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:e});o.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),t()},o.onerror=()=>r(o.error)})}async upsertProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(e);o.onsuccess=()=>t(),o.onerror=()=>r(o.error)})}async deleteProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(e);o.onsuccess=()=>t(),o.onerror=()=>r(o.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,t)=>{const r=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");r.objectStore(this.PRODUCTS_STORE).clear(),r.objectStore(this.METADATA_STORE).clear(),r.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),e()},r.onerror=()=>t(r.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function $d(n){const e=new Ed(n);return await e.open(),e}function Pd(n){return!!(n.isMerged||n.totalNeededOverride)}function Ad(n,e){if(!n||n.length!==e.length)return!0;for(let t=0;t<n.length;t++){const r=n[t],a=e[t];if(r.q!==a.q||r.u!==a.u)return!0}return!1}async function Md(n,e){const t={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},r=new Set;for(const a of e.ingredients){const s=a.productSemanticKey;if(!s){console.warn(`[syncHugoData] Ingrédient sans productSemanticKey ignoré : ${a.ingredientName}`);continue}r.add(s);const o=n.get(s);if(o){if(Ad(o.totalNeededRaw,a.totalNeededRaw)){const l=kd(o,a);if(l&&t.overrideConflicts.push(l),o.isMerged){const u=o.displayTotalNeeded;Gs(o,a),t.mergedProductsUpdated.push({product:o,oldDisplayTotal:u,newDisplayTotal:o.displayTotalNeeded,currentOverride:o.totalNeededOverrideParsed,semanticKey:s})}else Gs(o,a);t.updated.push(s)}n.set(s,o)}else{t.added.push(a);const c=Pi(a,e.mainGroup_id);n.set(c.$id,c)}}for(const[a,s]of n)r.has(a)||(t.removed.push(s),!Pd(s)&&!s.purchases?.length&&!s.stockReel&&!s.who?.length&&n.delete(a));return t.overrideConflicts.length>0&&await Td(t.overrideConflicts),t.summary=Dd(t),t}function kd(n,e){if(!n.totalNeededOverride||!n.totalNeededOverrideParsed)return null;const t=na(e.byDate),r=mt(t),a=n.displayTotalNeeded;return a!==r?{product:n,oldDisplayTotal:a,newDisplayTotal:r,currentOverride:n.totalNeededOverrideParsed,semanticKey:n.$id}:null}async function Td(n){for(const e of n){const t={...e.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:e.oldDisplayTotal,newTotalDisplay:e.newDisplayTotal};JSON.stringify(t);try{await as(e.product.$id,t,!1)}catch(r){console.error(`Erreur lors de la mise à jour de l'override pour ${e.product.$id}:`,r)}}}function Gs(n,e){n.byDate=e.byDate,n.nbRecipes=e.nbRecipes,n.totalAssiettes=e.totalAssiettes,n.productType=e.ingType,n.pFrais=e.pFrais||!1,n.pSurgel=e.pSurgel||!1,Rd(n)}function Rd(n){n.totalNeededArray=na(n.byDate),n.displayTotalNeeded=mt(n.totalNeededArray);const e=Er(xr(n.purchases)),{numeric:t,display:r}=$r(n.totalNeededArray,e);n.totalPurchasesArray=e,n.missingQuantityArray=t,n.displayMissingQuantity=r;const a=Object.keys(n.byDate||{});n.dateDisplayInfo=Ei(a),n.stockOrTotalPurchases=n.purchases.length>0?n.displayTotalPurchases:n.displayTotalNeeded}function Dd(n){const e=[];if((n.added.length>0||n.updated.length>0||n.removed.length>0)&&e.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),n.added.length>0&&e.push(`${n.added.length} nouveau(x) ingrédient(s)`),n.updated.length>0&&e.push(` ${n.updated.length} ingrédient(s) mis à jour`),n.overrideConflicts.length>0&&e.push(`⚠️ ${n.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),n.mergedProductsUpdated.length>0&&e.push(`🔀 ${n.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),n.removed.length>0){const t=n.removed.filter(r=>r.purchases?.length||r.stockReel||r.who?.length).length;t>0?e.push(`⚠️ ${t} suppression(s) avec données conservées`):e.push(`${n.removed.length} ingrédient(s) supprimé(s)`)}return e.length>0?e.join(", "):"Aucune modification détectée"}async function Ai(){try{const{teams:n}=await je();return await n.list()}catch(n){throw console.error("[teams] Error listing teams:",n),n}}async function Nd(n){try{const{teams:e}=await je();return await e.get(n)}catch(e){throw console.error(`[teams] Error getting team ${n}:`,e),e}}async function Cd(n,e){try{const{teams:t}=await je(),r=Ht.unique(),a=await t.create(r,n,e);return console.log(`[teams] Team created: ${r}`),a}catch(t){throw console.error("[teams] Error creating team:",t),t}}async function qd(n,e){try{const{teams:t}=await je(),r=await t.updateName(n,e);return console.log(`[teams] Team updated: ${n}`),r}catch(t){throw console.error(`[teams] Error updating team ${n}:`,t),t}}async function jd(n){try{const{teams:e}=await je();await e.delete(n),console.log(`[teams] Team deleted: ${n}`)}catch(e){throw console.error(`[teams] Error deleting team ${n}:`,e),e}}async function Wn(n){try{const{teams:e}=await je();return await e.listMemberships(n)}catch(e){throw console.error(`[teams] Error listing members of team ${n}:`,e),e}}async function Ld(n,e,t,r){try{const{teams:a}=await je(),s=await a.createMembership(n,t,e,void 0,void 0,r);return console.log(`[teams] Membership created for ${e} in team ${n}`),s}catch(a){throw console.error("[teams] Error creating membership:",a),a}}async function Ud(n,e,t){try{const{teams:r}=await je(),a=await r.updateMembership(n,e,t);return console.log(`[teams] Membership ${e} roles updated`),a}catch(r){throw console.error("[teams] Error updating membership roles:",r),r}}async function Hd(n,e){try{const{teams:t}=await je();await t.deleteMembership(n,e),console.log(`[teams] Membership ${e} deleted from team ${n}`)}catch(t){throw console.error("[teams] Error deleting membership:",t),t}}async function Ua(){try{return(await Ai()).teams.map(e=>e.$id)}catch(n){return console.warn("[teams] Impossible de récupérer les équipes (Appwrite pas encore initialisé?):",n),[]}}async function Bd(n){try{return(await Ua()).includes(n)}catch(e){return console.error("[teams] Error checking team membership:",e),!1}}class zd{isMobileQuery=new Ol("max-width: 1024px");#e=C(null);#t=C(Ue([]));#n=C(!1);#a=C(null);#o=C(!1);get user(){return i(this.#e)}get userId(){return i(this.#e)?.$id??null}get userTeams(){return i(this.#t)}get isAuthenticated(){return i(this.#e)!==null}get authLoading(){return i(this.#n)}get authError(){return i(this.#a)}get authInitialized(){return i(this.#o)}async initializeAuth(){if(i(this.#o)){console.log("[GlobalState] Authentification déjà initialisée");return}console.log("[GlobalState] Initialisation de l'authentification..."),b(this.#n,!0),b(this.#a,null);try{const{account:e}=await je();b(this.#e,await e.get(),!0),localStorage.setItem("appwrite-user-name",i(this.#e).name),localStorage.setItem("appwrite-user-email",i(this.#e).email),localStorage.setItem("appwrite-user-id",i(this.#e).$id),b(this.#t,await Ua(),!0),console.log(`[GlobalState] Authentifié: ${i(this.#e).name} (${i(this.#t).length} équipes)`)}catch(e){b(this.#e,null),b(this.#t,[],!0),b(this.#a,e instanceof Error?e.message:"Erreur d'authentification",!0),console.log("[GlobalState] Utilisateur non connecté")}finally{b(this.#n,!1),b(this.#o,!0)}}async logout(){try{const{account:e}=await je();await e.deleteSession({sessionId:"current"}),dd(),localStorage.removeItem("appwrite-user-name"),localStorage.removeItem("appwrite-user-email"),localStorage.removeItem("appwrite-user-id"),b(this.#e,null),b(this.#t,[],!0),b(this.#o,!1),console.log("[GlobalState] Déconnexion réussie")}catch(e){throw console.error("[GlobalState] Erreur lors de la déconnexion:",e),e}}async refreshTeams(){if(!i(this.#e)){console.warn("[GlobalState] Impossible de rafraîchir les équipes: utilisateur non connecté");return}try{const e=await Ua();(e.length>0||i(this.#t).length===0)&&(b(this.#t,e,!0),console.log(`[GlobalState] Équipes rafraîchies: ${i(this.#t).length}`))}catch(e){console.error("[GlobalState] Erreur lors du rafraîchissement des équipes:",e)}}get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return i(this.#e)?.name||localStorage.getItem("appwrite-user-name")||""}get toasts(){return Fe.toasts}get toast(){return Fe}#c=C(Ue({isOpen:!1,conflicts:[]}));get modalOverride(){return i(this.#c)}set modalOverride(e){b(this.#c,e,!0)}#r=C(Ue({isOpen:!1}));get modal(){return i(this.#r)}set modal(e){b(this.#r,e,!0)}#l=C(Ue({isRunning:!1,name:"",progress:0}));get backgroundOperation(){return i(this.#l)}set backgroundOperation(e){b(this.#l,e,!0)}#d=C(Ue({isOpen:!1}));get authModal(){return i(this.#d)}set authModal(e){b(this.#d,e,!0)}}const ze=new zd;class ur{#e=C(Ue({}));get data(){return i(this.#e)}set data(e){b(this.#e,e,!0)}dateStore;constructor(e,t){this.data=e,this.dateStore=t}update(e){this.data=e}get $id(){return this.data.$id}get productName(){return this.data.productName}get productType(){return this.data.productType}get storeInfo(){return this.data.storeInfo}get who(){return this.data.who}get pFrais(){return this.data.pFrais}get pSurgel(){return this.data.pSurgel}get status(){return this.data.status}get previousNames(){return this.data.previousNames}get purchases(){return this.data.purchases}get totalNeededOverrideParsed(){return this.data.totalNeededOverrideParsed}get displayMissingQuantity(){return this.data.displayMissingQuantity}get missingQuantityArray(){return this.data.missingQuantityArray}get isSynced(){return this.data.isSynced}get byDate(){return this.data.byDate}#t=te(()=>{const e=this.dateStore.current,t=this.dateStore.dates;let r;if(this.dateStore.isFullRange)r=_d(this.data,t),r.datesInSelectedRange&&(r.datesInSelectedRange=r.datesInSelectedRange.filter(a=>this.data.byDate&&this.data.byDate[a]));else if(e.start&&e.end&&e.start===e.end)r=gd(this.data,e.start);else if(e.start&&e.end)r=yd(this.data,e.start,e.end);else return{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedMissingQuantities:"",formattedAvailableQuantities:"En attente",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map};return{quantities:r.requiredQuantities,formattedQuantities:r.requiredQuantitiesFormatted,nbRecipes:r.totalRecipesInRange,totalAssiettes:r.totalPortionsInRange,stockResult:r.stockBalance,availableQuantities:r.availableStockQuantities,missingQuantities:r.missingStockQuantities,formattedMissingQuantities:r.missingStockFormatted,formattedAvailableQuantities:r.availableStockFormatted,hasAvailable:r.hasAvailableStock,hasMissing:r.hasMissingStock,concernedDates:r.datesInSelectedRange,recipesByDate:r.recipesByDate}});get stats(){return i(this.#t)}set stats(e){b(this.#t,e)}}class Wd{#e=C(Ue([]));#t=C(null);#n=C(null);constructor(e=[]){b(this.#e,e,!0),this.initializeSmartRange()}get start(){return i(this.#t)}get end(){return i(this.#n)}get dates(){return i(this.#e)}#a=te(()=>[...i(this.#e)].sort()[0]);get firstAvailableDate(){return i(this.#a)}set firstAvailableDate(e){b(this.#a,e)}#o=te(()=>[...i(this.#e)].sort()[i(this.#e).length-1]);get lastAvailableDate(){return i(this.#o)}set lastAvailableDate(e){b(this.#o,e)}get current(){return{start:i(this.#t),end:i(this.#n)}}#c=te(()=>{if(i(this.#e).length===0)return!0;const e=this.lastAvailableDate?new Date(this.lastAvailableDate):new Date;return e.setHours(23,59,59,999),e<new Date});get isEventPassed(){return i(this.#c)}set isEventPassed(e){b(this.#c,e)}#r=te(()=>{if(i(this.#e).length===0)return!1;const e=new Date;return e.setHours(0,0,0,0),i(this.#e).some(t=>new Date(t)>=e)});get hasUpcomingDates(){return i(this.#r)}set hasUpcomingDates(e){b(this.#r,e)}#l=te(()=>i(this.#t)===this.firstAvailableDate&&i(this.#n)===this.lastAvailableDate);get isFullRange(){return i(this.#l)}set isFullRange(e){b(this.#l,e)}#d=te(()=>{if(i(this.#e).length===0)return!1;const e=[...i(this.#e)].sort(),t=new Date;t.setHours(0,0,0,0);const r=e.find(o=>new Date(o)>=t)||null;let a,s;if(r)a=r,s=e[e.length-1];else{const o=e[e.length-1];a=o,s=o}return i(this.#t)===a&&i(this.#n)===s});get isUpcomingRange(){return i(this.#d)}set isUpcomingRange(e){b(this.#d,e)}#u=te(()=>i(this.#e).length===1);get hasSingleDateEvent(){return i(this.#u)}set hasSingleDateEvent(e){b(this.#u,e)}#f=te(()=>!!(i(this.#t)&&i(this.#t)===i(this.#n)));get hasSingleDateInRange(){return i(this.#f)}set hasSingleDateInRange(e){b(this.#f,e)}#s=te(()=>{if(!i(this.#t)||!i(this.#n)||this.isEventPassed)return!1;const e=new Date;return e.setHours(0,0,0,0),new Date(i(this.#t))<e});get hasPastDatesInRange(){return i(this.#s)}set hasPastDatesInRange(e){b(this.#s,e)}setAvailableDates(e){b(this.#e,e,!0),this.initializeSmartRange()}setRange(e,t){if(!e&&!t){b(this.#t,null),b(this.#n,null);return}if(!e||!t){const s=e||t;b(this.#t,s,!0),b(this.#n,s,!0);return}const r=new Date(e)<=new Date(t)?e:t,a=new Date(e)>=new Date(t)?e:t;b(this.#t,r,!0),b(this.#n,a,!0)}selectAll(){i(this.#e).length!==0&&(b(this.#t,i(this.#e)[0],!0),b(this.#n,i(this.#e)[i(this.#e).length-1],!0))}selectUpcoming(){if(i(this.#e).length===0)return;const e=[...i(this.#e)].sort(),t=new Date;t.setHours(0,0,0,0);const r=e.find(a=>new Date(a)>=t)||null;if(r)b(this.#t,r,!0),b(this.#n,e[e.length-1],!0);else{const a=e[e.length-1];b(this.#t,a,!0),b(this.#n,a,!0)}}selectFutureDatesOnly(){const e=new Date;e.setDate(e.getDate()+1),e.setHours(0,0,0,0);const t=i(this.#e).filter(r=>new Date(r)>=e);t.length>0&&(b(this.#t,t[0],!0),b(this.#n,t[t.length-1],!0))}initializeSmartRange(){if(i(this.#e).length===0)return;const e=[...i(this.#e)].sort(),t=this.isEventPassed,r=new Date(e[0])<new Date,a=new Date;let s;t?s=e[0]:r?s=a.toISOString().slice(0,19)+"Z":s=e[0],b(this.#t,s,!0),b(this.#n,e[e.length-1],!0),console.log(`[DateRangeStore] Initialized: ${i(this.#t)} - ${i(this.#n)}`)}}const Os=1e3;class Vd{#e=new hn;#t=new hn;#n=C(null);#a=C(null);#o=C(!1);#c=C(!1);#r=C(null);#l=C(!1);#d=C(!1);#u=C(null);#f=C(null);get currentMainId(){return i(this.#n)}dateStore=new Wd;get dateRange(){return this.dateStore.current}get availableDates(){return this.dateStore.dates}get isEventPassed(){return this.dateStore.isEventPassed}get hasSingleDateEvent(){return this.dateStore.hasSingleDateEvent}get hasSingleDateInRange(){return this.dateStore.hasSingleDateInRange}get hasPastDatesInRange(){return this.dateStore.hasPastDatesInRange}#s=null;#h=null;#v=C(!1);#p=null;#_=C(!1);#y=C();#g=C(Ue([]));get hasPendingConflicts(){return i(this.#g).length>0}get pendingConflicts(){return i(this.#g)}#i=C(Ue({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return i(this.#i)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get loading(){return i(this.#c)}get error(){return i(this.#r)}get lastSync(){return i(this.#u)}get syncing(){return i(this.#l)}setDateRange(e,t){this.dateStore.setRange(e,t)}isFullRange(){return this.dateStore.isFullRange}initializeDateRange(){this.dateStore.initializeSmartRange()}selectUpcomingDates(){this.dateStore.selectUpcoming()}isUpcomingRange(){return this.dateStore.isUpcomingRange}get firstAvailableDate(){return this.dateStore.firstAvailableDate}get lastAvailableDate(){return this.dateStore.lastAvailableDate}selectFutureDatesOnly(){this.dateStore.selectFutureDatesOnly()}get realtimeConnected(){return i(this.#d)}#m=te(()=>{const e=Array.from(this.#e.values()).map(t=>t.data);return console.log(`[ProductsStore] enrichedProducts recalculated: ${e.length} products`),e});get enrichedProducts(){return i(this.#m)}set enrichedProducts(e){b(this.#m,e)}#b=te(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const e=new Date(this.dateRange.start),t=new Date(this.dateRange.end),r=new Map;for(const[a,s]of this.#e){const o=s.data,c=!o.productHugoUuid;if(!o.byDate&&!c||!ni(o,i(this.#i)))continue;let u=!1;o.byDate&&(u=Object.keys(o.byDate).some(f=>{const v=new Date(f);return v>=e&&v<=t})),(u||c)&&r.set(a,s)}return r});get filteredProductsMap(){return i(this.#b)}set filteredProductsMap(e){b(this.#b,e)}#x=te(()=>({total:this.#e.size,frais:Array.from(this.#e.values()).filter(e=>e.pFrais).length,surgel:Array.from(this.#e.values()).filter(e=>e.pSurgel).length,merged:Array.from(this.#e.values()).filter(e=>e.data.isMerged).length}));get stats(){return i(this.#x)}set stats(e){b(this.#x,e)}#E=te(()=>{const e=Array.from(this.#e.values()).map(t=>t.storeInfo?.storeName).filter(Boolean);return[...new Set(e)]});get uniqueStores(){return i(this.#E)}set uniqueStores(e){b(this.#E,e)}#$=te(()=>{const e=Array.from(this.#e.values()).flatMap(t=>t.who||[]);return[...new Set(e)]});get uniqueWho(){return i(this.#$)}set uniqueWho(e){b(this.#$,e)}#P=te(()=>{const e=Array.from(this.#e.values()).map(t=>t.productType).filter(Boolean);return[...new Set(e)]});get uniqueProductTypes(){return i(this.#P)}set uniqueProductTypes(e){b(this.#P,e)}#A=te(()=>{const t=Array.from(this.filteredProductsMap.values()).sort((o,c)=>o.$id.localeCompare(c.$id));if(i(this.#i).groupBy==="none")return{"":t};const r=Object.groupBy(t,o=>i(this.#i).groupBy==="store"?o.storeInfo?.storeName||"Non défini":o.productType||"Non défini"),a=Object.keys(r).sort((o,c)=>o===""?1:c===""?-1:o.localeCompare(c)),s={};return a.forEach(o=>{s[o]=r[o]}),s});get groupedFilteredProducts(){return i(this.#A)}set groupedFilteredProducts(e){b(this.#A,e)}async initialize(e,t){if(!e?.trim())throw new Error("mainId invalide fourni");if(i(this.#o)&&i(this.#n)===e){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${e}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${e}`),b(this.#n,e,!0),b(this.#a,t,!0);try{this.#s=await $d(e)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#r,null);try{if(await this.#D(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let a;a=await Qs(t),console.log(`[ProductsStore] Hugo chargé: ${a.ingredients.length} ingrédients`),b(this.#f,a.hugoContentHash,!0),xd(a.ingredients,e).forEach(c=>{this.#e.set(c.$id,new ur(c,this.dateStore))}),this.dateStore.setAvailableDates([...a.allDates]),await _i(e)||await yi(a.mainGroup_id,a.hugoContentHash,a.allDates,a.name),await this.#M()}this.initializeDateRange(),await this.#N(),await this.#G(),b(this.#o,!0);const r=this.#Q();this.#h=bi(e,r),this.#L(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#k(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const a=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw b(this.#r,a,!0),console.error("[ProductsStore]",a,r),r}}async#D(){if(this.#s)try{const e=await this.#s.loadProducts();e.forEach((r,a)=>{r.status==="isSyncing"&&(r.status="active"),this.#e.set(a,new ur(r,this.dateStore))});const t=await this.#s.loadMetadata();b(this.#u,t.lastSync,!0),this.dateStore.setAvailableDates([...t.allDates]),b(this.#f,t.hugoContentHash||null,!0),console.log(`[ProductsStore] ${e.size} produits chargés du cache IDB, lastSync: ${t.lastSync}`)}catch(e){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",e)}}async#N(){if(i(this.#n)){b(this.#l,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${i(this.#n)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${i(this.#u)}`);const e=await li(i(this.#n),{lastSync:i(this.#u),limit:Os});if(console.log(`[ProductsStore] ${e.length} produits récupérés depuis Appwrite`),e.forEach(t=>{const r=this.#e.get(t.$id);console.log(`[ProductsStore] Sync produit ${t.$id}: existing=${!!r}, who=${t.who}, store=${t.store}`);const a=this.#T(t,r?.data);a.isSynced=!0,r?r.update(a):this.#e.set(t.$id,new ur(a,this.dateStore))}),i(this.#u)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${i(this.#u)}`);const{loadUpdatedPurchases:t}=await qa(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Vs);return{loadUpdatedPurchases:a}},void 0),r=await t(i(this.#n),i(this.#u),Os);console.log(`[ProductsStore] ${r.length} purchases modifiés récupérés`),r.forEach(a=>{if(a.status==="expense")this.#t.set(a.$id,a);else if(a.products?.length){const s=a.products.map(o=>typeof o=="string"?o:o.$id);this.#S(s,a)}})}this.#q(),await this.#C(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(e){throw console.error("[ProductsStore] Erreur lors du sync:",e),e}finally{b(this.#l,!1)}}}async#C(){if(this.#s)try{const e=new Map;this.#e.forEach((t,r)=>{const a=Bn(t.data);a.status==="isSyncing"&&(a.status="active"),e.set(r,a)}),await this.#s.saveProducts(e),await this.#s.saveMetadata({lastSync:i(this.#u),allDates:[...this.dateStore.dates],hugoContentHash:i(this.#f)}),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#O(){if(this.#s)try{const e=new Map;this.#e.forEach((t,r)=>{const a=Bn(t.data);a.status==="isSyncing"&&(a.status="active"),e.set(r,a)}),await this.#s.saveProducts(e),await this.#s.updateLastSync(i(this.#u)),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#M(){if(this.#s)try{const e=new Map;this.#e.forEach((t,r)=>{const a=Bn(t.data);a.status==="isSyncing"&&(a.status="active"),e.set(r,a)}),await this.#s.saveProducts(e),await this.#s.updateLastSync(i(this.#u)),await this.#s.updateAllDates([...this.availableDates]),await this.#s.updateHugoContentHash(i(this.#f)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(e){console.error("[ProductsStore] Erreur persistance cache complet:",e)}}async#I(e){if(!(!this.#s||e.length===0))try{const t=e.map(r=>this.#e.get(r)?.data).filter(r=>r!=null).map(r=>{const a=Bn(r);return a.status==="isSyncing"&&(a.status="active"),this.#s.upsertProduct(a)});t.length>0&&(await Promise.all(t),console.log(`[ProductsStore] ${t.length} produits affectés persistés`))}catch(t){console.error("[ProductsStore] Erreur persistence produits affectés:",t)}}#q(){b(this.#u,new Date().toISOString(),!0)}async#k(){if(!i(this.#a)||i(this.#c))return!1;try{const e=await Sd(i(this.#f),i(this.#a));return e&&!i(this.#v)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${i(this.#a)}, analyse approfondie en cours...`),b(this.#v,!0),await this.#j()),b(this.#y,new Date,!0),e}catch(e){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",e),!1}}async#j(){if(!i(this.#a)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const e=await Qs(i(this.#a)),t=new Map;this.#e.forEach((s,o)=>t.set(o,s.data));const r=await Md(t,e);console.log(`[ProductsStore  - hugo change] ${r.summary}`);for(const[s,o]of t){const c=this.#e.get(s);if(c)c.update(o);else{const l=new ur(o,this.dateStore);this.#e.set(s,l),console.log(`[ProductsStore] ✨ Nouveau ProductModel créé : ${s}`)}}const a=[];for(const[s]of this.#e)t.has(s)||a.push(s);for(const s of a)this.#e.delete(s),console.log(`[ProductsStore] 🗑️ ProductModel supprimé : ${s}`);if(console.log(`[ProductsStore] 🔄 Synchronisation terminée : ${t.size} produits synchronisés, ${this.#e.size} ProductModel actifs`),r.overrideConflicts.length>0&&(b(this.#g,r.overrideConflicts,!0),Fe.error(`${r.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>ze.modalOverride.isOpen=!0}})),r.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${r.mergedProductsUpdated.length} produits fusionnés modifiés`),r.removed.length>0){const s=r.removed.filter(o=>o.purchases?.length||o.stockReel||o.who?.length);s.length>0&&console.log(`[ProductsStore] ℹ️ ${s.length} ingrédients supprimés conservés (données utilisateur)`)}this.dateStore.setAvailableDates([...e.allDates]),b(this.#f,e.hugoContentHash,!0),this.initializeDateRange(),await this.#M(),(r.added.length||r.updated.length||r.removed.length)&&Fe.success(r.summary),b(this.#v,!1)}catch(e){console.error("[ProductsStore] Erreur sync Hugo:",e),Fe.error("Erreur lors de la mise à jour Hugo")}}#L(){this.#p&&clearInterval(this.#p),this.#p=setInterval(async()=>{await this.#k()},6e4)}#U(){this.#p&&(clearInterval(this.#p),this.#p=null)}#T(e,t){return t?Dr(e,t):nd(e)}#K(e){e.length&&(e.forEach(t=>this.#w(t)),console.log(`[ProductsStore] ${e.length} produits upserted`))}#w(e){const t=this.#e.get(e.$id),r=this.#T(e,t?.data);t?t.update(r):(this.dateStore.dates,this.#e.set(e.$id,new ur(r,this.dateStore)))}#H(e){this.#e.delete(e)}async#B(e){if(!e.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",e.$id),[];const t=e.products.map(r=>typeof r=="string"?r:r.$id).filter(Boolean);return this.#V(t,e),t}async#z(e){if(e.products?.length){const t=e.products.map(r=>typeof r=="string"?r:r.$id).filter(Boolean);return this.#S(t,e),t}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[t]=await mi([e.$id]);if(t?.products?.length){const r=t.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#S(r,t),r}return[]}catch(t){return console.error("[ProductsStore] Erreur rechargement purchase:",t),[]}}async#W(e){const t=Array.from(this.#e.values()).map(r=>r.data).filter(r=>r.purchases?.some(a=>a.$id===e));return t.forEach(r=>{this.#w(r)}),t.map(r=>r.$id)}#V(e,t){const r=Ts(t),a=[];e.forEach(s=>{const o=this.#e.get(s);if(o){const c=o.data,l=c.purchases||[];if(!l.some(u=>u.$id===r.$id)){const u=Dr({...c,purchases:[...l,r],status:"active"},c);a.push(u)}}}),a.forEach(s=>{const o=this.#e.get(s.$id);o&&o.update(s)})}#S(e,t){const r=Ts(t),a=[];e.forEach(s=>{const o=this.#e.get(s);if(o){const c=o.data,l=c.purchases||[],u=l.findIndex(f=>f.$id===r.$id);if(u>=0){const f=[...l];f[u]=r;const v=Dr({...c,purchases:f,status:"active"},c);a.push(v)}else{const f=Dr({...c,purchases:[...l,t],status:"active"},c);a.push(f)}}}),a.forEach(s=>{const o=this.#e.get(s.$id);o&&o.update(s)})}#Q(){return{onProductCreate:e=>{if(this.#w(e),this.#s){const t=this.#e.get(e.$id);t&&this.#s.upsertProduct(Bn(t.data)).catch(r=>console.error("[ProductsStore] Erreur persistence produit:",r))}},onProductUpdate:e=>{if(this.#w(e),this.#s){const t=this.#e.get(e.$id);t&&this.#s.upsertProduct(Bn(t.data)).catch(r=>console.error("[ProductsStore] Erreur persistence produit:",r))}},onProductDelete:e=>{this.#H(e),this.#s&&this.#s.deleteProduct(e).catch(t=>console.error("[ProductsStore] Erreur suppression produit:",t))},onPurchaseCreate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}const t=await this.#B(e);await this.#I(t)},onPurchaseUpdate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}this.#t.has(e.$id)&&this.#t.delete(e.$id);const t=await this.#z(e);await this.#I(t)},onPurchaseDelete:async e=>{if(this.#t.has(e)){this.#t.delete(e);return}const t=await this.#W(e);await this.#I(t)},onConnect:()=>{b(this.#d,!0)},onDisconnect:()=>{b(this.#d,!1)},onError:e=>{console.error("[ProductsStore] Erreur realtime:",e)}}}setSearchQuery=Fl(e=>{i(this.#i).searchQuery=e},()=>500);toggleProductType(e){const t=i(this.#i).selectedProductTypes.indexOf(e);t>-1?i(this.#i).selectedProductTypes.splice(t,1):i(this.#i).selectedProductTypes.push(e)}toggleTemperature(e){const t=i(this.#i).selectedTemperatures.indexOf(e);t>-1?i(this.#i).selectedTemperatures.splice(t,1):i(this.#i).selectedTemperatures.push(e)}clearTypeAndTemperatureFilters(){i(this.#i).selectedProductTypes=[],i(this.#i).selectedTemperatures=[]}setGroupBy(e){i(this.#i).groupBy=e}toggleStore(e){const t=i(this.#i).selectedStores.indexOf(e);t>-1?i(this.#i).selectedStores.splice(t,1):i(this.#i).selectedStores.push(e)}toggleWho(e){const t=i(this.#i).selectedWho.indexOf(e);t>-1?i(this.#i).selectedWho.splice(t,1):i(this.#i).selectedWho.push(e)}clearStoreFilters(){i(this.#i).selectedStores=[]}clearWhoFilters(){i(this.#i).selectedWho=[]}handleSort(e){i(this.#i).sortColumn===e?i(this.#i).sortDirection=i(this.#i).sortDirection==="asc"?"desc":"asc":(i(this.#i).sortColumn=e,i(this.#i).sortDirection="asc")}clearFilters(){b(this.#i,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(e){return i(this.#i).sortColumn?[...e].sort((t,r)=>{let a=t[i(this.#i).sortColumn],s=r[i(this.#i).sortColumn];return i(this.#i).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,s=parseFloat(s)||0):i(this.#i).sortColumn==="purchases"&&(a=t.purchases?.length||0,s=r.purchases?.length||0),a<s?i(this.#i).sortDirection==="asc"?-1:1:a>s?i(this.#i).sortDirection==="asc"?1:-1:0}):e}getEnrichedProductById(e){return this.#e.get(e)?.data??null}getProductModelById(e){return this.#e.get(e)??null}hasConversions(e){const t=this.#e.get(e)?.data;return t?.byDate?ei(t.byDate):!1}async forceReload(e,t){await this.clearCache(),await this.initialize(e,t)}async clearCache(){this.#e.clear(),b(this.#u,null),this.#s&&await this.#s.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(e,t){const r=t?"isSyncing":"active";e.forEach(a=>{const s=this.#e.get(a);if(s){const o={...s.data,status:r};s.update(o)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${e.length} produits → ${r}`)}clearSyncStatus(){const e=[];for(const[t,r]of this.#e)r.status==="isSyncing"&&e.push(t);e.length>0&&(this.setSyncStatus(e,!1),console.log(`[ProductsStore] Nettoyage de ${e.length} produits en statut "isSyncing"`))}destroy(){this.#h?.(),this.#h=null,this.#U(),this.#s&&(this.#s.close(),this.#s=null),console.log("[ProductsStore] Ressources nettoyées")}async#G(){if(i(this.#n))try{const{loadOrphanPurchases:e}=await qa(async()=>{const{loadOrphanPurchases:r}=await Promise.resolve().then(()=>Vs);return{loadOrphanPurchases:r}},void 0),t=await e(i(this.#n));t.forEach(r=>{this.#t.set(r.$id,r)}),console.log(`[ProductsStore] ${t.length} dépenses globales chargées`)}catch(e){console.error("[ProductsStore] Erreur chargement dépenses globales:",e)}}#R=te(()=>{let e=0;const t={},r={},a=[];for(const s of this.#t.values()){const o=s.invoiceTotal||s.price||0;e+=o;const c=s.store||"Non défini";t[c]=(t[c]||0)+o;const l=s.who||"Non défini";r[l]=(r[l]||0)+o,a.push(s)}for(const s of this.#e.values()){const o=s.data;if(o.purchases&&o.purchases.length>0){for(const c of o.purchases)if(c.price){e+=c.price;const l=c.store||"Non défini";t[l]=(t[l]||0)+c.price;const u=c.who||"Non défini";r[u]=(r[u]||0)+c.price;const f={...c,_productName:o.productName};a.push(f)}}}return a.sort((s,o)=>{const c=new Date(s.orderDate||s.$createdAt).getTime();return new Date(o.orderDate||o.$createdAt).getTime()-c}),{totalGlobal:e,byStore:t,byWho:r,allPurchases:a}});get financialStats(){return i(this.#R)}set financialStats(e){b(this.#R,e)}}const he=new Vd,ar="main";async function Qd(n,e){try{const{tables:t,config:r}=await je();return(await t.listRows(r.databaseId,ar)).rows.filter(s=>s.createdBy===n||s.contributors?.includes(n)||s.teams?.some(o=>e.includes(o)))}catch(t){throw console.error("[appwrite-events] Error listing events:",t),t}}async function aa(n){try{const{tables:e,config:t}=await je();return await e.getRow(t.databaseId,ar,n)}catch(e){if(e.code===404)return null;throw console.error(`[appwrite-events] Error getting event ${n}:`,e),e}}async function Gd(n,e){try{const{tables:t,config:r}=await je(),a=Ht.unique(),s=[ut.read(St.user(e)),ut.update(St.user(e)),ut.delete(St.user(e))];n.contributors&&n.contributors.forEach(c=>{s.push(ut.read(St.user(c))),s.push(ut.update(St.user(c)))}),n.teams&&n.teams.forEach(c=>{s.push(ut.read(St.team(c))),s.push(ut.update(St.team(c)))});const o=await t.createRow(r.databaseId,ar,a,{name:n.name,dateStart:n.dateStart,dateEnd:n.dateEnd,meals:n.meals?JSON.stringify(n.meals):void 0,createdBy:e,teams:n.teams??[],contributors:n.contributors??[]},s);return console.log(`[appwrite-events] Event created: ${a}`),o}catch(t){throw console.error("[appwrite-events] Error creating event:",t),t}}async function sa(n,e){try{const{tables:t,config:r}=await je(),a={...e};e.meals&&(a.meals=JSON.stringify(e.meals));const s=await t.updateRow(r.databaseId,ar,n,a);return console.log(`[appwrite-events] Event updated: ${n}`),s}catch(t){throw console.error(`[appwrite-events] Error updating event ${n}:`,t),t}}async function Od(n){try{const{tables:e,config:t}=await je();await e.deleteRow(t.databaseId,ar,n),console.log(`[appwrite-events] Event deleted: ${n}`)}catch(e){throw console.error(`[appwrite-events] Error deleting event ${n}:`,e),e}}function oa(n){if(!n.meals)return[];try{return JSON.parse(n.meals)}catch(e){return console.error("[appwrite-events] Error parsing meals:",e),[]}}async function Kd(n,e){const t=await aa(n);if(!t)throw new Error(`Event ${n} not found`);const r=oa(t);return r.push(e),await sa(n,{meals:r})}async function Jd(n,e,t){const r=await aa(n);if(!r)throw new Error(`Event ${n} not found`);const a=oa(r);if(e<0||e>=a.length)throw new Error(`Meal index ${e} out of bounds`);return a[e]=t,await sa(n,{meals:a})}async function Yd(n,e){const t=await aa(n);if(!t)throw new Error(`Event ${n} not found`);const r=oa(t);if(e<0||e>=r.length)throw new Error(`Meal index ${e} out of bounds`);return r.splice(e,1),await sa(n,{meals:r})}async function Xd(n,e,t){const{config:r}=await je(),a=`databases.${r.databaseId}.collections.${ar}.documents`;return oi([a],async s=>{const o=s.payload;if(!(o.createdBy===n||o.contributors?.includes(n)||o.teams?.some(u=>e.includes(u))))return;let l="update";s.events.some(u=>u.includes(".create"))?l="create":s.events.some(u=>u.includes(".delete"))&&(l="delete"),t(o,l)})}class Zd{#e=new hn;#t=C(!1);#n=C(null);#a=C(!1);#o=null;#c=[];#r=null;get loading(){return i(this.#t)}get error(){return i(this.#n)}get isInitialized(){return i(this.#a)}get events(){return Array.from(this.#e.values())}get count(){return this.#e.size}async initialize(){if(i(this.#a)){console.log("[EventsStore] Déjà initialisé");return}console.log("[EventsStore] Initialisation..."),b(this.#t,!0),b(this.#n,null);try{if(!ze.isAuthenticated)throw new Error("Utilisateur non connecté");this.#o=ze.userId,this.#c=ze.userTeams,await this.#l(),this.#d(),b(this.#a,!0),console.log(`[EventsStore] Initialisation complétée: ${this.#e.size} événements`)}catch(e){const t=e instanceof Error?e.message:"Erreur lors de l'initialisation";throw b(this.#n,t,!0),console.error("[EventsStore]",t,e),e}finally{b(this.#t,!1)}}async#l(){try{console.log("[EventsStore] Chargement des événements...");const e=await Qd(this.#o,this.#c);e.forEach(t=>{this.#e.set(t.$id,t)}),console.log(`[EventsStore] ${e.length} événements chargés`)}catch(e){throw console.error("[EventsStore] Erreur lors du chargement:",e),e}}#d(){try{this.#r=Xd(this.#o,this.#c,(e,t)=>{console.log(`[EventsStore] Realtime: ${t} pour ${e.$id}`),t==="create"||t==="update"?this.#e.set(e.$id,e):t==="delete"&&this.#e.delete(e.$id)}),console.log("[EventsStore] Realtime activé")}catch(e){console.error("[EventsStore] Erreur lors de la configuration du realtime:",e)}}getEventById(e){return this.#e.get(e)||null}async fetchEvent(e){try{const t=await aa(e);return t&&this.#e.set(e,t),t}catch(t){return console.error(`[EventsStore] Erreur lors du fetch de ${e}:`,t),null}}getEventsByDateRange(e,t){return this.events.filter(r=>r.dateStart&&r.dateEnd&&r.dateStart>=e&&r.dateEnd<=t)}canEditEvent(e){if(!this.#o)return!1;const t=this.#e.get(e);return t?t.createdBy===this.#o||!!t.teams?.some(r=>this.#c.includes(r)):!1}async createEvent(e){if(!this.#o)throw new Error("Utilisateur non connecté");try{const t=await Gd(e,this.#o);return this.#e.set(t.$id,t),console.log(`[EventsStore] Événement créé: ${t.$id}`),t}catch(t){throw console.error("[EventsStore] Erreur lors de la création:",t),t}}async updateEvent(e,t){try{const r=await sa(e,t);return this.#e.set(e,r),console.log(`[EventsStore] Événement mis à jour: ${e}`),r}catch(r){throw console.error(`[EventsStore] Erreur lors de la mise à jour de ${e}:`,r),r}}async deleteEvent(e){try{await Od(e),this.#e.delete(e),console.log(`[EventsStore] Événement supprimé: ${e}`)}catch(t){throw console.error(`[EventsStore] Erreur lors de la suppression de ${e}:`,t),t}}getMeals(e){const t=this.#e.get(e);return t?oa(t):[]}async addMeal(e,t){try{const r=await Kd(e,t);return this.#e.set(e,r),console.log(`[EventsStore] Meal ajouté à ${e}`),r}catch(r){throw console.error("[EventsStore] Erreur lors de l'ajout du meal:",r),r}}async updateMeal(e,t,r){try{const a=await Jd(e,t,r);return this.#e.set(e,a),console.log(`[EventsStore] Meal ${t} mis à jour dans ${e}`),a}catch(a){throw console.error("[EventsStore] Erreur lors de la mise à jour du meal:",a),a}}async deleteMeal(e,t){try{const r=await Yd(e,t);return this.#e.set(e,r),console.log(`[EventsStore] Meal ${t} supprimé de ${e}`),r}catch(r){throw console.error("[EventsStore] Erreur lors de la suppression du meal:",r),r}}async reload(){console.log("[EventsStore] Rechargement..."),b(this.#t,!0),b(this.#n,null);try{this.#e.clear(),await this.#l(),console.log("[EventsStore] Rechargement complété")}catch(e){const t=e instanceof Error?e.message:"Erreur lors du rechargement";throw b(this.#n,t,!0),console.error("[EventsStore]",t,e),e}finally{b(this.#t,!1)}}destroy(){this.#r&&(this.#r(),this.#r=null),this.#e.clear(),b(this.#a,!1),console.log("[EventsStore] Ressources nettoyées")}}const un=new Zd;class Fd{#e=new hn;#t=C(!1);#n=C(null);#a=C(!1);get loading(){return i(this.#t)}get error(){return i(this.#n)}get isInitialized(){return i(this.#a)}get teams(){return Array.from(this.#e.values())}get teamIds(){return Array.from(this.#e.keys())}get count(){return this.#e.size}async initialize(){if(i(this.#a)){console.log("[TeamsStore] Déjà initialisé");return}console.log("[TeamsStore] Initialisation..."),b(this.#t,!0),b(this.#n,null);try{if(!ze.userId){console.log("[TeamsStore] Utilisateur non connecté"),b(this.#a,!0);return}await this.#o(),b(this.#a,!0),console.log(`[TeamsStore] Initialisation complétée: ${this.#e.size} équipes`)}catch(e){const t=e instanceof Error?e.message:"Erreur lors de l'initialisation";throw b(this.#n,t,!0),console.error("[TeamsStore]",t,e),e}finally{b(this.#t,!1)}}async#o(){try{console.log("[TeamsStore] Chargement des équipes...");const e=await Ai();for(const t of e.teams)try{const r=await Wn(t.$id);this.#e.set(t.$id,{...t,members:r})}catch(r){console.error(`[TeamsStore] Erreur lors du chargement des membres de ${t.$id}:`,r),this.#e.set(t.$id,t)}console.log(`[TeamsStore] ${this.#e.size} équipes chargées`)}catch(e){throw console.error("[TeamsStore] Erreur lors du chargement:",e),e}}getTeamById(e){return this.#e.get(e)||null}async fetchTeam(e){try{const t=await Nd(e);if(t){const r=await Wn(e),a={...t,members:r};return this.#e.set(e,a),a}return null}catch(t){return console.error(`[TeamsStore] Erreur lors du fetch de ${e}:`,t),null}}async isMemberOf(e){return await Bd(e)}getTeamMembers(e){return this.#e.get(e)?.members}async createTeam(e,t){if(!ze.userId)throw new Error("Utilisateur non connecté");try{const r=await Cd(e,t),a=await Wn(r.$id),s={...r,members:a};return this.#e.set(r.$id,s),console.log(`[TeamsStore] Équipe créée: ${r.$id}`),s}catch(r){throw console.error("[TeamsStore] Erreur lors de la création:",r),r}}async updateTeam(e,t){try{const r=await qd(e,t),a=this.#e.get(e),s={...r,members:a?.members};return this.#e.set(e,s),console.log(`[TeamsStore] Équipe mise à jour: ${e}`),s}catch(r){throw console.error(`[TeamsStore] Erreur lors de la mise à jour de ${e}:`,r),r}}async deleteTeam(e){try{await jd(e),this.#e.delete(e),console.log(`[TeamsStore] Équipe supprimée: ${e}`)}catch(t){throw console.error(`[TeamsStore] Erreur lors de la suppression de ${e}:`,t),t}}async inviteMember(e,t,r,a){try{await Ld(e,t,r,a);const s=await Wn(e),o=this.#e.get(e);o&&this.#e.set(e,{...o,members:s}),console.log(`[TeamsStore] Membre invité dans ${e}`)}catch(s){throw console.error("[TeamsStore] Erreur lors de l'invitation:",s),s}}async updateMemberRoles(e,t,r){try{await Ud(e,t,r);const a=await Wn(e),s=this.#e.get(e);s&&this.#e.set(e,{...s,members:a}),console.log(`[TeamsStore] Rôles mis à jour pour ${t}`)}catch(a){throw console.error("[TeamsStore] Erreur lors de la mise à jour des rôles:",a),a}}async removeMember(e,t){try{await Hd(e,t);const r=await Wn(e),a=this.#e.get(e);a&&this.#e.set(e,{...a,members:r}),console.log(`[TeamsStore] Membre ${t} supprimé de ${e}`)}catch(r){throw console.error("[TeamsStore] Erreur lors de la suppression du membre:",r),r}}async reload(){console.log("[TeamsStore] Rechargement..."),b(this.#t,!0),b(this.#n,null);try{this.#e.clear(),await this.#o(),console.log("[TeamsStore] Rechargement complété")}catch(e){const t=e instanceof Error?e.message:"Erreur lors du rechargement";throw b(this.#n,t,!0),console.error("[TeamsStore]",t,e),e}finally{b(this.#t,!1)}}destroy(){this.#e.clear(),b(this.#a,!1),console.log("[TeamsStore] Ressources nettoyées")}}const Ha=new Fd;class eu{dbName="recipes-cache";db=null;version=1;RECIPES_INDEX_STORE="recipes-index";RECIPES_DETAILS_STORE="recipes-details";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";INDEX_HASH_KEY="indexHash";RECIPES_COUNT_KEY="recipesCount";async open(){if(!this.db)return new Promise((e,t)=>{const r=indexedDB.open(this.dbName,this.version);r.onerror=()=>t(r.error),r.onsuccess=()=>{this.db=r.result,console.log(`[RecipesIDBCache] Base ouverte: ${this.dbName}`),e()},r.onupgradeneeded=a=>{const s=a.target.result;s.objectStoreNames.contains(this.RECIPES_INDEX_STORE)||(s.createObjectStore(this.RECIPES_INDEX_STORE,{keyPath:"u"}),console.log("[RecipesIDBCache] Object store 'recipes-index' créé")),s.objectStoreNames.contains(this.RECIPES_DETAILS_STORE)||(s.createObjectStore(this.RECIPES_DETAILS_STORE,{keyPath:"uuid"}),console.log("[RecipesIDBCache] Object store 'recipes-details' créé")),s.objectStoreNames.contains(this.METADATA_STORE)||(s.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[RecipesIDBCache] Object store 'metadata' créé"))}})}async loadRecipesIndex(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,t)=>{const s=this.db.transaction(this.RECIPES_INDEX_STORE,"readonly").objectStore(this.RECIPES_INDEX_STORE).getAll();s.onsuccess=()=>{const o=new Map;s.result.forEach(c=>{o.set(c.u,c)}),console.log(`[RecipesIDBCache] ${o.size} recettes (index) chargées`),e(o)},s.onerror=()=>t(s.error)})}async saveRecipesIndex(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const a=this.db.transaction(this.RECIPES_INDEX_STORE,"readwrite"),s=a.objectStore(this.RECIPES_INDEX_STORE);s.clear(),e.forEach(o=>{s.put(o)}),a.oncomplete=()=>{console.log(`[RecipesIDBCache] ${e.size} recettes (index) sauvegardées`),t()},a.onerror=()=>r(a.error)})}async loadRecipeDetail(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.RECIPES_DETAILS_STORE,"readonly").objectStore(this.RECIPES_DETAILS_STORE).get(e);o.onsuccess=()=>{const c=o.result;c&&console.log(`[RecipesIDBCache] Détails de ${e} chargés depuis le cache`),t(c||null)},o.onerror=()=>r(o.error)})}async saveRecipeDetail(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.RECIPES_DETAILS_STORE,"readwrite").objectStore(this.RECIPES_DETAILS_STORE).put(e);o.onsuccess=()=>{console.log(`[RecipesIDBCache] Détails de ${e.uuid} sauvegardés`),t()},o.onerror=()=>r(o.error)})}async loadAllRecipeDetails(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,t)=>{const s=this.db.transaction(this.RECIPES_DETAILS_STORE,"readonly").objectStore(this.RECIPES_DETAILS_STORE).getAll();s.onsuccess=()=>{const o=new Map;s.result.forEach(c=>{o.set(c.uuid,c)}),console.log(`[RecipesIDBCache] ${o.size} détails de recettes chargés`),e(o)},s.onerror=()=>t(s.error)})}async deleteRecipeDetail(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.RECIPES_DETAILS_STORE,"readwrite").objectStore(this.RECIPES_DETAILS_STORE).delete(e);o.onsuccess=()=>t(),o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,t)=>{const s=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();s.onsuccess=()=>{const o=s.result,c={lastSync:null,indexHash:null,recipesCount:0};o.forEach(l=>{l.key===this.LAST_SYNC_KEY?c.lastSync=l.value:l.key===this.INDEX_HASH_KEY?c.indexHash=l.value:l.key===this.RECIPES_COUNT_KEY&&(c.recipesCount=l.value)}),console.log(`[RecipesIDBCache] Metadata chargées: count=${c.recipesCount}, hash=${c.indexHash}`),e(c)},s.onerror=()=>t(s.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const a=this.db.transaction(this.METADATA_STORE,"readwrite"),s=a.objectStore(this.METADATA_STORE);s.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),s.put({key:this.INDEX_HASH_KEY,value:e.indexHash}),s.put({key:this.RECIPES_COUNT_KEY,value:e.recipesCount}),a.oncomplete=()=>{console.log("[RecipesIDBCache] Metadata sauvegardées"),t()},a.onerror=()=>r(a.error)})}async updateIndexHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.INDEX_HASH_KEY,value:e});o.onsuccess=()=>{console.log(`[RecipesIDBCache] indexHash mis à jour: ${e}`),t()},o.onerror=()=>r(o.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,t)=>{const r=this.db.transaction([this.RECIPES_INDEX_STORE,this.RECIPES_DETAILS_STORE,this.METADATA_STORE],"readwrite");r.objectStore(this.RECIPES_INDEX_STORE).clear(),r.objectStore(this.RECIPES_DETAILS_STORE).clear(),r.objectStore(this.METADATA_STORE).clear(),r.oncomplete=()=>{console.log("[RecipesIDBCache] Cache vidé"),e()},r.onerror=()=>t(r.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[RecipesIDBCache] Connexion fermée"))}}async function tu(){const n=new eu;return await n.open(),n}function nu(n){if(!Array.isArray(n)||n.length<8)throw new Error(`Format d'ingrédient invalide: ${JSON.stringify(n)}`);return{uuid:n[0],originalQuantity:n[1],originalUnit:n[2],normalizedQuantity:n[3],normalizedUnit:n[4],comment:n[5]||"",allergens:Array.isArray(n[6])?n[6]:[],type:n[7]||""}}function ru(n){if(!n||typeof n!="object")throw new Error("Données de recette invalides");const e=[];return Array.isArray(n.ingredients)&&n.ingredients.forEach(t=>{try{e.push(nu(t))}catch(r){console.warn("[parseRecipeData] Ingrédient invalide ignoré:",r)}}),{uuid:n.uuid||"",title:n.title||"",plate:n.plate||1,ingredients:e,preparation:n.preparation||""}}const sr="recettes";async function Ks(){try{const{tables:n,config:e}=await je(),t=[V.equal("isPublished",!1)];return(await n.listRows(e.databaseId,sr,t)).rows}catch(n){throw console.error("[appwrite-recipes] Error listing all recipes:",n),n}}async function Js(n){try{const{tables:e,config:t}=await je();return await e.getRow(t.databaseId,sr,n)}catch(e){if(e.code===404)return null;throw console.error(`[appwrite-recipes] Error getting recipe ${n}:`,e),e}}async function au(n,e){try{const{tables:t,config:r}=await je(),a=Ht.unique(),s=[ut.read(St.user(e)),ut.update(St.user(e)),ut.delete(St.user(e))];n.contributors&&n.contributors.forEach(c=>{s.push(ut.read(St.user(c))),s.push(ut.update(St.user(c)))}),n.teams&&n.teams.forEach(c=>{s.push(ut.read(St.team(c))),s.push(ut.update(St.team(c)))});const o=await t.createRow(r.databaseId,sr,a,{title:n.title,plate:n.plate,ingredients:n.ingredients,preparation:n.preparation,draft:n.draft??!0,typeR:n.typeR,categories:n.categories??[],regime:n.regime??[],isPublished:!1,createdBy:e,teams:n.teams??[],contributors:n.contributors??[]},s);return console.log(`[appwrite-recipes] Recipe created: ${a}`),o}catch(t){throw console.error("[appwrite-recipes] Error creating recipe:",t),t}}async function Mi(n,e){try{const{tables:t,config:r}=await je(),a=await t.updateRow(r.databaseId,sr,n,e);return console.log(`[appwrite-recipes] Recipe updated: ${n}`),a}catch(t){throw console.error(`[appwrite-recipes] Error updating recipe ${n}:`,t),t}}async function su(n){try{const{tables:e,config:t}=await je();await e.deleteRow(t.databaseId,sr,n),console.log(`[appwrite-recipes] Recipe deleted: ${n}`)}catch(e){throw console.error(`[appwrite-recipes] Error deleting recipe ${n}:`,e),e}}async function ou(n,e){return await Mi(n,{isPublished:!0,publishedAt:new Date().toISOString()})}function iu(n,e,t){const a=`databases.${si().APPWRITE_CONFIG.databaseId}.collections.${sr}.documents`;return oi([a],s=>{const o=s.payload;if(!(o.createdBy===n||o.contributors?.includes(n)||o.teams?.some(u=>e.includes(u))))return;let l="update";s.events.some(u=>u.includes(".create"))?l="create":s.events.some(u=>u.includes(".delete"))&&(l="delete"),t(o,l)})}const cu="/api/data.json";class lu{#e=new hn;#t=new hn;#n=C(!1);#a=C(null);#o=C(null);#c=C(!1);#r=null;#l=new Set;#d=null;get loading(){return i(this.#n)}get error(){return i(this.#a)}get lastSync(){return i(this.#o)}get isInitialized(){return i(this.#c)}get recipesIndex(){return Array.from(this.#e.values())}get count(){return this.#e.size}get detailsLoadedCount(){return this.#t.size}async initialize(){if(i(this.#c)){console.log("[RecipesStore] Déjà initialisé");return}console.log("[RecipesStore] Initialisation..."),b(this.#n,!0),b(this.#a,null);try{this.#r=await tu();const e=await this.#r.loadRecipesIndex(),t=await this.#r.loadMetadata();e.size>0&&(console.log(`[RecipesStore] ${e.size} recettes (index) chargées depuis le cache`),this.#e=new hn(e),b(this.#o,t.lastSync,!0)),await this.#u(),ze.userId&&await this.#s(),ze.userId&&await this.#h(),ze.userId&&this.#v(),b(this.#c,!0),console.log(`[RecipesStore] Initialisation complétée: ${this.#e.size} recettes (${this.#y()} published, ${this.#g()} non-published)`)}catch(e){const t=e instanceof Error?e.message:"Erreur lors de l'initialisation";throw b(this.#a,t,!0),console.error("[RecipesStore]",t,e),e}finally{b(this.#n,!1)}}async#u(){try{console.log("[RecipesStore] Chargement de l'index depuis data.json...");const e=await fetch(cu);if(!e.ok)throw new Error(`Erreur HTTP: ${e.status}`);const r=(await e.json()).recipes;if(!Array.isArray(r))throw new Error("Format de données invalide: recipes n'est pas un tableau");const a=await this.#f(JSON.stringify(r));if((await this.#r.loadMetadata()).indexHash===a){console.log("[RecipesStore] Index inchangé, utilisation du cache");return}const o=new Map;r.forEach(c=>{o.set(c.u,c)}),this.#e=new hn(o),b(this.#o,new Date().toISOString(),!0),this.#r&&(await this.#r.saveRecipesIndex(o),await this.#r.saveMetadata({lastSync:i(this.#o),indexHash:a,recipesCount:o.size})),console.log(`[RecipesStore] ${o.size} recettes (index) chargées depuis data.json`)}catch(e){throw console.error("[RecipesStore] Erreur lors du chargement de l'index:",e),e}}async#f(e){const r=new TextEncoder().encode(e),a=await crypto.subtle.digest("SHA-256",r);return Array.from(new Uint8Array(a)).map(o=>o.toString(16).padStart(2,"0")).join("")}async#s(){try{console.log("[RecipesStore] Cleanup des recettes publiées...");const e=await Ks();let t=0;for(const r of e)this.#e.has(r.$id)&&(await ou(r.$id),t++);t>0&&console.log(`[RecipesStore] ${t} recettes marquées comme published`)}catch(e){console.error("[RecipesStore] Erreur lors du cleanup:",e)}}async#h(){try{console.log("[RecipesStore] Chargement des recettes Appwrite...");const e=await Ks();e.forEach(t=>{this.#e.set(t.$id,{u:t.$id,n:t.title,t:this.#p(t.typeR),p:null,isPublished:!1})}),console.log(`[RecipesStore] ${e.length} recettes Appwrite chargées`)}catch(e){console.error("[RecipesStore] Erreur lors du chargement Appwrite:",e)}}#v(){try{this.#d=iu(ze.userId,ze.userTeams,(e,t)=>{console.log(`[RecipesStore] Realtime: ${t} pour ${e.$id}`),t==="create"||t==="update"?(this.#e.set(e.$id,{u:e.$id,n:e.title,t:this.#p(e.typeR),p:null,isPublished:e.isPublished}),this.#t.has(e.$id)&&this.#t.delete(e.$id)):t==="delete"&&(this.#e.delete(e.$id),this.#t.delete(e.$id))}),console.log("[RecipesStore] Realtime activé")}catch(e){console.error("[RecipesStore] Erreur lors de la configuration du realtime:",e)}}#p(e){switch(e){case"entree":return 0;case"plat":return 1;case"dessert":return 2;default:return 0}}#_(e){switch(e){case 0:return"entree";case 1:return"plat";case 2:return"dessert";default:return"plat"}}#y(){return this.recipesIndex.filter(e=>e.isPublished!==!1).length}#g(){return this.recipesIndex.filter(e=>e.isPublished===!1).length}#i(e){return{uuid:e.$id,title:e.title,plate:e.plate,ingredients:JSON.parse(e.ingredients),preparation:e.preparation}}getRecipeIndexByUuid(e){return this.#e.get(e)||null}searchRecipes(e){if(!e.trim())return this.recipesIndex;const t=e.toLowerCase();return this.recipesIndex.filter(r=>r.n.toLowerCase().includes(t))}getRecipesByType(e){return this.recipesIndex.filter(t=>t.t===e)}get availableTypes(){const e=new Set;return this.recipesIndex.forEach(t=>e.add(t.t)),Array.from(e).sort()}async canEditRecipe(e){if(!ze.userId)return!1;const t=this.#e.get(e);if(!t||t.isPublished!==!1)return!1;try{const r=await Js(e);return r?r.createdBy===ze.userId||!!r.contributors?.includes(ze.userId)||!!r.teams?.some(a=>ze.userTeams.includes(a)):!1}catch(r){return console.error(`[RecipesStore] Erreur lors de la vérification des permissions pour ${e}:`,r),!1}}async getRecipeByUuid(e){const t=this.#t.get(e);if(t)return console.log(`[RecipesStore] Détails de ${e} déjà en mémoire`),t;if(this.#l.has(e)){for(console.log(`[RecipesStore] Chargement de ${e} déjà en cours, attente...`);this.#l.has(e);)await new Promise(r=>setTimeout(r,50));return this.#t.get(e)||null}this.#l.add(e);try{if(this.#r){const s=await this.#r.loadRecipeDetail(e);if(s)return this.#t.set(e,s),s}const r=this.#e.get(e);if(!r)return console.warn(`[RecipesStore] Recette ${e} non trouvée dans l'index`),null;let a;if(r.p){console.log(`[RecipesStore] Chargement des détails de ${e} depuis ${r.p}...`);const s=await fetch(r.p);if(!s.ok)throw new Error(`Erreur HTTP: ${s.status}`);const o=await s.json();a=ru(o)}else{console.log(`[RecipesStore] Chargement des détails de ${e} depuis Appwrite...`);const s=await Js(e);if(!s)return console.warn(`[RecipesStore] Recette ${e} non trouvée dans Appwrite`),null;a=this.#i(s)}return this.#t.set(e,a),this.#r&&await this.#r.saveRecipeDetail(a),console.log(`[RecipesStore] Détails de ${e} chargés et mis en cache`),a}catch(r){return console.error(`[RecipesStore] Erreur lors du chargement de ${e}:`,r),null}finally{this.#l.delete(e)}}async preloadRecipes(e){console.log(`[RecipesStore] Préchargement de ${e.length} recettes...`);const t=e.map(r=>this.getRecipeByUuid(r));await Promise.all(t),console.log("[RecipesStore] Préchargement terminé")}async createRecipe(e){if(!ze.userId)throw new Error("Utilisateur non connecté");try{const t={title:e.title,plate:e.plate,ingredients:JSON.stringify(e.ingredients),preparation:e.preparation,draft:!0,typeR:this.#_(0),categories:[],regime:[],teams:[],contributors:[]},r=await au(t,ze.userId);return this.#e.set(r.$id,{u:r.$id,n:r.title,t:this.#p(r.typeR),p:null,isPublished:!1}),this.#i(r)}catch(t){throw console.error("[RecipesStore] Erreur lors de la création:",t),t}}async updateRecipe(e,t){try{const r={};t.title&&(r.title=t.title),t.plate&&(r.plate=t.plate),t.ingredients&&(r.ingredients=JSON.stringify(t.ingredients)),t.preparation&&(r.preparation=t.preparation);const a=await Mi(e,r);return this.#e.set(a.$id,{u:a.$id,n:a.title,t:this.#p(a.typeR),p:null,isPublished:a.isPublished}),this.#t.delete(e),this.#i(a)}catch(r){throw console.error(`[RecipesStore] Erreur lors de la mise à jour de ${e}:`,r),r}}async deleteRecipe(e){try{await su(e),this.#e.delete(e),this.#t.delete(e),console.log(`[RecipesStore] Recette ${e} supprimée`)}catch(t){throw console.error(`[RecipesStore] Erreur lors de la suppression de ${e}:`,t),t}}async forceReloadIndex(){console.log("[RecipesStore] Rechargement forcé de l'index..."),b(this.#n,!0),b(this.#a,null);try{await this.#u(),console.log("[RecipesStore] Rechargement de l'index complété")}catch(e){const t=e instanceof Error?e.message:"Erreur lors du rechargement";throw b(this.#a,t,!0),console.error("[RecipesStore]",t,e),e}finally{b(this.#n,!1)}}async clearCache(){this.#r&&(await this.#r.clear(),console.log("[RecipesStore] Cache vidé")),this.#e.clear(),this.#t.clear(),b(this.#o,null),b(this.#c,!1)}destroy(){this.#d&&(this.#d(),this.#d=null),this.#r&&(this.#r.close(),this.#r=null),this.#e.clear(),this.#t.clear(),this.#l.clear(),b(this.#c,!1),console.log("[RecipesStore] Ressources nettoyées")}}const Wr=new lu;function du(n){const e=n.substring(0,4),t=n.slice(-10);return`${e}_${t}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const uu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var fu=vl("<svg><!><!></svg>");function xe(n,e){J(e,!0);const t=Ie(e,"color",3,"currentColor"),r=Ie(e,"size",3,24),a=Ie(e,"strokeWidth",3,2),s=Ie(e,"absoluteStrokeWidth",3,!1),o=Ie(e,"iconNode",19,()=>[]),c=ye(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var l=fu();Da(l,v=>({...uu,...c,width:r(),height:r(),stroke:t(),"stroke-width":v,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>s()?Number(a())*24/Number(r()):a()]);var u=d(l);et(u,17,o,xt,(v,g)=>{var m=te(()=>Lr(i(g),2));let _=()=>i(m)[0],w=()=>i(m)[1];var S=Z(),I=L(S);Il(I,_,!0,(E,k)=>{Da(E,()=>({...w()}))}),p(v,S)});var f=h(u);be(f,()=>e.children??pe),p(n,l),Y()}function ki(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];xe(n,Se({name:"archive"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function hu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];xe(n,Se({name:"arrow-left"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Ti(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];xe(n,Se({name:"badge-euro"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function pu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];xe(n,Se({name:"bean"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function vu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];xe(n,Se({name:"beef"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function gu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];xe(n,Se({name:"book-open"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Kn(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];xe(n,Se({name:"calendar"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function mu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];xe(n,Se({name:"candy-cane"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function bu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];xe(n,Se({name:"carrot"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Fn(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M20 6 9 17l-5-5"}]];xe(n,Se({name:"check"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Vr(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];xe(n,Se({name:"chef-hat"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Ri(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m6 9 6 6 6-6"}]];xe(n,Se({name:"chevron-down"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function _u(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m9 18 6-6-6-6"}]];xe(n,Se({name:"chevron-right"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function yu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];xe(n,Se({name:"circle-alert"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function wu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];xe(n,Se({name:"circle-arrow-down"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Iu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];xe(n,Se({name:"circle-arrow-right"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Ys(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];xe(n,Se({name:"circle-check-big"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Su(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];xe(n,Se({name:"circle-check"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function xu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];xe(n,Se({name:"circle-x"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Eu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];xe(n,Se({name:"clipboard-check"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Xs(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];xe(n,Se({name:"clipboard-pen-line"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Zs(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];xe(n,Se({name:"clock"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Di(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];xe(n,Se({name:"cloud"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function ia(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];xe(n,Se({name:"cooking-pot"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function $u(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];xe(n,Se({name:"copy"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Pu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];xe(n,Se({name:"egg"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Au(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];xe(n,Se({name:"euro"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Nr(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];xe(n,Se({name:"funnel-x"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Ni(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];xe(n,Se({name:"funnel"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Ci(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];xe(n,Se({name:"history"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Mu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];xe(n,Se({name:"info"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function ku(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]];xe(n,Se({name:"layout-dashboard"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Tu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];xe(n,Se({name:"layout-list"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Ru(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];xe(n,Se({name:"leaf"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Du(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];xe(n,Se({name:"list-todo"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function ca(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];xe(n,Se({name:"loader-circle"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Nu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];xe(n,Se({name:"lock"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Cu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];xe(n,Se({name:"log-in"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function qu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];xe(n,Se({name:"log-out"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function ju(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];xe(n,Se({name:"message-circle-more"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Lu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];xe(n,Se({name:"message-circle-question-mark"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function qi(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];xe(n,Se({name:"message-circle"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function ji(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];xe(n,Se({name:"moon"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Uu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];xe(n,Se({name:"package-check"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Hu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];xe(n,Se({name:"package-plus"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function la(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];xe(n,Se({name:"package"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Bu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];xe(n,Se({name:"pen-line"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Li(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];xe(n,Se({name:"pencil-line"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Un(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];xe(n,Se({name:"plus"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function zu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];xe(n,Se({name:"refrigerator"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Ui(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];xe(n,Se({name:"save"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Hi(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];xe(n,Se({name:"search"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Bi(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];xe(n,Se({name:"shopping-basket"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Rn(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];xe(n,Se({name:"shopping-cart"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function is(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];xe(n,Se({name:"snowflake"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function _r(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];xe(n,Se({name:"square-pen"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Pn(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];xe(n,Se({name:"store"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function zi(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];xe(n,Se({name:"sun"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Wu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];xe(n,Se({name:"tag"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Wi(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];xe(n,Se({name:"thermometer"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Vu(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];xe(n,Se({name:"trash-2"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function da(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];xe(n,Se({name:"triangle-alert"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function cs(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];xe(n,Se({name:"user-plus"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function ls(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];xe(n,Se({name:"user"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function rn(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];xe(n,Se({name:"users"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function ds(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];xe(n,Se({name:"utensils"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function $t(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=ye(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];xe(n,Se({name:"x"},()=>t,{get iconNode(){return r},children:(a,s)=>{var o=Z(),c=L(o);be(c,()=>e.children??pe),p(a,o)},$$slots:{default:!0}})),Y()}function Qu(n,e){const t=n.reduce((a,s)=>{const o=s.isSynced?0:1,c=s.missingQuantities.length;return a+o+c},0),r=e.invoiceTotal?1:0;return t+r}async function Gu(n,e){const t=n.filter(l=>!l.isSynced).map(l=>({productId:l.productId,productData:l.productData}));let r=null;try{const{account:l}=await je();r=(await l.get()).$id}catch(l){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",l)}const a=e.purchaseStatus||"delivered";let s=e.purchaseDeliveryDate||null;a==="delivered"&&!s&&(s=new Date().toISOString());const o=n.flatMap(l=>l.missingQuantities.map(u=>({productId:l.productId,quantity:u.q,unit:u.u,status:a,notes:e.notes||"",store:e.store||"",who:e.who||void 0,price:void 0,orderDate:null,deliveryDate:s,createdBy:r})));return{mainId:n[0]?.productData?.mainId,batchData:{productsToCreate:t,purchasesToCreate:o},invoiceData:e}}async function Ou(n,e,t){if(!e?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};e.forEach(g=>{g.productData&&(g.productData.mainId=n)});const r=Qu(e,t);console.log(`[Appwrite Interactions] Achat groupé: ${e.length} produits, ${r} opérations totales`);const a=100,s=[];if(r<=a)s.push(e);else{let g=[],m=0;for(const _ of e){const w=(_.isSynced?0:1)+_.missingQuantities.length;m+w>a?(g.length>0&&s.push(g),g=[_],m=w):(g.push(_),m+=w)}g.length>0&&s.push(g)}console.log(`[Appwrite Interactions] Découpage en ${s.length} lots pour respecter la limite de 100 opérations`);const o=[];let c=0,l=0,u=0;for(let g=0;g<s.length;g++){const m=s[g];console.log(`[Appwrite Interactions] Exécution du lot ${g+1}/${s.length} (${m.length} produits)`);try{const _=await Gu(m,t),w=await ii(()=>Ku(_),{operationName:`Lot ${g+1}/${s.length}`,maxAutoRetries:1,autoRetryDelay:2e3});if(!w)throw new Error("Opération annulée ou échouée après tentatives");if(o.push(w),w.success)c+=w.productsCreated,l+=w.purchasesCreated,u+=w.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${g+1}: ${w.error}`);break}}catch(_){const w=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${g+1}:`,_),o.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:t.invoiceId,error:w,timestamp:new Date().toISOString()});break}}const f=o.every(g=>g.success),v=o.some(g=>!g.success);return{success:f,results:o,totalProductsCreated:c,totalPurchasesCreated:l,totalExpensesCreated:u,error:v?"Un ou plusieurs lots ont échoué":void 0}}async function Ku(n){try{const e=si(),{functions:t}=await je(),r={operation:"createGroupPurchaseWithSync",data:n};console.log(`[Appwrite Interactions] Exécution du lot: ${n.batchData.productsToCreate.length} produits à créer, ${n.batchData.purchasesToCreate.length} achats créer`);const a=await t.createExecution(e.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(r),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const s=JSON.parse(a.responseBody);return s.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${s.productsCreated} produits créés, ${s.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",s.error),s}catch(e){console.error("[Appwrite Interactions] Erreur exécution lot:",e);const t=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:n.invoiceData.invoiceId,error:t,timestamp:new Date().toISOString()}}}var Ju=(n,e,t)=>e(i(t).id),Yu=y("<span> </span>"),Xu=y('<button><!> <span class="max-w-32 truncate"> </span> <!> <!></button>'),Zu=y('<span class="flex items-center gap-1"><!> </span>'),Fu=y('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),ef=y('<div class="flex flex-wrap gap-2"></div> <!>',1);function yr(n,e){J(e,!0);let t=Ie(e,"badgeSize",3,"btn-lg"),r=Ie(e,"color",3,"primary"),a=Ie(e,"badgeStyle",3,""),s=Ie(e,"onToggleItem",3,()=>{}),o=Ie(e,"showStats",3,!1),c=Ie(e,"showIcon",3,!0),l=C(Ue({}));Kt(()=>{const S={};e.items.forEach(I=>{S[I.id]=I.selected??!0}),b(l,S,!0)});function u(S){i(l)[S]=!i(l)[S],s()(S)}const f=te(()=>Object.values(i(l)).filter(Boolean).length),v=te(()=>Object.values(i(l)).filter(S=>!S).length);var g=ef(),m=L(g);et(m,21,()=>e.items,S=>S.id,(S,I)=>{const E=te(()=>i(l)[i(I).id]);var k=Xu();k.__click=[Ju,u,I];var P=d(k);{var A=D=>{var ne=Z(),se=L(ne);Tn(se,()=>i(I).icon,(ae,R)=>{R(ae,{class:"h-3 w-3",get title(){return i(I).title}})}),p(D,ne)};$(P,D=>{i(I).icon&&D(A)})}var T=h(P,2),U=d(T),x=h(T,2);{var z=D=>{var ne=Yu(),se=d(ne);B(()=>{Te(ne,1,`badge badge-sm badge-${r()??""}`),j(se,i(I).badge)}),p(D,ne)};$(x,D=>{i(I).badge&&D(z)})}var F=h(x,2);{var G=D=>{var ne=Z(),se=L(ne);{var ae=H=>{Fn(H,{size:16})},R=H=>{Un(H,{size:16})};$(se,H=>{i(E)?H(ae):H(R,!1)})}p(D,ne)};$(F,D=>{c()&&D(G)})}B(()=>{Te(k,1,`btn ${t()??""} btn-${r()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${i(E)?`${a()} hover:line-through `:"btn-dash hover:border-solid "}`),sn(k,"title",i(E)?"Retirer de la liste":"Réajouter à la liste"),j(U,i(I).label)}),p(S,k)});var _=h(m,2);{var w=S=>{var I=Fu(),E=d(I),k=d(E),P=d(k);Fn(P,{class:"text-success h-3 w-3"});var A=h(P),T=h(k,2);{var U=F=>{var G=Zu(),D=d(G);$t(D,{class:"text-error h-3 w-3"});var ne=h(D);B(()=>j(ne,` ${i(v)??""} retirés`)),p(F,G)};$(T,F=>{i(v)>0&&F(U)})}var x=h(E,2),z=d(x);B(()=>{j(A,` ${i(f)??""} actifs`),j(z,`Total: ${e.items.length??""} items`)}),p(S,I)};$(_,S=>{o()&&S(w)})}p(n,g),Y()}Xe(["click"]);function tf(n,e){b(e,!i(e))}var nf=y('<span class="text-base-content font-semibold"> </span>'),rf=y('<div class="text-base-content/80 flex-1"> </div>'),af=y('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),sf=y('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),of=y('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Vi(n,e){let t=Ie(e,"icon",3,Mu),r=Ie(e,"class",3,""),a=Ie(e,"initiallyOpen",3,!1),s=t(),o=C(Ue(a())),c=Ue(e.children);var l=of(),u=d(l);u.__click=[tf,o];var f=d(u),v=d(f);s(v,{size:24,class:"text-base-content me-4 flex-shrink-0"});var g=h(v,2);{var m=P=>{var A=nf(),T=d(A);B(()=>j(T,e.title)),p(P,A)};$(g,P=>{e.title&&P(m)})}var _=h(f,2);{var w=P=>{var A=rf(),T=d(A);B(()=>j(T,e.contentVisible)),p(P,A)};$(_,P=>{e.contentVisible&&P(w)})}var S=h(_,2);{var I=P=>{var A=af(),T=d(A),U=d(T);{var x=G=>{var D=dt("en savoir plus");p(G,D)},z=G=>{var D=dt("masquer");p(G,D)};$(U,G=>{i(o)?G(z,!1):G(x)})}var F=h(T,2);{let G=te(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${i(o)?"rotate-180":""}`);Ri(F,{get class(){return i(G)}})}p(P,A)};$(S,P=>{c&&P(I)})}var E=h(u,2);{var k=P=>{var A=sf(),T=d(A),U=d(T);be(U,()=>e.children??pe),B(()=>Te(A,1,`overflow-hidden transition-all duration-200 ${i(o)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),p(P,A)};$(E,P=>{c&&P(k)})}B(()=>{Te(l,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${r()}`),Oo(l,e.style),Te(u,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(c&&"hover:cursor-pointer")??""}`),sn(u,"aria-expanded",i(o))}),p(n,l)}Xe(["click"]);var cf=y('<div class="mb-1 text-xs opacity-70"> </div>'),lf=(n,e,t)=>e(i(t)),df=y("<button><!> </button>"),uf=y('<div><!> <div class="ms-1 flex flex-wrap items-center gap-1"><!> <!></div></div>');function us(n,e){J(e,!0);let t=Ie(e,"maxSuggestions",3,8),r=Ie(e,"buttonSize",3,"btn-xs"),a=Ie(e,"buttonVariant",3,"btn-soft"),s=Ie(e,"disabled",3,!1);const o=te(()=>e.suggestions.slice(0,t()));function c(v){!s()&&!v.disabled&&e.onSuggestionClick(v)}var l=Z(),u=L(l);{var f=v=>{var g=uf(),m=d(g);{var _=E=>{var k=cf(),P=d(k);B(()=>j(P,e.title)),p(E,k)};$(m,E=>{e.title&&E(_)})}var w=h(m,2),S=d(w);Li(S,{class:"text-base-content/70 mr-1",size:14});var I=h(S,2);et(I,17,()=>i(o),E=>E.id,(E,k)=>{var P=df();P.__click=[lf,c,k];var A=d(P);{var T=x=>{var z=Z(),F=L(z);Tn(F,()=>i(k).icon,(G,D)=>{D(G,{class:"h-3 w-3"})}),p(x,z)};$(A,x=>{i(k).icon&&x(T)})}var U=h(A);B(()=>{Te(P,1,`btn btn-primary ${r()??""} ${a()??""}`),P.disabled=s()||i(k).disabled,sn(P,"title",i(k).disabled?"Déjà sélectionné":i(k).label),j(U,` ${i(k).label??""}`)}),p(E,P)}),p(v,g)};$(u,v=>{i(o).length>0&&v(f)})}p(n,l),Y()}Xe(["click"]);const ff=[{value:"kg",label:"kg"},{value:"gr.",label:"gr."},{value:"l.",label:"l."},{value:"ml",label:"ml"},{value:"unité",label:"unité·s"},{value:"bottes",label:"botte·s"}];var hf=y("<option> </option>"),pf=y('<fieldset class="fieldset"><div class="flex gap-2"><label class="input w-32"><!> <input type="number" step="1" min="0" placeholder="Quantité" required/></label> <select class="custom-select input w-28" required><option disabled selected>Unité</option><!></select></div></fieldset>');function ua(n,e){J(e,!0);let t=Ie(e,"quantity",15),r=Ie(e,"unit",15),a=Ie(e,"disabled",3,!1);var s=pf(),o=d(s),c=d(o),l=d(c);la(l,{class:"h-4 w-4 opacity-50"});var u=h(l,2),f=h(c,2),v=d(f);v.value=v.__value="";var g=h(v);et(g,17,()=>ff,xt,(m,_)=>{let w=()=>i(_).value,S=()=>i(_).label;var I=hf(),E=d(I),k={};B(()=>{j(E,S()),k!==(k=w())&&(I.value=(I.__value=w())??"")}),p(m,I)}),B(()=>{u.disabled=a(),f.disabled=a()}),Oe(u,t),Zn(f,r),p(n,s),Y()}var vf=y('<div><label class="input w-72"><!> <input/></label> <!></div>');function or(n,e){J(e,!0);let t=Ie(e,"value",15),r=Ie(e,"suggestions",19,()=>[]),a=Ie(e,"disabled",3,!1),s=Ie(e,"flexCol",3,!1),o=ye(e,["$$slots","$$events","$$legacy","value","suggestions","disabled","flexCol"]);const c=te(()=>r().map(_=>({id:_,label:_,disabled:_===t()})));var l=vf(),u=d(l),f=d(u);Pn(f,{class:"h-4 w-4 opacity-50"});var v=h(f,2);Da(v,()=>({type:"text",placeholder:"Magasin",maxlength:"50",disabled:a(),...o}),void 0,void 0,void 0,!0);var g=h(u,2);{var m=_=>{us(_,{get suggestions(){return i(c)},onSuggestionClick:w=>t(w.label),buttonSize:"btn-xs"})};$(g,_=>{r().length>0&&_(m)})}B(()=>Te(l,1,`flex ${s()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`)),Oe(v,t),p(n,l),Y()}var gf=y('<div><label class="input w-72"><!> <input type="text" placeholder="Qui" maxlength="25"/></label> <!></div>');function Pr(n,e){J(e,!0);let t=Ie(e,"value",15),r=Ie(e,"suggestions",19,()=>[]),a=Ie(e,"disabled",3,!1),s=Ie(e,"flexCol",3,!1);const o=te(()=>r().map(m=>({id:m,label:m,disabled:m===t()})));var c=gf(),l=d(c),u=d(l);ls(u,{class:"h-4 w-4 opacity-50"});var f=h(u,2);f.__keydown=function(...m){e.onkeydown?.apply(this,m)};var v=h(l,2);{var g=m=>{us(m,{get suggestions(){return i(o)},onSuggestionClick:_=>t(_.label),buttonSize:"btn-xs"})};$(v,m=>{r().length>0&&m(g)})}B(()=>{Te(c,1,`flex ${s()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`),f.disabled=a()}),Oe(f,t),p(n,c),Y()}Xe(["keydown"]);var mf=y('<textarea class="textarea w-full text-sm" placeholder="Commentaire (optionnel)" rows="2" maxlength="250"></textarea>');function ir(n,e){J(e,!0);let t=Ie(e,"value",15),r=Ie(e,"disabled",3,!1);var a=mf();B(()=>a.disabled=r()),Oe(a,t),p(n,a),Y()}var bf=y('<label class="input w-28"><!> <input type="number" step="1" min="0" placeholder="0.00"/></label>');function fs(n,e){J(e,!0);let t=Ie(e,"value",15),r=Ie(e,"disabled",3,!1);var a=bf(),s=d(a);Au(s,{class:"h-4 w-4 opacity-50"});var o=h(s,2);B(()=>o.disabled=r()),Oe(o,t),p(n,a),Y()}var _f=y('<label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label>'),yf=y(`<div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Acheté</option><option>Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div>`);function Qi(n,e){J(e,!0);let t=Ie(e,"status",15),r=Ie(e,"deliveryDate",15),a=Ie(e,"disabled",3,!1);var s=yf(),o=d(s),c=d(o),l=d(c);l.value=l.__value="delivered";var u=h(l);u.value=u.__value="ordered";var f=h(c,2),v=h(o,2);{var g=m=>{var _=_f(),w=h(d(_),2);B(()=>w.disabled=a()),Oe(w,r),p(m,_)};$(v,m=>{t()==="ordered"&&m(g)})}B(()=>{c.disabled=a(),Te(f,1,`label ${t()==="delivered"?"":"hidden"}`)}),Zn(c,t),p(n,s),Y()}function Fs(n,e,t){i(e)||t.onClose()}var wf=y('<div class="alert alert-error"><!> <span> </span></div>'),If=y('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),Sf=y(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes <strong>pour la période sélectionnée</strong>, c'est à dire le besoin total pour chaque produit sur cette
            période moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),xf=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Ef=y("<!> ",1),$f=y(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="mb-4 flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><!> <!></div> <!> <!> <div><!></div></div> <div class="mb-4"><h4 class=" font-medium">Produits concernés</h4> <div class="text-base-content/70 mb-4">les quantités manquantes du <span class="badge badge-info badge-sm"> </span> au <span class="badge badge-info badge-sm"> </span> pour les produits suivant seront déclarés "acheté"</div> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function Pf(n,e){J(e,!0);let t=C(!1),r=C(null),a=C(null),s=Ue({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),o=C(Ue(new Set));Kt(()=>{b(o,new Set(e.products.map(X=>X.$id)),!0)});const c=te(()=>e.products.filter(X=>i(o).has(X.$id))),l=te(()=>i(c).length!==0),u=te(()=>{const X=he.dateRange;let O="";return X?.start&&X?.end&&(X.start===X.end?O=` - ${Sn(X.start)}`:O=` - Du ${Sn(X.start)} au ${Sn(X.end)}`),`Achat groupé (${i(c).length} produits sélectionnés)${O}`});async function f(){if(!i(l)||i(t))return;b(t,!0),b(r,null),b(a,null);const X=`FACTURE_${Date.now()}`,O=i(c).map(ce=>ce.$id);he.setSyncStatus(O,!0),ze.backgroundOperation={isRunning:!0,name:`Achat groupé (${i(c).length} produits)`,progress:0};const fe=[];for(const ce of i(c)){const Q=(he.getProductModelById(ce.$id)?.stats.missingQuantities||[]).filter(_e=>_e.q<0).map(_e=>({..._e,q:Math.abs(_e.q)}));fe.push({productId:ce.$id,isSynced:ce.isSynced,productData:ce,missingQuantities:Q})}const de={invoiceId:X,invoiceTotal:s.expense||void 0,store:s.store.trim()||void 0,notes:s.notes||`Achat groupé pour ${i(c).length} produits`,who:s.who.trim()||void 0,purchaseStatus:s.status||"delivered",purchaseDeliveryDate:s.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${fe.length} produits...`),e.onClose();try{const ce=await Ou(he.currentMainId,fe,de);if(ce.success)console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${ce.totalProductsCreated} produits synchronisés, ${ce.totalPurchasesCreated} achats créés, ${ce.totalExpensesCreated} dépenses globales`),Fe.success(`Achat groupé réussi ! ${ce.totalPurchasesCreated} achats créés.`),e.onSuccess?.();else throw new Error(ce.error||"Erreur lors de la création de l'achat groupé")}catch(ce){const qe=ce instanceof Error?ce.message:"Erreur inconnue";console.error("[GroupPurchaseModal] Erreur création achat groupé:",ce),Fe.error(`Erreur achat groupé: ${qe}`),he.clearSyncStatus()}finally{b(t,!1),ze.backgroundOperation={isRunning:!1,name:"",progress:0}}}function v(X){const O=new Set(i(o));O.has(X)?O.delete(X):O.add(X),b(o,O,!0)}const g=te(()=>e.products.map(X=>{const O=he.getProductModelById(X.$id);return{id:X.$id,label:X.productName,title:`${X.productName} - Manque: ${O?.stats.formattedMissingQuantities||"-"}`,badge:O?.stats.formattedMissingQuantities||"-"}}));var m=$f(),_=d(m),w=d(_),S=d(w),I=d(S);Rn(I,{class:"h-5 w-5"});var E=h(I),k=h(S,2);k.__click=[Fs,t,e];var P=d(k);$t(P,{class:"h-4 w-4"});var A=h(w,2),T=d(A);{var U=X=>{var O=wf(),fe=d(O);da(fe,{class:"h-4 w-4"});var de=h(fe,2),ce=d(de);B(()=>j(ce,i(r))),p(X,O)};$(T,X=>{i(r)&&X(U)})}var x=h(T,2);{var z=X=>{var O=If(),fe=d(O);Fn(fe,{class:"h-4 w-4"});var de=h(fe,2),ce=d(de),qe=h(ce);{var Q=Qe=>{var Ze=dt("+ 1 dépense globale");p(Qe,Ze)};$(qe,Qe=>{i(a).expense&&Qe(Q)})}var _e=h(qe,2);{var Ve=Qe=>{var Ze=dt();B(()=>j(Ze,`(traité en ${i(a).batches??""} lots)`)),p(Qe,Ze)};$(_e,Qe=>{i(a).batches&&i(a).batches>1&&Qe(Ve)})}B(()=>j(ce,`Achat groupé créé avec succès ! ${i(a).purchases??""} produit(s) validés `)),p(X,O)};$(x,X=>{i(a)&&X(z)})}var F=h(x,2),G=d(F);Vi(G,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit sur la période sélectionnée.",class:"bg-base-200",children:(X,O)=>{var fe=Sf();p(X,fe)},$$slots:{default:!0}});var D=h(F,2),ne=h(d(D),2),se=d(ne);or(se,{get suggestions(){return he.uniqueStores},get disabled(){return i(t)},get value(){return s.store},set value(X){s.store=X}});var ae=h(se,2);Pr(ae,{get suggestions(){return he.uniqueWho},get disabled(){return i(t)},get value(){return s.who},set value(X){s.who=X}});var R=h(ne,2);fs(R,{get disabled(){return i(t)},get value(){return s.expense},set value(X){s.expense=X}});var H=h(R,2);Qi(H,{get disabled(){return i(t)},get status(){return s.status},set status(X){s.status=X},get deliveryDate(){return s.deliveryDate},set deliveryDate(X){s.deliveryDate=X}});var me=h(H,2),ve=d(me);ir(ve,{get disabled(){return i(t)},get value(){return s.notes},set value(X){s.notes=X}});var re=h(D,2),ue=h(d(re),2),le=h(d(ue)),K=d(le),W=h(le,2),N=d(W),ee=h(ue,2);yr(ee,{get items(){return i(g)},onToggleItem:v,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var q=h(re,2),oe=d(q);oe.__click=[Fs,t,e];var ie=h(oe,2);ie.__click=f;var ge=d(ie);{var we=X=>{var O=xf();p(X,O)},Ae=X=>{var O=Ef(),fe=L(O);Rn(fe,{class:"h-4 w-4"});var de=h(fe);B(()=>j(de,` Valider ${i(c).length??""} produit(s)`)),p(X,O)};$(ge,X=>{i(t)?X(we):X(Ae,!1)})}B((X,O)=>{j(E,` ${i(u)??""}`),k.disabled=i(t),j(K,X),j(N,O),oe.disabled=i(t),ie.disabled=i(t)||!i(l)},[()=>Sn(he.dateRange.start),()=>Sn(he.dateRange.start)]),p(n,m),Y()}Xe(["click"]);function xa(n,e,t,r){e(!1),b(t,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0),b(r,null)}var Af=y('<div class="alert alert-error text-sm"><!> <span> </span></div>'),Mf=(n,e)=>e(!0),kf=y('<span class="loading loading-spinner"></span>'),Tf=y('<span class="loading loading-spinner"></span>'),Rf=y('<div role="dialog"><div class="modal-box relative w-10/12 max-w-5xl"><button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" aria-label="Fermer"><!></button> <h3 class="text-lg font-bold">Ajouter un produit</h3> <form class="mt-6 space-y-4"><!> <fieldset class="space-y-4"><div class="flex flex-wrap gap-4"><fieldset class="fieldset"><label class="input w-72"><!> <input id="product-name" type="text" placeholder="Nom du produit"/></label></fieldset> <!></div> <fieldset class="fieldset"><div class="flex flex-wrap items-baseline gap-2"><label class="input w-72"><!> <input id="product-type" type="text" placeholder="type / catégorie"/></label> <!></div></fieldset> <!> <!> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-success"/> <span class="label-text flex items-center gap-2"><!> Produit frais</span></label></fieldset> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-info"/> <span class="label-text flex items-center gap-2"><!> Produit surgelé</span></label></fieldset></fieldset> <div class="modal-action flex justify-between"><button type="button" class="btn btn-ghost">Annuler</button> <div class="flex gap-2"><button type="button" class="btn btn-secondary"><!> Ajouter et créer un nouveau</button> <button type="submit" class="btn btn-primary"><!> Ajouter et fermer</button></div></div></form></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></div>');function Df(n,e){J(e,!0);let t=Ie(e,"open",15,!1),r=C(!1),a=C(null),s=C(!1),o=C(Ue({productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""}));const c=te(()=>i(o).productName.trim().length>0&&i(o).productType.trim().length>0),l=te(()=>he.uniqueProductTypes.map(Q=>({id:Q,label:Q})));async function u(Q=!1){if(!(!i(c)||i(r))){b(r,!0),b(a,null),b(s,!1);try{if(!he.currentMainId)throw new Error("Aucun événement principal sélectionné");const _e={productName:i(o).productName.trim(),productType:i(o).productType.trim(),store:i(o).store.trim()?{storeName:i(o).store.trim()}:void 0,who:i(o).who.trim()?[i(o).who.trim()]:void 0,pFrais:i(o).pFrais,pSurgel:i(o).pSurgel,quantity:i(o).quantity?{q:i(o).quantity,u:i(o).unit.trim()||"pièces"}:void 0};await di(_e,he.currentMainId),b(s,!0),Q?(i(o).productName="",i(o).quantity=void 0,i(o).unit="",i(o).pFrais=!1,i(o).pSurgel=!1,setTimeout(()=>{document.getElementById("product-name")?.focus()},100)):(t(!1),b(o,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0))}catch(_e){console.error("Error creating product:",_e),b(a,"Erreur lors de la création du produit. Veuillez réessayer.")}finally{b(r,!1)}}}Kt(()=>{t()&&setTimeout(()=>{document.getElementById("product-name")?.focus()},50)});var f=Rf();let v;var g=d(f),m=d(g);m.__click=[xa,t,o,a];var _=d(m);$t(_,{size:20});var w=h(m,4),S=d(w);{var I=Q=>{var _e=Af(),Ve=d(_e);da(Ve,{size:18});var Qe=h(Ve,2),Ze=d(Qe);B(()=>j(Ze,i(a))),p(Q,_e)};$(S,Q=>{i(a)&&Q(I)})}var E=h(S,2),k=d(E),P=d(k),A=d(P),T=d(A);Hu(T,{class:"text-base-content/50 h-5 w-5"});var U=h(T,2),x=h(P,2);ua(x,{get disabled(){return i(r)},get quantity(){return i(o).quantity},set quantity(Q){i(o).quantity=Q},get unit(){return i(o).unit},set unit(Q){i(o).unit=Q}});var z=h(k,2),F=d(z),G=d(F),D=d(G);Wu(D,{class:"text-base-content/50 h-5 w-5"});var ne=h(D,2),se=h(G,2);us(se,{get suggestions(){return i(l)},onSuggestionClick:Q=>i(o).productType=Q.label,get disabled(){return i(r)}});var ae=h(z,2);or(ae,{get suggestions(){return he.uniqueStores},get disabled(){return i(r)},get value(){return i(o).store},set value(Q){i(o).store=Q}});var R=h(ae,2);Pr(R,{get suggestions(){return he.uniqueWho},get disabled(){return i(r)},get value(){return i(o).who},set value(Q){i(o).who=Q}});var H=h(R,2),me=d(H),ve=d(me),re=h(ve,2),ue=d(re);Wi(ue,{class:"h-4 w-4"});var le=h(H,2),K=d(le),W=d(K),N=h(W,2),ee=d(N);is(ee,{class:"h-4 w-4"});var q=h(E,2),oe=d(q);oe.__click=[xa,t,o,a];var ie=h(oe,2),ge=d(ie);ge.__click=[Mf,u];var we=d(ge);{var Ae=Q=>{var _e=kf();p(Q,_e)},X=Q=>{Un(Q,{size:18})};$(we,Q=>{i(r)?Q(Ae):Q(X,!1)})}var O=h(ge,2),fe=d(O);{var de=Q=>{var _e=Tf();p(Q,_e)};$(fe,Q=>{i(r)&&Q(de)})}var ce=h(g,2),qe=d(ce);qe.__click=[xa,t,o,a],B(Q=>{v=Te(f,1,"modal",null,v,Q),E.disabled=i(r),U.disabled=i(r),ne.disabled=i(r),ve.disabled=i(r),W.disabled=i(r),oe.disabled=i(r),ge.disabled=i(r)||!i(o).productName,O.disabled=i(r)||!i(o).productName},[()=>({"modal-open":t()})]),On("submit",w,Q=>{Q.preventDefault(),u(!1)}),Oe(U,()=>i(o).productName,Q=>i(o).productName=Q),Oe(ne,()=>i(o).productType,Q=>i(o).productType=Q),Ca(ve,()=>i(o).pFrais,Q=>i(o).pFrais=Q),Ca(W,()=>i(o).pSurgel,Q=>i(o).pSurgel=Q),p(n,f),Y()}Xe(["click"]);function Ba(n){switch(n.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:pu};case"animaux":return{displayName:"Viandes et Poissons",icon:vu};case"legumes":return{displayName:"Fruits et Légumes",icon:bu};case"sucres":return{displayName:"Sucrées",icon:mu};case"lof":return{displayName:"L.O.F",icon:Pu};case"autres":return{displayName:"Autres",icon:Vr};case"epices":return{displayName:"Assaisonnements",icon:Ru};case"frais":return{displayName:"Produits Frais",icon:zu};default:return{displayName:n,icon:la}}}function za(n,e){return e==="kg"?{quantity:n*1e3,unit:"gr."}:e==="l."?{quantity:n*1e3,unit:"ml"}:{quantity:n,unit:e}}function hs(n,e){let t,r;if(e==="gr."&&n>=1e3){const a=n/1e3;t=Ea(a),r="kg"}else if(e==="ml"&&n>=1e3){const a=n/1e3;t=Ea(a),r="l"}else t=Ea(n),r=e;return`${t} ${r}`}function Ea(n){return(Math.round(n*10)/10).toString().replace(/\.0$/,"")}function fa(n){if(!n)return"-";try{return new Date(n).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return n}}function Nf(n){if(!n)return"";try{return new Date(n).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"})}catch{return n}}function Wa(n){switch(n){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function eo(n){return n?fa(n):"-"}function Cf(n){if(!n?.length)return[];const e=n.reduce((t,r)=>{const a=r.status||"direct",s=r.unit||"unit",o=`${a}_${s}`;if(!t[o]){const c=Wa(a);t[o]={status:a,unit:s,quantity:0,badgeClass:c.class,badgeText:c.text,icon:qf(a),deliveryDate:a==="ordered"&&r.deliveryDate?Nf(r.deliveryDate):void 0}}return t[o].quantity+=r.quantity||0,t},{});return Object.values(e).map(t=>({...t,quantity:hs(t.quantity,t.unit).replace(` ${t.unit}`,"")}))}function qf(n){switch(n){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"Check";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}class jf{constructor(e,t="recettes"){this.productId=e,this.currentTab=t,this.initForms()}#e=C(!1);get loading(){return i(this.#e)}set loading(e){b(this.#e,e,!0)}#t=C(null);get error(){return i(this.#t)}set error(e){b(this.#t,e,!0)}#n=C("recettes");get currentTab(){return i(this.#n)}set currentTab(e){b(this.#n,e,!0)}#a=te(()=>{const e=this.productId;return he.getEnrichedProductById(e)});get product(){return i(this.#a)}set product(e){b(this.#a,e)}#o=te(()=>this.product?.who??[]);get whoList(){return i(this.#o)}set whoList(e){b(this.#o,e)}#c=te(()=>this.product?.stockParsed??null);get stockParsed(){return i(this.#c)}set stockParsed(e){b(this.#c,e)}#r=te(()=>this.product?.purchases??[]);get purchasesList(){return i(this.#r)}set purchasesList(e){b(this.#r,e)}#l=te(()=>this.product?.byDate?ti(this.product.byDate):[]);get recipes(){return i(this.#l)}set recipes(e){b(this.#l,e)}#d=C(Ue({purchase:{quantity:null,unit:"",store:"",who:ze.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]}));get forms(){return i(this.#d)}set forms(e){b(this.#d,e,!0)}#u=C(Ue({overrideManagerEditMode:!1}));get uiStates(){return i(this.#u)}set uiStates(e){b(this.#u,e,!0)}#f=C(null);get editingPurchaseId(){return i(this.#f)}set editingPurchaseId(e){b(this.#f,e,!0)}#s=te(()=>this.editingPurchaseId?this.purchasesList.find(e=>e.$id===this.editingPurchaseId)??null:null);get editingPurchaseData(){return i(this.#s)}set editingPurchaseData(e){b(this.#s,e)}#h=C(null);get originalFormsSnapshot(){return i(this.#h)}set originalFormsSnapshot(e){b(this.#h,e,!0)}initForms(){const e=he.getEnrichedProductById(this.productId);e&&(this.forms.purchase.quantity=e.missingQuantityArray[0]?.q??null,this.forms.purchase.unit=e.totalNeededArray[0]?.u??"",this.forms.purchase.store=e.storeInfo?.storeName??"",this.forms.purchase.who=ze.userName()??"",this.forms.purchase.status=this.forms.purchase.status||"delivered",this.forms.stock.unit=e.totalNeededArray[0]?.u??"",this.forms.store.name=e.storeInfo?.storeName??"",this.forms.store.comment=e.storeInfo?.storeComment??null,this.forms.who=e.who?[...e.who]:[],this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})}#v=te(()=>this.originalFormsSnapshot?{store:this.forms.store.name!==this.originalFormsSnapshot.store.name||this.forms.store.comment!==this.originalFormsSnapshot.store.comment,stock:this.hasStockChanges(),who:JSON.stringify(this.forms.who)!==JSON.stringify(this.originalFormsSnapshot.whoList)}:{store:!1,stock:!1,who:!1});get hasChanges(){return i(this.#v)}set hasChanges(e){b(this.#v,e)}#p=te(()=>!!(this.originalFormsSnapshot&&(this.hasChanges.store||this.hasChanges.stock||this.hasChanges.who)));get hasAnyChanges(){return i(this.#p)}set hasAnyChanges(e){b(this.#p,e)}hasStockChanges(){return this.isStockFormValid?this.stockParsed?this.forms.stock.quantity.toString()!==this.stockParsed.quantity||this.forms.stock.unit!==this.stockParsed.unit||(this.forms.stock.notes||"")!==(this.stockParsed.notes||""):!0:!1}get isPurchaseFormValid(){return this.forms.purchase.quantity!==null&&this.forms.purchase.quantity!==0&&(this.forms.purchase.unit?.trim()??"")!==""}get isStockFormValid(){return this.forms.stock.quantity!==null&&this.forms.stock.quantity>0&&(this.forms.stock.unit?.trim()??"")!==""}setCurrentTab(e){this.currentTab=e}async addPurchase(){this.product&&await this.withLoading(async()=>{if(!this.forms.purchase.quantity||!this.forms.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!he.currentMainId)throw new Error("mainId non disponible");const{quantity:e,unit:t}=za(this.forms.purchase.quantity,this.forms.purchase.unit);this.product.isSynced||await Zt(this.product.$id,{},s=>he.getEnrichedProductById(s));const r=this.forms.purchase.status||"delivered";let a=this.forms.purchase.deliveryDate||null;r==="delivered"&&!a&&(a=new Date().toISOString()),await vi({products:[this.product.$id],mainId:he.currentMainId,unit:t,quantity:e,store:this.forms.purchase.store||null,who:this.forms.purchase.who||null,notes:this.forms.purchase.notes||"",price:this.forms.purchase.price||null,status:r,orderDate:this.forms.purchase.orderDate||null,deliveryDate:a}),this.forms.purchase={quantity:this.product.missingQuantityArray[0]?.q??null,unit:this.product.totalNeededArray[0]?.u??"",store:this.forms.purchase.store,who:this.forms.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}startEditPurchase(e){this.editingPurchaseId=e.$id}cancelEditPurchase(){this.editingPurchaseId=null}async updateEditedPurchase(e){e.$id&&await this.withLoading(async()=>{const{quantity:t,unit:r}=za(e.quantity,e.unit),a=e.status||null;let s=e.deliveryDate||null;a==="delivered"&&!s&&(s=new Date().toISOString()),await ss(e.$id,{unit:r,quantity:t,store:e.store||null,who:e.who||null,notes:e.notes||"",price:e.price||null,status:a,orderDate:e.orderDate||null,deliveryDate:s}),this.editingPurchaseId=null},"Achat modifié avec succès")}async removePurchase(e){const t=this.purchasesList.find(r=>r.$id===e);t&&confirm(`Supprimer cet achat (${t.quantity} ${t.unit}) ?`)&&await this.withLoading(async()=>{await gi(e)},"Achat supprimé avec succès")}async setStock(){this.product&&await this.withLoading(async()=>{if(!this.forms.stock.quantity||!this.forms.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const e={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};this.product.isSynced?await La(this.product.$id,JSON.stringify(e)):await Zt(this.product.$id,{stockReel:JSON.stringify(e)},t=>he.getEnrichedProductById(t)),this.forms.stock.quantity=null,this.forms.stock.notes="",this.forms.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async removeStock(){this.product&&confirm("Supprimer le stock actuel ?")&&await this.withLoading(async()=>{this.product.isSynced?await La(this.product.$id,null):await Zt(this.product.$id,{stockReel:null},e=>he.getEnrichedProductById(e))},"Stock supprimé")}async setWho(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await fi(this.product.$id,e):await Zt(this.product.$id,{who:e},t=>he.getEnrichedProductById(t))},"Volontaires mis à jour")}async updateStore(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await ui(this.product.$id,e):await Zt(this.product.$id,{store:JSON.stringify(e)},t=>he.getEnrichedProductById(t))},"Magasin mis à jour")}async setOverride(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await as(this.product.$id,e,!0):await Zt(this.product.$id,{totalNeededOverride:JSON.stringify(e)},t=>he.getEnrichedProductById(t))},"Override appliqué")}async removeOverride(){this.product&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await this.withLoading(async()=>{await hi(this.product.$id,!0)},"Override supprimé")}async saveAllChanges(){!this.product||!this.hasAnyChanges||await this.withLoading(async()=>{const e={};if(this.hasChanges.stock&&this.forms.stock.quantity&&this.forms.stock.unit){const t={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};e.stockReel=JSON.stringify(t)}if(this.hasChanges.who&&(e.who=this.forms.who),this.hasChanges.store){const t={storeName:this.forms.store.name||"",storeComment:this.forms.store.comment||void 0};e.storeInfo=t}Object.keys(e).length>0&&(await pi(this.product.$id,e,t=>he.getEnrichedProductById(t)),this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})},"Modifications enregistrées")}resetForms(){this.uiStates.overrideManagerEditMode=!1,this.editingPurchaseId=null,this.initForms(),console.log("[ProductModalState] Formulaires et états UI réinitialisés")}async withLoading(e,t){this.loading=!0,this.error=null;try{const r=await e();return t&&this.showToast("success",t),r}catch(r){const a=r instanceof Error?r.message:"Une erreur est survenue";return this.error=a,this.showToast("error",a),console.error("[ProductModalState]",r),null}finally{this.loading=!1}}showToast(e,t){const r=new CustomEvent("toast",{detail:{type:e,message:t}});window.dispatchEvent(r)}formatQuantity=hs;formatDate=fa}var Lf=y('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),Uf=y('<div class="text-xs text-base-content/60 mt-1"> </div>'),Hf=y('<div class="font-medium"> </div> <!>',1),Bf=y('<pre class="text-xs"> </pre>'),zf=y('<span class="text-base-content/50 italic">Non défini</span>'),Wf=y('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),Vf=y('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function ha(n,e){J(e,!0);let t=Ie(e,"title",3,"Événement terminé"),r=Ie(e,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),a=Ie(e,"showData",3,!0),s=Ie(e,"data",3,null),o=Ie(e,"dataLabel",3,"");var c=Vf(),l=d(c),u=d(l);Ci(u,{class:"h-5 w-5 text-warning"});var f=h(u,2);Nu(f,{class:"h-4 w-4 text-warning/70"});var v=h(f,2),g=d(v),m=h(l,2),_=d(m),w=h(m,2);{var S=I=>{var E=Wf(),k=d(E);{var P=z=>{var F=Lf(),G=d(F);B(()=>j(G,`${o()??""} :`)),p(z,F)};$(k,z=>{o()&&z(P)})}var A=h(k,2),T=d(A);{var U=z=>{var F=dt();B(()=>j(F,s())),p(z,F)},x=z=>{var F=Z(),G=L(F);{var D=se=>{var ae=dt();B(R=>j(ae,R),[()=>s().join(", ")]),p(se,ae)},ne=se=>{var ae=Z(),R=L(ae);{var H=ve=>{var re=Z(),ue=L(re);{var le=W=>{var N=Hf(),ee=L(N),q=d(ee),oe=h(ee,2);{var ie=ge=>{var we=Uf(),Ae=d(we);B(()=>j(Ae,s().storeComment)),p(ge,we)};$(oe,ge=>{s().storeComment&&ge(ie)})}B(()=>j(q,s().storeName)),p(W,N)},K=W=>{var N=Bf(),ee=d(N);B(q=>j(ee,q),[()=>JSON.stringify(s(),null,2)]),p(W,N)};$(ue,W=>{s().storeName?W(le):W(K,!1)})}p(ve,re)},me=ve=>{var re=zf();p(ve,re)};$(R,ve=>{typeof s()=="object"&&s()!==null?ve(H):ve(me,!1)},!0)}p(se,ae)};$(G,se=>{Array.isArray(s())&&s().length>0?se(D):se(ne,!1)},!0)}p(z,F)};$(T,z=>{typeof s()=="string"||typeof s()=="number"?z(U):z(x,!1)})}p(I,E)};$(w,I=>{a()&&s()&&I(S)})}B(()=>{j(g,t()),j(_,r())}),p(n,c),Y()}function Qf(n,e){e().isPurchaseFormValid&&(e().forms.purchase.status==="ordered"&&!e().forms.purchase.orderDate&&(e().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),e().addPurchase())}function Gf(n,e,t){const r=e().editingPurchaseData;!r||!t(r)||e().updateEditedPurchase(r)}function Of(n,e){e().cancelEditPurchase()}var Kf=y('<span class="loading loading-spinner loading-sm"></span>'),Jf=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="space-y-6"><div class="flex flex-wrap items-baseline gap-4"><!> <!> <!> <!></div> <div><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>'),Yf=y('<div class="mt-4 py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Xf=y("<th>Actions</th>"),Zf=y('<span class="loading loading-spinner loading-sm"></span>'),Ff=y('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="1" min="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="50"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Acheté</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),eh=(n,e,t)=>e(i(t)),th=(n,e,t)=>e(i(t).$id),nh=y('<span class="loading loading-spinner loading-sm"></span>'),rh=y('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),ah=y('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),sh=y('<div class="mt-4 overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),oh=y('<div class="space-y-4"><!></div> <!>',1);function ih(n,e){J(e,!0);let t=Ie(e,"modalState",7),r=Ie(e,"isArchiveMode",3,!1);function a(w){return w.quantity!==null&&w.quantity!==0&&w.unit?.trim()!==""}function s(w){t().removePurchase(w)}function o(w){t().startEditPurchase(w)}var c=oh(),l=L(c),u=d(l);{var f=w=>{ha(w,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},v=w=>{var S=Jf(),I=d(S),E=h(d(I),2),k=d(E),P=d(k);ua(P,{get disabled(){return t().loading},get quantity(){return t().forms.purchase.quantity},set quantity(R){t().forms.purchase.quantity=R},get unit(){return t().forms.purchase.unit},set unit(R){t().forms.purchase.unit=R}});var A=h(P,2);fs(A,{get disabled(){return t().loading},get value(){return t().forms.purchase.price},set value(R){t().forms.purchase.price=R}});var T=h(A,2);or(T,{get suggestions(){return he.uniqueStores},get disabled(){return t().loading},flexCol:!0,get value(){return t().forms.purchase.store},set value(R){t().forms.purchase.store=R}});var U=h(T,2);Pr(U,{get suggestions(){return he.uniqueWho},get disabled(){return t().loading},flexCol:!0,get value(){return t().forms.purchase.who},set value(R){t().forms.purchase.who=R}});var x=h(k,2),z=d(x);ir(z,{get disabled(){return t().loading},get value(){return t().forms.purchase.notes},set value(R){t().forms.purchase.notes=R}});var F=h(x,2);Qi(F,{get disabled(){return t().loading},get status(){return t().forms.purchase.status},set status(R){t().forms.purchase.status=R},get deliveryDate(){return t().forms.purchase.deliveryDate},set deliveryDate(R){t().forms.purchase.deliveryDate=R}});var G=h(E,2),D=d(G);D.__click=[Qf,t];var ne=d(D);{var se=R=>{var H=Kf();p(R,H)},ae=R=>{var H=dt("Ajouter l'achat");p(R,H)};$(ne,R=>{t().loading?R(se):R(ae,!1)})}B(()=>D.disabled=t().loading||!t().isPurchaseFormValid),p(w,S)};$(u,w=>{r()?w(f):w(v,!1)})}var g=h(l,2);{var m=w=>{var S=Yf(),I=d(S);Rn(I,{class:"mx-auto mb-2 h-12 w-12"}),p(w,S)},_=w=>{var S=sh(),I=d(S),E=d(I),k=d(E),P=h(d(k),8);{var A=U=>{var x=Xf();p(U,x)};$(P,U=>{r()||U(A)})}var T=h(E);et(T,21,()=>t().purchasesList,U=>U.$id,(U,x,z)=>{var F=Z(),G=L(F);{var D=se=>{var ae=Ff(),R=d(ae),H=d(R),me=d(H),ve=h(me,2),re=d(ve);re.value=re.__value="kg";var ue=h(re);ue.value=ue.__value="gr.";var le=h(ue);le.value=le.__value="l.";var K=h(le);K.value=K.__value="ml";var W=h(K);W.value=W.__value="unité";var N=h(W);N.value=N.__value="bottes";var ee=h(R),q=d(ee),oe=h(ee),ie=d(oe),ge=h(oe),we=d(ge),Ae=d(we);Ae.value=Ae.__value="ordered";var X=h(Ae);X.value=X.__value="delivered";var O=h(ge),fe=d(O),de=h(O),ce=d(de),qe=h(de),Q=d(qe),_e=h(qe),Ve=d(_e),Qe=h(_e),Ze=d(Qe),Re=d(Ze);Re.__click=[Gf,t,a];var Je=d(Re);{var bt=ke=>{var at=Zf();p(ke,at)},Me=ke=>{Ui(ke,{class:"h-3 w-3"})};$(Je,ke=>{t().loading?ke(bt):ke(Me,!1)})}var De=h(Re,2);De.__click=[Of,t];var Ke=d(De);$t(Ke,{class:"h-3 w-3"}),B(ke=>Re.disabled=ke,[()=>t().loading||!a(i(x))]),Oe(me,()=>i(x).quantity,ke=>i(x).quantity=ke),Zn(ve,()=>i(x).unit,ke=>i(x).unit=ke),Oe(q,()=>i(x).store,ke=>i(x).store=ke),Oe(ie,()=>i(x).who,ke=>i(x).who=ke),Zn(we,()=>i(x).status,ke=>i(x).status=ke),Oe(fe,()=>i(x).orderDate,ke=>i(x).orderDate=ke),Oe(ce,()=>i(x).deliveryDate,ke=>i(x).deliveryDate=ke),Oe(Q,()=>i(x).price,ke=>i(x).price=ke),Oe(Ve,()=>i(x).notes,ke=>i(x).notes=ke),p(se,ae)},ne=se=>{var ae=ah(),R=d(ae),H=d(R),me=h(R),ve=d(me),re=h(me),ue=d(re),le=h(re),K=d(le),W=d(K),N=h(le),ee=d(N),q=h(N),oe=d(q),ie=h(q),ge=d(ie),we=h(ie),Ae=d(we),X=h(we);{var O=fe=>{var de=rh(),ce=d(de),qe=d(ce);qe.__click=[eh,o,x];var Q=d(qe);_r(Q,{class:"h-4 w-4"});var _e=h(qe,2);_e.__click=[th,s,x];var Ve=d(_e);{var Qe=Re=>{var Je=nh();p(Re,Je)},Ze=Re=>{$t(Re,{class:"h-4 w-4"})};$(Ve,Re=>{t().loading?Re(Qe):Re(Ze,!1)})}B(()=>_e.disabled=t().loading),p(fe,de)};$(X,fe=>{r()||fe(O)})}B((fe,de,ce,qe,Q)=>{j(H,fe),j(ve,i(x).store||"-"),j(ue,i(x).who||"-"),Te(K,1,`badge badge-sm ${de??""}`),j(W,ce),j(ee,qe),j(oe,Q),j(ge,i(x).price?`${i(x).price}€`:"-"),j(Ae,i(x).notes||"-")},[()=>hs(i(x).quantity,i(x).unit),()=>Wa(i(x).status).class,()=>Wa(i(x).status).text,()=>eo(i(x).orderDate),()=>eo(i(x).deliveryDate)]),p(se,ae)};$(G,se=>{t().editingPurchaseId===i(x).$id?se(D):se(ne,!1)})}p(U,F)}),p(w,S)};$(g,w=>{t().purchasesList.length===0?w(m):w(_,!1)})}p(n,c),Y()}Xe(["click"]);async function ch(n,e){await e()?.removeStock()}var lh=y(`Le stock réel est la quantité réelle du produit constaté dans le
            stock: <strong>il sera utilisé pour le calcul des quantités manquantes à se
              fournir à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantités manquantes à se fournir.`,1),dh=(n,e)=>{e().forms.stock.quantity=null,e().forms.store.comment=""},uh=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><!></div> <div><!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>'),fh=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),hh=y('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),ph=y('<span class="loading loading-spinner loading-xs"></span>'),vh=y('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),gh=y('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),mh=y('<div class="space-y-4"><!></div> <!>',1);function bh(n,e){J(e,!0);let t=Ie(e,"modalState",7),r=Ie(e,"isArchiveMode",3,!1);var a=mh(),s=L(a),o=d(s);{var c=g=>{ha(g,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return t().stockParsed},dataLabel:"Stock actuel"})},l=g=>{var m=uh(),_=d(m),w=d(_),S=d(w),I=h(w,2),E=d(I);Vi(E,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(z,F)=>{var G=lh();p(z,G)},$$slots:{default:!0}});var k=h(I,2),P=d(k);ua(P,{get disabled(){return t().loading},get quantity(){return t().forms.stock.quantity},set quantity(z){t().forms.stock.quantity=z},get unit(){return t().forms.stock.unit},set unit(z){t().forms.stock.unit=z}});var A=h(k,2),T=d(A);ir(T,{get disabled(){return t().loading},get value(){return t().forms.stock.notes},set value(z){t().forms.stock.notes=z}});var U=h(A,2),x=d(U);x.__click=[dh,t],B(z=>{j(S,`Déclarer le stock réel du ${z??""}`),x.disabled=t().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),p(g,m)};$(o,g=>{r()?g(c):g(l,!1)})}var u=h(s,2);{var f=g=>{var m=fh(),_=d(m);ki(_,{class:"mx-auto mb-2 h-12 w-12"}),p(g,m)},v=g=>{var m=gh(),_=d(m),w=h(d(_),2),S=d(w),I=h(d(S),2),E=d(I),k=h(S,2),P=h(d(k),2),A=d(P),T=h(k,2);{var U=F=>{var G=hh(),D=h(d(G),2),ne=d(D);B(()=>j(ne,t().stockParsed.notes)),p(F,G)};$(T,F=>{t().stockParsed.notes&&F(U)})}var x=h(w,2);{var z=F=>{var G=vh(),D=d(G);D.__click=[ch,t];var ne=d(D);{var se=R=>{var H=ph();p(R,H)},ae=R=>{var H=dt("Supprimer le stock");p(R,H)};$(ne,R=>{t().loading?R(se):R(ae,!1)})}B(()=>D.disabled=t().loading),p(F,G)};$(x,F=>{r()||F(z)})}B(F=>{j(E,`${t().stockParsed.quantity??""}
            ${t().stockParsed.unit??""}`),j(A,F)},[()=>fa(t().stockParsed.dateTime)]),p(g,m)};$(u,g=>{t().stockParsed?g(v,!1):g(f)})}p(n,a),Y()}Xe(["click"]);function _h(n,e,t){e().forms.who=[...e().whoList],b(t,"")}var yh=(n,e)=>{n.key==="Enter"&&(n.preventDefault(),e())},wh=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),Ih=y('<div class="space-y-4"><!></div>');function Sh(n,e){J(e,!0);let t=Ie(e,"modalState",7),r=Ie(e,"isArchiveMode",3,!1),a=C("");const s=te(()=>{const _=new Set([...he.uniqueWho,...t().forms.who]);return Array.from(_).map(w=>({id:w,label:w,selected:t().forms.who.includes(w)}))});function o(_){const w=_.trim();w&&!t().forms.who.includes(w)&&(t().forms.who=[...t().forms.who,w])}function c(_){t().forms.who=t().forms.who.filter(w=>w!==_)}function l(_){t().forms.who.includes(_)?c(_):o(_)}function u(){i(a).trim()&&(o(i(a)),b(a,""))}var f=Ih(),v=d(f);{var g=_=>{ha(_,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},m=_=>{var w=wh(),S=d(w),I=h(d(S),4),E=d(I),k=d(E),P=d(k);ls(P,{class:"h-4 w-4 opacity-50"});var A=h(P,2);A.__keydown=[yh,u];var T=h(k,2);T.__click=u;var U=d(T);cs(U,{size:16});var x=h(E,2),z=h(d(x),2);yr(z,{get items(){return i(s)},onToggleItem:l,showIcon:!0,badgeSize:"btn-sm"});var F=h(S,2),G=d(F);G.__click=[_h,t,a],B(D=>{A.disabled=t().loading,T.disabled=D,G.disabled=t().loading},[()=>t().loading||!i(a).trim()]),Oe(A,()=>i(a),D=>b(a,D)),p(_,w)};$(v,_=>{r()?_(g):_(m,!1)})}p(n,f),Y()}Xe(["keydown","click"]);var xh=(n,e)=>{e().forms.store.name="",e().forms.store.comment=""},Eh=y(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),$h=y('<div class="space-y-4"><!></div>');function Ph(n,e){J(e,!0);let t=Ie(e,"modalState",7),r=Ie(e,"isArchiveMode",3,!1);const a=te(()=>t()?.hasChanges?.store||!1);async function s(){if(!i(a))return;const f={storeName:t().forms.store.name?.trim()||"",storeComment:t().forms.store.comment?.trim()||void 0};await t().updateStore(f)}var o=$h(),c=d(o);{var l=f=>{{let v=te(()=>t().product?.storeInfo);ha(f,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return i(v)},dataLabel:"Magasin actuel"})}},u=f=>{var v=Eh(),g=d(v),m=h(d(g),4),_=d(m),w=d(_);or(w,{get suggestions(){return he.uniqueStores},get disabled(){return t().loading},onkeydown:k=>{k.key==="Enter"&&s()},get value(){return t().forms.store.name},set value(k){t().forms.store.name=k}});var S=h(_,2);ir(S,{get disabled(){return t().loading},get value(){return t().forms.store.comment},set value(k){t().forms.store.comment=k}});var I=h(m,2),E=d(I);E.__click=[xh,t],B(()=>E.disabled=t().loading),p(f,v)};$(c,f=>{r()?f(l):f(u,!1)})}p(n,o),Y()}Xe(["click"]);var Ah=y('<label class="input w-96"><!> <input type="text" placeholder="Commentaire (optionnel)" maxlength="250"/></label>');function Mh(n,e){J(e,!0);let t=Ie(e,"value",15);Ie(e,"disabled",3,!1);var r=Ah(),a=d(r);qi(a,{size:20,class:"text-base-centent/70"});var s=h(a,2);Oe(s,t),p(n,r),Y()}function kh(n){const e=n-1;return e*e*e+1}function Gi(n,{delay:e=0,duration:t=400,easing:r=kh,axis:a="y"}={}){const s=getComputedStyle(n),o=+s.opacity,c=a==="y"?"height":"width",l=parseFloat(s[c]),u=a==="y"?["top","bottom"]:["left","right"],f=u.map(I=>`${I[0].toUpperCase()}${I.slice(1)}`),v=parseFloat(s[`padding${f[0]}`]),g=parseFloat(s[`padding${f[1]}`]),m=parseFloat(s[`margin${f[0]}`]),_=parseFloat(s[`margin${f[1]}`]),w=parseFloat(s[`border${f[0]}Width`]),S=parseFloat(s[`border${f[1]}Width`]);return{delay:e,duration:t,easing:r,css:I=>`overflow: hidden;opacity: ${Math.min(I*20,1)*o};${c}: ${I*l}px;padding-${u[0]}: ${I*v}px;padding-${u[1]}: ${I*g}px;margin-${u[0]}: ${I*m}px;margin-${u[1]}: ${I*_}px;border-${u[0]}-width: ${I*w}px;border-${u[1]}-width: ${I*S}px;min-${c}: 0`}}async function Th(n,e,t,r,a){if(!e())return;const s={totalOverride:{q:i(t),u:i(r)},comment:i(a)};await e().setOverride(s),e().uiStates.overrideManagerEditMode=!1}async function Rh(n,e){e()&&(await e().removeOverride(),e().uiStates.overrideManagerEditMode=!1)}var Dh=y('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Ancienne quantité calculée</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),Nh=y('<div class="stat-desc italic">Recettes actuelles</div>'),Ch=y('<div class="chat-bubble relative ms-auto mt-2 text-sm"> <!></div>'),qh=y('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins redéfinie manuellement</div> <div class="stat-value text-content-base/70 text-end text-lg"> </div> <!></div>'),jh=(n,e)=>e().uiStates.overrideManagerEditMode=!0,Lh=y('<div class="ms-auto mt-auto"><button class="btn btn-primary btn-sm btn-soft"><!> <!></button></div>'),Uh=(n,e)=>e().uiStates.overrideManagerEditMode=!1,Hh=y('<span class="loading loading-spinner loading-sm"></span>'),Bh=y('<span class="loading loading-spinner loading-sm"></span>'),zh=y('<div class="mt-4 flex flex-wrap items-center gap-4"><!> <!> <div class="ms-auto"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div></div>'),Wh=y('<div class="mb-2 space-y-4"><div class="bg-base-200 relative mb-4 flex rounded-xl p-4"><div class="grid"><div class="flex gap-4"><!> <div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins calculées</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="ms-auto flex flex-wrap gap-4"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div> <!></div> <!> <!></div> <!></div></div></div>');function Vh(n,e){J(e,!0);let t=Ie(e,"modalState",7);const r=te(()=>t().product?.totalNeededOverrideParsed),a=te(()=>t().product?.displayTotalOverride);let s=te(()=>i(r)?.hasUnresolvedChangedSinceOverride),o=te(()=>t().uiStates.overrideManagerEditMode),c=C(Ue(t().product?.totalNeededOverrideParsed?.totalOverride.q||t().product?.totalNeededArray[0]?.q||0)),l=C(Ue(t().product?.totalNeededOverrideParsed?.totalOverride.u||t().product?.totalNeededArray[0]?.u||"")),u=C(Ue(t().product?.totalNeededOverrideParsed?.comment||"")),f=te(()=>i(c)>0&&i(l).trim()!=="");var v=Z(),g=L(v);{var m=_=>{var w=Wh(),S=d(w),I=d(S),E=d(I),k=d(E);{var P=K=>{var W=Dh(),N=h(d(W),2),ee=d(N);B(()=>j(ee,i(r)?.oldTotalDisplay)),p(K,W)};$(k,K=>{i(r)?.oldTotalDisplay&&i(s)&&K(P)})}var A=h(k,2),T=h(d(A),2),U=d(T),x=h(T,2),z=d(x),F=d(z),G=h(F);ia(G,{class:"h-3 w-3"});var D=h(z,2),ne=d(D),se=h(ne);ds(se,{class:"h-3 w-3"});var ae=h(x,2);{var R=K=>{var W=Nh();p(K,W)};$(ae,K=>{i(r)?.oldTotalDisplay&&i(s)&&K(R)})}var H=h(A,2);{var me=K=>{var W=qh(),N=h(d(W),2),ee=d(N),q=h(N,2);{var oe=ie=>{var ge=Ch(),we=d(ge),Ae=h(we);qi(Ae,{size:16,class:"text-base-content/60 absolute right-1 bottom-1 "}),B(()=>j(we,`${i(r).comment??""} `)),p(ie,ge)};$(q,ie=>{i(r).comment&&ie(oe)})}B(()=>j(ee,i(a))),p(K,W)};$(H,K=>{i(a)&&i(r)&&K(me)})}var ve=h(H,2);{var re=K=>{var W=Lh(),N=d(W);N.__click=[jh,t];var ee=d(N);{var q=ge=>{var we=dt("Redéfinir les besoins");p(ge,we)},oe=ge=>{var we=dt("Définir manuellement les besoins");p(ge,we)};$(ee,ge=>{i(r)?ge(q):ge(oe,!1)})}var ie=h(ee,2);_r(ie,{size:16}),p(K,W)};$(ve,K=>{!e.isArchiveMode&&!i(o)&&K(re)})}var ue=h(E,2);{var le=K=>{var W=zh(),N=d(W);ua(N,{get quantity(){return i(c)},set quantity(ce){b(c,ce,!0)},get unit(){return i(l)},set unit(ce){b(l,ce,!0)}});var ee=h(N,2);Mh(ee,{get value(){return i(u)},set value(ce){b(u,ce,!0)}});var q=h(ee,2),oe=d(q);oe.__click=[Uh,t];var ie=h(oe,2);ie.__click=[Rh,t];var ge=d(ie);{var we=ce=>{var qe=Hh();p(ce,qe)},Ae=ce=>{var qe=dt();B(()=>j(qe,`Réinitialiser le total calculé (${t().product.displayTotalNeeded??""}).`)),p(ce,qe)};$(ge,ce=>{t().loading?ce(we):ce(Ae,!1)})}var X=h(ie,2);X.__click=[Th,t,c,l,u];var O=d(X);{var fe=ce=>{var qe=Bh();p(ce,qe)},de=ce=>{var qe=dt("Appliquer");p(ce,qe)};$(O,ce=>{t().loading?ce(fe):ce(de,!1)})}B(()=>{ie.disabled=t().loading,X.disabled=t().loading||!i(f)}),Fo(1,W,()=>Gi),p(K,W)};$(ue,K=>{i(o)&&K(le)})}B(()=>{j(U,t().product.displayTotalNeeded),j(F,`${t().product.nbRecipes??""} `),j(ne,`${t().product.totalAssiettes??""} `)}),p(_,w)};$(g,_=>{t().product&&_(m)})}p(n,v),Y()}Xe(["click"]);var Qh=y('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Gh=y('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Oh=y('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Kh=y('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Jh(n,e){J(e,!0);const t=te(()=>e.modalState.recipes);var r=Kh(),a=L(r);Vh(a,{get modalState(){return e.modalState},get isArchiveMode(){return e.isArchiveMode}});var s=h(a,2),o=d(s),c=d(o);ia(c,{class:"h-5 w-5"});var l=h(o,2);{var u=v=>{var g=Qh(),m=d(g);la(m,{class:"mx-auto mb-2 h-12 w-12"}),p(v,g)},f=v=>{var g=Oh(),m=d(g),_=h(d(m));et(_,21,()=>i(t),xt,(w,S)=>{var I=Gh(),E=d(I),k=d(E),P=h(E),A=d(P),T=h(P),U=d(T);B(x=>{j(k,`${i(S).r??""} (${(i(S).a||"-")??""} c.)`),j(A,`${(i(S).q||i(S).qEq)??""} ${(i(S).u||i(S).uEq)??""}`),j(U,x)},[()=>fa(i(S).date)]),p(w,I)}),p(v,g)};$(l,v=>{i(t).length===0?v(u):v(f,!1)})}p(n,r),Y()}function Yh(n,e,t){i(e)?.saveAllChanges().then(()=>{i(e)?.resetForms(),t.onClose()})}function to(n,e,t){i(e)?.resetForms(),t.onClose()}var Xh=y('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),Zh=y('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Fh=y('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),ep=(n,e)=>e("recettes"),tp=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),np=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),rp=(n,e)=>e("magasins"),ap=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),sp=(n,e)=>e("volontaires"),op=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),ip=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),cp=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),lp=(n,e)=>e("stock"),dp=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),up=y('<span class="badge badge-sm badge-secondary ml-1">1</span>'),fp=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),hp=(n,e)=>e("achats"),pp=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),vp=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),gp=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),mp=y('<span class="loading loading-spinner loading-sm"></span>'),bp=y('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),_p=y('<div id="product_modal"><div class="modal-box fixed top-0 flex h-lvh w-lvw flex-col overflow-auto md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function yp(n,e){J(e,!0);let t=Ie(e,"initialTab",3,"recettes"),r=C(null);Kt(()=>{b(r,new jf(e.productId,t()),!0)});let a=te(()=>he.isEventPassed);function s(S){i(r)?.setCurrentTab(S)}var o=_p(),c=d(o),l=d(c),u=d(l);{var f=S=>{var I=Zh(),E=L(I),k=d(E),P=h(E,2);{var A=G=>{var D=Xh(),ne=d(D);Ci(ne,{class:"h-4 w-4"}),p(G,D)};$(P,G=>{i(r)&&i(a)&&G(A)})}var T=h(P,2),U=d(T),x=d(U),z=h(U,2),F=h(d(z));B(()=>{j(k,i(r).product?.productName),j(x,i(r).product?.productType),j(F,` ${i(r).product?.displayTotalNeeded??""}`)}),p(S,I)},v=S=>{var I=Fh();p(S,I)};$(u,S=>{i(r)&&i(r).product?S(f):S(v,!1)})}var g=h(u,2);g.__click=[to,r,e];var m=d(g);$t(m,{class:"h-4 w-4"});var _=h(l,2);{var w=S=>{var I=bp(),E=L(I),k=d(E);k.__click=[ep,s];var P=d(k);ia(P,{class:"mr-1 h-5 w-5"});var A=h(P,2);{var T=Q=>{var _e=tp(),Ve=d(_e);B(()=>j(Ve,i(r).product?.nbRecipes)),p(Q,_e)},U=Q=>{var _e=np();p(Q,_e)};$(A,Q=>{i(r).product?.nbRecipes&&i(r).product?.nbRecipes>0?Q(T):Q(U,!1)})}var x=h(k,2);x.__click=[rp,s];var z=d(x);Pn(z,{class:"mr-1 h-5 w-5"});var F=h(z,2);{var G=Q=>{var _e=ap();p(Q,_e)};$(F,Q=>{i(r).hasChanges?.store&&Q(G)})}var D=h(x,2);D.__click=[sp,s];var ne=d(D);rn(ne,{class:"mr-1 h-5 w-5"});var se=h(ne,2);{var ae=Q=>{var _e=op();p(Q,_e)},R=Q=>{var _e=Z(),Ve=L(_e);{var Qe=Re=>{var Je=ip(),bt=d(Je);B(()=>j(bt,i(r).product?.who.length)),p(Re,Je)},Ze=Re=>{var Je=cp();p(Re,Je)};$(Ve,Re=>{i(r).product?.who&&i(r).product?.who.length>0?Re(Qe):Re(Ze,!1)},!0)}p(Q,_e)};$(se,Q=>{i(r).hasChanges?.who?Q(ae):Q(R,!1)})}var H=h(D,2);H.__click=[lp,s];var me=d(H);ki(me,{class:"mr-1 h-5 w-5"});var ve=h(me,2);{var re=Q=>{var _e=dp();p(Q,_e)},ue=Q=>{var _e=Z(),Ve=L(_e);{var Qe=Re=>{var Je=up();p(Re,Je)},Ze=Re=>{var Je=fp();p(Re,Je)};$(Ve,Re=>{i(r).stockParsed?Re(Qe):Re(Ze,!1)},!0)}p(Q,_e)};$(ve,Q=>{i(r).hasChanges?.stock?Q(re):Q(ue,!1)})}var le=h(H,2);le.__click=[hp,s];var K=d(le);Rn(K,{class:"mr-1 h-5 w-5"});var W=h(K,2);{var N=Q=>{var _e=pp(),Ve=d(_e);B(()=>j(Ve,i(r).purchasesList.length)),p(Q,_e)},ee=Q=>{var _e=vp();p(Q,_e)};$(W,Q=>{i(r).purchasesList.length>0?Q(N):Q(ee,!1)})}var q=h(E,2),oe=d(q);{var ie=Q=>{var _e=gp(),Ve=d(_e);$t(Ve,{class:"h-4 w-4"});var Qe=h(Ve,2),Ze=d(Qe);B(()=>j(Ze,`erreur : ${i(r).error??""}`)),p(Q,_e)};$(oe,Q=>{i(r).error&&Q(ie)})}var ge=h(oe,2),we=d(ge);_l(we,()=>i(r).currentTab,Q=>{var _e=Z(),Ve=L(_e);{var Qe=Re=>{Jh(Re,{get modalState(){return i(r)},get isArchiveMode(){return i(a)}})},Ze=Re=>{var Je=Z(),bt=L(Je);{var Me=Ke=>{ih(Ke,{get modalState(){return i(r)},get isArchiveMode(){return i(a)}})},De=Ke=>{var ke=Z(),at=L(ke);{var ft=Ce=>{bh(Ce,{get modalState(){return i(r)},get isArchiveMode(){return i(a)}})},$e=Ce=>{var Ge=Z(),tt=L(Ge);{var nt=ht=>{Sh(ht,{get modalState(){return i(r)},get isArchiveMode(){return i(a)}})},_t=ht=>{var Bt=Z(),wn=L(Bt);{var Ee=Pe=>{Ph(Pe,{get modalState(){return i(r)},get isArchiveMode(){return i(a)}})};$(wn,Pe=>{i(r).currentTab==="magasins"&&Pe(Ee)},!0)}p(ht,Bt)};$(tt,ht=>{i(r).currentTab==="volontaires"?ht(nt):ht(_t,!1)},!0)}p(Ce,Ge)};$(at,Ce=>{i(r).currentTab==="stock"?Ce(ft):Ce($e,!1)},!0)}p(Ke,ke)};$(bt,Ke=>{i(r).currentTab==="achats"?Ke(Me):Ke(De,!1)},!0)}p(Re,Je)};$(Ve,Re=>{i(r).currentTab==="recettes"?Re(Qe):Re(Ze,!1)})}p(Q,_e)});var Ae=h(q,2),X=d(Ae);X.__click=[to,r,e];var O=d(X),fe=h(X,2);fe.__click=[Yh,r,e];var de=d(fe);{var ce=Q=>{var _e=mp();p(Q,_e)},qe=Q=>{var _e=dt("Tout enregistrer");p(Q,_e)};$(de,Q=>{i(r).loading?Q(ce):Q(qe,!1)})}B(()=>{Te(k,1,`tab ${i(r).currentTab==="recettes"?"tab-active":""}`),Te(x,1,`tab ${i(r).currentTab==="magasins"?"tab-active":""}`),Te(D,1,`tab ${i(r).currentTab==="volontaires"?"tab-active":""}`),Te(H,1,`tab ${i(r).currentTab==="stock"?"tab-active":""}`),Te(le,1,`tab ${i(r).currentTab==="achats"?"tab-active":""}`),j(O,i(r)?.hasAnyChanges?"Annuler":"Fermer"),fe.disabled=i(r).loading||!i(r).hasAnyChanges}),p(S,I)};$(_,S=>{i(r)&&S(w)})}B(()=>Te(o,1,`modal ${(e.productId&&"modal-open")??""}`)),p(n,o),Y()}Xe(["click"]);var wp=(n,e,t)=>e(t),Ip=y("<button><span> </span> <!></button>"),Sp=y('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),xp=(n,e)=>e.dateStore.selectUpcoming(),Ep=(n,e)=>e.dateStore.selectAll(),$p=y('<div class="join my-2 ms-auto"><button type="button" name="options" aria-label=" Dates à venir">Dates à venir</button> <button type="button" name="options" aria-label=" Toutes les dates">Toutes les dates</button></div>'),Pp=y('<div class="mb-2 flex flex-wrap gap-2"></div> <!>',1);function Ap(n,e){J(e,!0);let t=te(()=>e.dateStore.start),r=te(()=>e.dateStore.end),a=C(null);function s(m){i(t)&&new Date(m)<new Date(i(t))?e.dateStore.setRange(m,i(r)):i(r)&&new Date(m)>new Date(i(r))?e.dateStore.setRange(i(t),m):e.dateStore.setRange(m,m)}function o(m){return!i(t)||!i(r)?{start:null,end:null}:i(t)&&new Date(m)<new Date(i(t))?{start:m,end:i(r)}:i(r)&&new Date(m)>new Date(i(r))?{start:i(t),end:m}:{start:m,end:m}}function c(m){let _="";if(!i(t)||!i(r))return;const w=new Date(m)>=new Date(i(t))&&new Date(m)<=new Date(i(r)),S=e.dateStore.start&&new Date(m)<=new Date;let I=!1;if(i(a)){const E=o(i(a));E.start&&E.end&&(I=new Date(m)>=new Date(E.start)&&new Date(m)<=new Date(E.end))}return S&&(_+=" opacity-70 italic"),w||(_+=" btn-dash"),I&&!w&&(_+=" btn-soft"),_}var l=Pp(),u=L(l);et(u,20,()=>e.dateStore.dates,m=>m,(m,_)=>{var w=Ip();w.__click=[wp,s,_];var S=d(w),I=d(S),E=h(S,2);{var k=A=>{zi(A,{size:16})},P=A=>{var T=Z(),U=L(T);{var x=F=>{ji(F,{size:16})},z=F=>{var G=Z(),D=L(G);{var ne=se=>{Di(se,{size:16})};$(D,se=>{jr(_)==="cloud"&&se(ne)},!0)}p(F,G)};$(U,F=>{jr(_)==="moon"?F(x):F(z,!1)},!0)}p(A,T)};$(E,A=>{jr(_)==="sun"?A(k):A(P,!1)})}B((A,T)=>{Te(w,1,`btn btn-sm btn-secondary ${A??""}`),j(I,T)},[()=>c(_),()=>pd(_)]),On("mouseenter",w,()=>b(a,_,!0)),On("mouseleave",w,()=>b(a,null)),p(m,w)});var f=h(u,2);{var v=m=>{var _=Sp();p(m,_)},g=m=>{var _=$p(),w=d(_);w.__click=[xp,e];var S=h(w,2);S.__click=[Ep,e],B(()=>{Te(w,1,`join-item btn btn-sm ${e.dateStore.isUpcomingRange?"btn-soft btn-secondary":"btn-ghost"}`),Te(S,1,`join-item btn btn-sm ${e.dateStore.isFullRange?"btn-soft btn-secondary":"btn-ghost"}`)}),p(m,_)};$(f,m=>{e.dateStore.isEventPassed?m(v):m(g,!1)})}p(n,l),Y()}Xe(["click"]);var Mp=y("<fieldset><legend><!> </legend> <!></fieldset>");function hr(n,e){let t=Ie(e,"bgClass",3,"bg-base-100");var r=Mp(),a=d(r),s=d(a);{var o=u=>{const f=te(()=>e.iconComponent);var v=Z(),g=L(v);Tn(g,()=>i(f),(m,_)=>{_(m,{size:16,class:"mr-1"})}),p(u,v)};$(s,u=>{e.iconComponent&&u(o)})}var c=h(s),l=h(a,2);be(l,()=>e.children??pe),B(()=>{Te(r,1,`fieldset ${t()??""} border-base-200 rounded-box border p-4`),Te(a,1,`fieldset-legend ${t()??""} rounded-box text-base-content/80 px-4 py-1`),j(c,` ${e.legend??""}`)}),p(n,r)}var kp=()=>he.clearFilters(),Tp=n=>he.setSearchQuery(n.currentTarget.value),Rp=()=>he.setSearchQuery(""),Dp=()=>he.setGroupBy("none"),Np=()=>he.setGroupBy("store"),Cp=()=>he.setGroupBy("productType"),qp=y(`<div class="alert alert-warning">Cette période contient des dates passées. Les achats ne sont plus
          possibles pour ces dates.</div>`),jp=y("<!> <!>",1),Lp=(n,e)=>he.toggleProductType(e),Up=y("<button><!> </button>"),Hp=()=>he.toggleTemperature("frais"),Bp=()=>he.toggleTemperature("surgele"),zp=()=>he.clearTypeAndTemperatureFilters(),Wp=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),Vp=y('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),Qp=y('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button title="Filtrer les légumes ou produits à conserver au frais"><!> Frais</button> <button title="Filtrer les roduits à concerver au congélateur"><!> Surgelés</button></div> <!>',1),Gp=(n,e)=>he.toggleStore(e),Op=y("<button> </button>"),Kp=()=>he.clearStoreFilters(),Jp=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Yp=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Xp=(n,e)=>he.toggleWho(e),Zp=y("<button> </button>"),Fp=()=>he.clearWhoFilters(),ev=y('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),tv=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),nv=y('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4 flex flex-col"><label class="label flex" for="grouping-select"><span class="label-text">Groupement par:</span></label> <div class=" bg-base-100 flex gap-1 rounded-xl p-2 font-semibold" id="grouping-select"><button type="button" aria-label="Aucun">Aucun</button> <button type="button" aria-label="Par magasin">Magasins</button> <button type="button" aria-label="Par type">Type</button></div></div> <!> <!> <!> <!></div>',1);function rv(n,e){J(e,!0);const t=te(()=>he.filters),r=te(()=>he.uniqueStores),a=te(()=>he.uniqueWho),s=te(()=>he.uniqueProductTypes);var o=nv(),c=L(o),l=d(c),u=d(l);Ni(u,{class:"h-5 w-5"});var f=h(l,2);f.__click=[kp];var v=d(f);Nr(v,{class:"h-4 w-4"});var g=h(c,2),m=d(g),_=h(d(m),2),w=d(_);Hi(w,{class:"h-4 w-4"});var S=h(w,2);S.__input=[Tp];var I=h(S,2);I.__click=[Rp];var E=d(I);$t(E,{class:"h-4 w-4"});var k=h(m,2),P=h(d(k),2),A=d(P);A.__click=[Dp];var T=h(A,2);T.__click=[Np];var U=h(T,2);U.__click=[Cp];var x=h(k,2);{var z=R=>{hr(R,{legend:"Date incluses",bgClass:"bg-base-100",children:(H,me)=>{var ve=jp(),re=L(ve);Ap(re,{get dateStore(){return he.dateStore}});var ue=h(re,2);{var le=K=>{var W=qp();Fo(3,W,()=>Gi),p(K,W)};$(ue,K=>{he.hasPastDatesInRange&&K(le)})}p(H,ve)},$$slots:{default:!0}})};$(x,R=>{he.hasSingleDateEvent||R(z)})}var F=h(x,2);{var G=R=>{hr(R,{legend:"Types & Température",get iconComponent(){return Wi},children:(H,me)=>{var ve=Qp(),re=L(ve);et(re,20,()=>i(s),ie=>ie,(ie,ge)=>{const we=te(()=>Ba(ge));var Ae=Up();Ae.__click=[Lp,ge];var X=d(Ae);Tn(X,()=>i(we).icon,(fe,de)=>{de(fe,{class:"mr-1 h-5 w-5"})});var O=h(X);B(fe=>{Te(Ae,1,`btn btn-sm ${fe??""}`),j(O,` ${i(we).displayName??""}`)},[()=>i(t).selectedProductTypes.length===0?"btn-soft btn-secondary":i(t).selectedProductTypes.includes(ge)?"btn-secondary":"btn-dash btn-secondary"]),p(ie,Ae)});var ue=h(re,2),le=d(ue);le.__click=[Hp];var K=d(le);Bi(K,{class:"h-5 w-5"});var W=h(le,2);W.__click=[Bp];var N=d(W);is(N,{class:"h-5 w-5"});var ee=h(ue,2);{var q=ie=>{var ge=Wp();ge.__click=[zp];var we=d(ge);Nr(we,{size:16}),p(ie,ge)},oe=ie=>{var ge=Vp();p(ie,ge)};$(ee,ie=>{i(t).selectedProductTypes.length>0||i(t).selectedTemperatures.length>0?ie(q):ie(oe,!1)})}B((ie,ge)=>{Te(le,1,`btn btn-sm ${ie??""}`),Te(W,1,`btn btn-sm ${ge??""}`)},[()=>i(t).selectedTemperatures.length===0?"btn-soft btn-success":i(t).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(t).selectedTemperatures.length===0?"btn-soft btn-info":i(t).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),p(H,ve)},$$slots:{default:!0}})};$(F,R=>{i(s).length>0&&R(G)})}var D=h(F,2);{var ne=R=>{hr(R,{legend:"Magasins",get iconComponent(){return Pn},children:(H,me)=>{var ve=Yp(),re=d(ve);et(re,16,()=>i(r),K=>K,(K,W)=>{var N=Op();N.__click=[Gp,W];var ee=d(N);B(q=>{Te(N,1,`btn btn-sm ${q??""}`),j(ee,W)},[()=>i(t).selectedStores.length===0?"btn-soft btn-secondary":i(t).selectedStores.includes(W)?"btn-secondary":"btn-dash btn-secondary"]),p(K,N)});var ue=h(re,2);{var le=K=>{var W=Jp();W.__click=[Kp];var N=d(W);Nr(N,{size:16}),p(K,W)};$(ue,K=>{i(t).selectedStores.length>0&&K(le)})}p(H,ve)},$$slots:{default:!0}})};$(D,R=>{i(r).length>0&&R(ne)})}var se=h(D,2);{var ae=R=>{hr(R,{legend:"Qui",get iconComponent(){return ls},children:(H,me)=>{var ve=tv(),re=d(ve);et(re,16,()=>i(a),K=>K,(K,W)=>{var N=Zp();N.__click=[Xp,W];var ee=d(N);B(q=>{Te(N,1,`btn btn-sm ${q??""}`),j(ee,W)},[()=>i(t).selectedWho.length===0?" btn-soft btn-secondary":i(t).selectedWho.includes(W)?" btn-secondary":"btn-dash btn-secondary"]),p(K,N)});var ue=h(re,2);{var le=K=>{var W=ev();W.__click=[Fp];var N=d(W);Nr(N,{size:16}),p(K,W)};$(ue,K=>{i(t).selectedWho.length>0&&K(le)})}p(H,ve)},$$slots:{default:!0}})};$(se,R=>{i(a).length>0&&R(ae)})}B(()=>{f.disabled=!he.hasFilters,Al(S,i(t).searchQuery),I.disabled=!i(t).searchQuery,Te(A,1,`btn flex-1 ${i(t).groupBy==="none"&&"btn-secondary"}`),Te(T,1,`btn flex-1 ${i(t).groupBy==="store"&&"btn-secondary"}`),Te(U,1,`btn flex-1 ${i(t).groupBy==="productType"&&"btn-secondary"}`)}),p(n,o),Y()}Xe(["click","input"]);var av=y('<div class="tooltip text-xs font-normal"><!></div>');function sv(n,e){let t=Ie(e,"iconSize",3,24),r=e.icon||void 0;var a=av(),s=d(a);{var o=c=>{r(c,{get size(){return t()},class:`align-top
`})};$(s,c=>{e.icon&&c(o)})}B(()=>sn(a,"data-tip",e.tip)),p(n,a)}var ov=y('<div class="tooltip"><div class="badge badge-soft badge-sm hover:badge-primary flex items-center gap-1"><span class="whitespace-nowrap"> </span> <!></div></div>');function iv(n,e){J(e,!0);let t=Ie(e,"recipes",19,()=>[]);const r=e.dateDisplayInfo.timeIcon==="sun"?zi:e.dateDisplayInfo.timeIcon==="moon"?ji:e.dateDisplayInfo.timeIcon==="cloud"?Di:null;var a=ov(),s=d(a),o=d(s),c=d(o),l=h(o,2);{var u=f=>{r(f,{class:"h-3 w-3"})};$(l,f=>{r&&f(u)})}B(f=>{sn(a,"data-tip",f),j(c,e.dateDisplayInfo.formattedDate)},[()=>t().map(f=>f.r).join(", ")]),p(n,a),Y()}var cv=y('<div class="text-primary-content flex items-center gap-2"><!> </div>'),lv=y('<div class="text-primary-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),dv=y('<div class="font-semibold">Sur toute la période</div>'),uv=y('du <span class="font-semibold"> </span> au <span class="font-semibold"> </span>',1),fv=y('le <span class="font-semibold"> </span>',1),hv=(n,e,t)=>e.onOpenGroupEditModal("store",i(t).map(r=>r.data.$id),i(t).map(r=>r.data)),pv=(n,e,t)=>e.onOpenGroupEditModal("who",i(t).map(r=>r.data.$id),i(t).map(r=>r.data)),vv=(n,e,t)=>e.onOpenGroupPurchaseModal(i(t).map(r=>r.data)),gv=y(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),mv=y('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),bv=y('<div class="flex flex-wrap items-center justify-end gap-2"><div class="alert px-4 py-1" title="Contient des dates passées - actions non disponibles"><!> <span class="hidden @md:block">Période partiellement passée</span></div></div>'),_v=y('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 text-lg font-bold @md:min-w-48"><!></div> <div class="text-primary-content"><!></div> <!></div>'),yv=(n,e,t)=>e.onOpenModal(i(t).$id,"recettes"),wv=(n,e,t)=>n.key==="Enter"&&e.onOpenModal(i(t).$id,"recettes"),Iv=y('<div class="text-base-content/60 text-sm font-normal"> </div>'),Sv=y('<div class="tooltip" data-tip="Ajouté manuellement, ne fait pas partie des recette"><!></div>'),xv=y('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),Ev=y('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),$v=y('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),Pv=y('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),Av=(n,e,t)=>e.onOpenModal(i(t).$id,"magasins"),Mv=(n,e,t)=>n.key==="Enter"&&e.onOpenModal(i(t).$id,"magasins"),kv=y('<div class="ml-1"><!></div>'),Tv=y('<div class="ml-1"> </div> <!>',1),Rv=y('<div class="ml-1 text-sm font-medium">?</div>'),Dv=(n,e,t)=>e.onOpenModal(i(t).$id,"volontaires"),Nv=(n,e,t)=>n.key==="Enter"&&e.onOpenModal(i(t).$id,"volontaires"),Cv=y('<span class="text-base-content/50 text-xs"> </span>'),qv=y('<div class="ml-1 flex gap-1"> <!></div>'),jv=y('<div class="ml-1 text-sm font-medium">?</div>'),Lv=y('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),Uv=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),Hv=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),Bv=y('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),zv=(n,e,t)=>e.onOpenModal(i(t).$id,"recettes"),Wv=(n,e,t)=>n.key==="Enter"&&e.onOpenModal(i(t).$id,"recettes"),Vv=y('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),Qv=y("<span> </span>"),Gv=y('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),Ov=(n,e,t,r)=>{n.stopPropagation(),e.onQuickValidation(i(t),i(r))},Kv=y('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><div class="cart-icon"></div> <span class="text-xs"> </span> <!></button>'),Jv=y(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),Yv=(n,e,t)=>e.onOpenModal(i(t).$id,"achats"),Xv=(n,e,t)=>n.key==="Enter"&&e.onOpenModal(i(t).$id,"achats"),Zv=y('<span class="text-xs opacity-75"> </span>'),Fv=y('<div><div class="flex items-center gap-1"><!> <span class="text-sm font-medium text-nowrap"> </span></div> <!></div>'),eg=y('<span class="text-base-content/50 text-xs italic">aucun</span>'),tg=y('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup effectués:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap justify-end gap-1.5"><!> <!></div></div></div></div></div>'),ng=y('<!> <div class="space-y-1"></div>',1),rg=y('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),ag=y('<div class="space-y-4 rounded-lg"></div> <!>',1);function sg(n,e){J(e,!0);const t={Package:la,MessageCircleQuestionMark:Lu,ShoppingCart:Rn,Clock:Zs,CircleCheck:Su,CircleX:xu,ClipboardCheck:Eu,PackageCheck:Uu,Check:Fn},r=te(()=>he.groupedFilteredProducts),a=te(()=>he.filters),s=te(()=>Sn(he.dateStore.start)),o=te(()=>Sn(he.dateStore.end)),c=te(()=>!he.dateStore.isEventPassed&&!he.dateStore.hasPastDatesInRange);var l=ag(),u=L(l);et(u,21,()=>Object.entries(i(r)),([g,m])=>g,(g,m)=>{var _=te(()=>Lr(i(m),2));let w=()=>i(_)[0];const I=te(()=>i(_)[1]);var E=ng(),k=L(E);{var P=T=>{const U=te(()=>Ba(w()));var x=_v(),z=d(x),F=d(z);{var G=re=>{var ue=cv(),le=d(ue);Pn(le,{size:20});var K=h(le);B(()=>j(K,` ${w()??""} (${i(I).length??""})`)),p(re,ue)},D=re=>{var ue=Z(),le=L(ue);{var K=N=>{var ee=lv(),q=d(ee);Tn(q,()=>i(U).icon,(Ae,X)=>{X(Ae,{size:20})});var oe=h(q,2),ie=d(oe),ge=h(oe,2),we=d(ge);B(()=>{j(ie,i(U).displayName),j(we,`(${i(I).length??""})`)}),p(N,ee)},W=N=>{var ee=dt();B(()=>j(ee,`📦 ${w()??""} (${i(I).length??""})`)),p(N,ee)};$(le,N=>{i(a).groupBy==="productType"?N(K):N(W,!1)},!0)}p(re,ue)};$(F,re=>{i(a).groupBy==="store"?re(G):re(D,!1)})}var ne=h(z,2),se=d(ne);{var ae=re=>{var ue=dv();p(re,ue)},R=re=>{var ue=Z(),le=L(ue);{var K=N=>{var ee=uv(),q=h(L(ee)),oe=d(q),ie=h(q,2),ge=d(ie);B(()=>{j(oe,i(s)),j(ge,i(o))}),p(N,ee)},W=N=>{var ee=fv(),q=h(L(ee)),oe=d(q);B(()=>j(oe,i(s))),p(N,ee)};$(le,N=>{he.dateStore.start!==he.dateStore.end?N(K):N(W,!1)},!0)}p(re,ue)};$(se,re=>{he.dateStore.isFullRange?re(ae):re(R,!1)})}var H=h(ne,2);{var me=re=>{var ue=mv(),le=d(ue);le.__click=[hv,e,I];var K=d(le);Pn(K,{size:16});var W=h(K,4);_r(W,{size:16});var N=h(le,2);N.__click=[pv,e,I];var ee=d(N);rn(ee,{size:16});var q=h(ee,4);_r(q,{size:16});var oe=h(N,2);{var ie=ge=>{var we=gv();we.__click=[vv,e,I];var Ae=d(we);Rn(Ae,{size:16});var X=h(Ae,4);Ys(X,{size:16}),p(ge,we)};$(oe,ge=>{i(I).some(we=>we.data.displayMissingQuantity!=="✅ Complet")&&ge(ie)})}p(re,ue)},ve=re=>{var ue=Z(),le=L(ue);{var K=W=>{var N=bv(),ee=d(N),q=d(ee);Zs(q,{size:16}),p(W,N)};$(le,W=>{he.dateStore.hasPastDatesInRange&&W(K)},!0)}p(re,ue)};$(H,re=>{i(c)?re(me):re(ve,!1)})}p(T,x)};$(k,T=>{w()!==""&&T(P)})}var A=h(k,2);et(A,21,()=>i(I),T=>T.data.$id,(T,U)=>{const x=te(()=>i(U).data),z=te(()=>i(U).stats),F=te(()=>Ba(i(x).productType)),G=te(()=>Cf(i(x).purchases||[])),D=te(()=>i(x).totalNeededOverrideParsed);var ne=tg(),se=d(ne),ae=d(se),R=d(ae);R.__click=[yv,e,x],R.__keydown=[wv,e,x];var H=d(R),me=d(H);Tn(me,()=>i(F).icon,(Ee,Pe)=>{Pe(Ee,{class:"text-base-content/80 h-4 w-4"})});var ve=h(me),re=h(ve);{var ue=Ee=>{var Pe=Iv(),Le=d(Pe);B(()=>j(Le,`Ancien: ${i(x).previousNames[0]??""}`)),p(Ee,Pe)};$(re,Ee=>{i(x).previousNames&&i(x).previousNames.length>0&&Ee(ue)})}var le=h(re,2);{var K=Ee=>{var Pe=Sv(),Le=d(Pe);Xs(Le,{class:"text-warning h-4 w-4"}),p(Ee,Pe)};$(le,Ee=>{i(x).productHugoUuid||Ee(K)})}var W=h(H,2),N=d(W);{var ee=Ee=>{var Pe=xv(),Le=d(Pe);Bi(Le,{class:"text-success h-4 w-4"}),p(Ee,Pe)};$(N,Ee=>{i(x).pFrais&&Ee(ee)})}var q=h(N,2);{var oe=Ee=>{var Pe=Ev(),Le=d(Pe);is(Le,{class:"text-info h-4 w-4"}),p(Ee,Pe)};$(q,Ee=>{i(x).pSurgel&&Ee(oe)})}var ie=h(W,2);{var ge=Ee=>{var Pe=$v(),Le=d(Pe);ca(Le,{class:"h-4 w-4 animate-spin"}),p(Ee,Pe)};$(ie,Ee=>{i(x).status==="isSyncing"&&Ee(ge)})}var we=h(ie,2);{var Ae=Ee=>{var Pe=Pv(),Le=d(Pe);et(Le,20,()=>i(z).concernedDates,Ne=>Ne,(Ne,We)=>{const st=te(()=>i(z).recipesByDate.get(We)||[]),ct=te(()=>i(U).data.dateDisplayInfo[We]);iv(Ne,{get dateDisplayInfo(){return i(ct)},get recipes(){return i(st)}})}),p(Ee,Pe)};$(we,Ee=>{i(z).concernedDates.length>0&&Ee(Ae)})}var X=h(R,2);{var O=Ee=>{var Pe=Lv(),Le=d(Pe);Le.__click=[Av,e,x],Le.__keydown=[Mv,e,x];var Ne=d(Le);Pn(Ne,{size:18});var We=h(Ne,2);{var st=yt=>{var Yt=Tv(),cr=L(Yt),pa=d(cr),va=h(cr,2);{var Xt=Hn=>{var Ar=kv(),Oi=d(Ar);sv(Oi,{get tip(){return i(x).storeInfo.storeComment},get icon(){return ju},iconSize:14}),p(Hn,Ar)};$(va,Hn=>{i(x).storeInfo?.storeComment&&Hn(Xt)})}B(()=>j(pa,i(x).storeInfo.storeName)),p(yt,Yt)},ct=yt=>{var Yt=Rv();p(yt,Yt)};$(We,yt=>{i(x).storeInfo?.storeName?yt(st):yt(ct,!1)})}var rt=h(Le,2);rt.__click=[Dv,e,x],rt.__keydown=[Nv,e,x];var Mt=d(rt);rn(Mt,{size:18});var qt=h(Mt,2);{var kt=yt=>{var Yt=qv(),cr=d(Yt),pa=h(cr);{var va=Xt=>{var Hn=Cv(),Ar=d(Hn);B(()=>j(Ar,`+${i(x).who.length-2}`)),p(Xt,Hn)};$(pa,Xt=>{i(x).who.length>2&&Xt(va)})}B(Xt=>j(cr,`${Xt??""} `),[()=>i(x).who.slice(0,2).map(Xt=>Xt.slice(0,3)).join(" | ")]),p(yt,Yt)},dn=yt=>{var Yt=jv();p(yt,Yt)};$(qt,yt=>{i(x).who&&i(x).who.length>0?yt(kt):yt(dn,!1)})}B(()=>{Te(Le,1,`btn btn-soft btn-sm group relative ${i(x).storeInfo?.storeName?"btn-success":""}`),Te(rt,1,`btn btn-sm btn-soft group relative ${i(x).who&&i(x).who?.length>0?"btn-success":""}`)}),p(Ee,Pe)},fe=Ee=>{var Pe=Bv(),Le=d(Pe);{var Ne=ct=>{var rt=Uv(),Mt=d(rt);Pn(Mt,{size:16});var qt=h(Mt);B(()=>j(qt,` ${i(x).storeInfo.storeName??""}`)),p(ct,rt)};$(Le,ct=>{i(x).storeInfo?.storeName&&ct(Ne)})}var We=h(Le,2);{var st=ct=>{var rt=Hv(),Mt=d(rt);rn(Mt,{size:16});var qt=h(Mt);B(kt=>j(qt,` ${kt??""}`),[()=>i(x).who.join(", ")]),p(ct,rt)};$(We,ct=>{i(x).who&&i(x).who.length>0&&ct(st)})}p(Ee,Pe)};$(X,Ee=>{i(c)?Ee(O):Ee(fe,!1)})}var de=h(ae,2),ce=d(de);ce.__click=[zv,e,x],ce.__keydown=[Wv,e,x];var qe=d(ce),Q=d(qe),_e=d(Q);Du(_e,{class:"h-4 w-4"});var Ve=h(Q,2),Qe=d(Ve),Ze=d(Qe);{var Re=Ee=>{var Pe=Vv(),Le=d(Pe),Ne=d(Le),We=h(Le,2);Xs(We,{class:"h-4 w-4"});var st=h(We);B(()=>{j(Ne,i(z).formattedQuantities),j(st,` ${i(D).totalOverride.q??""}
                          ${i(D).totalOverride.u??""}`)}),p(Ee,Pe)},Je=Ee=>{var Pe=Qv(),Le=d(Pe);B(()=>j(Le,i(z).formattedQuantities)),p(Ee,Pe)};$(Ze,Ee=>{i(D)?.totalOverride?Ee(Re):Ee(Je,!1)})}var bt=h(Qe,2);{var Me=Ee=>{var Pe=Gv(),Le=d(Pe),Ne=d(Le),We=h(Ne);ia(We,{class:"h-3 w-3"});var st=h(Le,2),ct=d(st),rt=h(ct);ds(rt,{class:"h-3 w-3"}),B(()=>{j(Ne,`${i(z).nbRecipes??""} `),j(ct,`${i(z).totalAssiettes??""} `)}),p(Ee,Pe)};$(bt,Ee=>{(i(z).nbRecipes||i(z).totalAssiettes)&&Ee(Me)})}var De=h(qe,2);{var Ke=Ee=>{var Pe=Kv();Pe.__click=[Ov,e,x,z];var Le=h(d(Pe),2),Ne=d(Le),We=h(Le,2);{var st=rt=>{wu(rt,{size:18})},ct=rt=>{Iu(rt,{size:18})};$(We,rt=>{ze.isMobile?rt(st):rt(ct,!1)})}B(()=>{sn(Pe,"title",`Acheter le manquant (${i(z).formattedMissingQuantities??""})`),j(Ne,i(z).formattedMissingQuantities)}),p(Ee,Pe)},ke=Ee=>{var Pe=Z(),Le=L(Pe);{var Ne=We=>{Ys(We,{size:24,class:"text-success ms-auto"})};$(Le,We=>{i(c)&&We(Ne)},!0)}p(Ee,Pe)};$(De,Ee=>{i(c)&&i(z).hasMissing?Ee(Ke):Ee(ke,!1)})}var at=h(De,2);{var ft=Ee=>{var Pe=Jv(),Le=d(Pe);yu(Le,{size:18}),p(Ee,Pe)};$(at,Ee=>{i(c)&&i(D)?.hasUnresolvedChangedSinceOverride&&Ee(ft)})}var $e=h(ce,2);$e.__click=[Yv,e,x],$e.__keydown=[Xv,e,x];var Ce=d($e),Ge=d(Ce),tt=d(Ge);Rn(tt,{class:"h-4 w-4"});var nt=h(Ge,2),_t=h(Ce,2),ht=d(_t);et(ht,17,()=>i(G),xt,(Ee,Pe)=>{const Le=te(()=>t[i(Pe).icon]);var Ne=Fv(),We=d(Ne),st=d(We);Tn(st,()=>i(Le),(kt,dn)=>{dn(kt,{class:"h-4 w-4"})});var ct=h(st,2),rt=d(ct),Mt=h(We,2);{var qt=kt=>{var dn=Zv(),yt=d(dn);B(()=>j(yt,`livré le: ${i(Pe).deliveryDate??""}`)),p(kt,dn)};$(Mt,kt=>{i(Pe).deliveryDate&&kt(qt)})}B(()=>{Te(Ne,1,`badge badge-outline flex h-fit flex-col items-center gap-1 py-1 ${i(Pe).badgeClass??""}`),j(rt,`${i(Pe).quantity??""}
                          ${i(Pe).unit??""}`)}),p(Ee,Ne)});var Bt=h(ht,2);{var wn=Ee=>{var Pe=eg();p(Ee,Pe)};$(Bt,Ee=>{i(G).length===0&&Ee(wn)})}B(()=>{Te(ne,1,`card bg-base-100 border-base-300 ${i(x).status==="isSyncing"?"border-accent bg-accent/30 animate-pulse border-2":""}`),j(ve,`${i(x).productName??""} `),Te(Qe,1,`text-base font-bold ${i(z).hasMissing&&i(c)?"text-error":"text-success"}`),Te(nt,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${i(c)?"group-hover:opacity-100":""} sm:opacity-0`)}),p(T,ne)}),p(g,E)});var f=h(u,2);{var v=g=>{var m=rg();p(g,m)};$(f,g=>{Object.values(i(r)).flat().length===0&&g(v)})}p(n,l),Y()}Xe(["click","keydown"]);function no(n,e,t){i(e)||t.onClose()}var og=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),ig=(n,e)=>b(e,"empty"),cg=(n,e)=>b(e,"all"),lg=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),dg=y("<!> ",1),ug=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <div><!></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function fg(n,e){J(e,!0);let t=C(!1),r=C(null),a=C(null),s=C(Ue(e.products.length>0&&e.products[0].storeInfo?e.products[0].storeInfo.storeName:"")),o=C(Ue(e.products.length>0&&e.products[0].storeInfo&&e.products[0].storeInfo.storeComment||"")),c=C(Ue({})),l=C("empty");Kt(()=>{const N={};e.products.forEach(ee=>{e.productIds.includes(ee.$id)&&(i(l)==="empty"?N[ee.$id]=!ee.storeInfo||!ee.storeInfo.storeName:N[ee.$id]=!0)}),b(c,N,!0)});const u=te(()=>e.products.map(N=>({id:N.$id,label:N.productName,title:N.productName,selected:i(c)[N.$id]}))),f=te(()=>i(u).filter(N=>N.selected)),v=te(()=>`Attribuer un magasin (${i(f).length} produits sélectionnés)`),g=te(()=>i(f).length===0?!1:i(s).trim().length>0);async function m(){if(!i(g)||i(t))return;b(r,null),b(a,null);const N=i(f).map(q=>q.id),ee=e.products.filter(q=>N.includes(q.$id));he.setSyncStatus(N,!0),ze.backgroundOperation={isRunning:!0,name:`Mise à jour magasin (${N.length} produits)`,progress:0},e.onClose();try{const q={storeName:i(s).trim(),storeComment:i(o).trim()},oe=await wi(N,ee,q);if(oe.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${oe.updatedCount} produits modifiés`),Fe.success(`Magasin mis à jour pour ${oe.updatedCount} produits.`),e.onSuccess?.(oe);else throw new Error(oe.error||"Erreur lors de la mise à jour")}catch(q){const oe=q instanceof Error?q.message:"Erreur inconnue";console.error("[StoreEditModal] Erreur mise à jour:",q),Fe.error(`Erreur mise à jour magasin: ${oe}`),he.clearSyncStatus()}finally{b(t,!1),ze.backgroundOperation={isRunning:!1,name:"",progress:0}}}function _(N){i(c)[N]=!i(c)[N]}var w=ug(),S=d(w),I=d(S),E=d(I),k=d(E),P=h(E,2);P.__click=[no,t,e];var A=d(P);$t(A,{class:"h-4 w-4"});var T=h(I,2),U=d(T);{var x=N=>{var ee=og(),q=d(ee);da(q,{class:"h-4 w-4"});var oe=h(q,2),ie=d(oe);B(()=>j(ie,i(r))),p(N,ee)};$(U,N=>{i(r)&&N(x)})}var z=h(U,2),F=d(z),G=d(F);or(G,{get suggestions(){return he.uniqueStores},get disabled(){return i(t)},id:"store-name-input",get value(){return i(s)},set value(N){b(s,N,!0)}});var D=h(F,2),ne=d(D);ir(ne,{get disabled(){return i(t)},id:"store-comment-textarea",get value(){return i(o)},set value(N){b(o,N,!0)}});var se=h(z,2),ae=h(d(se),2),R=d(ae);R.__click=[ig,l];var H=h(R,2);H.__click=[cg,l];var me=h(ae,2);yr(me,{get items(){return i(u)},onToggleItem:_,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var ve=h(T,2),re=d(ve);re.__click=[no,t,e];var ue=h(re,2);ue.__click=m;var le=d(ue);{var K=N=>{var ee=lg();p(N,ee)},W=N=>{var ee=dg(),q=L(ee);Fn(q,{class:"h-4 w-4"});var oe=h(q);B(()=>j(oe,` Appliquer à ${i(f).length??""} produit(s)`)),p(N,ee)};$(le,N=>{i(t)?N(K):N(W,!1)})}B(()=>{j(k,i(v)),P.disabled=i(t),Te(R,1,`tab ${i(l)==="empty"?"tab-active":""}`),Te(H,1,`tab ${i(l)==="all"?"tab-active":""}`),re.disabled=i(t),ue.disabled=i(t)||!i(g)}),p(n,w),Y()}Xe(["click"]);function ro(n,e,t){i(e)||t.onClose()}var hg=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),pg=(n,e)=>b(e,"empty"),vg=(n,e)=>b(e,"all"),gg=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),mg=y("<!> ",1),bg=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><div><!></div> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="text-base-content/70">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function _g(n,e){J(e,!0);let t=C(!1),r=C(null),a=C(null),s=C(Ue([])),o=C(""),c=C("empty"),l=C(Ue({}));Kt(()=>{const O={};e.products.forEach(fe=>{e.productIds.includes(fe.$id)&&(i(c)==="empty"?O[fe.$id]=!fe.who||fe.who.length===0:O[fe.$id]=!0)}),b(l,O,!0)});const u=te(()=>e.products.map(O=>({id:O.$id,label:O.productName,title:O.productName,selected:i(l)[O.$id]}))),f=te(()=>i(u).filter(O=>O.selected)),v=te(()=>{const O=new Set([...he.uniqueWho,...i(s)]);return Array.from(O).map(fe=>({id:fe,label:fe,selected:i(s).includes(fe)}))}),g=te(()=>`Gérer les volontaires (${i(f).length} produits sélectionnés)`),m=te(()=>i(f).length===0?!1:i(s).length>0);async function _(){if(!i(m)||i(t))return;b(r,null),b(a,null);const O=i(f).map(de=>de.id),fe=e.products.filter(de=>O.includes(de.$id));he.setSyncStatus(O,!0),ze.backgroundOperation={isRunning:!0,name:`Mise à jour volontaires (${O.length} produits)`,progress:0},e.onClose();try{const de=await Ii(O,fe,i(s),"replace");if(de.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${de.updatedCount} produits modifiés`),Fe.success(`Volontaires mis à jour pour ${de.updatedCount} produits.`),e.onSuccess?.(de);else throw new Error(de.error||"Erreur lors de la mise à jour")}catch(de){const ce=de instanceof Error?de.message:"Erreur inconnue";console.error("[WhoEditModal] Erreur mise à jour:",de),Fe.error(`Erreur mise à jour volontaires: ${ce}`),he.clearSyncStatus()}finally{b(t,!1),ze.backgroundOperation={isRunning:!1,name:"",progress:0}}}function w(O){const fe=O.trim();fe&&!i(s).includes(fe)&&b(s,[...i(s),fe],!0)}function S(O){b(s,i(s).filter(fe=>fe!==O),!0)}function I(O){i(s).includes(O)?S(O):w(O)}function E(){i(o).trim()&&(w(i(o)),b(o,""))}function k(O){i(l)[O]=!i(l)[O]}var P=bg(),A=d(P),T=d(A),U=d(T),x=d(U),z=h(U,2);z.__click=[ro,t,e];var F=d(z);$t(F,{class:"h-4 w-4"});var G=h(T,2),D=d(G);{var ne=O=>{var fe=hg(),de=d(fe);da(de,{class:"h-4 w-4"});var ce=h(de,2),qe=d(ce);B(()=>j(qe,i(r))),p(O,fe)};$(D,O=>{i(r)&&O(ne)})}var se=h(D,2),ae=d(se),R=d(ae),H=d(R),me=d(H);Pr(me,{get disabled(){return i(t)},onkeydown:O=>{O.key==="Enter"&&(O.preventDefault(),E())},get value(){return i(o)},set value(O){b(o,O,!0)}});var ve=h(H,2);ve.__click=E;var re=d(ve);cs(re,{size:16});var ue=h(R,2),le=h(d(ue),2);yr(le,{get items(){return i(v)},onToggleItem:I,showIcon:!0,badgeSize:"btn-sm",badgeStyle:"btn-soft"});var K=h(se,2),W=h(d(K),2),N=d(W);N.__click=[pg,c];var ee=h(N,2);ee.__click=[vg,c];var q=h(W,2);yr(q,{get items(){return i(u)},onToggleItem:k,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var oe=h(G,2),ie=d(oe);ie.__click=[ro,t,e];var ge=h(ie,2);ge.__click=_;var we=d(ge);{var Ae=O=>{var fe=gg();p(O,fe)},X=O=>{var fe=mg(),de=L(fe);Fn(de,{class:"h-4 w-4"});var ce=h(de);B(()=>j(ce,` Appliquer à ${i(f).length??""} produit(s)`)),p(O,fe)};$(we,O=>{i(t)?O(Ae):O(X,!1)})}B(O=>{j(x,i(g)),z.disabled=i(t),ve.disabled=O,Te(N,1,`tab ${i(c)==="empty"?"tab-active":""}`),Te(ee,1,`tab ${i(c)==="all"?"tab-active":""}`),ie.disabled=i(t),ge.disabled=i(t)||!i(m)},[()=>i(t)||!i(o).trim()]),p(n,P),Y()}Xe(["click"]);async function yg(n,e,t,r,a,s){if(!i(e).invoiceTotal||i(e).invoiceTotal<=0){b(t,"Le montant doit être supérieur à 0");return}b(r,!0),b(t,null);try{const o=he.currentMainId;if(!o)throw new Error("Aucun événement principal actif");i(a)?await ss(i(a),{price:i(e).invoiceTotal,invoiceTotal:i(e).invoiceTotal,store:i(e).store,notes:i(e).notes,who:i(e).who}):await xi(o,void 0,i(e).invoiceTotal,i(e).store,i(e).notes,i(e).who),s()}catch(o){console.error("Erreur sauvegarde dépense:",o),b(t,o.message,!0)}finally{b(r,!1)}}var wg=(n,e)=>e(!1),Ig=y('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),Sg=y('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),xg=(n,e)=>b(e,!0),Eg=y('<button class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> Ajouter une dépense</button>'),$g=y('<span class="loading loading-spinner loading-xs"></span>'),Pg=y('<div class="text-error mt-2 text-xs"> </div>'),Ag=y('<div class="card bg-base-200 animate-in fade-in slide-in-from-top-4 shadow-md duration-300"><div class="card-body p-4"><h4 class="card-title text-sm"> </h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><!> <!> <!> <!></div> <div class="card-actions mt-2 justify-end"><button class="btn btn-sm btn-ghost">Annuler</button> <button class="btn btn-sm btn-primary"><!> </button></div> <!></div></div>'),Mg=(n,e)=>e("date"),kg=(n,e)=>e("store"),Tg=(n,e)=>e("who"),Rg=(n,e)=>e("amount"),Dg=y('<span class="text-base-content/70 italic"> </span>'),Ng=y('<span class="text-base-content/50 ml-1 text-xs"> </span>'),Cg=y('<span class="font-medium"> </span> <!>',1),qg=(n,e,t)=>e(i(t)),jg=y('<tr class="hover"><td class="whitespace-nowrap"> </td><td class="max-w-xs truncate"><!></td><td> </td><td> </td><td class="text-right font-mono font-bold"> </td><td><button class="btn btn-ghost btn-square"><!></button></td></tr>'),Lg=y('<tr><td colspan="7" class="text-base-content/50 py-8 text-center">Aucune dépense trouvée</td></tr>'),Ug=(n,e)=>e(!1),Hg=(n,e)=>e(!1),Bg=y('<dialog><div class="modal-box bg-base-100 flex h-[90vh] w-11/12 max-w-5xl flex-col p-0"><div class="border-base-300 bg-base-200 sticky top-0 z-10 flex items-center justify-between border-b p-4"><h3 class="flex items-center gap-2 text-lg font-bold"><!> Gestion des Dépenses</h3> <button class="btn btn-sm btn-circle btn-ghost">✕</button></div> <div class="flex-1 space-y-6 overflow-y-auto p-4"><div class="grid grid-cols-1 gap-4 md:grid-cols-3"><div class="stats bg-primary text-primary-content shadow"><div class="stat"><div class="stat-title text-primary-content/80">Total Global</div> <div class="stat-value"> </div> <div class="stat-desc text-primary-content/80"> </div></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Magasin</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Acheteur</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div></div> <div class="flex items-center justify-between"><h4 class="text-sm font-bold uppercase opacity-70">Liste des transactions</h4> <!></div> <!> <div class="bg-base-100 border-base-200 overflow-x-auto rounded-lg border"><table class="table-zebra table-xs table w-full"><thead class="bg-base-200 sticky top-0"><tr><th class="hover:bg-base-300 cursor-pointer"> </th><th>Description</th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer text-right"> </th><th><!></th></tr></thead><tbody><!><!></tbody></table></div></div> <div class="border-base-300 bg-base-200 sticky bottom-0 z-10 flex items-center justify-between border-t px-4 py-1"><button class="btn btn-ghost ms-auto">Fermer</button></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');function zg(n,e){J(e,!0);let t=Ie(e,"isOpen",15,!1),r=C(!1),a=C(null),s=C(!1),o=C(Ue({invoiceTotal:0,store:"",notes:"",who:""})),c=C(null);Kt(()=>{if(t()&&!i(c)){const Me=localStorage.getItem("appwrite-user-name");Me&&(i(o).who=Me)}});let l=C("date"),u=C("desc"),f=te(()=>he.financialStats),v=te(()=>i(f).allPurchases),g=te(()=>{let Me=[...i(v)];return Me.sort((De,Ke)=>{let ke,at;switch(i(l)){case"date":ke=new Date(De.orderDate||De.$createdAt).getTime(),at=new Date(Ke.orderDate||Ke.$createdAt).getTime();break;case"amount":ke=De.invoiceTotal||De.price||0,at=Ke.invoiceTotal||Ke.price||0;break;case"store":ke=(De.store||"").toLowerCase(),at=(Ke.store||"").toLowerCase();break;case"who":ke=(De.who||"").toLowerCase(),at=(Ke.who||"").toLowerCase();break}return ke<at?i(u)==="asc"?-1:1:ke>at?i(u)==="asc"?1:-1:0}),Me});function m(Me){i(l)===Me?b(u,i(u)==="asc"?"desc":"asc",!0):(b(l,Me,!0),b(u,"desc"))}function _(){const Me=localStorage.getItem("appwrite-user-name")||"";b(o,{invoiceTotal:0,store:"",notes:"",who:Me},!0),b(c,null),b(s,!1)}function w(Me){b(o,{invoiceTotal:Me.invoiceTotal||Me.price||0,store:Me.store||"",notes:Me.notes||"",who:Me.who||""},!0),b(c,Me.$id,!0),b(s,!0)}function S(Me){return Me?new Date(Me).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"-"}function I(Me){return(Me||0).toFixed(2)+" €"}var E=Bg(),k=d(E),P=d(k),A=d(P),T=d(A);Ti(T,{});var U=h(A,2);U.__click=[wg,t];var x=h(P,2),z=d(x),F=d(z),G=d(F),D=h(d(G),2),ne=d(D),se=h(D,2),ae=d(se),R=h(F,2),H=h(d(R),2);et(H,21,()=>Object.entries(i(f).byStore).sort((Me,De)=>De[1]-Me[1]),xt,(Me,De)=>{var Ke=te(()=>Lr(i(De),2));let ke=()=>i(Ke)[0],at=()=>i(Ke)[1];var ft=Ig(),$e=d(ft),Ce=d($e),Ge=h($e,2),tt=d(Ge);B(nt=>{j(Ce,ke()),j(tt,nt)},[()=>I(at())]),p(Me,ft)});var me=h(R,2),ve=h(d(me),2);et(ve,21,()=>Object.entries(i(f).byWho).sort((Me,De)=>De[1]-Me[1]),xt,(Me,De)=>{var Ke=te(()=>Lr(i(De),2));let ke=()=>i(Ke)[0],at=()=>i(Ke)[1];var ft=Sg(),$e=d(ft),Ce=d($e),Ge=h($e,2),tt=d(Ge);B(nt=>{j(Ce,ke()),j(tt,nt)},[()=>I(at())]),p(Me,ft)});var re=h(z,2),ue=h(d(re),2);{var le=Me=>{var De=Eg();De.__click=[xg,s],p(Me,De)};$(ue,Me=>{i(s)||Me(le)})}var K=h(re,2);{var W=Me=>{var De=Ag(),Ke=d(De),ke=d(Ke),at=d(ke),ft=h(ke,2),$e=d(ft);fs($e,{get disabled(){return i(r)},get value(){return i(o).invoiceTotal},set value(Ne){i(o).invoiceTotal=Ne}});var Ce=h($e,2);or(Ce,{get suggestions(){return he.uniqueStores},get disabled(){return i(r)},get value(){return i(o).store},set value(Ne){i(o).store=Ne}});var Ge=h(Ce,2);Pr(Ge,{get suggestions(){return he.uniqueWho},get disabled(){return i(r)},get value(){return i(o).who},set value(Ne){i(o).who=Ne}});var tt=h(Ge,2);ir(tt,{get disabled(){return i(r)},get value(){return i(o).notes},set value(Ne){i(o).notes=Ne}});var nt=h(ft,2),_t=d(nt);_t.__click=_;var ht=h(_t,2);ht.__click=[yg,o,a,r,c,_];var Bt=d(ht);{var wn=Ne=>{var We=$g();p(Ne,We)};$(Bt,Ne=>{i(r)&&Ne(wn)})}var Ee=h(Bt),Pe=h(nt,2);{var Le=Ne=>{var We=Pg(),st=d(We);B(()=>j(st,i(a))),p(Ne,We)};$(Pe,Ne=>{i(a)&&Ne(Le)})}B(()=>{j(at,i(c)?"Modifier la dépense":"Nouvelle Dépense"),ht.disabled=i(r),j(Ee,` ${i(c)?"Enregistrer":"Ajouter"}`)}),p(Me,De)};$(K,Me=>{i(s)&&Me(W)})}var N=h(K,2),ee=d(N),q=d(ee),oe=d(q),ie=d(oe);ie.__click=[Mg,m];var ge=d(ie),we=h(ie,2);we.__click=[kg,m];var Ae=d(we),X=h(we);X.__click=[Tg,m];var O=d(X),fe=h(X);fe.__click=[Rg,m];var de=d(fe),ce=h(fe),qe=d(ce);Bu(qe,{size:14});var Q=h(q),_e=d(Q);et(_e,17,()=>i(g),Me=>Me.$id,(Me,De)=>{var Ke=jg(),ke=d(Ke),at=d(ke),ft=h(ke),$e=d(ft);{var Ce=Ne=>{var We=Dg(),st=d(We);B(()=>j(st,i(De).notes||"-")),p(Ne,We)},Ge=Ne=>{var We=Cg(),st=L(We),ct=d(st),rt=h(st,2);{var Mt=qt=>{var kt=Ng(),dn=d(kt);B(()=>j(dn,`- ${i(De).notes??""}`)),p(qt,kt)};$(rt,qt=>{i(De).notes&&qt(Mt)})}B(()=>j(ct,i(De)._productName||"Produit inconnu")),p(Ne,We)};$($e,Ne=>{i(De).status==="expense"?Ne(Ce):Ne(Ge,!1)})}var tt=h(ft),nt=d(tt),_t=h(tt),ht=d(_t),Bt=h(_t),wn=d(Bt),Ee=h(Bt),Pe=d(Ee);Pe.__click=[qg,w,De];var Le=d(Pe);_r(Le,{size:14}),B((Ne,We)=>{j(at,Ne),j(nt,i(De).store||"-"),j(ht,i(De).who||"-"),j(wn,We)},[()=>S(i(De).orderDate||i(De).$createdAt),()=>I(i(De).invoiceTotal||i(De).price)]),p(Me,Ke)});var Ve=h(_e);{var Qe=Me=>{var De=Lg();p(Me,De)};$(Ve,Me=>{i(g).length===0&&Me(Qe)})}var Ze=h(x,2),Re=d(Ze);Re.__click=[Ug,t];var Je=h(k,2),bt=d(Je);bt.__click=[Hg,t],B(Me=>{Te(E,1,`modal ${t()?"modal-open":""}`),j(ne,Me),j(ae,`${i(v).length??""} transactions`),j(ge,`Date ${i(l)==="date"?i(u)==="asc"?"↑":"↓":""}`),j(Ae,`Magasin ${i(l)==="store"?i(u)==="asc"?"↑":"↓":""}`),j(O,`Qui ${i(l)==="who"?i(u)==="asc"?"↑":"↓":""}`),j(de,`Montant ${i(l)==="amount"?i(u)==="asc"?"↑":"↓":""}`)},[()=>I(i(f).totalGlobal)]),p(n,E),Y()}Xe(["click"]);var Wg=y("<div><!></div>"),Vg=y('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Qg(n,e){J(e,!0);let t=C(!1),r=Ie(e,"width",3,"80"),a=Ie(e,"bgClass",3,"bg-base-300");const s=te(()=>"w-"+r());var o=Z(),c=L(o);{var l=f=>{var v=Wg(),g=d(v);be(g,()=>e.children??pe),B(()=>Te(v,1,`${a()??""} ${(i(s)?i(s):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),p(f,v)},u=f=>{var v=Vg(),g=L(v),m=d(g),_=h(m,2),w=h(d(_),2),S=d(w);be(S,()=>e.children??pe);var I=h(g,2),E=d(I),k=d(E);Ni(k,{class:"h-6 w-6"}),Ca(m,()=>i(t),P=>b(t,P)),p(f,v)};$(c,f=>{ze.isMobile?f(u,!1):f(l)})}p(n,o),Y()}function Gg(n,e){b(e,!0)}var Og=(n,e)=>b(e,!0),Kg=y('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button> <button class="btn btn-sm btn-primary" title="Ajouter un produit manuellement"><!> Produit</button></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Jg(n,e){J(e,!0);const t="100",r=te(()=>he.stats);let a=C(null),s=C("recettes"),o=C(!1),c=C(!1),l=C(Ue([])),u=C(Ue([])),f=C(!1),v=C(Ue([])),g=C(!1);function m(q,oe="recettes"){b(s,oe,!0),b(a,q,!0)}function _(){b(a,null)}function w(q,oe,ie){b(l,oe,!0),b(u,ie,!0),b(q==="who"?o:c,!0)}function S(q){(!q||q==="who")&&b(o,!1),(!q||q==="store")&&b(c,!1),b(l,[],!0),b(u,[],!0)}function I(q){console.log(`[ProductsTable] Modification groupée réussie: ${q.updatedCount} produits`)}function E(q){const oe=q.filter(ie=>he.getProductModelById(ie.$id)?.stats.hasMissing);console.log(`[ProductsTable] openGroupPurchaseModal: ${q.length} produits reçus → ${oe.length} produits avec quantités manquantes`),b(v,oe,!0),b(f,!0)}function k(){b(f,!1),b(v,[],!0)}function P(){console.log("[ProductsTable] Achat groupé créé avec succès"),k()}async function A(q,oe){try{if(!he.currentMainId)throw new Error("mainId non disponible");const ie=oe.missingQuantities||[];if(ie.length===0){console.log("Aucune quantité manquante à valider pour ce produit dans cette période");return}const ge=ie.filter(Ae=>Ae.q<0).map(Ae=>({...Ae,q:Math.abs(Ae.q)})).map(Ae=>{const{quantity:X,unit:O}=za(Ae.q,Ae.u);return{q:X,u:O}});let we=q.$id;q.isSynced||(console.log(`[ProductsTable] Produit ${q.$id} local, création pour validation rapide...`),we=(await Zt(q.$id,{},X=>he.getEnrichedProductById(X))).$id,console.log(`[ProductsTable] Produit sync créé: ${we}`)),await Si(he.currentMainId,we,ge,{store:q.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${q.productName}`)}catch(ie){console.error("[ProductsTable] Erreur validation rapide:",ie),alert("Erreur lors de la validation rapide: "+ie.message)}}let T=C(!1);var U=Kg(),x=d(U),z=d(x),F=d(z);Tu(F,{class:"mr-1 h-4 w-4"});var G=h(F),D=h(z,2);D.__click=[Og,T];var ne=d(D);Ti(ne,{class:"mr-1 h-4 w-4"});var se=h(D,2);se.__click=[Gg,g];var ae=d(se);Un(ae,{class:"mr-1 h-4 w-4"});var R=h(x,2);Qg(R,{width:t,children:(q,oe)=>{rv(q,{})},$$slots:{default:!0}});var H=h(R,2);sg(H,{onOpenModal:m,onOpenGroupEditModal:w,onOpenGroupPurchaseModal:E,onQuickValidation:A});var me=h(H,2);{let q=te(()=>i(a)||"");yp(me,{get productId(){return i(q)},get initialTab(){return i(s)},onClose:_})}var ve=h(me,2);{var re=q=>{_g(q,{get productIds(){return i(l)},get products(){return i(u)},onClose:()=>S("who"),onSuccess:I})};$(ve,q=>{i(o)&&q(re)})}var ue=h(ve,2);{var le=q=>{fg(q,{get productIds(){return i(l)},get products(){return i(u)},onClose:()=>S("store"),onSuccess:I})};$(ue,q=>{i(c)&&q(le)})}var K=h(ue,2);{var W=q=>{Pf(q,{get products(){return i(v)},onClose:k,onSuccess:P})};$(K,q=>{i(f)&&q(W)})}var N=h(K,2);Df(N,{get open(){return i(g)},set open(q){b(g,q,!0)}});var ee=h(N,2);zg(ee,{get isOpen(){return i(T)},set isOpen(q){b(T,q,!0)}}),B(()=>{Te(U,1,`space-y-6 ${ze.isMobile?"":"ml-100"}`),j(G,` ${i(r).total??""}`)}),p(n,U),Y()}Xe(["click"]);var Yg=y('<div class="flex items-center justify-center py-20"><!></div>'),Xg=y('<div class="alert alert-error shadow-lg"><span> </span></div>'),Zg=y(`<div class="bg-base-200/50 rounded-box border-base-200 border-2 border-dashed py-20 text-center"><div class="bg-base-200 mb-4 inline-block rounded-full p-4"><!></div> <h3 class="mb-2 text-lg font-bold">Aucun événement</h3> <p class="text-base-content/60 mb-6">Vous n'avez pas encore créé d'événement.</p> <button class="btn btn-primary btn-sm">Créer mon premier événement</button></div>`),Fg=(n,e,t)=>e.onSelectEvent(i(t).$id),em=y('<div class="badge badge-ghost text-xs"> </div>'),tm=y('<button class="card bg-base-100 border-base-200 hover:border-primary/50 group border text-left shadow-xl transition-all hover:shadow-2xl"><div class="card-body"><div class="mb-2 flex items-start justify-between"><h3 class="card-title group-hover:text-primary text-lg transition-colors"> </h3> <!></div> <div class="text-base-content/70 mt-2 flex items-center gap-4 text-sm"><div class="flex items-center gap-1"><!> <span>-</span></div> <div class="flex items-center gap-1"><!> <span> </span></div></div> <div class="card-actions mt-4 justify-end"><span class="text-primary flex items-center gap-1 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100">Ouvrir <!></span></div></div></button>'),nm=y('<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>'),rm=y('<div class="container mx-auto max-w-5xl px-4 py-8"><div class="mb-8 flex items-center justify-between"><div><h1 class="mb-2 text-3xl font-bold">Mes Événements</h1> <p class="text-base-content/60">Gérez vos menus et listes de courses</p></div> <button class="btn btn-primary"><!> Nouvel Événement</button></div> <!></div>');function am(n,e){J(e,!0);function t(f){return f?new Date(f).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"}):"Date inconnue"}var r=rm(),a=d(r),s=h(d(a),2);s.__click=function(...f){e.onCreateEvent?.apply(this,f)};var o=d(s);Un(o,{class:"mr-2 h-5 w-5"});var c=h(a,2);{var l=f=>{var v=Yg(),g=d(v);ca(g,{class:"text-primary h-8 w-8 animate-spin"}),p(f,v)},u=f=>{var v=Z(),g=L(v);{var m=w=>{var S=Xg(),I=d(S),E=d(I);B(()=>j(E,un.error)),p(w,S)},_=w=>{var S=Z(),I=L(S);{var E=P=>{var A=Zg(),T=d(A),U=d(T);Kn(U,{class:"h-8 w-8 opacity-50"});var x=h(T,6);x.__click=function(...z){e.onCreateEvent?.apply(this,z)},p(P,A)},k=P=>{var A=nm();et(A,21,()=>un.events,xt,(T,U)=>{var x=tm();x.__click=[Fg,e,U];var z=d(x),F=d(z),G=d(F),D=d(G),ne=h(G,2);{var se=N=>{var ee=em(),q=d(ee);B(oe=>j(q,oe),[()=>t(i(U).dates[0])]),p(N,ee)};$(ne,N=>{i(U).dates&&i(U).dates.length>0&&N(se)})}var ae=h(F,2),R=d(ae),H=d(R);rn(H,{class:"h-4 w-4"});var me=h(R,2),ve=d(me);Kn(ve,{class:"h-4 w-4"});var re=h(ve,2),ue=d(re),le=h(ae,2),K=d(le),W=h(d(K));_u(W,{class:"h-4 w-4"}),B(()=>{j(D,i(U).name),j(ue,`${(i(U).dates?.length||0)??""} jours`)}),p(T,x)}),p(P,A)};$(I,P=>{un.count===0?P(E):P(k,!1)},!0)}p(w,S)};$(g,w=>{un.error?w(m):w(_,!1)},!0)}p(f,v)};$(c,f=>{un.loading&&un.count===0?f(l):f(u,!1)})}p(n,r),Y()}Xe(["click"]);function sm(n,e,t,r,a){i(e)&&t.onSelect(i(e),i(r),i(a))}var om=y('<div class="absolute top-1/2 right-3 -translate-y-1/2"><!></div>'),im=y('<div class="text-base-content/60 mt-2 py-2 text-center text-xs">Aucune recette trouvée</div>'),cm=(n,e,t)=>e(i(t)),lm=y('<li><button class="flex items-center gap-2 py-2 text-left"><div class="bg-base-100 rounded p-1"><!></div> <span class="truncate text-sm"> </span></button></li>'),dm=y('<ul class="menu bg-base-200/50 rounded-box mt-2 gap-1 p-1"></ul>'),um=y('<div><div class="relative"><!> <input type="text" placeholder="Rechercher une recette..." class="input input-sm w-full pl-9"/> <!></div> <!> <!></div>'),fm=(n,e)=>b(e,null),hm=y('<div class="bg-base-200/50 space-y-3 rounded-lg p-3"><div class="flex items-start gap-3"><div class="bg-primary/10 text-primary rounded-lg p-2"><!></div> <div class="min-w-0 flex-1"><div class="truncate font-medium"> </div> <button class="text-primary mt-0.5 text-xs hover:underline">Changer de recette</button></div></div> <div class="grid grid-cols-2 gap-2"><div><label class="label py-1 text-xs">Type</label> <select class="select select-bordered select-xs w-full"><option>Entrée</option><option>Plat</option><option>Dessert</option></select></div> <div><label class="label py-1 text-xs">Couverts</label> <input type="number" class="input w-full" min="1"/></div></div> <div class="mt-2 flex justify-end gap-2"><button class="btn btn-ghost btn-xs">Annuler</button> <button class="btn btn-primary btn-xs">Confirmer</button></div></div>'),pm=y('<div class="card bg-base-100 border-base-300 border shadow-sm"><div class="card-body gap-3 p-3"><div class="flex items-center justify-between"><h4 class="flex items-center gap-2 text-sm font-bold"><!> Ajouter une recette</h4> <button class="btn btn-ghost btn-xs btn-square"><!></button></div> <!></div></div>');function vm(n,e){J(e,!0);let t=Ie(e,"defaultPlates",3,4),r=C(""),a=C("plat"),s=C(Ue(t())),o=C(null),c=C(!1),l=te(()=>i(r).length>1?Wr.searchRecipes(i(r)).slice(0,5):[]);async function u(P){b(c,!0);try{const A=await Wr.getRecipeByUuid(P.u);A&&b(o,A,!0)}catch(A){console.error("Erreur lors du chargement de la recette",A)}finally{b(c,!1)}}var f=pm(),v=d(f),g=d(v),m=d(g),_=d(m);Un(_,{class:"text-primary h-4 w-4"});var w=h(m,2);w.__click=function(...P){e.onCancel?.apply(this,P)};var S=d(w);$t(S,{class:"h-4 w-4"});var I=h(g,2);{var E=P=>{var A=um(),T=d(A),U=d(T);Hi(U,{class:"text-base-content/50 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"});var x=h(U,2),z=h(x,2);{var F=ae=>{var R=om(),H=d(R);ca(H,{class:"text-primary h-4 w-4 animate-spin"}),p(ae,R)};$(z,ae=>{i(c)&&ae(F)})}var G=h(T,2);{var D=ae=>{var R=im();p(ae,R)};$(G,ae=>{i(r).length>1&&i(l).length===0&&ae(D)})}var ne=h(G,2);{var se=ae=>{var R=dm();et(R,21,()=>i(l),xt,(H,me)=>{var ve=lm(),re=d(ve);re.__click=[cm,u,me];var ue=d(re),le=d(ue);Vr(le,{class:"h-3 w-3 opacity-70"});var K=h(ue,2),W=d(K);B(()=>{re.disabled=i(c),j(W,i(me).n)}),p(H,ve)}),p(ae,R)};$(ne,ae=>{i(l).length>0&&ae(se)})}Oe(x,()=>i(r),ae=>b(r,ae)),p(P,A)},k=P=>{var A=hm(),T=d(A),U=d(T),x=d(U);Vr(x,{class:"h-5 w-5"});var z=h(U,2),F=d(z),G=d(F),D=h(F,2);D.__click=[fm,o];var ne=h(T,2),se=d(ne),ae=h(d(se),2),R=d(ae);R.value=R.__value="entree";var H=h(R);H.value=H.__value="plat";var me=h(H);me.value=me.__value="dessert";var ve=h(se,2),re=h(d(ve),2),ue=h(ne,2),le=d(ue);le.__click=function(...W){e.onCancel?.apply(this,W)};var K=h(le,2);K.__click=[sm,o,e,a,s],B(()=>j(G,i(o).title)),Zn(ae,()=>i(a),W=>b(a,W)),Oe(re,()=>i(s),W=>b(s,W)),p(P,A)};$(I,P=>{i(o)?P(k,!1):P(E)})}p(n,f),Y()}Xe(["click"]);var gm=y('<span class="font-medium"> </span> <span class="text-base-content/60 flex items-center gap-1 text-sm"><!> </span>',1),mm=(n,e)=>b(e,"edit"),bm=y('<button class="btn btn-ghost btn-xs" title="Éditer"><!></button>'),_m=(n,e)=>b(e,"preview"),ym=y('<button class="btn btn-ghost btn-xs text-primary" title="Aperçu">Terminer</button>'),wm=y('<div class="grid grid-cols-1 gap-4 md:grid-cols-3"><label class="input input-bordered flex items-center gap-2"><!> <input type="date" class="grow"/></label> <select class="select select-bordered w-full"><option>Matin</option><option>Midi</option><option>Soir</option></select> <label class="input input-bordered flex items-center gap-2"><!> <input type="number" class="grow" placeholder="Invités"/></label></div>'),Im=(n,e)=>b(e,!0),Sm=y('<button class="btn btn-xs btn-outline btn-primary"><!> Ajouter</button>'),xm=y('<div class="bg-base-200/50 rounded-box text-base-content/60 border-base-300 border border-dashed py-4 text-center text-sm">Aucune recette ajoutée</div>'),Em=y('<div class="bg-base-200/50 group flex items-center justify-between rounded-lg p-2"><div class="flex items-center gap-3"><div class="bg-base-100 rounded-md p-1.5"><!></div> <div><div class="text-sm font-medium"><!></div> <div class="text-base-content/60 text-xs"> </div></div></div> <button class="btn btn-ghost btn-xs text-error opacity-0 transition-opacity group-hover:opacity-100"><!></button></div>'),$m=y('<div class="space-y-2"><!> <!></div>'),Pm=y('<div class="mt-2 space-y-4"><!> <div class="space-y-2"><div class="flex items-center justify-between"><h4 class="flex items-center gap-2 text-sm font-semibold"><!> Recettes</h4> <!></div> <!></div></div>'),Am=y('<span> </span> <span class="badge badge-sm badge-outline"> </span>',1),Mm=y("<span>...</span>"),km=y('<div class="badge badge-ghost h-auto gap-2 py-1"><!></div>'),Tm=y('<div class="flex flex-wrap gap-2"></div>'),Rm=y('<p class="text-base-content/60 text-sm italic">Aucune recette</p>'),Dm=y('<div class="space-y-2"><!></div>'),Nm=y('<div class="card bg-base-100 border-base-200 border shadow-sm transition-all hover:shadow-md"><div class="card-body p-4"><div class="mb-2 flex items-start justify-between"><div class="flex items-center gap-2"><div class="badge badge-primary badge-outline font-bold"> </div> <!></div> <div class="flex gap-1"><!> <button class="btn btn-ghost btn-xs" title="Dupliquer"><!></button> <button class="btn btn-ghost btn-xs text-error" title="Supprimer"><!></button></div></div> <!></div></div>');function Cm(n,e){J(e,!0);let t=Ie(e,"meal",15),r=Ie(e,"defaultGuests",3,100),a=C("edit"),s=C(!1);t().guests||t(t().guests=r(),!0),t().recipes||t(t().recipes=[],!0);function o(D,ne,se){const ae={recipeUuid:D.uuid,scaleFactor:se/D.plate};t(t().recipes=[...t().recipes,ae],!0),b(s,!1)}function c(D){t(t().recipes=t().recipes.filter((ne,se)=>se!==D),!0)}function l(D){return Wr.getRecipeByUuid(D)}var u=Nm(),f=d(u),v=d(f),g=d(v),m=d(g),_=d(m),w=h(m,2);{var S=D=>{var ne=gm(),se=L(ne),ae=d(se),R=h(se,2),H=d(R);rn(H,{class:"h-3 w-3"});var me=h(H);B(()=>{j(ae,t().date||"Date non définie"),j(me,` ${t().guests??""} pers.`)}),p(D,ne)};$(w,D=>{i(a)==="preview"&&D(S)})}var I=h(g,2),E=d(I);{var k=D=>{var ne=bm();ne.__click=[mm,a];var se=d(ne);Li(se,{class:"h-3 w-3"}),p(D,ne)},P=D=>{var ne=ym();ne.__click=[_m,a],p(D,ne)};$(E,D=>{i(a)==="preview"?D(k):D(P,!1)})}var A=h(E,2);A.__click=function(...D){e.onDuplicate?.apply(this,D)};var T=d(A);$u(T,{class:"h-3 w-3"});var U=h(A,2);U.__click=function(...D){e.onDelete?.apply(this,D)};var x=d(U);Vu(x,{class:"h-3 w-3"});var z=h(v,2);{var F=D=>{var ne=Pm(),se=d(ne);hr(se,{legend:"Configuration",children:(W,N)=>{var ee=wm(),q=d(ee),oe=d(q);Kn(oe,{class:"h-4 w-4 opacity-50"});var ie=h(oe,2),ge=h(q,2),we=d(ge);we.value=we.__value="matin";var Ae=h(we);Ae.value=Ae.__value="midi";var X=h(Ae);X.value=X.__value="soir";var O=h(ge,2),fe=d(O);rn(fe,{class:"h-4 w-4 opacity-50"});var de=h(fe,2);Oe(ie,()=>t().date,ce=>t(t().date=ce,!0)),Zn(ge,()=>t().time,ce=>t(t().time=ce,!0)),Oe(de,()=>t().guests,ce=>t(t().guests=ce,!0)),p(W,ee)},$$slots:{default:!0}});var ae=h(se,2),R=d(ae),H=d(R),me=d(H);ds(me,{class:"h-4 w-4"});var ve=h(H,2);{var re=W=>{var N=Sm();N.__click=[Im,s];var ee=d(N);Un(ee,{class:"mr-1 h-3 w-3"}),p(W,N)};$(ve,W=>{i(s)||W(re)})}var ue=h(R,2);{var le=W=>{var N=xm();p(W,N)},K=W=>{var N=$m(),ee=d(N);et(ee,17,()=>t().recipes,xt,(ie,ge,we)=>{const Ae=te(()=>l(i(ge).recipeUuid));var X=Em(),O=d(X),fe=d(O),de=d(fe);Vr(de,{class:"text-primary h-4 w-4"});var ce=h(fe,2),qe=d(ce),Q=d(qe);Es(Q,()=>i(Ae),Re=>{var Je=dt("Chargement...");p(Re,Je)},(Re,Je)=>{var bt=dt();B(()=>j(bt,i(Je)?.title||"Recette inconnue")),p(Re,bt)},Re=>{var Je=dt("Erreur");p(Re,Je)});var _e=h(qe,2),Ve=d(_e),Qe=h(O,2);Qe.__click=()=>c(we);var Ze=d(Qe);$t(Ze,{class:"h-3 w-3"}),B(Re=>j(Ve,`${Re??""} parts`),[()=>Math.round((i(ge).scaleFactor||1)*(i(Ae)?i(Ae).plate:1))]),p(ie,X)});var q=h(ee,2);{var oe=ie=>{vm(ie,{onSelect:o,onCancel:()=>b(s,!1),get defaultPlates(){return t().guests}})};$(q,ie=>{i(s)&&ie(oe)})}p(W,N)};$(ue,W=>{t().recipes.length===0&&!i(s)?W(le):W(K,!1)})}p(D,ne)},G=D=>{var ne=Dm(),se=d(ne);{var ae=H=>{var me=Tm();et(me,21,()=>t().recipes,xt,(ve,re)=>{const ue=te(()=>l(i(re).recipeUuid));var le=km(),K=d(le);Es(K,()=>i(ue),W=>{var N=Mm();p(W,N)},(W,N)=>{var ee=Am(),q=L(ee),oe=d(q),ie=h(q,2),ge=d(ie);B(we=>{j(oe,i(N)?.title),j(ge,`${we??""}p`)},[()=>Math.round((i(re).scaleFactor||1)*(i(N)?.plate||1))]),p(W,ee)}),p(ve,le)}),p(H,me)},R=H=>{var me=Rm();p(H,me)};$(se,H=>{t().recipes.length>0?H(ae):H(R,!1)})}p(D,ne)};$(z,D=>{i(a)==="edit"?D(F):D(G,!1)})}B(D=>j(_,D),[()=>t().time?t().time.toUpperCase():"REPAS"]),p(n,u),Y()}Xe(["click"]);function ao(n,e,t){const r={date:i(e)||new Date().toISOString().split("T")[0],time:"midi",guests:100,recipes:[]};b(t,[...i(t),r],!0)}async function qm(n,e,t,r,a,s,o,c,l,u){if(!i(e)||!i(t)||!i(r)){b(a,"Veuillez remplir tous les champs obligatoires (Nom et Dates)");return}b(s,!0),b(a,null);try{const f={name:i(e),dateStart:i(t),dateEnd:i(r),teams:i(o),contributors:i(c),meals:i(l)};await un.createEvent(f),u.onBack()}catch(f){console.error("Erreur lors de la création de l'événement:",f),b(a,"Erreur lors de la création de l'événement. Vérifiez votre connexion.")}finally{b(s,!1)}}var jm=y('<span class="loading loading-spinner loading-sm"></span>'),Lm=y('<div class="alert alert-error shadow-lg"><span> </span></div>'),Um=(n,e,t)=>e(i(t).$id),Hm=y('<label class="label border-base-200 hover:bg-base-200/50 cursor-pointer justify-start gap-3 rounded-lg border p-2 transition-colors"><input type="checkbox" class="checkbox checkbox-primary checkbox-sm"/> <span> </span></label>'),Bm=y('<p class="text-base-content/60 text-xs italic">Aucune équipe disponible</p>'),zm=(n,e)=>n.key==="Enter"&&e(),Wm=(n,e,t)=>e(i(t)),Vm=y('<div class="badge badge-outline gap-2 pr-1"> <button class="btn btn-ghost btn-xs btn-circle h-4 min-h-0 w-4"><!></button></div>'),Qm=y('<div class="text-base-content/60 bg-base-200/30 rounded-box border-base-200 flex flex-col items-center justify-center border-2 border-dashed py-12"><div class="bg-base-200 mb-4 rounded-full p-4"><!></div> <p class="font-medium">Aucun repas planifié</p> <p class="mt-1 text-sm">Commencez par ajouter un repas à votre événement</p> <button class="btn btn-primary btn-sm mt-4">Ajouter un repas</button></div>'),Gm=y('<div class="space-y-4"></div>'),Om=y(`<div class="space-y-6 pb-20"><div class="bg-base-100/95 border-base-200 sticky top-0 z-10 flex items-center justify-between border-b py-4 backdrop-blur"><div class="flex items-center gap-4"><button class="btn btn-ghost btn-circle"><!></button> <div><h2 class="text-2xl font-bold">Nouvel Événement</h2> <p class="text-base-content/60 text-sm">Créer un menu et planifier les repas</p></div></div> <button class="btn btn-primary"><!> Créer l'événement</button></div> <!> <div class="grid grid-cols-1 gap-6 lg:grid-cols-3"><div class="space-y-6 lg:col-span-1"><div class="card bg-base-100 shadow-xl"><div class="card-body"><h3 class="card-title mb-4 flex items-center gap-2 text-lg"><!> Informations</h3> <div class="space-y-4"><div class="w-full"><label class="input flex items-center gap-2"><!> <input id="event-name" type="text" class="grow" placeholder="Nom d l'événement"/></label></div> <div class="grid grid-cols-2 gap-2"><div class="w-full"><label class="label" for="start-date"><span>Début</span></label> <input id="start-date" type="date" class="input w-full px-2"/></div> <div class="w-full"><label class="label" for="end-date"><span>Fin</span></label> <input id="end-date" type="date" class="input w-full px-2"/></div></div></div></div></div> <div class="card bg-base-100 shadow-xl"><div class="card-body"><h3 class="card-title mb-4 flex items-center gap-2 text-lg"><!> Permissions</h3> <fieldset class="fieldset"><legend class="fieldset-legend">Équipes</legend> <div class="flex flex-col gap-2"><!> <!></div></fieldset> <div class="divider my-2"></div> <fieldset class="fieldset"><legend class="fieldset-legend">Contributeurs ></legend> <div class="mb-2 flex gap-2"><input type="email" placeholder="email@exemple.com" class="input input-sm w-full"/> <button class="btn btn-sm btn-square"><!></button></div> <div class="flex flex-wrap gap-2"></div></fieldset></div></div></div> <div class="space-y-6 lg:col-span-2"><div class="card bg-base-100 min-h-[500px] shadow-xl"><div class="card-body"><div class="mb-6 flex items-center justify-between"><h3 class="card-title text-lg"> </h3> <button class="btn btn-primary btn-sm"><!> Ajouter un repas</button></div> <!></div></div></div></div></div>`);function Km(n,e){J(e,!0);let t=C(""),r=C(""),a=C(""),s=C(Ue([])),o=C(Ue([])),c=C(""),l=C(Ue([])),u=C(!1),f=C(null);function v($e){b(l,i(l).filter((Ce,Ge)=>Ge!==$e),!0)}function g($e){const Ce=i(l)[$e],Ge=JSON.parse(JSON.stringify(Ce));b(l,[...i(l).slice(0,$e+1),Ge,...i(l).slice($e+1)],!0)}function m(){i(c)&&!i(o).includes(i(c))&&(b(o,[...i(o),i(c)],!0),b(c,""))}function _($e){b(o,i(o).filter(Ce=>Ce!==$e),!0)}function w($e){i(s).includes($e)?b(s,i(s).filter(Ce=>Ce!==$e),!0):b(s,[...i(s),$e],!0)}var S=Om(),I=d(S),E=d(I),k=d(E);k.__click=function(...$e){e.onBack?.apply(this,$e)};var P=d(k);hu(P,{class:"h-6 w-6"});var A=h(E,2);A.__click=[qm,t,r,a,f,u,s,o,l,e];var T=d(A);{var U=$e=>{var Ce=jm();p($e,Ce)},x=$e=>{Ui($e,{class:"mr-2 h-4 w-4"})};$(T,$e=>{i(u)?$e(U):$e(x,!1)})}var z=h(I,2);{var F=$e=>{var Ce=Lm(),Ge=d(Ce),tt=d(Ge);B(()=>j(tt,i(f))),p($e,Ce)};$(z,$e=>{i(f)&&$e(F)})}var G=h(z,2),D=d(G),ne=d(D),se=d(ne),ae=d(se),R=d(ae);Kn(R,{class:"text-primary h-5 w-5"});var H=h(ae,2),me=d(H),ve=d(me),re=d(ve);Kn(re,{class:"h-4 w-4 opacity-50"});var ue=h(re,2),le=h(me,2),K=d(le),W=h(d(K),2),N=h(K,2),ee=h(d(N),2),q=h(ne,2),oe=d(q),ie=d(oe),ge=d(ie);rn(ge,{class:"text-secondary h-5 w-5"});var we=h(ie,2),Ae=h(d(we),2),X=d(Ae);et(X,17,()=>Ha.teams,xt,($e,Ce)=>{var Ge=Hm(),tt=d(Ge);tt.__change=[Um,w,Ce];var nt=h(tt,2),_t=d(nt);B(ht=>{Ml(tt,ht),j(_t,i(Ce).name)},[()=>i(s).includes(i(Ce).$id)]),p($e,Ge)});var O=h(X,2);{var fe=$e=>{var Ce=Bm();p($e,Ce)};$(O,$e=>{Ha.teams.length===0&&$e(fe)})}var de=h(we,4),ce=h(d(de),2),qe=d(ce);qe.__keydown=[zm,m];var Q=h(qe,2);Q.__click=m;var _e=d(Q);cs(_e,{class:"h-4 w-4"});var Ve=h(ce,2);et(Ve,21,()=>i(o),xt,($e,Ce)=>{var Ge=Vm(),tt=d(Ge),nt=h(tt);nt.__click=[Wm,_,Ce];var _t=d(nt);$t(_t,{class:"h-3 w-3"}),B(()=>j(tt,`${i(Ce)??""} `)),p($e,Ge)});var Qe=h(D,2),Ze=d(Qe),Re=d(Ze),Je=d(Re),bt=d(Je),Me=d(bt),De=h(bt,2);De.__click=[ao,r,l];var Ke=d(De);Un(Ke,{class:"mr-1 h-4 w-4"});var ke=h(Je,2);{var at=$e=>{var Ce=Qm(),Ge=d(Ce),tt=d(Ge);Kn(tt,{class:"h-8 w-8 opacity-50"});var nt=h(Ge,6);nt.__click=[ao,r,l],p($e,Ce)},ft=$e=>{var Ce=Gm();et(Ce,21,()=>i(l),xt,(Ge,tt,nt)=>{Cm(Ge,{onDelete:()=>v(nt),onDuplicate:()=>g(nt),get meal(){return i(l)[nt]},set meal(_t){i(l)[nt]=_t}})}),p($e,Ce)};$(ke,$e=>{i(l).length===0?$e(at):$e(ft,!1)})}B(()=>{A.disabled=i(u),j(Me,`Repas & Menus (${i(l).length??""})`)}),Oe(ue,()=>i(t),$e=>b(t,$e)),Oe(W,()=>i(r),$e=>b(r,$e)),Oe(ee,()=>i(a),$e=>b(a,$e)),Oe(qe,()=>i(c),$e=>b(c,$e)),p(n,S),Y()}Xe(["click","change","keydown"]);Dc();var Jm=y('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function Ym(n){var e=Jm();p(n,e)}var Xm=y('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Zm(n,e){var t=Xm(),r=h(d(t),2),a=h(d(r),2),s=d(a);B(()=>j(s,e.message)),p(n,t)}function Fm(n,e,t){i(e)||t(!1)}var eb=y('<div class="auth-message auth-message-error svelte-o861tn"><span class="svelte-o861tn"> </span></div>'),tb=y('<div class="auth-message auth-message-success svelte-o861tn"><span class="svelte-o861tn"> </span></div>'),nb=y('<span class="auth-spinner svelte-o861tn"></span>'),rb=(n,e)=>b(e,!1),ab=y('<form class="auth-form svelte-o861tn"><div class="auth-field svelte-o861tn"><label class="auth-label svelte-o861tn" for="forgot-email"><span class="auth-label-text svelte-o861tn">Email</span></label> <input id="forgot-email" type="email" class="auth-input svelte-o861tn" placeholder="votre@email.com"/></div> <button type="submit" class="auth-btn auth-btn-primary auth-btn-full svelte-o861tn"><!></button></form> <div class="auth-back-link svelte-o861tn"><button class="auth-link-btn svelte-o861tn">← Retour à la connexion</button></div>',1),sb=y('<span class="auth-spinner svelte-o861tn"></span>'),ob=(n,e)=>b(e,!0),ib=(n,e)=>b(e,!1),cb=y(`<form class="auth-form svelte-o861tn"><div class="auth-field svelte-o861tn"><label class="auth-label svelte-o861tn" for="login-email"><span class="auth-label-text svelte-o861tn">Email</span></label> <input id="login-email" type="email" class="auth-input svelte-o861tn" placeholder="votre@email.com" required/></div> <div class="auth-field svelte-o861tn"><label class="auth-label svelte-o861tn" for="login-password"><span class="auth-label-text svelte-o861tn">Mot de passe</span></label> <input id="login-password" type="password" class="auth-input svelte-o861tn" placeholder="•••••••" required/></div> <button type="submit" class="auth-btn auth-btn-primary auth-btn-full svelte-o861tn"><!></button></form> <div class="auth-actions svelte-o861tn"><button class="auth-link-btn svelte-o861tn">Mot de passe oublié ?</button> <div class="auth-switch svelte-o861tn">Pas encore de compte ? <button class="auth-link-btn auth-link-inline svelte-o861tn">S'inscrire</button></div></div>`,1),lb=y('<span class="auth-spinner svelte-o861tn"></span>'),db=(n,e)=>b(e,!0),ub=y('<form class="auth-form svelte-o861tn"><div class="auth-field svelte-o861tn"><label class="auth-label svelte-o861tn" for="register-name"><span class="auth-label-text svelte-o861tn">Nom</span></label> <input id="register-name" type="text" class="auth-input svelte-o861tn" placeholder="Votre nom" required/></div> <div class="auth-field svelte-o861tn"><label class="auth-label svelte-o861tn" for="register-email"><span class="auth-label-text svelte-o861tn">Email</span></label> <input id="register-email" type="email" class="auth-input svelte-o861tn" placeholder="votre@email.com" required/></div> <div class="auth-field svelte-o861tn"><label class="auth-label svelte-o861tn" for="register-password"><span class="auth-label-text svelte-o861tn">Mot de passe</span></label> <input id="register-password" type="password" class="auth-input svelte-o861tn" placeholder="•••••••" required/></div> <button type="submit" class="auth-btn auth-btn-success auth-btn-full svelte-o861tn"><!></button></form> <div class="auth-switch svelte-o861tn">Déjà un compte ? <button class="auth-link-btn auth-link-inline svelte-o861tn">Se connecter</button></div>',1),fb=y('<div role="dialog"><div class="auth-modal-content svelte-o861tn"><div class="auth-header svelte-o861tn"><div class="auth-title svelte-o861tn"> </div> <button class="auth-close-btn svelte-o861tn">✕</button></div> <div class="auth-body svelte-o861tn"><!> <!> <!></div></div></div>');function hb(n,e){J(e,!0);let t=Ie(e,"isOpen",15),r=Ie(e,"onAuthSuccess",3,()=>{}),a=C(!0),s=C(!1),o=C(""),c=C(""),l=C(""),u=C(""),f=C(""),v=C(""),g=C(""),m=C(""),_=C(!1);async function w(R){if(R.preventDefault(),!i(l)||!i(u)){b(o,"Veuillez remplir tous les champs");return}b(s,!0),b(o,"");try{const{account:H}=await je();await H.createEmailPasswordSession({email:i(l),password:i(u)}),b(c,"Connexion réussie !"),setTimeout(()=>{r()()},1e3)}catch(H){console.error("Erreur de connexion:",H),b(o,H.message||"Erreur lors de la connexion",!0)}finally{b(s,!1)}}async function S(R){if(R.preventDefault(),!i(f)||!i(v)||!i(g)){b(o,"Veuillez remplir tous les champs");return}b(s,!0),b(o,"");try{const{account:H}=await je();await H.create({userId:"unique()",email:i(v),password:i(g),name:i(f)}),await H.createEmailPasswordSession({email:i(v),password:i(g)}),b(c,"Compte créé et connecté !"),setTimeout(()=>{r()()},1e3)}catch(H){console.error("Erreur d'inscription:",H),b(o,H.message||"Erreur lors de la création du compte",!0)}finally{b(s,!1)}}async function I(R){if(R.preventDefault(),!i(m)){b(o,"Veuillez entrer votre email");return}b(s,!0),b(o,"");try{const{account:H}=await je();await H.createRecovery({email:i(m),url:`${window.location.origin}/reset-password`}),b(c,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(_,!1),b(m,"")},2e3)}catch(H){console.error("Erreur mot de passe oublié:",H),b(o,H.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(s,!1)}}Kt(()=>{(i(a)||i(_))&&(b(o,""),b(c,""))});var E=fb(),k=d(E),P=d(k),A=d(P),T=d(A),U=h(A,2);U.__click=[Fm,s,t];var x=h(P,2),z=d(x);{var F=R=>{var H=eb(),me=d(H),ve=d(me);B(()=>j(ve,i(o))),p(R,H)};$(z,R=>{i(o)&&R(F)})}var G=h(z,2);{var D=R=>{var H=tb(),me=d(H),ve=d(me);B(()=>j(ve,i(c))),p(R,H)};$(G,R=>{i(c)&&R(D)})}var ne=h(G,2);{var se=R=>{var H=ab(),me=L(H),ve=d(me),re=h(d(ve),2),ue=h(ve,2),le=d(ue);{var K=q=>{var oe=nb();p(q,oe)},W=q=>{var oe=dt("Envoyer l'email de réinitialisation");p(q,oe)};$(le,q=>{i(s)?q(K):q(W,!1)})}var N=h(me,2),ee=d(N);ee.__click=[rb,_],B(()=>{re.disabled=i(s),ue.disabled=i(s),ee.disabled=i(s)}),On("submit",me,I),Oe(re,()=>i(m),q=>b(m,q)),p(R,H)},ae=R=>{var H=Z(),me=L(H);{var ve=ue=>{var le=cb(),K=L(le),W=d(K),N=h(d(W),2),ee=h(W,2),q=h(d(ee),2),oe=h(ee,2),ie=d(oe);{var ge=de=>{var ce=sb();p(de,ce)},we=de=>{var ce=dt("Se connecter");p(de,ce)};$(ie,de=>{i(s)?de(ge):de(we,!1)})}var Ae=h(K,2),X=d(Ae);X.__click=[ob,_];var O=h(X,2),fe=h(d(O));fe.__click=[ib,a],B(()=>{N.disabled=i(s),q.disabled=i(s),oe.disabled=i(s),X.disabled=i(s),fe.disabled=i(s)}),On("submit",K,w),Oe(N,()=>i(l),de=>b(l,de)),Oe(q,()=>i(u),de=>b(u,de)),p(ue,le)},re=ue=>{var le=ub(),K=L(le),W=d(K),N=h(d(W),2),ee=h(W,2),q=h(d(ee),2),oe=h(ee,2),ie=h(d(oe),2),ge=h(oe,2),we=d(ge);{var Ae=de=>{var ce=lb();p(de,ce)},X=de=>{var ce=dt("Créer un compte");p(de,ce)};$(we,de=>{i(s)?de(Ae):de(X,!1)})}var O=h(K,2),fe=h(d(O));fe.__click=[db,a],B(()=>{N.disabled=i(s),q.disabled=i(s),ie.disabled=i(s),ge.disabled=i(s),fe.disabled=i(s)}),On("submit",K,S),Oe(N,()=>i(f),de=>b(f,de)),Oe(q,()=>i(v),de=>b(v,de)),Oe(ie,()=>i(g),de=>b(g,de)),p(ue,le)};$(me,ue=>{i(a)?ue(ve):ue(re,!1)},!0)}p(R,H)};$(ne,R=>{i(_)?R(se):R(ae,!1)})}B(()=>{Te(E,1,`auth-modal ${(t()&&"auth-modal-open")??""}`,"svelte-o861tn"),j(T,i(_)?"Mot de passe oublié":i(a)?"Connexion":"Inscription")}),p(n,E),Y()}Xe(["click"]);function pb(n,e){b(e,!i(e))}async function vb(){try{await ze.logout(),window.location.href="/"}catch(n){console.error("Erreur lors de la déconnexion:",n)}}function gb(n,e){b(e,!0),console.log("showAuthModal",i(e))}var mb=y('<ul class="svelte-dropdown-menu svelte-18a4s1a"><li><div class="svelte-dropdown-header svelte-18a4s1a"> </div></li> <li><a class="svelte-dropdown-item svelte-18a4s1a" href="/dashboard"><!> <span>Dashboard</span></a></li> <li><a class="svelte-dropdown-item svelte-18a4s1a" href="/dashboard/teams"><!> <span>Équipes</span></a></li> <li><a class="svelte-dropdown-item svelte-18a4s1a" href="/dashboard/recipes"><!> <span>Recettes</span></a></li> <li><hr class="svelte-dropdown-divider svelte-18a4s1a"/></li> <li><button class="svelte-dropdown-item svelte-18a4s1a"><!> <span>Se déconnecter</span></button></li></ul>'),bb=y('<li class="svelte-user-dropdown svelte-18a4s1a"><button class="svelte-btn-user svelte-18a4s1a" aria-label="Menu utilisateur"><div class="svelte-user-avatar svelte-18a4s1a"> </div> <svg class="svelte-dropdown-arrow svelte-18a4s1a" width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="2" fill="none"></path></svg></button> <!></li>'),_b=y('<li><button class="svelte-btn-login svelte-18a4s1a"><!> <span>Connexion</span></button></li>'),yb=y('<!> <nav class="svelte-header-nav svelte-18a4s1a"><div class="svelte-nav-container svelte-18a4s1a"><a class="svelte-nav-brand svelte-18a4s1a" href="/"><img src="/favicon-96x96.png" alt="logo" class="svelte-brand-logo svelte-18a4s1a"/></a> <ul class="svelte-nav-menu svelte-18a4s1a"><li><a class="svelte-nav-link svelte-18a4s1a" href="/recettes">Recettes</a></li> <li><a class="svelte-nav-link svelte-18a4s1a" href="/evenements">Événements</a></li></ul> <ul class="svelte-nav-actions svelte-18a4s1a"><!></ul></div></nav>',1);function so(n,e){J(e,!0);let t=C(!1),r=C(!1);function a(){b(t,!1)}function s(w){w.target.closest(".svelte-user-dropdown")||a()}function o(){b(r,!1)}Kt(()=>{if(i(t))return document.addEventListener("click",s),()=>document.removeEventListener("click",s)});var c=yb(),l=L(c);hb(l,{onAuthSuccess:o,get isOpen(){return i(r)},set isOpen(w){b(r,w,!0)}});var u=h(l,2),f=d(u),v=h(d(f),4),g=d(v);{var m=w=>{var S=bb(),I=d(S);I.__click=[pb,t];var E=d(I),k=d(E),P=h(I,2);{var A=T=>{var U=mb(),x=d(U),z=d(x),F=d(z),G=h(x,2),D=d(G),ne=d(D);ku(ne,{class:"svelte-dropdown-icon",size:16});var se=h(G,2),ae=d(se),R=d(ae);rn(R,{class:"svelte-dropdown-icon",size:16});var H=h(se,2),me=d(H),ve=d(me);gu(ve,{class:"svelte-dropdown-icon",size:16});var re=h(H,4),ue=d(re);ue.__click=[vb];var le=d(ue);qu(le,{class:"svelte-dropdown-icon",size:16}),B(()=>j(F,ze.user?.email||"Utilisateur")),p(T,U)};$(P,T=>{i(t)&&T(A)})}B(T=>{sn(I,"aria-expanded",i(t)),j(k,T)},[()=>ze.user?.name?.charAt(0).toUpperCase()||"U"]),p(w,S)},_=w=>{var S=_b(),I=d(S);I.__click=[gb,r];var E=d(I);Cu(E,{size:16}),p(w,S)};$(g,w=>{ze.isAuthenticated?w(m):w(_,!1)})}p(n,c),Y()}Xe(["click"]);var wb=(n,e,t,r)=>e(i(t),i(r)),Ib=y('<button class="btn btn-sm btn-primary"> </button>'),Sb=(n,e,t)=>e(i(t)),xb=y('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),Eb=(n,e,t)=>e(i(t)),$b=y('<button class="btn btn-ghost btn-sm btn-circle absolute top-1 right-1" title="Fermer" aria-label="Fermer la notification"><!></button>'),Pb=y('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!> <!></div></div></div>'),Ab=y("<div></div>");function oo(n,e){J(e,!0);let t=Ie(e,"position",3,"toast-right toast-bottom"),r=Ie(e,"padding",3,"md");const a=te(()=>r()==="sm"?"px-2 py-0.5":""),s=te(()=>Fe.toasts);function o(v){return v==="success"||v==="info"}function c(v){Fe.dismiss(v.id)}function l(v){e.onShowDetails?.({id:v.id,message:v.message,details:v.details})}function u(v,g){g.onClick()}var f=Ab();et(f,21,()=>i(s),v=>v.id,(v,g)=>{var m=Pb(),_=d(m),w=d(_),S=d(w);{var I=G=>{ca(G,{class:"h-5 w-5 animate-spin"})};$(S,G=>{i(g).state==="loading"&&G(I)})}var E=h(S,2),k=d(E),P=h(w,2),A=d(P);{var T=G=>{var D=Z(),ne=L(D);et(ne,17,()=>i(g).actions,xt,(se,ae)=>{var R=Ib();R.__click=[wb,u,g,ae];var H=d(R);B(()=>j(H,i(ae).label)),p(se,R)}),p(G,D)};$(A,G=>{i(g).actions&&i(g).actions.length>0&&G(T)})}var U=h(A,2);{var x=G=>{var D=xb();D.__click=[Sb,l,g];var ne=d(D);Ri(ne,{class:"h-3 w-3"}),p(G,D)};$(U,G=>{i(g).details&&G(x)})}var z=h(U,2);{var F=G=>{var D=$b();D.__click=[Eb,c,g];var ne=d(D);$t(ne,{class:"h-4 w-4"}),p(G,D)};$(z,G=>{(i(g).state==="error"||i(g).state==="warning"||!o(i(g).state))&&G(F)})}B(()=>{Te(m,1,`alert alert-${i(g).state??""} max-w-sm ${i(a)??""} shadow-lg`),j(k,i(g).message)}),p(v,m)}),B(()=>Te(f,1,`toast ${t()??""} z-50`)),p(n,f),Y()}Xe(["click"]);function Mb(n,e){J(e,!0),Y()}var kb=y("<!> <!>",1),Tb=y('<div class="flex h-[50vh] items-center justify-center"><!></div>'),Rb=y('<div class="alert alert-info"><span>Aucun produit trouvé pour cet événement.</span></div>'),Db=y('<!> <div class="bg-base-100 text-base-content min-h-screen"><main class="container mx-auto px-4 py-8"><!> <!></main></div> <!> <!>',1);function Nb(n,e){J(e,!0);let t=C("header-only"),r=C(null),a=C(null),s=C(!0),o=C("loading");async function c(){try{await ze.initializeAuth(),b(s,!1)}catch(I){console.error("Erreur d'initialisation auth:",I),b(s,!1)}}async function l(){try{await Promise.all([Ha.initialize(),Wr.initialize(),un.initialize()]);const E=new URLSearchParams(window.location.search).get("listId");E?(console.log(`[App] Mode Direct détecté pour listId: ${E}`),b(r,du(E),!0),await he.initialize(i(r),E),b(o,"products")):(console.log("[App] Aucun listId, passage en mode Dashboard"),b(o,"dashboard"))}catch(I){console.error("Erreur d'initialisation dashboard:",I),b(a,I.message||"Erreur inconnue lors de l'initialisation",!0)}}Ul(async()=>{const I=window.location.pathname.startsWith("/dashboard");b(t,I?"dashboard":"header-only",!0),console.log(`[App] Mode de montage: ${i(t)}`),await c(),i(t)==="dashboard"&&await l()});function u(){b(o,"create-event")}function f(){b(o,"dashboard");const I=new URL(window.location.href);I.searchParams.has("listId")&&(I.searchParams.delete("listId"),window.history.pushState({},"",I))}async function v(I){console.log("Sélection événement:",I),alert("L'ouverture d'événements 100% Appwrite est en cours de développement.")}let g=te(()=>i(a)||he.error);var m=Z(),_=L(m);{var w=I=>{var E=kb(),k=L(E);so(k,{});var P=h(k,2);oo(P,{}),p(I,E)},S=I=>{var E=Z(),k=L(E);{var P=A=>{var T=Db(),U=L(T);so(U,{});var x=h(U,2),z=d(x),F=d(z);{var G=H=>{Zm(H,{get message(){return i(g)}})};$(F,H=>{i(g)&&H(G)})}var D=h(F,2);{var ne=H=>{var me=Tb(),ve=d(me);Ym(ve),p(H,me)},se=H=>{var me=Z(),ve=L(me);{var re=le=>{am(le,{onCreateEvent:u,onSelectEvent:v})},ue=le=>{var K=Z(),W=L(K);{var N=q=>{Km(q,{onBack:f})},ee=q=>{var oe=Z(),ie=L(oe);{var ge=we=>{var Ae=Z(),X=L(Ae);{var O=de=>{Jg(de,{})},fe=de=>{var ce=Z(),qe=L(ce);{var Q=_e=>{var Ve=Rb();p(_e,Ve)};$(qe,_e=>{!he.loading&&!i(g)&&_e(Q)},!0)}p(de,ce)};$(X,de=>{he.enrichedProducts.length>0?de(O):de(fe,!1)})}p(we,Ae)};$(ie,we=>{i(o)==="products"&&we(ge)},!0)}p(q,oe)};$(W,q=>{i(o)==="create-event"?q(N):q(ee,!1)},!0)}p(le,K)};$(ve,le=>{i(o)==="dashboard"?le(re):le(ue,!1)},!0)}p(H,me)};$(D,H=>{i(o)==="loading"||i(s)?H(ne):H(se,!1)})}var ae=h(x,2);oo(ae,{});var R=h(ae,2);Mb(R,{get isOpen(){return ze.isConflictModalOpen},get conflictData(){return ze.conflictData}}),p(A,T)};$(k,A=>{i(t)==="dashboard"&&A(P)},!0)}p(I,E)};$(_,I=>{i(t)==="header-only"?I(w):I(S,!1)})}p(n,m),Y()}let wr=null;window.location.pathname.startsWith("/dashboard")?wr=document.getElementById("app_products")||document.getElementById("app"):wr=document.getElementById("svelte-header");if(!wr)throw console.error("[Svelte] Aucun conteneur de montage trouvé"),new Error("Élément target non trouvé");console.log(`[Svelte] Montage dans: #${wr.id}`);gl(Nb,{target:wr});
