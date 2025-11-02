(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const ka=!1;var Tn=Array.isArray,_o=Array.prototype.indexOf,Ss=Array.from,ss=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,mo=Object.getOwnPropertyDescriptors,go=Object.prototype,bo=Array.prototype,Ta=Object.getPrototypeOf,Gs=Object.isExtensible;function Hr(e){return typeof e=="function"}const J=()=>{};function yo(e){for(var t=0;t<e.length;t++)e[t]()}function Aa(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function Da(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const tt=2,$s=4,Ps=8,hr=16,Vt=32,pr=64,Es=128,gt=256,En=512,Qe=1024,lt=2048,rr=4096,$t=8192,_r=16384,xs=32768,mr=65536,Hs=1<<17,wo=1<<18,Br=1<<19,So=1<<20,as=1<<21,An=1<<22,ur=1<<23,dr=Symbol("$state"),Ia=Symbol("legacy props"),$o=Symbol(""),tn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Ma(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Po(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Eo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function xo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function No(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ko(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function To(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ao(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Do(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Io(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Mo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Dn=1,In=2,Ca=4,Co=8,Ro=16,Oo=1,qo=2,Bo=4,Lo=8,jo=16,zo=1,Vo=2,Ce=Symbol(),Wo="http://www.w3.org/1999/xhtml",Uo="http://www.w3.org/2000/svg",Go="@attach";function Ho(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Qo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Ko=!1;function Ra(e){return e===this.v}function Oa(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Yo(e,t){return e!==t}function qa(e){return!Oa(e,this.v)}let Lr=!1,Zo=!1;function Jo(){Lr=!0}let ke=null;function Ir(e){ke=e}function L(e,t=!1,r){ke={p:ke,c:null,e:null,s:e,x:null,l:Lr&&!t?{s:null,u:null,$:[]}:null}}function j(e){var t=ke,r=t.e;if(r!==null){t.e=null;for(var n of r)Fa(n)}return ke=t.p,{}}function jr(){return!Lr||ke!==null&&ke.l===null}let cr=[];function Ba(){var e=cr;cr=[],yo(e)}function fr(e){if(cr.length===0&&!rn){var t=cr;queueMicrotask(()=>{t===cr&&Ba()})}cr.push(e)}function Xo(){for(;cr.length>0;)Ba()}const Fo=new WeakMap;function La(e){var t=re;if(t===null)return ae.f|=ur,e;if((t.f&xs)===0){if((t.f&Es)===0)throw!t.parent&&e instanceof Error&&ja(e),e;t.b.error(e)}else Mr(e,t)}function Mr(e,t){for(;t!==null;){if((t.f&Es)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&ja(e),e}function ja(e){const t=Fo.get(e);t&&(ss(e,"message",{value:t.message}),ss(e,"stack",{value:t.stack}))}const yn=new Set;let be=null,Sn=null,is=new Set,Dt=[],Mn=null,os=!1,rn=!1;class _t{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#o=[];#a=[];#i=[];#n=[];#s=[];#d=[];skipped_effects=new Set;process(t){Dt=[],Sn=null;var r=_t.apply(this);for(const i of t)this.#f(i);if(this.#c===0){this.#v();var n=this.#a,s=this.#i;this.#a=[],this.#i=[],this.#n=[],Sn=this,be=null,Qs(n),Qs(s),Sn=null,this.#u?.resolve()}else this.#l(this.#a),this.#l(this.#i),this.#l(this.#n);r();for(const i of this.#o)on(i);this.#o=[]}#f(t){t.f^=Qe;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Vt|pr))!==0,i=s&&(n&Qe)!==0,o=i||(n&$t)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=Qe:(n&$s)!==0?this.#i.push(r):(n&Qe)===0&&((n&An)!==0&&r.b?.is_pending()?this.#o.push(r):Bn(r)&&((r.f&hr)!==0&&this.#n.push(r),on(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#l(t){for(const r of t)((r.f&lt)!==0?this.#s:this.#d).push(r),Je(r,Qe);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){be=this}deactivate(){be=null}flush(){if(Dt.length>0){if(this.activate(),za(),be!==null&&be!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of is)if(is.delete(t),t(),be!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),yn.size>1){this.#e.clear();let t=!0;for(const r of yn){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;Va(n)}if(Dt.length>0){be=r;const n=_t.apply(r);for(const s of Dt)r.#f(s);Dt=[],n()}}be=null}yn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#s)Je(t,lt),vr(t);for(const t of this.#d)Je(t,rr),vr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=Aa()).promise}static ensure(){if(be===null){const t=be=new _t;yn.add(be),rn||_t.enqueue(()=>{be===t&&t.flush()})}return be}static enqueue(t){fr(t)}static apply(t){return J}}function el(e){var t=rn;rn=!0;try{for(var r;;){if(Xo(),Dt.length===0&&(be?.flush(),Dt.length===0))return Mn=null,r;za()}}finally{rn=t}}function za(){var e=Ar;os=!0;try{var t=0;for(Js(!0);Dt.length>0;){var r=_t.ensure();if(t++>1e3){var n,s;tl()}r.process(Dt),Ft.clear()}}finally{os=!1,Js(e),Mn=null}}function tl(){try{ko()}catch(e){Mr(e,Mn)}}let lr=null;function Qs(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(_r|$t))===0&&Bn(n)&&(lr=[],on(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?ri(n):n.fn=null),lr?.length>0)){Ft.clear();for(const s of lr)on(s);lr=[]}}lr=null}}function Va(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&tt)!==0?Va(t):(r&(An|hr))!==0&&(Je(t,lt),vr(t))}}function vr(e){for(var t=Mn=e;t.parent!==null;){t=t.parent;var r=t.f;if(os&&t===re&&(r&hr)!==0)return;if((r&(pr|Vt))!==0){if((r&Qe)===0)return;t.f^=Qe}}Dt.push(t)}function Wa(e){let t=0,r=er(0),n;return()=>{ml()&&(a(r),Is(()=>(t===0&&(n=zr(()=>e(()=>It(r)))),t+=1,()=>{fr(()=>{t-=1,t===0&&(n?.(),n=void 0,It(r))})})))}}var rl=mr|Br|Es;function nl(e,t,r){new sl(e,t,r)}class sl{parent;#e=!1;#r;#c=null;#u;#o;#a;#i=null;#n=null;#s=null;#d=null;#f=0;#l=0;#v=!1;#h=null;#p=()=>{this.#h&&Cr(this.#h,this.#f)};#P=Wa(()=>(this.#h=er(this.#f),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#o=n,this.parent=re.b,this.#e=!!this.#u.pending,this.#a=Gt(()=>{re.b=this;{try{this.#i=Ve(()=>n(this.#r))}catch(s){this.error(s)}this.#l>0?this.#b():this.#e=!1}},rl)}#t(){try{this.#i=Ve(()=>this.#o(this.#r))}catch(t){this.error(t)}this.#e=!1}#E(){const t=this.#u.pending;t&&(this.#n=Ve(()=>t(this.#r)),_t.enqueue(()=>{this.#i=this.#g(()=>(_t.ensure(),Ve(()=>this.#o(this.#r)))),this.#l>0?this.#b():(Lt(this.#n,()=>{this.#n=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#g(t){var r=re,n=ae,s=ke;Mt(this.#a),et(this.#a),Ir(this.#a.ctx);try{return t()}catch(i){return La(i),null}finally{Mt(r),et(n),Ir(s)}}#b(){const t=this.#u.pending;this.#i!==null&&(this.#d=document.createDocumentFragment(),al(this.#i,this.#d)),this.#n===null&&(this.#n=Ve(()=>t(this.#r)))}#y(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#y(t);return}this.#l+=t,this.#l===0&&(this.#e=!1,this.#n&&Lt(this.#n,()=>{this.#n=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),fr(()=>{_t.ensure().flush()}))}update_pending_count(t){this.#y(t),this.#f+=t,is.add(this.#p)}get_effect_pending(){return this.#P(),a(this.#h)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#i&&(We(this.#i),this.#i=null),this.#n&&(We(this.#n),this.#n=null),this.#s&&(We(this.#s),this.#s=null);var s=!1,i=!1;const o=()=>{if(s){Qo();return}s=!0,i&&Mo(),_t.ensure(),this.#f=0,this.#s!==null&&Lt(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#i=this.#g(()=>(this.#v=!1,Ve(()=>this.#o(this.#r)))),this.#l>0?this.#b():this.#e=!1};var l=ae;try{et(null),i=!0,r?.(t,o),i=!1}catch(c){Mr(c,this.#a&&this.#a.parent)}finally{et(l)}n&&fr(()=>{this.#s=this.#g(()=>{this.#v=!0;try{return Ve(()=>{n(this.#r,()=>t,()=>o)})}catch(c){return Mr(c,this.#a.parent),null}finally{this.#v=!1}})})}}function al(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:hn(r);t.append(r),r=s}}function Ua(e,t,r){const n=jr()?Cn:Ns;if(t.length===0){r(e.map(n));return}var s=be,i=re,o=il();Promise.all(t.map(l=>ol(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(c){(i.f&_r)===0&&Mr(c,i)}s?.deactivate(),Ga()}).catch(l=>{Mr(l,i)})}function il(){var e=re,t=ae,r=ke,n=be;return function(){Mt(e),et(t),Ir(r),n?.activate()}}function Ga(){Mt(null),et(null),Ir(null)}function Cn(e){var t=tt|lt,r=ae!==null&&(ae.f&tt)!==0?ae:null;return re===null||r!==null&&(r.f&gt)!==0?t|=gt:re.f|=Br,{ctx:ke,deps:null,effects:null,equals:Ra,f:t,fn:e,reactions:null,rv:0,v:Ce,wv:0,parent:r??re,ac:null}}function ol(e,t){let r=re;r===null&&Po();var n=r.b,s=void 0,i=er(Ce),o=!ae,l=new Map;return bl(()=>{var c=Aa();s=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(g){c.reject(g)}var f=be,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(tn),l.set(f,c)));const _=(g,p=void 0)=>{v||f.activate(),p?p!==tn&&(i.f|=ur,Cr(i,p)):((i.f&ur)!==0&&(i.f^=ur),Cr(i,g)),o&&(n.update_pending_count(-1),v||f.decrement()),Ga()};c.promise.then(_,g=>_(null,g||"unknown"))}),Xa(()=>{for(const c of l.values())c.reject(tn)}),new Promise(c=>{function f(v){function _(){v===s?c(i):f(s)}v.then(_,_)}f(s)})}function Q(e){const t=Cn(e);return ai(t),t}function Ns(e){const t=Cn(e);return t.equals=qa,t}function Ha(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)We(t[r])}}function ll(e){for(var t=e.parent;t!==null;){if((t.f&tt)===0)return t;t=t.parent}return null}function ks(e){var t,r=re;Mt(ll(e));try{Ha(e),t=ci(e)}finally{Mt(r)}return t}function Qa(e){var t=ks(e);if(e.equals(t)||(e.v=t,e.wv=oi()),!gr){var r=(Jt||(e.f&gt)!==0)&&e.deps!==null?rr:Qe;Je(e,r)}}const Ft=new Map;function er(e,t){var r={f:0,v:e,reactions:null,equals:Ra,rv:0,wv:0};return r}function Z(e,t){const r=er(e);return ai(r),r}function cl(e,t=!1,r=!0){const n=er(e);return t||(n.equals=qa),Lr&&r&&ke!==null&&ke.l!==null&&(ke.l.s??=[]).push(n),n}function T(e,t,r=!1){ae!==null&&(!St||(ae.f&Hs)!==0)&&jr()&&(ae.f&(tt|hr|An|Hs))!==0&&!jt?.includes(e)&&Io();let n=r?Fe(t):t;return Cr(e,n)}function Cr(e,t){if(!e.equals(t)){var r=e.v;gr?Ft.set(e,t):Ft.set(e,r),e.v=t;var n=_t.ensure();n.capture(e,r),(e.f&tt)!==0&&((e.f&lt)!==0&&ks(e),Je(e,(e.f&gt)===0?Qe:rr)),e.wv=oi(),Ka(e,lt),jr()&&re!==null&&(re.f&Qe)!==0&&(re.f&(Vt|pr))===0&&(pt===null?Sl([e]):pt.push(e))}return t}function It(e){T(e,e.v+1)}function Ka(e,t){var r=e.reactions;if(r!==null)for(var n=jr(),s=r.length,i=0;i<s;i++){var o=r[i],l=o.f;if(!(!n&&o===re)){var c=(l&lt)===0;c&&Je(o,t),(l&tt)!==0?Ka(o,rr):c&&((l&hr)!==0&&lr!==null&&lr.push(o),vr(o))}}}function Fe(e){if(typeof e!="object"||e===null||dr in e)return e;const t=Ta(e);if(t!==go&&t!==bo)return e;var r=new Map,n=Tn(e),s=Z(0),i=zt,o=l=>{if(zt===i)return l();var c=ae,f=zt;et(null),Fs(i);var v=l();return et(c),Fs(f),v};return n&&r.set("length",Z(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Ao();var v=r.get(c);return v===void 0?v=o(()=>{var _=Z(f.value);return r.set(c,_),_}):T(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=o(()=>Z(Ce));r.set(c,v),It(s)}}else T(f,Ce),It(s);return!0},get(l,c,f){if(c===dr)return e;var v=r.get(c),_=c in l;if(v===void 0&&(!_||Xt(l,c)?.writable)&&(v=o(()=>{var p=Fe(_?l[c]:Ce),m=Z(p);return m}),r.set(c,v)),v!==void 0){var g=a(v);return g===Ce?void 0:g}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=a(v))}else if(f===void 0){var _=r.get(c),g=_?.v;if(_!==void 0&&g!==Ce)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return f},has(l,c){if(c===dr)return!0;var f=r.get(c),v=f!==void 0&&f.v!==Ce||Reflect.has(l,c);if(f!==void 0||re!==null&&(!v||Xt(l,c)?.writable)){f===void 0&&(f=o(()=>{var g=v?Fe(l[c]):Ce,p=Z(g);return p}),r.set(c,f));var _=a(f);if(_===Ce)return!1}return v},set(l,c,f,v){var _=r.get(c),g=c in l;if(n&&c==="length")for(var p=f;p<_.v;p+=1){var m=r.get(p+"");m!==void 0?T(m,Ce):p in l&&(m=o(()=>Z(Ce)),r.set(p+"",m))}if(_===void 0)(!g||Xt(l,c)?.writable)&&(_=o(()=>Z(void 0)),T(_,Fe(f)),r.set(c,_));else{g=_.v!==Ce;var E=o(()=>Fe(f));T(_,E)}var w=Reflect.getOwnPropertyDescriptor(l,c);if(w?.set&&w.set.call(v,f),!g){if(n&&typeof c=="string"){var x=r.get("length"),D=Number(c);Number.isInteger(D)&&D>=x.v&&T(x,D+1)}It(s)}return!0},ownKeys(l){a(s);var c=Reflect.ownKeys(l).filter(_=>{var g=r.get(_);return g===void 0||g.v!==Ce});for(var[f,v]of r)v.v!==Ce&&!(f in l)&&c.push(f);return c},setPrototypeOf(){Do()}})}function Ks(e){try{if(e!==null&&typeof e=="object"&&dr in e)return e[dr]}catch{}return e}function ul(e,t){return Object.is(Ks(e),Ks(t))}var Ys,Ya,Za,Ja;function dl(){if(Ys===void 0){Ys=window,Ya=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Za=Xt(t,"firstChild").get,Ja=Xt(t,"nextSibling").get,Gs(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Gs(r)&&(r.__t=void 0)}}function Wt(e=""){return document.createTextNode(e)}function Rr(e){return Za.call(e)}function hn(e){return Ja.call(e)}function u(e,t){return Rr(e)}function q(e,t=!1){{var r=Rr(e);return r instanceof Comment&&r.data===""?hn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=hn(n);return n}function fl(e){e.textContent=""}function Rn(){return!1}function vl(e,t){if(t){const r=document.body;e.autofocus=!0,fr(()=>{document.activeElement===r&&e.focus()})}}let Zs=!1;function hl(){Zs||(Zs=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function On(e){var t=ae,r=re;et(null),Mt(null);try{return e()}finally{et(t),Mt(r)}}function Ts(e,t,r,n=r){e.addEventListener(t,()=>On(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),hl()}function pl(e){re===null&&ae===null&&No(),ae!==null&&(ae.f&gt)!==0&&re===null&&xo(),gr&&Eo()}function _l(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Ut(e,t,r,n=!0){var s=re;s!==null&&(s.f&$t)!==0&&(e|=$t);var i={ctx:ke,deps:null,nodes_start:null,nodes_end:null,f:e|lt,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{on(i),i.f|=xs}catch(c){throw We(i),c}else t!==null&&vr(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Br)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&_l(o,s),ae!==null&&(ae.f&tt)!==0&&(e&pr)===0)){var l=ae;(l.effects??=[]).push(o)}}return i}function ml(){return ae!==null&&!St}function Xa(e){const t=Ut(Ps,null,!1);return Je(t,Qe),t.teardown=e,t}function As(e){pl();var t=re.f,r=!ae&&(t&Vt)!==0&&(t&xs)===0;if(r){var n=ke;(n.e??=[]).push(e)}else return Fa(e)}function Fa(e){return Ut($s|So,e,!1)}function gl(e){_t.ensure();const t=Ut(pr|Br,e,!0);return(r={})=>new Promise(n=>{r.outro?Lt(t,()=>{We(t),n(void 0)}):(We(t),n(void 0))})}function Ds(e){return Ut($s,e,!1)}function bl(e){return Ut(An|Br,e,!0)}function Is(e,t=0){return Ut(Ps|t,e,!0)}function W(e,t=[],r=[]){Ua(t,r,n=>{Ut(Ps,()=>e(...n.map(a)),!0)})}function Gt(e,t=0){var r=Ut(hr|t,e,!0);return r}function Ve(e,t=!0){return Ut(Vt|Br,e,!0,t)}function ei(e){var t=e.teardown;if(t!==null){const r=gr,n=ae;Xs(!0),et(null);try{t.call(null)}finally{Xs(r),et(n)}}}function ti(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&On(()=>{s.abort(tn)});var n=r.next;(r.f&pr)!==0?r.parent=null:We(r,t),r=n}}function yl(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Vt)===0&&We(t),t=r}}function We(e,t=!0){var r=!1;(t||(e.f&wo)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(wl(e.nodes_start,e.nodes_end),r=!0),ti(e,t&&!r),xn(e,0),Je(e,_r);var n=e.transitions;if(n!==null)for(const i of n)i.stop();ei(e);var s=e.parent;s!==null&&s.first!==null&&ri(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function wl(e,t){for(;e!==null;){var r=e===t?null:hn(e);e.remove(),e=r}}function ri(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Lt(e,t){var r=[];Ms(e,r,!0),ni(r,()=>{We(e),t&&t()})}function ni(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function Ms(e,t,r){if((e.f&$t)===0){if(e.f^=$t,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,i=(n.f&mr)!==0||(n.f&Vt)!==0;Ms(n,t,i?r:!1),n=s}}}function qn(e){si(e,!0)}function si(e,t){if((e.f&$t)!==0){e.f^=$t,(e.f&Qe)===0&&(Je(e,lt),vr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&mr)!==0||(r.f&Vt)!==0;si(r,s?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let Ar=!1;function Js(e){Ar=e}let gr=!1;function Xs(e){gr=e}let ae=null,St=!1;function et(e){ae=e}let re=null;function Mt(e){re=e}let jt=null;function ai(e){ae!==null&&(jt===null?jt=[e]:jt.push(e))}let Ze=null,it=0,pt=null;function Sl(e){pt=e}let ii=1,an=0,zt=an;function Fs(e){zt=e}let Jt=!1;function oi(){return++ii}function Bn(e){var t=e.f;if((t&lt)!==0)return!0;if((t&rr)!==0){var r=e.deps,n=(t&gt)!==0;if(r!==null){var s,i,o=(t&En)!==0,l=n&&re!==null&&!Jt,c=r.length;if((o||l)&&(re===null||(re.f&_r)===0)){var f=e,v=f.parent;for(s=0;s<c;s++)i=r[s],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=En),l&&v!==null&&(v.f&gt)===0&&(f.f^=gt)}for(s=0;s<c;s++)if(i=r[s],Bn(i)&&Qa(i),i.wv>e.wv)return!0}(!n||re!==null&&!Jt)&&Je(e,Qe)}return!1}function li(e,t,r=!0){var n=e.reactions;if(n!==null&&!jt?.includes(e))for(var s=0;s<n.length;s++){var i=n[s];(i.f&tt)!==0?li(i,t,!1):t===i&&(r?Je(i,lt):(i.f&Qe)!==0&&Je(i,rr),vr(i))}}function ci(e){var t=Ze,r=it,n=pt,s=ae,i=Jt,o=jt,l=ke,c=St,f=zt,v=e.f;Ze=null,it=0,pt=null,Jt=(v&gt)!==0&&(St||!Ar||ae===null),ae=(v&(Vt|pr))===0?e:null,jt=null,Ir(e.ctx),St=!1,zt=++an,e.ac!==null&&(On(()=>{e.ac.abort(tn)}),e.ac=null);try{e.f|=as;var _=e.fn,g=_(),p=e.deps;if(Ze!==null){var m;if(xn(e,it),p!==null&&it>0)for(p.length=it+Ze.length,m=0;m<Ze.length;m++)p[it+m]=Ze[m];else e.deps=p=Ze;if(!Jt||(v&tt)!==0&&e.reactions!==null)for(m=it;m<p.length;m++)(p[m].reactions??=[]).push(e)}else p!==null&&it<p.length&&(xn(e,it),p.length=it);if(jr()&&pt!==null&&!St&&p!==null&&(e.f&(tt|rr|lt))===0)for(m=0;m<pt.length;m++)li(pt[m],e);return s!==null&&s!==e&&(an++,pt!==null&&(n===null?n=pt:n.push(...pt))),(e.f&ur)!==0&&(e.f^=ur),g}catch(E){return La(E)}finally{e.f^=as,Ze=t,it=r,pt=n,ae=s,Jt=i,jt=o,Ir(l),St=c,zt=f}}function $l(e,t){let r=t.reactions;if(r!==null){var n=_o.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&tt)!==0&&(Ze===null||!Ze.includes(t))&&(Je(t,rr),(t.f&(gt|En))===0&&(t.f^=En),Ha(t),xn(t,0))}function xn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)$l(e,r[n])}function on(e){var t=e.f;if((t&_r)===0){Je(e,Qe);var r=re,n=Ar;re=e,Ar=!0;try{(t&hr)!==0?yl(e):ti(e),ei(e);var s=ci(e);e.teardown=typeof s=="function"?s:null,e.wv=ii;var i;ka&&Zo&&(e.f&lt)!==0&&e.deps}finally{Ar=n,re=r}}}async function Pl(){await Promise.resolve(),el()}function a(e){var t=e.f,r=(t&tt)!==0;if(ae!==null&&!St){var n=re!==null&&(re.f&_r)!==0;if(!n&&!jt?.includes(e)){var s=ae.deps;if((ae.f&as)!==0)e.rv<an&&(e.rv=an,Ze===null&&s!==null&&s[it]===e?it++:Ze===null?Ze=[e]:(!Jt||!Ze.includes(e))&&Ze.push(e));else{(ae.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[ae]:i.includes(ae)||i.push(ae)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&gt)===0&&(o.f^=gt)}if(gr){if(Ft.has(e))return Ft.get(e);if(r){o=e;var c=o.v;return((o.f&Qe)===0&&o.reactions!==null||ui(o))&&(c=ks(o)),Ft.set(o,c),c}}else r&&(o=e,Bn(o)&&Qa(o));if((e.f&ur)!==0)throw e.v;return e.v}function ui(e){if(e.v===Ce)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ft.has(t)||(t.f&tt)!==0&&ui(t))return!0;return!1}function zr(e){var t=St;try{return St=!0,e()}finally{St=t}}const El=-7169;function Je(e,t){e.f=e.f&El|t}function xl(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Nl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function kl(e){return Nl.includes(e)}const Tl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Al(e){return e=e.toLowerCase(),Tl[e]??e}const Dl=["touchstart","touchmove"];function Il(e){return Dl.includes(e)}const di=new Set,ls=new Set;function fi(e,t,r,n={}){function s(i){if(n.capture||Zr.call(t,i),!i.cancelBubble)return On(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?fr(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function ea(e,t,r,n={}){var s=fi(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function Pt(e){for(var t=0;t<e.length;t++)di.add(e[t]);for(var r of ls)r(e)}let ta=null;function Zr(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],i=s[0]||e.target;ta=e;var o=0,l=ta===e&&e.__root;if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=s.indexOf(t);if(f===-1)return;c<=f&&(o=c)}if(i=s[o]||e.target,i!==t){ss(e,"currentTarget",{configurable:!0,get(){return i||r}});var v=ae,_=re;et(null),Mt(null);try{for(var g,p=[];i!==null;){var m=i.assignedSlot||i.parentNode||i.host||null;try{var E=i["__"+n];if(E!=null&&(!i.disabled||e.target===i))if(Tn(E)){var[w,...x]=E;w.apply(i,[e,...x])}else E.call(i,e)}catch(D){g?p.push(D):g=D}if(e.cancelBubble||m===t||m===null)break;i=m}if(g){for(let D of p)queueMicrotask(()=>{throw D});throw g}}finally{e.__root=t,delete e.currentTarget,et(v),Mt(_)}}}function vi(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Or(e,t){var r=re;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function N(e,t){var r=(t&zo)!==0,n=(t&Vo)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=vi(i?e:"<!>"+e),r||(s=Rr(s)));var o=n||Ya?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=Rr(o),c=o.lastChild;Or(l,c)}else Or(o,o);return o}}function Ml(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=vi(s),l=Rr(o);i=Rr(l)}var c=i.cloneNode(!0);return Or(c,c),c}}function Cl(e,t){return Ml(e,t,"svg")}function ot(e=""){{var t=Wt(e+"");return Or(t,t),t}}function B(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Wt();return e.append(t,r),Or(t,r),e}function h(e,t){e!==null&&e.before(t)}function O(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Rl(e,t){return Ol(e,t)}const kr=new Map;function Ol(e,{target:t,anchor:r,props:n={},events:s,context:i,intro:o=!0}){dl();var l=new Set,c=_=>{for(var g=0;g<_.length;g++){var p=_[g];if(!l.has(p)){l.add(p);var m=Il(p);t.addEventListener(p,Zr,{passive:m});var E=kr.get(p);E===void 0?(document.addEventListener(p,Zr,{passive:m}),kr.set(p,1)):kr.set(p,E+1)}}};c(Ss(di)),ls.add(c);var f=void 0,v=gl(()=>{var _=r??t.appendChild(Wt());return nl(_,{pending:()=>{}},g=>{if(i){L({});var p=ke;p.c=i}s&&(n.$$events=s),f=e(g,n)||{},i&&j()}),()=>{for(var g of l){t.removeEventListener(g,Zr);var p=kr.get(g);--p===0?(document.removeEventListener(g,Zr),kr.delete(g)):kr.set(g,p)}ls.delete(c),_!==r&&_.parentNode?.removeChild(_)}});return ql.set(f,v),f}let ql=new WeakMap;function I(e,t,r=!1){var n=e,s=null,i=null,o=Ce,l=r?mr:0,c=!1;const f=(p,m=!0)=>{c=!0,g(m,p)};var v=null;function _(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var p=o?s:i,m=o?i:s;p&&qn(p),m&&Lt(m,()=>{o?i=null:s=null})}const g=(p,m)=>{if(o!==(o=p)){var E=Rn(),w=n;if(E&&(v=document.createDocumentFragment(),v.append(w=Wt())),o?s??=m&&Ve(()=>m(w)):i??=m&&Ve(()=>m(w)),E){var x=be,D=o?s:i,$=o?i:s;D&&x.skipped_effects.delete(D),$&&x.skipped_effects.add($),x.add_callback(_)}else _()}};Gt(()=>{c=!1,t(f),c||g(null,null)},l)}function Bl(e,t,r){var n=e,s=Ce,i,o,l=null,c=jr()?Yo:Oa;function f(){i&&Lt(i),l!==null&&(l.lastChild.remove(),n.before(l),l=null),i=o}Gt(()=>{if(c(s,s=t())){var v=n,_=Rn();_&&(l=document.createDocumentFragment(),l.append(v=Wt())),o=Ve(()=>r(v)),_?be.add_callback(f):f()}})}function Cs(e,t){return t}function Ll(e,t,r){for(var n=e.items,s=[],i=t.length,o=0;o<i;o++)Ms(t[o].e,s,!0);var l=i>0&&s.length===0&&r!==null;if(l){var c=r.parentNode;fl(c),c.append(r),n.clear(),At(e,t[0].prev,t[i-1].next)}ni(s,()=>{for(var f=0;f<i;f++){var v=t[f];l||(n.delete(v.k),At(e,v.prev,v.next)),We(v.e,!l)}})}function Le(e,t,r,n,s,i=null){var o=e,l={flags:t,items:new Map,first:null},c=(t&Ca)!==0;if(c){var f=e;o=f.appendChild(Wt())}var v=null,_=!1,g=new Map,p=Ns(()=>{var x=r();return Tn(x)?x:x==null?[]:Ss(x)}),m,E;function w(){jl(E,m,l,g,o,s,t,n,r),i!==null&&(m.length===0?v?qn(v):v=Ve(()=>i(o)):v!==null&&Lt(v,()=>{v=null}))}Gt(()=>{E??=re,m=a(p);var x=m.length;if(!(_&&x===0)){_=x===0;var D,$,S,P;if(Rn()){var k=new Set,R=be;for($=0;$<x;$+=1){S=m[$],P=n(S,$);var b=l.items.get(P)??g.get(P);b?(t&(Dn|In))!==0&&hi(b,S,$,t):(D=pi(null,l,null,null,S,P,$,s,t,r,!0),g.set(P,D)),k.add(P)}for(const[C,z]of l.items)k.has(C)||R.skipped_effects.add(z.e);R.add_callback(w)}else w();a(p)}})}function jl(e,t,r,n,s,i,o,l,c){var f=(o&Co)!==0,v=(o&(Dn|In))!==0,_=t.length,g=r.items,p=r.first,m=p,E,w=null,x,D=[],$=[],S,P,k,R;if(f)for(R=0;R<_;R+=1)S=t[R],P=l(S,R),k=g.get(P),k!==void 0&&(k.a?.measure(),(x??=new Set).add(k));for(R=0;R<_;R+=1){if(S=t[R],P=l(S,R),k=g.get(P),k===void 0){var b=n.get(P);if(b!==void 0){n.delete(P),g.set(P,b);var C=w?w.next:m;At(r,w,b),At(r,b,C),Zn(b,C,s),w=b}else{var z=m?m.e.nodes_start:s;w=pi(z,r,w,w===null?r.first:w.next,S,P,R,i,o,c)}g.set(P,w),D=[],$=[],m=w.next;continue}if(v&&hi(k,S,R,o),(k.e.f&$t)!==0&&(qn(k.e),f&&(k.a?.unfix(),(x??=new Set).delete(k))),k!==m){if(E!==void 0&&E.has(k)){if(D.length<$.length){var ue=$[0],fe;w=ue.prev;var xe=D[0],Ae=D[D.length-1];for(fe=0;fe<D.length;fe+=1)Zn(D[fe],ue,s);for(fe=0;fe<$.length;fe+=1)E.delete($[fe]);At(r,xe.prev,Ae.next),At(r,w,xe),At(r,Ae,ue),m=ue,w=Ae,R-=1,D=[],$=[]}else E.delete(k),Zn(k,m,s),At(r,k.prev,k.next),At(r,k,w===null?r.first:w.next),At(r,w,k),w=k;continue}for(D=[],$=[];m!==null&&m.k!==P;)(m.e.f&$t)===0&&(E??=new Set).add(m),$.push(m),m=m.next;if(m===null)continue;k=m}D.push(k),w=k,m=k.next}if(m!==null||E!==void 0){for(var De=E===void 0?[]:Ss(E);m!==null;)(m.e.f&$t)===0&&De.push(m),m=m.next;var K=De.length;if(K>0){var ye=(o&Ca)!==0&&_===0?s:null;if(f){for(R=0;R<K;R+=1)De[R].a?.measure();for(R=0;R<K;R+=1)De[R].a?.fix()}Ll(r,De,ye)}}f&&fr(()=>{if(x!==void 0)for(k of x)k.a?.apply()}),e.first=r.first&&r.first.e,e.last=w&&w.e;for(var A of n.values())We(A.e);n.clear()}function hi(e,t,r,n){(n&Dn)!==0&&Cr(e.v,t),(n&In)!==0?Cr(e.i,r):e.i=r}function pi(e,t,r,n,s,i,o,l,c,f,v){var _=(c&Dn)!==0,g=(c&Ro)===0,p=_?g?cl(s,!1,!1):er(s):s,m=(c&In)===0?o:er(o),E={i:m,v:p,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var w=document.createDocumentFragment();w.append(e=Wt())}return E.e=Ve(()=>l(e,p,m,f),Ko),E.e.prev=r&&r.e,E.e.next=n&&n.e,r===null?v||(t.first=E):(r.next=E,r.e.next=E.e),n!==null&&(n.prev=E,n.e.prev=E.e),E}finally{}}function Zn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=hn(i);s.before(i),i=o}}function At(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function F(e,t,...r){var n=e,s=J,i;Gt(()=>{s!==(s=t())&&(i&&(We(i),i=null),i=Ve(()=>s(n,...r)))},mr)}function Jr(e,t,r){var n=e,s,i,o=null,l=null;function c(){i&&(Lt(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=l,l=null}Gt(()=>{if(s!==(s=t())){var f=Rn();if(s){var v=n;f&&(o=document.createDocumentFragment(),o.append(v=Wt()),i&&be.skipped_effects.add(i)),l=Ve(()=>r(v,s))}f?be.add_callback(c):c()}},mr)}function zl(e,t,r,n,s,i){var o,l,c=null,f=e,v;Gt(()=>{const _=t()||null;var g=Uo;_!==o&&(v&&(_===null?Lt(v,()=>{v=null,l=null}):_===l?qn(v):We(v)),_&&_!==l&&(v=Ve(()=>{if(c=document.createElementNS(g,_),Or(c,c),n){var p=c.appendChild(Wt());n(c,p)}re.nodes_end=c,f.before(c)})),o=_,o&&(l=o))},mr)}function Vl(e,t){var r=void 0,n;Gt(()=>{r!==(r=t())&&(n&&(We(n),n=null),r&&(n=Ve(()=>{Ds(()=>r(e))})))})}function _i(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=_i(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Wl(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=_i(e))&&(n&&(n+=" "),n+=t);return n}function mi(e){return typeof e=="object"?Wl(e):e??""}const ra=[...` 	
\r\f \v\uFEFF`];function Ul(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+i;(o===0||ra.includes(n[o-1]))&&(l===n.length||ra.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function na(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var i=e[s];i!=null&&i!==""&&(n+=" "+s+": "+i+r)}return n}function Jn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Gl(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Jn)),s&&c.push(...Object.keys(s).map(Jn));var f=0,v=-1;const E=e.length;for(var _=0;_<E;_++){var g=e[_];if(l?g==="/"&&e[_-1]==="*"&&(l=!1):i?i===g&&(i=!1):g==="/"&&e[_+1]==="*"?l=!0:g==='"'||g==="'"?i=g:g==="("?o++:g===")"&&o--,!l&&i===!1&&o===0){if(g===":"&&v===-1)v=_;else if(g===";"||_===E-1){if(v!==-1){var p=Jn(e.substring(f,v).trim());if(!c.includes(p)){g!==";"&&_++;var m=e.substring(f,_).trim();r+=" "+m+";"}}f=_+1,v=-1}}}}return n&&(r+=na(n)),s&&(r+=na(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function $e(e,t,r,n,s,i){var o=e.__className;if(o!==r||o===void 0){var l=Ul(r,n,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(i&&s!==i)for(var c in i){var f=!!i[c];(s==null||f!==!!s[c])&&e.classList.toggle(c,f)}return i}function Xn(e,t={},r,n){for(var s in r){var i=r[s];t[s]!==i&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,n))}}function Hl(e,t,r,n){var s=e.__style;if(s!==t){var i=Gl(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(Xn(e,r?.[0],n[0]),Xn(e,r?.[1],n[1],"important")):Xn(e,r,n));return n}function Nn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Tn(t))return Ho();for(var n of e.options)n.selected=t.includes(nn(n));return}for(n of e.options){var s=nn(n);if(ul(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function gi(e){var t=new MutationObserver(()=>{Nn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Xa(()=>{t.disconnect()})}function Xr(e,t,r=t){var n=!0;Ts(e,"change",s=>{var i=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),nn);else{var l=e.querySelector(i)??e.querySelector("option:not([disabled])");o=l&&nn(l)}r(o)}),Ds(()=>{var s=t();if(Nn(e,s,n),n&&s===void 0){var i=e.querySelector(":checked");i!==null&&(s=nn(i),r(s))}e.__value=s,n=!1}),gi(e)}function nn(e){return"__value"in e?e.__value:e.value}const Qr=Symbol("class"),Kr=Symbol("style"),bi=Symbol("is custom element"),yi=Symbol("is html");function Rs(e,t){var r=Ln(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Dr(e,t){var r=Ln(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Ql(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function kn(e,t,r,n){var s=Ln(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[$o]=r),r==null?e.removeAttribute(t):typeof r!="string"&&wi(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Kl(e,t,r,n,s=!1,i=!1){var o=Ln(e),l=o[bi],c=!o[yi],f=t||{},v=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=mi(r.class):r[Qr]&&(r.class=null),r[Kr]&&(r.style??=null);var g=wi(e);for(const S in r){let P=r[S];if(v&&S==="value"&&P==null){e.value=e.__value="",f[S]=P;continue}if(S==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";$e(e,p,P,n,t?.[Qr],r[Qr]),f[S]=P,f[Qr]=r[Qr];continue}if(S==="style"){Hl(e,P,t?.[Kr],r[Kr]),f[S]=P,f[Kr]=r[Kr];continue}var m=f[S];if(!(P===m&&!(P===void 0&&e.hasAttribute(S)))){f[S]=P;var E=S[0]+S[1];if(E!=="$$")if(E==="on"){const k={},R="$$"+S;let b=S.slice(2);var w=kl(b);if(xl(b)&&(b=b.slice(0,-7),k.capture=!0),!w&&m){if(P!=null)continue;e.removeEventListener(b,f[R],k),f[R]=null}if(P!=null)if(w)e[`__${b}`]=P,Pt([b]);else{let C=function(z){f[S].call(this,z)};var $=C;f[R]=fi(b,e,C,k)}else w&&(e[`__${b}`]=void 0)}else if(S==="style")kn(e,S,P);else if(S==="autofocus")vl(e,!!P);else if(!l&&(S==="__value"||S==="value"&&P!=null))e.value=e.__value=P;else if(S==="selected"&&v)Ql(e,P);else{var x=S;c||(x=Al(x));var D=x==="defaultValue"||x==="defaultChecked";if(P==null&&!l&&!D)if(o[S]=null,x==="value"||x==="checked"){let k=e;const R=t===void 0;if(x==="value"){let b=k.defaultValue;k.removeAttribute(x),k.defaultValue=b,k.value=k.__value=R?b:null}else{let b=k.defaultChecked;k.removeAttribute(x),k.defaultChecked=b,k.checked=R?b:!1}}else e.removeAttribute(S);else D||g.includes(x)&&(l||typeof P!="string")?(e[x]=P,x in o&&(o[x]=Ce)):typeof P!="function"&&kn(e,x,P)}}}return f}function sa(e,t,r=[],n=[],s,i=!1,o=!1){Ua(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",_=!1;if(Gt(()=>{var p=t(...l.map(a)),m=Kl(e,c,p,s,i,o);_&&v&&"value"in p&&Nn(e,p.value);for(let w of Object.getOwnPropertySymbols(f))p[w]||We(f[w]);for(let w of Object.getOwnPropertySymbols(p)){var E=p[w];w.description===Go&&(!c||E!==c[w])&&(f[w]&&We(f[w]),f[w]=Ve(()=>Vl(e,()=>E))),m[w]=E}c=m}),v){var g=e;Ds(()=>{Nn(g,c.value,!0),gi(g)})}_=!0})}function Ln(e){return e.__attributes??={[bi]:e.nodeName.includes("-"),[yi]:e.namespaceURI===Wo}}var aa=new Map;function wi(e){var t=e.getAttribute("is")||e.nodeName,r=aa.get(t);if(r)return r;aa.set(t,r=[]);for(var n,s=e,i=Element.prototype;i!==s;){n=mo(s);for(var o in n)n[o].set&&r.push(o);s=Ta(s)}return r}function Be(e,t,r=t){var n=new WeakSet;Ts(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=Fn(e)?es(i):i,r(i),be!==null&&n.add(be),await Pl(),i!==(i=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=i??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),zr(t)==null&&e.value&&(r(Fn(e)?es(e.value):e.value),be!==null&&n.add(be)),Is(()=>{var s=t();if(e===document.activeElement){var i=Sn??be;if(n.has(i))return}Fn(e)&&s===es(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Yl(e,t,r=t){Ts(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),zr(t)==null&&r(e.checked),Is(()=>{var n=t();e.checked=!!n})}function Fn(e){var t=e.type;return t==="number"||t==="range"}function es(e){return e===""?null:+e}let wn=!1;function Zl(e){var t=wn;try{return wn=!1,[e(),wn]}finally{wn=t}}const Jl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ee(e,t,r){return new Proxy({props:e,exclude:t},Jl)}const Xl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Hr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];Hr(s)&&(s=s());const i=Xt(s,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Hr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=Xt(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===dr||t===Ia)return!1;for(let r of e.props)if(Hr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Hr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ne(...e){return new Proxy({props:e},Xl)}function Bt(e,t,r,n){var s=!Lr||(r&qo)!==0,i=(r&Lo)!==0,o=(r&jo)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=o?zr(n):n),l),v;if(i){var _=dr in e||Ia in e;v=Xt(e,t)?.set??(_&&t in e?$=>e[t]=$:void 0)}var g,p=!1;i?[g,p]=Zl(()=>e[t]):g=e[t],g===void 0&&n!==void 0&&(g=f(),v&&(s&&To(),v(g)));var m;if(s?m=()=>{var $=e[t];return $===void 0?f():(c=!0,$)}:m=()=>{var $=e[t];return $!==void 0&&(l=void 0),$===void 0?l:$},s&&(r&Bo)===0)return m;if(v){var E=e.$$legacy;return(function($,S){return arguments.length>0?((!s||!S||E||p)&&v(S?m():$),$):m()})}var w=!1,x=((r&Oo)!==0?Cn:Ns)(()=>(w=!1,m()));i&&a(x);var D=re;return(function($,S){if(arguments.length>0){const P=S?a(x):s&&i?Fe($):$;return T(x,P),w=!0,l!==void 0&&(l=P),$}return gr&&w||(D.f&_r)!==0?x.v:a(x)})}function Si(e){ke===null&&Ma(),Lr&&ke.l!==null?ec(ke).m.push(e):As(()=>{const t=zr(e);if(typeof t=="function")return t})}function Fl(e){ke===null&&Ma(),Si(()=>()=>zr(e))}function ec(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const tc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(tc);const rc="modulepreload",nc=function(e){return"/"+e},ia={},ts=function(t,r,n){let s=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(_=>Promise.resolve(_).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};var o=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");s=f(r.map(v=>{if(v=nc(v),v in ia)return;ia[v]=!0;const _=v.endsWith(".css"),g=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${g}`))return;const p=document.createElement("link");if(p.rel=_?"stylesheet":rc,_||(p.as="script"),p.crossOrigin="",p.href=v,c&&p.setAttribute("nonce",c),document.head.appendChild(p),_)return new Promise((m,E)=>{p.addEventListener("load",m),p.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${v}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})};class sc extends Map{#e=new Map;#r=Z(0);#c=Z(0);#u=zt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#o(t){return zt===this.#u?Z(t):er(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#o(0),r.set(t,n);else return a(this.#r),!1}return a(n),!0}forEach(t,r){this.#a(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#o(0),r.set(t,n);else{a(this.#r);return}}return a(n),super.get(t)}set(t,r){var n=this.#e,s=n.get(t),i=super.get(t),o=super.set(t,r),l=this.#r;if(s===void 0)s=this.#o(0),n.set(t,s),T(this.#c,super.size),It(l);else if(i!==r){It(s);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!s.reactions?.every(v=>c.has(v));f&&It(l)}return o}delete(t){var r=this.#e,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),T(this.#c,super.size),T(n,-1),It(this.#r)),s}clear(){if(super.size!==0){super.clear();var t=this.#e;T(this.#c,0);for(var r of t.values())T(r,-1);It(this.#r),t.clear()}}#a(){a(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#o(0);t.set(r,n)}}for([,n]of this.#e)a(n)}keys(){return a(this.#r),super.keys()}values(){return this.#a(),super.values()}entries(){return this.#a(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return a(this.#c),super.size}}class ac{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class $i{constructor(t){this.generateIdentifier=t,this.kv=new ac}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class ic extends $i{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function oc(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function lc(e,t){const r=oc(e);if("find"in r)return r.find(t);const n=r;for(let s=0;s<n.length;s++){const i=n[s];if(t(i))return i}}function qr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function $n(e,t){return e.indexOf(t)!==-1}function oa(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class cc{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return lc(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const uc=e=>Object.prototype.toString.call(e).slice(8,-1),Pi=e=>typeof e>"u",dc=e=>e===null,ln=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,cs=e=>ln(e)&&Object.keys(e).length===0,tr=e=>Array.isArray(e),fc=e=>typeof e=="string",vc=e=>typeof e=="number"&&!isNaN(e),hc=e=>typeof e=="boolean",pc=e=>e instanceof RegExp,cn=e=>e instanceof Map,un=e=>e instanceof Set,Ei=e=>uc(e)==="Symbol",_c=e=>e instanceof Date&&!isNaN(e.valueOf()),mc=e=>e instanceof Error,la=e=>typeof e=="number"&&isNaN(e),gc=e=>hc(e)||dc(e)||Pi(e)||vc(e)||fc(e)||Ei(e),bc=e=>typeof e=="bigint",yc=e=>e===1/0||e===-1/0,wc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),Sc=e=>e instanceof URL,xi=e=>e.replace(/\./g,"\\."),rs=e=>e.map(String).map(xi).join("."),sn=e=>{const t=[];let r="";for(let s=0;s<e.length;s++){let i=e.charAt(s);if(i==="\\"&&e.charAt(s+1)==="."){r+=".",s++;continue}if(i==="."){t.push(r),r="";continue}r+=i}const n=r;return t.push(n),t};function Tt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Ni=[Tt(Pi,"undefined",()=>null,()=>{}),Tt(bc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Tt(_c,"Date",e=>e.toISOString(),e=>new Date(e)),Tt(mc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Tt(pc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Tt(un,"set",e=>[...e.values()],e=>new Set(e)),Tt(cn,"map",e=>[...e.entries()],e=>new Map(e)),Tt(e=>la(e)||yc(e),"number",e=>la(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Tt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Tt(Sc,"URL",e=>e.toString(),e=>new URL(e))];function jn(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ki=jn((e,t)=>Ei(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),$c=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),Ti=jn(wc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=$c[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function Ai(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const Di=jn(Ai,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(s=>{n[s]=e[s]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),Ii=jn((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Pc=[Di,ki,Ii,Ti],ca=(e,t)=>{const r=oa(Pc,s=>s.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=oa(Ni,s=>s.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},Mi={};Ni.forEach(e=>{Mi[e.annotation]=e});const Ec=(e,t,r)=>{if(tr(t))switch(t[0]){case"symbol":return ki.untransform(e,t,r);case"class":return Di.untransform(e,t,r);case"custom":return Ii.untransform(e,t,r);case"typed-array":return Ti.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=Mi[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Tr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function Ci(e){if($n(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if($n(e,"prototype"))throw new Error("prototype is not allowed as a property");if($n(e,"constructor"))throw new Error("constructor is not allowed as a property")}const xc=(e,t)=>{Ci(t);for(let r=0;r<t.length;r++){const n=t[r];if(un(e))e=Tr(e,+n);else if(cn(e)){const s=+n,i=+t[++r]==0?"key":"value",o=Tr(e,s);switch(i){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},us=(e,t,r)=>{if(Ci(t),t.length===0)return r(e);let n=e;for(let i=0;i<t.length-1;i++){const o=t[i];if(tr(n)){const l=+o;n=n[l]}else if(ln(n))n=n[o];else if(un(n)){const l=+o;n=Tr(n,l)}else if(cn(n)){if(i===t.length-2)break;const c=+o,f=+t[++i]==0?"key":"value",v=Tr(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const s=t[t.length-1];if(tr(n)?n[+s]=r(n[+s]):ln(n)&&(n[s]=r(n[s])),un(n)){const i=Tr(n,+s),o=r(i);i!==o&&(n.delete(i),n.add(o))}if(cn(n)){const i=+t[t.length-2],o=Tr(n,i);switch(+s==0?"key":"value"){case"key":{const c=r(o);n.set(c,n.get(o)),c!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function ds(e,t,r=[]){if(!e)return;if(!tr(e)){qr(e,(i,o)=>ds(i,t,[...r,...sn(o)]));return}const[n,s]=e;s&&qr(s,(i,o)=>{ds(i,t,[...r,...sn(o)])}),t(n,r)}function Nc(e,t,r){return ds(t,(n,s)=>{e=us(e,s,i=>Ec(i,n,r))}),e}function kc(e,t){function r(n,s){const i=xc(e,sn(s));n.map(sn).forEach(o=>{e=us(e,o,()=>i)})}if(tr(t)){const[n,s]=t;n.forEach(i=>{e=us(e,sn(i),()=>e)}),s&&qr(s,r)}else qr(t,r);return e}const Tc=(e,t)=>ln(e)||tr(e)||cn(e)||un(e)||Ai(e,t);function Ac(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Dc(e,t){const r={};let n;return e.forEach(s=>{if(s.length<=1)return;t||(s=s.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[i,...o]=s;i.length===0?n=o.map(rs):r[rs(i)]=o.map(rs)}),n?cs(r)?[n]:[n,r]:cs(r)?void 0:r}const Ri=(e,t,r,n,s=[],i=[],o=new Map)=>{const l=gc(e);if(!l){Ac(e,s,t);const p=o.get(e);if(p)return n?{transformedValue:null}:p}if(!Tc(e,r)){const p=ca(e,r),m=p?{transformedValue:p.value,annotations:[p.type]}:{transformedValue:e};return l||o.set(e,m),m}if($n(i,e))return{transformedValue:null};const c=ca(e,r),f=c?.value??e,v=tr(f)?[]:{},_={};qr(f,(p,m)=>{if(m==="__proto__"||m==="constructor"||m==="prototype")throw new Error(`Detected property ${m}. This is a prototype pollution risk, please remove it from your object.`);const E=Ri(p,t,r,n,[...s,m],[...i,e],o);v[m]=E.transformedValue,tr(E.annotations)?_[m]=E.annotations:ln(E.annotations)&&qr(E.annotations,(w,x)=>{_[xi(m)+"."+x]=w})});const g=cs(_)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,_]:_};return l||o.set(e,g),g};function Oi(e){return Object.prototype.toString.call(e).slice(8,-1)}function ua(e){return Oi(e)==="Array"}function Ic(e){if(Oi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Mc(e,t,r,n,s){const i={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";i==="enumerable"&&(e[t]=r),s&&i==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function fs(e,t={}){if(ua(e))return e.map(s=>fs(s,t));if(!Ic(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((s,i)=>{if(ua(t.props)&&!t.props.includes(i))return s;const o=e[i],l=fs(o,t);return Mc(s,i,l,e,t.nonenumerable),s},{})}class ie{constructor({dedupe:t=!1}={}){this.classRegistry=new ic,this.symbolRegistry=new $i(r=>r.description??""),this.customTransformerRegistry=new cc,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=Ri(t,r,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const i=Dc(r,this.dedupe);return i&&(s.meta={...s.meta,referentialEqualities:i}),s}deserialize(t){const{json:r,meta:n}=t;let s=fs(r);return n?.values&&(s=Nc(s,n.values,this)),n?.referentialEqualities&&(s=kc(s,n.referentialEqualities)),s}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}ie.defaultInstance=new ie;ie.serialize=ie.defaultInstance.serialize.bind(ie.defaultInstance);ie.deserialize=ie.defaultInstance.deserialize.bind(ie.defaultInstance);ie.stringify=ie.defaultInstance.stringify.bind(ie.defaultInstance);ie.parse=ie.defaultInstance.parse.bind(ie.defaultInstance);ie.registerClass=ie.defaultInstance.registerClass.bind(ie.defaultInstance);ie.registerSymbol=ie.defaultInstance.registerSymbol.bind(ie.defaultInstance);ie.registerCustom=ie.defaultInstance.registerCustom.bind(ie.defaultInstance);ie.allowErrorProps=ie.defaultInstance.allowErrorProps.bind(ie.defaultInstance);ie.serialize;ie.deserialize;ie.stringify;ie.parse;ie.registerClass;ie.registerCustom;ie.registerSymbol;ie.allowErrorProps;function Cc(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function Rc(e,t){return`${e}_${t}`}const Oc=typeof window<"u"?window:void 0;function qc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Bc{#e;#r;constructor(t={}){const{window:r=Oc,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=Wa(s=>{const i=ea(r,"focusin",s),o=ea(r,"focusout",s);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#e?qc(this.#e):null}}new Bc;function Lc(e){return typeof e=="function"}function jc(e,t){if(Lc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function zc(e,t){let r=Z(null);const n=Q(()=>jc(t,250));function s(...i){if(a(r))a(r).timeout&&clearTimeout(a(r).timeout);else{let o,l;const c=new Promise((f,v)=>{o=f,l=v});T(r,{timeout:null,runner:null,promise:c,resolve:o,reject:l},!0)}return a(r).runner=async()=>{if(!a(r))return;const o=a(r);T(r,null);try{o.resolve(await e.apply(this,i))}catch(l){o.reject(l)}},a(r).timeout=setTimeout(a(r).runner,a(n)),a(r).promise}return s.cancel=async()=>{(!a(r)||a(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||a(r).timeout===null)||(clearTimeout(a(r).timeout),a(r).reject("Cancelled"),T(r,null))},s.runScheduledNow=async()=>{(!a(r)||!a(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||!a(r).timeout)||(clearTimeout(a(r).timeout),a(r).timeout=null,await a(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!a(r)?.timeout}}),s}function Vc(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),s=new Date(r),i=e.filter(o=>{const l=new Date(o.dateTimeService);return l>=n&&l<=s});return i.length?vs(i.flatMap(o=>o.neededConsolidatedForDate)):[]}function Fr(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function da(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function vs(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function fa(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>hs(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const s=[],i=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(s.push({q:v,u:c}),i.push(hs(v.toString(),c)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:s,display:o}}function or(e){return e?.length?e.map(t=>hs(t.q.toString(),t.u)).join(" et "):"-"}function hs(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,s=t==="gr."?"kg":"l.";let o=(Math.round(n*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${s}`}if(!["gr.","ml","kg","l."].includes(t)){let s=(Math.round(r*10)/10).toString();return s.endsWith(",0")&&(s=s.slice(0,-2)),`${s} ${t}`}return`${r} ${t}`}function Wc(e){return Fr(e)}function Uc(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const s=t.get(n)||0;t.set(n,s+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Gc(e,t){return e[t]?.recipes||[]}function Hc(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,s=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([i])=>{const o=new Date(i);return o>=n&&o<=s}).reduce((i,[o,l])=>i+(l.totalAssiettes||0),0)}function Qc(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Kc(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Yc(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(s=>{t.push({...s,date:r,dateTimeService:r})})}),t}function va(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Uc(t)}function Zc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class y{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}y.equal=(e,t)=>new y("equal",e,t).toString();y.notEqual=(e,t)=>new y("notEqual",e,t).toString();y.lessThan=(e,t)=>new y("lessThan",e,t).toString();y.lessThanEqual=(e,t)=>new y("lessThanEqual",e,t).toString();y.greaterThan=(e,t)=>new y("greaterThan",e,t).toString();y.greaterThanEqual=(e,t)=>new y("greaterThanEqual",e,t).toString();y.isNull=e=>new y("isNull",e).toString();y.isNotNull=e=>new y("isNotNull",e).toString();y.between=(e,t,r)=>new y("between",e,[t,r]).toString();y.startsWith=(e,t)=>new y("startsWith",e,t).toString();y.endsWith=(e,t)=>new y("endsWith",e,t).toString();y.select=e=>new y("select",void 0,e).toString();y.search=(e,t)=>new y("search",e,t).toString();y.orderDesc=e=>new y("orderDesc",e).toString();y.orderAsc=e=>new y("orderAsc",e).toString();y.orderRandom=()=>new y("orderRandom").toString();y.cursorAfter=e=>new y("cursorAfter",void 0,e).toString();y.cursorBefore=e=>new y("cursorBefore",void 0,e).toString();y.limit=e=>new y("limit",void 0,e).toString();y.offset=e=>new y("offset",void 0,e).toString();y.contains=(e,t)=>new y("contains",e,t).toString();y.notContains=(e,t)=>new y("notContains",e,t).toString();y.notSearch=(e,t)=>new y("notSearch",e,t).toString();y.notBetween=(e,t,r)=>new y("notBetween",e,[t,r]).toString();y.notStartsWith=(e,t)=>new y("notStartsWith",e,t).toString();y.notEndsWith=(e,t)=>new y("notEndsWith",e,t).toString();y.createdBefore=e=>new y("createdBefore",void 0,e).toString();y.createdAfter=e=>new y("createdAfter",void 0,e).toString();y.createdBetween=(e,t)=>new y("createdBetween",void 0,[e,t]).toString();y.updatedBefore=e=>new y("updatedBefore",void 0,e).toString();y.updatedAfter=e=>new y("updatedAfter",void 0,e).toString();y.updatedBetween=(e,t)=>new y("updatedBetween",void 0,[e,t]).toString();y.or=e=>new y("or",void 0,e.map(t=>JSON.parse(t))).toString();y.and=e=>new y("and",void 0,e.map(t=>JSON.parse(t))).toString();y.distanceEqual=(e,t,r,n=!0)=>new y("distanceEqual",e,[[t,r,n]]).toString();y.distanceNotEqual=(e,t,r,n=!0)=>new y("distanceNotEqual",e,[[t,r,n]]).toString();y.distanceGreaterThan=(e,t,r,n=!0)=>new y("distanceGreaterThan",e,[[t,r,n]]).toString();y.distanceLessThan=(e,t,r,n=!0)=>new y("distanceLessThan",e,[[t,r,n]]).toString();y.intersects=(e,t)=>new y("intersects",e,[t]).toString();y.notIntersects=(e,t)=>new y("notIntersects",e,[t]).toString();y.crosses=(e,t)=>new y("crosses",e,[t]).toString();y.notCrosses=(e,t)=>new y("notCrosses",e,[t]).toString();y.overlaps=(e,t)=>new y("overlaps",e,[t]).toString();y.notOverlaps=(e,t)=>new y("notOverlaps",e,[t]).toString();y.touches=(e,t)=>new y("touches",e,[t]).toString();y.notTouches=(e,t)=>new y("notTouches",e,[t]).toString();var qi,Bi;class dn{static custom(t){return t}static unique(t=7){const r=Zc(dn,qi,"m",Bi).call(dn);let n="";for(let s=0;s<t;s++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}qi=dn,Bi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var ha;(function(e){e.Totp="totp"})(ha||(ha={}));var pa;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(pa||(pa={}));var _a;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(_a||(_a={}));var ma;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(ma||(ma={}));var ga;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(ga||(ga={}));var ba;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(ba||(ba={}));var ya;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(ya||(ya={}));var wa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(wa||(wa={}));var Sa;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Sa||(Sa={}));function Li(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:e.productType,pFrais:e.pFrais,pSurgel:e.pSurgel,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,...t}}async function Ct(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Jc(e,t,r=100){try{const{databases:n,config:s}=await Ct(),i=await n.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,[y.greaterThan("$updatedAt",t),y.equal("mainId",e),y.limit(r),y.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function ji(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:s,config:i}=await Ct();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[y.equal("mainId",e),y.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),y.limit(n)])).documents;const o=await s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[y.greaterThan("$updatedAt",r),y.equal("mainId",e),y.limit(n),y.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(s){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,s);const i=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function zn(e,t){try{const{databases:r,config:n}=await Ct();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function en(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const s=Li(n,t),{databases:i,config:o}=await Ct(),l=await i.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,e,s);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const s=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${s}`)}}async function zi(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await zn(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function ps(e,t){return zn(e,{who:t})}async function _s(e,t){return zn(e,{stockReel:t})}async function Vi(e){try{const{databases:t,config:r}=await Ct(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,dn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Wi(e,t){try{const{databases:r,config:n}=await Ct(),s=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),i={...t,products:t.products||s.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,i);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Ui(e){try{const{databases:t,config:r}=await Ct();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Gi(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Ct(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[y.equal("$id",e),y.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Hi(e,t={}){let r=null;const n=i=>{const{events:o,payload:l}=i;if(!l)return;const c=o.some(p=>p.includes("products.")),f=o.some(p=>p.includes("purchases.")),v=o.some(p=>p.includes(".create")),_=o.some(p=>p.includes(".update")),g=o.some(p=>p.includes(".delete"));if(c){const p=l;v&&t.onProductCreate?t.onProductCreate(p):_&&t.onProductUpdate?t.onProductUpdate(p):g&&t.onProductDelete&&t.onProductDelete(p.$id)}else if(f){const p=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(p):_&&t.onPurchaseUpdate?t.onPurchaseUpdate(p):g&&t.onPurchaseDelete&&t.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Qi(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Ct(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Ki(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:s}=await Ct(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await s.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(s){throw console.error("[Appwrite Interactions] Erreur création Main document:",s),s}}const ns=Object.freeze(Object.defineProperty({__proto__:null,createMainDocument:Ki,createPurchase:Vi,deletePurchase:Ui,enrichedProductToAppwriteProduct:Li,loadMainEventData:Qi,loadPurchasesListByIds:Gi,loadUpdatedPurchases:Jc,subscribeToRealtime:Hi,syncProductsWithPurchases:ji,updateProduct:zn,updateProductStock:_s,updateProductStore:zi,updateProductWho:ps,updatePurchase:Wi,upsertProduct:en},Symbol.toStringTag,{value:"Module"}));async function Xc(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Fc(e,t,r){return{$id:`${t}_${e.ingredientHugoUuid}`,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,byDate:JSON.stringify(e.byDate),nbRecipes:e.nbRecipes||0,totalAssiettes:e.totalAssiettes||0,status:"",purchases:[],store:"",who:null,stockReel:null,isMerged:!1,mergedInto:null,mergedFrom:null,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,mainId:t}}const $a=1e3,eu=500;class tu{#e=new sc;#r=Z(null);#c=Z(!1);#u=Z(!1);#o=Z(null);#a=Z(!1);#i=Z(!1);#n=Z(Fe([]));#s=Z(null);#d=Z(null);get startDate(){return a(this.#d)}set startDate(t){T(this.#d,t,!0)}#f=Z(null);get endDate(){return a(this.#f)}set endDate(t){T(this.#f,t,!0)}#l=null;#v=null;#h=null;#p=null;#P=Z(!1);#t=Z(Fe({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return a(this.#t)}get currentMainId(){return a(this.#r)}get isInitialized(){return a(this.#c)}get loading(){return a(this.#u)}get error(){return a(this.#o)}get allDates(){return a(this.#n)}get syncing(){return a(this.#a)}setDateRange(t,r){this.startDate=t,this.endDate=r}initializeDateRange(){if((!this.startDate||!this.endDate)&&a(this.#n).length>0){const t=[...a(this.#n)].sort();this.startDate=t[0],this.endDate=t[t.length-1]}console.log(`[ProductsStore] Date range initialized: ${this.startDate} - ${this.endDate}`)}get firstDate(){return a(this.#n).length===0?null:[...a(this.#n)].sort()[0]}get lastDate(){return a(this.#n).length===0?null:[...a(this.#n)].sort().pop()}get realtimeConnected(){return a(this.#i)}get hugoContentChanged(){return a(this.#P)}getTotalNeededInRange(t){return this.totalNeededByDateRange.get(t)??[]}getFormattedTotalNeeded(t){const r=this.getTotalNeededInRange(t);return r.length>0?or(r):"-"}#E=Q(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return a(this.#E)}set enrichedProducts(t){T(this.#E,t)}#g=Q(()=>{if(console.log("[Store] Recalcul totalNeededByDateRange"),this.startDate===this.firstDate&&this.endDate===this.lastDate)return console.log("[Store] Full date range - using totalNeededArray (no calculation)"),new Map(this.enrichedProducts.map(n=>[n.$id,n.totalNeededArray]));const r=new Map;for(const n of this.enrichedProducts)if(n.byDate){const s=Kc(n.byDate),i=Vc(s,this.startDate,this.endDate);i.length>0&&r.set(n.$id,i)}return r});get totalNeededByDateRange(){return a(this.#g)}set totalNeededByDateRange(t){T(this.#g,t)}#b=Q(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const s=or(r);t.set(n,s)}),t});get formattedTotalNeededByDateRange(){return a(this.#b)}set formattedTotalNeededByDateRange(t){T(this.#b,t)}#y=Q(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return a(this.#y)}set stats(t){T(this.#y,t)}#k=Q(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return a(this.#k)}set uniqueStores(t){T(this.#k,t)}#T=Q(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return a(this.#T)}set uniqueWho(t){T(this.#T,t)}#A=Q(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return a(this.#A)}set uniqueProductTypes(t){T(this.#A,t)}#D=Q(()=>new Set(this.totalNeededByDateRange.keys()));get relevantProductIds(){return a(this.#D)}set relevantProductIds(t){T(this.#D,t)}#I=Q(()=>{const t=this.enrichedProducts.filter(r=>this.#W(r)&&this.relevantProductIds.has(r.$id));return a(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>a(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get displayProducts(){return a(this.#I)}set displayProducts(t){T(this.#I,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(a(this.#c)&&a(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),T(this.#r,t,!0),this.#l=Rc("products-enriched",t),T(this.#o,null);try{if(await this.#C(),this.#e.size===0){const n=await Xc(t);console.log(`[ProductsStore] Données Hugo chargées: ${n.ingredients.length} ingredients`),n.ingredients.forEach(i=>{const o=Fc(i,t,n.hugoContentHash),l=this.#x(o);l.isSynced=!1,this.#e.set(l.$id,l)}),T(this.#n,n.allDates,!0),await Qi(t)||await Ki(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),this.#w()}this.initializeDateRange(),await this.#R(),T(this.#c,!0);const r=this.#V();this.#h=Hi(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw T(this.#o,n,!0),console.error("[ProductsStore]",n,r),r}}async#C(){if(this.#l)try{const t=localStorage.getItem(this.#l);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:s}=ie.parse(t);r.forEach(([i,o])=>this.#e.set(i,o)),T(this.#s,n,!0),T(this.#n,s||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${s?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}async#R(){if(a(this.#r)){T(this.#a,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${a(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${a(this.#s)}`);const t=await ji(a(this.#r),{lastSync:a(this.#s),limit:$a});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const s=this.#x(r,n);s.isSynced=!0,this.#e.set(r.$id,s)}),a(this.#s)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${a(this.#s)}`);const{loadUpdatedPurchases:r}=await ts(async()=>{const{loadUpdatedPurchases:s}=await Promise.resolve().then(()=>ns);return{loadUpdatedPurchases:s}},void 0),n=await r(a(this.#r),a(this.#s),$a);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(s=>{if(s.products?.length){const i=s.products.map(o=>typeof o=="string"?o:o.$id);this.#N(i,s)}})}this.#m(),this.#_(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{T(this.#a,!1)}}}#w(){if(this.#l)try{const t={lastSync:a(this.#s),products:Array.from(this.#e.entries()),allDates:a(this.#n)};localStorage.setItem(this.#l,ie.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}#_(){this.#p&&clearTimeout(this.#p),this.#p=setTimeout(()=>{this.#w(),this.#p=null},eu)}#m(){T(this.#s,new Date().toISOString(),!0)}#x(t,r){return r?this.#S(t,r):this.#O(t)}#O(t){const r=vs(da(t.purchases??[])),n=Wc(t.byDate);let s,i;n?s=va(n):(console.error(`[ProductsStore] Product ${t.productName} n'a pas de structure byDate - migration requise`),s=[]);const{numeric:o,display:l}=fa(s,r),c=Fr(t.stockReel)??[],f=or(r),v=c.length>0?`${c[c.length-1].quantity} ${c[c.length-1].unit}`:f;return{$id:t.$id,$updatedAt:t.$updatedAt,productName:t.productName,productHugoUuid:t.productHugoUuid,productType:t.productType,pFrais:t.pFrais,pSurgel:t.pSurgel,who:t.who,nbRecipes:t.nbRecipes,totalAssiettes:t.totalAssiettes,isSynced:t.isSynced,purchases:t.purchases,mainId:t.mainId,storeInfo:t.store?Fr(t.store):null,totalNeededArray:s,totalPurchasesArray:r,stockArray:c,stockOrTotalPurchases:v,missingQuantityArray:o,displayTotalNeeded:or(s),displayTotalPurchases:f,displayMissingQuantity:l,byDate:n||void 0,totalNeededRawArray:i,totalNeededIsManualOverride:t.totalNeededIsManualOverride??!1,totalNeededOverrideReason:t.totalNeededOverrideReason||null}}#S(t,r){const n={...r};if(n.$id=t.$id,n.$updatedAt=t.$updatedAt,n.isSynced=!0,n.mainId=t.mainId,t.who!==void 0&&(n.who=t.who),t.purchases!==void 0&&(n.purchases=t.purchases,this.#q(n)),t.store!==void 0&&(n.storeInfo=t.store?Fr(t.store):null),t.stockReel!==void 0){const s=Fr(t.stockReel)??[];n.stockArray=s,n.stockOrTotalPurchases=s.length>0?`${s[s.length-1].quantity} ${s[s.length-1].unit}`:n.displayTotalPurchases}return t.totalNeededConsolidated!==void 0&&(n.totalNeededConsolidated=t.totalNeededConsolidated),t.totalNeededIsManualOverride!==void 0&&(n.totalNeededIsManualOverride=t.totalNeededIsManualOverride),t.totalNeededOverrideReason!==void 0&&(n.totalNeededOverrideReason=t.totalNeededOverrideReason),n}#q(t){t.totalPurchasesArray=vs(da(t.purchases??[]));const{numeric:r,display:n}=fa(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=or(t.totalPurchasesArray)}#U(t){t.length&&(t.forEach(r=>this.#$(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#$(t){const r=this.#e.get(t.$id),n=this.#x(t,r);this.#e.set(t.$id,n)}#B(t){this.#e.delete(t)}async#L(t){if(!t.products?.length){console.warn("[ProductsStore] Purchase créé sans products:",t.$id);return}const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#z(r,t)}async#j(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#N(r,t);return}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Gi([t.$id]);if(r?.products?.length){const n=r.products.map(s=>typeof s=="string"?s:s.$id).filter(Boolean);this.#N(n,r)}}catch(r){console.error("[ProductsStore] Erreur rechargement purchase:",r)}}#M(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:typeof t.mainId=="string"?t.mainId:t.mainId.$id}}#z(t,r){const n=this.#M(r),s=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#S({...o,purchases:[...l,n]},o);s.push(c)}}}),s.forEach(i=>{this.#e.set(i.$id,i)})}#N(t,r){const n=this.#M(r),s=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#S({...o,purchases:f},o);s.push(v)}else{const f=this.#S({...o,purchases:[...l,r]},o);s.push(f)}}}),s.forEach(i=>{this.#e.set(i.$id,i)})}#V(){return{onProductCreate:t=>{this.#$(t),this.#m(),this.#_()},onProductUpdate:t=>{this.#$(t),this.#m(),this.#_()},onProductDelete:t=>{this.#B(t),this.#m(),this.#_()},onPurchaseCreate:t=>{this.#L(t),this.#m(),this.#_()},onPurchaseUpdate:t=>{this.#j(t),this.#m(),this.#_()},onPurchaseDelete:t=>{Array.from(this.#e.values()).filter(n=>n.purchases?.some(s=>s.$id===t)).forEach(n=>{this.#$(n)}),this.#m(),this.#_()},onConnect:()=>{T(this.#i,!0)},onDisconnect:()=>{T(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#W(t){if(a(this.#t).searchQuery.trim()){const r=a(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(a(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!a(this.#t).selectedStores.includes(t.storeInfo.storeName))||a(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>a(this.#t).selectedWho.includes(r)))||a(this.#t).selectedProductTypes.length>0&&(!t.productType||!a(this.#t).selectedProductTypes.includes(t.productType))||a(this.#t).selectedTemperatures.length>0&&!(a(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||a(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=zc(t=>{a(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=a(this.#t).selectedProductTypes.indexOf(t);r>-1?a(this.#t).selectedProductTypes.splice(r,1):a(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=a(this.#t).selectedTemperatures.indexOf(t);r>-1?a(this.#t).selectedTemperatures.splice(r,1):a(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){a(this.#t).selectedProductTypes=[],a(this.#t).selectedTemperatures=[]}setGroupBy(t){a(this.#t).groupBy=t}toggleStore(t){const r=a(this.#t).selectedStores.indexOf(t);r>-1?a(this.#t).selectedStores.splice(r,1):a(this.#t).selectedStores.push(t)}toggleWho(t){const r=a(this.#t).selectedWho.indexOf(t);r>-1?a(this.#t).selectedWho.splice(r,1):a(this.#t).selectedWho.push(t)}clearStoreFilters(){a(this.#t).selectedStores=[]}clearWhoFilters(){a(this.#t).selectedWho=[]}handleSort(t){a(this.#t).sortColumn===t?a(this.#t).sortDirection=a(this.#t).sortDirection==="asc"?"desc":"asc":(a(this.#t).sortColumn=t,a(this.#t).sortDirection="asc")}clearFilters(){T(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return a(this.#t).sortColumn?[...t].sort((r,n)=>{let s=r[a(this.#t).sortColumn],i=n[a(this.#t).sortColumn];return a(this.#t).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,i=parseFloat(i)||0):a(this.#t).sortColumn==="purchases"&&(s=r.purchases?.length||0,i=n.purchases?.length||0),s<i?a(this.#t).sortDirection==="asc"?-1:1:s>i?a(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}async applyManualOverride(t,r,n=null){const s=this.#e.get(t);if(!s)throw new Error(`Product ${t} not found`);const{updateProduct:i}=await ts(async()=>{const{updateProduct:o}=await Promise.resolve().then(()=>ns);return{updateProduct:o}},void 0);await i(t,{totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n}),this.#e.set(t,{...s,totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n,totalNeededArray:r,displayTotalNeeded:or(r)}),this.#w()}async removeManualOverride(t){const r=this.#e.get(t);if(!r)throw new Error(`Product ${t} not found`);const{updateProduct:n}=await ts(async()=>{const{updateProduct:i}=await Promise.resolve().then(()=>ns);return{updateProduct:i}},void 0);await n(t,{totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null});const s=r.byDate?va(r.byDate):[];this.#e.set(t,{...r,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,totalNeededArray:s,displayTotalNeeded:or(s)}),this.#w()}hasManualOverride(t){return this.#e.get(t)?.totalNeededIsManualOverride??!1}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDate?Gc(n.byDate,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDate&&n.byDate[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Qc(r.byDate):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDate?Object.keys(r.byDate).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?0:Hc(r.byDate,this.startDate,this.endDate)}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?[]:Object.keys(r.byDate).filter(s=>{const i=new Date(s),o=this.startDate?new Date(this.startDate):null,l=this.endDate?new Date(this.endDate):null;return o&&l&&i>=o&&i<=l}).flatMap(s=>r.byDate[s]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){this.clearCache(),await this.initialize(t)}clearCache(){this.#e.clear(),T(this.#n,[],!0),T(this.#s,null),this.#l&&localStorage.removeItem(this.#l),this.#v&&localStorage.removeItem(this.#v),console.log("[ProductsStore] Cache vidé")}destroy(){this.#h?.(),this.#h=null,this.#p&&(clearTimeout(this.#p),this.#p=null),console.log("[ProductsStore] Ressources nettoyées")}}const M=new tu;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ru={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var nu=Cl("<svg><!><!></svg>");function se(e,t){L(t,!0);const r=Bt(t,"color",3,"currentColor"),n=Bt(t,"size",3,24),s=Bt(t,"strokeWidth",3,2),i=Bt(t,"absoluteStrokeWidth",3,!1),o=Bt(t,"iconNode",19,()=>[]),l=ee(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=nu();sa(c,_=>({...ru,...l,width:n(),height:n(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(s())*24/Number(n()):s()]);var f=u(c);Le(f,17,o,Cs,(_,g)=>{var p=Q(()=>Da(a(g),2));let m=()=>a(p)[0],E=()=>a(p)[1];var w=B(),x=q(w);zl(x,m,!0,(D,$)=>{sa(D,()=>({...E()}))}),h(_,w)});var v=d(f);F(v,()=>t.children??J),h(e,c),j()}function ms(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];se(e,ne({name:"archive"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function su(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];se(e,ne({name:"bean"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function au(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];se(e,ne({name:"beef"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function iu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];se(e,ne({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function ou(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];se(e,ne({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function lu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];se(e,ne({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function cu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];se(e,ne({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function uu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];se(e,ne({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function du(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];se(e,ne({name:"circle-x"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function fu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];se(e,ne({name:"clock"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function vu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];se(e,ne({name:"cloud"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function Os(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];se(e,ne({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function hu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];se(e,ne({name:"egg"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function gs(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];se(e,ne({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function Pa(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];se(e,ne({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function pu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];se(e,ne({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function _u(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];se(e,ne({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function mu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];se(e,ne({name:"log-in"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function gu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];se(e,ne({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function bu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];se(e,ne({name:"message-circle"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function yu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];se(e,ne({name:"moon"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function pn(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];se(e,ne({name:"package"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function wu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];se(e,ne({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function Su(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];se(e,ne({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function $u(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];se(e,ne({name:"save"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function Pu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];se(e,ne({name:"search"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function bs(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];se(e,ne({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function fn(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];se(e,ne({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function ys(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];se(e,ne({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function Yi(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];se(e,ne({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function vn(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];se(e,ne({name:"store"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function Eu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];se(e,ne({name:"sun"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function xu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];se(e,ne({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function qs(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];se(e,ne({name:"user"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function Zi(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];se(e,ne({name:"users"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function Nu(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];se(e,ne({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function mt(e,t){L(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ee(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];se(e,ne({name:"x"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=B(),l=q(o);F(l,()=>t.children??J),h(s,o)},$$slots:{default:!0}})),j()}function Pn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:su};case"animaux":return{displayName:"Viandes et Poissons",icon:au};case"legumes":return{displayName:"Fruits et Légumes",icon:ou};case"sucres":return{displayName:"Sucrées",icon:iu};case"lof":return{displayName:"L.O.F",icon:hu};case"autres":return{displayName:"Autres",icon:lu};case"epices":return{displayName:"Assaisonnements",icon:pu};case"frais":return{displayName:"Produits Frais",icon:Su};default:return{displayName:e,icon:pn}}}function Ea(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Bs(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Vn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function ku(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Tu(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],i=n[t.sortColumn];return s<i?t.sortDirection==="asc"?-1:1:s>i?t.sortDirection==="asc"?1:-1:0}):e}function ws(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function xa(e){return e?Vn(e):"-"}function Au(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const s=n.status||"direct",i=n.unit||"unit",o=`${s}_${i}`;if(!r[o]){const l=ws(s);r[o]={status:s,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Du(s)}}return r[o].quantity+=n.quantity||0,r},{});return Object.values(t)}function Du(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ShoppingCart";case"pending":return"Clock";case"delivered":return"CircleCheck";case"cancelled":return"CircleX";default:return"Package"}}let Na=()=>localStorage.getItem("appwrite-user-name")||"";function Iu(e){let t=Z(!1),r=Z(null);const n=Q(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),M.getEnrichedProductById(e))),s=Q(()=>a(n)?.who??[]),i=Q(()=>a(n)?.stockArray??[]),o=Q(()=>a(n)?.purchases??[]),l=Q(()=>a(n)?.byDate?Yc(a(n).byDate):[]),c=Fe({purchase:{quantity:null,unit:"",store:"",who:Na()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});let f=Z(!1);As(()=>{!a(n)||a(f)||(c.purchase.quantity=a(n).missingQuantityArray[0]?.q??null,c.purchase.unit=a(n).totalNeededArray[0]?.u??"",c.purchase.store=a(n).storeInfo?.storeName??"",c.purchase.who=Na()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=a(n).totalNeededArray[0]?.u??"",c.store.name=a(n).storeInfo?.storeName??null,c.store.comment=a(n).storeInfo?.storeComment??null,T(f,!0))});let v=Z(null);const _=Q(()=>a(v)?a(o).find(b=>b.$id===a(v))??null:null);async function g(b,C){T(t,!0),T(r,null);try{const z=await b();return C&&p("success",C),z}catch(z){const ue=z instanceof Error?z.message:"Une erreur est survenue";return T(r,ue,!0),p("error",ue),console.error("[ProductModalState]",z),null}finally{T(t,!1)}}function p(b,C){const z=new CustomEvent("toast",{detail:{type:b,message:C}});window.dispatchEvent(z)}async function m(){a(n)&&await g(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!M.currentMainId)throw new Error("mainId non disponible");const{quantity:b,unit:C}=Ea(c.purchase.quantity,c.purchase.unit);a(n).isSynced||(console.log(`[ProductModalState] Produit ${a(n).$id} local, création pour purchase...`),await en(a(n).$id,{},z=>M.getEnrichedProductById(z))),await Vi({products:[a(n).$id],mainId:M.currentMainId,unit:C,quantity:b,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:c.purchase.status||"delivered",orderDate:c.purchase.orderDate||null,deliveryDate:c.purchase.deliveryDate||null}),c.purchase={quantity:a(n).missingQuantityArray[0]?.q??null,unit:a(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function E(b){T(v,b.$id,!0)}function w(){T(v,null)}async function x(b){b.$id&&await g(async()=>{const{quantity:C,unit:z}=Ea(b.quantity,b.unit);await Wi(b.$id,{unit:z,quantity:C,store:b.store||null,who:b.who||null,notes:b.notes||"",price:b.price||null,status:b.status||null,orderDate:b.orderDate||null,deliveryDate:b.deliveryDate||null}),T(v,null)},"Achat modifié avec succès")}async function D(b){const C=a(o).find(z=>z.$id===b);C&&confirm(`Supprimer cet achat (${C.quantity} ${C.unit}) ?`)&&await g(async()=>{await Ui(b)},"Achat supprimé avec succès")}async function $(){a(n)&&await g(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const b={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime},C=[...a(i),b];a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update stock normal...`),await _s(a(n).$id,JSON.stringify(C))):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création stock avec upsert...`),await en(a(n).$id,{stockReel:JSON.stringify(C)},z=>M.getEnrichedProductById(z))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Relevé de stock ajouté")}async function S(b){a(n)&&confirm("Supprimer ce relevé de stock ?")&&await g(async()=>{const C=a(i).filter((z,ue)=>ue!==b);await _s(a(n).$id,JSON.stringify(C))},"Relevé de stock supprimé")}async function P(b){!a(n)||!b.trim()||await g(async()=>{if(a(s).includes(b))throw new Error("Ce volontaire est déjà ajouté");const C=[...a(s),b.trim()];a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update normal...`),await ps(a(n).$id,C)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création avec upsert...`),await en(a(n).$id,{who:C},z=>M.getEnrichedProductById(z)))},"Volontaire ajouté")}async function k(b){a(n)&&confirm(`Retirer ${b} ?`)&&await g(async()=>{await ps(a(n).$id,a(s).filter(C=>C!==b))},"Volontaire retiré")}async function R(b){a(n)&&await g(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update store normal...`),await zi(a(n).$id,b)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création store avec upsert...`),await en(a(n).$id,{store:JSON.stringify(b)},C=>M.getEnrichedProductById(C)))},"Magasin mis à jour")}return{get loading(){return a(t)},get error(){return a(r)},get product(){return a(n)},get recipes(){return a(l)},get whoList(){return a(s)},get stockEntries(){return a(i)},get purchasesList(){return a(o)},get editingPurchaseId(){return a(v)},get editingPurchaseData(){return a(_)},forms:c,addPurchase:m,startEditPurchase:E,cancelEditPurchase:w,updateEditedPurchase:x,removePurchase:D,addStock:$,removeStock:S,addVolunteer:P,removeVolunteer:k,updateStore:R,formatQuantity:Bs,formatDate:Vn,formatDisplayQuantity:ku}}function Mu(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Cu(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Ru(e,t){t().cancelEditPurchase()}var Ou=N('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),qu=N('<span class="loading loading-spinner loading-sm"></span>'),Bu=N('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Lu=N('<span class="loading loading-spinner loading-sm"></span>'),ju=N('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),zu=(e,t,r)=>t(a(r)),Vu=(e,t,r)=>t(a(r).$id),Wu=N('<span class="loading loading-spinner loading-sm"></span>'),Uu=N('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Gu=N('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Hu=N(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Notes" maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Qu(e,t){L(t,!0);let r=Bt(t,"modalState",7);function n(){return r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function s(U){return U.quantity!==null&&U.quantity!==0&&U.unit?.trim()!==""}function i(U){r().removePurchase(U)}function o(U){r().startEditPurchase(U)}var l=Hu(),c=u(l),f=u(c);fn(f,{class:"h-5 w-5"});var v=d(c,2),_=u(v),g=d(u(_),2),p=u(g),m=u(p);pn(m,{class:"h-4 w-4 opacity-50"});var E=d(m,2),w=d(p,2),x=u(w);x.value=x.__value="";var D=d(x);D.value=D.__value="kg";var $=d(D);$.value=$.__value="gr.";var S=d($);S.value=S.__value="l.";var P=d(S);P.value=P.__value="ml";var k=d(P);k.value=k.__value="unité";var R=d(k);R.value=R.__value="bottes";var b=d(w,2),C=u(b);vn(C,{class:"h-4 w-4 opacity-50"});var z=d(C,2),ue=d(b,2),fe=u(ue);qs(fe,{class:"h-4 w-4 opacity-50"});var xe=d(fe,2),Ae=d(ue,2),De=d(u(Ae),2),K=d(g,2),ye=u(K),A=u(ye);bu(A,{class:"h-4 w-4 opacity-50"});var te=d(A,2),he=d(K,2),Pe=u(he),Ne=u(Pe),Ke=u(Ne),ct=u(Ke);ct.value=ct.__value="delivered";var ve=d(ct);ve.value=ve.__value="requested";var me=d(ve);me.value=me.__value="ordered";var Ue=d(Ne,2),je=d(Pe,2);{var Re=U=>{var Ie=Ou(),Rt=d(u(Ie),2);Be(Rt,()=>r().forms.purchase.deliveryDate,Ht=>r().forms.purchase.deliveryDate=Ht),h(U,Ie)};I(je,U=>{r().forms.purchase.status==="ordered"&&U(Re)})}var ze=d(he,2),we=u(ze);we.__click=[Mu,n,r];var V=u(we);{var oe=U=>{var Ie=qu();h(U,Ie)},Te=U=>{var Ie=ot("Ajouter l'achat");h(U,Ie)};I(V,U=>{r().loading?U(oe):U(Te,!1)})}var Ge=d(v,2);{var ut=U=>{var Ie=Bu(),Rt=u(Ie);fn(Rt,{class:"mx-auto mb-2 h-12 w-12"}),h(U,Ie)},Et=U=>{var Ie=Gu(),Rt=u(Ie),Ht=d(u(Rt));Le(Ht,21,()=>r().purchasesList,dt=>dt.$id,(dt,X,br)=>{var yr=B(),wr=q(yr);{var xt=rt=>{var Ot=ju(),qt=u(Ot),ft=u(qt),bt=u(ft),Qt=d(bt,2),Nt=u(Qt);Nt.value=Nt.__value="kg";var yt=d(Nt);yt.value=yt.__value="gr.";var Kt=d(yt);Kt.value=Kt.__value="l.";var Yt=d(Kt);Yt.value=Yt.__value="ml";var nr=d(Yt);nr.value=nr.__value="unité";var sr=d(nr);sr.value=sr.__value="bottes";var $r=d(qt),ar=u($r),Pr=d($r),Er=u(Pr),G=d(Pr),de=u(G),Xe=u(de);Xe.value=Xe.__value="requested";var He=d(Xe);He.value=He.__value="ordered";var Me=d(He);Me.value=Me.__value="delivered";var Oe=d(Me);Oe.value=Oe.__value="cancelled";var nt=d(G),_e=u(nt),Ee=d(nt),ge=u(Ee),Y=d(Ee),pe=u(Y),Se=d(Y),st=u(Se),at=d(Se),vt=u(at),wt=u(vt);wt.__click=[Cu,r,s];var Ye=u(wt);{var ht=le=>{var kt=Lu();h(le,kt)},Vr=le=>{$u(le,{class:"h-3 w-3"})};I(Ye,le=>{r().loading?le(ht):le(Vr,!1)})}var xr=d(wt,2);xr.__click=[Ru,r];var Wr=u(xr);mt(Wr,{class:"h-3 w-3"}),W(le=>wt.disabled=le,[()=>r().loading||!s(a(X))]),Be(bt,()=>a(X).quantity,le=>a(X).quantity=le),Xr(Qt,()=>a(X).unit,le=>a(X).unit=le),Be(ar,()=>a(X).store,le=>a(X).store=le),Be(Er,()=>a(X).who,le=>a(X).who=le),Xr(de,()=>a(X).status,le=>a(X).status=le),Be(_e,()=>a(X).orderDate,le=>a(X).orderDate=le),Be(ge,()=>a(X).deliveryDate,le=>a(X).deliveryDate=le),Be(pe,()=>a(X).price,le=>a(X).price=le),Be(st,()=>a(X).notes,le=>a(X).notes=le),h(rt,Ot)},Sr=rt=>{var Ot=Uu(),qt=u(Ot),ft=u(qt),bt=d(qt),Qt=u(bt),Nt=d(bt),yt=u(Nt),Kt=d(Nt),Yt=u(Kt),nr=u(Yt),sr=d(Kt),$r=u(sr),ar=d(sr),Pr=u(ar),Er=d(ar),G=u(Er),de=d(Er),Xe=u(de),He=d(de),Me=u(He),Oe=u(Me);Oe.__click=[zu,o,X];var nt=u(Oe);Yi(nt,{class:"h-4 w-4"});var _e=d(Oe,2);_e.__click=[Vu,i,X];var Ee=u(_e);{var ge=pe=>{var Se=Wu();h(pe,Se)},Y=pe=>{mt(pe,{class:"h-4 w-4"})};I(Ee,pe=>{r().loading?pe(ge):pe(Y,!1)})}W((pe,Se,st,at,vt)=>{O(ft,pe),O(Qt,a(X).store||"-"),O(yt,a(X).who||"-"),$e(Yt,1,`badge badge-sm ${Se??""}`),O(nr,st),O($r,at),O(Pr,vt),O(G,a(X).price?`${a(X).price}€`:"-"),O(Xe,a(X).notes||"-"),_e.disabled=r().loading},[()=>Bs(a(X).quantity,a(X).unit),()=>ws(a(X).status).class,()=>ws(a(X).status).text,()=>xa(a(X).orderDate),()=>xa(a(X).deliveryDate)]),h(rt,Ot)};I(wr,rt=>{r().editingPurchaseId===a(X).$id?rt(xt):rt(Sr,!1)})}h(dt,yr)}),h(U,Ie)};I(Ge,U=>{r().purchasesList.length===0?U(ut):U(Et,!1)})}W(U=>{$e(Ue,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),we.disabled=U},[()=>r().loading||!n()]),Be(E,()=>r().forms.purchase.quantity,U=>r().forms.purchase.quantity=U),Xr(w,()=>r().forms.purchase.unit,U=>r().forms.purchase.unit=U),Be(z,()=>r().forms.purchase.store,U=>r().forms.purchase.store=U),Be(xe,()=>r().forms.purchase.who,U=>r().forms.purchase.who=U),Be(De,()=>r().forms.purchase.price,U=>r().forms.purchase.price=U),Be(te,()=>r().forms.purchase.notes,U=>r().forms.purchase.notes=U),Xr(Ke,()=>r().forms.purchase.status,U=>r().forms.purchase.status=U),h(e,l),j()}Pt(["click"]);async function Ku(e,t){await t()?.addStock()}var Yu=N('<span class="loading loading-spinner loading-sm"></span>'),Zu=N('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Ju=N('<span class="loading loading-spinner loading-xs"></span>'),Xu=N('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),Fu=N('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),ed=N(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function td(e,t){L(t,!0);let r=Bt(t,"modalState",7),n=Q(()=>r()&&r().forms.stock.quantity&&r().forms.stock.quantity>0&&r().forms.stock.unit);async function s(K){await r()?.removeStock(K)}var i=ed(),o=u(i),l=u(o);ms(l,{class:"h-5 w-5"});var c=d(o,2),f=u(c),v=d(u(f),2),_=u(v),g=u(_);pn(g,{class:"h-4 w-4 opacity-50"});var p=d(g,2),m=d(_,2),E=u(m);E.value=E.__value="";var w=d(E);w.value=w.__value="kg";var x=d(w);x.value=x.__value="gr.";var D=d(x);D.value=D.__value="l.";var $=d(D);$.value=$.__value="ml";var S=d($);S.value=S.__value="unité";var P=d(S);P.value=P.__value="bottes";var k=d(v,2),R=u(k),b=d(k,2),C=u(b);C.__click=[Ku,r];var z=u(C);{var ue=K=>{var ye=Yu();h(K,ye)},fe=K=>{var ye=ot("Ajouter au stock");h(K,ye)};I(z,K=>{r().loading?K(ue):K(fe,!1)})}var xe=d(c,2);{var Ae=K=>{var ye=Zu(),A=u(ye);ms(A,{class:"mx-auto mb-2 h-12 w-12"}),h(K,ye)},De=K=>{var ye=Fu(),A=u(ye),te=d(u(A));Le(te,23,()=>r().stockEntries,he=>he.dateTime,(he,Pe,Ne)=>{var Ke=Xu(),ct=u(Ke),ve=u(ct),me=d(ct),Ue=u(me),je=d(me),Re=u(je),ze=d(je),we=u(ze);we.__click=()=>s(a(Ne));var V=u(we);{var oe=Ge=>{var ut=Ju();h(Ge,ut)},Te=Ge=>{var ut=ot("Supprimer");h(Ge,ut)};I(V,Ge=>{r().loading?Ge(oe):Ge(Te,!1)})}W(Ge=>{O(ve,`${a(Pe).quantity??""}
                ${a(Pe).unit??""}`),O(Ue,Ge),O(Re,a(Pe).notes||"-"),we.disabled=r().loading},[()=>Vn(a(Pe).dateTime)]),h(he,Ke)}),h(K,ye)};I(xe,K=>{r().stockEntries.length===0?K(Ae):K(De,!1)})}W(()=>{Rs(R,`          ${r().forms.stock.notes??""}
        `),C.disabled=r().loading||!a(n)}),Be(p,()=>r().forms.stock.quantity,K=>r().forms.stock.quantity=K),Xr(m,()=>r().forms.stock.unit,K=>r().forms.stock.unit=K),Be(R,()=>r().forms.stock.notes,K=>r().forms.stock.notes=K),h(e,i),j()}Pt(["click"]);var rd=(e,t)=>{e.key==="Enter"&&t()},nd=N("<option> </option>"),sd=(e,t,r)=>t(r),ad=N('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),id=N('<span class="loading loading-spinner loading-sm"></span>'),od=N('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function ld(e,t){L(t,!0);let r=Z("");const n=Q(()=>a(r).trim().length>0&&!t.modalState.whoList.includes(a(r).trim()));async function s(){!a(n)||!t.modalState||(await t.modalState.addVolunteer(a(r).trim()),T(r,""))}async function i(S){await t.modalState?.removeVolunteer(S)}var o=od(),l=u(o),c=u(l),f=d(u(c),2),v=u(f);qs(v,{class:"h-4 w-4 opacity-50"});var _=d(v,2);_.__keydown=[rd,s];var g=d(_,2);Le(g,21,()=>M.uniqueWho,Cs,(S,P)=>{var k=nd(),R=u(k),b={};W(()=>{O(R,a(P)),b!==(b=a(P))&&(k.value=(k.__value=a(P))??"")}),h(S,k)});var p=d(f,2),m=d(u(p),2);Le(m,20,()=>t.modalState.whoList,S=>S,(S,P)=>{var k=ad(),R=u(k),b=d(R);b.__click=[sd,i,P];var C=u(b);mt(C,{class:"h-3 w-3"}),W(()=>{O(R,`${P??""} `),b.disabled=t.modalState.loading}),h(S,k)});var E=d(p,2),w=u(E);w.__click=s;var x=u(w);{var D=S=>{var P=id();h(S,P)},$=S=>{var P=ot("Ajouter");h(S,P)};I(x,S=>{t.modalState.loading?S(D):S($,!1)})}W(()=>w.disabled=t.modalState.loading||!a(n)),Be(_,()=>a(r),S=>T(r,S)),h(e,o),j()}Pt(["keydown","click"]);var cd=(e,t)=>{e.key==="Enter"&&t()},ud=N("<option> </option>"),dd=N('<span class="loading loading-spinner loading-sm"></span>'),fd=(e,t,r)=>{T(t,""),T(r,"")},vd=N(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function hd(e,t){L(t,!0);const r=Q(()=>t.modalState.forms.store),n=Q(()=>a(r).name||""),s=Q(()=>a(r).comment||"");let i=Z(Fe(a(n))),o=Z(Fe(a(s)));const l=Q(()=>a(i).trim()!==(a(r).name||"")||a(o).trim()!==(a(r).comment||""));async function c(){if(!a(l))return;const b={storeName:a(i).trim(),storeComment:a(o).trim()};await t.modalState.updateStore(b)}var f=vd(),v=u(f),_=u(v),g=d(u(_),4),p=u(g),m=u(p);vn(m,{class:"h-4 w-4 opacity-50"});var E=d(m,2);E.__keydown=[cd,c];var w=d(E,2);Le(w,21,()=>M.uniqueStores,Cs,(b,C)=>{var z=ud(),ue=u(z),fe={};W(()=>{O(ue,a(C)),fe!==(fe=a(C))&&(z.value=(z.__value=a(C))??"")}),h(b,z)});var x=d(p,2),D=d(g,2),$=u(D);$.__click=c;var S=u($);{var P=b=>{var C=dd();h(b,C)},k=b=>{var C=ot("Mettre à jour");h(b,C)};I(S,b=>{t.modalState.loading?b(P):b(k,!1)})}var R=d($,2);R.__click=[fd,i,o],W(()=>{Rs(x,`          ${a(o)??""}
        `),$.disabled=t.modalState.loading||!a(l),R.disabled=t.modalState.loading}),Be(E,()=>a(i),b=>T(i,b)),Be(x,()=>a(o),b=>T(o,b)),h(e,f),j()}Pt(["keydown","click"]);var pd=N('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),_d=N('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),md=N('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),gd=N('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>');function bd(e,t){L(t,!0);const r=Q(()=>t.modalState.recipes);var n=gd(),s=u(n),i=u(s);Os(i,{class:"h-5 w-5"});var o=d(s,2);{var l=f=>{var v=pd(),_=u(v);pn(_,{class:"mx-auto mb-2 h-12 w-12"}),h(f,v)},c=f=>{var v=md(),_=u(v),g=d(u(_));Le(g,21,()=>a(r),p=>p.r,(p,m)=>{var E=_d(),w=u(E),x=u(w),D=d(w),$=u(D),S=d(D),P=u(S);W(k=>{O(x,`${a(m).r??""} (${(a(m).a||"-")??""} c.)`),O($,`${(a(m).q||a(m).qEq)??""} ${(a(m).u||a(m).uEq)??""}`),O(P,k)},[()=>Vn(a(m).date)]),h(p,E)}),h(f,v)};I(o,f=>{a(r).length===0?f(l):f(c,!1)})}h(e,n),j()}var yd=N('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),wd=N('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Sd=(e,t)=>t("recettes"),$d=N('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Pd=N('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Ed=(e,t)=>t("achats"),xd=N('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Nd=N('<span class="badge badge-sm badge-ghost ml-1">0</span>'),kd=(e,t)=>t("stock"),Td=N('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Ad=N('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Dd=(e,t)=>t("volontaires"),Id=N('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Md=N('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Cd=(e,t)=>t("magasins"),Rd=N('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Od=N('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div>',1),qd=N('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Bd(e,t){L(t,!0);let r=Bt(t,"initialTab",3,"recettes"),n=Q(()=>Iu(t.productId)),s=Z(Fe(r()));function i(w){T(s,w,!0)}var o=qd(),l=u(o),c=u(l),f=u(c);{var v=w=>{var x=yd(),D=q(x),$=u(D),S=d(D,2),P=u(S),k=u(P),R=d(P,2),b=d(u(R));W(()=>{O($,a(n).product?.productName),O(k,a(n).product?.productType),O(b,` ${a(n).product?.displayTotalNeeded??""}`)}),h(w,x)},_=w=>{var x=wd();h(w,x)};I(f,w=>{a(n)&&a(n).product?w(v):w(_,!1)})}var g=d(f,2);g.__click=function(...w){t.onClose?.apply(this,w)};var p=u(g);mt(p,{class:"h-4 w-4"});var m=d(c,2);{var E=w=>{var x=Od(),D=q(x),$=u(D);$.__click=[Sd,i];var S=u($);Os(S,{class:"mr-1 h-5 w-5"});var P=d(S,2);{var k=V=>{var oe=$d(),Te=u(oe);W(()=>O(Te,a(n).product?.nbRecipes)),h(V,oe)},R=V=>{var oe=Pd();h(V,oe)};I(P,V=>{a(n).product?.nbRecipes&&a(n).product?.nbRecipes>0?V(k):V(R,!1)})}var b=d($,2);b.__click=[Ed,i];var C=u(b);fn(C,{class:"mr-1 h-5 w-5"});var z=d(C,2);{var ue=V=>{var oe=xd(),Te=u(oe);W(()=>O(Te,a(n).purchasesList.length)),h(V,oe)},fe=V=>{var oe=Nd();h(V,oe)};I(z,V=>{a(n).purchasesList.length>0?V(ue):V(fe,!1)})}var xe=d(b,2);xe.__click=[kd,i];var Ae=u(xe);ms(Ae,{class:"mr-1 h-5 w-5"});var De=d(Ae,2);{var K=V=>{var oe=Td(),Te=u(oe);W(()=>O(Te,a(n).stockEntries.length)),h(V,oe)},ye=V=>{var oe=Ad();h(V,oe)};I(De,V=>{a(n).stockEntries.length>0?V(K):V(ye,!1)})}var A=d(xe,2);A.__click=[Dd,i];var te=u(A);Zi(te,{class:"mr-1 h-5 w-5"});var he=d(te,2);{var Pe=V=>{var oe=Id(),Te=u(oe);W(()=>O(Te,a(n).product?.who.length)),h(V,oe)},Ne=V=>{var oe=Md();h(V,oe)};I(he,V=>{a(n).product?.who&&a(n).product?.who.length>0?V(Pe):V(Ne,!1)})}var Ke=d(A,2);Ke.__click=[Cd,i];var ct=u(Ke);vn(ct,{class:"mr-1 h-5 w-5"});var ve=d(D,2),me=u(ve);{var Ue=V=>{var oe=Rd(),Te=u(oe);mt(Te,{class:"h-4 w-4"});var Ge=d(Te,2),ut=u(Ge);W(()=>O(ut,`erreur : ${a(n).error??""}`)),h(V,oe)};I(me,V=>{a(n).error&&V(Ue)})}var je=d(me,2),Re=u(je);Bl(Re,()=>a(s),V=>{var oe=B(),Te=q(oe);{var Ge=Et=>{bd(Et,{get modalState(){return a(n)}})},ut=Et=>{var U=B(),Ie=q(U);{var Rt=dt=>{Qu(dt,{get modalState(){return a(n)}})},Ht=dt=>{var X=B(),br=q(X);{var yr=xt=>{td(xt,{get modalState(){return a(n)}})},wr=xt=>{var Sr=B(),rt=q(Sr);{var Ot=ft=>{ld(ft,{get modalState(){return a(n)}})},qt=ft=>{var bt=B(),Qt=q(bt);{var Nt=yt=>{hd(yt,{get modalState(){return a(n)}})};I(Qt,yt=>{a(s)==="magasins"&&yt(Nt)},!0)}h(ft,bt)};I(rt,ft=>{a(s)==="volontaires"?ft(Ot):ft(qt,!1)},!0)}h(xt,Sr)};I(br,xt=>{a(s)==="stock"?xt(yr):xt(wr,!1)},!0)}h(dt,X)};I(Ie,dt=>{a(s)==="achats"?dt(Rt):dt(Ht,!1)},!0)}h(Et,U)};I(Te,Et=>{a(s)==="recettes"?Et(Ge):Et(ut,!1)})}h(V,oe)});var ze=d(ve,2),we=u(ze);we.__click=function(...V){t.onClose?.apply(this,V)},W(()=>{$e($,1,`tab ${a(s)==="recettes"?"tab-active":""}`),$e(b,1,`tab ${a(s)==="achats"?"tab-active":""}`),$e(xe,1,`tab ${a(s)==="stock"?"tab-active":""}`),$e(A,1,`tab ${a(s)==="volontaires"?"tab-active":""}`),$e(Ke,1,`tab ${a(s)==="magasins"?"tab-active":""}`)}),h(w,x)};I(m,w=>{a(n)&&w(E)})}h(e,o),j()}Pt(["click"]);var Ld=()=>M.setGroupBy("none"),jd=()=>M.setGroupBy("store"),zd=()=>M.setGroupBy("productType"),Vd=(e,t)=>M.toggleProductType(t),Wd=N("<button><!> </button>"),Ud=()=>M.toggleTemperature("frais"),Gd=()=>M.toggleTemperature("surgele"),Hd=()=>M.clearTypeAndTemperatureFilters(),Qd=N('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Kd=(e,t)=>M.toggleStore(t),Yd=N("<button> </button>"),Zd=N('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Jd=(e,t)=>M.toggleWho(t),Xd=N("<button> </button>"),Fd=N('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),ef=(e,t)=>{M.clearFilters(),T(t,!1)},tf=N('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function rf(e,t){L(t,!0);let r=Z(!1);const n=Q(()=>M.filters),s=Q(()=>M.uniqueStores),i=Q(()=>M.uniqueWho),o=Q(()=>M.uniqueProductTypes);var l=tf(),c=q(l),f=u(c),v=d(f,2),_=d(u(v),2),g=u(_),p=u(g),m=u(p);gs(m,{class:"w-5 h-5"});var E=d(p,2),w=u(E);mt(w,{class:"w-4 h-4"});var x=d(g,2),D=d(u(x),2),$=u(D);$.__change=[Ld];var S=d($,2);S.__change=[jd];var P=d(S,2);P.__change=[zd];var k=d(x,2),R=u(k),b=d(u(R),2);Le(b,20,()=>a(o),ve=>ve,(ve,me)=>{const Ue=Q(()=>Pn(me));var je=Wd();je.__click=[Vd,me];var Re=u(je);Jr(Re,()=>a(Ue).icon,(we,V)=>{V(we,{class:"w-3 h-3 mr-1"})});var ze=d(Re);W(we=>{$e(je,1,`btn btn-sm ${we??""}`),O(ze,` ${a(Ue).displayName??""}`)},[()=>a(n).selectedProductTypes.length===0?"btn-soft btn-accent":a(n).selectedProductTypes.includes(me)?"btn-accent":"btn-dash btn-accent"]),h(ve,je)});var C=d(b,2),z=u(C);z.__click=[Ud];var ue=u(z);bs(ue,{class:"w-3 h-3"});var fe=d(z,2);fe.__click=[Gd];var xe=u(fe);ys(xe,{class:"w-3 h-3"});var Ae=d(fe,2);{var De=ve=>{var me=Qd();me.__click=[Hd];var Ue=u(me);mt(Ue,{class:"w-3 h-3"}),h(ve,me)};I(Ae,ve=>{(a(n).selectedProductTypes.length>0||a(n).selectedTemperatures.length>0)&&ve(De)})}var K=d(k,2);{var ye=ve=>{var me=Zd(),Ue=u(me),je=d(u(Ue),2);Le(je,20,()=>a(s),Re=>Re,(Re,ze)=>{var we=Yd();we.__click=[Kd,ze];var V=u(we);W(oe=>{$e(we,1,`btn btn-sm ${oe??""}`),O(V,ze)},[()=>a(n).selectedStores.length===0?"btn-soft btn-accent":a(n).selectedStores.includes(ze)?"btn-accent":"btn-dash btn-accent"]),h(Re,we)}),h(ve,me)};I(K,ve=>{a(s).length>0&&ve(ye)})}var A=d(K,2);{var te=ve=>{var me=Fd(),Ue=u(me),je=d(u(Ue),2);Le(je,20,()=>a(i),Re=>Re,(Re,ze)=>{var we=Xd();we.__click=[Jd,ze];var V=u(we);W(oe=>{$e(we,1,`btn btn-sm ${oe??""}`),O(V,ze)},[()=>a(n).selectedWho.length===0?"btn-soft btn-accent":a(n).selectedWho.includes(ze)?"btn-accent":"btn-dash btn-accent"]),h(Re,we)}),h(ve,me)};I(A,ve=>{a(i).length>0&&ve(te)})}var he=d(A,4);he.__click=[ef,r];var Pe=u(he);mt(Pe,{class:"w-4 h-4 mr-2"});var Ne=d(c,2),Ke=u(Ne),ct=u(Ke);gs(ct,{class:"w-6 h-6"}),W((ve,me)=>{Dr($,a(n).groupBy==="none"),Dr(S,a(n).groupBy==="store"),Dr(P,a(n).groupBy==="productType"),$e(z,1,`btn btn-sm ${ve??""}`),$e(fe,1,`btn btn-sm ${me??""}`)},[()=>a(n).selectedTemperatures.length===0?"btn-soft btn-success":a(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(n).selectedTemperatures.length===0?"btn-soft btn-info":a(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Yl(f,()=>a(r),ve=>T(r,ve)),h(e,l),j()}Pt(["change","click"]);Pt(["mousedown"]);var nf=(e,t,r)=>t(r),sf=N("<button><span> </span> <!></button>"),af=(e,t)=>t(),of=N('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1"><!> <button class="btn btn-sm btn-primary btn-outline ms-4" type="button"><span>Toutes les dates</span></button></div></fieldset></div></div>');function lf(e,t){L(t,!0);const n=[...Bt(t,"allDates",19,()=>[])()].sort();let s=n[0],i=n[n.length-1],o=Z(Fe(s)),l=Z(Fe(i));function c($){a(o)===$&&a(l)===$?g():new Date($)<new Date(a(o))?T(o,$,!0):(new Date($)>new Date(a(l))||T(o,$,!0),T(l,$,!0))}function f($){return new Date($)>=new Date(a(o))&&new Date($)<=new Date(a(l))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function v($){return new Date($).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function _($){const P=new Date($).getUTCHours();return P===12?"sun":P===20?"moon":P===8?"cloud":null}function g(){T(o,s,!0),T(l,i,!0)}As(()=>{M.setDateRange(a(o),a(l))});var p=of(),m=u(p),E=u(m),w=d(u(E),2),x=u(w);Le(x,18,()=>n,$=>$,($,S)=>{var P=sf();P.__click=[nf,c,S];var k=u(P),R=u(k),b=d(k,2);{var C=ue=>{Eu(ue,{size:16})},z=ue=>{var fe=B(),xe=q(fe);{var Ae=K=>{yu(K,{size:16})},De=K=>{var ye=B(),A=q(ye);{var te=he=>{vu(he,{size:16})};I(A,he=>{_(S)==="cloud"&&he(te)},!0)}h(K,ye)};I(xe,K=>{_(S)==="moon"?K(Ae):K(De,!1)},!0)}h(ue,fe)};I(b,ue=>{_(S)==="sun"?ue(C):ue(z,!1)})}W((ue,fe)=>{$e(P,1,`btn btn-sm ${ue??""}`),O(R,fe)},[()=>f(S),()=>v(S)]),h($,P)});var D=d(x,2);D.__click=[af,g],h(e,p),j()}Pt(["click"]);const Yr=e=>{var t=cf(),r=u(t);Yi(r,{class:"h-4 w-4 text-amber-600"}),h(e,t)};var cf=N('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),uf=()=>M.clearFilters(),df=e=>M.setSearchQuery(e.currentTarget.value),ff=()=>M.setGroupBy("none"),vf=()=>M.setGroupBy("store"),hf=()=>M.setGroupBy("productType"),pf=(e,t)=>M.toggleProductType(t),_f=N("<button><!> </button>"),mf=()=>M.toggleTemperature("frais"),gf=()=>M.toggleTemperature("surgele"),bf=()=>M.clearTypeAndTemperatureFilters(),yf=N('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),wf=N('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),Sf=(e,t)=>M.toggleStore(t),$f=N("<button><!> </button>"),Pf=()=>M.clearStoreFilters(),Ef=N('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),xf=N('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Nf=(e,t)=>M.toggleWho(t),kf=N("<button><!> </button>"),Tf=()=>M.clearWhoFilters(),Af=N('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Df=N('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),If=()=>M.handleSort("productName"),Mf=()=>M.handleSort("store"),Cf=()=>M.handleSort("who"),Rf=()=>M.handleSort("productType"),Of=N('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),qf=N('<tr class="bg-base-200 sticky top-10 z-10 font-semibold"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Bf=(e,t,r)=>t(a(r).$id,"recettes"),Lf=N('<div class="text-base-content/60 text-xs"> </div>'),jf=N('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),zf=N('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Vf=(e,t,r)=>t(a(r).$id,"magasins"),Wf=N('<div class="tooltip tooltip-info"> </div>'),Uf=(e,t,r)=>t(a(r).$id,"volontaires"),Gf=N('<span class="badge badge-soft badge-info badge-sm"> </span>'),Hf=N('<div class="flex flex-wrap gap-1 pr-8"></div>'),Qf=(e,t,r)=>t(a(r).$id,"recettes"),Kf=N('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Yf=(e,t,r)=>t(a(r).$id,"achats"),Zf=N("<div><!> <span> </span></div>"),Jf=N('<span class="text-sm">-</span>'),Xf=N('<div class="bg-warning m-auto rounded px-2 py-1"> </div>'),Ff=N('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),ev=N("<!> <!>",1),tv=N('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),rv=N('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><!> <div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function nv(e,t){L(t,!0);const r={Package:pn,MessageCircleQuestionMark:gu,ShoppingCart:fn,Clock:fu,CircleCheck:uu,CircleX:du},n=Q(()=>M.displayProducts),s=Q(()=>M.stats),i=Q(()=>M.uniqueStores),o=Q(()=>M.uniqueWho),l=Q(()=>M.uniqueProductTypes),c=Q(()=>M.filters);let f=Z(null),v=Z("recettes");function _(G,de="recettes"){T(v,de,!0),T(f,G,!0)}function g(){T(f,null)}var p=rv(),m=q(p),E=u(m),w=u(E),x=u(w);Pa(x,{class:"mr-1 h-4 w-4"});var D=d(x),$=d(E,2),S=u($),P=u(S),k=u(P),R=u(k);gs(R,{class:"h-5 w-5"});var b=d(k,2);b.__click=[uf];var C=u(b);mt(C,{class:"h-4 w-4"});var z=d(S,2),ue=u(z),fe=d(u(ue),2),xe=u(fe);Pu(xe,{class:"h-4 w-4"});var Ae=d(xe,2);Ae.__input=[df];var De=d(ue,2),K=d(u(De),2),ye=u(K);ye.__change=[ff];var A=d(ye,2);A.__change=[vf];var te=d(A,2);te.__change=[hf];var he=d(z,2),Pe=u(he);lf(Pe,{get allDates(){return M.allDates}});var Ne=d(Pe,2),Ke=u(Ne);{var ct=G=>{var de=wf(),Xe=u(de),He=d(u(Xe),2),Me=u(He);Le(Me,16,()=>a(l),pe=>pe,(pe,Se)=>{const st=Q(()=>Pn(Se));var at=_f();at.__click=[pf,Se];var vt=u(at);Jr(vt,()=>a(st).icon,(Ye,ht)=>{ht(Ye,{class:"mr-1 h-5 w-5"})});var wt=d(vt);W(Ye=>{$e(at,1,`btn btn-sm ${Ye??""}`),O(wt,` ${a(st).displayName??""}`)},[()=>a(c).selectedProductTypes.length===0?"btn-soft btn-accent":a(c).selectedProductTypes.includes(Se)?"btn-accent":"btn-dash btn-accent"]),h(pe,at)});var Oe=d(Me,2);Oe.__click=[mf];var nt=u(Oe);bs(nt,{class:"h-5 w-5"});var _e=d(Oe,2);_e.__click=[gf];var Ee=u(_e);ys(Ee,{class:"h-5 w-5"});var ge=d(_e,2);{var Y=pe=>{var Se=yf();Se.__click=[bf];var st=u(Se);mt(st,{class:"h-3 w-3"}),h(pe,Se)};I(ge,pe=>{(a(c).selectedProductTypes.length>0||a(c).selectedTemperatures.length>0)&&pe(Y)})}W((pe,Se)=>{$e(Oe,1,`btn btn-sm ms-4 ${pe??""}`),$e(_e,1,`btn btn-sm ${Se??""}`)},[()=>a(c).selectedTemperatures.length===0?"btn-soft btn-success":a(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(c).selectedTemperatures.length===0?"btn-soft btn-info":a(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(G,de)};I(Ke,G=>{a(l).length>0&&G(ct)})}var ve=d(Ne,2),me=u(ve);{var Ue=G=>{var de=xf(),Xe=u(de),He=d(u(Xe),2),Me=u(He);Le(Me,16,()=>a(i),_e=>_e,(_e,Ee)=>{var ge=$f();ge.__click=[Sf,Ee];var Y=u(ge);vn(Y,{class:"mr-1 h-3 w-3"});var pe=d(Y);W(Se=>{$e(ge,1,`btn btn-xs ${Se??""}`),O(pe,` ${Ee??""}`)},[()=>a(c).selectedStores.length===0?"btn-soft btn-accent":a(c).selectedStores.includes(Ee)?"btn-accent":"btn-dash btn-accent"]),h(_e,ge)});var Oe=d(Me,2);{var nt=_e=>{var Ee=Ef();Ee.__click=[Pf];var ge=u(Ee);mt(ge,{class:"h-3 w-3"}),h(_e,Ee)};I(Oe,_e=>{a(c).selectedStores.length>0&&_e(nt)})}h(G,de)};I(me,G=>{a(i).length>0&&G(Ue)})}var je=d(me,2);{var Re=G=>{var de=Df(),Xe=u(de),He=d(u(Xe),2),Me=u(He);Le(Me,16,()=>a(o),_e=>_e,(_e,Ee)=>{var ge=kf();ge.__click=[Nf,Ee];var Y=u(ge);qs(Y,{class:"mr-1 h-3 w-3"});var pe=d(Y);W(Se=>{$e(ge,1,`btn btn-xs ${Se??""}`),O(pe,` ${Ee??""}`)},[()=>a(c).selectedWho.length===0?" btn-soft btn-info":a(c).selectedWho.includes(Ee)?" btn-info":"btn-dash btn-info"]),h(_e,ge)});var Oe=d(Me,2);{var nt=_e=>{var Ee=Af();Ee.__click=[Tf];var ge=u(Ee);mt(ge,{class:"h-3 w-3"}),h(_e,Ee)};I(Oe,_e=>{a(c).selectedWho.length>0&&_e(nt)})}h(G,de)};I(je,G=>{a(o).length>0&&G(Re)})}var ze=d($,2),we=u(ze),V=u(we),oe=u(V),Te=u(oe);Te.__click=[If];var Ge=u(Te),ut=u(Ge);Pa(ut,{class:"h-4 w-4"});var Et=d(ut,2);{var U=G=>{var de=ot();W(()=>O(de,a(c).sortDirection==="asc"?"↑":"↓")),h(G,de)};I(Et,G=>{a(c).sortColumn==="productName"&&G(U)})}var Ie=d(Te);Ie.__click=[Mf];var Rt=u(Ie),Ht=u(Rt);vn(Ht,{class:"h-4 w-4"});var dt=d(Ht,2);{var X=G=>{var de=ot();W(()=>O(de,a(c).sortDirection==="asc"?"↑":"↓")),h(G,de)};I(dt,G=>{a(c).sortColumn==="store"&&G(X)})}var br=d(Ie);br.__click=[Cf];var yr=u(br),wr=u(yr);Zi(wr,{class:"h-4 w-4"});var xt=d(wr,2);{var Sr=G=>{var de=ot();W(()=>O(de,a(c).sortDirection==="asc"?"↑":"↓")),h(G,de)};I(xt,G=>{a(c).sortColumn==="who"&&G(Sr)})}var rt=d(br);rt.__click=[Rf];var Ot=u(rt),qt=d(u(Ot));{var ft=G=>{var de=ot();W(()=>O(de,a(c).sortDirection==="asc"?"↑":"↓")),h(G,de)};I(qt,G=>{a(c).sortColumn==="productType"&&G(ft)})}var bt=d(rt,2),Qt=u(bt),Nt=u(Qt);fn(Nt,{class:"h-4 w-4"});var yt=d(bt),Kt=u(yt),Yt=u(Kt);_u(Yt,{class:"h-4 w-4"});var nr=d(V);Le(nr,21,()=>Object.entries(a(n)),([G,de])=>G,(G,de)=>{var Xe=Q(()=>Da(a(de),2));let He=()=>a(Xe)[0],Me=()=>a(Xe)[1];var Oe=ev(),nt=q(Oe);{var _e=ge=>{const Y=Q(()=>Pn(He()));var pe=qf(),Se=u(pe),st=u(Se),at=u(st);{var vt=Ye=>{var ht=ot();W(()=>O(ht,`🏪 ${He()??""} (${Me().length??""})`)),h(Ye,ht)},wt=Ye=>{var ht=B(),Vr=q(ht);{var xr=le=>{var kt=Of(),_n=u(kt);Jr(_n,()=>a(Y).icon,(gn,Gn)=>{Gn(gn,{class:"h-4 w-4"})});var mn=d(_n,2),Wn=u(mn),Un=d(mn,2),Nr=u(Un);W(()=>{O(Wn,a(Y).displayName),O(Nr,`(${Me().length??""})`)}),h(le,kt)},Wr=le=>{var kt=ot();W(()=>O(kt,`📦 ${He()??""} (${Me().length??""})`)),h(le,kt)};I(Vr,le=>{a(c).groupBy==="productType"?le(xr):le(Wr,!1)},!0)}h(Ye,ht)};I(at,Ye=>{a(c).groupBy==="store"?Ye(vt):Ye(wt,!1)})}h(ge,pe)};I(nt,ge=>{He()!==""&&ge(_e)})}var Ee=d(nt,2);Le(Ee,17,()=>Tu(Me(),a(c)),ge=>ge.$id,(ge,Y)=>{const pe=Q(()=>M.getFormattedTotalNeeded(a(Y).$id)),Se=Q(()=>Pn(a(Y).productType)),st=Q(()=>Au(a(Y).purchases||[]));var at=Ff(),vt=u(at);vt.__click=[Bf,_,Y];var wt=u(vt),Ye=u(wt),ht=u(Ye),Vr=u(ht),xr=d(ht,2);{var Wr=H=>{var ce=Lf(),qe=u(ce);W(()=>O(qe,`Ancien: ${a(Y).previousNames[0]??""}`)),h(H,ce)};I(xr,H=>{a(Y).previousNames&&a(Y).previousNames.length>0&&H(Wr)})}var le=d(Ye,2),kt=u(le);{var _n=H=>{var ce=jf(),qe=u(ce);bs(qe,{class:"text-success h-4 w-4"}),h(H,ce)};I(kt,H=>{a(Y).pFrais&&H(_n)})}var mn=d(kt,2);{var Wn=H=>{var ce=zf(),qe=u(ce);ys(qe,{class:"text-info h-4 w-4"}),h(H,ce)};I(mn,H=>{a(Y).pSurgel&&H(Wn)})}var Un=d(wt,2);Yr(Un);var Nr=d(vt);Nr.__click=[Vf,_,Y];var gn=u(Nr);{var Gn=H=>{var ce=Wf(),qe=u(ce);W(()=>{kn(ce,"data-tip",a(Y).storeInfo.storeComment),O(qe,a(Y).storeInfo.storeName||"-")}),h(H,ce)},Ji=H=>{var ce=ot();W(()=>O(ce,a(Y).storeInfo?.storeName||"-")),h(H,ce)};I(gn,H=>{a(Y).storeInfo?.storeComment?H(Gn):H(Ji,!1)})}var Xi=d(gn,2);Yr(Xi);var Hn=d(Nr);Hn.__click=[Uf,_,Y];var Ls=u(Hn);{var Fi=H=>{var ce=Hf();Le(ce,20,()=>a(Y).who,qe=>qe,(qe,Zt)=>{var ir=Gf(),Ur=u(ir);W(()=>O(Ur,Zt)),h(qe,ir)}),h(H,ce)},eo=H=>{var ce=ot("-");h(H,ce)};I(Ls,H=>{a(Y).who&&a(Y).who.length>0?H(Fi):H(eo,!1)})}var to=d(Ls,2);Yr(to);var Qn=d(Hn),ro=u(Qn),js=u(ro);Jr(js,()=>a(Se).icon,(H,ce)=>{ce(H,{class:"h-3 w-3"})});var no=d(js),Kn=d(Qn);Kn.__click=[Qf,_,Y];var zs=u(Kn),so=u(zs),Vs=d(zs,2);{var ao=H=>{var ce=Kf(),qe=u(ce),Zt=u(qe),ir=d(Zt);Os(ir,{class:"h-3 w-3"});var Ur=d(qe,2),bn=u(Ur),Gr=d(bn);Nu(Gr,{class:"h-3 w-3"}),W(()=>{O(Zt,`${a(Y)?.nbRecipes??""} `),O(bn,`${a(Y)?.totalAssiettes??""} `)}),h(H,ce)};I(Vs,H=>{(a(Y).nbRecipes||a(Y).totalAssiettes)&&H(ao)})}var io=d(Vs,2);Yr(io);var Yn=d(Kn);Yn.__click=[Yf,_,Y];var Ws=u(Yn),Us=u(Ws);Le(Us,17,()=>a(st),H=>H.status,(H,ce)=>{const qe=Q(()=>r[a(ce).icon]);var Zt=Zf(),ir=u(Zt);Jr(ir,()=>a(qe),(Gr,po)=>{po(Gr,{class:"h-4 w-4"})});var Ur=d(ir,2),bn=u(Ur);W(Gr=>{$e(Zt,1,`badge badge-soft flex items-center gap-2 ${a(ce).badgeClass??""}`),O(bn,Gr)},[()=>Bs(a(ce).quantity,a(ce).unit)]),h(H,Zt)});var oo=d(Us,2);{var lo=H=>{var ce=Jf();h(H,ce)};I(oo,H=>{a(st).length===0&&H(lo)})}var co=d(Ws,2);Yr(co);var uo=d(Yn),fo=u(uo);{var vo=H=>{var ce=Xf(),qe=u(ce);W(()=>O(qe,a(Y).displayMissingQuantity)),h(H,ce)},ho=H=>{cu(H,{size:28,strokeWidth:3,class:"text-success m-auto"})};I(fo,H=>{a(Y).displayMissingQuantity!=="✅ Complet"?H(vo):H(ho,!1)})}W(()=>{O(Vr,a(Y).productName),$e(Nr,1,`${a(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),$e(Qn,1,mi(a(c).groupBy==="productType"?"hidden":"")),O(no,` ${a(Se).displayName??""}`),O(so,a(pe))}),h(ge,at)}),h(G,Oe)});var sr=d(we,2);{var $r=G=>{var de=tv();h(G,de)};I(sr,G=>{Object.values(a(n)).flat().length===0&&G($r)})}var ar=d(m,2);{var Pr=G=>{Bd(G,{get productId(){return a(f)},get initialTab(){return a(v)},onClose:g})};I(ar,G=>{a(f)&&G(Pr)})}var Er=d(ar,2);rf(Er,{}),W(()=>{O(D,` ${a(s).total??""}`),Rs(Ae,a(c).searchQuery),Dr(ye,a(c).groupBy==="none"),Dr(A,a(c).groupBy==="store"),Dr(te,a(c).groupBy==="productType"),$e(Ie,1,`hover:bg-base-100 cursor-pointer text-center ${a(c).groupBy==="store"?"hidden":""}`),$e(rt,1,`hover:bg-base-100 cursor-pointer text-center ${a(c).groupBy==="productType"?"hidden":""}`)}),h(e,p),j()}Pt(["click","input","change"]);Jo();var sv=N('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function av(e){var t=sv();h(e,t)}var iv=N('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function ov(e,t){var r=iv(),n=d(u(r),2),s=d(u(n),2),i=u(s);W(()=>O(i,t.message)),h(e,r)}var lv=N('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function cv(e,t){var r=lv(),n=u(r),s=u(n);xu(s,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=d(s,2),o=d(u(i),2),l=u(o);W(()=>O(l,t.message||"Erreur inconnue")),h(e,r)}var uv=N('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),dv=N('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),fv=N('<div class="text-base-content/60"> </div>'),vv=N('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),hv=N('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),pv=N('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),_v=N('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function mv(e,t){L(t,!0);let r,n=Z(null),s=Z(!0),i=Z(!1);Si(async()=>{r=Cc();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await M.initialize(r)}catch(A){const te=A instanceof Error?A.message:"Erreur lors de l'initialisation";T(n,te,!0),console.error("[App] Erreur initialisation:",A)}finally{T(s,!1)}}),Fl(()=>{M.destroy()});async function o(){if(!(!r||a(i))){T(i,!0);try{await M.forceReload(r)}catch(A){console.error("[App] Erreur lors du rechargement forcé:",A)}finally{T(i,!1)}}}const l=Q(()=>a(n)||M.error),c=Q(()=>a(s)||M.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=_v(),_=u(v),g=u(_),p=u(g),m=d(u(p),2),E=u(m);{var w=A=>{var te=uv();h(A,te)};I(E,A=>{M.realtimeConnected&&A(w)})}var x=d(E,2);{var D=A=>{var te=dv();h(A,te)};I(x,A=>{M.syncing&&A(D)})}var $=d(x,2);{var S=A=>{var te=fv(),he=u(te);W(Pe=>O(he,`Maj: ${Pe??""}`),[()=>new Date(M.lastSync).toLocaleTimeString()]),h(A,te)};I($,A=>{M.lastSync&&A(S)})}var P=d($,2);{var k=A=>{var te=vv();let he;te.__click=o;var Pe=u(te);wu(Pe,{class:"h-4 w-4"}),W(Ne=>{he=$e(te,1,"btn btn-outline btn-sm",null,he,Ne),te.disabled=a(i)||M.loading},[()=>({loading:a(i)||M.loading})]),h(A,te)};I(P,A=>{a(n)||A(k)})}var R=d(P,2);{var b=A=>{var te=hv(),he=u(te),Pe=u(he);mu(Pe,{class:"mr-2 h-4 w-4"}),W(()=>kn(he,"href",f)),h(A,te)};I(R,A=>{a(n)&&A(b)})}var C=d(_,2),z=u(C);{var ue=A=>{cv(A,{get message(){return a(l)}})},fe=A=>{var te=B(),he=q(te);{var Pe=Ne=>{ov(Ne,{get message(){return a(l)}})};I(he,Ne=>{a(l)&&Ne(Pe)},!0)}h(A,te)};I(z,A=>{a(n)?A(ue):A(fe,!1)})}var xe=d(z,2);{var Ae=A=>{av(A)};I(xe,A=>{a(c)&&A(Ae)})}var De=d(xe,2);{var K=A=>{nv(A,{})},ye=A=>{var te=B(),he=q(te);{var Pe=Ne=>{var Ke=pv();h(Ne,Ke)};I(he,Ne=>{!M.loading&&!a(n)&&Ne(Pe)},!0)}h(A,te)};I(De,A=>{M.enrichedProducts.length>0?A(K):A(ye,!1)})}h(e,v),j()}Pt(["click"]);Rl(mv,{target:document.getElementById("app_products")});
