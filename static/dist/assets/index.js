(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const es=!1;var sn=Array.isArray,To=Array.prototype.indexOf,Kn=Array.from,On=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,Do=Object.getOwnPropertyDescriptors,Co=Object.prototype,No=Array.prototype,ts=Object.getPrototypeOf,pa=Object.isExtensible;function Ir(e){return typeof e=="function"}const le=()=>{};function Io(e){for(var t=0;t<e.length;t++)e[t]()}function rs(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function ns(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ct=2,Yn=4,Jn=8,cr=16,Bt=32,ur=64,Zn=128,wt=256,rn=512,at=1024,ht=2048,Ft=4096,xt=8192,dr=16384,Fn=32768,vr=65536,ma=1<<17,Ro=1<<18,Er=1<<19,Oo=1<<20,qn=1<<21,on=1<<22,ar=1<<23,sr=Symbol("$state"),as=Symbol("legacy props"),qo=Symbol(""),Lr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ss(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function jo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Lo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Bo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function zo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Uo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Qo(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ho(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Wo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Vo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Go(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ln=1,cn=2,os=4,Ko=8,Yo=16,Jo=1,Zo=2,Fo=4,Xo=8,ei=16,ti=1,ri=2,et=Symbol(),ni="http://www.w3.org/1999/xhtml",ai="http://www.w3.org/2000/svg",si="@attach";function oi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ii(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let li=!1;function is(e){return e===this.v}function ls(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ci(e,t){return e!==t}function cs(e){return!ls(e,this.v)}let Ar=!1,ui=!1;function di(){Ar=!0}let Ye=null;function br(e){Ye=e}function Z(e,t=!1,r){Ye={p:Ye,c:null,e:null,s:e,x:null,l:Ar&&!t?{s:null,u:null,$:[]}:null}}function F(e){var t=Ye,r=t.e;if(r!==null){t.e=null;for(var n of r)xs(n)}return Ye=t.p,{}}function Mr(){return!Ar||Ye!==null&&Ye.l===null}let tr=[];function us(){var e=tr;tr=[],Io(e)}function ir(e){if(tr.length===0&&!Br){var t=tr;queueMicrotask(()=>{t===tr&&us()})}tr.push(e)}function vi(){for(;tr.length>0;)us()}const fi=new WeakMap;function ds(e){var t=Ie;if(t===null)return Re.f|=ar,e;if((t.f&Fn)===0){if((t.f&Zn)===0)throw!t.parent&&e instanceof Error&&vs(e),e;t.b.error(e)}else yr(e,t)}function yr(e,t){for(;t!==null;){if((t.f&Zn)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&vs(e),e}function vs(e){const t=fi.get(e);t&&(On(e,"message",{value:t.message}),On(e,"stack",{value:t.stack}))}const Jr=new Set;let Le=null,en=null,jn=new Set,Et=[],un=null,Ln=!1,Br=!1;class yt{current=new Map;#e=new Map;#t=new Set;#o=0;#d=null;#u=[];#i=[];#c=[];#l=[];#s=[];#v=[];skipped_effects=new Set;process(t){Et=[],en=null;var r=yt.apply(this);for(const o of t)this.#a(o);if(this.#o===0){this.#h();var n=this.#i,a=this.#c;this.#i=[],this.#c=[],this.#l=[],en=this,Le=null,ga(n),ga(a),en=null,this.#d?.resolve()}else this.#f(this.#i),this.#f(this.#c),this.#f(this.#l);r();for(const o of this.#u)Qr(o);this.#u=[]}#a(t){t.f^=at;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Bt|ur))!==0,o=a&&(n&at)!==0,i=o||(n&xt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=at:(n&Yn)!==0?this.#c.push(r):(n&at)===0&&((n&on)!==0&&r.b?.is_pending()?this.#u.push(r):pn(r)&&((r.f&cr)!==0&&this.#l.push(r),Qr(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#f(t){for(const r of t)((r.f&ht)!==0?this.#s:this.#v).push(r),it(r,at);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){Le=this}deactivate(){Le=null}flush(){if(Et.length>0){if(this.activate(),fs(),Le!==null&&Le!==this)return}else this.#o===0&&this.#h();this.deactivate();for(const t of jn)if(jn.delete(t),t(),Le!==null)break}#h(){for(const t of this.#t)t();if(this.#t.clear(),Jr.size>1){this.#e.clear();let t=!0;for(const r of Jr){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;hs(n)}if(Et.length>0){Le=r;const n=yt.apply(r);for(const a of Et)r.#a(a);Et=[],n()}}Le=null}Jr.delete(this)}increment(){this.#o+=1}decrement(){this.#o-=1;for(const t of this.#s)it(t,ht),lr(t);for(const t of this.#v)it(t,Ft),lr(t);this.flush()}add_callback(t){this.#t.add(t)}settled(){return(this.#d??=rs()).promise}static ensure(){if(Le===null){const t=Le=new yt;Jr.add(Le),Br||yt.enqueue(()=>{Le===t&&t.flush()})}return Le}static enqueue(t){ir(t)}static apply(t){return le}}function hi(e){var t=Br;Br=!0;try{for(var r;;){if(vi(),Et.length===0&&(Le?.flush(),Et.length===0))return un=null,r;fs()}}finally{Br=t}}function fs(){var e=_r;Ln=!0;try{var t=0;for(wa(!0);Et.length>0;){var r=yt.ensure();if(t++>1e3){var n,a;pi()}r.process(Et),Kt.clear()}}finally{Ln=!1,wa(e),un=null}}function pi(){try{Uo()}catch(e){yr(e,un)}}let er=null;function ga(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(dr|xt))===0&&pn(n)&&(er=[],Qr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?ks(n):n.fn=null),er?.length>0)){Kt.clear();for(const a of er)Qr(a);er=[]}}er=null}}function hs(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&ct)!==0?hs(t):(r&(on|cr))!==0&&(it(t,ht),lr(t))}}function lr(e){for(var t=un=e;t.parent!==null;){t=t.parent;var r=t.f;if(Ln&&t===Ie&&(r&cr)!==0)return;if((r&(ur|Bt))!==0){if((r&at)===0)return;t.f^=at}}Et.push(t)}function Xn(e){let t=0,r=Jt(0),n;return()=>{Di()&&(s(r),sa(()=>(t===0&&(n=Tr(()=>e(()=>At(r)))),t+=1,()=>{ir(()=>{t-=1,t===0&&(n?.(),n=void 0,At(r))})})))}}var mi=vr|Er|Zn;function gi(e,t,r){new _i(e,t,r)}class _i{parent;#e=!1;#t;#o=null;#d;#u;#i;#c=null;#l=null;#s=null;#v=null;#a=0;#f=0;#h=!1;#m=null;#g=()=>{this.#m&&wr(this.#m,this.#a)};#n=Xn(()=>(this.#m=Jt(this.#a),()=>{this.#m=null}));constructor(t,r,n){this.#t=t,this.#d=r,this.#u=n,this.parent=Ie.b,this.#e=!!this.#d.pending,this.#i=Qt(()=>{Ie.b=this;{try{this.#c=tt(()=>n(this.#t))}catch(a){this.error(a)}this.#f>0?this.#y():this.#e=!1}},mi)}#_(){try{this.#c=tt(()=>this.#u(this.#t))}catch(t){this.error(t)}this.#e=!1}#b(){const t=this.#d.pending;t&&(this.#l=tt(()=>t(this.#t)),yt.enqueue(()=>{this.#c=this.#p(()=>(yt.ensure(),tt(()=>this.#u(this.#t)))),this.#f>0?this.#y():(Ot(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#d.pending}#p(t){var r=Ie,n=Re,a=Ye;Mt(this.#i),lt(this.#i),br(this.#i.ctx);try{return t()}catch(o){return ds(o),null}finally{Mt(r),lt(n),br(a)}}#y(){const t=this.#d.pending;this.#c!==null&&(this.#v=document.createDocumentFragment(),bi(this.#c,this.#v)),this.#l===null&&(this.#l=tt(()=>t(this.#t)))}#w(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#w(t);return}this.#f+=t,this.#f===0&&(this.#e=!1,this.#l&&Ot(this.#l,()=>{this.#l=null}),this.#v&&(this.#t.before(this.#v),this.#v=null),ir(()=>{yt.ensure().flush()}))}update_pending_count(t){this.#w(t),this.#a+=t,jn.add(this.#g)}get_effect_pending(){return this.#n(),s(this.#m)}error(t){var r=this.#d.onerror;let n=this.#d.failed;if(this.#h||!r&&!n)throw t;this.#c&&(rt(this.#c),this.#c=null),this.#l&&(rt(this.#l),this.#l=null),this.#s&&(rt(this.#s),this.#s=null);var a=!1,o=!1;const i=()=>{if(a){ii();return}a=!0,o&&Go(),yt.ensure(),this.#a=0,this.#s!==null&&Ot(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#c=this.#p(()=>(this.#h=!1,tt(()=>this.#u(this.#t)))),this.#f>0?this.#y():this.#e=!1};var l=Re;try{lt(null),o=!0,r?.(t,i),o=!1}catch(c){yr(c,this.#i&&this.#i.parent)}finally{lt(l)}n&&ir(()=>{this.#s=this.#p(()=>{this.#h=!0;try{return tt(()=>{n(this.#t,()=>t,()=>i)})}catch(c){return yr(c,this.#i.parent),null}finally{this.#h=!1}})})}}function bi(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:Vr(r);t.append(r),r=a}}function ps(e,t,r){const n=Mr()?dn:ea;if(t.length===0){r(e.map(n));return}var a=Le,o=Ie,i=yi();Promise.all(t.map(l=>wi(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(o.f&dr)===0&&yr(c,o)}a?.deactivate(),ms()}).catch(l=>{yr(l,o)})}function yi(){var e=Ie,t=Re,r=Ye,n=Le;return function(){Mt(e),lt(t),br(r),n?.activate()}}function ms(){Mt(null),lt(null),br(null)}function dn(e){var t=ct|ht,r=Re!==null&&(Re.f&ct)!==0?Re:null;return Ie===null||r!==null&&(r.f&wt)!==0?t|=wt:Ie.f|=Er,{ctx:Ye,deps:null,effects:null,equals:is,f:t,fn:e,reactions:null,rv:0,v:et,wv:0,parent:r??Ie,ac:null}}function wi(e,t){let r=Ie;r===null&&jo();var n=r.b,a=void 0,o=Jt(et),i=!Re,l=new Map;return Ni(()=>{var c=rs();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=Le,h=n.is_pending();i&&(n.update_pending_count(1),h||(f.increment(),l.get(f)?.reject(Lr),l.set(f,c)));const g=(p,m=void 0)=>{h||f.activate(),m?m!==Lr&&(o.f|=ar,wr(o,m)):((o.f&ar)!==0&&(o.f^=ar),wr(o,p)),i&&(n.update_pending_count(-1),h||f.decrement()),ms()};c.promise.then(g,p=>g(null,p||"unknown"))}),na(()=>{for(const c of l.values())c.reject(Lr)}),new Promise(c=>{function f(h){function g(){h===a?c(o):f(a)}h.then(g,g)}f(a)})}function J(e){const t=dn(e);return Ms(t),t}function ea(e){const t=dn(e);return t.equals=cs,t}function gs(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)rt(t[r])}}function Si(e){for(var t=e.parent;t!==null;){if((t.f&ct)===0)return t;t=t.parent}return null}function ta(e){var t,r=Ie;Mt(Si(e));try{gs(e),t=Ns(e)}finally{Mt(r)}return t}function _s(e){var t=ta(e);if(e.equals(t)||(e.v=t,e.wv=Ds()),!fr){var r=(Wt||(e.f&wt)!==0)&&e.deps!==null?Ft:at;it(e,r)}}const Kt=new Map;function Jt(e,t){var r={f:0,v:e,reactions:null,equals:is,rv:0,wv:0};return r}function V(e,t){const r=Jt(e);return Ms(r),r}function xi(e,t=!1,r=!0){const n=Jt(e);return t||(n.equals=cs),Ar&&r&&Ye!==null&&Ye.l!==null&&(Ye.l.s??=[]).push(n),n}function b(e,t,r=!1){Re!==null&&(!St||(Re.f&ma)!==0)&&Mr()&&(Re.f&(ct|cr|on|ma))!==0&&!qt?.includes(e)&&Vo();let n=r?je(t):t;return wr(e,n)}function wr(e,t){if(!e.equals(t)){var r=e.v;fr?Kt.set(e,t):Kt.set(e,r),e.v=t;var n=yt.ensure();n.capture(e,r),(e.f&ct)!==0&&((e.f&ht)!==0&&ta(e),it(e,(e.f&wt)===0?at:Ft)),e.wv=Ds(),bs(e,ht),Mr()&&Ie!==null&&(Ie.f&at)!==0&&(Ie.f&(Bt|ur))===0&&(_t===null?Oi([e]):_t.push(e))}return t}function At(e){b(e,e.v+1)}function bs(e,t){var r=e.reactions;if(r!==null)for(var n=Mr(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===Ie)){var c=(l&ht)===0;c&&it(i,t),(l&ct)!==0?bs(i,Ft):c&&((l&cr)!==0&&er!==null&&er.push(i),lr(i))}}}function je(e){if(typeof e!="object"||e===null||sr in e)return e;const t=ts(e);if(t!==Co&&t!==No)return e;var r=new Map,n=sn(e),a=V(0),o=jt,i=l=>{if(jt===o)return l();var c=Re,f=jt;lt(null),xa(o);var h=l();return lt(c),xa(f),h};return n&&r.set("length",V(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Ho();var h=r.get(c);return h===void 0?h=i(()=>{var g=V(f.value);return r.set(c,g),g}):b(h,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const h=i(()=>V(et));r.set(c,h),At(a)}}else b(f,et),At(a);return!0},get(l,c,f){if(c===sr)return e;var h=r.get(c),g=c in l;if(h===void 0&&(!g||Gt(l,c)?.writable)&&(h=i(()=>{var m=je(g?l[c]:et),_=V(m);return _}),r.set(c,h)),h!==void 0){var p=s(h);return p===et?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var h=r.get(c);h&&(f.value=s(h))}else if(f===void 0){var g=r.get(c),p=g?.v;if(g!==void 0&&p!==et)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===sr)return!0;var f=r.get(c),h=f!==void 0&&f.v!==et||Reflect.has(l,c);if(f!==void 0||Ie!==null&&(!h||Gt(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=h?je(l[c]):et,m=V(p);return m}),r.set(c,f));var g=s(f);if(g===et)return!1}return h},set(l,c,f,h){var g=r.get(c),p=c in l;if(n&&c==="length")for(var m=f;m<g.v;m+=1){var _=r.get(m+"");_!==void 0?b(_,et):m in l&&(_=i(()=>V(et)),r.set(m+"",_))}if(g===void 0)(!p||Gt(l,c)?.writable)&&(g=i(()=>V(void 0)),b(g,je(f)),r.set(c,g));else{p=g.v!==et;var x=i(()=>je(f));b(g,x)}var w=Reflect.getOwnPropertyDescriptor(l,c);if(w?.set&&w.set.call(h,f),!p){if(n&&typeof c=="string"){var P=r.get("length"),C=Number(c);Number.isInteger(C)&&C>=P.v&&b(P,C+1)}At(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(g=>{var p=r.get(g);return p===void 0||p.v!==et});for(var[f,h]of r)h.v!==et&&!(f in l)&&c.push(f);return c},setPrototypeOf(){Wo()}})}function _a(e){try{if(e!==null&&typeof e=="object"&&sr in e)return e[sr]}catch{}return e}function Pi(e,t){return Object.is(_a(e),_a(t))}var ba,ys,ws,Ss;function $i(){if(ba===void 0){ba=window,ys=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;ws=Gt(t,"firstChild").get,Ss=Gt(t,"nextSibling").get,pa(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),pa(r)&&(r.__t=void 0)}}function zt(e=""){return document.createTextNode(e)}function Sr(e){return ws.call(e)}function Vr(e){return Ss.call(e)}function u(e,t){return Sr(e)}function N(e,t=!1){{var r=Sr(e);return r instanceof Comment&&r.data===""?Vr(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=Vr(n);return n}function ki(e){e.textContent=""}function vn(){return!1}function Ei(e,t){if(t){const r=document.body;e.autofocus=!0,ir(()=>{document.activeElement===r&&e.focus()})}}let ya=!1;function Ai(){ya||(ya=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function fn(e){var t=Re,r=Ie;lt(null),Mt(null);try{return e()}finally{lt(t),Mt(r)}}function ra(e,t,r,n=r){e.addEventListener(t,()=>fn(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Ai()}function Mi(e){Ie===null&&Re===null&&zo(),Re!==null&&(Re.f&wt)!==0&&Ie===null&&Bo(),fr&&Lo()}function Ti(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Ut(e,t,r,n=!0){var a=Ie;a!==null&&(a.f&xt)!==0&&(e|=xt);var o={ctx:Ye,deps:null,nodes_start:null,nodes_end:null,f:e|ht,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Qr(o),o.f|=Fn}catch(c){throw rt(o),c}else t!==null&&lr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Er)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Ti(i,a),Re!==null&&(Re.f&ct)!==0&&(e&ur)===0)){var l=Re;(l.effects??=[]).push(i)}}return o}function Di(){return Re!==null&&!St}function na(e){const t=Ut(Jn,null,!1);return it(t,at),t.teardown=e,t}function Xt(e){Mi();var t=Ie.f,r=!Re&&(t&Bt)!==0&&(t&Fn)===0;if(r){var n=Ye;(n.e??=[]).push(e)}else return xs(e)}function xs(e){return Ut(Yn|Oo,e,!1)}function Ci(e){yt.ensure();const t=Ut(ur|Er,e,!0);return(r={})=>new Promise(n=>{r.outro?Ot(t,()=>{rt(t),n(void 0)}):(rt(t),n(void 0))})}function aa(e){return Ut(Yn,e,!1)}function Ni(e){return Ut(on|Er,e,!0)}function sa(e,t=0){return Ut(Jn|t,e,!0)}function B(e,t=[],r=[]){ps(t,r,n=>{Ut(Jn,()=>e(...n.map(s)),!0)})}function Qt(e,t=0){var r=Ut(cr|t,e,!0);return r}function tt(e,t=!0){return Ut(Bt|Er,e,!0,t)}function Ps(e){var t=e.teardown;if(t!==null){const r=fr,n=Re;Sa(!0),lt(null);try{t.call(null)}finally{Sa(r),lt(n)}}}function $s(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&fn(()=>{a.abort(Lr)});var n=r.next;(r.f&ur)!==0?r.parent=null:rt(r,t),r=n}}function Ii(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Bt)===0&&rt(t),t=r}}function rt(e,t=!0){var r=!1;(t||(e.f&Ro)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Ri(e.nodes_start,e.nodes_end),r=!0),$s(e,t&&!r),nn(e,0),it(e,dr);var n=e.transitions;if(n!==null)for(const o of n)o.stop();Ps(e);var a=e.parent;a!==null&&a.first!==null&&ks(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Ri(e,t){for(;e!==null;){var r=e===t?null:Vr(e);e.remove(),e=r}}function ks(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Ot(e,t){var r=[];oa(e,r,!0),Es(r,()=>{rt(e),t&&t()})}function Es(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function oa(e,t,r){if((e.f&xt)===0){if(e.f^=xt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,o=(n.f&vr)!==0||(n.f&Bt)!==0;oa(n,t,o?r:!1),n=a}}}function hn(e){As(e,!0)}function As(e,t){if((e.f&xt)!==0){e.f^=xt,(e.f&at)===0&&(it(e,ht),lr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&vr)!==0||(r.f&Bt)!==0;As(r,a?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let _r=!1;function wa(e){_r=e}let fr=!1;function Sa(e){fr=e}let Re=null,St=!1;function lt(e){Re=e}let Ie=null;function Mt(e){Ie=e}let qt=null;function Ms(e){Re!==null&&(qt===null?qt=[e]:qt.push(e))}let ot=null,ft=0,_t=null;function Oi(e){_t=e}let Ts=1,Ur=0,jt=Ur;function xa(e){jt=e}let Wt=!1;function Ds(){return++Ts}function pn(e){var t=e.f;if((t&ht)!==0)return!0;if((t&Ft)!==0){var r=e.deps,n=(t&wt)!==0;if(r!==null){var a,o,i=(t&rn)!==0,l=n&&Ie!==null&&!Wt,c=r.length;if((i||l)&&(Ie===null||(Ie.f&dr)===0)){var f=e,h=f.parent;for(a=0;a<c;a++)o=r[a],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=rn),l&&h!==null&&(h.f&wt)===0&&(f.f^=wt)}for(a=0;a<c;a++)if(o=r[a],pn(o)&&_s(o),o.wv>e.wv)return!0}(!n||Ie!==null&&!Wt)&&it(e,at)}return!1}function Cs(e,t,r=!0){var n=e.reactions;if(n!==null&&!qt?.includes(e))for(var a=0;a<n.length;a++){var o=n[a];(o.f&ct)!==0?Cs(o,t,!1):t===o&&(r?it(o,ht):(o.f&at)!==0&&it(o,Ft),lr(o))}}function Ns(e){var t=ot,r=ft,n=_t,a=Re,o=Wt,i=qt,l=Ye,c=St,f=jt,h=e.f;ot=null,ft=0,_t=null,Wt=(h&wt)!==0&&(St||!_r||Re===null),Re=(h&(Bt|ur))===0?e:null,qt=null,br(e.ctx),St=!1,jt=++Ur,e.ac!==null&&(fn(()=>{e.ac.abort(Lr)}),e.ac=null);try{e.f|=qn;var g=e.fn,p=g(),m=e.deps;if(ot!==null){var _;if(nn(e,ft),m!==null&&ft>0)for(m.length=ft+ot.length,_=0;_<ot.length;_++)m[ft+_]=ot[_];else e.deps=m=ot;if(!Wt||(h&ct)!==0&&e.reactions!==null)for(_=ft;_<m.length;_++)(m[_].reactions??=[]).push(e)}else m!==null&&ft<m.length&&(nn(e,ft),m.length=ft);if(Mr()&&_t!==null&&!St&&m!==null&&(e.f&(ct|Ft|ht))===0)for(_=0;_<_t.length;_++)Cs(_t[_],e);return a!==null&&a!==e&&(Ur++,_t!==null&&(n===null?n=_t:n.push(..._t))),(e.f&ar)!==0&&(e.f^=ar),p}catch(x){return ds(x)}finally{e.f^=qn,ot=t,ft=r,_t=n,Re=a,Wt=o,qt=i,br(l),St=c,jt=f}}function qi(e,t){let r=t.reactions;if(r!==null){var n=To.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&ct)!==0&&(ot===null||!ot.includes(t))&&(it(t,Ft),(t.f&(wt|rn))===0&&(t.f^=rn),gs(t),nn(t,0))}function nn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)qi(e,r[n])}function Qr(e){var t=e.f;if((t&dr)===0){it(e,at);var r=Ie,n=_r;Ie=e,_r=!0;try{(t&cr)!==0?Ii(e):$s(e),Ps(e);var a=Ns(e);e.teardown=typeof a=="function"?a:null,e.wv=Ts;var o;es&&ui&&(e.f&ht)!==0&&e.deps}finally{_r=n,Ie=r}}}async function ji(){await Promise.resolve(),hi()}function s(e){var t=e.f,r=(t&ct)!==0;if(Re!==null&&!St){var n=Ie!==null&&(Ie.f&dr)!==0;if(!n&&!qt?.includes(e)){var a=Re.deps;if((Re.f&qn)!==0)e.rv<Ur&&(e.rv=Ur,ot===null&&a!==null&&a[ft]===e?ft++:ot===null?ot=[e]:(!Wt||!ot.includes(e))&&ot.push(e));else{(Re.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[Re]:o.includes(Re)||o.push(Re)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&wt)===0&&(i.f^=wt)}if(fr){if(Kt.has(e))return Kt.get(e);if(r){i=e;var c=i.v;return((i.f&at)===0&&i.reactions!==null||Is(i))&&(c=ta(i)),Kt.set(i,c),c}}else r&&(i=e,pn(i)&&_s(i));if((e.f&ar)!==0)throw e.v;return e.v}function Is(e){if(e.v===et)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Kt.has(t)||(t.f&ct)!==0&&Is(t))return!0;return!1}function Tr(e){var t=St;try{return St=!0,e()}finally{St=t}}const Li=-7169;function it(e,t){e.f=e.f&Li|t}function Bi(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const zi=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ui(e){return zi.includes(e)}const Qi={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Hi(e){return e=e.toLowerCase(),Qi[e]??e}const Wi=["touchstart","touchmove"];function Vi(e){return Wi.includes(e)}const Rs=new Set,Bn=new Set;function ia(e,t,r,n={}){function a(o){if(n.capture||qr.call(t,o),!o.cancelBubble)return fn(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ir(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function zn(e,t,r,n={}){var a=ia(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function En(e,t,r,n,a){var o={capture:n,passive:a},i=ia(e,t,r,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&na(()=>{t.removeEventListener(e,i,o)})}function Je(e){for(var t=0;t<e.length;t++)Rs.add(e[t]);for(var r of Bn)r(e)}let Pa=null;function qr(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;Pa=e;var i=0,l=Pa===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(o=a[i]||e.target,o!==t){On(e,"currentTarget",{configurable:!0,get(){return o||r}});var h=Re,g=Ie;lt(null),Mt(null);try{for(var p,m=[];o!==null;){var _=o.assignedSlot||o.parentNode||o.host||null;try{var x=o["__"+n];if(x!=null&&(!o.disabled||e.target===o))if(sn(x)){var[w,...P]=x;w.apply(o,[e,...P])}else x.call(o,e)}catch(C){p?m.push(C):p=C}if(e.cancelBubble||_===t||_===null)break;o=_}if(p){for(let C of m)queueMicrotask(()=>{throw C});throw p}}finally{e.__root=t,delete e.currentTarget,lt(h),Mt(g)}}}function Os(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function xr(e,t){var r=Ie;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function y(e,t){var r=(t&ti)!==0,n=(t&ri)!==0,a,o=!e.startsWith("<!>");return()=>{a===void 0&&(a=Os(o?e:"<!>"+e),r||(a=Sr(a)));var i=n||ys?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Sr(i),c=i.lastChild;xr(l,c)}else xr(i,i);return i}}function Gi(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Os(a),l=Sr(i);o=Sr(l)}var c=o.cloneNode(!0);return xr(c,c),c}}function Ki(e,t){return Gi(e,t,"svg")}function pt(e=""){{var t=zt(e+"");return xr(t,t),t}}function K(){var e=document.createDocumentFragment(),t=document.createComment(""),r=zt();return e.append(t,r),xr(t,r),e}function v(e,t){e!==null&&e.before(t)}function U(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Yi(e,t){return Ji(e,t)}const mr=new Map;function Ji(e,{target:t,anchor:r,props:n={},events:a,context:o,intro:i=!0}){$i();var l=new Set,c=g=>{for(var p=0;p<g.length;p++){var m=g[p];if(!l.has(m)){l.add(m);var _=Vi(m);t.addEventListener(m,qr,{passive:_});var x=mr.get(m);x===void 0?(document.addEventListener(m,qr,{passive:_}),mr.set(m,1)):mr.set(m,x+1)}}};c(Kn(Rs)),Bn.add(c);var f=void 0,h=Ci(()=>{var g=r??t.appendChild(zt());return gi(g,{pending:()=>{}},p=>{if(o){Z({});var m=Ye;m.c=o}a&&(n.$$events=a),f=e(p,n)||{},o&&F()}),()=>{for(var p of l){t.removeEventListener(p,qr);var m=mr.get(p);--m===0?(document.removeEventListener(p,qr),mr.delete(p)):mr.set(p,m)}Bn.delete(c),g!==r&&g.parentNode?.removeChild(g)}});return Zi.set(f,h),f}let Zi=new WeakMap;function E(e,t,r=!1){var n=e,a=null,o=null,i=et,l=r?vr:0,c=!1;const f=(m,_=!0)=>{c=!0,p(_,m)};var h=null;function g(){h!==null&&(h.lastChild.remove(),n.before(h),h=null);var m=i?a:o,_=i?o:a;m&&hn(m),_&&Ot(_,()=>{i?o=null:a=null})}const p=(m,_)=>{if(i!==(i=m)){var x=vn(),w=n;if(x&&(h=document.createDocumentFragment(),h.append(w=zt())),i?a??=_&&tt(()=>_(w)):o??=_&&tt(()=>_(w)),x){var P=Le,C=i?a:o,S=i?o:a;C&&P.skipped_effects.delete(C),S&&P.skipped_effects.add(S),P.add_callback(g)}else g()}};Qt(()=>{c=!1,t(f),c||p(null,null)},l)}function Fi(e,t,r){var n=e,a=et,o,i,l=null,c=Mr()?ci:ls;function f(){o&&Ot(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}Qt(()=>{if(c(a,a=t())){var h=n,g=vn();g&&(l=document.createDocumentFragment(),l.append(h=zt())),i=tt(()=>r(h)),g?Le.add_callback(f):f()}})}function Hr(e,t){return t}function Xi(e,t,r){for(var n=e.items,a=[],o=t.length,i=0;i<o;i++)oa(t[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;ki(c),c.append(r),n.clear(),kt(e,t[0].prev,t[o-1].next)}Es(a,()=>{for(var f=0;f<o;f++){var h=t[f];l||(n.delete(h.k),kt(e,h.prev,h.next)),rt(h.e,!l)}})}function st(e,t,r,n,a,o=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&os)!==0;if(c){var f=e;i=f.appendChild(zt())}var h=null,g=!1,p=new Map,m=ea(()=>{var P=r();return sn(P)?P:P==null?[]:Kn(P)}),_,x;function w(){el(x,_,l,p,i,a,t,n,r),o!==null&&(_.length===0?h?hn(h):h=tt(()=>o(i)):h!==null&&Ot(h,()=>{h=null}))}Qt(()=>{x??=Ie,_=s(m);var P=_.length;if(!(g&&P===0)){g=P===0;var C,S,A,k;if(vn()){var M=new Set,$=Le;for(S=0;S<P;S+=1){A=_[S],k=n(A,S);var T=l.items.get(k)??p.get(k);T?(t&(ln|cn))!==0&&qs(T,A,S,t):(C=js(null,l,null,null,A,k,S,a,t,r,!0),p.set(k,C)),M.add(k)}for(const[D,L]of l.items)M.has(D)||$.skipped_effects.add(L.e);$.add_callback(w)}else w();s(m)}})}function el(e,t,r,n,a,o,i,l,c){var f=(i&Ko)!==0,h=(i&(ln|cn))!==0,g=t.length,p=r.items,m=r.first,_=m,x,w=null,P,C=[],S=[],A,k,M,$;if(f)for($=0;$<g;$+=1)A=t[$],k=l(A,$),M=p.get(k),M!==void 0&&(M.a?.measure(),(P??=new Set).add(M));for($=0;$<g;$+=1){if(A=t[$],k=l(A,$),M=p.get(k),M===void 0){var T=n.get(k);if(T!==void 0){n.delete(k),p.set(k,T);var D=w?w.next:_;kt(r,w,T),kt(r,T,D),An(T,D,a),w=T}else{var L=_?_.e.nodes_start:a;w=js(L,r,w,w===null?r.first:w.next,A,k,$,o,i,c)}p.set(k,w),C=[],S=[],_=w.next;continue}if(h&&qs(M,A,$,i),(M.e.f&xt)!==0&&(hn(M.e),f&&(M.a?.unfix(),(P??=new Set).delete(M))),M!==_){if(x!==void 0&&x.has(M)){if(C.length<S.length){var O=S[0],X;w=O.prev;var ce=C[0],q=C[C.length-1];for(X=0;X<C.length;X+=1)An(C[X],O,a);for(X=0;X<S.length;X+=1)x.delete(S[X]);kt(r,ce.prev,q.next),kt(r,w,ce),kt(r,q,O),_=O,w=q,$-=1,C=[],S=[]}else x.delete(M),An(M,_,a),kt(r,M.prev,M.next),kt(r,M,w===null?r.first:w.next),kt(r,w,M),w=M;continue}for(C=[],S=[];_!==null&&_.k!==k;)(_.e.f&xt)===0&&(x??=new Set).add(_),S.push(_),_=_.next;if(_===null)continue;M=_}C.push(M),w=M,_=M.next}if(_!==null||x!==void 0){for(var I=x===void 0?[]:Kn(x);_!==null;)(_.e.f&xt)===0&&I.push(_),_=_.next;var j=I.length;if(j>0){var ae=(i&os)!==0&&g===0?a:null;if(f){for($=0;$<j;$+=1)I[$].a?.measure();for($=0;$<j;$+=1)I[$].a?.fix()}Xi(r,I,ae)}}f&&ir(()=>{if(P!==void 0)for(M of P)M.a?.apply()}),e.first=r.first&&r.first.e,e.last=w&&w.e;for(var Y of n.values())rt(Y.e);n.clear()}function qs(e,t,r,n){(n&ln)!==0&&wr(e.v,t),(n&cn)!==0?wr(e.i,r):e.i=r}function js(e,t,r,n,a,o,i,l,c,f,h){var g=(c&ln)!==0,p=(c&Yo)===0,m=g?p?xi(a,!1,!1):Jt(a):a,_=(c&cn)===0?i:Jt(i),x={i:_,v:m,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var w=document.createDocumentFragment();w.append(e=zt())}return x.e=tt(()=>l(e,m,_,f),li),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?h||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function An(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=Vr(o);a.before(o),o=i}}function kt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ue(e,t,...r){var n=e,a=le,o;Qt(()=>{a!==(a=t())&&(o&&(rt(o),o=null),o=tt(()=>a(n,...r)))},vr)}function or(e,t,r){var n=e,a,o,i=null,l=null;function c(){o&&(Ot(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}Qt(()=>{if(a!==(a=t())){var f=vn();if(a){var h=n;f&&(i=document.createDocumentFragment(),i.append(h=zt()),o&&Le.skipped_effects.add(o)),l=tt(()=>r(h,a))}f?Le.add_callback(c):c()}},vr)}function tl(e,t,r,n,a,o){var i,l,c=null,f=e,h;Qt(()=>{const g=t()||null;var p=ai;g!==i&&(h&&(g===null?Ot(h,()=>{h=null,l=null}):g===l?hn(h):rt(h)),g&&g!==l&&(h=tt(()=>{if(c=document.createElementNS(p,g),xr(c,c),n){var m=c.appendChild(zt());n(c,m)}Ie.nodes_end=c,f.before(c)})),i=g,i&&(l=i))},vr)}function rl(e,t){var r=void 0,n;Qt(()=>{r!==(r=t())&&(n&&(rt(n),n=null),r&&(n=tt(()=>{aa(()=>r(e))})))})}function Ls(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Ls(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function nl(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Ls(e))&&(n&&(n+=" "),n+=t);return n}function al(e){return typeof e=="object"?nl(e):e??""}const $a=[...` 	
\r\f \v\uFEFF`];function sl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||$a.includes(n[i-1]))&&(l===n.length||$a.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function ka(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var o=e[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function Mn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ol(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Mn)),a&&c.push(...Object.keys(a).map(Mn));var f=0,h=-1;const x=e.length;for(var g=0;g<x;g++){var p=e[g];if(l?p==="/"&&e[g-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[g+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&h===-1)h=g;else if(p===";"||g===x-1){if(h!==-1){var m=Mn(e.substring(f,h).trim());if(!c.includes(m)){p!==";"&&g++;var _=e.substring(f,g).trim();r+=" "+_+";"}}f=g+1,h=-1}}}}return n&&(r+=ka(n)),a&&(r+=ka(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Me(e,t,r,n,a,o){var i=e.__className;if(i!==r||i===void 0){var l=sl(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&a!==o)for(var c in o){var f=!!o[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return o}function Tn(e,t={},r,n){for(var a in r){var o=r[a];t[a]!==o&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,n))}}function Bs(e,t,r,n){var a=e.__style;if(a!==t){var o=ol(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(Tn(e,r?.[0],n[0]),Tn(e,r?.[1],n[1],"important")):Tn(e,r,n));return n}function an(e,t,r=!1){if(e.multiple){if(t==null)return;if(!sn(t))return oi();for(var n of e.options)n.selected=t.includes(zr(n));return}for(n of e.options){var a=zr(n);if(Pi(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function zs(e){var t=new MutationObserver(()=>{an(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),na(()=>{t.disconnect()})}function rr(e,t,r=t){var n=!0;ra(e,"change",a=>{var o=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),zr);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&zr(l)}r(i)}),aa(()=>{var a=t();if(an(e,a,n),n&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=zr(o),r(a))}e.__value=a,n=!1}),zs(e)}function zr(e){return"__value"in e?e.__value:e.value}const Rr=Symbol("class"),Or=Symbol("style"),Us=Symbol("is custom element"),Qs=Symbol("is html");function il(e,t){var r=mn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Dn(e,t){var r=mn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function ll(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Zt(e,t,r,n){var a=mn(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[qo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Hs(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function cl(e,t,r,n,a=!1,o=!1){var i=mn(e),l=i[Us],c=!i[Qs],f=t||{},h=e.tagName==="OPTION";for(var g in t)g in r||(r[g]=null);r.class?r.class=al(r.class):r[Rr]&&(r.class=null),r[Or]&&(r.style??=null);var p=Hs(e);for(const A in r){let k=r[A];if(h&&A==="value"&&k==null){e.value=e.__value="",f[A]=k;continue}if(A==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Me(e,m,k,n,t?.[Rr],r[Rr]),f[A]=k,f[Rr]=r[Rr];continue}if(A==="style"){Bs(e,k,t?.[Or],r[Or]),f[A]=k,f[Or]=r[Or];continue}var _=f[A];if(!(k===_&&!(k===void 0&&e.hasAttribute(A)))){f[A]=k;var x=A[0]+A[1];if(x!=="$$")if(x==="on"){const M={},$="$$"+A;let T=A.slice(2);var w=Ui(T);if(Bi(T)&&(T=T.slice(0,-7),M.capture=!0),!w&&_){if(k!=null)continue;e.removeEventListener(T,f[$],M),f[$]=null}if(k!=null)if(w)e[`__${T}`]=k,Je([T]);else{let D=function(L){f[A].call(this,L)};var S=D;f[$]=ia(T,e,D,M)}else w&&(e[`__${T}`]=void 0)}else if(A==="style")Zt(e,A,k);else if(A==="autofocus")Ei(e,!!k);else if(!l&&(A==="__value"||A==="value"&&k!=null))e.value=e.__value=k;else if(A==="selected"&&h)ll(e,k);else{var P=A;c||(P=Hi(P));var C=P==="defaultValue"||P==="defaultChecked";if(k==null&&!l&&!C)if(i[A]=null,P==="value"||P==="checked"){let M=e;const $=t===void 0;if(P==="value"){let T=M.defaultValue;M.removeAttribute(P),M.defaultValue=T,M.value=M.__value=$?T:null}else{let T=M.defaultChecked;M.removeAttribute(P),M.defaultChecked=T,M.checked=$?T:!1}}else e.removeAttribute(A);else C||p.includes(P)&&(l||typeof k!="string")?(e[P]=k,P in i&&(i[P]=et)):typeof k!="function"&&Zt(e,P,k)}}}return f}function Ea(e,t,r=[],n=[],a,o=!1,i=!1){ps(r,n,l=>{var c=void 0,f={},h=e.nodeName==="SELECT",g=!1;if(Qt(()=>{var m=t(...l.map(s)),_=cl(e,c,m,a,o,i);g&&h&&"value"in m&&an(e,m.value);for(let w of Object.getOwnPropertySymbols(f))m[w]||rt(f[w]);for(let w of Object.getOwnPropertySymbols(m)){var x=m[w];w.description===si&&(!c||x!==c[w])&&(f[w]&&rt(f[w]),f[w]=tt(()=>rl(e,()=>x))),_[w]=x}c=_}),h){var p=e;aa(()=>{an(p,c.value,!0),zs(p)})}g=!0})}function mn(e){return e.__attributes??={[Us]:e.nodeName.includes("-"),[Qs]:e.namespaceURI===ni}}var Aa=new Map;function Hs(e){var t=e.getAttribute("is")||e.nodeName,r=Aa.get(t);if(r)return r;Aa.set(t,r=[]);for(var n,a=e,o=Element.prototype;o!==a;){n=Do(a);for(var i in n)n[i].set&&r.push(i);a=ts(a)}return r}function qe(e,t,r=t){var n=new WeakSet;ra(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Cn(e)?Nn(o):o,r(o),Le!==null&&n.add(Le),await ji(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),Tr(t)==null&&e.value&&(r(Cn(e)?Nn(e.value):e.value),Le!==null&&n.add(Le)),sa(()=>{var a=t();if(e===document.activeElement){var o=en??Le;if(n.has(o))return}Cn(e)&&a===Nn(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function ul(e,t,r=t){ra(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),Tr(t)==null&&r(e.checked),sa(()=>{var n=t();e.checked=!!n})}function Cn(e){var t=e.type;return t==="number"||t==="range"}function Nn(e){return e===""?null:+e}let Zr=!1;function dl(e){var t=Zr;try{return Zr=!1,[e(),Zr]}finally{Zr=t}}const vl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function pe(e,t,r){return new Proxy({props:e,exclude:t},vl)}const fl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ir(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Ir(a)&&(a=a());const o=Gt(a,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ir(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Gt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===sr||t===as)return!1;for(let r of e.props)if(Ir(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Ir(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function me(...e){return new Proxy({props:e},fl)}function Ae(e,t,r,n){var a=!Ar||(r&Zo)!==0,o=(r&Xo)!==0,i=(r&ei)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?Tr(n):n),l),h;if(o){var g=sr in e||as in e;h=Gt(e,t)?.set??(g&&t in e?S=>e[t]=S:void 0)}var p,m=!1;o?[p,m]=dl(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),h&&(a&&Qo(),h(p)));var _;if(a?_=()=>{var S=e[t];return S===void 0?f():(c=!0,S)}:_=()=>{var S=e[t];return S!==void 0&&(l=void 0),S===void 0?l:S},a&&(r&Fo)===0)return _;if(h){var x=e.$$legacy;return(function(S,A){return arguments.length>0?((!a||!A||x||m)&&h(A?_():S),S):_()})}var w=!1,P=((r&Jo)!==0?dn:ea)(()=>(w=!1,_()));o&&s(P);var C=Ie;return(function(S,A){if(arguments.length>0){const k=A?s(P):a&&o?je(S):S;return b(P,k),w=!0,l!==void 0&&(l=k),S}return fr&&w||(C.f&dr)!==0?P.v:s(P)})}function Ws(e){Ye===null&&ss(),Ar&&Ye.l!==null?pl(Ye).m.push(e):Xt(()=>{const t=Tr(e);if(typeof t=="function")return t})}function hl(e){Ye===null&&ss(),Ws(()=>()=>Tr(e))}function pl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const ml="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(ml);const gl="modulepreload",_l=function(e){return"/"+e},Ma={},bl=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(h=>{if(h=_l(h),h in Ma)return;Ma[h]=!0;const g=h.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":gl,g||(m.as="script"),m.crossOrigin="",m.href=h,c&&m.setAttribute("nonce",c),document.head.appendChild(m),g)return new Promise((_,x)=>{m.addEventListener("load",_),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};class yl extends Map{#e=new Map;#t=V(0);#o=V(0);#d=jt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#o.v=super.size}}#u(t){return jt===this.#d?V(t):Jt(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#u(0),r.set(t,n);else return s(this.#t),!1}return s(n),!0}forEach(t,r){this.#i(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#u(0),r.set(t,n);else{s(this.#t);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#t;if(a===void 0)a=this.#u(0),n.set(t,a),b(this.#o,super.size),At(l);else if(o!==r){At(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(h=>c.has(h));f&&At(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),b(this.#o,super.size),b(n,-1),At(this.#t)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;b(this.#o,0);for(var r of t.values())b(r,-1);At(this.#t),t.clear()}}#i(){s(this.#t);var t=this.#e;if(this.#o.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#u(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#t),super.keys()}values(){return this.#i(),super.values()}entries(){return this.#i(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#o),super.size}}class wl{#e;#t;constructor(t,r){this.#e=t,this.#t=Xn(r)}get current(){return this.#t(),this.#e()}}const Sl=/\(.+\)/,xl=new Set(["all","print","screen","and","or","not","only"]);class Pl extends wl{constructor(t,r){let n=Sl.test(t)||t.split(/[\s,]+/).some(o=>xl.has(o.trim()))?t:`(${t})`;const a=window.matchMedia(n);super(()=>a.matches,o=>zn(a,"change",o))}}const $l=typeof window<"u"?window:void 0;function kl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class El{#e;#t;constructor(t={}){const{window:r=$l,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#t=Xn(a=>{const o=zn(r,"focusin",a),i=zn(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#t?.(),this.#e?kl(this.#e):null}}new El;function Al(e){return typeof e=="function"}function Ml(e,t){if(Al(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Tl(e,t){let r=V(null);const n=J(()=>Ml(t,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const c=new Promise((f,h)=>{i=f,l=h});b(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);b(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),b(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Vt(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function gn(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function _n(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function bn(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>nr(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,c)=>{const f=n.get(c)||0,h=l-f;h>0&&(a.push({q:h,u:c}),o.push(nr(h.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function mt(e){return e?.length?e.map(t=>nr(t.q.toString(),t.u)).join(" et "):"-"}function nr(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function la(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Dl(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function ca(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return la(t)}function Vs(e,t){const r=new Map,n=new Map;e.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),t.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const a=[],o=new Set([...r.keys(),...n.keys()]);for(const i of o){const l=r.get(i)||0,c=n.get(i)||0,f=l-c;Math.abs(f)>.001&&a.push({q:f,u:i})}return a}function ua(e){if(!e?.length)return"Équilibré";const t=e.filter(n=>n.q>0),r=e.filter(n=>n.q<0);if(t.length>0&&r.length>0){const n=t.map(o=>nr(o.q.toString(),o.u)).join(" et "),a=r.map(o=>nr(Math.abs(o.q).toString(),o.u)).join(" et ");return`${n} disponibles, ${a} manquant${r.length>1?"s":""}`}else return t.length>0?t.map(n=>"+"+nr(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>nr(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function Cl(e,t){if(t.searchQuery.trim()){const r=t.searchQuery.toLowerCase();if(!e.productName.toLowerCase().includes(r))return!1}return!(t.selectedStores.length>0&&(!e.storeInfo?.storeName||!t.selectedStores.includes(e.storeInfo.storeName))||t.selectedWho.length>0&&(!e.who||!e.who.some(r=>t.selectedWho.includes(r)))||t.selectedProductTypes.length>0&&(!e.productType||!t.selectedProductTypes.includes(e.productType))||t.selectedTemperatures.length>0&&!(t.selectedTemperatures.includes("frais")&&e.pFrais||t.selectedTemperatures.includes("surgele")&&e.pSurgel))}function yn(e){return[...e].sort()}function Nl(e){return new Date(e)<new Date}function Il(e){if(e.length===0)return!0;const t=new Date(wn(e));return t.setHours(23,59,59,999),t<new Date}function Gs(e){return e.length===0?null:yn(e)[0]}function wn(e){return e.length===0?null:yn(e).pop()??null}function Rl(e){if(e.length===0)return null;const t=new Date;return t.setHours(0,0,0,0),yn(e).find(r=>new Date(r)>=t)||null}function Ol(e){if(e.length===0)return null;const t=yn(e),r=Il(e),n=Nl(t[0]),a=new Date;let o;return r?o=t[0]:n?o=a.toISOString().slice(0,19)+"Z":o=t[0],{start:o,end:t[t.length-1]}}function Ks(e){const t=Rl(e),r=wn(e);return!t||!r?null:{start:t,end:r}}function ql(e){const t=Gs(e),r=wn(e);return!t||!r?null:{start:t,end:r}}function jl(e,t){const r=ql(t);return r?e.start===r.start&&e.end===r.end:!1}function Ll(e,t){const r=Ks(t);return r?e.start===r.start&&e.end===r.end:!1}function Bl(e){return new Date(e).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function Ta(e){return e?new Date(e).toLocaleDateString("fr-Fr",{weekday:"short",day:"numeric",month:"short"}):""}function In(e){const r=new Date(e).getHours();return r===12?"sun":r===20?"moon":r===8?"cloud":null}function zl(e,t){if(!e.byDate?.[t])return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const r=e.byDate[t],n=[t],a=new Map;r.recipes?.length&&a.set(t,r.recipes);const o=r.totalConsolidated||[],i=o.length>0?mt(o):"-",l=Ul(e,t,o),c=l.filter(h=>h.q>0),f=l.filter(h=>h.q<0);return{requiredQuantities:o,requiredQuantitiesFormatted:i,stockBalance:l,availableStockQuantities:c,missingStockQuantities:f,availableStockFormatted:ua(l),missingStockFormatted:mt(f.map(h=>({q:Math.abs(h.q),u:h.u}))),hasAvailableStock:c.length>0,hasMissingStock:f.length>0,totalRecipesInRange:r.recipes?.length||0,totalPortionsInRange:r.totalAssiettes||0,datesInSelectedRange:n,recipesByDate:a}}function Ul(e,t,r){let n=[],a="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(n=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],a=e.stockParsed.dateTime);const o=[];if(e.purchases)for(const c of e.purchases)Ql(c,t,a)&&o.push({q:c.quantity,u:c.unit});const i=[...n,...o],l=la(i);return Vs(l,r)}function Ql(e,t,r=""){if(e.status==="cancelled")return!1;const n=e.deliveryDate||e.$createdAt;return!n||n>t||r&&e.$createdAt<r?!1:n<=t}function Hl(e,t){const r=e.totalNeededArray||[],n=r.length>0?mt(r):"-",a=Ys(e,t[0],t[t.length-1],r),o=a.filter(f=>f.q>0),i=a.filter(f=>f.q<0),l=[...t].sort(),c=new Map;if(e.byDate)for(const[f,h]of Object.entries(e.byDate))h.recipes?.length&&c.set(f,h.recipes);return{requiredQuantities:r,requiredQuantitiesFormatted:n,stockBalance:a,availableStockQuantities:o,missingStockQuantities:i,availableStockFormatted:ua(a),missingStockFormatted:mt(i.map(f=>({q:Math.abs(f.q),u:f.u}))),hasAvailableStock:o.length>0,hasMissingStock:i.length>0,totalRecipesInRange:e.nbRecipes||0,totalPortionsInRange:e.totalAssiettes||0,datesInSelectedRange:l,recipesByDate:c}}function Wl(e,t,r){if(!e.byDate)return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const n=new Date(t),a=new Date(r),o=[],i=new Map,l=new Map;let c=0,f=0;for(const[x,w]of Object.entries(e.byDate)){const P=new Date(x);P>=n&&P<=a&&(o.push(x),c+=w.totalAssiettes||0,w.recipes?.length&&(i.set(x,w.recipes),f+=w.recipes.length),w.totalConsolidated&&w.totalConsolidated.forEach(({q:C,u:S})=>{l.set(S,(l.get(S)||0)+C)}))}const h=Array.from(l.entries()).map(([x,w])=>({q:w,u:x})),g=h.length>0?mt(h):"-",p=Ys(e,t,r,h),m=p.filter(x=>x.q>0),_=p.filter(x=>x.q<0);return{requiredQuantities:h,requiredQuantitiesFormatted:g,stockBalance:p,availableStockQuantities:m,missingStockQuantities:_,availableStockFormatted:ua(p),missingStockFormatted:mt(_.map(x=>({q:Math.abs(x.q),u:x.u}))),hasAvailableStock:m.length>0,hasMissingStock:_.length>0,totalRecipesInRange:f,totalPortionsInRange:c,datesInSelectedRange:o,recipesByDate:i}}function Ys(e,t,r,n){let a=[],o="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(a=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],o=e.stockParsed.dateTime);const i=[];if(e.purchases)for(const f of e.purchases)Vl(f,t,r,o)&&i.push({q:f.quantity,u:f.unit});const l=[...a,...i],c=la(l);return Vs(c,n)}function Vl(e,t,r,n=""){if(e.status==="cancelled")return!1;const a=e.deliveryDate||e.$createdAt;return!a||a>r||n&&e.$createdAt<n?!1:a>=t&&a<=r}function Da(e){return{...e,products:e.products?.map(t=>typeof t=="string"?t:t.$id)||[],mainId:e.mainId}}function Gl(e){const t=_n(gn(e.purchases??[])),r=[],{numeric:n,display:a}=bn(r,t),o=Vt(e.stockReel)??null,i=mt(t),l=e.store?Vt(e.store):null,c=o?`${o.quantity} ${o.unit}`:i;return{$id:e.$id,$createdAt:e.$createdAt,$updatedAt:e.$updatedAt,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:e.isSynced,mainId:e.mainId,status:e.status,who:e.who,store:e.store,stockReel:e.stockReel,previousNames:e.previousNames,isMerged:e.isMerged,mergedFrom:e.mergedFrom,mergeDate:e.mergeDate,mergeReason:e.mergeReason,mergedInto:e.mergedInto,totalNeededOverride:e.totalNeededOverride,purchases:e.purchases,byDate:null,storeInfo:l,stockParsed:o,totalNeededArray:r,totalPurchasesArray:t,missingQuantityArray:n,stockOrTotalPurchases:c,displayTotalNeeded:"-",displayTotalPurchases:i,displayMissingQuantity:a,totalNeededOverrideParsed:Vt(e.totalNeededOverride),displayTotalOverride:(()=>{const f=Vt(e.totalNeededOverride);return f?mt([f.totalOverride]):""})()}}function Fr(e,t){const r=e.purchases??t.purchases,n=_n(gn(r??[])),a=mt(n),{numeric:o,display:i}=bn(t.totalNeededArray,n),l=e.stockReel??t.stockReel,c=l?Vt(l):t.stockParsed,f=e.store??t.store,h=f?Vt(f):t.storeInfo,g=c?`${c.quantity} ${c.unit}`:a;return e.purchases===void 0&&t.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${t.purchases.length} purchases pour ${t.productName}`),{...t,$updatedAt:e.$updatedAt,productName:e.productName??t.productName,isSynced:e.isSynced??t.isSynced,mainId:e.mainId??t.mainId,status:e.status??t.status,who:e.who??t.who,store:f,stockReel:l,purchases:r,previousNames:e.previousNames??t.previousNames,isMerged:e.isMerged??t.isMerged,mergedFrom:e.mergedFrom??t.mergedFrom,mergeDate:e.mergeDate??t.mergeDate,mergeReason:e.mergeReason??t.mergeReason,mergedInto:e.mergedInto??t.mergedInto,totalNeededOverride:e.totalNeededOverride??t.totalNeededOverride,storeInfo:h,stockParsed:c,totalPurchasesArray:n,missingQuantityArray:o,stockOrTotalPurchases:g,displayTotalPurchases:a,displayMissingQuantity:i,totalNeededOverrideParsed:Vt(e.totalNeededOverride??t.totalNeededOverride),displayTotalOverride:(()=>{const p=Vt(e.totalNeededOverride??t.totalNeededOverride);return p?mt([p.totalOverride]):""})()}}class Kl{#e=V(je([]));MAX_TOASTS=3;get toasts(){return s(this.#e).sort((t,r)=>r.timestamp-t.timestamp)}create(t){const r=t.id||crypto.randomUUID(),n={id:r,state:t.state,message:t.message,timestamp:Date.now(),source:t.source||"user",timeoutId:void 0,details:t.details};return this.#t(n),r}update(t,r){const n=s(this.#e).findIndex(o=>o.id===t);if(n===-1)return;const a=s(this.#e)[n];a.timeoutId&&clearTimeout(a.timeoutId),s(this.#e)[n]={...a,state:r.state||a.state,message:r.message||a.message,source:r.source||a.source},this.#o(s(this.#e)[n])}async track(t,r){const n=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const a=await t;return this.update(n,{state:"success",message:r.success||"Opération réussie"}),a}catch(a){throw this.update(n,{state:"error",message:r.error||"Erreur lors de l'opération"}),a}}dismiss(t){const r=s(this.#e).findIndex(a=>a.id===t);if(r===-1)return;const n=s(this.#e)[r];n.timeoutId&&clearTimeout(n.timeoutId),s(this.#e).splice(r,1)}dismissAll(){s(this.#e).forEach(t=>{t.timeoutId&&clearTimeout(t.timeoutId)}),b(this.#e,[],!0)}#t(t){if(t.source==="user"){const r=s(this.#e).findIndex(n=>n.source==="user");r>=0?s(this.#e)[r]=t:s(this.#e).push(t)}else{const r=s(this.#e).filter(n=>n.source!=="user");if(r.length>=2){const n=r[0];this.dismiss(n.id)}s(this.#e).push(t)}s(this.#e).length>this.MAX_TOASTS&&s(this.#e).splice(0,s(this.#e).length-this.MAX_TOASTS),this.#o(t)}#o(t){if(t.state!=="success"&&t.state!=="info")return;const r=t.source==="realtime-other"?24e3:23e3;t.timeoutId=setTimeout(()=>{this.dismiss(t.id)},r)}success(t,r){return this.create({state:"success",message:t,details:r})}error(t,r){return this.create({state:"error",message:t,details:r})}info(t,r){return this.create({state:"info",message:t,source:r?.source||"system",details:r?.details})}loading(t,r){return this.create({state:"loading",message:t,details:r})}}const bt=new Kl;function Yl(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class R{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}R.equal=(e,t)=>new R("equal",e,t).toString();R.notEqual=(e,t)=>new R("notEqual",e,t).toString();R.lessThan=(e,t)=>new R("lessThan",e,t).toString();R.lessThanEqual=(e,t)=>new R("lessThanEqual",e,t).toString();R.greaterThan=(e,t)=>new R("greaterThan",e,t).toString();R.greaterThanEqual=(e,t)=>new R("greaterThanEqual",e,t).toString();R.isNull=e=>new R("isNull",e).toString();R.isNotNull=e=>new R("isNotNull",e).toString();R.between=(e,t,r)=>new R("between",e,[t,r]).toString();R.startsWith=(e,t)=>new R("startsWith",e,t).toString();R.endsWith=(e,t)=>new R("endsWith",e,t).toString();R.select=e=>new R("select",void 0,e).toString();R.search=(e,t)=>new R("search",e,t).toString();R.orderDesc=e=>new R("orderDesc",e).toString();R.orderAsc=e=>new R("orderAsc",e).toString();R.orderRandom=()=>new R("orderRandom").toString();R.cursorAfter=e=>new R("cursorAfter",void 0,e).toString();R.cursorBefore=e=>new R("cursorBefore",void 0,e).toString();R.limit=e=>new R("limit",void 0,e).toString();R.offset=e=>new R("offset",void 0,e).toString();R.contains=(e,t)=>new R("contains",e,t).toString();R.notContains=(e,t)=>new R("notContains",e,t).toString();R.notSearch=(e,t)=>new R("notSearch",e,t).toString();R.notBetween=(e,t,r)=>new R("notBetween",e,[t,r]).toString();R.notStartsWith=(e,t)=>new R("notStartsWith",e,t).toString();R.notEndsWith=(e,t)=>new R("notEndsWith",e,t).toString();R.createdBefore=e=>R.lessThan("$createdAt",e);R.createdAfter=e=>R.greaterThan("$createdAt",e);R.createdBetween=(e,t)=>R.between("$createdAt",e,t);R.updatedBefore=e=>R.lessThan("$updatedAt",e);R.updatedAfter=e=>R.greaterThan("$updatedAt",e);R.updatedBetween=(e,t)=>R.between("$updatedAt",e,t);R.or=e=>new R("or",void 0,e.map(t=>JSON.parse(t))).toString();R.and=e=>new R("and",void 0,e.map(t=>JSON.parse(t))).toString();R.distanceEqual=(e,t,r,n=!0)=>new R("distanceEqual",e,[[t,r,n]]).toString();R.distanceNotEqual=(e,t,r,n=!0)=>new R("distanceNotEqual",e,[[t,r,n]]).toString();R.distanceGreaterThan=(e,t,r,n=!0)=>new R("distanceGreaterThan",e,[[t,r,n]]).toString();R.distanceLessThan=(e,t,r,n=!0)=>new R("distanceLessThan",e,[[t,r,n]]).toString();R.intersects=(e,t)=>new R("intersects",e,[t]).toString();R.notIntersects=(e,t)=>new R("notIntersects",e,[t]).toString();R.crosses=(e,t)=>new R("crosses",e,[t]).toString();R.notCrosses=(e,t)=>new R("notCrosses",e,[t]).toString();R.overlaps=(e,t)=>new R("overlaps",e,[t]).toString();R.notOverlaps=(e,t)=>new R("notOverlaps",e,[t]).toString();R.touches=(e,t)=>new R("touches",e,[t]).toString();R.notTouches=(e,t)=>new R("notTouches",e,[t]).toString();var Ca;(function(e){e[e.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",e[e.POLICY_VIOLATION=1008]="POLICY_VIOLATION",e[e.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(Ca||(Ca={}));var Js,Zs;class Pr{static custom(t){return t}static unique(t=7){const r=Yl(Pr,Js,"m",Zs).call(Pr);let n="";for(let a=0;a<t;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}Js=Pr,Zs=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Na;(function(e){e.Equal="equal",e.NotEqual="notEqual",e.GreaterThan="greaterThan",e.GreaterThanEqual="greaterThanEqual",e.LessThan="lessThan",e.LessThanEqual="lessThanEqual",e.Contains="contains",e.IsNull="isNull",e.IsNotNull="isNotNull"})(Na||(Na={}));var Ia;(function(e){e.Totp="totp"})(Ia||(Ia={}));var Ra;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Ra||(Ra={}));var Oa;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Oa||(Oa={}));var qa;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(qa||(qa={}));var ja;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(ja||(ja={}));var La;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(La||(La={}));var Ba;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Ba||(Ba={}));var za;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(za||(za={}));var Ua;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Ua||(Ua={}));var Qa;(function(e){e.Http="http",e.Schedule="schedule",e.Event="event"})(Qa||(Qa={}));var Ha;(function(e){e.Waiting="waiting",e.Processing="processing",e.Completed="completed",e.Failed="failed",e.Scheduled="scheduled"})(Ha||(Ha={}));function Fs(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Pt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Jl(e){const n=await(await window.AppwriteClient.getAccount()).get();return{...e,updatedBy:n.name}}function gr(){return localStorage.getItem("appwrite-user-name")||""}async function Zl(e,t,r=100){try{const{databases:n,config:a}=await Pt(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[R.greaterThan("$updatedAt",t),R.equal("mainId",e),R.limit(r),R.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function Xs(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:o}=await Pt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[R.equal("mainId",e),R.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),R.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[R.greaterThan("$updatedAt",r),R.equal("mainId",e),R.limit(n),R.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function hr(e,t,r=!0){const{databases:n,config:a}=await Pt();return r&&(t.updatedBy=gr()),await n.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,e,t)}async function Rt(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=Fs(n,t),o=await Jl(a),{databases:i,config:l}=await Pt(),c=await i.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,e,o);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),c}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function eo(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await hr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function to(e,t){return hr(e,{who:t})}async function Un(e,t){return hr(e,{stockReel:t})}async function da(e,t,r=!1){if(!e)throw new Error("ID du produit requis pour la mise à jour de l'override");const n=JSON.stringify(t),a=await hr(e,{totalNeededOverride:n},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${e}:`,t),a}async function ro(e,t=!0){if(!e)throw new Error("ID du produit requis pour la suppression de l'override");const r=await hr(e,{totalNeededOverride:null},t);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${e}`),r}async function no(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const a={};return t.stockReel!==void 0&&(a.stockReel=t.stockReel),t.who!==void 0&&(a.who=t.who),t.storeInfo!==void 0&&(a.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await hr(e,a)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await Rt(e,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function ao(e){const{databases:t,config:r}=await Pt(),n={...e,createdBy:gr()},a=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Pr.unique(),n);return console.log("[Appwrite Interactions] Achat créé:",a),a}async function so(e,t){try{const{databases:r,config:n}=await Pt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function oo(e){try{const{databases:t,config:r}=await Pt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function io(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Pt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[R.equal("$id",e),R.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function lo(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(m=>m.includes("products.")),f=i.some(m=>m.includes("purchases.")),h=i.some(m=>m.includes(".create")),g=i.some(m=>m.includes(".update")),p=i.some(m=>m.includes(".delete"));if(c){const m=l;m.updatedBy&&m.updatedBy!==gr()&&(h||g?bt.info(`${m.updatedBy} a modifié le produit "${m.productName}"`,"realtime-other"):p&&bt.info(`${m.updatedBy} a supprimé un produit`,"realtime-other")),h&&t.onProductCreate?t.onProductCreate(m):g&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(f){const m=l;if(m.createdBy&&m.createdBy!==gr()){const _=m.products?.[0]?.productName||"un produit";h&&m.who!==gr()?bt.info(`${m.who} a ajouté un achat pour ${_}`,"realtime-other"):g&&m.who!==gr()?bt.info(`${m.who} a modifié un achat pour ${_}`,"realtime-other"):p&&bt.info(`${m.who} a supprimé un achat pour ${_}`,"realtime-other")}h&&t.onPurchaseCreate?t.onPurchaseCreate(m):g&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function co(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Pt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function uo(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Pt(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function va(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function vo(e,t,r,n){return va({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function fo(e,t,r,n="replace"){return va({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function ho(e,t,r,n={}){try{const{databases:a,config:o}=await Pt(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const h of r){const g={products:[t],mainId:e,quantity:h.q,unit:h.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,Pr.unique(),g);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const o=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const Fl=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:va,batchUpdateStore:vo,batchUpdateWho:fo,createMainDocument:uo,createPurchase:ao,createQuickValidationPurchases:ho,deletePurchase:oo,enrichedProductToAppwriteProduct:Fs,loadMainEventData:co,loadPurchasesListByIds:io,loadUpdatedPurchases:Zl,removeTotalOverride:ro,subscribeToRealtime:lo,syncProductsWithPurchases:Xs,updateProduct:hr,updateProductBatch:no,updateProductStock:Un,updateProductStore:eo,updateProductWho:to,updatePurchase:so,updateTotalOverride:da,upsertProduct:Rt},Symbol.toStringTag,{value:"Module"}));async function Xl(e){let t;if(t=await fetch(`/evenements/${e}/metadata.json`),!t.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function Wa(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function ec(e,t){if(!e)return!0;try{return(await Xl(t)).hugoContentHash!==e}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function po(e,t){const r=ca(e.byDate),n=_n(gn([])),{numeric:a,display:o}=bn(r,n);return{$id:`${e.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalNeededRaw:e.totalNeededRaw,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:mt(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function tc(e,t){return e.map(r=>po(r,t))}class rc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=a=>{const o=a.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();o.onsuccess=()=>{const i=o.result,l={lastSync:null,allDates:[],hugoContentHash:null};i.forEach(c=>{c.key===this.LAST_SYNC_KEY?l.lastSync=c.value:c.key===this.ALL_DATES_KEY?l.allDates=c.value||[]:c.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=c.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),t(l)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=a.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.METADATA_STORE,"readwrite"),o=a.objectStore(this.METADATA_STORE);o.put({key:this.LAST_SYNC_KEY,value:t.lastSync}),o.put({key:this.ALL_DATES_KEY,value:t.allDates}),t.hugoContentHash!==void 0&&o.put({key:this.HUGO_HASH_KEY,value:t.hugoContentHash}),a.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},a.onerror=()=>n(a.error)})}async updateLastSync(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${t}`),r()},i.onerror=()=>n(i.error)})}async updateAllDates(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${t.length} dates`),r()},i.onerror=()=>n(i.error)})}async updateHugoContentHash(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${t}`),r()},i.onerror=()=>n(i.error)})}async updateLastHugoMenuUpdate(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:t});i.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function nc(e){const t=new rc(e);return await t.open(),t}function ac(e){return!!(e.isMerged||e.totalNeededOverride)}function sc(e,t){if(!e||e.length!==t.length)return!0;for(let r=0;r<e.length;r++){const n=e[r],a=t[r];if(n.q!==a.q||n.u!==a.u)return!0}return!1}async function oc(e,t){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},n=new Map;for(const[o,i]of e)n.set(i.productHugoUuid,o);const a=new Set;for(const o of t.ingredients){const i=o.productSemanticKey||`${t.mainGroup_id}_${o.ingredientHugoUuid}`;a.add(i);const l=n.get(o.ingredientHugoUuid),c=l?e.get(l):void 0;if(c){if(sc(c.totalNeededRaw,o.totalNeededRaw)){const h=ic(c,o);if(h&&r.overrideConflicts.push(h),c.isMerged){const g=c.displayTotalNeeded;Va(c,o),r.mergedProductsUpdated.push({product:c,oldDisplayTotal:g,newDisplayTotal:c.displayTotalNeeded,currentOverride:c.totalNeededOverrideParsed,semanticKey:i})}else Va(c,o);r.updated.push(i)}e.set(i,c)}else{r.added.push(o);const f=po(o,t.mainGroup_id);e.set(f.$id,f)}}for(const[o,i]of e)a.has(o)||(r.removed.push(i),!ac(i)&&!i.purchases?.length&&!i.stockReel&&!i.who?.length&&e.delete(o));return r.overrideConflicts.length>0&&await lc(r.overrideConflicts),r.summary=uc(r),r}function ic(e,t){if(!e.totalNeededOverride||!e.totalNeededOverrideParsed)return null;const r=ca(t.byDate),n=mt(r),a=e.displayTotalNeeded;return a!==n?{product:e,oldDisplayTotal:a,newDisplayTotal:n,currentOverride:e.totalNeededOverrideParsed,semanticKey:e.$id}:null}async function lc(e){for(const t of e){const r={...t.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:t.oldDisplayTotal,newTotalDisplay:t.newDisplayTotal};JSON.stringify(r);try{await da(t.product.$id,r,!1)}catch(n){console.error(`Erreur lors de la mise à jour de l'override pour ${t.product.$id}:`,n)}}}function Va(e,t){e.byDate=t.byDate,e.nbRecipes=t.nbRecipes,e.totalAssiettes=t.totalAssiettes,e.productType=t.ingType,e.pFrais=t.pFrais||!1,e.pSurgel=t.pSurgel||!1,cc(e)}function cc(e){e.totalNeededArray=ca(e.byDate),e.displayTotalNeeded=mt(e.totalNeededArray);const t=_n(gn(e.purchases)),{numeric:r,display:n}=bn(e.totalNeededArray,t);e.totalPurchasesArray=t,e.missingQuantityArray=r,e.displayMissingQuantity=n,e.stockOrTotalPurchases=e.purchases.length>0?e.displayTotalPurchases:e.displayTotalNeeded}function uc(e){const t=[];if((e.added.length>0||e.updated.length>0||e.removed.length>0)&&t.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),e.added.length>0&&t.push(`${e.added.length} nouveau(x) ingrédient(s)`),e.updated.length>0&&t.push(` ${e.updated.length} ingrédient(s) mis à jour`),e.overrideConflicts.length>0&&t.push(`⚠️ ${e.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),e.mergedProductsUpdated.length>0&&t.push(`🔀 ${e.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),e.removed.length>0){const r=e.removed.filter(n=>n.purchases?.length||n.stockReel||n.who?.length).length;r>0?t.push(`⚠️ ${r} suppression(s) avec données conservées`):t.push(`${e.removed.length} ingrédient(s) supprimé(s)`)}return t.length>0?t.join(", "):"Aucune modification détectée"}class dc{isMobileQuery=new Pl("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return bt.toasts}get toast(){return bt}#e=V(je({isOpen:!1,conflicts:[]}));get modalOverride(){return s(this.#e)}set modalOverride(t){b(this.#e,t,!0)}}const $r=new dc,Ga=1e3;class vc{#e=new yl;#t=V(null);#o=V(null);#d=V(!1);#u=V(!1);#i=V(null);#c=V(!1);#l=V(!1);#s=V(null);#v=V(null);#a=V(je([]));#f=V(je({start:null,end:null}));get dateRange(){return s(this.#f)}set dateRange(t){b(this.#f,t,!0)}#h=J(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDateInRange(){return s(this.#h)}set hasSingleDateInRange(t){b(this.#h,t)}#m=J(()=>s(this.#a).length===1);get hasSingleDateEvent(){return s(this.#m)}set hasSingleDateEvent(t){b(this.#m,t)}#g=J(()=>{if(s(this.#a).length===0)return!0;const t=new Date(this.lastAvailableDate);return t.setHours(23,59,59,999),t<new Date});get isEventPassed(){return s(this.#g)}set isEventPassed(t){b(this.#g,t)}#n=null;#_=null;#b=V(!1);#p=null;#y=V(!1);#w=V();#x=V(je([]));get hasPendingConflicts(){return s(this.#x).length>0}get pendingConflicts(){return s(this.#x)}#r=V(je({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#r)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get currentMainId(){return s(this.#t)}get loading(){return s(this.#u)}get error(){return s(this.#i)}get lastSync(){return s(this.#s)}get syncing(){return s(this.#c)}get availableDates(){return s(this.#a)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,a=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:a}}isFullRange(){return jl(this.dateRange,s(this.#a))}initializeDateRange(){const t=Ol(s(this.#a));t&&(this.dateRange=t),console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}selectUpcomingDates(){const t=Ks(s(this.#a));t&&(this.dateRange=t)}isUpcomingRange(){return Ll(this.dateRange,s(this.#a))}get firstAvailableDate(){return Gs(s(this.#a))}get lastAvailableDate(){return wn(s(this.#a))}get realtimeConnected(){return s(this.#l)}#k=J(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#k)}set enrichedProducts(t){b(this.#k,t)}#E=J(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const t=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[a,o]of this.#e){if(!o.byDate||!Cl(o,s(this.#r)))continue;Object.keys(o.byDate).some(c=>{const f=new Date(c);return f>=t&&f<=r})&&n.set(a,o)}return n});get filteredProductsMap(){return s(this.#E)}set filteredProductsMap(t){b(this.#E,t)}#q(){console.log("[Store] ⚡ Single date mode - optimized calculation");const t=new Map,r=this.dateRange.start;for(const[n,a]of this.#e){const o=zl(a,r);t.set(n,{quantities:o.requiredQuantities,formattedQuantities:o.requiredQuantitiesFormatted,nbRecipes:o.totalRecipesInRange,totalAssiettes:o.totalPortionsInRange,stockResult:o.stockBalance,availableQuantities:o.availableStockQuantities,missingQuantities:o.missingStockQuantities,formattedMissingQuantities:o.missingStockFormatted,formattedAvailableQuantities:o.availableStockFormatted,hasAvailable:o.hasAvailableStock,hasMissing:o.hasMissingStock,concernedDates:o.datesInSelectedRange,recipesByDate:o.recipesByDate})}return t}#A=J(()=>{if(console.log("[Store] Calcul unifié des stats par produit"),this.hasSingleDateInRange)return this.#q();const t=new Map;if(this.isFullRange()){console.log("[Store] Full date range - using precomputed data",this.dateRange);for(const[r,n]of this.#e){const a=Hl(n,s(this.#a));t.set(r,{quantities:a.requiredQuantities,formattedQuantities:a.requiredQuantitiesFormatted,nbRecipes:a.totalRecipesInRange,totalAssiettes:a.totalPortionsInRange,stockResult:a.stockBalance,availableQuantities:a.availableStockQuantities,missingQuantities:a.missingStockQuantities,formattedMissingQuantities:a.missingStockFormatted,formattedAvailableQuantities:a.availableStockFormatted,hasAvailable:a.hasAvailableStock,hasMissing:a.hasMissingStock,concernedDates:a.datesInSelectedRange,recipesByDate:a.recipesByDate})}return t}for(const[r,n]of this.filteredProductsMap){if(!n.byDate)continue;const a=Wl(n,this.dateRange.start,this.dateRange.end);t.set(r,{quantities:a.requiredQuantities,formattedQuantities:a.requiredQuantitiesFormatted,nbRecipes:a.totalRecipesInRange,totalAssiettes:a.totalPortionsInRange,stockResult:a.stockBalance,availableQuantities:a.availableStockQuantities,missingQuantities:a.missingStockQuantities,formattedMissingQuantities:a.missingStockFormatted,formattedAvailableQuantities:a.availableStockFormatted,hasAvailable:a.hasAvailableStock,hasMissing:a.hasMissingStock,concernedDates:a.datesInSelectedRange,recipesByDate:a.recipesByDate})}return t});get productsStatsByDateRange(){return s(this.#A)}set productsStatsByDateRange(t){b(this.#A,t)}#M=J(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#M)}set stats(t){b(this.#M,t)}#T=J(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#T)}set uniqueStores(t){b(this.#T,t)}#D=J(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#D)}set uniqueWho(t){b(this.#D,t)}#C=J(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#C)}set uniqueProductTypes(t){b(this.#C,t)}#N=J(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((i,l)=>i.$id.localeCompare(l.$id));if(s(this.#r).groupBy==="none")return{"":r};const n=Object.groupBy(r,i=>s(this.#r).groupBy==="store"?i.storeInfo?.storeName||"Non défini":i.productType||"Non défini"),a=Object.keys(n).sort((i,l)=>i===""?1:l===""?-1:i.localeCompare(l)),o={};return a.forEach(i=>{o[i]=n[i]}),o});get groupedFilteredProducts(){return s(this.#N)}set groupedFilteredProducts(t){b(this.#N,t)}async initialize(t,r){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#d)&&s(this.#t)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),b(this.#t,t,!0),b(this.#o,r,!0);try{this.#n=await nc(t)}catch(n){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",n),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#i,null);try{if(await this.#j(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let a;a=await Wa(r),console.log(`[ProductsStore] Hugo chargé: ${a.ingredients.length} ingrédients`),b(this.#v,a.hugoContentHash,!0),tc(a.ingredients,t).forEach(l=>{this.#e.set(l.$id,l)}),b(this.#a,[...a.allDates],!0),await co(t)||await uo(a.mainGroup_id,a.hugoContentHash,a.allDates,a.name),await this.#I()}this.initializeDateRange(),await this.#L(),b(this.#d,!0);const n=this.#J();this.#_=lo(t,n),this.#Q(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#R(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(n){const a=n instanceof Error?n.message:"Erreur lors de l'initialisation";throw b(this.#i,a,!0),console.error("[ProductsStore]",a,n),n}}async#j(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();b(this.#s,r.lastSync,!0),b(this.#a,[...r.allDates],!0),b(this.#v,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#L(){if(s(this.#t)){b(this.#c,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#t)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#s)}`);const t=await Xs(s(this.#t),{lastSync:s(this.#s),limit:Ga});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#O(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#s)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#s)}`);const{loadUpdatedPurchases:r}=await bl(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Fl);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#t),s(this.#s),Ga);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#$(o,a)}})}this.#z(),await this.#B(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{b(this.#c,!1)}}}async#B(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:s(this.#s),allDates:[...s(this.#a)],hugoContentHash:s(this.#v)}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#Z(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.updateLastSync(s(this.#s)),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#I(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.updateLastSync(s(this.#s)),await this.#n.updateAllDates([...s(this.#a)]),await this.#n.updateHugoContentHash(s(this.#v)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(t){console.error("[ProductsStore] Erreur persistance cache complet:",t)}}async#P(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#z(){b(this.#s,new Date().toISOString(),!0)}async#R(){if(!s(this.#o)||s(this.#u))return!1;try{const t=await ec(s(this.#v),s(this.#o));return t&&!s(this.#b)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${s(this.#o)}, analyse approfondie en cours...`),b(this.#b,!0),await this.#U()),b(this.#w,new Date,!0),t}catch(t){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",t),!1}}async#U(){if(!s(this.#o)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const t=await Wa(s(this.#o)),r=await oc(this.#e,t);if(console.log(`[ProductsStore  - hugo change] ${r.summary}`),r.overrideConflicts.length>0&&(b(this.#x,r.overrideConflicts,!0),bt.error(`${r.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>$r.modalOverride.isOpen=!0}})),r.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${r.mergedProductsUpdated.length} produits fusionnés modifiés`),r.removed.length>0){const n=r.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length);n.length>0&&console.log(`[ProductsStore] ℹ️ ${n.length} ingrédients supprimés conservés (données utilisateur)`)}b(this.#a,[...t.allDates],!0),b(this.#v,t.hugoContentHash,!0),this.initializeDateRange(),await this.#I(),(r.added.length||r.updated.length||r.removed.length)&&bt.success(r.summary),b(this.#b,!1)}catch(t){console.error("[ProductsStore] Erreur sync Hugo:",t),bt.error("Erreur lors de la mise à jour Hugo")}}#Q(){this.#p&&clearInterval(this.#p),this.#p=setInterval(async()=>{await this.#R()},6e4)}#H(){this.#p&&(clearInterval(this.#p),this.#p=null)}#O(t,r){return r?Fr(t,r):Gl(t)}#F(t){t.length&&(t.forEach(r=>this.#S(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#S(t){const r=this.#e.get(t.$id),n=this.#O(t,r);this.#e.set(t.$id,n)}#W(t){this.#e.delete(t)}async#V(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#Y(r,t),r}async#G(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#$(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await io([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#$(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#K(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t));return r.forEach(n=>{this.#S(n)}),r.map(n=>n.$id)}#Y(t,r){const n=Da(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=Fr({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#$(t,r){const n=Da(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const h=Fr({...i,purchases:f,status:"active"},i);a.push(h)}else{const f=Fr({...i,purchases:[...l,r],status:"active"},i);a.push(f)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#J(){return{onProductCreate:t=>{if(this.#S(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#S(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#W(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#V(t);await this.#P(r)},onPurchaseUpdate:async t=>{const r=await this.#G(t);await this.#P(r)},onPurchaseDelete:async t=>{const r=await this.#K(t);await this.#P(r)},onConnect:()=>{b(this.#l,!0)},onDisconnect:()=>{b(this.#l,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}setSearchQuery=Tl(t=>{s(this.#r).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#r).selectedProductTypes.indexOf(t);r>-1?s(this.#r).selectedProductTypes.splice(r,1):s(this.#r).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#r).selectedTemperatures.indexOf(t);r>-1?s(this.#r).selectedTemperatures.splice(r,1):s(this.#r).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#r).selectedProductTypes=[],s(this.#r).selectedTemperatures=[]}setGroupBy(t){s(this.#r).groupBy=t}toggleStore(t){const r=s(this.#r).selectedStores.indexOf(t);r>-1?s(this.#r).selectedStores.splice(r,1):s(this.#r).selectedStores.push(t)}toggleWho(t){const r=s(this.#r).selectedWho.indexOf(t);r>-1?s(this.#r).selectedWho.splice(r,1):s(this.#r).selectedWho.push(t)}clearStoreFilters(){s(this.#r).selectedStores=[]}clearWhoFilters(){s(this.#r).selectedWho=[]}handleSort(t){s(this.#r).sortColumn===t?s(this.#r).sortDirection=s(this.#r).sortDirection==="asc"?"desc":"asc":(s(this.#r).sortColumn=t,s(this.#r).sortDirection="asc")}clearFilters(){b(this.#r,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#r).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#r).sortColumn],o=n[s(this.#r).sortColumn];return s(this.#r).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#r).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#r).sortDirection==="asc"?-1:1:a>o?s(this.#r).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}hasConversions(t){const r=this.#e.get(t);return r?.byDate?hasConversions(r.byDate):!1}async forceReload(t,r){await this.clearCache(),await this.initialize(t,r)}async clearCache(){this.#e.clear(),b(this.#a,[],!0),b(this.#s,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const o=this.#e.get(a);if(o){const i={...o,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#_?.(),this.#_=null,this.#H(),this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const ee=new vc;function Ka(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function fc(e){const t=e.substring(0,4),r=e.slice(-10);return`${t}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const hc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var pc=Ki("<svg><!><!></svg>");function ge(e,t){Z(t,!0);const r=Ae(t,"color",3,"currentColor"),n=Ae(t,"size",3,24),a=Ae(t,"strokeWidth",3,2),o=Ae(t,"absoluteStrokeWidth",3,!1),i=Ae(t,"iconNode",19,()=>[]),l=pe(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=pc();Ea(c,g=>({...hc,...l,width:n(),height:n(),stroke:r(),"stroke-width":g,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var f=u(c);st(f,17,i,Hr,(g,p)=>{var m=J(()=>ns(s(p),2));let _=()=>s(m)[0],x=()=>s(m)[1];var w=K(),P=N(w);tl(P,_,!0,(C,S)=>{Ea(C,()=>({...x()}))}),v(g,w)});var h=d(f);ue(h,()=>t.children??le),v(e,c),F()}function Qn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ge(e,me({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function mc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ge(e,me({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function gc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ge(e,me({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function _c(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ge(e,me({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function bc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ge(e,me({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function kr(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];ge(e,me({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function yc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ge(e,me({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function mo(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];ge(e,me({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function wc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ge(e,me({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Sc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];ge(e,me({name:"circle-arrow-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function xc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];ge(e,me({name:"circle-arrow-right"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Ya(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ge(e,me({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Pc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ge(e,me({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function $c(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];ge(e,me({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function kc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];ge(e,me({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Ec(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];ge(e,me({name:"clipboard-pen-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Ac(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];ge(e,me({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Mc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];ge(e,me({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function fa(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ge(e,me({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Tc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ge(e,me({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Dc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];ge(e,me({name:"euro"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Xr(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];ge(e,me({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function go(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ge(e,me({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function _o(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];ge(e,me({name:"history"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Cc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ge(e,me({name:"info"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Nc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ge(e,me({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Ic(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ge(e,me({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Rc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ge(e,me({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function bo(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];ge(e,me({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Oc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];ge(e,me({name:"lock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function qc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ge(e,me({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function jc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];ge(e,me({name:"message-circle-more"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Lc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ge(e,me({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function yo(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ge(e,me({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function wo(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ge(e,me({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Bc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];ge(e,me({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Gr(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ge(e,me({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function zc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];ge(e,me({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Uc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ge(e,me({name:"plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Qc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];ge(e,me({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Hc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ge(e,me({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Wc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ge(e,me({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Vc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ge(e,me({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Gc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ge(e,me({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function So(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ge(e,me({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Yt(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ge(e,me({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function xo(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ge(e,me({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Hn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ge(e,me({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Lt(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ge(e,me({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Po(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ge(e,me({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Kc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];ge(e,me({name:"thermometer"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Sn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ge(e,me({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function $o(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];ge(e,me({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Kr(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ge(e,me({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function tn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ge(e,me({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Yc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ge(e,me({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Tt(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ge(e,me({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),F()}function Jc(e,t){const r=e.reduce((a,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return a+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function Zc(e,t){const r=e.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const a=t.purchaseStatus||"delivered";let o=t.purchaseDeliveryDate||null;a==="delivered"&&!o&&(o=new Date().toISOString());const i=e.flatMap(c=>c.missingQuantities.map(f=>({productId:c.productId,quantity:f.q,unit:f.u,status:a,notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:o,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:t}}async function Fc(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=Jc(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,o=[];if(n<=a)o.push(t);else{let p=[],m=0;for(const _ of t){const x=(_.isSynced?0:1)+_.missingQuantities.length;m+x>a?(p.length>0&&o.push(p),p=[_],m=x):(p.push(_),m+=x)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<o.length;p++){const m=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${m.length} produits)`);try{const _=await Zc(m,r),x=await Xc(_);if(i.push(x),x.success)l+=x.productsCreated,c+=x.purchasesCreated,f+=x.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${x.error}`);break}}catch(_){const x=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,_),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:x,timestamp:new Date().toISOString()});break}}const h=i.every(p=>p.success),g=i.some(p=>!p.success);return{success:h,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:g?"Un ou plusieurs lots ont échoué":void 0}}async function Xc(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var eu=(e,t,r)=>t(s(r).id),tu=y('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),ru=y('<span class="flex items-center gap-1"><!> </span>'),nu=y('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),au=y('<div class="flex flex-wrap gap-2"></div> <!>',1);function Wr(e,t){Z(t,!0);let r=Ae(t,"badgeSize",3,"badge-lg"),n=Ae(t,"color",3,"primary"),a=Ae(t,"badgeStyle",3,""),o=Ae(t,"onToggleItem",3,()=>{}),i=Ae(t,"showStats",3,!1),l=Ae(t,"showIcon",3,!0),c=V(je({}));Xt(()=>{const w={};t.items.forEach(P=>{w[P.id]=P.selected??!0}),b(c,w,!0)});function f(w){s(c)[w]=!s(c)[w],o()(w)}const h=J(()=>Object.values(s(c)).filter(Boolean).length),g=J(()=>Object.values(s(c)).filter(w=>!w).length);var p=au(),m=N(p);st(m,21,()=>t.items,w=>w.id,(w,P)=>{const C=J(()=>s(c)[s(P).id]);var S=tu();S.__click=[eu,f,P];var A=u(S);{var k=L=>{var O=K(),X=N(O);or(X,()=>s(P).icon,(ce,q)=>{q(ce,{class:"h-3 w-3",get title(){return s(P).title}})}),v(L,O)};E(A,L=>{s(P).icon&&L(k)})}var M=d(A,2),$=u(M),T=d(M,2);{var D=L=>{var O=K(),X=N(O);{var ce=I=>{kr(I,{size:16})},q=I=>{Uc(I,{size:16})};E(X,I=>{s(C)?I(ce):I(q,!1)})}v(L,O)};E(T,L=>{l()&&L(D)})}B(()=>{Me(S,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(C)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Zt(S,"title",s(C)?"Retirer de la liste":"Réajouter à la liste"),U($,s(P).label)}),v(w,S)});var _=d(m,2);{var x=w=>{var P=nu(),C=u(P),S=u(C),A=u(S);kr(A,{class:"text-success h-3 w-3"});var k=d(A),M=d(S,2);{var $=L=>{var O=ru(),X=u(O);Tt(X,{class:"text-error h-3 w-3"});var ce=d(X);B(()=>U(ce,` ${s(g)??""} retirés`)),v(L,O)};E(M,L=>{s(g)>0&&L($)})}var T=d(C,2),D=u(T);B(()=>{U(k,` ${s(h)??""} actifs`),U(D,`Total: ${t.items.length??""} items`)}),v(w,P)};E(_,w=>{i()&&w(x)})}v(e,p),F()}Je(["click"]);function su(e,t){b(t,!s(t))}var ou=y('<span class="text-base-content font-semibold"> </span>'),iu=y('<div class="text-base-content/80 flex-1"> </div>'),lu=y('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),cu=y('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),uu=y('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function ko(e,t){let r=Ae(t,"icon",3,Cc),n=Ae(t,"class",3,""),a=Ae(t,"initiallyOpen",3,!1),o=r(),i=V(je(a())),l=je(t.children);var c=uu(),f=u(c);f.__click=[su,i];var h=u(f),g=u(h);o(g,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(g,2);{var m=A=>{var k=ou(),M=u(k);B(()=>U(M,t.title)),v(A,k)};E(p,A=>{t.title&&A(m)})}var _=d(h,2);{var x=A=>{var k=iu(),M=u(k);B(()=>U(M,t.contentVisible)),v(A,k)};E(_,A=>{t.contentVisible&&A(x)})}var w=d(_,2);{var P=A=>{var k=lu(),M=u(k),$=u(M);{var T=O=>{var X=pt("en savoir plus");v(O,X)},D=O=>{var X=pt("masquer");v(O,X)};E($,O=>{s(i)?O(D,!1):O(T)})}var L=d(M,2);{let O=J(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(i)?"rotate-180":""}`);mo(L,{get class(){return s(O)}})}v(A,k)};E(w,A=>{l&&A(P)})}var C=d(f,2);{var S=A=>{var k=cu(),M=u(k),$=u(M);ue($,()=>t.children??le),B(()=>Me(k,1,`overflow-hidden transition-all duration-200 ${s(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),v(A,k)};E(C,A=>{l&&A(S)})}B(()=>{Me(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Bs(c,t.style),Me(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Zt(f,"aria-expanded",s(i))}),v(e,c)}Je(["click"]);async function du(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){b(r,!0),b(n,null),b(a,null);try{const c=`FACTURE_${Date.now()}`,f=s(o).map(m=>m.$id);ee.setSyncStatus(f,!0);const h=[];for(const m of s(o))h.push({productId:m.$id,isSynced:m.isSynced,productData:m,missingQuantities:m.missingQuantityArray||[]});const g={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(o).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${h.length} produits...`),l.onClose();const p=await Fc(ee.currentMainId,h,g);if(p.success)b(a,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";b(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),ee.clearSyncStatus()}finally{b(r,!1)}}}function Ja(e,t,r){s(t)||r.onClose()}var vu=y('<div class="alert alert-error"><!> <span> </span></div>'),fu=y('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),hu=y(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),pu=y("<option> </option>"),mu=y("<option> </option>"),gu=y('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),_u=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),bu=y("<!> ",1),yu=y(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function wu(e,t){Z(t,!0);let r=V(!1),n=V(null),a=V(null),o=je({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=V(je(new Set));Xt(()=>{b(i,new Set(t.products.map(ve=>ve.$id)),!0)});const l=J(()=>t.products.filter(ve=>s(i).has(ve.$id))),c=J(()=>s(l).length!==0),f=J(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function h(ve){const Se=new Set(s(i));Se.has(ve)?Se.delete(ve):Se.add(ve),b(i,Se,!0)}const g=J(()=>t.products.map(ve=>({id:ve.$id,label:ve.productName,title:ve.productName})));var p=yu(),m=u(p),_=u(m),x=u(_),w=u(x);Yt(w,{class:"h-5 w-5"});var P=d(w),C=d(x,2);C.__click=[Ja,r,t];var S=u(C);Tt(S,{class:"h-4 w-4"});var A=d(_,2),k=u(A);{var M=ve=>{var Se=vu(),De=u(Se);Sn(De,{class:"h-4 w-4"});var ze=d(De,2),Ee=u(ze);B(()=>U(Ee,s(n))),v(ve,Se)};E(k,ve=>{s(n)&&ve(M)})}var $=d(k,2);{var T=ve=>{var Se=fu(),De=u(Se);kr(De,{class:"h-4 w-4"});var ze=d(De,2),Ee=u(ze),Dt=d(Ee);{var Dr=ut=>{var Ht=pt("+ 1 dépense globale");v(ut,Ht)};E(Dt,ut=>{s(a).expense&&ut(Dr)})}var Cr=d(Dt,2);{var $t=ut=>{var Ht=pt();B(()=>U(Ht,`(traité en ${s(a).batches??""} lots)`)),v(ut,Ht)};E(Cr,ut=>{s(a).batches&&s(a).batches>1&&ut($t)})}B(()=>U(Ee,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),v(ve,Se)};E($,ve=>{s(a)&&ve(T)})}var D=d($,2),L=u(D);ko(L,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(ve,Se)=>{var De=hu();v(ve,De)},$$slots:{default:!0}});var O=d(D,2),X=d(u(O),2),ce=u(X),q=u(ce),I=u(q);Lt(I,{class:"h-4 w-4 opacity-50"});var j=d(I,2),ae=d(q,2);st(ae,21,()=>ee.uniqueStores,Hr,(ve,Se)=>{var De=pu(),ze=u(De),Ee={};B(()=>{U(ze,s(Se)),Ee!==(Ee=s(Se))&&(De.value=(De.__value=s(Se))??"")}),v(ve,De)});var Y=d(ce,2),Q=u(Y),re=u(Q);Kr(re,{class:"h-4 w-4 opacity-50"});var be=d(re,2),z=d(Q,2);st(z,21,()=>ee.uniqueWho,Hr,(ve,Se)=>{var De=mu(),ze=u(De),Ee={};B(()=>{U(ze,s(Se)),Ee!==(Ee=s(Se))&&(De.value=(De.__value=s(Se))??"")}),v(ve,De)});var ne=d(Y,2),W=u(ne),se=u(W);Dc(se,{class:"h-4 w-4 opacity-50"});var _e=d(se,2),G=d(X,2),de=u(G),H=u(de),te=u(H);te.value=te.__value="delivered";var ye=d(te);ye.value=ye.__value="ordered";var ke=d(H,2),Ne=d(de,2);{var oe=ve=>{var Se=gu(),De=u(Se),ze=d(u(De),2);B(()=>ze.disabled=s(r)),qe(ze,()=>o.deliveryDate,Ee=>o.deliveryDate=Ee),v(ve,Se)};E(Ne,ve=>{o.status==="ordered"&&ve(oe)})}var we=d(G,2),Te=u(we),Oe=u(Te);yo(Oe,{class:"h-4 w-4 opacity-50"});var Ge=d(Oe,2),Ve=d(O,2),ie=d(u(Ve),2);Wr(ie,{get items(){return s(g)},onToggleItem:h,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var xe=d(Ve,2),Be=u(xe);Be.__click=[Ja,r,t];var Ke=d(Be,2);Ke.__click=[du,c,r,n,a,l,o,t];var Pe=u(Ke);{var $e=ve=>{var Se=_u();v(ve,Se)},Ue=ve=>{var Se=bu(),De=N(Se);Yt(De,{class:"h-4 w-4"});var ze=d(De);B(()=>U(ze,` Valider ${s(l).length??""} produit(s)`)),v(ve,Se)};E(Pe,ve=>{s(r)?ve($e):ve(Ue,!1)})}B(()=>{U(P,` ${s(f)??""}`),C.disabled=s(r),j.disabled=s(r),be.disabled=s(r),_e.disabled=s(r),H.disabled=s(r),Me(ke,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),Ge.disabled=s(r),Be.disabled=s(r),Ke.disabled=s(r)||!s(c)}),qe(j,()=>o.store,ve=>o.store=ve),qe(be,()=>o.who,ve=>o.who=ve),qe(_e,()=>o.expense,ve=>o.expense=ve),rr(H,()=>o.status,ve=>o.status=ve),qe(Ge,()=>o.notes,ve=>o.notes=ve),v(e,p),F()}Je(["click"]);function Wn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:mc};case"animaux":return{displayName:"Viandes et Poissons",icon:gc};case"legumes":return{displayName:"Fruits et Légumes",icon:bc};case"sucres":return{displayName:"Sucrées",icon:_c};case"lof":return{displayName:"L.O.F",icon:Tc};case"autres":return{displayName:"Autres",icon:yc};case"epices":return{displayName:"Assaisonnements",icon:Ic};case"frais":return{displayName:"Produits Frais",icon:Wc};default:return{displayName:e,icon:Gr}}}function Vn(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function ha(e,t){let r,n;if(t==="gr."&&e>=1e3){const a=e/1e3;r=Rn(a),n="kg"}else if(t==="ml"&&e>=1e3){const a=e/1e3;r=Rn(a),n="l"}else r=Rn(e),n=t;return`${r} ${n}`}function Rn(e){return(Math.round(e*10)/10).toString().replace(/\.0$/,"")}function xn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Su(e){if(!e)return"";try{return new Date(e).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"})}catch{return e}}function Gn(e){switch(e){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function Za(e){return e?xn(e):"-"}function xu(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=Gn(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Pu(a),deliveryDate:a==="ordered"&&n.deliveryDate?Su(n.deliveryDate):void 0}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t).map(r=>({...r,quantity:ha(r.quantity,r.unit).replace(` ${r.unit}`,"")}))}function Pu(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"Check";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function $u(e){let t=V(!1),r=V(null);const n=J(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),ee.getEnrichedProductById(e))),a=J(()=>s(n)?.who??[]),o=J(()=>s(n)?.stockParsed??null),i=J(()=>s(n)?.purchases??[]),l=J(()=>s(n)?.byDate?Dl(s(n).byDate):[]),c=je({purchase:{quantity:null,unit:"",store:"",who:$r.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=V(!1),h=V(null);Xt(()=>{!s(n)||s(f)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=$r.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??"",c.store.comment=s(n).storeInfo?.storeComment??null,c.who=s(n)?.who?[...s(n).who]:[],b(h,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),b(f,!0))});const g=J(()=>s(h)?{store:JSON.stringify(c.store)!==JSON.stringify(s(h).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(s(h).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?s(o)?c.stock.quantity.toString()!==s(o).quantity||c.stock.unit!==s(o).unit||(c.stock.notes||"")!==(s(o).notes||""):!0:!1}const m=J(()=>!!(s(h)&&(s(g).store||s(g).stock||s(g).who)));let _=V(null);const x=J(()=>s(_)?s(i).find(q=>q.$id===s(_))??null:null);async function w(q,I){b(t,!0),b(r,null);try{const j=await q();return I&&P("success",I),j}catch(j){const ae=j instanceof Error?j.message:"Une erreur est survenue";return b(r,ae,!0),P("error",ae),console.error("[ProductModalState]",j),null}finally{b(t,!1)}}function P(q,I){const j=new CustomEvent("toast",{detail:{type:q,message:I}});window.dispatchEvent(j)}async function C(){s(n)&&await w(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!ee.currentMainId)throw new Error("mainId non disponible");const{quantity:q,unit:I}=Vn(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await Rt(s(n).$id,{},Y=>ee.getEnrichedProductById(Y)));const j=c.purchase.status||"delivered";let ae=c.purchase.deliveryDate||null;j==="delivered"&&!ae&&(ae=new Date().toISOString()),await ao({products:[s(n).$id],mainId:ee.currentMainId,unit:I,quantity:q,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:j,orderDate:c.purchase.orderDate||null,deliveryDate:ae}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function S(q){b(_,q.$id,!0)}function A(){b(_,null)}async function k(q){q.$id&&await w(async()=>{const{quantity:I,unit:j}=Vn(q.quantity,q.unit),ae=q.status||null;let Y=q.deliveryDate||null;ae==="delivered"&&!Y&&(Y=new Date().toISOString()),await so(q.$id,{unit:j,quantity:I,store:q.store||null,who:q.who||null,notes:q.notes||"",price:q.price||null,status:ae,orderDate:q.orderDate||null,deliveryDate:Y}),b(_,null)},"Achat modifié avec succès")}async function M(q){const I=s(i).find(j=>j.$id===q);I&&confirm(`Supprimer cet achat (${I.quantity} ${I.unit}) ?`)&&await w(async()=>{await oo(q)},"Achat supprimé avec succès")}async function $(){s(n)&&await w(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const q={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Un(s(n).$id,JSON.stringify(q))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await Rt(s(n).$id,{stockReel:JSON.stringify(q)},I=>ee.getEnrichedProductById(I))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function T(){s(n)&&confirm("Supprimer le stock actuel ?")&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await Un(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await Rt(s(n).$id,{stockReel:null},q=>ee.getEnrichedProductById(q)))},"Stock supprimé")}async function D(q){s(n)&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, setWho normal...`),await to(s(n).$id,q)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await Rt(s(n).$id,{who:q},I=>ee.getEnrichedProductById(I)))},"Volontaires mis à jour")}async function L(q){s(n)&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await eo(s(n).$id,q)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await Rt(s(n).$id,{store:JSON.stringify(q)},I=>ee.getEnrichedProductById(I)))},"Magasin mis à jour")}async function O(q){s(n)&&await w(async()=>{s(n).isSynced?await da(s(n).$id,q,!0):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await Rt(s(n).$id,{totalNeededOverride:JSON.stringify(q)},I=>ee.getEnrichedProductById(I)))},"Override appliqué")}async function X(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await w(async()=>{await ro(s(n).$id,!0)},"Override supprimé")}async function ce(){!s(n)||!s(m)||await w(async()=>{const q={};if(s(g).stock&&c.stock.quantity&&c.stock.unit){const I={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};q.stockReel=JSON.stringify(I)}if(s(g).who&&(q.who=c.who),s(g).store){const I={storeName:c.store.name||"",storeComment:c.store.comment||void 0};q.storeInfo=I}Object.keys(q).length>0&&(await no(s(n).$id,q,I=>ee.getEnrichedProductById(I)),b(h,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(_)},get editingPurchaseData(){return s(x)},forms:c,addPurchase:C,startEditPurchase:S,cancelEditPurchase:A,updateEditedPurchase:k,removePurchase:M,setStock:$,removeStock:T,setWho:D,updateStore:L,setOverride:O,removeOverride:X,saveAllChanges:ce,get hasChanges(){return s(g)},get hasAnyChanges(){return s(m)},formatQuantity:ha,formatDate:xn}}var ku=y('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),Eu=y('<div class="text-xs text-base-content/60 mt-1"> </div>'),Au=y('<div class="font-medium"> </div> <!>',1),Mu=y('<pre class="text-xs"> </pre>'),Tu=y('<span class="text-base-content/50 italic">Non défini</span>'),Du=y('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),Cu=y('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function Pn(e,t){Z(t,!0);let r=Ae(t,"title",3,"Événement terminé"),n=Ae(t,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),a=Ae(t,"showData",3,!0),o=Ae(t,"data",3,null),i=Ae(t,"dataLabel",3,"");var l=Cu(),c=u(l),f=u(c);_o(f,{class:"h-5 w-5 text-warning"});var h=d(f,2);Oc(h,{class:"h-4 w-4 text-warning/70"});var g=d(h,2),p=u(g),m=d(c,2),_=u(m),x=d(m,2);{var w=P=>{var C=Du(),S=u(C);{var A=D=>{var L=ku(),O=u(L);B(()=>U(O,`${i()??""} :`)),v(D,L)};E(S,D=>{i()&&D(A)})}var k=d(S,2),M=u(k);{var $=D=>{var L=pt();B(()=>U(L,o())),v(D,L)},T=D=>{var L=K(),O=N(L);{var X=q=>{var I=pt();B(j=>U(I,j),[()=>o().join(", ")]),v(q,I)},ce=q=>{var I=K(),j=N(I);{var ae=Q=>{var re=K(),be=N(re);{var z=W=>{var se=Au(),_e=N(se),G=u(_e),de=d(_e,2);{var H=te=>{var ye=Eu(),ke=u(ye);B(()=>U(ke,o().storeComment)),v(te,ye)};E(de,te=>{o().storeComment&&te(H)})}B(()=>U(G,o().storeName)),v(W,se)},ne=W=>{var se=Mu(),_e=u(se);B(G=>U(_e,G),[()=>JSON.stringify(o(),null,2)]),v(W,se)};E(be,W=>{o().storeName?W(z):W(ne,!1)})}v(Q,re)},Y=Q=>{var re=Tu();v(Q,re)};E(j,Q=>{typeof o()=="object"&&o()!==null?Q(ae):Q(Y,!1)},!0)}v(q,I)};E(O,q=>{Array.isArray(o())&&o().length>0?q(X):q(ce,!1)},!0)}v(D,L)};E(M,D=>{typeof o()=="string"||typeof o()=="number"?D($):D(T,!1)})}v(P,C)};E(x,P=>{a()&&o()&&P(w)})}B(()=>{U(p,r()),U(_,n())}),v(e,l),F()}function Nu(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Iu(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Ru(e,t){t().cancelEditPurchase()}var Ou=y('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),qu=y('<span class="loading loading-spinner loading-sm"></span>'),ju=y(`<h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>`,1),Lu=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Bu=y("<th>Actions</th>"),zu=y('<span class="loading loading-spinner loading-sm"></span>'),Uu=y('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Livré</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Qu=(e,t,r)=>t(s(r)),Hu=(e,t,r)=>t(s(r).$id),Wu=y('<span class="loading loading-spinner loading-sm"></span>'),Vu=y('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),Gu=y('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),Ku=y('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),Yu=y('<div class="space-y-4"><!></div> <!>',1);function Ju(e,t){Z(t,!0);let r=Ae(t,"modalState",7),n=Ae(t,"isArchiveMode",3,!1);function a(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function o(w){return w.quantity!==null&&w.quantity!==0&&w.unit?.trim()!==""}function i(w){r().removePurchase(w)}function l(w){r().startEditPurchase(w)}var c=Yu(),f=N(c),h=u(f);{var g=w=>{Pn(w,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},p=w=>{var P=ju(),C=N(P),S=u(C);Yt(S,{class:"h-5 w-5"});var A=d(C,2),k=u(A),M=d(u(k),2),$=u(M),T=u($);Gr(T,{class:"h-4 w-4 opacity-50"});var D=d(T,2),L=d($,2),O=u(L);O.value=O.__value="";var X=d(O);X.value=X.__value="kg";var ce=d(X);ce.value=ce.__value="gr.";var q=d(ce);q.value=q.__value="l.";var I=d(q);I.value=I.__value="ml";var j=d(I);j.value=j.__value="unité";var ae=d(j);ae.value=ae.__value="bottes";var Y=d(L,2),Q=u(Y);Lt(Q,{class:"h-4 w-4 opacity-50"});var re=d(Q,2),be=d(Y,2),z=u(be);Kr(z,{class:"h-4 w-4 opacity-50"});var ne=d(z,2),W=d(be,2),se=d(u(W),2),_e=d(M,2),G=u(_e),de=u(G);yo(de,{class:"h-4 w-4 opacity-50"});var H=d(de,2),te=d(_e,2),ye=u(te),ke=u(ye),Ne=u(ke),oe=u(Ne);oe.value=oe.__value="delivered";var we=d(oe);we.value=we.__value="ordered";var Te=d(ke,2),Oe=d(ye,2);{var Ge=Pe=>{var $e=Ou(),Ue=d(u($e),2);qe(Ue,()=>r().forms.purchase.deliveryDate,ve=>r().forms.purchase.deliveryDate=ve),v(Pe,$e)};E(Oe,Pe=>{r().forms.purchase.status==="ordered"&&Pe(Ge)})}var Ve=d(te,2),ie=u(Ve);ie.__click=[Nu,a,r];var xe=u(ie);{var Be=Pe=>{var $e=qu();v(Pe,$e)},Ke=Pe=>{var $e=pt("Ajouter l'achat");v(Pe,$e)};E(xe,Pe=>{r().loading?Pe(Be):Pe(Ke,!1)})}B(Pe=>{Me(Te,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),ie.disabled=Pe},[()=>r().loading||!a()]),qe(D,()=>r().forms.purchase.quantity,Pe=>r().forms.purchase.quantity=Pe),rr(L,()=>r().forms.purchase.unit,Pe=>r().forms.purchase.unit=Pe),qe(re,()=>r().forms.purchase.store,Pe=>r().forms.purchase.store=Pe),qe(ne,()=>r().forms.purchase.who,Pe=>r().forms.purchase.who=Pe),qe(se,()=>r().forms.purchase.price,Pe=>r().forms.purchase.price=Pe),qe(H,()=>r().forms.purchase.notes,Pe=>r().forms.purchase.notes=Pe),rr(Ne,()=>r().forms.purchase.status,Pe=>r().forms.purchase.status=Pe),v(w,P)};E(h,w=>{n()?w(g):w(p,!1)})}var m=d(f,2);{var _=w=>{var P=Lu(),C=u(P);Yt(C,{class:"mx-auto mb-2 h-12 w-12"}),v(w,P)},x=w=>{var P=Ku(),C=u(P),S=u(C),A=u(S),k=d(u(A),8);{var M=T=>{var D=Bu();v(T,D)};E(k,T=>{n()||T(M)})}var $=d(S);st($,21,()=>r().purchasesList,T=>T.$id,(T,D,L)=>{var O=K(),X=N(O);{var ce=I=>{var j=Uu(),ae=u(j),Y=u(ae),Q=u(Y),re=d(Q,2),be=u(re);be.value=be.__value="kg";var z=d(be);z.value=z.__value="gr.";var ne=d(z);ne.value=ne.__value="l.";var W=d(ne);W.value=W.__value="ml";var se=d(W);se.value=se.__value="unité";var _e=d(se);_e.value=_e.__value="bottes";var G=d(ae),de=u(G),H=d(G),te=u(H),ye=d(H),ke=u(ye),Ne=u(ke);Ne.value=Ne.__value="ordered";var oe=d(Ne);oe.value=oe.__value="delivered";var we=d(ye),Te=u(we),Oe=d(we),Ge=u(Oe),Ve=d(Oe),ie=u(Ve),xe=d(Ve),Be=u(xe),Ke=d(xe),Pe=u(Ke),$e=u(Pe);$e.__click=[Iu,r,o];var Ue=u($e);{var ve=Ee=>{var Dt=zu();v(Ee,Dt)},Se=Ee=>{Vc(Ee,{class:"h-3 w-3"})};E(Ue,Ee=>{r().loading?Ee(ve):Ee(Se,!1)})}var De=d($e,2);De.__click=[Ru,r];var ze=u(De);Tt(ze,{class:"h-3 w-3"}),B(Ee=>$e.disabled=Ee,[()=>r().loading||!o(s(D))]),qe(Q,()=>s(D).quantity,Ee=>s(D).quantity=Ee),rr(re,()=>s(D).unit,Ee=>s(D).unit=Ee),qe(de,()=>s(D).store,Ee=>s(D).store=Ee),qe(te,()=>s(D).who,Ee=>s(D).who=Ee),rr(ke,()=>s(D).status,Ee=>s(D).status=Ee),qe(Te,()=>s(D).orderDate,Ee=>s(D).orderDate=Ee),qe(Ge,()=>s(D).deliveryDate,Ee=>s(D).deliveryDate=Ee),qe(ie,()=>s(D).price,Ee=>s(D).price=Ee),qe(Be,()=>s(D).notes,Ee=>s(D).notes=Ee),v(I,j)},q=I=>{var j=Gu(),ae=u(j),Y=u(ae),Q=d(ae),re=u(Q),be=d(Q),z=u(be),ne=d(be),W=u(ne),se=u(W),_e=d(ne),G=u(_e),de=d(_e),H=u(de),te=d(de),ye=u(te),ke=d(te),Ne=u(ke),oe=d(ke);{var we=Te=>{var Oe=Vu(),Ge=u(Oe),Ve=u(Ge);Ve.__click=[Qu,l,D];var ie=u(Ve);Hn(ie,{class:"h-4 w-4"});var xe=d(Ve,2);xe.__click=[Hu,i,D];var Be=u(xe);{var Ke=$e=>{var Ue=Wu();v($e,Ue)},Pe=$e=>{Tt($e,{class:"h-4 w-4"})};E(Be,$e=>{r().loading?$e(Ke):$e(Pe,!1)})}B(()=>xe.disabled=r().loading),v(Te,Oe)};E(oe,Te=>{n()||Te(we)})}B((Te,Oe,Ge,Ve,ie)=>{U(Y,Te),U(re,s(D).store||"-"),U(z,s(D).who||"-"),Me(W,1,`badge badge-sm ${Oe??""}`),U(se,Ge),U(G,Ve),U(H,ie),U(ye,s(D).price?`${s(D).price}€`:"-"),U(Ne,s(D).notes||"-")},[()=>ha(s(D).quantity,s(D).unit),()=>Gn(s(D).status).class,()=>Gn(s(D).status).text,()=>Za(s(D).orderDate),()=>Za(s(D).deliveryDate)]),v(I,j)};E(X,I=>{r().editingPurchaseId===s(D).$id?I(ce):I(q,!1)})}v(T,O)}),v(w,P)};E(m,w=>{r().purchasesList.length===0?w(_):w(x,!1)})}v(e,c),F()}Je(["click"]);async function Zu(e,t){await t()?.removeStock()}var Fu=y(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),Xu=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},ed=y(`<h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`,1),td=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),rd=y('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),nd=y('<span class="loading loading-spinner loading-xs"></span>'),ad=y('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),sd=y('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),od=y('<div class="space-y-4"><!></div> <!>',1);function id(e,t){Z(t,!0);let r=Ae(t,"modalState",7),n=Ae(t,"isArchiveMode",3,!1);var a=od(),o=N(a),i=u(o);{var l=p=>{Pn(p,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return r().stockParsed},dataLabel:"Stock actuel"})},c=p=>{var m=ed(),_=N(m),x=u(_);Qn(x,{class:"h-5 w-5"});var w=d(_,2),P=u(w),C=u(P),S=u(C),A=d(C,2),k=u(A);ko(k,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(z,ne)=>{var W=Fu();v(z,W)},$$slots:{default:!0}});var M=d(A,2),$=u(M),T=u($);Gr(T,{class:"h-4 w-4 opacity-50"});var D=d(T,2),L=d($,2),O=u(L);O.value=O.__value="";var X=d(O);X.value=X.__value="kg";var ce=d(X);ce.value=ce.__value="gr.";var q=d(ce);q.value=q.__value="l.";var I=d(q);I.value=I.__value="ml";var j=d(I);j.value=j.__value="unité";var ae=d(j);ae.value=ae.__value="bottes";var Y=d(M,2),Q=u(Y),re=d(Y,2),be=u(re);be.__click=[Xu,r],B(z=>{U(S,`Déclarer le stock réel du ${z??""}`),be.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),qe(D,()=>r().forms.stock.quantity,z=>r().forms.stock.quantity=z),rr(L,()=>r().forms.stock.unit,z=>r().forms.stock.unit=z),qe(Q,()=>r().forms.stock.notes,z=>r().forms.stock.notes=z),v(p,m)};E(i,p=>{n()?p(l):p(c,!1)})}var f=d(o,2);{var h=p=>{var m=td(),_=u(m);Qn(_,{class:"mx-auto mb-2 h-12 w-12"}),v(p,m)},g=p=>{var m=sd(),_=u(m),x=d(u(_),2),w=u(x),P=d(u(w),2),C=u(P),S=d(w,2),A=d(u(S),2),k=u(A),M=d(S,2);{var $=L=>{var O=rd(),X=d(u(O),2),ce=u(X);B(()=>U(ce,r().stockParsed.notes)),v(L,O)};E(M,L=>{r().stockParsed.notes&&L($)})}var T=d(x,2);{var D=L=>{var O=ad(),X=u(O);X.__click=[Zu,r];var ce=u(X);{var q=j=>{var ae=nd();v(j,ae)},I=j=>{var ae=pt("Supprimer le stock");v(j,ae)};E(ce,j=>{r().loading?j(q):j(I,!1)})}B(()=>X.disabled=r().loading),v(L,O)};E(T,L=>{n()||L(D)})}B(L=>{U(C,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),U(k,L)},[()=>xn(r().stockParsed.dateTime)]),v(p,m)};E(f,p=>{r().stockParsed?p(g,!1):p(h)})}v(e,a),F()}Je(["click"]);function ld(e,t,r){t().forms.who=[...t().whoList],b(r,"")}var cd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},ud=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),dd=y('<div class="space-y-4"><!></div>');function vd(e,t){Z(t,!0);let r=Ae(t,"modalState",7),n=Ae(t,"isArchiveMode",3,!1),a=V("");const o=J(()=>{const _=new Set([...ee.uniqueWho,...r().forms.who]);return Array.from(_).map(x=>({id:x,label:x,selected:r().forms.who.includes(x)}))});function i(_){const x=_.trim();x&&!r().forms.who.includes(x)&&(r().forms.who=[...r().forms.who,x])}function l(_){r().forms.who=r().forms.who.filter(x=>x!==_)}function c(_){r().forms.who.includes(_)?l(_):i(_)}function f(){s(a).trim()&&(i(s(a)),b(a,""))}var h=dd(),g=u(h);{var p=_=>{Pn(_,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},m=_=>{var x=ud(),w=u(x),P=d(u(w),4),C=u(P),S=u(C),A=u(S);Kr(A,{class:"h-4 w-4 opacity-50"});var k=d(A,2);k.__keydown=[cd,f];var M=d(S,2);M.__click=f;var $=u(M);$o($,{size:16});var T=d(C,2),D=d(u(T),2);Wr(D,{get items(){return s(o)},onToggleItem:c,showIcon:!0});var L=d(w,2),O=u(L);O.__click=[ld,r,a],B(X=>{k.disabled=r().loading,M.disabled=X,O.disabled=r().loading},[()=>r().loading||!s(a).trim()]),qe(k,()=>s(a),X=>b(a,X)),v(_,x)};E(g,_=>{n()?_(p):_(m,!1)})}v(e,h),F()}Je(["keydown","click"]);var fd=y('<div class="mb-1 text-xs opacity-70"> </div>'),hd=(e,t,r)=>t(s(r)),pd=y("<button><!> </button>"),md=y('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function Eo(e,t){Z(t,!0);let r=Ae(t,"maxSuggestions",3,8),n=Ae(t,"title",3,"Suggestions :"),a=Ae(t,"buttonSize",3,"btn-xs"),o=Ae(t,"buttonVariant",3,"btn-soft"),i=Ae(t,"disabled",3,!1);const l=J(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=K(),h=N(f);{var g=p=>{var m=md(),_=u(m);{var x=P=>{var C=fd(),S=u(C);B(()=>U(S,n())),v(P,C)};E(_,P=>{n()&&P(x)})}var w=d(_,2);st(w,21,()=>s(l),P=>P.id,(P,C)=>{var S=pd();S.__click=[hd,c,C];var A=u(S);{var k=$=>{var T=K(),D=N(T);or(D,()=>s(C).icon,(L,O)=>{O(L,{class:"h-3 w-3"})}),v($,T)};E(A,$=>{s(C).icon&&$(k)})}var M=d(A);B(()=>{Me(S,1,`btn ${a()??""} ${o()??""}`),S.disabled=i()||s(C).disabled,Zt(S,"title",s(C).disabled?"Déjà sélectionné":s(C).label),U(M,` ${s(C).label??""}`)}),v(P,S)}),v(p,m)};E(h,p=>{s(l).length>0&&p(g)})}v(e,f),F()}Je(["click"]);var gd=(e,t)=>{e.key==="Enter"&&t()},_d=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},bd=y(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),yd=y('<div class="space-y-4"><!></div>');function wd(e,t){Z(t,!0);let r=Ae(t,"modalState",7),n=Ae(t,"isArchiveMode",3,!1);const a=J(()=>r()?.hasChanges?.store||!1);async function o(){if(!s(a))return;const h={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(h)}var i=yd(),l=u(i);{var c=h=>{{let g=J(()=>r().product?.storeInfo);Pn(h,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return s(g)},dataLabel:"Magasin actuel"})}},f=h=>{var g=bd(),p=u(g),m=d(u(p),4),_=u(m),x=u(_),w=u(x);Lt(w,{class:"h-4 w-4 opacity-50"});var P=d(w,2);P.__keydown=[gd,o];var C=d(x,2);{var S=$=>{{let T=J(()=>ee.uniqueStores.map(D=>({id:D,label:D,disabled:D===r().forms.store.name})));Eo($,{get suggestions(){return s(T)},onSuggestionClick:D=>{r().forms.store.name=D.label},buttonVariant:"btn-outline"})}};E(C,$=>{ee.uniqueStores.length>0&&$(S)})}var A=d(_,2),k=d(m,2),M=u(k);M.__click=[_d,r],B(()=>M.disabled=r().loading),qe(P,()=>r().forms.store.name,$=>r().forms.store.name=$),qe(A,()=>r().forms.store.comment,$=>r().forms.store.comment=$),v(h,g)};E(l,h=>{n()?h(c):h(f,!1)})}v(e,i),F()}Je(["keydown","click"]);var Sd=y("<fieldset><legend><!> </legend> <!></fieldset>");function jr(e,t){let r=Ae(t,"bgClass",3,"bg-base-100");var n=Sd(),a=u(n),o=u(a);{var i=f=>{const h=J(()=>t.iconComponent);var g=K(),p=N(g);or(p,()=>s(h),(m,_)=>{_(m,{size:16,class:"mr-1"})}),v(f,g)};E(o,f=>{t.iconComponent&&f(i)})}var l=d(o),c=d(a,2);ue(c,()=>t.children??le),B(()=>{Me(n,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Me(a,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),U(l,` ${t.legend??""}`)}),v(e,n)}async function xd(e,t,r,n,a,o){if(!t.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(i),b(o,!1)}async function Pd(e,t,r){t.modalState&&(await t.modalState.removeOverride(),b(r,!1))}var $d=y('<div class="stat "><div class="stat-title text-sm">Ancienne quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),kd=y('<div class="stat"><div class="stat-title text-sm">"Quantité redéfinie manuellement"</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic"></div></div>'),Ed=(e,t)=>b(t,!0),Ad=y('<div class="flex justify-end gap-2"><button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button></div>'),Md=y('<div class="text-error text-sm">Limite de caractères atteinte</div>'),Td=(e,t)=>b(t,!1),Dd=y('<span class="loading loading-spinner loading-sm"></span>'),Cd=y('<span class="loading loading-spinner loading-sm"></span>'),Nd=y('<div class="card-actions mt-4 justify-end gap-2"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>'),Id=y(`<div><div class="card-body p-4"><div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <!></div></div>`),Rd=y('<div class="stats not-md:stats-vertical shadow"><!> <div class="stat"><div class="stat-title text-sm">Quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">Recettes actuelles</div></div> <!></div> <!> <!>',1),Od=y('<div class="mb-2 space-y-4"><!></div>');function qd(e,t){Z(t,!0);const r=J(()=>t.modalState.product?.totalNeededOverrideParsed),n=J(()=>t.modalState.product?.displayTotalOverride);let a=J(()=>s(r)?.hasUnresolvedChangedSinceOverride),o=V(!1),i=V(je(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),l=V(je(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),c=V(je(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),f=J(()=>s(i)>0&&s(l).trim()!=="");var h=K(),g=N(h);{var p=m=>{var _=Od(),x=u(_);jr(x,{legend:"Besoin total",children:(w,P)=>{var C=Rd(),S=N(C),A=u(S);{var k=I=>{var j=$d(),ae=d(u(j),2),Y=u(ae);B(()=>U(Y,t.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay)),v(I,j)};E(A,I=>{t.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay&&s(a)&&I(k)})}var M=d(A,2),$=d(u(M),2),T=u($),D=d(M,2);{var L=I=>{var j=kd(),ae=d(u(j),2),Y=u(ae);B(()=>U(Y,s(n))),v(I,j)};E(D,I=>{s(n)&&s(r)&&I(L)})}var O=d(S,2);{var X=I=>{var j=Ad(),ae=u(j);ae.__click=[Ed,o],B(()=>ae.disabled=s(o)),v(I,j)};E(O,I=>{t.isArchiveMode||I(X)})}var ce=d(O,2);{var q=I=>{var j=Id(),ae=u(j),Y=u(ae),Q=u(Y),re=u(Q);zc(re,{class:"h-4 w-4 opacity-50"});var be=d(re,2),z=d(Q,2),ne=u(z);ne.value=ne.__value="";var W=d(ne);W.value=W.__value="kg";var se=d(W);se.value=se.__value="gr.";var _e=d(se);_e.value=_e.__value="l.";var G=d(_e);G.value=G.__value="ml";var de=d(G);de.value=de.__value="unité";var H=d(de);H.value=H.__value="bottes";var te=d(Y,2),ye=u(te),ke=d(u(ye),2),Ne=d(ke,2);{var oe=Oe=>{var Ge=Md();v(Oe,Ge)};E(Ne,Oe=>{s(c).length>=250&&Oe(oe)})}var we=d(te,2);{var Te=Oe=>{var Ge=Nd(),Ve=u(Ge);Ve.__click=[Td,o];var ie=d(Ve,2);ie.__click=[Pd,t,o];var xe=u(ie);{var Be=Se=>{var De=Dd();v(Se,De)},Ke=Se=>{var De=pt();B(()=>U(De,`Réinitialiser le total calculé (${t.modalState.product.displayTotalNeeded??""}).`)),v(Se,De)};E(xe,Se=>{t.modalState.loading?Se(Be):Se(Ke,!1)})}var Pe=d(ie,2);Pe.__click=[xd,t,i,l,c,o];var $e=u(Pe);{var Ue=Se=>{var De=Cd();v(Se,De)},ve=Se=>{var De=pt("Appliquer");v(Se,De)};E($e,Se=>{t.modalState.loading?Se(Ue):Se(ve,!1)})}B(()=>{ie.disabled=t.modalState.loading,Pe.disabled=t.modalState.loading||!s(f)}),v(Oe,Ge)};E(we,Oe=>{t.isArchiveMode||Oe(Te)})}B(()=>Me(j,1,`card border-base-300 border ${s(o)?"bg-base-200":"bg-base-100"}`)),qe(be,()=>s(i),Oe=>b(i,Oe)),rr(z,()=>s(l),Oe=>b(l,Oe)),qe(ke,()=>s(c),Oe=>b(c,Oe)),v(I,j)};E(ce,I=>{s(o)&&I(q)})}B(()=>U(T,t.modalState.product.displayTotalNeeded)),v(w,C)},$$slots:{default:!0}}),v(m,_)};E(g,m=>{t.modalState.product&&m(p)})}v(e,h),F()}Je(["click"]);var jd=y('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Ld=y('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Bd=y('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),zd=y('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Ud(e,t){Z(t,!0);const r=J(()=>t.modalState.recipes);var n=zd(),a=N(n);qd(a,{get modalState(){return t.modalState},get isArchiveMode(){return t.isArchiveMode}});var o=d(a,2),i=u(o),l=u(i);fa(l,{class:"h-5 w-5"});var c=d(i,2);{var f=g=>{var p=jd(),m=u(p);Gr(m,{class:"mx-auto mb-2 h-12 w-12"}),v(g,p)},h=g=>{var p=Bd(),m=u(p),_=d(u(m));st(_,21,()=>s(r),Hr,(x,w)=>{var P=Ld(),C=u(P),S=u(C),A=d(C),k=u(A),M=d(A),$=u(M);B(T=>{U(S,`${s(w).r??""} (${(s(w).a||"-")??""} c.)`),U(k,`${(s(w).q||s(w).qEq)??""} ${(s(w).u||s(w).uEq)??""}`),U($,T)},[()=>xn(s(w).date)]),v(x,P)}),v(g,p)};E(c,g=>{s(r).length===0?g(f):g(h,!1)})}v(e,n),F()}function Qd(e,t,r){s(t).saveAllChanges().then(()=>{r.onClose()})}var Hd=y('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),Wd=y('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Vd=y('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Gd=(e,t)=>t("recettes"),Kd=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Yd=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Jd=(e,t)=>t("magasins"),Zd=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Fd=(e,t)=>t("volontaires"),Xd=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),ev=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),tv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),rv=(e,t)=>t("stock"),nv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),av=y('<span class="badge badge-sm badge-secondary ml-1">1</span>'),sv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),ov=(e,t)=>t("achats"),iv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),lv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),cv=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),uv=y('<span class="loading loading-spinner loading-sm"></span>'),dv=y('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),vv=y('<div id="product_modal"><div class="modal-box flex fixed top-0 overflow-auto h-lvh w-lvw flex-col md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function fv(e,t){Z(t,!0);let r=Ae(t,"initialTab",3,"recettes"),n=J(()=>$u(t.productId)),a=J(()=>ee.isEventPassed),o=V(je(r()));function i(P){b(o,P,!0)}var l=vv(),c=u(l),f=u(c),h=u(f);{var g=P=>{var C=Wd(),S=N(C),A=u(S),k=d(S,2);{var M=X=>{var ce=Hd(),q=u(ce);_o(q,{class:"h-4 w-4"}),v(X,ce)};E(k,X=>{s(n)&&s(a)&&X(M)})}var $=d(k,2),T=u($),D=u(T),L=d(T,2),O=d(u(L));B(()=>{U(A,s(n).product?.productName),U(D,s(n).product?.productType),U(O,` ${s(n).product?.displayTotalNeeded??""}`)}),v(P,C)},p=P=>{var C=Vd();v(P,C)};E(h,P=>{s(n)&&s(n).product?P(g):P(p,!1)})}var m=d(h,2);m.__click=function(...P){t.onClose?.apply(this,P)};var _=u(m);Tt(_,{class:"h-4 w-4"});var x=d(f,2);{var w=P=>{var C=dv(),S=N(C),A=u(S);A.__click=[Gd,i];var k=u(A);fa(k,{class:"mr-1 h-5 w-5"});var M=d(k,2);{var $=ie=>{var xe=Kd(),Be=u(xe);B(()=>U(Be,s(n).product?.nbRecipes)),v(ie,xe)},T=ie=>{var xe=Yd();v(ie,xe)};E(M,ie=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?ie($):ie(T,!1)})}var D=d(A,2);D.__click=[Jd,i];var L=u(D);Lt(L,{class:"mr-1 h-5 w-5"});var O=d(L,2);{var X=ie=>{var xe=Zd();v(ie,xe)};E(O,ie=>{s(n).hasChanges?.store&&ie(X)})}var ce=d(D,2);ce.__click=[Fd,i];var q=u(ce);tn(q,{class:"mr-1 h-5 w-5"});var I=d(q,2);{var j=ie=>{var xe=Xd();v(ie,xe)},ae=ie=>{var xe=K(),Be=N(xe);{var Ke=$e=>{var Ue=ev(),ve=u(Ue);B(()=>U(ve,s(n).product?.who.length)),v($e,Ue)},Pe=$e=>{var Ue=tv();v($e,Ue)};E(Be,$e=>{s(n).product?.who&&s(n).product?.who.length>0?$e(Ke):$e(Pe,!1)},!0)}v(ie,xe)};E(I,ie=>{s(n).hasChanges?.who?ie(j):ie(ae,!1)})}var Y=d(ce,2);Y.__click=[rv,i];var Q=u(Y);Qn(Q,{class:"mr-1 h-5 w-5"});var re=d(Q,2);{var be=ie=>{var xe=nv();v(ie,xe)},z=ie=>{var xe=K(),Be=N(xe);{var Ke=$e=>{var Ue=av();v($e,Ue)},Pe=$e=>{var Ue=sv();v($e,Ue)};E(Be,$e=>{s(n).stockParsed?$e(Ke):$e(Pe,!1)},!0)}v(ie,xe)};E(re,ie=>{s(n).hasChanges?.stock?ie(be):ie(z,!1)})}var ne=d(Y,2);ne.__click=[ov,i];var W=u(ne);Yt(W,{class:"mr-1 h-5 w-5"});var se=d(W,2);{var _e=ie=>{var xe=iv(),Be=u(xe);B(()=>U(Be,s(n).purchasesList.length)),v(ie,xe)},G=ie=>{var xe=lv();v(ie,xe)};E(se,ie=>{s(n).purchasesList.length>0?ie(_e):ie(G,!1)})}var de=d(S,2),H=u(de);{var te=ie=>{var xe=cv(),Be=u(xe);Tt(Be,{class:"h-4 w-4"});var Ke=d(Be,2),Pe=u(Ke);B(()=>U(Pe,`erreur : ${s(n).error??""}`)),v(ie,xe)};E(H,ie=>{s(n).error&&ie(te)})}var ye=d(H,2),ke=u(ye);Fi(ke,()=>s(o),ie=>{var xe=K(),Be=N(xe);{var Ke=$e=>{Ud($e,{get modalState(){return s(n)},get isArchiveMode(){return s(a)}})},Pe=$e=>{var Ue=K(),ve=N(Ue);{var Se=ze=>{Ju(ze,{get modalState(){return s(n)},get isArchiveMode(){return s(a)}})},De=ze=>{var Ee=K(),Dt=N(Ee);{var Dr=$t=>{id($t,{get modalState(){return s(n)},get isArchiveMode(){return s(a)}})},Cr=$t=>{var ut=K(),Ht=N(ut);{var $n=he=>{vd(he,{get modalState(){return s(n)},get isArchiveMode(){return s(a)}})},fe=he=>{var Ce=K(),Qe=N(Ce);{var He=Ze=>{wd(Ze,{get modalState(){return s(n)},get isArchiveMode(){return s(a)}})};E(Qe,Ze=>{s(o)==="magasins"&&Ze(He)},!0)}v(he,Ce)};E(Ht,he=>{s(o)==="volontaires"?he($n):he(fe,!1)},!0)}v($t,ut)};E(Dt,$t=>{s(o)==="stock"?$t(Dr):$t(Cr,!1)},!0)}v(ze,Ee)};E(ve,ze=>{s(o)==="achats"?ze(Se):ze(De,!1)},!0)}v($e,Ue)};E(Be,$e=>{s(o)==="recettes"?$e(Ke):$e(Pe,!1)})}v(ie,xe)});var Ne=d(de,2),oe=u(Ne);oe.__click=function(...ie){t.onClose?.apply(this,ie)};var we=u(oe),Te=d(oe,2);Te.__click=[Qd,n,t];var Oe=u(Te);{var Ge=ie=>{var xe=uv();v(ie,xe)},Ve=ie=>{var xe=pt("Tout enregistrer");v(ie,xe)};E(Oe,ie=>{s(n).loading?ie(Ge):ie(Ve,!1)})}B(()=>{Me(A,1,`tab ${s(o)==="recettes"?"tab-active":""}`),Me(D,1,`tab ${s(o)==="magasins"?"tab-active":""}`),Me(ce,1,`tab ${s(o)==="volontaires"?"tab-active":""}`),Me(Y,1,`tab ${s(o)==="stock"?"tab-active":""}`),Me(ne,1,`tab ${s(o)==="achats"?"tab-active":""}`),U(we,s(n)?.hasAnyChanges?"Annuler":"Fermer"),Te.disabled=s(n).loading||!s(n).hasAnyChanges}),v(P,C)};E(x,P=>{s(n)&&P(w)})}B(()=>Me(l,1,`modal ${(t.productId&&"modal-open")??""}`)),v(e,l),F()}Je(["click"]);var hv=(e,t,r)=>t(r),pv=y("<button><span> </span> <!></button>"),mv=y('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),gv=(e,t)=>t(),_v=y('<button class="btn btn-xs btn-link text-primary/80" type="button">Dates à venir</button>'),bv=(e,t)=>t(),yv=y('<button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button>'),wv=y('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),Sv=y('<div class="flex flex-wrap justify-end gap-2"><!> <!></div>'),xv=y('<div class=" flex flex-wrap gap-1"></div> <!>',1);function Pv(e,t){Z(t,!0);let r=Ae(t,"availableDates",19,()=>[]),n=Ae(t,"currentRange",19,()=>({start:null,end:null})),a=V(je(n().start)),o=V(je(n().end));const i=J(()=>r().length>0&&s(a)===r()[0]&&s(o)===r()[r().length-1]),l=J(()=>{if(r().length===0)return!1;const S=new Date;S.setHours(0,0,0,0);const k=[...r()].sort().find(M=>new Date(M)>=S);return k&&s(a)===k&&s(o)===r()[r().length-1]}),c=J(()=>{if(r().length===0)return!0;const S=new Date(r()[r().length-1]);return S.setHours(23,59,59,999),S<new Date}),f=J(()=>{if(r().length===0)return!1;const S=new Date;return S.setHours(0,0,0,0),[...r()].some(A=>new Date(A)>=S)});Xt(()=>{b(a,n().start,!0),b(o,n().end,!0)});function h(S){s(a)===S&&s(o)===S?p():new Date(S)<new Date(s(a))?b(a,S,!0):(new Date(S)>new Date(s(o))||b(a,S,!0),b(o,S,!0)),t.onRangeChange(s(a),s(o))}function g(S){return s(i)?"btn-soft":new Date(S)>=new Date(s(a))&&new Date(S)<=new Date(s(o))?"":"btn-dash"}function p(){r().length!==0&&(b(a,r()[0],!0),b(o,r()[r().length-1],!0),t.onRangeChange(s(a),s(o)))}function m(){if(r().length===0)return;const S=new Date;S.setHours(0,0,0,0);const k=[...r()].sort().find(M=>new Date(M)>=S);k&&(b(a,k,!0),b(o,r()[r().length-1],!0),t.onRangeChange(s(a),s(o)))}var _=xv(),x=N(_);st(x,22,r,S=>S,(S,A)=>{var k=pv();k.__click=[hv,h,A];var M=u(k),$=u(M),T=d(M,2);{var D=O=>{Po(O,{size:16})},L=O=>{var X=K(),ce=N(X);{var q=j=>{wo(j,{size:16})},I=j=>{var ae=K(),Y=N(ae);{var Q=re=>{Mc(re,{size:16})};E(Y,re=>{In(A)==="cloud"&&re(Q)},!0)}v(j,ae)};E(ce,j=>{In(A)==="moon"?j(q):j(I,!1)},!0)}v(O,X)};E(T,O=>{In(A)==="sun"?O(D):O(L,!1)})}B((O,X)=>{Me(k,1,`btn btn-sm btn-secondary ${O??""}`),U($,X)},[()=>g(A),()=>Bl(A)]),v(S,k)});var w=d(x,2);{var P=S=>{var A=mv();v(S,A)},C=S=>{var A=Sv(),k=u(A);{var M=L=>{var O=_v();O.__click=[gv,m],v(L,O)};E(k,L=>{s(f)&&!s(l)&&L(M)})}var $=d(k,2);{var T=L=>{var O=yv();O.__click=[bv,p],v(L,O)},D=L=>{var O=wv();v(L,O)};E($,L=>{s(i)?L(D,!1):L(T)})}v(S,A)};E(w,S=>{s(c)?S(P):S(C,!1)})}v(e,_),F()}Je(["click"]);var $v=()=>ee.clearFilters(),kv=e=>ee.setSearchQuery(e.currentTarget.value),Ev=()=>ee.setSearchQuery(""),Av=()=>ee.setGroupBy("none"),Mv=()=>ee.setGroupBy("store"),Tv=()=>ee.setGroupBy("productType"),Dv=(e,t)=>ee.toggleProductType(t),Cv=y("<button><!> </button>"),Nv=()=>ee.toggleTemperature("frais"),Iv=()=>ee.toggleTemperature("surgele"),Rv=()=>ee.clearTypeAndTemperatureFilters(),Ov=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),qv=y('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),jv=y('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div> <!>',1),Lv=(e,t)=>ee.toggleStore(t),Bv=y("<button> </button>"),zv=()=>ee.clearStoreFilters(),Uv=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Qv=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Hv=(e,t)=>ee.toggleWho(t),Wv=y("<button> </button>"),Vv=()=>ee.clearWhoFilters(),Gv=y('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),Kv=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Yv=y('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Jv(e,t){Z(t,!0);const r=J(()=>ee.filters),n=J(()=>ee.uniqueStores),a=J(()=>ee.uniqueWho),o=J(()=>ee.uniqueProductTypes);var i=Yv(),l=N(i),c=u(l),f=u(c);go(f,{class:"h-5 w-5"});var h=d(c,2);h.__click=[$v];var g=u(h);Xr(g,{class:"h-4 w-4"});var p=d(l,2),m=u(p),_=d(u(m),2),x=u(_);Gc(x,{class:"h-4 w-4"});var w=d(x,2);w.__input=[kv];var P=d(w,2);P.__click=[Ev];var C=u(P);Tt(C,{class:"h-4 w-4"});var S=d(m,2),A=d(u(S),2),k=u(A);k.__change=[Av];var M=d(k,2);M.__change=[Mv];var $=d(M,2);$.__change=[Tv];var T=d(S,2);{var D=j=>{jr(j,{legend:"Date incluses",bgClass:"bg-base-100",children:(ae,Y)=>{Pv(ae,{get availableDates(){return ee.availableDates},get currentRange(){return ee.dateRange},onRangeChange:(Q,re)=>ee.setDateRange(Q,re)})},$$slots:{default:!0}})};E(T,j=>{ee.hasSingleDateEvent||j(D)})}var L=d(T,2);{var O=j=>{jr(j,{legend:"Types & Température",get iconComponent(){return Kc},children:(ae,Y)=>{var Q=jv(),re=N(Q);st(re,20,()=>s(o),H=>H,(H,te)=>{const ye=J(()=>Wn(te));var ke=Cv();ke.__click=[Dv,te];var Ne=u(ke);or(Ne,()=>s(ye).icon,(we,Te)=>{Te(we,{class:"mr-1 h-5 w-5"})});var oe=d(Ne);B(we=>{Me(ke,1,`btn btn-sm ${we??""}`),U(oe,` ${s(ye).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-secondary":s(r).selectedProductTypes.includes(te)?"btn-secondary":"btn-dash btn-secondary"]),v(H,ke)});var be=d(re,2),z=u(be);z.__click=[Nv];var ne=u(z);So(ne,{class:"h-5 w-5"});var W=d(z,2);W.__click=[Iv];var se=u(W);xo(se,{class:"h-5 w-5"});var _e=d(be,2);{var G=H=>{var te=Ov();te.__click=[Rv];var ye=u(te);Xr(ye,{size:16}),v(H,te)},de=H=>{var te=qv();v(H,te)};E(_e,H=>{s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0?H(G):H(de,!1)})}B((H,te)=>{Me(z,1,`btn btn-sm ${H??""}`),Me(W,1,`btn btn-sm ${te??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),v(ae,Q)},$$slots:{default:!0}})};E(L,j=>{s(o).length>0&&j(O)})}var X=d(L,2);{var ce=j=>{jr(j,{legend:"Magasins",get iconComponent(){return Lt},children:(ae,Y)=>{var Q=Qv(),re=u(Q);st(re,16,()=>s(n),ne=>ne,(ne,W)=>{var se=Bv();se.__click=[Lv,W];var _e=u(se);B(G=>{Me(se,1,`btn btn-sm ${G??""}`),U(_e,W)},[()=>s(r).selectedStores.length===0?"btn-soft btn-secondary":s(r).selectedStores.includes(W)?"btn-secondary":"btn-dash btn-secondary"]),v(ne,se)});var be=d(re,2);{var z=ne=>{var W=Uv();W.__click=[zv];var se=u(W);Xr(se,{size:16}),v(ne,W)};E(be,ne=>{s(r).selectedStores.length>0&&ne(z)})}v(ae,Q)},$$slots:{default:!0}})};E(X,j=>{s(n).length>0&&j(ce)})}var q=d(X,2);{var I=j=>{jr(j,{legend:"Qui",get iconComponent(){return Kr},children:(ae,Y)=>{var Q=Kv(),re=u(Q);st(re,16,()=>s(a),ne=>ne,(ne,W)=>{var se=Wv();se.__click=[Hv,W];var _e=u(se);B(G=>{Me(se,1,`btn btn-sm ${G??""}`),U(_e,W)},[()=>s(r).selectedWho.length===0?" btn-soft btn-secondary":s(r).selectedWho.includes(W)?" btn-secondary":"btn-dash btn-secondary"]),v(ne,se)});var be=d(re,2);{var z=ne=>{var W=Gv();W.__click=[Vv];var se=u(W);Xr(se,{size:16}),v(ne,W)};E(be,ne=>{s(r).selectedWho.length>0&&ne(z)})}v(ae,Q)},$$slots:{default:!0}})};E(q,j=>{s(a).length>0&&j(I)})}B(()=>{h.disabled=!ee.hasFilters,il(w,s(r).searchQuery),P.disabled=!s(r).searchQuery,Dn(k,s(r).groupBy==="none"),Dn(M,s(r).groupBy==="store"),Dn($,s(r).groupBy==="productType")}),v(e,i),F()}Je(["click","input","change"]);var Zv=y('<div class="tooltip text-xs font-normal"><!></div>');function Fv(e,t){let r=Ae(t,"iconSize",3,24),n=t.icon||void 0;var a=Zv(),o=u(a);{var i=l=>{n(l,{get size(){return r()},class:`align-top
`})};E(o,l=>{t.icon&&l(i)})}B(()=>Zt(a,"data-tip",t.tip)),v(e,a)}var Xv=y('<div class="text-primary-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),ef=y('du <span class="font-semibold"> </span> au <span class="font-semibold"> </span>',1),tf=y('le <span class="font-semibold"> </span>',1),rf=(e,t,r)=>t.onOpenGroupEditModal("store",s(r).map(n=>n.$id),s(r)),nf=(e,t,r)=>t.onOpenGroupEditModal("who",s(r).map(n=>n.$id),s(r)),af=(e,t,r)=>t.onOpenGroupPurchaseModal(s(r)),sf=y(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),of=y('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),lf=y('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 font-semibold @md:min-w-48"><!></div> <div class="text-primary-content"><!></div> <!></div>'),cf=(e,t,r)=>t.onOpenModal(s(r).$id,"recettes"),uf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"recettes"),df=y('<div class="text-base-content/60 text-sm font-normal"> </div>'),vf=y('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),ff=y('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),hf=y('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),pf=y('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),mf=y('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),gf=y('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),_f=(e,t,r)=>t.onOpenModal(s(r).$id,"magasins"),bf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"magasins"),yf=y('<div class="ml-1"><!></div>'),wf=y('<div class="ml-1"> </div> <!>',1),Sf=y('<div class="ml-1 text-sm font-medium">?</div>'),xf=(e,t,r)=>t.onOpenModal(s(r).$id,"volontaires"),Pf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"volontaires"),$f=y('<span class="text-base-content/50 text-xs"> </span>'),kf=y('<div class="ml-1 flex gap-1"> <!></div>'),Ef=y('<div class="ml-1 text-sm font-medium">?</div>'),Af=y('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),Mf=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),Tf=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),Df=y('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),Cf=(e,t,r)=>t.onOpenModal(s(r).$id,"recettes"),Nf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"recettes"),If=y('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),Rf=y("<span> </span>"),Of=y('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),qf=(e,t,r,n)=>{e.stopPropagation(),t.onQuickValidation(s(r),s(n))},jf=y('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><div class="cart-icon"></div> <span class="text-xs"> </span> <!></button>'),Lf=y(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),Bf=(e,t,r)=>t.onOpenModal(s(r).$id,"achats"),zf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"achats"),Uf=y('<span class="text-xs opacity-75"> </span>'),Qf=y('<div><div class="flex items-center gap-1"><!> <span class="text-sm font-medium text-nowrap"> </span></div> <!></div>'),Hf=y('<span class="text-base-content/50 text-xs italic">aucun</span>'),Wf=y('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap justify-end gap-1.5"><!> <!></div></div></div></div></div>'),Vf=y('<!> <div class="space-y-1"></div>',1),Gf=y('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Kf=y('<div class="space-y-4 rounded-lg"></div> <!>',1);function Yf(e,t){Z(t,!0);const r={Package:Gr,MessageCircleQuestionMark:Lc,ShoppingCart:Yt,Clock:Ac,CircleCheck:Pc,CircleX:$c,ClipboardCheck:kc,PackageCheck:Bc,Check:kr},n={quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedAvailableQuantities:"Équilibré",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map},a=J(()=>ee.groupedFilteredProducts),o=J(()=>ee.filters),i=J(()=>Ta(ee.dateRange.start)),l=J(()=>Ta(ee.dateRange.end));var c=Kf(),f=N(c);st(f,21,()=>Object.entries(s(a)),([p,m])=>p,(p,m)=>{var _=J(()=>ns(s(m),2));let x=()=>s(_)[0];const P=J(()=>s(_)[1]);var C=Vf(),S=N(C);{var A=M=>{const $=J(()=>Wn(x()));var T=lf(),D=u(T),L=u(D);{var O=Q=>{var re=pt();B(()=>U(re,`🏪 ${x()??""} (${s(P).length??""})`)),v(Q,re)},X=Q=>{var re=K(),be=N(re);{var z=W=>{var se=Xv(),_e=u(se);or(_e,()=>s($).icon,(ye,ke)=>{ke(ye,{class:"h-4 w-4"})});var G=d(_e,2),de=u(G),H=d(G,2),te=u(H);B(()=>{U(de,s($).displayName),U(te,`(${s(P).length??""})`)}),v(W,se)},ne=W=>{var se=pt();B(()=>U(se,`📦 ${x()??""} (${s(P).length??""})`)),v(W,se)};E(be,W=>{s(o).groupBy==="productType"?W(z):W(ne,!1)},!0)}v(Q,re)};E(L,Q=>{s(o).groupBy==="store"?Q(O):Q(X,!1)})}var ce=d(D,2),q=u(ce);{var I=Q=>{var re=ef(),be=d(N(re)),z=u(be),ne=d(be,2),W=u(ne);B(()=>{U(z,s(i)),U(W,s(l))}),v(Q,re)},j=Q=>{var re=tf(),be=d(N(re)),z=u(be);B(()=>U(z,s(i))),v(Q,re)};E(q,Q=>{ee.dateRange.start!==ee.dateRange.end?Q(I):Q(j,!1)})}var ae=d(ce,2);{var Y=Q=>{var re=of(),be=u(re);be.__click=[rf,t,P];var z=u(be);Lt(z,{size:16});var ne=d(z,4);Hn(ne,{size:16});var W=d(be,2);W.__click=[nf,t,P];var se=u(W);tn(se,{size:16});var _e=d(se,4);Hn(_e,{size:16});var G=d(W,2);{var de=H=>{var te=sf();te.__click=[af,t,P];var ye=u(te);Yt(ye,{size:16});var ke=d(ye,4);Ya(ke,{size:16}),v(H,te)};E(G,H=>{s(P).some(te=>te.displayMissingQuantity!=="✅ Complet")&&H(de)})}v(Q,re)};E(ae,Q=>{ee.isEventPassed||Q(Y)})}v(M,T)};E(S,M=>{x()!==""&&M(A)})}var k=d(S,2);st(k,21,()=>s(P),M=>M.$id,(M,$)=>{const T=J(()=>ee.productsStatsByDateRange.get(s($).$id)||n),D=J(()=>Wn(s($).productType)),L=J(()=>xu(s($).purchases||[])),O=J(()=>s($).totalNeededOverrideParsed);var X=Wf(),ce=u(X),q=u(ce),I=u(q);I.__click=[cf,t,$],I.__keydown=[uf,t,$];var j=u(I),ae=u(j);or(ae,()=>s(D).icon,(fe,he)=>{he(fe,{class:"text-base-content/80 h-4 w-4"})});var Y=d(ae),Q=d(Y);{var re=fe=>{var he=df(),Ce=u(he);B(()=>U(Ce,`Ancien: ${s($).previousNames[0]??""}`)),v(fe,he)};E(Q,fe=>{s($).previousNames&&s($).previousNames.length>0&&fe(re)})}var be=d(j,2),z=u(be);{var ne=fe=>{var he=vf(),Ce=u(he);So(Ce,{class:"text-success h-4 w-4"}),v(fe,he)};E(z,fe=>{s($).pFrais&&fe(ne)})}var W=d(z,2);{var se=fe=>{var he=ff(),Ce=u(he);xo(Ce,{class:"text-info h-4 w-4"}),v(fe,he)};E(W,fe=>{s($).pSurgel&&fe(se)})}var _e=d(be,2);{var G=fe=>{var he=hf(),Ce=u(he);bo(Ce,{class:"h-4 w-4 animate-spin"}),v(fe,he)};E(_e,fe=>{s($).status==="isSyncing"&&fe(G)})}var de=d(_e,2);{var H=fe=>{var he=gf(),Ce=u(he);st(Ce,20,()=>s(T).concernedDates,Qe=>Qe,(Qe,He)=>{const Ze=J(()=>s(T).recipesByDate.get(He)||[]);var Fe=K(),We=N(Fe);{var gt=nt=>{var dt=pf(),Xe=u(dt),vt=u(Xe);B((Nt,Nr)=>{Zt(dt,"data-tip",Nt),U(vt,Nr)},[()=>s(Ze).map(Nt=>Nt.r).join(", "),()=>new Date(He).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),v(nt,dt)},Ct=nt=>{var dt=mf(),Xe=u(dt);B(vt=>U(Xe,vt),[()=>new Date(He).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),v(nt,dt)};E(We,nt=>{s(Ze).length>0?nt(gt):nt(Ct,!1)})}v(Qe,Fe)}),v(fe,he)};E(de,fe=>{s(T).concernedDates.length>0&&fe(H)})}var te=d(I,2);{var ye=fe=>{var he=Af(),Ce=u(he);Ce.__click=[_f,t,$],Ce.__keydown=[bf,t,$];var Qe=u(Ce);Lt(Qe,{size:18});var He=d(Qe,2);{var Ze=Xe=>{var vt=wf(),Nt=N(vt),Nr=u(Nt),kn=d(Nt,2);{var It=pr=>{var Yr=yf(),Mo=u(Yr);Fv(Mo,{get tip(){return s($).storeInfo.storeComment},get icon(){return jc},iconSize:14}),v(pr,Yr)};E(kn,pr=>{s($).storeInfo?.storeComment&&pr(It)})}B(()=>U(Nr,s($).storeInfo.storeName)),v(Xe,vt)},Fe=Xe=>{var vt=Sf();v(Xe,vt)};E(He,Xe=>{s($).storeInfo?.storeName?Xe(Ze):Xe(Fe,!1)})}var We=d(Ce,2);We.__click=[xf,t,$],We.__keydown=[Pf,t,$];var gt=u(We);tn(gt,{size:18});var Ct=d(gt,2);{var nt=Xe=>{var vt=kf(),Nt=u(vt),Nr=d(Nt);{var kn=It=>{var pr=$f(),Yr=u(pr);B(()=>U(Yr,`+${s($).who.length-2}`)),v(It,pr)};E(Nr,It=>{s($).who.length>2&&It(kn)})}B(It=>U(Nt,`${It??""} `),[()=>s($).who.slice(0,2).map(It=>It.slice(0,3)).join(" | ")]),v(Xe,vt)},dt=Xe=>{var vt=Ef();v(Xe,vt)};E(Ct,Xe=>{s($).who&&s($).who.length>0?Xe(nt):Xe(dt,!1)})}B(()=>{Me(Ce,1,`btn btn-soft btn-sm group relative ${s($).storeInfo?.storeName?"btn-success":""}`),Me(We,1,`btn btn-sm btn-soft group relative ${s($).who&&s($).who?.length>0?"btn-success":""}`)}),v(fe,he)},ke=fe=>{var he=Df(),Ce=u(he);{var Qe=Fe=>{var We=Mf(),gt=u(We);Lt(gt,{size:16});var Ct=d(gt);B(()=>U(Ct,` ${s($).storeInfo.storeName??""}`)),v(Fe,We)};E(Ce,Fe=>{s($).storeInfo?.storeName&&Fe(Qe)})}var He=d(Ce,2);{var Ze=Fe=>{var We=Tf(),gt=u(We);tn(gt,{size:16});var Ct=d(gt);B(nt=>U(Ct,` ${nt??""}`),[()=>s($).who.join(", ")]),v(Fe,We)};E(He,Fe=>{s($).who&&s($).who.length>0&&Fe(Ze)})}v(fe,he)};E(te,fe=>{ee.isEventPassed?fe(ke,!1):fe(ye)})}var Ne=d(q,2),oe=u(Ne);oe.__click=[Cf,t,$],oe.__keydown=[Nf,t,$];var we=u(oe),Te=u(we),Oe=u(Te);Rc(Oe,{class:"h-4 w-4"});var Ge=d(Te,2),Ve=u(Ge),ie=u(Ve);{var xe=fe=>{var he=If(),Ce=u(he),Qe=u(Ce),He=d(Ce,2);Ec(He,{class:"h-4 w-4"});var Ze=d(He);B(()=>{U(Qe,s(T).formattedQuantities),U(Ze,` ${s(O).totalOverride.q??""}
                          ${s(O).totalOverride.u??""}`)}),v(fe,he)},Be=fe=>{var he=Rf(),Ce=u(he);B(()=>U(Ce,s(T).formattedQuantities)),v(fe,he)};E(ie,fe=>{s(O)?.totalOverride?fe(xe):fe(Be,!1)})}var Ke=d(Ve,2);{var Pe=fe=>{var he=Of(),Ce=u(he),Qe=u(Ce),He=d(Qe);fa(He,{class:"h-3 w-3"});var Ze=d(Ce,2),Fe=u(Ze),We=d(Fe);Yc(We,{class:"h-3 w-3"}),B(()=>{U(Qe,`${s(T).nbRecipes??""} `),U(Fe,`${s(T).totalAssiettes??""} `)}),v(fe,he)};E(Ke,fe=>{(s(T).nbRecipes||s(T).totalAssiettes)&&fe(Pe)})}var $e=d(we,2);{var Ue=fe=>{var he=jf();he.__click=[qf,t,$,T];var Ce=d(u(he),2),Qe=u(Ce),He=d(Ce,2);{var Ze=We=>{Sc(We,{size:18})},Fe=We=>{xc(We,{size:18})};E(He,We=>{$r.isMobile?We(Ze):We(Fe,!1)})}B(()=>{Zt(he,"title",`Acheter le manquant (${s(T).formattedMissingQuantities??""})`),U(Qe,s(T).formattedMissingQuantities)}),v(fe,he)},ve=fe=>{var he=K(),Ce=N(he);{var Qe=He=>{Ya(He,{size:24,class:"text-success ms-auto"})};E(Ce,He=>{ee.isEventPassed||He(Qe)},!0)}v(fe,he)};E($e,fe=>{!ee.isEventPassed&&s(T).hasMissing?fe(Ue):fe(ve,!1)})}var Se=d($e,2);{var De=fe=>{var he=Lf(),Ce=u(he);wc(Ce,{size:18}),v(fe,he)};E(Se,fe=>{!ee.isEventPassed&&s(O)?.hasUnresolvedChangedSinceOverride&&fe(De)})}var ze=d(oe,2);ze.__click=[Bf,t,$],ze.__keydown=[zf,t,$];var Ee=u(ze),Dt=u(Ee),Dr=u(Dt);Yt(Dr,{class:"h-4 w-4"});var Cr=d(Dt,2),$t=d(Ee,2),ut=u($t);st(ut,17,()=>s(L),Hr,(fe,he)=>{const Ce=J(()=>r[s(he).icon]);var Qe=Qf(),He=u(Qe),Ze=u(He);or(Ze,()=>s(Ce),(nt,dt)=>{dt(nt,{class:"h-4 w-4"})});var Fe=d(Ze,2),We=u(Fe),gt=d(He,2);{var Ct=nt=>{var dt=Uf(),Xe=u(dt);B(()=>U(Xe,`livré le: ${s(he).deliveryDate??""}`)),v(nt,dt)};E(gt,nt=>{s(he).deliveryDate&&nt(Ct)})}B(()=>{Me(Qe,1,`badge badge-outline flex h-fit flex-col items-center gap-1 py-1 ${s(he).badgeClass??""}`),U(We,`${s(he).quantity??""}
                          ${s(he).unit??""}`)}),v(fe,Qe)});var Ht=d(ut,2);{var $n=fe=>{var he=Hf();v(fe,he)};E(Ht,fe=>{s(L).length===0&&fe($n)})}B(()=>{Me(X,1,`card bg-base-100 border-base-300 ${s($).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),U(Y,`${s($).productName??""} `),Me(Ve,1,`text-base font-bold ${s(T).hasMissing&&!ee.isEventPassed?"text-error":"text-success"}`),Me(Cr,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${ee.isEventPassed?"":"group-hover:opacity-100"} sm:opacity-0`)}),v(M,X)}),v(p,C)});var h=d(f,2);{var g=p=>{var m=Gf();v(p,m)};E(h,p=>{Object.values(s(a)).flat().length===0&&p(g)})}v(e,c),F()}Je(["click","keydown"]);async function Jf(e,t,r,n,a,o,i,l,c){if(!(!s(t)||s(r))){b(n,null),b(a,null);try{const f=s(o).map(m=>m.id),h=i.products.filter(m=>f.includes(m.$id));ee.setSyncStatus(f,!0),i.onClose();const g={storeName:s(l).trim(),storeComment:s(c).trim()},p=await vo(f,h,g);if(b(a,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(f){const h=f instanceof Error?f.message:"Erreur inconnue";b(n,h,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),ee.clearSyncStatus()}finally{b(r,!1)}}}function Fa(e,t,r){s(t)||r.onClose()}var Zf=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Ff=(e,t)=>b(t,"empty"),Xf=(e,t)=>b(t,"all"),eh=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),th=y("<!> ",1),rh=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function nh(e,t){Z(t,!0);let r=V(!1),n=V(null),a=V(null),o=V(je(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=V(je(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=V(je({})),c=V("empty");Xt(()=>{const G={};t.products.forEach(de=>{t.productIds.includes(de.$id)&&(s(c)==="empty"?G[de.$id]=!de.storeInfo||!de.storeInfo.storeName:G[de.$id]=!0)}),b(l,G,!0)});const f=J(()=>t.products.map(G=>({id:G.$id,label:G.productName,title:G.productName,selected:s(l)[G.$id]}))),h=J(()=>s(f).filter(G=>G.selected)),g=J(()=>`Attribuer un magasin (${s(h).length} produits sélectionnés)`),p=J(()=>s(h).length===0?!1:s(o).trim().length>0);function m(G){s(l)[G]=!s(l)[G]}var _=rh(),x=u(_),w=u(x),P=u(w),C=u(P),S=d(P,2);S.__click=[Fa,r,t];var A=u(S);Tt(A,{class:"h-4 w-4"});var k=d(w,2),M=u(k);{var $=G=>{var de=Zf(),H=u(de);Sn(H,{class:"h-4 w-4"});var te=d(H,2),ye=u(te);B(()=>U(ye,s(n))),v(G,de)};E(M,G=>{s(n)&&G($)})}var T=d(M,2),D=u(T),L=u(D),O=u(L);Lt(O,{class:"h-4 w-4 opacity-50"});var X=d(O,2),ce=d(L,2);{let G=J(()=>ee.uniqueStores.map(de=>({id:de,label:de,disabled:de===s(o)})));Eo(ce,{get suggestions(){return s(G)},onSuggestionClick:de=>{b(o,de.label,!0)},title:"Suggestions de magasins :"})}var q=d(D,2),I=u(q),j=d(T,2),ae=d(u(j),2),Y=u(ae);Y.__click=[Ff,c];var Q=d(Y,2);Q.__click=[Xf,c];var re=d(ae,2);Wr(re,{get items(){return s(f)},onToggleItem:m,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var be=d(k,2),z=u(be);z.__click=[Fa,r,t];var ne=d(z,2);ne.__click=[Jf,p,r,n,a,h,t,o,i];var W=u(ne);{var se=G=>{var de=eh();v(G,de)},_e=G=>{var de=th(),H=N(de);kr(H,{class:"h-4 w-4"});var te=d(H);B(()=>U(te,` Appliquer à ${s(h).length??""} produit(s)`)),v(G,de)};E(W,G=>{s(r)?G(se):G(_e,!1)})}B(()=>{U(C,s(g)),S.disabled=s(r),X.disabled=s(r),I.disabled=s(r),Me(Y,1,`tab ${s(c)==="empty"?"tab-active":""}`),Me(Q,1,`tab ${s(c)==="all"?"tab-active":""}`),z.disabled=s(r),ne.disabled=s(r)||!s(p)}),qe(X,()=>s(o),G=>b(o,G)),qe(I,()=>s(i),G=>b(i,G)),v(e,_),F()}Je(["click"]);async function ah(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){b(n,null),b(a,null);try{const c=s(o).map(g=>g.id),f=i.products.filter(g=>c.includes(g.$id));ee.setSyncStatus(c,!0),i.onClose();const h=await fo(c,f,s(l),"replace");if(b(a,h,!0),h.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${h.updatedCount} produits modifiés`),i.onSuccess?.(h);else throw new Error(h.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";b(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),ee.clearSyncStatus()}finally{b(r,!1)}}}function Xa(e,t,r){s(t)||r.onClose()}var sh=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),oh=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},ih=(e,t)=>b(t,"empty"),lh=(e,t)=>b(t,"all"),ch=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),uh=y("<!> ",1),dh=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function vh(e,t){Z(t,!0);let r=V(!1),n=V(null),a=V(null),o=V(je([])),i=V(""),l=V("empty"),c=V(je({}));Xt(()=>{const oe={};t.products.forEach(we=>{t.productIds.includes(we.$id)&&(s(l)==="empty"?oe[we.$id]=!we.who||we.who.length===0:oe[we.$id]=!0)}),b(c,oe,!0)});const f=J(()=>t.products.map(oe=>({id:oe.$id,label:oe.productName,title:oe.productName,selected:s(c)[oe.$id]}))),h=J(()=>s(f).filter(oe=>oe.selected)),g=J(()=>{const oe=new Set([...ee.uniqueWho,...s(o)]);return Array.from(oe).map(we=>({id:we,label:we,selected:s(o).includes(we)}))}),p=J(()=>`Gérer les volontaires (${s(h).length} produits sélectionnés)`),m=J(()=>s(h).length===0?!1:s(o).length>0);function _(oe){const we=oe.trim();we&&!s(o).includes(we)&&b(o,[...s(o),we],!0)}function x(oe){b(o,s(o).filter(we=>we!==oe),!0)}function w(oe){s(o).includes(oe)?x(oe):_(oe)}function P(){s(i).trim()&&(_(s(i)),b(i,""))}function C(oe){s(c)[oe]=!s(c)[oe]}var S=dh(),A=u(S),k=u(A),M=u(k),$=u(M),T=d(M,2);T.__click=[Xa,r,t];var D=u(T);Tt(D,{class:"h-4 w-4"});var L=d(k,2),O=u(L);{var X=oe=>{var we=sh(),Te=u(we);Sn(Te,{class:"h-4 w-4"});var Oe=d(Te,2),Ge=u(Oe);B(()=>U(Ge,s(n))),v(oe,we)};E(O,oe=>{s(n)&&oe(X)})}var ce=d(O,2),q=u(ce),I=u(q),j=u(I),ae=u(j);Kr(ae,{class:"h-4 w-4 opacity-50"});var Y=d(ae,2);Y.__keydown=[oh,P];var Q=d(j,2);Q.__click=P;var re=u(Q);$o(re,{size:16});var be=d(I,2),z=d(u(be),2);Wr(z,{get items(){return s(g)},onToggleItem:w,showIcon:!0});var ne=d(ce,2),W=d(u(ne),2),se=u(W);se.__click=[ih,l];var _e=d(se,2);_e.__click=[lh,l];var G=d(W,2);Wr(G,{get items(){return s(f)},onToggleItem:C,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var de=d(L,2),H=u(de);H.__click=[Xa,r,t];var te=d(H,2);te.__click=[ah,m,r,n,a,h,t,o];var ye=u(te);{var ke=oe=>{var we=ch();v(oe,we)},Ne=oe=>{var we=uh(),Te=N(we);kr(Te,{class:"h-4 w-4"});var Oe=d(Te);B(()=>U(Oe,` Appliquer à ${s(h).length??""} produit(s)`)),v(oe,we)};E(ye,oe=>{s(r)?oe(ke):oe(Ne,!1)})}B(oe=>{U($,s(p)),T.disabled=s(r),Y.disabled=s(r),Q.disabled=oe,Me(se,1,`tab ${s(l)==="empty"?"tab-active":""}`),Me(_e,1,`tab ${s(l)==="all"?"tab-active":""}`),H.disabled=s(r),te.disabled=s(r)||!s(m)},[()=>s(r)||!s(i).trim()]),qe(Y,()=>s(i),oe=>b(i,oe)),v(e,S),F()}Je(["click","keydown"]);var fh=y("<div><!></div>"),hh=y('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function ph(e,t){Z(t,!0);let r=V(!1),n=Ae(t,"width",3,"80"),a=Ae(t,"bgClass",3,"bg-base-300");const o=J(()=>"w-"+n());var i=K(),l=N(i);{var c=h=>{var g=fh(),p=u(g);ue(p,()=>t.children??le),B(()=>Me(g,1,`${a()??""} ${(s(o)?s(o):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),v(h,g)},f=h=>{var g=hh(),p=N(g),m=u(p),_=d(m,2),x=d(u(_),2),w=u(x);ue(w,()=>t.children??le);var P=d(p,2),C=u(P),S=u(C);go(S,{class:"h-6 w-6"}),ul(m,()=>s(r),A=>b(r,A)),v(h,g)};E(l,h=>{$r.isMobile?h(f,!1):h(c)})}v(e,i),F()}function mh(){}var gh=y('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function _h(e,t){Z(t,!0);const r="100",n=J(()=>ee.stats);let a=V(null),o=V("recettes"),i=V(!1),l=V(!1),c=V(je([])),f=V(je([])),h=V(!1),g=V(je([]));function p(z,ne="recettes"){b(o,ne,!0),b(a,z,!0)}function m(){b(a,null)}function _(z,ne,W){b(c,ne,!0),b(f,W,!0),b(z==="who"?i:l,!0)}function x(z){(!z||z==="who")&&b(i,!1),(!z||z==="store")&&b(l,!1),b(c,[],!0),b(f,[],!0)}function w(z){console.log(`[ProductsTable] Modification groupée réussie: ${z.updatedCount} produits`)}function P(z){const ne=z.filter(W=>W.displayMissingQuantity!=="✅ Complet"&&W.missingQuantityArray&&W.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${z.length} produits reçus → ${ne.length} produits avec quantités manquantes`),b(g,ne,!0),b(h,!0)}function C(){b(h,!1),b(g,[],!0)}function S(){console.log("[ProductsTable] Achat groupé créé avec succès"),C()}async function A(z,ne){try{if(!ee.currentMainId)throw new Error("mainId non disponible");const W=ne.missingQuantities||[];if(W.length===0){console.log("Aucune quantité manquante à valider pour ce produit dans cette période");return}const se=W.filter(G=>G.q<0).map(G=>({...G,q:Math.abs(G.q)})).map(G=>{const{quantity:de,unit:H}=Vn(G.q,G.u);return{q:de,u:H}});let _e=z.$id;z.isSynced||(console.log(`[ProductsTable] Produit ${z.$id} local, création pour validation rapide...`),_e=(await Rt(z.$id,{},de=>ee.getEnrichedProductById(de))).$id,console.log(`[ProductsTable] Produit sync créé: ${_e}`)),await ho(ee.currentMainId,_e,se,{store:z.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${z.productName}`)}catch(W){console.error("[ProductsTable] Erreur validation rapide:",W),alert("Erreur lors de la validation rapide: "+W.message)}}var k=gh(),M=N(k),$=u(M),T=u($),D=u(T);Nc(D,{class:"mr-1 h-4 w-4"});var L=d(D),O=d(T,2);O.__click=[mh];var X=u(O);Qc(X,{class:"mr-1 h-4 w-4"});var ce=d($,2);ph(ce,{width:r,children:(z,ne)=>{Jv(z,{})},$$slots:{default:!0}});var q=d(ce,2);Yf(q,{onOpenModal:p,onOpenGroupEditModal:_,onOpenGroupPurchaseModal:P,onQuickValidation:A});var I=d(M,2);fv(I,{get productId(){return s(a)},get initialTab(){return s(o)},onClose:m});var j=d(I,2);{var ae=z=>{vh(z,{get productIds(){return s(c)},get products(){return s(f)},onClose:()=>x("who"),onSuccess:w})};E(j,z=>{s(i)&&z(ae)})}var Y=d(j,2);{var Q=z=>{nh(z,{get productIds(){return s(c)},get products(){return s(f)},onClose:()=>x("store"),onSuccess:w})};E(Y,z=>{s(l)&&z(Q)})}var re=d(Y,2);{var be=z=>{wu(z,{get products(){return s(g)},onClose:C,onSuccess:S})};E(re,z=>{s(h)&&z(be)})}B(()=>{Me(M,1,`space-y-6 ${$r.isMobile?"":"ml-100"}`),U(L,` ${s(n).total??""}`)}),v(e,k),F()}Je(["click"]);di();var bh=y('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function yh(e){var t=bh();v(e,t)}var wh=y('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Sh(e,t){var r=wh(),n=d(u(r),2),a=d(u(n),2),o=u(a);B(()=>U(o,t.message)),v(e,r)}var xh=y('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Ph(e,t){var r=xh(),n=u(r),a=u(n);Sn(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(u(o),2),l=u(i);B(()=>U(l,t.message||"Erreur inconnue")),v(e,r)}function $h(e){e.stopPropagation()}var kh=(e,t)=>e.key==="Escape"&&t(),Eh=y('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),Ah=y('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),Mh=(e,t)=>b(t,!1),Th=y('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),Dh=(e,t)=>b(t,!0),Ch=(e,t)=>b(t,!1),Nh=y(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),Ih=(e,t)=>b(t,!0),Rh=y('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),Oh=y('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function qh(e,t){Z(t,!0);let r=Ae(t,"onClose",3,()=>{}),n=Ae(t,"onAuthSuccess",3,()=>{}),a=V(!0),o=V(!1),i=V(""),l=V(""),c=V(""),f=V(""),h=V(""),g=V(""),p=V(""),m=V(""),_=V(!1);function x(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function w(Y){if(Y.preventDefault(),!s(c)||!s(f)){b(i,"Veuillez remplir tous les champs");return}b(o,!0),b(i,"");try{await(await x().getAccount()).createEmailPasswordSession(s(c),s(f)),b(l,"Connexion réussie !"),setTimeout(()=>{n()()},1e3)}catch(Q){console.error("Erreur de connexion:",Q),b(i,Q.message||"Erreur lors de la connexion",!0)}finally{b(o,!1)}}async function P(Y){if(Y.preventDefault(),!s(h)||!s(g)||!s(p)){b(i,"Veuillez remplir tous les champs");return}b(o,!0),b(i,"");try{const re=await x().getAccount();await re.create("unique()",s(g),s(p),s(h)),await re.createEmailPasswordSession(s(g),s(p)),b(l,"Compte créé et connecté !"),setTimeout(()=>{n()()},1e3)}catch(Q){console.error("Erreur d'inscription:",Q),b(i,Q.message||"Erreur lors de la création du compte",!0)}finally{b(o,!1)}}async function C(Y){if(Y.preventDefault(),!s(m)){b(i,"Veuillez entrer votre email");return}b(o,!0),b(i,"");try{await(await x().getAccount()).createRecovery(s(m),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(_,!1),b(m,"")},2e3)}catch(Q){console.error("Erreur mot de passe oublié:",Q),b(i,Q.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(o,!1)}}function S(){s(o)||r()()}Xt(()=>{(s(a)||s(_))&&(b(i,""),b(l,""))});var A=Oh();A.__click=S,A.__keydown=[kh,S];var k=u(A);k.__click=[$h];var M=u(k),$=u(M),T=u($),D=d($,2);D.__click=S;var L=d(M,2),O=u(L);{var X=Y=>{var Q=Eh(),re=u(Q);B(()=>U(re,s(i))),v(Y,Q)};E(O,Y=>{s(i)&&Y(X)})}var ce=d(O,2);{var q=Y=>{var Q=Ah(),re=u(Q);B(()=>U(re,s(l))),v(Y,Q)};E(ce,Y=>{s(l)&&Y(q)})}var I=d(ce,2);{var j=Y=>{var Q=Th(),re=N(Q),be=u(re),z=d(u(be),2),ne=d(be,2),W=u(ne),se=d(re,2),_e=u(se);_e.__click=[Mh,_],B(()=>{z.disabled=s(o),ne.disabled=s(o),U(W,s(o)?"Envoi...":"Envoyer l'email de réinitialisation"),_e.disabled=s(o)}),En("submit",re,C),qe(z,()=>s(m),G=>b(m,G)),v(Y,Q)},ae=Y=>{var Q=K(),re=N(Q);{var be=ne=>{var W=Nh(),se=N(W),_e=u(se),G=d(u(_e),2),de=d(_e,2),H=d(u(de),2),te=d(de,2),ye=u(te),ke=d(se,2),Ne=u(ke);Ne.__click=[Dh,_];var oe=d(Ne,2),we=d(u(oe));we.__click=[Ch,a],B(()=>{G.disabled=s(o),H.disabled=s(o),te.disabled=s(o),U(ye,s(o)?"Connexion...":"Se connecter"),Ne.disabled=s(o),we.disabled=s(o)}),En("submit",se,w),qe(G,()=>s(c),Te=>b(c,Te)),qe(H,()=>s(f),Te=>b(f,Te)),v(ne,W)},z=ne=>{var W=Rh(),se=N(W),_e=u(se),G=d(u(_e),2),de=d(_e,2),H=d(u(de),2),te=d(de,2),ye=d(u(te),2),ke=d(te,2),Ne=u(ke),oe=d(se,2),we=d(u(oe));we.__click=[Ih,a],B(()=>{G.disabled=s(o),H.disabled=s(o),ye.disabled=s(o),ke.disabled=s(o),U(Ne,s(o)?"Création...":"Créer un compte"),we.disabled=s(o)}),En("submit",se,P),qe(G,()=>s(h),Te=>b(h,Te)),qe(H,()=>s(g),Te=>b(g,Te)),qe(ye,()=>s(p),Te=>b(p,Te)),v(ne,W)};E(re,ne=>{s(a)?ne(be):ne(z,!1)},!0)}v(Y,Q)};E(I,Y=>{s(_)?Y(j):Y(ae,!1)})}B(()=>{U(T,s(_)?"Mot de passe oublié":s(a)?"Connexion":"Inscription"),D.disabled=s(o)}),v(e,A),F()}Je(["click","keydown"]);var jh=(e,t,r)=>t(s(r)),Lh=y('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),Bh=(e,t,r)=>t(s(r)),zh=y('<button class="btn btn-ghost btn-sm btn-square" title="Fermer" aria-label="Fermer la notification"><!></button>'),Uh=y('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!></div></div></div>'),Qh=y("<div></div>");function Hh(e,t){Z(t,!0);let r=Ae(t,"position",3,"toast-right toast-bottom"),n=Ae(t,"padding",3,"md");const a=J(()=>n()==="sm"?"px-2 py-0.5":""),o=J(()=>bt.toasts);function i(h){return h==="success"||h==="info"}function l(h){bt.dismiss(h.id)}function c(h){t.onShowDetails?.({id:h.id,message:h.message,details:h.details})}var f=Qh();st(f,21,()=>s(o),h=>h.id,(h,g)=>{var p=Uh(),m=u(p),_=u(m),x=u(_);{var w=T=>{bo(T,{class:"h-5 w-5 animate-spin"})};E(x,T=>{s(g).state==="loading"&&T(w)})}var P=d(x,2),C=u(P),S=d(_,2),A=u(S);{var k=T=>{var D=Lh();D.__click=[jh,c,g];var L=u(D);mo(L,{class:"h-3 w-3"}),v(T,D)};E(A,T=>{s(g).details&&T(k)})}var M=d(A,2);{var $=T=>{var D=zh();D.__click=[Bh,l,g];var L=u(D);Tt(L,{class:"ms-1 h-4 w-4"}),v(T,D)};E(M,T=>{(s(g).state==="error"||!i(s(g).state))&&T($)})}B(()=>{Me(p,1,`alert alert-${s(g).state??""} max-w-sm ${s(a)??""} shadow-lg ${s(g).state==="error"?"":"alert-soft"}`),U(C,s(g).message)}),v(h,p)}),B(()=>Me(f,1,`toast ${r()??""} z-50`)),v(e,f),F()}Je(["click"]);var Wh=y('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function Vh(e){var t=Wh(),r=u(t),n=d(r,2);Po(n,{class:"swap-on fill-current"});var a=d(n,2);wo(a,{class:"swap-off fill-current"}),v(e,t)}function Gh(e,t){b(t,!0)}var Kh=y('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),Yh=y('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),Jh=y('<div class="text-base-content/60"> </div>'),Zh=y('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),Fh=y('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),Xh=y('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),ep=y('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),tp=y('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function rp(e,t){Z(t,!0);let r,n=V(null),a=V(!0),o=V(!1),i=V(!1);function l(k,M,$){localStorage.setItem("appwrite-user-email",k),localStorage.setItem("appwrite-user-name",M)}async function c(){const k=Ka();r=fc(k);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const T=await(await window.AppwriteClient.getAccount()).get();l(T.email,T.name),await ee.initialize(r,k)}catch(M){const $=M instanceof Error?M.message:"Erreur lors de l'initialisation";b(n,$,!0),console.error("[App] Erreur initialisation:",M)}finally{b(a,!1)}}Ws(async()=>{await c()});async function f(){b(i,!1),b(a,!0),b(n,null),await c()}hl(()=>{ee.destroy()});async function h(){if(!(!r||s(o))){b(o,!0);try{const k=Ka();await ee.forceReload(r,k)}catch(k){console.error("[App] Erreur lors du rechargement forcé:",k)}finally{b(o,!1)}}}const g=J(()=>s(n)||ee.error),p=J(()=>s(a)||ee.loading);var m=tp(),_=N(m),x=u(_);Hh(x,{});var w=d(x,2);{var P=k=>{yh(k)},C=k=>{var M=ep(),$=N(M),T=u($),D=u(T),L=d(u(D),2),O=u(L);{var X=H=>{var te=Kh();v(H,te)};E(O,H=>{ee.realtimeConnected&&H(X)})}var ce=d(O,2);{var q=H=>{var te=Yh();v(H,te)};E(ce,H=>{ee.syncing&&H(q)})}var I=d(ce,2);{var j=H=>{var te=Jh(),ye=u(te);B(ke=>U(ye,`Maj: ${ke??""}`),[()=>new Date(ee.lastSync).toLocaleTimeString()]),v(H,te)};E(I,H=>{ee.lastSync&&H(j)})}var ae=d(I,2);Vh(ae);var Y=d(ae,2);{var Q=H=>{var te=Zh();let ye;te.__click=h;var ke=u(te);Hc(ke,{class:"h-4 w-4"}),B(Ne=>{ye=Me(te,1,"btn btn-outline btn-sm",null,ye,Ne),te.disabled=s(o)||ee.loading},[()=>({loading:s(o)||ee.loading})]),v(H,te)};E(Y,H=>{s(n)||H(Q)})}var re=d(Y,2);{var be=H=>{var te=Fh(),ye=u(te);ye.__click=[Gh,i];var ke=u(ye);qc(ke,{class:"mr-2 h-4 w-4"}),v(H,te)};E(re,H=>{s(n)&&H(be)})}var z=d($,2),ne=u(z);{var W=H=>{Ph(H,{get message(){return s(g)}})},se=H=>{var te=K(),ye=N(te);{var ke=Ne=>{Sh(Ne,{get message(){return s(g)}})};E(ye,Ne=>{s(g)&&Ne(ke)},!0)}v(H,te)};E(ne,H=>{s(n)?H(W):H(se,!1)})}var _e=d(ne,2);{var G=H=>{_h(H,{})},de=H=>{var te=K(),ye=N(te);{var ke=Ne=>{var oe=Xh();v(Ne,oe)};E(ye,Ne=>{!ee.loading&&!s(n)&&Ne(ke)},!0)}v(H,te)};E(_e,H=>{ee.enrichedProducts.length>0?H(G):H(de,!1)})}v(k,M)};E(w,k=>{s(p)?k(P):k(C,!1)})}var S=d(_,2);{var A=k=>{qh(k,{onClose:()=>b(i,!1),onAuthSuccess:f})};E(S,k=>{s(i)&&k(A)})}v(e,m),F()}Je(["click"]);const Ao=document.getElementById("app_products");if(!Ao)throw new Error("Élément target non trouvé: #app_products");Yi(rp,{target:Ao});
