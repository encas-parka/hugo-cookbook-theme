(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const Co=!1;var sa=Array.isArray,Ol=Array.prototype.indexOf,ls=Array.from,Ua=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,ql=Object.getOwnPropertyDescriptors,Bl=Object.prototype,Ll=Array.prototype,Mo=Object.getPrototypeOf,Ls=Object.isExtensible;function dn(e){return typeof e=="function"}const F=()=>{};function jl(e){for(var t=0;t<e.length;t++)e[t]()}function Io(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function Ro(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ct=2,cs=4,us=8,Pr=16,Wt=32,$r=64,ds=128,St=256,Xn=512,Fe=1024,mt=2048,dr=4096,$t=8192,kr=16384,fs=32768,Nr=65536,js=1<<17,zl=1<<18,Xr=1<<19,Ul=1<<20,Va=1<<21,oa=1<<22,wr=1<<23,Sr=Symbol("$state"),Oo=Symbol("legacy props"),Vl=Symbol(""),bn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function qo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Wl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Gl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Hl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Kl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ql(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Yl(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Jl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Xl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Fl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ia=1,la=2,Bo=4,ec=8,tc=16,rc=1,nc=2,ac=4,sc=8,oc=16,ic=1,lc=2,Ge=Symbol(),cc="http://www.w3.org/1999/xhtml",uc="http://www.w3.org/2000/svg",dc="@attach";function fc(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function vc(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let hc=!1;function Lo(e){return e===this.v}function pc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function jo(e){return!pc(e,this.v)}let Fr=!1,mc=!1;function _c(){Fr=!0}let Me=null;function Gr(e){Me=e}function V(e,t=!1,r){Me={p:Me,c:null,e:null,s:e,x:null,l:Fr&&!t?{s:null,u:null,$:[]}:null}}function W(e){var t=Me,r=t.e;if(r!==null){t.e=null;for(var n of r)ni(n)}return Me=t.p,{}}function On(){return!Fr||Me!==null&&Me.l===null}let br=[];function zo(){var e=br;br=[],jl(e)}function xr(e){if(br.length===0&&!wn){var t=br;queueMicrotask(()=>{t===br&&zo()})}br.push(e)}function gc(){for(;br.length>0;)zo()}const yc=new WeakMap;function Uo(e){var t=ee;if(t===null)return te.f|=wr,e;if((t.f&fs)===0){if((t.f&ds)===0)throw!t.parent&&e instanceof Error&&Vo(e),e;t.b.error(e)}else Hr(e,t)}function Hr(e,t){for(;t!==null;){if((t.f&ds)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&Vo(e),e}function Vo(e){const t=yc.get(e);t&&(Ua(e,"message",{value:t.message}),Ua(e,"stack",{value:t.stack}))}const Vn=new Set;let ge=null,Gn=null,Wa=new Set,Dt=[],ca=null,Ga=!1,wn=!1;class yt{current=new Map;#e=new Map;#r=new Set;#d=0;#f=null;#c=[];#o=[];#l=[];#n=[];#i=[];#a=[];skipped_effects=new Set;process(t){Dt=[],Gn=null;var r=yt.apply(this);for(const s of t)this.#s(s);if(this.#d===0){this.#v();var n=this.#o,a=this.#l;this.#o=[],this.#l=[],this.#n=[],Gn=this,ge=null,zs(n),zs(a),Gn=null,this.#f?.resolve()}else this.#u(this.#o),this.#u(this.#l),this.#u(this.#n);r();for(const s of this.#c)Nn(s);this.#c=[]}#s(t){t.f^=Fe;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Wt|$r))!==0,s=a&&(n&Fe)!==0,o=s||(n&$t)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){a?r.f^=Fe:(n&cs)!==0?this.#l.push(r):(n&Fe)===0&&((n&oa)!==0&&r.b?.is_pending()?this.#c.push(r):va(r)&&((r.f&Pr)!==0&&this.#n.push(r),Nn(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#u(t){for(const r of t)((r.f&mt)!==0?this.#i:this.#a).push(r),at(r,Fe);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){ge=this}deactivate(){ge=null}flush(){if(Dt.length>0){if(this.activate(),Wo(),ge!==null&&ge!==this)return}else this.#d===0&&this.#v();this.deactivate();for(const t of Wa)if(Wa.delete(t),t(),ge!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),Vn.size>1){this.#e.clear();let t=!0;for(const r of Vn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;Go(n)}if(Dt.length>0){ge=r;const n=yt.apply(r);for(const a of Dt)r.#s(a);Dt=[],n()}}ge=null}Vn.delete(this)}increment(){this.#d+=1}decrement(){this.#d-=1;for(const t of this.#i)at(t,mt),Er(t);for(const t of this.#a)at(t,dr),Er(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#f??=Io()).promise}static ensure(){if(ge===null){const t=ge=new yt;Vn.add(ge),wn||yt.enqueue(()=>{ge===t&&t.flush()})}return ge}static enqueue(t){xr(t)}static apply(t){return F}}function bc(e){var t=wn;wn=!0;try{for(var r;;){if(gc(),Dt.length===0&&(ge?.flush(),Dt.length===0))return ca=null,r;Wo()}}finally{wn=t}}function Wo(){var e=Ur;Ga=!0;try{var t=0;for(Gs(!0);Dt.length>0;){var r=yt.ensure();if(t++>1e3){var n,a;wc()}r.process(Dt),sr.clear()}}finally{Ga=!1,Gs(e),ca=null}}function wc(){try{Ql()}catch(e){Hr(e,ca)}}let yr=null;function zs(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(kr|$t))===0&&va(n)&&(yr=[],Nn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?oi(n):n.fn=null),yr?.length>0)){sr.clear();for(const a of yr)Nn(a);yr=[]}}yr=null}}function Go(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&ct)!==0?Go(t):(r&(oa|Pr))!==0&&(at(t,mt),Er(t))}}function Er(e){for(var t=ca=e;t.parent!==null;){t=t.parent;var r=t.f;if(Ga&&t===ee&&(r&Pr)!==0)return;if((r&($r|Wt))!==0){if((r&Fe)===0)return;t.f^=Fe}}Dt.push(t)}function Ho(e){let t=0,r=cr(0),n;return()=>{qc()&&(i(r),gs(()=>(t===0&&(n=en(()=>e(()=>Ct(r)))),t+=1,()=>{xr(()=>{t-=1,t===0&&(n?.(),n=void 0,Ct(r))})})))}}var Sc=Nr|Xr|ds;function xc(e,t,r){new Ec(e,t,r)}class Ec{parent;#e=!1;#r;#d=null;#f;#c;#o;#l=null;#n=null;#i=null;#a=null;#s=0;#u=0;#v=!1;#h=null;#p=()=>{this.#h&&Kr(this.#h,this.#s)};#x=Ho(()=>(this.#h=cr(this.#s),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#f=r,this.#c=n,this.parent=ee.b,this.#e=!!this.#f.pending,this.#o=vr(()=>{ee.b=this;{try{this.#l=Xe(()=>n(this.#r))}catch(a){this.error(a)}this.#u>0?this.#y():this.#e=!1}},Sc)}#t(){try{this.#l=Xe(()=>this.#c(this.#r))}catch(t){this.error(t)}this.#e=!1}#E(){const t=this.#f.pending;t&&(this.#n=Xe(()=>t(this.#r)),yt.enqueue(()=>{this.#l=this.#g(()=>(yt.ensure(),Xe(()=>this.#c(this.#r)))),this.#u>0?this.#y():(or(this.#n,()=>{this.#n=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#f.pending}#g(t){var r=ee,n=te,a=Me;Rt(this.#o),lt(this.#o),Gr(this.#o.ctx);try{return t()}catch(s){return Uo(s),null}finally{Rt(r),lt(n),Gr(a)}}#y(){const t=this.#f.pending;this.#l!==null&&(this.#a=document.createDocumentFragment(),Pc(this.#l,this.#a)),this.#n===null&&(this.#n=Xe(()=>t(this.#r)))}#b(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#b(t);return}this.#u+=t,this.#u===0&&(this.#e=!1,this.#n&&or(this.#n,()=>{this.#n=null}),this.#a&&(this.#r.before(this.#a),this.#a=null),xr(()=>{yt.ensure().flush()}))}update_pending_count(t){this.#b(t),this.#s+=t,Wa.add(this.#p)}get_effect_pending(){return this.#x(),i(this.#h)}error(t){var r=this.#f.onerror;let n=this.#f.failed;if(this.#v||!r&&!n)throw t;this.#l&&(Qe(this.#l),this.#l=null),this.#n&&(Qe(this.#n),this.#n=null),this.#i&&(Qe(this.#i),this.#i=null);var a=!1,s=!1;const o=()=>{if(a){vc();return}a=!0,s&&Fl(),yt.ensure(),this.#s=0,this.#i!==null&&or(this.#i,()=>{this.#i=null}),this.#e=this.has_pending_snippet(),this.#l=this.#g(()=>(this.#v=!1,Xe(()=>this.#c(this.#r)))),this.#u>0?this.#y():this.#e=!1};var l=te;try{lt(null),s=!0,r?.(t,o),s=!1}catch(c){Hr(c,this.#o&&this.#o.parent)}finally{lt(l)}n&&xr(()=>{this.#i=this.#g(()=>{this.#v=!0;try{return Xe(()=>{n(this.#r,()=>t,()=>o)})}catch(c){return Hr(c,this.#o.parent),null}finally{this.#v=!1}})})}}function Pc(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:qn(r);t.append(r),r=a}}function Ko(e,t,r){const n=On()?ua:vs;if(t.length===0){r(e.map(n));return}var a=ge,s=ee,o=$c();Promise.all(t.map(l=>kc(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(c){(s.f&kr)===0&&Hr(c,s)}a?.deactivate(),Qo()}).catch(l=>{Hr(l,s)})}function $c(){var e=ee,t=te,r=Me,n=ge;return function(){Rt(e),lt(t),Gr(r),n?.activate()}}function Qo(){Rt(null),lt(null),Gr(null)}function ua(e){var t=ct|mt,r=te!==null&&(te.f&ct)!==0?te:null;return ee===null||r!==null&&(r.f&St)!==0?t|=St:ee.f|=Xr,{ctx:Me,deps:null,effects:null,equals:Lo,f:t,fn:e,reactions:null,rv:0,v:Ge,wv:0,parent:r??ee,ac:null}}function kc(e,t){let r=ee;r===null&&Wl();var n=r.b,a=void 0,s=cr(Ge),o=!te,l=new Map;return Lc(()=>{var c=Io();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(h){c.reject(h)}var d=ge,f=n.is_pending();o&&(n.update_pending_count(1),f||(d.increment(),l.get(d)?.reject(bn),l.set(d,c)));const p=(h,m=void 0)=>{f||d.activate(),m?m!==bn&&(s.f|=wr,Kr(s,m)):((s.f&wr)!==0&&(s.f^=wr),Kr(s,h)),o&&(n.update_pending_count(-1),f||d.decrement()),Qo()};c.promise.then(p,h=>p(null,h||"unknown"))}),ti(()=>{for(const c of l.values())c.reject(bn)}),new Promise(c=>{function d(f){function p(){f===a?c(s):d(a)}f.then(p,p)}d(a)})}function B(e){const t=ua(e);return ci(t),t}function vs(e){const t=ua(e);return t.equals=jo,t}function Yo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Qe(t[r])}}function Nc(e){for(var t=e.parent;t!==null;){if((t.f&ct)===0)return t;t=t.parent}return null}function hs(e){var t,r=ee;Rt(Nc(e));try{Yo(e),t=vi(e)}finally{Rt(r)}return t}function Jo(e){var t=hs(e);if(e.equals(t)||(e.v=t,e.wv=di()),!Tr){var r=(nr||(e.f&St)!==0)&&e.deps!==null?dr:Fe;at(e,r)}}const sr=new Map;function cr(e,t){var r={f:0,v:e,reactions:null,equals:Lo,rv:0,wv:0};return r}function se(e,t){const r=cr(e);return ci(r),r}function Tc(e,t=!1,r=!0){const n=cr(e);return t||(n.equals=jo),Fr&&r&&Me!==null&&Me.l!==null&&(Me.l.s??=[]).push(n),n}function C(e,t,r=!1){te!==null&&(!Pt||(te.f&js)!==0)&&On()&&(te.f&(ct|Pr|oa|js))!==0&&!zt?.includes(e)&&Xl();let n=r?bt(t):t;return Kr(e,n)}function Kr(e,t){if(!e.equals(t)){var r=e.v;Tr?sr.set(e,t):sr.set(e,r),e.v=t;var n=yt.ensure();n.capture(e,r),(e.f&ct)!==0&&((e.f&mt)!==0&&hs(e),at(e,(e.f&St)===0?Fe:dr)),e.wv=di(),Zo(e,mt),On()&&ee!==null&&(ee.f&Fe)!==0&&(ee.f&(Wt|$r))===0&&(gt===null?Uc([e]):gt.push(e))}return t}function Ct(e){C(e,e.v+1)}function Zo(e,t){var r=e.reactions;if(r!==null)for(var n=On(),a=r.length,s=0;s<a;s++){var o=r[s],l=o.f;if(!(!n&&o===ee)){var c=(l&mt)===0;c&&at(o,t),(l&ct)!==0?Zo(o,dr):c&&((l&Pr)!==0&&yr!==null&&yr.push(o),Er(o))}}}function bt(e){if(typeof e!="object"||e===null||Sr in e)return e;const t=Mo(e);if(t!==Bl&&t!==Ll)return e;var r=new Map,n=sa(e),a=se(0),s=Ut,o=l=>{if(Ut===s)return l();var c=te,d=Ut;lt(null),Ks(s);var f=l();return lt(c),Ks(d),f};return n&&r.set("length",se(e.length)),new Proxy(e,{defineProperty(l,c,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&Jl();var f=r.get(c);return f===void 0?f=o(()=>{var p=se(d.value);return r.set(c,p),p}):C(f,d.value,!0),!0},deleteProperty(l,c){var d=r.get(c);if(d===void 0){if(c in l){const f=o(()=>se(Ge));r.set(c,f),Ct(a)}}else C(d,Ge),Ct(a);return!0},get(l,c,d){if(c===Sr)return e;var f=r.get(c),p=c in l;if(f===void 0&&(!p||ar(l,c)?.writable)&&(f=o(()=>{var m=bt(p?l[c]:Ge),_=se(m);return _}),r.set(c,f)),f!==void 0){var h=i(f);return h===Ge?void 0:h}return Reflect.get(l,c,d)},getOwnPropertyDescriptor(l,c){var d=Reflect.getOwnPropertyDescriptor(l,c);if(d&&"value"in d){var f=r.get(c);f&&(d.value=i(f))}else if(d===void 0){var p=r.get(c),h=p?.v;if(p!==void 0&&h!==Ge)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return d},has(l,c){if(c===Sr)return!0;var d=r.get(c),f=d!==void 0&&d.v!==Ge||Reflect.has(l,c);if(d!==void 0||ee!==null&&(!f||ar(l,c)?.writable)){d===void 0&&(d=o(()=>{var h=f?bt(l[c]):Ge,m=se(h);return m}),r.set(c,d));var p=i(d);if(p===Ge)return!1}return f},set(l,c,d,f){var p=r.get(c),h=c in l;if(n&&c==="length")for(var m=d;m<p.v;m+=1){var _=r.get(m+"");_!==void 0?C(_,Ge):m in l&&(_=o(()=>se(Ge)),r.set(m+"",_))}if(p===void 0)(!h||ar(l,c)?.writable)&&(p=o(()=>se(void 0)),C(p,bt(d)),r.set(c,p));else{h=p.v!==Ge;var x=o(()=>bt(d));C(p,x)}var y=Reflect.getOwnPropertyDescriptor(l,c);if(y?.set&&y.set.call(f,d),!h){if(n&&typeof c=="string"){var b=r.get("length"),D=Number(c);Number.isInteger(D)&&D>=b.v&&C(b,D+1)}Ct(a)}return!0},ownKeys(l){i(a);var c=Reflect.ownKeys(l).filter(p=>{var h=r.get(p);return h===void 0||h.v!==Ge});for(var[d,f]of r)f.v!==Ge&&!(d in l)&&c.push(d);return c},setPrototypeOf(){Zl()}})}function Us(e){try{if(e!==null&&typeof e=="object"&&Sr in e)return e[Sr]}catch{}return e}function Ac(e,t){return Object.is(Us(e),Us(t))}var Vs,Xo,Fo,ei;function Dc(){if(Vs===void 0){Vs=window,Xo=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Fo=ar(t,"firstChild").get,ei=ar(t,"nextSibling").get,Ls(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Ls(r)&&(r.__t=void 0)}}function fr(e=""){return document.createTextNode(e)}function Qr(e){return Fo.call(e)}function qn(e){return ei.call(e)}function u(e,t){return Qr(e)}function j(e,t=!1){{var r=Qr(e);return r instanceof Comment&&r.data===""?qn(r):r}}function v(e,t=1,r=!1){let n=e;for(;t--;)n=qn(n);return n}function Cc(e){e.textContent=""}function ps(){return!1}function Mc(e,t){if(t){const r=document.body;e.autofocus=!0,xr(()=>{document.activeElement===r&&e.focus()})}}let Ws=!1;function Ic(){Ws||(Ws=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function da(e){var t=te,r=ee;lt(null),Rt(null);try{return e()}finally{lt(t),Rt(r)}}function ms(e,t,r,n=r){e.addEventListener(t,()=>da(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Ic()}function Rc(e){ee===null&&te===null&&Kl(),te!==null&&(te.f&St)!==0&&ee===null&&Hl(),Tr&&Gl()}function Oc(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Gt(e,t,r,n=!0){var a=ee;a!==null&&(a.f&$t)!==0&&(e|=$t);var s={ctx:Me,deps:null,nodes_start:null,nodes_end:null,f:e|mt,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Nn(s),s.f|=fs}catch(c){throw Qe(s),c}else t!==null&&Er(s);if(n){var o=s;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Xr)===0&&(o=o.first),o!==null&&(o.parent=a,a!==null&&Oc(o,a),te!==null&&(te.f&ct)!==0&&(e&$r)===0)){var l=te;(l.effects??=[]).push(o)}}return s}function qc(){return te!==null&&!Pt}function ti(e){const t=Gt(us,null,!1);return at(t,Fe),t.teardown=e,t}function ri(e){Rc();var t=ee.f,r=!te&&(t&Wt)!==0&&(t&fs)===0;if(r){var n=Me;(n.e??=[]).push(e)}else return ni(e)}function ni(e){return Gt(cs|Ul,e,!1)}function Bc(e){yt.ensure();const t=Gt($r|Xr,e,!0);return(r={})=>new Promise(n=>{r.outro?or(t,()=>{Qe(t),n(void 0)}):(Qe(t),n(void 0))})}function _s(e){return Gt(cs,e,!1)}function Lc(e){return Gt(oa|Xr,e,!0)}function gs(e,t=0){return Gt(us|t,e,!0)}function L(e,t=[],r=[]){Ko(t,r,n=>{Gt(us,()=>e(...n.map(i)),!0)})}function vr(e,t=0){var r=Gt(Pr|t,e,!0);return r}function Xe(e,t=!0){return Gt(Wt|Xr,e,!0,t)}function ai(e){var t=e.teardown;if(t!==null){const r=Tr,n=te;Hs(!0),lt(null);try{t.call(null)}finally{Hs(r),lt(n)}}}function si(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&da(()=>{a.abort(bn)});var n=r.next;(r.f&$r)!==0?r.parent=null:Qe(r,t),r=n}}function jc(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Wt)===0&&Qe(t),t=r}}function Qe(e,t=!0){var r=!1;(t||(e.f&zl)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(zc(e.nodes_start,e.nodes_end),r=!0),si(e,t&&!r),Fn(e,0),at(e,kr);var n=e.transitions;if(n!==null)for(const s of n)s.stop();ai(e);var a=e.parent;a!==null&&a.first!==null&&oi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function zc(e,t){for(;e!==null;){var r=e===t?null:qn(e);e.remove(),e=r}}function oi(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function or(e,t){var r=[];ys(e,r,!0),ii(r,()=>{Qe(e),t&&t()})}function ii(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function ys(e,t,r){if((e.f&$t)===0){if(e.f^=$t,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var a=n.next,s=(n.f&Nr)!==0||(n.f&Wt)!==0;ys(n,t,s?r:!1),n=a}}}function fa(e){li(e,!0)}function li(e,t){if((e.f&$t)!==0){e.f^=$t,(e.f&Fe)===0&&(at(e,mt),Er(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&Nr)!==0||(r.f&Wt)!==0;li(r,a?t:!1),r=n}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}let Ur=!1;function Gs(e){Ur=e}let Tr=!1;function Hs(e){Tr=e}let te=null,Pt=!1;function lt(e){te=e}let ee=null;function Rt(e){ee=e}let zt=null;function ci(e){te!==null&&(zt===null?zt=[e]:zt.push(e))}let nt=null,ht=0,gt=null;function Uc(e){gt=e}let ui=1,kn=0,Ut=kn;function Ks(e){Ut=e}let nr=!1;function di(){return++ui}function va(e){var t=e.f;if((t&mt)!==0)return!0;if((t&dr)!==0){var r=e.deps,n=(t&St)!==0;if(r!==null){var a,s,o=(t&Xn)!==0,l=n&&ee!==null&&!nr,c=r.length;if((o||l)&&(ee===null||(ee.f&kr)===0)){var d=e,f=d.parent;for(a=0;a<c;a++)s=r[a],(o||!s?.reactions?.includes(d))&&(s.reactions??=[]).push(d);o&&(d.f^=Xn),l&&f!==null&&(f.f&St)===0&&(d.f^=St)}for(a=0;a<c;a++)if(s=r[a],va(s)&&Jo(s),s.wv>e.wv)return!0}(!n||ee!==null&&!nr)&&at(e,Fe)}return!1}function fi(e,t,r=!0){var n=e.reactions;if(n!==null&&!zt?.includes(e))for(var a=0;a<n.length;a++){var s=n[a];(s.f&ct)!==0?fi(s,t,!1):t===s&&(r?at(s,mt):(s.f&Fe)!==0&&at(s,dr),Er(s))}}function vi(e){var t=nt,r=ht,n=gt,a=te,s=nr,o=zt,l=Me,c=Pt,d=Ut,f=e.f;nt=null,ht=0,gt=null,nr=(f&St)!==0&&(Pt||!Ur||te===null),te=(f&(Wt|$r))===0?e:null,zt=null,Gr(e.ctx),Pt=!1,Ut=++kn,e.ac!==null&&(da(()=>{e.ac.abort(bn)}),e.ac=null);try{e.f|=Va;var p=e.fn,h=p(),m=e.deps;if(nt!==null){var _;if(Fn(e,ht),m!==null&&ht>0)for(m.length=ht+nt.length,_=0;_<nt.length;_++)m[ht+_]=nt[_];else e.deps=m=nt;if(!nr||(f&ct)!==0&&e.reactions!==null)for(_=ht;_<m.length;_++)(m[_].reactions??=[]).push(e)}else m!==null&&ht<m.length&&(Fn(e,ht),m.length=ht);if(On()&&gt!==null&&!Pt&&m!==null&&(e.f&(ct|dr|mt))===0)for(_=0;_<gt.length;_++)fi(gt[_],e);return a!==null&&a!==e&&(kn++,gt!==null&&(n===null?n=gt:n.push(...gt))),(e.f&wr)!==0&&(e.f^=wr),h}catch(x){return Uo(x)}finally{e.f^=Va,nt=t,ht=r,gt=n,te=a,nr=s,zt=o,Gr(l),Pt=c,Ut=d}}function Vc(e,t){let r=t.reactions;if(r!==null){var n=Ol.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&ct)!==0&&(nt===null||!nt.includes(t))&&(at(t,dr),(t.f&(St|Xn))===0&&(t.f^=Xn),Yo(t),Fn(t,0))}function Fn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Vc(e,r[n])}function Nn(e){var t=e.f;if((t&kr)===0){at(e,Fe);var r=ee,n=Ur;ee=e,Ur=!0;try{(t&Pr)!==0?jc(e):si(e),ai(e);var a=vi(e);e.teardown=typeof a=="function"?a:null,e.wv=ui;var s;Co&&mc&&(e.f&mt)!==0&&e.deps}finally{Ur=n,ee=r}}}async function Wc(){await Promise.resolve(),bc()}function i(e){var t=e.f,r=(t&ct)!==0;if(te!==null&&!Pt){var n=ee!==null&&(ee.f&kr)!==0;if(!n&&!zt?.includes(e)){var a=te.deps;if((te.f&Va)!==0)e.rv<kn&&(e.rv=kn,nt===null&&a!==null&&a[ht]===e?ht++:nt===null?nt=[e]:(!nr||!nt.includes(e))&&nt.push(e));else{(te.deps??=[]).push(e);var s=e.reactions;s===null?e.reactions=[te]:s.includes(te)||s.push(te)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&St)===0&&(o.f^=St)}if(Tr){if(sr.has(e))return sr.get(e);if(r){o=e;var c=o.v;return((o.f&Fe)===0&&o.reactions!==null||hi(o))&&(c=hs(o)),sr.set(o,c),c}}else r&&(o=e,va(o)&&Jo(o));if((e.f&wr)!==0)throw e.v;return e.v}function hi(e){if(e.v===Ge)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(sr.has(t)||(t.f&ct)!==0&&hi(t))return!0;return!1}function en(e){var t=Pt;try{return Pt=!0,e()}finally{Pt=t}}const Gc=-7169;function at(e,t){e.f=e.f&Gc|t}function Hc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Kc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Qc(e){return Kc.includes(e)}const Yc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Jc(e){return e=e.toLowerCase(),Yc[e]??e}const Zc=["touchstart","touchmove"];function Xc(e){return Zc.includes(e)}const pi=new Set,Ha=new Set;function mi(e,t,r,n={}){function a(s){if(n.capture||mn.call(t,s),!s.cancelBubble)return da(()=>r?.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?xr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Qs(e,t,r,n={}){var a=mi(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function Ot(e){for(var t=0;t<e.length;t++)pi.add(e[t]);for(var r of Ha)r(e)}let Ys=null;function mn(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],s=a[0]||e.target;Ys=e;var o=0,l=Ys===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var d=a.indexOf(t);if(d===-1)return;c<=d&&(o=c)}if(s=a[o]||e.target,s!==t){Ua(e,"currentTarget",{configurable:!0,get(){return s||r}});var f=te,p=ee;lt(null),Rt(null);try{for(var h,m=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var x=s["__"+n];if(x!=null&&(!s.disabled||e.target===s))if(sa(x)){var[y,...b]=x;y.apply(s,[e,...b])}else x.call(s,e)}catch(D){h?m.push(D):h=D}if(e.cancelBubble||_===t||_===null)break;s=_}if(h){for(let D of m)queueMicrotask(()=>{throw D});throw h}}finally{e.__root=t,delete e.currentTarget,lt(f),Rt(p)}}}function _i(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Yr(e,t){var r=ee;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function $(e,t){var r=(t&ic)!==0,n=(t&lc)!==0,a,s=!e.startsWith("<!>");return()=>{a===void 0&&(a=_i(s?e:"<!>"+e),r||(a=Qr(a)));var o=n||Xo?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Qr(o),c=o.lastChild;Yr(l,c)}else Yr(o,o);return o}}function Fc(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var o=_i(a),l=Qr(o);s=Qr(l)}var c=s.cloneNode(!0);return Yr(c,c),c}}function eu(e,t){return Fc(e,t,"svg")}function pt(e=""){{var t=fr(e+"");return Yr(t,t),t}}function U(){var e=document.createDocumentFragment(),t=document.createComment(""),r=fr();return e.append(t,r),Yr(t,r),e}function g(e,t){e!==null&&e.before(t)}function I(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function tu(e,t){return ru(e,t)}const Lr=new Map;function ru(e,{target:t,anchor:r,props:n={},events:a,context:s,intro:o=!0}){Dc();var l=new Set,c=p=>{for(var h=0;h<p.length;h++){var m=p[h];if(!l.has(m)){l.add(m);var _=Xc(m);t.addEventListener(m,mn,{passive:_});var x=Lr.get(m);x===void 0?(document.addEventListener(m,mn,{passive:_}),Lr.set(m,1)):Lr.set(m,x+1)}}};c(ls(pi)),Ha.add(c);var d=void 0,f=Bc(()=>{var p=r??t.appendChild(fr());return xc(p,{pending:()=>{}},h=>{if(s){V({});var m=Me;m.c=s}a&&(n.$$events=a),d=e(h,n)||{},s&&W()}),()=>{for(var h of l){t.removeEventListener(h,mn);var m=Lr.get(h);--m===0?(document.removeEventListener(h,mn),Lr.delete(h)):Lr.set(h,m)}Ha.delete(c),p!==r&&p.parentNode?.removeChild(p)}});return nu.set(d,f),d}let nu=new WeakMap;function q(e,t,r=!1){var n=e,a=null,s=null,o=Ge,l=r?Nr:0,c=!1;const d=(m,_=!0)=>{c=!0,h(_,m)};var f=null;function p(){f!==null&&(f.lastChild.remove(),n.before(f),f=null);var m=o?a:s,_=o?s:a;m&&fa(m),_&&or(_,()=>{o?s=null:a=null})}const h=(m,_)=>{if(o!==(o=m)){var x=ps(),y=n;if(x&&(f=document.createDocumentFragment(),f.append(y=fr())),o?a??=_&&Xe(()=>_(y)):s??=_&&Xe(()=>_(y)),x){var b=ge,D=o?a:s,A=o?s:a;D&&b.skipped_effects.delete(D),A&&b.skipped_effects.add(A),b.add_callback(p)}else p()}};vr(()=>{c=!1,t(d),c||h(null,null)},l)}function Vr(e,t){return t}function au(e,t,r){for(var n=e.items,a=[],s=t.length,o=0;o<s;o++)ys(t[o].e,a,!0);var l=s>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;Cc(c),c.append(r),n.clear(),At(e,t[0].prev,t[s-1].next)}ii(a,()=>{for(var d=0;d<s;d++){var f=t[d];l||(n.delete(f.k),At(e,f.prev,f.next)),Qe(f.e,!l)}})}function ze(e,t,r,n,a,s=null){var o=e,l={flags:t,items:new Map,first:null},c=(t&Bo)!==0;if(c){var d=e;o=d.appendChild(fr())}var f=null,p=!1,h=new Map,m=vs(()=>{var b=r();return sa(b)?b:b==null?[]:ls(b)}),_,x;function y(){su(x,_,l,h,o,a,t,n,r),s!==null&&(_.length===0?f?fa(f):f=Xe(()=>s(o)):f!==null&&or(f,()=>{f=null}))}vr(()=>{x??=ee,_=i(m);var b=_.length;if(!(p&&b===0)){p=b===0;var D,A,E,P;if(ps()){var T=new Set,R=ge;for(A=0;A<b;A+=1){E=_[A],P=n(E,A);var w=l.items.get(P)??h.get(P);w?(t&(ia|la))!==0&&gi(w,E,A,t):(D=yi(null,l,null,null,E,P,A,a,t,r,!0),h.set(P,D)),T.add(P)}for(const[O,k]of l.items)T.has(O)||R.skipped_effects.add(k.e);R.add_callback(y)}else y();i(m)}})}function su(e,t,r,n,a,s,o,l,c){var d=(o&ec)!==0,f=(o&(ia|la))!==0,p=t.length,h=r.items,m=r.first,_=m,x,y=null,b,D=[],A=[],E,P,T,R;if(d)for(R=0;R<p;R+=1)E=t[R],P=l(E,R),T=h.get(P),T!==void 0&&(T.a?.measure(),(b??=new Set).add(T));for(R=0;R<p;R+=1){if(E=t[R],P=l(E,R),T=h.get(P),T===void 0){var w=n.get(P);if(w!==void 0){n.delete(P),h.set(P,w);var O=y?y.next:_;At(r,y,w),At(r,w,O),Na(w,O,a),y=w}else{var k=_?_.e.nodes_start:a;y=yi(k,r,y,y===null?r.first:y.next,E,P,R,s,o,c)}h.set(P,y),D=[],A=[],_=y.next;continue}if(f&&gi(T,E,R,o),(T.e.f&$t)!==0&&(fa(T.e),d&&(T.a?.unfix(),(b??=new Set).delete(T))),T!==_){if(x!==void 0&&x.has(T)){if(D.length<A.length){var J=A[0],le;y=J.prev;var Ie=D[0],Ne=D[D.length-1];for(le=0;le<D.length;le+=1)Na(D[le],J,a);for(le=0;le<A.length;le+=1)x.delete(A[le]);At(r,Ie.prev,Ne.next),At(r,y,Ie),At(r,Ne,J),_=J,y=Ne,R-=1,D=[],A=[]}else x.delete(T),Na(T,_,a),At(r,T.prev,T.next),At(r,T,y===null?r.first:y.next),At(r,y,T),y=T;continue}for(D=[],A=[];_!==null&&_.k!==P;)(_.e.f&$t)===0&&(x??=new Set).add(_),A.push(_),_=_.next;if(_===null)continue;T=_}D.push(T),y=T,_=T.next}if(_!==null||x!==void 0){for(var $e=x===void 0?[]:ls(x);_!==null;)(_.e.f&$t)===0&&$e.push(_),_=_.next;var Pe=$e.length;if(Pe>0){var Z=(o&Bo)!==0&&p===0?a:null;if(d){for(R=0;R<Pe;R+=1)$e[R].a?.measure();for(R=0;R<Pe;R+=1)$e[R].a?.fix()}au(r,$e,Z)}}d&&xr(()=>{if(b!==void 0)for(T of b)T.a?.apply()}),e.first=r.first&&r.first.e,e.last=y&&y.e;for(var N of n.values())Qe(N.e);n.clear()}function gi(e,t,r,n){(n&ia)!==0&&Kr(e.v,t),(n&la)!==0?Kr(e.i,r):e.i=r}function yi(e,t,r,n,a,s,o,l,c,d,f){var p=(c&ia)!==0,h=(c&tc)===0,m=p?h?Tc(a,!1,!1):cr(a):a,_=(c&la)===0?o:cr(o),x={i:_,v:m,k:s,a:null,e:null,prev:r,next:n};try{if(e===null){var y=document.createDocumentFragment();y.append(e=fr())}return x.e=Xe(()=>l(e,m,_,d),hc),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?f||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function Na(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,s=e.e.nodes_start;s!==null&&s!==n;){var o=qn(s);a.before(s),s=o}}function At(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ne(e,t,...r){var n=e,a=F,s;vr(()=>{a!==(a=t())&&(s&&(Qe(s),s=null),s=Xe(()=>a(n,...r)))},Nr)}function Hn(e,t,r){var n=e,a,s,o=null,l=null;function c(){s&&(or(s),s=null),o&&(o.lastChild.remove(),n.before(o),o=null),s=l,l=null}vr(()=>{if(a!==(a=t())){var d=ps();if(a){var f=n;d&&(o=document.createDocumentFragment(),o.append(f=fr()),s&&ge.skipped_effects.add(s)),l=Xe(()=>r(f,a))}d?ge.add_callback(c):c()}},Nr)}function ou(e,t,r,n,a,s){var o,l,c=null,d=e,f;vr(()=>{const p=t()||null;var h=uc;p!==o&&(f&&(p===null?or(f,()=>{f=null,l=null}):p===l?fa(f):Qe(f)),p&&p!==l&&(f=Xe(()=>{if(c=document.createElementNS(h,p),Yr(c,c),n){var m=c.appendChild(fr());n(c,m)}ee.nodes_end=c,d.before(c)})),o=p,o&&(l=o))},Nr)}function iu(e,t){var r=void 0,n;vr(()=>{r!==(r=t())&&(n&&(Qe(n),n=null),r&&(n=Xe(()=>{_s(()=>r(e))})))})}function bi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=bi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function lu(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=bi(e))&&(n&&(n+=" "),n+=t);return n}function wi(e){return typeof e=="object"?lu(e):e??""}const Js=[...` 	
\r\f \v\uFEFF`];function cu(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var s=a.length,o=0;(o=n.indexOf(a,o))>=0;){var l=o+s;(o===0||Js.includes(n[o-1]))&&(l===n.length||Js.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Zs(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var s=e[a];s!=null&&s!==""&&(n+=" "+a+": "+s+r)}return n}function Ta(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function uu(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Ta)),a&&c.push(...Object.keys(a).map(Ta));var d=0,f=-1;const x=e.length;for(var p=0;p<x;p++){var h=e[p];if(l?h==="/"&&e[p-1]==="*"&&(l=!1):s?s===h&&(s=!1):h==="/"&&e[p+1]==="*"?l=!0:h==='"'||h==="'"?s=h:h==="("?o++:h===")"&&o--,!l&&s===!1&&o===0){if(h===":"&&f===-1)f=p;else if(h===";"||p===x-1){if(f!==-1){var m=Ta(e.substring(d,f).trim());if(!c.includes(m)){h!==";"&&p++;var _=e.substring(d,p).trim();r+=" "+_+";"}}d=p+1,f=-1}}}}return n&&(r+=Zs(n)),a&&(r+=Zs(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function De(e,t,r,n,a,s){var o=e.__className;if(o!==r||o===void 0){var l=cu(r,n,s);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(s&&a!==s)for(var c in s){var d=!!s[c];(a==null||d!==!!a[c])&&e.classList.toggle(c,d)}return s}function Aa(e,t={},r,n){for(var a in r){var s=r[a];t[a]!==s&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,s,n))}}function du(e,t,r,n){var a=e.__style;if(a!==t){var s=uu(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else n&&(Array.isArray(n)?(Aa(e,r?.[0],n[0]),Aa(e,r?.[1],n[1],"important")):Aa(e,r,n));return n}function ea(e,t,r=!1){if(e.multiple){if(t==null)return;if(!sa(t))return fc();for(var n of e.options)n.selected=t.includes(Sn(n));return}for(n of e.options){var a=Sn(n);if(Ac(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Si(e){var t=new MutationObserver(()=>{ea(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ti(()=>{t.disconnect()})}function _n(e,t,r=t){var n=!0;ms(e,"change",a=>{var s=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(s),Sn);else{var l=e.querySelector(s)??e.querySelector("option:not([disabled])");o=l&&Sn(l)}r(o)}),_s(()=>{var a=t();if(ea(e,a,n),n&&a===void 0){var s=e.querySelector(":checked");s!==null&&(a=Sn(s),r(a))}e.__value=a,n=!1}),Si(e)}function Sn(e){return"__value"in e?e.__value:e.value}const fn=Symbol("class"),vn=Symbol("style"),xi=Symbol("is custom element"),Ei=Symbol("is html");function bs(e,t){var r=ha(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Wr(e,t){var r=ha(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function fu(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ta(e,t,r,n){var a=ha(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Vl]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Pi(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function vu(e,t,r,n,a=!1,s=!1){var o=ha(e),l=o[xi],c=!o[Ei],d=t||{},f=e.tagName==="OPTION";for(var p in t)p in r||(r[p]=null);r.class?r.class=wi(r.class):r[fn]&&(r.class=null),r[vn]&&(r.style??=null);var h=Pi(e);for(const E in r){let P=r[E];if(f&&E==="value"&&P==null){e.value=e.__value="",d[E]=P;continue}if(E==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";De(e,m,P,n,t?.[fn],r[fn]),d[E]=P,d[fn]=r[fn];continue}if(E==="style"){du(e,P,t?.[vn],r[vn]),d[E]=P,d[vn]=r[vn];continue}var _=d[E];if(!(P===_&&!(P===void 0&&e.hasAttribute(E)))){d[E]=P;var x=E[0]+E[1];if(x!=="$$")if(x==="on"){const T={},R="$$"+E;let w=E.slice(2);var y=Qc(w);if(Hc(w)&&(w=w.slice(0,-7),T.capture=!0),!y&&_){if(P!=null)continue;e.removeEventListener(w,d[R],T),d[R]=null}if(P!=null)if(y)e[`__${w}`]=P,Ot([w]);else{let O=function(k){d[E].call(this,k)};var A=O;d[R]=mi(w,e,O,T)}else y&&(e[`__${w}`]=void 0)}else if(E==="style")ta(e,E,P);else if(E==="autofocus")Mc(e,!!P);else if(!l&&(E==="__value"||E==="value"&&P!=null))e.value=e.__value=P;else if(E==="selected"&&f)fu(e,P);else{var b=E;c||(b=Jc(b));var D=b==="defaultValue"||b==="defaultChecked";if(P==null&&!l&&!D)if(o[E]=null,b==="value"||b==="checked"){let T=e;const R=t===void 0;if(b==="value"){let w=T.defaultValue;T.removeAttribute(b),T.defaultValue=w,T.value=T.__value=R?w:null}else{let w=T.defaultChecked;T.removeAttribute(b),T.defaultChecked=w,T.checked=R?w:!1}}else e.removeAttribute(E);else D||h.includes(b)&&(l||typeof P!="string")?(e[b]=P,b in o&&(o[b]=Ge)):typeof P!="function"&&ta(e,b,P)}}}return d}function Xs(e,t,r=[],n=[],a,s=!1,o=!1){Ko(r,n,l=>{var c=void 0,d={},f=e.nodeName==="SELECT",p=!1;if(vr(()=>{var m=t(...l.map(i)),_=vu(e,c,m,a,s,o);p&&f&&"value"in m&&ea(e,m.value);for(let y of Object.getOwnPropertySymbols(d))m[y]||Qe(d[y]);for(let y of Object.getOwnPropertySymbols(m)){var x=m[y];y.description===dc&&(!c||x!==c[y])&&(d[y]&&Qe(d[y]),d[y]=Xe(()=>iu(e,()=>x))),_[y]=x}c=_}),f){var h=e;_s(()=>{ea(h,c.value,!0),Si(h)})}p=!0})}function ha(e){return e.__attributes??={[xi]:e.nodeName.includes("-"),[Ei]:e.namespaceURI===cc}}var Fs=new Map;function Pi(e){var t=e.getAttribute("is")||e.nodeName,r=Fs.get(t);if(r)return r;Fs.set(t,r=[]);for(var n,a=e,s=Element.prototype;s!==a;){n=ql(a);for(var o in n)n[o].set&&r.push(o);a=Mo(a)}return r}function je(e,t,r=t){var n=new WeakSet;ms(e,"input",async a=>{var s=a?e.defaultValue:e.value;if(s=Da(e)?Ca(s):s,r(s),ge!==null&&n.add(ge),await Wc(),s!==(s=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=s??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),en(t)==null&&e.value&&(r(Da(e)?Ca(e.value):e.value),ge!==null&&n.add(ge)),gs(()=>{var a=t();if(e===document.activeElement){var s=Gn??ge;if(n.has(s))return}Da(e)&&a===Ca(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function hu(e,t,r=t){ms(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),en(t)==null&&r(e.checked),gs(()=>{var n=t();e.checked=!!n})}function Da(e){var t=e.type;return t==="number"||t==="range"}function Ca(e){return e===""?null:+e}let Wn=!1;function pu(e){var t=Wn;try{return Wn=!1,[e(),Wn]}finally{Wn=t}}const mu={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ae(e,t,r){return new Proxy({props:e,exclude:t},mu)}const _u={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(dn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];dn(a)&&(a=a());const s=ar(a,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(dn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=ar(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===Sr||t===Oo)return!1;for(let r of e.props)if(dn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(dn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function oe(...e){return new Proxy({props:e},_u)}function jr(e,t,r,n){var a=!Fr||(r&nc)!==0,s=(r&sc)!==0,o=(r&oc)!==0,l=n,c=!0,d=()=>(c&&(c=!1,l=o?en(n):n),l),f;if(s){var p=Sr in e||Oo in e;f=ar(e,t)?.set??(p&&t in e?A=>e[t]=A:void 0)}var h,m=!1;s?[h,m]=pu(()=>e[t]):h=e[t],h===void 0&&n!==void 0&&(h=d(),f&&(a&&Yl(),f(h)));var _;if(a?_=()=>{var A=e[t];return A===void 0?d():(c=!0,A)}:_=()=>{var A=e[t];return A!==void 0&&(l=void 0),A===void 0?l:A},a&&(r&ac)===0)return _;if(f){var x=e.$$legacy;return(function(A,E){return arguments.length>0?((!a||!E||x||m)&&f(E?_():A),A):_()})}var y=!1,b=((r&rc)!==0?ua:vs)(()=>(y=!1,_()));s&&i(b);var D=ee;return(function(A,E){if(arguments.length>0){const P=E?i(b):a&&s?bt(A):A;return C(b,P),y=!0,l!==void 0&&(l=P),A}return Tr&&y||(D.f&kr)!==0?b.v:i(b)})}function $i(e){Me===null&&qo(),Fr&&Me.l!==null?yu(Me).m.push(e):ri(()=>{const t=en(e);if(typeof t=="function")return t})}function gu(e){Me===null&&qo(),$i(()=>()=>en(e))}function yu(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const bu="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(bu);const wu="modulepreload",Su=function(e){return"/"+e},eo={},Ma=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let d=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};var o=d;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=d(r.map(f=>{if(f=Su(f),f in eo)return;eo[f]=!0;const p=f.endsWith(".css"),h=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${h}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":wu,p||(m.as="script"),m.crossOrigin="",m.href=f,c&&m.setAttribute("nonce",c),document.head.appendChild(m),p)return new Promise((_,x)=>{m.addEventListener("load",_),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};class xu extends Map{#e=new Map;#r=se(0);#d=se(0);#f=Ut||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#d.v=super.size}}#c(t){return Ut===this.#f?se(t):cr(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#c(0),r.set(t,n);else return i(this.#r),!1}return i(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#c(0),r.set(t,n);else{i(this.#r);return}}return i(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),s=super.get(t),o=super.set(t,r),l=this.#r;if(a===void 0)a=this.#c(0),n.set(t,a),C(this.#d,super.size),Ct(l);else if(s!==r){Ct(a);var c=l.reactions===null?null:new Set(l.reactions),d=c===null||!a.reactions?.every(f=>c.has(f));d&&Ct(l)}return o}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),C(this.#d,super.size),C(n,-1),Ct(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;C(this.#d,0);for(var r of t.values())C(r,-1);Ct(this.#r),t.clear()}}#o(){i(this.#r);var t=this.#e;if(this.#d.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#c(0);t.set(r,n)}}for([,n]of this.#e)i(n)}keys(){return i(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return i(this.#d),super.size}}class Eu{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class ki{constructor(t){this.generateIdentifier=t,this.kv=new Eu}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class Pu extends ki{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function $u(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function ku(e,t){const r=$u(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const s=n[a];if(t(s))return s}}function Jr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function Kn(e,t){return e.indexOf(t)!==-1}function to(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class Nu{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return ku(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const Tu=e=>Object.prototype.toString.call(e).slice(8,-1),Ni=e=>typeof e>"u",Au=e=>e===null,Tn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Ka=e=>Tn(e)&&Object.keys(e).length===0,ur=e=>Array.isArray(e),Du=e=>typeof e=="string",Cu=e=>typeof e=="number"&&!isNaN(e),Mu=e=>typeof e=="boolean",Iu=e=>e instanceof RegExp,An=e=>e instanceof Map,Dn=e=>e instanceof Set,Ti=e=>Tu(e)==="Symbol",Ru=e=>e instanceof Date&&!isNaN(e.valueOf()),Ou=e=>e instanceof Error,ro=e=>typeof e=="number"&&isNaN(e),qu=e=>Mu(e)||Au(e)||Ni(e)||Cu(e)||Du(e)||Ti(e),Bu=e=>typeof e=="bigint",Lu=e=>e===1/0||e===-1/0,ju=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),zu=e=>e instanceof URL,Ai=e=>e.replace(/\./g,"\\."),Ia=e=>e.map(String).map(Ai).join("."),xn=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let s=e.charAt(a);if(s==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(s==="."){t.push(r),r="";continue}r+=s}const n=r;return t.push(n),t};function Tt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Di=[Tt(Ni,"undefined",()=>null,()=>{}),Tt(Bu,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Tt(Ru,"Date",e=>e.toISOString(),e=>new Date(e)),Tt(Ou,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Tt(Iu,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Tt(Dn,"set",e=>[...e.values()],e=>new Set(e)),Tt(An,"map",e=>[...e.entries()],e=>new Map(e)),Tt(e=>ro(e)||Lu(e),"number",e=>ro(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Tt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Tt(zu,"URL",e=>e.toString(),e=>new URL(e))];function pa(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Ci=pa((e,t)=>Ti(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),Uu=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),Mi=pa(ju,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=Uu[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function Ii(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const Ri=pa(Ii,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),Oi=pa((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Vu=[Ri,Ci,Oi,Mi],no=(e,t)=>{const r=to(Vu,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=to(Di,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},qi={};Di.forEach(e=>{qi[e.annotation]=e});const Wu=(e,t,r)=>{if(ur(t))switch(t[0]){case"symbol":return Ci.untransform(e,t,r);case"class":return Ri.untransform(e,t,r);case"custom":return Oi.untransform(e,t,r);case"typed-array":return Mi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=qi[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},zr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function Bi(e){if(Kn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(Kn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(Kn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const Gu=(e,t)=>{Bi(t);for(let r=0;r<t.length;r++){const n=t[r];if(Dn(e))e=zr(e,+n);else if(An(e)){const a=+n,s=+t[++r]==0?"key":"value",o=zr(e,a);switch(s){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},Qa=(e,t,r)=>{if(Bi(t),t.length===0)return r(e);let n=e;for(let s=0;s<t.length-1;s++){const o=t[s];if(ur(n)){const l=+o;n=n[l]}else if(Tn(n))n=n[o];else if(Dn(n)){const l=+o;n=zr(n,l)}else if(An(n)){if(s===t.length-2)break;const c=+o,d=+t[++s]==0?"key":"value",f=zr(n,c);switch(d){case"key":n=f;break;case"value":n=n.get(f);break}}}const a=t[t.length-1];if(ur(n)?n[+a]=r(n[+a]):Tn(n)&&(n[a]=r(n[a])),Dn(n)){const s=zr(n,+a),o=r(s);s!==o&&(n.delete(s),n.add(o))}if(An(n)){const s=+t[t.length-2],o=zr(n,s);switch(+a==0?"key":"value"){case"key":{const c=r(o);n.set(c,n.get(o)),c!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function Ya(e,t,r=[]){if(!e)return;if(!ur(e)){Jr(e,(s,o)=>Ya(s,t,[...r,...xn(o)]));return}const[n,a]=e;a&&Jr(a,(s,o)=>{Ya(s,t,[...r,...xn(o)])}),t(n,r)}function Hu(e,t,r){return Ya(t,(n,a)=>{e=Qa(e,a,s=>Wu(s,n,r))}),e}function Ku(e,t){function r(n,a){const s=Gu(e,xn(a));n.map(xn).forEach(o=>{e=Qa(e,o,()=>s)})}if(ur(t)){const[n,a]=t;n.forEach(s=>{e=Qa(e,xn(s),()=>e)}),a&&Jr(a,r)}else Jr(t,r);return e}const Qu=(e,t)=>Tn(e)||ur(e)||An(e)||Dn(e)||Ii(e,t);function Yu(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Ju(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[s,...o]=a;s.length===0?n=o.map(Ia):r[Ia(s)]=o.map(Ia)}),n?Ka(r)?[n]:[n,r]:Ka(r)?void 0:r}const Li=(e,t,r,n,a=[],s=[],o=new Map)=>{const l=qu(e);if(!l){Yu(e,a,t);const m=o.get(e);if(m)return n?{transformedValue:null}:m}if(!Qu(e,r)){const m=no(e,r),_=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return l||o.set(e,_),_}if(Kn(s,e))return{transformedValue:null};const c=no(e,r),d=c?.value??e,f=ur(d)?[]:{},p={};Jr(d,(m,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const x=Li(m,t,r,n,[...a,_],[...s,e],o);f[_]=x.transformedValue,ur(x.annotations)?p[_]=x.annotations:Tn(x.annotations)&&Jr(x.annotations,(y,b)=>{p[Ai(_)+"."+b]=y})});const h=Ka(p)?{transformedValue:f,annotations:c?[c.type]:void 0}:{transformedValue:f,annotations:c?[c.type,p]:p};return l||o.set(e,h),h};function ji(e){return Object.prototype.toString.call(e).slice(8,-1)}function ao(e){return ji(e)==="Array"}function Zu(e){if(ji(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Xu(e,t,r,n,a){const s={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";s==="enumerable"&&(e[t]=r),a&&s==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Ja(e,t={}){if(ao(e))return e.map(a=>Ja(a,t));if(!Zu(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,s)=>{if(ao(t.props)&&!t.props.includes(s))return a;const o=e[s],l=Ja(o,t);return Xu(a,s,l,e,t.nonenumerable),a},{})}class re{constructor({dedupe:t=!1}={}){this.classRegistry=new Pu,this.symbolRegistry=new ki(r=>r.description??""),this.customTransformerRegistry=new Nu,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=Li(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const s=Ju(r,this.dedupe);return s&&(a.meta={...a.meta,referentialEqualities:s}),a}deserialize(t){const{json:r,meta:n}=t;let a=Ja(r);return n?.values&&(a=Hu(a,n.values,this)),n?.referentialEqualities&&(a=Ku(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}re.defaultInstance=new re;re.serialize=re.defaultInstance.serialize.bind(re.defaultInstance);re.deserialize=re.defaultInstance.deserialize.bind(re.defaultInstance);re.stringify=re.defaultInstance.stringify.bind(re.defaultInstance);re.parse=re.defaultInstance.parse.bind(re.defaultInstance);re.registerClass=re.defaultInstance.registerClass.bind(re.defaultInstance);re.registerSymbol=re.defaultInstance.registerSymbol.bind(re.defaultInstance);re.registerCustom=re.defaultInstance.registerCustom.bind(re.defaultInstance);re.allowErrorProps=re.defaultInstance.allowErrorProps.bind(re.defaultInstance);re.serialize;re.deserialize;re.stringify;re.parse;re.registerClass;re.registerCustom;re.registerSymbol;re.allowErrorProps;function Fu(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function ed(e,t){return`${e}_${t}`}const td=typeof window<"u"?window:void 0;function rd(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class nd{#e;#r;constructor(t={}){const{window:r=td,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=Ho(a=>{const s=Qs(r,"focusin",a),o=Qs(r,"focusout",a);return()=>{s(),o()}}))}get current(){return this.#r?.(),this.#e?rd(this.#e):null}}new nd;function ad(e){return typeof e=="function"}function sd(e,t){if(ad(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function od(e,t){let r=se(null);const n=B(()=>sd(t,250));function a(...s){if(i(r))i(r).timeout&&clearTimeout(i(r).timeout);else{let o,l;const c=new Promise((d,f)=>{o=d,l=f});C(r,{timeout:null,runner:null,promise:c,resolve:o,reject:l},!0)}return i(r).runner=async()=>{if(!i(r))return;const o=i(r);C(r,null);try{o.resolve(await e.apply(this,s))}catch(l){o.reject(l)}},i(r).timeout=setTimeout(i(r).runner,i(n)),i(r).promise}return a.cancel=async()=>{(!i(r)||i(r).timeout===null)&&(await new Promise(s=>setTimeout(s,0)),!i(r)||i(r).timeout===null)||(clearTimeout(i(r).timeout),i(r).reject("Cancelled"),C(r,null))},a.runScheduledNow=async()=>{(!i(r)||!i(r).timeout)&&(await new Promise(s=>setTimeout(s,0)),!i(r)||!i(r).timeout)||(clearTimeout(i(r).timeout),i(r).timeout=null,await i(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!i(r)?.timeout}}),a}function gn(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function id(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function ld(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function cd(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>Za(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],s=[];r.forEach((l,c)=>{const d=n.get(c)||0,f=l-d;f>0&&(a.push({q:f,u:c}),s.push(Za(f.toString(),c)))});const o=s.length>0?s.join(" et "):"✅ Complet";return{numeric:a,display:o}}function hn(e){return e?.length?e.map(t=>Za(t.q.toString(),t.u)).join(" et "):"-"}function Za(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let o=(Math.round(n*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function ud(e){return gn(e)}function dd(e,t,r){if(!e||Object.keys(e).length===0)return[];const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r,s=Object.entries(e).filter(([o])=>{const l=new Date(o);return l>=n&&l<=a}).flatMap(([o,l])=>l.totalConsolidated);return zi(s)}function zi(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function fd(e,t){return e[t]?.recipes||[]}function vd(e){return e?Object.values(e).flatMap(t=>t.recipes||[]):[]}function hd(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([s])=>{const o=new Date(s);return o>=n&&o<=a}).reduce((s,[o,l])=>s+(l.totalAssiettes||0),0)}function pd(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function md(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function so(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return zi(t)}function _d(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class S{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}S.equal=(e,t)=>new S("equal",e,t).toString();S.notEqual=(e,t)=>new S("notEqual",e,t).toString();S.lessThan=(e,t)=>new S("lessThan",e,t).toString();S.lessThanEqual=(e,t)=>new S("lessThanEqual",e,t).toString();S.greaterThan=(e,t)=>new S("greaterThan",e,t).toString();S.greaterThanEqual=(e,t)=>new S("greaterThanEqual",e,t).toString();S.isNull=e=>new S("isNull",e).toString();S.isNotNull=e=>new S("isNotNull",e).toString();S.between=(e,t,r)=>new S("between",e,[t,r]).toString();S.startsWith=(e,t)=>new S("startsWith",e,t).toString();S.endsWith=(e,t)=>new S("endsWith",e,t).toString();S.select=e=>new S("select",void 0,e).toString();S.search=(e,t)=>new S("search",e,t).toString();S.orderDesc=e=>new S("orderDesc",e).toString();S.orderAsc=e=>new S("orderAsc",e).toString();S.orderRandom=()=>new S("orderRandom").toString();S.cursorAfter=e=>new S("cursorAfter",void 0,e).toString();S.cursorBefore=e=>new S("cursorBefore",void 0,e).toString();S.limit=e=>new S("limit",void 0,e).toString();S.offset=e=>new S("offset",void 0,e).toString();S.contains=(e,t)=>new S("contains",e,t).toString();S.notContains=(e,t)=>new S("notContains",e,t).toString();S.notSearch=(e,t)=>new S("notSearch",e,t).toString();S.notBetween=(e,t,r)=>new S("notBetween",e,[t,r]).toString();S.notStartsWith=(e,t)=>new S("notStartsWith",e,t).toString();S.notEndsWith=(e,t)=>new S("notEndsWith",e,t).toString();S.createdBefore=e=>new S("createdBefore",void 0,e).toString();S.createdAfter=e=>new S("createdAfter",void 0,e).toString();S.createdBetween=(e,t)=>new S("createdBetween",void 0,[e,t]).toString();S.updatedBefore=e=>new S("updatedBefore",void 0,e).toString();S.updatedAfter=e=>new S("updatedAfter",void 0,e).toString();S.updatedBetween=(e,t)=>new S("updatedBetween",void 0,[e,t]).toString();S.or=e=>new S("or",void 0,e.map(t=>JSON.parse(t))).toString();S.and=e=>new S("and",void 0,e.map(t=>JSON.parse(t))).toString();S.distanceEqual=(e,t,r,n=!0)=>new S("distanceEqual",e,[[t,r,n]]).toString();S.distanceNotEqual=(e,t,r,n=!0)=>new S("distanceNotEqual",e,[[t,r,n]]).toString();S.distanceGreaterThan=(e,t,r,n=!0)=>new S("distanceGreaterThan",e,[[t,r,n]]).toString();S.distanceLessThan=(e,t,r,n=!0)=>new S("distanceLessThan",e,[[t,r,n]]).toString();S.intersects=(e,t)=>new S("intersects",e,[t]).toString();S.notIntersects=(e,t)=>new S("notIntersects",e,[t]).toString();S.crosses=(e,t)=>new S("crosses",e,[t]).toString();S.notCrosses=(e,t)=>new S("notCrosses",e,[t]).toString();S.overlaps=(e,t)=>new S("overlaps",e,[t]).toString();S.notOverlaps=(e,t)=>new S("notOverlaps",e,[t]).toString();S.touches=(e,t)=>new S("touches",e,[t]).toString();S.notTouches=(e,t)=>new S("notTouches",e,[t]).toString();var Ui,Vi;class Cn{static custom(t){return t}static unique(t=7){const r=_d(Cn,Ui,"m",Vi).call(Cn);let n="";for(let a=0;a<t;a++){const s=Math.floor(Math.random()*16).toString(16);n+=s}return r+n}}Ui=Cn,Vi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var oo;(function(e){e.Totp="totp"})(oo||(oo={}));var io;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(io||(io={}));var lo;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(lo||(lo={}));var co;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(co||(co={}));var uo;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(uo||(uo={}));var fo;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(fo||(fo={}));var vo;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(vo||(vo={}));var ho;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(ho||(ho={}));var po;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(po||(po={}));function Wi(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:e.productType,pFrais:e.pFrais,pSurgel:e.pSurgel,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,byDate:e.byDate,...t}}async function qt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function gd(e,t,r=100){try{const{databases:n,config:a}=await qt(),s=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[S.greaterThan("$updatedAt",t),S.equal("mainId",e),S.limit(r),S.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${s.documents.length} purchases modifiés chargés`),s.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function Gi(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:s}=await qt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,[S.equal("mainId",e),S.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),S.limit(n)])).documents;const o=await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,[S.greaterThan("$updatedAt",r),S.equal("mainId",e),S.limit(n),S.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const s=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${s}`)}}async function ma(e,t){try{const{databases:r,config:n}=await qt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function yn(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=Wi(n,t),{databases:s,config:o}=await qt(),l=await s.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function Hi(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await ma(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Xa(e,t){return ma(e,{who:t})}async function Fa(e,t){return ma(e,{stockReel:t})}async function Ki(e){try{const{databases:t,config:r}=await qt(),s=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:s.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Cn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Qi(e,t){try{const{databases:r,config:n}=await qt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),s={...t,products:t.products||a.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,s);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,s),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Yi(e){try{const{databases:t,config:r}=await qt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Ji(e){if(!e?.length)return[];try{const{databases:t,config:r}=await qt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[S.equal("$id",e),S.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Zi(e,t={}){let r=null;const n=s=>{const{events:o,payload:l}=s;if(!l)return;const c=o.some(m=>m.includes("products.")),d=o.some(m=>m.includes("purchases.")),f=o.some(m=>m.includes(".create")),p=o.some(m=>m.includes(".update")),h=o.some(m=>m.includes(".delete"));if(c){const m=l;f&&t.onProductCreate?t.onProductCreate(m):p&&t.onProductUpdate?t.onProductUpdate(m):h&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(d){const m=l;f&&t.onPurchaseCreate?t.onPurchaseCreate(m):p&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):h&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:s=>{console.error("[Appwrite Interactions] Erreur realtime:",s),t.onError?.(s)}}))}catch(s){console.error("[Appwrite Interactions] Impossible de configurer realtime:",s),t.onError?.(s)}})(),()=>{r&&(r(),r=null)}}async function Xi(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await qt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Fi(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await qt(),s=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}const Ra=Object.freeze(Object.defineProperty({__proto__:null,createMainDocument:Fi,createPurchase:Ki,deletePurchase:Yi,enrichedProductToAppwriteProduct:Wi,loadMainEventData:Xi,loadPurchasesListByIds:Ji,loadUpdatedPurchases:gd,subscribeToRealtime:Zi,syncProductsWithPurchases:Gi,updateProduct:ma,updateProductStock:Fa,updateProductStore:Hi,updateProductWho:Xa,updatePurchase:Qi,upsertProduct:yn},Symbol.toStringTag,{value:"Module"}));async function yd(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function bd(e,t,r){return{$id:`${t}_${e.ingredientHugoUuid}`,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,byDate:JSON.stringify(e.byDate),nbRecipes:e.nbRecipes||0,totalAssiettes:e.totalAssiettes||0,status:"",purchases:[],store:"",who:null,stockReel:null,isMerged:!1,mergedInto:null,mergedFrom:null,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,mainId:t}}const mo=1e3,wd=500;class Sd{#e=new xu;#r=se(null);#d=se(!1);#f=se(!1);#c=se(null);#o=se(!1);#l=se(!1);#n=se(bt([]));#i=se(null);#a=se(null);#s=se(null);#u=null;#v=null;#h=null;#p=null;#x=se(!1);#t=se(bt({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return i(this.#t)}get currentMainId(){return i(this.#r)}get isInitialized(){return i(this.#d)}get loading(){return i(this.#f)}get error(){return i(this.#c)}get allDates(){return i(this.#n)}get syncing(){return i(this.#o)}get lastSync(){return i(this.#i)}get startDate(){return i(this.#a)}get endDate(){return i(this.#s)}setStartDate(t){C(this.#a,t,!0)}setEndDate(t){C(this.#s,t,!0)}setDateRange(t,r){C(this.#a,t,!0),C(this.#s,r,!0)}initializeDateRange(){if((!i(this.#a)||!i(this.#s))&&i(this.#n).length>0){const t=[...i(this.#n)].sort();C(this.#a,t[0],!0),C(this.#s,t[t.length-1],!0)}}get firstDate(){return i(this.#n).length===0?null:[...i(this.#n)].sort()[0]}get lastDate(){return i(this.#n).length===0?null:[...i(this.#n)].sort().pop()}get realtimeConnected(){return i(this.#l)}get hugoContentChanged(){return i(this.#x)}#E=B(()=>Array.from(this.#e.values()));get enrichedProducts(){return i(this.#E)}set enrichedProducts(t){C(this.#E,t)}#g=B(()=>{const t=new Map;return this.enrichedProducts.forEach(r=>{if(r.totalNeededIsManualOverride&&r.totalNeededConsolidated){const a=gn(r.totalNeededConsolidated);a&&a.length>0&&t.set(r.$id,a);return}if(!r.byDateParsed||!i(this.#a)||!i(this.#s))return;const n=dd(r.byDateParsed,i(this.#a),i(this.#s));n&&n.length>0&&t.set(r.$id,n)}),t});get totalNeededByDateRange(){return i(this.#g)}set totalNeededByDateRange(t){C(this.#g,t)}#y=B(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const a=hn(r);t.set(n,a)}),t});get formattedTotalNeededByDateRange(){return i(this.#y)}set formattedTotalNeededByDateRange(t){C(this.#y,t)}#b=B(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return i(this.#b)}set stats(t){C(this.#b,t)}#k=B(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return i(this.#k)}set uniqueStores(t){C(this.#k,t)}#N=B(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return i(this.#N)}set uniqueWho(t){C(this.#N,t)}#T=B(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return i(this.#T)}set uniqueProductTypes(t){C(this.#T,t)}#A=B(()=>this.enrichedProducts.filter(t=>this.#U(t)));get filteredProducts(){return i(this.#A)}set filteredProducts(t){C(this.#A,t)}#D=B(()=>{const t=this.filteredProducts;return i(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>i(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return i(this.#D)}set filteredGroupedProducts(t){C(this.#D,t)}#C=B(()=>this.filteredGroupedProducts);get groupedFormattedProducts(){return i(this.#C)}set groupedFormattedProducts(t){C(this.#C,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(i(this.#d)&&i(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),C(this.#r,t,!0),this.#u=ed("products-enriched",t),C(this.#c,null);try{if(await this.#R(),this.#e.size===0){const n=await yd(t);console.log(`[ProductsStore] Données Hugo chargées: ${n.ingredients.length} ingredients`),n.ingredients.forEach(s=>{const o=bd(s,t,n.hugoContentHash),l=this.#P(o);this.#e.set(l.$id,l)}),C(this.#n,n.allDates,!0),this.initializeDateRange(),await Xi(t)||await Fi(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),this.#w()}this.#O(),C(this.#d,!0);const r=this.#z();this.#h=Zi(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw C(this.#c,n,!0),console.error("[ProductsStore]",n,r),r}}async#R(){if(this.#u)try{const t=localStorage.getItem(this.#u);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:a}=re.parse(t);r.forEach(([s,o])=>this.#e.set(s,o)),C(this.#i,n,!0),C(this.#n,a||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${a?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}async#O(){if(i(this.#r)){C(this.#o,!0);try{const t=await Gi(i(this.#r),{lastSync:i(this.#i),limit:mo});if(i(this.#i)){const{loadUpdatedPurchases:r}=await Ma(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Ra);return{loadUpdatedPurchases:a}},void 0);(await r(i(this.#r),i(this.#i),mo)).forEach(a=>{if(a.products?.length){const s=a.products.map(o=>typeof o=="string"?o:o.$id);this.#$(s,a)}})}t.forEach(r=>{const n=this.#P(r);n.isSynced=!0,this.#e.set(r.$id,n)}),this.#_(),this.#m()}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{C(this.#o,!1)}}}#w(){if(this.#u)try{const t={lastSync:i(this.#i),products:Array.from(this.#e.entries()),allDates:i(this.#n)};localStorage.setItem(this.#u,re.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}#m(){this.#p&&clearTimeout(this.#p),this.#p=setTimeout(()=>{this.#w(),this.#p=null},wd)}#_(){C(this.#i,new Date().toISOString(),!0)}#P(t){const r=ld(id(t.purchases??[])),n=ud(t.byDate);let a,s,o,l;n?(a=so(n),s=md(n),o=vd(n),t.totalNeededConsolidated&&t.totalNeededIsManualOverride&&(l=gn(t.totalNeededConsolidated)||void 0)):(console.error(`[ProductsStore] Product ${t.productName} n'a pas de structure byDate - migration requise`),a=[],s=[],o=[]);const{numeric:c,display:d}=cd(a,r),f=gn(t.stockReel)??[],p=hn(r),h=f.length>0?`${f[f.length-1].quantity} ${f[f.length-1].unit}`:p;return{...t,storeInfo:t.store?gn(t.store):null,totalNeededArray:a,totalPurchasesArray:r,recipesArray:o,stockArray:f,stockOrTotalPurchases:h,missingQuantityArray:c,neededConsolidatedByDateArray:s,displayTotalNeeded:hn(a),displayTotalPurchases:p,displayMissingQuantity:d,byDateParsed:n||void 0,totalNeededRawArray:l,totalNeededIsManualOverride:t.totalNeededIsManualOverride??!1,totalNeededOverrideReason:t.totalNeededOverrideReason}}#M(t){t.length&&(t.forEach(r=>this.#S(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#S(t){const r=this.#P(t);this.#e.set(t.$id,r)}#q(t){this.#e.delete(t)}async#B(t){if(!t.products?.length){console.warn("[ProductsStore] Purchase créé sans products:",t.$id);return}const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#j(r,t)}async#L(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#$(r,t);return}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Ji([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);this.#$(n,r)}}catch(r){console.error("[ProductsStore] Erreur rechargement purchase:",r)}}#I(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:typeof t.mainId=="string"?t.mainId:t.mainId.$id}}#j(t,r){const n=this.#I(r),a=[];t.forEach(s=>{const o=this.#e.get(s);if(o){const l=o.purchases||[];l.some(c=>c.$id===n.$id)||a.push({...o,purchases:[...l,n]})}}),this.#M(a)}#$(t,r){const n=this.#I(r),a=[];t.forEach(s=>{const o=this.#e.get(s);if(o){const l=o.purchases||[],c=l.findIndex(d=>d.$id===n.$id);if(c>=0){const d=[...l];d[c]=n,a.push({...o,purchases:d})}else a.push({...o,purchases:[...l,r]})}}),this.#M(a)}#z(){return{onProductCreate:t=>{this.#S(t),this.#_(),this.#m()},onProductUpdate:t=>{this.#S(t),this.#_(),this.#m()},onProductDelete:t=>{this.#q(t),this.#_(),this.#m()},onPurchaseCreate:t=>{this.#B(t),this.#_(),this.#m()},onPurchaseUpdate:t=>{this.#L(t),this.#_(),this.#m()},onPurchaseDelete:t=>{Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t)).forEach(n=>{this.#S(n)}),this.#_(),this.#m()},onConnect:()=>{C(this.#l,!0)},onDisconnect:()=>{C(this.#l,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#U(t){if(i(this.#t).searchQuery.trim()){const r=i(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(i(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!i(this.#t).selectedStores.includes(t.storeInfo.storeName))||i(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>i(this.#t).selectedWho.includes(r)))||i(this.#t).selectedProductTypes.length>0&&(!t.productType||!i(this.#t).selectedProductTypes.includes(t.productType))||i(this.#t).selectedTemperatures.length>0&&!(i(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||i(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=od(t=>{i(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=i(this.#t).selectedProductTypes.indexOf(t);r>-1?i(this.#t).selectedProductTypes.splice(r,1):i(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=i(this.#t).selectedTemperatures.indexOf(t);r>-1?i(this.#t).selectedTemperatures.splice(r,1):i(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){i(this.#t).selectedProductTypes=[],i(this.#t).selectedTemperatures=[]}setGroupBy(t){i(this.#t).groupBy=t}toggleStore(t){const r=i(this.#t).selectedStores.indexOf(t);r>-1?i(this.#t).selectedStores.splice(r,1):i(this.#t).selectedStores.push(t)}toggleWho(t){const r=i(this.#t).selectedWho.indexOf(t);r>-1?i(this.#t).selectedWho.splice(r,1):i(this.#t).selectedWho.push(t)}clearStoreFilters(){i(this.#t).selectedStores=[]}clearWhoFilters(){i(this.#t).selectedWho=[]}handleSort(t){i(this.#t).sortColumn===t?i(this.#t).sortDirection=i(this.#t).sortDirection==="asc"?"desc":"asc":(i(this.#t).sortColumn=t,i(this.#t).sortDirection="asc")}clearFilters(){C(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return i(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[i(this.#t).sortColumn],s=n[i(this.#t).sortColumn];return i(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,s=parseFloat(s)||0):i(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,s=n.purchases?.length||0),a<s?i(this.#t).sortDirection==="asc"?-1:1:a>s?i(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getNeededForProduct(t){return this.totalNeededByDateRange.get(t)??[]}async applyManualOverride(t,r,n=null){const a=this.#e.get(t);if(!a)throw new Error(`Product ${t} not found`);const{updateProduct:s}=await Ma(async()=>{const{updateProduct:o}=await Promise.resolve().then(()=>Ra);return{updateProduct:o}},void 0);await s(t,{totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n}),this.#e.set(t,{...a,totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n,totalNeededArray:r,displayTotalNeeded:hn(r)}),this.#w()}async removeManualOverride(t){const r=this.#e.get(t);if(!r)throw new Error(`Product ${t} not found`);const{updateProduct:n}=await Ma(async()=>{const{updateProduct:s}=await Promise.resolve().then(()=>Ra);return{updateProduct:s}},void 0);await n(t,{totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null});const a=r.byDateParsed?so(r.byDateParsed):[];this.#e.set(t,{...r,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,totalNeededArray:a,displayTotalNeeded:hn(a)}),this.#w()}hasManualOverride(t){return this.#e.get(t)?.totalNeededIsManualOverride??!1}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDateParsed?fd(n.byDateParsed,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDateParsed&&n.byDateParsed[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDateParsed?pd(r.byDateParsed):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDateParsed?Object.keys(r.byDateParsed).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDateParsed||!i(this.#a)||!i(this.#s)?0:hd(r.byDateParsed,i(this.#a),i(this.#s))}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDateParsed||!i(this.#a)||!i(this.#s)?[]:Object.keys(r.byDateParsed).filter(a=>{const s=new Date(a),o=i(this.#a)?new Date(i(this.#a)):null,l=i(this.#s)?new Date(i(this.#s)):null;return o&&l&&s>=o&&s<=l}).flatMap(a=>r.byDateParsed[a]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){this.clearCache(),await this.initialize(t)}clearCache(){this.#e.clear(),C(this.#n,[],!0),C(this.#i,null),this.#u&&localStorage.removeItem(this.#u),this.#v&&localStorage.removeItem(this.#v),console.log("[ProductsStore] Cache vidé")}destroy(){this.#h?.(),this.#h=null,this.#p&&(clearTimeout(this.#p),this.#p=null),console.log("[ProductsStore] Ressources nettoyées")}}const M=new Sd;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const xd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ed=eu("<svg><!><!></svg>");function ie(e,t){V(t,!0);const r=jr(t,"color",3,"currentColor"),n=jr(t,"size",3,24),a=jr(t,"strokeWidth",3,2),s=jr(t,"absoluteStrokeWidth",3,!1),o=jr(t,"iconNode",19,()=>[]),l=ae(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=Ed();Xs(c,p=>({...xd,...l,width:n(),height:n(),stroke:r(),"stroke-width":p,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>s()?Number(a())*24/Number(n()):a()]);var d=u(c);ze(d,17,o,Vr,(p,h)=>{var m=B(()=>Ro(i(h),2));let _=()=>i(m)[0],x=()=>i(m)[1];var y=U(),b=j(y);ou(b,_,!0,(D,A)=>{Xs(D,()=>({...x()}))}),g(p,y)});var f=v(d);ne(f,()=>t.children??F),g(e,c),W()}function es(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ie(e,oe({name:"archive"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Pd(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ie(e,oe({name:"bean"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function $d(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ie(e,oe({name:"beef"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function _o(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];ie(e,oe({name:"calendar"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function kd(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ie(e,oe({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Nd(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ie(e,oe({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Td(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ie(e,oe({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Ad(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ie(e,oe({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Dd(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ie(e,oe({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Cd(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];ie(e,oe({name:"combine"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function ws(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ie(e,oe({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Md(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ie(e,oe({name:"egg"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function ts(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ie(e,oe({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function go(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ie(e,oe({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Id(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ie(e,oe({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Rd(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ie(e,oe({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Od(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ie(e,oe({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function qd(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ie(e,oe({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Bd(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];ie(e,oe({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function _a(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ie(e,oe({name:"package"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Ld(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ie(e,oe({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function jd(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ie(e,oe({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function zd(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ie(e,oe({name:"save"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Ud(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ie(e,oe({name:"search"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Qn(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ie(e,oe({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function ra(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ie(e,oe({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Yn(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ie(e,oe({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function el(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ie(e,oe({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Mn(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ie(e,oe({name:"store"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function tl(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ie(e,oe({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Ss(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ie(e,oe({name:"user"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function rl(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ie(e,oe({name:"users"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function Vd(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ie(e,oe({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function nl(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]];ie(e,oe({name:"weight"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}function wt(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ie(e,oe({name:"x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=U(),l=j(o);ne(l,()=>t.children??F),g(a,o)},$$slots:{default:!0}})),W()}const It=bt({product:{id:"",isOpen:!1,tab:"recettes"}});function Wd(e,t){It.product.tab=e,It.product.isOpen=!0,It.product.id=t}function yo(){It.product.isOpen=!1,It.product.tab="",It.product.id=""}let bo=()=>localStorage.getItem("appwrite-user-name")||"";function Jn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Pd};case"animaux":return{displayName:"Viandes et Poissons",icon:$d};case"legumes":return{displayName:"Fruits et Légumes",icon:Nd};case"sucres":return{displayName:"Sucrées",icon:kd};case"lof":return{displayName:"L.O.F",icon:Md};case"autres":return{displayName:"Autres",icon:Td};case"epices":return{displayName:"Assaisonnements",icon:Id};case"frais":return{displayName:"Produits Frais",icon:jd};default:return{displayName:e,icon:_a}}}function wo(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function xs(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Es(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Gd(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Hd(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],s=n[t.sortColumn];return a<s?t.sortDirection==="asc"?-1:1:a>s?t.sortDirection==="asc"?1:-1:0}):e}function rs(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function So(e){return e?Es(e):"-"}function Kd(e){if(!e?.length)return"-";const t=e.reduce((r,n)=>{const a=n.status||"direct",s=`${a}_${n.unit||"unit"}`;if(!r[s]){const o=rs(a);r[s]={status:a,unit:n.unit||"unit",quantity:0,badge:o}}return r[s].quantity+=n.quantity||0,r},{});return Object.values(t).map(r=>{const{quantity:n,unit:a,badge:s}=r;return`${xs(n,a)} (${s.text})`}).join(" + ")}function Qd(e){let t=se(!1),r=se(null),n=se("recettes");const a=B(()=>M.getEnrichedProductById(e)),s=B(()=>i(a)?.recipesArray??[]),o=B(()=>i(a)?.who??[]),l=B(()=>i(a)?.stockArray??[]),c=B(()=>i(a)?.purchases??[]),d=bt({purchase:{quantity:null,unit:"",store:"",who:bo()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});ri(()=>{i(a)&&(d.purchase.quantity=i(a).missingQuantityArray[0]?.q??null,d.purchase.unit=i(a).totalNeededArray[0]?.u??"",d.purchase.store=i(a).storeInfo?.storeName??"",d.purchase.who=bo()??"",d.stock.unit=i(a).totalNeededArray[0]?.u??"",d.store.name=i(a).storeInfo?.storeName??null,d.store.comment=i(a).storeInfo?.storeComment??null)});let f=se(null);const p=B(()=>i(f)?i(c).find(w=>w.$id===i(f))??null:null);async function h(w,O){C(t,!0),C(r,null);try{const k=await w();return O&&m("success",O),k}catch(k){const J=k instanceof Error?k.message:"Une erreur est survenue";return C(r,J,!0),m("error",J),console.error("[ProductModalState]",k),null}finally{C(t,!1)}}function m(w,O){const k=new CustomEvent("toast",{detail:{type:w,message:O}});window.dispatchEvent(k)}async function _(){i(a)&&await h(async()=>{if(!d.purchase.quantity||!d.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!M.currentMainId)throw new Error("mainId non disponible");const{quantity:w,unit:O}=wo(d.purchase.quantity,d.purchase.unit);i(a).isSynced||(console.log(`[ProductModalState] Produit ${i(a).$id} local, création pour purchase...`),await yn(i(a).$id,{},k=>M.getEnrichedProductById(k))),await Ki({products:[i(a).$id],mainId:M.currentMainId,unit:O,quantity:w,store:d.purchase.store||null,who:d.purchase.who||null,notes:d.purchase.notes||"",price:d.purchase.price||null,status:d.purchase.status||null,orderDate:d.purchase.orderDate||null,deliveryDate:d.purchase.deliveryDate||null}),d.purchase={quantity:i(a).missingQuantityArray[0]?.q??null,unit:i(a).totalNeededArray[0]?.u??"",store:d.purchase.store,who:d.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function x(w){C(f,w.$id,!0)}function y(){C(f,null)}async function b(w){w.$id&&await h(async()=>{const{quantity:O,unit:k}=wo(w.quantity,w.unit);await Qi(w.$id,{unit:k,quantity:O,store:w.store||null,who:w.who||null,notes:w.notes||"",price:w.price||null,status:w.status||null,orderDate:w.orderDate||null,deliveryDate:w.deliveryDate||null}),C(f,null)},"Achat modifié avec succès")}async function D(w){const O=i(c).find(k=>k.$id===w);O&&confirm(`Supprimer cet achat (${O.quantity} ${O.unit}) ?`)&&await h(async()=>{await Yi(w)},"Achat supprimé avec succès")}async function A(){i(a)&&await h(async()=>{if(!d.stock.quantity||!d.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const w={quantity:d.stock.quantity.toString(),unit:d.stock.unit,notes:d.stock.notes,dateTime:d.stock.dateTime},O=[...i(l),w];i(a).isSynced?(console.log(`[ProductModalState] Produit ${i(a).$id} déjà sync, update stock normal...`),await Fa(i(a).$id,JSON.stringify(O))):(console.log(`[ProductModalState] Produit ${i(a).$id} local, création stock avec upsert...`),await yn(i(a).$id,{stockReel:JSON.stringify(O)},k=>M.getEnrichedProductById(k))),d.stock.quantity=null,d.stock.notes="",d.stock.dateTime=new Date().toISOString()},"Relevé de stock ajouté")}async function E(w){i(a)&&confirm("Supprimer ce relevé de stock ?")&&await h(async()=>{const O=i(l).filter((k,J)=>J!==w);await Fa(i(a).$id,JSON.stringify(O))},"Relevé de stock supprimé")}async function P(w){!i(a)||!w.trim()||await h(async()=>{if(i(o).includes(w))throw new Error("Ce volontaire est déjà ajouté");const O=[...i(o),w.trim()];i(a).isSynced?(console.log(`[ProductModalState] Produit ${i(a).$id} déjà sync, update normal...`),await Xa(i(a).$id,O)):(console.log(`[ProductModalState] Produit ${i(a).$id} local, création avec upsert...`),await yn(i(a).$id,{who:O},k=>M.getEnrichedProductById(k)))},"Volontaire ajouté")}async function T(w){i(a)&&confirm(`Retirer ${w} ?`)&&await h(async()=>{await Xa(i(a).$id,i(o).filter(O=>O!==w))},"Volontaire retiré")}async function R(w){i(a)&&await h(async()=>{i(a).isSynced?(console.log(`[ProductModalState] Produit ${i(a).$id} déjà sync, update store normal...`),await Hi(i(a).$id,w)):(console.log(`[ProductModalState] Produit ${i(a).$id} local, création store avec upsert...`),await yn(i(a).$id,{store:JSON.stringify(w)},O=>M.getEnrichedProductById(O)))},"Magasin mis à jour")}return{get loading(){return i(t)},get error(){return i(r)},get currentTab(){return i(n)},set currentTab(w){C(n,w,!0)},get product(){return i(a)},get recipes(){return i(s)},get whoList(){return i(o)},get stockEntries(){return i(l)},get purchasesList(){return i(c)},get editingPurchaseId(){return i(f)},get editingPurchaseData(){return i(p)},forms:d,addPurchase:_,startEditPurchase:x,cancelEditPurchase:y,updateEditedPurchase:b,removePurchase:D,addStock:A,removeStock:E,addVolunteer:P,removeVolunteer:T,updateStore:R,formatQuantity:xs,formatDate:Es,formatDisplayQuantity:Gd}}function Yd(e,t,r){t()&&r().addPurchase()}function Jd(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Zd(e,t){t().cancelEditPurchase()}var Xd=$("<option> </option>"),Fd=$("<option> </option>"),ef=$('<span class="loading loading-spinner loading-sm"></span>'),tf=$('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),rf=$("<option> </option>"),nf=$('<span class="loading loading-spinner loading-sm"></span>'),af=$('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/> <datalist id="browsers"></datalist></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="select select-bordered w-24"><option>Achat direct</option><option>Demandé</option><option>Commandé</option><option>En attente</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),sf=(e,t,r)=>t(i(r)),of=(e,t,r)=>t(i(r).$id),lf=$('<span class="loading loading-spinner loading-sm"></span>'),cf=$('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),uf=$('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),df=$(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <label class="select w-28"><!> <select required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></label> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/> <datalist id="stores"></datalist></label> <label class="input w-48"><!> <input type="text" placeholder="Qui" maxlength="25" list="users"/> <datalist id="users"></datalist></label> <label class="input validator w-28"><input type="number" step="1" placeholder="Prix" min="0"/> <span class="label">€</span></label> <label class="input validator"><!> <input type="text" placeholder="Notes" maxlength="250"/></label> <label class="select w-36"><!> <select><option>Type d'achat</option><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></label> <label class="input w-40"><!> <input type="date" placeholder="Date commande"/></label> <label class="input w-40"><!> <input type="date" placeholder="Date livraison"/></label></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function ff(e,t){V(t,!0);let r=jr(t,"modalState",7);function n(){return r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(f){return f.quantity!==null&&f.quantity!==0&&f.unit?.trim()!==""}function s(f){r().removePurchase(f)}function o(f){r().startEditPurchase(f)}var l=U(),c=j(l);{var d=f=>{var p=df(),h=u(p),m=u(h);ra(m,{class:"h-5 w-5"});var _=v(h,2),x=u(_),y=v(u(x),2),b=u(y),D=u(b);_a(D,{class:"h-4 w-4 opacity-50"});var A=v(D,2),E=v(b,2),P=u(E);nl(P,{class:"h-4 w-4 opacity-50"});var T=v(P,2),R=u(T);R.value=R.__value="";var w=v(R);w.value=w.__value="kg";var O=v(w);O.value=O.__value="gr.";var k=v(O);k.value=k.__value="l.";var J=v(k);J.value=J.__value="ml";var le=v(J);le.value=le.__value="unité";var Ie=v(le);Ie.value=Ie.__value="bottes";var Ne=v(E,2),$e=u(Ne);Mn($e,{class:"h-4 w-4 opacity-50"});var Pe=v($e,2),Z=v(Pe,2);ze(Z,21,()=>M.uniqueStores,Vr,(z,Ae)=>{var Ve=Xd(),Bt=u(Ve),vt={};L(()=>{I(Bt,i(Ae)),vt!==(vt=i(Ae))&&(Ve.value=(Ve.__value=i(Ae))??"")}),g(z,Ve)});var N=v(Ne,2),Y=u(N);Ss(Y,{class:"h-4 w-4 opacity-50"});var de=v(Y,2),ye=v(de,2);ze(ye,21,()=>M.uniqueWho,Vr,(z,Ae)=>{var Ve=Fd(),Bt=u(Ve),vt={};L(()=>{I(Bt,i(Ae)),vt!==(vt=i(Ae))&&(Ve.value=(Ve.__value=i(Ae))??"")}),g(z,Ve)});var me=v(N,2),ut=u(me),Ye=v(me,2),fe=u(Ye);qd(fe,{class:"h-4 w-4 opacity-50"});var ke=v(fe,2),qe=v(Ye,2),Be=u(qe);Bd(Be,{class:"h-4 w-4 opacity-50"});var Re=v(Be,2),Oe=u(Re);Oe.value=Oe.__value="";var be=v(Oe);be.value=be.__value="requested";var He=v(be);He.value=He.__value="ordered";var dt=v(He);dt.value=dt.__value="delivered";var Ht=v(dt);Ht.value=Ht.__value="cancelled";var Kt=v(qe,2),Je=u(Kt);_o(Je,{class:"h-4 w-4 opacity-50"});var Nt=v(Je,2),nn=v(Kt,2),H=u(nn);_o(H,{class:"h-4 w-4 opacity-50"});var pe=v(H,2),Te=v(y,2),xt=u(Te);xt.__click=[Yd,n,r];var hr=u(xt);{var ft=z=>{var Ae=ef();g(z,Ae)},Ar=z=>{var Ae=pt("Ajouter l'achat");g(z,Ae)};q(hr,z=>{r().loading?z(ft):z(Ar,!1)})}var Dr=v(_,2);{var an=z=>{var Ae=tf(),Ve=u(Ae);ra(Ve,{class:"mx-auto mb-2 h-12 w-12"}),g(z,Ae)},sn=z=>{var Ae=uf(),Ve=u(Ae),Bt=v(u(Ve));ze(Bt,21,()=>r().purchasesList,vt=>vt.$id,(vt,G,on)=>{var Cr=U(),ln=j(Cr);{var Qt=Yt=>{var pr=af(),mr=u(pr),cn=u(mr),_r=u(cn),Mr=v(_r,2),Jt=u(Mr);Jt.value=Jt.__value="kg";var Zt=v(Jt);Zt.value=Zt.__value="gr.";var Xt=v(Zt);Xt.value=Xt.__value="l.";var K=v(Xt);K.value=K.__value="ml";var ce=v(K);ce.value=ce.__value="unité";var st=v(ce);st.value=st.__value="bottes";var et=v(mr),Le=u(et),tt=v(Le,2);ze(tt,21,()=>M.uniqueStores,Vr,(ue,rr)=>{var Br=rf(),xa=u(Br),jn={};L(()=>{I(xa,i(rr)),jn!==(jn=i(rr))&&(Br.value=(Br.__value=i(rr))??"")}),g(ue,Br)});var ot=v(et),_e=u(ot),we=v(ot),ve=u(we),Q=u(ve);Q.value=Q.__value="";var Se=v(Q);Se.value=Se.__value="requested";var xe=v(Se);xe.value=xe.__value="ordered";var rt=v(xe);rt.value=rt.__value="pending";var We=v(rt);We.value=We.__value="delivered";var _t=v(We);_t.value=_t.__value="cancelled";var Et=v(we),Ke=u(Et),Ce=v(Et),Lt=u(Ce),Ft=v(Ce),gr=u(Ft),it=v(Ft),jt=u(it),Ir=v(it),Rr=u(Ir),er=u(Rr);er.__click=[Jd,r,a];var tr=u(er);{var Or=ue=>{var rr=nf();g(ue,rr)},un=ue=>{zd(ue,{class:"h-3 w-3"})};q(tr,ue=>{r().loading?ue(Or):ue(un,!1)})}var qr=v(er,2);qr.__click=[Zd,r];var Sa=u(qr);wt(Sa,{class:"h-3 w-3"}),L(ue=>er.disabled=ue,[()=>r().loading||!a(i(G))]),je(_r,()=>i(G).quantity,ue=>i(G).quantity=ue),_n(Mr,()=>i(G).unit,ue=>i(G).unit=ue),je(Le,()=>i(G).store,ue=>i(G).store=ue),je(_e,()=>i(G).who,ue=>i(G).who=ue),_n(ve,()=>i(G).status,ue=>i(G).status=ue),je(Ke,()=>i(G).orderDate,ue=>i(G).orderDate=ue),je(Lt,()=>i(G).deliveryDate,ue=>i(G).deliveryDate=ue),je(gr,()=>i(G).price,ue=>i(G).price=ue),je(jt,()=>i(G).notes,ue=>i(G).notes=ue),g(Yt,pr)},wa=Yt=>{var pr=cf(),mr=u(pr),cn=u(mr),_r=v(mr),Mr=u(_r),Jt=v(_r),Zt=u(Jt),Xt=v(Jt),K=u(Xt),ce=u(K),st=v(Xt),et=u(st),Le=v(st),tt=u(Le),ot=v(Le),_e=u(ot),we=v(ot),ve=u(we),Q=v(we),Se=u(Q),xe=u(Se);xe.__click=[sf,o,G];var rt=u(xe);el(rt,{class:"h-4 w-4"});var We=v(xe,2);We.__click=[of,s,G];var _t=u(We);{var Et=Ce=>{var Lt=lf();g(Ce,Lt)},Ke=Ce=>{wt(Ce,{class:"h-4 w-4"})};q(_t,Ce=>{r().loading?Ce(Et):Ce(Ke,!1)})}L((Ce,Lt,Ft,gr,it)=>{I(cn,Ce),I(Mr,i(G).store||"-"),I(Zt,i(G).who||"-"),De(K,1,`badge badge-sm ${Lt??""}`),I(ce,Ft),I(et,gr),I(tt,it),I(_e,i(G).price?`${i(G).price}€`:"-"),I(ve,i(G).notes||"-"),We.disabled=r().loading},[()=>xs(i(G).quantity,i(G).unit),()=>rs(i(G).status).class,()=>rs(i(G).status).text,()=>So(i(G).orderDate),()=>So(i(G).deliveryDate)]),g(Yt,pr)};q(ln,Yt=>{r().editingPurchaseId===i(G).$id?Yt(Qt):Yt(wa,!1)})}g(vt,Cr)}),g(z,Ae)};q(Dr,z=>{r().purchasesList.length===0?z(an):z(sn,!1)})}L(z=>xt.disabled=z,[()=>r().loading||!n()]),je(A,()=>r().forms.purchase.quantity,z=>r().forms.purchase.quantity=z),_n(T,()=>r().forms.purchase.unit,z=>r().forms.purchase.unit=z),je(Pe,()=>r().forms.purchase.store,z=>r().forms.purchase.store=z),je(de,()=>r().forms.purchase.who,z=>r().forms.purchase.who=z),je(ut,()=>r().forms.purchase.price,z=>r().forms.purchase.price=z),je(ke,()=>r().forms.purchase.notes,z=>r().forms.purchase.notes=z),_n(Re,()=>r().forms.purchase.status,z=>r().forms.purchase.status=z),je(Nt,()=>r().forms.purchase.orderDate,z=>r().forms.purchase.orderDate=z),je(pe,()=>r().forms.purchase.deliveryDate,z=>r().forms.purchase.deliveryDate=z),g(f,p)};q(c,f=>{r()&&r().product&&f(d)})}g(e,l),W()}Ot(["click"]);class vf{#e;#r=new Set;constructor(t){this.#e=t}get current(){return this.#e}set current(t){this.#e!=t&&(this.#e=t,this.#r.forEach(r=>r(t)))}on(t){return this.#r.add(t),()=>this.#r.delete(t)}}const al=e=>new vf(e),ns=Symbol.for("atomico.hooks");globalThis[ns]=globalThis[ns]||{};let Zr=globalThis[ns];const hf=Symbol.for("Atomico.suspense"),sl=Symbol.for("Atomico.effect"),pf=Symbol.for("Atomico.layoutEffect"),ol=Symbol.for("Atomico.insertionEffect"),tn=(e,t,r)=>{const{i:n,hooks:a}=Zr.c,s=a[n]=a[n]||{};return s.value=e(s.value),s.effect=t,s.tag=r,Zr.c.i++,a[n].value},mf=e=>tn((t=al(e))=>t),Bn=()=>tn((e=al(Zr.c.host))=>e),il=()=>Zr.c.update,_f=(e,t,r=0)=>{let n={},a=!1;const s=()=>a,o=(l,c)=>{for(const d in n){const f=n[d];f.effect&&f.tag===l&&(f.value=f.effect(f.value,c))}};return{load:l=>{Zr.c={host:t,hooks:n,update:e,i:0,id:r};let c;try{a=!1,c=l()}catch(d){if(d!==hf)throw d;a=!0}finally{Zr.c=null}return c},cleanEffects:l=>(o(ol,l),()=>(o(pf,l),()=>{o(sl,l)})),isSuspense:s}},rn=Symbol.for;function ll(e,t){const r=e.length;if(r!==t.length)return!1;for(let n=0;n<r;n++){let a=e[n],s=t[n];if(a!==s)return!1}return!0}const Mt=e=>typeof e=="function",En=e=>typeof e=="object",{isArray:gf}=Array,as=(e,t)=>(t?e instanceof HTMLStyleElement:!0)&&"hydrate"in(e?.dataset||{});function cl(e,t){let r;const n=a=>{let{length:s}=a;for(let o=0;o<s;o++){const l=a[o];if(l&&Array.isArray(l))n(l);else{const c=typeof l;if(l==null||c==="function"||c==="boolean")continue;c==="string"||c==="number"?(r==null&&(r=""),r+=l):(r!=null&&(t(r),r=null),t(l))}}};n(e),r!=null&&t(r)}const ul=(e,t,r)=>(e.addEventListener(t,r),()=>e.removeEventListener(t,r));class dl{constructor(t,r,n){this.message=r,this.target=t,this.value=n}}class fl extends dl{}class yf extends dl{}const na="Custom",bf=null,wf={true:1,"":1,1:1};function Sf(e,t,r,n,a){const{type:s,reflect:o,event:l,value:c,attr:d=xf(t)}=r?.name!=na&&En(r)&&r!=bf?r:{type:r},f=s?.name===na&&s.map,p=c!=null?s==Function||!Mt(c)?()=>c:c:null;Object.defineProperty(e,t,{configurable:!0,set(h){const m=this[t];p&&s!=Boolean&&h==null&&(h=p());const{error:_,value:x}=(f?$f:kf)(s,h);if(_&&x!=null)throw new fl(this,`The value defined for prop '${t}' must be of type '${s.name}'`,x);m!=x&&(this._props[t]=x??void 0,this.update(),l&&vl(this,l),this.updated.then(()=>{o&&(this._ignoreAttr=d,Ef(this,s,d,this[t]),this._ignoreAttr=null)}))},get(){return this._props[t]}}),p&&(a[t]=p()),n[d]={prop:t,type:s}}const vl=(e,{type:t,base:r=CustomEvent,...n})=>e.dispatchEvent(new r(t,n)),xf=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),Ef=(e,t,r,n)=>n==null||t==Boolean&&!n?e.removeAttribute(r):e.setAttribute(r,t?.name===na&&t?.serialize?t?.serialize(n):En(n)?JSON.stringify(n):t==Boolean?"":n),Pf=(e,t)=>e==Boolean?!!wf[t]:e==Number?Number(t):e==String?t:e==Array||e==Object?JSON.parse(t):e.name==na?t:new e(t),$f=({map:e},t)=>{try{return{value:e(t),error:!1}}catch{return{value:t,error:!0}}},kf=(e,t)=>e==null||t==null?{value:t,error:!1}:e!=String&&t===""?{value:void 0,error:!1}:e==Object||e==Array||e==Symbol?{value:t,error:{}.toString.call(t)!==`[object ${e.name}]`}:t instanceof e?{value:t,error:e==Number&&Number.isNaN(t.valueOf())}:e==String||e==Number||e==Boolean?{value:t,error:e==Number?typeof t!="number"?!0:Number.isNaN(t):e==String?typeof t!="string":typeof t!="boolean"}:{value:t,error:!0};let Nf=0;const Tf=e=>(e?.dataset||{})?.hydrate||""||"c"+Nf++,Ln=(e,t=HTMLElement)=>{const r={},n={},a="prototype"in t&&t.prototype instanceof Element,s=a?t:"base"in t?t.base:HTMLElement,{props:o,styles:l}=a?e:t;class c extends s{constructor(){super(),this._setup(),this._render=()=>e({...this._props});for(const f in n)this[f]=n[f]}static get styles(){return[super.styles,l]}async _setup(){if(this._props)return;this._props={};let f,p;this.mounted=new Promise(y=>this.mount=()=>{y(),f!=this.parentNode&&(p!=f?this.unmounted.then(this.update):this.update()),f=this.parentNode}),this.unmounted=new Promise(y=>this.unmount=()=>{y(),(f!=this.parentNode||!this.isConnected)&&(h.cleanEffects(!0)()(),p=this.parentNode,f=null)}),this.symbolId=this.symbolId||Symbol(),this.symbolIdParent=Symbol();const h=_f(()=>this.update(),this,Tf(this));let m,_=!0;const x=as(this);this.update=()=>(m||(m=!0,this.updated=(this.updated||this.mounted).then(()=>{try{const y=h.load(this._render),b=h.cleanEffects();return y&&y.render(this,this.symbolId,x),m=!1,_&&!h.isSuspense()&&(_=!1,!x&&Af(this)),b()}finally{m=!1}}).then(y=>{y&&y()})),this.updated),this.update()}connectedCallback(){this.mount(),super.connectedCallback&&super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.unmount()}attributeChangedCallback(f,p,h){if(r[f]){if(f===this._ignoreAttr||p===h)return;const{prop:m,type:_}=r[f];try{this[m]=Pf(_,h)}catch{throw new yf(this,`The value defined as attr '${f}' cannot be parsed by type '${_.name}'`,h)}}else super.attributeChangedCallback(f,p,h)}static get props(){return{...super.props,...o}}static get observedAttributes(){const f=super.observedAttributes||[];for(const p in o)Sf(this.prototype,p,o[p],r,n);return Object.keys(r).concat(f)}}return c};function Af(e){const{styles:t}=e.constructor,{shadowRoot:r}=e;if(r&&t.length){const n=[];cl(t,a=>{a&&(a instanceof Element?r.appendChild(a.cloneNode(!0)):n.push(a))}),n.length&&(r.adoptedStyleSheets=n)}}const hl=e=>(t,r)=>{tn(([n,a]=[])=>((a||!a)&&(a&&ll(a,r)?n=n||!0:(Mt(n)&&n(),n=null)),[n,r]),([n,a],s)=>s?(Mt(n)&&n(),[]):[n||t(),a],e)},In=hl(sl),Df=hl(ol);class pl extends Array{constructor(t,r){let n=!0;const a=s=>{try{r(s,this,n)}finally{n=!1}};super(void 0,a,r),a(t)}}const Ps=e=>{const t=il();return tn((r=new pl(e,(n,a,s)=>{n=Mt(n)?n(a[0]):n,n!==a[0]&&(a[0]=n,s||t())}))=>r)},Vt=(e,t)=>{const[r]=tn(([n,a,s=0]=[])=>((!a||a&&!ll(a,t))&&(n=e()),[n,t,s]));return r},$s=e=>{const{current:t}=Bn();if(!(e in t))throw new fl(t,`For useProp("${e}"), the prop does not exist on the host.`,e);return tn((r=new pl(t[e],(n,a)=>{n=Mt(n)?n(t[e]):n,t[e]=n}))=>(r[0]=t[e],r))},ir=(e,t={})=>{const r=Bn();return r[e]||(r[e]=(n=t.detail)=>vl(r.current,{type:e,...t,detail:n})),r[e]},ss=rn("atomico/options");globalThis[ss]=globalThis[ss]||{sheet:!!document.adoptedStyleSheets};const ml=globalThis[ss],Cf={checked:1,value:1,selected:1},Mf={list:1,type:1,size:1,form:1,width:1,height:1,src:1,href:1,slot:1},If={shadowDom:1,staticNode:1,cloneNode:1,children:1,key:1},Zn={},os=[];class is extends Text{}const Rf=rn("atomico/id"),Pn=rn("atomico/type"),Oa=rn("atomico/ref"),_l=rn("atomico/vnode"),Of=()=>{};function qf(e,t,r){return yl(this,e,t,r)}const gl=(e,t,...r)=>{const n=t||Zn;let{children:a}=n;if(a=a??(r.length?r:os),e===Of)return a;const s=e?e instanceof Node?1:e.prototype instanceof HTMLElement&&2:0;if(s===!1&&e instanceof Function)return e(a!=os?{children:a,...n}:n);const o=ml.render||qf;return{[Pn]:_l,type:e,props:n,children:a,key:n.key,shadow:n.shadowDom,static:n.staticNode,raw:s,is:n.is,clone:n.cloneNode,render:o}};function yl(e,t,r=Rf,n,a){let s;if(t&&t[r]&&t[r].vnode==e||e[Pn]!=_l)return t;(e||!t)&&(a=a||e.type=="svg",s=e.type!="host"&&(e.raw==1?(t&&e.clone?t[Oa]:t)!=e.type:e.raw==2?!(t instanceof e.type):t?t[Oa]||t.localName!=e.type:!t),s&&e.type!=null&&(e.raw==1&&e.clone?(n=!0,t=e.type.cloneNode(!0),t[Oa]=e.type):t=e.raw==1?e.type:e.raw==2?new e.type:a?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,e.is?{is:e.is}:void 0)));const o=t[r]?t[r]:Zn,{vnode:l=Zn,cycle:c=0}=o;let{fragment:d,handlers:f}=o;const{children:p=os,props:h=Zn}=l;if(f=s?{}:f||{},e.static&&!s)return t;if(e.shadow&&!t.shadowRoot&&t.attachShadow({mode:"open",...e.shadow}),e.props!=h&&jf(t,h,e.props,f,a),e.children!==p){const m=e.shadow?t.shadowRoot:t;d=Lf(e.children,d,m,r,!c&&n,a&&e.type=="foreignObject"?!1:a)}return t[r]={vnode:e,handlers:f,fragment:d,cycle:c+1},t}function Bf(e,t){const r=new is(""),n=new is("");let a;if(e[t?"prepend":"append"](r),t){let{lastElementChild:s}=e;for(;s;){const{previousElementSibling:o}=s;if(as(s,!0)&&!as(o,!0)){a=s;break}s=o}}return a?a.before(n):e.append(n),{markStart:r,markEnd:n}}function Lf(e,t,r,n,a,s){e=e==null?null:gf(e)?e:[e];const o=t||Bf(r,a),{markStart:l,markEnd:c,keyes:d}=o;let f;const p=d&&new Set;let h=l;if(e&&cl(e,m=>{if(typeof m=="object"&&!m[Pn])return;const _=m[Pn]&&m.key,x=d&&_!=null&&d.get(_);h!=c&&h===x?p.delete(h):h=h==c?c:h.nextSibling;const y=d?x:h;let b=y;if(m[Pn])b=yl(m,y,n,a,s);else{const D=m+"";!(b instanceof Text)||b instanceof is?b=new Text(D):b.data!=D&&(b.data=D)}b!=h&&(d&&p.delete(b),!y||d?(r.insertBefore(b,h),d&&h!=c&&p.add(h)):y==c?r.insertBefore(b,c):(r.replaceChild(b,y),h=b)),_!=null&&(f=f||new Map,f.set(_,b))}),h=h==c?c:h.nextSibling,t&&h!=c)for(;h!=c;){const m=h;h=h.nextSibling,m.remove()}return p&&p.forEach(m=>m.remove()),o.keyes=f,o}function jf(e,t,r,n,a){for(const s in t)!(s in r)&&xo(e,s,t[s],null,a,n);for(const s in r)xo(e,s,t[s],r[s],a,n)}function xo(e,t,r,n,a,s){if(t=t=="class"&&!a?"className":t,r=r??null,n=n??null,t in e&&Cf[t]&&(r=e[t]),!(n===r||If[t]||t[0]=="_"))if(t[0]=="o"&&t[1]=="n"&&(Mt(n)||Mt(r)))zf(e,t.slice(2),n,s);else if(t=="ref")n&&(Mt(n)?n(e):n.current=e);else if(t=="style"){const{style:o}=e;r=r||"",n=n||"";const l=En(r),c=En(n);if(l)for(const d in r)if(c)!(d in n)&&Eo(o,d,null);else break;if(c)for(const d in n){const f=n[d];l&&r[d]===f||Eo(o,d,f)}else o.cssText=n}else{const o=t[0]=="$"?t.slice(1):t;o===t&&(!a&&!Mf[t]&&t in e||Mt(n)||Mt(r))?e[t]=n??"":n==null?e.removeAttribute(o):e.setAttribute(o,En(n)?JSON.stringify(n):n)}}function zf(e,t,r,n){if(n.handleEvent||(n.handleEvent=a=>n[a.type].call(e,a)),r){if(!n[t]){const a=r.capture||r.once||r.passive?Object.assign({},r):null;e.addEventListener(t,n,a)}n[t]=r}else n[t]&&(e.removeEventListener(t,n),delete n[t])}function Eo(e,t,r){let n="setProperty";r==null&&(n="removeProperty",r=null),~t.indexOf("-")?e[n](t,r):e[t]=r}const Po={};function ga(e,...t){const r=(e.raw||e).reduce((n,a,s)=>n+a+(t[s]||""),"");return Po[r]=Po[r]||Uf(r)}function Uf(e){if(ml.sheet){const t=new CSSStyleSheet;return t.replaceSync(e),t}else{const t=document.createElement("style");return t.textContent=e,t}}const Vf=gl("host",{style:"display: contents"}),qa=rn("atomico/context"),Wf=(e,t)=>{const r=Bn();Df(()=>ul(r.current,"ConnectContext",n=>{e===n.detail.id&&(n.stopPropagation(),n.detail.connect(t))}),[e])},Gf=e=>{const t=ir("ConnectContext",{bubbles:!0,composed:!0}),r=()=>{let s;return t({id:e,connect(o){s=o}}),s},[n,a]=Ps(r);return In(()=>{n||(e[qa]||(e[qa]=customElements.whenDefined(new e().localName)),e[qa].then(()=>a(r)))},[e]),n},Hf=e=>{const t=Gf(e),r=il();return In(()=>{if(t)return ul(t,"UpdatedValue",r)},[t]),(t||e).value},Kf=e=>{const t=Ln(()=>(Wf(t,Bn().current),Vf),{props:{value:{type:Object,event:{type:"UpdatedValue"},value:()=>e}}});return t.value=e,t},Ee=(e,t,r)=>(t==null?t={key:r}:t.key=r,gl(e,t)),$n=Ee,bl=ga`*,*:before,*:after{box-sizing:border-box}button{padding:0;touch-action:manipulation;cursor:pointer;user-select:none}`,wl=ga`.vh{position:absolute;transform:scale(0)}`;function ks(){const e=new Date;return new Ue(e.getFullYear(),e.getMonth()+1,e.getDate())}function Ns(e,t=0){const r=kt(e),n=r.getUTCDay(),a=(n<t?7:0)+n-t;return r.setUTCDate(r.getUTCDate()-a),Ue.from(r)}function Sl(e,t=0){return Ns(e,t).add({days:6})}function xl(e){return Ue.from(new Date(Date.UTC(e.year,e.month,0)))}function ya(e,t,r){return t&&Ue.compare(e,t)<0?t:r&&Ue.compare(e,r)>0?r:e}const Qf={days:1};function Yf(e,t=0){let r=Ns(e.toPlainDate(),t);const n=Sl(xl(e),t),a=[];for(;Ue.compare(r,n)<0;){const s=[];for(let o=0;o<7;o++)s.push(r),r=r.add(Qf);a.push(s)}return a}function kt(e){return new Date(Date.UTC(e.year,e.month-1,e.day??1))}const Jf=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/,Ba=(e,t)=>e.toString().padStart(t,"0");class Ue{constructor(t,r,n){this.year=t,this.month=r,this.day=n}add(t){const r=kt(this);if("days"in t)return r.setUTCDate(this.day+t.days),Ue.from(r);let{year:n,month:a}=this;"months"in t?(a=this.month+t.months,r.setUTCMonth(a-1)):(n=this.year+t.years,r.setUTCFullYear(n));const s=Ue.from(kt({year:n,month:a,day:1}));return ya(Ue.from(r),s,xl(s))}toString(){return`${Ba(this.year,4)}-${Ba(this.month,2)}-${Ba(this.day,2)}`}toPlainYearMonth(){return new ba(this.year,this.month)}equals(t){return Ue.compare(this,t)===0}static compare(t,r){return t.year<r.year?-1:t.year>r.year?1:t.month<r.month?-1:t.month>r.month?1:t.day<r.day?-1:t.day>r.day?1:0}static from(t){if(typeof t=="string"){const r=t.match(Jf);if(!r)throw new TypeError(t);const[,n,a,s]=r;return new Ue(parseInt(n,10),parseInt(a,10),parseInt(s,10))}return new Ue(t.getUTCFullYear(),t.getUTCMonth()+1,t.getUTCDate())}}class ba{constructor(t,r){this.year=t,this.month=r}add(t){const r=kt(this),n=(t.months??0)+(t.years??0)*12;return r.setUTCMonth(r.getUTCMonth()+n),new ba(r.getUTCFullYear(),r.getUTCMonth()+1)}equals(t){return this.year===t.year&&this.month===t.month}toPlainDate(){return new Ue(this.year,this.month,1)}}function aa(e,t){if(t)try{return e.from(t)}catch{}}function lr(e){const[t,r]=$s(e);return[Vt(()=>aa(Ue,t),[t]),n=>r(n?.toString())]}function Zf(e){const[t="",r]=$s(e);return[Vt(()=>{const[n,a]=t.split("/"),s=aa(Ue,n),o=aa(Ue,a);return s&&o?[s,o]:[]},[t]),n=>r(`${n[0]}/${n[1]}`)]}function Xf(e){const[t="",r]=$s(e);return[Vt(()=>{const n=[];for(const a of t.trim().split(/\s+/)){const s=aa(Ue,a);s&&n.push(s)}return n},[t]),n=>r(n.join(" "))]}function Rn(e,t){return Vt(()=>new Intl.DateTimeFormat(t,{timeZone:"UTC",...e}),[t,e])}function $o(e,t,r){const n=Rn(e,r);return Vt(()=>{const a=[],s=new Date;for(var o=0;o<7;o++){const l=(s.getUTCDay()-t+7)%7;a[l]=n.format(s),s.setUTCDate(s.getUTCDate()+1)}return a},[t,n])}const ko=(e,t,r)=>ya(e,t,r)===e,No=e=>e.target.matches(":dir(ltr)"),Ff={month:"long",day:"numeric"},ev={month:"long"},tv={weekday:"long"},La={bubbles:!0};function rv({props:e,context:t}){const{offset:r}=e,{firstDayOfWeek:n,isDateDisallowed:a,min:s,max:o,today:l,page:c,locale:d,focusedDate:f,formatWeekday:p}=t,h=l??ks(),m=$o(tv,n,d),_=Vt(()=>({weekday:p}),[p]),x=$o(_,n,d),y=Rn(Ff,d),b=Rn(ev,d),D=Vt(()=>c.start.add({months:r}),[c,r]),A=Vt(()=>Yf(D,n),[D,n]),E=ir("focusday",La),P=ir("selectday",La),T=ir("hoverday",La);function R(k){E(ya(k,s,o))}function w(k){let J;switch(k.key){case"ArrowRight":J=f.add({days:No(k)?1:-1});break;case"ArrowLeft":J=f.add({days:No(k)?-1:1});break;case"ArrowDown":J=f.add({days:7});break;case"ArrowUp":J=f.add({days:-7});break;case"PageUp":J=f.add(k.shiftKey?{years:-1}:{months:-1});break;case"PageDown":J=f.add(k.shiftKey?{years:1}:{months:1});break;case"Home":J=Ns(f,n);break;case"End":J=Sl(f,n);break;default:return}R(J),k.preventDefault()}function O(k){const J=D.equals(k);if(!t.showOutsideDays&&!J)return;const le=k.equals(f),Ie=k.equals(h),Ne=kt(k),$e=a?.(Ne),Pe=!ko(k,s,o);let Z="",N;if(t.type==="range"){const[Y,de]=t.value,ye=Y?.equals(k),me=de?.equals(k);N=Y&&de&&ko(k,Y,de),Z=`${ye?"range-start":""} ${me?"range-end":""} ${N&&!ye&&!me?"range-inner":""}`}else t.type==="multi"?N=t.value.some(Y=>Y.equals(k)):N=t.value?.equals(k);return{part:`${`button day day-${Ne.getDay()} ${J?N?"selected":"":"outside"} ${$e?"disallowed":""} ${Ie?"today":""} ${t.getDayParts?.(Ne)??""}`} ${Z}`,tabindex:J&&le?0:-1,disabled:Pe,"aria-disabled":$e?"true":void 0,"aria-pressed":J&&N,"aria-current":Ie?"date":void 0,"aria-label":y.format(Ne),onkeydown:w,onclick(){$e||P(k),R(k)},onmouseover(){!$e&&!Pe&&T(k)}}}return{weeks:A,yearMonth:D,daysLong:m,daysVisible:x,formatter:b,getDayProps:O}}const ja=ks(),Ts=Kf({type:"date",firstDayOfWeek:1,focusedDate:ja,page:{start:ja.toPlainYearMonth(),end:ja.toPlainYearMonth()}});customElements.define("calendar-ctx",Ts);const nv=(e,t)=>(t+e)%7,av=Ln(e=>{const t=Hf(Ts),r=mf(),n=rv({props:e,context:t});function a(){r.current.querySelector("button[tabindex='0']")?.focus()}return $n("host",{shadowDom:!0,focus:a,children:[Ee("div",{id:"h",part:"heading",children:n.formatter.format(kt(n.yearMonth))}),$n("table",{ref:r,"aria-labelledby":"h",part:"table",children:[Ee("thead",{children:Ee("tr",{part:"tr head",children:n.daysLong.map((s,o)=>$n("th",{part:`th day day-${nv(t.firstDayOfWeek,o)}`,scope:"col",children:[Ee("span",{class:"vh",children:s}),Ee("span",{"aria-hidden":"true",children:n.daysVisible[o]})]}))})}),Ee("tbody",{children:n.weeks.map((s,o)=>Ee("tr",{part:"tr week",children:s.map((l,c)=>{const d=n.getDayProps(l);return Ee("td",{part:"td",children:d&&Ee("button",{...d,children:l.day})},c)})},o))})]})]})},{props:{offset:{type:Number,value:0}},styles:[bl,wl,ga`:host{--color-accent: black;--color-text-on-accent: white;display:flex;flex-direction:column;gap:.25rem;text-align:center;inline-size:fit-content}table{border-collapse:collapse;font-size:.875rem}th{font-weight:700;block-size:2.25rem}td{padding-inline:0}button{color:inherit;font-size:inherit;background:transparent;border:0;font-variant-numeric:tabular-nums;block-size:2.25rem;inline-size:2.25rem}button:hover:where(:not(:disabled,[aria-disabled])){background:#0000000d}button:is([aria-pressed=true],:focus-visible){background:var(--color-accent);color:var(--color-text-on-accent)}button:focus-visible{outline:1px solid var(--color-text-on-accent);outline-offset:-2px}button:disabled,:host::part(outside),:host::part(disallowed){cursor:default;opacity:.5}`]});customElements.define("calendar-month",av);function To(e){return Ee("button",{part:`button ${e.name} ${e.onclick?"":"disabled"}`,onclick:e.onclick,"aria-disabled":e.onclick?null:"true",children:Ee("slot",{name:e.name,children:e.children})})}function As(e){const t=kt(e.page.start),r=kt(e.page.end);return $n("div",{role:"group","aria-labelledby":"h",part:"container",children:[Ee("div",{id:"h",class:"vh","aria-live":"polite","aria-atomic":"true",children:e.formatVerbose.formatRange(t,r)}),$n("div",{part:"header",children:[Ee(To,{name:"previous",onclick:e.previous,children:"Previous"}),Ee("slot",{part:"heading",name:"heading",children:Ee("div",{"aria-hidden":"true",children:e.format.formatRange(t,r)})}),Ee(To,{name:"next",onclick:e.next,children:"Next"})]}),Ee(Ts,{value:e,onselectday:e.onSelect,onfocusday:e.onFocus,onhoverday:e.onHover,children:Ee("slot",{})})]})}const Ds={value:{type:String,value:""},min:{type:String,value:""},max:{type:String,value:""},today:{type:String,value:""},isDateDisallowed:{type:Function,value:e=>!1},formatWeekday:{type:String,value:()=>"narrow"},getDayParts:{type:Function,value:e=>""},firstDayOfWeek:{type:Number,value:()=>1},showOutsideDays:{type:Boolean,value:!1},locale:{type:String,value:()=>{}},months:{type:Number,value:1},focusedDate:{type:String,value:()=>{}},pageBy:{type:String,value:()=>"months"}},Cs=[bl,wl,ga`:host{display:block;inline-size:fit-content}[role=group]{display:flex;flex-direction:column;gap:1em}:host::part(header){display:flex;align-items:center;justify-content:space-between}:host::part(heading){font-weight:700;font-size:1.25em}button{display:flex;align-items:center;justify-content:center}button[aria-disabled]{cursor:default;opacity:.5}`],sv={year:"numeric"},ov={year:"numeric",month:"long"};function za(e,t){return(t.year-e.year)*12+t.month-e.month}const Ao=(e,t)=>(e=t===12?new ba(e.year,1):e,{start:e,end:e.add({months:t-1})});function iv({pageBy:e,focusedDate:t,months:r,max:n,min:a,goto:s}){const o=e==="single"?1:r,[l,c]=Ps(()=>Ao(t.toPlainYearMonth(),r)),d=p=>c(Ao(l.start.add({months:p}),r)),f=p=>{const h=za(l.start,p.toPlainYearMonth());return h>=0&&h<r};return In(()=>{if(f(t))return;const p=za(t.toPlainYearMonth(),l.start);s(t.add({months:p}))},[l.start]),In(()=>{if(f(t))return;const p=za(l.start,t.toPlainYearMonth());d(p===-1?-o:p===r?o:Math.floor(p/r)*r)},[t,o,r]),{page:l,previous:!a||!f(a)?()=>d(-o):void 0,next:!n||!f(n)?()=>d(o):void 0}}function Ms({months:e,pageBy:t,locale:r,focusedDate:n,setFocusedDate:a}){const[s]=lr("min"),[o]=lr("max"),[l]=lr("today"),c=ir("focusday"),d=ir("change"),f=Vt(()=>ya(n??l??ks(),s,o),[n,l,s,o]);function p(b){a(b),c(kt(b))}const{next:h,previous:m,page:_}=iv({pageBy:t,focusedDate:f,months:e,min:s,max:o,goto:p}),x=Bn();function y(b){const D=b?.target??"day";D==="day"?x.current.querySelectorAll("calendar-month").forEach(A=>A.focus(b)):x.current.shadowRoot.querySelector(`[part~='${D}']`).focus(b)}return{format:Rn(sv,r),formatVerbose:Rn(ov,r),page:_,focusedDate:f,dispatch:d,onFocus(b){b.stopPropagation(),p(b.detail),setTimeout(y)},min:s,max:o,today:l,next:h,previous:m,focus:y}}const lv=Ln(e=>{const[t,r]=lr("value"),[n=t,a]=lr("focusedDate"),s=Ms({...e,focusedDate:n,setFocusedDate:a});function o(l){r(l.detail),s.dispatch()}return Ee("host",{shadowDom:!0,focus:s.focus,children:Ee(As,{...e,...s,type:"date",value:t,onSelect:o})})},{props:Ds,styles:Cs});customElements.define("calendar-date",lv);const Do=(e,t)=>Ue.compare(e,t)<0?[e,t]:[t,e],cv=Ln(e=>{const[t,r]=Zf("value"),[n=t[0],a]=lr("focusedDate"),s=Ms({...e,focusedDate:n,setFocusedDate:a}),o=ir("rangestart"),l=ir("rangeend"),[c,d]=lr("tentative"),[f,p]=Ps();In(()=>p(void 0),[c]);function h(y){s.onFocus(y),m(y)}function m(y){y.stopPropagation(),c&&p(y.detail)}function _(y){const b=y.detail;y.stopPropagation(),c?(r(Do(c,b)),d(void 0),l(kt(b)),s.dispatch()):(d(b),o(kt(b)))}const x=c?Do(c,f??c):t;return Ee("host",{shadowDom:!0,focus:s.focus,children:Ee(As,{...e,...s,type:"range",value:x,onFocus:h,onHover:m,onSelect:_})})},{props:{...Ds,tentative:{type:String,value:""}},styles:Cs});customElements.define("calendar-range",cv);const uv=Ln(e=>{const[t,r]=Xf("value"),[n=t[0],a]=lr("focusedDate"),s=Ms({...e,focusedDate:n,setFocusedDate:a});function o(l){const c=[...t],d=t.findIndex(f=>f.equals(l.detail));d<0?c.push(l.detail):c.splice(d,1),r(c),s.dispatch()}return Ee("host",{shadowDom:!0,focus:s.focus,children:Ee(As,{...e,...s,type:"multi",value:t,onSelect:o})})},{props:Ds,styles:Cs});customElements.define("calendar-multi",uv);async function dv(e,t){await t.modalState?.addStock()}var fv=$('<span class="loading loading-spinner loading-sm"></span>'),vv=$('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),hv=$('<span class="loading loading-spinner loading-xs"></span>'),pv=$('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),mv=$('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),_v=$(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input validator"><!> <input placeholder="Quantité" type="number" step="0.01" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="select select-bordered" required><option disabled selected><!>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea" placeholder="remarques..."></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function gv(e,t){V(t,!0);const r=B(()=>t.modalState.forms.stock);let n=B(()=>i(r)&&i(r).quantity&&i(r).quantity>0&&i(r).unit);async function a(Z){await t.modalState?.removeStock(Z)}var s=_v(),o=u(s),l=u(o);es(l,{class:"h-5 w-5"});var c=v(o,2),d=u(c),f=v(u(d),2),p=u(f),h=u(p);_a(h,{class:"h-4 w-4 opacity-50"});var m=v(h,2),_=v(p,2),x=u(_),y=u(x);nl(y,{class:"h-4 w-4 opacity-50"}),x.value=x.__value="";var b=v(x);b.value=b.__value="kg";var D=v(b);D.value=D.__value="gr.";var A=v(D);A.value=A.__value="l.";var E=v(A);E.value=E.__value="ml";var P=v(E);P.value=P.__value="unité";var T=v(P);T.value=T.__value="bottes";var R=v(f,2),w=u(R),O=v(R,2),k=u(O);k.__click=[dv,t];var J=u(k);{var le=Z=>{var N=fv();g(Z,N)},Ie=Z=>{var N=pt("Ajouter au stock");g(Z,N)};q(J,Z=>{t.modalState.loading?Z(le):Z(Ie,!1)})}var Ne=v(c,2);{var $e=Z=>{var N=vv(),Y=u(N);es(Y,{class:"mx-auto mb-2 h-12 w-12"}),g(Z,N)},Pe=Z=>{var N=mv(),Y=u(N),de=v(u(Y));ze(de,23,()=>t.modalState.stockEntries,ye=>ye.dateTime,(ye,me,ut)=>{var Ye=pv(),fe=u(Ye),ke=u(fe),qe=v(fe),Be=u(qe),Re=v(qe),Oe=u(Re),be=v(Re),He=u(be);He.__click=()=>a(i(ut));var dt=u(He);{var Ht=Je=>{var Nt=hv();g(Je,Nt)},Kt=Je=>{var Nt=pt("Supprimer");g(Je,Nt)};q(dt,Je=>{t.modalState.loading?Je(Ht):Je(Kt,!1)})}L(Je=>{I(ke,`${i(me).quantity??""}
                ${i(me).unit??""}`),I(Be,Je),I(Oe,i(me).notes||"-"),He.disabled=t.modalState.loading},[()=>Es(i(me).dateTime)]),g(ye,Ye)}),g(Z,N)};q(Ne,Z=>{t.modalState.stockEntries.length===0?Z($e):Z(Pe,!1)})}L(()=>{bs(w,`          ${i(r).notes??""}
        `),k.disabled=t.modalState.loading||!i(n)}),je(m,()=>i(r).quantity,Z=>i(r).quantity=Z),_n(_,()=>i(r).unit,Z=>i(r).unit=Z),je(w,()=>i(r).notes,Z=>i(r).notes=Z),g(e,s),W()}Ot(["click"]);var yv=(e,t)=>{e.key==="Enter"&&t()},bv=$("<option> </option>"),wv=(e,t,r)=>t(r),Sv=$('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),xv=$('<span class="loading loading-spinner loading-sm"></span>'),Ev=$('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function Pv(e,t){V(t,!0);let r=se("");const n=B(()=>i(r).trim().length>0&&!t.modalState.whoList.includes(i(r).trim()));async function a(){!i(n)||!t.modalState||(await t.modalState.addVolunteer(i(r).trim()),C(r,""))}async function s(E){await t.modalState?.removeVolunteer(E)}var o=Ev(),l=u(o),c=u(l),d=v(u(c),2),f=u(d);Ss(f,{class:"h-4 w-4 opacity-50"});var p=v(f,2);p.__keydown=[yv,a];var h=v(p,2);ze(h,21,()=>M.uniqueWho,Vr,(E,P)=>{var T=bv(),R=u(T),w={};L(()=>{I(R,i(P)),w!==(w=i(P))&&(T.value=(T.__value=i(P))??"")}),g(E,T)});var m=v(d,2),_=v(u(m),2);ze(_,20,()=>t.modalState.whoList,E=>E,(E,P)=>{var T=Sv(),R=u(T),w=v(R);w.__click=[wv,s,P];var O=u(w);wt(O,{class:"h-3 w-3"}),L(()=>{I(R,`${P??""} `),w.disabled=t.modalState.loading}),g(E,T)});var x=v(m,2),y=u(x);y.__click=a;var b=u(y);{var D=E=>{var P=xv();g(E,P)},A=E=>{var P=pt("Ajouter");g(E,P)};q(b,E=>{t.modalState.loading?E(D):E(A,!1)})}L(()=>y.disabled=t.modalState.loading||!i(n)),je(p,()=>i(r),E=>C(r,E)),g(e,o),W()}Ot(["keydown","click"]);var $v=(e,t)=>{e.key==="Enter"&&t()},kv=$("<option> </option>"),Nv=$('<span class="loading loading-spinner loading-sm"></span>'),Tv=(e,t,r)=>{C(t,""),C(r,"")},Av=$(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function Dv(e,t){V(t,!0);const r=B(()=>t.modalState.forms.store),n=B(()=>i(r).name||""),a=B(()=>i(r).comment||"");let s=se(bt(i(n))),o=se(bt(i(a)));const l=B(()=>i(s).trim()!==(i(r).name||"")||i(o).trim()!==(i(r).comment||""));async function c(){if(!i(l))return;const w={storeName:i(s).trim(),storeComment:i(o).trim()};await t.modalState.updateStore(w)}var d=Av(),f=u(d),p=u(f),h=v(u(p),4),m=u(h),_=u(m);Mn(_,{class:"h-4 w-4 opacity-50"});var x=v(_,2);x.__keydown=[$v,c];var y=v(x,2);ze(y,21,()=>M.uniqueStores,Vr,(w,O)=>{var k=kv(),J=u(k),le={};L(()=>{I(J,i(O)),le!==(le=i(O))&&(k.value=(k.__value=i(O))??"")}),g(w,k)});var b=v(m,2),D=v(h,2),A=u(D);A.__click=c;var E=u(A);{var P=w=>{var O=Nv();g(w,O)},T=w=>{var O=pt("Mettre à jour");g(w,O)};q(E,w=>{t.modalState.loading?w(P):w(T,!1)})}var R=v(A,2);R.__click=[Tv,s,o],L(()=>{bs(b,`          ${i(o)??""}
        `),A.disabled=t.modalState.loading||!i(l),R.disabled=t.modalState.loading}),je(x,()=>i(s),w=>C(s,w)),je(b,()=>i(o),w=>C(o,w)),g(e,d),W()}Ot(["keydown","click"]);var Cv=$('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Mv=$('<tr><td class="font-medium"> </td><td> </td><td>-</td><td>-</td><td> </td></tr>'),Iv=$('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),Rv=$('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>');function Ov(e,t){V(t,!0);const r=B(()=>t.modalState.recipes);var n=Rv(),a=u(n),s=u(a);ws(s,{class:"h-5 w-5"});var o=v(a,2);{var l=d=>{var f=Cv(),p=u(f);_a(p,{class:"mx-auto mb-2 h-12 w-12"}),g(d,f)},c=d=>{var f=Iv(),p=u(f),h=v(u(p));ze(h,21,()=>i(r),m=>m.r,(m,_)=>{var x=Mv(),y=u(x),b=u(y),D=v(y),A=u(D),E=v(D,3),P=u(E);L(()=>{I(b,i(_).r),I(A,`${(i(_).q||i(_).qEq)??""} ${(i(_).u||i(_).uEq)??""}`),I(P,i(_).a||"-")}),g(m,x)}),g(d,f)};q(o,d=>{i(r).length===0?d(l):d(c,!1)})}g(e,n),W()}var qv=$('<div class="badge badge-success gap-1"><!> Actif</div>'),Bv=$('<div class="badge badge-warning gap-1"><!> </div>'),Lv=(e,t)=>t("recettes"),jv=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),zv=(e,t)=>t("achats"),Uv=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Vv=(e,t)=>t("stock"),Wv=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Gv=(e,t)=>t("volontaires"),Hv=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Kv=(e,t)=>t("magasins"),Qv=$('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Yv=$('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function Jv(e,t){V(t,!0);let r=B(()=>It.product.tab),n=B(()=>It.product.id),a=B(()=>It.product.isOpen),s=B(()=>i(n)?Qd(i(n)):null),o=B(()=>i(s)?.product);function l(p){It.product.tab=p}var c=U(),d=j(c);{var f=p=>{var h=Yv(),m=u(h),_=u(m),x=u(_),y=u(x),b=v(x,2),D=u(b),A=u(D),E=v(D,2);{var P=H=>{var pe=qv(),Te=u(pe);Dd(Te,{class:"h-3 w-3"}),g(H,pe)},T=H=>{var pe=Bv(),Te=u(pe);tl(Te,{class:"h-3 w-3"});var xt=v(Te);L(()=>I(xt,` ${i(o).status??""}`)),g(H,pe)};q(E,H=>{i(o).status==="active"?H(P):H(T,!1)})}var R=v(E,2),w=v(u(R)),O=v(b,2);O.__click=function(...H){yo?.apply(this,H)};var k=u(O);wt(k,{class:"h-4 w-4"});var J=v(_,2),le=u(J);le.__click=[Lv,l];var Ie=u(le);ws(Ie,{class:"mr-1 h-5 w-5"});var Ne=v(Ie,2);{var $e=H=>{var pe=jv(),Te=u(pe);L(()=>I(Te,i(s).recipes.length)),g(H,pe)};q(Ne,H=>{i(s).recipes.length>0&&H($e)})}var Pe=v(le,2);Pe.__click=[zv,l];var Z=u(Pe);ra(Z,{class:"mr-1 h-5 w-5"});var N=v(Z,2);{var Y=H=>{var pe=Uv(),Te=u(pe);L(()=>I(Te,i(s).purchasesList.length)),g(H,pe)};q(N,H=>{i(s).purchasesList.length>0&&H(Y)})}var de=v(Pe,2);de.__click=[Vv,l];var ye=u(de);es(ye,{class:"mr-1 h-5 w-5"});var me=v(ye,2);{var ut=H=>{var pe=Wv(),Te=u(pe);L(()=>I(Te,i(s).stockEntries.length)),g(H,pe)};q(me,H=>{i(s).stockEntries.length>0&&H(ut)})}var Ye=v(de,2);Ye.__click=[Gv,l];var fe=u(Ye);rl(fe,{class:"mr-1 h-5 w-5"});var ke=v(fe,2);{var qe=H=>{var pe=Hv(),Te=u(pe);L(()=>I(Te,i(o).who.length)),g(H,pe)};q(ke,H=>{i(o).who&&i(o).who.length>0&&H(qe)})}var Be=v(Ye,2);Be.__click=[Kv,l];var Re=u(Be);Mn(Re,{class:"mr-1 h-5 w-5"});var Oe=v(J,2),be=u(Oe);{var He=H=>{var pe=Qv(),Te=u(pe);wt(Te,{class:"h-4 w-4"});var xt=v(Te,2),hr=u(xt);L(()=>I(hr,`erreur : ${i(s).error??""}`)),g(H,pe)};q(be,H=>{i(s).error&&H(He)})}var dt=v(be,2),Ht=u(dt);{var Kt=H=>{Ov(H,{get modalState(){return i(s)}})},Je=H=>{var pe=U(),Te=j(pe);{var xt=ft=>{ff(ft,{get modalState(){return i(s)}})},hr=ft=>{var Ar=U(),Dr=j(Ar);{var an=z=>{gv(z,{get modalState(){return i(s)}})},sn=z=>{var Ae=U(),Ve=j(Ae);{var Bt=G=>{Pv(G,{get modalState(){return i(s)}})},vt=G=>{var on=U(),Cr=j(on);{var ln=Qt=>{Dv(Qt,{get modalState(){return i(s)}})};q(Cr,Qt=>{i(r)==="magasins"&&Qt(ln)},!0)}g(G,on)};q(Ve,G=>{i(r)==="volontaires"?G(Bt):G(vt,!1)},!0)}g(z,Ae)};q(Dr,z=>{i(r)==="stock"?z(an):z(sn,!1)},!0)}g(ft,Ar)};q(Te,ft=>{i(r)==="achats"?ft(xt):ft(hr,!1)},!0)}g(H,pe)};q(Ht,H=>{i(r)==="recettes"?H(Kt):H(Je,!1)})}var Nt=v(Oe,2),nn=u(Nt);nn.__click=function(...H){yo?.apply(this,H)},L(()=>{I(y,i(o).productName),I(A,i(o).productType),I(w,` ${i(o).displayTotalNeeded??""}`),De(le,1,`tab ${i(r)==="recettes"?"tab-active":""}`),De(Pe,1,`tab ${i(r)==="achats"?"tab-active":""}`),De(de,1,`tab ${i(r)==="stock"?"tab-active":""}`),De(Ye,1,`tab ${i(r)==="volontaires"?"tab-active":""}`),De(Be,1,`tab ${i(r)==="magasins"?"tab-active":""}`)}),g(p,h)};q(d,p=>{i(a)&&i(o)&&i(s)&&p(f)})}g(e,c),W()}Ot(["click"]);var Zv=()=>M.setGroupBy("none"),Xv=()=>M.setGroupBy("store"),Fv=()=>M.setGroupBy("productType"),eh=(e,t)=>M.toggleProductType(t),th=$("<button><!> </button>"),rh=()=>M.toggleTemperature("frais"),nh=()=>M.toggleTemperature("surgele"),ah=()=>M.clearTypeAndTemperatureFilters(),sh=$('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),oh=(e,t)=>M.toggleStore(t),ih=$("<button> </button>"),lh=$('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),ch=(e,t)=>M.toggleWho(t),uh=$("<button> </button>"),dh=$('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),fh=(e,t)=>{M.clearFilters(),C(t,!1)},vh=$('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function hh(e,t){V(t,!0);let r=se(!1);const n=B(()=>M.filters),a=B(()=>M.uniqueStores),s=B(()=>M.uniqueWho),o=B(()=>M.uniqueProductTypes);var l=vh(),c=j(l),d=u(c),f=v(d,2),p=v(u(f),2),h=u(p),m=u(h),_=u(m);ts(_,{class:"w-5 h-5"});var x=v(m,2),y=u(x);wt(y,{class:"w-4 h-4"});var b=v(h,2),D=v(u(b),2),A=u(D);A.__change=[Zv];var E=v(A,2);E.__change=[Xv];var P=v(E,2);P.__change=[Fv];var T=v(b,2),R=u(T),w=v(u(R),2);ze(w,20,()=>i(o),fe=>fe,(fe,ke)=>{const qe=B(()=>Jn(ke));var Be=th();Be.__click=[eh,ke];var Re=u(Be);Hn(Re,()=>i(qe).icon,(be,He)=>{He(be,{class:"w-3 h-3 mr-1"})});var Oe=v(Re);L(be=>{De(Be,1,`btn btn-sm ${be??""}`),I(Oe,` ${i(qe).displayName??""}`)},[()=>i(n).selectedProductTypes.length===0?"btn-soft btn-accent":i(n).selectedProductTypes.includes(ke)?"btn-accent":"btn-dash btn-accent"]),g(fe,Be)});var O=v(w,2),k=u(O);k.__click=[rh];var J=u(k);Qn(J,{class:"w-3 h-3"});var le=v(k,2);le.__click=[nh];var Ie=u(le);Yn(Ie,{class:"w-3 h-3"});var Ne=v(le,2);{var $e=fe=>{var ke=sh();ke.__click=[ah];var qe=u(ke);wt(qe,{class:"w-3 h-3"}),g(fe,ke)};q(Ne,fe=>{(i(n).selectedProductTypes.length>0||i(n).selectedTemperatures.length>0)&&fe($e)})}var Pe=v(T,2);{var Z=fe=>{var ke=lh(),qe=u(ke),Be=v(u(qe),2);ze(Be,20,()=>i(a),Re=>Re,(Re,Oe)=>{var be=ih();be.__click=[oh,Oe];var He=u(be);L(dt=>{De(be,1,`btn btn-sm ${dt??""}`),I(He,Oe)},[()=>i(n).selectedStores.length===0?"btn-soft btn-accent":i(n).selectedStores.includes(Oe)?"btn-accent":"btn-dash btn-accent"]),g(Re,be)}),g(fe,ke)};q(Pe,fe=>{i(a).length>0&&fe(Z)})}var N=v(Pe,2);{var Y=fe=>{var ke=dh(),qe=u(ke),Be=v(u(qe),2);ze(Be,20,()=>i(s),Re=>Re,(Re,Oe)=>{var be=uh();be.__click=[ch,Oe];var He=u(be);L(dt=>{De(be,1,`btn btn-sm ${dt??""}`),I(He,Oe)},[()=>i(n).selectedWho.length===0?"btn-soft btn-accent":i(n).selectedWho.includes(Oe)?"btn-accent":"btn-dash btn-accent"]),g(Re,be)}),g(fe,ke)};q(N,fe=>{i(s).length>0&&fe(Y)})}var de=v(N,4);de.__click=[fh,r];var ye=u(de);wt(ye,{class:"w-4 h-4 mr-2"});var me=v(c,2),ut=u(me),Ye=u(ut);ts(Ye,{class:"w-6 h-6"}),L((fe,ke)=>{Wr(A,i(n).groupBy==="none"),Wr(E,i(n).groupBy==="store"),Wr(P,i(n).groupBy==="productType"),De(k,1,`btn btn-sm ${fe??""}`),De(le,1,`btn btn-sm ${ke??""}`)},[()=>i(n).selectedTemperatures.length===0?"btn-soft btn-success":i(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(n).selectedTemperatures.length===0?"btn-soft btn-info":i(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),hu(d,()=>i(r),fe=>C(r,fe)),g(e,l),W()}Ot(["change","click"]);Ot(["mousedown"]);const pn=e=>{var t=ph(),r=u(t);el(r,{class:"h-4 w-4 text-amber-600"}),g(e,t)};var ph=$('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),mh=()=>M.clearFilters(),_h=e=>M.setSearchQuery(e.currentTarget.value),gh=()=>M.setGroupBy("none"),yh=()=>M.setGroupBy("store"),bh=()=>M.setGroupBy("productType"),wh=(e,t)=>M.toggleProductType(t),Sh=$("<button><!> </button>"),xh=()=>M.toggleTemperature("frais"),Eh=()=>M.toggleTemperature("surgele"),Ph=()=>M.clearTypeAndTemperatureFilters(),$h=$('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),kh=$('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),Nh=(e,t)=>M.toggleStore(t),Th=$("<button><!> </button>"),Ah=()=>M.clearStoreFilters(),Dh=$('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Ch=$('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Mh=(e,t)=>M.toggleWho(t),Ih=$("<button><!> </button>"),Rh=()=>M.clearWhoFilters(),Oh=$('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),qh=$('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Bh=()=>M.handleSort("productName"),Lh=()=>M.handleSort("store"),jh=()=>M.handleSort("who"),zh=()=>M.handleSort("productType"),Uh=$('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Vh=$('<tr class="bg-base-200 sticky top-10 z-10 font-semibold"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Wh=(e,t,r)=>t("recettes",i(r).$id),Gh=$('<div class="text-base-content/60 text-xs"> </div>'),Hh=$('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Kh=$('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Qh=(e,t,r)=>t("magasins",i(r).$id),Yh=$('<div class="tooltip tooltip-info"> </div>'),Jh=(e,t,r)=>t("volontaires",i(r).$id),Zh=$('<span class="badge badge-soft badge-info badge-sm"> </span>'),Xh=$('<div class="flex flex-wrap gap-1 pr-8"></div>'),Fh=(e,t,r)=>t("recettes",i(r).$id),ep=$('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),tp=(e,t,r)=>t("achats",i(r).$id),rp=$('<div class="bg-warning m-auto rounded px-2 py-1"> </div>'),np=$('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="text-sm"> </div> <!></td><td class="group relative text-center"><!></td></tr>'),ap=$("<!> <!>",1),sp=$('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),op=$('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function ip(e,t){V(t,!0);const r=B(()=>M.filteredProducts),n=B(()=>M.filteredGroupedProducts),a=B(()=>M.stats),s=B(()=>M.uniqueStores),o=B(()=>M.uniqueWho),l=B(()=>M.uniqueProductTypes),c=B(()=>M.filters);function d(K,ce){Wd(K,ce)}var f=op(),p=j(f),h=u(p),m=u(h),_=u(m);go(_,{class:"mr-1 h-4 w-4"});var x=v(_),y=v(m,2),b=u(y);Qn(b,{class:"mr-1 h-4 w-4"});var D=v(b),A=v(y,2),E=u(A);Yn(E,{class:"mr-1 h-4 w-4"});var P=v(E),T=v(A,2),R=u(T);Cd(R,{class:"mr-1 h-4 w-4"});var w=v(R),O=v(h,2),k=u(O),J=u(k),le=u(J),Ie=u(le);ts(Ie,{class:"h-5 w-5"});var Ne=v(le,2);Ne.__click=[mh];var $e=u(Ne);wt($e,{class:"h-4 w-4"});var Pe=v(k,2),Z=u(Pe),N=v(u(Z),2),Y=u(N);Ud(Y,{class:"h-4 w-4"});var de=v(Y,2);de.__input=[_h];var ye=v(Z,2),me=v(u(ye),2),ut=u(me);ut.__change=[gh];var Ye=v(ut,2);Ye.__change=[yh];var fe=v(Ye,2);fe.__change=[bh];var ke=v(Pe,2),qe=u(ke),Be=u(qe);{var Re=K=>{var ce=kh(),st=u(ce),et=v(u(st),2),Le=u(et);ze(Le,16,()=>i(l),Se=>Se,(Se,xe)=>{const rt=B(()=>Jn(xe));var We=Sh();We.__click=[wh,xe];var _t=u(We);Hn(_t,()=>i(rt).icon,(Ke,Ce)=>{Ce(Ke,{class:"mr-1 h-5 w-5"})});var Et=v(_t);L(Ke=>{De(We,1,`btn btn-sm ${Ke??""}`),I(Et,` ${i(rt).displayName??""}`)},[()=>i(c).selectedProductTypes.length===0?"btn-soft btn-accent":i(c).selectedProductTypes.includes(xe)?"btn-accent":"btn-dash btn-accent"]),g(Se,We)});var tt=v(Le,2);tt.__click=[xh];var ot=u(tt);Qn(ot,{class:"h-5 w-5"});var _e=v(tt,2);_e.__click=[Eh];var we=u(_e);Yn(we,{class:"h-5 w-5"});var ve=v(_e,2);{var Q=Se=>{var xe=$h();xe.__click=[Ph];var rt=u(xe);wt(rt,{class:"h-3 w-3"}),g(Se,xe)};q(ve,Se=>{(i(c).selectedProductTypes.length>0||i(c).selectedTemperatures.length>0)&&Se(Q)})}L((Se,xe)=>{De(tt,1,`btn btn-sm ms-4 ${Se??""}`),De(_e,1,`btn btn-sm ${xe??""}`)},[()=>i(c).selectedTemperatures.length===0?"btn-soft btn-success":i(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(c).selectedTemperatures.length===0?"btn-soft btn-info":i(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),g(K,ce)};q(Be,K=>{i(l).length>0&&K(Re)})}var Oe=v(qe,2),be=u(Oe);{var He=K=>{var ce=Ch(),st=u(ce),et=v(u(st),2),Le=u(et);ze(Le,16,()=>i(s),_e=>_e,(_e,we)=>{var ve=Th();ve.__click=[Nh,we];var Q=u(ve);Mn(Q,{class:"mr-1 h-3 w-3"});var Se=v(Q);L(xe=>{De(ve,1,`btn btn-xs ${xe??""}`),I(Se,` ${we??""}`)},[()=>i(c).selectedStores.length===0?"btn-soft btn-accent":i(c).selectedStores.includes(we)?"btn-accent":"btn-dash btn-accent"]),g(_e,ve)});var tt=v(Le,2);{var ot=_e=>{var we=Dh();we.__click=[Ah];var ve=u(we);wt(ve,{class:"h-3 w-3"}),g(_e,we)};q(tt,_e=>{i(c).selectedStores.length>0&&_e(ot)})}g(K,ce)};q(be,K=>{i(s).length>0&&K(He)})}var dt=v(be,2);{var Ht=K=>{var ce=qh(),st=u(ce),et=v(u(st),2),Le=u(et);ze(Le,16,()=>i(o),_e=>_e,(_e,we)=>{var ve=Ih();ve.__click=[Mh,we];var Q=u(ve);Ss(Q,{class:"mr-1 h-3 w-3"});var Se=v(Q);L(xe=>{De(ve,1,`btn btn-xs ${xe??""}`),I(Se,` ${we??""}`)},[()=>i(c).selectedWho.length===0?" btn-soft btn-info":i(c).selectedWho.includes(we)?" btn-info":"btn-dash btn-info"]),g(_e,ve)});var tt=v(Le,2);{var ot=_e=>{var we=Oh();we.__click=[Rh];var ve=u(we);wt(ve,{class:"h-3 w-3"}),g(_e,we)};q(tt,_e=>{i(c).selectedWho.length>0&&_e(ot)})}g(K,ce)};q(dt,K=>{i(o).length>0&&K(Ht)})}var Kt=v(O,2),Je=u(Kt),Nt=u(Je),nn=u(Nt),H=u(nn);H.__click=[Bh];var pe=u(H),Te=u(pe);go(Te,{class:"h-4 w-4"});var xt=v(Te,2);{var hr=K=>{var ce=pt();L(()=>I(ce,i(c).sortDirection==="asc"?"↑":"↓")),g(K,ce)};q(xt,K=>{i(c).sortColumn==="productName"&&K(hr)})}var ft=v(H);ft.__click=[Lh];var Ar=u(ft),Dr=u(Ar);Mn(Dr,{class:"h-4 w-4"});var an=v(Dr,2);{var sn=K=>{var ce=pt();L(()=>I(ce,i(c).sortDirection==="asc"?"↑":"↓")),g(K,ce)};q(an,K=>{i(c).sortColumn==="store"&&K(sn)})}var z=v(ft);z.__click=[jh];var Ae=u(z),Ve=u(Ae);rl(Ve,{class:"h-4 w-4"});var Bt=v(Ve,2);{var vt=K=>{var ce=pt();L(()=>I(ce,i(c).sortDirection==="asc"?"↑":"↓")),g(K,ce)};q(Bt,K=>{i(c).sortColumn==="who"&&K(vt)})}var G=v(z);G.__click=[zh];var on=u(G),Cr=v(u(on));{var ln=K=>{var ce=pt();L(()=>I(ce,i(c).sortDirection==="asc"?"↑":"↓")),g(K,ce)};q(Cr,K=>{i(c).sortColumn==="productType"&&K(ln)})}var Qt=v(G,2),wa=u(Qt),Yt=u(wa);ra(Yt,{class:"h-4 w-4"});var pr=v(Qt),mr=u(pr),cn=u(mr);Rd(cn,{class:"h-4 w-4"});var _r=v(Nt);ze(_r,21,()=>Object.entries(i(n)),([K,ce])=>K,(K,ce)=>{var st=B(()=>Ro(i(ce),2));let et=()=>i(st)[0],Le=()=>i(st)[1];var tt=ap(),ot=j(tt);{var _e=ve=>{const Q=B(()=>Jn(et()));var Se=Vh(),xe=u(Se),rt=u(xe),We=u(rt);{var _t=Ke=>{var Ce=pt();L(()=>I(Ce,`🏪 ${et()??""} (${Le().length??""})`)),g(Ke,Ce)},Et=Ke=>{var Ce=U(),Lt=j(Ce);{var Ft=it=>{var jt=Uh(),Ir=u(jt);Hn(Ir,()=>i(Q).icon,(un,qr)=>{qr(un,{class:"h-4 w-4"})});var Rr=v(Ir,2),er=u(Rr),tr=v(Rr,2),Or=u(tr);L(()=>{I(er,i(Q).displayName),I(Or,`(${Le().length??""})`)}),g(it,jt)},gr=it=>{var jt=pt();L(()=>I(jt,`📦 ${et()??""} (${Le().length??""})`)),g(it,jt)};q(Lt,it=>{i(c).groupBy==="productType"?it(Ft):it(gr,!1)},!0)}g(Ke,Ce)};q(We,Ke=>{i(c).groupBy==="store"?Ke(_t):Ke(Et,!1)})}g(ve,Se)};q(ot,ve=>{et()!==""&&ve(_e)})}var we=v(ot,2);ze(we,17,()=>Hd(Le(),i(c)),ve=>ve.$id,(ve,Q)=>{const Se=B(()=>Jn(i(Q).productType)),xe=B(()=>Kd(i(Q).purchases||[]));var rt=np(),We=u(rt);We.__click=[Wh,d,Q];var _t=u(We),Et=u(_t),Ke=u(Et),Ce=u(Ke),Lt=v(Ke,2);{var Ft=X=>{var he=Gh(),Ze=u(he);L(()=>I(Ze,`Ancien: ${i(Q).previousNames[0]??""}`)),g(X,he)};q(Lt,X=>{i(Q).previousNames&&i(Q).previousNames.length>0&&X(Ft)})}var gr=v(Et,2),it=u(gr);{var jt=X=>{var he=Hh(),Ze=u(he);Qn(Ze,{class:"text-success h-4 w-4"}),g(X,he)};q(it,X=>{i(Q).pFrais&&X(jt)})}var Ir=v(it,2);{var Rr=X=>{var he=Kh(),Ze=u(he);Yn(Ze,{class:"text-info h-4 w-4"}),g(X,he)};q(Ir,X=>{i(Q).pSurgel&&X(Rr)})}var er=v(_t,2);pn(er);var tr=v(We);tr.__click=[Qh,d,Q];var Or=u(tr);{var un=X=>{var he=Yh(),Ze=u(he);L(()=>{ta(he,"data-tip",i(Q).storeInfo.storeComment),I(Ze,i(Q).storeInfo.storeName||"-")}),g(X,he)},qr=X=>{var he=pt();L(()=>I(he,i(Q).storeInfo?.storeName||"-")),g(X,he)};q(Or,X=>{i(Q).storeInfo?.storeComment?X(un):X(qr,!1)})}var Sa=v(Or,2);pn(Sa);var ue=v(tr);ue.__click=[Jh,d,Q];var rr=u(ue);{var Br=X=>{var he=Xh();ze(he,20,()=>i(Q).who,Ze=>Ze,(Ze,zn)=>{var Un=Zh(),ka=u(Un);L(()=>I(ka,zn)),g(Ze,Un)}),g(X,he)},xa=X=>{var he=pt("-");g(X,he)};q(rr,X=>{i(Q).who&&i(Q).who.length>0?X(Br):X(xa,!1)})}var jn=v(rr,2);pn(jn);var Ea=v(ue),El=u(Ea),Is=u(El);Hn(Is,()=>i(Se).icon,(X,he)=>{he(X,{class:"h-3 w-3"})});var Pl=v(Is),Pa=v(Ea);Pa.__click=[Fh,d,Q];var Rs=u(Pa),$l=u(Rs),Os=v(Rs,2);{var kl=X=>{var he=ep(),Ze=u(he),zn=u(Ze),Un=v(zn);ws(Un,{class:"h-3 w-3"});var ka=v(Ze,2),Bs=u(ka),Rl=v(Bs);Vd(Rl,{class:"h-3 w-3"}),L(()=>{I(zn,`${i(Q)?.nbRecipes??""} `),I(Bs,`${i(Q)?.totalAssiettes??""} `)}),g(X,he)};q(Os,X=>{(i(Q).nbRecipes||i(Q).totalAssiettes)&&X(kl)})}var Nl=v(Os,2);pn(Nl);var $a=v(Pa);$a.__click=[tp,d,Q];var qs=u($a),Tl=u(qs),Al=v(qs,2);pn(Al);var Dl=v($a),Cl=u(Dl);{var Ml=X=>{var he=rp(),Ze=u(he);L(()=>I(Ze,i(Q).displayMissingQuantity)),g(X,he)},Il=X=>{Ad(X,{size:28,strokeWidth:3,class:"text-success m-auto"})};q(Cl,X=>{i(Q).displayMissingQuantity!=="✅ Complet"?X(Ml):X(Il,!1)})}L(()=>{I(Ce,i(Q).productName),De(tr,1,`${i(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),De(Ea,1,wi(i(c).groupBy==="productType"?"hidden":"")),I(Pl,` ${i(Se).displayName??""}`),I($l,i(Q).displayTotalNeeded??"-"),I(Tl,i(xe))}),g(ve,rt)}),g(K,tt)});var Mr=v(Je,2);{var Jt=K=>{var ce=sp();g(K,ce)};q(Mr,K=>{i(r).length===0&&K(Jt)})}var Zt=v(p,2);Jv(Zt,{});var Xt=v(Zt,2);hh(Xt,{}),L(()=>{I(x,` ${i(a).total??""}`),I(D,` frais:
      ${i(a).frais??""}`),I(P,` surgelés:
      ${i(a).surgel??""}`),I(w,` fusionnés:
      ${i(a).merged??""}`),bs(de,i(c).searchQuery),Wr(ut,i(c).groupBy==="none"),Wr(Ye,i(c).groupBy==="store"),Wr(fe,i(c).groupBy==="productType"),De(ft,1,`hover:bg-base-100 cursor-pointer text-center ${i(c).groupBy==="store"?"hidden":""}`),De(G,1,`hover:bg-base-100 cursor-pointer text-center ${i(c).groupBy==="productType"?"hidden":""}`)}),g(e,f),W()}Ot(["click","input","change"]);_c();var lp=$('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function cp(e){var t=lp();g(e,t)}var up=$('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function dp(e,t){var r=up(),n=v(u(r),2),a=v(u(n),2),s=u(a);L(()=>I(s,t.message)),g(e,r)}var fp=$('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function vp(e,t){var r=fp(),n=u(r),a=u(n);tl(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var s=v(a,2),o=v(u(s),2),l=u(o);L(()=>I(l,t.message||"Erreur inconnue")),g(e,r)}var hp=$('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),pp=$('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),mp=$('<div class="text-base-content/60"> </div>'),_p=$('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),gp=$('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),yp=$('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),bp=$('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function wp(e,t){V(t,!0);let r,n=se(null),a=se(!0),s=se(!1);$i(async()=>{r=Fu();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await M.initialize(r)}catch(N){const Y=N instanceof Error?N.message:"Erreur lors de l'initialisation";C(n,Y,!0),console.error("[App] Erreur initialisation:",N)}finally{C(a,!1)}}),gu(()=>{M.destroy()});async function o(){if(!(!r||i(s))){C(s,!0);try{await M.forceReload(r)}catch(N){console.error("[App] Erreur lors du rechargement forcé:",N)}finally{C(s,!1)}}}const l=B(()=>i(n)||M.error),c=B(()=>i(a)||M.loading),d=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var f=bp(),p=u(f),h=u(p),m=u(h),_=v(u(m),2),x=u(_);{var y=N=>{var Y=hp();g(N,Y)};q(x,N=>{M.realtimeConnected&&N(y)})}var b=v(x,2);{var D=N=>{var Y=pp();g(N,Y)};q(b,N=>{M.syncing&&N(D)})}var A=v(b,2);{var E=N=>{var Y=mp(),de=u(Y);L(ye=>I(de,`Maj: ${ye??""}`),[()=>new Date(M.lastSync).toLocaleTimeString()]),g(N,Y)};q(A,N=>{M.lastSync&&N(E)})}var P=v(A,2);{var T=N=>{var Y=_p();let de;Y.__click=o;var ye=u(Y);Ld(ye,{class:"h-4 w-4"}),L(me=>{de=De(Y,1,"btn btn-outline btn-sm",null,de,me),Y.disabled=i(s)||M.loading},[()=>({loading:i(s)||M.loading})]),g(N,Y)};q(P,N=>{i(n)||N(T)})}var R=v(P,2);{var w=N=>{var Y=gp(),de=u(Y),ye=u(de);Od(ye,{class:"mr-2 h-4 w-4"}),L(()=>ta(de,"href",d)),g(N,Y)};q(R,N=>{i(n)&&N(w)})}var O=v(p,2),k=u(O);{var J=N=>{vp(N,{get message(){return i(l)}})},le=N=>{var Y=U(),de=j(Y);{var ye=me=>{dp(me,{get message(){return i(l)}})};q(de,me=>{i(l)&&me(ye)},!0)}g(N,Y)};q(k,N=>{i(n)?N(J):N(le,!1)})}var Ie=v(k,2);{var Ne=N=>{cp(N)};q(Ie,N=>{i(c)&&N(Ne)})}var $e=v(Ie,2);{var Pe=N=>{ip(N,{})},Z=N=>{var Y=U(),de=j(Y);{var ye=me=>{var ut=yp();g(me,ut)};q(de,me=>{!M.loading&&!i(n)&&me(ye)},!0)}g(N,Y)};q($e,N=>{M.enrichedProducts.length>0?N(Pe):N(Z,!1)})}g(e,f),W()}Ot(["click"]);tu(wp,{target:document.getElementById("app_products")});
