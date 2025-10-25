(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const $o=!1;var Xn=Array.isArray,wl=Array.prototype.indexOf,rs=Array.from,qa=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,Sl=Object.getOwnPropertyDescriptors,xl=Object.prototype,El=Array.prototype,ko=Object.getPrototypeOf,Ms=Object.isExtensible;function tn(e){return typeof e=="function"}const se=()=>{};function $l(e){for(var t=0;t<e.length;t++)e[t]()}function Po(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function To(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ot=2,ns=4,as=8,kr=16,Zt=32,Pr=64,ss=128,gt=256,Hn=512,Je=1024,ut=2048,dr=4096,St=8192,Tr=16384,os=32768,Nr=65536,Cs=1<<17,kl=1<<18,Yr=1<<19,Pl=1<<20,Ba=1<<21,Fn=1<<22,Sr=1<<23,xr=Symbol("$state"),No=Symbol("legacy props"),Tl=Symbol(""),ln=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Ao(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Nl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Al(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Dl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Il(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ml(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Cl(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Rl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ol(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ql(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Bl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ea=1,ta=2,Do=4,Ll=8,jl=16,zl=1,Vl=2,Wl=4,Ul=8,Gl=16,Hl=1,Kl=2,He=Symbol(),Ql="http://www.w3.org/1999/xhtml",Yl="http://www.w3.org/2000/svg",Zl="@attach";function Jl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Xl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Fl=!1;function Io(e){return e===this.v}function ec(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Mo(e){return!ec(e,this.v)}let Zr=!1,tc=!1;function rc(){Zr=!0}let qe=null;function Vr(e){qe=e}function G(e,t=!1,r){qe={p:qe,c:null,e:null,s:e,x:null,l:Zr&&!t?{s:null,u:null,$:[]}:null}}function H(e){var t=qe,r=t.e;if(r!==null){t.e=null;for(var n of r)Yo(n)}return qe=t.p,{}}function kn(){return!Zr||qe!==null&&qe.l===null}let wr=[];function Co(){var e=wr;wr=[],$l(e)}function Er(e){if(wr.length===0&&!cn){var t=wr;queueMicrotask(()=>{t===wr&&Co()})}wr.push(e)}function nc(){for(;wr.length>0;)Co()}const ac=new WeakMap;function Ro(e){var t=te;if(t===null)return ae.f|=Sr,e;if((t.f&os)===0){if((t.f&ss)===0)throw!t.parent&&e instanceof Error&&Oo(e),e;t.b.error(e)}else Wr(e,t)}function Wr(e,t){for(;t!==null;){if((t.f&ss)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&Oo(e),e}function Oo(e){const t=ac.get(e);t&&(qa(e,"message",{value:t.message}),qa(e,"stack",{value:t.stack}))}const On=new Set;let xe=null,Bn=null,La=new Set,Mt=[],ra=null,ja=!1,cn=!1;class pt{current=new Map;#t=new Map;#r=new Set;#c=0;#u=null;#s=[];#a=[];#o=[];#n=[];#i=[];#d=[];skipped_effects=new Set;process(t){Mt=[],Bn=null;var r=pt.apply(this);for(const s of t)this.#f(s);if(this.#c===0){this.#v();var n=this.#a,a=this.#o;this.#a=[],this.#o=[],this.#n=[],Bn=this,xe=null,Rs(n),Rs(a),Bn=null,this.#u?.resolve()}else this.#l(this.#a),this.#l(this.#o),this.#l(this.#n);r();for(const s of this.#s)_n(s);this.#s=[]}#f(t){t.f^=Je;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Zt|Pr))!==0,s=a&&(n&Je)!==0,o=s||(n&St)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){a?r.f^=Je:(n&ns)!==0?this.#o.push(r):(n&Je)===0&&((n&Fn)!==0&&r.b?.is_pending()?this.#s.push(r):oa(r)&&((r.f&kr)!==0&&this.#n.push(r),_n(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#l(t){for(const r of t)((r.f&ut)!==0?this.#i:this.#d).push(r),rt(r,Je);t.length=0}capture(t,r){this.#t.has(t)||this.#t.set(t,r),this.current.set(t,t.v)}activate(){xe=this}deactivate(){xe=null}flush(){if(Mt.length>0){if(this.activate(),qo(),xe!==null&&xe!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of La)if(La.delete(t),t(),xe!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),On.size>1){this.#t.clear();let t=!0;for(const r of On){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;Bo(n)}if(Mt.length>0){xe=r;const n=pt.apply(r);for(const a of Mt)r.#f(a);Mt=[],n()}}xe=null}On.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#i)rt(t,ut),$r(t);for(const t of this.#d)rt(t,dr),$r(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=Po()).promise}static ensure(){if(xe===null){const t=xe=new pt;On.add(xe),cn||pt.enqueue(()=>{xe===t&&t.flush()})}return xe}static enqueue(t){Er(t)}static apply(t){return se}}function sc(e){var t=cn;cn=!0;try{for(var r;;){if(nc(),Mt.length===0&&(xe?.flush(),Mt.length===0))return ra=null,r;qo()}}finally{cn=t}}function qo(){var e=Lr;ja=!0;try{var t=0;for(Ls(!0);Mt.length>0;){var r=pt.ensure();if(t++>1e3){var n,a;oc()}r.process(Mt),sr.clear()}}finally{ja=!1,Ls(e),ra=null}}function oc(){try{Ml()}catch(e){Wr(e,ra)}}let br=null;function Rs(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Tr|St))===0&&oa(n)&&(br=[],_n(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Xo(n):n.fn=null),br?.length>0)){sr.clear();for(const a of br)_n(a);br=[]}}br=null}}function Bo(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&ot)!==0?Bo(t):(r&(Fn|kr))!==0&&(rt(t,ut),$r(t))}}function $r(e){for(var t=ra=e;t.parent!==null;){t=t.parent;var r=t.f;if(ja&&t===te&&(r&kr)!==0)return;if((r&(Pr|Zt))!==0){if((r&Je)===0)return;t.f^=Je}}Mt.push(t)}function Lo(e){let t=0,r=cr(0),n;return()=>{Sc()&&(i(r),fs(()=>(t===0&&(n=Jr(()=>e(()=>Ct(r)))),t+=1,()=>{Er(()=>{t-=1,t===0&&(n?.(),n=void 0,Ct(r))})})))}}var ic=Nr|Yr|ss;function lc(e,t,r){new cc(e,t,r)}class cc{parent;#t=!1;#r;#c=null;#u;#s;#a;#o=null;#n=null;#i=null;#d=null;#f=0;#l=0;#v=!1;#h=null;#p=()=>{this.#h&&Ur(this.#h,this.#f)};#e=Lo(()=>(this.#h=cr(this.#f),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#s=n,this.parent=te.b,this.#t=!!this.#u.pending,this.#a=vr(()=>{te.b=this;{try{this.#o=Ze(()=>n(this.#r))}catch(a){this.error(a)}this.#l>0?this.#g():this.#t=!1}},ic)}#S(){try{this.#o=Ze(()=>this.#s(this.#r))}catch(t){this.error(t)}this.#t=!1}#x(){const t=this.#u.pending;t&&(this.#n=Ze(()=>t(this.#r)),pt.enqueue(()=>{this.#o=this.#_(()=>(pt.ensure(),Ze(()=>this.#s(this.#r)))),this.#l>0?this.#g():(or(this.#n,()=>{this.#n=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#_(t){var r=te,n=ae,a=qe;qt(this.#a),st(this.#a),Vr(this.#a.ctx);try{return t()}catch(s){return Ro(s),null}finally{qt(r),st(n),Vr(a)}}#g(){const t=this.#u.pending;this.#o!==null&&(this.#d=document.createDocumentFragment(),uc(this.#o,this.#d)),this.#n===null&&(this.#n=Ze(()=>t(this.#r)))}#w(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#w(t);return}this.#l+=t,this.#l===0&&(this.#t=!1,this.#n&&or(this.#n,()=>{this.#n=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),Er(()=>{pt.ensure().flush()}))}update_pending_count(t){this.#w(t),this.#f+=t,La.add(this.#p)}get_effect_pending(){return this.#e(),i(this.#h)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#o&&(Ke(this.#o),this.#o=null),this.#n&&(Ke(this.#n),this.#n=null),this.#i&&(Ke(this.#i),this.#i=null);var a=!1,s=!1;const o=()=>{if(a){Xl();return}a=!0,s&&Bl(),pt.ensure(),this.#f=0,this.#i!==null&&or(this.#i,()=>{this.#i=null}),this.#t=this.has_pending_snippet(),this.#o=this.#_(()=>(this.#v=!1,Ze(()=>this.#s(this.#r)))),this.#l>0?this.#g():this.#t=!1};var l=ae;try{st(null),s=!0,r?.(t,o),s=!1}catch(c){Wr(c,this.#a&&this.#a.parent)}finally{st(l)}n&&Er(()=>{this.#i=this.#_(()=>{this.#v=!0;try{return Ze(()=>{n(this.#r,()=>t,()=>o)})}catch(c){return Wr(c,this.#a.parent),null}finally{this.#v=!1}})})}}function uc(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:Pn(r);t.append(r),r=a}}function jo(e,t,r){const n=kn()?na:is;if(t.length===0){r(e.map(n));return}var a=xe,s=te,o=dc();Promise.all(t.map(l=>fc(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(c){(s.f&Tr)===0&&Wr(c,s)}a?.deactivate(),zo()}).catch(l=>{Wr(l,s)})}function dc(){var e=te,t=ae,r=qe,n=xe;return function(){qt(e),st(t),Vr(r),n?.activate()}}function zo(){qt(null),st(null),Vr(null)}function na(e){var t=ot|ut,r=ae!==null&&(ae.f&ot)!==0?ae:null;return te===null||r!==null&&(r.f&gt)!==0?t|=gt:te.f|=Yr,{ctx:qe,deps:null,effects:null,equals:Io,f:t,fn:e,reactions:null,rv:0,v:He,wv:0,parent:r??te,ac:null}}function fc(e,t){let r=te;r===null&&Nl();var n=r.b,a=void 0,s=cr(He),o=!ae,l=new Map;return Ec(()=>{var c=Po();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=xe,d=n.is_pending();o&&(n.update_pending_count(1),d||(f.increment(),l.get(f)?.reject(ln),l.set(f,c)));const h=(p,m=void 0)=>{d||f.activate(),m?m!==ln&&(s.f|=Sr,Ur(s,m)):((s.f&Sr)!==0&&(s.f^=Sr),Ur(s,p)),o&&(n.update_pending_count(-1),d||f.decrement()),zo()};c.promise.then(h,p=>h(null,p||"unknown"))}),Qo(()=>{for(const c of l.values())c.reject(ln)}),new Promise(c=>{function f(d){function h(){d===a?c(s):f(a)}d.then(h,h)}f(a)})}function B(e){const t=na(e);return ti(t),t}function is(e){const t=na(e);return t.equals=Mo,t}function Vo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Ke(t[r])}}function vc(e){for(var t=e.parent;t!==null;){if((t.f&ot)===0)return t;t=t.parent}return null}function ls(e){var t,r=te;qt(vc(e));try{Vo(e),t=si(e)}finally{qt(r)}return t}function Wo(e){var t=ls(e);if(e.equals(t)||(e.v=t,e.wv=ni()),!Ar){var r=(rr||(e.f&gt)!==0)&&e.deps!==null?dr:Je;rt(e,r)}}const sr=new Map;function cr(e,t){var r={f:0,v:e,reactions:null,equals:Io,rv:0,wv:0};return r}function F(e,t){const r=cr(e);return ti(r),r}function hc(e,t=!1,r=!0){const n=cr(e);return t||(n.equals=Mo),Zr&&r&&qe!==null&&qe.l!==null&&(qe.l.s??=[]).push(n),n}function N(e,t,r=!1){ae!==null&&(!wt||(ae.f&Cs)!==0)&&kn()&&(ae.f&(ot|kr|Fn|Cs))!==0&&!Kt?.includes(e)&&ql();let n=r?mt(t):t;return Ur(e,n)}function Ur(e,t){if(!e.equals(t)){var r=e.v;Ar?sr.set(e,t):sr.set(e,r),e.v=t;var n=pt.ensure();n.capture(e,r),(e.f&ot)!==0&&((e.f&ut)!==0&&ls(e),rt(e,(e.f&gt)===0?Je:dr)),e.wv=ni(),Uo(e,ut),kn()&&te!==null&&(te.f&Je)!==0&&(te.f&(Zt|Pr))===0&&(ht===null?Pc([e]):ht.push(e))}return t}function Ct(e){N(e,e.v+1)}function Uo(e,t){var r=e.reactions;if(r!==null)for(var n=kn(),a=r.length,s=0;s<a;s++){var o=r[s],l=o.f;if(!(!n&&o===te)){var c=(l&ut)===0;c&&rt(o,t),(l&ot)!==0?Uo(o,dr):c&&((l&kr)!==0&&br!==null&&br.push(o),$r(o))}}}function mt(e){if(typeof e!="object"||e===null||xr in e)return e;const t=ko(e);if(t!==xl&&t!==El)return e;var r=new Map,n=Xn(e),a=F(0),s=Qt,o=l=>{if(Qt===s)return l();var c=ae,f=Qt;st(null),zs(s);var d=l();return st(c),zs(f),d};return n&&r.set("length",F(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Rl();var d=r.get(c);return d===void 0?d=o(()=>{var h=F(f.value);return r.set(c,h),h}):N(d,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const d=o(()=>F(He));r.set(c,d),Ct(a)}}else N(f,He),Ct(a);return!0},get(l,c,f){if(c===xr)return e;var d=r.get(c),h=c in l;if(d===void 0&&(!h||ar(l,c)?.writable)&&(d=o(()=>{var m=mt(h?l[c]:He),_=F(m);return _}),r.set(c,d)),d!==void 0){var p=i(d);return p===He?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var d=r.get(c);d&&(f.value=i(d))}else if(f===void 0){var h=r.get(c),p=h?.v;if(h!==void 0&&p!==He)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===xr)return!0;var f=r.get(c),d=f!==void 0&&f.v!==He||Reflect.has(l,c);if(f!==void 0||te!==null&&(!d||ar(l,c)?.writable)){f===void 0&&(f=o(()=>{var p=d?mt(l[c]):He,m=F(p);return m}),r.set(c,f));var h=i(f);if(h===He)return!1}return d},set(l,c,f,d){var h=r.get(c),p=c in l;if(n&&c==="length")for(var m=f;m<h.v;m+=1){var _=r.get(m+"");_!==void 0?N(_,He):m in l&&(_=o(()=>F(He)),r.set(m+"",_))}if(h===void 0)(!p||ar(l,c)?.writable)&&(h=o(()=>F(void 0)),N(h,mt(f)),r.set(c,h));else{p=h.v!==He;var x=o(()=>mt(f));N(h,x)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(d,f),!p){if(n&&typeof c=="string"){var y=r.get("length"),A=Number(c);Number.isInteger(A)&&A>=y.v&&N(y,A+1)}Ct(a)}return!0},ownKeys(l){i(a);var c=Reflect.ownKeys(l).filter(h=>{var p=r.get(h);return p===void 0||p.v!==He});for(var[f,d]of r)d.v!==He&&!(f in l)&&c.push(f);return c},setPrototypeOf(){Ol()}})}function Os(e){try{if(e!==null&&typeof e=="object"&&xr in e)return e[xr]}catch{}return e}function pc(e,t){return Object.is(Os(e),Os(t))}var qs,Go,Ho,Ko;function mc(){if(qs===void 0){qs=window,Go=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ho=ar(t,"firstChild").get,Ko=ar(t,"nextSibling").get,Ms(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Ms(r)&&(r.__t=void 0)}}function fr(e=""){return document.createTextNode(e)}function Gr(e){return Ho.call(e)}function Pn(e){return Ko.call(e)}function u(e,t){return Gr(e)}function V(e,t=!1){{var r=Gr(e);return r instanceof Comment&&r.data===""?Pn(r):r}}function v(e,t=1,r=!1){let n=e;for(;t--;)n=Pn(n);return n}function _c(e){e.textContent=""}function cs(){return!1}function gc(e,t){if(t){const r=document.body;e.autofocus=!0,Er(()=>{document.activeElement===r&&e.focus()})}}let Bs=!1;function bc(){Bs||(Bs=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function aa(e){var t=ae,r=te;st(null),qt(null);try{return e()}finally{st(t),qt(r)}}function us(e,t,r,n=r){e.addEventListener(t,()=>aa(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),bc()}function yc(e){te===null&&ae===null&&Il(),ae!==null&&(ae.f&gt)!==0&&te===null&&Dl(),Ar&&Al()}function wc(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Jt(e,t,r,n=!0){var a=te;a!==null&&(a.f&St)!==0&&(e|=St);var s={ctx:qe,deps:null,nodes_start:null,nodes_end:null,f:e|ut,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{_n(s),s.f|=os}catch(c){throw Ke(s),c}else t!==null&&$r(s);if(n){var o=s;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Yr)===0&&(o=o.first),o!==null&&(o.parent=a,a!==null&&wc(o,a),ae!==null&&(ae.f&ot)!==0&&(e&Pr)===0)){var l=ae;(l.effects??=[]).push(o)}}return s}function Sc(){return ae!==null&&!wt}function Qo(e){const t=Jt(as,null,!1);return rt(t,Je),t.teardown=e,t}function un(e){yc();var t=te.f,r=!ae&&(t&Zt)!==0&&(t&os)===0;if(r){var n=qe;(n.e??=[]).push(e)}else return Yo(e)}function Yo(e){return Jt(ns|Pl,e,!1)}function xc(e){pt.ensure();const t=Jt(Pr|Yr,e,!0);return(r={})=>new Promise(n=>{r.outro?or(t,()=>{Ke(t),n(void 0)}):(Ke(t),n(void 0))})}function ds(e){return Jt(ns,e,!1)}function Ec(e){return Jt(Fn|Yr,e,!0)}function fs(e,t=0){return Jt(as|t,e,!0)}function L(e,t=[],r=[]){jo(t,r,n=>{Jt(as,()=>e(...n.map(i)),!0)})}function vr(e,t=0){var r=Jt(kr|t,e,!0);return r}function Ze(e,t=!0){return Jt(Zt|Yr,e,!0,t)}function Zo(e){var t=e.teardown;if(t!==null){const r=Ar,n=ae;js(!0),st(null);try{t.call(null)}finally{js(r),st(n)}}}function Jo(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&aa(()=>{a.abort(ln)});var n=r.next;(r.f&Pr)!==0?r.parent=null:Ke(r,t),r=n}}function $c(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Zt)===0&&Ke(t),t=r}}function Ke(e,t=!0){var r=!1;(t||(e.f&kl)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(kc(e.nodes_start,e.nodes_end),r=!0),Jo(e,t&&!r),Kn(e,0),rt(e,Tr);var n=e.transitions;if(n!==null)for(const s of n)s.stop();Zo(e);var a=e.parent;a!==null&&a.first!==null&&Xo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function kc(e,t){for(;e!==null;){var r=e===t?null:Pn(e);e.remove(),e=r}}function Xo(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function or(e,t){var r=[];vs(e,r,!0),Fo(r,()=>{Ke(e),t&&t()})}function Fo(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function vs(e,t,r){if((e.f&St)===0){if(e.f^=St,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var a=n.next,s=(n.f&Nr)!==0||(n.f&Zt)!==0;vs(n,t,s?r:!1),n=a}}}function sa(e){ei(e,!0)}function ei(e,t){if((e.f&St)!==0){e.f^=St,(e.f&Je)===0&&(rt(e,ut),$r(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&Nr)!==0||(r.f&Zt)!==0;ei(r,a?t:!1),r=n}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}let Lr=!1;function Ls(e){Lr=e}let Ar=!1;function js(e){Ar=e}let ae=null,wt=!1;function st(e){ae=e}let te=null;function qt(e){te=e}let Kt=null;function ti(e){ae!==null&&(Kt===null?Kt=[e]:Kt.push(e))}let tt=null,lt=0,ht=null;function Pc(e){ht=e}let ri=1,mn=0,Qt=mn;function zs(e){Qt=e}let rr=!1;function ni(){return++ri}function oa(e){var t=e.f;if((t&ut)!==0)return!0;if((t&dr)!==0){var r=e.deps,n=(t&gt)!==0;if(r!==null){var a,s,o=(t&Hn)!==0,l=n&&te!==null&&!rr,c=r.length;if((o||l)&&(te===null||(te.f&Tr)===0)){var f=e,d=f.parent;for(a=0;a<c;a++)s=r[a],(o||!s?.reactions?.includes(f))&&(s.reactions??=[]).push(f);o&&(f.f^=Hn),l&&d!==null&&(d.f&gt)===0&&(f.f^=gt)}for(a=0;a<c;a++)if(s=r[a],oa(s)&&Wo(s),s.wv>e.wv)return!0}(!n||te!==null&&!rr)&&rt(e,Je)}return!1}function ai(e,t,r=!0){var n=e.reactions;if(n!==null&&!Kt?.includes(e))for(var a=0;a<n.length;a++){var s=n[a];(s.f&ot)!==0?ai(s,t,!1):t===s&&(r?rt(s,ut):(s.f&Je)!==0&&rt(s,dr),$r(s))}}function si(e){var t=tt,r=lt,n=ht,a=ae,s=rr,o=Kt,l=qe,c=wt,f=Qt,d=e.f;tt=null,lt=0,ht=null,rr=(d&gt)!==0&&(wt||!Lr||ae===null),ae=(d&(Zt|Pr))===0?e:null,Kt=null,Vr(e.ctx),wt=!1,Qt=++mn,e.ac!==null&&(aa(()=>{e.ac.abort(ln)}),e.ac=null);try{e.f|=Ba;var h=e.fn,p=h(),m=e.deps;if(tt!==null){var _;if(Kn(e,lt),m!==null&&lt>0)for(m.length=lt+tt.length,_=0;_<tt.length;_++)m[lt+_]=tt[_];else e.deps=m=tt;if(!rr||(d&ot)!==0&&e.reactions!==null)for(_=lt;_<m.length;_++)(m[_].reactions??=[]).push(e)}else m!==null&&lt<m.length&&(Kn(e,lt),m.length=lt);if(kn()&&ht!==null&&!wt&&m!==null&&(e.f&(ot|dr|ut))===0)for(_=0;_<ht.length;_++)ai(ht[_],e);return a!==null&&a!==e&&(mn++,ht!==null&&(n===null?n=ht:n.push(...ht))),(e.f&Sr)!==0&&(e.f^=Sr),p}catch(x){return Ro(x)}finally{e.f^=Ba,tt=t,lt=r,ht=n,ae=a,rr=s,Kt=o,Vr(l),wt=c,Qt=f}}function Tc(e,t){let r=t.reactions;if(r!==null){var n=wl.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&ot)!==0&&(tt===null||!tt.includes(t))&&(rt(t,dr),(t.f&(gt|Hn))===0&&(t.f^=Hn),Vo(t),Kn(t,0))}function Kn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Tc(e,r[n])}function _n(e){var t=e.f;if((t&Tr)===0){rt(e,Je);var r=te,n=Lr;te=e,Lr=!0;try{(t&kr)!==0?$c(e):Jo(e),Zo(e);var a=si(e);e.teardown=typeof a=="function"?a:null,e.wv=ri;var s;$o&&tc&&(e.f&ut)!==0&&e.deps}finally{Lr=n,te=r}}}async function Nc(){await Promise.resolve(),sc()}function i(e){var t=e.f,r=(t&ot)!==0;if(ae!==null&&!wt){var n=te!==null&&(te.f&Tr)!==0;if(!n&&!Kt?.includes(e)){var a=ae.deps;if((ae.f&Ba)!==0)e.rv<mn&&(e.rv=mn,tt===null&&a!==null&&a[lt]===e?lt++:tt===null?tt=[e]:(!rr||!tt.includes(e))&&tt.push(e));else{(ae.deps??=[]).push(e);var s=e.reactions;s===null?e.reactions=[ae]:s.includes(ae)||s.push(ae)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&gt)===0&&(o.f^=gt)}if(Ar){if(sr.has(e))return sr.get(e);if(r){o=e;var c=o.v;return((o.f&Je)===0&&o.reactions!==null||oi(o))&&(c=ls(o)),sr.set(o,c),c}}else r&&(o=e,oa(o)&&Wo(o));if((e.f&Sr)!==0)throw e.v;return e.v}function oi(e){if(e.v===He)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(sr.has(t)||(t.f&ot)!==0&&oi(t))return!0;return!1}function Jr(e){var t=wt;try{return wt=!0,e()}finally{wt=t}}const Ac=-7169;function rt(e,t){e.f=e.f&Ac|t}function Dc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ic=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Mc(e){return Ic.includes(e)}const Cc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Rc(e){return e=e.toLowerCase(),Cc[e]??e}const Oc=["touchstart","touchmove"];function qc(e){return Oc.includes(e)}const ii=new Set,za=new Set;function li(e,t,r,n={}){function a(s){if(n.capture||on.call(t,s),!s.cancelBubble)return aa(()=>r?.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Er(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Vs(e,t,r,n={}){var a=li(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function Bt(e){for(var t=0;t<e.length;t++)ii.add(e[t]);for(var r of za)r(e)}let Ws=null;function on(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],s=a[0]||e.target;Ws=e;var o=0,l=Ws===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(o=c)}if(s=a[o]||e.target,s!==t){qa(e,"currentTarget",{configurable:!0,get(){return s||r}});var d=ae,h=te;st(null),qt(null);try{for(var p,m=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var x=s["__"+n];if(x!=null&&(!s.disabled||e.target===s))if(Xn(x)){var[b,...y]=x;b.apply(s,[e,...y])}else x.call(s,e)}catch(A){p?m.push(A):p=A}if(e.cancelBubble||_===t||_===null)break;s=_}if(p){for(let A of m)queueMicrotask(()=>{throw A});throw p}}finally{e.__root=t,delete e.currentTarget,st(d),qt(h)}}}function ci(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Hr(e,t){var r=te;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function P(e,t){var r=(t&Hl)!==0,n=(t&Kl)!==0,a,s=!e.startsWith("<!>");return()=>{a===void 0&&(a=ci(s?e:"<!>"+e),r||(a=Gr(a)));var o=n||Go?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Gr(o),c=o.lastChild;Hr(l,c)}else Hr(o,o);return o}}function Bc(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var o=ci(a),l=Gr(o);s=Gr(l)}var c=s.cloneNode(!0);return Hr(c,c),c}}function Lc(e,t){return Bc(e,t,"svg")}function ct(e=""){{var t=fr(e+"");return Hr(t,t),t}}function K(){var e=document.createDocumentFragment(),t=document.createComment(""),r=fr();return e.append(t,r),Hr(t,r),e}function g(e,t){e!==null&&e.before(t)}function M(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function jc(e,t){return zc(e,t)}const qr=new Map;function zc(e,{target:t,anchor:r,props:n={},events:a,context:s,intro:o=!0}){mc();var l=new Set,c=h=>{for(var p=0;p<h.length;p++){var m=h[p];if(!l.has(m)){l.add(m);var _=qc(m);t.addEventListener(m,on,{passive:_});var x=qr.get(m);x===void 0?(document.addEventListener(m,on,{passive:_}),qr.set(m,1)):qr.set(m,x+1)}}};c(rs(ii)),za.add(c);var f=void 0,d=xc(()=>{var h=r??t.appendChild(fr());return lc(h,{pending:()=>{}},p=>{if(s){G({});var m=qe;m.c=s}a&&(n.$$events=a),f=e(p,n)||{},s&&H()}),()=>{for(var p of l){t.removeEventListener(p,on);var m=qr.get(p);--m===0?(document.removeEventListener(p,on),qr.delete(p)):qr.set(p,m)}za.delete(c),h!==r&&h.parentNode?.removeChild(h)}});return Vc.set(f,d),f}let Vc=new WeakMap;function O(e,t,r=!1){var n=e,a=null,s=null,o=He,l=r?Nr:0,c=!1;const f=(m,_=!0)=>{c=!0,p(_,m)};var d=null;function h(){d!==null&&(d.lastChild.remove(),n.before(d),d=null);var m=o?a:s,_=o?s:a;m&&sa(m),_&&or(_,()=>{o?s=null:a=null})}const p=(m,_)=>{if(o!==(o=m)){var x=cs(),b=n;if(x&&(d=document.createDocumentFragment(),d.append(b=fr())),o?a??=_&&Ze(()=>_(b)):s??=_&&Ze(()=>_(b)),x){var y=xe,A=o?a:s,D=o?s:a;A&&y.skipped_effects.delete(A),D&&y.skipped_effects.add(D),y.add_callback(h)}else h()}};vr(()=>{c=!1,t(f),c||p(null,null)},l)}function jr(e,t){return t}function Wc(e,t,r){for(var n=e.items,a=[],s=t.length,o=0;o<s;o++)vs(t[o].e,a,!0);var l=s>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;_c(c),c.append(r),n.clear(),It(e,t[0].prev,t[s-1].next)}Fo(a,()=>{for(var f=0;f<s;f++){var d=t[f];l||(n.delete(d.k),It(e,d.prev,d.next)),Ke(d.e,!l)}})}function ze(e,t,r,n,a,s=null){var o=e,l={flags:t,items:new Map,first:null},c=(t&Do)!==0;if(c){var f=e;o=f.appendChild(fr())}var d=null,h=!1,p=new Map,m=is(()=>{var y=r();return Xn(y)?y:y==null?[]:rs(y)}),_,x;function b(){Uc(x,_,l,p,o,a,t,n,r),s!==null&&(_.length===0?d?sa(d):d=Ze(()=>s(o)):d!==null&&or(d,()=>{d=null}))}vr(()=>{x??=te,_=i(m);var y=_.length;if(!(h&&y===0)){h=y===0;var A,D,E,$;if(cs()){var T=new Set,R=xe;for(D=0;D<y;D+=1){E=_[D],$=n(E,D);var S=l.items.get($)??p.get($);S?(t&(ea|ta))!==0&&ui(S,E,D,t):(A=di(null,l,null,null,E,$,D,a,t,r,!0),p.set($,A)),T.add($)}for(const[q,I]of l.items)T.has(q)||R.skipped_effects.add(I.e);R.add_callback(b)}else b();i(m)}})}function Uc(e,t,r,n,a,s,o,l,c){var f=(o&Ll)!==0,d=(o&(ea|ta))!==0,h=t.length,p=r.items,m=r.first,_=m,x,b=null,y,A=[],D=[],E,$,T,R;if(f)for(R=0;R<h;R+=1)E=t[R],$=l(E,R),T=p.get($),T!==void 0&&(T.a?.measure(),(y??=new Set).add(T));for(R=0;R<h;R+=1){if(E=t[R],$=l(E,R),T=p.get($),T===void 0){var S=n.get($);if(S!==void 0){n.delete($),p.set($,S);var q=b?b.next:_;It(r,b,S),It(r,S,q),Ea(S,q,a),b=S}else{var I=_?_.e.nodes_start:a;b=di(I,r,b,b===null?r.first:b.next,E,$,R,s,o,c)}p.set($,b),A=[],D=[],_=b.next;continue}if(d&&ui(T,E,R,o),(T.e.f&St)!==0&&(sa(T.e),f&&(T.a?.unfix(),(y??=new Set).delete(T))),T!==_){if(x!==void 0&&x.has(T)){if(A.length<D.length){var U=D[0],ee;b=U.prev;var Ne=A[0],Se=A[A.length-1];for(ee=0;ee<A.length;ee+=1)Ea(A[ee],U,a);for(ee=0;ee<D.length;ee+=1)x.delete(D[ee]);It(r,Ne.prev,Se.next),It(r,b,Ne),It(r,Se,U),_=U,b=Se,R-=1,A=[],D=[]}else x.delete(T),Ea(T,_,a),It(r,T.prev,T.next),It(r,T,b===null?r.first:b.next),It(r,b,T),b=T;continue}for(A=[],D=[];_!==null&&_.k!==$;)(_.e.f&St)===0&&(x??=new Set).add(_),D.push(_),_=_.next;if(_===null)continue;T=_}A.push(T),b=T,_=T.next}if(_!==null||x!==void 0){for(var fe=x===void 0?[]:rs(x);_!==null;)(_.e.f&St)===0&&fe.push(_),_=_.next;var Me=fe.length;if(Me>0){var J=(o&Do)!==0&&h===0?a:null;if(f){for(R=0;R<Me;R+=1)fe[R].a?.measure();for(R=0;R<Me;R+=1)fe[R].a?.fix()}Wc(r,fe,J)}}f&&Er(()=>{if(y!==void 0)for(T of y)T.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var k of n.values())Ke(k.e);n.clear()}function ui(e,t,r,n){(n&ea)!==0&&Ur(e.v,t),(n&ta)!==0?Ur(e.i,r):e.i=r}function di(e,t,r,n,a,s,o,l,c,f,d){var h=(c&ea)!==0,p=(c&jl)===0,m=h?p?hc(a,!1,!1):cr(a):a,_=(c&ta)===0?o:cr(o),x={i:_,v:m,k:s,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=fr())}return x.e=Ze(()=>l(e,m,_,f),Fl),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?d||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function Ea(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,s=e.e.nodes_start;s!==null&&s!==n;){var o=Pn(s);a.before(s),s=o}}function It(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ie(e,t,...r){var n=e,a=se,s;vr(()=>{a!==(a=t())&&(s&&(Ke(s),s=null),s=Ze(()=>a(n,...r)))},Nr)}function Ln(e,t,r){var n=e,a,s,o=null,l=null;function c(){s&&(or(s),s=null),o&&(o.lastChild.remove(),n.before(o),o=null),s=l,l=null}vr(()=>{if(a!==(a=t())){var f=cs();if(a){var d=n;f&&(o=document.createDocumentFragment(),o.append(d=fr()),s&&xe.skipped_effects.add(s)),l=Ze(()=>r(d,a))}f?xe.add_callback(c):c()}},Nr)}function Gc(e,t,r,n,a,s){var o,l,c=null,f=e,d;vr(()=>{const h=t()||null;var p=Yl;h!==o&&(d&&(h===null?or(d,()=>{d=null,l=null}):h===l?sa(d):Ke(d)),h&&h!==l&&(d=Ze(()=>{if(c=document.createElementNS(p,h),Hr(c,c),n){var m=c.appendChild(fr());n(c,m)}te.nodes_end=c,f.before(c)})),o=h,o&&(l=o))},Nr)}function Hc(e,t){var r=void 0,n;vr(()=>{r!==(r=t())&&(n&&(Ke(n),n=null),r&&(n=Ze(()=>{ds(()=>r(e))})))})}function fi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=fi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Kc(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=fi(e))&&(n&&(n+=" "),n+=t);return n}function vi(e){return typeof e=="object"?Kc(e):e??""}const Us=[...` 	
\r\f \v\uFEFF`];function Qc(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var s=a.length,o=0;(o=n.indexOf(a,o))>=0;){var l=o+s;(o===0||Us.includes(n[o-1]))&&(l===n.length||Us.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Gs(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var s=e[a];s!=null&&s!==""&&(n+=" "+a+": "+s+r)}return n}function $a(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Yc(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,l=!1,c=[];n&&c.push(...Object.keys(n).map($a)),a&&c.push(...Object.keys(a).map($a));var f=0,d=-1;const x=e.length;for(var h=0;h<x;h++){var p=e[h];if(l?p==="/"&&e[h-1]==="*"&&(l=!1):s?s===p&&(s=!1):p==="/"&&e[h+1]==="*"?l=!0:p==='"'||p==="'"?s=p:p==="("?o++:p===")"&&o--,!l&&s===!1&&o===0){if(p===":"&&d===-1)d=h;else if(p===";"||h===x-1){if(d!==-1){var m=$a(e.substring(f,d).trim());if(!c.includes(m)){p!==";"&&h++;var _=e.substring(f,h).trim();r+=" "+_+";"}}f=h+1,d=-1}}}}return n&&(r+=Gs(n)),a&&(r+=Gs(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ce(e,t,r,n,a,s){var o=e.__className;if(o!==r||o===void 0){var l=Qc(r,n,s);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(s&&a!==s)for(var c in s){var f=!!s[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return s}function ka(e,t={},r,n){for(var a in r){var s=r[a];t[a]!==s&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,s,n))}}function jn(e,t,r,n){var a=e.__style;if(a!==t){var s=Yc(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else n&&(Array.isArray(n)?(ka(e,r?.[0],n[0]),ka(e,r?.[1],n[1],"important")):ka(e,r,n));return n}function Qn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Xn(t))return Jl();for(var n of e.options)n.selected=t.includes(dn(n));return}for(n of e.options){var a=dn(n);if(pc(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function hi(e){var t=new MutationObserver(()=>{Qn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Qo(()=>{t.disconnect()})}function Va(e,t,r=t){var n=!0;us(e,"change",a=>{var s=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(s),dn);else{var l=e.querySelector(s)??e.querySelector("option:not([disabled])");o=l&&dn(l)}r(o)}),ds(()=>{var a=t();if(Qn(e,a,n),n&&a===void 0){var s=e.querySelector(":checked");s!==null&&(a=dn(s),r(a))}e.__value=a,n=!1}),hi(e)}function dn(e){return"__value"in e?e.__value:e.value}const rn=Symbol("class"),nn=Symbol("style"),pi=Symbol("is custom element"),mi=Symbol("is html");function hs(e,t){var r=ia(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function zr(e,t){var r=ia(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Zc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function nr(e,t,r,n){var a=ia(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Tl]=r),r==null?e.removeAttribute(t):typeof r!="string"&&_i(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Jc(e,t,r,n,a=!1,s=!1){var o=ia(e),l=o[pi],c=!o[mi],f=t||{},d=e.tagName==="OPTION";for(var h in t)h in r||(r[h]=null);r.class?r.class=vi(r.class):r[rn]&&(r.class=null),r[nn]&&(r.style??=null);var p=_i(e);for(const E in r){let $=r[E];if(d&&E==="value"&&$==null){e.value=e.__value="",f[E]=$;continue}if(E==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ce(e,m,$,n,t?.[rn],r[rn]),f[E]=$,f[rn]=r[rn];continue}if(E==="style"){jn(e,$,t?.[nn],r[nn]),f[E]=$,f[nn]=r[nn];continue}var _=f[E];if(!($===_&&!($===void 0&&e.hasAttribute(E)))){f[E]=$;var x=E[0]+E[1];if(x!=="$$")if(x==="on"){const T={},R="$$"+E;let S=E.slice(2);var b=Mc(S);if(Dc(S)&&(S=S.slice(0,-7),T.capture=!0),!b&&_){if($!=null)continue;e.removeEventListener(S,f[R],T),f[R]=null}if($!=null)if(b)e[`__${S}`]=$,Bt([S]);else{let q=function(I){f[E].call(this,I)};var D=q;f[R]=li(S,e,q,T)}else b&&(e[`__${S}`]=void 0)}else if(E==="style")nr(e,E,$);else if(E==="autofocus")gc(e,!!$);else if(!l&&(E==="__value"||E==="value"&&$!=null))e.value=e.__value=$;else if(E==="selected"&&d)Zc(e,$);else{var y=E;c||(y=Rc(y));var A=y==="defaultValue"||y==="defaultChecked";if($==null&&!l&&!A)if(o[E]=null,y==="value"||y==="checked"){let T=e;const R=t===void 0;if(y==="value"){let S=T.defaultValue;T.removeAttribute(y),T.defaultValue=S,T.value=T.__value=R?S:null}else{let S=T.defaultChecked;T.removeAttribute(y),T.defaultChecked=S,T.checked=R?S:!1}}else e.removeAttribute(E);else A||p.includes(y)&&(l||typeof $!="string")?(e[y]=$,y in o&&(o[y]=He)):typeof $!="function"&&nr(e,y,$)}}}return f}function Hs(e,t,r=[],n=[],a,s=!1,o=!1){jo(r,n,l=>{var c=void 0,f={},d=e.nodeName==="SELECT",h=!1;if(vr(()=>{var m=t(...l.map(i)),_=Jc(e,c,m,a,s,o);h&&d&&"value"in m&&Qn(e,m.value);for(let b of Object.getOwnPropertySymbols(f))m[b]||Ke(f[b]);for(let b of Object.getOwnPropertySymbols(m)){var x=m[b];b.description===Zl&&(!c||x!==c[b])&&(f[b]&&Ke(f[b]),f[b]=Ze(()=>Hc(e,()=>x))),_[b]=x}c=_}),d){var p=e;ds(()=>{Qn(p,c.value,!0),hi(p)})}h=!0})}function ia(e){return e.__attributes??={[pi]:e.nodeName.includes("-"),[mi]:e.namespaceURI===Ql}}var Ks=new Map;function _i(e){var t=e.getAttribute("is")||e.nodeName,r=Ks.get(t);if(r)return r;Ks.set(t,r=[]);for(var n,a=e,s=Element.prototype;s!==a;){n=Sl(a);for(var o in n)n[o].set&&r.push(o);a=ko(a)}return r}function et(e,t,r=t){var n=new WeakSet;us(e,"input",async a=>{var s=a?e.defaultValue:e.value;if(s=Pa(e)?Ta(s):s,r(s),xe!==null&&n.add(xe),await Nc(),s!==(s=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=s??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),Jr(t)==null&&e.value&&(r(Pa(e)?Ta(e.value):e.value),xe!==null&&n.add(xe)),fs(()=>{var a=t();if(e===document.activeElement){var s=Bn??xe;if(n.has(s))return}Pa(e)&&a===Ta(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Xc(e,t,r=t){us(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),Jr(t)==null&&r(e.checked),fs(()=>{var n=t();e.checked=!!n})}function Pa(e){var t=e.type;return t==="number"||t==="range"}function Ta(e){return e===""?null:+e}let qn=!1;function Fc(e){var t=qn;try{return qn=!1,[e(),qn]}finally{qn=t}}const eu={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function le(e,t,r){return new Proxy({props:e,exclude:t},eu)}const tu={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(tn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];tn(a)&&(a=a());const s=ar(a,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(tn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=ar(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===xr||t===No)return!1;for(let r of e.props)if(tn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(tn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ce(...e){return new Proxy({props:e},tu)}function yr(e,t,r,n){var a=!Zr||(r&Vl)!==0,s=(r&Ul)!==0,o=(r&Gl)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=o?Jr(n):n),l),d;if(s){var h=xr in e||No in e;d=ar(e,t)?.set??(h&&t in e?D=>e[t]=D:void 0)}var p,m=!1;s?[p,m]=Fc(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),d&&(a&&Cl(),d(p)));var _;if(a?_=()=>{var D=e[t];return D===void 0?f():(c=!0,D)}:_=()=>{var D=e[t];return D!==void 0&&(l=void 0),D===void 0?l:D},a&&(r&Wl)===0)return _;if(d){var x=e.$$legacy;return(function(D,E){return arguments.length>0?((!a||!E||x||m)&&d(E?_():D),D):_()})}var b=!1,y=((r&zl)!==0?na:is)(()=>(b=!1,_()));s&&i(y);var A=te;return(function(D,E){if(arguments.length>0){const $=E?i(y):a&&s?mt(D):D;return N(y,$),b=!0,l!==void 0&&(l=$),D}return Ar&&b||(A.f&Tr)!==0?y.v:i(y)})}function gi(e){qe===null&&Ao(),Zr&&qe.l!==null?nu(qe).m.push(e):un(()=>{const t=Jr(e);if(typeof t=="function")return t})}function ru(e){qe===null&&Ao(),gi(()=>()=>Jr(e))}function nu(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const au="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(au);class su extends Map{#t=new Map;#r=F(0);#c=F(0);#u=Qt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#s(t){return Qt===this.#u?F(t):cr(t)}has(t){var r=this.#t,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#s(0),r.set(t,n);else return i(this.#r),!1}return i(n),!0}forEach(t,r){this.#a(),super.forEach(t,r)}get(t){var r=this.#t,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#s(0),r.set(t,n);else{i(this.#r);return}}return i(n),super.get(t)}set(t,r){var n=this.#t,a=n.get(t),s=super.get(t),o=super.set(t,r),l=this.#r;if(a===void 0)a=this.#s(0),n.set(t,a),N(this.#c,super.size),Ct(l);else if(s!==r){Ct(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(d=>c.has(d));f&&Ct(l)}return o}delete(t){var r=this.#t,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),N(this.#c,super.size),N(n,-1),Ct(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#t;N(this.#c,0);for(var r of t.values())N(r,-1);Ct(this.#r),t.clear()}}#a(){i(this.#r);var t=this.#t;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#s(0);t.set(r,n)}}for([,n]of this.#t)i(n)}keys(){return i(this.#r),super.keys()}values(){return this.#a(),super.values()}entries(){return this.#a(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return i(this.#c),super.size}}class ou{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class bi{constructor(t){this.generateIdentifier=t,this.kv=new ou}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class iu extends bi{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function lu(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function cu(e,t){const r=lu(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const s=n[a];if(t(s))return s}}function Kr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function zn(e,t){return e.indexOf(t)!==-1}function Qs(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class uu{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return cu(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const du=e=>Object.prototype.toString.call(e).slice(8,-1),yi=e=>typeof e>"u",fu=e=>e===null,gn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Wa=e=>gn(e)&&Object.keys(e).length===0,ur=e=>Array.isArray(e),vu=e=>typeof e=="string",hu=e=>typeof e=="number"&&!isNaN(e),pu=e=>typeof e=="boolean",mu=e=>e instanceof RegExp,bn=e=>e instanceof Map,yn=e=>e instanceof Set,wi=e=>du(e)==="Symbol",_u=e=>e instanceof Date&&!isNaN(e.valueOf()),gu=e=>e instanceof Error,Ys=e=>typeof e=="number"&&isNaN(e),bu=e=>pu(e)||fu(e)||yi(e)||hu(e)||vu(e)||wi(e),yu=e=>typeof e=="bigint",wu=e=>e===1/0||e===-1/0,Su=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),xu=e=>e instanceof URL,Si=e=>e.replace(/\./g,"\\."),Na=e=>e.map(String).map(Si).join("."),fn=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let s=e.charAt(a);if(s==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(s==="."){t.push(r),r="";continue}r+=s}const n=r;return t.push(n),t};function Dt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const xi=[Dt(yi,"undefined",()=>null,()=>{}),Dt(yu,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Dt(_u,"Date",e=>e.toISOString(),e=>new Date(e)),Dt(gu,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Dt(mu,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Dt(yn,"set",e=>[...e.values()],e=>new Set(e)),Dt(bn,"map",e=>[...e.entries()],e=>new Map(e)),Dt(e=>Ys(e)||wu(e),"number",e=>Ys(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Dt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Dt(xu,"URL",e=>e.toString(),e=>new URL(e))];function la(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Ei=la((e,t)=>wi(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),Eu=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),$i=la(Su,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=Eu[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function ki(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const Pi=la(ki,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),Ti=la((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),$u=[Pi,Ei,Ti,$i],Zs=(e,t)=>{const r=Qs($u,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Qs(xi,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},Ni={};xi.forEach(e=>{Ni[e.annotation]=e});const ku=(e,t,r)=>{if(ur(t))switch(t[0]){case"symbol":return Ei.untransform(e,t,r);case"class":return Pi.untransform(e,t,r);case"custom":return Ti.untransform(e,t,r);case"typed-array":return $i.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=Ni[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Br=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function Ai(e){if(zn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(zn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(zn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const Pu=(e,t)=>{Ai(t);for(let r=0;r<t.length;r++){const n=t[r];if(yn(e))e=Br(e,+n);else if(bn(e)){const a=+n,s=+t[++r]==0?"key":"value",o=Br(e,a);switch(s){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},Ua=(e,t,r)=>{if(Ai(t),t.length===0)return r(e);let n=e;for(let s=0;s<t.length-1;s++){const o=t[s];if(ur(n)){const l=+o;n=n[l]}else if(gn(n))n=n[o];else if(yn(n)){const l=+o;n=Br(n,l)}else if(bn(n)){if(s===t.length-2)break;const c=+o,f=+t[++s]==0?"key":"value",d=Br(n,c);switch(f){case"key":n=d;break;case"value":n=n.get(d);break}}}const a=t[t.length-1];if(ur(n)?n[+a]=r(n[+a]):gn(n)&&(n[a]=r(n[a])),yn(n)){const s=Br(n,+a),o=r(s);s!==o&&(n.delete(s),n.add(o))}if(bn(n)){const s=+t[t.length-2],o=Br(n,s);switch(+a==0?"key":"value"){case"key":{const c=r(o);n.set(c,n.get(o)),c!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function Ga(e,t,r=[]){if(!e)return;if(!ur(e)){Kr(e,(s,o)=>Ga(s,t,[...r,...fn(o)]));return}const[n,a]=e;a&&Kr(a,(s,o)=>{Ga(s,t,[...r,...fn(o)])}),t(n,r)}function Tu(e,t,r){return Ga(t,(n,a)=>{e=Ua(e,a,s=>ku(s,n,r))}),e}function Nu(e,t){function r(n,a){const s=Pu(e,fn(a));n.map(fn).forEach(o=>{e=Ua(e,o,()=>s)})}if(ur(t)){const[n,a]=t;n.forEach(s=>{e=Ua(e,fn(s),()=>e)}),a&&Kr(a,r)}else Kr(t,r);return e}const Au=(e,t)=>gn(e)||ur(e)||bn(e)||yn(e)||ki(e,t);function Du(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Iu(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[s,...o]=a;s.length===0?n=o.map(Na):r[Na(s)]=o.map(Na)}),n?Wa(r)?[n]:[n,r]:Wa(r)?void 0:r}const Di=(e,t,r,n,a=[],s=[],o=new Map)=>{const l=bu(e);if(!l){Du(e,a,t);const m=o.get(e);if(m)return n?{transformedValue:null}:m}if(!Au(e,r)){const m=Zs(e,r),_=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return l||o.set(e,_),_}if(zn(s,e))return{transformedValue:null};const c=Zs(e,r),f=c?.value??e,d=ur(f)?[]:{},h={};Kr(f,(m,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const x=Di(m,t,r,n,[...a,_],[...s,e],o);d[_]=x.transformedValue,ur(x.annotations)?h[_]=x.annotations:gn(x.annotations)&&Kr(x.annotations,(b,y)=>{h[Si(_)+"."+y]=b})});const p=Wa(h)?{transformedValue:d,annotations:c?[c.type]:void 0}:{transformedValue:d,annotations:c?[c.type,h]:h};return l||o.set(e,p),p};function Ii(e){return Object.prototype.toString.call(e).slice(8,-1)}function Js(e){return Ii(e)==="Array"}function Mu(e){if(Ii(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Cu(e,t,r,n,a){const s={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";s==="enumerable"&&(e[t]=r),a&&s==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Ha(e,t={}){if(Js(e))return e.map(a=>Ha(a,t));if(!Mu(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,s)=>{if(Js(t.props)&&!t.props.includes(s))return a;const o=e[s],l=Ha(o,t);return Cu(a,s,l,e,t.nonenumerable),a},{})}class re{constructor({dedupe:t=!1}={}){this.classRegistry=new iu,this.symbolRegistry=new bi(r=>r.description??""),this.customTransformerRegistry=new uu,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=Di(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const s=Iu(r,this.dedupe);return s&&(a.meta={...a.meta,referentialEqualities:s}),a}deserialize(t){const{json:r,meta:n}=t;let a=Ha(r);return n?.values&&(a=Tu(a,n.values,this)),n?.referentialEqualities&&(a=Nu(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}re.defaultInstance=new re;re.serialize=re.defaultInstance.serialize.bind(re.defaultInstance);re.deserialize=re.defaultInstance.deserialize.bind(re.defaultInstance);re.stringify=re.defaultInstance.stringify.bind(re.defaultInstance);re.parse=re.defaultInstance.parse.bind(re.defaultInstance);re.registerClass=re.defaultInstance.registerClass.bind(re.defaultInstance);re.registerSymbol=re.defaultInstance.registerSymbol.bind(re.defaultInstance);re.registerCustom=re.defaultInstance.registerCustom.bind(re.defaultInstance);re.allowErrorProps=re.defaultInstance.allowErrorProps.bind(re.defaultInstance);re.serialize;re.deserialize;re.stringify;re.parse;re.registerClass;re.registerCustom;re.registerSymbol;re.allowErrorProps;function Ru(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function Ou(e,t){return`${e}_${t}`}const qu=typeof window<"u"?window:void 0;function Bu(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Lu{#t;#r;constructor(t={}){const{window:r=qu,document:n=r?.document}=t;r!==void 0&&(this.#t=n,this.#r=Lo(a=>{const s=Vs(r,"focusin",a),o=Vs(r,"focusout",a);return()=>{s(),o()}}))}get current(){return this.#r?.(),this.#t?Bu(this.#t):null}}new Lu;function ju(e){return typeof e=="function"}function zu(e,t){if(ju(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Vu(e,t){let r=F(null);const n=B(()=>zu(t,250));function a(...s){if(i(r))i(r).timeout&&clearTimeout(i(r).timeout);else{let o,l;const c=new Promise((f,d)=>{o=f,l=d});N(r,{timeout:null,runner:null,promise:c,resolve:o,reject:l},!0)}return i(r).runner=async()=>{if(!i(r))return;const o=i(r);N(r,null);try{o.resolve(await e.apply(this,s))}catch(l){o.reject(l)}},i(r).timeout=setTimeout(i(r).runner,i(n)),i(r).promise}return a.cancel=async()=>{(!i(r)||i(r).timeout===null)&&(await new Promise(s=>setTimeout(s,0)),!i(r)||i(r).timeout===null)||(clearTimeout(i(r).timeout),i(r).reject("Cancelled"),N(r,null))},a.runScheduledNow=async()=>{(!i(r)||!i(r).timeout)&&(await new Promise(s=>setTimeout(s,0)),!i(r)||!i(r).timeout)||(clearTimeout(i(r).timeout),i(r).timeout=null,await i(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!i(r)?.timeout}}),a}function Wu(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),s=e.filter(o=>{const l=new Date(o.dateTimeService);return l>=n&&l<=a});return s.length?Mi(s.flatMap(o=>o.neededConsolidatedForDate)):[]}function an(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function Xs(e){try{return JSON.parse(e).map(r=>({quantity:parseFloat(r.quantity),unit:r.unit})).filter(r=>!isNaN(r.quantity))}catch(t){return console.error("[ProductsStore] Erreur parsing NumericQuantity:",t),[]}}function Mi(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.quantity||!r.unit)return;const n=parseFloat(r.quantity.toString());if(isNaN(n))return;const a=t.get(r.unit)||0;t.set(r.unit,a+n)}),Array.from(t.entries()).map(([r,n])=>({quantity:n,unit:r}))}function Uu(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>Ka(c.quantity.toString(),c.unit)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.quantity);isNaN(c)||r.set(l.unit,(r.get(l.unit)||0)+c)}),t.forEach(l=>{n.set(l.unit,(n.get(l.unit)||0)+l.quantity)});const a=[],s=[];r.forEach((l,c)=>{const f=n.get(c)||0,d=l-f;d>0&&(a.push({quantity:d,unit:c}),s.push(Ka(d.toString(),c)))});const o=s.length>0?s.join(" et "):"✅ Complet";return{numeric:a,display:o}}function Aa(e){return e?.length?e.map(t=>Ka(t.quantity.toString(),t.unit)).join(" et "):"-"}function Ka(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let o=(Math.round(n*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Gu(e){const t={};return e.forEach(({d:r,q:n,u:a})=>{t[r]||(t[r]=[]),t[r].push({quantity:n,unit:a})}),Object.entries(t).map(([r,n])=>({dateTimeService:r,neededConsolidatedForDate:n}))}function Hu(e){const t={};return e.forEach(({q:r,u:n})=>{t[n]||(t[n]=0),t[n]+=r}),Object.entries(t).map(([r,n])=>({quantity:n,unit:r}))}function Ku(e){return e.map(({r:t,d:r,q:n,u:a,a:s})=>({recipeName:t,dateTimeService:r,quantity:n,unit:a,assiettes:s}))}function Qu(e=[]){return{neededConsolidatedByDate:Gu(e),totalNeededConsolidated:Hu(e),recipesOccurrences:Ku(e)}}function Yu(e){return Array.isArray(e)?e.every(t=>typeof t=="object"&&typeof t.r=="string"&&typeof t.d=="string"&&typeof t.q=="number"&&typeof t.u=="string"&&typeof t.a=="number"):!1}function Zu(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class w{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}w.equal=(e,t)=>new w("equal",e,t).toString();w.notEqual=(e,t)=>new w("notEqual",e,t).toString();w.lessThan=(e,t)=>new w("lessThan",e,t).toString();w.lessThanEqual=(e,t)=>new w("lessThanEqual",e,t).toString();w.greaterThan=(e,t)=>new w("greaterThan",e,t).toString();w.greaterThanEqual=(e,t)=>new w("greaterThanEqual",e,t).toString();w.isNull=e=>new w("isNull",e).toString();w.isNotNull=e=>new w("isNotNull",e).toString();w.between=(e,t,r)=>new w("between",e,[t,r]).toString();w.startsWith=(e,t)=>new w("startsWith",e,t).toString();w.endsWith=(e,t)=>new w("endsWith",e,t).toString();w.select=e=>new w("select",void 0,e).toString();w.search=(e,t)=>new w("search",e,t).toString();w.orderDesc=e=>new w("orderDesc",e).toString();w.orderAsc=e=>new w("orderAsc",e).toString();w.orderRandom=()=>new w("orderRandom").toString();w.cursorAfter=e=>new w("cursorAfter",void 0,e).toString();w.cursorBefore=e=>new w("cursorBefore",void 0,e).toString();w.limit=e=>new w("limit",void 0,e).toString();w.offset=e=>new w("offset",void 0,e).toString();w.contains=(e,t)=>new w("contains",e,t).toString();w.notContains=(e,t)=>new w("notContains",e,t).toString();w.notSearch=(e,t)=>new w("notSearch",e,t).toString();w.notBetween=(e,t,r)=>new w("notBetween",e,[t,r]).toString();w.notStartsWith=(e,t)=>new w("notStartsWith",e,t).toString();w.notEndsWith=(e,t)=>new w("notEndsWith",e,t).toString();w.createdBefore=e=>new w("createdBefore",void 0,e).toString();w.createdAfter=e=>new w("createdAfter",void 0,e).toString();w.createdBetween=(e,t)=>new w("createdBetween",void 0,[e,t]).toString();w.updatedBefore=e=>new w("updatedBefore",void 0,e).toString();w.updatedAfter=e=>new w("updatedAfter",void 0,e).toString();w.updatedBetween=(e,t)=>new w("updatedBetween",void 0,[e,t]).toString();w.or=e=>new w("or",void 0,e.map(t=>JSON.parse(t))).toString();w.and=e=>new w("and",void 0,e.map(t=>JSON.parse(t))).toString();w.distanceEqual=(e,t,r,n=!0)=>new w("distanceEqual",e,[[t,r,n]]).toString();w.distanceNotEqual=(e,t,r,n=!0)=>new w("distanceNotEqual",e,[[t,r,n]]).toString();w.distanceGreaterThan=(e,t,r,n=!0)=>new w("distanceGreaterThan",e,[[t,r,n]]).toString();w.distanceLessThan=(e,t,r,n=!0)=>new w("distanceLessThan",e,[[t,r,n]]).toString();w.intersects=(e,t)=>new w("intersects",e,[t]).toString();w.notIntersects=(e,t)=>new w("notIntersects",e,[t]).toString();w.crosses=(e,t)=>new w("crosses",e,[t]).toString();w.notCrosses=(e,t)=>new w("notCrosses",e,[t]).toString();w.overlaps=(e,t)=>new w("overlaps",e,[t]).toString();w.notOverlaps=(e,t)=>new w("notOverlaps",e,[t]).toString();w.touches=(e,t)=>new w("touches",e,[t]).toString();w.notTouches=(e,t)=>new w("notTouches",e,[t]).toString();var Ci,Ri;class wn{static custom(t){return t}static unique(t=7){const r=Zu(wn,Ci,"m",Ri).call(wn);let n="";for(let a=0;a<t;a++){const s=Math.floor(Math.random()*16).toString(16);n+=s}return r+n}}Ci=wn,Ri=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Fs;(function(e){e.Totp="totp"})(Fs||(Fs={}));var eo;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(eo||(eo={}));var to;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(to||(to={}));var ro;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(ro||(ro={}));var no;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(no||(no={}));var ao;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(ao||(ao={}));var so;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(so||(so={}));var oo;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(oo||(oo={}));var io;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(io||(io={}));async function Xt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Ju(e,t={}){const{limit:r=100,orderBy:n="productName",orderDirection:a="asc"}=t;try{const{databases:s,config:o}=await Xt(),l=await s.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[w.equal("mainId",e),w.orderAsc(n==="productName"?"productName":"$updatedAt"),w.limit(r),w.select(["*","purchases.*"])]),f=l.documents;return console.log(`[Appwrite Interactions] ${l.documents.length} produits chargés avec achats`),f}catch(s){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,s);const o=s instanceof Error?s.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${o}`)}}async function Qa(e){try{const{databases:t,config:r}=await Xt();return(await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.products,[w.equal("$id",e),w.select(["*","purchases.*"])])).documents}catch(t){return console.error("[Appwrite Interactions] Erreur chargement produits:",t),[]}}async function Xu(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide pour sync hybride"),{allProducts:[]};try{const{databases:a,config:s}=await Xt(),[o,l]=await Promise.all([a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,[w.greaterThan("$updatedAt",r),w.equal("mainId",e),w.select(["*","purchases.*"]),w.limit(n)]),a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,[w.greaterThan("$updatedAt",r),w.equal("mainId",e),w.select(["products.$id"]),w.limit(n)])]);let c=o.documents;const f=new Set(c.map(d=>d.$id));if(l.documents.length>0){const d=l.documents.flatMap(h=>Array.isArray(h.products)?h.products.map(p=>p.$id):[]).filter((h,p,m)=>m.indexOf(h)===p).filter(h=>!f.has(h));if(console.log(`[Appwrite Interactions] Affected products from purchases: ${d.length}`),console.log("[Appwrite Interactions] Affected product IDs:",d),d.length>0)try{console.log("[Appwrite Interactions] Appel loadProductsListByIds avec IDs:",d);const h=await Qa(d);console.log(`[Appwrite Interactions] Reloaded ${h.length} products:`,JSON.stringify(h,null,2)),c=[...c,...h]}catch(h){throw console.error("[Appwrite Interactions] Erreur lors du rechargement des products:",h),h}}return c.length>0&&console.log(`[Appwrite Interactions] Sync total: ${c.length} produits synchronisés`),{allProducts:c}}catch(a){console.error(`[Appwrite Interactions] Erreur sync pour mainId ${e}:`,a);const s=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${s}`)}}async function ps(e,t){try{const{databases:r,config:n}=await Xt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Fu(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await ps(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function lo(e,t){return ps(e,{who:t})}async function co(e,t){return ps(e,{stockReel:t})}async function ed(e){try{const{databases:t,config:r}=await Xt(),s=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:s.$id,status:"active"},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,wn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function td(e,t){try{const{databases:r,config:n}=await Xt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),s={...t,products:t.products||a.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,s);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,s),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function rd(e){try{const{databases:t,config:r}=await Xt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function nd(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Xt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[w.equal("$id",e),w.select(["*","products"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function ad(e,t={}){let r=null;const n=s=>{const{events:o,payload:l}=s;if(!l)return;const c=o.some(m=>m.includes("products.")),f=o.some(m=>m.includes("purchases.")),d=o.some(m=>m.includes(".create")),h=o.some(m=>m.includes(".update")),p=o.some(m=>m.includes(".delete"));if(c){const m=l;d&&t.onProductCreate?t.onProductCreate(m):h&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(f){const m=l;d&&t.onPurchaseCreate?t.onPurchaseCreate(m):h&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:s=>{console.error("[Appwrite Interactions] Erreur realtime:",s),t.onError?.(s)}}))}catch(s){console.error("[Appwrite Interactions] Impossible de configurer realtime:",s),t.onError?.(s)}})(),()=>{r&&(r(),r=null)}}async function sd(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Xt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function od(e){try{console.log(`[Appwrite Interactions] Chargement des dates pour mainId: ${e}`);const t=await sd(e);if(!t||!t.allDates)return console.warn(`[Appwrite Interactions] Aucune date trouvée pour mainId: ${e}`),[];let r;if(Array.isArray(t.allDates))r=t.allDates;else if(typeof t.allDates=="string")try{r=re.parse(t.allDates)}catch(n){console.warn(`[Appwrite Interactions] Erreur parsing allDates pour mainId ${e}, traitement comme chaîne simple:`,n),r=[t.allDates]}else console.warn(`[Appwrite Interactions] Format allDates invalide pour mainId ${e}:`,typeof t.allDates),r=[];return console.log(`[Appwrite Interactions] ${r.length} dates chargées pour mainId: ${e}`),r}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement des dates pour mainId ${e}:`,t),[]}}const uo=1e3,id=500;class ld{#t=new su;#r=F(null);#c=F(!1);#u=F(!1);#s=F(null);#a=F(!1);#o=F(!1);#n=F(mt([]));#i=F(null);#d=F(null);#f=F(null);#l=null;#v=null;#h=null;#p=null;#e=F(mt({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return i(this.#e)}get currentMainId(){return i(this.#r)}get isInitialized(){return i(this.#c)}get loading(){return i(this.#u)}get error(){return i(this.#s)}get allDates(){return i(this.#n)}get syncing(){return i(this.#a)}get startDate(){return i(this.#d)}get endDate(){return i(this.#f)}setStartDate(t){N(this.#d,t,!0)}setEndDate(t){N(this.#f,t,!0)}setDateRange(t,r){N(this.#d,t,!0),N(this.#f,r,!0)}initializeDateRange(){if((!i(this.#d)||!i(this.#f))&&i(this.#n).length>0){const t=[...i(this.#n)].sort();N(this.#d,t[0],!0),N(this.#f,t[t.length-1],!0)}}get firstDate(){return i(this.#n).length===0?null:[...i(this.#n)].sort()[0]}get lastDate(){return i(this.#n).length===0?null:[...i(this.#n)].sort().pop()}get realtimeConnected(){return i(this.#o)}get lastSync(){return i(this.#i)}#S=B(()=>Array.from(this.#t.values()));get enrichedProducts(){return i(this.#S)}set enrichedProducts(t){N(this.#S,t)}#x=B(()=>{const t=new Map;return this.enrichedProducts.forEach(r=>{const n=Wu(r.neededConsolidatedByDateArray,i(this.#d),i(this.#f));n&&n.length>0&&t.set(r.$id,n)}),console.log(t),t});get totalNeededByDateRange(){return i(this.#x)}set totalNeededByDateRange(t){N(this.#x,t)}#_=B(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const a=Aa(r);t.set(n,a)}),t});get formattedTotalNeededByDateRange(){return i(this.#_)}set formattedTotalNeededByDateRange(t){N(this.#_,t)}#g=B(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return i(this.#g)}set stats(t){N(this.#g,t)}#w=B(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return i(this.#w)}set uniqueStores(t){N(this.#w,t)}#k=B(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return i(this.#k)}set uniqueWho(t){N(this.#k,t)}#P=B(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return i(this.#P)}set uniqueProductTypes(t){N(this.#P,t)}#T=B(()=>this.enrichedProducts.filter(t=>this.#O(t)));get filteredProducts(){return i(this.#T)}set filteredProducts(t){N(this.#T,t)}#N=B(()=>{const t=this.filteredProducts;return i(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>i(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return i(this.#N)}set filteredGroupedProducts(t){N(this.#N,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(i(this.#c)&&i(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),N(this.#r,t,!0),this.#l=Ou("products-enriched",t);try{await this.#I(),this.#t.size===0?await this.#A(t):await this.#M(),this.initializeDateRange(),N(this.#c,!0);const r=this.#R();this.#h=ad(t,r)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw N(this.#s,n,!0),console.error("[ProductsStore]",n,r),r}}async#I(){if(this.#l)try{const t=localStorage.getItem(this.#l);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:a}=re.parse(t);r.forEach(([s,o])=>this.#t.set(s,o)),N(this.#i,n,!0),N(this.#n,a||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${a?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}#E(){if(this.#l)try{const t={lastSync:i(this.#i),products:Array.from(this.#t.entries()),allDates:i(this.#n)};localStorage.setItem(this.#l,re.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}async#A(t){N(this.#u,!0),N(this.#s,null);try{const r={limit:uo,orderBy:"productName",orderDirection:"asc"},[n,a]=await Promise.all([Ju(t,r),od(t)]);n.forEach(s=>{const o=this.#b(s);this.#t.set(s.$id,o)}),N(this.#n,a,!0),this.#m(),this.#E(),console.log(`[ProductsStore] ${n.length} produits chargés et enrichis, ${a.length} dates récupérées`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw N(this.#s,n,!0),console.error("[ProductsStore]",n,r),r}finally{N(this.#u,!1)}}async#M(){if(!(!i(this.#i)||!i(this.#r))){N(this.#a,!0);try{const t={lastSync:i(this.#i),limit:uo},{allProducts:r}=await Xu(i(this.#r),t);r.length>0&&(r.forEach(n=>{const a=this.#b(n);this.#t.set(n.$id,a)}),console.log(`[ProductsStore] ${r.length} produits appliqués du sync`)),r.length>0&&(this.#m(),this.#E(),console.log(`[ProductsStore] Sync complétée: ${r.length} produits`))}catch(t){console.error("[ProductsStore] Erreur sync:",t)}finally{N(this.#a,!1)}}}#b(t){const r=Mi(t.purchases??[]),{numeric:n,display:a}=Uu(l,r),s=an(t.stockReel)??[];let o=[],l=[],c=[];const f=an(t.occ);if(Yu(f)){const p=Qu(f);o=p.neededConsolidatedByDate,l=Xs(JSON.stringify(p.totalNeededConsolidated)),c=p.recipesOccurrences}else o=t.neededConsolidatedByDate?an(t.neededConsolidatedByDate)??[]:[],l=t.totalNeededConsolidated?Xs(t.totalNeededConsolidated):[],c=an(t.recipesOccurrences)??[];const d=Aa(r),h=s&&s.length>0?`${s[s.length-1].quantity} ${s[s.length-1].unit}`:d;return{...t,storeInfo:t.store?an(t.store):null,totalNeededArray:l,totalPurchasesArray:r,recipesArray:c,stockArray:s,stockOrTotalPurchases:h,missingQuantityArray:n,neededConsolidatedByDateArray:o,displayTotalNeeded:Aa(l),displayTotalPurchases:d,displayMissingQuantity:a}}#$(t){const r=this.#b(t);this.#t.set(t.$id,r)}#C(t){this.#t.delete(t)}async#q(t){if(!t?.length)return;const r=new Set(t.filter(n=>n.products?.length>0).flatMap(n=>n.products).map(n=>typeof n=="string"?n:n.$id).filter(Boolean));if(r.size===0){console.log("[ProductsStore] Aucun produit affecté par ces purchases");return}try{const n=await Qa(Array.from(r));if(n.length===0){console.warn("[ProductsStore] Impossible de charger les produits affectés");return}n.forEach(a=>{const s=this.#b(a);this.#t.set(a.$id,s)}),console.log(`[ProductsStore] ${t.length} purchases appliqués à ${n.length} produit(s)`)}catch(n){console.error("[ProductsStore] Erreur application purchases:",n)}}async#D(t){if(!t?.length)return;const r=new Set,n=[],a=t.filter(o=>o.products?.length>0);if(n.push(...t.filter(o=>!o.products?.length)),a.flatMap(o=>o.products).map(o=>typeof o=="string"?o:o.$id).filter(Boolean).forEach(o=>r.add(o)),n.length>0){console.log(`[ProductsStore] ${n.length} purchases sans relation products, rechargement ciblé depuis Appwrite...`);try{(await nd(n.map(l=>l.$id))).forEach(l=>{if(l.products?.length>0){l.products.map(d=>typeof d=="string"?d:d.$id).filter(Boolean).forEach(d=>r.add(d));const f=t.findIndex(d=>d.$id===l.$id);f>=0&&(t[f]=l)}})}catch(o){console.error("[ProductsStore] Erreur rechargement ciblé des purchases:",o)}}if(r.size!==0){for(const o of r){const l=this.#t.get(o);if(l){let c=l.purchases||[];t.forEach(d=>{const h=c.findIndex(p=>p.$id===d.$id);h>=0?c[h]=d:c.push(d)});const f=this.#b({...l,purchases:c});this.#t.set(o,f)}}try{(await Qa(Array.from(r))).forEach(l=>{const c=this.#b(l);this.#t.set(l.$id,c)})}catch(o){console.warn("[ProductsStore] Erreur rechargement async:",o)}}}#R(){return{onProductCreate:t=>{this.#$(t),this.#m(),this.#y()},onProductUpdate:t=>{this.#$(t),this.#m(),this.#y()},onProductDelete:t=>{this.#C(t),this.#m(),this.#y()},onPurchaseCreate:t=>{this.#D([t]),this.#m(),this.#y()},onPurchaseUpdate:t=>{this.#D([t]),this.#m(),this.#y()},onPurchaseDelete:t=>{Array.from(this.#t.values()).filter(n=>n.purchases?.some(a=>a.$id===t)).forEach(n=>{this.#$(n)}),this.#m(),this.#y()},onConnect:()=>{N(this.#o,!0)},onDisconnect:()=>{N(this.#o,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#y(){this.#p&&clearTimeout(this.#p),this.#p=setTimeout(()=>{this.#E(),this.#p=null},id)}#m(){N(this.#i,new Date().toISOString(),!0)}#O(t){if(i(this.#e).searchQuery.trim()){const r=i(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(i(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!i(this.#e).selectedStores.includes(t.storeInfo.storeName))||i(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>i(this.#e).selectedWho.includes(r)))||i(this.#e).selectedProductTypes.length>0&&(!t.productType||!i(this.#e).selectedProductTypes.includes(t.productType))||i(this.#e).selectedTemperatures.length>0&&!(i(this.#e).selectedTemperatures.includes("frais")&&t.pFrais||i(this.#e).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Vu(t=>{i(this.#e).searchQuery=t},()=>500);toggleProductType(t){const r=i(this.#e).selectedProductTypes.indexOf(t);r>-1?i(this.#e).selectedProductTypes.splice(r,1):i(this.#e).selectedProductTypes.push(t)}toggleTemperature(t){const r=i(this.#e).selectedTemperatures.indexOf(t);r>-1?i(this.#e).selectedTemperatures.splice(r,1):i(this.#e).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){i(this.#e).selectedProductTypes=[],i(this.#e).selectedTemperatures=[]}setGroupBy(t){i(this.#e).groupBy=t}toggleStore(t){const r=i(this.#e).selectedStores.indexOf(t);r>-1?i(this.#e).selectedStores.splice(r,1):i(this.#e).selectedStores.push(t)}toggleWho(t){const r=i(this.#e).selectedWho.indexOf(t);r>-1?i(this.#e).selectedWho.splice(r,1):i(this.#e).selectedWho.push(t)}clearStoreFilters(){i(this.#e).selectedStores=[]}clearWhoFilters(){i(this.#e).selectedWho=[]}handleSort(t){i(this.#e).sortColumn===t?i(this.#e).sortDirection=i(this.#e).sortDirection==="asc"?"desc":"asc":(i(this.#e).sortColumn=t,i(this.#e).sortDirection="asc")}clearFilters(){N(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return i(this.#e).sortColumn?[...t].sort((r,n)=>{let a=r[i(this.#e).sortColumn],s=n[i(this.#e).sortColumn];return i(this.#e).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,s=parseFloat(s)||0):i(this.#e).sortColumn==="purchases"&&(a=r.purchases?.length||0,s=n.purchases?.length||0),a<s?i(this.#e).sortDirection==="asc"?-1:1:a>s?i(this.#e).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#t.get(t)??null}getNeededForProduct(t){return this.totalNeededByDateRange.get(t)??0}get enrichedProductsCount(){return this.#t.size}async forceReload(t){this.clearCache(),await this.#A(t)}clearCache(){this.#t.clear(),N(this.#n,[],!0),N(this.#i,null),this.#l&&localStorage.removeItem(this.#l),this.#v&&localStorage.removeItem(this.#v),console.log("[ProductsStore] Cache vidé")}destroy(){this.#h?.(),this.#h=null,this.#p&&(clearTimeout(this.#p),this.#p=null),console.log("[ProductsStore] Ressources nettoyées")}}const C=new ld;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const cd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ud=Lc("<svg><!><!></svg>");function ue(e,t){G(t,!0);const r=yr(t,"color",3,"currentColor"),n=yr(t,"size",3,24),a=yr(t,"strokeWidth",3,2),s=yr(t,"absoluteStrokeWidth",3,!1),o=yr(t,"iconNode",19,()=>[]),l=le(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=ud();Hs(c,h=>({...cd,...l,width:n(),height:n(),stroke:r(),"stroke-width":h,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>s()?Number(a())*24/Number(n()):a()]);var f=u(c);ze(f,17,o,jr,(h,p)=>{var m=B(()=>To(i(p),2));let _=()=>i(m)[0],x=()=>i(m)[1];var b=K(),y=V(b);Gc(y,_,!0,(A,D)=>{Hs(A,()=>({...x()}))}),g(h,b)});var d=v(f);ie(d,()=>t.children??se),g(e,c),H()}function Ya(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ue(e,ce({name:"archive"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function dd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ue(e,ce({name:"bean"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function fd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ue(e,ce({name:"beef"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function vd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ue(e,ce({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function hd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ue(e,ce({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function pd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ue(e,ce({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function md(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ue(e,ce({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function _d(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ue(e,ce({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function gd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];ue(e,ce({name:"combine"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function ms(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ue(e,ce({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function bd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ue(e,ce({name:"egg"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function Za(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ue(e,ce({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function fo(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ue(e,ce({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function yd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ue(e,ce({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function wd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ue(e,ce({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function Sd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ue(e,ce({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function xd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ue(e,ce({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function ca(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ue(e,ce({name:"package"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function Ed(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ue(e,ce({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function $d(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ue(e,ce({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function kd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ue(e,ce({name:"save"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function Pd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ue(e,ce({name:"search"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function Vn(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ue(e,ce({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function Yn(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ue(e,ce({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function Wn(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ue(e,ce({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function Oi(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ue(e,ce({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function Sn(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ue(e,ce({name:"store"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function qi(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ue(e,ce({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function _s(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ue(e,ce({name:"user"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function Bi(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ue(e,ce({name:"users"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function Td(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ue(e,ce({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function Li(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]];ue(e,ce({name:"weight"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}function _t(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=le(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ue(e,ce({name:"x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=K(),l=V(o);ie(l,()=>t.children??se),g(a,o)},$$slots:{default:!0}})),H()}const Ot=mt({product:{id:"",isOpen:!1,tab:"recettes"}});function Nd(e,t){Ot.product.tab=e,Ot.product.isOpen=!0,Ot.product.id=t}function vo(){Ot.product.isOpen=!1,Ot.product.tab="",Ot.product.id=""}let ho=()=>localStorage.getItem("appwrite-user-name")||"";function Un(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:dd};case"animaux":return{displayName:"Viandes et Poissons",icon:fd};case"legumes":return{displayName:"Fruits et Légumes",icon:hd};case"sucres":return{displayName:"Sucrées",icon:vd};case"lof":return{displayName:"L.O.F",icon:bd};case"autres":return{displayName:"Autres",icon:pd};case"epices":return{displayName:"Assaisonnements",icon:yd};case"frais":return{displayName:"Produits Frais",icon:$d};default:return{displayName:e,icon:ca}}}function po(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function ji(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function xn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Ad(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Dd(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],s=n[t.sortColumn];return a<s?t.sortDirection==="asc"?-1:1:a>s?t.sortDirection==="asc"?1:-1:0}):e}function Id(e){let t=F(!1),r=F(null),n=F("recettes");const a=B(()=>C.getEnrichedProductById(e)),s=B(()=>i(a)?.recipesArray??[]),o=B(()=>i(a)?.who??[]),l=B(()=>i(a)?.stockArray??[]),c=B(()=>i(a)?.purchases??[]),f=mt({purchase:{quantity:null,unit:"",store:"",who:ho()??"",price:null,notes:""},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});un(()=>{i(a)&&(f.purchase.quantity=i(a).missingQuantityArray[0]?.quantity??null,f.purchase.unit=i(a).totalNeededArray[0]?.unit??"",f.purchase.store=i(a).storeInfo?.storeName??"",f.purchase.who=ho()??"",f.stock.unit=i(a).totalNeededArray[0]?.unit??"",f.store.name=i(a).storeInfo?.storeName??null,f.store.comment=i(a).storeInfo?.storeComment??null)});let d=F(null);const h=B(()=>i(d)?i(c).find(S=>S.$id===i(d))??null:null);async function p(S,q){N(t,!0),N(r,null);try{const I=await S();return q&&m("success",q),I}catch(I){const U=I instanceof Error?I.message:"Une erreur est survenue";return N(r,U,!0),m("error",U),console.error("[ProductModalState]",I),null}finally{N(t,!1)}}function m(S,q){const I=new CustomEvent("toast",{detail:{type:S,message:q}});window.dispatchEvent(I)}async function _(){i(a)&&await p(async()=>{if(!f.purchase.quantity||!f.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!C.currentMainId)throw new Error("mainId non disponible");const{quantity:S,unit:q}=po(f.purchase.quantity,f.purchase.unit);await ed({products:[i(a).$id],mainId:C.currentMainId,unit:q,quantity:S,store:f.purchase.store||null,who:f.purchase.who||null,notes:f.purchase.notes||"",price:f.purchase.price||null}),f.purchase={quantity:i(a).missingQuantityArray[0]?.quantity??null,unit:i(a).totalNeededArray[0]?.unit??"",store:f.purchase.store,who:f.purchase.who,price:null,notes:""}},"Achat ajouté avec succès")}function x(S){N(d,S.$id,!0)}function b(){N(d,null)}async function y(S){S.$id&&await p(async()=>{const{quantity:q,unit:I}=po(S.quantity,S.unit);await td(S.$id,{unit:I,quantity:q,store:S.store||null,who:S.who||null,notes:S.notes||"",price:S.price||null}),N(d,null)},"Achat modifié avec succès")}async function A(S){const q=i(c).find(I=>I.$id===S);q&&confirm(`Supprimer cet achat (${q.quantity} ${q.unit}) ?`)&&await p(async()=>{await rd(S)},"Achat supprimé avec succès")}async function D(){i(a)&&await p(async()=>{if(!f.stock.quantity||!f.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const S={quantity:f.stock.quantity.toString(),unit:f.stock.unit,notes:f.stock.notes,dateTime:f.stock.dateTime},q=[...i(l),S];await co(i(a).$id,JSON.stringify(q)),f.stock.quantity=null,f.stock.notes="",f.stock.dateTime=new Date().toISOString()},"Relevé de stock ajouté")}async function E(S){i(a)&&confirm("Supprimer ce relevé de stock ?")&&await p(async()=>{const q=i(l).filter((I,U)=>U!==S);await co(i(a).$id,JSON.stringify(q))},"Relevé de stock supprimé")}async function $(S){!i(a)||!S.trim()||await p(async()=>{if(i(o).includes(S))throw new Error("Ce volontaire est déjà ajouté");await lo(i(a).$id,[...i(o),S.trim()])},"Volontaire ajouté")}async function T(S){i(a)&&confirm(`Retirer ${S} ?`)&&await p(async()=>{await lo(i(a).$id,i(o).filter(q=>q!==S))},"Volontaire retiré")}async function R(S){i(a)&&await p(async()=>{await Fu(i(a).$id,S)},"Magasin mis à jour")}return{get loading(){return i(t)},get error(){return i(r)},get currentTab(){return i(n)},set currentTab(S){N(n,S,!0)},get product(){return i(a)},get recipes(){return i(s)},get whoList(){return i(o)},get stockEntries(){return i(l)},get purchasesList(){return i(c)},get editingPurchaseId(){return i(d)},get editingPurchaseData(){return i(h)},forms:f,addPurchase:_,startEditPurchase:x,cancelEditPurchase:b,updateEditedPurchase:y,removePurchase:A,addStock:D,removeStock:E,addVolunteer:$,removeVolunteer:T,updateStore:R,formatQuantity:ji,formatDate:xn,formatDisplayQuantity:Ad}}function Md(e,t,r){t()&&r().addPurchase()}function Cd(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Rd(e,t){t().cancelEditPurchase()}var Od=P("<option> </option>"),qd=P("<option> </option>"),Bd=P('<span class="loading loading-spinner loading-sm"></span>'),Ld=P('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),jd=P("<option> </option>"),zd=P('<span class="loading loading-spinner loading-sm"></span>'),Vd=P('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/> <datalist id="browsers"></datalist></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Wd=(e,t,r)=>t(i(r)),Ud=(e,t,r)=>t(i(r).$id),Gd=P('<span class="loading loading-spinner loading-sm"></span>'),Hd=P('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Kd=P('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Qd=P('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <label class="select w-28"><!> <select required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></label> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/> <datalist id="stores"></datalist></label> <label class="input w-48"><!> <input type="text" placeholder="Qui" maxlength="25" list="users"/> <datalist id="users"></datalist></label> <label class="input validator w-28"><input type="number" step="1" placeholder="Prix" min="0"/> <span class="label">€</span></label> <label class="input validator"><!> <input type="text" placeholder="Notes" maxlength="250"/></label></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function Yd(e,t){G(t,!0);let r=yr(t,"modalState",7);function n(){return r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(d){return d.quantity!==null&&d.quantity!==0&&d.unit?.trim()!==""}function s(d){r().removePurchase(d)}function o(d){r().startEditPurchase(d)}var l=K(),c=V(l);{var f=d=>{var h=Qd(),p=u(h),m=u(p);Yn(m,{class:"h-5 w-5"});var _=v(p,2),x=u(_),b=v(u(x),2),y=u(b),A=u(y);ca(A,{class:"h-4 w-4 opacity-50"});var D=v(A,2),E=v(y,2),$=u(E);Li($,{class:"h-4 w-4 opacity-50"});var T=v($,2),R=u(T);R.value=R.__value="";var S=v(R);S.value=S.__value="kg";var q=v(S);q.value=q.__value="gr.";var I=v(q);I.value=I.__value="l.";var U=v(I);U.value=U.__value="ml";var ee=v(U);ee.value=ee.__value="unité";var Ne=v(ee);Ne.value=Ne.__value="bottes";var Se=v(E,2),fe=u(Se);Sn(fe,{class:"h-4 w-4 opacity-50"});var Me=v(fe,2),J=v(Me,2);ze(J,21,()=>C.uniqueStores,jr,(X,de)=>{var j=Od(),Ie=u(j),Ee={};L(()=>{M(Ie,i(de)),Ee!==(Ee=i(de))&&(j.value=(j.__value=i(de))??"")}),g(X,j)});var k=v(Se,2),W=u(k);_s(W,{class:"h-4 w-4 opacity-50"});var pe=v(W,2),we=v(pe,2);ze(we,21,()=>C.uniqueWho,jr,(X,de)=>{var j=qd(),Ie=u(j),Ee={};L(()=>{M(Ie,i(de)),Ee!==(Ee=i(de))&&(j.value=(j.__value=i(de))??"")}),g(X,j)});var ve=v(k,2),nt=u(ve),at=v(ve,2),oe=u(at);xd(oe,{class:"h-4 w-4 opacity-50"});var me=v(oe,2),Be=v(b,2),Re=u(Be);Re.__click=[Md,n,r];var Ae=u(Re);{var Oe=X=>{var de=Bd();g(X,de)},De=X=>{var de=ct("Ajouter l'achat");g(X,de)};O(Ae,X=>{r().loading?X(Oe):X(De,!1)})}var We=v(_,2);{var Xe=X=>{var de=Ld(),j=u(de);Yn(j,{class:"mx-auto mb-2 h-12 w-12"}),g(X,de)},Lt=X=>{var de=Kd(),j=u(de),Ie=v(u(j));ze(Ie,21,()=>r().purchasesList,Ee=>Ee.$id,(Ee,ne,z)=>{var _e=K(),Pe=V(_e);{var bt=Le=>{var Et=Vd(),$t=u(Et),hr=u($t),zt=u(hr),Fe=v(zt,2),yt=u(Fe);yt.value=yt.__value="kg";var kt=v(yt);kt.value=kt.__value="gr.";var Pt=v(kt);Pt.value=Pt.__value="l.";var Vt=v(Pt);Vt.value=Vt.__value="ml";var Ue=v(Vt);Ue.value=Ue.__value="unité";var Wt=v(Ue);Wt.value=Wt.__value="bottes";var Ut=v($t),Ft=u(Ut),Tt=v(Ft,2);ze(Tt,21,()=>C.uniqueStores,jr,(he,ge)=>{var Te=jd(),$e=u(Te),Y={};L(()=>{M($e,i(ge)),Y!==(Y=i(ge))&&(Te.value=(Te.__value=i(ge))??"")}),g(he,Te)});var Dr=v(Ut),pr=u(Dr),Ir=v(Dr),mr=u(Ir),Mr=v(Ir),en=u(Mr),Cr=v(Mr),dt=u(Cr),er=v(Cr),va=u(er),Q=u(va);Q.__click=[Cd,r,a];var be=u(Q);{var Nt=he=>{var ge=zd();g(he,ge)},ft=he=>{kd(he,{class:"h-3 w-3"})};O(be,he=>{r().loading?he(Nt):he(ft,!1)})}var Qe=v(Q,2);Qe.__click=[Rd,r];var it=u(Qe);_t(it,{class:"h-3 w-3"}),L((he,ge)=>{M(mr,he),Q.disabled=ge},[()=>xn(i(ne).$createdAt),()=>r().loading||!a(i(ne))]),et(zt,()=>i(ne).quantity,he=>i(ne).quantity=he),Va(Fe,()=>i(ne).unit,he=>i(ne).unit=he),et(Ft,()=>i(ne).store,he=>i(ne).store=he),et(pr,()=>i(ne).who,he=>i(ne).who=he),et(en,()=>i(ne).price,he=>i(ne).price=he),et(dt,()=>i(ne).notes,he=>i(ne).notes=he),g(Le,Et)},jt=Le=>{var Et=Hd(),$t=u(Et),hr=u($t),zt=v($t),Fe=u(zt),yt=v(zt),kt=u(yt),Pt=v(yt),Vt=u(Pt),Ue=v(Pt),Wt=u(Ue),Ut=v(Ue),Ft=u(Ut),Tt=v(Ut),Dr=u(Tt),pr=u(Dr);pr.__click=[Wd,o,ne];var Ir=u(pr);Oi(Ir,{class:"h-4 w-4"});var mr=v(pr,2);mr.__click=[Ud,s,ne];var Mr=u(mr);{var en=dt=>{var er=Gd();g(dt,er)},Cr=dt=>{_t(dt,{class:"h-4 w-4"})};O(Mr,dt=>{r().loading?dt(en):dt(Cr,!1)})}L((dt,er)=>{M(hr,dt),M(Fe,i(ne).store||"-"),M(kt,i(ne).who||"-"),M(Vt,er),M(Wt,i(ne).price?`${i(ne).price}€`:"-"),M(Ft,i(ne).notes||"-"),mr.disabled=r().loading},[()=>ji(i(ne).quantity,i(ne).unit),()=>xn(i(ne).$createdAt)]),g(Le,Et)};O(Pe,Le=>{r().editingPurchaseId===i(ne).$id?Le(bt):Le(jt,!1)})}g(Ee,_e)}),g(X,de)};O(We,X=>{r().purchasesList.length===0?X(Xe):X(Lt,!1)})}L(X=>Re.disabled=X,[()=>r().loading||!n()]),et(D,()=>r().forms.purchase.quantity,X=>r().forms.purchase.quantity=X),Va(T,()=>r().forms.purchase.unit,X=>r().forms.purchase.unit=X),et(Me,()=>r().forms.purchase.store,X=>r().forms.purchase.store=X),et(pe,()=>r().forms.purchase.who,X=>r().forms.purchase.who=X),et(nt,()=>r().forms.purchase.price,X=>r().forms.purchase.price=X),et(me,()=>r().forms.purchase.notes,X=>r().forms.purchase.notes=X),g(d,h)};O(c,d=>{r()&&r().product&&d(f)})}g(e,l),H()}Bt(["click"]);class Zd{#t;#r=new Set;constructor(t){this.#t=t}get current(){return this.#t}set current(t){this.#t!=t&&(this.#t=t,this.#r.forEach(r=>r(t)))}on(t){return this.#r.add(t),()=>this.#r.delete(t)}}const zi=e=>new Zd(e),Ja=Symbol.for("atomico.hooks");globalThis[Ja]=globalThis[Ja]||{};let Qr=globalThis[Ja];const Jd=Symbol.for("Atomico.suspense"),Vi=Symbol.for("Atomico.effect"),Xd=Symbol.for("Atomico.layoutEffect"),Wi=Symbol.for("Atomico.insertionEffect"),Xr=(e,t,r)=>{const{i:n,hooks:a}=Qr.c,s=a[n]=a[n]||{};return s.value=e(s.value),s.effect=t,s.tag=r,Qr.c.i++,a[n].value},Fd=e=>Xr((t=zi(e))=>t),Tn=()=>Xr((e=zi(Qr.c.host))=>e),Ui=()=>Qr.c.update,ef=(e,t,r=0)=>{let n={},a=!1;const s=()=>a,o=(l,c)=>{for(const f in n){const d=n[f];d.effect&&d.tag===l&&(d.value=d.effect(d.value,c))}};return{load:l=>{Qr.c={host:t,hooks:n,update:e,i:0,id:r};let c;try{a=!1,c=l()}catch(f){if(f!==Jd)throw f;a=!0}finally{Qr.c=null}return c},cleanEffects:l=>(o(Wi,l),()=>(o(Xd,l),()=>{o(Vi,l)})),isSuspense:s}},Fr=Symbol.for;function Gi(e,t){const r=e.length;if(r!==t.length)return!1;for(let n=0;n<r;n++){let a=e[n],s=t[n];if(a!==s)return!1}return!0}const Rt=e=>typeof e=="function",vn=e=>typeof e=="object",{isArray:tf}=Array,Xa=(e,t)=>(t?e instanceof HTMLStyleElement:!0)&&"hydrate"in(e?.dataset||{});function Hi(e,t){let r;const n=a=>{let{length:s}=a;for(let o=0;o<s;o++){const l=a[o];if(l&&Array.isArray(l))n(l);else{const c=typeof l;if(l==null||c==="function"||c==="boolean")continue;c==="string"||c==="number"?(r==null&&(r=""),r+=l):(r!=null&&(t(r),r=null),t(l))}}};n(e),r!=null&&t(r)}const Ki=(e,t,r)=>(e.addEventListener(t,r),()=>e.removeEventListener(t,r));class Qi{constructor(t,r,n){this.message=r,this.target=t,this.value=n}}class Yi extends Qi{}class rf extends Qi{}const Zn="Custom",nf=null,af={true:1,"":1,1:1};function sf(e,t,r,n,a){const{type:s,reflect:o,event:l,value:c,attr:f=of(t)}=r?.name!=Zn&&vn(r)&&r!=nf?r:{type:r},d=s?.name===Zn&&s.map,h=c!=null?s==Function||!Rt(c)?()=>c:c:null;Object.defineProperty(e,t,{configurable:!0,set(p){const m=this[t];h&&s!=Boolean&&p==null&&(p=h());const{error:_,value:x}=(d?uf:df)(s,p);if(_&&x!=null)throw new Yi(this,`The value defined for prop '${t}' must be of type '${s.name}'`,x);m!=x&&(this._props[t]=x??void 0,this.update(),l&&Zi(this,l),this.updated.then(()=>{o&&(this._ignoreAttr=f,lf(this,s,f,this[t]),this._ignoreAttr=null)}))},get(){return this._props[t]}}),h&&(a[t]=h()),n[f]={prop:t,type:s}}const Zi=(e,{type:t,base:r=CustomEvent,...n})=>e.dispatchEvent(new r(t,n)),of=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),lf=(e,t,r,n)=>n==null||t==Boolean&&!n?e.removeAttribute(r):e.setAttribute(r,t?.name===Zn&&t?.serialize?t?.serialize(n):vn(n)?JSON.stringify(n):t==Boolean?"":n),cf=(e,t)=>e==Boolean?!!af[t]:e==Number?Number(t):e==String?t:e==Array||e==Object?JSON.parse(t):e.name==Zn?t:new e(t),uf=({map:e},t)=>{try{return{value:e(t),error:!1}}catch{return{value:t,error:!0}}},df=(e,t)=>e==null||t==null?{value:t,error:!1}:e!=String&&t===""?{value:void 0,error:!1}:e==Object||e==Array||e==Symbol?{value:t,error:{}.toString.call(t)!==`[object ${e.name}]`}:t instanceof e?{value:t,error:e==Number&&Number.isNaN(t.valueOf())}:e==String||e==Number||e==Boolean?{value:t,error:e==Number?typeof t!="number"?!0:Number.isNaN(t):e==String?typeof t!="string":typeof t!="boolean"}:{value:t,error:!0};let ff=0;const vf=e=>(e?.dataset||{})?.hydrate||""||"c"+ff++,Nn=(e,t=HTMLElement)=>{const r={},n={},a="prototype"in t&&t.prototype instanceof Element,s=a?t:"base"in t?t.base:HTMLElement,{props:o,styles:l}=a?e:t;class c extends s{constructor(){super(),this._setup(),this._render=()=>e({...this._props});for(const d in n)this[d]=n[d]}static get styles(){return[super.styles,l]}async _setup(){if(this._props)return;this._props={};let d,h;this.mounted=new Promise(b=>this.mount=()=>{b(),d!=this.parentNode&&(h!=d?this.unmounted.then(this.update):this.update()),d=this.parentNode}),this.unmounted=new Promise(b=>this.unmount=()=>{b(),(d!=this.parentNode||!this.isConnected)&&(p.cleanEffects(!0)()(),h=this.parentNode,d=null)}),this.symbolId=this.symbolId||Symbol(),this.symbolIdParent=Symbol();const p=ef(()=>this.update(),this,vf(this));let m,_=!0;const x=Xa(this);this.update=()=>(m||(m=!0,this.updated=(this.updated||this.mounted).then(()=>{try{const b=p.load(this._render),y=p.cleanEffects();return b&&b.render(this,this.symbolId,x),m=!1,_&&!p.isSuspense()&&(_=!1,!x&&hf(this)),y()}finally{m=!1}}).then(b=>{b&&b()})),this.updated),this.update()}connectedCallback(){this.mount(),super.connectedCallback&&super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.unmount()}attributeChangedCallback(d,h,p){if(r[d]){if(d===this._ignoreAttr||h===p)return;const{prop:m,type:_}=r[d];try{this[m]=cf(_,p)}catch{throw new rf(this,`The value defined as attr '${d}' cannot be parsed by type '${_.name}'`,p)}}else super.attributeChangedCallback(d,h,p)}static get props(){return{...super.props,...o}}static get observedAttributes(){const d=super.observedAttributes||[];for(const h in o)sf(this.prototype,h,o[h],r,n);return Object.keys(r).concat(d)}}return c};function hf(e){const{styles:t}=e.constructor,{shadowRoot:r}=e;if(r&&t.length){const n=[];Hi(t,a=>{a&&(a instanceof Element?r.appendChild(a.cloneNode(!0)):n.push(a))}),n.length&&(r.adoptedStyleSheets=n)}}const Ji=e=>(t,r)=>{Xr(([n,a]=[])=>((a||!a)&&(a&&Gi(a,r)?n=n||!0:(Rt(n)&&n(),n=null)),[n,r]),([n,a],s)=>s?(Rt(n)&&n(),[]):[n||t(),a],e)},En=Ji(Vi),pf=Ji(Wi);class Xi extends Array{constructor(t,r){let n=!0;const a=s=>{try{r(s,this,n)}finally{n=!1}};super(void 0,a,r),a(t)}}const gs=e=>{const t=Ui();return Xr((r=new Xi(e,(n,a,s)=>{n=Rt(n)?n(a[0]):n,n!==a[0]&&(a[0]=n,s||t())}))=>r)},Yt=(e,t)=>{const[r]=Xr(([n,a,s=0]=[])=>((!a||a&&!Gi(a,t))&&(n=e()),[n,t,s]));return r},bs=e=>{const{current:t}=Tn();if(!(e in t))throw new Yi(t,`For useProp("${e}"), the prop does not exist on the host.`,e);return Xr((r=new Xi(t[e],(n,a)=>{n=Rt(n)?n(t[e]):n,t[e]=n}))=>(r[0]=t[e],r))},ir=(e,t={})=>{const r=Tn();return r[e]||(r[e]=(n=t.detail)=>Zi(r.current,{type:e,...t,detail:n})),r[e]},Fa=Fr("atomico/options");globalThis[Fa]=globalThis[Fa]||{sheet:!!document.adoptedStyleSheets};const Fi=globalThis[Fa],mf={checked:1,value:1,selected:1},_f={list:1,type:1,size:1,form:1,width:1,height:1,src:1,href:1,slot:1},gf={shadowDom:1,staticNode:1,cloneNode:1,children:1,key:1},Gn={},es=[];class ts extends Text{}const bf=Fr("atomico/id"),hn=Fr("atomico/type"),Da=Fr("atomico/ref"),el=Fr("atomico/vnode"),yf=()=>{};function wf(e,t,r){return rl(this,e,t,r)}const tl=(e,t,...r)=>{const n=t||Gn;let{children:a}=n;if(a=a??(r.length?r:es),e===yf)return a;const s=e?e instanceof Node?1:e.prototype instanceof HTMLElement&&2:0;if(s===!1&&e instanceof Function)return e(a!=es?{children:a,...n}:n);const o=Fi.render||wf;return{[hn]:el,type:e,props:n,children:a,key:n.key,shadow:n.shadowDom,static:n.staticNode,raw:s,is:n.is,clone:n.cloneNode,render:o}};function rl(e,t,r=bf,n,a){let s;if(t&&t[r]&&t[r].vnode==e||e[hn]!=el)return t;(e||!t)&&(a=a||e.type=="svg",s=e.type!="host"&&(e.raw==1?(t&&e.clone?t[Da]:t)!=e.type:e.raw==2?!(t instanceof e.type):t?t[Da]||t.localName!=e.type:!t),s&&e.type!=null&&(e.raw==1&&e.clone?(n=!0,t=e.type.cloneNode(!0),t[Da]=e.type):t=e.raw==1?e.type:e.raw==2?new e.type:a?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,e.is?{is:e.is}:void 0)));const o=t[r]?t[r]:Gn,{vnode:l=Gn,cycle:c=0}=o;let{fragment:f,handlers:d}=o;const{children:h=es,props:p=Gn}=l;if(d=s?{}:d||{},e.static&&!s)return t;if(e.shadow&&!t.shadowRoot&&t.attachShadow({mode:"open",...e.shadow}),e.props!=p&&Ef(t,p,e.props,d,a),e.children!==h){const m=e.shadow?t.shadowRoot:t;f=xf(e.children,f,m,r,!c&&n,a&&e.type=="foreignObject"?!1:a)}return t[r]={vnode:e,handlers:d,fragment:f,cycle:c+1},t}function Sf(e,t){const r=new ts(""),n=new ts("");let a;if(e[t?"prepend":"append"](r),t){let{lastElementChild:s}=e;for(;s;){const{previousElementSibling:o}=s;if(Xa(s,!0)&&!Xa(o,!0)){a=s;break}s=o}}return a?a.before(n):e.append(n),{markStart:r,markEnd:n}}function xf(e,t,r,n,a,s){e=e==null?null:tf(e)?e:[e];const o=t||Sf(r,a),{markStart:l,markEnd:c,keyes:f}=o;let d;const h=f&&new Set;let p=l;if(e&&Hi(e,m=>{if(typeof m=="object"&&!m[hn])return;const _=m[hn]&&m.key,x=f&&_!=null&&f.get(_);p!=c&&p===x?h.delete(p):p=p==c?c:p.nextSibling;const b=f?x:p;let y=b;if(m[hn])y=rl(m,b,n,a,s);else{const A=m+"";!(y instanceof Text)||y instanceof ts?y=new Text(A):y.data!=A&&(y.data=A)}y!=p&&(f&&h.delete(y),!b||f?(r.insertBefore(y,p),f&&p!=c&&h.add(p)):b==c?r.insertBefore(y,c):(r.replaceChild(y,b),p=y)),_!=null&&(d=d||new Map,d.set(_,y))}),p=p==c?c:p.nextSibling,t&&p!=c)for(;p!=c;){const m=p;p=p.nextSibling,m.remove()}return h&&h.forEach(m=>m.remove()),o.keyes=d,o}function Ef(e,t,r,n,a){for(const s in t)!(s in r)&&mo(e,s,t[s],null,a,n);for(const s in r)mo(e,s,t[s],r[s],a,n)}function mo(e,t,r,n,a,s){if(t=t=="class"&&!a?"className":t,r=r??null,n=n??null,t in e&&mf[t]&&(r=e[t]),!(n===r||gf[t]||t[0]=="_"))if(t[0]=="o"&&t[1]=="n"&&(Rt(n)||Rt(r)))$f(e,t.slice(2),n,s);else if(t=="ref")n&&(Rt(n)?n(e):n.current=e);else if(t=="style"){const{style:o}=e;r=r||"",n=n||"";const l=vn(r),c=vn(n);if(l)for(const f in r)if(c)!(f in n)&&_o(o,f,null);else break;if(c)for(const f in n){const d=n[f];l&&r[f]===d||_o(o,f,d)}else o.cssText=n}else{const o=t[0]=="$"?t.slice(1):t;o===t&&(!a&&!_f[t]&&t in e||Rt(n)||Rt(r))?e[t]=n??"":n==null?e.removeAttribute(o):e.setAttribute(o,vn(n)?JSON.stringify(n):n)}}function $f(e,t,r,n){if(n.handleEvent||(n.handleEvent=a=>n[a.type].call(e,a)),r){if(!n[t]){const a=r.capture||r.once||r.passive?Object.assign({},r):null;e.addEventListener(t,n,a)}n[t]=r}else n[t]&&(e.removeEventListener(t,n),delete n[t])}function _o(e,t,r){let n="setProperty";r==null&&(n="removeProperty",r=null),~t.indexOf("-")?e[n](t,r):e[t]=r}const go={};function ua(e,...t){const r=(e.raw||e).reduce((n,a,s)=>n+a+(t[s]||""),"");return go[r]=go[r]||kf(r)}function kf(e){if(Fi.sheet){const t=new CSSStyleSheet;return t.replaceSync(e),t}else{const t=document.createElement("style");return t.textContent=e,t}}const Pf=tl("host",{style:"display: contents"}),Ia=Fr("atomico/context"),Tf=(e,t)=>{const r=Tn();pf(()=>Ki(r.current,"ConnectContext",n=>{e===n.detail.id&&(n.stopPropagation(),n.detail.connect(t))}),[e])},Nf=e=>{const t=ir("ConnectContext",{bubbles:!0,composed:!0}),r=()=>{let s;return t({id:e,connect(o){s=o}}),s},[n,a]=gs(r);return En(()=>{n||(e[Ia]||(e[Ia]=customElements.whenDefined(new e().localName)),e[Ia].then(()=>a(r)))},[e]),n},Af=e=>{const t=Nf(e),r=Ui();return En(()=>{if(t)return Ki(t,"UpdatedValue",r)},[t]),(t||e).value},Df=e=>{const t=Nn(()=>(Tf(t,Tn().current),Pf),{props:{value:{type:Object,event:{type:"UpdatedValue"},value:()=>e}}});return t.value=e,t},ke=(e,t,r)=>(t==null?t={key:r}:t.key=r,tl(e,t)),pn=ke,nl=ua`*,*:before,*:after{box-sizing:border-box}button{padding:0;touch-action:manipulation;cursor:pointer;user-select:none}`,al=ua`.vh{position:absolute;transform:scale(0)}`;function ys(){const e=new Date;return new Ve(e.getFullYear(),e.getMonth()+1,e.getDate())}function ws(e,t=0){const r=xt(e),n=r.getUTCDay(),a=(n<t?7:0)+n-t;return r.setUTCDate(r.getUTCDate()-a),Ve.from(r)}function sl(e,t=0){return ws(e,t).add({days:6})}function ol(e){return Ve.from(new Date(Date.UTC(e.year,e.month,0)))}function da(e,t,r){return t&&Ve.compare(e,t)<0?t:r&&Ve.compare(e,r)>0?r:e}const If={days:1};function Mf(e,t=0){let r=ws(e.toPlainDate(),t);const n=sl(ol(e),t),a=[];for(;Ve.compare(r,n)<0;){const s=[];for(let o=0;o<7;o++)s.push(r),r=r.add(If);a.push(s)}return a}function xt(e){return new Date(Date.UTC(e.year,e.month-1,e.day??1))}const Cf=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/,Ma=(e,t)=>e.toString().padStart(t,"0");class Ve{constructor(t,r,n){this.year=t,this.month=r,this.day=n}add(t){const r=xt(this);if("days"in t)return r.setUTCDate(this.day+t.days),Ve.from(r);let{year:n,month:a}=this;"months"in t?(a=this.month+t.months,r.setUTCMonth(a-1)):(n=this.year+t.years,r.setUTCFullYear(n));const s=Ve.from(xt({year:n,month:a,day:1}));return da(Ve.from(r),s,ol(s))}toString(){return`${Ma(this.year,4)}-${Ma(this.month,2)}-${Ma(this.day,2)}`}toPlainYearMonth(){return new fa(this.year,this.month)}equals(t){return Ve.compare(this,t)===0}static compare(t,r){return t.year<r.year?-1:t.year>r.year?1:t.month<r.month?-1:t.month>r.month?1:t.day<r.day?-1:t.day>r.day?1:0}static from(t){if(typeof t=="string"){const r=t.match(Cf);if(!r)throw new TypeError(t);const[,n,a,s]=r;return new Ve(parseInt(n,10),parseInt(a,10),parseInt(s,10))}return new Ve(t.getUTCFullYear(),t.getUTCMonth()+1,t.getUTCDate())}}class fa{constructor(t,r){this.year=t,this.month=r}add(t){const r=xt(this),n=(t.months??0)+(t.years??0)*12;return r.setUTCMonth(r.getUTCMonth()+n),new fa(r.getUTCFullYear(),r.getUTCMonth()+1)}equals(t){return this.year===t.year&&this.month===t.month}toPlainDate(){return new Ve(this.year,this.month,1)}}function Jn(e,t){if(t)try{return e.from(t)}catch{}}function lr(e){const[t,r]=bs(e);return[Yt(()=>Jn(Ve,t),[t]),n=>r(n?.toString())]}function Rf(e){const[t="",r]=bs(e);return[Yt(()=>{const[n,a]=t.split("/"),s=Jn(Ve,n),o=Jn(Ve,a);return s&&o?[s,o]:[]},[t]),n=>r(`${n[0]}/${n[1]}`)]}function Of(e){const[t="",r]=bs(e);return[Yt(()=>{const n=[];for(const a of t.trim().split(/\s+/)){const s=Jn(Ve,a);s&&n.push(s)}return n},[t]),n=>r(n.join(" "))]}function $n(e,t){return Yt(()=>new Intl.DateTimeFormat(t,{timeZone:"UTC",...e}),[t,e])}function bo(e,t,r){const n=$n(e,r);return Yt(()=>{const a=[],s=new Date;for(var o=0;o<7;o++){const l=(s.getUTCDay()-t+7)%7;a[l]=n.format(s),s.setUTCDate(s.getUTCDate()+1)}return a},[t,n])}const yo=(e,t,r)=>da(e,t,r)===e,wo=e=>e.target.matches(":dir(ltr)"),qf={month:"long",day:"numeric"},Bf={month:"long"},Lf={weekday:"long"},Ca={bubbles:!0};function jf({props:e,context:t}){const{offset:r}=e,{firstDayOfWeek:n,isDateDisallowed:a,min:s,max:o,today:l,page:c,locale:f,focusedDate:d,formatWeekday:h}=t,p=l??ys(),m=bo(Lf,n,f),_=Yt(()=>({weekday:h}),[h]),x=bo(_,n,f),b=$n(qf,f),y=$n(Bf,f),A=Yt(()=>c.start.add({months:r}),[c,r]),D=Yt(()=>Mf(A,n),[A,n]),E=ir("focusday",Ca),$=ir("selectday",Ca),T=ir("hoverday",Ca);function R(I){E(da(I,s,o))}function S(I){let U;switch(I.key){case"ArrowRight":U=d.add({days:wo(I)?1:-1});break;case"ArrowLeft":U=d.add({days:wo(I)?-1:1});break;case"ArrowDown":U=d.add({days:7});break;case"ArrowUp":U=d.add({days:-7});break;case"PageUp":U=d.add(I.shiftKey?{years:-1}:{months:-1});break;case"PageDown":U=d.add(I.shiftKey?{years:1}:{months:1});break;case"Home":U=ws(d,n);break;case"End":U=sl(d,n);break;default:return}R(U),I.preventDefault()}function q(I){const U=A.equals(I);if(!t.showOutsideDays&&!U)return;const ee=I.equals(d),Ne=I.equals(p),Se=xt(I),fe=a?.(Se),Me=!yo(I,s,o);let J="",k;if(t.type==="range"){const[W,pe]=t.value,we=W?.equals(I),ve=pe?.equals(I);k=W&&pe&&yo(I,W,pe),J=`${we?"range-start":""} ${ve?"range-end":""} ${k&&!we&&!ve?"range-inner":""}`}else t.type==="multi"?k=t.value.some(W=>W.equals(I)):k=t.value?.equals(I);return{part:`${`button day day-${Se.getDay()} ${U?k?"selected":"":"outside"} ${fe?"disallowed":""} ${Ne?"today":""} ${t.getDayParts?.(Se)??""}`} ${J}`,tabindex:U&&ee?0:-1,disabled:Me,"aria-disabled":fe?"true":void 0,"aria-pressed":U&&k,"aria-current":Ne?"date":void 0,"aria-label":b.format(Se),onkeydown:S,onclick(){fe||$(I),R(I)},onmouseover(){!fe&&!Me&&T(I)}}}return{weeks:D,yearMonth:A,daysLong:m,daysVisible:x,formatter:y,getDayProps:q}}const Ra=ys(),Ss=Df({type:"date",firstDayOfWeek:1,focusedDate:Ra,page:{start:Ra.toPlainYearMonth(),end:Ra.toPlainYearMonth()}});customElements.define("calendar-ctx",Ss);const zf=(e,t)=>(t+e)%7,Vf=Nn(e=>{const t=Af(Ss),r=Fd(),n=jf({props:e,context:t});function a(){r.current.querySelector("button[tabindex='0']")?.focus()}return pn("host",{shadowDom:!0,focus:a,children:[ke("div",{id:"h",part:"heading",children:n.formatter.format(xt(n.yearMonth))}),pn("table",{ref:r,"aria-labelledby":"h",part:"table",children:[ke("thead",{children:ke("tr",{part:"tr head",children:n.daysLong.map((s,o)=>pn("th",{part:`th day day-${zf(t.firstDayOfWeek,o)}`,scope:"col",children:[ke("span",{class:"vh",children:s}),ke("span",{"aria-hidden":"true",children:n.daysVisible[o]})]}))})}),ke("tbody",{children:n.weeks.map((s,o)=>ke("tr",{part:"tr week",children:s.map((l,c)=>{const f=n.getDayProps(l);return ke("td",{part:"td",children:f&&ke("button",{...f,children:l.day})},c)})},o))})]})]})},{props:{offset:{type:Number,value:0}},styles:[nl,al,ua`:host{--color-accent: black;--color-text-on-accent: white;display:flex;flex-direction:column;gap:.25rem;text-align:center;inline-size:fit-content}table{border-collapse:collapse;font-size:.875rem}th{font-weight:700;block-size:2.25rem}td{padding-inline:0}button{color:inherit;font-size:inherit;background:transparent;border:0;font-variant-numeric:tabular-nums;block-size:2.25rem;inline-size:2.25rem}button:hover:where(:not(:disabled,[aria-disabled])){background:#0000000d}button:is([aria-pressed=true],:focus-visible){background:var(--color-accent);color:var(--color-text-on-accent)}button:focus-visible{outline:1px solid var(--color-text-on-accent);outline-offset:-2px}button:disabled,:host::part(outside),:host::part(disallowed){cursor:default;opacity:.5}`]});customElements.define("calendar-month",Vf);function So(e){return ke("button",{part:`button ${e.name} ${e.onclick?"":"disabled"}`,onclick:e.onclick,"aria-disabled":e.onclick?null:"true",children:ke("slot",{name:e.name,children:e.children})})}function xs(e){const t=xt(e.page.start),r=xt(e.page.end);return pn("div",{role:"group","aria-labelledby":"h",part:"container",children:[ke("div",{id:"h",class:"vh","aria-live":"polite","aria-atomic":"true",children:e.formatVerbose.formatRange(t,r)}),pn("div",{part:"header",children:[ke(So,{name:"previous",onclick:e.previous,children:"Previous"}),ke("slot",{part:"heading",name:"heading",children:ke("div",{"aria-hidden":"true",children:e.format.formatRange(t,r)})}),ke(So,{name:"next",onclick:e.next,children:"Next"})]}),ke(Ss,{value:e,onselectday:e.onSelect,onfocusday:e.onFocus,onhoverday:e.onHover,children:ke("slot",{})})]})}const Es={value:{type:String,value:""},min:{type:String,value:""},max:{type:String,value:""},today:{type:String,value:""},isDateDisallowed:{type:Function,value:e=>!1},formatWeekday:{type:String,value:()=>"narrow"},getDayParts:{type:Function,value:e=>""},firstDayOfWeek:{type:Number,value:()=>1},showOutsideDays:{type:Boolean,value:!1},locale:{type:String,value:()=>{}},months:{type:Number,value:1},focusedDate:{type:String,value:()=>{}},pageBy:{type:String,value:()=>"months"}},$s=[nl,al,ua`:host{display:block;inline-size:fit-content}[role=group]{display:flex;flex-direction:column;gap:1em}:host::part(header){display:flex;align-items:center;justify-content:space-between}:host::part(heading){font-weight:700;font-size:1.25em}button{display:flex;align-items:center;justify-content:center}button[aria-disabled]{cursor:default;opacity:.5}`],Wf={year:"numeric"},Uf={year:"numeric",month:"long"};function Oa(e,t){return(t.year-e.year)*12+t.month-e.month}const xo=(e,t)=>(e=t===12?new fa(e.year,1):e,{start:e,end:e.add({months:t-1})});function Gf({pageBy:e,focusedDate:t,months:r,max:n,min:a,goto:s}){const o=e==="single"?1:r,[l,c]=gs(()=>xo(t.toPlainYearMonth(),r)),f=h=>c(xo(l.start.add({months:h}),r)),d=h=>{const p=Oa(l.start,h.toPlainYearMonth());return p>=0&&p<r};return En(()=>{if(d(t))return;const h=Oa(t.toPlainYearMonth(),l.start);s(t.add({months:h}))},[l.start]),En(()=>{if(d(t))return;const h=Oa(l.start,t.toPlainYearMonth());f(h===-1?-o:h===r?o:Math.floor(h/r)*r)},[t,o,r]),{page:l,previous:!a||!d(a)?()=>f(-o):void 0,next:!n||!d(n)?()=>f(o):void 0}}function ks({months:e,pageBy:t,locale:r,focusedDate:n,setFocusedDate:a}){const[s]=lr("min"),[o]=lr("max"),[l]=lr("today"),c=ir("focusday"),f=ir("change"),d=Yt(()=>da(n??l??ys(),s,o),[n,l,s,o]);function h(y){a(y),c(xt(y))}const{next:p,previous:m,page:_}=Gf({pageBy:t,focusedDate:d,months:e,min:s,max:o,goto:h}),x=Tn();function b(y){const A=y?.target??"day";A==="day"?x.current.querySelectorAll("calendar-month").forEach(D=>D.focus(y)):x.current.shadowRoot.querySelector(`[part~='${A}']`).focus(y)}return{format:$n(Wf,r),formatVerbose:$n(Uf,r),page:_,focusedDate:d,dispatch:f,onFocus(y){y.stopPropagation(),h(y.detail),setTimeout(b)},min:s,max:o,today:l,next:p,previous:m,focus:b}}const Hf=Nn(e=>{const[t,r]=lr("value"),[n=t,a]=lr("focusedDate"),s=ks({...e,focusedDate:n,setFocusedDate:a});function o(l){r(l.detail),s.dispatch()}return ke("host",{shadowDom:!0,focus:s.focus,children:ke(xs,{...e,...s,type:"date",value:t,onSelect:o})})},{props:Es,styles:$s});customElements.define("calendar-date",Hf);const Eo=(e,t)=>Ve.compare(e,t)<0?[e,t]:[t,e],Kf=Nn(e=>{const[t,r]=Rf("value"),[n=t[0],a]=lr("focusedDate"),s=ks({...e,focusedDate:n,setFocusedDate:a}),o=ir("rangestart"),l=ir("rangeend"),[c,f]=lr("tentative"),[d,h]=gs();En(()=>h(void 0),[c]);function p(b){s.onFocus(b),m(b)}function m(b){b.stopPropagation(),c&&h(b.detail)}function _(b){const y=b.detail;b.stopPropagation(),c?(r(Eo(c,y)),f(void 0),l(xt(y)),s.dispatch()):(f(y),o(xt(y)))}const x=c?Eo(c,d??c):t;return ke("host",{shadowDom:!0,focus:s.focus,children:ke(xs,{...e,...s,type:"range",value:x,onFocus:p,onHover:m,onSelect:_})})},{props:{...Es,tentative:{type:String,value:""}},styles:$s});customElements.define("calendar-range",Kf);const Qf=Nn(e=>{const[t,r]=Of("value"),[n=t[0],a]=lr("focusedDate"),s=ks({...e,focusedDate:n,setFocusedDate:a});function o(l){const c=[...t],f=t.findIndex(d=>d.equals(l.detail));f<0?c.push(l.detail):c.splice(f,1),r(c),s.dispatch()}return ke("host",{shadowDom:!0,focus:s.focus,children:ke(xs,{...e,...s,type:"multi",value:t,onSelect:o})})},{props:Es,styles:$s});customElements.define("calendar-multi",Qf);async function Yf(e,t){await t.modalState?.addStock()}var Zf=P('<span class="loading loading-spinner loading-sm"></span>'),Jf=P('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Xf=P('<span class="loading loading-spinner loading-xs"></span>'),Ff=P('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),ev=P('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),tv=P(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input validator"><!> <input placeholder="Quantité" type="number" step="0.01" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="select select-bordered" required><option disabled selected><!>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea" placeholder="remarques..."></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function rv(e,t){G(t,!0);const r=B(()=>t.modalState.forms.stock);let n=B(()=>i(r)&&i(r).quantity&&i(r).quantity>0&&i(r).unit);async function a(J){await t.modalState?.removeStock(J)}var s=tv(),o=u(s),l=u(o);Ya(l,{class:"h-5 w-5"});var c=v(o,2),f=u(c),d=v(u(f),2),h=u(d),p=u(h);ca(p,{class:"h-4 w-4 opacity-50"});var m=v(p,2),_=v(h,2),x=u(_),b=u(x);Li(b,{class:"h-4 w-4 opacity-50"}),x.value=x.__value="";var y=v(x);y.value=y.__value="kg";var A=v(y);A.value=A.__value="gr.";var D=v(A);D.value=D.__value="l.";var E=v(D);E.value=E.__value="ml";var $=v(E);$.value=$.__value="unité";var T=v($);T.value=T.__value="bottes";var R=v(d,2),S=u(R),q=v(R,2),I=u(q);I.__click=[Yf,t];var U=u(I);{var ee=J=>{var k=Zf();g(J,k)},Ne=J=>{var k=ct("Ajouter au stock");g(J,k)};O(U,J=>{t.modalState.loading?J(ee):J(Ne,!1)})}var Se=v(c,2);{var fe=J=>{var k=Jf(),W=u(k);Ya(W,{class:"mx-auto mb-2 h-12 w-12"}),g(J,k)},Me=J=>{var k=ev(),W=u(k),pe=v(u(W));ze(pe,23,()=>t.modalState.stockEntries,we=>we.dateTime,(we,ve,nt)=>{var at=Ff(),oe=u(at),me=u(oe),Be=v(oe),Re=u(Be),Ae=v(Be),Oe=u(Ae),De=v(Ae),We=u(De);We.__click=()=>a(i(nt));var Xe=u(We);{var Lt=de=>{var j=Xf();g(de,j)},X=de=>{var j=ct("Supprimer");g(de,j)};O(Xe,de=>{t.modalState.loading?de(Lt):de(X,!1)})}L(de=>{M(me,`${i(ve).quantity??""}
                ${i(ve).unit??""}`),M(Re,de),M(Oe,i(ve).notes||"-"),We.disabled=t.modalState.loading},[()=>xn(i(ve).dateTime)]),g(we,at)}),g(J,k)};O(Se,J=>{t.modalState.stockEntries.length===0?J(fe):J(Me,!1)})}L(()=>{hs(S,`          ${i(r).notes??""}
        `),I.disabled=t.modalState.loading||!i(n)}),et(m,()=>i(r).quantity,J=>i(r).quantity=J),Va(_,()=>i(r).unit,J=>i(r).unit=J),et(S,()=>i(r).notes,J=>i(r).notes=J),g(e,s),H()}Bt(["click"]);var nv=(e,t)=>{e.key==="Enter"&&t()},av=P("<option> </option>"),sv=(e,t,r)=>t(r),ov=P('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),iv=P('<span class="loading loading-spinner loading-sm"></span>'),lv=P('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function cv(e,t){G(t,!0);let r=F("");const n=B(()=>i(r).trim().length>0&&!t.modalState.whoList.includes(i(r).trim()));async function a(){!i(n)||!t.modalState||(await t.modalState.addVolunteer(i(r).trim()),N(r,""))}async function s(E){await t.modalState?.removeVolunteer(E)}var o=lv(),l=u(o),c=u(l),f=v(u(c),2),d=u(f);_s(d,{class:"h-4 w-4 opacity-50"});var h=v(d,2);h.__keydown=[nv,a];var p=v(h,2);ze(p,21,()=>C.uniqueWho,jr,(E,$)=>{var T=av(),R=u(T),S={};L(()=>{M(R,i($)),S!==(S=i($))&&(T.value=(T.__value=i($))??"")}),g(E,T)});var m=v(f,2),_=v(u(m),2);ze(_,20,()=>t.modalState.whoList,E=>E,(E,$)=>{var T=ov(),R=u(T),S=v(R);S.__click=[sv,s,$];var q=u(S);_t(q,{class:"h-3 w-3"}),L(()=>{M(R,`${$??""} `),S.disabled=t.modalState.loading}),g(E,T)});var x=v(m,2),b=u(x);b.__click=a;var y=u(b);{var A=E=>{var $=iv();g(E,$)},D=E=>{var $=ct("Ajouter");g(E,$)};O(y,E=>{t.modalState.loading?E(A):E(D,!1)})}L(()=>b.disabled=t.modalState.loading||!i(n)),et(h,()=>i(r),E=>N(r,E)),g(e,o),H()}Bt(["keydown","click"]);var uv=(e,t)=>{e.key==="Enter"&&t()},dv=P("<option> </option>"),fv=P('<span class="loading loading-spinner loading-sm"></span>'),vv=(e,t,r)=>{N(t,""),N(r,"")},hv=P(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function pv(e,t){G(t,!0);const r=B(()=>t.modalState.forms.store),n=B(()=>i(r).name||""),a=B(()=>i(r).comment||"");let s=F(mt(i(n))),o=F(mt(i(a)));const l=B(()=>i(s).trim()!==(i(r).name||"")||i(o).trim()!==(i(r).comment||""));async function c(){if(!i(l))return;const S={storeName:i(s).trim(),storeComment:i(o).trim()};await t.modalState.updateStore(S)}var f=hv(),d=u(f),h=u(d),p=v(u(h),4),m=u(p),_=u(m);Sn(_,{class:"h-4 w-4 opacity-50"});var x=v(_,2);x.__keydown=[uv,c];var b=v(x,2);ze(b,21,()=>C.uniqueStores,jr,(S,q)=>{var I=dv(),U=u(I),ee={};L(()=>{M(U,i(q)),ee!==(ee=i(q))&&(I.value=(I.__value=i(q))??"")}),g(S,I)});var y=v(m,2),A=v(p,2),D=u(A);D.__click=c;var E=u(D);{var $=S=>{var q=fv();g(S,q)},T=S=>{var q=ct("Mettre à jour");g(S,q)};O(E,S=>{t.modalState.loading?S($):S(T,!1)})}var R=v(D,2);R.__click=[vv,s,o],L(()=>{hs(y,`          ${i(o)??""}
        `),D.disabled=t.modalState.loading||!i(l),R.disabled=t.modalState.loading}),et(x,()=>i(s),S=>N(s,S)),et(y,()=>i(o),S=>N(o,S)),g(e,f),H()}Bt(["keydown","click"]);var mv=P('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),_v=P('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td><td> </td></tr>'),gv=P('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),bv=P('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>');function yv(e,t){G(t,!0);const r=B(()=>t.modalState.recipes);var n=bv(),a=u(n),s=u(a);ms(s,{class:"h-5 w-5"});var o=v(a,2);{var l=f=>{var d=mv(),h=u(d);ca(h,{class:"mx-auto mb-2 h-12 w-12"}),g(f,d)},c=f=>{var d=gv(),h=u(d),p=v(u(h));ze(p,21,()=>i(r),m=>m.recipeName+m.dateTimeService,(m,_)=>{var x=_v(),b=u(x),y=u(b),A=v(b),D=u(A),E=v(A),$=u(E),T=v(E),R=u(T),S=v(T),q=u(S);L(I=>{M(y,i(_).recipeName),M(D,`${i(_).quantity??""} ${i(_).unit??""}`),M($,I),M(R,i(_).typePlat),M(q,i(_).assiettes||"-")},[()=>xn(i(_).dateTimeService)]),g(m,x)}),g(f,d)};O(o,f=>{i(r).length===0?f(l):f(c,!1)})}g(e,n),H()}var wv=P('<div class="badge badge-success gap-1"><!> Actif</div>'),Sv=P('<div class="badge badge-warning gap-1"><!> </div>'),xv=(e,t)=>t("recettes"),Ev=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),$v=(e,t)=>t("achats"),kv=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Pv=(e,t)=>t("stock"),Tv=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Nv=(e,t)=>t("volontaires"),Av=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Dv=(e,t)=>t("magasins"),Iv=P('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Mv=P('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div> <div class="text-sm opacity-75"><span class="font-medium">Stock:</span> </div></div> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function Cv(e,t){G(t,!0);let r=B(()=>Ot.product.tab),n=B(()=>Ot.product.id),a=B(()=>Ot.product.isOpen),s=B(()=>i(n)?Id(i(n)):null),o=B(()=>i(s)?.product);function l(h){Ot.product.tab=h}var c=K(),f=V(c);{var d=h=>{var p=Mv(),m=u(p),_=u(m),x=u(_),b=u(x),y=v(x,2),A=u(y),D=u(A),E=v(A,2);{var $=z=>{var _e=wv(),Pe=u(_e);_d(Pe,{class:"h-3 w-3"}),g(z,_e)},T=z=>{var _e=Sv(),Pe=u(_e);qi(Pe,{class:"h-3 w-3"});var bt=v(Pe);L(()=>M(bt,` ${i(o).status??""}`)),g(z,_e)};O(E,z=>{i(o).status==="active"?z($):z(T,!1)})}var R=v(E,2),S=v(u(R)),q=v(R,2),I=v(u(q)),U=v(y,2);U.__click=function(...z){vo?.apply(this,z)};var ee=u(U);_t(ee,{class:"h-4 w-4"});var Ne=v(_,2),Se=u(Ne);Se.__click=[xv,l];var fe=u(Se);ms(fe,{class:"mr-1 h-5 w-5"});var Me=v(fe,2);{var J=z=>{var _e=Ev(),Pe=u(_e);L(()=>M(Pe,i(s).recipes.length)),g(z,_e)};O(Me,z=>{i(s).recipes.length>0&&z(J)})}var k=v(Se,2);k.__click=[$v,l];var W=u(k);Yn(W,{class:"mr-1 h-5 w-5"});var pe=v(W,2);{var we=z=>{var _e=kv(),Pe=u(_e);L(()=>M(Pe,i(s).purchasesList.length)),g(z,_e)};O(pe,z=>{i(s).purchasesList.length>0&&z(we)})}var ve=v(k,2);ve.__click=[Pv,l];var nt=u(ve);Ya(nt,{class:"mr-1 h-5 w-5"});var at=v(nt,2);{var oe=z=>{var _e=Tv(),Pe=u(_e);L(()=>M(Pe,i(s).stockEntries.length)),g(z,_e)};O(at,z=>{i(s).stockEntries.length>0&&z(oe)})}var me=v(ve,2);me.__click=[Nv,l];var Be=u(me);Bi(Be,{class:"mr-1 h-5 w-5"});var Re=v(Be,2);{var Ae=z=>{var _e=Av(),Pe=u(_e);L(()=>M(Pe,i(o).who.length)),g(z,_e)};O(Re,z=>{i(o).who&&i(o).who.length>0&&z(Ae)})}var Oe=v(me,2);Oe.__click=[Dv,l];var De=u(Oe);Sn(De,{class:"mr-1 h-5 w-5"});var We=v(Ne,2),Xe=u(We);{var Lt=z=>{var _e=Iv(),Pe=u(_e);_t(Pe,{class:"h-4 w-4"});var bt=v(Pe,2),jt=u(bt);L(()=>M(jt,`erreur : ${i(s).error??""}`)),g(z,_e)};O(Xe,z=>{i(s).error&&z(Lt)})}var X=v(Xe,2),de=u(X);{var j=z=>{yv(z,{get modalState(){return i(s)}})},Ie=z=>{var _e=K(),Pe=V(_e);{var bt=Le=>{Yd(Le,{get modalState(){return i(s)}})},jt=Le=>{var Et=K(),$t=V(Et);{var hr=Fe=>{rv(Fe,{get modalState(){return i(s)}})},zt=Fe=>{var yt=K(),kt=V(yt);{var Pt=Ue=>{cv(Ue,{get modalState(){return i(s)}})},Vt=Ue=>{var Wt=K(),Ut=V(Wt);{var Ft=Tt=>{pv(Tt,{get modalState(){return i(s)}})};O(Ut,Tt=>{i(r)==="magasins"&&Tt(Ft)},!0)}g(Ue,Wt)};O(kt,Ue=>{i(r)==="volontaires"?Ue(Pt):Ue(Vt,!1)},!0)}g(Fe,yt)};O($t,Fe=>{i(r)==="stock"?Fe(hr):Fe(zt,!1)},!0)}g(Le,Et)};O(Pe,Le=>{i(r)==="achats"?Le(bt):Le(jt,!1)},!0)}g(z,_e)};O(de,z=>{i(r)==="recettes"?z(j):z(Ie,!1)})}var Ee=v(We,2),ne=u(Ee);ne.__click=function(...z){vo?.apply(this,z)},L(()=>{M(b,i(o).productName),M(D,i(o).productType),M(S,` ${i(o).displayTotalNeeded??""}`),M(I,` ${i(o).displayTotalStock??""}`),Ce(Se,1,`tab ${i(r)==="recettes"?"tab-active":""}`),Ce(k,1,`tab ${i(r)==="achats"?"tab-active":""}`),Ce(ve,1,`tab ${i(r)==="stock"?"tab-active":""}`),Ce(me,1,`tab ${i(r)==="volontaires"?"tab-active":""}`),Ce(Oe,1,`tab ${i(r)==="magasins"?"tab-active":""}`)}),g(h,p)};O(f,h=>{i(a)&&i(o)&&i(s)&&h(d)})}g(e,c),H()}Bt(["click"]);var Rv=()=>C.setGroupBy("none"),Ov=()=>C.setGroupBy("store"),qv=()=>C.setGroupBy("productType"),Bv=(e,t)=>C.toggleProductType(t),Lv=P("<button><!> </button>"),jv=()=>C.toggleTemperature("frais"),zv=()=>C.toggleTemperature("surgele"),Vv=()=>C.clearTypeAndTemperatureFilters(),Wv=P('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Uv=(e,t)=>C.toggleStore(t),Gv=P("<button> </button>"),Hv=P('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Kv=(e,t)=>C.toggleWho(t),Qv=P("<button> </button>"),Yv=P('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Zv=(e,t)=>{C.clearFilters(),N(t,!1)},Jv=P('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Xv(e,t){G(t,!0);let r=F(!1);const n=B(()=>C.filters),a=B(()=>C.uniqueStores),s=B(()=>C.uniqueWho),o=B(()=>C.uniqueProductTypes);var l=Jv(),c=V(l),f=u(c),d=v(f,2),h=v(u(d),2),p=u(h),m=u(p),_=u(m);Za(_,{class:"w-5 h-5"});var x=v(m,2),b=u(x);_t(b,{class:"w-4 h-4"});var y=v(p,2),A=v(u(y),2),D=u(A);D.__change=[Rv];var E=v(D,2);E.__change=[Ov];var $=v(E,2);$.__change=[qv];var T=v(y,2),R=u(T),S=v(u(R),2);ze(S,20,()=>i(o),oe=>oe,(oe,me)=>{const Be=B(()=>Un(me));var Re=Lv();Re.__click=[Bv,me];var Ae=u(Re);Ln(Ae,()=>i(Be).icon,(De,We)=>{We(De,{class:"w-3 h-3 mr-1"})});var Oe=v(Ae);L(De=>{Ce(Re,1,`btn btn-sm ${De??""}`),M(Oe,` ${i(Be).displayName??""}`)},[()=>i(n).selectedProductTypes.length===0?"btn-soft btn-accent":i(n).selectedProductTypes.includes(me)?"btn-accent":"btn-dash btn-accent"]),g(oe,Re)});var q=v(S,2),I=u(q);I.__click=[jv];var U=u(I);Vn(U,{class:"w-3 h-3"});var ee=v(I,2);ee.__click=[zv];var Ne=u(ee);Wn(Ne,{class:"w-3 h-3"});var Se=v(ee,2);{var fe=oe=>{var me=Wv();me.__click=[Vv];var Be=u(me);_t(Be,{class:"w-3 h-3"}),g(oe,me)};O(Se,oe=>{(i(n).selectedProductTypes.length>0||i(n).selectedTemperatures.length>0)&&oe(fe)})}var Me=v(T,2);{var J=oe=>{var me=Hv(),Be=u(me),Re=v(u(Be),2);ze(Re,20,()=>i(a),Ae=>Ae,(Ae,Oe)=>{var De=Gv();De.__click=[Uv,Oe];var We=u(De);L(Xe=>{Ce(De,1,`btn btn-sm ${Xe??""}`),M(We,Oe)},[()=>i(n).selectedStores.length===0?"btn-soft btn-accent":i(n).selectedStores.includes(Oe)?"btn-accent":"btn-dash btn-accent"]),g(Ae,De)}),g(oe,me)};O(Me,oe=>{i(a).length>0&&oe(J)})}var k=v(Me,2);{var W=oe=>{var me=Yv(),Be=u(me),Re=v(u(Be),2);ze(Re,20,()=>i(s),Ae=>Ae,(Ae,Oe)=>{var De=Qv();De.__click=[Kv,Oe];var We=u(De);L(Xe=>{Ce(De,1,`btn btn-sm ${Xe??""}`),M(We,Oe)},[()=>i(n).selectedWho.length===0?"btn-soft btn-accent":i(n).selectedWho.includes(Oe)?"btn-accent":"btn-dash btn-accent"]),g(Ae,De)}),g(oe,me)};O(k,oe=>{i(s).length>0&&oe(W)})}var pe=v(k,4);pe.__click=[Zv,r];var we=u(pe);_t(we,{class:"w-4 h-4 mr-2"});var ve=v(c,2),nt=u(ve),at=u(nt);Za(at,{class:"w-6 h-6"}),L((oe,me)=>{zr(D,i(n).groupBy==="none"),zr(E,i(n).groupBy==="store"),zr($,i(n).groupBy==="productType"),Ce(I,1,`btn btn-sm ${oe??""}`),Ce(ee,1,`btn btn-sm ${me??""}`)},[()=>i(n).selectedTemperatures.length===0?"btn-soft btn-success":i(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(n).selectedTemperatures.length===0?"btn-soft btn-info":i(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Xc(f,()=>i(r),oe=>N(r,oe)),g(e,l),H()}Bt(["change","click"]);var Fv=(e,t)=>{e.preventDefault(),t("min")},eh=(e,t)=>{e.preventDefault(),t("max")},th=P(`<div class="alert alert-warning"><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4v2m0-6a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> <span>Aucune date disponible. Chargez les produits d'abord.</span></div>`),rh=P('<div><div class="relative space-y-6"><div class="flex items-center justify-between"><h3 class="text-lg font-semibold">Plage de dates</h3> <div class="badge badge-info"> </div></div> <div class="relative py-8"><div id="multi-range-slider" class="bg-base-300 relative h-2 cursor-pointer rounded-full" role="group" aria-label="Sélection de plage de dates"><div class="bg-primary absolute h-2 rounded-full"></div> <button type="button" role="slider" aria-label="Date de début" aria-valuemin="0" aria-valuemax="100" tabindex="0" class="btn btn-primary btn-circle btn-xs absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-grab border-0 shadow-lg active:cursor-grabbing"><span class="sr-only"> </span></button> <button type="button" role="slider" aria-label="Date de fin" aria-valuemin="0" aria-valuemax="100" tabindex="0" class="btn btn-primary btn-circle btn-xs absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-grab border-0 shadow-lg active:cursor-grabbing"><span class="sr-only"> </span></button></div> <div class="text-base-content/70 mt-8 flex justify-between text-xs font-medium"><div class="text-left"><div class="text-base-content"> </div> <div class="text-base-content/50">Début disponible</div></div> <div class="text-right"><div class="text-base-content"> </div> <div class="text-base-content/50">Fin disponible</div></div></div></div> <div class="bg-base-200/50 border-base-300 space-y-2 rounded-lg border p-4"><div class="flex items-center justify-between"><span class="text-sm font-medium">Début sélectionné :</span> <span class="badge badge-outline"> </span></div> <div class="flex items-center justify-between"><span class="text-sm font-medium">Fin sélectionnée :</span> <span class="badge badge-outline"> </span></div> <div class="divider my-2"></div> <div class="flex items-center justify-between"><span class="text-sm font-medium">Période :</span> <span class="badge badge-lg badge-primary"> </span></div></div> <!></div></div>');function nh(e,t){G(t,!0);const r=yr(t,"class",3,"");let n=F(0),a=F(100),s=F(!1),o=F(!1);const l=B(()=>C.firstDate),c=B(()=>C.lastDate),f=B(()=>{if(!i(l)||!i(c))return 0;const j=new Date(i(l)),Ie=new Date(i(c));return Math.ceil((Ie.getTime()-j.getTime())/(1e3*60*60*24))});function d(j){if(!i(l)||i(f)===0)return i(l)||"";const Ie=Math.round(j/100*i(f)),Ee=new Date(i(l));return Ee.setDate(Ee.getDate()+Ie),Ee.toISOString().split("T")[0]}function h(j){if(!i(l)||!i(c)||i(f)===0)return 0;const Ie=new Date(j),Ee=new Date(i(l)),ne=Math.ceil((Ie.getTime()-Ee.getTime())/(1e3*60*60*24));return Math.min(100,Math.max(0,ne/i(f)*100))}function p(j){return j?new Intl.DateTimeFormat("fr-FR",{day:"numeric",month:"long",year:"numeric"}).format(new Date(j)):""}function m(j){return j?new Intl.DateTimeFormat("fr-FR",{day:"numeric",month:"short"}).format(new Date(j)):""}function _(j){N(j==="min"?s:o,!0)}function x(j){if(!i(s)&&!i(o))return;const Ie=document.getElementById("multi-range-slider");if(!Ie)return;const Ee=Ie.getBoundingClientRect(),ne=Math.min(100,Math.max(0,(j.clientX-Ee.left)/Ee.width*100));if(i(s)){N(n,Math.min(ne,i(a)-5),!0);const z=d(i(n));C.setStartDate(z)}else if(i(o)){N(a,Math.max(ne,i(n)+5),!0);const z=d(i(a));C.setEndDate(z)}}function b(){N(s,!1),N(o,!1)}un(()=>{if(i(s)||i(o))return document.addEventListener("mousemove",x),document.addEventListener("mouseup",b),()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",b)}}),un(()=>{if(C.startDate&&i(l)){const j=h(C.startDate);Math.abs(j-i(n))>.5&&N(n,j,!0)}}),un(()=>{if(C.endDate&&i(c)){const j=h(C.endDate);Math.abs(j-i(a))>.5&&N(a,j,!0)}});const y=B(()=>d(i(n))),A=B(()=>d(i(a))),D=B(()=>Math.round((i(a)-i(n))*i(f)/100));var E=rh(),$=u(E),T=u($),R=v(u(T),2),S=u(R),q=v(T,2),I=u(q),U=u(I),ee=v(U,2);ee.__mousedown=[Fv,_];var Ne=u(ee),Se=u(Ne),fe=v(ee,2);fe.__mousedown=[eh,_];var Me=u(fe),J=u(Me),k=v(I,2),W=u(k),pe=u(W),we=u(pe),ve=v(W,2),nt=u(ve),at=u(nt),oe=v(q,2),me=u(oe),Be=v(u(me),2),Re=u(Be),Ae=v(me,2),Oe=v(u(Ae),2),De=u(Oe),We=v(Ae,4),Xe=v(u(We),2),Lt=u(Xe),X=v(oe,2);{var de=j=>{var Ie=th();g(j,Ie)};O(X,j=>{(!i(l)||!i(c))&&j(de)})}L((j,Ie,Ee,ne,z,_e,Pe,bt,jt,Le)=>{Ce(E,1,`w-full ${r()??""}`),M(S,`${i(D)??""} jour${i(D)>1?"s":""}`),jn(U,`left: ${i(n)??""}%; width: ${i(a)-i(n)}%;`),nr(ee,"aria-valuenow",j),jn(ee,`left: ${i(n)??""}%;`),nr(ee,"title",Ie),M(Se,Ee),nr(fe,"aria-valuenow",ne),jn(fe,`left: ${i(a)??""}%;`),nr(fe,"title",z),M(J,_e),M(we,Pe),M(at,bt),M(Re,jt),M(De,Le),M(Lt,`${i(D)??""} jour${i(D)>1?"s":""}`)},[()=>Math.round(i(n)),()=>p(i(y)),()=>p(i(y)),()=>Math.round(i(a)),()=>p(i(A)),()=>p(i(A)),()=>p(i(l)||""),()=>p(i(c)||""),()=>m(i(y)),()=>m(i(A))]),g(e,E),H()}Bt(["mousedown"]);const sn=e=>{var t=ah(),r=u(t);Oi(r,{class:"h-4 w-4 text-amber-600"}),g(e,t)};var ah=P('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),sh=()=>C.clearFilters(),oh=e=>C.setSearchQuery(e.currentTarget.value),ih=()=>C.setGroupBy("none"),lh=()=>C.setGroupBy("store"),ch=()=>C.setGroupBy("productType"),uh=(e,t)=>C.toggleProductType(t),dh=P("<button><!> </button>"),fh=()=>C.toggleTemperature("frais"),vh=()=>C.toggleTemperature("surgele"),hh=()=>C.clearTypeAndTemperatureFilters(),ph=P('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),mh=P('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),_h=(e,t)=>C.toggleStore(t),gh=P("<button><!> </button>"),bh=()=>C.clearStoreFilters(),yh=P('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),wh=P('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Sh=(e,t)=>C.toggleWho(t),xh=P("<button><!> </button>"),Eh=()=>C.clearWhoFilters(),$h=P('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),kh=P('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Ph=()=>C.handleSort("productName"),Th=()=>C.handleSort("store"),Nh=()=>C.handleSort("who"),Ah=()=>C.handleSort("productType"),Dh=P('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Ih=P('<tr class="bg-base-200 sticky top-10 z-10 font-semibold"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Mh=(e,t,r)=>t("recettes",i(r).$id),Ch=P('<div class="text-base-content/60 text-xs"> </div>'),Rh=P('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Oh=P('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),qh=(e,t,r)=>t("magasins",i(r).$id),Bh=P('<div class="tooltip tooltip-info"> </div>'),Lh=(e,t,r)=>t("volontaires",i(r).$id),jh=P('<span class="badge badge-soft badge-info badge-sm"> </span>'),zh=P('<div class="flex flex-wrap gap-1 pr-8"></div>'),Vh=(e,t,r)=>t("recettes",i(r).$id),Wh=P('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Uh=(e,t,r)=>t("achats",i(r).$id),Gh=P('<div class="bg-warning m-auto rounded px-2 py-1"> </div>'),Hh=P('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"> <!></td><td class="group relative text-center"><!></td></tr>'),Kh=P("<!> <!>",1),Qh=P('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Yh=P('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><!> <div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function Zh(e,t){G(t,!0);const r=B(()=>C.filteredProducts),n=B(()=>C.filteredGroupedProducts),a=B(()=>C.stats),s=B(()=>C.uniqueStores),o=B(()=>C.uniqueWho),l=B(()=>C.uniqueProductTypes),c=B(()=>C.filters),f=B(()=>C.formattedTotalNeededByDateRange);function d(Q,be){Nd(Q,be)}var h=Yh(),p=V(h),m=u(p),_=u(m),x=u(_);fo(x,{class:"mr-1 h-4 w-4"});var b=v(x),y=v(_,2),A=u(y);Vn(A,{class:"mr-1 h-4 w-4"});var D=v(A),E=v(y,2),$=u(E);Wn($,{class:"mr-1 h-4 w-4"});var T=v($),R=v(E,2),S=u(R);gd(S,{class:"mr-1 h-4 w-4"});var q=v(S),I=v(m,2),U=u(I),ee=u(U),Ne=u(ee),Se=u(Ne);Za(Se,{class:"h-5 w-5"});var fe=v(Ne,2);fe.__click=[sh];var Me=u(fe);_t(Me,{class:"h-4 w-4"});var J=v(U,2),k=u(J),W=v(u(k),2),pe=u(W);Pd(pe,{class:"h-4 w-4"});var we=v(pe,2);we.__input=[oh];var ve=v(k,2),nt=v(u(ve),2),at=u(nt);at.__change=[ih];var oe=v(at,2);oe.__change=[lh];var me=v(oe,2);me.__change=[ch];var Be=v(J,2),Re=u(Be);nh(Re,{class:"mb-6"});var Ae=v(Re,2),Oe=u(Ae);{var De=Q=>{var be=mh(),Nt=u(be),ft=v(u(Nt),2),Qe=u(ft);ze(Qe,16,()=>i(l),je=>je,(je,Ge)=>{const At=B(()=>Un(Ge));var Gt=dh();Gt.__click=[uh,Ge];var _r=u(Gt);Ln(_r,()=>i(At).icon,(vt,Ht)=>{Ht(vt,{class:"mr-1 h-5 w-5"})});var Rr=v(_r);L(vt=>{Ce(Gt,1,`btn btn-sm ${vt??""}`),M(Rr,` ${i(At).displayName??""}`)},[()=>i(c).selectedProductTypes.length===0?"btn-soft btn-accent":i(c).selectedProductTypes.includes(Ge)?"btn-accent":"btn-dash btn-accent"]),g(je,Gt)});var it=v(Qe,2);it.__click=[fh];var he=u(it);Vn(he,{class:"h-5 w-5"});var ge=v(it,2);ge.__click=[vh];var Te=u(ge);Wn(Te,{class:"h-5 w-5"});var $e=v(ge,2);{var Y=je=>{var Ge=ph();Ge.__click=[hh];var At=u(Ge);_t(At,{class:"h-3 w-3"}),g(je,Ge)};O($e,je=>{(i(c).selectedProductTypes.length>0||i(c).selectedTemperatures.length>0)&&je(Y)})}L((je,Ge)=>{Ce(it,1,`btn btn-sm ms-4 ${je??""}`),Ce(ge,1,`btn btn-sm ${Ge??""}`)},[()=>i(c).selectedTemperatures.length===0?"btn-soft btn-success":i(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(c).selectedTemperatures.length===0?"btn-soft btn-info":i(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),g(Q,be)};O(Oe,Q=>{i(l).length>0&&Q(De)})}var We=v(Ae,2),Xe=u(We);{var Lt=Q=>{var be=wh(),Nt=u(be),ft=v(u(Nt),2),Qe=u(ft);ze(Qe,16,()=>i(s),ge=>ge,(ge,Te)=>{var $e=gh();$e.__click=[_h,Te];var Y=u($e);Sn(Y,{class:"mr-1 h-3 w-3"});var je=v(Y);L(Ge=>{Ce($e,1,`btn btn-xs ${Ge??""}`),M(je,` ${Te??""}`)},[()=>i(c).selectedStores.length===0?"btn-soft btn-accent":i(c).selectedStores.includes(Te)?"btn-accent":"btn-dash btn-accent"]),g(ge,$e)});var it=v(Qe,2);{var he=ge=>{var Te=yh();Te.__click=[bh];var $e=u(Te);_t($e,{class:"h-3 w-3"}),g(ge,Te)};O(it,ge=>{i(c).selectedStores.length>0&&ge(he)})}g(Q,be)};O(Xe,Q=>{i(s).length>0&&Q(Lt)})}var X=v(Xe,2);{var de=Q=>{var be=kh(),Nt=u(be),ft=v(u(Nt),2),Qe=u(ft);ze(Qe,16,()=>i(o),ge=>ge,(ge,Te)=>{var $e=xh();$e.__click=[Sh,Te];var Y=u($e);_s(Y,{class:"mr-1 h-3 w-3"});var je=v(Y);L(Ge=>{Ce($e,1,`btn btn-xs ${Ge??""}`),M(je,` ${Te??""}`)},[()=>i(c).selectedWho.length===0?" btn-soft btn-info":i(c).selectedWho.includes(Te)?" btn-info":"btn-dash btn-info"]),g(ge,$e)});var it=v(Qe,2);{var he=ge=>{var Te=$h();Te.__click=[Eh];var $e=u(Te);_t($e,{class:"h-3 w-3"}),g(ge,Te)};O(it,ge=>{i(c).selectedWho.length>0&&ge(he)})}g(Q,be)};O(X,Q=>{i(o).length>0&&Q(de)})}var j=v(I,2),Ie=u(j),Ee=u(Ie),ne=u(Ee),z=u(ne);z.__click=[Ph];var _e=u(z),Pe=u(_e);fo(Pe,{class:"h-4 w-4"});var bt=v(Pe,2);{var jt=Q=>{var be=ct();L(()=>M(be,i(c).sortDirection==="asc"?"↑":"↓")),g(Q,be)};O(bt,Q=>{i(c).sortColumn==="productName"&&Q(jt)})}var Le=v(z);Le.__click=[Th];var Et=u(Le),$t=u(Et);Sn($t,{class:"h-4 w-4"});var hr=v($t,2);{var zt=Q=>{var be=ct();L(()=>M(be,i(c).sortDirection==="asc"?"↑":"↓")),g(Q,be)};O(hr,Q=>{i(c).sortColumn==="store"&&Q(zt)})}var Fe=v(Le);Fe.__click=[Nh];var yt=u(Fe),kt=u(yt);Bi(kt,{class:"h-4 w-4"});var Pt=v(kt,2);{var Vt=Q=>{var be=ct();L(()=>M(be,i(c).sortDirection==="asc"?"↑":"↓")),g(Q,be)};O(Pt,Q=>{i(c).sortColumn==="who"&&Q(Vt)})}var Ue=v(Fe);Ue.__click=[Ah];var Wt=u(Ue),Ut=v(u(Wt));{var Ft=Q=>{var be=ct();L(()=>M(be,i(c).sortDirection==="asc"?"↑":"↓")),g(Q,be)};O(Ut,Q=>{i(c).sortColumn==="productType"&&Q(Ft)})}var Tt=v(Ue,2),Dr=u(Tt),pr=u(Dr);Yn(pr,{class:"h-4 w-4"});var Ir=v(Tt),mr=u(Ir),Mr=u(mr);wd(Mr,{class:"h-4 w-4"});var en=v(Ee);ze(en,21,()=>Object.entries(i(n)),([Q,be])=>Q,(Q,be)=>{var Nt=B(()=>To(i(be),2));let ft=()=>i(Nt)[0],Qe=()=>i(Nt)[1];var it=Kh(),he=V(it);{var ge=$e=>{const Y=B(()=>Un(ft()));var je=Ih(),Ge=u(je),At=u(Ge),Gt=u(At);{var _r=vt=>{var Ht=ct();L(()=>M(Ht,`🏪 ${ft()??""} (${Qe().length??""})`)),g(vt,Ht)},Rr=vt=>{var Ht=K(),ha=V(Ht);{var pa=tr=>{var gr=Dh(),Dn=u(gr);Ln(Dn,()=>i(Y).icon,(_a,ga)=>{ga(_a,{class:"h-4 w-4"})});var In=v(Dn,2),Or=u(In),Mn=v(In,2),ma=u(Mn);L(()=>{M(Or,i(Y).displayName),M(ma,`(${Qe().length??""})`)}),g(tr,gr)},An=tr=>{var gr=ct();L(()=>M(gr,`📦 ${ft()??""} (${Qe().length??""})`)),g(tr,gr)};O(ha,tr=>{i(c).groupBy==="productType"?tr(pa):tr(An,!1)},!0)}g(vt,Ht)};O(Gt,vt=>{i(c).groupBy==="store"?vt(_r):vt(Rr,!1)})}g($e,je)};O(he,$e=>{ft()!==""&&$e(ge)})}var Te=v(he,2);ze(Te,17,()=>Dd(Qe(),i(c)),$e=>$e.$id,($e,Y)=>{const je=B(()=>Un(i(Y).productType));var Ge=Hh(),At=u(Ge);At.__click=[Mh,d,Y];var Gt=u(At),_r=u(Gt),Rr=u(_r),vt=u(Rr),Ht=v(Rr,2);{var ha=Z=>{var ye=Ch(),Ye=u(ye);L(()=>M(Ye,`Ancien: ${i(Y).previousNames[0]??""}`)),g(Z,ye)};O(Ht,Z=>{i(Y).previousNames&&i(Y).previousNames.length>0&&Z(ha)})}var pa=v(_r,2),An=u(pa);{var tr=Z=>{var ye=Rh(),Ye=u(ye);Vn(Ye,{class:"text-success h-4 w-4"}),g(Z,ye)};O(An,Z=>{i(Y).pFrais&&Z(tr)})}var gr=v(An,2);{var Dn=Z=>{var ye=Oh(),Ye=u(ye);Wn(Ye,{class:"text-info h-4 w-4"}),g(Z,ye)};O(gr,Z=>{i(Y).pSurgel&&Z(Dn)})}var In=v(Gt,2);sn(In);var Or=v(At);Or.__click=[qh,d,Y];var Mn=u(Or);{var ma=Z=>{var ye=Bh(),Ye=u(ye);L(()=>{nr(ye,"data-tip",i(Y).storeInfo.storeComment),M(Ye,i(Y).storeInfo.storeName||"-")}),g(Z,ye)},_a=Z=>{var ye=ct();L(()=>M(ye,i(Y).storeInfo?.storeName||"-")),g(Z,ye)};O(Mn,Z=>{i(Y).storeInfo?.storeComment?Z(ma):Z(_a,!1)})}var ga=v(Mn,2);sn(ga);var ba=v(Or);ba.__click=[Lh,d,Y];var Ps=u(ba);{var il=Z=>{var ye=zh();ze(ye,20,()=>i(Y).who,Ye=>Ye,(Ye,Cn)=>{var Rn=jh(),xa=u(Rn);L(()=>M(xa,Cn)),g(Ye,Rn)}),g(Z,ye)},ll=Z=>{var ye=ct("-");g(Z,ye)};O(Ps,Z=>{i(Y).who&&i(Y).who.length>0?Z(il):Z(ll,!1)})}var cl=v(Ps,2);sn(cl);var ya=v(ba),ul=u(ya),Ts=u(ul);Ln(Ts,()=>i(je).icon,(Z,ye)=>{ye(Z,{class:"h-3 w-3"})});var dl=v(Ts),wa=v(ya);wa.__click=[Vh,d,Y];var Ns=u(wa),fl=u(Ns),As=v(Ns,2);{var vl=Z=>{var ye=Wh(),Ye=u(ye),Cn=u(Ye),Rn=v(Cn);ms(Rn,{class:"h-3 w-3"});var xa=v(Ye,2),Is=u(xa),yl=v(Is);Td(yl,{class:"h-3 w-3"}),L(()=>{M(Cn,`${i(Y)?.nbRecipes??""} `),M(Is,`${i(Y)?.totalAssiettes??""} `)}),g(Z,ye)};O(As,Z=>{(i(Y).nbRecipes||i(Y).totalAssiettes)&&Z(vl)})}var hl=v(As,2);sn(hl);var Sa=v(wa);Sa.__click=[Uh,d,Y];var Ds=u(Sa),pl=v(Ds);sn(pl);var ml=v(Sa),_l=u(ml);{var gl=Z=>{var ye=Gh(),Ye=u(ye);L(()=>M(Ye,i(Y).displayMissingQuantity)),g(Z,ye)},bl=Z=>{md(Z,{size:28,strokeWidth:3,class:"text-success m-auto"})};O(_l,Z=>{i(Y).displayMissingQuantity!=="✅ Complet"?Z(gl):Z(bl,!1)})}L(Z=>{M(vt,i(Y).productName),Ce(Or,1,`${i(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Ce(ya,1,vi(i(c).groupBy==="productType"?"hidden":"")),M(dl,` ${i(je).displayName??""}`),M(fl,Z),M(Ds,`${(i(Y).displayTotalPurchases||"-")??""} `)},[()=>i(f).get(i(Y).$id)??"-"]),g($e,Ge)}),g(Q,it)});var Cr=v(Ie,2);{var dt=Q=>{var be=Qh();g(Q,be)};O(Cr,Q=>{i(r).length===0&&Q(dt)})}var er=v(p,2);Cv(er,{});var va=v(er,2);Xv(va,{}),L(()=>{M(b,` ${i(a).total??""}`),M(D,` frais:
      ${i(a).frais??""}`),M(T,` surgelés:
      ${i(a).surgel??""}`),M(q,` fusionnés:
      ${i(a).merged??""}`),hs(we,i(c).searchQuery),zr(at,i(c).groupBy==="none"),zr(oe,i(c).groupBy==="store"),zr(me,i(c).groupBy==="productType"),Ce(Le,1,`hover:bg-base-100 cursor-pointer text-center ${i(c).groupBy==="store"?"hidden":""}`),Ce(Ue,1,`hover:bg-base-100 cursor-pointer text-center ${i(c).groupBy==="productType"?"hidden":""}`)}),g(e,h),H()}Bt(["click","input","change"]);rc();var Jh=P('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function Xh(e){var t=Jh();g(e,t)}var Fh=P('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function ep(e,t){var r=Fh(),n=v(u(r),2),a=v(u(n),2),s=u(a);L(()=>M(s,t.message)),g(e,r)}var tp=P('<div class="alert bg-error/20"><div class="flex items-start gap-3 "><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function rp(e,t){var r=tp(),n=u(r),a=u(n);qi(a,{class:"stroke-current shrink-0 h-6 w-6 mt-0.5"});var s=v(a,2),o=v(u(s),2),l=u(o);L(()=>M(l,t.message)),g(e,r)}var np=P('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),ap=P('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),sp=P('<div class="text-base-content/60"> </div>'),op=P('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),ip=P('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),lp=P('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),cp=P('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function up(e,t){G(t,!0);let r,n=F(null),a=F(!0),s=F(!1);gi(async()=>{r=Ru();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await C.initialize(r)}catch(k){const W=k instanceof Error?k.message:"Erreur lors de l'initialisation";N(n,W,!0),console.error("[App] Erreur initialisation:",k)}finally{N(a,!1)}}),ru(()=>{C.destroy()});async function o(){if(!(!r||i(s))){N(s,!0);try{await C.forceReload(r)}catch(k){console.error("[App] Erreur lors du rechargement forcé:",k)}finally{N(s,!1)}}}const l=B(()=>i(n)||C.error),c=B(()=>i(a)||C.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var d=cp(),h=u(d),p=u(h),m=u(p),_=v(u(m),2),x=u(_);{var b=k=>{var W=np();g(k,W)};O(x,k=>{C.realtimeConnected&&k(b)})}var y=v(x,2);{var A=k=>{var W=ap();g(k,W)};O(y,k=>{C.syncing&&k(A)})}var D=v(y,2);{var E=k=>{var W=sp(),pe=u(W);L(we=>M(pe,`Maj: ${we??""}`),[()=>new Date(C.lastSync).toLocaleTimeString()]),g(k,W)};O(D,k=>{C.lastSync&&k(E)})}var $=v(D,2);{var T=k=>{var W=op();let pe;W.__click=o;var we=u(W);Ed(we,{class:"h-4 w-4"}),L(ve=>{pe=Ce(W,1,"btn btn-outline btn-sm",null,pe,ve),W.disabled=i(s)||C.loading},[()=>({loading:i(s)||C.loading})]),g(k,W)};O($,k=>{i(n)||k(T)})}var R=v($,2);{var S=k=>{var W=ip(),pe=u(W),we=u(pe);Sd(we,{class:"mr-2 h-4 w-4"}),L(()=>nr(pe,"href",f)),g(k,W)};O(R,k=>{i(n)&&k(S)})}var q=v(h,2),I=u(q);{var U=k=>{rp(k,{get message(){return i(l)}})},ee=k=>{var W=K(),pe=V(W);{var we=ve=>{ep(ve,{get message(){return i(l)}})};O(pe,ve=>{i(l)&&ve(we)},!0)}g(k,W)};O(I,k=>{i(n)?k(U):k(ee,!1)})}var Ne=v(I,2);{var Se=k=>{Xh(k)};O(Ne,k=>{i(c)&&k(Se)})}var fe=v(Ne,2);{var Me=k=>{Zh(k,{})},J=k=>{var W=K(),pe=V(W);{var we=ve=>{var nt=lp();g(ve,nt)};O(pe,ve=>{!C.loading&&!i(n)&&ve(we)},!0)}g(k,W)};O(fe,k=>{C.enrichedProducts.length>0?k(Me):k(J,!1)})}g(e,d),H()}Bt(["click"]);jc(up,{target:document.getElementById("app_products")});
