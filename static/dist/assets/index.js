(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const Gs=!1;var Un=Array.isArray,Do=Array.prototype.indexOf,Va=Array.from,Pa=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,Mo=Object.getOwnPropertyDescriptors,Co=Object.prototype,Ro=Array.prototype,Hs=Object.getPrototypeOf,os=Object.isExtensible;function an(e){return typeof e=="function"}const ne=()=>{};function Oo(e){for(var t=0;t<e.length;t++)e[t]()}function Qs(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function Ks(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const mt=2,Wa=4,Ua=8,xr=16,Wt=32,Er=64,Ga=128,$t=256,Bn=512,it=1024,bt=2048,cr=4096,Tt=8192,Pr=16384,Ha=32768,$r=65536,ls=1<<17,qo=1<<18,Zr=1<<19,jo=1<<20,$a=1<<21,Gn=1<<22,yr=1<<23,wr=Symbol("$state"),Ys=Symbol("legacy props"),Bo=Symbol(""),vn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Zs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Lo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function zo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Vo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Wo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Uo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Go(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ho(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Qo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ko(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Yo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Hn=1,Qn=2,Js=4,Zo=8,Jo=16,Xo=1,Fo=2,el=4,tl=8,rl=16,nl=1,al=2,He=Symbol(),sl="http://www.w3.org/1999/xhtml",il="http://www.w3.org/2000/svg",ol="@attach";function ll(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function cl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let ul=!1;function Xs(e){return e===this.v}function Fs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function dl(e,t){return e!==t}function ei(e){return!Fs(e,this.v)}let Jr=!1,fl=!1;function vl(){Jr=!0}let ze=null;function Wr(e){ze=e}function G(e,t=!1,r){ze={p:ze,c:null,e:null,s:e,x:null,l:Jr&&!t?{s:null,u:null,$:[]}:null}}function H(e){var t=ze,r=t.e;if(r!==null){t.e=null;for(var n of r)_i(n)}return ze=t.p,{}}function Xr(){return!Jr||ze!==null&&ze.l===null}let br=[];function ti(){var e=br;br=[],Oo(e)}function Vt(e){if(br.length===0&&!hn){var t=br;queueMicrotask(()=>{t===br&&ti()})}br.push(e)}function hl(){for(;br.length>0;)ti()}const pl=new WeakMap;function ri(e){var t=de;if(t===null)return ve.f|=yr,e;if((t.f&Ha)===0){if((t.f&Ga)===0)throw!t.parent&&e instanceof Error&&ni(e),e;t.b.error(e)}else Ur(e,t)}function Ur(e,t){for(;t!==null;){if((t.f&Ga)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&ni(e),e}function ni(e){const t=pl.get(e);t&&(Pa(e,"message",{value:t.message}),Pa(e,"stack",{value:t.stack}))}const Dn=new Set;let Ne=null,Cn=null,Na=new Set,Mt=[],Kn=null,ka=!1,hn=!1;class Pt{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#o=[];#s=[];#i=[];#n=[];#a=[];#d=[];skipped_effects=new Set;process(t){Mt=[],Cn=null;var r=Pt.apply(this);for(const o of t)this.#f(o);if(this.#c===0){this.#v();var n=this.#s,a=this.#i;this.#s=[],this.#i=[],this.#n=[],Cn=this,Ne=null,cs(n),cs(a),Cn=null,this.#u?.resolve()}else this.#l(this.#s),this.#l(this.#i),this.#l(this.#n);r();for(const o of this.#o)bn(o);this.#o=[]}#f(t){t.f^=it;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Wt|Er))!==0,o=a&&(n&it)!==0,i=o||(n&Tt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=it:(n&Wa)!==0?this.#i.push(r):(n&it)===0&&((n&Gn)!==0&&r.b?.is_pending()?this.#o.push(r):ta(r)&&((r.f&xr)!==0&&this.#n.push(r),bn(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#l(t){for(const r of t)((r.f&bt)!==0?this.#a:this.#d).push(r),dt(r,it);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){Ne=this}deactivate(){Ne=null}flush(){if(Mt.length>0){if(this.activate(),ai(),Ne!==null&&Ne!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of Na)if(Na.delete(t),t(),Ne!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),Dn.size>1){this.#e.clear();let t=!0;for(const r of Dn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;si(n)}if(Mt.length>0){Ne=r;const n=Pt.apply(r);for(const a of Mt)r.#f(a);Mt=[],n()}}Ne=null}Dn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#a)dt(t,bt),Sr(t);for(const t of this.#d)dt(t,cr),Sr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=Qs()).promise}static ensure(){if(Ne===null){const t=Ne=new Pt;Dn.add(Ne),hn||Pt.enqueue(()=>{Ne===t&&t.flush()})}return Ne}static enqueue(t){Vt(t)}static apply(t){return ne}}function _l(e){var t=hn;hn=!0;try{for(var r;;){if(hl(),Mt.length===0&&(Ne?.flush(),Mt.length===0))return Kn=null,r;ai()}}finally{hn=t}}function ai(){var e=zr;ka=!0;try{var t=0;for(vs(!0);Mt.length>0;){var r=Pt.ensure();if(t++>1e3){var n,a;ml()}r.process(Mt),sr.clear()}}finally{ka=!1,vs(e),Kn=null}}function ml(){try{Uo()}catch(e){Ur(e,Kn)}}let gr=null;function cs(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Pr|Tt))===0&&ta(n)&&(gr=[],bn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?bi(n):n.fn=null),gr?.length>0)){sr.clear();for(const a of gr)bn(a);gr=[]}}gr=null}}function si(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&mt)!==0?si(t):(r&(Gn|xr))!==0&&(dt(t,bt),Sr(t))}}function Sr(e){for(var t=Kn=e;t.parent!==null;){t=t.parent;var r=t.f;if(ka&&t===de&&(r&xr)!==0)return;if((r&(Er|Wt))!==0){if((r&it)===0)return;t.f^=it}}Mt.push(t)}function ii(e){let t=0,r=or(0),n;return()=>{Dl()&&(s(r),Fn(()=>(t===0&&(n=Fr(()=>e(()=>Ct(r)))),t+=1,()=>{Vt(()=>{t-=1,t===0&&(n?.(),n=void 0,Ct(r))})})))}}var gl=$r|Zr|Ga;function bl(e,t,r){new yl(e,t,r)}class yl{parent;#e=!1;#r;#c=null;#u;#o;#s;#i=null;#n=null;#a=null;#d=null;#f=0;#l=0;#v=!1;#h=null;#p=()=>{this.#h&&Gr(this.#h,this.#f)};#x=ii(()=>(this.#h=or(this.#f),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#o=n,this.parent=de.b,this.#e=!!this.#u.pending,this.#s=Ht(()=>{de.b=this;{try{this.#i=Fe(()=>n(this.#r))}catch(a){this.error(a)}this.#l>0?this.#b():this.#e=!1}},gl)}#t(){try{this.#i=Fe(()=>this.#o(this.#r))}catch(t){this.error(t)}this.#e=!1}#E(){const t=this.#u.pending;t&&(this.#n=Fe(()=>t(this.#r)),Pt.enqueue(()=>{this.#i=this.#g(()=>(Pt.ensure(),Fe(()=>this.#o(this.#r)))),this.#l>0?this.#b():(Bt(this.#n,()=>{this.#n=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#g(t){var r=de,n=ve,a=ze;Rt(this.#s),pt(this.#s),Wr(this.#s.ctx);try{return t()}catch(o){return ri(o),null}finally{Rt(r),pt(n),Wr(a)}}#b(){const t=this.#u.pending;this.#i!==null&&(this.#d=document.createDocumentFragment(),wl(this.#i,this.#d)),this.#n===null&&(this.#n=Fe(()=>t(this.#r)))}#y(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#y(t);return}this.#l+=t,this.#l===0&&(this.#e=!1,this.#n&&Bt(this.#n,()=>{this.#n=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),Vt(()=>{Pt.ensure().flush()}))}update_pending_count(t){this.#y(t),this.#f+=t,Na.add(this.#p)}get_effect_pending(){return this.#x(),s(this.#h)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#i&&(et(this.#i),this.#i=null),this.#n&&(et(this.#n),this.#n=null),this.#a&&(et(this.#a),this.#a=null);var a=!1,o=!1;const i=()=>{if(a){cl();return}a=!0,o&&Yo(),Pt.ensure(),this.#f=0,this.#a!==null&&Bt(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#i=this.#g(()=>(this.#v=!1,Fe(()=>this.#o(this.#r)))),this.#l>0?this.#b():this.#e=!1};var l=ve;try{pt(null),o=!0,r?.(t,i),o=!1}catch(c){Ur(c,this.#s&&this.#s.parent)}finally{pt(l)}n&&Vt(()=>{this.#a=this.#g(()=>{this.#v=!0;try{return Fe(()=>{n(this.#r,()=>t,()=>i)})}catch(c){return Ur(c,this.#s.parent),null}finally{this.#v=!1}})})}}function wl(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:Pn(r);t.append(r),r=a}}function oi(e,t,r){const n=Xr()?Yn:Qa;if(t.length===0){r(e.map(n));return}var a=Ne,o=de,i=Sl();Promise.all(t.map(l=>xl(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(o.f&Pr)===0&&Ur(c,o)}a?.deactivate(),li()}).catch(l=>{Ur(l,o)})}function Sl(){var e=de,t=ve,r=ze,n=Ne;return function(){Rt(e),pt(t),Wr(r),n?.activate()}}function li(){Rt(null),pt(null),Wr(null)}function Yn(e){var t=mt|bt,r=ve!==null&&(ve.f&mt)!==0?ve:null;return de===null||r!==null&&(r.f&$t)!==0?t|=$t:de.f|=Zr,{ctx:ze,deps:null,effects:null,equals:Xs,f:t,fn:e,reactions:null,rv:0,v:He,wv:0,parent:r??de,ac:null}}function xl(e,t){let r=de;r===null&&Lo();var n=r.b,a=void 0,o=or(He),i=!ve,l=new Map;return Cl(()=>{var c=Qs();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(m){c.reject(m)}var f=Ne,h=n.is_pending();i&&(n.update_pending_count(1),h||(f.increment(),l.get(f)?.reject(vn),l.set(f,c)));const _=(m,p=void 0)=>{h||f.activate(),p?p!==vn&&(o.f|=yr,Gr(o,p)):((o.f&yr)!==0&&(o.f^=yr),Gr(o,m)),i&&(n.update_pending_count(-1),h||f.decrement()),li()};c.promise.then(_,m=>_(null,m||"unknown"))}),Ya(()=>{for(const c of l.values())c.reject(vn)}),new Promise(c=>{function f(h){function _(){h===a?c(o):f(a)}h.then(_,_)}f(a)})}function U(e){const t=Yn(e);return Si(t),t}function Qa(e){const t=Yn(e);return t.equals=ei,t}function ci(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)et(t[r])}}function El(e){for(var t=e.parent;t!==null;){if((t.f&mt)===0)return t;t=t.parent}return null}function Ka(e){var t,r=de;Rt(El(e));try{ci(e),t=$i(e)}finally{Rt(r)}return t}function ui(e){var t=Ka(e);if(e.equals(t)||(e.v=t,e.wv=Ei()),!Nr){var r=(nr||(e.f&$t)!==0)&&e.deps!==null?cr:it;dt(e,r)}}const sr=new Map;function or(e,t){var r={f:0,v:e,reactions:null,equals:Xs,rv:0,wv:0};return r}function X(e,t){const r=or(e);return Si(r),r}function Pl(e,t=!1,r=!0){const n=or(e);return t||(n.equals=ei),Jr&&r&&ze!==null&&ze.l!==null&&(ze.l.s??=[]).push(n),n}function N(e,t,r=!1){ve!==null&&(!kt||(ve.f&ls)!==0)&&Xr()&&(ve.f&(mt|xr|Gn|ls))!==0&&!Lt?.includes(e)&&Ko();let n=r?Ue(t):t;return Gr(e,n)}function Gr(e,t){if(!e.equals(t)){var r=e.v;Nr?sr.set(e,t):sr.set(e,r),e.v=t;var n=Pt.ensure();n.capture(e,r),(e.f&mt)!==0&&((e.f&bt)!==0&&Ka(e),dt(e,(e.f&$t)===0?it:cr)),e.wv=Ei(),di(e,bt),Xr()&&de!==null&&(de.f&it)!==0&&(de.f&(Wt|Er))===0&&(Et===null?ql([e]):Et.push(e))}return t}function Ct(e){N(e,e.v+1)}function di(e,t){var r=e.reactions;if(r!==null)for(var n=Xr(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===de)){var c=(l&bt)===0;c&&dt(i,t),(l&mt)!==0?di(i,cr):c&&((l&xr)!==0&&gr!==null&&gr.push(i),Sr(i))}}}function Ue(e){if(typeof e!="object"||e===null||wr in e)return e;const t=Hs(e);if(t!==Co&&t!==Ro)return e;var r=new Map,n=Un(e),a=X(0),o=zt,i=l=>{if(zt===o)return l();var c=ve,f=zt;pt(null),ps(o);var h=l();return pt(c),ps(f),h};return n&&r.set("length",X(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Ho();var h=r.get(c);return h===void 0?h=i(()=>{var _=X(f.value);return r.set(c,_),_}):N(h,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const h=i(()=>X(He));r.set(c,h),Ct(a)}}else N(f,He),Ct(a);return!0},get(l,c,f){if(c===wr)return e;var h=r.get(c),_=c in l;if(h===void 0&&(!_||ar(l,c)?.writable)&&(h=i(()=>{var p=Ue(_?l[c]:He),g=X(p);return g}),r.set(c,h)),h!==void 0){var m=s(h);return m===He?void 0:m}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var h=r.get(c);h&&(f.value=s(h))}else if(f===void 0){var _=r.get(c),m=_?.v;if(_!==void 0&&m!==He)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(l,c){if(c===wr)return!0;var f=r.get(c),h=f!==void 0&&f.v!==He||Reflect.has(l,c);if(f!==void 0||de!==null&&(!h||ar(l,c)?.writable)){f===void 0&&(f=i(()=>{var m=h?Ue(l[c]):He,p=X(m);return p}),r.set(c,f));var _=s(f);if(_===He)return!1}return h},set(l,c,f,h){var _=r.get(c),m=c in l;if(n&&c==="length")for(var p=f;p<_.v;p+=1){var g=r.get(p+"");g!==void 0?N(g,He):p in l&&(g=i(()=>X(He)),r.set(p+"",g))}if(_===void 0)(!m||ar(l,c)?.writable)&&(_=i(()=>X(void 0)),N(_,Ue(f)),r.set(c,_));else{m=_.v!==He;var x=i(()=>Ue(f));N(_,x)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(h,f),!m){if(n&&typeof c=="string"){var $=r.get("length"),M=Number(c);Number.isInteger(M)&&M>=$.v&&N($,M+1)}Ct(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(_=>{var m=r.get(_);return m===void 0||m.v!==He});for(var[f,h]of r)h.v!==He&&!(f in l)&&c.push(f);return c},setPrototypeOf(){Qo()}})}function us(e){try{if(e!==null&&typeof e=="object"&&wr in e)return e[wr]}catch{}return e}function fi(e,t){return Object.is(us(e),us(t))}var ds,vi,hi,pi;function $l(){if(ds===void 0){ds=window,vi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;hi=ar(t,"firstChild").get,pi=ar(t,"nextSibling").get,os(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),os(r)&&(r.__t=void 0)}}function Ut(e=""){return document.createTextNode(e)}function Hr(e){return hi.call(e)}function Pn(e){return pi.call(e)}function u(e,t){return Hr(e)}function L(e,t=!1){{var r=Hr(e);return r instanceof Comment&&r.data===""?Pn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=Pn(n);return n}function Nl(e){e.textContent=""}function Zn(){return!1}function kl(e,t){if(t){const r=document.body;e.autofocus=!0,Vt(()=>{document.activeElement===r&&e.focus()})}}let fs=!1;function Tl(){fs||(fs=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Jn(e){var t=ve,r=de;pt(null),Rt(null);try{return e()}finally{pt(t),Rt(r)}}function Xn(e,t,r,n=r){e.addEventListener(t,()=>Jn(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Tl()}function Al(e){de===null&&ve===null&&Wo(),ve!==null&&(ve.f&$t)!==0&&de===null&&Vo(),Nr&&zo()}function Il(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Gt(e,t,r,n=!0){var a=de;a!==null&&(a.f&Tt)!==0&&(e|=Tt);var o={ctx:ze,deps:null,nodes_start:null,nodes_end:null,f:e|bt,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{bn(o),o.f|=Ha}catch(c){throw et(o),c}else t!==null&&Sr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Zr)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Il(i,a),ve!==null&&(ve.f&mt)!==0&&(e&Er)===0)){var l=ve;(l.effects??=[]).push(i)}}return o}function Dl(){return ve!==null&&!kt}function Ya(e){const t=Gt(Ua,null,!1);return dt(t,it),t.teardown=e,t}function Za(e){Al();var t=de.f,r=!ve&&(t&Wt)!==0&&(t&Ha)===0;if(r){var n=ze;(n.e??=[]).push(e)}else return _i(e)}function _i(e){return Gt(Wa|jo,e,!1)}function Ml(e){Pt.ensure();const t=Gt(Er|Zr,e,!0);return(r={})=>new Promise(n=>{r.outro?Bt(t,()=>{et(t),n(void 0)}):(et(t),n(void 0))})}function Ja(e){return Gt(Wa,e,!1)}function Cl(e){return Gt(Gn|Zr,e,!0)}function Fn(e,t=0){return Gt(Ua|t,e,!0)}function j(e,t=[],r=[]){oi(t,r,n=>{Gt(Ua,()=>e(...n.map(s)),!0)})}function Ht(e,t=0){var r=Gt(xr|t,e,!0);return r}function Fe(e,t=!0){return Gt(Wt|Zr,e,!0,t)}function mi(e){var t=e.teardown;if(t!==null){const r=Nr,n=ve;hs(!0),pt(null);try{t.call(null)}finally{hs(r),pt(n)}}}function gi(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&Jn(()=>{a.abort(vn)});var n=r.next;(r.f&Er)!==0?r.parent=null:et(r,t),r=n}}function Rl(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Wt)===0&&et(t),t=r}}function et(e,t=!0){var r=!1;(t||(e.f&qo)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Ol(e.nodes_start,e.nodes_end),r=!0),gi(e,t&&!r),Ln(e,0),dt(e,Pr);var n=e.transitions;if(n!==null)for(const o of n)o.stop();mi(e);var a=e.parent;a!==null&&a.first!==null&&bi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Ol(e,t){for(;e!==null;){var r=e===t?null:Pn(e);e.remove(),e=r}}function bi(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Bt(e,t){var r=[];Xa(e,r,!0),yi(r,()=>{et(e),t&&t()})}function yi(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function Xa(e,t,r){if((e.f&Tt)===0){if(e.f^=Tt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,o=(n.f&$r)!==0||(n.f&Wt)!==0;Xa(n,t,o?r:!1),n=a}}}function ea(e){wi(e,!0)}function wi(e,t){if((e.f&Tt)!==0){e.f^=Tt,(e.f&it)===0&&(dt(e,bt),Sr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&$r)!==0||(r.f&Wt)!==0;wi(r,a?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let zr=!1;function vs(e){zr=e}let Nr=!1;function hs(e){Nr=e}let ve=null,kt=!1;function pt(e){ve=e}let de=null;function Rt(e){de=e}let Lt=null;function Si(e){ve!==null&&(Lt===null?Lt=[e]:Lt.push(e))}let ut=null,gt=0,Et=null;function ql(e){Et=e}let xi=1,gn=0,zt=gn;function ps(e){zt=e}let nr=!1;function Ei(){return++xi}function ta(e){var t=e.f;if((t&bt)!==0)return!0;if((t&cr)!==0){var r=e.deps,n=(t&$t)!==0;if(r!==null){var a,o,i=(t&Bn)!==0,l=n&&de!==null&&!nr,c=r.length;if((i||l)&&(de===null||(de.f&Pr)===0)){var f=e,h=f.parent;for(a=0;a<c;a++)o=r[a],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=Bn),l&&h!==null&&(h.f&$t)===0&&(f.f^=$t)}for(a=0;a<c;a++)if(o=r[a],ta(o)&&ui(o),o.wv>e.wv)return!0}(!n||de!==null&&!nr)&&dt(e,it)}return!1}function Pi(e,t,r=!0){var n=e.reactions;if(n!==null&&!Lt?.includes(e))for(var a=0;a<n.length;a++){var o=n[a];(o.f&mt)!==0?Pi(o,t,!1):t===o&&(r?dt(o,bt):(o.f&it)!==0&&dt(o,cr),Sr(o))}}function $i(e){var t=ut,r=gt,n=Et,a=ve,o=nr,i=Lt,l=ze,c=kt,f=zt,h=e.f;ut=null,gt=0,Et=null,nr=(h&$t)!==0&&(kt||!zr||ve===null),ve=(h&(Wt|Er))===0?e:null,Lt=null,Wr(e.ctx),kt=!1,zt=++gn,e.ac!==null&&(Jn(()=>{e.ac.abort(vn)}),e.ac=null);try{e.f|=$a;var _=e.fn,m=_(),p=e.deps;if(ut!==null){var g;if(Ln(e,gt),p!==null&&gt>0)for(p.length=gt+ut.length,g=0;g<ut.length;g++)p[gt+g]=ut[g];else e.deps=p=ut;if(!nr||(h&mt)!==0&&e.reactions!==null)for(g=gt;g<p.length;g++)(p[g].reactions??=[]).push(e)}else p!==null&&gt<p.length&&(Ln(e,gt),p.length=gt);if(Xr()&&Et!==null&&!kt&&p!==null&&(e.f&(mt|cr|bt))===0)for(g=0;g<Et.length;g++)Pi(Et[g],e);return a!==null&&a!==e&&(gn++,Et!==null&&(n===null?n=Et:n.push(...Et))),(e.f&yr)!==0&&(e.f^=yr),m}catch(x){return ri(x)}finally{e.f^=$a,ut=t,gt=r,Et=n,ve=a,nr=o,Lt=i,Wr(l),kt=c,zt=f}}function jl(e,t){let r=t.reactions;if(r!==null){var n=Do.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&mt)!==0&&(ut===null||!ut.includes(t))&&(dt(t,cr),(t.f&($t|Bn))===0&&(t.f^=Bn),ci(t),Ln(t,0))}function Ln(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)jl(e,r[n])}function bn(e){var t=e.f;if((t&Pr)===0){dt(e,it);var r=de,n=zr;de=e,zr=!0;try{(t&xr)!==0?Rl(e):gi(e),mi(e);var a=$i(e);e.teardown=typeof a=="function"?a:null,e.wv=xi;var o;Gs&&fl&&(e.f&bt)!==0&&e.deps}finally{zr=n,de=r}}}async function Bl(){await Promise.resolve(),_l()}function s(e){var t=e.f,r=(t&mt)!==0;if(ve!==null&&!kt){var n=de!==null&&(de.f&Pr)!==0;if(!n&&!Lt?.includes(e)){var a=ve.deps;if((ve.f&$a)!==0)e.rv<gn&&(e.rv=gn,ut===null&&a!==null&&a[gt]===e?gt++:ut===null?ut=[e]:(!nr||!ut.includes(e))&&ut.push(e));else{(ve.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[ve]:o.includes(ve)||o.push(ve)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&$t)===0&&(i.f^=$t)}if(Nr){if(sr.has(e))return sr.get(e);if(r){i=e;var c=i.v;return((i.f&it)===0&&i.reactions!==null||Ni(i))&&(c=Ka(i)),sr.set(i,c),c}}else r&&(i=e,ta(i)&&ui(i));if((e.f&yr)!==0)throw e.v;return e.v}function Ni(e){if(e.v===He)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(sr.has(t)||(t.f&mt)!==0&&Ni(t))return!0;return!1}function Fr(e){var t=kt;try{return kt=!0,e()}finally{kt=t}}const Ll=-7169;function dt(e,t){e.f=e.f&Ll|t}function zl(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Vl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Wl(e){return Vl.includes(e)}const Ul={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Gl(e){return e=e.toLowerCase(),Ul[e]??e}const Hl=["touchstart","touchmove"];function Ql(e){return Hl.includes(e)}const ki=new Set,Ta=new Set;function Ti(e,t,r,n={}){function a(o){if(n.capture||cn.call(t,o),!o.cancelBubble)return Jn(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Vt(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function _s(e,t,r,n={}){var a=Ti(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function yt(e){for(var t=0;t<e.length;t++)ki.add(e[t]);for(var r of Ta)r(e)}let ms=null;function cn(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;ms=e;var i=0,l=ms===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(o=a[i]||e.target,o!==t){Pa(e,"currentTarget",{configurable:!0,get(){return o||r}});var h=ve,_=de;pt(null),Rt(null);try{for(var m,p=[];o!==null;){var g=o.assignedSlot||o.parentNode||o.host||null;try{var x=o["__"+n];if(x!=null&&(!o.disabled||e.target===o))if(Un(x)){var[b,...$]=x;b.apply(o,[e,...$])}else x.call(o,e)}catch(M){m?p.push(M):m=M}if(e.cancelBubble||g===t||g===null)break;o=g}if(m){for(let M of p)queueMicrotask(()=>{throw M});throw m}}finally{e.__root=t,delete e.currentTarget,pt(h),Rt(_)}}}function Ai(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Qr(e,t){var r=de;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function y(e,t){var r=(t&nl)!==0,n=(t&al)!==0,a,o=!e.startsWith("<!>");return()=>{a===void 0&&(a=Ai(o?e:"<!>"+e),r||(a=Hr(a)));var i=n||vi?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Hr(i),c=i.lastChild;Qr(l,c)}else Qr(i,i);return i}}function Kl(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Ai(a),l=Hr(i);o=Hr(l)}var c=o.cloneNode(!0);return Qr(c,c),c}}function Yl(e,t){return Kl(e,t,"svg")}function st(e=""){{var t=Ut(e+"");return Qr(t,t),t}}function J(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Ut();return e.append(t,r),Qr(t,r),e}function v(e,t){e!==null&&e.before(t)}function C(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Zl(e,t){return Jl(e,t)}const qr=new Map;function Jl(e,{target:t,anchor:r,props:n={},events:a,context:o,intro:i=!0}){$l();var l=new Set,c=_=>{for(var m=0;m<_.length;m++){var p=_[m];if(!l.has(p)){l.add(p);var g=Ql(p);t.addEventListener(p,cn,{passive:g});var x=qr.get(p);x===void 0?(document.addEventListener(p,cn,{passive:g}),qr.set(p,1)):qr.set(p,x+1)}}};c(Va(ki)),Ta.add(c);var f=void 0,h=Ml(()=>{var _=r??t.appendChild(Ut());return bl(_,{pending:()=>{}},m=>{if(o){G({});var p=ze;p.c=o}a&&(n.$$events=a),f=e(m,n)||{},o&&H()}),()=>{for(var m of l){t.removeEventListener(m,cn);var p=qr.get(m);--p===0?(document.removeEventListener(m,cn),qr.delete(m)):qr.set(m,p)}Ta.delete(c),_!==r&&_.parentNode?.removeChild(_)}});return Xl.set(f,h),f}let Xl=new WeakMap;function I(e,t,r=!1){var n=e,a=null,o=null,i=He,l=r?$r:0,c=!1;const f=(p,g=!0)=>{c=!0,m(g,p)};var h=null;function _(){h!==null&&(h.lastChild.remove(),n.before(h),h=null);var p=i?a:o,g=i?o:a;p&&ea(p),g&&Bt(g,()=>{i?o=null:a=null})}const m=(p,g)=>{if(i!==(i=p)){var x=Zn(),b=n;if(x&&(h=document.createDocumentFragment(),h.append(b=Ut())),i?a??=g&&Fe(()=>g(b)):o??=g&&Fe(()=>g(b)),x){var $=Ne,M=i?a:o,E=i?o:a;M&&$.skipped_effects.delete(M),E&&$.skipped_effects.add(E),$.add_callback(_)}else _()}};Ht(()=>{c=!1,t(f),c||m(null,null)},l)}function Fl(e,t,r){var n=e,a=He,o,i,l=null,c=Xr()?dl:Fs;function f(){o&&Bt(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}Ht(()=>{if(c(a,a=t())){var h=n,_=Zn();_&&(l=document.createDocumentFragment(),l.append(h=Ut())),i=Fe(()=>r(h)),_?Ne.add_callback(f):f()}})}function ra(e,t){return t}function ec(e,t,r){for(var n=e.items,a=[],o=t.length,i=0;i<o;i++)Xa(t[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;Nl(c),c.append(r),n.clear(),Dt(e,t[0].prev,t[o-1].next)}yi(a,()=>{for(var f=0;f<o;f++){var h=t[f];l||(n.delete(h.k),Dt(e,h.prev,h.next)),et(h.e,!l)}})}function Le(e,t,r,n,a,o=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&Js)!==0;if(c){var f=e;i=f.appendChild(Ut())}var h=null,_=!1,m=new Map,p=Qa(()=>{var $=r();return Un($)?$:$==null?[]:Va($)}),g,x;function b(){tc(x,g,l,m,i,a,t,n,r),o!==null&&(g.length===0?h?ea(h):h=Fe(()=>o(i)):h!==null&&Bt(h,()=>{h=null}))}Ht(()=>{x??=de,g=s(p);var $=g.length;if(!(_&&$===0)){_=$===0;var M,E,S,P;if(Zn()){var k=new Set,R=Ne;for(E=0;E<$;E+=1){S=g[E],P=n(S,E);var A=l.items.get(P)??m.get(P);A?(t&(Hn|Qn))!==0&&Ii(A,S,E,t):(M=Di(null,l,null,null,S,P,E,a,t,r,!0),m.set(P,M)),k.add(P)}for(const[F,T]of l.items)k.has(F)||R.skipped_effects.add(T.e);R.add_callback(b)}else b();s(p)}})}function tc(e,t,r,n,a,o,i,l,c){var f=(i&Zo)!==0,h=(i&(Hn|Qn))!==0,_=t.length,m=r.items,p=r.first,g=p,x,b=null,$,M=[],E=[],S,P,k,R;if(f)for(R=0;R<_;R+=1)S=t[R],P=l(S,R),k=m.get(P),k!==void 0&&(k.a?.measure(),($??=new Set).add(k));for(R=0;R<_;R+=1){if(S=t[R],P=l(S,R),k=m.get(P),k===void 0){var A=n.get(P);if(A!==void 0){n.delete(P),m.set(P,A);var F=b?b.next:g;Dt(r,b,A),Dt(r,A,F),ga(A,F,a),b=A}else{var T=g?g.e.nodes_start:a;b=Di(T,r,b,b===null?r.first:b.next,S,P,R,o,i,c)}m.set(P,b),M=[],E=[],g=b.next;continue}if(h&&Ii(k,S,R,i),(k.e.f&Tt)!==0&&(ea(k.e),f&&(k.a?.unfix(),($??=new Set).delete(k))),k!==g){if(x!==void 0&&x.has(k)){if(M.length<E.length){var O=E[0],z;b=O.prev;var be=M[0],De=M[M.length-1];for(z=0;z<M.length;z+=1)ga(M[z],O,a);for(z=0;z<E.length;z+=1)x.delete(E[z]);Dt(r,be.prev,De.next),Dt(r,b,be),Dt(r,De,O),g=O,b=De,R-=1,M=[],E=[]}else x.delete(k),ga(k,g,a),Dt(r,k.prev,k.next),Dt(r,k,b===null?r.first:b.next),Dt(r,b,k),b=k;continue}for(M=[],E=[];g!==null&&g.k!==P;)(g.e.f&Tt)===0&&(x??=new Set).add(g),E.push(g),g=g.next;if(g===null)continue;k=g}M.push(k),b=k,g=k.next}if(g!==null||x!==void 0){for(var Se=x===void 0?[]:Va(x);g!==null;)(g.e.f&Tt)===0&&Se.push(g),g=g.next;var K=Se.length;if(K>0){var we=(i&Js)!==0&&_===0?a:null;if(f){for(R=0;R<K;R+=1)Se[R].a?.measure();for(R=0;R<K;R+=1)Se[R].a?.fix()}ec(r,Se,we)}}f&&Vt(()=>{if($!==void 0)for(k of $)k.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var D of n.values())et(D.e);n.clear()}function Ii(e,t,r,n){(n&Hn)!==0&&Gr(e.v,t),(n&Qn)!==0?Gr(e.i,r):e.i=r}function Di(e,t,r,n,a,o,i,l,c,f,h){var _=(c&Hn)!==0,m=(c&Jo)===0,p=_?m?Pl(a,!1,!1):or(a):a,g=(c&Qn)===0?i:or(i),x={i:g,v:p,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=Ut())}return x.e=Fe(()=>l(e,p,g,f),ul),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?h||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function ga(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=Pn(o);a.before(o),o=i}}function Dt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function se(e,t,...r){var n=e,a=ne,o;Ht(()=>{a!==(a=t())&&(o&&(et(o),o=null),o=Fe(()=>a(n,...r)))},$r)}function un(e,t,r){var n=e,a,o,i=null,l=null;function c(){o&&(Bt(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}Ht(()=>{if(a!==(a=t())){var f=Zn();if(a){var h=n;f&&(i=document.createDocumentFragment(),i.append(h=Ut()),o&&Ne.skipped_effects.add(o)),l=Fe(()=>r(h,a))}f?Ne.add_callback(c):c()}},$r)}function rc(e,t,r,n,a,o){var i,l,c=null,f=e,h;Ht(()=>{const _=t()||null;var m=il;_!==i&&(h&&(_===null?Bt(h,()=>{h=null,l=null}):_===l?ea(h):et(h)),_&&_!==l&&(h=Fe(()=>{if(c=document.createElementNS(m,_),Qr(c,c),n){var p=c.appendChild(Ut());n(c,p)}de.nodes_end=c,f.before(c)})),i=_,i&&(l=i))},$r)}function nc(e,t){var r=void 0,n;Ht(()=>{r!==(r=t())&&(n&&(et(n),n=null),r&&(n=Fe(()=>{Ja(()=>r(e))})))})}function Mi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Mi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function ac(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Mi(e))&&(n&&(n+=" "),n+=t);return n}function Ci(e){return typeof e=="object"?ac(e):e??""}const gs=[...` 	
\r\f \v\uFEFF`];function sc(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||gs.includes(n[i-1]))&&(l===n.length||gs.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function bs(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var o=e[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function ba(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ic(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(ba)),a&&c.push(...Object.keys(a).map(ba));var f=0,h=-1;const x=e.length;for(var _=0;_<x;_++){var m=e[_];if(l?m==="/"&&e[_-1]==="*"&&(l=!1):o?o===m&&(o=!1):m==="/"&&e[_+1]==="*"?l=!0:m==='"'||m==="'"?o=m:m==="("?i++:m===")"&&i--,!l&&o===!1&&i===0){if(m===":"&&h===-1)h=_;else if(m===";"||_===x-1){if(h!==-1){var p=ba(e.substring(f,h).trim());if(!c.includes(p)){m!==";"&&_++;var g=e.substring(f,_).trim();r+=" "+g+";"}}f=_+1,h=-1}}}}return n&&(r+=bs(n)),a&&(r+=bs(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ae(e,t,r,n,a,o){var i=e.__className;if(i!==r||i===void 0){var l=sc(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&a!==o)for(var c in o){var f=!!o[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return o}function ya(e,t={},r,n){for(var a in r){var o=r[a];t[a]!==o&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,n))}}function oc(e,t,r,n){var a=e.__style;if(a!==t){var o=ic(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(ya(e,r?.[0],n[0]),ya(e,r?.[1],n[1],"important")):ya(e,r,n));return n}function zn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Un(t))return ll();for(var n of e.options)n.selected=t.includes(pn(n));return}for(n of e.options){var a=pn(n);if(fi(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Ri(e){var t=new MutationObserver(()=>{zn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ya(()=>{t.disconnect()})}function Br(e,t,r=t){var n=!0;Xn(e,"change",a=>{var o=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),pn);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&pn(l)}r(i)}),Ja(()=>{var a=t();if(zn(e,a,n),n&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=pn(o),r(a))}e.__value=a,n=!1}),Ri(e)}function pn(e){return"__value"in e?e.__value:e.value}const sn=Symbol("class"),on=Symbol("style"),Oi=Symbol("is custom element"),qi=Symbol("is html");function lc(e,t){var r=na(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Vr(e,t){var r=na(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function cc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Vn(e,t,r,n){var a=na(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Bo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ji(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function uc(e,t,r,n,a=!1,o=!1){var i=na(e),l=i[Oi],c=!i[qi],f=t||{},h=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=Ci(r.class):r[sn]&&(r.class=null),r[on]&&(r.style??=null);var m=ji(e);for(const S in r){let P=r[S];if(h&&S==="value"&&P==null){e.value=e.__value="",f[S]=P;continue}if(S==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ae(e,p,P,n,t?.[sn],r[sn]),f[S]=P,f[sn]=r[sn];continue}if(S==="style"){oc(e,P,t?.[on],r[on]),f[S]=P,f[on]=r[on];continue}var g=f[S];if(!(P===g&&!(P===void 0&&e.hasAttribute(S)))){f[S]=P;var x=S[0]+S[1];if(x!=="$$")if(x==="on"){const k={},R="$$"+S;let A=S.slice(2);var b=Wl(A);if(zl(A)&&(A=A.slice(0,-7),k.capture=!0),!b&&g){if(P!=null)continue;e.removeEventListener(A,f[R],k),f[R]=null}if(P!=null)if(b)e[`__${A}`]=P,yt([A]);else{let F=function(T){f[S].call(this,T)};var E=F;f[R]=Ti(A,e,F,k)}else b&&(e[`__${A}`]=void 0)}else if(S==="style")Vn(e,S,P);else if(S==="autofocus")kl(e,!!P);else if(!l&&(S==="__value"||S==="value"&&P!=null))e.value=e.__value=P;else if(S==="selected"&&h)cc(e,P);else{var $=S;c||($=Gl($));var M=$==="defaultValue"||$==="defaultChecked";if(P==null&&!l&&!M)if(i[S]=null,$==="value"||$==="checked"){let k=e;const R=t===void 0;if($==="value"){let A=k.defaultValue;k.removeAttribute($),k.defaultValue=A,k.value=k.__value=R?A:null}else{let A=k.defaultChecked;k.removeAttribute($),k.defaultChecked=A,k.checked=R?A:!1}}else e.removeAttribute(S);else M||m.includes($)&&(l||typeof P!="string")?(e[$]=P,$ in i&&(i[$]=He)):typeof P!="function"&&Vn(e,$,P)}}}return f}function ys(e,t,r=[],n=[],a,o=!1,i=!1){oi(r,n,l=>{var c=void 0,f={},h=e.nodeName==="SELECT",_=!1;if(Ht(()=>{var p=t(...l.map(s)),g=uc(e,c,p,a,o,i);_&&h&&"value"in p&&zn(e,p.value);for(let b of Object.getOwnPropertySymbols(f))p[b]||et(f[b]);for(let b of Object.getOwnPropertySymbols(p)){var x=p[b];b.description===ol&&(!c||x!==c[b])&&(f[b]&&et(f[b]),f[b]=Fe(()=>nc(e,()=>x))),g[b]=x}c=g}),h){var m=e;Ja(()=>{zn(m,c.value,!0),Ri(m)})}_=!0})}function na(e){return e.__attributes??={[Oi]:e.nodeName.includes("-"),[qi]:e.namespaceURI===sl}}var ws=new Map;function ji(e){var t=e.getAttribute("is")||e.nodeName,r=ws.get(t);if(r)return r;ws.set(t,r=[]);for(var n,a=e,o=Element.prototype;o!==a;){n=Mo(a);for(var i in n)n[i].set&&r.push(i);a=Hs(a)}return r}function Ce(e,t,r=t){var n=new WeakSet;Xn(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Sa(e)?xa(o):o,r(o),Ne!==null&&n.add(Ne),await Bl(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),Fr(t)==null&&e.value&&(r(Sa(e)?xa(e.value):e.value),Ne!==null&&n.add(Ne)),Fn(()=>{var a=t();if(e===document.activeElement){var o=Cn??Ne;if(n.has(o))return}Sa(e)&&a===xa(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}const wa=new Set;function Ss(e,t,r,n,a=n){var o=r.getAttribute("type")==="checkbox",i=e;if(t!==null)for(var l of t)i=i[l]??=[];i.push(r),Xn(r,"change",()=>{var c=r.__value;o&&(c=fc(i,c,r.checked)),a(c)},()=>a(o?[]:null)),Fn(()=>{var c=n();o?(c=c||[],r.checked=c.includes(r.__value)):r.checked=fi(r.__value,c)}),Ya(()=>{var c=i.indexOf(r);c!==-1&&i.splice(c,1)}),wa.has(i)||(wa.add(i),Vt(()=>{i.sort((c,f)=>c.compareDocumentPosition(f)===4?-1:1),wa.delete(i)})),Vt(()=>{})}function dc(e,t,r=t){Xn(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),Fr(t)==null&&r(e.checked),Fn(()=>{var n=t();e.checked=!!n})}function fc(e,t,r){for(var n=new Set,a=0;a<e.length;a+=1)e[a].checked&&n.add(e[a].__value);return r||n.delete(t),Array.from(n)}function Sa(e){var t=e.type;return t==="number"||t==="range"}function xa(e){return e===""?null:+e}let Mn=!1;function vc(e){var t=Mn;try{return Mn=!1,[e(),Mn]}finally{Mn=t}}const hc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ie(e,t,r){return new Proxy({props:e,exclude:t},hc)}const pc={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(an(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];an(a)&&(a=a());const o=ar(a,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(an(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=ar(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===wr||t===Ys)return!1;for(let r of e.props)if(an(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(an(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function le(...e){return new Proxy({props:e},pc)}function jt(e,t,r,n){var a=!Jr||(r&Fo)!==0,o=(r&tl)!==0,i=(r&rl)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?Fr(n):n),l),h;if(o){var _=wr in e||Ys in e;h=ar(e,t)?.set??(_&&t in e?E=>e[t]=E:void 0)}var m,p=!1;o?[m,p]=vc(()=>e[t]):m=e[t],m===void 0&&n!==void 0&&(m=f(),h&&(a&&Go(),h(m)));var g;if(a?g=()=>{var E=e[t];return E===void 0?f():(c=!0,E)}:g=()=>{var E=e[t];return E!==void 0&&(l=void 0),E===void 0?l:E},a&&(r&el)===0)return g;if(h){var x=e.$$legacy;return(function(E,S){return arguments.length>0?((!a||!S||x||p)&&h(S?g():E),E):g()})}var b=!1,$=((r&Xo)!==0?Yn:Qa)(()=>(b=!1,g()));o&&s($);var M=de;return(function(E,S){if(arguments.length>0){const P=S?s($):a&&o?Ue(E):E;return N($,P),b=!0,l!==void 0&&(l=P),E}return Nr&&b||(M.f&Pr)!==0?$.v:s($)})}function Bi(e){ze===null&&Zs(),Jr&&ze.l!==null?mc(ze).m.push(e):Za(()=>{const t=Fr(e);if(typeof t=="function")return t})}function _c(e){ze===null&&Zs(),Bi(()=>()=>Fr(e))}function mc(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const gc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(gc);const bc="modulepreload",yc=function(e){return"/"+e},xs={},wc=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(h){return Promise.all(h.map(_=>Promise.resolve(_).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(h=>{if(h=yc(h),h in xs)return;xs[h]=!0;const _=h.endsWith(".css"),m=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const p=document.createElement("link");if(p.rel=_?"stylesheet":bc,_||(p.as="script"),p.crossOrigin="",p.href=h,c&&p.setAttribute("nonce",c),document.head.appendChild(p),_)return new Promise((g,x)=>{p.addEventListener("load",g),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};class Sc extends Map{#e=new Map;#r=X(0);#c=X(0);#u=zt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#o(t){return zt===this.#u?X(t):or(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#o(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#s(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#o(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#r;if(a===void 0)a=this.#o(0),n.set(t,a),N(this.#c,super.size),Ct(l);else if(o!==r){Ct(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(h=>c.has(h));f&&Ct(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),N(this.#c,super.size),N(n,-1),Ct(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;N(this.#c,0);for(var r of t.values())N(r,-1);Ct(this.#r),t.clear()}}#s(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#o(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}class xc{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class Li{constructor(t){this.generateIdentifier=t,this.kv=new xc}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class Ec extends Li{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function Pc(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function $c(e,t){const r=Pc(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const o=n[a];if(t(o))return o}}function Kr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function Rn(e,t){return e.indexOf(t)!==-1}function Es(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class Nc{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return $c(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const kc=e=>Object.prototype.toString.call(e).slice(8,-1),zi=e=>typeof e>"u",Tc=e=>e===null,yn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Aa=e=>yn(e)&&Object.keys(e).length===0,lr=e=>Array.isArray(e),Ac=e=>typeof e=="string",Ic=e=>typeof e=="number"&&!isNaN(e),Dc=e=>typeof e=="boolean",Mc=e=>e instanceof RegExp,wn=e=>e instanceof Map,Sn=e=>e instanceof Set,Vi=e=>kc(e)==="Symbol",Cc=e=>e instanceof Date&&!isNaN(e.valueOf()),Rc=e=>e instanceof Error,Ps=e=>typeof e=="number"&&isNaN(e),Oc=e=>Dc(e)||Tc(e)||zi(e)||Ic(e)||Ac(e)||Vi(e),qc=e=>typeof e=="bigint",jc=e=>e===1/0||e===-1/0,Bc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),Lc=e=>e instanceof URL,Wi=e=>e.replace(/\./g,"\\."),Ea=e=>e.map(String).map(Wi).join("."),_n=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let o=e.charAt(a);if(o==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(o==="."){t.push(r),r="";continue}r+=o}const n=r;return t.push(n),t};function It(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Ui=[It(zi,"undefined",()=>null,()=>{}),It(qc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),It(Cc,"Date",e=>e.toISOString(),e=>new Date(e)),It(Rc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),It(Mc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),It(Sn,"set",e=>[...e.values()],e=>new Set(e)),It(wn,"map",e=>[...e.entries()],e=>new Map(e)),It(e=>Ps(e)||jc(e),"number",e=>Ps(e)?"NaN":e>0?"Infinity":"-Infinity",Number),It(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),It(Lc,"URL",e=>e.toString(),e=>new URL(e))];function aa(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Gi=aa((e,t)=>Vi(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),zc=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),Hi=aa(Bc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=zc[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function Qi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const Ki=aa(Qi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),Yi=aa((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Vc=[Ki,Gi,Yi,Hi],$s=(e,t)=>{const r=Es(Vc,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Es(Ui,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},Zi={};Ui.forEach(e=>{Zi[e.annotation]=e});const Wc=(e,t,r)=>{if(lr(t))switch(t[0]){case"symbol":return Gi.untransform(e,t,r);case"class":return Ki.untransform(e,t,r);case"custom":return Yi.untransform(e,t,r);case"typed-array":return Hi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=Zi[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Lr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function Ji(e){if(Rn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(Rn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(Rn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const Uc=(e,t)=>{Ji(t);for(let r=0;r<t.length;r++){const n=t[r];if(Sn(e))e=Lr(e,+n);else if(wn(e)){const a=+n,o=+t[++r]==0?"key":"value",i=Lr(e,a);switch(o){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Ia=(e,t,r)=>{if(Ji(t),t.length===0)return r(e);let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];if(lr(n)){const l=+i;n=n[l]}else if(yn(n))n=n[i];else if(Sn(n)){const l=+i;n=Lr(n,l)}else if(wn(n)){if(o===t.length-2)break;const c=+i,f=+t[++o]==0?"key":"value",h=Lr(n,c);switch(f){case"key":n=h;break;case"value":n=n.get(h);break}}}const a=t[t.length-1];if(lr(n)?n[+a]=r(n[+a]):yn(n)&&(n[a]=r(n[a])),Sn(n)){const o=Lr(n,+a),i=r(o);o!==i&&(n.delete(o),n.add(i))}if(wn(n)){const o=+t[t.length-2],i=Lr(n,o);switch(+a==0?"key":"value"){case"key":{const c=r(i);n.set(c,n.get(i)),c!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Da(e,t,r=[]){if(!e)return;if(!lr(e)){Kr(e,(o,i)=>Da(o,t,[...r,..._n(i)]));return}const[n,a]=e;a&&Kr(a,(o,i)=>{Da(o,t,[...r,..._n(i)])}),t(n,r)}function Gc(e,t,r){return Da(t,(n,a)=>{e=Ia(e,a,o=>Wc(o,n,r))}),e}function Hc(e,t){function r(n,a){const o=Uc(e,_n(a));n.map(_n).forEach(i=>{e=Ia(e,i,()=>o)})}if(lr(t)){const[n,a]=t;n.forEach(o=>{e=Ia(e,_n(o),()=>e)}),a&&Kr(a,r)}else Kr(t,r);return e}const Qc=(e,t)=>yn(e)||lr(e)||wn(e)||Sn(e)||Qi(e,t);function Kc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Yc(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[o,...i]=a;o.length===0?n=i.map(Ea):r[Ea(o)]=i.map(Ea)}),n?Aa(r)?[n]:[n,r]:Aa(r)?void 0:r}const Xi=(e,t,r,n,a=[],o=[],i=new Map)=>{const l=Oc(e);if(!l){Kc(e,a,t);const p=i.get(e);if(p)return n?{transformedValue:null}:p}if(!Qc(e,r)){const p=$s(e,r),g=p?{transformedValue:p.value,annotations:[p.type]}:{transformedValue:e};return l||i.set(e,g),g}if(Rn(o,e))return{transformedValue:null};const c=$s(e,r),f=c?.value??e,h=lr(f)?[]:{},_={};Kr(f,(p,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const x=Xi(p,t,r,n,[...a,g],[...o,e],i);h[g]=x.transformedValue,lr(x.annotations)?_[g]=x.annotations:yn(x.annotations)&&Kr(x.annotations,(b,$)=>{_[Wi(g)+"."+$]=b})});const m=Aa(_)?{transformedValue:h,annotations:c?[c.type]:void 0}:{transformedValue:h,annotations:c?[c.type,_]:_};return l||i.set(e,m),m};function Fi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Ns(e){return Fi(e)==="Array"}function Zc(e){if(Fi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Jc(e,t,r,n,a){const o={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),a&&o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Ma(e,t={}){if(Ns(e))return e.map(a=>Ma(a,t));if(!Zc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,o)=>{if(Ns(t.props)&&!t.props.includes(o))return a;const i=e[o],l=Ma(i,t);return Jc(a,o,l,e,t.nonenumerable),a},{})}class he{constructor({dedupe:t=!1}={}){this.classRegistry=new Ec,this.symbolRegistry=new Li(r=>r.description??""),this.customTransformerRegistry=new Nc,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=Xi(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const o=Yc(r,this.dedupe);return o&&(a.meta={...a.meta,referentialEqualities:o}),a}deserialize(t){const{json:r,meta:n}=t;let a=Ma(r);return n?.values&&(a=Gc(a,n.values,this)),n?.referentialEqualities&&(a=Hc(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}he.defaultInstance=new he;he.serialize=he.defaultInstance.serialize.bind(he.defaultInstance);he.deserialize=he.defaultInstance.deserialize.bind(he.defaultInstance);he.stringify=he.defaultInstance.stringify.bind(he.defaultInstance);he.parse=he.defaultInstance.parse.bind(he.defaultInstance);he.registerClass=he.defaultInstance.registerClass.bind(he.defaultInstance);he.registerSymbol=he.defaultInstance.registerSymbol.bind(he.defaultInstance);he.registerCustom=he.defaultInstance.registerCustom.bind(he.defaultInstance);he.allowErrorProps=he.defaultInstance.allowErrorProps.bind(he.defaultInstance);he.serialize;he.deserialize;he.stringify;he.parse;he.registerClass;he.registerCustom;he.registerSymbol;he.allowErrorProps;function Xc(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function Fc(e,t){return`${e}_${t}`}const eu=typeof window<"u"?window:void 0;function tu(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class ru{#e;#r;constructor(t={}){const{window:r=eu,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=ii(a=>{const o=_s(r,"focusin",a),i=_s(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?tu(this.#e):null}}new ru;function nu(e){return typeof e=="function"}function au(e,t){if(nu(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function su(e,t){let r=X(null);const n=U(()=>au(t,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const c=new Promise((f,h)=>{i=f,l=h});N(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);N(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),N(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function iu(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),o=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return o.length?mn(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function dn(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function On(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function mn(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function qn(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>Ca(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,c)=>{const f=n.get(c)||0,h=l-f;h>0&&(a.push({q:h,u:c}),o.push(Ca(h.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function jr(e){return e?.length?e.map(t=>Ca(t.q.toString(),t.u)).join(" et "):"-"}function Ca(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function ks(e){return dn(e)}function ou(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function lu(e,t){return e[t]?.recipes||[]}function cu(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([o])=>{const i=new Date(o);return i>=n&&i<=a}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function uu(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function du(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function fu(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function vu(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return ou(t)}function hu(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class w{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}w.equal=(e,t)=>new w("equal",e,t).toString();w.notEqual=(e,t)=>new w("notEqual",e,t).toString();w.lessThan=(e,t)=>new w("lessThan",e,t).toString();w.lessThanEqual=(e,t)=>new w("lessThanEqual",e,t).toString();w.greaterThan=(e,t)=>new w("greaterThan",e,t).toString();w.greaterThanEqual=(e,t)=>new w("greaterThanEqual",e,t).toString();w.isNull=e=>new w("isNull",e).toString();w.isNotNull=e=>new w("isNotNull",e).toString();w.between=(e,t,r)=>new w("between",e,[t,r]).toString();w.startsWith=(e,t)=>new w("startsWith",e,t).toString();w.endsWith=(e,t)=>new w("endsWith",e,t).toString();w.select=e=>new w("select",void 0,e).toString();w.search=(e,t)=>new w("search",e,t).toString();w.orderDesc=e=>new w("orderDesc",e).toString();w.orderAsc=e=>new w("orderAsc",e).toString();w.orderRandom=()=>new w("orderRandom").toString();w.cursorAfter=e=>new w("cursorAfter",void 0,e).toString();w.cursorBefore=e=>new w("cursorBefore",void 0,e).toString();w.limit=e=>new w("limit",void 0,e).toString();w.offset=e=>new w("offset",void 0,e).toString();w.contains=(e,t)=>new w("contains",e,t).toString();w.notContains=(e,t)=>new w("notContains",e,t).toString();w.notSearch=(e,t)=>new w("notSearch",e,t).toString();w.notBetween=(e,t,r)=>new w("notBetween",e,[t,r]).toString();w.notStartsWith=(e,t)=>new w("notStartsWith",e,t).toString();w.notEndsWith=(e,t)=>new w("notEndsWith",e,t).toString();w.createdBefore=e=>new w("createdBefore",void 0,e).toString();w.createdAfter=e=>new w("createdAfter",void 0,e).toString();w.createdBetween=(e,t)=>new w("createdBetween",void 0,[e,t]).toString();w.updatedBefore=e=>new w("updatedBefore",void 0,e).toString();w.updatedAfter=e=>new w("updatedAfter",void 0,e).toString();w.updatedBetween=(e,t)=>new w("updatedBetween",void 0,[e,t]).toString();w.or=e=>new w("or",void 0,e.map(t=>JSON.parse(t))).toString();w.and=e=>new w("and",void 0,e.map(t=>JSON.parse(t))).toString();w.distanceEqual=(e,t,r,n=!0)=>new w("distanceEqual",e,[[t,r,n]]).toString();w.distanceNotEqual=(e,t,r,n=!0)=>new w("distanceNotEqual",e,[[t,r,n]]).toString();w.distanceGreaterThan=(e,t,r,n=!0)=>new w("distanceGreaterThan",e,[[t,r,n]]).toString();w.distanceLessThan=(e,t,r,n=!0)=>new w("distanceLessThan",e,[[t,r,n]]).toString();w.intersects=(e,t)=>new w("intersects",e,[t]).toString();w.notIntersects=(e,t)=>new w("notIntersects",e,[t]).toString();w.crosses=(e,t)=>new w("crosses",e,[t]).toString();w.notCrosses=(e,t)=>new w("notCrosses",e,[t]).toString();w.overlaps=(e,t)=>new w("overlaps",e,[t]).toString();w.notOverlaps=(e,t)=>new w("notOverlaps",e,[t]).toString();w.touches=(e,t)=>new w("touches",e,[t]).toString();w.notTouches=(e,t)=>new w("notTouches",e,[t]).toString();var eo,to;class xn{static custom(t){return t}static unique(t=7){const r=hu(xn,eo,"m",to).call(xn);let n="";for(let a=0;a<t;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}eo=xn,to=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Ts;(function(e){e.Totp="totp"})(Ts||(Ts={}));var As;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(As||(As={}));var Is;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Is||(Is={}));var Ds;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Ds||(Ds={}));var Ms;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ms||(Ms={}));var Cs;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Cs||(Cs={}));var Rs;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Rs||(Rs={}));var Os;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Os||(Os={}));var qs;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(qs||(qs={}));function ro(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Ot(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function pu(e,t,r=100){try{const{databases:n,config:a}=await Ot(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[w.greaterThan("$updatedAt",t),w.equal("mainId",e),w.limit(r),w.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function no(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:o}=await Ot();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[w.equal("mainId",e),w.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),w.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[w.greaterThan("$updatedAt",r),w.equal("mainId",e),w.limit(n),w.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function Yr(e,t){try{const{databases:r,config:n}=await Ot();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function fn(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=ro(n,t),{databases:o,config:i}=await Ot(),l=await o.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function ao(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Yr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Ra(e,t){return Yr(e,{who:t})}async function Oa(e,t){return Yr(e,{stockReel:t})}async function so(e){try{const{databases:t,config:r}=await Ot(),o=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:o.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,xn.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function io(e,t){try{const{databases:r,config:n}=await Ot(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function oo(e){try{const{databases:t,config:r}=await Ot();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function lo(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Ot(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[w.equal("$id",e),w.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function co(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(p=>p.includes("products.")),f=i.some(p=>p.includes("purchases.")),h=i.some(p=>p.includes(".create")),_=i.some(p=>p.includes(".update")),m=i.some(p=>p.includes(".delete"));if(c){const p=l;h&&t.onProductCreate?t.onProductCreate(p):_&&t.onProductUpdate?t.onProductUpdate(p):m&&t.onProductDelete&&t.onProductDelete(p.$id)}else if(f){const p=l;h&&t.onPurchaseCreate?t.onPurchaseCreate(p):_&&t.onPurchaseUpdate?t.onPurchaseUpdate(p):m&&t.onPurchaseDelete&&t.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function uo(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Ot(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function fo(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Ot(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function Fa(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function vo(e,t,r,n){return Fa({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function ho(e,t,r,n="replace"){return Fa({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}const _u=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:Fa,batchUpdateStore:vo,batchUpdateWho:ho,createMainDocument:fo,createPurchase:so,deletePurchase:oo,enrichedProductToAppwriteProduct:ro,loadMainEventData:uo,loadPurchasesListByIds:lo,loadUpdatedPurchases:pu,subscribeToRealtime:co,syncProductsWithPurchases:no,updateProduct:Yr,updateProductStock:Oa,updateProductStore:ao,updateProductWho:Ra,updatePurchase:io,upsertProduct:fn},Symbol.toStringTag,{value:"Module"}));async function mu(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function gu(e,t){const r=vu(e.byDate),n=mn(On([])),{numeric:a,display:o}=qn(r,n);return{$id:`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockArray:[],totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:jr(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function bu(e,t){return e.map(r=>gu(r,t))}const js=1e3,yu=500;class wu{#e=new Sc;#r=X(null);#c=X(!1);#u=X(!1);#o=X(null);#s=X(!1);#i=X(!1);#n=X(Ue([]));#a=X(null);#d=X(null);get startDate(){return s(this.#d)}set startDate(t){N(this.#d,t,!0)}#f=X(null);get endDate(){return s(this.#f)}set endDate(t){N(this.#f,t,!0)}#l=null;#v=null;#h=null;#p=null;#x=X(!1);#t=X(Ue({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#o)}get allDates(){return s(this.#n)}get syncing(){return s(this.#s)}setDateRange(t,r){this.startDate=t,this.endDate=r}initializeDateRange(){if((!this.startDate||!this.endDate)&&s(this.#n).length>0){const t=[...s(this.#n)].sort();this.startDate=t[0],this.endDate=t[t.length-1]}console.log(`[ProductsStore] Date range initialized: ${this.startDate} - ${this.endDate}`)}get firstDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort()[0]}get lastDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort().pop()}get realtimeConnected(){return s(this.#i)}get hugoContentChanged(){return s(this.#x)}getTotalNeededInRange(t){return this.totalNeededByDateRange.get(t)??[]}getFormattedTotalNeeded(t){const r=this.getTotalNeededInRange(t);return r.length>0?jr(r):"-"}#E=U(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#E)}set enrichedProducts(t){N(this.#E,t)}#g=U(()=>{if(console.log("[Store] Recalcul totalNeededByDateRange"),this.startDate===this.firstDate&&this.endDate===this.lastDate)return console.log("[Store] Full date range - using totalNeededArray (no calculation)"),new Map(this.enrichedProducts.map(n=>[n.$id,n.totalNeededArray]));const r=new Map;for(const n of this.enrichedProducts)if(n.byDate){const a=du(n.byDate),o=iu(a,this.startDate,this.endDate);o.length>0&&r.set(n.$id,o)}return r});get totalNeededByDateRange(){return s(this.#g)}set totalNeededByDateRange(t){N(this.#g,t)}#b=U(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const a=jr(r);t.set(n,a)}),t});get formattedTotalNeededByDateRange(){return s(this.#b)}set formattedTotalNeededByDateRange(t){N(this.#b,t)}#y=U(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#y)}set stats(t){N(this.#y,t)}#$=U(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#$)}set uniqueStores(t){N(this.#$,t)}#N=U(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#N)}set uniqueWho(t){N(this.#N,t)}#k=U(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#k)}set uniqueProductTypes(t){N(this.#k,t)}#T=U(()=>new Set(this.totalNeededByDateRange.keys()));get relevantProductIds(){return s(this.#T)}set relevantProductIds(t){N(this.#T,t)}#A=U(()=>{const t=this.enrichedProducts.filter(r=>this.#V(r)&&this.relevantProductIds.has(r.$id));return s(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get displayProducts(){return s(this.#A)}set displayProducts(t){N(this.#A,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),N(this.#r,t,!0),this.#l=Fc("products-enriched",t),N(this.#o,null);try{if(await this.#C(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await mu(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),bu(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),N(this.#n,n.allDates,!0),await uo(t)||await fo(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),this.#I()}this.initializeDateRange(),await this.#R(),N(this.#c,!0);const r=this.#z();this.#h=co(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw N(this.#o,n,!0),console.error("[ProductsStore]",n,r),r}}async#C(){if(this.#l)try{const t=localStorage.getItem(this.#l);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:a}=he.parse(t);r.forEach(([o,i])=>this.#e.set(o,i)),N(this.#a,n,!0),N(this.#n,a||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${a?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}async#R(){if(s(this.#r)){N(this.#s,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const t=await no(s(this.#r),{lastSync:s(this.#a),limit:js});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#D(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await wc(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>_u);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#a),js);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#P(o,a)}})}this.#m(),this.#_(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{N(this.#s,!1)}}}#I(){if(this.#l)try{const t={lastSync:s(this.#a),products:Array.from(this.#e.entries()),allDates:s(this.#n)};localStorage.setItem(this.#l,he.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}#_(){this.#p&&clearTimeout(this.#p),this.#p=setTimeout(()=>{this.#I(),this.#p=null},yu)}#m(){N(this.#a,new Date().toISOString(),!0)}#D(t,r){return r?this.#w(t,r):this.#O(t)}#O(t){const r=mn(On(t.purchases??[])),n=[],{numeric:a,display:o}=qn(n,r),i=dn(t.stockReel)??[],l=jr(r),c=t.store?dn(t.store):null,f=i.length>0?`${i[i.length-1].quantity} ${i[i.length-1].unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:c,stockArray:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:ks(t.totalNeededOverride)}}#w(t,r){const n=t.purchases??r.purchases,a=mn(On(n??[])),o=jr(a),{numeric:i,display:l}=qn(r.totalNeededArray,a),c=t.stockReel??r.stockReel,f=c?dn(c)??[]:[],h=t.store??r.store,_=h?dn(h):r.storeInfo,m=f.length>0?`${f[f.length-1].quantity} ${f[f.length-1].unit}`:o;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:h,stockReel:c,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:_,stockArray:f,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:m,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:ks(t.totalNeededOverride??r.totalNeededOverride)}}#W(t){t.totalPurchasesArray=mn(On(t.purchases??[]));const{numeric:r,display:n}=qn(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=jr(t.totalPurchasesArray)}#U(t){t.length&&(t.forEach(r=>this.#S(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#S(t){const r=this.#e.get(t.$id),n=this.#D(t,r);this.#e.set(t.$id,n)}#q(t){this.#e.delete(t)}async#j(t){if(!t.products?.length){console.warn("[ProductsStore] Purchase créé sans products:",t.$id);return}const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#L(r,t)}async#B(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#P(r,t);return}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await lo([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);this.#P(n,r)}}catch(r){console.error("[ProductsStore] Erreur rechargement purchase:",r)}}#M(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#L(t,r){const n=this.#M(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#w({...i,purchases:[...l,n]},i);a.push(c)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#P(t,r){const n=this.#M(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const h=this.#w({...i,purchases:f},i);a.push(h)}else{const f=this.#w({...i,purchases:[...l,r]},i);a.push(f)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#z(){return{onProductCreate:t=>{this.#S(t),this.#m(),this.#_()},onProductUpdate:t=>{this.#S(t),this.#m(),this.#_()},onProductDelete:t=>{this.#q(t),this.#m(),this.#_()},onPurchaseCreate:t=>{this.#j(t),this.#m(),this.#_()},onPurchaseUpdate:t=>{this.#B(t),this.#m(),this.#_()},onPurchaseDelete:t=>{Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t)).forEach(n=>{this.#S(n)}),this.#m(),this.#_()},onConnect:()=>{N(this.#i,!0)},onDisconnect:()=>{N(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#V(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=su(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){N(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],o=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#t).sortDirection==="asc"?-1:1:a>o?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDate?lu(n.byDate,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDate&&n.byDate[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDate?uu(r.byDate):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDate?Object.keys(r.byDate).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?0:cu(r.byDate,this.startDate,this.endDate)}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?[]:Object.keys(r.byDate).filter(a=>{const o=new Date(a),i=this.startDate?new Date(this.startDate):null,l=this.endDate?new Date(this.endDate):null;return i&&l&&o>=i&&o<=l}).flatMap(a=>r.byDate[a]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){this.clearCache(),await this.initialize(t)}clearCache(){this.#e.clear(),N(this.#n,[],!0),N(this.#a,null),this.#l&&localStorage.removeItem(this.#l),this.#v&&localStorage.removeItem(this.#v),console.log("[ProductsStore] Cache vidé")}destroy(){this.#h?.(),this.#h=null,this.#p&&(clearTimeout(this.#p),this.#p=null),console.log("[ProductsStore] Ressources nettoyées")}}const B=new wu;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Su={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var xu=Yl("<svg><!><!></svg>");function ce(e,t){G(t,!0);const r=jt(t,"color",3,"currentColor"),n=jt(t,"size",3,24),a=jt(t,"strokeWidth",3,2),o=jt(t,"absoluteStrokeWidth",3,!1),i=jt(t,"iconNode",19,()=>[]),l=ie(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=xu();ys(c,_=>({...Su,...l,width:n(),height:n(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var f=u(c);Le(f,17,i,ra,(_,m)=>{var p=U(()=>Ks(s(m),2));let g=()=>s(p)[0],x=()=>s(p)[1];var b=J(),$=L(b);rc($,g,!0,(M,E)=>{ys(M,()=>({...x()}))}),v(_,b)});var h=d(f);se(h,()=>t.children??ne),v(e,c),H()}function qa(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ce(e,le({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Eu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ce(e,le({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Pu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ce(e,le({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function $u(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ce(e,le({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Nu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ce(e,le({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Bs(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];ce(e,le({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function ku(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ce(e,le({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Tu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ce(e,le({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Au(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ce(e,le({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Iu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];ce(e,le({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Du(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];ce(e,le({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Mu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];ce(e,le({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function es(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ce(e,le({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Cu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ce(e,le({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function ja(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ce(e,le({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Ls(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ce(e,le({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Ru(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ce(e,le({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Ou(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ce(e,le({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function qu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ce(e,le({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function ju(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ce(e,le({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function po(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ce(e,le({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Bu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ce(e,le({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function $n(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ce(e,le({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Lu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];ce(e,le({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function zu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Vu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ce(e,le({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Wu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ce(e,le({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Uu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ce(e,le({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Ba(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ce(e,le({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function En(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ce(e,le({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function La(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ce(e,le({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function _o(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ce(e,le({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function ir(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ce(e,le({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Gu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ce(e,le({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function mo(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ce(e,le({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Hu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];ce(e,le({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function ts(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ce(e,le({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Wn(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ce(e,le({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function Qu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ce(e,le({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function _t(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=J(),l=L(i);se(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),H()}function jn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Eu};case"animaux":return{displayName:"Viandes et Poissons",icon:Pu};case"legumes":return{displayName:"Fruits et Légumes",icon:Nu};case"sucres":return{displayName:"Sucrées",icon:$u};case"lof":return{displayName:"L.O.F",icon:Cu};case"autres":return{displayName:"Autres",icon:ku};case"epices":return{displayName:"Assaisonnements",icon:Ru};case"frais":return{displayName:"Produits Frais",icon:Vu};default:return{displayName:e,icon:$n}}}function zs(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function sa(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function ia(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Ku(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Yu(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],o=n[t.sortColumn];return a<o?t.sortDirection==="asc"?-1:1:a>o?t.sortDirection==="asc"?1:-1:0}):e}function za(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function Vs(e){return e?ia(e):"-"}function Zu(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=za(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Ju(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function Ju(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ShoppingCart";case"pending":return"Clock";case"delivered":return"CircleCheck";case"cancelled":return"CircleX";default:return"Package"}}let Ws=()=>localStorage.getItem("appwrite-user-name")||"";function Xu(e){let t=X(!1),r=X(null);const n=U(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),B.getEnrichedProductById(e))),a=U(()=>s(n)?.who??[]),o=U(()=>s(n)?.stockArray??[]),i=U(()=>s(n)?.purchases??[]),l=U(()=>s(n)?.byDate?fu(s(n).byDate):[]),c=Ue({purchase:{quantity:null,unit:"",store:"",who:Ws()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});let f=X(!1);Za(()=>{!s(n)||s(f)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=Ws()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??null,c.store.comment=s(n).storeInfo?.storeComment??null,N(f,!0))});let h=X(null);const _=U(()=>s(h)?s(i).find(T=>T.$id===s(h))??null:null);async function m(T,O){N(t,!0),N(r,null);try{const z=await T();return O&&p("success",O),z}catch(z){const be=z instanceof Error?z.message:"Une erreur est survenue";return N(r,be,!0),p("error",be),console.error("[ProductModalState]",z),null}finally{N(t,!1)}}function p(T,O){const z=new CustomEvent("toast",{detail:{type:T,message:O}});window.dispatchEvent(z)}async function g(){s(n)&&await m(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!B.currentMainId)throw new Error("mainId non disponible");const{quantity:T,unit:O}=zs(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await fn(s(n).$id,{},z=>B.getEnrichedProductById(z))),await so({products:[s(n).$id],mainId:B.currentMainId,unit:O,quantity:T,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:c.purchase.status||"delivered",orderDate:c.purchase.orderDate||null,deliveryDate:c.purchase.deliveryDate||null}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function x(T){N(h,T.$id,!0)}function b(){N(h,null)}async function $(T){T.$id&&await m(async()=>{const{quantity:O,unit:z}=zs(T.quantity,T.unit);await io(T.$id,{unit:z,quantity:O,store:T.store||null,who:T.who||null,notes:T.notes||"",price:T.price||null,status:T.status||null,orderDate:T.orderDate||null,deliveryDate:T.deliveryDate||null}),N(h,null)},"Achat modifié avec succès")}async function M(T){const O=s(i).find(z=>z.$id===T);O&&confirm(`Supprimer cet achat (${O.quantity} ${O.unit}) ?`)&&await m(async()=>{await oo(T)},"Achat supprimé avec succès")}async function E(){s(n)&&await m(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const T={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime},O=[...s(o),T];s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Oa(s(n).$id,JSON.stringify(O))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await fn(s(n).$id,{stockReel:JSON.stringify(O)},z=>B.getEnrichedProductById(z))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Relevé de stock ajouté")}async function S(T){s(n)&&confirm("Supprimer ce relevé de stock ?")&&await m(async()=>{const O=s(o).filter((z,be)=>be!==T);await Oa(s(n).$id,JSON.stringify(O))},"Relevé de stock supprimé")}async function P(T){!s(n)||!T.trim()||await m(async()=>{if(s(a).includes(T))throw new Error("Ce volontaire est déjà ajouté");const O=[...s(a),T.trim()];s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update normal...`),await Ra(s(n).$id,O)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création avec upsert...`),await fn(s(n).$id,{who:O},z=>B.getEnrichedProductById(z)))},"Volontaire ajouté")}async function k(T){s(n)&&confirm(`Retirer ${T} ?`)&&await m(async()=>{await Ra(s(n).$id,s(a).filter(O=>O!==T))},"Volontaire retiré")}async function R(T){s(n)&&await m(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await ao(s(n).$id,T)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await fn(s(n).$id,{store:JSON.stringify(T)},O=>B.getEnrichedProductById(O)))},"Magasin mis à jour")}async function A(T){s(n)&&await m(async()=>{await Yr(s(n).$id,{totalNeededOverride:JSON.stringify(T)})},"Override appliqué")}async function F(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await m(async()=>{await Yr(s(n).$id,{totalNeededOverride:null})},"Override supprimé")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockEntries(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(h)},get editingPurchaseData(){return s(_)},forms:c,addPurchase:g,startEditPurchase:x,cancelEditPurchase:b,updateEditedPurchase:$,removePurchase:M,addStock:E,removeStock:S,addVolunteer:P,removeVolunteer:k,updateStore:R,setOverride:A,removeOverride:F,formatQuantity:sa,formatDate:ia,formatDisplayQuantity:Ku}}function Fu(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function ed(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function td(e,t){t().cancelEditPurchase()}var rd=y('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),nd=y('<span class="loading loading-spinner loading-sm"></span>'),ad=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),sd=y('<span class="loading loading-spinner loading-sm"></span>'),id=y('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),od=(e,t,r)=>t(s(r)),ld=(e,t,r)=>t(s(r).$id),cd=y('<span class="loading loading-spinner loading-sm"></span>'),ud=y('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),dd=y('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),fd=y(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Notes" maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function vd(e,t){G(t,!0);let r=jt(t,"modalState",7);function n(){return r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(Z){return Z.quantity!==null&&Z.quantity!==0&&Z.unit?.trim()!==""}function o(Z){r().removePurchase(Z)}function i(Z){r().startEditPurchase(Z)}var l=fd(),c=u(l),f=u(c);En(f,{class:"h-5 w-5"});var h=d(c,2),_=u(h),m=d(u(_),2),p=u(m),g=u(p);$n(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2),b=d(p,2),$=u(b);$.value=$.__value="";var M=d($);M.value=M.__value="kg";var E=d(M);E.value=E.__value="gr.";var S=d(E);S.value=S.__value="l.";var P=d(S);P.value=P.__value="ml";var k=d(P);k.value=k.__value="unité";var R=d(k);R.value=R.__value="bottes";var A=d(b,2),F=u(A);ir(F,{class:"h-4 w-4 opacity-50"});var T=d(F,2),O=d(A,2),z=u(O);ts(z,{class:"h-4 w-4 opacity-50"});var be=d(z,2),De=d(O,2),Se=d(u(De),2),K=d(m,2),we=u(K),D=u(we);po(D,{class:"h-4 w-4 opacity-50"});var re=d(D,2),pe=d(K,2),Pe=u(pe),Me=u(Pe),Re=u(Me),Qe=u(Re);Qe.value=Qe.__value="delivered";var ue=d(Qe);ue.value=ue.__value="requested";var ye=d(ue);ye.value=ye.__value="ordered";var ae=d(Me,2),xe=d(Pe,2);{var Oe=Z=>{var Te=rd(),Je=d(u(Te),2);Ce(Je,()=>r().forms.purchase.deliveryDate,Ke=>r().forms.purchase.deliveryDate=Ke),v(Z,Te)};I(xe,Z=>{r().forms.purchase.status==="ordered"&&Z(Oe)})}var V=d(pe,2),W=u(V);W.__click=[Fu,n,r];var q=u(W);{var Y=Z=>{var Te=nd();v(Z,Te)},_e=Z=>{var Te=st("Ajouter l'achat");v(Z,Te)};I(q,Z=>{r().loading?Z(Y):Z(_e,!1)})}var ke=d(h,2);{var ot=Z=>{var Te=ad(),Je=u(Te);En(Je,{class:"mx-auto mb-2 h-12 w-12"}),v(Z,Te)},ft=Z=>{var Te=dd(),Je=u(Te),Ke=d(u(Je));Le(Ke,21,()=>r().purchasesList,tt=>tt.$id,(tt,te,kr)=>{var Qt=J(),At=L(Qt);{var Ee=nt=>{var at=id(),Ye=u(at),Ve=u(Ye),lt=u(Ve),vt=d(lt,2),wt=u(vt);wt.value=wt.__value="kg";var ht=d(wt);ht.value=ht.__value="gr.";var Kt=d(ht);Kt.value=Kt.__value="l.";var Yt=d(Kt);Yt.value=Yt.__value="ml";var ur=d(Yt);ur.value=ur.__value="unité";var Zt=d(ur);Zt.value=Zt.__value="bottes";var Tr=d(Ye),Ar=u(Tr),Ir=d(Tr),Dr=u(Ir),Mr=d(Ir),dr=u(Mr),fr=u(dr);fr.value=fr.__value="requested";var vr=d(fr);vr.value=vr.__value="ordered";var Jt=d(vr);Jt.value=Jt.__value="delivered";var Xt=d(Jt);Xt.value=Xt.__value="cancelled";var hr=d(Mr),pr=u(hr),Cr=d(hr),Q=u(Cr),ge=d(Cr),qe=u(ge),Xe=d(ge),Ge=u(Xe),ct=d(Xe),St=u(ct),$e=u(St);$e.__click=[ed,r,a];var je=u($e);{var Ie=fe=>{var xt=sd();v(fe,xt)},oe=fe=>{Wu(fe,{class:"h-3 w-3"})};I(je,fe=>{r().loading?fe(Ie):fe(oe,!1)})}var Be=d($e,2);Be.__click=[td,r];var We=u(Be);_t(We,{class:"h-3 w-3"}),j(fe=>$e.disabled=fe,[()=>r().loading||!a(s(te))]),Ce(lt,()=>s(te).quantity,fe=>s(te).quantity=fe),Br(vt,()=>s(te).unit,fe=>s(te).unit=fe),Ce(Ar,()=>s(te).store,fe=>s(te).store=fe),Ce(Dr,()=>s(te).who,fe=>s(te).who=fe),Br(dr,()=>s(te).status,fe=>s(te).status=fe),Ce(pr,()=>s(te).orderDate,fe=>s(te).orderDate=fe),Ce(Q,()=>s(te).deliveryDate,fe=>s(te).deliveryDate=fe),Ce(qe,()=>s(te).price,fe=>s(te).price=fe),Ce(Ge,()=>s(te).notes,fe=>s(te).notes=fe),v(nt,at)},rt=nt=>{var at=ud(),Ye=u(at),Ve=u(Ye),lt=d(Ye),vt=u(lt),wt=d(lt),ht=u(wt),Kt=d(wt),Yt=u(Kt),ur=u(Yt),Zt=d(Kt),Tr=u(Zt),Ar=d(Zt),Ir=u(Ar),Dr=d(Ar),Mr=u(Dr),dr=d(Dr),fr=u(dr),vr=d(dr),Jt=u(vr),Xt=u(Jt);Xt.__click=[od,i,te];var hr=u(Xt);_o(hr,{class:"h-4 w-4"});var pr=d(Xt,2);pr.__click=[ld,o,te];var Cr=u(pr);{var Q=qe=>{var Xe=cd();v(qe,Xe)},ge=qe=>{_t(qe,{class:"h-4 w-4"})};I(Cr,qe=>{r().loading?qe(Q):qe(ge,!1)})}j((qe,Xe,Ge,ct,St)=>{C(Ve,qe),C(vt,s(te).store||"-"),C(ht,s(te).who||"-"),Ae(Yt,1,`badge badge-sm ${Xe??""}`),C(ur,Ge),C(Tr,ct),C(Ir,St),C(Mr,s(te).price?`${s(te).price}€`:"-"),C(fr,s(te).notes||"-"),pr.disabled=r().loading},[()=>sa(s(te).quantity,s(te).unit),()=>za(s(te).status).class,()=>za(s(te).status).text,()=>Vs(s(te).orderDate),()=>Vs(s(te).deliveryDate)]),v(nt,at)};I(At,nt=>{r().editingPurchaseId===s(te).$id?nt(Ee):nt(rt,!1)})}v(tt,Qt)}),v(Z,Te)};I(ke,Z=>{r().purchasesList.length===0?Z(ot):Z(ft,!1)})}j(Z=>{Ae(ae,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),W.disabled=Z},[()=>r().loading||!n()]),Ce(x,()=>r().forms.purchase.quantity,Z=>r().forms.purchase.quantity=Z),Br(b,()=>r().forms.purchase.unit,Z=>r().forms.purchase.unit=Z),Ce(T,()=>r().forms.purchase.store,Z=>r().forms.purchase.store=Z),Ce(be,()=>r().forms.purchase.who,Z=>r().forms.purchase.who=Z),Ce(Se,()=>r().forms.purchase.price,Z=>r().forms.purchase.price=Z),Ce(re,()=>r().forms.purchase.notes,Z=>r().forms.purchase.notes=Z),Br(Re,()=>r().forms.purchase.status,Z=>r().forms.purchase.status=Z),v(e,l),H()}yt(["click"]);async function hd(e,t){await t()?.addStock()}var pd=y('<span class="loading loading-spinner loading-sm"></span>'),_d=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),md=y('<span class="loading loading-spinner loading-xs"></span>'),gd=y('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),bd=y('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),yd=y(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function wd(e,t){G(t,!0);let r=jt(t,"modalState",7),n=U(()=>r()&&r().forms.stock.quantity&&r().forms.stock.quantity>0&&r().forms.stock.unit);async function a(K){await r()?.removeStock(K)}var o=yd(),i=u(o),l=u(i);qa(l,{class:"h-5 w-5"});var c=d(i,2),f=u(c),h=d(u(f),2),_=u(h),m=u(_);$n(m,{class:"h-4 w-4 opacity-50"});var p=d(m,2),g=d(_,2),x=u(g);x.value=x.__value="";var b=d(x);b.value=b.__value="kg";var $=d(b);$.value=$.__value="gr.";var M=d($);M.value=M.__value="l.";var E=d(M);E.value=E.__value="ml";var S=d(E);S.value=S.__value="unité";var P=d(S);P.value=P.__value="bottes";var k=d(h,2),R=u(k),A=d(k,2),F=u(A);F.__click=[hd,r];var T=u(F);{var O=K=>{var we=pd();v(K,we)},z=K=>{var we=st("Ajouter au stock");v(K,we)};I(T,K=>{r().loading?K(O):K(z,!1)})}var be=d(c,2);{var De=K=>{var we=_d(),D=u(we);qa(D,{class:"mx-auto mb-2 h-12 w-12"}),v(K,we)},Se=K=>{var we=bd(),D=u(we),re=d(u(D));Le(re,23,()=>r().stockEntries,pe=>pe.dateTime,(pe,Pe,Me)=>{var Re=gd(),Qe=u(Re),ue=u(Qe),ye=d(Qe),ae=u(ye),xe=d(ye),Oe=u(xe),V=d(xe),W=u(V);W.__click=()=>a(s(Me));var q=u(W);{var Y=ke=>{var ot=md();v(ke,ot)},_e=ke=>{var ot=st("Supprimer");v(ke,ot)};I(q,ke=>{r().loading?ke(Y):ke(_e,!1)})}j(ke=>{C(ue,`${s(Pe).quantity??""}
                ${s(Pe).unit??""}`),C(ae,ke),C(Oe,s(Pe).notes||"-"),W.disabled=r().loading},[()=>ia(s(Pe).dateTime)]),v(pe,Re)}),v(K,we)};I(be,K=>{r().stockEntries.length===0?K(De):K(Se,!1)})}j(()=>F.disabled=r().loading||!s(n)),Ce(p,()=>r().forms.stock.quantity,K=>r().forms.stock.quantity=K),Br(g,()=>r().forms.stock.unit,K=>r().forms.stock.unit=K),Ce(R,()=>r().forms.stock.notes,K=>r().forms.stock.notes=K),v(e,o),H()}yt(["click"]);var Sd=(e,t)=>{e.key==="Enter"&&t()},xd=y("<option> </option>"),Ed=(e,t,r)=>t(r),Pd=y('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),$d=y('<span class="loading loading-spinner loading-sm"></span>'),Nd=y('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function kd(e,t){G(t,!0);let r=X("");const n=U(()=>s(r).trim().length>0&&!t.modalState.whoList.includes(s(r).trim()));async function a(){!s(n)||!t.modalState||(await t.modalState.addVolunteer(s(r).trim()),N(r,""))}async function o(S){await t.modalState?.removeVolunteer(S)}var i=Nd(),l=u(i),c=u(l),f=d(u(c),2),h=u(f);ts(h,{class:"h-4 w-4 opacity-50"});var _=d(h,2);_.__keydown=[Sd,a];var m=d(_,2);Le(m,21,()=>B.uniqueWho,ra,(S,P)=>{var k=xd(),R=u(k),A={};j(()=>{C(R,s(P)),A!==(A=s(P))&&(k.value=(k.__value=s(P))??"")}),v(S,k)});var p=d(f,2),g=d(u(p),2);Le(g,20,()=>t.modalState.whoList,S=>S,(S,P)=>{var k=Pd(),R=u(k),A=d(R);A.__click=[Ed,o,P];var F=u(A);_t(F,{class:"h-3 w-3"}),j(()=>{C(R,`${P??""} `),A.disabled=t.modalState.loading}),v(S,k)});var x=d(p,2),b=u(x);b.__click=a;var $=u(b);{var M=S=>{var P=$d();v(S,P)},E=S=>{var P=st("Ajouter");v(S,P)};I($,S=>{t.modalState.loading?S(M):S(E,!1)})}j(()=>b.disabled=t.modalState.loading||!s(n)),Ce(_,()=>s(r),S=>N(r,S)),v(e,i),H()}yt(["keydown","click"]);var Td=(e,t)=>{e.key==="Enter"&&t()},Ad=y("<option> </option>"),Id=y('<span class="loading loading-spinner loading-sm"></span>'),Dd=(e,t,r)=>{N(t,""),N(r,"")},Md=y(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function Cd(e,t){G(t,!0);const r=U(()=>t.modalState.forms.store),n=U(()=>s(r).name||""),a=U(()=>s(r).comment||"");let o=X(Ue(s(n))),i=X(Ue(s(a)));const l=U(()=>s(o).trim()!==(s(r).name||"")||s(i).trim()!==(s(r).comment||""));async function c(){if(!s(l))return;const A={storeName:s(o).trim(),storeComment:s(i).trim()};await t.modalState.updateStore(A)}var f=Md(),h=u(f),_=u(h),m=d(u(_),4),p=u(m),g=u(p);ir(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2);x.__keydown=[Td,c];var b=d(x,2);Le(b,21,()=>B.uniqueStores,ra,(A,F)=>{var T=Ad(),O=u(T),z={};j(()=>{C(O,s(F)),z!==(z=s(F))&&(T.value=(T.__value=s(F))??"")}),v(A,T)});var $=d(p,2),M=d(m,2),E=u(M);E.__click=c;var S=u(E);{var P=A=>{var F=Id();v(A,F)},k=A=>{var F=st("Mettre à jour");v(A,F)};I(S,A=>{t.modalState.loading?A(P):A(k,!1)})}var R=d(E,2);R.__click=[Dd,o,i],j(()=>{E.disabled=t.modalState.loading||!s(l),R.disabled=t.modalState.loading}),Ce(x,()=>s(o),A=>N(o,A)),Ce($,()=>s(i),A=>N(i,A)),v(e,f),H()}yt(["keydown","click"]);async function Rd(e,t,r,n,a,o){if(!t.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(i),N(o,!1)}async function Od(e,t,r){t.modalState&&(await t.modalState.removeOverride(),N(r,!1))}var qd=y('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),jd=y('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),Bd=y(" <!>",1),Ld=(e,t)=>N(t,!0),zd=y('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),Vd=y('<div class="text-error text-sm">Limite de caractères atteinte</div>'),Wd=y('<span class="loading loading-spinner loading-sm"></span>'),Ud=y('<span class="loading loading-spinner loading-sm"></span>'),Gd=y(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div class="form-control"><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),Hd=y('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function Qd(e,t){G(t,!0);const r=U(()=>t.modalState.product?.totalNeededOverride),n=U(()=>t.modalState.product?.displayTotalNeeded||[]);let a=X(!1),o=X(Ue(t.modalState.product?.totalNeededOverride?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=X(Ue(t.modalState.product?.totalNeededOverride?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=X(Ue(t.modalState.product?.totalNeededOverride?.comment||"")),c=U(()=>s(o)>0&&s(i).trim()!=="");var f=Hd(),h=u(f),_=u(h),m=u(_);{var p=x=>{var b=zd(),$=L(b),M=u($),E=d(u(M),2);{var S=T=>{var O=qd();v(T,O)};I(E,T=>{s(r)&&T(S)})}var P=d(E,2),k=u(P);{var R=T=>{var O=Bd(),z=L(O),be=d(z);{var De=Se=>{var K=jd(),we=u(K);po(we,{});var D=d(we);j(()=>C(D,` ${s(r).comment??""}`)),v(Se,K)};I(be,Se=>{s(r).comment&&Se(De)})}j(Se=>C(z,`${Se??""} `),[()=>sa(s(r).totalOverride.q,s(r).totalOverride.u)]),v(T,O)},A=T=>{var O=st();j(()=>C(O,s(n))),v(T,O)};I(k,T=>{s(r)?T(R):T(A,!1)})}var F=d($,2);F.__click=[Ld,a],v(x,b)},g=x=>{var b=Gd(),$=L(b),M=u($),E=u(M);Lu(E,{class:"h-4 w-4 opacity-50"});var S=d(E,2),P=d(M,2),k=u(P);k.value=k.__value="";var R=d(k);R.value=R.__value="kg";var A=d(R);A.value=A.__value="gr.";var F=d(A);F.value=F.__value="l.";var T=d(F);T.value=T.__value="ml";var O=d(T);O.value=O.__value="unité";var z=d(O);z.value=z.__value="bottes";var be=d($,2),De=u(be),Se=d(u(De),2),K=d(Se,2);{var we=ae=>{var xe=Vd();v(ae,xe)};I(K,ae=>{s(l).length>=250&&ae(we)})}var D=d(be,2),re=u(D);re.__click=[Od,t,a];var pe=u(re);{var Pe=ae=>{var xe=Wd();v(ae,xe)},Me=ae=>{var xe=st();j(()=>C(xe,`Réinitialiser le total calculé (${s(n)??""}).`)),v(ae,xe)};I(pe,ae=>{t.modalState.loading?ae(Pe):ae(Me,!1)})}var Re=d(re,2);Re.__click=[Rd,t,o,i,l,a];var Qe=u(Re);{var ue=ae=>{var xe=Ud();v(ae,xe)},ye=ae=>{var xe=st("Appliquer");v(ae,xe)};I(Qe,ae=>{t.modalState.loading?ae(ue):ae(ye,!1)})}j(()=>{re.disabled=t.modalState.loading,Re.disabled=t.modalState.loading||!s(c)}),Ce(S,()=>s(o),ae=>N(o,ae)),Br(P,()=>s(i),ae=>N(i,ae)),Ce(Se,()=>s(l),ae=>N(l,ae)),v(x,b)};I(m,x=>{s(a)?x(g,!1):x(p)})}j(()=>Ae(h,1,`card border-base-300 border ${s(a)?"bg-base-200":"bg-base-100"}`)),v(e,f),H()}yt(["click"]);var Kd=y('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Yd=y('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Zd=y('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Jd=y('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Xd(e,t){G(t,!0);const r=U(()=>t.modalState.recipes);var n=Jd(),a=L(n);Qd(a,{get modalState(){return t.modalState}});var o=d(a,2),i=u(o),l=u(i);es(l,{class:"h-5 w-5"});var c=d(i,2);{var f=_=>{var m=Kd(),p=u(m);$n(p,{class:"mx-auto mb-2 h-12 w-12"}),v(_,m)},h=_=>{var m=Zd(),p=u(m),g=d(u(p));Le(g,21,()=>s(r),x=>x.r,(x,b)=>{var $=Yd(),M=u($),E=u(M),S=d(M),P=u(S),k=d(S),R=u(k);j(A=>{C(E,`${s(b).r??""} (${(s(b).a||"-")??""} c.)`),C(P,`${(s(b).q||s(b).qEq)??""} ${(s(b).u||s(b).uEq)??""}`),C(R,A)},[()=>ia(s(b).date)]),v(x,$)}),v(_,m)};I(c,_=>{s(r).length===0?_(f):_(h,!1)})}v(e,n),H()}var Fd=y('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),ef=y('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),tf=(e,t)=>t("recettes"),rf=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),nf=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),af=(e,t)=>t("achats"),sf=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),of=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),lf=(e,t)=>t("stock"),cf=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),uf=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),df=(e,t)=>t("volontaires"),ff=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),vf=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),hf=(e,t)=>t("magasins"),pf=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),_f=y('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div>',1),mf=y('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function gf(e,t){G(t,!0);let r=jt(t,"initialTab",3,"recettes"),n=U(()=>Xu(t.productId)),a=X(Ue(r()));function o(b){N(a,b,!0)}var i=mf(),l=u(i),c=u(l),f=u(c);{var h=b=>{var $=Fd(),M=L($),E=u(M),S=d(M,2),P=u(S),k=u(P),R=d(P,2),A=d(u(R));j(()=>{C(E,s(n).product?.productName),C(k,s(n).product?.productType),C(A,` ${s(n).product?.displayTotalNeeded??""}`)}),v(b,$)},_=b=>{var $=ef();v(b,$)};I(f,b=>{s(n)&&s(n).product?b(h):b(_,!1)})}var m=d(f,2);m.__click=function(...b){t.onClose?.apply(this,b)};var p=u(m);_t(p,{class:"h-4 w-4"});var g=d(c,2);{var x=b=>{var $=_f(),M=L($),E=u(M);E.__click=[tf,o];var S=u(E);es(S,{class:"mr-1 h-5 w-5"});var P=d(S,2);{var k=q=>{var Y=rf(),_e=u(Y);j(()=>C(_e,s(n).product?.nbRecipes)),v(q,Y)},R=q=>{var Y=nf();v(q,Y)};I(P,q=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?q(k):q(R,!1)})}var A=d(E,2);A.__click=[af,o];var F=u(A);En(F,{class:"mr-1 h-5 w-5"});var T=d(F,2);{var O=q=>{var Y=sf(),_e=u(Y);j(()=>C(_e,s(n).purchasesList.length)),v(q,Y)},z=q=>{var Y=of();v(q,Y)};I(T,q=>{s(n).purchasesList.length>0?q(O):q(z,!1)})}var be=d(A,2);be.__click=[lf,o];var De=u(be);qa(De,{class:"mr-1 h-5 w-5"});var Se=d(De,2);{var K=q=>{var Y=cf(),_e=u(Y);j(()=>C(_e,s(n).stockEntries.length)),v(q,Y)},we=q=>{var Y=uf();v(q,Y)};I(Se,q=>{s(n).stockEntries.length>0?q(K):q(we,!1)})}var D=d(be,2);D.__click=[df,o];var re=u(D);Wn(re,{class:"mr-1 h-5 w-5"});var pe=d(re,2);{var Pe=q=>{var Y=ff(),_e=u(Y);j(()=>C(_e,s(n).product?.who.length)),v(q,Y)},Me=q=>{var Y=vf();v(q,Y)};I(pe,q=>{s(n).product?.who&&s(n).product?.who.length>0?q(Pe):q(Me,!1)})}var Re=d(D,2);Re.__click=[hf,o];var Qe=u(Re);ir(Qe,{class:"mr-1 h-5 w-5"});var ue=d(M,2),ye=u(ue);{var ae=q=>{var Y=pf(),_e=u(Y);_t(_e,{class:"h-4 w-4"});var ke=d(_e,2),ot=u(ke);j(()=>C(ot,`erreur : ${s(n).error??""}`)),v(q,Y)};I(ye,q=>{s(n).error&&q(ae)})}var xe=d(ye,2),Oe=u(xe);Fl(Oe,()=>s(a),q=>{var Y=J(),_e=L(Y);{var ke=ft=>{Xd(ft,{get modalState(){return s(n)}})},ot=ft=>{var Z=J(),Te=L(Z);{var Je=tt=>{vd(tt,{get modalState(){return s(n)}})},Ke=tt=>{var te=J(),kr=L(te);{var Qt=Ee=>{wd(Ee,{get modalState(){return s(n)}})},At=Ee=>{var rt=J(),nt=L(rt);{var at=Ve=>{kd(Ve,{get modalState(){return s(n)}})},Ye=Ve=>{var lt=J(),vt=L(lt);{var wt=ht=>{Cd(ht,{get modalState(){return s(n)}})};I(vt,ht=>{s(a)==="magasins"&&ht(wt)},!0)}v(Ve,lt)};I(nt,Ve=>{s(a)==="volontaires"?Ve(at):Ve(Ye,!1)},!0)}v(Ee,rt)};I(kr,Ee=>{s(a)==="stock"?Ee(Qt):Ee(At,!1)},!0)}v(tt,te)};I(Te,tt=>{s(a)==="achats"?tt(Je):tt(Ke,!1)},!0)}v(ft,Z)};I(_e,ft=>{s(a)==="recettes"?ft(ke):ft(ot,!1)})}v(q,Y)});var V=d(ue,2),W=u(V);W.__click=function(...q){t.onClose?.apply(this,q)},j(()=>{Ae(E,1,`tab ${s(a)==="recettes"?"tab-active":""}`),Ae(A,1,`tab ${s(a)==="achats"?"tab-active":""}`),Ae(be,1,`tab ${s(a)==="stock"?"tab-active":""}`),Ae(D,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),Ae(Re,1,`tab ${s(a)==="magasins"?"tab-active":""}`)}),v(b,$)};I(g,b=>{s(n)&&b(x)})}v(e,i),H()}yt(["click"]);async function bf(e,t,r,n,a,o,i,l,c){if(!(!s(t)||s(r))){N(r,!0),N(n,null),N(a,null);try{let f;if(s(o)){const h={storeName:i.storeName.trim(),storeComment:i.storeComment.trim()};f=await vo(l.productIds,l.products,h)}else if(s(c))f=await ho(l.productIds,l.products,i.whoNames,i.whoMode);else throw new Error("Type d'édition non supporté");N(a,f,!0),f.success?(l.onSuccess?.(f),setTimeout(()=>{l.onClose()},1500)):N(n,f.error||"Erreur lors de la mise à jour",!0)}catch(f){const h=f instanceof Error?f.message:"Erreur inconnue";N(n,h,!0),console.error("[GroupEditModal] Erreur mise à jour:",f)}finally{N(r,!1)}}}function Us(e,t,r){s(t)||r.onClose()}var yf=y('<div class="flex items-center gap-2"><!> <span> </span></div>'),wf=y('<div class="flex items-center gap-2"><!> <span> </span></div>'),Sf=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),xf=y('<div class="alert alert-success mb-4"><!> <span> </span></div>'),Ef=y("<option> </option>"),Pf=y('<div class="space-y-4"><div><label class="label"><span class="label-text">Nom du magasin</span></label> <label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="label"><span class="label-text">Commentaire (optionnel)</span></label> <textarea class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div>'),$f=(e,t,r)=>t(r),Nf=y('<div class="badge badge-primary badge-lg flex items-center gap-1"><span> </span> <button class="btn btn-xs btn-circle btn-ghost hover:bg-error/20"><!></button></div>'),kf=y('<div class="mt-2 flex flex-wrap gap-2"></div>'),Tf=(e,t,r)=>t(r),Af=y('<button class="btn btn-xs btn-soft btn-outline"> </button>'),If=y('<div class="mt-3"><div class="mb-1 text-xs opacity-70">Suggestions :</div> <div class="flex flex-wrap gap-1"></div></div>'),Df=y(`<div class="space-y-4"><div><label class="label"><span class="label-text">Mode d'application</span></label> <div class="join"><input class="join-item btn btn-sm" type="radio" name="who-mode" aria-label="Remplacer"/> <input class="join-item btn btn-sm" type="radio" name="who-mode" aria-label="Ajouter"/></div> <div class="mt-1 text-xs opacity-70"> </div></div> <div><label class="label"><span class="label-text">Volontaires</span></label> <div class="flex gap-2"><input type="text" class="input input-sm flex-1" placeholder="Ajouter un volontaire..."/> <button class="btn btn-sm btn-primary"><!></button></div> <!> <!></div></div>`),Mf=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Cf=y("<!> ",1),Rf=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><div class="bg-base-200 mb-6 rounded-lg p-4"><h4 class="mb-2 font-medium">État actuel de ce groupe :</h4> <div class="flex flex-wrap gap-4 text-sm"><!> <!> <div class="flex items-center gap-2"><div class="bg-primary h-4 w-4 rounded-full"></div> <span> </span></div></div></div> <!> <!> <!> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Of(e,t){G(t,!0);const r=[];let n=X(!1),a=X(null),o=X(null),i=Ue({storeName:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"",storeComment:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"",whoNames:t.products.length>0&&t.editType==="who"&&t.products[0].who?[...t.products[0].who]:[],whoMode:"replace"});const l=U(()=>t.editType==="store"),c=U(()=>t.editType==="who"),f=U(()=>s(l)?`Attribuer un magasin (${t.products.length} produits)`:`Gérer les volontaires (${t.products.length} produits)`),h=U(()=>s(l)?i.storeName.trim().length>0:s(c)?i.whoNames.length>0:!1);function _(V){V.trim()&&!i.whoNames.includes(V.trim())&&(i.whoNames=[...i.whoNames,V.trim()])}function m(V){i.whoNames=i.whoNames.filter(W=>W!==V)}const p=U(()=>{const V=new Set(t.products.map(W=>W.storeInfo?.storeName).filter(Boolean));return Array.from(V)}),g=U(()=>{const V=t.products.flatMap(W=>W.who||[]);return new Set(V).size});var x=Rf(),b=u(x),$=u(b),M=u($),E=u(M),S=d(M,2);S.__click=[Us,n,t];var P=u(S);_t(P,{class:"h-4 w-4"});var k=d($,2),R=u(k),A=d(u(R),2),F=u(A);{var T=V=>{var W=yf(),q=u(W);ir(q,{class:"h-4 w-4"});var Y=d(q,2),_e=u(Y);j(ke=>C(_e,ke),[()=>s(p).length>0?`Magasins: ${s(p).join(", ")}`:"Aucun magasin défini"]),v(V,W)};I(F,V=>{s(l)&&V(T)})}var O=d(F,2);{var z=V=>{var W=wf(),q=u(W);Wn(q,{class:"h-4 w-4"});var Y=d(q,2),_e=u(Y);j(()=>C(_e,`Volontaires: ${s(g)??""} personne(s)`)),v(V,W)};I(O,V=>{s(c)&&V(z)})}var be=d(O,2),De=d(u(be),2),Se=u(De),K=d(R,2);{var we=V=>{var W=Sf(),q=u(W);mo(q,{class:"h-4 w-4"});var Y=d(q,2),_e=u(Y);j(()=>C(_e,s(a))),v(V,W)};I(K,V=>{s(a)&&V(we)})}var D=d(K,2);{var re=V=>{var W=xf(),q=u(W);Bs(q,{class:"h-4 w-4"});var Y=d(q,2),_e=u(Y);j(()=>C(_e,`${s(o).updatedCount??""} produit(s) mis à jour avec succès !`)),v(V,W)};I(D,V=>{s(o)?.success&&V(re)})}var pe=d(D,2);{var Pe=V=>{var W=Pf(),q=u(W),Y=d(u(q),2),_e=u(Y);ir(_e,{class:"h-4 w-4 opacity-50"});var ke=d(_e,2),ot=d(Y,2);Le(ot,21,()=>B.uniqueStores,ra,(Te,Je)=>{var Ke=Ef(),tt=u(Ke),te={};j(()=>{C(tt,s(Je)),te!==(te=s(Je))&&(Ke.value=(Ke.__value=s(Je))??"")}),v(Te,Ke)});var ft=d(q,2),Z=d(u(ft),2);j(()=>{ke.disabled=s(n),Z.disabled=s(n)}),Ce(ke,()=>i.storeName,Te=>i.storeName=Te),Ce(Z,()=>i.storeComment,Te=>i.storeComment=Te),v(V,W)};I(pe,V=>{s(l)&&V(Pe)})}var Me=d(pe,2);{var Re=V=>{var W=Df(),q=u(W),Y=d(u(q),2),_e=u(Y);_e.value=_e.__value="replace";var ke=d(_e,2);ke.value=ke.__value="add";var ot=d(Y,2),ft=u(ot),Z=d(q,2),Te=d(u(Z),2),Je=u(Te);Je.__keydown=Ee=>{Ee.key==="Enter"&&(Ee.preventDefault(),_(Ee.currentTarget.value),Ee.currentTarget.value="")};var Ke=d(Je,2);Ke.__click=Ee=>{const rt=Ee.currentTarget.previousElementSibling;_(rt.value),rt.value=""};var tt=u(Ke);Hu(tt,{class:"h-4 w-4"});var te=d(Te,2);{var kr=Ee=>{var rt=kf();Le(rt,20,()=>i.whoNames,nt=>nt,(nt,at)=>{var Ye=Nf(),Ve=u(Ye),lt=u(Ve),vt=d(Ve,2);vt.__click=[$f,m,at];var wt=u(vt);_t(wt,{class:"h-3 w-3"}),j(()=>{C(lt,at),vt.disabled=s(n)}),v(nt,Ye)}),v(Ee,rt)};I(te,Ee=>{i.whoNames.length>0&&Ee(kr)})}var Qt=d(te,2);{var At=Ee=>{var rt=If(),nt=d(u(rt),2);Le(nt,20,()=>B.uniqueWho.slice(0,8),at=>at,(at,Ye)=>{var Ve=Af();Ve.__click=[Tf,_,Ye];var lt=u(Ve);j(vt=>{Ve.disabled=vt,C(lt,Ye)},[()=>s(n)||i.whoNames.includes(Ye)]),v(at,Ve)}),v(Ee,rt)};I(Qt,Ee=>{B.uniqueWho.length>0&&Ee(At)})}j(()=>{_e.disabled=s(n),ke.disabled=s(n),C(ft,i.whoMode==="replace"?"Remplacera tous les volontaires existants":"Ajoutera aux volontaires existants"),Je.disabled=s(n),Ke.disabled=s(n)}),Ss(r,[],_e,()=>i.whoMode,Ee=>i.whoMode=Ee),Ss(r,[],ke,()=>i.whoMode,Ee=>i.whoMode=Ee),v(V,W)};I(Me,V=>{s(c)&&V(Re)})}var Qe=d(k,2),ue=u(Qe);ue.__click=[Us,n,t];var ye=d(ue,2);ye.__click=[bf,h,n,a,o,l,i,t,c];var ae=u(ye);{var xe=V=>{var W=Mf();v(V,W)},Oe=V=>{var W=Cf(),q=L(W);Bs(q,{class:"h-4 w-4"});var Y=d(q);j(()=>C(Y,` Appliquer à ${t.products.length??""} produit(s)`)),v(V,W)};I(ae,V=>{s(n)?V(xe):V(Oe,!1)})}j(()=>{C(E,s(f)),S.disabled=s(n),C(Se,`${t.products.length??""} produit(s) concerné(s)`),ue.disabled=s(n),ye.disabled=s(n)||!s(h)}),v(e,x),H()}yt(["click","keydown"]);var qf=()=>B.setGroupBy("none"),jf=()=>B.setGroupBy("store"),Bf=()=>B.setGroupBy("productType"),Lf=(e,t)=>B.toggleProductType(t),zf=y("<button><!> </button>"),Vf=()=>B.toggleTemperature("frais"),Wf=()=>B.toggleTemperature("surgele"),Uf=()=>B.clearTypeAndTemperatureFilters(),Gf=y('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Hf=(e,t)=>B.toggleStore(t),Qf=y("<button> </button>"),Kf=y('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Yf=(e,t)=>B.toggleWho(t),Zf=y("<button> </button>"),Jf=y('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Xf=(e,t)=>{B.clearFilters(),N(t,!1)},Ff=y('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function ev(e,t){G(t,!0);let r=X(!1);const n=U(()=>B.filters),a=U(()=>B.uniqueStores),o=U(()=>B.uniqueWho),i=U(()=>B.uniqueProductTypes);var l=Ff(),c=L(l),f=u(c),h=d(f,2),_=d(u(h),2),m=u(_),p=u(m),g=u(p);ja(g,{class:"w-5 h-5"});var x=d(p,2),b=u(x);_t(b,{class:"w-4 h-4"});var $=d(m,2),M=d(u($),2),E=u(M);E.__change=[qf];var S=d(E,2);S.__change=[jf];var P=d(S,2);P.__change=[Bf];var k=d($,2),R=u(k),A=d(u(R),2);Le(A,20,()=>s(i),ue=>ue,(ue,ye)=>{const ae=U(()=>jn(ye));var xe=zf();xe.__click=[Lf,ye];var Oe=u(xe);un(Oe,()=>s(ae).icon,(W,q)=>{q(W,{class:"w-3 h-3 mr-1"})});var V=d(Oe);j(W=>{Ae(xe,1,`btn btn-sm ${W??""}`),C(V,` ${s(ae).displayName??""}`)},[()=>s(n).selectedProductTypes.length===0?"btn-soft btn-accent":s(n).selectedProductTypes.includes(ye)?"btn-accent":"btn-dash btn-accent"]),v(ue,xe)});var F=d(A,2),T=u(F);T.__click=[Vf];var O=u(T);Ba(O,{class:"w-3 h-3"});var z=d(T,2);z.__click=[Wf];var be=u(z);La(be,{class:"w-3 h-3"});var De=d(z,2);{var Se=ue=>{var ye=Gf();ye.__click=[Uf];var ae=u(ye);_t(ae,{class:"w-3 h-3"}),v(ue,ye)};I(De,ue=>{(s(n).selectedProductTypes.length>0||s(n).selectedTemperatures.length>0)&&ue(Se)})}var K=d(k,2);{var we=ue=>{var ye=Kf(),ae=u(ye),xe=d(u(ae),2);Le(xe,20,()=>s(a),Oe=>Oe,(Oe,V)=>{var W=Qf();W.__click=[Hf,V];var q=u(W);j(Y=>{Ae(W,1,`btn btn-sm ${Y??""}`),C(q,V)},[()=>s(n).selectedStores.length===0?"btn-soft btn-accent":s(n).selectedStores.includes(V)?"btn-accent":"btn-dash btn-accent"]),v(Oe,W)}),v(ue,ye)};I(K,ue=>{s(a).length>0&&ue(we)})}var D=d(K,2);{var re=ue=>{var ye=Jf(),ae=u(ye),xe=d(u(ae),2);Le(xe,20,()=>s(o),Oe=>Oe,(Oe,V)=>{var W=Zf();W.__click=[Yf,V];var q=u(W);j(Y=>{Ae(W,1,`btn btn-sm ${Y??""}`),C(q,V)},[()=>s(n).selectedWho.length===0?"btn-soft btn-accent":s(n).selectedWho.includes(V)?"btn-accent":"btn-dash btn-accent"]),v(Oe,W)}),v(ue,ye)};I(D,ue=>{s(o).length>0&&ue(re)})}var pe=d(D,4);pe.__click=[Xf,r];var Pe=u(pe);_t(Pe,{class:"w-4 h-4 mr-2"});var Me=d(c,2),Re=u(Me),Qe=u(Re);ja(Qe,{class:"w-6 h-6"}),j((ue,ye)=>{Vr(E,s(n).groupBy==="none"),Vr(S,s(n).groupBy==="store"),Vr(P,s(n).groupBy==="productType"),Ae(T,1,`btn btn-sm ${ue??""}`),Ae(z,1,`btn btn-sm ${ye??""}`)},[()=>s(n).selectedTemperatures.length===0?"btn-soft btn-success":s(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(n).selectedTemperatures.length===0?"btn-soft btn-info":s(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),dc(f,()=>s(r),ue=>N(r,ue)),v(e,l),H()}yt(["change","click"]);yt(["mousedown"]);var tv=(e,t,r)=>t(r),rv=y("<button><span> </span> <!></button>"),nv=(e,t)=>t(),av=y('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1"><!> <button class="btn btn-sm btn-primary btn-outline ms-4" type="button"><span>Toutes les dates</span></button></div></fieldset></div></div>');function sv(e,t){G(t,!0);const n=[...jt(t,"allDates",19,()=>[])()].sort();let a=n[0],o=n[n.length-1],i=X(Ue(a)),l=X(Ue(o));function c(E){s(i)===E&&s(l)===E?m():new Date(E)<new Date(s(i))?N(i,E,!0):(new Date(E)>new Date(s(l))||N(i,E,!0),N(l,E,!0))}function f(E){return new Date(E)>=new Date(s(i))&&new Date(E)<=new Date(s(l))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function h(E){return new Date(E).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function _(E){const P=new Date(E).getUTCHours();return P===12?"sun":P===20?"moon":P===8?"cloud":null}function m(){N(i,a,!0),N(l,o,!0)}Za(()=>{B.setDateRange(s(i),s(l))});var p=av(),g=u(p),x=u(g),b=d(u(x),2),$=u(b);Le($,18,()=>n,E=>E,(E,S)=>{var P=rv();P.__click=[tv,c,S];var k=u(P),R=u(k),A=d(k,2);{var F=O=>{Gu(O,{size:16})},T=O=>{var z=J(),be=L(z);{var De=K=>{Bu(K,{size:16})},Se=K=>{var we=J(),D=L(we);{var re=pe=>{Mu(pe,{size:16})};I(D,pe=>{_(S)==="cloud"&&pe(re)},!0)}v(K,we)};I(be,K=>{_(S)==="moon"?K(De):K(Se,!1)},!0)}v(O,z)};I(A,O=>{_(S)==="sun"?O(F):O(T,!1)})}j((O,z)=>{Ae(P,1,`btn btn-sm ${O??""}`),C(R,z)},[()=>f(S),()=>h(S)]),v(E,P)});var M=d($,2);M.__click=[nv,m],v(e,p),H()}yt(["click"]);const ln=e=>{var t=iv(),r=u(t);_o(r,{class:"h-4 w-4 text-amber-600"}),v(e,t)};var iv=y('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),ov=()=>B.clearFilters(),lv=e=>B.setSearchQuery(e.currentTarget.value),cv=()=>B.setGroupBy("none"),uv=()=>B.setGroupBy("store"),dv=()=>B.setGroupBy("productType"),fv=(e,t)=>B.toggleProductType(t),vv=y("<button><!> </button>"),hv=()=>B.toggleTemperature("frais"),pv=()=>B.toggleTemperature("surgele"),_v=()=>B.clearTypeAndTemperatureFilters(),mv=y('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),gv=y('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),bv=(e,t)=>B.toggleStore(t),yv=y("<button><!> </button>"),wv=()=>B.clearStoreFilters(),Sv=y('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),xv=y('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Ev=(e,t)=>B.toggleWho(t),Pv=y("<button><!> </button>"),$v=()=>B.clearWhoFilters(),Nv=y('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),kv=y('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Tv=()=>B.handleSort("productName"),Av=()=>B.handleSort("store"),Iv=()=>B.handleSort("who"),Dv=()=>B.handleSort("productType"),Mv=y('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Cv=(e,t,r)=>t("store",r().map(n=>n.$id),r()),Rv=(e,t,r)=>t("who",r().map(n=>n.$id),r()),Ov=y('<tr class="bg-base-200 sticky top-11 z-10 font-semibold"><td colspan="7" class="py-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!></div> <div class="flex items-center gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> Magasin</button> <button class="btn btn-sm btn-info btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> Volontaires</button></div></div></td></tr>'),qv=(e,t,r)=>t(s(r).$id,"recettes"),jv=y('<div class="text-base-content/60 text-xs"> </div>'),Bv=y('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Lv=y('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),zv=(e,t,r)=>t(s(r).$id,"magasins"),Vv=y('<div class="tooltip tooltip-info"> </div>'),Wv=(e,t,r)=>t(s(r).$id,"volontaires"),Uv=y('<span class="badge badge-soft badge-info badge-sm"> </span>'),Gv=y('<div class="flex flex-wrap gap-1 pr-8"></div>'),Hv=(e,t,r)=>t(s(r).$id,"recettes"),Qv=y('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Kv=(e,t,r)=>t(s(r).$id,"achats"),Yv=y("<div><!> <span> </span></div>"),Zv=y('<span class="text-sm">-</span>'),Jv=y('<div class="bg-warning m-auto rounded px-2 py-1"> </div>'),Xv=y('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),Fv=y("<!> <!>",1),eh=y('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),th=y('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><!> <div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!> <!>',1);function rh(e,t){G(t,!0);const r={Package:$n,MessageCircleQuestionMark:ju,ShoppingCart:En,Clock:Du,CircleCheck:Au,CircleX:Iu},n=U(()=>B.displayProducts),a=U(()=>B.stats),o=U(()=>B.uniqueStores),i=U(()=>B.uniqueWho),l=U(()=>B.uniqueProductTypes),c=U(()=>B.filters);let f=X(null),h=X("recettes"),_=X(!1),m=X("store"),p=X(Ue([])),g=X(Ue([]));function x(Q,ge="recettes"){N(h,ge,!0),N(f,Q,!0)}function b(){N(f,null)}function $(Q,ge,qe){N(m,Q,!0),N(p,ge,!0),N(g,qe,!0),N(_,!0)}function M(){N(_,!1),N(m,"store"),N(p,[],!0),N(g,[],!0)}function E(Q){console.log(`[ProductsTable] Modification groupée réussie: ${Q.updatedCount} produits`)}var S=th(),P=L(S),k=u(P),R=u(k),A=u(R);Ls(A,{class:"mr-1 h-4 w-4"});var F=d(A),T=d(k,2),O=u(T),z=u(O),be=u(z),De=u(be);ja(De,{class:"h-5 w-5"});var Se=d(be,2);Se.__click=[ov];var K=u(Se);_t(K,{class:"h-4 w-4"});var we=d(O,2),D=u(we),re=d(u(D),2),pe=u(re);Uu(pe,{class:"h-4 w-4"});var Pe=d(pe,2);Pe.__input=[lv];var Me=d(D,2),Re=d(u(Me),2),Qe=u(Re);Qe.__change=[cv];var ue=d(Qe,2);ue.__change=[uv];var ye=d(ue,2);ye.__change=[dv];var ae=d(we,2),xe=u(ae);sv(xe,{get allDates(){return B.allDates}});var Oe=d(xe,2),V=u(Oe);{var W=Q=>{var ge=gv(),qe=u(ge),Xe=d(u(qe),2),Ge=u(Xe);Le(Ge,16,()=>s(l),Be=>Be,(Be,We)=>{const fe=U(()=>jn(We));var xt=vv();xt.__click=[fv,We];var Ft=u(xt);un(Ft,()=>s(fe).icon,(er,Or)=>{Or(er,{class:"mr-1 h-5 w-5"})});var Rr=d(Ft);j(er=>{Ae(xt,1,`btn btn-sm ${er??""}`),C(Rr,` ${s(fe).displayName??""}`)},[()=>s(c).selectedProductTypes.length===0?"btn-soft btn-accent":s(c).selectedProductTypes.includes(We)?"btn-accent":"btn-dash btn-accent"]),v(Be,xt)});var ct=d(Ge,2);ct.__click=[hv];var St=u(ct);Ba(St,{class:"h-5 w-5"});var $e=d(ct,2);$e.__click=[pv];var je=u($e);La(je,{class:"h-5 w-5"});var Ie=d($e,2);{var oe=Be=>{var We=mv();We.__click=[_v];var fe=u(We);_t(fe,{class:"h-3 w-3"}),v(Be,We)};I(Ie,Be=>{(s(c).selectedProductTypes.length>0||s(c).selectedTemperatures.length>0)&&Be(oe)})}j((Be,We)=>{Ae(ct,1,`btn btn-sm ms-4 ${Be??""}`),Ae($e,1,`btn btn-sm ${We??""}`)},[()=>s(c).selectedTemperatures.length===0?"btn-soft btn-success":s(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(c).selectedTemperatures.length===0?"btn-soft btn-info":s(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),v(Q,ge)};I(V,Q=>{s(l).length>0&&Q(W)})}var q=d(Oe,2),Y=u(q);{var _e=Q=>{var ge=xv(),qe=u(ge),Xe=d(u(qe),2),Ge=u(Xe);Le(Ge,16,()=>s(o),$e=>$e,($e,je)=>{var Ie=yv();Ie.__click=[bv,je];var oe=u(Ie);ir(oe,{class:"mr-1 h-3 w-3"});var Be=d(oe);j(We=>{Ae(Ie,1,`btn btn-xs ${We??""}`),C(Be,` ${je??""}`)},[()=>s(c).selectedStores.length===0?"btn-soft btn-accent":s(c).selectedStores.includes(je)?"btn-accent":"btn-dash btn-accent"]),v($e,Ie)});var ct=d(Ge,2);{var St=$e=>{var je=Sv();je.__click=[wv];var Ie=u(je);_t(Ie,{class:"h-3 w-3"}),v($e,je)};I(ct,$e=>{s(c).selectedStores.length>0&&$e(St)})}v(Q,ge)};I(Y,Q=>{s(o).length>0&&Q(_e)})}var ke=d(Y,2);{var ot=Q=>{var ge=kv(),qe=u(ge),Xe=d(u(qe),2),Ge=u(Xe);Le(Ge,16,()=>s(i),$e=>$e,($e,je)=>{var Ie=Pv();Ie.__click=[Ev,je];var oe=u(Ie);ts(oe,{class:"mr-1 h-3 w-3"});var Be=d(oe);j(We=>{Ae(Ie,1,`btn btn-xs ${We??""}`),C(Be,` ${je??""}`)},[()=>s(c).selectedWho.length===0?" btn-soft btn-info":s(c).selectedWho.includes(je)?" btn-info":"btn-dash btn-info"]),v($e,Ie)});var ct=d(Ge,2);{var St=$e=>{var je=Nv();je.__click=[$v];var Ie=u(je);_t(Ie,{class:"h-3 w-3"}),v($e,je)};I(ct,$e=>{s(c).selectedWho.length>0&&$e(St)})}v(Q,ge)};I(ke,Q=>{s(i).length>0&&Q(ot)})}var ft=d(T,2),Z=u(ft),Te=u(Z),Je=u(Te),Ke=u(Je);Ke.__click=[Tv];var tt=u(Ke),te=u(tt);Ls(te,{class:"h-4 w-4"});var kr=d(te,2);{var Qt=Q=>{var ge=st();j(()=>C(ge,s(c).sortDirection==="asc"?"↑":"↓")),v(Q,ge)};I(kr,Q=>{s(c).sortColumn==="productName"&&Q(Qt)})}var At=d(Ke);At.__click=[Av];var Ee=u(At),rt=u(Ee);ir(rt,{class:"h-4 w-4"});var nt=d(rt,2);{var at=Q=>{var ge=st();j(()=>C(ge,s(c).sortDirection==="asc"?"↑":"↓")),v(Q,ge)};I(nt,Q=>{s(c).sortColumn==="store"&&Q(at)})}var Ye=d(At);Ye.__click=[Iv];var Ve=u(Ye),lt=u(Ve);Wn(lt,{class:"h-4 w-4"});var vt=d(lt,2);{var wt=Q=>{var ge=st();j(()=>C(ge,s(c).sortDirection==="asc"?"↑":"↓")),v(Q,ge)};I(vt,Q=>{s(c).sortColumn==="who"&&Q(wt)})}var ht=d(Ye);ht.__click=[Dv];var Kt=u(ht),Yt=d(u(Kt));{var ur=Q=>{var ge=st();j(()=>C(ge,s(c).sortDirection==="asc"?"↑":"↓")),v(Q,ge)};I(Yt,Q=>{s(c).sortColumn==="productType"&&Q(ur)})}var Zt=d(ht,2),Tr=u(Zt),Ar=u(Tr);En(Ar,{class:"h-4 w-4"});var Ir=d(Zt),Dr=u(Ir),Mr=u(Dr);Ou(Mr,{class:"h-4 w-4"});var dr=d(Te);Le(dr,21,()=>Object.entries(s(n)),([Q,ge])=>Q,(Q,ge)=>{var qe=U(()=>Ks(s(ge),2));let Xe=()=>s(qe)[0],Ge=()=>s(qe)[1];var ct=Fv(),St=L(ct);{var $e=Ie=>{const oe=U(()=>jn(Xe()));var Be=Ov(),We=u(Be),fe=u(We),xt=u(fe),Ft=u(xt);{var Rr=qt=>{var _r=st();j(()=>C(_r,`🏪 ${Xe()??""} (${Ge().length??""})`)),v(qt,_r)},er=qt=>{var _r=J(),ca=L(_r);{var ua=Nt=>{var tr=Mv(),kn=u(tr);un(kn,()=>s(oe).icon,(va,ha)=>{ha(va,{class:"h-4 w-4"})});var Tn=d(kn,2),fa=u(Tn),tn=d(Tn,2),An=u(tn);j(()=>{C(fa,s(oe).displayName),C(An,`(${Ge().length??""})`)}),v(Nt,tr)},da=Nt=>{var tr=st();j(()=>C(tr,`📦 ${Xe()??""} (${Ge().length??""})`)),v(Nt,tr)};I(ca,Nt=>{s(c).groupBy==="productType"?Nt(ua):Nt(da,!1)},!0)}v(qt,_r)};I(Ft,qt=>{s(c).groupBy==="store"?qt(Rr):qt(er,!1)})}var Or=d(xt,2),en=u(Or);en.__click=[Cv,$,Ge];var oa=u(en);ir(oa,{class:"h-3 w-3"});var Nn=d(en,2);Nn.__click=[Rv,$,Ge];var la=u(Nn);Wn(la,{class:"h-3 w-3"}),v(Ie,Be)};I(St,Ie=>{Xe()!==""&&Ie($e)})}var je=d(St,2);Le(je,17,()=>Yu(Ge(),s(c)),Ie=>Ie.$id,(Ie,oe)=>{const Be=U(()=>B.getFormattedTotalNeeded(s(oe).$id)),We=U(()=>jn(s(oe).productType)),fe=U(()=>Zu(s(oe).purchases||[]));var xt=Xv(),Ft=u(xt);Ft.__click=[qv,x,oe];var Rr=u(Ft),er=u(Rr),Or=u(er),en=u(Or),oa=d(Or,2);{var Nn=ee=>{var me=jv(),Ze=u(me);j(()=>C(Ze,`Ancien: ${s(oe).previousNames[0]??""}`)),v(ee,me)};I(oa,ee=>{s(oe).previousNames&&s(oe).previousNames.length>0&&ee(Nn)})}var la=d(er,2),qt=u(la);{var _r=ee=>{var me=Bv(),Ze=u(me);Ba(Ze,{class:"text-success h-4 w-4"}),v(ee,me)};I(qt,ee=>{s(oe).pFrais&&ee(_r)})}var ca=d(qt,2);{var ua=ee=>{var me=Lv(),Ze=u(me);La(Ze,{class:"text-info h-4 w-4"}),v(ee,me)};I(ca,ee=>{s(oe).pSurgel&&ee(ua)})}var da=d(Rr,2);ln(da);var Nt=d(Ft);Nt.__click=[zv,x,oe];var tr=u(Nt);{var kn=ee=>{var me=Vv(),Ze=u(me);j(()=>{Vn(me,"data-tip",s(oe).storeInfo.storeComment),C(Ze,s(oe).storeInfo.storeName||"-")}),v(ee,me)},Tn=ee=>{var me=st();j(()=>C(me,s(oe).storeInfo?.storeName||"-")),v(ee,me)};I(tr,ee=>{s(oe).storeInfo?.storeComment?ee(kn):ee(Tn,!1)})}var fa=d(tr,2);ln(fa);var tn=d(Nt);tn.__click=[Wv,x,oe];var An=u(tn);{var va=ee=>{var me=Gv();Le(me,20,()=>s(oe).who,Ze=>Ze,(Ze,rr)=>{var mr=Uv(),rn=u(mr);j(()=>C(rn,rr)),v(Ze,mr)}),v(ee,me)},ha=ee=>{var me=st("-");v(ee,me)};I(An,ee=>{s(oe).who&&s(oe).who.length>0?ee(va):ee(ha,!1)})}var go=d(An,2);ln(go);var pa=d(tn),bo=u(pa),rs=u(bo);un(rs,()=>s(We).icon,(ee,me)=>{me(ee,{class:"h-3 w-3"})});var yo=d(rs),_a=d(pa);_a.__click=[Hv,x,oe];var ns=u(_a),wo=u(ns),as=d(ns,2);{var So=ee=>{var me=Qv(),Ze=u(me),rr=u(Ze),mr=d(rr);es(mr,{class:"h-3 w-3"});var rn=d(Ze,2),In=u(rn),nn=d(In);Qu(nn,{class:"h-3 w-3"}),j(()=>{C(rr,`${s(oe)?.nbRecipes??""} `),C(In,`${s(oe)?.totalAssiettes??""} `)}),v(ee,me)};I(as,ee=>{(s(oe).nbRecipes||s(oe).totalAssiettes)&&ee(So)})}var xo=d(as,2);ln(xo);var ma=d(_a);ma.__click=[Kv,x,oe];var ss=u(ma),is=u(ss);Le(is,17,()=>s(fe),ee=>ee.status,(ee,me)=>{const Ze=U(()=>r[s(me).icon]);var rr=Yv(),mr=u(rr);un(mr,()=>s(Ze),(nn,Io)=>{Io(nn,{class:"h-4 w-4"})});var rn=d(mr,2),In=u(rn);j(nn=>{Ae(rr,1,`badge badge-soft flex items-center gap-2 ${s(me).badgeClass??""}`),C(In,nn)},[()=>sa(s(me).quantity,s(me).unit)]),v(ee,rr)});var Eo=d(is,2);{var Po=ee=>{var me=Zv();v(ee,me)};I(Eo,ee=>{s(fe).length===0&&ee(Po)})}var $o=d(ss,2);ln($o);var No=d(ma),ko=u(No);{var To=ee=>{var me=Jv(),Ze=u(me);j(()=>C(Ze,s(oe).displayMissingQuantity)),v(ee,me)},Ao=ee=>{Tu(ee,{size:28,strokeWidth:3,class:"text-success m-auto"})};I(ko,ee=>{s(oe).displayMissingQuantity!=="✅ Complet"?ee(To):ee(Ao,!1)})}j(()=>{C(en,s(oe).productName),Ae(Nt,1,`${s(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Ae(pa,1,Ci(s(c).groupBy==="productType"?"hidden":"")),C(yo,` ${s(We).displayName??""}`),C(wo,s(Be))}),v(Ie,xt)}),v(Q,ct)});var fr=d(Z,2);{var vr=Q=>{var ge=eh();v(Q,ge)};I(fr,Q=>{Object.values(s(n)).flat().length===0&&Q(vr)})}var Jt=d(P,2);{var Xt=Q=>{gf(Q,{get productId(){return s(f)},get initialTab(){return s(h)},onClose:b})};I(Jt,Q=>{s(f)&&Q(Xt)})}var hr=d(Jt,2);{var pr=Q=>{Of(Q,{get productIds(){return s(p)},get products(){return s(g)},get editType(){return s(m)},onClose:M,onSuccess:E})};I(hr,Q=>{s(_)&&Q(pr)})}var Cr=d(hr,2);ev(Cr,{}),j(()=>{C(F,` ${s(a).total??""}`),lc(Pe,s(c).searchQuery),Vr(Qe,s(c).groupBy==="none"),Vr(ue,s(c).groupBy==="store"),Vr(ye,s(c).groupBy==="productType"),Ae(At,1,`hover:bg-base-100 cursor-pointer text-center ${s(c).groupBy==="store"?"hidden":""}`),Ae(ht,1,`hover:bg-base-100 cursor-pointer text-center ${s(c).groupBy==="productType"?"hidden":""}`)}),v(e,S),H()}yt(["click","input","change"]);vl();var nh=y('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function ah(e){var t=nh();v(e,t)}var sh=y('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function ih(e,t){var r=sh(),n=d(u(r),2),a=d(u(n),2),o=u(a);j(()=>C(o,t.message)),v(e,r)}var oh=y('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function lh(e,t){var r=oh(),n=u(r),a=u(n);mo(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(u(o),2),l=u(i);j(()=>C(l,t.message||"Erreur inconnue")),v(e,r)}var ch=y('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),uh=y('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),dh=y('<div class="text-base-content/60"> </div>'),fh=y('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),vh=y('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),hh=y('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),ph=y('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function _h(e,t){G(t,!0);let r,n=X(null),a=X(!0),o=X(!1);Bi(async()=>{r=Xc();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await B.initialize(r)}catch(D){const re=D instanceof Error?D.message:"Erreur lors de l'initialisation";N(n,re,!0),console.error("[App] Erreur initialisation:",D)}finally{N(a,!1)}}),_c(()=>{B.destroy()});async function i(){if(!(!r||s(o))){N(o,!0);try{await B.forceReload(r)}catch(D){console.error("[App] Erreur lors du rechargement forcé:",D)}finally{N(o,!1)}}}const l=U(()=>s(n)||B.error),c=U(()=>s(a)||B.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var h=ph(),_=u(h),m=u(_),p=u(m),g=d(u(p),2),x=u(g);{var b=D=>{var re=ch();v(D,re)};I(x,D=>{B.realtimeConnected&&D(b)})}var $=d(x,2);{var M=D=>{var re=uh();v(D,re)};I($,D=>{B.syncing&&D(M)})}var E=d($,2);{var S=D=>{var re=dh(),pe=u(re);j(Pe=>C(pe,`Maj: ${Pe??""}`),[()=>new Date(B.lastSync).toLocaleTimeString()]),v(D,re)};I(E,D=>{B.lastSync&&D(S)})}var P=d(E,2);{var k=D=>{var re=fh();let pe;re.__click=i;var Pe=u(re);zu(Pe,{class:"h-4 w-4"}),j(Me=>{pe=Ae(re,1,"btn btn-outline btn-sm",null,pe,Me),re.disabled=s(o)||B.loading},[()=>({loading:s(o)||B.loading})]),v(D,re)};I(P,D=>{s(n)||D(k)})}var R=d(P,2);{var A=D=>{var re=vh(),pe=u(re),Pe=u(pe);qu(Pe,{class:"mr-2 h-4 w-4"}),j(()=>Vn(pe,"href",f)),v(D,re)};I(R,D=>{s(n)&&D(A)})}var F=d(_,2),T=u(F);{var O=D=>{lh(D,{get message(){return s(l)}})},z=D=>{var re=J(),pe=L(re);{var Pe=Me=>{ih(Me,{get message(){return s(l)}})};I(pe,Me=>{s(l)&&Me(Pe)},!0)}v(D,re)};I(T,D=>{s(n)?D(O):D(z,!1)})}var be=d(T,2);{var De=D=>{ah(D)};I(be,D=>{s(c)&&D(De)})}var Se=d(be,2);{var K=D=>{rh(D,{})},we=D=>{var re=J(),pe=L(re);{var Pe=Me=>{var Re=hh();v(Me,Re)};I(pe,Me=>{!B.loading&&!s(n)&&Me(Pe)},!0)}v(D,re)};I(Se,D=>{B.enrichedProducts.length>0?D(K):D(we,!1)})}v(e,h),H()}yt(["click"]);Zl(_h,{target:document.getElementById("app_products")});
