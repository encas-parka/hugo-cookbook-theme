(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const Fa=!1;var dn=Array.isArray,To=Array.prototype.indexOf,Qn=Array.from,On=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Co=Object.getOwnPropertyDescriptors,Do=Object.prototype,No=Array.prototype,es=Object.getPrototypeOf,pa=Object.isExtensible;function Lr(t){return typeof t=="function"}const se=()=>{};function Mo(t){for(var e=0;e<t.length;e++)t[e]()}function ts(){var t,e,r=new Promise((n,a)=>{t=n,e=a});return{promise:r,resolve:t,reject:e}}function rs(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const n of t)if(r.push(n),r.length===e)break;return r}const ft=2,Kn=4,Yn=8,mr=16,Gt=32,gr=64,Jn=128,wt=256,ln=512,it=1024,pt=2048,ar=4096,Pt=8192,_r=16384,Zn=32768,br=65536,ma=1<<17,Io=1<<18,Mr=1<<19,Oo=1<<20,Rn=1<<21,vn=1<<22,dr=1<<23,vr=Symbol("$state"),ns=Symbol("legacy props"),Ro=Symbol(""),Wr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function as(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function qo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function jo(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Lo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Bo(t){throw new Error("https://svelte.dev/e/effect_orphan")}function zo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Uo(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ho(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Wo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Go(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Vo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const fn=1,hn=2,ss=4,Qo=8,Ko=16,Yo=1,Jo=2,Zo=4,Xo=8,Fo=16,ei=1,ti=2,et=Symbol(),ri="http://www.w3.org/1999/xhtml",ni="http://www.w3.org/2000/svg",ai="@attach";function si(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function oi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let ii=!1;function os(t){return t===this.v}function is(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function li(t,e){return t!==e}function ls(t){return!is(t,this.v)}let Ir=!1,ci=!1;function ui(){Ir=!0}let Je=null;function Er(t){Je=t}function W(t,e=!1,r){Je={p:Je,c:null,e:null,s:t,x:null,l:Ir&&!e?{s:null,u:null,$:[]}:null}}function G(t){var e=Je,r=e.e;if(r!==null){e.e=null;for(var n of r)Ss(n)}return Je=e.p,{}}function Or(){return!Ir||Je!==null&&Je.l===null}let lr=[];function cs(){var t=lr;lr=[],Mo(t)}function hr(t){if(lr.length===0&&!Gr){var e=lr;queueMicrotask(()=>{e===lr&&cs()})}lr.push(t)}function di(){for(;lr.length>0;)cs()}const vi=new WeakMap;function us(t){var e=De;if(e===null)return Me.f|=dr,t;if((e.f&Zn)===0){if((e.f&Jn)===0)throw!e.parent&&t instanceof Error&&ds(t),t;e.b.error(t)}else Ar(t,e)}function Ar(t,e){for(;e!==null;){if((e.f&Jn)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t instanceof Error&&ds(t),t}function ds(t){const e=vi.get(t);e&&(On(t,"message",{value:e.message}),On(t,"stack",{value:e.stack}))}const nn=new Set;let Le=null,on=null,qn=new Set,Mt=[],pn=null,jn=!1,Gr=!1;class yt{current=new Map;#e=new Map;#r=new Set;#o=0;#d=null;#u=[];#i=[];#c=[];#l=[];#a=[];#v=[];skipped_effects=new Set;process(e){Mt=[],on=null;var r=yt.apply(this);for(const o of e)this.#s(o);if(this.#o===0){this.#h();var n=this.#i,a=this.#c;this.#i=[],this.#c=[],this.#l=[],on=this,Le=null,ga(n),ga(a),on=null,this.#d?.resolve()}else this.#f(this.#i),this.#f(this.#c),this.#f(this.#l);r();for(const o of this.#u)Jr(o);this.#u=[]}#s(e){e.f^=it;for(var r=e.first;r!==null;){var n=r.f,a=(n&(Gt|gr))!==0,o=a&&(n&it)!==0,i=o||(n&Pt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=it:(n&Kn)!==0?this.#c.push(r):(n&it)===0&&((n&vn)!==0&&r.b?.is_pending()?this.#u.push(r):yn(r)&&((r.f&mr)!==0&&this.#l.push(r),Jr(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#f(e){for(const r of e)((r.f&pt)!==0?this.#a:this.#v).push(r),ut(r,it);e.length=0}capture(e,r){this.#e.has(e)||this.#e.set(e,r),this.current.set(e,e.v)}activate(){Le=this}deactivate(){Le=null}flush(){if(Mt.length>0){if(this.activate(),vs(),Le!==null&&Le!==this)return}else this.#o===0&&this.#h();this.deactivate();for(const e of qn)if(qn.delete(e),e(),Le!==null)break}#h(){for(const e of this.#r)e();if(this.#r.clear(),nn.size>1){this.#e.clear();let e=!0;for(const r of nn){if(r===this){e=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(e)r.current.set(n,a);else continue;fs(n)}if(Mt.length>0){Le=r;const n=yt.apply(r);for(const a of Mt)r.#s(a);Mt=[],n()}}Le=null}nn.delete(this)}increment(){this.#o+=1}decrement(){this.#o-=1;for(const e of this.#a)ut(e,pt),pr(e);for(const e of this.#v)ut(e,ar),pr(e);this.flush()}add_callback(e){this.#r.add(e)}settled(){return(this.#d??=ts()).promise}static ensure(){if(Le===null){const e=Le=new yt;nn.add(Le),Gr||yt.enqueue(()=>{Le===e&&e.flush()})}return Le}static enqueue(e){hr(e)}static apply(e){return se}}function fi(t){var e=Gr;Gr=!0;try{for(var r;;){if(di(),Mt.length===0&&(Le?.flush(),Mt.length===0))return pn=null,r;vs()}}finally{Gr=e}}function vs(){var t=$r;jn=!0;try{var e=0;for(wa(!0);Mt.length>0;){var r=yt.ensure();if(e++>1e3){var n,a;hi()}r.process(Mt),Ft.clear()}}finally{jn=!1,wa(t),pn=null}}function hi(){try{zo()}catch(t){Ar(t,pn)}}let ir=null;function ga(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var n=t[r++];if((n.f&(_r|Pt))===0&&yn(n)&&(ir=[],Jr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Ps(n):n.fn=null),ir?.length>0)){Ft.clear();for(const a of ir)Jr(a);ir=[]}}ir=null}}function fs(t){if(t.reactions!==null)for(const e of t.reactions){const r=e.f;(r&ft)!==0?fs(e):(r&(vn|mr))!==0&&(ut(e,pt),pr(e))}}function pr(t){for(var e=pn=t;e.parent!==null;){e=e.parent;var r=e.f;if(jn&&e===De&&(r&mr)!==0)return;if((r&(gr|Gt))!==0){if((r&it)===0)return;e.f^=it}}Mt.push(e)}function Xn(t){let e=0,r=tr(0),n;return()=>{Ci()&&(s(r),aa(()=>(e===0&&(n=Rr(()=>t(()=>It(r)))),e+=1,()=>{hr(()=>{e-=1,e===0&&(n?.(),n=void 0,It(r))})})))}}var pi=br|Mr|Jn;function mi(t,e,r){new gi(t,e,r)}class gi{parent;#e=!1;#r;#o=null;#d;#u;#i;#c=null;#l=null;#a=null;#v=null;#s=0;#f=0;#h=!1;#m=null;#g=()=>{this.#m&&kr(this.#m,this.#s)};#n=Xn(()=>(this.#m=tr(this.#s),()=>{this.#m=null}));constructor(e,r,n){this.#r=e,this.#d=r,this.#u=n,this.parent=De.b,this.#e=!!this.#d.pending,this.#i=Kt(()=>{De.b=this;{try{this.#c=nt(()=>n(this.#r))}catch(a){this.error(a)}this.#f>0?this.#y():this.#e=!1}},pi)}#_(){try{this.#c=nt(()=>this.#u(this.#r))}catch(e){this.error(e)}this.#e=!1}#b(){const e=this.#d.pending;e&&(this.#l=nt(()=>e(this.#r)),yt.enqueue(()=>{this.#c=this.#p(()=>(yt.ensure(),nt(()=>this.#u(this.#r)))),this.#f>0?this.#y():(Ut(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#d.pending}#p(e){var r=De,n=Me,a=Je;Ot(this.#i),vt(this.#i),Er(this.#i.ctx);try{return e()}catch(o){return us(o),null}finally{Ot(r),vt(n),Er(a)}}#y(){const e=this.#d.pending;this.#c!==null&&(this.#v=document.createDocumentFragment(),_i(this.#c,this.#v)),this.#l===null&&(this.#l=nt(()=>e(this.#r)))}#w(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#w(e);return}this.#f+=e,this.#f===0&&(this.#e=!1,this.#l&&Ut(this.#l,()=>{this.#l=null}),this.#v&&(this.#r.before(this.#v),this.#v=null),hr(()=>{yt.ensure().flush()}))}update_pending_count(e){this.#w(e),this.#s+=e,qn.add(this.#g)}get_effect_pending(){return this.#n(),s(this.#m)}error(e){var r=this.#d.onerror;let n=this.#d.failed;if(this.#h||!r&&!n)throw e;this.#c&&(at(this.#c),this.#c=null),this.#l&&(at(this.#l),this.#l=null),this.#a&&(at(this.#a),this.#a=null);var a=!1,o=!1;const i=()=>{if(a){oi();return}a=!0,o&&Vo(),yt.ensure(),this.#s=0,this.#a!==null&&Ut(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#c=this.#p(()=>(this.#h=!1,nt(()=>this.#u(this.#r)))),this.#f>0?this.#y():this.#e=!1};var l=Me;try{vt(null),o=!0,r?.(e,i),o=!1}catch(c){Ar(c,this.#i&&this.#i.parent)}finally{vt(l)}n&&hr(()=>{this.#a=this.#p(()=>{this.#h=!0;try{return nt(()=>{n(this.#r,()=>e,()=>i)})}catch(c){return Ar(c,this.#i.parent),null}finally{this.#h=!1}})})}}function _i(t,e){for(var r=t.nodes_start,n=t.nodes_end;r!==null;){var a=r===n?null:en(r);e.append(r),r=a}}function hs(t,e,r){const n=Or()?mn:Fn;if(e.length===0){r(t.map(n));return}var a=Le,o=De,i=bi();Promise.all(e.map(l=>yi(l))).then(l=>{i();try{r([...t.map(n),...l])}catch(c){(o.f&_r)===0&&Ar(c,o)}a?.deactivate(),ps()}).catch(l=>{Ar(l,o)})}function bi(){var t=De,e=Me,r=Je,n=Le;return function(){Ot(t),vt(e),Er(r),n?.activate()}}function ps(){Ot(null),vt(null),Er(null)}function mn(t){var e=ft|pt,r=Me!==null&&(Me.f&ft)!==0?Me:null;return De===null||r!==null&&(r.f&wt)!==0?e|=wt:De.f|=Mr,{ctx:Je,deps:null,effects:null,equals:os,f:e,fn:t,reactions:null,rv:0,v:et,wv:0,parent:r??De,ac:null}}function yi(t,e){let r=De;r===null&&qo();var n=r.b,a=void 0,o=tr(et),i=!Me,l=new Map;return Ni(()=>{var c=ts();a=c.promise;try{Promise.resolve(t()).then(c.resolve,c.reject)}catch(m){c.reject(m)}var v=Le,f=n.is_pending();i&&(n.update_pending_count(1),f||(v.increment(),l.get(v)?.reject(Wr),l.set(v,c)));const p=(m,g=void 0)=>{f||v.activate(),g?g!==Wr&&(o.f|=dr,kr(o,g)):((o.f&dr)!==0&&(o.f^=dr),kr(o,m)),i&&(n.update_pending_count(-1),f||v.decrement()),ps()};c.promise.then(p,m=>p(null,m||"unknown"))}),ra(()=>{for(const c of l.values())c.reject(Wr)}),new Promise(c=>{function v(f){function p(){f===a?c(o):v(a)}f.then(p,p)}v(a)})}function V(t){const e=mn(t);return ks(e),e}function Fn(t){const e=mn(t);return e.equals=ls,e}function ms(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)at(e[r])}}function wi(t){for(var e=t.parent;e!==null;){if((e.f&ft)===0)return e;e=e.parent}return null}function ea(t){var e,r=De;Ot(wi(t));try{ms(t),e=Ns(t)}finally{Ot(r)}return e}function gs(t){var e=ea(t);if(t.equals(e)||(t.v=e,t.wv=Cs()),!yr){var r=(Zt||(t.f&wt)!==0)&&t.deps!==null?ar:it;ut(t,r)}}const Ft=new Map;function tr(t,e){var r={f:0,v:t,reactions:null,equals:os,rv:0,wv:0};return r}function O(t,e){const r=tr(t);return ks(r),r}function Si(t,e=!1,r=!0){const n=tr(t);return e||(n.equals=ls),Ir&&r&&Je!==null&&Je.l!==null&&(Je.l.s??=[]).push(n),n}function b(t,e,r=!1){Me!==null&&(!$t||(Me.f&ma)!==0)&&Or()&&(Me.f&(ft|mr|vn|ma))!==0&&!Ht?.includes(t)&&Go();let n=r?Re(e):e;return kr(t,n)}function kr(t,e){if(!t.equals(e)){var r=t.v;yr?Ft.set(t,e):Ft.set(t,r),t.v=e;var n=yt.ensure();n.capture(t,r),(t.f&ft)!==0&&((t.f&pt)!==0&&ea(t),ut(t,(t.f&wt)===0?it:ar)),t.wv=Cs(),_s(t,pt),Or()&&De!==null&&(De.f&it)!==0&&(De.f&(Gt|gr))===0&&(_t===null?Oi([t]):_t.push(t))}return e}function It(t){b(t,t.v+1)}function _s(t,e){var r=t.reactions;if(r!==null)for(var n=Or(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===De)){var c=(l&pt)===0;c&&ut(i,e),(l&ft)!==0?_s(i,ar):c&&((l&mr)!==0&&ir!==null&&ir.push(i),pr(i))}}}function Re(t){if(typeof t!="object"||t===null||vr in t)return t;const e=es(t);if(e!==Do&&e!==No)return t;var r=new Map,n=dn(t),a=O(0),o=Wt,i=l=>{if(Wt===o)return l();var c=Me,v=Wt;vt(null),xa(o);var f=l();return vt(c),xa(v),f};return n&&r.set("length",O(t.length)),new Proxy(t,{defineProperty(l,c,v){(!("value"in v)||v.configurable===!1||v.enumerable===!1||v.writable===!1)&&Ho();var f=r.get(c);return f===void 0?f=i(()=>{var p=O(v.value);return r.set(c,p),p}):b(f,v.value,!0),!0},deleteProperty(l,c){var v=r.get(c);if(v===void 0){if(c in l){const f=i(()=>O(et));r.set(c,f),It(a)}}else b(v,et),It(a);return!0},get(l,c,v){if(c===vr)return t;var f=r.get(c),p=c in l;if(f===void 0&&(!p||Xt(l,c)?.writable)&&(f=i(()=>{var g=Re(p?l[c]:et),y=O(g);return y}),r.set(c,f)),f!==void 0){var m=s(f);return m===et?void 0:m}return Reflect.get(l,c,v)},getOwnPropertyDescriptor(l,c){var v=Reflect.getOwnPropertyDescriptor(l,c);if(v&&"value"in v){var f=r.get(c);f&&(v.value=s(f))}else if(v===void 0){var p=r.get(c),m=p?.v;if(p!==void 0&&m!==et)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return v},has(l,c){if(c===vr)return!0;var v=r.get(c),f=v!==void 0&&v.v!==et||Reflect.has(l,c);if(v!==void 0||De!==null&&(!f||Xt(l,c)?.writable)){v===void 0&&(v=i(()=>{var m=f?Re(l[c]):et,g=O(m);return g}),r.set(c,v));var p=s(v);if(p===et)return!1}return f},set(l,c,v,f){var p=r.get(c),m=c in l;if(n&&c==="length")for(var g=v;g<p.v;g+=1){var y=r.get(g+"");y!==void 0?b(y,et):g in l&&(y=i(()=>O(et)),r.set(g+"",y))}if(p===void 0)(!m||Xt(l,c)?.writable)&&(p=i(()=>O(void 0)),b(p,Re(v)),r.set(c,p));else{m=p.v!==et;var E=i(()=>Re(v));b(p,E)}var w=Reflect.getOwnPropertyDescriptor(l,c);if(w?.set&&w.set.call(f,v),!m){if(n&&typeof c=="string"){var A=r.get("length"),T=Number(c);Number.isInteger(T)&&T>=A.v&&b(A,T+1)}It(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(p=>{var m=r.get(p);return m===void 0||m.v!==et});for(var[v,f]of r)f.v!==et&&!(v in l)&&c.push(v);return c},setPrototypeOf(){Wo()}})}function _a(t){try{if(t!==null&&typeof t=="object"&&vr in t)return t[vr]}catch{}return t}function xi(t,e){return Object.is(_a(t),_a(e))}var ba,bs,ys,ws;function $i(){if(ba===void 0){ba=window,bs=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;ys=Xt(e,"firstChild").get,ws=Xt(e,"nextSibling").get,pa(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),pa(r)&&(r.__t=void 0)}}function Vt(t=""){return document.createTextNode(t)}function Tr(t){return ys.call(t)}function en(t){return ws.call(t)}function u(t,e){return Tr(t)}function I(t,e=!1){{var r=Tr(t);return r instanceof Comment&&r.data===""?en(r):r}}function d(t,e=1,r=!1){let n=t;for(;e--;)n=en(n);return n}function Pi(t){t.textContent=""}function gn(){return!1}function Ei(t,e){if(e){const r=document.body;t.autofocus=!0,hr(()=>{document.activeElement===r&&t.focus()})}}let ya=!1;function Ai(){ya||(ya=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function _n(t){var e=Me,r=De;vt(null),Ot(null);try{return t()}finally{vt(e),Ot(r)}}function ta(t,e,r,n=r){t.addEventListener(e,()=>_n(r));const a=t.__on_r;a?t.__on_r=()=>{a(),n(!0)}:t.__on_r=()=>n(!0),Ai()}function ki(t){De===null&&Me===null&&Bo(),Me!==null&&(Me.f&wt)!==0&&De===null&&Lo(),yr&&jo()}function Ti(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Qt(t,e,r,n=!0){var a=De;a!==null&&(a.f&Pt)!==0&&(t|=Pt);var o={ctx:Je,deps:null,nodes_start:null,nodes_end:null,f:t|pt,first:null,fn:e,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Jr(o),o.f|=Zn}catch(c){throw at(o),c}else e!==null&&pr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Mr)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Ti(i,a),Me!==null&&(Me.f&ft)!==0&&(t&gr)===0)){var l=Me;(l.effects??=[]).push(i)}}return o}function Ci(){return Me!==null&&!$t}function ra(t){const e=Qt(Yn,null,!1);return ut(e,it),e.teardown=t,e}function sr(t){ki();var e=De.f,r=!Me&&(e&Gt)!==0&&(e&Zn)===0;if(r){var n=Je;(n.e??=[]).push(t)}else return Ss(t)}function Ss(t){return Qt(Kn|Oo,t,!1)}function Di(t){yt.ensure();const e=Qt(gr|Mr,t,!0);return(r={})=>new Promise(n=>{r.outro?Ut(e,()=>{at(e),n(void 0)}):(at(e),n(void 0))})}function na(t){return Qt(Kn,t,!1)}function Ni(t){return Qt(vn|Mr,t,!0)}function aa(t,e=0){return Qt(Yn|e,t,!0)}function B(t,e=[],r=[]){hs(e,r,n=>{Qt(Yn,()=>t(...n.map(s)),!0)})}function Kt(t,e=0){var r=Qt(mr|e,t,!0);return r}function nt(t,e=!0){return Qt(Gt|Mr,t,!0,e)}function xs(t){var e=t.teardown;if(e!==null){const r=yr,n=Me;Sa(!0),vt(null);try{e.call(null)}finally{Sa(r),vt(n)}}}function $s(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const a=r.ac;a!==null&&_n(()=>{a.abort(Wr)});var n=r.next;(r.f&gr)!==0?r.parent=null:at(r,e),r=n}}function Mi(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&Gt)===0&&at(e),e=r}}function at(t,e=!0){var r=!1;(e||(t.f&Io)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(Ii(t.nodes_start,t.nodes_end),r=!0),$s(t,e&&!r),cn(t,0),ut(t,_r);var n=t.transitions;if(n!==null)for(const o of n)o.stop();xs(t);var a=t.parent;a!==null&&a.first!==null&&Ps(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function Ii(t,e){for(;t!==null;){var r=t===e?null:en(t);t.remove(),t=r}}function Ps(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function Ut(t,e){var r=[];sa(t,r,!0),Es(r,()=>{at(t),e&&e()})}function Es(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var a of t)a.out(n)}else e()}function sa(t,e,r){if((t.f&Pt)===0){if(t.f^=Pt,t.transitions!==null)for(const i of t.transitions)(i.is_global||r)&&e.push(i);for(var n=t.first;n!==null;){var a=n.next,o=(n.f&br)!==0||(n.f&Gt)!==0;sa(n,e,o?r:!1),n=a}}}function bn(t){As(t,!0)}function As(t,e){if((t.f&Pt)!==0){t.f^=Pt,(t.f&it)===0&&(ut(t,pt),pr(t));for(var r=t.first;r!==null;){var n=r.next,a=(r.f&br)!==0||(r.f&Gt)!==0;As(r,a?e:!1),r=n}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||e)&&o.in()}}let $r=!1;function wa(t){$r=t}let yr=!1;function Sa(t){yr=t}let Me=null,$t=!1;function vt(t){Me=t}let De=null;function Ot(t){De=t}let Ht=null;function ks(t){Me!==null&&(Ht===null?Ht=[t]:Ht.push(t))}let ct=null,ht=0,_t=null;function Oi(t){_t=t}let Ts=1,Yr=0,Wt=Yr;function xa(t){Wt=t}let Zt=!1;function Cs(){return++Ts}function yn(t){var e=t.f;if((e&pt)!==0)return!0;if((e&ar)!==0){var r=t.deps,n=(e&wt)!==0;if(r!==null){var a,o,i=(e&ln)!==0,l=n&&De!==null&&!Zt,c=r.length;if((i||l)&&(De===null||(De.f&_r)===0)){var v=t,f=v.parent;for(a=0;a<c;a++)o=r[a],(i||!o?.reactions?.includes(v))&&(o.reactions??=[]).push(v);i&&(v.f^=ln),l&&f!==null&&(f.f&wt)===0&&(v.f^=wt)}for(a=0;a<c;a++)if(o=r[a],yn(o)&&gs(o),o.wv>t.wv)return!0}(!n||De!==null&&!Zt)&&ut(t,it)}return!1}function Ds(t,e,r=!0){var n=t.reactions;if(n!==null&&!Ht?.includes(t))for(var a=0;a<n.length;a++){var o=n[a];(o.f&ft)!==0?Ds(o,e,!1):e===o&&(r?ut(o,pt):(o.f&it)!==0&&ut(o,ar),pr(o))}}function Ns(t){var e=ct,r=ht,n=_t,a=Me,o=Zt,i=Ht,l=Je,c=$t,v=Wt,f=t.f;ct=null,ht=0,_t=null,Zt=(f&wt)!==0&&($t||!$r||Me===null),Me=(f&(Gt|gr))===0?t:null,Ht=null,Er(t.ctx),$t=!1,Wt=++Yr,t.ac!==null&&(_n(()=>{t.ac.abort(Wr)}),t.ac=null);try{t.f|=Rn;var p=t.fn,m=p(),g=t.deps;if(ct!==null){var y;if(cn(t,ht),g!==null&&ht>0)for(g.length=ht+ct.length,y=0;y<ct.length;y++)g[ht+y]=ct[y];else t.deps=g=ct;if(!Zt||(f&ft)!==0&&t.reactions!==null)for(y=ht;y<g.length;y++)(g[y].reactions??=[]).push(t)}else g!==null&&ht<g.length&&(cn(t,ht),g.length=ht);if(Or()&&_t!==null&&!$t&&g!==null&&(t.f&(ft|ar|pt))===0)for(y=0;y<_t.length;y++)Ds(_t[y],t);return a!==null&&a!==t&&(Yr++,_t!==null&&(n===null?n=_t:n.push(..._t))),(t.f&dr)!==0&&(t.f^=dr),m}catch(E){return us(E)}finally{t.f^=Rn,ct=e,ht=r,_t=n,Me=a,Zt=o,Ht=i,Er(l),$t=c,Wt=v}}function Ri(t,e){let r=e.reactions;if(r!==null){var n=To.call(r,t);if(n!==-1){var a=r.length-1;a===0?r=e.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(e.f&ft)!==0&&(ct===null||!ct.includes(e))&&(ut(e,ar),(e.f&(wt|ln))===0&&(e.f^=ln),ms(e),cn(e,0))}function cn(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)Ri(t,r[n])}function Jr(t){var e=t.f;if((e&_r)===0){ut(t,it);var r=De,n=$r;De=t,$r=!0;try{(e&mr)!==0?Mi(t):$s(t),xs(t);var a=Ns(t);t.teardown=typeof a=="function"?a:null,t.wv=Ts;var o;Fa&&ci&&(t.f&pt)!==0&&t.deps}finally{$r=n,De=r}}}async function qi(){await Promise.resolve(),fi()}function s(t){var e=t.f,r=(e&ft)!==0;if(Me!==null&&!$t){var n=De!==null&&(De.f&_r)!==0;if(!n&&!Ht?.includes(t)){var a=Me.deps;if((Me.f&Rn)!==0)t.rv<Yr&&(t.rv=Yr,ct===null&&a!==null&&a[ht]===t?ht++:ct===null?ct=[t]:(!Zt||!ct.includes(t))&&ct.push(t));else{(Me.deps??=[]).push(t);var o=t.reactions;o===null?t.reactions=[Me]:o.includes(Me)||o.push(Me)}}}else if(r&&t.deps===null&&t.effects===null){var i=t,l=i.parent;l!==null&&(l.f&wt)===0&&(i.f^=wt)}if(yr){if(Ft.has(t))return Ft.get(t);if(r){i=t;var c=i.v;return((i.f&it)===0&&i.reactions!==null||Ms(i))&&(c=ea(i)),Ft.set(i,c),c}}else r&&(i=t,yn(i)&&gs(i));if((t.f&dr)!==0)throw t.v;return t.v}function Ms(t){if(t.v===et)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(Ft.has(e)||(e.f&ft)!==0&&Ms(e))return!0;return!1}function Rr(t){var e=$t;try{return $t=!0,t()}finally{$t=e}}const ji=-7169;function ut(t,e){t.f=t.f&ji|e}function Li(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Bi=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function zi(t){return Bi.includes(t)}const Ui={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Hi(t){return t=t.toLowerCase(),Ui[t]??t}const Wi=["touchstart","touchmove"];function Gi(t){return Wi.includes(t)}const Is=new Set,Ln=new Set;function oa(t,e,r,n={}){function a(o){if(n.capture||Ur.call(e,o),!o.cancelBubble)return _n(()=>r?.call(this,o))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?hr(()=>{e.addEventListener(t,a,n)}):e.addEventListener(t,a,n),a}function Bn(t,e,r,n={}){var a=oa(e,t,r,n);return()=>{t.removeEventListener(e,a,n)}}function Pn(t,e,r,n,a){var o={capture:n,passive:a},i=oa(t,e,r,o);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ra(()=>{e.removeEventListener(t,i,o)})}function Fe(t){for(var e=0;e<t.length;e++)Is.add(t[e]);for(var r of Ln)r(t)}let $a=null;function Ur(t){var e=this,r=e.ownerDocument,n=t.type,a=t.composedPath?.()||[],o=a[0]||t.target;$a=t;var i=0,l=$a===t&&t.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(e===document||e===window)){t.__root=e;return}var v=a.indexOf(e);if(v===-1)return;c<=v&&(i=c)}if(o=a[i]||t.target,o!==e){On(t,"currentTarget",{configurable:!0,get(){return o||r}});var f=Me,p=De;vt(null),Ot(null);try{for(var m,g=[];o!==null;){var y=o.assignedSlot||o.parentNode||o.host||null;try{var E=o["__"+n];if(E!=null&&(!o.disabled||t.target===o))if(dn(E)){var[w,...A]=E;w.apply(o,[t,...A])}else E.call(o,t)}catch(T){m?g.push(T):m=T}if(t.cancelBubble||y===e||y===null)break;o=y}if(m){for(let T of g)queueMicrotask(()=>{throw T});throw m}}finally{t.__root=e,delete t.currentTarget,vt(f),Ot(p)}}}function Os(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function Cr(t,e){var r=De;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function S(t,e){var r=(e&ei)!==0,n=(e&ti)!==0,a,o=!t.startsWith("<!>");return()=>{a===void 0&&(a=Os(o?t:"<!>"+t),r||(a=Tr(a)));var i=n||bs?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Tr(i),c=i.lastChild;Cr(l,c)}else Cr(i,i);return i}}function Vi(t,e,r="svg"){var n=!t.startsWith("<!>"),a=`<${r}>${n?t:"<!>"+t}</${r}>`,o;return()=>{if(!o){var i=Os(a),l=Tr(i);o=Tr(l)}var c=o.cloneNode(!0);return Cr(c,c),c}}function Qi(t,e){return Vi(t,e,"svg")}function Et(t=""){{var e=Vt(t+"");return Cr(e,e),e}}function H(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Vt();return t.append(e,r),Cr(e,r),t}function h(t,e){t!==null&&t.before(e)}function L(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??=t.nodeValue)&&(t.__t=r,t.nodeValue=r+"")}function Ki(t,e){return Yi(t,e)}const Sr=new Map;function Yi(t,{target:e,anchor:r,props:n={},events:a,context:o,intro:i=!0}){$i();var l=new Set,c=p=>{for(var m=0;m<p.length;m++){var g=p[m];if(!l.has(g)){l.add(g);var y=Gi(g);e.addEventListener(g,Ur,{passive:y});var E=Sr.get(g);E===void 0?(document.addEventListener(g,Ur,{passive:y}),Sr.set(g,1)):Sr.set(g,E+1)}}};c(Qn(Is)),Ln.add(c);var v=void 0,f=Di(()=>{var p=r??e.appendChild(Vt());return mi(p,{pending:()=>{}},m=>{if(o){W({});var g=Je;g.c=o}a&&(n.$$events=a),v=t(m,n)||{},o&&G()}),()=>{for(var m of l){e.removeEventListener(m,Ur);var g=Sr.get(m);--g===0?(document.removeEventListener(m,Ur),Sr.delete(m)):Sr.set(m,g)}Ln.delete(c),p!==r&&p.parentNode?.removeChild(p)}});return Ji.set(v,f),v}let Ji=new WeakMap;function k(t,e,r=!1){var n=t,a=null,o=null,i=et,l=r?br:0,c=!1;const v=(g,y=!0)=>{c=!0,m(y,g)};var f=null;function p(){f!==null&&(f.lastChild.remove(),n.before(f),f=null);var g=i?a:o,y=i?o:a;g&&bn(g),y&&Ut(y,()=>{i?o=null:a=null})}const m=(g,y)=>{if(i!==(i=g)){var E=gn(),w=n;if(E&&(f=document.createDocumentFragment(),f.append(w=Vt())),i?a??=y&&nt(()=>y(w)):o??=y&&nt(()=>y(w)),E){var A=Le,T=i?a:o,x=i?o:a;T&&A.skipped_effects.delete(T),x&&A.skipped_effects.add(x),A.add_callback(p)}else p()}};Kt(()=>{c=!1,e(v),c||m(null,null)},l)}function Zi(t,e,r){var n=t,a=et,o,i,l=null,c=Or()?li:is;function v(){o&&Ut(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}Kt(()=>{if(c(a,a=e())){var f=n,p=gn();p&&(l=document.createDocumentFragment(),l.append(f=Vt())),i=nt(()=>r(f)),p?Le.add_callback(v):v()}})}function Zr(t,e){return e}function Xi(t,e,r){for(var n=t.items,a=[],o=e.length,i=0;i<o;i++)sa(e[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;Pi(c),c.append(r),n.clear(),Nt(t,e[0].prev,e[o-1].next)}Es(a,()=>{for(var v=0;v<o;v++){var f=e[v];l||(n.delete(f.k),Nt(t,f.prev,f.next)),at(f.e,!l)}})}function lt(t,e,r,n,a,o=null){var i=t,l={flags:e,items:new Map,first:null},c=(e&ss)!==0;if(c){var v=t;i=v.appendChild(Vt())}var f=null,p=!1,m=new Map,g=Fn(()=>{var A=r();return dn(A)?A:A==null?[]:Qn(A)}),y,E;function w(){Fi(E,y,l,m,i,a,e,n,r),o!==null&&(y.length===0?f?bn(f):f=nt(()=>o(i)):f!==null&&Ut(f,()=>{f=null}))}Kt(()=>{E??=De,y=s(g);var A=y.length;if(!(p&&A===0)){p=A===0;var T,x,$,_;if(gn()){var P=new Set,C=Le;for(x=0;x<A;x+=1){$=y[x],_=n($,x);var D=l.items.get(_)??m.get(_);D?(e&(fn|hn))!==0&&Rs(D,$,x,e):(T=qs(null,l,null,null,$,_,x,a,e,r,!0),m.set(_,T)),P.add(_)}for(const[te,Q]of l.items)P.has(te)||C.skipped_effects.add(Q.e);C.add_callback(w)}else w();s(g)}})}function Fi(t,e,r,n,a,o,i,l,c){var v=(i&Qo)!==0,f=(i&(fn|hn))!==0,p=e.length,m=r.items,g=r.first,y=g,E,w=null,A,T=[],x=[],$,_,P,C;if(v)for(C=0;C<p;C+=1)$=e[C],_=l($,C),P=m.get(_),P!==void 0&&(P.a?.measure(),(A??=new Set).add(P));for(C=0;C<p;C+=1){if($=e[C],_=l($,C),P=m.get(_),P===void 0){var D=n.get(_);if(D!==void 0){n.delete(_),m.set(_,D);var te=w?w.next:y;Nt(r,w,D),Nt(r,D,te),En(D,te,a),w=D}else{var Q=y?y.e.nodes_start:a;w=qs(Q,r,w,w===null?r.first:w.next,$,_,C,o,i,c)}m.set(_,w),T=[],x=[],y=w.next;continue}if(f&&Rs(P,$,C,i),(P.e.f&Pt)!==0&&(bn(P.e),v&&(P.a?.unfix(),(A??=new Set).delete(P))),P!==y){if(E!==void 0&&E.has(P)){if(T.length<x.length){var U=x[0],ne;w=U.prev;var be=T[0],j=T[T.length-1];for(ne=0;ne<T.length;ne+=1)En(T[ne],U,a);for(ne=0;ne<x.length;ne+=1)E.delete(x[ne]);Nt(r,be.prev,j.next),Nt(r,w,be),Nt(r,j,U),y=U,w=j,C-=1,T=[],x=[]}else E.delete(P),En(P,y,a),Nt(r,P.prev,P.next),Nt(r,P,w===null?r.first:w.next),Nt(r,w,P),w=P;continue}for(T=[],x=[];y!==null&&y.k!==_;)(y.e.f&Pt)===0&&(E??=new Set).add(y),x.push(y),y=y.next;if(y===null)continue;P=y}T.push(P),w=P,y=P.next}if(y!==null||E!==void 0){for(var M=E===void 0?[]:Qn(E);y!==null;)(y.e.f&Pt)===0&&M.push(y),y=y.next;var R=M.length;if(R>0){var ie=(i&ss)!==0&&p===0?a:null;if(v){for(C=0;C<R;C+=1)M[C].a?.measure();for(C=0;C<R;C+=1)M[C].a?.fix()}Xi(r,M,ie)}}v&&hr(()=>{if(A!==void 0)for(P of A)P.a?.apply()}),t.first=r.first&&r.first.e,t.last=w&&w.e;for(var K of n.values())at(K.e);n.clear()}function Rs(t,e,r,n){(n&fn)!==0&&kr(t.v,e),(n&hn)!==0?kr(t.i,r):t.i=r}function qs(t,e,r,n,a,o,i,l,c,v,f){var p=(c&fn)!==0,m=(c&Ko)===0,g=p?m?Si(a,!1,!1):tr(a):a,y=(c&hn)===0?i:tr(i),E={i:y,v:g,k:o,a:null,e:null,prev:r,next:n};try{if(t===null){var w=document.createDocumentFragment();w.append(t=Vt())}return E.e=nt(()=>l(t,g,y,v),ii),E.e.prev=r&&r.e,E.e.next=n&&n.e,r===null?f||(e.first=E):(r.next=E,r.e.next=E.e),n!==null&&(n.prev=E,n.e.prev=E.e),E}finally{}}function En(t,e,r){for(var n=t.next?t.next.e.nodes_start:r,a=e?e.e.nodes_start:r,o=t.e.nodes_start;o!==null&&o!==n;){var i=en(o);a.before(o),o=i}}function Nt(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function le(t,e,...r){var n=t,a=se,o;Kt(()=>{a!==(a=e())&&(o&&(at(o),o=null),o=nt(()=>a(n,...r)))},br)}function fr(t,e,r){var n=t,a,o,i=null,l=null;function c(){o&&(Ut(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}Kt(()=>{if(a!==(a=e())){var v=gn();if(a){var f=n;v&&(i=document.createDocumentFragment(),i.append(f=Vt()),o&&Le.skipped_effects.add(o)),l=nt(()=>r(f,a))}v?Le.add_callback(c):c()}},br)}function el(t,e,r,n,a,o){var i,l,c=null,v=t,f;Kt(()=>{const p=e()||null;var m=ni;p!==i&&(f&&(p===null?Ut(f,()=>{f=null,l=null}):p===l?bn(f):at(f)),p&&p!==l&&(f=nt(()=>{if(c=document.createElementNS(m,p),Cr(c,c),n){var g=c.appendChild(Vt());n(c,g)}De.nodes_end=c,v.before(c)})),i=p,i&&(l=i))},br)}function tl(t,e){var r=void 0,n;Kt(()=>{r!==(r=e())&&(n&&(at(n),n=null),r&&(n=nt(()=>{na(()=>r(t))})))})}function js(t){var e,r,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(e=0;e<a;e++)t[e]&&(r=js(t[e]))&&(n&&(n+=" "),n+=r)}else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function rl(){for(var t,e,r=0,n="",a=arguments.length;r<a;r++)(t=arguments[r])&&(e=js(t))&&(n&&(n+=" "),n+=e);return n}function nl(t){return typeof t=="object"?rl(t):t??""}const Pa=[...` 	
\r\f \v\uFEFF`];function al(t,e,r){var n=t==null?"":""+t;if(e&&(n=n?n+" "+e:e),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||Pa.includes(n[i-1]))&&(l===n.length||Pa.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Ea(t,e=!1){var r=e?" !important;":";",n="";for(var a in t){var o=t[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function An(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function sl(t,e){if(e){var r="",n,a;if(Array.isArray(e)?(n=e[0],a=e[1]):n=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(An)),a&&c.push(...Object.keys(a).map(An));var v=0,f=-1;const E=t.length;for(var p=0;p<E;p++){var m=t[p];if(l?m==="/"&&t[p-1]==="*"&&(l=!1):o?o===m&&(o=!1):m==="/"&&t[p+1]==="*"?l=!0:m==='"'||m==="'"?o=m:m==="("?i++:m===")"&&i--,!l&&o===!1&&i===0){if(m===":"&&f===-1)f=p;else if(m===";"||p===E-1){if(f!==-1){var g=An(t.substring(v,f).trim());if(!c.includes(g)){m!==";"&&p++;var y=t.substring(v,p).trim();r+=" "+y+";"}}v=p+1,f=-1}}}}return n&&(r+=Ea(n)),a&&(r+=Ea(a,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function Te(t,e,r,n,a,o){var i=t.__className;if(i!==r||i===void 0){var l=al(r,n,o);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t.__className=r}else if(o&&a!==o)for(var c in o){var v=!!o[c];(a==null||v!==!!a[c])&&t.classList.toggle(c,v)}return o}function kn(t,e={},r,n){for(var a in r){var o=r[a];e[a]!==o&&(r[a]==null?t.style.removeProperty(a):t.style.setProperty(a,o,n))}}function Ls(t,e,r,n){var a=t.__style;if(a!==e){var o=sl(e,n);o==null?t.removeAttribute("style"):t.style.cssText=o,t.__style=e}else n&&(Array.isArray(n)?(kn(t,r?.[0],n[0]),kn(t,r?.[1],n[1],"important")):kn(t,r,n));return n}function un(t,e,r=!1){if(t.multiple){if(e==null)return;if(!dn(e))return si();for(var n of t.options)n.selected=e.includes(Vr(n));return}for(n of t.options){var a=Vr(n);if(xi(a,e)){n.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function Bs(t){var e=new MutationObserver(()=>{un(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ra(()=>{e.disconnect()})}function cr(t,e,r=e){var n=!0;ta(t,"change",a=>{var o=a?"[selected]":":checked",i;if(t.multiple)i=[].map.call(t.querySelectorAll(o),Vr);else{var l=t.querySelector(o)??t.querySelector("option:not([disabled])");i=l&&Vr(l)}r(i)}),na(()=>{var a=e();if(un(t,a,n),n&&a===void 0){var o=t.querySelector(":checked");o!==null&&(a=Vr(o),r(a))}t.__value=a,n=!1}),Bs(t)}function Vr(t){return"__value"in t?t.__value:t.value}const Br=Symbol("class"),zr=Symbol("style"),zs=Symbol("is custom element"),Us=Symbol("is html");function ol(t,e){var r=wn(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e??"")}function Tn(t,e){var r=wn(t);r.checked!==(r.checked=e??void 0)&&(t.checked=e)}function il(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function rr(t,e,r,n){var a=wn(t);a[e]!==(a[e]=r)&&(e==="loading"&&(t[Ro]=r),r==null?t.removeAttribute(e):typeof r!="string"&&Hs(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function ll(t,e,r,n,a=!1,o=!1){var i=wn(t),l=i[zs],c=!i[Us],v=e||{},f=t.tagName==="OPTION";for(var p in e)p in r||(r[p]=null);r.class?r.class=nl(r.class):r[Br]&&(r.class=null),r[zr]&&(r.style??=null);var m=Hs(t);for(const $ in r){let _=r[$];if(f&&$==="value"&&_==null){t.value=t.__value="",v[$]=_;continue}if($==="class"){var g=t.namespaceURI==="http://www.w3.org/1999/xhtml";Te(t,g,_,n,e?.[Br],r[Br]),v[$]=_,v[Br]=r[Br];continue}if($==="style"){Ls(t,_,e?.[zr],r[zr]),v[$]=_,v[zr]=r[zr];continue}var y=v[$];if(!(_===y&&!(_===void 0&&t.hasAttribute($)))){v[$]=_;var E=$[0]+$[1];if(E!=="$$")if(E==="on"){const P={},C="$$"+$;let D=$.slice(2);var w=zi(D);if(Li(D)&&(D=D.slice(0,-7),P.capture=!0),!w&&y){if(_!=null)continue;t.removeEventListener(D,v[C],P),v[C]=null}if(_!=null)if(w)t[`__${D}`]=_,Fe([D]);else{let te=function(Q){v[$].call(this,Q)};var x=te;v[C]=oa(D,t,te,P)}else w&&(t[`__${D}`]=void 0)}else if($==="style")rr(t,$,_);else if($==="autofocus")Ei(t,!!_);else if(!l&&($==="__value"||$==="value"&&_!=null))t.value=t.__value=_;else if($==="selected"&&f)il(t,_);else{var A=$;c||(A=Hi(A));var T=A==="defaultValue"||A==="defaultChecked";if(_==null&&!l&&!T)if(i[$]=null,A==="value"||A==="checked"){let P=t;const C=e===void 0;if(A==="value"){let D=P.defaultValue;P.removeAttribute(A),P.defaultValue=D,P.value=P.__value=C?D:null}else{let D=P.defaultChecked;P.removeAttribute(A),P.defaultChecked=D,P.checked=C?D:!1}}else t.removeAttribute($);else T||m.includes(A)&&(l||typeof _!="string")?(t[A]=_,A in i&&(i[A]=et)):typeof _!="function"&&rr(t,A,_)}}}return v}function Aa(t,e,r=[],n=[],a,o=!1,i=!1){hs(r,n,l=>{var c=void 0,v={},f=t.nodeName==="SELECT",p=!1;if(Kt(()=>{var g=e(...l.map(s)),y=ll(t,c,g,a,o,i);p&&f&&"value"in g&&un(t,g.value);for(let w of Object.getOwnPropertySymbols(v))g[w]||at(v[w]);for(let w of Object.getOwnPropertySymbols(g)){var E=g[w];w.description===ai&&(!c||E!==c[w])&&(v[w]&&at(v[w]),v[w]=nt(()=>tl(t,()=>E))),y[w]=E}c=y}),f){var m=t;na(()=>{un(m,c.value,!0),Bs(m)})}p=!0})}function wn(t){return t.__attributes??={[zs]:t.nodeName.includes("-"),[Us]:t.namespaceURI===ri}}var ka=new Map;function Hs(t){var e=t.getAttribute("is")||t.nodeName,r=ka.get(e);if(r)return r;ka.set(e,r=[]);for(var n,a=t,o=Element.prototype;o!==a;){n=Co(a);for(var i in n)n[i].set&&r.push(i);a=es(a)}return r}function Ie(t,e,r=e){var n=new WeakSet;ta(t,"input",async a=>{var o=a?t.defaultValue:t.value;if(o=Cn(t)?Dn(o):o,r(o),Le!==null&&n.add(Le),await qi(),o!==(o=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),Rr(e)==null&&t.value&&(r(Cn(t)?Dn(t.value):t.value),Le!==null&&n.add(Le)),aa(()=>{var a=e();if(t===document.activeElement){var o=on??Le;if(n.has(o))return}Cn(t)&&a===Dn(t.value)||t.type==="date"&&!a&&!t.value||a!==t.value&&(t.value=a??"")})}function cl(t,e,r=e){ta(t,"change",n=>{var a=n?t.defaultChecked:t.checked;r(a)}),Rr(e)==null&&r(t.checked),aa(()=>{var n=e();t.checked=!!n})}function Cn(t){var e=t.type;return e==="number"||e==="range"}function Dn(t){return t===""?null:+t}let an=!1;function ul(t){var e=an;try{return an=!1,[t(),an]}finally{an=e}}const dl={get(t,e){if(!t.exclude.includes(e))return t.props[e]},set(t,e){return!1},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function fe(t,e,r){return new Proxy({props:t,exclude:e},dl)}const vl={get(t,e){let r=t.props.length;for(;r--;){let n=t.props[r];if(Lr(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(t,e,r){let n=t.props.length;for(;n--;){let a=t.props[n];Lr(a)&&(a=a());const o=Xt(a,e);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let n=t.props[r];if(Lr(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const a=Xt(n,e);return a&&!a.configurable&&(a.configurable=!0),a}}},has(t,e){if(e===vr||e===ns)return!1;for(let r of t.props)if(Lr(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(Lr(r)&&(r=r()),!!r){for(const n in r)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(r))e.includes(n)||e.push(n)}return e}};function he(...t){return new Proxy({props:t},vl)}function Oe(t,e,r,n){var a=!Ir||(r&Jo)!==0,o=(r&Xo)!==0,i=(r&Fo)!==0,l=n,c=!0,v=()=>(c&&(c=!1,l=i?Rr(n):n),l),f;if(o){var p=vr in t||ns in t;f=Xt(t,e)?.set??(p&&e in t?x=>t[e]=x:void 0)}var m,g=!1;o?[m,g]=ul(()=>t[e]):m=t[e],m===void 0&&n!==void 0&&(m=v(),f&&(a&&Uo(),f(m)));var y;if(a?y=()=>{var x=t[e];return x===void 0?v():(c=!0,x)}:y=()=>{var x=t[e];return x!==void 0&&(l=void 0),x===void 0?l:x},a&&(r&Zo)===0)return y;if(f){var E=t.$$legacy;return(function(x,$){return arguments.length>0?((!a||!$||E||g)&&f($?y():x),x):y()})}var w=!1,A=((r&Yo)!==0?mn:Fn)(()=>(w=!1,y()));o&&s(A);var T=De;return(function(x,$){if(arguments.length>0){const _=$?s(A):a&&o?Re(x):x;return b(A,_),w=!0,l!==void 0&&(l=_),x}return yr&&w||(T.f&_r)!==0?A.v:s(A)})}function Ws(t){Je===null&&as(),Ir&&Je.l!==null?hl(Je).m.push(t):sr(()=>{const e=Rr(t);if(typeof e=="function")return e})}function fl(t){Je===null&&as(),Ws(()=>()=>Rr(t))}function hl(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const pl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(pl);const ml="modulepreload",gl=function(t){return"/"+t},Ta={},_l=function(e,r,n){let a=Promise.resolve();if(r&&r.length>0){let v=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var i=v;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=v(r.map(f=>{if(f=gl(f),f in Ta)return;Ta[f]=!0;const p=f.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${m}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":ml,p||(g.as="script"),g.crossOrigin="",g.href=f,c&&g.setAttribute("nonce",c),document.head.appendChild(g),p)return new Promise((y,E)=>{g.addEventListener("load",y),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return e().catch(o)})};class bl extends Map{#e=new Map;#r=O(0);#o=O(0);#d=Wt||-1;constructor(e){if(super(),e){for(var[r,n]of e)super.set(r,n);this.#o.v=super.size}}#u(e){return Wt===this.#d?O(e):tr(e)}has(e){var r=this.#e,n=r.get(e);if(n===void 0){var a=super.get(e);if(a!==void 0)n=this.#u(0),r.set(e,n);else return s(this.#r),!1}return s(n),!0}forEach(e,r){this.#i(),super.forEach(e,r)}get(e){var r=this.#e,n=r.get(e);if(n===void 0){var a=super.get(e);if(a!==void 0)n=this.#u(0),r.set(e,n);else{s(this.#r);return}}return s(n),super.get(e)}set(e,r){var n=this.#e,a=n.get(e),o=super.get(e),i=super.set(e,r),l=this.#r;if(a===void 0)a=this.#u(0),n.set(e,a),b(this.#o,super.size),It(l);else if(o!==r){It(a);var c=l.reactions===null?null:new Set(l.reactions),v=c===null||!a.reactions?.every(f=>c.has(f));v&&It(l)}return i}delete(e){var r=this.#e,n=r.get(e),a=super.delete(e);return n!==void 0&&(r.delete(e),b(this.#o,super.size),b(n,-1),It(this.#r)),a}clear(){if(super.size!==0){super.clear();var e=this.#e;b(this.#o,0);for(var r of e.values())b(r,-1);It(this.#r),e.clear()}}#i(){s(this.#r);var e=this.#e;if(this.#o.v!==e.size){for(var r of super.keys())if(!e.has(r)){var n=this.#u(0);e.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#i(),super.values()}entries(){return this.#i(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#o),super.size}}class yl{#e;#r;constructor(e,r){this.#e=e,this.#r=Xn(r)}get current(){return this.#r(),this.#e()}}const wl=/\(.+\)/,Sl=new Set(["all","print","screen","and","or","not","only"]);class xl extends yl{constructor(e,r){let n=wl.test(e)||e.split(/[\s,]+/).some(o=>Sl.has(o.trim()))?e:`(${e})`;const a=window.matchMedia(n);super(()=>a.matches,o=>Bn(a,"change",o))}}const $l=typeof window<"u"?window:void 0;function Pl(t){let e=t.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class El{#e;#r;constructor(e={}){const{window:r=$l,document:n=r?.document}=e;r!==void 0&&(this.#e=n,this.#r=Xn(a=>{const o=Bn(r,"focusin",a),i=Bn(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?Pl(this.#e):null}}new El;function Al(t){return typeof t=="function"}function kl(t,e){if(Al(t)){const n=t();return n===void 0?e:n}return t===void 0?e:t}function Tl(t,e){let r=O(null);const n=V(()=>kl(e,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const c=new Promise((v,f)=>{i=v,l=f});b(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);b(r,null);try{i.resolve(await t.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),b(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Cl(t,e,r){if(!e||!r||!t.length)return[];const n=new Date(e),a=new Date(r),o=t.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return o.length?Pr(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function Jt(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(e){return console.warn("[ProductsStore] Erreur parsing JSON:",e),null}}function Qr(t){return t?.length?t.filter(e=>e.quantity!=null&&e.unit).map(e=>({q:typeof e.quantity=="number"?e.quantity:parseFloat(e.quantity),u:e.unit})).filter(e=>!isNaN(e.q)):[]}function Pr(t){if(!t?.length)return[];const e=new Map;return t.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=e.get(r.u)||0;e.set(r.u,n+r.q)}),Array.from(e.entries()).map(([r,n])=>({q:n,u:r}))}function Kr(t,e){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!e?.length){const l=t.map(c=>ur(c.q.toString(),c.u)).join(" et ");return{numeric:t,display:l}}const r=new Map,n=new Map;t.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),e.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,c)=>{const v=n.get(c)||0,f=l-v;f>0&&(a.push({q:f,u:c}),o.push(ur(f.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function xt(t){return t?.length?t.map(e=>ur(e.q.toString(),e.u)).join(" et "):"-"}function ur(t,e){const r=parseFloat(t);if(isNaN(r))return`${t} ${e}`;if((e==="gr."||e==="ml")&&r>=1e3){const n=r/1e3,a=e==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(e)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${e}`}return`${r} ${e}`}function ia(t){if(!t?.length)return[];const e=new Map;return t.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=e.get(n)||0;e.set(n,a+r)}}),Array.from(e.entries()).map(([r,n])=>({q:n,u:r}))}function Dl(t,e,r){if(!t)return 0;const n=typeof e=="string"?new Date(e):e,a=typeof r=="string"?new Date(r):r;return Object.entries(t).filter(([o])=>{const i=new Date(o);return i>=n&&i<=a}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function Nl(t){return t?Object.values(t).some(e=>e.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Ml(t){return t?Object.entries(t).map(([e,r])=>({dateTimeService:e,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Il(t){if(!t)return[];const e=[];return Object.entries(t).forEach(([r,n])=>{n.recipes?.forEach(a=>{e.push({...a,date:r,dateTimeService:r})})}),e}function la(t){if(!t)return[];const e=Object.values(t).flatMap(r=>r.totalConsolidated);return ia(e)}function Ol(t,e,r=""){if(t.status==="cancelled")return!1;const n=t.deliveryDate||t.$createdAt;return!n||n>e||r&&t.$createdAt<r?!1:t.status==="delivered"||t.status==="pending"||t.status==="ordered"&&n<=e}function Nn(t,e){let r=[],n="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(r=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],n=t.stockParsed.dateTime);const a=[];if(t.purchases)for(const c of t.purchases)Ol(c,e,n)&&a.push({q:c.quantity,u:c.unit});const o=Rl(t,e),i=[...r,...a],l=ia(i);return ql(l,o)}function Rl(t,e){if(!t.byDate)return[];const r=[];for(const[n,a]of Object.entries(t.byDate))if(n<=e){const i=a.totalConsolidated;i&&r.push(...i)}return ia(r)}function ql(t,e){const r=new Map,n=new Map;t.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),e.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const a=[],o=new Set([...r.keys(),...n.keys()]);for(const i of o){const l=r.get(i)||0,c=n.get(i)||0,v=l-c;Math.abs(v)>.001&&a.push({q:v,u:i})}return a}function Mn(t){if(!t?.length)return"Équilibré";const e=t.filter(n=>n.q>0),r=t.filter(n=>n.q<0);if(e.length>0&&r.length>0){const n=e.map(o=>ur(o.q.toString(),o.u)).join(" et "),a=r.map(o=>ur(Math.abs(o.q).toString(),o.u)).join(" et ");return`${n} disponibles, ${a} manquant${r.length>1?"s":""}`}else return e.length>0?e.map(n=>"+"+ur(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>ur(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}class jl{#e=O(Re([]));MAX_TOASTS=3;get toasts(){return s(this.#e).sort((e,r)=>r.timestamp-e.timestamp)}create(e){const r=e.id||crypto.randomUUID(),n={id:r,state:e.state,message:e.message,timestamp:Date.now(),source:e.source||"user",timeoutId:void 0,details:e.details};return this.#r(n),r}update(e,r){const n=s(this.#e).findIndex(o=>o.id===e);if(n===-1)return;const a=s(this.#e)[n];a.timeoutId&&clearTimeout(a.timeoutId),s(this.#e)[n]={...a,state:r.state||a.state,message:r.message||a.message,source:r.source||a.source},this.#o(s(this.#e)[n])}async track(e,r){const n=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const a=await e;return this.update(n,{state:"success",message:r.success||"Opération réussie"}),a}catch(a){throw this.update(n,{state:"error",message:r.error||"Erreur lors de l'opération"}),a}}dismiss(e){const r=s(this.#e).findIndex(a=>a.id===e);if(r===-1)return;const n=s(this.#e)[r];n.timeoutId&&clearTimeout(n.timeoutId),s(this.#e).splice(r,1)}dismissAll(){s(this.#e).forEach(e=>{e.timeoutId&&clearTimeout(e.timeoutId)}),b(this.#e,[],!0)}#r(e){if(e.source==="user"){const r=s(this.#e).findIndex(n=>n.source==="user");r>=0?s(this.#e)[r]=e:s(this.#e).push(e)}else{const r=s(this.#e).filter(n=>n.source!=="user");if(r.length>=2){const n=r[0];this.dismiss(n.id)}s(this.#e).push(e)}s(this.#e).length>this.MAX_TOASTS&&s(this.#e).splice(0,s(this.#e).length-this.MAX_TOASTS),this.#o(e)}#o(e){if(e.state!=="success"&&e.state!=="info")return;const r=e.source==="realtime-other"?24e3:23e3;e.timeoutId=setTimeout(()=>{this.dismiss(e.id)},r)}success(e,r){return this.create({state:"success",message:e,details:r})}error(e,r){return this.create({state:"error",message:e,details:r})}info(e,r){return this.create({state:"info",message:e,source:r?.source||"system",details:r?.details})}loading(e,r){return this.create({state:"loading",message:e,details:r})}}const bt=new jl;function Sn(t){return[...t].sort()}function Ll(t){return new Date(t)<new Date}function Gs(t){return t.length===0?null:Sn(t)[0]}function ca(t){return t.length===0?null:Sn(t).pop()}function Bl(t){if(t.length===0)return null;const e=new Date;return e.setHours(0,0,0,0),Sn(t).find(r=>new Date(r)>=e)||null}function zl(t){if(t.length===0)return null;const e=Sn(t);return{start:Ll(e[0])?new Date().toISOString().slice(0,19)+"Z":e[0],end:e[e.length-1]}}function Vs(t){const e=Bl(t),r=ca(t);return!e||!r?null:{start:e,end:r}}function Ul(t){const e=Gs(t),r=ca(t);return!e||!r?null:{start:e,end:r}}function Hl(t,e){const r=Ul(e);return r?t.start===r.start&&t.end===r.end:!1}function Wl(t,e){const r=Vs(e);return r?t.start===r.start&&t.end===r.end:!1}function Gl(t){return new Date(t).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function In(t){const r=new Date(t).getHours();return r===12?"sun":r===20?"moon":r===8?"cloud":null}function Vl(t,e,r,n){if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(t):n?n.value:e.get(t)}class N{constructor(e,r,n){this.method=e,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}N.equal=(t,e)=>new N("equal",t,e).toString();N.notEqual=(t,e)=>new N("notEqual",t,e).toString();N.lessThan=(t,e)=>new N("lessThan",t,e).toString();N.lessThanEqual=(t,e)=>new N("lessThanEqual",t,e).toString();N.greaterThan=(t,e)=>new N("greaterThan",t,e).toString();N.greaterThanEqual=(t,e)=>new N("greaterThanEqual",t,e).toString();N.isNull=t=>new N("isNull",t).toString();N.isNotNull=t=>new N("isNotNull",t).toString();N.between=(t,e,r)=>new N("between",t,[e,r]).toString();N.startsWith=(t,e)=>new N("startsWith",t,e).toString();N.endsWith=(t,e)=>new N("endsWith",t,e).toString();N.select=t=>new N("select",void 0,t).toString();N.search=(t,e)=>new N("search",t,e).toString();N.orderDesc=t=>new N("orderDesc",t).toString();N.orderAsc=t=>new N("orderAsc",t).toString();N.orderRandom=()=>new N("orderRandom").toString();N.cursorAfter=t=>new N("cursorAfter",void 0,t).toString();N.cursorBefore=t=>new N("cursorBefore",void 0,t).toString();N.limit=t=>new N("limit",void 0,t).toString();N.offset=t=>new N("offset",void 0,t).toString();N.contains=(t,e)=>new N("contains",t,e).toString();N.notContains=(t,e)=>new N("notContains",t,e).toString();N.notSearch=(t,e)=>new N("notSearch",t,e).toString();N.notBetween=(t,e,r)=>new N("notBetween",t,[e,r]).toString();N.notStartsWith=(t,e)=>new N("notStartsWith",t,e).toString();N.notEndsWith=(t,e)=>new N("notEndsWith",t,e).toString();N.createdBefore=t=>N.lessThan("$createdAt",t);N.createdAfter=t=>N.greaterThan("$createdAt",t);N.createdBetween=(t,e)=>N.between("$createdAt",t,e);N.updatedBefore=t=>N.lessThan("$updatedAt",t);N.updatedAfter=t=>N.greaterThan("$updatedAt",t);N.updatedBetween=(t,e)=>N.between("$updatedAt",t,e);N.or=t=>new N("or",void 0,t.map(e=>JSON.parse(e))).toString();N.and=t=>new N("and",void 0,t.map(e=>JSON.parse(e))).toString();N.distanceEqual=(t,e,r,n=!0)=>new N("distanceEqual",t,[[e,r,n]]).toString();N.distanceNotEqual=(t,e,r,n=!0)=>new N("distanceNotEqual",t,[[e,r,n]]).toString();N.distanceGreaterThan=(t,e,r,n=!0)=>new N("distanceGreaterThan",t,[[e,r,n]]).toString();N.distanceLessThan=(t,e,r,n=!0)=>new N("distanceLessThan",t,[[e,r,n]]).toString();N.intersects=(t,e)=>new N("intersects",t,[e]).toString();N.notIntersects=(t,e)=>new N("notIntersects",t,[e]).toString();N.crosses=(t,e)=>new N("crosses",t,[e]).toString();N.notCrosses=(t,e)=>new N("notCrosses",t,[e]).toString();N.overlaps=(t,e)=>new N("overlaps",t,[e]).toString();N.notOverlaps=(t,e)=>new N("notOverlaps",t,[e]).toString();N.touches=(t,e)=>new N("touches",t,[e]).toString();N.notTouches=(t,e)=>new N("notTouches",t,[e]).toString();var Ca;(function(t){t[t.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",t[t.POLICY_VIOLATION=1008]="POLICY_VIOLATION",t[t.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(Ca||(Ca={}));var Qs,Ks;class Dr{static custom(e){return e}static unique(e=7){const r=Vl(Dr,Qs,"m",Ks).call(Dr);let n="";for(let a=0;a<e;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}Qs=Dr,Ks=function(){const e=new Date,r=Math.floor(e.getTime()/1e3),n=e.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Da;(function(t){t.Equal="equal",t.NotEqual="notEqual",t.GreaterThan="greaterThan",t.GreaterThanEqual="greaterThanEqual",t.LessThan="lessThan",t.LessThanEqual="lessThanEqual",t.Contains="contains",t.IsNull="isNull",t.IsNotNull="isNotNull"})(Da||(Da={}));var Na;(function(t){t.Totp="totp"})(Na||(Na={}));var Ma;(function(t){t.Email="email",t.Phone="phone",t.Totp="totp",t.Recoverycode="recoverycode"})(Ma||(Ma={}));var Ia;(function(t){t.Amazon="amazon",t.Apple="apple",t.Auth0="auth0",t.Authentik="authentik",t.Autodesk="autodesk",t.Bitbucket="bitbucket",t.Bitly="bitly",t.Box="box",t.Dailymotion="dailymotion",t.Discord="discord",t.Disqus="disqus",t.Dropbox="dropbox",t.Etsy="etsy",t.Facebook="facebook",t.Figma="figma",t.Github="github",t.Gitlab="gitlab",t.Google="google",t.Linkedin="linkedin",t.Microsoft="microsoft",t.Notion="notion",t.Oidc="oidc",t.Okta="okta",t.Paypal="paypal",t.PaypalSandbox="paypalSandbox",t.Podio="podio",t.Salesforce="salesforce",t.Slack="slack",t.Spotify="spotify",t.Stripe="stripe",t.Tradeshift="tradeshift",t.TradeshiftBox="tradeshiftBox",t.Twitch="twitch",t.Wordpress="wordpress",t.Yahoo="yahoo",t.Yammer="yammer",t.Yandex="yandex",t.Zoho="zoho",t.Zoom="zoom",t.Mock="mock"})(Ia||(Ia={}));var Oa;(function(t){t.AvantBrowser="aa",t.AndroidWebViewBeta="an",t.GoogleChrome="ch",t.GoogleChromeIOS="ci",t.GoogleChromeMobile="cm",t.Chromium="cr",t.MozillaFirefox="ff",t.Safari="sf",t.MobileSafari="mf",t.MicrosoftEdge="ps",t.MicrosoftEdgeIOS="oi",t.OperaMini="om",t.Opera="op",t.OperaNext="on"})(Oa||(Oa={}));var Ra;(function(t){t.AmericanExpress="amex",t.Argencard="argencard",t.Cabal="cabal",t.Cencosud="cencosud",t.DinersClub="diners",t.Discover="discover",t.Elo="elo",t.Hipercard="hipercard",t.JCB="jcb",t.Mastercard="mastercard",t.Naranja="naranja",t.TarjetaShopping="targeta-shopping",t.UnionPay="unionpay",t.Visa="visa",t.MIR="mir",t.Maestro="maestro",t.Rupay="rupay"})(Ra||(Ra={}));var qa;(function(t){t.Afghanistan="af",t.Angola="ao",t.Albania="al",t.Andorra="ad",t.UnitedArabEmirates="ae",t.Argentina="ar",t.Armenia="am",t.AntiguaAndBarbuda="ag",t.Australia="au",t.Austria="at",t.Azerbaijan="az",t.Burundi="bi",t.Belgium="be",t.Benin="bj",t.BurkinaFaso="bf",t.Bangladesh="bd",t.Bulgaria="bg",t.Bahrain="bh",t.Bahamas="bs",t.BosniaAndHerzegovina="ba",t.Belarus="by",t.Belize="bz",t.Bolivia="bo",t.Brazil="br",t.Barbados="bb",t.BruneiDarussalam="bn",t.Bhutan="bt",t.Botswana="bw",t.CentralAfricanRepublic="cf",t.Canada="ca",t.Switzerland="ch",t.Chile="cl",t.China="cn",t.CoteDIvoire="ci",t.Cameroon="cm",t.DemocraticRepublicOfTheCongo="cd",t.RepublicOfTheCongo="cg",t.Colombia="co",t.Comoros="km",t.CapeVerde="cv",t.CostaRica="cr",t.Cuba="cu",t.Cyprus="cy",t.CzechRepublic="cz",t.Germany="de",t.Djibouti="dj",t.Dominica="dm",t.Denmark="dk",t.DominicanRepublic="do",t.Algeria="dz",t.Ecuador="ec",t.Egypt="eg",t.Eritrea="er",t.Spain="es",t.Estonia="ee",t.Ethiopia="et",t.Finland="fi",t.Fiji="fj",t.France="fr",t.MicronesiaFederatedStatesOf="fm",t.Gabon="ga",t.UnitedKingdom="gb",t.Georgia="ge",t.Ghana="gh",t.Guinea="gn",t.Gambia="gm",t.GuineaBissau="gw",t.EquatorialGuinea="gq",t.Greece="gr",t.Grenada="gd",t.Guatemala="gt",t.Guyana="gy",t.Honduras="hn",t.Croatia="hr",t.Haiti="ht",t.Hungary="hu",t.Indonesia="id",t.India="in",t.Ireland="ie",t.IranIslamicRepublicOf="ir",t.Iraq="iq",t.Iceland="is",t.Israel="il",t.Italy="it",t.Jamaica="jm",t.Jordan="jo",t.Japan="jp",t.Kazakhstan="kz",t.Kenya="ke",t.Kyrgyzstan="kg",t.Cambodia="kh",t.Kiribati="ki",t.SaintKittsAndNevis="kn",t.SouthKorea="kr",t.Kuwait="kw",t.LaoPeopleSDemocraticRepublic="la",t.Lebanon="lb",t.Liberia="lr",t.Libya="ly",t.SaintLucia="lc",t.Liechtenstein="li",t.SriLanka="lk",t.Lesotho="ls",t.Lithuania="lt",t.Luxembourg="lu",t.Latvia="lv",t.Morocco="ma",t.Monaco="mc",t.Moldova="md",t.Madagascar="mg",t.Maldives="mv",t.Mexico="mx",t.MarshallIslands="mh",t.NorthMacedonia="mk",t.Mali="ml",t.Malta="mt",t.Myanmar="mm",t.Montenegro="me",t.Mongolia="mn",t.Mozambique="mz",t.Mauritania="mr",t.Mauritius="mu",t.Malawi="mw",t.Malaysia="my",t.Namibia="na",t.Niger="ne",t.Nigeria="ng",t.Nicaragua="ni",t.Netherlands="nl",t.Norway="no",t.Nepal="np",t.Nauru="nr",t.NewZealand="nz",t.Oman="om",t.Pakistan="pk",t.Panama="pa",t.Peru="pe",t.Philippines="ph",t.Palau="pw",t.PapuaNewGuinea="pg",t.Poland="pl",t.FrenchPolynesia="pf",t.NorthKorea="kp",t.Portugal="pt",t.Paraguay="py",t.Qatar="qa",t.Romania="ro",t.Russia="ru",t.Rwanda="rw",t.SaudiArabia="sa",t.Sudan="sd",t.Senegal="sn",t.Singapore="sg",t.SolomonIslands="sb",t.SierraLeone="sl",t.ElSalvador="sv",t.SanMarino="sm",t.Somalia="so",t.Serbia="rs",t.SouthSudan="ss",t.SaoTomeAndPrincipe="st",t.Suriname="sr",t.Slovakia="sk",t.Slovenia="si",t.Sweden="se",t.Eswatini="sz",t.Seychelles="sc",t.Syria="sy",t.Chad="td",t.Togo="tg",t.Thailand="th",t.Tajikistan="tj",t.Turkmenistan="tm",t.TimorLeste="tl",t.Tonga="to",t.TrinidadAndTobago="tt",t.Tunisia="tn",t.Turkey="tr",t.Tuvalu="tv",t.Tanzania="tz",t.Uganda="ug",t.Ukraine="ua",t.Uruguay="uy",t.UnitedStates="us",t.Uzbekistan="uz",t.VaticanCity="va",t.SaintVincentAndTheGrenadines="vc",t.Venezuela="ve",t.Vietnam="vn",t.Vanuatu="vu",t.Samoa="ws",t.Yemen="ye",t.SouthAfrica="za",t.Zambia="zm",t.Zimbabwe="zw"})(qa||(qa={}));var ja;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t.OPTIONS="OPTIONS",t.HEAD="HEAD"})(ja||(ja={}));var La;(function(t){t.Center="center",t.Topleft="top-left",t.Top="top",t.Topright="top-right",t.Left="left",t.Right="right",t.Bottomleft="bottom-left",t.Bottom="bottom",t.Bottomright="bottom-right"})(La||(La={}));var Ba;(function(t){t.Jpg="jpg",t.Jpeg="jpeg",t.Png="png",t.Webp="webp",t.Heic="heic",t.Avif="avif",t.Gif="gif"})(Ba||(Ba={}));var za;(function(t){t.Http="http",t.Schedule="schedule",t.Event="event"})(za||(za={}));var Ua;(function(t){t.Waiting="waiting",t.Processing="processing",t.Completed="completed",t.Failed="failed",t.Scheduled="scheduled"})(Ua||(Ua={}));function Ys(t,e){return{$id:t.$id,mainId:t.mainId,productHugoUuid:t.productHugoUuid,productName:t.productName,...e}}async function At(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getDatabases(),e=window.AppwriteClient.getConfig();return{databases:t,config:e}}async function Ql(t){const n=await(await window.AppwriteClient.getAccount()).get();return{...t,updatedBy:n.name}}function xr(){return localStorage.getItem("appwrite-user-name")||""}async function Kl(t,e,r=100){try{const{databases:n,config:a}=await At(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[N.greaterThan("$updatedAt",e),N.equal("mainId",t),N.limit(r),N.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function Js(t,e){const{lastSync:r,limit:n=100}=e;try{const{databases:a,config:o}=await At();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[N.equal("mainId",t),N.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),N.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[N.greaterThan("$updatedAt",r),N.equal("mainId",t),N.limit(n),N.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${t}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function wr(t,e,r=!0){const{databases:n,config:a}=await At();return r&&(e.updatedBy=xr()),await n.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,t,e)}async function zt(t,e,r){try{const n=r(t);if(!n)throw new Error(`Produit ${t} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${t} sur Appwrite...`);const a=Ys(n,e),o=await Ql(a),{databases:i,config:l}=await At(),c=await i.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,t,o);return console.log(`[Appwrite Interactions] Produit ${t} créé avec succès`),c}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${t}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function Zs(t,e){if(!t)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=e?JSON.stringify(e):null,n=await wr(t,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${t}, nouvelle valeur:`,n.store),n}async function Xs(t,e){return wr(t,{who:e})}async function zn(t,e){return wr(t,{stockReel:e})}async function ua(t,e,r=!1){if(!t)throw new Error("ID du produit requis pour la mise à jour de l'override");const n=JSON.stringify(e),a=await wr(t,{totalNeededOverride:n},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${t}:`,e),a}async function Fs(t,e=!0){if(!t)throw new Error("ID du produit requis pour la suppression de l'override");const r=await wr(t,{totalNeededOverride:null},e);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${t}`),r}async function eo(t,e,r){try{const n=r(t);if(!n)throw new Error(`Produit ${t} non trouvé localement pour mise à jour batch`);const a={};return e.stockReel!==void 0&&(a.stockReel=e.stockReel),e.who!==void 0&&(a.who=e.who),e.storeInfo!==void 0&&(a.store=JSON.stringify(e.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${t} déjà sync, update batch normal...`),await wr(t,a)):(console.log(`[Appwrite Interactions] Produit ${t} local, création batch avec upsert...`),await zt(t,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${t}:`,n),n}}async function to(t){const{databases:e,config:r}=await At(),n={...t,createdBy:xr()},a=await e.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Dr.unique(),n);return console.log("[Appwrite Interactions] Achat créé:",a),a}async function ro(t,e){try{const{databases:r,config:n}=await At(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,t),o={...e,products:e.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,t,o);return console.log(`[Appwrite Interactions] Achat ${t} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${t}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function no(t){try{const{databases:e,config:r}=await At();await e.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,t),console.log(`[Appwrite Interactions] Achat ${t} supprimé`)}catch(e){console.error(`[Appwrite Interactions] Erreur suppression achat ${t}:`,e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function ao(t){if(!t?.length)return[];try{const{databases:e,config:r}=await At(),n=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[N.equal("$id",t),N.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(e){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function so(t,e={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(g=>g.includes("products.")),v=i.some(g=>g.includes("purchases.")),f=i.some(g=>g.includes(".create")),p=i.some(g=>g.includes(".update")),m=i.some(g=>g.includes(".delete"));if(c){const g=l;g.updatedBy&&g.updatedBy!==xr()&&(f||p?bt.info(`${g.updatedBy} a modifié le produit "${g.productName}"`,"realtime-other"):m&&bt.info(`${g.updatedBy} a supprimé un produit`,"realtime-other")),f&&e.onProductCreate?e.onProductCreate(g):p&&e.onProductUpdate?e.onProductUpdate(g):m&&e.onProductDelete&&e.onProductDelete(g.$id)}else if(v){const g=l;if(g.createdBy&&g.createdBy!==xr()){const y=g.products?.[0]?.productName||"un produit";f&&g.who!==xr()?bt.info(`${g.who} a ajouté un achat pour ${y}`,"realtime-other"):p&&g.who!==xr()?bt.info(`${g.who} a modifié un achat pour ${y}`,"realtime-other"):m&&bt.info(`${g.who} a supprimé un achat pour ${y}`,"realtime-other")}f&&e.onPurchaseCreate?e.onPurchaseCreate(g):p&&e.onPurchaseUpdate?e.onPurchaseUpdate(g):m&&e.onPurchaseDelete&&e.onPurchaseDelete(g.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],t,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),e.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),e.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),e.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),e.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function oo(t){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${t}`);const{databases:e}=await At(),r=window.AppwriteClient.getConfig(),n=await e.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,t);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(e){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${t}:`,e),null}}async function io(t,e,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${t}`);const{databases:a}=await At(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,t,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:e,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${t}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function da(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:t};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${t.productIds.length} produits, type: ${t.updateType}`);const a=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(e){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,updatedCount:t.productIds.length,updateType:t.updateType,error:r,timestamp:new Date().toISOString()}}}async function lo(t,e,r,n){return da({productIds:t,products:e,updateType:"store",updateData:r,options:n})}async function co(t,e,r,n="replace"){return da({productIds:t,products:e,updateType:"who",updateData:{names:r},options:{mode:n}})}async function uo(t,e,r,n={}){try{const{databases:a,config:o}=await At(),c=await(await window.AppwriteClient.getAccount()).get(),v=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:t,productId:e,productIdType:typeof e,quantities:r,options:n});for(const f of r){const p={products:[e],mainId:t,quantity:f.q,unit:f.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},m=await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,Dr.unique(),p);v.push(m)}return console.log(`[Appwrite Interactions] ${v.length} validations rapides créées pour produit ${e}`),v}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const o=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const Yl=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:da,batchUpdateStore:lo,batchUpdateWho:co,createMainDocument:io,createPurchase:to,createQuickValidationPurchases:uo,deletePurchase:no,enrichedProductToAppwriteProduct:Ys,loadMainEventData:oo,loadPurchasesListByIds:ao,loadUpdatedPurchases:Kl,removeTotalOverride:Fs,subscribeToRealtime:so,syncProductsWithPurchases:Js,updateProduct:wr,updateProductBatch:eo,updateProductStock:zn,updateProductStore:Zs,updateProductWho:Xs,updatePurchase:ro,updateTotalOverride:ua,upsertProduct:zt},Symbol.toStringTag,{value:"Module"}));async function Jl(t){let e;if(e=await fetch(`/evenements/${t}/metadata.json`),!e.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function Ha(t){const e=await fetch(`/evenements/${t}/ingredients_aw/index.json`);if(!e.ok)throw new Error(`Impossible de charger les données Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function Zl(t,e){if(!t)return!0;try{return(await Jl(e)).hugoContentHash!==t}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function vo(t,e){const r=la(t.byDate),n=Pr(Qr([])),{numeric:a,display:o}=Kr(r,n);return{$id:`${t.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:t.ingredientHugoUuid,productName:t.ingredientName,productType:t.ingType,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1,nbRecipes:t.nbRecipes,totalNeededRaw:t.totalNeededRaw,totalAssiettes:t.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:e,purchases:[],byDate:t.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:xt(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function Xl(t,e){return t.map(r=>vo(r,e))}class Fl{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(e){this.dbName=`products-cache-${e}`}async open(){if(!this.db)return new Promise((e,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),e()},n.onupgradeneeded=a=>{const o=a.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),e(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();o.onsuccess=()=>{const i=o.result,l={lastSync:null,allDates:[],hugoContentHash:null};i.forEach(c=>{c.key===this.LAST_SYNC_KEY?l.lastSync=c.value:c.key===this.ALL_DATES_KEY?l.allDates=c.value||[]:c.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=c.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),e(l)},o.onerror=()=>r(o.error)})}async saveProducts(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=a.objectStore(this.PRODUCTS_STORE);o.clear(),e.forEach(i=>{o.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${e.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.METADATA_STORE,"readwrite"),o=a.objectStore(this.METADATA_STORE);o.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),o.put({key:this.ALL_DATES_KEY,value:e.allDates}),e.hugoContentHash!==void 0&&o.put({key:this.HUGO_HASH_KEY,value:e.hugoContentHash}),a.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},a.onerror=()=>n(a.error)})}async updateLastSync(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:e});i.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${e}`),r()},i.onerror=()=>n(i.error)})}async updateAllDates(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:e});i.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${e.length} dates`),r()},i.onerror=()=>n(i.error)})}async updateHugoContentHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:e});i.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${e}`),r()},i.onerror=()=>n(i.error)})}async updateLastHugoMenuUpdate(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:e});i.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(e);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(e);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),e()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function ec(t){const e=new Fl(t);return await e.open(),e}function tc(t){return!!(t.isMerged||t.totalNeededOverride)}function rc(t,e){if(!t||t.length!==e.length)return!0;for(let r=0;r<t.length;r++){const n=t[r],a=e[r];if(n.q!==a.q||n.u!==a.u)return!0}return!1}async function nc(t,e){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},n=new Map;for(const[o,i]of t)n.set(i.productHugoUuid,o);const a=new Set;for(const o of e.ingredients){const i=o.productSemanticKey||`${e.mainGroup_id}_${o.ingredientHugoUuid}`;a.add(i);const l=n.get(o.ingredientHugoUuid),c=l?t.get(l):void 0;if(c){if(rc(c.totalNeededRaw,o.totalNeededRaw)){const f=ac(c,o);if(f&&r.overrideConflicts.push(f),c.isMerged){const p=c.displayTotalNeeded;Wa(c,o),r.mergedProductsUpdated.push({product:c,oldDisplayTotal:p,newDisplayTotal:c.displayTotalNeeded,currentOverride:c.totalNeededOverrideParsed,semanticKey:i})}else Wa(c,o);r.updated.push(i)}t.set(i,c)}else{r.added.push(o);const v=vo(o,e.mainGroup_id);t.set(v.$id,v)}}for(const[o,i]of t)a.has(o)||(r.removed.push(i),!tc(i)&&!i.purchases?.length&&!i.stockReel&&!i.who?.length&&t.delete(o));return r.overrideConflicts.length>0&&await sc(r.overrideConflicts),r.summary=ic(r),r}function ac(t,e){if(!t.totalNeededOverride||!t.totalNeededOverrideParsed)return null;const r=la(e.byDate),n=xt(r),a=t.displayTotalNeeded;return a!==n?{product:t,oldDisplayTotal:a,newDisplayTotal:n,currentOverride:t.totalNeededOverrideParsed,semanticKey:t.$id}:null}async function sc(t){for(const e of t){const r={...e.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:e.oldDisplayTotal,newTotalDisplay:e.newDisplayTotal};JSON.stringify(r);try{await ua(e.product.$id,r,!1)}catch(n){console.error(`Erreur lors de la mise à jour de l'override pour ${e.product.$id}:`,n)}}}function Wa(t,e){t.byDate=e.byDate,t.nbRecipes=e.nbRecipes,t.totalAssiettes=e.totalAssiettes,t.productType=e.ingType,t.pFrais=e.pFrais||!1,t.pSurgel=e.pSurgel||!1,oc(t)}function oc(t){t.totalNeededArray=la(t.byDate),t.displayTotalNeeded=xt(t.totalNeededArray);const e=Pr(Qr(t.purchases)),{numeric:r,display:n}=Kr(t.totalNeededArray,e);t.totalPurchasesArray=e,t.missingQuantityArray=r,t.displayMissingQuantity=n,t.stockOrTotalPurchases=t.purchases.length>0?t.displayTotalPurchases:t.displayTotalNeeded}function ic(t){const e=[];if((t.added.length>0||t.updated.length>0||t.removed.length>0)&&e.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),t.added.length>0&&e.push(`${t.added.length} nouveau(x) ingrédient(s)`),t.updated.length>0&&e.push(` ${t.updated.length} ingrédient(s) mis à jour`),t.overrideConflicts.length>0&&e.push(`⚠️ ${t.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),t.mergedProductsUpdated.length>0&&e.push(`🔀 ${t.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),t.removed.length>0){const r=t.removed.filter(n=>n.purchases?.length||n.stockReel||n.who?.length).length;r>0?e.push(`⚠️ ${r} suppression(s) avec données conservées`):e.push(`${t.removed.length} ingrédient(s) supprimé(s)`)}return e.length>0?e.join(", "):"Aucune modification détectée"}class lc{isMobileQuery=new xl("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return bt.toasts}get toast(){return bt}#e=O(Re({isOpen:!1,conflicts:[]}));get modalOverride(){return s(this.#e)}set modalOverride(e){b(this.#e,e,!0)}}const Nr=new lc,Ga=1e3;class cc{#e=new bl;#r=O(null);#o=O(null);#d=O(!1);#u=O(!1);#i=O(null);#c=O(!1);#l=O(!1);#a=O(null);#v=O(null);#s=O(Re([]));#f=O(Re({start:null,end:null}));get dateRange(){return s(this.#f)}set dateRange(e){b(this.#f,e,!0)}#h=V(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDateInRange(){return s(this.#h)}set hasSingleDateInRange(e){b(this.#h,e)}#m=V(()=>s(this.#s).length===1);get hasSingleDateEvent(){return s(this.#m)}set hasSingleDateEvent(e){b(this.#m,e)}#g=V(()=>{if(s(this.#s).length===0)return!0;const e=new Date(this.lastAvailableDate);return e.setHours(23,59,59,999),e<new Date});get isEventPassed(){return s(this.#g)}set isEventPassed(e){b(this.#g,e)}#n=null;#_=null;#b=O(!1);#p=null;#y=O(!1);#w=O();#$=O(Re([]));get hasPendingConflicts(){return s(this.#$).length>0}get pendingConflicts(){return s(this.#$)}#t=O(Re({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get currentMainId(){return s(this.#r)}get loading(){return s(this.#u)}get error(){return s(this.#i)}get lastSync(){return s(this.#a)}get syncing(){return s(this.#c)}get availableDates(){return s(this.#s)}setDateRange(e,r){if(!e&&!r){this.dateRange={start:null,end:null};return}if(!e||!r){this.dateRange={start:e||r,end:e||r};return}const n=new Date(e)<=new Date(r)?e:r,a=new Date(e)>=new Date(r)?e:r;this.dateRange={start:n,end:a}}isFullRange(){return Hl(this.dateRange,s(this.#s))}initializeDateRange(){const e=zl(s(this.#s));e&&(this.dateRange=e),console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}selectUpcomingDates(){const e=Vs(s(this.#s));e&&(this.dateRange=e)}isUpcomingRange(){return Wl(this.dateRange,s(this.#s))}get firstAvailableDate(){return Gs(s(this.#s))}get lastAvailableDate(){return ca(s(this.#s))}get realtimeConnected(){return s(this.#l)}#A=V(()=>{const e=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${e.length} products`),e});get enrichedProducts(){return s(this.#A)}set enrichedProducts(e){b(this.#A,e)}#k=V(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const e=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[a,o]of this.#e){if(!o.byDate||!this.#ee(o))continue;Object.keys(o.byDate).some(c=>{const v=new Date(c);return v>=e&&v<=r})&&n.set(a,o)}return n});get filteredProductsMap(){return s(this.#k)}set filteredProductsMap(e){b(this.#k,e)}#L(){console.log("[Store] ⚡ Single date mode - optimized calculation");const e=new Map,r=this.dateRange.start;for(const[n,a]of this.#e){if(!a.byDate?.[r])continue;const o=a.byDate[r],i=[r],l=new Map;o.recipes&&o.recipes.length>0&&l.set(r,o.recipes);const c=Nn(a,r),v=c.filter(p=>p.q>0),f=c.filter(p=>p.q<0).map(p=>({q:Math.abs(p.q),u:p.u}));e.set(n,{quantities:o.totalConsolidated||[],formattedQuantities:xt(o.totalConsolidated||[]),nbRecipes:o.recipes?.length||0,totalAssiettes:o.totalAssiettes||0,stockResult:c,availableQuantities:v,missingQuantities:f,formattedAvailableQuantities:Mn(c),hasAvailable:v.length>0,hasMissing:f.length>0,concernedDates:i,recipesByDate:l})}return e}#T=V(()=>{if(console.log("[Store] Calcul unifié des stats par produit"),this.hasSingleDateInRange)return this.#L();const e=new Map;if(this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using precomputed data",this.dateRange);for(const[n,a]of this.#e){const o=Nn(a,this.dateRange.end),i=o.filter(p=>p.q>0),l=o.filter(p=>p.q<0).map(p=>({q:Math.abs(p.q),u:p.u})),c=a.byDate?Object.keys(a.byDate).sort():[],v=new Map;let f=0;if(a.byDate)for(const[p,m]of Object.entries(a.byDate))m.recipes&&m.recipes.length>0&&(v.set(p,m.recipes),f+=m.recipes.length);e.set(n,{quantities:a.totalNeededArray,formattedQuantities:xt(a.totalNeededArray),nbRecipes:a.nbRecipes||0,totalAssiettes:a.totalAssiettes||0,stockResult:o,availableQuantities:i,missingQuantities:l,formattedAvailableQuantities:Mn(o),hasAvailable:i.length>0,hasMissing:l.length>0,concernedDates:c,recipesByDate:v})}return e}for(const[n,a]of this.filteredProductsMap){if(!a.byDate)continue;const o=Ml(a.byDate),i=Cl(o,this.dateRange.start,this.dateRange.end),l=i.length>0?xt(i):"",c=Dl(a.byDate,this.dateRange.start,this.dateRange.end),v=Object.keys(a.byDate).filter(E=>{const w=new Date(E),A=new Date(this.dateRange.start),T=new Date(this.dateRange.end);return w>=A&&w<=T}).sort(),f=new Map;let p=0;v.forEach(E=>{const w=a.byDate[E]?.recipes||[];w.length>0&&(f.set(E,w),p+=w.length)});const m=Nn(a,this.dateRange.end),g=m.filter(E=>E.q>0),y=m.filter(E=>E.q<0).map(E=>({q:Math.abs(E.q),u:E.u}));e.set(n,{quantities:i,formattedQuantities:l,nbRecipes:p,totalAssiettes:c,stockResult:m,availableQuantities:g,missingQuantities:y,formattedAvailableQuantities:Mn(m),hasAvailable:g.length>0,hasMissing:y.length>0,concernedDates:v,recipesByDate:f})}return e});get productsStatsByDateRange(){return s(this.#T)}set productsStatsByDateRange(e){b(this.#T,e)}#C=V(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(e=>e.pFrais).length,surgel:this.enrichedProducts.filter(e=>e.pSurgel).length,merged:this.enrichedProducts.filter(e=>e.isMerged).length}));get stats(){return s(this.#C)}set stats(e){b(this.#C,e)}#D=V(()=>{const e=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(e)]});get uniqueStores(){return s(this.#D)}set uniqueStores(e){b(this.#D,e)}#N=V(()=>{const e=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(e)]});get uniqueWho(){return s(this.#N)}set uniqueWho(e){b(this.#N,e)}#M=V(()=>{const e=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(e)]});get uniqueProductTypes(){return s(this.#M)}set uniqueProductTypes(e){b(this.#M,e)}#I=V(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((i,l)=>i.$id.localeCompare(l.$id));if(s(this.#t).groupBy==="none")return{"":r};const n=Object.groupBy(r,i=>s(this.#t).groupBy==="store"?i.storeInfo?.storeName||"Non défini":i.productType||"Non défini"),a=Object.keys(n).sort((i,l)=>i===""?1:l===""?-1:i.localeCompare(l)),o={};return a.forEach(i=>{o[i]=n[i]}),o});get groupedFilteredProducts(){return s(this.#I)}set groupedFilteredProducts(e){b(this.#I,e)}async initialize(e,r){if(!e?.trim())throw new Error("mainId invalide fourni");if(s(this.#d)&&s(this.#r)===e){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${e}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${e}`),b(this.#r,e,!0),b(this.#o,r,!0);try{this.#n=await ec(e)}catch(n){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",n),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#i,null);try{if(await this.#B(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let a;a=await Ha(r),console.log(`[ProductsStore] Hugo chargé: ${a.ingredients.length} ingrédients`),b(this.#v,a.hugoContentHash,!0),Xl(a.ingredients,e).forEach(l=>{this.#e.set(l.$id,l)}),b(this.#s,[...a.allDates],!0),await oo(e)||await io(a.mainGroup_id,a.hugoContentHash,a.allDates,a.name),await this.#O()}this.initializeDateRange(),await this.#z(),b(this.#d,!0);const n=this.#F();this.#_=so(e,n),this.#G(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#R(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(n){const a=n instanceof Error?n.message:"Erreur lors de l'initialisation";throw b(this.#i,a,!0),console.error("[ProductsStore]",a,n),n}}async#B(){if(this.#n)try{const e=await this.#n.loadProducts();e.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();b(this.#a,r.lastSync,!0),b(this.#s,[...r.allDates],!0),b(this.#v,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${e.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(e){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",e)}}async#z(){if(s(this.#r)){b(this.#c,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const e=await Js(s(this.#r),{lastSync:s(this.#a),limit:Ga});if(console.log(`[ProductsStore] ${e.length} produits récupérés depuis Appwrite`),e.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#q(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await _l(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Yl);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#a),Ga);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#E(o,a)}})}this.#H(),await this.#U(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(e){throw console.error("[ProductsStore] Erreur lors du sync:",e),e}finally{b(this.#c,!1)}}}async#U(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:s(this.#a),allDates:[...s(this.#s)],hugoContentHash:s(this.#v)}),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#te(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.updateLastSync(s(this.#a)),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#O(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.updateLastSync(s(this.#a)),await this.#n.updateAllDates([...s(this.#s)]),await this.#n.updateHugoContentHash(s(this.#v)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(e){console.error("[ProductsStore] Erreur persistance cache complet:",e)}}async#P(e){if(!(!this.#n||e.length===0))try{const r=e.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#H(){b(this.#a,new Date().toISOString(),!0)}async#R(){if(!s(this.#o)||s(this.#u))return!1;try{const e=await Zl(s(this.#v),s(this.#o));return e&&!s(this.#b)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${s(this.#o)}, analyse approfondie en cours...`),b(this.#b,!0),await this.#W()),b(this.#w,new Date,!0),e}catch(e){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",e),!1}}async#W(){if(!s(this.#o)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const e=await Ha(s(this.#o)),r=await nc(this.#e,e);if(console.log(`[ProductsStore  - hugo change] ${r.summary}`),r.overrideConflicts.length>0&&(b(this.#$,r.overrideConflicts,!0),bt.error(`${r.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>Nr.modalOverride.isOpen=!0}})),r.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${r.mergedProductsUpdated.length} produits fusionnés modifiés`),r.removed.length>0){const n=r.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length);n.length>0&&console.log(`[ProductsStore] ℹ️ ${n.length} ingrédients supprimés conservés (données utilisateur)`)}b(this.#s,[...e.allDates],!0),b(this.#v,e.hugoContentHash,!0),this.initializeDateRange(),await this.#O(),(r.added.length||r.updated.length||r.removed.length)&&bt.success(r.summary),b(this.#b,!1)}catch(e){console.error("[ProductsStore] Erreur sync Hugo:",e),bt.error("Erreur lors de la mise à jour Hugo")}}#G(){this.#p&&clearInterval(this.#p),this.#p=setInterval(async()=>{await this.#R()},6e4)}#V(){this.#p&&(clearInterval(this.#p),this.#p=null)}#q(e,r){return r?this.#S(e,r):this.#Q(e)}#Q(e){const r=Pr(Qr(e.purchases??[])),n=[],{numeric:a,display:o}=Kr(n,r),i=Jt(e.stockReel)??null,l=xt(r),c=e.store?Jt(e.store):null,v=i?`${i.quantity} ${i.unit}`:l;return{$id:e.$id,$createdAt:e.$createdAt,$updatedAt:e.$updatedAt,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:e.isSynced,mainId:e.mainId,status:e.status,who:e.who,store:e.store,stockReel:e.stockReel,previousNames:e.previousNames,isMerged:e.isMerged,mergedFrom:e.mergedFrom,mergeDate:e.mergeDate,mergeReason:e.mergeReason,mergedInto:e.mergedInto,totalNeededOverride:e.totalNeededOverride,purchases:e.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:v,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:Jt(e.totalNeededOverride),displayTotalOverride:(()=>{const f=Jt(e.totalNeededOverride);return f?xt([f.totalOverride]):""})()}}#S(e,r){const n=e.purchases??r.purchases,a=Pr(Qr(n??[])),o=xt(a),{numeric:i,display:l}=Kr(r.totalNeededArray,a),c=e.stockReel??r.stockReel,v=c?Jt(c):r.stockParsed,f=e.store??r.store,p=f?Jt(f):r.storeInfo,m=v?`${v.quantity} ${v.unit}`:o;return e.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:e.$updatedAt,productName:e.productName??r.productName,isSynced:e.isSynced??r.isSynced,mainId:e.mainId??r.mainId,status:e.status??r.status,who:e.who??r.who,store:f,stockReel:c,purchases:n,previousNames:e.previousNames??r.previousNames,isMerged:e.isMerged??r.isMerged,mergedFrom:e.mergedFrom??r.mergedFrom,mergeDate:e.mergeDate??r.mergeDate,mergeReason:e.mergeReason??r.mergeReason,mergedInto:e.mergedInto??r.mergedInto,totalNeededOverride:e.totalNeededOverride??r.totalNeededOverride,storeInfo:p,stockParsed:v,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:m,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:Jt(e.totalNeededOverride??r.totalNeededOverride),displayTotalOverride:(()=>{const g=Jt(e.totalNeededOverride??r.totalNeededOverride);return g?xt([g.totalOverride]):""})()}}#re(e){e.totalPurchasesArray=Pr(Qr(e.purchases??[]));const{numeric:r,display:n}=Kr(e.totalNeededArray,e.totalPurchasesArray);e.missingQuantityArray=r,e.displayMissingQuantity=n,e.displayTotalPurchases=xt(e.totalPurchasesArray)}#ne(e){e.length&&(e.forEach(r=>this.#x(r)),console.log(`[ProductsStore] ${e.length} produits upserted`))}#x(e){const r=this.#e.get(e.$id),n=this.#q(e,r);this.#e.set(e.$id,n)}#K(e){this.#e.delete(e)}async#Y(e){if(!e.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",e.$id),[];const r=e.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#X(r,e),r}async#J(e){if(e.products?.length){const r=e.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#E(r,e),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await ao([e.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#E(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#Z(e){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===e));return r.forEach(n=>{this.#x(n)}),r.map(n=>n.$id)}#j(e){return{...e,products:e.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:e.mainId}}#X(e,r){const n=this.#j(r),a=[];e.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#S({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#E(e,r){const n=this.#j(r),a=[];e.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(v=>v.$id===n.$id);if(c>=0){const v=[...l];v[c]=n;const f=this.#S({...i,purchases:v,status:"active"},i);a.push(f)}else{const v=this.#S({...i,purchases:[...l,r],status:"active"},i);a.push(v)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#F(){return{onProductCreate:e=>{if(this.#x(e),this.#n){const r=this.#e.get(e.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:e=>{if(this.#x(e),this.#n){const r=this.#e.get(e.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:e=>{this.#K(e),this.#n&&this.#n.deleteProduct(e).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async e=>{const r=await this.#Y(e);await this.#P(r)},onPurchaseUpdate:async e=>{const r=await this.#J(e);await this.#P(r)},onPurchaseDelete:async e=>{const r=await this.#Z(e);await this.#P(r)},onConnect:()=>{b(this.#l,!0)},onDisconnect:()=>{b(this.#l,!1)},onError:e=>{console.error("[ProductsStore] Erreur realtime:",e)}}}#ee(e){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!e.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!e.storeInfo?.storeName||!s(this.#t).selectedStores.includes(e.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!e.who||!e.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!e.productType||!s(this.#t).selectedProductTypes.includes(e.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&e.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&e.pSurgel))}setSearchQuery=Tl(e=>{s(this.#t).searchQuery=e},()=>500);toggleProductType(e){const r=s(this.#t).selectedProductTypes.indexOf(e);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(e)}toggleTemperature(e){const r=s(this.#t).selectedTemperatures.indexOf(e);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(e)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(e){s(this.#t).groupBy=e}toggleStore(e){const r=s(this.#t).selectedStores.indexOf(e);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(e)}toggleWho(e){const r=s(this.#t).selectedWho.indexOf(e);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(e)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(e){s(this.#t).sortColumn===e?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=e,s(this.#t).sortDirection="asc")}clearFilters(){b(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(e){return s(this.#t).sortColumn?[...e].sort((r,n)=>{let a=r[s(this.#t).sortColumn],o=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#t).sortDirection==="asc"?-1:1:a>o?s(this.#t).sortDirection==="asc"?1:-1:0}):e}getEnrichedProductById(e){return this.#e.get(e)??null}hasConversions(e){const r=this.#e.get(e);return r?.byDate?Nl(r.byDate):!1}async forceReload(e,r){await this.clearCache(),await this.initialize(e,r)}async clearCache(){this.#e.clear(),b(this.#s,[],!0),b(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(e,r){const n=r?"isSyncing":"active";e.forEach(a=>{const o=this.#e.get(a);if(o){const i={...o,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${e.length} produits → ${n}`)}clearSyncStatus(){const e=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&e.push(r);e.length>0&&(this.setSyncStatus(e,!1),console.log(`[ProductsStore] Nettoyage de ${e.length} produits en statut "isSyncing"`))}destroy(){this.#_?.(),this.#_=null,this.#V(),this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const F=new cc;function Va(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const e=new URLSearchParams(window.location.search).get("listId");if(!e||!e.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return e.trim()}function uc(t){const e=t.substring(0,4),r=t.slice(-10);return`${e}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const dc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var vc=Qi("<svg><!><!></svg>");function pe(t,e){W(e,!0);const r=Oe(e,"color",3,"currentColor"),n=Oe(e,"size",3,24),a=Oe(e,"strokeWidth",3,2),o=Oe(e,"absoluteStrokeWidth",3,!1),i=Oe(e,"iconNode",19,()=>[]),l=fe(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=vc();Aa(c,p=>({...dc,...l,width:n(),height:n(),stroke:r(),"stroke-width":p,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var v=u(c);lt(v,17,i,Zr,(p,m)=>{var g=V(()=>rs(s(m),2));let y=()=>s(g)[0],E=()=>s(g)[1];var w=H(),A=I(w);el(A,y,!0,(T,x)=>{Aa(T,()=>({...E()}))}),h(p,w)});var f=d(v);le(f,()=>e.children??se),h(t,c),G()}function Un(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];pe(t,he({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function fc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];pe(t,he({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function hc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];pe(t,he({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function pc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];pe(t,he({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function mc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];pe(t,he({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Xr(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];pe(t,he({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function gc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];pe(t,he({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function fo(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];pe(t,he({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function _c(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];pe(t,he({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function bc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];pe(t,he({name:"circle-arrow-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function yc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];pe(t,he({name:"circle-arrow-right"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Qa(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];pe(t,he({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function wc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];pe(t,he({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Sc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];pe(t,he({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function xc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];pe(t,he({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function $c(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];pe(t,he({name:"clipboard-pen-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Pc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];pe(t,he({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Ec(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];pe(t,he({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function va(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];pe(t,he({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Ac(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];pe(t,he({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function kc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];pe(t,he({name:"euro"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function sn(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];pe(t,he({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function ho(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];pe(t,he({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Tc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];pe(t,he({name:"info"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Cc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];pe(t,he({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Dc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];pe(t,he({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Nc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];pe(t,he({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function po(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];pe(t,he({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Mc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];pe(t,he({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Ic(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];pe(t,he({name:"message-circle-more"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Oc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];pe(t,he({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function mo(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];pe(t,he({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function go(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];pe(t,he({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Rc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];pe(t,he({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function tn(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];pe(t,he({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function qc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];pe(t,he({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function jc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];pe(t,he({name:"plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Lc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];pe(t,he({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Bc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];pe(t,he({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function zc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];pe(t,he({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Uc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];pe(t,he({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Hc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];pe(t,he({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function _o(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];pe(t,he({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function er(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];pe(t,he({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function bo(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];pe(t,he({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Hn(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];pe(t,he({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function nr(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];pe(t,he({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function yo(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];pe(t,he({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Wc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];pe(t,he({name:"thermometer"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function xn(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];pe(t,he({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function wo(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];pe(t,he({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function rn(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];pe(t,he({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Wn(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];pe(t,he({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Gc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];pe(t,he({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Rt(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];pe(t,he({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Vc(t,e){const r=t.reduce((a,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return a+i+l},0),n=e.invoiceTotal?1:0;return r+n}async function Qc(t,e){const r=t.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const a=e.purchaseStatus||"delivered";let o=e.purchaseDeliveryDate||null;a==="delivered"&&!o&&(o=new Date().toISOString());const i=t.flatMap(c=>c.missingQuantities.map(v=>({productId:c.productId,quantity:v.q,unit:v.u,status:a,notes:e.notes||"",store:e.store||"",who:e.who||null,price:null,orderDate:null,deliveryDate:o,createdBy:n})));return{mainId:t[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:e}}async function Kc(t,e,r){if(!e?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};e.forEach(m=>{m.productData&&(m.productData.mainId=t)});const n=Vc(e,r);console.log(`[Appwrite Interactions] Achat groupé: ${e.length} produits, ${n} opérations totales`);const a=100,o=[];if(n<=a)o.push(e);else{let m=[],g=0;for(const y of e){const E=(y.isSynced?0:1)+y.missingQuantities.length;g+E>a?(m.length>0&&o.push(m),m=[y],g=E):(m.push(y),g+=E)}m.length>0&&o.push(m)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,v=0;for(let m=0;m<o.length;m++){const g=o[m];console.log(`[Appwrite Interactions] Exécution du lot ${m+1}/${o.length} (${g.length} produits)`);try{const y=await Qc(g,r),E=await Yc(y);if(i.push(E),E.success)l+=E.productsCreated,c+=E.purchasesCreated,v+=E.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${m+1}: ${E.error}`);break}}catch(y){const E=y instanceof Error?y.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${m+1}:`,y),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:E,timestamp:new Date().toISOString()});break}}const f=i.every(m=>m.success),p=i.some(m=>!m.success);return{success:f,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:v,error:p?"Un ou plusieurs lots ont échoué":void 0}}async function Yc(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:t};console.log(`[Appwrite Interactions] Exécution du lot: ${t.batchData.productsToCreate.length} produits à créer, ${t.batchData.purchasesToCreate.length} achats à créer`);const a=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(e){console.error("[Appwrite Interactions] Erreur exécution lot:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:t.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var Jc=(t,e,r)=>e(s(r).id),Zc=S('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),Xc=S('<span class="flex items-center gap-1"><!> </span>'),Fc=S('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),eu=S('<div class="flex flex-wrap gap-2"></div> <!>',1);function Fr(t,e){W(e,!0);let r=Oe(e,"badgeSize",3,"badge-lg"),n=Oe(e,"color",3,"primary"),a=Oe(e,"badgeStyle",3,""),o=Oe(e,"onToggleItem",3,()=>{}),i=Oe(e,"showStats",3,!1),l=Oe(e,"showIcon",3,!0),c=O(Re({}));sr(()=>{const w={};e.items.forEach(A=>{w[A.id]=A.selected??!0}),b(c,w,!0)});function v(w){s(c)[w]=!s(c)[w],o()(w)}const f=V(()=>Object.values(s(c)).filter(Boolean).length),p=V(()=>Object.values(s(c)).filter(w=>!w).length);var m=eu(),g=I(m);lt(g,21,()=>e.items,w=>w.id,(w,A)=>{const T=V(()=>s(c)[s(A).id]);var x=Zc();x.__click=[Jc,v,A];var $=u(x);{var _=Q=>{var U=H(),ne=I(U);fr(ne,()=>s(A).icon,(be,j)=>{j(be,{class:"h-3 w-3",get title(){return s(A).title}})}),h(Q,U)};k($,Q=>{s(A).icon&&Q(_)})}var P=d($,2),C=u(P),D=d(P,2);{var te=Q=>{var U=H(),ne=I(U);{var be=M=>{Xr(M,{size:16})},j=M=>{jc(M,{size:16})};k(ne,M=>{s(T)?M(be):M(j,!1)})}h(Q,U)};k(D,Q=>{l()&&Q(te)})}B(()=>{Te(x,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(T)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),rr(x,"title",s(T)?"Retirer de la liste":"Réajouter à la liste"),L(C,s(A).label)}),h(w,x)});var y=d(g,2);{var E=w=>{var A=Fc(),T=u(A),x=u(T),$=u(x);Xr($,{class:"text-success h-3 w-3"});var _=d($),P=d(x,2);{var C=Q=>{var U=Xc(),ne=u(U);Rt(ne,{class:"text-error h-3 w-3"});var be=d(ne);B(()=>L(be,` ${s(p)??""} retirés`)),h(Q,U)};k(P,Q=>{s(p)>0&&Q(C)})}var D=d(T,2),te=u(D);B(()=>{L(_,` ${s(f)??""} actifs`),L(te,`Total: ${e.items.length??""} items`)}),h(w,A)};k(y,w=>{i()&&w(E)})}h(t,m),G()}Fe(["click"]);function tu(t,e){b(e,!s(e))}var ru=S('<span class="text-base-content font-semibold"> </span>'),nu=S('<div class="text-base-content/80 flex-1"> </div>'),au=S('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),su=S('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),ou=S('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function So(t,e){let r=Oe(e,"icon",3,Tc),n=Oe(e,"class",3,""),a=Oe(e,"initiallyOpen",3,!1),o=r(),i=O(Re(a())),l=Re(e.children);var c=ou(),v=u(c);v.__click=[tu,i];var f=u(v),p=u(f);o(p,{size:24,class:"text-base-content me-4 flex-shrink-0"});var m=d(p,2);{var g=$=>{var _=ru(),P=u(_);B(()=>L(P,e.title)),h($,_)};k(m,$=>{e.title&&$(g)})}var y=d(f,2);{var E=$=>{var _=nu(),P=u(_);B(()=>L(P,e.contentVisible)),h($,_)};k(y,$=>{e.contentVisible&&$(E)})}var w=d(y,2);{var A=$=>{var _=au(),P=u(_),C=u(P);{var D=U=>{var ne=Et("en savoir plus");h(U,ne)},te=U=>{var ne=Et("masquer");h(U,ne)};k(C,U=>{s(i)?U(te,!1):U(D)})}var Q=d(P,2);{let U=V(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(i)?"rotate-180":""}`);fo(Q,{get class(){return s(U)}})}h($,_)};k(w,$=>{l&&$(A)})}var T=d(v,2);{var x=$=>{var _=su(),P=u(_),C=u(P);le(C,()=>e.children??se),B(()=>Te(_,1,`overflow-hidden transition-all duration-200 ${s(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h($,_)};k(T,$=>{l&&$(x)})}B(()=>{Te(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Ls(c,e.style),Te(v,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),rr(v,"aria-expanded",s(i))}),h(t,c)}Fe(["click"]);async function iu(t,e,r,n,a,o,i,l){if(!(!s(e)||s(r))){b(r,!0),b(n,null),b(a,null);try{const c=`FACTURE_${Date.now()}`,v=s(o).map(g=>g.$id);F.setSyncStatus(v,!0);const f=[];for(const g of s(o))f.push({productId:g.$id,isSynced:g.isSynced,productData:g,missingQuantities:g.missingQuantityArray||[]});const p={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(o).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${f.length} produits...`),l.onClose();const m=await Kc(F.currentMainId,f,p);if(m.success)b(a,{purchases:m.totalPurchasesCreated,expense:m.totalExpensesCreated>0,batches:m.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${m.totalProductsCreated} produits synchronisés, ${m.totalPurchasesCreated} achats créés, ${m.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(m.error||"Erreur lors de la création de l'achat groupé")}catch(c){const v=c instanceof Error?c.message:"Erreur inconnue";b(n,v,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),F.clearSyncStatus()}finally{b(r,!1)}}}function Ka(t,e,r){s(e)||r.onClose()}var lu=S('<div class="alert alert-error"><!> <span> </span></div>'),cu=S('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),uu=S(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),du=S("<option> </option>"),vu=S("<option> </option>"),fu=S('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),hu=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),pu=S("<!> ",1),mu=S(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function gu(t,e){W(e,!0);let r=O(!1),n=O(null),a=O(null),o=Re({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=O(Re(new Set));sr(()=>{b(i,new Set(e.products.map(ge=>ge.$id)),!0)});const l=V(()=>e.products.filter(ge=>s(i).has(ge.$id))),c=V(()=>s(l).length!==0),v=V(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function f(ge){const ke=new Set(s(i));ke.has(ge)?ke.delete(ge):ke.add(ge),b(i,ke,!0)}const p=V(()=>e.products.map(ge=>({id:ge.$id,label:ge.productName,title:ge.productName})));var m=mu(),g=u(m),y=u(g),E=u(y),w=u(E);er(w,{class:"h-5 w-5"});var A=d(w),T=d(E,2);T.__click=[Ka,r,e];var x=u(T);Rt(x,{class:"h-4 w-4"});var $=d(y,2),_=u($);{var P=ge=>{var ke=lu(),Ce=u(ke);xn(Ce,{class:"h-4 w-4"});var Ge=d(Ce,2),Ke=u(Ge);B(()=>L(Ke,s(n))),h(ge,ke)};k(_,ge=>{s(n)&&ge(P)})}var C=d(_,2);{var D=ge=>{var ke=cu(),Ce=u(ke);Xr(Ce,{class:"h-4 w-4"});var Ge=d(Ce,2),Ke=u(Ge),mt=d(Ke);{var kt=Xe=>{var ot=Et("+ 1 dépense globale");h(Xe,ot)};k(mt,Xe=>{s(a).expense&&Xe(kt)})}var tt=d(mt,2);{var gt=Xe=>{var ot=Et();B(()=>L(ot,`(traité en ${s(a).batches??""} lots)`)),h(Xe,ot)};k(tt,Xe=>{s(a).batches&&s(a).batches>1&&Xe(gt)})}B(()=>L(Ke,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),h(ge,ke)};k(C,ge=>{s(a)&&ge(D)})}var te=d(C,2),Q=u(te);So(Q,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(ge,ke)=>{var Ce=uu();h(ge,Ce)},$$slots:{default:!0}});var U=d(te,2),ne=d(u(U),2),be=u(ne),j=u(be),M=u(j);nr(M,{class:"h-4 w-4 opacity-50"});var R=d(M,2),ie=d(j,2);lt(ie,21,()=>F.uniqueStores,Zr,(ge,ke)=>{var Ce=du(),Ge=u(Ce),Ke={};B(()=>{L(Ge,s(ke)),Ke!==(Ke=s(ke))&&(Ce.value=(Ce.__value=s(ke))??"")}),h(ge,Ce)});var K=d(be,2),ee=u(K),re=u(ee);rn(re,{class:"h-4 w-4 opacity-50"});var Se=d(re,2),z=d(ee,2);lt(z,21,()=>F.uniqueWho,Zr,(ge,ke)=>{var Ce=vu(),Ge=u(Ce),Ke={};B(()=>{L(Ge,s(ke)),Ke!==(Ke=s(ke))&&(Ce.value=(Ce.__value=s(ke))??"")}),h(ge,Ce)});var Y=d(K,2),ae=u(Y),ue=u(ae);kc(ue,{class:"h-4 w-4 opacity-50"});var xe=d(ue,2),Z=d(ne,2),me=u(Z),q=u(me),X=u(q);X.value=X.__value="delivered";var Ae=d(X);Ae.value=Ae.__value="ordered";var we=d(q,2),Ee=d(me,2);{var oe=ge=>{var ke=fu(),Ce=u(ke),Ge=d(u(Ce),2);B(()=>Ge.disabled=s(r)),Ie(Ge,()=>o.deliveryDate,Ke=>o.deliveryDate=Ke),h(ge,ke)};k(Ee,ge=>{o.status==="ordered"&&ge(oe)})}var ye=d(Z,2),je=u(ye),de=u(je);mo(de,{class:"h-4 w-4 opacity-50"});var We=d(de,2),ce=d(U,2),$e=d(u(ce),2);Fr($e,{get items(){return s(p)},onToggleItem:f,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Ue=d(ce,2),_e=u(Ue);_e.__click=[Ka,r,e];var st=d(_e,2);st.__click=[iu,c,r,n,a,l,o,e];var qe=u(st);{var Pe=ge=>{var ke=hu();h(ge,ke)},Ze=ge=>{var ke=pu(),Ce=I(ke);er(Ce,{class:"h-4 w-4"});var Ge=d(Ce);B(()=>L(Ge,` Valider ${s(l).length??""} produit(s)`)),h(ge,ke)};k(qe,ge=>{s(r)?ge(Pe):ge(Ze,!1)})}B(()=>{L(A,` ${s(v)??""}`),T.disabled=s(r),R.disabled=s(r),Se.disabled=s(r),xe.disabled=s(r),q.disabled=s(r),Te(we,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),We.disabled=s(r),_e.disabled=s(r),st.disabled=s(r)||!s(c)}),Ie(R,()=>o.store,ge=>o.store=ge),Ie(Se,()=>o.who,ge=>o.who=ge),Ie(xe,()=>o.expense,ge=>o.expense=ge),cr(q,()=>o.status,ge=>o.status=ge),Ie(We,()=>o.notes,ge=>o.notes=ge),h(t,m),G()}Fe(["click"]);function Gn(t){switch(t.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:fc};case"animaux":return{displayName:"Viandes et Poissons",icon:hc};case"legumes":return{displayName:"Fruits et Légumes",icon:mc};case"sucres":return{displayName:"Sucrées",icon:pc};case"lof":return{displayName:"L.O.F",icon:Ac};case"autres":return{displayName:"Autres",icon:gc};case"epices":return{displayName:"Assaisonnements",icon:Dc};case"frais":return{displayName:"Produits Frais",icon:zc};default:return{displayName:t,icon:tn}}}function Ya(t,e){return e==="kg"?{quantity:t*1e3,unit:"gr."}:e==="l."?{quantity:t*1e3,unit:"ml"}:{quantity:t,unit:e}}function fa(t,e){return e==="gr."&&t>=1e3?`${(t/1e3).toFixed(1)} kg`:e==="ml"&&t>=1e3?`${(t/1e3).toFixed(1)} l`:`${t} ${e}`}function $n(t){if(!t)return"-";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}function _u(t){if(!t)return"-";try{const e=JSON.parse(t);if(Array.isArray(e)&&e.length>0)return e.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return t}return t}function Vn(t){switch(t){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function Ja(t){return t?$n(t):"-"}function bu(t){if(!t?.length)return[];const e=t.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=Vn(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:yu(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(e)}function yu(t){switch(t){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function wu(t){let e=O(!1),r=O(null);const n=V(()=>(console.log(`[ProductModalState] Recalculating product ${t}`),F.getEnrichedProductById(t))),a=V(()=>s(n)?.who??[]),o=V(()=>s(n)?.stockParsed??null),i=V(()=>s(n)?.purchases??[]),l=V(()=>s(n)?.byDate?Il(s(n).byDate):[]),c=Re({purchase:{quantity:null,unit:"",store:"",who:Nr.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let v=O(!1),f=O(null);sr(()=>{!s(n)||s(v)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=Nr.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??"",c.store.comment=s(n).storeInfo?.storeComment??null,c.who=s(n)?.who?[...s(n).who]:[],b(f,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),b(v,!0))});const p=V(()=>s(f)?{store:JSON.stringify(c.store)!==JSON.stringify(s(f).store),stock:m(),who:JSON.stringify(c.who)!==JSON.stringify(s(f).whoList)}:{store:!1,stock:!1,who:!1});function m(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?s(o)?c.stock.quantity.toString()!==s(o).quantity||c.stock.unit!==s(o).unit||(c.stock.notes||"")!==(s(o).notes||""):!0:!1}const g=V(()=>!!(s(f)&&(s(p).store||s(p).stock||s(p).who)));let y=O(null);const E=V(()=>s(y)?s(i).find(j=>j.$id===s(y))??null:null);async function w(j,M){b(e,!0),b(r,null);try{const R=await j();return M&&A("success",M),R}catch(R){const ie=R instanceof Error?R.message:"Une erreur est survenue";return b(r,ie,!0),A("error",ie),console.error("[ProductModalState]",R),null}finally{b(e,!1)}}function A(j,M){const R=new CustomEvent("toast",{detail:{type:j,message:M}});window.dispatchEvent(R)}async function T(){s(n)&&await w(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!F.currentMainId)throw new Error("mainId non disponible");const{quantity:j,unit:M}=Ya(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await zt(s(n).$id,{},K=>F.getEnrichedProductById(K)));const R=c.purchase.status||"delivered";let ie=c.purchase.deliveryDate||null;R==="delivered"&&!ie&&(ie=new Date().toISOString()),await to({products:[s(n).$id],mainId:F.currentMainId,unit:M,quantity:j,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:R,orderDate:c.purchase.orderDate||null,deliveryDate:ie}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function x(j){b(y,j.$id,!0)}function $(){b(y,null)}async function _(j){j.$id&&await w(async()=>{const{quantity:M,unit:R}=Ya(j.quantity,j.unit),ie=j.status||null;let K=j.deliveryDate||null;ie==="delivered"&&!K&&(K=new Date().toISOString()),await ro(j.$id,{unit:R,quantity:M,store:j.store||null,who:j.who||null,notes:j.notes||"",price:j.price||null,status:ie,orderDate:j.orderDate||null,deliveryDate:K}),b(y,null)},"Achat modifié avec succès")}async function P(j){const M=s(i).find(R=>R.$id===j);M&&confirm(`Supprimer cet achat (${M.quantity} ${M.unit}) ?`)&&await w(async()=>{await no(j)},"Achat supprimé avec succès")}async function C(){s(n)&&await w(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const j={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await zn(s(n).$id,JSON.stringify(j))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await zt(s(n).$id,{stockReel:JSON.stringify(j)},M=>F.getEnrichedProductById(M))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function D(){s(n)&&confirm("Supprimer le stock actuel ?")&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await zn(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await zt(s(n).$id,{stockReel:null},j=>F.getEnrichedProductById(j)))},"Stock supprimé")}async function te(j){s(n)&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, setWho normal...`),await Xs(s(n).$id,j)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await zt(s(n).$id,{who:j},M=>F.getEnrichedProductById(M)))},"Volontaires mis à jour")}async function Q(j){s(n)&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await Zs(s(n).$id,j)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await zt(s(n).$id,{store:JSON.stringify(j)},M=>F.getEnrichedProductById(M)))},"Magasin mis à jour")}async function U(j){s(n)&&await w(async()=>{s(n).isSynced?await ua(s(n).$id,j,!0):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await zt(s(n).$id,{totalNeededOverride:JSON.stringify(j)},M=>F.getEnrichedProductById(M)))},"Override appliqué")}async function ne(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await w(async()=>{await Fs(s(n).$id,!0)},"Override supprimé")}async function be(){!s(n)||!s(g)||await w(async()=>{const j={};if(s(p).stock&&c.stock.quantity&&c.stock.unit){const M={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};j.stockReel=JSON.stringify(M)}if(s(p).who&&(j.who=c.who),s(p).store){const M={storeName:c.store.name||"",storeComment:c.store.comment||void 0};j.storeInfo=M}Object.keys(j).length>0&&(await eo(s(n).$id,j,M=>F.getEnrichedProductById(M)),b(f,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return s(e)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(y)},get editingPurchaseData(){return s(E)},forms:c,addPurchase:T,startEditPurchase:x,cancelEditPurchase:$,updateEditedPurchase:_,removePurchase:P,setStock:C,removeStock:D,setWho:te,updateStore:Q,setOverride:U,removeOverride:ne,saveAllChanges:be,get hasChanges(){return s(p)},get hasAnyChanges(){return s(g)},formatQuantity:fa,formatDate:$n,formatDisplayQuantity:_u}}function Su(t,e,r){e()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function xu(t,e,r){const n=e().editingPurchaseData;!n||!r(n)||e().updateEditedPurchase(n)}function $u(t,e){e().cancelEditPurchase()}var Pu=S('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Eu=S('<span class="loading loading-spinner loading-sm"></span>'),Au=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),ku=S('<span class="loading loading-spinner loading-sm"></span>'),Tu=S('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Livré</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Cu=(t,e,r)=>e(s(r)),Du=(t,e,r)=>e(s(r).$id),Nu=S('<span class="loading loading-spinner loading-sm"></span>'),Mu=S('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Iu=S('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Ou=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Ru(t,e){W(e,!0);let r=Oe(e,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(de){return de.quantity!==null&&de.quantity!==0&&de.unit?.trim()!==""}function o(de){r().removePurchase(de)}function i(de){r().startEditPurchase(de)}var l=Ou(),c=u(l),v=u(c);er(v,{class:"h-5 w-5"});var f=d(c,2),p=u(f),m=d(u(p),2),g=u(m),y=u(g);tn(y,{class:"h-4 w-4 opacity-50"});var E=d(y,2),w=d(g,2),A=u(w);A.value=A.__value="";var T=d(A);T.value=T.__value="kg";var x=d(T);x.value=x.__value="gr.";var $=d(x);$.value=$.__value="l.";var _=d($);_.value=_.__value="ml";var P=d(_);P.value=P.__value="unité";var C=d(P);C.value=C.__value="bottes";var D=d(w,2),te=u(D);nr(te,{class:"h-4 w-4 opacity-50"});var Q=d(te,2),U=d(D,2),ne=u(U);rn(ne,{class:"h-4 w-4 opacity-50"});var be=d(ne,2),j=d(U,2),M=d(u(j),2),R=d(m,2),ie=u(R),K=u(ie);mo(K,{class:"h-4 w-4 opacity-50"});var ee=d(K,2),re=d(R,2),Se=u(re),z=u(Se),Y=u(z),ae=u(Y);ae.value=ae.__value="delivered";var ue=d(ae);ue.value=ue.__value="ordered";var xe=d(z,2),Z=d(Se,2);{var me=de=>{var We=Pu(),ce=d(u(We),2);Ie(ce,()=>r().forms.purchase.deliveryDate,$e=>r().forms.purchase.deliveryDate=$e),h(de,We)};k(Z,de=>{r().forms.purchase.status==="ordered"&&de(me)})}var q=d(re,2),X=u(q);X.__click=[Su,n,r];var Ae=u(X);{var we=de=>{var We=Eu();h(de,We)},Ee=de=>{var We=Et("Ajouter l'achat");h(de,We)};k(Ae,de=>{r().loading?de(we):de(Ee,!1)})}var oe=d(f,2);{var ye=de=>{var We=Au(),ce=u(We);er(ce,{class:"mx-auto mb-2 h-12 w-12"}),h(de,We)},je=de=>{var We=Iu(),ce=u(We),$e=d(u(ce));lt($e,21,()=>r().purchasesList,Ue=>Ue.$id,(Ue,_e,st)=>{var qe=H(),Pe=I(qe);{var Ze=ke=>{var Ce=Tu(),Ge=u(Ce),Ke=u(Ge),mt=u(Ke),kt=d(mt,2),tt=u(kt);tt.value=tt.__value="kg";var gt=d(tt);gt.value=gt.__value="gr.";var Xe=d(gt);Xe.value=Xe.__value="l.";var ot=d(Xe);ot.value=ot.__value="ml";var qt=d(ot);qt.value=qt.__value="unité";var dt=d(qt);dt.value=dt.__value="bottes";var jt=d(Ge),Lt=u(jt),Yt=d(jt),Tt=u(Yt),J=d(Yt),ve=u(J),Ne=u(ve);Ne.value=Ne.__value="ordered";var Ve=d(Ne);Ve.value=Ve.__value="delivered";var Qe=d(J),Be=u(Qe),Ye=d(Qe),He=u(Ye),Ct=d(Ye),qr=u(Ct),St=d(Ct),rt=u(St),Bt=d(St),or=u(Bt),Dt=u(or);Dt.__click=[xu,r,a];var jr=u(Dt);{var Po=ze=>{var ko=ku();h(ze,ko)},Eo=ze=>{Uc(ze,{class:"h-3 w-3"})};k(jr,ze=>{r().loading?ze(Po):ze(Eo,!1)})}var ha=d(Dt,2);ha.__click=[$u,r];var Ao=u(ha);Rt(Ao,{class:"h-3 w-3"}),B(ze=>Dt.disabled=ze,[()=>r().loading||!a(s(_e))]),Ie(mt,()=>s(_e).quantity,ze=>s(_e).quantity=ze),cr(kt,()=>s(_e).unit,ze=>s(_e).unit=ze),Ie(Lt,()=>s(_e).store,ze=>s(_e).store=ze),Ie(Tt,()=>s(_e).who,ze=>s(_e).who=ze),cr(ve,()=>s(_e).status,ze=>s(_e).status=ze),Ie(Be,()=>s(_e).orderDate,ze=>s(_e).orderDate=ze),Ie(He,()=>s(_e).deliveryDate,ze=>s(_e).deliveryDate=ze),Ie(qr,()=>s(_e).price,ze=>s(_e).price=ze),Ie(rt,()=>s(_e).notes,ze=>s(_e).notes=ze),h(ke,Ce)},ge=ke=>{var Ce=Mu(),Ge=u(Ce),Ke=u(Ge),mt=d(Ge),kt=u(mt),tt=d(mt),gt=u(tt),Xe=d(tt),ot=u(Xe),qt=u(ot),dt=d(Xe),jt=u(dt),Lt=d(dt),Yt=u(Lt),Tt=d(Lt),J=u(Tt),ve=d(Tt),Ne=u(ve),Ve=d(ve),Qe=u(Ve),Be=u(Qe);Be.__click=[Cu,i,_e];var Ye=u(Be);Hn(Ye,{class:"h-4 w-4"});var He=d(Be,2);He.__click=[Du,o,_e];var Ct=u(He);{var qr=rt=>{var Bt=Nu();h(rt,Bt)},St=rt=>{Rt(rt,{class:"h-4 w-4"})};k(Ct,rt=>{r().loading?rt(qr):rt(St,!1)})}B((rt,Bt,or,Dt,jr)=>{L(Ke,rt),L(kt,s(_e).store||"-"),L(gt,s(_e).who||"-"),Te(ot,1,`badge badge-sm ${Bt??""}`),L(qt,or),L(jt,Dt),L(Yt,jr),L(J,s(_e).price?`${s(_e).price}€`:"-"),L(Ne,s(_e).notes||"-"),He.disabled=r().loading},[()=>fa(s(_e).quantity,s(_e).unit),()=>Vn(s(_e).status).class,()=>Vn(s(_e).status).text,()=>Ja(s(_e).orderDate),()=>Ja(s(_e).deliveryDate)]),h(ke,Ce)};k(Pe,ke=>{r().editingPurchaseId===s(_e).$id?ke(Ze):ke(ge,!1)})}h(Ue,qe)}),h(de,We)};k(oe,de=>{r().purchasesList.length===0?de(ye):de(je,!1)})}B(de=>{Te(xe,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),X.disabled=de},[()=>r().loading||!n()]),Ie(E,()=>r().forms.purchase.quantity,de=>r().forms.purchase.quantity=de),cr(w,()=>r().forms.purchase.unit,de=>r().forms.purchase.unit=de),Ie(Q,()=>r().forms.purchase.store,de=>r().forms.purchase.store=de),Ie(be,()=>r().forms.purchase.who,de=>r().forms.purchase.who=de),Ie(M,()=>r().forms.purchase.price,de=>r().forms.purchase.price=de),Ie(ee,()=>r().forms.purchase.notes,de=>r().forms.purchase.notes=de),cr(Y,()=>r().forms.purchase.status,de=>r().forms.purchase.status=de),h(t,l),G()}Fe(["click"]);async function qu(t,e){await e()?.removeStock()}var ju=S(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),Lu=(t,e)=>{e().forms.stock.quantity=null,e().forms.store.comment=""},Bu=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),zu=S('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Uu=S('<span class="loading loading-spinner loading-xs"></span>'),Hu=S('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),Wu=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function Gu(t,e){W(e,!0);let r=Oe(e,"modalState",7);var n=Wu(),a=u(n),o=u(a);Un(o,{class:"h-5 w-5"});var i=d(a,2),l=u(i),c=u(l),v=u(c),f=d(c,2),p=u(f);So(p,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(M,R)=>{var ie=ju();h(M,ie)},$$slots:{default:!0}});var m=d(f,2),g=u(m),y=u(g);tn(y,{class:"h-4 w-4 opacity-50"});var E=d(y,2),w=d(g,2),A=u(w);A.value=A.__value="";var T=d(A);T.value=T.__value="kg";var x=d(T);x.value=x.__value="gr.";var $=d(x);$.value=$.__value="l.";var _=d($);_.value=_.__value="ml";var P=d(_);P.value=P.__value="unité";var C=d(P);C.value=C.__value="bottes";var D=d(m,2),te=u(D),Q=d(D,2),U=u(Q);U.__click=[Lu,r];var ne=d(i,2);{var be=M=>{var R=Bu(),ie=u(R);Un(ie,{class:"mx-auto mb-2 h-12 w-12"}),h(M,R)},j=M=>{var R=Hu(),ie=u(R),K=d(u(ie),2),ee=u(K),re=d(u(ee),2),Se=u(re),z=d(ee,2),Y=d(u(z),2),ae=u(Y),ue=d(z,2);{var xe=we=>{var Ee=zu(),oe=d(u(Ee),2),ye=u(oe);B(()=>L(ye,r().stockParsed.notes)),h(we,Ee)};k(ue,we=>{r().stockParsed.notes&&we(xe)})}var Z=d(K,2),me=u(Z);me.__click=[qu,r];var q=u(me);{var X=we=>{var Ee=Uu();h(we,Ee)},Ae=we=>{var Ee=Et("Supprimer le stock");h(we,Ee)};k(q,we=>{r().loading?we(X):we(Ae,!1)})}B(we=>{L(Se,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),L(ae,we),me.disabled=r().loading},[()=>$n(r().stockParsed.dateTime)]),h(M,R)};k(ne,M=>{r().stockParsed?M(j,!1):M(be)})}B(M=>{L(v,`Déclarer le stock réel du ${M??""}`),U.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),Ie(E,()=>r().forms.stock.quantity,M=>r().forms.stock.quantity=M),cr(w,()=>r().forms.stock.unit,M=>r().forms.stock.unit=M),Ie(te,()=>r().forms.stock.notes,M=>r().forms.stock.notes=M),h(t,n),G()}Fe(["click"]);function Vu(t,e,r){e().forms.who=[...e().whoList],b(r,"")}var Qu=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},Ku=S('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function Yu(t,e){W(e,!0);let r=Oe(e,"modalState",7),n=O("");const a=V(()=>{const C=new Set([...F.uniqueWho,...r().forms.who]);return Array.from(C).map(D=>({id:D,label:D,selected:r().forms.who.includes(D)}))});function o(C){const D=C.trim();D&&!r().forms.who.includes(D)&&(r().forms.who=[...r().forms.who,D])}function i(C){r().forms.who=r().forms.who.filter(D=>D!==C)}function l(C){r().forms.who.includes(C)?i(C):o(C)}function c(){s(n).trim()&&(o(s(n)),b(n,""))}var v=Ku(),f=u(v),p=u(f),m=d(u(p),4),g=u(m),y=u(g),E=u(y);rn(E,{class:"h-4 w-4 opacity-50"});var w=d(E,2);w.__keydown=[Qu,c];var A=d(y,2);A.__click=c;var T=u(A);wo(T,{size:16});var x=d(g,2),$=d(u(x),2);Fr($,{get items(){return s(a)},onToggleItem:l,showIcon:!0});var _=d(m,2),P=u(_);P.__click=[Vu,r,n],B(C=>{w.disabled=r().loading,A.disabled=C,P.disabled=r().loading},[()=>r().loading||!s(n).trim()]),Ie(w,()=>s(n),C=>b(n,C)),h(t,v),G()}Fe(["keydown","click"]);var Ju=S('<div class="mb-1 text-xs opacity-70"> </div>'),Zu=(t,e,r)=>e(s(r)),Xu=S("<button><!> </button>"),Fu=S('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function xo(t,e){W(e,!0);let r=Oe(e,"maxSuggestions",3,8),n=Oe(e,"title",3,"Suggestions :"),a=Oe(e,"buttonSize",3,"btn-xs"),o=Oe(e,"buttonVariant",3,"btn-soft"),i=Oe(e,"disabled",3,!1);const l=V(()=>e.suggestions.slice(0,r()));function c(m){!i()&&!m.disabled&&e.onSuggestionClick(m)}var v=H(),f=I(v);{var p=m=>{var g=Fu(),y=u(g);{var E=A=>{var T=Ju(),x=u(T);B(()=>L(x,n())),h(A,T)};k(y,A=>{n()&&A(E)})}var w=d(y,2);lt(w,21,()=>s(l),A=>A.id,(A,T)=>{var x=Xu();x.__click=[Zu,c,T];var $=u(x);{var _=C=>{var D=H(),te=I(D);fr(te,()=>s(T).icon,(Q,U)=>{U(Q,{class:"h-3 w-3"})}),h(C,D)};k($,C=>{s(T).icon&&C(_)})}var P=d($);B(()=>{Te(x,1,`btn ${a()??""} ${o()??""}`),x.disabled=i()||s(T).disabled,rr(x,"title",s(T).disabled?"Déjà sélectionné":s(T).label),L(P,` ${s(T).label??""}`)}),h(A,x)}),h(m,g)};k(f,m=>{s(l).length>0&&m(p)})}h(t,v),G()}Fe(["click"]);var ed=(t,e)=>{t.key==="Enter"&&e()},td=(t,e)=>{e().forms.store.name="",e().forms.store.comment=""},rd=S(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function nd(t,e){W(e,!0);let r=Oe(e,"modalState",7);const n=V(()=>r()?.hasChanges?.store||!1);async function a(){if(!s(n))return;const T={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(T)}var o=rd(),i=u(o),l=u(i),c=d(u(l),4),v=u(c),f=u(v),p=u(f);nr(p,{class:"h-4 w-4 opacity-50"});var m=d(p,2);m.__keydown=[ed,a];var g=d(f,2);{var y=T=>{{let x=V(()=>F.uniqueStores.map($=>({id:$,label:$,disabled:$===r().forms.store.name})));xo(T,{get suggestions(){return s(x)},onSuggestionClick:$=>{r().forms.store.name=$.label},buttonVariant:"btn-outline"})}};k(g,T=>{F.uniqueStores.length>0&&T(y)})}var E=d(v,2),w=d(c,2),A=u(w);A.__click=[td,r],B(()=>A.disabled=r().loading),Ie(m,()=>r().forms.store.name,T=>r().forms.store.name=T),Ie(E,()=>r().forms.store.comment,T=>r().forms.store.comment=T),h(t,o),G()}Fe(["keydown","click"]);var ad=S("<fieldset><legend><!> </legend> <!></fieldset>");function Hr(t,e){let r=Oe(e,"bgClass",3,"bg-base-100");var n=ad(),a=u(n),o=u(a);{var i=v=>{const f=V(()=>e.iconComponent);var p=H(),m=I(p);fr(m,()=>s(f),(g,y)=>{y(g,{size:16,class:"mr-1"})}),h(v,p)};k(o,v=>{e.iconComponent&&v(i)})}var l=d(o),c=d(a,2);le(c,()=>e.children??se),B(()=>{Te(n,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Te(a,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),L(l,` ${e.legend??""}`)}),h(t,n)}async function sd(t,e,r,n,a,o){if(!e.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await e.modalState.setOverride(i),b(o,!1)}async function od(t,e,r){e.modalState&&(await e.modalState.removeOverride(),b(r,!1))}var id=S('<div class="stat "><div class="stat-title text-sm">Ancienne quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),ld=S('<div class="stat"><div class="stat-title text-sm">"Quantité redéfinie manuellement"</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic"></div></div>'),cd=(t,e)=>b(e,!0),ud=S('<div class="text-error text-sm">Limite de caractères atteinte</div>'),dd=(t,e)=>b(e,!1),vd=S('<span class="loading loading-spinner loading-sm"></span>'),fd=S('<span class="loading loading-spinner loading-sm"></span>'),hd=S(`<div><div class="card-body p-4"><div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-end gap-2"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div></div></div>`),pd=S('<div class="stats not-md:stats-vertical shadow"><!> <div class="stat"><div class="stat-title text-sm">Quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">Recettes actuelles</div></div> <!></div> <div class="flex justify-end gap-2"><button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button></div> <!>',1),md=S('<div class="mb-2 space-y-4"><!></div>');function gd(t,e){W(e,!0);const r=V(()=>e.modalState.product?.totalNeededOverrideParsed),n=V(()=>e.modalState.product?.displayTotalOverride);let a=V(()=>s(r)?.hasUnresolvedChangedSinceOverride),o=O(!1),i=O(Re(e.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||e.modalState.product?.totalNeededArray[0]?.q||0)),l=O(Re(e.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||e.modalState.product?.totalNeededArray[0]?.u||"")),c=O(Re(e.modalState.product?.totalNeededOverrideParsed?.comment||"")),v=V(()=>s(i)>0&&s(l).trim()!=="");var f=H(),p=I(f);{var m=g=>{var y=md(),E=u(y);Hr(E,{legend:"Besoin total",children:(w,A)=>{var T=pd(),x=I(T),$=u(x);{var _=M=>{var R=id(),ie=d(u(R),2),K=u(ie);B(()=>L(K,e.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay)),h(M,R)};k($,M=>{e.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay&&s(a)&&M(_)})}var P=d($,2),C=d(u(P),2),D=u(C),te=d(P,2);{var Q=M=>{var R=ld(),ie=d(u(R),2),K=u(ie);B(()=>L(K,s(n))),h(M,R)};k(te,M=>{s(n)&&s(r)&&M(Q)})}var U=d(x,2),ne=u(U);ne.__click=[cd,o];var be=d(U,2);{var j=M=>{var R=hd(),ie=u(R),K=u(ie),ee=u(K),re=u(ee);qc(re,{class:"h-4 w-4 opacity-50"});var Se=d(re,2),z=d(ee,2),Y=u(z);Y.value=Y.__value="";var ae=d(Y);ae.value=ae.__value="kg";var ue=d(ae);ue.value=ue.__value="gr.";var xe=d(ue);xe.value=xe.__value="l.";var Z=d(xe);Z.value=Z.__value="ml";var me=d(Z);me.value=me.__value="unité";var q=d(me);q.value=q.__value="bottes";var X=d(K,2),Ae=u(X),we=d(u(Ae),2),Ee=d(we,2);{var oe=Pe=>{var Ze=ud();h(Pe,Ze)};k(Ee,Pe=>{s(c).length>=250&&Pe(oe)})}var ye=d(X,2),je=u(ye);je.__click=[dd,o];var de=d(je,2);de.__click=[od,e,o];var We=u(de);{var ce=Pe=>{var Ze=vd();h(Pe,Ze)},$e=Pe=>{var Ze=Et();B(()=>L(Ze,`Réinitialiser le total calculé (${e.modalState.product.displayTotalNeeded??""}).`)),h(Pe,Ze)};k(We,Pe=>{e.modalState.loading?Pe(ce):Pe($e,!1)})}var Ue=d(de,2);Ue.__click=[sd,e,i,l,c,o];var _e=u(Ue);{var st=Pe=>{var Ze=fd();h(Pe,Ze)},qe=Pe=>{var Ze=Et("Appliquer");h(Pe,Ze)};k(_e,Pe=>{e.modalState.loading?Pe(st):Pe(qe,!1)})}B(()=>{Te(R,1,`card border-base-300 border ${s(o)?"bg-base-200":"bg-base-100"}`),de.disabled=e.modalState.loading,Ue.disabled=e.modalState.loading||!s(v)}),Ie(Se,()=>s(i),Pe=>b(i,Pe)),cr(z,()=>s(l),Pe=>b(l,Pe)),Ie(we,()=>s(c),Pe=>b(c,Pe)),h(M,R)};k(be,M=>{s(o)&&M(j)})}B(()=>{L(D,e.modalState.product.displayTotalNeeded),ne.disabled=s(o)}),h(w,T)},$$slots:{default:!0}}),h(g,y)};k(p,g=>{e.modalState.product&&g(m)})}h(t,f),G()}Fe(["click"]);var _d=S('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),bd=S('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),yd=S('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),wd=S('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Sd(t,e){W(e,!0);const r=V(()=>e.modalState.recipes);var n=wd(),a=I(n);gd(a,{get modalState(){return e.modalState}});var o=d(a,2),i=u(o),l=u(i);va(l,{class:"h-5 w-5"});var c=d(i,2);{var v=p=>{var m=_d(),g=u(m);tn(g,{class:"mx-auto mb-2 h-12 w-12"}),h(p,m)},f=p=>{var m=yd(),g=u(m),y=d(u(g));lt(y,21,()=>s(r),Zr,(E,w)=>{var A=bd(),T=u(A),x=u(T),$=d(T),_=u($),P=d($),C=u(P);B(D=>{L(x,`${s(w).r??""} (${(s(w).a||"-")??""} c.)`),L(_,`${(s(w).q||s(w).qEq)??""} ${(s(w).u||s(w).uEq)??""}`),L(C,D)},[()=>$n(s(w).date)]),h(E,A)}),h(p,m)};k(c,p=>{s(r).length===0?p(v):p(f,!1)})}h(t,n),G()}function xd(t,e,r){s(e).saveAllChanges().then(()=>{r.onClose()})}var $d=S('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Pd=S('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Ed=(t,e)=>e("recettes"),Ad=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),kd=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Td=(t,e)=>e("magasins"),Cd=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Dd=(t,e)=>e("volontaires"),Nd=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Md=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Id=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Od=(t,e)=>e("stock"),Rd=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),qd=S('<span class="badge badge-sm badge-secondary ml-1">1</span>'),jd=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Ld=(t,e)=>e("achats"),Bd=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),zd=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Ud=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Hd=S('<span class="loading loading-spinner loading-sm"></span>'),Wd=S('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),Gd=S('<div id="product_modal"><div class="modal-box flex fixed top-0 overflow-auto h-lvh w-lvw flex-col md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Vd(t,e){W(e,!0);let r=Oe(e,"initialTab",3,"recettes"),n=V(()=>wu(e.productId)),a=O(Re(r()));function o(w){b(a,w,!0)}var i=Gd(),l=u(i),c=u(l),v=u(c);{var f=w=>{var A=$d(),T=I(A),x=u(T),$=d(T,2),_=u($),P=u(_),C=d(_,2),D=d(u(C));B(()=>{L(x,s(n).product?.productName),L(P,s(n).product?.productType),L(D,` ${s(n).product?.displayTotalNeeded??""}`)}),h(w,A)},p=w=>{var A=Pd();h(w,A)};k(v,w=>{s(n)&&s(n).product?w(f):w(p,!1)})}var m=d(v,2);m.__click=function(...w){e.onClose?.apply(this,w)};var g=u(m);Rt(g,{class:"h-4 w-4"});var y=d(c,2);{var E=w=>{var A=Wd(),T=I(A),x=u(T);x.__click=[Ed,o];var $=u(x);va($,{class:"mr-1 h-5 w-5"});var _=d($,2);{var P=ce=>{var $e=Ad(),Ue=u($e);B(()=>L(Ue,s(n).product?.nbRecipes)),h(ce,$e)},C=ce=>{var $e=kd();h(ce,$e)};k(_,ce=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?ce(P):ce(C,!1)})}var D=d(x,2);D.__click=[Td,o];var te=u(D);nr(te,{class:"mr-1 h-5 w-5"});var Q=d(te,2);{var U=ce=>{var $e=Cd();h(ce,$e)};k(Q,ce=>{s(n).hasChanges?.store&&ce(U)})}var ne=d(D,2);ne.__click=[Dd,o];var be=u(ne);Wn(be,{class:"mr-1 h-5 w-5"});var j=d(be,2);{var M=ce=>{var $e=Nd();h(ce,$e)},R=ce=>{var $e=H(),Ue=I($e);{var _e=qe=>{var Pe=Md(),Ze=u(Pe);B(()=>L(Ze,s(n).product?.who.length)),h(qe,Pe)},st=qe=>{var Pe=Id();h(qe,Pe)};k(Ue,qe=>{s(n).product?.who&&s(n).product?.who.length>0?qe(_e):qe(st,!1)},!0)}h(ce,$e)};k(j,ce=>{s(n).hasChanges?.who?ce(M):ce(R,!1)})}var ie=d(ne,2);ie.__click=[Od,o];var K=u(ie);Un(K,{class:"mr-1 h-5 w-5"});var ee=d(K,2);{var re=ce=>{var $e=Rd();h(ce,$e)},Se=ce=>{var $e=H(),Ue=I($e);{var _e=qe=>{var Pe=qd();h(qe,Pe)},st=qe=>{var Pe=jd();h(qe,Pe)};k(Ue,qe=>{s(n).stockParsed?qe(_e):qe(st,!1)},!0)}h(ce,$e)};k(ee,ce=>{s(n).hasChanges?.stock?ce(re):ce(Se,!1)})}var z=d(ie,2);z.__click=[Ld,o];var Y=u(z);er(Y,{class:"mr-1 h-5 w-5"});var ae=d(Y,2);{var ue=ce=>{var $e=Bd(),Ue=u($e);B(()=>L(Ue,s(n).purchasesList.length)),h(ce,$e)},xe=ce=>{var $e=zd();h(ce,$e)};k(ae,ce=>{s(n).purchasesList.length>0?ce(ue):ce(xe,!1)})}var Z=d(T,2),me=u(Z);{var q=ce=>{var $e=Ud(),Ue=u($e);Rt(Ue,{class:"h-4 w-4"});var _e=d(Ue,2),st=u(_e);B(()=>L(st,`erreur : ${s(n).error??""}`)),h(ce,$e)};k(me,ce=>{s(n).error&&ce(q)})}var X=d(me,2),Ae=u(X);Zi(Ae,()=>s(a),ce=>{var $e=H(),Ue=I($e);{var _e=qe=>{Sd(qe,{get modalState(){return s(n)}})},st=qe=>{var Pe=H(),Ze=I(Pe);{var ge=Ce=>{Ru(Ce,{get modalState(){return s(n)}})},ke=Ce=>{var Ge=H(),Ke=I(Ge);{var mt=tt=>{Gu(tt,{get modalState(){return s(n)}})},kt=tt=>{var gt=H(),Xe=I(gt);{var ot=dt=>{Yu(dt,{get modalState(){return s(n)}})},qt=dt=>{var jt=H(),Lt=I(jt);{var Yt=Tt=>{nd(Tt,{get modalState(){return s(n)}})};k(Lt,Tt=>{s(a)==="magasins"&&Tt(Yt)},!0)}h(dt,jt)};k(Xe,dt=>{s(a)==="volontaires"?dt(ot):dt(qt,!1)},!0)}h(tt,gt)};k(Ke,tt=>{s(a)==="stock"?tt(mt):tt(kt,!1)},!0)}h(Ce,Ge)};k(Ze,Ce=>{s(a)==="achats"?Ce(ge):Ce(ke,!1)},!0)}h(qe,Pe)};k(Ue,qe=>{s(a)==="recettes"?qe(_e):qe(st,!1)})}h(ce,$e)});var we=d(Z,2),Ee=u(we);Ee.__click=function(...ce){e.onClose?.apply(this,ce)};var oe=u(Ee),ye=d(Ee,2);ye.__click=[xd,n,e];var je=u(ye);{var de=ce=>{var $e=Hd();h(ce,$e)},We=ce=>{var $e=Et("Tout enregistrer");h(ce,$e)};k(je,ce=>{s(n).loading?ce(de):ce(We,!1)})}B(()=>{Te(x,1,`tab ${s(a)==="recettes"?"tab-active":""}`),Te(D,1,`tab ${s(a)==="magasins"?"tab-active":""}`),Te(ne,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),Te(ie,1,`tab ${s(a)==="stock"?"tab-active":""}`),Te(z,1,`tab ${s(a)==="achats"?"tab-active":""}`),L(oe,s(n)?.hasAnyChanges?"Annuler":"Fermer"),ye.disabled=s(n).loading||!s(n).hasAnyChanges}),h(w,A)};k(y,w=>{s(n)&&w(E)})}B(()=>Te(i,1,`modal ${(e.productId&&"modal-open")??""}`)),h(t,i),G()}Fe(["click"]);var Qd=(t,e,r)=>e(r),Kd=S("<button><span> </span> <!></button>"),Yd=S('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),Jd=(t,e)=>e(),Zd=S('<button class="btn btn-xs btn-link text-primary/80" type="button">Dates à venir</button>'),Xd=(t,e)=>e(),Fd=S('<button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button>'),ev=S('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),tv=S('<div class="flex justify-end gap-2 flex-wrap"><!> <!></div>'),rv=S('<div class=" flex flex-wrap gap-1"></div> <!>',1);function nv(t,e){W(e,!0);let r=Oe(e,"availableDates",19,()=>[]),n=Oe(e,"currentRange",19,()=>({start:null,end:null})),a=O(Re(n().start)),o=O(Re(n().end));const i=V(()=>r().length>0&&s(a)===r()[0]&&s(o)===r()[r().length-1]),l=V(()=>{if(r().length===0)return!1;const x=new Date;x.setHours(0,0,0,0);const _=[...r()].sort().find(P=>new Date(P)>=x);return _&&s(a)===_&&s(o)===r()[r().length-1]}),c=V(()=>{if(r().length===0)return!0;const x=new Date(r()[r().length-1]);return x.setHours(23,59,59,999),x<new Date}),v=V(()=>{if(r().length===0)return!1;const x=new Date;return x.setHours(0,0,0,0),[...r()].some($=>new Date($)>=x)});sr(()=>{b(a,n().start,!0),b(o,n().end,!0)});function f(x){s(a)===x&&s(o)===x?m():new Date(x)<new Date(s(a))?b(a,x,!0):(new Date(x)>new Date(s(o))||b(a,x,!0),b(o,x,!0)),e.onRangeChange(s(a),s(o))}function p(x){return new Date(x)>=new Date(s(a))&&new Date(x)<=new Date(s(o))?"btn-soft btn-secondary":"btn-dash btn-secondary opacity-80"}function m(){r().length!==0&&(b(a,r()[0],!0),b(o,r()[r().length-1],!0),e.onRangeChange(s(a),s(o)))}function g(){if(r().length===0)return;const x=new Date;x.setHours(0,0,0,0);const _=[...r()].sort().find(P=>new Date(P)>=x);_&&(b(a,_,!0),b(o,r()[r().length-1],!0),e.onRangeChange(s(a),s(o)))}var y=rv(),E=I(y);lt(E,22,r,x=>x,(x,$)=>{var _=Kd();_.__click=[Qd,f,$];var P=u(_),C=u(P),D=d(P,2);{var te=U=>{yo(U,{size:16})},Q=U=>{var ne=H(),be=I(ne);{var j=R=>{go(R,{size:16})},M=R=>{var ie=H(),K=I(ie);{var ee=re=>{Ec(re,{size:16})};k(K,re=>{In($)==="cloud"&&re(ee)},!0)}h(R,ie)};k(be,R=>{In($)==="moon"?R(j):R(M,!1)},!0)}h(U,ne)};k(D,U=>{In($)==="sun"?U(te):U(Q,!1)})}B((U,ne)=>{Te(_,1,`btn btn-sm ${U??""}`),L(C,ne)},[()=>p($),()=>Gl($)]),h(x,_)});var w=d(E,2);{var A=x=>{var $=Yd();h(x,$)},T=x=>{var $=tv(),_=u($);{var P=Q=>{var U=Zd();U.__click=[Jd,g],h(Q,U)};k(_,Q=>{s(v)&&!s(l)&&Q(P)})}var C=d(_,2);{var D=Q=>{var U=Fd();U.__click=[Xd,m],h(Q,U)},te=Q=>{var U=ev();h(Q,U)};k(C,Q=>{s(i)?Q(te,!1):Q(D)})}h(x,$)};k(w,x=>{s(c)?x(A):x(T,!1)})}h(t,y),G()}Fe(["click"]);var av=()=>F.clearFilters(),sv=t=>F.setSearchQuery(t.currentTarget.value),ov=()=>F.setSearchQuery(""),iv=()=>F.setGroupBy("none"),lv=()=>F.setGroupBy("store"),cv=()=>F.setGroupBy("productType"),uv=(t,e)=>F.toggleProductType(e),dv=S("<button><!> </button>"),vv=()=>F.toggleTemperature("frais"),fv=()=>F.toggleTemperature("surgele"),hv=()=>F.clearTypeAndTemperatureFilters(),pv=S('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),mv=S('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),gv=S('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div> <!>',1),_v=(t,e)=>F.toggleStore(e),bv=S("<button> </button>"),yv=()=>F.clearStoreFilters(),wv=S('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Sv=S('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),xv=(t,e)=>F.toggleWho(e),$v=S("<button> </button>"),Pv=()=>F.clearWhoFilters(),Ev=S('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),Av=S('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),kv=S('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Tv(t,e){W(e,!0);const r=V(()=>F.filters),n=V(()=>F.uniqueStores),a=V(()=>F.uniqueWho),o=V(()=>F.uniqueProductTypes);var i=kv(),l=I(i),c=u(l),v=u(c);ho(v,{class:"h-5 w-5"});var f=d(c,2);f.__click=[av];var p=u(f);sn(p,{class:"h-4 w-4"});var m=d(l,2),g=u(m),y=d(u(g),2),E=u(y);Hc(E,{class:"h-4 w-4"});var w=d(E,2);w.__input=[sv];var A=d(w,2);A.__click=[ov];var T=u(A);Rt(T,{class:"h-4 w-4"});var x=d(g,2),$=d(u(x),2),_=u($);_.__change=[iv];var P=d(_,2);P.__change=[lv];var C=d(P,2);C.__change=[cv];var D=d(x,2);{var te=R=>{Hr(R,{legend:"Date incluses",bgClass:"bg-base-100",children:(ie,K)=>{nv(ie,{get availableDates(){return F.availableDates},get currentRange(){return F.dateRange},onRangeChange:(ee,re)=>F.setDateRange(ee,re)})},$$slots:{default:!0}})};k(D,R=>{F.hasSingleDateEvent||R(te)})}var Q=d(D,2);{var U=R=>{Hr(R,{legend:"Types & Température",get iconComponent(){return Wc},children:(ie,K)=>{var ee=gv(),re=I(ee);lt(re,20,()=>s(o),q=>q,(q,X)=>{const Ae=V(()=>Gn(X));var we=dv();we.__click=[uv,X];var Ee=u(we);fr(Ee,()=>s(Ae).icon,(ye,je)=>{je(ye,{class:"mr-1 h-5 w-5"})});var oe=d(Ee);B(ye=>{Te(we,1,`btn btn-sm ${ye??""}`),L(oe,` ${s(Ae).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-secondary":s(r).selectedProductTypes.includes(X)?"btn-secondary":"btn-dash btn-secondary"]),h(q,we)});var Se=d(re,2),z=u(Se);z.__click=[vv];var Y=u(z);_o(Y,{class:"h-5 w-5"});var ae=d(z,2);ae.__click=[fv];var ue=u(ae);bo(ue,{class:"h-5 w-5"});var xe=d(Se,2);{var Z=q=>{var X=pv();X.__click=[hv];var Ae=u(X);sn(Ae,{size:16}),h(q,X)},me=q=>{var X=mv();h(q,X)};k(xe,q=>{s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0?q(Z):q(me,!1)})}B((q,X)=>{Te(z,1,`btn btn-sm ${q??""}`),Te(ae,1,`btn btn-sm ${X??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(ie,ee)},$$slots:{default:!0}})};k(Q,R=>{s(o).length>0&&R(U)})}var ne=d(Q,2);{var be=R=>{Hr(R,{legend:"Magasins",get iconComponent(){return nr},children:(ie,K)=>{var ee=Sv(),re=u(ee);lt(re,16,()=>s(n),Y=>Y,(Y,ae)=>{var ue=bv();ue.__click=[_v,ae];var xe=u(ue);B(Z=>{Te(ue,1,`btn btn-sm ${Z??""}`),L(xe,ae)},[()=>s(r).selectedStores.length===0?"btn-soft btn-secondary":s(r).selectedStores.includes(ae)?"btn-secondary":"btn-dash btn-secondary"]),h(Y,ue)});var Se=d(re,2);{var z=Y=>{var ae=wv();ae.__click=[yv];var ue=u(ae);sn(ue,{size:16}),h(Y,ae)};k(Se,Y=>{s(r).selectedStores.length>0&&Y(z)})}h(ie,ee)},$$slots:{default:!0}})};k(ne,R=>{s(n).length>0&&R(be)})}var j=d(ne,2);{var M=R=>{Hr(R,{legend:"Qui",get iconComponent(){return rn},children:(ie,K)=>{var ee=Av(),re=u(ee);lt(re,16,()=>s(a),Y=>Y,(Y,ae)=>{var ue=$v();ue.__click=[xv,ae];var xe=u(ue);B(Z=>{Te(ue,1,`btn btn-sm ${Z??""}`),L(xe,ae)},[()=>s(r).selectedWho.length===0?" btn-soft btn-secondary":s(r).selectedWho.includes(ae)?" btn-secondary":"btn-dash btn-secondary"]),h(Y,ue)});var Se=d(re,2);{var z=Y=>{var ae=Ev();ae.__click=[Pv];var ue=u(ae);sn(ue,{size:16}),h(Y,ae)};k(Se,Y=>{s(r).selectedWho.length>0&&Y(z)})}h(ie,ee)},$$slots:{default:!0}})};k(j,R=>{s(a).length>0&&R(M)})}B(()=>{f.disabled=!F.hasFilters,ol(w,s(r).searchQuery),A.disabled=!s(r).searchQuery,Tn(_,s(r).groupBy==="none"),Tn(P,s(r).groupBy==="store"),Tn(C,s(r).groupBy==="productType")}),h(t,i),G()}Fe(["click","input","change"]);var Cv=S('<div class="tooltip text-xs font-normal"><!></div>');function Dv(t,e){let r=Oe(e,"iconSize",3,24),n=e.icon||void 0;var a=Cv(),o=u(a);{var i=l=>{n(l,{get size(){return r()},class:`align-top
`})};k(o,l=>{e.icon&&l(i)})}B(()=>rr(a,"data-tip",e.tip)),h(t,a)}var Nv=S('<div class="text-neutral-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Mv=(t,e,r)=>e.onOpenGroupEditModal("store",s(r).map(n=>n.$id),s(r)),Iv=(t,e,r)=>e.onOpenGroupEditModal("who",s(r).map(n=>n.$id),s(r)),Ov=(t,e,r)=>e.onOpenGroupPurchaseModal(s(r)),Rv=S(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),qv=S('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 @md:min-w-48"><!></div> <div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div></div>'),jv=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),Lv=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),Bv=S('<div class="text-base-content/60 text-sm font-normal"> </div>'),zv=S('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),Uv=S('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),Hv=S('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),Wv=S('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),Gv=S('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),Vv=S('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),Qv=(t,e,r)=>e.onOpenModal(s(r).$id,"magasins"),Kv=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"magasins"),Yv=S('<div class="ml-1"><!></div>'),Jv=S('<div class="ml-1"> </div> <!>',1),Zv=S('<div class="ml-1 text-sm font-medium">?</div>'),Xv=(t,e,r)=>e.onOpenModal(s(r).$id,"volontaires"),Fv=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"volontaires"),ef=S('<span class="text-base-content/50 text-xs"> </span>'),tf=S('<div class="ml-1 flex gap-1"> <!></div>'),rf=S('<div class="ml-1 text-sm font-medium">?</div>'),nf=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),af=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),sf=S('<div class="flex items-center gap-2 tooltip" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),of=S("<span> </span>"),lf=S('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),cf=(t,e,r)=>{t.stopPropagation(),e.onQuickValidation(s(r))},uf=S('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M.625 0a.625.625 0 1 0 0 1.25h1.818l.205 1.94l.644 6.105a1.626 1.626 0 0 0 1.619 1.455h6.208c.746 0 1.397-.506 1.579-1.23l1.253-5a1.626 1.626 0 0 0-1.579-2.02h-8.54L3.627.56A.625.625 0 0 0 3.006 0zm3.91 9.164L3.964 3.75h8.408c.247 0 .425.23.366.466l-1.253 5a.38.38 0 0 1-.366.284H4.911a.376.376 0 0 1-.376-.336m5.72-3.134a.75.75 0 0 0-1.129-.988l-1.48 1.69l-.526-.395a.75.75 0 1 0-.9 1.2l1.083.813a.75.75 0 0 0 1.015-.106zm1.816 6.845a1.125 1.125 0 1 0-2.25 0a1.125 1.125 0 0 0 2.25 0M4.446 11.75a1.125 1.125 0 1 1 0 2.25a1.125 1.125 0 0 1 0-2.25" clip-rule="evenodd"></path></svg> <span class="text-xs"> </span> <!></button>'),df=S(`<div id="override_alert" class="alert alert-warning px-1 py-0.5 alert-soft mt-1"><!> <span>Les quantités des menus ont été modifiées depuis l'attribution manuelle des "besoins"</span></div>`),vf=(t,e,r)=>e.onOpenModal(s(r).$id,"achats"),ff=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"achats"),hf=S('<div><!> <span class="text-sm font-medium text-nowrap"> </span></div>'),pf=S('<span class="text-base-content/50 text-xs italic">aucun</span>'),mf=S('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div></div> <div class="flex flex-wrap gap-3 min-h-14" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex gap-x-4 gap-y-0 flex-wrap"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="flex items-center gap-4 self-end ms-auto"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex-1 min-w-[200px] items-center justify-between gap-2 flex cursor-pointer rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap gap-0 items-start self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div class="text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity group-hover:opacity-100 sm:opacity-0">ajouter un achat</div></div> <div class="flex flex-wrap gap-1.5"><!> <!></div></div></div></div></div>'),gf=S('<!> <div class="space-y-1"></div>',1),_f=S('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),bf=S('<div class="space-y-4 rounded-lg"></div> <!>',1);function yf(t,e){W(e,!0);const r={Package:tn,MessageCircleQuestionMark:Oc,ShoppingCart:er,Clock:Pc,CircleCheck:wc,CircleX:Sc,ClipboardCheck:xc,PackageCheck:Rc},n={quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedAvailableQuantities:"Équilibré",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map},a=V(()=>F.groupedFilteredProducts),o=V(()=>F.filters);var i=bf(),l=I(i);lt(l,21,()=>Object.entries(s(a)),([f,p])=>f,(f,p)=>{var m=V(()=>rs(s(p),2));let g=()=>s(m)[0];const E=V(()=>s(m)[1]);var w=gf(),A=I(w);{var T=$=>{const _=V(()=>Gn(g()));var P=qv(),C=u(P),D=u(C);{var te=re=>{var Se=Et();B(()=>L(Se,`🏪 ${g()??""} (${s(E).length??""})`)),h(re,Se)},Q=re=>{var Se=H(),z=I(Se);{var Y=ue=>{var xe=Nv(),Z=u(xe);fr(Z,()=>s(_).icon,(we,Ee)=>{Ee(we,{class:"h-4 w-4"})});var me=d(Z,2),q=u(me),X=d(me,2),Ae=u(X);B(()=>{L(q,s(_).displayName),L(Ae,`(${s(E).length??""})`)}),h(ue,xe)},ae=ue=>{var xe=Et();B(()=>L(xe,`📦 ${g()??""} (${s(E).length??""})`)),h(ue,xe)};k(z,ue=>{s(o).groupBy==="productType"?ue(Y):ue(ae,!1)},!0)}h(re,Se)};k(D,re=>{s(o).groupBy==="store"?re(te):re(Q,!1)})}var U=d(C,2),ne=u(U);ne.__click=[Mv,e,E];var be=u(ne);nr(be,{size:16});var j=d(be,4);Hn(j,{size:16});var M=d(ne,2);M.__click=[Iv,e,E];var R=u(M);Wn(R,{size:16});var ie=d(R,4);Hn(ie,{size:16});var K=d(M,2);{var ee=re=>{var Se=Rv();Se.__click=[Ov,e,E];var z=u(Se);er(z,{size:16});var Y=d(z,4);Qa(Y,{size:16}),h(re,Se)};k(K,re=>{s(E).some(Se=>Se.displayMissingQuantity!=="✅ Complet")&&re(ee)})}h($,P)};k(A,$=>{g()!==""&&$(T)})}var x=d(A,2);lt(x,21,()=>s(E),$=>$.$id,($,_)=>{const P=V(()=>F.productsStatsByDateRange.get(s(_).$id)||n),C=V(()=>Gn(s(_).productType)),D=V(()=>bu(s(_).purchases||[])),te=V(()=>s(_).totalNeededOverrideParsed);var Q=mf(),U=u(Q),ne=u(U),be=u(ne);be.__click=[jv,e,_],be.__keydown=[Lv,e,_];var j=u(be),M=u(j);fr(M,()=>s(C).icon,(J,ve)=>{ve(J,{class:"text-base-content/80 h-4 w-4"})});var R=d(M),ie=d(R);{var K=J=>{var ve=Bv(),Ne=u(ve);B(()=>L(Ne,`Ancien: ${s(_).previousNames[0]??""}`)),h(J,ve)};k(ie,J=>{s(_).previousNames&&s(_).previousNames.length>0&&J(K)})}var ee=d(j,2),re=u(ee);{var Se=J=>{var ve=zv(),Ne=u(ve);_o(Ne,{class:"text-success h-4 w-4"}),h(J,ve)};k(re,J=>{s(_).pFrais&&J(Se)})}var z=d(re,2);{var Y=J=>{var ve=Uv(),Ne=u(ve);bo(Ne,{class:"text-info h-4 w-4"}),h(J,ve)};k(z,J=>{s(_).pSurgel&&J(Y)})}var ae=d(ee,2);{var ue=J=>{var ve=Hv(),Ne=u(ve);po(Ne,{class:"h-4 w-4 animate-spin"}),h(J,ve)};k(ae,J=>{s(_).status==="isSyncing"&&J(ue)})}var xe=d(ae,2);{var Z=J=>{var ve=Vv(),Ne=u(ve);lt(Ne,20,()=>s(P).concernedDates,Ve=>Ve,(Ve,Qe)=>{const Be=V(()=>s(P).recipesByDate.get(Qe)||[]);var Ye=H(),He=I(Ye);{var Ct=St=>{var rt=Wv(),Bt=u(rt),or=u(Bt);B((Dt,jr)=>{rr(rt,"data-tip",Dt),L(or,jr)},[()=>s(Be).map(Dt=>Dt.r).join(", "),()=>new Date(Qe).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h(St,rt)},qr=St=>{var rt=Gv(),Bt=u(rt);B(or=>L(Bt,or),[()=>new Date(Qe).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h(St,rt)};k(He,St=>{s(Be).length>0?St(Ct):St(qr,!1)})}h(Ve,Ye)}),h(J,ve)};k(xe,J=>{s(P).concernedDates.length>0&&J(Z)})}var me=d(be,2),q=u(me);q.__click=[Qv,e,_],q.__keydown=[Kv,e,_];var X=u(q);nr(X,{size:18});var Ae=d(X,2);{var we=J=>{var ve=Jv(),Ne=I(ve),Ve=u(Ne),Qe=d(Ne,2);{var Be=Ye=>{var He=Yv(),Ct=u(He);Dv(Ct,{get tip(){return s(_).storeInfo.storeComment},get icon(){return Ic},iconSize:14}),h(Ye,He)};k(Qe,Ye=>{s(_).storeInfo?.storeComment&&Ye(Be)})}B(()=>L(Ve,s(_).storeInfo.storeName)),h(J,ve)},Ee=J=>{var ve=Zv();h(J,ve)};k(Ae,J=>{s(_).storeInfo?.storeName?J(we):J(Ee,!1)})}var oe=d(q,2);oe.__click=[Xv,e,_],oe.__keydown=[Fv,e,_];var ye=u(oe);Wn(ye,{size:18});var je=d(ye,2);{var de=J=>{var ve=tf(),Ne=u(ve),Ve=d(Ne);{var Qe=Be=>{var Ye=ef(),He=u(Ye);B(()=>L(He,`+${s(_).who.length-2}`)),h(Be,Ye)};k(Ve,Be=>{s(_).who.length>2&&Be(Qe)})}B(Be=>L(Ne,`${Be??""} `),[()=>s(_).who.slice(0,2).map(Be=>Be.slice(0,3)).join(" | ")]),h(J,ve)},We=J=>{var ve=rf();h(J,ve)};k(je,J=>{s(_).who&&s(_).who.length>0?J(de):J(We,!1)})}var ce=d(ne,2),$e=u(ce);$e.__click=[nf,e,_],$e.__keydown=[af,e,_];var Ue=u($e),_e=u(Ue),st=u(_e);Nc(st,{class:"h-4 w-4"});var qe=d(_e,2),Pe=u(qe),Ze=u(Pe);{var ge=J=>{var ve=sf(),Ne=u(ve),Ve=u(Ne),Qe=d(Ne,2);$c(Qe,{class:"h-4 w-4"});var Be=d(Qe);B(()=>{L(Ve,s(P).formattedQuantities),L(Be,` ${s(te).totalOverride.q??""} ${s(te).totalOverride.u??""}`)}),h(J,ve)},ke=J=>{var ve=of(),Ne=u(ve);B(()=>L(Ne,s(P).formattedQuantities)),h(J,ve)};k(Ze,J=>{s(te)?.totalOverride?J(ge):J(ke,!1)})}var Ce=d(Pe,2);{var Ge=J=>{var ve=lf(),Ne=u(ve),Ve=u(Ne),Qe=d(Ve);va(Qe,{class:"h-3 w-3"});var Be=d(Ne,2),Ye=u(Be),He=d(Ye);Gc(He,{class:"h-3 w-3"}),B(()=>{L(Ve,`${s(P).nbRecipes??""} `),L(Ye,`${s(P).totalAssiettes??""} `)}),h(J,ve)};k(Ce,J=>{(s(P).nbRecipes||s(P).totalAssiettes)&&J(Ge)})}var Ke=d(Ue,2);{var mt=J=>{var ve=uf();ve.__click=[cf,e,_];var Ne=d(u(ve),2),Ve=u(Ne),Qe=d(Ne,2);{var Be=He=>{bc(He,{size:18})},Ye=He=>{yc(He,{size:18})};k(Qe,He=>{Nr.isMobile?He(Be):He(Ye,!1)})}B(()=>{rr(ve,"title",`Acheter le manquant (${s(P).formattedAvailableQuantities??""})`),L(Ve,s(P).formattedAvailableQuantities)}),h(J,ve)},kt=J=>{Qa(J,{size:24,class:"text-success ms-auto"})};k(Ke,J=>{s(P).hasMissing?J(mt):J(kt,!1)})}var tt=d(Ke,2);{var gt=J=>{var ve=df(),Ne=u(ve);_c(Ne,{size:18}),h(J,ve)};k(tt,J=>{s(te)?.hasUnresolvedChangedSinceOverride&&J(gt)})}var Xe=d($e,2);Xe.__click=[vf,e,_],Xe.__keydown=[ff,e,_];var ot=u(Xe),qt=u(ot),dt=u(qt);er(dt,{class:"h-4 w-4"});var jt=d(ot,2),Lt=u(jt);lt(Lt,17,()=>s(D),Zr,(J,ve)=>{const Ne=V(()=>r[s(ve).icon]);var Ve=hf(),Qe=u(Ve);fr(Qe,()=>s(Ne),(He,Ct)=>{Ct(He,{class:"h-4 w-4"})});var Be=d(Qe,2),Ye=u(Be);B(He=>{Te(Ve,1,`badge badge-outline flex items-center gap-1 ${s(ve).badgeClass??""}`),L(Ye,He)},[()=>fa(s(ve).quantity,s(ve).unit)]),h(J,Ve)});var Yt=d(Lt,2);{var Tt=J=>{var ve=pf();h(J,ve)};k(Yt,J=>{s(D).length===0&&J(Tt)})}B(()=>{Te(Q,1,`card bg-base-100 border-base-300 ${s(_).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),L(R,`${s(_).productName??""} `),Te(q,1,`btn btn-soft btn-sm group relative ${s(_).storeInfo?.storeName?"btn-success":""}`),Te(oe,1,`btn btn-sm btn-soft group relative ${s(_).who&&s(_).who?.length>0?"btn-success":""}`),Te(Pe,1,`font-bold text-base ${s(P).hasMissing?"text-error":"text-success"}`)}),h($,Q)}),h(f,w)});var c=d(l,2);{var v=f=>{var p=_f();h(f,p)};k(c,f=>{Object.values(s(a)).flat().length===0&&f(v)})}h(t,i),G()}Fe(["click","keydown"]);async function wf(t,e,r,n,a,o,i,l,c){if(!(!s(e)||s(r))){b(n,null),b(a,null);try{const v=s(o).map(g=>g.id),f=i.products.filter(g=>v.includes(g.$id));F.setSyncStatus(v,!0),i.onClose();const p={storeName:s(l).trim(),storeComment:s(c).trim()},m=await lo(v,f,p);if(b(a,m,!0),m.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${m.updatedCount} produits modifiés`),i.onSuccess?.(m);else throw new Error(m.error||"Erreur lors de la mise à jour")}catch(v){const f=v instanceof Error?v.message:"Erreur inconnue";b(n,f,!0),console.error("[StoreEditModal] Erreur mise à jour:",v),F.clearSyncStatus()}finally{b(r,!1)}}}function Za(t,e,r){s(e)||r.onClose()}var Sf=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),xf=(t,e)=>b(e,"empty"),$f=(t,e)=>b(e,"all"),Pf=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Ef=S("<!> ",1),Af=S('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function kf(t,e){W(e,!0);let r=O(!1),n=O(null),a=O(null),o=O(Re(e.products.length>0&&e.products[0].storeInfo?e.products[0].storeInfo.storeName:"")),i=O(Re(e.products.length>0&&e.products[0].storeInfo&&e.products[0].storeInfo.storeComment||"")),l=O(Re({})),c=O("empty");sr(()=>{const Z={};e.products.forEach(me=>{e.productIds.includes(me.$id)&&(s(c)==="empty"?Z[me.$id]=!me.storeInfo||!me.storeInfo.storeName:Z[me.$id]=!0)}),b(l,Z,!0)});const v=V(()=>e.products.map(Z=>({id:Z.$id,label:Z.productName,title:Z.productName,selected:s(l)[Z.$id]}))),f=V(()=>s(v).filter(Z=>Z.selected)),p=V(()=>`Attribuer un magasin (${s(f).length} produits sélectionnés)`),m=V(()=>s(f).length===0?!1:s(o).trim().length>0);function g(Z){s(l)[Z]=!s(l)[Z]}var y=Af(),E=u(y),w=u(E),A=u(w),T=u(A),x=d(A,2);x.__click=[Za,r,e];var $=u(x);Rt($,{class:"h-4 w-4"});var _=d(w,2),P=u(_);{var C=Z=>{var me=Sf(),q=u(me);xn(q,{class:"h-4 w-4"});var X=d(q,2),Ae=u(X);B(()=>L(Ae,s(n))),h(Z,me)};k(P,Z=>{s(n)&&Z(C)})}var D=d(P,2),te=u(D),Q=u(te),U=u(Q);nr(U,{class:"h-4 w-4 opacity-50"});var ne=d(U,2),be=d(Q,2);{let Z=V(()=>F.uniqueStores.map(me=>({id:me,label:me,disabled:me===s(o)})));xo(be,{get suggestions(){return s(Z)},onSuggestionClick:me=>{b(o,me.label,!0)},title:"Suggestions de magasins :"})}var j=d(te,2),M=u(j),R=d(D,2),ie=d(u(R),2),K=u(ie);K.__click=[xf,c];var ee=d(K,2);ee.__click=[$f,c];var re=d(ie,2);Fr(re,{get items(){return s(v)},onToggleItem:g,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Se=d(_,2),z=u(Se);z.__click=[Za,r,e];var Y=d(z,2);Y.__click=[wf,m,r,n,a,f,e,o,i];var ae=u(Y);{var ue=Z=>{var me=Pf();h(Z,me)},xe=Z=>{var me=Ef(),q=I(me);Xr(q,{class:"h-4 w-4"});var X=d(q);B(()=>L(X,` Appliquer à ${s(f).length??""} produit(s)`)),h(Z,me)};k(ae,Z=>{s(r)?Z(ue):Z(xe,!1)})}B(()=>{L(T,s(p)),x.disabled=s(r),ne.disabled=s(r),M.disabled=s(r),Te(K,1,`tab ${s(c)==="empty"?"tab-active":""}`),Te(ee,1,`tab ${s(c)==="all"?"tab-active":""}`),z.disabled=s(r),Y.disabled=s(r)||!s(m)}),Ie(ne,()=>s(o),Z=>b(o,Z)),Ie(M,()=>s(i),Z=>b(i,Z)),h(t,y),G()}Fe(["click"]);async function Tf(t,e,r,n,a,o,i,l){if(!(!s(e)||s(r))){b(n,null),b(a,null);try{const c=s(o).map(p=>p.id),v=i.products.filter(p=>c.includes(p.$id));F.setSyncStatus(c,!0),i.onClose();const f=await co(c,v,s(l),"replace");if(b(a,f,!0),f.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${f.updatedCount} produits modifiés`),i.onSuccess?.(f);else throw new Error(f.error||"Erreur lors de la mise à jour")}catch(c){const v=c instanceof Error?c.message:"Erreur inconnue";b(n,v,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),F.clearSyncStatus()}finally{b(r,!1)}}}function Xa(t,e,r){s(e)||r.onClose()}var Cf=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Df=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},Nf=(t,e)=>b(e,"empty"),Mf=(t,e)=>b(e,"all"),If=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Of=S("<!> ",1),Rf=S('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function qf(t,e){W(e,!0);let r=O(!1),n=O(null),a=O(null),o=O(Re([])),i=O(""),l=O("empty"),c=O(Re({}));sr(()=>{const oe={};e.products.forEach(ye=>{e.productIds.includes(ye.$id)&&(s(l)==="empty"?oe[ye.$id]=!ye.who||ye.who.length===0:oe[ye.$id]=!0)}),b(c,oe,!0)});const v=V(()=>e.products.map(oe=>({id:oe.$id,label:oe.productName,title:oe.productName,selected:s(c)[oe.$id]}))),f=V(()=>s(v).filter(oe=>oe.selected)),p=V(()=>{const oe=new Set([...F.uniqueWho,...s(o)]);return Array.from(oe).map(ye=>({id:ye,label:ye,selected:s(o).includes(ye)}))}),m=V(()=>`Gérer les volontaires (${s(f).length} produits sélectionnés)`),g=V(()=>s(f).length===0?!1:s(o).length>0);function y(oe){const ye=oe.trim();ye&&!s(o).includes(ye)&&b(o,[...s(o),ye],!0)}function E(oe){b(o,s(o).filter(ye=>ye!==oe),!0)}function w(oe){s(o).includes(oe)?E(oe):y(oe)}function A(){s(i).trim()&&(y(s(i)),b(i,""))}function T(oe){s(c)[oe]=!s(c)[oe]}var x=Rf(),$=u(x),_=u($),P=u(_),C=u(P),D=d(P,2);D.__click=[Xa,r,e];var te=u(D);Rt(te,{class:"h-4 w-4"});var Q=d(_,2),U=u(Q);{var ne=oe=>{var ye=Cf(),je=u(ye);xn(je,{class:"h-4 w-4"});var de=d(je,2),We=u(de);B(()=>L(We,s(n))),h(oe,ye)};k(U,oe=>{s(n)&&oe(ne)})}var be=d(U,2),j=u(be),M=u(j),R=u(M),ie=u(R);rn(ie,{class:"h-4 w-4 opacity-50"});var K=d(ie,2);K.__keydown=[Df,A];var ee=d(R,2);ee.__click=A;var re=u(ee);wo(re,{size:16});var Se=d(M,2),z=d(u(Se),2);Fr(z,{get items(){return s(p)},onToggleItem:w,showIcon:!0});var Y=d(be,2),ae=d(u(Y),2),ue=u(ae);ue.__click=[Nf,l];var xe=d(ue,2);xe.__click=[Mf,l];var Z=d(ae,2);Fr(Z,{get items(){return s(v)},onToggleItem:T,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var me=d(Q,2),q=u(me);q.__click=[Xa,r,e];var X=d(q,2);X.__click=[Tf,g,r,n,a,f,e,o];var Ae=u(X);{var we=oe=>{var ye=If();h(oe,ye)},Ee=oe=>{var ye=Of(),je=I(ye);Xr(je,{class:"h-4 w-4"});var de=d(je);B(()=>L(de,` Appliquer à ${s(f).length??""} produit(s)`)),h(oe,ye)};k(Ae,oe=>{s(r)?oe(we):oe(Ee,!1)})}B(oe=>{L(C,s(m)),D.disabled=s(r),K.disabled=s(r),ee.disabled=oe,Te(ue,1,`tab ${s(l)==="empty"?"tab-active":""}`),Te(xe,1,`tab ${s(l)==="all"?"tab-active":""}`),q.disabled=s(r),X.disabled=s(r)||!s(g)},[()=>s(r)||!s(i).trim()]),Ie(K,()=>s(i),oe=>b(i,oe)),h(t,x),G()}Fe(["click","keydown"]);var jf=S("<div><!></div>"),Lf=S('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Bf(t,e){W(e,!0);let r=O(!1),n=Oe(e,"width",3,"80"),a=Oe(e,"bgClass",3,"bg-base-300");const o=V(()=>"w-"+n());var i=H(),l=I(i);{var c=f=>{var p=jf(),m=u(p);le(m,()=>e.children??se),B(()=>Te(p,1,`${a()??""} ${(s(o)?s(o):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),h(f,p)},v=f=>{var p=Lf(),m=I(p),g=u(m),y=d(g,2),E=d(u(y),2),w=u(E);le(w,()=>e.children??se);var A=d(m,2),T=u(A),x=u(T);ho(x,{class:"h-6 w-6"}),cl(g,()=>s(r),$=>b(r,$)),h(f,p)};k(l,f=>{Nr.isMobile?f(v,!1):f(c)})}h(t,i),G()}function zf(){}var Uf=S('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function Hf(t,e){W(e,!0);const r="100",n=V(()=>F.stats);let a=O(null),o=O("recettes"),i=O(!1),l=O(!1),c=O(Re([])),v=O(Re([])),f=O(!1),p=O(Re([]));function m(z,Y="recettes"){b(o,Y,!0),b(a,z,!0)}function g(){b(a,null)}function y(z,Y,ae){b(c,Y,!0),b(v,ae,!0),b(z==="who"?i:l,!0)}function E(z){(!z||z==="who")&&b(i,!1),(!z||z==="store")&&b(l,!1),b(c,[],!0),b(v,[],!0)}function w(z){console.log(`[ProductsTable] Modification groupée réussie: ${z.updatedCount} produits`)}function A(z){const Y=z.filter(ae=>ae.displayMissingQuantity!=="✅ Complet"&&ae.missingQuantityArray&&ae.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${z.length} produits reçus → ${Y.length} produits avec quantités manquantes`),b(p,Y,!0),b(f,!0)}function T(){b(f,!1),b(p,[],!0)}function x(){console.log("[ProductsTable] Achat groupé créé avec succès"),T()}async function $(z){try{if(!F.currentMainId)throw new Error("mainId non disponible");const Y=z.missingQuantityArray||[];if(Y.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let ae=z.$id;z.isSynced||(console.log(`[ProductsTable] Produit ${z.$id} local, création pour validation rapide...`),ae=(await zt(z.$id,{},xe=>F.getEnrichedProductById(xe))).$id,console.log(`[ProductsTable] Produit sync créé: ${ae}`)),await uo(F.currentMainId,ae,Y,{store:z.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${z.productName}`)}catch(Y){console.error("[ProductsTable] Erreur validation rapide:",Y),alert("Erreur lors de la validation rapide: "+Y.message)}}var _=Uf(),P=I(_),C=u(P),D=u(C),te=u(D);Cc(te,{class:"mr-1 h-4 w-4"});var Q=d(te),U=d(D,2);U.__click=[zf];var ne=u(U);Lc(ne,{class:"mr-1 h-4 w-4"});var be=d(C,2);Bf(be,{width:r,children:(z,Y)=>{Tv(z,{})},$$slots:{default:!0}});var j=d(be,2);yf(j,{onOpenModal:m,onOpenGroupEditModal:y,onOpenGroupPurchaseModal:A,onQuickValidation:$});var M=d(P,2);Vd(M,{get productId(){return s(a)},get initialTab(){return s(o)},onClose:g});var R=d(M,2);{var ie=z=>{qf(z,{get productIds(){return s(c)},get products(){return s(v)},onClose:()=>E("who"),onSuccess:w})};k(R,z=>{s(i)&&z(ie)})}var K=d(R,2);{var ee=z=>{kf(z,{get productIds(){return s(c)},get products(){return s(v)},onClose:()=>E("store"),onSuccess:w})};k(K,z=>{s(l)&&z(ee)})}var re=d(K,2);{var Se=z=>{gu(z,{get products(){return s(p)},onClose:T,onSuccess:x})};k(re,z=>{s(f)&&z(Se)})}B(()=>{Te(P,1,`space-y-6 ${Nr.isMobile?"":"ml-100"}`),L(Q,` ${s(n).total??""}`)}),h(t,_),G()}Fe(["click"]);ui();var Wf=S('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function Gf(t){var e=Wf();h(t,e)}var Vf=S('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Qf(t,e){var r=Vf(),n=d(u(r),2),a=d(u(n),2),o=u(a);B(()=>L(o,e.message)),h(t,r)}var Kf=S('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Yf(t,e){var r=Kf(),n=u(r),a=u(n);xn(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(u(o),2),l=u(i);B(()=>L(l,e.message||"Erreur inconnue")),h(t,r)}function Jf(t){t.stopPropagation()}var Zf=(t,e)=>t.key==="Escape"&&e(),Xf=S('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),Ff=S('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),eh=(t,e)=>b(e,!1),th=S('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),rh=(t,e)=>b(e,!0),nh=(t,e)=>b(e,!1),ah=S(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),sh=(t,e)=>b(e,!0),oh=S('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),ih=S('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function lh(t,e){W(e,!0);let r=Oe(e,"onClose",3,()=>{}),n=Oe(e,"onAuthSuccess",3,()=>{}),a=O(!0),o=O(!1),i=O(""),l=O(""),c=O(""),v=O(""),f=O(""),p=O(""),m=O(""),g=O(""),y=O(!1);function E(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function w(K){if(K.preventDefault(),!s(c)||!s(v)){b(i,"Veuillez remplir tous les champs");return}b(o,!0),b(i,"");try{await(await E().getAccount()).createEmailPasswordSession(s(c),s(v)),b(l,"Connexion réussie !"),setTimeout(()=>{n()()},1e3)}catch(ee){console.error("Erreur de connexion:",ee),b(i,ee.message||"Erreur lors de la connexion",!0)}finally{b(o,!1)}}async function A(K){if(K.preventDefault(),!s(f)||!s(p)||!s(m)){b(i,"Veuillez remplir tous les champs");return}b(o,!0),b(i,"");try{const re=await E().getAccount();await re.create("unique()",s(p),s(m),s(f)),await re.createEmailPasswordSession(s(p),s(m)),b(l,"Compte créé et connecté !"),setTimeout(()=>{n()()},1e3)}catch(ee){console.error("Erreur d'inscription:",ee),b(i,ee.message||"Erreur lors de la création du compte",!0)}finally{b(o,!1)}}async function T(K){if(K.preventDefault(),!s(g)){b(i,"Veuillez entrer votre email");return}b(o,!0),b(i,"");try{await(await E().getAccount()).createRecovery(s(g),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(y,!1),b(g,"")},2e3)}catch(ee){console.error("Erreur mot de passe oublié:",ee),b(i,ee.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(o,!1)}}function x(){s(o)||r()()}sr(()=>{(s(a)||s(y))&&(b(i,""),b(l,""))});var $=ih();$.__click=x,$.__keydown=[Zf,x];var _=u($);_.__click=[Jf];var P=u(_),C=u(P),D=u(C),te=d(C,2);te.__click=x;var Q=d(P,2),U=u(Q);{var ne=K=>{var ee=Xf(),re=u(ee);B(()=>L(re,s(i))),h(K,ee)};k(U,K=>{s(i)&&K(ne)})}var be=d(U,2);{var j=K=>{var ee=Ff(),re=u(ee);B(()=>L(re,s(l))),h(K,ee)};k(be,K=>{s(l)&&K(j)})}var M=d(be,2);{var R=K=>{var ee=th(),re=I(ee),Se=u(re),z=d(u(Se),2),Y=d(Se,2),ae=u(Y),ue=d(re,2),xe=u(ue);xe.__click=[eh,y],B(()=>{z.disabled=s(o),Y.disabled=s(o),L(ae,s(o)?"Envoi...":"Envoyer l'email de réinitialisation"),xe.disabled=s(o)}),Pn("submit",re,T),Ie(z,()=>s(g),Z=>b(g,Z)),h(K,ee)},ie=K=>{var ee=H(),re=I(ee);{var Se=Y=>{var ae=ah(),ue=I(ae),xe=u(ue),Z=d(u(xe),2),me=d(xe,2),q=d(u(me),2),X=d(me,2),Ae=u(X),we=d(ue,2),Ee=u(we);Ee.__click=[rh,y];var oe=d(Ee,2),ye=d(u(oe));ye.__click=[nh,a],B(()=>{Z.disabled=s(o),q.disabled=s(o),X.disabled=s(o),L(Ae,s(o)?"Connexion...":"Se connecter"),Ee.disabled=s(o),ye.disabled=s(o)}),Pn("submit",ue,w),Ie(Z,()=>s(c),je=>b(c,je)),Ie(q,()=>s(v),je=>b(v,je)),h(Y,ae)},z=Y=>{var ae=oh(),ue=I(ae),xe=u(ue),Z=d(u(xe),2),me=d(xe,2),q=d(u(me),2),X=d(me,2),Ae=d(u(X),2),we=d(X,2),Ee=u(we),oe=d(ue,2),ye=d(u(oe));ye.__click=[sh,a],B(()=>{Z.disabled=s(o),q.disabled=s(o),Ae.disabled=s(o),we.disabled=s(o),L(Ee,s(o)?"Création...":"Créer un compte"),ye.disabled=s(o)}),Pn("submit",ue,A),Ie(Z,()=>s(f),je=>b(f,je)),Ie(q,()=>s(p),je=>b(p,je)),Ie(Ae,()=>s(m),je=>b(m,je)),h(Y,ae)};k(re,Y=>{s(a)?Y(Se):Y(z,!1)},!0)}h(K,ee)};k(M,K=>{s(y)?K(R):K(ie,!1)})}B(()=>{L(D,s(y)?"Mot de passe oublié":s(a)?"Connexion":"Inscription"),te.disabled=s(o)}),h(t,$),G()}Fe(["click","keydown"]);var ch=(t,e,r)=>e(s(r)),uh=S('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),dh=(t,e,r)=>e(s(r)),vh=S('<button class="btn btn-ghost btn-sm btn-square" title="Fermer" aria-label="Fermer la notification"><!></button>'),fh=S('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!></div></div></div>'),hh=S("<div></div>");function ph(t,e){W(e,!0);let r=Oe(e,"position",3,"toast-right toast-bottom"),n=Oe(e,"padding",3,"md");const a=V(()=>n()==="sm"?"px-2 py-0.5":""),o=V(()=>bt.toasts);function i(f){return f==="success"||f==="info"}function l(f){bt.dismiss(f.id)}function c(f){e.onShowDetails?.({id:f.id,message:f.message,details:f.details})}var v=hh();lt(v,21,()=>s(o),f=>f.id,(f,p)=>{var m=fh(),g=u(m),y=u(g),E=u(y);{var w=D=>{po(D,{class:"h-5 w-5 animate-spin"})};k(E,D=>{s(p).state==="loading"&&D(w)})}var A=d(E,2),T=u(A),x=d(y,2),$=u(x);{var _=D=>{var te=uh();te.__click=[ch,c,p];var Q=u(te);fo(Q,{class:"h-3 w-3"}),h(D,te)};k($,D=>{s(p).details&&D(_)})}var P=d($,2);{var C=D=>{var te=vh();te.__click=[dh,l,p];var Q=u(te);Rt(Q,{class:"ms-1 h-4 w-4"}),h(D,te)};k(P,D=>{(s(p).state==="error"||!i(s(p).state))&&D(C)})}B(()=>{Te(m,1,`alert alert-${s(p).state??""} max-w-sm ${s(a)??""} shadow-lg ${s(p).state==="error"?"":"alert-soft"}`),L(T,s(p).message)}),h(f,m)}),B(()=>Te(v,1,`toast ${r()??""} z-50`)),h(t,v),G()}Fe(["click"]);var mh=S('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function gh(t){var e=mh(),r=u(e),n=d(r,2);yo(n,{class:"swap-on fill-current"});var a=d(n,2);go(a,{class:"swap-off fill-current"}),h(t,e)}function _h(t,e){b(e,!0)}var bh=S('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),yh=S('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),wh=S('<div class="text-base-content/60"> </div>'),Sh=S('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),xh=S('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),$h=S('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Ph=S('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),Eh=S('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function Ah(t,e){W(e,!0);let r,n=O(null),a=O(!0),o=O(!1),i=O(!1);function l(_,P,C){localStorage.setItem("appwrite-user-email",_),localStorage.setItem("appwrite-user-name",P)}async function c(){const _=Va();r=uc(_);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const D=await(await window.AppwriteClient.getAccount()).get();l(D.email,D.name),await F.initialize(r,_)}catch(P){const C=P instanceof Error?P.message:"Erreur lors de l'initialisation";b(n,C,!0),console.error("[App] Erreur initialisation:",P)}finally{b(a,!1)}}Ws(async()=>{await c()});async function v(){b(i,!1),b(a,!0),b(n,null),await c()}fl(()=>{F.destroy()});async function f(){if(!(!r||s(o))){b(o,!0);try{const _=Va();await F.forceReload(r,_)}catch(_){console.error("[App] Erreur lors du rechargement forcé:",_)}finally{b(o,!1)}}}const p=V(()=>s(n)||F.error),m=V(()=>s(a)||F.loading);var g=Eh(),y=I(g),E=u(y);ph(E,{});var w=d(E,2);{var A=_=>{Gf(_)},T=_=>{var P=Ph(),C=I(P),D=u(C),te=u(D),Q=d(u(te),2),U=u(Q);{var ne=q=>{var X=bh();h(q,X)};k(U,q=>{F.realtimeConnected&&q(ne)})}var be=d(U,2);{var j=q=>{var X=yh();h(q,X)};k(be,q=>{F.syncing&&q(j)})}var M=d(be,2);{var R=q=>{var X=wh(),Ae=u(X);B(we=>L(Ae,`Maj: ${we??""}`),[()=>new Date(F.lastSync).toLocaleTimeString()]),h(q,X)};k(M,q=>{F.lastSync&&q(R)})}var ie=d(M,2);gh(ie);var K=d(ie,2);{var ee=q=>{var X=Sh();let Ae;X.__click=f;var we=u(X);Bc(we,{class:"h-4 w-4"}),B(Ee=>{Ae=Te(X,1,"btn btn-outline btn-sm",null,Ae,Ee),X.disabled=s(o)||F.loading},[()=>({loading:s(o)||F.loading})]),h(q,X)};k(K,q=>{s(n)||q(ee)})}var re=d(K,2);{var Se=q=>{var X=xh(),Ae=u(X);Ae.__click=[_h,i];var we=u(Ae);Mc(we,{class:"mr-2 h-4 w-4"}),h(q,X)};k(re,q=>{s(n)&&q(Se)})}var z=d(C,2),Y=u(z);{var ae=q=>{Yf(q,{get message(){return s(p)}})},ue=q=>{var X=H(),Ae=I(X);{var we=Ee=>{Qf(Ee,{get message(){return s(p)}})};k(Ae,Ee=>{s(p)&&Ee(we)},!0)}h(q,X)};k(Y,q=>{s(n)?q(ae):q(ue,!1)})}var xe=d(Y,2);{var Z=q=>{Hf(q,{})},me=q=>{var X=H(),Ae=I(X);{var we=Ee=>{var oe=$h();h(Ee,oe)};k(Ae,Ee=>{!F.loading&&!s(n)&&Ee(we)},!0)}h(q,X)};k(xe,q=>{F.enrichedProducts.length>0?q(Z):q(me,!1)})}h(_,P)};k(w,_=>{s(m)?_(A):_(T,!1)})}var x=d(y,2);{var $=_=>{lh(_,{onClose:()=>b(i,!1),onAuthSuccess:v})};k(x,_=>{s(i)&&_($)})}h(t,g),G()}Fe(["click"]);const $o=document.getElementById("app_products");if(!$o)throw new Error("Élément target non trouvé: #app_products");Ki(Ah,{target:$o});
