(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const as=!1;var Kr=Array.isArray,Ro=Array.prototype.indexOf,Xn=Array.from,Bn=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,Oo=Object.getOwnPropertyDescriptors,ss=Object.prototype,qo=Array.prototype,Fn=Object.getPrototypeOf,ya=Object.isExtensible;function Rr(e){return typeof e=="function"}const ue=()=>{};function jo(e){for(var t=0;t<e.length;t++)e[t]()}function os(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function is(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ct=2,ea=4,ta=8,cr=16,Bt=32,ur=64,ra=128,wt=256,ln=512,at=1024,ht=2048,Ft=4096,xt=8192,dr=16384,na=32768,vr=65536,wa=1<<17,Lo=1<<18,Ar=1<<19,Bo=1<<20,zn=1<<21,dn=1<<22,ar=1<<23,sr=Symbol("$state"),ls=Symbol("legacy props"),zo=Symbol(""),Br=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function cs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Uo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ho(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Wo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Vo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Go(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ko(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Yo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Jo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Zo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const vn=1,fn=2,us=4,Xo=8,Fo=16,ei=1,ti=2,ri=4,ni=8,ai=16,si=1,oi=2,et=Symbol(),ii="http://www.w3.org/1999/xhtml",li="http://www.w3.org/2000/svg",ci="@attach";function ui(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function di(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let vi=!1;function ds(e){return e===this.v}function vs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function fi(e,t){return e!==t}function fs(e){return!vs(e,this.v)}let Mr=!1,hi=!1;function pi(){Mr=!0}const mi=[];function mr(e,t=!1,r=!1){return an(e,new Map,"",mi,null,r)}function an(e,t,r,n,s=null,o=!1){if(typeof e=="object"&&e!==null){var i=t.get(e);if(i!==void 0)return i;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(Kr(e)){var l=Array(e.length);t.set(e,l),s!==null&&t.set(s,l);for(var c=0;c<e.length;c+=1){var h=e[c];c in e&&(l[c]=an(h,t,r,n,null,o))}return l}if(Fn(e)===ss){l={},t.set(e,l),s!==null&&t.set(s,l);for(var f in e)l[f]=an(e[f],t,r,n,null,o);return l}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function"&&!o)return an(e.toJSON(),t,r,n,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}let Ye=null;function yr(e){Ye=e}function ee(e,t=!1,r){Ye={p:Ye,c:null,e:null,s:e,x:null,l:Mr&&!t?{s:null,u:null,$:[]}:null}}function te(e){var t=Ye,r=t.e;if(r!==null){t.e=null;for(var n of r)ks(n)}return Ye=t.p,{}}function Tr(){return!Mr||Ye!==null&&Ye.l===null}let tr=[];function hs(){var e=tr;tr=[],jo(e)}function ir(e){if(tr.length===0&&!zr){var t=tr;queueMicrotask(()=>{t===tr&&hs()})}tr.push(e)}function gi(){for(;tr.length>0;)hs()}const _i=new WeakMap;function ps(e){var t=Ie;if(t===null)return Re.f|=ar,e;if((t.f&na)===0){if((t.f&ra)===0)throw!t.parent&&e instanceof Error&&ms(e),e;t.b.error(e)}else wr(e,t)}function wr(e,t){for(;t!==null;){if((t.f&ra)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&ms(e),e}function ms(e){const t=_i.get(e);t&&(Bn(e,"message",{value:t.message}),Bn(e,"stack",{value:t.stack}))}const Fr=new Set;let Le=null,sn=null,Un=new Set,kt=[],hn=null,Hn=!1,zr=!1;class yt{current=new Map;#e=new Map;#t=new Set;#s=0;#c=null;#d=[];#i=[];#u=[];#l=[];#o=[];#v=[];skipped_effects=new Set;process(t){kt=[],sn=null;var r=yt.apply(this);for(const o of t)this.#a(o);if(this.#s===0){this.#h();var n=this.#i,s=this.#u;this.#i=[],this.#u=[],this.#l=[],sn=this,Le=null,Sa(n),Sa(s),sn=null,this.#c?.resolve()}else this.#f(this.#i),this.#f(this.#u),this.#f(this.#l);r();for(const o of this.#d)Wr(o);this.#d=[]}#a(t){t.f^=at;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Bt|ur))!==0,o=s&&(n&at)!==0,i=o||(n&xt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){s?r.f^=at:(n&ea)!==0?this.#u.push(r):(n&at)===0&&((n&dn)!==0&&r.b?.is_pending()?this.#d.push(r):bn(r)&&((r.f&cr)!==0&&this.#l.push(r),Wr(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#f(t){for(const r of t)((r.f&ht)!==0?this.#o:this.#v).push(r),it(r,at);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){Le=this}deactivate(){Le=null}flush(){if(kt.length>0){if(this.activate(),gs(),Le!==null&&Le!==this)return}else this.#s===0&&this.#h();this.deactivate();for(const t of Un)if(Un.delete(t),t(),Le!==null)break}#h(){for(const t of this.#t)t();if(this.#t.clear(),Fr.size>1){this.#e.clear();let t=!0;for(const r of Fr){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;_s(n)}if(kt.length>0){Le=r;const n=yt.apply(r);for(const s of kt)r.#a(s);kt=[],n()}}Le=null}Fr.delete(this)}increment(){this.#s+=1}decrement(){this.#s-=1;for(const t of this.#o)it(t,ht),lr(t);for(const t of this.#v)it(t,Ft),lr(t);this.flush()}add_callback(t){this.#t.add(t)}settled(){return(this.#c??=os()).promise}static ensure(){if(Le===null){const t=Le=new yt;Fr.add(Le),zr||yt.enqueue(()=>{Le===t&&t.flush()})}return Le}static enqueue(t){ir(t)}static apply(t){return ue}}function bi(e){var t=zr;zr=!0;try{for(var r;;){if(gi(),kt.length===0&&(Le?.flush(),kt.length===0))return hn=null,r;gs()}}finally{zr=t}}function gs(){var e=br;Hn=!0;try{var t=0;for(Ea(!0);kt.length>0;){var r=yt.ensure();if(t++>1e3){var n,s;yi()}r.process(kt),Yt.clear()}}finally{Hn=!1,Ea(e),hn=null}}function yi(){try{Vo()}catch(e){wr(e,hn)}}let er=null;function Sa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(dr|xt))===0&&bn(n)&&(er=[],Wr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Ts(n):n.fn=null),er?.length>0)){Yt.clear();for(const s of er)Wr(s);er=[]}}er=null}}function _s(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&ct)!==0?_s(t):(r&(dn|cr))!==0&&(it(t,ht),lr(t))}}function lr(e){for(var t=hn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Hn&&t===Ie&&(r&cr)!==0)return;if((r&(ur|Bt))!==0){if((r&at)===0)return;t.f^=at}}kt.push(t)}function aa(e){let t=0,r=Zt(0),n;return()=>{Oi()&&(a(r),ua(()=>(t===0&&(n=Dr(()=>e(()=>At(r)))),t+=1,()=>{ir(()=>{t-=1,t===0&&(n?.(),n=void 0,At(r))})})))}}var wi=vr|Ar|ra;function Si(e,t,r){new xi(e,t,r)}class xi{parent;#e=!1;#t;#s=null;#c;#d;#i;#u=null;#l=null;#o=null;#v=null;#a=0;#f=0;#h=!1;#m=null;#g=()=>{this.#m&&Sr(this.#m,this.#a)};#n=aa(()=>(this.#m=Zt(this.#a),()=>{this.#m=null}));constructor(t,r,n){this.#t=t,this.#c=r,this.#d=n,this.parent=Ie.b,this.#e=!!this.#c.pending,this.#i=Qt(()=>{Ie.b=this;{try{this.#u=tt(()=>n(this.#t))}catch(s){this.error(s)}this.#f>0?this.#y():this.#e=!1}},wi)}#_(){try{this.#u=tt(()=>this.#d(this.#t))}catch(t){this.error(t)}this.#e=!1}#b(){const t=this.#c.pending;t&&(this.#l=tt(()=>t(this.#t)),yt.enqueue(()=>{this.#u=this.#p(()=>(yt.ensure(),tt(()=>this.#d(this.#t)))),this.#f>0?this.#y():(Ot(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#c.pending}#p(t){var r=Ie,n=Re,s=Ye;Mt(this.#i),lt(this.#i),yr(this.#i.ctx);try{return t()}catch(o){return ps(o),null}finally{Mt(r),lt(n),yr(s)}}#y(){const t=this.#c.pending;this.#u!==null&&(this.#v=document.createDocumentFragment(),Pi(this.#u,this.#v)),this.#l===null&&(this.#l=tt(()=>t(this.#t)))}#w(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#w(t);return}this.#f+=t,this.#f===0&&(this.#e=!1,this.#l&&Ot(this.#l,()=>{this.#l=null}),this.#v&&(this.#t.before(this.#v),this.#v=null),ir(()=>{yt.ensure().flush()}))}update_pending_count(t){this.#w(t),this.#a+=t,Un.add(this.#g)}get_effect_pending(){return this.#n(),a(this.#m)}error(t){var r=this.#c.onerror;let n=this.#c.failed;if(this.#h||!r&&!n)throw t;this.#u&&(rt(this.#u),this.#u=null),this.#l&&(rt(this.#l),this.#l=null),this.#o&&(rt(this.#o),this.#o=null);var s=!1,o=!1;const i=()=>{if(s){di();return}s=!0,o&&Zo(),yt.ensure(),this.#a=0,this.#o!==null&&Ot(this.#o,()=>{this.#o=null}),this.#e=this.has_pending_snippet(),this.#u=this.#p(()=>(this.#h=!1,tt(()=>this.#d(this.#t)))),this.#f>0?this.#y():this.#e=!1};var l=Re;try{lt(null),o=!0,r?.(t,i),o=!1}catch(c){wr(c,this.#i&&this.#i.parent)}finally{lt(l)}n&&ir(()=>{this.#o=this.#p(()=>{this.#h=!0;try{return tt(()=>{n(this.#t,()=>t,()=>i)})}catch(c){return wr(c,this.#i.parent),null}finally{this.#h=!1}})})}}function Pi(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:Yr(r);t.append(r),r=s}}function bs(e,t,r){const n=Tr()?pn:sa;if(t.length===0){r(e.map(n));return}var s=Le,o=Ie,i=$i();Promise.all(t.map(l=>Ei(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(o.f&dr)===0&&wr(c,o)}s?.deactivate(),ys()}).catch(l=>{wr(l,o)})}function $i(){var e=Ie,t=Re,r=Ye,n=Le;return function(){Mt(e),lt(t),yr(r),n?.activate()}}function ys(){Mt(null),lt(null),yr(null)}function pn(e){var t=ct|ht,r=Re!==null&&(Re.f&ct)!==0?Re:null;return Ie===null||r!==null&&(r.f&wt)!==0?t|=wt:Ie.f|=Ar,{ctx:Ye,deps:null,effects:null,equals:ds,f:t,fn:e,reactions:null,rv:0,v:et,wv:0,parent:r??Ie,ac:null}}function Ei(e,t){let r=Ie;r===null&&Uo();var n=r.b,s=void 0,o=Zt(et),i=!Re,l=new Map;return ji(()=>{var c=os();s=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var h=Le,f=n.is_pending();i&&(n.update_pending_count(1),f||(h.increment(),l.get(h)?.reject(Br),l.set(h,c)));const g=(p,m=void 0)=>{f||h.activate(),m?m!==Br&&(o.f|=ar,Sr(o,m)):((o.f&ar)!==0&&(o.f^=ar),Sr(o,p)),i&&(n.update_pending_count(-1),f||h.decrement()),ys()};c.promise.then(g,p=>g(null,p||"unknown"))}),la(()=>{for(const c of l.values())c.reject(Br)}),new Promise(c=>{function h(f){function g(){f===s?c(o):h(s)}f.then(g,g)}h(s)})}function X(e){const t=pn(e);return Ns(t),t}function sa(e){const t=pn(e);return t.equals=fs,t}function ws(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)rt(t[r])}}function ki(e){for(var t=e.parent;t!==null;){if((t.f&ct)===0)return t;t=t.parent}return null}function oa(e){var t,r=Ie;Mt(ki(e));try{ws(e),t=qs(e)}finally{Mt(r)}return t}function Ss(e){var t=oa(e);if(e.equals(t)||(e.v=t,e.wv=Rs()),!fr){var r=(Vt||(e.f&wt)!==0)&&e.deps!==null?Ft:at;it(e,r)}}const Yt=new Map;function Zt(e,t){var r={f:0,v:e,reactions:null,equals:ds,rv:0,wv:0};return r}function V(e,t){const r=Zt(e);return Ns(r),r}function Ai(e,t=!1,r=!0){const n=Zt(e);return t||(n.equals=fs),Mr&&r&&Ye!==null&&Ye.l!==null&&(Ye.l.s??=[]).push(n),n}function y(e,t,r=!1){Re!==null&&(!St||(Re.f&wa)!==0)&&Tr()&&(Re.f&(ct|cr|dn|wa))!==0&&!qt?.includes(e)&&Jo();let n=r?je(t):t;return Sr(e,n)}function Sr(e,t){if(!e.equals(t)){var r=e.v;fr?Yt.set(e,t):Yt.set(e,r),e.v=t;var n=yt.ensure();n.capture(e,r),(e.f&ct)!==0&&((e.f&ht)!==0&&oa(e),it(e,(e.f&wt)===0?at:Ft)),e.wv=Rs(),xs(e,ht),Tr()&&Ie!==null&&(Ie.f&at)!==0&&(Ie.f&(Bt|ur))===0&&(_t===null?zi([e]):_t.push(e))}return t}function At(e){y(e,e.v+1)}function xs(e,t){var r=e.reactions;if(r!==null)for(var n=Tr(),s=r.length,o=0;o<s;o++){var i=r[o],l=i.f;if(!(!n&&i===Ie)){var c=(l&ht)===0;c&&it(i,t),(l&ct)!==0?xs(i,Ft):c&&((l&cr)!==0&&er!==null&&er.push(i),lr(i))}}}function je(e){if(typeof e!="object"||e===null||sr in e)return e;const t=Fn(e);if(t!==ss&&t!==qo)return e;var r=new Map,n=Kr(e),s=V(0),o=jt,i=l=>{if(jt===o)return l();var c=Re,h=jt;lt(null),Aa(o);var f=l();return lt(c),Aa(h),f};return n&&r.set("length",V(e.length)),new Proxy(e,{defineProperty(l,c,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&Ko();var f=r.get(c);return f===void 0?f=i(()=>{var g=V(h.value);return r.set(c,g),g}):y(f,h.value,!0),!0},deleteProperty(l,c){var h=r.get(c);if(h===void 0){if(c in l){const f=i(()=>V(et));r.set(c,f),At(s)}}else y(h,et),At(s);return!0},get(l,c,h){if(c===sr)return e;var f=r.get(c),g=c in l;if(f===void 0&&(!g||Kt(l,c)?.writable)&&(f=i(()=>{var m=je(g?l[c]:et),_=V(m);return _}),r.set(c,f)),f!==void 0){var p=a(f);return p===et?void 0:p}return Reflect.get(l,c,h)},getOwnPropertyDescriptor(l,c){var h=Reflect.getOwnPropertyDescriptor(l,c);if(h&&"value"in h){var f=r.get(c);f&&(h.value=a(f))}else if(h===void 0){var g=r.get(c),p=g?.v;if(g!==void 0&&p!==et)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return h},has(l,c){if(c===sr)return!0;var h=r.get(c),f=h!==void 0&&h.v!==et||Reflect.has(l,c);if(h!==void 0||Ie!==null&&(!f||Kt(l,c)?.writable)){h===void 0&&(h=i(()=>{var p=f?je(l[c]):et,m=V(p);return m}),r.set(c,h));var g=a(h);if(g===et)return!1}return f},set(l,c,h,f){var g=r.get(c),p=c in l;if(n&&c==="length")for(var m=h;m<g.v;m+=1){var _=r.get(m+"");_!==void 0?y(_,et):m in l&&(_=i(()=>V(et)),r.set(m+"",_))}if(g===void 0)(!p||Kt(l,c)?.writable)&&(g=i(()=>V(void 0)),y(g,je(h)),r.set(c,g));else{p=g.v!==et;var $=i(()=>je(h));y(g,$)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(f,h),!p){if(n&&typeof c=="string"){var E=r.get("length"),C=Number(c);Number.isInteger(C)&&C>=E.v&&y(E,C+1)}At(s)}return!0},ownKeys(l){a(s);var c=Reflect.ownKeys(l).filter(g=>{var p=r.get(g);return p===void 0||p.v!==et});for(var[h,f]of r)f.v!==et&&!(h in l)&&c.push(h);return c},setPrototypeOf(){Yo()}})}function xa(e){try{if(e!==null&&typeof e=="object"&&sr in e)return e[sr]}catch{}return e}function Mi(e,t){return Object.is(xa(e),xa(t))}var Pa,Ps,$s,Es;function Ti(){if(Pa===void 0){Pa=window,Ps=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;$s=Kt(t,"firstChild").get,Es=Kt(t,"nextSibling").get,ya(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),ya(r)&&(r.__t=void 0)}}function zt(e=""){return document.createTextNode(e)}function xr(e){return $s.call(e)}function Yr(e){return Es.call(e)}function u(e,t){return xr(e)}function N(e,t=!1){{var r=xr(e);return r instanceof Comment&&r.data===""?Yr(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=Yr(n);return n}function Di(e){e.textContent=""}function mn(){return!1}function Ci(e,t){if(t){const r=document.body;e.autofocus=!0,ir(()=>{document.activeElement===r&&e.focus()})}}let $a=!1;function Ni(){$a||($a=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function gn(e){var t=Re,r=Ie;lt(null),Mt(null);try{return e()}finally{lt(t),Mt(r)}}function ia(e,t,r,n=r){e.addEventListener(t,()=>gn(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),Ni()}function Ii(e){Ie===null&&Re===null&&Wo(),Re!==null&&(Re.f&wt)!==0&&Ie===null&&Qo(),fr&&Ho()}function Ri(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Ut(e,t,r,n=!0){var s=Ie;s!==null&&(s.f&xt)!==0&&(e|=xt);var o={ctx:Ye,deps:null,nodes_start:null,nodes_end:null,f:e|ht,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Wr(o),o.f|=na}catch(c){throw rt(o),c}else t!==null&&lr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Ar)===0&&(i=i.first),i!==null&&(i.parent=s,s!==null&&Ri(i,s),Re!==null&&(Re.f&ct)!==0&&(e&ur)===0)){var l=Re;(l.effects??=[]).push(i)}}return o}function Oi(){return Re!==null&&!St}function la(e){const t=Ut(ta,null,!1);return it(t,at),t.teardown=e,t}function Ht(e){Ii();var t=Ie.f,r=!Re&&(t&Bt)!==0&&(t&na)===0;if(r){var n=Ye;(n.e??=[]).push(e)}else return ks(e)}function ks(e){return Ut(ea|Bo,e,!1)}function qi(e){yt.ensure();const t=Ut(ur|Ar,e,!0);return(r={})=>new Promise(n=>{r.outro?Ot(t,()=>{rt(t),n(void 0)}):(rt(t),n(void 0))})}function ca(e){return Ut(ea,e,!1)}function ji(e){return Ut(dn|Ar,e,!0)}function ua(e,t=0){return Ut(ta|t,e,!0)}function j(e,t=[],r=[]){bs(t,r,n=>{Ut(ta,()=>e(...n.map(a)),!0)})}function Qt(e,t=0){var r=Ut(cr|t,e,!0);return r}function tt(e,t=!0){return Ut(Bt|Ar,e,!0,t)}function As(e){var t=e.teardown;if(t!==null){const r=fr,n=Re;ka(!0),lt(null);try{t.call(null)}finally{ka(r),lt(n)}}}function Ms(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&gn(()=>{s.abort(Br)});var n=r.next;(r.f&ur)!==0?r.parent=null:rt(r,t),r=n}}function Li(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Bt)===0&&rt(t),t=r}}function rt(e,t=!0){var r=!1;(t||(e.f&Lo)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Bi(e.nodes_start,e.nodes_end),r=!0),Ms(e,t&&!r),cn(e,0),it(e,dr);var n=e.transitions;if(n!==null)for(const o of n)o.stop();As(e);var s=e.parent;s!==null&&s.first!==null&&Ts(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Bi(e,t){for(;e!==null;){var r=e===t?null:Yr(e);e.remove(),e=r}}function Ts(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Ot(e,t){var r=[];da(e,r,!0),Ds(r,()=>{rt(e),t&&t()})}function Ds(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function da(e,t,r){if((e.f&xt)===0){if(e.f^=xt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var s=n.next,o=(n.f&vr)!==0||(n.f&Bt)!==0;da(n,t,o?r:!1),n=s}}}function _n(e){Cs(e,!0)}function Cs(e,t){if((e.f&xt)!==0){e.f^=xt,(e.f&at)===0&&(it(e,ht),lr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&vr)!==0||(r.f&Bt)!==0;Cs(r,s?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let br=!1;function Ea(e){br=e}let fr=!1;function ka(e){fr=e}let Re=null,St=!1;function lt(e){Re=e}let Ie=null;function Mt(e){Ie=e}let qt=null;function Ns(e){Re!==null&&(qt===null?qt=[e]:qt.push(e))}let ot=null,ft=0,_t=null;function zi(e){_t=e}let Is=1,Qr=0,jt=Qr;function Aa(e){jt=e}let Vt=!1;function Rs(){return++Is}function bn(e){var t=e.f;if((t&ht)!==0)return!0;if((t&Ft)!==0){var r=e.deps,n=(t&wt)!==0;if(r!==null){var s,o,i=(t&ln)!==0,l=n&&Ie!==null&&!Vt,c=r.length;if((i||l)&&(Ie===null||(Ie.f&dr)===0)){var h=e,f=h.parent;for(s=0;s<c;s++)o=r[s],(i||!o?.reactions?.includes(h))&&(o.reactions??=[]).push(h);i&&(h.f^=ln),l&&f!==null&&(f.f&wt)===0&&(h.f^=wt)}for(s=0;s<c;s++)if(o=r[s],bn(o)&&Ss(o),o.wv>e.wv)return!0}(!n||Ie!==null&&!Vt)&&it(e,at)}return!1}function Os(e,t,r=!0){var n=e.reactions;if(n!==null&&!qt?.includes(e))for(var s=0;s<n.length;s++){var o=n[s];(o.f&ct)!==0?Os(o,t,!1):t===o&&(r?it(o,ht):(o.f&at)!==0&&it(o,Ft),lr(o))}}function qs(e){var t=ot,r=ft,n=_t,s=Re,o=Vt,i=qt,l=Ye,c=St,h=jt,f=e.f;ot=null,ft=0,_t=null,Vt=(f&wt)!==0&&(St||!br||Re===null),Re=(f&(Bt|ur))===0?e:null,qt=null,yr(e.ctx),St=!1,jt=++Qr,e.ac!==null&&(gn(()=>{e.ac.abort(Br)}),e.ac=null);try{e.f|=zn;var g=e.fn,p=g(),m=e.deps;if(ot!==null){var _;if(cn(e,ft),m!==null&&ft>0)for(m.length=ft+ot.length,_=0;_<ot.length;_++)m[ft+_]=ot[_];else e.deps=m=ot;if(!Vt||(f&ct)!==0&&e.reactions!==null)for(_=ft;_<m.length;_++)(m[_].reactions??=[]).push(e)}else m!==null&&ft<m.length&&(cn(e,ft),m.length=ft);if(Tr()&&_t!==null&&!St&&m!==null&&(e.f&(ct|Ft|ht))===0)for(_=0;_<_t.length;_++)Os(_t[_],e);return s!==null&&s!==e&&(Qr++,_t!==null&&(n===null?n=_t:n.push(..._t))),(e.f&ar)!==0&&(e.f^=ar),p}catch($){return ps($)}finally{e.f^=zn,ot=t,ft=r,_t=n,Re=s,Vt=o,qt=i,yr(l),St=c,jt=h}}function Ui(e,t){let r=t.reactions;if(r!==null){var n=Ro.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&ct)!==0&&(ot===null||!ot.includes(t))&&(it(t,Ft),(t.f&(wt|ln))===0&&(t.f^=ln),ws(t),cn(t,0))}function cn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ui(e,r[n])}function Wr(e){var t=e.f;if((t&dr)===0){it(e,at);var r=Ie,n=br;Ie=e,br=!0;try{(t&cr)!==0?Li(e):Ms(e),As(e);var s=qs(e);e.teardown=typeof s=="function"?s:null,e.wv=Is;var o;as&&hi&&(e.f&ht)!==0&&e.deps}finally{br=n,Ie=r}}}async function Hi(){await Promise.resolve(),bi()}function a(e){var t=e.f,r=(t&ct)!==0;if(Re!==null&&!St){var n=Ie!==null&&(Ie.f&dr)!==0;if(!n&&!qt?.includes(e)){var s=Re.deps;if((Re.f&zn)!==0)e.rv<Qr&&(e.rv=Qr,ot===null&&s!==null&&s[ft]===e?ft++:ot===null?ot=[e]:(!Vt||!ot.includes(e))&&ot.push(e));else{(Re.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[Re]:o.includes(Re)||o.push(Re)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&wt)===0&&(i.f^=wt)}if(fr){if(Yt.has(e))return Yt.get(e);if(r){i=e;var c=i.v;return((i.f&at)===0&&i.reactions!==null||js(i))&&(c=oa(i)),Yt.set(i,c),c}}else r&&(i=e,bn(i)&&Ss(i));if((e.f&ar)!==0)throw e.v;return e.v}function js(e){if(e.v===et)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Yt.has(t)||(t.f&ct)!==0&&js(t))return!0;return!1}function Dr(e){var t=St;try{return St=!0,e()}finally{St=t}}const Qi=-7169;function it(e,t){e.f=e.f&Qi|t}function Wi(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Vi=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Gi(e){return Vi.includes(e)}const Ki={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Yi(e){return e=e.toLowerCase(),Ki[e]??e}const Ji=["touchstart","touchmove"];function Zi(e){return Ji.includes(e)}const Ls=new Set,Qn=new Set;function va(e,t,r,n={}){function s(o){if(n.capture||jr.call(t,o),!o.cancelBubble)return gn(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ir(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Wn(e,t,r,n={}){var s=va(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function Dn(e,t,r,n,s){var o={capture:n,passive:s},i=va(e,t,r,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&la(()=>{t.removeEventListener(e,i,o)})}function Je(e){for(var t=0;t<e.length;t++)Ls.add(e[t]);for(var r of Qn)r(e)}let Ma=null;function jr(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],o=s[0]||e.target;Ma=e;var i=0,l=Ma===e&&e.__root;if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var h=s.indexOf(t);if(h===-1)return;c<=h&&(i=c)}if(o=s[i]||e.target,o!==t){Bn(e,"currentTarget",{configurable:!0,get(){return o||r}});var f=Re,g=Ie;lt(null),Mt(null);try{for(var p,m=[];o!==null;){var _=o.assignedSlot||o.parentNode||o.host||null;try{var $=o["__"+n];if($!=null&&(!o.disabled||e.target===o))if(Kr($)){var[b,...E]=$;b.apply(o,[e,...E])}else $.call(o,e)}catch(C){p?m.push(C):p=C}if(e.cancelBubble||_===t||_===null)break;o=_}if(p){for(let C of m)queueMicrotask(()=>{throw C});throw p}}finally{e.__root=t,delete e.currentTarget,lt(f),Mt(g)}}}function Bs(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Pr(e,t){var r=Ie;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function w(e,t){var r=(t&si)!==0,n=(t&oi)!==0,s,o=!e.startsWith("<!>");return()=>{s===void 0&&(s=Bs(o?e:"<!>"+e),r||(s=xr(s)));var i=n||Ps?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=xr(i),c=i.lastChild;Pr(l,c)}else Pr(i,i);return i}}function Xi(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Bs(s),l=xr(i);o=xr(l)}var c=o.cloneNode(!0);return Pr(c,c),c}}function Fi(e,t){return Xi(e,t,"svg")}function pt(e=""){{var t=zt(e+"");return Pr(t,t),t}}function K(){var e=document.createDocumentFragment(),t=document.createComment(""),r=zt();return e.append(t,r),Pr(t,r),e}function v(e,t){e!==null&&e.before(t)}function B(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function el(e,t){return tl(e,t)}const gr=new Map;function tl(e,{target:t,anchor:r,props:n={},events:s,context:o,intro:i=!0}){Ti();var l=new Set,c=g=>{for(var p=0;p<g.length;p++){var m=g[p];if(!l.has(m)){l.add(m);var _=Zi(m);t.addEventListener(m,jr,{passive:_});var $=gr.get(m);$===void 0?(document.addEventListener(m,jr,{passive:_}),gr.set(m,1)):gr.set(m,$+1)}}};c(Xn(Ls)),Qn.add(c);var h=void 0,f=qi(()=>{var g=r??t.appendChild(zt());return Si(g,{pending:()=>{}},p=>{if(o){ee({});var m=Ye;m.c=o}s&&(n.$$events=s),h=e(p,n)||{},o&&te()}),()=>{for(var p of l){t.removeEventListener(p,jr);var m=gr.get(p);--m===0?(document.removeEventListener(p,jr),gr.delete(p)):gr.set(p,m)}Qn.delete(c),g!==r&&g.parentNode?.removeChild(g)}});return rl.set(h,f),h}let rl=new WeakMap;function k(e,t,r=!1){var n=e,s=null,o=null,i=et,l=r?vr:0,c=!1;const h=(m,_=!0)=>{c=!0,p(_,m)};var f=null;function g(){f!==null&&(f.lastChild.remove(),n.before(f),f=null);var m=i?s:o,_=i?o:s;m&&_n(m),_&&Ot(_,()=>{i?o=null:s=null})}const p=(m,_)=>{if(i!==(i=m)){var $=mn(),b=n;if($&&(f=document.createDocumentFragment(),f.append(b=zt())),i?s??=_&&tt(()=>_(b)):o??=_&&tt(()=>_(b)),$){var E=Le,C=i?s:o,x=i?o:s;C&&E.skipped_effects.delete(C),x&&E.skipped_effects.add(x),E.add_callback(g)}else g()}};Qt(()=>{c=!1,t(h),c||p(null,null)},l)}function nl(e,t,r){var n=e,s=et,o,i,l=null,c=Tr()?fi:vs;function h(){o&&Ot(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}Qt(()=>{if(c(s,s=t())){var f=n,g=mn();g&&(l=document.createDocumentFragment(),l.append(f=zt())),i=tt(()=>r(f)),g?Le.add_callback(h):h()}})}function Vr(e,t){return t}function al(e,t,r){for(var n=e.items,s=[],o=t.length,i=0;i<o;i++)da(t[i].e,s,!0);var l=o>0&&s.length===0&&r!==null;if(l){var c=r.parentNode;Di(c),c.append(r),n.clear(),Et(e,t[0].prev,t[o-1].next)}Ds(s,()=>{for(var h=0;h<o;h++){var f=t[h];l||(n.delete(f.k),Et(e,f.prev,f.next)),rt(f.e,!l)}})}function st(e,t,r,n,s,o=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&us)!==0;if(c){var h=e;i=h.appendChild(zt())}var f=null,g=!1,p=new Map,m=sa(()=>{var E=r();return Kr(E)?E:E==null?[]:Xn(E)}),_,$;function b(){sl($,_,l,p,i,s,t,n,r),o!==null&&(_.length===0?f?_n(f):f=tt(()=>o(i)):f!==null&&Ot(f,()=>{f=null}))}Qt(()=>{$??=Ie,_=a(m);var E=_.length;if(!(g&&E===0)){g=E===0;var C,x,A,S;if(mn()){var M=new Set,P=Le;for(x=0;x<E;x+=1){A=_[x],S=n(A,x);var T=l.items.get(S)??p.get(S);T?(t&(vn|fn))!==0&&zs(T,A,x,t):(C=Us(null,l,null,null,A,S,x,s,t,r,!0),p.set(S,C)),M.add(S)}for(const[D,Q]of l.items)M.has(D)||P.skipped_effects.add(Q.e);P.add_callback(b)}else b();a(m)}})}function sl(e,t,r,n,s,o,i,l,c){var h=(i&Xo)!==0,f=(i&(vn|fn))!==0,g=t.length,p=r.items,m=r.first,_=m,$,b=null,E,C=[],x=[],A,S,M,P;if(h)for(P=0;P<g;P+=1)A=t[P],S=l(A,P),M=p.get(S),M!==void 0&&(M.a?.measure(),(E??=new Set).add(M));for(P=0;P<g;P+=1){if(A=t[P],S=l(A,P),M=p.get(S),M===void 0){var T=n.get(S);if(T!==void 0){n.delete(S),p.set(S,T);var D=b?b.next:_;Et(r,b,T),Et(r,T,D),Cn(T,D,s),b=T}else{var Q=_?_.e.nodes_start:s;b=Us(Q,r,b,b===null?r.first:b.next,A,S,P,o,i,c)}p.set(S,b),C=[],x=[],_=b.next;continue}if(f&&zs(M,A,P,i),(M.e.f&xt)!==0&&(_n(M.e),h&&(M.a?.unfix(),(E??=new Set).delete(M))),M!==_){if($!==void 0&&$.has(M)){if(C.length<x.length){var L=x[0],G;b=L.prev;var oe=C[0],q=C[C.length-1];for(G=0;G<C.length;G+=1)Cn(C[G],L,s);for(G=0;G<x.length;G+=1)$.delete(x[G]);Et(r,oe.prev,q.next),Et(r,b,oe),Et(r,q,L),_=L,b=q,P-=1,C=[],x=[]}else $.delete(M),Cn(M,_,s),Et(r,M.prev,M.next),Et(r,M,b===null?r.first:b.next),Et(r,b,M),b=M;continue}for(C=[],x=[];_!==null&&_.k!==S;)(_.e.f&xt)===0&&($??=new Set).add(_),x.push(_),_=_.next;if(_===null)continue;M=_}C.push(M),b=M,_=M.next}if(_!==null||$!==void 0){for(var I=$===void 0?[]:Xn($);_!==null;)(_.e.f&xt)===0&&I.push(_),_=_.next;var R=I.length;if(R>0){var re=(i&us)!==0&&g===0?s:null;if(h){for(P=0;P<R;P+=1)I[P].a?.measure();for(P=0;P<R;P+=1)I[P].a?.fix()}al(r,I,re)}}h&&ir(()=>{if(E!==void 0)for(M of E)M.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var z of n.values())rt(z.e);n.clear()}function zs(e,t,r,n){(n&vn)!==0&&Sr(e.v,t),(n&fn)!==0?Sr(e.i,r):e.i=r}function Us(e,t,r,n,s,o,i,l,c,h,f){var g=(c&vn)!==0,p=(c&Fo)===0,m=g?p?Ai(s,!1,!1):Zt(s):s,_=(c&fn)===0?i:Zt(i),$={i:_,v:m,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=zt())}return $.e=tt(()=>l(e,m,_,h),vi),$.e.prev=r&&r.e,$.e.next=n&&n.e,r===null?f||(t.first=$):(r.next=$,r.e.next=$.e),n!==null&&(n.prev=$,n.e.prev=$.e),$}finally{}}function Cn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=Yr(o);s.before(o),o=i}}function Et(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ve(e,t,...r){var n=e,s=ue,o;Qt(()=>{s!==(s=t())&&(o&&(rt(o),o=null),o=tt(()=>s(n,...r)))},vr)}function or(e,t,r){var n=e,s,o,i=null,l=null;function c(){o&&(Ot(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}Qt(()=>{if(s!==(s=t())){var h=mn();if(s){var f=n;h&&(i=document.createDocumentFragment(),i.append(f=zt()),o&&Le.skipped_effects.add(o)),l=tt(()=>r(f,s))}h?Le.add_callback(c):c()}},vr)}function ol(e,t,r,n,s,o){var i,l,c=null,h=e,f;Qt(()=>{const g=t()||null;var p=li;g!==i&&(f&&(g===null?Ot(f,()=>{f=null,l=null}):g===l?_n(f):rt(f)),g&&g!==l&&(f=tt(()=>{if(c=document.createElementNS(p,g),Pr(c,c),n){var m=c.appendChild(zt());n(c,m)}Ie.nodes_end=c,h.before(c)})),i=g,i&&(l=i))},vr)}function il(e,t){var r=void 0,n;Qt(()=>{r!==(r=t())&&(n&&(rt(n),n=null),r&&(n=tt(()=>{ca(()=>r(e))})))})}function Hs(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Hs(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function ll(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Hs(e))&&(n&&(n+=" "),n+=t);return n}function cl(e){return typeof e=="object"?ll(e):e??""}const Ta=[...` 	
\r\f \v\uFEFF`];function ul(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var o=s.length,i=0;(i=n.indexOf(s,i))>=0;){var l=i+o;(i===0||Ta.includes(n[i-1]))&&(l===n.length||Ta.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Da(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var o=e[s];o!=null&&o!==""&&(n+=" "+s+": "+o+r)}return n}function Nn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function dl(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Nn)),s&&c.push(...Object.keys(s).map(Nn));var h=0,f=-1;const $=e.length;for(var g=0;g<$;g++){var p=e[g];if(l?p==="/"&&e[g-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[g+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&f===-1)f=g;else if(p===";"||g===$-1){if(f!==-1){var m=Nn(e.substring(h,f).trim());if(!c.includes(m)){p!==";"&&g++;var _=e.substring(h,g).trim();r+=" "+_+";"}}h=g+1,f=-1}}}}return n&&(r+=Da(n)),s&&(r+=Da(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Me(e,t,r,n,s,o){var i=e.__className;if(i!==r||i===void 0){var l=ul(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&s!==o)for(var c in o){var h=!!o[c];(s==null||h!==!!s[c])&&e.classList.toggle(c,h)}return o}function In(e,t={},r,n){for(var s in r){var o=r[s];t[s]!==o&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,o,n))}}function Qs(e,t,r,n){var s=e.__style;if(s!==t){var o=dl(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(In(e,r?.[0],n[0]),In(e,r?.[1],n[1],"important")):In(e,r,n));return n}function un(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Kr(t))return ui();for(var n of e.options)n.selected=t.includes(Ur(n));return}for(n of e.options){var s=Ur(n);if(Mi(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Ws(e){var t=new MutationObserver(()=>{un(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),la(()=>{t.disconnect()})}function rr(e,t,r=t){var n=!0;ia(e,"change",s=>{var o=s?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),Ur);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&Ur(l)}r(i)}),ca(()=>{var s=t();if(un(e,s,n),n&&s===void 0){var o=e.querySelector(":checked");o!==null&&(s=Ur(o),r(s))}e.__value=s,n=!1}),Ws(e)}function Ur(e){return"__value"in e?e.__value:e.value}const Or=Symbol("class"),qr=Symbol("style"),Vs=Symbol("is custom element"),Gs=Symbol("is html");function vl(e,t){var r=yn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Rn(e,t){var r=yn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function fl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Xt(e,t,r,n){var s=yn(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[zo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ks(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function hl(e,t,r,n,s=!1,o=!1){var i=yn(e),l=i[Vs],c=!i[Gs],h=t||{},f=e.tagName==="OPTION";for(var g in t)g in r||(r[g]=null);r.class?r.class=cl(r.class):r[Or]&&(r.class=null),r[qr]&&(r.style??=null);var p=Ks(e);for(const A in r){let S=r[A];if(f&&A==="value"&&S==null){e.value=e.__value="",h[A]=S;continue}if(A==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Me(e,m,S,n,t?.[Or],r[Or]),h[A]=S,h[Or]=r[Or];continue}if(A==="style"){Qs(e,S,t?.[qr],r[qr]),h[A]=S,h[qr]=r[qr];continue}var _=h[A];if(!(S===_&&!(S===void 0&&e.hasAttribute(A)))){h[A]=S;var $=A[0]+A[1];if($!=="$$")if($==="on"){const M={},P="$$"+A;let T=A.slice(2);var b=Gi(T);if(Wi(T)&&(T=T.slice(0,-7),M.capture=!0),!b&&_){if(S!=null)continue;e.removeEventListener(T,h[P],M),h[P]=null}if(S!=null)if(b)e[`__${T}`]=S,Je([T]);else{let D=function(Q){h[A].call(this,Q)};var x=D;h[P]=va(T,e,D,M)}else b&&(e[`__${T}`]=void 0)}else if(A==="style")Xt(e,A,S);else if(A==="autofocus")Ci(e,!!S);else if(!l&&(A==="__value"||A==="value"&&S!=null))e.value=e.__value=S;else if(A==="selected"&&f)fl(e,S);else{var E=A;c||(E=Yi(E));var C=E==="defaultValue"||E==="defaultChecked";if(S==null&&!l&&!C)if(i[A]=null,E==="value"||E==="checked"){let M=e;const P=t===void 0;if(E==="value"){let T=M.defaultValue;M.removeAttribute(E),M.defaultValue=T,M.value=M.__value=P?T:null}else{let T=M.defaultChecked;M.removeAttribute(E),M.defaultChecked=T,M.checked=P?T:!1}}else e.removeAttribute(A);else C||p.includes(E)&&(l||typeof S!="string")?(e[E]=S,E in i&&(i[E]=et)):typeof S!="function"&&Xt(e,E,S)}}}return h}function Ca(e,t,r=[],n=[],s,o=!1,i=!1){bs(r,n,l=>{var c=void 0,h={},f=e.nodeName==="SELECT",g=!1;if(Qt(()=>{var m=t(...l.map(a)),_=hl(e,c,m,s,o,i);g&&f&&"value"in m&&un(e,m.value);for(let b of Object.getOwnPropertySymbols(h))m[b]||rt(h[b]);for(let b of Object.getOwnPropertySymbols(m)){var $=m[b];b.description===ci&&(!c||$!==c[b])&&(h[b]&&rt(h[b]),h[b]=tt(()=>il(e,()=>$))),_[b]=$}c=_}),f){var p=e;ca(()=>{un(p,c.value,!0),Ws(p)})}g=!0})}function yn(e){return e.__attributes??={[Vs]:e.nodeName.includes("-"),[Gs]:e.namespaceURI===ii}}var Na=new Map;function Ks(e){var t=e.getAttribute("is")||e.nodeName,r=Na.get(t);if(r)return r;Na.set(t,r=[]);for(var n,s=e,o=Element.prototype;o!==s;){n=Oo(s);for(var i in n)n[i].set&&r.push(i);s=Fn(s)}return r}function qe(e,t,r=t){var n=new WeakSet;ia(e,"input",async s=>{var o=s?e.defaultValue:e.value;if(o=On(e)?qn(o):o,r(o),Le!==null&&n.add(Le),await Hi(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),Dr(t)==null&&e.value&&(r(On(e)?qn(e.value):e.value),Le!==null&&n.add(Le)),ua(()=>{var s=t();if(e===document.activeElement){var o=sn??Le;if(n.has(o))return}On(e)&&s===qn(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function pl(e,t,r=t){ia(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),Dr(t)==null&&r(e.checked),ua(()=>{var n=t();e.checked=!!n})}function On(e){var t=e.type;return t==="number"||t==="range"}function qn(e){return e===""?null:+e}let en=!1;function ml(e){var t=en;try{return en=!1,[e(),en]}finally{en=t}}const gl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function pe(e,t,r){return new Proxy({props:e,exclude:t},gl)}const _l={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Rr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];Rr(s)&&(s=s());const o=Kt(s,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Rr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=Kt(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===sr||t===ls)return!1;for(let r of e.props)if(Rr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Rr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function me(...e){return new Proxy({props:e},_l)}function ke(e,t,r,n){var s=!Mr||(r&ti)!==0,o=(r&ni)!==0,i=(r&ai)!==0,l=n,c=!0,h=()=>(c&&(c=!1,l=i?Dr(n):n),l),f;if(o){var g=sr in e||ls in e;f=Kt(e,t)?.set??(g&&t in e?x=>e[t]=x:void 0)}var p,m=!1;o?[p,m]=ml(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=h(),f&&(s&&Go(),f(p)));var _;if(s?_=()=>{var x=e[t];return x===void 0?h():(c=!0,x)}:_=()=>{var x=e[t];return x!==void 0&&(l=void 0),x===void 0?l:x},s&&(r&ri)===0)return _;if(f){var $=e.$$legacy;return(function(x,A){return arguments.length>0?((!s||!A||$||m)&&f(A?_():x),x):_()})}var b=!1,E=((r&ei)!==0?pn:sa)(()=>(b=!1,_()));o&&a(E);var C=Ie;return(function(x,A){if(arguments.length>0){const S=A?a(E):s&&o?je(x):x;return y(E,S),b=!0,l!==void 0&&(l=S),x}return fr&&b||(C.f&dr)!==0?E.v:a(E)})}function Ys(e){Ye===null&&cs(),Mr&&Ye.l!==null?yl(Ye).m.push(e):Ht(()=>{const t=Dr(e);if(typeof t=="function")return t})}function bl(e){Ye===null&&cs(),Ys(()=>()=>Dr(e))}function yl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const wl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(wl);const Sl="modulepreload",xl=function(e){return"/"+e},Ia={},Pl=function(t,r,n){let s=Promise.resolve();if(r&&r.length>0){let h=function(f){return Promise.all(f.map(g=>Promise.resolve(g).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=h;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");s=h(r.map(f=>{if(f=xl(f),f in Ia)return;Ia[f]=!0;const g=f.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${p}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":Sl,g||(m.as="script"),m.crossOrigin="",m.href=f,c&&m.setAttribute("nonce",c),document.head.appendChild(m),g)return new Promise((_,$)=>{m.addEventListener("load",_),m.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};class $l extends Map{#e=new Map;#t=V(0);#s=V(0);#c=jt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#s.v=super.size}}#d(t){return jt===this.#c?V(t):Zt(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#d(0),r.set(t,n);else return a(this.#t),!1}return a(n),!0}forEach(t,r){this.#i(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#d(0),r.set(t,n);else{a(this.#t);return}}return a(n),super.get(t)}set(t,r){var n=this.#e,s=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#t;if(s===void 0)s=this.#d(0),n.set(t,s),y(this.#s,super.size),At(l);else if(o!==r){At(s);var c=l.reactions===null?null:new Set(l.reactions),h=c===null||!s.reactions?.every(f=>c.has(f));h&&At(l)}return i}delete(t){var r=this.#e,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),y(this.#s,super.size),y(n,-1),At(this.#t)),s}clear(){if(super.size!==0){super.clear();var t=this.#e;y(this.#s,0);for(var r of t.values())y(r,-1);At(this.#t),t.clear()}}#i(){a(this.#t);var t=this.#e;if(this.#s.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#d(0);t.set(r,n)}}for([,n]of this.#e)a(n)}keys(){return a(this.#t),super.keys()}values(){return this.#i(),super.values()}entries(){return this.#i(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return a(this.#s),super.size}}class El{#e;#t;constructor(t,r){this.#e=t,this.#t=aa(r)}get current(){return this.#t(),this.#e()}}const kl=/\(.+\)/,Al=new Set(["all","print","screen","and","or","not","only"]);class Ml extends El{constructor(t,r){let n=kl.test(t)||t.split(/[\s,]+/).some(o=>Al.has(o.trim()))?t:`(${t})`;const s=window.matchMedia(n);super(()=>s.matches,o=>Wn(s,"change",o))}}const Tl=typeof window<"u"?window:void 0;function Dl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Cl{#e;#t;constructor(t={}){const{window:r=Tl,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#t=aa(s=>{const o=Wn(r,"focusin",s),i=Wn(r,"focusout",s);return()=>{o(),i()}}))}get current(){return this.#t?.(),this.#e?Dl(this.#e):null}}new Cl;function Nl(e){return typeof e=="function"}function Il(e,t){if(Nl(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Rl(e,t){let r=V(null);const n=X(()=>Il(t,250));function s(...o){if(a(r))a(r).timeout&&clearTimeout(a(r).timeout);else{let i,l;const c=new Promise((h,f)=>{i=h,l=f});y(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return a(r).runner=async()=>{if(!a(r))return;const i=a(r);y(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},a(r).timeout=setTimeout(a(r).runner,a(n)),a(r).promise}return s.cancel=async()=>{(!a(r)||a(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!a(r)||a(r).timeout===null)||(clearTimeout(a(r).timeout),a(r).reject("Cancelled"),y(r,null))},s.runScheduledNow=async()=>{(!a(r)||!a(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!a(r)||!a(r).timeout)||(clearTimeout(a(r).timeout),a(r).timeout=null,await a(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!a(r)?.timeout}}),s}function Gt(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function wn(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Sn(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function xn(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>nr(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const s=[],o=[];r.forEach((l,c)=>{const h=n.get(c)||0,f=l-h;f>0&&(s.push({q:f,u:c}),o.push(nr(f.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:s,display:i}}function mt(e){return e?.length?e.map(t=>nr(t.q.toString(),t.u)).join(" et "):"-"}function nr(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,s=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${s}`}if(!["gr.","ml","kg","l."].includes(t)){let s=(Math.round(r*10)/10).toString();return s.endsWith(",0")&&(s=s.slice(0,-2)),`${s} ${t}`}return`${r} ${t}`}function fa(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const s=t.get(n)||0;t.set(n,s+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Ol(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function ql(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(s=>{t.push({...s,date:r,dateTimeService:r})})}),t}function ha(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return fa(t)}function Js(e,t){const r=new Map,n=new Map;e.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),t.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const s=[],o=new Set([...r.keys(),...n.keys()]);for(const i of o){const l=r.get(i)||0,c=n.get(i)||0,h=l-c;Math.abs(h)>.001&&s.push({q:h,u:i})}return s}function pa(e){if(!e?.length)return"Équilibré";const t=e.filter(n=>n.q>0),r=e.filter(n=>n.q<0);if(t.length>0&&r.length>0){const n=t.map(o=>nr(o.q.toString(),o.u)).join(" et "),s=r.map(o=>nr(Math.abs(o.q).toString(),o.u)).join(" et ");return`${n} disponibles, ${s} manquant${r.length>1?"s":""}`}else return t.length>0?t.map(n=>"+"+nr(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>nr(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function jl(e,t){if(t.searchQuery.trim()){const r=t.searchQuery.toLowerCase();if(!e.productName.toLowerCase().includes(r))return!1}return!(t.selectedStores.length>0&&(!e.storeInfo?.storeName||!t.selectedStores.includes(e.storeInfo.storeName))||t.selectedWho.length>0&&(!e.who||!e.who.some(r=>t.selectedWho.includes(r)))||t.selectedProductTypes.length>0&&(!e.productType||!t.selectedProductTypes.includes(e.productType))||t.selectedTemperatures.length>0&&!(t.selectedTemperatures.includes("frais")&&e.pFrais||t.selectedTemperatures.includes("surgele")&&e.pSurgel))}function Pn(e){return[...e].sort()}function Ll(e){return new Date(e)<new Date}function Bl(e){if(e.length===0)return!0;const t=new Date($n(e));return t.setHours(23,59,59,999),t<new Date}function Zs(e){return e.length===0?null:Pn(e)[0]}function $n(e){return e.length===0?null:Pn(e).pop()??null}function zl(e){if(e.length===0)return null;const t=new Date;return t.setHours(0,0,0,0),Pn(e).find(r=>new Date(r)>=t)||null}function Ul(e){if(e.length===0)return null;const t=Pn(e),r=Bl(e),n=Ll(t[0]),s=new Date;let o;return r?o=t[0]:n?o=s.toISOString().slice(0,19)+"Z":o=t[0],{start:o,end:t[t.length-1]}}function Xs(e){const t=zl(e),r=$n(e);return!t||!r?null:{start:t,end:r}}function Hl(e){const t=Zs(e),r=$n(e);return!t||!r?null:{start:t,end:r}}function Fs(e,t){const r=Hl(t);return r?e.start===r.start&&e.end===r.end:!1}function Ql(e,t){const r=Xs(t);return r?e.start===r.start&&e.end===r.end:!1}function Wl(e){return new Date(e).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function Hr(e){return e?new Date(e).toLocaleDateString("fr-Fr",{weekday:"short",day:"numeric",month:"short"}):""}function jn(e){const r=new Date(e).getHours();return r===12?"sun":r===20?"moon":r===8?"cloud":null}function Vl(e,t){if(!e.byDate?.[t])return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const r=e.byDate[t],n=[t],s=new Map;r.recipes?.length&&s.set(t,r.recipes);const o=r.totalConsolidated||[],i=o.length>0?mt(o):"-",l=Gl(e,t,o),c=l.filter(f=>f.q>0),h=l.filter(f=>f.q<0);return{requiredQuantities:o,requiredQuantitiesFormatted:i,stockBalance:l,availableStockQuantities:c,missingStockQuantities:h,availableStockFormatted:pa(l),missingStockFormatted:mt(h.map(f=>({q:Math.abs(f.q),u:f.u}))),hasAvailableStock:c.length>0,hasMissingStock:h.length>0,totalRecipesInRange:r.recipes?.length||0,totalPortionsInRange:r.totalAssiettes||0,datesInSelectedRange:n,recipesByDate:s}}function Gl(e,t,r){let n=[],s="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(n=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],s=e.stockParsed.dateTime);const o=[];if(e.purchases)for(const c of e.purchases)Kl(c,t,s)&&o.push({q:c.quantity,u:c.unit});const i=[...n,...o],l=fa(i);return Js(l,r)}function Kl(e,t,r=""){if(e.status==="cancelled")return!1;const n=e.deliveryDate||e.$createdAt;return!n||n>t||r&&e.$createdAt<r?!1:n<=t}function Yl(e,t){const r=e.totalNeededArray||[],n=r.length>0?mt(r):"-",s=eo(e,t[0],t[t.length-1],r),o=s.filter(h=>h.q>0),i=s.filter(h=>h.q<0),l=[...t].sort(),c=new Map;if(e.byDate)for(const[h,f]of Object.entries(e.byDate))f.recipes?.length&&c.set(h,f.recipes);return{requiredQuantities:r,requiredQuantitiesFormatted:n,stockBalance:s,availableStockQuantities:o,missingStockQuantities:i,availableStockFormatted:pa(s),missingStockFormatted:mt(i.map(h=>({q:Math.abs(h.q),u:h.u}))),hasAvailableStock:o.length>0,hasMissingStock:i.length>0,totalRecipesInRange:e.nbRecipes||0,totalPortionsInRange:e.totalAssiettes||0,datesInSelectedRange:l,recipesByDate:c}}function Jl(e,t,r){if(!e.byDate)return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const n=new Date(t),s=new Date(r),o=[],i=new Map,l=new Map;let c=0,h=0;for(const[$,b]of Object.entries(e.byDate)){const E=new Date($);E>=n&&E<=s&&(o.push($),c+=b.totalAssiettes||0,b.recipes?.length&&(i.set($,b.recipes),h+=b.recipes.length),b.totalConsolidated&&b.totalConsolidated.forEach(({q:C,u:x})=>{l.set(x,(l.get(x)||0)+C)}))}const f=Array.from(l.entries()).map(([$,b])=>({q:b,u:$})),g=f.length>0?mt(f):"-",p=eo(e,t,r,f),m=p.filter($=>$.q>0),_=p.filter($=>$.q<0);return{requiredQuantities:f,requiredQuantitiesFormatted:g,stockBalance:p,availableStockQuantities:m,missingStockQuantities:_,availableStockFormatted:pa(p),missingStockFormatted:mt(_.map($=>({q:Math.abs($.q),u:$.u}))),hasAvailableStock:m.length>0,hasMissingStock:_.length>0,totalRecipesInRange:h,totalPortionsInRange:c,datesInSelectedRange:o,recipesByDate:i}}function eo(e,t,r,n){let s=[],o="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(s=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],o=e.stockParsed.dateTime);const i=[];if(e.purchases)for(const h of e.purchases)Zl(h,t,r,o)&&i.push({q:h.quantity,u:h.unit});const l=[...s,...i],c=fa(l);return Js(c,n)}function Zl(e,t,r,n=""){if(e.status==="cancelled")return!1;const s=e.deliveryDate||e.$createdAt;return!s||s>r||n&&e.$createdAt<n?!1:s>=t&&s<=r}function Ra(e){return{...e,products:e.products?.map(t=>typeof t=="string"?t:t.$id)||[],mainId:e.mainId}}function Xl(e){const t=Sn(wn(e.purchases??[])),r=[],{numeric:n,display:s}=xn(r,t),o=Gt(e.stockReel)??null,i=mt(t),l=e.store?Gt(e.store):null,c=o?`${o.quantity} ${o.unit}`:i;return{$id:e.$id,$createdAt:e.$createdAt,$updatedAt:e.$updatedAt,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:e.isSynced,mainId:e.mainId,totalNeededRaw:[],status:e.status,who:e.who,store:e.store,stockReel:e.stockReel,previousNames:e.previousNames,isMerged:e.isMerged,mergedFrom:e.mergedFrom,mergeDate:e.mergeDate,mergeReason:e.mergeReason,mergedInto:e.mergedInto,totalNeededOverride:e.totalNeededOverride,purchases:e.purchases,byDate:{},storeInfo:l,stockParsed:o,totalNeededArray:r,totalPurchasesArray:t,missingQuantityArray:n,stockOrTotalPurchases:c,displayTotalNeeded:"-",displayTotalPurchases:i,displayMissingQuantity:s,totalNeededOverrideParsed:Gt(e.totalNeededOverride),displayTotalOverride:(()=>{const h=Gt(e.totalNeededOverride);return h?mt([h.totalOverride]):""})()}}function tn(e,t){const r=e.purchases??t.purchases,n=Sn(wn(r??[])),s=mt(n),{numeric:o,display:i}=xn(t.totalNeededArray,n),l=e.stockReel??t.stockReel,c=l?Gt(l):t.stockParsed,h=e.store??t.store,f=h?Gt(h):t.storeInfo,g=c?`${c.quantity} ${c.unit}`:s;return e.purchases===void 0&&t.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${t.purchases.length} purchases pour ${t.productName}`),{...t,$updatedAt:e.$updatedAt,productName:e.productName??t.productName,isSynced:e.isSynced??t.isSynced,mainId:e.mainId??t.mainId,status:e.status??t.status,who:e.who??t.who,store:h,stockReel:l,purchases:r,previousNames:e.previousNames??t.previousNames,isMerged:e.isMerged??t.isMerged,mergedFrom:e.mergedFrom??t.mergedFrom,mergeDate:e.mergeDate??t.mergeDate,mergeReason:e.mergeReason??t.mergeReason,mergedInto:e.mergedInto??t.mergedInto,totalNeededOverride:e.totalNeededOverride??t.totalNeededOverride,storeInfo:f,stockParsed:c,totalPurchasesArray:n,missingQuantityArray:o,stockOrTotalPurchases:g,displayTotalPurchases:s,displayMissingQuantity:i,totalNeededOverrideParsed:Gt(e.totalNeededOverride??t.totalNeededOverride),displayTotalOverride:(()=>{const p=Gt(e.totalNeededOverride??t.totalNeededOverride);return p?mt([p.totalOverride]):""})()}}class Fl{#e=V(je([]));MAX_TOASTS=3;get toasts(){return a(this.#e).sort((t,r)=>r.timestamp-t.timestamp)}create(t){const r=t.id||crypto.randomUUID(),n={id:r,state:t.state,message:t.message,timestamp:Date.now(),source:t.source||"user",timeoutId:void 0,details:t.details};return this.#t(n),r}update(t,r){const n=a(this.#e).findIndex(o=>o.id===t);if(n===-1)return;const s=a(this.#e)[n];s.timeoutId&&clearTimeout(s.timeoutId),a(this.#e)[n]={...s,state:r.state||s.state,message:r.message||s.message,source:r.source||s.source},this.#s(a(this.#e)[n])}async track(t,r){const n=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const s=await t;return this.update(n,{state:"success",message:r.success||"Opération réussie"}),s}catch(s){throw this.update(n,{state:"error",message:r.error||"Erreur lors de l'opération"}),s}}dismiss(t){const r=a(this.#e).findIndex(s=>s.id===t);if(r===-1)return;const n=a(this.#e)[r];n.timeoutId&&clearTimeout(n.timeoutId),a(this.#e).splice(r,1)}dismissAll(){a(this.#e).forEach(t=>{t.timeoutId&&clearTimeout(t.timeoutId)}),y(this.#e,[],!0)}#t(t){if(t.source==="user"){const r=a(this.#e).findIndex(n=>n.source==="user");r>=0?a(this.#e)[r]=t:a(this.#e).push(t)}else{const r=a(this.#e).filter(n=>n.source!=="user");if(r.length>=2){const n=r[0];this.dismiss(n.id)}a(this.#e).push(t)}a(this.#e).length>this.MAX_TOASTS&&a(this.#e).splice(0,a(this.#e).length-this.MAX_TOASTS),this.#s(t)}#s(t){if(t.state!=="success"&&t.state!=="info")return;const r=t.source==="realtime-other"?24e3:23e3;t.timeoutId=setTimeout(()=>{this.dismiss(t.id)},r)}success(t,r){return this.create({state:"success",message:t,details:r})}error(t,r){return this.create({state:"error",message:t,details:r})}info(t,r){return this.create({state:"info",message:t,source:r?.source||"system",details:r?.details})}loading(t,r){return this.create({state:"loading",message:t,details:r})}}const bt=new Fl;function ec(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class O{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}O.equal=(e,t)=>new O("equal",e,t).toString();O.notEqual=(e,t)=>new O("notEqual",e,t).toString();O.lessThan=(e,t)=>new O("lessThan",e,t).toString();O.lessThanEqual=(e,t)=>new O("lessThanEqual",e,t).toString();O.greaterThan=(e,t)=>new O("greaterThan",e,t).toString();O.greaterThanEqual=(e,t)=>new O("greaterThanEqual",e,t).toString();O.isNull=e=>new O("isNull",e).toString();O.isNotNull=e=>new O("isNotNull",e).toString();O.between=(e,t,r)=>new O("between",e,[t,r]).toString();O.startsWith=(e,t)=>new O("startsWith",e,t).toString();O.endsWith=(e,t)=>new O("endsWith",e,t).toString();O.select=e=>new O("select",void 0,e).toString();O.search=(e,t)=>new O("search",e,t).toString();O.orderDesc=e=>new O("orderDesc",e).toString();O.orderAsc=e=>new O("orderAsc",e).toString();O.orderRandom=()=>new O("orderRandom").toString();O.cursorAfter=e=>new O("cursorAfter",void 0,e).toString();O.cursorBefore=e=>new O("cursorBefore",void 0,e).toString();O.limit=e=>new O("limit",void 0,e).toString();O.offset=e=>new O("offset",void 0,e).toString();O.contains=(e,t)=>new O("contains",e,t).toString();O.notContains=(e,t)=>new O("notContains",e,t).toString();O.notSearch=(e,t)=>new O("notSearch",e,t).toString();O.notBetween=(e,t,r)=>new O("notBetween",e,[t,r]).toString();O.notStartsWith=(e,t)=>new O("notStartsWith",e,t).toString();O.notEndsWith=(e,t)=>new O("notEndsWith",e,t).toString();O.createdBefore=e=>O.lessThan("$createdAt",e);O.createdAfter=e=>O.greaterThan("$createdAt",e);O.createdBetween=(e,t)=>O.between("$createdAt",e,t);O.updatedBefore=e=>O.lessThan("$updatedAt",e);O.updatedAfter=e=>O.greaterThan("$updatedAt",e);O.updatedBetween=(e,t)=>O.between("$updatedAt",e,t);O.or=e=>new O("or",void 0,e.map(t=>JSON.parse(t))).toString();O.and=e=>new O("and",void 0,e.map(t=>JSON.parse(t))).toString();O.distanceEqual=(e,t,r,n=!0)=>new O("distanceEqual",e,[[t,r,n]]).toString();O.distanceNotEqual=(e,t,r,n=!0)=>new O("distanceNotEqual",e,[[t,r,n]]).toString();O.distanceGreaterThan=(e,t,r,n=!0)=>new O("distanceGreaterThan",e,[[t,r,n]]).toString();O.distanceLessThan=(e,t,r,n=!0)=>new O("distanceLessThan",e,[[t,r,n]]).toString();O.intersects=(e,t)=>new O("intersects",e,[t]).toString();O.notIntersects=(e,t)=>new O("notIntersects",e,[t]).toString();O.crosses=(e,t)=>new O("crosses",e,[t]).toString();O.notCrosses=(e,t)=>new O("notCrosses",e,[t]).toString();O.overlaps=(e,t)=>new O("overlaps",e,[t]).toString();O.notOverlaps=(e,t)=>new O("notOverlaps",e,[t]).toString();O.touches=(e,t)=>new O("touches",e,[t]).toString();O.notTouches=(e,t)=>new O("notTouches",e,[t]).toString();var Oa;(function(e){e[e.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",e[e.POLICY_VIOLATION=1008]="POLICY_VIOLATION",e[e.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(Oa||(Oa={}));var to,ro;class $r{static custom(t){return t}static unique(t=7){const r=ec($r,to,"m",ro).call($r);let n="";for(let s=0;s<t;s++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}to=$r,ro=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var qa;(function(e){e.Equal="equal",e.NotEqual="notEqual",e.GreaterThan="greaterThan",e.GreaterThanEqual="greaterThanEqual",e.LessThan="lessThan",e.LessThanEqual="lessThanEqual",e.Contains="contains",e.IsNull="isNull",e.IsNotNull="isNotNull"})(qa||(qa={}));var ja;(function(e){e.Totp="totp"})(ja||(ja={}));var La;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(La||(La={}));var Ba;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Ba||(Ba={}));var za;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(za||(za={}));var Ua;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ua||(Ua={}));var Ha;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Ha||(Ha={}));var Qa;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Qa||(Qa={}));var Wa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Wa||(Wa={}));var Va;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Va||(Va={}));var Ga;(function(e){e.Http="http",e.Schedule="schedule",e.Event="event"})(Ga||(Ga={}));var Ka;(function(e){e.Waiting="waiting",e.Processing="processing",e.Completed="completed",e.Failed="failed",e.Scheduled="scheduled"})(Ka||(Ka={}));function no(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Pt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function tc(e){const n=await(await window.AppwriteClient.getAccount()).get();return{...e,updatedBy:n.name}}function _r(){return localStorage.getItem("appwrite-user-name")||""}async function rc(e,t,r=100){try{const{databases:n,config:s}=await Pt(),o=await n.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,[O.greaterThan("$updatedAt",t),O.equal("mainId",e),O.limit(r),O.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function ao(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:s,config:o}=await Pt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await s.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[O.equal("mainId",e),O.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),O.limit(n)])).documents;const i=await s.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[O.greaterThan("$updatedAt",r),O.equal("mainId",e),O.limit(n),O.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(s){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,s);const o=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function hr(e,t,r=!0){const{databases:n,config:s}=await Pt();return r&&(t.updatedBy=_r()),await n.updateDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,e,t)}async function Rt(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const s=no(n,t),o=await tc(s),{databases:i,config:l}=await Pt(),c=await i.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,e,o);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),c}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const s=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${s}`)}}async function so(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await hr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function oo(e,t){return hr(e,{who:t})}async function Vn(e,t){return hr(e,{stockReel:t})}async function ma(e,t,r=!1){if(!e)throw new Error("ID du produit requis pour la mise à jour de l'override");const n=JSON.stringify(t),s=await hr(e,{totalNeededOverride:n},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${e}:`,t),s}async function io(e,t=!0){if(!e)throw new Error("ID du produit requis pour la suppression de l'override");const r=await hr(e,{totalNeededOverride:null},t);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${e}`),r}async function lo(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const s={};return t.stockReel!==void 0&&(s.stockReel=t.stockReel),t.who!==void 0&&(s.who=t.who),t.storeInfo!==void 0&&(s.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await hr(e,s)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await Rt(e,s,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function co(e){const{databases:t,config:r}=await Pt(),n={...e,createdBy:_r()},s=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,$r.unique(),n);return console.log("[Appwrite Interactions] Achat créé:",s),s}async function uo(e,t){try{const{databases:r,config:n}=await Pt(),s=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||s.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function vo(e){try{const{databases:t,config:r}=await Pt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function fo(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Pt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[O.equal("$id",e),O.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function ho(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(m=>m.includes("products.")),h=i.some(m=>m.includes("purchases.")),f=i.some(m=>m.includes(".create")),g=i.some(m=>m.includes(".update")),p=i.some(m=>m.includes(".delete"));if(c){const m=l;m.updatedBy&&m.updatedBy!==_r()&&(f||g?bt.info(`${m.updatedBy} a modifié le produit "${m.productName}"`,{source:"realtime-other"}):p&&bt.info(`${m.updatedBy} a supprimé un produit`,{source:"realtime-other"})),f&&t.onProductCreate?t.onProductCreate(m):g&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(h){const m=l;if(m.createdBy&&m.createdBy!==_r()){const _=m.products?.[0]?.productName||"un produit";f&&m.who!==_r()?bt.info(`${m.who} a ajouté un achat pour ${_}`,{source:"realtime-other"}):g&&m.who!==_r()?bt.info(`${m.who} a modifié un achat pour ${_}`,{source:"realtime-other"}):p&&bt.info(`${m.who} a supprimé un achat pour ${_}`,{source:"realtime-other"})}f&&t.onPurchaseCreate?t.onPurchaseCreate(m):g&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function po(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Pt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function mo(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:s}=await Pt(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await s.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(s){throw console.error("[Appwrite Interactions] Erreur création Main document:",s),s}}async function ga(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const s=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const o=JSON.parse(s.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function go(e,t,r,n){return ga({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function _o(e,t,r,n="replace"){return ga({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function bo(e,t,r,n={}){try{const{databases:s,config:o}=await Pt(),c=await(await window.AppwriteClient.getAccount()).get(),h=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const f of r){const g={products:[t],mainId:e,quantity:f.q,unit:f.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await s.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,$r.unique(),g);h.push(p)}return console.log(`[Appwrite Interactions] ${h.length} validations rapides créées pour produit ${t}`),h}catch(s){console.error("[Appwrite Interactions] Erreur création validation rapide:",s);const o=s instanceof Error?s.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const nc=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:ga,batchUpdateStore:go,batchUpdateWho:_o,createMainDocument:mo,createPurchase:co,createQuickValidationPurchases:bo,deletePurchase:vo,enrichedProductToAppwriteProduct:no,loadMainEventData:po,loadPurchasesListByIds:fo,loadUpdatedPurchases:rc,removeTotalOverride:io,subscribeToRealtime:ho,syncProductsWithPurchases:ao,updateProduct:hr,updateProductBatch:lo,updateProductStock:Vn,updateProductStore:so,updateProductWho:oo,updatePurchase:uo,updateTotalOverride:ma,upsertProduct:Rt},Symbol.toStringTag,{value:"Module"}));async function ac(e){let t;if(t=await fetch(`/evenements/${e}/metadata.json`),!t.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function Ya(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function sc(e,t){if(!e)return!0;try{return(await ac(t)).hugoContentHash!==e}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function yo(e,t){const r=ha(e.byDate),n=Sn(wn([])),{numeric:s,display:o}=xn(r,n);return{$id:`${e.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalNeededRaw:e.totalNeededRaw,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:n,missingQuantityArray:s,stockOrTotalPurchases:"-",displayTotalNeeded:mt(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null,displayTotalOverride:""}}function oc(e,t){return e.map(r=>yo(r,t))}class ic{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=s=>{const o=s.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();o.onsuccess=()=>{const i=o.result,l={lastSync:null,allDates:[],hugoContentHash:null};i.forEach(c=>{c.key===this.LAST_SYNC_KEY?l.lastSync=c.value:c.key===this.ALL_DATES_KEY?l.allDates=c.value||[]:c.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=c.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),t(l)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const s=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=s.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),s.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},s.onerror=()=>n(s.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const s=this.db.transaction(this.METADATA_STORE,"readwrite"),o=s.objectStore(this.METADATA_STORE);o.put({key:this.LAST_SYNC_KEY,value:t.lastSync}),o.put({key:this.ALL_DATES_KEY,value:t.allDates}),t.hugoContentHash!==void 0&&o.put({key:this.HUGO_HASH_KEY,value:t.hugoContentHash}),s.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},s.onerror=()=>n(s.error)})}async updateLastSync(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${t}`),r()},i.onerror=()=>n(i.error)})}async updateAllDates(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${t.length} dates`),r()},i.onerror=()=>n(i.error)})}async updateHugoContentHash(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${t}`),r()},i.onerror=()=>n(i.error)})}async updateLastHugoMenuUpdate(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:t});i.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function lc(e){const t=new ic(e);return await t.open(),t}function cc(e){return!!(e.isMerged||e.totalNeededOverride)}function uc(e,t){if(!e||e.length!==t.length)return!0;for(let r=0;r<e.length;r++){const n=e[r],s=t[r];if(n.q!==s.q||n.u!==s.u)return!0}return!1}async function dc(e,t){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},n=new Map;for(const[o,i]of e)n.set(i.productHugoUuid,o);const s=new Set;for(const o of t.ingredients){const i=o.productSemanticKey||`${t.mainGroup_id}_${o.ingredientHugoUuid}`;s.add(i);const l=n.get(o.ingredientHugoUuid),c=l?e.get(l):void 0;if(c){if(uc(c.totalNeededRaw,o.totalNeededRaw)){const f=vc(c,o);if(f&&r.overrideConflicts.push(f),c.isMerged){const g=c.displayTotalNeeded;Ja(c,o),r.mergedProductsUpdated.push({product:c,oldDisplayTotal:g,newDisplayTotal:c.displayTotalNeeded,currentOverride:c.totalNeededOverrideParsed,semanticKey:i})}else Ja(c,o);r.updated.push(i)}e.set(i,c)}else{r.added.push(o);const h=yo(o,t.mainGroup_id);e.set(h.$id,h)}}for(const[o,i]of e)s.has(o)||(r.removed.push(i),!cc(i)&&!i.purchases?.length&&!i.stockReel&&!i.who?.length&&e.delete(o));return r.overrideConflicts.length>0&&await fc(r.overrideConflicts),r.summary=pc(r),r}function vc(e,t){if(!e.totalNeededOverride||!e.totalNeededOverrideParsed)return null;const r=ha(t.byDate),n=mt(r),s=e.displayTotalNeeded;return s!==n?{product:e,oldDisplayTotal:s,newDisplayTotal:n,currentOverride:e.totalNeededOverrideParsed,semanticKey:e.$id}:null}async function fc(e){for(const t of e){const r={...t.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:t.oldDisplayTotal,newTotalDisplay:t.newDisplayTotal};JSON.stringify(r);try{await ma(t.product.$id,r,!1)}catch(n){console.error(`Erreur lors de la mise à jour de l'override pour ${t.product.$id}:`,n)}}}function Ja(e,t){e.byDate=t.byDate,e.nbRecipes=t.nbRecipes,e.totalAssiettes=t.totalAssiettes,e.productType=t.ingType,e.pFrais=t.pFrais||!1,e.pSurgel=t.pSurgel||!1,hc(e)}function hc(e){e.totalNeededArray=ha(e.byDate),e.displayTotalNeeded=mt(e.totalNeededArray);const t=Sn(wn(e.purchases)),{numeric:r,display:n}=xn(e.totalNeededArray,t);e.totalPurchasesArray=t,e.missingQuantityArray=r,e.displayMissingQuantity=n,e.stockOrTotalPurchases=e.purchases.length>0?e.displayTotalPurchases:e.displayTotalNeeded}function pc(e){const t=[];if((e.added.length>0||e.updated.length>0||e.removed.length>0)&&t.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),e.added.length>0&&t.push(`${e.added.length} nouveau(x) ingrédient(s)`),e.updated.length>0&&t.push(` ${e.updated.length} ingrédient(s) mis à jour`),e.overrideConflicts.length>0&&t.push(`⚠️ ${e.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),e.mergedProductsUpdated.length>0&&t.push(`🔀 ${e.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),e.removed.length>0){const r=e.removed.filter(n=>n.purchases?.length||n.stockReel||n.who?.length).length;r>0?t.push(`⚠️ ${r} suppression(s) avec données conservées`):t.push(`${e.removed.length} ingrédient(s) supprimé(s)`)}return t.length>0?t.join(", "):"Aucune modification détectée"}class mc{isMobileQuery=new Ml("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return bt.toasts}get toast(){return bt}#e=V(je({isOpen:!1,conflicts:[]}));get modalOverride(){return a(this.#e)}set modalOverride(t){y(this.#e,t,!0)}#t=V(je({isOpen:!1}));get modal(){return a(this.#t)}set modal(t){y(this.#t,t,!0)}}const Er=new mc;class rn{#e=V();get data(){return a(this.#e)}set data(t){y(this.#e,t,!0)}#t;#s;constructor(t,r,n){this.data=t,this.#t=r,this.#s=n}update(t){this.data=t}get $id(){return this.data.$id}get productName(){return this.data.productName}get productType(){return this.data.productType}get storeInfo(){return this.data.storeInfo}get who(){return this.data.who}get pFrais(){return this.data.pFrais}get pSurgel(){return this.data.pSurgel}get status(){return this.data.status}get previousNames(){return this.data.previousNames}get purchases(){return this.data.purchases}get totalNeededOverrideParsed(){return this.data.totalNeededOverrideParsed}get displayMissingQuantity(){return this.data.displayMissingQuantity}get missingQuantityArray(){return this.data.missingQuantityArray}get isSynced(){return this.data.isSynced}get byDate(){return this.data.byDate}#c=X(()=>{const t=this.#t(),r=this.#s();let n;if(t.start&&t.start===t.end)n=Vl(this.data,t.start);else if(Fs(t,r))n=Yl(this.data,r);else if(t.start&&t.end)n=Jl(this.data,t.start,t.end);else return{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedMissingQuantities:"",formattedAvailableQuantities:"En attente",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map};return{quantities:n.requiredQuantities,formattedQuantities:n.requiredQuantitiesFormatted,nbRecipes:n.totalRecipesInRange,totalAssiettes:n.totalPortionsInRange,stockResult:n.stockBalance,availableQuantities:n.availableStockQuantities,missingQuantities:n.missingStockQuantities,formattedMissingQuantities:n.missingStockFormatted,formattedAvailableQuantities:n.availableStockFormatted,hasAvailable:n.hasAvailableStock,hasMissing:n.hasMissingStock,concernedDates:n.datesInSelectedRange,recipesByDate:n.recipesByDate}});get stats(){return a(this.#c)}set stats(t){y(this.#c,t)}}const Za=1e3;class gc{#e=new $l;#t=V(null);#s=V(null);#c=V(!1);#d=V(!1);#i=V(null);#u=V(!1);#l=V(!1);#o=V(null);#v=V(null);#a=V(je([]));#f=V(je({start:null,end:null}));get dateRange(){return a(this.#f)}set dateRange(t){y(this.#f,t,!0)}#h=X(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDateInRange(){return a(this.#h)}set hasSingleDateInRange(t){y(this.#h,t)}#m=X(()=>a(this.#a).length===1);get hasSingleDateEvent(){return a(this.#m)}set hasSingleDateEvent(t){y(this.#m,t)}#g=X(()=>{if(a(this.#a).length===0)return!0;const t=this.lastAvailableDate?new Date(this.lastAvailableDate):new Date;return t.setHours(23,59,59,999),t<new Date});get isEventPassed(){return a(this.#g)}set isEventPassed(t){y(this.#g,t)}#n=null;#_=null;#b=V(!1);#p=null;#y=V(!1);#w=V();#x=V(je([]));get hasPendingConflicts(){return a(this.#x).length>0}get pendingConflicts(){return a(this.#x)}#r=V(je({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return a(this.#r)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get currentMainId(){return a(this.#t)}get loading(){return a(this.#d)}get error(){return a(this.#i)}get lastSync(){return a(this.#o)}get syncing(){return a(this.#u)}get availableDates(){return a(this.#a)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,s=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:s}}isFullRange(){return Fs(this.dateRange,a(this.#a))}initializeDateRange(){const t=Ul(a(this.#a));t&&(this.dateRange=t),console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}selectUpcomingDates(){const t=Xs(a(this.#a));t&&(this.dateRange=t)}isUpcomingRange(){return Ql(this.dateRange,a(this.#a))}get firstAvailableDate(){return Zs(a(this.#a))}get lastAvailableDate(){return $n(a(this.#a))}get realtimeConnected(){return a(this.#l)}#E=X(()=>{const t=Array.from(this.#e.values()).map(r=>r.data);return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return a(this.#E)}set enrichedProducts(t){y(this.#E,t)}#k=X(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const t=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[s,o]of this.#e){const i=o.data;if(!i.byDate||!jl(i,a(this.#r)))continue;Object.keys(i.byDate).some(h=>{const f=new Date(h);return f>=t&&f<=r})&&n.set(s,o)}return n});get filteredProductsMap(){return a(this.#k)}set filteredProductsMap(t){y(this.#k,t)}#A=X(()=>({total:this.#e.size,frais:Array.from(this.#e.values()).filter(t=>t.pFrais).length,surgel:Array.from(this.#e.values()).filter(t=>t.pSurgel).length,merged:Array.from(this.#e.values()).filter(t=>t.data.isMerged).length}));get stats(){return a(this.#A)}set stats(t){y(this.#A,t)}#M=X(()=>{const t=Array.from(this.#e.values()).map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return a(this.#M)}set uniqueStores(t){y(this.#M,t)}#T=X(()=>{const t=Array.from(this.#e.values()).flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return a(this.#T)}set uniqueWho(t){y(this.#T,t)}#D=X(()=>{const t=Array.from(this.#e.values()).map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return a(this.#D)}set uniqueProductTypes(t){y(this.#D,t)}#C=X(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((i,l)=>i.$id.localeCompare(l.$id));if(a(this.#r).groupBy==="none")return{"":r};const n=Object.groupBy(r,i=>a(this.#r).groupBy==="store"?i.storeInfo?.storeName||"Non défini":i.productType||"Non défini"),s=Object.keys(n).sort((i,l)=>i===""?1:l===""?-1:i.localeCompare(l)),o={};return s.forEach(i=>{o[i]=n[i]}),o});get groupedFilteredProducts(){return a(this.#C)}set groupedFilteredProducts(t){y(this.#C,t)}async initialize(t,r){if(!t?.trim())throw new Error("mainId invalide fourni");if(a(this.#c)&&a(this.#t)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),y(this.#t,t,!0),y(this.#s,r,!0);try{this.#n=await lc(t)}catch(n){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",n),new Error("Impossible d'initialiser le cache IndexedDB")}y(this.#i,null);try{if(await this.#O(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let s;s=await Ya(r),console.log(`[ProductsStore] Hugo chargé: ${s.ingredients.length} ingrédients`),y(this.#v,s.hugoContentHash,!0),oc(s.ingredients,t).forEach(l=>{this.#e.set(l.$id,new rn(l,()=>this.dateRange,()=>a(this.#a)))}),y(this.#a,[...s.allDates],!0),await po(t)||await mo(s.mainGroup_id,s.hugoContentHash,s.allDates,s.name),await this.#N()}this.initializeDateRange(),await this.#q(),y(this.#c,!0);const n=this.#K();this.#_=ho(t,n),this.#z(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#I(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(n){const s=n instanceof Error?n.message:"Erreur lors de l'initialisation";throw y(this.#i,s,!0),console.error("[ProductsStore]",s,n),n}}async#O(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,s)=>{this.#e.set(s,new rn(n,()=>this.dateRange,()=>a(this.#a)))});const r=await this.#n.loadMetadata();y(this.#o,r.lastSync,!0),y(this.#a,[...r.allDates],!0),y(this.#v,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#q(){if(a(this.#t)){y(this.#u,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${a(this.#t)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${a(this.#o)}`);const t=await ao(a(this.#t),{lastSync:a(this.#o),limit:Za});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const s=this.#R(r,n?.data);s.isSynced=!0,n?n.update(s):this.#e.set(r.$id,new rn(s,()=>this.dateRange,()=>a(this.#a)))}),a(this.#o)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${a(this.#o)}`);const{loadUpdatedPurchases:r}=await Pl(async()=>{const{loadUpdatedPurchases:s}=await Promise.resolve().then(()=>nc);return{loadUpdatedPurchases:s}},void 0),n=await r(a(this.#t),a(this.#o),Za);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(s=>{if(s.products?.length){const o=s.products.map(i=>typeof i=="string"?i:i.$id);this.#$(o,s)}})}this.#L(),await this.#j(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{y(this.#u,!1)}}}async#j(){if(this.#n)try{const t=new Map;this.#e.forEach((r,n)=>t.set(n,mr(r.data))),await this.#n.saveProducts(t),await this.#n.saveMetadata({lastSync:a(this.#o),allDates:[...a(this.#a)],hugoContentHash:a(this.#v)}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#Y(){if(this.#n)try{const t=new Map;this.#e.forEach((r,n)=>t.set(n,mr(r.data))),await this.#n.saveProducts(t),await this.#n.updateLastSync(a(this.#o)),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#N(){if(this.#n)try{const t=new Map;this.#e.forEach((r,n)=>t.set(n,mr(r.data))),await this.#n.saveProducts(t),await this.#n.updateLastSync(a(this.#o)),await this.#n.updateAllDates([...a(this.#a)]),await this.#n.updateHugoContentHash(a(this.#v)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(t){console.error("[ProductsStore] Erreur persistance cache complet:",t)}}async#P(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)?.data).filter(n=>n!=null).map(n=>this.#n.upsertProduct(mr(n)));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#L(){y(this.#o,new Date().toISOString(),!0)}async#I(){if(!a(this.#s)||a(this.#d))return!1;try{const t=await sc(a(this.#v),a(this.#s));return t&&!a(this.#b)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${a(this.#s)}, analyse approfondie en cours...`),y(this.#b,!0),await this.#B()),y(this.#w,new Date,!0),t}catch(t){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",t),!1}}async#B(){if(!a(this.#s)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const t=await Ya(a(this.#s)),r=new Map;this.#e.forEach((s,o)=>r.set(o,s.data));const n=await dc(r,t);if(console.log(`[ProductsStore  - hugo change] ${n.summary}`),n.overrideConflicts.length>0&&(y(this.#x,n.overrideConflicts,!0),bt.error(`${n.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>Er.modalOverride.isOpen=!0}})),n.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${n.mergedProductsUpdated.length} produits fusionnés modifiés`),n.removed.length>0){const s=n.removed.filter(o=>o.purchases?.length||o.stockReel||o.who?.length);s.length>0&&console.log(`[ProductsStore] ℹ️ ${s.length} ingrédients supprimés conservés (données utilisateur)`)}y(this.#a,[...t.allDates],!0),y(this.#v,t.hugoContentHash,!0),this.initializeDateRange(),await this.#N(),(n.added.length||n.updated.length||n.removed.length)&&bt.success(n.summary),y(this.#b,!1)}catch(t){console.error("[ProductsStore] Erreur sync Hugo:",t),bt.error("Erreur lors de la mise à jour Hugo")}}#z(){this.#p&&clearInterval(this.#p),this.#p=setInterval(async()=>{await this.#I()},6e4)}#U(){this.#p&&(clearInterval(this.#p),this.#p=null)}#R(t,r){return r?tn(t,r):Xl(t)}#J(t){t.length&&(t.forEach(r=>this.#S(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#S(t){const r=this.#e.get(t.$id),n=this.#R(t,r?.data);r?r.update(n):this.#e.set(t.$id,new rn(n,()=>this.dateRange,()=>a(this.#a)))}#H(t){this.#e.delete(t)}async#Q(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#G(r,t),r}async#W(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#$(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await fo([t.$id]);if(r?.products?.length){const n=r.products.map(s=>typeof s=="string"?s:s.$id).filter(Boolean);return this.#$(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#V(t){const r=Array.from(this.#e.values()).map(n=>n.data).filter(n=>n.purchases?.some(s=>s.$id===t));return r.forEach(n=>{this.#S(n)}),r.map(n=>n.$id)}#G(t,r){const n=Ra(r),s=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.data,c=l.purchases||[];if(!c.some(h=>h.$id===n.$id)){const h=tn({...l,purchases:[...c,n],status:"active"},l);s.push(h)}}}),s.forEach(o=>{const i=this.#e.get(o.$id);i&&i.update(o)})}#$(t,r){const n=Ra(r),s=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.data,c=l.purchases||[],h=c.findIndex(f=>f.$id===n.$id);if(h>=0){const f=[...c];f[h]=n;const g=tn({...l,purchases:f,status:"active"},l);s.push(g)}else{const f=tn({...l,purchases:[...c,r],status:"active"},l);s.push(f)}}}),s.forEach(o=>{const i=this.#e.get(o.$id);i&&i.update(o)})}#K(){return{onProductCreate:t=>{if(this.#S(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(mr(r.data)).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#S(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(mr(r.data)).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#H(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#Q(t);await this.#P(r)},onPurchaseUpdate:async t=>{const r=await this.#W(t);await this.#P(r)},onPurchaseDelete:async t=>{const r=await this.#V(t);await this.#P(r)},onConnect:()=>{y(this.#l,!0)},onDisconnect:()=>{y(this.#l,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}setSearchQuery=Rl(t=>{a(this.#r).searchQuery=t},()=>500);toggleProductType(t){const r=a(this.#r).selectedProductTypes.indexOf(t);r>-1?a(this.#r).selectedProductTypes.splice(r,1):a(this.#r).selectedProductTypes.push(t)}toggleTemperature(t){const r=a(this.#r).selectedTemperatures.indexOf(t);r>-1?a(this.#r).selectedTemperatures.splice(r,1):a(this.#r).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){a(this.#r).selectedProductTypes=[],a(this.#r).selectedTemperatures=[]}setGroupBy(t){a(this.#r).groupBy=t}toggleStore(t){const r=a(this.#r).selectedStores.indexOf(t);r>-1?a(this.#r).selectedStores.splice(r,1):a(this.#r).selectedStores.push(t)}toggleWho(t){const r=a(this.#r).selectedWho.indexOf(t);r>-1?a(this.#r).selectedWho.splice(r,1):a(this.#r).selectedWho.push(t)}clearStoreFilters(){a(this.#r).selectedStores=[]}clearWhoFilters(){a(this.#r).selectedWho=[]}handleSort(t){a(this.#r).sortColumn===t?a(this.#r).sortDirection=a(this.#r).sortDirection==="asc"?"desc":"asc":(a(this.#r).sortColumn=t,a(this.#r).sortDirection="asc")}clearFilters(){y(this.#r,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return a(this.#r).sortColumn?[...t].sort((r,n)=>{let s=r[a(this.#r).sortColumn],o=n[a(this.#r).sortColumn];return a(this.#r).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,o=parseFloat(o)||0):a(this.#r).sortColumn==="purchases"&&(s=r.purchases?.length||0,o=n.purchases?.length||0),s<o?a(this.#r).sortDirection==="asc"?-1:1:s>o?a(this.#r).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)?.data??null}getProductModelById(t){return this.#e.get(t)??null}hasConversions(t){const r=this.#e.get(t)?.data;return r?.byDate?Ol(r.byDate):!1}async forceReload(t,r){await this.clearCache(),await this.initialize(t,r)}async clearCache(){this.#e.clear(),y(this.#a,[],!0),y(this.#o,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(s=>{const o=this.#e.get(s);if(o){const i={...o.data,status:n};o.update(i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#_?.(),this.#_=null,this.#U(),this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const F=new gc;function Xa(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function _c(e){const t=e.substring(0,4),r=e.slice(-10);return`${t}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const bc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var yc=Fi("<svg><!><!></svg>");function ge(e,t){ee(t,!0);const r=ke(t,"color",3,"currentColor"),n=ke(t,"size",3,24),s=ke(t,"strokeWidth",3,2),o=ke(t,"absoluteStrokeWidth",3,!1),i=ke(t,"iconNode",19,()=>[]),l=pe(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=yc();Ca(c,g=>({...bc,...l,width:n(),height:n(),stroke:r(),"stroke-width":g,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(s())*24/Number(n()):s()]);var h=u(c);st(h,17,i,Vr,(g,p)=>{var m=X(()=>is(a(p),2));let _=()=>a(m)[0],$=()=>a(m)[1];var b=K(),E=N(b);ol(E,_,!0,(C,x)=>{Ca(C,()=>({...$()}))}),v(g,b)});var f=d(h);ve(f,()=>t.children??ue),v(e,c),te()}function Gn(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ge(e,me({name:"archive"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function wc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ge(e,me({name:"bean"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Sc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ge(e,me({name:"beef"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function xc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ge(e,me({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Pc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ge(e,me({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function kr(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];ge(e,me({name:"check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function $c(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ge(e,me({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function wo(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];ge(e,me({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Ec(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ge(e,me({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function kc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];ge(e,me({name:"circle-arrow-down"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Ac(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];ge(e,me({name:"circle-arrow-right"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Fa(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ge(e,me({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Mc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ge(e,me({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Tc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];ge(e,me({name:"circle-x"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Dc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];ge(e,me({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Cc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];ge(e,me({name:"clipboard-pen-line"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Nc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];ge(e,me({name:"clock"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Ic(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];ge(e,me({name:"cloud"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function _a(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ge(e,me({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Rc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ge(e,me({name:"egg"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Oc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];ge(e,me({name:"euro"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function nn(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];ge(e,me({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function So(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ge(e,me({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function xo(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];ge(e,me({name:"history"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function qc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ge(e,me({name:"info"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function jc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ge(e,me({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Lc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ge(e,me({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Bc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ge(e,me({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Po(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];ge(e,me({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function zc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];ge(e,me({name:"lock"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Uc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ge(e,me({name:"log-in"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Hc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];ge(e,me({name:"message-circle-more"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Qc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ge(e,me({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function $o(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ge(e,me({name:"message-circle"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Eo(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ge(e,me({name:"moon"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Wc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];ge(e,me({name:"package-check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Jr(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ge(e,me({name:"package"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Vc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];ge(e,me({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Gc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ge(e,me({name:"plus"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Kc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];ge(e,me({name:"receipt"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Yc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ge(e,me({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Jc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ge(e,me({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Zc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ge(e,me({name:"save"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Xc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ge(e,me({name:"search"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function ko(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ge(e,me({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Jt(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ge(e,me({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Ao(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ge(e,me({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Kn(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ge(e,me({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Lt(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ge(e,me({name:"store"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Mo(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ge(e,me({name:"sun"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Fc(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];ge(e,me({name:"thermometer"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function En(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ge(e,me({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function To(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];ge(e,me({name:"user-plus"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Zr(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ge(e,me({name:"user"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function on(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ge(e,me({name:"users"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function eu(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ge(e,me({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function Tt(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ge(e,me({name:"x"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=K(),l=N(i);ve(l,()=>t.children??ue),v(s,i)},$$slots:{default:!0}})),te()}function tu(e,t){const r=e.reduce((s,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return s+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function ru(e,t){const r=e.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const s=t.purchaseStatus||"delivered";let o=t.purchaseDeliveryDate||null;s==="delivered"&&!o&&(o=new Date().toISOString());const i=e.flatMap(c=>c.missingQuantities.map(h=>({productId:c.productId,quantity:h.q,unit:h.u,status:s,notes:t.notes||"",store:t.store||"",who:t.who||void 0,price:void 0,orderDate:null,deliveryDate:o,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:t}}async function nu(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=tu(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const s=100,o=[];if(n<=s)o.push(t);else{let p=[],m=0;for(const _ of t){const $=(_.isSynced?0:1)+_.missingQuantities.length;m+$>s?(p.length>0&&o.push(p),p=[_],m=$):(p.push(_),m+=$)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,h=0;for(let p=0;p<o.length;p++){const m=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${m.length} produits)`);try{const _=await ru(m,r),$=await au(_);if(i.push($),$.success)l+=$.productsCreated,c+=$.purchasesCreated,h+=$.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${$.error}`);break}}catch(_){const $=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,_),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:$,timestamp:new Date().toISOString()});break}}const f=i.every(p=>p.success),g=i.some(p=>!p.success);return{success:f,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:h,error:g?"Un ou plusieurs lots ont échoué":void 0}}async function au(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const s=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const o=JSON.parse(s.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var su=(e,t,r)=>t(a(r).id),ou=w("<span> </span>"),iu=w('<button><!> <span class="max-w-32 truncate"> </span> <!> <!></button>'),lu=w('<span class="flex items-center gap-1"><!> </span>'),cu=w('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),uu=w('<div class="flex flex-wrap gap-2"></div> <!>',1);function Gr(e,t){ee(t,!0);let r=ke(t,"badgeSize",3,"btn-lg"),n=ke(t,"color",3,"primary"),s=ke(t,"badgeStyle",3,""),o=ke(t,"onToggleItem",3,()=>{}),i=ke(t,"showStats",3,!1),l=ke(t,"showIcon",3,!0),c=V(je({}));Ht(()=>{const b={};t.items.forEach(E=>{b[E.id]=E.selected??!0}),y(c,b,!0)});function h(b){a(c)[b]=!a(c)[b],o()(b)}const f=X(()=>Object.values(a(c)).filter(Boolean).length),g=X(()=>Object.values(a(c)).filter(b=>!b).length);var p=uu(),m=N(p);st(m,21,()=>t.items,b=>b.id,(b,E)=>{const C=X(()=>a(c)[a(E).id]);var x=iu();x.__click=[su,h,E];var A=u(x);{var S=G=>{var oe=K(),q=N(oe);or(q,()=>a(E).icon,(I,R)=>{R(I,{class:"h-3 w-3",get title(){return a(E).title}})}),v(G,oe)};k(A,G=>{a(E).icon&&G(S)})}var M=d(A,2),P=u(M),T=d(M,2);{var D=G=>{var oe=ou(),q=u(oe);j(()=>{Me(oe,1,`badge badge-sm badge-${n()??""}`),B(q,a(E).badge)}),v(G,oe)};k(T,G=>{a(E).badge&&G(D)})}var Q=d(T,2);{var L=G=>{var oe=K(),q=N(oe);{var I=re=>{kr(re,{size:16})},R=re=>{Gc(re,{size:16})};k(q,re=>{a(C)?re(I):re(R,!1)})}v(G,oe)};k(Q,G=>{l()&&G(L)})}j(()=>{Me(x,1,`btn ${r()??""} btn-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${a(C)?`${s()} hover:line-through `:"btn-dash hover:border-solid "}`),Xt(x,"title",a(C)?"Retirer de la liste":"Réajouter à la liste"),B(P,a(E).label)}),v(b,x)});var _=d(m,2);{var $=b=>{var E=cu(),C=u(E),x=u(C),A=u(x);kr(A,{class:"text-success h-3 w-3"});var S=d(A),M=d(x,2);{var P=Q=>{var L=lu(),G=u(L);Tt(G,{class:"text-error h-3 w-3"});var oe=d(G);j(()=>B(oe,` ${a(g)??""} retirés`)),v(Q,L)};k(M,Q=>{a(g)>0&&Q(P)})}var T=d(C,2),D=u(T);j(()=>{B(S,` ${a(f)??""} actifs`),B(D,`Total: ${t.items.length??""} items`)}),v(b,E)};k(_,b=>{i()&&b($)})}v(e,p),te()}Je(["click"]);function du(e,t){y(t,!a(t))}var vu=w('<span class="text-base-content font-semibold"> </span>'),fu=w('<div class="text-base-content/80 flex-1"> </div>'),hu=w('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),pu=w('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),mu=w('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Do(e,t){let r=ke(t,"icon",3,qc),n=ke(t,"class",3,""),s=ke(t,"initiallyOpen",3,!1),o=r(),i=V(je(s())),l=je(t.children);var c=mu(),h=u(c);h.__click=[du,i];var f=u(h),g=u(f);o(g,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(g,2);{var m=A=>{var S=vu(),M=u(S);j(()=>B(M,t.title)),v(A,S)};k(p,A=>{t.title&&A(m)})}var _=d(f,2);{var $=A=>{var S=fu(),M=u(S);j(()=>B(M,t.contentVisible)),v(A,S)};k(_,A=>{t.contentVisible&&A($)})}var b=d(_,2);{var E=A=>{var S=hu(),M=u(S),P=u(M);{var T=L=>{var G=pt("en savoir plus");v(L,G)},D=L=>{var G=pt("masquer");v(L,G)};k(P,L=>{a(i)?L(D,!1):L(T)})}var Q=d(M,2);{let L=X(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${a(i)?"rotate-180":""}`);wo(Q,{get class(){return a(L)}})}v(A,S)};k(b,A=>{l&&A(E)})}var C=d(h,2);{var x=A=>{var S=pu(),M=u(S),P=u(M);ve(P,()=>t.children??ue),j(()=>Me(S,1,`overflow-hidden transition-all duration-200 ${a(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),v(A,S)};k(C,A=>{l&&A(x)})}j(()=>{Me(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Qs(c,t.style),Me(h,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Xt(h,"aria-expanded",a(i))}),v(e,c)}Je(["click"]);async function gu(e,t,r,n,s,o,i,l){if(!(!a(t)||a(r))){y(r,!0),y(n,null),y(s,null);try{const c=`FACTURE_${Date.now()}`,h=a(o).map(m=>m.$id);F.setSyncStatus(h,!0);const f=[];for(const m of a(o)){const _=F.getProductModelById(m.$id);f.push({productId:m.$id,isSynced:m.isSynced,productData:m,missingQuantities:_?.stats.missingQuantities||[]})}const g={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${a(o).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${f.length} produits...`),l.onClose();const p=await nu(F.currentMainId,f,g);if(p.success)y(s,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const h=c instanceof Error?c.message:"Erreur inconnue";y(n,h,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),F.clearSyncStatus()}finally{y(r,!1)}}}function es(e,t,r){a(t)||r.onClose()}var _u=w('<div class="alert alert-error"><!> <span> </span></div>'),bu=w('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),yu=w(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes <strong>pour la période sélectionnée</strong>,
            c'est à dire le besoin total pour chaque produit sur cette période
            moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),wu=w("<option> </option>"),Su=w("<option> </option>"),xu=w('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),Pu=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),$u=w("<!> ",1),Eu=w(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function ku(e,t){ee(t,!0);let r=V(!1),n=V(null),s=V(null),o=je({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=V(je(new Set));Ht(()=>{y(i,new Set(t.products.map(ie=>ie.$id)),!0)});const l=X(()=>t.products.filter(ie=>a(i).has(ie.$id))),c=X(()=>a(l).length!==0),h=X(()=>{const ie=F.dateRange;let be="";return ie?.start&&ie?.end&&(ie.start===ie.end?be=` - ${Hr(ie.start)}`:be=` - Du ${Hr(ie.start)} au ${Hr(ie.end)}`),`Achat groupé (${a(l).length} produits sélectionnés)${be}`});function f(ie){const be=new Set(a(i));be.has(ie)?be.delete(ie):be.add(ie),y(i,be,!0)}const g=X(()=>t.products.map(ie=>{const be=F.getProductModelById(ie.$id);return{id:ie.$id,label:ie.productName,title:`${ie.productName} - Manque: ${be?.stats.formattedMissingQuantities||"-"}`,badge:be?.stats.formattedMissingQuantities||"-"}}));var p=Eu(),m=u(p),_=u(m),$=u(_),b=u($);Jt(b,{class:"h-5 w-5"});var E=d(b),C=d($,2);C.__click=[es,r,t];var x=u(C);Tt(x,{class:"h-4 w-4"});var A=d(_,2),S=u(A);{var M=ie=>{var be=_u(),De=u(be);En(De,{class:"h-4 w-4"});var ze=d(De,2),Ee=u(ze);j(()=>B(Ee,a(n))),v(ie,be)};k(S,ie=>{a(n)&&ie(M)})}var P=d(S,2);{var T=ie=>{var be=bu(),De=u(be);kr(De,{class:"h-4 w-4"});var ze=d(De,2),Ee=u(ze),Dt=d(Ee);{var Cr=ut=>{var Wt=pt("+ 1 dépense globale");v(ut,Wt)};k(Dt,ut=>{a(s).expense&&ut(Cr)})}var Nr=d(Dt,2);{var $t=ut=>{var Wt=pt();j(()=>B(Wt,`(traité en ${a(s).batches??""} lots)`)),v(ut,Wt)};k(Nr,ut=>{a(s).batches&&a(s).batches>1&&ut($t)})}j(()=>B(Ee,`Achat groupé créé avec succès ! ${a(s).purchases??""} produit(s) validés `)),v(ie,be)};k(P,ie=>{a(s)&&ie(T)})}var D=d(P,2),Q=u(D);Do(Q,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit sur la période sélectionnée.",class:"bg-base-200",children:(ie,be)=>{var De=yu();v(ie,De)},$$slots:{default:!0}});var L=d(D,2),G=d(u(L),2),oe=u(G),q=u(oe),I=u(q);Lt(I,{class:"h-4 w-4 opacity-50"});var R=d(I,2),re=d(q,2);st(re,21,()=>F.uniqueStores,Vr,(ie,be)=>{var De=wu(),ze=u(De),Ee={};j(()=>{B(ze,a(be)),Ee!==(Ee=a(be))&&(De.value=(De.__value=a(be))??"")}),v(ie,De)});var z=d(oe,2),W=u(z),ae=u(W);Zr(ae,{class:"h-4 w-4 opacity-50"});var ye=d(ae,2),U=d(W,2);st(U,21,()=>F.uniqueWho,Vr,(ie,be)=>{var De=Su(),ze=u(De),Ee={};j(()=>{B(ze,a(be)),Ee!==(Ee=a(be))&&(De.value=(De.__value=a(be))??"")}),v(ie,De)});var Y=d(z,2),Z=u(Y),le=u(Z);Oc(le,{class:"h-4 w-4 opacity-50"});var _e=d(le,2),J=d(G,2),de=u(J),H=u(de),ne=u(H);ne.value=ne.__value="delivered";var Se=d(ne);Se.value=Se.__value="ordered";var Ae=d(H,2),Ne=d(de,2);{var se=ie=>{var be=xu(),De=u(be),ze=d(u(De),2);j(()=>ze.disabled=a(r)),qe(ze,()=>o.deliveryDate,Ee=>o.deliveryDate=Ee),v(ie,be)};k(Ne,ie=>{o.status==="ordered"&&ie(se)})}var we=d(J,2),Te=u(we),Oe=u(Te);$o(Oe,{class:"h-4 w-4 opacity-50"});var Ge=d(Oe,2),Ve=d(L,2),ce=d(u(Ve),2);Gr(ce,{get items(){return a(g)},onToggleItem:f,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var xe=d(Ve,2),Be=u(xe);Be.__click=[es,r,t];var Ke=d(Be,2);Ke.__click=[gu,c,r,n,s,l,o,t];var Pe=u(Ke);{var $e=ie=>{var be=Pu();v(ie,be)},Ue=ie=>{var be=$u(),De=N(be);Jt(De,{class:"h-4 w-4"});var ze=d(De);j(()=>B(ze,` Valider ${a(l).length??""} produit(s)`)),v(ie,be)};k(Pe,ie=>{a(r)?ie($e):ie(Ue,!1)})}j(()=>{B(E,` ${a(h)??""}`),C.disabled=a(r),R.disabled=a(r),ye.disabled=a(r),_e.disabled=a(r),H.disabled=a(r),Me(Ae,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),Ge.disabled=a(r),Be.disabled=a(r),Ke.disabled=a(r)||!a(c)}),qe(R,()=>o.store,ie=>o.store=ie),qe(ye,()=>o.who,ie=>o.who=ie),qe(_e,()=>o.expense,ie=>o.expense=ie),rr(H,()=>o.status,ie=>o.status=ie),qe(Ge,()=>o.notes,ie=>o.notes=ie),v(e,p),te()}Je(["click"]);function Yn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:wc};case"animaux":return{displayName:"Viandes et Poissons",icon:Sc};case"legumes":return{displayName:"Fruits et Légumes",icon:Pc};case"sucres":return{displayName:"Sucrées",icon:xc};case"lof":return{displayName:"L.O.F",icon:Rc};case"autres":return{displayName:"Autres",icon:$c};case"epices":return{displayName:"Assaisonnements",icon:Lc};case"frais":return{displayName:"Produits Frais",icon:Jc};default:return{displayName:e,icon:Jr}}}function Jn(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function ba(e,t){let r,n;if(t==="gr."&&e>=1e3){const s=e/1e3;r=Ln(s),n="kg"}else if(t==="ml"&&e>=1e3){const s=e/1e3;r=Ln(s),n="l"}else r=Ln(e),n=t;return`${r} ${n}`}function Ln(e){return(Math.round(e*10)/10).toString().replace(/\.0$/,"")}function kn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Au(e){if(!e)return"";try{return new Date(e).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"})}catch{return e}}function Zn(e){switch(e){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function ts(e){return e?kn(e):"-"}function Mu(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const s=n.status||"direct",o=n.unit||"unit",i=`${s}_${o}`;if(!r[i]){const l=Zn(s);r[i]={status:s,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Tu(s),deliveryDate:s==="ordered"&&n.deliveryDate?Au(n.deliveryDate):void 0}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t).map(r=>({...r,quantity:ba(r.quantity,r.unit).replace(` ${r.unit}`,"")}))}function Tu(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"Check";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function Du(e){let t=V(!1),r=V(null);const n=X(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),F.getEnrichedProductById(e))),s=X(()=>a(n)?.who??[]),o=X(()=>a(n)?.stockParsed??null),i=X(()=>a(n)?.purchases??[]),l=X(()=>a(n)?.byDate?ql(a(n).byDate):[]),c=je({purchase:{quantity:null,unit:"",store:"",who:Er.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let h=V(!1),f=V(null);Ht(()=>{!a(n)||a(h)||(c.purchase.quantity=a(n).missingQuantityArray[0]?.q??null,c.purchase.unit=a(n).totalNeededArray[0]?.u??"",c.purchase.store=a(n).storeInfo?.storeName??"",c.purchase.who=Er.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=a(n).totalNeededArray[0]?.u??"",c.store.name=a(n).storeInfo?.storeName??"",c.store.comment=a(n).storeInfo?.storeComment??null,c.who=a(n)?.who?[...a(n).who]:[],y(f,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),y(h,!0))});const g=X(()=>a(f)?{store:JSON.stringify(c.store)!==JSON.stringify(a(f).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(a(f).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?a(o)?c.stock.quantity.toString()!==a(o).quantity||c.stock.unit!==a(o).unit||(c.stock.notes||"")!==(a(o).notes||""):!0:!1}const m=X(()=>!!(a(f)&&(a(g).store||a(g).stock||a(g).who)));let _=V(null);const $=X(()=>a(_)?a(i).find(q=>q.$id===a(_))??null:null);async function b(q,I){y(t,!0),y(r,null);try{const R=await q();return I&&E("success",I),R}catch(R){const re=R instanceof Error?R.message:"Une erreur est survenue";return y(r,re,!0),E("error",re),console.error("[ProductModalState]",R),null}finally{y(t,!1)}}function E(q,I){const R=new CustomEvent("toast",{detail:{type:q,message:I}});window.dispatchEvent(R)}async function C(){a(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!F.currentMainId)throw new Error("mainId non disponible");const{quantity:q,unit:I}=Jn(c.purchase.quantity,c.purchase.unit);a(n).isSynced||(console.log(`[ProductModalState] Produit ${a(n).$id} local, création pour purchase...`),await Rt(a(n).$id,{},z=>F.getEnrichedProductById(z)));const R=c.purchase.status||"delivered";let re=c.purchase.deliveryDate||null;R==="delivered"&&!re&&(re=new Date().toISOString()),await co({products:[a(n).$id],mainId:F.currentMainId,unit:I,quantity:q,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:R,orderDate:c.purchase.orderDate||null,deliveryDate:re}),c.purchase={quantity:a(n).missingQuantityArray[0]?.q??null,unit:a(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function x(q){y(_,q.$id,!0)}function A(){y(_,null)}async function S(q){q.$id&&await b(async()=>{const{quantity:I,unit:R}=Jn(q.quantity,q.unit),re=q.status||null;let z=q.deliveryDate||null;re==="delivered"&&!z&&(z=new Date().toISOString()),await uo(q.$id,{unit:R,quantity:I,store:q.store||null,who:q.who||null,notes:q.notes||"",price:q.price||null,status:re,orderDate:q.orderDate||null,deliveryDate:z}),y(_,null)},"Achat modifié avec succès")}async function M(q){const I=a(i).find(R=>R.$id===q);I&&confirm(`Supprimer cet achat (${I.quantity} ${I.unit}) ?`)&&await b(async()=>{await vo(q)},"Achat supprimé avec succès")}async function P(){a(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const q={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update stock normal...`),await Vn(a(n).$id,JSON.stringify(q))):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création stock avec upsert...`),await Rt(a(n).$id,{stockReel:JSON.stringify(q)},I=>F.getEnrichedProductById(I))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function T(){a(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, suppression stock normal...`),await Vn(a(n).$id,null)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, suppression stock avec upsert...`),await Rt(a(n).$id,{stockReel:null},q=>F.getEnrichedProductById(q)))},"Stock supprimé")}async function D(q){a(n)&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, setWho normal...`),await oo(a(n).$id,q)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création who avec upsert...`),await Rt(a(n).$id,{who:q},I=>F.getEnrichedProductById(I)))},"Volontaires mis à jour")}async function Q(q){a(n)&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update store normal...`),await so(a(n).$id,q)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création store avec upsert...`),await Rt(a(n).$id,{store:JSON.stringify(q)},I=>F.getEnrichedProductById(I)))},"Magasin mis à jour")}async function L(q){a(n)&&await b(async()=>{a(n).isSynced?await ma(a(n).$id,q,!0):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création who avec upsert...`),await Rt(a(n).$id,{totalNeededOverride:JSON.stringify(q)},I=>F.getEnrichedProductById(I)))},"Override appliqué")}async function G(){a(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await io(a(n).$id,!0)},"Override supprimé")}async function oe(){!a(n)||!a(m)||await b(async()=>{const q={};if(a(g).stock&&c.stock.quantity&&c.stock.unit){const I={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};q.stockReel=JSON.stringify(I)}if(a(g).who&&(q.who=c.who),a(g).store){const I={storeName:c.store.name||"",storeComment:c.store.comment||void 0};q.storeInfo=I}Object.keys(q).length>0&&(await lo(a(n).$id,q,I=>F.getEnrichedProductById(I)),y(f,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return a(t)},get error(){return a(r)},get product(){return a(n)},get recipes(){return a(l)},get whoList(){return a(s)},get stockParsed(){return a(o)},get purchasesList(){return a(i)},get editingPurchaseId(){return a(_)},get editingPurchaseData(){return a($)},forms:c,addPurchase:C,startEditPurchase:x,cancelEditPurchase:A,updateEditedPurchase:S,removePurchase:M,setStock:P,removeStock:T,setWho:D,updateStore:Q,setOverride:L,removeOverride:G,saveAllChanges:oe,get hasChanges(){return a(g)},get hasAnyChanges(){return a(m)},formatQuantity:ba,formatDate:kn}}var Cu=w('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),Nu=w('<div class="text-xs text-base-content/60 mt-1"> </div>'),Iu=w('<div class="font-medium"> </div> <!>',1),Ru=w('<pre class="text-xs"> </pre>'),Ou=w('<span class="text-base-content/50 italic">Non défini</span>'),qu=w('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),ju=w('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function An(e,t){ee(t,!0);let r=ke(t,"title",3,"Événement terminé"),n=ke(t,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),s=ke(t,"showData",3,!0),o=ke(t,"data",3,null),i=ke(t,"dataLabel",3,"");var l=ju(),c=u(l),h=u(c);xo(h,{class:"h-5 w-5 text-warning"});var f=d(h,2);zc(f,{class:"h-4 w-4 text-warning/70"});var g=d(f,2),p=u(g),m=d(c,2),_=u(m),$=d(m,2);{var b=E=>{var C=qu(),x=u(C);{var A=D=>{var Q=Cu(),L=u(Q);j(()=>B(L,`${i()??""} :`)),v(D,Q)};k(x,D=>{i()&&D(A)})}var S=d(x,2),M=u(S);{var P=D=>{var Q=pt();j(()=>B(Q,o())),v(D,Q)},T=D=>{var Q=K(),L=N(Q);{var G=q=>{var I=pt();j(R=>B(I,R),[()=>o().join(", ")]),v(q,I)},oe=q=>{var I=K(),R=N(I);{var re=W=>{var ae=K(),ye=N(ae);{var U=Z=>{var le=Iu(),_e=N(le),J=u(_e),de=d(_e,2);{var H=ne=>{var Se=Nu(),Ae=u(Se);j(()=>B(Ae,o().storeComment)),v(ne,Se)};k(de,ne=>{o().storeComment&&ne(H)})}j(()=>B(J,o().storeName)),v(Z,le)},Y=Z=>{var le=Ru(),_e=u(le);j(J=>B(_e,J),[()=>JSON.stringify(o(),null,2)]),v(Z,le)};k(ye,Z=>{o().storeName?Z(U):Z(Y,!1)})}v(W,ae)},z=W=>{var ae=Ou();v(W,ae)};k(R,W=>{typeof o()=="object"&&o()!==null?W(re):W(z,!1)},!0)}v(q,I)};k(L,q=>{Array.isArray(o())&&o().length>0?q(G):q(oe,!1)},!0)}v(D,Q)};k(M,D=>{typeof o()=="string"||typeof o()=="number"?D(P):D(T,!1)})}v(E,C)};k($,E=>{s()&&o()&&E(b)})}j(()=>{B(p,r()),B(_,n())}),v(e,l),te()}function Lu(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Bu(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function zu(e,t){t().cancelEditPurchase()}var Uu=w('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Hu=w('<span class="loading loading-spinner loading-sm"></span>'),Qu=w(`<h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>`,1),Wu=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Vu=w("<th>Actions</th>"),Gu=w('<span class="loading loading-spinner loading-sm"></span>'),Ku=w('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Livré</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Yu=(e,t,r)=>t(a(r)),Ju=(e,t,r)=>t(a(r).$id),Zu=w('<span class="loading loading-spinner loading-sm"></span>'),Xu=w('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),Fu=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),ed=w('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),td=w('<div class="space-y-4"><!></div> <!>',1);function rd(e,t){ee(t,!0);let r=ke(t,"modalState",7),n=ke(t,"isArchiveMode",3,!1);function s(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function o(b){return b.quantity!==null&&b.quantity!==0&&b.unit?.trim()!==""}function i(b){r().removePurchase(b)}function l(b){r().startEditPurchase(b)}var c=td(),h=N(c),f=u(h);{var g=b=>{An(b,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},p=b=>{var E=Qu(),C=N(E),x=u(C);Jt(x,{class:"h-5 w-5"});var A=d(C,2),S=u(A),M=d(u(S),2),P=u(M),T=u(P);Jr(T,{class:"h-4 w-4 opacity-50"});var D=d(T,2),Q=d(P,2),L=u(Q);L.value=L.__value="";var G=d(L);G.value=G.__value="kg";var oe=d(G);oe.value=oe.__value="gr.";var q=d(oe);q.value=q.__value="l.";var I=d(q);I.value=I.__value="ml";var R=d(I);R.value=R.__value="unité";var re=d(R);re.value=re.__value="bottes";var z=d(Q,2),W=u(z);Lt(W,{class:"h-4 w-4 opacity-50"});var ae=d(W,2),ye=d(z,2),U=u(ye);Zr(U,{class:"h-4 w-4 opacity-50"});var Y=d(U,2),Z=d(ye,2),le=d(u(Z),2),_e=d(M,2),J=u(_e),de=u(J);$o(de,{class:"h-4 w-4 opacity-50"});var H=d(de,2),ne=d(_e,2),Se=u(ne),Ae=u(Se),Ne=u(Ae),se=u(Ne);se.value=se.__value="delivered";var we=d(se);we.value=we.__value="ordered";var Te=d(Ae,2),Oe=d(Se,2);{var Ge=Pe=>{var $e=Uu(),Ue=d(u($e),2);qe(Ue,()=>r().forms.purchase.deliveryDate,ie=>r().forms.purchase.deliveryDate=ie),v(Pe,$e)};k(Oe,Pe=>{r().forms.purchase.status==="ordered"&&Pe(Ge)})}var Ve=d(ne,2),ce=u(Ve);ce.__click=[Lu,s,r];var xe=u(ce);{var Be=Pe=>{var $e=Hu();v(Pe,$e)},Ke=Pe=>{var $e=pt("Ajouter l'achat");v(Pe,$e)};k(xe,Pe=>{r().loading?Pe(Be):Pe(Ke,!1)})}j(Pe=>{Me(Te,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),ce.disabled=Pe},[()=>r().loading||!s()]),qe(D,()=>r().forms.purchase.quantity,Pe=>r().forms.purchase.quantity=Pe),rr(Q,()=>r().forms.purchase.unit,Pe=>r().forms.purchase.unit=Pe),qe(ae,()=>r().forms.purchase.store,Pe=>r().forms.purchase.store=Pe),qe(Y,()=>r().forms.purchase.who,Pe=>r().forms.purchase.who=Pe),qe(le,()=>r().forms.purchase.price,Pe=>r().forms.purchase.price=Pe),qe(H,()=>r().forms.purchase.notes,Pe=>r().forms.purchase.notes=Pe),rr(Ne,()=>r().forms.purchase.status,Pe=>r().forms.purchase.status=Pe),v(b,E)};k(f,b=>{n()?b(g):b(p,!1)})}var m=d(h,2);{var _=b=>{var E=Wu(),C=u(E);Jt(C,{class:"mx-auto mb-2 h-12 w-12"}),v(b,E)},$=b=>{var E=ed(),C=u(E),x=u(C),A=u(x),S=d(u(A),8);{var M=T=>{var D=Vu();v(T,D)};k(S,T=>{n()||T(M)})}var P=d(x);st(P,21,()=>r().purchasesList,T=>T.$id,(T,D,Q)=>{var L=K(),G=N(L);{var oe=I=>{var R=Ku(),re=u(R),z=u(re),W=u(z),ae=d(W,2),ye=u(ae);ye.value=ye.__value="kg";var U=d(ye);U.value=U.__value="gr.";var Y=d(U);Y.value=Y.__value="l.";var Z=d(Y);Z.value=Z.__value="ml";var le=d(Z);le.value=le.__value="unité";var _e=d(le);_e.value=_e.__value="bottes";var J=d(re),de=u(J),H=d(J),ne=u(H),Se=d(H),Ae=u(Se),Ne=u(Ae);Ne.value=Ne.__value="ordered";var se=d(Ne);se.value=se.__value="delivered";var we=d(Se),Te=u(we),Oe=d(we),Ge=u(Oe),Ve=d(Oe),ce=u(Ve),xe=d(Ve),Be=u(xe),Ke=d(xe),Pe=u(Ke),$e=u(Pe);$e.__click=[Bu,r,o];var Ue=u($e);{var ie=Ee=>{var Dt=Gu();v(Ee,Dt)},be=Ee=>{Zc(Ee,{class:"h-3 w-3"})};k(Ue,Ee=>{r().loading?Ee(ie):Ee(be,!1)})}var De=d($e,2);De.__click=[zu,r];var ze=u(De);Tt(ze,{class:"h-3 w-3"}),j(Ee=>$e.disabled=Ee,[()=>r().loading||!o(a(D))]),qe(W,()=>a(D).quantity,Ee=>a(D).quantity=Ee),rr(ae,()=>a(D).unit,Ee=>a(D).unit=Ee),qe(de,()=>a(D).store,Ee=>a(D).store=Ee),qe(ne,()=>a(D).who,Ee=>a(D).who=Ee),rr(Ae,()=>a(D).status,Ee=>a(D).status=Ee),qe(Te,()=>a(D).orderDate,Ee=>a(D).orderDate=Ee),qe(Ge,()=>a(D).deliveryDate,Ee=>a(D).deliveryDate=Ee),qe(ce,()=>a(D).price,Ee=>a(D).price=Ee),qe(Be,()=>a(D).notes,Ee=>a(D).notes=Ee),v(I,R)},q=I=>{var R=Fu(),re=u(R),z=u(re),W=d(re),ae=u(W),ye=d(W),U=u(ye),Y=d(ye),Z=u(Y),le=u(Z),_e=d(Y),J=u(_e),de=d(_e),H=u(de),ne=d(de),Se=u(ne),Ae=d(ne),Ne=u(Ae),se=d(Ae);{var we=Te=>{var Oe=Xu(),Ge=u(Oe),Ve=u(Ge);Ve.__click=[Yu,l,D];var ce=u(Ve);Kn(ce,{class:"h-4 w-4"});var xe=d(Ve,2);xe.__click=[Ju,i,D];var Be=u(xe);{var Ke=$e=>{var Ue=Zu();v($e,Ue)},Pe=$e=>{Tt($e,{class:"h-4 w-4"})};k(Be,$e=>{r().loading?$e(Ke):$e(Pe,!1)})}j(()=>xe.disabled=r().loading),v(Te,Oe)};k(se,Te=>{n()||Te(we)})}j((Te,Oe,Ge,Ve,ce)=>{B(z,Te),B(ae,a(D).store||"-"),B(U,a(D).who||"-"),Me(Z,1,`badge badge-sm ${Oe??""}`),B(le,Ge),B(J,Ve),B(H,ce),B(Se,a(D).price?`${a(D).price}€`:"-"),B(Ne,a(D).notes||"-")},[()=>ba(a(D).quantity,a(D).unit),()=>Zn(a(D).status).class,()=>Zn(a(D).status).text,()=>ts(a(D).orderDate),()=>ts(a(D).deliveryDate)]),v(I,R)};k(G,I=>{r().editingPurchaseId===a(D).$id?I(oe):I(q,!1)})}v(T,L)}),v(b,E)};k(m,b=>{r().purchasesList.length===0?b(_):b($,!1)})}v(e,c),te()}Je(["click"]);async function nd(e,t){await t()?.removeStock()}var ad=w(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),sd=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},od=w(`<h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`,1),id=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),ld=w('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),cd=w('<span class="loading loading-spinner loading-xs"></span>'),ud=w('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),dd=w('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),vd=w('<div class="space-y-4"><!></div> <!>',1);function fd(e,t){ee(t,!0);let r=ke(t,"modalState",7),n=ke(t,"isArchiveMode",3,!1);var s=vd(),o=N(s),i=u(o);{var l=p=>{An(p,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return r().stockParsed},dataLabel:"Stock actuel"})},c=p=>{var m=od(),_=N(m),$=u(_);Gn($,{class:"h-5 w-5"});var b=d(_,2),E=u(b),C=u(E),x=u(C),A=d(C,2),S=u(A);Do(S,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(U,Y)=>{var Z=ad();v(U,Z)},$$slots:{default:!0}});var M=d(A,2),P=u(M),T=u(P);Jr(T,{class:"h-4 w-4 opacity-50"});var D=d(T,2),Q=d(P,2),L=u(Q);L.value=L.__value="";var G=d(L);G.value=G.__value="kg";var oe=d(G);oe.value=oe.__value="gr.";var q=d(oe);q.value=q.__value="l.";var I=d(q);I.value=I.__value="ml";var R=d(I);R.value=R.__value="unité";var re=d(R);re.value=re.__value="bottes";var z=d(M,2),W=u(z),ae=d(z,2),ye=u(ae);ye.__click=[sd,r],j(U=>{B(x,`Déclarer le stock réel du ${U??""}`),ye.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),qe(D,()=>r().forms.stock.quantity,U=>r().forms.stock.quantity=U),rr(Q,()=>r().forms.stock.unit,U=>r().forms.stock.unit=U),qe(W,()=>r().forms.stock.notes,U=>r().forms.stock.notes=U),v(p,m)};k(i,p=>{n()?p(l):p(c,!1)})}var h=d(o,2);{var f=p=>{var m=id(),_=u(m);Gn(_,{class:"mx-auto mb-2 h-12 w-12"}),v(p,m)},g=p=>{var m=dd(),_=u(m),$=d(u(_),2),b=u($),E=d(u(b),2),C=u(E),x=d(b,2),A=d(u(x),2),S=u(A),M=d(x,2);{var P=Q=>{var L=ld(),G=d(u(L),2),oe=u(G);j(()=>B(oe,r().stockParsed.notes)),v(Q,L)};k(M,Q=>{r().stockParsed.notes&&Q(P)})}var T=d($,2);{var D=Q=>{var L=ud(),G=u(L);G.__click=[nd,r];var oe=u(G);{var q=R=>{var re=cd();v(R,re)},I=R=>{var re=pt("Supprimer le stock");v(R,re)};k(oe,R=>{r().loading?R(q):R(I,!1)})}j(()=>G.disabled=r().loading),v(Q,L)};k(T,Q=>{n()||Q(D)})}j(Q=>{B(C,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),B(S,Q)},[()=>kn(r().stockParsed.dateTime)]),v(p,m)};k(h,p=>{r().stockParsed?p(g,!1):p(f)})}v(e,s),te()}Je(["click"]);function hd(e,t,r){t().forms.who=[...t().whoList],y(r,"")}var pd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},md=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),gd=w('<div class="space-y-4"><!></div>');function _d(e,t){ee(t,!0);let r=ke(t,"modalState",7),n=ke(t,"isArchiveMode",3,!1),s=V("");const o=X(()=>{const _=new Set([...F.uniqueWho,...r().forms.who]);return Array.from(_).map($=>({id:$,label:$,selected:r().forms.who.includes($)}))});function i(_){const $=_.trim();$&&!r().forms.who.includes($)&&(r().forms.who=[...r().forms.who,$])}function l(_){r().forms.who=r().forms.who.filter($=>$!==_)}function c(_){r().forms.who.includes(_)?l(_):i(_)}function h(){a(s).trim()&&(i(a(s)),y(s,""))}var f=gd(),g=u(f);{var p=_=>{An(_,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},m=_=>{var $=md(),b=u($),E=d(u(b),4),C=u(E),x=u(C),A=u(x);Zr(A,{class:"h-4 w-4 opacity-50"});var S=d(A,2);S.__keydown=[pd,h];var M=d(x,2);M.__click=h;var P=u(M);To(P,{size:16});var T=d(C,2),D=d(u(T),2);Gr(D,{get items(){return a(o)},onToggleItem:c,showIcon:!0});var Q=d(b,2),L=u(Q);L.__click=[hd,r,s],j(G=>{S.disabled=r().loading,M.disabled=G,L.disabled=r().loading},[()=>r().loading||!a(s).trim()]),qe(S,()=>a(s),G=>y(s,G)),v(_,$)};k(g,_=>{n()?_(p):_(m,!1)})}v(e,f),te()}Je(["keydown","click"]);var bd=w('<div class="mb-1 text-xs opacity-70"> </div>'),yd=(e,t,r)=>t(a(r)),wd=w("<button><!> </button>"),Sd=w('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function Co(e,t){ee(t,!0);let r=ke(t,"maxSuggestions",3,8),n=ke(t,"title",3,"Suggestions :"),s=ke(t,"buttonSize",3,"btn-xs"),o=ke(t,"buttonVariant",3,"btn-soft"),i=ke(t,"disabled",3,!1);const l=X(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var h=K(),f=N(h);{var g=p=>{var m=Sd(),_=u(m);{var $=E=>{var C=bd(),x=u(C);j(()=>B(x,n())),v(E,C)};k(_,E=>{n()&&E($)})}var b=d(_,2);st(b,21,()=>a(l),E=>E.id,(E,C)=>{var x=wd();x.__click=[yd,c,C];var A=u(x);{var S=P=>{var T=K(),D=N(T);or(D,()=>a(C).icon,(Q,L)=>{L(Q,{class:"h-3 w-3"})}),v(P,T)};k(A,P=>{a(C).icon&&P(S)})}var M=d(A);j(()=>{Me(x,1,`btn ${s()??""} ${o()??""}`),x.disabled=i()||a(C).disabled,Xt(x,"title",a(C).disabled?"Déjà sélectionné":a(C).label),B(M,` ${a(C).label??""}`)}),v(E,x)}),v(p,m)};k(f,p=>{a(l).length>0&&p(g)})}v(e,h),te()}Je(["click"]);var xd=(e,t)=>{e.key==="Enter"&&t()},Pd=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},$d=w(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),Ed=w('<div class="space-y-4"><!></div>');function kd(e,t){ee(t,!0);let r=ke(t,"modalState",7),n=ke(t,"isArchiveMode",3,!1);const s=X(()=>r()?.hasChanges?.store||!1);async function o(){if(!a(s))return;const f={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(f)}var i=Ed(),l=u(i);{var c=f=>{{let g=X(()=>r().product?.storeInfo);An(f,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return a(g)},dataLabel:"Magasin actuel"})}},h=f=>{var g=$d(),p=u(g),m=d(u(p),4),_=u(m),$=u(_),b=u($);Lt(b,{class:"h-4 w-4 opacity-50"});var E=d(b,2);E.__keydown=[xd,o];var C=d($,2);{var x=P=>{{let T=X(()=>F.uniqueStores.map(D=>({id:D,label:D,disabled:D===r().forms.store.name})));Co(P,{get suggestions(){return a(T)},onSuggestionClick:D=>{r().forms.store.name=D.label},buttonVariant:"btn-outline"})}};k(C,P=>{F.uniqueStores.length>0&&P(x)})}var A=d(_,2),S=d(m,2),M=u(S);M.__click=[Pd,r],j(()=>M.disabled=r().loading),qe(E,()=>r().forms.store.name,P=>r().forms.store.name=P),qe(A,()=>r().forms.store.comment,P=>r().forms.store.comment=P),v(f,g)};k(l,f=>{n()?f(c):f(h,!1)})}v(e,i),te()}Je(["keydown","click"]);var Ad=w("<fieldset><legend><!> </legend> <!></fieldset>");function Lr(e,t){let r=ke(t,"bgClass",3,"bg-base-100");var n=Ad(),s=u(n),o=u(s);{var i=h=>{const f=X(()=>t.iconComponent);var g=K(),p=N(g);or(p,()=>a(f),(m,_)=>{_(m,{size:16,class:"mr-1"})}),v(h,g)};k(o,h=>{t.iconComponent&&h(i)})}var l=d(o),c=d(s,2);ve(c,()=>t.children??ue),j(()=>{Me(n,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Me(s,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),B(l,` ${t.legend??""}`)}),v(e,n)}async function Md(e,t,r,n,s,o){if(!t.modalState)return;const i={totalOverride:{q:a(r),u:a(n)},comment:a(s)};await t.modalState.setOverride(i),y(o,!1)}async function Td(e,t,r){t.modalState&&(await t.modalState.removeOverride(),y(r,!1))}var Dd=w('<div class="stat "><div class="stat-title text-sm">Ancienne quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),Cd=w('<div class="stat"><div class="stat-title text-sm">"Quantité redéfinie manuellement"</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic"></div></div>'),Nd=(e,t)=>y(t,!0),Id=w('<div class="flex justify-end gap-2"><button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button></div>'),Rd=w('<div class="text-error text-sm">Limite de caractères atteinte</div>'),Od=(e,t)=>y(t,!1),qd=w('<span class="loading loading-spinner loading-sm"></span>'),jd=w('<span class="loading loading-spinner loading-sm"></span>'),Ld=w('<div class="card-actions mt-4 justify-end gap-2"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>'),Bd=w(`<div><div class="card-body p-4"><div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <!></div></div>`),zd=w('<div class="stats not-md:stats-vertical shadow"><!> <div class="stat"><div class="stat-title text-sm">Quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">Recettes actuelles</div></div> <!></div> <!> <!>',1),Ud=w('<div class="mb-2 space-y-4"><!></div>');function Hd(e,t){ee(t,!0);const r=X(()=>t.modalState.product?.totalNeededOverrideParsed),n=X(()=>t.modalState.product?.displayTotalOverride);let s=X(()=>a(r)?.hasUnresolvedChangedSinceOverride),o=V(!1),i=V(je(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),l=V(je(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),c=V(je(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),h=X(()=>a(i)>0&&a(l).trim()!=="");var f=K(),g=N(f);{var p=m=>{var _=Ud(),$=u(_);Lr($,{legend:"Besoin total",children:(b,E)=>{var C=zd(),x=N(C),A=u(x);{var S=I=>{var R=Dd(),re=d(u(R),2),z=u(re);j(()=>B(z,t.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay)),v(I,R)};k(A,I=>{t.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay&&a(s)&&I(S)})}var M=d(A,2),P=d(u(M),2),T=u(P),D=d(M,2);{var Q=I=>{var R=Cd(),re=d(u(R),2),z=u(re);j(()=>B(z,a(n))),v(I,R)};k(D,I=>{a(n)&&a(r)&&I(Q)})}var L=d(x,2);{var G=I=>{var R=Id(),re=u(R);re.__click=[Nd,o],j(()=>re.disabled=a(o)),v(I,R)};k(L,I=>{t.isArchiveMode||I(G)})}var oe=d(L,2);{var q=I=>{var R=Bd(),re=u(R),z=u(re),W=u(z),ae=u(W);Vc(ae,{class:"h-4 w-4 opacity-50"});var ye=d(ae,2),U=d(W,2),Y=u(U);Y.value=Y.__value="";var Z=d(Y);Z.value=Z.__value="kg";var le=d(Z);le.value=le.__value="gr.";var _e=d(le);_e.value=_e.__value="l.";var J=d(_e);J.value=J.__value="ml";var de=d(J);de.value=de.__value="unité";var H=d(de);H.value=H.__value="bottes";var ne=d(z,2),Se=u(ne),Ae=d(u(Se),2),Ne=d(Ae,2);{var se=Oe=>{var Ge=Rd();v(Oe,Ge)};k(Ne,Oe=>{a(c).length>=250&&Oe(se)})}var we=d(ne,2);{var Te=Oe=>{var Ge=Ld(),Ve=u(Ge);Ve.__click=[Od,o];var ce=d(Ve,2);ce.__click=[Td,t,o];var xe=u(ce);{var Be=be=>{var De=qd();v(be,De)},Ke=be=>{var De=pt();j(()=>B(De,`Réinitialiser le total calculé (${t.modalState.product.displayTotalNeeded??""}).`)),v(be,De)};k(xe,be=>{t.modalState.loading?be(Be):be(Ke,!1)})}var Pe=d(ce,2);Pe.__click=[Md,t,i,l,c,o];var $e=u(Pe);{var Ue=be=>{var De=jd();v(be,De)},ie=be=>{var De=pt("Appliquer");v(be,De)};k($e,be=>{t.modalState.loading?be(Ue):be(ie,!1)})}j(()=>{ce.disabled=t.modalState.loading,Pe.disabled=t.modalState.loading||!a(h)}),v(Oe,Ge)};k(we,Oe=>{t.isArchiveMode||Oe(Te)})}j(()=>Me(R,1,`card border-base-300 border ${a(o)?"bg-base-200":"bg-base-100"}`)),qe(ye,()=>a(i),Oe=>y(i,Oe)),rr(U,()=>a(l),Oe=>y(l,Oe)),qe(Ae,()=>a(c),Oe=>y(c,Oe)),v(I,R)};k(oe,I=>{a(o)&&I(q)})}j(()=>B(T,t.modalState.product.displayTotalNeeded)),v(b,C)},$$slots:{default:!0}}),v(m,_)};k(g,m=>{t.modalState.product&&m(p)})}v(e,f),te()}Je(["click"]);var Qd=w('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Wd=w('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Vd=w('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Gd=w('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Kd(e,t){ee(t,!0);const r=X(()=>t.modalState.recipes);var n=Gd(),s=N(n);Hd(s,{get modalState(){return t.modalState},get isArchiveMode(){return t.isArchiveMode}});var o=d(s,2),i=u(o),l=u(i);_a(l,{class:"h-5 w-5"});var c=d(i,2);{var h=g=>{var p=Qd(),m=u(p);Jr(m,{class:"mx-auto mb-2 h-12 w-12"}),v(g,p)},f=g=>{var p=Vd(),m=u(p),_=d(u(m));st(_,21,()=>a(r),Vr,($,b)=>{var E=Wd(),C=u(E),x=u(C),A=d(C),S=u(A),M=d(A),P=u(M);j(T=>{B(x,`${a(b).r??""} (${(a(b).a||"-")??""} c.)`),B(S,`${(a(b).q||a(b).qEq)??""} ${(a(b).u||a(b).uEq)??""}`),B(P,T)},[()=>kn(a(b).date)]),v($,E)}),v(g,p)};k(c,g=>{a(r).length===0?g(h):g(f,!1)})}v(e,n),te()}function Yd(e,t,r){a(t).saveAllChanges().then(()=>{r.onClose()})}var Jd=w('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),Zd=w('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Xd=w('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Fd=(e,t)=>t("recettes"),ev=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),tv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),rv=(e,t)=>t("magasins"),nv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),av=(e,t)=>t("volontaires"),sv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),ov=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),iv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),lv=(e,t)=>t("stock"),cv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),uv=w('<span class="badge badge-sm badge-secondary ml-1">1</span>'),dv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),vv=(e,t)=>t("achats"),fv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),hv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),pv=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),mv=w('<span class="loading loading-spinner loading-sm"></span>'),gv=w('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),_v=w('<div id="product_modal"><div class="modal-box flex fixed top-0 overflow-auto h-lvh w-lvw flex-col md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function bv(e,t){ee(t,!0);let r=ke(t,"initialTab",3,"recettes"),n=X(()=>Du(t.productId)),s=X(()=>F.isEventPassed),o=V(je(r()));Ht(()=>{y(o,r())});function i(E){y(o,E,!0)}var l=_v(),c=u(l),h=u(c),f=u(h);{var g=E=>{var C=Zd(),x=N(C),A=u(x),S=d(x,2);{var M=G=>{var oe=Jd(),q=u(oe);xo(q,{class:"h-4 w-4"}),v(G,oe)};k(S,G=>{a(n)&&a(s)&&G(M)})}var P=d(S,2),T=u(P),D=u(T),Q=d(T,2),L=d(u(Q));j(()=>{B(A,a(n).product?.productName),B(D,a(n).product?.productType),B(L,` ${a(n).product?.displayTotalNeeded??""}`)}),v(E,C)},p=E=>{var C=Xd();v(E,C)};k(f,E=>{a(n)&&a(n).product?E(g):E(p,!1)})}var m=d(f,2);m.__click=function(...E){t.onClose?.apply(this,E)};var _=u(m);Tt(_,{class:"h-4 w-4"});var $=d(h,2);{var b=E=>{var C=gv(),x=N(C),A=u(x);A.__click=[Fd,i];var S=u(A);_a(S,{class:"mr-1 h-5 w-5"});var M=d(S,2);{var P=ce=>{var xe=ev(),Be=u(xe);j(()=>B(Be,a(n).product?.nbRecipes)),v(ce,xe)},T=ce=>{var xe=tv();v(ce,xe)};k(M,ce=>{a(n).product?.nbRecipes&&a(n).product?.nbRecipes>0?ce(P):ce(T,!1)})}var D=d(A,2);D.__click=[rv,i];var Q=u(D);Lt(Q,{class:"mr-1 h-5 w-5"});var L=d(Q,2);{var G=ce=>{var xe=nv();v(ce,xe)};k(L,ce=>{a(n).hasChanges?.store&&ce(G)})}var oe=d(D,2);oe.__click=[av,i];var q=u(oe);on(q,{class:"mr-1 h-5 w-5"});var I=d(q,2);{var R=ce=>{var xe=sv();v(ce,xe)},re=ce=>{var xe=K(),Be=N(xe);{var Ke=$e=>{var Ue=ov(),ie=u(Ue);j(()=>B(ie,a(n).product?.who.length)),v($e,Ue)},Pe=$e=>{var Ue=iv();v($e,Ue)};k(Be,$e=>{a(n).product?.who&&a(n).product?.who.length>0?$e(Ke):$e(Pe,!1)},!0)}v(ce,xe)};k(I,ce=>{a(n).hasChanges?.who?ce(R):ce(re,!1)})}var z=d(oe,2);z.__click=[lv,i];var W=u(z);Gn(W,{class:"mr-1 h-5 w-5"});var ae=d(W,2);{var ye=ce=>{var xe=cv();v(ce,xe)},U=ce=>{var xe=K(),Be=N(xe);{var Ke=$e=>{var Ue=uv();v($e,Ue)},Pe=$e=>{var Ue=dv();v($e,Ue)};k(Be,$e=>{a(n).stockParsed?$e(Ke):$e(Pe,!1)},!0)}v(ce,xe)};k(ae,ce=>{a(n).hasChanges?.stock?ce(ye):ce(U,!1)})}var Y=d(z,2);Y.__click=[vv,i];var Z=u(Y);Jt(Z,{class:"mr-1 h-5 w-5"});var le=d(Z,2);{var _e=ce=>{var xe=fv(),Be=u(xe);j(()=>B(Be,a(n).purchasesList.length)),v(ce,xe)},J=ce=>{var xe=hv();v(ce,xe)};k(le,ce=>{a(n).purchasesList.length>0?ce(_e):ce(J,!1)})}var de=d(x,2),H=u(de);{var ne=ce=>{var xe=pv(),Be=u(xe);Tt(Be,{class:"h-4 w-4"});var Ke=d(Be,2),Pe=u(Ke);j(()=>B(Pe,`erreur : ${a(n).error??""}`)),v(ce,xe)};k(H,ce=>{a(n).error&&ce(ne)})}var Se=d(H,2),Ae=u(Se);nl(Ae,()=>a(o),ce=>{var xe=K(),Be=N(xe);{var Ke=$e=>{Kd($e,{get modalState(){return a(n)},get isArchiveMode(){return a(s)}})},Pe=$e=>{var Ue=K(),ie=N(Ue);{var be=ze=>{rd(ze,{get modalState(){return a(n)},get isArchiveMode(){return a(s)}})},De=ze=>{var Ee=K(),Dt=N(Ee);{var Cr=$t=>{fd($t,{get modalState(){return a(n)},get isArchiveMode(){return a(s)}})},Nr=$t=>{var ut=K(),Wt=N(ut);{var Mn=he=>{_d(he,{get modalState(){return a(n)},get isArchiveMode(){return a(s)}})},fe=he=>{var Ce=K(),He=N(Ce);{var Qe=Ze=>{kd(Ze,{get modalState(){return a(n)},get isArchiveMode(){return a(s)}})};k(He,Ze=>{a(o)==="magasins"&&Ze(Qe)},!0)}v(he,Ce)};k(Wt,he=>{a(o)==="volontaires"?he(Mn):he(fe,!1)},!0)}v($t,ut)};k(Dt,$t=>{a(o)==="stock"?$t(Cr):$t(Nr,!1)},!0)}v(ze,Ee)};k(ie,ze=>{a(o)==="achats"?ze(be):ze(De,!1)},!0)}v($e,Ue)};k(Be,$e=>{a(o)==="recettes"?$e(Ke):$e(Pe,!1)})}v(ce,xe)});var Ne=d(de,2),se=u(Ne);se.__click=function(...ce){t.onClose?.apply(this,ce)};var we=u(se),Te=d(se,2);Te.__click=[Yd,n,t];var Oe=u(Te);{var Ge=ce=>{var xe=mv();v(ce,xe)},Ve=ce=>{var xe=pt("Tout enregistrer");v(ce,xe)};k(Oe,ce=>{a(n).loading?ce(Ge):ce(Ve,!1)})}j(()=>{Me(A,1,`tab ${a(o)==="recettes"?"tab-active":""}`),Me(D,1,`tab ${a(o)==="magasins"?"tab-active":""}`),Me(oe,1,`tab ${a(o)==="volontaires"?"tab-active":""}`),Me(z,1,`tab ${a(o)==="stock"?"tab-active":""}`),Me(Y,1,`tab ${a(o)==="achats"?"tab-active":""}`),B(we,a(n)?.hasAnyChanges?"Annuler":"Fermer"),Te.disabled=a(n).loading||!a(n).hasAnyChanges}),v(E,C)};k($,E=>{a(n)&&E(b)})}j(()=>Me(l,1,`modal ${(t.productId&&"modal-open")??""}`)),v(e,l),te()}Je(["click"]);var yv=(e,t,r)=>t(r),wv=w("<button><span> </span> <!></button>"),Sv=w('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),xv=(e,t)=>t(),Pv=w('<button class="btn btn-xs btn-link text-primary/80" type="button">Dates à venir</button>'),$v=(e,t)=>t(),Ev=w('<button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button>'),kv=w('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),Av=w('<div class="flex flex-wrap justify-end gap-2"><!> <!></div>'),Mv=w('<div class=" flex flex-wrap gap-1"></div> <!>',1);function Tv(e,t){ee(t,!0);let r=ke(t,"availableDates",19,()=>[]),n=ke(t,"currentRange",19,()=>({start:null,end:null})),s=V(je(n().start)),o=V(je(n().end));const i=X(()=>r().length>0&&a(s)===r()[0]&&a(o)===r()[r().length-1]),l=X(()=>{if(r().length===0)return!1;const x=new Date;x.setHours(0,0,0,0);const S=[...r()].sort().find(M=>new Date(M)>=x);return S&&a(s)===S&&a(o)===r()[r().length-1]}),c=X(()=>{if(r().length===0)return!0;const x=new Date(r()[r().length-1]);return x.setHours(23,59,59,999),x<new Date}),h=X(()=>{if(r().length===0)return!1;const x=new Date;return x.setHours(0,0,0,0),[...r()].some(A=>new Date(A)>=x)});Ht(()=>{y(s,n().start,!0),y(o,n().end,!0)});function f(x){a(s)===x&&a(o)===x?p():new Date(x)<new Date(a(s))?y(s,x,!0):(new Date(x)>new Date(a(o))||y(s,x,!0),y(o,x,!0)),t.onRangeChange(a(s),a(o))}function g(x){return a(i)?"btn-soft":new Date(x)>=new Date(a(s))&&new Date(x)<=new Date(a(o))?"":"btn-dash"}function p(){r().length!==0&&(y(s,r()[0],!0),y(o,r()[r().length-1],!0),t.onRangeChange(a(s),a(o)))}function m(){if(r().length===0)return;const x=new Date;x.setHours(0,0,0,0);const S=[...r()].sort().find(M=>new Date(M)>=x);S&&(y(s,S,!0),y(o,r()[r().length-1],!0),t.onRangeChange(a(s),a(o)))}var _=Mv(),$=N(_);st($,22,r,x=>x,(x,A)=>{var S=wv();S.__click=[yv,f,A];var M=u(S),P=u(M),T=d(M,2);{var D=L=>{Mo(L,{size:16})},Q=L=>{var G=K(),oe=N(G);{var q=R=>{Eo(R,{size:16})},I=R=>{var re=K(),z=N(re);{var W=ae=>{Ic(ae,{size:16})};k(z,ae=>{jn(A)==="cloud"&&ae(W)},!0)}v(R,re)};k(oe,R=>{jn(A)==="moon"?R(q):R(I,!1)},!0)}v(L,G)};k(T,L=>{jn(A)==="sun"?L(D):L(Q,!1)})}j((L,G)=>{Me(S,1,`btn btn-sm btn-secondary ${L??""}`),B(P,G)},[()=>g(A),()=>Wl(A)]),v(x,S)});var b=d($,2);{var E=x=>{var A=Sv();v(x,A)},C=x=>{var A=Av(),S=u(A);{var M=Q=>{var L=Pv();L.__click=[xv,m],v(Q,L)};k(S,Q=>{a(h)&&!a(l)&&Q(M)})}var P=d(S,2);{var T=Q=>{var L=Ev();L.__click=[$v,p],v(Q,L)},D=Q=>{var L=kv();v(Q,L)};k(P,Q=>{a(i)?Q(D,!1):Q(T)})}v(x,A)};k(b,x=>{a(c)?x(E):x(C,!1)})}v(e,_),te()}Je(["click"]);var Dv=()=>F.clearFilters(),Cv=e=>F.setSearchQuery(e.currentTarget.value),Nv=()=>F.setSearchQuery(""),Iv=()=>F.setGroupBy("none"),Rv=()=>F.setGroupBy("store"),Ov=()=>F.setGroupBy("productType"),qv=(e,t)=>F.toggleProductType(t),jv=w("<button><!> </button>"),Lv=()=>F.toggleTemperature("frais"),Bv=()=>F.toggleTemperature("surgele"),zv=()=>F.clearTypeAndTemperatureFilters(),Uv=w('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),Hv=w('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),Qv=w('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div> <!>',1),Wv=(e,t)=>F.toggleStore(t),Vv=w("<button> </button>"),Gv=()=>F.clearStoreFilters(),Kv=w('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Yv=w('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Jv=(e,t)=>F.toggleWho(t),Zv=w("<button> </button>"),Xv=()=>F.clearWhoFilters(),Fv=w('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),ef=w('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),tf=w('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function rf(e,t){ee(t,!0);const r=X(()=>F.filters),n=X(()=>F.uniqueStores),s=X(()=>F.uniqueWho),o=X(()=>F.uniqueProductTypes);var i=tf(),l=N(i),c=u(l),h=u(c);So(h,{class:"h-5 w-5"});var f=d(c,2);f.__click=[Dv];var g=u(f);nn(g,{class:"h-4 w-4"});var p=d(l,2),m=u(p),_=d(u(m),2),$=u(_);Xc($,{class:"h-4 w-4"});var b=d($,2);b.__input=[Cv];var E=d(b,2);E.__click=[Nv];var C=u(E);Tt(C,{class:"h-4 w-4"});var x=d(m,2),A=d(u(x),2),S=u(A);S.__change=[Iv];var M=d(S,2);M.__change=[Rv];var P=d(M,2);P.__change=[Ov];var T=d(x,2);{var D=R=>{Lr(R,{legend:"Date incluses",bgClass:"bg-base-100",children:(re,z)=>{Tv(re,{get availableDates(){return F.availableDates},get currentRange(){return F.dateRange},onRangeChange:(W,ae)=>F.setDateRange(W,ae)})},$$slots:{default:!0}})};k(T,R=>{F.hasSingleDateEvent||R(D)})}var Q=d(T,2);{var L=R=>{Lr(R,{legend:"Types & Température",get iconComponent(){return Fc},children:(re,z)=>{var W=Qv(),ae=N(W);st(ae,20,()=>a(o),H=>H,(H,ne)=>{const Se=X(()=>Yn(ne));var Ae=jv();Ae.__click=[qv,ne];var Ne=u(Ae);or(Ne,()=>a(Se).icon,(we,Te)=>{Te(we,{class:"mr-1 h-5 w-5"})});var se=d(Ne);j(we=>{Me(Ae,1,`btn btn-sm ${we??""}`),B(se,` ${a(Se).displayName??""}`)},[()=>a(r).selectedProductTypes.length===0?"btn-soft btn-secondary":a(r).selectedProductTypes.includes(ne)?"btn-secondary":"btn-dash btn-secondary"]),v(H,Ae)});var ye=d(ae,2),U=u(ye);U.__click=[Lv];var Y=u(U);ko(Y,{class:"h-5 w-5"});var Z=d(U,2);Z.__click=[Bv];var le=u(Z);Ao(le,{class:"h-5 w-5"});var _e=d(ye,2);{var J=H=>{var ne=Uv();ne.__click=[zv];var Se=u(ne);nn(Se,{size:16}),v(H,ne)},de=H=>{var ne=Hv();v(H,ne)};k(_e,H=>{a(r).selectedProductTypes.length>0||a(r).selectedTemperatures.length>0?H(J):H(de,!1)})}j((H,ne)=>{Me(U,1,`btn btn-sm ${H??""}`),Me(Z,1,`btn btn-sm ${ne??""}`)},[()=>a(r).selectedTemperatures.length===0?"btn-soft btn-success":a(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(r).selectedTemperatures.length===0?"btn-soft btn-info":a(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),v(re,W)},$$slots:{default:!0}})};k(Q,R=>{a(o).length>0&&R(L)})}var G=d(Q,2);{var oe=R=>{Lr(R,{legend:"Magasins",get iconComponent(){return Lt},children:(re,z)=>{var W=Yv(),ae=u(W);st(ae,16,()=>a(n),Y=>Y,(Y,Z)=>{var le=Vv();le.__click=[Wv,Z];var _e=u(le);j(J=>{Me(le,1,`btn btn-sm ${J??""}`),B(_e,Z)},[()=>a(r).selectedStores.length===0?"btn-soft btn-secondary":a(r).selectedStores.includes(Z)?"btn-secondary":"btn-dash btn-secondary"]),v(Y,le)});var ye=d(ae,2);{var U=Y=>{var Z=Kv();Z.__click=[Gv];var le=u(Z);nn(le,{size:16}),v(Y,Z)};k(ye,Y=>{a(r).selectedStores.length>0&&Y(U)})}v(re,W)},$$slots:{default:!0}})};k(G,R=>{a(n).length>0&&R(oe)})}var q=d(G,2);{var I=R=>{Lr(R,{legend:"Qui",get iconComponent(){return Zr},children:(re,z)=>{var W=ef(),ae=u(W);st(ae,16,()=>a(s),Y=>Y,(Y,Z)=>{var le=Zv();le.__click=[Jv,Z];var _e=u(le);j(J=>{Me(le,1,`btn btn-sm ${J??""}`),B(_e,Z)},[()=>a(r).selectedWho.length===0?" btn-soft btn-secondary":a(r).selectedWho.includes(Z)?" btn-secondary":"btn-dash btn-secondary"]),v(Y,le)});var ye=d(ae,2);{var U=Y=>{var Z=Fv();Z.__click=[Xv];var le=u(Z);nn(le,{size:16}),v(Y,Z)};k(ye,Y=>{a(r).selectedWho.length>0&&Y(U)})}v(re,W)},$$slots:{default:!0}})};k(q,R=>{a(s).length>0&&R(I)})}j(()=>{f.disabled=!F.hasFilters,vl(b,a(r).searchQuery),E.disabled=!a(r).searchQuery,Rn(S,a(r).groupBy==="none"),Rn(M,a(r).groupBy==="store"),Rn(P,a(r).groupBy==="productType")}),v(e,i),te()}Je(["click","input","change"]);var nf=w('<div class="tooltip text-xs font-normal"><!></div>');function af(e,t){let r=ke(t,"iconSize",3,24),n=t.icon||void 0;var s=nf(),o=u(s);{var i=l=>{n(l,{get size(){return r()},class:`align-top
`})};k(o,l=>{t.icon&&l(i)})}j(()=>Xt(s,"data-tip",t.tip)),v(e,s)}var sf=w('<div class="text-primary-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),of=w('du <span class="font-semibold"> </span> au <span class="font-semibold"> </span>',1),lf=w('le <span class="font-semibold"> </span>',1),cf=(e,t,r)=>t.onOpenGroupEditModal("store",a(r).map(n=>n.data.$id),a(r).map(n=>n.data)),uf=(e,t,r)=>t.onOpenGroupEditModal("who",a(r).map(n=>n.data.$id),a(r).map(n=>n.data)),df=(e,t,r)=>t.onOpenGroupPurchaseModal(a(r).map(n=>n.data)),vf=w(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),ff=w('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),hf=w('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 font-semibold @md:min-w-48"><!></div> <div class="text-primary-content"><!></div> <!></div>'),pf=(e,t,r)=>t.onOpenModal(a(r).$id,"recettes"),mf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"recettes"),gf=w('<div class="text-base-content/60 text-sm font-normal"> </div>'),_f=w('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),bf=w('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),yf=w('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),wf=w('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),Sf=w('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),xf=w('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),Pf=(e,t,r)=>t.onOpenModal(a(r).$id,"magasins"),$f=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"magasins"),Ef=w('<div class="ml-1"><!></div>'),kf=w('<div class="ml-1"> </div> <!>',1),Af=w('<div class="ml-1 text-sm font-medium">?</div>'),Mf=(e,t,r)=>t.onOpenModal(a(r).$id,"volontaires"),Tf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"volontaires"),Df=w('<span class="text-base-content/50 text-xs"> </span>'),Cf=w('<div class="ml-1 flex gap-1"> <!></div>'),Nf=w('<div class="ml-1 text-sm font-medium">?</div>'),If=w('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),Rf=w('<div class="flex items-center gap-1 text-sm"><!> </div>'),Of=w('<div class="flex items-center gap-1 text-sm"><!> </div>'),qf=w('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),jf=(e,t,r)=>t.onOpenModal(a(r).$id,"recettes"),Lf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"recettes"),Bf=w('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),zf=w("<span> </span>"),Uf=w('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),Hf=(e,t,r,n)=>{e.stopPropagation(),t.onQuickValidation(a(r),a(n))},Qf=w('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><div class="cart-icon"></div> <span class="text-xs"> </span> <!></button>'),Wf=w(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),Vf=(e,t,r)=>t.onOpenModal(a(r).$id,"achats"),Gf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"achats"),Kf=w('<span class="text-xs opacity-75"> </span>'),Yf=w('<div><div class="flex items-center gap-1"><!> <span class="text-sm font-medium text-nowrap"> </span></div> <!></div>'),Jf=w('<span class="text-base-content/50 text-xs italic">aucun</span>'),Zf=w('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap justify-end gap-1.5"><!> <!></div></div></div></div></div>'),Xf=w('<!> <div class="space-y-1"></div>',1),Ff=w('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),eh=w('<div class="space-y-4 rounded-lg"></div> <!>',1);function th(e,t){ee(t,!0);const r={Package:Jr,MessageCircleQuestionMark:Qc,ShoppingCart:Jt,Clock:Nc,CircleCheck:Mc,CircleX:Tc,ClipboardCheck:Dc,PackageCheck:Wc,Check:kr},n=X(()=>F.groupedFilteredProducts),s=X(()=>F.filters),o=X(()=>Hr(F.dateRange.start)),i=X(()=>Hr(F.dateRange.end));var l=eh(),c=N(l);st(c,21,()=>Object.entries(a(n)),([g,p])=>g,(g,p)=>{var m=X(()=>is(a(p),2));let _=()=>a(m)[0];const b=X(()=>a(m)[1]);var E=Xf(),C=N(E);{var x=S=>{const M=X(()=>Yn(_()));var P=hf(),T=u(P),D=u(T);{var Q=z=>{var W=pt();j(()=>B(W,`🏪 ${_()??""} (${a(b).length??""})`)),v(z,W)},L=z=>{var W=K(),ae=N(W);{var ye=Y=>{var Z=sf(),le=u(Z);or(le,()=>a(M).icon,(ne,Se)=>{Se(ne,{class:"h-4 w-4"})});var _e=d(le,2),J=u(_e),de=d(_e,2),H=u(de);j(()=>{B(J,a(M).displayName),B(H,`(${a(b).length??""})`)}),v(Y,Z)},U=Y=>{var Z=pt();j(()=>B(Z,`📦 ${_()??""} (${a(b).length??""})`)),v(Y,Z)};k(ae,Y=>{a(s).groupBy==="productType"?Y(ye):Y(U,!1)},!0)}v(z,W)};k(D,z=>{a(s).groupBy==="store"?z(Q):z(L,!1)})}var G=d(T,2),oe=u(G);{var q=z=>{var W=of(),ae=d(N(W)),ye=u(ae),U=d(ae,2),Y=u(U);j(()=>{B(ye,a(o)),B(Y,a(i))}),v(z,W)},I=z=>{var W=lf(),ae=d(N(W)),ye=u(ae);j(()=>B(ye,a(o))),v(z,W)};k(oe,z=>{F.dateRange.start!==F.dateRange.end?z(q):z(I,!1)})}var R=d(G,2);{var re=z=>{var W=ff(),ae=u(W);ae.__click=[cf,t,b];var ye=u(ae);Lt(ye,{size:16});var U=d(ye,4);Kn(U,{size:16});var Y=d(ae,2);Y.__click=[uf,t,b];var Z=u(Y);on(Z,{size:16});var le=d(Z,4);Kn(le,{size:16});var _e=d(Y,2);{var J=de=>{var H=vf();H.__click=[df,t,b];var ne=u(H);Jt(ne,{size:16});var Se=d(ne,4);Fa(Se,{size:16}),v(de,H)};k(_e,de=>{a(b).some(H=>H.data.displayMissingQuantity!=="✅ Complet")&&de(J)})}v(z,W)};k(R,z=>{F.isEventPassed||z(re)})}v(S,P)};k(C,S=>{_()!==""&&S(x)})}var A=d(C,2);st(A,21,()=>a(b),S=>S.data.$id,(S,M)=>{const P=X(()=>a(M).data),T=X(()=>a(M).stats),D=X(()=>Yn(a(P).productType)),Q=X(()=>Mu(a(P).purchases||[])),L=X(()=>a(P).totalNeededOverrideParsed);var G=Zf(),oe=u(G),q=u(oe),I=u(q);I.__click=[pf,t,P],I.__keydown=[mf,t,P];var R=u(I),re=u(R);or(re,()=>a(D).icon,(fe,he)=>{he(fe,{class:"text-base-content/80 h-4 w-4"})});var z=d(re),W=d(z);{var ae=fe=>{var he=gf(),Ce=u(he);j(()=>B(Ce,`Ancien: ${a(P).previousNames[0]??""}`)),v(fe,he)};k(W,fe=>{a(P).previousNames&&a(P).previousNames.length>0&&fe(ae)})}var ye=d(R,2),U=u(ye);{var Y=fe=>{var he=_f(),Ce=u(he);ko(Ce,{class:"text-success h-4 w-4"}),v(fe,he)};k(U,fe=>{a(P).pFrais&&fe(Y)})}var Z=d(U,2);{var le=fe=>{var he=bf(),Ce=u(he);Ao(Ce,{class:"text-info h-4 w-4"}),v(fe,he)};k(Z,fe=>{a(P).pSurgel&&fe(le)})}var _e=d(ye,2);{var J=fe=>{var he=yf(),Ce=u(he);Po(Ce,{class:"h-4 w-4 animate-spin"}),v(fe,he)};k(_e,fe=>{a(P).status==="isSyncing"&&fe(J)})}var de=d(_e,2);{var H=fe=>{var he=xf(),Ce=u(he);st(Ce,20,()=>a(T).concernedDates,He=>He,(He,Qe)=>{const Ze=X(()=>a(T).recipesByDate.get(Qe)||[]);var Xe=K(),We=N(Xe);{var gt=nt=>{var dt=wf(),Fe=u(dt),vt=u(Fe);j((Nt,Ir)=>{Xt(dt,"data-tip",Nt),B(vt,Ir)},[()=>a(Ze).map(Nt=>Nt.r).join(", "),()=>new Date(Qe).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),v(nt,dt)},Ct=nt=>{var dt=Sf(),Fe=u(dt);j(vt=>B(Fe,vt),[()=>new Date(Qe).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),v(nt,dt)};k(We,nt=>{a(Ze).length>0?nt(gt):nt(Ct,!1)})}v(He,Xe)}),v(fe,he)};k(de,fe=>{a(T).concernedDates.length>0&&fe(H)})}var ne=d(I,2);{var Se=fe=>{var he=If(),Ce=u(he);Ce.__click=[Pf,t,P],Ce.__keydown=[$f,t,P];var He=u(Ce);Lt(He,{size:18});var Qe=d(He,2);{var Ze=Fe=>{var vt=kf(),Nt=N(vt),Ir=u(Nt),Tn=d(Nt,2);{var It=pr=>{var Xr=Ef(),Io=u(Xr);af(Io,{get tip(){return a(P).storeInfo.storeComment},get icon(){return Hc},iconSize:14}),v(pr,Xr)};k(Tn,pr=>{a(P).storeInfo?.storeComment&&pr(It)})}j(()=>B(Ir,a(P).storeInfo.storeName)),v(Fe,vt)},Xe=Fe=>{var vt=Af();v(Fe,vt)};k(Qe,Fe=>{a(P).storeInfo?.storeName?Fe(Ze):Fe(Xe,!1)})}var We=d(Ce,2);We.__click=[Mf,t,P],We.__keydown=[Tf,t,P];var gt=u(We);on(gt,{size:18});var Ct=d(gt,2);{var nt=Fe=>{var vt=Cf(),Nt=u(vt),Ir=d(Nt);{var Tn=It=>{var pr=Df(),Xr=u(pr);j(()=>B(Xr,`+${a(P).who.length-2}`)),v(It,pr)};k(Ir,It=>{a(P).who.length>2&&It(Tn)})}j(It=>B(Nt,`${It??""} `),[()=>a(P).who.slice(0,2).map(It=>It.slice(0,3)).join(" | ")]),v(Fe,vt)},dt=Fe=>{var vt=Nf();v(Fe,vt)};k(Ct,Fe=>{a(P).who&&a(P).who.length>0?Fe(nt):Fe(dt,!1)})}j(()=>{Me(Ce,1,`btn btn-soft btn-sm group relative ${a(P).storeInfo?.storeName?"btn-success":""}`),Me(We,1,`btn btn-sm btn-soft group relative ${a(P).who&&a(P).who?.length>0?"btn-success":""}`)}),v(fe,he)},Ae=fe=>{var he=qf(),Ce=u(he);{var He=Xe=>{var We=Rf(),gt=u(We);Lt(gt,{size:16});var Ct=d(gt);j(()=>B(Ct,` ${a(P).storeInfo.storeName??""}`)),v(Xe,We)};k(Ce,Xe=>{a(P).storeInfo?.storeName&&Xe(He)})}var Qe=d(Ce,2);{var Ze=Xe=>{var We=Of(),gt=u(We);on(gt,{size:16});var Ct=d(gt);j(nt=>B(Ct,` ${nt??""}`),[()=>a(P).who.join(", ")]),v(Xe,We)};k(Qe,Xe=>{a(P).who&&a(P).who.length>0&&Xe(Ze)})}v(fe,he)};k(ne,fe=>{F.isEventPassed?fe(Ae,!1):fe(Se)})}var Ne=d(q,2),se=u(Ne);se.__click=[jf,t,P],se.__keydown=[Lf,t,P];var we=u(se),Te=u(we),Oe=u(Te);Bc(Oe,{class:"h-4 w-4"});var Ge=d(Te,2),Ve=u(Ge),ce=u(Ve);{var xe=fe=>{var he=Bf(),Ce=u(he),He=u(Ce),Qe=d(Ce,2);Cc(Qe,{class:"h-4 w-4"});var Ze=d(Qe);j(()=>{B(He,a(T).formattedQuantities),B(Ze,` ${a(L).totalOverride.q??""}
                          ${a(L).totalOverride.u??""}`)}),v(fe,he)},Be=fe=>{var he=zf(),Ce=u(he);j(()=>B(Ce,a(T).formattedQuantities)),v(fe,he)};k(ce,fe=>{a(L)?.totalOverride?fe(xe):fe(Be,!1)})}var Ke=d(Ve,2);{var Pe=fe=>{var he=Uf(),Ce=u(he),He=u(Ce),Qe=d(He);_a(Qe,{class:"h-3 w-3"});var Ze=d(Ce,2),Xe=u(Ze),We=d(Xe);eu(We,{class:"h-3 w-3"}),j(()=>{B(He,`${a(T).nbRecipes??""} `),B(Xe,`${a(T).totalAssiettes??""} `)}),v(fe,he)};k(Ke,fe=>{(a(T).nbRecipes||a(T).totalAssiettes)&&fe(Pe)})}var $e=d(we,2);{var Ue=fe=>{var he=Qf();he.__click=[Hf,t,P,T];var Ce=d(u(he),2),He=u(Ce),Qe=d(Ce,2);{var Ze=We=>{kc(We,{size:18})},Xe=We=>{Ac(We,{size:18})};k(Qe,We=>{Er.isMobile?We(Ze):We(Xe,!1)})}j(()=>{Xt(he,"title",`Acheter le manquant (${a(T).formattedMissingQuantities??""})`),B(He,a(T).formattedMissingQuantities)}),v(fe,he)},ie=fe=>{var he=K(),Ce=N(he);{var He=Qe=>{Fa(Qe,{size:24,class:"text-success ms-auto"})};k(Ce,Qe=>{F.isEventPassed||Qe(He)},!0)}v(fe,he)};k($e,fe=>{!F.isEventPassed&&a(T).hasMissing?fe(Ue):fe(ie,!1)})}var be=d($e,2);{var De=fe=>{var he=Wf(),Ce=u(he);Ec(Ce,{size:18}),v(fe,he)};k(be,fe=>{!F.isEventPassed&&a(L)?.hasUnresolvedChangedSinceOverride&&fe(De)})}var ze=d(se,2);ze.__click=[Vf,t,P],ze.__keydown=[Gf,t,P];var Ee=u(ze),Dt=u(Ee),Cr=u(Dt);Jt(Cr,{class:"h-4 w-4"});var Nr=d(Dt,2),$t=d(Ee,2),ut=u($t);st(ut,17,()=>a(Q),Vr,(fe,he)=>{const Ce=X(()=>r[a(he).icon]);var He=Yf(),Qe=u(He),Ze=u(Qe);or(Ze,()=>a(Ce),(nt,dt)=>{dt(nt,{class:"h-4 w-4"})});var Xe=d(Ze,2),We=u(Xe),gt=d(Qe,2);{var Ct=nt=>{var dt=Kf(),Fe=u(dt);j(()=>B(Fe,`livré le: ${a(he).deliveryDate??""}`)),v(nt,dt)};k(gt,nt=>{a(he).deliveryDate&&nt(Ct)})}j(()=>{Me(He,1,`badge badge-outline flex h-fit flex-col items-center gap-1 py-1 ${a(he).badgeClass??""}`),B(We,`${a(he).quantity??""}
                          ${a(he).unit??""}`)}),v(fe,He)});var Wt=d(ut,2);{var Mn=fe=>{var he=Jf();v(fe,he)};k(Wt,fe=>{a(Q).length===0&&fe(Mn)})}j(()=>{Me(G,1,`card bg-base-100 border-base-300 ${a(P).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),B(z,`${a(P).productName??""} `),Me(Ve,1,`text-base font-bold ${a(T).hasMissing&&!F.isEventPassed?"text-error":"text-success"}`),Me(Nr,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${F.isEventPassed?"":"group-hover:opacity-100"} sm:opacity-0`)}),v(S,G)}),v(g,E)});var h=d(c,2);{var f=g=>{var p=Ff();v(g,p)};k(h,g=>{Object.values(a(n)).flat().length===0&&g(f)})}v(e,l),te()}Je(["click","keydown"]);async function rh(e,t,r,n,s,o,i,l,c){if(!(!a(t)||a(r))){y(n,null),y(s,null);try{const h=a(o).map(m=>m.id),f=i.products.filter(m=>h.includes(m.$id));F.setSyncStatus(h,!0),i.onClose();const g={storeName:a(l).trim(),storeComment:a(c).trim()},p=await go(h,f,g);if(y(s,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(h){const f=h instanceof Error?h.message:"Erreur inconnue";y(n,f,!0),console.error("[StoreEditModal] Erreur mise à jour:",h),F.clearSyncStatus()}finally{y(r,!1)}}}function rs(e,t,r){a(t)||r.onClose()}var nh=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),ah=(e,t)=>y(t,"empty"),sh=(e,t)=>y(t,"all"),oh=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),ih=w("<!> ",1),lh=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function ch(e,t){ee(t,!0);let r=V(!1),n=V(null),s=V(null),o=V(je(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=V(je(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=V(je({})),c=V("empty");Ht(()=>{const J={};t.products.forEach(de=>{t.productIds.includes(de.$id)&&(a(c)==="empty"?J[de.$id]=!de.storeInfo||!de.storeInfo.storeName:J[de.$id]=!0)}),y(l,J,!0)});const h=X(()=>t.products.map(J=>({id:J.$id,label:J.productName,title:J.productName,selected:a(l)[J.$id]}))),f=X(()=>a(h).filter(J=>J.selected)),g=X(()=>`Attribuer un magasin (${a(f).length} produits sélectionnés)`),p=X(()=>a(f).length===0?!1:a(o).trim().length>0);function m(J){a(l)[J]=!a(l)[J]}var _=lh(),$=u(_),b=u($),E=u(b),C=u(E),x=d(E,2);x.__click=[rs,r,t];var A=u(x);Tt(A,{class:"h-4 w-4"});var S=d(b,2),M=u(S);{var P=J=>{var de=nh(),H=u(de);En(H,{class:"h-4 w-4"});var ne=d(H,2),Se=u(ne);j(()=>B(Se,a(n))),v(J,de)};k(M,J=>{a(n)&&J(P)})}var T=d(M,2),D=u(T),Q=u(D),L=u(Q);Lt(L,{class:"h-4 w-4 opacity-50"});var G=d(L,2),oe=d(Q,2);{let J=X(()=>F.uniqueStores.map(de=>({id:de,label:de,disabled:de===a(o)})));Co(oe,{get suggestions(){return a(J)},onSuggestionClick:de=>{y(o,de.label,!0)},title:"Suggestions de magasins :"})}var q=d(D,2),I=u(q),R=d(T,2),re=d(u(R),2),z=u(re);z.__click=[ah,c];var W=d(z,2);W.__click=[sh,c];var ae=d(re,2);Gr(ae,{get items(){return a(h)},onToggleItem:m,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var ye=d(S,2),U=u(ye);U.__click=[rs,r,t];var Y=d(U,2);Y.__click=[rh,p,r,n,s,f,t,o,i];var Z=u(Y);{var le=J=>{var de=oh();v(J,de)},_e=J=>{var de=ih(),H=N(de);kr(H,{class:"h-4 w-4"});var ne=d(H);j(()=>B(ne,` Appliquer à ${a(f).length??""} produit(s)`)),v(J,de)};k(Z,J=>{a(r)?J(le):J(_e,!1)})}j(()=>{B(C,a(g)),x.disabled=a(r),G.disabled=a(r),I.disabled=a(r),Me(z,1,`tab ${a(c)==="empty"?"tab-active":""}`),Me(W,1,`tab ${a(c)==="all"?"tab-active":""}`),U.disabled=a(r),Y.disabled=a(r)||!a(p)}),qe(G,()=>a(o),J=>y(o,J)),qe(I,()=>a(i),J=>y(i,J)),v(e,_),te()}Je(["click"]);async function uh(e,t,r,n,s,o,i,l){if(!(!a(t)||a(r))){y(n,null),y(s,null);try{const c=a(o).map(g=>g.id),h=i.products.filter(g=>c.includes(g.$id));F.setSyncStatus(c,!0),i.onClose();const f=await _o(c,h,a(l),"replace");if(y(s,f,!0),f.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${f.updatedCount} produits modifiés`),i.onSuccess?.(f);else throw new Error(f.error||"Erreur lors de la mise à jour")}catch(c){const h=c instanceof Error?c.message:"Erreur inconnue";y(n,h,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),F.clearSyncStatus()}finally{y(r,!1)}}}function ns(e,t,r){a(t)||r.onClose()}var dh=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),vh=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},fh=(e,t)=>y(t,"empty"),hh=(e,t)=>y(t,"all"),ph=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),mh=w("<!> ",1),gh=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function _h(e,t){ee(t,!0);let r=V(!1),n=V(null),s=V(null),o=V(je([])),i=V(""),l=V("empty"),c=V(je({}));Ht(()=>{const se={};t.products.forEach(we=>{t.productIds.includes(we.$id)&&(a(l)==="empty"?se[we.$id]=!we.who||we.who.length===0:se[we.$id]=!0)}),y(c,se,!0)});const h=X(()=>t.products.map(se=>({id:se.$id,label:se.productName,title:se.productName,selected:a(c)[se.$id]}))),f=X(()=>a(h).filter(se=>se.selected)),g=X(()=>{const se=new Set([...F.uniqueWho,...a(o)]);return Array.from(se).map(we=>({id:we,label:we,selected:a(o).includes(we)}))}),p=X(()=>`Gérer les volontaires (${a(f).length} produits sélectionnés)`),m=X(()=>a(f).length===0?!1:a(o).length>0);function _(se){const we=se.trim();we&&!a(o).includes(we)&&y(o,[...a(o),we],!0)}function $(se){y(o,a(o).filter(we=>we!==se),!0)}function b(se){a(o).includes(se)?$(se):_(se)}function E(){a(i).trim()&&(_(a(i)),y(i,""))}function C(se){a(c)[se]=!a(c)[se]}var x=gh(),A=u(x),S=u(A),M=u(S),P=u(M),T=d(M,2);T.__click=[ns,r,t];var D=u(T);Tt(D,{class:"h-4 w-4"});var Q=d(S,2),L=u(Q);{var G=se=>{var we=dh(),Te=u(we);En(Te,{class:"h-4 w-4"});var Oe=d(Te,2),Ge=u(Oe);j(()=>B(Ge,a(n))),v(se,we)};k(L,se=>{a(n)&&se(G)})}var oe=d(L,2),q=u(oe),I=u(q),R=u(I),re=u(R);Zr(re,{class:"h-4 w-4 opacity-50"});var z=d(re,2);z.__keydown=[vh,E];var W=d(R,2);W.__click=E;var ae=u(W);To(ae,{size:16});var ye=d(I,2),U=d(u(ye),2);Gr(U,{get items(){return a(g)},onToggleItem:b,showIcon:!0,badgeSize:"btn-sm",badgeStyle:"btn-soft"});var Y=d(oe,2),Z=d(u(Y),2),le=u(Z);le.__click=[fh,l];var _e=d(le,2);_e.__click=[hh,l];var J=d(Z,2);Gr(J,{get items(){return a(h)},onToggleItem:C,badgeSize:"btn-md",badgeStyle:"btn-soft",color:"success"});var de=d(Q,2),H=u(de);H.__click=[ns,r,t];var ne=d(H,2);ne.__click=[uh,m,r,n,s,f,t,o];var Se=u(ne);{var Ae=se=>{var we=ph();v(se,we)},Ne=se=>{var we=mh(),Te=N(we);kr(Te,{class:"h-4 w-4"});var Oe=d(Te);j(()=>B(Oe,` Appliquer à ${a(f).length??""} produit(s)`)),v(se,we)};k(Se,se=>{a(r)?se(Ae):se(Ne,!1)})}j(se=>{B(P,a(p)),T.disabled=a(r),z.disabled=a(r),W.disabled=se,Me(le,1,`tab ${a(l)==="empty"?"tab-active":""}`),Me(_e,1,`tab ${a(l)==="all"?"tab-active":""}`),H.disabled=a(r),ne.disabled=a(r)||!a(m)},[()=>a(r)||!a(i).trim()]),qe(z,()=>a(i),se=>y(i,se)),v(e,x),te()}Je(["click","keydown"]);var bh=w("<div><!></div>"),yh=w('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function wh(e,t){ee(t,!0);let r=V(!1),n=ke(t,"width",3,"80"),s=ke(t,"bgClass",3,"bg-base-300");const o=X(()=>"w-"+n());var i=K(),l=N(i);{var c=f=>{var g=bh(),p=u(g);ve(p,()=>t.children??ue),j(()=>Me(g,1,`${s()??""} ${(a(o)?a(o):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),v(f,g)},h=f=>{var g=yh(),p=N(g),m=u(p),_=d(m,2),$=d(u(_),2),b=u($);ve(b,()=>t.children??ue);var E=d(p,2),C=u(E),x=u(C);So(x,{class:"h-6 w-6"}),pl(m,()=>a(r),A=>y(r,A)),v(f,g)};k(l,f=>{Er.isMobile?f(h,!1):f(c)})}v(e,i),te()}function Sh(){}var xh=w('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function Ph(e,t){ee(t,!0);const r="100",n=X(()=>F.stats);let s=V(null),o=V("recettes"),i=V(!1),l=V(!1),c=V(je([])),h=V(je([])),f=V(!1),g=V(je([]));function p(U,Y="recettes"){y(o,Y,!0),y(s,U,!0)}function m(){y(s,null)}function _(U,Y,Z){y(c,Y,!0),y(h,Z,!0),y(U==="who"?i:l,!0)}function $(U){(!U||U==="who")&&y(i,!1),(!U||U==="store")&&y(l,!1),y(c,[],!0),y(h,[],!0)}function b(U){console.log(`[ProductsTable] Modification groupée réussie: ${U.updatedCount} produits`)}function E(U){const Y=U.filter(Z=>F.getProductModelById(Z.$id)?.stats.hasMissing);console.log(`[ProductsTable] openGroupPurchaseModal: ${U.length} produits reçus → ${Y.length} produits avec quantités manquantes`),y(g,Y,!0),y(f,!0)}function C(){y(f,!1),y(g,[],!0)}function x(){console.log("[ProductsTable] Achat groupé créé avec succès"),C()}async function A(U,Y){try{if(!F.currentMainId)throw new Error("mainId non disponible");const Z=Y.missingQuantities||[];if(Z.length===0){console.log("Aucune quantité manquante à valider pour ce produit dans cette période");return}const le=Z.filter(J=>J.q<0).map(J=>({...J,q:Math.abs(J.q)})).map(J=>{const{quantity:de,unit:H}=Jn(J.q,J.u);return{q:de,u:H}});let _e=U.$id;U.isSynced||(console.log(`[ProductsTable] Produit ${U.$id} local, création pour validation rapide...`),_e=(await Rt(U.$id,{},de=>F.getEnrichedProductById(de))).$id,console.log(`[ProductsTable] Produit sync créé: ${_e}`)),await bo(F.currentMainId,_e,le,{store:U.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${U.productName}`)}catch(Z){console.error("[ProductsTable] Erreur validation rapide:",Z),alert("Erreur lors de la validation rapide: "+Z.message)}}var S=xh(),M=N(S),P=u(M),T=u(P),D=u(T);jc(D,{class:"mr-1 h-4 w-4"});var Q=d(D),L=d(T,2);L.__click=[Sh];var G=u(L);Kc(G,{class:"mr-1 h-4 w-4"});var oe=d(P,2);wh(oe,{width:r,children:(U,Y)=>{rf(U,{})},$$slots:{default:!0}});var q=d(oe,2);th(q,{onOpenModal:p,onOpenGroupEditModal:_,onOpenGroupPurchaseModal:E,onQuickValidation:A});var I=d(M,2);{let U=X(()=>a(s)||"");bv(I,{get productId(){return a(U)},get initialTab(){return a(o)},onClose:m})}var R=d(I,2);{var re=U=>{_h(U,{get productIds(){return a(c)},get products(){return a(h)},onClose:()=>$("who"),onSuccess:b})};k(R,U=>{a(i)&&U(re)})}var z=d(R,2);{var W=U=>{ch(U,{get productIds(){return a(c)},get products(){return a(h)},onClose:()=>$("store"),onSuccess:b})};k(z,U=>{a(l)&&U(W)})}var ae=d(z,2);{var ye=U=>{ku(U,{get products(){return a(g)},onClose:C,onSuccess:x})};k(ae,U=>{a(f)&&U(ye)})}j(()=>{Me(M,1,`space-y-6 ${Er.isMobile?"":"ml-100"}`),B(Q,` ${a(n).total??""}`)}),v(e,S),te()}Je(["click"]);pi();var $h=w('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function Eh(e){var t=$h();v(e,t)}var kh=w('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Ah(e,t){var r=kh(),n=d(u(r),2),s=d(u(n),2),o=u(s);j(()=>B(o,t.message)),v(e,r)}var Mh=w('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Th(e,t){var r=Mh(),n=u(r),s=u(n);En(s,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(s,2),i=d(u(o),2),l=u(i);j(()=>B(l,t.message||"Erreur inconnue")),v(e,r)}function Dh(e){e.stopPropagation()}var Ch=(e,t)=>e.key==="Escape"&&t(),Nh=w('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),Ih=w('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),Rh=(e,t)=>y(t,!1),Oh=w('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),qh=(e,t)=>y(t,!0),jh=(e,t)=>y(t,!1),Lh=w(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),Bh=(e,t)=>y(t,!0),zh=w('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),Uh=w('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function Hh(e,t){ee(t,!0);let r=ke(t,"onClose",3,()=>{}),n=ke(t,"onAuthSuccess",3,()=>{}),s=V(!0),o=V(!1),i=V(""),l=V(""),c=V(""),h=V(""),f=V(""),g=V(""),p=V(""),m=V(""),_=V(!1);function $(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function b(z){if(z.preventDefault(),!a(c)||!a(h)){y(i,"Veuillez remplir tous les champs");return}y(o,!0),y(i,"");try{await(await $().getAccount()).createEmailPasswordSession(a(c),a(h)),y(l,"Connexion réussie !"),setTimeout(()=>{n()()},1e3)}catch(W){console.error("Erreur de connexion:",W),y(i,W.message||"Erreur lors de la connexion",!0)}finally{y(o,!1)}}async function E(z){if(z.preventDefault(),!a(f)||!a(g)||!a(p)){y(i,"Veuillez remplir tous les champs");return}y(o,!0),y(i,"");try{const ae=await $().getAccount();await ae.create("unique()",a(g),a(p),a(f)),await ae.createEmailPasswordSession(a(g),a(p)),y(l,"Compte créé et connecté !"),setTimeout(()=>{n()()},1e3)}catch(W){console.error("Erreur d'inscription:",W),y(i,W.message||"Erreur lors de la création du compte",!0)}finally{y(o,!1)}}async function C(z){if(z.preventDefault(),!a(m)){y(i,"Veuillez entrer votre email");return}y(o,!0),y(i,"");try{await(await $().getAccount()).createRecovery(a(m),`${window.location.origin}/reset-password`),y(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{y(_,!1),y(m,"")},2e3)}catch(W){console.error("Erreur mot de passe oublié:",W),y(i,W.message||"Erreur lors de l'envoi de l'email",!0)}finally{y(o,!1)}}function x(){a(o)||r()()}Ht(()=>{(a(s)||a(_))&&(y(i,""),y(l,""))});var A=Uh();A.__click=x,A.__keydown=[Ch,x];var S=u(A);S.__click=[Dh];var M=u(S),P=u(M),T=u(P),D=d(P,2);D.__click=x;var Q=d(M,2),L=u(Q);{var G=z=>{var W=Nh(),ae=u(W);j(()=>B(ae,a(i))),v(z,W)};k(L,z=>{a(i)&&z(G)})}var oe=d(L,2);{var q=z=>{var W=Ih(),ae=u(W);j(()=>B(ae,a(l))),v(z,W)};k(oe,z=>{a(l)&&z(q)})}var I=d(oe,2);{var R=z=>{var W=Oh(),ae=N(W),ye=u(ae),U=d(u(ye),2),Y=d(ye,2),Z=u(Y),le=d(ae,2),_e=u(le);_e.__click=[Rh,_],j(()=>{U.disabled=a(o),Y.disabled=a(o),B(Z,a(o)?"Envoi...":"Envoyer l'email de réinitialisation"),_e.disabled=a(o)}),Dn("submit",ae,C),qe(U,()=>a(m),J=>y(m,J)),v(z,W)},re=z=>{var W=K(),ae=N(W);{var ye=Y=>{var Z=Lh(),le=N(Z),_e=u(le),J=d(u(_e),2),de=d(_e,2),H=d(u(de),2),ne=d(de,2),Se=u(ne),Ae=d(le,2),Ne=u(Ae);Ne.__click=[qh,_];var se=d(Ne,2),we=d(u(se));we.__click=[jh,s],j(()=>{J.disabled=a(o),H.disabled=a(o),ne.disabled=a(o),B(Se,a(o)?"Connexion...":"Se connecter"),Ne.disabled=a(o),we.disabled=a(o)}),Dn("submit",le,b),qe(J,()=>a(c),Te=>y(c,Te)),qe(H,()=>a(h),Te=>y(h,Te)),v(Y,Z)},U=Y=>{var Z=zh(),le=N(Z),_e=u(le),J=d(u(_e),2),de=d(_e,2),H=d(u(de),2),ne=d(de,2),Se=d(u(ne),2),Ae=d(ne,2),Ne=u(Ae),se=d(le,2),we=d(u(se));we.__click=[Bh,s],j(()=>{J.disabled=a(o),H.disabled=a(o),Se.disabled=a(o),Ae.disabled=a(o),B(Ne,a(o)?"Création...":"Créer un compte"),we.disabled=a(o)}),Dn("submit",le,E),qe(J,()=>a(f),Te=>y(f,Te)),qe(H,()=>a(g),Te=>y(g,Te)),qe(Se,()=>a(p),Te=>y(p,Te)),v(Y,Z)};k(ae,Y=>{a(s)?Y(ye):Y(U,!1)},!0)}v(z,W)};k(I,z=>{a(_)?z(R):z(re,!1)})}j(()=>{B(T,a(_)?"Mot de passe oublié":a(s)?"Connexion":"Inscription"),D.disabled=a(o)}),v(e,A),te()}Je(["click","keydown"]);var Qh=(e,t,r)=>t(a(r)),Wh=w('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),Vh=(e,t,r)=>t(a(r)),Gh=w('<button class="btn btn-ghost btn-sm btn-square" title="Fermer" aria-label="Fermer la notification"><!></button>'),Kh=w('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!></div></div></div>'),Yh=w("<div></div>");function Jh(e,t){ee(t,!0);let r=ke(t,"position",3,"toast-right toast-bottom"),n=ke(t,"padding",3,"md");const s=X(()=>n()==="sm"?"px-2 py-0.5":""),o=X(()=>bt.toasts);function i(f){return f==="success"||f==="info"}function l(f){bt.dismiss(f.id)}function c(f){t.onShowDetails?.({id:f.id,message:f.message,details:f.details})}var h=Yh();st(h,21,()=>a(o),f=>f.id,(f,g)=>{var p=Kh(),m=u(p),_=u(m),$=u(_);{var b=T=>{Po(T,{class:"h-5 w-5 animate-spin"})};k($,T=>{a(g).state==="loading"&&T(b)})}var E=d($,2),C=u(E),x=d(_,2),A=u(x);{var S=T=>{var D=Wh();D.__click=[Qh,c,g];var Q=u(D);wo(Q,{class:"h-3 w-3"}),v(T,D)};k(A,T=>{a(g).details&&T(S)})}var M=d(A,2);{var P=T=>{var D=Gh();D.__click=[Vh,l,g];var Q=u(D);Tt(Q,{class:"ms-1 h-4 w-4"}),v(T,D)};k(M,T=>{(a(g).state==="error"||!i(a(g).state))&&T(P)})}j(()=>{Me(p,1,`alert alert-${a(g).state??""} max-w-sm ${a(s)??""} shadow-lg ${a(g).state==="error"?"":"alert-soft"}`),B(C,a(g).message)}),v(f,p)}),j(()=>Me(h,1,`toast ${r()??""} z-50`)),v(e,h),te()}Je(["click"]);var Zh=w('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function Xh(e){var t=Zh(),r=u(t),n=d(r,2);Mo(n,{class:"swap-on fill-current"});var s=d(n,2);Eo(s,{class:"swap-off fill-current"}),v(e,t)}function Fh(e,t){y(t,!0)}var ep=w('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),tp=w('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),rp=w('<div class="text-base-content/60"> </div>'),np=w('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),ap=w('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),sp=w('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),op=w('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),ip=w('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function lp(e,t){ee(t,!0);let r,n=V(null),s=V(!0),o=V(!1),i=V(!1);function l(S,M,P){localStorage.setItem("appwrite-user-email",S),localStorage.setItem("appwrite-user-name",M)}async function c(){const S=Xa();r=_c(S);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const T=await(await window.AppwriteClient.getAccount()).get();l(T.email,T.name),await F.initialize(r,S)}catch(M){const P=M instanceof Error?M.message:"Erreur lors de l'initialisation";y(n,P,!0),console.error("[App] Erreur initialisation:",M)}finally{y(s,!1)}}Ys(async()=>{await c()});async function h(){y(i,!1),y(s,!0),y(n,null),await c()}bl(()=>{F.destroy()});async function f(){if(!(!r||a(o))){y(o,!0);try{const S=Xa();await F.forceReload(r,S)}catch(S){console.error("[App] Erreur lors du rechargement forcé:",S)}finally{y(o,!1)}}}const g=X(()=>a(n)||F.error),p=X(()=>a(s)||F.loading);var m=ip(),_=N(m),$=u(_);Jh($,{});var b=d($,2);{var E=S=>{Eh(S)},C=S=>{var M=op(),P=N(M),T=u(P),D=u(T),Q=d(u(D),2),L=u(Q);{var G=H=>{var ne=ep();v(H,ne)};k(L,H=>{F.realtimeConnected&&H(G)})}var oe=d(L,2);{var q=H=>{var ne=tp();v(H,ne)};k(oe,H=>{F.syncing&&H(q)})}var I=d(oe,2);{var R=H=>{var ne=rp(),Se=u(ne);j(Ae=>B(Se,`Maj: ${Ae??""}`),[()=>new Date(F.lastSync).toLocaleTimeString()]),v(H,ne)};k(I,H=>{F.lastSync&&H(R)})}var re=d(I,2);Xh(re);var z=d(re,2);{var W=H=>{var ne=np();let Se;ne.__click=f;var Ae=u(ne);Yc(Ae,{class:"h-4 w-4"}),j(Ne=>{Se=Me(ne,1,"btn btn-outline btn-sm",null,Se,Ne),ne.disabled=a(o)||F.loading},[()=>({loading:a(o)||F.loading})]),v(H,ne)};k(z,H=>{a(n)||H(W)})}var ae=d(z,2);{var ye=H=>{var ne=ap(),Se=u(ne);Se.__click=[Fh,i];var Ae=u(Se);Uc(Ae,{class:"mr-2 h-4 w-4"}),v(H,ne)};k(ae,H=>{a(n)&&H(ye)})}var U=d(P,2),Y=u(U);{var Z=H=>{Th(H,{get message(){return a(g)}})},le=H=>{var ne=K(),Se=N(ne);{var Ae=Ne=>{Ah(Ne,{get message(){return a(g)}})};k(Se,Ne=>{a(g)&&Ne(Ae)},!0)}v(H,ne)};k(Y,H=>{a(n)?H(Z):H(le,!1)})}var _e=d(Y,2);{var J=H=>{Ph(H,{})},de=H=>{var ne=K(),Se=N(ne);{var Ae=Ne=>{var se=sp();v(Ne,se)};k(Se,Ne=>{!F.loading&&!a(n)&&Ne(Ae)},!0)}v(H,ne)};k(_e,H=>{F.enrichedProducts.length>0?H(J):H(de,!1)})}v(S,M)};k(b,S=>{a(p)?S(E):S(C,!1)})}var x=d(_,2);{var A=S=>{Hh(S,{onClose:()=>y(i,!1),onAuthSuccess:h})};k(x,S=>{a(i)&&S(A)})}v(e,m),te()}Je(["click"]);const No=document.getElementById("app_products");if(!No)throw new Error("Élément target non trouvé: #app_products");el(lp,{target:No});
