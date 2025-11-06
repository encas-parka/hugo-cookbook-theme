(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const ss=!1;var _n=Array.isArray,Uo=Array.prototype.indexOf,na=Array.from,Ln=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,Wo=Object.getOwnPropertyDescriptors,Go=Object.prototype,Qo=Array.prototype,os=Object.getPrototypeOf,ya=Object.isExtensible;function Lr(e){return typeof e=="function"}const ae=()=>{};function Ho(e){for(var t=0;t<e.length;t++)e[t]()}function is(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function ls(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ut=2,aa=4,sa=8,pr=16,Ot=32,mr=64,oa=128,_t=256,hn=512,tt=1024,ht=2048,Xt=4096,St=8192,_r=16384,ia=32768,gr=65536,wa=1<<17,Ko=1<<18,Rr=1<<19,Jo=1<<20,zn=1<<21,gn=1<<22,cr=1<<23,ur=Symbol("$state"),cs=Symbol("legacy props"),Yo=Symbol(""),Qr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function us(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Zo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Xo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Fo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ei(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ti(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ri(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ni(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ai(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function si(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function oi(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const bn=1,yn=2,ds=4,ii=8,li=16,ci=1,ui=2,di=4,fi=8,vi=16,hi=1,pi=2,He=Symbol(),mi="http://www.w3.org/1999/xhtml",_i="http://www.w3.org/2000/svg",gi="@attach";function bi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function yi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let wi=!1;function fs(e){return e===this.v}function vs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Si(e,t){return e!==t}function hs(e){return!vs(e,this.v)}let Or=!1,xi=!1;function Pi(){Or=!0}let We=null;function kr(e){We=e}function z(e,t=!1,r){We={p:We,c:null,e:null,s:e,x:null,l:Or&&!t?{s:null,u:null,$:[]}:null}}function V(e){var t=We,r=t.e;if(r!==null){t.e=null;for(var n of r)Ts(n)}return We=t.p,{}}function qr(){return!Or||We!==null&&We.l===null}let or=[];function ps(){var e=or;or=[],Ho(e)}function dr(e){if(or.length===0&&!Hr){var t=or;queueMicrotask(()=>{t===or&&ps()})}or.push(e)}function Ei(){for(;or.length>0;)ps()}const $i=new WeakMap;function ms(e){var t=we;if(t===null)return Se.f|=cr,e;if((t.f&ia)===0){if((t.f&oa)===0)throw!t.parent&&e instanceof Error&&_s(e),e;t.b.error(e)}else Ar(e,t)}function Ar(e,t){for(;t!==null;){if((t.f&oa)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&_s(e),e}function _s(e){const t=$i.get(e);t&&(Ln(e,"message",{value:t.message}),Ln(e,"stack",{value:t.stack}))}const ln=new Set;let De=null,un=null,Vn=new Set,Tt=[],wn=null,Un=!1,Hr=!1;class mt{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#l=[];#o=[];#i=[];#a=[];#s=[];#f=[];skipped_effects=new Set;process(t){Tt=[],un=null;var r=mt.apply(this);for(const o of t)this.#n(o);if(this.#c===0){this.#v();var n=this.#o,a=this.#i;this.#o=[],this.#i=[],this.#a=[],un=this,De=null,Sa(n),Sa(a),un=null,this.#u?.resolve()}else this.#d(this.#o),this.#d(this.#i),this.#d(this.#a);r();for(const o of this.#l)Xr(o);this.#l=[]}#n(t){t.f^=tt;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Ot|mr))!==0,o=a&&(n&tt)!==0,i=o||(n&St)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=tt:(n&aa)!==0?this.#i.push(r):(n&tt)===0&&((n&gn)!==0&&r.b?.is_pending()?this.#l.push(r):$n(r)&&((r.f&pr)!==0&&this.#a.push(r),Xr(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#d(t){for(const r of t)((r.f&ht)!==0?this.#s:this.#f).push(r),st(r,tt);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){De=this}deactivate(){De=null}flush(){if(Tt.length>0){if(this.activate(),gs(),De!==null&&De!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of Vn)if(Vn.delete(t),t(),De!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),ln.size>1){this.#e.clear();let t=!0;for(const r of ln){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;bs(n)}if(Tt.length>0){De=r;const n=mt.apply(r);for(const a of Tt)r.#n(a);Tt=[],n()}}De=null}ln.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#s)st(t,ht),fr(t);for(const t of this.#f)st(t,Xt),fr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=is()).promise}static ensure(){if(De===null){const t=De=new mt;ln.add(De),Hr||mt.enqueue(()=>{De===t&&t.flush()})}return De}static enqueue(t){dr(t)}static apply(t){return ae}}function ki(e){var t=Hr;Hr=!0;try{for(var r;;){if(Ei(),Tt.length===0&&(De?.flush(),Tt.length===0))return wn=null,r;gs()}}finally{Hr=t}}function gs(){var e=Er;Un=!0;try{var t=0;for($a(!0);Tt.length>0;){var r=mt.ensure();if(t++>1e3){var n,a;Ai()}r.process(Tt),Ht.clear()}}finally{Un=!1,$a(e),wn=null}}function Ai(){try{ti()}catch(e){Ar(e,wn)}}let sr=null;function Sa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(_r|St))===0&&$n(n)&&(sr=[],Xr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Cs(n):n.fn=null),sr?.length>0)){Ht.clear();for(const a of sr)Xr(a);sr=[]}}sr=null}}function bs(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&ut)!==0?bs(t):(r&(gn|pr))!==0&&(st(t,ht),fr(t))}}function fr(e){for(var t=wn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Un&&t===we&&(r&pr)!==0)return;if((r&(mr|Ot))!==0){if((r&tt)===0)return;t.f^=tt}}Tt.push(t)}function la(e){let t=0,r=Jt(0),n;return()=>{Wi()&&(s(r),va(()=>(t===0&&(n=jr(()=>e(()=>Nt(r)))),t+=1,()=>{dr(()=>{t-=1,t===0&&(n?.(),n=void 0,Nt(r))})})))}}var Ti=gr|Rr|oa;function Ni(e,t,r){new Mi(e,t,r)}class Mi{parent;#e=!1;#r;#c=null;#u;#l;#o;#i=null;#a=null;#s=null;#f=null;#n=0;#d=0;#v=!1;#t=null;#_=()=>{this.#t&&Tr(this.#t,this.#n)};#g=la(()=>(this.#t=Jt(this.#n),()=>{this.#t=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#l=n,this.parent=we.b,this.#e=!!this.#u.pending,this.#o=Bt(()=>{we.b=this;{try{this.#i=Xe(()=>n(this.#r))}catch(a){this.error(a)}this.#d>0?this.#p():this.#e=!1}},Ti)}#w(){try{this.#i=Xe(()=>this.#l(this.#r))}catch(t){this.error(t)}this.#e=!1}#S(){const t=this.#u.pending;t&&(this.#a=Xe(()=>t(this.#r)),mt.enqueue(()=>{this.#i=this.#h(()=>(mt.ensure(),Xe(()=>this.#l(this.#r)))),this.#d>0?this.#p():(It(this.#a,()=>{this.#a=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#h(t){var r=we,n=Se,a=We;Mt(this.#o),ct(this.#o),kr(this.#o.ctx);try{return t()}catch(o){return ms(o),null}finally{Mt(r),ct(n),kr(a)}}#p(){const t=this.#u.pending;this.#i!==null&&(this.#f=document.createDocumentFragment(),Ci(this.#i,this.#f)),this.#a===null&&(this.#a=Xe(()=>t(this.#r)))}#m(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t);return}this.#d+=t,this.#d===0&&(this.#e=!1,this.#a&&It(this.#a,()=>{this.#a=null}),this.#f&&(this.#r.before(this.#f),this.#f=null),dr(()=>{mt.ensure().flush()}))}update_pending_count(t){this.#m(t),this.#n+=t,Vn.add(this.#_)}get_effect_pending(){return this.#g(),s(this.#t)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#i&&(Fe(this.#i),this.#i=null),this.#a&&(Fe(this.#a),this.#a=null),this.#s&&(Fe(this.#s),this.#s=null);var a=!1,o=!1;const i=()=>{if(a){yi();return}a=!0,o&&oi(),mt.ensure(),this.#n=0,this.#s!==null&&It(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#i=this.#h(()=>(this.#v=!1,Xe(()=>this.#l(this.#r)))),this.#d>0?this.#p():this.#e=!1};var l=Se;try{ct(null),o=!0,r?.(t,i),o=!1}catch(c){Ar(c,this.#o&&this.#o.parent)}finally{ct(l)}n&&dr(()=>{this.#s=this.#h(()=>{this.#v=!0;try{return Xe(()=>{n(this.#r,()=>t,()=>i)})}catch(c){return Ar(c,this.#o.parent),null}finally{this.#v=!1}})})}}function Ci(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:nn(r);t.append(r),r=a}}function ys(e,t,r){const n=qr()?Sn:ca;if(t.length===0){r(e.map(n));return}var a=De,o=we,i=Ii();Promise.all(t.map(l=>Di(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(o.f&_r)===0&&Ar(c,o)}a?.deactivate(),ws()}).catch(l=>{Ar(l,o)})}function Ii(){var e=we,t=Se,r=We,n=De;return function(){Mt(e),ct(t),kr(r),n?.activate()}}function ws(){Mt(null),ct(null),kr(null)}function Sn(e){var t=ut|ht,r=Se!==null&&(Se.f&ut)!==0?Se:null;return we===null||r!==null&&(r.f&_t)!==0?t|=_t:we.f|=Rr,{ctx:We,deps:null,effects:null,equals:fs,f:t,fn:e,reactions:null,rv:0,v:He,wv:0,parent:r??we,ac:null}}function Di(e,t){let r=we;r===null&&Zo();var n=r.b,a=void 0,o=Jt(He),i=!Se,l=new Map;return Qi(()=>{var c=is();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=De,v=n.is_pending();i&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(Qr),l.set(f,c)));const g=(p,m=void 0)=>{v||f.activate(),m?m!==Qr&&(o.f|=cr,Tr(o,m)):((o.f&cr)!==0&&(o.f^=cr),Tr(o,p)),i&&(n.update_pending_count(-1),v||f.decrement()),ws()};c.promise.then(g,p=>g(null,p||"unknown"))}),As(()=>{for(const c of l.values())c.reject(Qr)}),new Promise(c=>{function f(v){function g(){v===a?c(o):f(a)}v.then(g,g)}f(a)})}function F(e){const t=Sn(e);return Rs(t),t}function ca(e){const t=Sn(e);return t.equals=hs,t}function Ss(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Fe(t[r])}}function Ri(e){for(var t=e.parent;t!==null;){if((t.f&ut)===0)return t;t=t.parent}return null}function ua(e){var t,r=we;Mt(Ri(e));try{Ss(e),t=Bs(e)}finally{Mt(r)}return t}function xs(e){var t=ua(e);if(e.equals(t)||(e.v=t,e.wv=qs()),!yr){var r=(Gt||(e.f&_t)!==0)&&e.deps!==null?Xt:tt;st(e,r)}}const Ht=new Map;function Jt(e,t){var r={f:0,v:e,reactions:null,equals:fs,rv:0,wv:0};return r}function W(e,t){const r=Jt(e);return Rs(r),r}function Oi(e,t=!1,r=!0){const n=Jt(e);return t||(n.equals=hs),Or&&r&&We!==null&&We.l!==null&&(We.l.s??=[]).push(n),n}function $(e,t,r=!1){Se!==null&&(!wt||(Se.f&wa)!==0)&&qr()&&(Se.f&(ut|pr|gn|wa))!==0&&!Dt?.includes(e)&&si();let n=r?Ne(t):t;return Tr(e,n)}function Tr(e,t){if(!e.equals(t)){var r=e.v;yr?Ht.set(e,t):Ht.set(e,r),e.v=t;var n=mt.ensure();n.capture(e,r),(e.f&ut)!==0&&((e.f&ht)!==0&&ua(e),st(e,(e.f&_t)===0?tt:Xt)),e.wv=qs(),Ps(e,ht),qr()&&we!==null&&(we.f&tt)!==0&&(we.f&(Ot|mr))===0&&(pt===null?Ji([e]):pt.push(e))}return t}function Nt(e){$(e,e.v+1)}function Ps(e,t){var r=e.reactions;if(r!==null)for(var n=qr(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===we)){var c=(l&ht)===0;c&&st(i,t),(l&ut)!==0?Ps(i,Xt):c&&((l&pr)!==0&&sr!==null&&sr.push(i),fr(i))}}}function Ne(e){if(typeof e!="object"||e===null||ur in e)return e;const t=os(e);if(t!==Go&&t!==Qo)return e;var r=new Map,n=_n(e),a=W(0),o=Rt,i=l=>{if(Rt===o)return l();var c=Se,f=Rt;ct(null),Aa(o);var v=l();return ct(c),Aa(f),v};return n&&r.set("length",W(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&ni();var v=r.get(c);return v===void 0?v=i(()=>{var g=W(f.value);return r.set(c,g),g}):$(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=i(()=>W(He));r.set(c,v),Nt(a)}}else $(f,He),Nt(a);return!0},get(l,c,f){if(c===ur)return e;var v=r.get(c),g=c in l;if(v===void 0&&(!g||Qt(l,c)?.writable)&&(v=i(()=>{var m=Ne(g?l[c]:He),_=W(m);return _}),r.set(c,v)),v!==void 0){var p=s(v);return p===He?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=s(v))}else if(f===void 0){var g=r.get(c),p=g?.v;if(g!==void 0&&p!==He)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===ur)return!0;var f=r.get(c),v=f!==void 0&&f.v!==He||Reflect.has(l,c);if(f!==void 0||we!==null&&(!v||Qt(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=v?Ne(l[c]):He,m=W(p);return m}),r.set(c,f));var g=s(f);if(g===He)return!1}return v},set(l,c,f,v){var g=r.get(c),p=c in l;if(n&&c==="length")for(var m=f;m<g.v;m+=1){var _=r.get(m+"");_!==void 0?$(_,He):m in l&&(_=i(()=>W(He)),r.set(m+"",_))}if(g===void 0)(!p||Qt(l,c)?.writable)&&(g=i(()=>W(void 0)),$(g,Ne(f)),r.set(c,g));else{p=g.v!==He;var x=i(()=>Ne(f));$(g,x)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(v,f),!p){if(n&&typeof c=="string"){var w=r.get("length"),E=Number(c);Number.isInteger(E)&&E>=w.v&&$(w,E+1)}Nt(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(g=>{var p=r.get(g);return p===void 0||p.v!==He});for(var[f,v]of r)v.v!==He&&!(f in l)&&c.push(f);return c},setPrototypeOf(){ai()}})}function xa(e){try{if(e!==null&&typeof e=="object"&&ur in e)return e[ur]}catch{}return e}function qi(e,t){return Object.is(xa(e),xa(t))}var Pa,Es,$s,ks;function ji(){if(Pa===void 0){Pa=window,Es=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;$s=Qt(t,"firstChild").get,ks=Qt(t,"nextSibling").get,ya(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),ya(r)&&(r.__t=void 0)}}function qt(e=""){return document.createTextNode(e)}function Nr(e){return $s.call(e)}function nn(e){return ks.call(e)}function u(e,t){return Nr(e)}function j(e,t=!1){{var r=Nr(e);return r instanceof Comment&&r.data===""?nn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=nn(n);return n}function Bi(e){e.textContent=""}function xn(){return!1}function Li(e,t){if(t){const r=document.body;e.autofocus=!0,dr(()=>{document.activeElement===r&&e.focus()})}}let Ea=!1;function zi(){Ea||(Ea=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Pn(e){var t=Se,r=we;ct(null),Mt(null);try{return e()}finally{ct(t),Mt(r)}}function da(e,t,r,n=r){e.addEventListener(t,()=>Pn(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),zi()}function Vi(e){we===null&&Se===null&&ei(),Se!==null&&(Se.f&_t)!==0&&we===null&&Fo(),yr&&Xo()}function Ui(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function jt(e,t,r,n=!0){var a=we;a!==null&&(a.f&St)!==0&&(e|=St);var o={ctx:We,deps:null,nodes_start:null,nodes_end:null,f:e|ht,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Xr(o),o.f|=ia}catch(c){throw Fe(o),c}else t!==null&&fr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Rr)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Ui(i,a),Se!==null&&(Se.f&ut)!==0&&(e&mr)===0)){var l=Se;(l.effects??=[]).push(i)}}return o}function Wi(){return Se!==null&&!wt}function As(e){const t=jt(sa,null,!1);return st(t,tt),t.teardown=e,t}function br(e){Vi();var t=we.f,r=!Se&&(t&Ot)!==0&&(t&ia)===0;if(r){var n=We;(n.e??=[]).push(e)}else return Ts(e)}function Ts(e){return jt(aa|Jo,e,!1)}function Gi(e){mt.ensure();const t=jt(mr|Rr,e,!0);return(r={})=>new Promise(n=>{r.outro?It(t,()=>{Fe(t),n(void 0)}):(Fe(t),n(void 0))})}function fa(e){return jt(aa,e,!1)}function Qi(e){return jt(gn|Rr,e,!0)}function va(e,t=0){return jt(sa|t,e,!0)}function U(e,t=[],r=[]){ys(t,r,n=>{jt(sa,()=>e(...n.map(s)),!0)})}function Bt(e,t=0){var r=jt(pr|t,e,!0);return r}function Xe(e,t=!0){return jt(Ot|Rr,e,!0,t)}function Ns(e){var t=e.teardown;if(t!==null){const r=yr,n=Se;ka(!0),ct(null);try{t.call(null)}finally{ka(r),ct(n)}}}function Ms(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&Pn(()=>{a.abort(Qr)});var n=r.next;(r.f&mr)!==0?r.parent=null:Fe(r,t),r=n}}function Hi(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ot)===0&&Fe(t),t=r}}function Fe(e,t=!0){var r=!1;(t||(e.f&Ko)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Ki(e.nodes_start,e.nodes_end),r=!0),Ms(e,t&&!r),pn(e,0),st(e,_r);var n=e.transitions;if(n!==null)for(const o of n)o.stop();Ns(e);var a=e.parent;a!==null&&a.first!==null&&Cs(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Ki(e,t){for(;e!==null;){var r=e===t?null:nn(e);e.remove(),e=r}}function Cs(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function It(e,t){var r=[];ha(e,r,!0),Is(r,()=>{Fe(e),t&&t()})}function Is(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function ha(e,t,r){if((e.f&St)===0){if(e.f^=St,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,o=(n.f&gr)!==0||(n.f&Ot)!==0;ha(n,t,o?r:!1),n=a}}}function En(e){Ds(e,!0)}function Ds(e,t){if((e.f&St)!==0){e.f^=St,(e.f&tt)===0&&(st(e,ht),fr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&gr)!==0||(r.f&Ot)!==0;Ds(r,a?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let Er=!1;function $a(e){Er=e}let yr=!1;function ka(e){yr=e}let Se=null,wt=!1;function ct(e){Se=e}let we=null;function Mt(e){we=e}let Dt=null;function Rs(e){Se!==null&&(Dt===null?Dt=[e]:Dt.push(e))}let nt=null,vt=0,pt=null;function Ji(e){pt=e}let Os=1,Zr=0,Rt=Zr;function Aa(e){Rt=e}let Gt=!1;function qs(){return++Os}function $n(e){var t=e.f;if((t&ht)!==0)return!0;if((t&Xt)!==0){var r=e.deps,n=(t&_t)!==0;if(r!==null){var a,o,i=(t&hn)!==0,l=n&&we!==null&&!Gt,c=r.length;if((i||l)&&(we===null||(we.f&_r)===0)){var f=e,v=f.parent;for(a=0;a<c;a++)o=r[a],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=hn),l&&v!==null&&(v.f&_t)===0&&(f.f^=_t)}for(a=0;a<c;a++)if(o=r[a],$n(o)&&xs(o),o.wv>e.wv)return!0}(!n||we!==null&&!Gt)&&st(e,tt)}return!1}function js(e,t,r=!0){var n=e.reactions;if(n!==null&&!Dt?.includes(e))for(var a=0;a<n.length;a++){var o=n[a];(o.f&ut)!==0?js(o,t,!1):t===o&&(r?st(o,ht):(o.f&tt)!==0&&st(o,Xt),fr(o))}}function Bs(e){var t=nt,r=vt,n=pt,a=Se,o=Gt,i=Dt,l=We,c=wt,f=Rt,v=e.f;nt=null,vt=0,pt=null,Gt=(v&_t)!==0&&(wt||!Er||Se===null),Se=(v&(Ot|mr))===0?e:null,Dt=null,kr(e.ctx),wt=!1,Rt=++Zr,e.ac!==null&&(Pn(()=>{e.ac.abort(Qr)}),e.ac=null);try{e.f|=zn;var g=e.fn,p=g(),m=e.deps;if(nt!==null){var _;if(pn(e,vt),m!==null&&vt>0)for(m.length=vt+nt.length,_=0;_<nt.length;_++)m[vt+_]=nt[_];else e.deps=m=nt;if(!Gt||(v&ut)!==0&&e.reactions!==null)for(_=vt;_<m.length;_++)(m[_].reactions??=[]).push(e)}else m!==null&&vt<m.length&&(pn(e,vt),m.length=vt);if(qr()&&pt!==null&&!wt&&m!==null&&(e.f&(ut|Xt|ht))===0)for(_=0;_<pt.length;_++)js(pt[_],e);return a!==null&&a!==e&&(Zr++,pt!==null&&(n===null?n=pt:n.push(...pt))),(e.f&cr)!==0&&(e.f^=cr),p}catch(x){return ms(x)}finally{e.f^=zn,nt=t,vt=r,pt=n,Se=a,Gt=o,Dt=i,kr(l),wt=c,Rt=f}}function Yi(e,t){let r=t.reactions;if(r!==null){var n=Uo.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&ut)!==0&&(nt===null||!nt.includes(t))&&(st(t,Xt),(t.f&(_t|hn))===0&&(t.f^=hn),Ss(t),pn(t,0))}function pn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Yi(e,r[n])}function Xr(e){var t=e.f;if((t&_r)===0){st(e,tt);var r=we,n=Er;we=e,Er=!0;try{(t&pr)!==0?Hi(e):Ms(e),Ns(e);var a=Bs(e);e.teardown=typeof a=="function"?a:null,e.wv=Os;var o;ss&&xi&&(e.f&ht)!==0&&e.deps}finally{Er=n,we=r}}}async function Zi(){await Promise.resolve(),ki()}function s(e){var t=e.f,r=(t&ut)!==0;if(Se!==null&&!wt){var n=we!==null&&(we.f&_r)!==0;if(!n&&!Dt?.includes(e)){var a=Se.deps;if((Se.f&zn)!==0)e.rv<Zr&&(e.rv=Zr,nt===null&&a!==null&&a[vt]===e?vt++:nt===null?nt=[e]:(!Gt||!nt.includes(e))&&nt.push(e));else{(Se.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[Se]:o.includes(Se)||o.push(Se)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&_t)===0&&(i.f^=_t)}if(yr){if(Ht.has(e))return Ht.get(e);if(r){i=e;var c=i.v;return((i.f&tt)===0&&i.reactions!==null||Ls(i))&&(c=ua(i)),Ht.set(i,c),c}}else r&&(i=e,$n(i)&&xs(i));if((e.f&cr)!==0)throw e.v;return e.v}function Ls(e){if(e.v===He)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ht.has(t)||(t.f&ut)!==0&&Ls(t))return!0;return!1}function jr(e){var t=wt;try{return wt=!0,e()}finally{wt=t}}const Xi=-7169;function st(e,t){e.f=e.f&Xi|t}function Fi(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const el=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function tl(e){return el.includes(e)}const rl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function nl(e){return e=e.toLowerCase(),rl[e]??e}const al=["touchstart","touchmove"];function sl(e){return al.includes(e)}const zs=new Set,Wn=new Set;function Vs(e,t,r,n={}){function a(o){if(n.capture||Ur.call(t,o),!o.cancelBubble)return Pn(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?dr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Gn(e,t,r,n={}){var a=Vs(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function Ke(e){for(var t=0;t<e.length;t++)zs.add(e[t]);for(var r of Wn)r(e)}let Ta=null;function Ur(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;Ta=e;var i=0,l=Ta===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(o=a[i]||e.target,o!==t){Ln(e,"currentTarget",{configurable:!0,get(){return o||r}});var v=Se,g=we;ct(null),Mt(null);try{for(var p,m=[];o!==null;){var _=o.assignedSlot||o.parentNode||o.host||null;try{var x=o["__"+n];if(x!=null&&(!o.disabled||e.target===o))if(_n(x)){var[b,...w]=x;b.apply(o,[e,...w])}else x.call(o,e)}catch(E){p?m.push(E):p=E}if(e.cancelBubble||_===t||_===null)break;o=_}if(p){for(let E of m)queueMicrotask(()=>{throw E});throw p}}finally{e.__root=t,delete e.currentTarget,ct(v),Mt(g)}}}function Us(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Mr(e,t){var r=we;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function P(e,t){var r=(t&hi)!==0,n=(t&pi)!==0,a,o=!e.startsWith("<!>");return()=>{a===void 0&&(a=Us(o?e:"<!>"+e),r||(a=Nr(a)));var i=n||Es?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Nr(i),c=i.lastChild;Mr(l,c)}else Mr(i,i);return i}}function ol(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Us(a),l=Nr(i);o=Nr(l)}var c=o.cloneNode(!0);return Mr(c,c),c}}function il(e,t){return ol(e,t,"svg")}function gt(e=""){{var t=qt(e+"");return Mr(t,t),t}}function G(){var e=document.createDocumentFragment(),t=document.createComment(""),r=qt();return e.append(t,r),Mr(t,r),e}function h(e,t){e!==null&&e.before(t)}function B(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function ll(e,t){return cl(e,t)}const Sr=new Map;function cl(e,{target:t,anchor:r,props:n={},events:a,context:o,intro:i=!0}){ji();var l=new Set,c=g=>{for(var p=0;p<g.length;p++){var m=g[p];if(!l.has(m)){l.add(m);var _=sl(m);t.addEventListener(m,Ur,{passive:_});var x=Sr.get(m);x===void 0?(document.addEventListener(m,Ur,{passive:_}),Sr.set(m,1)):Sr.set(m,x+1)}}};c(na(zs)),Wn.add(c);var f=void 0,v=Gi(()=>{var g=r??t.appendChild(qt());return Ni(g,{pending:()=>{}},p=>{if(o){z({});var m=We;m.c=o}a&&(n.$$events=a),f=e(p,n)||{},o&&V()}),()=>{for(var p of l){t.removeEventListener(p,Ur);var m=Sr.get(p);--m===0?(document.removeEventListener(p,Ur),Sr.delete(p)):Sr.set(p,m)}Wn.delete(c),g!==r&&g.parentNode?.removeChild(g)}});return ul.set(f,v),f}let ul=new WeakMap;function I(e,t,r=!1){var n=e,a=null,o=null,i=He,l=r?gr:0,c=!1;const f=(m,_=!0)=>{c=!0,p(_,m)};var v=null;function g(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var m=i?a:o,_=i?o:a;m&&En(m),_&&It(_,()=>{i?o=null:a=null})}const p=(m,_)=>{if(i!==(i=m)){var x=xn(),b=n;if(x&&(v=document.createDocumentFragment(),v.append(b=qt())),i?a??=_&&Xe(()=>_(b)):o??=_&&Xe(()=>_(b)),x){var w=De,E=i?a:o,y=i?o:a;E&&w.skipped_effects.delete(E),y&&w.skipped_effects.add(y),w.add_callback(g)}else g()}};Bt(()=>{c=!1,t(f),c||p(null,null)},l)}function dl(e,t,r){var n=e,a=He,o,i,l=null,c=qr()?Si:vs;function f(){o&&It(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}Bt(()=>{if(c(a,a=t())){var v=n,g=xn();g&&(l=document.createDocumentFragment(),l.append(v=qt())),i=Xe(()=>r(v)),g?De.add_callback(f):f()}})}function Qn(e,t){return t}function fl(e,t,r){for(var n=e.items,a=[],o=t.length,i=0;i<o;i++)ha(t[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;Bi(c),c.append(r),n.clear(),At(e,t[0].prev,t[o-1].next)}Is(a,()=>{for(var f=0;f<o;f++){var v=t[f];l||(n.delete(v.k),At(e,v.prev,v.next)),Fe(v.e,!l)}})}function at(e,t,r,n,a,o=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&ds)!==0;if(c){var f=e;i=f.appendChild(qt())}var v=null,g=!1,p=new Map,m=ca(()=>{var w=r();return _n(w)?w:w==null?[]:na(w)}),_,x;function b(){vl(x,_,l,p,i,a,t,n,r),o!==null&&(_.length===0?v?En(v):v=Xe(()=>o(i)):v!==null&&It(v,()=>{v=null}))}Bt(()=>{x??=we,_=s(m);var w=_.length;if(!(g&&w===0)){g=w===0;var E,y,S,k;if(xn()){var A=new Set,M=De;for(y=0;y<w;y+=1){S=_[y],k=n(S,y);var C=l.items.get(k)??p.get(k);C?(t&(bn|yn))!==0&&Ws(C,S,y,t):(E=Gs(null,l,null,null,S,k,y,a,t,r,!0),p.set(k,E)),A.add(k)}for(const[se,Q]of l.items)A.has(se)||M.skipped_effects.add(Q.e);M.add_callback(b)}else b();s(m)}})}function vl(e,t,r,n,a,o,i,l,c){var f=(i&ii)!==0,v=(i&(bn|yn))!==0,g=t.length,p=r.items,m=r.first,_=m,x,b=null,w,E=[],y=[],S,k,A,M;if(f)for(M=0;M<g;M+=1)S=t[M],k=l(S,M),A=p.get(k),A!==void 0&&(A.a?.measure(),(w??=new Set).add(A));for(M=0;M<g;M+=1){if(S=t[M],k=l(S,M),A=p.get(k),A===void 0){var C=n.get(k);if(C!==void 0){n.delete(k),p.set(k,C);var se=b?b.next:_;At(r,b,C),At(r,C,se),In(C,se,a),b=C}else{var Q=_?_.e.nodes_start:a;b=Gs(Q,r,b,b===null?r.first:b.next,S,k,M,o,i,c)}p.set(k,b),E=[],y=[],_=b.next;continue}if(v&&Ws(A,S,M,i),(A.e.f&St)!==0&&(En(A.e),f&&(A.a?.unfix(),(w??=new Set).delete(A))),A!==_){if(x!==void 0&&x.has(A)){if(E.length<y.length){var L=y[0],X;b=L.prev;var ie=E[0],q=E[E.length-1];for(X=0;X<E.length;X+=1)In(E[X],L,a);for(X=0;X<y.length;X+=1)x.delete(y[X]);At(r,ie.prev,q.next),At(r,b,ie),At(r,q,L),_=L,b=q,M-=1,E=[],y=[]}else x.delete(A),In(A,_,a),At(r,A.prev,A.next),At(r,A,b===null?r.first:b.next),At(r,b,A),b=A;continue}for(E=[],y=[];_!==null&&_.k!==k;)(_.e.f&St)===0&&(x??=new Set).add(_),y.push(_),_=_.next;if(_===null)continue;A=_}E.push(A),b=A,_=A.next}if(_!==null||x!==void 0){for(var N=x===void 0?[]:na(x);_!==null;)(_.e.f&St)===0&&N.push(_),_=_.next;var H=N.length;if(H>0){var ne=(i&ds)!==0&&g===0?a:null;if(f){for(M=0;M<H;M+=1)N[M].a?.measure();for(M=0;M<H;M+=1)N[M].a?.fix()}fl(r,N,ne)}}f&&dr(()=>{if(w!==void 0)for(A of w)A.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var R of n.values())Fe(R.e);n.clear()}function Ws(e,t,r,n){(n&bn)!==0&&Tr(e.v,t),(n&yn)!==0?Tr(e.i,r):e.i=r}function Gs(e,t,r,n,a,o,i,l,c,f,v){var g=(c&bn)!==0,p=(c&li)===0,m=g?p?Oi(a,!1,!1):Jt(a):a,_=(c&yn)===0?i:Jt(i),x={i:_,v:m,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=qt())}return x.e=Xe(()=>l(e,m,_,f),wi),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?v||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function In(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=nn(o);a.before(o),o=i}}function At(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function oe(e,t,...r){var n=e,a=ae,o;Bt(()=>{a!==(a=t())&&(o&&(Fe(o),o=null),o=Xe(()=>a(n,...r)))},gr)}function $r(e,t,r){var n=e,a,o,i=null,l=null;function c(){o&&(It(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}Bt(()=>{if(a!==(a=t())){var f=xn();if(a){var v=n;f&&(i=document.createDocumentFragment(),i.append(v=qt()),o&&De.skipped_effects.add(o)),l=Xe(()=>r(v,a))}f?De.add_callback(c):c()}},gr)}function hl(e,t,r,n,a,o){var i,l,c=null,f=e,v;Bt(()=>{const g=t()||null;var p=_i;g!==i&&(v&&(g===null?It(v,()=>{v=null,l=null}):g===l?En(v):Fe(v)),g&&g!==l&&(v=Xe(()=>{if(c=document.createElementNS(p,g),Mr(c,c),n){var m=c.appendChild(qt());n(c,m)}we.nodes_end=c,f.before(c)})),i=g,i&&(l=i))},gr)}function pl(e,t){var r=void 0,n;Bt(()=>{r!==(r=t())&&(n&&(Fe(n),n=null),r&&(n=Xe(()=>{fa(()=>r(e))})))})}function Qs(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Qs(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function ml(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Qs(e))&&(n&&(n+=" "),n+=t);return n}function _l(e){return typeof e=="object"?ml(e):e??""}const Na=[...` 	
\r\f \v\uFEFF`];function gl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||Na.includes(n[i-1]))&&(l===n.length||Na.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Ma(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var o=e[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function Dn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function bl(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Dn)),a&&c.push(...Object.keys(a).map(Dn));var f=0,v=-1;const x=e.length;for(var g=0;g<x;g++){var p=e[g];if(l?p==="/"&&e[g-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[g+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&v===-1)v=g;else if(p===";"||g===x-1){if(v!==-1){var m=Dn(e.substring(f,v).trim());if(!c.includes(m)){p!==";"&&g++;var _=e.substring(f,g).trim();r+=" "+_+";"}}f=g+1,v=-1}}}}return n&&(r+=Ma(n)),a&&(r+=Ma(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function ke(e,t,r,n,a,o){var i=e.__className;if(i!==r||i===void 0){var l=gl(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&a!==o)for(var c in o){var f=!!o[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return o}function Rn(e,t={},r,n){for(var a in r){var o=r[a];t[a]!==o&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,n))}}function Hs(e,t,r,n){var a=e.__style;if(a!==t){var o=bl(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(Rn(e,r?.[0],n[0]),Rn(e,r?.[1],n[1],"important")):Rn(e,r,n));return n}function mn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!_n(t))return bi();for(var n of e.options)n.selected=t.includes(Kr(n));return}for(n of e.options){var a=Kr(n);if(qi(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Ks(e){var t=new MutationObserver(()=>{mn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),As(()=>{t.disconnect()})}function ir(e,t,r=t){var n=!0;da(e,"change",a=>{var o=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),Kr);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&Kr(l)}r(i)}),fa(()=>{var a=t();if(mn(e,a,n),n&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=Kr(o),r(a))}e.__value=a,n=!1}),Ks(e)}function Kr(e){return"__value"in e?e.__value:e.value}const zr=Symbol("class"),Vr=Symbol("style"),Js=Symbol("is custom element"),Ys=Symbol("is html");function yl(e,t){var r=kn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function On(e,t){var r=kn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function wl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function vr(e,t,r,n){var a=kn(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Yo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Zs(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Sl(e,t,r,n,a=!1,o=!1){var i=kn(e),l=i[Js],c=!i[Ys],f=t||{},v=e.tagName==="OPTION";for(var g in t)g in r||(r[g]=null);r.class?r.class=_l(r.class):r[zr]&&(r.class=null),r[Vr]&&(r.style??=null);var p=Zs(e);for(const S in r){let k=r[S];if(v&&S==="value"&&k==null){e.value=e.__value="",f[S]=k;continue}if(S==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";ke(e,m,k,n,t?.[zr],r[zr]),f[S]=k,f[zr]=r[zr];continue}if(S==="style"){Hs(e,k,t?.[Vr],r[Vr]),f[S]=k,f[Vr]=r[Vr];continue}var _=f[S];if(!(k===_&&!(k===void 0&&e.hasAttribute(S)))){f[S]=k;var x=S[0]+S[1];if(x!=="$$")if(x==="on"){const A={},M="$$"+S;let C=S.slice(2);var b=tl(C);if(Fi(C)&&(C=C.slice(0,-7),A.capture=!0),!b&&_){if(k!=null)continue;e.removeEventListener(C,f[M],A),f[M]=null}if(k!=null)if(b)e[`__${C}`]=k,Ke([C]);else{let se=function(Q){f[S].call(this,Q)};var y=se;f[M]=Vs(C,e,se,A)}else b&&(e[`__${C}`]=void 0)}else if(S==="style")vr(e,S,k);else if(S==="autofocus")Li(e,!!k);else if(!l&&(S==="__value"||S==="value"&&k!=null))e.value=e.__value=k;else if(S==="selected"&&v)wl(e,k);else{var w=S;c||(w=nl(w));var E=w==="defaultValue"||w==="defaultChecked";if(k==null&&!l&&!E)if(i[S]=null,w==="value"||w==="checked"){let A=e;const M=t===void 0;if(w==="value"){let C=A.defaultValue;A.removeAttribute(w),A.defaultValue=C,A.value=A.__value=M?C:null}else{let C=A.defaultChecked;A.removeAttribute(w),A.defaultChecked=C,A.checked=M?C:!1}}else e.removeAttribute(S);else E||p.includes(w)&&(l||typeof k!="string")?(e[w]=k,w in i&&(i[w]=He)):typeof k!="function"&&vr(e,w,k)}}}return f}function Ca(e,t,r=[],n=[],a,o=!1,i=!1){ys(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",g=!1;if(Bt(()=>{var m=t(...l.map(s)),_=Sl(e,c,m,a,o,i);g&&v&&"value"in m&&mn(e,m.value);for(let b of Object.getOwnPropertySymbols(f))m[b]||Fe(f[b]);for(let b of Object.getOwnPropertySymbols(m)){var x=m[b];b.description===gi&&(!c||x!==c[b])&&(f[b]&&Fe(f[b]),f[b]=Xe(()=>pl(e,()=>x))),_[b]=x}c=_}),v){var p=e;fa(()=>{mn(p,c.value,!0),Ks(p)})}g=!0})}function kn(e){return e.__attributes??={[Js]:e.nodeName.includes("-"),[Ys]:e.namespaceURI===mi}}var Ia=new Map;function Zs(e){var t=e.getAttribute("is")||e.nodeName,r=Ia.get(t);if(r)return r;Ia.set(t,r=[]);for(var n,a=e,o=Element.prototype;o!==a;){n=Wo(a);for(var i in n)n[i].set&&r.push(i);a=os(a)}return r}function Ce(e,t,r=t){var n=new WeakSet;da(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=qn(e)?jn(o):o,r(o),De!==null&&n.add(De),await Zi(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),jr(t)==null&&e.value&&(r(qn(e)?jn(e.value):e.value),De!==null&&n.add(De)),va(()=>{var a=t();if(e===document.activeElement){var o=un??De;if(n.has(o))return}qn(e)&&a===jn(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function xl(e,t,r=t){da(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),jr(t)==null&&r(e.checked),va(()=>{var n=t();e.checked=!!n})}function qn(e){var t=e.type;return t==="number"||t==="range"}function jn(e){return e===""?null:+e}let cn=!1;function Pl(e){var t=cn;try{return cn=!1,[e(),cn]}finally{cn=t}}const El={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ce(e,t,r){return new Proxy({props:e,exclude:t},El)}const $l={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Lr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Lr(a)&&(a=a());const o=Qt(a,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Lr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Qt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===ur||t===cs)return!1;for(let r of e.props)if(Lr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Lr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ve(...e){return new Proxy({props:e},$l)}function Oe(e,t,r,n){var a=!Or||(r&ui)!==0,o=(r&fi)!==0,i=(r&vi)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?jr(n):n),l),v;if(o){var g=ur in e||cs in e;v=Qt(e,t)?.set??(g&&t in e?y=>e[t]=y:void 0)}var p,m=!1;o?[p,m]=Pl(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),v&&(a&&ri(),v(p)));var _;if(a?_=()=>{var y=e[t];return y===void 0?f():(c=!0,y)}:_=()=>{var y=e[t];return y!==void 0&&(l=void 0),y===void 0?l:y},a&&(r&di)===0)return _;if(v){var x=e.$$legacy;return(function(y,S){return arguments.length>0?((!a||!S||x||m)&&v(S?_():y),y):_()})}var b=!1,w=((r&ci)!==0?Sn:ca)(()=>(b=!1,_()));o&&s(w);var E=we;return(function(y,S){if(arguments.length>0){const k=S?s(w):a&&o?Ne(y):y;return $(w,k),b=!0,l!==void 0&&(l=k),y}return yr&&b||(E.f&_r)!==0?w.v:s(w)})}function Xs(e){We===null&&us(),Or&&We.l!==null?Al(We).m.push(e):br(()=>{const t=jr(e);if(typeof t=="function")return t})}function kl(e){We===null&&us(),Xs(()=>()=>jr(e))}function Al(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Tl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Tl);const Nl="modulepreload",Ml=function(e){return"/"+e},Da={},Cl=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(g=>Promise.resolve(g).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(v=>{if(v=Ml(v),v in Da)return;Da[v]=!0;const g=v.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${p}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":Nl,g||(m.as="script"),m.crossOrigin="",m.href=v,c&&m.setAttribute("nonce",c),document.head.appendChild(m),g)return new Promise((_,x)=>{m.addEventListener("load",_),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${v}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};class Il extends Map{#e=new Map;#r=W(0);#c=W(0);#u=Rt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#l(t){return Rt===this.#u?W(t):Jt(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#r;if(a===void 0)a=this.#l(0),n.set(t,a),$(this.#c,super.size),Nt(l);else if(o!==r){Nt(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(v=>c.has(v));f&&Nt(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),$(this.#c,super.size),$(n,-1),Nt(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;$(this.#c,0);for(var r of t.values())$(r,-1);Nt(this.#r),t.clear()}}#o(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#l(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}class Dl{#e;#r;constructor(t,r){this.#e=t,this.#r=la(r)}get current(){return this.#r(),this.#e()}}const Rl=/\(.+\)/,Ol=new Set(["all","print","screen","and","or","not","only"]);class Fs extends Dl{constructor(t,r){let n=Rl.test(t)||t.split(/[\s,]+/).some(o=>Ol.has(o.trim()))?t:`(${t})`;const a=window.matchMedia(n);super(()=>a.matches,o=>Gn(a,"change",o))}}const ql=typeof window<"u"?window:void 0;function jl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Bl{#e;#r;constructor(t={}){const{window:r=ql,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=la(a=>{const o=Gn(r,"focusin",a),i=Gn(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?jl(this.#e):null}}new Bl;function Ll(e){return typeof e=="function"}function zl(e,t){if(Ll(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Vl(e,t){let r=W(null);const n=F(()=>zl(t,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const c=new Promise((f,v)=>{i=f,l=v});$(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);$(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),$(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Ul(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),o=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return o.length?Jr(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function Wr(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function dn(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Jr(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function fn(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>lr(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(a.push({q:v,u:c}),o.push(lr(v.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function xr(e){return e?.length?e.map(t=>lr(t.q.toString(),t.u)).join(" et "):"-"}function lr(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Ra(e){return Wr(e)}function pa(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Wl(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([o])=>{const i=new Date(o);return i>=n&&i<=a}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function Gl(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Ql(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Hl(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function Kl(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return pa(t)}function Jl(e,t,r=""){if(e.status==="cancelled")return!1;const n=e.deliveryDate||e.$createdAt;return!n||n>t||r&&e.$createdAt<r?!1:e.status==="delivered"||e.status==="pending"||e.status==="ordered"&&n<=t}function Oa(e,t){let r=[],n="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(r=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],n=e.stockParsed.dateTime);const a=[];if(e.purchases)for(const c of e.purchases)Jl(c,t,n)&&a.push({q:c.quantity,u:c.unit});const o=Yl(e,t),i=[...r,...a],l=pa(i);return Zl(l,o)}function Yl(e,t){if(!e.byDate)return[];const r=[];for(const[n,a]of Object.entries(e.byDate))if(n<=t){const i=a.totalConsolidated;i&&r.push(...i)}return pa(r)}function Zl(e,t){const r=new Map,n=new Map;e.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),t.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const a=[],o=new Set([...r.keys(),...n.keys()]);for(const i of o){const l=r.get(i)||0,c=n.get(i)||0,f=l-c;Math.abs(f)>.001&&a.push({q:f,u:i})}return a}function qa(e){if(!e?.length)return"Équilibré";const t=e.filter(n=>n.q>0),r=e.filter(n=>n.q<0);if(t.length>0&&r.length>0){const n=t.map(o=>lr(o.q.toString(),o.u)).join(" et "),a=r.map(o=>lr(Math.abs(o.q).toString(),o.u)).join(" et ");return`${n} disponibles, ${a} manquant${r.length>1?"s":""}`}else return t.length>0?t.map(n=>lr(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>lr(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function Xl(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class T{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}T.equal=(e,t)=>new T("equal",e,t).toString();T.notEqual=(e,t)=>new T("notEqual",e,t).toString();T.lessThan=(e,t)=>new T("lessThan",e,t).toString();T.lessThanEqual=(e,t)=>new T("lessThanEqual",e,t).toString();T.greaterThan=(e,t)=>new T("greaterThan",e,t).toString();T.greaterThanEqual=(e,t)=>new T("greaterThanEqual",e,t).toString();T.isNull=e=>new T("isNull",e).toString();T.isNotNull=e=>new T("isNotNull",e).toString();T.between=(e,t,r)=>new T("between",e,[t,r]).toString();T.startsWith=(e,t)=>new T("startsWith",e,t).toString();T.endsWith=(e,t)=>new T("endsWith",e,t).toString();T.select=e=>new T("select",void 0,e).toString();T.search=(e,t)=>new T("search",e,t).toString();T.orderDesc=e=>new T("orderDesc",e).toString();T.orderAsc=e=>new T("orderAsc",e).toString();T.orderRandom=()=>new T("orderRandom").toString();T.cursorAfter=e=>new T("cursorAfter",void 0,e).toString();T.cursorBefore=e=>new T("cursorBefore",void 0,e).toString();T.limit=e=>new T("limit",void 0,e).toString();T.offset=e=>new T("offset",void 0,e).toString();T.contains=(e,t)=>new T("contains",e,t).toString();T.notContains=(e,t)=>new T("notContains",e,t).toString();T.notSearch=(e,t)=>new T("notSearch",e,t).toString();T.notBetween=(e,t,r)=>new T("notBetween",e,[t,r]).toString();T.notStartsWith=(e,t)=>new T("notStartsWith",e,t).toString();T.notEndsWith=(e,t)=>new T("notEndsWith",e,t).toString();T.createdBefore=e=>new T("createdBefore",void 0,e).toString();T.createdAfter=e=>new T("createdAfter",void 0,e).toString();T.createdBetween=(e,t)=>new T("createdBetween",void 0,[e,t]).toString();T.updatedBefore=e=>new T("updatedBefore",void 0,e).toString();T.updatedAfter=e=>new T("updatedAfter",void 0,e).toString();T.updatedBetween=(e,t)=>new T("updatedBetween",void 0,[e,t]).toString();T.or=e=>new T("or",void 0,e.map(t=>JSON.parse(t))).toString();T.and=e=>new T("and",void 0,e.map(t=>JSON.parse(t))).toString();T.distanceEqual=(e,t,r,n=!0)=>new T("distanceEqual",e,[[t,r,n]]).toString();T.distanceNotEqual=(e,t,r,n=!0)=>new T("distanceNotEqual",e,[[t,r,n]]).toString();T.distanceGreaterThan=(e,t,r,n=!0)=>new T("distanceGreaterThan",e,[[t,r,n]]).toString();T.distanceLessThan=(e,t,r,n=!0)=>new T("distanceLessThan",e,[[t,r,n]]).toString();T.intersects=(e,t)=>new T("intersects",e,[t]).toString();T.notIntersects=(e,t)=>new T("notIntersects",e,[t]).toString();T.crosses=(e,t)=>new T("crosses",e,[t]).toString();T.notCrosses=(e,t)=>new T("notCrosses",e,[t]).toString();T.overlaps=(e,t)=>new T("overlaps",e,[t]).toString();T.notOverlaps=(e,t)=>new T("notOverlaps",e,[t]).toString();T.touches=(e,t)=>new T("touches",e,[t]).toString();T.notTouches=(e,t)=>new T("notTouches",e,[t]).toString();var eo,to;class Cr{static custom(t){return t}static unique(t=7){const r=Xl(Cr,eo,"m",to).call(Cr);let n="";for(let a=0;a<t;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}eo=Cr,to=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var ja;(function(e){e.Totp="totp"})(ja||(ja={}));var Ba;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Ba||(Ba={}));var La;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(La||(La={}));var za;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(za||(za={}));var Va;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Va||(Va={}));var Ua;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Ua||(Ua={}));var Wa;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Wa||(Wa={}));var Ga;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Ga||(Ga={}));var Qa;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Qa||(Qa={}));class Fl{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class ro{constructor(t){this.generateIdentifier=t,this.kv=new Fl}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class ec extends ro{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function tc(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function rc(e,t){const r=tc(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const o=n[a];if(t(o))return o}}function Ir(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function vn(e,t){return e.indexOf(t)!==-1}function Ha(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class nc{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return rc(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const ac=e=>Object.prototype.toString.call(e).slice(8,-1),no=e=>typeof e>"u",sc=e=>e===null,Fr=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Hn=e=>Fr(e)&&Object.keys(e).length===0,Yt=e=>Array.isArray(e),oc=e=>typeof e=="string",ic=e=>typeof e=="number"&&!isNaN(e),lc=e=>typeof e=="boolean",cc=e=>e instanceof RegExp,en=e=>e instanceof Map,tn=e=>e instanceof Set,ao=e=>ac(e)==="Symbol",uc=e=>e instanceof Date&&!isNaN(e.valueOf()),dc=e=>e instanceof Error,Ka=e=>typeof e=="number"&&isNaN(e),fc=e=>lc(e)||sc(e)||no(e)||ic(e)||oc(e)||ao(e),vc=e=>typeof e=="bigint",hc=e=>e===1/0||e===-1/0,pc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),mc=e=>e instanceof URL,so=e=>e.replace(/\./g,"\\."),Bn=e=>e.map(String).map(so).join("."),Yr=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let o=e.charAt(a);if(o==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(o==="."){t.push(r),r="";continue}r+=o}const n=r;return t.push(n),t};function kt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const oo=[kt(no,"undefined",()=>null,()=>{}),kt(vc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),kt(uc,"Date",e=>e.toISOString(),e=>new Date(e)),kt(dc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),kt(cc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),kt(tn,"set",e=>[...e.values()],e=>new Set(e)),kt(en,"map",e=>[...e.entries()],e=>new Map(e)),kt(e=>Ka(e)||hc(e),"number",e=>Ka(e)?"NaN":e>0?"Infinity":"-Infinity",Number),kt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),kt(mc,"URL",e=>e.toString(),e=>new URL(e))];function An(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const io=An((e,t)=>ao(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),_c=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),lo=An(pc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=_c[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function co(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const uo=An(co,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),fo=An((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),gc=[uo,io,fo,lo],Ja=(e,t)=>{const r=Ha(gc,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ha(oo,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},vo={};oo.forEach(e=>{vo[e.annotation]=e});const bc=(e,t,r)=>{if(Yt(t))switch(t[0]){case"symbol":return io.untransform(e,t,r);case"class":return uo.untransform(e,t,r);case"custom":return fo.untransform(e,t,r);case"typed-array":return lo.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=vo[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Pr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function ho(e){if(vn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(vn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(vn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const yc=(e,t)=>{ho(t);for(let r=0;r<t.length;r++){const n=t[r];if(tn(e))e=Pr(e,+n);else if(en(e)){const a=+n,o=+t[++r]==0?"key":"value",i=Pr(e,a);switch(o){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Kn=(e,t,r)=>{if(ho(t),t.length===0)return r(e);let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];if(Yt(n)){const l=+i;n=n[l]}else if(Fr(n))n=n[i];else if(tn(n)){const l=+i;n=Pr(n,l)}else if(en(n)){if(o===t.length-2)break;const c=+i,f=+t[++o]==0?"key":"value",v=Pr(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const a=t[t.length-1];if(Yt(n)?n[+a]=r(n[+a]):Fr(n)&&(n[a]=r(n[a])),tn(n)){const o=Pr(n,+a),i=r(o);o!==i&&(n.delete(o),n.add(i))}if(en(n)){const o=+t[t.length-2],i=Pr(n,o);switch(+a==0?"key":"value"){case"key":{const c=r(i);n.set(c,n.get(i)),c!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Jn(e,t,r=[]){if(!e)return;if(!Yt(e)){Ir(e,(o,i)=>Jn(o,t,[...r,...Yr(i)]));return}const[n,a]=e;a&&Ir(a,(o,i)=>{Jn(o,t,[...r,...Yr(i)])}),t(n,r)}function wc(e,t,r){return Jn(t,(n,a)=>{e=Kn(e,a,o=>bc(o,n,r))}),e}function Sc(e,t){function r(n,a){const o=yc(e,Yr(a));n.map(Yr).forEach(i=>{e=Kn(e,i,()=>o)})}if(Yt(t)){const[n,a]=t;n.forEach(o=>{e=Kn(e,Yr(o),()=>e)}),a&&Ir(a,r)}else Ir(t,r);return e}const xc=(e,t)=>Fr(e)||Yt(e)||en(e)||tn(e)||co(e,t);function Pc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Ec(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[o,...i]=a;o.length===0?n=i.map(Bn):r[Bn(o)]=i.map(Bn)}),n?Hn(r)?[n]:[n,r]:Hn(r)?void 0:r}const po=(e,t,r,n,a=[],o=[],i=new Map)=>{const l=fc(e);if(!l){Pc(e,a,t);const m=i.get(e);if(m)return n?{transformedValue:null}:m}if(!xc(e,r)){const m=Ja(e,r),_=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return l||i.set(e,_),_}if(vn(o,e))return{transformedValue:null};const c=Ja(e,r),f=c?.value??e,v=Yt(f)?[]:{},g={};Ir(f,(m,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const x=po(m,t,r,n,[...a,_],[...o,e],i);v[_]=x.transformedValue,Yt(x.annotations)?g[_]=x.annotations:Fr(x.annotations)&&Ir(x.annotations,(b,w)=>{g[so(_)+"."+w]=b})});const p=Hn(g)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,g]:g};return l||i.set(e,p),p};function mo(e){return Object.prototype.toString.call(e).slice(8,-1)}function Ya(e){return mo(e)==="Array"}function $c(e){if(mo(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function kc(e,t,r,n,a){const o={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),a&&o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Yn(e,t={}){if(Ya(e))return e.map(a=>Yn(a,t));if(!$c(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,o)=>{if(Ya(t.props)&&!t.props.includes(o))return a;const i=e[o],l=Yn(i,t);return kc(a,o,l,e,t.nonenumerable),a},{})}class qe{constructor({dedupe:t=!1}={}){this.classRegistry=new ec,this.symbolRegistry=new ro(r=>r.description??""),this.customTransformerRegistry=new nc,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=po(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const o=Ec(r,this.dedupe);return o&&(a.meta={...a.meta,referentialEqualities:o}),a}deserialize(t){const{json:r,meta:n}=t;let a=Yn(r);return n?.values&&(a=wc(a,n.values,this)),n?.referentialEqualities&&(a=Sc(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}qe.defaultInstance=new qe;qe.serialize=qe.defaultInstance.serialize.bind(qe.defaultInstance);qe.deserialize=qe.defaultInstance.deserialize.bind(qe.defaultInstance);qe.stringify=qe.defaultInstance.stringify.bind(qe.defaultInstance);qe.parse=qe.defaultInstance.parse.bind(qe.defaultInstance);qe.registerClass=qe.defaultInstance.registerClass.bind(qe.defaultInstance);qe.registerSymbol=qe.defaultInstance.registerSymbol.bind(qe.defaultInstance);qe.registerCustom=qe.defaultInstance.registerCustom.bind(qe.defaultInstance);qe.allowErrorProps=qe.defaultInstance.allowErrorProps.bind(qe.defaultInstance);function _o(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Pt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Ac(e,t,r=100){try{const{databases:n,config:a}=await Pt(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[T.greaterThan("$updatedAt",t),T.equal("mainId",e),T.limit(r),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function go(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:o}=await Pt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[T.equal("mainId",e),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),T.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[T.greaterThan("$updatedAt",r),T.equal("mainId",e),T.limit(n),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function hr(e,t){try{const{databases:r,config:n}=await Pt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Wt(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=_o(n,t),{databases:o,config:i}=await Pt(),l=await o.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function bo(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await hr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function yo(e,t){return hr(e,{who:t})}async function Zn(e,t){return hr(e,{stockReel:t})}async function wo(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const a={};return t.stockReel!==void 0&&(a.stockReel=t.stockReel),t.who!==void 0&&(a.who=t.who),t.storeInfo!==void 0&&(a.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await hr(e,a)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await Wt(e,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function So(e){try{const{databases:t,config:r}=await Pt(),o=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:o.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Cr.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function xo(e,t){try{const{databases:r,config:n}=await Pt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Po(e){try{const{databases:t,config:r}=await Pt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Eo(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Pt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[T.equal("$id",e),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function $o(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(m=>m.includes("products.")),f=i.some(m=>m.includes("purchases.")),v=i.some(m=>m.includes(".create")),g=i.some(m=>m.includes(".update")),p=i.some(m=>m.includes(".delete"));if(c){const m=l;v&&t.onProductCreate?t.onProductCreate(m):g&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(f){const m=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(m):g&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function ko(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Pt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Ao(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Pt(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function ma(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function To(e,t,r,n){return ma({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function No(e,t,r,n="replace"){return ma({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function Mo(e,t,r,n={}){try{const{databases:a,config:o}=await Pt(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const v of r){const g={products:[t],mainId:e,quantity:v.q,unit:v.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,Cr.unique(),g);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const o=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const Tc=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:ma,batchUpdateStore:To,batchUpdateWho:No,createMainDocument:Ao,createPurchase:So,createQuickValidationPurchases:Mo,deletePurchase:Po,enrichedProductToAppwriteProduct:_o,loadMainEventData:ko,loadPurchasesListByIds:Eo,loadUpdatedPurchases:Ac,subscribeToRealtime:$o,syncProductsWithPurchases:go,updateProduct:hr,updateProductBatch:wo,updateProductStock:Zn,updateProductStore:bo,updateProductWho:yo,updatePurchase:xo,upsertProduct:Wt},Symbol.toStringTag,{value:"Module"}));async function Nc(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Mc(e,t){const r=Kl(e.byDate),n=Jr(dn([])),{numeric:a,display:o}=fn(r,n);return{$id:`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:xr(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function Cc(e,t){return e.map(r=>Mc(r,t))}class Ic{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";METADATA_KEY="cache-metadata";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=a=>{const o=a.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE),console.log("[IDBCache] Object store 'metadata' créé"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).get(this.METADATA_KEY);o.onsuccess=()=>{const i=o.result||{lastSync:null,allDates:[]};console.log(`[IDBCache] Metadata chargée: lastSync=${i.lastSync}, dates=${i.allDates?.length||0}`),t(i)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=a.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put(t,this.METADATA_KEY);i.onsuccess=()=>{console.log("[IDBCache] Metadata sauvegardée"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Dc(e){const t=new Ic(e);return await t.open(),t}const Za=1e3;class Rc{#e=new Il;#r=W(null);#c=W(!1);#u=W(!1);#l=W(null);#o=W(!1);#i=W(!1);#a=W(null);#s=W(Ne([]));#f=W(Ne({start:null,end:null}));get dateRange(){return s(this.#f)}set dateRange(t){$(this.#f,t,!0)}#n=null;#d=null;#v=W(!1);#t=W(Ne({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#l)}get lastSync(){return s(this.#a)}get syncing(){return s(this.#o)}get availableDates(){return s(this.#s)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,a=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:a}}isFullRange(){return this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate}initializeDateRange(){if((!this.dateRange.start||!this.dateRange.end)&&s(this.#s).length>0){const t=[...s(this.#s)].sort();this.dateRange={start:t[0],end:t[t.length-1]}}console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}get firstAvailableDate(){return s(this.#s).length===0?null:[...s(this.#s)].sort()[0]}get lastAvailableDate(){return s(this.#s).length===0?null:[...s(this.#s)].sort().pop()}get realtimeConnected(){return s(this.#i)}get hugoContentChanged(){return s(this.#v)}#_=F(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#_)}set enrichedProducts(t){$(this.#_,t)}#g=F(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const t=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[a,o]of this.#e){if(!o.byDate||!this.#B(o))continue;Object.keys(o.byDate).some(c=>{const f=new Date(c);return f>=t&&f<=r})&&n.set(a,o)}return n});get filteredProductsMap(){return s(this.#g)}set filteredProductsMap(t){$(this.#g,t)}#w=F(()=>{console.log("[Store] Calcul unifié des stats par produit (1 itération)");const t=new Map;if(this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using precomputed data");for(const[n,a]of this.#e){const o=Oa(a,this.dateRange.end),i=o.filter(c=>c.q>0),l=o.filter(c=>c.q<0).map(c=>({q:Math.abs(c.q),u:c.u}));t.set(n,{quantities:a.totalNeededArray,formattedQuantities:xr(a.totalNeededArray),nbRecipes:a.nbRecipes||0,totalAssiettes:a.totalAssiettes||0,stockResult:o,availableQuantities:i,missingQuantities:l,formattedAvailableQuantities:qa(o),hasAvailable:i.length>0,hasMissing:l.length>0})}return t}for(const[n,a]of this.filteredProductsMap){if(!a.byDate)continue;const o=Ql(a.byDate),i=Ul(o,this.dateRange.start,this.dateRange.end),l=i.length>0?xr(i):"",c=Wl(a.byDate,this.dateRange.start,this.dateRange.end),v=Object.keys(a.byDate).filter(_=>{const x=new Date(_),b=new Date(this.dateRange.start),w=new Date(this.dateRange.end);return x>=b&&x<=w}).flatMap(_=>a.byDate[_]?.recipes||[]),g=Oa(a,this.dateRange.end),p=g.filter(_=>_.q>0),m=g.filter(_=>_.q<0).map(_=>({q:Math.abs(_.q),u:_.u}));t.set(n,{quantities:i,formattedQuantities:l,nbRecipes:v.length,totalAssiettes:c,stockResult:g,availableQuantities:p,missingQuantities:m,formattedAvailableQuantities:qa(g),hasAvailable:p.length>0,hasMissing:m.length>0})}return t});get productsStatsByDateRange(){return s(this.#w)}set productsStatsByDateRange(t){$(this.#w,t)}#S=F(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#S)}set stats(t){$(this.#S,t)}#h=F(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#h)}set uniqueStores(t){$(this.#h,t)}#p=F(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#p)}set uniqueWho(t){$(this.#p,t)}#m=F(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#m)}set uniqueProductTypes(t){$(this.#m,t)}#E=F(()=>{const t=Array.from(this.filteredProductsMap.values());return s(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get groupedFilteredProducts(){return s(this.#E)}set groupedFilteredProducts(t){$(this.#E,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),$(this.#r,t,!0);try{this.#n=await Dc(t)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}$(this.#l,null);try{if(await this.#T(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await Nc(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Cc(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),$(this.#s,[...n.allDates],!0),await ko(t)||await Ao(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#$()}this.initializeDateRange(),await this.#N(),$(this.#c,!0);const r=this.#j();this.#d=$o(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw $(this.#l,n,!0),console.error("[ProductsStore]",n,r),r}}async#T(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();$(this.#a,r.lastSync,!0),$(this.#s,[...r.allDates],!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#N(){if(s(this.#r)){$(this.#o,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const t=await go(s(this.#r),{lastSync:s(this.#a),limit:Za});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#k(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await Cl(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Tc);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#a),Za);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#P(o,a)}})}this.#M(),await this.#$(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{$(this.#o,!1)}}}async#$(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:s(this.#a),allDates:[...s(this.#s)]}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#x(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#M(){$(this.#a,new Date().toISOString(),!0)}#k(t,r){return r?this.#b(t,r):this.#C(t)}#C(t){const r=Jr(dn(t.purchases??[])),n=[],{numeric:a,display:o}=fn(n,r),i=Wr(t.stockReel)??null,l=xr(r),c=t.store?Wr(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:Ra(t.totalNeededOverride)}}#b(t,r){const n=t.purchases??r.purchases,a=Jr(dn(n??[])),o=xr(a),{numeric:i,display:l}=fn(r.totalNeededArray,a),c=t.stockReel??r.stockReel,f=c?Wr(c):r.stockParsed,v=t.store??r.store,g=v?Wr(v):r.storeInfo,p=f?`${f.quantity} ${f.unit}`:o;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:v,stockReel:c,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:g,stockParsed:f,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:Ra(t.totalNeededOverride??r.totalNeededOverride)}}#L(t){t.totalPurchasesArray=Jr(dn(t.purchases??[]));const{numeric:r,display:n}=fn(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=xr(t.totalPurchasesArray)}#z(t){t.length&&(t.forEach(r=>this.#y(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#y(t){const r=this.#e.get(t.$id),n=this.#k(t,r);this.#e.set(t.$id,n)}#I(t){this.#e.delete(t)}async#D(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#q(r,t),r}async#R(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Eo([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#P(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#O(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t));return r.forEach(n=>{this.#y(n)}),r.map(n=>n.$id)}#A(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#q(t,r){const n=this.#A(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#b({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#P(t,r){const n=this.#A(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#b({...i,purchases:f,status:"active"},i);a.push(v)}else{const f=this.#b({...i,purchases:[...l,r],status:"active"},i);a.push(f)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#j(){return{onProductCreate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#I(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#D(t);await this.#x(r)},onPurchaseUpdate:async t=>{const r=await this.#R(t);await this.#x(r)},onPurchaseDelete:async t=>{const r=await this.#O(t);await this.#x(r)},onConnect:()=>{$(this.#i,!0)},onDisconnect:()=>{$(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#B(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Vl(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){$(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],o=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#t).sortDirection==="asc"?-1:1:a>o?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Gl(r.byDate):!1}get enrichedProductsCount(){return this.#e.size}async forceReload(t){await this.clearCache(),await this.initialize(t)}async clearCache(){this.#e.clear(),$(this.#s,[],!0),$(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const o=this.#e.get(a);if(o){const i={...o,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#d?.(),this.#d=null,this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const Y=new Rc;function Oc(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const qc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var jc=il("<svg><!><!></svg>");function he(e,t){z(t,!0);const r=Oe(t,"color",3,"currentColor"),n=Oe(t,"size",3,24),a=Oe(t,"strokeWidth",3,2),o=Oe(t,"absoluteStrokeWidth",3,!1),i=Oe(t,"iconNode",19,()=>[]),l=ce(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=jc();Ca(c,g=>({...qc,...l,width:n(),height:n(),stroke:r(),"stroke-width":g,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var f=u(c);at(f,17,i,Qn,(g,p)=>{var m=F(()=>ls(s(p),2));let _=()=>s(m)[0],x=()=>s(m)[1];var b=G(),w=j(b);hl(w,_,!0,(E,y)=>{Ca(E,()=>({...x()}))}),h(g,b)});var v=d(f);oe(v,()=>t.children??ae),h(e,c),V()}function Xn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];he(e,ve({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Bc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];he(e,ve({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Lc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];he(e,ve({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function zc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];he(e,ve({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Vc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];he(e,ve({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Dr(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];he(e,ve({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Uc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];he(e,ve({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Wc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];he(e,ve({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Xa(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];he(e,ve({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Gc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];he(e,ve({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Qc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];he(e,ve({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Hc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];he(e,ve({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Kc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];he(e,ve({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Jc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];he(e,ve({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function _a(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];he(e,ve({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Yc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];he(e,ve({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Zc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];he(e,ve({name:"euro"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Xc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];he(e,ve({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Co(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];he(e,ve({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Fc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];he(e,ve({name:"info"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function eu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];he(e,ve({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function tu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];he(e,ve({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Fa(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];he(e,ve({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function ru(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];he(e,ve({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function nu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];he(e,ve({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function au(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];he(e,ve({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function ga(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];he(e,ve({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function su(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];he(e,ve({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function ou(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];he(e,ve({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function an(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];he(e,ve({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function iu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];he(e,ve({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function lu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];he(e,ve({name:"plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function cu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];he(e,ve({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function uu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];he(e,ve({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function du(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];he(e,ve({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function fu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];he(e,ve({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function vu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];he(e,ve({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Io(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];he(e,ve({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Kt(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];he(e,ve({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Do(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];he(e,ve({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Gr(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];he(e,ve({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Zt(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];he(e,ve({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function hu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];he(e,ve({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Tn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];he(e,ve({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Ro(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];he(e,ve({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function sn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];he(e,ve({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function Fn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];he(e,ve({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function pu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];he(e,ve({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}function xt(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];he(e,ve({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=j(i);oe(l,()=>t.children??ae),h(a,i)},$$slots:{default:!0}})),V()}class mu{isMobileQuery=new Fs("max-width: 767px");get isMobile(){return this.isMobileQuery.current}userName(){return localStorage.getItem("appwrite-user-name")||""}}const ea=new mu;function _u(e,t){const r=e.reduce((a,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return a+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function gu(e,t){const r=e.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const a=t.purchaseStatus||"delivered";let o=t.purchaseDeliveryDate||null;a==="delivered"&&!o&&(o=new Date().toISOString());const i=e.flatMap(c=>c.missingQuantities.map(f=>({productId:c.productId,quantity:f.q,unit:f.u,status:a,notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:o,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:t}}async function bu(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=_u(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,o=[];if(n<=a)o.push(t);else{let p=[],m=0;for(const _ of t){const x=(_.isSynced?0:1)+_.missingQuantities.length;m+x>a?(p.length>0&&o.push(p),p=[_],m=x):(p.push(_),m+=x)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<o.length;p++){const m=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${m.length} produits)`);try{const _=await gu(m,r),x=await yu(_);if(i.push(x),x.success)l+=x.productsCreated,c+=x.purchasesCreated,f+=x.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${x.error}`);break}}catch(_){const x=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,_),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:x,timestamp:new Date().toISOString()});break}}const v=i.every(p=>p.success),g=i.some(p=>!p.success);return{success:v,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:g?"Un ou plusieurs lots ont échoué":void 0}}async function yu(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var wu=(e,t,r)=>t(s(r).id),Su=P('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),xu=P('<span class="flex items-center gap-1"><!> </span>'),Pu=P('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Eu=P('<div class="flex flex-wrap gap-2"></div> <!>',1);function rn(e,t){z(t,!0);let r=Oe(t,"badgeSize",3,"badge-lg"),n=Oe(t,"color",3,"primary"),a=Oe(t,"badgeStyle",3,""),o=Oe(t,"onToggleItem",3,()=>{}),i=Oe(t,"showStats",3,!1),l=Oe(t,"showIcon",3,!0),c=W(Ne({}));br(()=>{const b={};t.items.forEach(w=>{b[w.id]=w.selected??!0}),$(c,b,!0)});function f(b){s(c)[b]=!s(c)[b],o()(b)}const v=F(()=>Object.values(s(c)).filter(Boolean).length),g=F(()=>Object.values(s(c)).filter(b=>!b).length);var p=Eu(),m=j(p);at(m,21,()=>t.items,b=>b.id,(b,w)=>{const E=F(()=>s(c)[s(w).id]);var y=Su();y.__click=[wu,f,w];var S=u(y);{var k=Q=>{var L=G(),X=j(L);$r(X,()=>s(w).icon,(ie,q)=>{q(ie,{class:"h-3 w-3",get title(){return s(w).title}})}),h(Q,L)};I(S,Q=>{s(w).icon&&Q(k)})}var A=d(S,2),M=u(A),C=d(A,2);{var se=Q=>{var L=G(),X=j(L);{var ie=N=>{Dr(N,{size:16})},q=N=>{lu(N,{size:16})};I(X,N=>{s(E)?N(ie):N(q,!1)})}h(Q,L)};I(C,Q=>{l()&&Q(se)})}U(()=>{ke(y,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(E)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),vr(y,"title",s(E)?"Retirer de la liste":"Réajouter à la liste"),B(M,s(w).label)}),h(b,y)});var _=d(m,2);{var x=b=>{var w=Pu(),E=u(w),y=u(E),S=u(y);Dr(S,{class:"text-success h-3 w-3"});var k=d(S),A=d(y,2);{var M=Q=>{var L=xu(),X=u(L);xt(X,{class:"text-error h-3 w-3"});var ie=d(X);U(()=>B(ie,` ${s(g)??""} retirés`)),h(Q,L)};I(A,Q=>{s(g)>0&&Q(M)})}var C=d(E,2),se=u(C);U(()=>{B(k,` ${s(v)??""} actifs`),B(se,`Total: ${t.items.length??""} items`)}),h(b,w)};I(_,b=>{i()&&b(x)})}h(e,p),V()}Ke(["click"]);function $u(e,t){$(t,!s(t))}var ku=P('<span class="text-base-content font-semibold"> </span>'),Au=P('<div class="text-base-content/80 flex-1"> </div>'),Tu=P('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Nu=P('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Mu=P('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Oo(e,t){let r=Oe(t,"icon",3,Fc),n=Oe(t,"class",3,""),a=Oe(t,"initiallyOpen",3,!1),o=r(),i=W(Ne(a())),l=Ne(t.children);var c=Mu(),f=u(c);f.__click=[$u,i];var v=u(f),g=u(v);o(g,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(g,2);{var m=S=>{var k=ku(),A=u(k);U(()=>B(A,t.title)),h(S,k)};I(p,S=>{t.title&&S(m)})}var _=d(v,2);{var x=S=>{var k=Au(),A=u(k);U(()=>B(A,t.contentVisible)),h(S,k)};I(_,S=>{t.contentVisible&&S(x)})}var b=d(_,2);{var w=S=>{var k=Tu(),A=u(k),M=u(A);{var C=L=>{var X=gt("en savoir plus");h(L,X)},se=L=>{var X=gt("masquer");h(L,X)};I(M,L=>{s(i)?L(se,!1):L(C)})}var Q=d(A,2);{let L=F(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(i)?"rotate-180":""}`);Wc(Q,{get class(){return s(L)}})}h(S,k)};I(b,S=>{l&&S(w)})}var E=d(f,2);{var y=S=>{var k=Nu(),A=u(k),M=u(A);oe(M,()=>t.children??ae),U(()=>ke(k,1,`overflow-hidden transition-all duration-200 ${s(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h(S,k)};I(E,S=>{l&&S(y)})}U(()=>{ke(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Hs(c,t.style),ke(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),vr(f,"aria-expanded",s(i))}),h(e,c)}Ke(["click"]);async function Cu(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){$(r,!0),$(n,null),$(a,null);try{const c=`FACTURE_${Date.now()}`,f=s(o).map(m=>m.$id);Y.setSyncStatus(f,!0);const v=[];for(const m of s(o))v.push({productId:m.$id,isSynced:m.isSynced,productData:m,missingQuantities:m.missingQuantityArray||[]});const g={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(o).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const p=await bu(Y.currentMainId,v,g);if(p.success)$(a,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";$(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),Y.clearSyncStatus()}finally{$(r,!1)}}}function es(e,t,r){s(t)||r.onClose()}var Iu=P('<div class="alert alert-error"><!> <span> </span></div>'),Du=P('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),Ru=P(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),Ou=P("<option> </option>"),qu=P("<option> </option>"),ju=P('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),Bu=P('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Lu=P("<!> ",1),zu=P(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option>Annulé</option></select> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function Vu(e,t){z(t,!0);let r=W(!1),n=W(null),a=W(null),o=Ne({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=W(Ne(new Set));br(()=>{$(i,new Set(t.products.map(K=>K.$id)),!0)});const l=F(()=>t.products.filter(K=>s(i).has(K.$id))),c=F(()=>s(l).length!==0),f=F(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function v(K){const ye=new Set(s(i));ye.has(K)?ye.delete(K):ye.add(K),$(i,ye,!0)}const g=F(()=>t.products.map(K=>({id:K.$id,label:K.productName,title:K.productName})));var p=zu(),m=u(p),_=u(m),x=u(_),b=u(x);Kt(b,{class:"h-5 w-5"});var w=d(b),E=d(x,2);E.__click=[es,r,t];var y=u(E);xt(y,{class:"h-4 w-4"});var S=d(_,2),k=u(S);{var A=K=>{var ye=Iu(),Ee=u(ye);Tn(Ee,{class:"h-4 w-4"});var Ue=d(Ee,2),ze=u(Ue);U(()=>B(ze,s(n))),h(K,ye)};I(k,K=>{s(n)&&K(A)})}var M=d(k,2);{var C=K=>{var ye=Du(),Ee=u(ye);Dr(Ee,{class:"h-4 w-4"});var Ue=d(Ee,2),ze=u(Ue),et=d(ze);{var dt=Je=>{var Qe=gt("+ 1 dépense globale");h(Je,Qe)};I(et,Je=>{s(a).expense&&Je(dt)})}var it=d(et,2);{var ft=Je=>{var Qe=gt();U(()=>B(Qe,`(traité en ${s(a).batches??""} lots)`)),h(Je,Qe)};I(it,Je=>{s(a).batches&&s(a).batches>1&&Je(ft)})}U(()=>B(ze,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),h(K,ye)};I(M,K=>{s(a)&&K(C)})}var se=d(M,2),Q=u(se);Oo(Q,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(K,ye)=>{var Ee=Ru();h(K,Ee)},$$slots:{default:!0}});var L=d(se,2),X=d(u(L),2),ie=u(X),q=u(ie),N=u(q);Zt(N,{class:"h-4 w-4 opacity-50"});var H=d(N,2),ne=d(q,2);at(ne,21,()=>Y.uniqueStores,Qn,(K,ye)=>{var Ee=Ou(),Ue=u(Ee),ze={};U(()=>{B(Ue,s(ye)),ze!==(ze=s(ye))&&(Ee.value=(Ee.__value=s(ye))??"")}),h(K,Ee)});var R=d(ie,2),te=u(R),ue=u(te);sn(ue,{class:"h-4 w-4 opacity-50"});var de=d(ue,2),D=d(te,2);at(D,21,()=>Y.uniqueWho,Qn,(K,ye)=>{var Ee=qu(),Ue=u(Ee),ze={};U(()=>{B(Ue,s(ye)),ze!==(ze=s(ye))&&(Ee.value=(Ee.__value=s(ye))??"")}),h(K,Ee)});var Z=d(R,2),me=u(Z),be=u(me);Zc(be,{class:"h-4 w-4 opacity-50"});var Pe=d(be,2),O=d(X,2),ee=u(O),Ae=u(ee),Te=u(Ae);Te.value=Te.__value="delivered";var Be=d(Te);Be.value=Be.__value="ordered";var Me=d(Be);Me.value=Me.__value="requested";var je=d(Me);je.value=je.__value="cancelled";var le=d(Ae,2),xe=d(ee,2);{var ot=K=>{var ye=ju(),Ee=u(ye),Ue=d(u(Ee),2);U(()=>Ue.disabled=s(r)),Ce(Ue,()=>o.deliveryDate,ze=>o.deliveryDate=ze),h(K,ye)};I(xe,K=>{o.status==="ordered"&&K(ot)})}var bt=d(O,2),fe=u(bt),J=u(fe);ga(J,{class:"h-4 w-4 opacity-50"});var _e=d(J,2),Le=d(L,2),rt=d(u(Le),2);rn(rt,{get items(){return s(g)},onToggleItem:v,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var ge=d(Le,2),Ie=u(ge);Ie.__click=[es,r,t];var Ge=d(Ie,2);Ge.__click=[Cu,c,r,n,a,l,o,t];var Et=u(Ge);{var Ft=K=>{var ye=Bu();h(K,ye)},er=K=>{var ye=Lu(),Ee=j(ye);Kt(Ee,{class:"h-4 w-4"});var Ue=d(Ee);U(()=>B(Ue,` Valider ${s(l).length??""} produit(s)`)),h(K,ye)};I(Et,K=>{s(r)?K(Ft):K(er,!1)})}U(()=>{B(w,` ${s(f)??""}`),E.disabled=s(r),H.disabled=s(r),de.disabled=s(r),Pe.disabled=s(r),Ae.disabled=s(r),ke(le,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),_e.disabled=s(r),Ie.disabled=s(r),Ge.disabled=s(r)||!s(c)}),Ce(H,()=>o.store,K=>o.store=K),Ce(de,()=>o.who,K=>o.who=K),Ce(Pe,()=>o.expense,K=>o.expense=K),ir(Ae,()=>o.status,K=>o.status=K),Ce(_e,()=>o.notes,K=>o.notes=K),h(e,p),V()}Ke(["click"]);function ta(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Bc};case"animaux":return{displayName:"Viandes et Poissons",icon:Lc};case"legumes":return{displayName:"Fruits et Légumes",icon:Vc};case"sucres":return{displayName:"Sucrées",icon:zc};case"lof":return{displayName:"L.O.F",icon:Yc};case"autres":return{displayName:"Autres",icon:Uc};case"epices":return{displayName:"Assaisonnements",icon:tu};case"frais":return{displayName:"Produits Frais",icon:du};default:return{displayName:e,icon:an}}}function ts(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Nn(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Mn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Uu(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Wu(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],o=n[t.sortColumn];return a<o?t.sortDirection==="asc"?-1:1:a>o?t.sortDirection==="asc"?1:-1:0}):e}function ra(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function rs(e){return e?Mn(e):"-"}function Gu(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=ra(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Qu(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function Qu(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function Hu(e){let t=W(!1),r=W(null);const n=F(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),Y.getEnrichedProductById(e))),a=F(()=>s(n)?.who??[]),o=F(()=>s(n)?.stockParsed??null),i=F(()=>s(n)?.purchases??[]),l=F(()=>s(n)?.byDate?Hl(s(n).byDate):[]),c=Ne({purchase:{quantity:null,unit:"",store:"",who:ea.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=W(!1),v=W(null);br(()=>{!s(n)||s(f)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=ea.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??"",c.store.comment=s(n).storeInfo?.storeComment??null,c.who=s(n)?.who?[...s(n).who]:[],$(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),$(f,!0))});const g=F(()=>s(v)?{store:JSON.stringify(c.store)!==JSON.stringify(s(v).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(s(v).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?s(o)?c.stock.quantity.toString()!==s(o).quantity||c.stock.unit!==s(o).unit||(c.stock.notes||"")!==(s(o).notes||""):!0:!1}const m=F(()=>!!(s(v)&&(s(g).store||s(g).stock||s(g).who)));let _=W(null);const x=F(()=>s(_)?s(i).find(q=>q.$id===s(_))??null:null);async function b(q,N){$(t,!0),$(r,null);try{const H=await q();return N&&w("success",N),H}catch(H){const ne=H instanceof Error?H.message:"Une erreur est survenue";return $(r,ne,!0),w("error",ne),console.error("[ProductModalState]",H),null}finally{$(t,!1)}}function w(q,N){const H=new CustomEvent("toast",{detail:{type:q,message:N}});window.dispatchEvent(H)}async function E(){s(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!Y.currentMainId)throw new Error("mainId non disponible");const{quantity:q,unit:N}=ts(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await Wt(s(n).$id,{},R=>Y.getEnrichedProductById(R)));const H=c.purchase.status||"delivered";let ne=c.purchase.deliveryDate||null;H==="delivered"&&!ne&&(ne=new Date().toISOString()),await So({products:[s(n).$id],mainId:Y.currentMainId,unit:N,quantity:q,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:H,orderDate:c.purchase.orderDate||null,deliveryDate:ne}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function y(q){$(_,q.$id,!0)}function S(){$(_,null)}async function k(q){q.$id&&await b(async()=>{const{quantity:N,unit:H}=ts(q.quantity,q.unit),ne=q.status||null;let R=q.deliveryDate||null;ne==="delivered"&&!R&&(R=new Date().toISOString()),await xo(q.$id,{unit:H,quantity:N,store:q.store||null,who:q.who||null,notes:q.notes||"",price:q.price||null,status:ne,orderDate:q.orderDate||null,deliveryDate:R}),$(_,null)},"Achat modifié avec succès")}async function A(q){const N=s(i).find(H=>H.$id===q);N&&confirm(`Supprimer cet achat (${N.quantity} ${N.unit}) ?`)&&await b(async()=>{await Po(q)},"Achat supprimé avec succès")}async function M(){s(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const q={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Zn(s(n).$id,JSON.stringify(q))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await Wt(s(n).$id,{stockReel:JSON.stringify(q)},N=>Y.getEnrichedProductById(N))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function C(){s(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await Zn(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await Wt(s(n).$id,{stockReel:null},q=>Y.getEnrichedProductById(q)))},"Stock supprimé")}async function se(q){s(n)&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, setWho normal...`),await yo(s(n).$id,q)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await Wt(s(n).$id,{who:q},N=>Y.getEnrichedProductById(N)))},"Volontaires mis à jour")}async function Q(q){s(n)&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await bo(s(n).$id,q)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await Wt(s(n).$id,{store:JSON.stringify(q)},N=>Y.getEnrichedProductById(N)))},"Magasin mis à jour")}async function L(q){s(n)&&await b(async()=>{await hr(s(n).$id,{totalNeededOverride:JSON.stringify(q)})},"Override appliqué")}async function X(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await hr(s(n).$id,{totalNeededOverride:null})},"Override supprimé")}async function ie(){!s(n)||!s(m)||await b(async()=>{const q={};if(s(g).stock&&c.stock.quantity&&c.stock.unit){const N={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};q.stockReel=JSON.stringify(N)}if(s(g).who&&(q.who=c.who),s(g).store){const N={storeName:c.store.name||"",storeComment:c.store.comment||void 0};q.storeInfo=N}Object.keys(q).length>0&&(await wo(s(n).$id,q,N=>Y.getEnrichedProductById(N)),$(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(_)},get editingPurchaseData(){return s(x)},forms:c,addPurchase:E,startEditPurchase:y,cancelEditPurchase:S,updateEditedPurchase:k,removePurchase:A,setStock:M,removeStock:C,setWho:se,updateStore:Q,setOverride:L,removeOverride:X,saveAllChanges:ie,get hasChanges(){return s(g)},get hasAnyChanges(){return s(m)},formatQuantity:Nn,formatDate:Mn,formatDisplayQuantity:Uu}}function Ku(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Ju(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Yu(e,t){t().cancelEditPurchase()}var Zu=P('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Xu=P('<span class="loading loading-spinner loading-sm"></span>'),Fu=P('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),ed=P('<span class="loading loading-spinner loading-sm"></span>'),td=P('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),rd=(e,t,r)=>t(s(r)),nd=(e,t,r)=>t(s(r).$id),ad=P('<span class="loading loading-spinner loading-sm"></span>'),sd=P('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),od=P('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),id=P(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function ld(e,t){z(t,!0);let r=Oe(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(fe){return fe.quantity!==null&&fe.quantity!==0&&fe.unit?.trim()!==""}function o(fe){r().removePurchase(fe)}function i(fe){r().startEditPurchase(fe)}var l=id(),c=u(l),f=u(c);Kt(f,{class:"h-5 w-5"});var v=d(c,2),g=u(v),p=d(u(g),2),m=u(p),_=u(m);an(_,{class:"h-4 w-4 opacity-50"});var x=d(_,2),b=d(m,2),w=u(b);w.value=w.__value="";var E=d(w);E.value=E.__value="kg";var y=d(E);y.value=y.__value="gr.";var S=d(y);S.value=S.__value="l.";var k=d(S);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var M=d(A);M.value=M.__value="bottes";var C=d(b,2),se=u(C);Zt(se,{class:"h-4 w-4 opacity-50"});var Q=d(se,2),L=d(C,2),X=u(L);sn(X,{class:"h-4 w-4 opacity-50"});var ie=d(X,2),q=d(L,2),N=d(u(q),2),H=d(p,2),ne=u(H),R=u(ne);ga(R,{class:"h-4 w-4 opacity-50"});var te=d(R,2),ue=d(H,2),de=u(ue),D=u(de),Z=u(D),me=u(Z);me.value=me.__value="delivered";var be=d(me);be.value=be.__value="ordered";var Pe=d(be);Pe.value=Pe.__value="requested";var O=d(D,2),ee=d(de,2);{var Ae=fe=>{var J=Zu(),_e=d(u(J),2);Ce(_e,()=>r().forms.purchase.deliveryDate,Le=>r().forms.purchase.deliveryDate=Le),h(fe,J)};I(ee,fe=>{r().forms.purchase.status==="ordered"&&fe(Ae)})}var Te=d(ue,2),Be=u(Te);Be.__click=[Ku,n,r];var Me=u(Be);{var je=fe=>{var J=Xu();h(fe,J)},le=fe=>{var J=gt("Ajouter l'achat");h(fe,J)};I(Me,fe=>{r().loading?fe(je):fe(le,!1)})}var xe=d(v,2);{var ot=fe=>{var J=Fu(),_e=u(J);Kt(_e,{class:"mx-auto mb-2 h-12 w-12"}),h(fe,J)},bt=fe=>{var J=od(),_e=u(J),Le=d(u(_e));at(Le,21,()=>r().purchasesList,rt=>rt.$id,(rt,ge,Ie)=>{var Ge=G(),Et=j(Ge);{var Ft=K=>{var ye=td(),Ee=u(ye),Ue=u(Ee),ze=u(Ue),et=d(ze,2),dt=u(et);dt.value=dt.__value="kg";var it=d(dt);it.value=it.__value="gr.";var ft=d(it);ft.value=ft.__value="l.";var Je=d(ft);Je.value=Je.__value="ml";var Qe=d(Je);Qe.value=Qe.__value="unité";var yt=d(Qe);yt.value=yt.__value="bottes";var Lt=d(Ee),zt=u(Lt),$t=d(Lt),tr=u($t),wr=d($t),Vt=u(wr),rr=u(Vt);rr.value=rr.__value="requested";var nr=d(rr);nr.value=nr.__value="ordered";var ar=d(nr);ar.value=ar.__value="delivered";var Ut=d(ar);Ut.value=Ut.__value="cancelled";var re=d(wr),pe=u(re),$e=d(re),Ye=u($e),Ze=d($e),Ve=u(Ze),lt=d(Ze),Ct=u(lt),Br=d(lt),Cn=u(Br),on=u(Cn);on.__click=[Ju,r,a];var jo=u(on);{var Bo=Re=>{var Vo=ed();h(Re,Vo)},Lo=Re=>{fu(Re,{class:"h-3 w-3"})};I(jo,Re=>{r().loading?Re(Bo):Re(Lo,!1)})}var ba=d(on,2);ba.__click=[Yu,r];var zo=u(ba);xt(zo,{class:"h-3 w-3"}),U(Re=>on.disabled=Re,[()=>r().loading||!a(s(ge))]),Ce(ze,()=>s(ge).quantity,Re=>s(ge).quantity=Re),ir(et,()=>s(ge).unit,Re=>s(ge).unit=Re),Ce(zt,()=>s(ge).store,Re=>s(ge).store=Re),Ce(tr,()=>s(ge).who,Re=>s(ge).who=Re),ir(Vt,()=>s(ge).status,Re=>s(ge).status=Re),Ce(pe,()=>s(ge).orderDate,Re=>s(ge).orderDate=Re),Ce(Ye,()=>s(ge).deliveryDate,Re=>s(ge).deliveryDate=Re),Ce(Ve,()=>s(ge).price,Re=>s(ge).price=Re),Ce(Ct,()=>s(ge).notes,Re=>s(ge).notes=Re),h(K,ye)},er=K=>{var ye=sd(),Ee=u(ye),Ue=u(Ee),ze=d(Ee),et=u(ze),dt=d(ze),it=u(dt),ft=d(dt),Je=u(ft),Qe=u(Je),yt=d(ft),Lt=u(yt),zt=d(yt),$t=u(zt),tr=d(zt),wr=u(tr),Vt=d(tr),rr=u(Vt),nr=d(Vt),ar=u(nr),Ut=u(ar);Ut.__click=[rd,i,ge];var re=u(Ut);Gr(re,{class:"h-4 w-4"});var pe=d(Ut,2);pe.__click=[nd,o,ge];var $e=u(pe);{var Ye=Ve=>{var lt=ad();h(Ve,lt)},Ze=Ve=>{xt(Ve,{class:"h-4 w-4"})};I($e,Ve=>{r().loading?Ve(Ye):Ve(Ze,!1)})}U((Ve,lt,Ct,Br,Cn)=>{B(Ue,Ve),B(et,s(ge).store||"-"),B(it,s(ge).who||"-"),ke(Je,1,`badge badge-sm ${lt??""}`),B(Qe,Ct),B(Lt,Br),B($t,Cn),B(wr,s(ge).price?`${s(ge).price}€`:"-"),B(rr,s(ge).notes||"-"),pe.disabled=r().loading},[()=>Nn(s(ge).quantity,s(ge).unit),()=>ra(s(ge).status).class,()=>ra(s(ge).status).text,()=>rs(s(ge).orderDate),()=>rs(s(ge).deliveryDate)]),h(K,ye)};I(Et,K=>{r().editingPurchaseId===s(ge).$id?K(Ft):K(er,!1)})}h(rt,Ge)}),h(fe,J)};I(xe,fe=>{r().purchasesList.length===0?fe(ot):fe(bt,!1)})}U(fe=>{ke(O,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),Be.disabled=fe},[()=>r().loading||!n()]),Ce(x,()=>r().forms.purchase.quantity,fe=>r().forms.purchase.quantity=fe),ir(b,()=>r().forms.purchase.unit,fe=>r().forms.purchase.unit=fe),Ce(Q,()=>r().forms.purchase.store,fe=>r().forms.purchase.store=fe),Ce(ie,()=>r().forms.purchase.who,fe=>r().forms.purchase.who=fe),Ce(N,()=>r().forms.purchase.price,fe=>r().forms.purchase.price=fe),Ce(te,()=>r().forms.purchase.notes,fe=>r().forms.purchase.notes=fe),ir(Z,()=>r().forms.purchase.status,fe=>r().forms.purchase.status=fe),h(e,l),V()}Ke(["click"]);async function cd(e,t){await t()?.removeStock()}var ud=P(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),dd=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},fd=P('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),vd=P('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),hd=P('<span class="loading loading-spinner loading-xs"></span>'),pd=P('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),md=P(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function _d(e,t){z(t,!0);let r=Oe(t,"modalState",7);var n=md(),a=u(n),o=u(a);Xn(o,{class:"h-5 w-5"});var i=d(a,2),l=u(i),c=u(l),f=u(c),v=d(c,2),g=u(v);Oo(g,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(N,H)=>{var ne=ud();h(N,ne)},$$slots:{default:!0}});var p=d(v,2),m=u(p),_=u(m);an(_,{class:"h-4 w-4 opacity-50"});var x=d(_,2),b=d(m,2),w=u(b);w.value=w.__value="";var E=d(w);E.value=E.__value="kg";var y=d(E);y.value=y.__value="gr.";var S=d(y);S.value=S.__value="l.";var k=d(S);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var M=d(A);M.value=M.__value="bottes";var C=d(p,2),se=u(C),Q=d(C,2),L=u(Q);L.__click=[dd,r];var X=d(i,2);{var ie=N=>{var H=fd(),ne=u(H);Xn(ne,{class:"mx-auto mb-2 h-12 w-12"}),h(N,H)},q=N=>{var H=pd(),ne=u(H),R=d(u(ne),2),te=u(R),ue=d(u(te),2),de=u(ue),D=d(te,2),Z=d(u(D),2),me=u(Z),be=d(D,2);{var Pe=Me=>{var je=vd(),le=d(u(je),2),xe=u(le);U(()=>B(xe,r().stockParsed.notes)),h(Me,je)};I(be,Me=>{r().stockParsed.notes&&Me(Pe)})}var O=d(R,2),ee=u(O);ee.__click=[cd,r];var Ae=u(ee);{var Te=Me=>{var je=hd();h(Me,je)},Be=Me=>{var je=gt("Supprimer le stock");h(Me,je)};I(Ae,Me=>{r().loading?Me(Te):Me(Be,!1)})}U(Me=>{B(de,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),B(me,Me),ee.disabled=r().loading},[()=>Mn(r().stockParsed.dateTime)]),h(N,H)};I(X,N=>{r().stockParsed?N(q,!1):N(ie)})}U(N=>{B(f,`Déclarer le stock réel du ${N??""}`),L.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),Ce(x,()=>r().forms.stock.quantity,N=>r().forms.stock.quantity=N),ir(b,()=>r().forms.stock.unit,N=>r().forms.stock.unit=N),Ce(se,()=>r().forms.stock.notes,N=>r().forms.stock.notes=N),h(e,n),V()}Ke(["click"]);function gd(e,t,r){t().forms.who=[...t().whoList],$(r,"")}var bd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},yd=P('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function wd(e,t){z(t,!0);let r=Oe(t,"modalState",7),n=W("");const a=F(()=>{const M=new Set([...Y.uniqueWho,...r().forms.who]);return Array.from(M).map(C=>({id:C,label:C,selected:r().forms.who.includes(C)}))});function o(M){const C=M.trim();C&&!r().forms.who.includes(C)&&(r().forms.who=[...r().forms.who,C])}function i(M){r().forms.who=r().forms.who.filter(C=>C!==M)}function l(M){r().forms.who.includes(M)?i(M):o(M)}function c(){s(n).trim()&&(o(s(n)),$(n,""))}var f=yd(),v=u(f),g=u(v),p=d(u(g),4),m=u(p),_=u(m),x=u(_);sn(x,{class:"h-4 w-4 opacity-50"});var b=d(x,2);b.__keydown=[bd,c];var w=d(_,2);w.__click=c;var E=u(w);Ro(E,{size:16});var y=d(m,2),S=d(u(y),2);rn(S,{get items(){return s(a)},onToggleItem:l,showIcon:!0});var k=d(p,2),A=u(k);A.__click=[gd,r,n],U(M=>{b.disabled=r().loading,w.disabled=M,A.disabled=r().loading},[()=>r().loading||!s(n).trim()]),Ce(b,()=>s(n),M=>$(n,M)),h(e,f),V()}Ke(["keydown","click"]);var Sd=P('<div class="mb-1 text-xs opacity-70"> </div>'),xd=(e,t,r)=>t(s(r)),Pd=P("<button><!> </button>"),Ed=P('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function qo(e,t){z(t,!0);let r=Oe(t,"maxSuggestions",3,8),n=Oe(t,"title",3,"Suggestions :"),a=Oe(t,"buttonSize",3,"btn-xs"),o=Oe(t,"buttonVariant",3,"btn-soft"),i=Oe(t,"disabled",3,!1);const l=F(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=G(),v=j(f);{var g=p=>{var m=Ed(),_=u(m);{var x=w=>{var E=Sd(),y=u(E);U(()=>B(y,n())),h(w,E)};I(_,w=>{n()&&w(x)})}var b=d(_,2);at(b,21,()=>s(l),w=>w.id,(w,E)=>{var y=Pd();y.__click=[xd,c,E];var S=u(y);{var k=M=>{var C=G(),se=j(C);$r(se,()=>s(E).icon,(Q,L)=>{L(Q,{class:"h-3 w-3"})}),h(M,C)};I(S,M=>{s(E).icon&&M(k)})}var A=d(S);U(()=>{ke(y,1,`btn ${a()??""} ${o()??""}`),y.disabled=i()||s(E).disabled,vr(y,"title",s(E).disabled?"Déjà sélectionné":s(E).label),B(A,` ${s(E).label??""}`)}),h(w,y)}),h(p,m)};I(v,p=>{s(l).length>0&&p(g)})}h(e,f),V()}Ke(["click"]);var $d=(e,t)=>{e.key==="Enter"&&t()},kd=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},Ad=P(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function Td(e,t){z(t,!0);let r=Oe(t,"modalState",7);const n=F(()=>r()?.hasChanges?.store||!1);async function a(){if(!s(n))return;const E={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(E)}var o=Ad(),i=u(o),l=u(i),c=d(u(l),4),f=u(c),v=u(f),g=u(v);Zt(g,{class:"h-4 w-4 opacity-50"});var p=d(g,2);p.__keydown=[$d,a];var m=d(v,2);{var _=E=>{{let y=F(()=>Y.uniqueStores.map(S=>({id:S,label:S,disabled:S===r().forms.store.name})));qo(E,{get suggestions(){return s(y)},onSuggestionClick:S=>{r().forms.store.name=S.label},buttonVariant:"btn-outline"})}};I(m,E=>{Y.uniqueStores.length>0&&E(_)})}var x=d(f,2),b=d(c,2),w=u(b);w.__click=[kd,r],U(()=>w.disabled=r().loading),Ce(p,()=>r().forms.store.name,E=>r().forms.store.name=E),Ce(x,()=>r().forms.store.comment,E=>r().forms.store.comment=E),h(e,o),V()}Ke(["keydown","click"]);async function Nd(e,t,r,n,a,o){if(!t.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(i),$(o,!1)}async function Md(e,t,r){t.modalState&&(await t.modalState.removeOverride(),$(r,!1))}var Cd=P('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),Id=P('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),Dd=P(" <!>",1),Rd=(e,t)=>$(t,!0),Od=P('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),qd=P('<div class="text-error text-sm">Limite de caractères atteinte</div>'),jd=P('<span class="loading loading-spinner loading-sm"></span>'),Bd=P('<span class="loading loading-spinner loading-sm"></span>'),Ld=P(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div class="form-control"><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),zd=P('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function Vd(e,t){z(t,!0);const r=F(()=>t.modalState.product?.totalNeededOverrideParsed),n=F(()=>t.modalState.product?.displayTotalNeeded||[]);let a=W(!1),o=W(Ne(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=W(Ne(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=W(Ne(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),c=F(()=>s(o)>0&&s(i).trim()!=="");var f=zd(),v=u(f),g=u(v),p=u(g);{var m=x=>{var b=Od(),w=j(b),E=u(w),y=d(u(E),2);{var S=Q=>{var L=Cd();h(Q,L)};I(y,Q=>{s(r)&&Q(S)})}var k=d(y,2),A=u(k);{var M=Q=>{var L=Dd(),X=j(L),ie=d(X);{var q=N=>{var H=Id(),ne=u(H);ga(ne,{});var R=d(ne);U(()=>B(R,` ${s(r).comment??""}`)),h(N,H)};I(ie,N=>{s(r).comment&&N(q)})}U(N=>B(X,`${N??""} `),[()=>Nn(s(r).totalOverride.q,s(r).totalOverride.u)]),h(Q,L)},C=Q=>{var L=gt();U(()=>B(L,s(n))),h(Q,L)};I(A,Q=>{s(r)?Q(M):Q(C,!1)})}var se=d(w,2);se.__click=[Rd,a],h(x,b)},_=x=>{var b=Ld(),w=j(b),E=u(w),y=u(E);iu(y,{class:"h-4 w-4 opacity-50"});var S=d(y,2),k=d(E,2),A=u(k);A.value=A.__value="";var M=d(A);M.value=M.__value="kg";var C=d(M);C.value=C.__value="gr.";var se=d(C);se.value=se.__value="l.";var Q=d(se);Q.value=Q.__value="ml";var L=d(Q);L.value=L.__value="unité";var X=d(L);X.value=X.__value="bottes";var ie=d(w,2),q=u(ie),N=d(u(q),2),H=d(N,2);{var ne=O=>{var ee=qd();h(O,ee)};I(H,O=>{s(l).length>=250&&O(ne)})}var R=d(ie,2),te=u(R);te.__click=[Md,t,a];var ue=u(te);{var de=O=>{var ee=jd();h(O,ee)},D=O=>{var ee=gt();U(()=>B(ee,`Réinitialiser le total calculé (${s(n)??""}).`)),h(O,ee)};I(ue,O=>{t.modalState.loading?O(de):O(D,!1)})}var Z=d(te,2);Z.__click=[Nd,t,o,i,l,a];var me=u(Z);{var be=O=>{var ee=Bd();h(O,ee)},Pe=O=>{var ee=gt("Appliquer");h(O,ee)};I(me,O=>{t.modalState.loading?O(be):O(Pe,!1)})}U(()=>{te.disabled=t.modalState.loading,Z.disabled=t.modalState.loading||!s(c)}),Ce(S,()=>s(o),O=>$(o,O)),ir(k,()=>s(i),O=>$(i,O)),Ce(N,()=>s(l),O=>$(l,O)),h(x,b)};I(p,x=>{s(a)?x(_,!1):x(m)})}U(()=>ke(v,1,`card border-base-300 border ${s(a)?"bg-base-200":"bg-base-100"}`)),h(e,f),V()}Ke(["click"]);var Ud=P('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Wd=P('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Gd=P('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Qd=P('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Hd(e,t){z(t,!0);const r=F(()=>t.modalState.recipes);var n=Qd(),a=j(n);Vd(a,{get modalState(){return t.modalState}});var o=d(a,2),i=u(o),l=u(i);_a(l,{class:"h-5 w-5"});var c=d(i,2);{var f=g=>{var p=Ud(),m=u(p);an(m,{class:"mx-auto mb-2 h-12 w-12"}),h(g,p)},v=g=>{var p=Gd(),m=u(p),_=d(u(m));at(_,21,()=>s(r),x=>x.r,(x,b)=>{var w=Wd(),E=u(w),y=u(E),S=d(E),k=u(S),A=d(S),M=u(A);U(C=>{B(y,`${s(b).r??""} (${(s(b).a||"-")??""} c.)`),B(k,`${(s(b).q||s(b).qEq)??""} ${(s(b).u||s(b).uEq)??""}`),B(M,C)},[()=>Mn(s(b).date)]),h(x,w)}),h(g,p)};I(c,g=>{s(r).length===0?g(f):g(v,!1)})}h(e,n),V()}function Kd(e,t,r){s(t).saveAllChanges().then(()=>{r.onClose()})}var Jd=P('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Yd=P('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Zd=(e,t)=>t("recettes"),Xd=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Fd=P('<span class="badge badge-sm badge-ghost ml-1">0</span>'),ef=(e,t)=>t("magasins"),tf=P('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),rf=(e,t)=>t("volontaires"),nf=P('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),af=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),sf=P('<span class="badge badge-sm badge-ghost ml-1">0</span>'),of=(e,t)=>t("stock"),lf=P('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),cf=P('<span class="badge badge-sm badge-secondary ml-1">1</span>'),uf=P('<span class="badge badge-sm badge-ghost ml-1">0</span>'),df=(e,t)=>t("achats"),ff=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),vf=P('<span class="badge badge-sm badge-ghost ml-1">0</span>'),hf=P('<div class="alert alert-error mb-4"><!> <span> </span></div>'),pf=P('<span class="loading loading-spinner loading-sm"></span>'),mf=P('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),_f=P('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function gf(e,t){z(t,!0);let r=Oe(t,"initialTab",3,"recettes"),n=F(()=>Hu(t.productId)),a=W(Ne(r()));function o(b){$(a,b,!0)}var i=_f(),l=u(i),c=u(l),f=u(c);{var v=b=>{var w=Jd(),E=j(w),y=u(E),S=d(E,2),k=u(S),A=u(k),M=d(k,2),C=d(u(M));U(()=>{B(y,s(n).product?.productName),B(A,s(n).product?.productType),B(C,` ${s(n).product?.displayTotalNeeded??""}`)}),h(b,w)},g=b=>{var w=Yd();h(b,w)};I(f,b=>{s(n)&&s(n).product?b(v):b(g,!1)})}var p=d(f,2);p.__click=function(...b){t.onClose?.apply(this,b)};var m=u(p);xt(m,{class:"h-4 w-4"});var _=d(c,2);{var x=b=>{var w=mf(),E=j(w),y=u(E);y.__click=[Zd,o];var S=u(y);_a(S,{class:"mr-1 h-5 w-5"});var k=d(S,2);{var A=J=>{var _e=Xd(),Le=u(_e);U(()=>B(Le,s(n).product?.nbRecipes)),h(J,_e)},M=J=>{var _e=Fd();h(J,_e)};I(k,J=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?J(A):J(M,!1)})}var C=d(y,2);C.__click=[ef,o];var se=u(C);Zt(se,{class:"mr-1 h-5 w-5"});var Q=d(se,2);{var L=J=>{var _e=tf();h(J,_e)};I(Q,J=>{s(n).hasChanges?.store&&J(L)})}var X=d(C,2);X.__click=[rf,o];var ie=u(X);Fn(ie,{class:"mr-1 h-5 w-5"});var q=d(ie,2);{var N=J=>{var _e=nf();h(J,_e)},H=J=>{var _e=G(),Le=j(_e);{var rt=Ie=>{var Ge=af(),Et=u(Ge);U(()=>B(Et,s(n).product?.who.length)),h(Ie,Ge)},ge=Ie=>{var Ge=sf();h(Ie,Ge)};I(Le,Ie=>{s(n).product?.who&&s(n).product?.who.length>0?Ie(rt):Ie(ge,!1)},!0)}h(J,_e)};I(q,J=>{s(n).hasChanges?.who?J(N):J(H,!1)})}var ne=d(X,2);ne.__click=[of,o];var R=u(ne);Xn(R,{class:"mr-1 h-5 w-5"});var te=d(R,2);{var ue=J=>{var _e=lf();h(J,_e)},de=J=>{var _e=G(),Le=j(_e);{var rt=Ie=>{var Ge=cf();h(Ie,Ge)},ge=Ie=>{var Ge=uf();h(Ie,Ge)};I(Le,Ie=>{s(n).stockParsed?Ie(rt):Ie(ge,!1)},!0)}h(J,_e)};I(te,J=>{s(n).hasChanges?.stock?J(ue):J(de,!1)})}var D=d(ne,2);D.__click=[df,o];var Z=u(D);Kt(Z,{class:"mr-1 h-5 w-5"});var me=d(Z,2);{var be=J=>{var _e=ff(),Le=u(_e);U(()=>B(Le,s(n).purchasesList.length)),h(J,_e)},Pe=J=>{var _e=vf();h(J,_e)};I(me,J=>{s(n).purchasesList.length>0?J(be):J(Pe,!1)})}var O=d(E,2),ee=u(O);{var Ae=J=>{var _e=hf(),Le=u(_e);xt(Le,{class:"h-4 w-4"});var rt=d(Le,2),ge=u(rt);U(()=>B(ge,`erreur : ${s(n).error??""}`)),h(J,_e)};I(ee,J=>{s(n).error&&J(Ae)})}var Te=d(ee,2),Be=u(Te);dl(Be,()=>s(a),J=>{var _e=G(),Le=j(_e);{var rt=Ie=>{Hd(Ie,{get modalState(){return s(n)}})},ge=Ie=>{var Ge=G(),Et=j(Ge);{var Ft=K=>{ld(K,{get modalState(){return s(n)}})},er=K=>{var ye=G(),Ee=j(ye);{var Ue=et=>{_d(et,{get modalState(){return s(n)}})},ze=et=>{var dt=G(),it=j(dt);{var ft=Qe=>{wd(Qe,{get modalState(){return s(n)}})},Je=Qe=>{var yt=G(),Lt=j(yt);{var zt=$t=>{Td($t,{get modalState(){return s(n)}})};I(Lt,$t=>{s(a)==="magasins"&&$t(zt)},!0)}h(Qe,yt)};I(it,Qe=>{s(a)==="volontaires"?Qe(ft):Qe(Je,!1)},!0)}h(et,dt)};I(Ee,et=>{s(a)==="stock"?et(Ue):et(ze,!1)},!0)}h(K,ye)};I(Et,K=>{s(a)==="achats"?K(Ft):K(er,!1)},!0)}h(Ie,Ge)};I(Le,Ie=>{s(a)==="recettes"?Ie(rt):Ie(ge,!1)})}h(J,_e)});var Me=d(O,2),je=u(Me);je.__click=function(...J){t.onClose?.apply(this,J)};var le=u(je),xe=d(je,2);xe.__click=[Kd,n,t];var ot=u(xe);{var bt=J=>{var _e=pf();h(J,_e)},fe=J=>{var _e=gt("Tout enregistrer");h(J,_e)};I(ot,J=>{s(n).loading?J(bt):J(fe,!1)})}U(()=>{ke(y,1,`tab ${s(a)==="recettes"?"tab-active":""}`),ke(C,1,`tab ${s(a)==="magasins"?"tab-active":""}`),ke(X,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),ke(ne,1,`tab ${s(a)==="stock"?"tab-active":""}`),ke(D,1,`tab ${s(a)==="achats"?"tab-active":""}`),B(le,s(n)?.hasAnyChanges?"Annuler":"Fermer"),xe.disabled=s(n).loading||!s(n).hasAnyChanges}),h(b,w)};I(_,b=>{s(n)&&b(x)})}h(e,i),V()}Ke(["click"]);var bf=(e,t,r)=>t(r),yf=P("<button><span> </span> <!></button>"),wf=(e,t)=>t(),Sf=P('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1 mb-2"></div> <button class="btn btn-sm btn-primary btn-outline" type="button"><span>Toutes les dates</span></button></fieldset></div></div>');function xf(e,t){z(t,!0);let r=Oe(t,"availableDates",19,()=>[]),n=Oe(t,"currentRange",19,()=>({start:null,end:null})),a=W(Ne(n().start)),o=W(Ne(n().end));br(()=>{$(a,n().start,!0),$(o,n().end,!0)});function i(b){s(a)===b&&s(o)===b?v():new Date(b)<new Date(s(a))?$(a,b,!0):(new Date(b)>new Date(s(o))||$(a,b,!0),$(o,b,!0)),t.onRangeChange(s(a),s(o))}function l(b){return new Date(b)>=new Date(s(a))&&new Date(b)<=new Date(s(o))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function c(b){return new Date(b).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function f(b){const E=new Date(b).getUTCHours();return E===12?"sun":E===20?"moon":E===8?"cloud":null}function v(){r().length!==0&&($(a,r()[0],!0),$(o,r()[r().length-1],!0),t.onRangeChange(s(a),s(o)))}var g=Sf(),p=u(g),m=u(p),_=d(u(m),2);at(_,22,r,b=>b,(b,w)=>{var E=yf();E.__click=[bf,i,w];var y=u(E),S=u(y),k=d(y,2);{var A=C=>{hu(C,{size:16})},M=C=>{var se=G(),Q=j(se);{var L=ie=>{su(ie,{size:16})},X=ie=>{var q=G(),N=j(q);{var H=ne=>{Jc(ne,{size:16})};I(N,ne=>{f(w)==="cloud"&&ne(H)},!0)}h(ie,q)};I(Q,ie=>{f(w)==="moon"?ie(L):ie(X,!1)},!0)}h(C,se)};I(k,C=>{f(w)==="sun"?C(A):C(M,!1)})}U((C,se)=>{ke(E,1,`btn btn-sm ${C??""}`),B(S,se)},[()=>l(w),()=>c(w)]),h(b,E)});var x=d(_,2);x.__click=[wf,v],h(e,g),V()}Ke(["click"]);var Pf=()=>Y.clearFilters(),Ef=e=>Y.setSearchQuery(e.currentTarget.value),$f=()=>Y.setGroupBy("none"),kf=()=>Y.setGroupBy("store"),Af=()=>Y.setGroupBy("productType"),Tf=()=>Y.clearTypeAndTemperatureFilters(),Nf=P('<button class="btn btn-sm btn-circle btn-outline text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Mf=(e,t)=>Y.toggleProductType(t),Cf=P("<button><!> </button>"),If=()=>Y.toggleTemperature("frais"),Df=()=>Y.toggleTemperature("surgele"),Rf=P('<div class="flex-1"><fieldset><div class="flex items-center justify-between"><legend class="label"><div class="label-text">Types & Température</div></legend> <!></div> <div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div></fieldset></div>'),Of=(e,t)=>Y.toggleStore(t),qf=P("<button><!> </button>"),jf=()=>Y.clearStoreFilters(),Bf=P('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Lf=P('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),zf=(e,t)=>Y.toggleWho(t),Vf=P("<button><!> </button>"),Uf=()=>Y.clearWhoFilters(),Wf=P('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Gf=P('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Qf=P('<div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <!> <div class="mt-4 flex"><!> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div>',1);function Hf(e,t){z(t,!0);const r=F(()=>Y.filters),n=F(()=>Y.uniqueStores),a=F(()=>Y.uniqueWho),o=F(()=>Y.uniqueProductTypes);var i=Qf(),l=j(i),c=u(l),f=u(c);Co(f,{class:"h-5 w-5"});var v=d(c,2);v.__click=[Pf];var g=u(v);xt(g,{class:"h-4 w-4"});var p=d(l,2),m=u(p),_=d(u(m),2),x=u(_);vu(x,{class:"h-4 w-4"});var b=d(x,2);b.__input=[Ef];var w=d(m,2),E=d(u(w),2),y=u(E);y.__change=[$f];var S=d(y,2);S.__change=[kf];var k=d(S,2);k.__change=[Af];var A=d(p,2);xf(A,{get availableDates(){return Y.availableDates},get currentRange(){return Y.dateRange},onRangeChange:(N,H)=>Y.setDateRange(N,H)});var M=d(A,2),C=u(M);{var se=N=>{var H=Rf(),ne=u(H),R=u(ne),te=d(u(R),2);{var ue=O=>{var ee=Nf();ee.__click=[Tf];var Ae=u(ee);Xc(Ae,{}),h(O,ee)};I(te,O=>{(s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0)&&O(ue)})}var de=d(R,2);at(de,20,()=>s(o),O=>O,(O,ee)=>{const Ae=F(()=>ta(ee));var Te=Cf();Te.__click=[Mf,ee];var Be=u(Te);$r(Be,()=>s(Ae).icon,(je,le)=>{le(je,{class:"mr-1 h-5 w-5"})});var Me=d(Be);U(je=>{ke(Te,1,`btn btn-sm ${je??""}`),B(Me,` ${s(Ae).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-accent":s(r).selectedProductTypes.includes(ee)?"btn-accent":"btn-dash btn-accent"]),h(O,Te)});var D=d(de,2),Z=u(D);Z.__click=[If];var me=u(Z);Io(me,{class:"h-5 w-5"});var be=d(Z,2);be.__click=[Df];var Pe=u(be);Do(Pe,{class:"h-5 w-5"}),U((O,ee)=>{ke(Z,1,`btn btn-sm ${O??""}`),ke(be,1,`btn btn-sm ${ee??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(N,H)};I(C,N=>{s(o).length>0&&N(se)})}var Q=d(C,2),L=u(Q);{var X=N=>{var H=Lf(),ne=u(H),R=d(u(ne),2),te=u(R);at(te,16,()=>s(n),D=>D,(D,Z)=>{var me=qf();me.__click=[Of,Z];var be=u(me);Zt(be,{class:"mr-1 h-3 w-3"});var Pe=d(be);U(O=>{ke(me,1,`btn btn-xs ${O??""}`),B(Pe,` ${Z??""}`)},[()=>s(r).selectedStores.length===0?"btn-soft btn-accent":s(r).selectedStores.includes(Z)?"btn-accent":"btn-dash btn-accent"]),h(D,me)});var ue=d(te,2);{var de=D=>{var Z=Bf();Z.__click=[jf];var me=u(Z);xt(me,{class:"h-3 w-3"}),h(D,Z)};I(ue,D=>{s(r).selectedStores.length>0&&D(de)})}h(N,H)};I(L,N=>{s(n).length>0&&N(X)})}var ie=d(L,2);{var q=N=>{var H=Gf(),ne=u(H),R=d(u(ne),2),te=u(R);at(te,16,()=>s(a),D=>D,(D,Z)=>{var me=Vf();me.__click=[zf,Z];var be=u(me);sn(be,{class:"mr-1 h-3 w-3"});var Pe=d(be);U(O=>{ke(me,1,`btn btn-xs ${O??""}`),B(Pe,` ${Z??""}`)},[()=>s(r).selectedWho.length===0?" btn-soft btn-info":s(r).selectedWho.includes(Z)?" btn-info":"btn-dash btn-info"]),h(D,me)});var ue=d(te,2);{var de=D=>{var Z=Wf();Z.__click=[Uf];var me=u(Z);xt(me,{class:"h-3 w-3"}),h(D,Z)};I(ue,D=>{s(r).selectedWho.length>0&&D(de)})}h(N,H)};I(ie,N=>{s(a).length>0&&N(q)})}U(()=>{yl(b,s(r).searchQuery),On(y,s(r).groupBy==="none"),On(S,s(r).groupBy==="store"),On(k,s(r).groupBy==="productType")}),h(e,i),V()}Ke(["click","input","change"]);Ke(["click"]);var Kf=P('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Jf=(e,t,r)=>t.onOpenGroupEditModal("store",r().map(n=>n.$id),r()),Yf=(e,t,r)=>t.onOpenGroupEditModal("who",r().map(n=>n.$id),r()),Zf=(e,t,r)=>t.onOpenGroupPurchaseModal(r()),Xf=P(`<button class="btn btn-sm btn-success btn-soft" title="Ouvrir le modal d'achat groupé"><!> Achat groupé <!></button>`),Ff=P('<div class="bg-base-200 sticky top-0 z-10 rounded-lg font-semibold"><div class="p-4"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!></div> <div class="flex items-center gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> Magasin <!></button> <button class="btn btn-sm btn-info btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> Volontaires <!></button> <!></div></div></div></div>'),ev=(e,t,r)=>t.onOpenModal(s(r).$id,"recettes"),tv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"recettes"),rv=P('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),nv=P('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),av=P('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),sv=P('<div class="text-base-content/60 text-sm font-normal"> </div>'),ov=(e,t,r)=>t.onOpenModal(s(r).$id,"magasins"),iv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"magasins"),lv=P('<div class="tooltip tooltip-info"><span class="text-base-content/50 text-xs">💬</span></div>'),cv=P('<div class="mt-1 text-sm font-medium"> <!></div>'),uv=P('<div class="text-base-content/50 text-sm italic">Non défini</div>'),dv=(e,t,r)=>t.onOpenModal(s(r).$id,"magasins"),fv=(e,t,r)=>t.onOpenModal(s(r).$id,"volontaires"),vv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"volontaires"),hv=P('<span class="badge badge-soft badge-info badge-sm text-xs"> </span>'),pv=P('<div class="mt-1 flex flex-wrap gap-1"></div>'),mv=P('<div class="text-base-content/50 text-sm italic">Non défini</div>'),_v=(e,t,r)=>t.onOpenModal(s(r).$id,"volontaires"),gv=(e,t,r)=>t.onOpenModal(s(r).$id,"recettes"),bv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"recettes"),yv=P('<div class="text-base-content/70 mt-1 flex items-center gap-3 text-xs"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),wv=(e,t,r)=>t.onOpenModal(s(r).$id,"achats"),Sv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"achats"),xv=P('<div><!> <span class="text-xs"> </span></div>'),Pv=P('<span class="text-base-content/50 text-sm">-</span>'),Ev=(e,t,r)=>t.onQuickValidation(s(r)),$v=P('<div class="flex items-center justify-between"><div class="bg-warning rounded px-2 py-1 text-sm font-medium"> </div> <button class="btn btn-xs btn-ghost text-base-content/70 btn-circle btn-outline hover:btn-success hover:text-success-content transition-all hover:scale-105" title="Déclarer comme acheté"><!></button></div>'),kv=P('<div class="flex items-center justify-center"><!></div>'),Av=P('<div class="mt-2"><div title="Bilan à la fin de la période (achats cumulés - besoins cumulés)"> </div></div>'),Tv=P('<div><div class="card-body px-1 py-2"><div class="flex flex-row gap-4"><div class="flex-1 lg:w-64 lg:flex-initial"><div class="hover:bg-base-50 cursor-pointer rounded p-2 transition-colors" role="button" tabindex="0"><div class="mb-2 flex items-center gap-2"><!> <div class="flex gap-1"><!> <!></div></div> <h3 class="mb-1 text-lg font-semibold"> <!></h3> <div class="text-base-content/70 flex items-center gap-1 text-sm"><!> </div></div></div> <div class="flex-1 space-y-2 lg:w-48 lg:flex-initial"><div class="group relative"><div class="flex items-center gap-2"><div class="hover:bg-base-200 flex-1 cursor-pointer rounded p-2 transition-colors" role="button" tabindex="0"><div class="flex items-center gap-2 text-sm"><!> <span class="font-medium">Magasin:</span></div> <!></div> <button class="btn btn-circle btn-ghost btn-sm opacity-0 transition-opacity group-hover:opacity-100" title="Modifier le magasin"><!></button></div></div> <div class="group relative"><div class="flex items-center gap-2"><div class="hover:bg-base-200 flex-1 cursor-pointer rounded p-2 transition-colors" role="button" tabindex="0"><div class="flex items-center gap-2 text-sm"><!> <span class="font-medium">Volontaires:</span></div> <!></div> <button class="btn btn-circle btn-ghost btn-sm opacity-0 transition-opacity group-hover:opacity-100" title="Modifier les volontaires"><!></button></div></div></div> <div class="flex-1 space-y-3 lg:w-80 lg:flex-initial"><div class="group bg-primary/5 border-primary/20 hover:bg-primary/10 relative cursor-pointer rounded border p-3 transition-colors" role="button" tabindex="0"><div class="text-primary mb-2 flex items-center gap-2 text-sm font-medium"><!> Besoins:</div> <div class="text-primary text-lg font-bold"> </div> <!></div> <div class="group bg-base-50 border-base-200 hover:bg-base-100 relative cursor-pointer rounded border p-3 transition-colors" role="button" tabindex="0"><div class="mb-2 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div class="flex flex-wrap gap-1"><!> <!></div></div> <div class="bg-base-50 border-base-200 rounded border p-3"><div class="mb-2 flex items-center gap-2 text-sm font-medium"><!> Manquant:</div> <!> <!></div></div></div></div></div>'),Nv=P('<!> <div class="space-y-3"></div>',1),Mv=P('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Cv=P('<div class="bg-base-100 space-y-4 rounded-lg"></div> <!>',1);function Iv(e,t){z(t,!0);const r={Package:an,MessageCircleQuestionMark:au,ShoppingCart:Kt,Clock:Kc,CircleCheck:Gc,CircleX:Qc,ClipboardCheck:Hc,PackageCheck:ou},n=F(()=>Y.groupedFilteredProducts),a=F(()=>Y.filters);var o=Cv(),i=j(o);at(i,21,()=>Object.entries(s(n)),([f,v])=>f,(f,v)=>{var g=F(()=>ls(s(v),2));let p=()=>s(g)[0],m=()=>s(g)[1];var _=Nv(),x=j(_);{var b=E=>{const y=F(()=>ta(p()));var S=Ff(),k=u(S),A=u(k),M=u(A),C=u(M);{var se=ue=>{var de=gt();U(()=>B(de,`🏪 ${p()??""} (${m().length??""})`)),h(ue,de)},Q=ue=>{var de=G(),D=j(de);{var Z=be=>{var Pe=Kf(),O=u(Pe);$r(O,()=>s(y).icon,(Me,je)=>{je(Me,{class:"h-4 w-4"})});var ee=d(O,2),Ae=u(ee),Te=d(ee,2),Be=u(Te);U(()=>{B(Ae,s(y).displayName),B(Be,`(${m().length??""})`)}),h(be,Pe)},me=be=>{var Pe=gt();U(()=>B(Pe,`📦 ${p()??""} (${m().length??""})`)),h(be,Pe)};I(D,be=>{s(a).groupBy==="productType"?be(Z):be(me,!1)},!0)}h(ue,de)};I(C,ue=>{s(a).groupBy==="store"?ue(se):ue(Q,!1)})}var L=d(M,2),X=u(L);X.__click=[Jf,t,m];var ie=u(X);Zt(ie,{size:16});var q=d(ie,2);Gr(q,{size:16});var N=d(X,2);N.__click=[Yf,t,m];var H=u(N);Fn(H,{size:16});var ne=d(H,2);Gr(ne,{size:16});var R=d(N,2);{var te=ue=>{var de=Xf();de.__click=[Zf,t,m];var D=u(de);Kt(D,{size:16});var Z=d(D,2);Xa(Z,{size:16}),h(ue,de)};I(R,ue=>{m().some(de=>de.displayMissingQuantity!=="✅ Complet")&&ue(te)})}h(E,S)};I(x,E=>{p()!==""&&E(b)})}var w=d(x,2);at(w,21,()=>Wu(m()||[],s(a)),E=>E.$id,(E,y)=>{const S=F(()=>Y.productsStatsByDateRange.get(s(y).$id)||{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedAvailableQuantities:"Équilibré",hasAvailable:!1,hasMissing:!1}),k=F(()=>ta(s(y).productType)),A=F(()=>Gu(s(y).purchases||[]));var M=Tv(),C=u(M),se=u(C),Q=u(se),L=u(Q);L.__click=[ev,t,y],L.__keydown=[tv,t,y];var X=u(L),ie=u(X);{var q=re=>{var pe=rv(),$e=u(pe);ru($e,{class:"h-4 w-4 animate-spin"}),h(re,pe)};I(ie,re=>{s(y).status==="isSyncing"&&re(q)})}var N=d(ie,2),H=u(N);{var ne=re=>{var pe=nv(),$e=u(pe);Io($e,{class:"text-success h-3 w-3"}),h(re,pe)};I(H,re=>{s(y).pFrais&&re(ne)})}var R=d(H,2);{var te=re=>{var pe=av(),$e=u(pe);Do($e,{class:"text-info h-3 w-3"}),h(re,pe)};I(R,re=>{s(y).pSurgel&&re(te)})}var ue=d(X,2),de=u(ue),D=d(de);{var Z=re=>{var pe=sv(),$e=u(pe);U(()=>B($e,`Ancien: ${s(y).previousNames[0]??""}`)),h(re,pe)};I(D,re=>{s(y).previousNames&&s(y).previousNames.length>0&&re(Z)})}var me=d(ue,2),be=u(me);$r(be,()=>s(k).icon,(re,pe)=>{pe(re,{class:"h-3 w-3"})});var Pe=d(be),O=d(Q,2),ee=u(O),Ae=u(ee),Te=u(Ae);Te.__click=[ov,t,y],Te.__keydown=[iv,t,y];var Be=u(Te),Me=u(Be);Zt(Me,{class:"text-base-content/50 h-4 w-4"});var je=d(Be,2);{var le=re=>{var pe=cv(),$e=u(pe),Ye=d($e);{var Ze=Ve=>{var lt=lv();U(()=>vr(lt,"data-tip",s(y).storeInfo.storeComment)),h(Ve,lt)};I(Ye,Ve=>{s(y).storeInfo.storeComment&&Ve(Ze)})}U(()=>B($e,`${s(y).storeInfo.storeName??""} `)),h(re,pe)},xe=re=>{var pe=uv();h(re,pe)};I(je,re=>{s(y).storeInfo?.storeName?re(le):re(xe,!1)})}var ot=d(Te,2);ot.__click=[dv,t,y];var bt=u(ot);Gr(bt,{class:"h-3 w-3 text-amber-600"});var fe=d(ee,2),J=u(fe),_e=u(J);_e.__click=[fv,t,y],_e.__keydown=[vv,t,y];var Le=u(_e),rt=u(Le);Fn(rt,{class:"text-base-content/50 h-4 w-4"});var ge=d(Le,2);{var Ie=re=>{var pe=pv();at(pe,20,()=>s(y).who,$e=>$e,($e,Ye)=>{var Ze=hv(),Ve=u(Ze);U(()=>B(Ve,Ye)),h($e,Ze)}),h(re,pe)},Ge=re=>{var pe=mv();h(re,pe)};I(ge,re=>{s(y).who&&s(y).who.length>0?re(Ie):re(Ge,!1)})}var Et=d(_e,2);Et.__click=[_v,t,y];var Ft=u(Et);Gr(Ft,{class:"h-3 w-3 text-amber-600"});var er=d(O,2),K=u(er);K.__click=[gv,t,y],K.__keydown=[bv,t,y];var ye=u(K),Ee=u(ye);Fa(Ee,{class:"h-4 w-4"});var Ue=d(ye,2),ze=u(Ue),et=d(Ue,2);{var dt=re=>{var pe=yv(),$e=u(pe),Ye=u($e),Ze=d(Ye);_a(Ze,{class:"h-3 w-3"});var Ve=d($e,2),lt=u(Ve),Ct=d(lt);pu(Ct,{class:"h-3 w-3"}),U(()=>{B(Ye,`${s(S).nbRecipes??""} `),B(lt,`${s(S).totalAssiettes??""} `)}),h(re,pe)};I(et,re=>{(s(S).nbRecipes||s(S).totalAssiettes)&&re(dt)})}var it=d(K,2);it.__click=[wv,t,y],it.__keydown=[Sv,t,y];var ft=u(it),Je=u(ft);Kt(Je,{class:"h-4 w-4"});var Qe=d(ft,2),yt=u(Qe);at(yt,17,()=>s(A),re=>re.status,(re,pe)=>{const $e=F(()=>r[s(pe).icon]);var Ye=xv(),Ze=u(Ye);$r(Ze,()=>s($e),(Ct,Br)=>{Br(Ct,{class:"h-3 w-3"})});var Ve=d(Ze,2),lt=u(Ve);U(Ct=>{ke(Ye,1,`badge badge-soft flex items-center gap-1 ${s(pe).badgeClass??""}`),B(lt,Ct)},[()=>Nn(s(pe).quantity,s(pe).unit)]),h(re,Ye)});var Lt=d(yt,2);{var zt=re=>{var pe=Pv();h(re,pe)};I(Lt,re=>{s(A).length===0&&re(zt)})}var $t=d(it,2),tr=u($t),wr=u(tr);Fa(wr,{class:"h-4 w-4"});var Vt=d(tr,2);{var rr=re=>{var pe=$v(),$e=u(pe),Ye=u($e),Ze=d($e,2);Ze.__click=[Ev,t,y];var Ve=u(Ze);Dr(Ve,{size:14}),U(()=>B(Ye,s(y).displayMissingQuantity)),h(re,pe)},nr=re=>{var pe=kv(),$e=u(pe);Xa($e,{size:24,strokeWidth:3,class:"text-success"}),h(re,pe)};I(Vt,re=>{s(y).displayMissingQuantity!=="✅ Complet"?re(rr):re(nr,!1)})}var ar=d(Vt,2);{var Ut=re=>{var pe=Av(),$e=u(pe),Ye=u($e);U(()=>{ke($e,1,`rounded px-2 py-1 text-center text-xs ${s(S).hasAvailable&&s(S).hasMissing?"border border-amber-300 bg-amber-100 text-amber-800":s(S).hasAvailable?"bg-success/10 text-success/80 border-success/30 border":"bg-info/10 text-info/80 border-info/30 border"}`),B(Ye,s(S).formattedAvailableQuantities)}),h(re,pe)};I(ar,re=>{s(S)&&s(S).formattedAvailableQuantities&&s(S).formattedAvailableQuantities!=="Équilibré"&&re(Ut)})}U(()=>{ke(M,1,`card bg-base-100 border-base-300 border shadow-sm transition-shadow hover:shadow-md ${s(y).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-400 bg-blue-50/40":""}`),B(de,`${s(y).productName??""} `),B(Pe,` ${s(k).displayName??""}`),B(ze,s(S).formattedQuantities)}),h(E,M)}),h(f,_)});var l=d(i,2);{var c=f=>{var v=Mv();h(f,v)};I(l,f=>{Object.values(s(n)).flat().length===0&&f(c)})}h(e,o),V()}Ke(["click","keydown"]);async function Dv(e,t,r,n,a,o,i,l,c){if(!(!s(t)||s(r))){$(n,null),$(a,null);try{const f=s(o).map(m=>m.id),v=i.products.filter(m=>f.includes(m.$id));Y.setSyncStatus(f,!0),i.onClose();const g={storeName:s(l).trim(),storeComment:s(c).trim()},p=await To(f,v,g);if($(a,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(f){const v=f instanceof Error?f.message:"Erreur inconnue";$(n,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),Y.clearSyncStatus()}finally{$(r,!1)}}}function ns(e,t,r){s(t)||r.onClose()}var Rv=P('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Ov=(e,t)=>$(t,"empty"),qv=(e,t)=>$(t,"all"),jv=P('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Bv=P("<!> ",1),Lv=P('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function zv(e,t){z(t,!0);let r=W(!1),n=W(null),a=W(null),o=W(Ne(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=W(Ne(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=W(Ne({})),c=W("empty");br(()=>{const O={};t.products.forEach(ee=>{t.productIds.includes(ee.$id)&&(s(c)==="empty"?O[ee.$id]=!ee.storeInfo||!ee.storeInfo.storeName:O[ee.$id]=!0)}),$(l,O,!0)});const f=F(()=>t.products.map(O=>({id:O.$id,label:O.productName,title:O.productName,selected:s(l)[O.$id]}))),v=F(()=>s(f).filter(O=>O.selected)),g=F(()=>`Attribuer un magasin (${s(v).length} produits sélectionnés)`),p=F(()=>s(v).length===0?!1:s(o).trim().length>0);function m(O){s(l)[O]=!s(l)[O]}var _=Lv(),x=u(_),b=u(x),w=u(b),E=u(w),y=d(w,2);y.__click=[ns,r,t];var S=u(y);xt(S,{class:"h-4 w-4"});var k=d(b,2),A=u(k);{var M=O=>{var ee=Rv(),Ae=u(ee);Tn(Ae,{class:"h-4 w-4"});var Te=d(Ae,2),Be=u(Te);U(()=>B(Be,s(n))),h(O,ee)};I(A,O=>{s(n)&&O(M)})}var C=d(A,2),se=u(C),Q=u(se),L=u(Q);Zt(L,{class:"h-4 w-4 opacity-50"});var X=d(L,2),ie=d(Q,2);{let O=F(()=>Y.uniqueStores.map(ee=>({id:ee,label:ee,disabled:ee===s(o)})));qo(ie,{get suggestions(){return s(O)},onSuggestionClick:ee=>{$(o,ee.label,!0)},title:"Suggestions de magasins :"})}var q=d(se,2),N=u(q),H=d(C,2),ne=d(u(H),2),R=u(ne);R.__click=[Ov,c];var te=d(R,2);te.__click=[qv,c];var ue=d(ne,2);rn(ue,{get items(){return s(f)},onToggleItem:m,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var de=d(k,2),D=u(de);D.__click=[ns,r,t];var Z=d(D,2);Z.__click=[Dv,p,r,n,a,v,t,o,i];var me=u(Z);{var be=O=>{var ee=jv();h(O,ee)},Pe=O=>{var ee=Bv(),Ae=j(ee);Dr(Ae,{class:"h-4 w-4"});var Te=d(Ae);U(()=>B(Te,` Appliquer à ${s(v).length??""} produit(s)`)),h(O,ee)};I(me,O=>{s(r)?O(be):O(Pe,!1)})}U(()=>{B(E,s(g)),y.disabled=s(r),X.disabled=s(r),N.disabled=s(r),ke(R,1,`tab ${s(c)==="empty"?"tab-active":""}`),ke(te,1,`tab ${s(c)==="all"?"tab-active":""}`),D.disabled=s(r),Z.disabled=s(r)||!s(p)}),Ce(X,()=>s(o),O=>$(o,O)),Ce(N,()=>s(i),O=>$(i,O)),h(e,_),V()}Ke(["click"]);async function Vv(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){$(n,null),$(a,null);try{const c=s(o).map(g=>g.id),f=i.products.filter(g=>c.includes(g.$id));Y.setSyncStatus(c,!0),i.onClose();const v=await No(c,f,s(l),"replace");if($(a,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),i.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";$(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),Y.clearSyncStatus()}finally{$(r,!1)}}}function as(e,t,r){s(t)||r.onClose()}var Uv=P('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Wv=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},Gv=(e,t)=>$(t,"empty"),Qv=(e,t)=>$(t,"all"),Hv=P('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Kv=P("<!> ",1),Jv=P('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Yv(e,t){z(t,!0);let r=W(!1),n=W(null),a=W(null),o=W(Ne([])),i=W(""),l=W("empty"),c=W(Ne({}));br(()=>{const le={};t.products.forEach(xe=>{t.productIds.includes(xe.$id)&&(s(l)==="empty"?le[xe.$id]=!xe.who||xe.who.length===0:le[xe.$id]=!0)}),$(c,le,!0)});const f=F(()=>t.products.map(le=>({id:le.$id,label:le.productName,title:le.productName,selected:s(c)[le.$id]}))),v=F(()=>s(f).filter(le=>le.selected)),g=F(()=>{const le=new Set([...Y.uniqueWho,...s(o)]);return Array.from(le).map(xe=>({id:xe,label:xe,selected:s(o).includes(xe)}))}),p=F(()=>`Gérer les volontaires (${s(v).length} produits sélectionnés)`),m=F(()=>s(v).length===0?!1:s(o).length>0);function _(le){const xe=le.trim();xe&&!s(o).includes(xe)&&$(o,[...s(o),xe],!0)}function x(le){$(o,s(o).filter(xe=>xe!==le),!0)}function b(le){s(o).includes(le)?x(le):_(le)}function w(){s(i).trim()&&(_(s(i)),$(i,""))}function E(le){s(c)[le]=!s(c)[le]}var y=Jv(),S=u(y),k=u(S),A=u(k),M=u(A),C=d(A,2);C.__click=[as,r,t];var se=u(C);xt(se,{class:"h-4 w-4"});var Q=d(k,2),L=u(Q);{var X=le=>{var xe=Uv(),ot=u(xe);Tn(ot,{class:"h-4 w-4"});var bt=d(ot,2),fe=u(bt);U(()=>B(fe,s(n))),h(le,xe)};I(L,le=>{s(n)&&le(X)})}var ie=d(L,2),q=u(ie),N=u(q),H=u(N),ne=u(H);sn(ne,{class:"h-4 w-4 opacity-50"});var R=d(ne,2);R.__keydown=[Wv,w];var te=d(H,2);te.__click=w;var ue=u(te);Ro(ue,{size:16});var de=d(N,2),D=d(u(de),2);rn(D,{get items(){return s(g)},onToggleItem:b,showIcon:!0});var Z=d(ie,2),me=d(u(Z),2),be=u(me);be.__click=[Gv,l];var Pe=d(be,2);Pe.__click=[Qv,l];var O=d(me,2);rn(O,{get items(){return s(f)},onToggleItem:E,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var ee=d(Q,2),Ae=u(ee);Ae.__click=[as,r,t];var Te=d(Ae,2);Te.__click=[Vv,m,r,n,a,v,t,o];var Be=u(Te);{var Me=le=>{var xe=Hv();h(le,xe)},je=le=>{var xe=Kv(),ot=j(xe);Dr(ot,{class:"h-4 w-4"});var bt=d(ot);U(()=>B(bt,` Appliquer à ${s(v).length??""} produit(s)`)),h(le,xe)};I(Be,le=>{s(r)?le(Me):le(je,!1)})}U(le=>{B(M,s(p)),C.disabled=s(r),R.disabled=s(r),te.disabled=le,ke(be,1,`tab ${s(l)==="empty"?"tab-active":""}`),ke(Pe,1,`tab ${s(l)==="all"?"tab-active":""}`),Ae.disabled=s(r),Te.disabled=s(r)||!s(m)},[()=>s(r)||!s(i).trim()]),Ce(R,()=>s(i),le=>$(i,le)),h(e,y),V()}Ke(["click","keydown"]);var Zv=P('<div class="fixed left-0 top-0 h-screen w-80 overflow-y-auto bg-base-200 border-r border-base-300 z-40 p-4"><!></div>'),Xv=P('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Fv(e,t){z(t,!0);const r=new Fs("min-width: 768px");let n=W(!1);var a=G(),o=j(a);{var i=c=>{var f=Zv(),v=u(f);oe(v,()=>t.children??ae),h(c,f)},l=c=>{var f=Xv(),v=j(f),g=u(v),p=d(g,2),m=d(u(p),2),_=u(m);oe(_,()=>t.children??ae);var x=d(v,2),b=u(x),w=u(b);Co(w,{class:"w-6 h-6"}),xl(g,()=>s(n),E=>$(n,E)),h(c,f)};I(o,c=>{r.current?c(i):c(l,!1)})}h(e,a),V()}function eh(){}var th=P('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function rh(e,t){z(t,!0);const r=F(()=>Y.stats);let n=W(null),a=W("recettes"),o=W(!1),i=W(!1),l=W(Ne([])),c=W(Ne([])),f=W(!1),v=W(Ne([]));function g(D,Z="recettes"){$(a,Z,!0),$(n,D,!0)}function p(){$(n,null)}function m(D,Z,me){$(l,Z,!0),$(c,me,!0),$(D==="who"?o:i,!0)}function _(D){(!D||D==="who")&&$(o,!1),(!D||D==="store")&&$(i,!1),$(l,[],!0),$(c,[],!0)}function x(D){console.log(`[ProductsTable] Modification groupée réussie: ${D.updatedCount} produits`)}function b(D){const Z=D.filter(me=>me.displayMissingQuantity!=="✅ Complet"&&me.missingQuantityArray&&me.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${D.length} produits reçus → ${Z.length} produits avec quantités manquantes`),$(v,Z,!0),$(f,!0)}function w(){$(f,!1),$(v,[],!0)}function E(){console.log("[ProductsTable] Achat groupé créé avec succès"),w()}async function y(D){try{if(!Y.currentMainId)throw new Error("mainId non disponible");const Z=D.missingQuantityArray||[];if(Z.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let me=D.$id;D.isSynced||(console.log(`[ProductsTable] Produit ${D.$id} local, création pour validation rapide...`),me=(await Wt(D.$id,{},Pe=>Y.getEnrichedProductById(Pe))).$id,console.log(`[ProductsTable] Produit sync créé: ${me}`)),await Mo(Y.currentMainId,me,Z,{store:D.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${D.productName}`)}catch(Z){console.error("[ProductsTable] Erreur validation rapide:",Z),alert("Erreur lors de la validation rapide: "+Z.message)}}var S=th(),k=j(S),A=u(k),M=u(A),C=u(M);eu(C,{class:"mr-1 h-4 w-4"});var se=d(C),Q=d(M,2);Q.__click=[eh];var L=u(Q);cu(L,{class:"mr-1 h-4 w-4"});var X=d(A,2);Fv(X,{children:(D,Z)=>{Hf(D,{})},$$slots:{default:!0}});var ie=d(X,2);Iv(ie,{onOpenModal:g,onOpenGroupEditModal:m,onOpenGroupPurchaseModal:b,onQuickValidation:y});var q=d(k,2);{var N=D=>{gf(D,{get productId(){return s(n)},get initialTab(){return s(a)},onClose:p})};I(q,D=>{s(n)&&D(N)})}var H=d(q,2);{var ne=D=>{Yv(D,{get productIds(){return s(l)},get products(){return s(c)},onClose:()=>_("who"),onSuccess:x})};I(H,D=>{s(o)&&D(ne)})}var R=d(H,2);{var te=D=>{zv(D,{get productIds(){return s(l)},get products(){return s(c)},onClose:()=>_("store"),onSuccess:x})};I(R,D=>{s(i)&&D(te)})}var ue=d(R,2);{var de=D=>{Vu(D,{get products(){return s(v)},onClose:w,onSuccess:E})};I(ue,D=>{s(f)&&D(de)})}U(()=>{ke(k,1,`space-y-6 ${ea.isMobile?"":"ml-80"}`),B(se,` ${s(r).total??""}`)}),h(e,S),V()}Ke(["click"]);Pi();var nh=P('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function ah(e){var t=nh();h(e,t)}var sh=P('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function oh(e,t){var r=sh(),n=d(u(r),2),a=d(u(n),2),o=u(a);U(()=>B(o,t.message)),h(e,r)}var ih=P('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function lh(e,t){var r=ih(),n=u(r),a=u(n);Tn(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(u(o),2),l=u(i);U(()=>B(l,t.message||"Erreur inconnue")),h(e,r)}var ch=P('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),uh=P('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),dh=P('<div class="text-base-content/60"> </div>'),fh=P('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),vh=P('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),hh=P('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),ph=P('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function mh(e,t){z(t,!0);let r,n=W(null),a=W(!0),o=W(!1);Xs(async()=>{r=Oc();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await Y.initialize(r)}catch(R){const te=R instanceof Error?R.message:"Erreur lors de l'initialisation";$(n,te,!0),console.error("[App] Erreur initialisation:",R)}finally{$(a,!1)}}),kl(()=>{Y.destroy()});async function i(){if(!(!r||s(o))){$(o,!0);try{await Y.forceReload(r)}catch(R){console.error("[App] Erreur lors du rechargement forcé:",R)}finally{$(o,!1)}}}const l=F(()=>s(n)||Y.error),c=F(()=>s(a)||Y.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=ph(),g=u(v),p=u(g),m=u(p),_=d(u(m),2),x=u(_);{var b=R=>{var te=ch();h(R,te)};I(x,R=>{Y.realtimeConnected&&R(b)})}var w=d(x,2);{var E=R=>{var te=uh();h(R,te)};I(w,R=>{Y.syncing&&R(E)})}var y=d(w,2);{var S=R=>{var te=dh(),ue=u(te);U(de=>B(ue,`Maj: ${de??""}`),[()=>new Date(Y.lastSync).toLocaleTimeString()]),h(R,te)};I(y,R=>{Y.lastSync&&R(S)})}var k=d(y,2);{var A=R=>{var te=fh();let ue;te.__click=i;var de=u(te);uu(de,{class:"h-4 w-4"}),U(D=>{ue=ke(te,1,"btn btn-outline btn-sm",null,ue,D),te.disabled=s(o)||Y.loading},[()=>({loading:s(o)||Y.loading})]),h(R,te)};I(k,R=>{s(n)||R(A)})}var M=d(k,2);{var C=R=>{var te=vh(),ue=u(te),de=u(ue);nu(de,{class:"mr-2 h-4 w-4"}),U(()=>vr(ue,"href",f)),h(R,te)};I(M,R=>{s(n)&&R(C)})}var se=d(g,2),Q=u(se);{var L=R=>{lh(R,{get message(){return s(l)}})},X=R=>{var te=G(),ue=j(te);{var de=D=>{oh(D,{get message(){return s(l)}})};I(ue,D=>{s(l)&&D(de)},!0)}h(R,te)};I(Q,R=>{s(n)?R(L):R(X,!1)})}var ie=d(Q,2);{var q=R=>{ah(R)};I(ie,R=>{s(c)&&R(q)})}var N=d(ie,2);{var H=R=>{rh(R,{})},ne=R=>{var te=G(),ue=j(te);{var de=D=>{var Z=hh();h(D,Z)};I(ue,D=>{!Y.loading&&!s(n)&&D(de)},!0)}h(R,te)};I(N,R=>{Y.enrichedProducts.length>0?R(H):R(ne,!1)})}h(e,v),V()}Ke(["click"]);ll(mh,{target:document.getElementById("app_products")});
