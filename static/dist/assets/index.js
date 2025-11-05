(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const co=!1;var fa=Array.isArray,Xi=Array.prototype.indexOf,ss=Array.from,za=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,Fi=Object.getOwnPropertyDescriptors,el=Object.prototype,tl=Array.prototype,uo=Object.getPrototypeOf,Ps=Object.isExtensible;function $n(e){return typeof e=="function"}const te=()=>{};function rl(e){for(var t=0;t<e.length;t++)e[t]()}function fo(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function vo(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const _t=2,os=4,is=8,qr=16,Ft=32,Br=64,ls=128,Tt=256,la=512,ct=1024,wt=2048,gr=4096,Mt=8192,jr=16384,cs=32768,Lr=65536,$s=1<<17,nl=1<<18,fn=1<<19,al=1<<20,Va=1<<21,va=1<<22,Ir=1<<23,Cr=Symbol("$state"),ho=Symbol("legacy props"),sl=Symbol(""),In=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function po(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ol(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function il(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ll(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function cl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ul(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function dl(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function fl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function vl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function hl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function pl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ha=1,pa=2,_o=4,_l=8,ml=16,gl=1,bl=2,yl=4,wl=8,Sl=16,xl=1,Pl=2,et=Symbol(),$l="http://www.w3.org/1999/xhtml",El="http://www.w3.org/2000/svg",kl="@attach";function Al(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Tl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Nl=!1;function mo(e){return e===this.v}function go(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Il(e,t){return e!==t}function bo(e){return!go(e,this.v)}let vn=!1,Cl=!1;function Dl(){vn=!0}let Ge=null;function nn(e){Ge=e}function H(e,t=!1,r){Ge={p:Ge,c:null,e:null,s:e,x:null,l:vn&&!t?{s:null,u:null,$:[]}:null}}function K(e){var t=Ge,r=t.e;if(r!==null){t.e=null;for(var n of r)Ro(n)}return Ge=t.p,{}}function hn(){return!vn||Ge!==null&&Ge.l===null}let Ar=[];function yo(){var e=Ar;Ar=[],rl(e)}function Dr(e){if(Ar.length===0&&!Cn){var t=Ar;queueMicrotask(()=>{t===Ar&&yo()})}Ar.push(e)}function Ml(){for(;Ar.length>0;)yo()}const Rl=new WeakMap;function wo(e){var t=ye;if(t===null)return xe.f|=Ir,e;if((t.f&cs)===0){if((t.f&ls)===0)throw!t.parent&&e instanceof Error&&So(e),e;t.b.error(e)}else an(e,t)}function an(e,t){for(;t!==null;){if((t.f&ls)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&So(e),e}function So(e){const t=Rl.get(e);t&&(za(e,"message",{value:t.message}),za(e,"stack",{value:t.stack}))}const ta=new Set;let Me=null,na=null,Ua=new Set,Vt=[],_a=null,Wa=!1,Cn=!1;class At{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#l=[];#o=[];#i=[];#a=[];#s=[];#f=[];skipped_effects=new Set;process(t){Vt=[],na=null;var r=At.apply(this);for(const o of t)this.#n(o);if(this.#c===0){this.#v();var n=this.#o,a=this.#i;this.#o=[],this.#i=[],this.#a=[],na=this,Me=null,Es(n),Es(a),na=null,this.#u?.resolve()}else this.#d(this.#o),this.#d(this.#i),this.#d(this.#a);r();for(const o of this.#l)qn(o);this.#l=[]}#n(t){t.f^=ct;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Ft|Br))!==0,o=a&&(n&ct)!==0,i=o||(n&Mt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=ct:(n&os)!==0?this.#i.push(r):(n&ct)===0&&((n&va)!==0&&r.b?.is_pending()?this.#l.push(r):wa(r)&&((r.f&qr)!==0&&this.#a.push(r),qn(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#d(t){for(const r of t)((r.f&wt)!==0?this.#s:this.#f).push(r),vt(r,ct);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){Me=this}deactivate(){Me=null}flush(){if(Vt.length>0){if(this.activate(),xo(),Me!==null&&Me!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of Ua)if(Ua.delete(t),t(),Me!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),ta.size>1){this.#e.clear();let t=!0;for(const r of ta){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;Po(n)}if(Vt.length>0){Me=r;const n=At.apply(r);for(const a of Vt)r.#n(a);Vt=[],n()}}Me=null}ta.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#s)vt(t,wt),Mr(t);for(const t of this.#f)vt(t,gr),Mr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=fo()).promise}static ensure(){if(Me===null){const t=Me=new At;ta.add(Me),Cn||At.enqueue(()=>{Me===t&&t.flush()})}return Me}static enqueue(t){Dr(t)}static apply(t){return te}}function Ol(e){var t=Cn;Cn=!0;try{for(var r;;){if(Ml(),Vt.length===0&&(Me?.flush(),Vt.length===0))return _a=null,r;xo()}}finally{Cn=t}}function xo(){var e=tn;Wa=!0;try{var t=0;for(Ns(!0);Vt.length>0;){var r=At.ensure();if(t++>1e3){var n,a;ql()}r.process(Vt),vr.clear()}}finally{Wa=!1,Ns(e),_a=null}}function ql(){try{ul()}catch(e){an(e,_a)}}let kr=null;function Es(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(jr|Mt))===0&&wa(n)&&(kr=[],qn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Bo(n):n.fn=null),kr?.length>0)){vr.clear();for(const a of kr)qn(a);kr=[]}}kr=null}}function Po(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&_t)!==0?Po(t):(r&(va|qr))!==0&&(vt(t,wt),Mr(t))}}function Mr(e){for(var t=_a=e;t.parent!==null;){t=t.parent;var r=t.f;if(Wa&&t===ye&&(r&qr)!==0)return;if((r&(Br|Ft))!==0){if((r&ct)===0)return;t.f^=ct}}Vt.push(t)}function $o(e){let t=0,r=_r(0),n;return()=>{Fl()&&(s(r),hs(()=>(t===0&&(n=pn(()=>e(()=>Ut(r)))),t+=1,()=>{Dr(()=>{t-=1,t===0&&(n?.(),n=void 0,Ut(r))})})))}}var Bl=Lr|fn|ls;function jl(e,t,r){new Ll(e,t,r)}class Ll{parent;#e=!1;#r;#c=null;#u;#l;#o;#i=null;#a=null;#s=null;#f=null;#n=0;#d=0;#v=!1;#t=null;#m=()=>{this.#t&&sn(this.#t,this.#n)};#g=$o(()=>(this.#t=_r(this.#n),()=>{this.#t=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#l=n,this.parent=ye.b,this.#e=!!this.#u.pending,this.#o=rr(()=>{ye.b=this;{try{this.#i=st(()=>n(this.#r))}catch(a){this.error(a)}this.#d>0?this.#p():this.#e=!1}},Bl)}#w(){try{this.#i=st(()=>this.#l(this.#r))}catch(t){this.error(t)}this.#e=!1}#S(){const t=this.#u.pending;t&&(this.#a=st(()=>t(this.#r)),At.enqueue(()=>{this.#i=this.#h(()=>(At.ensure(),st(()=>this.#l(this.#r)))),this.#d>0?this.#p():(Yt(this.#a,()=>{this.#a=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#h(t){var r=ye,n=xe,a=Ge;Wt(this.#o),pt(this.#o),nn(this.#o.ctx);try{return t()}catch(o){return wo(o),null}finally{Wt(r),pt(n),nn(a)}}#p(){const t=this.#u.pending;this.#i!==null&&(this.#f=document.createDocumentFragment(),zl(this.#i,this.#f)),this.#a===null&&(this.#a=st(()=>t(this.#r)))}#_(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(t);return}this.#d+=t,this.#d===0&&(this.#e=!1,this.#a&&Yt(this.#a,()=>{this.#a=null}),this.#f&&(this.#r.before(this.#f),this.#f=null),Dr(()=>{At.ensure().flush()}))}update_pending_count(t){this.#_(t),this.#n+=t,Ua.add(this.#m)}get_effect_pending(){return this.#g(),s(this.#t)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#i&&(ot(this.#i),this.#i=null),this.#a&&(ot(this.#a),this.#a=null),this.#s&&(ot(this.#s),this.#s=null);var a=!1,o=!1;const i=()=>{if(a){Tl();return}a=!0,o&&pl(),At.ensure(),this.#n=0,this.#s!==null&&Yt(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#i=this.#h(()=>(this.#v=!1,st(()=>this.#l(this.#r)))),this.#d>0?this.#p():this.#e=!1};var l=xe;try{pt(null),o=!0,r?.(t,i),o=!1}catch(c){an(c,this.#o&&this.#o.parent)}finally{pt(l)}n&&Dr(()=>{this.#s=this.#h(()=>{this.#v=!0;try{return st(()=>{n(this.#r,()=>t,()=>i)})}catch(c){return an(c,this.#o.parent),null}finally{this.#v=!1}})})}}function zl(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:Vn(r);t.append(r),r=a}}function Eo(e,t,r){const n=hn()?ma:us;if(t.length===0){r(e.map(n));return}var a=Me,o=ye,i=Vl();Promise.all(t.map(l=>Ul(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(o.f&jr)===0&&an(c,o)}a?.deactivate(),ko()}).catch(l=>{an(l,o)})}function Vl(){var e=ye,t=xe,r=Ge,n=Me;return function(){Wt(e),pt(t),nn(r),n?.activate()}}function ko(){Wt(null),pt(null),nn(null)}function ma(e){var t=_t|wt,r=xe!==null&&(xe.f&_t)!==0?xe:null;return ye===null||r!==null&&(r.f&Tt)!==0?t|=Tt:ye.f|=fn,{ctx:Ge,deps:null,effects:null,equals:mo,f:t,fn:e,reactions:null,rv:0,v:et,wv:0,parent:r??ye,ac:null}}function Ul(e,t){let r=ye;r===null&&ol();var n=r.b,a=void 0,o=_r(et),i=!xe,l=new Map;return tc(()=>{var c=fo();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=Me,v=n.is_pending();i&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(In),l.set(f,c)));const m=(p,_=void 0)=>{v||f.activate(),_?_!==In&&(o.f|=Ir,sn(o,_)):((o.f&Ir)!==0&&(o.f^=Ir),sn(o,p)),i&&(n.update_pending_count(-1),v||f.decrement()),ko()};c.promise.then(m,p=>m(null,p||"unknown"))}),Mo(()=>{for(const c of l.values())c.reject(In)}),new Promise(c=>{function f(v){function m(){v===a?c(o):f(a)}v.then(m,m)}f(a)})}function G(e){const t=ma(e);return zo(t),t}function us(e){const t=ma(e);return t.equals=bo,t}function Ao(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)ot(t[r])}}function Wl(e){for(var t=e.parent;t!==null;){if((t.f&_t)===0)return t;t=t.parent}return null}function ds(e){var t,r=ye;Wt(Wl(e));try{Ao(e),t=Go(e)}finally{Wt(r)}return t}function To(e){var t=ds(e);if(e.equals(t)||(e.v=t,e.wv=Uo()),!Vr){var r=(dr||(e.f&Tt)!==0)&&e.deps!==null?gr:ct;vt(e,r)}}const vr=new Map;function _r(e,t){var r={f:0,v:e,reactions:null,equals:mo,rv:0,wv:0};return r}function U(e,t){const r=_r(e);return zo(r),r}function Gl(e,t=!1,r=!0){const n=_r(e);return t||(n.equals=bo),vn&&r&&Ge!==null&&Ge.l!==null&&(Ge.l.s??=[]).push(n),n}function w(e,t,r=!1){xe!==null&&(!Dt||(xe.f&$s)!==0)&&hn()&&(xe.f&(_t|qr|va|$s))!==0&&!Zt?.includes(e)&&hl();let n=r?Ie(t):t;return sn(e,n)}function sn(e,t){if(!e.equals(t)){var r=e.v;Vr?vr.set(e,t):vr.set(e,r),e.v=t;var n=At.ensure();n.capture(e,r),(e.f&_t)!==0&&((e.f&wt)!==0&&ds(e),vt(e,(e.f&Tt)===0?ct:gr)),e.wv=Uo(),No(e,wt),hn()&&ye!==null&&(ye.f&ct)!==0&&(ye.f&(Ft|Br))===0&&(kt===null?ac([e]):kt.push(e))}return t}function Ut(e){w(e,e.v+1)}function No(e,t){var r=e.reactions;if(r!==null)for(var n=hn(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===ye)){var c=(l&wt)===0;c&&vt(i,t),(l&_t)!==0?No(i,gr):c&&((l&qr)!==0&&kr!==null&&kr.push(i),Mr(i))}}}function Ie(e){if(typeof e!="object"||e===null||Cr in e)return e;const t=uo(e);if(t!==el&&t!==tl)return e;var r=new Map,n=fa(e),a=U(0),o=Xt,i=l=>{if(Xt===o)return l();var c=xe,f=Xt;pt(null),Cs(o);var v=l();return pt(c),Cs(f),v};return n&&r.set("length",U(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&fl();var v=r.get(c);return v===void 0?v=i(()=>{var m=U(f.value);return r.set(c,m),m}):w(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=i(()=>U(et));r.set(c,v),Ut(a)}}else w(f,et),Ut(a);return!0},get(l,c,f){if(c===Cr)return e;var v=r.get(c),m=c in l;if(v===void 0&&(!m||fr(l,c)?.writable)&&(v=i(()=>{var _=Ie(m?l[c]:et),g=U(_);return g}),r.set(c,v)),v!==void 0){var p=s(v);return p===et?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=s(v))}else if(f===void 0){var m=r.get(c),p=m?.v;if(m!==void 0&&p!==et)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===Cr)return!0;var f=r.get(c),v=f!==void 0&&f.v!==et||Reflect.has(l,c);if(f!==void 0||ye!==null&&(!v||fr(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=v?Ie(l[c]):et,_=U(p);return _}),r.set(c,f));var m=s(f);if(m===et)return!1}return v},set(l,c,f,v){var m=r.get(c),p=c in l;if(n&&c==="length")for(var _=f;_<m.v;_+=1){var g=r.get(_+"");g!==void 0?w(g,et):_ in l&&(g=i(()=>U(et)),r.set(_+"",g))}if(m===void 0)(!p||fr(l,c)?.writable)&&(m=i(()=>U(void 0)),w(m,Ie(f)),r.set(c,m));else{p=m.v!==et;var x=i(()=>Ie(f));w(m,x)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(v,f),!p){if(n&&typeof c=="string"){var y=r.get("length"),E=Number(c);Number.isInteger(E)&&E>=y.v&&w(y,E+1)}Ut(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(m=>{var p=r.get(m);return p===void 0||p.v!==et});for(var[f,v]of r)v.v!==et&&!(f in l)&&c.push(f);return c},setPrototypeOf(){vl()}})}function ks(e){try{if(e!==null&&typeof e=="object"&&Cr in e)return e[Cr]}catch{}return e}function Ql(e,t){return Object.is(ks(e),ks(t))}var As,Io,Co,Do;function Hl(){if(As===void 0){As=window,Io=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Co=fr(t,"firstChild").get,Do=fr(t,"nextSibling").get,Ps(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Ps(r)&&(r.__t=void 0)}}function er(e=""){return document.createTextNode(e)}function on(e){return Co.call(e)}function Vn(e){return Do.call(e)}function u(e,t){return on(e)}function O(e,t=!1){{var r=on(e);return r instanceof Comment&&r.data===""?Vn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=Vn(n);return n}function Kl(e){e.textContent=""}function ga(){return!1}function Jl(e,t){if(t){const r=document.body;e.autofocus=!0,Dr(()=>{document.activeElement===r&&e.focus()})}}let Ts=!1;function Yl(){Ts||(Ts=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function ba(e){var t=xe,r=ye;pt(null),Wt(null);try{return e()}finally{pt(t),Wt(r)}}function fs(e,t,r,n=r){e.addEventListener(t,()=>ba(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Yl()}function Zl(e){ye===null&&xe===null&&cl(),xe!==null&&(xe.f&Tt)!==0&&ye===null&&ll(),Vr&&il()}function Xl(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function tr(e,t,r,n=!0){var a=ye;a!==null&&(a.f&Mt)!==0&&(e|=Mt);var o={ctx:Ge,deps:null,nodes_start:null,nodes_end:null,f:e|wt,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{qn(o),o.f|=cs}catch(c){throw ot(o),c}else t!==null&&Mr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&fn)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Xl(i,a),xe!==null&&(xe.f&_t)!==0&&(e&Br)===0)){var l=xe;(l.effects??=[]).push(i)}}return o}function Fl(){return xe!==null&&!Dt}function Mo(e){const t=tr(is,null,!1);return vt(t,ct),t.teardown=e,t}function zr(e){Zl();var t=ye.f,r=!xe&&(t&Ft)!==0&&(t&cs)===0;if(r){var n=Ge;(n.e??=[]).push(e)}else return Ro(e)}function Ro(e){return tr(os|al,e,!1)}function ec(e){At.ensure();const t=tr(Br|fn,e,!0);return(r={})=>new Promise(n=>{r.outro?Yt(t,()=>{ot(t),n(void 0)}):(ot(t),n(void 0))})}function vs(e){return tr(os,e,!1)}function tc(e){return tr(va|fn,e,!0)}function hs(e,t=0){return tr(is|t,e,!0)}function L(e,t=[],r=[]){Eo(t,r,n=>{tr(is,()=>e(...n.map(s)),!0)})}function rr(e,t=0){var r=tr(qr|t,e,!0);return r}function st(e,t=!0){return tr(Ft|fn,e,!0,t)}function Oo(e){var t=e.teardown;if(t!==null){const r=Vr,n=xe;Is(!0),pt(null);try{t.call(null)}finally{Is(r),pt(n)}}}function qo(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&ba(()=>{a.abort(In)});var n=r.next;(r.f&Br)!==0?r.parent=null:ot(r,t),r=n}}function rc(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ft)===0&&ot(t),t=r}}function ot(e,t=!0){var r=!1;(t||(e.f&nl)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(nc(e.nodes_start,e.nodes_end),r=!0),qo(e,t&&!r),ca(e,0),vt(e,jr);var n=e.transitions;if(n!==null)for(const o of n)o.stop();Oo(e);var a=e.parent;a!==null&&a.first!==null&&Bo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function nc(e,t){for(;e!==null;){var r=e===t?null:Vn(e);e.remove(),e=r}}function Bo(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Yt(e,t){var r=[];ps(e,r,!0),jo(r,()=>{ot(e),t&&t()})}function jo(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function ps(e,t,r){if((e.f&Mt)===0){if(e.f^=Mt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,o=(n.f&Lr)!==0||(n.f&Ft)!==0;ps(n,t,o?r:!1),n=a}}}function ya(e){Lo(e,!0)}function Lo(e,t){if((e.f&Mt)!==0){e.f^=Mt,(e.f&ct)===0&&(vt(e,wt),Mr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&Lr)!==0||(r.f&Ft)!==0;Lo(r,a?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let tn=!1;function Ns(e){tn=e}let Vr=!1;function Is(e){Vr=e}let xe=null,Dt=!1;function pt(e){xe=e}let ye=null;function Wt(e){ye=e}let Zt=null;function zo(e){xe!==null&&(Zt===null?Zt=[e]:Zt.push(e))}let dt=null,yt=0,kt=null;function ac(e){kt=e}let Vo=1,On=0,Xt=On;function Cs(e){Xt=e}let dr=!1;function Uo(){return++Vo}function wa(e){var t=e.f;if((t&wt)!==0)return!0;if((t&gr)!==0){var r=e.deps,n=(t&Tt)!==0;if(r!==null){var a,o,i=(t&la)!==0,l=n&&ye!==null&&!dr,c=r.length;if((i||l)&&(ye===null||(ye.f&jr)===0)){var f=e,v=f.parent;for(a=0;a<c;a++)o=r[a],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=la),l&&v!==null&&(v.f&Tt)===0&&(f.f^=Tt)}for(a=0;a<c;a++)if(o=r[a],wa(o)&&To(o),o.wv>e.wv)return!0}(!n||ye!==null&&!dr)&&vt(e,ct)}return!1}function Wo(e,t,r=!0){var n=e.reactions;if(n!==null&&!Zt?.includes(e))for(var a=0;a<n.length;a++){var o=n[a];(o.f&_t)!==0?Wo(o,t,!1):t===o&&(r?vt(o,wt):(o.f&ct)!==0&&vt(o,gr),Mr(o))}}function Go(e){var t=dt,r=yt,n=kt,a=xe,o=dr,i=Zt,l=Ge,c=Dt,f=Xt,v=e.f;dt=null,yt=0,kt=null,dr=(v&Tt)!==0&&(Dt||!tn||xe===null),xe=(v&(Ft|Br))===0?e:null,Zt=null,nn(e.ctx),Dt=!1,Xt=++On,e.ac!==null&&(ba(()=>{e.ac.abort(In)}),e.ac=null);try{e.f|=Va;var m=e.fn,p=m(),_=e.deps;if(dt!==null){var g;if(ca(e,yt),_!==null&&yt>0)for(_.length=yt+dt.length,g=0;g<dt.length;g++)_[yt+g]=dt[g];else e.deps=_=dt;if(!dr||(v&_t)!==0&&e.reactions!==null)for(g=yt;g<_.length;g++)(_[g].reactions??=[]).push(e)}else _!==null&&yt<_.length&&(ca(e,yt),_.length=yt);if(hn()&&kt!==null&&!Dt&&_!==null&&(e.f&(_t|gr|wt))===0)for(g=0;g<kt.length;g++)Wo(kt[g],e);return a!==null&&a!==e&&(On++,kt!==null&&(n===null?n=kt:n.push(...kt))),(e.f&Ir)!==0&&(e.f^=Ir),p}catch(x){return wo(x)}finally{e.f^=Va,dt=t,yt=r,kt=n,xe=a,dr=o,Zt=i,nn(l),Dt=c,Xt=f}}function sc(e,t){let r=t.reactions;if(r!==null){var n=Xi.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&_t)!==0&&(dt===null||!dt.includes(t))&&(vt(t,gr),(t.f&(Tt|la))===0&&(t.f^=la),Ao(t),ca(t,0))}function ca(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)sc(e,r[n])}function qn(e){var t=e.f;if((t&jr)===0){vt(e,ct);var r=ye,n=tn;ye=e,tn=!0;try{(t&qr)!==0?rc(e):qo(e),Oo(e);var a=Go(e);e.teardown=typeof a=="function"?a:null,e.wv=Vo;var o;co&&Cl&&(e.f&wt)!==0&&e.deps}finally{tn=n,ye=r}}}async function oc(){await Promise.resolve(),Ol()}function s(e){var t=e.f,r=(t&_t)!==0;if(xe!==null&&!Dt){var n=ye!==null&&(ye.f&jr)!==0;if(!n&&!Zt?.includes(e)){var a=xe.deps;if((xe.f&Va)!==0)e.rv<On&&(e.rv=On,dt===null&&a!==null&&a[yt]===e?yt++:dt===null?dt=[e]:(!dr||!dt.includes(e))&&dt.push(e));else{(xe.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[xe]:o.includes(xe)||o.push(xe)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&Tt)===0&&(i.f^=Tt)}if(Vr){if(vr.has(e))return vr.get(e);if(r){i=e;var c=i.v;return((i.f&ct)===0&&i.reactions!==null||Qo(i))&&(c=ds(i)),vr.set(i,c),c}}else r&&(i=e,wa(i)&&To(i));if((e.f&Ir)!==0)throw e.v;return e.v}function Qo(e){if(e.v===et)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(vr.has(t)||(t.f&_t)!==0&&Qo(t))return!0;return!1}function pn(e){var t=Dt;try{return Dt=!0,e()}finally{Dt=t}}const ic=-7169;function vt(e,t){e.f=e.f&ic|t}function lc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const cc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function uc(e){return cc.includes(e)}const dc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function fc(e){return e=e.toLowerCase(),dc[e]??e}const vc=["touchstart","touchmove"];function hc(e){return vc.includes(e)}const Ho=new Set,Ga=new Set;function Ko(e,t,r,n={}){function a(o){if(n.capture||Tn.call(t,o),!o.cancelBubble)return ba(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Dr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Ds(e,t,r,n={}){var a=Ko(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function it(e){for(var t=0;t<e.length;t++)Ho.add(e[t]);for(var r of Ga)r(e)}let Ms=null;function Tn(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;Ms=e;var i=0,l=Ms===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(o=a[i]||e.target,o!==t){za(e,"currentTarget",{configurable:!0,get(){return o||r}});var v=xe,m=ye;pt(null),Wt(null);try{for(var p,_=[];o!==null;){var g=o.assignedSlot||o.parentNode||o.host||null;try{var x=o["__"+n];if(x!=null&&(!o.disabled||e.target===o))if(fa(x)){var[b,...y]=x;b.apply(o,[e,...y])}else x.call(o,e)}catch(E){p?_.push(E):p=E}if(e.cancelBubble||g===t||g===null)break;o=g}if(p){for(let E of _)queueMicrotask(()=>{throw E});throw p}}finally{e.__root=t,delete e.currentTarget,pt(v),Wt(m)}}}function Jo(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function ln(e,t){var r=ye;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function S(e,t){var r=(t&xl)!==0,n=(t&Pl)!==0,a,o=!e.startsWith("<!>");return()=>{a===void 0&&(a=Jo(o?e:"<!>"+e),r||(a=on(a)));var i=n||Io?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=on(i),c=i.lastChild;ln(l,c)}else ln(i,i);return i}}function pc(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Jo(a),l=on(i);o=on(l)}var c=o.cloneNode(!0);return ln(c,c),c}}function _c(e,t){return pc(e,t,"svg")}function lt(e=""){{var t=er(e+"");return ln(t,t),t}}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),r=er();return e.append(t,r),ln(t,r),e}function h(e,t){e!==null&&e.before(t)}function q(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function mc(e,t){return gc(e,t)}const Xr=new Map;function gc(e,{target:t,anchor:r,props:n={},events:a,context:o,intro:i=!0}){Hl();var l=new Set,c=m=>{for(var p=0;p<m.length;p++){var _=m[p];if(!l.has(_)){l.add(_);var g=hc(_);t.addEventListener(_,Tn,{passive:g});var x=Xr.get(_);x===void 0?(document.addEventListener(_,Tn,{passive:g}),Xr.set(_,1)):Xr.set(_,x+1)}}};c(ss(Ho)),Ga.add(c);var f=void 0,v=ec(()=>{var m=r??t.appendChild(er());return jl(m,{pending:()=>{}},p=>{if(o){H({});var _=Ge;_.c=o}a&&(n.$$events=a),f=e(p,n)||{},o&&K()}),()=>{for(var p of l){t.removeEventListener(p,Tn);var _=Xr.get(p);--_===0?(document.removeEventListener(p,Tn),Xr.delete(p)):Xr.set(p,_)}Ga.delete(c),m!==r&&m.parentNode?.removeChild(m)}});return bc.set(f,v),f}let bc=new WeakMap;function T(e,t,r=!1){var n=e,a=null,o=null,i=et,l=r?Lr:0,c=!1;const f=(_,g=!0)=>{c=!0,p(g,_)};var v=null;function m(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var _=i?a:o,g=i?o:a;_&&ya(_),g&&Yt(g,()=>{i?o=null:a=null})}const p=(_,g)=>{if(i!==(i=_)){var x=ga(),b=n;if(x&&(v=document.createDocumentFragment(),v.append(b=er())),i?a??=g&&st(()=>g(b)):o??=g&&st(()=>g(b)),x){var y=Me,E=i?a:o,P=i?o:a;E&&y.skipped_effects.delete(E),P&&y.skipped_effects.add(P),y.add_callback(m)}else m()}};rr(()=>{c=!1,t(f),c||p(null,null)},l)}function yc(e,t,r){var n=e,a=et,o,i,l=null,c=hn()?Il:go;function f(){o&&Yt(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}rr(()=>{if(c(a,a=t())){var v=n,m=ga();m&&(l=document.createDocumentFragment(),l.append(v=er())),i=st(()=>r(v)),m?Me.add_callback(f):f()}})}function Qa(e,t){return t}function wc(e,t,r){for(var n=e.items,a=[],o=t.length,i=0;i<o;i++)ps(t[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;Kl(c),c.append(r),n.clear(),zt(e,t[0].prev,t[o-1].next)}jo(a,()=>{for(var f=0;f<o;f++){var v=t[f];l||(n.delete(v.k),zt(e,v.prev,v.next)),ot(v.e,!l)}})}function at(e,t,r,n,a,o=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&_o)!==0;if(c){var f=e;i=f.appendChild(er())}var v=null,m=!1,p=new Map,_=us(()=>{var y=r();return fa(y)?y:y==null?[]:ss(y)}),g,x;function b(){Sc(x,g,l,p,i,a,t,n,r),o!==null&&(g.length===0?v?ya(v):v=st(()=>o(i)):v!==null&&Yt(v,()=>{v=null}))}rr(()=>{x??=ye,g=s(_);var y=g.length;if(!(m&&y===0)){m=y===0;var E,P,$,k;if(ga()){var N=new Set,I=Me;for(P=0;P<y;P+=1){$=g[P],k=n($,P);var D=l.items.get(k)??p.get(k);D?(t&(ha|pa))!==0&&Yo(D,$,P,t):(E=Zo(null,l,null,null,$,k,P,a,t,r,!0),p.set(k,E)),N.add(k)}for(const[F,V]of l.items)N.has(F)||I.skipped_effects.add(V.e);I.add_callback(b)}else b();s(_)}})}function Sc(e,t,r,n,a,o,i,l,c){var f=(i&_l)!==0,v=(i&(ha|pa))!==0,m=t.length,p=r.items,_=r.first,g=_,x,b=null,y,E=[],P=[],$,k,N,I;if(f)for(I=0;I<m;I+=1)$=t[I],k=l($,I),N=p.get(k),N!==void 0&&(N.a?.measure(),(y??=new Set).add(N));for(I=0;I<m;I+=1){if($=t[I],k=l($,I),N=p.get(k),N===void 0){var D=n.get(k);if(D!==void 0){n.delete(k),p.set(k,D);var F=b?b.next:g;zt(r,b,D),zt(r,D,F),Ra(D,F,a),b=D}else{var V=g?g.e.nodes_start:a;b=Zo(V,r,b,b===null?r.first:b.next,$,k,I,o,i,c)}p.set(k,b),E=[],P=[],g=b.next;continue}if(v&&Yo(N,$,I,i),(N.e.f&Mt)!==0&&(ya(N.e),f&&(N.a?.unfix(),(y??=new Set).delete(N))),N!==g){if(x!==void 0&&x.has(N)){if(E.length<P.length){var Z=P[0],X;b=Z.prev;var re=E[0],C=E[E.length-1];for(X=0;X<E.length;X+=1)Ra(E[X],Z,a);for(X=0;X<P.length;X+=1)x.delete(P[X]);zt(r,re.prev,C.next),zt(r,b,re),zt(r,C,Z),g=Z,b=C,I-=1,E=[],P=[]}else x.delete(N),Ra(N,g,a),zt(r,N.prev,N.next),zt(r,N,b===null?r.first:b.next),zt(r,b,N),b=N;continue}for(E=[],P=[];g!==null&&g.k!==k;)(g.e.f&Mt)===0&&(x??=new Set).add(g),P.push(g),g=g.next;if(g===null)continue;N=g}E.push(N),b=N,g=N.next}if(g!==null||x!==void 0){for(var z=x===void 0?[]:ss(x);g!==null;)(g.e.f&Mt)===0&&z.push(g),g=g.next;var ie=z.length;if(ie>0){var Pe=(i&_o)!==0&&m===0?a:null;if(f){for(I=0;I<ie;I+=1)z[I].a?.measure();for(I=0;I<ie;I+=1)z[I].a?.fix()}wc(r,z,Pe)}}f&&Dr(()=>{if(y!==void 0)for(N of y)N.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var R of n.values())ot(R.e);n.clear()}function Yo(e,t,r,n){(n&ha)!==0&&sn(e.v,t),(n&pa)!==0?sn(e.i,r):e.i=r}function Zo(e,t,r,n,a,o,i,l,c,f,v){var m=(c&ha)!==0,p=(c&ml)===0,_=m?p?Gl(a,!1,!1):_r(a):a,g=(c&pa)===0?i:_r(i),x={i:g,v:_,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=er())}return x.e=st(()=>l(e,_,g,f),Nl),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?v||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function Ra(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=Vn(o);a.before(o),o=i}}function zt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ne(e,t,...r){var n=e,a=te,o;rr(()=>{a!==(a=t())&&(o&&(ot(o),o=null),o=st(()=>a(n,...r)))},Lr)}function Tr(e,t,r){var n=e,a,o,i=null,l=null;function c(){o&&(Yt(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}rr(()=>{if(a!==(a=t())){var f=ga();if(a){var v=n;f&&(i=document.createDocumentFragment(),i.append(v=er()),o&&Me.skipped_effects.add(o)),l=st(()=>r(v,a))}f?Me.add_callback(c):c()}},Lr)}function xc(e,t,r,n,a,o){var i,l,c=null,f=e,v;rr(()=>{const m=t()||null;var p=El;m!==i&&(v&&(m===null?Yt(v,()=>{v=null,l=null}):m===l?ya(v):ot(v)),m&&m!==l&&(v=st(()=>{if(c=document.createElementNS(p,m),ln(c,c),n){var _=c.appendChild(er());n(c,_)}ye.nodes_end=c,f.before(c)})),i=m,i&&(l=i))},Lr)}function Pc(e,t){var r=void 0,n;rr(()=>{r!==(r=t())&&(n&&(ot(n),n=null),r&&(n=st(()=>{vs(()=>r(e))})))})}function Xo(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Xo(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function $c(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Xo(e))&&(n&&(n+=" "),n+=t);return n}function Fo(e){return typeof e=="object"?$c(e):e??""}const Rs=[...` 	
\r\f \v\uFEFF`];function Ec(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||Rs.includes(n[i-1]))&&(l===n.length||Rs.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Os(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var o=e[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function Oa(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function kc(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Oa)),a&&c.push(...Object.keys(a).map(Oa));var f=0,v=-1;const x=e.length;for(var m=0;m<x;m++){var p=e[m];if(l?p==="/"&&e[m-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[m+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&v===-1)v=m;else if(p===";"||m===x-1){if(v!==-1){var _=Oa(e.substring(f,v).trim());if(!c.includes(_)){p!==";"&&m++;var g=e.substring(f,m).trim();r+=" "+g+";"}}f=m+1,v=-1}}}}return n&&(r+=Os(n)),a&&(r+=Os(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function be(e,t,r,n,a,o){var i=e.__className;if(i!==r||i===void 0){var l=Ec(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&a!==o)for(var c in o){var f=!!o[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return o}function qa(e,t={},r,n){for(var a in r){var o=r[a];t[a]!==o&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,n))}}function ei(e,t,r,n){var a=e.__style;if(a!==t){var o=kc(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(qa(e,r?.[0],n[0]),qa(e,r?.[1],n[1],"important")):qa(e,r,n));return n}function ua(e,t,r=!1){if(e.multiple){if(t==null)return;if(!fa(t))return Al();for(var n of e.options)n.selected=t.includes(Dn(n));return}for(n of e.options){var a=Dn(n);if(Ql(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ti(e){var t=new MutationObserver(()=>{ua(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Mo(()=>{t.disconnect()})}function Nr(e,t,r=t){var n=!0;fs(e,"change",a=>{var o=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),Dn);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&Dn(l)}r(i)}),vs(()=>{var a=t();if(ua(e,a,n),n&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=Dn(o),r(a))}e.__value=a,n=!1}),ti(e)}function Dn(e){return"__value"in e?e.__value:e.value}const En=Symbol("class"),kn=Symbol("style"),ri=Symbol("is custom element"),ni=Symbol("is html");function Ac(e,t){var r=Sa(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function rn(e,t){var r=Sa(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Tc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Rr(e,t,r,n){var a=Sa(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[sl]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ai(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Nc(e,t,r,n,a=!1,o=!1){var i=Sa(e),l=i[ri],c=!i[ni],f=t||{},v=e.tagName==="OPTION";for(var m in t)m in r||(r[m]=null);r.class?r.class=Fo(r.class):r[En]&&(r.class=null),r[kn]&&(r.style??=null);var p=ai(e);for(const $ in r){let k=r[$];if(v&&$==="value"&&k==null){e.value=e.__value="",f[$]=k;continue}if($==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";be(e,_,k,n,t?.[En],r[En]),f[$]=k,f[En]=r[En];continue}if($==="style"){ei(e,k,t?.[kn],r[kn]),f[$]=k,f[kn]=r[kn];continue}var g=f[$];if(!(k===g&&!(k===void 0&&e.hasAttribute($)))){f[$]=k;var x=$[0]+$[1];if(x!=="$$")if(x==="on"){const N={},I="$$"+$;let D=$.slice(2);var b=uc(D);if(lc(D)&&(D=D.slice(0,-7),N.capture=!0),!b&&g){if(k!=null)continue;e.removeEventListener(D,f[I],N),f[I]=null}if(k!=null)if(b)e[`__${D}`]=k,it([D]);else{let F=function(V){f[$].call(this,V)};var P=F;f[I]=Ko(D,e,F,N)}else b&&(e[`__${D}`]=void 0)}else if($==="style")Rr(e,$,k);else if($==="autofocus")Jl(e,!!k);else if(!l&&($==="__value"||$==="value"&&k!=null))e.value=e.__value=k;else if($==="selected"&&v)Tc(e,k);else{var y=$;c||(y=fc(y));var E=y==="defaultValue"||y==="defaultChecked";if(k==null&&!l&&!E)if(i[$]=null,y==="value"||y==="checked"){let N=e;const I=t===void 0;if(y==="value"){let D=N.defaultValue;N.removeAttribute(y),N.defaultValue=D,N.value=N.__value=I?D:null}else{let D=N.defaultChecked;N.removeAttribute(y),N.defaultChecked=D,N.checked=I?D:!1}}else e.removeAttribute($);else E||p.includes(y)&&(l||typeof k!="string")?(e[y]=k,y in i&&(i[y]=et)):typeof k!="function"&&Rr(e,y,k)}}}return f}function qs(e,t,r=[],n=[],a,o=!1,i=!1){Eo(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",m=!1;if(rr(()=>{var _=t(...l.map(s)),g=Nc(e,c,_,a,o,i);m&&v&&"value"in _&&ua(e,_.value);for(let b of Object.getOwnPropertySymbols(f))_[b]||ot(f[b]);for(let b of Object.getOwnPropertySymbols(_)){var x=_[b];b.description===kl&&(!c||x!==c[b])&&(f[b]&&ot(f[b]),f[b]=st(()=>Pc(e,()=>x))),g[b]=x}c=g}),v){var p=e;vs(()=>{ua(p,c.value,!0),ti(p)})}m=!0})}function Sa(e){return e.__attributes??={[ri]:e.nodeName.includes("-"),[ni]:e.namespaceURI===$l}}var Bs=new Map;function ai(e){var t=e.getAttribute("is")||e.nodeName,r=Bs.get(t);if(r)return r;Bs.set(t,r=[]);for(var n,a=e,o=Element.prototype;o!==a;){n=Fi(a);for(var i in n)n[i].set&&r.push(i);a=uo(a)}return r}function Ce(e,t,r=t){var n=new WeakSet;fs(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Ba(e)?ja(o):o,r(o),Me!==null&&n.add(Me),await oc(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),pn(t)==null&&e.value&&(r(Ba(e)?ja(e.value):e.value),Me!==null&&n.add(Me)),hs(()=>{var a=t();if(e===document.activeElement){var o=na??Me;if(n.has(o))return}Ba(e)&&a===ja(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Ic(e,t,r=t){fs(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),pn(t)==null&&r(e.checked),hs(()=>{var n=t();e.checked=!!n})}function Ba(e){var t=e.type;return t==="number"||t==="range"}function ja(e){return e===""?null:+e}let ra=!1;function Cc(e){var t=ra;try{return ra=!1,[e(),ra]}finally{ra=t}}const Dc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function oe(e,t,r){return new Proxy({props:e,exclude:t},Dc)}const Mc={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if($n(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];$n(a)&&(a=a());const o=fr(a,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if($n(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=fr(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===Cr||t===ho)return!1;for(let r of e.props)if($n(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if($n(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function le(...e){return new Proxy({props:e},Mc)}function Oe(e,t,r,n){var a=!vn||(r&bl)!==0,o=(r&wl)!==0,i=(r&Sl)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?pn(n):n),l),v;if(o){var m=Cr in e||ho in e;v=fr(e,t)?.set??(m&&t in e?P=>e[t]=P:void 0)}var p,_=!1;o?[p,_]=Cc(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),v&&(a&&dl(),v(p)));var g;if(a?g=()=>{var P=e[t];return P===void 0?f():(c=!0,P)}:g=()=>{var P=e[t];return P!==void 0&&(l=void 0),P===void 0?l:P},a&&(r&yl)===0)return g;if(v){var x=e.$$legacy;return(function(P,$){return arguments.length>0?((!a||!$||x||_)&&v($?g():P),P):g()})}var b=!1,y=((r&gl)!==0?ma:us)(()=>(b=!1,g()));o&&s(y);var E=ye;return(function(P,$){if(arguments.length>0){const k=$?s(y):a&&o?Ie(P):P;return w(y,k),b=!0,l!==void 0&&(l=k),P}return Vr&&b||(E.f&jr)!==0?y.v:s(y)})}function si(e){Ge===null&&po(),vn&&Ge.l!==null?Oc(Ge).m.push(e):zr(()=>{const t=pn(e);if(typeof t=="function")return t})}function Rc(e){Ge===null&&po(),si(()=>()=>pn(e))}function Oc(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const qc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(qc);const Bc="modulepreload",jc=function(e){return"/"+e},js={},Lc=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(v=>{if(v=jc(v),v in js)return;js[v]=!0;const m=v.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${p}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":Bc,m||(_.as="script"),_.crossOrigin="",_.href=v,c&&_.setAttribute("nonce",c),document.head.appendChild(_),m)return new Promise((g,x)=>{_.addEventListener("load",g),_.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${v}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};class zc extends Map{#e=new Map;#r=U(0);#c=U(0);#u=Xt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#l(t){return Xt===this.#u?U(t):_r(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#r;if(a===void 0)a=this.#l(0),n.set(t,a),w(this.#c,super.size),Ut(l);else if(o!==r){Ut(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(v=>c.has(v));f&&Ut(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),w(this.#c,super.size),w(n,-1),Ut(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;w(this.#c,0);for(var r of t.values())w(r,-1);Ut(this.#r),t.clear()}}#o(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#l(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}const Vc=typeof window<"u"?window:void 0;function Uc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Wc{#e;#r;constructor(t={}){const{window:r=Vc,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=$o(a=>{const o=Ds(r,"focusin",a),i=Ds(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?Uc(this.#e):null}}new Wc;function Gc(e){return typeof e=="function"}function Qc(e,t){if(Gc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Hc(e,t){let r=U(null);const n=G(()=>Qc(t,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const c=new Promise((f,v)=>{i=f,l=v});w(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);w(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),w(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Kc(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),o=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return o.length?Mn(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function Nn(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function aa(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Mn(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function sa(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>Ha(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(a.push({q:v,u:c}),o.push(Ha(v.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function Fr(e){return e?.length?e.map(t=>Ha(t.q.toString(),t.u)).join(" et "):"-"}function Ha(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Ls(e){return Nn(e)}function Jc(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Yc(e,t){return e[t]?.recipes||[]}function Zc(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([o])=>{const i=new Date(o);return i>=n&&i<=a}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function Xc(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Fc(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function eu(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function tu(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Jc(t)}function ru(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class A{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}A.equal=(e,t)=>new A("equal",e,t).toString();A.notEqual=(e,t)=>new A("notEqual",e,t).toString();A.lessThan=(e,t)=>new A("lessThan",e,t).toString();A.lessThanEqual=(e,t)=>new A("lessThanEqual",e,t).toString();A.greaterThan=(e,t)=>new A("greaterThan",e,t).toString();A.greaterThanEqual=(e,t)=>new A("greaterThanEqual",e,t).toString();A.isNull=e=>new A("isNull",e).toString();A.isNotNull=e=>new A("isNotNull",e).toString();A.between=(e,t,r)=>new A("between",e,[t,r]).toString();A.startsWith=(e,t)=>new A("startsWith",e,t).toString();A.endsWith=(e,t)=>new A("endsWith",e,t).toString();A.select=e=>new A("select",void 0,e).toString();A.search=(e,t)=>new A("search",e,t).toString();A.orderDesc=e=>new A("orderDesc",e).toString();A.orderAsc=e=>new A("orderAsc",e).toString();A.orderRandom=()=>new A("orderRandom").toString();A.cursorAfter=e=>new A("cursorAfter",void 0,e).toString();A.cursorBefore=e=>new A("cursorBefore",void 0,e).toString();A.limit=e=>new A("limit",void 0,e).toString();A.offset=e=>new A("offset",void 0,e).toString();A.contains=(e,t)=>new A("contains",e,t).toString();A.notContains=(e,t)=>new A("notContains",e,t).toString();A.notSearch=(e,t)=>new A("notSearch",e,t).toString();A.notBetween=(e,t,r)=>new A("notBetween",e,[t,r]).toString();A.notStartsWith=(e,t)=>new A("notStartsWith",e,t).toString();A.notEndsWith=(e,t)=>new A("notEndsWith",e,t).toString();A.createdBefore=e=>new A("createdBefore",void 0,e).toString();A.createdAfter=e=>new A("createdAfter",void 0,e).toString();A.createdBetween=(e,t)=>new A("createdBetween",void 0,[e,t]).toString();A.updatedBefore=e=>new A("updatedBefore",void 0,e).toString();A.updatedAfter=e=>new A("updatedAfter",void 0,e).toString();A.updatedBetween=(e,t)=>new A("updatedBetween",void 0,[e,t]).toString();A.or=e=>new A("or",void 0,e.map(t=>JSON.parse(t))).toString();A.and=e=>new A("and",void 0,e.map(t=>JSON.parse(t))).toString();A.distanceEqual=(e,t,r,n=!0)=>new A("distanceEqual",e,[[t,r,n]]).toString();A.distanceNotEqual=(e,t,r,n=!0)=>new A("distanceNotEqual",e,[[t,r,n]]).toString();A.distanceGreaterThan=(e,t,r,n=!0)=>new A("distanceGreaterThan",e,[[t,r,n]]).toString();A.distanceLessThan=(e,t,r,n=!0)=>new A("distanceLessThan",e,[[t,r,n]]).toString();A.intersects=(e,t)=>new A("intersects",e,[t]).toString();A.notIntersects=(e,t)=>new A("notIntersects",e,[t]).toString();A.crosses=(e,t)=>new A("crosses",e,[t]).toString();A.notCrosses=(e,t)=>new A("notCrosses",e,[t]).toString();A.overlaps=(e,t)=>new A("overlaps",e,[t]).toString();A.notOverlaps=(e,t)=>new A("notOverlaps",e,[t]).toString();A.touches=(e,t)=>new A("touches",e,[t]).toString();A.notTouches=(e,t)=>new A("notTouches",e,[t]).toString();var oi,ii;class cn{static custom(t){return t}static unique(t=7){const r=ru(cn,oi,"m",ii).call(cn);let n="";for(let a=0;a<t;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}oi=cn,ii=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var zs;(function(e){e.Totp="totp"})(zs||(zs={}));var Vs;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Vs||(Vs={}));var Us;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Us||(Us={}));var Ws;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Ws||(Ws={}));var Gs;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Gs||(Gs={}));var Qs;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Qs||(Qs={}));var Hs;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Hs||(Hs={}));var Ks;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Ks||(Ks={}));var Js;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Js||(Js={}));class nu{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class li{constructor(t){this.generateIdentifier=t,this.kv=new nu}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class au extends li{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function su(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function ou(e,t){const r=su(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const o=n[a];if(t(o))return o}}function un(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function oa(e,t){return e.indexOf(t)!==-1}function Ys(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class iu{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return ou(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const lu=e=>Object.prototype.toString.call(e).slice(8,-1),ci=e=>typeof e>"u",cu=e=>e===null,Bn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Ka=e=>Bn(e)&&Object.keys(e).length===0,mr=e=>Array.isArray(e),uu=e=>typeof e=="string",du=e=>typeof e=="number"&&!isNaN(e),fu=e=>typeof e=="boolean",vu=e=>e instanceof RegExp,jn=e=>e instanceof Map,Ln=e=>e instanceof Set,ui=e=>lu(e)==="Symbol",hu=e=>e instanceof Date&&!isNaN(e.valueOf()),pu=e=>e instanceof Error,Zs=e=>typeof e=="number"&&isNaN(e),_u=e=>fu(e)||cu(e)||ci(e)||du(e)||uu(e)||ui(e),mu=e=>typeof e=="bigint",gu=e=>e===1/0||e===-1/0,bu=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),yu=e=>e instanceof URL,di=e=>e.replace(/\./g,"\\."),La=e=>e.map(String).map(di).join("."),Rn=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let o=e.charAt(a);if(o==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(o==="."){t.push(r),r="";continue}r+=o}const n=r;return t.push(n),t};function Lt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const fi=[Lt(ci,"undefined",()=>null,()=>{}),Lt(mu,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Lt(hu,"Date",e=>e.toISOString(),e=>new Date(e)),Lt(pu,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Lt(vu,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Lt(Ln,"set",e=>[...e.values()],e=>new Set(e)),Lt(jn,"map",e=>[...e.entries()],e=>new Map(e)),Lt(e=>Zs(e)||gu(e),"number",e=>Zs(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Lt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Lt(yu,"URL",e=>e.toString(),e=>new URL(e))];function xa(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const vi=xa((e,t)=>ui(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),wu=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),hi=xa(bu,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=wu[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function pi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const _i=xa(pi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),mi=xa((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Su=[_i,vi,mi,hi],Xs=(e,t)=>{const r=Ys(Su,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ys(fi,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},gi={};fi.forEach(e=>{gi[e.annotation]=e});const xu=(e,t,r)=>{if(mr(t))switch(t[0]){case"symbol":return vi.untransform(e,t,r);case"class":return _i.untransform(e,t,r);case"custom":return mi.untransform(e,t,r);case"typed-array":return hi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=gi[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},en=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function bi(e){if(oa(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(oa(e,"prototype"))throw new Error("prototype is not allowed as a property");if(oa(e,"constructor"))throw new Error("constructor is not allowed as a property")}const Pu=(e,t)=>{bi(t);for(let r=0;r<t.length;r++){const n=t[r];if(Ln(e))e=en(e,+n);else if(jn(e)){const a=+n,o=+t[++r]==0?"key":"value",i=en(e,a);switch(o){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Ja=(e,t,r)=>{if(bi(t),t.length===0)return r(e);let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];if(mr(n)){const l=+i;n=n[l]}else if(Bn(n))n=n[i];else if(Ln(n)){const l=+i;n=en(n,l)}else if(jn(n)){if(o===t.length-2)break;const c=+i,f=+t[++o]==0?"key":"value",v=en(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const a=t[t.length-1];if(mr(n)?n[+a]=r(n[+a]):Bn(n)&&(n[a]=r(n[a])),Ln(n)){const o=en(n,+a),i=r(o);o!==i&&(n.delete(o),n.add(i))}if(jn(n)){const o=+t[t.length-2],i=en(n,o);switch(+a==0?"key":"value"){case"key":{const c=r(i);n.set(c,n.get(i)),c!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Ya(e,t,r=[]){if(!e)return;if(!mr(e)){un(e,(o,i)=>Ya(o,t,[...r,...Rn(i)]));return}const[n,a]=e;a&&un(a,(o,i)=>{Ya(o,t,[...r,...Rn(i)])}),t(n,r)}function $u(e,t,r){return Ya(t,(n,a)=>{e=Ja(e,a,o=>xu(o,n,r))}),e}function Eu(e,t){function r(n,a){const o=Pu(e,Rn(a));n.map(Rn).forEach(i=>{e=Ja(e,i,()=>o)})}if(mr(t)){const[n,a]=t;n.forEach(o=>{e=Ja(e,Rn(o),()=>e)}),a&&un(a,r)}else un(t,r);return e}const ku=(e,t)=>Bn(e)||mr(e)||jn(e)||Ln(e)||pi(e,t);function Au(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Tu(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[o,...i]=a;o.length===0?n=i.map(La):r[La(o)]=i.map(La)}),n?Ka(r)?[n]:[n,r]:Ka(r)?void 0:r}const yi=(e,t,r,n,a=[],o=[],i=new Map)=>{const l=_u(e);if(!l){Au(e,a,t);const _=i.get(e);if(_)return n?{transformedValue:null}:_}if(!ku(e,r)){const _=Xs(e,r),g=_?{transformedValue:_.value,annotations:[_.type]}:{transformedValue:e};return l||i.set(e,g),g}if(oa(o,e))return{transformedValue:null};const c=Xs(e,r),f=c?.value??e,v=mr(f)?[]:{},m={};un(f,(_,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const x=yi(_,t,r,n,[...a,g],[...o,e],i);v[g]=x.transformedValue,mr(x.annotations)?m[g]=x.annotations:Bn(x.annotations)&&un(x.annotations,(b,y)=>{m[di(g)+"."+y]=b})});const p=Ka(m)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,m]:m};return l||i.set(e,p),p};function wi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Fs(e){return wi(e)==="Array"}function Nu(e){if(wi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Iu(e,t,r,n,a){const o={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),a&&o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Za(e,t={}){if(Fs(e))return e.map(a=>Za(a,t));if(!Nu(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,o)=>{if(Fs(t.props)&&!t.props.includes(o))return a;const i=e[o],l=Za(i,t);return Iu(a,o,l,e,t.nonenumerable),a},{})}class qe{constructor({dedupe:t=!1}={}){this.classRegistry=new au,this.symbolRegistry=new li(r=>r.description??""),this.customTransformerRegistry=new iu,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=yi(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const o=Tu(r,this.dedupe);return o&&(a.meta={...a.meta,referentialEqualities:o}),a}deserialize(t){const{json:r,meta:n}=t;let a=Za(r);return n?.values&&(a=$u(a,n.values,this)),n?.referentialEqualities&&(a=Eu(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}qe.defaultInstance=new qe;qe.serialize=qe.defaultInstance.serialize.bind(qe.defaultInstance);qe.deserialize=qe.defaultInstance.deserialize.bind(qe.defaultInstance);qe.stringify=qe.defaultInstance.stringify.bind(qe.defaultInstance);qe.parse=qe.defaultInstance.parse.bind(qe.defaultInstance);qe.registerClass=qe.defaultInstance.registerClass.bind(qe.defaultInstance);qe.registerSymbol=qe.defaultInstance.registerSymbol.bind(qe.defaultInstance);qe.registerCustom=qe.defaultInstance.registerCustom.bind(qe.defaultInstance);qe.allowErrorProps=qe.defaultInstance.allowErrorProps.bind(qe.defaultInstance);function Si(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Rt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Cu(e,t,r=100){try{const{databases:n,config:a}=await Rt(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[A.greaterThan("$updatedAt",t),A.equal("mainId",e),A.limit(r),A.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function xi(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:o}=await Rt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[A.equal("mainId",e),A.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),A.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[A.greaterThan("$updatedAt",r),A.equal("mainId",e),A.limit(n),A.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function Or(e,t){try{const{databases:r,config:n}=await Rt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function ur(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=Si(n,t),{databases:o,config:i}=await Rt(),l=await o.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function Pi(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Or(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function $i(e,t){return Or(e,{who:t})}async function Xa(e,t){return Or(e,{stockReel:t})}async function Ei(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const a={};return t.stockReel!==void 0&&(a.stockReel=t.stockReel),t.who!==void 0&&(a.who=t.who),t.storeInfo!==void 0&&(a.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await Or(e,a)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await ur(e,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function ki(e){try{const{databases:t,config:r}=await Rt(),o=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:o.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,cn.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Ai(e,t){try{const{databases:r,config:n}=await Rt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Ti(e){try{const{databases:t,config:r}=await Rt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Ni(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Rt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[A.equal("$id",e),A.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Ii(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(_=>_.includes("products.")),f=i.some(_=>_.includes("purchases.")),v=i.some(_=>_.includes(".create")),m=i.some(_=>_.includes(".update")),p=i.some(_=>_.includes(".delete"));if(c){const _=l;v&&t.onProductCreate?t.onProductCreate(_):m&&t.onProductUpdate?t.onProductUpdate(_):p&&t.onProductDelete&&t.onProductDelete(_.$id)}else if(f){const _=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(_):m&&t.onPurchaseUpdate?t.onPurchaseUpdate(_):p&&t.onPurchaseDelete&&t.onPurchaseDelete(_.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function Ci(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Rt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Di(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Rt(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function _s(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function Mi(e,t,r,n){return _s({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function Ri(e,t,r,n="replace"){return _s({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function Oi(e,t,r,n={}){try{const{databases:a,config:o}=await Rt(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const v of r){const m={products:[t],mainId:e,quantity:v.q,unit:v.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,cn.unique(),m);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const o=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const Du=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:_s,batchUpdateStore:Mi,batchUpdateWho:Ri,createMainDocument:Di,createPurchase:ki,createQuickValidationPurchases:Oi,deletePurchase:Ti,enrichedProductToAppwriteProduct:Si,loadMainEventData:Ci,loadPurchasesListByIds:Ni,loadUpdatedPurchases:Cu,subscribeToRealtime:Ii,syncProductsWithPurchases:xi,updateProduct:Or,updateProductBatch:Ei,updateProductStock:Xa,updateProductStore:Pi,updateProductWho:$i,updatePurchase:Ai,upsertProduct:ur},Symbol.toStringTag,{value:"Module"}));async function Mu(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Ru(e,t){const r=tu(e.byDate),n=Mn(aa([])),{numeric:a,display:o}=sa(r,n);return{$id:`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:Fr(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function Ou(e,t){return e.map(r=>Ru(r,t))}class qu{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";METADATA_KEY="cache-metadata";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=a=>{const o=a.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE),console.log("[IDBCache] Object store 'metadata' créé"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).get(this.METADATA_KEY);o.onsuccess=()=>{const i=o.result||{lastSync:null,allDates:[]};console.log(`[IDBCache] Metadata chargée: lastSync=${i.lastSync}, dates=${i.allDates?.length||0}`),t(i)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=a.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put(t,this.METADATA_KEY);i.onsuccess=()=>{console.log("[IDBCache] Metadata sauvegardée"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Bu(e){const t=new qu(e);return await t.open(),t}const eo=1e3;class ju{#e=new zc;#r=U(null);#c=U(!1);#u=U(!1);#l=U(null);#o=U(!1);#i=U(!1);#a=U(null);#s=U(Ie([]));#f=U(Ie({start:null,end:null}));get dateRange(){return s(this.#f)}set dateRange(t){w(this.#f,t,!0)}#n=null;#d=null;#v=U(!1);#t=U(Ie({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#l)}get syncing(){return s(this.#o)}get availableDates(){return s(this.#s)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,a=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:a}}isFullRange(){return this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate}initializeDateRange(){if((!this.dateRange.start||!this.dateRange.end)&&s(this.#s).length>0){const t=[...s(this.#s)].sort();this.dateRange={start:t[0],end:t[t.length-1]}}console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}get firstAvailableDate(){return s(this.#s).length===0?null:[...s(this.#s)].sort()[0]}get lastAvailableDate(){return s(this.#s).length===0?null:[...s(this.#s)].sort().pop()}get realtimeConnected(){return s(this.#i)}get hugoContentChanged(){return s(this.#v)}getTotalNeededInRange(t){return this.totalNeededByDateRange.get(t)??[]}getFormattedTotalNeeded(t){const r=this.getTotalNeededInRange(t);return r.length>0?Fr(r):"-"}#m=G(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#m)}set enrichedProducts(t){w(this.#m,t)}#g=G(()=>{if(console.log("[Store] Recalcul totalNeededByDateRange"),this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate)return console.log("[Store] Full date range - using totalNeededArray (no calculation)"),new Map(this.enrichedProducts.map(n=>[n.$id,n.totalNeededArray]));const r=new Map;for(const n of this.enrichedProducts)if(n.byDate){const a=Fc(n.byDate),o=Kc(a,this.dateRange.start,this.dateRange.end);o.length>0&&r.set(n.$id,o)}return r});get totalNeededByDateRange(){return s(this.#g)}set totalNeededByDateRange(t){w(this.#g,t)}#w=G(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const a=Fr(r);t.set(n,a)}),t});get formattedTotalNeededByDateRange(){return s(this.#w)}set formattedTotalNeededByDateRange(t){w(this.#w,t)}#S=G(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#S)}set stats(t){w(this.#S,t)}#h=G(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#h)}set uniqueStores(t){w(this.#h,t)}#p=G(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#p)}set uniqueWho(t){w(this.#p,t)}#_=G(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#_)}set uniqueProductTypes(t){w(this.#_,t)}#$=G(()=>new Set(this.totalNeededByDateRange.keys()));get relevantProductIds(){return s(this.#$)}set relevantProductIds(t){w(this.#$,t)}#E=G(()=>{const t=this.enrichedProducts.filter(r=>this.#L(r)&&this.relevantProductIds.has(r.$id));return s(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get displayProducts(){return s(this.#E)}set displayProducts(t){w(this.#E,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),w(this.#r,t,!0);try{this.#n=await Bu(t)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}w(this.#l,null);try{if(await this.#N(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await Mu(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Ou(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),w(this.#s,[...n.allDates],!0),await Ci(t)||await Di(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#k()}this.initializeDateRange(),await this.#I(),w(this.#c,!0);const r=this.#j();this.#d=Ii(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw w(this.#l,n,!0),console.error("[ProductsStore]",n,r),r}}async#N(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();w(this.#a,r.lastSync,!0),w(this.#s,[...r.allDates],!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#I(){if(s(this.#r)){w(this.#o,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const t=await xi(s(this.#r),{lastSync:s(this.#a),limit:eo});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#A(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await Lc(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Du);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#a),eo);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#P(o,a)}})}this.#C(),await this.#k(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{w(this.#o,!1)}}}async#k(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:s(this.#a),allDates:[...s(this.#s)]}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#x(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#C(){w(this.#a,new Date().toISOString(),!0)}#A(t,r){return r?this.#b(t,r):this.#D(t)}#D(t){const r=Mn(aa(t.purchases??[])),n=[],{numeric:a,display:o}=sa(n,r),i=Nn(t.stockReel)??null,l=Fr(r),c=t.store?Nn(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:Ls(t.totalNeededOverride)}}#b(t,r){const n=t.purchases??r.purchases,a=Mn(aa(n??[])),o=Fr(a),{numeric:i,display:l}=sa(r.totalNeededArray,a),c=t.stockReel??r.stockReel,f=c?Nn(c):r.stockParsed,v=t.store??r.store,m=v?Nn(v):r.storeInfo,p=f?`${f.quantity} ${f.unit}`:o;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:v,stockReel:c,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:m,stockParsed:f,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:Ls(t.totalNeededOverride??r.totalNeededOverride)}}#z(t){t.totalPurchasesArray=Mn(aa(t.purchases??[]));const{numeric:r,display:n}=sa(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=Fr(t.totalPurchasesArray)}#V(t){t.length&&(t.forEach(r=>this.#y(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#y(t){const r=this.#e.get(t.$id),n=this.#A(t,r);this.#e.set(t.$id,n)}#M(t){this.#e.delete(t)}async#R(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#B(r,t),r}async#O(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Ni([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#P(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#q(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t));return r.forEach(n=>{this.#y(n)}),r.map(n=>n.$id)}#T(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#B(t,r){const n=this.#T(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#b({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#P(t,r){const n=this.#T(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#b({...i,purchases:f,status:"active"},i);a.push(v)}else{const f=this.#b({...i,purchases:[...l,r],status:"active"},i);a.push(f)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#j(){return{onProductCreate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#M(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#R(t);await this.#x(r)},onPurchaseUpdate:async t=>{const r=await this.#O(t);await this.#x(r)},onPurchaseDelete:async t=>{const r=await this.#q(t);await this.#x(r)},onConnect:()=>{w(this.#i,!0)},onDisconnect:()=>{w(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#L(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Hc(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){w(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],o=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#t).sortDirection==="asc"?-1:1:a>o?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDate?Yc(n.byDate,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDate&&n.byDate[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Xc(r.byDate):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDate?Object.keys(r.byDate).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.dateRange.start||!this.dateRange.end?0:Zc(r.byDate,this.dateRange.start,this.dateRange.end)}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.dateRange.start||!this.dateRange.end?[]:Object.keys(r.byDate).filter(a=>{const o=new Date(a),i=this.dateRange.start?new Date(this.dateRange.start):null,l=this.dateRange.end?new Date(this.dateRange.end):null;return i&&l&&o>=i&&o<=l}).flatMap(a=>r.byDate[a]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){await this.clearCache(),await this.initialize(t)}async clearCache(){this.#e.clear(),w(this.#s,[],!0),w(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const o=this.#e.get(a);if(o){const i={...o,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#d?.(),this.#d=null,this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const M=new ju;function Lu(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const zu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Vu=_c("<svg><!><!></svg>");function ce(e,t){H(t,!0);const r=Oe(t,"color",3,"currentColor"),n=Oe(t,"size",3,24),a=Oe(t,"strokeWidth",3,2),o=Oe(t,"absoluteStrokeWidth",3,!1),i=Oe(t,"iconNode",19,()=>[]),l=oe(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=Vu();qs(c,m=>({...zu,...l,width:n(),height:n(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var f=u(c);at(f,17,i,Qa,(m,p)=>{var _=G(()=>vo(s(p),2));let g=()=>s(_)[0],x=()=>s(_)[1];var b=Q(),y=O(b);xc(y,g,!0,(E,P)=>{qs(E,()=>({...x()}))}),h(m,b)});var v=d(f);ne(v,()=>t.children??te),h(e,c),K()}function Fa(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ce(e,le({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Uu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ce(e,le({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Wu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ce(e,le({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Gu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ce(e,le({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Qu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ce(e,le({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function dn(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];ce(e,le({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Hu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ce(e,le({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Ku(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];ce(e,le({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function to(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ce(e,le({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Ju(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ce(e,le({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Yu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];ce(e,le({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Zu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];ce(e,le({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Xu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];ce(e,le({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Fu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];ce(e,le({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ms(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ce(e,le({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ed(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ce(e,le({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function td(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];ce(e,le({name:"euro"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function es(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ce(e,le({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function rd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ce(e,le({name:"info"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ro(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ce(e,le({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function nd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ce(e,le({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ad(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ce(e,le({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function sd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];ce(e,le({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function od(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ce(e,le({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function id(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ce(e,le({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function gs(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ce(e,le({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ld(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ce(e,le({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function cd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];ce(e,le({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Un(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ce(e,le({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ud(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];ce(e,le({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function dd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ce(e,le({name:"plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function fd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];ce(e,le({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function vd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function hd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ce(e,le({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function pd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ce(e,le({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function _d(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ce(e,le({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ts(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ce(e,le({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function hr(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ce(e,le({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function rs(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ce(e,le({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function da(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ce(e,le({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function pr(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ce(e,le({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function md(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ce(e,le({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Pa(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ce(e,le({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function qi(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];ce(e,le({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Wn(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ce(e,le({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ns(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ce(e,le({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function gd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ce(e,le({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ft(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ia(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Uu};case"animaux":return{displayName:"Viandes et Poissons",icon:Wu};case"legumes":return{displayName:"Fruits et Légumes",icon:Qu};case"sucres":return{displayName:"Sucrées",icon:Gu};case"lof":return{displayName:"L.O.F",icon:ed};case"autres":return{displayName:"Autres",icon:Hu};case"epices":return{displayName:"Assaisonnements",icon:nd};case"frais":return{displayName:"Produits Frais",icon:hd};default:return{displayName:e,icon:Un}}}function no(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function $a(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Ea(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function bd(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function yd(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],o=n[t.sortColumn];return a<o?t.sortDirection==="asc"?-1:1:a>o?t.sortDirection==="asc"?1:-1:0}):e}function as(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function ao(e){return e?Ea(e):"-"}function wd(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=as(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Sd(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function Sd(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}let so=()=>localStorage.getItem("appwrite-user-name")||"";function xd(e){let t=U(!1),r=U(null);const n=G(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),M.getEnrichedProductById(e))),a=G(()=>s(n)?.who??[]),o=G(()=>s(n)?.stockParsed??null),i=G(()=>s(n)?.purchases??[]),l=G(()=>s(n)?.byDate?eu(s(n).byDate):[]),c=Ie({purchase:{quantity:null,unit:"",store:"",who:so()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=U(!1),v=U(null);zr(()=>{!s(n)||s(f)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=so()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??"",c.store.comment=s(n).storeInfo?.storeComment??null,c.who=s(n)?.who?[...s(n).who]:[],w(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),w(f,!0))});const m=G(()=>s(v)?{store:JSON.stringify(c.store)!==JSON.stringify(s(v).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(s(v).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?s(o)?c.stock.quantity.toString()!==s(o).quantity||c.stock.unit!==s(o).unit||(c.stock.notes||"")!==(s(o).notes||""):!0:!1}const _=G(()=>!!(s(v)&&(s(m).store||s(m).stock||s(m).who)));let g=U(null);const x=G(()=>s(g)?s(i).find(C=>C.$id===s(g))??null:null);async function b(C,z){w(t,!0),w(r,null);try{const ie=await C();return z&&y("success",z),ie}catch(ie){const Pe=ie instanceof Error?ie.message:"Une erreur est survenue";return w(r,Pe,!0),y("error",Pe),console.error("[ProductModalState]",ie),null}finally{w(t,!1)}}function y(C,z){const ie=new CustomEvent("toast",{detail:{type:C,message:z}});window.dispatchEvent(ie)}async function E(){s(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!M.currentMainId)throw new Error("mainId non disponible");const{quantity:C,unit:z}=no(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await ur(s(n).$id,{},ie=>M.getEnrichedProductById(ie))),await ki({products:[s(n).$id],mainId:M.currentMainId,unit:z,quantity:C,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:c.purchase.status||"delivered",orderDate:c.purchase.orderDate||null,deliveryDate:c.purchase.deliveryDate||null}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function P(C){w(g,C.$id,!0)}function $(){w(g,null)}async function k(C){C.$id&&await b(async()=>{const{quantity:z,unit:ie}=no(C.quantity,C.unit);await Ai(C.$id,{unit:ie,quantity:z,store:C.store||null,who:C.who||null,notes:C.notes||"",price:C.price||null,status:C.status||null,orderDate:C.orderDate||null,deliveryDate:C.deliveryDate||null}),w(g,null)},"Achat modifié avec succès")}async function N(C){const z=s(i).find(ie=>ie.$id===C);z&&confirm(`Supprimer cet achat (${z.quantity} ${z.unit}) ?`)&&await b(async()=>{await Ti(C)},"Achat supprimé avec succès")}async function I(){s(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const C={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Xa(s(n).$id,JSON.stringify(C))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await ur(s(n).$id,{stockReel:JSON.stringify(C)},z=>M.getEnrichedProductById(z))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function D(){s(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await Xa(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await ur(s(n).$id,{stockReel:null},C=>M.getEnrichedProductById(C)))},"Stock supprimé")}async function F(C){s(n)&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, setWho normal...`),await $i(s(n).$id,C)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await ur(s(n).$id,{who:C},z=>M.getEnrichedProductById(z)))},"Volontaires mis à jour")}async function V(C){s(n)&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await Pi(s(n).$id,C)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await ur(s(n).$id,{store:JSON.stringify(C)},z=>M.getEnrichedProductById(z)))},"Magasin mis à jour")}async function Z(C){s(n)&&await b(async()=>{await Or(s(n).$id,{totalNeededOverride:JSON.stringify(C)})},"Override appliqué")}async function X(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await Or(s(n).$id,{totalNeededOverride:null})},"Override supprimé")}async function re(){!s(n)||!s(_)||await b(async()=>{const C={};if(s(m).stock&&c.stock.quantity&&c.stock.unit){const z={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};C.stockReel=JSON.stringify(z)}if(s(m).who&&(C.who=c.who),s(m).store){const z={storeName:c.store.name||"",storeComment:c.store.comment||void 0};C.storeInfo=z}Object.keys(C).length>0&&(await Ei(s(n).$id,C,z=>M.getEnrichedProductById(z)),w(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(g)},get editingPurchaseData(){return s(x)},forms:c,addPurchase:E,startEditPurchase:P,cancelEditPurchase:$,updateEditedPurchase:k,removePurchase:N,setStock:I,removeStock:D,setWho:F,updateStore:V,setOverride:Z,removeOverride:X,saveAllChanges:re,get hasChanges(){return s(m)},get hasAnyChanges(){return s(_)},formatQuantity:$a,formatDate:Ea,formatDisplayQuantity:bd}}function Pd(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function $d(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Ed(e,t){t().cancelEditPurchase()}var kd=S('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Ad=S('<span class="loading loading-spinner loading-sm"></span>'),Td=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Nd=S('<span class="loading loading-spinner loading-sm"></span>'),Id=S('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Cd=(e,t,r)=>t(s(r)),Dd=(e,t,r)=>t(s(r).$id),Md=S('<span class="loading loading-spinner loading-sm"></span>'),Rd=S('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Od=S('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),qd=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Bd(e,t){H(t,!0);let r=Oe(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(se){return se.quantity!==null&&se.quantity!==0&&se.unit?.trim()!==""}function o(se){r().removePurchase(se)}function i(se){r().startEditPurchase(se)}var l=qd(),c=u(l),f=u(c);hr(f,{class:"h-5 w-5"});var v=d(c,2),m=u(v),p=d(u(m),2),_=u(p),g=u(_);Un(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2),b=d(_,2),y=u(b);y.value=y.__value="";var E=d(y);E.value=E.__value="kg";var P=d(E);P.value=P.__value="gr.";var $=d(P);$.value=$.__value="l.";var k=d($);k.value=k.__value="ml";var N=d(k);N.value=N.__value="unité";var I=d(N);I.value=I.__value="bottes";var D=d(b,2),F=u(D);pr(F,{class:"h-4 w-4 opacity-50"});var V=d(F,2),Z=d(D,2),X=u(Z);Wn(X,{class:"h-4 w-4 opacity-50"});var re=d(X,2),C=d(Z,2),z=d(u(C),2),ie=d(p,2),Pe=u(ie),R=u(Pe);gs(R,{class:"h-4 w-4 opacity-50"});var ae=d(R,2),Ee=d(ie,2),Ne=u(Ee),Te=u(Ne),Re=u(Te),Qe=u(Re);Qe.value=Qe.__value="delivered";var he=d(Qe);he.value=he.__value="ordered";var ge=d(he);ge.value=ge.__value="requested";var B=d(Te,2),ee=d(Ne,2);{var $e=se=>{var J=kd(),ve=d(u(J),2);Ce(ve,()=>r().forms.purchase.deliveryDate,je=>r().forms.purchase.deliveryDate=je),h(se,J)};T(ee,se=>{r().forms.purchase.status==="ordered"&&se($e)})}var _e=d(Ee,2),we=u(_e);we.__click=[Pd,n,r];var Ue=u(we);{var He=se=>{var J=Ad();h(se,J)},ue=se=>{var J=lt("Ajouter l'achat");h(se,J)};T(Ue,se=>{r().loading?se(He):se(ue,!1)})}var ke=d(v,2);{var ht=se=>{var J=Td(),ve=u(J);hr(ve,{class:"mx-auto mb-2 h-12 w-12"}),h(se,J)},St=se=>{var J=Od(),ve=u(J),je=d(u(ve));at(je,21,()=>r().purchasesList,ut=>ut.$id,(ut,fe,De)=>{var Ke=Q(),Ot=O(Ke);{var nr=Y=>{var me=Id(),Ae=u(me),Je=u(Ae),Le=u(Je),Ze=d(Le,2),mt=u(Ze);mt.value=mt.__value="kg";var xt=d(mt);xt.value=xt.__value="gr.";var Pt=d(xt);Pt.value=Pt.__value="l.";var tt=d(Pt);tt.value=tt.__value="ml";var We=d(tt);We.value=We.__value="unité";var qt=d(We);qt.value=qt.__value="bottes";var Gt=d(Ae),ar=u(Gt),Bt=d(Gt),Qt=u(Bt),Ur=d(Bt),yr=u(Ur),wr=u(yr);wr.value=wr.__value="requested";var sr=d(wr);sr.value=sr.__value="ordered";var Sr=d(sr);Sr.value=Sr.__value="delivered";var or=d(Sr);or.value=or.__value="cancelled";var Wr=d(Ur),xr=u(Wr),Gr=d(Wr),_n=u(Gr),Qr=d(Gr),$t=u(Qr),Ht=d(Qr),mn=u(Ht),Hr=d(Ht),gn=u(Hr),Pr=u(gn);Pr.__click=[$d,r,a];var ka=u(Pr);{var Gn=W=>{var Ye=Nd();h(W,Ye)},Aa=W=>{pd(W,{class:"h-3 w-3"})};T(ka,W=>{r().loading?W(Gn):W(Aa,!1)})}var Qn=d(Pr,2);Qn.__click=[Ed,r];var j=u(Qn);ft(j,{class:"h-3 w-3"}),L(W=>Pr.disabled=W,[()=>r().loading||!a(s(fe))]),Ce(Le,()=>s(fe).quantity,W=>s(fe).quantity=W),Nr(Ze,()=>s(fe).unit,W=>s(fe).unit=W),Ce(ar,()=>s(fe).store,W=>s(fe).store=W),Ce(Qt,()=>s(fe).who,W=>s(fe).who=W),Nr(yr,()=>s(fe).status,W=>s(fe).status=W),Ce(xr,()=>s(fe).orderDate,W=>s(fe).orderDate=W),Ce(_n,()=>s(fe).deliveryDate,W=>s(fe).deliveryDate=W),Ce($t,()=>s(fe).price,W=>s(fe).price=W),Ce(mn,()=>s(fe).notes,W=>s(fe).notes=W),h(Y,me)},br=Y=>{var me=Rd(),Ae=u(me),Je=u(Ae),Le=d(Ae),Ze=u(Le),mt=d(Le),xt=u(mt),Pt=d(mt),tt=u(Pt),We=u(tt),qt=d(Pt),Gt=u(qt),ar=d(qt),Bt=u(ar),Qt=d(ar),Ur=u(Qt),yr=d(Qt),wr=u(yr),sr=d(yr),Sr=u(sr),or=u(Sr);or.__click=[Cd,i,fe];var Wr=u(or);da(Wr,{class:"h-4 w-4"});var xr=d(or,2);xr.__click=[Dd,o,fe];var Gr=u(xr);{var _n=$t=>{var Ht=Md();h($t,Ht)},Qr=$t=>{ft($t,{class:"h-4 w-4"})};T(Gr,$t=>{r().loading?$t(_n):$t(Qr,!1)})}L(($t,Ht,mn,Hr,gn)=>{q(Je,$t),q(Ze,s(fe).store||"-"),q(xt,s(fe).who||"-"),be(tt,1,`badge badge-sm ${Ht??""}`),q(We,mn),q(Gt,Hr),q(Bt,gn),q(Ur,s(fe).price?`${s(fe).price}€`:"-"),q(wr,s(fe).notes||"-"),xr.disabled=r().loading},[()=>$a(s(fe).quantity,s(fe).unit),()=>as(s(fe).status).class,()=>as(s(fe).status).text,()=>ao(s(fe).orderDate),()=>ao(s(fe).deliveryDate)]),h(Y,me)};T(Ot,Y=>{r().editingPurchaseId===s(fe).$id?Y(nr):Y(br,!1)})}h(ut,Ke)}),h(se,J)};T(ke,se=>{r().purchasesList.length===0?se(ht):se(St,!1)})}L(se=>{be(B,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),we.disabled=se},[()=>r().loading||!n()]),Ce(x,()=>r().forms.purchase.quantity,se=>r().forms.purchase.quantity=se),Nr(b,()=>r().forms.purchase.unit,se=>r().forms.purchase.unit=se),Ce(V,()=>r().forms.purchase.store,se=>r().forms.purchase.store=se),Ce(re,()=>r().forms.purchase.who,se=>r().forms.purchase.who=se),Ce(z,()=>r().forms.purchase.price,se=>r().forms.purchase.price=se),Ce(ae,()=>r().forms.purchase.notes,se=>r().forms.purchase.notes=se),Nr(Re,()=>r().forms.purchase.status,se=>r().forms.purchase.status=se),h(e,l),K()}it(["click"]);async function jd(e,t){await t()?.removeStock()}var Ld=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},zd=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Vd=S('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Ud=S('<span class="loading loading-spinner loading-xs"></span>'),Wd=S('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),Gd=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function Qd(e,t){H(t,!0);let r=Oe(t,"modalState",7);var n=Gd(),a=u(n),o=u(a);Fa(o,{class:"h-5 w-5"});var i=d(a,2),l=u(i),c=u(l),f=u(c),v=d(c,2),m=u(v),p=u(m);Un(p,{class:"h-4 w-4 opacity-50"});var _=d(p,2),g=d(m,2),x=u(g);x.value=x.__value="";var b=d(x);b.value=b.__value="kg";var y=d(b);y.value=y.__value="gr.";var E=d(y);E.value=E.__value="l.";var P=d(E);P.value=P.__value="ml";var $=d(P);$.value=$.__value="unité";var k=d($);k.value=k.__value="bottes";var N=d(v,2),I=u(N),D=d(N,2),F=u(D);F.__click=[Ld,r];var V=d(i,2);{var Z=re=>{var C=zd(),z=u(C);Fa(z,{class:"mx-auto mb-2 h-12 w-12"}),h(re,C)},X=re=>{var C=Wd(),z=u(C),ie=d(u(z),2),Pe=u(ie),R=d(u(Pe),2),ae=u(R),Ee=d(Pe,2),Ne=d(u(Ee),2),Te=u(Ne),Re=d(Ee,2);{var Qe=_e=>{var we=Vd(),Ue=d(u(we),2),He=u(Ue);L(()=>q(He,r().stockParsed.notes)),h(_e,we)};T(Re,_e=>{r().stockParsed.notes&&_e(Qe)})}var he=d(ie,2),ge=u(he);ge.__click=[jd,r];var B=u(ge);{var ee=_e=>{var we=Ud();h(_e,we)},$e=_e=>{var we=lt("Supprimer le stock");h(_e,we)};T(B,_e=>{r().loading?_e(ee):_e($e,!1)})}L(_e=>{q(ae,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),q(Te,_e),ge.disabled=r().loading},[()=>Ea(r().stockParsed.dateTime)]),h(re,C)};T(V,re=>{r().stockParsed?re(X,!1):re(Z)})}L(()=>{q(f,r().stockParsed?"Modifier le stock":"Ajouter un stock"),F.disabled=r().loading}),Ce(_,()=>r().forms.stock.quantity,re=>r().forms.stock.quantity=re),Nr(g,()=>r().forms.stock.unit,re=>r().forms.stock.unit=re),Ce(I,()=>r().forms.stock.notes,re=>r().forms.stock.notes=re),h(e,n),K()}it(["click"]);var Hd=(e,t,r)=>t(s(r).id),Kd=S('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),Jd=S('<span class="flex items-center gap-1"><!> </span>'),Yd=S('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Zd=S('<div class="flex flex-wrap gap-2"></div> <!>',1);function zn(e,t){H(t,!0);let r=Oe(t,"badgeSize",3,"badge-lg"),n=Oe(t,"color",3,"primary"),a=Oe(t,"badgeStyle",3,""),o=Oe(t,"onToggleItem",3,()=>{}),i=Oe(t,"showStats",3,!1),l=Oe(t,"showIcon",3,!0),c=U(Ie({}));zr(()=>{const b={};t.items.forEach(y=>{b[y.id]=y.selected??!0}),w(c,b,!0)});function f(b){s(c)[b]=!s(c)[b],o()(b)}const v=G(()=>Object.values(s(c)).filter(Boolean).length),m=G(()=>Object.values(s(c)).filter(b=>!b).length);var p=Zd(),_=O(p);at(_,21,()=>t.items,b=>b.id,(b,y)=>{const E=G(()=>s(c)[s(y).id]);var P=Kd();P.__click=[Hd,f,y];var $=u(P);{var k=V=>{var Z=Q(),X=O(Z);Tr(X,()=>s(y).icon,(re,C)=>{C(re,{class:"h-3 w-3",get title(){return s(y).title}})}),h(V,Z)};T($,V=>{s(y).icon&&V(k)})}var N=d($,2),I=u(N),D=d(N,2);{var F=V=>{var Z=Q(),X=O(Z);{var re=z=>{dn(z,{size:16})},C=z=>{dd(z,{size:16})};T(X,z=>{s(E)?z(re):z(C,!1)})}h(V,Z)};T(D,V=>{l()&&V(F)})}L(()=>{be(P,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(E)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Rr(P,"title",s(E)?"Retirer de la liste":"Réajouter à la liste"),q(I,s(y).label)}),h(b,P)});var g=d(_,2);{var x=b=>{var y=Yd(),E=u(y),P=u(E),$=u(P);dn($,{class:"text-success h-3 w-3"});var k=d($),N=d(P,2);{var I=V=>{var Z=Jd(),X=u(Z);ft(X,{class:"text-error h-3 w-3"});var re=d(X);L(()=>q(re,` ${s(m)??""} retirés`)),h(V,Z)};T(N,V=>{s(m)>0&&V(I)})}var D=d(E,2),F=u(D);L(()=>{q(k,` ${s(v)??""} actifs`),q(F,`Total: ${t.items.length??""} items`)}),h(b,y)};T(g,b=>{i()&&b(x)})}h(e,p),K()}it(["click"]);function Xd(e,t,r){t().forms.who=[...t().whoList],w(r,"")}var Fd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},ef=S('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function tf(e,t){H(t,!0);let r=Oe(t,"modalState",7),n=U("");const a=G(()=>{const I=new Set([...M.uniqueWho,...r().forms.who]);return Array.from(I).map(D=>({id:D,label:D,selected:r().forms.who.includes(D)}))});function o(I){const D=I.trim();D&&!r().forms.who.includes(D)&&(r().forms.who=[...r().forms.who,D])}function i(I){r().forms.who=r().forms.who.filter(D=>D!==I)}function l(I){r().forms.who.includes(I)?i(I):o(I)}function c(){s(n).trim()&&(o(s(n)),w(n,""))}var f=ef(),v=u(f),m=u(v),p=d(u(m),4),_=u(p),g=u(_),x=u(g);Wn(x,{class:"h-4 w-4 opacity-50"});var b=d(x,2);b.__keydown=[Fd,c];var y=d(g,2);y.__click=c;var E=u(y);qi(E,{size:16});var P=d(_,2),$=d(u(P),2);zn($,{get items(){return s(a)},onToggleItem:l,showIcon:!0});var k=d(p,2),N=u(k);N.__click=[Xd,r,n],L(I=>{b.disabled=r().loading,y.disabled=I,N.disabled=r().loading},[()=>r().loading||!s(n).trim()]),Ce(b,()=>s(n),I=>w(n,I)),h(e,f),K()}it(["keydown","click"]);var rf=S('<div class="mb-1 text-xs opacity-70"> </div>'),nf=(e,t,r)=>t(s(r)),af=S("<button><!> </button>"),sf=S('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function Bi(e,t){H(t,!0);let r=Oe(t,"maxSuggestions",3,8),n=Oe(t,"title",3,"Suggestions :"),a=Oe(t,"buttonSize",3,"btn-xs"),o=Oe(t,"buttonVariant",3,"btn-soft"),i=Oe(t,"disabled",3,!1);const l=G(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=Q(),v=O(f);{var m=p=>{var _=sf(),g=u(_);{var x=y=>{var E=rf(),P=u(E);L(()=>q(P,n())),h(y,E)};T(g,y=>{n()&&y(x)})}var b=d(g,2);at(b,21,()=>s(l),y=>y.id,(y,E)=>{var P=af();P.__click=[nf,c,E];var $=u(P);{var k=I=>{var D=Q(),F=O(D);Tr(F,()=>s(E).icon,(V,Z)=>{Z(V,{class:"h-3 w-3"})}),h(I,D)};T($,I=>{s(E).icon&&I(k)})}var N=d($);L(()=>{be(P,1,`btn ${a()??""} ${o()??""}`),P.disabled=i()||s(E).disabled,Rr(P,"title",s(E).disabled?"Déjà sélectionné":s(E).label),q(N,` ${s(E).label??""}`)}),h(y,P)}),h(p,_)};T(v,p=>{s(l).length>0&&p(m)})}h(e,f),K()}it(["click"]);var of=(e,t)=>{e.key==="Enter"&&t()},lf=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},cf=S(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function uf(e,t){H(t,!0);let r=Oe(t,"modalState",7);const n=G(()=>r()?.hasChanges?.store||!1);async function a(){if(!s(n))return;const E={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(E)}var o=cf(),i=u(o),l=u(i),c=d(u(l),4),f=u(c),v=u(f),m=u(v);pr(m,{class:"h-4 w-4 opacity-50"});var p=d(m,2);p.__keydown=[of,a];var _=d(v,2);{var g=E=>{{let P=G(()=>M.uniqueStores.map($=>({id:$,label:$,disabled:$===r().forms.store.name})));Bi(E,{get suggestions(){return s(P)},onSuggestionClick:$=>{r().forms.store.name=$.label},buttonVariant:"btn-outline"})}};T(_,E=>{M.uniqueStores.length>0&&E(g)})}var x=d(f,2),b=d(c,2),y=u(b);y.__click=[lf,r],L(()=>y.disabled=r().loading),Ce(p,()=>r().forms.store.name,E=>r().forms.store.name=E),Ce(x,()=>r().forms.store.comment,E=>r().forms.store.comment=E),h(e,o),K()}it(["keydown","click"]);async function df(e,t,r,n,a,o){if(!t.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(i),w(o,!1)}async function ff(e,t,r){t.modalState&&(await t.modalState.removeOverride(),w(r,!1))}var vf=S('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),hf=S('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),pf=S(" <!>",1),_f=(e,t)=>w(t,!0),mf=S('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),gf=S('<div class="text-error text-sm">Limite de caractères atteinte</div>'),bf=S('<span class="loading loading-spinner loading-sm"></span>'),yf=S('<span class="loading loading-spinner loading-sm"></span>'),wf=S(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div class="form-control"><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),Sf=S('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function xf(e,t){H(t,!0);const r=G(()=>t.modalState.product?.totalNeededOverrideParsed),n=G(()=>t.modalState.product?.displayTotalNeeded||[]);let a=U(!1),o=U(Ie(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=U(Ie(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=U(Ie(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),c=G(()=>s(o)>0&&s(i).trim()!=="");var f=Sf(),v=u(f),m=u(v),p=u(m);{var _=x=>{var b=mf(),y=O(b),E=u(y),P=d(u(E),2);{var $=V=>{var Z=vf();h(V,Z)};T(P,V=>{s(r)&&V($)})}var k=d(P,2),N=u(k);{var I=V=>{var Z=pf(),X=O(Z),re=d(X);{var C=z=>{var ie=hf(),Pe=u(ie);gs(Pe,{});var R=d(Pe);L(()=>q(R,` ${s(r).comment??""}`)),h(z,ie)};T(re,z=>{s(r).comment&&z(C)})}L(z=>q(X,`${z??""} `),[()=>$a(s(r).totalOverride.q,s(r).totalOverride.u)]),h(V,Z)},D=V=>{var Z=lt();L(()=>q(Z,s(n))),h(V,Z)};T(N,V=>{s(r)?V(I):V(D,!1)})}var F=d(y,2);F.__click=[_f,a],h(x,b)},g=x=>{var b=wf(),y=O(b),E=u(y),P=u(E);ud(P,{class:"h-4 w-4 opacity-50"});var $=d(P,2),k=d(E,2),N=u(k);N.value=N.__value="";var I=d(N);I.value=I.__value="kg";var D=d(I);D.value=D.__value="gr.";var F=d(D);F.value=F.__value="l.";var V=d(F);V.value=V.__value="ml";var Z=d(V);Z.value=Z.__value="unité";var X=d(Z);X.value=X.__value="bottes";var re=d(y,2),C=u(re),z=d(u(C),2),ie=d(z,2);{var Pe=B=>{var ee=gf();h(B,ee)};T(ie,B=>{s(l).length>=250&&B(Pe)})}var R=d(re,2),ae=u(R);ae.__click=[ff,t,a];var Ee=u(ae);{var Ne=B=>{var ee=bf();h(B,ee)},Te=B=>{var ee=lt();L(()=>q(ee,`Réinitialiser le total calculé (${s(n)??""}).`)),h(B,ee)};T(Ee,B=>{t.modalState.loading?B(Ne):B(Te,!1)})}var Re=d(ae,2);Re.__click=[df,t,o,i,l,a];var Qe=u(Re);{var he=B=>{var ee=yf();h(B,ee)},ge=B=>{var ee=lt("Appliquer");h(B,ee)};T(Qe,B=>{t.modalState.loading?B(he):B(ge,!1)})}L(()=>{ae.disabled=t.modalState.loading,Re.disabled=t.modalState.loading||!s(c)}),Ce($,()=>s(o),B=>w(o,B)),Nr(k,()=>s(i),B=>w(i,B)),Ce(z,()=>s(l),B=>w(l,B)),h(x,b)};T(p,x=>{s(a)?x(g,!1):x(_)})}L(()=>be(v,1,`card border-base-300 border ${s(a)?"bg-base-200":"bg-base-100"}`)),h(e,f),K()}it(["click"]);var Pf=S('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),$f=S('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Ef=S('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),kf=S('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Af(e,t){H(t,!0);const r=G(()=>t.modalState.recipes);var n=kf(),a=O(n);xf(a,{get modalState(){return t.modalState}});var o=d(a,2),i=u(o),l=u(i);ms(l,{class:"h-5 w-5"});var c=d(i,2);{var f=m=>{var p=Pf(),_=u(p);Un(_,{class:"mx-auto mb-2 h-12 w-12"}),h(m,p)},v=m=>{var p=Ef(),_=u(p),g=d(u(_));at(g,21,()=>s(r),x=>x.r,(x,b)=>{var y=$f(),E=u(y),P=u(E),$=d(E),k=u($),N=d($),I=u(N);L(D=>{q(P,`${s(b).r??""} (${(s(b).a||"-")??""} c.)`),q(k,`${(s(b).q||s(b).qEq)??""} ${(s(b).u||s(b).uEq)??""}`),q(I,D)},[()=>Ea(s(b).date)]),h(x,y)}),h(m,p)};T(c,m=>{s(r).length===0?m(f):m(v,!1)})}h(e,n),K()}function Tf(e,t,r){s(t).saveAllChanges().then(()=>{r.onClose()})}var Nf=S('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),If=S('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Cf=(e,t)=>t("recettes"),Df=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Mf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Rf=(e,t)=>t("magasins"),Of=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),qf=(e,t)=>t("volontaires"),Bf=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),jf=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Lf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),zf=(e,t)=>t("stock"),Vf=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Uf=S('<span class="badge badge-sm badge-secondary ml-1">1</span>'),Wf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Gf=(e,t)=>t("achats"),Qf=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Hf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Kf=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Jf=S('<span class="loading loading-spinner loading-sm"></span>'),Yf=S('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),Zf=S('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Xf(e,t){H(t,!0);let r=Oe(t,"initialTab",3,"recettes"),n=G(()=>xd(t.productId)),a=U(Ie(r()));function o(b){w(a,b,!0)}var i=Zf(),l=u(i),c=u(l),f=u(c);{var v=b=>{var y=Nf(),E=O(y),P=u(E),$=d(E,2),k=u($),N=u(k),I=d(k,2),D=d(u(I));L(()=>{q(P,s(n).product?.productName),q(N,s(n).product?.productType),q(D,` ${s(n).product?.displayTotalNeeded??""}`)}),h(b,y)},m=b=>{var y=If();h(b,y)};T(f,b=>{s(n)&&s(n).product?b(v):b(m,!1)})}var p=d(f,2);p.__click=function(...b){t.onClose?.apply(this,b)};var _=u(p);ft(_,{class:"h-4 w-4"});var g=d(c,2);{var x=b=>{var y=Yf(),E=O(y),P=u(E);P.__click=[Cf,o];var $=u(P);ms($,{class:"mr-1 h-5 w-5"});var k=d($,2);{var N=J=>{var ve=Df(),je=u(ve);L(()=>q(je,s(n).product?.nbRecipes)),h(J,ve)},I=J=>{var ve=Mf();h(J,ve)};T(k,J=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?J(N):J(I,!1)})}var D=d(P,2);D.__click=[Rf,o];var F=u(D);pr(F,{class:"mr-1 h-5 w-5"});var V=d(F,2);{var Z=J=>{var ve=Of();h(J,ve)};T(V,J=>{s(n).hasChanges?.store&&J(Z)})}var X=d(D,2);X.__click=[qf,o];var re=u(X);ns(re,{class:"mr-1 h-5 w-5"});var C=d(re,2);{var z=J=>{var ve=Bf();h(J,ve)},ie=J=>{var ve=Q(),je=O(ve);{var ut=De=>{var Ke=jf(),Ot=u(Ke);L(()=>q(Ot,s(n).product?.who.length)),h(De,Ke)},fe=De=>{var Ke=Lf();h(De,Ke)};T(je,De=>{s(n).product?.who&&s(n).product?.who.length>0?De(ut):De(fe,!1)},!0)}h(J,ve)};T(C,J=>{s(n).hasChanges?.who?J(z):J(ie,!1)})}var Pe=d(X,2);Pe.__click=[zf,o];var R=u(Pe);Fa(R,{class:"mr-1 h-5 w-5"});var ae=d(R,2);{var Ee=J=>{var ve=Vf();h(J,ve)},Ne=J=>{var ve=Q(),je=O(ve);{var ut=De=>{var Ke=Uf();h(De,Ke)},fe=De=>{var Ke=Wf();h(De,Ke)};T(je,De=>{s(n).stockParsed?De(ut):De(fe,!1)},!0)}h(J,ve)};T(ae,J=>{s(n).hasChanges?.stock?J(Ee):J(Ne,!1)})}var Te=d(Pe,2);Te.__click=[Gf,o];var Re=u(Te);hr(Re,{class:"mr-1 h-5 w-5"});var Qe=d(Re,2);{var he=J=>{var ve=Qf(),je=u(ve);L(()=>q(je,s(n).purchasesList.length)),h(J,ve)},ge=J=>{var ve=Hf();h(J,ve)};T(Qe,J=>{s(n).purchasesList.length>0?J(he):J(ge,!1)})}var B=d(E,2),ee=u(B);{var $e=J=>{var ve=Kf(),je=u(ve);ft(je,{class:"h-4 w-4"});var ut=d(je,2),fe=u(ut);L(()=>q(fe,`erreur : ${s(n).error??""}`)),h(J,ve)};T(ee,J=>{s(n).error&&J($e)})}var _e=d(ee,2),we=u(_e);yc(we,()=>s(a),J=>{var ve=Q(),je=O(ve);{var ut=De=>{Af(De,{get modalState(){return s(n)}})},fe=De=>{var Ke=Q(),Ot=O(Ke);{var nr=Y=>{Bd(Y,{get modalState(){return s(n)}})},br=Y=>{var me=Q(),Ae=O(me);{var Je=Ze=>{Qd(Ze,{get modalState(){return s(n)}})},Le=Ze=>{var mt=Q(),xt=O(mt);{var Pt=We=>{tf(We,{get modalState(){return s(n)}})},tt=We=>{var qt=Q(),Gt=O(qt);{var ar=Bt=>{uf(Bt,{get modalState(){return s(n)}})};T(Gt,Bt=>{s(a)==="magasins"&&Bt(ar)},!0)}h(We,qt)};T(xt,We=>{s(a)==="volontaires"?We(Pt):We(tt,!1)},!0)}h(Ze,mt)};T(Ae,Ze=>{s(a)==="stock"?Ze(Je):Ze(Le,!1)},!0)}h(Y,me)};T(Ot,Y=>{s(a)==="achats"?Y(nr):Y(br,!1)},!0)}h(De,Ke)};T(je,De=>{s(a)==="recettes"?De(ut):De(fe,!1)})}h(J,ve)});var Ue=d(B,2),He=u(Ue);He.__click=function(...J){t.onClose?.apply(this,J)};var ue=u(He),ke=d(He,2);ke.__click=[Tf,n,t];var ht=u(ke);{var St=J=>{var ve=Jf();h(J,ve)},se=J=>{var ve=lt("Tout enregistrer");h(J,ve)};T(ht,J=>{s(n).loading?J(St):J(se,!1)})}L(()=>{be(P,1,`tab ${s(a)==="recettes"?"tab-active":""}`),be(D,1,`tab ${s(a)==="magasins"?"tab-active":""}`),be(X,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),be(Pe,1,`tab ${s(a)==="stock"?"tab-active":""}`),be(Te,1,`tab ${s(a)==="achats"?"tab-active":""}`),q(ue,s(n)?.hasAnyChanges?"Annuler":"Fermer"),ke.disabled=s(n).loading||!s(n).hasAnyChanges}),h(b,y)};T(g,b=>{s(n)&&b(x)})}h(e,i),K()}it(["click"]);async function Ff(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){w(n,null),w(a,null);try{const c=s(o).map(m=>m.id),f=i.products.filter(m=>c.includes(m.$id));M.setSyncStatus(c,!0),i.onClose();const v=await Ri(c,f,s(l),"replace");if(w(a,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),i.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";w(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),M.clearSyncStatus()}finally{w(r,!1)}}}function oo(e,t,r){s(t)||r.onClose()}var ev=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),tv=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},rv=(e,t)=>w(t,"empty"),nv=(e,t)=>w(t,"all"),av=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),sv=S("<!> ",1),ov=S('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function iv(e,t){H(t,!0);let r=U(!1),n=U(null),a=U(null),o=U(Ie([])),i=U(""),l=U("empty"),c=U(Ie({}));zr(()=>{const ue={};t.products.forEach(ke=>{t.productIds.includes(ke.$id)&&(s(l)==="empty"?ue[ke.$id]=!ke.who||ke.who.length===0:ue[ke.$id]=!0)}),w(c,ue,!0)});const f=G(()=>t.products.map(ue=>({id:ue.$id,label:ue.productName,title:ue.productName,selected:s(c)[ue.$id]}))),v=G(()=>s(f).filter(ue=>ue.selected)),m=G(()=>{const ue=new Set([...M.uniqueWho,...s(o)]);return Array.from(ue).map(ke=>({id:ke,label:ke,selected:s(o).includes(ke)}))}),p=G(()=>`Gérer les volontaires (${s(v).length} produits sélectionnés)`),_=G(()=>s(v).length===0?!1:s(o).length>0);function g(ue){const ke=ue.trim();ke&&!s(o).includes(ke)&&w(o,[...s(o),ke],!0)}function x(ue){w(o,s(o).filter(ke=>ke!==ue),!0)}function b(ue){s(o).includes(ue)?x(ue):g(ue)}function y(){s(i).trim()&&(g(s(i)),w(i,""))}function E(ue){s(c)[ue]=!s(c)[ue]}var P=ov(),$=u(P),k=u($),N=u(k),I=u(N),D=d(N,2);D.__click=[oo,r,t];var F=u(D);ft(F,{class:"h-4 w-4"});var V=d(k,2),Z=u(V);{var X=ue=>{var ke=ev(),ht=u(ke);Pa(ht,{class:"h-4 w-4"});var St=d(ht,2),se=u(St);L(()=>q(se,s(n))),h(ue,ke)};T(Z,ue=>{s(n)&&ue(X)})}var re=d(Z,2),C=u(re),z=u(C),ie=u(z),Pe=u(ie);Wn(Pe,{class:"h-4 w-4 opacity-50"});var R=d(Pe,2);R.__keydown=[tv,y];var ae=d(ie,2);ae.__click=y;var Ee=u(ae);qi(Ee,{size:16});var Ne=d(z,2),Te=d(u(Ne),2);zn(Te,{get items(){return s(m)},onToggleItem:b,showIcon:!0});var Re=d(re,2),Qe=d(u(Re),2),he=u(Qe);he.__click=[rv,l];var ge=d(he,2);ge.__click=[nv,l];var B=d(Qe,2);zn(B,{get items(){return s(f)},onToggleItem:E,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var ee=d(V,2),$e=u(ee);$e.__click=[oo,r,t];var _e=d($e,2);_e.__click=[Ff,_,r,n,a,v,t,o];var we=u(_e);{var Ue=ue=>{var ke=av();h(ue,ke)},He=ue=>{var ke=sv(),ht=O(ke);dn(ht,{class:"h-4 w-4"});var St=d(ht);L(()=>q(St,` Appliquer à ${s(v).length??""} produit(s)`)),h(ue,ke)};T(we,ue=>{s(r)?ue(Ue):ue(He,!1)})}L(ue=>{q(I,s(p)),D.disabled=s(r),R.disabled=s(r),ae.disabled=ue,be(he,1,`tab ${s(l)==="empty"?"tab-active":""}`),be(ge,1,`tab ${s(l)==="all"?"tab-active":""}`),$e.disabled=s(r),_e.disabled=s(r)||!s(_)},[()=>s(r)||!s(i).trim()]),Ce(R,()=>s(i),ue=>w(i,ue)),h(e,P),K()}it(["click","keydown"]);async function lv(e,t,r,n,a,o,i,l,c){if(!(!s(t)||s(r))){w(n,null),w(a,null);try{const f=s(o).map(_=>_.id),v=i.products.filter(_=>f.includes(_.$id));M.setSyncStatus(f,!0),i.onClose();const m={storeName:s(l).trim(),storeComment:s(c).trim()},p=await Mi(f,v,m);if(w(a,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(f){const v=f instanceof Error?f.message:"Erreur inconnue";w(n,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),M.clearSyncStatus()}finally{w(r,!1)}}}function io(e,t,r){s(t)||r.onClose()}var cv=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),uv=(e,t)=>w(t,"empty"),dv=(e,t)=>w(t,"all"),fv=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),vv=S("<!> ",1),hv=S('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function pv(e,t){H(t,!0);let r=U(!1),n=U(null),a=U(null),o=U(Ie(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=U(Ie(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=U(Ie({})),c=U("empty");zr(()=>{const B={};t.products.forEach(ee=>{t.productIds.includes(ee.$id)&&(s(c)==="empty"?B[ee.$id]=!ee.storeInfo||!ee.storeInfo.storeName:B[ee.$id]=!0)}),w(l,B,!0)});const f=G(()=>t.products.map(B=>({id:B.$id,label:B.productName,title:B.productName,selected:s(l)[B.$id]}))),v=G(()=>s(f).filter(B=>B.selected)),m=G(()=>`Attribuer un magasin (${s(v).length} produits sélectionnés)`),p=G(()=>s(v).length===0?!1:s(o).trim().length>0);function _(B){s(l)[B]=!s(l)[B]}var g=hv(),x=u(g),b=u(x),y=u(b),E=u(y),P=d(y,2);P.__click=[io,r,t];var $=u(P);ft($,{class:"h-4 w-4"});var k=d(b,2),N=u(k);{var I=B=>{var ee=cv(),$e=u(ee);Pa($e,{class:"h-4 w-4"});var _e=d($e,2),we=u(_e);L(()=>q(we,s(n))),h(B,ee)};T(N,B=>{s(n)&&B(I)})}var D=d(N,2),F=u(D),V=u(F),Z=u(V);pr(Z,{class:"h-4 w-4 opacity-50"});var X=d(Z,2),re=d(V,2);{let B=G(()=>M.uniqueStores.map(ee=>({id:ee,label:ee,disabled:ee===s(o)})));Bi(re,{get suggestions(){return s(B)},onSuggestionClick:ee=>{w(o,ee.label,!0)},title:"Suggestions de magasins :"})}var C=d(F,2),z=u(C),ie=d(D,2),Pe=d(u(ie),2),R=u(Pe);R.__click=[uv,c];var ae=d(R,2);ae.__click=[dv,c];var Ee=d(Pe,2);zn(Ee,{get items(){return s(f)},onToggleItem:_,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Ne=d(k,2),Te=u(Ne);Te.__click=[io,r,t];var Re=d(Te,2);Re.__click=[lv,p,r,n,a,v,t,o,i];var Qe=u(Re);{var he=B=>{var ee=fv();h(B,ee)},ge=B=>{var ee=vv(),$e=O(ee);dn($e,{class:"h-4 w-4"});var _e=d($e);L(()=>q(_e,` Appliquer à ${s(v).length??""} produit(s)`)),h(B,ee)};T(Qe,B=>{s(r)?B(he):B(ge,!1)})}L(()=>{q(E,s(m)),P.disabled=s(r),X.disabled=s(r),z.disabled=s(r),be(R,1,`tab ${s(c)==="empty"?"tab-active":""}`),be(ae,1,`tab ${s(c)==="all"?"tab-active":""}`),Te.disabled=s(r),Re.disabled=s(r)||!s(p)}),Ce(X,()=>s(o),B=>w(o,B)),Ce(z,()=>s(i),B=>w(i,B)),h(e,g),K()}it(["click"]);function _v(e,t){const r=e.reduce((a,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return a+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function mv(e,t){const r=e.filter(i=>!i.isSynced).map(i=>({productId:i.productId,productData:i.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(i){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",i)}const a=e.flatMap(i=>i.missingQuantities.map(l=>({productId:i.productId,quantity:l.q,unit:l.u,status:"delivered",notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:null,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:a},invoiceData:t}}async function gv(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=_v(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,o=[];if(n<=a)o.push(t);else{let p=[],_=0;for(const g of t){const x=(g.isSynced?0:1)+g.missingQuantities.length;_+x>a?(p.length>0&&o.push(p),p=[g],_=x):(p.push(g),_+=x)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<o.length;p++){const _=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${_.length} produits)`);try{const g=await mv(_,r),x=await bv(g);if(i.push(x),x.success)l+=x.productsCreated,c+=x.purchasesCreated,f+=x.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${x.error}`);break}}catch(g){const x=g instanceof Error?g.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,g),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:x,timestamp:new Date().toISOString()});break}}const v=i.every(p=>p.success),m=i.some(p=>!p.success);return{success:v,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:m?"Un ou plusieurs lots ont échoué":void 0}}async function bv(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}function yv(e,t){w(t,!s(t))}var wv=S('<span class="text-base-content font-semibold"> </span>'),Sv=S('<div class="text-base-content/80 flex-1"> </div>'),xv=S('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Pv=S('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),$v=S('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Ev(e,t){let r=Oe(t,"icon",3,rd),n=Oe(t,"class",3,""),a=Oe(t,"initiallyOpen",3,!1),o=r(),i=U(Ie(a())),l=Ie(t.children);var c=$v(),f=u(c);f.__click=[yv,i];var v=u(f),m=u(v);o(m,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(m,2);{var _=$=>{var k=wv(),N=u(k);L(()=>q(N,t.title)),h($,k)};T(p,$=>{t.title&&$(_)})}var g=d(v,2);{var x=$=>{var k=Sv(),N=u(k);L(()=>q(N,t.contentVisible)),h($,k)};T(g,$=>{t.contentVisible&&$(x)})}var b=d(g,2);{var y=$=>{var k=xv(),N=u(k),I=u(N);{var D=Z=>{var X=lt("en savoir plus");h(Z,X)},F=Z=>{var X=lt("masquer");h(Z,X)};T(I,Z=>{s(i)?Z(F,!1):Z(D)})}var V=d(N,2);{let Z=G(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(i)?"rotate-180":""}`);Ku(V,{get class(){return s(Z)}})}h($,k)};T(b,$=>{l&&$(y)})}var E=d(f,2);{var P=$=>{var k=Pv(),N=u(k),I=u(N);ne(I,()=>t.children??te),L(()=>be(k,1,`overflow-hidden transition-all duration-200 ${s(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h($,k)};T(E,$=>{l&&$(P)})}L(()=>{be(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),ei(c,t.style),be(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Rr(f,"aria-expanded",s(i))}),h(e,c)}it(["click"]);async function kv(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){w(r,!0),w(n,null),w(a,null);try{const c=`FACTURE_${Date.now()}`,f=s(o).map(_=>_.$id);M.setSyncStatus(f,!0);const v=[];for(const _ of s(o))v.push({productId:_.$id,isSynced:_.isSynced,productData:_,missingQuantities:_.missingQuantityArray||[]});const m={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(o).length} produits`,who:i.who.trim()||void 0};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const p=await gv(M.currentMainId,v,m);if(p.success)w(a,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";w(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),M.clearSyncStatus()}finally{w(r,!1)}}}function lo(e,t,r){s(t)||r.onClose()}var Av=S('<div class="alert alert-error"><!> <span> </span></div>'),Tv=S('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),Nv=S(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),Iv=S("<option> </option>"),Cv=S("<option> </option>"),Dv=S('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),Mv=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Rv=S("<!> ",1),Ov=S(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option>Annulé</option></select> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function qv(e,t){H(t,!0);let r=U(!1),n=U(null),a=U(null),o=Ie({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=U(Ie(new Set));zr(()=>{w(i,new Set(t.products.map(Y=>Y.$id)),!0)});const l=G(()=>t.products.filter(Y=>s(i).has(Y.$id))),c=G(()=>s(l).length!==0),f=G(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function v(Y){const me=new Set(s(i));me.has(Y)?me.delete(Y):me.add(Y),w(i,me,!0)}const m=G(()=>t.products.map(Y=>({id:Y.$id,label:Y.productName,title:Y.productName})));var p=Ov(),_=u(p),g=u(_),x=u(g),b=u(x);hr(b,{class:"h-5 w-5"});var y=d(b),E=d(x,2);E.__click=[lo,r,t];var P=u(E);ft(P,{class:"h-4 w-4"});var $=d(g,2),k=u($);{var N=Y=>{var me=Av(),Ae=u(me);Pa(Ae,{class:"h-4 w-4"});var Je=d(Ae,2),Le=u(Je);L(()=>q(Le,s(n))),h(Y,me)};T(k,Y=>{s(n)&&Y(N)})}var I=d(k,2);{var D=Y=>{var me=Tv(),Ae=u(me);dn(Ae,{class:"h-4 w-4"});var Je=d(Ae,2),Le=u(Je),Ze=d(Le);{var mt=tt=>{var We=lt("+ 1 dépense globale");h(tt,We)};T(Ze,tt=>{s(a).expense&&tt(mt)})}var xt=d(Ze,2);{var Pt=tt=>{var We=lt();L(()=>q(We,`(traité en ${s(a).batches??""} lots)`)),h(tt,We)};T(xt,tt=>{s(a).batches&&s(a).batches>1&&tt(Pt)})}L(()=>q(Le,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),h(Y,me)};T(I,Y=>{s(a)&&Y(D)})}var F=d(I,2),V=u(F);Ev(V,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(Y,me)=>{var Ae=Nv();h(Y,Ae)},$$slots:{default:!0}});var Z=d(F,2),X=d(u(Z),2),re=u(X),C=u(re),z=u(C);pr(z,{class:"h-4 w-4 opacity-50"});var ie=d(z,2),Pe=d(C,2);at(Pe,21,()=>M.uniqueStores,Qa,(Y,me)=>{var Ae=Iv(),Je=u(Ae),Le={};L(()=>{q(Je,s(me)),Le!==(Le=s(me))&&(Ae.value=(Ae.__value=s(me))??"")}),h(Y,Ae)});var R=d(re,2),ae=u(R),Ee=u(ae);Wn(Ee,{class:"h-4 w-4 opacity-50"});var Ne=d(Ee,2),Te=d(ae,2);at(Te,21,()=>M.uniqueWho,Qa,(Y,me)=>{var Ae=Cv(),Je=u(Ae),Le={};L(()=>{q(Je,s(me)),Le!==(Le=s(me))&&(Ae.value=(Ae.__value=s(me))??"")}),h(Y,Ae)});var Re=d(R,2),Qe=u(Re),he=u(Qe);td(he,{class:"h-4 w-4 opacity-50"});var ge=d(he,2),B=d(X,2),ee=u(B),$e=u(ee),_e=u($e);_e.value=_e.__value="delivered";var we=d(_e);we.value=we.__value="ordered";var Ue=d(we);Ue.value=Ue.__value="requested";var He=d(Ue);He.value=He.__value="cancelled";var ue=d($e,2),ke=d(ee,2);{var ht=Y=>{var me=Dv(),Ae=u(me),Je=d(u(Ae),2);L(()=>Je.disabled=s(r)),Ce(Je,()=>o.deliveryDate,Le=>o.deliveryDate=Le),h(Y,me)};T(ke,Y=>{o.status==="ordered"&&Y(ht)})}var St=d(B,2),se=u(St),J=u(se);gs(J,{class:"h-4 w-4 opacity-50"});var ve=d(J,2),je=d(Z,2),ut=d(u(je),2);zn(ut,{get items(){return s(m)},onToggleItem:v,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var fe=d(je,2),De=u(fe);De.__click=[lo,r,t];var Ke=d(De,2);Ke.__click=[kv,c,r,n,a,l,o,t];var Ot=u(Ke);{var nr=Y=>{var me=Mv();h(Y,me)},br=Y=>{var me=Rv(),Ae=O(me);hr(Ae,{class:"h-4 w-4"});var Je=d(Ae);L(()=>q(Je,` Valider ${s(l).length??""} produit(s)`)),h(Y,me)};T(Ot,Y=>{s(r)?Y(nr):Y(br,!1)})}L(()=>{q(y,` ${s(f)??""}`),E.disabled=s(r),ie.disabled=s(r),Ne.disabled=s(r),ge.disabled=s(r),$e.disabled=s(r),be(ue,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),ve.disabled=s(r),De.disabled=s(r),Ke.disabled=s(r)||!s(c)}),Ce(ie,()=>o.store,Y=>o.store=Y),Ce(Ne,()=>o.who,Y=>o.who=Y),Ce(ge,()=>o.expense,Y=>o.expense=Y),Nr($e,()=>o.status,Y=>o.status=Y),Ce(ve,()=>o.notes,Y=>o.notes=Y),h(e,p),K()}it(["click"]);var Bv=()=>M.setGroupBy("none"),jv=()=>M.setGroupBy("store"),Lv=()=>M.setGroupBy("productType"),zv=(e,t)=>M.toggleProductType(t),Vv=S("<button><!> </button>"),Uv=()=>M.toggleTemperature("frais"),Wv=()=>M.toggleTemperature("surgele"),Gv=()=>M.clearTypeAndTemperatureFilters(),Qv=S('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Hv=(e,t)=>M.toggleStore(t),Kv=S("<button> </button>"),Jv=S('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Yv=(e,t)=>M.toggleWho(t),Zv=S("<button> </button>"),Xv=S('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Fv=(e,t)=>{M.clearFilters(),w(t,!1)},eh=S('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function th(e,t){H(t,!0);let r=U(!1);const n=G(()=>M.filters),a=G(()=>M.uniqueStores),o=G(()=>M.uniqueWho),i=G(()=>M.uniqueProductTypes);var l=eh(),c=O(l),f=u(c),v=d(f,2),m=d(u(v),2),p=u(m),_=u(p),g=u(_);es(g,{class:"w-5 h-5"});var x=d(_,2),b=u(x);ft(b,{class:"w-4 h-4"});var y=d(p,2),E=d(u(y),2),P=u(E);P.__change=[Bv];var $=d(P,2);$.__change=[jv];var k=d($,2);k.__change=[Lv];var N=d(y,2),I=u(N),D=d(u(I),2);at(D,20,()=>s(i),he=>he,(he,ge)=>{const B=G(()=>ia(ge));var ee=Vv();ee.__click=[zv,ge];var $e=u(ee);Tr($e,()=>s(B).icon,(we,Ue)=>{Ue(we,{class:"w-3 h-3 mr-1"})});var _e=d($e);L(we=>{be(ee,1,`btn btn-sm ${we??""}`),q(_e,` ${s(B).displayName??""}`)},[()=>s(n).selectedProductTypes.length===0?"btn-soft btn-accent":s(n).selectedProductTypes.includes(ge)?"btn-accent":"btn-dash btn-accent"]),h(he,ee)});var F=d(D,2),V=u(F);V.__click=[Uv];var Z=u(V);ts(Z,{class:"w-3 h-3"});var X=d(V,2);X.__click=[Wv];var re=u(X);rs(re,{class:"w-3 h-3"});var C=d(X,2);{var z=he=>{var ge=Qv();ge.__click=[Gv];var B=u(ge);ft(B,{class:"w-3 h-3"}),h(he,ge)};T(C,he=>{(s(n).selectedProductTypes.length>0||s(n).selectedTemperatures.length>0)&&he(z)})}var ie=d(N,2);{var Pe=he=>{var ge=Jv(),B=u(ge),ee=d(u(B),2);at(ee,20,()=>s(a),$e=>$e,($e,_e)=>{var we=Kv();we.__click=[Hv,_e];var Ue=u(we);L(He=>{be(we,1,`btn btn-sm ${He??""}`),q(Ue,_e)},[()=>s(n).selectedStores.length===0?"btn-soft btn-accent":s(n).selectedStores.includes(_e)?"btn-accent":"btn-dash btn-accent"]),h($e,we)}),h(he,ge)};T(ie,he=>{s(a).length>0&&he(Pe)})}var R=d(ie,2);{var ae=he=>{var ge=Xv(),B=u(ge),ee=d(u(B),2);at(ee,20,()=>s(o),$e=>$e,($e,_e)=>{var we=Zv();we.__click=[Yv,_e];var Ue=u(we);L(He=>{be(we,1,`btn btn-sm ${He??""}`),q(Ue,_e)},[()=>s(n).selectedWho.length===0?"btn-soft btn-accent":s(n).selectedWho.includes(_e)?"btn-accent":"btn-dash btn-accent"]),h($e,we)}),h(he,ge)};T(R,he=>{s(o).length>0&&he(ae)})}var Ee=d(R,4);Ee.__click=[Fv,r];var Ne=u(Ee);ft(Ne,{class:"w-4 h-4 mr-2"});var Te=d(c,2),Re=u(Te),Qe=u(Re);es(Qe,{class:"w-6 h-6"}),L((he,ge)=>{rn(P,s(n).groupBy==="none"),rn($,s(n).groupBy==="store"),rn(k,s(n).groupBy==="productType"),be(V,1,`btn btn-sm ${he??""}`),be(X,1,`btn btn-sm ${ge??""}`)},[()=>s(n).selectedTemperatures.length===0?"btn-soft btn-success":s(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(n).selectedTemperatures.length===0?"btn-soft btn-info":s(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Ic(f,()=>s(r),he=>w(r,he)),h(e,l),K()}it(["change","click"]);var rh=(e,t,r)=>t(r),nh=S("<button><span> </span> <!></button>"),ah=(e,t)=>t(),sh=S('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1"><!> <button class="btn btn-sm btn-primary btn-outline ms-4" type="button"><span>Toutes les dates</span></button></div></fieldset></div></div>');function oh(e,t){H(t,!0);let r=Oe(t,"availableDates",19,()=>[]),n=Oe(t,"currentRange",19,()=>({start:null,end:null})),a=U(Ie(n().start)),o=U(Ie(n().end));zr(()=>{w(a,n().start,!0),w(o,n().end,!0)});function i(y){s(a)===y&&s(o)===y?v():new Date(y)<new Date(s(a))?w(a,y,!0):(new Date(y)>new Date(s(o))||w(a,y,!0),w(o,y,!0)),t.onRangeChange(s(a),s(o))}function l(y){return new Date(y)>=new Date(s(a))&&new Date(y)<=new Date(s(o))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function c(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function f(y){const P=new Date(y).getUTCHours();return P===12?"sun":P===20?"moon":P===8?"cloud":null}function v(){r().length!==0&&(w(a,r()[0],!0),w(o,r()[r().length-1],!0),t.onRangeChange(s(a),s(o)))}var m=sh(),p=u(m),_=u(p),g=d(u(_),2),x=u(g);at(x,18,r,y=>y,(y,E)=>{var P=nh();P.__click=[rh,i,E];var $=u(P),k=u($),N=d($,2);{var I=F=>{md(F,{size:16})},D=F=>{var V=Q(),Z=O(V);{var X=C=>{ld(C,{size:16})},re=C=>{var z=Q(),ie=O(z);{var Pe=R=>{Fu(R,{size:16})};T(ie,R=>{f(E)==="cloud"&&R(Pe)},!0)}h(C,z)};T(Z,C=>{f(E)==="moon"?C(X):C(re,!1)},!0)}h(F,V)};T(N,F=>{f(E)==="sun"?F(I):F(D,!1)})}L((F,V)=>{be(P,1,`btn btn-sm ${F??""}`),q(k,V)},[()=>l(E),()=>c(E)]),h(y,P)});var b=d(x,2);b.__click=[ah,v],h(e,m),K()}it(["click"]);const An=e=>{var t=lh(),r=u(t);da(r,{class:"h-4 w-4 text-amber-600"}),h(e,t)};function ih(){}var lh=S('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),ch=()=>M.clearFilters(),uh=e=>M.setSearchQuery(e.currentTarget.value),dh=()=>M.setGroupBy("none"),fh=()=>M.setGroupBy("store"),vh=()=>M.setGroupBy("productType"),hh=(e,t)=>M.toggleProductType(t),ph=S("<button><!> </button>"),_h=()=>M.toggleTemperature("frais"),mh=()=>M.toggleTemperature("surgele"),gh=()=>M.clearTypeAndTemperatureFilters(),bh=S('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),yh=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),wh=(e,t)=>M.toggleStore(t),Sh=S("<button><!> </button>"),xh=()=>M.clearStoreFilters(),Ph=S('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),$h=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Eh=(e,t)=>M.toggleWho(t),kh=S("<button><!> </button>"),Ah=()=>M.clearWhoFilters(),Th=S('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Nh=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Ih=()=>M.handleSort("productName"),Ch=()=>M.handleSort("store"),Dh=()=>M.handleSort("who"),Mh=()=>M.handleSort("productType"),Rh=S('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Oh=(e,t,r)=>t("store",r().map(n=>n.$id),r()),qh=(e,t,r)=>t("who",r().map(n=>n.$id),r()),Bh=(e,t,r)=>t(r()),jh=S(`<button class="btn btn-sm btn-success btn-soft" title="Ouvrir le modal d'achat groupé"><!> Achat groupé <!></button>`),Lh=S('<tr class="bg-base-200 sticky top-11 z-10 font-semibold"><td colspan="7" class="py-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!></div> <div class="flex items-center gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> Magasin <!></button> <button class="btn btn-sm btn-info btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> Volontaires <!></button> <!></div></div></td></tr>'),zh=(e,t,r)=>t(s(r).$id,"recettes"),Vh=S('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),Uh=S('<div class="text-base-content/60 text-xs"> </div>'),Wh=S('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Gh=S('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Qh=(e,t,r)=>t(s(r).$id,"magasins"),Hh=S('<div class="tooltip tooltip-info"><div class="text-center"> </div></div>'),Kh=S('<div class="text-center"> </div>'),Jh=(e,t,r)=>t(s(r).$id,"volontaires"),Yh=S('<span class="badge badge-soft badge-info badge-sm"> </span>'),Zh=S('<div class="flex flex-wrap justify-center gap-2 pr-8"></div>'),Xh=(e,t,r)=>t(s(r).$id,"recettes"),Fh=S('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),ep=(e,t,r)=>t(s(r).$id,"achats"),tp=S("<div><!> <span> </span></div>"),rp=S('<span class="text-center">-</span>'),np=(e,t,r)=>t(s(r)),ap=S('<div class="flex items-center justify-center gap-2"><div class="bg-warning m-auto rounded px-2 py-1"> <button class="btn btn-xs btn-ghost text-base-content/70 btn-circle btn-outline hover:btn-success hover:text-success-content ms-3 transition-all hover:scale-105" title="Déclarer comme acheté"><!></button></div></div>'),sp=S('<tr><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><!> <div><div class="font-medium"> </div> <!></div></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-2 text-center text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap justify-center gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),op=S("<!> <!>",1),ip=S('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),lp=S('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><!> <div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!> <!> <!> <!>',1);function cp(e,t){H(t,!0);const r={Package:Un,MessageCircleQuestionMark:id,ShoppingCart:hr,Clock:Xu,CircleCheck:Ju,CircleX:Yu,ClipboardCheck:Zu,PackageCheck:cd},n=G(()=>M.displayProducts),a=G(()=>M.stats),o=G(()=>M.uniqueStores),i=G(()=>M.uniqueWho),l=G(()=>M.uniqueProductTypes),c=G(()=>M.filters);let f=U(null),v=U("recettes"),m=U(!1),p=U(!1),_=U(Ie([])),g=U(Ie([])),x=U(!1),b=U(Ie([]));function y(j,W="recettes"){w(v,W,!0),w(f,j,!0)}function E(){w(f,null)}function P(j,W,Ye){w(_,W,!0),w(g,Ye,!0),w(j==="who"?m:p,!0)}function $(j){(!j||j==="who")&&w(m,!1),(!j||j==="store")&&w(p,!1),w(_,[],!0),w(g,[],!0)}function k(j){console.log(`[ProductsTable] Modification groupée réussie: ${j.updatedCount} produits`)}function N(j){const W=j.filter(Ye=>Ye.displayMissingQuantity!=="✅ Complet"&&Ye.missingQuantityArray&&Ye.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${j.length} produits reçus → ${W.length} produits avec quantités manquantes`),w(b,W,!0),w(x,!0)}function I(){w(x,!1),w(b,[],!0)}function D(){console.log("[ProductsTable] Achat groupé créé avec succès"),I()}async function F(j){try{if(!M.currentMainId)throw new Error("mainId non disponible");const W=j.missingQuantityArray||[];if(W.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let Ye=j.$id;j.isSynced||(console.log(`[ProductsTable] Produit ${j.$id} local, création pour validation rapide...`),Ye=(await ur(j.$id,{},Xe=>M.getEnrichedProductById(Xe))).$id,console.log(`[ProductsTable] Produit sync créé: ${Ye}`)),await Oi(M.currentMainId,Ye,W,{store:j.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${j.productName}`)}catch(W){console.error("[ProductsTable] Erreur validation rapide:",W),alert("Erreur lors de la validation rapide: "+W.message)}}var V=lp(),Z=O(V),X=u(Z),re=u(X),C=u(re);ro(C,{class:"mr-1 h-4 w-4"});var z=d(C),ie=d(re,2);ie.__click=[ih];var Pe=u(ie);fd(Pe,{class:"mr-1 h-4 w-4"});var R=d(X,2),ae=u(R),Ee=u(ae),Ne=u(Ee),Te=u(Ne);es(Te,{class:"h-5 w-5"});var Re=d(Ne,2);Re.__click=[ch];var Qe=u(Re);ft(Qe,{class:"h-4 w-4"});var he=d(ae,2),ge=u(he),B=d(u(ge),2),ee=u(B);_d(ee,{class:"h-4 w-4"});var $e=d(ee,2);$e.__input=[uh];var _e=d(ge,2),we=d(u(_e),2),Ue=u(we);Ue.__change=[dh];var He=d(Ue,2);He.__change=[fh];var ue=d(He,2);ue.__change=[vh];var ke=d(he,2),ht=u(ke);oh(ht,{get availableDates(){return M.availableDates},get currentRange(){return M.dateRange},onRangeChange:(j,W)=>M.setDateRange(j,W)});var St=d(ht,2),se=u(St);{var J=j=>{var W=yh(),Ye=u(W),Nt=d(u(Ye),2),Xe=u(Nt);at(Xe,16,()=>s(l),rt=>rt,(rt,nt)=>{const Kt=G(()=>ia(nt));var Ct=ph();Ct.__click=[hh,nt];var lr=u(Ct);Tr(lr,()=>s(Kt).icon,(cr,Jr)=>{Jr(cr,{class:"mr-1 h-5 w-5"})});var Kr=d(lr);L(cr=>{be(Ct,1,`btn btn-sm ${cr??""}`),q(Kr,` ${s(Kt).displayName??""}`)},[()=>s(c).selectedProductTypes.length===0?"btn-soft btn-accent":s(c).selectedProductTypes.includes(nt)?"btn-accent":"btn-dash btn-accent"]),h(rt,Ct)});var It=d(Xe,2);It.__click=[_h];var ir=u(It);ts(ir,{class:"h-5 w-5"});var ze=d(It,2);ze.__click=[mh];var Fe=u(ze);rs(Fe,{class:"h-5 w-5"});var Be=d(ze,2);{var pe=rt=>{var nt=bh();nt.__click=[gh];var Kt=u(nt);ft(Kt,{class:"h-3 w-3"}),h(rt,nt)};T(Be,rt=>{(s(c).selectedProductTypes.length>0||s(c).selectedTemperatures.length>0)&&rt(pe)})}L((rt,nt)=>{be(It,1,`btn btn-sm ms-4 ${rt??""}`),be(ze,1,`btn btn-sm ${nt??""}`)},[()=>s(c).selectedTemperatures.length===0?"btn-soft btn-success":s(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(c).selectedTemperatures.length===0?"btn-soft btn-info":s(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(j,W)};T(se,j=>{s(l).length>0&&j(J)})}var ve=d(St,2),je=u(ve);{var ut=j=>{var W=$h(),Ye=u(W),Nt=d(u(Ye),2),Xe=u(Nt);at(Xe,16,()=>s(o),ze=>ze,(ze,Fe)=>{var Be=Sh();Be.__click=[wh,Fe];var pe=u(Be);pr(pe,{class:"mr-1 h-3 w-3"});var rt=d(pe);L(nt=>{be(Be,1,`btn btn-xs ${nt??""}`),q(rt,` ${Fe??""}`)},[()=>s(c).selectedStores.length===0?"btn-soft btn-accent":s(c).selectedStores.includes(Fe)?"btn-accent":"btn-dash btn-accent"]),h(ze,Be)});var It=d(Xe,2);{var ir=ze=>{var Fe=Ph();Fe.__click=[xh];var Be=u(Fe);ft(Be,{class:"h-3 w-3"}),h(ze,Fe)};T(It,ze=>{s(c).selectedStores.length>0&&ze(ir)})}h(j,W)};T(je,j=>{s(o).length>0&&j(ut)})}var fe=d(je,2);{var De=j=>{var W=Nh(),Ye=u(W),Nt=d(u(Ye),2),Xe=u(Nt);at(Xe,16,()=>s(i),ze=>ze,(ze,Fe)=>{var Be=kh();Be.__click=[Eh,Fe];var pe=u(Be);Wn(pe,{class:"mr-1 h-3 w-3"});var rt=d(pe);L(nt=>{be(Be,1,`btn btn-xs ${nt??""}`),q(rt,` ${Fe??""}`)},[()=>s(c).selectedWho.length===0?" btn-soft btn-info":s(c).selectedWho.includes(Fe)?" btn-info":"btn-dash btn-info"]),h(ze,Be)});var It=d(Xe,2);{var ir=ze=>{var Fe=Th();Fe.__click=[Ah];var Be=u(Fe);ft(Be,{class:"h-3 w-3"}),h(ze,Fe)};T(It,ze=>{s(c).selectedWho.length>0&&ze(ir)})}h(j,W)};T(fe,j=>{s(i).length>0&&j(De)})}var Ke=d(R,2),Ot=u(Ke),nr=u(Ot),br=u(nr),Y=u(br);Y.__click=[Ih];var me=u(Y),Ae=u(me);ro(Ae,{class:"h-4 w-4"});var Je=d(Ae,2);{var Le=j=>{var W=lt();L(()=>q(W,s(c).sortDirection==="asc"?"↑":"↓")),h(j,W)};T(Je,j=>{s(c).sortColumn==="productName"&&j(Le)})}var Ze=d(Y);Ze.__click=[Ch];var mt=u(Ze),xt=u(mt);pr(xt,{class:"h-4 w-4"});var Pt=d(xt,2);{var tt=j=>{var W=lt();L(()=>q(W,s(c).sortDirection==="asc"?"↑":"↓")),h(j,W)};T(Pt,j=>{s(c).sortColumn==="store"&&j(tt)})}var We=d(Ze);We.__click=[Dh];var qt=u(We),Gt=u(qt);ns(Gt,{class:"h-4 w-4"});var ar=d(Gt,2);{var Bt=j=>{var W=lt();L(()=>q(W,s(c).sortDirection==="asc"?"↑":"↓")),h(j,W)};T(ar,j=>{s(c).sortColumn==="who"&&j(Bt)})}var Qt=d(We);Qt.__click=[Mh];var Ur=u(Qt),yr=d(u(Ur));{var wr=j=>{var W=lt();L(()=>q(W,s(c).sortDirection==="asc"?"↑":"↓")),h(j,W)};T(yr,j=>{s(c).sortColumn==="productType"&&j(wr)})}var sr=d(Qt,2),Sr=u(sr),or=u(Sr);hr(or,{class:"h-4 w-4"});var Wr=d(sr),xr=u(Wr),Gr=u(xr);ad(Gr,{class:"h-4 w-4"});var _n=d(nr);at(_n,21,()=>Object.entries(s(n)),([j,W])=>j,(j,W)=>{var Ye=G(()=>vo(s(W),2));let Nt=()=>s(Ye)[0],Xe=()=>s(Ye)[1];var It=op(),ir=O(It);{var ze=Be=>{const pe=G(()=>ia(Nt()));var rt=Lh(),nt=u(rt),Kt=u(nt),Ct=u(Kt),lr=u(Ct);{var Kr=Et=>{var gt=lt();L(()=>q(gt,`🏪 ${Nt()??""} (${Xe().length??""})`)),h(Et,gt)},cr=Et=>{var gt=Q(),Yr=O(gt);{var wn=Jt=>{var $r=Rh(),Zn=u($r);Tr(Zn,()=>s(pe).icon,(Ca,xn)=>{xn(Ca,{class:"h-4 w-4"})});var Xn=d(Zn,2),Sn=u(Xn),Fn=d(Xn,2),Ia=u(Fn);L(()=>{q(Sn,s(pe).displayName),q(Ia,`(${Xe().length??""})`)}),h(Jt,$r)},Zr=Jt=>{var $r=lt();L(()=>q($r,`📦 ${Nt()??""} (${Xe().length??""})`)),h(Jt,$r)};T(Yr,Jt=>{s(c).groupBy==="productType"?Jt(wn):Jt(Zr,!1)},!0)}h(Et,gt)};T(lr,Et=>{s(c).groupBy==="store"?Et(Kr):Et(cr,!1)})}var Jr=d(Ct,2),bn=u(Jr);bn.__click=[Oh,P,Xe];var Hn=u(bn);pr(Hn,{size:16});var Kn=d(Hn,2);da(Kn,{size:16});var yn=d(bn,2);yn.__click=[qh,P,Xe];var Jn=u(yn);ns(Jn,{size:16});var Ta=d(Jn,2);da(Ta,{size:16});var Na=d(yn,2);{var Yn=Et=>{var gt=jh();gt.__click=[Bh,N,Xe];var Yr=u(gt);hr(Yr,{size:16});var wn=d(Yr,2);to(wn,{size:16}),h(Et,gt)};T(Na,Et=>{Xe().some(gt=>gt.displayMissingQuantity!=="✅ Complet")&&Et(Yn)})}h(Be,rt)};T(ir,Be=>{Nt()!==""&&Be(ze)})}var Fe=d(ir,2);at(Fe,17,()=>yd(Xe(),s(c)),Be=>Be.$id,(Be,pe)=>{const rt=G(()=>M.getFormattedTotalNeeded(s(pe).$id)),nt=G(()=>ia(s(pe).productType)),Kt=G(()=>wd(s(pe).purchases||[]));var Ct=sp(),lr=u(Ct);lr.__click=[zh,y,pe];var Kr=u(lr),cr=u(Kr),Jr=u(cr);{var bn=de=>{var Se=Vh(),Ve=u(Se);sd(Ve,{class:"h-4 w-4 animate-spin"}),h(de,Se)};T(Jr,de=>{s(pe).status==="isSyncing"&&de(bn)})}var Hn=d(Jr,2),Kn=u(Hn),yn=u(Kn),Jn=d(Kn,2);{var Ta=de=>{var Se=Uh(),Ve=u(Se);L(()=>q(Ve,`Ancien: ${s(pe).previousNames[0]??""}`)),h(de,Se)};T(Jn,de=>{s(pe).previousNames&&s(pe).previousNames.length>0&&de(Ta)})}var Na=d(cr,2),Yn=u(Na);{var Et=de=>{var Se=Wh(),Ve=u(Se);ts(Ve,{class:"text-success h-4 w-4"}),h(de,Se)};T(Yn,de=>{s(pe).pFrais&&de(Et)})}var gt=d(Yn,2);{var Yr=de=>{var Se=Gh(),Ve=u(Se);rs(Ve,{class:"text-info h-4 w-4"}),h(de,Se)};T(gt,de=>{s(pe).pSurgel&&de(Yr)})}var wn=d(Kr,2);An(wn);var Zr=d(lr);Zr.__click=[Qh,y,pe];var Jt=u(Zr);{var $r=de=>{var Se=Hh(),Ve=u(Se),bt=u(Ve);L(()=>{Rr(Se,"data-tip",s(pe).storeInfo?.storeComment),q(bt,s(pe).storeInfo?.storeName||"-")}),h(de,Se)},Zn=de=>{var Se=Kh(),Ve=u(Se);L(()=>q(Ve,s(pe).storeInfo?.storeName||"-")),h(de,Se)};T(Jt,de=>{s(pe).storeInfo?.storeComment?de($r):de(Zn,!1)})}var Xn=d(Jt,2);An(Xn);var Sn=d(Zr);Sn.__click=[Jh,y,pe];var Fn=u(Sn);{var Ia=de=>{var Se=Zh();at(Se,20,()=>s(pe).who,Ve=>Ve,(Ve,bt)=>{var jt=Yh(),Er=u(jt);L(()=>q(Er,bt)),h(Ve,jt)}),h(de,Se)};T(Fn,de=>{s(pe).who&&s(pe).who.length>0&&de(Ia)})}var Ca=d(Fn,2);An(Ca);var xn=d(Sn),ji=u(xn),bs=u(ji);Tr(bs,()=>s(nt).icon,(de,Se)=>{Se(de,{class:"h-3 w-3"})});var Li=d(bs),Da=d(xn);Da.__click=[Xh,y,pe];var ys=u(Da),zi=u(ys),ws=d(ys,2);{var Vi=de=>{var Se=Fh(),Ve=u(Se),bt=u(Ve),jt=d(bt);ms(jt,{class:"h-3 w-3"});var Er=d(Ve,2),ea=u(Er),Pn=d(ea);gd(Pn,{class:"h-3 w-3"}),L(()=>{q(bt,`${s(pe)?.nbRecipes??""} `),q(ea,`${s(pe)?.totalAssiettes??""} `)}),h(de,Se)};T(ws,de=>{(s(pe).nbRecipes||s(pe).totalAssiettes)&&de(Vi)})}var Ui=d(ws,2);An(Ui);var Ma=d(Da);Ma.__click=[ep,y,pe];var Ss=u(Ma),xs=u(Ss);at(xs,17,()=>s(Kt),de=>de.status,(de,Se)=>{const Ve=G(()=>r[s(Se).icon]);var bt=tp(),jt=u(bt);Tr(jt,()=>s(Ve),(Pn,Zi)=>{Zi(Pn,{class:"h-4 w-4"})});var Er=d(jt,2),ea=u(Er);L(Pn=>{be(bt,1,`badge badge-soft flex items-center gap-2 ${s(Se).badgeClass??""}`),q(ea,Pn)},[()=>$a(s(Se).quantity,s(Se).unit)]),h(de,bt)});var Wi=d(xs,2);{var Gi=de=>{var Se=rp();h(de,Se)};T(Wi,de=>{s(Kt).length===0&&de(Gi)})}var Qi=d(Ss,2);An(Qi);var Hi=d(Ma),Ki=u(Hi);{var Ji=de=>{var Se=ap(),Ve=u(Se),bt=u(Ve),jt=d(bt);jt.__click=[np,F,pe];var Er=u(jt);dn(Er,{size:16}),L(()=>q(bt,`${s(pe).displayMissingQuantity??""} `)),h(de,Se)},Yi=de=>{to(de,{size:28,strokeWidth:3,class:"text-success m-auto"})};T(Ki,de=>{s(pe).displayMissingQuantity!=="✅ Complet"?de(Ji):de(Yi,!1)})}L(()=>{be(Ct,1,`hover:bg-base-200/20 transition-colors ${s(pe).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-400 bg-blue-50/40":""}`),q(yn,s(pe).productName),be(Zr,1,`${s(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),be(xn,1,Fo(s(c).groupBy==="productType"?"hidden":"")),q(Li,` ${s(nt).displayName??""}`),q(zi,s(rt))}),h(Be,Ct)}),h(j,It)});var Qr=d(Ot,2);{var $t=j=>{var W=ip();h(j,W)};T(Qr,j=>{Object.values(s(n)).flat().length===0&&j($t)})}var Ht=d(Z,2);{var mn=j=>{Xf(j,{get productId(){return s(f)},get initialTab(){return s(v)},onClose:E})};T(Ht,j=>{s(f)&&j(mn)})}var Hr=d(Ht,2);{var gn=j=>{iv(j,{get productIds(){return s(_)},get products(){return s(g)},onClose:()=>$("who"),onSuccess:k})};T(Hr,j=>{s(m)&&j(gn)})}var Pr=d(Hr,2);{var ka=j=>{pv(j,{get productIds(){return s(_)},get products(){return s(g)},onClose:()=>$("store"),onSuccess:k})};T(Pr,j=>{s(p)&&j(ka)})}var Gn=d(Pr,2);{var Aa=j=>{qv(j,{get products(){return s(b)},onClose:I,onSuccess:D})};T(Gn,j=>{s(x)&&j(Aa)})}var Qn=d(Gn,2);th(Qn,{}),L(()=>{q(z,` ${s(a).total??""}`),Ac($e,s(c).searchQuery),rn(Ue,s(c).groupBy==="none"),rn(He,s(c).groupBy==="store"),rn(ue,s(c).groupBy==="productType"),be(Ze,1,`hover:bg-base-100 cursor-pointer text-center ${s(c).groupBy==="store"?"hidden":""}`),be(Qt,1,`hover:bg-base-100 cursor-pointer text-center ${s(c).groupBy==="productType"?"hidden":""}`)}),h(e,V),K()}it(["click","input","change"]);Dl();var up=S('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function dp(e){var t=up();h(e,t)}var fp=S('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function vp(e,t){var r=fp(),n=d(u(r),2),a=d(u(n),2),o=u(a);L(()=>q(o,t.message)),h(e,r)}var hp=S('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function pp(e,t){var r=hp(),n=u(r),a=u(n);Pa(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(u(o),2),l=u(i);L(()=>q(l,t.message||"Erreur inconnue")),h(e,r)}var _p=S('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),mp=S('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),gp=S('<div class="text-base-content/60"> </div>'),bp=S('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),yp=S('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),wp=S('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Sp=S('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function xp(e,t){H(t,!0);let r,n=U(null),a=U(!0),o=U(!1);si(async()=>{r=Lu();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await M.initialize(r)}catch(R){const ae=R instanceof Error?R.message:"Erreur lors de l'initialisation";w(n,ae,!0),console.error("[App] Erreur initialisation:",R)}finally{w(a,!1)}}),Rc(()=>{M.destroy()});async function i(){if(!(!r||s(o))){w(o,!0);try{await M.forceReload(r)}catch(R){console.error("[App] Erreur lors du rechargement forcé:",R)}finally{w(o,!1)}}}const l=G(()=>s(n)||M.error),c=G(()=>s(a)||M.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=Sp(),m=u(v),p=u(m),_=u(p),g=d(u(_),2),x=u(g);{var b=R=>{var ae=_p();h(R,ae)};T(x,R=>{M.realtimeConnected&&R(b)})}var y=d(x,2);{var E=R=>{var ae=mp();h(R,ae)};T(y,R=>{M.syncing&&R(E)})}var P=d(y,2);{var $=R=>{var ae=gp(),Ee=u(ae);L(Ne=>q(Ee,`Maj: ${Ne??""}`),[()=>new Date(M.lastSync).toLocaleTimeString()]),h(R,ae)};T(P,R=>{M.lastSync&&R($)})}var k=d(P,2);{var N=R=>{var ae=bp();let Ee;ae.__click=i;var Ne=u(ae);vd(Ne,{class:"h-4 w-4"}),L(Te=>{Ee=be(ae,1,"btn btn-outline btn-sm",null,Ee,Te),ae.disabled=s(o)||M.loading},[()=>({loading:s(o)||M.loading})]),h(R,ae)};T(k,R=>{s(n)||R(N)})}var I=d(k,2);{var D=R=>{var ae=yp(),Ee=u(ae),Ne=u(Ee);od(Ne,{class:"mr-2 h-4 w-4"}),L(()=>Rr(Ee,"href",f)),h(R,ae)};T(I,R=>{s(n)&&R(D)})}var F=d(m,2),V=u(F);{var Z=R=>{pp(R,{get message(){return s(l)}})},X=R=>{var ae=Q(),Ee=O(ae);{var Ne=Te=>{vp(Te,{get message(){return s(l)}})};T(Ee,Te=>{s(l)&&Te(Ne)},!0)}h(R,ae)};T(V,R=>{s(n)?R(Z):R(X,!1)})}var re=d(V,2);{var C=R=>{dp(R)};T(re,R=>{s(c)&&R(C)})}var z=d(re,2);{var ie=R=>{cp(R,{})},Pe=R=>{var ae=Q(),Ee=O(ae);{var Ne=Te=>{var Re=wp();h(Te,Re)};T(Ee,Te=>{!M.loading&&!s(n)&&Te(Ne)},!0)}h(R,ae)};T(z,R=>{M.enrichedProducts.length>0?R(ie):R(Pe,!1)})}h(e,v),K()}it(["click"]);mc(xp,{target:document.getElementById("app_products")});
