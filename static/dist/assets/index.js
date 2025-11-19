(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const as=!1;var Gr=Array.isArray,Ro=Array.prototype.indexOf,Zn=Array.from,Ln=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,Oo=Object.getOwnPropertyDescriptors,ss=Object.prototype,qo=Array.prototype,Xn=Object.getPrototypeOf,ba=Object.isExtensible;function Rr(e){return typeof e=="function"}const le=()=>{};function jo(e){for(var t=0;t<e.length;t++)e[t]()}function os(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function is(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ct=2,Fn=4,ea=8,cr=16,Bt=32,ur=64,ta=128,wt=256,on=512,at=1024,ht=2048,Xt=4096,xt=8192,dr=16384,ra=32768,vr=65536,ya=1<<17,Lo=1<<18,Ar=1<<19,Bo=1<<20,Bn=1<<21,un=1<<22,ar=1<<23,sr=Symbol("$state"),ls=Symbol("legacy props"),zo=Symbol(""),Br=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function cs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Uo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ho(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Wo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Vo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Go(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ko(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Yo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Jo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Zo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const dn=1,vn=2,us=4,Xo=8,Fo=16,ei=1,ti=2,ri=4,ni=8,ai=16,si=1,oi=2,et=Symbol(),ii="http://www.w3.org/1999/xhtml",li="http://www.w3.org/2000/svg",ci="@attach";function ui(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function di(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let vi=!1;function ds(e){return e===this.v}function vs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function fi(e,t){return e!==t}function fs(e){return!vs(e,this.v)}let Tr=!1,hi=!1;function pi(){Tr=!0}const mi=[];function mr(e,t=!1,r=!1){return nn(e,new Map,"",mi,null,r)}function nn(e,t,r,n,s=null,o=!1){if(typeof e=="object"&&e!==null){var i=t.get(e);if(i!==void 0)return i;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(Gr(e)){var l=Array(e.length);t.set(e,l),s!==null&&t.set(s,l);for(var c=0;c<e.length;c+=1){var h=e[c];c in e&&(l[c]=nn(h,t,r,n,null,o))}return l}if(Xn(e)===ss){l={},t.set(e,l),s!==null&&t.set(s,l);for(var f in e)l[f]=nn(e[f],t,r,n,null,o);return l}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function"&&!o)return nn(e.toJSON(),t,r,n,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}let Ye=null;function yr(e){Ye=e}function F(e,t=!1,r){Ye={p:Ye,c:null,e:null,s:e,x:null,l:Tr&&!t?{s:null,u:null,$:[]}:null}}function ee(e){var t=Ye,r=t.e;if(r!==null){t.e=null;for(var n of r)ks(n)}return Ye=t.p,{}}function Mr(){return!Tr||Ye!==null&&Ye.l===null}let tr=[];function hs(){var e=tr;tr=[],jo(e)}function ir(e){if(tr.length===0&&!zr){var t=tr;queueMicrotask(()=>{t===tr&&hs()})}tr.push(e)}function gi(){for(;tr.length>0;)hs()}const _i=new WeakMap;function ps(e){var t=Ie;if(t===null)return Re.f|=ar,e;if((t.f&ra)===0){if((t.f&ta)===0)throw!t.parent&&e instanceof Error&&ms(e),e;t.b.error(e)}else wr(e,t)}function wr(e,t){for(;t!==null;){if((t.f&ta)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&ms(e),e}function ms(e){const t=_i.get(e);t&&(Ln(e,"message",{value:t.message}),Ln(e,"stack",{value:t.stack}))}const Xr=new Set;let Le=null,an=null,zn=new Set,kt=[],fn=null,Un=!1,zr=!1;class yt{current=new Map;#e=new Map;#t=new Set;#s=0;#c=null;#d=[];#i=[];#u=[];#l=[];#o=[];#v=[];skipped_effects=new Set;process(t){kt=[],an=null;var r=yt.apply(this);for(const o of t)this.#a(o);if(this.#s===0){this.#h();var n=this.#i,s=this.#u;this.#i=[],this.#u=[],this.#l=[],an=this,Le=null,wa(n),wa(s),an=null,this.#c?.resolve()}else this.#f(this.#i),this.#f(this.#u),this.#f(this.#l);r();for(const o of this.#d)Qr(o);this.#d=[]}#a(t){t.f^=at;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Bt|ur))!==0,o=s&&(n&at)!==0,i=o||(n&xt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){s?r.f^=at:(n&Fn)!==0?this.#u.push(r):(n&at)===0&&((n&un)!==0&&r.b?.is_pending()?this.#d.push(r):_n(r)&&((r.f&cr)!==0&&this.#l.push(r),Qr(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#f(t){for(const r of t)((r.f&ht)!==0?this.#o:this.#v).push(r),it(r,at);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){Le=this}deactivate(){Le=null}flush(){if(kt.length>0){if(this.activate(),gs(),Le!==null&&Le!==this)return}else this.#s===0&&this.#h();this.deactivate();for(const t of zn)if(zn.delete(t),t(),Le!==null)break}#h(){for(const t of this.#t)t();if(this.#t.clear(),Xr.size>1){this.#e.clear();let t=!0;for(const r of Xr){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;_s(n)}if(kt.length>0){Le=r;const n=yt.apply(r);for(const s of kt)r.#a(s);kt=[],n()}}Le=null}Xr.delete(this)}increment(){this.#s+=1}decrement(){this.#s-=1;for(const t of this.#o)it(t,ht),lr(t);for(const t of this.#v)it(t,Xt),lr(t);this.flush()}add_callback(t){this.#t.add(t)}settled(){return(this.#c??=os()).promise}static ensure(){if(Le===null){const t=Le=new yt;Xr.add(Le),zr||yt.enqueue(()=>{Le===t&&t.flush()})}return Le}static enqueue(t){ir(t)}static apply(t){return le}}function bi(e){var t=zr;zr=!0;try{for(var r;;){if(gi(),kt.length===0&&(Le?.flush(),kt.length===0))return fn=null,r;gs()}}finally{zr=t}}function gs(){var e=br;Un=!0;try{var t=0;for($a(!0);kt.length>0;){var r=yt.ensure();if(t++>1e3){var n,s;yi()}r.process(kt),Kt.clear()}}finally{Un=!1,$a(e),fn=null}}function yi(){try{Vo()}catch(e){wr(e,fn)}}let er=null;function wa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(dr|xt))===0&&_n(n)&&(er=[],Qr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Ms(n):n.fn=null),er?.length>0)){Kt.clear();for(const s of er)Qr(s);er=[]}}er=null}}function _s(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&ct)!==0?_s(t):(r&(un|cr))!==0&&(it(t,ht),lr(t))}}function lr(e){for(var t=fn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Un&&t===Ie&&(r&cr)!==0)return;if((r&(ur|Bt))!==0){if((r&at)===0)return;t.f^=at}}kt.push(t)}function na(e){let t=0,r=Jt(0),n;return()=>{Oi()&&(a(r),ca(()=>(t===0&&(n=Dr(()=>e(()=>At(r)))),t+=1,()=>{ir(()=>{t-=1,t===0&&(n?.(),n=void 0,At(r))})})))}}var wi=vr|Ar|ta;function Si(e,t,r){new xi(e,t,r)}class xi{parent;#e=!1;#t;#s=null;#c;#d;#i;#u=null;#l=null;#o=null;#v=null;#a=0;#f=0;#h=!1;#m=null;#g=()=>{this.#m&&Sr(this.#m,this.#a)};#n=na(()=>(this.#m=Jt(this.#a),()=>{this.#m=null}));constructor(t,r,n){this.#t=t,this.#c=r,this.#d=n,this.parent=Ie.b,this.#e=!!this.#c.pending,this.#i=Ht(()=>{Ie.b=this;{try{this.#u=tt(()=>n(this.#t))}catch(s){this.error(s)}this.#f>0?this.#y():this.#e=!1}},wi)}#_(){try{this.#u=tt(()=>this.#d(this.#t))}catch(t){this.error(t)}this.#e=!1}#b(){const t=this.#c.pending;t&&(this.#l=tt(()=>t(this.#t)),yt.enqueue(()=>{this.#u=this.#p(()=>(yt.ensure(),tt(()=>this.#d(this.#t)))),this.#f>0?this.#y():(Ot(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#c.pending}#p(t){var r=Ie,n=Re,s=Ye;Tt(this.#i),lt(this.#i),yr(this.#i.ctx);try{return t()}catch(o){return ps(o),null}finally{Tt(r),lt(n),yr(s)}}#y(){const t=this.#c.pending;this.#u!==null&&(this.#v=document.createDocumentFragment(),Pi(this.#u,this.#v)),this.#l===null&&(this.#l=tt(()=>t(this.#t)))}#w(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#w(t);return}this.#f+=t,this.#f===0&&(this.#e=!1,this.#l&&Ot(this.#l,()=>{this.#l=null}),this.#v&&(this.#t.before(this.#v),this.#v=null),ir(()=>{yt.ensure().flush()}))}update_pending_count(t){this.#w(t),this.#a+=t,zn.add(this.#g)}get_effect_pending(){return this.#n(),a(this.#m)}error(t){var r=this.#c.onerror;let n=this.#c.failed;if(this.#h||!r&&!n)throw t;this.#u&&(rt(this.#u),this.#u=null),this.#l&&(rt(this.#l),this.#l=null),this.#o&&(rt(this.#o),this.#o=null);var s=!1,o=!1;const i=()=>{if(s){di();return}s=!0,o&&Zo(),yt.ensure(),this.#a=0,this.#o!==null&&Ot(this.#o,()=>{this.#o=null}),this.#e=this.has_pending_snippet(),this.#u=this.#p(()=>(this.#h=!1,tt(()=>this.#d(this.#t)))),this.#f>0?this.#y():this.#e=!1};var l=Re;try{lt(null),o=!0,r?.(t,i),o=!1}catch(c){wr(c,this.#i&&this.#i.parent)}finally{lt(l)}n&&ir(()=>{this.#o=this.#p(()=>{this.#h=!0;try{return tt(()=>{n(this.#t,()=>t,()=>i)})}catch(c){return wr(c,this.#i.parent),null}finally{this.#h=!1}})})}}function Pi(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:Kr(r);t.append(r),r=s}}function bs(e,t,r){const n=Mr()?hn:aa;if(t.length===0){r(e.map(n));return}var s=Le,o=Ie,i=$i();Promise.all(t.map(l=>Ei(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(o.f&dr)===0&&wr(c,o)}s?.deactivate(),ys()}).catch(l=>{wr(l,o)})}function $i(){var e=Ie,t=Re,r=Ye,n=Le;return function(){Tt(e),lt(t),yr(r),n?.activate()}}function ys(){Tt(null),lt(null),yr(null)}function hn(e){var t=ct|ht,r=Re!==null&&(Re.f&ct)!==0?Re:null;return Ie===null||r!==null&&(r.f&wt)!==0?t|=wt:Ie.f|=Ar,{ctx:Ye,deps:null,effects:null,equals:ds,f:t,fn:e,reactions:null,rv:0,v:et,wv:0,parent:r??Ie,ac:null}}function Ei(e,t){let r=Ie;r===null&&Uo();var n=r.b,s=void 0,o=Jt(et),i=!Re,l=new Map;return ji(()=>{var c=os();s=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var h=Le,f=n.is_pending();i&&(n.update_pending_count(1),f||(h.increment(),l.get(h)?.reject(Br),l.set(h,c)));const g=(p,m=void 0)=>{f||h.activate(),m?m!==Br&&(o.f|=ar,Sr(o,m)):((o.f&ar)!==0&&(o.f^=ar),Sr(o,p)),i&&(n.update_pending_count(-1),f||h.decrement()),ys()};c.promise.then(g,p=>g(null,p||"unknown"))}),ia(()=>{for(const c of l.values())c.reject(Br)}),new Promise(c=>{function h(f){function g(){f===s?c(o):h(s)}f.then(g,g)}h(s)})}function Z(e){const t=hn(e);return Ns(t),t}function aa(e){const t=hn(e);return t.equals=fs,t}function ws(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)rt(t[r])}}function ki(e){for(var t=e.parent;t!==null;){if((t.f&ct)===0)return t;t=t.parent}return null}function sa(e){var t,r=Ie;Tt(ki(e));try{ws(e),t=qs(e)}finally{Tt(r)}return t}function Ss(e){var t=sa(e);if(e.equals(t)||(e.v=t,e.wv=Rs()),!fr){var r=(Wt||(e.f&wt)!==0)&&e.deps!==null?Xt:at;it(e,r)}}const Kt=new Map;function Jt(e,t){var r={f:0,v:e,reactions:null,equals:ds,rv:0,wv:0};return r}function V(e,t){const r=Jt(e);return Ns(r),r}function Ai(e,t=!1,r=!0){const n=Jt(e);return t||(n.equals=fs),Tr&&r&&Ye!==null&&Ye.l!==null&&(Ye.l.s??=[]).push(n),n}function y(e,t,r=!1){Re!==null&&(!St||(Re.f&ya)!==0)&&Mr()&&(Re.f&(ct|cr|un|ya))!==0&&!qt?.includes(e)&&Jo();let n=r?je(t):t;return Sr(e,n)}function Sr(e,t){if(!e.equals(t)){var r=e.v;fr?Kt.set(e,t):Kt.set(e,r),e.v=t;var n=yt.ensure();n.capture(e,r),(e.f&ct)!==0&&((e.f&ht)!==0&&sa(e),it(e,(e.f&wt)===0?at:Xt)),e.wv=Rs(),xs(e,ht),Mr()&&Ie!==null&&(Ie.f&at)!==0&&(Ie.f&(Bt|ur))===0&&(_t===null?zi([e]):_t.push(e))}return t}function At(e){y(e,e.v+1)}function xs(e,t){var r=e.reactions;if(r!==null)for(var n=Mr(),s=r.length,o=0;o<s;o++){var i=r[o],l=i.f;if(!(!n&&i===Ie)){var c=(l&ht)===0;c&&it(i,t),(l&ct)!==0?xs(i,Xt):c&&((l&cr)!==0&&er!==null&&er.push(i),lr(i))}}}function je(e){if(typeof e!="object"||e===null||sr in e)return e;const t=Xn(e);if(t!==ss&&t!==qo)return e;var r=new Map,n=Gr(e),s=V(0),o=jt,i=l=>{if(jt===o)return l();var c=Re,h=jt;lt(null),ka(o);var f=l();return lt(c),ka(h),f};return n&&r.set("length",V(e.length)),new Proxy(e,{defineProperty(l,c,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&Ko();var f=r.get(c);return f===void 0?f=i(()=>{var g=V(h.value);return r.set(c,g),g}):y(f,h.value,!0),!0},deleteProperty(l,c){var h=r.get(c);if(h===void 0){if(c in l){const f=i(()=>V(et));r.set(c,f),At(s)}}else y(h,et),At(s);return!0},get(l,c,h){if(c===sr)return e;var f=r.get(c),g=c in l;if(f===void 0&&(!g||Gt(l,c)?.writable)&&(f=i(()=>{var m=je(g?l[c]:et),_=V(m);return _}),r.set(c,f)),f!==void 0){var p=a(f);return p===et?void 0:p}return Reflect.get(l,c,h)},getOwnPropertyDescriptor(l,c){var h=Reflect.getOwnPropertyDescriptor(l,c);if(h&&"value"in h){var f=r.get(c);f&&(h.value=a(f))}else if(h===void 0){var g=r.get(c),p=g?.v;if(g!==void 0&&p!==et)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return h},has(l,c){if(c===sr)return!0;var h=r.get(c),f=h!==void 0&&h.v!==et||Reflect.has(l,c);if(h!==void 0||Ie!==null&&(!f||Gt(l,c)?.writable)){h===void 0&&(h=i(()=>{var p=f?je(l[c]):et,m=V(p);return m}),r.set(c,h));var g=a(h);if(g===et)return!1}return f},set(l,c,h,f){var g=r.get(c),p=c in l;if(n&&c==="length")for(var m=h;m<g.v;m+=1){var _=r.get(m+"");_!==void 0?y(_,et):m in l&&(_=i(()=>V(et)),r.set(m+"",_))}if(g===void 0)(!p||Gt(l,c)?.writable)&&(g=i(()=>V(void 0)),y(g,je(h)),r.set(c,g));else{p=g.v!==et;var $=i(()=>je(h));y(g,$)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(f,h),!p){if(n&&typeof c=="string"){var E=r.get("length"),C=Number(c);Number.isInteger(C)&&C>=E.v&&y(E,C+1)}At(s)}return!0},ownKeys(l){a(s);var c=Reflect.ownKeys(l).filter(g=>{var p=r.get(g);return p===void 0||p.v!==et});for(var[h,f]of r)f.v!==et&&!(h in l)&&c.push(h);return c},setPrototypeOf(){Yo()}})}function Sa(e){try{if(e!==null&&typeof e=="object"&&sr in e)return e[sr]}catch{}return e}function Ti(e,t){return Object.is(Sa(e),Sa(t))}var xa,Ps,$s,Es;function Mi(){if(xa===void 0){xa=window,Ps=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;$s=Gt(t,"firstChild").get,Es=Gt(t,"nextSibling").get,ba(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),ba(r)&&(r.__t=void 0)}}function zt(e=""){return document.createTextNode(e)}function xr(e){return $s.call(e)}function Kr(e){return Es.call(e)}function u(e,t){return xr(e)}function N(e,t=!1){{var r=xr(e);return r instanceof Comment&&r.data===""?Kr(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=Kr(n);return n}function Di(e){e.textContent=""}function pn(){return!1}function Ci(e,t){if(t){const r=document.body;e.autofocus=!0,ir(()=>{document.activeElement===r&&e.focus()})}}let Pa=!1;function Ni(){Pa||(Pa=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function mn(e){var t=Re,r=Ie;lt(null),Tt(null);try{return e()}finally{lt(t),Tt(r)}}function oa(e,t,r,n=r){e.addEventListener(t,()=>mn(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),Ni()}function Ii(e){Ie===null&&Re===null&&Wo(),Re!==null&&(Re.f&wt)!==0&&Ie===null&&Qo(),fr&&Ho()}function Ri(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Ut(e,t,r,n=!0){var s=Ie;s!==null&&(s.f&xt)!==0&&(e|=xt);var o={ctx:Ye,deps:null,nodes_start:null,nodes_end:null,f:e|ht,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Qr(o),o.f|=ra}catch(c){throw rt(o),c}else t!==null&&lr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Ar)===0&&(i=i.first),i!==null&&(i.parent=s,s!==null&&Ri(i,s),Re!==null&&(Re.f&ct)!==0&&(e&ur)===0)){var l=Re;(l.effects??=[]).push(i)}}return o}function Oi(){return Re!==null&&!St}function ia(e){const t=Ut(ea,null,!1);return it(t,at),t.teardown=e,t}function Ft(e){Ii();var t=Ie.f,r=!Re&&(t&Bt)!==0&&(t&ra)===0;if(r){var n=Ye;(n.e??=[]).push(e)}else return ks(e)}function ks(e){return Ut(Fn|Bo,e,!1)}function qi(e){yt.ensure();const t=Ut(ur|Ar,e,!0);return(r={})=>new Promise(n=>{r.outro?Ot(t,()=>{rt(t),n(void 0)}):(rt(t),n(void 0))})}function la(e){return Ut(Fn,e,!1)}function ji(e){return Ut(un|Ar,e,!0)}function ca(e,t=0){return Ut(ea|t,e,!0)}function B(e,t=[],r=[]){bs(t,r,n=>{Ut(ea,()=>e(...n.map(a)),!0)})}function Ht(e,t=0){var r=Ut(cr|t,e,!0);return r}function tt(e,t=!0){return Ut(Bt|Ar,e,!0,t)}function As(e){var t=e.teardown;if(t!==null){const r=fr,n=Re;Ea(!0),lt(null);try{t.call(null)}finally{Ea(r),lt(n)}}}function Ts(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&mn(()=>{s.abort(Br)});var n=r.next;(r.f&ur)!==0?r.parent=null:rt(r,t),r=n}}function Li(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Bt)===0&&rt(t),t=r}}function rt(e,t=!0){var r=!1;(t||(e.f&Lo)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Bi(e.nodes_start,e.nodes_end),r=!0),Ts(e,t&&!r),ln(e,0),it(e,dr);var n=e.transitions;if(n!==null)for(const o of n)o.stop();As(e);var s=e.parent;s!==null&&s.first!==null&&Ms(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Bi(e,t){for(;e!==null;){var r=e===t?null:Kr(e);e.remove(),e=r}}function Ms(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Ot(e,t){var r=[];ua(e,r,!0),Ds(r,()=>{rt(e),t&&t()})}function Ds(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function ua(e,t,r){if((e.f&xt)===0){if(e.f^=xt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var s=n.next,o=(n.f&vr)!==0||(n.f&Bt)!==0;ua(n,t,o?r:!1),n=s}}}function gn(e){Cs(e,!0)}function Cs(e,t){if((e.f&xt)!==0){e.f^=xt,(e.f&at)===0&&(it(e,ht),lr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&vr)!==0||(r.f&Bt)!==0;Cs(r,s?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let br=!1;function $a(e){br=e}let fr=!1;function Ea(e){fr=e}let Re=null,St=!1;function lt(e){Re=e}let Ie=null;function Tt(e){Ie=e}let qt=null;function Ns(e){Re!==null&&(qt===null?qt=[e]:qt.push(e))}let ot=null,ft=0,_t=null;function zi(e){_t=e}let Is=1,Hr=0,jt=Hr;function ka(e){jt=e}let Wt=!1;function Rs(){return++Is}function _n(e){var t=e.f;if((t&ht)!==0)return!0;if((t&Xt)!==0){var r=e.deps,n=(t&wt)!==0;if(r!==null){var s,o,i=(t&on)!==0,l=n&&Ie!==null&&!Wt,c=r.length;if((i||l)&&(Ie===null||(Ie.f&dr)===0)){var h=e,f=h.parent;for(s=0;s<c;s++)o=r[s],(i||!o?.reactions?.includes(h))&&(o.reactions??=[]).push(h);i&&(h.f^=on),l&&f!==null&&(f.f&wt)===0&&(h.f^=wt)}for(s=0;s<c;s++)if(o=r[s],_n(o)&&Ss(o),o.wv>e.wv)return!0}(!n||Ie!==null&&!Wt)&&it(e,at)}return!1}function Os(e,t,r=!0){var n=e.reactions;if(n!==null&&!qt?.includes(e))for(var s=0;s<n.length;s++){var o=n[s];(o.f&ct)!==0?Os(o,t,!1):t===o&&(r?it(o,ht):(o.f&at)!==0&&it(o,Xt),lr(o))}}function qs(e){var t=ot,r=ft,n=_t,s=Re,o=Wt,i=qt,l=Ye,c=St,h=jt,f=e.f;ot=null,ft=0,_t=null,Wt=(f&wt)!==0&&(St||!br||Re===null),Re=(f&(Bt|ur))===0?e:null,qt=null,yr(e.ctx),St=!1,jt=++Hr,e.ac!==null&&(mn(()=>{e.ac.abort(Br)}),e.ac=null);try{e.f|=Bn;var g=e.fn,p=g(),m=e.deps;if(ot!==null){var _;if(ln(e,ft),m!==null&&ft>0)for(m.length=ft+ot.length,_=0;_<ot.length;_++)m[ft+_]=ot[_];else e.deps=m=ot;if(!Wt||(f&ct)!==0&&e.reactions!==null)for(_=ft;_<m.length;_++)(m[_].reactions??=[]).push(e)}else m!==null&&ft<m.length&&(ln(e,ft),m.length=ft);if(Mr()&&_t!==null&&!St&&m!==null&&(e.f&(ct|Xt|ht))===0)for(_=0;_<_t.length;_++)Os(_t[_],e);return s!==null&&s!==e&&(Hr++,_t!==null&&(n===null?n=_t:n.push(..._t))),(e.f&ar)!==0&&(e.f^=ar),p}catch($){return ps($)}finally{e.f^=Bn,ot=t,ft=r,_t=n,Re=s,Wt=o,qt=i,yr(l),St=c,jt=h}}function Ui(e,t){let r=t.reactions;if(r!==null){var n=Ro.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&ct)!==0&&(ot===null||!ot.includes(t))&&(it(t,Xt),(t.f&(wt|on))===0&&(t.f^=on),ws(t),ln(t,0))}function ln(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ui(e,r[n])}function Qr(e){var t=e.f;if((t&dr)===0){it(e,at);var r=Ie,n=br;Ie=e,br=!0;try{(t&cr)!==0?Li(e):Ts(e),As(e);var s=qs(e);e.teardown=typeof s=="function"?s:null,e.wv=Is;var o;as&&hi&&(e.f&ht)!==0&&e.deps}finally{br=n,Ie=r}}}async function Hi(){await Promise.resolve(),bi()}function a(e){var t=e.f,r=(t&ct)!==0;if(Re!==null&&!St){var n=Ie!==null&&(Ie.f&dr)!==0;if(!n&&!qt?.includes(e)){var s=Re.deps;if((Re.f&Bn)!==0)e.rv<Hr&&(e.rv=Hr,ot===null&&s!==null&&s[ft]===e?ft++:ot===null?ot=[e]:(!Wt||!ot.includes(e))&&ot.push(e));else{(Re.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[Re]:o.includes(Re)||o.push(Re)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&wt)===0&&(i.f^=wt)}if(fr){if(Kt.has(e))return Kt.get(e);if(r){i=e;var c=i.v;return((i.f&at)===0&&i.reactions!==null||js(i))&&(c=sa(i)),Kt.set(i,c),c}}else r&&(i=e,_n(i)&&Ss(i));if((e.f&ar)!==0)throw e.v;return e.v}function js(e){if(e.v===et)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Kt.has(t)||(t.f&ct)!==0&&js(t))return!0;return!1}function Dr(e){var t=St;try{return St=!0,e()}finally{St=t}}const Qi=-7169;function it(e,t){e.f=e.f&Qi|t}function Wi(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Vi=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Gi(e){return Vi.includes(e)}const Ki={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Yi(e){return e=e.toLowerCase(),Ki[e]??e}const Ji=["touchstart","touchmove"];function Zi(e){return Ji.includes(e)}const Ls=new Set,Hn=new Set;function da(e,t,r,n={}){function s(o){if(n.capture||jr.call(t,o),!o.cancelBubble)return mn(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ir(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Qn(e,t,r,n={}){var s=da(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function Mn(e,t,r,n,s){var o={capture:n,passive:s},i=da(e,t,r,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&ia(()=>{t.removeEventListener(e,i,o)})}function Je(e){for(var t=0;t<e.length;t++)Ls.add(e[t]);for(var r of Hn)r(e)}let Aa=null;function jr(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],o=s[0]||e.target;Aa=e;var i=0,l=Aa===e&&e.__root;if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var h=s.indexOf(t);if(h===-1)return;c<=h&&(i=c)}if(o=s[i]||e.target,o!==t){Ln(e,"currentTarget",{configurable:!0,get(){return o||r}});var f=Re,g=Ie;lt(null),Tt(null);try{for(var p,m=[];o!==null;){var _=o.assignedSlot||o.parentNode||o.host||null;try{var $=o["__"+n];if($!=null&&(!o.disabled||e.target===o))if(Gr($)){var[b,...E]=$;b.apply(o,[e,...E])}else $.call(o,e)}catch(C){p?m.push(C):p=C}if(e.cancelBubble||_===t||_===null)break;o=_}if(p){for(let C of m)queueMicrotask(()=>{throw C});throw p}}finally{e.__root=t,delete e.currentTarget,lt(f),Tt(g)}}}function Bs(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Pr(e,t){var r=Ie;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function w(e,t){var r=(t&si)!==0,n=(t&oi)!==0,s,o=!e.startsWith("<!>");return()=>{s===void 0&&(s=Bs(o?e:"<!>"+e),r||(s=xr(s)));var i=n||Ps?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=xr(i),c=i.lastChild;Pr(l,c)}else Pr(i,i);return i}}function Xi(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Bs(s),l=xr(i);o=xr(l)}var c=o.cloneNode(!0);return Pr(c,c),c}}function Fi(e,t){return Xi(e,t,"svg")}function pt(e=""){{var t=zt(e+"");return Pr(t,t),t}}function K(){var e=document.createDocumentFragment(),t=document.createComment(""),r=zt();return e.append(t,r),Pr(t,r),e}function v(e,t){e!==null&&e.before(t)}function U(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function el(e,t){return tl(e,t)}const gr=new Map;function tl(e,{target:t,anchor:r,props:n={},events:s,context:o,intro:i=!0}){Mi();var l=new Set,c=g=>{for(var p=0;p<g.length;p++){var m=g[p];if(!l.has(m)){l.add(m);var _=Zi(m);t.addEventListener(m,jr,{passive:_});var $=gr.get(m);$===void 0?(document.addEventListener(m,jr,{passive:_}),gr.set(m,1)):gr.set(m,$+1)}}};c(Zn(Ls)),Hn.add(c);var h=void 0,f=qi(()=>{var g=r??t.appendChild(zt());return Si(g,{pending:()=>{}},p=>{if(o){F({});var m=Ye;m.c=o}s&&(n.$$events=s),h=e(p,n)||{},o&&ee()}),()=>{for(var p of l){t.removeEventListener(p,jr);var m=gr.get(p);--m===0?(document.removeEventListener(p,jr),gr.delete(p)):gr.set(p,m)}Hn.delete(c),g!==r&&g.parentNode?.removeChild(g)}});return rl.set(h,f),h}let rl=new WeakMap;function k(e,t,r=!1){var n=e,s=null,o=null,i=et,l=r?vr:0,c=!1;const h=(m,_=!0)=>{c=!0,p(_,m)};var f=null;function g(){f!==null&&(f.lastChild.remove(),n.before(f),f=null);var m=i?s:o,_=i?o:s;m&&gn(m),_&&Ot(_,()=>{i?o=null:s=null})}const p=(m,_)=>{if(i!==(i=m)){var $=pn(),b=n;if($&&(f=document.createDocumentFragment(),f.append(b=zt())),i?s??=_&&tt(()=>_(b)):o??=_&&tt(()=>_(b)),$){var E=Le,C=i?s:o,x=i?o:s;C&&E.skipped_effects.delete(C),x&&E.skipped_effects.add(x),E.add_callback(g)}else g()}};Ht(()=>{c=!1,t(h),c||p(null,null)},l)}function nl(e,t,r){var n=e,s=et,o,i,l=null,c=Mr()?fi:vs;function h(){o&&Ot(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}Ht(()=>{if(c(s,s=t())){var f=n,g=pn();g&&(l=document.createDocumentFragment(),l.append(f=zt())),i=tt(()=>r(f)),g?Le.add_callback(h):h()}})}function Wr(e,t){return t}function al(e,t,r){for(var n=e.items,s=[],o=t.length,i=0;i<o;i++)ua(t[i].e,s,!0);var l=o>0&&s.length===0&&r!==null;if(l){var c=r.parentNode;Di(c),c.append(r),n.clear(),Et(e,t[0].prev,t[o-1].next)}Ds(s,()=>{for(var h=0;h<o;h++){var f=t[h];l||(n.delete(f.k),Et(e,f.prev,f.next)),rt(f.e,!l)}})}function st(e,t,r,n,s,o=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&us)!==0;if(c){var h=e;i=h.appendChild(zt())}var f=null,g=!1,p=new Map,m=aa(()=>{var E=r();return Gr(E)?E:E==null?[]:Zn(E)}),_,$;function b(){sl($,_,l,p,i,s,t,n,r),o!==null&&(_.length===0?f?gn(f):f=tt(()=>o(i)):f!==null&&Ot(f,()=>{f=null}))}Ht(()=>{$??=Ie,_=a(m);var E=_.length;if(!(g&&E===0)){g=E===0;var C,x,A,S;if(pn()){var T=new Set,P=Le;for(x=0;x<E;x+=1){A=_[x],S=n(A,x);var M=l.items.get(S)??p.get(S);M?(t&(dn|vn))!==0&&zs(M,A,x,t):(C=Us(null,l,null,null,A,S,x,s,t,r,!0),p.set(S,C)),T.add(S)}for(const[D,L]of l.items)T.has(D)||P.skipped_effects.add(L.e);P.add_callback(b)}else b();a(m)}})}function sl(e,t,r,n,s,o,i,l,c){var h=(i&Xo)!==0,f=(i&(dn|vn))!==0,g=t.length,p=r.items,m=r.first,_=m,$,b=null,E,C=[],x=[],A,S,T,P;if(h)for(P=0;P<g;P+=1)A=t[P],S=l(A,P),T=p.get(S),T!==void 0&&(T.a?.measure(),(E??=new Set).add(T));for(P=0;P<g;P+=1){if(A=t[P],S=l(A,P),T=p.get(S),T===void 0){var M=n.get(S);if(M!==void 0){n.delete(S),p.set(S,M);var D=b?b.next:_;Et(r,b,M),Et(r,M,D),Dn(M,D,s),b=M}else{var L=_?_.e.nodes_start:s;b=Us(L,r,b,b===null?r.first:b.next,A,S,P,o,i,c)}p.set(S,b),C=[],x=[],_=b.next;continue}if(f&&zs(T,A,P,i),(T.e.f&xt)!==0&&(gn(T.e),h&&(T.a?.unfix(),(E??=new Set).delete(T))),T!==_){if($!==void 0&&$.has(T)){if(C.length<x.length){var O=x[0],X;b=O.prev;var de=C[0],q=C[C.length-1];for(X=0;X<C.length;X+=1)Dn(C[X],O,s);for(X=0;X<x.length;X+=1)$.delete(x[X]);Et(r,de.prev,q.next),Et(r,b,de),Et(r,q,O),_=O,b=q,P-=1,C=[],x=[]}else $.delete(T),Dn(T,_,s),Et(r,T.prev,T.next),Et(r,T,b===null?r.first:b.next),Et(r,b,T),b=T;continue}for(C=[],x=[];_!==null&&_.k!==S;)(_.e.f&xt)===0&&($??=new Set).add(_),x.push(_),_=_.next;if(_===null)continue;T=_}C.push(T),b=T,_=T.next}if(_!==null||$!==void 0){for(var I=$===void 0?[]:Zn($);_!==null;)(_.e.f&xt)===0&&I.push(_),_=_.next;var j=I.length;if(j>0){var ae=(i&us)!==0&&g===0?s:null;if(h){for(P=0;P<j;P+=1)I[P].a?.measure();for(P=0;P<j;P+=1)I[P].a?.fix()}al(r,I,ae)}}h&&ir(()=>{if(E!==void 0)for(T of E)T.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var z of n.values())rt(z.e);n.clear()}function zs(e,t,r,n){(n&dn)!==0&&Sr(e.v,t),(n&vn)!==0?Sr(e.i,r):e.i=r}function Us(e,t,r,n,s,o,i,l,c,h,f){var g=(c&dn)!==0,p=(c&Fo)===0,m=g?p?Ai(s,!1,!1):Jt(s):s,_=(c&vn)===0?i:Jt(i),$={i:_,v:m,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=zt())}return $.e=tt(()=>l(e,m,_,h),vi),$.e.prev=r&&r.e,$.e.next=n&&n.e,r===null?f||(t.first=$):(r.next=$,r.e.next=$.e),n!==null&&(n.prev=$,n.e.prev=$.e),$}finally{}}function Dn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=Kr(o);s.before(o),o=i}}function Et(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ue(e,t,...r){var n=e,s=le,o;Ht(()=>{s!==(s=t())&&(o&&(rt(o),o=null),o=tt(()=>s(n,...r)))},vr)}function or(e,t,r){var n=e,s,o,i=null,l=null;function c(){o&&(Ot(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}Ht(()=>{if(s!==(s=t())){var h=pn();if(s){var f=n;h&&(i=document.createDocumentFragment(),i.append(f=zt()),o&&Le.skipped_effects.add(o)),l=tt(()=>r(f,s))}h?Le.add_callback(c):c()}},vr)}function ol(e,t,r,n,s,o){var i,l,c=null,h=e,f;Ht(()=>{const g=t()||null;var p=li;g!==i&&(f&&(g===null?Ot(f,()=>{f=null,l=null}):g===l?gn(f):rt(f)),g&&g!==l&&(f=tt(()=>{if(c=document.createElementNS(p,g),Pr(c,c),n){var m=c.appendChild(zt());n(c,m)}Ie.nodes_end=c,h.before(c)})),i=g,i&&(l=i))},vr)}function il(e,t){var r=void 0,n;Ht(()=>{r!==(r=t())&&(n&&(rt(n),n=null),r&&(n=tt(()=>{la(()=>r(e))})))})}function Hs(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Hs(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function ll(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Hs(e))&&(n&&(n+=" "),n+=t);return n}function cl(e){return typeof e=="object"?ll(e):e??""}const Ta=[...` 	
\r\f \v\uFEFF`];function ul(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var o=s.length,i=0;(i=n.indexOf(s,i))>=0;){var l=i+o;(i===0||Ta.includes(n[i-1]))&&(l===n.length||Ta.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Ma(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var o=e[s];o!=null&&o!==""&&(n+=" "+s+": "+o+r)}return n}function Cn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function dl(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Cn)),s&&c.push(...Object.keys(s).map(Cn));var h=0,f=-1;const $=e.length;for(var g=0;g<$;g++){var p=e[g];if(l?p==="/"&&e[g-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[g+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&f===-1)f=g;else if(p===";"||g===$-1){if(f!==-1){var m=Cn(e.substring(h,f).trim());if(!c.includes(m)){p!==";"&&g++;var _=e.substring(h,g).trim();r+=" "+_+";"}}h=g+1,f=-1}}}}return n&&(r+=Ma(n)),s&&(r+=Ma(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Te(e,t,r,n,s,o){var i=e.__className;if(i!==r||i===void 0){var l=ul(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&s!==o)for(var c in o){var h=!!o[c];(s==null||h!==!!s[c])&&e.classList.toggle(c,h)}return o}function Nn(e,t={},r,n){for(var s in r){var o=r[s];t[s]!==o&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,o,n))}}function Qs(e,t,r,n){var s=e.__style;if(s!==t){var o=dl(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(Nn(e,r?.[0],n[0]),Nn(e,r?.[1],n[1],"important")):Nn(e,r,n));return n}function cn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Gr(t))return ui();for(var n of e.options)n.selected=t.includes(Ur(n));return}for(n of e.options){var s=Ur(n);if(Ti(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Ws(e){var t=new MutationObserver(()=>{cn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ia(()=>{t.disconnect()})}function rr(e,t,r=t){var n=!0;oa(e,"change",s=>{var o=s?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),Ur);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&Ur(l)}r(i)}),la(()=>{var s=t();if(cn(e,s,n),n&&s===void 0){var o=e.querySelector(":checked");o!==null&&(s=Ur(o),r(s))}e.__value=s,n=!1}),Ws(e)}function Ur(e){return"__value"in e?e.__value:e.value}const Or=Symbol("class"),qr=Symbol("style"),Vs=Symbol("is custom element"),Gs=Symbol("is html");function vl(e,t){var r=bn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function In(e,t){var r=bn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function fl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Zt(e,t,r,n){var s=bn(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[zo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ks(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function hl(e,t,r,n,s=!1,o=!1){var i=bn(e),l=i[Vs],c=!i[Gs],h=t||{},f=e.tagName==="OPTION";for(var g in t)g in r||(r[g]=null);r.class?r.class=cl(r.class):r[Or]&&(r.class=null),r[qr]&&(r.style??=null);var p=Ks(e);for(const A in r){let S=r[A];if(f&&A==="value"&&S==null){e.value=e.__value="",h[A]=S;continue}if(A==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Te(e,m,S,n,t?.[Or],r[Or]),h[A]=S,h[Or]=r[Or];continue}if(A==="style"){Qs(e,S,t?.[qr],r[qr]),h[A]=S,h[qr]=r[qr];continue}var _=h[A];if(!(S===_&&!(S===void 0&&e.hasAttribute(A)))){h[A]=S;var $=A[0]+A[1];if($!=="$$")if($==="on"){const T={},P="$$"+A;let M=A.slice(2);var b=Gi(M);if(Wi(M)&&(M=M.slice(0,-7),T.capture=!0),!b&&_){if(S!=null)continue;e.removeEventListener(M,h[P],T),h[P]=null}if(S!=null)if(b)e[`__${M}`]=S,Je([M]);else{let D=function(L){h[A].call(this,L)};var x=D;h[P]=da(M,e,D,T)}else b&&(e[`__${M}`]=void 0)}else if(A==="style")Zt(e,A,S);else if(A==="autofocus")Ci(e,!!S);else if(!l&&(A==="__value"||A==="value"&&S!=null))e.value=e.__value=S;else if(A==="selected"&&f)fl(e,S);else{var E=A;c||(E=Yi(E));var C=E==="defaultValue"||E==="defaultChecked";if(S==null&&!l&&!C)if(i[A]=null,E==="value"||E==="checked"){let T=e;const P=t===void 0;if(E==="value"){let M=T.defaultValue;T.removeAttribute(E),T.defaultValue=M,T.value=T.__value=P?M:null}else{let M=T.defaultChecked;T.removeAttribute(E),T.defaultChecked=M,T.checked=P?M:!1}}else e.removeAttribute(A);else C||p.includes(E)&&(l||typeof S!="string")?(e[E]=S,E in i&&(i[E]=et)):typeof S!="function"&&Zt(e,E,S)}}}return h}function Da(e,t,r=[],n=[],s,o=!1,i=!1){bs(r,n,l=>{var c=void 0,h={},f=e.nodeName==="SELECT",g=!1;if(Ht(()=>{var m=t(...l.map(a)),_=hl(e,c,m,s,o,i);g&&f&&"value"in m&&cn(e,m.value);for(let b of Object.getOwnPropertySymbols(h))m[b]||rt(h[b]);for(let b of Object.getOwnPropertySymbols(m)){var $=m[b];b.description===ci&&(!c||$!==c[b])&&(h[b]&&rt(h[b]),h[b]=tt(()=>il(e,()=>$))),_[b]=$}c=_}),f){var p=e;la(()=>{cn(p,c.value,!0),Ws(p)})}g=!0})}function bn(e){return e.__attributes??={[Vs]:e.nodeName.includes("-"),[Gs]:e.namespaceURI===ii}}var Ca=new Map;function Ks(e){var t=e.getAttribute("is")||e.nodeName,r=Ca.get(t);if(r)return r;Ca.set(t,r=[]);for(var n,s=e,o=Element.prototype;o!==s;){n=Oo(s);for(var i in n)n[i].set&&r.push(i);s=Xn(s)}return r}function qe(e,t,r=t){var n=new WeakSet;oa(e,"input",async s=>{var o=s?e.defaultValue:e.value;if(o=Rn(e)?On(o):o,r(o),Le!==null&&n.add(Le),await Hi(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),Dr(t)==null&&e.value&&(r(Rn(e)?On(e.value):e.value),Le!==null&&n.add(Le)),ca(()=>{var s=t();if(e===document.activeElement){var o=an??Le;if(n.has(o))return}Rn(e)&&s===On(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function pl(e,t,r=t){oa(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),Dr(t)==null&&r(e.checked),ca(()=>{var n=t();e.checked=!!n})}function Rn(e){var t=e.type;return t==="number"||t==="range"}function On(e){return e===""?null:+e}let Fr=!1;function ml(e){var t=Fr;try{return Fr=!1,[e(),Fr]}finally{Fr=t}}const gl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function pe(e,t,r){return new Proxy({props:e,exclude:t},gl)}const _l={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Rr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];Rr(s)&&(s=s());const o=Gt(s,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Rr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=Gt(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===sr||t===ls)return!1;for(let r of e.props)if(Rr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Rr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function me(...e){return new Proxy({props:e},_l)}function ke(e,t,r,n){var s=!Tr||(r&ti)!==0,o=(r&ni)!==0,i=(r&ai)!==0,l=n,c=!0,h=()=>(c&&(c=!1,l=i?Dr(n):n),l),f;if(o){var g=sr in e||ls in e;f=Gt(e,t)?.set??(g&&t in e?x=>e[t]=x:void 0)}var p,m=!1;o?[p,m]=ml(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=h(),f&&(s&&Go(),f(p)));var _;if(s?_=()=>{var x=e[t];return x===void 0?h():(c=!0,x)}:_=()=>{var x=e[t];return x!==void 0&&(l=void 0),x===void 0?l:x},s&&(r&ri)===0)return _;if(f){var $=e.$$legacy;return(function(x,A){return arguments.length>0?((!s||!A||$||m)&&f(A?_():x),x):_()})}var b=!1,E=((r&ei)!==0?hn:aa)(()=>(b=!1,_()));o&&a(E);var C=Ie;return(function(x,A){if(arguments.length>0){const S=A?a(E):s&&o?je(x):x;return y(E,S),b=!0,l!==void 0&&(l=S),x}return fr&&b||(C.f&dr)!==0?E.v:a(E)})}function Ys(e){Ye===null&&cs(),Tr&&Ye.l!==null?yl(Ye).m.push(e):Ft(()=>{const t=Dr(e);if(typeof t=="function")return t})}function bl(e){Ye===null&&cs(),Ys(()=>()=>Dr(e))}function yl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const wl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(wl);const Sl="modulepreload",xl=function(e){return"/"+e},Na={},Pl=function(t,r,n){let s=Promise.resolve();if(r&&r.length>0){let h=function(f){return Promise.all(f.map(g=>Promise.resolve(g).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=h;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");s=h(r.map(f=>{if(f=xl(f),f in Na)return;Na[f]=!0;const g=f.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${p}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":Sl,g||(m.as="script"),m.crossOrigin="",m.href=f,c&&m.setAttribute("nonce",c),document.head.appendChild(m),g)return new Promise((_,$)=>{m.addEventListener("load",_),m.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};class $l extends Map{#e=new Map;#t=V(0);#s=V(0);#c=jt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#s.v=super.size}}#d(t){return jt===this.#c?V(t):Jt(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#d(0),r.set(t,n);else return a(this.#t),!1}return a(n),!0}forEach(t,r){this.#i(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#d(0),r.set(t,n);else{a(this.#t);return}}return a(n),super.get(t)}set(t,r){var n=this.#e,s=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#t;if(s===void 0)s=this.#d(0),n.set(t,s),y(this.#s,super.size),At(l);else if(o!==r){At(s);var c=l.reactions===null?null:new Set(l.reactions),h=c===null||!s.reactions?.every(f=>c.has(f));h&&At(l)}return i}delete(t){var r=this.#e,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),y(this.#s,super.size),y(n,-1),At(this.#t)),s}clear(){if(super.size!==0){super.clear();var t=this.#e;y(this.#s,0);for(var r of t.values())y(r,-1);At(this.#t),t.clear()}}#i(){a(this.#t);var t=this.#e;if(this.#s.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#d(0);t.set(r,n)}}for([,n]of this.#e)a(n)}keys(){return a(this.#t),super.keys()}values(){return this.#i(),super.values()}entries(){return this.#i(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return a(this.#s),super.size}}class El{#e;#t;constructor(t,r){this.#e=t,this.#t=na(r)}get current(){return this.#t(),this.#e()}}const kl=/\(.+\)/,Al=new Set(["all","print","screen","and","or","not","only"]);class Tl extends El{constructor(t,r){let n=kl.test(t)||t.split(/[\s,]+/).some(o=>Al.has(o.trim()))?t:`(${t})`;const s=window.matchMedia(n);super(()=>s.matches,o=>Qn(s,"change",o))}}const Ml=typeof window<"u"?window:void 0;function Dl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Cl{#e;#t;constructor(t={}){const{window:r=Ml,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#t=na(s=>{const o=Qn(r,"focusin",s),i=Qn(r,"focusout",s);return()=>{o(),i()}}))}get current(){return this.#t?.(),this.#e?Dl(this.#e):null}}new Cl;function Nl(e){return typeof e=="function"}function Il(e,t){if(Nl(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Rl(e,t){let r=V(null);const n=Z(()=>Il(t,250));function s(...o){if(a(r))a(r).timeout&&clearTimeout(a(r).timeout);else{let i,l;const c=new Promise((h,f)=>{i=h,l=f});y(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return a(r).runner=async()=>{if(!a(r))return;const i=a(r);y(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},a(r).timeout=setTimeout(a(r).runner,a(n)),a(r).promise}return s.cancel=async()=>{(!a(r)||a(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!a(r)||a(r).timeout===null)||(clearTimeout(a(r).timeout),a(r).reject("Cancelled"),y(r,null))},s.runScheduledNow=async()=>{(!a(r)||!a(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!a(r)||!a(r).timeout)||(clearTimeout(a(r).timeout),a(r).timeout=null,await a(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!a(r)?.timeout}}),s}function Vt(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function yn(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function wn(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Sn(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>nr(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const s=[],o=[];r.forEach((l,c)=>{const h=n.get(c)||0,f=l-h;f>0&&(s.push({q:f,u:c}),o.push(nr(f.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:s,display:i}}function mt(e){return e?.length?e.map(t=>nr(t.q.toString(),t.u)).join(" et "):"-"}function nr(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,s=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${s}`}if(!["gr.","ml","kg","l."].includes(t)){let s=(Math.round(r*10)/10).toString();return s.endsWith(",0")&&(s=s.slice(0,-2)),`${s} ${t}`}return`${r} ${t}`}function va(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const s=t.get(n)||0;t.set(n,s+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Ol(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function ql(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(s=>{t.push({...s,date:r,dateTimeService:r})})}),t}function fa(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return va(t)}function Js(e,t){const r=new Map,n=new Map;e.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),t.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const s=[],o=new Set([...r.keys(),...n.keys()]);for(const i of o){const l=r.get(i)||0,c=n.get(i)||0,h=l-c;Math.abs(h)>.001&&s.push({q:h,u:i})}return s}function ha(e){if(!e?.length)return"Équilibré";const t=e.filter(n=>n.q>0),r=e.filter(n=>n.q<0);if(t.length>0&&r.length>0){const n=t.map(o=>nr(o.q.toString(),o.u)).join(" et "),s=r.map(o=>nr(Math.abs(o.q).toString(),o.u)).join(" et ");return`${n} disponibles, ${s} manquant${r.length>1?"s":""}`}else return t.length>0?t.map(n=>"+"+nr(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>nr(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function jl(e,t){if(t.searchQuery.trim()){const r=t.searchQuery.toLowerCase();if(!e.productName.toLowerCase().includes(r))return!1}return!(t.selectedStores.length>0&&(!e.storeInfo?.storeName||!t.selectedStores.includes(e.storeInfo.storeName))||t.selectedWho.length>0&&(!e.who||!e.who.some(r=>t.selectedWho.includes(r)))||t.selectedProductTypes.length>0&&(!e.productType||!t.selectedProductTypes.includes(e.productType))||t.selectedTemperatures.length>0&&!(t.selectedTemperatures.includes("frais")&&e.pFrais||t.selectedTemperatures.includes("surgele")&&e.pSurgel))}function xn(e){return[...e].sort()}function Ll(e){return new Date(e)<new Date}function Bl(e){if(e.length===0)return!0;const t=new Date(Pn(e));return t.setHours(23,59,59,999),t<new Date}function Zs(e){return e.length===0?null:xn(e)[0]}function Pn(e){return e.length===0?null:xn(e).pop()??null}function zl(e){if(e.length===0)return null;const t=new Date;return t.setHours(0,0,0,0),xn(e).find(r=>new Date(r)>=t)||null}function Ul(e){if(e.length===0)return null;const t=xn(e),r=Bl(e),n=Ll(t[0]),s=new Date;let o;return r?o=t[0]:n?o=s.toISOString().slice(0,19)+"Z":o=t[0],{start:o,end:t[t.length-1]}}function Xs(e){const t=zl(e),r=Pn(e);return!t||!r?null:{start:t,end:r}}function Hl(e){const t=Zs(e),r=Pn(e);return!t||!r?null:{start:t,end:r}}function Fs(e,t){const r=Hl(t);return r?e.start===r.start&&e.end===r.end:!1}function Ql(e,t){const r=Xs(t);return r?e.start===r.start&&e.end===r.end:!1}function Wl(e){return new Date(e).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function Ia(e){return e?new Date(e).toLocaleDateString("fr-Fr",{weekday:"short",day:"numeric",month:"short"}):""}function qn(e){const r=new Date(e).getHours();return r===12?"sun":r===20?"moon":r===8?"cloud":null}function Vl(e,t){if(!e.byDate?.[t])return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const r=e.byDate[t],n=[t],s=new Map;r.recipes?.length&&s.set(t,r.recipes);const o=r.totalConsolidated||[],i=o.length>0?mt(o):"-",l=Gl(e,t,o),c=l.filter(f=>f.q>0),h=l.filter(f=>f.q<0);return{requiredQuantities:o,requiredQuantitiesFormatted:i,stockBalance:l,availableStockQuantities:c,missingStockQuantities:h,availableStockFormatted:ha(l),missingStockFormatted:mt(h.map(f=>({q:Math.abs(f.q),u:f.u}))),hasAvailableStock:c.length>0,hasMissingStock:h.length>0,totalRecipesInRange:r.recipes?.length||0,totalPortionsInRange:r.totalAssiettes||0,datesInSelectedRange:n,recipesByDate:s}}function Gl(e,t,r){let n=[],s="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(n=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],s=e.stockParsed.dateTime);const o=[];if(e.purchases)for(const c of e.purchases)Kl(c,t,s)&&o.push({q:c.quantity,u:c.unit});const i=[...n,...o],l=va(i);return Js(l,r)}function Kl(e,t,r=""){if(e.status==="cancelled")return!1;const n=e.deliveryDate||e.$createdAt;return!n||n>t||r&&e.$createdAt<r?!1:n<=t}function Yl(e,t){const r=e.totalNeededArray||[],n=r.length>0?mt(r):"-",s=eo(e,t[0],t[t.length-1],r),o=s.filter(h=>h.q>0),i=s.filter(h=>h.q<0),l=[...t].sort(),c=new Map;if(e.byDate)for(const[h,f]of Object.entries(e.byDate))f.recipes?.length&&c.set(h,f.recipes);return{requiredQuantities:r,requiredQuantitiesFormatted:n,stockBalance:s,availableStockQuantities:o,missingStockQuantities:i,availableStockFormatted:ha(s),missingStockFormatted:mt(i.map(h=>({q:Math.abs(h.q),u:h.u}))),hasAvailableStock:o.length>0,hasMissingStock:i.length>0,totalRecipesInRange:e.nbRecipes||0,totalPortionsInRange:e.totalAssiettes||0,datesInSelectedRange:l,recipesByDate:c}}function Jl(e,t,r){if(!e.byDate)return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const n=new Date(t),s=new Date(r),o=[],i=new Map,l=new Map;let c=0,h=0;for(const[$,b]of Object.entries(e.byDate)){const E=new Date($);E>=n&&E<=s&&(o.push($),c+=b.totalAssiettes||0,b.recipes?.length&&(i.set($,b.recipes),h+=b.recipes.length),b.totalConsolidated&&b.totalConsolidated.forEach(({q:C,u:x})=>{l.set(x,(l.get(x)||0)+C)}))}const f=Array.from(l.entries()).map(([$,b])=>({q:b,u:$})),g=f.length>0?mt(f):"-",p=eo(e,t,r,f),m=p.filter($=>$.q>0),_=p.filter($=>$.q<0);return{requiredQuantities:f,requiredQuantitiesFormatted:g,stockBalance:p,availableStockQuantities:m,missingStockQuantities:_,availableStockFormatted:ha(p),missingStockFormatted:mt(_.map($=>({q:Math.abs($.q),u:$.u}))),hasAvailableStock:m.length>0,hasMissingStock:_.length>0,totalRecipesInRange:h,totalPortionsInRange:c,datesInSelectedRange:o,recipesByDate:i}}function eo(e,t,r,n){let s=[],o="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(s=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],o=e.stockParsed.dateTime);const i=[];if(e.purchases)for(const h of e.purchases)Zl(h,t,r,o)&&i.push({q:h.quantity,u:h.unit});const l=[...s,...i],c=va(l);return Js(c,n)}function Zl(e,t,r,n=""){if(e.status==="cancelled")return!1;const s=e.deliveryDate||e.$createdAt;return!s||s>r||n&&e.$createdAt<n?!1:s>=t&&s<=r}function Ra(e){return{...e,products:e.products?.map(t=>typeof t=="string"?t:t.$id)||[],mainId:e.mainId}}function Xl(e){const t=wn(yn(e.purchases??[])),r=[],{numeric:n,display:s}=Sn(r,t),o=Vt(e.stockReel)??null,i=mt(t),l=e.store?Vt(e.store):null,c=o?`${o.quantity} ${o.unit}`:i;return{$id:e.$id,$createdAt:e.$createdAt,$updatedAt:e.$updatedAt,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:e.isSynced,mainId:e.mainId,totalNeededRaw:[],status:e.status,who:e.who,store:e.store,stockReel:e.stockReel,previousNames:e.previousNames,isMerged:e.isMerged,mergedFrom:e.mergedFrom,mergeDate:e.mergeDate,mergeReason:e.mergeReason,mergedInto:e.mergedInto,totalNeededOverride:e.totalNeededOverride,purchases:e.purchases,byDate:{},storeInfo:l,stockParsed:o,totalNeededArray:r,totalPurchasesArray:t,missingQuantityArray:n,stockOrTotalPurchases:c,displayTotalNeeded:"-",displayTotalPurchases:i,displayMissingQuantity:s,totalNeededOverrideParsed:Vt(e.totalNeededOverride),displayTotalOverride:(()=>{const h=Vt(e.totalNeededOverride);return h?mt([h.totalOverride]):""})()}}function en(e,t){const r=e.purchases??t.purchases,n=wn(yn(r??[])),s=mt(n),{numeric:o,display:i}=Sn(t.totalNeededArray,n),l=e.stockReel??t.stockReel,c=l?Vt(l):t.stockParsed,h=e.store??t.store,f=h?Vt(h):t.storeInfo,g=c?`${c.quantity} ${c.unit}`:s;return e.purchases===void 0&&t.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${t.purchases.length} purchases pour ${t.productName}`),{...t,$updatedAt:e.$updatedAt,productName:e.productName??t.productName,isSynced:e.isSynced??t.isSynced,mainId:e.mainId??t.mainId,status:e.status??t.status,who:e.who??t.who,store:h,stockReel:l,purchases:r,previousNames:e.previousNames??t.previousNames,isMerged:e.isMerged??t.isMerged,mergedFrom:e.mergedFrom??t.mergedFrom,mergeDate:e.mergeDate??t.mergeDate,mergeReason:e.mergeReason??t.mergeReason,mergedInto:e.mergedInto??t.mergedInto,totalNeededOverride:e.totalNeededOverride??t.totalNeededOverride,storeInfo:f,stockParsed:c,totalPurchasesArray:n,missingQuantityArray:o,stockOrTotalPurchases:g,displayTotalPurchases:s,displayMissingQuantity:i,totalNeededOverrideParsed:Vt(e.totalNeededOverride??t.totalNeededOverride),displayTotalOverride:(()=>{const p=Vt(e.totalNeededOverride??t.totalNeededOverride);return p?mt([p.totalOverride]):""})()}}class Fl{#e=V(je([]));MAX_TOASTS=3;get toasts(){return a(this.#e).sort((t,r)=>r.timestamp-t.timestamp)}create(t){const r=t.id||crypto.randomUUID(),n={id:r,state:t.state,message:t.message,timestamp:Date.now(),source:t.source||"user",timeoutId:void 0,details:t.details};return this.#t(n),r}update(t,r){const n=a(this.#e).findIndex(o=>o.id===t);if(n===-1)return;const s=a(this.#e)[n];s.timeoutId&&clearTimeout(s.timeoutId),a(this.#e)[n]={...s,state:r.state||s.state,message:r.message||s.message,source:r.source||s.source},this.#s(a(this.#e)[n])}async track(t,r){const n=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const s=await t;return this.update(n,{state:"success",message:r.success||"Opération réussie"}),s}catch(s){throw this.update(n,{state:"error",message:r.error||"Erreur lors de l'opération"}),s}}dismiss(t){const r=a(this.#e).findIndex(s=>s.id===t);if(r===-1)return;const n=a(this.#e)[r];n.timeoutId&&clearTimeout(n.timeoutId),a(this.#e).splice(r,1)}dismissAll(){a(this.#e).forEach(t=>{t.timeoutId&&clearTimeout(t.timeoutId)}),y(this.#e,[],!0)}#t(t){if(t.source==="user"){const r=a(this.#e).findIndex(n=>n.source==="user");r>=0?a(this.#e)[r]=t:a(this.#e).push(t)}else{const r=a(this.#e).filter(n=>n.source!=="user");if(r.length>=2){const n=r[0];this.dismiss(n.id)}a(this.#e).push(t)}a(this.#e).length>this.MAX_TOASTS&&a(this.#e).splice(0,a(this.#e).length-this.MAX_TOASTS),this.#s(t)}#s(t){if(t.state!=="success"&&t.state!=="info")return;const r=t.source==="realtime-other"?24e3:23e3;t.timeoutId=setTimeout(()=>{this.dismiss(t.id)},r)}success(t,r){return this.create({state:"success",message:t,details:r})}error(t,r){return this.create({state:"error",message:t,details:r})}info(t,r){return this.create({state:"info",message:t,source:r?.source||"system",details:r?.details})}loading(t,r){return this.create({state:"loading",message:t,details:r})}}const bt=new Fl;function ec(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class R{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}R.equal=(e,t)=>new R("equal",e,t).toString();R.notEqual=(e,t)=>new R("notEqual",e,t).toString();R.lessThan=(e,t)=>new R("lessThan",e,t).toString();R.lessThanEqual=(e,t)=>new R("lessThanEqual",e,t).toString();R.greaterThan=(e,t)=>new R("greaterThan",e,t).toString();R.greaterThanEqual=(e,t)=>new R("greaterThanEqual",e,t).toString();R.isNull=e=>new R("isNull",e).toString();R.isNotNull=e=>new R("isNotNull",e).toString();R.between=(e,t,r)=>new R("between",e,[t,r]).toString();R.startsWith=(e,t)=>new R("startsWith",e,t).toString();R.endsWith=(e,t)=>new R("endsWith",e,t).toString();R.select=e=>new R("select",void 0,e).toString();R.search=(e,t)=>new R("search",e,t).toString();R.orderDesc=e=>new R("orderDesc",e).toString();R.orderAsc=e=>new R("orderAsc",e).toString();R.orderRandom=()=>new R("orderRandom").toString();R.cursorAfter=e=>new R("cursorAfter",void 0,e).toString();R.cursorBefore=e=>new R("cursorBefore",void 0,e).toString();R.limit=e=>new R("limit",void 0,e).toString();R.offset=e=>new R("offset",void 0,e).toString();R.contains=(e,t)=>new R("contains",e,t).toString();R.notContains=(e,t)=>new R("notContains",e,t).toString();R.notSearch=(e,t)=>new R("notSearch",e,t).toString();R.notBetween=(e,t,r)=>new R("notBetween",e,[t,r]).toString();R.notStartsWith=(e,t)=>new R("notStartsWith",e,t).toString();R.notEndsWith=(e,t)=>new R("notEndsWith",e,t).toString();R.createdBefore=e=>R.lessThan("$createdAt",e);R.createdAfter=e=>R.greaterThan("$createdAt",e);R.createdBetween=(e,t)=>R.between("$createdAt",e,t);R.updatedBefore=e=>R.lessThan("$updatedAt",e);R.updatedAfter=e=>R.greaterThan("$updatedAt",e);R.updatedBetween=(e,t)=>R.between("$updatedAt",e,t);R.or=e=>new R("or",void 0,e.map(t=>JSON.parse(t))).toString();R.and=e=>new R("and",void 0,e.map(t=>JSON.parse(t))).toString();R.distanceEqual=(e,t,r,n=!0)=>new R("distanceEqual",e,[[t,r,n]]).toString();R.distanceNotEqual=(e,t,r,n=!0)=>new R("distanceNotEqual",e,[[t,r,n]]).toString();R.distanceGreaterThan=(e,t,r,n=!0)=>new R("distanceGreaterThan",e,[[t,r,n]]).toString();R.distanceLessThan=(e,t,r,n=!0)=>new R("distanceLessThan",e,[[t,r,n]]).toString();R.intersects=(e,t)=>new R("intersects",e,[t]).toString();R.notIntersects=(e,t)=>new R("notIntersects",e,[t]).toString();R.crosses=(e,t)=>new R("crosses",e,[t]).toString();R.notCrosses=(e,t)=>new R("notCrosses",e,[t]).toString();R.overlaps=(e,t)=>new R("overlaps",e,[t]).toString();R.notOverlaps=(e,t)=>new R("notOverlaps",e,[t]).toString();R.touches=(e,t)=>new R("touches",e,[t]).toString();R.notTouches=(e,t)=>new R("notTouches",e,[t]).toString();var Oa;(function(e){e[e.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",e[e.POLICY_VIOLATION=1008]="POLICY_VIOLATION",e[e.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(Oa||(Oa={}));var to,ro;class $r{static custom(t){return t}static unique(t=7){const r=ec($r,to,"m",ro).call($r);let n="";for(let s=0;s<t;s++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}to=$r,ro=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var qa;(function(e){e.Equal="equal",e.NotEqual="notEqual",e.GreaterThan="greaterThan",e.GreaterThanEqual="greaterThanEqual",e.LessThan="lessThan",e.LessThanEqual="lessThanEqual",e.Contains="contains",e.IsNull="isNull",e.IsNotNull="isNotNull"})(qa||(qa={}));var ja;(function(e){e.Totp="totp"})(ja||(ja={}));var La;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(La||(La={}));var Ba;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Ba||(Ba={}));var za;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(za||(za={}));var Ua;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ua||(Ua={}));var Ha;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Ha||(Ha={}));var Qa;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Qa||(Qa={}));var Wa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Wa||(Wa={}));var Va;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Va||(Va={}));var Ga;(function(e){e.Http="http",e.Schedule="schedule",e.Event="event"})(Ga||(Ga={}));var Ka;(function(e){e.Waiting="waiting",e.Processing="processing",e.Completed="completed",e.Failed="failed",e.Scheduled="scheduled"})(Ka||(Ka={}));function no(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Pt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function tc(e){const n=await(await window.AppwriteClient.getAccount()).get();return{...e,updatedBy:n.name}}function _r(){return localStorage.getItem("appwrite-user-name")||""}async function rc(e,t,r=100){try{const{databases:n,config:s}=await Pt(),o=await n.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,[R.greaterThan("$updatedAt",t),R.equal("mainId",e),R.limit(r),R.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function ao(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:s,config:o}=await Pt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await s.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[R.equal("mainId",e),R.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),R.limit(n)])).documents;const i=await s.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[R.greaterThan("$updatedAt",r),R.equal("mainId",e),R.limit(n),R.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(s){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,s);const o=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function hr(e,t,r=!0){const{databases:n,config:s}=await Pt();return r&&(t.updatedBy=_r()),await n.updateDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,e,t)}async function Rt(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const s=no(n,t),o=await tc(s),{databases:i,config:l}=await Pt(),c=await i.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,e,o);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),c}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const s=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${s}`)}}async function so(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await hr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function oo(e,t){return hr(e,{who:t})}async function Wn(e,t){return hr(e,{stockReel:t})}async function pa(e,t,r=!1){if(!e)throw new Error("ID du produit requis pour la mise à jour de l'override");const n=JSON.stringify(t),s=await hr(e,{totalNeededOverride:n},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${e}:`,t),s}async function io(e,t=!0){if(!e)throw new Error("ID du produit requis pour la suppression de l'override");const r=await hr(e,{totalNeededOverride:null},t);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${e}`),r}async function lo(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const s={};return t.stockReel!==void 0&&(s.stockReel=t.stockReel),t.who!==void 0&&(s.who=t.who),t.storeInfo!==void 0&&(s.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await hr(e,s)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await Rt(e,s,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function co(e){const{databases:t,config:r}=await Pt(),n={...e,createdBy:_r()},s=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,$r.unique(),n);return console.log("[Appwrite Interactions] Achat créé:",s),s}async function uo(e,t){try{const{databases:r,config:n}=await Pt(),s=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||s.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function vo(e){try{const{databases:t,config:r}=await Pt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function fo(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Pt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[R.equal("$id",e),R.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function ho(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(m=>m.includes("products.")),h=i.some(m=>m.includes("purchases.")),f=i.some(m=>m.includes(".create")),g=i.some(m=>m.includes(".update")),p=i.some(m=>m.includes(".delete"));if(c){const m=l;m.updatedBy&&m.updatedBy!==_r()&&(f||g?bt.info(`${m.updatedBy} a modifié le produit "${m.productName}"`,{source:"realtime-other"}):p&&bt.info(`${m.updatedBy} a supprimé un produit`,{source:"realtime-other"})),f&&t.onProductCreate?t.onProductCreate(m):g&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(h){const m=l;if(m.createdBy&&m.createdBy!==_r()){const _=m.products?.[0]?.productName||"un produit";f&&m.who!==_r()?bt.info(`${m.who} a ajouté un achat pour ${_}`,{source:"realtime-other"}):g&&m.who!==_r()?bt.info(`${m.who} a modifié un achat pour ${_}`,{source:"realtime-other"}):p&&bt.info(`${m.who} a supprimé un achat pour ${_}`,{source:"realtime-other"})}f&&t.onPurchaseCreate?t.onPurchaseCreate(m):g&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function po(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Pt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function mo(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:s}=await Pt(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await s.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(s){throw console.error("[Appwrite Interactions] Erreur création Main document:",s),s}}async function ma(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const s=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const o=JSON.parse(s.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function go(e,t,r,n){return ma({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function _o(e,t,r,n="replace"){return ma({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function bo(e,t,r,n={}){try{const{databases:s,config:o}=await Pt(),c=await(await window.AppwriteClient.getAccount()).get(),h=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const f of r){const g={products:[t],mainId:e,quantity:f.q,unit:f.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await s.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,$r.unique(),g);h.push(p)}return console.log(`[Appwrite Interactions] ${h.length} validations rapides créées pour produit ${t}`),h}catch(s){console.error("[Appwrite Interactions] Erreur création validation rapide:",s);const o=s instanceof Error?s.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const nc=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:ma,batchUpdateStore:go,batchUpdateWho:_o,createMainDocument:mo,createPurchase:co,createQuickValidationPurchases:bo,deletePurchase:vo,enrichedProductToAppwriteProduct:no,loadMainEventData:po,loadPurchasesListByIds:fo,loadUpdatedPurchases:rc,removeTotalOverride:io,subscribeToRealtime:ho,syncProductsWithPurchases:ao,updateProduct:hr,updateProductBatch:lo,updateProductStock:Wn,updateProductStore:so,updateProductWho:oo,updatePurchase:uo,updateTotalOverride:pa,upsertProduct:Rt},Symbol.toStringTag,{value:"Module"}));async function ac(e){let t;if(t=await fetch(`/evenements/${e}/metadata.json`),!t.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function Ya(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function sc(e,t){if(!e)return!0;try{return(await ac(t)).hugoContentHash!==e}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function yo(e,t){const r=fa(e.byDate),n=wn(yn([])),{numeric:s,display:o}=Sn(r,n);return{$id:`${e.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalNeededRaw:e.totalNeededRaw,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:n,missingQuantityArray:s,stockOrTotalPurchases:"-",displayTotalNeeded:mt(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null,displayTotalOverride:""}}function oc(e,t){return e.map(r=>yo(r,t))}class ic{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=s=>{const o=s.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();o.onsuccess=()=>{const i=o.result,l={lastSync:null,allDates:[],hugoContentHash:null};i.forEach(c=>{c.key===this.LAST_SYNC_KEY?l.lastSync=c.value:c.key===this.ALL_DATES_KEY?l.allDates=c.value||[]:c.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=c.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),t(l)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const s=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=s.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),s.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},s.onerror=()=>n(s.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const s=this.db.transaction(this.METADATA_STORE,"readwrite"),o=s.objectStore(this.METADATA_STORE);o.put({key:this.LAST_SYNC_KEY,value:t.lastSync}),o.put({key:this.ALL_DATES_KEY,value:t.allDates}),t.hugoContentHash!==void 0&&o.put({key:this.HUGO_HASH_KEY,value:t.hugoContentHash}),s.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},s.onerror=()=>n(s.error)})}async updateLastSync(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${t}`),r()},i.onerror=()=>n(i.error)})}async updateAllDates(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${t.length} dates`),r()},i.onerror=()=>n(i.error)})}async updateHugoContentHash(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${t}`),r()},i.onerror=()=>n(i.error)})}async updateLastHugoMenuUpdate(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:t});i.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function lc(e){const t=new ic(e);return await t.open(),t}function cc(e){return!!(e.isMerged||e.totalNeededOverride)}function uc(e,t){if(!e||e.length!==t.length)return!0;for(let r=0;r<e.length;r++){const n=e[r],s=t[r];if(n.q!==s.q||n.u!==s.u)return!0}return!1}async function dc(e,t){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},n=new Map;for(const[o,i]of e)n.set(i.productHugoUuid,o);const s=new Set;for(const o of t.ingredients){const i=o.productSemanticKey||`${t.mainGroup_id}_${o.ingredientHugoUuid}`;s.add(i);const l=n.get(o.ingredientHugoUuid),c=l?e.get(l):void 0;if(c){if(uc(c.totalNeededRaw,o.totalNeededRaw)){const f=vc(c,o);if(f&&r.overrideConflicts.push(f),c.isMerged){const g=c.displayTotalNeeded;Ja(c,o),r.mergedProductsUpdated.push({product:c,oldDisplayTotal:g,newDisplayTotal:c.displayTotalNeeded,currentOverride:c.totalNeededOverrideParsed,semanticKey:i})}else Ja(c,o);r.updated.push(i)}e.set(i,c)}else{r.added.push(o);const h=yo(o,t.mainGroup_id);e.set(h.$id,h)}}for(const[o,i]of e)s.has(o)||(r.removed.push(i),!cc(i)&&!i.purchases?.length&&!i.stockReel&&!i.who?.length&&e.delete(o));return r.overrideConflicts.length>0&&await fc(r.overrideConflicts),r.summary=pc(r),r}function vc(e,t){if(!e.totalNeededOverride||!e.totalNeededOverrideParsed)return null;const r=fa(t.byDate),n=mt(r),s=e.displayTotalNeeded;return s!==n?{product:e,oldDisplayTotal:s,newDisplayTotal:n,currentOverride:e.totalNeededOverrideParsed,semanticKey:e.$id}:null}async function fc(e){for(const t of e){const r={...t.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:t.oldDisplayTotal,newTotalDisplay:t.newDisplayTotal};JSON.stringify(r);try{await pa(t.product.$id,r,!1)}catch(n){console.error(`Erreur lors de la mise à jour de l'override pour ${t.product.$id}:`,n)}}}function Ja(e,t){e.byDate=t.byDate,e.nbRecipes=t.nbRecipes,e.totalAssiettes=t.totalAssiettes,e.productType=t.ingType,e.pFrais=t.pFrais||!1,e.pSurgel=t.pSurgel||!1,hc(e)}function hc(e){e.totalNeededArray=fa(e.byDate),e.displayTotalNeeded=mt(e.totalNeededArray);const t=wn(yn(e.purchases)),{numeric:r,display:n}=Sn(e.totalNeededArray,t);e.totalPurchasesArray=t,e.missingQuantityArray=r,e.displayMissingQuantity=n,e.stockOrTotalPurchases=e.purchases.length>0?e.displayTotalPurchases:e.displayTotalNeeded}function pc(e){const t=[];if((e.added.length>0||e.updated.length>0||e.removed.length>0)&&t.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),e.added.length>0&&t.push(`${e.added.length} nouveau(x) ingrédient(s)`),e.updated.length>0&&t.push(` ${e.updated.length} ingrédient(s) mis à jour`),e.overrideConflicts.length>0&&t.push(`⚠️ ${e.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),e.mergedProductsUpdated.length>0&&t.push(`🔀 ${e.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),e.removed.length>0){const r=e.removed.filter(n=>n.purchases?.length||n.stockReel||n.who?.length).length;r>0?t.push(`⚠️ ${r} suppression(s) avec données conservées`):t.push(`${e.removed.length} ingrédient(s) supprimé(s)`)}return t.length>0?t.join(", "):"Aucune modification détectée"}class mc{isMobileQuery=new Tl("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return bt.toasts}get toast(){return bt}#e=V(je({isOpen:!1,conflicts:[]}));get modalOverride(){return a(this.#e)}set modalOverride(t){y(this.#e,t,!0)}#t=V(je({isOpen:!1}));get modal(){return a(this.#t)}set modal(t){y(this.#t,t,!0)}}const Er=new mc;class tn{#e=V();get data(){return a(this.#e)}set data(t){y(this.#e,t,!0)}#t;#s;constructor(t,r,n){this.data=t,this.#t=r,this.#s=n}update(t){this.data=t}get $id(){return this.data.$id}get productName(){return this.data.productName}get productType(){return this.data.productType}get storeInfo(){return this.data.storeInfo}get who(){return this.data.who}get pFrais(){return this.data.pFrais}get pSurgel(){return this.data.pSurgel}get status(){return this.data.status}get previousNames(){return this.data.previousNames}get purchases(){return this.data.purchases}get totalNeededOverrideParsed(){return this.data.totalNeededOverrideParsed}get displayMissingQuantity(){return this.data.displayMissingQuantity}get missingQuantityArray(){return this.data.missingQuantityArray}get isSynced(){return this.data.isSynced}get byDate(){return this.data.byDate}#c=Z(()=>{const t=this.#t(),r=this.#s();let n;if(t.start&&t.start===t.end)n=Vl(this.data,t.start);else if(Fs(t,r))n=Yl(this.data,r);else if(t.start&&t.end)n=Jl(this.data,t.start,t.end);else return{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedMissingQuantities:"",formattedAvailableQuantities:"En attente",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map};return{quantities:n.requiredQuantities,formattedQuantities:n.requiredQuantitiesFormatted,nbRecipes:n.totalRecipesInRange,totalAssiettes:n.totalPortionsInRange,stockResult:n.stockBalance,availableQuantities:n.availableStockQuantities,missingQuantities:n.missingStockQuantities,formattedMissingQuantities:n.missingStockFormatted,formattedAvailableQuantities:n.availableStockFormatted,hasAvailable:n.hasAvailableStock,hasMissing:n.hasMissingStock,concernedDates:n.datesInSelectedRange,recipesByDate:n.recipesByDate}});get stats(){return a(this.#c)}set stats(t){y(this.#c,t)}}const Za=1e3;class gc{#e=new $l;#t=V(null);#s=V(null);#c=V(!1);#d=V(!1);#i=V(null);#u=V(!1);#l=V(!1);#o=V(null);#v=V(null);#a=V(je([]));#f=V(je({start:null,end:null}));get dateRange(){return a(this.#f)}set dateRange(t){y(this.#f,t,!0)}#h=Z(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDateInRange(){return a(this.#h)}set hasSingleDateInRange(t){y(this.#h,t)}#m=Z(()=>a(this.#a).length===1);get hasSingleDateEvent(){return a(this.#m)}set hasSingleDateEvent(t){y(this.#m,t)}#g=Z(()=>{if(a(this.#a).length===0)return!0;const t=this.lastAvailableDate?new Date(this.lastAvailableDate):new Date;return t.setHours(23,59,59,999),t<new Date});get isEventPassed(){return a(this.#g)}set isEventPassed(t){y(this.#g,t)}#n=null;#_=null;#b=V(!1);#p=null;#y=V(!1);#w=V();#x=V(je([]));get hasPendingConflicts(){return a(this.#x).length>0}get pendingConflicts(){return a(this.#x)}#r=V(je({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return a(this.#r)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get currentMainId(){return a(this.#t)}get loading(){return a(this.#d)}get error(){return a(this.#i)}get lastSync(){return a(this.#o)}get syncing(){return a(this.#u)}get availableDates(){return a(this.#a)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,s=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:s}}isFullRange(){return Fs(this.dateRange,a(this.#a))}initializeDateRange(){const t=Ul(a(this.#a));t&&(this.dateRange=t),console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}selectUpcomingDates(){const t=Xs(a(this.#a));t&&(this.dateRange=t)}isUpcomingRange(){return Ql(this.dateRange,a(this.#a))}get firstAvailableDate(){return Zs(a(this.#a))}get lastAvailableDate(){return Pn(a(this.#a))}get realtimeConnected(){return a(this.#l)}#E=Z(()=>{const t=Array.from(this.#e.values()).map(r=>r.data);return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return a(this.#E)}set enrichedProducts(t){y(this.#E,t)}#k=Z(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const t=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[s,o]of this.#e){const i=o.data;if(!i.byDate||!jl(i,a(this.#r)))continue;Object.keys(i.byDate).some(h=>{const f=new Date(h);return f>=t&&f<=r})&&n.set(s,o)}return n});get filteredProductsMap(){return a(this.#k)}set filteredProductsMap(t){y(this.#k,t)}#A=Z(()=>({total:this.#e.size,frais:Array.from(this.#e.values()).filter(t=>t.pFrais).length,surgel:Array.from(this.#e.values()).filter(t=>t.pSurgel).length,merged:Array.from(this.#e.values()).filter(t=>t.data.isMerged).length}));get stats(){return a(this.#A)}set stats(t){y(this.#A,t)}#T=Z(()=>{const t=Array.from(this.#e.values()).map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return a(this.#T)}set uniqueStores(t){y(this.#T,t)}#M=Z(()=>{const t=Array.from(this.#e.values()).flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return a(this.#M)}set uniqueWho(t){y(this.#M,t)}#D=Z(()=>{const t=Array.from(this.#e.values()).map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return a(this.#D)}set uniqueProductTypes(t){y(this.#D,t)}#C=Z(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((i,l)=>i.$id.localeCompare(l.$id));if(a(this.#r).groupBy==="none")return{"":r};const n=Object.groupBy(r,i=>a(this.#r).groupBy==="store"?i.storeInfo?.storeName||"Non défini":i.productType||"Non défini"),s=Object.keys(n).sort((i,l)=>i===""?1:l===""?-1:i.localeCompare(l)),o={};return s.forEach(i=>{o[i]=n[i]}),o});get groupedFilteredProducts(){return a(this.#C)}set groupedFilteredProducts(t){y(this.#C,t)}async initialize(t,r){if(!t?.trim())throw new Error("mainId invalide fourni");if(a(this.#c)&&a(this.#t)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),y(this.#t,t,!0),y(this.#s,r,!0);try{this.#n=await lc(t)}catch(n){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",n),new Error("Impossible d'initialiser le cache IndexedDB")}y(this.#i,null);try{if(await this.#O(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let s;s=await Ya(r),console.log(`[ProductsStore] Hugo chargé: ${s.ingredients.length} ingrédients`),y(this.#v,s.hugoContentHash,!0),oc(s.ingredients,t).forEach(l=>{this.#e.set(l.$id,new tn(l,()=>this.dateRange,()=>a(this.#a)))}),y(this.#a,[...s.allDates],!0),await po(t)||await mo(s.mainGroup_id,s.hugoContentHash,s.allDates,s.name),await this.#N()}this.initializeDateRange(),await this.#q(),y(this.#c,!0);const n=this.#K();this.#_=ho(t,n),this.#z(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#I(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(n){const s=n instanceof Error?n.message:"Erreur lors de l'initialisation";throw y(this.#i,s,!0),console.error("[ProductsStore]",s,n),n}}async#O(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,s)=>{this.#e.set(s,new tn(n,()=>this.dateRange,()=>a(this.#a)))});const r=await this.#n.loadMetadata();y(this.#o,r.lastSync,!0),y(this.#a,[...r.allDates],!0),y(this.#v,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#q(){if(a(this.#t)){y(this.#u,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${a(this.#t)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${a(this.#o)}`);const t=await ao(a(this.#t),{lastSync:a(this.#o),limit:Za});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const s=this.#R(r,n?.data);s.isSynced=!0,n?n.update(s):this.#e.set(r.$id,new tn(s,()=>this.dateRange,()=>a(this.#a)))}),a(this.#o)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${a(this.#o)}`);const{loadUpdatedPurchases:r}=await Pl(async()=>{const{loadUpdatedPurchases:s}=await Promise.resolve().then(()=>nc);return{loadUpdatedPurchases:s}},void 0),n=await r(a(this.#t),a(this.#o),Za);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(s=>{if(s.products?.length){const o=s.products.map(i=>typeof i=="string"?i:i.$id);this.#$(o,s)}})}this.#L(),await this.#j(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{y(this.#u,!1)}}}async#j(){if(this.#n)try{const t=new Map;this.#e.forEach((r,n)=>t.set(n,mr(r.data))),await this.#n.saveProducts(t),await this.#n.saveMetadata({lastSync:a(this.#o),allDates:[...a(this.#a)],hugoContentHash:a(this.#v)}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#Y(){if(this.#n)try{const t=new Map;this.#e.forEach((r,n)=>t.set(n,mr(r.data))),await this.#n.saveProducts(t),await this.#n.updateLastSync(a(this.#o)),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#N(){if(this.#n)try{const t=new Map;this.#e.forEach((r,n)=>t.set(n,mr(r.data))),await this.#n.saveProducts(t),await this.#n.updateLastSync(a(this.#o)),await this.#n.updateAllDates([...a(this.#a)]),await this.#n.updateHugoContentHash(a(this.#v)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(t){console.error("[ProductsStore] Erreur persistance cache complet:",t)}}async#P(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)?.data).filter(n=>n!=null).map(n=>this.#n.upsertProduct(mr(n)));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#L(){y(this.#o,new Date().toISOString(),!0)}async#I(){if(!a(this.#s)||a(this.#d))return!1;try{const t=await sc(a(this.#v),a(this.#s));return t&&!a(this.#b)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${a(this.#s)}, analyse approfondie en cours...`),y(this.#b,!0),await this.#B()),y(this.#w,new Date,!0),t}catch(t){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",t),!1}}async#B(){if(!a(this.#s)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const t=await Ya(a(this.#s)),r=new Map;this.#e.forEach((s,o)=>r.set(o,s.data));const n=await dc(r,t);if(console.log(`[ProductsStore  - hugo change] ${n.summary}`),n.overrideConflicts.length>0&&(y(this.#x,n.overrideConflicts,!0),bt.error(`${n.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>Er.modalOverride.isOpen=!0}})),n.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${n.mergedProductsUpdated.length} produits fusionnés modifiés`),n.removed.length>0){const s=n.removed.filter(o=>o.purchases?.length||o.stockReel||o.who?.length);s.length>0&&console.log(`[ProductsStore] ℹ️ ${s.length} ingrédients supprimés conservés (données utilisateur)`)}y(this.#a,[...t.allDates],!0),y(this.#v,t.hugoContentHash,!0),this.initializeDateRange(),await this.#N(),(n.added.length||n.updated.length||n.removed.length)&&bt.success(n.summary),y(this.#b,!1)}catch(t){console.error("[ProductsStore] Erreur sync Hugo:",t),bt.error("Erreur lors de la mise à jour Hugo")}}#z(){this.#p&&clearInterval(this.#p),this.#p=setInterval(async()=>{await this.#I()},6e4)}#U(){this.#p&&(clearInterval(this.#p),this.#p=null)}#R(t,r){return r?en(t,r):Xl(t)}#J(t){t.length&&(t.forEach(r=>this.#S(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#S(t){const r=this.#e.get(t.$id),n=this.#R(t,r?.data);r?r.update(n):this.#e.set(t.$id,new tn(n,()=>this.dateRange,()=>a(this.#a)))}#H(t){this.#e.delete(t)}async#Q(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#G(r,t),r}async#W(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#$(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await fo([t.$id]);if(r?.products?.length){const n=r.products.map(s=>typeof s=="string"?s:s.$id).filter(Boolean);return this.#$(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#V(t){const r=Array.from(this.#e.values()).map(n=>n.data).filter(n=>n.purchases?.some(s=>s.$id===t));return r.forEach(n=>{this.#S(n)}),r.map(n=>n.$id)}#G(t,r){const n=Ra(r),s=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.data,c=l.purchases||[];if(!c.some(h=>h.$id===n.$id)){const h=en({...l,purchases:[...c,n],status:"active"},l);s.push(h)}}}),s.forEach(o=>{const i=this.#e.get(o.$id);i&&i.update(o)})}#$(t,r){const n=Ra(r),s=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.data,c=l.purchases||[],h=c.findIndex(f=>f.$id===n.$id);if(h>=0){const f=[...c];f[h]=n;const g=en({...l,purchases:f,status:"active"},l);s.push(g)}else{const f=en({...l,purchases:[...c,r],status:"active"},l);s.push(f)}}}),s.forEach(o=>{const i=this.#e.get(o.$id);i&&i.update(o)})}#K(){return{onProductCreate:t=>{if(this.#S(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(mr(r.data)).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#S(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(mr(r.data)).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#H(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#Q(t);await this.#P(r)},onPurchaseUpdate:async t=>{const r=await this.#W(t);await this.#P(r)},onPurchaseDelete:async t=>{const r=await this.#V(t);await this.#P(r)},onConnect:()=>{y(this.#l,!0)},onDisconnect:()=>{y(this.#l,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}setSearchQuery=Rl(t=>{a(this.#r).searchQuery=t},()=>500);toggleProductType(t){const r=a(this.#r).selectedProductTypes.indexOf(t);r>-1?a(this.#r).selectedProductTypes.splice(r,1):a(this.#r).selectedProductTypes.push(t)}toggleTemperature(t){const r=a(this.#r).selectedTemperatures.indexOf(t);r>-1?a(this.#r).selectedTemperatures.splice(r,1):a(this.#r).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){a(this.#r).selectedProductTypes=[],a(this.#r).selectedTemperatures=[]}setGroupBy(t){a(this.#r).groupBy=t}toggleStore(t){const r=a(this.#r).selectedStores.indexOf(t);r>-1?a(this.#r).selectedStores.splice(r,1):a(this.#r).selectedStores.push(t)}toggleWho(t){const r=a(this.#r).selectedWho.indexOf(t);r>-1?a(this.#r).selectedWho.splice(r,1):a(this.#r).selectedWho.push(t)}clearStoreFilters(){a(this.#r).selectedStores=[]}clearWhoFilters(){a(this.#r).selectedWho=[]}handleSort(t){a(this.#r).sortColumn===t?a(this.#r).sortDirection=a(this.#r).sortDirection==="asc"?"desc":"asc":(a(this.#r).sortColumn=t,a(this.#r).sortDirection="asc")}clearFilters(){y(this.#r,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return a(this.#r).sortColumn?[...t].sort((r,n)=>{let s=r[a(this.#r).sortColumn],o=n[a(this.#r).sortColumn];return a(this.#r).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,o=parseFloat(o)||0):a(this.#r).sortColumn==="purchases"&&(s=r.purchases?.length||0,o=n.purchases?.length||0),s<o?a(this.#r).sortDirection==="asc"?-1:1:s>o?a(this.#r).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)?.data??null}getProductModelById(t){return this.#e.get(t)??null}hasConversions(t){const r=this.#e.get(t)?.data;return r?.byDate?Ol(r.byDate):!1}async forceReload(t,r){await this.clearCache(),await this.initialize(t,r)}async clearCache(){this.#e.clear(),y(this.#a,[],!0),y(this.#o,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(s=>{const o=this.#e.get(s);if(o){const i={...o.data,status:n};o.update(i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#_?.(),this.#_=null,this.#U(),this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const te=new gc;function Xa(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function _c(e){const t=e.substring(0,4),r=e.slice(-10);return`${t}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const bc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var yc=Fi("<svg><!><!></svg>");function ge(e,t){F(t,!0);const r=ke(t,"color",3,"currentColor"),n=ke(t,"size",3,24),s=ke(t,"strokeWidth",3,2),o=ke(t,"absoluteStrokeWidth",3,!1),i=ke(t,"iconNode",19,()=>[]),l=pe(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=yc();Da(c,g=>({...bc,...l,width:n(),height:n(),stroke:r(),"stroke-width":g,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(s())*24/Number(n()):s()]);var h=u(c);st(h,17,i,Wr,(g,p)=>{var m=Z(()=>is(a(p),2));let _=()=>a(m)[0],$=()=>a(m)[1];var b=K(),E=N(b);ol(E,_,!0,(C,x)=>{Da(C,()=>({...$()}))}),v(g,b)});var f=d(h);ue(f,()=>t.children??le),v(e,c),ee()}function Vn(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ge(e,me({name:"archive"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function wc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ge(e,me({name:"bean"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Sc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ge(e,me({name:"beef"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function xc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ge(e,me({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Pc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ge(e,me({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function kr(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];ge(e,me({name:"check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function $c(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ge(e,me({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function wo(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];ge(e,me({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Ec(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ge(e,me({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function kc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];ge(e,me({name:"circle-arrow-down"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Ac(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];ge(e,me({name:"circle-arrow-right"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Fa(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ge(e,me({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Tc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ge(e,me({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Mc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];ge(e,me({name:"circle-x"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Dc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];ge(e,me({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Cc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];ge(e,me({name:"clipboard-pen-line"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Nc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];ge(e,me({name:"clock"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Ic(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];ge(e,me({name:"cloud"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function ga(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ge(e,me({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Rc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ge(e,me({name:"egg"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Oc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];ge(e,me({name:"euro"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function rn(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];ge(e,me({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function So(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ge(e,me({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function xo(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];ge(e,me({name:"history"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function qc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ge(e,me({name:"info"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function jc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ge(e,me({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Lc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ge(e,me({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Bc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ge(e,me({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Po(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];ge(e,me({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function zc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];ge(e,me({name:"lock"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Uc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ge(e,me({name:"log-in"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Hc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];ge(e,me({name:"message-circle-more"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Qc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ge(e,me({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function $o(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ge(e,me({name:"message-circle"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Eo(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ge(e,me({name:"moon"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Wc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];ge(e,me({name:"package-check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Yr(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ge(e,me({name:"package"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Vc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];ge(e,me({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Gc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ge(e,me({name:"plus"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Kc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];ge(e,me({name:"receipt"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Yc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ge(e,me({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Jc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ge(e,me({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Zc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ge(e,me({name:"save"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Xc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ge(e,me({name:"search"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function ko(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ge(e,me({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Yt(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ge(e,me({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Ao(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ge(e,me({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Gn(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ge(e,me({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Lt(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ge(e,me({name:"store"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function To(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ge(e,me({name:"sun"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Fc(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];ge(e,me({name:"thermometer"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function $n(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ge(e,me({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Mo(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];ge(e,me({name:"user-plus"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Jr(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ge(e,me({name:"user"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function sn(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ge(e,me({name:"users"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function eu(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ge(e,me({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function Mt(e,t){F(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ge(e,me({name:"x"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ue(l,()=>t.children??le),v(s,i)},$$slots:{default:!0}})),ee()}function tu(e,t){const r=e.reduce((s,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return s+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function ru(e,t){const r=e.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const s=t.purchaseStatus||"delivered";let o=t.purchaseDeliveryDate||null;s==="delivered"&&!o&&(o=new Date().toISOString());const i=e.flatMap(c=>c.missingQuantities.map(h=>({productId:c.productId,quantity:h.q,unit:h.u,status:s,notes:t.notes||"",store:t.store||"",who:t.who||void 0,price:void 0,orderDate:null,deliveryDate:o,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:t}}async function nu(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=tu(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const s=100,o=[];if(n<=s)o.push(t);else{let p=[],m=0;for(const _ of t){const $=(_.isSynced?0:1)+_.missingQuantities.length;m+$>s?(p.length>0&&o.push(p),p=[_],m=$):(p.push(_),m+=$)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,h=0;for(let p=0;p<o.length;p++){const m=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${m.length} produits)`);try{const _=await ru(m,r),$=await au(_);if(i.push($),$.success)l+=$.productsCreated,c+=$.purchasesCreated,h+=$.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${$.error}`);break}}catch(_){const $=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,_),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:$,timestamp:new Date().toISOString()});break}}const f=i.every(p=>p.success),g=i.some(p=>!p.success);return{success:f,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:h,error:g?"Un ou plusieurs lots ont échoué":void 0}}async function au(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const s=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const o=JSON.parse(s.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var su=(e,t,r)=>t(a(r).id),ou=w('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),iu=w('<span class="flex items-center gap-1"><!> </span>'),lu=w('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),cu=w('<div class="flex flex-wrap gap-2"></div> <!>',1);function Vr(e,t){F(t,!0);let r=ke(t,"badgeSize",3,"badge-lg"),n=ke(t,"color",3,"primary"),s=ke(t,"badgeStyle",3,""),o=ke(t,"onToggleItem",3,()=>{}),i=ke(t,"showStats",3,!1),l=ke(t,"showIcon",3,!0),c=V(je({}));Ft(()=>{const b={};t.items.forEach(E=>{b[E.id]=E.selected??!0}),y(c,b,!0)});function h(b){a(c)[b]=!a(c)[b],o()(b)}const f=Z(()=>Object.values(a(c)).filter(Boolean).length),g=Z(()=>Object.values(a(c)).filter(b=>!b).length);var p=cu(),m=N(p);st(m,21,()=>t.items,b=>b.id,(b,E)=>{const C=Z(()=>a(c)[a(E).id]);var x=ou();x.__click=[su,h,E];var A=u(x);{var S=L=>{var O=K(),X=N(O);or(X,()=>a(E).icon,(de,q)=>{q(de,{class:"h-3 w-3",get title(){return a(E).title}})}),v(L,O)};k(A,L=>{a(E).icon&&L(S)})}var T=d(A,2),P=u(T),M=d(T,2);{var D=L=>{var O=K(),X=N(O);{var de=I=>{kr(I,{size:16})},q=I=>{Gc(I,{size:16})};k(X,I=>{a(C)?I(de):I(q,!1)})}v(L,O)};k(M,L=>{l()&&L(D)})}B(()=>{Te(x,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${a(C)?`${s()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Zt(x,"title",a(C)?"Retirer de la liste":"Réajouter à la liste"),U(P,a(E).label)}),v(b,x)});var _=d(m,2);{var $=b=>{var E=lu(),C=u(E),x=u(C),A=u(x);kr(A,{class:"text-success h-3 w-3"});var S=d(A),T=d(x,2);{var P=L=>{var O=iu(),X=u(O);Mt(X,{class:"text-error h-3 w-3"});var de=d(X);B(()=>U(de,` ${a(g)??""} retirés`)),v(L,O)};k(T,L=>{a(g)>0&&L(P)})}var M=d(C,2),D=u(M);B(()=>{U(S,` ${a(f)??""} actifs`),U(D,`Total: ${t.items.length??""} items`)}),v(b,E)};k(_,b=>{i()&&b($)})}v(e,p),ee()}Je(["click"]);function uu(e,t){y(t,!a(t))}var du=w('<span class="text-base-content font-semibold"> </span>'),vu=w('<div class="text-base-content/80 flex-1"> </div>'),fu=w('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),hu=w('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),pu=w('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Do(e,t){let r=ke(t,"icon",3,qc),n=ke(t,"class",3,""),s=ke(t,"initiallyOpen",3,!1),o=r(),i=V(je(s())),l=je(t.children);var c=pu(),h=u(c);h.__click=[uu,i];var f=u(h),g=u(f);o(g,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(g,2);{var m=A=>{var S=du(),T=u(S);B(()=>U(T,t.title)),v(A,S)};k(p,A=>{t.title&&A(m)})}var _=d(f,2);{var $=A=>{var S=vu(),T=u(S);B(()=>U(T,t.contentVisible)),v(A,S)};k(_,A=>{t.contentVisible&&A($)})}var b=d(_,2);{var E=A=>{var S=fu(),T=u(S),P=u(T);{var M=O=>{var X=pt("en savoir plus");v(O,X)},D=O=>{var X=pt("masquer");v(O,X)};k(P,O=>{a(i)?O(D,!1):O(M)})}var L=d(T,2);{let O=Z(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${a(i)?"rotate-180":""}`);wo(L,{get class(){return a(O)}})}v(A,S)};k(b,A=>{l&&A(E)})}var C=d(h,2);{var x=A=>{var S=hu(),T=u(S),P=u(T);ue(P,()=>t.children??le),B(()=>Te(S,1,`overflow-hidden transition-all duration-200 ${a(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),v(A,S)};k(C,A=>{l&&A(x)})}B(()=>{Te(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Qs(c,t.style),Te(h,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Zt(h,"aria-expanded",a(i))}),v(e,c)}Je(["click"]);async function mu(e,t,r,n,s,o,i,l){if(!(!a(t)||a(r))){y(r,!0),y(n,null),y(s,null);try{const c=`FACTURE_${Date.now()}`,h=a(o).map(m=>m.$id);te.setSyncStatus(h,!0);const f=[];for(const m of a(o))f.push({productId:m.$id,isSynced:m.isSynced,productData:m,missingQuantities:m.missingQuantityArray||[]});const g={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${a(o).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${f.length} produits...`),l.onClose();const p=await nu(te.currentMainId,f,g);if(p.success)y(s,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const h=c instanceof Error?c.message:"Erreur inconnue";y(n,h,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),te.clearSyncStatus()}finally{y(r,!1)}}}function es(e,t,r){a(t)||r.onClose()}var gu=w('<div class="alert alert-error"><!> <span> </span></div>'),_u=w('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),bu=w(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),yu=w("<option> </option>"),wu=w("<option> </option>"),Su=w('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),xu=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Pu=w("<!> ",1),$u=w(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function Eu(e,t){F(t,!0);let r=V(!1),n=V(null),s=V(null),o=je({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=V(je(new Set));Ft(()=>{y(i,new Set(t.products.map(ve=>ve.$id)),!0)});const l=Z(()=>t.products.filter(ve=>a(i).has(ve.$id))),c=Z(()=>a(l).length!==0),h=Z(()=>`Achat groupé (${a(l).length} produits sélectionnés)`);function f(ve){const Se=new Set(a(i));Se.has(ve)?Se.delete(ve):Se.add(ve),y(i,Se,!0)}const g=Z(()=>t.products.map(ve=>({id:ve.$id,label:ve.productName,title:ve.productName})));var p=$u(),m=u(p),_=u(m),$=u(_),b=u($);Yt(b,{class:"h-5 w-5"});var E=d(b),C=d($,2);C.__click=[es,r,t];var x=u(C);Mt(x,{class:"h-4 w-4"});var A=d(_,2),S=u(A);{var T=ve=>{var Se=gu(),De=u(Se);$n(De,{class:"h-4 w-4"});var ze=d(De,2),Ee=u(ze);B(()=>U(Ee,a(n))),v(ve,Se)};k(S,ve=>{a(n)&&ve(T)})}var P=d(S,2);{var M=ve=>{var Se=_u(),De=u(Se);kr(De,{class:"h-4 w-4"});var ze=d(De,2),Ee=u(ze),Dt=d(Ee);{var Cr=ut=>{var Qt=pt("+ 1 dépense globale");v(ut,Qt)};k(Dt,ut=>{a(s).expense&&ut(Cr)})}var Nr=d(Dt,2);{var $t=ut=>{var Qt=pt();B(()=>U(Qt,`(traité en ${a(s).batches??""} lots)`)),v(ut,Qt)};k(Nr,ut=>{a(s).batches&&a(s).batches>1&&ut($t)})}B(()=>U(Ee,`Achat groupé créé avec succès ! ${a(s).purchases??""} produit(s) validés `)),v(ve,Se)};k(P,ve=>{a(s)&&ve(M)})}var D=d(P,2),L=u(D);Do(L,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(ve,Se)=>{var De=bu();v(ve,De)},$$slots:{default:!0}});var O=d(D,2),X=d(u(O),2),de=u(X),q=u(de),I=u(q);Lt(I,{class:"h-4 w-4 opacity-50"});var j=d(I,2),ae=d(q,2);st(ae,21,()=>te.uniqueStores,Wr,(ve,Se)=>{var De=yu(),ze=u(De),Ee={};B(()=>{U(ze,a(Se)),Ee!==(Ee=a(Se))&&(De.value=(De.__value=a(Se))??"")}),v(ve,De)});var z=d(de,2),W=u(z),ne=u(W);Jr(ne,{class:"h-4 w-4 opacity-50"});var be=d(ne,2),H=d(W,2);st(H,21,()=>te.uniqueWho,Wr,(ve,Se)=>{var De=wu(),ze=u(De),Ee={};B(()=>{U(ze,a(Se)),Ee!==(Ee=a(Se))&&(De.value=(De.__value=a(Se))??"")}),v(ve,De)});var Y=d(z,2),G=u(Y),oe=u(G);Oc(oe,{class:"h-4 w-4 opacity-50"});var _e=d(oe,2),J=d(X,2),ce=u(J),Q=u(ce),re=u(Q);re.value=re.__value="delivered";var we=d(re);we.value=we.__value="ordered";var Ae=d(Q,2),Ne=d(ce,2);{var se=ve=>{var Se=Su(),De=u(Se),ze=d(u(De),2);B(()=>ze.disabled=a(r)),qe(ze,()=>o.deliveryDate,Ee=>o.deliveryDate=Ee),v(ve,Se)};k(Ne,ve=>{o.status==="ordered"&&ve(se)})}var ye=d(J,2),Me=u(ye),Oe=u(Me);$o(Oe,{class:"h-4 w-4 opacity-50"});var Ge=d(Oe,2),Ve=d(O,2),ie=d(u(Ve),2);Vr(ie,{get items(){return a(g)},onToggleItem:f,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var xe=d(Ve,2),Be=u(xe);Be.__click=[es,r,t];var Ke=d(Be,2);Ke.__click=[mu,c,r,n,s,l,o,t];var Pe=u(Ke);{var $e=ve=>{var Se=xu();v(ve,Se)},Ue=ve=>{var Se=Pu(),De=N(Se);Yt(De,{class:"h-4 w-4"});var ze=d(De);B(()=>U(ze,` Valider ${a(l).length??""} produit(s)`)),v(ve,Se)};k(Pe,ve=>{a(r)?ve($e):ve(Ue,!1)})}B(()=>{U(E,` ${a(h)??""}`),C.disabled=a(r),j.disabled=a(r),be.disabled=a(r),_e.disabled=a(r),Q.disabled=a(r),Te(Ae,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),Ge.disabled=a(r),Be.disabled=a(r),Ke.disabled=a(r)||!a(c)}),qe(j,()=>o.store,ve=>o.store=ve),qe(be,()=>o.who,ve=>o.who=ve),qe(_e,()=>o.expense,ve=>o.expense=ve),rr(Q,()=>o.status,ve=>o.status=ve),qe(Ge,()=>o.notes,ve=>o.notes=ve),v(e,p),ee()}Je(["click"]);function Kn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:wc};case"animaux":return{displayName:"Viandes et Poissons",icon:Sc};case"legumes":return{displayName:"Fruits et Légumes",icon:Pc};case"sucres":return{displayName:"Sucrées",icon:xc};case"lof":return{displayName:"L.O.F",icon:Rc};case"autres":return{displayName:"Autres",icon:$c};case"epices":return{displayName:"Assaisonnements",icon:Lc};case"frais":return{displayName:"Produits Frais",icon:Jc};default:return{displayName:e,icon:Yr}}}function Yn(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function _a(e,t){let r,n;if(t==="gr."&&e>=1e3){const s=e/1e3;r=jn(s),n="kg"}else if(t==="ml"&&e>=1e3){const s=e/1e3;r=jn(s),n="l"}else r=jn(e),n=t;return`${r} ${n}`}function jn(e){return(Math.round(e*10)/10).toString().replace(/\.0$/,"")}function En(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function ku(e){if(!e)return"";try{return new Date(e).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"})}catch{return e}}function Jn(e){switch(e){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function ts(e){return e?En(e):"-"}function Au(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const s=n.status||"direct",o=n.unit||"unit",i=`${s}_${o}`;if(!r[i]){const l=Jn(s);r[i]={status:s,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Tu(s),deliveryDate:s==="ordered"&&n.deliveryDate?ku(n.deliveryDate):void 0}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t).map(r=>({...r,quantity:_a(r.quantity,r.unit).replace(` ${r.unit}`,"")}))}function Tu(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"Check";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function Mu(e){let t=V(!1),r=V(null);const n=Z(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),te.getEnrichedProductById(e))),s=Z(()=>a(n)?.who??[]),o=Z(()=>a(n)?.stockParsed??null),i=Z(()=>a(n)?.purchases??[]),l=Z(()=>a(n)?.byDate?ql(a(n).byDate):[]),c=je({purchase:{quantity:null,unit:"",store:"",who:Er.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let h=V(!1),f=V(null);Ft(()=>{!a(n)||a(h)||(c.purchase.quantity=a(n).missingQuantityArray[0]?.q??null,c.purchase.unit=a(n).totalNeededArray[0]?.u??"",c.purchase.store=a(n).storeInfo?.storeName??"",c.purchase.who=Er.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=a(n).totalNeededArray[0]?.u??"",c.store.name=a(n).storeInfo?.storeName??"",c.store.comment=a(n).storeInfo?.storeComment??null,c.who=a(n)?.who?[...a(n).who]:[],y(f,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),y(h,!0))});const g=Z(()=>a(f)?{store:JSON.stringify(c.store)!==JSON.stringify(a(f).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(a(f).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?a(o)?c.stock.quantity.toString()!==a(o).quantity||c.stock.unit!==a(o).unit||(c.stock.notes||"")!==(a(o).notes||""):!0:!1}const m=Z(()=>!!(a(f)&&(a(g).store||a(g).stock||a(g).who)));let _=V(null);const $=Z(()=>a(_)?a(i).find(q=>q.$id===a(_))??null:null);async function b(q,I){y(t,!0),y(r,null);try{const j=await q();return I&&E("success",I),j}catch(j){const ae=j instanceof Error?j.message:"Une erreur est survenue";return y(r,ae,!0),E("error",ae),console.error("[ProductModalState]",j),null}finally{y(t,!1)}}function E(q,I){const j=new CustomEvent("toast",{detail:{type:q,message:I}});window.dispatchEvent(j)}async function C(){a(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!te.currentMainId)throw new Error("mainId non disponible");const{quantity:q,unit:I}=Yn(c.purchase.quantity,c.purchase.unit);a(n).isSynced||(console.log(`[ProductModalState] Produit ${a(n).$id} local, création pour purchase...`),await Rt(a(n).$id,{},z=>te.getEnrichedProductById(z)));const j=c.purchase.status||"delivered";let ae=c.purchase.deliveryDate||null;j==="delivered"&&!ae&&(ae=new Date().toISOString()),await co({products:[a(n).$id],mainId:te.currentMainId,unit:I,quantity:q,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:j,orderDate:c.purchase.orderDate||null,deliveryDate:ae}),c.purchase={quantity:a(n).missingQuantityArray[0]?.q??null,unit:a(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function x(q){y(_,q.$id,!0)}function A(){y(_,null)}async function S(q){q.$id&&await b(async()=>{const{quantity:I,unit:j}=Yn(q.quantity,q.unit),ae=q.status||null;let z=q.deliveryDate||null;ae==="delivered"&&!z&&(z=new Date().toISOString()),await uo(q.$id,{unit:j,quantity:I,store:q.store||null,who:q.who||null,notes:q.notes||"",price:q.price||null,status:ae,orderDate:q.orderDate||null,deliveryDate:z}),y(_,null)},"Achat modifié avec succès")}async function T(q){const I=a(i).find(j=>j.$id===q);I&&confirm(`Supprimer cet achat (${I.quantity} ${I.unit}) ?`)&&await b(async()=>{await vo(q)},"Achat supprimé avec succès")}async function P(){a(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const q={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update stock normal...`),await Wn(a(n).$id,JSON.stringify(q))):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création stock avec upsert...`),await Rt(a(n).$id,{stockReel:JSON.stringify(q)},I=>te.getEnrichedProductById(I))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function M(){a(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, suppression stock normal...`),await Wn(a(n).$id,null)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, suppression stock avec upsert...`),await Rt(a(n).$id,{stockReel:null},q=>te.getEnrichedProductById(q)))},"Stock supprimé")}async function D(q){a(n)&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, setWho normal...`),await oo(a(n).$id,q)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création who avec upsert...`),await Rt(a(n).$id,{who:q},I=>te.getEnrichedProductById(I)))},"Volontaires mis à jour")}async function L(q){a(n)&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update store normal...`),await so(a(n).$id,q)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création store avec upsert...`),await Rt(a(n).$id,{store:JSON.stringify(q)},I=>te.getEnrichedProductById(I)))},"Magasin mis à jour")}async function O(q){a(n)&&await b(async()=>{a(n).isSynced?await pa(a(n).$id,q,!0):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création who avec upsert...`),await Rt(a(n).$id,{totalNeededOverride:JSON.stringify(q)},I=>te.getEnrichedProductById(I)))},"Override appliqué")}async function X(){a(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await io(a(n).$id,!0)},"Override supprimé")}async function de(){!a(n)||!a(m)||await b(async()=>{const q={};if(a(g).stock&&c.stock.quantity&&c.stock.unit){const I={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};q.stockReel=JSON.stringify(I)}if(a(g).who&&(q.who=c.who),a(g).store){const I={storeName:c.store.name||"",storeComment:c.store.comment||void 0};q.storeInfo=I}Object.keys(q).length>0&&(await lo(a(n).$id,q,I=>te.getEnrichedProductById(I)),y(f,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return a(t)},get error(){return a(r)},get product(){return a(n)},get recipes(){return a(l)},get whoList(){return a(s)},get stockParsed(){return a(o)},get purchasesList(){return a(i)},get editingPurchaseId(){return a(_)},get editingPurchaseData(){return a($)},forms:c,addPurchase:C,startEditPurchase:x,cancelEditPurchase:A,updateEditedPurchase:S,removePurchase:T,setStock:P,removeStock:M,setWho:D,updateStore:L,setOverride:O,removeOverride:X,saveAllChanges:de,get hasChanges(){return a(g)},get hasAnyChanges(){return a(m)},formatQuantity:_a,formatDate:En}}var Du=w('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),Cu=w('<div class="text-xs text-base-content/60 mt-1"> </div>'),Nu=w('<div class="font-medium"> </div> <!>',1),Iu=w('<pre class="text-xs"> </pre>'),Ru=w('<span class="text-base-content/50 italic">Non défini</span>'),Ou=w('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),qu=w('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function kn(e,t){F(t,!0);let r=ke(t,"title",3,"Événement terminé"),n=ke(t,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),s=ke(t,"showData",3,!0),o=ke(t,"data",3,null),i=ke(t,"dataLabel",3,"");var l=qu(),c=u(l),h=u(c);xo(h,{class:"h-5 w-5 text-warning"});var f=d(h,2);zc(f,{class:"h-4 w-4 text-warning/70"});var g=d(f,2),p=u(g),m=d(c,2),_=u(m),$=d(m,2);{var b=E=>{var C=Ou(),x=u(C);{var A=D=>{var L=Du(),O=u(L);B(()=>U(O,`${i()??""} :`)),v(D,L)};k(x,D=>{i()&&D(A)})}var S=d(x,2),T=u(S);{var P=D=>{var L=pt();B(()=>U(L,o())),v(D,L)},M=D=>{var L=K(),O=N(L);{var X=q=>{var I=pt();B(j=>U(I,j),[()=>o().join(", ")]),v(q,I)},de=q=>{var I=K(),j=N(I);{var ae=W=>{var ne=K(),be=N(ne);{var H=G=>{var oe=Nu(),_e=N(oe),J=u(_e),ce=d(_e,2);{var Q=re=>{var we=Cu(),Ae=u(we);B(()=>U(Ae,o().storeComment)),v(re,we)};k(ce,re=>{o().storeComment&&re(Q)})}B(()=>U(J,o().storeName)),v(G,oe)},Y=G=>{var oe=Iu(),_e=u(oe);B(J=>U(_e,J),[()=>JSON.stringify(o(),null,2)]),v(G,oe)};k(be,G=>{o().storeName?G(H):G(Y,!1)})}v(W,ne)},z=W=>{var ne=Ru();v(W,ne)};k(j,W=>{typeof o()=="object"&&o()!==null?W(ae):W(z,!1)},!0)}v(q,I)};k(O,q=>{Array.isArray(o())&&o().length>0?q(X):q(de,!1)},!0)}v(D,L)};k(T,D=>{typeof o()=="string"||typeof o()=="number"?D(P):D(M,!1)})}v(E,C)};k($,E=>{s()&&o()&&E(b)})}B(()=>{U(p,r()),U(_,n())}),v(e,l),ee()}function ju(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Lu(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Bu(e,t){t().cancelEditPurchase()}var zu=w('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Uu=w('<span class="loading loading-spinner loading-sm"></span>'),Hu=w(`<h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>`,1),Qu=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Wu=w("<th>Actions</th>"),Vu=w('<span class="loading loading-spinner loading-sm"></span>'),Gu=w('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Livré</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Ku=(e,t,r)=>t(a(r)),Yu=(e,t,r)=>t(a(r).$id),Ju=w('<span class="loading loading-spinner loading-sm"></span>'),Zu=w('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),Xu=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),Fu=w('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),ed=w('<div class="space-y-4"><!></div> <!>',1);function td(e,t){F(t,!0);let r=ke(t,"modalState",7),n=ke(t,"isArchiveMode",3,!1);function s(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function o(b){return b.quantity!==null&&b.quantity!==0&&b.unit?.trim()!==""}function i(b){r().removePurchase(b)}function l(b){r().startEditPurchase(b)}var c=ed(),h=N(c),f=u(h);{var g=b=>{kn(b,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},p=b=>{var E=Hu(),C=N(E),x=u(C);Yt(x,{class:"h-5 w-5"});var A=d(C,2),S=u(A),T=d(u(S),2),P=u(T),M=u(P);Yr(M,{class:"h-4 w-4 opacity-50"});var D=d(M,2),L=d(P,2),O=u(L);O.value=O.__value="";var X=d(O);X.value=X.__value="kg";var de=d(X);de.value=de.__value="gr.";var q=d(de);q.value=q.__value="l.";var I=d(q);I.value=I.__value="ml";var j=d(I);j.value=j.__value="unité";var ae=d(j);ae.value=ae.__value="bottes";var z=d(L,2),W=u(z);Lt(W,{class:"h-4 w-4 opacity-50"});var ne=d(W,2),be=d(z,2),H=u(be);Jr(H,{class:"h-4 w-4 opacity-50"});var Y=d(H,2),G=d(be,2),oe=d(u(G),2),_e=d(T,2),J=u(_e),ce=u(J);$o(ce,{class:"h-4 w-4 opacity-50"});var Q=d(ce,2),re=d(_e,2),we=u(re),Ae=u(we),Ne=u(Ae),se=u(Ne);se.value=se.__value="delivered";var ye=d(se);ye.value=ye.__value="ordered";var Me=d(Ae,2),Oe=d(we,2);{var Ge=Pe=>{var $e=zu(),Ue=d(u($e),2);qe(Ue,()=>r().forms.purchase.deliveryDate,ve=>r().forms.purchase.deliveryDate=ve),v(Pe,$e)};k(Oe,Pe=>{r().forms.purchase.status==="ordered"&&Pe(Ge)})}var Ve=d(re,2),ie=u(Ve);ie.__click=[ju,s,r];var xe=u(ie);{var Be=Pe=>{var $e=Uu();v(Pe,$e)},Ke=Pe=>{var $e=pt("Ajouter l'achat");v(Pe,$e)};k(xe,Pe=>{r().loading?Pe(Be):Pe(Ke,!1)})}B(Pe=>{Te(Me,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),ie.disabled=Pe},[()=>r().loading||!s()]),qe(D,()=>r().forms.purchase.quantity,Pe=>r().forms.purchase.quantity=Pe),rr(L,()=>r().forms.purchase.unit,Pe=>r().forms.purchase.unit=Pe),qe(ne,()=>r().forms.purchase.store,Pe=>r().forms.purchase.store=Pe),qe(Y,()=>r().forms.purchase.who,Pe=>r().forms.purchase.who=Pe),qe(oe,()=>r().forms.purchase.price,Pe=>r().forms.purchase.price=Pe),qe(Q,()=>r().forms.purchase.notes,Pe=>r().forms.purchase.notes=Pe),rr(Ne,()=>r().forms.purchase.status,Pe=>r().forms.purchase.status=Pe),v(b,E)};k(f,b=>{n()?b(g):b(p,!1)})}var m=d(h,2);{var _=b=>{var E=Qu(),C=u(E);Yt(C,{class:"mx-auto mb-2 h-12 w-12"}),v(b,E)},$=b=>{var E=Fu(),C=u(E),x=u(C),A=u(x),S=d(u(A),8);{var T=M=>{var D=Wu();v(M,D)};k(S,M=>{n()||M(T)})}var P=d(x);st(P,21,()=>r().purchasesList,M=>M.$id,(M,D,L)=>{var O=K(),X=N(O);{var de=I=>{var j=Gu(),ae=u(j),z=u(ae),W=u(z),ne=d(W,2),be=u(ne);be.value=be.__value="kg";var H=d(be);H.value=H.__value="gr.";var Y=d(H);Y.value=Y.__value="l.";var G=d(Y);G.value=G.__value="ml";var oe=d(G);oe.value=oe.__value="unité";var _e=d(oe);_e.value=_e.__value="bottes";var J=d(ae),ce=u(J),Q=d(J),re=u(Q),we=d(Q),Ae=u(we),Ne=u(Ae);Ne.value=Ne.__value="ordered";var se=d(Ne);se.value=se.__value="delivered";var ye=d(we),Me=u(ye),Oe=d(ye),Ge=u(Oe),Ve=d(Oe),ie=u(Ve),xe=d(Ve),Be=u(xe),Ke=d(xe),Pe=u(Ke),$e=u(Pe);$e.__click=[Lu,r,o];var Ue=u($e);{var ve=Ee=>{var Dt=Vu();v(Ee,Dt)},Se=Ee=>{Zc(Ee,{class:"h-3 w-3"})};k(Ue,Ee=>{r().loading?Ee(ve):Ee(Se,!1)})}var De=d($e,2);De.__click=[Bu,r];var ze=u(De);Mt(ze,{class:"h-3 w-3"}),B(Ee=>$e.disabled=Ee,[()=>r().loading||!o(a(D))]),qe(W,()=>a(D).quantity,Ee=>a(D).quantity=Ee),rr(ne,()=>a(D).unit,Ee=>a(D).unit=Ee),qe(ce,()=>a(D).store,Ee=>a(D).store=Ee),qe(re,()=>a(D).who,Ee=>a(D).who=Ee),rr(Ae,()=>a(D).status,Ee=>a(D).status=Ee),qe(Me,()=>a(D).orderDate,Ee=>a(D).orderDate=Ee),qe(Ge,()=>a(D).deliveryDate,Ee=>a(D).deliveryDate=Ee),qe(ie,()=>a(D).price,Ee=>a(D).price=Ee),qe(Be,()=>a(D).notes,Ee=>a(D).notes=Ee),v(I,j)},q=I=>{var j=Xu(),ae=u(j),z=u(ae),W=d(ae),ne=u(W),be=d(W),H=u(be),Y=d(be),G=u(Y),oe=u(G),_e=d(Y),J=u(_e),ce=d(_e),Q=u(ce),re=d(ce),we=u(re),Ae=d(re),Ne=u(Ae),se=d(Ae);{var ye=Me=>{var Oe=Zu(),Ge=u(Oe),Ve=u(Ge);Ve.__click=[Ku,l,D];var ie=u(Ve);Gn(ie,{class:"h-4 w-4"});var xe=d(Ve,2);xe.__click=[Yu,i,D];var Be=u(xe);{var Ke=$e=>{var Ue=Ju();v($e,Ue)},Pe=$e=>{Mt($e,{class:"h-4 w-4"})};k(Be,$e=>{r().loading?$e(Ke):$e(Pe,!1)})}B(()=>xe.disabled=r().loading),v(Me,Oe)};k(se,Me=>{n()||Me(ye)})}B((Me,Oe,Ge,Ve,ie)=>{U(z,Me),U(ne,a(D).store||"-"),U(H,a(D).who||"-"),Te(G,1,`badge badge-sm ${Oe??""}`),U(oe,Ge),U(J,Ve),U(Q,ie),U(we,a(D).price?`${a(D).price}€`:"-"),U(Ne,a(D).notes||"-")},[()=>_a(a(D).quantity,a(D).unit),()=>Jn(a(D).status).class,()=>Jn(a(D).status).text,()=>ts(a(D).orderDate),()=>ts(a(D).deliveryDate)]),v(I,j)};k(X,I=>{r().editingPurchaseId===a(D).$id?I(de):I(q,!1)})}v(M,O)}),v(b,E)};k(m,b=>{r().purchasesList.length===0?b(_):b($,!1)})}v(e,c),ee()}Je(["click"]);async function rd(e,t){await t()?.removeStock()}var nd=w(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),ad=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},sd=w(`<h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`,1),od=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),id=w('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),ld=w('<span class="loading loading-spinner loading-xs"></span>'),cd=w('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),ud=w('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),dd=w('<div class="space-y-4"><!></div> <!>',1);function vd(e,t){F(t,!0);let r=ke(t,"modalState",7),n=ke(t,"isArchiveMode",3,!1);var s=dd(),o=N(s),i=u(o);{var l=p=>{kn(p,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return r().stockParsed},dataLabel:"Stock actuel"})},c=p=>{var m=sd(),_=N(m),$=u(_);Vn($,{class:"h-5 w-5"});var b=d(_,2),E=u(b),C=u(E),x=u(C),A=d(C,2),S=u(A);Do(S,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(H,Y)=>{var G=nd();v(H,G)},$$slots:{default:!0}});var T=d(A,2),P=u(T),M=u(P);Yr(M,{class:"h-4 w-4 opacity-50"});var D=d(M,2),L=d(P,2),O=u(L);O.value=O.__value="";var X=d(O);X.value=X.__value="kg";var de=d(X);de.value=de.__value="gr.";var q=d(de);q.value=q.__value="l.";var I=d(q);I.value=I.__value="ml";var j=d(I);j.value=j.__value="unité";var ae=d(j);ae.value=ae.__value="bottes";var z=d(T,2),W=u(z),ne=d(z,2),be=u(ne);be.__click=[ad,r],B(H=>{U(x,`Déclarer le stock réel du ${H??""}`),be.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),qe(D,()=>r().forms.stock.quantity,H=>r().forms.stock.quantity=H),rr(L,()=>r().forms.stock.unit,H=>r().forms.stock.unit=H),qe(W,()=>r().forms.stock.notes,H=>r().forms.stock.notes=H),v(p,m)};k(i,p=>{n()?p(l):p(c,!1)})}var h=d(o,2);{var f=p=>{var m=od(),_=u(m);Vn(_,{class:"mx-auto mb-2 h-12 w-12"}),v(p,m)},g=p=>{var m=ud(),_=u(m),$=d(u(_),2),b=u($),E=d(u(b),2),C=u(E),x=d(b,2),A=d(u(x),2),S=u(A),T=d(x,2);{var P=L=>{var O=id(),X=d(u(O),2),de=u(X);B(()=>U(de,r().stockParsed.notes)),v(L,O)};k(T,L=>{r().stockParsed.notes&&L(P)})}var M=d($,2);{var D=L=>{var O=cd(),X=u(O);X.__click=[rd,r];var de=u(X);{var q=j=>{var ae=ld();v(j,ae)},I=j=>{var ae=pt("Supprimer le stock");v(j,ae)};k(de,j=>{r().loading?j(q):j(I,!1)})}B(()=>X.disabled=r().loading),v(L,O)};k(M,L=>{n()||L(D)})}B(L=>{U(C,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),U(S,L)},[()=>En(r().stockParsed.dateTime)]),v(p,m)};k(h,p=>{r().stockParsed?p(g,!1):p(f)})}v(e,s),ee()}Je(["click"]);function fd(e,t,r){t().forms.who=[...t().whoList],y(r,"")}var hd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},pd=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),md=w('<div class="space-y-4"><!></div>');function gd(e,t){F(t,!0);let r=ke(t,"modalState",7),n=ke(t,"isArchiveMode",3,!1),s=V("");const o=Z(()=>{const _=new Set([...te.uniqueWho,...r().forms.who]);return Array.from(_).map($=>({id:$,label:$,selected:r().forms.who.includes($)}))});function i(_){const $=_.trim();$&&!r().forms.who.includes($)&&(r().forms.who=[...r().forms.who,$])}function l(_){r().forms.who=r().forms.who.filter($=>$!==_)}function c(_){r().forms.who.includes(_)?l(_):i(_)}function h(){a(s).trim()&&(i(a(s)),y(s,""))}var f=md(),g=u(f);{var p=_=>{kn(_,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},m=_=>{var $=pd(),b=u($),E=d(u(b),4),C=u(E),x=u(C),A=u(x);Jr(A,{class:"h-4 w-4 opacity-50"});var S=d(A,2);S.__keydown=[hd,h];var T=d(x,2);T.__click=h;var P=u(T);Mo(P,{size:16});var M=d(C,2),D=d(u(M),2);Vr(D,{get items(){return a(o)},onToggleItem:c,showIcon:!0});var L=d(b,2),O=u(L);O.__click=[fd,r,s],B(X=>{S.disabled=r().loading,T.disabled=X,O.disabled=r().loading},[()=>r().loading||!a(s).trim()]),qe(S,()=>a(s),X=>y(s,X)),v(_,$)};k(g,_=>{n()?_(p):_(m,!1)})}v(e,f),ee()}Je(["keydown","click"]);var _d=w('<div class="mb-1 text-xs opacity-70"> </div>'),bd=(e,t,r)=>t(a(r)),yd=w("<button><!> </button>"),wd=w('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function Co(e,t){F(t,!0);let r=ke(t,"maxSuggestions",3,8),n=ke(t,"title",3,"Suggestions :"),s=ke(t,"buttonSize",3,"btn-xs"),o=ke(t,"buttonVariant",3,"btn-soft"),i=ke(t,"disabled",3,!1);const l=Z(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var h=K(),f=N(h);{var g=p=>{var m=wd(),_=u(m);{var $=E=>{var C=_d(),x=u(C);B(()=>U(x,n())),v(E,C)};k(_,E=>{n()&&E($)})}var b=d(_,2);st(b,21,()=>a(l),E=>E.id,(E,C)=>{var x=yd();x.__click=[bd,c,C];var A=u(x);{var S=P=>{var M=K(),D=N(M);or(D,()=>a(C).icon,(L,O)=>{O(L,{class:"h-3 w-3"})}),v(P,M)};k(A,P=>{a(C).icon&&P(S)})}var T=d(A);B(()=>{Te(x,1,`btn ${s()??""} ${o()??""}`),x.disabled=i()||a(C).disabled,Zt(x,"title",a(C).disabled?"Déjà sélectionné":a(C).label),U(T,` ${a(C).label??""}`)}),v(E,x)}),v(p,m)};k(f,p=>{a(l).length>0&&p(g)})}v(e,h),ee()}Je(["click"]);var Sd=(e,t)=>{e.key==="Enter"&&t()},xd=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},Pd=w(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),$d=w('<div class="space-y-4"><!></div>');function Ed(e,t){F(t,!0);let r=ke(t,"modalState",7),n=ke(t,"isArchiveMode",3,!1);const s=Z(()=>r()?.hasChanges?.store||!1);async function o(){if(!a(s))return;const f={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(f)}var i=$d(),l=u(i);{var c=f=>{{let g=Z(()=>r().product?.storeInfo);kn(f,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return a(g)},dataLabel:"Magasin actuel"})}},h=f=>{var g=Pd(),p=u(g),m=d(u(p),4),_=u(m),$=u(_),b=u($);Lt(b,{class:"h-4 w-4 opacity-50"});var E=d(b,2);E.__keydown=[Sd,o];var C=d($,2);{var x=P=>{{let M=Z(()=>te.uniqueStores.map(D=>({id:D,label:D,disabled:D===r().forms.store.name})));Co(P,{get suggestions(){return a(M)},onSuggestionClick:D=>{r().forms.store.name=D.label},buttonVariant:"btn-outline"})}};k(C,P=>{te.uniqueStores.length>0&&P(x)})}var A=d(_,2),S=d(m,2),T=u(S);T.__click=[xd,r],B(()=>T.disabled=r().loading),qe(E,()=>r().forms.store.name,P=>r().forms.store.name=P),qe(A,()=>r().forms.store.comment,P=>r().forms.store.comment=P),v(f,g)};k(l,f=>{n()?f(c):f(h,!1)})}v(e,i),ee()}Je(["keydown","click"]);var kd=w("<fieldset><legend><!> </legend> <!></fieldset>");function Lr(e,t){let r=ke(t,"bgClass",3,"bg-base-100");var n=kd(),s=u(n),o=u(s);{var i=h=>{const f=Z(()=>t.iconComponent);var g=K(),p=N(g);or(p,()=>a(f),(m,_)=>{_(m,{size:16,class:"mr-1"})}),v(h,g)};k(o,h=>{t.iconComponent&&h(i)})}var l=d(o),c=d(s,2);ue(c,()=>t.children??le),B(()=>{Te(n,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Te(s,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),U(l,` ${t.legend??""}`)}),v(e,n)}async function Ad(e,t,r,n,s,o){if(!t.modalState)return;const i={totalOverride:{q:a(r),u:a(n)},comment:a(s)};await t.modalState.setOverride(i),y(o,!1)}async function Td(e,t,r){t.modalState&&(await t.modalState.removeOverride(),y(r,!1))}var Md=w('<div class="stat "><div class="stat-title text-sm">Ancienne quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),Dd=w('<div class="stat"><div class="stat-title text-sm">"Quantité redéfinie manuellement"</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic"></div></div>'),Cd=(e,t)=>y(t,!0),Nd=w('<div class="flex justify-end gap-2"><button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button></div>'),Id=w('<div class="text-error text-sm">Limite de caractères atteinte</div>'),Rd=(e,t)=>y(t,!1),Od=w('<span class="loading loading-spinner loading-sm"></span>'),qd=w('<span class="loading loading-spinner loading-sm"></span>'),jd=w('<div class="card-actions mt-4 justify-end gap-2"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>'),Ld=w(`<div><div class="card-body p-4"><div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <!></div></div>`),Bd=w('<div class="stats not-md:stats-vertical shadow"><!> <div class="stat"><div class="stat-title text-sm">Quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">Recettes actuelles</div></div> <!></div> <!> <!>',1),zd=w('<div class="mb-2 space-y-4"><!></div>');function Ud(e,t){F(t,!0);const r=Z(()=>t.modalState.product?.totalNeededOverrideParsed),n=Z(()=>t.modalState.product?.displayTotalOverride);let s=Z(()=>a(r)?.hasUnresolvedChangedSinceOverride),o=V(!1),i=V(je(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),l=V(je(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),c=V(je(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),h=Z(()=>a(i)>0&&a(l).trim()!=="");var f=K(),g=N(f);{var p=m=>{var _=zd(),$=u(_);Lr($,{legend:"Besoin total",children:(b,E)=>{var C=Bd(),x=N(C),A=u(x);{var S=I=>{var j=Md(),ae=d(u(j),2),z=u(ae);B(()=>U(z,t.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay)),v(I,j)};k(A,I=>{t.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay&&a(s)&&I(S)})}var T=d(A,2),P=d(u(T),2),M=u(P),D=d(T,2);{var L=I=>{var j=Dd(),ae=d(u(j),2),z=u(ae);B(()=>U(z,a(n))),v(I,j)};k(D,I=>{a(n)&&a(r)&&I(L)})}var O=d(x,2);{var X=I=>{var j=Nd(),ae=u(j);ae.__click=[Cd,o],B(()=>ae.disabled=a(o)),v(I,j)};k(O,I=>{t.isArchiveMode||I(X)})}var de=d(O,2);{var q=I=>{var j=Ld(),ae=u(j),z=u(ae),W=u(z),ne=u(W);Vc(ne,{class:"h-4 w-4 opacity-50"});var be=d(ne,2),H=d(W,2),Y=u(H);Y.value=Y.__value="";var G=d(Y);G.value=G.__value="kg";var oe=d(G);oe.value=oe.__value="gr.";var _e=d(oe);_e.value=_e.__value="l.";var J=d(_e);J.value=J.__value="ml";var ce=d(J);ce.value=ce.__value="unité";var Q=d(ce);Q.value=Q.__value="bottes";var re=d(z,2),we=u(re),Ae=d(u(we),2),Ne=d(Ae,2);{var se=Oe=>{var Ge=Id();v(Oe,Ge)};k(Ne,Oe=>{a(c).length>=250&&Oe(se)})}var ye=d(re,2);{var Me=Oe=>{var Ge=jd(),Ve=u(Ge);Ve.__click=[Rd,o];var ie=d(Ve,2);ie.__click=[Td,t,o];var xe=u(ie);{var Be=Se=>{var De=Od();v(Se,De)},Ke=Se=>{var De=pt();B(()=>U(De,`Réinitialiser le total calculé (${t.modalState.product.displayTotalNeeded??""}).`)),v(Se,De)};k(xe,Se=>{t.modalState.loading?Se(Be):Se(Ke,!1)})}var Pe=d(ie,2);Pe.__click=[Ad,t,i,l,c,o];var $e=u(Pe);{var Ue=Se=>{var De=qd();v(Se,De)},ve=Se=>{var De=pt("Appliquer");v(Se,De)};k($e,Se=>{t.modalState.loading?Se(Ue):Se(ve,!1)})}B(()=>{ie.disabled=t.modalState.loading,Pe.disabled=t.modalState.loading||!a(h)}),v(Oe,Ge)};k(ye,Oe=>{t.isArchiveMode||Oe(Me)})}B(()=>Te(j,1,`card border-base-300 border ${a(o)?"bg-base-200":"bg-base-100"}`)),qe(be,()=>a(i),Oe=>y(i,Oe)),rr(H,()=>a(l),Oe=>y(l,Oe)),qe(Ae,()=>a(c),Oe=>y(c,Oe)),v(I,j)};k(de,I=>{a(o)&&I(q)})}B(()=>U(M,t.modalState.product.displayTotalNeeded)),v(b,C)},$$slots:{default:!0}}),v(m,_)};k(g,m=>{t.modalState.product&&m(p)})}v(e,f),ee()}Je(["click"]);var Hd=w('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Qd=w('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Wd=w('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Vd=w('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Gd(e,t){F(t,!0);const r=Z(()=>t.modalState.recipes);var n=Vd(),s=N(n);Ud(s,{get modalState(){return t.modalState},get isArchiveMode(){return t.isArchiveMode}});var o=d(s,2),i=u(o),l=u(i);ga(l,{class:"h-5 w-5"});var c=d(i,2);{var h=g=>{var p=Hd(),m=u(p);Yr(m,{class:"mx-auto mb-2 h-12 w-12"}),v(g,p)},f=g=>{var p=Wd(),m=u(p),_=d(u(m));st(_,21,()=>a(r),Wr,($,b)=>{var E=Qd(),C=u(E),x=u(C),A=d(C),S=u(A),T=d(A),P=u(T);B(M=>{U(x,`${a(b).r??""} (${(a(b).a||"-")??""} c.)`),U(S,`${(a(b).q||a(b).qEq)??""} ${(a(b).u||a(b).uEq)??""}`),U(P,M)},[()=>En(a(b).date)]),v($,E)}),v(g,p)};k(c,g=>{a(r).length===0?g(h):g(f,!1)})}v(e,n),ee()}function Kd(e,t,r){a(t).saveAllChanges().then(()=>{r.onClose()})}var Yd=w('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),Jd=w('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Zd=w('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Xd=(e,t)=>t("recettes"),Fd=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),ev=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),tv=(e,t)=>t("magasins"),rv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),nv=(e,t)=>t("volontaires"),av=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),sv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),ov=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),iv=(e,t)=>t("stock"),lv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),cv=w('<span class="badge badge-sm badge-secondary ml-1">1</span>'),uv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),dv=(e,t)=>t("achats"),vv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),fv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),hv=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),pv=w('<span class="loading loading-spinner loading-sm"></span>'),mv=w('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),gv=w('<div id="product_modal"><div class="modal-box flex fixed top-0 overflow-auto h-lvh w-lvw flex-col md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function _v(e,t){F(t,!0);let r=ke(t,"initialTab",3,"recettes"),n=Z(()=>Mu(t.productId)),s=Z(()=>te.isEventPassed),o=V(je(r()));function i(E){y(o,E,!0)}var l=gv(),c=u(l),h=u(c),f=u(h);{var g=E=>{var C=Jd(),x=N(C),A=u(x),S=d(x,2);{var T=X=>{var de=Yd(),q=u(de);xo(q,{class:"h-4 w-4"}),v(X,de)};k(S,X=>{a(n)&&a(s)&&X(T)})}var P=d(S,2),M=u(P),D=u(M),L=d(M,2),O=d(u(L));B(()=>{U(A,a(n).product?.productName),U(D,a(n).product?.productType),U(O,` ${a(n).product?.displayTotalNeeded??""}`)}),v(E,C)},p=E=>{var C=Zd();v(E,C)};k(f,E=>{a(n)&&a(n).product?E(g):E(p,!1)})}var m=d(f,2);m.__click=function(...E){t.onClose?.apply(this,E)};var _=u(m);Mt(_,{class:"h-4 w-4"});var $=d(h,2);{var b=E=>{var C=mv(),x=N(C),A=u(x);A.__click=[Xd,i];var S=u(A);ga(S,{class:"mr-1 h-5 w-5"});var T=d(S,2);{var P=ie=>{var xe=Fd(),Be=u(xe);B(()=>U(Be,a(n).product?.nbRecipes)),v(ie,xe)},M=ie=>{var xe=ev();v(ie,xe)};k(T,ie=>{a(n).product?.nbRecipes&&a(n).product?.nbRecipes>0?ie(P):ie(M,!1)})}var D=d(A,2);D.__click=[tv,i];var L=u(D);Lt(L,{class:"mr-1 h-5 w-5"});var O=d(L,2);{var X=ie=>{var xe=rv();v(ie,xe)};k(O,ie=>{a(n).hasChanges?.store&&ie(X)})}var de=d(D,2);de.__click=[nv,i];var q=u(de);sn(q,{class:"mr-1 h-5 w-5"});var I=d(q,2);{var j=ie=>{var xe=av();v(ie,xe)},ae=ie=>{var xe=K(),Be=N(xe);{var Ke=$e=>{var Ue=sv(),ve=u(Ue);B(()=>U(ve,a(n).product?.who.length)),v($e,Ue)},Pe=$e=>{var Ue=ov();v($e,Ue)};k(Be,$e=>{a(n).product?.who&&a(n).product?.who.length>0?$e(Ke):$e(Pe,!1)},!0)}v(ie,xe)};k(I,ie=>{a(n).hasChanges?.who?ie(j):ie(ae,!1)})}var z=d(de,2);z.__click=[iv,i];var W=u(z);Vn(W,{class:"mr-1 h-5 w-5"});var ne=d(W,2);{var be=ie=>{var xe=lv();v(ie,xe)},H=ie=>{var xe=K(),Be=N(xe);{var Ke=$e=>{var Ue=cv();v($e,Ue)},Pe=$e=>{var Ue=uv();v($e,Ue)};k(Be,$e=>{a(n).stockParsed?$e(Ke):$e(Pe,!1)},!0)}v(ie,xe)};k(ne,ie=>{a(n).hasChanges?.stock?ie(be):ie(H,!1)})}var Y=d(z,2);Y.__click=[dv,i];var G=u(Y);Yt(G,{class:"mr-1 h-5 w-5"});var oe=d(G,2);{var _e=ie=>{var xe=vv(),Be=u(xe);B(()=>U(Be,a(n).purchasesList.length)),v(ie,xe)},J=ie=>{var xe=fv();v(ie,xe)};k(oe,ie=>{a(n).purchasesList.length>0?ie(_e):ie(J,!1)})}var ce=d(x,2),Q=u(ce);{var re=ie=>{var xe=hv(),Be=u(xe);Mt(Be,{class:"h-4 w-4"});var Ke=d(Be,2),Pe=u(Ke);B(()=>U(Pe,`erreur : ${a(n).error??""}`)),v(ie,xe)};k(Q,ie=>{a(n).error&&ie(re)})}var we=d(Q,2),Ae=u(we);nl(Ae,()=>a(o),ie=>{var xe=K(),Be=N(xe);{var Ke=$e=>{Gd($e,{get modalState(){return a(n)},get isArchiveMode(){return a(s)}})},Pe=$e=>{var Ue=K(),ve=N(Ue);{var Se=ze=>{td(ze,{get modalState(){return a(n)},get isArchiveMode(){return a(s)}})},De=ze=>{var Ee=K(),Dt=N(Ee);{var Cr=$t=>{vd($t,{get modalState(){return a(n)},get isArchiveMode(){return a(s)}})},Nr=$t=>{var ut=K(),Qt=N(ut);{var An=he=>{gd(he,{get modalState(){return a(n)},get isArchiveMode(){return a(s)}})},fe=he=>{var Ce=K(),He=N(Ce);{var Qe=Ze=>{Ed(Ze,{get modalState(){return a(n)},get isArchiveMode(){return a(s)}})};k(He,Ze=>{a(o)==="magasins"&&Ze(Qe)},!0)}v(he,Ce)};k(Qt,he=>{a(o)==="volontaires"?he(An):he(fe,!1)},!0)}v($t,ut)};k(Dt,$t=>{a(o)==="stock"?$t(Cr):$t(Nr,!1)},!0)}v(ze,Ee)};k(ve,ze=>{a(o)==="achats"?ze(Se):ze(De,!1)},!0)}v($e,Ue)};k(Be,$e=>{a(o)==="recettes"?$e(Ke):$e(Pe,!1)})}v(ie,xe)});var Ne=d(ce,2),se=u(Ne);se.__click=function(...ie){t.onClose?.apply(this,ie)};var ye=u(se),Me=d(se,2);Me.__click=[Kd,n,t];var Oe=u(Me);{var Ge=ie=>{var xe=pv();v(ie,xe)},Ve=ie=>{var xe=pt("Tout enregistrer");v(ie,xe)};k(Oe,ie=>{a(n).loading?ie(Ge):ie(Ve,!1)})}B(()=>{Te(A,1,`tab ${a(o)==="recettes"?"tab-active":""}`),Te(D,1,`tab ${a(o)==="magasins"?"tab-active":""}`),Te(de,1,`tab ${a(o)==="volontaires"?"tab-active":""}`),Te(z,1,`tab ${a(o)==="stock"?"tab-active":""}`),Te(Y,1,`tab ${a(o)==="achats"?"tab-active":""}`),U(ye,a(n)?.hasAnyChanges?"Annuler":"Fermer"),Me.disabled=a(n).loading||!a(n).hasAnyChanges}),v(E,C)};k($,E=>{a(n)&&E(b)})}B(()=>Te(l,1,`modal ${(t.productId&&"modal-open")??""}`)),v(e,l),ee()}Je(["click"]);var bv=(e,t,r)=>t(r),yv=w("<button><span> </span> <!></button>"),wv=w('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),Sv=(e,t)=>t(),xv=w('<button class="btn btn-xs btn-link text-primary/80" type="button">Dates à venir</button>'),Pv=(e,t)=>t(),$v=w('<button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button>'),Ev=w('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),kv=w('<div class="flex flex-wrap justify-end gap-2"><!> <!></div>'),Av=w('<div class=" flex flex-wrap gap-1"></div> <!>',1);function Tv(e,t){F(t,!0);let r=ke(t,"availableDates",19,()=>[]),n=ke(t,"currentRange",19,()=>({start:null,end:null})),s=V(je(n().start)),o=V(je(n().end));const i=Z(()=>r().length>0&&a(s)===r()[0]&&a(o)===r()[r().length-1]),l=Z(()=>{if(r().length===0)return!1;const x=new Date;x.setHours(0,0,0,0);const S=[...r()].sort().find(T=>new Date(T)>=x);return S&&a(s)===S&&a(o)===r()[r().length-1]}),c=Z(()=>{if(r().length===0)return!0;const x=new Date(r()[r().length-1]);return x.setHours(23,59,59,999),x<new Date}),h=Z(()=>{if(r().length===0)return!1;const x=new Date;return x.setHours(0,0,0,0),[...r()].some(A=>new Date(A)>=x)});Ft(()=>{y(s,n().start,!0),y(o,n().end,!0)});function f(x){a(s)===x&&a(o)===x?p():new Date(x)<new Date(a(s))?y(s,x,!0):(new Date(x)>new Date(a(o))||y(s,x,!0),y(o,x,!0)),t.onRangeChange(a(s),a(o))}function g(x){return a(i)?"btn-soft":new Date(x)>=new Date(a(s))&&new Date(x)<=new Date(a(o))?"":"btn-dash"}function p(){r().length!==0&&(y(s,r()[0],!0),y(o,r()[r().length-1],!0),t.onRangeChange(a(s),a(o)))}function m(){if(r().length===0)return;const x=new Date;x.setHours(0,0,0,0);const S=[...r()].sort().find(T=>new Date(T)>=x);S&&(y(s,S,!0),y(o,r()[r().length-1],!0),t.onRangeChange(a(s),a(o)))}var _=Av(),$=N(_);st($,22,r,x=>x,(x,A)=>{var S=yv();S.__click=[bv,f,A];var T=u(S),P=u(T),M=d(T,2);{var D=O=>{To(O,{size:16})},L=O=>{var X=K(),de=N(X);{var q=j=>{Eo(j,{size:16})},I=j=>{var ae=K(),z=N(ae);{var W=ne=>{Ic(ne,{size:16})};k(z,ne=>{qn(A)==="cloud"&&ne(W)},!0)}v(j,ae)};k(de,j=>{qn(A)==="moon"?j(q):j(I,!1)},!0)}v(O,X)};k(M,O=>{qn(A)==="sun"?O(D):O(L,!1)})}B((O,X)=>{Te(S,1,`btn btn-sm btn-secondary ${O??""}`),U(P,X)},[()=>g(A),()=>Wl(A)]),v(x,S)});var b=d($,2);{var E=x=>{var A=wv();v(x,A)},C=x=>{var A=kv(),S=u(A);{var T=L=>{var O=xv();O.__click=[Sv,m],v(L,O)};k(S,L=>{a(h)&&!a(l)&&L(T)})}var P=d(S,2);{var M=L=>{var O=$v();O.__click=[Pv,p],v(L,O)},D=L=>{var O=Ev();v(L,O)};k(P,L=>{a(i)?L(D,!1):L(M)})}v(x,A)};k(b,x=>{a(c)?x(E):x(C,!1)})}v(e,_),ee()}Je(["click"]);var Mv=()=>te.clearFilters(),Dv=e=>te.setSearchQuery(e.currentTarget.value),Cv=()=>te.setSearchQuery(""),Nv=()=>te.setGroupBy("none"),Iv=()=>te.setGroupBy("store"),Rv=()=>te.setGroupBy("productType"),Ov=(e,t)=>te.toggleProductType(t),qv=w("<button><!> </button>"),jv=()=>te.toggleTemperature("frais"),Lv=()=>te.toggleTemperature("surgele"),Bv=()=>te.clearTypeAndTemperatureFilters(),zv=w('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),Uv=w('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),Hv=w('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div> <!>',1),Qv=(e,t)=>te.toggleStore(t),Wv=w("<button> </button>"),Vv=()=>te.clearStoreFilters(),Gv=w('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Kv=w('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Yv=(e,t)=>te.toggleWho(t),Jv=w("<button> </button>"),Zv=()=>te.clearWhoFilters(),Xv=w('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),Fv=w('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),ef=w('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function tf(e,t){F(t,!0);const r=Z(()=>te.filters),n=Z(()=>te.uniqueStores),s=Z(()=>te.uniqueWho),o=Z(()=>te.uniqueProductTypes);var i=ef(),l=N(i),c=u(l),h=u(c);So(h,{class:"h-5 w-5"});var f=d(c,2);f.__click=[Mv];var g=u(f);rn(g,{class:"h-4 w-4"});var p=d(l,2),m=u(p),_=d(u(m),2),$=u(_);Xc($,{class:"h-4 w-4"});var b=d($,2);b.__input=[Dv];var E=d(b,2);E.__click=[Cv];var C=u(E);Mt(C,{class:"h-4 w-4"});var x=d(m,2),A=d(u(x),2),S=u(A);S.__change=[Nv];var T=d(S,2);T.__change=[Iv];var P=d(T,2);P.__change=[Rv];var M=d(x,2);{var D=j=>{Lr(j,{legend:"Date incluses",bgClass:"bg-base-100",children:(ae,z)=>{Tv(ae,{get availableDates(){return te.availableDates},get currentRange(){return te.dateRange},onRangeChange:(W,ne)=>te.setDateRange(W,ne)})},$$slots:{default:!0}})};k(M,j=>{te.hasSingleDateEvent||j(D)})}var L=d(M,2);{var O=j=>{Lr(j,{legend:"Types & Température",get iconComponent(){return Fc},children:(ae,z)=>{var W=Hv(),ne=N(W);st(ne,20,()=>a(o),Q=>Q,(Q,re)=>{const we=Z(()=>Kn(re));var Ae=qv();Ae.__click=[Ov,re];var Ne=u(Ae);or(Ne,()=>a(we).icon,(ye,Me)=>{Me(ye,{class:"mr-1 h-5 w-5"})});var se=d(Ne);B(ye=>{Te(Ae,1,`btn btn-sm ${ye??""}`),U(se,` ${a(we).displayName??""}`)},[()=>a(r).selectedProductTypes.length===0?"btn-soft btn-secondary":a(r).selectedProductTypes.includes(re)?"btn-secondary":"btn-dash btn-secondary"]),v(Q,Ae)});var be=d(ne,2),H=u(be);H.__click=[jv];var Y=u(H);ko(Y,{class:"h-5 w-5"});var G=d(H,2);G.__click=[Lv];var oe=u(G);Ao(oe,{class:"h-5 w-5"});var _e=d(be,2);{var J=Q=>{var re=zv();re.__click=[Bv];var we=u(re);rn(we,{size:16}),v(Q,re)},ce=Q=>{var re=Uv();v(Q,re)};k(_e,Q=>{a(r).selectedProductTypes.length>0||a(r).selectedTemperatures.length>0?Q(J):Q(ce,!1)})}B((Q,re)=>{Te(H,1,`btn btn-sm ${Q??""}`),Te(G,1,`btn btn-sm ${re??""}`)},[()=>a(r).selectedTemperatures.length===0?"btn-soft btn-success":a(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(r).selectedTemperatures.length===0?"btn-soft btn-info":a(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),v(ae,W)},$$slots:{default:!0}})};k(L,j=>{a(o).length>0&&j(O)})}var X=d(L,2);{var de=j=>{Lr(j,{legend:"Magasins",get iconComponent(){return Lt},children:(ae,z)=>{var W=Kv(),ne=u(W);st(ne,16,()=>a(n),Y=>Y,(Y,G)=>{var oe=Wv();oe.__click=[Qv,G];var _e=u(oe);B(J=>{Te(oe,1,`btn btn-sm ${J??""}`),U(_e,G)},[()=>a(r).selectedStores.length===0?"btn-soft btn-secondary":a(r).selectedStores.includes(G)?"btn-secondary":"btn-dash btn-secondary"]),v(Y,oe)});var be=d(ne,2);{var H=Y=>{var G=Gv();G.__click=[Vv];var oe=u(G);rn(oe,{size:16}),v(Y,G)};k(be,Y=>{a(r).selectedStores.length>0&&Y(H)})}v(ae,W)},$$slots:{default:!0}})};k(X,j=>{a(n).length>0&&j(de)})}var q=d(X,2);{var I=j=>{Lr(j,{legend:"Qui",get iconComponent(){return Jr},children:(ae,z)=>{var W=Fv(),ne=u(W);st(ne,16,()=>a(s),Y=>Y,(Y,G)=>{var oe=Jv();oe.__click=[Yv,G];var _e=u(oe);B(J=>{Te(oe,1,`btn btn-sm ${J??""}`),U(_e,G)},[()=>a(r).selectedWho.length===0?" btn-soft btn-secondary":a(r).selectedWho.includes(G)?" btn-secondary":"btn-dash btn-secondary"]),v(Y,oe)});var be=d(ne,2);{var H=Y=>{var G=Xv();G.__click=[Zv];var oe=u(G);rn(oe,{size:16}),v(Y,G)};k(be,Y=>{a(r).selectedWho.length>0&&Y(H)})}v(ae,W)},$$slots:{default:!0}})};k(q,j=>{a(s).length>0&&j(I)})}B(()=>{f.disabled=!te.hasFilters,vl(b,a(r).searchQuery),E.disabled=!a(r).searchQuery,In(S,a(r).groupBy==="none"),In(T,a(r).groupBy==="store"),In(P,a(r).groupBy==="productType")}),v(e,i),ee()}Je(["click","input","change"]);var rf=w('<div class="tooltip text-xs font-normal"><!></div>');function nf(e,t){let r=ke(t,"iconSize",3,24),n=t.icon||void 0;var s=rf(),o=u(s);{var i=l=>{n(l,{get size(){return r()},class:`align-top
`})};k(o,l=>{t.icon&&l(i)})}B(()=>Zt(s,"data-tip",t.tip)),v(e,s)}var af=w('<div class="text-primary-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),sf=w('du <span class="font-semibold"> </span> au <span class="font-semibold"> </span>',1),of=w('le <span class="font-semibold"> </span>',1),lf=(e,t,r)=>t.onOpenGroupEditModal("store",a(r).map(n=>n.data.$id),a(r).map(n=>n.data)),cf=(e,t,r)=>t.onOpenGroupEditModal("who",a(r).map(n=>n.data.$id),a(r).map(n=>n.data)),uf=(e,t,r)=>t.onOpenGroupPurchaseModal(a(r).map(n=>n.data)),df=w(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),vf=w('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),ff=w('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 font-semibold @md:min-w-48"><!></div> <div class="text-primary-content"><!></div> <!></div>'),hf=(e,t,r)=>t.onOpenModal(a(r).$id,"recettes"),pf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"recettes"),mf=w('<div class="text-base-content/60 text-sm font-normal"> </div>'),gf=w('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),_f=w('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),bf=w('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),yf=w('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),wf=w('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),Sf=w('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),xf=(e,t,r)=>t.onOpenModal(a(r).$id,"magasins"),Pf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"magasins"),$f=w('<div class="ml-1"><!></div>'),Ef=w('<div class="ml-1"> </div> <!>',1),kf=w('<div class="ml-1 text-sm font-medium">?</div>'),Af=(e,t,r)=>t.onOpenModal(a(r).$id,"volontaires"),Tf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"volontaires"),Mf=w('<span class="text-base-content/50 text-xs"> </span>'),Df=w('<div class="ml-1 flex gap-1"> <!></div>'),Cf=w('<div class="ml-1 text-sm font-medium">?</div>'),Nf=w('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),If=w('<div class="flex items-center gap-1 text-sm"><!> </div>'),Rf=w('<div class="flex items-center gap-1 text-sm"><!> </div>'),Of=w('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),qf=(e,t,r)=>t.onOpenModal(a(r).$id,"recettes"),jf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"recettes"),Lf=w('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),Bf=w("<span> </span>"),zf=w('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),Uf=(e,t,r,n)=>{e.stopPropagation(),t.onQuickValidation(a(r),a(n))},Hf=w('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><div class="cart-icon"></div> <span class="text-xs"> </span> <!></button>'),Qf=w(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),Wf=(e,t,r)=>t.onOpenModal(a(r).$id,"achats"),Vf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"achats"),Gf=w('<span class="text-xs opacity-75"> </span>'),Kf=w('<div><div class="flex items-center gap-1"><!> <span class="text-sm font-medium text-nowrap"> </span></div> <!></div>'),Yf=w('<span class="text-base-content/50 text-xs italic">aucun</span>'),Jf=w('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap justify-end gap-1.5"><!> <!></div></div></div></div></div>'),Zf=w('<!> <div class="space-y-1"></div>',1),Xf=w('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Ff=w('<div class="space-y-4 rounded-lg"></div> <!>',1);function eh(e,t){F(t,!0);const r={Package:Yr,MessageCircleQuestionMark:Qc,ShoppingCart:Yt,Clock:Nc,CircleCheck:Tc,CircleX:Mc,ClipboardCheck:Dc,PackageCheck:Wc,Check:kr},n=Z(()=>te.groupedFilteredProducts),s=Z(()=>te.filters),o=Z(()=>Ia(te.dateRange.start)),i=Z(()=>Ia(te.dateRange.end));var l=Ff(),c=N(l);st(c,21,()=>Object.entries(a(n)),([g,p])=>g,(g,p)=>{var m=Z(()=>is(a(p),2));let _=()=>a(m)[0];const b=Z(()=>a(m)[1]);var E=Zf(),C=N(E);{var x=S=>{const T=Z(()=>Kn(_()));var P=ff(),M=u(P),D=u(M);{var L=z=>{var W=pt();B(()=>U(W,`🏪 ${_()??""} (${a(b).length??""})`)),v(z,W)},O=z=>{var W=K(),ne=N(W);{var be=Y=>{var G=af(),oe=u(G);or(oe,()=>a(T).icon,(re,we)=>{we(re,{class:"h-4 w-4"})});var _e=d(oe,2),J=u(_e),ce=d(_e,2),Q=u(ce);B(()=>{U(J,a(T).displayName),U(Q,`(${a(b).length??""})`)}),v(Y,G)},H=Y=>{var G=pt();B(()=>U(G,`📦 ${_()??""} (${a(b).length??""})`)),v(Y,G)};k(ne,Y=>{a(s).groupBy==="productType"?Y(be):Y(H,!1)},!0)}v(z,W)};k(D,z=>{a(s).groupBy==="store"?z(L):z(O,!1)})}var X=d(M,2),de=u(X);{var q=z=>{var W=sf(),ne=d(N(W)),be=u(ne),H=d(ne,2),Y=u(H);B(()=>{U(be,a(o)),U(Y,a(i))}),v(z,W)},I=z=>{var W=of(),ne=d(N(W)),be=u(ne);B(()=>U(be,a(o))),v(z,W)};k(de,z=>{te.dateRange.start!==te.dateRange.end?z(q):z(I,!1)})}var j=d(X,2);{var ae=z=>{var W=vf(),ne=u(W);ne.__click=[lf,t,b];var be=u(ne);Lt(be,{size:16});var H=d(be,4);Gn(H,{size:16});var Y=d(ne,2);Y.__click=[cf,t,b];var G=u(Y);sn(G,{size:16});var oe=d(G,4);Gn(oe,{size:16});var _e=d(Y,2);{var J=ce=>{var Q=df();Q.__click=[uf,t,b];var re=u(Q);Yt(re,{size:16});var we=d(re,4);Fa(we,{size:16}),v(ce,Q)};k(_e,ce=>{a(b).some(Q=>Q.data.displayMissingQuantity!=="✅ Complet")&&ce(J)})}v(z,W)};k(j,z=>{te.isEventPassed||z(ae)})}v(S,P)};k(C,S=>{_()!==""&&S(x)})}var A=d(C,2);st(A,21,()=>a(b),S=>S.data.$id,(S,T)=>{const P=Z(()=>a(T).data),M=Z(()=>a(T).stats),D=Z(()=>Kn(a(P).productType)),L=Z(()=>Au(a(P).purchases||[])),O=Z(()=>a(P).totalNeededOverrideParsed);var X=Jf(),de=u(X),q=u(de),I=u(q);I.__click=[hf,t,P],I.__keydown=[pf,t,P];var j=u(I),ae=u(j);or(ae,()=>a(D).icon,(fe,he)=>{he(fe,{class:"text-base-content/80 h-4 w-4"})});var z=d(ae),W=d(z);{var ne=fe=>{var he=mf(),Ce=u(he);B(()=>U(Ce,`Ancien: ${a(P).previousNames[0]??""}`)),v(fe,he)};k(W,fe=>{a(P).previousNames&&a(P).previousNames.length>0&&fe(ne)})}var be=d(j,2),H=u(be);{var Y=fe=>{var he=gf(),Ce=u(he);ko(Ce,{class:"text-success h-4 w-4"}),v(fe,he)};k(H,fe=>{a(P).pFrais&&fe(Y)})}var G=d(H,2);{var oe=fe=>{var he=_f(),Ce=u(he);Ao(Ce,{class:"text-info h-4 w-4"}),v(fe,he)};k(G,fe=>{a(P).pSurgel&&fe(oe)})}var _e=d(be,2);{var J=fe=>{var he=bf(),Ce=u(he);Po(Ce,{class:"h-4 w-4 animate-spin"}),v(fe,he)};k(_e,fe=>{a(P).status==="isSyncing"&&fe(J)})}var ce=d(_e,2);{var Q=fe=>{var he=Sf(),Ce=u(he);st(Ce,20,()=>a(M).concernedDates,He=>He,(He,Qe)=>{const Ze=Z(()=>a(M).recipesByDate.get(Qe)||[]);var Xe=K(),We=N(Xe);{var gt=nt=>{var dt=yf(),Fe=u(dt),vt=u(Fe);B((Nt,Ir)=>{Zt(dt,"data-tip",Nt),U(vt,Ir)},[()=>a(Ze).map(Nt=>Nt.r).join(", "),()=>new Date(Qe).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),v(nt,dt)},Ct=nt=>{var dt=wf(),Fe=u(dt);B(vt=>U(Fe,vt),[()=>new Date(Qe).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),v(nt,dt)};k(We,nt=>{a(Ze).length>0?nt(gt):nt(Ct,!1)})}v(He,Xe)}),v(fe,he)};k(ce,fe=>{a(M).concernedDates.length>0&&fe(Q)})}var re=d(I,2);{var we=fe=>{var he=Nf(),Ce=u(he);Ce.__click=[xf,t,P],Ce.__keydown=[Pf,t,P];var He=u(Ce);Lt(He,{size:18});var Qe=d(He,2);{var Ze=Fe=>{var vt=Ef(),Nt=N(vt),Ir=u(Nt),Tn=d(Nt,2);{var It=pr=>{var Zr=$f(),Io=u(Zr);nf(Io,{get tip(){return a(P).storeInfo.storeComment},get icon(){return Hc},iconSize:14}),v(pr,Zr)};k(Tn,pr=>{a(P).storeInfo?.storeComment&&pr(It)})}B(()=>U(Ir,a(P).storeInfo.storeName)),v(Fe,vt)},Xe=Fe=>{var vt=kf();v(Fe,vt)};k(Qe,Fe=>{a(P).storeInfo?.storeName?Fe(Ze):Fe(Xe,!1)})}var We=d(Ce,2);We.__click=[Af,t,P],We.__keydown=[Tf,t,P];var gt=u(We);sn(gt,{size:18});var Ct=d(gt,2);{var nt=Fe=>{var vt=Df(),Nt=u(vt),Ir=d(Nt);{var Tn=It=>{var pr=Mf(),Zr=u(pr);B(()=>U(Zr,`+${a(P).who.length-2}`)),v(It,pr)};k(Ir,It=>{a(P).who.length>2&&It(Tn)})}B(It=>U(Nt,`${It??""} `),[()=>a(P).who.slice(0,2).map(It=>It.slice(0,3)).join(" | ")]),v(Fe,vt)},dt=Fe=>{var vt=Cf();v(Fe,vt)};k(Ct,Fe=>{a(P).who&&a(P).who.length>0?Fe(nt):Fe(dt,!1)})}B(()=>{Te(Ce,1,`btn btn-soft btn-sm group relative ${a(P).storeInfo?.storeName?"btn-success":""}`),Te(We,1,`btn btn-sm btn-soft group relative ${a(P).who&&a(P).who?.length>0?"btn-success":""}`)}),v(fe,he)},Ae=fe=>{var he=Of(),Ce=u(he);{var He=Xe=>{var We=If(),gt=u(We);Lt(gt,{size:16});var Ct=d(gt);B(()=>U(Ct,` ${a(P).storeInfo.storeName??""}`)),v(Xe,We)};k(Ce,Xe=>{a(P).storeInfo?.storeName&&Xe(He)})}var Qe=d(Ce,2);{var Ze=Xe=>{var We=Rf(),gt=u(We);sn(gt,{size:16});var Ct=d(gt);B(nt=>U(Ct,` ${nt??""}`),[()=>a(P).who.join(", ")]),v(Xe,We)};k(Qe,Xe=>{a(P).who&&a(P).who.length>0&&Xe(Ze)})}v(fe,he)};k(re,fe=>{te.isEventPassed?fe(Ae,!1):fe(we)})}var Ne=d(q,2),se=u(Ne);se.__click=[qf,t,P],se.__keydown=[jf,t,P];var ye=u(se),Me=u(ye),Oe=u(Me);Bc(Oe,{class:"h-4 w-4"});var Ge=d(Me,2),Ve=u(Ge),ie=u(Ve);{var xe=fe=>{var he=Lf(),Ce=u(he),He=u(Ce),Qe=d(Ce,2);Cc(Qe,{class:"h-4 w-4"});var Ze=d(Qe);B(()=>{U(He,a(M).formattedQuantities),U(Ze,` ${a(O).totalOverride.q??""}
                          ${a(O).totalOverride.u??""}`)}),v(fe,he)},Be=fe=>{var he=Bf(),Ce=u(he);B(()=>U(Ce,a(M).formattedQuantities)),v(fe,he)};k(ie,fe=>{a(O)?.totalOverride?fe(xe):fe(Be,!1)})}var Ke=d(Ve,2);{var Pe=fe=>{var he=zf(),Ce=u(he),He=u(Ce),Qe=d(He);ga(Qe,{class:"h-3 w-3"});var Ze=d(Ce,2),Xe=u(Ze),We=d(Xe);eu(We,{class:"h-3 w-3"}),B(()=>{U(He,`${a(M).nbRecipes??""} `),U(Xe,`${a(M).totalAssiettes??""} `)}),v(fe,he)};k(Ke,fe=>{(a(M).nbRecipes||a(M).totalAssiettes)&&fe(Pe)})}var $e=d(ye,2);{var Ue=fe=>{var he=Hf();he.__click=[Uf,t,P,M];var Ce=d(u(he),2),He=u(Ce),Qe=d(Ce,2);{var Ze=We=>{kc(We,{size:18})},Xe=We=>{Ac(We,{size:18})};k(Qe,We=>{Er.isMobile?We(Ze):We(Xe,!1)})}B(()=>{Zt(he,"title",`Acheter le manquant (${a(M).formattedMissingQuantities??""})`),U(He,a(M).formattedMissingQuantities)}),v(fe,he)},ve=fe=>{var he=K(),Ce=N(he);{var He=Qe=>{Fa(Qe,{size:24,class:"text-success ms-auto"})};k(Ce,Qe=>{te.isEventPassed||Qe(He)},!0)}v(fe,he)};k($e,fe=>{!te.isEventPassed&&a(M).hasMissing?fe(Ue):fe(ve,!1)})}var Se=d($e,2);{var De=fe=>{var he=Qf(),Ce=u(he);Ec(Ce,{size:18}),v(fe,he)};k(Se,fe=>{!te.isEventPassed&&a(O)?.hasUnresolvedChangedSinceOverride&&fe(De)})}var ze=d(se,2);ze.__click=[Wf,t,P],ze.__keydown=[Vf,t,P];var Ee=u(ze),Dt=u(Ee),Cr=u(Dt);Yt(Cr,{class:"h-4 w-4"});var Nr=d(Dt,2),$t=d(Ee,2),ut=u($t);st(ut,17,()=>a(L),Wr,(fe,he)=>{const Ce=Z(()=>r[a(he).icon]);var He=Kf(),Qe=u(He),Ze=u(Qe);or(Ze,()=>a(Ce),(nt,dt)=>{dt(nt,{class:"h-4 w-4"})});var Xe=d(Ze,2),We=u(Xe),gt=d(Qe,2);{var Ct=nt=>{var dt=Gf(),Fe=u(dt);B(()=>U(Fe,`livré le: ${a(he).deliveryDate??""}`)),v(nt,dt)};k(gt,nt=>{a(he).deliveryDate&&nt(Ct)})}B(()=>{Te(He,1,`badge badge-outline flex h-fit flex-col items-center gap-1 py-1 ${a(he).badgeClass??""}`),U(We,`${a(he).quantity??""}
                          ${a(he).unit??""}`)}),v(fe,He)});var Qt=d(ut,2);{var An=fe=>{var he=Yf();v(fe,he)};k(Qt,fe=>{a(L).length===0&&fe(An)})}B(()=>{Te(X,1,`card bg-base-100 border-base-300 ${a(P).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),U(z,`${a(P).productName??""} `),Te(Ve,1,`text-base font-bold ${a(M).hasMissing&&!te.isEventPassed?"text-error":"text-success"}`),Te(Nr,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${te.isEventPassed?"":"group-hover:opacity-100"} sm:opacity-0`)}),v(S,X)}),v(g,E)});var h=d(c,2);{var f=g=>{var p=Xf();v(g,p)};k(h,g=>{Object.values(a(n)).flat().length===0&&g(f)})}v(e,l),ee()}Je(["click","keydown"]);async function th(e,t,r,n,s,o,i,l,c){if(!(!a(t)||a(r))){y(n,null),y(s,null);try{const h=a(o).map(m=>m.id),f=i.products.filter(m=>h.includes(m.$id));te.setSyncStatus(h,!0),i.onClose();const g={storeName:a(l).trim(),storeComment:a(c).trim()},p=await go(h,f,g);if(y(s,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(h){const f=h instanceof Error?h.message:"Erreur inconnue";y(n,f,!0),console.error("[StoreEditModal] Erreur mise à jour:",h),te.clearSyncStatus()}finally{y(r,!1)}}}function rs(e,t,r){a(t)||r.onClose()}var rh=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),nh=(e,t)=>y(t,"empty"),ah=(e,t)=>y(t,"all"),sh=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),oh=w("<!> ",1),ih=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function lh(e,t){F(t,!0);let r=V(!1),n=V(null),s=V(null),o=V(je(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=V(je(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=V(je({})),c=V("empty");Ft(()=>{const J={};t.products.forEach(ce=>{t.productIds.includes(ce.$id)&&(a(c)==="empty"?J[ce.$id]=!ce.storeInfo||!ce.storeInfo.storeName:J[ce.$id]=!0)}),y(l,J,!0)});const h=Z(()=>t.products.map(J=>({id:J.$id,label:J.productName,title:J.productName,selected:a(l)[J.$id]}))),f=Z(()=>a(h).filter(J=>J.selected)),g=Z(()=>`Attribuer un magasin (${a(f).length} produits sélectionnés)`),p=Z(()=>a(f).length===0?!1:a(o).trim().length>0);function m(J){a(l)[J]=!a(l)[J]}var _=ih(),$=u(_),b=u($),E=u(b),C=u(E),x=d(E,2);x.__click=[rs,r,t];var A=u(x);Mt(A,{class:"h-4 w-4"});var S=d(b,2),T=u(S);{var P=J=>{var ce=rh(),Q=u(ce);$n(Q,{class:"h-4 w-4"});var re=d(Q,2),we=u(re);B(()=>U(we,a(n))),v(J,ce)};k(T,J=>{a(n)&&J(P)})}var M=d(T,2),D=u(M),L=u(D),O=u(L);Lt(O,{class:"h-4 w-4 opacity-50"});var X=d(O,2),de=d(L,2);{let J=Z(()=>te.uniqueStores.map(ce=>({id:ce,label:ce,disabled:ce===a(o)})));Co(de,{get suggestions(){return a(J)},onSuggestionClick:ce=>{y(o,ce.label,!0)},title:"Suggestions de magasins :"})}var q=d(D,2),I=u(q),j=d(M,2),ae=d(u(j),2),z=u(ae);z.__click=[nh,c];var W=d(z,2);W.__click=[ah,c];var ne=d(ae,2);Vr(ne,{get items(){return a(h)},onToggleItem:m,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var be=d(S,2),H=u(be);H.__click=[rs,r,t];var Y=d(H,2);Y.__click=[th,p,r,n,s,f,t,o,i];var G=u(Y);{var oe=J=>{var ce=sh();v(J,ce)},_e=J=>{var ce=oh(),Q=N(ce);kr(Q,{class:"h-4 w-4"});var re=d(Q);B(()=>U(re,` Appliquer à ${a(f).length??""} produit(s)`)),v(J,ce)};k(G,J=>{a(r)?J(oe):J(_e,!1)})}B(()=>{U(C,a(g)),x.disabled=a(r),X.disabled=a(r),I.disabled=a(r),Te(z,1,`tab ${a(c)==="empty"?"tab-active":""}`),Te(W,1,`tab ${a(c)==="all"?"tab-active":""}`),H.disabled=a(r),Y.disabled=a(r)||!a(p)}),qe(X,()=>a(o),J=>y(o,J)),qe(I,()=>a(i),J=>y(i,J)),v(e,_),ee()}Je(["click"]);async function ch(e,t,r,n,s,o,i,l){if(!(!a(t)||a(r))){y(n,null),y(s,null);try{const c=a(o).map(g=>g.id),h=i.products.filter(g=>c.includes(g.$id));te.setSyncStatus(c,!0),i.onClose();const f=await _o(c,h,a(l),"replace");if(y(s,f,!0),f.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${f.updatedCount} produits modifiés`),i.onSuccess?.(f);else throw new Error(f.error||"Erreur lors de la mise à jour")}catch(c){const h=c instanceof Error?c.message:"Erreur inconnue";y(n,h,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),te.clearSyncStatus()}finally{y(r,!1)}}}function ns(e,t,r){a(t)||r.onClose()}var uh=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),dh=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},vh=(e,t)=>y(t,"empty"),fh=(e,t)=>y(t,"all"),hh=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),ph=w("<!> ",1),mh=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function gh(e,t){F(t,!0);let r=V(!1),n=V(null),s=V(null),o=V(je([])),i=V(""),l=V("empty"),c=V(je({}));Ft(()=>{const se={};t.products.forEach(ye=>{t.productIds.includes(ye.$id)&&(a(l)==="empty"?se[ye.$id]=!ye.who||ye.who.length===0:se[ye.$id]=!0)}),y(c,se,!0)});const h=Z(()=>t.products.map(se=>({id:se.$id,label:se.productName,title:se.productName,selected:a(c)[se.$id]}))),f=Z(()=>a(h).filter(se=>se.selected)),g=Z(()=>{const se=new Set([...te.uniqueWho,...a(o)]);return Array.from(se).map(ye=>({id:ye,label:ye,selected:a(o).includes(ye)}))}),p=Z(()=>`Gérer les volontaires (${a(f).length} produits sélectionnés)`),m=Z(()=>a(f).length===0?!1:a(o).length>0);function _(se){const ye=se.trim();ye&&!a(o).includes(ye)&&y(o,[...a(o),ye],!0)}function $(se){y(o,a(o).filter(ye=>ye!==se),!0)}function b(se){a(o).includes(se)?$(se):_(se)}function E(){a(i).trim()&&(_(a(i)),y(i,""))}function C(se){a(c)[se]=!a(c)[se]}var x=mh(),A=u(x),S=u(A),T=u(S),P=u(T),M=d(T,2);M.__click=[ns,r,t];var D=u(M);Mt(D,{class:"h-4 w-4"});var L=d(S,2),O=u(L);{var X=se=>{var ye=uh(),Me=u(ye);$n(Me,{class:"h-4 w-4"});var Oe=d(Me,2),Ge=u(Oe);B(()=>U(Ge,a(n))),v(se,ye)};k(O,se=>{a(n)&&se(X)})}var de=d(O,2),q=u(de),I=u(q),j=u(I),ae=u(j);Jr(ae,{class:"h-4 w-4 opacity-50"});var z=d(ae,2);z.__keydown=[dh,E];var W=d(j,2);W.__click=E;var ne=u(W);Mo(ne,{size:16});var be=d(I,2),H=d(u(be),2);Vr(H,{get items(){return a(g)},onToggleItem:b,showIcon:!0});var Y=d(de,2),G=d(u(Y),2),oe=u(G);oe.__click=[vh,l];var _e=d(oe,2);_e.__click=[fh,l];var J=d(G,2);Vr(J,{get items(){return a(h)},onToggleItem:C,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var ce=d(L,2),Q=u(ce);Q.__click=[ns,r,t];var re=d(Q,2);re.__click=[ch,m,r,n,s,f,t,o];var we=u(re);{var Ae=se=>{var ye=hh();v(se,ye)},Ne=se=>{var ye=ph(),Me=N(ye);kr(Me,{class:"h-4 w-4"});var Oe=d(Me);B(()=>U(Oe,` Appliquer à ${a(f).length??""} produit(s)`)),v(se,ye)};k(we,se=>{a(r)?se(Ae):se(Ne,!1)})}B(se=>{U(P,a(p)),M.disabled=a(r),z.disabled=a(r),W.disabled=se,Te(oe,1,`tab ${a(l)==="empty"?"tab-active":""}`),Te(_e,1,`tab ${a(l)==="all"?"tab-active":""}`),Q.disabled=a(r),re.disabled=a(r)||!a(m)},[()=>a(r)||!a(i).trim()]),qe(z,()=>a(i),se=>y(i,se)),v(e,x),ee()}Je(["click","keydown"]);var _h=w("<div><!></div>"),bh=w('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function yh(e,t){F(t,!0);let r=V(!1),n=ke(t,"width",3,"80"),s=ke(t,"bgClass",3,"bg-base-300");const o=Z(()=>"w-"+n());var i=K(),l=N(i);{var c=f=>{var g=_h(),p=u(g);ue(p,()=>t.children??le),B(()=>Te(g,1,`${s()??""} ${(a(o)?a(o):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),v(f,g)},h=f=>{var g=bh(),p=N(g),m=u(p),_=d(m,2),$=d(u(_),2),b=u($);ue(b,()=>t.children??le);var E=d(p,2),C=u(E),x=u(C);So(x,{class:"h-6 w-6"}),pl(m,()=>a(r),A=>y(r,A)),v(f,g)};k(l,f=>{Er.isMobile?f(h,!1):f(c)})}v(e,i),ee()}function wh(){}var Sh=w('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function xh(e,t){F(t,!0);const r="100",n=Z(()=>te.stats);let s=V(null),o=V("recettes"),i=V(!1),l=V(!1),c=V(je([])),h=V(je([])),f=V(!1),g=V(je([]));function p(H,Y="recettes"){y(o,Y,!0),y(s,H,!0)}function m(){y(s,null)}function _(H,Y,G){y(c,Y,!0),y(h,G,!0),y(H==="who"?i:l,!0)}function $(H){(!H||H==="who")&&y(i,!1),(!H||H==="store")&&y(l,!1),y(c,[],!0),y(h,[],!0)}function b(H){console.log(`[ProductsTable] Modification groupée réussie: ${H.updatedCount} produits`)}function E(H){const Y=H.filter(G=>G.displayMissingQuantity!=="✅ Complet"&&G.missingQuantityArray&&G.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${H.length} produits reçus → ${Y.length} produits avec quantités manquantes`),y(g,Y,!0),y(f,!0)}function C(){y(f,!1),y(g,[],!0)}function x(){console.log("[ProductsTable] Achat groupé créé avec succès"),C()}async function A(H,Y){try{if(!te.currentMainId)throw new Error("mainId non disponible");const G=Y.missingQuantities||[];if(G.length===0){console.log("Aucune quantité manquante à valider pour ce produit dans cette période");return}const oe=G.filter(J=>J.q<0).map(J=>({...J,q:Math.abs(J.q)})).map(J=>{const{quantity:ce,unit:Q}=Yn(J.q,J.u);return{q:ce,u:Q}});let _e=H.$id;H.isSynced||(console.log(`[ProductsTable] Produit ${H.$id} local, création pour validation rapide...`),_e=(await Rt(H.$id,{},ce=>te.getEnrichedProductById(ce))).$id,console.log(`[ProductsTable] Produit sync créé: ${_e}`)),await bo(te.currentMainId,_e,oe,{store:H.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${H.productName}`)}catch(G){console.error("[ProductsTable] Erreur validation rapide:",G),alert("Erreur lors de la validation rapide: "+G.message)}}var S=Sh(),T=N(S),P=u(T),M=u(P),D=u(M);jc(D,{class:"mr-1 h-4 w-4"});var L=d(D),O=d(M,2);O.__click=[wh];var X=u(O);Kc(X,{class:"mr-1 h-4 w-4"});var de=d(P,2);yh(de,{width:r,children:(H,Y)=>{tf(H,{})},$$slots:{default:!0}});var q=d(de,2);eh(q,{onOpenModal:p,onOpenGroupEditModal:_,onOpenGroupPurchaseModal:E,onQuickValidation:A});var I=d(T,2);{let H=Z(()=>a(s)||"");_v(I,{get productId(){return a(H)},get initialTab(){return a(o)},onClose:m})}var j=d(I,2);{var ae=H=>{gh(H,{get productIds(){return a(c)},get products(){return a(h)},onClose:()=>$("who"),onSuccess:b})};k(j,H=>{a(i)&&H(ae)})}var z=d(j,2);{var W=H=>{lh(H,{get productIds(){return a(c)},get products(){return a(h)},onClose:()=>$("store"),onSuccess:b})};k(z,H=>{a(l)&&H(W)})}var ne=d(z,2);{var be=H=>{Eu(H,{get products(){return a(g)},onClose:C,onSuccess:x})};k(ne,H=>{a(f)&&H(be)})}B(()=>{Te(T,1,`space-y-6 ${Er.isMobile?"":"ml-100"}`),U(L,` ${a(n).total??""}`)}),v(e,S),ee()}Je(["click"]);pi();var Ph=w('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function $h(e){var t=Ph();v(e,t)}var Eh=w('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function kh(e,t){var r=Eh(),n=d(u(r),2),s=d(u(n),2),o=u(s);B(()=>U(o,t.message)),v(e,r)}var Ah=w('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Th(e,t){var r=Ah(),n=u(r),s=u(n);$n(s,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(s,2),i=d(u(o),2),l=u(i);B(()=>U(l,t.message||"Erreur inconnue")),v(e,r)}function Mh(e){e.stopPropagation()}var Dh=(e,t)=>e.key==="Escape"&&t(),Ch=w('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),Nh=w('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),Ih=(e,t)=>y(t,!1),Rh=w('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),Oh=(e,t)=>y(t,!0),qh=(e,t)=>y(t,!1),jh=w(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),Lh=(e,t)=>y(t,!0),Bh=w('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),zh=w('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function Uh(e,t){F(t,!0);let r=ke(t,"onClose",3,()=>{}),n=ke(t,"onAuthSuccess",3,()=>{}),s=V(!0),o=V(!1),i=V(""),l=V(""),c=V(""),h=V(""),f=V(""),g=V(""),p=V(""),m=V(""),_=V(!1);function $(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function b(z){if(z.preventDefault(),!a(c)||!a(h)){y(i,"Veuillez remplir tous les champs");return}y(o,!0),y(i,"");try{await(await $().getAccount()).createEmailPasswordSession(a(c),a(h)),y(l,"Connexion réussie !"),setTimeout(()=>{n()()},1e3)}catch(W){console.error("Erreur de connexion:",W),y(i,W.message||"Erreur lors de la connexion",!0)}finally{y(o,!1)}}async function E(z){if(z.preventDefault(),!a(f)||!a(g)||!a(p)){y(i,"Veuillez remplir tous les champs");return}y(o,!0),y(i,"");try{const ne=await $().getAccount();await ne.create("unique()",a(g),a(p),a(f)),await ne.createEmailPasswordSession(a(g),a(p)),y(l,"Compte créé et connecté !"),setTimeout(()=>{n()()},1e3)}catch(W){console.error("Erreur d'inscription:",W),y(i,W.message||"Erreur lors de la création du compte",!0)}finally{y(o,!1)}}async function C(z){if(z.preventDefault(),!a(m)){y(i,"Veuillez entrer votre email");return}y(o,!0),y(i,"");try{await(await $().getAccount()).createRecovery(a(m),`${window.location.origin}/reset-password`),y(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{y(_,!1),y(m,"")},2e3)}catch(W){console.error("Erreur mot de passe oublié:",W),y(i,W.message||"Erreur lors de l'envoi de l'email",!0)}finally{y(o,!1)}}function x(){a(o)||r()()}Ft(()=>{(a(s)||a(_))&&(y(i,""),y(l,""))});var A=zh();A.__click=x,A.__keydown=[Dh,x];var S=u(A);S.__click=[Mh];var T=u(S),P=u(T),M=u(P),D=d(P,2);D.__click=x;var L=d(T,2),O=u(L);{var X=z=>{var W=Ch(),ne=u(W);B(()=>U(ne,a(i))),v(z,W)};k(O,z=>{a(i)&&z(X)})}var de=d(O,2);{var q=z=>{var W=Nh(),ne=u(W);B(()=>U(ne,a(l))),v(z,W)};k(de,z=>{a(l)&&z(q)})}var I=d(de,2);{var j=z=>{var W=Rh(),ne=N(W),be=u(ne),H=d(u(be),2),Y=d(be,2),G=u(Y),oe=d(ne,2),_e=u(oe);_e.__click=[Ih,_],B(()=>{H.disabled=a(o),Y.disabled=a(o),U(G,a(o)?"Envoi...":"Envoyer l'email de réinitialisation"),_e.disabled=a(o)}),Mn("submit",ne,C),qe(H,()=>a(m),J=>y(m,J)),v(z,W)},ae=z=>{var W=K(),ne=N(W);{var be=Y=>{var G=jh(),oe=N(G),_e=u(oe),J=d(u(_e),2),ce=d(_e,2),Q=d(u(ce),2),re=d(ce,2),we=u(re),Ae=d(oe,2),Ne=u(Ae);Ne.__click=[Oh,_];var se=d(Ne,2),ye=d(u(se));ye.__click=[qh,s],B(()=>{J.disabled=a(o),Q.disabled=a(o),re.disabled=a(o),U(we,a(o)?"Connexion...":"Se connecter"),Ne.disabled=a(o),ye.disabled=a(o)}),Mn("submit",oe,b),qe(J,()=>a(c),Me=>y(c,Me)),qe(Q,()=>a(h),Me=>y(h,Me)),v(Y,G)},H=Y=>{var G=Bh(),oe=N(G),_e=u(oe),J=d(u(_e),2),ce=d(_e,2),Q=d(u(ce),2),re=d(ce,2),we=d(u(re),2),Ae=d(re,2),Ne=u(Ae),se=d(oe,2),ye=d(u(se));ye.__click=[Lh,s],B(()=>{J.disabled=a(o),Q.disabled=a(o),we.disabled=a(o),Ae.disabled=a(o),U(Ne,a(o)?"Création...":"Créer un compte"),ye.disabled=a(o)}),Mn("submit",oe,E),qe(J,()=>a(f),Me=>y(f,Me)),qe(Q,()=>a(g),Me=>y(g,Me)),qe(we,()=>a(p),Me=>y(p,Me)),v(Y,G)};k(ne,Y=>{a(s)?Y(be):Y(H,!1)},!0)}v(z,W)};k(I,z=>{a(_)?z(j):z(ae,!1)})}B(()=>{U(M,a(_)?"Mot de passe oublié":a(s)?"Connexion":"Inscription"),D.disabled=a(o)}),v(e,A),ee()}Je(["click","keydown"]);var Hh=(e,t,r)=>t(a(r)),Qh=w('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),Wh=(e,t,r)=>t(a(r)),Vh=w('<button class="btn btn-ghost btn-sm btn-square" title="Fermer" aria-label="Fermer la notification"><!></button>'),Gh=w('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!></div></div></div>'),Kh=w("<div></div>");function Yh(e,t){F(t,!0);let r=ke(t,"position",3,"toast-right toast-bottom"),n=ke(t,"padding",3,"md");const s=Z(()=>n()==="sm"?"px-2 py-0.5":""),o=Z(()=>bt.toasts);function i(f){return f==="success"||f==="info"}function l(f){bt.dismiss(f.id)}function c(f){t.onShowDetails?.({id:f.id,message:f.message,details:f.details})}var h=Kh();st(h,21,()=>a(o),f=>f.id,(f,g)=>{var p=Gh(),m=u(p),_=u(m),$=u(_);{var b=M=>{Po(M,{class:"h-5 w-5 animate-spin"})};k($,M=>{a(g).state==="loading"&&M(b)})}var E=d($,2),C=u(E),x=d(_,2),A=u(x);{var S=M=>{var D=Qh();D.__click=[Hh,c,g];var L=u(D);wo(L,{class:"h-3 w-3"}),v(M,D)};k(A,M=>{a(g).details&&M(S)})}var T=d(A,2);{var P=M=>{var D=Vh();D.__click=[Wh,l,g];var L=u(D);Mt(L,{class:"ms-1 h-4 w-4"}),v(M,D)};k(T,M=>{(a(g).state==="error"||!i(a(g).state))&&M(P)})}B(()=>{Te(p,1,`alert alert-${a(g).state??""} max-w-sm ${a(s)??""} shadow-lg ${a(g).state==="error"?"":"alert-soft"}`),U(C,a(g).message)}),v(f,p)}),B(()=>Te(h,1,`toast ${r()??""} z-50`)),v(e,h),ee()}Je(["click"]);var Jh=w('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function Zh(e){var t=Jh(),r=u(t),n=d(r,2);To(n,{class:"swap-on fill-current"});var s=d(n,2);Eo(s,{class:"swap-off fill-current"}),v(e,t)}function Xh(e,t){y(t,!0)}var Fh=w('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),ep=w('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),tp=w('<div class="text-base-content/60"> </div>'),rp=w('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),np=w('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),ap=w('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),sp=w('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),op=w('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function ip(e,t){F(t,!0);let r,n=V(null),s=V(!0),o=V(!1),i=V(!1);function l(S,T,P){localStorage.setItem("appwrite-user-email",S),localStorage.setItem("appwrite-user-name",T)}async function c(){const S=Xa();r=_c(S);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const M=await(await window.AppwriteClient.getAccount()).get();l(M.email,M.name),await te.initialize(r,S)}catch(T){const P=T instanceof Error?T.message:"Erreur lors de l'initialisation";y(n,P,!0),console.error("[App] Erreur initialisation:",T)}finally{y(s,!1)}}Ys(async()=>{await c()});async function h(){y(i,!1),y(s,!0),y(n,null),await c()}bl(()=>{te.destroy()});async function f(){if(!(!r||a(o))){y(o,!0);try{const S=Xa();await te.forceReload(r,S)}catch(S){console.error("[App] Erreur lors du rechargement forcé:",S)}finally{y(o,!1)}}}const g=Z(()=>a(n)||te.error),p=Z(()=>a(s)||te.loading);var m=op(),_=N(m),$=u(_);Yh($,{});var b=d($,2);{var E=S=>{$h(S)},C=S=>{var T=sp(),P=N(T),M=u(P),D=u(M),L=d(u(D),2),O=u(L);{var X=Q=>{var re=Fh();v(Q,re)};k(O,Q=>{te.realtimeConnected&&Q(X)})}var de=d(O,2);{var q=Q=>{var re=ep();v(Q,re)};k(de,Q=>{te.syncing&&Q(q)})}var I=d(de,2);{var j=Q=>{var re=tp(),we=u(re);B(Ae=>U(we,`Maj: ${Ae??""}`),[()=>new Date(te.lastSync).toLocaleTimeString()]),v(Q,re)};k(I,Q=>{te.lastSync&&Q(j)})}var ae=d(I,2);Zh(ae);var z=d(ae,2);{var W=Q=>{var re=rp();let we;re.__click=f;var Ae=u(re);Yc(Ae,{class:"h-4 w-4"}),B(Ne=>{we=Te(re,1,"btn btn-outline btn-sm",null,we,Ne),re.disabled=a(o)||te.loading},[()=>({loading:a(o)||te.loading})]),v(Q,re)};k(z,Q=>{a(n)||Q(W)})}var ne=d(z,2);{var be=Q=>{var re=np(),we=u(re);we.__click=[Xh,i];var Ae=u(we);Uc(Ae,{class:"mr-2 h-4 w-4"}),v(Q,re)};k(ne,Q=>{a(n)&&Q(be)})}var H=d(P,2),Y=u(H);{var G=Q=>{Th(Q,{get message(){return a(g)}})},oe=Q=>{var re=K(),we=N(re);{var Ae=Ne=>{kh(Ne,{get message(){return a(g)}})};k(we,Ne=>{a(g)&&Ne(Ae)},!0)}v(Q,re)};k(Y,Q=>{a(n)?Q(G):Q(oe,!1)})}var _e=d(Y,2);{var J=Q=>{xh(Q,{})},ce=Q=>{var re=K(),we=N(re);{var Ae=Ne=>{var se=ap();v(Ne,se)};k(we,Ne=>{!te.loading&&!a(n)&&Ne(Ae)},!0)}v(Q,re)};k(_e,Q=>{te.enrichedProducts.length>0?Q(J):Q(ce,!1)})}v(S,T)};k(b,S=>{a(p)?S(E):S(C,!1)})}var x=d(_,2);{var A=S=>{Uh(S,{onClose:()=>y(i,!1),onAuthSuccess:h})};k(x,S=>{a(i)&&S(A)})}v(e,m),ee()}Je(["click"]);const No=document.getElementById("app_products");if(!No)throw new Error("Élément target non trouvé: #app_products");el(ip,{target:No});
