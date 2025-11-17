(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const Ja=!1;var dn=Array.isArray,$o=Array.prototype.indexOf,Gn=Array.from,Dn=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Po=Object.getOwnPropertyDescriptors,Eo=Object.prototype,Ao=Array.prototype,Za=Object.getPrototypeOf,va=Object.isExtensible;function Lr(t){return typeof t=="function"}const ne=()=>{};function ko(t){for(var e=0;e<t.length;e++)t[e]()}function Xa(){var t,e,r=new Promise((n,a)=>{t=n,e=a});return{promise:r,resolve:t,reject:e}}function Fa(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const n of t)if(r.push(n),r.length===e)break;return r}const ft=2,Vn=4,Qn=8,mr=16,Gt=32,gr=64,Kn=128,wt=256,ln=512,it=1024,pt=2048,ar=4096,Pt=8192,_r=16384,Yn=32768,br=65536,fa=1<<17,To=1<<18,Dr=1<<19,Co=1<<20,In=1<<21,vn=1<<22,dr=1<<23,vr=Symbol("$state"),es=Symbol("legacy props"),No=Symbol(""),Wr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ts(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Mo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Do(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Io(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Oo(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Ro(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function qo(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function jo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Lo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Bo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function zo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const fn=1,hn=2,rs=4,Uo=8,Ho=16,Wo=1,Go=2,Vo=4,Qo=8,Ko=16,Yo=1,Jo=2,et=Symbol(),Zo="http://www.w3.org/1999/xhtml",Xo="http://www.w3.org/2000/svg",Fo="@attach";function ei(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ti(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let ri=!1;function ns(t){return t===this.v}function as(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function ni(t,e){return t!==e}function ss(t){return!as(t,this.v)}let Ir=!1,ai=!1;function si(){Ir=!0}let Je=null;function Er(t){Je=t}function H(t,e=!1,r){Je={p:Je,c:null,e:null,s:t,x:null,l:Ir&&!e?{s:null,u:null,$:[]}:null}}function W(t){var e=Je,r=e.e;if(r!==null){e.e=null;for(var n of r)bs(n)}return Je=e.p,{}}function Or(){return!Ir||Je!==null&&Je.l===null}let lr=[];function os(){var t=lr;lr=[],ko(t)}function hr(t){if(lr.length===0&&!Gr){var e=lr;queueMicrotask(()=>{e===lr&&os()})}lr.push(t)}function oi(){for(;lr.length>0;)os()}const ii=new WeakMap;function is(t){var e=Ne;if(e===null)return De.f|=dr,t;if((e.f&Yn)===0){if((e.f&Kn)===0)throw!e.parent&&t instanceof Error&&ls(t),t;e.b.error(t)}else Ar(t,e)}function Ar(t,e){for(;e!==null;){if((e.f&Kn)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t instanceof Error&&ls(t),t}function ls(t){const e=ii.get(t);e&&(Dn(t,"message",{value:e.message}),Dn(t,"stack",{value:e.stack}))}const nn=new Set;let Le=null,on=null,On=new Set,Dt=[],pn=null,Rn=!1,Gr=!1;class yt{current=new Map;#e=new Map;#r=new Set;#s=0;#u=null;#d=[];#i=[];#c=[];#l=[];#a=[];#v=[];skipped_effects=new Set;process(e){Dt=[],on=null;var r=yt.apply(this);for(const o of e)this.#o(o);if(this.#s===0){this.#h();var n=this.#i,a=this.#c;this.#i=[],this.#c=[],this.#l=[],on=this,Le=null,ha(n),ha(a),on=null,this.#u?.resolve()}else this.#f(this.#i),this.#f(this.#c),this.#f(this.#l);r();for(const o of this.#d)Jr(o);this.#d=[]}#o(e){e.f^=it;for(var r=e.first;r!==null;){var n=r.f,a=(n&(Gt|gr))!==0,o=a&&(n&it)!==0,i=o||(n&Pt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=it:(n&Vn)!==0?this.#c.push(r):(n&it)===0&&((n&vn)!==0&&r.b?.is_pending()?this.#d.push(r):yn(r)&&((r.f&mr)!==0&&this.#l.push(r),Jr(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#f(e){for(const r of e)((r.f&pt)!==0?this.#a:this.#v).push(r),ut(r,it);e.length=0}capture(e,r){this.#e.has(e)||this.#e.set(e,r),this.current.set(e,e.v)}activate(){Le=this}deactivate(){Le=null}flush(){if(Dt.length>0){if(this.activate(),cs(),Le!==null&&Le!==this)return}else this.#s===0&&this.#h();this.deactivate();for(const e of On)if(On.delete(e),e(),Le!==null)break}#h(){for(const e of this.#r)e();if(this.#r.clear(),nn.size>1){this.#e.clear();let e=!0;for(const r of nn){if(r===this){e=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(e)r.current.set(n,a);else continue;us(n)}if(Dt.length>0){Le=r;const n=yt.apply(r);for(const a of Dt)r.#o(a);Dt=[],n()}}Le=null}nn.delete(this)}increment(){this.#s+=1}decrement(){this.#s-=1;for(const e of this.#a)ut(e,pt),pr(e);for(const e of this.#v)ut(e,ar),pr(e);this.flush()}add_callback(e){this.#r.add(e)}settled(){return(this.#u??=Xa()).promise}static ensure(){if(Le===null){const e=Le=new yt;nn.add(Le),Gr||yt.enqueue(()=>{Le===e&&e.flush()})}return Le}static enqueue(e){hr(e)}static apply(e){return ne}}function li(t){var e=Gr;Gr=!0;try{for(var r;;){if(oi(),Dt.length===0&&(Le?.flush(),Dt.length===0))return pn=null,r;cs()}}finally{Gr=e}}function cs(){var t=$r;Rn=!0;try{var e=0;for(_a(!0);Dt.length>0;){var r=yt.ensure();if(e++>1e3){var n,a;ci()}r.process(Dt),Ft.clear()}}finally{Rn=!1,_a(t),pn=null}}function ci(){try{Ro()}catch(t){Ar(t,pn)}}let ir=null;function ha(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var n=t[r++];if((n.f&(_r|Pt))===0&&yn(n)&&(ir=[],Jr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Ss(n):n.fn=null),ir?.length>0)){Ft.clear();for(const a of ir)Jr(a);ir=[]}}ir=null}}function us(t){if(t.reactions!==null)for(const e of t.reactions){const r=e.f;(r&ft)!==0?us(e):(r&(vn|mr))!==0&&(ut(e,pt),pr(e))}}function pr(t){for(var e=pn=t;e.parent!==null;){e=e.parent;var r=e.f;if(Rn&&e===Ne&&(r&mr)!==0)return;if((r&(gr|Gt))!==0){if((r&it)===0)return;e.f^=it}}Dt.push(e)}function Jn(t){let e=0,r=tr(0),n;return()=>{Pi()&&(s(r),ra(()=>(e===0&&(n=Rr(()=>t(()=>It(r)))),e+=1,()=>{hr(()=>{e-=1,e===0&&(n?.(),n=void 0,It(r))})})))}}var ui=br|Dr|Kn;function di(t,e,r){new vi(t,e,r)}class vi{parent;#e=!1;#r;#s=null;#u;#d;#i;#c=null;#l=null;#a=null;#v=null;#o=0;#f=0;#h=!1;#p=null;#n=()=>{this.#p&&kr(this.#p,this.#o)};#_=Jn(()=>(this.#p=tr(this.#o),()=>{this.#p=null}));constructor(e,r,n){this.#r=e,this.#u=r,this.#d=n,this.parent=Ne.b,this.#e=!!this.#u.pending,this.#i=Kt(()=>{Ne.b=this;{try{this.#c=nt(()=>n(this.#r))}catch(a){this.error(a)}this.#f>0?this.#y():this.#e=!1}},ui)}#w(){try{this.#c=nt(()=>this.#d(this.#r))}catch(e){this.error(e)}this.#e=!1}#m(){const e=this.#u.pending;e&&(this.#l=nt(()=>e(this.#r)),yt.enqueue(()=>{this.#c=this.#b(()=>(yt.ensure(),nt(()=>this.#d(this.#r)))),this.#f>0?this.#y():(Ut(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#b(e){var r=Ne,n=De,a=Je;Ot(this.#i),vt(this.#i),Er(this.#i.ctx);try{return e()}catch(o){return is(o),null}finally{Ot(r),vt(n),Er(a)}}#y(){const e=this.#u.pending;this.#c!==null&&(this.#v=document.createDocumentFragment(),fi(this.#c,this.#v)),this.#l===null&&(this.#l=nt(()=>e(this.#r)))}#g(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#g(e);return}this.#f+=e,this.#f===0&&(this.#e=!1,this.#l&&Ut(this.#l,()=>{this.#l=null}),this.#v&&(this.#r.before(this.#v),this.#v=null),hr(()=>{yt.ensure().flush()}))}update_pending_count(e){this.#g(e),this.#o+=e,On.add(this.#n)}get_effect_pending(){return this.#_(),s(this.#p)}error(e){var r=this.#u.onerror;let n=this.#u.failed;if(this.#h||!r&&!n)throw e;this.#c&&(at(this.#c),this.#c=null),this.#l&&(at(this.#l),this.#l=null),this.#a&&(at(this.#a),this.#a=null);var a=!1,o=!1;const i=()=>{if(a){ti();return}a=!0,o&&zo(),yt.ensure(),this.#o=0,this.#a!==null&&Ut(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#c=this.#b(()=>(this.#h=!1,nt(()=>this.#d(this.#r)))),this.#f>0?this.#y():this.#e=!1};var l=De;try{vt(null),o=!0,r?.(e,i),o=!1}catch(c){Ar(c,this.#i&&this.#i.parent)}finally{vt(l)}n&&hr(()=>{this.#a=this.#b(()=>{this.#h=!0;try{return nt(()=>{n(this.#r,()=>e,()=>i)})}catch(c){return Ar(c,this.#i.parent),null}finally{this.#h=!1}})})}}function fi(t,e){for(var r=t.nodes_start,n=t.nodes_end;r!==null;){var a=r===n?null:en(r);e.append(r),r=a}}function ds(t,e,r){const n=Or()?mn:Zn;if(e.length===0){r(t.map(n));return}var a=Le,o=Ne,i=hi();Promise.all(e.map(l=>pi(l))).then(l=>{i();try{r([...t.map(n),...l])}catch(c){(o.f&_r)===0&&Ar(c,o)}a?.deactivate(),vs()}).catch(l=>{Ar(l,o)})}function hi(){var t=Ne,e=De,r=Je,n=Le;return function(){Ot(t),vt(e),Er(r),n?.activate()}}function vs(){Ot(null),vt(null),Er(null)}function mn(t){var e=ft|pt,r=De!==null&&(De.f&ft)!==0?De:null;return Ne===null||r!==null&&(r.f&wt)!==0?e|=wt:Ne.f|=Dr,{ctx:Je,deps:null,effects:null,equals:ns,f:e,fn:t,reactions:null,rv:0,v:et,wv:0,parent:r??Ne,ac:null}}function pi(t,e){let r=Ne;r===null&&Mo();var n=r.b,a=void 0,o=tr(et),i=!De,l=new Map;return Ai(()=>{var c=Xa();a=c.promise;try{Promise.resolve(t()).then(c.resolve,c.reject)}catch(m){c.reject(m)}var f=Le,v=n.is_pending();i&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(Wr),l.set(f,c)));const p=(m,g=void 0)=>{v||f.activate(),g?g!==Wr&&(o.f|=dr,kr(o,g)):((o.f&dr)!==0&&(o.f^=dr),kr(o,m)),i&&(n.update_pending_count(-1),v||f.decrement()),vs()};c.promise.then(p,m=>p(null,m||"unknown"))}),ea(()=>{for(const c of l.values())c.reject(Wr)}),new Promise(c=>{function f(v){function p(){v===a?c(o):f(a)}v.then(p,p)}f(a)})}function V(t){const e=mn(t);return Ps(e),e}function Zn(t){const e=mn(t);return e.equals=ss,e}function fs(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)at(e[r])}}function mi(t){for(var e=t.parent;e!==null;){if((e.f&ft)===0)return e;e=e.parent}return null}function Xn(t){var e,r=Ne;Ot(mi(t));try{fs(t),e=Ts(t)}finally{Ot(r)}return e}function hs(t){var e=Xn(t);if(t.equals(e)||(t.v=e,t.wv=As()),!yr){var r=(Zt||(t.f&wt)!==0)&&t.deps!==null?ar:it;ut(t,r)}}const Ft=new Map;function tr(t,e){var r={f:0,v:t,reactions:null,equals:ns,rv:0,wv:0};return r}function R(t,e){const r=tr(t);return Ps(r),r}function gi(t,e=!1,r=!0){const n=tr(t);return e||(n.equals=ss),Ir&&r&&Je!==null&&Je.l!==null&&(Je.l.s??=[]).push(n),n}function b(t,e,r=!1){De!==null&&(!$t||(De.f&fa)!==0)&&Or()&&(De.f&(ft|mr|vn|fa))!==0&&!Ht?.includes(t)&&Bo();let n=r?Re(e):e;return kr(t,n)}function kr(t,e){if(!t.equals(e)){var r=t.v;yr?Ft.set(t,e):Ft.set(t,r),t.v=e;var n=yt.ensure();n.capture(t,r),(t.f&ft)!==0&&((t.f&pt)!==0&&Xn(t),ut(t,(t.f&wt)===0?it:ar)),t.wv=As(),ps(t,pt),Or()&&Ne!==null&&(Ne.f&it)!==0&&(Ne.f&(Gt|gr))===0&&(_t===null?Ci([t]):_t.push(t))}return e}function It(t){b(t,t.v+1)}function ps(t,e){var r=t.reactions;if(r!==null)for(var n=Or(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===Ne)){var c=(l&pt)===0;c&&ut(i,e),(l&ft)!==0?ps(i,ar):c&&((l&mr)!==0&&ir!==null&&ir.push(i),pr(i))}}}function Re(t){if(typeof t!="object"||t===null||vr in t)return t;const e=Za(t);if(e!==Eo&&e!==Ao)return t;var r=new Map,n=dn(t),a=R(0),o=Wt,i=l=>{if(Wt===o)return l();var c=De,f=Wt;vt(null),ya(o);var v=l();return vt(c),ya(f),v};return n&&r.set("length",R(t.length)),new Proxy(t,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&jo();var v=r.get(c);return v===void 0?v=i(()=>{var p=R(f.value);return r.set(c,p),p}):b(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=i(()=>R(et));r.set(c,v),It(a)}}else b(f,et),It(a);return!0},get(l,c,f){if(c===vr)return t;var v=r.get(c),p=c in l;if(v===void 0&&(!p||Xt(l,c)?.writable)&&(v=i(()=>{var g=Re(p?l[c]:et),_=R(g);return _}),r.set(c,v)),v!==void 0){var m=s(v);return m===et?void 0:m}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=s(v))}else if(f===void 0){var p=r.get(c),m=p?.v;if(p!==void 0&&m!==et)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(l,c){if(c===vr)return!0;var f=r.get(c),v=f!==void 0&&f.v!==et||Reflect.has(l,c);if(f!==void 0||Ne!==null&&(!v||Xt(l,c)?.writable)){f===void 0&&(f=i(()=>{var m=v?Re(l[c]):et,g=R(m);return g}),r.set(c,f));var p=s(f);if(p===et)return!1}return v},set(l,c,f,v){var p=r.get(c),m=c in l;if(n&&c==="length")for(var g=f;g<p.v;g+=1){var _=r.get(g+"");_!==void 0?b(_,et):g in l&&(_=i(()=>R(et)),r.set(g+"",_))}if(p===void 0)(!m||Xt(l,c)?.writable)&&(p=i(()=>R(void 0)),b(p,Re(f)),r.set(c,p));else{m=p.v!==et;var $=i(()=>Re(f));b(p,$)}var w=Reflect.getOwnPropertyDescriptor(l,c);if(w?.set&&w.set.call(v,f),!m){if(n&&typeof c=="string"){var S=r.get("length"),A=Number(c);Number.isInteger(A)&&A>=S.v&&b(S,A+1)}It(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(p=>{var m=r.get(p);return m===void 0||m.v!==et});for(var[f,v]of r)v.v!==et&&!(f in l)&&c.push(f);return c},setPrototypeOf(){Lo()}})}function pa(t){try{if(t!==null&&typeof t=="object"&&vr in t)return t[vr]}catch{}return t}function _i(t,e){return Object.is(pa(t),pa(e))}var ma,ms,gs,_s;function bi(){if(ma===void 0){ma=window,ms=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;gs=Xt(e,"firstChild").get,_s=Xt(e,"nextSibling").get,va(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),va(r)&&(r.__t=void 0)}}function Vt(t=""){return document.createTextNode(t)}function Tr(t){return gs.call(t)}function en(t){return _s.call(t)}function u(t,e){return Tr(t)}function I(t,e=!1){{var r=Tr(t);return r instanceof Comment&&r.data===""?en(r):r}}function d(t,e=1,r=!1){let n=t;for(;e--;)n=en(n);return n}function yi(t){t.textContent=""}function gn(){return!1}function wi(t,e){if(e){const r=document.body;t.autofocus=!0,hr(()=>{document.activeElement===r&&t.focus()})}}let ga=!1;function Si(){ga||(ga=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function _n(t){var e=De,r=Ne;vt(null),Ot(null);try{return t()}finally{vt(e),Ot(r)}}function Fn(t,e,r,n=r){t.addEventListener(e,()=>_n(r));const a=t.__on_r;a?t.__on_r=()=>{a(),n(!0)}:t.__on_r=()=>n(!0),Si()}function xi(t){Ne===null&&De===null&&Oo(),De!==null&&(De.f&wt)!==0&&Ne===null&&Io(),yr&&Do()}function $i(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Qt(t,e,r,n=!0){var a=Ne;a!==null&&(a.f&Pt)!==0&&(t|=Pt);var o={ctx:Je,deps:null,nodes_start:null,nodes_end:null,f:t|pt,first:null,fn:e,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Jr(o),o.f|=Yn}catch(c){throw at(o),c}else e!==null&&pr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Dr)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&$i(i,a),De!==null&&(De.f&ft)!==0&&(t&gr)===0)){var l=De;(l.effects??=[]).push(i)}}return o}function Pi(){return De!==null&&!$t}function ea(t){const e=Qt(Qn,null,!1);return ut(e,it),e.teardown=t,e}function sr(t){xi();var e=Ne.f,r=!De&&(e&Gt)!==0&&(e&Yn)===0;if(r){var n=Je;(n.e??=[]).push(t)}else return bs(t)}function bs(t){return Qt(Vn|Co,t,!1)}function Ei(t){yt.ensure();const e=Qt(gr|Dr,t,!0);return(r={})=>new Promise(n=>{r.outro?Ut(e,()=>{at(e),n(void 0)}):(at(e),n(void 0))})}function ta(t){return Qt(Vn,t,!1)}function Ai(t){return Qt(vn|Dr,t,!0)}function ra(t,e=0){return Qt(Qn|e,t,!0)}function L(t,e=[],r=[]){ds(e,r,n=>{Qt(Qn,()=>t(...n.map(s)),!0)})}function Kt(t,e=0){var r=Qt(mr|e,t,!0);return r}function nt(t,e=!0){return Qt(Gt|Dr,t,!0,e)}function ys(t){var e=t.teardown;if(e!==null){const r=yr,n=De;ba(!0),vt(null);try{e.call(null)}finally{ba(r),vt(n)}}}function ws(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const a=r.ac;a!==null&&_n(()=>{a.abort(Wr)});var n=r.next;(r.f&gr)!==0?r.parent=null:at(r,e),r=n}}function ki(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&Gt)===0&&at(e),e=r}}function at(t,e=!0){var r=!1;(e||(t.f&To)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(Ti(t.nodes_start,t.nodes_end),r=!0),ws(t,e&&!r),cn(t,0),ut(t,_r);var n=t.transitions;if(n!==null)for(const o of n)o.stop();ys(t);var a=t.parent;a!==null&&a.first!==null&&Ss(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function Ti(t,e){for(;t!==null;){var r=t===e?null:en(t);t.remove(),t=r}}function Ss(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function Ut(t,e){var r=[];na(t,r,!0),xs(r,()=>{at(t),e&&e()})}function xs(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var a of t)a.out(n)}else e()}function na(t,e,r){if((t.f&Pt)===0){if(t.f^=Pt,t.transitions!==null)for(const i of t.transitions)(i.is_global||r)&&e.push(i);for(var n=t.first;n!==null;){var a=n.next,o=(n.f&br)!==0||(n.f&Gt)!==0;na(n,e,o?r:!1),n=a}}}function bn(t){$s(t,!0)}function $s(t,e){if((t.f&Pt)!==0){t.f^=Pt,(t.f&it)===0&&(ut(t,pt),pr(t));for(var r=t.first;r!==null;){var n=r.next,a=(r.f&br)!==0||(r.f&Gt)!==0;$s(r,a?e:!1),r=n}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||e)&&o.in()}}let $r=!1;function _a(t){$r=t}let yr=!1;function ba(t){yr=t}let De=null,$t=!1;function vt(t){De=t}let Ne=null;function Ot(t){Ne=t}let Ht=null;function Ps(t){De!==null&&(Ht===null?Ht=[t]:Ht.push(t))}let ct=null,ht=0,_t=null;function Ci(t){_t=t}let Es=1,Yr=0,Wt=Yr;function ya(t){Wt=t}let Zt=!1;function As(){return++Es}function yn(t){var e=t.f;if((e&pt)!==0)return!0;if((e&ar)!==0){var r=t.deps,n=(e&wt)!==0;if(r!==null){var a,o,i=(e&ln)!==0,l=n&&Ne!==null&&!Zt,c=r.length;if((i||l)&&(Ne===null||(Ne.f&_r)===0)){var f=t,v=f.parent;for(a=0;a<c;a++)o=r[a],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=ln),l&&v!==null&&(v.f&wt)===0&&(f.f^=wt)}for(a=0;a<c;a++)if(o=r[a],yn(o)&&hs(o),o.wv>t.wv)return!0}(!n||Ne!==null&&!Zt)&&ut(t,it)}return!1}function ks(t,e,r=!0){var n=t.reactions;if(n!==null&&!Ht?.includes(t))for(var a=0;a<n.length;a++){var o=n[a];(o.f&ft)!==0?ks(o,e,!1):e===o&&(r?ut(o,pt):(o.f&it)!==0&&ut(o,ar),pr(o))}}function Ts(t){var e=ct,r=ht,n=_t,a=De,o=Zt,i=Ht,l=Je,c=$t,f=Wt,v=t.f;ct=null,ht=0,_t=null,Zt=(v&wt)!==0&&($t||!$r||De===null),De=(v&(Gt|gr))===0?t:null,Ht=null,Er(t.ctx),$t=!1,Wt=++Yr,t.ac!==null&&(_n(()=>{t.ac.abort(Wr)}),t.ac=null);try{t.f|=In;var p=t.fn,m=p(),g=t.deps;if(ct!==null){var _;if(cn(t,ht),g!==null&&ht>0)for(g.length=ht+ct.length,_=0;_<ct.length;_++)g[ht+_]=ct[_];else t.deps=g=ct;if(!Zt||(v&ft)!==0&&t.reactions!==null)for(_=ht;_<g.length;_++)(g[_].reactions??=[]).push(t)}else g!==null&&ht<g.length&&(cn(t,ht),g.length=ht);if(Or()&&_t!==null&&!$t&&g!==null&&(t.f&(ft|ar|pt))===0)for(_=0;_<_t.length;_++)ks(_t[_],t);return a!==null&&a!==t&&(Yr++,_t!==null&&(n===null?n=_t:n.push(..._t))),(t.f&dr)!==0&&(t.f^=dr),m}catch($){return is($)}finally{t.f^=In,ct=e,ht=r,_t=n,De=a,Zt=o,Ht=i,Er(l),$t=c,Wt=f}}function Ni(t,e){let r=e.reactions;if(r!==null){var n=$o.call(r,t);if(n!==-1){var a=r.length-1;a===0?r=e.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(e.f&ft)!==0&&(ct===null||!ct.includes(e))&&(ut(e,ar),(e.f&(wt|ln))===0&&(e.f^=ln),fs(e),cn(e,0))}function cn(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)Ni(t,r[n])}function Jr(t){var e=t.f;if((e&_r)===0){ut(t,it);var r=Ne,n=$r;Ne=t,$r=!0;try{(e&mr)!==0?ki(t):ws(t),ys(t);var a=Ts(t);t.teardown=typeof a=="function"?a:null,t.wv=Es;var o;Ja&&ai&&(t.f&pt)!==0&&t.deps}finally{$r=n,Ne=r}}}async function Mi(){await Promise.resolve(),li()}function s(t){var e=t.f,r=(e&ft)!==0;if(De!==null&&!$t){var n=Ne!==null&&(Ne.f&_r)!==0;if(!n&&!Ht?.includes(t)){var a=De.deps;if((De.f&In)!==0)t.rv<Yr&&(t.rv=Yr,ct===null&&a!==null&&a[ht]===t?ht++:ct===null?ct=[t]:(!Zt||!ct.includes(t))&&ct.push(t));else{(De.deps??=[]).push(t);var o=t.reactions;o===null?t.reactions=[De]:o.includes(De)||o.push(De)}}}else if(r&&t.deps===null&&t.effects===null){var i=t,l=i.parent;l!==null&&(l.f&wt)===0&&(i.f^=wt)}if(yr){if(Ft.has(t))return Ft.get(t);if(r){i=t;var c=i.v;return((i.f&it)===0&&i.reactions!==null||Cs(i))&&(c=Xn(i)),Ft.set(i,c),c}}else r&&(i=t,yn(i)&&hs(i));if((t.f&dr)!==0)throw t.v;return t.v}function Cs(t){if(t.v===et)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(Ft.has(e)||(e.f&ft)!==0&&Cs(e))return!0;return!1}function Rr(t){var e=$t;try{return $t=!0,t()}finally{$t=e}}const Di=-7169;function ut(t,e){t.f=t.f&Di|e}function Ii(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Oi=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ri(t){return Oi.includes(t)}const qi={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ji(t){return t=t.toLowerCase(),qi[t]??t}const Li=["touchstart","touchmove"];function Bi(t){return Li.includes(t)}const Ns=new Set,qn=new Set;function aa(t,e,r,n={}){function a(o){if(n.capture||Ur.call(e,o),!o.cancelBubble)return _n(()=>r?.call(this,o))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?hr(()=>{e.addEventListener(t,a,n)}):e.addEventListener(t,a,n),a}function jn(t,e,r,n={}){var a=aa(e,t,r,n);return()=>{t.removeEventListener(e,a,n)}}function $n(t,e,r,n,a){var o={capture:n,passive:a},i=aa(t,e,r,o);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ea(()=>{e.removeEventListener(t,i,o)})}function Fe(t){for(var e=0;e<t.length;e++)Ns.add(t[e]);for(var r of qn)r(t)}let wa=null;function Ur(t){var e=this,r=e.ownerDocument,n=t.type,a=t.composedPath?.()||[],o=a[0]||t.target;wa=t;var i=0,l=wa===t&&t.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(e===document||e===window)){t.__root=e;return}var f=a.indexOf(e);if(f===-1)return;c<=f&&(i=c)}if(o=a[i]||t.target,o!==e){Dn(t,"currentTarget",{configurable:!0,get(){return o||r}});var v=De,p=Ne;vt(null),Ot(null);try{for(var m,g=[];o!==null;){var _=o.assignedSlot||o.parentNode||o.host||null;try{var $=o["__"+n];if($!=null&&(!o.disabled||t.target===o))if(dn($)){var[w,...S]=$;w.apply(o,[t,...S])}else $.call(o,t)}catch(A){m?g.push(A):m=A}if(t.cancelBubble||_===e||_===null)break;o=_}if(m){for(let A of g)queueMicrotask(()=>{throw A});throw m}}finally{t.__root=e,delete t.currentTarget,vt(v),Ot(p)}}}function Ms(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function Cr(t,e){var r=Ne;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function x(t,e){var r=(e&Yo)!==0,n=(e&Jo)!==0,a,o=!t.startsWith("<!>");return()=>{a===void 0&&(a=Ms(o?t:"<!>"+t),r||(a=Tr(a)));var i=n||ms?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Tr(i),c=i.lastChild;Cr(l,c)}else Cr(i,i);return i}}function zi(t,e,r="svg"){var n=!t.startsWith("<!>"),a=`<${r}>${n?t:"<!>"+t}</${r}>`,o;return()=>{if(!o){var i=Ms(a),l=Tr(i);o=Tr(l)}var c=o.cloneNode(!0);return Cr(c,c),c}}function Ui(t,e){return zi(t,e,"svg")}function Et(t=""){{var e=Vt(t+"");return Cr(e,e),e}}function U(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Vt();return t.append(e,r),Cr(e,r),t}function h(t,e){t!==null&&t.before(e)}function j(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??=t.nodeValue)&&(t.__t=r,t.nodeValue=r+"")}function Hi(t,e){return Wi(t,e)}const Sr=new Map;function Wi(t,{target:e,anchor:r,props:n={},events:a,context:o,intro:i=!0}){bi();var l=new Set,c=p=>{for(var m=0;m<p.length;m++){var g=p[m];if(!l.has(g)){l.add(g);var _=Bi(g);e.addEventListener(g,Ur,{passive:_});var $=Sr.get(g);$===void 0?(document.addEventListener(g,Ur,{passive:_}),Sr.set(g,1)):Sr.set(g,$+1)}}};c(Gn(Ns)),qn.add(c);var f=void 0,v=Ei(()=>{var p=r??e.appendChild(Vt());return di(p,{pending:()=>{}},m=>{if(o){H({});var g=Je;g.c=o}a&&(n.$$events=a),f=t(m,n)||{},o&&W()}),()=>{for(var m of l){e.removeEventListener(m,Ur);var g=Sr.get(m);--g===0?(document.removeEventListener(m,Ur),Sr.delete(m)):Sr.set(m,g)}qn.delete(c),p!==r&&p.parentNode?.removeChild(p)}});return Gi.set(f,v),f}let Gi=new WeakMap;function T(t,e,r=!1){var n=t,a=null,o=null,i=et,l=r?br:0,c=!1;const f=(g,_=!0)=>{c=!0,m(_,g)};var v=null;function p(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var g=i?a:o,_=i?o:a;g&&bn(g),_&&Ut(_,()=>{i?o=null:a=null})}const m=(g,_)=>{if(i!==(i=g)){var $=gn(),w=n;if($&&(v=document.createDocumentFragment(),v.append(w=Vt())),i?a??=_&&nt(()=>_(w)):o??=_&&nt(()=>_(w)),$){var S=Le,A=i?a:o,k=i?o:a;A&&S.skipped_effects.delete(A),k&&S.skipped_effects.add(k),S.add_callback(p)}else p()}};Kt(()=>{c=!1,e(f),c||m(null,null)},l)}function Vi(t,e,r){var n=t,a=et,o,i,l=null,c=Or()?ni:as;function f(){o&&Ut(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}Kt(()=>{if(c(a,a=e())){var v=n,p=gn();p&&(l=document.createDocumentFragment(),l.append(v=Vt())),i=nt(()=>r(v)),p?Le.add_callback(f):f()}})}function Zr(t,e){return e}function Qi(t,e,r){for(var n=t.items,a=[],o=e.length,i=0;i<o;i++)na(e[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;yi(c),c.append(r),n.clear(),Mt(t,e[0].prev,e[o-1].next)}xs(a,()=>{for(var f=0;f<o;f++){var v=e[f];l||(n.delete(v.k),Mt(t,v.prev,v.next)),at(v.e,!l)}})}function lt(t,e,r,n,a,o=null){var i=t,l={flags:e,items:new Map,first:null},c=(e&rs)!==0;if(c){var f=t;i=f.appendChild(Vt())}var v=null,p=!1,m=new Map,g=Zn(()=>{var S=r();return dn(S)?S:S==null?[]:Gn(S)}),_,$;function w(){Ki($,_,l,m,i,a,e,n,r),o!==null&&(_.length===0?v?bn(v):v=nt(()=>o(i)):v!==null&&Ut(v,()=>{v=null}))}Kt(()=>{$??=Ne,_=s(g);var S=_.length;if(!(p&&S===0)){p=S===0;var A,k,E,y;if(gn()){var P=new Set,C=Le;for(k=0;k<S;k+=1){E=_[k],y=n(E,k);var M=l.items.get(y)??m.get(y);M?(e&(fn|hn))!==0&&Ds(M,E,k,e):(A=Is(null,l,null,null,E,y,k,a,e,r,!0),m.set(y,A)),P.add(y)}for(const[K,F]of l.items)P.has(K)||C.skipped_effects.add(F.e);C.add_callback(w)}else w();s(g)}})}function Ki(t,e,r,n,a,o,i,l,c){var f=(i&Uo)!==0,v=(i&(fn|hn))!==0,p=e.length,m=r.items,g=r.first,_=g,$,w=null,S,A=[],k=[],E,y,P,C;if(f)for(C=0;C<p;C+=1)E=e[C],y=l(E,C),P=m.get(y),P!==void 0&&(P.a?.measure(),(S??=new Set).add(P));for(C=0;C<p;C+=1){if(E=e[C],y=l(E,C),P=m.get(y),P===void 0){var M=n.get(y);if(M!==void 0){n.delete(y),m.set(y,M);var K=w?w.next:_;Mt(r,w,M),Mt(r,M,K),Pn(M,K,a),w=M}else{var F=_?_.e.nodes_start:a;w=Is(F,r,w,w===null?r.first:w.next,E,y,C,o,i,c)}m.set(y,w),A=[],k=[],_=w.next;continue}if(v&&Ds(P,E,C,i),(P.e.f&Pt)!==0&&(bn(P.e),f&&(P.a?.unfix(),(S??=new Set).delete(P))),P!==_){if($!==void 0&&$.has(P)){if(A.length<k.length){var ee=k[0],se;w=ee.prev;var be=A[0],O=A[A.length-1];for(se=0;se<A.length;se+=1)Pn(A[se],ee,a);for(se=0;se<k.length;se+=1)$.delete(k[se]);Mt(r,be.prev,O.next),Mt(r,w,be),Mt(r,O,ee),_=ee,w=O,C-=1,A=[],k=[]}else $.delete(P),Pn(P,_,a),Mt(r,P.prev,P.next),Mt(r,P,w===null?r.first:w.next),Mt(r,w,P),w=P;continue}for(A=[],k=[];_!==null&&_.k!==y;)(_.e.f&Pt)===0&&($??=new Set).add(_),k.push(_),_=_.next;if(_===null)continue;P=_}A.push(P),w=P,_=P.next}if(_!==null||$!==void 0){for(var D=$===void 0?[]:Gn($);_!==null;)(_.e.f&Pt)===0&&D.push(_),_=_.next;var B=D.length;if(B>0){var le=(i&rs)!==0&&p===0?a:null;if(f){for(C=0;C<B;C+=1)D[C].a?.measure();for(C=0;C<B;C+=1)D[C].a?.fix()}Qi(r,D,le)}}f&&hr(()=>{if(S!==void 0)for(P of S)P.a?.apply()}),t.first=r.first&&r.first.e,t.last=w&&w.e;for(var G of n.values())at(G.e);n.clear()}function Ds(t,e,r,n){(n&fn)!==0&&kr(t.v,e),(n&hn)!==0?kr(t.i,r):t.i=r}function Is(t,e,r,n,a,o,i,l,c,f,v){var p=(c&fn)!==0,m=(c&Ho)===0,g=p?m?gi(a,!1,!1):tr(a):a,_=(c&hn)===0?i:tr(i),$={i:_,v:g,k:o,a:null,e:null,prev:r,next:n};try{if(t===null){var w=document.createDocumentFragment();w.append(t=Vt())}return $.e=nt(()=>l(t,g,_,f),ri),$.e.prev=r&&r.e,$.e.next=n&&n.e,r===null?v||(e.first=$):(r.next=$,r.e.next=$.e),n!==null&&(n.prev=$,n.e.prev=$.e),$}finally{}}function Pn(t,e,r){for(var n=t.next?t.next.e.nodes_start:r,a=e?e.e.nodes_start:r,o=t.e.nodes_start;o!==null&&o!==n;){var i=en(o);a.before(o),o=i}}function Mt(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function ie(t,e,...r){var n=t,a=ne,o;Kt(()=>{a!==(a=e())&&(o&&(at(o),o=null),o=nt(()=>a(n,...r)))},br)}function fr(t,e,r){var n=t,a,o,i=null,l=null;function c(){o&&(Ut(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}Kt(()=>{if(a!==(a=e())){var f=gn();if(a){var v=n;f&&(i=document.createDocumentFragment(),i.append(v=Vt()),o&&Le.skipped_effects.add(o)),l=nt(()=>r(v,a))}f?Le.add_callback(c):c()}},br)}function Yi(t,e,r,n,a,o){var i,l,c=null,f=t,v;Kt(()=>{const p=e()||null;var m=Xo;p!==i&&(v&&(p===null?Ut(v,()=>{v=null,l=null}):p===l?bn(v):at(v)),p&&p!==l&&(v=nt(()=>{if(c=document.createElementNS(m,p),Cr(c,c),n){var g=c.appendChild(Vt());n(c,g)}Ne.nodes_end=c,f.before(c)})),i=p,i&&(l=i))},br)}function Ji(t,e){var r=void 0,n;Kt(()=>{r!==(r=e())&&(n&&(at(n),n=null),r&&(n=nt(()=>{ta(()=>r(t))})))})}function Os(t){var e,r,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(e=0;e<a;e++)t[e]&&(r=Os(t[e]))&&(n&&(n+=" "),n+=r)}else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function Zi(){for(var t,e,r=0,n="",a=arguments.length;r<a;r++)(t=arguments[r])&&(e=Os(t))&&(n&&(n+=" "),n+=e);return n}function Xi(t){return typeof t=="object"?Zi(t):t??""}const Sa=[...` 	
\r\f \v\uFEFF`];function Fi(t,e,r){var n=t==null?"":""+t;if(e&&(n=n?n+" "+e:e),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||Sa.includes(n[i-1]))&&(l===n.length||Sa.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function xa(t,e=!1){var r=e?" !important;":";",n="";for(var a in t){var o=t[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function En(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function el(t,e){if(e){var r="",n,a;if(Array.isArray(e)?(n=e[0],a=e[1]):n=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(En)),a&&c.push(...Object.keys(a).map(En));var f=0,v=-1;const $=t.length;for(var p=0;p<$;p++){var m=t[p];if(l?m==="/"&&t[p-1]==="*"&&(l=!1):o?o===m&&(o=!1):m==="/"&&t[p+1]==="*"?l=!0:m==='"'||m==="'"?o=m:m==="("?i++:m===")"&&i--,!l&&o===!1&&i===0){if(m===":"&&v===-1)v=p;else if(m===";"||p===$-1){if(v!==-1){var g=En(t.substring(f,v).trim());if(!c.includes(g)){m!==";"&&p++;var _=t.substring(f,p).trim();r+=" "+_+";"}}f=p+1,v=-1}}}}return n&&(r+=xa(n)),a&&(r+=xa(a,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function Te(t,e,r,n,a,o){var i=t.__className;if(i!==r||i===void 0){var l=Fi(r,n,o);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t.__className=r}else if(o&&a!==o)for(var c in o){var f=!!o[c];(a==null||f!==!!a[c])&&t.classList.toggle(c,f)}return o}function An(t,e={},r,n){for(var a in r){var o=r[a];e[a]!==o&&(r[a]==null?t.style.removeProperty(a):t.style.setProperty(a,o,n))}}function Rs(t,e,r,n){var a=t.__style;if(a!==e){var o=el(e,n);o==null?t.removeAttribute("style"):t.style.cssText=o,t.__style=e}else n&&(Array.isArray(n)?(An(t,r?.[0],n[0]),An(t,r?.[1],n[1],"important")):An(t,r,n));return n}function un(t,e,r=!1){if(t.multiple){if(e==null)return;if(!dn(e))return ei();for(var n of t.options)n.selected=e.includes(Vr(n));return}for(n of t.options){var a=Vr(n);if(_i(a,e)){n.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function qs(t){var e=new MutationObserver(()=>{un(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ea(()=>{e.disconnect()})}function cr(t,e,r=e){var n=!0;Fn(t,"change",a=>{var o=a?"[selected]":":checked",i;if(t.multiple)i=[].map.call(t.querySelectorAll(o),Vr);else{var l=t.querySelector(o)??t.querySelector("option:not([disabled])");i=l&&Vr(l)}r(i)}),ta(()=>{var a=e();if(un(t,a,n),n&&a===void 0){var o=t.querySelector(":checked");o!==null&&(a=Vr(o),r(a))}t.__value=a,n=!1}),qs(t)}function Vr(t){return"__value"in t?t.__value:t.value}const Br=Symbol("class"),zr=Symbol("style"),js=Symbol("is custom element"),Ls=Symbol("is html");function tl(t,e){var r=wn(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e??"")}function kn(t,e){var r=wn(t);r.checked!==(r.checked=e??void 0)&&(t.checked=e)}function rl(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function rr(t,e,r,n){var a=wn(t);a[e]!==(a[e]=r)&&(e==="loading"&&(t[No]=r),r==null?t.removeAttribute(e):typeof r!="string"&&Bs(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function nl(t,e,r,n,a=!1,o=!1){var i=wn(t),l=i[js],c=!i[Ls],f=e||{},v=t.tagName==="OPTION";for(var p in e)p in r||(r[p]=null);r.class?r.class=Xi(r.class):r[Br]&&(r.class=null),r[zr]&&(r.style??=null);var m=Bs(t);for(const E in r){let y=r[E];if(v&&E==="value"&&y==null){t.value=t.__value="",f[E]=y;continue}if(E==="class"){var g=t.namespaceURI==="http://www.w3.org/1999/xhtml";Te(t,g,y,n,e?.[Br],r[Br]),f[E]=y,f[Br]=r[Br];continue}if(E==="style"){Rs(t,y,e?.[zr],r[zr]),f[E]=y,f[zr]=r[zr];continue}var _=f[E];if(!(y===_&&!(y===void 0&&t.hasAttribute(E)))){f[E]=y;var $=E[0]+E[1];if($!=="$$")if($==="on"){const P={},C="$$"+E;let M=E.slice(2);var w=Ri(M);if(Ii(M)&&(M=M.slice(0,-7),P.capture=!0),!w&&_){if(y!=null)continue;t.removeEventListener(M,f[C],P),f[C]=null}if(y!=null)if(w)t[`__${M}`]=y,Fe([M]);else{let K=function(F){f[E].call(this,F)};var k=K;f[C]=aa(M,t,K,P)}else w&&(t[`__${M}`]=void 0)}else if(E==="style")rr(t,E,y);else if(E==="autofocus")wi(t,!!y);else if(!l&&(E==="__value"||E==="value"&&y!=null))t.value=t.__value=y;else if(E==="selected"&&v)rl(t,y);else{var S=E;c||(S=ji(S));var A=S==="defaultValue"||S==="defaultChecked";if(y==null&&!l&&!A)if(i[E]=null,S==="value"||S==="checked"){let P=t;const C=e===void 0;if(S==="value"){let M=P.defaultValue;P.removeAttribute(S),P.defaultValue=M,P.value=P.__value=C?M:null}else{let M=P.defaultChecked;P.removeAttribute(S),P.defaultChecked=M,P.checked=C?M:!1}}else t.removeAttribute(E);else A||m.includes(S)&&(l||typeof y!="string")?(t[S]=y,S in i&&(i[S]=et)):typeof y!="function"&&rr(t,S,y)}}}return f}function $a(t,e,r=[],n=[],a,o=!1,i=!1){ds(r,n,l=>{var c=void 0,f={},v=t.nodeName==="SELECT",p=!1;if(Kt(()=>{var g=e(...l.map(s)),_=nl(t,c,g,a,o,i);p&&v&&"value"in g&&un(t,g.value);for(let w of Object.getOwnPropertySymbols(f))g[w]||at(f[w]);for(let w of Object.getOwnPropertySymbols(g)){var $=g[w];w.description===Fo&&(!c||$!==c[w])&&(f[w]&&at(f[w]),f[w]=nt(()=>Ji(t,()=>$))),_[w]=$}c=_}),v){var m=t;ta(()=>{un(m,c.value,!0),qs(m)})}p=!0})}function wn(t){return t.__attributes??={[js]:t.nodeName.includes("-"),[Ls]:t.namespaceURI===Zo}}var Pa=new Map;function Bs(t){var e=t.getAttribute("is")||t.nodeName,r=Pa.get(e);if(r)return r;Pa.set(e,r=[]);for(var n,a=t,o=Element.prototype;o!==a;){n=Po(a);for(var i in n)n[i].set&&r.push(i);a=Za(a)}return r}function Ie(t,e,r=e){var n=new WeakSet;Fn(t,"input",async a=>{var o=a?t.defaultValue:t.value;if(o=Tn(t)?Cn(o):o,r(o),Le!==null&&n.add(Le),await Mi(),o!==(o=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),Rr(e)==null&&t.value&&(r(Tn(t)?Cn(t.value):t.value),Le!==null&&n.add(Le)),ra(()=>{var a=e();if(t===document.activeElement){var o=on??Le;if(n.has(o))return}Tn(t)&&a===Cn(t.value)||t.type==="date"&&!a&&!t.value||a!==t.value&&(t.value=a??"")})}function al(t,e,r=e){Fn(t,"change",n=>{var a=n?t.defaultChecked:t.checked;r(a)}),Rr(e)==null&&r(t.checked),ra(()=>{var n=e();t.checked=!!n})}function Tn(t){var e=t.type;return e==="number"||e==="range"}function Cn(t){return t===""?null:+t}let an=!1;function sl(t){var e=an;try{return an=!1,[t(),an]}finally{an=e}}const ol={get(t,e){if(!t.exclude.includes(e))return t.props[e]},set(t,e){return!1},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function fe(t,e,r){return new Proxy({props:t,exclude:e},ol)}const il={get(t,e){let r=t.props.length;for(;r--;){let n=t.props[r];if(Lr(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(t,e,r){let n=t.props.length;for(;n--;){let a=t.props[n];Lr(a)&&(a=a());const o=Xt(a,e);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let n=t.props[r];if(Lr(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const a=Xt(n,e);return a&&!a.configurable&&(a.configurable=!0),a}}},has(t,e){if(e===vr||e===es)return!1;for(let r of t.props)if(Lr(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(Lr(r)&&(r=r()),!!r){for(const n in r)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(r))e.includes(n)||e.push(n)}return e}};function he(...t){return new Proxy({props:t},il)}function Oe(t,e,r,n){var a=!Ir||(r&Go)!==0,o=(r&Qo)!==0,i=(r&Ko)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?Rr(n):n),l),v;if(o){var p=vr in t||es in t;v=Xt(t,e)?.set??(p&&e in t?k=>t[e]=k:void 0)}var m,g=!1;o?[m,g]=sl(()=>t[e]):m=t[e],m===void 0&&n!==void 0&&(m=f(),v&&(a&&qo(),v(m)));var _;if(a?_=()=>{var k=t[e];return k===void 0?f():(c=!0,k)}:_=()=>{var k=t[e];return k!==void 0&&(l=void 0),k===void 0?l:k},a&&(r&Vo)===0)return _;if(v){var $=t.$$legacy;return(function(k,E){return arguments.length>0?((!a||!E||$||g)&&v(E?_():k),k):_()})}var w=!1,S=((r&Wo)!==0?mn:Zn)(()=>(w=!1,_()));o&&s(S);var A=Ne;return(function(k,E){if(arguments.length>0){const y=E?s(S):a&&o?Re(k):k;return b(S,y),w=!0,l!==void 0&&(l=y),k}return yr&&w||(A.f&_r)!==0?S.v:s(S)})}function zs(t){Je===null&&ts(),Ir&&Je.l!==null?cl(Je).m.push(t):sr(()=>{const e=Rr(t);if(typeof e=="function")return e})}function ll(t){Je===null&&ts(),zs(()=>()=>Rr(t))}function cl(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const ul="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(ul);const dl="modulepreload",vl=function(t){return"/"+t},Ea={},fl=function(e,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(v=>{if(v=vl(v),v in Ea)return;Ea[v]=!0;const p=v.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${m}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":dl,p||(g.as="script"),g.crossOrigin="",g.href=v,c&&g.setAttribute("nonce",c),document.head.appendChild(g),p)return new Promise((_,$)=>{g.addEventListener("load",_),g.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${v}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return e().catch(o)})};class hl extends Map{#e=new Map;#r=R(0);#s=R(0);#u=Wt||-1;constructor(e){if(super(),e){for(var[r,n]of e)super.set(r,n);this.#s.v=super.size}}#d(e){return Wt===this.#u?R(e):tr(e)}has(e){var r=this.#e,n=r.get(e);if(n===void 0){var a=super.get(e);if(a!==void 0)n=this.#d(0),r.set(e,n);else return s(this.#r),!1}return s(n),!0}forEach(e,r){this.#i(),super.forEach(e,r)}get(e){var r=this.#e,n=r.get(e);if(n===void 0){var a=super.get(e);if(a!==void 0)n=this.#d(0),r.set(e,n);else{s(this.#r);return}}return s(n),super.get(e)}set(e,r){var n=this.#e,a=n.get(e),o=super.get(e),i=super.set(e,r),l=this.#r;if(a===void 0)a=this.#d(0),n.set(e,a),b(this.#s,super.size),It(l);else if(o!==r){It(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(v=>c.has(v));f&&It(l)}return i}delete(e){var r=this.#e,n=r.get(e),a=super.delete(e);return n!==void 0&&(r.delete(e),b(this.#s,super.size),b(n,-1),It(this.#r)),a}clear(){if(super.size!==0){super.clear();var e=this.#e;b(this.#s,0);for(var r of e.values())b(r,-1);It(this.#r),e.clear()}}#i(){s(this.#r);var e=this.#e;if(this.#s.v!==e.size){for(var r of super.keys())if(!e.has(r)){var n=this.#d(0);e.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#i(),super.values()}entries(){return this.#i(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#s),super.size}}class pl{#e;#r;constructor(e,r){this.#e=e,this.#r=Jn(r)}get current(){return this.#r(),this.#e()}}const ml=/\(.+\)/,gl=new Set(["all","print","screen","and","or","not","only"]);class _l extends pl{constructor(e,r){let n=ml.test(e)||e.split(/[\s,]+/).some(o=>gl.has(o.trim()))?e:`(${e})`;const a=window.matchMedia(n);super(()=>a.matches,o=>jn(a,"change",o))}}const bl=typeof window<"u"?window:void 0;function yl(t){let e=t.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class wl{#e;#r;constructor(e={}){const{window:r=bl,document:n=r?.document}=e;r!==void 0&&(this.#e=n,this.#r=Jn(a=>{const o=jn(r,"focusin",a),i=jn(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?yl(this.#e):null}}new wl;function Sl(t){return typeof t=="function"}function xl(t,e){if(Sl(t)){const n=t();return n===void 0?e:n}return t===void 0?e:t}function $l(t,e){let r=R(null);const n=V(()=>xl(e,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const c=new Promise((f,v)=>{i=f,l=v});b(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);b(r,null);try{i.resolve(await t.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),b(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Pl(t,e,r){if(!e||!r||!t.length)return[];const n=new Date(e),a=new Date(r),o=t.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return o.length?Pr(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function Jt(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(e){return console.warn("[ProductsStore] Erreur parsing JSON:",e),null}}function Qr(t){return t?.length?t.filter(e=>e.quantity!=null&&e.unit).map(e=>({q:typeof e.quantity=="number"?e.quantity:parseFloat(e.quantity),u:e.unit})).filter(e=>!isNaN(e.q)):[]}function Pr(t){if(!t?.length)return[];const e=new Map;return t.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=e.get(r.u)||0;e.set(r.u,n+r.q)}),Array.from(e.entries()).map(([r,n])=>({q:n,u:r}))}function Kr(t,e){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!e?.length){const l=t.map(c=>ur(c.q.toString(),c.u)).join(" et ");return{numeric:t,display:l}}const r=new Map,n=new Map;t.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),e.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(a.push({q:v,u:c}),o.push(ur(v.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function xt(t){return t?.length?t.map(e=>ur(e.q.toString(),e.u)).join(" et "):"-"}function ur(t,e){const r=parseFloat(t);if(isNaN(r))return`${t} ${e}`;if((e==="gr."||e==="ml")&&r>=1e3){const n=r/1e3,a=e==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(e)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${e}`}return`${r} ${e}`}function sa(t){if(!t?.length)return[];const e=new Map;return t.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=e.get(n)||0;e.set(n,a+r)}}),Array.from(e.entries()).map(([r,n])=>({q:n,u:r}))}function El(t,e,r){if(!t)return 0;const n=typeof e=="string"?new Date(e):e,a=typeof r=="string"?new Date(r):r;return Object.entries(t).filter(([o])=>{const i=new Date(o);return i>=n&&i<=a}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function Al(t){return t?Object.values(t).some(e=>e.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function kl(t){return t?Object.entries(t).map(([e,r])=>({dateTimeService:e,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Tl(t){if(!t)return[];const e=[];return Object.entries(t).forEach(([r,n])=>{n.recipes?.forEach(a=>{e.push({...a,date:r,dateTimeService:r})})}),e}function oa(t){if(!t)return[];const e=Object.values(t).flatMap(r=>r.totalConsolidated);return sa(e)}function Cl(t,e,r=""){if(t.status==="cancelled")return!1;const n=t.deliveryDate||t.$createdAt;return!n||n>e||r&&t.$createdAt<r?!1:t.status==="delivered"||t.status==="pending"||t.status==="ordered"&&n<=e}function Nn(t,e){let r=[],n="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(r=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],n=t.stockParsed.dateTime);const a=[];if(t.purchases)for(const c of t.purchases)Cl(c,e,n)&&a.push({q:c.quantity,u:c.unit});const o=Nl(t,e),i=[...r,...a],l=sa(i);return Ml(l,o)}function Nl(t,e){if(!t.byDate)return[];const r=[];for(const[n,a]of Object.entries(t.byDate))if(n<=e){const i=a.totalConsolidated;i&&r.push(...i)}return sa(r)}function Ml(t,e){const r=new Map,n=new Map;t.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),e.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const a=[],o=new Set([...r.keys(),...n.keys()]);for(const i of o){const l=r.get(i)||0,c=n.get(i)||0,f=l-c;Math.abs(f)>.001&&a.push({q:f,u:i})}return a}function Mn(t){if(!t?.length)return"Équilibré";const e=t.filter(n=>n.q>0),r=t.filter(n=>n.q<0);if(e.length>0&&r.length>0){const n=e.map(o=>ur(o.q.toString(),o.u)).join(" et "),a=r.map(o=>ur(Math.abs(o.q).toString(),o.u)).join(" et ");return`${n} disponibles, ${a} manquant${r.length>1?"s":""}`}else return e.length>0?e.map(n=>"+"+ur(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>ur(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}class Dl{#e=R(Re([]));MAX_TOASTS=3;get toasts(){return s(this.#e).sort((e,r)=>r.timestamp-e.timestamp)}create(e){const r=e.id||crypto.randomUUID(),n={id:r,state:e.state,message:e.message,timestamp:Date.now(),source:e.source||"user",timeoutId:void 0,details:e.details};return this.#r(n),r}update(e,r){const n=s(this.#e).findIndex(o=>o.id===e);if(n===-1)return;const a=s(this.#e)[n];a.timeoutId&&clearTimeout(a.timeoutId),s(this.#e)[n]={...a,state:r.state||a.state,message:r.message||a.message,source:r.source||a.source},this.#s(s(this.#e)[n])}async track(e,r){const n=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const a=await e;return this.update(n,{state:"success",message:r.success||"Opération réussie"}),a}catch(a){throw this.update(n,{state:"error",message:r.error||"Erreur lors de l'opération"}),a}}dismiss(e){const r=s(this.#e).findIndex(a=>a.id===e);if(r===-1)return;const n=s(this.#e)[r];n.timeoutId&&clearTimeout(n.timeoutId),s(this.#e).splice(r,1)}dismissAll(){s(this.#e).forEach(e=>{e.timeoutId&&clearTimeout(e.timeoutId)}),b(this.#e,[],!0)}#r(e){if(e.source==="user"){const r=s(this.#e).findIndex(n=>n.source==="user");r>=0?s(this.#e)[r]=e:s(this.#e).push(e)}else{const r=s(this.#e).filter(n=>n.source!=="user");if(r.length>=2){const n=r[0];this.dismiss(n.id)}s(this.#e).push(e)}s(this.#e).length>this.MAX_TOASTS&&s(this.#e).splice(0,s(this.#e).length-this.MAX_TOASTS),this.#s(e)}#s(e){if(e.state!=="success"&&e.state!=="info")return;const r=e.source==="realtime-other"?24e3:23e3;e.timeoutId=setTimeout(()=>{this.dismiss(e.id)},r)}success(e,r){return this.create({state:"success",message:e,details:r})}error(e,r){return this.create({state:"error",message:e,details:r})}info(e,r){return this.create({state:"info",message:e,source:r?.source||"system",details:r?.details})}loading(e,r){return this.create({state:"loading",message:e,details:r})}}const bt=new Dl;function Il(t,e,r,n){if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(t):n?n.value:e.get(t)}class N{constructor(e,r,n){this.method=e,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}N.equal=(t,e)=>new N("equal",t,e).toString();N.notEqual=(t,e)=>new N("notEqual",t,e).toString();N.lessThan=(t,e)=>new N("lessThan",t,e).toString();N.lessThanEqual=(t,e)=>new N("lessThanEqual",t,e).toString();N.greaterThan=(t,e)=>new N("greaterThan",t,e).toString();N.greaterThanEqual=(t,e)=>new N("greaterThanEqual",t,e).toString();N.isNull=t=>new N("isNull",t).toString();N.isNotNull=t=>new N("isNotNull",t).toString();N.between=(t,e,r)=>new N("between",t,[e,r]).toString();N.startsWith=(t,e)=>new N("startsWith",t,e).toString();N.endsWith=(t,e)=>new N("endsWith",t,e).toString();N.select=t=>new N("select",void 0,t).toString();N.search=(t,e)=>new N("search",t,e).toString();N.orderDesc=t=>new N("orderDesc",t).toString();N.orderAsc=t=>new N("orderAsc",t).toString();N.orderRandom=()=>new N("orderRandom").toString();N.cursorAfter=t=>new N("cursorAfter",void 0,t).toString();N.cursorBefore=t=>new N("cursorBefore",void 0,t).toString();N.limit=t=>new N("limit",void 0,t).toString();N.offset=t=>new N("offset",void 0,t).toString();N.contains=(t,e)=>new N("contains",t,e).toString();N.notContains=(t,e)=>new N("notContains",t,e).toString();N.notSearch=(t,e)=>new N("notSearch",t,e).toString();N.notBetween=(t,e,r)=>new N("notBetween",t,[e,r]).toString();N.notStartsWith=(t,e)=>new N("notStartsWith",t,e).toString();N.notEndsWith=(t,e)=>new N("notEndsWith",t,e).toString();N.createdBefore=t=>N.lessThan("$createdAt",t);N.createdAfter=t=>N.greaterThan("$createdAt",t);N.createdBetween=(t,e)=>N.between("$createdAt",t,e);N.updatedBefore=t=>N.lessThan("$updatedAt",t);N.updatedAfter=t=>N.greaterThan("$updatedAt",t);N.updatedBetween=(t,e)=>N.between("$updatedAt",t,e);N.or=t=>new N("or",void 0,t.map(e=>JSON.parse(e))).toString();N.and=t=>new N("and",void 0,t.map(e=>JSON.parse(e))).toString();N.distanceEqual=(t,e,r,n=!0)=>new N("distanceEqual",t,[[e,r,n]]).toString();N.distanceNotEqual=(t,e,r,n=!0)=>new N("distanceNotEqual",t,[[e,r,n]]).toString();N.distanceGreaterThan=(t,e,r,n=!0)=>new N("distanceGreaterThan",t,[[e,r,n]]).toString();N.distanceLessThan=(t,e,r,n=!0)=>new N("distanceLessThan",t,[[e,r,n]]).toString();N.intersects=(t,e)=>new N("intersects",t,[e]).toString();N.notIntersects=(t,e)=>new N("notIntersects",t,[e]).toString();N.crosses=(t,e)=>new N("crosses",t,[e]).toString();N.notCrosses=(t,e)=>new N("notCrosses",t,[e]).toString();N.overlaps=(t,e)=>new N("overlaps",t,[e]).toString();N.notOverlaps=(t,e)=>new N("notOverlaps",t,[e]).toString();N.touches=(t,e)=>new N("touches",t,[e]).toString();N.notTouches=(t,e)=>new N("notTouches",t,[e]).toString();var Aa;(function(t){t[t.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",t[t.POLICY_VIOLATION=1008]="POLICY_VIOLATION",t[t.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(Aa||(Aa={}));var Us,Hs;class Nr{static custom(e){return e}static unique(e=7){const r=Il(Nr,Us,"m",Hs).call(Nr);let n="";for(let a=0;a<e;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}Us=Nr,Hs=function(){const e=new Date,r=Math.floor(e.getTime()/1e3),n=e.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var ka;(function(t){t.Equal="equal",t.NotEqual="notEqual",t.GreaterThan="greaterThan",t.GreaterThanEqual="greaterThanEqual",t.LessThan="lessThan",t.LessThanEqual="lessThanEqual",t.Contains="contains",t.IsNull="isNull",t.IsNotNull="isNotNull"})(ka||(ka={}));var Ta;(function(t){t.Totp="totp"})(Ta||(Ta={}));var Ca;(function(t){t.Email="email",t.Phone="phone",t.Totp="totp",t.Recoverycode="recoverycode"})(Ca||(Ca={}));var Na;(function(t){t.Amazon="amazon",t.Apple="apple",t.Auth0="auth0",t.Authentik="authentik",t.Autodesk="autodesk",t.Bitbucket="bitbucket",t.Bitly="bitly",t.Box="box",t.Dailymotion="dailymotion",t.Discord="discord",t.Disqus="disqus",t.Dropbox="dropbox",t.Etsy="etsy",t.Facebook="facebook",t.Figma="figma",t.Github="github",t.Gitlab="gitlab",t.Google="google",t.Linkedin="linkedin",t.Microsoft="microsoft",t.Notion="notion",t.Oidc="oidc",t.Okta="okta",t.Paypal="paypal",t.PaypalSandbox="paypalSandbox",t.Podio="podio",t.Salesforce="salesforce",t.Slack="slack",t.Spotify="spotify",t.Stripe="stripe",t.Tradeshift="tradeshift",t.TradeshiftBox="tradeshiftBox",t.Twitch="twitch",t.Wordpress="wordpress",t.Yahoo="yahoo",t.Yammer="yammer",t.Yandex="yandex",t.Zoho="zoho",t.Zoom="zoom",t.Mock="mock"})(Na||(Na={}));var Ma;(function(t){t.AvantBrowser="aa",t.AndroidWebViewBeta="an",t.GoogleChrome="ch",t.GoogleChromeIOS="ci",t.GoogleChromeMobile="cm",t.Chromium="cr",t.MozillaFirefox="ff",t.Safari="sf",t.MobileSafari="mf",t.MicrosoftEdge="ps",t.MicrosoftEdgeIOS="oi",t.OperaMini="om",t.Opera="op",t.OperaNext="on"})(Ma||(Ma={}));var Da;(function(t){t.AmericanExpress="amex",t.Argencard="argencard",t.Cabal="cabal",t.Cencosud="cencosud",t.DinersClub="diners",t.Discover="discover",t.Elo="elo",t.Hipercard="hipercard",t.JCB="jcb",t.Mastercard="mastercard",t.Naranja="naranja",t.TarjetaShopping="targeta-shopping",t.UnionPay="unionpay",t.Visa="visa",t.MIR="mir",t.Maestro="maestro",t.Rupay="rupay"})(Da||(Da={}));var Ia;(function(t){t.Afghanistan="af",t.Angola="ao",t.Albania="al",t.Andorra="ad",t.UnitedArabEmirates="ae",t.Argentina="ar",t.Armenia="am",t.AntiguaAndBarbuda="ag",t.Australia="au",t.Austria="at",t.Azerbaijan="az",t.Burundi="bi",t.Belgium="be",t.Benin="bj",t.BurkinaFaso="bf",t.Bangladesh="bd",t.Bulgaria="bg",t.Bahrain="bh",t.Bahamas="bs",t.BosniaAndHerzegovina="ba",t.Belarus="by",t.Belize="bz",t.Bolivia="bo",t.Brazil="br",t.Barbados="bb",t.BruneiDarussalam="bn",t.Bhutan="bt",t.Botswana="bw",t.CentralAfricanRepublic="cf",t.Canada="ca",t.Switzerland="ch",t.Chile="cl",t.China="cn",t.CoteDIvoire="ci",t.Cameroon="cm",t.DemocraticRepublicOfTheCongo="cd",t.RepublicOfTheCongo="cg",t.Colombia="co",t.Comoros="km",t.CapeVerde="cv",t.CostaRica="cr",t.Cuba="cu",t.Cyprus="cy",t.CzechRepublic="cz",t.Germany="de",t.Djibouti="dj",t.Dominica="dm",t.Denmark="dk",t.DominicanRepublic="do",t.Algeria="dz",t.Ecuador="ec",t.Egypt="eg",t.Eritrea="er",t.Spain="es",t.Estonia="ee",t.Ethiopia="et",t.Finland="fi",t.Fiji="fj",t.France="fr",t.MicronesiaFederatedStatesOf="fm",t.Gabon="ga",t.UnitedKingdom="gb",t.Georgia="ge",t.Ghana="gh",t.Guinea="gn",t.Gambia="gm",t.GuineaBissau="gw",t.EquatorialGuinea="gq",t.Greece="gr",t.Grenada="gd",t.Guatemala="gt",t.Guyana="gy",t.Honduras="hn",t.Croatia="hr",t.Haiti="ht",t.Hungary="hu",t.Indonesia="id",t.India="in",t.Ireland="ie",t.IranIslamicRepublicOf="ir",t.Iraq="iq",t.Iceland="is",t.Israel="il",t.Italy="it",t.Jamaica="jm",t.Jordan="jo",t.Japan="jp",t.Kazakhstan="kz",t.Kenya="ke",t.Kyrgyzstan="kg",t.Cambodia="kh",t.Kiribati="ki",t.SaintKittsAndNevis="kn",t.SouthKorea="kr",t.Kuwait="kw",t.LaoPeopleSDemocraticRepublic="la",t.Lebanon="lb",t.Liberia="lr",t.Libya="ly",t.SaintLucia="lc",t.Liechtenstein="li",t.SriLanka="lk",t.Lesotho="ls",t.Lithuania="lt",t.Luxembourg="lu",t.Latvia="lv",t.Morocco="ma",t.Monaco="mc",t.Moldova="md",t.Madagascar="mg",t.Maldives="mv",t.Mexico="mx",t.MarshallIslands="mh",t.NorthMacedonia="mk",t.Mali="ml",t.Malta="mt",t.Myanmar="mm",t.Montenegro="me",t.Mongolia="mn",t.Mozambique="mz",t.Mauritania="mr",t.Mauritius="mu",t.Malawi="mw",t.Malaysia="my",t.Namibia="na",t.Niger="ne",t.Nigeria="ng",t.Nicaragua="ni",t.Netherlands="nl",t.Norway="no",t.Nepal="np",t.Nauru="nr",t.NewZealand="nz",t.Oman="om",t.Pakistan="pk",t.Panama="pa",t.Peru="pe",t.Philippines="ph",t.Palau="pw",t.PapuaNewGuinea="pg",t.Poland="pl",t.FrenchPolynesia="pf",t.NorthKorea="kp",t.Portugal="pt",t.Paraguay="py",t.Qatar="qa",t.Romania="ro",t.Russia="ru",t.Rwanda="rw",t.SaudiArabia="sa",t.Sudan="sd",t.Senegal="sn",t.Singapore="sg",t.SolomonIslands="sb",t.SierraLeone="sl",t.ElSalvador="sv",t.SanMarino="sm",t.Somalia="so",t.Serbia="rs",t.SouthSudan="ss",t.SaoTomeAndPrincipe="st",t.Suriname="sr",t.Slovakia="sk",t.Slovenia="si",t.Sweden="se",t.Eswatini="sz",t.Seychelles="sc",t.Syria="sy",t.Chad="td",t.Togo="tg",t.Thailand="th",t.Tajikistan="tj",t.Turkmenistan="tm",t.TimorLeste="tl",t.Tonga="to",t.TrinidadAndTobago="tt",t.Tunisia="tn",t.Turkey="tr",t.Tuvalu="tv",t.Tanzania="tz",t.Uganda="ug",t.Ukraine="ua",t.Uruguay="uy",t.UnitedStates="us",t.Uzbekistan="uz",t.VaticanCity="va",t.SaintVincentAndTheGrenadines="vc",t.Venezuela="ve",t.Vietnam="vn",t.Vanuatu="vu",t.Samoa="ws",t.Yemen="ye",t.SouthAfrica="za",t.Zambia="zm",t.Zimbabwe="zw"})(Ia||(Ia={}));var Oa;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t.OPTIONS="OPTIONS",t.HEAD="HEAD"})(Oa||(Oa={}));var Ra;(function(t){t.Center="center",t.Topleft="top-left",t.Top="top",t.Topright="top-right",t.Left="left",t.Right="right",t.Bottomleft="bottom-left",t.Bottom="bottom",t.Bottomright="bottom-right"})(Ra||(Ra={}));var qa;(function(t){t.Jpg="jpg",t.Jpeg="jpeg",t.Png="png",t.Webp="webp",t.Heic="heic",t.Avif="avif",t.Gif="gif"})(qa||(qa={}));var ja;(function(t){t.Http="http",t.Schedule="schedule",t.Event="event"})(ja||(ja={}));var La;(function(t){t.Waiting="waiting",t.Processing="processing",t.Completed="completed",t.Failed="failed",t.Scheduled="scheduled"})(La||(La={}));function Ws(t,e){return{$id:t.$id,mainId:t.mainId,productHugoUuid:t.productHugoUuid,productName:t.productName,...e}}async function At(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getDatabases(),e=window.AppwriteClient.getConfig();return{databases:t,config:e}}async function Ol(t){const n=await(await window.AppwriteClient.getAccount()).get();return{...t,updatedBy:n.name}}function xr(){return localStorage.getItem("appwrite-user-name")||""}async function Rl(t,e,r=100){try{const{databases:n,config:a}=await At(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[N.greaterThan("$updatedAt",e),N.equal("mainId",t),N.limit(r),N.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function Gs(t,e){const{lastSync:r,limit:n=100}=e;try{const{databases:a,config:o}=await At();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[N.equal("mainId",t),N.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),N.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[N.greaterThan("$updatedAt",r),N.equal("mainId",t),N.limit(n),N.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${t}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function wr(t,e,r=!0){const{databases:n,config:a}=await At();return r&&(e.updatedBy=xr()),await n.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,t,e)}async function zt(t,e,r){try{const n=r(t);if(!n)throw new Error(`Produit ${t} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${t} sur Appwrite...`);const a=Ws(n,e),o=await Ol(a),{databases:i,config:l}=await At(),c=await i.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,t,o);return console.log(`[Appwrite Interactions] Produit ${t} créé avec succès`),c}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${t}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function Vs(t,e){if(!t)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=e?JSON.stringify(e):null,n=await wr(t,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${t}, nouvelle valeur:`,n.store),n}async function Qs(t,e){return wr(t,{who:e})}async function Ln(t,e){return wr(t,{stockReel:e})}async function ia(t,e,r=!1){if(!t)throw new Error("ID du produit requis pour la mise à jour de l'override");const n=JSON.stringify(e),a=await wr(t,{totalNeededOverride:n},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${t}:`,e),a}async function Ks(t,e=!0){if(!t)throw new Error("ID du produit requis pour la suppression de l'override");const r=await wr(t,{totalNeededOverride:null},e);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${t}`),r}async function Ys(t,e,r){try{const n=r(t);if(!n)throw new Error(`Produit ${t} non trouvé localement pour mise à jour batch`);const a={};return e.stockReel!==void 0&&(a.stockReel=e.stockReel),e.who!==void 0&&(a.who=e.who),e.storeInfo!==void 0&&(a.store=JSON.stringify(e.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${t} déjà sync, update batch normal...`),await wr(t,a)):(console.log(`[Appwrite Interactions] Produit ${t} local, création batch avec upsert...`),await zt(t,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${t}:`,n),n}}async function Js(t){const{databases:e,config:r}=await At(),n={...t,createdBy:xr()},a=await e.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Nr.unique(),n);return console.log("[Appwrite Interactions] Achat créé:",a),a}async function Zs(t,e){try{const{databases:r,config:n}=await At(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,t),o={...e,products:e.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,t,o);return console.log(`[Appwrite Interactions] Achat ${t} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${t}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Xs(t){try{const{databases:e,config:r}=await At();await e.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,t),console.log(`[Appwrite Interactions] Achat ${t} supprimé`)}catch(e){console.error(`[Appwrite Interactions] Erreur suppression achat ${t}:`,e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Fs(t){if(!t?.length)return[];try{const{databases:e,config:r}=await At(),n=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[N.equal("$id",t),N.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(e){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function eo(t,e={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(g=>g.includes("products.")),f=i.some(g=>g.includes("purchases.")),v=i.some(g=>g.includes(".create")),p=i.some(g=>g.includes(".update")),m=i.some(g=>g.includes(".delete"));if(c){const g=l;g.updatedBy&&g.updatedBy!==xr()&&(v||p?bt.info(`${g.updatedBy} a modifié le produit "${g.productName}"`,"realtime-other"):m&&bt.info(`${g.updatedBy} a supprimé un produit`,"realtime-other")),v&&e.onProductCreate?e.onProductCreate(g):p&&e.onProductUpdate?e.onProductUpdate(g):m&&e.onProductDelete&&e.onProductDelete(g.$id)}else if(f){const g=l;if(g.createdBy&&g.createdBy!==xr()){const _=g.products?.[0]?.productName||"un produit";v&&g.who!==xr()?bt.info(`${g.who} a ajouté un achat pour ${_}`,"realtime-other"):p&&g.who!==xr()?bt.info(`${g.who} a modifié un achat pour ${_}`,"realtime-other"):m&&bt.info(`${g.who} a supprimé un achat pour ${_}`,"realtime-other")}v&&e.onPurchaseCreate?e.onPurchaseCreate(g):p&&e.onPurchaseUpdate?e.onPurchaseUpdate(g):m&&e.onPurchaseDelete&&e.onPurchaseDelete(g.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],t,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),e.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),e.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),e.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),e.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function to(t){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${t}`);const{databases:e}=await At(),r=window.AppwriteClient.getConfig(),n=await e.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,t);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(e){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${t}:`,e),null}}async function ro(t,e,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${t}`);const{databases:a}=await At(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,t,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:e,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${t}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function la(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:t};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${t.productIds.length} produits, type: ${t.updateType}`);const a=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(e){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,updatedCount:t.productIds.length,updateType:t.updateType,error:r,timestamp:new Date().toISOString()}}}async function no(t,e,r,n){return la({productIds:t,products:e,updateType:"store",updateData:r,options:n})}async function ao(t,e,r,n="replace"){return la({productIds:t,products:e,updateType:"who",updateData:{names:r},options:{mode:n}})}async function so(t,e,r,n={}){try{const{databases:a,config:o}=await At(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:t,productId:e,productIdType:typeof e,quantities:r,options:n});for(const v of r){const p={products:[e],mainId:t,quantity:v.q,unit:v.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},m=await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,Nr.unique(),p);f.push(m)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${e}`),f}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const o=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const ql=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:la,batchUpdateStore:no,batchUpdateWho:ao,createMainDocument:ro,createPurchase:Js,createQuickValidationPurchases:so,deletePurchase:Xs,enrichedProductToAppwriteProduct:Ws,loadMainEventData:to,loadPurchasesListByIds:Fs,loadUpdatedPurchases:Rl,removeTotalOverride:Ks,subscribeToRealtime:eo,syncProductsWithPurchases:Gs,updateProduct:wr,updateProductBatch:Ys,updateProductStock:Ln,updateProductStore:Vs,updateProductWho:Qs,updatePurchase:Zs,updateTotalOverride:ia,upsertProduct:zt},Symbol.toStringTag,{value:"Module"}));async function jl(t){let e;if(e=await fetch(`/evenements/${t}/metadata.json`),!e.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function Ba(t){const e=await fetch(`/evenements/${t}/ingredients_aw/index.json`);if(!e.ok)throw new Error(`Impossible de charger les données Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function Ll(t,e){if(!t)return!0;try{return(await jl(e)).hugoContentHash!==t}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function oo(t,e){const r=oa(t.byDate),n=Pr(Qr([])),{numeric:a,display:o}=Kr(r,n);return{$id:`${t.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:t.ingredientHugoUuid,productName:t.ingredientName,productType:t.ingType,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1,nbRecipes:t.nbRecipes,totalNeededRaw:t.totalNeededRaw,totalAssiettes:t.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:e,purchases:[],byDate:t.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:xt(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function Bl(t,e){return t.map(r=>oo(r,e))}class zl{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(e){this.dbName=`products-cache-${e}`}async open(){if(!this.db)return new Promise((e,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),e()},n.onupgradeneeded=a=>{const o=a.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),e(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();o.onsuccess=()=>{const i=o.result,l={lastSync:null,allDates:[],hugoContentHash:null};i.forEach(c=>{c.key===this.LAST_SYNC_KEY?l.lastSync=c.value:c.key===this.ALL_DATES_KEY?l.allDates=c.value||[]:c.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=c.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),e(l)},o.onerror=()=>r(o.error)})}async saveProducts(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=a.objectStore(this.PRODUCTS_STORE);o.clear(),e.forEach(i=>{o.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${e.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.METADATA_STORE,"readwrite"),o=a.objectStore(this.METADATA_STORE);o.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),o.put({key:this.ALL_DATES_KEY,value:e.allDates}),e.hugoContentHash!==void 0&&o.put({key:this.HUGO_HASH_KEY,value:e.hugoContentHash}),a.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},a.onerror=()=>n(a.error)})}async updateLastSync(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:e});i.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${e}`),r()},i.onerror=()=>n(i.error)})}async updateAllDates(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:e});i.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${e.length} dates`),r()},i.onerror=()=>n(i.error)})}async updateHugoContentHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:e});i.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${e}`),r()},i.onerror=()=>n(i.error)})}async updateLastHugoMenuUpdate(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:e});i.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(e);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(e);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),e()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Ul(t){const e=new zl(t);return await e.open(),e}function Hl(t){return!!(t.isMerged||t.totalNeededOverride)}function Wl(t,e){if(!t||t.length!==e.length)return!0;for(let r=0;r<t.length;r++){const n=t[r],a=e[r];if(n.q!==a.q||n.u!==a.u)return!0}return!1}async function Gl(t,e){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},n=new Map;for(const[o,i]of t)n.set(i.productHugoUuid,o);const a=new Set;for(const o of e.ingredients){const i=o.productSemanticKey||`${e.mainGroup_id}_${o.ingredientHugoUuid}`;a.add(i);const l=n.get(o.ingredientHugoUuid),c=l?t.get(l):void 0;if(c){if(Wl(c.totalNeededRaw,o.totalNeededRaw)){const v=Vl(c,o);if(v&&r.overrideConflicts.push(v),c.isMerged){const p=c.displayTotalNeeded;za(c,o),r.mergedProductsUpdated.push({product:c,oldDisplayTotal:p,newDisplayTotal:c.displayTotalNeeded,currentOverride:c.totalNeededOverrideParsed,semanticKey:i})}else za(c,o);r.updated.push(i)}t.set(i,c)}else{r.added.push(o);const f=oo(o,e.mainGroup_id);t.set(f.$id,f)}}for(const[o,i]of t)a.has(o)||(r.removed.push(i),!Hl(i)&&!i.purchases?.length&&!i.stockReel&&!i.who?.length&&t.delete(o));return r.overrideConflicts.length>0&&await Ql(r.overrideConflicts),r.summary=Yl(r),r}function Vl(t,e){if(!t.totalNeededOverride||!t.totalNeededOverrideParsed)return null;const r=oa(e.byDate),n=xt(r),a=t.displayTotalNeeded;return a!==n?{product:t,oldDisplayTotal:a,newDisplayTotal:n,currentOverride:t.totalNeededOverrideParsed,semanticKey:t.$id}:null}async function Ql(t){for(const e of t){const r={...e.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:e.oldDisplayTotal,newTotalDisplay:e.newDisplayTotal};JSON.stringify(r);try{await ia(e.product.$id,r,!1)}catch(n){console.error(`Erreur lors de la mise à jour de l'override pour ${e.product.$id}:`,n)}}}function za(t,e){t.byDate=e.byDate,t.nbRecipes=e.nbRecipes,t.totalAssiettes=e.totalAssiettes,t.productType=e.ingType,t.pFrais=e.pFrais||!1,t.pSurgel=e.pSurgel||!1,Kl(t)}function Kl(t){t.totalNeededArray=oa(t.byDate),t.displayTotalNeeded=xt(t.totalNeededArray);const e=Pr(Qr(t.purchases)),{numeric:r,display:n}=Kr(t.totalNeededArray,e);t.totalPurchasesArray=e,t.missingQuantityArray=r,t.displayMissingQuantity=n,t.stockOrTotalPurchases=t.purchases.length>0?t.displayTotalPurchases:t.displayTotalNeeded}function Yl(t){const e=[];if((t.added.length>0||t.updated.length>0||t.removed.length>0)&&e.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),t.added.length>0&&e.push(`${t.added.length} nouveau(x) ingrédient(s)`),t.updated.length>0&&e.push(` ${t.updated.length} ingrédient(s) mis à jour`),t.overrideConflicts.length>0&&e.push(`⚠️ ${t.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),t.mergedProductsUpdated.length>0&&e.push(`🔀 ${t.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),t.removed.length>0){const r=t.removed.filter(n=>n.purchases?.length||n.stockReel||n.who?.length).length;r>0?e.push(`⚠️ ${r} suppression(s) avec données conservées`):e.push(`${t.removed.length} ingrédient(s) supprimé(s)`)}return e.length>0?e.join(", "):"Aucune modification détectée"}class Jl{isMobileQuery=new _l("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return bt.toasts}get toast(){return bt}#e=R(Re({isOpen:!1,conflicts:[]}));get modalOverride(){return s(this.#e)}set modalOverride(e){b(this.#e,e,!0)}}const Mr=new Jl,Ua=1e3;class Zl{#e=new hl;#r=R(null);#s=R(null);#u=R(!1);#d=R(!1);#i=R(null);#c=R(!1);#l=R(!1);#a=R(null);#v=R(null);#o=R(Re([]));#f=R(Re({start:null,end:null}));get dateRange(){return s(this.#f)}set dateRange(e){b(this.#f,e,!0)}#h=V(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDateInRange(){return s(this.#h)}set hasSingleDateInRange(e){b(this.#h,e)}#p=V(()=>s(this.#o).length===1);get hasSingleDateEvent(){return s(this.#p)}set hasSingleDateEvent(e){b(this.#p,e)}#n=null;#_=null;#w=R(!1);#m=null;#b=R(!1);#y=R();#g=R(Re([]));get hasPendingConflicts(){return s(this.#g).length>0}get pendingConflicts(){return s(this.#g)}#t=R(Re({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#u)}get loading(){return s(this.#d)}get error(){return s(this.#i)}get lastSync(){return s(this.#a)}get hugoContentHash(){return s(this.#v)}get syncing(){return s(this.#c)}get availableDates(){return s(this.#o)}setDateRange(e,r){if(!e&&!r){this.dateRange={start:null,end:null};return}if(!e||!r){this.dateRange={start:e||r,end:e||r};return}const n=new Date(e)<=new Date(r)?e:r,a=new Date(e)>=new Date(r)?e:r;this.dateRange={start:n,end:a}}isFullRange(){return this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate}initializeDateRange(){if(s(this.#o).length>0){const e=[...s(this.#o)].sort();this.dateRange={start:e[0],end:e[e.length-1]}}console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}get firstAvailableDate(){return s(this.#o).length===0?null:[...s(this.#o)].sort()[0]}get lastAvailableDate(){return s(this.#o).length===0?null:[...s(this.#o)].sort().pop()}get realtimeConnected(){return s(this.#l)}get hugoContentChanged(){return s(this.#b)}#E=V(()=>{const e=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${e.length} products`),e});get enrichedProducts(){return s(this.#E)}set enrichedProducts(e){b(this.#E,e)}#A=V(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const e=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[a,o]of this.#e){if(!o.byDate||!this.#F(o))continue;Object.keys(o.byDate).some(c=>{const f=new Date(c);return f>=e&&f<=r})&&n.set(a,o)}return n});get filteredProductsMap(){return s(this.#A)}set filteredProductsMap(e){b(this.#A,e)}#j(){console.log("[Store] ⚡ Single date mode - optimized calculation");const e=new Map,r=this.dateRange.start;for(const[n,a]of this.#e){if(!a.byDate?.[r])continue;const o=a.byDate[r],i=[r],l=new Map;o.recipes&&o.recipes.length>0&&l.set(r,o.recipes);const c=Nn(a,r),f=c.filter(p=>p.q>0),v=c.filter(p=>p.q<0).map(p=>({q:Math.abs(p.q),u:p.u}));e.set(n,{quantities:o.totalConsolidated||[],formattedQuantities:xt(o.totalConsolidated||[]),nbRecipes:o.recipes?.length||0,totalAssiettes:o.totalAssiettes||0,stockResult:c,availableQuantities:f,missingQuantities:v,formattedAvailableQuantities:Mn(c),hasAvailable:f.length>0,hasMissing:v.length>0,concernedDates:i,recipesByDate:l})}return e}#k=V(()=>{if(console.log("[Store] Calcul unifié des stats par produit (1 itération)"),this.hasSingleDateInRange)return this.#j();const e=new Map;if(this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using precomputed data");for(const[n,a]of this.#e){const o=Nn(a,this.dateRange.end),i=o.filter(p=>p.q>0),l=o.filter(p=>p.q<0).map(p=>({q:Math.abs(p.q),u:p.u})),c=a.byDate?Object.keys(a.byDate).sort():[],f=new Map;let v=0;if(a.byDate)for(const[p,m]of Object.entries(a.byDate))m.recipes&&m.recipes.length>0&&(f.set(p,m.recipes),v+=m.recipes.length);e.set(n,{quantities:a.totalNeededArray,formattedQuantities:xt(a.totalNeededArray),nbRecipes:a.nbRecipes||0,totalAssiettes:a.totalAssiettes||0,stockResult:o,availableQuantities:i,missingQuantities:l,formattedAvailableQuantities:Mn(o),hasAvailable:i.length>0,hasMissing:l.length>0,concernedDates:c,recipesByDate:f})}return e}for(const[n,a]of this.filteredProductsMap){if(!a.byDate)continue;const o=kl(a.byDate),i=Pl(o,this.dateRange.start,this.dateRange.end),l=i.length>0?xt(i):"",c=El(a.byDate,this.dateRange.start,this.dateRange.end),f=Object.keys(a.byDate).filter($=>{const w=new Date($),S=new Date(this.dateRange.start),A=new Date(this.dateRange.end);return w>=S&&w<=A}).sort(),v=new Map;let p=0;f.forEach($=>{const w=a.byDate[$]?.recipes||[];w.length>0&&(v.set($,w),p+=w.length)});const m=Nn(a,this.dateRange.end),g=m.filter($=>$.q>0),_=m.filter($=>$.q<0).map($=>({q:Math.abs($.q),u:$.u}));e.set(n,{quantities:i,formattedQuantities:l,nbRecipes:p,totalAssiettes:c,stockResult:m,availableQuantities:g,missingQuantities:_,formattedAvailableQuantities:Mn(m),hasAvailable:g.length>0,hasMissing:_.length>0,concernedDates:f,recipesByDate:v})}return e});get productsStatsByDateRange(){return s(this.#k)}set productsStatsByDateRange(e){b(this.#k,e)}#T=V(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(e=>e.pFrais).length,surgel:this.enrichedProducts.filter(e=>e.pSurgel).length,merged:this.enrichedProducts.filter(e=>e.isMerged).length}));get stats(){return s(this.#T)}set stats(e){b(this.#T,e)}#C=V(()=>{const e=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(e)]});get uniqueStores(){return s(this.#C)}set uniqueStores(e){b(this.#C,e)}#N=V(()=>{const e=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(e)]});get uniqueWho(){return s(this.#N)}set uniqueWho(e){b(this.#N,e)}#M=V(()=>{const e=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(e)]});get uniqueProductTypes(){return s(this.#M)}set uniqueProductTypes(e){b(this.#M,e)}#D=V(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((i,l)=>i.$id.localeCompare(l.$id));if(s(this.#t).groupBy==="none")return{"":r};const n=Object.groupBy(r,i=>s(this.#t).groupBy==="store"?i.storeInfo?.storeName||"Non défini":i.productType||"Non défini"),a=Object.keys(n).sort((i,l)=>i===""?1:l===""?-1:i.localeCompare(l)),o={};return a.forEach(i=>{o[i]=n[i]}),o});get groupedFilteredProducts(){return s(this.#D)}set groupedFilteredProducts(e){b(this.#D,e)}async initialize(e,r){if(!e?.trim())throw new Error("mainId invalide fourni");if(s(this.#u)&&s(this.#r)===e){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${e}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${e}`),b(this.#r,e,!0),b(this.#s,r,!0);try{this.#n=await Ul(e)}catch(n){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",n),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#i,null);try{if(await this.#L(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let a;a=await Ba(r),console.log(`[ProductsStore] Hugo chargé: ${a.ingredients.length} ingrédients`),b(this.#v,a.hugoContentHash,!0),Bl(a.ingredients,e).forEach(l=>{this.#e.set(l.$id,l)}),b(this.#o,[...a.allDates],!0),await to(e)||await ro(a.mainGroup_id,a.hugoContentHash,a.allDates,a.name),await this.#I()}this.initializeDateRange(),await this.#B(),b(this.#u,!0);const n=this.#X();this.#_=eo(e,n),this.#W(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#O(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(n){const a=n instanceof Error?n.message:"Erreur lors de l'initialisation";throw b(this.#i,a,!0),console.error("[ProductsStore]",a,n),n}}async#L(){if(this.#n)try{const e=await this.#n.loadProducts();e.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();b(this.#a,r.lastSync,!0),b(this.#o,[...r.allDates],!0),b(this.#v,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${e.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(e){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",e)}}async#B(){if(s(this.#r)){b(this.#c,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const e=await Gs(s(this.#r),{lastSync:s(this.#a),limit:Ua});if(console.log(`[ProductsStore] ${e.length} produits récupérés depuis Appwrite`),e.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#R(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await fl(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>ql);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#a),Ua);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#P(o,a)}})}this.#U(),await this.#z(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(e){throw console.error("[ProductsStore] Erreur lors du sync:",e),e}finally{b(this.#c,!1)}}}async#z(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:s(this.#a),allDates:[...s(this.#o)],hugoContentHash:s(this.#v)}),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#ee(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.updateLastSync(s(this.#a)),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#I(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.updateLastSync(s(this.#a)),await this.#n.updateAllDates([...s(this.#o)]),await this.#n.updateHugoContentHash(s(this.#v)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(e){console.error("[ProductsStore] Erreur persistance cache complet:",e)}}async#$(e){if(!(!this.#n||e.length===0))try{const r=e.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#U(){b(this.#a,new Date().toISOString(),!0)}async#O(){if(!s(this.#s)||s(this.#d))return!1;try{const e=await Ll(s(this.#v),s(this.#s));return e&&!s(this.#w)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${s(this.#s)}, analyse approfondie en cours...`),b(this.#w,!0),await this.#H()),b(this.#y,new Date,!0),e}catch(e){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",e),!1}}async#H(){if(!s(this.#s)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const e=await Ba(s(this.#s)),r=await Gl(this.#e,e);if(console.log(`[ProductsStore  - hugo change] ${r.summary}`),r.overrideConflicts.length>0&&(b(this.#g,r.overrideConflicts,!0),bt.error(`${r.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>Mr.modalOverride.isOpen=!0}})),r.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${r.mergedProductsUpdated.length} produits fusionnés modifiés`),r.removed.length>0){const n=r.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length);n.length>0&&console.log(`[ProductsStore] ℹ️ ${n.length} ingrédients supprimés conservés (données utilisateur)`)}b(this.#o,[...e.allDates],!0),b(this.#v,e.hugoContentHash,!0),this.initializeDateRange(),await this.#I(),(r.added.length||r.updated.length||r.removed.length)&&bt.success(r.summary),b(this.#w,!1)}catch(e){console.error("[ProductsStore] Erreur sync Hugo:",e),bt.error("Erreur lors de la mise à jour Hugo")}}#W(){this.#m&&clearInterval(this.#m),this.#m=setInterval(async()=>{await this.#O()},6e4)}#G(){this.#m&&(clearInterval(this.#m),this.#m=null)}#R(e,r){return r?this.#S(e,r):this.#V(e)}#V(e){const r=Pr(Qr(e.purchases??[])),n=[],{numeric:a,display:o}=Kr(n,r),i=Jt(e.stockReel)??null,l=xt(r),c=e.store?Jt(e.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:e.$id,$createdAt:e.$createdAt,$updatedAt:e.$updatedAt,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:e.isSynced,mainId:e.mainId,status:e.status,who:e.who,store:e.store,stockReel:e.stockReel,previousNames:e.previousNames,isMerged:e.isMerged,mergedFrom:e.mergedFrom,mergeDate:e.mergeDate,mergeReason:e.mergeReason,mergedInto:e.mergedInto,totalNeededOverride:e.totalNeededOverride,purchases:e.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:Jt(e.totalNeededOverride),displayTotalOverride:(()=>{const v=Jt(e.totalNeededOverride);return v?xt([v.totalOverride]):""})()}}#S(e,r){const n=e.purchases??r.purchases,a=Pr(Qr(n??[])),o=xt(a),{numeric:i,display:l}=Kr(r.totalNeededArray,a),c=e.stockReel??r.stockReel,f=c?Jt(c):r.stockParsed,v=e.store??r.store,p=v?Jt(v):r.storeInfo,m=f?`${f.quantity} ${f.unit}`:o;return e.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:e.$updatedAt,productName:e.productName??r.productName,isSynced:e.isSynced??r.isSynced,mainId:e.mainId??r.mainId,status:e.status??r.status,who:e.who??r.who,store:v,stockReel:c,purchases:n,previousNames:e.previousNames??r.previousNames,isMerged:e.isMerged??r.isMerged,mergedFrom:e.mergedFrom??r.mergedFrom,mergeDate:e.mergeDate??r.mergeDate,mergeReason:e.mergeReason??r.mergeReason,mergedInto:e.mergedInto??r.mergedInto,totalNeededOverride:e.totalNeededOverride??r.totalNeededOverride,storeInfo:p,stockParsed:f,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:m,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:Jt(e.totalNeededOverride??r.totalNeededOverride),displayTotalOverride:(()=>{const g=Jt(e.totalNeededOverride??r.totalNeededOverride);return g?xt([g.totalOverride]):""})()}}#te(e){e.totalPurchasesArray=Pr(Qr(e.purchases??[]));const{numeric:r,display:n}=Kr(e.totalNeededArray,e.totalPurchasesArray);e.missingQuantityArray=r,e.displayMissingQuantity=n,e.displayTotalPurchases=xt(e.totalPurchasesArray)}#re(e){e.length&&(e.forEach(r=>this.#x(r)),console.log(`[ProductsStore] ${e.length} produits upserted`))}#x(e){const r=this.#e.get(e.$id),n=this.#R(e,r);this.#e.set(e.$id,n)}#Q(e){this.#e.delete(e)}async#K(e){if(!e.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",e.$id),[];const r=e.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#Z(r,e),r}async#Y(e){if(e.products?.length){const r=e.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(r,e),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Fs([e.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#P(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#J(e){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===e));return r.forEach(n=>{this.#x(n)}),r.map(n=>n.$id)}#q(e){return{...e,products:e.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:e.mainId}}#Z(e,r){const n=this.#q(r),a=[];e.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#S({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#P(e,r){const n=this.#q(r),a=[];e.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#S({...i,purchases:f,status:"active"},i);a.push(v)}else{const f=this.#S({...i,purchases:[...l,r],status:"active"},i);a.push(f)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#X(){return{onProductCreate:e=>{if(this.#x(e),this.#n){const r=this.#e.get(e.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:e=>{if(this.#x(e),this.#n){const r=this.#e.get(e.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:e=>{this.#Q(e),this.#n&&this.#n.deleteProduct(e).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async e=>{const r=await this.#K(e);await this.#$(r)},onPurchaseUpdate:async e=>{const r=await this.#Y(e);await this.#$(r)},onPurchaseDelete:async e=>{const r=await this.#J(e);await this.#$(r)},onConnect:()=>{b(this.#l,!0)},onDisconnect:()=>{b(this.#l,!1)},onError:e=>{console.error("[ProductsStore] Erreur realtime:",e)}}}#F(e){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!e.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!e.storeInfo?.storeName||!s(this.#t).selectedStores.includes(e.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!e.who||!e.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!e.productType||!s(this.#t).selectedProductTypes.includes(e.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&e.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&e.pSurgel))}setSearchQuery=$l(e=>{s(this.#t).searchQuery=e},()=>500);toggleProductType(e){const r=s(this.#t).selectedProductTypes.indexOf(e);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(e)}toggleTemperature(e){const r=s(this.#t).selectedTemperatures.indexOf(e);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(e)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(e){s(this.#t).groupBy=e}toggleStore(e){const r=s(this.#t).selectedStores.indexOf(e);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(e)}toggleWho(e){const r=s(this.#t).selectedWho.indexOf(e);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(e)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(e){s(this.#t).sortColumn===e?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=e,s(this.#t).sortDirection="asc")}clearFilters(){b(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(e){return s(this.#t).sortColumn?[...e].sort((r,n)=>{let a=r[s(this.#t).sortColumn],o=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#t).sortDirection==="asc"?-1:1:a>o?s(this.#t).sortDirection==="asc"?1:-1:0}):e}getEnrichedProductById(e){return this.#e.get(e)??null}hasConversions(e){const r=this.#e.get(e);return r?.byDate?Al(r.byDate):!1}get enrichedProductsCount(){return this.#e.size}async forceReload(e,r){await this.clearCache(),await this.initialize(e,r)}async clearCache(){this.#e.clear(),b(this.#o,[],!0),b(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(e,r){const n=r?"isSyncing":"active";e.forEach(a=>{const o=this.#e.get(a);if(o){const i={...o,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${e.length} produits → ${n}`)}clearSyncStatus(){const e=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&e.push(r);e.length>0&&(this.setSyncStatus(e,!1),console.log(`[ProductsStore] Nettoyage de ${e.length} produits en statut "isSyncing"`))}destroy(){this.#_?.(),this.#_=null,this.#G(),this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const X=new Zl;function Ha(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const e=new URLSearchParams(window.location.search).get("listId");if(!e||!e.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return e.trim()}function Xl(t){const e=t.substring(0,4),r=t.slice(-10);return`${e}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Fl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ec=Ui("<svg><!><!></svg>");function pe(t,e){H(e,!0);const r=Oe(e,"color",3,"currentColor"),n=Oe(e,"size",3,24),a=Oe(e,"strokeWidth",3,2),o=Oe(e,"absoluteStrokeWidth",3,!1),i=Oe(e,"iconNode",19,()=>[]),l=fe(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=ec();$a(c,p=>({...Fl,...l,width:n(),height:n(),stroke:r(),"stroke-width":p,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var f=u(c);lt(f,17,i,Zr,(p,m)=>{var g=V(()=>Fa(s(m),2));let _=()=>s(g)[0],$=()=>s(g)[1];var w=U(),S=I(w);Yi(S,_,!0,(A,k)=>{$a(A,()=>({...$()}))}),h(p,w)});var v=d(f);ie(v,()=>e.children??ne),h(t,c),W()}function Bn(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];pe(t,he({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function tc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];pe(t,he({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function rc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];pe(t,he({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function nc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];pe(t,he({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function ac(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];pe(t,he({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Xr(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];pe(t,he({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function sc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];pe(t,he({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function io(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];pe(t,he({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function oc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];pe(t,he({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function ic(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];pe(t,he({name:"circle-arrow-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function lc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];pe(t,he({name:"circle-arrow-right"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Wa(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];pe(t,he({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function cc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];pe(t,he({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function uc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];pe(t,he({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function dc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];pe(t,he({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function vc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];pe(t,he({name:"clipboard-pen-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function fc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];pe(t,he({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function hc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];pe(t,he({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function ca(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];pe(t,he({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function pc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];pe(t,he({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function mc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];pe(t,he({name:"euro"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function sn(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];pe(t,he({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function lo(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];pe(t,he({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function gc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];pe(t,he({name:"info"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function _c(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];pe(t,he({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function bc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];pe(t,he({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function yc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];pe(t,he({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function co(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];pe(t,he({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function wc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];pe(t,he({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Sc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];pe(t,he({name:"message-circle-more"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function xc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];pe(t,he({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function uo(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];pe(t,he({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function vo(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];pe(t,he({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function $c(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];pe(t,he({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function tn(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];pe(t,he({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Pc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];pe(t,he({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Ec(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];pe(t,he({name:"plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Ac(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];pe(t,he({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function kc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];pe(t,he({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Tc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];pe(t,he({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Cc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];pe(t,he({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Nc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];pe(t,he({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function fo(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];pe(t,he({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function er(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];pe(t,he({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function ho(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];pe(t,he({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function zn(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];pe(t,he({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function nr(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];pe(t,he({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function po(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];pe(t,he({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Mc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];pe(t,he({name:"thermometer"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Sn(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];pe(t,he({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function mo(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];pe(t,he({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function rn(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];pe(t,he({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Un(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];pe(t,he({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Dc(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];pe(t,he({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Rt(t,e){H(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];pe(t,he({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=U(),l=I(i);ie(l,()=>e.children??ne),h(a,i)},$$slots:{default:!0}})),W()}function Ic(t,e){const r=t.reduce((a,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return a+i+l},0),n=e.invoiceTotal?1:0;return r+n}async function Oc(t,e){const r=t.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const a=e.purchaseStatus||"delivered";let o=e.purchaseDeliveryDate||null;a==="delivered"&&!o&&(o=new Date().toISOString());const i=t.flatMap(c=>c.missingQuantities.map(f=>({productId:c.productId,quantity:f.q,unit:f.u,status:a,notes:e.notes||"",store:e.store||"",who:e.who||null,price:null,orderDate:null,deliveryDate:o,createdBy:n})));return{mainId:t[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:e}}async function Rc(t,e,r){if(!e?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};e.forEach(m=>{m.productData&&(m.productData.mainId=t)});const n=Ic(e,r);console.log(`[Appwrite Interactions] Achat groupé: ${e.length} produits, ${n} opérations totales`);const a=100,o=[];if(n<=a)o.push(e);else{let m=[],g=0;for(const _ of e){const $=(_.isSynced?0:1)+_.missingQuantities.length;g+$>a?(m.length>0&&o.push(m),m=[_],g=$):(m.push(_),g+=$)}m.length>0&&o.push(m)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let m=0;m<o.length;m++){const g=o[m];console.log(`[Appwrite Interactions] Exécution du lot ${m+1}/${o.length} (${g.length} produits)`);try{const _=await Oc(g,r),$=await qc(_);if(i.push($),$.success)l+=$.productsCreated,c+=$.purchasesCreated,f+=$.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${m+1}: ${$.error}`);break}}catch(_){const $=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${m+1}:`,_),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:$,timestamp:new Date().toISOString()});break}}const v=i.every(m=>m.success),p=i.some(m=>!m.success);return{success:v,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:p?"Un ou plusieurs lots ont échoué":void 0}}async function qc(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:t};console.log(`[Appwrite Interactions] Exécution du lot: ${t.batchData.productsToCreate.length} produits à créer, ${t.batchData.purchasesToCreate.length} achats à créer`);const a=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(e){console.error("[Appwrite Interactions] Erreur exécution lot:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:t.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var jc=(t,e,r)=>e(s(r).id),Lc=x('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),Bc=x('<span class="flex items-center gap-1"><!> </span>'),zc=x('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Uc=x('<div class="flex flex-wrap gap-2"></div> <!>',1);function Fr(t,e){H(e,!0);let r=Oe(e,"badgeSize",3,"badge-lg"),n=Oe(e,"color",3,"primary"),a=Oe(e,"badgeStyle",3,""),o=Oe(e,"onToggleItem",3,()=>{}),i=Oe(e,"showStats",3,!1),l=Oe(e,"showIcon",3,!0),c=R(Re({}));sr(()=>{const w={};e.items.forEach(S=>{w[S.id]=S.selected??!0}),b(c,w,!0)});function f(w){s(c)[w]=!s(c)[w],o()(w)}const v=V(()=>Object.values(s(c)).filter(Boolean).length),p=V(()=>Object.values(s(c)).filter(w=>!w).length);var m=Uc(),g=I(m);lt(g,21,()=>e.items,w=>w.id,(w,S)=>{const A=V(()=>s(c)[s(S).id]);var k=Lc();k.__click=[jc,f,S];var E=u(k);{var y=F=>{var ee=U(),se=I(ee);fr(se,()=>s(S).icon,(be,O)=>{O(be,{class:"h-3 w-3",get title(){return s(S).title}})}),h(F,ee)};T(E,F=>{s(S).icon&&F(y)})}var P=d(E,2),C=u(P),M=d(P,2);{var K=F=>{var ee=U(),se=I(ee);{var be=D=>{Xr(D,{size:16})},O=D=>{Ec(D,{size:16})};T(se,D=>{s(A)?D(be):D(O,!1)})}h(F,ee)};T(M,F=>{l()&&F(K)})}L(()=>{Te(k,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(A)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),rr(k,"title",s(A)?"Retirer de la liste":"Réajouter à la liste"),j(C,s(S).label)}),h(w,k)});var _=d(g,2);{var $=w=>{var S=zc(),A=u(S),k=u(A),E=u(k);Xr(E,{class:"text-success h-3 w-3"});var y=d(E),P=d(k,2);{var C=F=>{var ee=Bc(),se=u(ee);Rt(se,{class:"text-error h-3 w-3"});var be=d(se);L(()=>j(be,` ${s(p)??""} retirés`)),h(F,ee)};T(P,F=>{s(p)>0&&F(C)})}var M=d(A,2),K=u(M);L(()=>{j(y,` ${s(v)??""} actifs`),j(K,`Total: ${e.items.length??""} items`)}),h(w,S)};T(_,w=>{i()&&w($)})}h(t,m),W()}Fe(["click"]);function Hc(t,e){b(e,!s(e))}var Wc=x('<span class="text-base-content font-semibold"> </span>'),Gc=x('<div class="text-base-content/80 flex-1"> </div>'),Vc=x('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Qc=x('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Kc=x('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function go(t,e){let r=Oe(e,"icon",3,gc),n=Oe(e,"class",3,""),a=Oe(e,"initiallyOpen",3,!1),o=r(),i=R(Re(a())),l=Re(e.children);var c=Kc(),f=u(c);f.__click=[Hc,i];var v=u(f),p=u(v);o(p,{size:24,class:"text-base-content me-4 flex-shrink-0"});var m=d(p,2);{var g=E=>{var y=Wc(),P=u(y);L(()=>j(P,e.title)),h(E,y)};T(m,E=>{e.title&&E(g)})}var _=d(v,2);{var $=E=>{var y=Gc(),P=u(y);L(()=>j(P,e.contentVisible)),h(E,y)};T(_,E=>{e.contentVisible&&E($)})}var w=d(_,2);{var S=E=>{var y=Vc(),P=u(y),C=u(P);{var M=ee=>{var se=Et("en savoir plus");h(ee,se)},K=ee=>{var se=Et("masquer");h(ee,se)};T(C,ee=>{s(i)?ee(K,!1):ee(M)})}var F=d(P,2);{let ee=V(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(i)?"rotate-180":""}`);io(F,{get class(){return s(ee)}})}h(E,y)};T(w,E=>{l&&E(S)})}var A=d(f,2);{var k=E=>{var y=Qc(),P=u(y),C=u(P);ie(C,()=>e.children??ne),L(()=>Te(y,1,`overflow-hidden transition-all duration-200 ${s(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h(E,y)};T(A,E=>{l&&E(k)})}L(()=>{Te(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Rs(c,e.style),Te(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),rr(f,"aria-expanded",s(i))}),h(t,c)}Fe(["click"]);async function Yc(t,e,r,n,a,o,i,l){if(!(!s(e)||s(r))){b(r,!0),b(n,null),b(a,null);try{const c=`FACTURE_${Date.now()}`,f=s(o).map(g=>g.$id);X.setSyncStatus(f,!0);const v=[];for(const g of s(o))v.push({productId:g.$id,isSynced:g.isSynced,productData:g,missingQuantities:g.missingQuantityArray||[]});const p={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(o).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const m=await Rc(X.currentMainId,v,p);if(m.success)b(a,{purchases:m.totalPurchasesCreated,expense:m.totalExpensesCreated>0,batches:m.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${m.totalProductsCreated} produits synchronisés, ${m.totalPurchasesCreated} achats créés, ${m.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(m.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";b(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),X.clearSyncStatus()}finally{b(r,!1)}}}function Ga(t,e,r){s(e)||r.onClose()}var Jc=x('<div class="alert alert-error"><!> <span> </span></div>'),Zc=x('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),Xc=x(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),Fc=x("<option> </option>"),eu=x("<option> </option>"),tu=x('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),ru=x('<span class="loading loading-spinner loading-sm"></span> En cours...',1),nu=x("<!> ",1),au=x(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function su(t,e){H(e,!0);let r=R(!1),n=R(null),a=R(null),o=Re({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=R(Re(new Set));sr(()=>{b(i,new Set(e.products.map(ge=>ge.$id)),!0)});const l=V(()=>e.products.filter(ge=>s(i).has(ge.$id))),c=V(()=>s(l).length!==0),f=V(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function v(ge){const ke=new Set(s(i));ke.has(ge)?ke.delete(ge):ke.add(ge),b(i,ke,!0)}const p=V(()=>e.products.map(ge=>({id:ge.$id,label:ge.productName,title:ge.productName})));var m=au(),g=u(m),_=u(g),$=u(_),w=u($);er(w,{class:"h-5 w-5"});var S=d(w),A=d($,2);A.__click=[Ga,r,e];var k=u(A);Rt(k,{class:"h-4 w-4"});var E=d(_,2),y=u(E);{var P=ge=>{var ke=Jc(),Ce=u(ke);Sn(Ce,{class:"h-4 w-4"});var Ge=d(Ce,2),Ke=u(Ge);L(()=>j(Ke,s(n))),h(ge,ke)};T(y,ge=>{s(n)&&ge(P)})}var C=d(y,2);{var M=ge=>{var ke=Zc(),Ce=u(ke);Xr(Ce,{class:"h-4 w-4"});var Ge=d(Ce,2),Ke=u(Ge),mt=d(Ke);{var kt=Xe=>{var ot=Et("+ 1 dépense globale");h(Xe,ot)};T(mt,Xe=>{s(a).expense&&Xe(kt)})}var tt=d(mt,2);{var gt=Xe=>{var ot=Et();L(()=>j(ot,`(traité en ${s(a).batches??""} lots)`)),h(Xe,ot)};T(tt,Xe=>{s(a).batches&&s(a).batches>1&&Xe(gt)})}L(()=>j(Ke,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),h(ge,ke)};T(C,ge=>{s(a)&&ge(M)})}var K=d(C,2),F=u(K);go(F,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(ge,ke)=>{var Ce=Xc();h(ge,Ce)},$$slots:{default:!0}});var ee=d(K,2),se=d(u(ee),2),be=u(se),O=u(be),D=u(O);nr(D,{class:"h-4 w-4 opacity-50"});var B=d(D,2),le=d(O,2);lt(le,21,()=>X.uniqueStores,Zr,(ge,ke)=>{var Ce=Fc(),Ge=u(Ce),Ke={};L(()=>{j(Ge,s(ke)),Ke!==(Ke=s(ke))&&(Ce.value=(Ce.__value=s(ke))??"")}),h(ge,Ce)});var G=d(be,2),te=u(G),oe=u(te);rn(oe,{class:"h-4 w-4 opacity-50"});var Se=d(oe,2),z=d(te,2);lt(z,21,()=>X.uniqueWho,Zr,(ge,ke)=>{var Ce=eu(),Ge=u(Ce),Ke={};L(()=>{j(Ge,s(ke)),Ke!==(Ke=s(ke))&&(Ce.value=(Ce.__value=s(ke))??"")}),h(ge,Ce)});var Q=d(G,2),re=u(Q),ue=u(re);mc(ue,{class:"h-4 w-4 opacity-50"});var xe=d(ue,2),J=d(se,2),me=u(J),q=u(me),Z=u(q);Z.value=Z.__value="delivered";var Ae=d(Z);Ae.value=Ae.__value="ordered";var we=d(q,2),Ee=d(me,2);{var ae=ge=>{var ke=tu(),Ce=u(ke),Ge=d(u(Ce),2);L(()=>Ge.disabled=s(r)),Ie(Ge,()=>o.deliveryDate,Ke=>o.deliveryDate=Ke),h(ge,ke)};T(Ee,ge=>{o.status==="ordered"&&ge(ae)})}var ye=d(J,2),je=u(ye),de=u(je);uo(de,{class:"h-4 w-4 opacity-50"});var We=d(de,2),ce=d(ee,2),$e=d(u(ce),2);Fr($e,{get items(){return s(p)},onToggleItem:v,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Ue=d(ce,2),_e=u(Ue);_e.__click=[Ga,r,e];var st=d(_e,2);st.__click=[Yc,c,r,n,a,l,o,e];var qe=u(st);{var Pe=ge=>{var ke=ru();h(ge,ke)},Ze=ge=>{var ke=nu(),Ce=I(ke);er(Ce,{class:"h-4 w-4"});var Ge=d(Ce);L(()=>j(Ge,` Valider ${s(l).length??""} produit(s)`)),h(ge,ke)};T(qe,ge=>{s(r)?ge(Pe):ge(Ze,!1)})}L(()=>{j(S,` ${s(f)??""}`),A.disabled=s(r),B.disabled=s(r),Se.disabled=s(r),xe.disabled=s(r),q.disabled=s(r),Te(we,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),We.disabled=s(r),_e.disabled=s(r),st.disabled=s(r)||!s(c)}),Ie(B,()=>o.store,ge=>o.store=ge),Ie(Se,()=>o.who,ge=>o.who=ge),Ie(xe,()=>o.expense,ge=>o.expense=ge),cr(q,()=>o.status,ge=>o.status=ge),Ie(We,()=>o.notes,ge=>o.notes=ge),h(t,m),W()}Fe(["click"]);function Hn(t){switch(t.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:tc};case"animaux":return{displayName:"Viandes et Poissons",icon:rc};case"legumes":return{displayName:"Fruits et Légumes",icon:ac};case"sucres":return{displayName:"Sucrées",icon:nc};case"lof":return{displayName:"L.O.F",icon:pc};case"autres":return{displayName:"Autres",icon:sc};case"epices":return{displayName:"Assaisonnements",icon:bc};case"frais":return{displayName:"Produits Frais",icon:Tc};default:return{displayName:t,icon:tn}}}function Va(t,e){return e==="kg"?{quantity:t*1e3,unit:"gr."}:e==="l."?{quantity:t*1e3,unit:"ml"}:{quantity:t,unit:e}}function ua(t,e){return e==="gr."&&t>=1e3?`${(t/1e3).toFixed(1)} kg`:e==="ml"&&t>=1e3?`${(t/1e3).toFixed(1)} l`:`${t} ${e}`}function xn(t){if(!t)return"-";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}function ou(t){if(!t)return"-";try{const e=JSON.parse(t);if(Array.isArray(e)&&e.length>0)return e.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return t}return t}function Wn(t){switch(t){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function Qa(t){return t?xn(t):"-"}function iu(t){if(!t?.length)return[];const e=t.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=Wn(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:lu(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(e)}function lu(t){switch(t){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function cu(t){let e=R(!1),r=R(null);const n=V(()=>(console.log(`[ProductModalState] Recalculating product ${t}`),X.getEnrichedProductById(t))),a=V(()=>s(n)?.who??[]),o=V(()=>s(n)?.stockParsed??null),i=V(()=>s(n)?.purchases??[]),l=V(()=>s(n)?.byDate?Tl(s(n).byDate):[]),c=Re({purchase:{quantity:null,unit:"",store:"",who:Mr.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=R(!1),v=R(null);sr(()=>{!s(n)||s(f)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=Mr.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??"",c.store.comment=s(n).storeInfo?.storeComment??null,c.who=s(n)?.who?[...s(n).who]:[],b(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),b(f,!0))});const p=V(()=>s(v)?{store:JSON.stringify(c.store)!==JSON.stringify(s(v).store),stock:m(),who:JSON.stringify(c.who)!==JSON.stringify(s(v).whoList)}:{store:!1,stock:!1,who:!1});function m(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?s(o)?c.stock.quantity.toString()!==s(o).quantity||c.stock.unit!==s(o).unit||(c.stock.notes||"")!==(s(o).notes||""):!0:!1}const g=V(()=>!!(s(v)&&(s(p).store||s(p).stock||s(p).who)));let _=R(null);const $=V(()=>s(_)?s(i).find(O=>O.$id===s(_))??null:null);async function w(O,D){b(e,!0),b(r,null);try{const B=await O();return D&&S("success",D),B}catch(B){const le=B instanceof Error?B.message:"Une erreur est survenue";return b(r,le,!0),S("error",le),console.error("[ProductModalState]",B),null}finally{b(e,!1)}}function S(O,D){const B=new CustomEvent("toast",{detail:{type:O,message:D}});window.dispatchEvent(B)}async function A(){s(n)&&await w(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!X.currentMainId)throw new Error("mainId non disponible");const{quantity:O,unit:D}=Va(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await zt(s(n).$id,{},G=>X.getEnrichedProductById(G)));const B=c.purchase.status||"delivered";let le=c.purchase.deliveryDate||null;B==="delivered"&&!le&&(le=new Date().toISOString()),await Js({products:[s(n).$id],mainId:X.currentMainId,unit:D,quantity:O,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:B,orderDate:c.purchase.orderDate||null,deliveryDate:le}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function k(O){b(_,O.$id,!0)}function E(){b(_,null)}async function y(O){O.$id&&await w(async()=>{const{quantity:D,unit:B}=Va(O.quantity,O.unit),le=O.status||null;let G=O.deliveryDate||null;le==="delivered"&&!G&&(G=new Date().toISOString()),await Zs(O.$id,{unit:B,quantity:D,store:O.store||null,who:O.who||null,notes:O.notes||"",price:O.price||null,status:le,orderDate:O.orderDate||null,deliveryDate:G}),b(_,null)},"Achat modifié avec succès")}async function P(O){const D=s(i).find(B=>B.$id===O);D&&confirm(`Supprimer cet achat (${D.quantity} ${D.unit}) ?`)&&await w(async()=>{await Xs(O)},"Achat supprimé avec succès")}async function C(){s(n)&&await w(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const O={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Ln(s(n).$id,JSON.stringify(O))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await zt(s(n).$id,{stockReel:JSON.stringify(O)},D=>X.getEnrichedProductById(D))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function M(){s(n)&&confirm("Supprimer le stock actuel ?")&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await Ln(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await zt(s(n).$id,{stockReel:null},O=>X.getEnrichedProductById(O)))},"Stock supprimé")}async function K(O){s(n)&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, setWho normal...`),await Qs(s(n).$id,O)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await zt(s(n).$id,{who:O},D=>X.getEnrichedProductById(D)))},"Volontaires mis à jour")}async function F(O){s(n)&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await Vs(s(n).$id,O)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await zt(s(n).$id,{store:JSON.stringify(O)},D=>X.getEnrichedProductById(D)))},"Magasin mis à jour")}async function ee(O){s(n)&&await w(async()=>{s(n).isSynced?await ia(s(n).$id,O,!0):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await zt(s(n).$id,{totalNeededOverride:JSON.stringify(O)},D=>X.getEnrichedProductById(D)))},"Override appliqué")}async function se(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await w(async()=>{await Ks(s(n).$id,!0)},"Override supprimé")}async function be(){!s(n)||!s(g)||await w(async()=>{const O={};if(s(p).stock&&c.stock.quantity&&c.stock.unit){const D={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};O.stockReel=JSON.stringify(D)}if(s(p).who&&(O.who=c.who),s(p).store){const D={storeName:c.store.name||"",storeComment:c.store.comment||void 0};O.storeInfo=D}Object.keys(O).length>0&&(await Ys(s(n).$id,O,D=>X.getEnrichedProductById(D)),b(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return s(e)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(_)},get editingPurchaseData(){return s($)},forms:c,addPurchase:A,startEditPurchase:k,cancelEditPurchase:E,updateEditedPurchase:y,removePurchase:P,setStock:C,removeStock:M,setWho:K,updateStore:F,setOverride:ee,removeOverride:se,saveAllChanges:be,get hasChanges(){return s(p)},get hasAnyChanges(){return s(g)},formatQuantity:ua,formatDate:xn,formatDisplayQuantity:ou}}function uu(t,e,r){e()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function du(t,e,r){const n=e().editingPurchaseData;!n||!r(n)||e().updateEditedPurchase(n)}function vu(t,e){e().cancelEditPurchase()}var fu=x('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),hu=x('<span class="loading loading-spinner loading-sm"></span>'),pu=x('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),mu=x('<span class="loading loading-spinner loading-sm"></span>'),gu=x('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Livré</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),_u=(t,e,r)=>e(s(r)),bu=(t,e,r)=>e(s(r).$id),yu=x('<span class="loading loading-spinner loading-sm"></span>'),wu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Su=x('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),xu=x(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function $u(t,e){H(e,!0);let r=Oe(e,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(de){return de.quantity!==null&&de.quantity!==0&&de.unit?.trim()!==""}function o(de){r().removePurchase(de)}function i(de){r().startEditPurchase(de)}var l=xu(),c=u(l),f=u(c);er(f,{class:"h-5 w-5"});var v=d(c,2),p=u(v),m=d(u(p),2),g=u(m),_=u(g);tn(_,{class:"h-4 w-4 opacity-50"});var $=d(_,2),w=d(g,2),S=u(w);S.value=S.__value="";var A=d(S);A.value=A.__value="kg";var k=d(A);k.value=k.__value="gr.";var E=d(k);E.value=E.__value="l.";var y=d(E);y.value=y.__value="ml";var P=d(y);P.value=P.__value="unité";var C=d(P);C.value=C.__value="bottes";var M=d(w,2),K=u(M);nr(K,{class:"h-4 w-4 opacity-50"});var F=d(K,2),ee=d(M,2),se=u(ee);rn(se,{class:"h-4 w-4 opacity-50"});var be=d(se,2),O=d(ee,2),D=d(u(O),2),B=d(m,2),le=u(B),G=u(le);uo(G,{class:"h-4 w-4 opacity-50"});var te=d(G,2),oe=d(B,2),Se=u(oe),z=u(Se),Q=u(z),re=u(Q);re.value=re.__value="delivered";var ue=d(re);ue.value=ue.__value="ordered";var xe=d(z,2),J=d(Se,2);{var me=de=>{var We=fu(),ce=d(u(We),2);Ie(ce,()=>r().forms.purchase.deliveryDate,$e=>r().forms.purchase.deliveryDate=$e),h(de,We)};T(J,de=>{r().forms.purchase.status==="ordered"&&de(me)})}var q=d(oe,2),Z=u(q);Z.__click=[uu,n,r];var Ae=u(Z);{var we=de=>{var We=hu();h(de,We)},Ee=de=>{var We=Et("Ajouter l'achat");h(de,We)};T(Ae,de=>{r().loading?de(we):de(Ee,!1)})}var ae=d(v,2);{var ye=de=>{var We=pu(),ce=u(We);er(ce,{class:"mx-auto mb-2 h-12 w-12"}),h(de,We)},je=de=>{var We=Su(),ce=u(We),$e=d(u(ce));lt($e,21,()=>r().purchasesList,Ue=>Ue.$id,(Ue,_e,st)=>{var qe=U(),Pe=I(qe);{var Ze=ke=>{var Ce=gu(),Ge=u(Ce),Ke=u(Ge),mt=u(Ke),kt=d(mt,2),tt=u(kt);tt.value=tt.__value="kg";var gt=d(tt);gt.value=gt.__value="gr.";var Xe=d(gt);Xe.value=Xe.__value="l.";var ot=d(Xe);ot.value=ot.__value="ml";var qt=d(ot);qt.value=qt.__value="unité";var dt=d(qt);dt.value=dt.__value="bottes";var jt=d(Ge),Lt=u(jt),Yt=d(jt),Tt=u(Yt),Y=d(Yt),ve=u(Y),Me=u(ve);Me.value=Me.__value="ordered";var Ve=d(Me);Ve.value=Ve.__value="delivered";var Qe=d(Y),Be=u(Qe),Ye=d(Qe),He=u(Ye),Ct=d(Ye),qr=u(Ct),St=d(Ct),rt=u(St),Bt=d(St),or=u(Bt),Nt=u(or);Nt.__click=[du,r,a];var jr=u(Nt);{var yo=ze=>{var xo=mu();h(ze,xo)},wo=ze=>{Cc(ze,{class:"h-3 w-3"})};T(jr,ze=>{r().loading?ze(yo):ze(wo,!1)})}var da=d(Nt,2);da.__click=[vu,r];var So=u(da);Rt(So,{class:"h-3 w-3"}),L(ze=>Nt.disabled=ze,[()=>r().loading||!a(s(_e))]),Ie(mt,()=>s(_e).quantity,ze=>s(_e).quantity=ze),cr(kt,()=>s(_e).unit,ze=>s(_e).unit=ze),Ie(Lt,()=>s(_e).store,ze=>s(_e).store=ze),Ie(Tt,()=>s(_e).who,ze=>s(_e).who=ze),cr(ve,()=>s(_e).status,ze=>s(_e).status=ze),Ie(Be,()=>s(_e).orderDate,ze=>s(_e).orderDate=ze),Ie(He,()=>s(_e).deliveryDate,ze=>s(_e).deliveryDate=ze),Ie(qr,()=>s(_e).price,ze=>s(_e).price=ze),Ie(rt,()=>s(_e).notes,ze=>s(_e).notes=ze),h(ke,Ce)},ge=ke=>{var Ce=wu(),Ge=u(Ce),Ke=u(Ge),mt=d(Ge),kt=u(mt),tt=d(mt),gt=u(tt),Xe=d(tt),ot=u(Xe),qt=u(ot),dt=d(Xe),jt=u(dt),Lt=d(dt),Yt=u(Lt),Tt=d(Lt),Y=u(Tt),ve=d(Tt),Me=u(ve),Ve=d(ve),Qe=u(Ve),Be=u(Qe);Be.__click=[_u,i,_e];var Ye=u(Be);zn(Ye,{class:"h-4 w-4"});var He=d(Be,2);He.__click=[bu,o,_e];var Ct=u(He);{var qr=rt=>{var Bt=yu();h(rt,Bt)},St=rt=>{Rt(rt,{class:"h-4 w-4"})};T(Ct,rt=>{r().loading?rt(qr):rt(St,!1)})}L((rt,Bt,or,Nt,jr)=>{j(Ke,rt),j(kt,s(_e).store||"-"),j(gt,s(_e).who||"-"),Te(ot,1,`badge badge-sm ${Bt??""}`),j(qt,or),j(jt,Nt),j(Yt,jr),j(Y,s(_e).price?`${s(_e).price}€`:"-"),j(Me,s(_e).notes||"-"),He.disabled=r().loading},[()=>ua(s(_e).quantity,s(_e).unit),()=>Wn(s(_e).status).class,()=>Wn(s(_e).status).text,()=>Qa(s(_e).orderDate),()=>Qa(s(_e).deliveryDate)]),h(ke,Ce)};T(Pe,ke=>{r().editingPurchaseId===s(_e).$id?ke(Ze):ke(ge,!1)})}h(Ue,qe)}),h(de,We)};T(ae,de=>{r().purchasesList.length===0?de(ye):de(je,!1)})}L(de=>{Te(xe,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),Z.disabled=de},[()=>r().loading||!n()]),Ie($,()=>r().forms.purchase.quantity,de=>r().forms.purchase.quantity=de),cr(w,()=>r().forms.purchase.unit,de=>r().forms.purchase.unit=de),Ie(F,()=>r().forms.purchase.store,de=>r().forms.purchase.store=de),Ie(be,()=>r().forms.purchase.who,de=>r().forms.purchase.who=de),Ie(D,()=>r().forms.purchase.price,de=>r().forms.purchase.price=de),Ie(te,()=>r().forms.purchase.notes,de=>r().forms.purchase.notes=de),cr(Q,()=>r().forms.purchase.status,de=>r().forms.purchase.status=de),h(t,l),W()}Fe(["click"]);async function Pu(t,e){await e()?.removeStock()}var Eu=x(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),Au=(t,e)=>{e().forms.stock.quantity=null,e().forms.store.comment=""},ku=x('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Tu=x('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Cu=x('<span class="loading loading-spinner loading-xs"></span>'),Nu=x('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),Mu=x(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function Du(t,e){H(e,!0);let r=Oe(e,"modalState",7);var n=Mu(),a=u(n),o=u(a);Bn(o,{class:"h-5 w-5"});var i=d(a,2),l=u(i),c=u(l),f=u(c),v=d(c,2),p=u(v);go(p,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(D,B)=>{var le=Eu();h(D,le)},$$slots:{default:!0}});var m=d(v,2),g=u(m),_=u(g);tn(_,{class:"h-4 w-4 opacity-50"});var $=d(_,2),w=d(g,2),S=u(w);S.value=S.__value="";var A=d(S);A.value=A.__value="kg";var k=d(A);k.value=k.__value="gr.";var E=d(k);E.value=E.__value="l.";var y=d(E);y.value=y.__value="ml";var P=d(y);P.value=P.__value="unité";var C=d(P);C.value=C.__value="bottes";var M=d(m,2),K=u(M),F=d(M,2),ee=u(F);ee.__click=[Au,r];var se=d(i,2);{var be=D=>{var B=ku(),le=u(B);Bn(le,{class:"mx-auto mb-2 h-12 w-12"}),h(D,B)},O=D=>{var B=Nu(),le=u(B),G=d(u(le),2),te=u(G),oe=d(u(te),2),Se=u(oe),z=d(te,2),Q=d(u(z),2),re=u(Q),ue=d(z,2);{var xe=we=>{var Ee=Tu(),ae=d(u(Ee),2),ye=u(ae);L(()=>j(ye,r().stockParsed.notes)),h(we,Ee)};T(ue,we=>{r().stockParsed.notes&&we(xe)})}var J=d(G,2),me=u(J);me.__click=[Pu,r];var q=u(me);{var Z=we=>{var Ee=Cu();h(we,Ee)},Ae=we=>{var Ee=Et("Supprimer le stock");h(we,Ee)};T(q,we=>{r().loading?we(Z):we(Ae,!1)})}L(we=>{j(Se,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),j(re,we),me.disabled=r().loading},[()=>xn(r().stockParsed.dateTime)]),h(D,B)};T(se,D=>{r().stockParsed?D(O,!1):D(be)})}L(D=>{j(f,`Déclarer le stock réel du ${D??""}`),ee.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),Ie($,()=>r().forms.stock.quantity,D=>r().forms.stock.quantity=D),cr(w,()=>r().forms.stock.unit,D=>r().forms.stock.unit=D),Ie(K,()=>r().forms.stock.notes,D=>r().forms.stock.notes=D),h(t,n),W()}Fe(["click"]);function Iu(t,e,r){e().forms.who=[...e().whoList],b(r,"")}var Ou=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},Ru=x('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function qu(t,e){H(e,!0);let r=Oe(e,"modalState",7),n=R("");const a=V(()=>{const C=new Set([...X.uniqueWho,...r().forms.who]);return Array.from(C).map(M=>({id:M,label:M,selected:r().forms.who.includes(M)}))});function o(C){const M=C.trim();M&&!r().forms.who.includes(M)&&(r().forms.who=[...r().forms.who,M])}function i(C){r().forms.who=r().forms.who.filter(M=>M!==C)}function l(C){r().forms.who.includes(C)?i(C):o(C)}function c(){s(n).trim()&&(o(s(n)),b(n,""))}var f=Ru(),v=u(f),p=u(v),m=d(u(p),4),g=u(m),_=u(g),$=u(_);rn($,{class:"h-4 w-4 opacity-50"});var w=d($,2);w.__keydown=[Ou,c];var S=d(_,2);S.__click=c;var A=u(S);mo(A,{size:16});var k=d(g,2),E=d(u(k),2);Fr(E,{get items(){return s(a)},onToggleItem:l,showIcon:!0});var y=d(m,2),P=u(y);P.__click=[Iu,r,n],L(C=>{w.disabled=r().loading,S.disabled=C,P.disabled=r().loading},[()=>r().loading||!s(n).trim()]),Ie(w,()=>s(n),C=>b(n,C)),h(t,f),W()}Fe(["keydown","click"]);var ju=x('<div class="mb-1 text-xs opacity-70"> </div>'),Lu=(t,e,r)=>e(s(r)),Bu=x("<button><!> </button>"),zu=x('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function _o(t,e){H(e,!0);let r=Oe(e,"maxSuggestions",3,8),n=Oe(e,"title",3,"Suggestions :"),a=Oe(e,"buttonSize",3,"btn-xs"),o=Oe(e,"buttonVariant",3,"btn-soft"),i=Oe(e,"disabled",3,!1);const l=V(()=>e.suggestions.slice(0,r()));function c(m){!i()&&!m.disabled&&e.onSuggestionClick(m)}var f=U(),v=I(f);{var p=m=>{var g=zu(),_=u(g);{var $=S=>{var A=ju(),k=u(A);L(()=>j(k,n())),h(S,A)};T(_,S=>{n()&&S($)})}var w=d(_,2);lt(w,21,()=>s(l),S=>S.id,(S,A)=>{var k=Bu();k.__click=[Lu,c,A];var E=u(k);{var y=C=>{var M=U(),K=I(M);fr(K,()=>s(A).icon,(F,ee)=>{ee(F,{class:"h-3 w-3"})}),h(C,M)};T(E,C=>{s(A).icon&&C(y)})}var P=d(E);L(()=>{Te(k,1,`btn ${a()??""} ${o()??""}`),k.disabled=i()||s(A).disabled,rr(k,"title",s(A).disabled?"Déjà sélectionné":s(A).label),j(P,` ${s(A).label??""}`)}),h(S,k)}),h(m,g)};T(v,m=>{s(l).length>0&&m(p)})}h(t,f),W()}Fe(["click"]);var Uu=(t,e)=>{t.key==="Enter"&&e()},Hu=(t,e)=>{e().forms.store.name="",e().forms.store.comment=""},Wu=x(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function Gu(t,e){H(e,!0);let r=Oe(e,"modalState",7);const n=V(()=>r()?.hasChanges?.store||!1);async function a(){if(!s(n))return;const A={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(A)}var o=Wu(),i=u(o),l=u(i),c=d(u(l),4),f=u(c),v=u(f),p=u(v);nr(p,{class:"h-4 w-4 opacity-50"});var m=d(p,2);m.__keydown=[Uu,a];var g=d(v,2);{var _=A=>{{let k=V(()=>X.uniqueStores.map(E=>({id:E,label:E,disabled:E===r().forms.store.name})));_o(A,{get suggestions(){return s(k)},onSuggestionClick:E=>{r().forms.store.name=E.label},buttonVariant:"btn-outline"})}};T(g,A=>{X.uniqueStores.length>0&&A(_)})}var $=d(f,2),w=d(c,2),S=u(w);S.__click=[Hu,r],L(()=>S.disabled=r().loading),Ie(m,()=>r().forms.store.name,A=>r().forms.store.name=A),Ie($,()=>r().forms.store.comment,A=>r().forms.store.comment=A),h(t,o),W()}Fe(["keydown","click"]);var Vu=x("<fieldset><legend><!> </legend> <!></fieldset>");function Hr(t,e){let r=Oe(e,"bgClass",3,"bg-base-100");var n=Vu(),a=u(n),o=u(a);{var i=f=>{const v=V(()=>e.iconComponent);var p=U(),m=I(p);fr(m,()=>s(v),(g,_)=>{_(g,{size:16,class:"mr-1"})}),h(f,p)};T(o,f=>{e.iconComponent&&f(i)})}var l=d(o),c=d(a,2);ie(c,()=>e.children??ne),L(()=>{Te(n,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Te(a,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),j(l,` ${e.legend??""}`)}),h(t,n)}async function Qu(t,e,r,n,a,o){if(!e.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await e.modalState.setOverride(i),b(o,!1)}async function Ku(t,e,r){e.modalState&&(await e.modalState.removeOverride(),b(r,!1))}var Yu=x('<div class="stat "><div class="stat-title text-sm">Ancienne quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),Ju=x('<div class="stat"><div class="stat-title text-sm">"Quantité redéfinie manuellement"</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic"></div></div>'),Zu=(t,e)=>b(e,!0),Xu=x('<div class="text-error text-sm">Limite de caractères atteinte</div>'),Fu=(t,e)=>b(e,!1),ed=x('<span class="loading loading-spinner loading-sm"></span>'),td=x('<span class="loading loading-spinner loading-sm"></span>'),rd=x(`<div><div class="card-body p-4"><div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-end gap-2"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div></div></div>`),nd=x('<div class="stats not-md:stats-vertical shadow"><!> <div class="stat"><div class="stat-title text-sm">Quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">Recettes actuelles</div></div> <!></div> <div class="flex justify-end gap-2"><button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button></div> <!>',1),ad=x('<div class="mb-2 space-y-4"><!></div>');function sd(t,e){H(e,!0);const r=V(()=>e.modalState.product?.totalNeededOverrideParsed),n=V(()=>e.modalState.product?.displayTotalOverride);let a=V(()=>s(r)?.hasUnresolvedChangedSinceOverride),o=R(!1),i=R(Re(e.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||e.modalState.product?.totalNeededArray[0]?.q||0)),l=R(Re(e.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||e.modalState.product?.totalNeededArray[0]?.u||"")),c=R(Re(e.modalState.product?.totalNeededOverrideParsed?.comment||"")),f=V(()=>s(i)>0&&s(l).trim()!=="");var v=U(),p=I(v);{var m=g=>{var _=ad(),$=u(_);Hr($,{legend:"Besoin total",children:(w,S)=>{var A=nd(),k=I(A),E=u(k);{var y=D=>{var B=Yu(),le=d(u(B),2),G=u(le);L(()=>j(G,e.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay)),h(D,B)};T(E,D=>{e.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay&&s(a)&&D(y)})}var P=d(E,2),C=d(u(P),2),M=u(C),K=d(P,2);{var F=D=>{var B=Ju(),le=d(u(B),2),G=u(le);L(()=>j(G,s(n))),h(D,B)};T(K,D=>{s(n)&&s(r)&&D(F)})}var ee=d(k,2),se=u(ee);se.__click=[Zu,o];var be=d(ee,2);{var O=D=>{var B=rd(),le=u(B),G=u(le),te=u(G),oe=u(te);Pc(oe,{class:"h-4 w-4 opacity-50"});var Se=d(oe,2),z=d(te,2),Q=u(z);Q.value=Q.__value="";var re=d(Q);re.value=re.__value="kg";var ue=d(re);ue.value=ue.__value="gr.";var xe=d(ue);xe.value=xe.__value="l.";var J=d(xe);J.value=J.__value="ml";var me=d(J);me.value=me.__value="unité";var q=d(me);q.value=q.__value="bottes";var Z=d(G,2),Ae=u(Z),we=d(u(Ae),2),Ee=d(we,2);{var ae=Pe=>{var Ze=Xu();h(Pe,Ze)};T(Ee,Pe=>{s(c).length>=250&&Pe(ae)})}var ye=d(Z,2),je=u(ye);je.__click=[Fu,o];var de=d(je,2);de.__click=[Ku,e,o];var We=u(de);{var ce=Pe=>{var Ze=ed();h(Pe,Ze)},$e=Pe=>{var Ze=Et();L(()=>j(Ze,`Réinitialiser le total calculé (${e.modalState.product.displayTotalNeeded??""}).`)),h(Pe,Ze)};T(We,Pe=>{e.modalState.loading?Pe(ce):Pe($e,!1)})}var Ue=d(de,2);Ue.__click=[Qu,e,i,l,c,o];var _e=u(Ue);{var st=Pe=>{var Ze=td();h(Pe,Ze)},qe=Pe=>{var Ze=Et("Appliquer");h(Pe,Ze)};T(_e,Pe=>{e.modalState.loading?Pe(st):Pe(qe,!1)})}L(()=>{Te(B,1,`card border-base-300 border ${s(o)?"bg-base-200":"bg-base-100"}`),de.disabled=e.modalState.loading,Ue.disabled=e.modalState.loading||!s(f)}),Ie(Se,()=>s(i),Pe=>b(i,Pe)),cr(z,()=>s(l),Pe=>b(l,Pe)),Ie(we,()=>s(c),Pe=>b(c,Pe)),h(D,B)};T(be,D=>{s(o)&&D(O)})}L(()=>{j(M,e.modalState.product.displayTotalNeeded),se.disabled=s(o)}),h(w,A)},$$slots:{default:!0}}),h(g,_)};T(p,g=>{e.modalState.product&&g(m)})}h(t,v),W()}Fe(["click"]);var od=x('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),id=x('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),ld=x('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),cd=x('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function ud(t,e){H(e,!0);const r=V(()=>e.modalState.recipes);var n=cd(),a=I(n);sd(a,{get modalState(){return e.modalState}});var o=d(a,2),i=u(o),l=u(i);ca(l,{class:"h-5 w-5"});var c=d(i,2);{var f=p=>{var m=od(),g=u(m);tn(g,{class:"mx-auto mb-2 h-12 w-12"}),h(p,m)},v=p=>{var m=ld(),g=u(m),_=d(u(g));lt(_,21,()=>s(r),Zr,($,w)=>{var S=id(),A=u(S),k=u(A),E=d(A),y=u(E),P=d(E),C=u(P);L(M=>{j(k,`${s(w).r??""} (${(s(w).a||"-")??""} c.)`),j(y,`${(s(w).q||s(w).qEq)??""} ${(s(w).u||s(w).uEq)??""}`),j(C,M)},[()=>xn(s(w).date)]),h($,S)}),h(p,m)};T(c,p=>{s(r).length===0?p(f):p(v,!1)})}h(t,n),W()}function dd(t,e,r){s(e).saveAllChanges().then(()=>{r.onClose()})}var vd=x('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),fd=x('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),hd=(t,e)=>e("recettes"),pd=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),md=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),gd=(t,e)=>e("magasins"),_d=x('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),bd=(t,e)=>e("volontaires"),yd=x('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),wd=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Sd=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),xd=(t,e)=>e("stock"),$d=x('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Pd=x('<span class="badge badge-sm badge-secondary ml-1">1</span>'),Ed=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Ad=(t,e)=>e("achats"),kd=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Td=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Cd=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Nd=x('<span class="loading loading-spinner loading-sm"></span>'),Md=x('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),Dd=x('<div id="product_modal"><div class="modal-box flex fixed top-0 overflow-auto h-lvh w-lvw flex-col md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Id(t,e){H(e,!0);let r=Oe(e,"initialTab",3,"recettes"),n=V(()=>cu(e.productId)),a=R(Re(r()));function o(w){b(a,w,!0)}var i=Dd(),l=u(i),c=u(l),f=u(c);{var v=w=>{var S=vd(),A=I(S),k=u(A),E=d(A,2),y=u(E),P=u(y),C=d(y,2),M=d(u(C));L(()=>{j(k,s(n).product?.productName),j(P,s(n).product?.productType),j(M,` ${s(n).product?.displayTotalNeeded??""}`)}),h(w,S)},p=w=>{var S=fd();h(w,S)};T(f,w=>{s(n)&&s(n).product?w(v):w(p,!1)})}var m=d(f,2);m.__click=function(...w){e.onClose?.apply(this,w)};var g=u(m);Rt(g,{class:"h-4 w-4"});var _=d(c,2);{var $=w=>{var S=Md(),A=I(S),k=u(A);k.__click=[hd,o];var E=u(k);ca(E,{class:"mr-1 h-5 w-5"});var y=d(E,2);{var P=ce=>{var $e=pd(),Ue=u($e);L(()=>j(Ue,s(n).product?.nbRecipes)),h(ce,$e)},C=ce=>{var $e=md();h(ce,$e)};T(y,ce=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?ce(P):ce(C,!1)})}var M=d(k,2);M.__click=[gd,o];var K=u(M);nr(K,{class:"mr-1 h-5 w-5"});var F=d(K,2);{var ee=ce=>{var $e=_d();h(ce,$e)};T(F,ce=>{s(n).hasChanges?.store&&ce(ee)})}var se=d(M,2);se.__click=[bd,o];var be=u(se);Un(be,{class:"mr-1 h-5 w-5"});var O=d(be,2);{var D=ce=>{var $e=yd();h(ce,$e)},B=ce=>{var $e=U(),Ue=I($e);{var _e=qe=>{var Pe=wd(),Ze=u(Pe);L(()=>j(Ze,s(n).product?.who.length)),h(qe,Pe)},st=qe=>{var Pe=Sd();h(qe,Pe)};T(Ue,qe=>{s(n).product?.who&&s(n).product?.who.length>0?qe(_e):qe(st,!1)},!0)}h(ce,$e)};T(O,ce=>{s(n).hasChanges?.who?ce(D):ce(B,!1)})}var le=d(se,2);le.__click=[xd,o];var G=u(le);Bn(G,{class:"mr-1 h-5 w-5"});var te=d(G,2);{var oe=ce=>{var $e=$d();h(ce,$e)},Se=ce=>{var $e=U(),Ue=I($e);{var _e=qe=>{var Pe=Pd();h(qe,Pe)},st=qe=>{var Pe=Ed();h(qe,Pe)};T(Ue,qe=>{s(n).stockParsed?qe(_e):qe(st,!1)},!0)}h(ce,$e)};T(te,ce=>{s(n).hasChanges?.stock?ce(oe):ce(Se,!1)})}var z=d(le,2);z.__click=[Ad,o];var Q=u(z);er(Q,{class:"mr-1 h-5 w-5"});var re=d(Q,2);{var ue=ce=>{var $e=kd(),Ue=u($e);L(()=>j(Ue,s(n).purchasesList.length)),h(ce,$e)},xe=ce=>{var $e=Td();h(ce,$e)};T(re,ce=>{s(n).purchasesList.length>0?ce(ue):ce(xe,!1)})}var J=d(A,2),me=u(J);{var q=ce=>{var $e=Cd(),Ue=u($e);Rt(Ue,{class:"h-4 w-4"});var _e=d(Ue,2),st=u(_e);L(()=>j(st,`erreur : ${s(n).error??""}`)),h(ce,$e)};T(me,ce=>{s(n).error&&ce(q)})}var Z=d(me,2),Ae=u(Z);Vi(Ae,()=>s(a),ce=>{var $e=U(),Ue=I($e);{var _e=qe=>{ud(qe,{get modalState(){return s(n)}})},st=qe=>{var Pe=U(),Ze=I(Pe);{var ge=Ce=>{$u(Ce,{get modalState(){return s(n)}})},ke=Ce=>{var Ge=U(),Ke=I(Ge);{var mt=tt=>{Du(tt,{get modalState(){return s(n)}})},kt=tt=>{var gt=U(),Xe=I(gt);{var ot=dt=>{qu(dt,{get modalState(){return s(n)}})},qt=dt=>{var jt=U(),Lt=I(jt);{var Yt=Tt=>{Gu(Tt,{get modalState(){return s(n)}})};T(Lt,Tt=>{s(a)==="magasins"&&Tt(Yt)},!0)}h(dt,jt)};T(Xe,dt=>{s(a)==="volontaires"?dt(ot):dt(qt,!1)},!0)}h(tt,gt)};T(Ke,tt=>{s(a)==="stock"?tt(mt):tt(kt,!1)},!0)}h(Ce,Ge)};T(Ze,Ce=>{s(a)==="achats"?Ce(ge):Ce(ke,!1)},!0)}h(qe,Pe)};T(Ue,qe=>{s(a)==="recettes"?qe(_e):qe(st,!1)})}h(ce,$e)});var we=d(J,2),Ee=u(we);Ee.__click=function(...ce){e.onClose?.apply(this,ce)};var ae=u(Ee),ye=d(Ee,2);ye.__click=[dd,n,e];var je=u(ye);{var de=ce=>{var $e=Nd();h(ce,$e)},We=ce=>{var $e=Et("Tout enregistrer");h(ce,$e)};T(je,ce=>{s(n).loading?ce(de):ce(We,!1)})}L(()=>{Te(k,1,`tab ${s(a)==="recettes"?"tab-active":""}`),Te(M,1,`tab ${s(a)==="magasins"?"tab-active":""}`),Te(se,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),Te(le,1,`tab ${s(a)==="stock"?"tab-active":""}`),Te(z,1,`tab ${s(a)==="achats"?"tab-active":""}`),j(ae,s(n)?.hasAnyChanges?"Annuler":"Fermer"),ye.disabled=s(n).loading||!s(n).hasAnyChanges}),h(w,S)};T(_,w=>{s(n)&&w($)})}L(()=>Te(i,1,`modal ${(e.productId&&"modal-open")??""}`)),h(t,i),W()}Fe(["click"]);var Od=(t,e,r)=>e(r),Rd=x("<button><span> </span> <!></button>"),qd=(t,e)=>e(),jd=x('<div class="flex justify-end"><button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button></div>'),Ld=x('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),Bd=x('<div class=" flex flex-wrap gap-1"></div> <!>',1);function zd(t,e){H(e,!0);let r=Oe(e,"availableDates",19,()=>[]),n=Oe(e,"currentRange",19,()=>({start:null,end:null})),a=R(Re(n().start)),o=R(Re(n().end));const i=V(()=>r().length>0&&s(a)===r()[0]&&s(o)===r()[r().length-1]);sr(()=>{b(a,n().start,!0),b(o,n().end,!0)});function l(S){s(a)===S&&s(o)===S?p():new Date(S)<new Date(s(a))?b(a,S,!0):(new Date(S)>new Date(s(o))||b(a,S,!0),b(o,S,!0)),e.onRangeChange(s(a),s(o))}function c(S){return new Date(S)>=new Date(s(a))&&new Date(S)<=new Date(s(o))?"btn-soft btn-secondary":"btn-dash btn-secondary opacity-80"}function f(S){return new Date(S).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function v(S){const k=new Date(S).getUTCHours();return k===12?"sun":k===20?"moon":k===8?"cloud":null}function p(){r().length!==0&&(b(a,r()[0],!0),b(o,r()[r().length-1],!0),e.onRangeChange(s(a),s(o)))}var m=Bd(),g=I(m);lt(g,22,r,S=>S,(S,A)=>{var k=Rd();k.__click=[Od,l,A];var E=u(k),y=u(E),P=d(E,2);{var C=K=>{po(K,{size:16})},M=K=>{var F=U(),ee=I(F);{var se=O=>{vo(O,{size:16})},be=O=>{var D=U(),B=I(D);{var le=G=>{hc(G,{size:16})};T(B,G=>{v(A)==="cloud"&&G(le)},!0)}h(O,D)};T(ee,O=>{v(A)==="moon"?O(se):O(be,!1)},!0)}h(K,F)};T(P,K=>{v(A)==="sun"?K(C):K(M,!1)})}L((K,F)=>{Te(k,1,`btn btn-sm ${K??""}`),j(y,F)},[()=>c(A),()=>f(A)]),h(S,k)});var _=d(g,2);{var $=S=>{var A=jd(),k=u(A);k.__click=[qd,p],h(S,A)},w=S=>{var A=Ld();h(S,A)};T(_,S=>{s(i)?S(w,!1):S($)})}h(t,m),W()}Fe(["click"]);var Ud=()=>X.clearFilters(),Hd=t=>X.setSearchQuery(t.currentTarget.value),Wd=()=>X.setSearchQuery(""),Gd=()=>X.setGroupBy("none"),Vd=()=>X.setGroupBy("store"),Qd=()=>X.setGroupBy("productType"),Kd=(t,e)=>X.toggleProductType(e),Yd=x("<button><!> </button>"),Jd=()=>X.toggleTemperature("frais"),Zd=()=>X.toggleTemperature("surgele"),Xd=()=>X.clearTypeAndTemperatureFilters(),Fd=x('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),ev=x('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),tv=x('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div> <!>',1),rv=(t,e)=>X.toggleStore(e),nv=x("<button> </button>"),av=()=>X.clearStoreFilters(),sv=x('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),ov=x('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),iv=(t,e)=>X.toggleWho(e),lv=x("<button> </button>"),cv=()=>X.clearWhoFilters(),uv=x('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),dv=x('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),vv=x('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function fv(t,e){H(e,!0);const r=V(()=>X.filters),n=V(()=>X.uniqueStores),a=V(()=>X.uniqueWho),o=V(()=>X.uniqueProductTypes);var i=vv(),l=I(i),c=u(l),f=u(c);lo(f,{class:"h-5 w-5"});var v=d(c,2);v.__click=[Ud];var p=u(v);sn(p,{class:"h-4 w-4"});var m=d(l,2),g=u(m),_=d(u(g),2),$=u(_);Nc($,{class:"h-4 w-4"});var w=d($,2);w.__input=[Hd];var S=d(w,2);S.__click=[Wd];var A=u(S);Rt(A,{class:"h-4 w-4"});var k=d(g,2),E=d(u(k),2),y=u(E);y.__change=[Gd];var P=d(y,2);P.__change=[Vd];var C=d(P,2);C.__change=[Qd];var M=d(k,2);{var K=B=>{Hr(B,{legend:"Date incluses",bgClass:"bg-base-100",children:(le,G)=>{zd(le,{get availableDates(){return X.availableDates},get currentRange(){return X.dateRange},onRangeChange:(te,oe)=>X.setDateRange(te,oe)})},$$slots:{default:!0}})};T(M,B=>{X.hasSingleDateEvent||B(K)})}var F=d(M,2);{var ee=B=>{Hr(B,{legend:"Types & Température",get iconComponent(){return Mc},children:(le,G)=>{var te=tv(),oe=I(te);lt(oe,20,()=>s(o),q=>q,(q,Z)=>{const Ae=V(()=>Hn(Z));var we=Yd();we.__click=[Kd,Z];var Ee=u(we);fr(Ee,()=>s(Ae).icon,(ye,je)=>{je(ye,{class:"mr-1 h-5 w-5"})});var ae=d(Ee);L(ye=>{Te(we,1,`btn btn-sm ${ye??""}`),j(ae,` ${s(Ae).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-secondary":s(r).selectedProductTypes.includes(Z)?"btn-secondary":"btn-dash btn-secondary"]),h(q,we)});var Se=d(oe,2),z=u(Se);z.__click=[Jd];var Q=u(z);fo(Q,{class:"h-5 w-5"});var re=d(z,2);re.__click=[Zd];var ue=u(re);ho(ue,{class:"h-5 w-5"});var xe=d(Se,2);{var J=q=>{var Z=Fd();Z.__click=[Xd];var Ae=u(Z);sn(Ae,{size:16}),h(q,Z)},me=q=>{var Z=ev();h(q,Z)};T(xe,q=>{s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0?q(J):q(me,!1)})}L((q,Z)=>{Te(z,1,`btn btn-sm ${q??""}`),Te(re,1,`btn btn-sm ${Z??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(le,te)},$$slots:{default:!0}})};T(F,B=>{s(o).length>0&&B(ee)})}var se=d(F,2);{var be=B=>{Hr(B,{legend:"Magasins",get iconComponent(){return nr},children:(le,G)=>{var te=ov(),oe=u(te);lt(oe,16,()=>s(n),Q=>Q,(Q,re)=>{var ue=nv();ue.__click=[rv,re];var xe=u(ue);L(J=>{Te(ue,1,`btn btn-sm ${J??""}`),j(xe,re)},[()=>s(r).selectedStores.length===0?"btn-soft btn-secondary":s(r).selectedStores.includes(re)?"btn-secondary":"btn-dash btn-secondary"]),h(Q,ue)});var Se=d(oe,2);{var z=Q=>{var re=sv();re.__click=[av];var ue=u(re);sn(ue,{size:16}),h(Q,re)};T(Se,Q=>{s(r).selectedStores.length>0&&Q(z)})}h(le,te)},$$slots:{default:!0}})};T(se,B=>{s(n).length>0&&B(be)})}var O=d(se,2);{var D=B=>{Hr(B,{legend:"Qui",get iconComponent(){return rn},children:(le,G)=>{var te=dv(),oe=u(te);lt(oe,16,()=>s(a),Q=>Q,(Q,re)=>{var ue=lv();ue.__click=[iv,re];var xe=u(ue);L(J=>{Te(ue,1,`btn btn-sm ${J??""}`),j(xe,re)},[()=>s(r).selectedWho.length===0?" btn-soft btn-secondary":s(r).selectedWho.includes(re)?" btn-secondary":"btn-dash btn-secondary"]),h(Q,ue)});var Se=d(oe,2);{var z=Q=>{var re=uv();re.__click=[cv];var ue=u(re);sn(ue,{size:16}),h(Q,re)};T(Se,Q=>{s(r).selectedWho.length>0&&Q(z)})}h(le,te)},$$slots:{default:!0}})};T(O,B=>{s(a).length>0&&B(D)})}L(()=>{v.disabled=!X.hasFilters,tl(w,s(r).searchQuery),S.disabled=!s(r).searchQuery,kn(y,s(r).groupBy==="none"),kn(P,s(r).groupBy==="store"),kn(C,s(r).groupBy==="productType")}),h(t,i),W()}Fe(["click","input","change"]);var hv=x('<div class="tooltip text-xs font-normal"><!></div>');function pv(t,e){let r=Oe(e,"iconSize",3,24),n=e.icon||void 0;var a=hv(),o=u(a);{var i=l=>{n(l,{get size(){return r()},class:`align-top
`})};T(o,l=>{e.icon&&l(i)})}L(()=>rr(a,"data-tip",e.tip)),h(t,a)}var mv=x('<div class="text-neutral-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),gv=(t,e,r)=>e.onOpenGroupEditModal("store",s(r).map(n=>n.$id),s(r)),_v=(t,e,r)=>e.onOpenGroupEditModal("who",s(r).map(n=>n.$id),s(r)),bv=(t,e,r)=>e.onOpenGroupPurchaseModal(s(r)),yv=x(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),wv=x('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 @md:min-w-48"><!></div> <div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div></div>'),Sv=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),xv=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),$v=x('<div class="text-base-content/60 text-sm font-normal"> </div>'),Pv=x('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),Ev=x('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),Av=x('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),kv=x('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),Tv=x('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),Cv=x('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),Nv=(t,e,r)=>e.onOpenModal(s(r).$id,"magasins"),Mv=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"magasins"),Dv=x('<div class="ml-1"><!></div>'),Iv=x('<div class="ml-1"> </div> <!>',1),Ov=x('<div class="ml-1 text-sm font-medium">?</div>'),Rv=(t,e,r)=>e.onOpenModal(s(r).$id,"volontaires"),qv=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"volontaires"),jv=x('<span class="text-base-content/50 text-xs"> </span>'),Lv=x('<div class="ml-1 flex gap-1"> <!></div>'),Bv=x('<div class="ml-1 text-sm font-medium">?</div>'),zv=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),Uv=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),Hv=x('<div class="flex items-center gap-2 tooltip" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),Wv=x("<span> </span>"),Gv=x('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),Vv=(t,e,r)=>{t.stopPropagation(),e.onQuickValidation(s(r))},Qv=x('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M.625 0a.625.625 0 1 0 0 1.25h1.818l.205 1.94l.644 6.105a1.626 1.626 0 0 0 1.619 1.455h6.208c.746 0 1.397-.506 1.579-1.23l1.253-5a1.626 1.626 0 0 0-1.579-2.02h-8.54L3.627.56A.625.625 0 0 0 3.006 0zm3.91 9.164L3.964 3.75h8.408c.247 0 .425.23.366.466l-1.253 5a.38.38 0 0 1-.366.284H4.911a.376.376 0 0 1-.376-.336m5.72-3.134a.75.75 0 0 0-1.129-.988l-1.48 1.69l-.526-.395a.75.75 0 1 0-.9 1.2l1.083.813a.75.75 0 0 0 1.015-.106zm1.816 6.845a1.125 1.125 0 1 0-2.25 0a1.125 1.125 0 0 0 2.25 0M4.446 11.75a1.125 1.125 0 1 1 0 2.25a1.125 1.125 0 0 1 0-2.25" clip-rule="evenodd"></path></svg> <span class="text-xs"> </span> <!></button>'),Kv=x(`<div id="override_alert" class="alert alert-warning px-1 py-0.5 alert-soft mt-1"><!> <span>Les quantités des menus ont été modifiées depuis l'attribution manuelle des "besoins"</span></div>`),Yv=(t,e,r)=>e.onOpenModal(s(r).$id,"achats"),Jv=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"achats"),Zv=x('<div><!> <span class="text-sm font-medium text-nowrap"> </span></div>'),Xv=x('<span class="text-base-content/50 text-xs italic">aucun</span>'),Fv=x('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div></div> <div class="flex flex-wrap gap-3 min-h-14" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex gap-x-4 gap-y-0 flex-wrap"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="flex items-center gap-4 self-end ms-auto"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex-1 min-w-[200px] items-center justify-between gap-2 flex cursor-pointer rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap gap-0 items-start self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div class="text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity group-hover:opacity-100 sm:opacity-0">ajouter un achat</div></div> <div class="flex flex-wrap gap-1.5"><!> <!></div></div></div></div></div>'),ef=x('<!> <div class="space-y-1"></div>',1),tf=x('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),rf=x('<div class="space-y-4 rounded-lg"></div> <!>',1);function nf(t,e){H(e,!0);const r={Package:tn,MessageCircleQuestionMark:xc,ShoppingCart:er,Clock:fc,CircleCheck:cc,CircleX:uc,ClipboardCheck:dc,PackageCheck:$c},n={quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedAvailableQuantities:"Équilibré",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map},a=V(()=>X.groupedFilteredProducts),o=V(()=>X.filters);var i=rf(),l=I(i);lt(l,21,()=>Object.entries(s(a)),([v,p])=>v,(v,p)=>{var m=V(()=>Fa(s(p),2));let g=()=>s(m)[0];const $=V(()=>s(m)[1]);var w=ef(),S=I(w);{var A=E=>{const y=V(()=>Hn(g()));var P=wv(),C=u(P),M=u(C);{var K=oe=>{var Se=Et();L(()=>j(Se,`🏪 ${g()??""} (${s($).length??""})`)),h(oe,Se)},F=oe=>{var Se=U(),z=I(Se);{var Q=ue=>{var xe=mv(),J=u(xe);fr(J,()=>s(y).icon,(we,Ee)=>{Ee(we,{class:"h-4 w-4"})});var me=d(J,2),q=u(me),Z=d(me,2),Ae=u(Z);L(()=>{j(q,s(y).displayName),j(Ae,`(${s($).length??""})`)}),h(ue,xe)},re=ue=>{var xe=Et();L(()=>j(xe,`📦 ${g()??""} (${s($).length??""})`)),h(ue,xe)};T(z,ue=>{s(o).groupBy==="productType"?ue(Q):ue(re,!1)},!0)}h(oe,Se)};T(M,oe=>{s(o).groupBy==="store"?oe(K):oe(F,!1)})}var ee=d(C,2),se=u(ee);se.__click=[gv,e,$];var be=u(se);nr(be,{size:16});var O=d(be,4);zn(O,{size:16});var D=d(se,2);D.__click=[_v,e,$];var B=u(D);Un(B,{size:16});var le=d(B,4);zn(le,{size:16});var G=d(D,2);{var te=oe=>{var Se=yv();Se.__click=[bv,e,$];var z=u(Se);er(z,{size:16});var Q=d(z,4);Wa(Q,{size:16}),h(oe,Se)};T(G,oe=>{s($).some(Se=>Se.displayMissingQuantity!=="✅ Complet")&&oe(te)})}h(E,P)};T(S,E=>{g()!==""&&E(A)})}var k=d(S,2);lt(k,21,()=>s($),E=>E.$id,(E,y)=>{const P=V(()=>X.productsStatsByDateRange.get(s(y).$id)||n),C=V(()=>Hn(s(y).productType)),M=V(()=>iu(s(y).purchases||[])),K=V(()=>s(y).totalNeededOverrideParsed);var F=Fv(),ee=u(F),se=u(ee),be=u(se);be.__click=[Sv,e,y],be.__keydown=[xv,e,y];var O=u(be),D=u(O);fr(D,()=>s(C).icon,(Y,ve)=>{ve(Y,{class:"text-base-content/80 h-4 w-4"})});var B=d(D),le=d(B);{var G=Y=>{var ve=$v(),Me=u(ve);L(()=>j(Me,`Ancien: ${s(y).previousNames[0]??""}`)),h(Y,ve)};T(le,Y=>{s(y).previousNames&&s(y).previousNames.length>0&&Y(G)})}var te=d(O,2),oe=u(te);{var Se=Y=>{var ve=Pv(),Me=u(ve);fo(Me,{class:"text-success h-4 w-4"}),h(Y,ve)};T(oe,Y=>{s(y).pFrais&&Y(Se)})}var z=d(oe,2);{var Q=Y=>{var ve=Ev(),Me=u(ve);ho(Me,{class:"text-info h-4 w-4"}),h(Y,ve)};T(z,Y=>{s(y).pSurgel&&Y(Q)})}var re=d(te,2);{var ue=Y=>{var ve=Av(),Me=u(ve);co(Me,{class:"h-4 w-4 animate-spin"}),h(Y,ve)};T(re,Y=>{s(y).status==="isSyncing"&&Y(ue)})}var xe=d(re,2);{var J=Y=>{var ve=Cv(),Me=u(ve);lt(Me,20,()=>s(P).concernedDates,Ve=>Ve,(Ve,Qe)=>{const Be=V(()=>s(P).recipesByDate.get(Qe)||[]);var Ye=U(),He=I(Ye);{var Ct=St=>{var rt=kv(),Bt=u(rt),or=u(Bt);L((Nt,jr)=>{rr(rt,"data-tip",Nt),j(or,jr)},[()=>s(Be).map(Nt=>Nt.r).join(", "),()=>new Date(Qe).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h(St,rt)},qr=St=>{var rt=Tv(),Bt=u(rt);L(or=>j(Bt,or),[()=>new Date(Qe).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h(St,rt)};T(He,St=>{s(Be).length>0?St(Ct):St(qr,!1)})}h(Ve,Ye)}),h(Y,ve)};T(xe,Y=>{s(P).concernedDates.length>0&&Y(J)})}var me=d(be,2),q=u(me);q.__click=[Nv,e,y],q.__keydown=[Mv,e,y];var Z=u(q);nr(Z,{size:18});var Ae=d(Z,2);{var we=Y=>{var ve=Iv(),Me=I(ve),Ve=u(Me),Qe=d(Me,2);{var Be=Ye=>{var He=Dv(),Ct=u(He);pv(Ct,{get tip(){return s(y).storeInfo.storeComment},get icon(){return Sc},iconSize:14}),h(Ye,He)};T(Qe,Ye=>{s(y).storeInfo?.storeComment&&Ye(Be)})}L(()=>j(Ve,s(y).storeInfo.storeName)),h(Y,ve)},Ee=Y=>{var ve=Ov();h(Y,ve)};T(Ae,Y=>{s(y).storeInfo?.storeName?Y(we):Y(Ee,!1)})}var ae=d(q,2);ae.__click=[Rv,e,y],ae.__keydown=[qv,e,y];var ye=u(ae);Un(ye,{size:18});var je=d(ye,2);{var de=Y=>{var ve=Lv(),Me=u(ve),Ve=d(Me);{var Qe=Be=>{var Ye=jv(),He=u(Ye);L(()=>j(He,`+${s(y).who.length-2}`)),h(Be,Ye)};T(Ve,Be=>{s(y).who.length>2&&Be(Qe)})}L(Be=>j(Me,`${Be??""} `),[()=>s(y).who.slice(0,2).map(Be=>Be.slice(0,3)).join(" | ")]),h(Y,ve)},We=Y=>{var ve=Bv();h(Y,ve)};T(je,Y=>{s(y).who&&s(y).who.length>0?Y(de):Y(We,!1)})}var ce=d(se,2),$e=u(ce);$e.__click=[zv,e,y],$e.__keydown=[Uv,e,y];var Ue=u($e),_e=u(Ue),st=u(_e);yc(st,{class:"h-4 w-4"});var qe=d(_e,2),Pe=u(qe),Ze=u(Pe);{var ge=Y=>{var ve=Hv(),Me=u(ve),Ve=u(Me),Qe=d(Me,2);vc(Qe,{class:"h-4 w-4"});var Be=d(Qe);L(()=>{j(Ve,s(P).formattedQuantities),j(Be,` ${s(K).totalOverride.q??""} ${s(K).totalOverride.u??""}`)}),h(Y,ve)},ke=Y=>{var ve=Wv(),Me=u(ve);L(()=>j(Me,s(P).formattedQuantities)),h(Y,ve)};T(Ze,Y=>{s(K)?.totalOverride?Y(ge):Y(ke,!1)})}var Ce=d(Pe,2);{var Ge=Y=>{var ve=Gv(),Me=u(ve),Ve=u(Me),Qe=d(Ve);ca(Qe,{class:"h-3 w-3"});var Be=d(Me,2),Ye=u(Be),He=d(Ye);Dc(He,{class:"h-3 w-3"}),L(()=>{j(Ve,`${s(P).nbRecipes??""} `),j(Ye,`${s(P).totalAssiettes??""} `)}),h(Y,ve)};T(Ce,Y=>{(s(P).nbRecipes||s(P).totalAssiettes)&&Y(Ge)})}var Ke=d(Ue,2);{var mt=Y=>{var ve=Qv();ve.__click=[Vv,e,y];var Me=d(u(ve),2),Ve=u(Me),Qe=d(Me,2);{var Be=He=>{ic(He,{size:18})},Ye=He=>{lc(He,{size:18})};T(Qe,He=>{Mr.isMobile?He(Be):He(Ye,!1)})}L(()=>{rr(ve,"title",`Acheter le manquant (${s(P).formattedAvailableQuantities??""})`),j(Ve,s(P).formattedAvailableQuantities)}),h(Y,ve)},kt=Y=>{Wa(Y,{size:24,class:"text-success ms-auto"})};T(Ke,Y=>{s(P).hasMissing?Y(mt):Y(kt,!1)})}var tt=d(Ke,2);{var gt=Y=>{var ve=Kv(),Me=u(ve);oc(Me,{size:18}),h(Y,ve)};T(tt,Y=>{s(K)?.hasUnresolvedChangedSinceOverride&&Y(gt)})}var Xe=d($e,2);Xe.__click=[Yv,e,y],Xe.__keydown=[Jv,e,y];var ot=u(Xe),qt=u(ot),dt=u(qt);er(dt,{class:"h-4 w-4"});var jt=d(ot,2),Lt=u(jt);lt(Lt,17,()=>s(M),Zr,(Y,ve)=>{const Me=V(()=>r[s(ve).icon]);var Ve=Zv(),Qe=u(Ve);fr(Qe,()=>s(Me),(He,Ct)=>{Ct(He,{class:"h-4 w-4"})});var Be=d(Qe,2),Ye=u(Be);L(He=>{Te(Ve,1,`badge badge-outline flex items-center gap-1 ${s(ve).badgeClass??""}`),j(Ye,He)},[()=>ua(s(ve).quantity,s(ve).unit)]),h(Y,Ve)});var Yt=d(Lt,2);{var Tt=Y=>{var ve=Xv();h(Y,ve)};T(Yt,Y=>{s(M).length===0&&Y(Tt)})}L(()=>{Te(F,1,`card bg-base-100 border-base-300 ${s(y).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),j(B,`${s(y).productName??""} `),Te(q,1,`btn btn-soft btn-sm group relative ${s(y).storeInfo?.storeName?"btn-success":""}`),Te(ae,1,`btn btn-sm btn-soft group relative ${s(y).who&&s(y).who?.length>0?"btn-success":""}`),Te(Pe,1,`font-bold text-base ${s(P).hasMissing?"text-error":"text-success"}`)}),h(E,F)}),h(v,w)});var c=d(l,2);{var f=v=>{var p=tf();h(v,p)};T(c,v=>{Object.values(s(a)).flat().length===0&&v(f)})}h(t,i),W()}Fe(["click","keydown"]);async function af(t,e,r,n,a,o,i,l,c){if(!(!s(e)||s(r))){b(n,null),b(a,null);try{const f=s(o).map(g=>g.id),v=i.products.filter(g=>f.includes(g.$id));X.setSyncStatus(f,!0),i.onClose();const p={storeName:s(l).trim(),storeComment:s(c).trim()},m=await no(f,v,p);if(b(a,m,!0),m.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${m.updatedCount} produits modifiés`),i.onSuccess?.(m);else throw new Error(m.error||"Erreur lors de la mise à jour")}catch(f){const v=f instanceof Error?f.message:"Erreur inconnue";b(n,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),X.clearSyncStatus()}finally{b(r,!1)}}}function Ka(t,e,r){s(e)||r.onClose()}var sf=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),of=(t,e)=>b(e,"empty"),lf=(t,e)=>b(e,"all"),cf=x('<span class="loading loading-spinner loading-sm"></span> En cours...',1),uf=x("<!> ",1),df=x('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function vf(t,e){H(e,!0);let r=R(!1),n=R(null),a=R(null),o=R(Re(e.products.length>0&&e.products[0].storeInfo?e.products[0].storeInfo.storeName:"")),i=R(Re(e.products.length>0&&e.products[0].storeInfo&&e.products[0].storeInfo.storeComment||"")),l=R(Re({})),c=R("empty");sr(()=>{const J={};e.products.forEach(me=>{e.productIds.includes(me.$id)&&(s(c)==="empty"?J[me.$id]=!me.storeInfo||!me.storeInfo.storeName:J[me.$id]=!0)}),b(l,J,!0)});const f=V(()=>e.products.map(J=>({id:J.$id,label:J.productName,title:J.productName,selected:s(l)[J.$id]}))),v=V(()=>s(f).filter(J=>J.selected)),p=V(()=>`Attribuer un magasin (${s(v).length} produits sélectionnés)`),m=V(()=>s(v).length===0?!1:s(o).trim().length>0);function g(J){s(l)[J]=!s(l)[J]}var _=df(),$=u(_),w=u($),S=u(w),A=u(S),k=d(S,2);k.__click=[Ka,r,e];var E=u(k);Rt(E,{class:"h-4 w-4"});var y=d(w,2),P=u(y);{var C=J=>{var me=sf(),q=u(me);Sn(q,{class:"h-4 w-4"});var Z=d(q,2),Ae=u(Z);L(()=>j(Ae,s(n))),h(J,me)};T(P,J=>{s(n)&&J(C)})}var M=d(P,2),K=u(M),F=u(K),ee=u(F);nr(ee,{class:"h-4 w-4 opacity-50"});var se=d(ee,2),be=d(F,2);{let J=V(()=>X.uniqueStores.map(me=>({id:me,label:me,disabled:me===s(o)})));_o(be,{get suggestions(){return s(J)},onSuggestionClick:me=>{b(o,me.label,!0)},title:"Suggestions de magasins :"})}var O=d(K,2),D=u(O),B=d(M,2),le=d(u(B),2),G=u(le);G.__click=[of,c];var te=d(G,2);te.__click=[lf,c];var oe=d(le,2);Fr(oe,{get items(){return s(f)},onToggleItem:g,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Se=d(y,2),z=u(Se);z.__click=[Ka,r,e];var Q=d(z,2);Q.__click=[af,m,r,n,a,v,e,o,i];var re=u(Q);{var ue=J=>{var me=cf();h(J,me)},xe=J=>{var me=uf(),q=I(me);Xr(q,{class:"h-4 w-4"});var Z=d(q);L(()=>j(Z,` Appliquer à ${s(v).length??""} produit(s)`)),h(J,me)};T(re,J=>{s(r)?J(ue):J(xe,!1)})}L(()=>{j(A,s(p)),k.disabled=s(r),se.disabled=s(r),D.disabled=s(r),Te(G,1,`tab ${s(c)==="empty"?"tab-active":""}`),Te(te,1,`tab ${s(c)==="all"?"tab-active":""}`),z.disabled=s(r),Q.disabled=s(r)||!s(m)}),Ie(se,()=>s(o),J=>b(o,J)),Ie(D,()=>s(i),J=>b(i,J)),h(t,_),W()}Fe(["click"]);async function ff(t,e,r,n,a,o,i,l){if(!(!s(e)||s(r))){b(n,null),b(a,null);try{const c=s(o).map(p=>p.id),f=i.products.filter(p=>c.includes(p.$id));X.setSyncStatus(c,!0),i.onClose();const v=await ao(c,f,s(l),"replace");if(b(a,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),i.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";b(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),X.clearSyncStatus()}finally{b(r,!1)}}}function Ya(t,e,r){s(e)||r.onClose()}var hf=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),pf=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},mf=(t,e)=>b(e,"empty"),gf=(t,e)=>b(e,"all"),_f=x('<span class="loading loading-spinner loading-sm"></span> En cours...',1),bf=x("<!> ",1),yf=x('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function wf(t,e){H(e,!0);let r=R(!1),n=R(null),a=R(null),o=R(Re([])),i=R(""),l=R("empty"),c=R(Re({}));sr(()=>{const ae={};e.products.forEach(ye=>{e.productIds.includes(ye.$id)&&(s(l)==="empty"?ae[ye.$id]=!ye.who||ye.who.length===0:ae[ye.$id]=!0)}),b(c,ae,!0)});const f=V(()=>e.products.map(ae=>({id:ae.$id,label:ae.productName,title:ae.productName,selected:s(c)[ae.$id]}))),v=V(()=>s(f).filter(ae=>ae.selected)),p=V(()=>{const ae=new Set([...X.uniqueWho,...s(o)]);return Array.from(ae).map(ye=>({id:ye,label:ye,selected:s(o).includes(ye)}))}),m=V(()=>`Gérer les volontaires (${s(v).length} produits sélectionnés)`),g=V(()=>s(v).length===0?!1:s(o).length>0);function _(ae){const ye=ae.trim();ye&&!s(o).includes(ye)&&b(o,[...s(o),ye],!0)}function $(ae){b(o,s(o).filter(ye=>ye!==ae),!0)}function w(ae){s(o).includes(ae)?$(ae):_(ae)}function S(){s(i).trim()&&(_(s(i)),b(i,""))}function A(ae){s(c)[ae]=!s(c)[ae]}var k=yf(),E=u(k),y=u(E),P=u(y),C=u(P),M=d(P,2);M.__click=[Ya,r,e];var K=u(M);Rt(K,{class:"h-4 w-4"});var F=d(y,2),ee=u(F);{var se=ae=>{var ye=hf(),je=u(ye);Sn(je,{class:"h-4 w-4"});var de=d(je,2),We=u(de);L(()=>j(We,s(n))),h(ae,ye)};T(ee,ae=>{s(n)&&ae(se)})}var be=d(ee,2),O=u(be),D=u(O),B=u(D),le=u(B);rn(le,{class:"h-4 w-4 opacity-50"});var G=d(le,2);G.__keydown=[pf,S];var te=d(B,2);te.__click=S;var oe=u(te);mo(oe,{size:16});var Se=d(D,2),z=d(u(Se),2);Fr(z,{get items(){return s(p)},onToggleItem:w,showIcon:!0});var Q=d(be,2),re=d(u(Q),2),ue=u(re);ue.__click=[mf,l];var xe=d(ue,2);xe.__click=[gf,l];var J=d(re,2);Fr(J,{get items(){return s(f)},onToggleItem:A,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var me=d(F,2),q=u(me);q.__click=[Ya,r,e];var Z=d(q,2);Z.__click=[ff,g,r,n,a,v,e,o];var Ae=u(Z);{var we=ae=>{var ye=_f();h(ae,ye)},Ee=ae=>{var ye=bf(),je=I(ye);Xr(je,{class:"h-4 w-4"});var de=d(je);L(()=>j(de,` Appliquer à ${s(v).length??""} produit(s)`)),h(ae,ye)};T(Ae,ae=>{s(r)?ae(we):ae(Ee,!1)})}L(ae=>{j(C,s(m)),M.disabled=s(r),G.disabled=s(r),te.disabled=ae,Te(ue,1,`tab ${s(l)==="empty"?"tab-active":""}`),Te(xe,1,`tab ${s(l)==="all"?"tab-active":""}`),q.disabled=s(r),Z.disabled=s(r)||!s(g)},[()=>s(r)||!s(i).trim()]),Ie(G,()=>s(i),ae=>b(i,ae)),h(t,k),W()}Fe(["click","keydown"]);var Sf=x("<div><!></div>"),xf=x('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function $f(t,e){H(e,!0);let r=R(!1),n=Oe(e,"width",3,"80"),a=Oe(e,"bgClass",3,"bg-base-300");const o=V(()=>"w-"+n());var i=U(),l=I(i);{var c=v=>{var p=Sf(),m=u(p);ie(m,()=>e.children??ne),L(()=>Te(p,1,`${a()??""} ${(s(o)?s(o):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),h(v,p)},f=v=>{var p=xf(),m=I(p),g=u(m),_=d(g,2),$=d(u(_),2),w=u($);ie(w,()=>e.children??ne);var S=d(m,2),A=u(S),k=u(A);lo(k,{class:"h-6 w-6"}),al(g,()=>s(r),E=>b(r,E)),h(v,p)};T(l,v=>{Mr.isMobile?v(f,!1):v(c)})}h(t,i),W()}function Pf(){}var Ef=x('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function Af(t,e){H(e,!0);const r="100",n=V(()=>X.stats);let a=R(null),o=R("recettes"),i=R(!1),l=R(!1),c=R(Re([])),f=R(Re([])),v=R(!1),p=R(Re([]));function m(z,Q="recettes"){b(o,Q,!0),b(a,z,!0)}function g(){b(a,null)}function _(z,Q,re){b(c,Q,!0),b(f,re,!0),b(z==="who"?i:l,!0)}function $(z){(!z||z==="who")&&b(i,!1),(!z||z==="store")&&b(l,!1),b(c,[],!0),b(f,[],!0)}function w(z){console.log(`[ProductsTable] Modification groupée réussie: ${z.updatedCount} produits`)}function S(z){const Q=z.filter(re=>re.displayMissingQuantity!=="✅ Complet"&&re.missingQuantityArray&&re.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${z.length} produits reçus → ${Q.length} produits avec quantités manquantes`),b(p,Q,!0),b(v,!0)}function A(){b(v,!1),b(p,[],!0)}function k(){console.log("[ProductsTable] Achat groupé créé avec succès"),A()}async function E(z){try{if(!X.currentMainId)throw new Error("mainId non disponible");const Q=z.missingQuantityArray||[];if(Q.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let re=z.$id;z.isSynced||(console.log(`[ProductsTable] Produit ${z.$id} local, création pour validation rapide...`),re=(await zt(z.$id,{},xe=>X.getEnrichedProductById(xe))).$id,console.log(`[ProductsTable] Produit sync créé: ${re}`)),await so(X.currentMainId,re,Q,{store:z.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${z.productName}`)}catch(Q){console.error("[ProductsTable] Erreur validation rapide:",Q),alert("Erreur lors de la validation rapide: "+Q.message)}}var y=Ef(),P=I(y),C=u(P),M=u(C),K=u(M);_c(K,{class:"mr-1 h-4 w-4"});var F=d(K),ee=d(M,2);ee.__click=[Pf];var se=u(ee);Ac(se,{class:"mr-1 h-4 w-4"});var be=d(C,2);$f(be,{width:r,children:(z,Q)=>{fv(z,{})},$$slots:{default:!0}});var O=d(be,2);nf(O,{onOpenModal:m,onOpenGroupEditModal:_,onOpenGroupPurchaseModal:S,onQuickValidation:E});var D=d(P,2);Id(D,{get productId(){return s(a)},get initialTab(){return s(o)},onClose:g});var B=d(D,2);{var le=z=>{wf(z,{get productIds(){return s(c)},get products(){return s(f)},onClose:()=>$("who"),onSuccess:w})};T(B,z=>{s(i)&&z(le)})}var G=d(B,2);{var te=z=>{vf(z,{get productIds(){return s(c)},get products(){return s(f)},onClose:()=>$("store"),onSuccess:w})};T(G,z=>{s(l)&&z(te)})}var oe=d(G,2);{var Se=z=>{su(z,{get products(){return s(p)},onClose:A,onSuccess:k})};T(oe,z=>{s(v)&&z(Se)})}L(()=>{Te(P,1,`space-y-6 ${Mr.isMobile?"":"ml-100"}`),j(F,` ${s(n).total??""}`)}),h(t,y),W()}Fe(["click"]);si();var kf=x('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function Tf(t){var e=kf();h(t,e)}var Cf=x('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Nf(t,e){var r=Cf(),n=d(u(r),2),a=d(u(n),2),o=u(a);L(()=>j(o,e.message)),h(t,r)}var Mf=x('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Df(t,e){var r=Mf(),n=u(r),a=u(n);Sn(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(u(o),2),l=u(i);L(()=>j(l,e.message||"Erreur inconnue")),h(t,r)}function If(t){t.stopPropagation()}var Of=(t,e)=>t.key==="Escape"&&e(),Rf=x('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),qf=x('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),jf=(t,e)=>b(e,!1),Lf=x('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),Bf=(t,e)=>b(e,!0),zf=(t,e)=>b(e,!1),Uf=x(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),Hf=(t,e)=>b(e,!0),Wf=x('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),Gf=x('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function Vf(t,e){H(e,!0);let r=Oe(e,"onClose",3,()=>{}),n=Oe(e,"onAuthSuccess",3,()=>{}),a=R(!0),o=R(!1),i=R(""),l=R(""),c=R(""),f=R(""),v=R(""),p=R(""),m=R(""),g=R(""),_=R(!1);function $(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function w(G){if(G.preventDefault(),!s(c)||!s(f)){b(i,"Veuillez remplir tous les champs");return}b(o,!0),b(i,"");try{await(await $().getAccount()).createEmailPasswordSession(s(c),s(f)),b(l,"Connexion réussie !"),setTimeout(()=>{n()()},1e3)}catch(te){console.error("Erreur de connexion:",te),b(i,te.message||"Erreur lors de la connexion",!0)}finally{b(o,!1)}}async function S(G){if(G.preventDefault(),!s(v)||!s(p)||!s(m)){b(i,"Veuillez remplir tous les champs");return}b(o,!0),b(i,"");try{const oe=await $().getAccount();await oe.create("unique()",s(p),s(m),s(v)),await oe.createEmailPasswordSession(s(p),s(m)),b(l,"Compte créé et connecté !"),setTimeout(()=>{n()()},1e3)}catch(te){console.error("Erreur d'inscription:",te),b(i,te.message||"Erreur lors de la création du compte",!0)}finally{b(o,!1)}}async function A(G){if(G.preventDefault(),!s(g)){b(i,"Veuillez entrer votre email");return}b(o,!0),b(i,"");try{await(await $().getAccount()).createRecovery(s(g),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(_,!1),b(g,"")},2e3)}catch(te){console.error("Erreur mot de passe oublié:",te),b(i,te.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(o,!1)}}function k(){s(o)||r()()}sr(()=>{(s(a)||s(_))&&(b(i,""),b(l,""))});var E=Gf();E.__click=k,E.__keydown=[Of,k];var y=u(E);y.__click=[If];var P=u(y),C=u(P),M=u(C),K=d(C,2);K.__click=k;var F=d(P,2),ee=u(F);{var se=G=>{var te=Rf(),oe=u(te);L(()=>j(oe,s(i))),h(G,te)};T(ee,G=>{s(i)&&G(se)})}var be=d(ee,2);{var O=G=>{var te=qf(),oe=u(te);L(()=>j(oe,s(l))),h(G,te)};T(be,G=>{s(l)&&G(O)})}var D=d(be,2);{var B=G=>{var te=Lf(),oe=I(te),Se=u(oe),z=d(u(Se),2),Q=d(Se,2),re=u(Q),ue=d(oe,2),xe=u(ue);xe.__click=[jf,_],L(()=>{z.disabled=s(o),Q.disabled=s(o),j(re,s(o)?"Envoi...":"Envoyer l'email de réinitialisation"),xe.disabled=s(o)}),$n("submit",oe,A),Ie(z,()=>s(g),J=>b(g,J)),h(G,te)},le=G=>{var te=U(),oe=I(te);{var Se=Q=>{var re=Uf(),ue=I(re),xe=u(ue),J=d(u(xe),2),me=d(xe,2),q=d(u(me),2),Z=d(me,2),Ae=u(Z),we=d(ue,2),Ee=u(we);Ee.__click=[Bf,_];var ae=d(Ee,2),ye=d(u(ae));ye.__click=[zf,a],L(()=>{J.disabled=s(o),q.disabled=s(o),Z.disabled=s(o),j(Ae,s(o)?"Connexion...":"Se connecter"),Ee.disabled=s(o),ye.disabled=s(o)}),$n("submit",ue,w),Ie(J,()=>s(c),je=>b(c,je)),Ie(q,()=>s(f),je=>b(f,je)),h(Q,re)},z=Q=>{var re=Wf(),ue=I(re),xe=u(ue),J=d(u(xe),2),me=d(xe,2),q=d(u(me),2),Z=d(me,2),Ae=d(u(Z),2),we=d(Z,2),Ee=u(we),ae=d(ue,2),ye=d(u(ae));ye.__click=[Hf,a],L(()=>{J.disabled=s(o),q.disabled=s(o),Ae.disabled=s(o),we.disabled=s(o),j(Ee,s(o)?"Création...":"Créer un compte"),ye.disabled=s(o)}),$n("submit",ue,S),Ie(J,()=>s(v),je=>b(v,je)),Ie(q,()=>s(p),je=>b(p,je)),Ie(Ae,()=>s(m),je=>b(m,je)),h(Q,re)};T(oe,Q=>{s(a)?Q(Se):Q(z,!1)},!0)}h(G,te)};T(D,G=>{s(_)?G(B):G(le,!1)})}L(()=>{j(M,s(_)?"Mot de passe oublié":s(a)?"Connexion":"Inscription"),K.disabled=s(o)}),h(t,E),W()}Fe(["click","keydown"]);var Qf=(t,e,r)=>e(s(r)),Kf=x('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),Yf=(t,e,r)=>e(s(r)),Jf=x('<button class="btn btn-ghost btn-sm btn-square" title="Fermer" aria-label="Fermer la notification"><!></button>'),Zf=x('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!></div></div></div>'),Xf=x("<div></div>");function Ff(t,e){H(e,!0);let r=Oe(e,"position",3,"toast-right toast-bottom"),n=Oe(e,"padding",3,"md");const a=V(()=>n()==="sm"?"px-2 py-0.5":""),o=V(()=>bt.toasts);function i(v){return v==="success"||v==="info"}function l(v){bt.dismiss(v.id)}function c(v){e.onShowDetails?.({id:v.id,message:v.message,details:v.details})}var f=Xf();lt(f,21,()=>s(o),v=>v.id,(v,p)=>{var m=Zf(),g=u(m),_=u(g),$=u(_);{var w=M=>{co(M,{class:"h-5 w-5 animate-spin"})};T($,M=>{s(p).state==="loading"&&M(w)})}var S=d($,2),A=u(S),k=d(_,2),E=u(k);{var y=M=>{var K=Kf();K.__click=[Qf,c,p];var F=u(K);io(F,{class:"h-3 w-3"}),h(M,K)};T(E,M=>{s(p).details&&M(y)})}var P=d(E,2);{var C=M=>{var K=Jf();K.__click=[Yf,l,p];var F=u(K);Rt(F,{class:"ms-1 h-4 w-4"}),h(M,K)};T(P,M=>{(s(p).state==="error"||!i(s(p).state))&&M(C)})}L(()=>{Te(m,1,`alert alert-${s(p).state??""} max-w-sm ${s(a)??""} shadow-lg ${s(p).state==="error"?"":"alert-soft"}`),j(A,s(p).message)}),h(v,m)}),L(()=>Te(f,1,`toast ${r()??""} z-50`)),h(t,f),W()}Fe(["click"]);var eh=x('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function th(t){var e=eh(),r=u(e),n=d(r,2);po(n,{class:"swap-on fill-current"});var a=d(n,2);vo(a,{class:"swap-off fill-current"}),h(t,e)}function rh(t,e){b(e,!0)}var nh=x('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),ah=x('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),sh=x('<div class="text-base-content/60"> </div>'),oh=x('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),ih=x('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),lh=x('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),ch=x('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),uh=x('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function dh(t,e){H(e,!0);let r,n=R(null),a=R(!0),o=R(!1),i=R(!1);function l(y,P,C){localStorage.setItem("appwrite-user-email",y),localStorage.setItem("appwrite-user-name",P)}async function c(){const y=Ha();r=Xl(y);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const M=await(await window.AppwriteClient.getAccount()).get();l(M.email,M.name),await X.initialize(r,y)}catch(P){const C=P instanceof Error?P.message:"Erreur lors de l'initialisation";b(n,C,!0),console.error("[App] Erreur initialisation:",P)}finally{b(a,!1)}}zs(async()=>{await c()});async function f(){b(i,!1),b(a,!0),b(n,null),await c()}ll(()=>{X.destroy()});async function v(){if(!(!r||s(o))){b(o,!0);try{const y=Ha();await X.forceReload(r,y)}catch(y){console.error("[App] Erreur lors du rechargement forcé:",y)}finally{b(o,!1)}}}const p=V(()=>s(n)||X.error),m=V(()=>s(a)||X.loading);var g=uh(),_=I(g),$=u(_);Ff($,{});var w=d($,2);{var S=y=>{Tf(y)},A=y=>{var P=ch(),C=I(P),M=u(C),K=u(M),F=d(u(K),2),ee=u(F);{var se=q=>{var Z=nh();h(q,Z)};T(ee,q=>{X.realtimeConnected&&q(se)})}var be=d(ee,2);{var O=q=>{var Z=ah();h(q,Z)};T(be,q=>{X.syncing&&q(O)})}var D=d(be,2);{var B=q=>{var Z=sh(),Ae=u(Z);L(we=>j(Ae,`Maj: ${we??""}`),[()=>new Date(X.lastSync).toLocaleTimeString()]),h(q,Z)};T(D,q=>{X.lastSync&&q(B)})}var le=d(D,2);th(le);var G=d(le,2);{var te=q=>{var Z=oh();let Ae;Z.__click=v;var we=u(Z);kc(we,{class:"h-4 w-4"}),L(Ee=>{Ae=Te(Z,1,"btn btn-outline btn-sm",null,Ae,Ee),Z.disabled=s(o)||X.loading},[()=>({loading:s(o)||X.loading})]),h(q,Z)};T(G,q=>{s(n)||q(te)})}var oe=d(G,2);{var Se=q=>{var Z=ih(),Ae=u(Z);Ae.__click=[rh,i];var we=u(Ae);wc(we,{class:"mr-2 h-4 w-4"}),h(q,Z)};T(oe,q=>{s(n)&&q(Se)})}var z=d(C,2),Q=u(z);{var re=q=>{Df(q,{get message(){return s(p)}})},ue=q=>{var Z=U(),Ae=I(Z);{var we=Ee=>{Nf(Ee,{get message(){return s(p)}})};T(Ae,Ee=>{s(p)&&Ee(we)},!0)}h(q,Z)};T(Q,q=>{s(n)?q(re):q(ue,!1)})}var xe=d(Q,2);{var J=q=>{Af(q,{})},me=q=>{var Z=U(),Ae=I(Z);{var we=Ee=>{var ae=lh();h(Ee,ae)};T(Ae,Ee=>{!X.loading&&!s(n)&&Ee(we)},!0)}h(q,Z)};T(xe,q=>{X.enrichedProducts.length>0?q(J):q(me,!1)})}h(y,P)};T(w,y=>{s(m)?y(S):y(A,!1)})}var k=d(_,2);{var E=y=>{Vf(y,{onClose:()=>b(i,!1),onAuthSuccess:f})};T(k,y=>{s(i)&&y(E)})}h(t,g),W()}Fe(["click"]);const bo=document.getElementById("app_products");if(!bo)throw new Error("Élément target non trouvé: #app_products");Hi(dh,{target:bo});
