(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const ts=!1;var vn=Array.isArray,Do=Array.prototype.indexOf,Kn=Array.from,Rn=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Co=Object.getOwnPropertyDescriptors,Mo=Object.prototype,Io=Array.prototype,rs=Object.getPrototypeOf,ma=Object.isExtensible;function zr(t){return typeof t=="function"}const se=()=>{};function Oo(t){for(var e=0;e<t.length;e++)t[e]()}function ns(){var t,e,r=new Promise((n,a)=>{t=n,e=a});return{promise:r,resolve:t,reject:e}}function as(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const n of t)if(r.push(n),r.length===e)break;return r}const pt=2,Yn=4,Jn=8,br=16,Qt=32,yr=64,Zn=128,xt=256,cn=512,lt=1024,gt=2048,sr=4096,Et=8192,wr=16384,Xn=32768,Sr=65536,ga=1<<17,Ro=1<<18,Or=1<<19,qo=1<<20,qn=1<<21,fn=1<<22,vr=1<<23,fr=Symbol("$state"),ss=Symbol("legacy props"),jo=Symbol(""),Qr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function os(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Lo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Bo(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function zo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Uo(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Ho(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Wo(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Go(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Qo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Vo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ko(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const hn=1,pn=2,is=4,Yo=8,Jo=16,Zo=1,Xo=2,Fo=4,ei=8,ti=16,ri=1,ni=2,et=Symbol(),ai="http://www.w3.org/1999/xhtml",si="http://www.w3.org/2000/svg",oi="@attach";function ii(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function li(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let ci=!1;function ls(t){return t===this.v}function cs(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function ui(t,e){return t!==e}function us(t){return!cs(t,this.v)}let Rr=!1,di=!1;function vi(){Rr=!0}let Je=null;function kr(t){Je=t}function W(t,e=!1,r){Je={p:Je,c:null,e:null,s:t,x:null,l:Rr&&!e?{s:null,u:null,$:[]}:null}}function G(t){var e=Je,r=e.e;if(r!==null){e.e=null;for(var n of r)$s(n)}return Je=e.p,{}}function qr(){return!Rr||Je!==null&&Je.l===null}let cr=[];function ds(){var t=cr;cr=[],Oo(t)}function gr(t){if(cr.length===0&&!Vr){var e=cr;queueMicrotask(()=>{e===cr&&ds()})}cr.push(t)}function fi(){for(;cr.length>0;)ds()}const hi=new WeakMap;function vs(t){var e=De;if(e===null)return Me.f|=vr,t;if((e.f&Xn)===0){if((e.f&Zn)===0)throw!e.parent&&t instanceof Error&&fs(t),t;e.b.error(t)}else Tr(t,e)}function Tr(t,e){for(;e!==null;){if((e.f&Zn)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t instanceof Error&&fs(t),t}function fs(t){const e=hi.get(t);e&&(Rn(t,"message",{value:e.message}),Rn(t,"stack",{value:e.stack}))}const nn=new Set;let Le=null,ln=null,jn=new Set,It=[],mn=null,Ln=!1,Vr=!1;class St{current=new Map;#e=new Map;#r=new Set;#o=0;#d=null;#u=[];#i=[];#c=[];#l=[];#a=[];#v=[];skipped_effects=new Set;process(e){It=[],ln=null;var r=St.apply(this);for(const o of e)this.#s(o);if(this.#o===0){this.#h();var n=this.#i,a=this.#c;this.#i=[],this.#c=[],this.#l=[],ln=this,Le=null,_a(n),_a(a),ln=null,this.#d?.resolve()}else this.#f(this.#i),this.#f(this.#c),this.#f(this.#l);r();for(const o of this.#u)Jr(o);this.#u=[]}#s(e){e.f^=lt;for(var r=e.first;r!==null;){var n=r.f,a=(n&(Qt|yr))!==0,o=a&&(n&lt)!==0,i=o||(n&Et)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=lt:(n&Yn)!==0?this.#c.push(r):(n&lt)===0&&((n&fn)!==0&&r.b?.is_pending()?this.#u.push(r):wn(r)&&((r.f&br)!==0&&this.#l.push(r),Jr(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#f(e){for(const r of e)((r.f&gt)!==0?this.#a:this.#v).push(r),vt(r,lt);e.length=0}capture(e,r){this.#e.has(e)||this.#e.set(e,r),this.current.set(e,e.v)}activate(){Le=this}deactivate(){Le=null}flush(){if(It.length>0){if(this.activate(),hs(),Le!==null&&Le!==this)return}else this.#o===0&&this.#h();this.deactivate();for(const e of jn)if(jn.delete(e),e(),Le!==null)break}#h(){for(const e of this.#r)e();if(this.#r.clear(),nn.size>1){this.#e.clear();let e=!0;for(const r of nn){if(r===this){e=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(e)r.current.set(n,a);else continue;ps(n)}if(It.length>0){Le=r;const n=St.apply(r);for(const a of It)r.#s(a);It=[],n()}}Le=null}nn.delete(this)}increment(){this.#o+=1}decrement(){this.#o-=1;for(const e of this.#a)vt(e,gt),_r(e);for(const e of this.#v)vt(e,sr),_r(e);this.flush()}add_callback(e){this.#r.add(e)}settled(){return(this.#d??=ns()).promise}static ensure(){if(Le===null){const e=Le=new St;nn.add(Le),Vr||St.enqueue(()=>{Le===e&&e.flush()})}return Le}static enqueue(e){gr(e)}static apply(e){return se}}function pi(t){var e=Vr;Vr=!0;try{for(var r;;){if(fi(),It.length===0&&(Le?.flush(),It.length===0))return mn=null,r;hs()}}finally{Vr=e}}function hs(){var t=Ar;Ln=!0;try{var e=0;for(Sa(!0);It.length>0;){var r=St.ensure();if(e++>1e3){var n,a;mi()}r.process(It),Ft.clear()}}finally{Ln=!1,Sa(t),mn=null}}function mi(){try{Ho()}catch(t){Tr(t,mn)}}let lr=null;function _a(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var n=t[r++];if((n.f&(wr|Et))===0&&wn(n)&&(lr=[],Jr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?As(n):n.fn=null),lr?.length>0)){Ft.clear();for(const a of lr)Jr(a);lr=[]}}lr=null}}function ps(t){if(t.reactions!==null)for(const e of t.reactions){const r=e.f;(r&pt)!==0?ps(e):(r&(fn|br))!==0&&(vt(e,gt),_r(e))}}function _r(t){for(var e=mn=t;e.parent!==null;){e=e.parent;var r=e.f;if(Ln&&e===De&&(r&br)!==0)return;if((r&(yr|Qt))!==0){if((r&lt)===0)return;e.f^=lt}}It.push(e)}function Fn(t){let e=0,r=rr(0),n;return()=>{Ci()&&(s(r),sa(()=>(e===0&&(n=jr(()=>t(()=>Ot(r)))),e+=1,()=>{gr(()=>{e-=1,e===0&&(n?.(),n=void 0,Ot(r))})})))}}var gi=Sr|Or|Zn;function _i(t,e,r){new bi(t,e,r)}class bi{parent;#e=!1;#r;#o=null;#d;#u;#i;#c=null;#l=null;#a=null;#v=null;#s=0;#f=0;#h=!1;#m=null;#g=()=>{this.#m&&Nr(this.#m,this.#s)};#n=Fn(()=>(this.#m=rr(this.#s),()=>{this.#m=null}));constructor(e,r,n){this.#r=e,this.#d=r,this.#u=n,this.parent=De.b,this.#e=!!this.#d.pending,this.#i=Yt(()=>{De.b=this;{try{this.#c=nt(()=>n(this.#r))}catch(a){this.error(a)}this.#f>0?this.#y():this.#e=!1}},gi)}#_(){try{this.#c=nt(()=>this.#u(this.#r))}catch(e){this.error(e)}this.#e=!1}#b(){const e=this.#d.pending;e&&(this.#l=nt(()=>e(this.#r)),St.enqueue(()=>{this.#c=this.#p(()=>(St.ensure(),nt(()=>this.#u(this.#r)))),this.#f>0?this.#y():(Ht(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#d.pending}#p(e){var r=De,n=Me,a=Je;Rt(this.#i),ht(this.#i),kr(this.#i.ctx);try{return e()}catch(o){return vs(o),null}finally{Rt(r),ht(n),kr(a)}}#y(){const e=this.#d.pending;this.#c!==null&&(this.#v=document.createDocumentFragment(),yi(this.#c,this.#v)),this.#l===null&&(this.#l=nt(()=>e(this.#r)))}#w(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#w(e);return}this.#f+=e,this.#f===0&&(this.#e=!1,this.#l&&Ht(this.#l,()=>{this.#l=null}),this.#v&&(this.#r.before(this.#v),this.#v=null),gr(()=>{St.ensure().flush()}))}update_pending_count(e){this.#w(e),this.#s+=e,jn.add(this.#g)}get_effect_pending(){return this.#n(),s(this.#m)}error(e){var r=this.#d.onerror;let n=this.#d.failed;if(this.#h||!r&&!n)throw e;this.#c&&(at(this.#c),this.#c=null),this.#l&&(at(this.#l),this.#l=null),this.#a&&(at(this.#a),this.#a=null);var a=!1,o=!1;const i=()=>{if(a){li();return}a=!0,o&&Ko(),St.ensure(),this.#s=0,this.#a!==null&&Ht(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#c=this.#p(()=>(this.#h=!1,nt(()=>this.#u(this.#r)))),this.#f>0?this.#y():this.#e=!1};var l=Me;try{ht(null),o=!0,r?.(e,i),o=!1}catch(c){Tr(c,this.#i&&this.#i.parent)}finally{ht(l)}n&&gr(()=>{this.#a=this.#p(()=>{this.#h=!0;try{return nt(()=>{n(this.#r,()=>e,()=>i)})}catch(c){return Tr(c,this.#i.parent),null}finally{this.#h=!1}})})}}function yi(t,e){for(var r=t.nodes_start,n=t.nodes_end;r!==null;){var a=r===n?null:en(r);e.append(r),r=a}}function ms(t,e,r){const n=qr()?gn:ea;if(e.length===0){r(t.map(n));return}var a=Le,o=De,i=wi();Promise.all(e.map(l=>Si(l))).then(l=>{i();try{r([...t.map(n),...l])}catch(c){(o.f&wr)===0&&Tr(c,o)}a?.deactivate(),gs()}).catch(l=>{Tr(l,o)})}function wi(){var t=De,e=Me,r=Je,n=Le;return function(){Rt(t),ht(e),kr(r),n?.activate()}}function gs(){Rt(null),ht(null),kr(null)}function gn(t){var e=pt|gt,r=Me!==null&&(Me.f&pt)!==0?Me:null;return De===null||r!==null&&(r.f&xt)!==0?e|=xt:De.f|=Or,{ctx:Je,deps:null,effects:null,equals:ls,f:e,fn:t,reactions:null,rv:0,v:et,wv:0,parent:r??De,ac:null}}function Si(t,e){let r=De;r===null&&Lo();var n=r.b,a=void 0,o=rr(et),i=!Me,l=new Map;return Ii(()=>{var c=ns();a=c.promise;try{Promise.resolve(t()).then(c.resolve,c.reject)}catch(m){c.reject(m)}var v=Le,f=n.is_pending();i&&(n.update_pending_count(1),f||(v.increment(),l.get(v)?.reject(Qr),l.set(v,c)));const p=(m,g=void 0)=>{f||v.activate(),g?g!==Qr&&(o.f|=vr,Nr(o,g)):((o.f&vr)!==0&&(o.f^=vr),Nr(o,m)),i&&(n.update_pending_count(-1),f||v.decrement()),gs()};c.promise.then(p,m=>p(null,m||"unknown"))}),na(()=>{for(const c of l.values())c.reject(Qr)}),new Promise(c=>{function v(f){function p(){f===a?c(o):v(a)}f.then(p,p)}v(a)})}function Q(t){const e=gn(t);return Ns(e),e}function ea(t){const e=gn(t);return e.equals=us,e}function _s(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)at(e[r])}}function xi(t){for(var e=t.parent;e!==null;){if((e.f&pt)===0)return e;e=e.parent}return null}function ta(t){var e,r=De;Rt(xi(t));try{_s(t),e=Is(t)}finally{Rt(r)}return e}function bs(t){var e=ta(t);if(t.equals(e)||(t.v=e,t.wv=Cs()),!xr){var r=(Zt||(t.f&xt)!==0)&&t.deps!==null?sr:lt;vt(t,r)}}const Ft=new Map;function rr(t,e){var r={f:0,v:t,reactions:null,equals:ls,rv:0,wv:0};return r}function O(t,e){const r=rr(t);return Ns(r),r}function $i(t,e=!1,r=!0){const n=rr(t);return e||(n.equals=us),Rr&&r&&Je!==null&&Je.l!==null&&(Je.l.s??=[]).push(n),n}function b(t,e,r=!1){Me!==null&&(!Pt||(Me.f&ga)!==0)&&qr()&&(Me.f&(pt|br|fn|ga))!==0&&!Wt?.includes(t)&&Vo();let n=r?Re(e):e;return Nr(t,n)}function Nr(t,e){if(!t.equals(e)){var r=t.v;xr?Ft.set(t,e):Ft.set(t,r),t.v=e;var n=St.ensure();n.capture(t,r),(t.f&pt)!==0&&((t.f&gt)!==0&&ta(t),vt(t,(t.f&xt)===0?lt:sr)),t.wv=Cs(),ys(t,gt),qr()&&De!==null&&(De.f&lt)!==0&&(De.f&(Qt|yr))===0&&(yt===null?qi([t]):yt.push(t))}return e}function Ot(t){b(t,t.v+1)}function ys(t,e){var r=t.reactions;if(r!==null)for(var n=qr(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===De)){var c=(l&gt)===0;c&&vt(i,e),(l&pt)!==0?ys(i,sr):c&&((l&br)!==0&&lr!==null&&lr.push(i),_r(i))}}}function Re(t){if(typeof t!="object"||t===null||fr in t)return t;const e=rs(t);if(e!==Mo&&e!==Io)return t;var r=new Map,n=vn(t),a=O(0),o=Gt,i=l=>{if(Gt===o)return l();var c=Me,v=Gt;ht(null),$a(o);var f=l();return ht(c),$a(v),f};return n&&r.set("length",O(t.length)),new Proxy(t,{defineProperty(l,c,v){(!("value"in v)||v.configurable===!1||v.enumerable===!1||v.writable===!1)&&Go();var f=r.get(c);return f===void 0?f=i(()=>{var p=O(v.value);return r.set(c,p),p}):b(f,v.value,!0),!0},deleteProperty(l,c){var v=r.get(c);if(v===void 0){if(c in l){const f=i(()=>O(et));r.set(c,f),Ot(a)}}else b(v,et),Ot(a);return!0},get(l,c,v){if(c===fr)return t;var f=r.get(c),p=c in l;if(f===void 0&&(!p||Xt(l,c)?.writable)&&(f=i(()=>{var g=Re(p?l[c]:et),y=O(g);return y}),r.set(c,f)),f!==void 0){var m=s(f);return m===et?void 0:m}return Reflect.get(l,c,v)},getOwnPropertyDescriptor(l,c){var v=Reflect.getOwnPropertyDescriptor(l,c);if(v&&"value"in v){var f=r.get(c);f&&(v.value=s(f))}else if(v===void 0){var p=r.get(c),m=p?.v;if(p!==void 0&&m!==et)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return v},has(l,c){if(c===fr)return!0;var v=r.get(c),f=v!==void 0&&v.v!==et||Reflect.has(l,c);if(v!==void 0||De!==null&&(!f||Xt(l,c)?.writable)){v===void 0&&(v=i(()=>{var m=f?Re(l[c]):et,g=O(m);return g}),r.set(c,v));var p=s(v);if(p===et)return!1}return f},set(l,c,v,f){var p=r.get(c),m=c in l;if(n&&c==="length")for(var g=v;g<p.v;g+=1){var y=r.get(g+"");y!==void 0?b(y,et):g in l&&(y=i(()=>O(et)),r.set(g+"",y))}if(p===void 0)(!m||Xt(l,c)?.writable)&&(p=i(()=>O(void 0)),b(p,Re(v)),r.set(c,p));else{m=p.v!==et;var E=i(()=>Re(v));b(p,E)}var w=Reflect.getOwnPropertyDescriptor(l,c);if(w?.set&&w.set.call(f,v),!m){if(n&&typeof c=="string"){var A=r.get("length"),T=Number(c);Number.isInteger(T)&&T>=A.v&&b(A,T+1)}Ot(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(p=>{var m=r.get(p);return m===void 0||m.v!==et});for(var[v,f]of r)f.v!==et&&!(v in l)&&c.push(v);return c},setPrototypeOf(){Qo()}})}function ba(t){try{if(t!==null&&typeof t=="object"&&fr in t)return t[fr]}catch{}return t}function Pi(t,e){return Object.is(ba(t),ba(e))}var ya,ws,Ss,xs;function Ei(){if(ya===void 0){ya=window,ws=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Ss=Xt(e,"firstChild").get,xs=Xt(e,"nextSibling").get,ma(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),ma(r)&&(r.__t=void 0)}}function Vt(t=""){return document.createTextNode(t)}function Dr(t){return Ss.call(t)}function en(t){return xs.call(t)}function u(t,e){return Dr(t)}function I(t,e=!1){{var r=Dr(t);return r instanceof Comment&&r.data===""?en(r):r}}function d(t,e=1,r=!1){let n=t;for(;e--;)n=en(n);return n}function Ai(t){t.textContent=""}function _n(){return!1}function ki(t,e){if(e){const r=document.body;t.autofocus=!0,gr(()=>{document.activeElement===r&&t.focus()})}}let wa=!1;function Ti(){wa||(wa=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function bn(t){var e=Me,r=De;ht(null),Rt(null);try{return t()}finally{ht(e),Rt(r)}}function ra(t,e,r,n=r){t.addEventListener(e,()=>bn(r));const a=t.__on_r;a?t.__on_r=()=>{a(),n(!0)}:t.__on_r=()=>n(!0),Ti()}function Ni(t){De===null&&Me===null&&Uo(),Me!==null&&(Me.f&xt)!==0&&De===null&&zo(),xr&&Bo()}function Di(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Kt(t,e,r,n=!0){var a=De;a!==null&&(a.f&Et)!==0&&(t|=Et);var o={ctx:Je,deps:null,nodes_start:null,nodes_end:null,f:t|gt,first:null,fn:e,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Jr(o),o.f|=Xn}catch(c){throw at(o),c}else e!==null&&_r(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Or)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Di(i,a),Me!==null&&(Me.f&pt)!==0&&(t&yr)===0)){var l=Me;(l.effects??=[]).push(i)}}return o}function Ci(){return Me!==null&&!Pt}function na(t){const e=Kt(Jn,null,!1);return vt(e,lt),e.teardown=t,e}function or(t){Ni();var e=De.f,r=!Me&&(e&Qt)!==0&&(e&Xn)===0;if(r){var n=Je;(n.e??=[]).push(t)}else return $s(t)}function $s(t){return Kt(Yn|qo,t,!1)}function Mi(t){St.ensure();const e=Kt(yr|Or,t,!0);return(r={})=>new Promise(n=>{r.outro?Ht(e,()=>{at(e),n(void 0)}):(at(e),n(void 0))})}function aa(t){return Kt(Yn,t,!1)}function Ii(t){return Kt(fn|Or,t,!0)}function sa(t,e=0){return Kt(Jn|e,t,!0)}function B(t,e=[],r=[]){ms(e,r,n=>{Kt(Jn,()=>t(...n.map(s)),!0)})}function Yt(t,e=0){var r=Kt(br|e,t,!0);return r}function nt(t,e=!0){return Kt(Qt|Or,t,!0,e)}function Ps(t){var e=t.teardown;if(e!==null){const r=xr,n=Me;xa(!0),ht(null);try{e.call(null)}finally{xa(r),ht(n)}}}function Es(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const a=r.ac;a!==null&&bn(()=>{a.abort(Qr)});var n=r.next;(r.f&yr)!==0?r.parent=null:at(r,e),r=n}}function Oi(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&Qt)===0&&at(e),e=r}}function at(t,e=!0){var r=!1;(e||(t.f&Ro)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(Ri(t.nodes_start,t.nodes_end),r=!0),Es(t,e&&!r),un(t,0),vt(t,wr);var n=t.transitions;if(n!==null)for(const o of n)o.stop();Ps(t);var a=t.parent;a!==null&&a.first!==null&&As(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function Ri(t,e){for(;t!==null;){var r=t===e?null:en(t);t.remove(),t=r}}function As(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function Ht(t,e){var r=[];oa(t,r,!0),ks(r,()=>{at(t),e&&e()})}function ks(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var a of t)a.out(n)}else e()}function oa(t,e,r){if((t.f&Et)===0){if(t.f^=Et,t.transitions!==null)for(const i of t.transitions)(i.is_global||r)&&e.push(i);for(var n=t.first;n!==null;){var a=n.next,o=(n.f&Sr)!==0||(n.f&Qt)!==0;oa(n,e,o?r:!1),n=a}}}function yn(t){Ts(t,!0)}function Ts(t,e){if((t.f&Et)!==0){t.f^=Et,(t.f&lt)===0&&(vt(t,gt),_r(t));for(var r=t.first;r!==null;){var n=r.next,a=(r.f&Sr)!==0||(r.f&Qt)!==0;Ts(r,a?e:!1),r=n}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||e)&&o.in()}}let Ar=!1;function Sa(t){Ar=t}let xr=!1;function xa(t){xr=t}let Me=null,Pt=!1;function ht(t){Me=t}let De=null;function Rt(t){De=t}let Wt=null;function Ns(t){Me!==null&&(Wt===null?Wt=[t]:Wt.push(t))}let ut=null,mt=0,yt=null;function qi(t){yt=t}let Ds=1,Yr=0,Gt=Yr;function $a(t){Gt=t}let Zt=!1;function Cs(){return++Ds}function wn(t){var e=t.f;if((e&gt)!==0)return!0;if((e&sr)!==0){var r=t.deps,n=(e&xt)!==0;if(r!==null){var a,o,i=(e&cn)!==0,l=n&&De!==null&&!Zt,c=r.length;if((i||l)&&(De===null||(De.f&wr)===0)){var v=t,f=v.parent;for(a=0;a<c;a++)o=r[a],(i||!o?.reactions?.includes(v))&&(o.reactions??=[]).push(v);i&&(v.f^=cn),l&&f!==null&&(f.f&xt)===0&&(v.f^=xt)}for(a=0;a<c;a++)if(o=r[a],wn(o)&&bs(o),o.wv>t.wv)return!0}(!n||De!==null&&!Zt)&&vt(t,lt)}return!1}function Ms(t,e,r=!0){var n=t.reactions;if(n!==null&&!Wt?.includes(t))for(var a=0;a<n.length;a++){var o=n[a];(o.f&pt)!==0?Ms(o,e,!1):e===o&&(r?vt(o,gt):(o.f&lt)!==0&&vt(o,sr),_r(o))}}function Is(t){var e=ut,r=mt,n=yt,a=Me,o=Zt,i=Wt,l=Je,c=Pt,v=Gt,f=t.f;ut=null,mt=0,yt=null,Zt=(f&xt)!==0&&(Pt||!Ar||Me===null),Me=(f&(Qt|yr))===0?t:null,Wt=null,kr(t.ctx),Pt=!1,Gt=++Yr,t.ac!==null&&(bn(()=>{t.ac.abort(Qr)}),t.ac=null);try{t.f|=qn;var p=t.fn,m=p(),g=t.deps;if(ut!==null){var y;if(un(t,mt),g!==null&&mt>0)for(g.length=mt+ut.length,y=0;y<ut.length;y++)g[mt+y]=ut[y];else t.deps=g=ut;if(!Zt||(f&pt)!==0&&t.reactions!==null)for(y=mt;y<g.length;y++)(g[y].reactions??=[]).push(t)}else g!==null&&mt<g.length&&(un(t,mt),g.length=mt);if(qr()&&yt!==null&&!Pt&&g!==null&&(t.f&(pt|sr|gt))===0)for(y=0;y<yt.length;y++)Ms(yt[y],t);return a!==null&&a!==t&&(Yr++,yt!==null&&(n===null?n=yt:n.push(...yt))),(t.f&vr)!==0&&(t.f^=vr),m}catch(E){return vs(E)}finally{t.f^=qn,ut=e,mt=r,yt=n,Me=a,Zt=o,Wt=i,kr(l),Pt=c,Gt=v}}function ji(t,e){let r=e.reactions;if(r!==null){var n=Do.call(r,t);if(n!==-1){var a=r.length-1;a===0?r=e.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(e.f&pt)!==0&&(ut===null||!ut.includes(e))&&(vt(e,sr),(e.f&(xt|cn))===0&&(e.f^=cn),_s(e),un(e,0))}function un(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)ji(t,r[n])}function Jr(t){var e=t.f;if((e&wr)===0){vt(t,lt);var r=De,n=Ar;De=t,Ar=!0;try{(e&br)!==0?Oi(t):Es(t),Ps(t);var a=Is(t);t.teardown=typeof a=="function"?a:null,t.wv=Ds;var o;ts&&di&&(t.f&gt)!==0&&t.deps}finally{Ar=n,De=r}}}async function Li(){await Promise.resolve(),pi()}function s(t){var e=t.f,r=(e&pt)!==0;if(Me!==null&&!Pt){var n=De!==null&&(De.f&wr)!==0;if(!n&&!Wt?.includes(t)){var a=Me.deps;if((Me.f&qn)!==0)t.rv<Yr&&(t.rv=Yr,ut===null&&a!==null&&a[mt]===t?mt++:ut===null?ut=[t]:(!Zt||!ut.includes(t))&&ut.push(t));else{(Me.deps??=[]).push(t);var o=t.reactions;o===null?t.reactions=[Me]:o.includes(Me)||o.push(Me)}}}else if(r&&t.deps===null&&t.effects===null){var i=t,l=i.parent;l!==null&&(l.f&xt)===0&&(i.f^=xt)}if(xr){if(Ft.has(t))return Ft.get(t);if(r){i=t;var c=i.v;return((i.f&lt)===0&&i.reactions!==null||Os(i))&&(c=ta(i)),Ft.set(i,c),c}}else r&&(i=t,wn(i)&&bs(i));if((t.f&vr)!==0)throw t.v;return t.v}function Os(t){if(t.v===et)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(Ft.has(e)||(e.f&pt)!==0&&Os(e))return!0;return!1}function jr(t){var e=Pt;try{return Pt=!0,t()}finally{Pt=e}}const Bi=-7169;function vt(t,e){t.f=t.f&Bi|e}function zi(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Ui=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Hi(t){return Ui.includes(t)}const Wi={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Gi(t){return t=t.toLowerCase(),Wi[t]??t}const Qi=["touchstart","touchmove"];function Vi(t){return Qi.includes(t)}const Rs=new Set,Bn=new Set;function ia(t,e,r,n={}){function a(o){if(n.capture||Wr.call(e,o),!o.cancelBubble)return bn(()=>r?.call(this,o))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?gr(()=>{e.addEventListener(t,a,n)}):e.addEventListener(t,a,n),a}function zn(t,e,r,n={}){var a=ia(e,t,r,n);return()=>{t.removeEventListener(e,a,n)}}function En(t,e,r,n,a){var o={capture:n,passive:a},i=ia(t,e,r,o);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&na(()=>{e.removeEventListener(t,i,o)})}function Fe(t){for(var e=0;e<t.length;e++)Rs.add(t[e]);for(var r of Bn)r(t)}let Pa=null;function Wr(t){var e=this,r=e.ownerDocument,n=t.type,a=t.composedPath?.()||[],o=a[0]||t.target;Pa=t;var i=0,l=Pa===t&&t.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(e===document||e===window)){t.__root=e;return}var v=a.indexOf(e);if(v===-1)return;c<=v&&(i=c)}if(o=a[i]||t.target,o!==e){Rn(t,"currentTarget",{configurable:!0,get(){return o||r}});var f=Me,p=De;ht(null),Rt(null);try{for(var m,g=[];o!==null;){var y=o.assignedSlot||o.parentNode||o.host||null;try{var E=o["__"+n];if(E!=null&&(!o.disabled||t.target===o))if(vn(E)){var[w,...A]=E;w.apply(o,[t,...A])}else E.call(o,t)}catch(T){m?g.push(T):m=T}if(t.cancelBubble||y===e||y===null)break;o=y}if(m){for(let T of g)queueMicrotask(()=>{throw T});throw m}}finally{t.__root=e,delete t.currentTarget,ht(f),Rt(p)}}}function qs(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function Cr(t,e){var r=De;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function S(t,e){var r=(e&ri)!==0,n=(e&ni)!==0,a,o=!t.startsWith("<!>");return()=>{a===void 0&&(a=qs(o?t:"<!>"+t),r||(a=Dr(a)));var i=n||ws?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Dr(i),c=i.lastChild;Cr(l,c)}else Cr(i,i);return i}}function Ki(t,e,r="svg"){var n=!t.startsWith("<!>"),a=`<${r}>${n?t:"<!>"+t}</${r}>`,o;return()=>{if(!o){var i=qs(a),l=Dr(i);o=Dr(l)}var c=o.cloneNode(!0);return Cr(c,c),c}}function Yi(t,e){return Ki(t,e,"svg")}function At(t=""){{var e=Vt(t+"");return Cr(e,e),e}}function H(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Vt();return t.append(e,r),Cr(e,r),t}function h(t,e){t!==null&&t.before(e)}function L(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??=t.nodeValue)&&(t.__t=r,t.nodeValue=r+"")}function Ji(t,e){return Zi(t,e)}const Pr=new Map;function Zi(t,{target:e,anchor:r,props:n={},events:a,context:o,intro:i=!0}){Ei();var l=new Set,c=p=>{for(var m=0;m<p.length;m++){var g=p[m];if(!l.has(g)){l.add(g);var y=Vi(g);e.addEventListener(g,Wr,{passive:y});var E=Pr.get(g);E===void 0?(document.addEventListener(g,Wr,{passive:y}),Pr.set(g,1)):Pr.set(g,E+1)}}};c(Kn(Rs)),Bn.add(c);var v=void 0,f=Mi(()=>{var p=r??e.appendChild(Vt());return _i(p,{pending:()=>{}},m=>{if(o){W({});var g=Je;g.c=o}a&&(n.$$events=a),v=t(m,n)||{},o&&G()}),()=>{for(var m of l){e.removeEventListener(m,Wr);var g=Pr.get(m);--g===0?(document.removeEventListener(m,Wr),Pr.delete(m)):Pr.set(m,g)}Bn.delete(c),p!==r&&p.parentNode?.removeChild(p)}});return Xi.set(v,f),v}let Xi=new WeakMap;function k(t,e,r=!1){var n=t,a=null,o=null,i=et,l=r?Sr:0,c=!1;const v=(g,y=!0)=>{c=!0,m(y,g)};var f=null;function p(){f!==null&&(f.lastChild.remove(),n.before(f),f=null);var g=i?a:o,y=i?o:a;g&&yn(g),y&&Ht(y,()=>{i?o=null:a=null})}const m=(g,y)=>{if(i!==(i=g)){var E=_n(),w=n;if(E&&(f=document.createDocumentFragment(),f.append(w=Vt())),i?a??=y&&nt(()=>y(w)):o??=y&&nt(()=>y(w)),E){var A=Le,T=i?a:o,x=i?o:a;T&&A.skipped_effects.delete(T),x&&A.skipped_effects.add(x),A.add_callback(p)}else p()}};Yt(()=>{c=!1,e(v),c||m(null,null)},l)}function Fi(t,e,r){var n=t,a=et,o,i,l=null,c=qr()?ui:cs;function v(){o&&Ht(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}Yt(()=>{if(c(a,a=e())){var f=n,p=_n();p&&(l=document.createDocumentFragment(),l.append(f=Vt())),i=nt(()=>r(f)),p?Le.add_callback(v):v()}})}function Zr(t,e){return e}function el(t,e,r){for(var n=t.items,a=[],o=e.length,i=0;i<o;i++)oa(e[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;Ai(c),c.append(r),n.clear(),Mt(t,e[0].prev,e[o-1].next)}ks(a,()=>{for(var v=0;v<o;v++){var f=e[v];l||(n.delete(f.k),Mt(t,f.prev,f.next)),at(f.e,!l)}})}function ct(t,e,r,n,a,o=null){var i=t,l={flags:e,items:new Map,first:null},c=(e&is)!==0;if(c){var v=t;i=v.appendChild(Vt())}var f=null,p=!1,m=new Map,g=ea(()=>{var A=r();return vn(A)?A:A==null?[]:Kn(A)}),y,E;function w(){tl(E,y,l,m,i,a,e,n,r),o!==null&&(y.length===0?f?yn(f):f=nt(()=>o(i)):f!==null&&Ht(f,()=>{f=null}))}Yt(()=>{E??=De,y=s(g);var A=y.length;if(!(p&&A===0)){p=A===0;var T,x,$,_;if(_n()){var P=new Set,N=Le;for(x=0;x<A;x+=1){$=y[x],_=n($,x);var D=l.items.get(_)??m.get(_);D?(e&(hn|pn))!==0&&js(D,$,x,e):(T=Ls(null,l,null,null,$,_,x,a,e,r,!0),m.set(_,T)),P.add(_)}for(const[te,V]of l.items)P.has(te)||N.skipped_effects.add(V.e);N.add_callback(w)}else w();s(g)}})}function tl(t,e,r,n,a,o,i,l,c){var v=(i&Yo)!==0,f=(i&(hn|pn))!==0,p=e.length,m=r.items,g=r.first,y=g,E,w=null,A,T=[],x=[],$,_,P,N;if(v)for(N=0;N<p;N+=1)$=e[N],_=l($,N),P=m.get(_),P!==void 0&&(P.a?.measure(),(A??=new Set).add(P));for(N=0;N<p;N+=1){if($=e[N],_=l($,N),P=m.get(_),P===void 0){var D=n.get(_);if(D!==void 0){n.delete(_),m.set(_,D);var te=w?w.next:y;Mt(r,w,D),Mt(r,D,te),An(D,te,a),w=D}else{var V=y?y.e.nodes_start:a;w=Ls(V,r,w,w===null?r.first:w.next,$,_,N,o,i,c)}m.set(_,w),T=[],x=[],y=w.next;continue}if(f&&js(P,$,N,i),(P.e.f&Et)!==0&&(yn(P.e),v&&(P.a?.unfix(),(A??=new Set).delete(P))),P!==y){if(E!==void 0&&E.has(P)){if(T.length<x.length){var U=x[0],ne;w=U.prev;var be=T[0],j=T[T.length-1];for(ne=0;ne<T.length;ne+=1)An(T[ne],U,a);for(ne=0;ne<x.length;ne+=1)E.delete(x[ne]);Mt(r,be.prev,j.next),Mt(r,w,be),Mt(r,j,U),y=U,w=j,N-=1,T=[],x=[]}else E.delete(P),An(P,y,a),Mt(r,P.prev,P.next),Mt(r,P,w===null?r.first:w.next),Mt(r,w,P),w=P;continue}for(T=[],x=[];y!==null&&y.k!==_;)(y.e.f&Et)===0&&(E??=new Set).add(y),x.push(y),y=y.next;if(y===null)continue;P=y}T.push(P),w=P,y=P.next}if(y!==null||E!==void 0){for(var M=E===void 0?[]:Kn(E);y!==null;)(y.e.f&Et)===0&&M.push(y),y=y.next;var R=M.length;if(R>0){var ie=(i&is)!==0&&p===0?a:null;if(v){for(N=0;N<R;N+=1)M[N].a?.measure();for(N=0;N<R;N+=1)M[N].a?.fix()}el(r,M,ie)}}v&&gr(()=>{if(A!==void 0)for(P of A)P.a?.apply()}),t.first=r.first&&r.first.e,t.last=w&&w.e;for(var K of n.values())at(K.e);n.clear()}function js(t,e,r,n){(n&hn)!==0&&Nr(t.v,e),(n&pn)!==0?Nr(t.i,r):t.i=r}function Ls(t,e,r,n,a,o,i,l,c,v,f){var p=(c&hn)!==0,m=(c&Jo)===0,g=p?m?$i(a,!1,!1):rr(a):a,y=(c&pn)===0?i:rr(i),E={i:y,v:g,k:o,a:null,e:null,prev:r,next:n};try{if(t===null){var w=document.createDocumentFragment();w.append(t=Vt())}return E.e=nt(()=>l(t,g,y,v),ci),E.e.prev=r&&r.e,E.e.next=n&&n.e,r===null?f||(e.first=E):(r.next=E,r.e.next=E.e),n!==null&&(n.prev=E,n.e.prev=E.e),E}finally{}}function An(t,e,r){for(var n=t.next?t.next.e.nodes_start:r,a=e?e.e.nodes_start:r,o=t.e.nodes_start;o!==null&&o!==n;){var i=en(o);a.before(o),o=i}}function Mt(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function le(t,e,...r){var n=t,a=se,o;Yt(()=>{a!==(a=e())&&(o&&(at(o),o=null),o=nt(()=>a(n,...r)))},Sr)}function hr(t,e,r){var n=t,a,o,i=null,l=null;function c(){o&&(Ht(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}Yt(()=>{if(a!==(a=e())){var v=_n();if(a){var f=n;v&&(i=document.createDocumentFragment(),i.append(f=Vt()),o&&Le.skipped_effects.add(o)),l=nt(()=>r(f,a))}v?Le.add_callback(c):c()}},Sr)}function rl(t,e,r,n,a,o){var i,l,c=null,v=t,f;Yt(()=>{const p=e()||null;var m=si;p!==i&&(f&&(p===null?Ht(f,()=>{f=null,l=null}):p===l?yn(f):at(f)),p&&p!==l&&(f=nt(()=>{if(c=document.createElementNS(m,p),Cr(c,c),n){var g=c.appendChild(Vt());n(c,g)}De.nodes_end=c,v.before(c)})),i=p,i&&(l=i))},Sr)}function nl(t,e){var r=void 0,n;Yt(()=>{r!==(r=e())&&(n&&(at(n),n=null),r&&(n=nt(()=>{aa(()=>r(t))})))})}function Bs(t){var e,r,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(e=0;e<a;e++)t[e]&&(r=Bs(t[e]))&&(n&&(n+=" "),n+=r)}else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function al(){for(var t,e,r=0,n="",a=arguments.length;r<a;r++)(t=arguments[r])&&(e=Bs(t))&&(n&&(n+=" "),n+=e);return n}function sl(t){return typeof t=="object"?al(t):t??""}const Ea=[...` 	
\r\f \v\uFEFF`];function ol(t,e,r){var n=t==null?"":""+t;if(e&&(n=n?n+" "+e:e),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||Ea.includes(n[i-1]))&&(l===n.length||Ea.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Aa(t,e=!1){var r=e?" !important;":";",n="";for(var a in t){var o=t[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function kn(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function il(t,e){if(e){var r="",n,a;if(Array.isArray(e)?(n=e[0],a=e[1]):n=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(kn)),a&&c.push(...Object.keys(a).map(kn));var v=0,f=-1;const E=t.length;for(var p=0;p<E;p++){var m=t[p];if(l?m==="/"&&t[p-1]==="*"&&(l=!1):o?o===m&&(o=!1):m==="/"&&t[p+1]==="*"?l=!0:m==='"'||m==="'"?o=m:m==="("?i++:m===")"&&i--,!l&&o===!1&&i===0){if(m===":"&&f===-1)f=p;else if(m===";"||p===E-1){if(f!==-1){var g=kn(t.substring(v,f).trim());if(!c.includes(g)){m!==";"&&p++;var y=t.substring(v,p).trim();r+=" "+y+";"}}v=p+1,f=-1}}}}return n&&(r+=Aa(n)),a&&(r+=Aa(a,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function Te(t,e,r,n,a,o){var i=t.__className;if(i!==r||i===void 0){var l=ol(r,n,o);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t.__className=r}else if(o&&a!==o)for(var c in o){var v=!!o[c];(a==null||v!==!!a[c])&&t.classList.toggle(c,v)}return o}function Tn(t,e={},r,n){for(var a in r){var o=r[a];e[a]!==o&&(r[a]==null?t.style.removeProperty(a):t.style.setProperty(a,o,n))}}function zs(t,e,r,n){var a=t.__style;if(a!==e){var o=il(e,n);o==null?t.removeAttribute("style"):t.style.cssText=o,t.__style=e}else n&&(Array.isArray(n)?(Tn(t,r?.[0],n[0]),Tn(t,r?.[1],n[1],"important")):Tn(t,r,n));return n}function dn(t,e,r=!1){if(t.multiple){if(e==null)return;if(!vn(e))return ii();for(var n of t.options)n.selected=e.includes(Kr(n));return}for(n of t.options){var a=Kr(n);if(Pi(a,e)){n.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function Us(t){var e=new MutationObserver(()=>{dn(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),na(()=>{e.disconnect()})}function ur(t,e,r=e){var n=!0;ra(t,"change",a=>{var o=a?"[selected]":":checked",i;if(t.multiple)i=[].map.call(t.querySelectorAll(o),Kr);else{var l=t.querySelector(o)??t.querySelector("option:not([disabled])");i=l&&Kr(l)}r(i)}),aa(()=>{var a=e();if(dn(t,a,n),n&&a===void 0){var o=t.querySelector(":checked");o!==null&&(a=Kr(o),r(a))}t.__value=a,n=!1}),Us(t)}function Kr(t){return"__value"in t?t.__value:t.value}const Ur=Symbol("class"),Hr=Symbol("style"),Hs=Symbol("is custom element"),Ws=Symbol("is html");function ll(t,e){var r=Sn(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e??"")}function Nn(t,e){var r=Sn(t);r.checked!==(r.checked=e??void 0)&&(t.checked=e)}function cl(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function nr(t,e,r,n){var a=Sn(t);a[e]!==(a[e]=r)&&(e==="loading"&&(t[jo]=r),r==null?t.removeAttribute(e):typeof r!="string"&&Gs(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function ul(t,e,r,n,a=!1,o=!1){var i=Sn(t),l=i[Hs],c=!i[Ws],v=e||{},f=t.tagName==="OPTION";for(var p in e)p in r||(r[p]=null);r.class?r.class=sl(r.class):r[Ur]&&(r.class=null),r[Hr]&&(r.style??=null);var m=Gs(t);for(const $ in r){let _=r[$];if(f&&$==="value"&&_==null){t.value=t.__value="",v[$]=_;continue}if($==="class"){var g=t.namespaceURI==="http://www.w3.org/1999/xhtml";Te(t,g,_,n,e?.[Ur],r[Ur]),v[$]=_,v[Ur]=r[Ur];continue}if($==="style"){zs(t,_,e?.[Hr],r[Hr]),v[$]=_,v[Hr]=r[Hr];continue}var y=v[$];if(!(_===y&&!(_===void 0&&t.hasAttribute($)))){v[$]=_;var E=$[0]+$[1];if(E!=="$$")if(E==="on"){const P={},N="$$"+$;let D=$.slice(2);var w=Hi(D);if(zi(D)&&(D=D.slice(0,-7),P.capture=!0),!w&&y){if(_!=null)continue;t.removeEventListener(D,v[N],P),v[N]=null}if(_!=null)if(w)t[`__${D}`]=_,Fe([D]);else{let te=function(V){v[$].call(this,V)};var x=te;v[N]=ia(D,t,te,P)}else w&&(t[`__${D}`]=void 0)}else if($==="style")nr(t,$,_);else if($==="autofocus")ki(t,!!_);else if(!l&&($==="__value"||$==="value"&&_!=null))t.value=t.__value=_;else if($==="selected"&&f)cl(t,_);else{var A=$;c||(A=Gi(A));var T=A==="defaultValue"||A==="defaultChecked";if(_==null&&!l&&!T)if(i[$]=null,A==="value"||A==="checked"){let P=t;const N=e===void 0;if(A==="value"){let D=P.defaultValue;P.removeAttribute(A),P.defaultValue=D,P.value=P.__value=N?D:null}else{let D=P.defaultChecked;P.removeAttribute(A),P.defaultChecked=D,P.checked=N?D:!1}}else t.removeAttribute($);else T||m.includes(A)&&(l||typeof _!="string")?(t[A]=_,A in i&&(i[A]=et)):typeof _!="function"&&nr(t,A,_)}}}return v}function ka(t,e,r=[],n=[],a,o=!1,i=!1){ms(r,n,l=>{var c=void 0,v={},f=t.nodeName==="SELECT",p=!1;if(Yt(()=>{var g=e(...l.map(s)),y=ul(t,c,g,a,o,i);p&&f&&"value"in g&&dn(t,g.value);for(let w of Object.getOwnPropertySymbols(v))g[w]||at(v[w]);for(let w of Object.getOwnPropertySymbols(g)){var E=g[w];w.description===oi&&(!c||E!==c[w])&&(v[w]&&at(v[w]),v[w]=nt(()=>nl(t,()=>E))),y[w]=E}c=y}),f){var m=t;aa(()=>{dn(m,c.value,!0),Us(m)})}p=!0})}function Sn(t){return t.__attributes??={[Hs]:t.nodeName.includes("-"),[Ws]:t.namespaceURI===ai}}var Ta=new Map;function Gs(t){var e=t.getAttribute("is")||t.nodeName,r=Ta.get(e);if(r)return r;Ta.set(e,r=[]);for(var n,a=t,o=Element.prototype;o!==a;){n=Co(a);for(var i in n)n[i].set&&r.push(i);a=rs(a)}return r}function Ie(t,e,r=e){var n=new WeakSet;ra(t,"input",async a=>{var o=a?t.defaultValue:t.value;if(o=Dn(t)?Cn(o):o,r(o),Le!==null&&n.add(Le),await Li(),o!==(o=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),jr(e)==null&&t.value&&(r(Dn(t)?Cn(t.value):t.value),Le!==null&&n.add(Le)),sa(()=>{var a=e();if(t===document.activeElement){var o=ln??Le;if(n.has(o))return}Dn(t)&&a===Cn(t.value)||t.type==="date"&&!a&&!t.value||a!==t.value&&(t.value=a??"")})}function dl(t,e,r=e){ra(t,"change",n=>{var a=n?t.defaultChecked:t.checked;r(a)}),jr(e)==null&&r(t.checked),sa(()=>{var n=e();t.checked=!!n})}function Dn(t){var e=t.type;return e==="number"||e==="range"}function Cn(t){return t===""?null:+t}let an=!1;function vl(t){var e=an;try{return an=!1,[t(),an]}finally{an=e}}const fl={get(t,e){if(!t.exclude.includes(e))return t.props[e]},set(t,e){return!1},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function fe(t,e,r){return new Proxy({props:t,exclude:e},fl)}const hl={get(t,e){let r=t.props.length;for(;r--;){let n=t.props[r];if(zr(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(t,e,r){let n=t.props.length;for(;n--;){let a=t.props[n];zr(a)&&(a=a());const o=Xt(a,e);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let n=t.props[r];if(zr(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const a=Xt(n,e);return a&&!a.configurable&&(a.configurable=!0),a}}},has(t,e){if(e===fr||e===ss)return!1;for(let r of t.props)if(zr(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(zr(r)&&(r=r()),!!r){for(const n in r)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(r))e.includes(n)||e.push(n)}return e}};function he(...t){return new Proxy({props:t},hl)}function Oe(t,e,r,n){var a=!Rr||(r&Xo)!==0,o=(r&ei)!==0,i=(r&ti)!==0,l=n,c=!0,v=()=>(c&&(c=!1,l=i?jr(n):n),l),f;if(o){var p=fr in t||ss in t;f=Xt(t,e)?.set??(p&&e in t?x=>t[e]=x:void 0)}var m,g=!1;o?[m,g]=vl(()=>t[e]):m=t[e],m===void 0&&n!==void 0&&(m=v(),f&&(a&&Wo(),f(m)));var y;if(a?y=()=>{var x=t[e];return x===void 0?v():(c=!0,x)}:y=()=>{var x=t[e];return x!==void 0&&(l=void 0),x===void 0?l:x},a&&(r&Fo)===0)return y;if(f){var E=t.$$legacy;return(function(x,$){return arguments.length>0?((!a||!$||E||g)&&f($?y():x),x):y()})}var w=!1,A=((r&Zo)!==0?gn:ea)(()=>(w=!1,y()));o&&s(A);var T=De;return(function(x,$){if(arguments.length>0){const _=$?s(A):a&&o?Re(x):x;return b(A,_),w=!0,l!==void 0&&(l=_),x}return xr&&w||(T.f&wr)!==0?A.v:s(A)})}function Qs(t){Je===null&&os(),Rr&&Je.l!==null?ml(Je).m.push(t):or(()=>{const e=jr(t);if(typeof e=="function")return e})}function pl(t){Je===null&&os(),Qs(()=>()=>jr(t))}function ml(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const gl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(gl);const _l="modulepreload",bl=function(t){return"/"+t},Na={},yl=function(e,r,n){let a=Promise.resolve();if(r&&r.length>0){let v=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var i=v;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=v(r.map(f=>{if(f=bl(f),f in Na)return;Na[f]=!0;const p=f.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${m}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":_l,p||(g.as="script"),g.crossOrigin="",g.href=f,c&&g.setAttribute("nonce",c),document.head.appendChild(g),p)return new Promise((y,E)=>{g.addEventListener("load",y),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return e().catch(o)})};class wl extends Map{#e=new Map;#r=O(0);#o=O(0);#d=Gt||-1;constructor(e){if(super(),e){for(var[r,n]of e)super.set(r,n);this.#o.v=super.size}}#u(e){return Gt===this.#d?O(e):rr(e)}has(e){var r=this.#e,n=r.get(e);if(n===void 0){var a=super.get(e);if(a!==void 0)n=this.#u(0),r.set(e,n);else return s(this.#r),!1}return s(n),!0}forEach(e,r){this.#i(),super.forEach(e,r)}get(e){var r=this.#e,n=r.get(e);if(n===void 0){var a=super.get(e);if(a!==void 0)n=this.#u(0),r.set(e,n);else{s(this.#r);return}}return s(n),super.get(e)}set(e,r){var n=this.#e,a=n.get(e),o=super.get(e),i=super.set(e,r),l=this.#r;if(a===void 0)a=this.#u(0),n.set(e,a),b(this.#o,super.size),Ot(l);else if(o!==r){Ot(a);var c=l.reactions===null?null:new Set(l.reactions),v=c===null||!a.reactions?.every(f=>c.has(f));v&&Ot(l)}return i}delete(e){var r=this.#e,n=r.get(e),a=super.delete(e);return n!==void 0&&(r.delete(e),b(this.#o,super.size),b(n,-1),Ot(this.#r)),a}clear(){if(super.size!==0){super.clear();var e=this.#e;b(this.#o,0);for(var r of e.values())b(r,-1);Ot(this.#r),e.clear()}}#i(){s(this.#r);var e=this.#e;if(this.#o.v!==e.size){for(var r of super.keys())if(!e.has(r)){var n=this.#u(0);e.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#i(),super.values()}entries(){return this.#i(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#o),super.size}}class Sl{#e;#r;constructor(e,r){this.#e=e,this.#r=Fn(r)}get current(){return this.#r(),this.#e()}}const xl=/\(.+\)/,$l=new Set(["all","print","screen","and","or","not","only"]);class Pl extends Sl{constructor(e,r){let n=xl.test(e)||e.split(/[\s,]+/).some(o=>$l.has(o.trim()))?e:`(${e})`;const a=window.matchMedia(n);super(()=>a.matches,o=>zn(a,"change",o))}}const El=typeof window<"u"?window:void 0;function Al(t){let e=t.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class kl{#e;#r;constructor(e={}){const{window:r=El,document:n=r?.document}=e;r!==void 0&&(this.#e=n,this.#r=Fn(a=>{const o=zn(r,"focusin",a),i=zn(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?Al(this.#e):null}}new kl;function Tl(t){return typeof t=="function"}function Nl(t,e){if(Tl(t)){const n=t();return n===void 0?e:n}return t===void 0?e:t}function Dl(t,e){let r=O(null);const n=Q(()=>Nl(e,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const c=new Promise((v,f)=>{i=v,l=f});b(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);b(r,null);try{i.resolve(await t.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),b(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Cl(t,e,r){if(!e||!r||!t.length)return[];const n=new Date(e),a=new Date(r),o=t.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return o.length?er(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function it(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(e){return console.warn("[ProductsStore] Erreur parsing JSON:",e),null}}function pr(t){return t?.length?t.filter(e=>e.quantity!=null&&e.unit).map(e=>({q:typeof e.quantity=="number"?e.quantity:parseFloat(e.quantity),u:e.unit})).filter(e=>!isNaN(e.q)):[]}function er(t){if(!t?.length)return[];const e=new Map;return t.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=e.get(r.u)||0;e.set(r.u,n+r.q)}),Array.from(e.entries()).map(([r,n])=>({q:n,u:r}))}function mr(t,e){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!e?.length){const l=t.map(c=>dr(c.q.toString(),c.u)).join(" et ");return{numeric:t,display:l}}const r=new Map,n=new Map;t.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),e.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,c)=>{const v=n.get(c)||0,f=l-v;f>0&&(a.push({q:f,u:c}),o.push(dr(f.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function dt(t){return t?.length?t.map(e=>dr(e.q.toString(),e.u)).join(" et "):"-"}function dr(t,e){const r=parseFloat(t);if(isNaN(r))return`${t} ${e}`;if((e==="gr."||e==="ml")&&r>=1e3){const n=r/1e3,a=e==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(e)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${e}`}return`${r} ${e}`}function la(t){if(!t?.length)return[];const e=new Map;return t.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=e.get(n)||0;e.set(n,a+r)}}),Array.from(e.entries()).map(([r,n])=>({q:n,u:r}))}function Ml(t,e,r){if(!t)return 0;const n=typeof e=="string"?new Date(e):e,a=typeof r=="string"?new Date(r):r;return Object.entries(t).filter(([o])=>{const i=new Date(o);return i>=n&&i<=a}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function Il(t){return t?Object.values(t).some(e=>e.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Ol(t){return t?Object.entries(t).map(([e,r])=>({dateTimeService:e,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Rl(t){if(!t)return[];const e=[];return Object.entries(t).forEach(([r,n])=>{n.recipes?.forEach(a=>{e.push({...a,date:r,dateTimeService:r})})}),e}function ca(t){if(!t)return[];const e=Object.values(t).flatMap(r=>r.totalConsolidated);return la(e)}function ql(t,e,r=""){if(t.status==="cancelled")return!1;const n=t.deliveryDate||t.$createdAt;return!n||n>e||r&&t.$createdAt<r?!1:t.status==="delivered"||t.status==="pending"||t.status==="ordered"&&n<=e}function Mn(t,e){let r=[],n="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(r=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],n=t.stockParsed.dateTime);const a=[];if(t.purchases)for(const c of t.purchases)ql(c,e,n)&&a.push({q:c.quantity,u:c.unit});const o=jl(t,e),i=[...r,...a],l=la(i);return Ll(l,o)}function jl(t,e){if(!t.byDate)return[];const r=[];for(const[n,a]of Object.entries(t.byDate))if(n<=e){const i=a.totalConsolidated;i&&r.push(...i)}return la(r)}function Ll(t,e){const r=new Map,n=new Map;t.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),e.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const a=[],o=new Set([...r.keys(),...n.keys()]);for(const i of o){const l=r.get(i)||0,c=n.get(i)||0,v=l-c;Math.abs(v)>.001&&a.push({q:v,u:i})}return a}function In(t){if(!t?.length)return"Équilibré";const e=t.filter(n=>n.q>0),r=t.filter(n=>n.q<0);if(e.length>0&&r.length>0){const n=e.map(o=>dr(o.q.toString(),o.u)).join(" et "),a=r.map(o=>dr(Math.abs(o.q).toString(),o.u)).join(" et ");return`${n} disponibles, ${a} manquant${r.length>1?"s":""}`}else return e.length>0?e.map(n=>"+"+dr(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>dr(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function Da(t){return{...t,products:t.products?.map(e=>typeof e=="string"?e:e.$id)||[],mainId:t.mainId}}function Bl(t){const e=er(pr(t.purchases??[])),r=[],{numeric:n,display:a}=mr(r,e),o=it(t.stockReel)??null,i=dt(e),l=t.store?it(t.store):null,c=o?`${o.quantity} ${o.unit}`:i;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:l,stockParsed:o,totalNeededArray:r,totalPurchasesArray:e,missingQuantityArray:n,stockOrTotalPurchases:c,displayTotalNeeded:"-",displayTotalPurchases:i,displayMissingQuantity:a,totalNeededOverrideParsed:it(t.totalNeededOverride),displayTotalOverride:(()=>{const v=it(t.totalNeededOverride);return v?dt([v.totalOverride]):""})()}}function sn(t,e){const r=t.purchases??e.purchases,n=er(pr(r??[])),a=dt(n),{numeric:o,display:i}=mr(e.totalNeededArray,n),l=t.stockReel??e.stockReel,c=l?it(l):e.stockParsed,v=t.store??e.store,f=v?it(v):e.storeInfo,p=c?`${c.quantity} ${c.unit}`:a;return t.purchases===void 0&&e.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${e.purchases.length} purchases pour ${e.productName}`),{...e,$updatedAt:t.$updatedAt,productName:t.productName??e.productName,isSynced:t.isSynced??e.isSynced,mainId:t.mainId??e.mainId,status:t.status??e.status,who:t.who??e.who,store:v,stockReel:l,purchases:r,previousNames:t.previousNames??e.previousNames,isMerged:t.isMerged??e.isMerged,mergedFrom:t.mergedFrom??e.mergedFrom,mergeDate:t.mergeDate??e.mergeDate,mergeReason:t.mergeReason??e.mergeReason,mergedInto:t.mergedInto??e.mergedInto,totalNeededOverride:t.totalNeededOverride??e.totalNeededOverride,storeInfo:f,stockParsed:c,totalPurchasesArray:n,missingQuantityArray:o,stockOrTotalPurchases:p,displayTotalPurchases:a,displayMissingQuantity:i,totalNeededOverrideParsed:it(t.totalNeededOverride??e.totalNeededOverride),displayTotalOverride:(()=>{const m=it(t.totalNeededOverride??e.totalNeededOverride);return m?dt([m.totalOverride]):""})()}}class zl{#e=O(Re([]));MAX_TOASTS=3;get toasts(){return s(this.#e).sort((e,r)=>r.timestamp-e.timestamp)}create(e){const r=e.id||crypto.randomUUID(),n={id:r,state:e.state,message:e.message,timestamp:Date.now(),source:e.source||"user",timeoutId:void 0,details:e.details};return this.#r(n),r}update(e,r){const n=s(this.#e).findIndex(o=>o.id===e);if(n===-1)return;const a=s(this.#e)[n];a.timeoutId&&clearTimeout(a.timeoutId),s(this.#e)[n]={...a,state:r.state||a.state,message:r.message||a.message,source:r.source||a.source},this.#o(s(this.#e)[n])}async track(e,r){const n=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const a=await e;return this.update(n,{state:"success",message:r.success||"Opération réussie"}),a}catch(a){throw this.update(n,{state:"error",message:r.error||"Erreur lors de l'opération"}),a}}dismiss(e){const r=s(this.#e).findIndex(a=>a.id===e);if(r===-1)return;const n=s(this.#e)[r];n.timeoutId&&clearTimeout(n.timeoutId),s(this.#e).splice(r,1)}dismissAll(){s(this.#e).forEach(e=>{e.timeoutId&&clearTimeout(e.timeoutId)}),b(this.#e,[],!0)}#r(e){if(e.source==="user"){const r=s(this.#e).findIndex(n=>n.source==="user");r>=0?s(this.#e)[r]=e:s(this.#e).push(e)}else{const r=s(this.#e).filter(n=>n.source!=="user");if(r.length>=2){const n=r[0];this.dismiss(n.id)}s(this.#e).push(e)}s(this.#e).length>this.MAX_TOASTS&&s(this.#e).splice(0,s(this.#e).length-this.MAX_TOASTS),this.#o(e)}#o(e){if(e.state!=="success"&&e.state!=="info")return;const r=e.source==="realtime-other"?24e3:23e3;e.timeoutId=setTimeout(()=>{this.dismiss(e.id)},r)}success(e,r){return this.create({state:"success",message:e,details:r})}error(e,r){return this.create({state:"error",message:e,details:r})}info(e,r){return this.create({state:"info",message:e,source:r?.source||"system",details:r?.details})}loading(e,r){return this.create({state:"loading",message:e,details:r})}}const wt=new zl;function xn(t){return[...t].sort()}function Ul(t){return new Date(t)<new Date}function Vs(t){return t.length===0?null:xn(t)[0]}function ua(t){return t.length===0?null:xn(t).pop()}function Hl(t){if(t.length===0)return null;const e=new Date;return e.setHours(0,0,0,0),xn(t).find(r=>new Date(r)>=e)||null}function Wl(t){if(t.length===0)return null;const e=xn(t);return{start:Ul(e[0])?new Date().toISOString().slice(0,19)+"Z":e[0],end:e[e.length-1]}}function Ks(t){const e=Hl(t),r=ua(t);return!e||!r?null:{start:e,end:r}}function Gl(t){const e=Vs(t),r=ua(t);return!e||!r?null:{start:e,end:r}}function Ql(t,e){const r=Gl(e);return r?t.start===r.start&&t.end===r.end:!1}function Vl(t,e){const r=Ks(e);return r?t.start===r.start&&t.end===r.end:!1}function Kl(t){return new Date(t).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function On(t){const r=new Date(t).getHours();return r===12?"sun":r===20?"moon":r===8?"cloud":null}function Yl(t,e,r,n){if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(t):n?n.value:e.get(t)}class C{constructor(e,r,n){this.method=e,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}C.equal=(t,e)=>new C("equal",t,e).toString();C.notEqual=(t,e)=>new C("notEqual",t,e).toString();C.lessThan=(t,e)=>new C("lessThan",t,e).toString();C.lessThanEqual=(t,e)=>new C("lessThanEqual",t,e).toString();C.greaterThan=(t,e)=>new C("greaterThan",t,e).toString();C.greaterThanEqual=(t,e)=>new C("greaterThanEqual",t,e).toString();C.isNull=t=>new C("isNull",t).toString();C.isNotNull=t=>new C("isNotNull",t).toString();C.between=(t,e,r)=>new C("between",t,[e,r]).toString();C.startsWith=(t,e)=>new C("startsWith",t,e).toString();C.endsWith=(t,e)=>new C("endsWith",t,e).toString();C.select=t=>new C("select",void 0,t).toString();C.search=(t,e)=>new C("search",t,e).toString();C.orderDesc=t=>new C("orderDesc",t).toString();C.orderAsc=t=>new C("orderAsc",t).toString();C.orderRandom=()=>new C("orderRandom").toString();C.cursorAfter=t=>new C("cursorAfter",void 0,t).toString();C.cursorBefore=t=>new C("cursorBefore",void 0,t).toString();C.limit=t=>new C("limit",void 0,t).toString();C.offset=t=>new C("offset",void 0,t).toString();C.contains=(t,e)=>new C("contains",t,e).toString();C.notContains=(t,e)=>new C("notContains",t,e).toString();C.notSearch=(t,e)=>new C("notSearch",t,e).toString();C.notBetween=(t,e,r)=>new C("notBetween",t,[e,r]).toString();C.notStartsWith=(t,e)=>new C("notStartsWith",t,e).toString();C.notEndsWith=(t,e)=>new C("notEndsWith",t,e).toString();C.createdBefore=t=>C.lessThan("$createdAt",t);C.createdAfter=t=>C.greaterThan("$createdAt",t);C.createdBetween=(t,e)=>C.between("$createdAt",t,e);C.updatedBefore=t=>C.lessThan("$updatedAt",t);C.updatedAfter=t=>C.greaterThan("$updatedAt",t);C.updatedBetween=(t,e)=>C.between("$updatedAt",t,e);C.or=t=>new C("or",void 0,t.map(e=>JSON.parse(e))).toString();C.and=t=>new C("and",void 0,t.map(e=>JSON.parse(e))).toString();C.distanceEqual=(t,e,r,n=!0)=>new C("distanceEqual",t,[[e,r,n]]).toString();C.distanceNotEqual=(t,e,r,n=!0)=>new C("distanceNotEqual",t,[[e,r,n]]).toString();C.distanceGreaterThan=(t,e,r,n=!0)=>new C("distanceGreaterThan",t,[[e,r,n]]).toString();C.distanceLessThan=(t,e,r,n=!0)=>new C("distanceLessThan",t,[[e,r,n]]).toString();C.intersects=(t,e)=>new C("intersects",t,[e]).toString();C.notIntersects=(t,e)=>new C("notIntersects",t,[e]).toString();C.crosses=(t,e)=>new C("crosses",t,[e]).toString();C.notCrosses=(t,e)=>new C("notCrosses",t,[e]).toString();C.overlaps=(t,e)=>new C("overlaps",t,[e]).toString();C.notOverlaps=(t,e)=>new C("notOverlaps",t,[e]).toString();C.touches=(t,e)=>new C("touches",t,[e]).toString();C.notTouches=(t,e)=>new C("notTouches",t,[e]).toString();var Ca;(function(t){t[t.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",t[t.POLICY_VIOLATION=1008]="POLICY_VIOLATION",t[t.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(Ca||(Ca={}));var Ys,Js;class Mr{static custom(e){return e}static unique(e=7){const r=Yl(Mr,Ys,"m",Js).call(Mr);let n="";for(let a=0;a<e;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}Ys=Mr,Js=function(){const e=new Date,r=Math.floor(e.getTime()/1e3),n=e.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Ma;(function(t){t.Equal="equal",t.NotEqual="notEqual",t.GreaterThan="greaterThan",t.GreaterThanEqual="greaterThanEqual",t.LessThan="lessThan",t.LessThanEqual="lessThanEqual",t.Contains="contains",t.IsNull="isNull",t.IsNotNull="isNotNull"})(Ma||(Ma={}));var Ia;(function(t){t.Totp="totp"})(Ia||(Ia={}));var Oa;(function(t){t.Email="email",t.Phone="phone",t.Totp="totp",t.Recoverycode="recoverycode"})(Oa||(Oa={}));var Ra;(function(t){t.Amazon="amazon",t.Apple="apple",t.Auth0="auth0",t.Authentik="authentik",t.Autodesk="autodesk",t.Bitbucket="bitbucket",t.Bitly="bitly",t.Box="box",t.Dailymotion="dailymotion",t.Discord="discord",t.Disqus="disqus",t.Dropbox="dropbox",t.Etsy="etsy",t.Facebook="facebook",t.Figma="figma",t.Github="github",t.Gitlab="gitlab",t.Google="google",t.Linkedin="linkedin",t.Microsoft="microsoft",t.Notion="notion",t.Oidc="oidc",t.Okta="okta",t.Paypal="paypal",t.PaypalSandbox="paypalSandbox",t.Podio="podio",t.Salesforce="salesforce",t.Slack="slack",t.Spotify="spotify",t.Stripe="stripe",t.Tradeshift="tradeshift",t.TradeshiftBox="tradeshiftBox",t.Twitch="twitch",t.Wordpress="wordpress",t.Yahoo="yahoo",t.Yammer="yammer",t.Yandex="yandex",t.Zoho="zoho",t.Zoom="zoom",t.Mock="mock"})(Ra||(Ra={}));var qa;(function(t){t.AvantBrowser="aa",t.AndroidWebViewBeta="an",t.GoogleChrome="ch",t.GoogleChromeIOS="ci",t.GoogleChromeMobile="cm",t.Chromium="cr",t.MozillaFirefox="ff",t.Safari="sf",t.MobileSafari="mf",t.MicrosoftEdge="ps",t.MicrosoftEdgeIOS="oi",t.OperaMini="om",t.Opera="op",t.OperaNext="on"})(qa||(qa={}));var ja;(function(t){t.AmericanExpress="amex",t.Argencard="argencard",t.Cabal="cabal",t.Cencosud="cencosud",t.DinersClub="diners",t.Discover="discover",t.Elo="elo",t.Hipercard="hipercard",t.JCB="jcb",t.Mastercard="mastercard",t.Naranja="naranja",t.TarjetaShopping="targeta-shopping",t.UnionPay="unionpay",t.Visa="visa",t.MIR="mir",t.Maestro="maestro",t.Rupay="rupay"})(ja||(ja={}));var La;(function(t){t.Afghanistan="af",t.Angola="ao",t.Albania="al",t.Andorra="ad",t.UnitedArabEmirates="ae",t.Argentina="ar",t.Armenia="am",t.AntiguaAndBarbuda="ag",t.Australia="au",t.Austria="at",t.Azerbaijan="az",t.Burundi="bi",t.Belgium="be",t.Benin="bj",t.BurkinaFaso="bf",t.Bangladesh="bd",t.Bulgaria="bg",t.Bahrain="bh",t.Bahamas="bs",t.BosniaAndHerzegovina="ba",t.Belarus="by",t.Belize="bz",t.Bolivia="bo",t.Brazil="br",t.Barbados="bb",t.BruneiDarussalam="bn",t.Bhutan="bt",t.Botswana="bw",t.CentralAfricanRepublic="cf",t.Canada="ca",t.Switzerland="ch",t.Chile="cl",t.China="cn",t.CoteDIvoire="ci",t.Cameroon="cm",t.DemocraticRepublicOfTheCongo="cd",t.RepublicOfTheCongo="cg",t.Colombia="co",t.Comoros="km",t.CapeVerde="cv",t.CostaRica="cr",t.Cuba="cu",t.Cyprus="cy",t.CzechRepublic="cz",t.Germany="de",t.Djibouti="dj",t.Dominica="dm",t.Denmark="dk",t.DominicanRepublic="do",t.Algeria="dz",t.Ecuador="ec",t.Egypt="eg",t.Eritrea="er",t.Spain="es",t.Estonia="ee",t.Ethiopia="et",t.Finland="fi",t.Fiji="fj",t.France="fr",t.MicronesiaFederatedStatesOf="fm",t.Gabon="ga",t.UnitedKingdom="gb",t.Georgia="ge",t.Ghana="gh",t.Guinea="gn",t.Gambia="gm",t.GuineaBissau="gw",t.EquatorialGuinea="gq",t.Greece="gr",t.Grenada="gd",t.Guatemala="gt",t.Guyana="gy",t.Honduras="hn",t.Croatia="hr",t.Haiti="ht",t.Hungary="hu",t.Indonesia="id",t.India="in",t.Ireland="ie",t.IranIslamicRepublicOf="ir",t.Iraq="iq",t.Iceland="is",t.Israel="il",t.Italy="it",t.Jamaica="jm",t.Jordan="jo",t.Japan="jp",t.Kazakhstan="kz",t.Kenya="ke",t.Kyrgyzstan="kg",t.Cambodia="kh",t.Kiribati="ki",t.SaintKittsAndNevis="kn",t.SouthKorea="kr",t.Kuwait="kw",t.LaoPeopleSDemocraticRepublic="la",t.Lebanon="lb",t.Liberia="lr",t.Libya="ly",t.SaintLucia="lc",t.Liechtenstein="li",t.SriLanka="lk",t.Lesotho="ls",t.Lithuania="lt",t.Luxembourg="lu",t.Latvia="lv",t.Morocco="ma",t.Monaco="mc",t.Moldova="md",t.Madagascar="mg",t.Maldives="mv",t.Mexico="mx",t.MarshallIslands="mh",t.NorthMacedonia="mk",t.Mali="ml",t.Malta="mt",t.Myanmar="mm",t.Montenegro="me",t.Mongolia="mn",t.Mozambique="mz",t.Mauritania="mr",t.Mauritius="mu",t.Malawi="mw",t.Malaysia="my",t.Namibia="na",t.Niger="ne",t.Nigeria="ng",t.Nicaragua="ni",t.Netherlands="nl",t.Norway="no",t.Nepal="np",t.Nauru="nr",t.NewZealand="nz",t.Oman="om",t.Pakistan="pk",t.Panama="pa",t.Peru="pe",t.Philippines="ph",t.Palau="pw",t.PapuaNewGuinea="pg",t.Poland="pl",t.FrenchPolynesia="pf",t.NorthKorea="kp",t.Portugal="pt",t.Paraguay="py",t.Qatar="qa",t.Romania="ro",t.Russia="ru",t.Rwanda="rw",t.SaudiArabia="sa",t.Sudan="sd",t.Senegal="sn",t.Singapore="sg",t.SolomonIslands="sb",t.SierraLeone="sl",t.ElSalvador="sv",t.SanMarino="sm",t.Somalia="so",t.Serbia="rs",t.SouthSudan="ss",t.SaoTomeAndPrincipe="st",t.Suriname="sr",t.Slovakia="sk",t.Slovenia="si",t.Sweden="se",t.Eswatini="sz",t.Seychelles="sc",t.Syria="sy",t.Chad="td",t.Togo="tg",t.Thailand="th",t.Tajikistan="tj",t.Turkmenistan="tm",t.TimorLeste="tl",t.Tonga="to",t.TrinidadAndTobago="tt",t.Tunisia="tn",t.Turkey="tr",t.Tuvalu="tv",t.Tanzania="tz",t.Uganda="ug",t.Ukraine="ua",t.Uruguay="uy",t.UnitedStates="us",t.Uzbekistan="uz",t.VaticanCity="va",t.SaintVincentAndTheGrenadines="vc",t.Venezuela="ve",t.Vietnam="vn",t.Vanuatu="vu",t.Samoa="ws",t.Yemen="ye",t.SouthAfrica="za",t.Zambia="zm",t.Zimbabwe="zw"})(La||(La={}));var Ba;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t.OPTIONS="OPTIONS",t.HEAD="HEAD"})(Ba||(Ba={}));var za;(function(t){t.Center="center",t.Topleft="top-left",t.Top="top",t.Topright="top-right",t.Left="left",t.Right="right",t.Bottomleft="bottom-left",t.Bottom="bottom",t.Bottomright="bottom-right"})(za||(za={}));var Ua;(function(t){t.Jpg="jpg",t.Jpeg="jpeg",t.Png="png",t.Webp="webp",t.Heic="heic",t.Avif="avif",t.Gif="gif"})(Ua||(Ua={}));var Ha;(function(t){t.Http="http",t.Schedule="schedule",t.Event="event"})(Ha||(Ha={}));var Wa;(function(t){t.Waiting="waiting",t.Processing="processing",t.Completed="completed",t.Failed="failed",t.Scheduled="scheduled"})(Wa||(Wa={}));function Zs(t,e){return{$id:t.$id,mainId:t.mainId,productHugoUuid:t.productHugoUuid,productName:t.productName,...e}}async function kt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getDatabases(),e=window.AppwriteClient.getConfig();return{databases:t,config:e}}async function Jl(t){const n=await(await window.AppwriteClient.getAccount()).get();return{...t,updatedBy:n.name}}function Er(){return localStorage.getItem("appwrite-user-name")||""}async function Zl(t,e,r=100){try{const{databases:n,config:a}=await kt(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[C.greaterThan("$updatedAt",e),C.equal("mainId",t),C.limit(r),C.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function Xs(t,e){const{lastSync:r,limit:n=100}=e;try{const{databases:a,config:o}=await kt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[C.equal("mainId",t),C.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),C.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[C.greaterThan("$updatedAt",r),C.equal("mainId",t),C.limit(n),C.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${t}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function $r(t,e,r=!0){const{databases:n,config:a}=await kt();return r&&(e.updatedBy=Er()),await n.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,t,e)}async function Ut(t,e,r){try{const n=r(t);if(!n)throw new Error(`Produit ${t} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${t} sur Appwrite...`);const a=Zs(n,e),o=await Jl(a),{databases:i,config:l}=await kt(),c=await i.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,t,o);return console.log(`[Appwrite Interactions] Produit ${t} créé avec succès`),c}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${t}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function Fs(t,e){if(!t)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=e?JSON.stringify(e):null,n=await $r(t,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${t}, nouvelle valeur:`,n.store),n}async function eo(t,e){return $r(t,{who:e})}async function Un(t,e){return $r(t,{stockReel:e})}async function da(t,e,r=!1){if(!t)throw new Error("ID du produit requis pour la mise à jour de l'override");const n=JSON.stringify(e),a=await $r(t,{totalNeededOverride:n},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${t}:`,e),a}async function to(t,e=!0){if(!t)throw new Error("ID du produit requis pour la suppression de l'override");const r=await $r(t,{totalNeededOverride:null},e);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${t}`),r}async function ro(t,e,r){try{const n=r(t);if(!n)throw new Error(`Produit ${t} non trouvé localement pour mise à jour batch`);const a={};return e.stockReel!==void 0&&(a.stockReel=e.stockReel),e.who!==void 0&&(a.who=e.who),e.storeInfo!==void 0&&(a.store=JSON.stringify(e.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${t} déjà sync, update batch normal...`),await $r(t,a)):(console.log(`[Appwrite Interactions] Produit ${t} local, création batch avec upsert...`),await Ut(t,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${t}:`,n),n}}async function no(t){const{databases:e,config:r}=await kt(),n={...t,createdBy:Er()},a=await e.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Mr.unique(),n);return console.log("[Appwrite Interactions] Achat créé:",a),a}async function ao(t,e){try{const{databases:r,config:n}=await kt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,t),o={...e,products:e.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,t,o);return console.log(`[Appwrite Interactions] Achat ${t} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${t}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function so(t){try{const{databases:e,config:r}=await kt();await e.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,t),console.log(`[Appwrite Interactions] Achat ${t} supprimé`)}catch(e){console.error(`[Appwrite Interactions] Erreur suppression achat ${t}:`,e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function oo(t){if(!t?.length)return[];try{const{databases:e,config:r}=await kt(),n=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[C.equal("$id",t),C.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(e){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function io(t,e={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(g=>g.includes("products.")),v=i.some(g=>g.includes("purchases.")),f=i.some(g=>g.includes(".create")),p=i.some(g=>g.includes(".update")),m=i.some(g=>g.includes(".delete"));if(c){const g=l;g.updatedBy&&g.updatedBy!==Er()&&(f||p?wt.info(`${g.updatedBy} a modifié le produit "${g.productName}"`,"realtime-other"):m&&wt.info(`${g.updatedBy} a supprimé un produit`,"realtime-other")),f&&e.onProductCreate?e.onProductCreate(g):p&&e.onProductUpdate?e.onProductUpdate(g):m&&e.onProductDelete&&e.onProductDelete(g.$id)}else if(v){const g=l;if(g.createdBy&&g.createdBy!==Er()){const y=g.products?.[0]?.productName||"un produit";f&&g.who!==Er()?wt.info(`${g.who} a ajouté un achat pour ${y}`,"realtime-other"):p&&g.who!==Er()?wt.info(`${g.who} a modifié un achat pour ${y}`,"realtime-other"):m&&wt.info(`${g.who} a supprimé un achat pour ${y}`,"realtime-other")}f&&e.onPurchaseCreate?e.onPurchaseCreate(g):p&&e.onPurchaseUpdate?e.onPurchaseUpdate(g):m&&e.onPurchaseDelete&&e.onPurchaseDelete(g.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],t,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),e.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),e.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),e.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),e.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function lo(t){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${t}`);const{databases:e}=await kt(),r=window.AppwriteClient.getConfig(),n=await e.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,t);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(e){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${t}:`,e),null}}async function co(t,e,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${t}`);const{databases:a}=await kt(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,t,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:e,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${t}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function va(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:t};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${t.productIds.length} produits, type: ${t.updateType}`);const a=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(e){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,updatedCount:t.productIds.length,updateType:t.updateType,error:r,timestamp:new Date().toISOString()}}}async function uo(t,e,r,n){return va({productIds:t,products:e,updateType:"store",updateData:r,options:n})}async function vo(t,e,r,n="replace"){return va({productIds:t,products:e,updateType:"who",updateData:{names:r},options:{mode:n}})}async function fo(t,e,r,n={}){try{const{databases:a,config:o}=await kt(),c=await(await window.AppwriteClient.getAccount()).get(),v=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:t,productId:e,productIdType:typeof e,quantities:r,options:n});for(const f of r){const p={products:[e],mainId:t,quantity:f.q,unit:f.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},m=await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,Mr.unique(),p);v.push(m)}return console.log(`[Appwrite Interactions] ${v.length} validations rapides créées pour produit ${e}`),v}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const o=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const Xl=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:va,batchUpdateStore:uo,batchUpdateWho:vo,createMainDocument:co,createPurchase:no,createQuickValidationPurchases:fo,deletePurchase:so,enrichedProductToAppwriteProduct:Zs,loadMainEventData:lo,loadPurchasesListByIds:oo,loadUpdatedPurchases:Zl,removeTotalOverride:to,subscribeToRealtime:io,syncProductsWithPurchases:Xs,updateProduct:$r,updateProductBatch:ro,updateProductStock:Un,updateProductStore:Fs,updateProductWho:eo,updatePurchase:ao,updateTotalOverride:da,upsertProduct:Ut},Symbol.toStringTag,{value:"Module"}));async function Fl(t){let e;if(e=await fetch(`/evenements/${t}/metadata.json`),!e.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function Ga(t){const e=await fetch(`/evenements/${t}/ingredients_aw/index.json`);if(!e.ok)throw new Error(`Impossible de charger les données Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function ec(t,e){if(!t)return!0;try{return(await Fl(e)).hugoContentHash!==t}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function ho(t,e){const r=ca(t.byDate),n=er(pr([])),{numeric:a,display:o}=mr(r,n);return{$id:`${t.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:t.ingredientHugoUuid,productName:t.ingredientName,productType:t.ingType,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1,nbRecipes:t.nbRecipes,totalNeededRaw:t.totalNeededRaw,totalAssiettes:t.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:e,purchases:[],byDate:t.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:dt(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function tc(t,e){return t.map(r=>ho(r,e))}class rc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(e){this.dbName=`products-cache-${e}`}async open(){if(!this.db)return new Promise((e,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),e()},n.onupgradeneeded=a=>{const o=a.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),e(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();o.onsuccess=()=>{const i=o.result,l={lastSync:null,allDates:[],hugoContentHash:null};i.forEach(c=>{c.key===this.LAST_SYNC_KEY?l.lastSync=c.value:c.key===this.ALL_DATES_KEY?l.allDates=c.value||[]:c.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=c.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),e(l)},o.onerror=()=>r(o.error)})}async saveProducts(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=a.objectStore(this.PRODUCTS_STORE);o.clear(),e.forEach(i=>{o.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${e.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.METADATA_STORE,"readwrite"),o=a.objectStore(this.METADATA_STORE);o.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),o.put({key:this.ALL_DATES_KEY,value:e.allDates}),e.hugoContentHash!==void 0&&o.put({key:this.HUGO_HASH_KEY,value:e.hugoContentHash}),a.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},a.onerror=()=>n(a.error)})}async updateLastSync(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:e});i.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${e}`),r()},i.onerror=()=>n(i.error)})}async updateAllDates(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:e});i.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${e.length} dates`),r()},i.onerror=()=>n(i.error)})}async updateHugoContentHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:e});i.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${e}`),r()},i.onerror=()=>n(i.error)})}async updateLastHugoMenuUpdate(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:e});i.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(e);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(e);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),e()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function nc(t){const e=new rc(t);return await e.open(),e}function ac(t){return!!(t.isMerged||t.totalNeededOverride)}function sc(t,e){if(!t||t.length!==e.length)return!0;for(let r=0;r<t.length;r++){const n=t[r],a=e[r];if(n.q!==a.q||n.u!==a.u)return!0}return!1}async function oc(t,e){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},n=new Map;for(const[o,i]of t)n.set(i.productHugoUuid,o);const a=new Set;for(const o of e.ingredients){const i=o.productSemanticKey||`${e.mainGroup_id}_${o.ingredientHugoUuid}`;a.add(i);const l=n.get(o.ingredientHugoUuid),c=l?t.get(l):void 0;if(c){if(sc(c.totalNeededRaw,o.totalNeededRaw)){const f=ic(c,o);if(f&&r.overrideConflicts.push(f),c.isMerged){const p=c.displayTotalNeeded;Qa(c,o),r.mergedProductsUpdated.push({product:c,oldDisplayTotal:p,newDisplayTotal:c.displayTotalNeeded,currentOverride:c.totalNeededOverrideParsed,semanticKey:i})}else Qa(c,o);r.updated.push(i)}t.set(i,c)}else{r.added.push(o);const v=ho(o,e.mainGroup_id);t.set(v.$id,v)}}for(const[o,i]of t)a.has(o)||(r.removed.push(i),!ac(i)&&!i.purchases?.length&&!i.stockReel&&!i.who?.length&&t.delete(o));return r.overrideConflicts.length>0&&await lc(r.overrideConflicts),r.summary=uc(r),r}function ic(t,e){if(!t.totalNeededOverride||!t.totalNeededOverrideParsed)return null;const r=ca(e.byDate),n=dt(r),a=t.displayTotalNeeded;return a!==n?{product:t,oldDisplayTotal:a,newDisplayTotal:n,currentOverride:t.totalNeededOverrideParsed,semanticKey:t.$id}:null}async function lc(t){for(const e of t){const r={...e.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:e.oldDisplayTotal,newTotalDisplay:e.newDisplayTotal};JSON.stringify(r);try{await da(e.product.$id,r,!1)}catch(n){console.error(`Erreur lors de la mise à jour de l'override pour ${e.product.$id}:`,n)}}}function Qa(t,e){t.byDate=e.byDate,t.nbRecipes=e.nbRecipes,t.totalAssiettes=e.totalAssiettes,t.productType=e.ingType,t.pFrais=e.pFrais||!1,t.pSurgel=e.pSurgel||!1,cc(t)}function cc(t){t.totalNeededArray=ca(t.byDate),t.displayTotalNeeded=dt(t.totalNeededArray);const e=er(pr(t.purchases)),{numeric:r,display:n}=mr(t.totalNeededArray,e);t.totalPurchasesArray=e,t.missingQuantityArray=r,t.displayMissingQuantity=n,t.stockOrTotalPurchases=t.purchases.length>0?t.displayTotalPurchases:t.displayTotalNeeded}function uc(t){const e=[];if((t.added.length>0||t.updated.length>0||t.removed.length>0)&&e.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),t.added.length>0&&e.push(`${t.added.length} nouveau(x) ingrédient(s)`),t.updated.length>0&&e.push(` ${t.updated.length} ingrédient(s) mis à jour`),t.overrideConflicts.length>0&&e.push(`⚠️ ${t.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),t.mergedProductsUpdated.length>0&&e.push(`🔀 ${t.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),t.removed.length>0){const r=t.removed.filter(n=>n.purchases?.length||n.stockReel||n.who?.length).length;r>0?e.push(`⚠️ ${r} suppression(s) avec données conservées`):e.push(`${t.removed.length} ingrédient(s) supprimé(s)`)}return e.length>0?e.join(", "):"Aucune modification détectée"}class dc{isMobileQuery=new Pl("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return wt.toasts}get toast(){return wt}#e=O(Re({isOpen:!1,conflicts:[]}));get modalOverride(){return s(this.#e)}set modalOverride(e){b(this.#e,e,!0)}}const Ir=new dc,Va=1e3;class vc{#e=new wl;#r=O(null);#o=O(null);#d=O(!1);#u=O(!1);#i=O(null);#c=O(!1);#l=O(!1);#a=O(null);#v=O(null);#s=O(Re([]));#f=O(Re({start:null,end:null}));get dateRange(){return s(this.#f)}set dateRange(e){b(this.#f,e,!0)}#h=Q(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDateInRange(){return s(this.#h)}set hasSingleDateInRange(e){b(this.#h,e)}#m=Q(()=>s(this.#s).length===1);get hasSingleDateEvent(){return s(this.#m)}set hasSingleDateEvent(e){b(this.#m,e)}#g=Q(()=>{if(s(this.#s).length===0)return!0;const e=new Date(this.lastAvailableDate);return e.setHours(23,59,59,999),e<new Date});get isEventPassed(){return s(this.#g)}set isEventPassed(e){b(this.#g,e)}#n=null;#_=null;#b=O(!1);#p=null;#y=O(!1);#w=O();#x=O(Re([]));get hasPendingConflicts(){return s(this.#x).length>0}get pendingConflicts(){return s(this.#x)}#t=O(Re({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get currentMainId(){return s(this.#r)}get loading(){return s(this.#u)}get error(){return s(this.#i)}get lastSync(){return s(this.#a)}get syncing(){return s(this.#c)}get availableDates(){return s(this.#s)}setDateRange(e,r){if(!e&&!r){this.dateRange={start:null,end:null};return}if(!e||!r){this.dateRange={start:e||r,end:e||r};return}const n=new Date(e)<=new Date(r)?e:r,a=new Date(e)>=new Date(r)?e:r;this.dateRange={start:n,end:a}}isFullRange(){return Ql(this.dateRange,s(this.#s))}initializeDateRange(){const e=Wl(s(this.#s));e&&(this.dateRange=e),console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}selectUpcomingDates(){const e=Ks(s(this.#s));e&&(this.dateRange=e)}isUpcomingRange(){return Vl(this.dateRange,s(this.#s))}get firstAvailableDate(){return Vs(s(this.#s))}get lastAvailableDate(){return ua(s(this.#s))}get realtimeConnected(){return s(this.#l)}#E=Q(()=>{const e=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${e.length} products`),e});get enrichedProducts(){return s(this.#E)}set enrichedProducts(e){b(this.#E,e)}#A=Q(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const e=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[a,o]of this.#e){if(!o.byDate||!this.#Z(o))continue;Object.keys(o.byDate).some(c=>{const v=new Date(c);return v>=e&&v<=r})&&n.set(a,o)}return n});get filteredProductsMap(){return s(this.#A)}set filteredProductsMap(e){b(this.#A,e)}#q(){console.log("[Store] ⚡ Single date mode - optimized calculation");const e=new Map,r=this.dateRange.start;for(const[n,a]of this.#e){if(!a.byDate?.[r])continue;const o=a.byDate[r],i=[r],l=new Map;o.recipes&&o.recipes.length>0&&l.set(r,o.recipes);const c=Mn(a,r),v=c.filter(p=>p.q>0),f=c.filter(p=>p.q<0).map(p=>({q:Math.abs(p.q),u:p.u}));e.set(n,{quantities:o.totalConsolidated||[],formattedQuantities:dt(o.totalConsolidated||[]),nbRecipes:o.recipes?.length||0,totalAssiettes:o.totalAssiettes||0,stockResult:c,availableQuantities:v,missingQuantities:f,formattedAvailableQuantities:In(c),hasAvailable:v.length>0,hasMissing:f.length>0,concernedDates:i,recipesByDate:l})}return e}#k=Q(()=>{if(console.log("[Store] Calcul unifié des stats par produit"),this.hasSingleDateInRange)return this.#q();const e=new Map;if(this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using precomputed data",this.dateRange);for(const[n,a]of this.#e){const o=Mn(a,this.dateRange.end),i=o.filter(p=>p.q>0),l=o.filter(p=>p.q<0).map(p=>({q:Math.abs(p.q),u:p.u})),c=a.byDate?Object.keys(a.byDate).sort():[],v=new Map;let f=0;if(a.byDate)for(const[p,m]of Object.entries(a.byDate))m.recipes&&m.recipes.length>0&&(v.set(p,m.recipes),f+=m.recipes.length);e.set(n,{quantities:a.totalNeededArray,formattedQuantities:dt(a.totalNeededArray),nbRecipes:a.nbRecipes||0,totalAssiettes:a.totalAssiettes||0,stockResult:o,availableQuantities:i,missingQuantities:l,formattedAvailableQuantities:In(o),hasAvailable:i.length>0,hasMissing:l.length>0,concernedDates:c,recipesByDate:v})}return e}for(const[n,a]of this.filteredProductsMap){if(!a.byDate)continue;const o=Ol(a.byDate),i=Cl(o,this.dateRange.start,this.dateRange.end),l=i.length>0?dt(i):"",c=Ml(a.byDate,this.dateRange.start,this.dateRange.end),v=Object.keys(a.byDate).filter(E=>{const w=new Date(E),A=new Date(this.dateRange.start),T=new Date(this.dateRange.end);return w>=A&&w<=T}).sort(),f=new Map;let p=0;v.forEach(E=>{const w=a.byDate[E]?.recipes||[];w.length>0&&(f.set(E,w),p+=w.length)});const m=Mn(a,this.dateRange.end),g=m.filter(E=>E.q>0),y=m.filter(E=>E.q<0).map(E=>({q:Math.abs(E.q),u:E.u}));e.set(n,{quantities:i,formattedQuantities:l,nbRecipes:p,totalAssiettes:c,stockResult:m,availableQuantities:g,missingQuantities:y,formattedAvailableQuantities:In(m),hasAvailable:g.length>0,hasMissing:y.length>0,concernedDates:v,recipesByDate:f})}return e});get productsStatsByDateRange(){return s(this.#k)}set productsStatsByDateRange(e){b(this.#k,e)}#T=Q(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(e=>e.pFrais).length,surgel:this.enrichedProducts.filter(e=>e.pSurgel).length,merged:this.enrichedProducts.filter(e=>e.isMerged).length}));get stats(){return s(this.#T)}set stats(e){b(this.#T,e)}#N=Q(()=>{const e=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(e)]});get uniqueStores(){return s(this.#N)}set uniqueStores(e){b(this.#N,e)}#D=Q(()=>{const e=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(e)]});get uniqueWho(){return s(this.#D)}set uniqueWho(e){b(this.#D,e)}#C=Q(()=>{const e=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(e)]});get uniqueProductTypes(){return s(this.#C)}set uniqueProductTypes(e){b(this.#C,e)}#M=Q(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((i,l)=>i.$id.localeCompare(l.$id));if(s(this.#t).groupBy==="none")return{"":r};const n=Object.groupBy(r,i=>s(this.#t).groupBy==="store"?i.storeInfo?.storeName||"Non défini":i.productType||"Non défini"),a=Object.keys(n).sort((i,l)=>i===""?1:l===""?-1:i.localeCompare(l)),o={};return a.forEach(i=>{o[i]=n[i]}),o});get groupedFilteredProducts(){return s(this.#M)}set groupedFilteredProducts(e){b(this.#M,e)}async initialize(e,r){if(!e?.trim())throw new Error("mainId invalide fourni");if(s(this.#d)&&s(this.#r)===e){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${e}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${e}`),b(this.#r,e,!0),b(this.#o,r,!0);try{this.#n=await nc(e)}catch(n){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",n),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#i,null);try{if(await this.#j(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let a;a=await Ga(r),console.log(`[ProductsStore] Hugo chargé: ${a.ingredients.length} ingrédients`),b(this.#v,a.hugoContentHash,!0),tc(a.ingredients,e).forEach(l=>{this.#e.set(l.$id,l)}),b(this.#s,[...a.allDates],!0),await lo(e)||await co(a.mainGroup_id,a.hugoContentHash,a.allDates,a.name),await this.#I()}this.initializeDateRange(),await this.#L(),b(this.#d,!0);const n=this.#J();this.#_=io(e,n),this.#H(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#O(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(n){const a=n instanceof Error?n.message:"Erreur lors de l'initialisation";throw b(this.#i,a,!0),console.error("[ProductsStore]",a,n),n}}async#j(){if(this.#n)try{const e=await this.#n.loadProducts();e.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();b(this.#a,r.lastSync,!0),b(this.#s,[...r.allDates],!0),b(this.#v,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${e.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(e){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",e)}}async#L(){if(s(this.#r)){b(this.#c,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const e=await Xs(s(this.#r),{lastSync:s(this.#a),limit:Va});if(console.log(`[ProductsStore] ${e.length} produits récupérés depuis Appwrite`),e.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#R(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await yl(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Xl);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#a),Va);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#P(o,a)}})}this.#z(),await this.#B(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(e){throw console.error("[ProductsStore] Erreur lors du sync:",e),e}finally{b(this.#c,!1)}}}async#B(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:s(this.#a),allDates:[...s(this.#s)],hugoContentHash:s(this.#v)}),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#X(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.updateLastSync(s(this.#a)),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#I(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.updateLastSync(s(this.#a)),await this.#n.updateAllDates([...s(this.#s)]),await this.#n.updateHugoContentHash(s(this.#v)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(e){console.error("[ProductsStore] Erreur persistance cache complet:",e)}}async#$(e){if(!(!this.#n||e.length===0))try{const r=e.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#z(){b(this.#a,new Date().toISOString(),!0)}async#O(){if(!s(this.#o)||s(this.#u))return!1;try{const e=await ec(s(this.#v),s(this.#o));return e&&!s(this.#b)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${s(this.#o)}, analyse approfondie en cours...`),b(this.#b,!0),await this.#U()),b(this.#w,new Date,!0),e}catch(e){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",e),!1}}async#U(){if(!s(this.#o)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const e=await Ga(s(this.#o)),r=await oc(this.#e,e);if(console.log(`[ProductsStore  - hugo change] ${r.summary}`),r.overrideConflicts.length>0&&(b(this.#x,r.overrideConflicts,!0),wt.error(`${r.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>Ir.modalOverride.isOpen=!0}})),r.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${r.mergedProductsUpdated.length} produits fusionnés modifiés`),r.removed.length>0){const n=r.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length);n.length>0&&console.log(`[ProductsStore] ℹ️ ${n.length} ingrédients supprimés conservés (données utilisateur)`)}b(this.#s,[...e.allDates],!0),b(this.#v,e.hugoContentHash,!0),this.initializeDateRange(),await this.#I(),(r.added.length||r.updated.length||r.removed.length)&&wt.success(r.summary),b(this.#b,!1)}catch(e){console.error("[ProductsStore] Erreur sync Hugo:",e),wt.error("Erreur lors de la mise à jour Hugo")}}#H(){this.#p&&clearInterval(this.#p),this.#p=setInterval(async()=>{await this.#O()},6e4)}#W(){this.#p&&(clearInterval(this.#p),this.#p=null)}#R(e,r){return r?sn(e,r):Bl(e)}#F(e){const r=er(pr(e.purchases??[])),n=[],{numeric:a,display:o}=mr(n,r),i=it(e.stockReel)??null,l=dt(r),c=e.store?it(e.store):null,v=i?`${i.quantity} ${i.unit}`:l;return{$id:e.$id,$createdAt:e.$createdAt,$updatedAt:e.$updatedAt,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:e.isSynced,mainId:e.mainId,status:e.status,who:e.who,store:e.store,stockReel:e.stockReel,previousNames:e.previousNames,isMerged:e.isMerged,mergedFrom:e.mergedFrom,mergeDate:e.mergeDate,mergeReason:e.mergeReason,mergedInto:e.mergedInto,totalNeededOverride:e.totalNeededOverride,purchases:e.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:v,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:it(e.totalNeededOverride),displayTotalOverride:(()=>{const f=it(e.totalNeededOverride);return f?dt([f.totalOverride]):""})()}}#ee(e,r){const n=e.purchases??r.purchases,a=er(pr(n??[])),o=dt(a),{numeric:i,display:l}=mr(r.totalNeededArray,a),c=e.stockReel??r.stockReel,v=c?it(c):r.stockParsed,f=e.store??r.store,p=f?it(f):r.storeInfo,m=v?`${v.quantity} ${v.unit}`:o;return e.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:e.$updatedAt,productName:e.productName??r.productName,isSynced:e.isSynced??r.isSynced,mainId:e.mainId??r.mainId,status:e.status??r.status,who:e.who??r.who,store:f,stockReel:c,purchases:n,previousNames:e.previousNames??r.previousNames,isMerged:e.isMerged??r.isMerged,mergedFrom:e.mergedFrom??r.mergedFrom,mergeDate:e.mergeDate??r.mergeDate,mergeReason:e.mergeReason??r.mergeReason,mergedInto:e.mergedInto??r.mergedInto,totalNeededOverride:e.totalNeededOverride??r.totalNeededOverride,storeInfo:p,stockParsed:v,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:m,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:it(e.totalNeededOverride??r.totalNeededOverride),displayTotalOverride:(()=>{const g=it(e.totalNeededOverride??r.totalNeededOverride);return g?dt([g.totalOverride]):""})()}}#te(e){e.totalPurchasesArray=er(pr(e.purchases??[]));const{numeric:r,display:n}=mr(e.totalNeededArray,e.totalPurchasesArray);e.missingQuantityArray=r,e.displayMissingQuantity=n,e.displayTotalPurchases=dt(e.totalPurchasesArray)}#re(e){e.length&&(e.forEach(r=>this.#S(r)),console.log(`[ProductsStore] ${e.length} produits upserted`))}#S(e){const r=this.#e.get(e.$id),n=this.#R(e,r);this.#e.set(e.$id,n)}#G(e){this.#e.delete(e)}async#Q(e){if(!e.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",e.$id),[];const r=e.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#Y(r,e),r}async#V(e){if(e.products?.length){const r=e.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(r,e),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await oo([e.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#P(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#K(e){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===e));return r.forEach(n=>{this.#S(n)}),r.map(n=>n.$id)}#Y(e,r){const n=Da(r),a=[];e.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=sn({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#P(e,r){const n=Da(r),a=[];e.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(v=>v.$id===n.$id);if(c>=0){const v=[...l];v[c]=n;const f=sn({...i,purchases:v,status:"active"},i);a.push(f)}else{const v=sn({...i,purchases:[...l,r],status:"active"},i);a.push(v)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#J(){return{onProductCreate:e=>{if(this.#S(e),this.#n){const r=this.#e.get(e.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:e=>{if(this.#S(e),this.#n){const r=this.#e.get(e.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:e=>{this.#G(e),this.#n&&this.#n.deleteProduct(e).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async e=>{const r=await this.#Q(e);await this.#$(r)},onPurchaseUpdate:async e=>{const r=await this.#V(e);await this.#$(r)},onPurchaseDelete:async e=>{const r=await this.#K(e);await this.#$(r)},onConnect:()=>{b(this.#l,!0)},onDisconnect:()=>{b(this.#l,!1)},onError:e=>{console.error("[ProductsStore] Erreur realtime:",e)}}}#Z(e){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!e.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!e.storeInfo?.storeName||!s(this.#t).selectedStores.includes(e.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!e.who||!e.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!e.productType||!s(this.#t).selectedProductTypes.includes(e.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&e.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&e.pSurgel))}setSearchQuery=Dl(e=>{s(this.#t).searchQuery=e},()=>500);toggleProductType(e){const r=s(this.#t).selectedProductTypes.indexOf(e);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(e)}toggleTemperature(e){const r=s(this.#t).selectedTemperatures.indexOf(e);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(e)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(e){s(this.#t).groupBy=e}toggleStore(e){const r=s(this.#t).selectedStores.indexOf(e);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(e)}toggleWho(e){const r=s(this.#t).selectedWho.indexOf(e);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(e)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(e){s(this.#t).sortColumn===e?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=e,s(this.#t).sortDirection="asc")}clearFilters(){b(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(e){return s(this.#t).sortColumn?[...e].sort((r,n)=>{let a=r[s(this.#t).sortColumn],o=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#t).sortDirection==="asc"?-1:1:a>o?s(this.#t).sortDirection==="asc"?1:-1:0}):e}getEnrichedProductById(e){return this.#e.get(e)??null}hasConversions(e){const r=this.#e.get(e);return r?.byDate?Il(r.byDate):!1}async forceReload(e,r){await this.clearCache(),await this.initialize(e,r)}async clearCache(){this.#e.clear(),b(this.#s,[],!0),b(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(e,r){const n=r?"isSyncing":"active";e.forEach(a=>{const o=this.#e.get(a);if(o){const i={...o,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${e.length} produits → ${n}`)}clearSyncStatus(){const e=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&e.push(r);e.length>0&&(this.setSyncStatus(e,!1),console.log(`[ProductsStore] Nettoyage de ${e.length} produits en statut "isSyncing"`))}destroy(){this.#_?.(),this.#_=null,this.#W(),this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const F=new vc;function Ka(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const e=new URLSearchParams(window.location.search).get("listId");if(!e||!e.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return e.trim()}function fc(t){const e=t.substring(0,4),r=t.slice(-10);return`${e}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const hc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var pc=Yi("<svg><!><!></svg>");function pe(t,e){W(e,!0);const r=Oe(e,"color",3,"currentColor"),n=Oe(e,"size",3,24),a=Oe(e,"strokeWidth",3,2),o=Oe(e,"absoluteStrokeWidth",3,!1),i=Oe(e,"iconNode",19,()=>[]),l=fe(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=pc();ka(c,p=>({...hc,...l,width:n(),height:n(),stroke:r(),"stroke-width":p,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var v=u(c);ct(v,17,i,Zr,(p,m)=>{var g=Q(()=>as(s(m),2));let y=()=>s(g)[0],E=()=>s(g)[1];var w=H(),A=I(w);rl(A,y,!0,(T,x)=>{ka(T,()=>({...E()}))}),h(p,w)});var f=d(v);le(f,()=>e.children??se),h(t,c),G()}function Hn(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];pe(t,he({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function mc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];pe(t,he({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function gc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];pe(t,he({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function _c(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];pe(t,he({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function bc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];pe(t,he({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function yc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];pe(t,he({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function po(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];pe(t,he({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function wc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];pe(t,he({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Sc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];pe(t,he({name:"circle-arrow-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function xc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];pe(t,he({name:"circle-arrow-right"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Ya(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];pe(t,he({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function $c(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];pe(t,he({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Pc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];pe(t,he({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Ec(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];pe(t,he({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Ac(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];pe(t,he({name:"clipboard-pen-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function kc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];pe(t,he({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Tc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];pe(t,he({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function fa(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];pe(t,he({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Nc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];pe(t,he({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Dc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];pe(t,he({name:"euro"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function on(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];pe(t,he({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function mo(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];pe(t,he({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Cc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];pe(t,he({name:"info"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Mc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];pe(t,he({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Ic(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];pe(t,he({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Oc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];pe(t,he({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function go(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];pe(t,he({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Rc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];pe(t,he({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function qc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];pe(t,he({name:"message-circle-more"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function jc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];pe(t,he({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function _o(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];pe(t,he({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function bo(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];pe(t,he({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Lc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];pe(t,he({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Bc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];pe(t,he({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function zc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];pe(t,he({name:"plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Uc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];pe(t,he({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Hc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];pe(t,he({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Wc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];pe(t,he({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Gc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];pe(t,he({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Qc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];pe(t,he({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function yo(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];pe(t,he({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function tr(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];pe(t,he({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function wo(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];pe(t,he({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Wn(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];pe(t,he({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function ar(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];pe(t,he({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function So(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];pe(t,he({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Vc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];pe(t,he({name:"thermometer"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function $n(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];pe(t,he({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function xo(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];pe(t,he({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Gn(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];pe(t,he({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Kc(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];pe(t,he({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function qt(t,e){W(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];pe(t,he({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=I(i);le(l,()=>e.children??se),h(a,i)},$$slots:{default:!0}})),G()}function Yc(t,e){const r=t.reduce((a,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return a+i+l},0),n=e.invoiceTotal?1:0;return r+n}async function Jc(t,e){const r=t.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const a=e.purchaseStatus||"delivered";let o=e.purchaseDeliveryDate||null;a==="delivered"&&!o&&(o=new Date().toISOString());const i=t.flatMap(c=>c.missingQuantities.map(v=>({productId:c.productId,quantity:v.q,unit:v.u,status:a,notes:e.notes||"",store:e.store||"",who:e.who||null,price:null,orderDate:null,deliveryDate:o,createdBy:n})));return{mainId:t[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:e}}async function Zc(t,e,r){if(!e?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};e.forEach(m=>{m.productData&&(m.productData.mainId=t)});const n=Yc(e,r);console.log(`[Appwrite Interactions] Achat groupé: ${e.length} produits, ${n} opérations totales`);const a=100,o=[];if(n<=a)o.push(e);else{let m=[],g=0;for(const y of e){const E=(y.isSynced?0:1)+y.missingQuantities.length;g+E>a?(m.length>0&&o.push(m),m=[y],g=E):(m.push(y),g+=E)}m.length>0&&o.push(m)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,v=0;for(let m=0;m<o.length;m++){const g=o[m];console.log(`[Appwrite Interactions] Exécution du lot ${m+1}/${o.length} (${g.length} produits)`);try{const y=await Jc(g,r),E=await Xc(y);if(i.push(E),E.success)l+=E.productsCreated,c+=E.purchasesCreated,v+=E.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${m+1}: ${E.error}`);break}}catch(y){const E=y instanceof Error?y.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${m+1}:`,y),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:E,timestamp:new Date().toISOString()});break}}const f=i.every(m=>m.success),p=i.some(m=>!m.success);return{success:f,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:v,error:p?"Un ou plusieurs lots ont échoué":void 0}}async function Xc(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:t};console.log(`[Appwrite Interactions] Exécution du lot: ${t.batchData.productsToCreate.length} produits à créer, ${t.batchData.purchasesToCreate.length} achats à créer`);const a=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(e){console.error("[Appwrite Interactions] Erreur exécution lot:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:t.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var Fc=(t,e,r)=>e(s(r).id),eu=S('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),tu=S('<span class="flex items-center gap-1"><!> </span>'),ru=S('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),nu=S('<div class="flex flex-wrap gap-2"></div> <!>',1);function Fr(t,e){W(e,!0);let r=Oe(e,"badgeSize",3,"badge-lg"),n=Oe(e,"color",3,"primary"),a=Oe(e,"badgeStyle",3,""),o=Oe(e,"onToggleItem",3,()=>{}),i=Oe(e,"showStats",3,!1),l=Oe(e,"showIcon",3,!0),c=O(Re({}));or(()=>{const w={};e.items.forEach(A=>{w[A.id]=A.selected??!0}),b(c,w,!0)});function v(w){s(c)[w]=!s(c)[w],o()(w)}const f=Q(()=>Object.values(s(c)).filter(Boolean).length),p=Q(()=>Object.values(s(c)).filter(w=>!w).length);var m=nu(),g=I(m);ct(g,21,()=>e.items,w=>w.id,(w,A)=>{const T=Q(()=>s(c)[s(A).id]);var x=eu();x.__click=[Fc,v,A];var $=u(x);{var _=V=>{var U=H(),ne=I(U);hr(ne,()=>s(A).icon,(be,j)=>{j(be,{class:"h-3 w-3",get title(){return s(A).title}})}),h(V,U)};k($,V=>{s(A).icon&&V(_)})}var P=d($,2),N=u(P),D=d(P,2);{var te=V=>{var U=H(),ne=I(U);{var be=M=>{Xr(M,{size:16})},j=M=>{zc(M,{size:16})};k(ne,M=>{s(T)?M(be):M(j,!1)})}h(V,U)};k(D,V=>{l()&&V(te)})}B(()=>{Te(x,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(T)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),nr(x,"title",s(T)?"Retirer de la liste":"Réajouter à la liste"),L(N,s(A).label)}),h(w,x)});var y=d(g,2);{var E=w=>{var A=ru(),T=u(A),x=u(T),$=u(x);Xr($,{class:"text-success h-3 w-3"});var _=d($),P=d(x,2);{var N=V=>{var U=tu(),ne=u(U);qt(ne,{class:"text-error h-3 w-3"});var be=d(ne);B(()=>L(be,` ${s(p)??""} retirés`)),h(V,U)};k(P,V=>{s(p)>0&&V(N)})}var D=d(T,2),te=u(D);B(()=>{L(_,` ${s(f)??""} actifs`),L(te,`Total: ${e.items.length??""} items`)}),h(w,A)};k(y,w=>{i()&&w(E)})}h(t,m),G()}Fe(["click"]);function au(t,e){b(e,!s(e))}var su=S('<span class="text-base-content font-semibold"> </span>'),ou=S('<div class="text-base-content/80 flex-1"> </div>'),iu=S('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),lu=S('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),cu=S('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function $o(t,e){let r=Oe(e,"icon",3,Cc),n=Oe(e,"class",3,""),a=Oe(e,"initiallyOpen",3,!1),o=r(),i=O(Re(a())),l=Re(e.children);var c=cu(),v=u(c);v.__click=[au,i];var f=u(v),p=u(f);o(p,{size:24,class:"text-base-content me-4 flex-shrink-0"});var m=d(p,2);{var g=$=>{var _=su(),P=u(_);B(()=>L(P,e.title)),h($,_)};k(m,$=>{e.title&&$(g)})}var y=d(f,2);{var E=$=>{var _=ou(),P=u(_);B(()=>L(P,e.contentVisible)),h($,_)};k(y,$=>{e.contentVisible&&$(E)})}var w=d(y,2);{var A=$=>{var _=iu(),P=u(_),N=u(P);{var D=U=>{var ne=At("en savoir plus");h(U,ne)},te=U=>{var ne=At("masquer");h(U,ne)};k(N,U=>{s(i)?U(te,!1):U(D)})}var V=d(P,2);{let U=Q(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(i)?"rotate-180":""}`);po(V,{get class(){return s(U)}})}h($,_)};k(w,$=>{l&&$(A)})}var T=d(v,2);{var x=$=>{var _=lu(),P=u(_),N=u(P);le(N,()=>e.children??se),B(()=>Te(_,1,`overflow-hidden transition-all duration-200 ${s(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h($,_)};k(T,$=>{l&&$(x)})}B(()=>{Te(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),zs(c,e.style),Te(v,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),nr(v,"aria-expanded",s(i))}),h(t,c)}Fe(["click"]);async function uu(t,e,r,n,a,o,i,l){if(!(!s(e)||s(r))){b(r,!0),b(n,null),b(a,null);try{const c=`FACTURE_${Date.now()}`,v=s(o).map(g=>g.$id);F.setSyncStatus(v,!0);const f=[];for(const g of s(o))f.push({productId:g.$id,isSynced:g.isSynced,productData:g,missingQuantities:g.missingQuantityArray||[]});const p={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(o).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${f.length} produits...`),l.onClose();const m=await Zc(F.currentMainId,f,p);if(m.success)b(a,{purchases:m.totalPurchasesCreated,expense:m.totalExpensesCreated>0,batches:m.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${m.totalProductsCreated} produits synchronisés, ${m.totalPurchasesCreated} achats créés, ${m.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(m.error||"Erreur lors de la création de l'achat groupé")}catch(c){const v=c instanceof Error?c.message:"Erreur inconnue";b(n,v,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),F.clearSyncStatus()}finally{b(r,!1)}}}function Ja(t,e,r){s(e)||r.onClose()}var du=S('<div class="alert alert-error"><!> <span> </span></div>'),vu=S('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),fu=S(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),hu=S("<option> </option>"),pu=S("<option> </option>"),mu=S('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),gu=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),_u=S("<!> ",1),bu=S(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function yu(t,e){W(e,!0);let r=O(!1),n=O(null),a=O(null),o=Re({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=O(Re(new Set));or(()=>{b(i,new Set(e.products.map(ge=>ge.$id)),!0)});const l=Q(()=>e.products.filter(ge=>s(i).has(ge.$id))),c=Q(()=>s(l).length!==0),v=Q(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function f(ge){const ke=new Set(s(i));ke.has(ge)?ke.delete(ge):ke.add(ge),b(i,ke,!0)}const p=Q(()=>e.products.map(ge=>({id:ge.$id,label:ge.productName,title:ge.productName})));var m=bu(),g=u(m),y=u(g),E=u(y),w=u(E);tr(w,{class:"h-5 w-5"});var A=d(w),T=d(E,2);T.__click=[Ja,r,e];var x=u(T);qt(x,{class:"h-4 w-4"});var $=d(y,2),_=u($);{var P=ge=>{var ke=du(),Ne=u(ke);$n(Ne,{class:"h-4 w-4"});var Ge=d(Ne,2),Ke=u(Ge);B(()=>L(Ke,s(n))),h(ge,ke)};k(_,ge=>{s(n)&&ge(P)})}var N=d(_,2);{var D=ge=>{var ke=vu(),Ne=u(ke);Xr(Ne,{class:"h-4 w-4"});var Ge=d(Ne,2),Ke=u(Ge),_t=d(Ke);{var Tt=Xe=>{var ot=At("+ 1 dépense globale");h(Xe,ot)};k(_t,Xe=>{s(a).expense&&Xe(Tt)})}var tt=d(_t,2);{var bt=Xe=>{var ot=At();B(()=>L(ot,`(traité en ${s(a).batches??""} lots)`)),h(Xe,ot)};k(tt,Xe=>{s(a).batches&&s(a).batches>1&&Xe(bt)})}B(()=>L(Ke,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),h(ge,ke)};k(N,ge=>{s(a)&&ge(D)})}var te=d(N,2),V=u(te);$o(V,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(ge,ke)=>{var Ne=fu();h(ge,Ne)},$$slots:{default:!0}});var U=d(te,2),ne=d(u(U),2),be=u(ne),j=u(be),M=u(j);ar(M,{class:"h-4 w-4 opacity-50"});var R=d(M,2),ie=d(j,2);ct(ie,21,()=>F.uniqueStores,Zr,(ge,ke)=>{var Ne=hu(),Ge=u(Ne),Ke={};B(()=>{L(Ge,s(ke)),Ke!==(Ke=s(ke))&&(Ne.value=(Ne.__value=s(ke))??"")}),h(ge,Ne)});var K=d(be,2),ee=u(K),re=u(ee);rn(re,{class:"h-4 w-4 opacity-50"});var Se=d(re,2),z=d(ee,2);ct(z,21,()=>F.uniqueWho,Zr,(ge,ke)=>{var Ne=pu(),Ge=u(Ne),Ke={};B(()=>{L(Ge,s(ke)),Ke!==(Ke=s(ke))&&(Ne.value=(Ne.__value=s(ke))??"")}),h(ge,Ne)});var Y=d(K,2),ae=u(Y),ue=u(ae);Dc(ue,{class:"h-4 w-4 opacity-50"});var xe=d(ue,2),Z=d(ne,2),me=u(Z),q=u(me),X=u(q);X.value=X.__value="delivered";var Ae=d(X);Ae.value=Ae.__value="ordered";var we=d(q,2),Ee=d(me,2);{var oe=ge=>{var ke=mu(),Ne=u(ke),Ge=d(u(Ne),2);B(()=>Ge.disabled=s(r)),Ie(Ge,()=>o.deliveryDate,Ke=>o.deliveryDate=Ke),h(ge,ke)};k(Ee,ge=>{o.status==="ordered"&&ge(oe)})}var ye=d(Z,2),je=u(ye),de=u(je);_o(de,{class:"h-4 w-4 opacity-50"});var We=d(de,2),ce=d(U,2),$e=d(u(ce),2);Fr($e,{get items(){return s(p)},onToggleItem:f,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Ue=d(ce,2),_e=u(Ue);_e.__click=[Ja,r,e];var st=d(_e,2);st.__click=[uu,c,r,n,a,l,o,e];var qe=u(st);{var Pe=ge=>{var ke=gu();h(ge,ke)},Ze=ge=>{var ke=_u(),Ne=I(ke);tr(Ne,{class:"h-4 w-4"});var Ge=d(Ne);B(()=>L(Ge,` Valider ${s(l).length??""} produit(s)`)),h(ge,ke)};k(qe,ge=>{s(r)?ge(Pe):ge(Ze,!1)})}B(()=>{L(A,` ${s(v)??""}`),T.disabled=s(r),R.disabled=s(r),Se.disabled=s(r),xe.disabled=s(r),q.disabled=s(r),Te(we,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),We.disabled=s(r),_e.disabled=s(r),st.disabled=s(r)||!s(c)}),Ie(R,()=>o.store,ge=>o.store=ge),Ie(Se,()=>o.who,ge=>o.who=ge),Ie(xe,()=>o.expense,ge=>o.expense=ge),ur(q,()=>o.status,ge=>o.status=ge),Ie(We,()=>o.notes,ge=>o.notes=ge),h(t,m),G()}Fe(["click"]);function Qn(t){switch(t.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:mc};case"animaux":return{displayName:"Viandes et Poissons",icon:gc};case"legumes":return{displayName:"Fruits et Légumes",icon:bc};case"sucres":return{displayName:"Sucrées",icon:_c};case"lof":return{displayName:"L.O.F",icon:Nc};case"autres":return{displayName:"Autres",icon:yc};case"epices":return{displayName:"Assaisonnements",icon:Ic};case"frais":return{displayName:"Produits Frais",icon:Wc};default:return{displayName:t,icon:tn}}}function Za(t,e){return e==="kg"?{quantity:t*1e3,unit:"gr."}:e==="l."?{quantity:t*1e3,unit:"ml"}:{quantity:t,unit:e}}function ha(t,e){return e==="gr."&&t>=1e3?`${(t/1e3).toFixed(1)} kg`:e==="ml"&&t>=1e3?`${(t/1e3).toFixed(1)} l`:`${t} ${e}`}function Pn(t){if(!t)return"-";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}function wu(t){if(!t)return"-";try{const e=JSON.parse(t);if(Array.isArray(e)&&e.length>0)return e.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return t}return t}function Vn(t){switch(t){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function Xa(t){return t?Pn(t):"-"}function Su(t){if(!t?.length)return[];const e=t.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=Vn(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:xu(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(e)}function xu(t){switch(t){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function $u(t){let e=O(!1),r=O(null);const n=Q(()=>(console.log(`[ProductModalState] Recalculating product ${t}`),F.getEnrichedProductById(t))),a=Q(()=>s(n)?.who??[]),o=Q(()=>s(n)?.stockParsed??null),i=Q(()=>s(n)?.purchases??[]),l=Q(()=>s(n)?.byDate?Rl(s(n).byDate):[]),c=Re({purchase:{quantity:null,unit:"",store:"",who:Ir.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let v=O(!1),f=O(null);or(()=>{!s(n)||s(v)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=Ir.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??"",c.store.comment=s(n).storeInfo?.storeComment??null,c.who=s(n)?.who?[...s(n).who]:[],b(f,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),b(v,!0))});const p=Q(()=>s(f)?{store:JSON.stringify(c.store)!==JSON.stringify(s(f).store),stock:m(),who:JSON.stringify(c.who)!==JSON.stringify(s(f).whoList)}:{store:!1,stock:!1,who:!1});function m(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?s(o)?c.stock.quantity.toString()!==s(o).quantity||c.stock.unit!==s(o).unit||(c.stock.notes||"")!==(s(o).notes||""):!0:!1}const g=Q(()=>!!(s(f)&&(s(p).store||s(p).stock||s(p).who)));let y=O(null);const E=Q(()=>s(y)?s(i).find(j=>j.$id===s(y))??null:null);async function w(j,M){b(e,!0),b(r,null);try{const R=await j();return M&&A("success",M),R}catch(R){const ie=R instanceof Error?R.message:"Une erreur est survenue";return b(r,ie,!0),A("error",ie),console.error("[ProductModalState]",R),null}finally{b(e,!1)}}function A(j,M){const R=new CustomEvent("toast",{detail:{type:j,message:M}});window.dispatchEvent(R)}async function T(){s(n)&&await w(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!F.currentMainId)throw new Error("mainId non disponible");const{quantity:j,unit:M}=Za(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await Ut(s(n).$id,{},K=>F.getEnrichedProductById(K)));const R=c.purchase.status||"delivered";let ie=c.purchase.deliveryDate||null;R==="delivered"&&!ie&&(ie=new Date().toISOString()),await no({products:[s(n).$id],mainId:F.currentMainId,unit:M,quantity:j,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:R,orderDate:c.purchase.orderDate||null,deliveryDate:ie}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function x(j){b(y,j.$id,!0)}function $(){b(y,null)}async function _(j){j.$id&&await w(async()=>{const{quantity:M,unit:R}=Za(j.quantity,j.unit),ie=j.status||null;let K=j.deliveryDate||null;ie==="delivered"&&!K&&(K=new Date().toISOString()),await ao(j.$id,{unit:R,quantity:M,store:j.store||null,who:j.who||null,notes:j.notes||"",price:j.price||null,status:ie,orderDate:j.orderDate||null,deliveryDate:K}),b(y,null)},"Achat modifié avec succès")}async function P(j){const M=s(i).find(R=>R.$id===j);M&&confirm(`Supprimer cet achat (${M.quantity} ${M.unit}) ?`)&&await w(async()=>{await so(j)},"Achat supprimé avec succès")}async function N(){s(n)&&await w(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const j={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Un(s(n).$id,JSON.stringify(j))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await Ut(s(n).$id,{stockReel:JSON.stringify(j)},M=>F.getEnrichedProductById(M))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function D(){s(n)&&confirm("Supprimer le stock actuel ?")&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await Un(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await Ut(s(n).$id,{stockReel:null},j=>F.getEnrichedProductById(j)))},"Stock supprimé")}async function te(j){s(n)&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, setWho normal...`),await eo(s(n).$id,j)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await Ut(s(n).$id,{who:j},M=>F.getEnrichedProductById(M)))},"Volontaires mis à jour")}async function V(j){s(n)&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await Fs(s(n).$id,j)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await Ut(s(n).$id,{store:JSON.stringify(j)},M=>F.getEnrichedProductById(M)))},"Magasin mis à jour")}async function U(j){s(n)&&await w(async()=>{s(n).isSynced?await da(s(n).$id,j,!0):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await Ut(s(n).$id,{totalNeededOverride:JSON.stringify(j)},M=>F.getEnrichedProductById(M)))},"Override appliqué")}async function ne(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await w(async()=>{await to(s(n).$id,!0)},"Override supprimé")}async function be(){!s(n)||!s(g)||await w(async()=>{const j={};if(s(p).stock&&c.stock.quantity&&c.stock.unit){const M={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};j.stockReel=JSON.stringify(M)}if(s(p).who&&(j.who=c.who),s(p).store){const M={storeName:c.store.name||"",storeComment:c.store.comment||void 0};j.storeInfo=M}Object.keys(j).length>0&&(await ro(s(n).$id,j,M=>F.getEnrichedProductById(M)),b(f,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return s(e)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(y)},get editingPurchaseData(){return s(E)},forms:c,addPurchase:T,startEditPurchase:x,cancelEditPurchase:$,updateEditedPurchase:_,removePurchase:P,setStock:N,removeStock:D,setWho:te,updateStore:V,setOverride:U,removeOverride:ne,saveAllChanges:be,get hasChanges(){return s(p)},get hasAnyChanges(){return s(g)},formatQuantity:ha,formatDate:Pn,formatDisplayQuantity:wu}}function Pu(t,e,r){e()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Eu(t,e,r){const n=e().editingPurchaseData;!n||!r(n)||e().updateEditedPurchase(n)}function Au(t,e){e().cancelEditPurchase()}var ku=S('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Tu=S('<span class="loading loading-spinner loading-sm"></span>'),Nu=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Du=S('<span class="loading loading-spinner loading-sm"></span>'),Cu=S('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Livré</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Mu=(t,e,r)=>e(s(r)),Iu=(t,e,r)=>e(s(r).$id),Ou=S('<span class="loading loading-spinner loading-sm"></span>'),Ru=S('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),qu=S('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),ju=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Lu(t,e){W(e,!0);let r=Oe(e,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(de){return de.quantity!==null&&de.quantity!==0&&de.unit?.trim()!==""}function o(de){r().removePurchase(de)}function i(de){r().startEditPurchase(de)}var l=ju(),c=u(l),v=u(c);tr(v,{class:"h-5 w-5"});var f=d(c,2),p=u(f),m=d(u(p),2),g=u(m),y=u(g);tn(y,{class:"h-4 w-4 opacity-50"});var E=d(y,2),w=d(g,2),A=u(w);A.value=A.__value="";var T=d(A);T.value=T.__value="kg";var x=d(T);x.value=x.__value="gr.";var $=d(x);$.value=$.__value="l.";var _=d($);_.value=_.__value="ml";var P=d(_);P.value=P.__value="unité";var N=d(P);N.value=N.__value="bottes";var D=d(w,2),te=u(D);ar(te,{class:"h-4 w-4 opacity-50"});var V=d(te,2),U=d(D,2),ne=u(U);rn(ne,{class:"h-4 w-4 opacity-50"});var be=d(ne,2),j=d(U,2),M=d(u(j),2),R=d(m,2),ie=u(R),K=u(ie);_o(K,{class:"h-4 w-4 opacity-50"});var ee=d(K,2),re=d(R,2),Se=u(re),z=u(Se),Y=u(z),ae=u(Y);ae.value=ae.__value="delivered";var ue=d(ae);ue.value=ue.__value="ordered";var xe=d(z,2),Z=d(Se,2);{var me=de=>{var We=ku(),ce=d(u(We),2);Ie(ce,()=>r().forms.purchase.deliveryDate,$e=>r().forms.purchase.deliveryDate=$e),h(de,We)};k(Z,de=>{r().forms.purchase.status==="ordered"&&de(me)})}var q=d(re,2),X=u(q);X.__click=[Pu,n,r];var Ae=u(X);{var we=de=>{var We=Tu();h(de,We)},Ee=de=>{var We=At("Ajouter l'achat");h(de,We)};k(Ae,de=>{r().loading?de(we):de(Ee,!1)})}var oe=d(f,2);{var ye=de=>{var We=Nu(),ce=u(We);tr(ce,{class:"mx-auto mb-2 h-12 w-12"}),h(de,We)},je=de=>{var We=qu(),ce=u(We),$e=d(u(ce));ct($e,21,()=>r().purchasesList,Ue=>Ue.$id,(Ue,_e,st)=>{var qe=H(),Pe=I(qe);{var Ze=ke=>{var Ne=Cu(),Ge=u(Ne),Ke=u(Ge),_t=u(Ke),Tt=d(_t,2),tt=u(Tt);tt.value=tt.__value="kg";var bt=d(tt);bt.value=bt.__value="gr.";var Xe=d(bt);Xe.value=Xe.__value="l.";var ot=d(Xe);ot.value=ot.__value="ml";var jt=d(ot);jt.value=jt.__value="unité";var ft=d(jt);ft.value=ft.__value="bottes";var Lt=d(Ge),Bt=u(Lt),Jt=d(Lt),Nt=u(Jt),J=d(Jt),ve=u(J),Ce=u(ve);Ce.value=Ce.__value="ordered";var Qe=d(Ce);Qe.value=Qe.__value="delivered";var Ve=d(J),Be=u(Ve),Ye=d(Ve),He=u(Ye),Dt=d(Ye),Lr=u(Dt),$t=d(Dt),rt=u($t),zt=d($t),ir=u(zt),Ct=u(ir);Ct.__click=[Eu,r,a];var Br=u(Ct);{var Ao=ze=>{var No=Du();h(ze,No)},ko=ze=>{Gc(ze,{class:"h-3 w-3"})};k(Br,ze=>{r().loading?ze(Ao):ze(ko,!1)})}var pa=d(Ct,2);pa.__click=[Au,r];var To=u(pa);qt(To,{class:"h-3 w-3"}),B(ze=>Ct.disabled=ze,[()=>r().loading||!a(s(_e))]),Ie(_t,()=>s(_e).quantity,ze=>s(_e).quantity=ze),ur(Tt,()=>s(_e).unit,ze=>s(_e).unit=ze),Ie(Bt,()=>s(_e).store,ze=>s(_e).store=ze),Ie(Nt,()=>s(_e).who,ze=>s(_e).who=ze),ur(ve,()=>s(_e).status,ze=>s(_e).status=ze),Ie(Be,()=>s(_e).orderDate,ze=>s(_e).orderDate=ze),Ie(He,()=>s(_e).deliveryDate,ze=>s(_e).deliveryDate=ze),Ie(Lr,()=>s(_e).price,ze=>s(_e).price=ze),Ie(rt,()=>s(_e).notes,ze=>s(_e).notes=ze),h(ke,Ne)},ge=ke=>{var Ne=Ru(),Ge=u(Ne),Ke=u(Ge),_t=d(Ge),Tt=u(_t),tt=d(_t),bt=u(tt),Xe=d(tt),ot=u(Xe),jt=u(ot),ft=d(Xe),Lt=u(ft),Bt=d(ft),Jt=u(Bt),Nt=d(Bt),J=u(Nt),ve=d(Nt),Ce=u(ve),Qe=d(ve),Ve=u(Qe),Be=u(Ve);Be.__click=[Mu,i,_e];var Ye=u(Be);Wn(Ye,{class:"h-4 w-4"});var He=d(Be,2);He.__click=[Iu,o,_e];var Dt=u(He);{var Lr=rt=>{var zt=Ou();h(rt,zt)},$t=rt=>{qt(rt,{class:"h-4 w-4"})};k(Dt,rt=>{r().loading?rt(Lr):rt($t,!1)})}B((rt,zt,ir,Ct,Br)=>{L(Ke,rt),L(Tt,s(_e).store||"-"),L(bt,s(_e).who||"-"),Te(ot,1,`badge badge-sm ${zt??""}`),L(jt,ir),L(Lt,Ct),L(Jt,Br),L(J,s(_e).price?`${s(_e).price}€`:"-"),L(Ce,s(_e).notes||"-"),He.disabled=r().loading},[()=>ha(s(_e).quantity,s(_e).unit),()=>Vn(s(_e).status).class,()=>Vn(s(_e).status).text,()=>Xa(s(_e).orderDate),()=>Xa(s(_e).deliveryDate)]),h(ke,Ne)};k(Pe,ke=>{r().editingPurchaseId===s(_e).$id?ke(Ze):ke(ge,!1)})}h(Ue,qe)}),h(de,We)};k(oe,de=>{r().purchasesList.length===0?de(ye):de(je,!1)})}B(de=>{Te(xe,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),X.disabled=de},[()=>r().loading||!n()]),Ie(E,()=>r().forms.purchase.quantity,de=>r().forms.purchase.quantity=de),ur(w,()=>r().forms.purchase.unit,de=>r().forms.purchase.unit=de),Ie(V,()=>r().forms.purchase.store,de=>r().forms.purchase.store=de),Ie(be,()=>r().forms.purchase.who,de=>r().forms.purchase.who=de),Ie(M,()=>r().forms.purchase.price,de=>r().forms.purchase.price=de),Ie(ee,()=>r().forms.purchase.notes,de=>r().forms.purchase.notes=de),ur(Y,()=>r().forms.purchase.status,de=>r().forms.purchase.status=de),h(t,l),G()}Fe(["click"]);async function Bu(t,e){await e()?.removeStock()}var zu=S(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),Uu=(t,e)=>{e().forms.stock.quantity=null,e().forms.store.comment=""},Hu=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Wu=S('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Gu=S('<span class="loading loading-spinner loading-xs"></span>'),Qu=S('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),Vu=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function Ku(t,e){W(e,!0);let r=Oe(e,"modalState",7);var n=Vu(),a=u(n),o=u(a);Hn(o,{class:"h-5 w-5"});var i=d(a,2),l=u(i),c=u(l),v=u(c),f=d(c,2),p=u(f);$o(p,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(M,R)=>{var ie=zu();h(M,ie)},$$slots:{default:!0}});var m=d(f,2),g=u(m),y=u(g);tn(y,{class:"h-4 w-4 opacity-50"});var E=d(y,2),w=d(g,2),A=u(w);A.value=A.__value="";var T=d(A);T.value=T.__value="kg";var x=d(T);x.value=x.__value="gr.";var $=d(x);$.value=$.__value="l.";var _=d($);_.value=_.__value="ml";var P=d(_);P.value=P.__value="unité";var N=d(P);N.value=N.__value="bottes";var D=d(m,2),te=u(D),V=d(D,2),U=u(V);U.__click=[Uu,r];var ne=d(i,2);{var be=M=>{var R=Hu(),ie=u(R);Hn(ie,{class:"mx-auto mb-2 h-12 w-12"}),h(M,R)},j=M=>{var R=Qu(),ie=u(R),K=d(u(ie),2),ee=u(K),re=d(u(ee),2),Se=u(re),z=d(ee,2),Y=d(u(z),2),ae=u(Y),ue=d(z,2);{var xe=we=>{var Ee=Wu(),oe=d(u(Ee),2),ye=u(oe);B(()=>L(ye,r().stockParsed.notes)),h(we,Ee)};k(ue,we=>{r().stockParsed.notes&&we(xe)})}var Z=d(K,2),me=u(Z);me.__click=[Bu,r];var q=u(me);{var X=we=>{var Ee=Gu();h(we,Ee)},Ae=we=>{var Ee=At("Supprimer le stock");h(we,Ee)};k(q,we=>{r().loading?we(X):we(Ae,!1)})}B(we=>{L(Se,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),L(ae,we),me.disabled=r().loading},[()=>Pn(r().stockParsed.dateTime)]),h(M,R)};k(ne,M=>{r().stockParsed?M(j,!1):M(be)})}B(M=>{L(v,`Déclarer le stock réel du ${M??""}`),U.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),Ie(E,()=>r().forms.stock.quantity,M=>r().forms.stock.quantity=M),ur(w,()=>r().forms.stock.unit,M=>r().forms.stock.unit=M),Ie(te,()=>r().forms.stock.notes,M=>r().forms.stock.notes=M),h(t,n),G()}Fe(["click"]);function Yu(t,e,r){e().forms.who=[...e().whoList],b(r,"")}var Ju=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},Zu=S('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function Xu(t,e){W(e,!0);let r=Oe(e,"modalState",7),n=O("");const a=Q(()=>{const N=new Set([...F.uniqueWho,...r().forms.who]);return Array.from(N).map(D=>({id:D,label:D,selected:r().forms.who.includes(D)}))});function o(N){const D=N.trim();D&&!r().forms.who.includes(D)&&(r().forms.who=[...r().forms.who,D])}function i(N){r().forms.who=r().forms.who.filter(D=>D!==N)}function l(N){r().forms.who.includes(N)?i(N):o(N)}function c(){s(n).trim()&&(o(s(n)),b(n,""))}var v=Zu(),f=u(v),p=u(f),m=d(u(p),4),g=u(m),y=u(g),E=u(y);rn(E,{class:"h-4 w-4 opacity-50"});var w=d(E,2);w.__keydown=[Ju,c];var A=d(y,2);A.__click=c;var T=u(A);xo(T,{size:16});var x=d(g,2),$=d(u(x),2);Fr($,{get items(){return s(a)},onToggleItem:l,showIcon:!0});var _=d(m,2),P=u(_);P.__click=[Yu,r,n],B(N=>{w.disabled=r().loading,A.disabled=N,P.disabled=r().loading},[()=>r().loading||!s(n).trim()]),Ie(w,()=>s(n),N=>b(n,N)),h(t,v),G()}Fe(["keydown","click"]);var Fu=S('<div class="mb-1 text-xs opacity-70"> </div>'),ed=(t,e,r)=>e(s(r)),td=S("<button><!> </button>"),rd=S('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function Po(t,e){W(e,!0);let r=Oe(e,"maxSuggestions",3,8),n=Oe(e,"title",3,"Suggestions :"),a=Oe(e,"buttonSize",3,"btn-xs"),o=Oe(e,"buttonVariant",3,"btn-soft"),i=Oe(e,"disabled",3,!1);const l=Q(()=>e.suggestions.slice(0,r()));function c(m){!i()&&!m.disabled&&e.onSuggestionClick(m)}var v=H(),f=I(v);{var p=m=>{var g=rd(),y=u(g);{var E=A=>{var T=Fu(),x=u(T);B(()=>L(x,n())),h(A,T)};k(y,A=>{n()&&A(E)})}var w=d(y,2);ct(w,21,()=>s(l),A=>A.id,(A,T)=>{var x=td();x.__click=[ed,c,T];var $=u(x);{var _=N=>{var D=H(),te=I(D);hr(te,()=>s(T).icon,(V,U)=>{U(V,{class:"h-3 w-3"})}),h(N,D)};k($,N=>{s(T).icon&&N(_)})}var P=d($);B(()=>{Te(x,1,`btn ${a()??""} ${o()??""}`),x.disabled=i()||s(T).disabled,nr(x,"title",s(T).disabled?"Déjà sélectionné":s(T).label),L(P,` ${s(T).label??""}`)}),h(A,x)}),h(m,g)};k(f,m=>{s(l).length>0&&m(p)})}h(t,v),G()}Fe(["click"]);var nd=(t,e)=>{t.key==="Enter"&&e()},ad=(t,e)=>{e().forms.store.name="",e().forms.store.comment=""},sd=S(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function od(t,e){W(e,!0);let r=Oe(e,"modalState",7);const n=Q(()=>r()?.hasChanges?.store||!1);async function a(){if(!s(n))return;const T={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(T)}var o=sd(),i=u(o),l=u(i),c=d(u(l),4),v=u(c),f=u(v),p=u(f);ar(p,{class:"h-4 w-4 opacity-50"});var m=d(p,2);m.__keydown=[nd,a];var g=d(f,2);{var y=T=>{{let x=Q(()=>F.uniqueStores.map($=>({id:$,label:$,disabled:$===r().forms.store.name})));Po(T,{get suggestions(){return s(x)},onSuggestionClick:$=>{r().forms.store.name=$.label},buttonVariant:"btn-outline"})}};k(g,T=>{F.uniqueStores.length>0&&T(y)})}var E=d(v,2),w=d(c,2),A=u(w);A.__click=[ad,r],B(()=>A.disabled=r().loading),Ie(m,()=>r().forms.store.name,T=>r().forms.store.name=T),Ie(E,()=>r().forms.store.comment,T=>r().forms.store.comment=T),h(t,o),G()}Fe(["keydown","click"]);var id=S("<fieldset><legend><!> </legend> <!></fieldset>");function Gr(t,e){let r=Oe(e,"bgClass",3,"bg-base-100");var n=id(),a=u(n),o=u(a);{var i=v=>{const f=Q(()=>e.iconComponent);var p=H(),m=I(p);hr(m,()=>s(f),(g,y)=>{y(g,{size:16,class:"mr-1"})}),h(v,p)};k(o,v=>{e.iconComponent&&v(i)})}var l=d(o),c=d(a,2);le(c,()=>e.children??se),B(()=>{Te(n,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Te(a,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),L(l,` ${e.legend??""}`)}),h(t,n)}async function ld(t,e,r,n,a,o){if(!e.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await e.modalState.setOverride(i),b(o,!1)}async function cd(t,e,r){e.modalState&&(await e.modalState.removeOverride(),b(r,!1))}var ud=S('<div class="stat "><div class="stat-title text-sm">Ancienne quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),dd=S('<div class="stat"><div class="stat-title text-sm">"Quantité redéfinie manuellement"</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic"></div></div>'),vd=(t,e)=>b(e,!0),fd=S('<div class="text-error text-sm">Limite de caractères atteinte</div>'),hd=(t,e)=>b(e,!1),pd=S('<span class="loading loading-spinner loading-sm"></span>'),md=S('<span class="loading loading-spinner loading-sm"></span>'),gd=S(`<div><div class="card-body p-4"><div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-end gap-2"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div></div></div>`),_d=S('<div class="stats not-md:stats-vertical shadow"><!> <div class="stat"><div class="stat-title text-sm">Quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">Recettes actuelles</div></div> <!></div> <div class="flex justify-end gap-2"><button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button></div> <!>',1),bd=S('<div class="mb-2 space-y-4"><!></div>');function yd(t,e){W(e,!0);const r=Q(()=>e.modalState.product?.totalNeededOverrideParsed),n=Q(()=>e.modalState.product?.displayTotalOverride);let a=Q(()=>s(r)?.hasUnresolvedChangedSinceOverride),o=O(!1),i=O(Re(e.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||e.modalState.product?.totalNeededArray[0]?.q||0)),l=O(Re(e.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||e.modalState.product?.totalNeededArray[0]?.u||"")),c=O(Re(e.modalState.product?.totalNeededOverrideParsed?.comment||"")),v=Q(()=>s(i)>0&&s(l).trim()!=="");var f=H(),p=I(f);{var m=g=>{var y=bd(),E=u(y);Gr(E,{legend:"Besoin total",children:(w,A)=>{var T=_d(),x=I(T),$=u(x);{var _=M=>{var R=ud(),ie=d(u(R),2),K=u(ie);B(()=>L(K,e.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay)),h(M,R)};k($,M=>{e.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay&&s(a)&&M(_)})}var P=d($,2),N=d(u(P),2),D=u(N),te=d(P,2);{var V=M=>{var R=dd(),ie=d(u(R),2),K=u(ie);B(()=>L(K,s(n))),h(M,R)};k(te,M=>{s(n)&&s(r)&&M(V)})}var U=d(x,2),ne=u(U);ne.__click=[vd,o];var be=d(U,2);{var j=M=>{var R=gd(),ie=u(R),K=u(ie),ee=u(K),re=u(ee);Bc(re,{class:"h-4 w-4 opacity-50"});var Se=d(re,2),z=d(ee,2),Y=u(z);Y.value=Y.__value="";var ae=d(Y);ae.value=ae.__value="kg";var ue=d(ae);ue.value=ue.__value="gr.";var xe=d(ue);xe.value=xe.__value="l.";var Z=d(xe);Z.value=Z.__value="ml";var me=d(Z);me.value=me.__value="unité";var q=d(me);q.value=q.__value="bottes";var X=d(K,2),Ae=u(X),we=d(u(Ae),2),Ee=d(we,2);{var oe=Pe=>{var Ze=fd();h(Pe,Ze)};k(Ee,Pe=>{s(c).length>=250&&Pe(oe)})}var ye=d(X,2),je=u(ye);je.__click=[hd,o];var de=d(je,2);de.__click=[cd,e,o];var We=u(de);{var ce=Pe=>{var Ze=pd();h(Pe,Ze)},$e=Pe=>{var Ze=At();B(()=>L(Ze,`Réinitialiser le total calculé (${e.modalState.product.displayTotalNeeded??""}).`)),h(Pe,Ze)};k(We,Pe=>{e.modalState.loading?Pe(ce):Pe($e,!1)})}var Ue=d(de,2);Ue.__click=[ld,e,i,l,c,o];var _e=u(Ue);{var st=Pe=>{var Ze=md();h(Pe,Ze)},qe=Pe=>{var Ze=At("Appliquer");h(Pe,Ze)};k(_e,Pe=>{e.modalState.loading?Pe(st):Pe(qe,!1)})}B(()=>{Te(R,1,`card border-base-300 border ${s(o)?"bg-base-200":"bg-base-100"}`),de.disabled=e.modalState.loading,Ue.disabled=e.modalState.loading||!s(v)}),Ie(Se,()=>s(i),Pe=>b(i,Pe)),ur(z,()=>s(l),Pe=>b(l,Pe)),Ie(we,()=>s(c),Pe=>b(c,Pe)),h(M,R)};k(be,M=>{s(o)&&M(j)})}B(()=>{L(D,e.modalState.product.displayTotalNeeded),ne.disabled=s(o)}),h(w,T)},$$slots:{default:!0}}),h(g,y)};k(p,g=>{e.modalState.product&&g(m)})}h(t,f),G()}Fe(["click"]);var wd=S('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Sd=S('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),xd=S('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),$d=S('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Pd(t,e){W(e,!0);const r=Q(()=>e.modalState.recipes);var n=$d(),a=I(n);yd(a,{get modalState(){return e.modalState}});var o=d(a,2),i=u(o),l=u(i);fa(l,{class:"h-5 w-5"});var c=d(i,2);{var v=p=>{var m=wd(),g=u(m);tn(g,{class:"mx-auto mb-2 h-12 w-12"}),h(p,m)},f=p=>{var m=xd(),g=u(m),y=d(u(g));ct(y,21,()=>s(r),Zr,(E,w)=>{var A=Sd(),T=u(A),x=u(T),$=d(T),_=u($),P=d($),N=u(P);B(D=>{L(x,`${s(w).r??""} (${(s(w).a||"-")??""} c.)`),L(_,`${(s(w).q||s(w).qEq)??""} ${(s(w).u||s(w).uEq)??""}`),L(N,D)},[()=>Pn(s(w).date)]),h(E,A)}),h(p,m)};k(c,p=>{s(r).length===0?p(v):p(f,!1)})}h(t,n),G()}function Ed(t,e,r){s(e).saveAllChanges().then(()=>{r.onClose()})}var Ad=S('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),kd=S('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Td=(t,e)=>e("recettes"),Nd=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Dd=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Cd=(t,e)=>e("magasins"),Md=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Id=(t,e)=>e("volontaires"),Od=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Rd=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),qd=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),jd=(t,e)=>e("stock"),Ld=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Bd=S('<span class="badge badge-sm badge-secondary ml-1">1</span>'),zd=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Ud=(t,e)=>e("achats"),Hd=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Wd=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Gd=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Qd=S('<span class="loading loading-spinner loading-sm"></span>'),Vd=S('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),Kd=S('<div id="product_modal"><div class="modal-box flex fixed top-0 overflow-auto h-lvh w-lvw flex-col md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Yd(t,e){W(e,!0);let r=Oe(e,"initialTab",3,"recettes"),n=Q(()=>$u(e.productId)),a=O(Re(r()));function o(w){b(a,w,!0)}var i=Kd(),l=u(i),c=u(l),v=u(c);{var f=w=>{var A=Ad(),T=I(A),x=u(T),$=d(T,2),_=u($),P=u(_),N=d(_,2),D=d(u(N));B(()=>{L(x,s(n).product?.productName),L(P,s(n).product?.productType),L(D,` ${s(n).product?.displayTotalNeeded??""}`)}),h(w,A)},p=w=>{var A=kd();h(w,A)};k(v,w=>{s(n)&&s(n).product?w(f):w(p,!1)})}var m=d(v,2);m.__click=function(...w){e.onClose?.apply(this,w)};var g=u(m);qt(g,{class:"h-4 w-4"});var y=d(c,2);{var E=w=>{var A=Vd(),T=I(A),x=u(T);x.__click=[Td,o];var $=u(x);fa($,{class:"mr-1 h-5 w-5"});var _=d($,2);{var P=ce=>{var $e=Nd(),Ue=u($e);B(()=>L(Ue,s(n).product?.nbRecipes)),h(ce,$e)},N=ce=>{var $e=Dd();h(ce,$e)};k(_,ce=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?ce(P):ce(N,!1)})}var D=d(x,2);D.__click=[Cd,o];var te=u(D);ar(te,{class:"mr-1 h-5 w-5"});var V=d(te,2);{var U=ce=>{var $e=Md();h(ce,$e)};k(V,ce=>{s(n).hasChanges?.store&&ce(U)})}var ne=d(D,2);ne.__click=[Id,o];var be=u(ne);Gn(be,{class:"mr-1 h-5 w-5"});var j=d(be,2);{var M=ce=>{var $e=Od();h(ce,$e)},R=ce=>{var $e=H(),Ue=I($e);{var _e=qe=>{var Pe=Rd(),Ze=u(Pe);B(()=>L(Ze,s(n).product?.who.length)),h(qe,Pe)},st=qe=>{var Pe=qd();h(qe,Pe)};k(Ue,qe=>{s(n).product?.who&&s(n).product?.who.length>0?qe(_e):qe(st,!1)},!0)}h(ce,$e)};k(j,ce=>{s(n).hasChanges?.who?ce(M):ce(R,!1)})}var ie=d(ne,2);ie.__click=[jd,o];var K=u(ie);Hn(K,{class:"mr-1 h-5 w-5"});var ee=d(K,2);{var re=ce=>{var $e=Ld();h(ce,$e)},Se=ce=>{var $e=H(),Ue=I($e);{var _e=qe=>{var Pe=Bd();h(qe,Pe)},st=qe=>{var Pe=zd();h(qe,Pe)};k(Ue,qe=>{s(n).stockParsed?qe(_e):qe(st,!1)},!0)}h(ce,$e)};k(ee,ce=>{s(n).hasChanges?.stock?ce(re):ce(Se,!1)})}var z=d(ie,2);z.__click=[Ud,o];var Y=u(z);tr(Y,{class:"mr-1 h-5 w-5"});var ae=d(Y,2);{var ue=ce=>{var $e=Hd(),Ue=u($e);B(()=>L(Ue,s(n).purchasesList.length)),h(ce,$e)},xe=ce=>{var $e=Wd();h(ce,$e)};k(ae,ce=>{s(n).purchasesList.length>0?ce(ue):ce(xe,!1)})}var Z=d(T,2),me=u(Z);{var q=ce=>{var $e=Gd(),Ue=u($e);qt(Ue,{class:"h-4 w-4"});var _e=d(Ue,2),st=u(_e);B(()=>L(st,`erreur : ${s(n).error??""}`)),h(ce,$e)};k(me,ce=>{s(n).error&&ce(q)})}var X=d(me,2),Ae=u(X);Fi(Ae,()=>s(a),ce=>{var $e=H(),Ue=I($e);{var _e=qe=>{Pd(qe,{get modalState(){return s(n)}})},st=qe=>{var Pe=H(),Ze=I(Pe);{var ge=Ne=>{Lu(Ne,{get modalState(){return s(n)}})},ke=Ne=>{var Ge=H(),Ke=I(Ge);{var _t=tt=>{Ku(tt,{get modalState(){return s(n)}})},Tt=tt=>{var bt=H(),Xe=I(bt);{var ot=ft=>{Xu(ft,{get modalState(){return s(n)}})},jt=ft=>{var Lt=H(),Bt=I(Lt);{var Jt=Nt=>{od(Nt,{get modalState(){return s(n)}})};k(Bt,Nt=>{s(a)==="magasins"&&Nt(Jt)},!0)}h(ft,Lt)};k(Xe,ft=>{s(a)==="volontaires"?ft(ot):ft(jt,!1)},!0)}h(tt,bt)};k(Ke,tt=>{s(a)==="stock"?tt(_t):tt(Tt,!1)},!0)}h(Ne,Ge)};k(Ze,Ne=>{s(a)==="achats"?Ne(ge):Ne(ke,!1)},!0)}h(qe,Pe)};k(Ue,qe=>{s(a)==="recettes"?qe(_e):qe(st,!1)})}h(ce,$e)});var we=d(Z,2),Ee=u(we);Ee.__click=function(...ce){e.onClose?.apply(this,ce)};var oe=u(Ee),ye=d(Ee,2);ye.__click=[Ed,n,e];var je=u(ye);{var de=ce=>{var $e=Qd();h(ce,$e)},We=ce=>{var $e=At("Tout enregistrer");h(ce,$e)};k(je,ce=>{s(n).loading?ce(de):ce(We,!1)})}B(()=>{Te(x,1,`tab ${s(a)==="recettes"?"tab-active":""}`),Te(D,1,`tab ${s(a)==="magasins"?"tab-active":""}`),Te(ne,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),Te(ie,1,`tab ${s(a)==="stock"?"tab-active":""}`),Te(z,1,`tab ${s(a)==="achats"?"tab-active":""}`),L(oe,s(n)?.hasAnyChanges?"Annuler":"Fermer"),ye.disabled=s(n).loading||!s(n).hasAnyChanges}),h(w,A)};k(y,w=>{s(n)&&w(E)})}B(()=>Te(i,1,`modal ${(e.productId&&"modal-open")??""}`)),h(t,i),G()}Fe(["click"]);var Jd=(t,e,r)=>e(r),Zd=S("<button><span> </span> <!></button>"),Xd=S('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),Fd=(t,e)=>e(),ev=S('<button class="btn btn-xs btn-link text-primary/80" type="button">Dates à venir</button>'),tv=(t,e)=>e(),rv=S('<button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button>'),nv=S('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),av=S('<div class="flex justify-end gap-2 flex-wrap"><!> <!></div>'),sv=S('<div class=" flex flex-wrap gap-1"></div> <!>',1);function ov(t,e){W(e,!0);let r=Oe(e,"availableDates",19,()=>[]),n=Oe(e,"currentRange",19,()=>({start:null,end:null})),a=O(Re(n().start)),o=O(Re(n().end));const i=Q(()=>r().length>0&&s(a)===r()[0]&&s(o)===r()[r().length-1]),l=Q(()=>{if(r().length===0)return!1;const x=new Date;x.setHours(0,0,0,0);const _=[...r()].sort().find(P=>new Date(P)>=x);return _&&s(a)===_&&s(o)===r()[r().length-1]}),c=Q(()=>{if(r().length===0)return!0;const x=new Date(r()[r().length-1]);return x.setHours(23,59,59,999),x<new Date}),v=Q(()=>{if(r().length===0)return!1;const x=new Date;return x.setHours(0,0,0,0),[...r()].some($=>new Date($)>=x)});or(()=>{b(a,n().start,!0),b(o,n().end,!0)});function f(x){s(a)===x&&s(o)===x?m():new Date(x)<new Date(s(a))?b(a,x,!0):(new Date(x)>new Date(s(o))||b(a,x,!0),b(o,x,!0)),e.onRangeChange(s(a),s(o))}function p(x){return new Date(x)>=new Date(s(a))&&new Date(x)<=new Date(s(o))?"btn-soft btn-secondary":"btn-dash btn-secondary opacity-80"}function m(){r().length!==0&&(b(a,r()[0],!0),b(o,r()[r().length-1],!0),e.onRangeChange(s(a),s(o)))}function g(){if(r().length===0)return;const x=new Date;x.setHours(0,0,0,0);const _=[...r()].sort().find(P=>new Date(P)>=x);_&&(b(a,_,!0),b(o,r()[r().length-1],!0),e.onRangeChange(s(a),s(o)))}var y=sv(),E=I(y);ct(E,22,r,x=>x,(x,$)=>{var _=Zd();_.__click=[Jd,f,$];var P=u(_),N=u(P),D=d(P,2);{var te=U=>{So(U,{size:16})},V=U=>{var ne=H(),be=I(ne);{var j=R=>{bo(R,{size:16})},M=R=>{var ie=H(),K=I(ie);{var ee=re=>{Tc(re,{size:16})};k(K,re=>{On($)==="cloud"&&re(ee)},!0)}h(R,ie)};k(be,R=>{On($)==="moon"?R(j):R(M,!1)},!0)}h(U,ne)};k(D,U=>{On($)==="sun"?U(te):U(V,!1)})}B((U,ne)=>{Te(_,1,`btn btn-sm ${U??""}`),L(N,ne)},[()=>p($),()=>Kl($)]),h(x,_)});var w=d(E,2);{var A=x=>{var $=Xd();h(x,$)},T=x=>{var $=av(),_=u($);{var P=V=>{var U=ev();U.__click=[Fd,g],h(V,U)};k(_,V=>{s(v)&&!s(l)&&V(P)})}var N=d(_,2);{var D=V=>{var U=rv();U.__click=[tv,m],h(V,U)},te=V=>{var U=nv();h(V,U)};k(N,V=>{s(i)?V(te,!1):V(D)})}h(x,$)};k(w,x=>{s(c)?x(A):x(T,!1)})}h(t,y),G()}Fe(["click"]);var iv=()=>F.clearFilters(),lv=t=>F.setSearchQuery(t.currentTarget.value),cv=()=>F.setSearchQuery(""),uv=()=>F.setGroupBy("none"),dv=()=>F.setGroupBy("store"),vv=()=>F.setGroupBy("productType"),fv=(t,e)=>F.toggleProductType(e),hv=S("<button><!> </button>"),pv=()=>F.toggleTemperature("frais"),mv=()=>F.toggleTemperature("surgele"),gv=()=>F.clearTypeAndTemperatureFilters(),_v=S('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),bv=S('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),yv=S('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div> <!>',1),wv=(t,e)=>F.toggleStore(e),Sv=S("<button> </button>"),xv=()=>F.clearStoreFilters(),$v=S('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Pv=S('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Ev=(t,e)=>F.toggleWho(e),Av=S("<button> </button>"),kv=()=>F.clearWhoFilters(),Tv=S('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),Nv=S('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Dv=S('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Cv(t,e){W(e,!0);const r=Q(()=>F.filters),n=Q(()=>F.uniqueStores),a=Q(()=>F.uniqueWho),o=Q(()=>F.uniqueProductTypes);var i=Dv(),l=I(i),c=u(l),v=u(c);mo(v,{class:"h-5 w-5"});var f=d(c,2);f.__click=[iv];var p=u(f);on(p,{class:"h-4 w-4"});var m=d(l,2),g=u(m),y=d(u(g),2),E=u(y);Qc(E,{class:"h-4 w-4"});var w=d(E,2);w.__input=[lv];var A=d(w,2);A.__click=[cv];var T=u(A);qt(T,{class:"h-4 w-4"});var x=d(g,2),$=d(u(x),2),_=u($);_.__change=[uv];var P=d(_,2);P.__change=[dv];var N=d(P,2);N.__change=[vv];var D=d(x,2);{var te=R=>{Gr(R,{legend:"Date incluses",bgClass:"bg-base-100",children:(ie,K)=>{ov(ie,{get availableDates(){return F.availableDates},get currentRange(){return F.dateRange},onRangeChange:(ee,re)=>F.setDateRange(ee,re)})},$$slots:{default:!0}})};k(D,R=>{F.hasSingleDateEvent||R(te)})}var V=d(D,2);{var U=R=>{Gr(R,{legend:"Types & Température",get iconComponent(){return Vc},children:(ie,K)=>{var ee=yv(),re=I(ee);ct(re,20,()=>s(o),q=>q,(q,X)=>{const Ae=Q(()=>Qn(X));var we=hv();we.__click=[fv,X];var Ee=u(we);hr(Ee,()=>s(Ae).icon,(ye,je)=>{je(ye,{class:"mr-1 h-5 w-5"})});var oe=d(Ee);B(ye=>{Te(we,1,`btn btn-sm ${ye??""}`),L(oe,` ${s(Ae).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-secondary":s(r).selectedProductTypes.includes(X)?"btn-secondary":"btn-dash btn-secondary"]),h(q,we)});var Se=d(re,2),z=u(Se);z.__click=[pv];var Y=u(z);yo(Y,{class:"h-5 w-5"});var ae=d(z,2);ae.__click=[mv];var ue=u(ae);wo(ue,{class:"h-5 w-5"});var xe=d(Se,2);{var Z=q=>{var X=_v();X.__click=[gv];var Ae=u(X);on(Ae,{size:16}),h(q,X)},me=q=>{var X=bv();h(q,X)};k(xe,q=>{s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0?q(Z):q(me,!1)})}B((q,X)=>{Te(z,1,`btn btn-sm ${q??""}`),Te(ae,1,`btn btn-sm ${X??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(ie,ee)},$$slots:{default:!0}})};k(V,R=>{s(o).length>0&&R(U)})}var ne=d(V,2);{var be=R=>{Gr(R,{legend:"Magasins",get iconComponent(){return ar},children:(ie,K)=>{var ee=Pv(),re=u(ee);ct(re,16,()=>s(n),Y=>Y,(Y,ae)=>{var ue=Sv();ue.__click=[wv,ae];var xe=u(ue);B(Z=>{Te(ue,1,`btn btn-sm ${Z??""}`),L(xe,ae)},[()=>s(r).selectedStores.length===0?"btn-soft btn-secondary":s(r).selectedStores.includes(ae)?"btn-secondary":"btn-dash btn-secondary"]),h(Y,ue)});var Se=d(re,2);{var z=Y=>{var ae=$v();ae.__click=[xv];var ue=u(ae);on(ue,{size:16}),h(Y,ae)};k(Se,Y=>{s(r).selectedStores.length>0&&Y(z)})}h(ie,ee)},$$slots:{default:!0}})};k(ne,R=>{s(n).length>0&&R(be)})}var j=d(ne,2);{var M=R=>{Gr(R,{legend:"Qui",get iconComponent(){return rn},children:(ie,K)=>{var ee=Nv(),re=u(ee);ct(re,16,()=>s(a),Y=>Y,(Y,ae)=>{var ue=Av();ue.__click=[Ev,ae];var xe=u(ue);B(Z=>{Te(ue,1,`btn btn-sm ${Z??""}`),L(xe,ae)},[()=>s(r).selectedWho.length===0?" btn-soft btn-secondary":s(r).selectedWho.includes(ae)?" btn-secondary":"btn-dash btn-secondary"]),h(Y,ue)});var Se=d(re,2);{var z=Y=>{var ae=Tv();ae.__click=[kv];var ue=u(ae);on(ue,{size:16}),h(Y,ae)};k(Se,Y=>{s(r).selectedWho.length>0&&Y(z)})}h(ie,ee)},$$slots:{default:!0}})};k(j,R=>{s(a).length>0&&R(M)})}B(()=>{f.disabled=!F.hasFilters,ll(w,s(r).searchQuery),A.disabled=!s(r).searchQuery,Nn(_,s(r).groupBy==="none"),Nn(P,s(r).groupBy==="store"),Nn(N,s(r).groupBy==="productType")}),h(t,i),G()}Fe(["click","input","change"]);var Mv=S('<div class="tooltip text-xs font-normal"><!></div>');function Iv(t,e){let r=Oe(e,"iconSize",3,24),n=e.icon||void 0;var a=Mv(),o=u(a);{var i=l=>{n(l,{get size(){return r()},class:`align-top
`})};k(o,l=>{e.icon&&l(i)})}B(()=>nr(a,"data-tip",e.tip)),h(t,a)}var Ov=S('<div class="text-neutral-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Rv=(t,e,r)=>e.onOpenGroupEditModal("store",s(r).map(n=>n.$id),s(r)),qv=(t,e,r)=>e.onOpenGroupEditModal("who",s(r).map(n=>n.$id),s(r)),jv=(t,e,r)=>e.onOpenGroupPurchaseModal(s(r)),Lv=S(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),Bv=S('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 @md:min-w-48"><!></div> <div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div></div>'),zv=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),Uv=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),Hv=S('<div class="text-base-content/60 text-sm font-normal"> </div>'),Wv=S('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),Gv=S('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),Qv=S('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),Vv=S('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),Kv=S('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),Yv=S('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),Jv=(t,e,r)=>e.onOpenModal(s(r).$id,"magasins"),Zv=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"magasins"),Xv=S('<div class="ml-1"><!></div>'),Fv=S('<div class="ml-1"> </div> <!>',1),ef=S('<div class="ml-1 text-sm font-medium">?</div>'),tf=(t,e,r)=>e.onOpenModal(s(r).$id,"volontaires"),rf=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"volontaires"),nf=S('<span class="text-base-content/50 text-xs"> </span>'),af=S('<div class="ml-1 flex gap-1"> <!></div>'),sf=S('<div class="ml-1 text-sm font-medium">?</div>'),of=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),lf=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),cf=S('<div class="flex items-center gap-2 tooltip" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),uf=S("<span> </span>"),df=S('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),vf=(t,e,r)=>{t.stopPropagation(),e.onQuickValidation(s(r))},ff=S('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M.625 0a.625.625 0 1 0 0 1.25h1.818l.205 1.94l.644 6.105a1.626 1.626 0 0 0 1.619 1.455h6.208c.746 0 1.397-.506 1.579-1.23l1.253-5a1.626 1.626 0 0 0-1.579-2.02h-8.54L3.627.56A.625.625 0 0 0 3.006 0zm3.91 9.164L3.964 3.75h8.408c.247 0 .425.23.366.466l-1.253 5a.38.38 0 0 1-.366.284H4.911a.376.376 0 0 1-.376-.336m5.72-3.134a.75.75 0 0 0-1.129-.988l-1.48 1.69l-.526-.395a.75.75 0 1 0-.9 1.2l1.083.813a.75.75 0 0 0 1.015-.106zm1.816 6.845a1.125 1.125 0 1 0-2.25 0a1.125 1.125 0 0 0 2.25 0M4.446 11.75a1.125 1.125 0 1 1 0 2.25a1.125 1.125 0 0 1 0-2.25" clip-rule="evenodd"></path></svg> <span class="text-xs"> </span> <!></button>'),hf=S(`<div id="override_alert" class="alert alert-warning px-1 py-0.5 alert-soft mt-1"><!> <span>Les quantités des menus ont été modifiées depuis l'attribution manuelle des "besoins"</span></div>`),pf=(t,e,r)=>e.onOpenModal(s(r).$id,"achats"),mf=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"achats"),gf=S('<div><!> <span class="text-sm font-medium text-nowrap"> </span></div>'),_f=S('<span class="text-base-content/50 text-xs italic">aucun</span>'),bf=S('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div></div> <div class="flex flex-wrap gap-3 min-h-14" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex gap-x-4 gap-y-0 flex-wrap"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="flex items-center gap-4 self-end ms-auto"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex-1 min-w-[200px] items-center justify-between gap-2 flex cursor-pointer rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap gap-0 items-start self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div class="text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity group-hover:opacity-100 sm:opacity-0">ajouter un achat</div></div> <div class="flex flex-wrap gap-1.5"><!> <!></div></div></div></div></div>'),yf=S('<!> <div class="space-y-1"></div>',1),wf=S('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Sf=S('<div class="space-y-4 rounded-lg"></div> <!>',1);function xf(t,e){W(e,!0);const r={Package:tn,MessageCircleQuestionMark:jc,ShoppingCart:tr,Clock:kc,CircleCheck:$c,CircleX:Pc,ClipboardCheck:Ec,PackageCheck:Lc},n={quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedAvailableQuantities:"Équilibré",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map},a=Q(()=>F.groupedFilteredProducts),o=Q(()=>F.filters);var i=Sf(),l=I(i);ct(l,21,()=>Object.entries(s(a)),([f,p])=>f,(f,p)=>{var m=Q(()=>as(s(p),2));let g=()=>s(m)[0];const E=Q(()=>s(m)[1]);var w=yf(),A=I(w);{var T=$=>{const _=Q(()=>Qn(g()));var P=Bv(),N=u(P),D=u(N);{var te=re=>{var Se=At();B(()=>L(Se,`🏪 ${g()??""} (${s(E).length??""})`)),h(re,Se)},V=re=>{var Se=H(),z=I(Se);{var Y=ue=>{var xe=Ov(),Z=u(xe);hr(Z,()=>s(_).icon,(we,Ee)=>{Ee(we,{class:"h-4 w-4"})});var me=d(Z,2),q=u(me),X=d(me,2),Ae=u(X);B(()=>{L(q,s(_).displayName),L(Ae,`(${s(E).length??""})`)}),h(ue,xe)},ae=ue=>{var xe=At();B(()=>L(xe,`📦 ${g()??""} (${s(E).length??""})`)),h(ue,xe)};k(z,ue=>{s(o).groupBy==="productType"?ue(Y):ue(ae,!1)},!0)}h(re,Se)};k(D,re=>{s(o).groupBy==="store"?re(te):re(V,!1)})}var U=d(N,2),ne=u(U);ne.__click=[Rv,e,E];var be=u(ne);ar(be,{size:16});var j=d(be,4);Wn(j,{size:16});var M=d(ne,2);M.__click=[qv,e,E];var R=u(M);Gn(R,{size:16});var ie=d(R,4);Wn(ie,{size:16});var K=d(M,2);{var ee=re=>{var Se=Lv();Se.__click=[jv,e,E];var z=u(Se);tr(z,{size:16});var Y=d(z,4);Ya(Y,{size:16}),h(re,Se)};k(K,re=>{s(E).some(Se=>Se.displayMissingQuantity!=="✅ Complet")&&re(ee)})}h($,P)};k(A,$=>{g()!==""&&$(T)})}var x=d(A,2);ct(x,21,()=>s(E),$=>$.$id,($,_)=>{const P=Q(()=>F.productsStatsByDateRange.get(s(_).$id)||n),N=Q(()=>Qn(s(_).productType)),D=Q(()=>Su(s(_).purchases||[])),te=Q(()=>s(_).totalNeededOverrideParsed);var V=bf(),U=u(V),ne=u(U),be=u(ne);be.__click=[zv,e,_],be.__keydown=[Uv,e,_];var j=u(be),M=u(j);hr(M,()=>s(N).icon,(J,ve)=>{ve(J,{class:"text-base-content/80 h-4 w-4"})});var R=d(M),ie=d(R);{var K=J=>{var ve=Hv(),Ce=u(ve);B(()=>L(Ce,`Ancien: ${s(_).previousNames[0]??""}`)),h(J,ve)};k(ie,J=>{s(_).previousNames&&s(_).previousNames.length>0&&J(K)})}var ee=d(j,2),re=u(ee);{var Se=J=>{var ve=Wv(),Ce=u(ve);yo(Ce,{class:"text-success h-4 w-4"}),h(J,ve)};k(re,J=>{s(_).pFrais&&J(Se)})}var z=d(re,2);{var Y=J=>{var ve=Gv(),Ce=u(ve);wo(Ce,{class:"text-info h-4 w-4"}),h(J,ve)};k(z,J=>{s(_).pSurgel&&J(Y)})}var ae=d(ee,2);{var ue=J=>{var ve=Qv(),Ce=u(ve);go(Ce,{class:"h-4 w-4 animate-spin"}),h(J,ve)};k(ae,J=>{s(_).status==="isSyncing"&&J(ue)})}var xe=d(ae,2);{var Z=J=>{var ve=Yv(),Ce=u(ve);ct(Ce,20,()=>s(P).concernedDates,Qe=>Qe,(Qe,Ve)=>{const Be=Q(()=>s(P).recipesByDate.get(Ve)||[]);var Ye=H(),He=I(Ye);{var Dt=$t=>{var rt=Vv(),zt=u(rt),ir=u(zt);B((Ct,Br)=>{nr(rt,"data-tip",Ct),L(ir,Br)},[()=>s(Be).map(Ct=>Ct.r).join(", "),()=>new Date(Ve).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h($t,rt)},Lr=$t=>{var rt=Kv(),zt=u(rt);B(ir=>L(zt,ir),[()=>new Date(Ve).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h($t,rt)};k(He,$t=>{s(Be).length>0?$t(Dt):$t(Lr,!1)})}h(Qe,Ye)}),h(J,ve)};k(xe,J=>{s(P).concernedDates.length>0&&J(Z)})}var me=d(be,2),q=u(me);q.__click=[Jv,e,_],q.__keydown=[Zv,e,_];var X=u(q);ar(X,{size:18});var Ae=d(X,2);{var we=J=>{var ve=Fv(),Ce=I(ve),Qe=u(Ce),Ve=d(Ce,2);{var Be=Ye=>{var He=Xv(),Dt=u(He);Iv(Dt,{get tip(){return s(_).storeInfo.storeComment},get icon(){return qc},iconSize:14}),h(Ye,He)};k(Ve,Ye=>{s(_).storeInfo?.storeComment&&Ye(Be)})}B(()=>L(Qe,s(_).storeInfo.storeName)),h(J,ve)},Ee=J=>{var ve=ef();h(J,ve)};k(Ae,J=>{s(_).storeInfo?.storeName?J(we):J(Ee,!1)})}var oe=d(q,2);oe.__click=[tf,e,_],oe.__keydown=[rf,e,_];var ye=u(oe);Gn(ye,{size:18});var je=d(ye,2);{var de=J=>{var ve=af(),Ce=u(ve),Qe=d(Ce);{var Ve=Be=>{var Ye=nf(),He=u(Ye);B(()=>L(He,`+${s(_).who.length-2}`)),h(Be,Ye)};k(Qe,Be=>{s(_).who.length>2&&Be(Ve)})}B(Be=>L(Ce,`${Be??""} `),[()=>s(_).who.slice(0,2).map(Be=>Be.slice(0,3)).join(" | ")]),h(J,ve)},We=J=>{var ve=sf();h(J,ve)};k(je,J=>{s(_).who&&s(_).who.length>0?J(de):J(We,!1)})}var ce=d(ne,2),$e=u(ce);$e.__click=[of,e,_],$e.__keydown=[lf,e,_];var Ue=u($e),_e=u(Ue),st=u(_e);Oc(st,{class:"h-4 w-4"});var qe=d(_e,2),Pe=u(qe),Ze=u(Pe);{var ge=J=>{var ve=cf(),Ce=u(ve),Qe=u(Ce),Ve=d(Ce,2);Ac(Ve,{class:"h-4 w-4"});var Be=d(Ve);B(()=>{L(Qe,s(P).formattedQuantities),L(Be,` ${s(te).totalOverride.q??""} ${s(te).totalOverride.u??""}`)}),h(J,ve)},ke=J=>{var ve=uf(),Ce=u(ve);B(()=>L(Ce,s(P).formattedQuantities)),h(J,ve)};k(Ze,J=>{s(te)?.totalOverride?J(ge):J(ke,!1)})}var Ne=d(Pe,2);{var Ge=J=>{var ve=df(),Ce=u(ve),Qe=u(Ce),Ve=d(Qe);fa(Ve,{class:"h-3 w-3"});var Be=d(Ce,2),Ye=u(Be),He=d(Ye);Kc(He,{class:"h-3 w-3"}),B(()=>{L(Qe,`${s(P).nbRecipes??""} `),L(Ye,`${s(P).totalAssiettes??""} `)}),h(J,ve)};k(Ne,J=>{(s(P).nbRecipes||s(P).totalAssiettes)&&J(Ge)})}var Ke=d(Ue,2);{var _t=J=>{var ve=ff();ve.__click=[vf,e,_];var Ce=d(u(ve),2),Qe=u(Ce),Ve=d(Ce,2);{var Be=He=>{Sc(He,{size:18})},Ye=He=>{xc(He,{size:18})};k(Ve,He=>{Ir.isMobile?He(Be):He(Ye,!1)})}B(()=>{nr(ve,"title",`Acheter le manquant (${s(P).formattedAvailableQuantities??""})`),L(Qe,s(P).formattedAvailableQuantities)}),h(J,ve)},Tt=J=>{Ya(J,{size:24,class:"text-success ms-auto"})};k(Ke,J=>{s(P).hasMissing?J(_t):J(Tt,!1)})}var tt=d(Ke,2);{var bt=J=>{var ve=hf(),Ce=u(ve);wc(Ce,{size:18}),h(J,ve)};k(tt,J=>{s(te)?.hasUnresolvedChangedSinceOverride&&J(bt)})}var Xe=d($e,2);Xe.__click=[pf,e,_],Xe.__keydown=[mf,e,_];var ot=u(Xe),jt=u(ot),ft=u(jt);tr(ft,{class:"h-4 w-4"});var Lt=d(ot,2),Bt=u(Lt);ct(Bt,17,()=>s(D),Zr,(J,ve)=>{const Ce=Q(()=>r[s(ve).icon]);var Qe=gf(),Ve=u(Qe);hr(Ve,()=>s(Ce),(He,Dt)=>{Dt(He,{class:"h-4 w-4"})});var Be=d(Ve,2),Ye=u(Be);B(He=>{Te(Qe,1,`badge badge-outline flex items-center gap-1 ${s(ve).badgeClass??""}`),L(Ye,He)},[()=>ha(s(ve).quantity,s(ve).unit)]),h(J,Qe)});var Jt=d(Bt,2);{var Nt=J=>{var ve=_f();h(J,ve)};k(Jt,J=>{s(D).length===0&&J(Nt)})}B(()=>{Te(V,1,`card bg-base-100 border-base-300 ${s(_).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),L(R,`${s(_).productName??""} `),Te(q,1,`btn btn-soft btn-sm group relative ${s(_).storeInfo?.storeName?"btn-success":""}`),Te(oe,1,`btn btn-sm btn-soft group relative ${s(_).who&&s(_).who?.length>0?"btn-success":""}`),Te(Pe,1,`font-bold text-base ${s(P).hasMissing?"text-error":"text-success"}`)}),h($,V)}),h(f,w)});var c=d(l,2);{var v=f=>{var p=wf();h(f,p)};k(c,f=>{Object.values(s(a)).flat().length===0&&f(v)})}h(t,i),G()}Fe(["click","keydown"]);async function $f(t,e,r,n,a,o,i,l,c){if(!(!s(e)||s(r))){b(n,null),b(a,null);try{const v=s(o).map(g=>g.id),f=i.products.filter(g=>v.includes(g.$id));F.setSyncStatus(v,!0),i.onClose();const p={storeName:s(l).trim(),storeComment:s(c).trim()},m=await uo(v,f,p);if(b(a,m,!0),m.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${m.updatedCount} produits modifiés`),i.onSuccess?.(m);else throw new Error(m.error||"Erreur lors de la mise à jour")}catch(v){const f=v instanceof Error?v.message:"Erreur inconnue";b(n,f,!0),console.error("[StoreEditModal] Erreur mise à jour:",v),F.clearSyncStatus()}finally{b(r,!1)}}}function Fa(t,e,r){s(e)||r.onClose()}var Pf=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Ef=(t,e)=>b(e,"empty"),Af=(t,e)=>b(e,"all"),kf=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Tf=S("<!> ",1),Nf=S('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Df(t,e){W(e,!0);let r=O(!1),n=O(null),a=O(null),o=O(Re(e.products.length>0&&e.products[0].storeInfo?e.products[0].storeInfo.storeName:"")),i=O(Re(e.products.length>0&&e.products[0].storeInfo&&e.products[0].storeInfo.storeComment||"")),l=O(Re({})),c=O("empty");or(()=>{const Z={};e.products.forEach(me=>{e.productIds.includes(me.$id)&&(s(c)==="empty"?Z[me.$id]=!me.storeInfo||!me.storeInfo.storeName:Z[me.$id]=!0)}),b(l,Z,!0)});const v=Q(()=>e.products.map(Z=>({id:Z.$id,label:Z.productName,title:Z.productName,selected:s(l)[Z.$id]}))),f=Q(()=>s(v).filter(Z=>Z.selected)),p=Q(()=>`Attribuer un magasin (${s(f).length} produits sélectionnés)`),m=Q(()=>s(f).length===0?!1:s(o).trim().length>0);function g(Z){s(l)[Z]=!s(l)[Z]}var y=Nf(),E=u(y),w=u(E),A=u(w),T=u(A),x=d(A,2);x.__click=[Fa,r,e];var $=u(x);qt($,{class:"h-4 w-4"});var _=d(w,2),P=u(_);{var N=Z=>{var me=Pf(),q=u(me);$n(q,{class:"h-4 w-4"});var X=d(q,2),Ae=u(X);B(()=>L(Ae,s(n))),h(Z,me)};k(P,Z=>{s(n)&&Z(N)})}var D=d(P,2),te=u(D),V=u(te),U=u(V);ar(U,{class:"h-4 w-4 opacity-50"});var ne=d(U,2),be=d(V,2);{let Z=Q(()=>F.uniqueStores.map(me=>({id:me,label:me,disabled:me===s(o)})));Po(be,{get suggestions(){return s(Z)},onSuggestionClick:me=>{b(o,me.label,!0)},title:"Suggestions de magasins :"})}var j=d(te,2),M=u(j),R=d(D,2),ie=d(u(R),2),K=u(ie);K.__click=[Ef,c];var ee=d(K,2);ee.__click=[Af,c];var re=d(ie,2);Fr(re,{get items(){return s(v)},onToggleItem:g,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Se=d(_,2),z=u(Se);z.__click=[Fa,r,e];var Y=d(z,2);Y.__click=[$f,m,r,n,a,f,e,o,i];var ae=u(Y);{var ue=Z=>{var me=kf();h(Z,me)},xe=Z=>{var me=Tf(),q=I(me);Xr(q,{class:"h-4 w-4"});var X=d(q);B(()=>L(X,` Appliquer à ${s(f).length??""} produit(s)`)),h(Z,me)};k(ae,Z=>{s(r)?Z(ue):Z(xe,!1)})}B(()=>{L(T,s(p)),x.disabled=s(r),ne.disabled=s(r),M.disabled=s(r),Te(K,1,`tab ${s(c)==="empty"?"tab-active":""}`),Te(ee,1,`tab ${s(c)==="all"?"tab-active":""}`),z.disabled=s(r),Y.disabled=s(r)||!s(m)}),Ie(ne,()=>s(o),Z=>b(o,Z)),Ie(M,()=>s(i),Z=>b(i,Z)),h(t,y),G()}Fe(["click"]);async function Cf(t,e,r,n,a,o,i,l){if(!(!s(e)||s(r))){b(n,null),b(a,null);try{const c=s(o).map(p=>p.id),v=i.products.filter(p=>c.includes(p.$id));F.setSyncStatus(c,!0),i.onClose();const f=await vo(c,v,s(l),"replace");if(b(a,f,!0),f.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${f.updatedCount} produits modifiés`),i.onSuccess?.(f);else throw new Error(f.error||"Erreur lors de la mise à jour")}catch(c){const v=c instanceof Error?c.message:"Erreur inconnue";b(n,v,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),F.clearSyncStatus()}finally{b(r,!1)}}}function es(t,e,r){s(e)||r.onClose()}var Mf=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),If=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},Of=(t,e)=>b(e,"empty"),Rf=(t,e)=>b(e,"all"),qf=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),jf=S("<!> ",1),Lf=S('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Bf(t,e){W(e,!0);let r=O(!1),n=O(null),a=O(null),o=O(Re([])),i=O(""),l=O("empty"),c=O(Re({}));or(()=>{const oe={};e.products.forEach(ye=>{e.productIds.includes(ye.$id)&&(s(l)==="empty"?oe[ye.$id]=!ye.who||ye.who.length===0:oe[ye.$id]=!0)}),b(c,oe,!0)});const v=Q(()=>e.products.map(oe=>({id:oe.$id,label:oe.productName,title:oe.productName,selected:s(c)[oe.$id]}))),f=Q(()=>s(v).filter(oe=>oe.selected)),p=Q(()=>{const oe=new Set([...F.uniqueWho,...s(o)]);return Array.from(oe).map(ye=>({id:ye,label:ye,selected:s(o).includes(ye)}))}),m=Q(()=>`Gérer les volontaires (${s(f).length} produits sélectionnés)`),g=Q(()=>s(f).length===0?!1:s(o).length>0);function y(oe){const ye=oe.trim();ye&&!s(o).includes(ye)&&b(o,[...s(o),ye],!0)}function E(oe){b(o,s(o).filter(ye=>ye!==oe),!0)}function w(oe){s(o).includes(oe)?E(oe):y(oe)}function A(){s(i).trim()&&(y(s(i)),b(i,""))}function T(oe){s(c)[oe]=!s(c)[oe]}var x=Lf(),$=u(x),_=u($),P=u(_),N=u(P),D=d(P,2);D.__click=[es,r,e];var te=u(D);qt(te,{class:"h-4 w-4"});var V=d(_,2),U=u(V);{var ne=oe=>{var ye=Mf(),je=u(ye);$n(je,{class:"h-4 w-4"});var de=d(je,2),We=u(de);B(()=>L(We,s(n))),h(oe,ye)};k(U,oe=>{s(n)&&oe(ne)})}var be=d(U,2),j=u(be),M=u(j),R=u(M),ie=u(R);rn(ie,{class:"h-4 w-4 opacity-50"});var K=d(ie,2);K.__keydown=[If,A];var ee=d(R,2);ee.__click=A;var re=u(ee);xo(re,{size:16});var Se=d(M,2),z=d(u(Se),2);Fr(z,{get items(){return s(p)},onToggleItem:w,showIcon:!0});var Y=d(be,2),ae=d(u(Y),2),ue=u(ae);ue.__click=[Of,l];var xe=d(ue,2);xe.__click=[Rf,l];var Z=d(ae,2);Fr(Z,{get items(){return s(v)},onToggleItem:T,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var me=d(V,2),q=u(me);q.__click=[es,r,e];var X=d(q,2);X.__click=[Cf,g,r,n,a,f,e,o];var Ae=u(X);{var we=oe=>{var ye=qf();h(oe,ye)},Ee=oe=>{var ye=jf(),je=I(ye);Xr(je,{class:"h-4 w-4"});var de=d(je);B(()=>L(de,` Appliquer à ${s(f).length??""} produit(s)`)),h(oe,ye)};k(Ae,oe=>{s(r)?oe(we):oe(Ee,!1)})}B(oe=>{L(N,s(m)),D.disabled=s(r),K.disabled=s(r),ee.disabled=oe,Te(ue,1,`tab ${s(l)==="empty"?"tab-active":""}`),Te(xe,1,`tab ${s(l)==="all"?"tab-active":""}`),q.disabled=s(r),X.disabled=s(r)||!s(g)},[()=>s(r)||!s(i).trim()]),Ie(K,()=>s(i),oe=>b(i,oe)),h(t,x),G()}Fe(["click","keydown"]);var zf=S("<div><!></div>"),Uf=S('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Hf(t,e){W(e,!0);let r=O(!1),n=Oe(e,"width",3,"80"),a=Oe(e,"bgClass",3,"bg-base-300");const o=Q(()=>"w-"+n());var i=H(),l=I(i);{var c=f=>{var p=zf(),m=u(p);le(m,()=>e.children??se),B(()=>Te(p,1,`${a()??""} ${(s(o)?s(o):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),h(f,p)},v=f=>{var p=Uf(),m=I(p),g=u(m),y=d(g,2),E=d(u(y),2),w=u(E);le(w,()=>e.children??se);var A=d(m,2),T=u(A),x=u(T);mo(x,{class:"h-6 w-6"}),dl(g,()=>s(r),$=>b(r,$)),h(f,p)};k(l,f=>{Ir.isMobile?f(v,!1):f(c)})}h(t,i),G()}function Wf(){}var Gf=S('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function Qf(t,e){W(e,!0);const r="100",n=Q(()=>F.stats);let a=O(null),o=O("recettes"),i=O(!1),l=O(!1),c=O(Re([])),v=O(Re([])),f=O(!1),p=O(Re([]));function m(z,Y="recettes"){b(o,Y,!0),b(a,z,!0)}function g(){b(a,null)}function y(z,Y,ae){b(c,Y,!0),b(v,ae,!0),b(z==="who"?i:l,!0)}function E(z){(!z||z==="who")&&b(i,!1),(!z||z==="store")&&b(l,!1),b(c,[],!0),b(v,[],!0)}function w(z){console.log(`[ProductsTable] Modification groupée réussie: ${z.updatedCount} produits`)}function A(z){const Y=z.filter(ae=>ae.displayMissingQuantity!=="✅ Complet"&&ae.missingQuantityArray&&ae.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${z.length} produits reçus → ${Y.length} produits avec quantités manquantes`),b(p,Y,!0),b(f,!0)}function T(){b(f,!1),b(p,[],!0)}function x(){console.log("[ProductsTable] Achat groupé créé avec succès"),T()}async function $(z){try{if(!F.currentMainId)throw new Error("mainId non disponible");const Y=z.missingQuantityArray||[];if(Y.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let ae=z.$id;z.isSynced||(console.log(`[ProductsTable] Produit ${z.$id} local, création pour validation rapide...`),ae=(await Ut(z.$id,{},xe=>F.getEnrichedProductById(xe))).$id,console.log(`[ProductsTable] Produit sync créé: ${ae}`)),await fo(F.currentMainId,ae,Y,{store:z.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${z.productName}`)}catch(Y){console.error("[ProductsTable] Erreur validation rapide:",Y),alert("Erreur lors de la validation rapide: "+Y.message)}}var _=Gf(),P=I(_),N=u(P),D=u(N),te=u(D);Mc(te,{class:"mr-1 h-4 w-4"});var V=d(te),U=d(D,2);U.__click=[Wf];var ne=u(U);Uc(ne,{class:"mr-1 h-4 w-4"});var be=d(N,2);Hf(be,{width:r,children:(z,Y)=>{Cv(z,{})},$$slots:{default:!0}});var j=d(be,2);xf(j,{onOpenModal:m,onOpenGroupEditModal:y,onOpenGroupPurchaseModal:A,onQuickValidation:$});var M=d(P,2);Yd(M,{get productId(){return s(a)},get initialTab(){return s(o)},onClose:g});var R=d(M,2);{var ie=z=>{Bf(z,{get productIds(){return s(c)},get products(){return s(v)},onClose:()=>E("who"),onSuccess:w})};k(R,z=>{s(i)&&z(ie)})}var K=d(R,2);{var ee=z=>{Df(z,{get productIds(){return s(c)},get products(){return s(v)},onClose:()=>E("store"),onSuccess:w})};k(K,z=>{s(l)&&z(ee)})}var re=d(K,2);{var Se=z=>{yu(z,{get products(){return s(p)},onClose:T,onSuccess:x})};k(re,z=>{s(f)&&z(Se)})}B(()=>{Te(P,1,`space-y-6 ${Ir.isMobile?"":"ml-100"}`),L(V,` ${s(n).total??""}`)}),h(t,_),G()}Fe(["click"]);vi();var Vf=S('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function Kf(t){var e=Vf();h(t,e)}var Yf=S('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Jf(t,e){var r=Yf(),n=d(u(r),2),a=d(u(n),2),o=u(a);B(()=>L(o,e.message)),h(t,r)}var Zf=S('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Xf(t,e){var r=Zf(),n=u(r),a=u(n);$n(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(u(o),2),l=u(i);B(()=>L(l,e.message||"Erreur inconnue")),h(t,r)}function Ff(t){t.stopPropagation()}var eh=(t,e)=>t.key==="Escape"&&e(),th=S('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),rh=S('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),nh=(t,e)=>b(e,!1),ah=S('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),sh=(t,e)=>b(e,!0),oh=(t,e)=>b(e,!1),ih=S(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),lh=(t,e)=>b(e,!0),ch=S('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),uh=S('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function dh(t,e){W(e,!0);let r=Oe(e,"onClose",3,()=>{}),n=Oe(e,"onAuthSuccess",3,()=>{}),a=O(!0),o=O(!1),i=O(""),l=O(""),c=O(""),v=O(""),f=O(""),p=O(""),m=O(""),g=O(""),y=O(!1);function E(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function w(K){if(K.preventDefault(),!s(c)||!s(v)){b(i,"Veuillez remplir tous les champs");return}b(o,!0),b(i,"");try{await(await E().getAccount()).createEmailPasswordSession(s(c),s(v)),b(l,"Connexion réussie !"),setTimeout(()=>{n()()},1e3)}catch(ee){console.error("Erreur de connexion:",ee),b(i,ee.message||"Erreur lors de la connexion",!0)}finally{b(o,!1)}}async function A(K){if(K.preventDefault(),!s(f)||!s(p)||!s(m)){b(i,"Veuillez remplir tous les champs");return}b(o,!0),b(i,"");try{const re=await E().getAccount();await re.create("unique()",s(p),s(m),s(f)),await re.createEmailPasswordSession(s(p),s(m)),b(l,"Compte créé et connecté !"),setTimeout(()=>{n()()},1e3)}catch(ee){console.error("Erreur d'inscription:",ee),b(i,ee.message||"Erreur lors de la création du compte",!0)}finally{b(o,!1)}}async function T(K){if(K.preventDefault(),!s(g)){b(i,"Veuillez entrer votre email");return}b(o,!0),b(i,"");try{await(await E().getAccount()).createRecovery(s(g),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(y,!1),b(g,"")},2e3)}catch(ee){console.error("Erreur mot de passe oublié:",ee),b(i,ee.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(o,!1)}}function x(){s(o)||r()()}or(()=>{(s(a)||s(y))&&(b(i,""),b(l,""))});var $=uh();$.__click=x,$.__keydown=[eh,x];var _=u($);_.__click=[Ff];var P=u(_),N=u(P),D=u(N),te=d(N,2);te.__click=x;var V=d(P,2),U=u(V);{var ne=K=>{var ee=th(),re=u(ee);B(()=>L(re,s(i))),h(K,ee)};k(U,K=>{s(i)&&K(ne)})}var be=d(U,2);{var j=K=>{var ee=rh(),re=u(ee);B(()=>L(re,s(l))),h(K,ee)};k(be,K=>{s(l)&&K(j)})}var M=d(be,2);{var R=K=>{var ee=ah(),re=I(ee),Se=u(re),z=d(u(Se),2),Y=d(Se,2),ae=u(Y),ue=d(re,2),xe=u(ue);xe.__click=[nh,y],B(()=>{z.disabled=s(o),Y.disabled=s(o),L(ae,s(o)?"Envoi...":"Envoyer l'email de réinitialisation"),xe.disabled=s(o)}),En("submit",re,T),Ie(z,()=>s(g),Z=>b(g,Z)),h(K,ee)},ie=K=>{var ee=H(),re=I(ee);{var Se=Y=>{var ae=ih(),ue=I(ae),xe=u(ue),Z=d(u(xe),2),me=d(xe,2),q=d(u(me),2),X=d(me,2),Ae=u(X),we=d(ue,2),Ee=u(we);Ee.__click=[sh,y];var oe=d(Ee,2),ye=d(u(oe));ye.__click=[oh,a],B(()=>{Z.disabled=s(o),q.disabled=s(o),X.disabled=s(o),L(Ae,s(o)?"Connexion...":"Se connecter"),Ee.disabled=s(o),ye.disabled=s(o)}),En("submit",ue,w),Ie(Z,()=>s(c),je=>b(c,je)),Ie(q,()=>s(v),je=>b(v,je)),h(Y,ae)},z=Y=>{var ae=ch(),ue=I(ae),xe=u(ue),Z=d(u(xe),2),me=d(xe,2),q=d(u(me),2),X=d(me,2),Ae=d(u(X),2),we=d(X,2),Ee=u(we),oe=d(ue,2),ye=d(u(oe));ye.__click=[lh,a],B(()=>{Z.disabled=s(o),q.disabled=s(o),Ae.disabled=s(o),we.disabled=s(o),L(Ee,s(o)?"Création...":"Créer un compte"),ye.disabled=s(o)}),En("submit",ue,A),Ie(Z,()=>s(f),je=>b(f,je)),Ie(q,()=>s(p),je=>b(p,je)),Ie(Ae,()=>s(m),je=>b(m,je)),h(Y,ae)};k(re,Y=>{s(a)?Y(Se):Y(z,!1)},!0)}h(K,ee)};k(M,K=>{s(y)?K(R):K(ie,!1)})}B(()=>{L(D,s(y)?"Mot de passe oublié":s(a)?"Connexion":"Inscription"),te.disabled=s(o)}),h(t,$),G()}Fe(["click","keydown"]);var vh=(t,e,r)=>e(s(r)),fh=S('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),hh=(t,e,r)=>e(s(r)),ph=S('<button class="btn btn-ghost btn-sm btn-square" title="Fermer" aria-label="Fermer la notification"><!></button>'),mh=S('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!></div></div></div>'),gh=S("<div></div>");function _h(t,e){W(e,!0);let r=Oe(e,"position",3,"toast-right toast-bottom"),n=Oe(e,"padding",3,"md");const a=Q(()=>n()==="sm"?"px-2 py-0.5":""),o=Q(()=>wt.toasts);function i(f){return f==="success"||f==="info"}function l(f){wt.dismiss(f.id)}function c(f){e.onShowDetails?.({id:f.id,message:f.message,details:f.details})}var v=gh();ct(v,21,()=>s(o),f=>f.id,(f,p)=>{var m=mh(),g=u(m),y=u(g),E=u(y);{var w=D=>{go(D,{class:"h-5 w-5 animate-spin"})};k(E,D=>{s(p).state==="loading"&&D(w)})}var A=d(E,2),T=u(A),x=d(y,2),$=u(x);{var _=D=>{var te=fh();te.__click=[vh,c,p];var V=u(te);po(V,{class:"h-3 w-3"}),h(D,te)};k($,D=>{s(p).details&&D(_)})}var P=d($,2);{var N=D=>{var te=ph();te.__click=[hh,l,p];var V=u(te);qt(V,{class:"ms-1 h-4 w-4"}),h(D,te)};k(P,D=>{(s(p).state==="error"||!i(s(p).state))&&D(N)})}B(()=>{Te(m,1,`alert alert-${s(p).state??""} max-w-sm ${s(a)??""} shadow-lg ${s(p).state==="error"?"":"alert-soft"}`),L(T,s(p).message)}),h(f,m)}),B(()=>Te(v,1,`toast ${r()??""} z-50`)),h(t,v),G()}Fe(["click"]);var bh=S('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function yh(t){var e=bh(),r=u(e),n=d(r,2);So(n,{class:"swap-on fill-current"});var a=d(n,2);bo(a,{class:"swap-off fill-current"}),h(t,e)}function wh(t,e){b(e,!0)}var Sh=S('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),xh=S('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),$h=S('<div class="text-base-content/60"> </div>'),Ph=S('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),Eh=S('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),Ah=S('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),kh=S('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),Th=S('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function Nh(t,e){W(e,!0);let r,n=O(null),a=O(!0),o=O(!1),i=O(!1);function l(_,P,N){localStorage.setItem("appwrite-user-email",_),localStorage.setItem("appwrite-user-name",P)}async function c(){const _=Ka();r=fc(_);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const D=await(await window.AppwriteClient.getAccount()).get();l(D.email,D.name),await F.initialize(r,_)}catch(P){const N=P instanceof Error?P.message:"Erreur lors de l'initialisation";b(n,N,!0),console.error("[App] Erreur initialisation:",P)}finally{b(a,!1)}}Qs(async()=>{await c()});async function v(){b(i,!1),b(a,!0),b(n,null),await c()}pl(()=>{F.destroy()});async function f(){if(!(!r||s(o))){b(o,!0);try{const _=Ka();await F.forceReload(r,_)}catch(_){console.error("[App] Erreur lors du rechargement forcé:",_)}finally{b(o,!1)}}}const p=Q(()=>s(n)||F.error),m=Q(()=>s(a)||F.loading);var g=Th(),y=I(g),E=u(y);_h(E,{});var w=d(E,2);{var A=_=>{Kf(_)},T=_=>{var P=kh(),N=I(P),D=u(N),te=u(D),V=d(u(te),2),U=u(V);{var ne=q=>{var X=Sh();h(q,X)};k(U,q=>{F.realtimeConnected&&q(ne)})}var be=d(U,2);{var j=q=>{var X=xh();h(q,X)};k(be,q=>{F.syncing&&q(j)})}var M=d(be,2);{var R=q=>{var X=$h(),Ae=u(X);B(we=>L(Ae,`Maj: ${we??""}`),[()=>new Date(F.lastSync).toLocaleTimeString()]),h(q,X)};k(M,q=>{F.lastSync&&q(R)})}var ie=d(M,2);yh(ie);var K=d(ie,2);{var ee=q=>{var X=Ph();let Ae;X.__click=f;var we=u(X);Hc(we,{class:"h-4 w-4"}),B(Ee=>{Ae=Te(X,1,"btn btn-outline btn-sm",null,Ae,Ee),X.disabled=s(o)||F.loading},[()=>({loading:s(o)||F.loading})]),h(q,X)};k(K,q=>{s(n)||q(ee)})}var re=d(K,2);{var Se=q=>{var X=Eh(),Ae=u(X);Ae.__click=[wh,i];var we=u(Ae);Rc(we,{class:"mr-2 h-4 w-4"}),h(q,X)};k(re,q=>{s(n)&&q(Se)})}var z=d(N,2),Y=u(z);{var ae=q=>{Xf(q,{get message(){return s(p)}})},ue=q=>{var X=H(),Ae=I(X);{var we=Ee=>{Jf(Ee,{get message(){return s(p)}})};k(Ae,Ee=>{s(p)&&Ee(we)},!0)}h(q,X)};k(Y,q=>{s(n)?q(ae):q(ue,!1)})}var xe=d(Y,2);{var Z=q=>{Qf(q,{})},me=q=>{var X=H(),Ae=I(X);{var we=Ee=>{var oe=Ah();h(Ee,oe)};k(Ae,Ee=>{!F.loading&&!s(n)&&Ee(we)},!0)}h(q,X)};k(xe,q=>{F.enrichedProducts.length>0?q(Z):q(me,!1)})}h(_,P)};k(w,_=>{s(m)?_(A):_(T,!1)})}var x=d(y,2);{var $=_=>{dh(_,{onClose:()=>b(i,!1),onAuthSuccess:v})};k(x,_=>{s(i)&&_($)})}h(t,g),G()}Fe(["click"]);const Eo=document.getElementById("app_products");if(!Eo)throw new Error("Élément target non trouvé: #app_products");Ji(Nh,{target:Eo});
