(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const Hs=!1;var bn=Array.isArray,li=Array.prototype.indexOf,Zn=Array.from,Wn=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,ci=Object.getOwnPropertyDescriptors,ui=Object.prototype,di=Array.prototype,Ks=Object.getPrototypeOf,_s=Object.isExtensible;function Or(e){return typeof e=="function"}const oe=()=>{};function fi(e){for(var t=0;t<e.length;t++)e[t]()}function Js(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function Ys(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const nt=2,Xn=4,Fn=8,hr=16,Vt=32,pr=64,es=128,pt=256,hn=512,Ue=1024,ct=2048,Xt=4096,Et=8192,_r=16384,ts=32768,mr=65536,ms=1<<17,vi=1<<18,Nr=1<<19,hi=1<<20,zn=1<<21,yn=1<<22,lr=1<<23,cr=Symbol("$state"),Zs=Symbol("legacy props"),pi=Symbol(""),Vr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Xs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function _i(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function mi(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function gi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function bi(e){throw new Error("https://svelte.dev/e/effect_orphan")}function yi(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function wi(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function xi(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Si(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Pi(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ei(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const wn=1,xn=2,Fs=4,ki=8,Ti=16,$i=1,Ni=2,Ai=4,Mi=8,Ci=16,Ii=1,Di=2,qe=Symbol(),qi="http://www.w3.org/1999/xhtml",Ri="http://www.w3.org/2000/svg",ji="@attach";function Oi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Li(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Bi=!1;function ea(e){return e===this.v}function Wi(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ta(e){return!Wi(e,this.v)}let Ar=!1,zi=!1;function Vi(){Ar=!0}let ke=null;function Pr(e){ke=e}function Z(e,t=!1,r){ke={p:ke,c:null,e:null,s:e,x:null,l:Ar&&!t?{s:null,u:null,$:[]}:null}}function X(e){var t=ke,r=t.e;if(r!==null){t.e=null;for(var n of r)ma(n)}return ke=t.p,{}}function Zr(){return!Ar||ke!==null&&ke.l===null}let or=[];function ra(){var e=or;or=[],fi(e)}function dr(e){if(or.length===0&&!Gr){var t=or;queueMicrotask(()=>{t===or&&ra()})}or.push(e)}function Gi(){for(;or.length>0;)ra()}const Ui=new WeakMap;function na(e){var t=ee;if(t===null)return ne.f|=lr,e;if((t.f&ts)===0){if((t.f&es)===0)throw!t.parent&&e instanceof Error&&sa(e),e;t.b.error(e)}else Er(e,t)}function Er(e,t){for(;t!==null;){if((t.f&es)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&sa(e),e}function sa(e){const t=Ui.get(e);t&&(Wn(e,"message",{value:t.message}),Wn(e,"stack",{value:t.stack}))}const an=new Set;let ye=null,ln=null,Vn=new Set,Ct=[],Sn=null,Gn=!1,Gr=!1;class vt{current=new Map;#t=new Map;#r=new Set;#s=0;#n=null;#c=[];#a=[];#i=[];#o=[];#l=[];#u=[];skipped_effects=new Set;process(t){Ct=[],ln=null;var r=vt.apply(this);for(const i of t)this.#v(i);if(this.#s===0){this.#h();var n=this.#a,s=this.#i;this.#a=[],this.#i=[],this.#o=[],ln=this,ye=null,gs(n),gs(s),ln=null,this.#n?.resolve()}else this.#f(this.#a),this.#f(this.#i),this.#f(this.#o);r();for(const i of this.#c)Kr(i);this.#c=[]}#v(t){t.f^=Ue;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Vt|pr))!==0,i=s&&(n&Ue)!==0,o=i||(n&Et)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=Ue:(n&Xn)!==0?this.#i.push(r):(n&Ue)===0&&((n&yn)!==0&&r.b?.is_pending()?this.#c.push(r):Tn(r)&&((r.f&hr)!==0&&this.#o.push(r),Kr(r)));var c=r.first;if(c!==null){r=c;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#f(t){for(const r of t)((r.f&ct)!==0?this.#l:this.#u).push(r),Ze(r,Ue);t.length=0}capture(t,r){this.#t.has(t)||this.#t.set(t,r),this.current.set(t,t.v)}activate(){ye=this}deactivate(){ye=null}flush(){if(Ct.length>0){if(this.activate(),aa(),ye!==null&&ye!==this)return}else this.#s===0&&this.#h();this.deactivate();for(const t of Vn)if(Vn.delete(t),t(),ye!==null)break}#h(){for(const t of this.#r)t();if(this.#r.clear(),an.size>1){this.#t.clear();let t=!0;for(const r of an){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;ia(n)}if(Ct.length>0){ye=r;const n=vt.apply(r);for(const s of Ct)r.#v(s);Ct=[],n()}}ye=null}an.delete(this)}increment(){this.#s+=1}decrement(){this.#s-=1;for(const t of this.#l)Ze(t,ct),fr(t);for(const t of this.#u)Ze(t,Xt),fr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#n??=Js()).promise}static ensure(){if(ye===null){const t=ye=new vt;an.add(ye),Gr||vt.enqueue(()=>{ye===t&&t.flush()})}return ye}static enqueue(t){dr(t)}static apply(t){return oe}}function Qi(e){var t=Gr;Gr=!0;try{for(var r;;){if(Gi(),Ct.length===0&&(ye?.flush(),Ct.length===0))return Sn=null,r;aa()}}finally{Gr=t}}function aa(){var e=xr;Gn=!0;try{var t=0;for(xs(!0);Ct.length>0;){var r=vt.ensure();if(t++>1e3){var n,s;Hi()}r.process(Ct),Yt.clear()}}finally{Gn=!1,xs(e),Sn=null}}function Hi(){try{yi()}catch(e){Er(e,Sn)}}let ir=null;function gs(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(_r|Et))===0&&Tn(n)&&(ir=[],Kr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?ya(n):n.fn=null),ir?.length>0)){Yt.clear();for(const s of ir)Kr(s);ir=[]}}ir=null}}function ia(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&nt)!==0?ia(t):(r&(yn|hr))!==0&&(Ze(t,ct),fr(t))}}function fr(e){for(var t=Sn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Gn&&t===ee&&(r&hr)!==0)return;if((r&(pr|Vt))!==0){if((r&Ue)===0)return;t.f^=Ue}}Ct.push(t)}function rs(e){let t=0,r=vr(0),n;return()=>{co()&&(a(r),ls(()=>(t===0&&(n=Mr(()=>e(()=>Ur(r)))),t+=1,()=>{dr(()=>{t-=1,t===0&&(n?.(),n=void 0,Ur(r))})})))}}var Ki=mr|Nr|es;function Ji(e,t,r){new Yi(e,t,r)}class Yi{parent;#t=!1;#r;#s=null;#n;#c;#a;#i=null;#o=null;#l=null;#u=null;#v=0;#f=0;#h=!1;#p=null;#e=()=>{this.#p&&kr(this.#p,this.#v)};#y=rs(()=>(this.#p=vr(this.#v),()=>{this.#p=null}));constructor(t,r,n){this.#r=t,this.#n=r,this.#c=n,this.parent=ee.b,this.#t=!!this.#n.pending,this.#a=er(()=>{ee.b=this;{try{this.#i=Ge(()=>n(this.#r))}catch(s){this.error(s)}this.#f>0?this.#m():this.#t=!1}},Ki)}#w(){try{this.#i=Ge(()=>this.#c(this.#r))}catch(t){this.error(t)}this.#t=!1}#x(){const t=this.#n.pending;t&&(this.#o=Ge(()=>t(this.#r)),vt.enqueue(()=>{this.#i=this.#_(()=>(vt.ensure(),Ge(()=>this.#c(this.#r)))),this.#f>0?this.#m():(Zt(this.#o,()=>{this.#o=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#_(t){var r=ee,n=ne,s=ke;Dt(this.#a),rt(this.#a),Pr(this.#a.ctx);try{return t()}catch(i){return na(i),null}finally{Dt(r),rt(n),Pr(s)}}#m(){const t=this.#n.pending;this.#i!==null&&(this.#u=document.createDocumentFragment(),Zi(this.#i,this.#u)),this.#o===null&&(this.#o=Ge(()=>t(this.#r)))}#b(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#b(t);return}this.#f+=t,this.#f===0&&(this.#t=!1,this.#o&&Zt(this.#o,()=>{this.#o=null}),this.#u&&(this.#r.before(this.#u),this.#u=null),dr(()=>{vt.ensure().flush()}))}update_pending_count(t){this.#b(t),this.#v+=t,Vn.add(this.#e)}get_effect_pending(){return this.#y(),a(this.#p)}error(t){var r=this.#n.onerror;let n=this.#n.failed;if(this.#h||!r&&!n)throw t;this.#i&&(je(this.#i),this.#i=null),this.#o&&(je(this.#o),this.#o=null),this.#l&&(je(this.#l),this.#l=null);var s=!1,i=!1;const o=()=>{if(s){Li();return}s=!0,i&&Ei(),vt.ensure(),this.#v=0,this.#l!==null&&Zt(this.#l,()=>{this.#l=null}),this.#t=this.has_pending_snippet(),this.#i=this.#_(()=>(this.#h=!1,Ge(()=>this.#c(this.#r)))),this.#f>0?this.#m():this.#t=!1};var c=ne;try{rt(null),i=!0,r?.(t,o),i=!1}catch(u){Er(u,this.#a&&this.#a.parent)}finally{rt(c)}n&&dr(()=>{this.#l=this.#_(()=>{this.#h=!0;try{return Ge(()=>{n(this.#r,()=>t,()=>o)})}catch(u){return Er(u,this.#a.parent),null}finally{this.#h=!1}})})}}function Zi(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:Xr(r);t.append(r),r=s}}function oa(e,t,r){const n=Zr()?Pn:ns;if(t.length===0){r(e.map(n));return}var s=ye,i=ee,o=Xi();Promise.all(t.map(c=>Fi(c))).then(c=>{o();try{r([...e.map(n),...c])}catch(u){(i.f&_r)===0&&Er(u,i)}s?.deactivate(),la()}).catch(c=>{Er(c,i)})}function Xi(){var e=ee,t=ne,r=ke,n=ye;return function(){Dt(e),rt(t),Pr(r),n?.activate()}}function la(){Dt(null),rt(null),Pr(null)}function Pn(e){var t=nt|ct,r=ne!==null&&(ne.f&nt)!==0?ne:null;return ee===null||r!==null&&(r.f&pt)!==0?t|=pt:ee.f|=Nr,{ctx:ke,deps:null,effects:null,equals:ea,f:t,fn:e,reactions:null,rv:0,v:qe,wv:0,parent:r??ee,ac:null}}function Fi(e,t){let r=ee;r===null&&_i();var n=r.b,s=void 0,i=vr(qe),o=!ne,c=new Map;return fo(()=>{var u=Js();s=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(p){u.reject(p)}var f=ye,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),c.get(f)?.reject(Vr),c.set(f,u)));const m=(p,_=void 0)=>{v||f.activate(),_?_!==Vr&&(i.f|=lr,kr(i,_)):((i.f&lr)!==0&&(i.f^=lr),kr(i,p)),o&&(n.update_pending_count(-1),v||f.decrement()),la()};u.promise.then(m,p=>m(null,p||"unknown"))}),pa(()=>{for(const u of c.values())u.reject(Vr)}),new Promise(u=>{function f(v){function m(){v===s?u(i):f(s)}v.then(m,m)}f(s)})}function Q(e){const t=Pn(e);return Sa(t),t}function ns(e){const t=Pn(e);return t.equals=ta,t}function ca(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)je(t[r])}}function eo(e){for(var t=e.parent;t!==null;){if((t.f&nt)===0)return t;t=t.parent}return null}function ss(e){var t,r=ee;Dt(eo(e));try{ca(e),t=Ta(e)}finally{Dt(r)}return t}function ua(e){var t=ss(e);if(e.equals(t)||(e.v=t,e.wv=Ea()),!gr){var r=(Kt||(e.f&pt)!==0)&&e.deps!==null?Xt:Ue;Ze(e,r)}}const Yt=new Map;function vr(e,t){var r={f:0,v:e,reactions:null,equals:ea,rv:0,wv:0};return r}function be(e,t){const r=vr(e);return Sa(r),r}function to(e,t=!1,r=!0){const n=vr(e);return t||(n.equals=ta),Ar&&r&&ke!==null&&ke.l!==null&&(ke.l.s??=[]).push(n),n}function $(e,t,r=!1){ne!==null&&(!Pt||(ne.f&ms)!==0)&&Zr()&&(ne.f&(nt|hr|yn|ms))!==0&&!zt?.includes(e)&&Pi();let n=r?tt(t):t;return kr(e,n)}function kr(e,t){if(!e.equals(t)){var r=e.v;gr?Yt.set(e,t):Yt.set(e,r),e.v=t;var n=vt.ensure();n.capture(e,r),(e.f&nt)!==0&&((e.f&ct)!==0&&ss(e),Ze(e,(e.f&pt)===0?Ue:Xt)),e.wv=Ea(),da(e,ct),Zr()&&ee!==null&&(ee.f&Ue)!==0&&(ee.f&(Vt|pr))===0&&(ft===null?po([e]):ft.push(e))}return t}function Ur(e){$(e,e.v+1)}function da(e,t){var r=e.reactions;if(r!==null)for(var n=Zr(),s=r.length,i=0;i<s;i++){var o=r[i],c=o.f;if(!(!n&&o===ee)){var u=(c&ct)===0;u&&Ze(o,t),(c&nt)!==0?da(o,Xt):u&&((c&hr)!==0&&ir!==null&&ir.push(o),fr(o))}}}function tt(e){if(typeof e!="object"||e===null||cr in e)return e;const t=Ks(e);if(t!==ui&&t!==di)return e;var r=new Map,n=bn(e),s=be(0),i=ur,o=c=>{if(ur===i)return c();var u=ne,f=ur;rt(null),Ps(i);var v=c();return rt(u),Ps(f),v};return n&&r.set("length",be(e.length)),new Proxy(e,{defineProperty(c,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&xi();var v=r.get(u);return v===void 0?v=o(()=>{var m=be(f.value);return r.set(u,m),m}):$(v,f.value,!0),!0},deleteProperty(c,u){var f=r.get(u);if(f===void 0){if(u in c){const v=o(()=>be(qe));r.set(u,v),Ur(s)}}else $(f,qe),Ur(s);return!0},get(c,u,f){if(u===cr)return e;var v=r.get(u),m=u in c;if(v===void 0&&(!m||Jt(c,u)?.writable)&&(v=o(()=>{var _=tt(m?c[u]:qe),g=be(_);return g}),r.set(u,v)),v!==void 0){var p=a(v);return p===qe?void 0:p}return Reflect.get(c,u,f)},getOwnPropertyDescriptor(c,u){var f=Reflect.getOwnPropertyDescriptor(c,u);if(f&&"value"in f){var v=r.get(u);v&&(f.value=a(v))}else if(f===void 0){var m=r.get(u),p=m?.v;if(m!==void 0&&p!==qe)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(c,u){if(u===cr)return!0;var f=r.get(u),v=f!==void 0&&f.v!==qe||Reflect.has(c,u);if(f!==void 0||ee!==null&&(!v||Jt(c,u)?.writable)){f===void 0&&(f=o(()=>{var p=v?tt(c[u]):qe,_=be(p);return _}),r.set(u,f));var m=a(f);if(m===qe)return!1}return v},set(c,u,f,v){var m=r.get(u),p=u in c;if(n&&u==="length")for(var _=f;_<m.v;_+=1){var g=r.get(_+"");g!==void 0?$(g,qe):_ in c&&(g=o(()=>be(qe)),r.set(_+"",g))}if(m===void 0)(!p||Jt(c,u)?.writable)&&(m=o(()=>be(void 0)),$(m,tt(f)),r.set(u,m));else{p=m.v!==qe;var P=o(()=>tt(f));$(m,P)}var w=Reflect.getOwnPropertyDescriptor(c,u);if(w?.set&&w.set.call(v,f),!p){if(n&&typeof u=="string"){var E=r.get("length"),D=Number(u);Number.isInteger(D)&&D>=E.v&&$(E,D+1)}Ur(s)}return!0},ownKeys(c){a(s);var u=Reflect.ownKeys(c).filter(m=>{var p=r.get(m);return p===void 0||p.v!==qe});for(var[f,v]of r)v.v!==qe&&!(f in c)&&u.push(f);return u},setPrototypeOf(){Si()}})}function bs(e){try{if(e!==null&&typeof e=="object"&&cr in e)return e[cr]}catch{}return e}function ro(e,t){return Object.is(bs(e),bs(t))}var ys,fa,va,ha;function no(){if(ys===void 0){ys=window,fa=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;va=Jt(t,"firstChild").get,ha=Jt(t,"nextSibling").get,_s(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),_s(r)&&(r.__t=void 0)}}function Ft(e=""){return document.createTextNode(e)}function Tr(e){return va.call(e)}function Xr(e){return ha.call(e)}function l(e,t){return Tr(e)}function K(e,t=!1){{var r=Tr(e);return r instanceof Comment&&r.data===""?Xr(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=Xr(n);return n}function so(e){e.textContent=""}function as(){return!1}function ao(e,t){if(t){const r=document.body;e.autofocus=!0,dr(()=>{document.activeElement===r&&e.focus()})}}let ws=!1;function io(){ws||(ws=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function En(e){var t=ne,r=ee;rt(null),Dt(null);try{return e()}finally{rt(t),Dt(r)}}function is(e,t,r,n=r){e.addEventListener(t,()=>En(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),io()}function oo(e){ee===null&&ne===null&&bi(),ne!==null&&(ne.f&pt)!==0&&ee===null&&gi(),gr&&mi()}function lo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Gt(e,t,r,n=!0){var s=ee;s!==null&&(s.f&Et)!==0&&(e|=Et);var i={ctx:ke,deps:null,nodes_start:null,nodes_end:null,f:e|ct,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Kr(i),i.f|=ts}catch(u){throw je(i),u}else t!==null&&fr(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Nr)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&lo(o,s),ne!==null&&(ne.f&nt)!==0&&(e&pr)===0)){var c=ne;(c.effects??=[]).push(o)}}return i}function co(){return ne!==null&&!Pt}function pa(e){const t=Gt(Fn,null,!1);return Ze(t,Ue),t.teardown=e,t}function _a(e){oo();var t=ee.f,r=!ne&&(t&Vt)!==0&&(t&ts)===0;if(r){var n=ke;(n.e??=[]).push(e)}else return ma(e)}function ma(e){return Gt(Xn|hi,e,!1)}function uo(e){vt.ensure();const t=Gt(pr|Nr,e,!0);return(r={})=>new Promise(n=>{r.outro?Zt(t,()=>{je(t),n(void 0)}):(je(t),n(void 0))})}function os(e){return Gt(Xn,e,!1)}function fo(e){return Gt(yn|Nr,e,!0)}function ls(e,t=0){return Gt(Fn|t,e,!0)}function B(e,t=[],r=[]){oa(t,r,n=>{Gt(Fn,()=>e(...n.map(a)),!0)})}function er(e,t=0){var r=Gt(hr|t,e,!0);return r}function Ge(e,t=!0){return Gt(Vt|Nr,e,!0,t)}function ga(e){var t=e.teardown;if(t!==null){const r=gr,n=ne;Ss(!0),rt(null);try{t.call(null)}finally{Ss(r),rt(n)}}}function ba(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&En(()=>{s.abort(Vr)});var n=r.next;(r.f&pr)!==0?r.parent=null:je(r,t),r=n}}function vo(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Vt)===0&&je(t),t=r}}function je(e,t=!0){var r=!1;(t||(e.f&vi)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(ho(e.nodes_start,e.nodes_end),r=!0),ba(e,t&&!r),pn(e,0),Ze(e,_r);var n=e.transitions;if(n!==null)for(const i of n)i.stop();ga(e);var s=e.parent;s!==null&&s.first!==null&&ya(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function ho(e,t){for(;e!==null;){var r=e===t?null:Xr(e);e.remove(),e=r}}function ya(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Zt(e,t){var r=[];cs(e,r,!0),wa(r,()=>{je(e),t&&t()})}function wa(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function cs(e,t,r){if((e.f&Et)===0){if(e.f^=Et,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,i=(n.f&mr)!==0||(n.f&Vt)!==0;cs(n,t,i?r:!1),n=s}}}function kn(e){xa(e,!0)}function xa(e,t){if((e.f&Et)!==0){e.f^=Et,(e.f&Ue)===0&&(Ze(e,ct),fr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&mr)!==0||(r.f&Vt)!==0;xa(r,s?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let xr=!1;function xs(e){xr=e}let gr=!1;function Ss(e){gr=e}let ne=null,Pt=!1;function rt(e){ne=e}let ee=null;function Dt(e){ee=e}let zt=null;function Sa(e){ne!==null&&(zt===null?zt=[e]:zt.push(e))}let Je=null,ot=0,ft=null;function po(e){ft=e}let Pa=1,Hr=0,ur=Hr;function Ps(e){ur=e}let Kt=!1;function Ea(){return++Pa}function Tn(e){var t=e.f;if((t&ct)!==0)return!0;if((t&Xt)!==0){var r=e.deps,n=(t&pt)!==0;if(r!==null){var s,i,o=(t&hn)!==0,c=n&&ee!==null&&!Kt,u=r.length;if((o||c)&&(ee===null||(ee.f&_r)===0)){var f=e,v=f.parent;for(s=0;s<u;s++)i=r[s],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=hn),c&&v!==null&&(v.f&pt)===0&&(f.f^=pt)}for(s=0;s<u;s++)if(i=r[s],Tn(i)&&ua(i),i.wv>e.wv)return!0}(!n||ee!==null&&!Kt)&&Ze(e,Ue)}return!1}function ka(e,t,r=!0){var n=e.reactions;if(n!==null&&!zt?.includes(e))for(var s=0;s<n.length;s++){var i=n[s];(i.f&nt)!==0?ka(i,t,!1):t===i&&(r?Ze(i,ct):(i.f&Ue)!==0&&Ze(i,Xt),fr(i))}}function Ta(e){var t=Je,r=ot,n=ft,s=ne,i=Kt,o=zt,c=ke,u=Pt,f=ur,v=e.f;Je=null,ot=0,ft=null,Kt=(v&pt)!==0&&(Pt||!xr||ne===null),ne=(v&(Vt|pr))===0?e:null,zt=null,Pr(e.ctx),Pt=!1,ur=++Hr,e.ac!==null&&(En(()=>{e.ac.abort(Vr)}),e.ac=null);try{e.f|=zn;var m=e.fn,p=m(),_=e.deps;if(Je!==null){var g;if(pn(e,ot),_!==null&&ot>0)for(_.length=ot+Je.length,g=0;g<Je.length;g++)_[ot+g]=Je[g];else e.deps=_=Je;if(!Kt||(v&nt)!==0&&e.reactions!==null)for(g=ot;g<_.length;g++)(_[g].reactions??=[]).push(e)}else _!==null&&ot<_.length&&(pn(e,ot),_.length=ot);if(Zr()&&ft!==null&&!Pt&&_!==null&&(e.f&(nt|Xt|ct))===0)for(g=0;g<ft.length;g++)ka(ft[g],e);return s!==null&&s!==e&&(Hr++,ft!==null&&(n===null?n=ft:n.push(...ft))),(e.f&lr)!==0&&(e.f^=lr),p}catch(P){return na(P)}finally{e.f^=zn,Je=t,ot=r,ft=n,ne=s,Kt=i,zt=o,Pr(c),Pt=u,ur=f}}function _o(e,t){let r=t.reactions;if(r!==null){var n=li.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&nt)!==0&&(Je===null||!Je.includes(t))&&(Ze(t,Xt),(t.f&(pt|hn))===0&&(t.f^=hn),ca(t),pn(t,0))}function pn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)_o(e,r[n])}function Kr(e){var t=e.f;if((t&_r)===0){Ze(e,Ue);var r=ee,n=xr;ee=e,xr=!0;try{(t&hr)!==0?vo(e):ba(e),ga(e);var s=Ta(e);e.teardown=typeof s=="function"?s:null,e.wv=Pa;var i;Hs&&zi&&(e.f&ct)!==0&&e.deps}finally{xr=n,ee=r}}}async function mo(){await Promise.resolve(),Qi()}function a(e){var t=e.f,r=(t&nt)!==0;if(ne!==null&&!Pt){var n=ee!==null&&(ee.f&_r)!==0;if(!n&&!zt?.includes(e)){var s=ne.deps;if((ne.f&zn)!==0)e.rv<Hr&&(e.rv=Hr,Je===null&&s!==null&&s[ot]===e?ot++:Je===null?Je=[e]:(!Kt||!Je.includes(e))&&Je.push(e));else{(ne.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[ne]:i.includes(ne)||i.push(ne)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,c=o.parent;c!==null&&(c.f&pt)===0&&(o.f^=pt)}if(gr){if(Yt.has(e))return Yt.get(e);if(r){o=e;var u=o.v;return((o.f&Ue)===0&&o.reactions!==null||$a(o))&&(u=ss(o)),Yt.set(o,u),u}}else r&&(o=e,Tn(o)&&ua(o));if((e.f&lr)!==0)throw e.v;return e.v}function $a(e){if(e.v===qe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Yt.has(t)||(t.f&nt)!==0&&$a(t))return!0;return!1}function Mr(e){var t=Pt;try{return Pt=!0,e()}finally{Pt=t}}const go=-7169;function Ze(e,t){e.f=e.f&go|t}function bo(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const yo=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function wo(e){return yo.includes(e)}const xo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function So(e){return e=e.toLowerCase(),xo[e]??e}const Po=["touchstart","touchmove"];function Eo(e){return Po.includes(e)}const Na=new Set,Un=new Set;function Aa(e,t,r,n={}){function s(i){if(n.capture||Wr.call(t,i),!i.cancelBubble)return En(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?dr(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Qn(e,t,r,n={}){var s=Aa(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function tr(e){for(var t=0;t<e.length;t++)Na.add(e[t]);for(var r of Un)r(e)}let Es=null;function Wr(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],i=s[0]||e.target;Es=e;var o=0,c=Es===e&&e.__root;if(c){var u=s.indexOf(c);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var f=s.indexOf(t);if(f===-1)return;u<=f&&(o=u)}if(i=s[o]||e.target,i!==t){Wn(e,"currentTarget",{configurable:!0,get(){return i||r}});var v=ne,m=ee;rt(null),Dt(null);try{for(var p,_=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var P=i["__"+n];if(P!=null&&(!i.disabled||e.target===i))if(bn(P)){var[w,...E]=P;w.apply(i,[e,...E])}else P.call(i,e)}catch(D){p?_.push(D):p=D}if(e.cancelBubble||g===t||g===null)break;i=g}if(p){for(let D of _)queueMicrotask(()=>{throw D});throw p}}finally{e.__root=t,delete e.currentTarget,rt(v),Dt(m)}}}function Ma(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function $r(e,t){var r=ee;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function x(e,t){var r=(t&Ii)!==0,n=(t&Di)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=Ma(i?e:"<!>"+e),r||(s=Tr(s)));var o=n||fa?document.importNode(s,!0):s.cloneNode(!0);if(r){var c=Tr(o),u=o.lastChild;$r(c,u)}else $r(o,o);return o}}function ko(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=Ma(s),c=Tr(o);i=Tr(c)}var u=i.cloneNode(!0);return $r(u,u),u}}function To(e,t){return ko(e,t,"svg")}function lt(e=""){{var t=Ft(e+"");return $r(t,t),t}}function Y(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Ft();return e.append(t,r),$r(t,r),e}function h(e,t){e!==null&&e.before(t)}function M(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function $o(e,t){return No(e,t)}const yr=new Map;function No(e,{target:t,anchor:r,props:n={},events:s,context:i,intro:o=!0}){no();var c=new Set,u=m=>{for(var p=0;p<m.length;p++){var _=m[p];if(!c.has(_)){c.add(_);var g=Eo(_);t.addEventListener(_,Wr,{passive:g});var P=yr.get(_);P===void 0?(document.addEventListener(_,Wr,{passive:g}),yr.set(_,1)):yr.set(_,P+1)}}};u(Zn(Na)),Un.add(u);var f=void 0,v=uo(()=>{var m=r??t.appendChild(Ft());return Ji(m,{pending:()=>{}},p=>{if(i){Z({});var _=ke;_.c=i}s&&(n.$$events=s),f=e(p,n)||{},i&&X()}),()=>{for(var p of c){t.removeEventListener(p,Wr);var _=yr.get(p);--_===0?(document.removeEventListener(p,Wr),yr.delete(p)):yr.set(p,_)}Un.delete(u),m!==r&&m.parentNode?.removeChild(m)}});return Ao.set(f,v),f}let Ao=new WeakMap;function q(e,t,r=!1){var n=e,s=null,i=null,o=qe,c=r?mr:0,u=!1;const f=(_,g=!0)=>{u=!0,p(g,_)};var v=null;function m(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var _=o?s:i,g=o?i:s;_&&kn(_),g&&Zt(g,()=>{o?i=null:s=null})}const p=(_,g)=>{if(o!==(o=_)){var P=as(),w=n;if(P&&(v=document.createDocumentFragment(),v.append(w=Ft())),o?s??=g&&Ge(()=>g(w)):i??=g&&Ge(()=>g(w)),P){var E=ye,D=o?s:i,C=o?i:s;D&&E.skipped_effects.delete(D),C&&E.skipped_effects.add(C),E.add_callback(m)}else m()}};er(()=>{u=!1,t(f),u||p(null,null)},c)}function Mo(e,t){return t}function Co(e,t,r){for(var n=e.items,s=[],i=t.length,o=0;o<i;o++)cs(t[o].e,s,!0);var c=i>0&&s.length===0&&r!==null;if(c){var u=r.parentNode;so(u),u.append(r),n.clear(),Mt(e,t[0].prev,t[i-1].next)}wa(s,()=>{for(var f=0;f<i;f++){var v=t[f];c||(n.delete(v.k),Mt(e,v.prev,v.next)),je(v.e,!c)}})}function Ye(e,t,r,n,s,i=null){var o=e,c={flags:t,items:new Map,first:null},u=(t&Fs)!==0;if(u){var f=e;o=f.appendChild(Ft())}var v=null,m=!1,p=new Map,_=ns(()=>{var E=r();return bn(E)?E:E==null?[]:Zn(E)}),g,P;function w(){Io(P,g,c,p,o,s,t,n,r),i!==null&&(g.length===0?v?kn(v):v=Ge(()=>i(o)):v!==null&&Zt(v,()=>{v=null}))}er(()=>{P??=ee,g=a(_);var E=g.length;if(!(m&&E===0)){m=E===0;var D,C,N,T;if(as()){var A=new Set,O=ye;for(C=0;C<E;C+=1){N=g[C],T=n(N,C);var z=c.items.get(T)??p.get(T);z?(t&(wn|xn))!==0&&Ca(z,N,C,t):(D=Ia(null,c,null,null,N,T,C,s,t,r,!0),p.set(T,D)),A.add(T)}for(const[W,te]of c.items)A.has(W)||O.skipped_effects.add(te.e);O.add_callback(w)}else w();a(_)}})}function Io(e,t,r,n,s,i,o,c,u){var f=(o&ki)!==0,v=(o&(wn|xn))!==0,m=t.length,p=r.items,_=r.first,g=_,P,w=null,E,D=[],C=[],N,T,A,O;if(f)for(O=0;O<m;O+=1)N=t[O],T=c(N,O),A=p.get(T),A!==void 0&&(A.a?.measure(),(E??=new Set).add(A));for(O=0;O<m;O+=1){if(N=t[O],T=c(N,O),A=p.get(T),A===void 0){var z=n.get(T);if(z!==void 0){n.delete(T),p.set(T,z);var W=w?w.next:g;Mt(r,w,z),Mt(r,z,W),Rn(z,W,s),w=z}else{var te=g?g.e.nodes_start:s;w=Ia(te,r,w,w===null?r.first:w.next,N,T,O,i,o,u)}p.set(T,w),D=[],C=[],g=w.next;continue}if(v&&Ca(A,N,O,o),(A.e.f&Et)!==0&&(kn(A.e),f&&(A.a?.unfix(),(E??=new Set).delete(A))),A!==g){if(P!==void 0&&P.has(A)){if(D.length<C.length){var _e=C[0],I;w=_e.prev;var R=D[0],se=D[D.length-1];for(I=0;I<D.length;I+=1)Rn(D[I],_e,s);for(I=0;I<C.length;I+=1)P.delete(C[I]);Mt(r,R.prev,se.next),Mt(r,w,R),Mt(r,se,_e),g=_e,w=se,O-=1,D=[],C=[]}else P.delete(A),Rn(A,g,s),Mt(r,A.prev,A.next),Mt(r,A,w===null?r.first:w.next),Mt(r,w,A),w=A;continue}for(D=[],C=[];g!==null&&g.k!==T;)(g.e.f&Et)===0&&(P??=new Set).add(g),C.push(g),g=g.next;if(g===null)continue;A=g}D.push(A),w=A,g=A.next}if(g!==null||P!==void 0){for(var ae=P===void 0?[]:Zn(P);g!==null;)(g.e.f&Et)===0&&ae.push(g),g=g.next;var me=ae.length;if(me>0){var Ce=(o&Fs)!==0&&m===0?s:null;if(f){for(O=0;O<me;O+=1)ae[O].a?.measure();for(O=0;O<me;O+=1)ae[O].a?.fix()}Co(r,ae,Ce)}}f&&dr(()=>{if(E!==void 0)for(A of E)A.a?.apply()}),e.first=r.first&&r.first.e,e.last=w&&w.e;for(var S of n.values())je(S.e);n.clear()}function Ca(e,t,r,n){(n&wn)!==0&&kr(e.v,t),(n&xn)!==0?kr(e.i,r):e.i=r}function Ia(e,t,r,n,s,i,o,c,u,f,v){var m=(u&wn)!==0,p=(u&Ti)===0,_=m?p?to(s,!1,!1):vr(s):s,g=(u&xn)===0?o:vr(o),P={i:g,v:_,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var w=document.createDocumentFragment();w.append(e=Ft())}return P.e=Ge(()=>c(e,_,g,f),Bi),P.e.prev=r&&r.e,P.e.next=n&&n.e,r===null?v||(t.first=P):(r.next=P,r.e.next=P.e),n!==null&&(n.prev=P,n.e.prev=P.e),P}finally{}}function Rn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=Xr(i);s.before(i),i=o}}function Mt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function de(e,t,...r){var n=e,s=oe,i;er(()=>{s!==(s=t())&&(i&&(je(i),i=null),i=Ge(()=>s(n,...r)))},mr)}function cn(e,t,r){var n=e,s,i,o=null,c=null;function u(){i&&(Zt(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=c,c=null}er(()=>{if(s!==(s=t())){var f=as();if(s){var v=n;f&&(o=document.createDocumentFragment(),o.append(v=Ft()),i&&ye.skipped_effects.add(i)),c=Ge(()=>r(v,s))}f?ye.add_callback(u):u()}},mr)}function Do(e,t,r,n,s,i){var o,c,u=null,f=e,v;er(()=>{const m=t()||null;var p=Ri;m!==o&&(v&&(m===null?Zt(v,()=>{v=null,c=null}):m===c?kn(v):je(v)),m&&m!==c&&(v=Ge(()=>{if(u=document.createElementNS(p,m),$r(u,u),n){var _=u.appendChild(Ft());n(u,_)}ee.nodes_end=u,f.before(u)})),o=m,o&&(c=o))},mr)}function qo(e,t){var r=void 0,n;er(()=>{r!==(r=t())&&(n&&(je(n),n=null),r&&(n=Ge(()=>{os(()=>r(e))})))})}function Da(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Da(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Ro(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Da(e))&&(n&&(n+=" "),n+=t);return n}function jo(e){return typeof e=="object"?Ro(e):e??""}const ks=[...` 	
\r\f \v\uFEFF`];function Oo(e,t,r){var n=e==null?"":""+e;if(r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var c=o+i;(o===0||ks.includes(n[o-1]))&&(c===n.length||ks.includes(n[c]))?n=(o===0?"":n.substring(0,o))+n.substring(c+1):o=c}}return n===""?null:n}function Ts(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var i=e[s];i!=null&&i!==""&&(n+=" "+s+": "+i+r)}return n}function jn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Lo(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,c=!1,u=[];n&&u.push(...Object.keys(n).map(jn)),s&&u.push(...Object.keys(s).map(jn));var f=0,v=-1;const P=e.length;for(var m=0;m<P;m++){var p=e[m];if(c?p==="/"&&e[m-1]==="*"&&(c=!1):i?i===p&&(i=!1):p==="/"&&e[m+1]==="*"?c=!0:p==='"'||p==="'"?i=p:p==="("?o++:p===")"&&o--,!c&&i===!1&&o===0){if(p===":"&&v===-1)v=m;else if(p===";"||m===P-1){if(v!==-1){var _=jn(e.substring(f,v).trim());if(!u.includes(_)){p!==";"&&m++;var g=e.substring(f,m).trim();r+=" "+g+";"}}f=m+1,v=-1}}}}return n&&(r+=Ts(n)),s&&(r+=Ts(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ne(e,t,r,n,s,i){var o=e.__className;if(o!==r||o===void 0){var c=Oo(r,n,i);c==null?e.removeAttribute("class"):t?e.className=c:e.setAttribute("class",c),e.__className=r}else if(i&&s!==i)for(var u in i){var f=!!i[u];(s==null||f!==!!s[u])&&e.classList.toggle(u,f)}return i}function On(e,t={},r,n){for(var s in r){var i=r[s];t[s]!==i&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,n))}}function Bo(e,t,r,n){var s=e.__style;if(s!==t){var i=Lo(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(On(e,r?.[0],n[0]),On(e,r?.[1],n[1],"important")):On(e,r,n));return n}function _n(e,t,r=!1){if(e.multiple){if(t==null)return;if(!bn(t))return Oi();for(var n of e.options)n.selected=t.includes(Qr(n));return}for(n of e.options){var s=Qr(n);if(ro(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function qa(e){var t=new MutationObserver(()=>{_n(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),pa(()=>{t.disconnect()})}function Hn(e,t,r=t){var n=!0;is(e,"change",s=>{var i=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),Qr);else{var c=e.querySelector(i)??e.querySelector("option:not([disabled])");o=c&&Qr(c)}r(o)}),os(()=>{var s=t();if(_n(e,s,n),n&&s===void 0){var i=e.querySelector(":checked");i!==null&&(s=Qr(i),r(s))}e.__value=s,n=!1}),qa(e)}function Qr(e){return"__value"in e?e.__value:e.value}const Lr=Symbol("class"),Br=Symbol("style"),Ra=Symbol("is custom element"),ja=Symbol("is html");function Wo(e,t){var r=$n(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Sr(e,t){var r=$n(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function zo(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Kn(e,t,r,n){var s=$n(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[pi]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Oa(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Vo(e,t,r,n,s=!1,i=!1){var o=$n(e),c=o[Ra],u=!o[ja],f=t||{},v=e.tagName==="OPTION";for(var m in t)m in r||(r[m]=null);r.class?r.class=jo(r.class):r[Lr]&&(r.class=null),r[Br]&&(r.style??=null);var p=Oa(e);for(const N in r){let T=r[N];if(v&&N==="value"&&T==null){e.value=e.__value="",f[N]=T;continue}if(N==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ne(e,_,T,n,t?.[Lr],r[Lr]),f[N]=T,f[Lr]=r[Lr];continue}if(N==="style"){Bo(e,T,t?.[Br],r[Br]),f[N]=T,f[Br]=r[Br];continue}var g=f[N];if(!(T===g&&!(T===void 0&&e.hasAttribute(N)))){f[N]=T;var P=N[0]+N[1];if(P!=="$$")if(P==="on"){const A={},O="$$"+N;let z=N.slice(2);var w=wo(z);if(bo(z)&&(z=z.slice(0,-7),A.capture=!0),!w&&g){if(T!=null)continue;e.removeEventListener(z,f[O],A),f[O]=null}if(T!=null)if(w)e[`__${z}`]=T,tr([z]);else{let W=function(te){f[N].call(this,te)};var C=W;f[O]=Aa(z,e,W,A)}else w&&(e[`__${z}`]=void 0)}else if(N==="style")Kn(e,N,T);else if(N==="autofocus")ao(e,!!T);else if(!c&&(N==="__value"||N==="value"&&T!=null))e.value=e.__value=T;else if(N==="selected"&&v)zo(e,T);else{var E=N;u||(E=So(E));var D=E==="defaultValue"||E==="defaultChecked";if(T==null&&!c&&!D)if(o[N]=null,E==="value"||E==="checked"){let A=e;const O=t===void 0;if(E==="value"){let z=A.defaultValue;A.removeAttribute(E),A.defaultValue=z,A.value=A.__value=O?z:null}else{let z=A.defaultChecked;A.removeAttribute(E),A.defaultChecked=z,A.checked=O?z:!1}}else e.removeAttribute(N);else D||p.includes(E)&&(c||typeof T!="string")?(e[E]=T,E in o&&(o[E]=qe)):typeof T!="function"&&Kn(e,E,T)}}}return f}function $s(e,t,r=[],n=[],s,i=!1,o=!1){oa(r,n,c=>{var u=void 0,f={},v=e.nodeName==="SELECT",m=!1;if(er(()=>{var _=t(...c.map(a)),g=Vo(e,u,_,s,i,o);m&&v&&"value"in _&&_n(e,_.value);for(let w of Object.getOwnPropertySymbols(f))_[w]||je(f[w]);for(let w of Object.getOwnPropertySymbols(_)){var P=_[w];w.description===ji&&(!u||P!==u[w])&&(f[w]&&je(f[w]),f[w]=Ge(()=>qo(e,()=>P))),g[w]=P}u=g}),v){var p=e;os(()=>{_n(p,u.value,!0),qa(p)})}m=!0})}function $n(e){return e.__attributes??={[Ra]:e.nodeName.includes("-"),[ja]:e.namespaceURI===qi}}var Ns=new Map;function Oa(e){var t=e.getAttribute("is")||e.nodeName,r=Ns.get(t);if(r)return r;Ns.set(t,r=[]);for(var n,s=e,i=Element.prototype;i!==s;){n=ci(s);for(var o in n)n[o].set&&r.push(o);s=Ks(s)}return r}function Ve(e,t,r=t){var n=new WeakSet;is(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=Ln(e)?Bn(i):i,r(i),ye!==null&&n.add(ye),await mo(),i!==(i=t())){var o=e.selectionStart,c=e.selectionEnd;e.value=i??"",c!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(c,e.value.length))}}),Mr(t)==null&&e.value&&(r(Ln(e)?Bn(e.value):e.value),ye!==null&&n.add(ye)),ls(()=>{var s=t();if(e===document.activeElement){var i=ln??ye;if(n.has(i))return}Ln(e)&&s===Bn(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Go(e,t,r=t){is(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),Mr(t)==null&&r(e.checked),ls(()=>{var n=t();e.checked=!!n})}function Ln(e){var t=e.type;return t==="number"||t==="range"}function Bn(e){return e===""?null:+e}let on=!1;function Uo(e){var t=on;try{return on=!1,[e(),on]}finally{on=t}}const Qo={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function fe(e,t,r){return new Proxy({props:e,exclude:t},Qo)}const Ho={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Or(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];Or(s)&&(s=s());const i=Jt(s,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Or(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=Jt(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===cr||t===Zs)return!1;for(let r of e.props)if(Or(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Or(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function he(...e){return new Proxy({props:e},Ho)}function wr(e,t,r,n){var s=!Ar||(r&Ni)!==0,i=(r&Mi)!==0,o=(r&Ci)!==0,c=n,u=!0,f=()=>(u&&(u=!1,c=o?Mr(n):n),c),v;if(i){var m=cr in e||Zs in e;v=Jt(e,t)?.set??(m&&t in e?C=>e[t]=C:void 0)}var p,_=!1;i?[p,_]=Uo(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),v&&(s&&wi(),v(p)));var g;if(s?g=()=>{var C=e[t];return C===void 0?f():(u=!0,C)}:g=()=>{var C=e[t];return C!==void 0&&(c=void 0),C===void 0?c:C},s&&(r&Ai)===0)return g;if(v){var P=e.$$legacy;return(function(C,N){return arguments.length>0?((!s||!N||P||_)&&v(N?g():C),C):g()})}var w=!1,E=((r&$i)!==0?Pn:ns)(()=>(w=!1,g()));i&&a(E);var D=ee;return(function(C,N){if(arguments.length>0){const T=N?a(E):s&&i?tt(C):C;return $(E,T),w=!0,c!==void 0&&(c=T),C}return gr&&w||(D.f&_r)!==0?E.v:a(E)})}function La(e){ke===null&&Xs(),Ar&&ke.l!==null?Jo(ke).m.push(e):_a(()=>{const t=Mr(e);if(typeof t=="function")return t})}function Ko(e){ke===null&&Xs(),La(()=>()=>Mr(e))}function Jo(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Yo="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Yo);const Ba=typeof window<"u"?window:void 0;function Zo(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Xo{#t;#r;constructor(t={}){const{window:r=Ba,document:n=r?.document}=t;r!==void 0&&(this.#t=n,this.#r=rs(s=>{const i=Qn(r,"focusin",s),o=Qn(r,"focusout",s);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#t?Zo(this.#t):null}}new Xo;function Fo(e,t){return e}function el(e,t){let r=be(null);const n=Q(()=>Fo(t));function s(...i){if(a(r))a(r).timeout&&clearTimeout(a(r).timeout);else{let o,c;const u=new Promise((f,v)=>{o=f,c=v});$(r,{timeout:null,runner:null,promise:u,resolve:o,reject:c},!0)}return a(r).runner=async()=>{if(!a(r))return;const o=a(r);$(r,null);try{o.resolve(await e.apply(this,i))}catch(c){o.reject(c)}},a(r).timeout=setTimeout(a(r).runner,a(n)),a(r).promise}return s.cancel=async()=>{(!a(r)||a(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||a(r).timeout===null)||(clearTimeout(a(r).timeout),a(r).reject("Cancelled"),$(r,null))},s.runScheduledNow=async()=>{(!a(r)||!a(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||!a(r).timeout)||(clearTimeout(a(r).timeout),a(r).timeout=null,await a(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!a(r)?.timeout}}),s}function tl(e,t){switch(e){case"local":return t.localStorage;case"session":return t.sessionStorage}}function Wa(e,t,r,n,s,i){if(e===null||typeof e!="object")return e;const o=Object.getPrototypeOf(e);if(o!==null&&o!==Object.prototype&&!Array.isArray(e))return e;let c=r.get(e);return c||(c=new Proxy(e,{get:(u,f)=>(n?.(),Wa(Reflect.get(u,f),t,r,n,s,i)),set:(u,f,v)=>(s?.(),Reflect.set(u,f,v),i(t),!0)}),r.set(e,c)),c}class As{#t;#r;#s;#n;#c;#a;#i=new WeakMap;constructor(t,r,n={}){const{storage:s="local",serializer:i={serialize:JSON.stringify,deserialize:JSON.parse},syncTabs:o=!0}=n,c="window"in n?n.window:Ba;if(this.#t=r,this.#r=t,this.#s=i,c===void 0)return;const u=tl(s,c);this.#n=u;const f=u.getItem(t);f!==null?this.#t=this.#l(f):this.#u(r),o&&s==="local"&&(this.#c=rs(v=>{this.#a=v;const m=Qn(c,"storage",this.#o);return()=>{m(),this.#a=void 0}}))}get current(){this.#c?.();const t=this.#n?.getItem(this.#r),r=t?this.#l(t):this.#t;return Wa(r,r,this.#i,this.#c?.bind(this),this.#a?.bind(this),this.#u.bind(this))}set current(t){this.#u(t),this.#a?.()}#o=t=>{t.key!==this.#r||t.newValue===null||(this.#t=this.#l(t.newValue),this.#a?.())};#l(t){try{return this.#s.deserialize(t)}catch(r){console.error(`Error when parsing "${t}" from persisted store "${this.#r}"`,r);return}}#u(t){try{t!=null&&this.#n?.setItem(this.#r,this.#s.serialize(t))}catch(r){console.error(`Error when writing value from persisted store "${this.#r}" to ${this.#n}`,r)}}}function rl(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function Ms(e,t){return`${e}_${t}`}function nl(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}let b=class{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}};b.equal=(e,t)=>new b("equal",e,t).toString();b.notEqual=(e,t)=>new b("notEqual",e,t).toString();b.lessThan=(e,t)=>new b("lessThan",e,t).toString();b.lessThanEqual=(e,t)=>new b("lessThanEqual",e,t).toString();b.greaterThan=(e,t)=>new b("greaterThan",e,t).toString();b.greaterThanEqual=(e,t)=>new b("greaterThanEqual",e,t).toString();b.isNull=e=>new b("isNull",e).toString();b.isNotNull=e=>new b("isNotNull",e).toString();b.between=(e,t,r)=>new b("between",e,[t,r]).toString();b.startsWith=(e,t)=>new b("startsWith",e,t).toString();b.endsWith=(e,t)=>new b("endsWith",e,t).toString();b.select=e=>new b("select",void 0,e).toString();b.search=(e,t)=>new b("search",e,t).toString();b.orderDesc=e=>new b("orderDesc",e).toString();b.orderAsc=e=>new b("orderAsc",e).toString();b.orderRandom=()=>new b("orderRandom").toString();b.cursorAfter=e=>new b("cursorAfter",void 0,e).toString();b.cursorBefore=e=>new b("cursorBefore",void 0,e).toString();b.limit=e=>new b("limit",void 0,e).toString();b.offset=e=>new b("offset",void 0,e).toString();b.contains=(e,t)=>new b("contains",e,t).toString();b.notContains=(e,t)=>new b("notContains",e,t).toString();b.notSearch=(e,t)=>new b("notSearch",e,t).toString();b.notBetween=(e,t,r)=>new b("notBetween",e,[t,r]).toString();b.notStartsWith=(e,t)=>new b("notStartsWith",e,t).toString();b.notEndsWith=(e,t)=>new b("notEndsWith",e,t).toString();b.createdBefore=e=>new b("createdBefore",void 0,e).toString();b.createdAfter=e=>new b("createdAfter",void 0,e).toString();b.createdBetween=(e,t)=>new b("createdBetween",void 0,[e,t]).toString();b.updatedBefore=e=>new b("updatedBefore",void 0,e).toString();b.updatedAfter=e=>new b("updatedAfter",void 0,e).toString();b.updatedBetween=(e,t)=>new b("updatedBetween",void 0,[e,t]).toString();b.or=e=>new b("or",void 0,e.map(t=>JSON.parse(t))).toString();b.and=e=>new b("and",void 0,e.map(t=>JSON.parse(t))).toString();b.distanceEqual=(e,t,r,n=!0)=>new b("distanceEqual",e,[[t,r,n]]).toString();b.distanceNotEqual=(e,t,r,n=!0)=>new b("distanceNotEqual",e,[[t,r,n]]).toString();b.distanceGreaterThan=(e,t,r,n=!0)=>new b("distanceGreaterThan",e,[[t,r,n]]).toString();b.distanceLessThan=(e,t,r,n=!0)=>new b("distanceLessThan",e,[[t,r,n]]).toString();b.intersects=(e,t)=>new b("intersects",e,[t]).toString();b.notIntersects=(e,t)=>new b("notIntersects",e,[t]).toString();b.crosses=(e,t)=>new b("crosses",e,[t]).toString();b.notCrosses=(e,t)=>new b("notCrosses",e,[t]).toString();b.overlaps=(e,t)=>new b("overlaps",e,[t]).toString();b.notOverlaps=(e,t)=>new b("notOverlaps",e,[t]).toString();b.touches=(e,t)=>new b("touches",e,[t]).toString();b.notTouches=(e,t)=>new b("notTouches",e,[t]).toString();var za,Va;class Jr{static custom(t){return t}static unique(t=7){const r=nl(Jr,za,"m",Va).call(Jr);let n="";for(let s=0;s<t;s++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}za=Jr,Va=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Cs;(function(e){e.Totp="totp"})(Cs||(Cs={}));var Is;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Is||(Is={}));var Ds;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Ds||(Ds={}));var qs;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(qs||(qs={}));var Rs;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Rs||(Rs={}));var js;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(js||(js={}));var Os;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Os||(Os={}));var Ls;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Ls||(Ls={}));var Bs;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Bs||(Bs={}));async function Cr(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function sl(e,t={}){const{includePurchases:r=!0,limit:n=100,orderBy:s="productName",orderDirection:i="asc"}=t;try{const{databases:o,config:c}=await Cr(),u=await o.listDocuments(c.APPWRITE_CONFIG.databaseId,c.APPWRITE_CONFIG.collections.products,[b.equal("mainId",e),b.orderAsc(s==="productName"?"productName":"$updatedAt"),b.limit(n)]),f=u.documents;if(!r)return f;const v=await o.listDocuments(c.APPWRITE_CONFIG.databaseId,c.APPWRITE_CONFIG.collections.purchases,[b.equal("mainId",e)]),m=v.documents,p=ul(f,m);return console.log(`[Appwrite Interactions] ${u.documents.length} produits chargés avec ${v.documents.length} achats`),p}catch(o){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,o);const c=o instanceof Error?o.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${c}`)}}async function al(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide"),[];try{const{databases:s,config:i}=await Cr(),o=await s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.limit(n)]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} mises à jour synchronisées`),o.documents}catch(s){console.error(`[Appwrite Interactions] Erreur sync produits pour mainId ${e}:`,s);const i=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function us(e,t){try{const{databases:r,config:n}=await Cr();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function il(e,t){if(console.log(`[Appwrite Interactions] Mise à jour du magasin pour produit ${e}:`,t),!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await us(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Ws(e,t){return us(e,{who:t})}async function zs(e,t){return us(e,{stockReel:t})}async function ol(e){try{const{databases:t,config:r}=await Cr(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id,status:"active"},c=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Jr.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",c),c}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function ll(e,t){try{const{databases:r,config:n}=await Cr(),s=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,t);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,t),s}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function cl(e){try{const{databases:t,config:r}=await Cr();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}function ul(e,t){return e.map(r=>({...r,purchases:t.filter(n=>n.products.some(s=>s.$id===r.$id))}))}function dl(e,t){const r=new Map(t.map(o=>[o.$id,o])),n=e.map(o=>r.get(o.$id)??o),s=new Set(e.map(o=>o.$id)),i=t.filter(o=>!s.has(o.$id));return[...n,...i]}function fl(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing stock data:",t),[]}}function vl(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing recipes occurrences:",t),[]}}function hl(e,t={}){let r=null;const n=i=>{const{events:o,payload:c}=i;if(!c)return;const u=o.some(_=>_.includes("products.")),f=o.some(_=>_.includes("purchases.")),v=o.some(_=>_.includes(".create")),m=o.some(_=>_.includes(".update")),p=o.some(_=>_.includes(".delete"));if(u){const _=c;v&&t.onProductCreate?t.onProductCreate(_):m&&t.onProductUpdate?t.onProductUpdate(_):p&&t.onProductDelete&&t.onProductDelete(_.$id)}else if(f){const _=c;v&&t.onPurchaseCreate?t.onPurchaseCreate(_):m&&t.onPurchaseUpdate?t.onPurchaseUpdate(_):p&&t.onPurchaseDelete&&t.onPurchaseDelete(_.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}const{Query:ud}=window.Appwrite,Vs=1e3,pl=500;class _l{#t=be(null);#r=be(!1);#s=be(null);#n=be(null);#c=be(null);#a=be(tt(new Map));#i(t,r=null){if(!t||t.trim()==="")return r;try{return JSON.parse(t)}catch(n){return console.warn("[ProductsStore] Erreur de parsing JSON, utilisation de la valeur par défaut:",n),r}}#o=Q(()=>a(this.#s)?.current.products??[]);get products(){return a(this.#o)}set products(t){$(this.#o,t)}#l=Q(()=>a(this.#s)?.current.loading??!1);get loading(){return a(this.#l)}set loading(t){$(this.#l,t)}#u=Q(()=>a(this.#s)?.current.error??null);get error(){return a(this.#u)}set error(t){$(this.#u,t)}#v=Q(()=>a(this.#s)?.current.syncing??!1);get syncing(){return a(this.#v)}set syncing(t){$(this.#v,t)}#f=Q(()=>a(this.#s)?.current.realtimeConnected??!1);get realtimeConnected(){return a(this.#f)}set realtimeConnected(t){$(this.#f,t)}#h=Q(()=>a(this.#n)?.current.lastSync??null);get lastSync(){return a(this.#h)}set lastSync(t){$(this.#h,t)}#p=Q(()=>a(this.#n)?.current.mainId??null);get mainId(){return a(this.#p)}set mainId(t){$(this.#p,t)}#e=be(tt({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return a(this.#e)}#y=Q(()=>this.products.map(t=>{const r=`${t.$id}-${t.$updatedAt}`;if(a(this.#a).has(r))return a(this.#a).get(r);const n=this.#W(t.purchases??[]),s=t.totalNeededConsolidated?this.#B(t.totalNeededConsolidated):[],i=this.#z(s,n),o={...t,storeInfo:t.store?this.#i(t.store):null,totalNeededArray:s,totalPurchasesArray:n,recipesArray:t.recipesOccurrences?this.#i(t.recipesOccurrences):[],stockArray:t.stockReel?this.#i(t.stockReel):[],missingQuantityArray:i,displayTotalQuantity:this.#N(s),displayTotalPurchases:this.#N(n??[]),displayMissingQuantity:i.length>0?i.map(c=>this.#P(c.quantity.toString(),c.unit)).join(" et "):"✅ Complet"};return a(this.#a).set(r,o),o}));get enrichedProducts(){return a(this.#y)}set enrichedProducts(t){$(this.#y,t)}#w=Q(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return a(this.#w)}set uniqueStores(t){$(this.#w,t)}#x=Q(()=>[...new Set(this.products.flatMap(t=>t.who||[]).filter(Boolean))]);get uniqueWho(){return a(this.#x)}set uniqueWho(t){$(this.#x,t)}#_=Q(()=>[...new Set(this.products.map(t=>t.productType).filter(Boolean))]);get uniqueProductTypes(){return a(this.#_)}set uniqueProductTypes(t){$(this.#_,t)}#m=Q(()=>{const t=this.enrichedProducts.filter(r=>this.#L(r));return a(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>a(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return a(this.#m)}set filteredGroupedProducts(t){$(this.#m,t)}#b=Q(()=>Object.values(this.filteredGroupedProducts).flat());get filteredProducts(){return a(this.#b)}set filteredProducts(t){$(this.#b,t)}#E=Q(()=>this.filteredGroupedProducts);get groupedFormattedProducts(){return a(this.#E)}set groupedFormattedProducts(t){$(this.#E,t)}#k=Q(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return a(this.#k)}set stats(t){$(this.#k,t)}get currentMainId(){return a(this.#t)}get isInitialized(){return a(this.#r)}#g=el(()=>{this.#S()},pl);async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(a(this.#r)&&a(this.#t)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),$(this.#t,t,!0),$(this.#r,!0),this.#A(t),this.products.length>0&&a(this.#n).current.mainId===t?(console.log(`[ProductsStore] Utilisation du cache (${this.products.length} produits)`),await this.#M()):(console.log("[ProductsStore] Chargement initial depuis Appwrite"),await this.#T(t));const n=this.#O();$(this.#c,hl(t,n),!0)}#A(t){if(a(this.#s)&&a(this.#n))return;const r=Ms("products-state",t),n=Ms("products-sync-state",t);console.log(`[ProductsStore] Clés de stockage: ${r}, ${n}`),$(this.#s,new As(r,{products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),!0),$(this.#n,new As(n,{lastSync:null,mainId:null}),!0)}async#T(t){if(!a(this.#s))throw new Error("ProductsStore non initialisé");this.#d({loading:!0,error:null});try{const n=await sl(t,{includePurchases:!0,limit:Vs,orderBy:"productName",orderDirection:"asc"});this.#d({products:n}),this.#S(),console.log(`[ProductsStore] ${n.length} produits chargés`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw this.#d({loading:!1,error:n}),console.error("[ProductsStore]",n,r),r}}async#M(){if(a(this.#n)?.current.lastSync){this.#d({syncing:!0});try{const t={lastSync:a(this.#n).current.lastSync,limit:Vs},r=await al(a(this.#t),t);r.length>0&&(this.#d({products:dl(this.products,r)}),this.#S(),console.log(`[ProductsStore] ${r.length} mises à jour synchronisées`)),this.#d({syncing:!1})}catch(t){console.error("[ProductsStore] Erreur sync:",t),this.#d({syncing:!1})}}}#C(t){if(!a(this.#s))return;this.products.some(n=>n.$id===t.$id)||this.#d({products:[...this.products,t]})}#I(t){a(this.#s)&&this.#d({products:this.products.map(r=>{if(r.$id===t.$id){const n={...r};return Object.keys(t).forEach(s=>{t[s]!==void 0&&(n[s]=t[s])}),n}return r})})}#D(t){a(this.#s)&&this.#d({products:this.products.filter(r=>r.$id!==t)})}#q(t){console.log("[ProductsStore] Purchase créé, mise à jour des produits concernés..."),this.#$(t)}#R(t){console.log("[ProductsStore] Purchase mis à jour, mise à jour des produits concernés..."),this.#$(t)}#j(t){console.log("[ProductsStore] Purchase supprimé, nettoyage des produits concernés..."),this.#d({products:this.products.map(r=>({...r,purchases:(r.purchases||[]).filter(n=>n.$id!==t)}))})}#$(t){!t.products||t.products.length===0||(this.#d({products:this.products.map(r=>{if(t.products.some(n=>n.$id===r.$id)){const s=(r.purchases||[]).filter(i=>i.$id!==t.$id);return s.push(t),{...r,purchases:s}}return r})}),console.log(`[ProductsStore] ${t.products.length} produit(s) mis à jour avec le purchase ${t.$id}`))}#O(){return{onProductCreate:t=>{this.#C(t),this.#g()},onProductUpdate:t=>{this.#I(t),this.#g()},onProductDelete:t=>{this.#D(t),this.#g()},onPurchaseCreate:t=>{this.#q(t),this.#g()},onPurchaseUpdate:t=>{this.#R(t),this.#g()},onPurchaseDelete:t=>{this.#j(t),this.#g()},onConnect:()=>{console.log("[ProductsStore] Realtime connecté"),this.#d({realtimeConnected:!0})},onDisconnect:()=>{console.log("[ProductsStore] Realtime déconnecté"),this.#d({realtimeConnected:!1})},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#S(){if(!a(this.#t)||!a(this.#n))return;const t=new Date().toISOString();a(this.#n).current={lastSync:t,mainId:a(this.#t)},this.lastSync=t,this.mainId=a(this.#t)}#d(t){a(this.#s)&&(a(this.#s).current={...a(this.#s).current,...t})}async forceReload(t){await this.#T(t)}destroy(){a(this.#c)?.(),$(this.#c,null),console.log("[ProductsStore] Ressources nettoyées")}clearCache(){if(!a(this.#s)||!a(this.#n)){console.warn("[ProductsStore] Store non initialisé");return}this.#d({products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),a(this.#n).current={lastSync:null,mainId:null},console.log(`[ProductsStore] Cache vidé pour ${a(this.#t)}`)}setSearchQuery(t){a(this.#e).searchQuery=t}toggleProductType(t){const r=a(this.#e).selectedProductTypes.indexOf(t);r>-1?a(this.#e).selectedProductTypes.splice(r,1):a(this.#e).selectedProductTypes.push(t)}toggleTemperature(t){const r=a(this.#e).selectedTemperatures.indexOf(t);r>-1?a(this.#e).selectedTemperatures.splice(r,1):a(this.#e).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){a(this.#e).selectedProductTypes=[],a(this.#e).selectedTemperatures=[]}setGroupBy(t){a(this.#e).groupBy=t}toggleStore(t){const r=a(this.#e).selectedStores.indexOf(t);r>-1?a(this.#e).selectedStores.splice(r,1):a(this.#e).selectedStores.push(t)}toggleWho(t){const r=a(this.#e).selectedWho.indexOf(t);r>-1?a(this.#e).selectedWho.splice(r,1):a(this.#e).selectedWho.push(t)}clearStoreFilters(){a(this.#e).selectedStores=[]}clearWhoFilters(){a(this.#e).selectedWho=[]}handleSort(t){a(this.#e).sortColumn===t?a(this.#e).sortDirection=a(this.#e).sortDirection==="asc"?"desc":"asc":(a(this.#e).sortColumn=t,a(this.#e).sortDirection="asc")}clearFilters(){$(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"none",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return a(this.#e).sortColumn?[...t].sort((r,n)=>{let s=r[a(this.#e).sortColumn],i=n[a(this.#e).sortColumn];return a(this.#e).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,i=parseFloat(i)||0):a(this.#e).sortColumn==="purchases"&&(s=r.purchases?.length||0,i=n.purchases?.length||0),s<i?a(this.#e).sortDirection==="asc"?-1:1:s>i?a(this.#e).sortDirection==="asc"?1:-1:0}):t}#L(t){if(a(this.#e).searchQuery.trim()){const r=a(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(a(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!a(this.#e).selectedStores.includes(t.storeInfo.storeName))||a(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>a(this.#e).selectedWho.includes(r)))||a(this.#e).selectedProductTypes.length>0&&(!t.productType||!a(this.#e).selectedProductTypes.includes(t.productType))||a(this.#e).selectedTemperatures.length>0&&!(a(this.#e).selectedTemperatures.includes("frais")&&t.pFrais||a(this.#e).selectedTemperatures.includes("surgele")&&t.pSurgel))}#V(t){if(!t)return"-";try{const r=JSON.parse(t);return!Array.isArray(r)||r.length===0?"-":r.map(n=>this.#P(n.quantity,n.unit)).join(" et ")}catch{return"-"}}#P(t,r){const n=parseFloat(t);if(isNaN(n))return`${t} ${r}`;if((r==="gr."||r==="ml")&&n>=1e3){const s=n/1e3,i=r==="gr."?"kg":"l.";let c=(Math.round(s*100)/100).toString();return c.endsWith(",0")&&(c=c.slice(0,-2)),c.endsWith(",00")&&(c=c.slice(0,-3)),`${c} ${i}`}if(!["gr.","ml","kg","l."].includes(r)){let i=(Math.round(n*10)/10).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),`${i} ${r}`}return`${n} ${r}`}#N(t){return!t||t.length===0?"-":t.map(r=>this.#P(r.quantity.toString(),r.unit)).join(" et ")}#B(t){try{return JSON.parse(t).map(n=>({quantity:parseFloat(n.quantity),unit:n.unit})).filter(n=>!isNaN(n.quantity))}catch(r){return console.error("[ProductsStore] Erreur parsing NumericQuantity:",r),[]}}#W(t){if(!t||t.length===0)return[];const r=new Map;t.forEach(s=>{if(!s.quantity||!s.unit)return;const i=parseFloat(s.quantity);if(isNaN(i))return;const o=r.get(s.unit)||0;r.set(s.unit,o+i)});const n=[];return r.forEach((s,i)=>{n.push({quantity:s,unit:i})}),n}#z(t,r){if(!t||t.length===0)return[];if(!r||r.length===0)return t.map(o=>({quantity:parseFloat(o.quantity),unit:o.unit}));const n=new Map,s=new Map;t.forEach(o=>{const c=parseFloat(o.quantity);isNaN(c)||n.set(o.unit,(n.get(o.unit)||0)+c)}),r.forEach(o=>{s.set(o.unit,(s.get(o.unit)||0)+o.quantity)});const i=[];return n.forEach((o,c)=>{const u=s.get(c)||0,f=o-u;f>0&&i.push({quantity:f,unit:c})}),i}}const L=new _l;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ml={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var gl=To("<svg><!><!></svg>");function pe(e,t){Z(t,!0);const r=wr(t,"color",3,"currentColor"),n=wr(t,"size",3,24),s=wr(t,"strokeWidth",3,2),i=wr(t,"absoluteStrokeWidth",3,!1),o=wr(t,"iconNode",19,()=>[]),c=fe(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=gl();$s(u,m=>({...ml,...c,width:n(),height:n(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(s())*24/Number(n()):s()]);var f=l(u);Ye(f,17,o,Mo,(m,p)=>{var _=Q(()=>Ys(a(p),2));let g=()=>a(_)[0],P=()=>a(_)[1];var w=Y(),E=K(w);Do(E,g,!0,(D,C)=>{$s(D,()=>({...P()}))}),h(m,w)});var v=d(f);de(v,()=>t.children??oe),h(e,u),X()}function Jn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];pe(e,he({name:"archive"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function bl(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];pe(e,he({name:"bean"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function yl(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];pe(e,he({name:"beef"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function wl(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];pe(e,he({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function xl(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];pe(e,he({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function Sl(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];pe(e,he({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function Pl(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];pe(e,he({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function El(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];pe(e,he({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function kl(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];pe(e,he({name:"combine"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function Tl(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];pe(e,he({name:"egg"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function Yn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];pe(e,he({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function Gs(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];pe(e,he({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function $l(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];pe(e,he({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function Nl(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];pe(e,he({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function un(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];pe(e,he({name:"package"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function Al(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];pe(e,he({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function Ml(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];pe(e,he({name:"save"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function Cl(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];pe(e,he({name:"search"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function dn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];pe(e,he({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function mn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];pe(e,he({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function fn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];pe(e,he({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function zr(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];pe(e,he({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function Yr(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];pe(e,he({name:"store"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function Il(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];pe(e,he({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function Dl(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];pe(e,he({name:"user"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function gn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];pe(e,he({name:"users"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function ql(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];pe(e,he({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}function ht(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];pe(e,he({name:"x"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Y(),c=K(o);de(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),X()}const It=tt({product:{id:"",isOpen:!1,tab:"recettes"}});function Rl(e,t){It.product.tab=e,It.product.isOpen=!0,It.product.id=t}function Us(){It.product.isOpen=!1,It.product.tab="",It.product.id=""}let Qs=()=>localStorage.getItem("appwrite-user-name")||"";function jl(e,t,r){$(t,null),r.onCancelEditPurchase()}async function Ol(e,t,r){await t.onSavePurchase(),$(r,null)}var Ll=x('<span class="loading loading-spinner loading-sm"></span>'),Bl=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Wl=x('<span class="loading loading-spinner loading-sm"></span>'),zl=x('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input input-bordered w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input input-bordered w-24"/></td><td><input type="text" class="input input-bordered w-20"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="0.01" class="input input-bordered w-16"/></td><td><input type="text" class="input input-bordered w-24"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Vl=(e,t,r)=>t(a(r)),Gl=(e,t,r)=>t(a(r).$id),Ul=x('<span class="loading loading-spinner loading-sm"></span>'),Ql=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Hl=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Kl=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"><div class="form-control"><label for="purchase-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="purchase-quantity" type="number" step="0.01" class="input input-bordered validator" required/></div> <div class="form-control"><label for="purchase-unit" class="label"><span class="label-text">Unité</span></label> <select id="purchase-unit" class="select select-bordered validator" required><option disabled selected>Sélectionner</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></div> <div class="form-control"><label for="purchase-store" class="label"><span class="label-text">Magasin</span></label> <input id="purchase-store" type="text" class="input input-bordered" placeholder="Ex: Marché"/></div> <div class="form-control"><label for="purchase-who" class="label"><span class="label-text">Qui a acheté ?</span></label> <input id="purchase-who" type="text" class="input input-bordered" placeholder="Votre nom"/></div> <div class="form-control"><label for="purchase-price" class="label"><span class="label-text">Prix (€)</span></label> <input id="purchase-price" type="number" step="1" class="input input-bordered" placeholder="0.00"/></div> <div class="form-control"><label for="purchase-notes" class="label"><span class="label-text">Notes</span></label> <input id="purchase-notes" type="text" class="input input-bordered" placeholder="Promotion, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function Jl(e,t){Z(t,!0);let r=wr(t,"newPurchase",7),n=be(null);function s(k,F){return F==="gr."&&k>=1e3?`${(k/1e3).toFixed(1)} kg`:F==="ml"&&k>=1e3?`${(k/1e3).toFixed(1)} l`:`${k} ${F}`}function i(k){return new Date(k).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function o(k){$(n,{...k},!0),t.onStartEditPurchase(k)}async function c(k){await t.onDeletePurchase(k)}var u=Kl(),f=l(u),v=l(f);mn(v,{class:"w-5 h-5"});var m=d(f,2),p=l(m),_=d(l(p),2),g=l(_),P=d(l(g),2),w=d(g,2),E=d(l(w),2),D=l(E);D.value=D.__value="";var C=d(D);C.value=C.__value="kg";var N=d(C);N.value=N.__value="gr.";var T=d(N);T.value=T.__value="l.";var A=d(T);A.value=A.__value="ml";var O=d(A);O.value=O.__value="unité";var z=d(O);z.value=z.__value="bottes";var W=d(w,2),te=d(l(W),2),_e=d(W,2),I=d(l(_e),2),R=d(_e,2),se=d(l(R),2),ae=d(R,2),me=d(l(ae),2),Ce=d(_,2),S=l(Ce);S.__click=function(...k){t.onAddPurchase?.apply(this,k)};var y=l(S);{var j=k=>{var F=Ll();h(k,F)},ce=k=>{var F=lt("Ajouter l'achat");h(k,F)};q(y,k=>{t.loading?k(j):k(ce,!1)})}var Re=d(m,2);{var Oe=k=>{var F=Bl(),Ae=l(F);mn(Ae,{class:"w-12 h-12 mx-auto mb-2"}),h(k,F)},Qe=k=>{var F=Hl(),Ae=l(F),Ie=d(l(Ae));Ye(Ie,21,()=>t.currentProductPurchases,Te=>Te.$id,(Te,ue)=>{var xe=Y(),st=K(xe);{var Xe=at=>{var He=zl(),$e=l(He),it=l($e),_t=l(it),mt=d(_t,2),ut=l(mt);ut.value=ut.__value="kg";var qt=d(ut);qt.value=qt.__value="gr.";var kt=d(qt);kt.value=kt.__value="l.";var Ke=d(kt);Ke.value=Ke.__value="ml";var gt=d(Ke);gt.value=gt.__value="unité";var Rt=d(gt);Rt.value=Rt.__value="bottes";var jt=d($e),Tt=l(jt),bt=d(jt),nr=l(bt),yt=d(bt),Ot=l(yt),$t=d(yt),wt=l($t),Lt=d($t),sr=l(Lt),Fe=d(Lt),Nt=l(Fe),Ut=l(Nt);Ut.__click=[Ol,t,n];var Ir=l(Ut);{var Dr=G=>{var xt=Wl();h(G,xt)},qr=G=>{Ml(G,{class:"w-3 h-3"})};q(Ir,G=>{t.loading?G(Dr):G(qr,!1)})}var V=d(Ut,2);V.__click=[jl,n,t];var le=l(V);ht(le,{class:"w-3 h-3"}),B(G=>{M(Ot,G),Ut.disabled=t.loading},[()=>i(a(ue).$createdAt)]),Ve(_t,()=>a(n).quantity,G=>a(n).quantity=G),Hn(mt,()=>a(n).unit,G=>a(n).unit=G),Ve(Tt,()=>a(n).store,G=>a(n).store=G),Ve(nr,()=>a(n).who,G=>a(n).who=G),Ve(wt,()=>a(n).price,G=>a(n).price=G),Ve(sr,()=>a(n).notes,G=>a(n).notes=G),h(at,He)},rr=at=>{var He=Ql(),$e=l(He),it=l($e),_t=d($e),mt=l(_t),ut=d(_t),qt=l(ut),kt=d(ut),Ke=l(kt),gt=d(kt),Rt=l(gt),jt=d(gt),Tt=l(jt),bt=d(jt),nr=l(bt),yt=l(nr);yt.__click=[Vl,o,ue];var Ot=l(yt);zr(Ot,{class:"w-4 h-4"});var $t=d(yt,2);$t.__click=[Gl,c,ue];var wt=l($t);{var Lt=Fe=>{var Nt=Ul();h(Fe,Nt)},sr=Fe=>{ht(Fe,{class:"w-4 h-4"})};q(wt,Fe=>{t.loading?Fe(Lt):Fe(sr,!1)})}B((Fe,Nt)=>{M(it,Fe),M(mt,a(ue).store),M(qt,a(ue).who),M(Ke,Nt),M(Rt,a(ue).price?`${a(ue).price}€`:"-"),M(Tt,a(ue).notes||"-"),$t.disabled=t.loading},[()=>s(a(ue).quantity,a(ue).unit),()=>i(a(ue).$createdAt)]),h(at,He)};q(st,at=>{a(n)?.$id===a(ue).$id?at(Xe):at(rr,!1)})}h(Te,xe)}),h(k,F)};q(Re,k=>{t.currentProductPurchases.length===0?k(Oe):k(Qe,!1)})}B(()=>S.disabled=t.loading),Ve(P,()=>r().quantity,k=>r().quantity=k),Hn(E,()=>r().unit,k=>r().unit=k),Ve(te,()=>r().store,k=>r().store=k),Ve(I,()=>r().who,k=>r().who=k),Ve(se,()=>r().price,k=>r().price=k),Ve(me,()=>r().notes,k=>r().notes=k),h(e,u),X()}tr(["click"]);var Yl=x('<span class="loading loading-spinner loading-sm"></span>'),Zl=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Xl=(e,t,r)=>t(a(r).dateTime),Fl=x('<span class="loading loading-spinner loading-xs"></span>'),ec=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),tc=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),rc=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"><div class="form-control"><label for="stock-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="stock-quantity" type="number" step="0.01" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-unit" class="label"><span class="label-text">Unité</span></label> <select id="stock-unit" class="select select-bordered select-sm" required><option>Sélectionner</option><option>kg</option><option>g</option><option>l</option><option>ml</option><option>unités</option><option>pièces</option></select></div> <div class="form-control"><label for="stock-datetime" class="label"><span class="label-text">Date du stock</span></label> <input id="stock-datetime" type="datetime-local" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-notes" class="label"><span class="label-text">Notes</span></label> <input id="stock-notes" type="text" class="input input-bordered input-sm" placeholder="Origine, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function nc(e,t){Z(t,!0);let r={quantity:"",unit:"",dateTime:"",notes:""};function n(y,j){return j==="g"&&y>=1e3?`${(y/1e3).toFixed(1)} kg`:j==="ml"&&y>=1e3?`${(y/1e3).toFixed(1)} l`:j==="unités"||j==="pièces"?`${y} ${j}`:`${y} ${j}`}function s(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}async function i(y){await t.onDeleteStock(y)}var o=rc(),c=l(o),u=l(c);Jn(u,{class:"w-5 h-5"});var f=d(c,2),v=l(f),m=d(l(v),2),p=l(m),_=d(l(p),2),g=d(p,2),P=d(l(g),2),w=l(P);w.value=w.__value="";var E=d(w);E.value=E.__value="kg";var D=d(E);D.value=D.__value="g";var C=d(D);C.value=C.__value="l";var N=d(C);N.value=N.__value="ml";var T=d(N);T.value=T.__value="unités";var A=d(T);A.value=A.__value="pièces";var O=d(g,2),z=d(l(O),2),W=d(O,2),te=d(l(W),2),_e=d(m,2),I=l(_e);I.__click=function(...y){t.onAddStock?.apply(this,y)};var R=l(I);{var se=y=>{var j=Yl();h(y,j)},ae=y=>{var j=lt("Ajouter au stock");h(y,j)};q(R,y=>{t.loading?y(se):y(ae,!1)})}var me=d(f,2);{var Ce=y=>{var j=Zl(),ce=l(j);Jn(ce,{class:"w-12 h-12 mx-auto mb-2"}),h(y,j)},S=y=>{var j=tc(),ce=l(j),Re=d(l(ce));Ye(Re,23,()=>t.stockEntries,Oe=>Oe.dateTime,(Oe,Qe)=>{var k=ec(),F=l(k),Ae=l(F),Ie=d(F),Te=l(Ie),ue=d(Ie),xe=l(ue),st=d(ue),Xe=l(st);Xe.__click=[Xl,i,Qe];var rr=l(Xe);{var at=$e=>{var it=Fl();h($e,it)},He=$e=>{var it=lt("Supprimer");h($e,it)};q(rr,$e=>{t.loading?$e(at):$e(He,!1)})}B(($e,it)=>{M(Ae,$e),M(Te,it),M(xe,a(Qe).notes||"-"),Xe.disabled=t.loading},[()=>n(a(Qe).quantity,a(Qe).unit),()=>s(a(Qe).dateTime)]),h(Oe,k)}),h(y,j)};q(me,y=>{t.stockEntries.length===0?y(Ce):y(S,!1)})}B(()=>I.disabled=t.loading),Ve(_,()=>r.quantity,y=>r.quantity=y),Hn(P,()=>r.unit,y=>r.unit=y),Ve(z,()=>r.dateTime,y=>r.dateTime=y),Ve(te,()=>r.notes,y=>r.notes=y),h(e,o),X()}tr(["click"]);var sc=(e,t)=>{e.key==="Enter"&&t()},ac=x('<span class="loading loading-spinner loading-sm"></span>'),ic=x('<span class="badge badge-primary badge-sm"> </span>'),oc=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun volontaire assigné à ce produit</p></div>'),lc=(e,t,r)=>t(r),cc=x('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs p-0 hover:text-error"><!></button></div>'),uc=x('<div class="flex flex-wrap gap-2"></div>'),dc=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des volontaires</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <div class="flex gap-2"><div class="form-control flex-1"><input type="text" class="input input-bordered input-sm" placeholder="Nom du volontaire"/></div> <button class="btn btn-primary btn-sm"><!></button></div></div></div> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Volontaires <!></h4> <!></div></div></div>');function fc(e,t){Z(t,!0);let r=be("");async function n(){a(r).trim()&&(await t.onAddVolunteer(a(r).trim()),$(r,""))}async function s(W){await t.onRemoveVolunteer(W)}var i=dc(),o=l(i),c=l(o);gn(c,{class:"w-5 h-5"});var u=d(o,2),f=l(u),v=d(l(f),2),m=l(v),p=l(m);p.__keydown=[sc,n];var _=d(m,2);_.__click=n;var g=l(_);{var P=W=>{var te=ac();h(W,te)},w=W=>{var te=lt("Ajouter");h(W,te)};q(g,W=>{t.loading?W(P):W(w,!1)})}var E=d(u,2),D=l(E),C=l(D),N=d(l(C));{var T=W=>{var te=ic(),_e=l(te);B(()=>M(_e,t.editingWho.length)),h(W,te)};q(N,W=>{t.editingWho.length>0&&W(T)})}var A=d(C,2);{var O=W=>{var te=oc(),_e=l(te);gn(_e,{class:"w-12 h-12 mx-auto mb-2"}),h(W,te)},z=W=>{var te=uc();Ye(te,20,()=>t.editingWho,_e=>_e,(_e,I)=>{var R=cc(),se=l(R),ae=d(se);ae.__click=[lc,s,I];var me=l(ae);ht(me,{class:"w-3 h-3"}),B(()=>{M(se,`${I??""} `),ae.disabled=t.loading}),h(_e,R)}),h(W,te)};q(A,W=>{t.editingWho.length===0?W(O):W(z,!1)})}B(()=>_.disabled=t.loading),Ve(p,()=>a(r),W=>$(r,W)),h(e,i),X()}tr(["keydown","click"]);var vc=(e,t)=>{e.key==="Enter"&&t()},hc=x('<span class="loading loading-spinner loading-sm"></span>'),pc=(e,t,r)=>{$(t,""),$(r,"")},_c=(e,t,r)=>t(r),mc=x('<button class="btn btn-outline btn-xs"> </button>'),gc=x('<br/><small class="opacity-75"> </small>',1),bc=x('<p class="text-sm"><strong>Magasin défini :</strong> <!></p>'),yc=x('<p class="text-sm"><strong>Magasin défini :</strong> </p>'),wc=x(`<p class="text-sm">Aucun magasin n'est encore défini pour ce produit</p>`),xc=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des magasins</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin principal</h4> <p class="text-sm opacity-75 mb-4">Définissez le magasin où ce produit est généralement acheté</p> <div class="form-control mb-3"><label class="label" for="store-name"><span class="label-text">Nom du magasin</span></label> <input id="store-name" type="text" class="input input-bordered input-sm" placeholder="Ex: Carrefour, Leclerc..."/></div> <div class="form-control mb-4"><label class="label" for="store-comment"><span class="label-text">Commentaire (optionnel)</span></label> <textarea id="store-comment" class="textarea textarea-bordered textarea-sm" placeholder="Ex: Près de la caisse, rayon frais, etc." rows="2"></textarea></div> <div class="flex gap-2 mb-4"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div> <div class="divider"></div> <div class="form-control"><label class="label" for="suggested-stores"><span class="label-text text-sm">Suggestions rapides</span></label> <div class="flex flex-wrap gap-2" id="suggested-stores"></div></div> <div class="divider"></div> <div class="alert alert-info"><!> <div><h4 class="font-semibold">Information sur le magasin actuel</h4> <!></div></div></div></div></div>');function Sc(e,t){Z(t,!0);let r=be(tt(t.editingStore?.storeName||"")),n=be(tt(t.editingStore?.storeComment||""));_a(()=>{if(t.product?.storeInfo)$(r,t.product.storeInfo.storeName||"",!0),$(n,t.product.storeInfo.storeComment||"",!0);else if(t.product?.store)try{const R=JSON.parse(t.product.store);$(r,R.storeName||"",!0),$(n,R.storeComment||"",!0)}catch{$(r,t.product.store||"",!0),$(n,"")}else $(r,""),$(n,"")});async function s(){const R=a(r).trim()?{storeName:a(r).trim(),storeComment:a(n).trim()||""}:null;await t.onUpdateStore(R)}function i(R){$(r,R,!0)}var o=xc(),c=l(o),u=l(c);Yr(u,{class:"w-5 h-5"});var f=d(c,2),v=l(f),m=d(l(v),4),p=d(l(m),2);p.__keydown=[vc,s];var _=d(m,2),g=d(l(_),2),P=d(_,2),w=l(P);w.__click=s;var E=l(w);{var D=R=>{var se=hc();h(R,se)},C=R=>{var se=lt("Mettre à jour");h(R,se)};q(E,R=>{t.loading?R(D):R(C,!1)})}var N=d(w,2);N.__click=[pc,r,n];var T=d(P,4),A=d(l(T),2);Ye(A,20,()=>["Carrefour","Intermarché","Leclerc","Auchan","Lidl","Aldi","Casino","Monoprix","Franprix","Bio c' Bon","Naturalia"],R=>R,(R,se)=>{var ae=mc();ae.__click=[_c,i,se];var me=l(ae);B(()=>{ae.disabled=t.loading,M(me,se)}),h(R,ae)});var O=d(T,4),z=l(O);Yr(z,{class:"w-4 h-4"});var W=d(z,2),te=d(l(W),2);{var _e=R=>{var se=bc(),ae=d(l(se)),me=d(ae);{var Ce=S=>{var y=gc(),j=d(K(y)),ce=l(j);B(()=>M(ce,t.product.storeInfo.storeComment)),h(S,y)};q(me,S=>{t.product.storeInfo.storeComment&&S(Ce)})}B(()=>M(ae,` ${t.product.storeInfo.storeName??""} `)),h(R,se)},I=R=>{var se=Y(),ae=K(se);{var me=S=>{var y=yc(),j=d(l(y));B(()=>M(j,` ${t.product.store??""}`)),h(S,y)},Ce=S=>{var y=wc();h(S,y)};q(ae,S=>{t.product?.store?S(me):S(Ce,!1)},!0)}h(R,se)};q(te,R=>{t.product?.storeInfo?R(_e):R(I,!1)})}B(()=>{w.disabled=t.loading,N.disabled=t.loading}),Ve(p,()=>a(r),R=>$(r,R)),Ve(g,()=>a(n),R=>$(n,R)),h(e,o),X()}tr(["keydown","click"]);var Pc=x('<div class="badge badge-success gap-1"><!> Actif</div>'),Ec=x('<div class="badge badge-warning gap-1"><!> </div>'),kc=(e,t)=>t("recettes"),Tc=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),$c=(e,t)=>t("achats"),Nc=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Ac=(e,t)=>t("stock"),Mc=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Cc=(e,t)=>t("volontaires"),Ic=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Dc=(e,t)=>t("magasins"),qc=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Rc=x('<div class="text-center py-8 opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),jc=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>'),Oc=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Horaire</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),Lc=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Recettes utilisant ce produit</h3> <!></div>'),Bc=x('<div class="modal modal-open"><div class="modal-box max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"><div class="flex items-center justify-between p-4 border-b"><div class="flex-1"><h2 class="text-xl font-bold"> </h2> <div class="flex items-center gap-3 mt-2"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div></div> <button class="btn btn-circle btn-ghost btn-sm" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="flex-1 overflow-y-auto p-4 min-h-96"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function Wc(e,t){Z(t,!0);let r=Q(()=>It.product.tab),n=Q(()=>It.product.id),s=Q(()=>It.product.isOpen),i=Q(()=>L.enrichedProducts.find(S=>S.$id===a(n))),o=be(!1),c=be(null),u=tt(a(i)?.storeInfo||null),f=be(tt({quantity:null,unit:"",store:a(i)?.storeInfo?.storeName||"",who:Qs()||"",price:null,notes:""})),v=be(tt({quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()})),m=Q(()=>a(i)?.stockReel?fl(a(i).stockReel):[]),p=be(null),_=Q(()=>{const S=a(i)?.purchases;if(!S||!Array.isArray(S))return console.warn("[ProductModal] Purchases is not a valid array:",S),[];const y=S.filter(j=>!j||typeof j!="object"?(console.warn("[ProductModal] Invalid purchase object:",j),!1):j.$id?!0:(console.warn("[ProductModal] Purchase missing $id:",j),!1));return y.length!==S.length&&console.warn(`[ProductModal] Filtered ${S.length-y.length} invalid purchases`),y}),g=Q(()=>vl(a(i)?.recipesOccurrences||null)),P=Q(()=>a(i)?.who||[]);function w(){$(f,{quantity:null,unit:"",store:a(i)?.storeInfo?.storeName||"",who:Qs(),price:null,notes:""},!0),$(v,{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString().slice(0,16)},!0)}function E(S){It.product.tab=S}async function D(S){$(o,!0),$(c,null);try{return await S()}catch(y){return $(c,y instanceof Error?y.message:"Une erreur est survenue",!0),console.error("[ProductModal] Erreur:",y),null}finally{$(o,!1)}}function C(S){if(!S)return"-";try{return new Date(S).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return S}}function N(S){if(!S)return"-";try{const y=JSON.parse(S);if(Array.isArray(y)&&y.length>0)return y.map(j=>`${j.value} ${j.unit}`).join(" et ")}catch{return S}return S}async function T(){a(i)&&($(o,!0),await D(async()=>{if(!a(f).quantity||!a(f).unit.trim())throw new Error("Veuillez remplir les champs obligatoires");let S=a(f).quantity,y=a(f).unit;if(a(f).unit==="kg"?(S=a(f).quantity*1e3,y="gr."):a(f).unit==="l."&&(S=a(f).quantity*1e3,y="ml"),await ol({products:[a(i).$id],mainId:a(i).mainId.$id,unit:y,quantity:S,store:a(f).store||null,who:a(f).who||null,notes:a(f).notes||"",price:a(f).price||null})){w();const ce=new CustomEvent("toast",{detail:{type:"success",message:"Achat ajouté avec succès"}});window.dispatchEvent(ce)}}))}function A(S){$(p,{...S},!0)}function O(){$(p,null)}async function z(){a(p)&&await D(async()=>{const S=a(p).$id;let y=a(p).quantity,j=a(p).unit;a(p).unit==="kg"?(y=a(p).quantity*1e3,j="gr."):a(p).unit==="l."&&(y=a(p).quantity*1e3,j="ml");const ce={unit:j,quantity:y,store:a(p)?.store||null,who:a(p)?.who||null,notes:a(p)?.notes||"",price:a(p)?.price||null};if(await ll(S,ce)){$(p,null);const Oe=new CustomEvent("toast",{detail:{type:"success",message:"Achat modifié avec succès"}});window.dispatchEvent(Oe)}})}async function W(S){const y=a(_).find(j=>j.$id===S);confirm(`Êtes-vous sûr de vouloir supprimer cet achat (${y?.quantity} ${y?.unit}) ?`)&&await D(async()=>{await cl(S);const j=new CustomEvent("toast",{detail:{type:"success",message:"Achat supprimé avec succès"}});window.dispatchEvent(j)})}async function te(){a(i)&&await D(async()=>{if(!a(v).quantity||!a(v).unit)throw new Error("Veuillez remplir les champs obligatoires");const S={quantity:a(v).quantity.toString(),unit:a(v).unit,notes:a(v).notes||"",dateTime:a(v).dateTime||new Date().toISOString()},y=[...a(m),S],j=a(i).$id;if(await zs(j,JSON.stringify(y))){$(m,y),w();const Re=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock ajouté avec succès"}});window.dispatchEvent(Re)}})}async function _e(S){confirm("Êtes-vous sûr de vouloir supprimer ce relevé de stock ?")&&a(i)&&await D(async()=>{const y=a(m).filter((ce,Re)=>Re!==S);if(await zs(a(i).$id,JSON.stringify(y))){$(m,y);const ce=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock supprimé avec succès"}});window.dispatchEvent(ce)}})}async function I(S){!a(i)||!S.trim()||await D(async()=>{const y=S.trim();if(a(P).includes(y))throw new Error("Ce volontaire est déjà ajouté");const j=[...a(P),y];if(await Ws(a(i).$id,j)){const Re=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire ajouté avec succès"}});window.dispatchEvent(Re)}})}async function R(S){a(i)&&confirm(`Retirer ${S} de la liste des volontaires ?`)&&await D(async()=>{const y=a(P).filter(ce=>ce!==S);if(await Ws(a(i).$id,y)){const ce=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire retiré avec succès"}});window.dispatchEvent(ce)}})}async function se(S){a(i)&&await D(async()=>{const y=S!==void 0?S:u?.storeName&&u.storeName.trim()!==""?u.storeName.trim():a(i).store;if(console.log("[ProductModal] handleUpdateStore called with:",{storeInfo:S,editingStore:u,finalStoreValue:y}),await il(a(i).$id,y)){const ce=new CustomEvent("toast",{detail:{type:"success",message:"Magasin mis à jour avec succès"}});window.dispatchEvent(ce)}})}var ae=Y(),me=K(ae);{var Ce=S=>{var y=Bc(),j=l(y),ce=l(j),Re=l(ce),Oe=l(Re),Qe=l(Oe),k=d(Oe,2),F=l(k),Ae=l(F),Ie=d(F,2);{var Te=V=>{var le=Pc(),G=l(le);El(G,{class:"w-3 h-3"}),h(V,le)},ue=V=>{var le=Ec(),G=l(le);Il(G,{class:"w-3 h-3"});var xt=d(G);B(()=>M(xt,` ${a(i).status??""}`)),h(V,le)};q(Ie,V=>{a(i).status==="active"?V(Te):V(ue,!1)})}var xe=d(Ie,2),st=d(l(xe)),Xe=d(Re,2);Xe.__click=function(...V){Us?.apply(this,V)};var rr=l(Xe);ht(rr,{class:"w-4 h-4"});var at=d(ce,2),He=l(at);He.__click=[kc,E];var $e=l(He);un($e,{class:"w-4 h-4 mr-1"});var it=d($e,2);{var _t=V=>{var le=Tc(),G=l(le);B(()=>M(G,a(g).length)),h(V,le)};q(it,V=>{a(g).length>0&&V(_t)})}var mt=d(He,2);mt.__click=[$c,E];var ut=l(mt);mn(ut,{class:"w-4 h-4 mr-1"});var qt=d(ut,2);{var kt=V=>{var le=Nc(),G=l(le);B(()=>M(G,a(_).length)),h(V,le)};q(qt,V=>{a(_).length>0&&V(kt)})}var Ke=d(mt,2);Ke.__click=[Ac,E];var gt=l(Ke);Jn(gt,{class:"w-4 h-4 mr-1"});var Rt=d(gt,2);{var jt=V=>{var le=Mc(),G=l(le);B(()=>M(G,a(m).length)),h(V,le)};q(Rt,V=>{a(m).length>0&&V(jt)})}var Tt=d(Ke,2);Tt.__click=[Cc,E];var bt=l(Tt);gn(bt,{class:"w-4 h-4 mr-1"});var nr=d(bt,2);{var yt=V=>{var le=Ic(),G=l(le);B(()=>M(G,a(i).who.length)),h(V,le)};q(nr,V=>{a(i).who&&a(i).who.length>0&&V(yt)})}var Ot=d(Tt,2);Ot.__click=[Dc,E];var $t=l(Ot);Yr($t,{class:"w-4 h-4 mr-1"});var wt=d(at,2),Lt=l(wt);{var sr=V=>{var le=qc(),G=l(le);ht(G,{class:"w-4 h-4"});var xt=d(G,2),Qt=l(xt);B(()=>M(Qt,`erreur : ${a(c)??""}`)),h(V,le)};q(Lt,V=>{a(c)&&V(sr)})}var Fe=d(Lt,2),Nt=l(Fe);{var Ut=V=>{var le=Lc(),G=l(le),xt=l(G);un(xt,{class:"w-5 h-5"});var Qt=d(G,2);{var At=re=>{var Le=Rc(),Be=l(Le);un(Be,{class:"w-12 h-12 mx-auto mb-2"}),h(re,Le)},H=re=>{var Le=Oc(),Be=l(Le),Ee=d(l(Be));Ye(Ee,21,()=>a(g),Me=>Me.recipeName+Me.dateTimeService,(Me,De)=>{var ge=jc(),we=l(ge),ie=l(we),U=d(we),Se=l(U),Pe=d(U),We=l(Pe),dt=d(Pe),Bt=l(dt),Wt=d(dt),et=l(Wt),St=d(Wt),Rr=l(St);B(jr=>{M(ie,a(De).recipeName),M(Se,`${a(De).quantity??""} ${a(De).unit??""}`),M(We,jr),M(Bt,a(De).horaire||"-"),M(et,a(De).typePlat||"-"),M(Rr,a(De).assiettes||"-")},[()=>C(a(De).dateTimeService)]),h(Me,ge)}),h(re,Le)};q(Qt,re=>{a(g).length===0?re(At):re(H,!1)})}h(V,le)},Ir=V=>{var le=Y(),G=K(le);{var xt=At=>{Jl(At,{get product(){return a(i)},get currentProductPurchases(){return a(_)},get loading(){return a(o)},get newPurchase(){return a(f)},onAddPurchase:T,onStartEditPurchase:A,onCancelEditPurchase:O,onSavePurchase:z,onDeletePurchase:W})},Qt=At=>{var H=Y(),re=K(H);{var Le=Ee=>{nc(Ee,{get product(){return a(i)},get stockEntries(){return a(m)},get loading(){return a(o)},onAddStock:te,onDeleteStock:_e})},Be=Ee=>{var Me=Y(),De=K(Me);{var ge=ie=>{fc(ie,{get product(){return a(i)},get editingWho(){return a(P)},get loading(){return a(o)},onAddVolunteer:I,onRemoveVolunteer:R})},we=ie=>{var U=Y(),Se=K(U);{var Pe=We=>{Sc(We,{get product(){return a(i)},get editingStore(){return u},get loading(){return a(o)},onUpdateStore:se})};q(Se,We=>{a(r)==="magasins"&&We(Pe)},!0)}h(ie,U)};q(De,ie=>{a(r)==="volontaires"?ie(ge):ie(we,!1)},!0)}h(Ee,Me)};q(re,Ee=>{a(r)==="stock"?Ee(Le):Ee(Be,!1)},!0)}h(At,H)};q(G,At=>{a(r)==="achats"?At(xt):At(Qt,!1)},!0)}h(V,le)};q(Nt,V=>{a(r)==="recettes"?V(Ut):V(Ir,!1)})}var Dr=d(wt,2),qr=l(Dr);qr.__click=function(...V){Us?.apply(this,V)},B(V=>{M(Qe,a(i).productName),M(Ae,a(i).productType),M(st,` ${V??""}`),Ne(He,1,`tab ${a(r)==="recettes"?"tab-active":""}`),Ne(mt,1,`tab ${a(r)==="achats"?"tab-active":""}`),Ne(Ke,1,`tab ${a(r)==="stock"?"tab-active":""}`),Ne(Tt,1,`tab ${a(r)==="volontaires"?"tab-active":""}`),Ne(Ot,1,`tab ${a(r)==="magasins"?"tab-active":""}`)},[()=>N(a(i).totalNeededConsolidated)]),h(S,y)};q(me,S=>{a(s)&&a(i)&&S(Ce)})}h(e,ae),X()}tr(["click"]);function vn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:bl};case"animaux":return{displayName:"Viandes et Poissons",icon:yl};case"legumes":return{displayName:"Fruits et Légumes",icon:xl};case"sucres":return{displayName:"Sucrées",icon:wl};case"lof":return{displayName:"L.O.F",icon:Tl};case"autres":return{displayName:"Autres",icon:Sl};case"epices":return{displayName:"Assaisonnements",icon:$l};case"frais":return{displayName:"Produits Frais",icon:Al};default:return{displayName:e,icon:un}}}function zc(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],i=n[t.sortColumn];return s<i?t.sortDirection==="asc"?-1:1:s>i?t.sortDirection==="asc"?1:-1:0}):e}var Vc=()=>L.setGroupBy("none"),Gc=()=>L.setGroupBy("store"),Uc=()=>L.setGroupBy("productType"),Qc=(e,t)=>L.toggleProductType(t),Hc=x("<button><!> </button>"),Kc=()=>L.toggleTemperature("frais"),Jc=()=>L.toggleTemperature("surgele"),Yc=()=>L.clearTypeAndTemperatureFilters(),Zc=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Xc=(e,t)=>L.toggleStore(t),Fc=x("<button> </button>"),eu=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),tu=(e,t)=>L.toggleWho(t),ru=x("<button> </button>"),nu=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),su=(e,t)=>{L.clearFilters(),$(t,!1)},au=x('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function iu(e,t){Z(t,!0);let r=be(!1);const n=Q(()=>L.filters),s=Q(()=>L.uniqueStores),i=Q(()=>L.uniqueWho),o=Q(()=>L.uniqueProductTypes);var c=au(),u=K(c),f=l(u),v=d(f,2),m=d(l(v),2),p=l(m),_=l(p),g=l(_);Yn(g,{class:"w-5 h-5"});var P=d(_,2),w=l(P);ht(w,{class:"w-4 h-4"});var E=d(p,2),D=d(l(E),2),C=l(D);C.__change=[Vc];var N=d(C,2);N.__change=[Gc];var T=d(N,2);T.__change=[Uc];var A=d(E,2),O=l(A),z=d(l(O),2);Ye(z,20,()=>a(o),k=>k,(k,F)=>{const Ae=Q(()=>vn(F));var Ie=Hc();Ie.__click=[Qc,F];var Te=l(Ie);cn(Te,()=>a(Ae).icon,(xe,st)=>{st(xe,{class:"w-3 h-3 mr-1"})});var ue=d(Te);B(xe=>{Ne(Ie,1,`btn btn-sm ${xe??""}`),M(ue,` ${a(Ae).displayName??""}`)},[()=>a(n).selectedProductTypes.length===0?"btn-soft btn-accent":a(n).selectedProductTypes.includes(F)?"btn-accent":"btn-dash btn-accent"]),h(k,Ie)});var W=d(z,2),te=l(W);te.__click=[Kc];var _e=l(te);dn(_e,{class:"w-3 h-3"});var I=d(te,2);I.__click=[Jc];var R=l(I);fn(R,{class:"w-3 h-3"});var se=d(I,2);{var ae=k=>{var F=Zc();F.__click=[Yc];var Ae=l(F);ht(Ae,{class:"w-3 h-3"}),h(k,F)};q(se,k=>{(a(n).selectedProductTypes.length>0||a(n).selectedTemperatures.length>0)&&k(ae)})}var me=d(A,2);{var Ce=k=>{var F=eu(),Ae=l(F),Ie=d(l(Ae),2);Ye(Ie,20,()=>a(s),Te=>Te,(Te,ue)=>{var xe=Fc();xe.__click=[Xc,ue];var st=l(xe);B(Xe=>{Ne(xe,1,`btn btn-sm ${Xe??""}`),M(st,ue)},[()=>a(n).selectedStores.length===0?"btn-soft btn-accent":a(n).selectedStores.includes(ue)?"btn-accent":"btn-dash btn-accent"]),h(Te,xe)}),h(k,F)};q(me,k=>{a(s).length>0&&k(Ce)})}var S=d(me,2);{var y=k=>{var F=nu(),Ae=l(F),Ie=d(l(Ae),2);Ye(Ie,20,()=>a(i),Te=>Te,(Te,ue)=>{var xe=ru();xe.__click=[tu,ue];var st=l(xe);B(Xe=>{Ne(xe,1,`btn btn-sm ${Xe??""}`),M(st,ue)},[()=>a(n).selectedWho.length===0?"btn-soft btn-accent":a(n).selectedWho.includes(ue)?"btn-accent":"btn-dash btn-accent"]),h(Te,xe)}),h(k,F)};q(S,k=>{a(i).length>0&&k(y)})}var j=d(S,4);j.__click=[su,r];var ce=l(j);ht(ce,{class:"w-4 h-4 mr-2"});var Re=d(u,2),Oe=l(Re),Qe=l(Oe);Yn(Qe,{class:"w-6 h-6"}),B((k,F)=>{Sr(C,a(n).groupBy==="none"),Sr(N,a(n).groupBy==="store"),Sr(T,a(n).groupBy==="productType"),Ne(te,1,`btn btn-sm ${k??""}`),Ne(I,1,`btn btn-sm ${F??""}`)},[()=>a(n).selectedTemperatures.length===0?"btn-soft btn-success":a(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(n).selectedTemperatures.length===0?"btn-soft btn-info":a(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Go(f,()=>a(r),k=>$(r,k)),h(e,c),X()}tr(["change","click"]);var ou=()=>L.clearFilters(),lu=e=>L.setSearchQuery(e.currentTarget.value),cu=()=>L.setGroupBy("none"),uu=()=>L.setGroupBy("store"),du=()=>L.setGroupBy("productType"),fu=(e,t)=>L.toggleProductType(t),vu=x("<button><!> </button>"),hu=()=>L.toggleTemperature("frais"),pu=()=>L.toggleTemperature("surgele"),_u=()=>L.clearTypeAndTemperatureFilters(),mu=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),gu=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),bu=(e,t)=>L.toggleStore(t),yu=x("<button><!> </button>"),wu=()=>L.clearStoreFilters(),xu=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Su=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Pu=(e,t)=>L.toggleWho(t),Eu=x("<button><!> </button>"),ku=()=>L.clearWhoFilters(),Tu=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),$u=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Nu=()=>L.handleSort("productName"),Au=()=>L.handleSort("store"),Mu=()=>L.handleSort("who"),Cu=()=>L.handleSort("productType"),Iu=x('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Du=x('<tr class="bg-base-200 font-semibold sticky top-10 z-10"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),qu=(e,t,r)=>t("recettes",a(r).$id),Ru=x('<div class="text-xs text-base-content/60"> </div>'),ju=x('<div class="w-7 h-7 bg-success/20 rounded-full flex items-center justify-center"><!></div>'),Ou=x('<div class="w-7 h-7 bg-info/20 rounded-full flex items-center justify-center"><!></div>'),Lu=(e,t,r)=>t("magasins",a(r).$id),Bu=x('<div class="tooltip tooltip-info"> </div>'),Wu=(e,t,r)=>t("volontaires",a(r).$id),zu=x('<span class="badge badge-soft badge-info badge-sm"> </span>'),Vu=x('<div class="flex flex-wrap gap-1 pr-8"></div>'),Gu=x('<div class="text-xs text-base-content/70 flex gap-2 items-center justify-center"><!> <span class="text-center "> </span> <span class="text-center "> </span></div>'),Uu=(e,t,r)=>t("achats",a(r).$id),Qu=x('<div class="bg-warning px-2 py-1 rounded m-auto"> </div>'),Hu=x('<tr class="hover:bg-base-200/20 transition-colors"><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="text-center font-semibold"><div class="pb-1 text-center font-semibold"> </div> <!></td><td class="text-center font-medium cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="relative group text-center"><!></td></tr>'),Ku=x("<!> <!>",1),Ju=x('<div class="text-center py-8"><div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Yu=x('<div class="space-y-6"><div class="flex flex-wrap gap-2 items-center"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="flex  md:mb-4 justify-between mb-4 flex-wrap items-center gap-4 "><div class="form-control "><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input input-bordered flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="flex mt-4"><!></div> <div class="flex flex-col lg:flex-row gap-6 mt-4"><!> <!></div></div></div> <div class="hidden md:block bg-base-100 rounded-lg "><table class="table w-full"><thead class="sticky top-0 z-10 bg-base-200"><tr class="bg-base-200"><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function Zu(e,t){Z(t,!0);const r=Q(()=>L.filteredProducts),n=Q(()=>L.groupedFormattedProducts),s=Q(()=>L.stats),i=Q(()=>L.uniqueStores),o=Q(()=>L.uniqueWho),c=Q(()=>L.uniqueProductTypes),u=Q(()=>L.filters);function f(H,re){Rl(H,re)}var v=Yu(),m=K(v),p=l(m),_=l(p),g=l(_);Gs(g,{class:"w-4 h-4 mr-1"});var P=d(g),w=d(_,2),E=l(w);dn(E,{class:"w-4 h-4 mr-1"});var D=d(E),C=d(w,2),N=l(C);fn(N,{class:"w-4 h-4 mr-1"});var T=d(N),A=d(C,2),O=l(A);kl(O,{class:"w-4 h-4 mr-1"});var z=d(O),W=d(p,2),te=l(W),_e=l(te),I=l(_e),R=l(I);Yn(R,{class:"w-5 h-5"});var se=d(I,2);se.__click=[ou];var ae=l(se);ht(ae,{class:"w-4 h-4"});var me=d(te,2),Ce=l(me),S=d(l(Ce),2),y=l(S);Cl(y,{class:"w-4 h-4"});var j=d(y,2);j.__input=[lu];var ce=d(Ce,2),Re=d(l(ce),2),Oe=l(Re);Oe.__change=[cu];var Qe=d(Oe,2);Qe.__change=[uu];var k=d(Qe,2);k.__change=[du];var F=d(me,2),Ae=l(F),Ie=l(Ae);{var Te=H=>{var re=gu(),Le=l(re),Be=d(l(Le),2),Ee=l(Be);Ye(Ee,16,()=>a(c),Se=>Se,(Se,Pe)=>{const We=Q(()=>vn(Pe));var dt=vu();dt.__click=[fu,Pe];var Bt=l(dt);cn(Bt,()=>a(We).icon,(et,St)=>{St(et,{class:"w-5 h-5 mr-1"})});var Wt=d(Bt);B(et=>{Ne(dt,1,`btn btn-sm ${et??""}`),M(Wt,` ${a(We).displayName??""}`)},[()=>a(u).selectedProductTypes.length===0?"btn-soft btn-accent":a(u).selectedProductTypes.includes(Pe)?"btn-accent":"btn-dash btn-accent"]),h(Se,dt)});var Me=d(Ee,2);Me.__click=[hu];var De=l(Me);dn(De,{class:"w-5 h-5"});var ge=d(Me,2);ge.__click=[pu];var we=l(ge);fn(we,{class:"w-5 h-5"});var ie=d(ge,2);{var U=Se=>{var Pe=mu();Pe.__click=[_u];var We=l(Pe);ht(We,{class:"w-3 h-3"}),h(Se,Pe)};q(ie,Se=>{(a(u).selectedProductTypes.length>0||a(u).selectedTemperatures.length>0)&&Se(U)})}B((Se,Pe)=>{Ne(Me,1,`btn btn-sm ${Se??""}`),Ne(ge,1,`btn btn-sm ${Pe??""}`)},[()=>a(u).selectedTemperatures.length===0?"btn-soft btn-success":a(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(u).selectedTemperatures.length===0?"btn-soft btn-info":a(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(H,re)};q(Ie,H=>{a(c).length>0&&H(Te)})}var ue=d(Ae,2),xe=l(ue);{var st=H=>{var re=Su(),Le=l(re),Be=d(l(Le),2),Ee=l(Be);Ye(Ee,16,()=>a(i),ge=>ge,(ge,we)=>{var ie=yu();ie.__click=[bu,we];var U=l(ie);Yr(U,{class:"w-3 h-3 mr-1"});var Se=d(U);B(Pe=>{Ne(ie,1,`btn btn-xs ${Pe??""}`),M(Se,` ${we??""}`)},[()=>a(u).selectedStores.length===0?"btn-soft btn-accent":a(u).selectedStores.includes(we)?"btn-accent":"btn-dash btn-accent"]),h(ge,ie)});var Me=d(Ee,2);{var De=ge=>{var we=xu();we.__click=[wu];var ie=l(we);ht(ie,{class:"w-3 h-3"}),h(ge,we)};q(Me,ge=>{a(u).selectedStores.length>0&&ge(De)})}h(H,re)};q(xe,H=>{a(i).length>0&&H(st)})}var Xe=d(xe,2);{var rr=H=>{var re=$u(),Le=l(re),Be=d(l(Le),2),Ee=l(Be);Ye(Ee,16,()=>a(o),ge=>ge,(ge,we)=>{var ie=Eu();ie.__click=[Pu,we];var U=l(ie);Dl(U,{class:"w-3 h-3 mr-1"});var Se=d(U);B(Pe=>{Ne(ie,1,`btn btn-xs ${Pe??""}`),M(Se,` ${we??""}`)},[()=>a(u).selectedWho.length===0?" btn-soft btn-info":a(u).selectedWho.includes(we)?" btn-info":"btn-dash btn-info"]),h(ge,ie)});var Me=d(Ee,2);{var De=ge=>{var we=Tu();we.__click=[ku];var ie=l(we);ht(ie,{class:"w-3 h-3"}),h(ge,we)};q(Me,ge=>{a(u).selectedWho.length>0&&ge(De)})}h(H,re)};q(Xe,H=>{a(o).length>0&&H(rr)})}var at=d(W,2),He=l(at),$e=l(He),it=l($e),_t=l(it);_t.__click=[Nu];var mt=l(_t),ut=l(mt);Gs(ut,{class:"w-4 h-4"});var qt=d(ut,2);{var kt=H=>{var re=lt();B(()=>M(re,a(u).sortDirection==="asc"?"↑":"↓")),h(H,re)};q(qt,H=>{a(u).sortColumn==="productName"&&H(kt)})}var Ke=d(_t);Ke.__click=[Au];var gt=l(Ke),Rt=l(gt);Yr(Rt,{class:"w-4 h-4"});var jt=d(Rt,2);{var Tt=H=>{var re=lt();B(()=>M(re,a(u).sortDirection==="asc"?"↑":"↓")),h(H,re)};q(jt,H=>{a(u).sortColumn==="store"&&H(Tt)})}var bt=d(Ke);bt.__click=[Mu];var nr=l(bt),yt=l(nr);gn(yt,{class:"w-4 h-4"});var Ot=d(yt,2);{var $t=H=>{var re=lt();B(()=>M(re,a(u).sortDirection==="asc"?"↑":"↓")),h(H,re)};q(Ot,H=>{a(u).sortColumn==="who"&&H($t)})}var wt=d(bt);wt.__click=[Cu];var Lt=l(wt),sr=d(l(Lt));{var Fe=H=>{var re=lt();B(()=>M(re,a(u).sortDirection==="asc"?"↑":"↓")),h(H,re)};q(sr,H=>{a(u).sortColumn==="productType"&&H(Fe)})}var Nt=d(wt,2),Ut=l(Nt),Ir=l(Ut);mn(Ir,{class:"w-4 h-4"});var Dr=d(Nt),qr=l(Dr),V=l(qr);Nl(V,{class:"w-4 h-4"});var le=d($e);Ye(le,21,()=>Object.entries(a(n)),([H,re])=>H,(H,re)=>{var Le=Q(()=>Ys(a(re),2));let Be=()=>a(Le)[0],Ee=()=>a(Le)[1];var Me=Ku(),De=K(Me);{var ge=ie=>{const U=Q(()=>vn(Be()));var Se=Du(),Pe=l(Se),We=l(Pe),dt=l(We);{var Bt=et=>{var St=lt();B(()=>M(St,`🏪 ${Be()??""} (${Ee().length??""})`)),h(et,St)},Wt=et=>{var St=Y(),Rr=K(St);{var jr=Ht=>{var ar=Iu(),en=l(ar);cn(en,()=>a(U).icon,(An,Mn)=>{Mn(An,{class:"w-4 h-4"})});var tn=d(en,2),Nn=l(tn),br=d(tn,2),rn=l(br);B(()=>{M(Nn,a(U).displayName),M(rn,`(${Ee().length??""})`)}),h(Ht,ar)},Fr=Ht=>{var ar=lt();B(()=>M(ar,`📦 ${Be()??""} (${Ee().length??""})`)),h(Ht,ar)};q(Rr,Ht=>{a(u).groupBy==="productType"?Ht(jr):Ht(Fr,!1)},!0)}h(et,St)};q(dt,et=>{a(u).groupBy==="store"?et(Bt):et(Wt,!1)})}h(ie,Se)};q(De,ie=>{Be()!==""&&ie(ge)})}var we=d(De,2);Ye(we,17,()=>zc(Ee(),a(u)),ie=>ie.$id,(ie,U)=>{const Se=Q(()=>vn(a(U).productType));var Pe=Hu(),We=l(Pe);We.__click=[qu,f,U];var dt=l(We),Bt=l(dt),Wt=l(Bt),et=l(Wt),St=d(Wt,2);{var Rr=J=>{var ve=Ru(),ze=l(ve);B(()=>M(ze,`Ancien: ${a(U).previousNames[0]??""}`)),h(J,ve)};q(St,J=>{a(U).previousNames&&a(U).previousNames.length>0&&J(Rr)})}var jr=d(Bt,2),Fr=l(jr);{var Ht=J=>{var ve=ju(),ze=l(ve);dn(ze,{class:"w-4 h-4 text-success"}),h(J,ve)};q(Fr,J=>{a(U).pFrais&&J(Ht)})}var ar=d(Fr,2);{var en=J=>{var ve=Ou(),ze=l(ve);fn(ze,{class:"w-4 h-4 text-info"}),h(J,ve)};q(ar,J=>{a(U).pSurgel&&J(en)})}var tn=d(dt,2),Nn=l(tn);zr(Nn,{class:"w-4 h-4 text-amber-600"});var br=d(We);br.__click=[Lu,f,U];var rn=l(br);{var An=J=>{var ve=Bu(),ze=l(ve);B(()=>{Kn(ve,"data-tip",a(U).storeInfo.storeComment),M(ze,a(U).storeInfo.storeName||"-")}),h(J,ve)},Mn=J=>{var ve=lt();B(()=>M(ve,a(U).storeInfo?.storeName||"-")),h(J,ve)};q(rn,J=>{a(U).storeInfo?.storeComment?J(An):J(Mn,!1)})}var Ga=d(rn,2),Ua=l(Ga);zr(Ua,{class:"w-4 h-4 text-amber-600"});var Cn=d(br);Cn.__click=[Wu,f,U];var ds=l(Cn);{var Qa=J=>{var ve=Vu();Ye(ve,20,()=>a(U).who,ze=>ze,(ze,nn)=>{var sn=zu(),qn=l(sn);B(()=>M(qn,nn)),h(ze,sn)}),h(J,ve)},Ha=J=>{var ve=lt("-");h(J,ve)};q(ds,J=>{a(U).who&&a(U).who.length>0?J(Qa):J(Ha,!1)})}var Ka=d(ds,2),Ja=l(Ka);zr(Ja,{class:"w-4 h-4 text-amber-600"});var In=d(Cn),Ya=l(In),fs=l(Ya);cn(fs,()=>a(Se).icon,(J,ve)=>{ve(J,{class:"w-3 h-3"})});var Za=d(fs),vs=d(In),hs=l(vs),Xa=l(hs),Fa=d(hs,2);{var ei=J=>{var ve=Gu(),ze=l(ve);ql(ze,{class:"w-3 h-3"});var nn=d(ze,2),sn=l(nn),qn=d(nn,2),oi=l(qn);B(()=>{M(sn,`${a(U)?.nbRecipes??""} r.`),M(oi,`${a(U)?.totalAssiettes??""} c.`)}),h(J,ve)};q(Fa,J=>{(a(U).nbRecipes||a(U).totalAssiettes)&&J(ei)})}var Dn=d(vs);Dn.__click=[Uu,f,U];var ps=l(Dn),ti=d(ps),ri=l(ti);zr(ri,{class:"w-4 h-4 text-amber-600"});var ni=d(Dn),si=l(ni);{var ai=J=>{var ve=Qu(),ze=l(ve);B(()=>M(ze,a(U).displayMissingQuantity)),h(J,ve)},ii=J=>{Pl(J,{size:28,strokeWidth:3,class:"text-success m-auto"})};q(si,J=>{a(U).displayMissingQuantity!=="✅ Complet"?J(ai):J(ii,!1)})}B(()=>{M(et,a(U).productName),Ne(br,1,`${a(u).groupBy==="store"?"hidden":""} cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded font-medium relative group`),Ne(In,1,a(u).groupBy==="productType"?"hidden":""),M(Za,` ${a(Se).displayName??""}`),M(Xa,a(U).displayTotalQuantity||"-"),M(ps,`${(a(U).displayTotalPurchases||"-")??""} `)}),h(ie,Pe)}),h(H,Me)});var G=d(He,2);{var xt=H=>{var re=Ju();h(H,re)};q(G,H=>{a(r).length===0&&H(xt)})}var Qt=d(m,2);Wc(Qt,{});var At=d(Qt,2);iu(At,{}),B(()=>{M(P,` ${a(s).total??""}`),M(D,` frais:
      ${a(s).frais??""}`),M(T,` surgelés:
      ${a(s).surgel??""}`),M(z,` fusionnés:
      ${a(s).merged??""}`),Wo(j,a(u).searchQuery),Sr(Oe,a(u).groupBy==="none"),Sr(Qe,a(u).groupBy==="store"),Sr(k,a(u).groupBy==="productType"),Ne(Ke,1,`cursor-pointer hover:bg-base-100 text-center ${a(u).groupBy==="store"?"hidden":""}`),Ne(wt,1,`cursor-pointer hover:bg-base-100 text-center ${a(u).groupBy==="productType"?"hidden":""}`)}),h(e,v),X()}tr(["click","input","change"]);Vi();var Xu=x('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function Fu(e){var t=Xu();h(e,t)}var ed=x('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function td(e,t){var r=ed(),n=d(l(r),2),s=d(l(n),2),i=l(s);B(()=>M(i,t.message)),h(e,r)}var rd=x('<div class="flex items-center gap-2 text-success"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),nd=x('<div class="flex items-center gap-2 text-info"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),sd=x('<div class="text-base-content/60"> </div>'),ad=x('<div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),id=x('<div class="min-h-screen bg-base-100"><header class="sticky top-0 z-10 bg-base-200 shadow-sm"><div class="container mx-auto px-4 py-4"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-base-content">Produits</h1> <p class="text-sm text-base-content/70"> </p></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function od(e,t){Z(t,!0);let r,n=be(null);La(async()=>{r=rl();try{await L.initialize(r)}catch(I){$(n,I instanceof Error?I.message:"Erreur lors de l'initialisation",!0),console.error("[App] Erreur initialisation:",I)}}),Ko(()=>{L.destroy()});const s=Q(()=>a(n)||L.error),i=Q(()=>L.loading&&L.products.length===0);var o=id(),c=l(o),u=l(c),f=l(u),v=l(f),m=d(l(v),2),p=l(m),_=d(v,2),g=l(_);{var P=I=>{var R=rd();h(I,R)};q(g,I=>{L.realtimeConnected&&I(P)})}var w=d(g,2);{var E=I=>{var R=nd();h(I,R)};q(w,I=>{L.syncing&&I(E)})}var D=d(w,2);{var C=I=>{var R=sd(),se=l(R);B(ae=>M(se,`Maj: ${ae??""}`),[()=>new Date(L.lastSync).toLocaleTimeString()]),h(I,R)};q(D,I=>{L.lastSync&&I(C)})}var N=d(c,2),T=l(N);{var A=I=>{td(I,{get message(){return a(s)}})};q(T,I=>{a(s)&&I(A)})}var O=d(T,2);{var z=I=>{Fu(I)};q(O,I=>{a(i)&&I(z)})}var W=d(O,2);{var te=I=>{Zu(I,{})},_e=I=>{var R=Y(),se=K(R);{var ae=me=>{var Ce=ad();h(me,Ce)};q(se,me=>{L.loading||me(ae)},!0)}h(I,R)};q(W,I=>{L.products.length>0?I(te):I(_e,!1)})}B(()=>M(p,`Liste: ${r??""}`)),h(e,o),X()}$o(od,{target:document.getElementById("app_products")});
