(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const vo=!1;var la=Array.isArray,rl=Array.prototype.indexOf,os=Array.from,Va=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,nl=Object.getOwnPropertyDescriptors,al=Object.prototype,sl=Array.prototype,ho=Object.getPrototypeOf,$s=Object.isExtensible;function En(e){return typeof e=="function"}const te=()=>{};function ol(e){for(var t=0;t<e.length;t++)e[t]()}function po(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function _o(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const mt=2,is=4,ls=8,jr=16,er=32,Br=64,cs=128,Nt=256,aa=512,ct=1024,wt=2048,gr=4096,Dt=8192,Lr=16384,us=32768,zr=65536,Es=1<<17,il=1<<18,fn=1<<19,ll=1<<20,Ua=1<<21,ca=1<<22,Ir=1<<23,Mr=Symbol("$state"),mo=Symbol("legacy props"),cl=Symbol(""),In=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function go(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ul(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function dl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function fl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function hl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function pl(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function _l(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ml(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function gl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function bl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ua=1,da=2,bo=4,yl=8,wl=16,Sl=1,xl=2,Pl=4,$l=8,El=16,kl=1,Al=2,et=Symbol(),Tl="http://www.w3.org/1999/xhtml",Nl="http://www.w3.org/2000/svg",Cl="@attach";function Il(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ml(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Dl=!1;function yo(e){return e===this.v}function wo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Rl(e,t){return e!==t}function So(e){return!wo(e,this.v)}let vn=!1,Ol=!1;function ql(){vn=!0}let Ge=null;function nn(e){Ge=e}function H(e,t=!1,r){Ge={p:Ge,c:null,e:null,s:e,x:null,l:vn&&!t?{s:null,u:null,$:[]}:null}}function K(e){var t=Ge,r=t.e;if(r!==null){t.e=null;for(var n of r)jo(n)}return Ge=t.p,{}}function hn(){return!vn||Ge!==null&&Ge.l===null}let Tr=[];function xo(){var e=Tr;Tr=[],ol(e)}function Dr(e){if(Tr.length===0&&!Mn){var t=Tr;queueMicrotask(()=>{t===Tr&&xo()})}Tr.push(e)}function jl(){for(;Tr.length>0;)xo()}const Bl=new WeakMap;function Po(e){var t=ye;if(t===null)return xe.f|=Ir,e;if((t.f&us)===0){if((t.f&cs)===0)throw!t.parent&&e instanceof Error&&$o(e),e;t.b.error(e)}else an(e,t)}function an(e,t){for(;t!==null;){if((t.f&cs)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&$o(e),e}function $o(e){const t=Bl.get(e);t&&(Va(e,"message",{value:t.message}),Va(e,"stack",{value:t.stack}))}const Zn=new Set;let De=null,Fn=null,Wa=new Set,Wt=[],fa=null,Ga=!1,Mn=!1;class Tt{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#l=[];#o=[];#i=[];#a=[];#s=[];#f=[];skipped_effects=new Set;process(t){Wt=[],Fn=null;var r=Tt.apply(this);for(const o of t)this.#n(o);if(this.#c===0){this.#v();var n=this.#o,a=this.#i;this.#o=[],this.#i=[],this.#a=[],Fn=this,De=null,ks(n),ks(a),Fn=null,this.#u?.resolve()}else this.#d(this.#o),this.#d(this.#i),this.#d(this.#a);r();for(const o of this.#l)jn(o);this.#l=[]}#n(t){t.f^=ct;for(var r=t.first;r!==null;){var n=r.f,a=(n&(er|Br))!==0,o=a&&(n&ct)!==0,i=o||(n&Dt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=ct:(n&is)!==0?this.#i.push(r):(n&ct)===0&&((n&ca)!==0&&r.b?.is_pending()?this.#l.push(r):ma(r)&&((r.f&jr)!==0&&this.#a.push(r),jn(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#d(t){for(const r of t)((r.f&wt)!==0?this.#s:this.#f).push(r),vt(r,ct);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){De=this}deactivate(){De=null}flush(){if(Wt.length>0){if(this.activate(),Eo(),De!==null&&De!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of Wa)if(Wa.delete(t),t(),De!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),Zn.size>1){this.#e.clear();let t=!0;for(const r of Zn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;ko(n)}if(Wt.length>0){De=r;const n=Tt.apply(r);for(const a of Wt)r.#n(a);Wt=[],n()}}De=null}Zn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#s)vt(t,wt),Rr(t);for(const t of this.#f)vt(t,gr),Rr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=po()).promise}static ensure(){if(De===null){const t=De=new Tt;Zn.add(De),Mn||Tt.enqueue(()=>{De===t&&t.flush()})}return De}static enqueue(t){Dr(t)}static apply(t){return te}}function Ll(e){var t=Mn;Mn=!0;try{for(var r;;){if(jl(),Wt.length===0&&(De?.flush(),Wt.length===0))return fa=null,r;Eo()}}finally{Mn=t}}function Eo(){var e=tn;Ga=!0;try{var t=0;for(Cs(!0);Wt.length>0;){var r=Tt.ensure();if(t++>1e3){var n,a;zl()}r.process(Wt),vr.clear()}}finally{Ga=!1,Cs(e),fa=null}}function zl(){try{hl()}catch(e){an(e,fa)}}let Ar=null;function ks(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Lr|Dt))===0&&ma(n)&&(Ar=[],jn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?zo(n):n.fn=null),Ar?.length>0)){vr.clear();for(const a of Ar)jn(a);Ar=[]}}Ar=null}}function ko(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&mt)!==0?ko(t):(r&(ca|jr))!==0&&(vt(t,wt),Rr(t))}}function Rr(e){for(var t=fa=e;t.parent!==null;){t=t.parent;var r=t.f;if(Ga&&t===ye&&(r&jr)!==0)return;if((r&(Br|er))!==0){if((r&ct)===0)return;t.f^=ct}}Wt.push(t)}function Ao(e){let t=0,r=_r(0),n;return()=>{nc()&&(s(r),ps(()=>(t===0&&(n=pn(()=>e(()=>Gt(r)))),t+=1,()=>{Dr(()=>{t-=1,t===0&&(n?.(),n=void 0,Gt(r))})})))}}var Vl=zr|fn|cs;function Ul(e,t,r){new Wl(e,t,r)}class Wl{parent;#e=!1;#r;#c=null;#u;#l;#o;#i=null;#a=null;#s=null;#f=null;#n=0;#d=0;#v=!1;#t=null;#m=()=>{this.#t&&sn(this.#t,this.#n)};#g=Ao(()=>(this.#t=_r(this.#n),()=>{this.#t=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#l=n,this.parent=ye.b,this.#e=!!this.#u.pending,this.#o=nr(()=>{ye.b=this;{try{this.#i=at(()=>n(this.#r))}catch(a){this.error(a)}this.#d>0?this.#p():this.#e=!1}},Vl)}#w(){try{this.#i=at(()=>this.#l(this.#r))}catch(t){this.error(t)}this.#e=!1}#S(){const t=this.#u.pending;t&&(this.#a=at(()=>t(this.#r)),Tt.enqueue(()=>{this.#i=this.#h(()=>(Tt.ensure(),at(()=>this.#l(this.#r)))),this.#d>0?this.#p():(Zt(this.#a,()=>{this.#a=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#h(t){var r=ye,n=xe,a=Ge;Qt(this.#o),_t(this.#o),nn(this.#o.ctx);try{return t()}catch(o){return Po(o),null}finally{Qt(r),_t(n),nn(a)}}#p(){const t=this.#u.pending;this.#i!==null&&(this.#f=document.createDocumentFragment(),Gl(this.#i,this.#f)),this.#a===null&&(this.#a=at(()=>t(this.#r)))}#_(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(t);return}this.#d+=t,this.#d===0&&(this.#e=!1,this.#a&&Zt(this.#a,()=>{this.#a=null}),this.#f&&(this.#r.before(this.#f),this.#f=null),Dr(()=>{Tt.ensure().flush()}))}update_pending_count(t){this.#_(t),this.#n+=t,Wa.add(this.#m)}get_effect_pending(){return this.#g(),s(this.#t)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#i&&(st(this.#i),this.#i=null),this.#a&&(st(this.#a),this.#a=null),this.#s&&(st(this.#s),this.#s=null);var a=!1,o=!1;const i=()=>{if(a){Ml();return}a=!0,o&&bl(),Tt.ensure(),this.#n=0,this.#s!==null&&Zt(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#i=this.#h(()=>(this.#v=!1,at(()=>this.#l(this.#r)))),this.#d>0?this.#p():this.#e=!1};var l=xe;try{_t(null),o=!0,r?.(t,i),o=!1}catch(c){an(c,this.#o&&this.#o.parent)}finally{_t(l)}n&&Dr(()=>{this.#s=this.#h(()=>{this.#v=!0;try{return at(()=>{n(this.#r,()=>t,()=>i)})}catch(c){return an(c,this.#o.parent),null}finally{this.#v=!1}})})}}function Gl(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:Un(r);t.append(r),r=a}}function To(e,t,r){const n=hn()?va:ds;if(t.length===0){r(e.map(n));return}var a=De,o=ye,i=Ql();Promise.all(t.map(l=>Hl(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(o.f&Lr)===0&&an(c,o)}a?.deactivate(),No()}).catch(l=>{an(l,o)})}function Ql(){var e=ye,t=xe,r=Ge,n=De;return function(){Qt(e),_t(t),nn(r),n?.activate()}}function No(){Qt(null),_t(null),nn(null)}function va(e){var t=mt|wt,r=xe!==null&&(xe.f&mt)!==0?xe:null;return ye===null||r!==null&&(r.f&Nt)!==0?t|=Nt:ye.f|=fn,{ctx:Ge,deps:null,effects:null,equals:yo,f:t,fn:e,reactions:null,rv:0,v:et,wv:0,parent:r??ye,ac:null}}function Hl(e,t){let r=ye;r===null&&ul();var n=r.b,a=void 0,o=_r(et),i=!xe,l=new Map;return sc(()=>{var c=po();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=De,v=n.is_pending();i&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(In),l.set(f,c)));const m=(p,_=void 0)=>{v||f.activate(),_?_!==In&&(o.f|=Ir,sn(o,_)):((o.f&Ir)!==0&&(o.f^=Ir),sn(o,p)),i&&(n.update_pending_count(-1),v||f.decrement()),No()};c.promise.then(m,p=>m(null,p||"unknown"))}),qo(()=>{for(const c of l.values())c.reject(In)}),new Promise(c=>{function f(v){function m(){v===a?c(o):f(a)}v.then(m,m)}f(a)})}function G(e){const t=va(e);return Wo(t),t}function ds(e){const t=va(e);return t.equals=So,t}function Co(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)st(t[r])}}function Kl(e){for(var t=e.parent;t!==null;){if((t.f&mt)===0)return t;t=t.parent}return null}function fs(e){var t,r=ye;Qt(Kl(e));try{Co(e),t=Ko(e)}finally{Qt(r)}return t}function Io(e){var t=fs(e);if(e.equals(t)||(e.v=t,e.wv=Qo()),!Ur){var r=(dr||(e.f&Nt)!==0)&&e.deps!==null?gr:ct;vt(e,r)}}const vr=new Map;function _r(e,t){var r={f:0,v:e,reactions:null,equals:yo,rv:0,wv:0};return r}function U(e,t){const r=_r(e);return Wo(r),r}function Jl(e,t=!1,r=!0){const n=_r(e);return t||(n.equals=So),vn&&r&&Ge!==null&&Ge.l!==null&&(Ge.l.s??=[]).push(n),n}function w(e,t,r=!1){xe!==null&&(!Mt||(xe.f&Es)!==0)&&hn()&&(xe.f&(mt|jr|ca|Es))!==0&&!Xt?.includes(e)&&gl();let n=r?Ce(t):t;return sn(e,n)}function sn(e,t){if(!e.equals(t)){var r=e.v;Ur?vr.set(e,t):vr.set(e,r),e.v=t;var n=Tt.ensure();n.capture(e,r),(e.f&mt)!==0&&((e.f&wt)!==0&&fs(e),vt(e,(e.f&Nt)===0?ct:gr)),e.wv=Qo(),Mo(e,wt),hn()&&ye!==null&&(ye.f&ct)!==0&&(ye.f&(er|Br))===0&&(At===null?lc([e]):At.push(e))}return t}function Gt(e){w(e,e.v+1)}function Mo(e,t){var r=e.reactions;if(r!==null)for(var n=hn(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===ye)){var c=(l&wt)===0;c&&vt(i,t),(l&mt)!==0?Mo(i,gr):c&&((l&jr)!==0&&Ar!==null&&Ar.push(i),Rr(i))}}}function Ce(e){if(typeof e!="object"||e===null||Mr in e)return e;const t=ho(e);if(t!==al&&t!==sl)return e;var r=new Map,n=la(e),a=U(0),o=Ft,i=l=>{if(Ft===o)return l();var c=xe,f=Ft;_t(null),Ms(o);var v=l();return _t(c),Ms(f),v};return n&&r.set("length",U(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&_l();var v=r.get(c);return v===void 0?v=i(()=>{var m=U(f.value);return r.set(c,m),m}):w(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=i(()=>U(et));r.set(c,v),Gt(a)}}else w(f,et),Gt(a);return!0},get(l,c,f){if(c===Mr)return e;var v=r.get(c),m=c in l;if(v===void 0&&(!m||fr(l,c)?.writable)&&(v=i(()=>{var _=Ce(m?l[c]:et),g=U(_);return g}),r.set(c,v)),v!==void 0){var p=s(v);return p===et?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=s(v))}else if(f===void 0){var m=r.get(c),p=m?.v;if(m!==void 0&&p!==et)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===Mr)return!0;var f=r.get(c),v=f!==void 0&&f.v!==et||Reflect.has(l,c);if(f!==void 0||ye!==null&&(!v||fr(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=v?Ce(l[c]):et,_=U(p);return _}),r.set(c,f));var m=s(f);if(m===et)return!1}return v},set(l,c,f,v){var m=r.get(c),p=c in l;if(n&&c==="length")for(var _=f;_<m.v;_+=1){var g=r.get(_+"");g!==void 0?w(g,et):_ in l&&(g=i(()=>U(et)),r.set(_+"",g))}if(m===void 0)(!p||fr(l,c)?.writable)&&(m=i(()=>U(void 0)),w(m,Ce(f)),r.set(c,m));else{p=m.v!==et;var x=i(()=>Ce(f));w(m,x)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(v,f),!p){if(n&&typeof c=="string"){var y=r.get("length"),E=Number(c);Number.isInteger(E)&&E>=y.v&&w(y,E+1)}Gt(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(m=>{var p=r.get(m);return p===void 0||p.v!==et});for(var[f,v]of r)v.v!==et&&!(f in l)&&c.push(f);return c},setPrototypeOf(){ml()}})}function As(e){try{if(e!==null&&typeof e=="object"&&Mr in e)return e[Mr]}catch{}return e}function Yl(e,t){return Object.is(As(e),As(t))}var Ts,Do,Ro,Oo;function Zl(){if(Ts===void 0){Ts=window,Do=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ro=fr(t,"firstChild").get,Oo=fr(t,"nextSibling").get,$s(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),$s(r)&&(r.__t=void 0)}}function tr(e=""){return document.createTextNode(e)}function on(e){return Ro.call(e)}function Un(e){return Oo.call(e)}function u(e,t){return on(e)}function O(e,t=!1){{var r=on(e);return r instanceof Comment&&r.data===""?Un(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=Un(n);return n}function Xl(e){e.textContent=""}function ha(){return!1}function Fl(e,t){if(t){const r=document.body;e.autofocus=!0,Dr(()=>{document.activeElement===r&&e.focus()})}}let Ns=!1;function ec(){Ns||(Ns=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function pa(e){var t=xe,r=ye;_t(null),Qt(null);try{return e()}finally{_t(t),Qt(r)}}function vs(e,t,r,n=r){e.addEventListener(t,()=>pa(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),ec()}function tc(e){ye===null&&xe===null&&vl(),xe!==null&&(xe.f&Nt)!==0&&ye===null&&fl(),Ur&&dl()}function rc(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function rr(e,t,r,n=!0){var a=ye;a!==null&&(a.f&Dt)!==0&&(e|=Dt);var o={ctx:Ge,deps:null,nodes_start:null,nodes_end:null,f:e|wt,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{jn(o),o.f|=us}catch(c){throw st(o),c}else t!==null&&Rr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&fn)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&rc(i,a),xe!==null&&(xe.f&mt)!==0&&(e&Br)===0)){var l=xe;(l.effects??=[]).push(i)}}return o}function nc(){return xe!==null&&!Mt}function qo(e){const t=rr(ls,null,!1);return vt(t,ct),t.teardown=e,t}function Vr(e){tc();var t=ye.f,r=!xe&&(t&er)!==0&&(t&us)===0;if(r){var n=Ge;(n.e??=[]).push(e)}else return jo(e)}function jo(e){return rr(is|ll,e,!1)}function ac(e){Tt.ensure();const t=rr(Br|fn,e,!0);return(r={})=>new Promise(n=>{r.outro?Zt(t,()=>{st(t),n(void 0)}):(st(t),n(void 0))})}function hs(e){return rr(is,e,!1)}function sc(e){return rr(ca|fn,e,!0)}function ps(e,t=0){return rr(ls|t,e,!0)}function L(e,t=[],r=[]){To(t,r,n=>{rr(ls,()=>e(...n.map(s)),!0)})}function nr(e,t=0){var r=rr(jr|t,e,!0);return r}function at(e,t=!0){return rr(er|fn,e,!0,t)}function Bo(e){var t=e.teardown;if(t!==null){const r=Ur,n=xe;Is(!0),_t(null);try{t.call(null)}finally{Is(r),_t(n)}}}function Lo(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&pa(()=>{a.abort(In)});var n=r.next;(r.f&Br)!==0?r.parent=null:st(r,t),r=n}}function oc(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&er)===0&&st(t),t=r}}function st(e,t=!0){var r=!1;(t||(e.f&il)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(ic(e.nodes_start,e.nodes_end),r=!0),Lo(e,t&&!r),sa(e,0),vt(e,Lr);var n=e.transitions;if(n!==null)for(const o of n)o.stop();Bo(e);var a=e.parent;a!==null&&a.first!==null&&zo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function ic(e,t){for(;e!==null;){var r=e===t?null:Un(e);e.remove(),e=r}}function zo(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Zt(e,t){var r=[];_s(e,r,!0),Vo(r,()=>{st(e),t&&t()})}function Vo(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function _s(e,t,r){if((e.f&Dt)===0){if(e.f^=Dt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,o=(n.f&zr)!==0||(n.f&er)!==0;_s(n,t,o?r:!1),n=a}}}function _a(e){Uo(e,!0)}function Uo(e,t){if((e.f&Dt)!==0){e.f^=Dt,(e.f&ct)===0&&(vt(e,wt),Rr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&zr)!==0||(r.f&er)!==0;Uo(r,a?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let tn=!1;function Cs(e){tn=e}let Ur=!1;function Is(e){Ur=e}let xe=null,Mt=!1;function _t(e){xe=e}let ye=null;function Qt(e){ye=e}let Xt=null;function Wo(e){xe!==null&&(Xt===null?Xt=[e]:Xt.push(e))}let dt=null,yt=0,At=null;function lc(e){At=e}let Go=1,qn=0,Ft=qn;function Ms(e){Ft=e}let dr=!1;function Qo(){return++Go}function ma(e){var t=e.f;if((t&wt)!==0)return!0;if((t&gr)!==0){var r=e.deps,n=(t&Nt)!==0;if(r!==null){var a,o,i=(t&aa)!==0,l=n&&ye!==null&&!dr,c=r.length;if((i||l)&&(ye===null||(ye.f&Lr)===0)){var f=e,v=f.parent;for(a=0;a<c;a++)o=r[a],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=aa),l&&v!==null&&(v.f&Nt)===0&&(f.f^=Nt)}for(a=0;a<c;a++)if(o=r[a],ma(o)&&Io(o),o.wv>e.wv)return!0}(!n||ye!==null&&!dr)&&vt(e,ct)}return!1}function Ho(e,t,r=!0){var n=e.reactions;if(n!==null&&!Xt?.includes(e))for(var a=0;a<n.length;a++){var o=n[a];(o.f&mt)!==0?Ho(o,t,!1):t===o&&(r?vt(o,wt):(o.f&ct)!==0&&vt(o,gr),Rr(o))}}function Ko(e){var t=dt,r=yt,n=At,a=xe,o=dr,i=Xt,l=Ge,c=Mt,f=Ft,v=e.f;dt=null,yt=0,At=null,dr=(v&Nt)!==0&&(Mt||!tn||xe===null),xe=(v&(er|Br))===0?e:null,Xt=null,nn(e.ctx),Mt=!1,Ft=++qn,e.ac!==null&&(pa(()=>{e.ac.abort(In)}),e.ac=null);try{e.f|=Ua;var m=e.fn,p=m(),_=e.deps;if(dt!==null){var g;if(sa(e,yt),_!==null&&yt>0)for(_.length=yt+dt.length,g=0;g<dt.length;g++)_[yt+g]=dt[g];else e.deps=_=dt;if(!dr||(v&mt)!==0&&e.reactions!==null)for(g=yt;g<_.length;g++)(_[g].reactions??=[]).push(e)}else _!==null&&yt<_.length&&(sa(e,yt),_.length=yt);if(hn()&&At!==null&&!Mt&&_!==null&&(e.f&(mt|gr|wt))===0)for(g=0;g<At.length;g++)Ho(At[g],e);return a!==null&&a!==e&&(qn++,At!==null&&(n===null?n=At:n.push(...At))),(e.f&Ir)!==0&&(e.f^=Ir),p}catch(x){return Po(x)}finally{e.f^=Ua,dt=t,yt=r,At=n,xe=a,dr=o,Xt=i,nn(l),Mt=c,Ft=f}}function cc(e,t){let r=t.reactions;if(r!==null){var n=rl.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&mt)!==0&&(dt===null||!dt.includes(t))&&(vt(t,gr),(t.f&(Nt|aa))===0&&(t.f^=aa),Co(t),sa(t,0))}function sa(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)cc(e,r[n])}function jn(e){var t=e.f;if((t&Lr)===0){vt(e,ct);var r=ye,n=tn;ye=e,tn=!0;try{(t&jr)!==0?oc(e):Lo(e),Bo(e);var a=Ko(e);e.teardown=typeof a=="function"?a:null,e.wv=Go;var o;vo&&Ol&&(e.f&wt)!==0&&e.deps}finally{tn=n,ye=r}}}async function uc(){await Promise.resolve(),Ll()}function s(e){var t=e.f,r=(t&mt)!==0;if(xe!==null&&!Mt){var n=ye!==null&&(ye.f&Lr)!==0;if(!n&&!Xt?.includes(e)){var a=xe.deps;if((xe.f&Ua)!==0)e.rv<qn&&(e.rv=qn,dt===null&&a!==null&&a[yt]===e?yt++:dt===null?dt=[e]:(!dr||!dt.includes(e))&&dt.push(e));else{(xe.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[xe]:o.includes(xe)||o.push(xe)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&Nt)===0&&(i.f^=Nt)}if(Ur){if(vr.has(e))return vr.get(e);if(r){i=e;var c=i.v;return((i.f&ct)===0&&i.reactions!==null||Jo(i))&&(c=fs(i)),vr.set(i,c),c}}else r&&(i=e,ma(i)&&Io(i));if((e.f&Ir)!==0)throw e.v;return e.v}function Jo(e){if(e.v===et)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(vr.has(t)||(t.f&mt)!==0&&Jo(t))return!0;return!1}function pn(e){var t=Mt;try{return Mt=!0,e()}finally{Mt=t}}const dc=-7169;function vt(e,t){e.f=e.f&dc|t}function fc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const vc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function hc(e){return vc.includes(e)}const pc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function _c(e){return e=e.toLowerCase(),pc[e]??e}const mc=["touchstart","touchmove"];function gc(e){return mc.includes(e)}const Yo=new Set,Qa=new Set;function Zo(e,t,r,n={}){function a(o){if(n.capture||Nn.call(t,o),!o.cancelBubble)return pa(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Dr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Ds(e,t,r,n={}){var a=Zo(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function ot(e){for(var t=0;t<e.length;t++)Yo.add(e[t]);for(var r of Qa)r(e)}let Rs=null;function Nn(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;Rs=e;var i=0,l=Rs===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(o=a[i]||e.target,o!==t){Va(e,"currentTarget",{configurable:!0,get(){return o||r}});var v=xe,m=ye;_t(null),Qt(null);try{for(var p,_=[];o!==null;){var g=o.assignedSlot||o.parentNode||o.host||null;try{var x=o["__"+n];if(x!=null&&(!o.disabled||e.target===o))if(la(x)){var[b,...y]=x;b.apply(o,[e,...y])}else x.call(o,e)}catch(E){p?_.push(E):p=E}if(e.cancelBubble||g===t||g===null)break;o=g}if(p){for(let E of _)queueMicrotask(()=>{throw E});throw p}}finally{e.__root=t,delete e.currentTarget,_t(v),Qt(m)}}}function Xo(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function ln(e,t){var r=ye;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function S(e,t){var r=(t&kl)!==0,n=(t&Al)!==0,a,o=!e.startsWith("<!>");return()=>{a===void 0&&(a=Xo(o?e:"<!>"+e),r||(a=on(a)));var i=n||Do?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=on(i),c=i.lastChild;ln(l,c)}else ln(i,i);return i}}function bc(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Xo(a),l=on(i);o=on(l)}var c=o.cloneNode(!0);return ln(c,c),c}}function yc(e,t){return bc(e,t,"svg")}function lt(e=""){{var t=tr(e+"");return ln(t,t),t}}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),r=tr();return e.append(t,r),ln(t,r),e}function h(e,t){e!==null&&e.before(t)}function q(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function wc(e,t){return Sc(e,t)}const Xr=new Map;function Sc(e,{target:t,anchor:r,props:n={},events:a,context:o,intro:i=!0}){Zl();var l=new Set,c=m=>{for(var p=0;p<m.length;p++){var _=m[p];if(!l.has(_)){l.add(_);var g=gc(_);t.addEventListener(_,Nn,{passive:g});var x=Xr.get(_);x===void 0?(document.addEventListener(_,Nn,{passive:g}),Xr.set(_,1)):Xr.set(_,x+1)}}};c(os(Yo)),Qa.add(c);var f=void 0,v=ac(()=>{var m=r??t.appendChild(tr());return Ul(m,{pending:()=>{}},p=>{if(o){H({});var _=Ge;_.c=o}a&&(n.$$events=a),f=e(p,n)||{},o&&K()}),()=>{for(var p of l){t.removeEventListener(p,Nn);var _=Xr.get(p);--_===0?(document.removeEventListener(p,Nn),Xr.delete(p)):Xr.set(p,_)}Qa.delete(c),m!==r&&m.parentNode?.removeChild(m)}});return xc.set(f,v),f}let xc=new WeakMap;function T(e,t,r=!1){var n=e,a=null,o=null,i=et,l=r?zr:0,c=!1;const f=(_,g=!0)=>{c=!0,p(g,_)};var v=null;function m(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var _=i?a:o,g=i?o:a;_&&_a(_),g&&Zt(g,()=>{i?o=null:a=null})}const p=(_,g)=>{if(i!==(i=_)){var x=ha(),b=n;if(x&&(v=document.createDocumentFragment(),v.append(b=tr())),i?a??=g&&at(()=>g(b)):o??=g&&at(()=>g(b)),x){var y=De,E=i?a:o,P=i?o:a;E&&y.skipped_effects.delete(E),P&&y.skipped_effects.add(P),y.add_callback(m)}else m()}};nr(()=>{c=!1,t(f),c||p(null,null)},l)}function Pc(e,t,r){var n=e,a=et,o,i,l=null,c=hn()?Rl:wo;function f(){o&&Zt(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}nr(()=>{if(c(a,a=t())){var v=n,m=ha();m&&(l=document.createDocumentFragment(),l.append(v=tr())),i=at(()=>r(v)),m?De.add_callback(f):f()}})}function Ha(e,t){return t}function $c(e,t,r){for(var n=e.items,a=[],o=t.length,i=0;i<o;i++)_s(t[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;Xl(c),c.append(r),n.clear(),Ut(e,t[0].prev,t[o-1].next)}Vo(a,()=>{for(var f=0;f<o;f++){var v=t[f];l||(n.delete(v.k),Ut(e,v.prev,v.next)),st(v.e,!l)}})}function rt(e,t,r,n,a,o=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&bo)!==0;if(c){var f=e;i=f.appendChild(tr())}var v=null,m=!1,p=new Map,_=ds(()=>{var y=r();return la(y)?y:y==null?[]:os(y)}),g,x;function b(){Ec(x,g,l,p,i,a,t,n,r),o!==null&&(g.length===0?v?_a(v):v=at(()=>o(i)):v!==null&&Zt(v,()=>{v=null}))}nr(()=>{x??=ye,g=s(_);var y=g.length;if(!(m&&y===0)){m=y===0;var E,P,$,k;if(ha()){var N=new Set,C=De;for(P=0;P<y;P+=1){$=g[P],k=n($,P);var M=l.items.get(k)??p.get(k);M?(t&(ua|da))!==0&&Fo(M,$,P,t):(E=ei(null,l,null,null,$,k,P,a,t,r,!0),p.set(k,E)),N.add(k)}for(const[F,V]of l.items)N.has(F)||C.skipped_effects.add(V.e);C.add_callback(b)}else b();s(_)}})}function Ec(e,t,r,n,a,o,i,l,c){var f=(i&yl)!==0,v=(i&(ua|da))!==0,m=t.length,p=r.items,_=r.first,g=_,x,b=null,y,E=[],P=[],$,k,N,C;if(f)for(C=0;C<m;C+=1)$=t[C],k=l($,C),N=p.get(k),N!==void 0&&(N.a?.measure(),(y??=new Set).add(N));for(C=0;C<m;C+=1){if($=t[C],k=l($,C),N=p.get(k),N===void 0){var M=n.get(k);if(M!==void 0){n.delete(k),p.set(k,M);var F=b?b.next:g;Ut(r,b,M),Ut(r,M,F),Oa(M,F,a),b=M}else{var V=g?g.e.nodes_start:a;b=ei(V,r,b,b===null?r.first:b.next,$,k,C,o,i,c)}p.set(k,b),E=[],P=[],g=b.next;continue}if(v&&Fo(N,$,C,i),(N.e.f&Dt)!==0&&(_a(N.e),f&&(N.a?.unfix(),(y??=new Set).delete(N))),N!==g){if(x!==void 0&&x.has(N)){if(E.length<P.length){var Z=P[0],X;b=Z.prev;var re=E[0],I=E[E.length-1];for(X=0;X<E.length;X+=1)Oa(E[X],Z,a);for(X=0;X<P.length;X+=1)x.delete(P[X]);Ut(r,re.prev,I.next),Ut(r,b,re),Ut(r,I,Z),g=Z,b=I,C-=1,E=[],P=[]}else x.delete(N),Oa(N,g,a),Ut(r,N.prev,N.next),Ut(r,N,b===null?r.first:b.next),Ut(r,b,N),b=N;continue}for(E=[],P=[];g!==null&&g.k!==k;)(g.e.f&Dt)===0&&(x??=new Set).add(g),P.push(g),g=g.next;if(g===null)continue;N=g}E.push(N),b=N,g=N.next}if(g!==null||x!==void 0){for(var z=x===void 0?[]:os(x);g!==null;)(g.e.f&Dt)===0&&z.push(g),g=g.next;var ie=z.length;if(ie>0){var Pe=(i&bo)!==0&&m===0?a:null;if(f){for(C=0;C<ie;C+=1)z[C].a?.measure();for(C=0;C<ie;C+=1)z[C].a?.fix()}$c(r,z,Pe)}}f&&Dr(()=>{if(y!==void 0)for(N of y)N.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var R of n.values())st(R.e);n.clear()}function Fo(e,t,r,n){(n&ua)!==0&&sn(e.v,t),(n&da)!==0?sn(e.i,r):e.i=r}function ei(e,t,r,n,a,o,i,l,c,f,v){var m=(c&ua)!==0,p=(c&wl)===0,_=m?p?Jl(a,!1,!1):_r(a):a,g=(c&da)===0?i:_r(i),x={i:g,v:_,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=tr())}return x.e=at(()=>l(e,_,g,f),Dl),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?v||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function Oa(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=Un(o);a.before(o),o=i}}function Ut(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ne(e,t,...r){var n=e,a=te,o;nr(()=>{a!==(a=t())&&(o&&(st(o),o=null),o=at(()=>a(n,...r)))},zr)}function Nr(e,t,r){var n=e,a,o,i=null,l=null;function c(){o&&(Zt(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}nr(()=>{if(a!==(a=t())){var f=ha();if(a){var v=n;f&&(i=document.createDocumentFragment(),i.append(v=tr()),o&&De.skipped_effects.add(o)),l=at(()=>r(v,a))}f?De.add_callback(c):c()}},zr)}function kc(e,t,r,n,a,o){var i,l,c=null,f=e,v;nr(()=>{const m=t()||null;var p=Nl;m!==i&&(v&&(m===null?Zt(v,()=>{v=null,l=null}):m===l?_a(v):st(v)),m&&m!==l&&(v=at(()=>{if(c=document.createElementNS(p,m),ln(c,c),n){var _=c.appendChild(tr());n(c,_)}ye.nodes_end=c,f.before(c)})),i=m,i&&(l=i))},zr)}function Ac(e,t){var r=void 0,n;nr(()=>{r!==(r=t())&&(n&&(st(n),n=null),r&&(n=at(()=>{hs(()=>r(e))})))})}function ti(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=ti(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Tc(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=ti(e))&&(n&&(n+=" "),n+=t);return n}function ri(e){return typeof e=="object"?Tc(e):e??""}const Os=[...` 	
\r\f \v\uFEFF`];function Nc(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||Os.includes(n[i-1]))&&(l===n.length||Os.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function qs(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var o=e[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function qa(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Cc(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(qa)),a&&c.push(...Object.keys(a).map(qa));var f=0,v=-1;const x=e.length;for(var m=0;m<x;m++){var p=e[m];if(l?p==="/"&&e[m-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[m+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&v===-1)v=m;else if(p===";"||m===x-1){if(v!==-1){var _=qa(e.substring(f,v).trim());if(!c.includes(_)){p!==";"&&m++;var g=e.substring(f,m).trim();r+=" "+g+";"}}f=m+1,v=-1}}}}return n&&(r+=qs(n)),a&&(r+=qs(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function be(e,t,r,n,a,o){var i=e.__className;if(i!==r||i===void 0){var l=Nc(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&a!==o)for(var c in o){var f=!!o[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return o}function ja(e,t={},r,n){for(var a in r){var o=r[a];t[a]!==o&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,n))}}function ni(e,t,r,n){var a=e.__style;if(a!==t){var o=Cc(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(ja(e,r?.[0],n[0]),ja(e,r?.[1],n[1],"important")):ja(e,r,n));return n}function oa(e,t,r=!1){if(e.multiple){if(t==null)return;if(!la(t))return Il();for(var n of e.options)n.selected=t.includes(Dn(n));return}for(n of e.options){var a=Dn(n);if(Yl(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ai(e){var t=new MutationObserver(()=>{oa(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),qo(()=>{t.disconnect()})}function Cr(e,t,r=t){var n=!0;vs(e,"change",a=>{var o=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),Dn);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&Dn(l)}r(i)}),hs(()=>{var a=t();if(oa(e,a,n),n&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=Dn(o),r(a))}e.__value=a,n=!1}),ai(e)}function Dn(e){return"__value"in e?e.__value:e.value}const kn=Symbol("class"),An=Symbol("style"),si=Symbol("is custom element"),oi=Symbol("is html");function Ic(e,t){var r=ga(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function rn(e,t){var r=ga(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Mc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Or(e,t,r,n){var a=ga(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[cl]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ii(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Dc(e,t,r,n,a=!1,o=!1){var i=ga(e),l=i[si],c=!i[oi],f=t||{},v=e.tagName==="OPTION";for(var m in t)m in r||(r[m]=null);r.class?r.class=ri(r.class):r[kn]&&(r.class=null),r[An]&&(r.style??=null);var p=ii(e);for(const $ in r){let k=r[$];if(v&&$==="value"&&k==null){e.value=e.__value="",f[$]=k;continue}if($==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";be(e,_,k,n,t?.[kn],r[kn]),f[$]=k,f[kn]=r[kn];continue}if($==="style"){ni(e,k,t?.[An],r[An]),f[$]=k,f[An]=r[An];continue}var g=f[$];if(!(k===g&&!(k===void 0&&e.hasAttribute($)))){f[$]=k;var x=$[0]+$[1];if(x!=="$$")if(x==="on"){const N={},C="$$"+$;let M=$.slice(2);var b=hc(M);if(fc(M)&&(M=M.slice(0,-7),N.capture=!0),!b&&g){if(k!=null)continue;e.removeEventListener(M,f[C],N),f[C]=null}if(k!=null)if(b)e[`__${M}`]=k,ot([M]);else{let F=function(V){f[$].call(this,V)};var P=F;f[C]=Zo(M,e,F,N)}else b&&(e[`__${M}`]=void 0)}else if($==="style")Or(e,$,k);else if($==="autofocus")Fl(e,!!k);else if(!l&&($==="__value"||$==="value"&&k!=null))e.value=e.__value=k;else if($==="selected"&&v)Mc(e,k);else{var y=$;c||(y=_c(y));var E=y==="defaultValue"||y==="defaultChecked";if(k==null&&!l&&!E)if(i[$]=null,y==="value"||y==="checked"){let N=e;const C=t===void 0;if(y==="value"){let M=N.defaultValue;N.removeAttribute(y),N.defaultValue=M,N.value=N.__value=C?M:null}else{let M=N.defaultChecked;N.removeAttribute(y),N.defaultChecked=M,N.checked=C?M:!1}}else e.removeAttribute($);else E||p.includes(y)&&(l||typeof k!="string")?(e[y]=k,y in i&&(i[y]=et)):typeof k!="function"&&Or(e,y,k)}}}return f}function js(e,t,r=[],n=[],a,o=!1,i=!1){To(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",m=!1;if(nr(()=>{var _=t(...l.map(s)),g=Dc(e,c,_,a,o,i);m&&v&&"value"in _&&oa(e,_.value);for(let b of Object.getOwnPropertySymbols(f))_[b]||st(f[b]);for(let b of Object.getOwnPropertySymbols(_)){var x=_[b];b.description===Cl&&(!c||x!==c[b])&&(f[b]&&st(f[b]),f[b]=at(()=>Ac(e,()=>x))),g[b]=x}c=g}),v){var p=e;hs(()=>{oa(p,c.value,!0),ai(p)})}m=!0})}function ga(e){return e.__attributes??={[si]:e.nodeName.includes("-"),[oi]:e.namespaceURI===Tl}}var Bs=new Map;function ii(e){var t=e.getAttribute("is")||e.nodeName,r=Bs.get(t);if(r)return r;Bs.set(t,r=[]);for(var n,a=e,o=Element.prototype;o!==a;){n=nl(a);for(var i in n)n[i].set&&r.push(i);a=ho(a)}return r}function Ie(e,t,r=t){var n=new WeakSet;vs(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Ba(e)?La(o):o,r(o),De!==null&&n.add(De),await uc(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),pn(t)==null&&e.value&&(r(Ba(e)?La(e.value):e.value),De!==null&&n.add(De)),ps(()=>{var a=t();if(e===document.activeElement){var o=Fn??De;if(n.has(o))return}Ba(e)&&a===La(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Rc(e,t,r=t){vs(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),pn(t)==null&&r(e.checked),ps(()=>{var n=t();e.checked=!!n})}function Ba(e){var t=e.type;return t==="number"||t==="range"}function La(e){return e===""?null:+e}let Xn=!1;function Oc(e){var t=Xn;try{return Xn=!1,[e(),Xn]}finally{Xn=t}}const qc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function oe(e,t,r){return new Proxy({props:e,exclude:t},qc)}const jc={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(En(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];En(a)&&(a=a());const o=fr(a,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(En(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=fr(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===Mr||t===mo)return!1;for(let r of e.props)if(En(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(En(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function le(...e){return new Proxy({props:e},jc)}function Oe(e,t,r,n){var a=!vn||(r&xl)!==0,o=(r&$l)!==0,i=(r&El)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?pn(n):n),l),v;if(o){var m=Mr in e||mo in e;v=fr(e,t)?.set??(m&&t in e?P=>e[t]=P:void 0)}var p,_=!1;o?[p,_]=Oc(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),v&&(a&&pl(),v(p)));var g;if(a?g=()=>{var P=e[t];return P===void 0?f():(c=!0,P)}:g=()=>{var P=e[t];return P!==void 0&&(l=void 0),P===void 0?l:P},a&&(r&Pl)===0)return g;if(v){var x=e.$$legacy;return(function(P,$){return arguments.length>0?((!a||!$||x||_)&&v($?g():P),P):g()})}var b=!1,y=((r&Sl)!==0?va:ds)(()=>(b=!1,g()));o&&s(y);var E=ye;return(function(P,$){if(arguments.length>0){const k=$?s(y):a&&o?Ce(P):P;return w(y,k),b=!0,l!==void 0&&(l=k),P}return Ur&&b||(E.f&Lr)!==0?y.v:s(y)})}function li(e){Ge===null&&go(),vn&&Ge.l!==null?Lc(Ge).m.push(e):Vr(()=>{const t=pn(e);if(typeof t=="function")return t})}function Bc(e){Ge===null&&go(),li(()=>()=>pn(e))}function Lc(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const zc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(zc);const Vc="modulepreload",Uc=function(e){return"/"+e},Ls={},Wc=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(v=>{if(v=Uc(v),v in Ls)return;Ls[v]=!0;const m=v.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${p}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":Vc,m||(_.as="script"),_.crossOrigin="",_.href=v,c&&_.setAttribute("nonce",c),document.head.appendChild(_),m)return new Promise((g,x)=>{_.addEventListener("load",g),_.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${v}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};class Gc extends Map{#e=new Map;#r=U(0);#c=U(0);#u=Ft||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#l(t){return Ft===this.#u?U(t):_r(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#r;if(a===void 0)a=this.#l(0),n.set(t,a),w(this.#c,super.size),Gt(l);else if(o!==r){Gt(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(v=>c.has(v));f&&Gt(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),w(this.#c,super.size),w(n,-1),Gt(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;w(this.#c,0);for(var r of t.values())w(r,-1);Gt(this.#r),t.clear()}}#o(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#l(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}const Qc=typeof window<"u"?window:void 0;function Hc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Kc{#e;#r;constructor(t={}){const{window:r=Qc,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=Ao(a=>{const o=Ds(r,"focusin",a),i=Ds(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?Hc(this.#e):null}}new Kc;function Jc(e){return typeof e=="function"}function Yc(e,t){if(Jc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Zc(e,t){let r=U(null);const n=G(()=>Yc(t,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const c=new Promise((f,v)=>{i=f,l=v});w(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);w(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),w(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function zs(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),o=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return o.length?Rn(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function Cn(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function ea(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Rn(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function ta(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>Ka(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(a.push({q:v,u:c}),o.push(Ka(v.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function Fr(e){return e?.length?e.map(t=>Ka(t.q.toString(),t.u)).join(" et "):"-"}function Ka(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Vs(e){return Cn(e)}function Xc(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Fc(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([o])=>{const i=new Date(o);return i>=n&&i<=a}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function eu(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Us(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function tu(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function ru(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Xc(t)}function nu(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class A{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}A.equal=(e,t)=>new A("equal",e,t).toString();A.notEqual=(e,t)=>new A("notEqual",e,t).toString();A.lessThan=(e,t)=>new A("lessThan",e,t).toString();A.lessThanEqual=(e,t)=>new A("lessThanEqual",e,t).toString();A.greaterThan=(e,t)=>new A("greaterThan",e,t).toString();A.greaterThanEqual=(e,t)=>new A("greaterThanEqual",e,t).toString();A.isNull=e=>new A("isNull",e).toString();A.isNotNull=e=>new A("isNotNull",e).toString();A.between=(e,t,r)=>new A("between",e,[t,r]).toString();A.startsWith=(e,t)=>new A("startsWith",e,t).toString();A.endsWith=(e,t)=>new A("endsWith",e,t).toString();A.select=e=>new A("select",void 0,e).toString();A.search=(e,t)=>new A("search",e,t).toString();A.orderDesc=e=>new A("orderDesc",e).toString();A.orderAsc=e=>new A("orderAsc",e).toString();A.orderRandom=()=>new A("orderRandom").toString();A.cursorAfter=e=>new A("cursorAfter",void 0,e).toString();A.cursorBefore=e=>new A("cursorBefore",void 0,e).toString();A.limit=e=>new A("limit",void 0,e).toString();A.offset=e=>new A("offset",void 0,e).toString();A.contains=(e,t)=>new A("contains",e,t).toString();A.notContains=(e,t)=>new A("notContains",e,t).toString();A.notSearch=(e,t)=>new A("notSearch",e,t).toString();A.notBetween=(e,t,r)=>new A("notBetween",e,[t,r]).toString();A.notStartsWith=(e,t)=>new A("notStartsWith",e,t).toString();A.notEndsWith=(e,t)=>new A("notEndsWith",e,t).toString();A.createdBefore=e=>new A("createdBefore",void 0,e).toString();A.createdAfter=e=>new A("createdAfter",void 0,e).toString();A.createdBetween=(e,t)=>new A("createdBetween",void 0,[e,t]).toString();A.updatedBefore=e=>new A("updatedBefore",void 0,e).toString();A.updatedAfter=e=>new A("updatedAfter",void 0,e).toString();A.updatedBetween=(e,t)=>new A("updatedBetween",void 0,[e,t]).toString();A.or=e=>new A("or",void 0,e.map(t=>JSON.parse(t))).toString();A.and=e=>new A("and",void 0,e.map(t=>JSON.parse(t))).toString();A.distanceEqual=(e,t,r,n=!0)=>new A("distanceEqual",e,[[t,r,n]]).toString();A.distanceNotEqual=(e,t,r,n=!0)=>new A("distanceNotEqual",e,[[t,r,n]]).toString();A.distanceGreaterThan=(e,t,r,n=!0)=>new A("distanceGreaterThan",e,[[t,r,n]]).toString();A.distanceLessThan=(e,t,r,n=!0)=>new A("distanceLessThan",e,[[t,r,n]]).toString();A.intersects=(e,t)=>new A("intersects",e,[t]).toString();A.notIntersects=(e,t)=>new A("notIntersects",e,[t]).toString();A.crosses=(e,t)=>new A("crosses",e,[t]).toString();A.notCrosses=(e,t)=>new A("notCrosses",e,[t]).toString();A.overlaps=(e,t)=>new A("overlaps",e,[t]).toString();A.notOverlaps=(e,t)=>new A("notOverlaps",e,[t]).toString();A.touches=(e,t)=>new A("touches",e,[t]).toString();A.notTouches=(e,t)=>new A("notTouches",e,[t]).toString();var ci,ui;class cn{static custom(t){return t}static unique(t=7){const r=nu(cn,ci,"m",ui).call(cn);let n="";for(let a=0;a<t;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}ci=cn,ui=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Ws;(function(e){e.Totp="totp"})(Ws||(Ws={}));var Gs;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Gs||(Gs={}));var Qs;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Qs||(Qs={}));var Hs;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Hs||(Hs={}));var Ks;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ks||(Ks={}));var Js;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Js||(Js={}));var Ys;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Ys||(Ys={}));var Zs;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Zs||(Zs={}));var Xs;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Xs||(Xs={}));class au{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class di{constructor(t){this.generateIdentifier=t,this.kv=new au}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class su extends di{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function ou(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function iu(e,t){const r=ou(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const o=n[a];if(t(o))return o}}function un(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function ra(e,t){return e.indexOf(t)!==-1}function Fs(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class lu{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return iu(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const cu=e=>Object.prototype.toString.call(e).slice(8,-1),fi=e=>typeof e>"u",uu=e=>e===null,Bn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Ja=e=>Bn(e)&&Object.keys(e).length===0,mr=e=>Array.isArray(e),du=e=>typeof e=="string",fu=e=>typeof e=="number"&&!isNaN(e),vu=e=>typeof e=="boolean",hu=e=>e instanceof RegExp,Ln=e=>e instanceof Map,zn=e=>e instanceof Set,vi=e=>cu(e)==="Symbol",pu=e=>e instanceof Date&&!isNaN(e.valueOf()),_u=e=>e instanceof Error,eo=e=>typeof e=="number"&&isNaN(e),mu=e=>vu(e)||uu(e)||fi(e)||fu(e)||du(e)||vi(e),gu=e=>typeof e=="bigint",bu=e=>e===1/0||e===-1/0,yu=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),wu=e=>e instanceof URL,hi=e=>e.replace(/\./g,"\\."),za=e=>e.map(String).map(hi).join("."),On=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let o=e.charAt(a);if(o==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(o==="."){t.push(r),r="";continue}r+=o}const n=r;return t.push(n),t};function Vt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const pi=[Vt(fi,"undefined",()=>null,()=>{}),Vt(gu,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Vt(pu,"Date",e=>e.toISOString(),e=>new Date(e)),Vt(_u,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Vt(hu,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Vt(zn,"set",e=>[...e.values()],e=>new Set(e)),Vt(Ln,"map",e=>[...e.entries()],e=>new Map(e)),Vt(e=>eo(e)||bu(e),"number",e=>eo(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Vt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Vt(wu,"URL",e=>e.toString(),e=>new URL(e))];function ba(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const _i=ba((e,t)=>vi(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),Su=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),mi=ba(yu,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=Su[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function gi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const bi=ba(gi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),yi=ba((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),xu=[bi,_i,yi,mi],to=(e,t)=>{const r=Fs(xu,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Fs(pi,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},wi={};pi.forEach(e=>{wi[e.annotation]=e});const Pu=(e,t,r)=>{if(mr(t))switch(t[0]){case"symbol":return _i.untransform(e,t,r);case"class":return bi.untransform(e,t,r);case"custom":return yi.untransform(e,t,r);case"typed-array":return mi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=wi[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},en=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function Si(e){if(ra(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(ra(e,"prototype"))throw new Error("prototype is not allowed as a property");if(ra(e,"constructor"))throw new Error("constructor is not allowed as a property")}const $u=(e,t)=>{Si(t);for(let r=0;r<t.length;r++){const n=t[r];if(zn(e))e=en(e,+n);else if(Ln(e)){const a=+n,o=+t[++r]==0?"key":"value",i=en(e,a);switch(o){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Ya=(e,t,r)=>{if(Si(t),t.length===0)return r(e);let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];if(mr(n)){const l=+i;n=n[l]}else if(Bn(n))n=n[i];else if(zn(n)){const l=+i;n=en(n,l)}else if(Ln(n)){if(o===t.length-2)break;const c=+i,f=+t[++o]==0?"key":"value",v=en(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const a=t[t.length-1];if(mr(n)?n[+a]=r(n[+a]):Bn(n)&&(n[a]=r(n[a])),zn(n)){const o=en(n,+a),i=r(o);o!==i&&(n.delete(o),n.add(i))}if(Ln(n)){const o=+t[t.length-2],i=en(n,o);switch(+a==0?"key":"value"){case"key":{const c=r(i);n.set(c,n.get(i)),c!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Za(e,t,r=[]){if(!e)return;if(!mr(e)){un(e,(o,i)=>Za(o,t,[...r,...On(i)]));return}const[n,a]=e;a&&un(a,(o,i)=>{Za(o,t,[...r,...On(i)])}),t(n,r)}function Eu(e,t,r){return Za(t,(n,a)=>{e=Ya(e,a,o=>Pu(o,n,r))}),e}function ku(e,t){function r(n,a){const o=$u(e,On(a));n.map(On).forEach(i=>{e=Ya(e,i,()=>o)})}if(mr(t)){const[n,a]=t;n.forEach(o=>{e=Ya(e,On(o),()=>e)}),a&&un(a,r)}else un(t,r);return e}const Au=(e,t)=>Bn(e)||mr(e)||Ln(e)||zn(e)||gi(e,t);function Tu(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Nu(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[o,...i]=a;o.length===0?n=i.map(za):r[za(o)]=i.map(za)}),n?Ja(r)?[n]:[n,r]:Ja(r)?void 0:r}const xi=(e,t,r,n,a=[],o=[],i=new Map)=>{const l=mu(e);if(!l){Tu(e,a,t);const _=i.get(e);if(_)return n?{transformedValue:null}:_}if(!Au(e,r)){const _=to(e,r),g=_?{transformedValue:_.value,annotations:[_.type]}:{transformedValue:e};return l||i.set(e,g),g}if(ra(o,e))return{transformedValue:null};const c=to(e,r),f=c?.value??e,v=mr(f)?[]:{},m={};un(f,(_,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const x=xi(_,t,r,n,[...a,g],[...o,e],i);v[g]=x.transformedValue,mr(x.annotations)?m[g]=x.annotations:Bn(x.annotations)&&un(x.annotations,(b,y)=>{m[hi(g)+"."+y]=b})});const p=Ja(m)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,m]:m};return l||i.set(e,p),p};function Pi(e){return Object.prototype.toString.call(e).slice(8,-1)}function ro(e){return Pi(e)==="Array"}function Cu(e){if(Pi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Iu(e,t,r,n,a){const o={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),a&&o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Xa(e,t={}){if(ro(e))return e.map(a=>Xa(a,t));if(!Cu(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,o)=>{if(ro(t.props)&&!t.props.includes(o))return a;const i=e[o],l=Xa(i,t);return Iu(a,o,l,e,t.nonenumerable),a},{})}class qe{constructor({dedupe:t=!1}={}){this.classRegistry=new su,this.symbolRegistry=new di(r=>r.description??""),this.customTransformerRegistry=new lu,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=xi(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const o=Nu(r,this.dedupe);return o&&(a.meta={...a.meta,referentialEqualities:o}),a}deserialize(t){const{json:r,meta:n}=t;let a=Xa(r);return n?.values&&(a=Eu(a,n.values,this)),n?.referentialEqualities&&(a=ku(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}qe.defaultInstance=new qe;qe.serialize=qe.defaultInstance.serialize.bind(qe.defaultInstance);qe.deserialize=qe.defaultInstance.deserialize.bind(qe.defaultInstance);qe.stringify=qe.defaultInstance.stringify.bind(qe.defaultInstance);qe.parse=qe.defaultInstance.parse.bind(qe.defaultInstance);qe.registerClass=qe.defaultInstance.registerClass.bind(qe.defaultInstance);qe.registerSymbol=qe.defaultInstance.registerSymbol.bind(qe.defaultInstance);qe.registerCustom=qe.defaultInstance.registerCustom.bind(qe.defaultInstance);qe.allowErrorProps=qe.defaultInstance.allowErrorProps.bind(qe.defaultInstance);function $i(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Rt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Mu(e,t,r=100){try{const{databases:n,config:a}=await Rt(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[A.greaterThan("$updatedAt",t),A.equal("mainId",e),A.limit(r),A.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function Ei(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:o}=await Rt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[A.equal("mainId",e),A.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),A.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[A.greaterThan("$updatedAt",r),A.equal("mainId",e),A.limit(n),A.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function qr(e,t){try{const{databases:r,config:n}=await Rt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function ur(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=$i(n,t),{databases:o,config:i}=await Rt(),l=await o.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function ki(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await qr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Ai(e,t){return qr(e,{who:t})}async function Fa(e,t){return qr(e,{stockReel:t})}async function Ti(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const a={};return t.stockReel!==void 0&&(a.stockReel=t.stockReel),t.who!==void 0&&(a.who=t.who),t.storeInfo!==void 0&&(a.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await qr(e,a)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await ur(e,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function Ni(e){try{const{databases:t,config:r}=await Rt(),o=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:o.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,cn.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Ci(e,t){try{const{databases:r,config:n}=await Rt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Ii(e){try{const{databases:t,config:r}=await Rt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Mi(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Rt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[A.equal("$id",e),A.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Di(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(_=>_.includes("products.")),f=i.some(_=>_.includes("purchases.")),v=i.some(_=>_.includes(".create")),m=i.some(_=>_.includes(".update")),p=i.some(_=>_.includes(".delete"));if(c){const _=l;v&&t.onProductCreate?t.onProductCreate(_):m&&t.onProductUpdate?t.onProductUpdate(_):p&&t.onProductDelete&&t.onProductDelete(_.$id)}else if(f){const _=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(_):m&&t.onPurchaseUpdate?t.onPurchaseUpdate(_):p&&t.onPurchaseDelete&&t.onPurchaseDelete(_.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function Ri(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Rt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Oi(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Rt(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function ms(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function qi(e,t,r,n){return ms({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function ji(e,t,r,n="replace"){return ms({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function Bi(e,t,r,n={}){try{const{databases:a,config:o}=await Rt(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const v of r){const m={products:[t],mainId:e,quantity:v.q,unit:v.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,cn.unique(),m);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const o=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const Du=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:ms,batchUpdateStore:qi,batchUpdateWho:ji,createMainDocument:Oi,createPurchase:Ni,createQuickValidationPurchases:Bi,deletePurchase:Ii,enrichedProductToAppwriteProduct:$i,loadMainEventData:Ri,loadPurchasesListByIds:Mi,loadUpdatedPurchases:Mu,subscribeToRealtime:Di,syncProductsWithPurchases:Ei,updateProduct:qr,updateProductBatch:Ti,updateProductStock:Fa,updateProductStore:ki,updateProductWho:Ai,updatePurchase:Ci,upsertProduct:ur},Symbol.toStringTag,{value:"Module"}));async function Ru(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Ou(e,t){const r=ru(e.byDate),n=Rn(ea([])),{numeric:a,display:o}=ta(r,n);return{$id:`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:Fr(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function qu(e,t){return e.map(r=>Ou(r,t))}class ju{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";METADATA_KEY="cache-metadata";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=a=>{const o=a.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE),console.log("[IDBCache] Object store 'metadata' créé"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).get(this.METADATA_KEY);o.onsuccess=()=>{const i=o.result||{lastSync:null,allDates:[]};console.log(`[IDBCache] Metadata chargée: lastSync=${i.lastSync}, dates=${i.allDates?.length||0}`),t(i)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=a.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put(t,this.METADATA_KEY);i.onsuccess=()=>{console.log("[IDBCache] Metadata sauvegardée"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Bu(e){const t=new ju(e);return await t.open(),t}const no=1e3;class Lu{#e=new Gc;#r=U(null);#c=U(!1);#u=U(!1);#l=U(null);#o=U(!1);#i=U(!1);#a=U(null);#s=U(Ce([]));#f=U(Ce({start:null,end:null}));get dateRange(){return s(this.#f)}set dateRange(t){w(this.#f,t,!0)}#n=null;#d=null;#v=U(!1);#t=U(Ce({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#l)}get syncing(){return s(this.#o)}get availableDates(){return s(this.#s)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,a=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:a}}isFullRange(){return this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate}initializeDateRange(){if((!this.dateRange.start||!this.dateRange.end)&&s(this.#s).length>0){const t=[...s(this.#s)].sort();this.dateRange={start:t[0],end:t[t.length-1]}}console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}get firstAvailableDate(){return s(this.#s).length===0?null:[...s(this.#s)].sort()[0]}get lastAvailableDate(){return s(this.#s).length===0?null:[...s(this.#s)].sort().pop()}get realtimeConnected(){return s(this.#i)}get hugoContentChanged(){return s(this.#v)}#m=G(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#m)}set enrichedProducts(t){w(this.#m,t)}#g=G(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const t=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[a,o]of this.#e){if(!o.byDate||!this.#L(o))continue;Object.keys(o.byDate).some(c=>{const f=new Date(c);return f>=t&&f<=r})&&n.set(a,o)}return n});get filteredProductsMap(){return s(this.#g)}set filteredProductsMap(t){w(this.#g,t)}#w=G(()=>{if(console.log("[Store] Recalcul totalNeededByDateRange (Map-optimized)"),this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using totalNeededArray (no calculation)");const n=new Map;for(const[a,o]of this.#e)n.set(a,o.totalNeededArray);return n}const r=new Map;for(const[n,a]of this.filteredProductsMap)if(a.byDate){const o=Us(a.byDate),i=zs(o,this.dateRange.start,this.dateRange.end);i.length>0&&r.set(n,i)}return r});get totalNeededByDateRange(){return s(this.#w)}set totalNeededByDateRange(t){w(this.#w,t)}#S=G(()=>{console.log("[Store] Calcul unifié des stats par produit (1 itération)");const t=new Map;if(this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using precomputed data");for(const[n,a]of this.#e)t.set(n,{quantities:a.totalNeededArray,formattedQuantities:Fr(a.totalNeededArray),nbRecipes:a.nbRecipes||0,totalAssiettes:a.totalAssiettes||0});return t}for(const[n,a]of this.filteredProductsMap){if(!a.byDate)continue;const o=Us(a.byDate),i=zs(o,this.dateRange.start,this.dateRange.end),l=i.length>0?Fr(i):"",c=Fc(a.byDate,this.dateRange.start,this.dateRange.end),v=Object.keys(a.byDate).filter(m=>{const p=new Date(m),_=new Date(this.dateRange.start),g=new Date(this.dateRange.end);return p>=_&&p<=g}).flatMap(m=>a.byDate[m]?.recipes||[]);t.set(n,{quantities:i,formattedQuantities:l,nbRecipes:v.length,totalAssiettes:c})}return t});get productsStatsByDateRange(){return s(this.#S)}set productsStatsByDateRange(t){w(this.#S,t)}#h=G(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#h)}set stats(t){w(this.#h,t)}#p=G(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#p)}set uniqueStores(t){w(this.#p,t)}#_=G(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#_)}set uniqueWho(t){w(this.#_,t)}#$=G(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#$)}set uniqueProductTypes(t){w(this.#$,t)}#E=G(()=>{const t=Array.from(this.filteredProductsMap.values());return s(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get groupedFilteredProducts(){return s(this.#E)}set groupedFilteredProducts(t){w(this.#E,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),w(this.#r,t,!0);try{this.#n=await Bu(t)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}w(this.#l,null);try{if(await this.#N(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await Ru(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),qu(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),w(this.#s,[...n.allDates],!0),await Ri(t)||await Oi(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#k()}this.initializeDateRange(),await this.#C(),w(this.#c,!0);const r=this.#B();this.#d=Di(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw w(this.#l,n,!0),console.error("[ProductsStore]",n,r),r}}async#N(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();w(this.#a,r.lastSync,!0),w(this.#s,[...r.allDates],!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#C(){if(s(this.#r)){w(this.#o,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const t=await Ei(s(this.#r),{lastSync:s(this.#a),limit:no});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#A(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await Wc(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Du);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#a),no);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#P(o,a)}})}this.#I(),await this.#k(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{w(this.#o,!1)}}}async#k(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:s(this.#a),allDates:[...s(this.#s)]}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#x(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#I(){w(this.#a,new Date().toISOString(),!0)}#A(t,r){return r?this.#b(t,r):this.#M(t)}#M(t){const r=Rn(ea(t.purchases??[])),n=[],{numeric:a,display:o}=ta(n,r),i=Cn(t.stockReel)??null,l=Fr(r),c=t.store?Cn(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:Vs(t.totalNeededOverride)}}#b(t,r){const n=t.purchases??r.purchases,a=Rn(ea(n??[])),o=Fr(a),{numeric:i,display:l}=ta(r.totalNeededArray,a),c=t.stockReel??r.stockReel,f=c?Cn(c):r.stockParsed,v=t.store??r.store,m=v?Cn(v):r.storeInfo,p=f?`${f.quantity} ${f.unit}`:o;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:v,stockReel:c,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:m,stockParsed:f,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:Vs(t.totalNeededOverride??r.totalNeededOverride)}}#z(t){t.totalPurchasesArray=Rn(ea(t.purchases??[]));const{numeric:r,display:n}=ta(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=Fr(t.totalPurchasesArray)}#V(t){t.length&&(t.forEach(r=>this.#y(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#y(t){const r=this.#e.get(t.$id),n=this.#A(t,r);this.#e.set(t.$id,n)}#D(t){this.#e.delete(t)}async#R(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#j(r,t),r}async#O(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Mi([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#P(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#q(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t));return r.forEach(n=>{this.#y(n)}),r.map(n=>n.$id)}#T(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#j(t,r){const n=this.#T(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#b({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#P(t,r){const n=this.#T(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#b({...i,purchases:f,status:"active"},i);a.push(v)}else{const f=this.#b({...i,purchases:[...l,r],status:"active"},i);a.push(f)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#B(){return{onProductCreate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#D(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#R(t);await this.#x(r)},onPurchaseUpdate:async t=>{const r=await this.#O(t);await this.#x(r)},onPurchaseDelete:async t=>{const r=await this.#q(t);await this.#x(r)},onConnect:()=>{w(this.#i,!0)},onDisconnect:()=>{w(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#L(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Zc(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){w(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],o=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#t).sortDirection==="asc"?-1:1:a>o?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}hasConversions(t){const r=this.#e.get(t);return r?.byDate?eu(r.byDate):!1}get enrichedProductsCount(){return this.#e.size}async forceReload(t){await this.clearCache(),await this.initialize(t)}async clearCache(){this.#e.clear(),w(this.#s,[],!0),w(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const o=this.#e.get(a);if(o){const i={...o,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#d?.(),this.#d=null,this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const D=new Lu;function zu(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Vu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Uu=yc("<svg><!><!></svg>");function ce(e,t){H(t,!0);const r=Oe(t,"color",3,"currentColor"),n=Oe(t,"size",3,24),a=Oe(t,"strokeWidth",3,2),o=Oe(t,"absoluteStrokeWidth",3,!1),i=Oe(t,"iconNode",19,()=>[]),l=oe(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=Uu();js(c,m=>({...Vu,...l,width:n(),height:n(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var f=u(c);rt(f,17,i,Ha,(m,p)=>{var _=G(()=>_o(s(p),2));let g=()=>s(_)[0],x=()=>s(_)[1];var b=Q(),y=O(b);kc(y,g,!0,(E,P)=>{js(E,()=>({...x()}))}),h(m,b)});var v=d(f);ne(v,()=>t.children??te),h(e,c),K()}function es(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ce(e,le({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Wu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ce(e,le({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Gu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ce(e,le({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Qu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ce(e,le({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Hu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];ce(e,le({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Ku(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ce(e,le({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Ju(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];ce(e,le({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ao(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ce(e,le({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Yu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ce(e,le({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Zu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];ce(e,le({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Xu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];ce(e,le({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Fu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];ce(e,le({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ed(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];ce(e,le({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function gs(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ce(e,le({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function td(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ce(e,le({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function rd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];ce(e,le({name:"euro"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ts(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ce(e,le({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function nd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ce(e,le({name:"info"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function so(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ce(e,le({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ad(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ce(e,le({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function sd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ce(e,le({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function od(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];ce(e,le({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function id(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ce(e,le({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ld(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ce(e,le({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function bs(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ce(e,le({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function cd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ce(e,le({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ud(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];ce(e,le({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Wn(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ce(e,le({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function dd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];ce(e,le({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function fd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ce(e,le({name:"plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function vd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];ce(e,le({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function hd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function pd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ce(e,le({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function _d(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ce(e,le({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function md(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ce(e,le({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function rs(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ce(e,le({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ns(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ce(e,le({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ia(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ce(e,le({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function gd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ce(e,le({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function ya(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ce(e,le({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Li(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];ce(e,le({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function Gn(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ce(e,le({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function as(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ce(e,le({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function bd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Q(),l=O(i);ne(l,()=>t.children??te),h(a,i)},$$slots:{default:!0}})),K()}function na(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Wu};case"animaux":return{displayName:"Viandes et Poissons",icon:Gu};case"legumes":return{displayName:"Fruits et Légumes",icon:Hu};case"sucres":return{displayName:"Sucrées",icon:Qu};case"lof":return{displayName:"L.O.F",icon:td};case"autres":return{displayName:"Autres",icon:Ku};case"epices":return{displayName:"Assaisonnements",icon:ad};case"frais":return{displayName:"Produits Frais",icon:pd};default:return{displayName:e,icon:Wn}}}function oo(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function wa(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Sa(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function yd(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function wd(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],o=n[t.sortColumn];return a<o?t.sortDirection==="asc"?-1:1:a>o?t.sortDirection==="asc"?1:-1:0}):e}function ss(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function io(e){return e?Sa(e):"-"}function Sd(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=ss(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:xd(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function xd(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}let lo=()=>localStorage.getItem("appwrite-user-name")||"";function Pd(e){let t=U(!1),r=U(null);const n=G(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),D.getEnrichedProductById(e))),a=G(()=>s(n)?.who??[]),o=G(()=>s(n)?.stockParsed??null),i=G(()=>s(n)?.purchases??[]),l=G(()=>s(n)?.byDate?tu(s(n).byDate):[]),c=Ce({purchase:{quantity:null,unit:"",store:"",who:lo()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=U(!1),v=U(null);Vr(()=>{!s(n)||s(f)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=lo()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??"",c.store.comment=s(n).storeInfo?.storeComment??null,c.who=s(n)?.who?[...s(n).who]:[],w(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),w(f,!0))});const m=G(()=>s(v)?{store:JSON.stringify(c.store)!==JSON.stringify(s(v).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(s(v).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?s(o)?c.stock.quantity.toString()!==s(o).quantity||c.stock.unit!==s(o).unit||(c.stock.notes||"")!==(s(o).notes||""):!0:!1}const _=G(()=>!!(s(v)&&(s(m).store||s(m).stock||s(m).who)));let g=U(null);const x=G(()=>s(g)?s(i).find(I=>I.$id===s(g))??null:null);async function b(I,z){w(t,!0),w(r,null);try{const ie=await I();return z&&y("success",z),ie}catch(ie){const Pe=ie instanceof Error?ie.message:"Une erreur est survenue";return w(r,Pe,!0),y("error",Pe),console.error("[ProductModalState]",ie),null}finally{w(t,!1)}}function y(I,z){const ie=new CustomEvent("toast",{detail:{type:I,message:z}});window.dispatchEvent(ie)}async function E(){s(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!D.currentMainId)throw new Error("mainId non disponible");const{quantity:I,unit:z}=oo(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await ur(s(n).$id,{},ie=>D.getEnrichedProductById(ie))),await Ni({products:[s(n).$id],mainId:D.currentMainId,unit:z,quantity:I,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:c.purchase.status||"delivered",orderDate:c.purchase.orderDate||null,deliveryDate:c.purchase.deliveryDate||null}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function P(I){w(g,I.$id,!0)}function $(){w(g,null)}async function k(I){I.$id&&await b(async()=>{const{quantity:z,unit:ie}=oo(I.quantity,I.unit);await Ci(I.$id,{unit:ie,quantity:z,store:I.store||null,who:I.who||null,notes:I.notes||"",price:I.price||null,status:I.status||null,orderDate:I.orderDate||null,deliveryDate:I.deliveryDate||null}),w(g,null)},"Achat modifié avec succès")}async function N(I){const z=s(i).find(ie=>ie.$id===I);z&&confirm(`Supprimer cet achat (${z.quantity} ${z.unit}) ?`)&&await b(async()=>{await Ii(I)},"Achat supprimé avec succès")}async function C(){s(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const I={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Fa(s(n).$id,JSON.stringify(I))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await ur(s(n).$id,{stockReel:JSON.stringify(I)},z=>D.getEnrichedProductById(z))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function M(){s(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await Fa(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await ur(s(n).$id,{stockReel:null},I=>D.getEnrichedProductById(I)))},"Stock supprimé")}async function F(I){s(n)&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, setWho normal...`),await Ai(s(n).$id,I)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await ur(s(n).$id,{who:I},z=>D.getEnrichedProductById(z)))},"Volontaires mis à jour")}async function V(I){s(n)&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await ki(s(n).$id,I)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await ur(s(n).$id,{store:JSON.stringify(I)},z=>D.getEnrichedProductById(z)))},"Magasin mis à jour")}async function Z(I){s(n)&&await b(async()=>{await qr(s(n).$id,{totalNeededOverride:JSON.stringify(I)})},"Override appliqué")}async function X(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await qr(s(n).$id,{totalNeededOverride:null})},"Override supprimé")}async function re(){!s(n)||!s(_)||await b(async()=>{const I={};if(s(m).stock&&c.stock.quantity&&c.stock.unit){const z={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};I.stockReel=JSON.stringify(z)}if(s(m).who&&(I.who=c.who),s(m).store){const z={storeName:c.store.name||"",storeComment:c.store.comment||void 0};I.storeInfo=z}Object.keys(I).length>0&&(await Ti(s(n).$id,I,z=>D.getEnrichedProductById(z)),w(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(g)},get editingPurchaseData(){return s(x)},forms:c,addPurchase:E,startEditPurchase:P,cancelEditPurchase:$,updateEditedPurchase:k,removePurchase:N,setStock:C,removeStock:M,setWho:F,updateStore:V,setOverride:Z,removeOverride:X,saveAllChanges:re,get hasChanges(){return s(m)},get hasAnyChanges(){return s(_)},formatQuantity:wa,formatDate:Sa,formatDisplayQuantity:yd}}function $d(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Ed(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function kd(e,t){t().cancelEditPurchase()}var Ad=S('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Td=S('<span class="loading loading-spinner loading-sm"></span>'),Nd=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Cd=S('<span class="loading loading-spinner loading-sm"></span>'),Id=S('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Md=(e,t,r)=>t(s(r)),Dd=(e,t,r)=>t(s(r).$id),Rd=S('<span class="loading loading-spinner loading-sm"></span>'),Od=S('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),qd=S('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),jd=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Bd(e,t){H(t,!0);let r=Oe(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(se){return se.quantity!==null&&se.quantity!==0&&se.unit?.trim()!==""}function o(se){r().removePurchase(se)}function i(se){r().startEditPurchase(se)}var l=jd(),c=u(l),f=u(c);hr(f,{class:"h-5 w-5"});var v=d(c,2),m=u(v),p=d(u(m),2),_=u(p),g=u(_);Wn(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2),b=d(_,2),y=u(b);y.value=y.__value="";var E=d(y);E.value=E.__value="kg";var P=d(E);P.value=P.__value="gr.";var $=d(P);$.value=$.__value="l.";var k=d($);k.value=k.__value="ml";var N=d(k);N.value=N.__value="unité";var C=d(N);C.value=C.__value="bottes";var M=d(b,2),F=u(M);pr(F,{class:"h-4 w-4 opacity-50"});var V=d(F,2),Z=d(M,2),X=u(Z);Gn(X,{class:"h-4 w-4 opacity-50"});var re=d(X,2),I=d(Z,2),z=d(u(I),2),ie=d(p,2),Pe=u(ie),R=u(Pe);bs(R,{class:"h-4 w-4 opacity-50"});var ae=d(R,2),Ee=d(ie,2),Ne=u(Ee),Te=u(Ne),Re=u(Te),Qe=u(Re);Qe.value=Qe.__value="delivered";var he=d(Qe);he.value=he.__value="ordered";var me=d(he);me.value=me.__value="requested";var j=d(Te,2),ee=d(Ne,2);{var $e=se=>{var J=Ad(),ve=d(u(J),2);Ie(ve,()=>r().forms.purchase.deliveryDate,Be=>r().forms.purchase.deliveryDate=Be),h(se,J)};T(ee,se=>{r().forms.purchase.status==="ordered"&&se($e)})}var pe=d(Ee,2),we=u(pe);we.__click=[$d,n,r];var Ue=u(we);{var He=se=>{var J=Td();h(se,J)},ue=se=>{var J=lt("Ajouter l'achat");h(se,J)};T(Ue,se=>{r().loading?se(He):se(ue,!1)})}var ke=d(v,2);{var ht=se=>{var J=Nd(),ve=u(J);hr(ve,{class:"mx-auto mb-2 h-12 w-12"}),h(se,J)},St=se=>{var J=qd(),ve=u(J),Be=d(u(ve));rt(Be,21,()=>r().purchasesList,ut=>ut.$id,(ut,fe,Me)=>{var Ke=Q(),Ot=O(Ke);{var ar=Y=>{var _e=Id(),Ae=u(_e),Je=u(Ae),Le=u(Je),Ze=d(Le,2),gt=u(Ze);gt.value=gt.__value="kg";var xt=d(gt);xt.value=xt.__value="gr.";var Pt=d(xt);Pt.value=Pt.__value="l.";var tt=d(Pt);tt.value=tt.__value="ml";var We=d(tt);We.value=We.__value="unité";var qt=d(We);qt.value=qt.__value="bottes";var Ht=d(Ae),sr=u(Ht),jt=d(Ht),Kt=u(jt),Wr=d(jt),yr=u(Wr),wr=u(yr);wr.value=wr.__value="requested";var or=d(wr);or.value=or.__value="ordered";var Sr=d(or);Sr.value=Sr.__value="delivered";var ir=d(Sr);ir.value=ir.__value="cancelled";var Gr=d(Wr),xr=u(Gr),Qr=d(Gr),_n=u(Qr),Hr=d(Qr),$t=u(Hr),Jt=d(Hr),mn=u(Jt),Kr=d(Jt),gn=u(Kr),Pr=u(gn);Pr.__click=[Ed,r,a];var xa=u(Pr);{var Qn=W=>{var Ye=Cd();h(W,Ye)},Pa=W=>{_d(W,{class:"h-3 w-3"})};T(xa,W=>{r().loading?W(Qn):W(Pa,!1)})}var Hn=d(Pr,2);Hn.__click=[kd,r];var B=u(Hn);ft(B,{class:"h-3 w-3"}),L(W=>Pr.disabled=W,[()=>r().loading||!a(s(fe))]),Ie(Le,()=>s(fe).quantity,W=>s(fe).quantity=W),Cr(Ze,()=>s(fe).unit,W=>s(fe).unit=W),Ie(sr,()=>s(fe).store,W=>s(fe).store=W),Ie(Kt,()=>s(fe).who,W=>s(fe).who=W),Cr(yr,()=>s(fe).status,W=>s(fe).status=W),Ie(xr,()=>s(fe).orderDate,W=>s(fe).orderDate=W),Ie(_n,()=>s(fe).deliveryDate,W=>s(fe).deliveryDate=W),Ie($t,()=>s(fe).price,W=>s(fe).price=W),Ie(mn,()=>s(fe).notes,W=>s(fe).notes=W),h(Y,_e)},br=Y=>{var _e=Od(),Ae=u(_e),Je=u(Ae),Le=d(Ae),Ze=u(Le),gt=d(Le),xt=u(gt),Pt=d(gt),tt=u(Pt),We=u(tt),qt=d(Pt),Ht=u(qt),sr=d(qt),jt=u(sr),Kt=d(sr),Wr=u(Kt),yr=d(Kt),wr=u(yr),or=d(yr),Sr=u(or),ir=u(Sr);ir.__click=[Md,i,fe];var Gr=u(ir);ia(Gr,{class:"h-4 w-4"});var xr=d(ir,2);xr.__click=[Dd,o,fe];var Qr=u(xr);{var _n=$t=>{var Jt=Rd();h($t,Jt)},Hr=$t=>{ft($t,{class:"h-4 w-4"})};T(Qr,$t=>{r().loading?$t(_n):$t(Hr,!1)})}L(($t,Jt,mn,Kr,gn)=>{q(Je,$t),q(Ze,s(fe).store||"-"),q(xt,s(fe).who||"-"),be(tt,1,`badge badge-sm ${Jt??""}`),q(We,mn),q(Ht,Kr),q(jt,gn),q(Wr,s(fe).price?`${s(fe).price}€`:"-"),q(wr,s(fe).notes||"-"),xr.disabled=r().loading},[()=>wa(s(fe).quantity,s(fe).unit),()=>ss(s(fe).status).class,()=>ss(s(fe).status).text,()=>io(s(fe).orderDate),()=>io(s(fe).deliveryDate)]),h(Y,_e)};T(Ot,Y=>{r().editingPurchaseId===s(fe).$id?Y(ar):Y(br,!1)})}h(ut,Ke)}),h(se,J)};T(ke,se=>{r().purchasesList.length===0?se(ht):se(St,!1)})}L(se=>{be(j,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),we.disabled=se},[()=>r().loading||!n()]),Ie(x,()=>r().forms.purchase.quantity,se=>r().forms.purchase.quantity=se),Cr(b,()=>r().forms.purchase.unit,se=>r().forms.purchase.unit=se),Ie(V,()=>r().forms.purchase.store,se=>r().forms.purchase.store=se),Ie(re,()=>r().forms.purchase.who,se=>r().forms.purchase.who=se),Ie(z,()=>r().forms.purchase.price,se=>r().forms.purchase.price=se),Ie(ae,()=>r().forms.purchase.notes,se=>r().forms.purchase.notes=se),Cr(Re,()=>r().forms.purchase.status,se=>r().forms.purchase.status=se),h(e,l),K()}ot(["click"]);async function Ld(e,t){await t()?.removeStock()}var zd=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},Vd=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Ud=S('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Wd=S('<span class="loading loading-spinner loading-xs"></span>'),Gd=S('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),Qd=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function Hd(e,t){H(t,!0);let r=Oe(t,"modalState",7);var n=Qd(),a=u(n),o=u(a);es(o,{class:"h-5 w-5"});var i=d(a,2),l=u(i),c=u(l),f=u(c),v=d(c,2),m=u(v),p=u(m);Wn(p,{class:"h-4 w-4 opacity-50"});var _=d(p,2),g=d(m,2),x=u(g);x.value=x.__value="";var b=d(x);b.value=b.__value="kg";var y=d(b);y.value=y.__value="gr.";var E=d(y);E.value=E.__value="l.";var P=d(E);P.value=P.__value="ml";var $=d(P);$.value=$.__value="unité";var k=d($);k.value=k.__value="bottes";var N=d(v,2),C=u(N),M=d(N,2),F=u(M);F.__click=[zd,r];var V=d(i,2);{var Z=re=>{var I=Vd(),z=u(I);es(z,{class:"mx-auto mb-2 h-12 w-12"}),h(re,I)},X=re=>{var I=Gd(),z=u(I),ie=d(u(z),2),Pe=u(ie),R=d(u(Pe),2),ae=u(R),Ee=d(Pe,2),Ne=d(u(Ee),2),Te=u(Ne),Re=d(Ee,2);{var Qe=pe=>{var we=Ud(),Ue=d(u(we),2),He=u(Ue);L(()=>q(He,r().stockParsed.notes)),h(pe,we)};T(Re,pe=>{r().stockParsed.notes&&pe(Qe)})}var he=d(ie,2),me=u(he);me.__click=[Ld,r];var j=u(me);{var ee=pe=>{var we=Wd();h(pe,we)},$e=pe=>{var we=lt("Supprimer le stock");h(pe,we)};T(j,pe=>{r().loading?pe(ee):pe($e,!1)})}L(pe=>{q(ae,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),q(Te,pe),me.disabled=r().loading},[()=>Sa(r().stockParsed.dateTime)]),h(re,I)};T(V,re=>{r().stockParsed?re(X,!1):re(Z)})}L(()=>{q(f,r().stockParsed?"Modifier le stock":"Ajouter un stock"),F.disabled=r().loading}),Ie(_,()=>r().forms.stock.quantity,re=>r().forms.stock.quantity=re),Cr(g,()=>r().forms.stock.unit,re=>r().forms.stock.unit=re),Ie(C,()=>r().forms.stock.notes,re=>r().forms.stock.notes=re),h(e,n),K()}ot(["click"]);var Kd=(e,t,r)=>t(s(r).id),Jd=S('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),Yd=S('<span class="flex items-center gap-1"><!> </span>'),Zd=S('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Xd=S('<div class="flex flex-wrap gap-2"></div> <!>',1);function Vn(e,t){H(t,!0);let r=Oe(t,"badgeSize",3,"badge-lg"),n=Oe(t,"color",3,"primary"),a=Oe(t,"badgeStyle",3,""),o=Oe(t,"onToggleItem",3,()=>{}),i=Oe(t,"showStats",3,!1),l=Oe(t,"showIcon",3,!0),c=U(Ce({}));Vr(()=>{const b={};t.items.forEach(y=>{b[y.id]=y.selected??!0}),w(c,b,!0)});function f(b){s(c)[b]=!s(c)[b],o()(b)}const v=G(()=>Object.values(s(c)).filter(Boolean).length),m=G(()=>Object.values(s(c)).filter(b=>!b).length);var p=Xd(),_=O(p);rt(_,21,()=>t.items,b=>b.id,(b,y)=>{const E=G(()=>s(c)[s(y).id]);var P=Jd();P.__click=[Kd,f,y];var $=u(P);{var k=V=>{var Z=Q(),X=O(Z);Nr(X,()=>s(y).icon,(re,I)=>{I(re,{class:"h-3 w-3",get title(){return s(y).title}})}),h(V,Z)};T($,V=>{s(y).icon&&V(k)})}var N=d($,2),C=u(N),M=d(N,2);{var F=V=>{var Z=Q(),X=O(Z);{var re=z=>{dn(z,{size:16})},I=z=>{fd(z,{size:16})};T(X,z=>{s(E)?z(re):z(I,!1)})}h(V,Z)};T(M,V=>{l()&&V(F)})}L(()=>{be(P,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(E)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Or(P,"title",s(E)?"Retirer de la liste":"Réajouter à la liste"),q(C,s(y).label)}),h(b,P)});var g=d(_,2);{var x=b=>{var y=Zd(),E=u(y),P=u(E),$=u(P);dn($,{class:"text-success h-3 w-3"});var k=d($),N=d(P,2);{var C=V=>{var Z=Yd(),X=u(Z);ft(X,{class:"text-error h-3 w-3"});var re=d(X);L(()=>q(re,` ${s(m)??""} retirés`)),h(V,Z)};T(N,V=>{s(m)>0&&V(C)})}var M=d(E,2),F=u(M);L(()=>{q(k,` ${s(v)??""} actifs`),q(F,`Total: ${t.items.length??""} items`)}),h(b,y)};T(g,b=>{i()&&b(x)})}h(e,p),K()}ot(["click"]);function Fd(e,t,r){t().forms.who=[...t().whoList],w(r,"")}var ef=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},tf=S('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function rf(e,t){H(t,!0);let r=Oe(t,"modalState",7),n=U("");const a=G(()=>{const C=new Set([...D.uniqueWho,...r().forms.who]);return Array.from(C).map(M=>({id:M,label:M,selected:r().forms.who.includes(M)}))});function o(C){const M=C.trim();M&&!r().forms.who.includes(M)&&(r().forms.who=[...r().forms.who,M])}function i(C){r().forms.who=r().forms.who.filter(M=>M!==C)}function l(C){r().forms.who.includes(C)?i(C):o(C)}function c(){s(n).trim()&&(o(s(n)),w(n,""))}var f=tf(),v=u(f),m=u(v),p=d(u(m),4),_=u(p),g=u(_),x=u(g);Gn(x,{class:"h-4 w-4 opacity-50"});var b=d(x,2);b.__keydown=[ef,c];var y=d(g,2);y.__click=c;var E=u(y);Li(E,{size:16});var P=d(_,2),$=d(u(P),2);Vn($,{get items(){return s(a)},onToggleItem:l,showIcon:!0});var k=d(p,2),N=u(k);N.__click=[Fd,r,n],L(C=>{b.disabled=r().loading,y.disabled=C,N.disabled=r().loading},[()=>r().loading||!s(n).trim()]),Ie(b,()=>s(n),C=>w(n,C)),h(e,f),K()}ot(["keydown","click"]);var nf=S('<div class="mb-1 text-xs opacity-70"> </div>'),af=(e,t,r)=>t(s(r)),sf=S("<button><!> </button>"),of=S('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function zi(e,t){H(t,!0);let r=Oe(t,"maxSuggestions",3,8),n=Oe(t,"title",3,"Suggestions :"),a=Oe(t,"buttonSize",3,"btn-xs"),o=Oe(t,"buttonVariant",3,"btn-soft"),i=Oe(t,"disabled",3,!1);const l=G(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=Q(),v=O(f);{var m=p=>{var _=of(),g=u(_);{var x=y=>{var E=nf(),P=u(E);L(()=>q(P,n())),h(y,E)};T(g,y=>{n()&&y(x)})}var b=d(g,2);rt(b,21,()=>s(l),y=>y.id,(y,E)=>{var P=sf();P.__click=[af,c,E];var $=u(P);{var k=C=>{var M=Q(),F=O(M);Nr(F,()=>s(E).icon,(V,Z)=>{Z(V,{class:"h-3 w-3"})}),h(C,M)};T($,C=>{s(E).icon&&C(k)})}var N=d($);L(()=>{be(P,1,`btn ${a()??""} ${o()??""}`),P.disabled=i()||s(E).disabled,Or(P,"title",s(E).disabled?"Déjà sélectionné":s(E).label),q(N,` ${s(E).label??""}`)}),h(y,P)}),h(p,_)};T(v,p=>{s(l).length>0&&p(m)})}h(e,f),K()}ot(["click"]);var lf=(e,t)=>{e.key==="Enter"&&t()},cf=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},uf=S(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function df(e,t){H(t,!0);let r=Oe(t,"modalState",7);const n=G(()=>r()?.hasChanges?.store||!1);async function a(){if(!s(n))return;const E={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(E)}var o=uf(),i=u(o),l=u(i),c=d(u(l),4),f=u(c),v=u(f),m=u(v);pr(m,{class:"h-4 w-4 opacity-50"});var p=d(m,2);p.__keydown=[lf,a];var _=d(v,2);{var g=E=>{{let P=G(()=>D.uniqueStores.map($=>({id:$,label:$,disabled:$===r().forms.store.name})));zi(E,{get suggestions(){return s(P)},onSuggestionClick:$=>{r().forms.store.name=$.label},buttonVariant:"btn-outline"})}};T(_,E=>{D.uniqueStores.length>0&&E(g)})}var x=d(f,2),b=d(c,2),y=u(b);y.__click=[cf,r],L(()=>y.disabled=r().loading),Ie(p,()=>r().forms.store.name,E=>r().forms.store.name=E),Ie(x,()=>r().forms.store.comment,E=>r().forms.store.comment=E),h(e,o),K()}ot(["keydown","click"]);async function ff(e,t,r,n,a,o){if(!t.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(i),w(o,!1)}async function vf(e,t,r){t.modalState&&(await t.modalState.removeOverride(),w(r,!1))}var hf=S('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),pf=S('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),_f=S(" <!>",1),mf=(e,t)=>w(t,!0),gf=S('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),bf=S('<div class="text-error text-sm">Limite de caractères atteinte</div>'),yf=S('<span class="loading loading-spinner loading-sm"></span>'),wf=S('<span class="loading loading-spinner loading-sm"></span>'),Sf=S(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div class="form-control"><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),xf=S('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function Pf(e,t){H(t,!0);const r=G(()=>t.modalState.product?.totalNeededOverrideParsed),n=G(()=>t.modalState.product?.displayTotalNeeded||[]);let a=U(!1),o=U(Ce(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=U(Ce(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=U(Ce(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),c=G(()=>s(o)>0&&s(i).trim()!=="");var f=xf(),v=u(f),m=u(v),p=u(m);{var _=x=>{var b=gf(),y=O(b),E=u(y),P=d(u(E),2);{var $=V=>{var Z=hf();h(V,Z)};T(P,V=>{s(r)&&V($)})}var k=d(P,2),N=u(k);{var C=V=>{var Z=_f(),X=O(Z),re=d(X);{var I=z=>{var ie=pf(),Pe=u(ie);bs(Pe,{});var R=d(Pe);L(()=>q(R,` ${s(r).comment??""}`)),h(z,ie)};T(re,z=>{s(r).comment&&z(I)})}L(z=>q(X,`${z??""} `),[()=>wa(s(r).totalOverride.q,s(r).totalOverride.u)]),h(V,Z)},M=V=>{var Z=lt();L(()=>q(Z,s(n))),h(V,Z)};T(N,V=>{s(r)?V(C):V(M,!1)})}var F=d(y,2);F.__click=[mf,a],h(x,b)},g=x=>{var b=Sf(),y=O(b),E=u(y),P=u(E);dd(P,{class:"h-4 w-4 opacity-50"});var $=d(P,2),k=d(E,2),N=u(k);N.value=N.__value="";var C=d(N);C.value=C.__value="kg";var M=d(C);M.value=M.__value="gr.";var F=d(M);F.value=F.__value="l.";var V=d(F);V.value=V.__value="ml";var Z=d(V);Z.value=Z.__value="unité";var X=d(Z);X.value=X.__value="bottes";var re=d(y,2),I=u(re),z=d(u(I),2),ie=d(z,2);{var Pe=j=>{var ee=bf();h(j,ee)};T(ie,j=>{s(l).length>=250&&j(Pe)})}var R=d(re,2),ae=u(R);ae.__click=[vf,t,a];var Ee=u(ae);{var Ne=j=>{var ee=yf();h(j,ee)},Te=j=>{var ee=lt();L(()=>q(ee,`Réinitialiser le total calculé (${s(n)??""}).`)),h(j,ee)};T(Ee,j=>{t.modalState.loading?j(Ne):j(Te,!1)})}var Re=d(ae,2);Re.__click=[ff,t,o,i,l,a];var Qe=u(Re);{var he=j=>{var ee=wf();h(j,ee)},me=j=>{var ee=lt("Appliquer");h(j,ee)};T(Qe,j=>{t.modalState.loading?j(he):j(me,!1)})}L(()=>{ae.disabled=t.modalState.loading,Re.disabled=t.modalState.loading||!s(c)}),Ie($,()=>s(o),j=>w(o,j)),Cr(k,()=>s(i),j=>w(i,j)),Ie(z,()=>s(l),j=>w(l,j)),h(x,b)};T(p,x=>{s(a)?x(g,!1):x(_)})}L(()=>be(v,1,`card border-base-300 border ${s(a)?"bg-base-200":"bg-base-100"}`)),h(e,f),K()}ot(["click"]);var $f=S('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Ef=S('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),kf=S('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Af=S('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Tf(e,t){H(t,!0);const r=G(()=>t.modalState.recipes);var n=Af(),a=O(n);Pf(a,{get modalState(){return t.modalState}});var o=d(a,2),i=u(o),l=u(i);gs(l,{class:"h-5 w-5"});var c=d(i,2);{var f=m=>{var p=$f(),_=u(p);Wn(_,{class:"mx-auto mb-2 h-12 w-12"}),h(m,p)},v=m=>{var p=kf(),_=u(p),g=d(u(_));rt(g,21,()=>s(r),x=>x.r,(x,b)=>{var y=Ef(),E=u(y),P=u(E),$=d(E),k=u($),N=d($),C=u(N);L(M=>{q(P,`${s(b).r??""} (${(s(b).a||"-")??""} c.)`),q(k,`${(s(b).q||s(b).qEq)??""} ${(s(b).u||s(b).uEq)??""}`),q(C,M)},[()=>Sa(s(b).date)]),h(x,y)}),h(m,p)};T(c,m=>{s(r).length===0?m(f):m(v,!1)})}h(e,n),K()}function Nf(e,t,r){s(t).saveAllChanges().then(()=>{r.onClose()})}var Cf=S('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),If=S('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Mf=(e,t)=>t("recettes"),Df=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Rf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Of=(e,t)=>t("magasins"),qf=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),jf=(e,t)=>t("volontaires"),Bf=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Lf=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),zf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Vf=(e,t)=>t("stock"),Uf=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Wf=S('<span class="badge badge-sm badge-secondary ml-1">1</span>'),Gf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Qf=(e,t)=>t("achats"),Hf=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Kf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Jf=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Yf=S('<span class="loading loading-spinner loading-sm"></span>'),Zf=S('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),Xf=S('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Ff(e,t){H(t,!0);let r=Oe(t,"initialTab",3,"recettes"),n=G(()=>Pd(t.productId)),a=U(Ce(r()));function o(b){w(a,b,!0)}var i=Xf(),l=u(i),c=u(l),f=u(c);{var v=b=>{var y=Cf(),E=O(y),P=u(E),$=d(E,2),k=u($),N=u(k),C=d(k,2),M=d(u(C));L(()=>{q(P,s(n).product?.productName),q(N,s(n).product?.productType),q(M,` ${s(n).product?.displayTotalNeeded??""}`)}),h(b,y)},m=b=>{var y=If();h(b,y)};T(f,b=>{s(n)&&s(n).product?b(v):b(m,!1)})}var p=d(f,2);p.__click=function(...b){t.onClose?.apply(this,b)};var _=u(p);ft(_,{class:"h-4 w-4"});var g=d(c,2);{var x=b=>{var y=Zf(),E=O(y),P=u(E);P.__click=[Mf,o];var $=u(P);gs($,{class:"mr-1 h-5 w-5"});var k=d($,2);{var N=J=>{var ve=Df(),Be=u(ve);L(()=>q(Be,s(n).product?.nbRecipes)),h(J,ve)},C=J=>{var ve=Rf();h(J,ve)};T(k,J=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?J(N):J(C,!1)})}var M=d(P,2);M.__click=[Of,o];var F=u(M);pr(F,{class:"mr-1 h-5 w-5"});var V=d(F,2);{var Z=J=>{var ve=qf();h(J,ve)};T(V,J=>{s(n).hasChanges?.store&&J(Z)})}var X=d(M,2);X.__click=[jf,o];var re=u(X);as(re,{class:"mr-1 h-5 w-5"});var I=d(re,2);{var z=J=>{var ve=Bf();h(J,ve)},ie=J=>{var ve=Q(),Be=O(ve);{var ut=Me=>{var Ke=Lf(),Ot=u(Ke);L(()=>q(Ot,s(n).product?.who.length)),h(Me,Ke)},fe=Me=>{var Ke=zf();h(Me,Ke)};T(Be,Me=>{s(n).product?.who&&s(n).product?.who.length>0?Me(ut):Me(fe,!1)},!0)}h(J,ve)};T(I,J=>{s(n).hasChanges?.who?J(z):J(ie,!1)})}var Pe=d(X,2);Pe.__click=[Vf,o];var R=u(Pe);es(R,{class:"mr-1 h-5 w-5"});var ae=d(R,2);{var Ee=J=>{var ve=Uf();h(J,ve)},Ne=J=>{var ve=Q(),Be=O(ve);{var ut=Me=>{var Ke=Wf();h(Me,Ke)},fe=Me=>{var Ke=Gf();h(Me,Ke)};T(Be,Me=>{s(n).stockParsed?Me(ut):Me(fe,!1)},!0)}h(J,ve)};T(ae,J=>{s(n).hasChanges?.stock?J(Ee):J(Ne,!1)})}var Te=d(Pe,2);Te.__click=[Qf,o];var Re=u(Te);hr(Re,{class:"mr-1 h-5 w-5"});var Qe=d(Re,2);{var he=J=>{var ve=Hf(),Be=u(ve);L(()=>q(Be,s(n).purchasesList.length)),h(J,ve)},me=J=>{var ve=Kf();h(J,ve)};T(Qe,J=>{s(n).purchasesList.length>0?J(he):J(me,!1)})}var j=d(E,2),ee=u(j);{var $e=J=>{var ve=Jf(),Be=u(ve);ft(Be,{class:"h-4 w-4"});var ut=d(Be,2),fe=u(ut);L(()=>q(fe,`erreur : ${s(n).error??""}`)),h(J,ve)};T(ee,J=>{s(n).error&&J($e)})}var pe=d(ee,2),we=u(pe);Pc(we,()=>s(a),J=>{var ve=Q(),Be=O(ve);{var ut=Me=>{Tf(Me,{get modalState(){return s(n)}})},fe=Me=>{var Ke=Q(),Ot=O(Ke);{var ar=Y=>{Bd(Y,{get modalState(){return s(n)}})},br=Y=>{var _e=Q(),Ae=O(_e);{var Je=Ze=>{Hd(Ze,{get modalState(){return s(n)}})},Le=Ze=>{var gt=Q(),xt=O(gt);{var Pt=We=>{rf(We,{get modalState(){return s(n)}})},tt=We=>{var qt=Q(),Ht=O(qt);{var sr=jt=>{df(jt,{get modalState(){return s(n)}})};T(Ht,jt=>{s(a)==="magasins"&&jt(sr)},!0)}h(We,qt)};T(xt,We=>{s(a)==="volontaires"?We(Pt):We(tt,!1)},!0)}h(Ze,gt)};T(Ae,Ze=>{s(a)==="stock"?Ze(Je):Ze(Le,!1)},!0)}h(Y,_e)};T(Ot,Y=>{s(a)==="achats"?Y(ar):Y(br,!1)},!0)}h(Me,Ke)};T(Be,Me=>{s(a)==="recettes"?Me(ut):Me(fe,!1)})}h(J,ve)});var Ue=d(j,2),He=u(Ue);He.__click=function(...J){t.onClose?.apply(this,J)};var ue=u(He),ke=d(He,2);ke.__click=[Nf,n,t];var ht=u(ke);{var St=J=>{var ve=Yf();h(J,ve)},se=J=>{var ve=lt("Tout enregistrer");h(J,ve)};T(ht,J=>{s(n).loading?J(St):J(se,!1)})}L(()=>{be(P,1,`tab ${s(a)==="recettes"?"tab-active":""}`),be(M,1,`tab ${s(a)==="magasins"?"tab-active":""}`),be(X,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),be(Pe,1,`tab ${s(a)==="stock"?"tab-active":""}`),be(Te,1,`tab ${s(a)==="achats"?"tab-active":""}`),q(ue,s(n)?.hasAnyChanges?"Annuler":"Fermer"),ke.disabled=s(n).loading||!s(n).hasAnyChanges}),h(b,y)};T(g,b=>{s(n)&&b(x)})}h(e,i),K()}ot(["click"]);async function ev(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){w(n,null),w(a,null);try{const c=s(o).map(m=>m.id),f=i.products.filter(m=>c.includes(m.$id));D.setSyncStatus(c,!0),i.onClose();const v=await ji(c,f,s(l),"replace");if(w(a,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),i.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";w(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),D.clearSyncStatus()}finally{w(r,!1)}}}function co(e,t,r){s(t)||r.onClose()}var tv=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),rv=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},nv=(e,t)=>w(t,"empty"),av=(e,t)=>w(t,"all"),sv=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),ov=S("<!> ",1),iv=S('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function lv(e,t){H(t,!0);let r=U(!1),n=U(null),a=U(null),o=U(Ce([])),i=U(""),l=U("empty"),c=U(Ce({}));Vr(()=>{const ue={};t.products.forEach(ke=>{t.productIds.includes(ke.$id)&&(s(l)==="empty"?ue[ke.$id]=!ke.who||ke.who.length===0:ue[ke.$id]=!0)}),w(c,ue,!0)});const f=G(()=>t.products.map(ue=>({id:ue.$id,label:ue.productName,title:ue.productName,selected:s(c)[ue.$id]}))),v=G(()=>s(f).filter(ue=>ue.selected)),m=G(()=>{const ue=new Set([...D.uniqueWho,...s(o)]);return Array.from(ue).map(ke=>({id:ke,label:ke,selected:s(o).includes(ke)}))}),p=G(()=>`Gérer les volontaires (${s(v).length} produits sélectionnés)`),_=G(()=>s(v).length===0?!1:s(o).length>0);function g(ue){const ke=ue.trim();ke&&!s(o).includes(ke)&&w(o,[...s(o),ke],!0)}function x(ue){w(o,s(o).filter(ke=>ke!==ue),!0)}function b(ue){s(o).includes(ue)?x(ue):g(ue)}function y(){s(i).trim()&&(g(s(i)),w(i,""))}function E(ue){s(c)[ue]=!s(c)[ue]}var P=iv(),$=u(P),k=u($),N=u(k),C=u(N),M=d(N,2);M.__click=[co,r,t];var F=u(M);ft(F,{class:"h-4 w-4"});var V=d(k,2),Z=u(V);{var X=ue=>{var ke=tv(),ht=u(ke);ya(ht,{class:"h-4 w-4"});var St=d(ht,2),se=u(St);L(()=>q(se,s(n))),h(ue,ke)};T(Z,ue=>{s(n)&&ue(X)})}var re=d(Z,2),I=u(re),z=u(I),ie=u(z),Pe=u(ie);Gn(Pe,{class:"h-4 w-4 opacity-50"});var R=d(Pe,2);R.__keydown=[rv,y];var ae=d(ie,2);ae.__click=y;var Ee=u(ae);Li(Ee,{size:16});var Ne=d(z,2),Te=d(u(Ne),2);Vn(Te,{get items(){return s(m)},onToggleItem:b,showIcon:!0});var Re=d(re,2),Qe=d(u(Re),2),he=u(Qe);he.__click=[nv,l];var me=d(he,2);me.__click=[av,l];var j=d(Qe,2);Vn(j,{get items(){return s(f)},onToggleItem:E,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var ee=d(V,2),$e=u(ee);$e.__click=[co,r,t];var pe=d($e,2);pe.__click=[ev,_,r,n,a,v,t,o];var we=u(pe);{var Ue=ue=>{var ke=sv();h(ue,ke)},He=ue=>{var ke=ov(),ht=O(ke);dn(ht,{class:"h-4 w-4"});var St=d(ht);L(()=>q(St,` Appliquer à ${s(v).length??""} produit(s)`)),h(ue,ke)};T(we,ue=>{s(r)?ue(Ue):ue(He,!1)})}L(ue=>{q(C,s(p)),M.disabled=s(r),R.disabled=s(r),ae.disabled=ue,be(he,1,`tab ${s(l)==="empty"?"tab-active":""}`),be(me,1,`tab ${s(l)==="all"?"tab-active":""}`),$e.disabled=s(r),pe.disabled=s(r)||!s(_)},[()=>s(r)||!s(i).trim()]),Ie(R,()=>s(i),ue=>w(i,ue)),h(e,P),K()}ot(["click","keydown"]);async function cv(e,t,r,n,a,o,i,l,c){if(!(!s(t)||s(r))){w(n,null),w(a,null);try{const f=s(o).map(_=>_.id),v=i.products.filter(_=>f.includes(_.$id));D.setSyncStatus(f,!0),i.onClose();const m={storeName:s(l).trim(),storeComment:s(c).trim()},p=await qi(f,v,m);if(w(a,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(f){const v=f instanceof Error?f.message:"Erreur inconnue";w(n,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),D.clearSyncStatus()}finally{w(r,!1)}}}function uo(e,t,r){s(t)||r.onClose()}var uv=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),dv=(e,t)=>w(t,"empty"),fv=(e,t)=>w(t,"all"),vv=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),hv=S("<!> ",1),pv=S('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function _v(e,t){H(t,!0);let r=U(!1),n=U(null),a=U(null),o=U(Ce(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=U(Ce(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=U(Ce({})),c=U("empty");Vr(()=>{const j={};t.products.forEach(ee=>{t.productIds.includes(ee.$id)&&(s(c)==="empty"?j[ee.$id]=!ee.storeInfo||!ee.storeInfo.storeName:j[ee.$id]=!0)}),w(l,j,!0)});const f=G(()=>t.products.map(j=>({id:j.$id,label:j.productName,title:j.productName,selected:s(l)[j.$id]}))),v=G(()=>s(f).filter(j=>j.selected)),m=G(()=>`Attribuer un magasin (${s(v).length} produits sélectionnés)`),p=G(()=>s(v).length===0?!1:s(o).trim().length>0);function _(j){s(l)[j]=!s(l)[j]}var g=pv(),x=u(g),b=u(x),y=u(b),E=u(y),P=d(y,2);P.__click=[uo,r,t];var $=u(P);ft($,{class:"h-4 w-4"});var k=d(b,2),N=u(k);{var C=j=>{var ee=uv(),$e=u(ee);ya($e,{class:"h-4 w-4"});var pe=d($e,2),we=u(pe);L(()=>q(we,s(n))),h(j,ee)};T(N,j=>{s(n)&&j(C)})}var M=d(N,2),F=u(M),V=u(F),Z=u(V);pr(Z,{class:"h-4 w-4 opacity-50"});var X=d(Z,2),re=d(V,2);{let j=G(()=>D.uniqueStores.map(ee=>({id:ee,label:ee,disabled:ee===s(o)})));zi(re,{get suggestions(){return s(j)},onSuggestionClick:ee=>{w(o,ee.label,!0)},title:"Suggestions de magasins :"})}var I=d(F,2),z=u(I),ie=d(M,2),Pe=d(u(ie),2),R=u(Pe);R.__click=[dv,c];var ae=d(R,2);ae.__click=[fv,c];var Ee=d(Pe,2);Vn(Ee,{get items(){return s(f)},onToggleItem:_,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Ne=d(k,2),Te=u(Ne);Te.__click=[uo,r,t];var Re=d(Te,2);Re.__click=[cv,p,r,n,a,v,t,o,i];var Qe=u(Re);{var he=j=>{var ee=vv();h(j,ee)},me=j=>{var ee=hv(),$e=O(ee);dn($e,{class:"h-4 w-4"});var pe=d($e);L(()=>q(pe,` Appliquer à ${s(v).length??""} produit(s)`)),h(j,ee)};T(Qe,j=>{s(r)?j(he):j(me,!1)})}L(()=>{q(E,s(m)),P.disabled=s(r),X.disabled=s(r),z.disabled=s(r),be(R,1,`tab ${s(c)==="empty"?"tab-active":""}`),be(ae,1,`tab ${s(c)==="all"?"tab-active":""}`),Te.disabled=s(r),Re.disabled=s(r)||!s(p)}),Ie(X,()=>s(o),j=>w(o,j)),Ie(z,()=>s(i),j=>w(i,j)),h(e,g),K()}ot(["click"]);function mv(e,t){const r=e.reduce((a,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return a+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function gv(e,t){const r=e.filter(i=>!i.isSynced).map(i=>({productId:i.productId,productData:i.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(i){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",i)}const a=e.flatMap(i=>i.missingQuantities.map(l=>({productId:i.productId,quantity:l.q,unit:l.u,status:"delivered",notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:null,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:a},invoiceData:t}}async function bv(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=mv(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,o=[];if(n<=a)o.push(t);else{let p=[],_=0;for(const g of t){const x=(g.isSynced?0:1)+g.missingQuantities.length;_+x>a?(p.length>0&&o.push(p),p=[g],_=x):(p.push(g),_+=x)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<o.length;p++){const _=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${_.length} produits)`);try{const g=await gv(_,r),x=await yv(g);if(i.push(x),x.success)l+=x.productsCreated,c+=x.purchasesCreated,f+=x.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${x.error}`);break}}catch(g){const x=g instanceof Error?g.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,g),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:x,timestamp:new Date().toISOString()});break}}const v=i.every(p=>p.success),m=i.some(p=>!p.success);return{success:v,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:m?"Un ou plusieurs lots ont échoué":void 0}}async function yv(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}function wv(e,t){w(t,!s(t))}var Sv=S('<span class="text-base-content font-semibold"> </span>'),xv=S('<div class="text-base-content/80 flex-1"> </div>'),Pv=S('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),$v=S('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Ev=S('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function kv(e,t){let r=Oe(t,"icon",3,nd),n=Oe(t,"class",3,""),a=Oe(t,"initiallyOpen",3,!1),o=r(),i=U(Ce(a())),l=Ce(t.children);var c=Ev(),f=u(c);f.__click=[wv,i];var v=u(f),m=u(v);o(m,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(m,2);{var _=$=>{var k=Sv(),N=u(k);L(()=>q(N,t.title)),h($,k)};T(p,$=>{t.title&&$(_)})}var g=d(v,2);{var x=$=>{var k=xv(),N=u(k);L(()=>q(N,t.contentVisible)),h($,k)};T(g,$=>{t.contentVisible&&$(x)})}var b=d(g,2);{var y=$=>{var k=Pv(),N=u(k),C=u(N);{var M=Z=>{var X=lt("en savoir plus");h(Z,X)},F=Z=>{var X=lt("masquer");h(Z,X)};T(C,Z=>{s(i)?Z(F,!1):Z(M)})}var V=d(N,2);{let Z=G(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(i)?"rotate-180":""}`);Ju(V,{get class(){return s(Z)}})}h($,k)};T(b,$=>{l&&$(y)})}var E=d(f,2);{var P=$=>{var k=$v(),N=u(k),C=u(N);ne(C,()=>t.children??te),L(()=>be(k,1,`overflow-hidden transition-all duration-200 ${s(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h($,k)};T(E,$=>{l&&$(P)})}L(()=>{be(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),ni(c,t.style),be(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Or(f,"aria-expanded",s(i))}),h(e,c)}ot(["click"]);async function Av(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){w(r,!0),w(n,null),w(a,null);try{const c=`FACTURE_${Date.now()}`,f=s(o).map(_=>_.$id);D.setSyncStatus(f,!0);const v=[];for(const _ of s(o))v.push({productId:_.$id,isSynced:_.isSynced,productData:_,missingQuantities:_.missingQuantityArray||[]});const m={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(o).length} produits`,who:i.who.trim()||void 0};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const p=await bv(D.currentMainId,v,m);if(p.success)w(a,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";w(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),D.clearSyncStatus()}finally{w(r,!1)}}}function fo(e,t,r){s(t)||r.onClose()}var Tv=S('<div class="alert alert-error"><!> <span> </span></div>'),Nv=S('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),Cv=S(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),Iv=S("<option> </option>"),Mv=S("<option> </option>"),Dv=S('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),Rv=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Ov=S("<!> ",1),qv=S(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option>Annulé</option></select> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function jv(e,t){H(t,!0);let r=U(!1),n=U(null),a=U(null),o=Ce({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=U(Ce(new Set));Vr(()=>{w(i,new Set(t.products.map(Y=>Y.$id)),!0)});const l=G(()=>t.products.filter(Y=>s(i).has(Y.$id))),c=G(()=>s(l).length!==0),f=G(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function v(Y){const _e=new Set(s(i));_e.has(Y)?_e.delete(Y):_e.add(Y),w(i,_e,!0)}const m=G(()=>t.products.map(Y=>({id:Y.$id,label:Y.productName,title:Y.productName})));var p=qv(),_=u(p),g=u(_),x=u(g),b=u(x);hr(b,{class:"h-5 w-5"});var y=d(b),E=d(x,2);E.__click=[fo,r,t];var P=u(E);ft(P,{class:"h-4 w-4"});var $=d(g,2),k=u($);{var N=Y=>{var _e=Tv(),Ae=u(_e);ya(Ae,{class:"h-4 w-4"});var Je=d(Ae,2),Le=u(Je);L(()=>q(Le,s(n))),h(Y,_e)};T(k,Y=>{s(n)&&Y(N)})}var C=d(k,2);{var M=Y=>{var _e=Nv(),Ae=u(_e);dn(Ae,{class:"h-4 w-4"});var Je=d(Ae,2),Le=u(Je),Ze=d(Le);{var gt=tt=>{var We=lt("+ 1 dépense globale");h(tt,We)};T(Ze,tt=>{s(a).expense&&tt(gt)})}var xt=d(Ze,2);{var Pt=tt=>{var We=lt();L(()=>q(We,`(traité en ${s(a).batches??""} lots)`)),h(tt,We)};T(xt,tt=>{s(a).batches&&s(a).batches>1&&tt(Pt)})}L(()=>q(Le,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),h(Y,_e)};T(C,Y=>{s(a)&&Y(M)})}var F=d(C,2),V=u(F);kv(V,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(Y,_e)=>{var Ae=Cv();h(Y,Ae)},$$slots:{default:!0}});var Z=d(F,2),X=d(u(Z),2),re=u(X),I=u(re),z=u(I);pr(z,{class:"h-4 w-4 opacity-50"});var ie=d(z,2),Pe=d(I,2);rt(Pe,21,()=>D.uniqueStores,Ha,(Y,_e)=>{var Ae=Iv(),Je=u(Ae),Le={};L(()=>{q(Je,s(_e)),Le!==(Le=s(_e))&&(Ae.value=(Ae.__value=s(_e))??"")}),h(Y,Ae)});var R=d(re,2),ae=u(R),Ee=u(ae);Gn(Ee,{class:"h-4 w-4 opacity-50"});var Ne=d(Ee,2),Te=d(ae,2);rt(Te,21,()=>D.uniqueWho,Ha,(Y,_e)=>{var Ae=Mv(),Je=u(Ae),Le={};L(()=>{q(Je,s(_e)),Le!==(Le=s(_e))&&(Ae.value=(Ae.__value=s(_e))??"")}),h(Y,Ae)});var Re=d(R,2),Qe=u(Re),he=u(Qe);rd(he,{class:"h-4 w-4 opacity-50"});var me=d(he,2),j=d(X,2),ee=u(j),$e=u(ee),pe=u($e);pe.value=pe.__value="delivered";var we=d(pe);we.value=we.__value="ordered";var Ue=d(we);Ue.value=Ue.__value="requested";var He=d(Ue);He.value=He.__value="cancelled";var ue=d($e,2),ke=d(ee,2);{var ht=Y=>{var _e=Dv(),Ae=u(_e),Je=d(u(Ae),2);L(()=>Je.disabled=s(r)),Ie(Je,()=>o.deliveryDate,Le=>o.deliveryDate=Le),h(Y,_e)};T(ke,Y=>{o.status==="ordered"&&Y(ht)})}var St=d(j,2),se=u(St),J=u(se);bs(J,{class:"h-4 w-4 opacity-50"});var ve=d(J,2),Be=d(Z,2),ut=d(u(Be),2);Vn(ut,{get items(){return s(m)},onToggleItem:v,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var fe=d(Be,2),Me=u(fe);Me.__click=[fo,r,t];var Ke=d(Me,2);Ke.__click=[Av,c,r,n,a,l,o,t];var Ot=u(Ke);{var ar=Y=>{var _e=Rv();h(Y,_e)},br=Y=>{var _e=Ov(),Ae=O(_e);hr(Ae,{class:"h-4 w-4"});var Je=d(Ae);L(()=>q(Je,` Valider ${s(l).length??""} produit(s)`)),h(Y,_e)};T(Ot,Y=>{s(r)?Y(ar):Y(br,!1)})}L(()=>{q(y,` ${s(f)??""}`),E.disabled=s(r),ie.disabled=s(r),Ne.disabled=s(r),me.disabled=s(r),$e.disabled=s(r),be(ue,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),ve.disabled=s(r),Me.disabled=s(r),Ke.disabled=s(r)||!s(c)}),Ie(ie,()=>o.store,Y=>o.store=Y),Ie(Ne,()=>o.who,Y=>o.who=Y),Ie(me,()=>o.expense,Y=>o.expense=Y),Cr($e,()=>o.status,Y=>o.status=Y),Ie(ve,()=>o.notes,Y=>o.notes=Y),h(e,p),K()}ot(["click"]);var Bv=()=>D.setGroupBy("none"),Lv=()=>D.setGroupBy("store"),zv=()=>D.setGroupBy("productType"),Vv=(e,t)=>D.toggleProductType(t),Uv=S("<button><!> </button>"),Wv=()=>D.toggleTemperature("frais"),Gv=()=>D.toggleTemperature("surgele"),Qv=()=>D.clearTypeAndTemperatureFilters(),Hv=S('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Kv=(e,t)=>D.toggleStore(t),Jv=S("<button> </button>"),Yv=S('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Zv=(e,t)=>D.toggleWho(t),Xv=S("<button> </button>"),Fv=S('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),eh=(e,t)=>{D.clearFilters(),w(t,!1)},th=S('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function rh(e,t){H(t,!0);let r=U(!1);const n=G(()=>D.filters),a=G(()=>D.uniqueStores),o=G(()=>D.uniqueWho),i=G(()=>D.uniqueProductTypes);var l=th(),c=O(l),f=u(c),v=d(f,2),m=d(u(v),2),p=u(m),_=u(p),g=u(_);ts(g,{class:"w-5 h-5"});var x=d(_,2),b=u(x);ft(b,{class:"w-4 h-4"});var y=d(p,2),E=d(u(y),2),P=u(E);P.__change=[Bv];var $=d(P,2);$.__change=[Lv];var k=d($,2);k.__change=[zv];var N=d(y,2),C=u(N),M=d(u(C),2);rt(M,20,()=>s(i),he=>he,(he,me)=>{const j=G(()=>na(me));var ee=Uv();ee.__click=[Vv,me];var $e=u(ee);Nr($e,()=>s(j).icon,(we,Ue)=>{Ue(we,{class:"w-3 h-3 mr-1"})});var pe=d($e);L(we=>{be(ee,1,`btn btn-sm ${we??""}`),q(pe,` ${s(j).displayName??""}`)},[()=>s(n).selectedProductTypes.length===0?"btn-soft btn-accent":s(n).selectedProductTypes.includes(me)?"btn-accent":"btn-dash btn-accent"]),h(he,ee)});var F=d(M,2),V=u(F);V.__click=[Wv];var Z=u(V);rs(Z,{class:"w-3 h-3"});var X=d(V,2);X.__click=[Gv];var re=u(X);ns(re,{class:"w-3 h-3"});var I=d(X,2);{var z=he=>{var me=Hv();me.__click=[Qv];var j=u(me);ft(j,{class:"w-3 h-3"}),h(he,me)};T(I,he=>{(s(n).selectedProductTypes.length>0||s(n).selectedTemperatures.length>0)&&he(z)})}var ie=d(N,2);{var Pe=he=>{var me=Yv(),j=u(me),ee=d(u(j),2);rt(ee,20,()=>s(a),$e=>$e,($e,pe)=>{var we=Jv();we.__click=[Kv,pe];var Ue=u(we);L(He=>{be(we,1,`btn btn-sm ${He??""}`),q(Ue,pe)},[()=>s(n).selectedStores.length===0?"btn-soft btn-accent":s(n).selectedStores.includes(pe)?"btn-accent":"btn-dash btn-accent"]),h($e,we)}),h(he,me)};T(ie,he=>{s(a).length>0&&he(Pe)})}var R=d(ie,2);{var ae=he=>{var me=Fv(),j=u(me),ee=d(u(j),2);rt(ee,20,()=>s(o),$e=>$e,($e,pe)=>{var we=Xv();we.__click=[Zv,pe];var Ue=u(we);L(He=>{be(we,1,`btn btn-sm ${He??""}`),q(Ue,pe)},[()=>s(n).selectedWho.length===0?"btn-soft btn-accent":s(n).selectedWho.includes(pe)?"btn-accent":"btn-dash btn-accent"]),h($e,we)}),h(he,me)};T(R,he=>{s(o).length>0&&he(ae)})}var Ee=d(R,4);Ee.__click=[eh,r];var Ne=u(Ee);ft(Ne,{class:"w-4 h-4 mr-2"});var Te=d(c,2),Re=u(Te),Qe=u(Re);ts(Qe,{class:"w-6 h-6"}),L((he,me)=>{rn(P,s(n).groupBy==="none"),rn($,s(n).groupBy==="store"),rn(k,s(n).groupBy==="productType"),be(V,1,`btn btn-sm ${he??""}`),be(X,1,`btn btn-sm ${me??""}`)},[()=>s(n).selectedTemperatures.length===0?"btn-soft btn-success":s(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(n).selectedTemperatures.length===0?"btn-soft btn-info":s(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Rc(f,()=>s(r),he=>w(r,he)),h(e,l),K()}ot(["change","click"]);var nh=(e,t,r)=>t(r),ah=S("<button><span> </span> <!></button>"),sh=(e,t)=>t(),oh=S('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1"><!> <button class="btn btn-sm btn-primary btn-outline ms-4" type="button"><span>Toutes les dates</span></button></div></fieldset></div></div>');function ih(e,t){H(t,!0);let r=Oe(t,"availableDates",19,()=>[]),n=Oe(t,"currentRange",19,()=>({start:null,end:null})),a=U(Ce(n().start)),o=U(Ce(n().end));Vr(()=>{w(a,n().start,!0),w(o,n().end,!0)});function i(y){s(a)===y&&s(o)===y?v():new Date(y)<new Date(s(a))?w(a,y,!0):(new Date(y)>new Date(s(o))||w(a,y,!0),w(o,y,!0)),t.onRangeChange(s(a),s(o))}function l(y){return new Date(y)>=new Date(s(a))&&new Date(y)<=new Date(s(o))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function c(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function f(y){const P=new Date(y).getUTCHours();return P===12?"sun":P===20?"moon":P===8?"cloud":null}function v(){r().length!==0&&(w(a,r()[0],!0),w(o,r()[r().length-1],!0),t.onRangeChange(s(a),s(o)))}var m=oh(),p=u(m),_=u(p),g=d(u(_),2),x=u(g);rt(x,18,r,y=>y,(y,E)=>{var P=ah();P.__click=[nh,i,E];var $=u(P),k=u($),N=d($,2);{var C=F=>{gd(F,{size:16})},M=F=>{var V=Q(),Z=O(V);{var X=I=>{cd(I,{size:16})},re=I=>{var z=Q(),ie=O(z);{var Pe=R=>{ed(R,{size:16})};T(ie,R=>{f(E)==="cloud"&&R(Pe)},!0)}h(I,z)};T(Z,I=>{f(E)==="moon"?I(X):I(re,!1)},!0)}h(F,V)};T(N,F=>{f(E)==="sun"?F(C):F(M,!1)})}L((F,V)=>{be(P,1,`btn btn-sm ${F??""}`),q(k,V)},[()=>l(E),()=>c(E)]),h(y,P)});var b=d(x,2);b.__click=[sh,v],h(e,m),K()}ot(["click"]);const Tn=e=>{var t=ch(),r=u(t);ia(r,{class:"h-4 w-4 text-amber-600"}),h(e,t)};function lh(){}var ch=S('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),uh=()=>D.clearFilters(),dh=e=>D.setSearchQuery(e.currentTarget.value),fh=()=>D.setGroupBy("none"),vh=()=>D.setGroupBy("store"),hh=()=>D.setGroupBy("productType"),ph=(e,t)=>D.toggleProductType(t),_h=S("<button><!> </button>"),mh=()=>D.toggleTemperature("frais"),gh=()=>D.toggleTemperature("surgele"),bh=()=>D.clearTypeAndTemperatureFilters(),yh=S('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),wh=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),Sh=(e,t)=>D.toggleStore(t),xh=S("<button><!> </button>"),Ph=()=>D.clearStoreFilters(),$h=S('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Eh=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),kh=(e,t)=>D.toggleWho(t),Ah=S("<button><!> </button>"),Th=()=>D.clearWhoFilters(),Nh=S('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Ch=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Ih=()=>D.handleSort("productName"),Mh=()=>D.handleSort("store"),Dh=()=>D.handleSort("who"),Rh=()=>D.handleSort("productType"),Oh=S('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),qh=(e,t,r)=>t("store",r().map(n=>n.$id),r()),jh=(e,t,r)=>t("who",r().map(n=>n.$id),r()),Bh=(e,t,r)=>t(r()),Lh=S(`<button class="btn btn-sm btn-success btn-soft" title="Ouvrir le modal d'achat groupé"><!> Achat groupé <!></button>`),zh=S('<tr class="bg-base-200 sticky top-11 z-10 font-semibold"><td colspan="7" class="py-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!></div> <div class="flex items-center gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> Magasin <!></button> <button class="btn btn-sm btn-info btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> Volontaires <!></button> <!></div></div></td></tr>'),Vh=(e,t,r)=>t(s(r).$id,"recettes"),Uh=S('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),Wh=S('<div class="text-base-content/60 text-xs"> </div>'),Gh=S('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Qh=S('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Hh=(e,t,r)=>t(s(r).$id,"magasins"),Kh=S('<div class="tooltip tooltip-info"><div class="text-center"> </div></div>'),Jh=S('<div class="text-center"> </div>'),Yh=(e,t,r)=>t(s(r).$id,"volontaires"),Zh=S('<span class="badge badge-soft badge-info badge-sm"> </span>'),Xh=S('<div class="flex flex-wrap justify-center gap-2 pr-8"></div>'),Fh=(e,t,r)=>t(s(r).$id,"recettes"),ep=S('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),tp=(e,t,r)=>t(s(r).$id,"achats"),rp=S("<div><!> <span> </span></div>"),np=S('<span class="text-center">-</span>'),ap=(e,t,r)=>t(s(r)),sp=S('<div class="flex items-center justify-center gap-2"><div class="bg-warning m-auto rounded px-2 py-1"> <button class="btn btn-xs btn-ghost text-base-content/70 btn-circle btn-outline hover:btn-success hover:text-success-content ms-3 transition-all hover:scale-105" title="Déclarer comme acheté"><!></button></div></div>'),op=S('<tr><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><!> <div><div class="font-medium"> </div> <!></div></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-2 text-center text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap justify-center gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),ip=S("<!> <!>",1),lp=S('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),cp=S('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><!> <div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!> <!> <!> <!>',1);function up(e,t){H(t,!0);const r={Package:Wn,MessageCircleQuestionMark:ld,ShoppingCart:hr,Clock:Fu,CircleCheck:Yu,CircleX:Zu,ClipboardCheck:Xu,PackageCheck:ud},n=G(()=>D.groupedFilteredProducts),a=G(()=>D.stats),o=G(()=>D.uniqueStores),i=G(()=>D.uniqueWho),l=G(()=>D.uniqueProductTypes),c=G(()=>D.filters);let f=U(null),v=U("recettes"),m=U(!1),p=U(!1),_=U(Ce([])),g=U(Ce([])),x=U(!1),b=U(Ce([]));function y(B,W="recettes"){w(v,W,!0),w(f,B,!0)}function E(){w(f,null)}function P(B,W,Ye){w(_,W,!0),w(g,Ye,!0),w(B==="who"?m:p,!0)}function $(B){(!B||B==="who")&&w(m,!1),(!B||B==="store")&&w(p,!1),w(_,[],!0),w(g,[],!0)}function k(B){console.log(`[ProductsTable] Modification groupée réussie: ${B.updatedCount} produits`)}function N(B){const W=B.filter(Ye=>Ye.displayMissingQuantity!=="✅ Complet"&&Ye.missingQuantityArray&&Ye.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${B.length} produits reçus → ${W.length} produits avec quantités manquantes`),w(b,W,!0),w(x,!0)}function C(){w(x,!1),w(b,[],!0)}function M(){console.log("[ProductsTable] Achat groupé créé avec succès"),C()}async function F(B){try{if(!D.currentMainId)throw new Error("mainId non disponible");const W=B.missingQuantityArray||[];if(W.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let Ye=B.$id;B.isSynced||(console.log(`[ProductsTable] Produit ${B.$id} local, création pour validation rapide...`),Ye=(await ur(B.$id,{},Xe=>D.getEnrichedProductById(Xe))).$id,console.log(`[ProductsTable] Produit sync créé: ${Ye}`)),await Bi(D.currentMainId,Ye,W,{store:B.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${B.productName}`)}catch(W){console.error("[ProductsTable] Erreur validation rapide:",W),alert("Erreur lors de la validation rapide: "+W.message)}}var V=cp(),Z=O(V),X=u(Z),re=u(X),I=u(re);so(I,{class:"mr-1 h-4 w-4"});var z=d(I),ie=d(re,2);ie.__click=[lh];var Pe=u(ie);vd(Pe,{class:"mr-1 h-4 w-4"});var R=d(X,2),ae=u(R),Ee=u(ae),Ne=u(Ee),Te=u(Ne);ts(Te,{class:"h-5 w-5"});var Re=d(Ne,2);Re.__click=[uh];var Qe=u(Re);ft(Qe,{class:"h-4 w-4"});var he=d(ae,2),me=u(he),j=d(u(me),2),ee=u(j);md(ee,{class:"h-4 w-4"});var $e=d(ee,2);$e.__input=[dh];var pe=d(me,2),we=d(u(pe),2),Ue=u(we);Ue.__change=[fh];var He=d(Ue,2);He.__change=[vh];var ue=d(He,2);ue.__change=[hh];var ke=d(he,2),ht=u(ke);ih(ht,{get availableDates(){return D.availableDates},get currentRange(){return D.dateRange},onRangeChange:(B,W)=>D.setDateRange(B,W)});var St=d(ht,2),se=u(St);{var J=B=>{var W=wh(),Ye=u(W),Ct=d(u(Ye),2),Xe=u(Ct);rt(Xe,16,()=>s(l),nt=>nt,(nt,it)=>{const Et=G(()=>na(it));var Bt=_h();Bt.__click=[ph,it];var $r=u(Bt);Nr($r,()=>s(Et).icon,(Yt,Jr)=>{Jr(Yt,{class:"mr-1 h-5 w-5"})});var Er=d($r);L(Yt=>{be(Bt,1,`btn btn-sm ${Yt??""}`),q(Er,` ${s(Et).displayName??""}`)},[()=>s(c).selectedProductTypes.length===0?"btn-soft btn-accent":s(c).selectedProductTypes.includes(it)?"btn-accent":"btn-dash btn-accent"]),h(nt,Bt)});var It=d(Xe,2);It.__click=[mh];var lr=u(It);rs(lr,{class:"h-5 w-5"});var ze=d(It,2);ze.__click=[gh];var Fe=u(ze);ns(Fe,{class:"h-5 w-5"});var je=d(ze,2);{var ge=nt=>{var it=yh();it.__click=[bh];var Et=u(it);ft(Et,{class:"h-3 w-3"}),h(nt,it)};T(je,nt=>{(s(c).selectedProductTypes.length>0||s(c).selectedTemperatures.length>0)&&nt(ge)})}L((nt,it)=>{be(It,1,`btn btn-sm ms-4 ${nt??""}`),be(ze,1,`btn btn-sm ${it??""}`)},[()=>s(c).selectedTemperatures.length===0?"btn-soft btn-success":s(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(c).selectedTemperatures.length===0?"btn-soft btn-info":s(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(B,W)};T(se,B=>{s(l).length>0&&B(J)})}var ve=d(St,2),Be=u(ve);{var ut=B=>{var W=Eh(),Ye=u(W),Ct=d(u(Ye),2),Xe=u(Ct);rt(Xe,16,()=>s(o),ze=>ze,(ze,Fe)=>{var je=xh();je.__click=[Sh,Fe];var ge=u(je);pr(ge,{class:"mr-1 h-3 w-3"});var nt=d(ge);L(it=>{be(je,1,`btn btn-xs ${it??""}`),q(nt,` ${Fe??""}`)},[()=>s(c).selectedStores.length===0?"btn-soft btn-accent":s(c).selectedStores.includes(Fe)?"btn-accent":"btn-dash btn-accent"]),h(ze,je)});var It=d(Xe,2);{var lr=ze=>{var Fe=$h();Fe.__click=[Ph];var je=u(Fe);ft(je,{class:"h-3 w-3"}),h(ze,Fe)};T(It,ze=>{s(c).selectedStores.length>0&&ze(lr)})}h(B,W)};T(Be,B=>{s(o).length>0&&B(ut)})}var fe=d(Be,2);{var Me=B=>{var W=Ch(),Ye=u(W),Ct=d(u(Ye),2),Xe=u(Ct);rt(Xe,16,()=>s(i),ze=>ze,(ze,Fe)=>{var je=Ah();je.__click=[kh,Fe];var ge=u(je);Gn(ge,{class:"mr-1 h-3 w-3"});var nt=d(ge);L(it=>{be(je,1,`btn btn-xs ${it??""}`),q(nt,` ${Fe??""}`)},[()=>s(c).selectedWho.length===0?" btn-soft btn-info":s(c).selectedWho.includes(Fe)?" btn-info":"btn-dash btn-info"]),h(ze,je)});var It=d(Xe,2);{var lr=ze=>{var Fe=Nh();Fe.__click=[Th];var je=u(Fe);ft(je,{class:"h-3 w-3"}),h(ze,Fe)};T(It,ze=>{s(c).selectedWho.length>0&&ze(lr)})}h(B,W)};T(fe,B=>{s(i).length>0&&B(Me)})}var Ke=d(R,2),Ot=u(Ke),ar=u(Ot),br=u(ar),Y=u(br);Y.__click=[Ih];var _e=u(Y),Ae=u(_e);so(Ae,{class:"h-4 w-4"});var Je=d(Ae,2);{var Le=B=>{var W=lt();L(()=>q(W,s(c).sortDirection==="asc"?"↑":"↓")),h(B,W)};T(Je,B=>{s(c).sortColumn==="productName"&&B(Le)})}var Ze=d(Y);Ze.__click=[Mh];var gt=u(Ze),xt=u(gt);pr(xt,{class:"h-4 w-4"});var Pt=d(xt,2);{var tt=B=>{var W=lt();L(()=>q(W,s(c).sortDirection==="asc"?"↑":"↓")),h(B,W)};T(Pt,B=>{s(c).sortColumn==="store"&&B(tt)})}var We=d(Ze);We.__click=[Dh];var qt=u(We),Ht=u(qt);as(Ht,{class:"h-4 w-4"});var sr=d(Ht,2);{var jt=B=>{var W=lt();L(()=>q(W,s(c).sortDirection==="asc"?"↑":"↓")),h(B,W)};T(sr,B=>{s(c).sortColumn==="who"&&B(jt)})}var Kt=d(We);Kt.__click=[Rh];var Wr=u(Kt),yr=d(u(Wr));{var wr=B=>{var W=lt();L(()=>q(W,s(c).sortDirection==="asc"?"↑":"↓")),h(B,W)};T(yr,B=>{s(c).sortColumn==="productType"&&B(wr)})}var or=d(Kt,2),Sr=u(or),ir=u(Sr);hr(ir,{class:"h-4 w-4"});var Gr=d(or),xr=u(Gr),Qr=u(xr);sd(Qr,{class:"h-4 w-4"});var _n=d(ar);rt(_n,21,()=>Object.entries(s(n)),([B,W])=>B,(B,W)=>{var Ye=G(()=>_o(s(W),2));let Ct=()=>s(Ye)[0],Xe=()=>s(Ye)[1];var It=ip(),lr=O(It);{var ze=je=>{const ge=G(()=>na(Ct()));var nt=zh(),it=u(nt),Et=u(it),Bt=u(Et),$r=u(Bt);{var Er=kt=>{var pt=lt();L(()=>q(pt,`🏪 ${Ct()??""} (${Xe().length??""})`)),h(kt,pt)},Yt=kt=>{var pt=Q(),Zr=O(pt);{var Sn=cr=>{var Lt=Oh(),xn=u(Lt);Nr(xn,()=>s(ge).icon,(Jn,Ia)=>{Ia(Jn,{class:"h-4 w-4"})});var Kn=d(xn,2),Na=u(Kn),Ca=d(Kn,2),Pn=u(Ca);L(()=>{q(Na,s(ge).displayName),q(Pn,`(${Xe().length??""})`)}),h(cr,Lt)},Ta=cr=>{var Lt=lt();L(()=>q(Lt,`📦 ${Ct()??""} (${Xe().length??""})`)),h(cr,Lt)};T(Zr,cr=>{s(c).groupBy==="productType"?cr(Sn):cr(Ta,!1)},!0)}h(kt,pt)};T($r,kt=>{s(c).groupBy==="store"?kt(Er):kt(Yt,!1)})}var Jr=d(Bt,2),Yr=u(Jr);Yr.__click=[qh,P,Xe];var bn=u(Yr);pr(bn,{size:16});var $a=d(bn,2);ia($a,{size:16});var yn=d(Yr,2);yn.__click=[jh,P,Xe];var wn=u(yn);as(wn,{size:16});var Ea=d(wn,2);ia(Ea,{size:16});var ka=d(yn,2);{var Aa=kt=>{var pt=Lh();pt.__click=[Bh,N,Xe];var Zr=u(pt);hr(Zr,{size:16});var Sn=d(Zr,2);ao(Sn,{size:16}),h(kt,pt)};T(ka,kt=>{Xe().some(pt=>pt.displayMissingQuantity!=="✅ Complet")&&kt(Aa)})}h(je,nt)};T(lr,je=>{Ct()!==""&&je(ze)})}var Fe=d(lr,2);rt(Fe,17,()=>wd(Xe(),s(c)),je=>je.$id,(je,ge,nt,it)=>{const Et=G(()=>D.productsStatsByDateRange.get(s(ge).$id)||{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0}),Bt=G(()=>na(s(ge).productType)),$r=G(()=>Sd(s(ge).purchases||[]));var Er=op(),Yt=u(Er);Yt.__click=[Vh,y,ge];var Jr=u(Yt),Yr=u(Jr),bn=u(Yr);{var $a=de=>{var Se=Uh(),Ve=u(Se);od(Ve,{class:"h-4 w-4 animate-spin"}),h(de,Se)};T(bn,de=>{s(ge).status==="isSyncing"&&de($a)})}var yn=d(bn,2),wn=u(yn),Ea=u(wn),ka=d(wn,2);{var Aa=de=>{var Se=Wh(),Ve=u(Se);L(()=>q(Ve,`Ancien: ${s(ge).previousNames[0]??""}`)),h(de,Se)};T(ka,de=>{s(ge).previousNames&&s(ge).previousNames.length>0&&de(Aa)})}var kt=d(Yr,2),pt=u(kt);{var Zr=de=>{var Se=Gh(),Ve=u(Se);rs(Ve,{class:"text-success h-4 w-4"}),h(de,Se)};T(pt,de=>{s(ge).pFrais&&de(Zr)})}var Sn=d(pt,2);{var Ta=de=>{var Se=Qh(),Ve=u(Se);ns(Ve,{class:"text-info h-4 w-4"}),h(de,Se)};T(Sn,de=>{s(ge).pSurgel&&de(Ta)})}var cr=d(Jr,2);Tn(cr);var Lt=d(Yt);Lt.__click=[Hh,y,ge];var xn=u(Lt);{var Kn=de=>{var Se=Kh(),Ve=u(Se),bt=u(Ve);L(()=>{Or(Se,"data-tip",s(ge).storeInfo?.storeComment),q(bt,s(ge).storeInfo?.storeName||"-")}),h(de,Se)},Na=de=>{var Se=Jh(),Ve=u(Se);L(()=>q(Ve,s(ge).storeInfo?.storeName||"-")),h(de,Se)};T(xn,de=>{s(ge).storeInfo?.storeComment?de(Kn):de(Na,!1)})}var Ca=d(xn,2);Tn(Ca);var Pn=d(Lt);Pn.__click=[Yh,y,ge];var Jn=u(Pn);{var Ia=de=>{var Se=Xh();rt(Se,20,()=>s(ge).who,Ve=>Ve,(Ve,bt)=>{var zt=Zh(),kr=u(zt);L(()=>q(kr,bt)),h(Ve,zt)}),h(de,Se)};T(Jn,de=>{s(ge).who&&s(ge).who.length>0&&de(Ia)})}var Vi=d(Jn,2);Tn(Vi);var Ma=d(Pn),Ui=u(Ma),ys=u(Ui);Nr(ys,()=>s(Bt).icon,(de,Se)=>{Se(de,{class:"h-3 w-3"})});var Wi=d(ys),Da=d(Ma);Da.__click=[Fh,y,ge];var ws=u(Da),Gi=u(ws),Ss=d(ws,2);{var Qi=de=>{var Se=ep(),Ve=u(Se),bt=u(Ve),zt=d(bt);gs(zt,{class:"h-3 w-3"});var kr=d(Ve,2),Yn=u(kr),$n=d(Yn);bd($n,{class:"h-3 w-3"}),L(()=>{q(bt,`${s(Et).nbRecipes??""} `),q(Yn,`${s(Et).totalAssiettes??""} `)}),h(de,Se)};T(Ss,de=>{(s(Et).nbRecipes||s(Et).totalAssiettes)&&de(Qi)})}var Hi=d(Ss,2);Tn(Hi);var Ra=d(Da);Ra.__click=[tp,y,ge];var xs=u(Ra),Ps=u(xs);rt(Ps,17,()=>s($r),de=>de.status,(de,Se)=>{const Ve=G(()=>r[s(Se).icon]);var bt=rp(),zt=u(bt);Nr(zt,()=>s(Ve),($n,tl)=>{tl($n,{class:"h-4 w-4"})});var kr=d(zt,2),Yn=u(kr);L($n=>{be(bt,1,`badge badge-soft flex items-center gap-2 ${s(Se).badgeClass??""}`),q(Yn,$n)},[()=>wa(s(Se).quantity,s(Se).unit)]),h(de,bt)});var Ki=d(Ps,2);{var Ji=de=>{var Se=np();h(de,Se)};T(Ki,de=>{s($r).length===0&&de(Ji)})}var Yi=d(xs,2);Tn(Yi);var Zi=d(Ra),Xi=u(Zi);{var Fi=de=>{var Se=sp(),Ve=u(Se),bt=u(Ve),zt=d(bt);zt.__click=[ap,F,ge];var kr=u(zt);dn(kr,{size:16}),L(()=>q(bt,`${s(ge).displayMissingQuantity??""} `)),h(de,Se)},el=de=>{ao(de,{size:28,strokeWidth:3,class:"text-success m-auto"})};T(Xi,de=>{s(ge).displayMissingQuantity!=="✅ Complet"?de(Fi):de(el,!1)})}L(()=>{be(Er,1,`hover:bg-base-200/20 transition-colors ${s(ge).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-400 bg-blue-50/40":""}`),q(Ea,s(ge).productName),be(Lt,1,`${s(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),be(Ma,1,ri(s(c).groupBy==="productType"?"hidden":"")),q(Wi,` ${s(Bt).displayName??""}`),q(Gi,s(Et).formattedQuantities)}),h(je,Er)}),h(B,It)});var Hr=d(Ot,2);{var $t=B=>{var W=lp();h(B,W)};T(Hr,B=>{Object.values(s(n)).flat().length===0&&B($t)})}var Jt=d(Z,2);{var mn=B=>{Ff(B,{get productId(){return s(f)},get initialTab(){return s(v)},onClose:E})};T(Jt,B=>{s(f)&&B(mn)})}var Kr=d(Jt,2);{var gn=B=>{lv(B,{get productIds(){return s(_)},get products(){return s(g)},onClose:()=>$("who"),onSuccess:k})};T(Kr,B=>{s(m)&&B(gn)})}var Pr=d(Kr,2);{var xa=B=>{_v(B,{get productIds(){return s(_)},get products(){return s(g)},onClose:()=>$("store"),onSuccess:k})};T(Pr,B=>{s(p)&&B(xa)})}var Qn=d(Pr,2);{var Pa=B=>{jv(B,{get products(){return s(b)},onClose:C,onSuccess:M})};T(Qn,B=>{s(x)&&B(Pa)})}var Hn=d(Qn,2);rh(Hn,{}),L(()=>{q(z,` ${s(a).total??""}`),Ic($e,s(c).searchQuery),rn(Ue,s(c).groupBy==="none"),rn(He,s(c).groupBy==="store"),rn(ue,s(c).groupBy==="productType"),be(Ze,1,`hover:bg-base-100 cursor-pointer text-center ${s(c).groupBy==="store"?"hidden":""}`),be(Kt,1,`hover:bg-base-100 cursor-pointer text-center ${s(c).groupBy==="productType"?"hidden":""}`)}),h(e,V),K()}ot(["click","input","change"]);ql();var dp=S('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function fp(e){var t=dp();h(e,t)}var vp=S('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function hp(e,t){var r=vp(),n=d(u(r),2),a=d(u(n),2),o=u(a);L(()=>q(o,t.message)),h(e,r)}var pp=S('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function _p(e,t){var r=pp(),n=u(r),a=u(n);ya(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(u(o),2),l=u(i);L(()=>q(l,t.message||"Erreur inconnue")),h(e,r)}var mp=S('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),gp=S('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),bp=S('<div class="text-base-content/60"> </div>'),yp=S('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),wp=S('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),Sp=S('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),xp=S('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function Pp(e,t){H(t,!0);let r,n=U(null),a=U(!0),o=U(!1);li(async()=>{r=zu();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await D.initialize(r)}catch(R){const ae=R instanceof Error?R.message:"Erreur lors de l'initialisation";w(n,ae,!0),console.error("[App] Erreur initialisation:",R)}finally{w(a,!1)}}),Bc(()=>{D.destroy()});async function i(){if(!(!r||s(o))){w(o,!0);try{await D.forceReload(r)}catch(R){console.error("[App] Erreur lors du rechargement forcé:",R)}finally{w(o,!1)}}}const l=G(()=>s(n)||D.error),c=G(()=>s(a)||D.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=xp(),m=u(v),p=u(m),_=u(p),g=d(u(_),2),x=u(g);{var b=R=>{var ae=mp();h(R,ae)};T(x,R=>{D.realtimeConnected&&R(b)})}var y=d(x,2);{var E=R=>{var ae=gp();h(R,ae)};T(y,R=>{D.syncing&&R(E)})}var P=d(y,2);{var $=R=>{var ae=bp(),Ee=u(ae);L(Ne=>q(Ee,`Maj: ${Ne??""}`),[()=>new Date(D.lastSync).toLocaleTimeString()]),h(R,ae)};T(P,R=>{D.lastSync&&R($)})}var k=d(P,2);{var N=R=>{var ae=yp();let Ee;ae.__click=i;var Ne=u(ae);hd(Ne,{class:"h-4 w-4"}),L(Te=>{Ee=be(ae,1,"btn btn-outline btn-sm",null,Ee,Te),ae.disabled=s(o)||D.loading},[()=>({loading:s(o)||D.loading})]),h(R,ae)};T(k,R=>{s(n)||R(N)})}var C=d(k,2);{var M=R=>{var ae=wp(),Ee=u(ae),Ne=u(Ee);id(Ne,{class:"mr-2 h-4 w-4"}),L(()=>Or(Ee,"href",f)),h(R,ae)};T(C,R=>{s(n)&&R(M)})}var F=d(m,2),V=u(F);{var Z=R=>{_p(R,{get message(){return s(l)}})},X=R=>{var ae=Q(),Ee=O(ae);{var Ne=Te=>{hp(Te,{get message(){return s(l)}})};T(Ee,Te=>{s(l)&&Te(Ne)},!0)}h(R,ae)};T(V,R=>{s(n)?R(Z):R(X,!1)})}var re=d(V,2);{var I=R=>{fp(R)};T(re,R=>{s(c)&&R(I)})}var z=d(re,2);{var ie=R=>{up(R,{})},Pe=R=>{var ae=Q(),Ee=O(ae);{var Ne=Te=>{var Re=Sp();h(Te,Re)};T(Ee,Te=>{!D.loading&&!s(n)&&Te(Ne)},!0)}h(R,ae)};T(z,R=>{D.enrichedProducts.length>0?R(ie):R(Pe,!1)})}h(e,v),K()}ot(["click"]);wc(Pp,{target:document.getElementById("app_products")});
