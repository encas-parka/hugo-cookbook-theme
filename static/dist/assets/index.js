(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const Ms=!1;var ta=Array.isArray,gi=Array.prototype.indexOf,mn=Array.from,an=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,mi=Object.getOwnPropertyDescriptors,Ns=Object.prototype,_i=Array.prototype,_n=Object.getPrototypeOf,Bn=Object.isExtensible;function Mr(t){return typeof t=="function"}const oe=()=>{};function bi(t){for(var e=0;e<t.length;e++)t[e]()}function Cs(){var t,e,r=new Promise((a,n)=>{t=a,e=n});return{promise:r,resolve:t,reject:e}}function ba(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const a of t)if(r.push(a),r.length===e)break;return r}const yt=2,bn=4,yn=8,ir=16,Kt=32,Sr=64,wn=128,Tt=256,ya=512,ct=1024,$t=2048,lr=4096,Ct=8192,$r=16384,Pa=32768,cr=65536,zn=1<<17,yi=1<<18,Lr=1<<19,wi=1<<20,nn=1<<21,ka=1<<22,mr=1<<23,_r=Symbol("$state"),Is=Symbol("legacy props"),xi=Symbol(""),Fr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Rs(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Si(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function $i(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Pi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ki(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Ei(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ai(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ti(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Di(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Mi(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ni(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Ea=1,Aa=2,Os=4,Ci=8,Ii=16,Ri=1,Oi=2,qi=4,ji=8,Li=16,Bi=4,zi=1,Ui=2,at=Symbol(),Hi="http://www.w3.org/1999/xhtml",Wi="http://www.w3.org/2000/svg",Gi="@attach";function Qi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Vi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Fi=!1;function qs(t){return t===this.v}function js(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Ki(t,e){return t!==e}function Ls(t){return!js(t,this.v)}let Br=!1,Yi=!1;function Ji(){Br=!0}const Zi=[];function Tr(t,e=!1,r=!1){return pa(t,new Map,"",Zi,null,r)}function pa(t,e,r,a,n=null,i=!1){if(typeof t=="object"&&t!==null){var o=e.get(t);if(o!==void 0)return o;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(ta(t)){var l=Array(t.length);e.set(t,l),n!==null&&e.set(n,l);for(var d=0;d<t.length;d+=1){var f=t[d];d in t&&(l[d]=pa(f,e,r,a,null,i))}return l}if(_n(t)===Ns){l={},e.set(t,l),n!==null&&e.set(n,l);for(var h in t)l[h]=pa(t[h],e,r,a,null,i);return l}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function"&&!i)return pa(t.toJSON(),e,r,a,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}let Ze=null;function Cr(t){Ze=t}function J(t,e=!1,r){Ze={p:Ze,c:null,e:null,s:t,x:null,l:Br&&!e?{s:null,u:null,$:[]}:null}}function Z(t){var e=Ze,r=e.e;if(r!==null){e.e=null;for(var a of r)Xs(a)}return Ze=e.p,{}}function zr(){return!Br||Ze!==null&&Ze.l===null}let hr=[];function Bs(){var t=hr;hr=[],bi(t)}function ar(t){if(hr.length===0&&!Kr){var e=hr;queueMicrotask(()=>{e===hr&&Bs()})}hr.push(t)}function Xi(){for(;hr.length>0;)Bs()}const el=new WeakMap;function zs(t){var e=Ce;if(e===null)return Re.f|=mr,t;if((e.f&Pa)===0){if((e.f&wn)===0)throw!e.parent&&t instanceof Error&&Us(t),t;e.b.error(t)}else Ir(t,e)}function Ir(t,e){for(;e!==null;){if((e.f&wn)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t instanceof Error&&Us(t),t}function Us(t){const e=el.get(t);e&&(an(t,"message",{value:e.message}),an(t,"stack",{value:e.stack}))}const ca=new Set;let He=null,ga=null,sn=new Set,qt=[],Ta=null,on=!1,Kr=!1;class At{current=new Map;#e=new Map;#t=new Set;#a=0;#o=null;#d=[];#c=[];#u=[];#l=[];#v=[];#i=[];skipped_effects=new Set;process(e){qt=[],ga=null;var r=At.apply(this);for(const i of e)this.#f(i);if(this.#a===0){this.#h();var a=this.#c,n=this.#u;this.#c=[],this.#u=[],this.#l=[],ga=this,He=null,Un(a),Un(n),ga=null,this.#o?.resolve()}else this.#n(this.#c),this.#n(this.#u),this.#n(this.#l);r();for(const i of this.#d)Zr(i);this.#d=[]}#f(e){e.f^=ct;for(var r=e.first;r!==null;){var a=r.f,n=(a&(Kt|Sr))!==0,i=n&&(a&ct)!==0,o=i||(a&Ct)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){n?r.f^=ct:(a&bn)!==0?this.#u.push(r):(a&ct)===0&&((a&ka)!==0&&r.b?.is_pending()?this.#d.push(r):Ia(r)&&((r.f&ir)!==0&&this.#l.push(r),Zr(r)));var l=r.first;if(l!==null){r=l;continue}}var d=r.parent;for(r=r.next;r===null&&d!==null;)r=d.next,d=d.parent}}#n(e){for(const r of e)((r.f&$t)!==0?this.#v:this.#i).push(r),pt(r,ct);e.length=0}capture(e,r){this.#e.has(e)||this.#e.set(e,r),this.current.set(e,e.v)}activate(){He=this}deactivate(){He=null}flush(){if(qt.length>0){if(this.activate(),Hs(),He!==null&&He!==this)return}else this.#a===0&&this.#h();this.deactivate();for(const e of sn)if(sn.delete(e),e(),He!==null)break}#h(){for(const e of this.#t)e();if(this.#t.clear(),ca.size>1){this.#e.clear();let e=!0;for(const r of ca){if(r===this){e=!1;continue}for(const[a,n]of this.current){if(r.current.has(a))if(e)r.current.set(a,n);else continue;Ws(a)}if(qt.length>0){He=r;const a=At.apply(r);for(const n of qt)r.#f(n);qt=[],a()}}He=null}ca.delete(this)}increment(){this.#a+=1}decrement(){this.#a-=1;for(const e of this.#v)pt(e,$t),wr(e);for(const e of this.#i)pt(e,lr),wr(e);this.flush()}add_callback(e){this.#t.add(e)}settled(){return(this.#o??=Cs()).promise}static ensure(){if(He===null){const e=He=new At;ca.add(He),Kr||At.enqueue(()=>{He===e&&e.flush()})}return He}static enqueue(e){ar(e)}static apply(e){return oe}}function tl(t){var e=Kr;Kr=!0;try{for(var r;;){if(Xi(),qt.length===0&&(He?.flush(),qt.length===0))return Ta=null,r;Hs()}}finally{Kr=e}}function Hs(){var t=Nr;on=!0;try{var e=0;for(Qn(!0);qt.length>0;){var r=At.ensure();if(e++>1e3){var a,n;rl()}r.process(qt),rr.clear()}}finally{on=!1,Qn(t),Ta=null}}function rl(){try{Ei()}catch(t){Ir(t,Ta)}}let vr=null;function Un(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var a=t[r++];if((a.f&($r|Ct))===0&&Ia(a)&&(vr=[],Zr(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null&&a.ac===null?ro(a):a.fn=null),vr?.length>0)){rr.clear();for(const n of vr)Zr(n);vr=[]}}vr=null}}function Ws(t){if(t.reactions!==null)for(const e of t.reactions){const r=e.f;(r&yt)!==0?Ws(e):(r&(ka|ir))!==0&&(pt(e,$t),wr(e))}}function wr(t){for(var e=Ta=t;e.parent!==null;){e=e.parent;var r=e.f;if(on&&e===Ce&&(r&ir)!==0)return;if((r&(Sr|Kt))!==0){if((r&ct)===0)return;e.f^=ct}}qt.push(e)}function xn(t){let e=0,r=nr(0),a;return()=>{_l()&&(s(r),En(()=>(e===0&&(a=kr(()=>t(()=>jt(r)))),e+=1,()=>{ar(()=>{e-=1,e===0&&(a?.(),a=void 0,jt(r))})})))}}var al=cr|Lr|wn;function nl(t,e,r){new sl(t,e,r)}class sl{parent;#e=!1;#t;#a=null;#o;#d;#c;#u=null;#l=null;#v=null;#i=null;#f=0;#n=0;#h=!1;#p=null;#m=()=>{this.#p&&Rr(this.#p,this.#f)};#y=xn(()=>(this.#p=nr(this.#f),()=>{this.#p=null}));constructor(e,r,a){this.#t=e,this.#o=r,this.#d=a,this.parent=Ce.b,this.#e=!!this.#o.pending,this.#c=Zt(()=>{Ce.b=this;{try{this.#u=ot(()=>a(this.#t))}catch(n){this.error(n)}this.#n>0?this.#b():this.#e=!1}},al)}#x(){try{this.#u=ot(()=>this.#d(this.#t))}catch(e){this.error(e)}this.#e=!1}#s(){const e=this.#o.pending;e&&(this.#l=ot(()=>e(this.#t)),At.enqueue(()=>{this.#u=this.#_(()=>(At.ensure(),ot(()=>this.#d(this.#t)))),this.#n>0?this.#b():(Qt(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#o.pending}#_(e){var r=Ce,a=Re,n=Ze;Lt(this.#c),_t(this.#c),Cr(this.#c.ctx);try{return e()}catch(i){return zs(i),null}finally{Lt(r),_t(a),Cr(n)}}#b(){const e=this.#o.pending;this.#u!==null&&(this.#i=document.createDocumentFragment(),ol(this.#u,this.#i)),this.#l===null&&(this.#l=ot(()=>e(this.#t)))}#g(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#g(e);return}this.#n+=e,this.#n===0&&(this.#e=!1,this.#l&&Qt(this.#l,()=>{this.#l=null}),this.#i&&(this.#t.before(this.#i),this.#i=null),ar(()=>{At.ensure().flush()}))}update_pending_count(e){this.#g(e),this.#f+=e,sn.add(this.#m)}get_effect_pending(){return this.#y(),s(this.#p)}error(e){var r=this.#o.onerror;let a=this.#o.failed;if(this.#h||!r&&!a)throw e;this.#u&&(it(this.#u),this.#u=null),this.#l&&(it(this.#l),this.#l=null),this.#v&&(it(this.#v),this.#v=null);var n=!1,i=!1;const o=()=>{if(n){Vi();return}n=!0,i&&Ni(),At.ensure(),this.#f=0,this.#v!==null&&Qt(this.#v,()=>{this.#v=null}),this.#e=this.has_pending_snippet(),this.#u=this.#_(()=>(this.#h=!1,ot(()=>this.#d(this.#t)))),this.#n>0?this.#b():this.#e=!1};var l=Re;try{_t(null),i=!0,r?.(e,o),i=!1}catch(d){Ir(d,this.#c&&this.#c.parent)}finally{_t(l)}a&&ar(()=>{this.#v=this.#_(()=>{this.#h=!0;try{return ot(()=>{a(this.#t,()=>e,()=>o)})}catch(d){return Ir(d,this.#c.parent),null}finally{this.#h=!1}})})}}function ol(t,e){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var n=r===a?null:ra(r);e.append(r),r=n}}function Gs(t,e,r){const a=zr()?Da:Sn;if(e.length===0){r(t.map(a));return}var n=He,i=Ce,o=il();Promise.all(e.map(l=>ll(l))).then(l=>{o();try{r([...t.map(a),...l])}catch(d){(i.f&$r)===0&&Ir(d,i)}n?.deactivate(),Qs()}).catch(l=>{Ir(l,i)})}function il(){var t=Ce,e=Re,r=Ze,a=He;return function(){Lt(t),_t(e),Cr(r),a?.activate()}}function Qs(){Lt(null),_t(null),Cr(null)}function Da(t){var e=yt|$t,r=Re!==null&&(Re.f&yt)!==0?Re:null;return Ce===null||r!==null&&(r.f&Tt)!==0?e|=Tt:Ce.f|=Lr,{ctx:Ze,deps:null,effects:null,equals:qs,f:e,fn:t,reactions:null,rv:0,v:at,wv:0,parent:r??Ce,ac:null}}function ll(t,e){let r=Ce;r===null&&Si();var a=r.b,n=void 0,i=nr(at),o=!Re,l=new Map;return yl(()=>{var d=Cs();n=d.promise;try{Promise.resolve(t()).then(d.resolve,d.reject)}catch(p){d.reject(p)}var f=He,h=a.is_pending();o&&(a.update_pending_count(1),h||(f.increment(),l.get(f)?.reject(Fr),l.set(f,d)));const g=(p,m=void 0)=>{h||f.activate(),m?m!==Fr&&(i.f|=mr,Rr(i,m)):((i.f&mr)!==0&&(i.f^=mr),Rr(i,p)),o&&(a.update_pending_count(-1),h||f.decrement()),Qs()};d.promise.then(g,p=>g(null,p||"unknown"))}),kn(()=>{for(const d of l.values())d.reject(Fr)}),new Promise(d=>{function f(h){function g(){h===n?d(i):f(n)}h.then(g,g)}f(n)})}function K(t){const e=Da(t);return so(e),e}function Sn(t){const e=Da(t);return e.equals=Ls,e}function Vs(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)it(e[r])}}function cl(t){for(var e=t.parent;e!==null;){if((e.f&yt)===0)return e;e=e.parent}return null}function $n(t){var e,r=Ce;Lt(cl(t));try{Vs(t),e=co(t)}finally{Lt(r)}return e}function Fs(t){var e=$n(t);if(t.equals(e)||(t.v=e,t.wv=io()),!Pr){var r=(Xt||(t.f&Tt)!==0)&&t.deps!==null?lr:ct;pt(t,r)}}const rr=new Map;function nr(t,e){var r={f:0,v:t,reactions:null,equals:qs,rv:0,wv:0};return r}function U(t,e){const r=nr(t);return so(r),r}function ul(t,e=!1,r=!0){const a=nr(t);return e||(a.equals=Ls),Br&&r&&Ze!==null&&Ze.l!==null&&(Ze.l.s??=[]).push(a),a}function b(t,e,r=!1){Re!==null&&(!Mt||(Re.f&zn)!==0)&&zr()&&(Re.f&(yt|ir|ka|zn))!==0&&!Vt?.includes(t)&&Mi();let a=r?Oe(e):e;return Rr(t,a)}function Rr(t,e){if(!t.equals(e)){var r=t.v;Pr?rr.set(t,e):rr.set(t,r),t.v=e;var a=At.ensure();a.capture(t,r),(t.f&yt)!==0&&((t.f&$t)!==0&&$n(t),pt(t,(t.f&Tt)===0?ct:lr)),t.wv=io(),Ks(t,$t),zr()&&Ce!==null&&(Ce.f&ct)!==0&&(Ce.f&(Kt|Sr))===0&&(Et===null?Sl([t]):Et.push(t))}return e}function jt(t){b(t,t.v+1)}function Ks(t,e){var r=t.reactions;if(r!==null)for(var a=zr(),n=r.length,i=0;i<n;i++){var o=r[i],l=o.f;if(!(!a&&o===Ce)){var d=(l&$t)===0;d&&pt(o,e),(l&yt)!==0?Ks(o,lr):d&&((l&ir)!==0&&vr!==null&&vr.push(o),wr(o))}}}function Oe(t){if(typeof t!="object"||t===null||_r in t)return t;const e=_n(t);if(e!==Ns&&e!==_i)return t;var r=new Map,a=ta(t),n=U(0),i=Ft,o=l=>{if(Ft===i)return l();var d=Re,f=Ft;_t(null),Fn(i);var h=l();return _t(d),Fn(f),h};return a&&r.set("length",U(t.length)),new Proxy(t,{defineProperty(l,d,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Ti();var h=r.get(d);return h===void 0?h=o(()=>{var g=U(f.value);return r.set(d,g),g}):b(h,f.value,!0),!0},deleteProperty(l,d){var f=r.get(d);if(f===void 0){if(d in l){const h=o(()=>U(at));r.set(d,h),jt(n)}}else b(f,at),jt(n);return!0},get(l,d,f){if(d===_r)return t;var h=r.get(d),g=d in l;if(h===void 0&&(!g||tr(l,d)?.writable)&&(h=o(()=>{var m=Oe(g?l[d]:at),_=U(m);return _}),r.set(d,h)),h!==void 0){var p=s(h);return p===at?void 0:p}return Reflect.get(l,d,f)},getOwnPropertyDescriptor(l,d){var f=Reflect.getOwnPropertyDescriptor(l,d);if(f&&"value"in f){var h=r.get(d);h&&(f.value=s(h))}else if(f===void 0){var g=r.get(d),p=g?.v;if(g!==void 0&&p!==at)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,d){if(d===_r)return!0;var f=r.get(d),h=f!==void 0&&f.v!==at||Reflect.has(l,d);if(f!==void 0||Ce!==null&&(!h||tr(l,d)?.writable)){f===void 0&&(f=o(()=>{var p=h?Oe(l[d]):at,m=U(p);return m}),r.set(d,f));var g=s(f);if(g===at)return!1}return h},set(l,d,f,h){var g=r.get(d),p=d in l;if(a&&d==="length")for(var m=f;m<g.v;m+=1){var _=r.get(m+"");_!==void 0?b(_,at):m in l&&(_=o(()=>U(at)),r.set(m+"",_))}if(g===void 0)(!p||tr(l,d)?.writable)&&(g=o(()=>U(void 0)),b(g,Oe(f)),r.set(d,g));else{p=g.v!==at;var w=o(()=>Oe(f));b(g,w)}var P=Reflect.getOwnPropertyDescriptor(l,d);if(P?.set&&P.set.call(h,f),!p){if(a&&typeof d=="string"){var S=r.get("length"),D=Number(d);Number.isInteger(D)&&D>=S.v&&b(S,D+1)}jt(n)}return!0},ownKeys(l){s(n);var d=Reflect.ownKeys(l).filter(g=>{var p=r.get(g);return p===void 0||p.v!==at});for(var[f,h]of r)h.v!==at&&!(f in l)&&d.push(f);return d},setPrototypeOf(){Di()}})}function Hn(t){try{if(t!==null&&typeof t=="object"&&_r in t)return t[_r]}catch{}return t}function dl(t,e){return Object.is(Hn(t),Hn(e))}var Wn,Ys,Js,Zs;function vl(){if(Wn===void 0){Wn=window,Ys=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Js=tr(e,"firstChild").get,Zs=tr(e,"nextSibling").get,Bn(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Bn(r)&&(r.__t=void 0)}}function Yt(t=""){return document.createTextNode(t)}function Or(t){return Js.call(t)}function ra(t){return Zs.call(t)}function c(t,e){return Or(t)}function C(t,e=!1){{var r=Or(t);return r instanceof Comment&&r.data===""?ra(r):r}}function u(t,e=1,r=!1){let a=t;for(;e--;)a=ra(a);return a}function fl(t){t.textContent=""}function Ma(){return!1}function hl(t,e){if(e){const r=document.body;t.autofocus=!0,ar(()=>{document.activeElement===r&&t.focus()})}}let Gn=!1;function pl(){Gn||(Gn=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function Ur(t){var e=Re,r=Ce;_t(null),Lt(null);try{return t()}finally{_t(e),Lt(r)}}function Pn(t,e,r,a=r){t.addEventListener(e,()=>Ur(r));const n=t.__on_r;n?t.__on_r=()=>{n(),a(!0)}:t.__on_r=()=>a(!0),pl()}function gl(t){Ce===null&&Re===null&&ki(),Re!==null&&(Re.f&Tt)!==0&&Ce===null&&Pi(),Pr&&$i()}function ml(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Jt(t,e,r,a=!0){var n=Ce;n!==null&&(n.f&Ct)!==0&&(t|=Ct);var i={ctx:Ze,deps:null,nodes_start:null,nodes_end:null,f:t|$t,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Zr(i),i.f|=Pa}catch(d){throw it(i),d}else e!==null&&wr(i);if(a){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Lr)===0&&(o=o.first),o!==null&&(o.parent=n,n!==null&&ml(o,n),Re!==null&&(Re.f&yt)!==0&&(t&Sr)===0)){var l=Re;(l.effects??=[]).push(o)}}return i}function _l(){return Re!==null&&!Mt}function kn(t){const e=Jt(yn,null,!1);return pt(e,ct),e.teardown=t,e}function Bt(t){gl();var e=Ce.f,r=!Re&&(e&Kt)!==0&&(e&Pa)===0;if(r){var a=Ze;(a.e??=[]).push(t)}else return Xs(t)}function Xs(t){return Jt(bn|wi,t,!1)}function bl(t){At.ensure();const e=Jt(Sr|Lr,t,!0);return(r={})=>new Promise(a=>{r.outro?Qt(e,()=>{it(e),a(void 0)}):(it(e),a(void 0))})}function Na(t){return Jt(bn,t,!1)}function yl(t){return Jt(ka|Lr,t,!0)}function En(t,e=0){return Jt(yn|e,t,!0)}function I(t,e=[],r=[]){Gs(e,r,a=>{Jt(yn,()=>t(...a.map(s)),!0)})}function Zt(t,e=0){var r=Jt(ir|e,t,!0);return r}function ot(t,e=!0){return Jt(Kt|Lr,t,!0,e)}function eo(t){var e=t.teardown;if(e!==null){const r=Pr,a=Re;Vn(!0),_t(null);try{e.call(null)}finally{Vn(r),_t(a)}}}function to(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const n=r.ac;n!==null&&Ur(()=>{n.abort(Fr)});var a=r.next;(r.f&Sr)!==0?r.parent=null:it(r,e),r=a}}function wl(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&Kt)===0&&it(e),e=r}}function it(t,e=!0){var r=!1;(e||(t.f&yi)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(xl(t.nodes_start,t.nodes_end),r=!0),to(t,e&&!r),wa(t,0),pt(t,$r);var a=t.transitions;if(a!==null)for(const i of a)i.stop();eo(t);var n=t.parent;n!==null&&n.first!==null&&ro(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function xl(t,e){for(;t!==null;){var r=t===e?null:ra(t);t.remove(),t=r}}function ro(t){var e=t.parent,r=t.prev,a=t.next;r!==null&&(r.next=a),a!==null&&(a.prev=r),e!==null&&(e.first===t&&(e.first=a),e.last===t&&(e.last=r))}function Qt(t,e){var r=[];An(t,r,!0),ao(r,()=>{it(t),e&&e()})}function ao(t,e){var r=t.length;if(r>0){var a=()=>--r||e();for(var n of t)n.out(a)}else e()}function An(t,e,r){if((t.f&Ct)===0){if(t.f^=Ct,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&e.push(o);for(var a=t.first;a!==null;){var n=a.next,i=(a.f&cr)!==0||(a.f&Kt)!==0;An(a,e,i?r:!1),a=n}}}function Ca(t){no(t,!0)}function no(t,e){if((t.f&Ct)!==0){t.f^=Ct,(t.f&ct)===0&&(pt(t,$t),wr(t));for(var r=t.first;r!==null;){var a=r.next,n=(r.f&cr)!==0||(r.f&Kt)!==0;no(r,n?e:!1),r=a}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let Nr=!1;function Qn(t){Nr=t}let Pr=!1;function Vn(t){Pr=t}let Re=null,Mt=!1;function _t(t){Re=t}let Ce=null;function Lt(t){Ce=t}let Vt=null;function so(t){Re!==null&&(Vt===null?Vt=[t]:Vt.push(t))}let ht=null,St=0,Et=null;function Sl(t){Et=t}let oo=1,Jr=0,Ft=Jr;function Fn(t){Ft=t}let Xt=!1;function io(){return++oo}function Ia(t){var e=t.f;if((e&$t)!==0)return!0;if((e&lr)!==0){var r=t.deps,a=(e&Tt)!==0;if(r!==null){var n,i,o=(e&ya)!==0,l=a&&Ce!==null&&!Xt,d=r.length;if((o||l)&&(Ce===null||(Ce.f&$r)===0)){var f=t,h=f.parent;for(n=0;n<d;n++)i=r[n],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=ya),l&&h!==null&&(h.f&Tt)===0&&(f.f^=Tt)}for(n=0;n<d;n++)if(i=r[n],Ia(i)&&Fs(i),i.wv>t.wv)return!0}(!a||Ce!==null&&!Xt)&&pt(t,ct)}return!1}function lo(t,e,r=!0){var a=t.reactions;if(a!==null&&!Vt?.includes(t))for(var n=0;n<a.length;n++){var i=a[n];(i.f&yt)!==0?lo(i,e,!1):e===i&&(r?pt(i,$t):(i.f&ct)!==0&&pt(i,lr),wr(i))}}function co(t){var e=ht,r=St,a=Et,n=Re,i=Xt,o=Vt,l=Ze,d=Mt,f=Ft,h=t.f;ht=null,St=0,Et=null,Xt=(h&Tt)!==0&&(Mt||!Nr||Re===null),Re=(h&(Kt|Sr))===0?t:null,Vt=null,Cr(t.ctx),Mt=!1,Ft=++Jr,t.ac!==null&&(Ur(()=>{t.ac.abort(Fr)}),t.ac=null);try{t.f|=nn;var g=t.fn,p=g(),m=t.deps;if(ht!==null){var _;if(wa(t,St),m!==null&&St>0)for(m.length=St+ht.length,_=0;_<ht.length;_++)m[St+_]=ht[_];else t.deps=m=ht;if(!Xt||(h&yt)!==0&&t.reactions!==null)for(_=St;_<m.length;_++)(m[_].reactions??=[]).push(t)}else m!==null&&St<m.length&&(wa(t,St),m.length=St);if(zr()&&Et!==null&&!Mt&&m!==null&&(t.f&(yt|lr|$t))===0)for(_=0;_<Et.length;_++)lo(Et[_],t);return n!==null&&n!==t&&(Jr++,Et!==null&&(a===null?a=Et:a.push(...Et))),(t.f&mr)!==0&&(t.f^=mr),p}catch(w){return zs(w)}finally{t.f^=nn,ht=e,St=r,Et=a,Re=n,Xt=i,Vt=o,Cr(l),Mt=d,Ft=f}}function $l(t,e){let r=e.reactions;if(r!==null){var a=gi.call(r,t);if(a!==-1){var n=r.length-1;n===0?r=e.reactions=null:(r[a]=r[n],r.pop())}}r===null&&(e.f&yt)!==0&&(ht===null||!ht.includes(e))&&(pt(e,lr),(e.f&(Tt|ya))===0&&(e.f^=ya),Vs(e),wa(e,0))}function wa(t,e){var r=t.deps;if(r!==null)for(var a=e;a<r.length;a++)$l(t,r[a])}function Zr(t){var e=t.f;if((e&$r)===0){pt(t,ct);var r=Ce,a=Nr;Ce=t,Nr=!0;try{(e&ir)!==0?wl(t):to(t),eo(t);var n=co(t);t.teardown=typeof n=="function"?n:null,t.wv=oo;var i;Ms&&Yi&&(t.f&$t)!==0&&t.deps}finally{Nr=a,Ce=r}}}async function Pl(){await Promise.resolve(),tl()}function s(t){var e=t.f,r=(e&yt)!==0;if(Re!==null&&!Mt){var a=Ce!==null&&(Ce.f&$r)!==0;if(!a&&!Vt?.includes(t)){var n=Re.deps;if((Re.f&nn)!==0)t.rv<Jr&&(t.rv=Jr,ht===null&&n!==null&&n[St]===t?St++:ht===null?ht=[t]:(!Xt||!ht.includes(t))&&ht.push(t));else{(Re.deps??=[]).push(t);var i=t.reactions;i===null?t.reactions=[Re]:i.includes(Re)||i.push(Re)}}}else if(r&&t.deps===null&&t.effects===null){var o=t,l=o.parent;l!==null&&(l.f&Tt)===0&&(o.f^=Tt)}if(Pr){if(rr.has(t))return rr.get(t);if(r){o=t;var d=o.v;return((o.f&ct)===0&&o.reactions!==null||uo(o))&&(d=$n(o)),rr.set(o,d),d}}else r&&(o=t,Ia(o)&&Fs(o));if((t.f&mr)!==0)throw t.v;return t.v}function uo(t){if(t.v===at)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(rr.has(e)||(e.f&yt)!==0&&uo(e))return!0;return!1}function kr(t){var e=Mt;try{return Mt=!0,t()}finally{Mt=e}}const kl=-7169;function pt(t,e){t.f=t.f&kl|e}function El(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Al=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Tl(t){return Al.includes(t)}const Dl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ml(t){return t=t.toLowerCase(),Dl[t]??t}const Nl=["touchstart","touchmove"];function Cl(t){return Nl.includes(t)}const vo=new Set,ln=new Set;function Tn(t,e,r,a={}){function n(i){if(a.capture||Vr.call(e,i),!i.cancelBubble)return Ur(()=>r?.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?ar(()=>{e.addEventListener(t,n,a)}):e.addEventListener(t,n,a),n}function cn(t,e,r,a={}){var n=Tn(e,t,r,a);return()=>{t.removeEventListener(e,n,a)}}function ma(t,e,r,a,n){var i={capture:a,passive:n},o=Tn(t,e,r,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&kn(()=>{e.removeEventListener(t,o,i)})}function Ye(t){for(var e=0;e<t.length;e++)vo.add(t[e]);for(var r of ln)r(t)}let Kn=null;function Vr(t){var e=this,r=e.ownerDocument,a=t.type,n=t.composedPath?.()||[],i=n[0]||t.target;Kn=t;var o=0,l=Kn===t&&t.__root;if(l){var d=n.indexOf(l);if(d!==-1&&(e===document||e===window)){t.__root=e;return}var f=n.indexOf(e);if(f===-1)return;d<=f&&(o=d)}if(i=n[o]||t.target,i!==e){an(t,"currentTarget",{configurable:!0,get(){return i||r}});var h=Re,g=Ce;_t(null),Lt(null);try{for(var p,m=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var w=i["__"+a];if(w!=null&&(!i.disabled||t.target===i))if(ta(w)){var[P,...S]=w;P.apply(i,[t,...S])}else w.call(i,t)}catch(D){p?m.push(D):p=D}if(t.cancelBubble||_===e||_===null)break;i=_}if(p){for(let D of m)queueMicrotask(()=>{throw D});throw p}}finally{t.__root=e,delete t.currentTarget,_t(h),Lt(g)}}}function fo(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function qr(t,e){var r=Ce;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function y(t,e){var r=(e&zi)!==0,a=(e&Ui)!==0,n,i=!t.startsWith("<!>");return()=>{n===void 0&&(n=fo(i?t:"<!>"+t),r||(n=Or(n)));var o=a||Ys?document.importNode(n,!0):n.cloneNode(!0);if(r){var l=Or(o),d=o.lastChild;qr(l,d)}else qr(o,o);return o}}function Il(t,e,r="svg"){var a=!t.startsWith("<!>"),n=`<${r}>${a?t:"<!>"+t}</${r}>`,i;return()=>{if(!i){var o=fo(n),l=Or(o);i=Or(l)}var d=i.cloneNode(!0);return qr(d,d),d}}function Rl(t,e){return Il(t,e,"svg")}function bt(t=""){{var e=Yt(t+"");return qr(e,e),e}}function Y(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Yt();return t.append(e,r),qr(e,r),t}function v(t,e){t!==null&&t.before(e)}let xa=!0;function Yn(t){xa=t}function N(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??=t.nodeValue)&&(t.__t=r,t.nodeValue=r+"")}function Ol(t,e){return ql(t,e)}const Dr=new Map;function ql(t,{target:e,anchor:r,props:a={},events:n,context:i,intro:o=!0}){vl();var l=new Set,d=g=>{for(var p=0;p<g.length;p++){var m=g[p];if(!l.has(m)){l.add(m);var _=Cl(m);e.addEventListener(m,Vr,{passive:_});var w=Dr.get(m);w===void 0?(document.addEventListener(m,Vr,{passive:_}),Dr.set(m,1)):Dr.set(m,w+1)}}};d(mn(vo)),ln.add(d);var f=void 0,h=bl(()=>{var g=r??e.appendChild(Yt());return nl(g,{pending:()=>{}},p=>{if(i){J({});var m=Ze;m.c=i}n&&(a.$$events=n),xa=o,f=t(p,a)||{},xa=!0,i&&Z()}),()=>{for(var p of l){e.removeEventListener(p,Vr);var m=Dr.get(p);--m===0?(document.removeEventListener(p,Vr),Dr.delete(p)):Dr.set(p,m)}ln.delete(d),g!==r&&g.parentNode?.removeChild(g)}});return jl.set(f,h),f}let jl=new WeakMap;function k(t,e,r=!1){var a=t,n=null,i=null,o=at,l=r?cr:0,d=!1;const f=(m,_=!0)=>{d=!0,p(_,m)};var h=null;function g(){h!==null&&(h.lastChild.remove(),a.before(h),h=null);var m=o?n:i,_=o?i:n;m&&Ca(m),_&&Qt(_,()=>{o?i=null:n=null})}const p=(m,_)=>{if(o!==(o=m)){var w=Ma(),P=a;if(w&&(h=document.createDocumentFragment(),h.append(P=Yt())),o?n??=_&&ot(()=>_(P)):i??=_&&ot(()=>_(P)),w){var S=He,D=o?n:i,$=o?i:n;D&&S.skipped_effects.delete(D),$&&S.skipped_effects.add($),S.add_callback(g)}else g()}};Zt(()=>{d=!1,e(f),d||p(null,null)},l)}function Ll(t,e,r){var a=t,n=at,i,o,l=null,d=zr()?Ki:js;function f(){i&&Qt(i),l!==null&&(l.lastChild.remove(),a.before(l),l=null),i=o}Zt(()=>{if(d(n,n=e())){var h=a,g=Ma();g&&(l=document.createDocumentFragment(),l.append(h=Yt())),o=ot(()=>r(h)),g?He.add_callback(f):f()}})}function xr(t,e){return e}function Bl(t,e,r){for(var a=t.items,n=[],i=e.length,o=0;o<i;o++)An(e[o].e,n,!0);var l=i>0&&n.length===0&&r!==null;if(l){var d=r.parentNode;fl(d),d.append(r),a.clear(),Ot(t,e[0].prev,e[i-1].next)}ao(n,()=>{for(var f=0;f<i;f++){var h=e[f];l||(a.delete(h.k),Ot(t,h.prev,h.next)),it(h.e,!l)}})}function nt(t,e,r,a,n,i=null){var o=t,l={flags:e,items:new Map,first:null},d=(e&Os)!==0;if(d){var f=t;o=f.appendChild(Yt())}var h=null,g=!1,p=new Map,m=Sn(()=>{var S=r();return ta(S)?S:S==null?[]:mn(S)}),_,w;function P(){zl(w,_,l,p,o,n,e,a,r),i!==null&&(_.length===0?h?Ca(h):h=ot(()=>i(o)):h!==null&&Qt(h,()=>{h=null}))}Zt(()=>{w??=Ce,_=s(m);var S=_.length;if(!(g&&S===0)){g=S===0;var D,$,A,E;if(Ma()){var T=new Set,R=He;for($=0;$<S;$+=1){A=_[$],E=a(A,$);var x=l.items.get(E)??p.get(E);x?(e&(Ea|Aa))!==0&&ho(x,A,$,e):(D=po(null,l,null,null,A,E,$,n,e,r,!0),p.set(E,D)),T.add(E)}for(const[W,X]of l.items)T.has(W)||R.skipped_effects.add(X.e);R.add_callback(P)}else P();s(m)}})}function zl(t,e,r,a,n,i,o,l,d){var f=(o&Ci)!==0,h=(o&(Ea|Aa))!==0,g=e.length,p=r.items,m=r.first,_=m,w,P=null,S,D=[],$=[],A,E,T,R;if(f)for(R=0;R<g;R+=1)A=e[R],E=l(A,R),T=p.get(E),T!==void 0&&(T.a?.measure(),(S??=new Set).add(T));for(R=0;R<g;R+=1){if(A=e[R],E=l(A,R),T=p.get(E),T===void 0){var x=a.get(E);if(x!==void 0){a.delete(E),p.set(E,x);var W=P?P.next:_;Ot(r,P,x),Ot(r,x,W),Va(x,W,n),P=x}else{var X=_?_.e.nodes_start:n;P=po(X,r,P,P===null?r.first:P.next,A,E,R,i,o,d)}p.set(E,P),D=[],$=[],_=P.next;continue}if(h&&ho(T,A,R,o),(T.e.f&Ct)!==0&&(Ca(T.e),f&&(T.a?.unfix(),(S??=new Set).delete(T))),T!==_){if(w!==void 0&&w.has(T)){if(D.length<$.length){var L=$[0],z;P=L.prev;var ce=D[0],ye=D[D.length-1];for(z=0;z<D.length;z+=1)Va(D[z],L,n);for(z=0;z<$.length;z+=1)w.delete($[z]);Ot(r,ce.prev,ye.next),Ot(r,P,ce),Ot(r,ye,L),_=L,P=ye,R-=1,D=[],$=[]}else w.delete(T),Va(T,_,n),Ot(r,T.prev,T.next),Ot(r,T,P===null?r.first:P.next),Ot(r,P,T),P=T;continue}for(D=[],$=[];_!==null&&_.k!==E;)(_.e.f&Ct)===0&&(w??=new Set).add(_),$.push(_),_=_.next;if(_===null)continue;T=_}D.push(T),P=T,_=T.next}if(_!==null||w!==void 0){for(var we=w===void 0?[]:mn(w);_!==null;)(_.e.f&Ct)===0&&we.push(_),_=_.next;var q=we.length;if(q>0){var le=(o&Os)!==0&&g===0?n:null;if(f){for(R=0;R<q;R+=1)we[R].a?.measure();for(R=0;R<q;R+=1)we[R].a?.fix()}Bl(r,we,le)}}f&&ar(()=>{if(S!==void 0)for(T of S)T.a?.apply()}),t.first=r.first&&r.first.e,t.last=P&&P.e;for(var ge of a.values())it(ge.e);a.clear()}function ho(t,e,r,a){(a&Ea)!==0&&Rr(t.v,e),(a&Aa)!==0?Rr(t.i,r):t.i=r}function po(t,e,r,a,n,i,o,l,d,f,h){var g=(d&Ea)!==0,p=(d&Ii)===0,m=g?p?ul(n,!1,!1):nr(n):n,_=(d&Aa)===0?o:nr(o),w={i:_,v:m,k:i,a:null,e:null,prev:r,next:a};try{if(t===null){var P=document.createDocumentFragment();P.append(t=Yt())}return w.e=ot(()=>l(t,m,_,f),Fi),w.e.prev=r&&r.e,w.e.next=a&&a.e,r===null?h||(e.first=w):(r.next=w,r.e.next=w.e),a!==null&&(a.prev=w,a.e.prev=w.e),w}finally{}}function Va(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,n=e?e.e.nodes_start:r,i=t.e.nodes_start;i!==null&&i!==a;){var o=ra(i);n.before(i),i=o}}function Ot(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function he(t,e,...r){var a=t,n=oe,i;Zt(()=>{n!==(n=e())&&(i&&(it(i),i=null),i=ot(()=>n(a,...r)))},cr)}function br(t,e,r){var a=t,n,i,o=null,l=null;function d(){i&&(Qt(i),i=null),o&&(o.lastChild.remove(),a.before(o),o=null),i=l,l=null}Zt(()=>{if(n!==(n=e())){var f=Ma();if(n){var h=a;f&&(o=document.createDocumentFragment(),o.append(h=Yt()),i&&He.skipped_effects.add(i)),l=ot(()=>r(h,n))}f?He.add_callback(d):d()}},cr)}function Ul(t,e,r,a,n,i){var o,l,d=null,f=t,h;Zt(()=>{const g=e()||null;var p=Wi;g!==o&&(h&&(g===null?Qt(h,()=>{h=null,l=null}):g===l?Ca(h):(it(h),Yn(!1))),g&&g!==l&&(h=ot(()=>{if(d=document.createElementNS(p,g),qr(d,d),a){var m=d.appendChild(Yt());a(d,m)}Ce.nodes_end=d,f.before(d)})),o=g,o&&(l=o),Yn(!0))},cr)}function Hl(t,e){var r=void 0,a;Zt(()=>{r!==(r=e())&&(a&&(it(a),a=null),r&&(a=ot(()=>{Na(()=>r(t))})))})}function go(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(r=go(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function Wl(){for(var t,e,r=0,a="",n=arguments.length;r<n;r++)(t=arguments[r])&&(e=go(t))&&(a&&(a+=" "),a+=e);return a}function Gl(t){return typeof t=="object"?Wl(t):t??""}const Jn=[...` 	
\r\f \v\uFEFF`];function Ql(t,e,r){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),r){for(var n in r)if(r[n])a=a?a+" "+n:n;else if(a.length)for(var i=n.length,o=0;(o=a.indexOf(n,o))>=0;){var l=o+i;(o===0||Jn.includes(a[o-1]))&&(l===a.length||Jn.includes(a[l]))?a=(o===0?"":a.substring(0,o))+a.substring(l+1):o=l}}return a===""?null:a}function Zn(t,e=!1){var r=e?" !important;":";",a="";for(var n in t){var i=t[n];i!=null&&i!==""&&(a+=" "+n+": "+i+r)}return a}function Fa(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Vl(t,e){if(e){var r="",a,n;if(Array.isArray(e)?(a=e[0],n=e[1]):a=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,d=[];a&&d.push(...Object.keys(a).map(Fa)),n&&d.push(...Object.keys(n).map(Fa));var f=0,h=-1;const w=t.length;for(var g=0;g<w;g++){var p=t[g];if(l?p==="/"&&t[g-1]==="*"&&(l=!1):i?i===p&&(i=!1):p==="/"&&t[g+1]==="*"?l=!0:p==='"'||p==="'"?i=p:p==="("?o++:p===")"&&o--,!l&&i===!1&&o===0){if(p===":"&&h===-1)h=g;else if(p===";"||g===w-1){if(h!==-1){var m=Fa(t.substring(f,h).trim());if(!d.includes(m)){p!==";"&&g++;var _=t.substring(f,g).trim();r+=" "+_+";"}}f=g+1,h=-1}}}}return a&&(r+=Zn(a)),n&&(r+=Zn(n,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function Me(t,e,r,a,n,i){var o=t.__className;if(o!==r||o===void 0){var l=Ql(r,a,i);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t.__className=r}else if(i&&n!==i)for(var d in i){var f=!!i[d];(n==null||f!==!!n[d])&&t.classList.toggle(d,f)}return i}function Ka(t,e={},r,a){for(var n in r){var i=r[n];e[n]!==i&&(r[n]==null?t.style.removeProperty(n):t.style.setProperty(n,i,a))}}function mo(t,e,r,a){var n=t.__style;if(n!==e){var i=Vl(e,a);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}else a&&(Array.isArray(a)?(Ka(t,r?.[0],a[0]),Ka(t,r?.[1],a[1],"important")):Ka(t,r,a));return a}function Sa(t,e,r=!1){if(t.multiple){if(e==null)return;if(!ta(e))return Qi();for(var a of t.options)a.selected=e.includes(Yr(a));return}for(a of t.options){var n=Yr(a);if(dl(n,e)){a.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function _o(t){var e=new MutationObserver(()=>{Sa(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),kn(()=>{e.disconnect()})}function $a(t,e,r=e){var a=!0;Pn(t,"change",n=>{var i=n?"[selected]":":checked",o;if(t.multiple)o=[].map.call(t.querySelectorAll(i),Yr);else{var l=t.querySelector(i)??t.querySelector("option:not([disabled])");o=l&&Yr(l)}r(o)}),Na(()=>{var n=e();if(Sa(t,n,a),a&&n===void 0){var i=t.querySelector(":checked");i!==null&&(n=Yr(i),r(n))}t.__value=n,a=!1}),_o(t)}function Yr(t){return"__value"in t?t.__value:t.value}const Gr=Symbol("class"),Qr=Symbol("style"),bo=Symbol("is custom element"),yo=Symbol("is html");function Fl(t,e){var r=Ra(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e??"")}function Ya(t,e){var r=Ra(t);r.checked!==(r.checked=e??void 0)&&(t.checked=e)}function Kl(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function sr(t,e,r,a){var n=Ra(t);n[e]!==(n[e]=r)&&(e==="loading"&&(t[xi]=r),r==null?t.removeAttribute(e):typeof r!="string"&&wo(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Yl(t,e,r,a,n=!1,i=!1){var o=Ra(t),l=o[bo],d=!o[yo],f=e||{},h=t.tagName==="OPTION";for(var g in e)g in r||(r[g]=null);r.class?r.class=Gl(r.class):r[Gr]&&(r.class=null),r[Qr]&&(r.style??=null);var p=wo(t);for(const A in r){let E=r[A];if(h&&A==="value"&&E==null){t.value=t.__value="",f[A]=E;continue}if(A==="class"){var m=t.namespaceURI==="http://www.w3.org/1999/xhtml";Me(t,m,E,a,e?.[Gr],r[Gr]),f[A]=E,f[Gr]=r[Gr];continue}if(A==="style"){mo(t,E,e?.[Qr],r[Qr]),f[A]=E,f[Qr]=r[Qr];continue}var _=f[A];if(!(E===_&&!(E===void 0&&t.hasAttribute(A)))){f[A]=E;var w=A[0]+A[1];if(w!=="$$")if(w==="on"){const T={},R="$$"+A;let x=A.slice(2);var P=Tl(x);if(El(x)&&(x=x.slice(0,-7),T.capture=!0),!P&&_){if(E!=null)continue;t.removeEventListener(x,f[R],T),f[R]=null}if(E!=null)if(P)t[`__${x}`]=E,Ye([x]);else{let W=function(X){f[A].call(this,X)};var $=W;f[R]=Tn(x,t,W,T)}else P&&(t[`__${x}`]=void 0)}else if(A==="style")sr(t,A,E);else if(A==="autofocus")hl(t,!!E);else if(!l&&(A==="__value"||A==="value"&&E!=null))t.value=t.__value=E;else if(A==="selected"&&h)Kl(t,E);else{var S=A;d||(S=Ml(S));var D=S==="defaultValue"||S==="defaultChecked";if(E==null&&!l&&!D)if(o[A]=null,S==="value"||S==="checked"){let T=t;const R=e===void 0;if(S==="value"){let x=T.defaultValue;T.removeAttribute(S),T.defaultValue=x,T.value=T.__value=R?x:null}else{let x=T.defaultChecked;T.removeAttribute(S),T.defaultChecked=x,T.checked=R?x:!1}}else t.removeAttribute(A);else D||p.includes(S)&&(l||typeof E!="string")?(t[S]=E,S in o&&(o[S]=at)):typeof E!="function"&&sr(t,S,E)}}}return f}function un(t,e,r=[],a=[],n,i=!1,o=!1){Gs(r,a,l=>{var d=void 0,f={},h=t.nodeName==="SELECT",g=!1;if(Zt(()=>{var m=e(...l.map(s)),_=Yl(t,d,m,n,i,o);g&&h&&"value"in m&&Sa(t,m.value);for(let P of Object.getOwnPropertySymbols(f))m[P]||it(f[P]);for(let P of Object.getOwnPropertySymbols(m)){var w=m[P];P.description===Gi&&(!d||w!==d[P])&&(f[P]&&it(f[P]),f[P]=ot(()=>Hl(t,()=>w))),_[P]=w}d=_}),h){var p=t;Na(()=>{Sa(p,d.value,!0),_o(p)})}g=!0})}function Ra(t){return t.__attributes??={[bo]:t.nodeName.includes("-"),[yo]:t.namespaceURI===Hi}}var Xn=new Map;function wo(t){var e=t.getAttribute("is")||t.nodeName,r=Xn.get(e);if(r)return r;Xn.set(e,r=[]);for(var a,n=t,i=Element.prototype;i!==n;){a=mi(n);for(var o in a)a[o].set&&r.push(o);n=_n(n)}return r}const Jl=()=>performance.now(),Gt={tick:t=>requestAnimationFrame(t),now:()=>Jl(),tasks:new Set};function xo(){const t=Gt.now();Gt.tasks.forEach(e=>{e.c(t)||(Gt.tasks.delete(e),e.f())}),Gt.tasks.size!==0&&Gt.tick(xo)}function Zl(t){let e;return Gt.tasks.size===0&&Gt.tick(xo),{promise:new Promise(r=>{Gt.tasks.add(e={c:t,f:r})}),abort(){Gt.tasks.delete(e)}}}function es(t,e){Ur(()=>{t.dispatchEvent(new CustomEvent(e))})}function Xl(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function ts(t){const e={},r=t.split(";");for(const a of r){const[n,i]=a.split(":");if(!n||i===void 0)break;const o=Xl(n.trim());e[o]=i.trim()}return e}const ec=t=>t;function tc(t,e,r,a){var n=(t&Bi)!==0,i="in",o,l=e.inert,d=e.style.overflow,f,h;function g(){return Ur(()=>o??=r()(e,a?.()??{},{direction:i}))}var p={is_global:n,in(){e.inert=l,f?.abort(),es(e,"introstart"),f=So(e,g(),h,1,()=>{es(e,"introend"),f?.abort(),f=o=void 0,e.style.overflow=d})},out(P){{P?.(),o=void 0;return}},stop:()=>{f?.abort()}},m=Ce;if((m.transitions??=[]).push(p),xa){var _=n;if(!_){for(var w=m.parent;w&&(w.f&cr)!==0;)for(;(w=w.parent)&&(w.f&ir)===0;);_=!w||(w.f&Pa)!==0}_&&Na(()=>{kr(()=>p.in())})}}function So(t,e,r,a,n){if(Mr(e)){var i,o=!1;return ar(()=>{if(!o){var w=e({direction:"in"});i=So(t,w,r,a,n)}}),{abort:()=>{o=!0,i?.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(!e?.duration)return n(),{abort:oe,deactivate:oe,reset:oe,t:()=>a};const{delay:l=0,css:d,tick:f,easing:h=ec}=e;var g=[];if(f&&f(0,1),d){var p=ts(d(0,1));g.push(p,p)}var m=()=>1-a,_=t.animate(g,{duration:l,fill:"forwards"});return _.onfinish=()=>{_.cancel();var w=1-a,P=a-w,S=e.duration*Math.abs(P),D=[];if(S>0){var $=!1;if(d)for(var A=Math.ceil(S/16.666666666666668),E=0;E<=A;E+=1){var T=w+P*h(E/A),R=ts(d(T,1-T));D.push(R),$||=R.overflow==="hidden"}$&&(t.style.overflow="hidden"),m=()=>{var x=_.currentTime;return w+P*h(x/S)},f&&Zl(()=>{if(_.playState!=="running")return!1;var x=m();return f(x,1-x),!0})}_=t.animate(D,{duration:S,fill:"forwards"}),_.onfinish=()=>{m=()=>a,f?.(a,1-a),n()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=oe)},deactivate:()=>{n=oe},reset:()=>{},t:()=>m()}}function Ke(t,e,r=e){var a=new WeakSet;Pn(t,"input",async n=>{var i=n?t.defaultValue:t.value;if(i=Ja(t)?Za(i):i,r(i),He!==null&&a.add(He),await Pl(),i!==(i=e())){var o=t.selectionStart,l=t.selectionEnd;t.value=i??"",l!==null&&(t.selectionStart=o,t.selectionEnd=Math.min(l,t.value.length))}}),kr(e)==null&&t.value&&(r(Ja(t)?Za(t.value):t.value),He!==null&&a.add(He)),En(()=>{var n=e();if(t===document.activeElement){var i=ga??He;if(a.has(i))return}Ja(t)&&n===Za(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function dn(t,e,r=e){Pn(t,"change",a=>{var n=a?t.defaultChecked:t.checked;r(n)}),kr(e)==null&&r(t.checked),En(()=>{var a=e();t.checked=!!a})}function Ja(t){var e=t.type;return e==="number"||e==="range"}function Za(t){return t===""?null:+t}let ua=!1;function rc(t){var e=ua;try{return ua=!1,[t(),ua]}finally{ua=e}}const ac={get(t,e){if(!t.exclude.includes(e))return t.props[e]},set(t,e){return!1},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function _e(t,e,r){return new Proxy({props:t,exclude:e},ac)}const nc={get(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Mr(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a)return a[e]}},set(t,e,r){let a=t.props.length;for(;a--;){let n=t.props[a];Mr(n)&&(n=n());const i=tr(n,e);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Mr(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a){const n=tr(a,e);return n&&!n.configurable&&(n.configurable=!0),n}}},has(t,e){if(e===_r||e===Is)return!1;for(let r of t.props)if(Mr(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(Mr(r)&&(r=r()),!!r){for(const a in r)e.includes(a)||e.push(a);for(const a of Object.getOwnPropertySymbols(r))e.includes(a)||e.push(a)}return e}};function Se(...t){return new Proxy({props:t},nc)}function fe(t,e,r,a){var n=!Br||(r&Oi)!==0,i=(r&ji)!==0,o=(r&Li)!==0,l=a,d=!0,f=()=>(d&&(d=!1,l=o?kr(a):a),l),h;if(i){var g=_r in t||Is in t;h=tr(t,e)?.set??(g&&e in t?$=>t[e]=$:void 0)}var p,m=!1;i?[p,m]=rc(()=>t[e]):p=t[e],p===void 0&&a!==void 0&&(p=f(),h&&(n&&Ai(),h(p)));var _;if(n?_=()=>{var $=t[e];return $===void 0?f():(d=!0,$)}:_=()=>{var $=t[e];return $!==void 0&&(l=void 0),$===void 0?l:$},n&&(r&qi)===0)return _;if(h){var w=t.$$legacy;return(function($,A){return arguments.length>0?((!n||!A||w||m)&&h(A?_():$),$):_()})}var P=!1,S=((r&Ri)!==0?Da:Sn)(()=>(P=!1,_()));i&&s(S);var D=Ce;return(function($,A){if(arguments.length>0){const E=A?s(S):n&&i?Oe($):$;return b(S,E),P=!0,l!==void 0&&(l=E),$}return Pr&&P||(D.f&$r)!==0?S.v:s(S)})}function $o(t){Ze===null&&Rs(),Br&&Ze.l!==null?oc(Ze).m.push(t):Bt(()=>{const e=kr(t);if(typeof e=="function")return e})}function sc(t){Ze===null&&Rs(),$o(()=>()=>kr(t))}function oc(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const ic="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(ic);const lc="modulepreload",cc=function(t){return"/"+t},rs={},vn=function(e,r,a){let n=Promise.resolve();if(r&&r.length>0){let f=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var o=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");n=f(r.map(h=>{if(h=cc(h),h in rs)return;rs[h]=!0;const g=h.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":lc,g||(m.as="script"),m.crossOrigin="",m.href=h,d&&m.setAttribute("nonce",d),document.head.appendChild(m),g)return new Promise((_,w)=>{m.addEventListener("load",_),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return n.then(l=>{for(const d of l||[])d.status==="rejected"&&i(d.reason);return e().catch(i)})};class as extends Map{#e=new Map;#t=U(0);#a=U(0);#o=Ft||-1;constructor(e){if(super(),e){for(var[r,a]of e)super.set(r,a);this.#a.v=super.size}}#d(e){return Ft===this.#o?U(e):nr(e)}has(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#d(0),r.set(e,a);else return s(this.#t),!1}return s(a),!0}forEach(e,r){this.#c(),super.forEach(e,r)}get(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#d(0),r.set(e,a);else{s(this.#t);return}}return s(a),super.get(e)}set(e,r){var a=this.#e,n=a.get(e),i=super.get(e),o=super.set(e,r),l=this.#t;if(n===void 0)n=this.#d(0),a.set(e,n),b(this.#a,super.size),jt(l);else if(i!==r){jt(n);var d=l.reactions===null?null:new Set(l.reactions),f=d===null||!n.reactions?.every(h=>d.has(h));f&&jt(l)}return o}delete(e){var r=this.#e,a=r.get(e),n=super.delete(e);return a!==void 0&&(r.delete(e),b(this.#a,super.size),b(a,-1),jt(this.#t)),n}clear(){if(super.size!==0){super.clear();var e=this.#e;b(this.#a,0);for(var r of e.values())b(r,-1);jt(this.#t),e.clear()}}#c(){s(this.#t);var e=this.#e;if(this.#a.v!==e.size){for(var r of super.keys())if(!e.has(r)){var a=this.#d(0);e.set(r,a)}}for([,a]of this.#e)s(a)}keys(){return s(this.#t),super.keys()}values(){return this.#c(),super.values()}entries(){return this.#c(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#a),super.size}}class uc{#e;#t;constructor(e,r){this.#e=e,this.#t=xn(r)}get current(){return this.#t(),this.#e()}}const dc=/\(.+\)/,vc=new Set(["all","print","screen","and","or","not","only"]);class fc extends uc{constructor(e,r){let a=dc.test(e)||e.split(/[\s,]+/).some(i=>vc.has(i.trim()))?e:`(${e})`;const n=window.matchMedia(a);super(()=>n.matches,i=>cn(n,"change",i))}}const hc=typeof window<"u"?window:void 0;function pc(t){let e=t.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class gc{#e;#t;constructor(e={}){const{window:r=hc,document:a=r?.document}=e;r!==void 0&&(this.#e=a,this.#t=xn(n=>{const i=cn(r,"focusin",n),o=cn(r,"focusout",n);return()=>{i(),o()}}))}get current(){return this.#t?.(),this.#e?pc(this.#e):null}}new gc;function mc(t){return typeof t=="function"}function _c(t,e){if(mc(t)){const a=t();return a===void 0?e:a}return t===void 0?e:t}function bc(t,e){let r=U(null);const a=K(()=>_c(e,250));function n(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,l;const d=new Promise((f,h)=>{o=f,l=h});b(r,{timeout:null,runner:null,promise:d,resolve:o,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);b(r,null);try{o.resolve(await t.apply(this,i))}catch(l){o.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(a)),s(r).promise}return n.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),b(r,null))},n.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(n,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),n}function Nt(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(e){return console.warn("[ProductsStore] Erreur parsing JSON:",e),null}}function aa(t){return t?.length?t.filter(e=>e.quantity!=null&&e.unit).map(e=>({q:typeof e.quantity=="number"?e.quantity:parseFloat(e.quantity),u:e.unit})).filter(e=>!isNaN(e.q)):[]}function na(t){if(!t?.length)return[];const e=new Map;return t.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const a=e.get(r.u)||0;e.set(r.u,a+r.q)}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function sa(t,e){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!e?.length){const l=t.map(d=>er(d.q.toString(),d.u)).join(" et ");return{numeric:t,display:l}}const r=new Map,a=new Map;t.forEach(l=>{const d=parseFloat(l.q);isNaN(d)||r.set(l.u,(r.get(l.u)||0)+d)}),e.forEach(l=>{a.set(l.u,(a.get(l.u)||0)+l.q)});const n=[],i=[];r.forEach((l,d)=>{const f=a.get(d)||0,h=l-f;h>0&&(n.push({q:h,u:d}),i.push(er(h.toString(),d)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:n,display:o}}function ut(t){return t?.length?t.map(e=>er(e.q.toString(),e.u)).join(" et "):"-"}function er(t,e){const r=parseFloat(t);if(isNaN(r))return`${t} ${e}`;if((e==="gr."||e==="ml")&&r>=1e3){const a=r/1e3,n=e==="gr."?"kg":"l.";let o=(Math.round(a*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${n}`}if(!["gr.","ml","kg","l."].includes(e)){let n=(Math.round(r*10)/10).toString();return n.endsWith(",0")&&(n=n.slice(0,-2)),`${n} ${e}`}return`${r} ${e}`}function Oa(t){if(!t?.length)return[];const e=new Map;return t.forEach(({q:r,u:a})=>{if(typeof r=="number"&&!isNaN(r)){const n=e.get(a)||0;e.set(a,n+r)}}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function Po(t){return t?Object.values(t).some(e=>e.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function ko(t){if(!t)return[];const e=[];return Object.entries(t).forEach(([r,a])=>{a.recipes?.forEach(n=>{e.push({...n,date:r,dateTimeService:r})})}),e}function qa(t){if(!t)return[];const e=Object.values(t).flatMap(r=>r.totalConsolidated);return Oa(e)}function Dn(t,e){const r=new Map,a=new Map;t.forEach(({q:o,u:l})=>{r.set(l,(r.get(l)||0)+o)}),e.forEach(({q:o,u:l})=>{a.set(l,(a.get(l)||0)+o)});const n=[],i=new Set([...r.keys(),...a.keys()]);for(const o of i){const l=r.get(o)||0,d=a.get(o)||0,f=l-d;Math.abs(f)>.001&&n.push({q:f,u:o})}return n}function ja(t){if(!t?.length)return"Équilibré";const e=t.filter(a=>a.q>0),r=t.filter(a=>a.q<0);if(e.length>0&&r.length>0){const a=e.map(i=>er(i.q.toString(),i.u)).join(" et "),n=r.map(i=>er(Math.abs(i.q).toString(),i.u)).join(" et ");return`${a} disponibles, ${n} manquant${r.length>1?"s":""}`}else return e.length>0?e.map(a=>"+"+er(a.q.toString(),a.u)).join(" et ")+" disponibles":r.length>0?r.map(a=>er(Math.abs(a.q).toString(),a.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function Eo(t,e){if(e.searchQuery.trim()){const r=e.searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(e.selectedStores.length>0&&(!t.storeInfo?.storeName||!e.selectedStores.includes(t.storeInfo.storeName))||e.selectedWho.length>0&&(!t.who||!t.who.some(r=>e.selectedWho.includes(r)))||e.selectedProductTypes.length>0&&(!t.productType||!e.selectedProductTypes.includes(t.productType))||e.selectedTemperatures.length>0&&!(e.selectedTemperatures.includes("frais")&&t.pFrais||e.selectedTemperatures.includes("surgele")&&t.pSurgel))}function yc(t){return t.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const wc=Object.freeze(Object.defineProperty({__proto__:null,aggregateByUnit:Oa,calculateAndFormatMissing:sa,calculateGlobalTotal:qa,calculateTotalQuantityArray:na,formatSingleQuantity:er,formatStockResult:ja,formatTotalQuantity:ut,generateRecipesWithDates:ko,hasConversions:Po,matchesFilters:Eo,safeJsonParse:Nt,slugify:yc,subtractQuantities:Dn,transformPurchasesToNumericQuantity:aa},Symbol.toStringTag,{value:"Module"}));function ns(t){return{...t,products:t.products?.map(e=>typeof e=="string"?e:e.$id)||[],mainId:t.mainId}}function xc(t){const e=Nt(t.specs)??null,r=na(aa(t.purchases??[]));let a=[];e?.quantity&&(a=[e.quantity]);const{numeric:n,display:i}=sa(a,r),o=Nt(t.stockReel)??null,l=ut(r),d=t.store?Nt(t.store):null,f=o?`${o.quantity} ${o.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid||"",productName:t.productName,productType:t.productType||"none",pFrais:e?.pFrais??!1,pSurgel:e?.pSurgel??!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,totalNeededRaw:[],status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,specs:t.specs,byDate:{},storeInfo:d,stockParsed:o,specsParsed:e,totalNeededArray:a,totalPurchasesArray:r,missingQuantityArray:n,stockOrTotalPurchases:f,displayTotalNeeded:ut(a),displayTotalPurchases:l,displayMissingQuantity:i,totalNeededOverrideParsed:Nt(t.totalNeededOverride),displayTotalOverride:(()=>{const h=Nt(t.totalNeededOverride);return h?ut([h.totalOverride]):""})()}}function da(t,e){const r=t.purchases??e.purchases,a=t.specs??e.specs,n=a?Nt(a):e.specsParsed,i=na(aa(r??[])),o=ut(i);let l=e.totalNeededArray;!e.productHugoUuid&&n?.quantity&&(l=[n.quantity]);const{numeric:d,display:f}=sa(l,i),h=t.stockReel??e.stockReel,g=h?Nt(h):e.stockParsed,p=t.store??e.store,m=p?Nt(p):e.storeInfo,_=g?`${g.quantity} ${g.unit}`:o;return t.purchases===void 0&&e.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${e.purchases.length} purchases pour ${e.productName}`),{...e,$updatedAt:t.$updatedAt,productName:t.productName??e.productName,productType:t.productType??e.productType,isSynced:t.isSynced??e.isSynced,mainId:t.mainId??e.mainId,pFrais:n?.pFrais??e.pFrais,pSurgel:n?.pSurgel??e.pSurgel,status:t.status??e.status,who:t.who??e.who,store:p,stockReel:h,specs:a,purchases:r,previousNames:t.previousNames??e.previousNames,isMerged:t.isMerged??e.isMerged,mergedFrom:t.mergedFrom??e.mergedFrom,mergeDate:t.mergeDate??e.mergeDate,mergeReason:t.mergeReason??e.mergeReason,mergedInto:t.mergedInto??e.mergedInto,totalNeededOverride:t.totalNeededOverride??e.totalNeededOverride,storeInfo:m,stockParsed:g,specsParsed:n,totalNeededArray:l,totalPurchasesArray:i,missingQuantityArray:d,stockOrTotalPurchases:_,displayTotalPurchases:o,displayMissingQuantity:f,displayTotalNeeded:ut(l),totalNeededOverrideParsed:Nt(t.totalNeededOverride??e.totalNeededOverride),displayTotalOverride:(()=>{const w=Nt(t.totalNeededOverride??e.totalNeededOverride);return w?ut([w.totalOverride]):""})()}}class Sc{#e=U(Oe([]));MAX_TOASTS=3;get toasts(){return[...s(this.#e)].sort((e,r)=>r.timestamp-e.timestamp)}create(e){const r=e.id||crypto.randomUUID(),a={id:r,state:e.state,message:e.message,timestamp:Date.now(),source:e.source||"user",timeoutId:void 0,details:e.details,actions:e.actions||[]};return this.#t(a),r}update(e,r){const a=s(this.#e).findIndex(i=>i.id===e);if(a===-1)return;const n=s(this.#e)[a];n.timeoutId&&clearTimeout(n.timeoutId),s(this.#e)[a]={...n,state:r.state||n.state,message:r.message||n.message,source:r.source||n.source,actions:r.actions||n.actions},this.#a(s(this.#e)[a])}async track(e,r){const a=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const n=await e;return this.update(a,{state:"success",message:r.success||"Opération réussie"}),n}catch(n){throw this.update(a,{state:"error",message:r.error||"Erreur lors de l'opération"}),n}}dismiss(e){const r=s(this.#e).findIndex(n=>n.id===e);if(r===-1)return;const a=s(this.#e)[r];a.timeoutId&&clearTimeout(a.timeoutId),s(this.#e).splice(r,1)}dismissAll(){s(this.#e).forEach(e=>{e.timeoutId&&clearTimeout(e.timeoutId)}),b(this.#e,[],!0)}#t(e){if(e.source==="user"){const r=s(this.#e).findIndex(a=>a.source==="user");r>=0?s(this.#e)[r]=e:s(this.#e).push(e)}else{const r=s(this.#e).filter(a=>a.source!=="user");if(r.length>=2){const a=r[0];this.dismiss(a.id)}s(this.#e).push(e)}s(this.#e).length>this.MAX_TOASTS&&s(this.#e).splice(0,s(this.#e).length-this.MAX_TOASTS),this.#a(e)}#a(e){if(e.state!=="success"&&e.state!=="info")return;const r=e.source==="realtime-other"?4e3:2e3;e.timeoutId=setTimeout(()=>{this.dismiss(e.id)},r)}success(e,r){return this.create({state:"success",message:e,details:r})}error(e,r){return this.create({state:"error",message:e,details:r})}warning(e,r){return this.create({state:"warning",message:e,source:r?.source||"system",details:r?.details,actions:r?.actions})}info(e,r){return this.create({state:"info",message:e,source:r?.source||"system",details:r?.details})}loading(e,r){return this.create({state:"loading",message:e,details:r})}}const Qe=new Sc;function La(t){return[...t].sort()}function $c(t){return new Date(t)<new Date}function Pc(t){if(t.length===0)return!0;const e=new Date(Ba(t));return e.setHours(23,59,59,999),e<new Date}function Ao(t){return t.length===0?null:La(t)[0]}function Ba(t){return t.length===0?null:La(t).pop()??null}function kc(t){if(t.length===0)return null;const e=new Date;return e.setHours(0,0,0,0),La(t).find(r=>new Date(r)>=e)||null}function Ec(t){if(t.length===0)return null;const e=La(t),r=Pc(t),a=$c(e[0]),n=new Date;let i;return r?i=e[0]:a?i=n.toISOString().slice(0,19)+"Z":i=e[0],{start:i,end:e[e.length-1]}}function To(t){const e=kc(t),r=Ba(t);return!e||!r?null:{start:e,end:r}}function Ac(t){const e=Ao(t),r=Ba(t);return!e||!r?null:{start:e,end:r}}function Do(t,e){const r=Ac(e);return r?t.start===r.start&&t.end===r.end:!1}function Tc(t,e){const r=To(e);return r?t.start===r.start&&t.end===r.end:!1}function Dc(t){return new Date(t).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function fr(t){return t?new Date(t).toLocaleDateString("fr-Fr",{weekday:"short",day:"numeric",month:"short"}):""}function Xa(t){const r=new Date(t).getHours();return r===12?"sun":r===20?"moon":r===8?"cloud":null}function Mc(t,e){if(!t.byDate?.[e])return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const r=t.byDate[e],a=[e],n=new Map;r.recipes?.length&&n.set(e,r.recipes);const i=r.totalConsolidated||[],o=i.length>0?ut(i):"-",l=Nc(t,e,i),d=l.filter(p=>p.q>0),f=new Date().toISOString().split("T")[0],g=e<f?[]:l.filter(p=>p.q<0);return{requiredQuantities:i,requiredQuantitiesFormatted:o,stockBalance:l,availableStockQuantities:d,missingStockQuantities:g,availableStockFormatted:ja(l),missingStockFormatted:ut(g.map(p=>({q:Math.abs(p.q),u:p.u}))),hasAvailableStock:d.length>0,hasMissingStock:g.length>0,totalRecipesInRange:r.recipes?.length||0,totalPortionsInRange:r.totalAssiettes||0,datesInSelectedRange:a,recipesByDate:n}}function Nc(t,e,r){let a=[],n="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(a=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],n=t.stockParsed.dateTime);const i=[];if(t.purchases)for(const d of t.purchases)Cc(d,e,n)&&i.push({q:d.quantity,u:d.unit});const o=[...a,...i],l=Oa(o);return Dn(l,r)}function Cc(t,e,r=""){if(t.status==="cancelled")return!1;const a=t.deliveryDate||t.$createdAt;return!a||a>e||r&&t.$createdAt<r?!1:a<=e}function Ic(t,e){const r=t.totalNeededArray||[],a=r.length>0?ut(r):"-",n=Mo(t,e[0],e[e.length-1],r),i=n.filter(f=>f.q>0),o=n.filter(f=>f.q<0),l=[...e].sort(),d=new Map;if(t.byDate)for(const[f,h]of Object.entries(t.byDate))h.recipes?.length&&d.set(f,h.recipes);return{requiredQuantities:r,requiredQuantitiesFormatted:a,stockBalance:n,availableStockQuantities:i,missingStockQuantities:o,availableStockFormatted:ja(n),missingStockFormatted:ut(o.map(f=>({q:Math.abs(f.q),u:f.u}))),hasAvailableStock:i.length>0,hasMissingStock:o.length>0,totalRecipesInRange:t.nbRecipes||0,totalPortionsInRange:t.totalAssiettes||0,datesInSelectedRange:l,recipesByDate:d}}function Rc(t,e,r){if(!t.byDate)return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const a=new Date(e),n=new Date(r),i=[],o=new Map,l=new Map;let d=0,f=0;for(const[S,D]of Object.entries(t.byDate)){const $=new Date(S);$>=a&&$<=n&&(i.push(S),d+=D.totalAssiettes||0,D.recipes?.length&&(o.set(S,D.recipes),f+=D.recipes.length),D.totalConsolidated&&D.totalConsolidated.forEach(({q:A,u:E})=>{l.set(E,(l.get(E)||0)+A)}))}const h=Array.from(l.entries()).map(([S,D])=>({q:D,u:S})),g=h.length>0?ut(h):"-",p=Mo(t,e,r,h),m=p.filter(S=>S.q>0),_=new Date().toISOString().split("T")[0],P=r<_?[]:p.filter(S=>S.q<0);return{requiredQuantities:h,requiredQuantitiesFormatted:g,stockBalance:p,availableStockQuantities:m,missingStockQuantities:P,availableStockFormatted:ja(p),missingStockFormatted:ut(P.map(S=>({q:Math.abs(S.q),u:S.u}))),hasAvailableStock:m.length>0,hasMissingStock:P.length>0,totalRecipesInRange:f,totalPortionsInRange:d,datesInSelectedRange:i,recipesByDate:o}}function Mo(t,e,r,a){let n=[],i="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(n=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],i=t.stockParsed.dateTime);const o=[];if(t.purchases)for(const f of t.purchases)Oc(f,e,r,i)&&o.push({q:f.quantity,u:f.unit});const l=[...n,...o],d=Oa(l);return Dn(d,a)}function Oc(t,e,r,a=""){if(t.status==="cancelled")return!1;const n=t.deliveryDate||t.$createdAt;return!n||n>r||a&&t.$createdAt<a?!1:n<=r}function qc(t,e,r,a){if(typeof e=="function"?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?a:r==="a"?a.call(t):a?a.value:e.get(t)}class j{constructor(e,r,a){this.method=e,this.attribute=r,a!==void 0&&(Array.isArray(a)?this.values=a:this.values=[a])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}j.equal=(t,e)=>new j("equal",t,e).toString();j.notEqual=(t,e)=>new j("notEqual",t,e).toString();j.lessThan=(t,e)=>new j("lessThan",t,e).toString();j.lessThanEqual=(t,e)=>new j("lessThanEqual",t,e).toString();j.greaterThan=(t,e)=>new j("greaterThan",t,e).toString();j.greaterThanEqual=(t,e)=>new j("greaterThanEqual",t,e).toString();j.isNull=t=>new j("isNull",t).toString();j.isNotNull=t=>new j("isNotNull",t).toString();j.between=(t,e,r)=>new j("between",t,[e,r]).toString();j.startsWith=(t,e)=>new j("startsWith",t,e).toString();j.endsWith=(t,e)=>new j("endsWith",t,e).toString();j.select=t=>new j("select",void 0,t).toString();j.search=(t,e)=>new j("search",t,e).toString();j.orderDesc=t=>new j("orderDesc",t).toString();j.orderAsc=t=>new j("orderAsc",t).toString();j.orderRandom=()=>new j("orderRandom").toString();j.cursorAfter=t=>new j("cursorAfter",void 0,t).toString();j.cursorBefore=t=>new j("cursorBefore",void 0,t).toString();j.limit=t=>new j("limit",void 0,t).toString();j.offset=t=>new j("offset",void 0,t).toString();j.contains=(t,e)=>new j("contains",t,e).toString();j.notContains=(t,e)=>new j("notContains",t,e).toString();j.notSearch=(t,e)=>new j("notSearch",t,e).toString();j.notBetween=(t,e,r)=>new j("notBetween",t,[e,r]).toString();j.notStartsWith=(t,e)=>new j("notStartsWith",t,e).toString();j.notEndsWith=(t,e)=>new j("notEndsWith",t,e).toString();j.createdBefore=t=>j.lessThan("$createdAt",t);j.createdAfter=t=>j.greaterThan("$createdAt",t);j.createdBetween=(t,e)=>j.between("$createdAt",t,e);j.updatedBefore=t=>j.lessThan("$updatedAt",t);j.updatedAfter=t=>j.greaterThan("$updatedAt",t);j.updatedBetween=(t,e)=>j.between("$updatedAt",t,e);j.or=t=>new j("or",void 0,t.map(e=>JSON.parse(e))).toString();j.and=t=>new j("and",void 0,t.map(e=>JSON.parse(e))).toString();j.distanceEqual=(t,e,r,a=!0)=>new j("distanceEqual",t,[[e,r,a]]).toString();j.distanceNotEqual=(t,e,r,a=!0)=>new j("distanceNotEqual",t,[[e,r,a]]).toString();j.distanceGreaterThan=(t,e,r,a=!0)=>new j("distanceGreaterThan",t,[[e,r,a]]).toString();j.distanceLessThan=(t,e,r,a=!0)=>new j("distanceLessThan",t,[[e,r,a]]).toString();j.intersects=(t,e)=>new j("intersects",t,[e]).toString();j.notIntersects=(t,e)=>new j("notIntersects",t,[e]).toString();j.crosses=(t,e)=>new j("crosses",t,[e]).toString();j.notCrosses=(t,e)=>new j("notCrosses",t,[e]).toString();j.overlaps=(t,e)=>new j("overlaps",t,[e]).toString();j.notOverlaps=(t,e)=>new j("notOverlaps",t,[e]).toString();j.touches=(t,e)=>new j("touches",t,[e]).toString();j.notTouches=(t,e)=>new j("notTouches",t,[e]).toString();var ss;(function(t){t[t.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",t[t.POLICY_VIOLATION=1008]="POLICY_VIOLATION",t[t.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(ss||(ss={}));var No,Co;class or{static custom(e){return e}static unique(e=7){const r=qc(or,No,"m",Co).call(or);let a="";for(let n=0;n<e;n++){const i=Math.floor(Math.random()*16).toString(16);a+=i}return r+a}}No=or,Co=function(){const e=new Date,r=Math.floor(e.getTime()/1e3),a=e.getMilliseconds();return r.toString(16)+a.toString(16).padStart(5,"0")};var os;(function(t){t.Equal="equal",t.NotEqual="notEqual",t.GreaterThan="greaterThan",t.GreaterThanEqual="greaterThanEqual",t.LessThan="lessThan",t.LessThanEqual="lessThanEqual",t.Contains="contains",t.IsNull="isNull",t.IsNotNull="isNotNull"})(os||(os={}));var is;(function(t){t.Totp="totp"})(is||(is={}));var ls;(function(t){t.Email="email",t.Phone="phone",t.Totp="totp",t.Recoverycode="recoverycode"})(ls||(ls={}));var cs;(function(t){t.Amazon="amazon",t.Apple="apple",t.Auth0="auth0",t.Authentik="authentik",t.Autodesk="autodesk",t.Bitbucket="bitbucket",t.Bitly="bitly",t.Box="box",t.Dailymotion="dailymotion",t.Discord="discord",t.Disqus="disqus",t.Dropbox="dropbox",t.Etsy="etsy",t.Facebook="facebook",t.Figma="figma",t.Github="github",t.Gitlab="gitlab",t.Google="google",t.Linkedin="linkedin",t.Microsoft="microsoft",t.Notion="notion",t.Oidc="oidc",t.Okta="okta",t.Paypal="paypal",t.PaypalSandbox="paypalSandbox",t.Podio="podio",t.Salesforce="salesforce",t.Slack="slack",t.Spotify="spotify",t.Stripe="stripe",t.Tradeshift="tradeshift",t.TradeshiftBox="tradeshiftBox",t.Twitch="twitch",t.Wordpress="wordpress",t.Yahoo="yahoo",t.Yammer="yammer",t.Yandex="yandex",t.Zoho="zoho",t.Zoom="zoom",t.Mock="mock"})(cs||(cs={}));var us;(function(t){t.AvantBrowser="aa",t.AndroidWebViewBeta="an",t.GoogleChrome="ch",t.GoogleChromeIOS="ci",t.GoogleChromeMobile="cm",t.Chromium="cr",t.MozillaFirefox="ff",t.Safari="sf",t.MobileSafari="mf",t.MicrosoftEdge="ps",t.MicrosoftEdgeIOS="oi",t.OperaMini="om",t.Opera="op",t.OperaNext="on"})(us||(us={}));var ds;(function(t){t.AmericanExpress="amex",t.Argencard="argencard",t.Cabal="cabal",t.Cencosud="cencosud",t.DinersClub="diners",t.Discover="discover",t.Elo="elo",t.Hipercard="hipercard",t.JCB="jcb",t.Mastercard="mastercard",t.Naranja="naranja",t.TarjetaShopping="targeta-shopping",t.UnionPay="unionpay",t.Visa="visa",t.MIR="mir",t.Maestro="maestro",t.Rupay="rupay"})(ds||(ds={}));var vs;(function(t){t.Afghanistan="af",t.Angola="ao",t.Albania="al",t.Andorra="ad",t.UnitedArabEmirates="ae",t.Argentina="ar",t.Armenia="am",t.AntiguaAndBarbuda="ag",t.Australia="au",t.Austria="at",t.Azerbaijan="az",t.Burundi="bi",t.Belgium="be",t.Benin="bj",t.BurkinaFaso="bf",t.Bangladesh="bd",t.Bulgaria="bg",t.Bahrain="bh",t.Bahamas="bs",t.BosniaAndHerzegovina="ba",t.Belarus="by",t.Belize="bz",t.Bolivia="bo",t.Brazil="br",t.Barbados="bb",t.BruneiDarussalam="bn",t.Bhutan="bt",t.Botswana="bw",t.CentralAfricanRepublic="cf",t.Canada="ca",t.Switzerland="ch",t.Chile="cl",t.China="cn",t.CoteDIvoire="ci",t.Cameroon="cm",t.DemocraticRepublicOfTheCongo="cd",t.RepublicOfTheCongo="cg",t.Colombia="co",t.Comoros="km",t.CapeVerde="cv",t.CostaRica="cr",t.Cuba="cu",t.Cyprus="cy",t.CzechRepublic="cz",t.Germany="de",t.Djibouti="dj",t.Dominica="dm",t.Denmark="dk",t.DominicanRepublic="do",t.Algeria="dz",t.Ecuador="ec",t.Egypt="eg",t.Eritrea="er",t.Spain="es",t.Estonia="ee",t.Ethiopia="et",t.Finland="fi",t.Fiji="fj",t.France="fr",t.MicronesiaFederatedStatesOf="fm",t.Gabon="ga",t.UnitedKingdom="gb",t.Georgia="ge",t.Ghana="gh",t.Guinea="gn",t.Gambia="gm",t.GuineaBissau="gw",t.EquatorialGuinea="gq",t.Greece="gr",t.Grenada="gd",t.Guatemala="gt",t.Guyana="gy",t.Honduras="hn",t.Croatia="hr",t.Haiti="ht",t.Hungary="hu",t.Indonesia="id",t.India="in",t.Ireland="ie",t.IranIslamicRepublicOf="ir",t.Iraq="iq",t.Iceland="is",t.Israel="il",t.Italy="it",t.Jamaica="jm",t.Jordan="jo",t.Japan="jp",t.Kazakhstan="kz",t.Kenya="ke",t.Kyrgyzstan="kg",t.Cambodia="kh",t.Kiribati="ki",t.SaintKittsAndNevis="kn",t.SouthKorea="kr",t.Kuwait="kw",t.LaoPeopleSDemocraticRepublic="la",t.Lebanon="lb",t.Liberia="lr",t.Libya="ly",t.SaintLucia="lc",t.Liechtenstein="li",t.SriLanka="lk",t.Lesotho="ls",t.Lithuania="lt",t.Luxembourg="lu",t.Latvia="lv",t.Morocco="ma",t.Monaco="mc",t.Moldova="md",t.Madagascar="mg",t.Maldives="mv",t.Mexico="mx",t.MarshallIslands="mh",t.NorthMacedonia="mk",t.Mali="ml",t.Malta="mt",t.Myanmar="mm",t.Montenegro="me",t.Mongolia="mn",t.Mozambique="mz",t.Mauritania="mr",t.Mauritius="mu",t.Malawi="mw",t.Malaysia="my",t.Namibia="na",t.Niger="ne",t.Nigeria="ng",t.Nicaragua="ni",t.Netherlands="nl",t.Norway="no",t.Nepal="np",t.Nauru="nr",t.NewZealand="nz",t.Oman="om",t.Pakistan="pk",t.Panama="pa",t.Peru="pe",t.Philippines="ph",t.Palau="pw",t.PapuaNewGuinea="pg",t.Poland="pl",t.FrenchPolynesia="pf",t.NorthKorea="kp",t.Portugal="pt",t.Paraguay="py",t.Qatar="qa",t.Romania="ro",t.Russia="ru",t.Rwanda="rw",t.SaudiArabia="sa",t.Sudan="sd",t.Senegal="sn",t.Singapore="sg",t.SolomonIslands="sb",t.SierraLeone="sl",t.ElSalvador="sv",t.SanMarino="sm",t.Somalia="so",t.Serbia="rs",t.SouthSudan="ss",t.SaoTomeAndPrincipe="st",t.Suriname="sr",t.Slovakia="sk",t.Slovenia="si",t.Sweden="se",t.Eswatini="sz",t.Seychelles="sc",t.Syria="sy",t.Chad="td",t.Togo="tg",t.Thailand="th",t.Tajikistan="tj",t.Turkmenistan="tm",t.TimorLeste="tl",t.Tonga="to",t.TrinidadAndTobago="tt",t.Tunisia="tn",t.Turkey="tr",t.Tuvalu="tv",t.Tanzania="tz",t.Uganda="ug",t.Ukraine="ua",t.Uruguay="uy",t.UnitedStates="us",t.Uzbekistan="uz",t.VaticanCity="va",t.SaintVincentAndTheGrenadines="vc",t.Venezuela="ve",t.Vietnam="vn",t.Vanuatu="vu",t.Samoa="ws",t.Yemen="ye",t.SouthAfrica="za",t.Zambia="zm",t.Zimbabwe="zw"})(vs||(vs={}));var fs;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t.OPTIONS="OPTIONS",t.HEAD="HEAD"})(fs||(fs={}));var hs;(function(t){t.Center="center",t.Topleft="top-left",t.Top="top",t.Topright="top-right",t.Left="left",t.Right="right",t.Bottomleft="bottom-left",t.Bottom="bottom",t.Bottomright="bottom-right"})(hs||(hs={}));var ps;(function(t){t.Jpg="jpg",t.Jpeg="jpeg",t.Png="png",t.Webp="webp",t.Heic="heic",t.Avif="avif",t.Gif="gif"})(ps||(ps={}));var gs;(function(t){t.Http="http",t.Schedule="schedule",t.Event="event"})(gs||(gs={}));var ms;(function(t){t.Waiting="waiting",t.Processing="processing",t.Completed="completed",t.Failed="failed",t.Scheduled="scheduled"})(ms||(ms={}));function Io(t,e){const{operationName:r,maxAutoRetries:a=1,autoRetryDelay:n=1e3}=e;let i=1,o=null;return new Promise((l,d)=>{const f=async(h=!1)=>{try{h?o=Qe.loading(`Tentative de ${r}...`):i>1?o?Qe.update(o,{state:"loading",message:`${r} (Tentative ${i}/${a+1})...`}):o=Qe.loading(`${r} (Tentative ${i}/${a+1})...`):o=Qe.loading(`${r} en cours...`);const g=await t();o&&Qe.update(o,{state:"success",message:e.successMessage||`${r} réussie !`,action:void 0}),e.onSuccess?.(g),l(g)}catch(g){console.error(`[RetryUtils] Erreur ${r} (Tentative ${i}):`,g);const p=g instanceof Error?g.message:"Erreur inconnue";if(i<=a){i++,o&&Qe.update(o,{state:"loading",message:`Erreur. Nouvelle tentative dans ${n/1e3}s...`}),setTimeout(()=>f(!1),n);return}o&&Qe.update(o,{state:"error",message:`Échec ${r}: ${p}`,action:{label:"Réessayer",onClick:()=>{Qe.dismiss(o),f(!0)}}}),e.onError?.(g)}};f(!1)})}function Ro(t,e){return{$id:t.$id,mainId:t.mainId,productHugoUuid:t.productHugoUuid,productName:t.productName,...e}}async function wt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getDatabases(),e=window.AppwriteClient.getConfig();return{databases:t,config:e}}async function jc(t){const a=await(await window.AppwriteClient.getAccount()).get();return{...t,updatedBy:a.name}}function pr(){return localStorage.getItem("appwrite-user-name")||""}async function Lc(t,e,r=100){try{const{databases:a,config:n}=await wt(),i=await a.listDocuments(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,[j.greaterThan("$updatedAt",e),j.equal("mainId",t),j.limit(r),j.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(a){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",a),[]}}async function Oo(t,e){const{lastSync:r,limit:a=100}=e;try{const{databases:n,config:i}=await wt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[j.equal("mainId",t),j.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),j.limit(a)])).documents;const o=await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[j.greaterThan("$updatedAt",r),j.equal("mainId",t),j.limit(a),j.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(n){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${t}:`,n);const i=n instanceof Error?n.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function Er(t,e,r=!0){const{databases:a,config:n}=await wt();return r&&(e.updatedBy=pr()),await a.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,t,e)}async function Wt(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${t} sur Appwrite...`);const n=Ro(a,e),i=await jc(n),{databases:o,config:l}=await wt(),d=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,t,i);return console.log(`[Appwrite Interactions] Produit ${t} créé avec succès`),d}catch(a){console.error(`[Appwrite Interactions] Erreur création produit ${t}:`,a);const n=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${n}`)}}async function qo(t,e){try{const{databases:r,config:a}=await wt(),{slugify:n}=await vn(async()=>{const{slugify:h}=await Promise.resolve().then(()=>wc);return{slugify:h}},void 0),o=`${n(t.productName).substring(0,10)}_${Date.now().toString(36)}`,l={quantity:t.quantity,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1},d={productHugoUuid:null,productName:t.productName,productType:t.productType||"Autre",store:t.store?JSON.stringify(t.store):null,who:t.who||[],isSynced:!0,mainId:e,status:"active",updatedBy:pr(),stockReel:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,specs:JSON.stringify(l)};console.log(`[Appwrite Interactions] Création produit manuel ${o}...`,d);const f=await r.createDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,o,d);return console.log(`[Appwrite Interactions] Produit manuel ${o} créé avec succès`),f}catch(r){throw console.error("[Appwrite Interactions] Erreur création produit manuel:",r),r}}async function jo(t,e){if(!t)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=e?JSON.stringify(e):null,a=await Er(t,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${t}, nouvelle valeur:`,a.store),a}async function Lo(t,e){return Er(t,{who:e})}async function fn(t,e){return Er(t,{stockReel:e})}async function Mn(t,e,r=!1){if(!t)throw new Error("ID du produit requis pour la mise à jour de l'override");const a=JSON.stringify(e),n=await Er(t,{totalNeededOverride:a},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${t}:`,e),n}async function Bo(t,e=!0){if(!t)throw new Error("ID du produit requis pour la suppression de l'override");const r=await Er(t,{totalNeededOverride:null},e);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${t}`),r}async function zo(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour mise à jour batch`);const n={};return e.stockReel!==void 0&&(n.stockReel=e.stockReel),e.who!==void 0&&(n.who=e.who),e.storeInfo!==void 0&&(n.store=JSON.stringify(e.storeInfo)),a.isSynced?(console.log(`[Appwrite Interactions] Produit ${t} déjà sync, update batch normal...`),await Er(t,n)):(console.log(`[Appwrite Interactions] Produit ${t} local, création batch avec upsert...`),await Wt(t,n,r))}catch(a){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${t}:`,a),a}}async function Uo(t){const{databases:e,config:r}=await wt(),a={...t,createdBy:pr()},n=await e.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,or.unique(),a);return console.log("[Appwrite Interactions] Achat créé:",n),n}async function Nn(t,e){try{const{databases:r,config:a}=await wt(),n=await r.getDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t),i={...e,products:e.products||n.products},o=await r.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t,i);return console.log(`[Appwrite Interactions] Achat ${t} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${t}:`,r);const a=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${a}`)}}async function Ho(t){try{const{databases:e,config:r}=await wt();await e.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,t),console.log(`[Appwrite Interactions] Achat ${t} supprimé`)}catch(e){console.error(`[Appwrite Interactions] Erreur suppression achat ${t}:`,e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Wo(t){if(!t?.length)return[];try{const{databases:e,config:r}=await wt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[j.equal("$id",t),j.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${a.documents.length} purchases chargés avec relations products`),a.documents}catch(e){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Go(t,e={}){let r=null;const a=i=>{const{events:o,payload:l}=i;if(!l)return;const d=o.some(m=>m.includes("products.")),f=o.some(m=>m.includes("purchases.")),h=o.some(m=>m.includes(".create")),g=o.some(m=>m.includes(".update")),p=o.some(m=>m.includes(".delete"));if(d){const m=l;m.updatedBy&&m.updatedBy!==pr()&&(h||g?Qe.info(`${m.updatedBy} a modifié le produit "${m.productName}"`,{source:"realtime-other"}):p&&Qe.info(`${m.updatedBy} a supprimé un produit`,{source:"realtime-other"})),h&&e.onProductCreate?e.onProductCreate(m):g&&e.onProductUpdate?e.onProductUpdate(m):p&&e.onProductDelete&&e.onProductDelete(m.$id)}else if(f){const m=l;if(m.createdBy&&m.createdBy!==pr()){const _=m.products?.[0]?.productName||"un produit";h&&m.who!==pr()?Qe.info(`${m.who} a ajouté un achat pour ${_}`,{source:"realtime-other"}):g&&m.who!==pr()?Qe.info(`${m.who} a modifié un achat pour ${_}`,{source:"realtime-other"}):p&&Qe.info(`${m.who} a supprimé un achat pour ${_}`,{source:"realtime-other"})}h&&e.onPurchaseCreate?e.onPurchaseCreate(m):g&&e.onPurchaseUpdate?e.onPurchaseUpdate(m):p&&e.onPurchaseDelete&&e.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],t,a,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),e.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),e.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),e.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),e.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Qo(t){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${t}`);const{databases:e}=await wt(),r=window.AppwriteClient.getConfig(),a=await e.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,t);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${a.name}`),a}catch(e){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${t}:`,e),null}}async function Vo(t,e,r,a){try{console.log(`[Appwrite Interactions] Création du Main document: ${t}`);const{databases:n}=await wt(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,t,{name:a,createdBy:l.$id,isActive:!0,originalDataHash:e,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${t}`)}catch(n){throw console.error("[Appwrite Interactions] Erreur création Main document:",n),n}}async function Cn(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"batchUpdateProducts",data:t};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${t.productIds.length} produits, type: ${t.updateType}`);const n=await Io(()=>e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST"),{operationName:`batchUpdateProducts (${t.productIds.length} products, type: ${t.updateType})`,maxAutoRetries:1,autoRetryDelay:2e3});if(!n)throw new Error("Opération annulée ou échouée après tentatives de mise à jour groupée");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr||n.responseBody}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${i.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,updatedCount:t.productIds.length,updateType:t.updateType,error:r,timestamp:new Date().toISOString()}}}async function Fo(t,e,r,a){return Cn({productIds:t,products:e,updateType:"store",updateData:r,options:a})}async function Ko(t,e,r,a="replace"){return Cn({productIds:t,products:e,updateType:"who",updateData:{names:r},options:{mode:a}})}async function Yo(t,e,r,a={}){try{const{databases:n,config:i}=await wt(),d=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:t,productId:e,productIdType:typeof e,quantities:r,options:a});for(const h of r){const g={products:[e],mainId:t,quantity:h.q,unit:h.u,status:"delivered",notes:a.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:a.store??null,who:d.name,price:null,orderDate:null,deliveryDate:null,createdBy:d.$id,invoiceId:a.invoiceId,invoiceTotal:null},p=await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.purchases,or.unique(),g);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${e}`),f}catch(n){console.error("[Appwrite Interactions] Erreur création validation rapide:",n);const i=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${i}`)}}async function Jo(t,e,r,a,n,i){try{const{databases:o,config:l}=await wt(),h=await(await window.AppwriteClient.getAccount()).get(),g=e||or.unique(),p=h.name;if(!r)throw new Error("invoiceTotal est requis pour une dépense");const m={products:[],mainId:t,quantity:1,unit:"global",status:"expense",notes:n||"",store:a??null,who:p||h.name,price:r,invoiceId:g,invoiceTotal:r,orderDate:null,deliveryDate:null,createdBy:h.$id},_=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.purchases,or.unique(),m);return console.log("[Appwrite Interactions] Dépense créée:",_),_}catch(o){console.error("[Appwrite Interactions] Erreur création dépense:",o);const l=o instanceof Error?o.message:"Erreur inconnue";throw new Error(`Échec de la création de la dépense: ${l}`)}}async function Bc(t){try{const{databases:e,config:r}=await wt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[j.equal("mainId",t),j.equal("status","expense"),j.limit(1e3)]);return console.log(`[Appwrite Interactions] ${a.documents.length} dépenses globales chargées`),a.documents}catch(e){return console.error("[Appwrite Interactions] Erreur chargement dépenses globales:",e),[]}}const _s=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:Cn,batchUpdateStore:Fo,batchUpdateWho:Ko,createExpensePurchase:Jo,createMainDocument:Vo,createManualProduct:qo,createPurchase:Uo,createQuickValidationPurchases:Yo,deletePurchase:Ho,enrichedProductToAppwriteProduct:Ro,loadMainEventData:Qo,loadOrphanPurchases:Bc,loadPurchasesListByIds:Wo,loadUpdatedPurchases:Lc,removeTotalOverride:Bo,subscribeToRealtime:Go,syncProductsWithPurchases:Oo,updateProduct:Er,updateProductBatch:zo,updateProductStock:fn,updateProductStore:jo,updateProductWho:Lo,updatePurchase:Nn,updateTotalOverride:Mn,upsertProduct:Wt},Symbol.toStringTag,{value:"Module"}));async function zc(t){let e;if(e=await fetch(`/evenements/${t}/metadata.json`),!e.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function bs(t){const e=await fetch(`/evenements/${t}/ingredients_aw/index.json`);if(!e.ok)throw new Error(`Impossible de charger les données Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function Uc(t,e){if(!t)return!0;try{return(await zc(e)).hugoContentHash!==t}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function Zo(t,e){const r=qa(t.byDate),a=na(aa([])),{numeric:n,display:i}=sa(r,a);return{$id:`${t.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:t.ingredientHugoUuid,productName:t.ingredientName,productType:t.ingType,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1,nbRecipes:t.nbRecipes,totalNeededRaw:t.totalNeededRaw,totalAssiettes:t.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:e,purchases:[],byDate:t.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:a,missingQuantityArray:n,stockOrTotalPurchases:"-",displayTotalNeeded:ut(r),displayTotalPurchases:"-",displayMissingQuantity:i,totalNeededOverrideParsed:null,displayTotalOverride:""}}function Hc(t,e){return t.map(r=>Zo(r,e))}class Wc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(e){this.dbName=`products-cache-${e}`}async open(){if(!this.db)return new Promise((e,r)=>{const a=indexedDB.open(this.dbName,this.version);a.onerror=()=>r(a.error),a.onsuccess=()=>{this.db=a.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),e()},a.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(this.PRODUCTS_STORE)||(i.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),i.objectStoreNames.contains(this.METADATA_STORE)||(i.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();i.onsuccess=()=>{const o=new Map;i.result.forEach(l=>{o.set(l.$id,l)}),console.log(`[IDBCache] ${o.size} produits chargés`),e(o)},i.onerror=()=>r(i.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();i.onsuccess=()=>{const o=i.result,l={lastSync:null,allDates:[],hugoContentHash:null};o.forEach(d=>{d.key===this.LAST_SYNC_KEY?l.lastSync=d.value:d.key===this.ALL_DATES_KEY?l.allDates=d.value||[]:d.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=d.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),e(l)},i.onerror=()=>r(i.error)})}async saveProducts(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),i=n.objectStore(this.PRODUCTS_STORE);i.clear(),e.forEach(o=>{i.put(o)}),n.oncomplete=()=>{console.log(`[IDBCache] ${e.size} produits sauvegardés`),r()},n.onerror=()=>a(n.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.METADATA_STORE,"readwrite"),i=n.objectStore(this.METADATA_STORE);i.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),i.put({key:this.ALL_DATES_KEY,value:e.allDates}),e.hugoContentHash!==void 0&&i.put({key:this.HUGO_HASH_KEY,value:e.hugoContentHash}),n.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},n.onerror=()=>a(n.error)})}async updateLastSync(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateAllDates(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${e.length} dates`),r()},o.onerror=()=>a(o.error)})}async updateHugoContentHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateLastHugoMenuUpdate(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:e});o.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},o.onerror=()=>a(o.error)})}async upsertProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async deleteProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const a=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");a.objectStore(this.PRODUCTS_STORE).clear(),a.objectStore(this.METADATA_STORE).clear(),a.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),e()},a.onerror=()=>r(a.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Gc(t){const e=new Wc(t);return await e.open(),e}function Qc(t){return!!(t.isMerged||t.totalNeededOverride)}function Vc(t,e){if(!t||t.length!==e.length)return!0;for(let r=0;r<t.length;r++){const a=t[r],n=e[r];if(a.q!==n.q||a.u!==n.u)return!0}return!1}async function Fc(t,e){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},a=new Map;for(const[i,o]of t)a.set(o.productHugoUuid,i);const n=new Set;for(const i of e.ingredients){const o=i.productSemanticKey||`${e.mainGroup_id}_${i.ingredientHugoUuid}`;n.add(o);const l=a.get(i.ingredientHugoUuid),d=l?t.get(l):void 0;if(d){if(Vc(d.totalNeededRaw,i.totalNeededRaw)){const h=Kc(d,i);if(h&&r.overrideConflicts.push(h),d.isMerged){const g=d.displayTotalNeeded;ys(d,i),r.mergedProductsUpdated.push({product:d,oldDisplayTotal:g,newDisplayTotal:d.displayTotalNeeded,currentOverride:d.totalNeededOverrideParsed,semanticKey:o})}else ys(d,i);r.updated.push(o)}t.set(o,d)}else{r.added.push(i);const f=Zo(i,e.mainGroup_id);t.set(f.$id,f)}}for(const[i,o]of t)n.has(i)||(r.removed.push(o),!Qc(o)&&!o.purchases?.length&&!o.stockReel&&!o.who?.length&&t.delete(i));return r.overrideConflicts.length>0&&await Yc(r.overrideConflicts),r.summary=Zc(r),r}function Kc(t,e){if(!t.totalNeededOverride||!t.totalNeededOverrideParsed)return null;const r=qa(e.byDate),a=ut(r),n=t.displayTotalNeeded;return n!==a?{product:t,oldDisplayTotal:n,newDisplayTotal:a,currentOverride:t.totalNeededOverrideParsed,semanticKey:t.$id}:null}async function Yc(t){for(const e of t){const r={...e.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:e.oldDisplayTotal,newTotalDisplay:e.newDisplayTotal};JSON.stringify(r);try{await Mn(e.product.$id,r,!1)}catch(a){console.error(`Erreur lors de la mise à jour de l'override pour ${e.product.$id}:`,a)}}}function ys(t,e){t.byDate=e.byDate,t.nbRecipes=e.nbRecipes,t.totalAssiettes=e.totalAssiettes,t.productType=e.ingType,t.pFrais=e.pFrais||!1,t.pSurgel=e.pSurgel||!1,Jc(t)}function Jc(t){t.totalNeededArray=qa(t.byDate),t.displayTotalNeeded=ut(t.totalNeededArray);const e=na(aa(t.purchases)),{numeric:r,display:a}=sa(t.totalNeededArray,e);t.totalPurchasesArray=e,t.missingQuantityArray=r,t.displayMissingQuantity=a,t.stockOrTotalPurchases=t.purchases.length>0?t.displayTotalPurchases:t.displayTotalNeeded}function Zc(t){const e=[];if((t.added.length>0||t.updated.length>0||t.removed.length>0)&&e.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),t.added.length>0&&e.push(`${t.added.length} nouveau(x) ingrédient(s)`),t.updated.length>0&&e.push(` ${t.updated.length} ingrédient(s) mis à jour`),t.overrideConflicts.length>0&&e.push(`⚠️ ${t.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),t.mergedProductsUpdated.length>0&&e.push(`🔀 ${t.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),t.removed.length>0){const r=t.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length).length;r>0?e.push(`⚠️ ${r} suppression(s) avec données conservées`):e.push(`${t.removed.length} ingrédient(s) supprimé(s)`)}return e.length>0?e.join(", "):"Aucune modification détectée"}class Xc{isMobileQuery=new fc("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return Qe.toasts}get toast(){return Qe}#e=U(Oe({isOpen:!1,conflicts:[]}));get modalOverride(){return s(this.#e)}set modalOverride(e){b(this.#e,e,!0)}#t=U(Oe({isOpen:!1}));get modal(){return s(this.#t)}set modal(e){b(this.#t,e,!0)}#a=U(Oe({isRunning:!1,name:"",progress:0}));get backgroundOperation(){return s(this.#a)}set backgroundOperation(e){b(this.#a,e,!0)}}const Dt=new Xc;class va{#e=U();get data(){return s(this.#e)}set data(e){b(this.#e,e,!0)}#t;#a;constructor(e,r,a){this.data=e,this.#t=r,this.#a=a}update(e){this.data=e}get $id(){return this.data.$id}get productName(){return this.data.productName}get productType(){return this.data.productType}get storeInfo(){return this.data.storeInfo}get who(){return this.data.who}get pFrais(){return this.data.pFrais}get pSurgel(){return this.data.pSurgel}get status(){return this.data.status}get previousNames(){return this.data.previousNames}get purchases(){return this.data.purchases}get totalNeededOverrideParsed(){return this.data.totalNeededOverrideParsed}get displayMissingQuantity(){return this.data.displayMissingQuantity}get missingQuantityArray(){return this.data.missingQuantityArray}get isSynced(){return this.data.isSynced}get byDate(){return this.data.byDate}#o=K(()=>{const e=this.#t(),r=this.#a();let a;if(e.start&&e.start===e.end)a=Mc(this.data,e.start);else if(Do(e,r))a=Ic(this.data,r),a.datesInSelectedRange=a.datesInSelectedRange.filter(n=>this.data.byDate&&this.data.byDate[n]);else if(e.start&&e.end)a=Rc(this.data,e.start,e.end);else return{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedMissingQuantities:"",formattedAvailableQuantities:"En attente",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map};return{quantities:a.requiredQuantities,formattedQuantities:a.requiredQuantitiesFormatted,nbRecipes:a.totalRecipesInRange,totalAssiettes:a.totalPortionsInRange,stockResult:a.stockBalance,availableQuantities:a.availableStockQuantities,missingQuantities:a.missingStockQuantities,formattedMissingQuantities:a.missingStockFormatted,formattedAvailableQuantities:a.availableStockFormatted,hasAvailable:a.hasAvailableStock,hasMissing:a.hasMissingStock,concernedDates:a.datesInSelectedRange,recipesByDate:a.recipesByDate}});get stats(){return s(this.#o)}set stats(e){b(this.#o,e)}}const ws=1e3;class eu{#e=new as;#t=new as;#a=U(null);#o=U(null);#d=U(!1);#c=U(!1);#u=U(null);#l=U(!1);#v=U(!1);#i=U(null);#f=U(null);get currentMainId(){return s(this.#a)}#n=U(Oe([]));#h=U(Oe({start:null,end:null}));get dateRange(){return s(this.#h)}set dateRange(e){b(this.#h,e,!0)}#p=K(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDateInRange(){return s(this.#p)}set hasSingleDateInRange(e){b(this.#p,e)}#m=K(()=>s(this.#n).length===1);get hasSingleDateEvent(){return s(this.#m)}set hasSingleDateEvent(e){b(this.#m,e)}#y=K(()=>{if(s(this.#n).length===0)return!0;const e=this.lastAvailableDate?new Date(this.lastAvailableDate):new Date;return e.setHours(23,59,59,999),e<new Date});get isEventPassed(){return s(this.#y)}set isEventPassed(e){b(this.#y,e)}#x=K(()=>{if(!this.dateRange.start||!this.dateRange.end||this.isEventPassed)return!1;const e=new Date;return e.setHours(0,0,0,0),new Date(this.dateRange.start)<e});get hasPastDatesInRange(){return s(this.#x)}set hasPastDatesInRange(e){b(this.#x,e)}#s=null;#_=null;#b=U(!1);#g=null;#Z=U(!1);#q=U();#S=U(Oe([]));get hasPendingConflicts(){return s(this.#S).length>0}get pendingConflicts(){return s(this.#S)}#r=U(Oe({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#r)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get loading(){return s(this.#c)}get error(){return s(this.#u)}get lastSync(){return s(this.#i)}get syncing(){return s(this.#l)}get availableDates(){return s(this.#n)}setDateRange(e,r){if(!e&&!r){this.dateRange={start:null,end:null};return}if(!e||!r){this.dateRange={start:e||r,end:e||r};return}const a=new Date(e)<=new Date(r)?e:r,n=new Date(e)>=new Date(r)?e:r;this.dateRange={start:a,end:n}}isFullRange(){return Do(this.dateRange,s(this.#n))}initializeDateRange(){const e=Ec(s(this.#n));e&&(this.dateRange=e),console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}selectUpcomingDates(){const e=To(s(this.#n));e&&(this.dateRange=e)}isUpcomingRange(){return Tc(this.dateRange,s(this.#n))}get firstAvailableDate(){return Ao(s(this.#n))}get lastAvailableDate(){return Ba(s(this.#n))}selectFutureDatesOnly(){const e=new Date;e.setDate(e.getDate()+1),e.setHours(0,0,0,0);const r=s(this.#n).filter(a=>new Date(a)>=e);r.length>0&&(this.dateRange={start:r[0],end:r[r.length-1]})}get realtimeConnected(){return s(this.#v)}#k=K(()=>{const e=Array.from(this.#e.values()).map(r=>r.data);return console.log(`[ProductsStore] enrichedProducts recalculated: ${e.length} products`),e});get enrichedProducts(){return s(this.#k)}set enrichedProducts(e){b(this.#k,e)}#E=K(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const e=new Date(this.dateRange.start),r=new Date(this.dateRange.end),a=new Map;for(const[n,i]of this.#e){const o=i.data,l=!o.productHugoUuid;if(!o.byDate&&!l||!Eo(o,s(this.#r)))continue;let f=!1;o.byDate&&(f=Object.keys(o.byDate).some(h=>{const g=new Date(h);return g>=e&&g<=r})),(f||l)&&a.set(n,i)}return a});get filteredProductsMap(){return s(this.#E)}set filteredProductsMap(e){b(this.#E,e)}#A=K(()=>({total:this.#e.size,frais:Array.from(this.#e.values()).filter(e=>e.pFrais).length,surgel:Array.from(this.#e.values()).filter(e=>e.pSurgel).length,merged:Array.from(this.#e.values()).filter(e=>e.data.isMerged).length}));get stats(){return s(this.#A)}set stats(e){b(this.#A,e)}#T=K(()=>{const e=Array.from(this.#e.values()).map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(e)]});get uniqueStores(){return s(this.#T)}set uniqueStores(e){b(this.#T,e)}#D=K(()=>{const e=Array.from(this.#e.values()).flatMap(r=>r.who||[]);return[...new Set(e)]});get uniqueWho(){return s(this.#D)}set uniqueWho(e){b(this.#D,e)}#M=K(()=>{const e=Array.from(this.#e.values()).map(r=>r.productType).filter(Boolean);return[...new Set(e)]});get uniqueProductTypes(){return s(this.#M)}set uniqueProductTypes(e){b(this.#M,e)}#N=K(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((o,l)=>o.$id.localeCompare(l.$id));if(s(this.#r).groupBy==="none")return{"":r};const a=Object.groupBy(r,o=>s(this.#r).groupBy==="store"?o.storeInfo?.storeName||"Non défini":o.productType||"Non défini"),n=Object.keys(a).sort((o,l)=>o===""?1:l===""?-1:o.localeCompare(l)),i={};return n.forEach(o=>{i[o]=a[o]}),i});get groupedFilteredProducts(){return s(this.#N)}set groupedFilteredProducts(e){b(this.#N,e)}async initialize(e,r){if(!e?.trim())throw new Error("mainId invalide fourni");if(s(this.#d)&&s(this.#a)===e){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${e}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${e}`),b(this.#a,e,!0),b(this.#o,r,!0);try{this.#s=await Gc(e)}catch(a){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",a),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#u,null);try{if(await this.#j(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let n;n=await bs(r),console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),b(this.#f,n.hugoContentHash,!0),Hc(n.ingredients,e).forEach(l=>{this.#e.set(l.$id,new va(l,()=>this.dateRange,()=>s(this.#n)))}),b(this.#n,[...n.allDates],!0),await Qo(e)||await Vo(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#C()}this.initializeDateRange(),await this.#L(),await this.#J(),b(this.#d,!0);const a=this.#Y();this.#_=Go(e,a),this.#H(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#I(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(a){const n=a instanceof Error?a.message:"Erreur lors de l'initialisation";throw b(this.#u,n,!0),console.error("[ProductsStore]",n,a),a}}async#j(){if(this.#s)try{const e=await this.#s.loadProducts();e.forEach((a,n)=>{a.status==="isSyncing"&&(a.status="active"),this.#e.set(n,new va(a,()=>this.dateRange,()=>s(this.#n)))});const r=await this.#s.loadMetadata();b(this.#i,r.lastSync,!0),b(this.#n,[...r.allDates],!0),b(this.#f,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${e.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(e){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",e)}}async#L(){if(s(this.#a)){b(this.#l,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#a)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#i)}`);const e=await Oo(s(this.#a),{lastSync:s(this.#i),limit:ws});if(console.log(`[ProductsStore] ${e.length} produits récupérés depuis Appwrite`),e.forEach(r=>{const a=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!a}, who=${r.who}, store=${r.store}`);const n=this.#R(r,a?.data);n.isSynced=!0,a?a.update(n):this.#e.set(r.$id,new va(n,()=>this.dateRange,()=>s(this.#n)))}),s(this.#i)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#i)}`);const{loadUpdatedPurchases:r}=await vn(async()=>{const{loadUpdatedPurchases:n}=await Promise.resolve().then(()=>_s);return{loadUpdatedPurchases:n}},void 0),a=await r(s(this.#a),s(this.#i),ws);console.log(`[ProductsStore] ${a.length} purchases modifiés récupérés`),a.forEach(n=>{if(n.status==="expense")this.#t.set(n.$id,n);else if(n.products?.length){const i=n.products.map(o=>typeof o=="string"?o:o.$id);this.#P(i,n)}})}this.#z(),await this.#B(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(e){throw console.error("[ProductsStore] Erreur lors du sync:",e),e}finally{b(this.#l,!1)}}}async#B(){if(this.#s)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Tr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#s.saveProducts(e),await this.#s.saveMetadata({lastSync:s(this.#i),allDates:[...s(this.#n)],hugoContentHash:s(this.#f)}),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#X(){if(this.#s)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Tr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#s.saveProducts(e),await this.#s.updateLastSync(s(this.#i)),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#C(){if(this.#s)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Tr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#s.saveProducts(e),await this.#s.updateLastSync(s(this.#i)),await this.#s.updateAllDates([...s(this.#n)]),await this.#s.updateHugoContentHash(s(this.#f)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(e){console.error("[ProductsStore] Erreur persistance cache complet:",e)}}async#$(e){if(!(!this.#s||e.length===0))try{const r=e.map(a=>this.#e.get(a)?.data).filter(a=>a!=null).map(a=>{const n=Tr(a);return n.status==="isSyncing"&&(n.status="active"),this.#s.upsertProduct(n)});r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#z(){b(this.#i,new Date().toISOString(),!0)}async#I(){if(!s(this.#o)||s(this.#c))return!1;try{const e=await Uc(s(this.#f),s(this.#o));return e&&!s(this.#b)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${s(this.#o)}, analyse approfondie en cours...`),b(this.#b,!0),await this.#U()),b(this.#q,new Date,!0),e}catch(e){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",e),!1}}async#U(){if(!s(this.#o)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const e=await bs(s(this.#o)),r=new Map;this.#e.forEach((n,i)=>r.set(i,n.data));const a=await Fc(r,e);if(console.log(`[ProductsStore  - hugo change] ${a.summary}`),a.overrideConflicts.length>0&&(b(this.#S,a.overrideConflicts,!0),Qe.error(`${a.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>Dt.modalOverride.isOpen=!0}})),a.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${a.mergedProductsUpdated.length} produits fusionnés modifiés`),a.removed.length>0){const n=a.removed.filter(i=>i.purchases?.length||i.stockReel||i.who?.length);n.length>0&&console.log(`[ProductsStore] ℹ️ ${n.length} ingrédients supprimés conservés (données utilisateur)`)}b(this.#n,[...e.allDates],!0),b(this.#f,e.hugoContentHash,!0),this.initializeDateRange(),await this.#C(),(a.added.length||a.updated.length||a.removed.length)&&Qe.success(a.summary),b(this.#b,!1)}catch(e){console.error("[ProductsStore] Erreur sync Hugo:",e),Qe.error("Erreur lors de la mise à jour Hugo")}}#H(){this.#g&&clearInterval(this.#g),this.#g=setInterval(async()=>{await this.#I()},6e4)}#W(){this.#g&&(clearInterval(this.#g),this.#g=null)}#R(e,r){return r?da(e,r):xc(e)}#ee(e){e.length&&(e.forEach(r=>this.#w(r)),console.log(`[ProductsStore] ${e.length} produits upserted`))}#w(e){const r=this.#e.get(e.$id),a=this.#R(e,r?.data);r?r.update(a):this.#e.set(e.$id,new va(a,()=>this.dateRange,()=>s(this.#n)))}#G(e){this.#e.delete(e)}async#Q(e){if(!e.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",e.$id),[];const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#K(r,e),r}async#V(e){if(e.products?.length){const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#P(r,e),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Wo([e.$id]);if(r?.products?.length){const a=r.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(a,r),a}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#F(e){const r=Array.from(this.#e.values()).map(a=>a.data).filter(a=>a.purchases?.some(n=>n.$id===e));return r.forEach(a=>{this.#w(a)}),r.map(a=>a.$id)}#K(e,r){const a=ns(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,d=l.purchases||[];if(!d.some(f=>f.$id===a.$id)){const f=da({...l,purchases:[...d,a],status:"active"},l);n.push(f)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#P(e,r){const a=ns(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,d=l.purchases||[],f=d.findIndex(h=>h.$id===a.$id);if(f>=0){const h=[...d];h[f]=a;const g=da({...l,purchases:h,status:"active"},l);n.push(g)}else{const h=da({...l,purchases:[...d,r],status:"active"},l);n.push(h)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#Y(){return{onProductCreate:e=>{if(this.#w(e),this.#s){const r=this.#e.get(e.$id);r&&this.#s.upsertProduct(Tr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductUpdate:e=>{if(this.#w(e),this.#s){const r=this.#e.get(e.$id);r&&this.#s.upsertProduct(Tr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductDelete:e=>{this.#G(e),this.#s&&this.#s.deleteProduct(e).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}const r=await this.#Q(e);await this.#$(r)},onPurchaseUpdate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}this.#t.has(e.$id)&&this.#t.delete(e.$id);const r=await this.#V(e);await this.#$(r)},onPurchaseDelete:async e=>{if(this.#t.has(e)){this.#t.delete(e);return}const r=await this.#F(e);await this.#$(r)},onConnect:()=>{b(this.#v,!0)},onDisconnect:()=>{b(this.#v,!1)},onError:e=>{console.error("[ProductsStore] Erreur realtime:",e)}}}setSearchQuery=bc(e=>{s(this.#r).searchQuery=e},()=>500);toggleProductType(e){const r=s(this.#r).selectedProductTypes.indexOf(e);r>-1?s(this.#r).selectedProductTypes.splice(r,1):s(this.#r).selectedProductTypes.push(e)}toggleTemperature(e){const r=s(this.#r).selectedTemperatures.indexOf(e);r>-1?s(this.#r).selectedTemperatures.splice(r,1):s(this.#r).selectedTemperatures.push(e)}clearTypeAndTemperatureFilters(){s(this.#r).selectedProductTypes=[],s(this.#r).selectedTemperatures=[]}setGroupBy(e){s(this.#r).groupBy=e}toggleStore(e){const r=s(this.#r).selectedStores.indexOf(e);r>-1?s(this.#r).selectedStores.splice(r,1):s(this.#r).selectedStores.push(e)}toggleWho(e){const r=s(this.#r).selectedWho.indexOf(e);r>-1?s(this.#r).selectedWho.splice(r,1):s(this.#r).selectedWho.push(e)}clearStoreFilters(){s(this.#r).selectedStores=[]}clearWhoFilters(){s(this.#r).selectedWho=[]}handleSort(e){s(this.#r).sortColumn===e?s(this.#r).sortDirection=s(this.#r).sortDirection==="asc"?"desc":"asc":(s(this.#r).sortColumn=e,s(this.#r).sortDirection="asc")}clearFilters(){b(this.#r,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(e){return s(this.#r).sortColumn?[...e].sort((r,a)=>{let n=r[s(this.#r).sortColumn],i=a[s(this.#r).sortColumn];return s(this.#r).sortColumn==="totalNeededConsolidated"?(n=parseFloat(n)||0,i=parseFloat(i)||0):s(this.#r).sortColumn==="purchases"&&(n=r.purchases?.length||0,i=a.purchases?.length||0),n<i?s(this.#r).sortDirection==="asc"?-1:1:n>i?s(this.#r).sortDirection==="asc"?1:-1:0}):e}getEnrichedProductById(e){return this.#e.get(e)?.data??null}getProductModelById(e){return this.#e.get(e)??null}hasConversions(e){const r=this.#e.get(e)?.data;return r?.byDate?Po(r.byDate):!1}async forceReload(e,r){await this.clearCache(),await this.initialize(e,r)}async clearCache(){this.#e.clear(),b(this.#n,[],!0),b(this.#i,null),this.#s&&await this.#s.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(e,r){const a=r?"isSyncing":"active";e.forEach(n=>{const i=this.#e.get(n);if(i){const o={...i.data,status:a};i.update(o)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${e.length} produits → ${a}`)}clearSyncStatus(){const e=[];for(const[r,a]of this.#e)a.status==="isSyncing"&&e.push(r);e.length>0&&(this.setSyncStatus(e,!1),console.log(`[ProductsStore] Nettoyage de ${e.length} produits en statut "isSyncing"`))}destroy(){this.#_?.(),this.#_=null,this.#W(),this.#s&&(this.#s.close(),this.#s=null),console.log("[ProductsStore] Ressources nettoyées")}async#J(){if(s(this.#a))try{const{loadOrphanPurchases:e}=await vn(async()=>{const{loadOrphanPurchases:a}=await Promise.resolve().then(()=>_s);return{loadOrphanPurchases:a}},void 0),r=await e(s(this.#a));r.forEach(a=>{this.#t.set(a.$id,a)}),console.log(`[ProductsStore] ${r.length} dépenses globales chargées`)}catch(e){console.error("[ProductsStore] Erreur chargement dépenses globales:",e)}}#O=K(()=>{let e=0;const r={},a={},n=[];for(const i of this.#t.values()){const o=i.invoiceTotal||i.price||0;e+=o;const l=i.store||"Non défini";r[l]=(r[l]||0)+o;const d=i.who||"Non défini";a[d]=(a[d]||0)+o,n.push(i)}for(const i of this.#e.values()){const o=i.data;if(o.purchases&&o.purchases.length>0){for(const l of o.purchases)if(l.price){e+=l.price;const d=l.store||"Non défini";r[d]=(r[d]||0)+l.price;const f=l.who||"Non défini";a[f]=(a[f]||0)+l.price;const h={...l,_productName:o.productName};n.push(h)}}}return n.sort((i,o)=>{const l=new Date(i.orderDate||i.$createdAt).getTime();return new Date(o.orderDate||o.$createdAt).getTime()-l}),{totalGlobal:e,byStore:r,byWho:a,allPurchases:n}});get financialStats(){return s(this.#O)}set financialStats(e){b(this.#O,e)}}const V=new eu;function xs(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const e=new URLSearchParams(window.location.search).get("listId");if(!e||!e.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return e.trim()}function tu(t){const e=t.substring(0,4),r=t.slice(-10);return`${e}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ru={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var au=Rl("<svg><!><!></svg>");function $e(t,e){J(e,!0);const r=fe(e,"color",3,"currentColor"),a=fe(e,"size",3,24),n=fe(e,"strokeWidth",3,2),i=fe(e,"absoluteStrokeWidth",3,!1),o=fe(e,"iconNode",19,()=>[]),l=_e(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var d=au();un(d,g=>({...ru,...l,width:a(),height:a(),stroke:r(),"stroke-width":g,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(n())*24/Number(a()):n()]);var f=c(d);nt(f,17,o,xr,(g,p)=>{var m=K(()=>ba(s(p),2));let _=()=>s(m)[0],w=()=>s(m)[1];var P=Y(),S=C(P);Ul(S,_,!0,(D,$)=>{un(D,()=>({...w()}))}),v(g,P)});var h=u(f);he(h,()=>e.children??oe),v(t,d),Z()}function Xo(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];$e(t,Se({name:"archive"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ei(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];$e(t,Se({name:"badge-euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function nu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];$e(t,Se({name:"bean"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function su(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];$e(t,Se({name:"beef"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ou(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];$e(t,Se({name:"candy-cane"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function iu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];$e(t,Se({name:"carrot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function jr(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20 6 9 17l-5-5"}]];$e(t,Se({name:"check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function lu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];$e(t,Se({name:"chef-hat"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ti(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];$e(t,Se({name:"chevron-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function cu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];$e(t,Se({name:"circle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function uu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];$e(t,Se({name:"circle-arrow-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function du(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];$e(t,Se({name:"circle-arrow-right"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Ss(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];$e(t,Se({name:"circle-check-big"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function vu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];$e(t,Se({name:"circle-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function $s(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];$e(t,Se({name:"circle-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function fu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];$e(t,Se({name:"clipboard-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Ps(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];$e(t,Se({name:"clipboard-pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function en(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];$e(t,Se({name:"clock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function hu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];$e(t,Se({name:"cloud"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function za(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];$e(t,Se({name:"cooking-pot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function pu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];$e(t,Se({name:"egg"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function gu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];$e(t,Se({name:"euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function fa(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];$e(t,Se({name:"funnel-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ri(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];$e(t,Se({name:"funnel"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ai(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];$e(t,Se({name:"history"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function mu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];$e(t,Se({name:"info"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function _u(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];$e(t,Se({name:"layout-list"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function bu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];$e(t,Se({name:"leaf"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function yu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];$e(t,Se({name:"list-todo"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ni(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];$e(t,Se({name:"loader-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function wu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];$e(t,Se({name:"lock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function xu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];$e(t,Se({name:"log-in"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Su(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];$e(t,Se({name:"message-circle-more"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function $u(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];$e(t,Se({name:"message-circle-question-mark"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function si(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];$e(t,Se({name:"message-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function oi(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];$e(t,Se({name:"moon"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Pu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];$e(t,Se({name:"package-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ku(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];$e(t,Se({name:"package-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Ua(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];$e(t,Se({name:"package"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Eu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];$e(t,Se({name:"pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Au(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];$e(t,Se({name:"pencil-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function In(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];$e(t,Se({name:"plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Tu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];$e(t,Se({name:"refresh-cw"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Du(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];$e(t,Se({name:"refrigerator"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Mu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];$e(t,Se({name:"save"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Nu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];$e(t,Se({name:"search"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ii(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];$e(t,Se({name:"shopping-basket"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function yr(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];$e(t,Se({name:"shopping-cart"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Rn(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];$e(t,Se({name:"snowflake"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Xr(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];$e(t,Se({name:"square-pen"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function gr(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];$e(t,Se({name:"store"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function li(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];$e(t,Se({name:"sun"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Cu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];$e(t,Se({name:"tag"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ci(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];$e(t,Se({name:"thermometer"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function oa(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];$e(t,Se({name:"triangle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ui(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];$e(t,Se({name:"user-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function On(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];$e(t,Se({name:"user"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function _a(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];$e(t,Se({name:"users"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function di(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];$e(t,Se({name:"utensils"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function It(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];$e(t,Se({name:"x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);he(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Iu(t,e){const r=t.reduce((n,i)=>{const o=i.isSynced?0:1,l=i.missingQuantities.length;return n+o+l},0),a=e.invoiceTotal?1:0;return r+a}async function Ru(t,e){const r=t.filter(d=>!d.isSynced).map(d=>({productId:d.productId,productData:d.productData}));let a=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");a=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(d){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",d)}const n=e.purchaseStatus||"delivered";let i=e.purchaseDeliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString());const o=t.flatMap(d=>d.missingQuantities.map(f=>({productId:d.productId,quantity:f.q,unit:f.u,status:n,notes:e.notes||"",store:e.store||"",who:e.who||void 0,price:void 0,orderDate:null,deliveryDate:i,createdBy:a})));return{mainId:t[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:o},invoiceData:e}}async function Ou(t,e,r){if(!e?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};e.forEach(p=>{p.productData&&(p.productData.mainId=t)});const a=Iu(e,r);console.log(`[Appwrite Interactions] Achat groupé: ${e.length} produits, ${a} opérations totales`);const n=100,i=[];if(a<=n)i.push(e);else{let p=[],m=0;for(const _ of e){const w=(_.isSynced?0:1)+_.missingQuantities.length;m+w>n?(p.length>0&&i.push(p),p=[_],m=w):(p.push(_),m+=w)}p.length>0&&i.push(p)}console.log(`[Appwrite Interactions] Découpage en ${i.length} lots pour respecter la limite de 100 opérations`);const o=[];let l=0,d=0,f=0;for(let p=0;p<i.length;p++){const m=i[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${i.length} (${m.length} produits)`);try{const _=await Ru(m,r),w=await Io(()=>qu(_),{operationName:`Lot ${p+1}/${i.length}`,maxAutoRetries:1,autoRetryDelay:2e3});if(!w)throw new Error("Opération annulée ou échouée après tentatives");if(o.push(w),w.success)l+=w.productsCreated,d+=w.purchasesCreated,f+=w.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${w.error}`);break}}catch(_){const w=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,_),o.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:w,timestamp:new Date().toISOString()});break}}const h=o.every(p=>p.success),g=o.some(p=>!p.success);return{success:h,results:o,totalProductsCreated:l,totalPurchasesCreated:d,totalExpensesCreated:f,error:g?"Un ou plusieurs lots ont échoué":void 0}}async function qu(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"createGroupPurchaseWithSync",data:t};console.log(`[Appwrite Interactions] Exécution du lot: ${t.batchData.productsToCreate.length} produits à créer, ${t.batchData.purchasesToCreate.length} achats à créer`);const n=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${i.productsCreated} produits créés, ${i.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur exécution lot:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:t.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var ju=(t,e,r)=>e(s(r).id),Lu=y("<span> </span>"),Bu=y('<button><!> <span class="max-w-32 truncate"> </span> <!> <!></button>'),zu=y('<span class="flex items-center gap-1"><!> </span>'),Uu=y('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Hu=y('<div class="flex flex-wrap gap-2"></div> <!>',1);function ea(t,e){J(e,!0);let r=fe(e,"badgeSize",3,"btn-lg"),a=fe(e,"color",3,"primary"),n=fe(e,"badgeStyle",3,""),i=fe(e,"onToggleItem",3,()=>{}),o=fe(e,"showStats",3,!1),l=fe(e,"showIcon",3,!0),d=U(Oe({}));Bt(()=>{const P={};e.items.forEach(S=>{P[S.id]=S.selected??!0}),b(d,P,!0)});function f(P){s(d)[P]=!s(d)[P],i()(P)}const h=K(()=>Object.values(s(d)).filter(Boolean).length),g=K(()=>Object.values(s(d)).filter(P=>!P).length);var p=Hu(),m=C(p);nt(m,21,()=>e.items,P=>P.id,(P,S)=>{const D=K(()=>s(d)[s(S).id]);var $=Bu();$.__click=[ju,f,S];var A=c($);{var E=z=>{var ce=Y(),ye=C(ce);br(ye,()=>s(S).icon,(we,q)=>{q(we,{class:"h-3 w-3",get title(){return s(S).title}})}),v(z,ce)};k(A,z=>{s(S).icon&&z(E)})}var T=u(A,2),R=c(T),x=u(T,2);{var W=z=>{var ce=Lu(),ye=c(ce);I(()=>{Me(ce,1,`badge badge-sm badge-${a()??""}`),N(ye,s(S).badge)}),v(z,ce)};k(x,z=>{s(S).badge&&z(W)})}var X=u(x,2);{var L=z=>{var ce=Y(),ye=C(ce);{var we=le=>{jr(le,{size:16})},q=le=>{In(le,{size:16})};k(ye,le=>{s(D)?le(we):le(q,!1)})}v(z,ce)};k(X,z=>{l()&&z(L)})}I(()=>{Me($,1,`btn ${r()??""} btn-${a()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(D)?`${n()} hover:line-through `:"btn-dash hover:border-solid "}`),sr($,"title",s(D)?"Retirer de la liste":"Réajouter à la liste"),N(R,s(S).label)}),v(P,$)});var _=u(m,2);{var w=P=>{var S=Uu(),D=c(S),$=c(D),A=c($);jr(A,{class:"text-success h-3 w-3"});var E=u(A),T=u($,2);{var R=X=>{var L=zu(),z=c(L);It(z,{class:"text-error h-3 w-3"});var ce=u(z);I(()=>N(ce,` ${s(g)??""} retirés`)),v(X,L)};k(T,X=>{s(g)>0&&X(R)})}var x=u(D,2),W=c(x);I(()=>{N(E,` ${s(h)??""} actifs`),N(W,`Total: ${e.items.length??""} items`)}),v(P,S)};k(_,P=>{o()&&P(w)})}v(t,p),Z()}Ye(["click"]);function Wu(t,e){b(e,!s(e))}var Gu=y('<span class="text-base-content font-semibold"> </span>'),Qu=y('<div class="text-base-content/80 flex-1"> </div>'),Vu=y('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Fu=y('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Ku=y('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function vi(t,e){let r=fe(e,"icon",3,mu),a=fe(e,"class",3,""),n=fe(e,"initiallyOpen",3,!1),i=r(),o=U(Oe(n())),l=Oe(e.children);var d=Ku(),f=c(d);f.__click=[Wu,o];var h=c(f),g=c(h);i(g,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=u(g,2);{var m=A=>{var E=Gu(),T=c(E);I(()=>N(T,e.title)),v(A,E)};k(p,A=>{e.title&&A(m)})}var _=u(h,2);{var w=A=>{var E=Qu(),T=c(E);I(()=>N(T,e.contentVisible)),v(A,E)};k(_,A=>{e.contentVisible&&A(w)})}var P=u(_,2);{var S=A=>{var E=Vu(),T=c(E),R=c(T);{var x=L=>{var z=bt("en savoir plus");v(L,z)},W=L=>{var z=bt("masquer");v(L,z)};k(R,L=>{s(o)?L(W,!1):L(x)})}var X=u(T,2);{let L=K(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(o)?"rotate-180":""}`);ti(X,{get class(){return s(L)}})}v(A,E)};k(P,A=>{l&&A(S)})}var D=u(f,2);{var $=A=>{var E=Fu(),T=c(E),R=c(T);he(R,()=>e.children??oe),I(()=>Me(E,1,`overflow-hidden transition-all duration-200 ${s(o)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),v(A,E)};k(D,A=>{l&&A($)})}I(()=>{Me(d,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${a()}`),mo(d,e.style),Me(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),sr(f,"aria-expanded",s(o))}),v(t,d)}Ye(["click"]);var Yu=y('<div class="mb-1 text-xs opacity-70"> </div>'),Ju=(t,e,r)=>e(s(r)),Zu=y("<button><!> </button>"),Xu=y('<div><!> <div class="ms-1 flex flex-wrap items-center gap-1"><!> <!></div></div>');function qn(t,e){J(e,!0);let r=fe(e,"maxSuggestions",3,8),a=fe(e,"buttonSize",3,"btn-xs"),n=fe(e,"buttonVariant",3,"btn-soft"),i=fe(e,"disabled",3,!1);const o=K(()=>e.suggestions.slice(0,r()));function l(g){!i()&&!g.disabled&&e.onSuggestionClick(g)}var d=Y(),f=C(d);{var h=g=>{var p=Xu(),m=c(p);{var _=D=>{var $=Yu(),A=c($);I(()=>N(A,e.title)),v(D,$)};k(m,D=>{e.title&&D(_)})}var w=u(m,2),P=c(w);Au(P,{class:"text-base-content/70 mr-1",size:14});var S=u(P,2);nt(S,17,()=>s(o),D=>D.id,(D,$)=>{var A=Zu();A.__click=[Ju,l,$];var E=c(A);{var T=x=>{var W=Y(),X=C(W);br(X,()=>s($).icon,(L,z)=>{z(L,{class:"h-3 w-3"})}),v(x,W)};k(E,x=>{s($).icon&&x(T)})}var R=u(E);I(()=>{Me(A,1,`btn btn-primary ${a()??""} ${n()??""}`),A.disabled=i()||s($).disabled,sr(A,"title",s($).disabled?"Déjà sélectionné":s($).label),N(R,` ${s($).label??""}`)}),v(D,A)}),v(g,p)};k(f,g=>{s(o).length>0&&g(h)})}v(t,d),Z()}Ye(["click"]);const ed=[{value:"kg",label:"kg"},{value:"gr.",label:"gr."},{value:"l.",label:"l."},{value:"ml",label:"ml"},{value:"unité",label:"unité·s"},{value:"bottes",label:"botte·s"}];var td=y("<option> </option>"),rd=y('<fieldset class="fieldset"><div class="flex gap-2"><label class="input w-32"><!> <input type="number" step="1" min="0" placeholder="Quantité" required/></label> <select class="custom-select input w-28" required><option disabled selected>Unité</option><!></select></div></fieldset>');function Ha(t,e){J(e,!0);let r=fe(e,"quantity",15),a=fe(e,"unit",15),n=fe(e,"disabled",3,!1);var i=rd(),o=c(i),l=c(o),d=c(l);Ua(d,{class:"h-4 w-4 opacity-50"});var f=u(d,2),h=u(l,2),g=c(h);g.value=g.__value="";var p=u(g);nt(p,17,()=>ed,xr,(m,_)=>{let w=()=>s(_).value,P=()=>s(_).label;var S=td(),D=c(S),$={};I(()=>{N(D,P()),$!==($=w())&&(S.value=(S.__value=w())??"")}),v(m,S)}),I(()=>{f.disabled=n(),h.disabled=n()}),Ke(f,r),$a(h,a),v(t,i),Z()}var ad=y('<div><label class="input w-72"><!> <input/></label> <!></div>');function Hr(t,e){J(e,!0);let r=fe(e,"value",15),a=fe(e,"suggestions",19,()=>[]),n=fe(e,"disabled",3,!1),i=fe(e,"flexCol",3,!1),o=_e(e,["$$slots","$$events","$$legacy","value","suggestions","disabled","flexCol"]);const l=K(()=>a().map(_=>({id:_,label:_,disabled:_===r()})));var d=ad(),f=c(d),h=c(f);gr(h,{class:"h-4 w-4 opacity-50"});var g=u(h,2);un(g,()=>({type:"text",placeholder:"Magasin",maxlength:"50",disabled:n(),...o}),void 0,void 0,void 0,!0);var p=u(f,2);{var m=_=>{qn(_,{get suggestions(){return s(l)},onSuggestionClick:w=>r(w.label),buttonSize:"btn-xs"})};k(p,_=>{a().length>0&&_(m)})}I(()=>Me(d,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`)),Ke(g,r),v(t,d),Z()}var nd=y('<div><label class="input w-72"><!> <input type="text" placeholder="Qui" maxlength="25"/></label> <!></div>');function ia(t,e){J(e,!0);let r=fe(e,"value",15),a=fe(e,"suggestions",19,()=>[]),n=fe(e,"disabled",3,!1),i=fe(e,"flexCol",3,!1);const o=K(()=>a().map(m=>({id:m,label:m,disabled:m===r()})));var l=nd(),d=c(l),f=c(d);On(f,{class:"h-4 w-4 opacity-50"});var h=u(f,2);h.__keydown=function(...m){e.onkeydown?.apply(this,m)};var g=u(d,2);{var p=m=>{qn(m,{get suggestions(){return s(o)},onSuggestionClick:_=>r(_.label),buttonSize:"btn-xs"})};k(g,m=>{a().length>0&&m(p)})}I(()=>{Me(l,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`),h.disabled=n()}),Ke(h,r),v(t,l),Z()}Ye(["keydown"]);var sd=y('<textarea class="textarea w-full text-sm" placeholder="Commentaire (optionnel)" rows="2" maxlength="250"></textarea>');function Wr(t,e){J(e,!0);let r=fe(e,"value",15),a=fe(e,"disabled",3,!1);var n=sd();I(()=>n.disabled=a()),Ke(n,r),v(t,n),Z()}var od=y('<label class="input w-28"><!> <input type="number" step="1" min="0" placeholder="0.00"/></label>');function jn(t,e){J(e,!0);let r=fe(e,"value",15),a=fe(e,"disabled",3,!1);var n=od(),i=c(n);gu(i,{class:"h-4 w-4 opacity-50"});var o=u(i,2);I(()=>o.disabled=a()),Ke(o,r),v(t,n),Z()}var id=y('<label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label>'),ld=y(`<div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Acheté</option><option>Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div>`);function fi(t,e){J(e,!0);let r=fe(e,"status",15),a=fe(e,"deliveryDate",15),n=fe(e,"disabled",3,!1);var i=ld(),o=c(i),l=c(o),d=c(l);d.value=d.__value="delivered";var f=u(d);f.value=f.__value="ordered";var h=u(l,2),g=u(o,2);{var p=m=>{var _=id(),w=u(c(_),2);I(()=>w.disabled=n()),Ke(w,a),v(m,_)};k(g,m=>{r()==="ordered"&&m(p)})}I(()=>{l.disabled=n(),Me(h,1,`label ${r()==="delivered"?"":"hidden"}`)}),$a(l,r),v(t,i),Z()}function ks(t,e,r){s(e)||r.onClose()}var cd=y('<div class="alert alert-error"><!> <span> </span></div>'),ud=y('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),dd=y(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes <strong>pour la période sélectionnée</strong>, c'est à dire le besoin total pour chaque produit sur cette
            période moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),vd=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),fd=y("<!> ",1),hd=y(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="mb-4 flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><!> <!></div> <!> <!> <div><!></div></div> <div class="mb-4"><h4 class=" font-medium">Produits concernés</h4> <div class="text-base-content/70 mb-4">les quantités manquantes du <span class="badge badge-info badge-sm"> </span> au <span class="badge badge-info badge-sm"> </span> pour les produits suivant seront déclarés "acheté"</div> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function pd(t,e){J(e,!0);let r=U(!1),a=U(null),n=U(null),i=Oe({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),o=U(Oe(new Set));Bt(()=>{b(o,new Set(e.products.map(H=>H.$id)),!0)});const l=K(()=>e.products.filter(H=>s(o).has(H.$id))),d=K(()=>s(l).length!==0),f=K(()=>{const H=V.dateRange;let Q="";return H?.start&&H?.end&&(H.start===H.end?Q=` - ${fr(H.start)}`:Q=` - Du ${fr(H.start)} au ${fr(H.end)}`),`Achat groupé (${s(l).length} produits sélectionnés)${Q}`});async function h(){if(!s(d)||s(r))return;b(r,!0),b(a,null),b(n,null);const H=`FACTURE_${Date.now()}`,Q=s(l).map(ve=>ve.$id);V.setSyncStatus(Q,!0),Dt.backgroundOperation={isRunning:!0,name:`Achat groupé (${s(l).length} produits)`,progress:0};const se=[];for(const ve of s(l)){const G=(V.getProductModelById(ve.$id)?.stats.missingQuantities||[]).filter(be=>be.q<0).map(be=>({...be,q:Math.abs(be.q)}));se.push({productId:ve.$id,isSynced:ve.isSynced,productData:ve,missingQuantities:G})}const ke={invoiceId:H,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(l).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${se.length} produits...`),e.onClose();try{const ve=await Ou(V.currentMainId,se,ke);if(ve.success)console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${ve.totalProductsCreated} produits synchronisés, ${ve.totalPurchasesCreated} achats créés, ${ve.totalExpensesCreated} dépenses globales`),Qe.success(`Achat groupé réussi ! ${ve.totalPurchasesCreated} achats créés.`),e.onSuccess?.();else throw new Error(ve.error||"Erreur lors de la création de l'achat groupé")}catch(ve){const qe=ve instanceof Error?ve.message:"Erreur inconnue";console.error("[GroupPurchaseModal] Erreur création achat groupé:",ve),Qe.error(`Erreur achat groupé: ${qe}`),V.clearSyncStatus()}finally{b(r,!1),Dt.backgroundOperation={isRunning:!1,name:"",progress:0}}}function g(H){const Q=new Set(s(o));Q.has(H)?Q.delete(H):Q.add(H),b(o,Q,!0)}const p=K(()=>e.products.map(H=>{const Q=V.getProductModelById(H.$id);return{id:H.$id,label:H.productName,title:`${H.productName} - Manque: ${Q?.stats.formattedMissingQuantities||"-"}`,badge:Q?.stats.formattedMissingQuantities||"-"}}));var m=hd(),_=c(m),w=c(_),P=c(w),S=c(P);yr(S,{class:"h-5 w-5"});var D=u(S),$=u(P,2);$.__click=[ks,r,e];var A=c($);It(A,{class:"h-4 w-4"});var E=u(w,2),T=c(E);{var R=H=>{var Q=cd(),se=c(Q);oa(se,{class:"h-4 w-4"});var ke=u(se,2),ve=c(ke);I(()=>N(ve,s(a))),v(H,Q)};k(T,H=>{s(a)&&H(R)})}var x=u(T,2);{var W=H=>{var Q=ud(),se=c(Q);jr(se,{class:"h-4 w-4"});var ke=u(se,2),ve=c(ke),qe=u(ve);{var G=Ue=>{var Je=bt("+ 1 dépense globale");v(Ue,Je)};k(qe,Ue=>{s(n).expense&&Ue(G)})}var be=u(qe,2);{var We=Ue=>{var Je=bt();I(()=>N(Je,`(traité en ${s(n).batches??""} lots)`)),v(Ue,Je)};k(be,Ue=>{s(n).batches&&s(n).batches>1&&Ue(We)})}I(()=>N(ve,`Achat groupé créé avec succès ! ${s(n).purchases??""} produit(s) validés `)),v(H,Q)};k(x,H=>{s(n)&&H(W)})}var X=u(x,2),L=c(X);vi(L,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit sur la période sélectionnée.",class:"bg-base-200",children:(H,Q)=>{var se=dd();v(H,se)},$$slots:{default:!0}});var z=u(X,2),ce=u(c(z),2),ye=c(ce);Hr(ye,{get suggestions(){return V.uniqueStores},get disabled(){return s(r)},get value(){return i.store},set value(H){i.store=H}});var we=u(ye,2);ia(we,{get suggestions(){return V.uniqueWho},get disabled(){return s(r)},get value(){return i.who},set value(H){i.who=H}});var q=u(ce,2);jn(q,{get disabled(){return s(r)},get value(){return i.expense},set value(H){i.expense=H}});var le=u(q,2);fi(le,{get disabled(){return s(r)},get status(){return i.status},set status(H){i.status=H},get deliveryDate(){return i.deliveryDate},set deliveryDate(H){i.deliveryDate=H}});var ge=u(le,2),ne=c(ge);Wr(ne,{get disabled(){return s(r)},get value(){return i.notes},set value(H){i.notes=H}});var te=u(z,2),me=u(c(te),2),xe=u(c(me)),F=c(xe),ee=u(xe,2),M=c(ee),ae=u(me,2);ea(ae,{get items(){return s(p)},onToggleItem:g,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var O=u(te,2),ie=c(O);ie.__click=[ks,r,e];var B=u(ie,2);B.__click=h;var re=c(B);{var de=H=>{var Q=vd();v(H,Q)},Pe=H=>{var Q=fd(),se=C(Q);yr(se,{class:"h-4 w-4"});var ke=u(se);I(()=>N(ke,` Valider ${s(l).length??""} produit(s)`)),v(H,Q)};k(re,H=>{s(r)?H(de):H(Pe,!1)})}I((H,Q)=>{N(D,` ${s(f)??""}`),$.disabled=s(r),N(F,H),N(M,Q),ie.disabled=s(r),B.disabled=s(r)||!s(d)},[()=>fr(V.dateRange.start),()=>fr(V.dateRange.start)]),v(t,m),Z()}Ye(["click"]);function tn(t,e,r,a){e(!1),b(r,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0),b(a,null)}var gd=y('<div class="alert alert-error text-sm"><!> <span> </span></div>'),md=(t,e)=>e(!0),_d=y('<span class="loading loading-spinner"></span>'),bd=y('<span class="loading loading-spinner"></span>'),yd=y('<div role="dialog"><div class="modal-box relative w-10/12 max-w-5xl"><button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" aria-label="Fermer"><!></button> <h3 class="text-lg font-bold">Ajouter un produit</h3> <form class="mt-6 space-y-4"><!> <fieldset class="space-y-4"><div class="flex flex-wrap gap-4"><fieldset class="fieldset"><label class="input w-72"><!> <input id="product-name" type="text" placeholder="Nom du produit"/></label></fieldset> <!></div> <fieldset class="fieldset"><div class="flex flex-wrap items-baseline gap-2"><label class="input w-72"><!> <input id="product-type" type="text" placeholder="type / catégorie"/></label> <!></div></fieldset> <!> <!> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-success"/> <span class="label-text flex items-center gap-2"><!> Produit frais</span></label></fieldset> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-info"/> <span class="label-text flex items-center gap-2"><!> Produit surgelé</span></label></fieldset></fieldset> <div class="modal-action flex justify-between"><button type="button" class="btn btn-ghost">Annuler</button> <div class="flex gap-2"><button type="button" class="btn btn-secondary"><!> Ajouter et créer un nouveau</button> <button type="submit" class="btn btn-primary"><!> Ajouter et fermer</button></div></div></form></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></div>');function wd(t,e){J(e,!0);let r=fe(e,"open",15,!1),a=U(!1),n=U(null),i=U(!1),o=U(Oe({productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""}));const l=K(()=>s(o).productName.trim().length>0&&s(o).productType.trim().length>0),d=K(()=>V.uniqueProductTypes.map(G=>({id:G,label:G})));async function f(G=!1){if(!(!s(l)||s(a))){b(a,!0),b(n,null),b(i,!1);try{if(!V.currentMainId)throw new Error("Aucun événement principal sélectionné");const be={productName:s(o).productName.trim(),productType:s(o).productType.trim(),store:s(o).store.trim()?{storeName:s(o).store.trim()}:void 0,who:s(o).who.trim()?[s(o).who.trim()]:void 0,pFrais:s(o).pFrais,pSurgel:s(o).pSurgel,quantity:s(o).quantity?{q:s(o).quantity,u:s(o).unit.trim()||"pièces"}:void 0};await qo(be,V.currentMainId),b(i,!0),G?(s(o).productName="",s(o).quantity=void 0,s(o).unit="",s(o).pFrais=!1,s(o).pSurgel=!1,setTimeout(()=>{document.getElementById("product-name")?.focus()},100)):(r(!1),b(o,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0))}catch(be){console.error("Error creating product:",be),b(n,"Erreur lors de la création du produit. Veuillez réessayer.")}finally{b(a,!1)}}}Bt(()=>{r()&&setTimeout(()=>{document.getElementById("product-name")?.focus()},50)});var h=yd();let g;var p=c(h),m=c(p);m.__click=[tn,r,o,n];var _=c(m);It(_,{size:20});var w=u(m,4),P=c(w);{var S=G=>{var be=gd(),We=c(be);oa(We,{size:18});var Ue=u(We,2),Je=c(Ue);I(()=>N(Je,s(n))),v(G,be)};k(P,G=>{s(n)&&G(S)})}var D=u(P,2),$=c(D),A=c($),E=c(A),T=c(E);ku(T,{class:"text-base-content/50 h-5 w-5"});var R=u(T,2),x=u(A,2);Ha(x,{get disabled(){return s(a)},get quantity(){return s(o).quantity},set quantity(G){s(o).quantity=G},get unit(){return s(o).unit},set unit(G){s(o).unit=G}});var W=u($,2),X=c(W),L=c(X),z=c(L);Cu(z,{class:"text-base-content/50 h-5 w-5"});var ce=u(z,2),ye=u(L,2);qn(ye,{get suggestions(){return s(d)},onSuggestionClick:G=>s(o).productType=G.label,get disabled(){return s(a)}});var we=u(W,2);Hr(we,{get suggestions(){return V.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(G){s(o).store=G}});var q=u(we,2);ia(q,{get suggestions(){return V.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(G){s(o).who=G}});var le=u(q,2),ge=c(le),ne=c(ge),te=u(ne,2),me=c(te);ci(me,{class:"h-4 w-4"});var xe=u(le,2),F=c(xe),ee=c(F),M=u(ee,2),ae=c(M);Rn(ae,{class:"h-4 w-4"});var O=u(D,2),ie=c(O);ie.__click=[tn,r,o,n];var B=u(ie,2),re=c(B);re.__click=[md,f];var de=c(re);{var Pe=G=>{var be=_d();v(G,be)},H=G=>{In(G,{size:18})};k(de,G=>{s(a)?G(Pe):G(H,!1)})}var Q=u(re,2),se=c(Q);{var ke=G=>{var be=bd();v(G,be)};k(se,G=>{s(a)&&G(ke)})}var ve=u(p,2),qe=c(ve);qe.__click=[tn,r,o,n],I(G=>{g=Me(h,1,"modal",null,g,G),D.disabled=s(a),R.disabled=s(a),ce.disabled=s(a),ne.disabled=s(a),ee.disabled=s(a),ie.disabled=s(a),re.disabled=s(a)||!s(o).productName,Q.disabled=s(a)||!s(o).productName},[()=>({"modal-open":r()})]),ma("submit",w,G=>{G.preventDefault(),f(!1)}),Ke(R,()=>s(o).productName,G=>s(o).productName=G),Ke(ce,()=>s(o).productType,G=>s(o).productType=G),dn(ne,()=>s(o).pFrais,G=>s(o).pFrais=G),dn(ee,()=>s(o).pSurgel,G=>s(o).pSurgel=G),v(t,h),Z()}Ye(["click"]);function hn(t){switch(t.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:nu};case"animaux":return{displayName:"Viandes et Poissons",icon:su};case"legumes":return{displayName:"Fruits et Légumes",icon:iu};case"sucres":return{displayName:"Sucrées",icon:ou};case"lof":return{displayName:"L.O.F",icon:pu};case"autres":return{displayName:"Autres",icon:lu};case"epices":return{displayName:"Assaisonnements",icon:bu};case"frais":return{displayName:"Produits Frais",icon:Du};default:return{displayName:t,icon:Ua}}}function pn(t,e){return e==="kg"?{quantity:t*1e3,unit:"gr."}:e==="l."?{quantity:t*1e3,unit:"ml"}:{quantity:t,unit:e}}function Ln(t,e){let r,a;if(e==="gr."&&t>=1e3){const n=t/1e3;r=rn(n),a="kg"}else if(e==="ml"&&t>=1e3){const n=t/1e3;r=rn(n),a="l"}else r=rn(t),a=e;return`${r} ${a}`}function rn(t){return(Math.round(t*10)/10).toString().replace(/\.0$/,"")}function Wa(t){if(!t)return"-";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}function xd(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"})}catch{return t}}function gn(t){switch(t){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function Es(t){return t?Wa(t):"-"}function Sd(t){if(!t?.length)return[];const e=t.reduce((r,a)=>{const n=a.status||"direct",i=a.unit||"unit",o=`${n}_${i}`;if(!r[o]){const l=gn(n);r[o]={status:n,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:$d(n),deliveryDate:n==="ordered"&&a.deliveryDate?xd(a.deliveryDate):void 0}}return r[o].quantity+=a.quantity||0,r},{});return Object.values(e).map(r=>({...r,quantity:Ln(r.quantity,r.unit).replace(` ${r.unit}`,"")}))}function $d(t){switch(t){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"Check";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}class Pd{constructor(e,r="recettes"){this.productId=e,this.currentTab=r,this.initForms()}#e=U(!1);get loading(){return s(this.#e)}set loading(e){b(this.#e,e,!0)}#t=U(null);get error(){return s(this.#t)}set error(e){b(this.#t,e,!0)}#a=U("recettes");get currentTab(){return s(this.#a)}set currentTab(e){b(this.#a,e,!0)}#o=K(()=>{const e=this.productId;return V.getEnrichedProductById(e)});get product(){return s(this.#o)}set product(e){b(this.#o,e)}#d=K(()=>this.product?.who??[]);get whoList(){return s(this.#d)}set whoList(e){b(this.#d,e)}#c=K(()=>this.product?.stockParsed??null);get stockParsed(){return s(this.#c)}set stockParsed(e){b(this.#c,e)}#u=K(()=>this.product?.purchases??[]);get purchasesList(){return s(this.#u)}set purchasesList(e){b(this.#u,e)}#l=K(()=>this.product?.byDate?ko(this.product.byDate):[]);get recipes(){return s(this.#l)}set recipes(e){b(this.#l,e)}#v=U(Oe({purchase:{quantity:null,unit:"",store:"",who:Dt.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]}));get forms(){return s(this.#v)}set forms(e){b(this.#v,e,!0)}#i=U(Oe({overrideManagerEditMode:!1}));get uiStates(){return s(this.#i)}set uiStates(e){b(this.#i,e,!0)}#f=U(null);get editingPurchaseId(){return s(this.#f)}set editingPurchaseId(e){b(this.#f,e,!0)}#n=K(()=>this.editingPurchaseId?this.purchasesList.find(e=>e.$id===this.editingPurchaseId)??null:null);get editingPurchaseData(){return s(this.#n)}set editingPurchaseData(e){b(this.#n,e)}#h=U(null);get originalFormsSnapshot(){return s(this.#h)}set originalFormsSnapshot(e){b(this.#h,e,!0)}initForms(){const e=V.getEnrichedProductById(this.productId);e&&(this.forms.purchase.quantity=e.missingQuantityArray[0]?.q??null,this.forms.purchase.unit=e.totalNeededArray[0]?.u??"",this.forms.purchase.store=e.storeInfo?.storeName??"",this.forms.purchase.who=Dt.userName()??"",this.forms.purchase.status=this.forms.purchase.status||"delivered",this.forms.stock.unit=e.totalNeededArray[0]?.u??"",this.forms.store.name=e.storeInfo?.storeName??"",this.forms.store.comment=e.storeInfo?.storeComment??null,this.forms.who=e.who?[...e.who]:[],this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})}#p=K(()=>this.originalFormsSnapshot?{store:this.forms.store.name!==this.originalFormsSnapshot.store.name||this.forms.store.comment!==this.originalFormsSnapshot.store.comment,stock:this.hasStockChanges(),who:JSON.stringify(this.forms.who)!==JSON.stringify(this.originalFormsSnapshot.whoList)}:{store:!1,stock:!1,who:!1});get hasChanges(){return s(this.#p)}set hasChanges(e){b(this.#p,e)}#m=K(()=>!!(this.originalFormsSnapshot&&(this.hasChanges.store||this.hasChanges.stock||this.hasChanges.who)));get hasAnyChanges(){return s(this.#m)}set hasAnyChanges(e){b(this.#m,e)}hasStockChanges(){return this.isStockFormValid?this.stockParsed?this.forms.stock.quantity.toString()!==this.stockParsed.quantity||this.forms.stock.unit!==this.stockParsed.unit||(this.forms.stock.notes||"")!==(this.stockParsed.notes||""):!0:!1}get isPurchaseFormValid(){return this.forms.purchase.quantity!==null&&this.forms.purchase.quantity!==0&&(this.forms.purchase.unit?.trim()??"")!==""}get isStockFormValid(){return this.forms.stock.quantity!==null&&this.forms.stock.quantity>0&&(this.forms.stock.unit?.trim()??"")!==""}setCurrentTab(e){this.currentTab=e}async addPurchase(){this.product&&await this.withLoading(async()=>{if(!this.forms.purchase.quantity||!this.forms.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!V.currentMainId)throw new Error("mainId non disponible");const{quantity:e,unit:r}=pn(this.forms.purchase.quantity,this.forms.purchase.unit);this.product.isSynced||await Wt(this.product.$id,{},i=>V.getEnrichedProductById(i));const a=this.forms.purchase.status||"delivered";let n=this.forms.purchase.deliveryDate||null;a==="delivered"&&!n&&(n=new Date().toISOString()),await Uo({products:[this.product.$id],mainId:V.currentMainId,unit:r,quantity:e,store:this.forms.purchase.store||null,who:this.forms.purchase.who||null,notes:this.forms.purchase.notes||"",price:this.forms.purchase.price||null,status:a,orderDate:this.forms.purchase.orderDate||null,deliveryDate:n}),this.forms.purchase={quantity:this.product.missingQuantityArray[0]?.q??null,unit:this.product.totalNeededArray[0]?.u??"",store:this.forms.purchase.store,who:this.forms.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}startEditPurchase(e){this.editingPurchaseId=e.$id}cancelEditPurchase(){this.editingPurchaseId=null}async updateEditedPurchase(e){e.$id&&await this.withLoading(async()=>{const{quantity:r,unit:a}=pn(e.quantity,e.unit),n=e.status||null;let i=e.deliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString()),await Nn(e.$id,{unit:a,quantity:r,store:e.store||null,who:e.who||null,notes:e.notes||"",price:e.price||null,status:n,orderDate:e.orderDate||null,deliveryDate:i}),this.editingPurchaseId=null},"Achat modifié avec succès")}async removePurchase(e){const r=this.purchasesList.find(a=>a.$id===e);r&&confirm(`Supprimer cet achat (${r.quantity} ${r.unit}) ?`)&&await this.withLoading(async()=>{await Ho(e)},"Achat supprimé avec succès")}async setStock(){this.product&&await this.withLoading(async()=>{if(!this.forms.stock.quantity||!this.forms.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const e={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};this.product.isSynced?await fn(this.product.$id,JSON.stringify(e)):await Wt(this.product.$id,{stockReel:JSON.stringify(e)},r=>V.getEnrichedProductById(r)),this.forms.stock.quantity=null,this.forms.stock.notes="",this.forms.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async removeStock(){this.product&&confirm("Supprimer le stock actuel ?")&&await this.withLoading(async()=>{this.product.isSynced?await fn(this.product.$id,null):await Wt(this.product.$id,{stockReel:null},e=>V.getEnrichedProductById(e))},"Stock supprimé")}async setWho(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Lo(this.product.$id,e):await Wt(this.product.$id,{who:e},r=>V.getEnrichedProductById(r))},"Volontaires mis à jour")}async updateStore(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await jo(this.product.$id,e):await Wt(this.product.$id,{store:JSON.stringify(e)},r=>V.getEnrichedProductById(r))},"Magasin mis à jour")}async setOverride(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Mn(this.product.$id,e,!0):await Wt(this.product.$id,{totalNeededOverride:JSON.stringify(e)},r=>V.getEnrichedProductById(r))},"Override appliqué")}async removeOverride(){this.product&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await this.withLoading(async()=>{await Bo(this.product.$id,!0)},"Override supprimé")}async saveAllChanges(){!this.product||!this.hasAnyChanges||await this.withLoading(async()=>{const e={};if(this.hasChanges.stock&&this.forms.stock.quantity&&this.forms.stock.unit){const r={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};e.stockReel=JSON.stringify(r)}if(this.hasChanges.who&&(e.who=this.forms.who),this.hasChanges.store){const r={storeName:this.forms.store.name||"",storeComment:this.forms.store.comment||void 0};e.storeInfo=r}Object.keys(e).length>0&&(await zo(this.product.$id,e,r=>V.getEnrichedProductById(r)),this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})},"Modifications enregistrées")}resetForms(){this.uiStates.overrideManagerEditMode=!1,this.editingPurchaseId=null,this.initForms(),console.log("[ProductModalState] Formulaires et états UI réinitialisés")}async withLoading(e,r){this.loading=!0,this.error=null;try{const a=await e();return r&&this.showToast("success",r),a}catch(a){const n=a instanceof Error?a.message:"Une erreur est survenue";return this.error=n,this.showToast("error",n),console.error("[ProductModalState]",a),null}finally{this.loading=!1}}showToast(e,r){const a=new CustomEvent("toast",{detail:{type:e,message:r}});window.dispatchEvent(a)}formatQuantity=Ln;formatDate=Wa}var kd=y('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),Ed=y('<div class="text-xs text-base-content/60 mt-1"> </div>'),Ad=y('<div class="font-medium"> </div> <!>',1),Td=y('<pre class="text-xs"> </pre>'),Dd=y('<span class="text-base-content/50 italic">Non défini</span>'),Md=y('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),Nd=y('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function Ga(t,e){J(e,!0);let r=fe(e,"title",3,"Événement terminé"),a=fe(e,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),n=fe(e,"showData",3,!0),i=fe(e,"data",3,null),o=fe(e,"dataLabel",3,"");var l=Nd(),d=c(l),f=c(d);ai(f,{class:"h-5 w-5 text-warning"});var h=u(f,2);wu(h,{class:"h-4 w-4 text-warning/70"});var g=u(h,2),p=c(g),m=u(d,2),_=c(m),w=u(m,2);{var P=S=>{var D=Md(),$=c(D);{var A=W=>{var X=kd(),L=c(X);I(()=>N(L,`${o()??""} :`)),v(W,X)};k($,W=>{o()&&W(A)})}var E=u($,2),T=c(E);{var R=W=>{var X=bt();I(()=>N(X,i())),v(W,X)},x=W=>{var X=Y(),L=C(X);{var z=ye=>{var we=bt();I(q=>N(we,q),[()=>i().join(", ")]),v(ye,we)},ce=ye=>{var we=Y(),q=C(we);{var le=ne=>{var te=Y(),me=C(te);{var xe=ee=>{var M=Ad(),ae=C(M),O=c(ae),ie=u(ae,2);{var B=re=>{var de=Ed(),Pe=c(de);I(()=>N(Pe,i().storeComment)),v(re,de)};k(ie,re=>{i().storeComment&&re(B)})}I(()=>N(O,i().storeName)),v(ee,M)},F=ee=>{var M=Td(),ae=c(M);I(O=>N(ae,O),[()=>JSON.stringify(i(),null,2)]),v(ee,M)};k(me,ee=>{i().storeName?ee(xe):ee(F,!1)})}v(ne,te)},ge=ne=>{var te=Dd();v(ne,te)};k(q,ne=>{typeof i()=="object"&&i()!==null?ne(le):ne(ge,!1)},!0)}v(ye,we)};k(L,ye=>{Array.isArray(i())&&i().length>0?ye(z):ye(ce,!1)},!0)}v(W,X)};k(T,W=>{typeof i()=="string"||typeof i()=="number"?W(R):W(x,!1)})}v(S,D)};k(w,S=>{n()&&i()&&S(P)})}I(()=>{N(p,r()),N(_,a())}),v(t,l),Z()}function Cd(t,e){e().isPurchaseFormValid&&(e().forms.purchase.status==="ordered"&&!e().forms.purchase.orderDate&&(e().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),e().addPurchase())}function Id(t,e,r){const a=e().editingPurchaseData;!a||!r(a)||e().updateEditedPurchase(a)}function Rd(t,e){e().cancelEditPurchase()}var Od=y('<span class="loading loading-spinner loading-sm"></span>'),qd=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="space-y-6"><div class="flex flex-wrap items-baseline gap-4"><!> <!> <!> <!></div> <div><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>'),jd=y('<div class="mt-4 py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Ld=y("<th>Actions</th>"),Bd=y('<span class="loading loading-spinner loading-sm"></span>'),zd=y('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="1" min="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="50"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Acheté</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Ud=(t,e,r)=>e(s(r)),Hd=(t,e,r)=>e(s(r).$id),Wd=y('<span class="loading loading-spinner loading-sm"></span>'),Gd=y('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),Qd=y('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),Vd=y('<div class="mt-4 overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),Fd=y('<div class="space-y-4"><!></div> <!>',1);function Kd(t,e){J(e,!0);let r=fe(e,"modalState",7),a=fe(e,"isArchiveMode",3,!1);function n(w){return w.quantity!==null&&w.quantity!==0&&w.unit?.trim()!==""}function i(w){r().removePurchase(w)}function o(w){r().startEditPurchase(w)}var l=Fd(),d=C(l),f=c(d);{var h=w=>{Ga(w,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},g=w=>{var P=qd(),S=c(P),D=u(c(S),2),$=c(D),A=c($);Ha(A,{get disabled(){return r().loading},get quantity(){return r().forms.purchase.quantity},set quantity(q){r().forms.purchase.quantity=q},get unit(){return r().forms.purchase.unit},set unit(q){r().forms.purchase.unit=q}});var E=u(A,2);jn(E,{get disabled(){return r().loading},get value(){return r().forms.purchase.price},set value(q){r().forms.purchase.price=q}});var T=u(E,2);Hr(T,{get suggestions(){return V.uniqueStores},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.store},set value(q){r().forms.purchase.store=q}});var R=u(T,2);ia(R,{get suggestions(){return V.uniqueWho},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.who},set value(q){r().forms.purchase.who=q}});var x=u($,2),W=c(x);Wr(W,{get disabled(){return r().loading},get value(){return r().forms.purchase.notes},set value(q){r().forms.purchase.notes=q}});var X=u(x,2);fi(X,{get disabled(){return r().loading},get status(){return r().forms.purchase.status},set status(q){r().forms.purchase.status=q},get deliveryDate(){return r().forms.purchase.deliveryDate},set deliveryDate(q){r().forms.purchase.deliveryDate=q}});var L=u(D,2),z=c(L);z.__click=[Cd,r];var ce=c(z);{var ye=q=>{var le=Od();v(q,le)},we=q=>{var le=bt("Ajouter l'achat");v(q,le)};k(ce,q=>{r().loading?q(ye):q(we,!1)})}I(()=>z.disabled=r().loading||!r().isPurchaseFormValid),v(w,P)};k(f,w=>{a()?w(h):w(g,!1)})}var p=u(d,2);{var m=w=>{var P=jd(),S=c(P);yr(S,{class:"mx-auto mb-2 h-12 w-12"}),v(w,P)},_=w=>{var P=Vd(),S=c(P),D=c(S),$=c(D),A=u(c($),8);{var E=R=>{var x=Ld();v(R,x)};k(A,R=>{a()||R(E)})}var T=u(D);nt(T,21,()=>r().purchasesList,R=>R.$id,(R,x,W)=>{var X=Y(),L=C(X);{var z=ye=>{var we=zd(),q=c(we),le=c(q),ge=c(le),ne=u(ge,2),te=c(ne);te.value=te.__value="kg";var me=u(te);me.value=me.__value="gr.";var xe=u(me);xe.value=xe.__value="l.";var F=u(xe);F.value=F.__value="ml";var ee=u(F);ee.value=ee.__value="unité";var M=u(ee);M.value=M.__value="bottes";var ae=u(q),O=c(ae),ie=u(ae),B=c(ie),re=u(ie),de=c(re),Pe=c(de);Pe.value=Pe.__value="ordered";var H=u(Pe);H.value=H.__value="delivered";var Q=u(re),se=c(Q),ke=u(Q),ve=c(ke),qe=u(ke),G=c(qe),be=u(qe),We=c(be),Ue=u(be),Je=c(Ue),Ie=c(Je);Ie.__click=[Id,r,n];var et=c(Ie);{var zt=Ae=>{var Xe=Bd();v(Ae,Xe)},Ee=Ae=>{Mu(Ae,{class:"h-3 w-3"})};k(et,Ae=>{r().loading?Ae(zt):Ae(Ee,!1)})}var De=u(Ie,2);De.__click=[Rd,r];var ze=c(De);It(ze,{class:"h-3 w-3"}),I(Ae=>Ie.disabled=Ae,[()=>r().loading||!n(s(x))]),Ke(ge,()=>s(x).quantity,Ae=>s(x).quantity=Ae),$a(ne,()=>s(x).unit,Ae=>s(x).unit=Ae),Ke(O,()=>s(x).store,Ae=>s(x).store=Ae),Ke(B,()=>s(x).who,Ae=>s(x).who=Ae),$a(de,()=>s(x).status,Ae=>s(x).status=Ae),Ke(se,()=>s(x).orderDate,Ae=>s(x).orderDate=Ae),Ke(ve,()=>s(x).deliveryDate,Ae=>s(x).deliveryDate=Ae),Ke(G,()=>s(x).price,Ae=>s(x).price=Ae),Ke(We,()=>s(x).notes,Ae=>s(x).notes=Ae),v(ye,we)},ce=ye=>{var we=Qd(),q=c(we),le=c(q),ge=u(q),ne=c(ge),te=u(ge),me=c(te),xe=u(te),F=c(xe),ee=c(F),M=u(xe),ae=c(M),O=u(M),ie=c(O),B=u(O),re=c(B),de=u(B),Pe=c(de),H=u(de);{var Q=se=>{var ke=Gd(),ve=c(ke),qe=c(ve);qe.__click=[Ud,o,x];var G=c(qe);Xr(G,{class:"h-4 w-4"});var be=u(qe,2);be.__click=[Hd,i,x];var We=c(be);{var Ue=Ie=>{var et=Wd();v(Ie,et)},Je=Ie=>{It(Ie,{class:"h-4 w-4"})};k(We,Ie=>{r().loading?Ie(Ue):Ie(Je,!1)})}I(()=>be.disabled=r().loading),v(se,ke)};k(H,se=>{a()||se(Q)})}I((se,ke,ve,qe,G)=>{N(le,se),N(ne,s(x).store||"-"),N(me,s(x).who||"-"),Me(F,1,`badge badge-sm ${ke??""}`),N(ee,ve),N(ae,qe),N(ie,G),N(re,s(x).price?`${s(x).price}€`:"-"),N(Pe,s(x).notes||"-")},[()=>Ln(s(x).quantity,s(x).unit),()=>gn(s(x).status).class,()=>gn(s(x).status).text,()=>Es(s(x).orderDate),()=>Es(s(x).deliveryDate)]),v(ye,we)};k(L,ye=>{r().editingPurchaseId===s(x).$id?ye(z):ye(ce,!1)})}v(R,X)}),v(w,P)};k(p,w=>{r().purchasesList.length===0?w(m):w(_,!1)})}v(t,l),Z()}Ye(["click"]);async function Yd(t,e){await e()?.removeStock()}var Jd=y(`Le stock réel est la quantité réelle du produit constaté dans le
            stock: <strong>il sera utilisé pour le calcul des quantités manquantes à se
              fournir à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantités manquantes à se fournir.`,1),Zd=(t,e)=>{e().forms.stock.quantity=null,e().forms.store.comment=""},Xd=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><!></div> <div><!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>'),ev=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),tv=y('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),rv=y('<span class="loading loading-spinner loading-xs"></span>'),av=y('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),nv=y('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),sv=y('<div class="space-y-4"><!></div> <!>',1);function ov(t,e){J(e,!0);let r=fe(e,"modalState",7),a=fe(e,"isArchiveMode",3,!1);var n=sv(),i=C(n),o=c(i);{var l=p=>{Ga(p,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return r().stockParsed},dataLabel:"Stock actuel"})},d=p=>{var m=Xd(),_=c(m),w=c(_),P=c(w),S=u(w,2),D=c(S);vi(D,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(W,X)=>{var L=Jd();v(W,L)},$$slots:{default:!0}});var $=u(S,2),A=c($);Ha(A,{get disabled(){return r().loading},get quantity(){return r().forms.stock.quantity},set quantity(W){r().forms.stock.quantity=W},get unit(){return r().forms.stock.unit},set unit(W){r().forms.stock.unit=W}});var E=u($,2),T=c(E);Wr(T,{get disabled(){return r().loading},get value(){return r().forms.stock.notes},set value(W){r().forms.stock.notes=W}});var R=u(E,2),x=c(R);x.__click=[Zd,r],I(W=>{N(P,`Déclarer le stock réel du ${W??""}`),x.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),v(p,m)};k(o,p=>{a()?p(l):p(d,!1)})}var f=u(i,2);{var h=p=>{var m=ev(),_=c(m);Xo(_,{class:"mx-auto mb-2 h-12 w-12"}),v(p,m)},g=p=>{var m=nv(),_=c(m),w=u(c(_),2),P=c(w),S=u(c(P),2),D=c(S),$=u(P,2),A=u(c($),2),E=c(A),T=u($,2);{var R=X=>{var L=tv(),z=u(c(L),2),ce=c(z);I(()=>N(ce,r().stockParsed.notes)),v(X,L)};k(T,X=>{r().stockParsed.notes&&X(R)})}var x=u(w,2);{var W=X=>{var L=av(),z=c(L);z.__click=[Yd,r];var ce=c(z);{var ye=q=>{var le=rv();v(q,le)},we=q=>{var le=bt("Supprimer le stock");v(q,le)};k(ce,q=>{r().loading?q(ye):q(we,!1)})}I(()=>z.disabled=r().loading),v(X,L)};k(x,X=>{a()||X(W)})}I(X=>{N(D,`${r().stockParsed.quantity??""}
            ${r().stockParsed.unit??""}`),N(E,X)},[()=>Wa(r().stockParsed.dateTime)]),v(p,m)};k(f,p=>{r().stockParsed?p(g,!1):p(h)})}v(t,n),Z()}Ye(["click"]);function iv(t,e,r){e().forms.who=[...e().whoList],b(r,"")}var lv=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},cv=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),uv=y('<div class="space-y-4"><!></div>');function dv(t,e){J(e,!0);let r=fe(e,"modalState",7),a=fe(e,"isArchiveMode",3,!1),n=U("");const i=K(()=>{const _=new Set([...V.uniqueWho,...r().forms.who]);return Array.from(_).map(w=>({id:w,label:w,selected:r().forms.who.includes(w)}))});function o(_){const w=_.trim();w&&!r().forms.who.includes(w)&&(r().forms.who=[...r().forms.who,w])}function l(_){r().forms.who=r().forms.who.filter(w=>w!==_)}function d(_){r().forms.who.includes(_)?l(_):o(_)}function f(){s(n).trim()&&(o(s(n)),b(n,""))}var h=uv(),g=c(h);{var p=_=>{Ga(_,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},m=_=>{var w=cv(),P=c(w),S=u(c(P),4),D=c(S),$=c(D),A=c($);On(A,{class:"h-4 w-4 opacity-50"});var E=u(A,2);E.__keydown=[lv,f];var T=u($,2);T.__click=f;var R=c(T);ui(R,{size:16});var x=u(D,2),W=u(c(x),2);ea(W,{get items(){return s(i)},onToggleItem:d,showIcon:!0,badgeSize:"btn-sm"});var X=u(P,2),L=c(X);L.__click=[iv,r,n],I(z=>{E.disabled=r().loading,T.disabled=z,L.disabled=r().loading},[()=>r().loading||!s(n).trim()]),Ke(E,()=>s(n),z=>b(n,z)),v(_,w)};k(g,_=>{a()?_(p):_(m,!1)})}v(t,h),Z()}Ye(["keydown","click"]);var vv=(t,e)=>{e().forms.store.name="",e().forms.store.comment=""},fv=y(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),hv=y('<div class="space-y-4"><!></div>');function pv(t,e){J(e,!0);let r=fe(e,"modalState",7),a=fe(e,"isArchiveMode",3,!1);const n=K(()=>r()?.hasChanges?.store||!1);async function i(){if(!s(n))return;const h={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(h)}var o=hv(),l=c(o);{var d=h=>{{let g=K(()=>r().product?.storeInfo);Ga(h,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return s(g)},dataLabel:"Magasin actuel"})}},f=h=>{var g=fv(),p=c(g),m=u(c(p),4),_=c(m),w=c(_);Hr(w,{get suggestions(){return V.uniqueStores},get disabled(){return r().loading},onkeydown:$=>{$.key==="Enter"&&i()},get value(){return r().forms.store.name},set value($){r().forms.store.name=$}});var P=u(_,2);Wr(P,{get disabled(){return r().loading},get value(){return r().forms.store.comment},set value($){r().forms.store.comment=$}});var S=u(m,2),D=c(S);D.__click=[vv,r],I(()=>D.disabled=r().loading),v(h,g)};k(l,h=>{a()?h(d):h(f,!1)})}v(t,o),Z()}Ye(["click"]);var gv=y('<label class="input w-96"><!> <input type="text" placeholder="Commentaire (optionnel)" maxlength="250"/></label>');function mv(t,e){J(e,!0);let r=fe(e,"value",15);fe(e,"disabled",3,!1);var a=gv(),n=c(a);si(n,{size:20,class:"text-base-centent/70"});var i=u(n,2);Ke(i,r),v(t,a),Z()}function _v(t){const e=t-1;return e*e*e+1}function bv(t,{delay:e=0,duration:r=400,easing:a=_v,axis:n="y"}={}){const i=getComputedStyle(t),o=+i.opacity,l=n==="y"?"height":"width",d=parseFloat(i[l]),f=n==="y"?["top","bottom"]:["left","right"],h=f.map(S=>`${S[0].toUpperCase()}${S.slice(1)}`),g=parseFloat(i[`padding${h[0]}`]),p=parseFloat(i[`padding${h[1]}`]),m=parseFloat(i[`margin${h[0]}`]),_=parseFloat(i[`margin${h[1]}`]),w=parseFloat(i[`border${h[0]}Width`]),P=parseFloat(i[`border${h[1]}Width`]);return{delay:e,duration:r,easing:a,css:S=>`overflow: hidden;opacity: ${Math.min(S*20,1)*o};${l}: ${S*d}px;padding-${f[0]}: ${S*g}px;padding-${f[1]}: ${S*p}px;margin-${f[0]}: ${S*m}px;margin-${f[1]}: ${S*_}px;border-${f[0]}-width: ${S*w}px;border-${f[1]}-width: ${S*P}px;min-${l}: 0`}}async function yv(t,e,r,a,n){if(!e())return;const i={totalOverride:{q:s(r),u:s(a)},comment:s(n)};await e().setOverride(i),e().uiStates.overrideManagerEditMode=!1}async function wv(t,e){e()&&(await e().removeOverride(),e().uiStates.overrideManagerEditMode=!1)}var xv=y('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Ancienne quantité calculée</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),Sv=y('<div class="stat-desc italic">Recettes actuelles</div>'),$v=y('<div class="chat-bubble relative ms-auto mt-2 text-sm"> <!></div>'),Pv=y('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins redéfinie manuellement</div> <div class="stat-value text-content-base/70 text-end text-lg"> </div> <!></div>'),kv=(t,e)=>e().uiStates.overrideManagerEditMode=!0,Ev=y('<div class="ms-auto mt-auto"><button class="btn btn-primary btn-sm btn-soft"><!> <!></button></div>'),Av=(t,e)=>e().uiStates.overrideManagerEditMode=!1,Tv=y('<span class="loading loading-spinner loading-sm"></span>'),Dv=y('<span class="loading loading-spinner loading-sm"></span>'),Mv=y('<div class="mt-4 flex flex-wrap items-center gap-4"><!> <!> <div class="ms-auto"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div></div>'),Nv=y('<div class="mb-2 space-y-4"><div class="bg-base-200 relative mb-4 flex rounded-xl p-4"><div class="grid"><div class="flex gap-4"><!> <div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins calculées</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="ms-auto flex flex-wrap gap-4"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div> <!></div> <!> <!></div> <!></div></div></div>');function Cv(t,e){J(e,!0);let r=fe(e,"modalState",7);const a=K(()=>r().product?.totalNeededOverrideParsed),n=K(()=>r().product?.displayTotalOverride);let i=K(()=>s(a)?.hasUnresolvedChangedSinceOverride),o=K(()=>r().uiStates.overrideManagerEditMode),l=U(Oe(r().product?.totalNeededOverrideParsed?.totalOverride.q||r().product?.totalNeededArray[0]?.q||0)),d=U(Oe(r().product?.totalNeededOverrideParsed?.totalOverride.u||r().product?.totalNeededArray[0]?.u||"")),f=U(Oe(r().product?.totalNeededOverrideParsed?.comment||"")),h=K(()=>s(l)>0&&s(d).trim()!=="");var g=Y(),p=C(g);{var m=_=>{var w=Nv(),P=c(w),S=c(P),D=c(S),$=c(D);{var A=F=>{var ee=xv(),M=u(c(ee),2),ae=c(M);I(()=>N(ae,s(a)?.oldTotalDisplay)),v(F,ee)};k($,F=>{s(a)?.oldTotalDisplay&&s(i)&&F(A)})}var E=u($,2),T=u(c(E),2),R=c(T),x=u(T,2),W=c(x),X=c(W),L=u(X);za(L,{class:"h-3 w-3"});var z=u(W,2),ce=c(z),ye=u(ce);di(ye,{class:"h-3 w-3"});var we=u(x,2);{var q=F=>{var ee=Sv();v(F,ee)};k(we,F=>{s(a)?.oldTotalDisplay&&s(i)&&F(q)})}var le=u(E,2);{var ge=F=>{var ee=Pv(),M=u(c(ee),2),ae=c(M),O=u(M,2);{var ie=B=>{var re=$v(),de=c(re),Pe=u(de);si(Pe,{size:16,class:"text-base-content/60 absolute right-1 bottom-1 "}),I(()=>N(de,`${s(a).comment??""} `)),v(B,re)};k(O,B=>{s(a).comment&&B(ie)})}I(()=>N(ae,s(n))),v(F,ee)};k(le,F=>{s(n)&&s(a)&&F(ge)})}var ne=u(le,2);{var te=F=>{var ee=Ev(),M=c(ee);M.__click=[kv,r];var ae=c(M);{var O=re=>{var de=bt("Redéfinir les besoins");v(re,de)},ie=re=>{var de=bt("Définir manuellement les besoins");v(re,de)};k(ae,re=>{s(a)?re(O):re(ie,!1)})}var B=u(ae,2);Xr(B,{size:16}),v(F,ee)};k(ne,F=>{!e.isArchiveMode&&!s(o)&&F(te)})}var me=u(D,2);{var xe=F=>{var ee=Mv(),M=c(ee);Ha(M,{get quantity(){return s(l)},set quantity(ve){b(l,ve,!0)},get unit(){return s(d)},set unit(ve){b(d,ve,!0)}});var ae=u(M,2);mv(ae,{get value(){return s(f)},set value(ve){b(f,ve,!0)}});var O=u(ae,2),ie=c(O);ie.__click=[Av,r];var B=u(ie,2);B.__click=[wv,r];var re=c(B);{var de=ve=>{var qe=Tv();v(ve,qe)},Pe=ve=>{var qe=bt();I(()=>N(qe,`Réinitialiser le total calculé (${r().product.displayTotalNeeded??""}).`)),v(ve,qe)};k(re,ve=>{r().loading?ve(de):ve(Pe,!1)})}var H=u(B,2);H.__click=[yv,r,l,d,f];var Q=c(H);{var se=ve=>{var qe=Dv();v(ve,qe)},ke=ve=>{var qe=bt("Appliquer");v(ve,qe)};k(Q,ve=>{r().loading?ve(se):ve(ke,!1)})}I(()=>{B.disabled=r().loading,H.disabled=r().loading||!s(h)}),tc(1,ee,()=>bv),v(F,ee)};k(me,F=>{s(o)&&F(xe)})}I(()=>{N(R,r().product.displayTotalNeeded),N(X,`${r().product.nbRecipes??""} `),N(ce,`${r().product.totalAssiettes??""} `)}),v(_,w)};k(p,_=>{r().product&&_(m)})}v(t,g),Z()}Ye(["click"]);var Iv=y('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Rv=y('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Ov=y('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),qv=y('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function jv(t,e){J(e,!0);const r=K(()=>e.modalState.recipes);var a=qv(),n=C(a);Cv(n,{get modalState(){return e.modalState},get isArchiveMode(){return e.isArchiveMode}});var i=u(n,2),o=c(i),l=c(o);za(l,{class:"h-5 w-5"});var d=u(o,2);{var f=g=>{var p=Iv(),m=c(p);Ua(m,{class:"mx-auto mb-2 h-12 w-12"}),v(g,p)},h=g=>{var p=Ov(),m=c(p),_=u(c(m));nt(_,21,()=>s(r),xr,(w,P)=>{var S=Rv(),D=c(S),$=c(D),A=u(D),E=c(A),T=u(A),R=c(T);I(x=>{N($,`${s(P).r??""} (${(s(P).a||"-")??""} c.)`),N(E,`${(s(P).q||s(P).qEq)??""} ${(s(P).u||s(P).uEq)??""}`),N(R,x)},[()=>Wa(s(P).date)]),v(w,S)}),v(g,p)};k(d,g=>{s(r).length===0?g(f):g(h,!1)})}v(t,a),Z()}function Lv(t,e,r){s(e)?.saveAllChanges().then(()=>{s(e)?.resetForms(),r.onClose()})}function As(t,e,r){s(e)?.resetForms(),r.onClose()}var Bv=y('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),zv=y('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Uv=y('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Hv=(t,e)=>e("recettes"),Wv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Gv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Qv=(t,e)=>e("magasins"),Vv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Fv=(t,e)=>e("volontaires"),Kv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Yv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Jv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Zv=(t,e)=>e("stock"),Xv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),ef=y('<span class="badge badge-sm badge-secondary ml-1">1</span>'),tf=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),rf=(t,e)=>e("achats"),af=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),nf=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),sf=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),of=y('<span class="loading loading-spinner loading-sm"></span>'),lf=y('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),cf=y('<div id="product_modal"><div class="modal-box fixed top-0 flex h-lvh w-lvw flex-col overflow-auto md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function uf(t,e){J(e,!0);let r=fe(e,"initialTab",3,"recettes"),a=U(null);Bt(()=>{b(a,new Pd(e.productId,r()),!0)});let n=K(()=>V.isEventPassed);function i(P){s(a)?.setCurrentTab(P)}var o=cf(),l=c(o),d=c(l),f=c(d);{var h=P=>{var S=zv(),D=C(S),$=c(D),A=u(D,2);{var E=L=>{var z=Bv(),ce=c(z);ai(ce,{class:"h-4 w-4"}),v(L,z)};k(A,L=>{s(a)&&s(n)&&L(E)})}var T=u(A,2),R=c(T),x=c(R),W=u(R,2),X=u(c(W));I(()=>{N($,s(a).product?.productName),N(x,s(a).product?.productType),N(X,` ${s(a).product?.displayTotalNeeded??""}`)}),v(P,S)},g=P=>{var S=Uv();v(P,S)};k(f,P=>{s(a)&&s(a).product?P(h):P(g,!1)})}var p=u(f,2);p.__click=[As,a,e];var m=c(p);It(m,{class:"h-4 w-4"});var _=u(d,2);{var w=P=>{var S=lf(),D=C(S),$=c(D);$.__click=[Hv,i];var A=c($);za(A,{class:"mr-1 h-5 w-5"});var E=u(A,2);{var T=G=>{var be=Wv(),We=c(be);I(()=>N(We,s(a).product?.nbRecipes)),v(G,be)},R=G=>{var be=Gv();v(G,be)};k(E,G=>{s(a).product?.nbRecipes&&s(a).product?.nbRecipes>0?G(T):G(R,!1)})}var x=u($,2);x.__click=[Qv,i];var W=c(x);gr(W,{class:"mr-1 h-5 w-5"});var X=u(W,2);{var L=G=>{var be=Vv();v(G,be)};k(X,G=>{s(a).hasChanges?.store&&G(L)})}var z=u(x,2);z.__click=[Fv,i];var ce=c(z);_a(ce,{class:"mr-1 h-5 w-5"});var ye=u(ce,2);{var we=G=>{var be=Kv();v(G,be)},q=G=>{var be=Y(),We=C(be);{var Ue=Ie=>{var et=Yv(),zt=c(et);I(()=>N(zt,s(a).product?.who.length)),v(Ie,et)},Je=Ie=>{var et=Jv();v(Ie,et)};k(We,Ie=>{s(a).product?.who&&s(a).product?.who.length>0?Ie(Ue):Ie(Je,!1)},!0)}v(G,be)};k(ye,G=>{s(a).hasChanges?.who?G(we):G(q,!1)})}var le=u(z,2);le.__click=[Zv,i];var ge=c(le);Xo(ge,{class:"mr-1 h-5 w-5"});var ne=u(ge,2);{var te=G=>{var be=Xv();v(G,be)},me=G=>{var be=Y(),We=C(be);{var Ue=Ie=>{var et=ef();v(Ie,et)},Je=Ie=>{var et=tf();v(Ie,et)};k(We,Ie=>{s(a).stockParsed?Ie(Ue):Ie(Je,!1)},!0)}v(G,be)};k(ne,G=>{s(a).hasChanges?.stock?G(te):G(me,!1)})}var xe=u(le,2);xe.__click=[rf,i];var F=c(xe);yr(F,{class:"mr-1 h-5 w-5"});var ee=u(F,2);{var M=G=>{var be=af(),We=c(be);I(()=>N(We,s(a).purchasesList.length)),v(G,be)},ae=G=>{var be=nf();v(G,be)};k(ee,G=>{s(a).purchasesList.length>0?G(M):G(ae,!1)})}var O=u(D,2),ie=c(O);{var B=G=>{var be=sf(),We=c(be);It(We,{class:"h-4 w-4"});var Ue=u(We,2),Je=c(Ue);I(()=>N(Je,`erreur : ${s(a).error??""}`)),v(G,be)};k(ie,G=>{s(a).error&&G(B)})}var re=u(ie,2),de=c(re);Ll(de,()=>s(a).currentTab,G=>{var be=Y(),We=C(be);{var Ue=Ie=>{jv(Ie,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},Je=Ie=>{var et=Y(),zt=C(et);{var Ee=ze=>{Kd(ze,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},De=ze=>{var Ae=Y(),Xe=C(Ae);{var dt=st=>{ov(st,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},lt=st=>{var gt=Y(),Pt=C(gt);{var kt=vt=>{dv(vt,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},Ut=vt=>{var Rt=Y(),ur=C(Rt);{var ue=pe=>{pv(pe,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})};k(ur,pe=>{s(a).currentTab==="magasins"&&pe(ue)},!0)}v(vt,Rt)};k(Pt,vt=>{s(a).currentTab==="volontaires"?vt(kt):vt(Ut,!1)},!0)}v(st,gt)};k(Xe,st=>{s(a).currentTab==="stock"?st(dt):st(lt,!1)},!0)}v(ze,Ae)};k(zt,ze=>{s(a).currentTab==="achats"?ze(Ee):ze(De,!1)},!0)}v(Ie,et)};k(We,Ie=>{s(a).currentTab==="recettes"?Ie(Ue):Ie(Je,!1)})}v(G,be)});var Pe=u(O,2),H=c(Pe);H.__click=[As,a,e];var Q=c(H),se=u(H,2);se.__click=[Lv,a,e];var ke=c(se);{var ve=G=>{var be=of();v(G,be)},qe=G=>{var be=bt("Tout enregistrer");v(G,be)};k(ke,G=>{s(a).loading?G(ve):G(qe,!1)})}I(()=>{Me($,1,`tab ${s(a).currentTab==="recettes"?"tab-active":""}`),Me(x,1,`tab ${s(a).currentTab==="magasins"?"tab-active":""}`),Me(z,1,`tab ${s(a).currentTab==="volontaires"?"tab-active":""}`),Me(le,1,`tab ${s(a).currentTab==="stock"?"tab-active":""}`),Me(xe,1,`tab ${s(a).currentTab==="achats"?"tab-active":""}`),N(Q,s(a)?.hasAnyChanges?"Annuler":"Fermer"),se.disabled=s(a).loading||!s(a).hasAnyChanges}),v(P,S)};k(_,P=>{s(a)&&P(w)})}I(()=>Me(o,1,`modal ${(e.productId&&"modal-open")??""}`)),v(t,o),Z()}Ye(["click"]);var df=(t,e,r)=>e(r),vf=y("<button><span> </span> <!></button>"),ff=y('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),hf=(t,e)=>e(),pf=y('<button class="btn btn-xs btn-link text-primary/80" type="button">Dates à venir</button>'),gf=(t,e)=>e(),mf=y('<button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button>'),_f=y('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),bf=y('<div class="flex flex-wrap justify-end gap-2"><!> <!></div>'),yf=y('<div class=" flex flex-wrap gap-1"></div> <!>',1);function wf(t,e){J(e,!0);let r=fe(e,"availableDates",19,()=>[]),a=fe(e,"currentRange",19,()=>({start:null,end:null})),n=U(Oe(a().start)),i=U(Oe(a().end));const o=K(()=>r().length>0&&s(n)===r()[0]&&s(i)===r()[r().length-1]),l=K(()=>{if(r().length===0)return!1;const $=new Date;$.setHours(0,0,0,0);const E=[...r()].sort().find(T=>new Date(T)>=$);return E&&s(n)===E&&s(i)===r()[r().length-1]}),d=K(()=>{if(r().length===0)return!0;const $=new Date(r()[r().length-1]);return $.setHours(23,59,59,999),$<new Date}),f=K(()=>{if(r().length===0)return!1;const $=new Date;return $.setHours(0,0,0,0),[...r()].some(A=>new Date(A)>=$)});Bt(()=>{b(n,a().start,!0),b(i,a().end,!0)});function h($){s(n)===$&&s(i)===$?p():new Date($)<new Date(s(n))?b(n,$,!0):(new Date($)>new Date(s(i))||b(n,$,!0),b(i,$,!0)),e.onRangeChange(s(n),s(i))}function g($){return s(o)?"btn-soft":new Date($)>=new Date(s(n))&&new Date($)<=new Date(s(i))?"":"btn-dash"}function p(){r().length!==0&&(b(n,r()[0],!0),b(i,r()[r().length-1],!0),e.onRangeChange(s(n),s(i)))}function m(){if(r().length===0)return;const $=new Date;$.setHours(0,0,0,0);const E=[...r()].sort().find(T=>new Date(T)>=$);E&&(b(n,E,!0),b(i,r()[r().length-1],!0),e.onRangeChange(s(n),s(i)))}var _=yf(),w=C(_);nt(w,22,r,$=>$,($,A)=>{var E=vf();E.__click=[df,h,A];var T=c(E),R=c(T),x=u(T,2);{var W=L=>{li(L,{size:16})},X=L=>{var z=Y(),ce=C(z);{var ye=q=>{oi(q,{size:16})},we=q=>{var le=Y(),ge=C(le);{var ne=te=>{hu(te,{size:16})};k(ge,te=>{Xa(A)==="cloud"&&te(ne)},!0)}v(q,le)};k(ce,q=>{Xa(A)==="moon"?q(ye):q(we,!1)},!0)}v(L,z)};k(x,L=>{Xa(A)==="sun"?L(W):L(X,!1)})}I((L,z)=>{Me(E,1,`btn btn-sm btn-secondary ${L??""}`),N(R,z)},[()=>g(A),()=>Dc(A)]),v($,E)});var P=u(w,2);{var S=$=>{var A=ff();v($,A)},D=$=>{var A=bf(),E=c(A);{var T=X=>{var L=pf();L.__click=[hf,m],v(X,L)};k(E,X=>{s(f)&&!s(l)&&X(T)})}var R=u(E,2);{var x=X=>{var L=mf();L.__click=[gf,p],v(X,L)},W=X=>{var L=_f();v(X,L)};k(R,X=>{s(o)?X(W,!1):X(x)})}v($,A)};k(P,$=>{s(d)?$(S):$(D,!1)})}v(t,_),Z()}Ye(["click"]);var xf=y("<fieldset><legend><!> </legend> <!></fieldset>");function ha(t,e){let r=fe(e,"bgClass",3,"bg-base-100");var a=xf(),n=c(a),i=c(n);{var o=f=>{const h=K(()=>e.iconComponent);var g=Y(),p=C(g);br(p,()=>s(h),(m,_)=>{_(m,{size:16,class:"mr-1"})}),v(f,g)};k(i,f=>{e.iconComponent&&f(o)})}var l=u(i),d=u(n,2);he(d,()=>e.children??oe),I(()=>{Me(a,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Me(n,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),N(l,` ${e.legend??""}`)}),v(t,a)}var Sf=()=>V.clearFilters(),$f=t=>V.setSearchQuery(t.currentTarget.value),Pf=()=>V.setSearchQuery(""),kf=()=>V.setGroupBy("none"),Ef=()=>V.setGroupBy("store"),Af=()=>V.setGroupBy("productType"),Tf=y(`<div class="alert alert-warning">Cette période contient des dates passées. Les achats ne sont plus
          possibles pour ces dates.</div>`),Df=y("<!> <!>",1),Mf=(t,e)=>V.toggleProductType(e),Nf=y("<button><!> </button>"),Cf=()=>V.toggleTemperature("frais"),If=()=>V.toggleTemperature("surgele"),Rf=()=>V.clearTypeAndTemperatureFilters(),Of=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),qf=y('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),jf=y('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button title="Filtrer les légumes ou produits à conserver au frais"><!> Frais</button> <button title="Filtrer les roduits à concerver au congélateur"><!> Surgelés</button></div> <!>',1),Lf=(t,e)=>V.toggleStore(e),Bf=y("<button> </button>"),zf=()=>V.clearStoreFilters(),Uf=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Hf=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Wf=(t,e)=>V.toggleWho(e),Gf=y("<button> </button>"),Qf=()=>V.clearWhoFilters(),Vf=y('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),Ff=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Kf=y('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Yf(t,e){J(e,!0);const r=K(()=>V.filters),a=K(()=>V.uniqueStores),n=K(()=>V.uniqueWho),i=K(()=>V.uniqueProductTypes);var o=Kf(),l=C(o),d=c(l),f=c(d);ri(f,{class:"h-5 w-5"});var h=u(d,2);h.__click=[Sf];var g=c(h);fa(g,{class:"h-4 w-4"});var p=u(l,2),m=c(p),_=u(c(m),2),w=c(_);Nu(w,{class:"h-4 w-4"});var P=u(w,2);P.__input=[$f];var S=u(P,2);S.__click=[Pf];var D=c(S);It(D,{class:"h-4 w-4"});var $=u(m,2),A=u(c($),2),E=c(A);E.__change=[kf];var T=u(E,2);T.__change=[Ef];var R=u(T,2);R.__change=[Af];var x=u($,2);{var W=q=>{ha(q,{legend:"Date incluses",bgClass:"bg-base-100",children:(le,ge)=>{var ne=Df(),te=C(ne);wf(te,{get availableDates(){return V.availableDates},get currentRange(){return V.dateRange},onRangeChange:(F,ee)=>V.setDateRange(F,ee)});var me=u(te,2);{var xe=F=>{var ee=Tf();v(F,ee)};k(me,F=>{V.hasPastDatesInRange&&F(xe)})}v(le,ne)},$$slots:{default:!0}})};k(x,q=>{V.hasSingleDateEvent||q(W)})}var X=u(x,2);{var L=q=>{ha(q,{legend:"Types & Température",get iconComponent(){return ci},children:(le,ge)=>{var ne=jf(),te=C(ne);nt(te,20,()=>s(i),B=>B,(B,re)=>{const de=K(()=>hn(re));var Pe=Nf();Pe.__click=[Mf,re];var H=c(Pe);br(H,()=>s(de).icon,(se,ke)=>{ke(se,{class:"mr-1 h-5 w-5"})});var Q=u(H);I(se=>{Me(Pe,1,`btn btn-sm ${se??""}`),N(Q,` ${s(de).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-secondary":s(r).selectedProductTypes.includes(re)?"btn-secondary":"btn-dash btn-secondary"]),v(B,Pe)});var me=u(te,2),xe=c(me);xe.__click=[Cf];var F=c(xe);ii(F,{class:"h-5 w-5"});var ee=u(xe,2);ee.__click=[If];var M=c(ee);Rn(M,{class:"h-5 w-5"});var ae=u(me,2);{var O=B=>{var re=Of();re.__click=[Rf];var de=c(re);fa(de,{size:16}),v(B,re)},ie=B=>{var re=qf();v(B,re)};k(ae,B=>{s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0?B(O):B(ie,!1)})}I((B,re)=>{Me(xe,1,`btn btn-sm ${B??""}`),Me(ee,1,`btn btn-sm ${re??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),v(le,ne)},$$slots:{default:!0}})};k(X,q=>{s(i).length>0&&q(L)})}var z=u(X,2);{var ce=q=>{ha(q,{legend:"Magasins",get iconComponent(){return gr},children:(le,ge)=>{var ne=Hf(),te=c(ne);nt(te,16,()=>s(a),F=>F,(F,ee)=>{var M=Bf();M.__click=[Lf,ee];var ae=c(M);I(O=>{Me(M,1,`btn btn-sm ${O??""}`),N(ae,ee)},[()=>s(r).selectedStores.length===0?"btn-soft btn-secondary":s(r).selectedStores.includes(ee)?"btn-secondary":"btn-dash btn-secondary"]),v(F,M)});var me=u(te,2);{var xe=F=>{var ee=Uf();ee.__click=[zf];var M=c(ee);fa(M,{size:16}),v(F,ee)};k(me,F=>{s(r).selectedStores.length>0&&F(xe)})}v(le,ne)},$$slots:{default:!0}})};k(z,q=>{s(a).length>0&&q(ce)})}var ye=u(z,2);{var we=q=>{ha(q,{legend:"Qui",get iconComponent(){return On},children:(le,ge)=>{var ne=Ff(),te=c(ne);nt(te,16,()=>s(n),F=>F,(F,ee)=>{var M=Gf();M.__click=[Wf,ee];var ae=c(M);I(O=>{Me(M,1,`btn btn-sm ${O??""}`),N(ae,ee)},[()=>s(r).selectedWho.length===0?" btn-soft btn-secondary":s(r).selectedWho.includes(ee)?" btn-secondary":"btn-dash btn-secondary"]),v(F,M)});var me=u(te,2);{var xe=F=>{var ee=Vf();ee.__click=[Qf];var M=c(ee);fa(M,{size:16}),v(F,ee)};k(me,F=>{s(r).selectedWho.length>0&&F(xe)})}v(le,ne)},$$slots:{default:!0}})};k(ye,q=>{s(n).length>0&&q(we)})}I(()=>{h.disabled=!V.hasFilters,Fl(P,s(r).searchQuery),S.disabled=!s(r).searchQuery,Ya(E,s(r).groupBy==="none"),Ya(T,s(r).groupBy==="store"),Ya(R,s(r).groupBy==="productType")}),v(t,o),Z()}Ye(["click","input","change"]);var Jf=y('<div class="tooltip text-xs font-normal"><!></div>');function Zf(t,e){let r=fe(e,"iconSize",3,24),a=e.icon||void 0;var n=Jf(),i=c(n);{var o=l=>{a(l,{get size(){return r()},class:`align-top
`})};k(i,l=>{e.icon&&l(o)})}I(()=>sr(n,"data-tip",e.tip)),v(t,n)}var Xf=y('<div class="text-primary-content flex items-center gap-2"><!> </div>'),eh=y('<div class="text-primary-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),th=y('<div class="font-semibold">Sur toute la période</div>'),rh=y('du <span class="font-semibold"> </span> au <span class="font-semibold"> </span>',1),ah=y('le <span class="font-semibold"> </span>',1),nh=(t,e,r)=>e.onOpenGroupEditModal("store",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),sh=(t,e,r)=>e.onOpenGroupEditModal("who",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),oh=(t,e,r)=>e.onOpenGroupPurchaseModal(s(r).map(a=>a.data)),ih=y(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),lh=y('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),ch=y('<div class="flex flex-wrap items-center justify-end gap-2"><div class="alert px-4 py-1" title="Contient des dates passées - actions non disponibles"><!> <span class="hidden @md:block">Période partiellement passée</span></div></div>'),uh=y('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 font-semibold @md:min-w-48"><!></div> <div class="text-primary-content"><!></div> <!></div>'),dh=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),vh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),fh=y('<div class="text-base-content/60 text-sm font-normal"> </div>'),hh=y('<div class="tooltip" data-tip="Ajouté manuellement, ne fait pas partie des recette"><!></div>'),ph=y('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),gh=y('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),mh=y('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),_h=y('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),bh=y('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),yh=y('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),wh=(t,e,r)=>e.onOpenModal(s(r).$id,"magasins"),xh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"magasins"),Sh=y('<div class="ml-1"><!></div>'),$h=y('<div class="ml-1"> </div> <!>',1),Ph=y('<div class="ml-1 text-sm font-medium">?</div>'),kh=(t,e,r)=>e.onOpenModal(s(r).$id,"volontaires"),Eh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"volontaires"),Ah=y('<span class="text-base-content/50 text-xs"> </span>'),Th=y('<div class="ml-1 flex gap-1"> <!></div>'),Dh=y('<div class="ml-1 text-sm font-medium">?</div>'),Mh=y('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),Nh=()=>V.showPastDatesWarningIfNeeded(),Ch=y('<div class="mx-4 flex gap-2 opacity-60"><button class="btn btn-ghost btn-xs" title="Période partiellement passée - cliquez pour voir les options"><!></button></div>'),Ih=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),Rh=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),Oh=y('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),qh=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),jh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),Lh=y('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),Bh=y("<span> </span>"),zh=y('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),Uh=(t,e,r,a)=>{t.stopPropagation(),e.onQuickValidation(s(r),s(a))},Hh=y('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><div class="cart-icon"></div> <span class="text-xs"> </span> <!></button>'),Wh=()=>V.showPastDatesWarningIfNeeded(),Gh=y('<button class="btn btn-sm btn-disabled ms-auto opacity-50" title="Contient des dates passées - achats non disponibles" disabled><!></button>'),Qh=y(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),Vh=(t,e,r)=>e.onOpenModal(s(r).$id,"achats"),Fh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"achats"),Kh=y('<span class="text-xs opacity-75"> </span>'),Yh=y('<div><div class="flex items-center gap-1"><!> <span class="text-sm font-medium text-nowrap"> </span></div> <!></div>'),Jh=y('<span class="text-base-content/50 text-xs italic">aucun</span>'),Zh=y('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap justify-end gap-1.5"><!> <!></div></div></div></div></div>'),Xh=y('<!> <div class="space-y-1"></div>',1),ep=y('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),tp=y('<div class="space-y-4 rounded-lg"></div> <!>',1);function rp(t,e){J(e,!0);const r={Package:Ua,MessageCircleQuestionMark:$u,ShoppingCart:yr,Clock:en,CircleCheck:vu,CircleX:$s,ClipboardCheck:fu,PackageCheck:Pu,Check:jr},a=K(()=>V.groupedFilteredProducts),n=K(()=>V.filters),i=K(()=>fr(V.dateRange.start)),o=K(()=>fr(V.dateRange.end)),l=K(()=>!V.isEventPassed&&!V.hasPastDatesInRange);var d=tp(),f=C(d);nt(f,21,()=>Object.entries(s(a)),([p,m])=>p,(p,m)=>{var _=K(()=>ba(s(m),2));let w=()=>s(_)[0];const S=K(()=>s(_)[1]);var D=Xh(),$=C(D);{var A=T=>{const R=K(()=>hn(w()));var x=uh(),W=c(x),X=c(W);{var L=te=>{var me=Xf(),xe=c(me);gr(xe,{size:20});var F=u(xe);I(()=>N(F,` ${w()??""} (${s(S).length??""})`)),v(te,me)},z=te=>{var me=Y(),xe=C(me);{var F=M=>{var ae=eh(),O=c(ae);br(O,()=>s(R).icon,(Pe,H)=>{H(Pe,{size:20})});var ie=u(O,2),B=c(ie),re=u(ie,2),de=c(re);I(()=>{N(B,s(R).displayName),N(de,`(${s(S).length??""})`)}),v(M,ae)},ee=M=>{var ae=bt();I(()=>N(ae,`📦 ${w()??""} (${s(S).length??""})`)),v(M,ae)};k(xe,M=>{s(n).groupBy==="productType"?M(F):M(ee,!1)},!0)}v(te,me)};k(X,te=>{s(n).groupBy==="store"?te(L):te(z,!1)})}var ce=u(W,2),ye=c(ce);{var we=te=>{var me=th();v(te,me)},q=te=>{var me=Y(),xe=C(me);{var F=M=>{var ae=rh(),O=u(C(ae)),ie=c(O),B=u(O,2),re=c(B);I(()=>{N(ie,s(i)),N(re,s(o))}),v(M,ae)},ee=M=>{var ae=ah(),O=u(C(ae)),ie=c(O);I(()=>N(ie,s(i))),v(M,ae)};k(xe,M=>{V.dateRange.start!==V.dateRange.end?M(F):M(ee,!1)},!0)}v(te,me)};k(ye,te=>{V.isFullRange()?te(we):te(q,!1)})}var le=u(ce,2);{var ge=te=>{var me=lh(),xe=c(me);xe.__click=[nh,e,S];var F=c(xe);gr(F,{size:16});var ee=u(F,4);Xr(ee,{size:16});var M=u(xe,2);M.__click=[sh,e,S];var ae=c(M);_a(ae,{size:16});var O=u(ae,4);Xr(O,{size:16});var ie=u(M,2);{var B=re=>{var de=ih();de.__click=[oh,e,S];var Pe=c(de);yr(Pe,{size:16});var H=u(Pe,4);Ss(H,{size:16}),v(re,de)};k(ie,re=>{s(S).some(de=>de.data.displayMissingQuantity!=="✅ Complet")&&re(B)})}v(te,me)},ne=te=>{var me=Y(),xe=C(me);{var F=ee=>{var M=ch(),ae=c(M),O=c(ae);en(O,{size:16}),v(ee,M)};k(xe,ee=>{V.hasPastDatesInRange&&ee(F)},!0)}v(te,me)};k(le,te=>{s(l)?te(ge):te(ne,!1)})}v(T,x)};k($,T=>{w()!==""&&T(A)})}var E=u($,2);nt(E,21,()=>s(S),T=>T.data.$id,(T,R)=>{const x=K(()=>s(R).data),W=K(()=>s(R).stats),X=K(()=>hn(s(x).productType)),L=K(()=>Sd(s(x).purchases||[])),z=K(()=>s(x).totalNeededOverrideParsed);var ce=Zh(),ye=c(ce),we=c(ye),q=c(we);q.__click=[dh,e,x],q.__keydown=[vh,e,x];var le=c(q),ge=c(le);br(ge,()=>s(X).icon,(ue,pe)=>{pe(ue,{class:"text-base-content/80 h-4 w-4"})});var ne=u(ge),te=u(ne);{var me=ue=>{var pe=fh(),Ne=c(pe);I(()=>N(Ne,`Ancien: ${s(x).previousNames[0]??""}`)),v(ue,pe)};k(te,ue=>{s(x).previousNames&&s(x).previousNames.length>0&&ue(me)})}var xe=u(te,2);{var F=ue=>{var pe=hh(),Ne=c(pe);Ps(Ne,{class:"text-warning h-4 w-4"}),v(ue,pe)};k(xe,ue=>{s(x).productHugoUuid||ue(F)})}var ee=u(le,2),M=c(ee);{var ae=ue=>{var pe=ph(),Ne=c(pe);ii(Ne,{class:"text-success h-4 w-4"}),v(ue,pe)};k(M,ue=>{s(x).pFrais&&ue(ae)})}var O=u(M,2);{var ie=ue=>{var pe=gh(),Ne=c(pe);Rn(Ne,{class:"text-info h-4 w-4"}),v(ue,pe)};k(O,ue=>{s(x).pSurgel&&ue(ie)})}var B=u(ee,2);{var re=ue=>{var pe=mh(),Ne=c(pe);ni(Ne,{class:"h-4 w-4 animate-spin"}),v(ue,pe)};k(B,ue=>{s(x).status==="isSyncing"&&ue(re)})}var de=u(B,2);{var Pe=ue=>{var pe=yh(),Ne=c(pe);nt(Ne,20,()=>s(W).concernedDates,Te=>Te,(Te,Le)=>{const je=K(()=>s(W).recipesByDate.get(Le)||[]);var Ge=Y(),Be=C(Ge);{var mt=tt=>{var Fe=_h(),Ve=c(Fe),rt=c(Ve);I((xt,dr)=>{sr(Fe,"data-tip",xt),N(rt,dr)},[()=>s(je).map(xt=>xt.r).join(", "),()=>new Date(Le).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),v(tt,Fe)},ft=tt=>{var Fe=bh(),Ve=c(Fe);I(rt=>N(Ve,rt),[()=>new Date(Le).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),v(tt,Fe)};k(Be,tt=>{s(je).length>0?tt(mt):tt(ft,!1)})}v(Te,Ge)}),v(ue,pe)};k(de,ue=>{s(W).concernedDates.length>0&&ue(Pe)})}var H=u(q,2);{var Q=ue=>{var pe=Mh(),Ne=c(pe);Ne.__click=[wh,e,x],Ne.__keydown=[xh,e,x];var Te=c(Ne);gr(Te,{size:18});var Le=u(Te,2);{var je=Ve=>{var rt=$h(),xt=C(rt),dr=c(xt),Qa=u(xt,2);{var Ht=Ar=>{var la=Sh(),pi=c(la);Zf(pi,{get tip(){return s(x).storeInfo.storeComment},get icon(){return Su},iconSize:14}),v(Ar,la)};k(Qa,Ar=>{s(x).storeInfo?.storeComment&&Ar(Ht)})}I(()=>N(dr,s(x).storeInfo.storeName)),v(Ve,rt)},Ge=Ve=>{var rt=Ph();v(Ve,rt)};k(Le,Ve=>{s(x).storeInfo?.storeName?Ve(je):Ve(Ge,!1)})}var Be=u(Ne,2);Be.__click=[kh,e,x],Be.__keydown=[Eh,e,x];var mt=c(Be);_a(mt,{size:18});var ft=u(mt,2);{var tt=Ve=>{var rt=Th(),xt=c(rt),dr=u(xt);{var Qa=Ht=>{var Ar=Ah(),la=c(Ar);I(()=>N(la,`+${s(x).who.length-2}`)),v(Ht,Ar)};k(dr,Ht=>{s(x).who.length>2&&Ht(Qa)})}I(Ht=>N(xt,`${Ht??""} `),[()=>s(x).who.slice(0,2).map(Ht=>Ht.slice(0,3)).join(" | ")]),v(Ve,rt)},Fe=Ve=>{var rt=Dh();v(Ve,rt)};k(ft,Ve=>{s(x).who&&s(x).who.length>0?Ve(tt):Ve(Fe,!1)})}I(()=>{Me(Ne,1,`btn btn-soft btn-sm group relative ${s(x).storeInfo?.storeName?"btn-success":""}`),Me(Be,1,`btn btn-sm btn-soft group relative ${s(x).who&&s(x).who?.length>0?"btn-success":""}`)}),v(ue,pe)},se=ue=>{var pe=Y(),Ne=C(pe);{var Te=je=>{var Ge=Ch(),Be=c(Ge);Be.__click=[Nh];var mt=c(Be);en(mt,{size:16}),v(je,Ge)},Le=je=>{var Ge=Oh(),Be=c(Ge);{var mt=Fe=>{var Ve=Ih(),rt=c(Ve);gr(rt,{size:16});var xt=u(rt);I(()=>N(xt,` ${s(x).storeInfo.storeName??""}`)),v(Fe,Ve)};k(Be,Fe=>{s(x).storeInfo?.storeName&&Fe(mt)})}var ft=u(Be,2);{var tt=Fe=>{var Ve=Rh(),rt=c(Ve);_a(rt,{size:16});var xt=u(rt);I(dr=>N(xt,` ${dr??""}`),[()=>s(x).who.join(", ")]),v(Fe,Ve)};k(ft,Fe=>{s(x).who&&s(x).who.length>0&&Fe(tt)})}v(je,Ge)};k(Ne,je=>{V.hasPastDatesInRange?je(Te):je(Le,!1)},!0)}v(ue,pe)};k(H,ue=>{s(l)?ue(Q):ue(se,!1)})}var ke=u(we,2),ve=c(ke);ve.__click=[qh,e,x],ve.__keydown=[jh,e,x];var qe=c(ve),G=c(qe),be=c(G);yu(be,{class:"h-4 w-4"});var We=u(G,2),Ue=c(We),Je=c(Ue);{var Ie=ue=>{var pe=Lh(),Ne=c(pe),Te=c(Ne),Le=u(Ne,2);Ps(Le,{class:"h-4 w-4"});var je=u(Le);I(()=>{N(Te,s(W).formattedQuantities),N(je,` ${s(z).totalOverride.q??""}
                          ${s(z).totalOverride.u??""}`)}),v(ue,pe)},et=ue=>{var pe=Bh(),Ne=c(pe);I(()=>N(Ne,s(W).formattedQuantities)),v(ue,pe)};k(Je,ue=>{s(z)?.totalOverride?ue(Ie):ue(et,!1)})}var zt=u(Ue,2);{var Ee=ue=>{var pe=zh(),Ne=c(pe),Te=c(Ne),Le=u(Te);za(Le,{class:"h-3 w-3"});var je=u(Ne,2),Ge=c(je),Be=u(Ge);di(Be,{class:"h-3 w-3"}),I(()=>{N(Te,`${s(W).nbRecipes??""} `),N(Ge,`${s(W).totalAssiettes??""} `)}),v(ue,pe)};k(zt,ue=>{(s(W).nbRecipes||s(W).totalAssiettes)&&ue(Ee)})}var De=u(qe,2);{var ze=ue=>{var pe=Hh();pe.__click=[Uh,e,x,W];var Ne=u(c(pe),2),Te=c(Ne),Le=u(Ne,2);{var je=Be=>{uu(Be,{size:18})},Ge=Be=>{du(Be,{size:18})};k(Le,Be=>{Dt.isMobile?Be(je):Be(Ge,!1)})}I(()=>{sr(pe,"title",`Acheter le manquant (${s(W).formattedMissingQuantities??""})`),N(Te,s(W).formattedMissingQuantities)}),v(ue,pe)},Ae=ue=>{var pe=Y(),Ne=C(pe);{var Te=je=>{var Ge=Gh();Ge.__click=[Wh];var Be=c(Ge);$s(Be,{size:24}),v(je,Ge)},Le=je=>{var Ge=Y(),Be=C(Ge);{var mt=ft=>{Ss(ft,{size:24,class:"text-success ms-auto"})};k(Be,ft=>{s(l)&&ft(mt)},!0)}v(je,Ge)};k(Ne,je=>{V.hasPastDatesInRange&&s(W).hasMissing?je(Te):je(Le,!1)},!0)}v(ue,pe)};k(De,ue=>{s(l)&&s(W).hasMissing?ue(ze):ue(Ae,!1)})}var Xe=u(De,2);{var dt=ue=>{var pe=Qh(),Ne=c(pe);cu(Ne,{size:18}),v(ue,pe)};k(Xe,ue=>{s(l)&&s(z)?.hasUnresolvedChangedSinceOverride&&ue(dt)})}var lt=u(ve,2);lt.__click=[Vh,e,x],lt.__keydown=[Fh,e,x];var st=c(lt),gt=c(st),Pt=c(gt);yr(Pt,{class:"h-4 w-4"});var kt=u(gt,2),Ut=u(st,2),vt=c(Ut);nt(vt,17,()=>s(L),xr,(ue,pe)=>{const Ne=K(()=>r[s(pe).icon]);var Te=Yh(),Le=c(Te),je=c(Le);br(je,()=>s(Ne),(tt,Fe)=>{Fe(tt,{class:"h-4 w-4"})});var Ge=u(je,2),Be=c(Ge),mt=u(Le,2);{var ft=tt=>{var Fe=Kh(),Ve=c(Fe);I(()=>N(Ve,`livré le: ${s(pe).deliveryDate??""}`)),v(tt,Fe)};k(mt,tt=>{s(pe).deliveryDate&&tt(ft)})}I(()=>{Me(Te,1,`badge badge-outline flex h-fit flex-col items-center gap-1 py-1 ${s(pe).badgeClass??""}`),N(Be,`${s(pe).quantity??""}
                          ${s(pe).unit??""}`)}),v(ue,Te)});var Rt=u(vt,2);{var ur=ue=>{var pe=Jh();v(ue,pe)};k(Rt,ue=>{s(L).length===0&&ue(ur)})}I(()=>{Me(ce,1,`card bg-base-100 border-base-300 ${s(x).status==="isSyncing"?"border-accent bg-accent/30 animate-pulse border-2":""}`),N(ne,`${s(x).productName??""} `),Me(Ue,1,`text-base font-bold ${s(W).hasMissing&&s(l)?"text-error":"text-success"}`),Me(kt,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${s(l)?"group-hover:opacity-100":""} sm:opacity-0`)}),v(T,ce)}),v(p,D)});var h=u(f,2);{var g=p=>{var m=ep();v(p,m)};k(h,p=>{Object.values(s(a)).flat().length===0&&p(g)})}v(t,d),Z()}Ye(["click","keydown"]);function Ts(t,e,r){s(e)||r.onClose()}var ap=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),np=(t,e)=>b(e,"empty"),sp=(t,e)=>b(e,"all"),op=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),ip=y("<!> ",1),lp=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <div><!></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function cp(t,e){J(e,!0);let r=U(!1),a=U(null),n=U(null),i=U(Oe(e.products.length>0&&e.products[0].storeInfo?e.products[0].storeInfo.storeName:"")),o=U(Oe(e.products.length>0&&e.products[0].storeInfo&&e.products[0].storeInfo.storeComment||"")),l=U(Oe({})),d=U("empty");Bt(()=>{const M={};e.products.forEach(ae=>{e.productIds.includes(ae.$id)&&(s(d)==="empty"?M[ae.$id]=!ae.storeInfo||!ae.storeInfo.storeName:M[ae.$id]=!0)}),b(l,M,!0)});const f=K(()=>e.products.map(M=>({id:M.$id,label:M.productName,title:M.productName,selected:s(l)[M.$id]}))),h=K(()=>s(f).filter(M=>M.selected)),g=K(()=>`Attribuer un magasin (${s(h).length} produits sélectionnés)`),p=K(()=>s(h).length===0?!1:s(i).trim().length>0);async function m(){if(!s(p)||s(r))return;b(a,null),b(n,null);const M=s(h).map(O=>O.id),ae=e.products.filter(O=>M.includes(O.$id));V.setSyncStatus(M,!0),Dt.backgroundOperation={isRunning:!0,name:`Mise à jour magasin (${M.length} produits)`,progress:0},e.onClose();try{const O={storeName:s(i).trim(),storeComment:s(o).trim()},ie=await Fo(M,ae,O);if(ie.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${ie.updatedCount} produits modifiés`),Qe.success(`Magasin mis à jour pour ${ie.updatedCount} produits.`),e.onSuccess?.(ie);else throw new Error(ie.error||"Erreur lors de la mise à jour")}catch(O){const ie=O instanceof Error?O.message:"Erreur inconnue";console.error("[StoreEditModal] Erreur mise à jour:",O),Qe.error(`Erreur mise à jour magasin: ${ie}`),V.clearSyncStatus()}finally{b(r,!1),Dt.backgroundOperation={isRunning:!1,name:"",progress:0}}}function _(M){s(l)[M]=!s(l)[M]}var w=lp(),P=c(w),S=c(P),D=c(S),$=c(D),A=u(D,2);A.__click=[Ts,r,e];var E=c(A);It(E,{class:"h-4 w-4"});var T=u(S,2),R=c(T);{var x=M=>{var ae=ap(),O=c(ae);oa(O,{class:"h-4 w-4"});var ie=u(O,2),B=c(ie);I(()=>N(B,s(a))),v(M,ae)};k(R,M=>{s(a)&&M(x)})}var W=u(R,2),X=c(W),L=c(X);Hr(L,{get suggestions(){return V.uniqueStores},get disabled(){return s(r)},id:"store-name-input",get value(){return s(i)},set value(M){b(i,M,!0)}});var z=u(X,2),ce=c(z);Wr(ce,{get disabled(){return s(r)},id:"store-comment-textarea",get value(){return s(o)},set value(M){b(o,M,!0)}});var ye=u(W,2),we=u(c(ye),2),q=c(we);q.__click=[np,d];var le=u(q,2);le.__click=[sp,d];var ge=u(we,2);ea(ge,{get items(){return s(f)},onToggleItem:_,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var ne=u(T,2),te=c(ne);te.__click=[Ts,r,e];var me=u(te,2);me.__click=m;var xe=c(me);{var F=M=>{var ae=op();v(M,ae)},ee=M=>{var ae=ip(),O=C(ae);jr(O,{class:"h-4 w-4"});var ie=u(O);I(()=>N(ie,` Appliquer à ${s(h).length??""} produit(s)`)),v(M,ae)};k(xe,M=>{s(r)?M(F):M(ee,!1)})}I(()=>{N($,s(g)),A.disabled=s(r),Me(q,1,`tab ${s(d)==="empty"?"tab-active":""}`),Me(le,1,`tab ${s(d)==="all"?"tab-active":""}`),te.disabled=s(r),me.disabled=s(r)||!s(p)}),v(t,w),Z()}Ye(["click"]);function Ds(t,e,r){s(e)||r.onClose()}var up=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),dp=(t,e)=>b(e,"empty"),vp=(t,e)=>b(e,"all"),fp=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),hp=y("<!> ",1),pp=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><div><!></div> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="text-base-content/70">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function gp(t,e){J(e,!0);let r=U(!1),a=U(null),n=U(null),i=U(Oe([])),o=U(""),l=U("empty"),d=U(Oe({}));Bt(()=>{const Q={};e.products.forEach(se=>{e.productIds.includes(se.$id)&&(s(l)==="empty"?Q[se.$id]=!se.who||se.who.length===0:Q[se.$id]=!0)}),b(d,Q,!0)});const f=K(()=>e.products.map(Q=>({id:Q.$id,label:Q.productName,title:Q.productName,selected:s(d)[Q.$id]}))),h=K(()=>s(f).filter(Q=>Q.selected)),g=K(()=>{const Q=new Set([...V.uniqueWho,...s(i)]);return Array.from(Q).map(se=>({id:se,label:se,selected:s(i).includes(se)}))}),p=K(()=>`Gérer les volontaires (${s(h).length} produits sélectionnés)`),m=K(()=>s(h).length===0?!1:s(i).length>0);async function _(){if(!s(m)||s(r))return;b(a,null),b(n,null);const Q=s(h).map(ke=>ke.id),se=e.products.filter(ke=>Q.includes(ke.$id));V.setSyncStatus(Q,!0),Dt.backgroundOperation={isRunning:!0,name:`Mise à jour volontaires (${Q.length} produits)`,progress:0},e.onClose();try{const ke=await Ko(Q,se,s(i),"replace");if(ke.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${ke.updatedCount} produits modifiés`),Qe.success(`Volontaires mis à jour pour ${ke.updatedCount} produits.`),e.onSuccess?.(ke);else throw new Error(ke.error||"Erreur lors de la mise à jour")}catch(ke){const ve=ke instanceof Error?ke.message:"Erreur inconnue";console.error("[WhoEditModal] Erreur mise à jour:",ke),Qe.error(`Erreur mise à jour volontaires: ${ve}`),V.clearSyncStatus()}finally{b(r,!1),Dt.backgroundOperation={isRunning:!1,name:"",progress:0}}}function w(Q){const se=Q.trim();se&&!s(i).includes(se)&&b(i,[...s(i),se],!0)}function P(Q){b(i,s(i).filter(se=>se!==Q),!0)}function S(Q){s(i).includes(Q)?P(Q):w(Q)}function D(){s(o).trim()&&(w(s(o)),b(o,""))}function $(Q){s(d)[Q]=!s(d)[Q]}var A=pp(),E=c(A),T=c(E),R=c(T),x=c(R),W=u(R,2);W.__click=[Ds,r,e];var X=c(W);It(X,{class:"h-4 w-4"});var L=u(T,2),z=c(L);{var ce=Q=>{var se=up(),ke=c(se);oa(ke,{class:"h-4 w-4"});var ve=u(ke,2),qe=c(ve);I(()=>N(qe,s(a))),v(Q,se)};k(z,Q=>{s(a)&&Q(ce)})}var ye=u(z,2),we=c(ye),q=c(we),le=c(q),ge=c(le);ia(ge,{get disabled(){return s(r)},onkeydown:Q=>{Q.key==="Enter"&&(Q.preventDefault(),D())},get value(){return s(o)},set value(Q){b(o,Q,!0)}});var ne=u(le,2);ne.__click=D;var te=c(ne);ui(te,{size:16});var me=u(q,2),xe=u(c(me),2);ea(xe,{get items(){return s(g)},onToggleItem:S,showIcon:!0,badgeSize:"btn-sm",badgeStyle:"btn-soft"});var F=u(ye,2),ee=u(c(F),2),M=c(ee);M.__click=[dp,l];var ae=u(M,2);ae.__click=[vp,l];var O=u(ee,2);ea(O,{get items(){return s(f)},onToggleItem:$,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var ie=u(L,2),B=c(ie);B.__click=[Ds,r,e];var re=u(B,2);re.__click=_;var de=c(re);{var Pe=Q=>{var se=fp();v(Q,se)},H=Q=>{var se=hp(),ke=C(se);jr(ke,{class:"h-4 w-4"});var ve=u(ke);I(()=>N(ve,` Appliquer à ${s(h).length??""} produit(s)`)),v(Q,se)};k(de,Q=>{s(r)?Q(Pe):Q(H,!1)})}I(Q=>{N(x,s(p)),W.disabled=s(r),ne.disabled=Q,Me(M,1,`tab ${s(l)==="empty"?"tab-active":""}`),Me(ae,1,`tab ${s(l)==="all"?"tab-active":""}`),B.disabled=s(r),re.disabled=s(r)||!s(m)},[()=>s(r)||!s(o).trim()]),v(t,A),Z()}Ye(["click"]);async function mp(t,e,r,a,n,i){if(!s(e).invoiceTotal||s(e).invoiceTotal<=0){b(r,"Le montant doit être supérieur à 0");return}b(a,!0),b(r,null);try{const o=V.currentMainId;if(!o)throw new Error("Aucun événement principal actif");s(n)?await Nn(s(n),{price:s(e).invoiceTotal,invoiceTotal:s(e).invoiceTotal,store:s(e).store,notes:s(e).notes,who:s(e).who}):await Jo(o,void 0,s(e).invoiceTotal,s(e).store,s(e).notes,s(e).who),i()}catch(o){console.error("Erreur sauvegarde dépense:",o),b(r,o.message,!0)}finally{b(a,!1)}}var _p=(t,e)=>e(!1),bp=y('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),yp=y('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),wp=(t,e)=>b(e,!0),xp=y('<button class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> Ajouter une dépense</button>'),Sp=y('<span class="loading loading-spinner loading-xs"></span>'),$p=y('<div class="text-error mt-2 text-xs"> </div>'),Pp=y('<div class="card bg-base-200 animate-in fade-in slide-in-from-top-4 shadow-md duration-300"><div class="card-body p-4"><h4 class="card-title text-sm"> </h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><!> <!> <!> <!></div> <div class="card-actions mt-2 justify-end"><button class="btn btn-sm btn-ghost">Annuler</button> <button class="btn btn-sm btn-primary"><!> </button></div> <!></div></div>'),kp=(t,e)=>e("date"),Ep=(t,e)=>e("store"),Ap=(t,e)=>e("who"),Tp=(t,e)=>e("amount"),Dp=y('<span class="text-base-content/70 italic"> </span>'),Mp=y('<span class="text-base-content/50 ml-1 text-xs"> </span>'),Np=y('<span class="font-medium"> </span> <!>',1),Cp=(t,e,r)=>e(s(r)),Ip=y('<tr class="hover"><td class="whitespace-nowrap"> </td><td class="max-w-xs truncate"><!></td><td> </td><td> </td><td class="text-right font-mono font-bold"> </td><td><button class="btn btn-ghost btn-square"><!></button></td></tr>'),Rp=y('<tr><td colspan="7" class="text-base-content/50 py-8 text-center">Aucune dépense trouvée</td></tr>'),Op=(t,e)=>e(!1),qp=(t,e)=>e(!1),jp=y('<dialog><div class="modal-box bg-base-100 flex h-[90vh] w-11/12 max-w-5xl flex-col p-0"><div class="border-base-300 bg-base-200 sticky top-0 z-10 flex items-center justify-between border-b p-4"><h3 class="flex items-center gap-2 text-lg font-bold"><!> Gestion des Dépenses</h3> <button class="btn btn-sm btn-circle btn-ghost">✕</button></div> <div class="flex-1 space-y-6 overflow-y-auto p-4"><div class="grid grid-cols-1 gap-4 md:grid-cols-3"><div class="stats bg-primary text-primary-content shadow"><div class="stat"><div class="stat-title text-primary-content/80">Total Global</div> <div class="stat-value"> </div> <div class="stat-desc text-primary-content/80"> </div></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Magasin</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Acheteur</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div></div> <div class="flex items-center justify-between"><h4 class="text-sm font-bold uppercase opacity-70">Liste des transactions</h4> <!></div> <!> <div class="bg-base-100 border-base-200 overflow-x-auto rounded-lg border"><table class="table-zebra table-xs table w-full"><thead class="bg-base-200 sticky top-0"><tr><th class="hover:bg-base-300 cursor-pointer"> </th><th>Description</th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer text-right"> </th><th><!></th></tr></thead><tbody><!><!></tbody></table></div></div> <div class="border-base-300 bg-base-200 sticky bottom-0 z-10 flex items-center justify-between border-t px-4 py-1"><button class="btn btn-ghost ms-auto">Fermer</button></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');function Lp(t,e){J(e,!0);let r=fe(e,"isOpen",15,!1),a=U(!1),n=U(null),i=U(!1),o=U(Oe({invoiceTotal:0,store:"",notes:"",who:""})),l=U(null);Bt(()=>{if(r()&&!s(l)){const Ee=localStorage.getItem("appwrite-user-name");Ee&&(s(o).who=Ee)}});let d=U("date"),f=U("desc"),h=K(()=>V.financialStats),g=K(()=>s(h).allPurchases),p=K(()=>{let Ee=[...s(g)];return Ee.sort((De,ze)=>{let Ae,Xe;switch(s(d)){case"date":Ae=new Date(De.orderDate||De.$createdAt).getTime(),Xe=new Date(ze.orderDate||ze.$createdAt).getTime();break;case"amount":Ae=De.invoiceTotal||De.price||0,Xe=ze.invoiceTotal||ze.price||0;break;case"store":Ae=(De.store||"").toLowerCase(),Xe=(ze.store||"").toLowerCase();break;case"who":Ae=(De.who||"").toLowerCase(),Xe=(ze.who||"").toLowerCase();break}return Ae<Xe?s(f)==="asc"?-1:1:Ae>Xe?s(f)==="asc"?1:-1:0}),Ee});function m(Ee){s(d)===Ee?b(f,s(f)==="asc"?"desc":"asc",!0):(b(d,Ee,!0),b(f,"desc"))}function _(){const Ee=localStorage.getItem("appwrite-user-name")||"";b(o,{invoiceTotal:0,store:"",notes:"",who:Ee},!0),b(l,null),b(i,!1)}function w(Ee){b(o,{invoiceTotal:Ee.invoiceTotal||Ee.price||0,store:Ee.store||"",notes:Ee.notes||"",who:Ee.who||""},!0),b(l,Ee.$id,!0),b(i,!0)}function P(Ee){return Ee?new Date(Ee).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"-"}function S(Ee){return(Ee||0).toFixed(2)+" €"}var D=jp(),$=c(D),A=c($),E=c(A),T=c(E);ei(T,{});var R=u(E,2);R.__click=[_p,r];var x=u(A,2),W=c(x),X=c(W),L=c(X),z=u(c(L),2),ce=c(z),ye=u(z,2),we=c(ye),q=u(X,2),le=u(c(q),2);nt(le,21,()=>Object.entries(s(h).byStore).sort((Ee,De)=>De[1]-Ee[1]),xr,(Ee,De)=>{var ze=K(()=>ba(s(De),2));let Ae=()=>s(ze)[0],Xe=()=>s(ze)[1];var dt=bp(),lt=c(dt),st=c(lt),gt=u(lt,2),Pt=c(gt);I(kt=>{N(st,Ae()),N(Pt,kt)},[()=>S(Xe())]),v(Ee,dt)});var ge=u(q,2),ne=u(c(ge),2);nt(ne,21,()=>Object.entries(s(h).byWho).sort((Ee,De)=>De[1]-Ee[1]),xr,(Ee,De)=>{var ze=K(()=>ba(s(De),2));let Ae=()=>s(ze)[0],Xe=()=>s(ze)[1];var dt=yp(),lt=c(dt),st=c(lt),gt=u(lt,2),Pt=c(gt);I(kt=>{N(st,Ae()),N(Pt,kt)},[()=>S(Xe())]),v(Ee,dt)});var te=u(W,2),me=u(c(te),2);{var xe=Ee=>{var De=xp();De.__click=[wp,i],v(Ee,De)};k(me,Ee=>{s(i)||Ee(xe)})}var F=u(te,2);{var ee=Ee=>{var De=Pp(),ze=c(De),Ae=c(ze),Xe=c(Ae),dt=u(Ae,2),lt=c(dt);jn(lt,{get disabled(){return s(a)},get value(){return s(o).invoiceTotal},set value(Te){s(o).invoiceTotal=Te}});var st=u(lt,2);Hr(st,{get suggestions(){return V.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(Te){s(o).store=Te}});var gt=u(st,2);ia(gt,{get suggestions(){return V.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(Te){s(o).who=Te}});var Pt=u(gt,2);Wr(Pt,{get disabled(){return s(a)},get value(){return s(o).notes},set value(Te){s(o).notes=Te}});var kt=u(dt,2),Ut=c(kt);Ut.__click=_;var vt=u(Ut,2);vt.__click=[mp,o,n,a,l,_];var Rt=c(vt);{var ur=Te=>{var Le=Sp();v(Te,Le)};k(Rt,Te=>{s(a)&&Te(ur)})}var ue=u(Rt),pe=u(kt,2);{var Ne=Te=>{var Le=$p(),je=c(Le);I(()=>N(je,s(n))),v(Te,Le)};k(pe,Te=>{s(n)&&Te(Ne)})}I(()=>{N(Xe,s(l)?"Modifier la dépense":"Nouvelle Dépense"),vt.disabled=s(a),N(ue,` ${s(l)?"Enregistrer":"Ajouter"}`)}),v(Ee,De)};k(F,Ee=>{s(i)&&Ee(ee)})}var M=u(F,2),ae=c(M),O=c(ae),ie=c(O),B=c(ie);B.__click=[kp,m];var re=c(B),de=u(B,2);de.__click=[Ep,m];var Pe=c(de),H=u(de);H.__click=[Ap,m];var Q=c(H),se=u(H);se.__click=[Tp,m];var ke=c(se),ve=u(se),qe=c(ve);Eu(qe,{size:14});var G=u(O),be=c(G);nt(be,17,()=>s(p),Ee=>Ee.$id,(Ee,De)=>{var ze=Ip(),Ae=c(ze),Xe=c(Ae),dt=u(Ae),lt=c(dt);{var st=Te=>{var Le=Dp(),je=c(Le);I(()=>N(je,s(De).notes||"-")),v(Te,Le)},gt=Te=>{var Le=Np(),je=C(Le),Ge=c(je),Be=u(je,2);{var mt=ft=>{var tt=Mp(),Fe=c(tt);I(()=>N(Fe,`- ${s(De).notes??""}`)),v(ft,tt)};k(Be,ft=>{s(De).notes&&ft(mt)})}I(()=>N(Ge,s(De)._productName||"Produit inconnu")),v(Te,Le)};k(lt,Te=>{s(De).status==="expense"?Te(st):Te(gt,!1)})}var Pt=u(dt),kt=c(Pt),Ut=u(Pt),vt=c(Ut),Rt=u(Ut),ur=c(Rt),ue=u(Rt),pe=c(ue);pe.__click=[Cp,w,De];var Ne=c(pe);Xr(Ne,{size:14}),I((Te,Le)=>{N(Xe,Te),N(kt,s(De).store||"-"),N(vt,s(De).who||"-"),N(ur,Le)},[()=>P(s(De).orderDate||s(De).$createdAt),()=>S(s(De).invoiceTotal||s(De).price)]),v(Ee,ze)});var We=u(be);{var Ue=Ee=>{var De=Rp();v(Ee,De)};k(We,Ee=>{s(p).length===0&&Ee(Ue)})}var Je=u(x,2),Ie=c(Je);Ie.__click=[Op,r];var et=u($,2),zt=c(et);zt.__click=[qp,r],I(Ee=>{Me(D,1,`modal ${r()?"modal-open":""}`),N(ce,Ee),N(we,`${s(g).length??""} transactions`),N(re,`Date ${s(d)==="date"?s(f)==="asc"?"↑":"↓":""}`),N(Pe,`Magasin ${s(d)==="store"?s(f)==="asc"?"↑":"↓":""}`),N(Q,`Qui ${s(d)==="who"?s(f)==="asc"?"↑":"↓":""}`),N(ke,`Montant ${s(d)==="amount"?s(f)==="asc"?"↑":"↓":""}`)},[()=>S(s(h).totalGlobal)]),v(t,D),Z()}Ye(["click"]);var Bp=y("<div><!></div>"),zp=y('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Up(t,e){J(e,!0);let r=U(!1),a=fe(e,"width",3,"80"),n=fe(e,"bgClass",3,"bg-base-300");const i=K(()=>"w-"+a());var o=Y(),l=C(o);{var d=h=>{var g=Bp(),p=c(g);he(p,()=>e.children??oe),I(()=>Me(g,1,`${n()??""} ${(s(i)?s(i):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),v(h,g)},f=h=>{var g=zp(),p=C(g),m=c(p),_=u(m,2),w=u(c(_),2),P=c(w);he(P,()=>e.children??oe);var S=u(p,2),D=c(S),$=c(D);ri($,{class:"h-6 w-6"}),dn(m,()=>s(r),A=>b(r,A)),v(h,g)};k(l,h=>{Dt.isMobile?h(f,!1):h(d)})}v(t,o),Z()}function Hp(t,e){b(e,!0)}var Wp=(t,e)=>b(e,!0),Gp=y('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button> <button class="btn btn-sm btn-primary" title="Ajouter un produit manuellement"><!> Produit</button></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Qp(t,e){J(e,!0);const r="100",a=K(()=>V.stats);let n=U(null),i=U("recettes"),o=U(!1),l=U(!1),d=U(Oe([])),f=U(Oe([])),h=U(!1),g=U(Oe([])),p=U(!1);function m(O,ie="recettes"){b(i,ie,!0),b(n,O,!0)}function _(){b(n,null)}function w(O,ie,B){b(d,ie,!0),b(f,B,!0),b(O==="who"?o:l,!0)}function P(O){(!O||O==="who")&&b(o,!1),(!O||O==="store")&&b(l,!1),b(d,[],!0),b(f,[],!0)}function S(O){console.log(`[ProductsTable] Modification groupée réussie: ${O.updatedCount} produits`)}function D(O){const ie=O.filter(B=>V.getProductModelById(B.$id)?.stats.hasMissing);console.log(`[ProductsTable] openGroupPurchaseModal: ${O.length} produits reçus → ${ie.length} produits avec quantités manquantes`),b(g,ie,!0),b(h,!0)}function $(){b(h,!1),b(g,[],!0)}function A(){console.log("[ProductsTable] Achat groupé créé avec succès"),$()}async function E(O,ie){try{if(!V.currentMainId)throw new Error("mainId non disponible");const B=ie.missingQuantities||[];if(B.length===0){console.log("Aucune quantité manquante à valider pour ce produit dans cette période");return}const re=B.filter(Pe=>Pe.q<0).map(Pe=>({...Pe,q:Math.abs(Pe.q)})).map(Pe=>{const{quantity:H,unit:Q}=pn(Pe.q,Pe.u);return{q:H,u:Q}});let de=O.$id;O.isSynced||(console.log(`[ProductsTable] Produit ${O.$id} local, création pour validation rapide...`),de=(await Wt(O.$id,{},H=>V.getEnrichedProductById(H))).$id,console.log(`[ProductsTable] Produit sync créé: ${de}`)),await Yo(V.currentMainId,de,re,{store:O.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${O.productName}`)}catch(B){console.error("[ProductsTable] Erreur validation rapide:",B),alert("Erreur lors de la validation rapide: "+B.message)}}let T=U(!1);var R=Gp(),x=c(R),W=c(x),X=c(W);_u(X,{class:"mr-1 h-4 w-4"});var L=u(X),z=u(W,2);z.__click=[Wp,T];var ce=c(z);ei(ce,{class:"mr-1 h-4 w-4"});var ye=u(z,2);ye.__click=[Hp,p];var we=c(ye);In(we,{class:"mr-1 h-4 w-4"});var q=u(x,2);Up(q,{width:r,children:(O,ie)=>{Yf(O,{})},$$slots:{default:!0}});var le=u(q,2);rp(le,{onOpenModal:m,onOpenGroupEditModal:w,onOpenGroupPurchaseModal:D,onQuickValidation:E});var ge=u(le,2);{let O=K(()=>s(n)||"");uf(ge,{get productId(){return s(O)},get initialTab(){return s(i)},onClose:_})}var ne=u(ge,2);{var te=O=>{gp(O,{get productIds(){return s(d)},get products(){return s(f)},onClose:()=>P("who"),onSuccess:S})};k(ne,O=>{s(o)&&O(te)})}var me=u(ne,2);{var xe=O=>{cp(O,{get productIds(){return s(d)},get products(){return s(f)},onClose:()=>P("store"),onSuccess:S})};k(me,O=>{s(l)&&O(xe)})}var F=u(me,2);{var ee=O=>{pd(O,{get products(){return s(g)},onClose:$,onSuccess:A})};k(F,O=>{s(h)&&O(ee)})}var M=u(F,2);wd(M,{get open(){return s(p)},set open(O){b(p,O,!0)}});var ae=u(M,2);Lp(ae,{get isOpen(){return s(T)},set isOpen(O){b(T,O,!0)}}),I(()=>{Me(R,1,`space-y-6 ${Dt.isMobile?"":"ml-100"}`),N(L,` ${s(a).total??""}`)}),v(t,R),Z()}Ye(["click"]);Ji();var Vp=y('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function Fp(t){var e=Vp();v(t,e)}var Kp=y('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Yp(t,e){var r=Kp(),a=u(c(r),2),n=u(c(a),2),i=c(n);I(()=>N(i,e.message)),v(t,r)}var Jp=y('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Zp(t,e){var r=Jp(),a=c(r),n=c(a);oa(n,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=u(n,2),o=u(c(i),2),l=c(o);I(()=>N(l,e.message||"Erreur inconnue")),v(t,r)}function Xp(t){t.stopPropagation()}var eg=(t,e)=>t.key==="Escape"&&e(),tg=y('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),rg=y('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),ag=(t,e)=>b(e,!1),ng=y('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),sg=(t,e)=>b(e,!0),og=(t,e)=>b(e,!1),ig=y(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),lg=(t,e)=>b(e,!0),cg=y('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),ug=y('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function dg(t,e){J(e,!0);let r=fe(e,"onClose",3,()=>{}),a=fe(e,"onAuthSuccess",3,()=>{}),n=U(!0),i=U(!1),o=U(""),l=U(""),d=U(""),f=U(""),h=U(""),g=U(""),p=U(""),m=U(""),_=U(!1);function w(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function P(ge){if(ge.preventDefault(),!s(d)||!s(f)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{await(await w().getAccount()).createEmailPasswordSession(s(d),s(f)),b(l,"Connexion réussie !"),setTimeout(()=>{a()()},1e3)}catch(ne){console.error("Erreur de connexion:",ne),b(o,ne.message||"Erreur lors de la connexion",!0)}finally{b(i,!1)}}async function S(ge){if(ge.preventDefault(),!s(h)||!s(g)||!s(p)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{const te=await w().getAccount();await te.create("unique()",s(g),s(p),s(h)),await te.createEmailPasswordSession(s(g),s(p)),b(l,"Compte créé et connecté !"),setTimeout(()=>{a()()},1e3)}catch(ne){console.error("Erreur d'inscription:",ne),b(o,ne.message||"Erreur lors de la création du compte",!0)}finally{b(i,!1)}}async function D(ge){if(ge.preventDefault(),!s(m)){b(o,"Veuillez entrer votre email");return}b(i,!0),b(o,"");try{await(await w().getAccount()).createRecovery(s(m),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(_,!1),b(m,"")},2e3)}catch(ne){console.error("Erreur mot de passe oublié:",ne),b(o,ne.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(i,!1)}}function $(){s(i)||r()()}Bt(()=>{(s(n)||s(_))&&(b(o,""),b(l,""))});var A=ug();A.__click=$,A.__keydown=[eg,$];var E=c(A);E.__click=[Xp];var T=c(E),R=c(T),x=c(R),W=u(R,2);W.__click=$;var X=u(T,2),L=c(X);{var z=ge=>{var ne=tg(),te=c(ne);I(()=>N(te,s(o))),v(ge,ne)};k(L,ge=>{s(o)&&ge(z)})}var ce=u(L,2);{var ye=ge=>{var ne=rg(),te=c(ne);I(()=>N(te,s(l))),v(ge,ne)};k(ce,ge=>{s(l)&&ge(ye)})}var we=u(ce,2);{var q=ge=>{var ne=ng(),te=C(ne),me=c(te),xe=u(c(me),2),F=u(me,2),ee=c(F),M=u(te,2),ae=c(M);ae.__click=[ag,_],I(()=>{xe.disabled=s(i),F.disabled=s(i),N(ee,s(i)?"Envoi...":"Envoyer l'email de réinitialisation"),ae.disabled=s(i)}),ma("submit",te,D),Ke(xe,()=>s(m),O=>b(m,O)),v(ge,ne)},le=ge=>{var ne=Y(),te=C(ne);{var me=F=>{var ee=ig(),M=C(ee),ae=c(M),O=u(c(ae),2),ie=u(ae,2),B=u(c(ie),2),re=u(ie,2),de=c(re),Pe=u(M,2),H=c(Pe);H.__click=[sg,_];var Q=u(H,2),se=u(c(Q));se.__click=[og,n],I(()=>{O.disabled=s(i),B.disabled=s(i),re.disabled=s(i),N(de,s(i)?"Connexion...":"Se connecter"),H.disabled=s(i),se.disabled=s(i)}),ma("submit",M,P),Ke(O,()=>s(d),ke=>b(d,ke)),Ke(B,()=>s(f),ke=>b(f,ke)),v(F,ee)},xe=F=>{var ee=cg(),M=C(ee),ae=c(M),O=u(c(ae),2),ie=u(ae,2),B=u(c(ie),2),re=u(ie,2),de=u(c(re),2),Pe=u(re,2),H=c(Pe),Q=u(M,2),se=u(c(Q));se.__click=[lg,n],I(()=>{O.disabled=s(i),B.disabled=s(i),de.disabled=s(i),Pe.disabled=s(i),N(H,s(i)?"Création...":"Créer un compte"),se.disabled=s(i)}),ma("submit",M,S),Ke(O,()=>s(h),ke=>b(h,ke)),Ke(B,()=>s(g),ke=>b(g,ke)),Ke(de,()=>s(p),ke=>b(p,ke)),v(F,ee)};k(te,F=>{s(n)?F(me):F(xe,!1)},!0)}v(ge,ne)};k(we,ge=>{s(_)?ge(q):ge(le,!1)})}I(()=>{N(x,s(_)?"Mot de passe oublié":s(n)?"Connexion":"Inscription"),W.disabled=s(i)}),v(t,A),Z()}Ye(["click","keydown"]);var vg=(t,e,r,a)=>e(s(r),s(a)),fg=y('<button class="btn btn-sm btn-primary"> </button>'),hg=(t,e,r)=>e(s(r)),pg=y('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),gg=(t,e,r)=>e(s(r)),mg=y('<button class="btn btn-ghost btn-sm btn-circle absolute top-1 right-1" title="Fermer" aria-label="Fermer la notification"><!></button>'),_g=y('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!> <!></div></div></div>'),bg=y("<div></div>");function yg(t,e){J(e,!0);let r=fe(e,"position",3,"toast-right toast-bottom"),a=fe(e,"padding",3,"md");const n=K(()=>a()==="sm"?"px-2 py-0.5":""),i=K(()=>Qe.toasts);function o(g){return g==="success"||g==="info"}function l(g){Qe.dismiss(g.id)}function d(g){e.onShowDetails?.({id:g.id,message:g.message,details:g.details})}function f(g,p){p.onClick()}var h=bg();nt(h,21,()=>s(i),g=>g.id,(g,p)=>{var m=_g(),_=c(m),w=c(_),P=c(w);{var S=L=>{ni(L,{class:"h-5 w-5 animate-spin"})};k(P,L=>{s(p).state==="loading"&&L(S)})}var D=u(P,2),$=c(D),A=u(w,2),E=c(A);{var T=L=>{var z=Y(),ce=C(z);nt(ce,17,()=>s(p).actions,xr,(ye,we)=>{var q=fg();q.__click=[vg,f,p,we];var le=c(q);I(()=>N(le,s(we).label)),v(ye,q)}),v(L,z)};k(E,L=>{s(p).actions&&s(p).actions.length>0&&L(T)})}var R=u(E,2);{var x=L=>{var z=pg();z.__click=[hg,d,p];var ce=c(z);ti(ce,{class:"h-3 w-3"}),v(L,z)};k(R,L=>{s(p).details&&L(x)})}var W=u(R,2);{var X=L=>{var z=mg();z.__click=[gg,l,p];var ce=c(z);It(ce,{class:"h-4 w-4"}),v(L,z)};k(W,L=>{(s(p).state==="error"||s(p).state==="warning"||!o(s(p).state))&&L(X)})}I(()=>{Me(m,1,`alert alert-${s(p).state??""} max-w-sm ${s(n)??""} shadow-lg`),N($,s(p).message)}),v(g,m)}),I(()=>Me(h,1,`toast ${r()??""} z-50`)),v(t,h),Z()}Ye(["click"]);var wg=y('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function xg(t){var e=wg(),r=c(e),a=u(r,2);li(a,{class:"swap-on fill-current"});var n=u(a,2);oi(n,{class:"swap-off fill-current"}),v(t,e)}function Sg(t,e){b(e,!0)}var $g=y('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),Pg=y('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),kg=y('<div class="text-base-content/60"> </div>'),Eg=y('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),Ag=y('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),Tg=y('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Dg=y('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),Mg=y('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function Ng(t,e){J(e,!0);let r,a=U(null),n=U(!0),i=U(!1),o=U(!1);function l(E,T,R){localStorage.setItem("appwrite-user-email",E),localStorage.setItem("appwrite-user-name",T)}async function d(){const E=xs();r=tu(E);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const x=await(await window.AppwriteClient.getAccount()).get();l(x.email,x.name),await V.initialize(r,E)}catch(T){const R=T instanceof Error?T.message:"Erreur lors de l'initialisation";b(a,R,!0),console.error("[App] Erreur initialisation:",T)}finally{b(n,!1)}}$o(async()=>{await d()});async function f(){b(o,!1),b(n,!0),b(a,null),await d()}sc(()=>{V.destroy()});async function h(){if(!(!r||s(i))){b(i,!0);try{const E=xs();await V.forceReload(r,E)}catch(E){console.error("[App] Erreur lors du rechargement forcé:",E)}finally{b(i,!1)}}}const g=K(()=>s(a)||V.error),p=K(()=>s(n)||V.loading);var m=Mg(),_=C(m),w=c(_);yg(w,{});var P=u(w,2);{var S=E=>{Fp(E)},D=E=>{var T=Dg(),R=C(T),x=c(R),W=c(x),X=u(c(W),2),L=c(X);{var z=B=>{var re=$g();v(B,re)};k(L,B=>{V.realtimeConnected&&B(z)})}var ce=u(L,2);{var ye=B=>{var re=Pg();v(B,re)};k(ce,B=>{V.syncing&&B(ye)})}var we=u(ce,2);{var q=B=>{var re=kg(),de=c(re);I(Pe=>N(de,`Maj: ${Pe??""}`),[()=>new Date(V.lastSync).toLocaleTimeString()]),v(B,re)};k(we,B=>{V.lastSync&&B(q)})}var le=u(we,2);xg(le);var ge=u(le,2);{var ne=B=>{var re=Eg();let de;re.__click=h;var Pe=c(re);Tu(Pe,{class:"h-4 w-4"}),I(H=>{de=Me(re,1,"btn btn-outline btn-sm",null,de,H),re.disabled=s(i)||V.loading},[()=>({loading:s(i)||V.loading})]),v(B,re)};k(ge,B=>{s(a)||B(ne)})}var te=u(ge,2);{var me=B=>{var re=Ag(),de=c(re);de.__click=[Sg,o];var Pe=c(de);xu(Pe,{class:"mr-2 h-4 w-4"}),v(B,re)};k(te,B=>{s(a)&&B(me)})}var xe=u(R,2),F=c(xe);{var ee=B=>{Zp(B,{get message(){return s(g)}})},M=B=>{var re=Y(),de=C(re);{var Pe=H=>{Yp(H,{get message(){return s(g)}})};k(de,H=>{s(g)&&H(Pe)},!0)}v(B,re)};k(F,B=>{s(a)?B(ee):B(M,!1)})}var ae=u(F,2);{var O=B=>{Qp(B,{})},ie=B=>{var re=Y(),de=C(re);{var Pe=H=>{var Q=Tg();v(H,Q)};k(de,H=>{!V.loading&&!s(a)&&H(Pe)},!0)}v(B,re)};k(ae,B=>{V.enrichedProducts.length>0?B(O):B(ie,!1)})}v(E,T)};k(P,E=>{s(p)?E(S):E(D,!1)})}var $=u(_,2);{var A=E=>{dg(E,{onClose:()=>b(o,!1),onAuthSuccess:f})};k($,E=>{s(o)&&E(A)})}v(t,m),Z()}Ye(["click"]);const hi=document.getElementById("app_products");if(!hi)throw new Error("Élément target non trouvé: #app_products");Ol(Ng,{target:hi});
