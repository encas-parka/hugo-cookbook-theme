(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const es=!1;var on=Array.isArray,ko=Array.prototype.indexOf,Yn=Array.from,jn=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,To=Object.getOwnPropertyDescriptors,Co=Object.prototype,Mo=Array.prototype,ts=Object.getPrototypeOf,pa=Object.isExtensible;function Nr(e){return typeof e=="function"}const le=()=>{};function Do(e){for(var t=0;t<e.length;t++)e[t]()}function rs(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function ns(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const lt=2,Jn=4,Zn=8,cr=16,jt=32,ur=64,Xn=128,_t=256,nn=512,nt=1024,vt=2048,Zt=4096,yt=8192,dr=16384,Fn=32768,vr=65536,ma=1<<17,No=1<<18,Er=1<<19,Io=1<<20,Ln=1<<21,ln=1<<22,ar=1<<23,sr=Symbol("$state"),as=Symbol("legacy props"),Oo=Symbol(""),jr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ss(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ro(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function qo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function jo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Lo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Bo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function zo(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Uo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ho(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Vo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Wo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const cn=1,un=2,os=4,Go=8,Qo=16,Ko=1,Yo=2,Jo=4,Zo=8,Xo=16,Fo=1,ei=2,Xe=Symbol(),ti="http://www.w3.org/1999/xhtml",ri="http://www.w3.org/2000/svg",ni="@attach";function ai(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function si(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let oi=!1;function is(e){return e===this.v}function ls(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ii(e,t){return e!==t}function cs(e){return!ls(e,this.v)}let Ar=!1,li=!1;function ci(){Ar=!0}let Ye=null;function br(e){Ye=e}function Z(e,t=!1,r){Ye={p:Ye,c:null,e:null,s:e,x:null,l:Ar&&!t?{s:null,u:null,$:[]}:null}}function X(e){var t=Ye,r=t.e;if(r!==null){t.e=null;for(var n of r)xs(n)}return Ye=t.p,{}}function kr(){return!Ar||Ye!==null&&Ye.l===null}let tr=[];function us(){var e=tr;tr=[],Do(e)}function ir(e){if(tr.length===0&&!Lr){var t=tr;queueMicrotask(()=>{t===tr&&us()})}tr.push(e)}function ui(){for(;tr.length>0;)us()}const di=new WeakMap;function ds(e){var t=Ie;if(t===null)return Oe.f|=ar,e;if((t.f&Fn)===0){if((t.f&Xn)===0)throw!t.parent&&e instanceof Error&&vs(e),e;t.b.error(e)}else yr(e,t)}function yr(e,t){for(;t!==null;){if((t.f&Xn)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&vs(e),e}function vs(e){const t=di.get(e);t&&(jn(e,"message",{value:t.message}),jn(e,"stack",{value:t.stack}))}const Zr=new Set;let Le=null,tn=null,Bn=new Set,$t=[],dn=null,zn=!1,Lr=!1;class gt{current=new Map;#e=new Map;#t=new Set;#o=0;#d=null;#u=[];#i=[];#c=[];#l=[];#a=[];#v=[];skipped_effects=new Set;process(t){$t=[],tn=null;var r=gt.apply(this);for(const o of t)this.#s(o);if(this.#o===0){this.#h();var n=this.#i,a=this.#c;this.#i=[],this.#c=[],this.#l=[],tn=this,Le=null,ga(n),ga(a),tn=null,this.#d?.resolve()}else this.#f(this.#i),this.#f(this.#c),this.#f(this.#l);r();for(const o of this.#u)Ur(o);this.#u=[]}#s(t){t.f^=nt;for(var r=t.first;r!==null;){var n=r.f,a=(n&(jt|ur))!==0,o=a&&(n&nt)!==0,i=o||(n&yt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=nt:(n&Jn)!==0?this.#c.push(r):(n&nt)===0&&((n&ln)!==0&&r.b?.is_pending()?this.#u.push(r):mn(r)&&((r.f&cr)!==0&&this.#l.push(r),Ur(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#f(t){for(const r of t)((r.f&vt)!==0?this.#a:this.#v).push(r),ot(r,nt);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){Le=this}deactivate(){Le=null}flush(){if($t.length>0){if(this.activate(),fs(),Le!==null&&Le!==this)return}else this.#o===0&&this.#h();this.deactivate();for(const t of Bn)if(Bn.delete(t),t(),Le!==null)break}#h(){for(const t of this.#t)t();if(this.#t.clear(),Zr.size>1){this.#e.clear();let t=!0;for(const r of Zr){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;hs(n)}if($t.length>0){Le=r;const n=gt.apply(r);for(const a of $t)r.#s(a);$t=[],n()}}Le=null}Zr.delete(this)}increment(){this.#o+=1}decrement(){this.#o-=1;for(const t of this.#a)ot(t,vt),lr(t);for(const t of this.#v)ot(t,Zt),lr(t);this.flush()}add_callback(t){this.#t.add(t)}settled(){return(this.#d??=rs()).promise}static ensure(){if(Le===null){const t=Le=new gt;Zr.add(Le),Lr||gt.enqueue(()=>{Le===t&&t.flush()})}return Le}static enqueue(t){ir(t)}static apply(t){return le}}function vi(e){var t=Lr;Lr=!0;try{for(var r;;){if(ui(),$t.length===0&&(Le?.flush(),$t.length===0))return dn=null,r;fs()}}finally{Lr=t}}function fs(){var e=_r;zn=!0;try{var t=0;for(wa(!0);$t.length>0;){var r=gt.ensure();if(t++>1e3){var n,a;fi()}r.process($t),Qt.clear()}}finally{zn=!1,wa(e),dn=null}}function fi(){try{Bo()}catch(e){yr(e,dn)}}let er=null;function ga(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(dr|yt))===0&&mn(n)&&(er=[],Ur(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Es(n):n.fn=null),er?.length>0)){Qt.clear();for(const a of er)Ur(a);er=[]}}er=null}}function hs(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&lt)!==0?hs(t):(r&(ln|cr))!==0&&(ot(t,vt),lr(t))}}function lr(e){for(var t=dn=e;t.parent!==null;){t=t.parent;var r=t.f;if(zn&&t===Ie&&(r&cr)!==0)return;if((r&(ur|jt))!==0){if((r&nt)===0)return;t.f^=nt}}$t.push(t)}function ea(e){let t=0,r=Yt(0),n;return()=>{Ti()&&(s(r),oa(()=>(t===0&&(n=Tr(()=>e(()=>Et(r)))),t+=1,()=>{ir(()=>{t-=1,t===0&&(n?.(),n=void 0,Et(r))})})))}}var hi=vr|Er|Xn;function pi(e,t,r){new mi(e,t,r)}class mi{parent;#e=!1;#t;#o=null;#d;#u;#i;#c=null;#l=null;#a=null;#v=null;#s=0;#f=0;#h=!1;#m=null;#g=()=>{this.#m&&wr(this.#m,this.#s)};#n=ea(()=>(this.#m=Yt(this.#s),()=>{this.#m=null}));constructor(t,r,n){this.#t=t,this.#d=r,this.#u=n,this.parent=Ie.b,this.#e=!!this.#d.pending,this.#i=zt(()=>{Ie.b=this;{try{this.#c=tt(()=>n(this.#t))}catch(a){this.error(a)}this.#f>0?this.#y():this.#e=!1}},hi)}#_(){try{this.#c=tt(()=>this.#u(this.#t))}catch(t){this.error(t)}this.#e=!1}#b(){const t=this.#d.pending;t&&(this.#l=tt(()=>t(this.#t)),gt.enqueue(()=>{this.#c=this.#p(()=>(gt.ensure(),tt(()=>this.#u(this.#t)))),this.#f>0?this.#y():(It(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#d.pending}#p(t){var r=Ie,n=Oe,a=Ye;kt(this.#i),it(this.#i),br(this.#i.ctx);try{return t()}catch(o){return ds(o),null}finally{kt(r),it(n),br(a)}}#y(){const t=this.#d.pending;this.#c!==null&&(this.#v=document.createDocumentFragment(),gi(this.#c,this.#v)),this.#l===null&&(this.#l=tt(()=>t(this.#t)))}#w(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#w(t);return}this.#f+=t,this.#f===0&&(this.#e=!1,this.#l&&It(this.#l,()=>{this.#l=null}),this.#v&&(this.#t.before(this.#v),this.#v=null),ir(()=>{gt.ensure().flush()}))}update_pending_count(t){this.#w(t),this.#s+=t,Bn.add(this.#g)}get_effect_pending(){return this.#n(),s(this.#m)}error(t){var r=this.#d.onerror;let n=this.#d.failed;if(this.#h||!r&&!n)throw t;this.#c&&(rt(this.#c),this.#c=null),this.#l&&(rt(this.#l),this.#l=null),this.#a&&(rt(this.#a),this.#a=null);var a=!1,o=!1;const i=()=>{if(a){si();return}a=!0,o&&Wo(),gt.ensure(),this.#s=0,this.#a!==null&&It(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#c=this.#p(()=>(this.#h=!1,tt(()=>this.#u(this.#t)))),this.#f>0?this.#y():this.#e=!1};var l=Oe;try{it(null),o=!0,r?.(t,i),o=!1}catch(c){yr(c,this.#i&&this.#i.parent)}finally{it(l)}n&&ir(()=>{this.#a=this.#p(()=>{this.#h=!0;try{return tt(()=>{n(this.#t,()=>t,()=>i)})}catch(c){return yr(c,this.#i.parent),null}finally{this.#h=!1}})})}}function gi(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:Gr(r);t.append(r),r=a}}function ps(e,t,r){const n=kr()?vn:ta;if(t.length===0){r(e.map(n));return}var a=Le,o=Ie,i=_i();Promise.all(t.map(l=>bi(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(o.f&dr)===0&&yr(c,o)}a?.deactivate(),ms()}).catch(l=>{yr(l,o)})}function _i(){var e=Ie,t=Oe,r=Ye,n=Le;return function(){kt(e),it(t),br(r),n?.activate()}}function ms(){kt(null),it(null),br(null)}function vn(e){var t=lt|vt,r=Oe!==null&&(Oe.f&lt)!==0?Oe:null;return Ie===null||r!==null&&(r.f&_t)!==0?t|=_t:Ie.f|=Er,{ctx:Ye,deps:null,effects:null,equals:is,f:t,fn:e,reactions:null,rv:0,v:Xe,wv:0,parent:r??Ie,ac:null}}function bi(e,t){let r=Ie;r===null&&Ro();var n=r.b,a=void 0,o=Yt(Xe),i=!Oe,l=new Map;return Mi(()=>{var c=rs();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=Le,h=n.is_pending();i&&(n.update_pending_count(1),h||(f.increment(),l.get(f)?.reject(jr),l.set(f,c)));const m=(p,g=void 0)=>{h||f.activate(),g?g!==jr&&(o.f|=ar,wr(o,g)):((o.f&ar)!==0&&(o.f^=ar),wr(o,p)),i&&(n.update_pending_count(-1),h||f.decrement()),ms()};c.promise.then(m,p=>m(null,p||"unknown"))}),aa(()=>{for(const c of l.values())c.reject(jr)}),new Promise(c=>{function f(h){function m(){h===a?c(o):f(a)}h.then(m,m)}f(a)})}function J(e){const t=vn(e);return Ts(t),t}function ta(e){const t=vn(e);return t.equals=cs,t}function gs(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)rt(t[r])}}function yi(e){for(var t=e.parent;t!==null;){if((t.f&lt)===0)return t;t=t.parent}return null}function ra(e){var t,r=Ie;kt(yi(e));try{gs(e),t=Ns(e)}finally{kt(r)}return t}function _s(e){var t=ra(e);if(e.equals(t)||(e.v=t,e.wv=Ms()),!fr){var r=(Vt||(e.f&_t)!==0)&&e.deps!==null?Zt:nt;ot(e,r)}}const Qt=new Map;function Yt(e,t){var r={f:0,v:e,reactions:null,equals:is,rv:0,wv:0};return r}function W(e,t){const r=Yt(e);return Ts(r),r}function wi(e,t=!1,r=!0){const n=Yt(e);return t||(n.equals=cs),Ar&&r&&Ye!==null&&Ye.l!==null&&(Ye.l.s??=[]).push(n),n}function b(e,t,r=!1){Oe!==null&&(!bt||(Oe.f&ma)!==0)&&kr()&&(Oe.f&(lt|cr|ln|ma))!==0&&!Ot?.includes(e)&&Vo();let n=r?je(t):t;return wr(e,n)}function wr(e,t){if(!e.equals(t)){var r=e.v;fr?Qt.set(e,t):Qt.set(e,r),e.v=t;var n=gt.ensure();n.capture(e,r),(e.f&lt)!==0&&((e.f&vt)!==0&&ra(e),ot(e,(e.f&_t)===0?nt:Zt)),e.wv=Ms(),bs(e,vt),kr()&&Ie!==null&&(Ie.f&nt)!==0&&(Ie.f&(jt|ur))===0&&(pt===null?Ii([e]):pt.push(e))}return t}function Et(e){b(e,e.v+1)}function bs(e,t){var r=e.reactions;if(r!==null)for(var n=kr(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===Ie)){var c=(l&vt)===0;c&&ot(i,t),(l&lt)!==0?bs(i,Zt):c&&((l&cr)!==0&&er!==null&&er.push(i),lr(i))}}}function je(e){if(typeof e!="object"||e===null||sr in e)return e;const t=ts(e);if(t!==Co&&t!==Mo)return e;var r=new Map,n=on(e),a=W(0),o=Rt,i=l=>{if(Rt===o)return l();var c=Oe,f=Rt;it(null),xa(o);var h=l();return it(c),xa(f),h};return n&&r.set("length",W(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Uo();var h=r.get(c);return h===void 0?h=i(()=>{var m=W(f.value);return r.set(c,m),m}):b(h,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const h=i(()=>W(Xe));r.set(c,h),Et(a)}}else b(f,Xe),Et(a);return!0},get(l,c,f){if(c===sr)return e;var h=r.get(c),m=c in l;if(h===void 0&&(!m||Gt(l,c)?.writable)&&(h=i(()=>{var g=je(m?l[c]:Xe),_=W(g);return _}),r.set(c,h)),h!==void 0){var p=s(h);return p===Xe?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var h=r.get(c);h&&(f.value=s(h))}else if(f===void 0){var m=r.get(c),p=m?.v;if(m!==void 0&&p!==Xe)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===sr)return!0;var f=r.get(c),h=f!==void 0&&f.v!==Xe||Reflect.has(l,c);if(f!==void 0||Ie!==null&&(!h||Gt(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=h?je(l[c]):Xe,g=W(p);return g}),r.set(c,f));var m=s(f);if(m===Xe)return!1}return h},set(l,c,f,h){var m=r.get(c),p=c in l;if(n&&c==="length")for(var g=f;g<m.v;g+=1){var _=r.get(g+"");_!==void 0?b(_,Xe):g in l&&(_=i(()=>W(Xe)),r.set(g+"",_))}if(m===void 0)(!p||Gt(l,c)?.writable)&&(m=i(()=>W(void 0)),b(m,je(f)),r.set(c,m));else{p=m.v!==Xe;var x=i(()=>je(f));b(m,x)}var w=Reflect.getOwnPropertyDescriptor(l,c);if(w?.set&&w.set.call(h,f),!p){if(n&&typeof c=="string"){var $=r.get("length"),D=Number(c);Number.isInteger(D)&&D>=$.v&&b($,D+1)}Et(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(m=>{var p=r.get(m);return p===void 0||p.v!==Xe});for(var[f,h]of r)h.v!==Xe&&!(f in l)&&c.push(f);return c},setPrototypeOf(){Ho()}})}function _a(e){try{if(e!==null&&typeof e=="object"&&sr in e)return e[sr]}catch{}return e}function Si(e,t){return Object.is(_a(e),_a(t))}var ba,ys,ws,Ss;function xi(){if(ba===void 0){ba=window,ys=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;ws=Gt(t,"firstChild").get,Ss=Gt(t,"nextSibling").get,pa(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),pa(r)&&(r.__t=void 0)}}function Lt(e=""){return document.createTextNode(e)}function Sr(e){return ws.call(e)}function Gr(e){return Ss.call(e)}function u(e,t){return Sr(e)}function N(e,t=!1){{var r=Sr(e);return r instanceof Comment&&r.data===""?Gr(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=Gr(n);return n}function Pi(e){e.textContent=""}function fn(){return!1}function $i(e,t){if(t){const r=document.body;e.autofocus=!0,ir(()=>{document.activeElement===r&&e.focus()})}}let ya=!1;function Ei(){ya||(ya=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function hn(e){var t=Oe,r=Ie;it(null),kt(null);try{return e()}finally{it(t),kt(r)}}function na(e,t,r,n=r){e.addEventListener(t,()=>hn(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Ei()}function Ai(e){Ie===null&&Oe===null&&Lo(),Oe!==null&&(Oe.f&_t)!==0&&Ie===null&&jo(),fr&&qo()}function ki(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Bt(e,t,r,n=!0){var a=Ie;a!==null&&(a.f&yt)!==0&&(e|=yt);var o={ctx:Ye,deps:null,nodes_start:null,nodes_end:null,f:e|vt,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Ur(o),o.f|=Fn}catch(c){throw rt(o),c}else t!==null&&lr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Er)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&ki(i,a),Oe!==null&&(Oe.f&lt)!==0&&(e&ur)===0)){var l=Oe;(l.effects??=[]).push(i)}}return o}function Ti(){return Oe!==null&&!bt}function aa(e){const t=Bt(Zn,null,!1);return ot(t,nt),t.teardown=e,t}function Xt(e){Ai();var t=Ie.f,r=!Oe&&(t&jt)!==0&&(t&Fn)===0;if(r){var n=Ye;(n.e??=[]).push(e)}else return xs(e)}function xs(e){return Bt(Jn|Io,e,!1)}function Ci(e){gt.ensure();const t=Bt(ur|Er,e,!0);return(r={})=>new Promise(n=>{r.outro?It(t,()=>{rt(t),n(void 0)}):(rt(t),n(void 0))})}function sa(e){return Bt(Jn,e,!1)}function Mi(e){return Bt(ln|Er,e,!0)}function oa(e,t=0){return Bt(Zn|t,e,!0)}function z(e,t=[],r=[]){ps(t,r,n=>{Bt(Zn,()=>e(...n.map(s)),!0)})}function zt(e,t=0){var r=Bt(cr|t,e,!0);return r}function tt(e,t=!0){return Bt(jt|Er,e,!0,t)}function Ps(e){var t=e.teardown;if(t!==null){const r=fr,n=Oe;Sa(!0),it(null);try{t.call(null)}finally{Sa(r),it(n)}}}function $s(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&hn(()=>{a.abort(jr)});var n=r.next;(r.f&ur)!==0?r.parent=null:rt(r,t),r=n}}function Di(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&jt)===0&&rt(t),t=r}}function rt(e,t=!0){var r=!1;(t||(e.f&No)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Ni(e.nodes_start,e.nodes_end),r=!0),$s(e,t&&!r),an(e,0),ot(e,dr);var n=e.transitions;if(n!==null)for(const o of n)o.stop();Ps(e);var a=e.parent;a!==null&&a.first!==null&&Es(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Ni(e,t){for(;e!==null;){var r=e===t?null:Gr(e);e.remove(),e=r}}function Es(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function It(e,t){var r=[];ia(e,r,!0),As(r,()=>{rt(e),t&&t()})}function As(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function ia(e,t,r){if((e.f&yt)===0){if(e.f^=yt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,o=(n.f&vr)!==0||(n.f&jt)!==0;ia(n,t,o?r:!1),n=a}}}function pn(e){ks(e,!0)}function ks(e,t){if((e.f&yt)!==0){e.f^=yt,(e.f&nt)===0&&(ot(e,vt),lr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&vr)!==0||(r.f&jt)!==0;ks(r,a?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let _r=!1;function wa(e){_r=e}let fr=!1;function Sa(e){fr=e}let Oe=null,bt=!1;function it(e){Oe=e}let Ie=null;function kt(e){Ie=e}let Ot=null;function Ts(e){Oe!==null&&(Ot===null?Ot=[e]:Ot.push(e))}let st=null,dt=0,pt=null;function Ii(e){pt=e}let Cs=1,zr=0,Rt=zr;function xa(e){Rt=e}let Vt=!1;function Ms(){return++Cs}function mn(e){var t=e.f;if((t&vt)!==0)return!0;if((t&Zt)!==0){var r=e.deps,n=(t&_t)!==0;if(r!==null){var a,o,i=(t&nn)!==0,l=n&&Ie!==null&&!Vt,c=r.length;if((i||l)&&(Ie===null||(Ie.f&dr)===0)){var f=e,h=f.parent;for(a=0;a<c;a++)o=r[a],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=nn),l&&h!==null&&(h.f&_t)===0&&(f.f^=_t)}for(a=0;a<c;a++)if(o=r[a],mn(o)&&_s(o),o.wv>e.wv)return!0}(!n||Ie!==null&&!Vt)&&ot(e,nt)}return!1}function Ds(e,t,r=!0){var n=e.reactions;if(n!==null&&!Ot?.includes(e))for(var a=0;a<n.length;a++){var o=n[a];(o.f&lt)!==0?Ds(o,t,!1):t===o&&(r?ot(o,vt):(o.f&nt)!==0&&ot(o,Zt),lr(o))}}function Ns(e){var t=st,r=dt,n=pt,a=Oe,o=Vt,i=Ot,l=Ye,c=bt,f=Rt,h=e.f;st=null,dt=0,pt=null,Vt=(h&_t)!==0&&(bt||!_r||Oe===null),Oe=(h&(jt|ur))===0?e:null,Ot=null,br(e.ctx),bt=!1,Rt=++zr,e.ac!==null&&(hn(()=>{e.ac.abort(jr)}),e.ac=null);try{e.f|=Ln;var m=e.fn,p=m(),g=e.deps;if(st!==null){var _;if(an(e,dt),g!==null&&dt>0)for(g.length=dt+st.length,_=0;_<st.length;_++)g[dt+_]=st[_];else e.deps=g=st;if(!Vt||(h&lt)!==0&&e.reactions!==null)for(_=dt;_<g.length;_++)(g[_].reactions??=[]).push(e)}else g!==null&&dt<g.length&&(an(e,dt),g.length=dt);if(kr()&&pt!==null&&!bt&&g!==null&&(e.f&(lt|Zt|vt))===0)for(_=0;_<pt.length;_++)Ds(pt[_],e);return a!==null&&a!==e&&(zr++,pt!==null&&(n===null?n=pt:n.push(...pt))),(e.f&ar)!==0&&(e.f^=ar),p}catch(x){return ds(x)}finally{e.f^=Ln,st=t,dt=r,pt=n,Oe=a,Vt=o,Ot=i,br(l),bt=c,Rt=f}}function Oi(e,t){let r=t.reactions;if(r!==null){var n=ko.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&lt)!==0&&(st===null||!st.includes(t))&&(ot(t,Zt),(t.f&(_t|nn))===0&&(t.f^=nn),gs(t),an(t,0))}function an(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Oi(e,r[n])}function Ur(e){var t=e.f;if((t&dr)===0){ot(e,nt);var r=Ie,n=_r;Ie=e,_r=!0;try{(t&cr)!==0?Di(e):$s(e),Ps(e);var a=Ns(e);e.teardown=typeof a=="function"?a:null,e.wv=Cs;var o;es&&li&&(e.f&vt)!==0&&e.deps}finally{_r=n,Ie=r}}}async function Ri(){await Promise.resolve(),vi()}function s(e){var t=e.f,r=(t&lt)!==0;if(Oe!==null&&!bt){var n=Ie!==null&&(Ie.f&dr)!==0;if(!n&&!Ot?.includes(e)){var a=Oe.deps;if((Oe.f&Ln)!==0)e.rv<zr&&(e.rv=zr,st===null&&a!==null&&a[dt]===e?dt++:st===null?st=[e]:(!Vt||!st.includes(e))&&st.push(e));else{(Oe.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[Oe]:o.includes(Oe)||o.push(Oe)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&_t)===0&&(i.f^=_t)}if(fr){if(Qt.has(e))return Qt.get(e);if(r){i=e;var c=i.v;return((i.f&nt)===0&&i.reactions!==null||Is(i))&&(c=ra(i)),Qt.set(i,c),c}}else r&&(i=e,mn(i)&&_s(i));if((e.f&ar)!==0)throw e.v;return e.v}function Is(e){if(e.v===Xe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Qt.has(t)||(t.f&lt)!==0&&Is(t))return!0;return!1}function Tr(e){var t=bt;try{return bt=!0,e()}finally{bt=t}}const qi=-7169;function ot(e,t){e.f=e.f&qi|t}function ji(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Li=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Bi(e){return Li.includes(e)}const zi={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ui(e){return e=e.toLowerCase(),zi[e]??e}const Hi=["touchstart","touchmove"];function Vi(e){return Hi.includes(e)}const Os=new Set,Un=new Set;function la(e,t,r,n={}){function a(o){if(n.capture||Rr.call(t,o),!o.cancelBubble)return hn(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ir(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Hn(e,t,r,n={}){var a=la(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function An(e,t,r,n,a){var o={capture:n,passive:a},i=la(e,t,r,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&aa(()=>{t.removeEventListener(e,i,o)})}function Je(e){for(var t=0;t<e.length;t++)Os.add(e[t]);for(var r of Un)r(e)}let Pa=null;function Rr(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;Pa=e;var i=0,l=Pa===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(o=a[i]||e.target,o!==t){jn(e,"currentTarget",{configurable:!0,get(){return o||r}});var h=Oe,m=Ie;it(null),kt(null);try{for(var p,g=[];o!==null;){var _=o.assignedSlot||o.parentNode||o.host||null;try{var x=o["__"+n];if(x!=null&&(!o.disabled||e.target===o))if(on(x)){var[w,...$]=x;w.apply(o,[e,...$])}else x.call(o,e)}catch(D){p?g.push(D):p=D}if(e.cancelBubble||_===t||_===null)break;o=_}if(p){for(let D of g)queueMicrotask(()=>{throw D});throw p}}finally{e.__root=t,delete e.currentTarget,it(h),kt(m)}}}function Rs(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function xr(e,t){var r=Ie;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function y(e,t){var r=(t&Fo)!==0,n=(t&ei)!==0,a,o=!e.startsWith("<!>");return()=>{a===void 0&&(a=Rs(o?e:"<!>"+e),r||(a=Sr(a)));var i=n||ys?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Sr(i),c=i.lastChild;xr(l,c)}else xr(i,i);return i}}function Wi(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Rs(a),l=Sr(i);o=Sr(l)}var c=o.cloneNode(!0);return xr(c,c),c}}function Gi(e,t){return Wi(e,t,"svg")}function ft(e=""){{var t=Lt(e+"");return xr(t,t),t}}function G(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Lt();return e.append(t,r),xr(t,r),e}function v(e,t){e!==null&&e.before(t)}function U(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Qi(e,t){return Ki(e,t)}const mr=new Map;function Ki(e,{target:t,anchor:r,props:n={},events:a,context:o,intro:i=!0}){xi();var l=new Set,c=m=>{for(var p=0;p<m.length;p++){var g=m[p];if(!l.has(g)){l.add(g);var _=Vi(g);t.addEventListener(g,Rr,{passive:_});var x=mr.get(g);x===void 0?(document.addEventListener(g,Rr,{passive:_}),mr.set(g,1)):mr.set(g,x+1)}}};c(Yn(Os)),Un.add(c);var f=void 0,h=Ci(()=>{var m=r??t.appendChild(Lt());return pi(m,{pending:()=>{}},p=>{if(o){Z({});var g=Ye;g.c=o}a&&(n.$$events=a),f=e(p,n)||{},o&&X()}),()=>{for(var p of l){t.removeEventListener(p,Rr);var g=mr.get(p);--g===0?(document.removeEventListener(p,Rr),mr.delete(p)):mr.set(p,g)}Un.delete(c),m!==r&&m.parentNode?.removeChild(m)}});return Yi.set(f,h),f}let Yi=new WeakMap;function T(e,t,r=!1){var n=e,a=null,o=null,i=Xe,l=r?vr:0,c=!1;const f=(g,_=!0)=>{c=!0,p(_,g)};var h=null;function m(){h!==null&&(h.lastChild.remove(),n.before(h),h=null);var g=i?a:o,_=i?o:a;g&&pn(g),_&&It(_,()=>{i?o=null:a=null})}const p=(g,_)=>{if(i!==(i=g)){var x=fn(),w=n;if(x&&(h=document.createDocumentFragment(),h.append(w=Lt())),i?a??=_&&tt(()=>_(w)):o??=_&&tt(()=>_(w)),x){var $=Le,D=i?a:o,S=i?o:a;D&&$.skipped_effects.delete(D),S&&$.skipped_effects.add(S),$.add_callback(m)}else m()}};zt(()=>{c=!1,t(f),c||p(null,null)},l)}function Ji(e,t,r){var n=e,a=Xe,o,i,l=null,c=kr()?ii:ls;function f(){o&&It(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}zt(()=>{if(c(a,a=t())){var h=n,m=fn();m&&(l=document.createDocumentFragment(),l.append(h=Lt())),i=tt(()=>r(h)),m?Le.add_callback(f):f()}})}function Hr(e,t){return t}function Zi(e,t,r){for(var n=e.items,a=[],o=t.length,i=0;i<o;i++)ia(t[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;Pi(c),c.append(r),n.clear(),Pt(e,t[0].prev,t[o-1].next)}As(a,()=>{for(var f=0;f<o;f++){var h=t[f];l||(n.delete(h.k),Pt(e,h.prev,h.next)),rt(h.e,!l)}})}function at(e,t,r,n,a,o=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&os)!==0;if(c){var f=e;i=f.appendChild(Lt())}var h=null,m=!1,p=new Map,g=ta(()=>{var $=r();return on($)?$:$==null?[]:Yn($)}),_,x;function w(){Xi(x,_,l,p,i,a,t,n,r),o!==null&&(_.length===0?h?pn(h):h=tt(()=>o(i)):h!==null&&It(h,()=>{h=null}))}zt(()=>{x??=Ie,_=s(g);var $=_.length;if(!(m&&$===0)){m=$===0;var D,S,A,E;if(fn()){var k=new Set,P=Le;for(S=0;S<$;S+=1){A=_[S],E=n(A,S);var C=l.items.get(E)??p.get(E);C?(t&(cn|un))!==0&&qs(C,A,S,t):(D=js(null,l,null,null,A,E,S,a,t,r,!0),p.set(E,D)),k.add(E)}for(const[M,B]of l.items)k.has(M)||P.skipped_effects.add(B.e);P.add_callback(w)}else w();s(g)}})}function Xi(e,t,r,n,a,o,i,l,c){var f=(i&Go)!==0,h=(i&(cn|un))!==0,m=t.length,p=r.items,g=r.first,_=g,x,w=null,$,D=[],S=[],A,E,k,P;if(f)for(P=0;P<m;P+=1)A=t[P],E=l(A,P),k=p.get(E),k!==void 0&&(k.a?.measure(),($??=new Set).add(k));for(P=0;P<m;P+=1){if(A=t[P],E=l(A,P),k=p.get(E),k===void 0){var C=n.get(E);if(C!==void 0){n.delete(E),p.set(E,C);var M=w?w.next:_;Pt(r,w,C),Pt(r,C,M),kn(C,M,a),w=C}else{var B=_?_.e.nodes_start:a;w=js(B,r,w,w===null?r.first:w.next,A,E,P,o,i,c)}p.set(E,w),D=[],S=[],_=w.next;continue}if(h&&qs(k,A,P,i),(k.e.f&yt)!==0&&(pn(k.e),f&&(k.a?.unfix(),($??=new Set).delete(k))),k!==_){if(x!==void 0&&x.has(k)){if(D.length<S.length){var R=S[0],F;w=R.prev;var ce=D[0],q=D[D.length-1];for(F=0;F<D.length;F+=1)kn(D[F],R,a);for(F=0;F<S.length;F+=1)x.delete(S[F]);Pt(r,ce.prev,q.next),Pt(r,w,ce),Pt(r,q,R),_=R,w=q,P-=1,D=[],S=[]}else x.delete(k),kn(k,_,a),Pt(r,k.prev,k.next),Pt(r,k,w===null?r.first:w.next),Pt(r,w,k),w=k;continue}for(D=[],S=[];_!==null&&_.k!==E;)(_.e.f&yt)===0&&(x??=new Set).add(_),S.push(_),_=_.next;if(_===null)continue;k=_}D.push(k),w=k,_=k.next}if(_!==null||x!==void 0){for(var I=x===void 0?[]:Yn(x);_!==null;)(_.e.f&yt)===0&&I.push(_),_=_.next;var j=I.length;if(j>0){var Y=(i&os)!==0&&m===0?a:null;if(f){for(P=0;P<j;P+=1)I[P].a?.measure();for(P=0;P<j;P+=1)I[P].a?.fix()}Zi(r,I,Y)}}f&&ir(()=>{if($!==void 0)for(k of $)k.a?.apply()}),e.first=r.first&&r.first.e,e.last=w&&w.e;for(var V of n.values())rt(V.e);n.clear()}function qs(e,t,r,n){(n&cn)!==0&&wr(e.v,t),(n&un)!==0?wr(e.i,r):e.i=r}function js(e,t,r,n,a,o,i,l,c,f,h){var m=(c&cn)!==0,p=(c&Qo)===0,g=m?p?wi(a,!1,!1):Yt(a):a,_=(c&un)===0?i:Yt(i),x={i:_,v:g,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var w=document.createDocumentFragment();w.append(e=Lt())}return x.e=tt(()=>l(e,g,_,f),oi),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?h||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function kn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=Gr(o);a.before(o),o=i}}function Pt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ue(e,t,...r){var n=e,a=le,o;zt(()=>{a!==(a=t())&&(o&&(rt(o),o=null),o=tt(()=>a(n,...r)))},vr)}function or(e,t,r){var n=e,a,o,i=null,l=null;function c(){o&&(It(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}zt(()=>{if(a!==(a=t())){var f=fn();if(a){var h=n;f&&(i=document.createDocumentFragment(),i.append(h=Lt()),o&&Le.skipped_effects.add(o)),l=tt(()=>r(h,a))}f?Le.add_callback(c):c()}},vr)}function Fi(e,t,r,n,a,o){var i,l,c=null,f=e,h;zt(()=>{const m=t()||null;var p=ri;m!==i&&(h&&(m===null?It(h,()=>{h=null,l=null}):m===l?pn(h):rt(h)),m&&m!==l&&(h=tt(()=>{if(c=document.createElementNS(p,m),xr(c,c),n){var g=c.appendChild(Lt());n(c,g)}Ie.nodes_end=c,f.before(c)})),i=m,i&&(l=i))},vr)}function el(e,t){var r=void 0,n;zt(()=>{r!==(r=t())&&(n&&(rt(n),n=null),r&&(n=tt(()=>{sa(()=>r(e))})))})}function Ls(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Ls(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function tl(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Ls(e))&&(n&&(n+=" "),n+=t);return n}function rl(e){return typeof e=="object"?tl(e):e??""}const $a=[...` 	
\r\f \v\uFEFF`];function nl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||$a.includes(n[i-1]))&&(l===n.length||$a.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Ea(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var o=e[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function Tn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function al(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Tn)),a&&c.push(...Object.keys(a).map(Tn));var f=0,h=-1;const x=e.length;for(var m=0;m<x;m++){var p=e[m];if(l?p==="/"&&e[m-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[m+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&h===-1)h=m;else if(p===";"||m===x-1){if(h!==-1){var g=Tn(e.substring(f,h).trim());if(!c.includes(g)){p!==";"&&m++;var _=e.substring(f,m).trim();r+=" "+_+";"}}f=m+1,h=-1}}}}return n&&(r+=Ea(n)),a&&(r+=Ea(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Te(e,t,r,n,a,o){var i=e.__className;if(i!==r||i===void 0){var l=nl(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&a!==o)for(var c in o){var f=!!o[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return o}function Cn(e,t={},r,n){for(var a in r){var o=r[a];t[a]!==o&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,n))}}function Bs(e,t,r,n){var a=e.__style;if(a!==t){var o=al(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(Cn(e,r?.[0],n[0]),Cn(e,r?.[1],n[1],"important")):Cn(e,r,n));return n}function sn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!on(t))return ai();for(var n of e.options)n.selected=t.includes(Br(n));return}for(n of e.options){var a=Br(n);if(Si(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function zs(e){var t=new MutationObserver(()=>{sn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),aa(()=>{t.disconnect()})}function rr(e,t,r=t){var n=!0;na(e,"change",a=>{var o=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),Br);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&Br(l)}r(i)}),sa(()=>{var a=t();if(sn(e,a,n),n&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=Br(o),r(a))}e.__value=a,n=!1}),zs(e)}function Br(e){return"__value"in e?e.__value:e.value}const Ir=Symbol("class"),Or=Symbol("style"),Us=Symbol("is custom element"),Hs=Symbol("is html");function sl(e,t){var r=gn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Mn(e,t){var r=gn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function ol(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Jt(e,t,r,n){var a=gn(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Oo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Vs(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function il(e,t,r,n,a=!1,o=!1){var i=gn(e),l=i[Us],c=!i[Hs],f=t||{},h=e.tagName==="OPTION";for(var m in t)m in r||(r[m]=null);r.class?r.class=rl(r.class):r[Ir]&&(r.class=null),r[Or]&&(r.style??=null);var p=Vs(e);for(const A in r){let E=r[A];if(h&&A==="value"&&E==null){e.value=e.__value="",f[A]=E;continue}if(A==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";Te(e,g,E,n,t?.[Ir],r[Ir]),f[A]=E,f[Ir]=r[Ir];continue}if(A==="style"){Bs(e,E,t?.[Or],r[Or]),f[A]=E,f[Or]=r[Or];continue}var _=f[A];if(!(E===_&&!(E===void 0&&e.hasAttribute(A)))){f[A]=E;var x=A[0]+A[1];if(x!=="$$")if(x==="on"){const k={},P="$$"+A;let C=A.slice(2);var w=Bi(C);if(ji(C)&&(C=C.slice(0,-7),k.capture=!0),!w&&_){if(E!=null)continue;e.removeEventListener(C,f[P],k),f[P]=null}if(E!=null)if(w)e[`__${C}`]=E,Je([C]);else{let M=function(B){f[A].call(this,B)};var S=M;f[P]=la(C,e,M,k)}else w&&(e[`__${C}`]=void 0)}else if(A==="style")Jt(e,A,E);else if(A==="autofocus")$i(e,!!E);else if(!l&&(A==="__value"||A==="value"&&E!=null))e.value=e.__value=E;else if(A==="selected"&&h)ol(e,E);else{var $=A;c||($=Ui($));var D=$==="defaultValue"||$==="defaultChecked";if(E==null&&!l&&!D)if(i[A]=null,$==="value"||$==="checked"){let k=e;const P=t===void 0;if($==="value"){let C=k.defaultValue;k.removeAttribute($),k.defaultValue=C,k.value=k.__value=P?C:null}else{let C=k.defaultChecked;k.removeAttribute($),k.defaultChecked=C,k.checked=P?C:!1}}else e.removeAttribute(A);else D||p.includes($)&&(l||typeof E!="string")?(e[$]=E,$ in i&&(i[$]=Xe)):typeof E!="function"&&Jt(e,$,E)}}}return f}function Aa(e,t,r=[],n=[],a,o=!1,i=!1){ps(r,n,l=>{var c=void 0,f={},h=e.nodeName==="SELECT",m=!1;if(zt(()=>{var g=t(...l.map(s)),_=il(e,c,g,a,o,i);m&&h&&"value"in g&&sn(e,g.value);for(let w of Object.getOwnPropertySymbols(f))g[w]||rt(f[w]);for(let w of Object.getOwnPropertySymbols(g)){var x=g[w];w.description===ni&&(!c||x!==c[w])&&(f[w]&&rt(f[w]),f[w]=tt(()=>el(e,()=>x))),_[w]=x}c=_}),h){var p=e;sa(()=>{sn(p,c.value,!0),zs(p)})}m=!0})}function gn(e){return e.__attributes??={[Us]:e.nodeName.includes("-"),[Hs]:e.namespaceURI===ti}}var ka=new Map;function Vs(e){var t=e.getAttribute("is")||e.nodeName,r=ka.get(t);if(r)return r;ka.set(t,r=[]);for(var n,a=e,o=Element.prototype;o!==a;){n=To(a);for(var i in n)n[i].set&&r.push(i);a=ts(a)}return r}function qe(e,t,r=t){var n=new WeakSet;na(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Dn(e)?Nn(o):o,r(o),Le!==null&&n.add(Le),await Ri(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),Tr(t)==null&&e.value&&(r(Dn(e)?Nn(e.value):e.value),Le!==null&&n.add(Le)),oa(()=>{var a=t();if(e===document.activeElement){var o=tn??Le;if(n.has(o))return}Dn(e)&&a===Nn(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function ll(e,t,r=t){na(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),Tr(t)==null&&r(e.checked),oa(()=>{var n=t();e.checked=!!n})}function Dn(e){var t=e.type;return t==="number"||t==="range"}function Nn(e){return e===""?null:+e}let Xr=!1;function cl(e){var t=Xr;try{return Xr=!1,[e(),Xr]}finally{Xr=t}}const ul={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function he(e,t,r){return new Proxy({props:e,exclude:t},ul)}const dl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Nr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Nr(a)&&(a=a());const o=Gt(a,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Nr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Gt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===sr||t===as)return!1;for(let r of e.props)if(Nr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Nr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function pe(...e){return new Proxy({props:e},dl)}function Ae(e,t,r,n){var a=!Ar||(r&Yo)!==0,o=(r&Zo)!==0,i=(r&Xo)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?Tr(n):n),l),h;if(o){var m=sr in e||as in e;h=Gt(e,t)?.set??(m&&t in e?S=>e[t]=S:void 0)}var p,g=!1;o?[p,g]=cl(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),h&&(a&&zo(),h(p)));var _;if(a?_=()=>{var S=e[t];return S===void 0?f():(c=!0,S)}:_=()=>{var S=e[t];return S!==void 0&&(l=void 0),S===void 0?l:S},a&&(r&Jo)===0)return _;if(h){var x=e.$$legacy;return(function(S,A){return arguments.length>0?((!a||!A||x||g)&&h(A?_():S),S):_()})}var w=!1,$=((r&Ko)!==0?vn:ta)(()=>(w=!1,_()));o&&s($);var D=Ie;return(function(S,A){if(arguments.length>0){const E=A?s($):a&&o?je(S):S;return b($,E),w=!0,l!==void 0&&(l=E),S}return fr&&w||(D.f&dr)!==0?$.v:s($)})}function Ws(e){Ye===null&&ss(),Ar&&Ye.l!==null?fl(Ye).m.push(e):Xt(()=>{const t=Tr(e);if(typeof t=="function")return t})}function vl(e){Ye===null&&ss(),Ws(()=>()=>Tr(e))}function fl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const hl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(hl);const pl="modulepreload",ml=function(e){return"/"+e},Ta={},gl=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(h=>{if(h=ml(h),h in Ta)return;Ta[h]=!0;const m=h.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=m?"stylesheet":pl,m||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),m)return new Promise((_,x)=>{g.addEventListener("load",_),g.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};class _l extends Map{#e=new Map;#t=W(0);#o=W(0);#d=Rt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#o.v=super.size}}#u(t){return Rt===this.#d?W(t):Yt(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#u(0),r.set(t,n);else return s(this.#t),!1}return s(n),!0}forEach(t,r){this.#i(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#u(0),r.set(t,n);else{s(this.#t);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#t;if(a===void 0)a=this.#u(0),n.set(t,a),b(this.#o,super.size),Et(l);else if(o!==r){Et(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(h=>c.has(h));f&&Et(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),b(this.#o,super.size),b(n,-1),Et(this.#t)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;b(this.#o,0);for(var r of t.values())b(r,-1);Et(this.#t),t.clear()}}#i(){s(this.#t);var t=this.#e;if(this.#o.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#u(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#t),super.keys()}values(){return this.#i(),super.values()}entries(){return this.#i(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#o),super.size}}class bl{#e;#t;constructor(t,r){this.#e=t,this.#t=ea(r)}get current(){return this.#t(),this.#e()}}const yl=/\(.+\)/,wl=new Set(["all","print","screen","and","or","not","only"]);class Sl extends bl{constructor(t,r){let n=yl.test(t)||t.split(/[\s,]+/).some(o=>wl.has(o.trim()))?t:`(${t})`;const a=window.matchMedia(n);super(()=>a.matches,o=>Hn(a,"change",o))}}const xl=typeof window<"u"?window:void 0;function Pl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class $l{#e;#t;constructor(t={}){const{window:r=xl,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#t=ea(a=>{const o=Hn(r,"focusin",a),i=Hn(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#t?.(),this.#e?Pl(this.#e):null}}new $l;function El(e){return typeof e=="function"}function Al(e,t){if(El(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function kl(e,t){let r=W(null);const n=J(()=>Al(t,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const c=new Promise((f,h)=>{i=f,l=h});b(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);b(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),b(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Tl(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),o=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return o.length?Qr(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function Wt(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function _n(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Qr(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function bn(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>nr(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,c)=>{const f=n.get(c)||0,h=l-f;h>0&&(a.push({q:h,u:c}),o.push(nr(h.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function At(e){return e?.length?e.map(t=>nr(t.q.toString(),t.u)).join(" et "):"-"}function nr(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function ca(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Cl(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([o])=>{const i=new Date(o);return i>=n&&i<=a}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function Ml(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Dl(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Nl(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function ua(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return ca(t)}function Il(e,t,r=""){if(e.status==="cancelled")return!1;const n=e.deliveryDate||e.$createdAt;return!n||n>t||r&&e.$createdAt<r?!1:e.status==="delivered"||e.status==="pending"||e.status==="ordered"&&n<=t}function In(e,t){let r=[],n="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(r=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],n=e.stockParsed.dateTime);const a=[];if(e.purchases)for(const c of e.purchases)Il(c,t,n)&&a.push({q:c.quantity,u:c.unit});const o=Ol(e,t),i=[...r,...a],l=ca(i);return Rl(l,o)}function Ol(e,t){if(!e.byDate)return[];const r=[];for(const[n,a]of Object.entries(e.byDate))if(n<=t){const i=a.totalConsolidated;i&&r.push(...i)}return ca(r)}function Rl(e,t){const r=new Map,n=new Map;e.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),t.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const a=[],o=new Set([...r.keys(),...n.keys()]);for(const i of o){const l=r.get(i)||0,c=n.get(i)||0,f=l-c;Math.abs(f)>.001&&a.push({q:f,u:i})}return a}function On(e){if(!e?.length)return"Équilibré";const t=e.filter(n=>n.q>0),r=e.filter(n=>n.q<0);if(t.length>0&&r.length>0){const n=t.map(o=>nr(o.q.toString(),o.u)).join(" et "),a=r.map(o=>nr(Math.abs(o.q).toString(),o.u)).join(" et ");return`${n} disponibles, ${a} manquant${r.length>1?"s":""}`}else return t.length>0?t.map(n=>"+"+nr(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>nr(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function ql(e,t){if(t.searchQuery.trim()){const r=t.searchQuery.toLowerCase();if(!e.productName.toLowerCase().includes(r))return!1}return!(t.selectedStores.length>0&&(!e.storeInfo?.storeName||!t.selectedStores.includes(e.storeInfo.storeName))||t.selectedWho.length>0&&(!e.who||!e.who.some(r=>t.selectedWho.includes(r)))||t.selectedProductTypes.length>0&&(!e.productType||!t.selectedProductTypes.includes(e.productType))||t.selectedTemperatures.length>0&&!(t.selectedTemperatures.includes("frais")&&e.pFrais||t.selectedTemperatures.includes("surgele")&&e.pSurgel))}function Ca(e){return{...e,products:e.products?.map(t=>typeof t=="string"?t:t.$id)||[],mainId:e.mainId}}function jl(e){const t=Qr(_n(e.purchases??[])),r=[],{numeric:n,display:a}=bn(r,t),o=Wt(e.stockReel)??null,i=At(t),l=e.store?Wt(e.store):null,c=o?`${o.quantity} ${o.unit}`:i;return{$id:e.$id,$createdAt:e.$createdAt,$updatedAt:e.$updatedAt,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:e.isSynced,mainId:e.mainId,status:e.status,who:e.who,store:e.store,stockReel:e.stockReel,previousNames:e.previousNames,isMerged:e.isMerged,mergedFrom:e.mergedFrom,mergeDate:e.mergeDate,mergeReason:e.mergeReason,mergedInto:e.mergedInto,totalNeededOverride:e.totalNeededOverride,purchases:e.purchases,byDate:null,storeInfo:l,stockParsed:o,totalNeededArray:r,totalPurchasesArray:t,missingQuantityArray:n,stockOrTotalPurchases:c,displayTotalNeeded:"-",displayTotalPurchases:i,displayMissingQuantity:a,totalNeededOverrideParsed:Wt(e.totalNeededOverride),displayTotalOverride:(()=>{const f=Wt(e.totalNeededOverride);return f?At([f.totalOverride]):""})()}}function Fr(e,t){const r=e.purchases??t.purchases,n=Qr(_n(r??[])),a=At(n),{numeric:o,display:i}=bn(t.totalNeededArray,n),l=e.stockReel??t.stockReel,c=l?Wt(l):t.stockParsed,f=e.store??t.store,h=f?Wt(f):t.storeInfo,m=c?`${c.quantity} ${c.unit}`:a;return e.purchases===void 0&&t.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${t.purchases.length} purchases pour ${t.productName}`),{...t,$updatedAt:e.$updatedAt,productName:e.productName??t.productName,isSynced:e.isSynced??t.isSynced,mainId:e.mainId??t.mainId,status:e.status??t.status,who:e.who??t.who,store:f,stockReel:l,purchases:r,previousNames:e.previousNames??t.previousNames,isMerged:e.isMerged??t.isMerged,mergedFrom:e.mergedFrom??t.mergedFrom,mergeDate:e.mergeDate??t.mergeDate,mergeReason:e.mergeReason??t.mergeReason,mergedInto:e.mergedInto??t.mergedInto,totalNeededOverride:e.totalNeededOverride??t.totalNeededOverride,storeInfo:h,stockParsed:c,totalPurchasesArray:n,missingQuantityArray:o,stockOrTotalPurchases:m,displayTotalPurchases:a,displayMissingQuantity:i,totalNeededOverrideParsed:Wt(e.totalNeededOverride??t.totalNeededOverride),displayTotalOverride:(()=>{const p=Wt(e.totalNeededOverride??t.totalNeededOverride);return p?At([p.totalOverride]):""})()}}class Ll{#e=W(je([]));MAX_TOASTS=3;get toasts(){return s(this.#e).sort((t,r)=>r.timestamp-t.timestamp)}create(t){const r=t.id||crypto.randomUUID(),n={id:r,state:t.state,message:t.message,timestamp:Date.now(),source:t.source||"user",timeoutId:void 0,details:t.details};return this.#t(n),r}update(t,r){const n=s(this.#e).findIndex(o=>o.id===t);if(n===-1)return;const a=s(this.#e)[n];a.timeoutId&&clearTimeout(a.timeoutId),s(this.#e)[n]={...a,state:r.state||a.state,message:r.message||a.message,source:r.source||a.source},this.#o(s(this.#e)[n])}async track(t,r){const n=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const a=await t;return this.update(n,{state:"success",message:r.success||"Opération réussie"}),a}catch(a){throw this.update(n,{state:"error",message:r.error||"Erreur lors de l'opération"}),a}}dismiss(t){const r=s(this.#e).findIndex(a=>a.id===t);if(r===-1)return;const n=s(this.#e)[r];n.timeoutId&&clearTimeout(n.timeoutId),s(this.#e).splice(r,1)}dismissAll(){s(this.#e).forEach(t=>{t.timeoutId&&clearTimeout(t.timeoutId)}),b(this.#e,[],!0)}#t(t){if(t.source==="user"){const r=s(this.#e).findIndex(n=>n.source==="user");r>=0?s(this.#e)[r]=t:s(this.#e).push(t)}else{const r=s(this.#e).filter(n=>n.source!=="user");if(r.length>=2){const n=r[0];this.dismiss(n.id)}s(this.#e).push(t)}s(this.#e).length>this.MAX_TOASTS&&s(this.#e).splice(0,s(this.#e).length-this.MAX_TOASTS),this.#o(t)}#o(t){if(t.state!=="success"&&t.state!=="info")return;const r=t.source==="realtime-other"?24e3:23e3;t.timeoutId=setTimeout(()=>{this.dismiss(t.id)},r)}success(t,r){return this.create({state:"success",message:t,details:r})}error(t,r){return this.create({state:"error",message:t,details:r})}info(t,r){return this.create({state:"info",message:t,source:r?.source||"system",details:r?.details})}loading(t,r){return this.create({state:"loading",message:t,details:r})}}const mt=new Ll;function yn(e){return[...e].sort()}function Bl(e){return new Date(e)<new Date}function zl(e){if(e.length===0)return!0;const t=new Date(wn(e));return t.setHours(23,59,59,999),t<new Date}function Gs(e){return e.length===0?null:yn(e)[0]}function wn(e){return e.length===0?null:yn(e).pop()}function Ul(e){if(e.length===0)return null;const t=new Date;return t.setHours(0,0,0,0),yn(e).find(r=>new Date(r)>=t)||null}function Hl(e){if(e.length===0)return null;const t=yn(e),r=zl(e),n=Bl(t[0]),a=new Date;let o;return r?o=t[0]:n?o=a.toISOString().slice(0,19)+"Z":o=t[0],{start:o,end:t[t.length-1]}}function Qs(e){const t=Ul(e),r=wn(e);return!t||!r?null:{start:t,end:r}}function Vl(e){const t=Gs(e),r=wn(e);return!t||!r?null:{start:t,end:r}}function Wl(e,t){const r=Vl(t);return r?e.start===r.start&&e.end===r.end:!1}function Gl(e,t){const r=Qs(t);return r?e.start===r.start&&e.end===r.end:!1}function Ql(e){return new Date(e).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function Rn(e){const r=new Date(e).getHours();return r===12?"sun":r===20?"moon":r===8?"cloud":null}function Kl(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class O{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}O.equal=(e,t)=>new O("equal",e,t).toString();O.notEqual=(e,t)=>new O("notEqual",e,t).toString();O.lessThan=(e,t)=>new O("lessThan",e,t).toString();O.lessThanEqual=(e,t)=>new O("lessThanEqual",e,t).toString();O.greaterThan=(e,t)=>new O("greaterThan",e,t).toString();O.greaterThanEqual=(e,t)=>new O("greaterThanEqual",e,t).toString();O.isNull=e=>new O("isNull",e).toString();O.isNotNull=e=>new O("isNotNull",e).toString();O.between=(e,t,r)=>new O("between",e,[t,r]).toString();O.startsWith=(e,t)=>new O("startsWith",e,t).toString();O.endsWith=(e,t)=>new O("endsWith",e,t).toString();O.select=e=>new O("select",void 0,e).toString();O.search=(e,t)=>new O("search",e,t).toString();O.orderDesc=e=>new O("orderDesc",e).toString();O.orderAsc=e=>new O("orderAsc",e).toString();O.orderRandom=()=>new O("orderRandom").toString();O.cursorAfter=e=>new O("cursorAfter",void 0,e).toString();O.cursorBefore=e=>new O("cursorBefore",void 0,e).toString();O.limit=e=>new O("limit",void 0,e).toString();O.offset=e=>new O("offset",void 0,e).toString();O.contains=(e,t)=>new O("contains",e,t).toString();O.notContains=(e,t)=>new O("notContains",e,t).toString();O.notSearch=(e,t)=>new O("notSearch",e,t).toString();O.notBetween=(e,t,r)=>new O("notBetween",e,[t,r]).toString();O.notStartsWith=(e,t)=>new O("notStartsWith",e,t).toString();O.notEndsWith=(e,t)=>new O("notEndsWith",e,t).toString();O.createdBefore=e=>O.lessThan("$createdAt",e);O.createdAfter=e=>O.greaterThan("$createdAt",e);O.createdBetween=(e,t)=>O.between("$createdAt",e,t);O.updatedBefore=e=>O.lessThan("$updatedAt",e);O.updatedAfter=e=>O.greaterThan("$updatedAt",e);O.updatedBetween=(e,t)=>O.between("$updatedAt",e,t);O.or=e=>new O("or",void 0,e.map(t=>JSON.parse(t))).toString();O.and=e=>new O("and",void 0,e.map(t=>JSON.parse(t))).toString();O.distanceEqual=(e,t,r,n=!0)=>new O("distanceEqual",e,[[t,r,n]]).toString();O.distanceNotEqual=(e,t,r,n=!0)=>new O("distanceNotEqual",e,[[t,r,n]]).toString();O.distanceGreaterThan=(e,t,r,n=!0)=>new O("distanceGreaterThan",e,[[t,r,n]]).toString();O.distanceLessThan=(e,t,r,n=!0)=>new O("distanceLessThan",e,[[t,r,n]]).toString();O.intersects=(e,t)=>new O("intersects",e,[t]).toString();O.notIntersects=(e,t)=>new O("notIntersects",e,[t]).toString();O.crosses=(e,t)=>new O("crosses",e,[t]).toString();O.notCrosses=(e,t)=>new O("notCrosses",e,[t]).toString();O.overlaps=(e,t)=>new O("overlaps",e,[t]).toString();O.notOverlaps=(e,t)=>new O("notOverlaps",e,[t]).toString();O.touches=(e,t)=>new O("touches",e,[t]).toString();O.notTouches=(e,t)=>new O("notTouches",e,[t]).toString();var Ma;(function(e){e[e.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",e[e.POLICY_VIOLATION=1008]="POLICY_VIOLATION",e[e.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(Ma||(Ma={}));var Ks,Ys;class Pr{static custom(t){return t}static unique(t=7){const r=Kl(Pr,Ks,"m",Ys).call(Pr);let n="";for(let a=0;a<t;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}Ks=Pr,Ys=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Da;(function(e){e.Equal="equal",e.NotEqual="notEqual",e.GreaterThan="greaterThan",e.GreaterThanEqual="greaterThanEqual",e.LessThan="lessThan",e.LessThanEqual="lessThanEqual",e.Contains="contains",e.IsNull="isNull",e.IsNotNull="isNotNull"})(Da||(Da={}));var Na;(function(e){e.Totp="totp"})(Na||(Na={}));var Ia;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Ia||(Ia={}));var Oa;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Oa||(Oa={}));var Ra;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Ra||(Ra={}));var qa;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(qa||(qa={}));var ja;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(ja||(ja={}));var La;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(La||(La={}));var Ba;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Ba||(Ba={}));var za;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(za||(za={}));var Ua;(function(e){e.Http="http",e.Schedule="schedule",e.Event="event"})(Ua||(Ua={}));var Ha;(function(e){e.Waiting="waiting",e.Processing="processing",e.Completed="completed",e.Failed="failed",e.Scheduled="scheduled"})(Ha||(Ha={}));function Js(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function wt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Yl(e){const n=await(await window.AppwriteClient.getAccount()).get();return{...e,updatedBy:n.name}}function gr(){return localStorage.getItem("appwrite-user-name")||""}async function Jl(e,t,r=100){try{const{databases:n,config:a}=await wt(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[O.greaterThan("$updatedAt",t),O.equal("mainId",e),O.limit(r),O.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function Zs(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:o}=await wt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[O.equal("mainId",e),O.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),O.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[O.greaterThan("$updatedAt",r),O.equal("mainId",e),O.limit(n),O.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function hr(e,t,r=!0){const{databases:n,config:a}=await wt();return r&&(t.updatedBy=gr()),await n.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,e,t)}async function Nt(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=Js(n,t),o=await Yl(a),{databases:i,config:l}=await wt(),c=await i.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,e,o);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),c}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function Xs(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await hr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Fs(e,t){return hr(e,{who:t})}async function Vn(e,t){return hr(e,{stockReel:t})}async function da(e,t,r=!1){if(!e)throw new Error("ID du produit requis pour la mise à jour de l'override");const n=JSON.stringify(t),a=await hr(e,{totalNeededOverride:n},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${e}:`,t),a}async function eo(e,t=!0){if(!e)throw new Error("ID du produit requis pour la suppression de l'override");const r=await hr(e,{totalNeededOverride:null},t);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${e}`),r}async function to(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const a={};return t.stockReel!==void 0&&(a.stockReel=t.stockReel),t.who!==void 0&&(a.who=t.who),t.storeInfo!==void 0&&(a.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await hr(e,a)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await Nt(e,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function ro(e){const{databases:t,config:r}=await wt(),n={...e,createdBy:gr()},a=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Pr.unique(),n);return console.log("[Appwrite Interactions] Achat créé:",a),a}async function no(e,t){try{const{databases:r,config:n}=await wt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function ao(e){try{const{databases:t,config:r}=await wt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function so(e){if(!e?.length)return[];try{const{databases:t,config:r}=await wt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[O.equal("$id",e),O.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function oo(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(g=>g.includes("products.")),f=i.some(g=>g.includes("purchases.")),h=i.some(g=>g.includes(".create")),m=i.some(g=>g.includes(".update")),p=i.some(g=>g.includes(".delete"));if(c){const g=l;g.updatedBy&&g.updatedBy!==gr()&&(h||m?mt.info(`${g.updatedBy} a modifié le produit "${g.productName}"`,"realtime-other"):p&&mt.info(`${g.updatedBy} a supprimé un produit`,"realtime-other")),h&&t.onProductCreate?t.onProductCreate(g):m&&t.onProductUpdate?t.onProductUpdate(g):p&&t.onProductDelete&&t.onProductDelete(g.$id)}else if(f){const g=l;if(g.createdBy&&g.createdBy!==gr()){const _=g.products?.[0]?.productName||"un produit";h&&g.who!==gr()?mt.info(`${g.who} a ajouté un achat pour ${_}`,"realtime-other"):m&&g.who!==gr()?mt.info(`${g.who} a modifié un achat pour ${_}`,"realtime-other"):p&&mt.info(`${g.who} a supprimé un achat pour ${_}`,"realtime-other")}h&&t.onPurchaseCreate?t.onPurchaseCreate(g):m&&t.onPurchaseUpdate?t.onPurchaseUpdate(g):p&&t.onPurchaseDelete&&t.onPurchaseDelete(g.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function io(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await wt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function lo(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await wt(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function va(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function co(e,t,r,n){return va({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function uo(e,t,r,n="replace"){return va({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function vo(e,t,r,n={}){try{const{databases:a,config:o}=await wt(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const h of r){const m={products:[t],mainId:e,quantity:h.q,unit:h.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,Pr.unique(),m);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const o=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const Zl=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:va,batchUpdateStore:co,batchUpdateWho:uo,createMainDocument:lo,createPurchase:ro,createQuickValidationPurchases:vo,deletePurchase:ao,enrichedProductToAppwriteProduct:Js,loadMainEventData:io,loadPurchasesListByIds:so,loadUpdatedPurchases:Jl,removeTotalOverride:eo,subscribeToRealtime:oo,syncProductsWithPurchases:Zs,updateProduct:hr,updateProductBatch:to,updateProductStock:Vn,updateProductStore:Xs,updateProductWho:Fs,updatePurchase:no,updateTotalOverride:da,upsertProduct:Nt},Symbol.toStringTag,{value:"Module"}));async function Xl(e){let t;if(t=await fetch(`/evenements/${e}/metadata.json`),!t.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function Va(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function Fl(e,t){if(!e)return!0;try{return(await Xl(t)).hugoContentHash!==e}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function fo(e,t){const r=ua(e.byDate),n=Qr(_n([])),{numeric:a,display:o}=bn(r,n);return{$id:`${e.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalNeededRaw:e.totalNeededRaw,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:At(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function ec(e,t){return e.map(r=>fo(r,t))}class tc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=a=>{const o=a.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();o.onsuccess=()=>{const i=o.result,l={lastSync:null,allDates:[],hugoContentHash:null};i.forEach(c=>{c.key===this.LAST_SYNC_KEY?l.lastSync=c.value:c.key===this.ALL_DATES_KEY?l.allDates=c.value||[]:c.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=c.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),t(l)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=a.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.METADATA_STORE,"readwrite"),o=a.objectStore(this.METADATA_STORE);o.put({key:this.LAST_SYNC_KEY,value:t.lastSync}),o.put({key:this.ALL_DATES_KEY,value:t.allDates}),t.hugoContentHash!==void 0&&o.put({key:this.HUGO_HASH_KEY,value:t.hugoContentHash}),a.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},a.onerror=()=>n(a.error)})}async updateLastSync(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${t}`),r()},i.onerror=()=>n(i.error)})}async updateAllDates(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${t.length} dates`),r()},i.onerror=()=>n(i.error)})}async updateHugoContentHash(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${t}`),r()},i.onerror=()=>n(i.error)})}async updateLastHugoMenuUpdate(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:t});i.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function rc(e){const t=new tc(e);return await t.open(),t}function nc(e){return!!(e.isMerged||e.totalNeededOverride)}function ac(e,t){if(!e||e.length!==t.length)return!0;for(let r=0;r<e.length;r++){const n=e[r],a=t[r];if(n.q!==a.q||n.u!==a.u)return!0}return!1}async function sc(e,t){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},n=new Map;for(const[o,i]of e)n.set(i.productHugoUuid,o);const a=new Set;for(const o of t.ingredients){const i=o.productSemanticKey||`${t.mainGroup_id}_${o.ingredientHugoUuid}`;a.add(i);const l=n.get(o.ingredientHugoUuid),c=l?e.get(l):void 0;if(c){if(ac(c.totalNeededRaw,o.totalNeededRaw)){const h=oc(c,o);if(h&&r.overrideConflicts.push(h),c.isMerged){const m=c.displayTotalNeeded;Wa(c,o),r.mergedProductsUpdated.push({product:c,oldDisplayTotal:m,newDisplayTotal:c.displayTotalNeeded,currentOverride:c.totalNeededOverrideParsed,semanticKey:i})}else Wa(c,o);r.updated.push(i)}e.set(i,c)}else{r.added.push(o);const f=fo(o,t.mainGroup_id);e.set(f.$id,f)}}for(const[o,i]of e)a.has(o)||(r.removed.push(i),!nc(i)&&!i.purchases?.length&&!i.stockReel&&!i.who?.length&&e.delete(o));return r.overrideConflicts.length>0&&await ic(r.overrideConflicts),r.summary=cc(r),r}function oc(e,t){if(!e.totalNeededOverride||!e.totalNeededOverrideParsed)return null;const r=ua(t.byDate),n=At(r),a=e.displayTotalNeeded;return a!==n?{product:e,oldDisplayTotal:a,newDisplayTotal:n,currentOverride:e.totalNeededOverrideParsed,semanticKey:e.$id}:null}async function ic(e){for(const t of e){const r={...t.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:t.oldDisplayTotal,newTotalDisplay:t.newDisplayTotal};JSON.stringify(r);try{await da(t.product.$id,r,!1)}catch(n){console.error(`Erreur lors de la mise à jour de l'override pour ${t.product.$id}:`,n)}}}function Wa(e,t){e.byDate=t.byDate,e.nbRecipes=t.nbRecipes,e.totalAssiettes=t.totalAssiettes,e.productType=t.ingType,e.pFrais=t.pFrais||!1,e.pSurgel=t.pSurgel||!1,lc(e)}function lc(e){e.totalNeededArray=ua(e.byDate),e.displayTotalNeeded=At(e.totalNeededArray);const t=Qr(_n(e.purchases)),{numeric:r,display:n}=bn(e.totalNeededArray,t);e.totalPurchasesArray=t,e.missingQuantityArray=r,e.displayMissingQuantity=n,e.stockOrTotalPurchases=e.purchases.length>0?e.displayTotalPurchases:e.displayTotalNeeded}function cc(e){const t=[];if((e.added.length>0||e.updated.length>0||e.removed.length>0)&&t.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),e.added.length>0&&t.push(`${e.added.length} nouveau(x) ingrédient(s)`),e.updated.length>0&&t.push(` ${e.updated.length} ingrédient(s) mis à jour`),e.overrideConflicts.length>0&&t.push(`⚠️ ${e.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),e.mergedProductsUpdated.length>0&&t.push(`🔀 ${e.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),e.removed.length>0){const r=e.removed.filter(n=>n.purchases?.length||n.stockReel||n.who?.length).length;r>0?t.push(`⚠️ ${r} suppression(s) avec données conservées`):t.push(`${e.removed.length} ingrédient(s) supprimé(s)`)}return t.length>0?t.join(", "):"Aucune modification détectée"}class uc{isMobileQuery=new Sl("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return mt.toasts}get toast(){return mt}#e=W(je({isOpen:!1,conflicts:[]}));get modalOverride(){return s(this.#e)}set modalOverride(t){b(this.#e,t,!0)}}const $r=new uc,Ga=1e3;class dc{#e=new _l;#t=W(null);#o=W(null);#d=W(!1);#u=W(!1);#i=W(null);#c=W(!1);#l=W(!1);#a=W(null);#v=W(null);#s=W(je([]));#f=W(je({start:null,end:null}));get dateRange(){return s(this.#f)}set dateRange(t){b(this.#f,t,!0)}#h=J(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDateInRange(){return s(this.#h)}set hasSingleDateInRange(t){b(this.#h,t)}#m=J(()=>s(this.#s).length===1);get hasSingleDateEvent(){return s(this.#m)}set hasSingleDateEvent(t){b(this.#m,t)}#g=J(()=>{if(s(this.#s).length===0)return!0;const t=new Date(this.lastAvailableDate);return t.setHours(23,59,59,999),t<new Date});get isEventPassed(){return s(this.#g)}set isEventPassed(t){b(this.#g,t)}#n=null;#_=null;#b=W(!1);#p=null;#y=W(!1);#w=W();#x=W(je([]));get hasPendingConflicts(){return s(this.#x).length>0}get pendingConflicts(){return s(this.#x)}#r=W(je({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#r)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get currentMainId(){return s(this.#t)}get loading(){return s(this.#u)}get error(){return s(this.#i)}get lastSync(){return s(this.#a)}get syncing(){return s(this.#c)}get availableDates(){return s(this.#s)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,a=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:a}}isFullRange(){return Wl(this.dateRange,s(this.#s))}initializeDateRange(){const t=Hl(s(this.#s));t&&(this.dateRange=t),console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}selectUpcomingDates(){const t=Qs(s(this.#s));t&&(this.dateRange=t)}isUpcomingRange(){return Gl(this.dateRange,s(this.#s))}get firstAvailableDate(){return Gs(s(this.#s))}get lastAvailableDate(){return wn(s(this.#s))}get realtimeConnected(){return s(this.#l)}#E=J(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#E)}set enrichedProducts(t){b(this.#E,t)}#A=J(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const t=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[a,o]of this.#e){if(!o.byDate||!ql(o,s(this.#r)))continue;Object.keys(o.byDate).some(c=>{const f=new Date(c);return f>=t&&f<=r})&&n.set(a,o)}return n});get filteredProductsMap(){return s(this.#A)}set filteredProductsMap(t){b(this.#A,t)}#q(){console.log("[Store] ⚡ Single date mode - optimized calculation");const t=new Map,r=this.dateRange.start;for(const[n,a]of this.#e){if(!a.byDate?.[r])continue;const o=a.byDate[r],i=[r],l=new Map;o.recipes&&o.recipes.length>0&&l.set(r,o.recipes);const c=In(a,r),f=c.filter(m=>m.q>0),h=c.filter(m=>m.q<0).map(m=>({q:Math.abs(m.q),u:m.u}));t.set(n,{quantities:o.totalConsolidated||[],formattedQuantities:At(o.totalConsolidated||[]),nbRecipes:o.recipes?.length||0,totalAssiettes:o.totalAssiettes||0,stockResult:c,availableQuantities:f,missingQuantities:h,formattedAvailableQuantities:On(c),hasAvailable:f.length>0,hasMissing:h.length>0,concernedDates:i,recipesByDate:l})}return t}#k=J(()=>{if(console.log("[Store] Calcul unifié des stats par produit"),this.hasSingleDateInRange)return this.#q();const t=new Map;if(this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using precomputed data",this.dateRange);for(const[n,a]of this.#e){const o=In(a,this.dateRange.end),i=o.filter(m=>m.q>0),l=o.filter(m=>m.q<0).map(m=>({q:Math.abs(m.q),u:m.u})),c=a.byDate?Object.keys(a.byDate).sort():[],f=new Map;let h=0;if(a.byDate)for(const[m,p]of Object.entries(a.byDate))p.recipes&&p.recipes.length>0&&(f.set(m,p.recipes),h+=p.recipes.length);t.set(n,{quantities:a.totalNeededArray,formattedQuantities:At(a.totalNeededArray),nbRecipes:a.nbRecipes||0,totalAssiettes:a.totalAssiettes||0,stockResult:o,availableQuantities:i,missingQuantities:l,formattedAvailableQuantities:On(o),hasAvailable:i.length>0,hasMissing:l.length>0,concernedDates:c,recipesByDate:f})}return t}for(const[n,a]of this.filteredProductsMap){if(!a.byDate)continue;const o=Dl(a.byDate),i=Tl(o,this.dateRange.start,this.dateRange.end),l=i.length>0?At(i):"",c=Cl(a.byDate,this.dateRange.start,this.dateRange.end),f=Object.keys(a.byDate).filter(x=>{const w=new Date(x),$=new Date(this.dateRange.start),D=new Date(this.dateRange.end);return w>=$&&w<=D}).sort(),h=new Map;let m=0;f.forEach(x=>{const w=a.byDate[x]?.recipes||[];w.length>0&&(h.set(x,w),m+=w.length)});const p=In(a,this.dateRange.end),g=p.filter(x=>x.q>0),_=p.filter(x=>x.q<0).map(x=>({q:Math.abs(x.q),u:x.u}));t.set(n,{quantities:i,formattedQuantities:l,nbRecipes:m,totalAssiettes:c,stockResult:p,availableQuantities:g,missingQuantities:_,formattedAvailableQuantities:On(p),hasAvailable:g.length>0,hasMissing:_.length>0,concernedDates:f,recipesByDate:h})}return t});get productsStatsByDateRange(){return s(this.#k)}set productsStatsByDateRange(t){b(this.#k,t)}#T=J(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#T)}set stats(t){b(this.#T,t)}#C=J(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#C)}set uniqueStores(t){b(this.#C,t)}#M=J(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#M)}set uniqueWho(t){b(this.#M,t)}#D=J(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#D)}set uniqueProductTypes(t){b(this.#D,t)}#N=J(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((i,l)=>i.$id.localeCompare(l.$id));if(s(this.#r).groupBy==="none")return{"":r};const n=Object.groupBy(r,i=>s(this.#r).groupBy==="store"?i.storeInfo?.storeName||"Non défini":i.productType||"Non défini"),a=Object.keys(n).sort((i,l)=>i===""?1:l===""?-1:i.localeCompare(l)),o={};return a.forEach(i=>{o[i]=n[i]}),o});get groupedFilteredProducts(){return s(this.#N)}set groupedFilteredProducts(t){b(this.#N,t)}async initialize(t,r){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#d)&&s(this.#t)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),b(this.#t,t,!0),b(this.#o,r,!0);try{this.#n=await rc(t)}catch(n){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",n),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#i,null);try{if(await this.#j(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let a;a=await Va(r),console.log(`[ProductsStore] Hugo chargé: ${a.ingredients.length} ingrédients`),b(this.#v,a.hugoContentHash,!0),ec(a.ingredients,t).forEach(l=>{this.#e.set(l.$id,l)}),b(this.#s,[...a.allDates],!0),await io(t)||await lo(a.mainGroup_id,a.hugoContentHash,a.allDates,a.name),await this.#I()}this.initializeDateRange(),await this.#L(),b(this.#d,!0);const n=this.#J();this.#_=oo(t,n),this.#H(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#O(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(n){const a=n instanceof Error?n.message:"Erreur lors de l'initialisation";throw b(this.#i,a,!0),console.error("[ProductsStore]",a,n),n}}async#j(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();b(this.#a,r.lastSync,!0),b(this.#s,[...r.allDates],!0),b(this.#v,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#L(){if(s(this.#t)){b(this.#c,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#t)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const t=await Zs(s(this.#t),{lastSync:s(this.#a),limit:Ga});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#R(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await gl(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Zl);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#t),s(this.#a),Ga);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#$(o,a)}})}this.#z(),await this.#B(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{b(this.#c,!1)}}}async#B(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:s(this.#a),allDates:[...s(this.#s)],hugoContentHash:s(this.#v)}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#Z(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.updateLastSync(s(this.#a)),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#I(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.updateLastSync(s(this.#a)),await this.#n.updateAllDates([...s(this.#s)]),await this.#n.updateHugoContentHash(s(this.#v)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(t){console.error("[ProductsStore] Erreur persistance cache complet:",t)}}async#P(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#z(){b(this.#a,new Date().toISOString(),!0)}async#O(){if(!s(this.#o)||s(this.#u))return!1;try{const t=await Fl(s(this.#v),s(this.#o));return t&&!s(this.#b)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${s(this.#o)}, analyse approfondie en cours...`),b(this.#b,!0),await this.#U()),b(this.#w,new Date,!0),t}catch(t){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",t),!1}}async#U(){if(!s(this.#o)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const t=await Va(s(this.#o)),r=await sc(this.#e,t);if(console.log(`[ProductsStore  - hugo change] ${r.summary}`),r.overrideConflicts.length>0&&(b(this.#x,r.overrideConflicts,!0),mt.error(`${r.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>$r.modalOverride.isOpen=!0}})),r.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${r.mergedProductsUpdated.length} produits fusionnés modifiés`),r.removed.length>0){const n=r.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length);n.length>0&&console.log(`[ProductsStore] ℹ️ ${n.length} ingrédients supprimés conservés (données utilisateur)`)}b(this.#s,[...t.allDates],!0),b(this.#v,t.hugoContentHash,!0),this.initializeDateRange(),await this.#I(),(r.added.length||r.updated.length||r.removed.length)&&mt.success(r.summary),b(this.#b,!1)}catch(t){console.error("[ProductsStore] Erreur sync Hugo:",t),mt.error("Erreur lors de la mise à jour Hugo")}}#H(){this.#p&&clearInterval(this.#p),this.#p=setInterval(async()=>{await this.#O()},6e4)}#V(){this.#p&&(clearInterval(this.#p),this.#p=null)}#R(t,r){return r?Fr(t,r):jl(t)}#X(t){t.length&&(t.forEach(r=>this.#S(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#S(t){const r=this.#e.get(t.$id),n=this.#R(t,r);this.#e.set(t.$id,n)}#W(t){this.#e.delete(t)}async#G(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#Y(r,t),r}async#Q(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#$(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await so([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#$(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#K(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t));return r.forEach(n=>{this.#S(n)}),r.map(n=>n.$id)}#Y(t,r){const n=Ca(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=Fr({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#$(t,r){const n=Ca(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const h=Fr({...i,purchases:f,status:"active"},i);a.push(h)}else{const f=Fr({...i,purchases:[...l,r],status:"active"},i);a.push(f)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#J(){return{onProductCreate:t=>{if(this.#S(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#S(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#W(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#G(t);await this.#P(r)},onPurchaseUpdate:async t=>{const r=await this.#Q(t);await this.#P(r)},onPurchaseDelete:async t=>{const r=await this.#K(t);await this.#P(r)},onConnect:()=>{b(this.#l,!0)},onDisconnect:()=>{b(this.#l,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}setSearchQuery=kl(t=>{s(this.#r).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#r).selectedProductTypes.indexOf(t);r>-1?s(this.#r).selectedProductTypes.splice(r,1):s(this.#r).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#r).selectedTemperatures.indexOf(t);r>-1?s(this.#r).selectedTemperatures.splice(r,1):s(this.#r).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#r).selectedProductTypes=[],s(this.#r).selectedTemperatures=[]}setGroupBy(t){s(this.#r).groupBy=t}toggleStore(t){const r=s(this.#r).selectedStores.indexOf(t);r>-1?s(this.#r).selectedStores.splice(r,1):s(this.#r).selectedStores.push(t)}toggleWho(t){const r=s(this.#r).selectedWho.indexOf(t);r>-1?s(this.#r).selectedWho.splice(r,1):s(this.#r).selectedWho.push(t)}clearStoreFilters(){s(this.#r).selectedStores=[]}clearWhoFilters(){s(this.#r).selectedWho=[]}handleSort(t){s(this.#r).sortColumn===t?s(this.#r).sortDirection=s(this.#r).sortDirection==="asc"?"desc":"asc":(s(this.#r).sortColumn=t,s(this.#r).sortDirection="asc")}clearFilters(){b(this.#r,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#r).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#r).sortColumn],o=n[s(this.#r).sortColumn];return s(this.#r).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#r).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#r).sortDirection==="asc"?-1:1:a>o?s(this.#r).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Ml(r.byDate):!1}async forceReload(t,r){await this.clearCache(),await this.initialize(t,r)}async clearCache(){this.#e.clear(),b(this.#s,[],!0),b(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const o=this.#e.get(a);if(o){const i={...o,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#_?.(),this.#_=null,this.#V(),this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const te=new dc;function Qa(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function vc(e){const t=e.substring(0,4),r=e.slice(-10);return`${t}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const fc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var hc=Gi("<svg><!><!></svg>");function me(e,t){Z(t,!0);const r=Ae(t,"color",3,"currentColor"),n=Ae(t,"size",3,24),a=Ae(t,"strokeWidth",3,2),o=Ae(t,"absoluteStrokeWidth",3,!1),i=Ae(t,"iconNode",19,()=>[]),l=he(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=hc();Aa(c,m=>({...fc,...l,width:n(),height:n(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var f=u(c);at(f,17,i,Hr,(m,p)=>{var g=J(()=>ns(s(p),2));let _=()=>s(g)[0],x=()=>s(g)[1];var w=G(),$=N(w);Fi($,_,!0,(D,S)=>{Aa(D,()=>({...x()}))}),v(m,w)});var h=d(f);ue(h,()=>t.children??le),v(e,c),X()}function Wn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];me(e,pe({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function pc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];me(e,pe({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function mc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];me(e,pe({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function gc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];me(e,pe({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function _c(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];me(e,pe({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Vr(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];me(e,pe({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function bc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];me(e,pe({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function ho(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];me(e,pe({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function yc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];me(e,pe({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function wc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];me(e,pe({name:"circle-arrow-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Sc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];me(e,pe({name:"circle-arrow-right"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Ka(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];me(e,pe({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function xc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];me(e,pe({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Pc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];me(e,pe({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function $c(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];me(e,pe({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Ec(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];me(e,pe({name:"clipboard-pen-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Ac(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];me(e,pe({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function kc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];me(e,pe({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function fa(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];me(e,pe({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Tc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];me(e,pe({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Cc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];me(e,pe({name:"euro"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function en(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];me(e,pe({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function po(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];me(e,pe({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function mo(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];me(e,pe({name:"history"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Mc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];me(e,pe({name:"info"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Dc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];me(e,pe({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Nc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];me(e,pe({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Ic(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];me(e,pe({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function go(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];me(e,pe({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Oc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];me(e,pe({name:"lock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Rc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];me(e,pe({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function qc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];me(e,pe({name:"message-circle-more"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function jc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];me(e,pe({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function _o(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];me(e,pe({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function bo(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];me(e,pe({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Lc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];me(e,pe({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Kr(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];me(e,pe({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Bc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];me(e,pe({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function zc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];me(e,pe({name:"plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Uc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];me(e,pe({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Hc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];me(e,pe({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Vc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];me(e,pe({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Wc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];me(e,pe({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Gc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];me(e,pe({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function yo(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];me(e,pe({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Kt(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];me(e,pe({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function wo(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];me(e,pe({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Gn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];me(e,pe({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function qt(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];me(e,pe({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function So(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];me(e,pe({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Qc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];me(e,pe({name:"thermometer"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Sn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];me(e,pe({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function xo(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];me(e,pe({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Yr(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];me(e,pe({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function rn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];me(e,pe({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Kc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];me(e,pe({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Tt(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];me(e,pe({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=N(i);ue(l,()=>t.children??le),v(a,i)},$$slots:{default:!0}})),X()}function Yc(e,t){const r=e.reduce((a,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return a+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function Jc(e,t){const r=e.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const a=t.purchaseStatus||"delivered";let o=t.purchaseDeliveryDate||null;a==="delivered"&&!o&&(o=new Date().toISOString());const i=e.flatMap(c=>c.missingQuantities.map(f=>({productId:c.productId,quantity:f.q,unit:f.u,status:a,notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:o,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:t}}async function Zc(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=Yc(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,o=[];if(n<=a)o.push(t);else{let p=[],g=0;for(const _ of t){const x=(_.isSynced?0:1)+_.missingQuantities.length;g+x>a?(p.length>0&&o.push(p),p=[_],g=x):(p.push(_),g+=x)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<o.length;p++){const g=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${g.length} produits)`);try{const _=await Jc(g,r),x=await Xc(_);if(i.push(x),x.success)l+=x.productsCreated,c+=x.purchasesCreated,f+=x.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${x.error}`);break}}catch(_){const x=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,_),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:x,timestamp:new Date().toISOString()});break}}const h=i.every(p=>p.success),m=i.some(p=>!p.success);return{success:h,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:m?"Un ou plusieurs lots ont échoué":void 0}}async function Xc(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var Fc=(e,t,r)=>t(s(r).id),eu=y('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),tu=y('<span class="flex items-center gap-1"><!> </span>'),ru=y('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),nu=y('<div class="flex flex-wrap gap-2"></div> <!>',1);function Wr(e,t){Z(t,!0);let r=Ae(t,"badgeSize",3,"badge-lg"),n=Ae(t,"color",3,"primary"),a=Ae(t,"badgeStyle",3,""),o=Ae(t,"onToggleItem",3,()=>{}),i=Ae(t,"showStats",3,!1),l=Ae(t,"showIcon",3,!0),c=W(je({}));Xt(()=>{const w={};t.items.forEach($=>{w[$.id]=$.selected??!0}),b(c,w,!0)});function f(w){s(c)[w]=!s(c)[w],o()(w)}const h=J(()=>Object.values(s(c)).filter(Boolean).length),m=J(()=>Object.values(s(c)).filter(w=>!w).length);var p=nu(),g=N(p);at(g,21,()=>t.items,w=>w.id,(w,$)=>{const D=J(()=>s(c)[s($).id]);var S=eu();S.__click=[Fc,f,$];var A=u(S);{var E=B=>{var R=G(),F=N(R);or(F,()=>s($).icon,(ce,q)=>{q(ce,{class:"h-3 w-3",get title(){return s($).title}})}),v(B,R)};T(A,B=>{s($).icon&&B(E)})}var k=d(A,2),P=u(k),C=d(k,2);{var M=B=>{var R=G(),F=N(R);{var ce=I=>{Vr(I,{size:16})},q=I=>{zc(I,{size:16})};T(F,I=>{s(D)?I(ce):I(q,!1)})}v(B,R)};T(C,B=>{l()&&B(M)})}z(()=>{Te(S,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(D)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Jt(S,"title",s(D)?"Retirer de la liste":"Réajouter à la liste"),U(P,s($).label)}),v(w,S)});var _=d(g,2);{var x=w=>{var $=ru(),D=u($),S=u(D),A=u(S);Vr(A,{class:"text-success h-3 w-3"});var E=d(A),k=d(S,2);{var P=B=>{var R=tu(),F=u(R);Tt(F,{class:"text-error h-3 w-3"});var ce=d(F);z(()=>U(ce,` ${s(m)??""} retirés`)),v(B,R)};T(k,B=>{s(m)>0&&B(P)})}var C=d(D,2),M=u(C);z(()=>{U(E,` ${s(h)??""} actifs`),U(M,`Total: ${t.items.length??""} items`)}),v(w,$)};T(_,w=>{i()&&w(x)})}v(e,p),X()}Je(["click"]);function au(e,t){b(t,!s(t))}var su=y('<span class="text-base-content font-semibold"> </span>'),ou=y('<div class="text-base-content/80 flex-1"> </div>'),iu=y('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),lu=y('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),cu=y('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Po(e,t){let r=Ae(t,"icon",3,Mc),n=Ae(t,"class",3,""),a=Ae(t,"initiallyOpen",3,!1),o=r(),i=W(je(a())),l=je(t.children);var c=cu(),f=u(c);f.__click=[au,i];var h=u(f),m=u(h);o(m,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(m,2);{var g=A=>{var E=su(),k=u(E);z(()=>U(k,t.title)),v(A,E)};T(p,A=>{t.title&&A(g)})}var _=d(h,2);{var x=A=>{var E=ou(),k=u(E);z(()=>U(k,t.contentVisible)),v(A,E)};T(_,A=>{t.contentVisible&&A(x)})}var w=d(_,2);{var $=A=>{var E=iu(),k=u(E),P=u(k);{var C=R=>{var F=ft("en savoir plus");v(R,F)},M=R=>{var F=ft("masquer");v(R,F)};T(P,R=>{s(i)?R(M,!1):R(C)})}var B=d(k,2);{let R=J(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(i)?"rotate-180":""}`);ho(B,{get class(){return s(R)}})}v(A,E)};T(w,A=>{l&&A($)})}var D=d(f,2);{var S=A=>{var E=lu(),k=u(E),P=u(k);ue(P,()=>t.children??le),z(()=>Te(E,1,`overflow-hidden transition-all duration-200 ${s(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),v(A,E)};T(D,A=>{l&&A(S)})}z(()=>{Te(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Bs(c,t.style),Te(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Jt(f,"aria-expanded",s(i))}),v(e,c)}Je(["click"]);async function uu(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){b(r,!0),b(n,null),b(a,null);try{const c=`FACTURE_${Date.now()}`,f=s(o).map(g=>g.$id);te.setSyncStatus(f,!0);const h=[];for(const g of s(o))h.push({productId:g.$id,isSynced:g.isSynced,productData:g,missingQuantities:g.missingQuantityArray||[]});const m={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(o).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${h.length} produits...`),l.onClose();const p=await Zc(te.currentMainId,h,m);if(p.success)b(a,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";b(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),te.clearSyncStatus()}finally{b(r,!1)}}}function Ya(e,t,r){s(t)||r.onClose()}var du=y('<div class="alert alert-error"><!> <span> </span></div>'),vu=y('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),fu=y(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),hu=y("<option> </option>"),pu=y("<option> </option>"),mu=y('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),gu=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),_u=y("<!> ",1),bu=y(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function yu(e,t){Z(t,!0);let r=W(!1),n=W(null),a=W(null),o=je({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=W(je(new Set));Xt(()=>{b(i,new Set(t.products.map(ve=>ve.$id)),!0)});const l=J(()=>t.products.filter(ve=>s(i).has(ve.$id))),c=J(()=>s(l).length!==0),f=J(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function h(ve){const we=new Set(s(i));we.has(ve)?we.delete(ve):we.add(ve),b(i,we,!0)}const m=J(()=>t.products.map(ve=>({id:ve.$id,label:ve.productName,title:ve.productName})));var p=bu(),g=u(p),_=u(g),x=u(_),w=u(x);Kt(w,{class:"h-5 w-5"});var $=d(w),D=d(x,2);D.__click=[Ya,r,t];var S=u(D);Tt(S,{class:"h-4 w-4"});var A=d(_,2),E=u(A);{var k=ve=>{var we=du(),Me=u(we);Sn(Me,{class:"h-4 w-4"});var ze=d(Me,2),Ee=u(ze);z(()=>U(Ee,s(n))),v(ve,we)};T(E,ve=>{s(n)&&ve(k)})}var P=d(E,2);{var C=ve=>{var we=vu(),Me=u(we);Vr(Me,{class:"h-4 w-4"});var ze=d(Me,2),Ee=u(ze),Ct=d(Ee);{var Cr=ct=>{var Ut=ft("+ 1 dépense globale");v(ct,Ut)};T(Ct,ct=>{s(a).expense&&ct(Cr)})}var Mr=d(Ct,2);{var St=ct=>{var Ut=ft();z(()=>U(Ut,`(traité en ${s(a).batches??""} lots)`)),v(ct,Ut)};T(Mr,ct=>{s(a).batches&&s(a).batches>1&&ct(St)})}z(()=>U(Ee,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),v(ve,we)};T(P,ve=>{s(a)&&ve(C)})}var M=d(P,2),B=u(M);Po(B,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(ve,we)=>{var Me=fu();v(ve,Me)},$$slots:{default:!0}});var R=d(M,2),F=d(u(R),2),ce=u(F),q=u(ce),I=u(q);qt(I,{class:"h-4 w-4 opacity-50"});var j=d(I,2),Y=d(q,2);at(Y,21,()=>te.uniqueStores,Hr,(ve,we)=>{var Me=hu(),ze=u(Me),Ee={};z(()=>{U(ze,s(we)),Ee!==(Ee=s(we))&&(Me.value=(Me.__value=s(we))??"")}),v(ve,Me)});var V=d(ce,2),K=u(V),se=u(K);Yr(se,{class:"h-4 w-4 opacity-50"});var ye=d(se,2),L=d(K,2);at(L,21,()=>te.uniqueWho,Hr,(ve,we)=>{var Me=pu(),ze=u(Me),Ee={};z(()=>{U(ze,s(we)),Ee!==(Ee=s(we))&&(Me.value=(Me.__value=s(we))??"")}),v(ve,Me)});var Q=d(V,2),ee=u(Q),ie=u(ee);Cc(ie,{class:"h-4 w-4 opacity-50"});var _e=d(ie,2),re=d(F,2),de=u(re),H=u(de),ne=u(H);ne.value=ne.__value="delivered";var $e=d(ne);$e.value=$e.__value="ordered";var ke=d(H,2),Ne=d(de,2);{var ae=ve=>{var we=mu(),Me=u(we),ze=d(u(Me),2);z(()=>ze.disabled=s(r)),qe(ze,()=>o.deliveryDate,Ee=>o.deliveryDate=Ee),v(ve,we)};T(Ne,ve=>{o.status==="ordered"&&ve(ae)})}var be=d(re,2),Ce=u(be),Re=u(Ce);_o(Re,{class:"h-4 w-4 opacity-50"});var Qe=d(Re,2),Ge=d(R,2),oe=d(u(Ge),2);Wr(oe,{get items(){return s(m)},onToggleItem:h,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Se=d(Ge,2),Be=u(Se);Be.__click=[Ya,r,t];var Ke=d(Be,2);Ke.__click=[uu,c,r,n,a,l,o,t];var xe=u(Ke);{var Pe=ve=>{var we=gu();v(ve,we)},Ue=ve=>{var we=_u(),Me=N(we);Kt(Me,{class:"h-4 w-4"});var ze=d(Me);z(()=>U(ze,` Valider ${s(l).length??""} produit(s)`)),v(ve,we)};T(xe,ve=>{s(r)?ve(Pe):ve(Ue,!1)})}z(()=>{U($,` ${s(f)??""}`),D.disabled=s(r),j.disabled=s(r),ye.disabled=s(r),_e.disabled=s(r),H.disabled=s(r),Te(ke,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),Qe.disabled=s(r),Be.disabled=s(r),Ke.disabled=s(r)||!s(c)}),qe(j,()=>o.store,ve=>o.store=ve),qe(ye,()=>o.who,ve=>o.who=ve),qe(_e,()=>o.expense,ve=>o.expense=ve),rr(H,()=>o.status,ve=>o.status=ve),qe(Qe,()=>o.notes,ve=>o.notes=ve),v(e,p),X()}Je(["click"]);function Qn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:pc};case"animaux":return{displayName:"Viandes et Poissons",icon:mc};case"legumes":return{displayName:"Fruits et Légumes",icon:_c};case"sucres":return{displayName:"Sucrées",icon:gc};case"lof":return{displayName:"L.O.F",icon:Tc};case"autres":return{displayName:"Autres",icon:bc};case"epices":return{displayName:"Assaisonnements",icon:Nc};case"frais":return{displayName:"Produits Frais",icon:Vc};default:return{displayName:e,icon:Kr}}}function Ja(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function ha(e,t){let r,n;if(t==="gr."&&e>=1e3){const a=e/1e3;r=qn(a),n="kg"}else if(t==="ml"&&e>=1e3){const a=e/1e3;r=qn(a),n="l"}else r=qn(e),n=t;return`${r} ${n}`}function qn(e){return(Math.round(e*10)/10).toString().replace(/\.0$/,"")}function xn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function wu(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Kn(e){switch(e){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function Za(e){return e?xn(e):"-"}function Su(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=Kn(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:xu(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t).map(r=>({...r,quantity:ha(r.quantity,r.unit).replace(` ${r.unit}`,"")}))}function xu(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function Pu(e){let t=W(!1),r=W(null);const n=J(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),te.getEnrichedProductById(e))),a=J(()=>s(n)?.who??[]),o=J(()=>s(n)?.stockParsed??null),i=J(()=>s(n)?.purchases??[]),l=J(()=>s(n)?.byDate?Nl(s(n).byDate):[]),c=je({purchase:{quantity:null,unit:"",store:"",who:$r.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=W(!1),h=W(null);Xt(()=>{!s(n)||s(f)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=$r.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??"",c.store.comment=s(n).storeInfo?.storeComment??null,c.who=s(n)?.who?[...s(n).who]:[],b(h,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),b(f,!0))});const m=J(()=>s(h)?{store:JSON.stringify(c.store)!==JSON.stringify(s(h).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(s(h).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?s(o)?c.stock.quantity.toString()!==s(o).quantity||c.stock.unit!==s(o).unit||(c.stock.notes||"")!==(s(o).notes||""):!0:!1}const g=J(()=>!!(s(h)&&(s(m).store||s(m).stock||s(m).who)));let _=W(null);const x=J(()=>s(_)?s(i).find(q=>q.$id===s(_))??null:null);async function w(q,I){b(t,!0),b(r,null);try{const j=await q();return I&&$("success",I),j}catch(j){const Y=j instanceof Error?j.message:"Une erreur est survenue";return b(r,Y,!0),$("error",Y),console.error("[ProductModalState]",j),null}finally{b(t,!1)}}function $(q,I){const j=new CustomEvent("toast",{detail:{type:q,message:I}});window.dispatchEvent(j)}async function D(){s(n)&&await w(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!te.currentMainId)throw new Error("mainId non disponible");const{quantity:q,unit:I}=Ja(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await Nt(s(n).$id,{},V=>te.getEnrichedProductById(V)));const j=c.purchase.status||"delivered";let Y=c.purchase.deliveryDate||null;j==="delivered"&&!Y&&(Y=new Date().toISOString()),await ro({products:[s(n).$id],mainId:te.currentMainId,unit:I,quantity:q,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:j,orderDate:c.purchase.orderDate||null,deliveryDate:Y}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function S(q){b(_,q.$id,!0)}function A(){b(_,null)}async function E(q){q.$id&&await w(async()=>{const{quantity:I,unit:j}=Ja(q.quantity,q.unit),Y=q.status||null;let V=q.deliveryDate||null;Y==="delivered"&&!V&&(V=new Date().toISOString()),await no(q.$id,{unit:j,quantity:I,store:q.store||null,who:q.who||null,notes:q.notes||"",price:q.price||null,status:Y,orderDate:q.orderDate||null,deliveryDate:V}),b(_,null)},"Achat modifié avec succès")}async function k(q){const I=s(i).find(j=>j.$id===q);I&&confirm(`Supprimer cet achat (${I.quantity} ${I.unit}) ?`)&&await w(async()=>{await ao(q)},"Achat supprimé avec succès")}async function P(){s(n)&&await w(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const q={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Vn(s(n).$id,JSON.stringify(q))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await Nt(s(n).$id,{stockReel:JSON.stringify(q)},I=>te.getEnrichedProductById(I))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function C(){s(n)&&confirm("Supprimer le stock actuel ?")&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await Vn(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await Nt(s(n).$id,{stockReel:null},q=>te.getEnrichedProductById(q)))},"Stock supprimé")}async function M(q){s(n)&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, setWho normal...`),await Fs(s(n).$id,q)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await Nt(s(n).$id,{who:q},I=>te.getEnrichedProductById(I)))},"Volontaires mis à jour")}async function B(q){s(n)&&await w(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await Xs(s(n).$id,q)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await Nt(s(n).$id,{store:JSON.stringify(q)},I=>te.getEnrichedProductById(I)))},"Magasin mis à jour")}async function R(q){s(n)&&await w(async()=>{s(n).isSynced?await da(s(n).$id,q,!0):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await Nt(s(n).$id,{totalNeededOverride:JSON.stringify(q)},I=>te.getEnrichedProductById(I)))},"Override appliqué")}async function F(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await w(async()=>{await eo(s(n).$id,!0)},"Override supprimé")}async function ce(){!s(n)||!s(g)||await w(async()=>{const q={};if(s(m).stock&&c.stock.quantity&&c.stock.unit){const I={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};q.stockReel=JSON.stringify(I)}if(s(m).who&&(q.who=c.who),s(m).store){const I={storeName:c.store.name||"",storeComment:c.store.comment||void 0};q.storeInfo=I}Object.keys(q).length>0&&(await to(s(n).$id,q,I=>te.getEnrichedProductById(I)),b(h,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(_)},get editingPurchaseData(){return s(x)},forms:c,addPurchase:D,startEditPurchase:S,cancelEditPurchase:A,updateEditedPurchase:E,removePurchase:k,setStock:P,removeStock:C,setWho:M,updateStore:B,setOverride:R,removeOverride:F,saveAllChanges:ce,get hasChanges(){return s(m)},get hasAnyChanges(){return s(g)},formatQuantity:ha,formatDate:xn,formatDisplayQuantity:wu}}var $u=y('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),Eu=y('<div class="text-xs text-base-content/60 mt-1"> </div>'),Au=y('<div class="font-medium"> </div> <!>',1),ku=y('<pre class="text-xs"> </pre>'),Tu=y('<span class="text-base-content/50 italic">Non défini</span>'),Cu=y('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),Mu=y('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function Pn(e,t){Z(t,!0);let r=Ae(t,"title",3,"Événement terminé"),n=Ae(t,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),a=Ae(t,"showData",3,!0),o=Ae(t,"data",3,null),i=Ae(t,"dataLabel",3,"");var l=Mu(),c=u(l),f=u(c);mo(f,{class:"h-5 w-5 text-warning"});var h=d(f,2);Oc(h,{class:"h-4 w-4 text-warning/70"});var m=d(h,2),p=u(m),g=d(c,2),_=u(g),x=d(g,2);{var w=$=>{var D=Cu(),S=u(D);{var A=M=>{var B=$u(),R=u(B);z(()=>U(R,`${i()??""} :`)),v(M,B)};T(S,M=>{i()&&M(A)})}var E=d(S,2),k=u(E);{var P=M=>{var B=ft();z(()=>U(B,o())),v(M,B)},C=M=>{var B=G(),R=N(B);{var F=q=>{var I=ft();z(j=>U(I,j),[()=>o().join(", ")]),v(q,I)},ce=q=>{var I=G(),j=N(I);{var Y=K=>{var se=G(),ye=N(se);{var L=ee=>{var ie=Au(),_e=N(ie),re=u(_e),de=d(_e,2);{var H=ne=>{var $e=Eu(),ke=u($e);z(()=>U(ke,o().storeComment)),v(ne,$e)};T(de,ne=>{o().storeComment&&ne(H)})}z(()=>U(re,o().storeName)),v(ee,ie)},Q=ee=>{var ie=ku(),_e=u(ie);z(re=>U(_e,re),[()=>JSON.stringify(o(),null,2)]),v(ee,ie)};T(ye,ee=>{o().storeName?ee(L):ee(Q,!1)})}v(K,se)},V=K=>{var se=Tu();v(K,se)};T(j,K=>{typeof o()=="object"&&o()!==null?K(Y):K(V,!1)},!0)}v(q,I)};T(R,q=>{Array.isArray(o())&&o().length>0?q(F):q(ce,!1)},!0)}v(M,B)};T(k,M=>{typeof o()=="string"||typeof o()=="number"?M(P):M(C,!1)})}v($,D)};T(x,$=>{a()&&o()&&$(w)})}z(()=>{U(p,r()),U(_,n())}),v(e,l),X()}function Du(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Nu(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Iu(e,t){t().cancelEditPurchase()}var Ou=y('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Ru=y('<span class="loading loading-spinner loading-sm"></span>'),qu=y(`<h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>`,1),ju=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Lu=y("<th>Actions</th>"),Bu=y('<span class="loading loading-spinner loading-sm"></span>'),zu=y('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Livré</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Uu=(e,t,r)=>t(s(r)),Hu=(e,t,r)=>t(s(r).$id),Vu=y('<span class="loading loading-spinner loading-sm"></span>'),Wu=y('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),Gu=y('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),Qu=y('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),Ku=y('<div class="space-y-4"><!></div> <!>',1);function Yu(e,t){Z(t,!0);let r=Ae(t,"modalState",7),n=Ae(t,"isArchiveMode",3,!1);function a(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function o(w){return w.quantity!==null&&w.quantity!==0&&w.unit?.trim()!==""}function i(w){r().removePurchase(w)}function l(w){r().startEditPurchase(w)}var c=Ku(),f=N(c),h=u(f);{var m=w=>{Pn(w,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},p=w=>{var $=qu(),D=N($),S=u(D);Kt(S,{class:"h-5 w-5"});var A=d(D,2),E=u(A),k=d(u(E),2),P=u(k),C=u(P);Kr(C,{class:"h-4 w-4 opacity-50"});var M=d(C,2),B=d(P,2),R=u(B);R.value=R.__value="";var F=d(R);F.value=F.__value="kg";var ce=d(F);ce.value=ce.__value="gr.";var q=d(ce);q.value=q.__value="l.";var I=d(q);I.value=I.__value="ml";var j=d(I);j.value=j.__value="unité";var Y=d(j);Y.value=Y.__value="bottes";var V=d(B,2),K=u(V);qt(K,{class:"h-4 w-4 opacity-50"});var se=d(K,2),ye=d(V,2),L=u(ye);Yr(L,{class:"h-4 w-4 opacity-50"});var Q=d(L,2),ee=d(ye,2),ie=d(u(ee),2),_e=d(k,2),re=u(_e),de=u(re);_o(de,{class:"h-4 w-4 opacity-50"});var H=d(de,2),ne=d(_e,2),$e=u(ne),ke=u($e),Ne=u(ke),ae=u(Ne);ae.value=ae.__value="delivered";var be=d(ae);be.value=be.__value="ordered";var Ce=d(ke,2),Re=d($e,2);{var Qe=xe=>{var Pe=Ou(),Ue=d(u(Pe),2);qe(Ue,()=>r().forms.purchase.deliveryDate,ve=>r().forms.purchase.deliveryDate=ve),v(xe,Pe)};T(Re,xe=>{r().forms.purchase.status==="ordered"&&xe(Qe)})}var Ge=d(ne,2),oe=u(Ge);oe.__click=[Du,a,r];var Se=u(oe);{var Be=xe=>{var Pe=Ru();v(xe,Pe)},Ke=xe=>{var Pe=ft("Ajouter l'achat");v(xe,Pe)};T(Se,xe=>{r().loading?xe(Be):xe(Ke,!1)})}z(xe=>{Te(Ce,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),oe.disabled=xe},[()=>r().loading||!a()]),qe(M,()=>r().forms.purchase.quantity,xe=>r().forms.purchase.quantity=xe),rr(B,()=>r().forms.purchase.unit,xe=>r().forms.purchase.unit=xe),qe(se,()=>r().forms.purchase.store,xe=>r().forms.purchase.store=xe),qe(Q,()=>r().forms.purchase.who,xe=>r().forms.purchase.who=xe),qe(ie,()=>r().forms.purchase.price,xe=>r().forms.purchase.price=xe),qe(H,()=>r().forms.purchase.notes,xe=>r().forms.purchase.notes=xe),rr(Ne,()=>r().forms.purchase.status,xe=>r().forms.purchase.status=xe),v(w,$)};T(h,w=>{n()?w(m):w(p,!1)})}var g=d(f,2);{var _=w=>{var $=ju(),D=u($);Kt(D,{class:"mx-auto mb-2 h-12 w-12"}),v(w,$)},x=w=>{var $=Qu(),D=u($),S=u(D),A=u(S),E=d(u(A),8);{var k=C=>{var M=Lu();v(C,M)};T(E,C=>{n()||C(k)})}var P=d(S);at(P,21,()=>r().purchasesList,C=>C.$id,(C,M,B)=>{var R=G(),F=N(R);{var ce=I=>{var j=zu(),Y=u(j),V=u(Y),K=u(V),se=d(K,2),ye=u(se);ye.value=ye.__value="kg";var L=d(ye);L.value=L.__value="gr.";var Q=d(L);Q.value=Q.__value="l.";var ee=d(Q);ee.value=ee.__value="ml";var ie=d(ee);ie.value=ie.__value="unité";var _e=d(ie);_e.value=_e.__value="bottes";var re=d(Y),de=u(re),H=d(re),ne=u(H),$e=d(H),ke=u($e),Ne=u(ke);Ne.value=Ne.__value="ordered";var ae=d(Ne);ae.value=ae.__value="delivered";var be=d($e),Ce=u(be),Re=d(be),Qe=u(Re),Ge=d(Re),oe=u(Ge),Se=d(Ge),Be=u(Se),Ke=d(Se),xe=u(Ke),Pe=u(xe);Pe.__click=[Nu,r,o];var Ue=u(Pe);{var ve=Ee=>{var Ct=Bu();v(Ee,Ct)},we=Ee=>{Wc(Ee,{class:"h-3 w-3"})};T(Ue,Ee=>{r().loading?Ee(ve):Ee(we,!1)})}var Me=d(Pe,2);Me.__click=[Iu,r];var ze=u(Me);Tt(ze,{class:"h-3 w-3"}),z(Ee=>Pe.disabled=Ee,[()=>r().loading||!o(s(M))]),qe(K,()=>s(M).quantity,Ee=>s(M).quantity=Ee),rr(se,()=>s(M).unit,Ee=>s(M).unit=Ee),qe(de,()=>s(M).store,Ee=>s(M).store=Ee),qe(ne,()=>s(M).who,Ee=>s(M).who=Ee),rr(ke,()=>s(M).status,Ee=>s(M).status=Ee),qe(Ce,()=>s(M).orderDate,Ee=>s(M).orderDate=Ee),qe(Qe,()=>s(M).deliveryDate,Ee=>s(M).deliveryDate=Ee),qe(oe,()=>s(M).price,Ee=>s(M).price=Ee),qe(Be,()=>s(M).notes,Ee=>s(M).notes=Ee),v(I,j)},q=I=>{var j=Gu(),Y=u(j),V=u(Y),K=d(Y),se=u(K),ye=d(K),L=u(ye),Q=d(ye),ee=u(Q),ie=u(ee),_e=d(Q),re=u(_e),de=d(_e),H=u(de),ne=d(de),$e=u(ne),ke=d(ne),Ne=u(ke),ae=d(ke);{var be=Ce=>{var Re=Wu(),Qe=u(Re),Ge=u(Qe);Ge.__click=[Uu,l,M];var oe=u(Ge);Gn(oe,{class:"h-4 w-4"});var Se=d(Ge,2);Se.__click=[Hu,i,M];var Be=u(Se);{var Ke=Pe=>{var Ue=Vu();v(Pe,Ue)},xe=Pe=>{Tt(Pe,{class:"h-4 w-4"})};T(Be,Pe=>{r().loading?Pe(Ke):Pe(xe,!1)})}z(()=>Se.disabled=r().loading),v(Ce,Re)};T(ae,Ce=>{n()||Ce(be)})}z((Ce,Re,Qe,Ge,oe)=>{U(V,Ce),U(se,s(M).store||"-"),U(L,s(M).who||"-"),Te(ee,1,`badge badge-sm ${Re??""}`),U(ie,Qe),U(re,Ge),U(H,oe),U($e,s(M).price?`${s(M).price}€`:"-"),U(Ne,s(M).notes||"-")},[()=>ha(s(M).quantity,s(M).unit),()=>Kn(s(M).status).class,()=>Kn(s(M).status).text,()=>Za(s(M).orderDate),()=>Za(s(M).deliveryDate)]),v(I,j)};T(F,I=>{r().editingPurchaseId===s(M).$id?I(ce):I(q,!1)})}v(C,R)}),v(w,$)};T(g,w=>{r().purchasesList.length===0?w(_):w(x,!1)})}v(e,c),X()}Je(["click"]);async function Ju(e,t){await t()?.removeStock()}var Zu=y(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),Xu=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},Fu=y(`<h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`,1),ed=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),td=y('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),rd=y('<span class="loading loading-spinner loading-xs"></span>'),nd=y('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),ad=y('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),sd=y('<div class="space-y-4"><!></div> <!>',1);function od(e,t){Z(t,!0);let r=Ae(t,"modalState",7),n=Ae(t,"isArchiveMode",3,!1);var a=sd(),o=N(a),i=u(o);{var l=p=>{Pn(p,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return r().stockParsed},dataLabel:"Stock actuel"})},c=p=>{var g=Fu(),_=N(g),x=u(_);Wn(x,{class:"h-5 w-5"});var w=d(_,2),$=u(w),D=u($),S=u(D),A=d(D,2),E=u(A);Po(E,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(L,Q)=>{var ee=Zu();v(L,ee)},$$slots:{default:!0}});var k=d(A,2),P=u(k),C=u(P);Kr(C,{class:"h-4 w-4 opacity-50"});var M=d(C,2),B=d(P,2),R=u(B);R.value=R.__value="";var F=d(R);F.value=F.__value="kg";var ce=d(F);ce.value=ce.__value="gr.";var q=d(ce);q.value=q.__value="l.";var I=d(q);I.value=I.__value="ml";var j=d(I);j.value=j.__value="unité";var Y=d(j);Y.value=Y.__value="bottes";var V=d(k,2),K=u(V),se=d(V,2),ye=u(se);ye.__click=[Xu,r],z(L=>{U(S,`Déclarer le stock réel du ${L??""}`),ye.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),qe(M,()=>r().forms.stock.quantity,L=>r().forms.stock.quantity=L),rr(B,()=>r().forms.stock.unit,L=>r().forms.stock.unit=L),qe(K,()=>r().forms.stock.notes,L=>r().forms.stock.notes=L),v(p,g)};T(i,p=>{n()?p(l):p(c,!1)})}var f=d(o,2);{var h=p=>{var g=ed(),_=u(g);Wn(_,{class:"mx-auto mb-2 h-12 w-12"}),v(p,g)},m=p=>{var g=ad(),_=u(g),x=d(u(_),2),w=u(x),$=d(u(w),2),D=u($),S=d(w,2),A=d(u(S),2),E=u(A),k=d(S,2);{var P=B=>{var R=td(),F=d(u(R),2),ce=u(F);z(()=>U(ce,r().stockParsed.notes)),v(B,R)};T(k,B=>{r().stockParsed.notes&&B(P)})}var C=d(x,2);{var M=B=>{var R=nd(),F=u(R);F.__click=[Ju,r];var ce=u(F);{var q=j=>{var Y=rd();v(j,Y)},I=j=>{var Y=ft("Supprimer le stock");v(j,Y)};T(ce,j=>{r().loading?j(q):j(I,!1)})}z(()=>F.disabled=r().loading),v(B,R)};T(C,B=>{n()||B(M)})}z(B=>{U(D,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),U(E,B)},[()=>xn(r().stockParsed.dateTime)]),v(p,g)};T(f,p=>{r().stockParsed?p(m,!1):p(h)})}v(e,a),X()}Je(["click"]);function id(e,t,r){t().forms.who=[...t().whoList],b(r,"")}var ld=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},cd=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),ud=y('<div class="space-y-4"><!></div>');function dd(e,t){Z(t,!0);let r=Ae(t,"modalState",7),n=Ae(t,"isArchiveMode",3,!1),a=W("");const o=J(()=>{const _=new Set([...te.uniqueWho,...r().forms.who]);return Array.from(_).map(x=>({id:x,label:x,selected:r().forms.who.includes(x)}))});function i(_){const x=_.trim();x&&!r().forms.who.includes(x)&&(r().forms.who=[...r().forms.who,x])}function l(_){r().forms.who=r().forms.who.filter(x=>x!==_)}function c(_){r().forms.who.includes(_)?l(_):i(_)}function f(){s(a).trim()&&(i(s(a)),b(a,""))}var h=ud(),m=u(h);{var p=_=>{Pn(_,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},g=_=>{var x=cd(),w=u(x),$=d(u(w),4),D=u($),S=u(D),A=u(S);Yr(A,{class:"h-4 w-4 opacity-50"});var E=d(A,2);E.__keydown=[ld,f];var k=d(S,2);k.__click=f;var P=u(k);xo(P,{size:16});var C=d(D,2),M=d(u(C),2);Wr(M,{get items(){return s(o)},onToggleItem:c,showIcon:!0});var B=d(w,2),R=u(B);R.__click=[id,r,a],z(F=>{E.disabled=r().loading,k.disabled=F,R.disabled=r().loading},[()=>r().loading||!s(a).trim()]),qe(E,()=>s(a),F=>b(a,F)),v(_,x)};T(m,_=>{n()?_(p):_(g,!1)})}v(e,h),X()}Je(["keydown","click"]);var vd=y('<div class="mb-1 text-xs opacity-70"> </div>'),fd=(e,t,r)=>t(s(r)),hd=y("<button><!> </button>"),pd=y('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function $o(e,t){Z(t,!0);let r=Ae(t,"maxSuggestions",3,8),n=Ae(t,"title",3,"Suggestions :"),a=Ae(t,"buttonSize",3,"btn-xs"),o=Ae(t,"buttonVariant",3,"btn-soft"),i=Ae(t,"disabled",3,!1);const l=J(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=G(),h=N(f);{var m=p=>{var g=pd(),_=u(g);{var x=$=>{var D=vd(),S=u(D);z(()=>U(S,n())),v($,D)};T(_,$=>{n()&&$(x)})}var w=d(_,2);at(w,21,()=>s(l),$=>$.id,($,D)=>{var S=hd();S.__click=[fd,c,D];var A=u(S);{var E=P=>{var C=G(),M=N(C);or(M,()=>s(D).icon,(B,R)=>{R(B,{class:"h-3 w-3"})}),v(P,C)};T(A,P=>{s(D).icon&&P(E)})}var k=d(A);z(()=>{Te(S,1,`btn ${a()??""} ${o()??""}`),S.disabled=i()||s(D).disabled,Jt(S,"title",s(D).disabled?"Déjà sélectionné":s(D).label),U(k,` ${s(D).label??""}`)}),v($,S)}),v(p,g)};T(h,p=>{s(l).length>0&&p(m)})}v(e,f),X()}Je(["click"]);var md=(e,t)=>{e.key==="Enter"&&t()},gd=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},_d=y(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),bd=y('<div class="space-y-4"><!></div>');function yd(e,t){Z(t,!0);let r=Ae(t,"modalState",7),n=Ae(t,"isArchiveMode",3,!1);const a=J(()=>r()?.hasChanges?.store||!1);async function o(){if(!s(a))return;const h={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(h)}var i=bd(),l=u(i);{var c=h=>{{let m=J(()=>r().product?.storeInfo);Pn(h,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return s(m)},dataLabel:"Magasin actuel"})}},f=h=>{var m=_d(),p=u(m),g=d(u(p),4),_=u(g),x=u(_),w=u(x);qt(w,{class:"h-4 w-4 opacity-50"});var $=d(w,2);$.__keydown=[md,o];var D=d(x,2);{var S=P=>{{let C=J(()=>te.uniqueStores.map(M=>({id:M,label:M,disabled:M===r().forms.store.name})));$o(P,{get suggestions(){return s(C)},onSuggestionClick:M=>{r().forms.store.name=M.label},buttonVariant:"btn-outline"})}};T(D,P=>{te.uniqueStores.length>0&&P(S)})}var A=d(_,2),E=d(g,2),k=u(E);k.__click=[gd,r],z(()=>k.disabled=r().loading),qe($,()=>r().forms.store.name,P=>r().forms.store.name=P),qe(A,()=>r().forms.store.comment,P=>r().forms.store.comment=P),v(h,m)};T(l,h=>{n()?h(c):h(f,!1)})}v(e,i),X()}Je(["keydown","click"]);var wd=y("<fieldset><legend><!> </legend> <!></fieldset>");function qr(e,t){let r=Ae(t,"bgClass",3,"bg-base-100");var n=wd(),a=u(n),o=u(a);{var i=f=>{const h=J(()=>t.iconComponent);var m=G(),p=N(m);or(p,()=>s(h),(g,_)=>{_(g,{size:16,class:"mr-1"})}),v(f,m)};T(o,f=>{t.iconComponent&&f(i)})}var l=d(o),c=d(a,2);ue(c,()=>t.children??le),z(()=>{Te(n,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Te(a,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),U(l,` ${t.legend??""}`)}),v(e,n)}async function Sd(e,t,r,n,a,o){if(!t.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(i),b(o,!1)}async function xd(e,t,r){t.modalState&&(await t.modalState.removeOverride(),b(r,!1))}var Pd=y('<div class="stat "><div class="stat-title text-sm">Ancienne quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),$d=y('<div class="stat"><div class="stat-title text-sm">"Quantité redéfinie manuellement"</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic"></div></div>'),Ed=(e,t)=>b(t,!0),Ad=y('<div class="flex justify-end gap-2"><button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button></div>'),kd=y('<div class="text-error text-sm">Limite de caractères atteinte</div>'),Td=(e,t)=>b(t,!1),Cd=y('<span class="loading loading-spinner loading-sm"></span>'),Md=y('<span class="loading loading-spinner loading-sm"></span>'),Dd=y('<div class="card-actions mt-4 justify-end gap-2"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>'),Nd=y(`<div><div class="card-body p-4"><div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <!></div></div>`),Id=y('<div class="stats not-md:stats-vertical shadow"><!> <div class="stat"><div class="stat-title text-sm">Quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">Recettes actuelles</div></div> <!></div> <!> <!>',1),Od=y('<div class="mb-2 space-y-4"><!></div>');function Rd(e,t){Z(t,!0);const r=J(()=>t.modalState.product?.totalNeededOverrideParsed),n=J(()=>t.modalState.product?.displayTotalOverride);let a=J(()=>s(r)?.hasUnresolvedChangedSinceOverride),o=W(!1),i=W(je(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),l=W(je(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),c=W(je(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),f=J(()=>s(i)>0&&s(l).trim()!=="");var h=G(),m=N(h);{var p=g=>{var _=Od(),x=u(_);qr(x,{legend:"Besoin total",children:(w,$)=>{var D=Id(),S=N(D),A=u(S);{var E=I=>{var j=Pd(),Y=d(u(j),2),V=u(Y);z(()=>U(V,t.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay)),v(I,j)};T(A,I=>{t.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay&&s(a)&&I(E)})}var k=d(A,2),P=d(u(k),2),C=u(P),M=d(k,2);{var B=I=>{var j=$d(),Y=d(u(j),2),V=u(Y);z(()=>U(V,s(n))),v(I,j)};T(M,I=>{s(n)&&s(r)&&I(B)})}var R=d(S,2);{var F=I=>{var j=Ad(),Y=u(j);Y.__click=[Ed,o],z(()=>Y.disabled=s(o)),v(I,j)};T(R,I=>{t.isArchiveMode||I(F)})}var ce=d(R,2);{var q=I=>{var j=Nd(),Y=u(j),V=u(Y),K=u(V),se=u(K);Bc(se,{class:"h-4 w-4 opacity-50"});var ye=d(se,2),L=d(K,2),Q=u(L);Q.value=Q.__value="";var ee=d(Q);ee.value=ee.__value="kg";var ie=d(ee);ie.value=ie.__value="gr.";var _e=d(ie);_e.value=_e.__value="l.";var re=d(_e);re.value=re.__value="ml";var de=d(re);de.value=de.__value="unité";var H=d(de);H.value=H.__value="bottes";var ne=d(V,2),$e=u(ne),ke=d(u($e),2),Ne=d(ke,2);{var ae=Re=>{var Qe=kd();v(Re,Qe)};T(Ne,Re=>{s(c).length>=250&&Re(ae)})}var be=d(ne,2);{var Ce=Re=>{var Qe=Dd(),Ge=u(Qe);Ge.__click=[Td,o];var oe=d(Ge,2);oe.__click=[xd,t,o];var Se=u(oe);{var Be=we=>{var Me=Cd();v(we,Me)},Ke=we=>{var Me=ft();z(()=>U(Me,`Réinitialiser le total calculé (${t.modalState.product.displayTotalNeeded??""}).`)),v(we,Me)};T(Se,we=>{t.modalState.loading?we(Be):we(Ke,!1)})}var xe=d(oe,2);xe.__click=[Sd,t,i,l,c,o];var Pe=u(xe);{var Ue=we=>{var Me=Md();v(we,Me)},ve=we=>{var Me=ft("Appliquer");v(we,Me)};T(Pe,we=>{t.modalState.loading?we(Ue):we(ve,!1)})}z(()=>{oe.disabled=t.modalState.loading,xe.disabled=t.modalState.loading||!s(f)}),v(Re,Qe)};T(be,Re=>{t.isArchiveMode||Re(Ce)})}z(()=>Te(j,1,`card border-base-300 border ${s(o)?"bg-base-200":"bg-base-100"}`)),qe(ye,()=>s(i),Re=>b(i,Re)),rr(L,()=>s(l),Re=>b(l,Re)),qe(ke,()=>s(c),Re=>b(c,Re)),v(I,j)};T(ce,I=>{s(o)&&I(q)})}z(()=>U(C,t.modalState.product.displayTotalNeeded)),v(w,D)},$$slots:{default:!0}}),v(g,_)};T(m,g=>{t.modalState.product&&g(p)})}v(e,h),X()}Je(["click"]);var qd=y('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),jd=y('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Ld=y('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Bd=y('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function zd(e,t){Z(t,!0);const r=J(()=>t.modalState.recipes);var n=Bd(),a=N(n);Rd(a,{get modalState(){return t.modalState},get isArchiveMode(){return t.isArchiveMode}});var o=d(a,2),i=u(o),l=u(i);fa(l,{class:"h-5 w-5"});var c=d(i,2);{var f=m=>{var p=qd(),g=u(p);Kr(g,{class:"mx-auto mb-2 h-12 w-12"}),v(m,p)},h=m=>{var p=Ld(),g=u(p),_=d(u(g));at(_,21,()=>s(r),Hr,(x,w)=>{var $=jd(),D=u($),S=u(D),A=d(D),E=u(A),k=d(A),P=u(k);z(C=>{U(S,`${s(w).r??""} (${(s(w).a||"-")??""} c.)`),U(E,`${(s(w).q||s(w).qEq)??""} ${(s(w).u||s(w).uEq)??""}`),U(P,C)},[()=>xn(s(w).date)]),v(x,$)}),v(m,p)};T(c,m=>{s(r).length===0?m(f):m(h,!1)})}v(e,n),X()}function Ud(e,t,r){s(t).saveAllChanges().then(()=>{r.onClose()})}var Hd=y('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),Vd=y('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Wd=y('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Gd=(e,t)=>t("recettes"),Qd=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Kd=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Yd=(e,t)=>t("magasins"),Jd=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Zd=(e,t)=>t("volontaires"),Xd=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Fd=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),ev=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),tv=(e,t)=>t("stock"),rv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),nv=y('<span class="badge badge-sm badge-secondary ml-1">1</span>'),av=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),sv=(e,t)=>t("achats"),ov=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),iv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),lv=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),cv=y('<span class="loading loading-spinner loading-sm"></span>'),uv=y('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),dv=y('<div id="product_modal"><div class="modal-box flex fixed top-0 overflow-auto h-lvh w-lvw flex-col md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function vv(e,t){Z(t,!0);let r=Ae(t,"initialTab",3,"recettes"),n=J(()=>Pu(t.productId)),a=J(()=>te.isEventPassed),o=W(je(r()));function i($){b(o,$,!0)}var l=dv(),c=u(l),f=u(c),h=u(f);{var m=$=>{var D=Vd(),S=N(D),A=u(S),E=d(S,2);{var k=F=>{var ce=Hd(),q=u(ce);mo(q,{class:"h-4 w-4"}),v(F,ce)};T(E,F=>{s(n)&&s(a)&&F(k)})}var P=d(E,2),C=u(P),M=u(C),B=d(C,2),R=d(u(B));z(()=>{U(A,s(n).product?.productName),U(M,s(n).product?.productType),U(R,` ${s(n).product?.displayTotalNeeded??""}`)}),v($,D)},p=$=>{var D=Wd();v($,D)};T(h,$=>{s(n)&&s(n).product?$(m):$(p,!1)})}var g=d(h,2);g.__click=function(...$){t.onClose?.apply(this,$)};var _=u(g);Tt(_,{class:"h-4 w-4"});var x=d(f,2);{var w=$=>{var D=uv(),S=N(D),A=u(S);A.__click=[Gd,i];var E=u(A);fa(E,{class:"mr-1 h-5 w-5"});var k=d(E,2);{var P=oe=>{var Se=Qd(),Be=u(Se);z(()=>U(Be,s(n).product?.nbRecipes)),v(oe,Se)},C=oe=>{var Se=Kd();v(oe,Se)};T(k,oe=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?oe(P):oe(C,!1)})}var M=d(A,2);M.__click=[Yd,i];var B=u(M);qt(B,{class:"mr-1 h-5 w-5"});var R=d(B,2);{var F=oe=>{var Se=Jd();v(oe,Se)};T(R,oe=>{s(n).hasChanges?.store&&oe(F)})}var ce=d(M,2);ce.__click=[Zd,i];var q=u(ce);rn(q,{class:"mr-1 h-5 w-5"});var I=d(q,2);{var j=oe=>{var Se=Xd();v(oe,Se)},Y=oe=>{var Se=G(),Be=N(Se);{var Ke=Pe=>{var Ue=Fd(),ve=u(Ue);z(()=>U(ve,s(n).product?.who.length)),v(Pe,Ue)},xe=Pe=>{var Ue=ev();v(Pe,Ue)};T(Be,Pe=>{s(n).product?.who&&s(n).product?.who.length>0?Pe(Ke):Pe(xe,!1)},!0)}v(oe,Se)};T(I,oe=>{s(n).hasChanges?.who?oe(j):oe(Y,!1)})}var V=d(ce,2);V.__click=[tv,i];var K=u(V);Wn(K,{class:"mr-1 h-5 w-5"});var se=d(K,2);{var ye=oe=>{var Se=rv();v(oe,Se)},L=oe=>{var Se=G(),Be=N(Se);{var Ke=Pe=>{var Ue=nv();v(Pe,Ue)},xe=Pe=>{var Ue=av();v(Pe,Ue)};T(Be,Pe=>{s(n).stockParsed?Pe(Ke):Pe(xe,!1)},!0)}v(oe,Se)};T(se,oe=>{s(n).hasChanges?.stock?oe(ye):oe(L,!1)})}var Q=d(V,2);Q.__click=[sv,i];var ee=u(Q);Kt(ee,{class:"mr-1 h-5 w-5"});var ie=d(ee,2);{var _e=oe=>{var Se=ov(),Be=u(Se);z(()=>U(Be,s(n).purchasesList.length)),v(oe,Se)},re=oe=>{var Se=iv();v(oe,Se)};T(ie,oe=>{s(n).purchasesList.length>0?oe(_e):oe(re,!1)})}var de=d(S,2),H=u(de);{var ne=oe=>{var Se=lv(),Be=u(Se);Tt(Be,{class:"h-4 w-4"});var Ke=d(Be,2),xe=u(Ke);z(()=>U(xe,`erreur : ${s(n).error??""}`)),v(oe,Se)};T(H,oe=>{s(n).error&&oe(ne)})}var $e=d(H,2),ke=u($e);Ji(ke,()=>s(o),oe=>{var Se=G(),Be=N(Se);{var Ke=Pe=>{zd(Pe,{get modalState(){return s(n)},get isArchiveMode(){return s(a)}})},xe=Pe=>{var Ue=G(),ve=N(Ue);{var we=ze=>{Yu(ze,{get modalState(){return s(n)},get isArchiveMode(){return s(a)}})},Me=ze=>{var Ee=G(),Ct=N(Ee);{var Cr=St=>{od(St,{get modalState(){return s(n)},get isArchiveMode(){return s(a)}})},Mr=St=>{var ct=G(),Ut=N(ct);{var $n=ge=>{dd(ge,{get modalState(){return s(n)},get isArchiveMode(){return s(a)}})},fe=ge=>{var De=G(),He=N(De);{var Ve=Fe=>{yd(Fe,{get modalState(){return s(n)},get isArchiveMode(){return s(a)}})};T(He,Fe=>{s(o)==="magasins"&&Fe(Ve)},!0)}v(ge,De)};T(Ut,ge=>{s(o)==="volontaires"?ge($n):ge(fe,!1)},!0)}v(St,ct)};T(Ct,St=>{s(o)==="stock"?St(Cr):St(Mr,!1)},!0)}v(ze,Ee)};T(ve,ze=>{s(o)==="achats"?ze(we):ze(Me,!1)},!0)}v(Pe,Ue)};T(Be,Pe=>{s(o)==="recettes"?Pe(Ke):Pe(xe,!1)})}v(oe,Se)});var Ne=d(de,2),ae=u(Ne);ae.__click=function(...oe){t.onClose?.apply(this,oe)};var be=u(ae),Ce=d(ae,2);Ce.__click=[Ud,n,t];var Re=u(Ce);{var Qe=oe=>{var Se=cv();v(oe,Se)},Ge=oe=>{var Se=ft("Tout enregistrer");v(oe,Se)};T(Re,oe=>{s(n).loading?oe(Qe):oe(Ge,!1)})}z(()=>{Te(A,1,`tab ${s(o)==="recettes"?"tab-active":""}`),Te(M,1,`tab ${s(o)==="magasins"?"tab-active":""}`),Te(ce,1,`tab ${s(o)==="volontaires"?"tab-active":""}`),Te(V,1,`tab ${s(o)==="stock"?"tab-active":""}`),Te(Q,1,`tab ${s(o)==="achats"?"tab-active":""}`),U(be,s(n)?.hasAnyChanges?"Annuler":"Fermer"),Ce.disabled=s(n).loading||!s(n).hasAnyChanges}),v($,D)};T(x,$=>{s(n)&&$(w)})}z(()=>Te(l,1,`modal ${(t.productId&&"modal-open")??""}`)),v(e,l),X()}Je(["click"]);var fv=(e,t,r)=>t(r),hv=y("<button><span> </span> <!></button>"),pv=y('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),mv=(e,t)=>t(),gv=y('<button class="btn btn-xs btn-link text-primary/80" type="button">Dates à venir</button>'),_v=(e,t)=>t(),bv=y('<button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button>'),yv=y('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),wv=y('<div class="flex justify-end gap-2 flex-wrap"><!> <!></div>'),Sv=y('<div class=" flex flex-wrap gap-1"></div> <!>',1);function xv(e,t){Z(t,!0);let r=Ae(t,"availableDates",19,()=>[]),n=Ae(t,"currentRange",19,()=>({start:null,end:null})),a=W(je(n().start)),o=W(je(n().end));const i=J(()=>r().length>0&&s(a)===r()[0]&&s(o)===r()[r().length-1]),l=J(()=>{if(r().length===0)return!1;const S=new Date;S.setHours(0,0,0,0);const E=[...r()].sort().find(k=>new Date(k)>=S);return E&&s(a)===E&&s(o)===r()[r().length-1]}),c=J(()=>{if(r().length===0)return!0;const S=new Date(r()[r().length-1]);return S.setHours(23,59,59,999),S<new Date}),f=J(()=>{if(r().length===0)return!1;const S=new Date;return S.setHours(0,0,0,0),[...r()].some(A=>new Date(A)>=S)});Xt(()=>{b(a,n().start,!0),b(o,n().end,!0)});function h(S){s(a)===S&&s(o)===S?p():new Date(S)<new Date(s(a))?b(a,S,!0):(new Date(S)>new Date(s(o))||b(a,S,!0),b(o,S,!0)),t.onRangeChange(s(a),s(o))}function m(S){return new Date(S)>=new Date(s(a))&&new Date(S)<=new Date(s(o))?"btn-soft btn-secondary":"btn-dash btn-secondary opacity-80"}function p(){r().length!==0&&(b(a,r()[0],!0),b(o,r()[r().length-1],!0),t.onRangeChange(s(a),s(o)))}function g(){if(r().length===0)return;const S=new Date;S.setHours(0,0,0,0);const E=[...r()].sort().find(k=>new Date(k)>=S);E&&(b(a,E,!0),b(o,r()[r().length-1],!0),t.onRangeChange(s(a),s(o)))}var _=Sv(),x=N(_);at(x,22,r,S=>S,(S,A)=>{var E=hv();E.__click=[fv,h,A];var k=u(E),P=u(k),C=d(k,2);{var M=R=>{So(R,{size:16})},B=R=>{var F=G(),ce=N(F);{var q=j=>{bo(j,{size:16})},I=j=>{var Y=G(),V=N(Y);{var K=se=>{kc(se,{size:16})};T(V,se=>{Rn(A)==="cloud"&&se(K)},!0)}v(j,Y)};T(ce,j=>{Rn(A)==="moon"?j(q):j(I,!1)},!0)}v(R,F)};T(C,R=>{Rn(A)==="sun"?R(M):R(B,!1)})}z((R,F)=>{Te(E,1,`btn btn-sm ${R??""}`),U(P,F)},[()=>m(A),()=>Ql(A)]),v(S,E)});var w=d(x,2);{var $=S=>{var A=pv();v(S,A)},D=S=>{var A=wv(),E=u(A);{var k=B=>{var R=gv();R.__click=[mv,g],v(B,R)};T(E,B=>{s(f)&&!s(l)&&B(k)})}var P=d(E,2);{var C=B=>{var R=bv();R.__click=[_v,p],v(B,R)},M=B=>{var R=yv();v(B,R)};T(P,B=>{s(i)?B(M,!1):B(C)})}v(S,A)};T(w,S=>{s(c)?S($):S(D,!1)})}v(e,_),X()}Je(["click"]);var Pv=()=>te.clearFilters(),$v=e=>te.setSearchQuery(e.currentTarget.value),Ev=()=>te.setSearchQuery(""),Av=()=>te.setGroupBy("none"),kv=()=>te.setGroupBy("store"),Tv=()=>te.setGroupBy("productType"),Cv=(e,t)=>te.toggleProductType(t),Mv=y("<button><!> </button>"),Dv=()=>te.toggleTemperature("frais"),Nv=()=>te.toggleTemperature("surgele"),Iv=()=>te.clearTypeAndTemperatureFilters(),Ov=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),Rv=y('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),qv=y('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div> <!>',1),jv=(e,t)=>te.toggleStore(t),Lv=y("<button> </button>"),Bv=()=>te.clearStoreFilters(),zv=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Uv=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Hv=(e,t)=>te.toggleWho(t),Vv=y("<button> </button>"),Wv=()=>te.clearWhoFilters(),Gv=y('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),Qv=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Kv=y('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Yv(e,t){Z(t,!0);const r=J(()=>te.filters),n=J(()=>te.uniqueStores),a=J(()=>te.uniqueWho),o=J(()=>te.uniqueProductTypes);var i=Kv(),l=N(i),c=u(l),f=u(c);po(f,{class:"h-5 w-5"});var h=d(c,2);h.__click=[Pv];var m=u(h);en(m,{class:"h-4 w-4"});var p=d(l,2),g=u(p),_=d(u(g),2),x=u(_);Gc(x,{class:"h-4 w-4"});var w=d(x,2);w.__input=[$v];var $=d(w,2);$.__click=[Ev];var D=u($);Tt(D,{class:"h-4 w-4"});var S=d(g,2),A=d(u(S),2),E=u(A);E.__change=[Av];var k=d(E,2);k.__change=[kv];var P=d(k,2);P.__change=[Tv];var C=d(S,2);{var M=j=>{qr(j,{legend:"Date incluses",bgClass:"bg-base-100",children:(Y,V)=>{xv(Y,{get availableDates(){return te.availableDates},get currentRange(){return te.dateRange},onRangeChange:(K,se)=>te.setDateRange(K,se)})},$$slots:{default:!0}})};T(C,j=>{te.hasSingleDateEvent||j(M)})}var B=d(C,2);{var R=j=>{qr(j,{legend:"Types & Température",get iconComponent(){return Qc},children:(Y,V)=>{var K=qv(),se=N(K);at(se,20,()=>s(o),H=>H,(H,ne)=>{const $e=J(()=>Qn(ne));var ke=Mv();ke.__click=[Cv,ne];var Ne=u(ke);or(Ne,()=>s($e).icon,(be,Ce)=>{Ce(be,{class:"mr-1 h-5 w-5"})});var ae=d(Ne);z(be=>{Te(ke,1,`btn btn-sm ${be??""}`),U(ae,` ${s($e).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-secondary":s(r).selectedProductTypes.includes(ne)?"btn-secondary":"btn-dash btn-secondary"]),v(H,ke)});var ye=d(se,2),L=u(ye);L.__click=[Dv];var Q=u(L);yo(Q,{class:"h-5 w-5"});var ee=d(L,2);ee.__click=[Nv];var ie=u(ee);wo(ie,{class:"h-5 w-5"});var _e=d(ye,2);{var re=H=>{var ne=Ov();ne.__click=[Iv];var $e=u(ne);en($e,{size:16}),v(H,ne)},de=H=>{var ne=Rv();v(H,ne)};T(_e,H=>{s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0?H(re):H(de,!1)})}z((H,ne)=>{Te(L,1,`btn btn-sm ${H??""}`),Te(ee,1,`btn btn-sm ${ne??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),v(Y,K)},$$slots:{default:!0}})};T(B,j=>{s(o).length>0&&j(R)})}var F=d(B,2);{var ce=j=>{qr(j,{legend:"Magasins",get iconComponent(){return qt},children:(Y,V)=>{var K=Uv(),se=u(K);at(se,16,()=>s(n),Q=>Q,(Q,ee)=>{var ie=Lv();ie.__click=[jv,ee];var _e=u(ie);z(re=>{Te(ie,1,`btn btn-sm ${re??""}`),U(_e,ee)},[()=>s(r).selectedStores.length===0?"btn-soft btn-secondary":s(r).selectedStores.includes(ee)?"btn-secondary":"btn-dash btn-secondary"]),v(Q,ie)});var ye=d(se,2);{var L=Q=>{var ee=zv();ee.__click=[Bv];var ie=u(ee);en(ie,{size:16}),v(Q,ee)};T(ye,Q=>{s(r).selectedStores.length>0&&Q(L)})}v(Y,K)},$$slots:{default:!0}})};T(F,j=>{s(n).length>0&&j(ce)})}var q=d(F,2);{var I=j=>{qr(j,{legend:"Qui",get iconComponent(){return Yr},children:(Y,V)=>{var K=Qv(),se=u(K);at(se,16,()=>s(a),Q=>Q,(Q,ee)=>{var ie=Vv();ie.__click=[Hv,ee];var _e=u(ie);z(re=>{Te(ie,1,`btn btn-sm ${re??""}`),U(_e,ee)},[()=>s(r).selectedWho.length===0?" btn-soft btn-secondary":s(r).selectedWho.includes(ee)?" btn-secondary":"btn-dash btn-secondary"]),v(Q,ie)});var ye=d(se,2);{var L=Q=>{var ee=Gv();ee.__click=[Wv];var ie=u(ee);en(ie,{size:16}),v(Q,ee)};T(ye,Q=>{s(r).selectedWho.length>0&&Q(L)})}v(Y,K)},$$slots:{default:!0}})};T(q,j=>{s(a).length>0&&j(I)})}z(()=>{h.disabled=!te.hasFilters,sl(w,s(r).searchQuery),$.disabled=!s(r).searchQuery,Mn(E,s(r).groupBy==="none"),Mn(k,s(r).groupBy==="store"),Mn(P,s(r).groupBy==="productType")}),v(e,i),X()}Je(["click","input","change"]);var Jv=y('<div class="tooltip text-xs font-normal"><!></div>');function Zv(e,t){let r=Ae(t,"iconSize",3,24),n=t.icon||void 0;var a=Jv(),o=u(a);{var i=l=>{n(l,{get size(){return r()},class:`align-top
`})};T(o,l=>{t.icon&&l(i)})}z(()=>Jt(a,"data-tip",t.tip)),v(e,a)}var Xv=y('<div class="text-neutral-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Fv=(e,t,r)=>t.onOpenGroupEditModal("store",s(r).map(n=>n.$id),s(r)),ef=(e,t,r)=>t.onOpenGroupEditModal("who",s(r).map(n=>n.$id),s(r)),tf=(e,t,r)=>t.onOpenGroupPurchaseModal(s(r)),rf=y(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),nf=y('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),af=y('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 @md:min-w-48"><!></div> <div> </div> <!></div>'),sf=(e,t,r)=>t.onOpenModal(s(r).$id,"recettes"),of=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"recettes"),lf=y('<div class="text-base-content/60 text-sm font-normal"> </div>'),cf=y('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),uf=y('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),df=y('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),vf=y('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),ff=y('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),hf=y('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),pf=(e,t,r)=>t.onOpenModal(s(r).$id,"magasins"),mf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"magasins"),gf=y('<div class="ml-1"><!></div>'),_f=y('<div class="ml-1"> </div> <!>',1),bf=y('<div class="ml-1 text-sm font-medium">?</div>'),yf=(e,t,r)=>t.onOpenModal(s(r).$id,"volontaires"),wf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"volontaires"),Sf=y('<span class="text-base-content/50 text-xs"> </span>'),xf=y('<div class="ml-1 flex gap-1"> <!></div>'),Pf=y('<div class="ml-1 text-sm font-medium">?</div>'),$f=y('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),Ef=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),Af=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),kf=y('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),Tf=(e,t,r)=>t.onOpenModal(s(r).$id,"recettes"),Cf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"recettes"),Mf=y('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),Df=y("<span> </span>"),Nf=y('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),If=(e,t,r)=>{e.stopPropagation(),t.onQuickValidation(s(r))},Of=y('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M.625 0a.625.625 0 1 0 0 1.25h1.818l.205 1.94l.644 6.105a1.626 1.626 0 0 0 1.619 1.455h6.208c.746 0 1.397-.506 1.579-1.23l1.253-5a1.626 1.626 0 0 0-1.579-2.02h-8.54L3.627.56A.625.625 0 0 0 3.006 0zm3.91 9.164L3.964 3.75h8.408c.247 0 .425.23.366.466l-1.253 5a.38.38 0 0 1-.366.284H4.911a.376.376 0 0 1-.376-.336m5.72-3.134a.75.75 0 0 0-1.129-.988l-1.48 1.69l-.526-.395a.75.75 0 1 0-.9 1.2l1.083.813a.75.75 0 0 0 1.015-.106zm1.816 6.845a1.125 1.125 0 1 0-2.25 0a1.125 1.125 0 0 0 2.25 0M4.446 11.75a1.125 1.125 0 1 1 0 2.25a1.125 1.125 0 0 1 0-2.25" clip-rule="evenodd"></path></svg> <span class="text-xs"> </span> <!></button>'),Rf=y(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),qf=(e,t,r)=>t.onOpenModal(s(r).$id,"achats"),jf=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"achats"),Lf=y('<div><!> <span class="text-sm font-medium text-nowrap"> </span></div>'),Bf=y('<span class="text-base-content/50 text-xs italic">aucun</span>'),zf=y('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap gap-1.5"><!> <!></div></div></div></div></div>'),Uf=y('<!> <div class="space-y-1"></div>',1),Hf=y('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Vf=y('<div class="space-y-4 rounded-lg"></div> <!>',1);function Wf(e,t){Z(t,!0);const r={Package:Kr,MessageCircleQuestionMark:jc,ShoppingCart:Kt,Clock:Ac,CircleCheck:xc,CircleX:Pc,ClipboardCheck:$c,PackageCheck:Lc},n={quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedAvailableQuantities:"Équilibré",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map},a=J(()=>te.groupedFilteredProducts),o=J(()=>te.filters),i=J(()=>te.dateRange.start),l=J(()=>te.dateRange.end);var c=Vf(),f=N(c);at(f,21,()=>Object.entries(s(a)),([p,g])=>p,(p,g)=>{var _=J(()=>ns(s(g),2));let x=()=>s(_)[0];const $=J(()=>s(_)[1]);var D=Uf(),S=N(D);{var A=k=>{const P=J(()=>Qn(x()));var C=af(),M=u(C),B=u(M);{var R=Y=>{var V=ft();z(()=>U(V,`🏪 ${x()??""} (${s($).length??""})`)),v(Y,V)},F=Y=>{var V=G(),K=N(V);{var se=L=>{var Q=Xv(),ee=u(Q);or(ee,()=>s(P).icon,(H,ne)=>{ne(H,{class:"h-4 w-4"})});var ie=d(ee,2),_e=u(ie),re=d(ie,2),de=u(re);z(()=>{U(_e,s(P).displayName),U(de,`(${s($).length??""})`)}),v(L,Q)},ye=L=>{var Q=ft();z(()=>U(Q,`📦 ${x()??""} (${s($).length??""})`)),v(L,Q)};T(K,L=>{s(o).groupBy==="productType"?L(se):L(ye,!1)},!0)}v(Y,V)};T(B,Y=>{s(o).groupBy==="store"?Y(R):Y(F,!1)})}var ce=d(M,2),q=u(ce),I=d(ce,2);{var j=Y=>{var V=nf(),K=u(V);K.__click=[Fv,t,$];var se=u(K);qt(se,{size:16});var ye=d(se,4);Gn(ye,{size:16});var L=d(K,2);L.__click=[ef,t,$];var Q=u(L);rn(Q,{size:16});var ee=d(Q,4);Gn(ee,{size:16});var ie=d(L,2);{var _e=re=>{var de=rf();de.__click=[tf,t,$];var H=u(de);Kt(H,{size:16});var ne=d(H,4);Ka(ne,{size:16}),v(re,de)};T(ie,re=>{s($).some(de=>de.displayMissingQuantity!=="✅ Complet")&&re(_e)})}v(Y,V)};T(I,Y=>{te.isEventPassed||Y(j)})}z(()=>U(q,`du ${s(i)??""} au ${s(l)??""}`)),v(k,C)};T(S,k=>{x()!==""&&k(A)})}var E=d(S,2);at(E,21,()=>s($),k=>k.$id,(k,P)=>{const C=J(()=>te.productsStatsByDateRange.get(s(P).$id)||n),M=J(()=>Qn(s(P).productType)),B=J(()=>Su(s(P).purchases||[])),R=J(()=>s(P).totalNeededOverrideParsed);var F=zf(),ce=u(F),q=u(ce),I=u(q);I.__click=[sf,t,P],I.__keydown=[of,t,P];var j=u(I),Y=u(j);or(Y,()=>s(M).icon,(fe,ge)=>{ge(fe,{class:"text-base-content/80 h-4 w-4"})});var V=d(Y),K=d(V);{var se=fe=>{var ge=lf(),De=u(ge);z(()=>U(De,`Ancien: ${s(P).previousNames[0]??""}`)),v(fe,ge)};T(K,fe=>{s(P).previousNames&&s(P).previousNames.length>0&&fe(se)})}var ye=d(j,2),L=u(ye);{var Q=fe=>{var ge=cf(),De=u(ge);yo(De,{class:"text-success h-4 w-4"}),v(fe,ge)};T(L,fe=>{s(P).pFrais&&fe(Q)})}var ee=d(L,2);{var ie=fe=>{var ge=uf(),De=u(ge);wo(De,{class:"text-info h-4 w-4"}),v(fe,ge)};T(ee,fe=>{s(P).pSurgel&&fe(ie)})}var _e=d(ye,2);{var re=fe=>{var ge=df(),De=u(ge);go(De,{class:"h-4 w-4 animate-spin"}),v(fe,ge)};T(_e,fe=>{s(P).status==="isSyncing"&&fe(re)})}var de=d(_e,2);{var H=fe=>{var ge=hf(),De=u(ge);at(De,20,()=>s(C).concernedDates,He=>He,(He,Ve)=>{const Fe=J(()=>s(C).recipesByDate.get(Ve)||[]);var Ze=G(),We=N(Ze);{var ht=xt=>{var Ht=vf(),et=u(Ht),ut=u(et);z((Mt,Dr)=>{Jt(Ht,"data-tip",Mt),U(ut,Dr)},[()=>s(Fe).map(Mt=>Mt.r).join(", "),()=>new Date(Ve).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),v(xt,Ht)},Ft=xt=>{var Ht=ff(),et=u(Ht);z(ut=>U(et,ut),[()=>new Date(Ve).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),v(xt,Ht)};T(We,xt=>{s(Fe).length>0?xt(ht):xt(Ft,!1)})}v(He,Ze)}),v(fe,ge)};T(de,fe=>{s(C).concernedDates.length>0&&fe(H)})}var ne=d(I,2);{var $e=fe=>{var ge=$f(),De=u(ge);De.__click=[pf,t,P],De.__keydown=[mf,t,P];var He=u(De);qt(He,{size:18});var Ve=d(He,2);{var Fe=et=>{var ut=_f(),Mt=N(ut),Dr=u(Mt),En=d(Mt,2);{var Dt=pr=>{var Jr=gf(),Ao=u(Jr);Zv(Ao,{get tip(){return s(P).storeInfo.storeComment},get icon(){return qc},iconSize:14}),v(pr,Jr)};T(En,pr=>{s(P).storeInfo?.storeComment&&pr(Dt)})}z(()=>U(Dr,s(P).storeInfo.storeName)),v(et,ut)},Ze=et=>{var ut=bf();v(et,ut)};T(Ve,et=>{s(P).storeInfo?.storeName?et(Fe):et(Ze,!1)})}var We=d(De,2);We.__click=[yf,t,P],We.__keydown=[wf,t,P];var ht=u(We);rn(ht,{size:18});var Ft=d(ht,2);{var xt=et=>{var ut=xf(),Mt=u(ut),Dr=d(Mt);{var En=Dt=>{var pr=Sf(),Jr=u(pr);z(()=>U(Jr,`+${s(P).who.length-2}`)),v(Dt,pr)};T(Dr,Dt=>{s(P).who.length>2&&Dt(En)})}z(Dt=>U(Mt,`${Dt??""} `),[()=>s(P).who.slice(0,2).map(Dt=>Dt.slice(0,3)).join(" | ")]),v(et,ut)},Ht=et=>{var ut=Pf();v(et,ut)};T(Ft,et=>{s(P).who&&s(P).who.length>0?et(xt):et(Ht,!1)})}z(()=>{Te(De,1,`btn btn-soft btn-sm group relative ${s(P).storeInfo?.storeName?"btn-success":""}`),Te(We,1,`btn btn-sm btn-soft group relative ${s(P).who&&s(P).who?.length>0?"btn-success":""}`)}),v(fe,ge)},ke=fe=>{var ge=kf(),De=u(ge);{var He=Ze=>{var We=Ef(),ht=u(We);qt(ht,{size:16});var Ft=d(ht);z(()=>U(Ft,` ${s(P).storeInfo.storeName??""}`)),v(Ze,We)};T(De,Ze=>{s(P).storeInfo?.storeName&&Ze(He)})}var Ve=d(De,2);{var Fe=Ze=>{var We=Af(),ht=u(We);rn(ht,{size:16});var Ft=d(ht);z(xt=>U(Ft,` ${xt??""}`),[()=>s(P).who.join(", ")]),v(Ze,We)};T(Ve,Ze=>{s(P).who&&s(P).who.length>0&&Ze(Fe)})}v(fe,ge)};T(ne,fe=>{te.isEventPassed?fe(ke,!1):fe($e)})}var Ne=d(q,2),ae=u(Ne);ae.__click=[Tf,t,P],ae.__keydown=[Cf,t,P];var be=u(ae),Ce=u(be),Re=u(Ce);Ic(Re,{class:"h-4 w-4"});var Qe=d(Ce,2),Ge=u(Qe),oe=u(Ge);{var Se=fe=>{var ge=Mf(),De=u(ge),He=u(De),Ve=d(De,2);Ec(Ve,{class:"h-4 w-4"});var Fe=d(Ve);z(()=>{U(He,s(C).formattedQuantities),U(Fe,` ${s(R).totalOverride.q??""}
                          ${s(R).totalOverride.u??""}`)}),v(fe,ge)},Be=fe=>{var ge=Df(),De=u(ge);z(()=>U(De,s(C).formattedQuantities)),v(fe,ge)};T(oe,fe=>{s(R)?.totalOverride?fe(Se):fe(Be,!1)})}var Ke=d(Ge,2);{var xe=fe=>{var ge=Nf(),De=u(ge),He=u(De),Ve=d(He);fa(Ve,{class:"h-3 w-3"});var Fe=d(De,2),Ze=u(Fe),We=d(Ze);Kc(We,{class:"h-3 w-3"}),z(()=>{U(He,`${s(C).nbRecipes??""} `),U(Ze,`${s(C).totalAssiettes??""} `)}),v(fe,ge)};T(Ke,fe=>{(s(C).nbRecipes||s(C).totalAssiettes)&&fe(xe)})}var Pe=d(be,2);{var Ue=fe=>{var ge=Of();ge.__click=[If,t,P];var De=d(u(ge),2),He=u(De),Ve=d(De,2);{var Fe=We=>{wc(We,{size:18})},Ze=We=>{Sc(We,{size:18})};T(Ve,We=>{$r.isMobile?We(Fe):We(Ze,!1)})}z(()=>{Jt(ge,"title",`Acheter le manquant (${s(C).formattedAvailableQuantities??""})`),U(He,s(C).formattedAvailableQuantities)}),v(fe,ge)},ve=fe=>{var ge=G(),De=N(ge);{var He=Ve=>{Ka(Ve,{size:24,class:"text-success ms-auto"})};T(De,Ve=>{te.isEventPassed||Ve(He)},!0)}v(fe,ge)};T(Pe,fe=>{!te.isEventPassed&&s(C).hasMissing?fe(Ue):fe(ve,!1)})}var we=d(Pe,2);{var Me=fe=>{var ge=Rf(),De=u(ge);yc(De,{size:18}),v(fe,ge)};T(we,fe=>{!te.isEventPassed&&s(R)?.hasUnresolvedChangedSinceOverride&&fe(Me)})}var ze=d(ae,2);ze.__click=[qf,t,P],ze.__keydown=[jf,t,P];var Ee=u(ze),Ct=u(Ee),Cr=u(Ct);Kt(Cr,{class:"h-4 w-4"});var Mr=d(Ct,2),St=d(Ee,2),ct=u(St);at(ct,17,()=>s(B),Hr,(fe,ge)=>{const De=J(()=>r[s(ge).icon]);var He=Lf(),Ve=u(He);or(Ve,()=>s(De),(We,ht)=>{ht(We,{class:"h-4 w-4"})});var Fe=d(Ve,2),Ze=u(Fe);z(()=>{Te(He,1,`badge badge-outline flex items-center gap-1 ${s(ge).badgeClass??""}`),U(Ze,`${s(ge).quantity??""}
                        ${s(ge).unit??""}`)}),v(fe,He)});var Ut=d(ct,2);{var $n=fe=>{var ge=Bf();v(fe,ge)};T(Ut,fe=>{s(B).length===0&&fe($n)})}z(()=>{Te(F,1,`card bg-base-100 border-base-300 ${s(P).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),U(V,`${s(P).productName??""} `),Te(Ge,1,`text-base font-bold ${s(C).hasMissing&&!te.isEventPassed?"text-error":"text-success"}`),Te(Mr,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${te.isEventPassed?"":"group-hover:opacity-100"} sm:opacity-0`)}),v(k,F)}),v(p,D)});var h=d(f,2);{var m=p=>{var g=Hf();v(p,g)};T(h,p=>{Object.values(s(a)).flat().length===0&&p(m)})}v(e,c),X()}Je(["click","keydown"]);async function Gf(e,t,r,n,a,o,i,l,c){if(!(!s(t)||s(r))){b(n,null),b(a,null);try{const f=s(o).map(g=>g.id),h=i.products.filter(g=>f.includes(g.$id));te.setSyncStatus(f,!0),i.onClose();const m={storeName:s(l).trim(),storeComment:s(c).trim()},p=await co(f,h,m);if(b(a,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(f){const h=f instanceof Error?f.message:"Erreur inconnue";b(n,h,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),te.clearSyncStatus()}finally{b(r,!1)}}}function Xa(e,t,r){s(t)||r.onClose()}var Qf=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Kf=(e,t)=>b(t,"empty"),Yf=(e,t)=>b(t,"all"),Jf=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Zf=y("<!> ",1),Xf=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Ff(e,t){Z(t,!0);let r=W(!1),n=W(null),a=W(null),o=W(je(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=W(je(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=W(je({})),c=W("empty");Xt(()=>{const re={};t.products.forEach(de=>{t.productIds.includes(de.$id)&&(s(c)==="empty"?re[de.$id]=!de.storeInfo||!de.storeInfo.storeName:re[de.$id]=!0)}),b(l,re,!0)});const f=J(()=>t.products.map(re=>({id:re.$id,label:re.productName,title:re.productName,selected:s(l)[re.$id]}))),h=J(()=>s(f).filter(re=>re.selected)),m=J(()=>`Attribuer un magasin (${s(h).length} produits sélectionnés)`),p=J(()=>s(h).length===0?!1:s(o).trim().length>0);function g(re){s(l)[re]=!s(l)[re]}var _=Xf(),x=u(_),w=u(x),$=u(w),D=u($),S=d($,2);S.__click=[Xa,r,t];var A=u(S);Tt(A,{class:"h-4 w-4"});var E=d(w,2),k=u(E);{var P=re=>{var de=Qf(),H=u(de);Sn(H,{class:"h-4 w-4"});var ne=d(H,2),$e=u(ne);z(()=>U($e,s(n))),v(re,de)};T(k,re=>{s(n)&&re(P)})}var C=d(k,2),M=u(C),B=u(M),R=u(B);qt(R,{class:"h-4 w-4 opacity-50"});var F=d(R,2),ce=d(B,2);{let re=J(()=>te.uniqueStores.map(de=>({id:de,label:de,disabled:de===s(o)})));$o(ce,{get suggestions(){return s(re)},onSuggestionClick:de=>{b(o,de.label,!0)},title:"Suggestions de magasins :"})}var q=d(M,2),I=u(q),j=d(C,2),Y=d(u(j),2),V=u(Y);V.__click=[Kf,c];var K=d(V,2);K.__click=[Yf,c];var se=d(Y,2);Wr(se,{get items(){return s(f)},onToggleItem:g,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var ye=d(E,2),L=u(ye);L.__click=[Xa,r,t];var Q=d(L,2);Q.__click=[Gf,p,r,n,a,h,t,o,i];var ee=u(Q);{var ie=re=>{var de=Jf();v(re,de)},_e=re=>{var de=Zf(),H=N(de);Vr(H,{class:"h-4 w-4"});var ne=d(H);z(()=>U(ne,` Appliquer à ${s(h).length??""} produit(s)`)),v(re,de)};T(ee,re=>{s(r)?re(ie):re(_e,!1)})}z(()=>{U(D,s(m)),S.disabled=s(r),F.disabled=s(r),I.disabled=s(r),Te(V,1,`tab ${s(c)==="empty"?"tab-active":""}`),Te(K,1,`tab ${s(c)==="all"?"tab-active":""}`),L.disabled=s(r),Q.disabled=s(r)||!s(p)}),qe(F,()=>s(o),re=>b(o,re)),qe(I,()=>s(i),re=>b(i,re)),v(e,_),X()}Je(["click"]);async function eh(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){b(n,null),b(a,null);try{const c=s(o).map(m=>m.id),f=i.products.filter(m=>c.includes(m.$id));te.setSyncStatus(c,!0),i.onClose();const h=await uo(c,f,s(l),"replace");if(b(a,h,!0),h.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${h.updatedCount} produits modifiés`),i.onSuccess?.(h);else throw new Error(h.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";b(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),te.clearSyncStatus()}finally{b(r,!1)}}}function Fa(e,t,r){s(t)||r.onClose()}var th=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),rh=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},nh=(e,t)=>b(t,"empty"),ah=(e,t)=>b(t,"all"),sh=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),oh=y("<!> ",1),ih=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function lh(e,t){Z(t,!0);let r=W(!1),n=W(null),a=W(null),o=W(je([])),i=W(""),l=W("empty"),c=W(je({}));Xt(()=>{const ae={};t.products.forEach(be=>{t.productIds.includes(be.$id)&&(s(l)==="empty"?ae[be.$id]=!be.who||be.who.length===0:ae[be.$id]=!0)}),b(c,ae,!0)});const f=J(()=>t.products.map(ae=>({id:ae.$id,label:ae.productName,title:ae.productName,selected:s(c)[ae.$id]}))),h=J(()=>s(f).filter(ae=>ae.selected)),m=J(()=>{const ae=new Set([...te.uniqueWho,...s(o)]);return Array.from(ae).map(be=>({id:be,label:be,selected:s(o).includes(be)}))}),p=J(()=>`Gérer les volontaires (${s(h).length} produits sélectionnés)`),g=J(()=>s(h).length===0?!1:s(o).length>0);function _(ae){const be=ae.trim();be&&!s(o).includes(be)&&b(o,[...s(o),be],!0)}function x(ae){b(o,s(o).filter(be=>be!==ae),!0)}function w(ae){s(o).includes(ae)?x(ae):_(ae)}function $(){s(i).trim()&&(_(s(i)),b(i,""))}function D(ae){s(c)[ae]=!s(c)[ae]}var S=ih(),A=u(S),E=u(A),k=u(E),P=u(k),C=d(k,2);C.__click=[Fa,r,t];var M=u(C);Tt(M,{class:"h-4 w-4"});var B=d(E,2),R=u(B);{var F=ae=>{var be=th(),Ce=u(be);Sn(Ce,{class:"h-4 w-4"});var Re=d(Ce,2),Qe=u(Re);z(()=>U(Qe,s(n))),v(ae,be)};T(R,ae=>{s(n)&&ae(F)})}var ce=d(R,2),q=u(ce),I=u(q),j=u(I),Y=u(j);Yr(Y,{class:"h-4 w-4 opacity-50"});var V=d(Y,2);V.__keydown=[rh,$];var K=d(j,2);K.__click=$;var se=u(K);xo(se,{size:16});var ye=d(I,2),L=d(u(ye),2);Wr(L,{get items(){return s(m)},onToggleItem:w,showIcon:!0});var Q=d(ce,2),ee=d(u(Q),2),ie=u(ee);ie.__click=[nh,l];var _e=d(ie,2);_e.__click=[ah,l];var re=d(ee,2);Wr(re,{get items(){return s(f)},onToggleItem:D,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var de=d(B,2),H=u(de);H.__click=[Fa,r,t];var ne=d(H,2);ne.__click=[eh,g,r,n,a,h,t,o];var $e=u(ne);{var ke=ae=>{var be=sh();v(ae,be)},Ne=ae=>{var be=oh(),Ce=N(be);Vr(Ce,{class:"h-4 w-4"});var Re=d(Ce);z(()=>U(Re,` Appliquer à ${s(h).length??""} produit(s)`)),v(ae,be)};T($e,ae=>{s(r)?ae(ke):ae(Ne,!1)})}z(ae=>{U(P,s(p)),C.disabled=s(r),V.disabled=s(r),K.disabled=ae,Te(ie,1,`tab ${s(l)==="empty"?"tab-active":""}`),Te(_e,1,`tab ${s(l)==="all"?"tab-active":""}`),H.disabled=s(r),ne.disabled=s(r)||!s(g)},[()=>s(r)||!s(i).trim()]),qe(V,()=>s(i),ae=>b(i,ae)),v(e,S),X()}Je(["click","keydown"]);var ch=y("<div><!></div>"),uh=y('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function dh(e,t){Z(t,!0);let r=W(!1),n=Ae(t,"width",3,"80"),a=Ae(t,"bgClass",3,"bg-base-300");const o=J(()=>"w-"+n());var i=G(),l=N(i);{var c=h=>{var m=ch(),p=u(m);ue(p,()=>t.children??le),z(()=>Te(m,1,`${a()??""} ${(s(o)?s(o):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),v(h,m)},f=h=>{var m=uh(),p=N(m),g=u(p),_=d(g,2),x=d(u(_),2),w=u(x);ue(w,()=>t.children??le);var $=d(p,2),D=u($),S=u(D);po(S,{class:"h-6 w-6"}),ll(g,()=>s(r),A=>b(r,A)),v(h,m)};T(l,h=>{$r.isMobile?h(f,!1):h(c)})}v(e,i),X()}function vh(){}var fh=y('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function hh(e,t){Z(t,!0);const r="100",n=J(()=>te.stats);let a=W(null),o=W("recettes"),i=W(!1),l=W(!1),c=W(je([])),f=W(je([])),h=W(!1),m=W(je([]));function p(L,Q="recettes"){b(o,Q,!0),b(a,L,!0)}function g(){b(a,null)}function _(L,Q,ee){b(c,Q,!0),b(f,ee,!0),b(L==="who"?i:l,!0)}function x(L){(!L||L==="who")&&b(i,!1),(!L||L==="store")&&b(l,!1),b(c,[],!0),b(f,[],!0)}function w(L){console.log(`[ProductsTable] Modification groupée réussie: ${L.updatedCount} produits`)}function $(L){const Q=L.filter(ee=>ee.displayMissingQuantity!=="✅ Complet"&&ee.missingQuantityArray&&ee.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${L.length} produits reçus → ${Q.length} produits avec quantités manquantes`),b(m,Q,!0),b(h,!0)}function D(){b(h,!1),b(m,[],!0)}function S(){console.log("[ProductsTable] Achat groupé créé avec succès"),D()}async function A(L){try{if(!te.currentMainId)throw new Error("mainId non disponible");const Q=L.missingQuantityArray||[];if(Q.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let ee=L.$id;L.isSynced||(console.log(`[ProductsTable] Produit ${L.$id} local, création pour validation rapide...`),ee=(await Nt(L.$id,{},_e=>te.getEnrichedProductById(_e))).$id,console.log(`[ProductsTable] Produit sync créé: ${ee}`)),await vo(te.currentMainId,ee,Q,{store:L.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${L.productName}`)}catch(Q){console.error("[ProductsTable] Erreur validation rapide:",Q),alert("Erreur lors de la validation rapide: "+Q.message)}}var E=fh(),k=N(E),P=u(k),C=u(P),M=u(C);Dc(M,{class:"mr-1 h-4 w-4"});var B=d(M),R=d(C,2);R.__click=[vh];var F=u(R);Uc(F,{class:"mr-1 h-4 w-4"});var ce=d(P,2);dh(ce,{width:r,children:(L,Q)=>{Yv(L,{})},$$slots:{default:!0}});var q=d(ce,2);Wf(q,{onOpenModal:p,onOpenGroupEditModal:_,onOpenGroupPurchaseModal:$,onQuickValidation:A});var I=d(k,2);vv(I,{get productId(){return s(a)},get initialTab(){return s(o)},onClose:g});var j=d(I,2);{var Y=L=>{lh(L,{get productIds(){return s(c)},get products(){return s(f)},onClose:()=>x("who"),onSuccess:w})};T(j,L=>{s(i)&&L(Y)})}var V=d(j,2);{var K=L=>{Ff(L,{get productIds(){return s(c)},get products(){return s(f)},onClose:()=>x("store"),onSuccess:w})};T(V,L=>{s(l)&&L(K)})}var se=d(V,2);{var ye=L=>{yu(L,{get products(){return s(m)},onClose:D,onSuccess:S})};T(se,L=>{s(h)&&L(ye)})}z(()=>{Te(k,1,`space-y-6 ${$r.isMobile?"":"ml-100"}`),U(B,` ${s(n).total??""}`)}),v(e,E),X()}Je(["click"]);ci();var ph=y('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function mh(e){var t=ph();v(e,t)}var gh=y('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function _h(e,t){var r=gh(),n=d(u(r),2),a=d(u(n),2),o=u(a);z(()=>U(o,t.message)),v(e,r)}var bh=y('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function yh(e,t){var r=bh(),n=u(r),a=u(n);Sn(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(u(o),2),l=u(i);z(()=>U(l,t.message||"Erreur inconnue")),v(e,r)}function wh(e){e.stopPropagation()}var Sh=(e,t)=>e.key==="Escape"&&t(),xh=y('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),Ph=y('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),$h=(e,t)=>b(t,!1),Eh=y('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),Ah=(e,t)=>b(t,!0),kh=(e,t)=>b(t,!1),Th=y(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),Ch=(e,t)=>b(t,!0),Mh=y('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),Dh=y('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function Nh(e,t){Z(t,!0);let r=Ae(t,"onClose",3,()=>{}),n=Ae(t,"onAuthSuccess",3,()=>{}),a=W(!0),o=W(!1),i=W(""),l=W(""),c=W(""),f=W(""),h=W(""),m=W(""),p=W(""),g=W(""),_=W(!1);function x(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function w(V){if(V.preventDefault(),!s(c)||!s(f)){b(i,"Veuillez remplir tous les champs");return}b(o,!0),b(i,"");try{await(await x().getAccount()).createEmailPasswordSession(s(c),s(f)),b(l,"Connexion réussie !"),setTimeout(()=>{n()()},1e3)}catch(K){console.error("Erreur de connexion:",K),b(i,K.message||"Erreur lors de la connexion",!0)}finally{b(o,!1)}}async function $(V){if(V.preventDefault(),!s(h)||!s(m)||!s(p)){b(i,"Veuillez remplir tous les champs");return}b(o,!0),b(i,"");try{const se=await x().getAccount();await se.create("unique()",s(m),s(p),s(h)),await se.createEmailPasswordSession(s(m),s(p)),b(l,"Compte créé et connecté !"),setTimeout(()=>{n()()},1e3)}catch(K){console.error("Erreur d'inscription:",K),b(i,K.message||"Erreur lors de la création du compte",!0)}finally{b(o,!1)}}async function D(V){if(V.preventDefault(),!s(g)){b(i,"Veuillez entrer votre email");return}b(o,!0),b(i,"");try{await(await x().getAccount()).createRecovery(s(g),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(_,!1),b(g,"")},2e3)}catch(K){console.error("Erreur mot de passe oublié:",K),b(i,K.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(o,!1)}}function S(){s(o)||r()()}Xt(()=>{(s(a)||s(_))&&(b(i,""),b(l,""))});var A=Dh();A.__click=S,A.__keydown=[Sh,S];var E=u(A);E.__click=[wh];var k=u(E),P=u(k),C=u(P),M=d(P,2);M.__click=S;var B=d(k,2),R=u(B);{var F=V=>{var K=xh(),se=u(K);z(()=>U(se,s(i))),v(V,K)};T(R,V=>{s(i)&&V(F)})}var ce=d(R,2);{var q=V=>{var K=Ph(),se=u(K);z(()=>U(se,s(l))),v(V,K)};T(ce,V=>{s(l)&&V(q)})}var I=d(ce,2);{var j=V=>{var K=Eh(),se=N(K),ye=u(se),L=d(u(ye),2),Q=d(ye,2),ee=u(Q),ie=d(se,2),_e=u(ie);_e.__click=[$h,_],z(()=>{L.disabled=s(o),Q.disabled=s(o),U(ee,s(o)?"Envoi...":"Envoyer l'email de réinitialisation"),_e.disabled=s(o)}),An("submit",se,D),qe(L,()=>s(g),re=>b(g,re)),v(V,K)},Y=V=>{var K=G(),se=N(K);{var ye=Q=>{var ee=Th(),ie=N(ee),_e=u(ie),re=d(u(_e),2),de=d(_e,2),H=d(u(de),2),ne=d(de,2),$e=u(ne),ke=d(ie,2),Ne=u(ke);Ne.__click=[Ah,_];var ae=d(Ne,2),be=d(u(ae));be.__click=[kh,a],z(()=>{re.disabled=s(o),H.disabled=s(o),ne.disabled=s(o),U($e,s(o)?"Connexion...":"Se connecter"),Ne.disabled=s(o),be.disabled=s(o)}),An("submit",ie,w),qe(re,()=>s(c),Ce=>b(c,Ce)),qe(H,()=>s(f),Ce=>b(f,Ce)),v(Q,ee)},L=Q=>{var ee=Mh(),ie=N(ee),_e=u(ie),re=d(u(_e),2),de=d(_e,2),H=d(u(de),2),ne=d(de,2),$e=d(u(ne),2),ke=d(ne,2),Ne=u(ke),ae=d(ie,2),be=d(u(ae));be.__click=[Ch,a],z(()=>{re.disabled=s(o),H.disabled=s(o),$e.disabled=s(o),ke.disabled=s(o),U(Ne,s(o)?"Création...":"Créer un compte"),be.disabled=s(o)}),An("submit",ie,$),qe(re,()=>s(h),Ce=>b(h,Ce)),qe(H,()=>s(m),Ce=>b(m,Ce)),qe($e,()=>s(p),Ce=>b(p,Ce)),v(Q,ee)};T(se,Q=>{s(a)?Q(ye):Q(L,!1)},!0)}v(V,K)};T(I,V=>{s(_)?V(j):V(Y,!1)})}z(()=>{U(C,s(_)?"Mot de passe oublié":s(a)?"Connexion":"Inscription"),M.disabled=s(o)}),v(e,A),X()}Je(["click","keydown"]);var Ih=(e,t,r)=>t(s(r)),Oh=y('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),Rh=(e,t,r)=>t(s(r)),qh=y('<button class="btn btn-ghost btn-sm btn-square" title="Fermer" aria-label="Fermer la notification"><!></button>'),jh=y('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!></div></div></div>'),Lh=y("<div></div>");function Bh(e,t){Z(t,!0);let r=Ae(t,"position",3,"toast-right toast-bottom"),n=Ae(t,"padding",3,"md");const a=J(()=>n()==="sm"?"px-2 py-0.5":""),o=J(()=>mt.toasts);function i(h){return h==="success"||h==="info"}function l(h){mt.dismiss(h.id)}function c(h){t.onShowDetails?.({id:h.id,message:h.message,details:h.details})}var f=Lh();at(f,21,()=>s(o),h=>h.id,(h,m)=>{var p=jh(),g=u(p),_=u(g),x=u(_);{var w=C=>{go(C,{class:"h-5 w-5 animate-spin"})};T(x,C=>{s(m).state==="loading"&&C(w)})}var $=d(x,2),D=u($),S=d(_,2),A=u(S);{var E=C=>{var M=Oh();M.__click=[Ih,c,m];var B=u(M);ho(B,{class:"h-3 w-3"}),v(C,M)};T(A,C=>{s(m).details&&C(E)})}var k=d(A,2);{var P=C=>{var M=qh();M.__click=[Rh,l,m];var B=u(M);Tt(B,{class:"ms-1 h-4 w-4"}),v(C,M)};T(k,C=>{(s(m).state==="error"||!i(s(m).state))&&C(P)})}z(()=>{Te(p,1,`alert alert-${s(m).state??""} max-w-sm ${s(a)??""} shadow-lg ${s(m).state==="error"?"":"alert-soft"}`),U(D,s(m).message)}),v(h,p)}),z(()=>Te(f,1,`toast ${r()??""} z-50`)),v(e,f),X()}Je(["click"]);var zh=y('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function Uh(e){var t=zh(),r=u(t),n=d(r,2);So(n,{class:"swap-on fill-current"});var a=d(n,2);bo(a,{class:"swap-off fill-current"}),v(e,t)}function Hh(e,t){b(t,!0)}var Vh=y('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),Wh=y('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),Gh=y('<div class="text-base-content/60"> </div>'),Qh=y('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),Kh=y('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),Yh=y('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Jh=y('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),Zh=y('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function Xh(e,t){Z(t,!0);let r,n=W(null),a=W(!0),o=W(!1),i=W(!1);function l(E,k,P){localStorage.setItem("appwrite-user-email",E),localStorage.setItem("appwrite-user-name",k)}async function c(){const E=Qa();r=vc(E);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const C=await(await window.AppwriteClient.getAccount()).get();l(C.email,C.name),await te.initialize(r,E)}catch(k){const P=k instanceof Error?k.message:"Erreur lors de l'initialisation";b(n,P,!0),console.error("[App] Erreur initialisation:",k)}finally{b(a,!1)}}Ws(async()=>{await c()});async function f(){b(i,!1),b(a,!0),b(n,null),await c()}vl(()=>{te.destroy()});async function h(){if(!(!r||s(o))){b(o,!0);try{const E=Qa();await te.forceReload(r,E)}catch(E){console.error("[App] Erreur lors du rechargement forcé:",E)}finally{b(o,!1)}}}const m=J(()=>s(n)||te.error),p=J(()=>s(a)||te.loading);var g=Zh(),_=N(g),x=u(_);Bh(x,{});var w=d(x,2);{var $=E=>{mh(E)},D=E=>{var k=Jh(),P=N(k),C=u(P),M=u(C),B=d(u(M),2),R=u(B);{var F=H=>{var ne=Vh();v(H,ne)};T(R,H=>{te.realtimeConnected&&H(F)})}var ce=d(R,2);{var q=H=>{var ne=Wh();v(H,ne)};T(ce,H=>{te.syncing&&H(q)})}var I=d(ce,2);{var j=H=>{var ne=Gh(),$e=u(ne);z(ke=>U($e,`Maj: ${ke??""}`),[()=>new Date(te.lastSync).toLocaleTimeString()]),v(H,ne)};T(I,H=>{te.lastSync&&H(j)})}var Y=d(I,2);Uh(Y);var V=d(Y,2);{var K=H=>{var ne=Qh();let $e;ne.__click=h;var ke=u(ne);Hc(ke,{class:"h-4 w-4"}),z(Ne=>{$e=Te(ne,1,"btn btn-outline btn-sm",null,$e,Ne),ne.disabled=s(o)||te.loading},[()=>({loading:s(o)||te.loading})]),v(H,ne)};T(V,H=>{s(n)||H(K)})}var se=d(V,2);{var ye=H=>{var ne=Kh(),$e=u(ne);$e.__click=[Hh,i];var ke=u($e);Rc(ke,{class:"mr-2 h-4 w-4"}),v(H,ne)};T(se,H=>{s(n)&&H(ye)})}var L=d(P,2),Q=u(L);{var ee=H=>{yh(H,{get message(){return s(m)}})},ie=H=>{var ne=G(),$e=N(ne);{var ke=Ne=>{_h(Ne,{get message(){return s(m)}})};T($e,Ne=>{s(m)&&Ne(ke)},!0)}v(H,ne)};T(Q,H=>{s(n)?H(ee):H(ie,!1)})}var _e=d(Q,2);{var re=H=>{hh(H,{})},de=H=>{var ne=G(),$e=N(ne);{var ke=Ne=>{var ae=Yh();v(Ne,ae)};T($e,Ne=>{!te.loading&&!s(n)&&Ne(ke)},!0)}v(H,ne)};T(_e,H=>{te.enrichedProducts.length>0?H(re):H(de,!1)})}v(E,k)};T(w,E=>{s(p)?E($):E(D,!1)})}var S=d(_,2);{var A=E=>{Nh(E,{onClose:()=>b(i,!1),onAuthSuccess:f})};T(S,E=>{s(i)&&E(A)})}v(e,g),X()}Je(["click"]);const Eo=document.getElementById("app_products");if(!Eo)throw new Error("Élément target non trouvé: #app_products");Qi(Xh,{target:Eo});
